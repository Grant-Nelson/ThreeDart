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
a[c]=function(){a[c]=function(){H.pC(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lA(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={lh:function lh(){},
kj:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
nD:function(){return new P.ds("No element")},
dn:function(a,b,c,d){if(c-b<=32)H.o9(a,b,c,d)
else H.o8(a,b,c,d)},
o9:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.b(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.b(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a0()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.b(a,q)
C.b.j(a,s,a[q])
s=q}C.b.j(a,s,t)}},
o8:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.c.a9(a4-a3+1,6),d=a3+e,c=a4-e,b=C.c.a9(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=q
q=r
r=p}C.b.j(a2,d,u)
C.b.j(a2,b,s)
C.b.j(a2,c,q)
if(a3<0||a3>=a2.length)return H.b(a2,a3)
C.b.j(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.b(a2,a4)
C.b.j(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.A(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.C()
if(k<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.j(a2,m,a2[o])
C.b.j(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a0()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.j(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.j(a2,o,a2[n])
C.b.j(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.b(a2,n)
C.b.j(a2,m,a2[n])
C.b.j(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.C()
if(g<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.j(a2,m,a2[o])
C.b.j(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a0()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a0()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.C()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.j(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.j(a2,o,a2[n])
C.b.j(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.b.j(a2,m,a2[n])
C.b.j(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.b(a2,a1)
C.b.j(a2,a3,a2[a1])
C.b.j(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.b(a2,a1)
C.b.j(a2,a4,a2[a1])
C.b.j(a2,a1,r)
H.dn(a2,a3,o-2,a5)
H.dn(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.b(a2,o)
if(!J.A(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.b(a2,n)
if(!J.A(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.j(a2,m,a2[o])
C.b.j(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.C()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.j(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.j(a2,o,a2[n])
C.b.j(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.b.j(a2,m,a2[n])
C.b.j(a2,n,l)}n=j
break}}}H.dn(a2,o,n,a5)}else H.dn(a2,o,n,a5)},
V:function V(a){this.a=a},
fp:function fp(){},
d6:function d6(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
hl:function hl(a,b,c){this.a=a
this.b=b
this.$ti=c},
hm:function hm(a,b){this.a=null
this.b=a
this.c=b},
j8:function j8(a,b,c){this.a=a
this.b=b
this.$ti=c},
j9:function j9(a,b){this.a=a
this.b=b},
cX:function cX(){},
iP:function iP(){},
dE:function dE(){},
nv:function(){throw H.c(P.w("Cannot modify unmodifiable Map"))},
eO:function(a){var u,t=H.pD(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
pn:function(a){return v.types[a]},
mR:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.N(a).$ix},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aj(a)
if(typeof u!=="string")throw H.c(H.ao(a))
return u},
cn:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
o1:function(a,b){var u,t,s,r,q,p
if(typeof a!=="string")H.m(H.ao(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.b(u,3)
t=u[3]
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.a6(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.a.F(r,p)|32)>s)return}return parseInt(a,b)},
o0:function(a){var u,t
if(typeof a!=="string")H.m(H.ao(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.l4(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
co:function(a){return H.nS(a)+H.mA(H.c0(a),0,null)},
nS:function(a){var u,t,s,r,q,p,o,n=J.N(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.J||!!n.$ibO){r=C.p(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.eO(t.length>1&&C.a.F(t,0)===36?C.a.ad(t,1):t)},
nT:function(){if(!!self.location)return self.location.href
return},
m2:function(a){var u,t,s,r,q=J.ac(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
o2:function(a){var u,t,s,r=H.d([],[P.u])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.r)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ao(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aO(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ao(s))}return H.m2(r)},
m3:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ao(s))
if(s<0)throw H.c(H.ao(s))
if(s>65535)return H.o2(a)}return H.m2(a)},
o3:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dj:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aO(u,10))>>>0,56320|u&1023)}}throw H.c(P.a6(a,0,1114111,null,null))},
bI:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o_:function(a){var u=H.bI(a).getFullYear()+0
return u},
nY:function(a){var u=H.bI(a).getMonth()+1
return u},
nU:function(a){var u=H.bI(a).getDate()+0
return u},
nV:function(a){var u=H.bI(a).getHours()+0
return u},
nX:function(a){var u=H.bI(a).getMinutes()+0
return u},
nZ:function(a){var u=H.bI(a).getSeconds()+0
return u},
nW:function(a){var u=H.bI(a).getMilliseconds()+0
return u},
e:function(a){throw H.c(H.ao(a))},
b:function(a,b){if(a==null)J.ac(a)
throw H.c(H.bq(a,b))},
bq:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aw(!0,b,s,null)
u=J.ac(a)
if(!(b<0)){if(typeof u!=="number")return H.e(u)
t=b>=u}else t=!0
if(t)return P.M(b,a,s,null,u)
return P.hY(b,s)},
pg:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bJ(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bJ(a,c,!0,b,"end",u)
return new P.aw(!0,b,"end",null)},
ao:function(a){return new P.aw(!0,a,null,null)},
bX:function(a){if(typeof a!=="number")throw H.c(H.ao(a))
return a},
c:function(a){var u
if(a==null)a=new P.cl()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mX})
u.name=""}else u.toString=H.mX
return u},
mX:function(){return J.aj(this.dartException)},
m:function(a){throw H.c(a)},
r:function(a){throw H.c(P.bB(a))},
aK:function(a){var u,t,s,r,q,p
a=H.mV(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.p])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iD(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iE:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mg:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m_:function(a,b){return new H.hM(a,b==null?null:b.method)},
li:function(a,b){var u=b==null,t=u?null:b.method
return new H.h8(a,t,u?null:b.receiver)},
a3:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.l_(a)
if(a==null)return
if(a instanceof H.c7)return f.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aO(t,16)&8191)===10)switch(s){case 438:return f.$1(H.li(H.f(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.m_(H.f(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.n_()
q=$.n0()
p=$.n1()
o=$.n2()
n=$.n5()
m=$.n6()
l=$.n4()
$.n3()
k=$.n8()
j=$.n7()
i=r.ai(u)
if(i!=null)return f.$1(H.li(u,i))
else{i=q.ai(u)
if(i!=null){i.method="call"
return f.$1(H.li(u,i))}else{i=p.ai(u)
if(i==null){i=o.ai(u)
if(i==null){i=n.ai(u)
if(i==null){i=m.ai(u)
if(i==null){i=l.ai(u)
if(i==null){i=o.ai(u)
if(i==null){i=k.ai(u)
if(i==null){i=j.ai(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.m_(u,i))}}return f.$1(new H.iO(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dq()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aw(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dq()
return a},
br:function(a){var u
if(a instanceof H.c7)return a.b
if(a==null)return new H.em(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.em(a)},
pk:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.j(0,a[u],a[t])}return b},
pr:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.i("Unsupported number of arguments for wrapped closure"))},
bY:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pr)
a.$identity=u
return u},
ns:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.ii().constructor.prototype):Object.create(new H.c3(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aB
if(typeof t!=="number")return t.p()
$.aB=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lM(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.no(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lM(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
no:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.pn,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lL:H.l6
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
np:function(a,b,c,d){var u=H.l6
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lM:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nr(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.np(t,!r,u,b)
if(t===0){r=$.aB
if(typeof r!=="number")return r.p()
$.aB=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c4
return new Function(r+H.f(q==null?$.c4=H.f1("self"):q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aB
if(typeof r!=="number")return r.p()
$.aB=r+1
o+=r
r="return function("+o+"){return this."
q=$.c4
return new Function(r+H.f(q==null?$.c4=H.f1("self"):q)+"."+H.f(u)+"("+o+");}")()},
nq:function(a,b,c,d){var u=H.l6,t=H.lL
switch(b?-1:a){case 0:throw H.c(H.o6("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nr:function(a,b){var u,t,s,r,q,p,o,n=$.c4
if(n==null)n=$.c4=H.f1("self")
u=$.lK
if(u==null)u=$.lK=H.f1("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nq(s,!q,t,b)
if(s===1){n="return function(){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+");"
u=$.aB
if(typeof u!=="number")return u.p()
$.aB=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+", "+o+");"
u=$.aB
if(typeof u!=="number")return u.p()
$.aB=u+1
return new Function(n+u+"}")()},
lA:function(a,b,c,d,e,f,g){return H.ns(a,b,c,d,!!e,!!f,g)},
l6:function(a){return a.a},
lL:function(a){return a.c},
f1:function(a){var u,t,s,r=new H.c3("self","target","receiver","name"),q=J.lf(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
pw:function(a,b){throw H.c(H.nn(a,H.eO(b.substring(2))))},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else u=!0
if(u)return a
H.pw(a,b)},
mM:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
lB:function(a,b){var u
if(typeof a=="function")return!0
u=H.mM(J.N(a))
if(u==null)return!1
return H.mz(u,null,b,null)},
nn:function(a,b){return new H.f2("CastError: "+P.ld(a)+": type '"+H.f(H.p9(a))+"' is not a subtype of type '"+b+"'")},
p9:function(a){var u,t=J.N(a)
if(!!t.$ic5){u=H.mM(t)
if(u!=null)return H.px(u)
return"Closure"}return H.co(a)},
pC:function(a){throw H.c(new P.fh(a))},
o6:function(a){return new H.i4(a)},
mN:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
c0:function(a){if(a==null)return
return a.$ti},
qd:function(a,b,c){return H.c1(a["$a"+H.f(c)],H.c0(b))},
pm:function(a,b,c,d){var u=H.c1(a["$a"+H.f(c)],H.c0(b))
return u==null?null:u[d]},
mP:function(a,b,c){var u=H.c1(a["$a"+H.f(b)],H.c0(a))
return u==null?null:u[c]},
cI:function(a,b){var u=H.c0(a)
return u==null?null:u[b]},
px:function(a){return H.bo(a,null)},
bo:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.eO(a[0].name)+H.mA(a,1,b)
if(typeof a=="function")return H.eO(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.f(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.f(b[t])}if('func' in a)return H.oJ(a,b)
if('futureOr' in a)return"FutureOr<"+H.bo("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oJ:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],[P.p])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.a.p(p,a0[m])
l=u[q]
if(l!=null&&l!==P.P)p+=" extends "+H.bo(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bo(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bo(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bo(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.pj(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bo(d[c],a0)+(" "+H.f(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
mA:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.W("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bo(p,c)}return"<"+u.h(0)+">"},
c1:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
eL:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.c0(a)
t=J.N(a)
if(t[b]==null)return!1
return H.mK(H.c1(t[d],u),null,c,null)},
mK:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ax(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ax(a[t],b,c[t],d))return!1
return!0},
qb:function(a,b,c){return a.apply(b,H.c1(J.N(b)["$a"+H.f(c)],H.c0(b)))},
ax:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="P"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="P"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ax(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="Y")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.ax("type" in a?a.type:l,b,s,d)
else if(H.ax(a,b,s,d))return!0
else{if(!('$i'+"ae" in t.prototype))return!1
r=t.prototype["$a"+"ae"]
q=H.c1(r,u?a.slice(1):l)
return H.ax(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.mz(a,b,c,d)
if('func' in a)return c.name==="pI"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mK(H.c1(m,u),b,p,d)},
mz:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ax(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ax(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ax(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ax(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pu(h,b,g,d)},
pu:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.ax(c[s],d,a[s],b))return!1}return!0},
qc:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ps:function(a){var u,t,s,r,q=$.mQ.$1(a),p=$.kg[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kn[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.mJ.$2(a,q)
if(q!=null){p=$.kg[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kn[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kX(u)
$.kg[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kn[q]=u
return u}if(s==="-"){r=H.kX(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mT(a,u)
if(s==="*")throw H.c(P.iN(q))
if(v.leafTags[q]===true){r=H.kX(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mT(a,u)},
mT:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lD(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kX:function(a){return J.lD(a,!1,null,!!a.$ix)},
pt:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kX(u)
else return J.lD(u,c,null,null)},
pp:function(){if(!0===$.lC)return
$.lC=!0
H.pq()},
pq:function(){var u,t,s,r,q,p,o,n
$.kg=Object.create(null)
$.kn=Object.create(null)
H.po()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mU.$1(q)
if(p!=null){o=H.pt(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
po:function(){var u,t,s,r,q,p,o=C.z()
o=H.bW(C.A,H.bW(C.B,H.bW(C.q,H.bW(C.q,H.bW(C.C,H.bW(C.D,H.bW(C.E(C.p),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mQ=new H.kk(r)
$.mJ=new H.kl(q)
$.mU=new H.km(p)},
bW:function(a,b){return a(b)||b},
lS:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.O("Illegal RegExp pattern ("+String(p)+")",a,null))},
pA:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pi:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mV:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
mW:function(a,b,c){var u=H.pB(a,b,c)
return u},
pB:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mV(b),'g'),H.pi(c))},
fa:function fa(){},
fb:function fb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iD:function iD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hM:function hM(a,b){this.a=a
this.b=b},
h8:function h8(a,b,c){this.a=a
this.b=b
this.c=c},
iO:function iO(a){this.a=a},
c7:function c7(a,b){this.a=a
this.b=b},
l_:function l_(a){this.a=a},
em:function em(a){this.a=a
this.b=null},
c5:function c5(){},
ip:function ip(){},
ii:function ii(){},
c3:function c3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f2:function f2(a){this.a=a},
i4:function i4(a){this.a=a},
I:function I(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
h7:function h7(a){this.a=a},
hb:function hb(a,b){this.a=a
this.b=b
this.c=null},
hc:function hc(a,b){this.a=a
this.$ti=b},
hd:function hd(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kk:function kk(a){this.a=a},
kl:function kl(a){this.a=a},
km:function km(a){this.a=a},
h6:function h6(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e5:function e5(a){this.b=a},
ja:function ja(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
bT:function(a){return a},
nQ:function(a){return new Int8Array(a)},
aM:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bq(b,a))},
oH:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.pg(a,b,c))
return b},
ci:function ci(){},
bg:function bg(){},
dc:function dc(){},
cj:function cj(){},
dd:function dd(){},
hH:function hH(){},
hI:function hI(){},
hJ:function hJ(){},
hK:function hK(){},
hL:function hL(){},
de:function de(){},
ck:function ck(){},
cw:function cw(){},
cx:function cx(){},
cy:function cy(){},
cz:function cz(){},
pj:function(a){return J.lQ(a?Object.keys(a):[],null)},
pD:function(a){return v.mangledGlobalNames[a]},
pv:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ki:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lC==null){H.pp()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iN("Return interceptor for "+H.f(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lF()]
if(r!=null)return r
r=H.ps(a)
if(r!=null)return r
if(typeof a=="function")return C.L
u=Object.getPrototypeOf(a)
if(u==null)return C.v
if(u===Object.prototype)return C.v
if(typeof s=="function"){Object.defineProperty(s,$.lF(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
nE:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.l5(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a6(a,0,4294967295,"length",null))
return J.lQ(new Array(a),b)},
lQ:function(a,b){return J.lf(H.d(a,[b]))},
lf:function(a){a.fixed$length=Array
return a},
lR:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
nF:function(a,b){var u,t
for(u=a.length;b<u;){t=C.a.F(a,b)
if(t!==32&&t!==13&&!J.lR(t))break;++b}return b},
nG:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.a.S(a,u)
if(t!==32&&t!==13&&!J.lR(t))break}return b},
N:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d1.prototype
return J.d0.prototype}if(typeof a=="string")return J.bb.prototype
if(a==null)return J.d2.prototype
if(typeof a=="boolean")return J.h5.prototype
if(a.constructor==Array)return J.ba.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bc.prototype
return a}if(a instanceof P.P)return a
return J.ki(a)},
cH:function(a){if(typeof a=="string")return J.bb.prototype
if(a==null)return a
if(a.constructor==Array)return J.ba.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bc.prototype
return a}if(a instanceof P.P)return a
return J.ki(a)},
kh:function(a){if(a==null)return a
if(a.constructor==Array)return J.ba.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bc.prototype
return a}if(a instanceof P.P)return a
return J.ki(a)},
pl:function(a){if(typeof a=="number")return J.cd.prototype
if(typeof a=="string")return J.bb.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bO.prototype
return a},
c_:function(a){if(typeof a=="string")return J.bb.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bO.prototype
return a},
eM:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bc.prototype
return a}if(a instanceof P.P)return a
return J.ki(a)},
A:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).v(a,b)},
z:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mR(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cH(a).i(a,b)},
l0:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.mR(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.kh(a).j(a,b,c)},
ng:function(a,b){return J.c_(a).F(a,b)},
nh:function(a,b,c){return J.eM(a).hs(a,b,c)},
ni:function(a,b,c,d){return J.eM(a).hX(a,b,c,d)},
nj:function(a,b){return J.c_(a).S(a,b)},
l1:function(a,b){return J.pl(a).i6(a,b)},
l2:function(a,b){return J.kh(a).I(a,b)},
nk:function(a,b,c,d){return J.eM(a).ip(a,b,c,d)},
l3:function(a,b){return J.kh(a).q(a,b)},
eP:function(a){return J.eM(a).gca(a)},
cK:function(a){return J.N(a).gH(a)},
bv:function(a){return J.kh(a).ga2(a)},
ac:function(a){return J.cH(a).gk(a)},
lH:function(a,b){return J.c_(a).cm(a,b)},
nl:function(a,b){return J.eM(a).j6(a,b)},
lI:function(a,b,c){return J.c_(a).u(a,b,c)},
aj:function(a){return J.N(a).h(a)},
l4:function(a){return J.c_(a).en(a)},
a:function a(){},
h5:function h5(){},
d2:function d2(){},
d3:function d3(){},
hQ:function hQ(){},
bO:function bO(){},
bc:function bc(){},
ba:function ba(a){this.$ti=a},
lg:function lg(a){this.$ti=a},
a9:function a9(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
cd:function cd(){},
d1:function d1(){},
d0:function d0(){},
bb:function bb(){}},P={
ok:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pa()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bY(new P.je(s),1)).observe(u,{childList:true})
return new P.jd(s,u,t)}else if(self.setImmediate!=null)return P.pb()
return P.pc()},
ol:function(a){self.scheduleImmediate(H.bY(new P.jf(a),0))},
om:function(a){self.setImmediate(H.bY(new P.jg(a),0))},
on:function(a){P.lo(C.n,a)},
lo:function(a,b){var u=C.c.a9(a.a,1000)
return P.oq(u<0?0:u,b)},
mf:function(a,b){var u=C.c.a9(a.a,1000)
return P.or(u<0?0:u,b)},
oq:function(a,b){var u=new P.et()
u.eJ(a,b)
return u},
or:function(a,b){var u=new P.et()
u.eK(a,b)
return u},
a1:function(a){return new P.jb(new P.ah($.D,[a]),[a])},
a0:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
a8:function(a,b){P.oG(a,b)},
a_:function(a,b){b.cb(0,a)},
Z:function(a,b){b.bq(H.a3(a),H.br(a))},
oG:function(a,b){var u,t=null,s=new P.k1(b),r=new P.k2(b),q=J.N(a)
if(!!q.$iah)a.di(s,r,t)
else if(!!q.$iae)a.cA(s,r,t)
else{u=new P.ah($.D,[null])
u.a=4
u.c=a
u.di(s,t,t)}},
a2:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.D.eh(new P.ke(u))},
mr:function(a,b){var u,t,s
b.a=1
try{a.cA(new P.jr(b),new P.js(b),null)}catch(s){u=H.a3(s)
t=H.br(s)
P.py(new P.jt(b,u,t))}},
jq:function(a,b){var u,t
for(;u=a.a,u===2;)a=a.c
if(u>=4){t=b.bk()
b.a=a.a
b.c=a.c
P.bQ(b,t)}else{t=b.c
b.a=2
b.c=a
a.da(t)}},
bQ:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null,i={},h=i.a=a
for(;!0;){u={}
t=h.a===8
if(b==null){if(t){s=h.c
P.kb(j,j,h.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.bQ(i.a,b)}h=i.a
q=h.c
u.a=t
u.b=q
s=!t
if(s){p=b.c
p=(p&1)!==0||(p&15)===8}else p=!0
if(p){p=b.b
o=p.b
if(t){n=h.b===o
n=!(n||n)}else n=!1
if(n){P.kb(j,j,h.b,q.a,q.b)
return}m=$.D
if(m!==o)$.D=o
else m=j
h=b.c
if((h&15)===8)new P.jy(i,u,b,t).$0()
else if(s){if((h&1)!==0)new P.jx(u,b,q).$0()}else if((h&2)!==0)new P.jw(i,u,b).$0()
if(m!=null)$.D=m
h=u.b
if(!!J.N(h).$iae){if(h.a>=4){l=p.c
p.c=null
b=p.bl(l)
p.a=h.a
p.c=h.c
i.a=h
continue}else P.jq(h,p)
return}}k=b.b
l=k.c
k.c=null
b=k.bl(l)
h=u.a
s=u.b
if(!h){k.a=4
k.c=s}else{k.a=8
k.c=s}i.a=k
h=k}},
p5:function(a,b){if(H.lB(a,{func:1,args:[P.P,P.au]}))return b.eh(a)
if(H.lB(a,{func:1,args:[P.P]}))return a
throw H.c(P.l5(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
p4:function(){var u,t
for(;u=$.bU,u!=null;){$.cG=null
t=u.b
$.bU=t
if(t==null)$.cF=null
u.a.$0()}},
p8:function(){$.ly=!0
try{P.p4()}finally{$.cG=null
$.ly=!1
if($.bU!=null)$.lG().$1(P.mL())}},
mF:function(a){var u=new P.dN(a)
if($.bU==null){$.bU=$.cF=u
if(!$.ly)$.lG().$1(P.mL())}else $.cF=$.cF.b=u},
p7:function(a){var u,t,s=$.bU
if(s==null){P.mF(a)
$.cG=$.cF
return}u=new P.dN(a)
t=$.cG
if(t==null){u.b=s
$.bU=$.cG=u}else{u.b=t.b
$.cG=t.b=u
if(u.b==null)$.cF=u}},
py:function(a){var u=null,t=$.D
if(C.e===t){P.bV(u,u,C.e,a)
return}P.bV(u,u,t,t.c7(a))},
pK:function(a){if(a==null)H.m(P.nm("stream"))
return new P.jN()},
me:function(a,b){var u=$.D
if(u===C.e)return P.lo(a,b)
return P.lo(a,u.c7(b))},
oc:function(a,b){var u=$.D
if(u===C.e)return P.mf(a,b)
return P.mf(a,u.dt(b,P.dx))},
kb:function(a,b,c,d,e){var u={}
u.a=d
P.p7(new P.kc(u,e))},
mB:function(a,b,c,d){var u,t=$.D
if(t===c)return d.$0()
$.D=c
u=t
try{t=d.$0()
return t}finally{$.D=u}},
mC:function(a,b,c,d,e){var u,t=$.D
if(t===c)return d.$1(e)
$.D=c
u=t
try{t=d.$1(e)
return t}finally{$.D=u}},
p6:function(a,b,c,d,e,f){var u,t=$.D
if(t===c)return d.$2(e,f)
$.D=c
u=t
try{t=d.$2(e,f)
return t}finally{$.D=u}},
bV:function(a,b,c,d){var u=C.e!==c
if(u)d=!(!u||!1)?c.c7(d):c.i4(d)
P.mF(d)},
je:function je(a){this.a=a},
jd:function jd(a,b,c){this.a=a
this.b=b
this.c=c},
jf:function jf(a){this.a=a},
jg:function jg(a){this.a=a},
et:function et(){this.c=0},
jS:function jS(a,b){this.a=a
this.b=b},
jR:function jR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jb:function jb(a,b){this.a=a
this.b=!1
this.$ti=b},
k1:function k1(a){this.a=a},
k2:function k2(a){this.a=a},
ke:function ke(a){this.a=a},
ae:function ae(){},
dP:function dP(){},
jc:function jc(a,b){this.a=a
this.$ti=b},
dZ:function dZ(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d},
ah:function ah(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jn:function jn(a,b){this.a=a
this.b=b},
jv:function jv(a,b){this.a=a
this.b=b},
jr:function jr(a){this.a=a},
js:function js(a){this.a=a},
jt:function jt(a,b,c){this.a=a
this.b=b
this.c=c},
jp:function jp(a,b){this.a=a
this.b=b},
ju:function ju(a,b){this.a=a
this.b=b},
jo:function jo(a,b,c){this.a=a
this.b=b
this.c=c},
jy:function jy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jz:function jz(a){this.a=a},
jx:function jx(a,b,c){this.a=a
this.b=b
this.c=c},
jw:function jw(a,b,c){this.a=a
this.b=b
this.c=c},
dN:function dN(a){this.a=a
this.b=null},
dt:function dt(){},
il:function il(){},
jN:function jN(){},
dx:function dx(){},
bw:function bw(a,b){this.a=a
this.b=b},
k0:function k0(){},
kc:function kc(a,b){this.a=a
this.b=b},
jG:function jG(){},
jI:function jI(a,b){this.a=a
this.b=b},
jH:function jH(a,b){this.a=a
this.b=b},
jJ:function jJ(a,b,c){this.a=a
this.b=b
this.c=c},
nI:function(a,b){return new H.I([a,b])},
lT:function(a,b){return new H.I([a,b])},
nJ:function(a){return H.pk(a,new H.I([null,null]))},
nK:function(a){return new P.jD([a])},
lt:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
op:function(a,b){var u=new P.e3(a,b)
u.c=a.e
return u},
nC:function(a,b,c){var u,t
if(P.lz(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.p])
$.ai.push(a)
try{P.oK(a,u)}finally{if(0>=$.ai.length)return H.b($.ai,-1)
$.ai.pop()}t=P.mc(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
le:function(a,b,c){var u,t
if(P.lz(a))return b+"..."+c
u=new P.W(b)
$.ai.push(a)
try{t=u
t.a=P.mc(t.a,a,", ")}finally{if(0>=$.ai.length)return H.b($.ai,-1)
$.ai.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lz:function(a){var u,t
for(u=$.ai.length,t=0;t<u;++t)if(a===$.ai[t])return!0
return!1},
oK:function(a,b){var u,t,s,r,q,p,o,n=a.ga2(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.D())return
u=H.f(n.gT(n))
b.push(u)
m+=u.length+2;++l}if(!n.D()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gT(n);++l
if(!n.D()){if(l<=4){b.push(H.f(r))
return}t=H.f(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gT(n);++l
for(;n.D();r=q,q=p){p=n.gT(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.f(r)
t=H.f(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
lU:function(a,b,c){var u=P.nI(b,c)
a.q(0,new P.he(u))
return u},
lj:function(a){var u,t={}
if(P.lz(a))return"{...}"
u=new P.W("")
try{$.ai.push(a)
u.a+="{"
t.a=!0
J.l3(a,new P.hj(t,u))
u.a+="}"}finally{if(0>=$.ai.length)return H.b($.ai,-1)
$.ai.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jD:function jD(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jE:function jE(a){this.a=a
this.c=this.b=null},
e3:function e3(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
he:function he(a){this.a=a},
hf:function hf(){},
t:function t(){},
hi:function hi(){},
hj:function hj(a,b){this.a=a
this.b=b},
aP:function aP(){},
jT:function jT(){},
hk:function hk(){},
dF:function dF(a,b){this.a=a
this.$ti=b},
jK:function jK(){},
e4:function e4(){},
ez:function ez(){},
of:function(a,b,c,d){if(b instanceof Uint8Array)return P.og(!1,b,c,d)
return},
og:function(a,b,c,d){var u,t,s=$.n9()
if(s==null)return
u=0===c
if(u&&!0)return P.lr(s,b)
t=b.length
d=P.bj(c,d,t)
if(u&&d===t)return P.lr(s,b)
return P.lr(s,b.subarray(c,d))},
lr:function(a,b){if(P.oi(b))return
return P.oj(a,b)},
oj:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.a3(t)}return},
oi:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
oh:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.a3(t)}return},
mE:function(a,b,c){var u,t,s
for(u=J.cH(a),t=b;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.am()
if((s&127)!==s)return t-b}return c-b},
lJ:function(a,b,c,d,e,f){if(C.c.bb(f,4)!==0)throw H.c(P.O("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.O("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.O("Invalid base64 padding, more than two '=' characters",a,b))},
eZ:function eZ(){},
f_:function f_(){},
f7:function f7(){},
fc:function fc(){},
fq:function fq(){},
iX:function iX(){},
iZ:function iZ(){},
k_:function k_(a){this.b=0
this.c=a},
iY:function iY(a){this.a=a},
jZ:function jZ(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
bs:function(a,b,c){var u=H.o1(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.O(a,null,null))},
ph:function(a){var u=H.o0(a)
if(u!=null)return u
throw H.c(P.O("Invalid double",a,null))},
ny:function(a){if(a instanceof H.c5)return a.h(0)
return"Instance of '"+H.f(H.co(a))+"'"},
nL:function(a,b,c){var u,t,s=J.nE(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
lV:function(a,b,c){var u,t=H.d([],[c])
for(u=J.bv(a);u.D();)t.push(u.gT(u))
if(b)return t
return J.lf(t)},
cq:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.bj(b,c,u)
return H.m3(b>0||c<u?C.b.ey(a,b,c):a)}if(!!J.N(a).$ick)return H.o3(a,b,P.bj(b,c,a.length))
return P.oa(a,b,c)},
oa:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.a6(b,0,J.ac(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.a6(c,b,J.ac(a),q,q))
t=J.bv(a)
for(s=0;s<b;++s)if(!t.D())throw H.c(P.a6(b,0,s,q,q))
r=[]
if(u)for(;t.D();)r.push(t.gT(t))
else for(s=b;s<c;++s){if(!t.D())throw H.c(P.a6(c,b,s,q,q))
r.push(t.gT(t))}return H.m3(r)},
ln:function(a){return new H.h6(a,H.lS(a,!1,!0,!1,!1,!1))},
mc:function(a,b,c){var u=J.bv(b)
if(!u.D())return a
if(c.length===0){do a+=H.f(u.gT(u))
while(u.D())}else{a+=H.f(u.gT(u))
for(;u.D();)a=a+c+H.f(u.gT(u))}return a},
dG:function(){var u=H.nT()
if(u!=null)return P.oe(u)
throw H.c(P.w("'Uri.base' is not supported"))},
jY:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.f){u=$.ne().b
if(typeof b!=="string")H.m(H.ao(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.gim().cc(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dj(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nw:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nx:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cS:function(a){if(a>=10)return""+a
return"0"+a},
lN:function(a){return new P.b6(1000*a)},
ld:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aj(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ny(a)},
cL:function(a){return new P.aw(!1,null,null,a)},
l5:function(a,b,c){return new P.aw(!0,a,b,c)},
nm:function(a){return new P.aw(!1,null,a,"Must not be null")},
hY:function(a,b){return new P.bJ(null,null,!0,a,b,"Value not in range")},
a6:function(a,b,c,d,e){return new P.bJ(b,c,!0,a,d,"Invalid value")},
bj:function(a,b,c){if(0>a||a>c)throw H.c(P.a6(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.a6(b,a,c,"end",null))
return b}return c},
m5:function(a,b){if(typeof a!=="number")return a.C()
if(a<0)throw H.c(P.a6(a,0,null,b,null))},
M:function(a,b,c,d,e){var u=e==null?J.ac(b):e
return new P.fF(u,!0,a,c,"Index out of range")},
w:function(a){return new P.iQ(a)},
iN:function(a){return new P.iM(a)},
mb:function(a){return new P.ds(a)},
bB:function(a){return new P.f9(a)},
i:function(a){return new P.dW(a)},
O:function(a,b,c){return new P.fA(a,b,c)},
nM:function(a,b,c){var u,t,s=H.d([],[c])
C.b.sk(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.b(s,u)
s[u]=t}return s},
eN:function(a){H.pv(a)},
oe:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.F(a,4)^58)*3|C.a.F(a,0)^100|C.a.F(a,1)^97|C.a.F(a,2)^116|C.a.F(a,3)^97)>>>0
if(u===0)return P.mh(e<e?C.a.u(a,0,e):a,5,f).gep()
else if(u===32)return P.mh(C.a.u(a,5,e),0,f).gep()}t=new Array(8)
t.fixed$length=Array
s=H.d(t,[P.u])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.mD(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.bC()
if(r>=0)if(P.mD(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.p()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.C()
if(typeof n!=="number")return H.e(n)
if(m<n)n=m
if(typeof o!=="number")return o.C()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.C()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.C()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.a7(a,"..",o)))j=n>o+2&&C.a.a7(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a7(a,"file",0)){if(q<=0){if(!C.a.a7(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.a.u(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.aV(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a7(a,"http",0)){if(t&&p+3===o&&C.a.a7(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aV(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a7(a,"https",0)){if(t&&p+4===o&&C.a.a7(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aV(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.u(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jL(a,r,q,p,o,n,m,k)}return P.os(a,0,e,r,q,p,o,n,m,k)},
mj:function(a){var u=P.p
return C.b.iu(H.d(a.split("&"),[u]),P.lT(u,u),new P.iV(C.f))},
od:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iS(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.S(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.bs(C.a.u(a,s,t),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.b(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.bs(C.a.u(a,s,c),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
if(r>=u)return H.b(j,r)
j[r]=p
return j},
mi:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iT(a),d=new P.iU(e,a)
if(a.length<2)e.$1("address is too short")
u=H.d([],[P.u])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.S(a,t)
if(p===58){if(t===b){++t
if(C.a.S(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gaF(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.od(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.b(l,i)
l[i]=0
f=i+1
if(f>=k)return H.b(l,f)
l[f]=0
i+=2}else{f=C.c.aO(h,8)
if(i<0||i>=k)return H.b(l,i)
l[i]=f
f=i+1
if(f>=k)return H.b(l,f)
l[f]=h&255
i+=2}}return l},
os:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oA(a,b,d)
else{if(d===b)P.bS(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oB(a,u,e-1):""
s=P.ox(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.e(g)
q=r<g?P.oz(P.bs(C.a.u(a,r,g),new P.jU(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oy(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.C()
o=h<i?P.lv(a,h+1,i,n):n
return new P.bR(j,t,s,q,p,o,i<c?P.ow(a,i+1,c):n)},
mt:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bS:function(a,b,c){throw H.c(P.O(c,a,b))},
oz:function(a,b){if(a!=null&&a===P.mt(b))return
return a},
ox:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.S(a,b)===91){if(typeof c!=="number")return c.n()
u=c-1
if(C.a.S(a,u)!==93)P.bS(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.ou(a,t,u)
if(typeof s!=="number")return s.C()
if(s<u){r=s+1
q=P.my(a,C.a.a7(a,"25",r)?s+3:r,u,"%25")}else q=""
P.mi(a,t,s)
return C.a.u(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.e(c)
p=b
for(;p<c;++p)if(C.a.S(a,p)===58){s=C.a.bt(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.my(a,C.a.a7(a,"25",r)?s+3:r,c,"%25")}else q=""
P.mi(a,b,s)
return"["+C.a.u(a,b,s)+q+"]"}return P.oD(a,b,c)},
ou:function(a,b,c){var u,t=C.a.bt(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.e(c)
u=t<c}else u=!1
return u?t:c},
my:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.W(d):null
if(typeof c!=="number")return H.e(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.S(a,u)
if(r===37){q=P.lw(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.W("")
o=l.a+=C.a.u(a,t,u)
if(p)q=C.a.u(a,u,u+3)
else if(q==="%")P.bS(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.W("")
if(t<u){l.a+=C.a.u(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.S(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.W("")
l.a+=C.a.u(a,t,u)
l.a+=P.lu(r)
u+=m
t=u}}}if(l==null)return C.a.u(a,b,c)
if(t<c)l.a+=C.a.u(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
oD:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.e(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.S(a,u)
if(q===37){p=P.lw(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.W("")
n=C.a.u(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.u(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.b(C.t,o)
o=(C.t[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.W("")
if(t<u){s.a+=C.a.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.b(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bS(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.S(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.W("")
n=C.a.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.lu(q)
u+=l
t=u}}}}if(s==null)return C.a.u(a,b,c)
if(t<c){n=C.a.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oA:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mv(C.a.F(a,b)))P.bS(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.b(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bS(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.u(a,b,c)
return P.ot(t?a.toLowerCase():a)},
ot:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oB:function(a,b,c){return P.cE(a,b,c,C.N,!1)},
oy:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cE(a,b,c,C.u,!0):C.i.jy(d,new P.jV(),P.p).w(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.af(u,"/"))u="/"+u
return P.oC(u,e,f)},
oC:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.af(a,"/"))return P.oE(a,!u||c)
return P.oF(a)},
lv:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.cL("Both query and queryParameters specified"))
return P.cE(a,b,c,C.l,!0)}if(d==null)return
u=new P.W("")
t.a=""
d.q(0,new P.jW(new P.jX(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
ow:function(a,b,c){return P.cE(a,b,c,C.l,!0)},
lw:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.S(a,b+1)
t=C.a.S(a,p)
s=H.kj(u)
r=H.kj(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aO(q,4)
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.dj(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.u(a,b,b+3).toUpperCase()
return},
lu:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.u])
t[0]=37
t[1]=C.a.F(m,a>>>4)
t[2]=C.a.F(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.u])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.hD(a,6*r)&63|s
if(q>=u)return H.b(t,q)
t[q]=37
o=q+1
n=C.a.F(m,p>>>4)
if(o>=u)return H.b(t,o)
t[o]=n
n=q+2
o=C.a.F(m,p&15)
if(n>=u)return H.b(t,n)
t[n]=o
q+=3}}return P.cq(t,0,null)},
cE:function(a,b,c,d,e){var u=P.mx(a,b,c,d,e)
return u==null?C.a.u(a,b,c):u},
mx:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.C()
if(typeof c!=="number")return H.e(c)
if(!(o<c))break
c$0:{u=C.a.S(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.b(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.lw(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.b(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bS(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.S(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.lu(u)}}if(m==null)m=new P.W("")
m.a+=C.a.u(a,n,o)
m.a+=H.f(s)
if(typeof r!=="number")return H.e(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.C()
if(n<c)m.a+=C.a.u(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
mw:function(a){if(C.a.af(a,"."))return!0
return C.a.cm(a,"/.")!==-1},
oF:function(a){var u,t,s,r,q,p,o
if(!P.mw(a))return a
u=H.d([],[P.p])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.A(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.b(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.w(u,"/")},
oE:function(a,b){var u,t,s,r,q,p
if(!P.mw(a))return!b?P.mu(a):a
u=H.d([],[P.p])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gaF(u)!==".."){if(0>=u.length)return H.b(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.b(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gaF(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.b(u,0)
t=P.mu(u[0])
if(0>=u.length)return H.b(u,0)
u[0]=t}return C.b.w(u,"/")},
mu:function(a){var u,t,s,r=a.length
if(r>=2&&P.mv(J.ng(a,0)))for(u=1;u<r;++u){t=C.a.F(a,u)
if(t===58)return C.a.u(a,0,u)+"%3A"+C.a.ad(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.b(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
ov:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.cL("Invalid URL encoding"))}}return u},
lx:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.F(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.f!==d)s=!1
else s=!0
if(s)return C.a.u(a,b,c)
else r=new H.V(C.a.u(a,b,c))}else{r=H.d([],[P.u])
for(s=a.length,q=b;q<c;++q){t=C.a.F(a,q)
if(t>127)throw H.c(P.cL("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.cL("Truncated URI"))
r.push(P.ov(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iY(!1).cc(r)},
mv:function(a){var u=a|32
return 97<=u&&u<=122},
mh:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.u])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.F(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.O(m,a,t))}}if(s<0&&t>b)throw H.c(P.O(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.F(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gaF(l)
if(r!==44||t!==p+7||!C.a.a7(a,"base64",p+1))throw H.c(P.O("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.y.iF(0,a,o,u)
else{n=P.mx(a,o,u,C.l,!0)
if(n!=null)a=C.a.aV(a,o,u,n)}return new P.iR(a,l,c)},
oI:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nM(22,new P.k4(),P.bM),n=new P.k3(o),m=new P.k5(),l=new P.k6(),k=n.$2(0,225)
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
mD:function(a,b,c,d,e){var u,t,s,r,q,p=$.nf()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.b(p,d)
t=p[d]
s=C.a.F(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.b(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.b(e,q)
e[q]=u}return d},
bp:function bp(){},
ak:function ak(a,b){this.a=a
this.b=b},
K:function K(){},
b6:function b6(a){this.a=a},
fn:function fn(){},
fo:function fo(){},
b7:function b7(){},
cl:function cl(){},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bJ:function bJ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fF:function fF(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iQ:function iQ(a){this.a=a},
iM:function iM(a){this.a=a},
ds:function ds(a){this.a=a},
f9:function f9(a){this.a=a},
hP:function hP(){},
dq:function dq(){},
fh:function fh(a){this.a=a},
dW:function dW(a){this.a=a},
fA:function fA(a,b,c){this.a=a
this.b=b
this.c=c},
u:function u(){},
k:function k(){},
h4:function h4(){},
q:function q(){},
T:function T(){},
Y:function Y(){},
ap:function ap(){},
P:function P(){},
lm:function lm(){},
au:function au(){},
p:function p(){},
W:function W(a){this.a=a},
iV:function iV(a){this.a=a},
iS:function iS(a){this.a=a},
iT:function iT(a){this.a=a},
iU:function iU(a,b){this.a=a
this.b=b},
bR:function bR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jU:function jU(a,b){this.a=a
this.b=b},
jV:function jV(){},
jX:function jX(a,b){this.a=a
this.b=b},
jW:function jW(a){this.a=a},
iR:function iR(a,b,c){this.a=a
this.b=b
this.c=c},
k4:function k4(){},
k3:function k3(a){this.a=a},
k5:function k5(){},
k6:function k6(){},
jL:function jL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jk:function jk(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
pf:function(a){var u,t=J.N(a)
if(!!t.$iaO){u=t.gdA(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ey(a.data,a.height,a.width)},
pe:function(a){if(a instanceof P.ey)return{data:a.a,height:a.b,width:a.c}
return a},
b1:function(a){var u,t,s,r,q
if(a==null)return
u=P.lT(P.p,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r){q=t[r]
u.j(0,q,a[q])}return u},
pd:function(a){var u={}
a.q(0,new P.kf(u))
return u},
jO:function jO(){},
jP:function jP(a,b){this.a=a
this.b=b},
ey:function ey(a,b,c){this.a=a
this.b=b
this.c=c},
kf:function kf(a){this.a=a},
eq:function eq(a,b){this.a=a
this.b=b},
fw:function fw(a,b){this.a=a
this.b=b},
fx:function fx(){},
fy:function fy(){},
jC:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oo:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jF:function jF(){},
an:function an(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bd:function bd(){},
ha:function ha(){},
bh:function bh(){},
hN:function hN(){},
hU:function hU(){},
im:function im(){},
n:function n(){},
bk:function bk(){},
iC:function iC(){},
e1:function e1(){},
e2:function e2(){},
ed:function ed(){},
ee:function ee(){},
eo:function eo(){},
ep:function ep(){},
ew:function ew(){},
ex:function ex(){},
bM:function bM(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(a){this.a=a},
eY:function eY(){},
bx:function bx(){},
hO:function hO(){},
dO:function dO(){},
dl:function dl(){},
ih:function ih(){},
ek:function ek(){},
el:function el(){}},W={
l8:function(){var u=document.createElement("canvas")
return u},
lc:function(a){return"wheel"},
lO:function(a){return W.nB(a,null,null).el(new W.fD(),P.p)},
nB:function(a,b,c){var u=W.bC,t=new P.ah($.D,[u]),s=new P.jc(t,[u]),r=new XMLHttpRequest()
C.I.iO(r,"GET",a,!0)
W.U(r,"load",new W.fE(r,s),!1)
W.U(r,"error",s.gi7(),!1)
r.send()
return t},
lP:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.a3(u)}return s},
jB:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ms:function(a,b,c,d){var u=W.jB(W.jB(W.jB(W.jB(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
U:function(a,b,c,d){var u=W.mI(new W.jm(c),W.j)
if(u!=null&&!0)J.ni(a,b,u,!1)
return new W.jl(a,b,u,!1)},
mI:function(a,b){var u=$.D
if(u===C.e)return a
return u.dt(a,b)},
o:function o(){},
eQ:function eQ(){},
eS:function eS(){},
eT:function eT(){},
by:function by(){},
bA:function bA(){},
b4:function b4(){},
fd:function fd(){},
G:function G(){},
c6:function c6(){},
fe:function fe(){},
aq:function aq(){},
aC:function aC(){},
ff:function ff(){},
fg:function fg(){},
fi:function fi(){},
fk:function fk(){},
cU:function cU(){},
cV:function cV(){},
fl:function fl(){},
fm:function fm(){},
ji:function ji(a,b){this.a=a
this.b=b},
a5:function a5(){},
j:function j(){},
h:function h(){},
aE:function aE(){},
c8:function c8(){},
fv:function fv(){},
fz:function fz(){},
aN:function aN(){},
fC:function fC(){},
ca:function ca(){},
bC:function bC(){},
fD:function fD(){},
fE:function fE(a,b){this.a=a
this.b=b},
cb:function cb(){},
aO:function aO(){},
cc:function cc(){},
f6:function f6(){},
bG:function bG(){},
hg:function hg(){},
hA:function hA(){},
cg:function cg(){},
hB:function hB(){},
hC:function hC(a){this.a=a},
hD:function hD(){},
hE:function hE(a){this.a=a},
aR:function aR(){},
hF:function hF(){},
aH:function aH(){},
jh:function jh(a){this.a=a},
B:function B(){},
df:function df(){},
aU:function aU(){},
hR:function hR(){},
cp:function cp(){},
i2:function i2(){},
i3:function i3(a){this.a=a},
i5:function i5(){},
aV:function aV(){},
id:function id(){},
aW:function aW(){},
ie:function ie(){},
aX:function aX(){},
ij:function ij(){},
ik:function ik(a){this.a=a},
aI:function aI(){},
aY:function aY(){},
aJ:function aJ(){},
iq:function iq(){},
ir:function ir(){},
ix:function ix(){},
aZ:function aZ(){},
bL:function bL(){},
iA:function iA(){},
iB:function iB(){},
bl:function bl(){},
iW:function iW(){},
j7:function j7(){},
bn:function bn(){},
cv:function cv(){},
jj:function jj(){},
dR:function dR(){},
jA:function jA(){},
ea:function ea(){},
jM:function jM(){},
jQ:function jQ(){},
jl:function jl(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jm:function jm(a){this.a=a},
L:function L(){},
cY:function cY(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
dQ:function dQ(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dX:function dX(){},
dY:function dY(){},
e_:function e_(){},
e0:function e0(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
eb:function eb(){},
ec:function ec(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
cA:function cA(){},
cB:function cB(){},
ei:function ei(){},
ej:function ej(){},
en:function en(){},
er:function er(){},
es:function es(){},
cC:function cC(){},
cD:function cD(){},
eu:function eu(){},
ev:function ev(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){}},T={
aa:function(a){var u=new T.i6()
u.eF(a)
return u},
eR:function eR(){},
cZ:function cZ(){},
d8:function d8(){},
aT:function aT(){this.a=null},
i6:function i6(){this.a=null},
dv:function dv(){},
is:function is(){},
it:function it(){var _=this
_.y=_.d=_.c=_.b=_.a=null},
iu:function iu(a){var _=this
_.a=a
_.e=_.d=_.b=null},
iv:function iv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={dr:function dr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},dy:function dy(a,b,c){this.a=a
this.b=b
this.c=c},dz:function dz(a){this.b=a
this.c=null},iy:function iy(){this.c=this.b=this.a=null},dB:function dB(a){this.b=a
this.a=this.c=null}},O={
l9:function(a){var u=new O.b5([a])
u.bF(a)
return u},
b5:function b5(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cf:function cf(){this.b=this.a=null},
mO:function(a){var u=C.a.iC(a,"/")
if(u<=0)return a
return C.a.u(a,0,u)},
mH:function(a){var u,t,s=P.ln("([^\\s]+)")
$.mG=s
u=s.is(a)
if(u==null)return H.d([],[P.p])
s=u.b
if(1>=s.length)return H.b(s,1)
t=s[1]
return H.d([t,C.a.en(C.a.ad(a,t.length))],[P.p])},
kd:function(a){var u,t=H.d([],[P.p]),s=P.ln("([^\\s]+)")
$.mG=s
s=new H.ja(s,a,0)
for(;s.D();){u=s.d.b
if(1>=u.length)return H.b(u,1)
t.push(u[1])}return t},
b0:function(a){var u,t=O.kd(a),s=H.d([],[P.K]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.b(t,u)
s.push(P.ph(t[u]))}return s},
db:function(a,b,c){return O.nP(a,b,!1)},
nP:function(a,b,c){var u=0,t=P.a1([P.T,P.p,O.bf]),s,r=2,q,p=[],o,n,m,l,k,j,i,h
var $async$db=P.a2(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
o=O.mO(a)
k=new O.k9(b)
k.b=new H.I([P.p,O.bf])
n=k
u=7
return P.a8(W.lO(a),$async$db)
case 7:m=e
u=8
return P.a8(n.ar(m,o,!1),$async$db)
case 8:j=n.b
s=j
u=1
break
r=2
u=6
break
case 4:r=3
h=q
l=H.a3(h)
P.eN(a+": "+H.f(l))
j=P.i(a+": "+H.f(l))
throw H.c(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.a_(s,t)
case 2:return P.Z(q,t)}})
return P.a0($async$db,t)},
dg:function(a,b){var u=null,t=null,s=!1
return O.nR(a,b)},
nR:function(a,a0){var u=0,t=P.a1(E.aD),s,r=2,q,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$dg=P.a2(function(a1,a2){if(a1===1){q=a2
u=r}while(true)switch(u){case 0:e=null
d=null
c=!1
r=4
o=O.mO(a)
k=e
j=new O.ka(a0)
j.b=H.d([],[O.eK])
j.c=H.d([],[V.as])
j.d=H.d([],[V.Q])
i=new H.I([P.p,O.bf])
j.e=i
j.f=d
j.r=""
h=O.lW()
g=h.r
g.sW(0,new V.S(0.35,0.35,0.35))
g=h.x
g.sW(0,new V.S(0.65,0.65,0.65))
j.x=h
j.Q=E.fr(null)
if(k!=null)i.dq(0,k)
j.bm()
n=j
u=7
return P.a8(W.lO(a),$async$dg)
case 7:m=a2
u=8
return P.a8(n.ar(m,o,c),$async$dg)
case 8:k=d
if(k!=null){i=new O.hV()
i.b=!0
k.J(i)}k=n.gio()
s=k
u=1
break
r=2
u=6
break
case 4:r=3
b=q
l=H.a3(b)
P.eN(a+": "+H.f(l))
k=P.i(a+": "+H.f(l))
throw H.c(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.a_(s,t)
case 2:return P.Z(q,t)}})
return P.a0($async$dg,t)},
k9:function k9(a){this.a=a
this.c=this.b=null},
eK:function eK(a){this.a=a
this.b=null},
ka:function ka(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hV:function hV(){this.b=null},
lW:function(){var u,t=new O.bf(),s=O.l9(V.aQ)
t.e=s
s.bd(t.gfv(),t.gfz())
s=new O.aF(t,"emission")
s.c=new A.X(!1,!1,!1)
s.f=new V.S(0,0,0)
t.f=s
s=new O.aF(t,"ambient")
s.c=new A.X(!1,!1,!1)
s.f=new V.S(0,0,0)
t.r=s
s=new O.aF(t,"diffuse")
s.c=new A.X(!1,!1,!1)
s.f=new V.S(0,0,0)
t.x=s
s=new O.aF(t,"invDiffuse")
s.c=new A.X(!1,!1,!1)
s.f=new V.S(0,0,0)
t.y=s
s=new O.ht(t,"specular")
s.c=new A.X(!1,!1,!1)
s.f=new V.S(0,0,0)
s.ch=100
t.z=s
s=new O.hp(t,"bump")
s.c=new A.X(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.aF(t,"reflect")
s.c=new A.X(!1,!1,!1)
s.f=new V.S(0,0,0)
t.cx=s
s=new O.hs(t,"refract")
s.c=new A.X(!1,!1,!1)
s.f=new V.S(0,0,0)
s.ch=1
t.cy=s
s=new O.ho(t,"alpha")
s.c=new A.X(!1,!1,!1)
s.f=1
t.db=s
s=new D.d5()
s.bF(D.al)
s.e=H.d([],[D.fj])
s.f=H.d([],[D.hS])
s.r=H.d([],[D.ig])
s.y=s.x=null
s.cE(s.gft(),s.gh5(),s.gh9())
t.dx=s
u=new O.hr()
u.b=new V.F(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.x
s=u==null?s.x=D.H():u
s.m(0,t.ghu())
s=t.dx
u=s.y
s=u==null?s.y=D.H():u
s.m(0,t.gbe())
t.fr=null
return t},
d_:function d_(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fR:function fR(a,b){this.a=a
this.b=b},
fS:function fS(a){this.a=a},
h1:function h1(a,b){this.a=a
this.b=b},
h0:function h0(a){this.a=a},
h2:function h2(a,b){this.a=a
this.b=b},
h3:function h3(a,b){this.a=a
this.b=b},
fX:function fX(a,b){this.a=a
this.b=b},
fQ:function fQ(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b){this.a=a
this.b=b},
fT:function fT(a,b){this.a=a
this.b=b},
fW:function fW(a,b){this.a=a
this.b=b},
fN:function fN(a,b){this.a=a
this.b=b},
fO:function fO(a,b){this.a=a
this.b=b},
fM:function fM(a,b){this.a=a
this.b=b},
fP:function fP(a,b){this.a=a
this.b=b},
fK:function fK(a){this.a=a},
fL:function fL(a){this.a=a},
fU:function fU(a){this.a=a},
fV:function fV(a){this.a=a},
fY:function fY(a){this.a=a},
fZ:function fZ(a,b){this.a=a
this.b=b},
h_:function h_(a){this.a=a},
fI:function fI(a){this.a=a},
fH:function fH(a){this.a=a},
bf:function bf(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hu:function hu(a,b){this.a=a
this.b=b},
hv:function hv(){},
hw:function hw(a,b){this.a=a
this.b=b},
hx:function hx(){},
hy:function hy(a,b){this.a=a
this.b=b},
hz:function hz(){},
ho:function ho(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ce:function ce(){},
hp:function hp(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aF:function aF(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hr:function hr(){var _=this
_.e=_.d=_.c=_.b=null},
hs:function hs(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ht:function ht(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
du:function du(){}},E={
fr:function(a){var u,t=new E.aD()
t.a=""
t.b=!0
u=O.l9(E.aD)
t.y=u
u.bd(t.giG(),t.giJ())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.scF(0,a)
t.saX(null)
t.sb4(null)
return t},
o5:function(a,b){var u=new E.hZ(a)
u.eE(a,b)
return u},
ob:function(a,b,c,d,e){var u,t,s=J.N(a)
if(!!s.$ibA)return E.md(a,!0,!0,!0,!1)
u=W.l8()
t=u.style
t.width="100%"
t.height="100%"
s.gca(a).m(0,u)
return E.md(u,!0,!0,!0,!1)},
md:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dw(),p=C.j.cD(a,"webgl2",P.nJ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.m(P.i("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.o5(p,a)
u=new T.iu(p)
u.b=p.getParameter(3379)
p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dH(a)
t=new X.h9()
t.c=new X.ar(!1,!1,!1)
t.d=P.nK(P.u)
u.b=t
t=new X.hG(u)
t.f=0
t.r=V.bi()
t.x=V.bi()
t.ch=t.Q=1
u.c=t
t=new X.hh(u)
t.r=0
t.x=V.bi()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iz(u)
t.f=V.bi()
t.r=V.bi()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.d([],[[P.dt,P.P]])
u.z=t
s=document
t.push(W.U(s,"contextmenu",u.gfH(),!1))
u.z.push(W.U(a,"focus",u.gfN(),!1))
u.z.push(W.U(a,"blur",u.gfB(),!1))
u.z.push(W.U(s,"keyup",u.gfR(),!1))
u.z.push(W.U(s,"keydown",u.gfP(),!1))
u.z.push(W.U(a,"mousedown",u.gfV(),!1))
u.z.push(W.U(a,"mouseup",u.gfZ(),!1))
u.z.push(W.U(a,r,u.gfX(),!1))
t=u.z
W.lc(a)
W.lc(a)
t.push(W.U(a,W.lc(a),u.gh0(),!1))
u.z.push(W.U(s,r,u.gfJ(),!1))
u.z.push(W.U(s,"mouseup",u.gfL(),!1))
u.z.push(W.U(s,"pointerlockchange",u.gh2(),!1))
u.z.push(W.U(a,"touchstart",u.ghf(),!1))
u.z.push(W.U(a,"touchend",u.ghb(),!1))
u.z.push(W.U(a,"touchmove",u.ghd(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.ak(Date.now(),!1)
q.db=0
q.de()
return q},
f0:function f0(){},
aD:function aD(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hZ:function hZ(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i_:function i_(a){this.a=a},
i0:function i0(a){this.a=a},
i1:function i1(a){this.a=a},
dw:function dw(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
iw:function iw(a){this.a=a}},Z={
ls:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bT(c)),35044)
a.bindBuffer(b,null)
return new Z.dL(b,u)},
av:function(a){return new Z.aL(a)},
dL:function dL(a,b){this.a=a
this.b=b},
cN:function cN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dM:function dM(a){this.a=a},
bz:function bz(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
cO:function cO(){this.a=null},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
aL:function aL(a){this.a=a}},D={
H:function(){var u=new D.b8()
u.d=0
return u},
f3:function f3(){},
b8:function b8(){var _=this
_.d=_.c=_.b=_.a=null},
ft:function ft(a){this.a=a},
fu:function fu(a){this.a=a},
ad:function ad(){this.b=null},
bE:function bE(){this.b=null},
bF:function bF(){this.b=null},
v:function v(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
fj:function fj(){},
al:function al(){},
d5:function d5(){var _=this
_.d=_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
hS:function hS(){},
ig:function ig(){}},X={cP:function cP(a,b){this.a=a
this.b=b},d4:function d4(a,b){this.a=a
this.b=b},h9:function h9(){var _=this
_.d=_.c=_.b=_.a=null},d7:function d7(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hh:function hh(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ar:function ar(a,b,c){this.a=a
this.b=b
this.c=c},aS:function aS(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hG:function hG(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ch:function ch(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hT:function hT(){},dA:function dA(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iz:function iz(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dH:function dH(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nA:function(a){var u=new X.fB(),t=new V.F(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.m7
if(t==null){t=V.m6(0,0,1,1)
$.m7=t}u.r=t
return u},
l7:function l7(){},
fB:function fB(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dh:function dh(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
io:function io(){}},V={
la:function(a){var u,t,s=a.length
if(0>=s)return H.b(a,0)
u=a[0]
if(1>=s)return H.b(a,1)
t=a[1]
if(2>=s)return H.b(a,2)
s=a[2]
if(typeof u!=="number")return u.C()
if(u<0)u=0
else if(u>1)u=1
if(typeof t!=="number")return t.C()
if(t<0)t=0
else if(t>1)t=1
if(typeof s!=="number")return s.C()
if(s<0)s=0
else if(s>1)s=1
return new V.S(u,t,s)},
nt:function(a,b,c){var u,t,s,r,q,p,o,n
a*=6
u=C.d.bs(a)
t=a-u
s=b*(1-c)
r=b*(1-c*t)
q=b*(1-c*(1-t))
switch(u){case 0:if(b<0)p=0
else p=b>1?1:b
if(q<0)o=0
else o=q>1?1:q
if(s<0)n=0
else n=s>1?1:s
return new V.S(p,o,n)
case 1:if(r<0)p=0
else p=r>1?1:r
if(b<0)o=0
else o=b>1?1:b
if(s<0)n=0
else n=s>1?1:s
return new V.S(p,o,n)
case 2:if(s<0)p=0
else p=s>1?1:s
if(b<0)o=0
else o=b>1?1:b
if(q<0)n=0
else n=q>1?1:q
return new V.S(p,o,n)
case 3:if(s<0)p=0
else p=s>1?1:s
if(r<0)o=0
else o=r>1?1:r
if(b<0)n=0
else n=b>1?1:b
return new V.S(p,o,n)
case 4:if(q<0)p=0
else p=q>1?1:q
if(s<0)o=0
else o=s>1?1:s
if(b<0)n=0
else n=b>1?1:b
return new V.S(p,o,n)
default:if(b<0)p=0
else p=b>1?1:b
if(s<0)o=0
else o=s>1?1:s
if(r<0)n=0
else n=r>1?1:r
return new V.S(p,o,n)}},
cQ:function(a){if(a<0)a=0
else if(a>1)a=1
return new V.F(a,a,a,1)},
nu:function(a){return new V.F(a.a,a.b,a.c,1)},
pE:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.bb(a-b,u)
return(a<0?a+u:a)+b},
C:function(a,b,c){if(a==null)return C.a.aj("null",c)
return C.a.aj(C.d.em(Math.abs(a-0)<$.y().a?0:a,b),c+b+1)},
bZ:function(a,b,c){var u,t,s,r,q,p,o=H.d([],[P.p])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.r)(a),++s){r=V.C(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.a.aj(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
lE:function(a){return C.d.jh(Math.pow(2,C.K.bs(Math.log(H.bX(a))/Math.log(2))))},
da:function(){var u=$.lZ
return u==null?$.lZ=V.aG(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aG:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lY:function(a,b,c){return V.aG(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lX:function(a,b,c){return V.aG(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
bi:function(){var u=$.m1
return u==null?$.m1=new V.as(0,0):u},
ll:function(){var u=$.cm
return u==null?$.cm=new V.af(0,0,0):u},
m6:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dk(a,b,c,d)},
m8:function(a,b,c,d,e,f){return new V.bK(a,b,c,d,e,f)},
m9:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i
if(a==null)return b
if(b==null)return a
u=a.a
t=b.a
s=Math.min(H.bX(u),H.bX(t))
r=a.b
q=b.b
p=Math.min(H.bX(r),H.bX(q))
o=a.c
n=b.c
m=Math.min(H.bX(o),H.bX(n))
l=a.d
if(typeof u!=="number")return u.p()
k=b.d
if(typeof t!=="number")return t.p()
j=Math.max(u+l,t+k)
k=a.e
if(typeof r!=="number")return r.p()
t=b.e
if(typeof q!=="number")return q.p()
i=Math.max(r+k,q+t)
t=a.f
if(typeof o!=="number")return o.p()
q=b.f
if(typeof n!=="number")return n.p()
return new V.bK(s,p,m,j-s,i-p,Math.max(o+t,n+q)-m)},
R:function(){var u=$.mo
return u==null?$.mo=new V.Q(0,0,0):u},
mq:function(){var u=$.mm
return u==null?$.mm=new V.Q(1,0,0):u},
mp:function(){var u=$.ml
return u==null?$.ml=new V.Q(0,0,-1):u},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
F:function F(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fs:function fs(a){this.a=a},
d9:function d9(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aQ:function aQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
as:function as(a,b){this.a=a
this.b=b},
af:function af(a,b,c){this.a=a
this.b=b
this.c=c},
dk:function dk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bK:function bK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
E:function E(a,b){this.a=a
this.b=b},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
pz:function(a){P.oc(C.H,new V.kY(a))},
m4:function(a){var u=new V.hW(a),t=document.getElementById(a)
u.c=t
if(t==null)H.m("Failed to find "+a+" for RadioGroup")
return u},
o7:function(a){var u=new V.ia()
u.eG(a,!0)
return u},
f4:function f4(a){this.a=a
this.d=this.c=null},
f5:function f5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kY:function kY(a){this.a=a},
hW:function hW(a){this.a=a
this.c=null},
hX:function hX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ia:function ia(){this.b=this.a=null},
ic:function ic(a){this.a=a},
ib:function ib(a){this.a=a}},U={
lb:function(){var u=new U.f8()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
f8:function f8(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cR:function cR(){this.b=this.a=null},
c9:function c9(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
am:function am(){},
dI:function dI(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dJ:function dJ(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dK:function dK(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cW:function cW(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nN:function(a,b){var u=a.aD,t=new A.hn(b,u)
t.cK(b,u)
t.eD(a,b)
return t},
nO:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gaa(a0)+a1.gaa(a1)+a2.gaa(a2)+a3.gaa(a3)+a4.gaa(a4)+a5.gaa(a5)+a6.gaa(a6)+a7.gaa(a7)+a8.gaa(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.r)(a9),++t)f+="_"+H.f(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.r)(b0),++t)f+="_"+H.f(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.r)(b1),++t)f+="_"+H.f(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.aA()
if(l){u=$.az()
g=new Z.aL(g.a|u.a)}if(k){u=$.ay()
g=new Z.aL(g.a|u.a)}if(j){u=$.b3()
g=new Z.aL(g.a|u.a)}if(i){u=$.b2()
g=new Z.aL(g.a|u.a)}return new A.hq(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,m,p,r,h,!0,!1,!1,o,r,n,l,k,j,!1,i,a,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
k7:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
k8:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.k7(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kZ(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
oO:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.k7(b,t,"emission")
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
oL:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.k8(b,t,"ambient")
b.a+="\n"},
oM:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.k8(b,t,"diffuse")
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
oP:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.k8(b,t,"invDiffuse")
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
oV:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.k8(b,t,"specular")
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
oR:function(a,b){var u,t,s
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
oT:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.k7(b,t,"reflect")
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
oU:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.k7(b,t,"refract")
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
oN:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.f(u)
s=A.kZ(t)
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
r=[P.p]
o=H.d([],r)
n=a.b
if(n.a||n.b||!1)o.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.d([],r)
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
c.a+="      highLight = intensity*("+C.b.w(m," + ")+");\n"}else c.a+="   highLight = "+C.b.w(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.b.w(o," + ")+");\n"
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
oS:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.f(u)
s=A.kZ(t)
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
c.a=r+"\n"}r=[P.p]
l=H.d([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.b.w(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.d([],r)
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
k=H.d([],r)
r=a.c
if(r.a||r.b||!1)k.push("diffuse(norm, normDir)")
r=a.d
if(r.a||r.b||!1)k.push("invDiffuse(norm, normDir)")
r=a.e
if(r.a||r.b||!1)k.push("specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.b.w(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.b.w(l," + ")+");\n"
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
oW:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.f(u)
s=A.kZ(t)
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
c.a=u+"\n"}u=[P.p]
j=H.d([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.b.w(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.d([],u)
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
i=H.d([],u)
u=a.c
if(u.a||u.b||!1)i.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)i.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)i.push("specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.b.w(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.w(j," + ")+");\n"
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
oQ:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.d([],[P.p])
u=a.b
if(u.a||u.b||!1)t.push("ambientColor")
u=a.c
if(u.a||u.b||!1)t.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)t.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.b.w(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
oX:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.W("")
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
A.oO(a,j)
A.oL(a,j)
A.oM(a,j)
A.oP(a,j)
A.oV(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.oT(a,j)
A.oU(a,j)}A.oR(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.r)(q),++o)A.oN(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.r)(q),++o)A.oS(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.r)(q),++o)A.oW(a,q[o],j)
A.oQ(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.d([],[P.p])
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
j.a+=m+(r[0].toUpperCase()+C.a.ad(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.r)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ad(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.r)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ad(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)n.push("emissionColor()")
u=a.r
if(u.a||u.b||!1)n.push("reflect(refl)")
u=a.x
if(u.a||u.b||!1)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.b.w(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
oY:function(a,b){var u,t,s
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
p_:function(a,b){var u
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
oZ:function(a,b){var u
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
p1:function(a,b){var u,t
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
p2:function(a,b){var u,t
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
p0:function(a,b){var u
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
p3:function(a,b){var u
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
kZ:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.ad(a,1)},
lp:function(a,b,c,d,e){var u=new A.iF(a,c,e)
u.f=d
P.nL(d,0,P.u)
return u},
cM:function cM(a,b,c){this.a=a
this.b=b
this.c=c},
eU:function eU(a){this.a=a},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
fG:function fG(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hn:function hn(a,b){var _=this
_.jp=_.dG=_.dF=_.dE=_.aD=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jx=_.jw=_.jv=_.ck=_.cj=_.ci=_.cg=_.cf=_.ce=_.ju=_.dS=_.dR=_.jt=_.dQ=_.dP=_.dO=_.js=_.dN=_.dM=_.dL=_.jr=_.dK=_.dJ=_.jq=_.dI=_.dH=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cT:function cT(a,b){this.a=a
this.b=b},
di:function di(a,b){this.a=a
this.b=b},
dp:function dp(a,b){this.a=a
this.b=b},
hq:function hq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aD=b3
_.dE=b4},
cr:function cr(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ct:function ct(a,b,c,d,e,f,g,h,i,j){var _=this
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
cu:function cu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dm:function dm(){},
dC:function dC(){},
iK:function iK(a){this.a=a},
dD:function dD(a,b,c){this.a=a
this.c=b
this.d=c},
iH:function iH(a,b,c){this.a=a
this.c=b
this.d=c},
iI:function iI(a,b,c){this.a=a
this.c=b
this.d=c},
iJ:function iJ(a,b,c){this.a=a
this.c=b
this.d=c},
iF:function iF(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a4:function a4(a,b,c){this.a=a
this.c=b
this.d=c},
iG:function iG(a,b,c){this.a=a
this.c=b
this.d=c},
J:function J(a,b,c){this.a=a
this.c=b
this.d=c},
bm:function bm(a,b,c){this.a=a
this.c=b
this.d=c},
iL:function iL(a,b,c){this.a=a
this.c=b
this.d=c},
cs:function cs(a,b,c){this.a=a
this.c=b
this.d=c},
ag:function ag(a,b,c){this.a=a
this.c=b
this.d=c},
ab:function ab(a,b,c){this.a=a
this.c=b
this.d=c},
bN:function bN(a,b,c){this.a=a
this.c=b
this.d=c}},F={
nz:function(a,b,c){var u=new F.b9(),t=a.a
if(t==null)H.m(P.i("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.m(P.i("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.X()
return u},
nH:function(a,b){var u,t=new F.be()
if(a==null)H.m(P.i("May not create a line with a null start vertex."))
if(b==null)H.m(P.i("May not create a line with a null end vertex."))
u=a.a
if(u==null)H.m(P.i("May not create a line with a start vertex which is not attached to a shape."))
if(u!=b.a)H.m(P.i("May not create a line with vertices attached to different shapes."))
t.a=a
a.c.b.push(t)
t.b=b
b.c.c.push(t)
t.a.a.c.b.push(t)
t.a.a.X()
return t},
lk:function(a){var u=new F.bH()
if(a.a==null)H.m(P.i("May not create a point with a vertex which is not attached to a shape."))
u.a=a
a.b.b.push(u)
u.a.a.b.b.push(u)
u.a.a.X()
return u},
a7:function(){var u=new F.at(),t=new F.j_(u)
t.b=!1
t.c=H.d([],[F.b_])
u.a=t
t=new F.i9(u)
t.b=H.d([],[F.bH])
u.b=t
t=new F.i8(u)
t.b=H.d([],[F.be])
u.c=t
t=new F.i7(u)
t.b=H.d([],[F.b9])
u.d=t
u.e=null
return u},
bP:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.b_(),r=new F.j4()
r.b=H.d([],[F.bH])
s.b=r
r=new F.j3()
u=[F.be]
r.b=H.d([],u)
r.c=H.d([],u)
s.c=r
r=new F.j0()
u=[F.b9]
r.b=H.d([],u)
r.c=H.d([],u)
r.d=H.d([],u)
s.d=r
h=$.na()
s.e=0
r=$.aA()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.az().a)!==0?e:t
s.x=(u&$.ay().a)!==0?b:t
s.y=(u&$.b3().a)!==0?f:t
s.z=(u&$.bu().a)!==0?g:t
s.Q=(u&$.nb().a)!==0?c:t
s.ch=(u&$.c2().a)!==0?i:0
s.cx=(u&$.b2().a)!==0?a:t
return s},
b9:function b9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
be:function be(){this.b=this.a=null},
bH:function bH(){this.a=null},
at:function at(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i7:function i7(a){this.a=a
this.b=null},
i8:function i8(a){this.a=a
this.b=null},
i9:function i9(a){this.a=a
this.b=null},
b_:function b_(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j6:function j6(a){this.a=a},
j5:function j5(a){this.a=a},
j_:function j_(a){this.a=a
this.c=this.b=null},
j0:function j0(){this.d=this.c=this.b=null},
j1:function j1(a,b){this.a=a
this.b=b},
j2:function j2(a,b){this.a=a
this.b=b},
j3:function j3(){this.c=this.b=null},
j4:function j4(){this.b=null}},G={
mS:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="testCanvas",f=null,e="controls",d="modifiers",c={},b=V.o7("Test 032"),a=W.l8()
a.className="pageLargeCanvas"
a.id=g
b.a.appendChild(a)
u=[P.p]
b.dr(H.d(["The inspection test for shapes loaders. ","For generated shapes see test002. ","Note: Some shapes will take time to load."],u))
b.hW(H.d(["controls","shapes","scalars"],u))
b.dr(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(g)
if(t==null)H.m(P.i("Failed to find an element with the identifier, testCanvas."))
s=E.ob(t,!0,!0,!0,!1)
c.a=!0
r=E.fr(f)
b=new U.c9()
b.bF(U.am)
b.bd(b.gfq(),b.gh7())
b.e=null
b.f=V.da()
b.r=0
q=s.x
p=new U.dJ()
o=U.lb()
o.scC(0,!0)
o.scq(6.283185307179586)
o.scs(0)
o.sa5(0,0)
o.scr(100)
o.sV(0)
o.scd(0.5)
p.b=o
n=p.gaL()
o.gB().m(0,n)
o=U.lb()
o.scC(0,!0)
o.scq(6.283185307179586)
o.scs(0)
o.sa5(0,0)
o.scr(100)
o.sV(0)
o.scd(0.5)
p.c=o
o.gB().m(0,n)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
m=new X.ar(!1,!1,!1)
l=p.d
p.d=m
o=new D.v(d,l,m)
o.b=!0
p.R(o)
o=p.f
if(o!==!1){p.f=!1
o=new D.v("invertX",o,!1)
o.b=!0
p.R(o)}o=p.r
if(o!==!0){p.r=!0
o=new D.v("invertY",o,!0)
o.b=!0
p.R(o)}p.b1(q)
b.m(0,p)
q=s.x
p=new U.dI()
o=U.lb()
o.scC(0,!0)
o.scq(6.283185307179586)
o.scs(0)
o.sa5(0,0)
o.scr(100)
o.sV(0)
o.scd(0.2)
p.b=o
o.gB().m(0,p.gaL())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
m=new X.ar(!0,!1,!1)
l=p.c
p.c=m
o=new D.v(d,l,m)
o.b=!0
p.R(o)
p.b1(q)
b.m(0,p)
q=s.x
p=new U.dK()
p.c=0.01
p.e=p.d=0
m=new X.ar(!1,!1,!1)
p.b=m
o=new D.v(d,f,m)
o.b=!0
p.R(o)
p.b1(q)
b.m(0,p)
r.sb4(b)
k=new O.d_()
k.b=V.mp()
k.c=new V.F(0.2,0.3,0.4,1)
k.d=new V.F(0.1,0.2,0.3,1)
k.e=V.cQ(0.7)
k.f=V.cQ(0.3)
k.r=V.cQ(0.5)
k.x=V.cQ(0.5)
k.y=new V.F(1,1,1,1)
k.z=V.cQ(0.8)
k.r1=k.k4=k.k3=k.k2=k.k1=k.id=k.go=k.fy=k.fx=k.fr=k.dy=k.dx=k.db=k.cy=k.cx=k.ch=k.Q=!1
k.r2=1
k.sab(0.4)
b=new M.cW()
b.a=!0
q=O.l9(E.aD)
b.e=q
q.bd(b.gfD(),b.gfF())
b.y=b.x=b.r=b.f=null
j=X.nA(f)
i=new X.dh()
i.c=1.0471975511965976
i.d=0.1
i.e=2000
i.sb4(f)
q=i.c
if(!(Math.abs(q-1.0471975511965976)<$.y().a)){i.c=1.0471975511965976
q=new D.v("fov",q,1.0471975511965976)
q.b=!0
i.aJ(q)}q=i.d
if(!(Math.abs(q-0.1)<$.y().a)){i.d=0.1
q=new D.v("near",q,0.1)
q.b=!0
i.aJ(q)}q=i.e
if(!(Math.abs(q-2000)<$.y().a)){i.e=2000
q=new D.v("far",q,2000)
q.b=!0
i.aJ(q)}q=b.b
if(q!==i){if(q!=null)q.gB().Y(0,b.gat())
l=b.b
b.b=i
i.gB().m(0,b.gat())
q=new D.v("camera",l,b.b)
q.b=!0
b.ax(q)}q=b.c
if(q!==j){if(q!=null)q.gB().Y(0,b.gat())
l=b.c
b.c=j
j.gB().m(0,b.gat())
q=new D.v("target",l,b.c)
q.b=!0
b.ax(q)}b.saX(f)
b.saX(k)
b.e.m(0,r)
q=b.b
h=V.lY(0,0,5)
p=new U.cR()
p.a=h
q.sb4(p)
q=s.d
if(q!==b){if(q!=null)q.gB().Y(0,s.gcL())
s.d=b
b.gB().m(0,s.gcL())
s.cM()}b=new V.f4(e)
u=u.getElementById(e)
b.c=u
if(u==null)H.m("Failed to find controls for CheckGroup")
b.d=H.d([],[W.f6])
b.a4(0,"Material",new G.ko(c,r),!0)
b.t(0,"Filled",new G.kp(k))
b.a4(0,"Wire Frame",new G.kq(k),!0)
b.t(0,"Vertices",new G.kB(k))
b.t(0,"Normals",new G.kM(k))
b.t(0,"Binormals",new G.kO(k))
b.t(0,"Tangentals",new G.kP(k))
b.t(0,"Face Centers",new G.kQ(k))
b.t(0,"Face Normals",new G.kR(k))
b.t(0,"Face Binormals",new G.kS(k))
b.t(0,"Face Tangentals",new G.kT(k))
b.t(0,"Colors",new G.kr(k))
b.t(0,"Textures2D",new G.ks(k))
b.t(0,"TexturesCube",new G.kt(k))
b.t(0,"Weight",new G.ku(k))
b.a4(0,"Axis",new G.kv(k),!0)
b.t(0,"AABB",new G.kw(k))
c=new G.kW(c,s,r,new G.kU(),k)
b=V.m4("shapes")
b.a4(0,"Cube",new G.kx(c),!0)
b.t(0,"Low Poly Tree",new G.ky(c))
b.t(0,"Low Poly Wolf",new G.kz(c))
b.t(0,"Plant",new G.kA(c))
c=V.m4("scalars")
c.t(0,"0.01",new G.kC(k))
c.t(0,"0.02",new G.kD(k))
c.t(0,"0.04",new G.kE(k))
c.t(0,"0.06",new G.kF(k))
c.t(0,"0.08",new G.kG(k))
c.t(0,"0.1",new G.kH(k))
c.t(0,"0.2",new G.kI(k))
c.a4(0,"0.4",new G.kJ(k),!0)
c.t(0,"0.6",new G.kK(k))
c.t(0,"0.8",new G.kL(k))
c.t(0,"1.0",new G.kN(k))
V.pz(s)},
ko:function ko(a,b){this.a=a
this.b=b},
kp:function kp(a){this.a=a},
kq:function kq(a){this.a=a},
kB:function kB(a){this.a=a},
kM:function kM(a){this.a=a},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a){this.a=a},
kT:function kT(a){this.a=a},
kr:function kr(a){this.a=a},
ks:function ks(a){this.a=a},
kt:function kt(a){this.a=a},
ku:function ku(a){this.a=a},
kv:function kv(a){this.a=a},
kw:function kw(a){this.a=a},
kU:function kU(){},
kV:function kV(a,b){this.a=a
this.b=b},
kW:function kW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kx:function kx(a){this.a=a},
ky:function ky(a){this.a=a},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
kC:function kC(a){this.a=a},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
kN:function kN(a){this.a=a}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F,G]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.lh.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gH:function(a){return H.cn(a)},
h:function(a){return"Instance of '"+H.f(H.co(a))+"'"}}
J.h5.prototype={
h:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$ibp:1}
J.d2.prototype={
v:function(a,b){return null==b},
h:function(a){return"null"},
gH:function(a){return 0},
$iY:1}
J.d3.prototype={
gH:function(a){return 0},
h:function(a){return String(a)}}
J.hQ.prototype={}
J.bO.prototype={}
J.bc.prototype={
h:function(a){var u=a[$.mZ()]
if(u==null)return this.eB(a)
return"JavaScript function for "+H.f(J.aj(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.ba.prototype={
Y:function(a,b){var u
if(!!a.fixed$length)H.m(P.w("remove"))
for(u=0;u<a.length;++u)if(J.A(a[u],b)){a.splice(u,1)
return!0}return!1},
q:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.bB(a))}},
w:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.f(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
iB:function(a){return this.w(a,"")},
it:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.bB(a))}return u},
iu:function(a,b,c){return this.it(a,b,c,null)},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
ey:function(a,b,c){if(b<0||b>a.length)throw H.c(P.a6(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.a6(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.cI(a,0)])
return H.d(a.slice(b,c),[H.cI(a,0)])},
gaF:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.nD())},
bE:function(a,b){if(!!a.immutable$list)H.m(P.w("sort"))
H.dn(a,0,a.length-1,b)},
ao:function(a,b){var u
for(u=0;u<a.length;++u)if(J.A(a[u],b))return!0
return!1},
h:function(a){return P.le(a,"[","]")},
ga2:function(a){return new J.a9(a,a.length)},
gH:function(a){return H.cn(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.m(P.w("set length"))
if(b<0)throw H.c(P.a6(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.bq(a,b))
if(b>=a.length||b<0)throw H.c(H.bq(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.m(P.w("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bq(a,b))
a[b]=c},
$ik:1,
$iq:1}
J.lg.prototype={}
J.a9.prototype={
gT:function(a){return this.d},
D:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.r(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.cd.prototype={
i6:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ao(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbu(b)
if(this.gbu(a)===u)return 0
if(this.gbu(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbu:function(a){return a===0?1/a<0:a<0},
jh:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.w(""+a+".toInt()"))},
bs:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.w(""+a+".floor()"))},
as:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.w(""+a+".round()"))},
em:function(a,b){var u
if(b>20)throw H.c(P.a6(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbu(a))return"-"+u
return u},
b9:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.a6(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.S(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.m(P.w("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.b(t,1)
u=t[1]
if(3>=s)return H.b(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.l("0",r)},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bb:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eC:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dh(a,b)},
a9:function(a,b){return(a|0)===a?a/b|0:this.dh(a,b)},
dh:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.w("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
aO:function(a,b){var u
if(a>0)u=this.dg(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hD:function(a,b){if(b<0)throw H.c(H.ao(b))
return this.dg(a,b)},
dg:function(a,b){return b>31?0:a>>>b},
$iK:1,
$iap:1}
J.d1.prototype={$iu:1}
J.d0.prototype={}
J.bb.prototype={
S:function(a,b){if(b<0)throw H.c(H.bq(a,b))
if(b>=a.length)H.m(H.bq(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.bq(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.l5(b,null,null))
return a+b},
aV:function(a,b,c,d){var u,t
c=P.bj(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a7:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a6(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
af:function(a,b){return this.a7(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.m(H.ao(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.C()
if(b<0)throw H.c(P.hY(b,null))
if(b>c)throw H.c(P.hY(b,null))
if(c>a.length)throw H.c(P.hY(c,null))
return a.substring(b,c)},
ad:function(a,b){return this.u(a,b,null)},
en:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.F(r,0)===133){u=J.nF(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.S(r,t)===133?J.nG(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
l:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.F)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aj:function(a,b){var u=b-a.length
if(u<=0)return a
return this.l(" ",u)+a},
iP:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.l(c,u)},
bt:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a6(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
cm:function(a,b){return this.bt(a,b,0)},
iC:function(a,b){var u=a.length,t=b.length
if(u+t>u)u-=t
return a.lastIndexOf(b,u)},
h:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ip:1}
H.V.prototype={
gk:function(a){return this.a.length},
i:function(a,b){return C.a.S(this.a,b)},
$at:function(){return[P.u]},
$ak:function(){return[P.u]},
$aq:function(){return[P.u]}}
H.fp.prototype={}
H.d6.prototype={
gT:function(a){return this.d},
D:function(){var u,t=this,s=t.a,r=J.cH(s),q=r.gk(s)
if(t.b!==q)throw H.c(P.bB(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.I(s,u);++t.c
return!0}}
H.hl.prototype={
ga2:function(a){return new H.hm(J.bv(this.a),this.b)},
gk:function(a){return J.ac(this.a)},
I:function(a,b){return this.b.$1(J.l2(this.a,b))},
$ak:function(a,b){return[b]}}
H.hm.prototype={
D:function(){var u=this,t=u.b
if(t.D()){u.a=u.c.$1(t.gT(t))
return!0}u.a=null
return!1},
gT:function(a){return this.a}}
H.j8.prototype={
ga2:function(a){return new H.j9(J.bv(this.a),this.b)}}
H.j9.prototype={
D:function(){var u,t
for(u=this.a,t=this.b;u.D();)if(t.$1(u.gT(u)))return!0
return!1},
gT:function(a){var u=this.a
return u.gT(u)}}
H.cX.prototype={}
H.iP.prototype={
j:function(a,b,c){throw H.c(P.w("Cannot modify an unmodifiable list"))}}
H.dE.prototype={}
H.fa.prototype={
h:function(a){return P.lj(this)},
j:function(a,b,c){return H.nv()},
$iT:1}
H.fb.prototype={
gk:function(a){return this.a},
br:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.br(0,b))return
return this.d3(b)},
d3:function(a){return this.b[a]},
q:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.d3(s))}}}
H.iD.prototype={
ai:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hM.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.h8.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.f(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.f(t.a)+")"
return s+r+"' on '"+u+"' ("+H.f(t.a)+")"}}
H.iO.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.c7.prototype={}
H.l_.prototype={
$1:function(a){if(!!J.N(a).$ib7)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:9}
H.em.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iau:1}
H.c5.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
gjl:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ip.prototype={}
H.ii.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.eO(u)+"'"}}
H.c3.prototype={
v:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.c3))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.cn(this.a)
else u=typeof t!=="object"?J.cK(t):H.cn(t)
return(u^H.cn(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.co(u))+"'")}}
H.f2.prototype={
h:function(a){return this.a}}
H.i4.prototype={
h:function(a){return"RuntimeError: "+H.f(this.a)}}
H.I.prototype={
gk:function(a){return this.a},
gaw:function(a){return new H.hc(this,[H.cI(this,0)])},
br:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.d0(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.d0(t,b)}else return s.iy(b)},
iy:function(a){var u=this,t=u.d
if(t==null)return!1
return u.co(u.bO(t,u.cn(a)),a)>=0},
dq:function(a,b){J.l3(b,new H.h7(this))},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bg(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bg(r,b)
s=t==null?null:t.b
return s}else return q.iz(b)},
iz:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bO(r,s.cn(a))
t=s.co(u,a)
if(t<0)return
return u[t].b},
j:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cR(u==null?s.b=s.bW():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cR(t==null?s.c=s.bW():t,b,c)}else s.iA(b,c)},
iA:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bW()
u=r.cn(a)
t=r.bO(q,u)
if(t==null)r.c4(q,u,[r.bX(a,b)])
else{s=r.co(t,a)
if(s>=0)t[s].b=b
else t.push(r.bX(a,b))}},
q:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.bB(u))
t=t.c}},
cR:function(a,b,c){var u=this.bg(a,b)
if(u==null)this.c4(a,b,this.bX(b,c))
else u.b=c},
bX:function(a,b){var u=this,t=new H.hb(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
cn:function(a){return J.cK(a)&0x3ffffff},
co:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.A(a[t].a,b))return t
return-1},
h:function(a){return P.lj(this)},
bg:function(a,b){return a[b]},
bO:function(a,b){return a[b]},
c4:function(a,b,c){a[b]=c},
f4:function(a,b){delete a[b]},
d0:function(a,b){return this.bg(a,b)!=null},
bW:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c4(t,u,t)
this.f4(t,u)
return t}}
H.h7.prototype={
$2:function(a,b){this.a.j(0,a,b)},
$S:function(){var u=this.a
return{func:1,ret:P.Y,args:[H.cI(u,0),H.cI(u,1)]}}}
H.hb.prototype={}
H.hc.prototype={
gk:function(a){return this.a.a},
ga2:function(a){var u=this.a,t=new H.hd(u,u.r)
t.c=u.e
return t}}
H.hd.prototype={
gT:function(a){return this.d},
D:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bB(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.kk.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.kl.prototype={
$2:function(a,b){return this.a(a,b)}}
H.km.prototype={
$1:function(a){return this.a(a)}}
H.h6.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
gfn:function(){var u=this,t=u.c
if(t!=null)return t
t=u.b
return u.c=H.lS(u.a,t.multiline,!t.ignoreCase,t.unicode,t.dotAll,!0)},
is:function(a){var u=this.b.exec(a)
if(u==null)return
return new H.e5(u)},
f6:function(a,b){var u,t=this.gfn()
t.lastIndex=b
u=t.exec(a)
if(u==null)return
return new H.e5(u)},
$io4:1}
H.e5.prototype={}
H.ja.prototype={
gT:function(a){return this.d},
D:function(){var u,t,s,r,q=this,p=q.b
if(p==null)return!1
u=q.c
if(u<=p.length){t=q.a
s=t.f6(p,u)
if(s!=null){q.d=s
p=s.b
u=p.index
r=u+p[0].length
if(u===r){if(t.b.unicode){p=q.c
u=p+1
t=q.b
if(u<t.length){p=J.c_(t).S(t,p)
if(p>=55296&&p<=56319){p=C.a.S(t,u)
p=p>=56320&&p<=57343}else p=!1}else p=!1}else p=!1
r=(p?r+1:r)+1}q.c=r
return!0}}q.b=q.d=null
return!1}}
H.ci.prototype={$ici:1}
H.bg.prototype={$ibg:1}
H.dc.prototype={
gk:function(a){return a.length},
$ix:1,
$ax:function(){}}
H.cj.prototype={
i:function(a,b){H.aM(b,a,a.length)
return a[b]},
j:function(a,b,c){H.aM(b,a,a.length)
a[b]=c},
$at:function(){return[P.K]},
$ik:1,
$ak:function(){return[P.K]},
$iq:1,
$aq:function(){return[P.K]}}
H.dd.prototype={
j:function(a,b,c){H.aM(b,a,a.length)
a[b]=c},
$at:function(){return[P.u]},
$ik:1,
$ak:function(){return[P.u]},
$iq:1,
$aq:function(){return[P.u]}}
H.hH.prototype={
i:function(a,b){H.aM(b,a,a.length)
return a[b]}}
H.hI.prototype={
i:function(a,b){H.aM(b,a,a.length)
return a[b]}}
H.hJ.prototype={
i:function(a,b){H.aM(b,a,a.length)
return a[b]}}
H.hK.prototype={
i:function(a,b){H.aM(b,a,a.length)
return a[b]}}
H.hL.prototype={
i:function(a,b){H.aM(b,a,a.length)
return a[b]}}
H.de.prototype={
gk:function(a){return a.length},
i:function(a,b){H.aM(b,a,a.length)
return a[b]}}
H.ck.prototype={
gk:function(a){return a.length},
i:function(a,b){H.aM(b,a,a.length)
return a[b]},
$ick:1,
$ibM:1}
H.cw.prototype={}
H.cx.prototype={}
H.cy.prototype={}
H.cz.prototype={}
P.je.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:10}
P.jd.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.jf.prototype={
$0:function(){this.a.$0()}}
P.jg.prototype={
$0:function(){this.a.$0()}}
P.et.prototype={
eJ:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bY(new P.jS(this,b),0),a)
else throw H.c(P.w("`setTimeout()` not found."))},
eK:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bY(new P.jR(this,a,Date.now(),b),0),a)
else throw H.c(P.w("Periodic timer."))},
$idx:1}
P.jS.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jR.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.eC(u,q)}s.c=r
t.d.$1(s)}}
P.jb.prototype={
cb:function(a,b){var u=!this.b||H.eL(b,"$iae",this.$ti,"$aae"),t=this.a
if(u)t.cS(b)
else t.cY(b)},
bq:function(a,b){var u=this.a
if(this.b)u.bf(a,b)
else u.cT(a,b)}}
P.k1.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:17}
P.k2.prototype={
$2:function(a,b){this.a.$2(1,new H.c7(a,b))},
$S:18}
P.ke.prototype={
$2:function(a,b){this.a(a,b)}}
P.ae.prototype={}
P.dP.prototype={
bq:function(a,b){var u
if(a==null)a=new P.cl()
u=this.a
if(u.a!==0)throw H.c(P.mb("Future already completed"))
u.cT(a,b)},
dz:function(a){return this.bq(a,null)}}
P.jc.prototype={
cb:function(a,b){var u=this.a
if(u.a!==0)throw H.c(P.mb("Future already completed"))
u.cS(b)}}
P.dZ.prototype={
iE:function(a){if((this.c&15)!==6)return!0
return this.b.b.cz(this.d,a.a)},
iw:function(a){var u=this.e,t=this.b.b
if(H.lB(u,{func:1,args:[P.P,P.au]}))return t.ja(u,a.a,a.b)
else return t.cz(u,a.a)}}
P.ah.prototype={
cA:function(a,b,c){var u,t=$.D
if(t!==C.e)b=b!=null?P.p5(b,t):b
u=new P.ah($.D,[c])
this.bH(new P.dZ(u,b==null?1:3,a,b))
return u},
el:function(a,b){return this.cA(a,null,b)},
di:function(a,b,c){var u=new P.ah($.D,[c])
this.bH(new P.dZ(u,(b==null?1:3)|16,a,b))
return u},
bH:function(a){var u,t=this,s=t.a
if(s<=1){a.a=t.c
t.c=a}else{if(s===2){s=t.c
u=s.a
if(u<4){s.bH(a)
return}t.a=u
t.c=s.c}P.bV(null,null,t.b,new P.jn(t,a))}},
da:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=p.c
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){u=p.c
q=u.a
if(q<4){u.da(a)
return}p.a=q
p.c=u.c}o.a=p.bl(a)
P.bV(null,null,p.b,new P.jv(o,p))}},
bk:function(){var u=this.c
this.c=null
return this.bl(u)},
bl:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
f0:function(a){var u,t=this,s=t.$ti
if(H.eL(a,"$iae",s,"$aae"))if(H.eL(a,"$iah",s,null))P.jq(a,t)
else P.mr(a,t)
else{u=t.bk()
t.a=4
t.c=a
P.bQ(t,u)}},
cY:function(a){var u=this,t=u.bk()
u.a=4
u.c=a
P.bQ(u,t)},
bf:function(a,b){var u=this,t=u.bk()
u.a=8
u.c=new P.bw(a,b)
P.bQ(u,t)},
cS:function(a){var u=this
if(H.eL(a,"$iae",u.$ti,"$aae")){u.eY(a)
return}u.a=1
P.bV(null,null,u.b,new P.jp(u,a))},
eY:function(a){var u=this
if(H.eL(a,"$iah",u.$ti,null)){if(a.a===8){u.a=1
P.bV(null,null,u.b,new P.ju(u,a))}else P.jq(a,u)
return}P.mr(a,u)},
cT:function(a,b){this.a=1
P.bV(null,null,this.b,new P.jo(this,a,b))},
$iae:1}
P.jn.prototype={
$0:function(){P.bQ(this.a,this.b)}}
P.jv.prototype={
$0:function(){P.bQ(this.b,this.a.a)}}
P.jr.prototype={
$1:function(a){var u=this.a
u.a=0
u.f0(a)},
$S:10}
P.js.prototype={
$2:function(a,b){this.a.bf(a,b)},
$1:function(a){return this.$2(a,null)},
$S:20}
P.jt.prototype={
$0:function(){this.a.bf(this.b,this.c)}}
P.jp.prototype={
$0:function(){this.a.cY(this.b)}}
P.ju.prototype={
$0:function(){P.jq(this.b,this.a)}}
P.jo.prototype={
$0:function(){this.a.bf(this.b,this.c)}}
P.jy.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.ek(s.d)}catch(r){u=H.a3(r)
t=H.br(r)
if(o.d){s=o.a.a.c.a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=o.a.a.c
else q.b=new P.bw(u,t)
q.a=!0
return}if(!!J.N(n).$iae){if(n instanceof P.ah&&n.a>=4){if(n.a===8){s=o.b
s.b=n.c
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.el(new P.jz(p),null)
s.a=!1}}}
P.jz.prototype={
$1:function(a){return this.a},
$S:21}
P.jx.prototype={
$0:function(){var u,t,s,r,q=this
try{s=q.b
q.a.b=s.b.b.cz(s.d,q.c)}catch(r){u=H.a3(r)
t=H.br(r)
s=q.a
s.b=new P.bw(u,t)
s.a=!0}}}
P.jw.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=m.a.a.c
r=m.c
if(r.iE(u)&&r.e!=null){q=m.b
q.b=r.iw(u)
q.a=!1}}catch(p){t=H.a3(p)
s=H.br(p)
r=m.a.a.c
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.bw(t,s)
n.a=!0}}}
P.dN.prototype={}
P.dt.prototype={}
P.il.prototype={}
P.jN.prototype={}
P.dx.prototype={}
P.bw.prototype={
h:function(a){return H.f(this.a)},
$ib7:1}
P.k0.prototype={}
P.kc.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cl():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.h(0)
throw u}}
P.jG.prototype={
jc:function(a){var u,t,s,r=null
try{if(C.e===$.D){a.$0()
return}P.mB(r,r,this,a)}catch(s){u=H.a3(s)
t=H.br(s)
P.kb(r,r,this,u,t)}},
je:function(a,b){var u,t,s,r=null
try{if(C.e===$.D){a.$1(b)
return}P.mC(r,r,this,a,b)}catch(s){u=H.a3(s)
t=H.br(s)
P.kb(r,r,this,u,t)}},
jf:function(a,b){return this.je(a,b,null)},
i5:function(a){return new P.jI(this,a)},
i4:function(a){return this.i5(a,null)},
c7:function(a){return new P.jH(this,a)},
dt:function(a,b){return new P.jJ(this,a,b)},
j9:function(a){if($.D===C.e)return a.$0()
return P.mB(null,null,this,a)},
ek:function(a){return this.j9(a,null)},
jd:function(a,b){if($.D===C.e)return a.$1(b)
return P.mC(null,null,this,a,b)},
cz:function(a,b){return this.jd(a,b,null,null)},
jb:function(a,b,c){if($.D===C.e)return a.$2(b,c)
return P.p6(null,null,this,a,b,c)},
ja:function(a,b,c){return this.jb(a,b,c,null,null,null)},
j4:function(a){return a},
eh:function(a){return this.j4(a,null,null,null)}}
P.jI.prototype={
$0:function(){return this.a.ek(this.b)}}
P.jH.prototype={
$0:function(){return this.a.jc(this.b)}}
P.jJ.prototype={
$1:function(a){return this.a.jf(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jD.prototype={
ga2:function(a){var u=new P.e3(this,this.r)
u.c=this.e
return u},
gk:function(a){return this.a},
m:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cX(u==null?s.b=P.lt():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cX(t==null?s.c=P.lt():t,b)}else return s.eO(0,b)},
eO:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.lt()
u=s.cZ(b)
t=r[u]
if(t==null)r[u]=[s.bK(b)]
else{if(s.d4(t,b)>=0)return!1
t.push(s.bK(b))}return!0},
Y:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hr(this.c,b)
else return this.hq(0,b)},
hq:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.fg(r,b)
t=s.d4(u,b)
if(t<0)return!1
s.dj(u.splice(t,1)[0])
return!0},
cX:function(a,b){if(a[b]!=null)return!1
a[b]=this.bK(b)
return!0},
hr:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.dj(u)
delete a[b]
return!0},
d7:function(){this.r=1073741823&this.r+1},
bK:function(a){var u,t=this,s=new P.jE(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.d7()
return s},
dj:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.d7()},
cZ:function(a){return J.cK(a)&1073741823},
fg:function(a,b){return a[this.cZ(b)]},
d4:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.A(a[t].a,b))return t
return-1}}
P.jE.prototype={}
P.e3.prototype={
gT:function(a){return this.d},
D:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bB(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.he.prototype={
$2:function(a,b){this.a.j(0,a,b)},
$S:4}
P.hf.prototype={$ik:1,$iq:1}
P.t.prototype={
ga2:function(a){return new H.d6(a,this.gk(a))},
I:function(a,b){return this.i(a,b)},
jj:function(a,b){var u,t,s=this,r=H.d([],[H.pm(s,a,"t",0)])
C.b.sk(r,s.gk(a))
for(u=0;u<s.gk(a);++u){t=s.i(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t}return r},
ji:function(a){return this.jj(a,!0)},
ip:function(a,b,c,d){var u
P.bj(b,c,this.gk(a))
for(u=b;u<c;++u)this.j(a,u,d)},
h:function(a){return P.le(a,"[","]")}}
P.hi.prototype={}
P.hj.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.f(a)
t.a=u+": "
t.a+=H.f(b)},
$S:4}
P.aP.prototype={
q:function(a,b){var u,t
for(u=J.bv(this.gaw(a));u.D();){t=u.gT(u)
b.$2(t,this.i(a,t))}},
gk:function(a){return J.ac(this.gaw(a))},
h:function(a){return P.lj(a)},
$iT:1}
P.jT.prototype={
j:function(a,b,c){throw H.c(P.w("Cannot modify unmodifiable map"))}}
P.hk.prototype={
i:function(a,b){return J.z(this.a,b)},
j:function(a,b,c){J.l0(this.a,b,c)},
q:function(a,b){J.l3(this.a,b)},
gk:function(a){return J.ac(this.a)},
h:function(a){return J.aj(this.a)},
$iT:1}
P.dF.prototype={}
P.jK.prototype={
h:function(a){return P.le(this,"{","}")},
I:function(a,b){var u,t,s
P.m5(b,"index")
for(u=P.op(this,this.r),t=0;u.D();){s=u.d
if(b===t)return s;++t}throw H.c(P.M(b,this,"index",null,t))},
$ik:1}
P.e4.prototype={}
P.ez.prototype={}
P.eZ.prototype={
iF:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bj(a0,a1,b.length)
u=$.nd()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.a.F(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kj(C.a.F(b,n))
j=H.kj(C.a.F(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.b(u,i)
h=u[i]
if(h>=0){i=C.a.S("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.W("")
g=r.a+=C.a.u(b,s,t)
r.a=g+H.dj(m)
s=n
continue}}throw H.c(P.O("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.u(b,s,a1)
f=g.length
if(q>=0)P.lJ(b,p,a1,q,o,f)
else{e=C.c.bb(f-1,4)+1
if(e===1)throw H.c(P.O(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aV(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lJ(b,p,a1,q,o,d)
else{e=C.c.bb(d,4)
if(e===1)throw H.c(P.O(c,b,a1))
if(e>1)b=C.a.aV(b,a1,a1,e===2?"==":"=")}return b}}
P.f_.prototype={}
P.f7.prototype={}
P.fc.prototype={}
P.fq.prototype={}
P.iX.prototype={
gim:function(){return C.G}}
P.iZ.prototype={
cc:function(a){var u,t,s=P.bj(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.k_(u)
if(t.ff(a,0,s)!==s)t.dn(J.nj(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oH(0,t.b,u.length)))}}
P.k_.prototype={
dn:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
ff:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.S(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.F(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dn(r,C.a.F(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iY.prototype={
cc:function(a){var u,t,s,r,q,p,o,n,m=P.of(!1,a,0,null)
if(m!=null)return m
u=P.bj(0,null,J.ac(a))
t=P.mE(a,0,u)
if(t>0){s=P.cq(a,0,t)
if(t===u)return s
r=new P.W(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.W("")
o=new P.jZ(!1,r)
o.c=p
o.i8(a,q,u)
if(o.e>0){H.m(P.O("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.dj(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jZ.prototype={
i8:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.cH(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.am()
if((r&192)!==128){q=P.O(k+C.c.b9(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.b(C.r,q)
if(j<=C.r[q]){q=P.O("Overlong encoding of 0x"+C.c.b9(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.O("Character outside valid Unicode range: 0x"+C.c.b9(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.dj(j)
l.c=!1}for(q=s<c;q;){p=P.mE(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.cq(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.C()
if(r<0){m=P.O("Negative UTF-8 code unit: -0x"+C.c.b9(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.O(k+C.c.b9(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.bp.prototype={}
P.ak.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.ak&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.c.aO(u,30))&1073741823},
h:function(a){var u=this,t=P.nw(H.o_(u)),s=P.cS(H.nY(u)),r=P.cS(H.nU(u)),q=P.cS(H.nV(u)),p=P.cS(H.nX(u)),o=P.cS(H.nZ(u)),n=P.nx(H.nW(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.K.prototype={}
P.b6.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.b6&&this.a===b.a},
gH:function(a){return C.c.gH(this.a)},
h:function(a){var u,t,s,r=new P.fo(),q=this.a
if(q<0)return"-"+new P.b6(0-q).h(0)
u=r.$1(C.c.a9(q,6e7)%60)
t=r.$1(C.c.a9(q,1e6)%60)
s=new P.fn().$1(q%1e6)
return""+C.c.a9(q,36e8)+":"+H.f(u)+":"+H.f(t)+"."+H.f(s)}}
P.fn.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fo.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.b7.prototype={}
P.cl.prototype={
h:function(a){return"Throw of null."}}
P.aw.prototype={
gbM:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbL:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbM()+o+u
if(!q.a)return t
s=q.gbL()
r=P.ld(q.b)
return t+s+": "+r}}
P.bJ.prototype={
gbM:function(){return"RangeError"},
gbL:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.f(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.f(s)
else if(t>s)u=": Not in range "+H.f(s)+".."+H.f(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.f(s)}return u}}
P.fF.prototype={
gbM:function(){return"RangeError"},
gbL:function(){var u,t=this.b
if(typeof t!=="number")return t.C()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.f(u)},
gk:function(a){return this.f}}
P.iQ.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.iM.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ds.prototype={
h:function(a){return"Bad state: "+this.a}}
P.f9.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ld(u)+"."}}
P.hP.prototype={
h:function(a){return"Out of Memory"},
$ib7:1}
P.dq.prototype={
h:function(a){return"Stack Overflow"},
$ib7:1}
P.fh.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dW.prototype={
h:function(a){return"Exception: "+this.a}}
P.fA.prototype={
h:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=i!=null&&""!==i?"FormatException: "+H.f(i):"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.u(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.F(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.S(f,q)
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
k=""}j=C.a.u(f,m,n)
return h+l+j+k+"\n"+C.a.l(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.f(g)+")"):h}}
P.u.prototype={}
P.k.prototype={
gk:function(a){var u,t=this.ga2(this)
for(u=0;t.D();)++u
return u},
I:function(a,b){var u,t,s
P.m5(b,"index")
for(u=this.ga2(this),t=0;u.D();){s=u.gT(u)
if(b===t)return s;++t}throw H.c(P.M(b,this,"index",null,t))},
h:function(a){return P.nC(this,"(",")")}}
P.h4.prototype={}
P.q.prototype={$ik:1}
P.T.prototype={}
P.Y.prototype={
gH:function(a){return P.P.prototype.gH.call(this,this)},
h:function(a){return"null"}}
P.ap.prototype={}
P.P.prototype={constructor:P.P,$iP:1,
v:function(a,b){return this===b},
gH:function(a){return H.cn(this)},
h:function(a){return"Instance of '"+H.f(H.co(this))+"'"},
toString:function(){return this.h(this)}}
P.lm.prototype={}
P.au.prototype={}
P.p.prototype={}
P.W.prototype={
gk:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iV.prototype={
$2:function(a,b){var u,t,s,r=J.c_(b).cm(b,"=")
if(r===-1){if(b!=="")J.l0(a,P.lx(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.u(b,0,r)
t=C.a.ad(b,r+1)
s=this.a
J.l0(a,P.lx(u,0,u.length,s,!0),P.lx(t,0,t.length,s,!0))}return a}}
P.iS.prototype={
$2:function(a,b){throw H.c(P.O("Illegal IPv4 address, "+a,this.a,b))}}
P.iT.prototype={
$2:function(a,b){throw H.c(P.O("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iU.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.bs(C.a.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.C()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bR.prototype={
geq:function(){return this.b},
gcl:function(a){var u=this.c
if(u==null)return""
if(C.a.af(u,"["))return C.a.u(u,1,u.length-1)
return u},
gbw:function(a){var u=this.d
if(u==null)return P.mt(this.a)
return u},
gcv:function(a){var u=this.f
return u==null?"":u},
gdV:function(){var u=this.r
return u==null?"":u},
cw:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.af(u,"/"))u="/"+u
s=P.lv(null,0,0,b)
return new P.bR(q,o,m,n,u,s,r.r)},
gaU:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.p
u=this.Q=new P.dF(P.mj(t==null?"":t),[u,u])
t=u}return t},
gdW:function(){return this.c!=null},
gdZ:function(){return this.f!=null},
gdX:function(){return this.r!=null},
h:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.f(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.f(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.f(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.N(b).$ilq)if(s.a==b.gbD())if(s.c!=null===b.gdW())if(s.b==b.geq())if(s.gcl(s)==b.gcl(b))if(s.gbw(s)==b.gbw(b))if(s.e===b.gec(b)){u=s.f
t=u==null
if(!t===b.gdZ()){if(t)u=""
if(u===b.gcv(b)){u=s.r
t=u==null
if(!t===b.gdX()){if(t)u=""
u=u===b.gdV()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gH:function(a){var u=this.z
return u==null?this.z=C.a.gH(this.h(0)):u},
$ilq:1,
gbD:function(){return this.a},
gec:function(a){return this.e}}
P.jU.prototype={
$1:function(a){throw H.c(P.O("Invalid port",this.a,this.b+1))}}
P.jV.prototype={
$1:function(a){return P.jY(C.P,a,C.f,!1)}}
P.jX.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.f(P.jY(C.h,a,C.f,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.f(P.jY(C.h,b,C.f,!0))}}}
P.jW.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.bv(b),t=this.a;u.D();)t.$2(a,u.gT(u))}}
P.iR.prototype={
gep:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.b(o,0)
u=q.a
o=o[0]+1
t=C.a.bt(u,"?",o)
s=u.length
if(t>=0){r=P.cE(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jk("data",p,p,p,P.cE(u,o,s,C.u,!1),r,p)},
h:function(a){var u,t=this.b
if(0>=t.length)return H.b(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.k4.prototype={
$1:function(a){return new Uint8Array(96)}}
P.k3.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.b(u,a)
u=u[a]
J.nk(u,0,96,b)
return u},
$S:22}
P.k5.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.F(b,s)^96
if(r>=t)return H.b(a,r)
a[r]=c}}}
P.k6.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.F(b,0),t=C.a.F(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.b(a,r)
a[r]=c}}}
P.jL.prototype={
gdW:function(){return this.c>0},
gdY:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.e(t)
t=u+1<t
u=t}else u=!1
return u},
gdZ:function(){var u=this.f
if(typeof u!=="number")return u.C()
return u<this.r},
gdX:function(){return this.r<this.a.length},
gd5:function(){return this.b===4&&C.a.af(this.a,"http")},
gd6:function(){return this.b===5&&C.a.af(this.a,"https")},
gbD:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gd5())q=t.x="http"
else if(t.gd6()){t.x="https"
q="https"}else if(q===4&&C.a.af(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.af(t.a,r)){t.x=r
q=r}else{q=C.a.u(t.a,0,q)
t.x=q}return q},
geq:function(){var u=this.c,t=this.b+3
return u>t?C.a.u(this.a,t,u-1):""},
gcl:function(a){var u=this.c
return u>0?C.a.u(this.a,u,this.d):""},
gbw:function(a){var u,t=this
if(t.gdY()){u=t.d
if(typeof u!=="number")return u.p()
return P.bs(C.a.u(t.a,u+1,t.e),null,null)}if(t.gd5())return 80
if(t.gd6())return 443
return 0},
gec:function(a){return C.a.u(this.a,this.e,this.f)},
gcv:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.C()
return u<t?C.a.u(this.a,u+1,t):""},
gdV:function(){var u=this.r,t=this.a
return u<t.length?C.a.ad(t,u+1):""},
gaU:function(){var u=this,t=u.f
if(typeof t!=="number")return t.C()
if(t>=u.r)return C.Q
t=P.p
return new P.dF(P.mj(u.gcv(u)),[t,t])},
cw:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbD(),m=n==="file",l=p.c,k=l>0?C.a.u(p.a,p.b+3,l):"",j=p.gdY()?p.gbw(p):o
l=p.c
if(l>0)u=C.a.u(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.u(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.af(t,"/"))t="/"+t
r=P.lv(o,0,0,b)
s=p.r
q=s<l.length?C.a.ad(l,s+1):o
return new P.bR(n,k,u,j,t,r,q)},
gH:function(a){var u=this.y
return u==null?this.y=C.a.gH(this.a):u},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.N(b).$ilq&&this.a===b.h(0)},
h:function(a){return this.a},
$ilq:1}
P.jk.prototype={}
W.o.prototype={}
W.eQ.prototype={
gk:function(a){return a.length}}
W.eS.prototype={
h:function(a){return String(a)}}
W.eT.prototype={
h:function(a){return String(a)}}
W.by.prototype={$iby:1}
W.bA.prototype={
cD:function(a,b,c){if(c!=null)return a.getContext(b,P.pd(c))
return a.getContext(b)},
eu:function(a,b){return this.cD(a,b,null)},
$ibA:1}
W.b4.prototype={
gk:function(a){return a.length}}
W.fd.prototype={
gk:function(a){return a.length}}
W.G.prototype={$iG:1}
W.c6.prototype={
gk:function(a){return a.length}}
W.fe.prototype={}
W.aq.prototype={}
W.aC.prototype={}
W.ff.prototype={
gk:function(a){return a.length}}
W.fg.prototype={
gk:function(a){return a.length}}
W.fi.prototype={
gk:function(a){return a.length}}
W.fk.prototype={
h:function(a){return String(a)}}
W.cU.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[[P.an,P.ap]]},
$at:function(){return[[P.an,P.ap]]},
$ik:1,
$ak:function(){return[[P.an,P.ap]]},
$iq:1,
$aq:function(){return[[P.an,P.ap]]}}
W.cV.prototype={
h:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gaH(a))+" x "+H.f(this.gaE(a))},
v:function(a,b){var u
if(b==null)return!1
u=J.N(b)
if(!u.$ian)return!1
return a.left===u.gbv(b)&&a.top===u.gby(b)&&this.gaH(a)===u.gaH(b)&&this.gaE(a)===u.gaE(b)},
gH:function(a){return W.ms(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(this.gaH(a)),C.d.gH(this.gaE(a)))},
gdu:function(a){return a.bottom},
gaE:function(a){return a.height},
gbv:function(a){return a.left},
gbx:function(a){return a.right},
gby:function(a){return a.top},
gaH:function(a){return a.width},
$ian:1,
$aan:function(){return[P.ap]}}
W.fl.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[P.p]},
$at:function(){return[P.p]},
$ik:1,
$ak:function(){return[P.p]},
$iq:1,
$aq:function(){return[P.p]}}
W.fm.prototype={
gk:function(a){return a.length}}
W.ji.prototype={
gk:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
j:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
this.a.replaceChild(c,u[b])},
m:function(a,b){this.a.appendChild(b)
return b},
ga2:function(a){var u=this.ji(this)
return new J.a9(u,u.length)},
$at:function(){return[W.a5]},
$ak:function(){return[W.a5]},
$aq:function(){return[W.a5]}}
W.a5.prototype={
gca:function(a){return new W.ji(a,a.children)},
gdw:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.C()
if(s<0)s=-s*0
if(typeof r!=="number")return r.C()
if(r<0)r=-r*0
return new P.an(u,t,s,r,[P.ap])},
h:function(a){return a.localName},
$ia5:1}
W.j.prototype={$ij:1}
W.h.prototype={
hX:function(a,b,c,d){if(c!=null)this.eP(a,b,c,!1)},
eP:function(a,b,c,d){return a.addEventListener(b,H.bY(c,1),!1)}}
W.aE.prototype={$iaE:1}
W.c8.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aE]},
$at:function(){return[W.aE]},
$ik:1,
$ak:function(){return[W.aE]},
$iq:1,
$aq:function(){return[W.aE]},
$ic8:1}
W.fv.prototype={
gk:function(a){return a.length}}
W.fz.prototype={
gk:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.fC.prototype={
gk:function(a){return a.length}}
W.ca.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.B]},
$at:function(){return[W.B]},
$ik:1,
$ak:function(){return[W.B]},
$iq:1,
$aq:function(){return[W.B]}}
W.bC.prototype={
iO:function(a,b,c,d){return a.open(b,c,!0)},
$ibC:1}
W.fD.prototype={
$1:function(a){return a.responseText}}
W.fE.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.status
if(typeof q!=="number")return q.bC()
u=q>=200&&q<300
t=q>307&&q<400
q=u||q===0||q===304||t
s=this.b
if(q)s.cb(0,r)
else s.dz(a)}}
W.cb.prototype={}
W.aO.prototype={$iaO:1,
gdA:function(a){return a.data}}
W.cc.prototype={$icc:1}
W.f6.prototype={$ia5:1,$iB:1}
W.bG.prototype={$ibG:1}
W.hg.prototype={
h:function(a){return String(a)}}
W.hA.prototype={
gk:function(a){return a.length}}
W.cg.prototype={$icg:1}
W.hB.prototype={
i:function(a,b){return P.b1(a.get(b))},
q:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b1(u.value[1]))}},
gaw:function(a){var u=H.d([],[P.p])
this.q(a,new W.hC(u))
return u},
gk:function(a){return a.size},
j:function(a,b,c){throw H.c(P.w("Not supported"))},
$iT:1,
$aT:function(){return[P.p,null]}}
W.hC.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hD.prototype={
i:function(a,b){return P.b1(a.get(b))},
q:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b1(u.value[1]))}},
gaw:function(a){var u=H.d([],[P.p])
this.q(a,new W.hE(u))
return u},
gk:function(a){return a.size},
j:function(a,b,c){throw H.c(P.w("Not supported"))},
$iT:1,
$aT:function(){return[P.p,null]}}
W.hE.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aR.prototype={$iaR:1}
W.hF.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aR]},
$at:function(){return[W.aR]},
$ik:1,
$ak:function(){return[W.aR]},
$iq:1,
$aq:function(){return[W.aR]}}
W.aH.prototype={$iaH:1}
W.jh.prototype={
j:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.b(t,b)
u.replaceChild(c,t[b])},
ga2:function(a){var u=this.a.childNodes
return new W.cY(u,u.length)},
gk:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$at:function(){return[W.B]},
$ak:function(){return[W.B]},
$aq:function(){return[W.B]}}
W.B.prototype={
j6:function(a,b){var u,t
try{u=a.parentNode
J.nh(u,b,a)}catch(t){H.a3(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.eA(a):u},
hs:function(a,b,c){return a.replaceChild(b,c)},
$iB:1}
W.df.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.B]},
$at:function(){return[W.B]},
$ik:1,
$ak:function(){return[W.B]},
$iq:1,
$aq:function(){return[W.B]}}
W.aU.prototype={$iaU:1,
gk:function(a){return a.length}}
W.hR.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aU]},
$at:function(){return[W.aU]},
$ik:1,
$ak:function(){return[W.aU]},
$iq:1,
$aq:function(){return[W.aU]}}
W.cp.prototype={$icp:1}
W.i2.prototype={
i:function(a,b){return P.b1(a.get(b))},
q:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b1(u.value[1]))}},
gaw:function(a){var u=H.d([],[P.p])
this.q(a,new W.i3(u))
return u},
gk:function(a){return a.size},
j:function(a,b,c){throw H.c(P.w("Not supported"))},
$iT:1,
$aT:function(){return[P.p,null]}}
W.i3.prototype={
$2:function(a,b){return this.a.push(a)}}
W.i5.prototype={
gk:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.id.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aV]},
$at:function(){return[W.aV]},
$ik:1,
$ak:function(){return[W.aV]},
$iq:1,
$aq:function(){return[W.aV]}}
W.aW.prototype={$iaW:1}
W.ie.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aW]},
$at:function(){return[W.aW]},
$ik:1,
$ak:function(){return[W.aW]},
$iq:1,
$aq:function(){return[W.aW]}}
W.aX.prototype={$iaX:1,
gk:function(a){return a.length}}
W.ij.prototype={
i:function(a,b){return a.getItem(b)},
j:function(a,b,c){a.setItem(b,c)},
q:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaw:function(a){var u=H.d([],[P.p])
this.q(a,new W.ik(u))
return u},
gk:function(a){return a.length},
$iT:1,
$aT:function(){return[P.p,P.p]}}
W.ik.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aI.prototype={$iaI:1}
W.aY.prototype={$iaY:1}
W.aJ.prototype={$iaJ:1}
W.iq.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aJ]},
$at:function(){return[W.aJ]},
$ik:1,
$ak:function(){return[W.aJ]},
$iq:1,
$aq:function(){return[W.aJ]}}
W.ir.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aY]},
$at:function(){return[W.aY]},
$ik:1,
$ak:function(){return[W.aY]},
$iq:1,
$aq:function(){return[W.aY]}}
W.ix.prototype={
gk:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.bL.prototype={$ibL:1}
W.iA.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aZ]},
$at:function(){return[W.aZ]},
$ik:1,
$ak:function(){return[W.aZ]},
$iq:1,
$aq:function(){return[W.aZ]}}
W.iB.prototype={
gk:function(a){return a.length}}
W.bl.prototype={}
W.iW.prototype={
h:function(a){return String(a)}}
W.j7.prototype={
gk:function(a){return a.length}}
W.bn.prototype={
gic:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.w("deltaY is not supported"))},
gib:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.w("deltaX is not supported"))},
$ibn:1}
W.cv.prototype={
ht:function(a,b){return a.requestAnimationFrame(H.bY(b,1))},
f5:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jj.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.G]},
$at:function(){return[W.G]},
$ik:1,
$ak:function(){return[W.G]},
$iq:1,
$aq:function(){return[W.G]}}
W.dR.prototype={
h:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
v:function(a,b){var u
if(b==null)return!1
u=J.N(b)
if(!u.$ian)return!1
return a.left===u.gbv(b)&&a.top===u.gby(b)&&a.width===u.gaH(b)&&a.height===u.gaE(b)},
gH:function(a){return W.ms(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(a.width),C.d.gH(a.height))},
gaE:function(a){return a.height},
gaH:function(a){return a.width}}
W.jA.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aN]},
$at:function(){return[W.aN]},
$ik:1,
$ak:function(){return[W.aN]},
$iq:1,
$aq:function(){return[W.aN]}}
W.ea.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.B]},
$at:function(){return[W.B]},
$ik:1,
$ak:function(){return[W.B]},
$iq:1,
$aq:function(){return[W.B]}}
W.jM.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aX]},
$at:function(){return[W.aX]},
$ik:1,
$ak:function(){return[W.aX]},
$iq:1,
$aq:function(){return[W.aX]}}
W.jQ.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aI]},
$at:function(){return[W.aI]},
$ik:1,
$ak:function(){return[W.aI]},
$iq:1,
$aq:function(){return[W.aI]}}
W.jl.prototype={}
W.jm.prototype={
$1:function(a){return this.a.$1(a)}}
W.L.prototype={
ga2:function(a){return new W.cY(a,this.gk(a))}}
W.cY.prototype={
D:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.z(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gT:function(a){return this.d}}
W.dQ.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.cA.prototype={}
W.cB.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.en.prototype={}
W.er.prototype={}
W.es.prototype={}
W.cC.prototype={}
W.cD.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
P.jO.prototype={
dT:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
bB:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.N(a)
if(!!u.$iak)return new Date(a.a)
if(!!u.$io4)throw H.c(P.iN("structured clone of RegExp"))
if(!!u.$iaE)return a
if(!!u.$iby)return a
if(!!u.$ic8)return a
if(!!u.$iaO)return a
if(!!u.$ici||!!u.$ibg||!!u.$icg)return a
if(!!u.$iT){t=p.dT(a)
s=p.b
r=s.length
if(t>=r)return H.b(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.b(s,t)
s[t]=q
u.q(a,new P.jP(o,p))
return o.a}if(!!u.$iq){t=p.dT(a)
o=p.b
if(t>=o.length)return H.b(o,t)
q=o[t]
if(q!=null)return q
return p.i9(a,t)}throw H.c(P.iN("structured clone of other type"))},
i9:function(a,b){var u,t=J.cH(a),s=t.gk(a),r=new Array(s),q=this.b
if(b>=q.length)return H.b(q,b)
q[b]=r
for(u=0;u<s;++u){q=this.bB(t.i(a,u))
if(u>=r.length)return H.b(r,u)
r[u]=q}return r}}
P.jP.prototype={
$2:function(a,b){this.a.a[a]=this.b.bB(b)},
$S:4}
P.ey.prototype={$iaO:1,
gdA:function(a){return this.a}}
P.kf.prototype={
$2:function(a,b){this.a[a]=b},
$S:4}
P.eq.prototype={}
P.fw.prototype={
gbh:function(){var u=this.b,t=H.mP(u,"t",0)
return new H.hl(new H.j8(u,new P.fx(),[t]),new P.fy(),[t,W.a5])},
j:function(a,b,c){var u=this.gbh()
J.nl(u.b.$1(J.l2(u.a,b)),c)},
m:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.ac(this.gbh().a)},
i:function(a,b){var u=this.gbh()
return u.b.$1(J.l2(u.a,b))},
ga2:function(a){var u=P.lV(this.gbh(),!1,W.a5)
return new J.a9(u,u.length)},
$at:function(){return[W.a5]},
$ak:function(){return[W.a5]},
$aq:function(){return[W.a5]}}
P.fx.prototype={
$1:function(a){return!!J.N(a).$ia5}}
P.fy.prototype={
$1:function(a){return H.l(a,"$ia5")}}
P.jF.prototype={
gbx:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
return u+t},
gdu:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.f(u.a)+", "+H.f(u.b)+") "+H.f(u.c)+" x "+H.f(u.d)},
v:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.N(b)
if(!!u.$ian){t=q.a
if(t==u.gbv(b)){s=q.b
if(s==u.gby(b)){r=q.c
if(typeof t!=="number")return t.p()
if(typeof r!=="number")return H.e(r)
if(t+r===u.gbx(b)){t=q.d
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.e(t)
u=s+t===u.gdu(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u=this,t=u.a,s=J.cK(t),r=u.b,q=J.cK(r),p=u.c
if(typeof t!=="number")return t.p()
if(typeof p!=="number")return H.e(p)
p=C.c.gH(t+p)
t=u.d
if(typeof r!=="number")return r.p()
if(typeof t!=="number")return H.e(t)
t=C.c.gH(r+t)
return P.oo(P.jC(P.jC(P.jC(P.jC(0,s),q),p),t))}}
P.an.prototype={
gbv:function(a){return this.a},
gby:function(a){return this.b},
gaH:function(a){return this.c},
gaE:function(a){return this.d}}
P.bd.prototype={$ibd:1}
P.ha.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$at:function(){return[P.bd]},
$ik:1,
$ak:function(){return[P.bd]},
$iq:1,
$aq:function(){return[P.bd]}}
P.bh.prototype={$ibh:1}
P.hN.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$at:function(){return[P.bh]},
$ik:1,
$ak:function(){return[P.bh]},
$iq:1,
$aq:function(){return[P.bh]}}
P.hU.prototype={
gk:function(a){return a.length}}
P.im.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$at:function(){return[P.p]},
$ik:1,
$ak:function(){return[P.p]},
$iq:1,
$aq:function(){return[P.p]}}
P.n.prototype={
gca:function(a){return new P.fw(a,new W.jh(a))}}
P.bk.prototype={$ibk:1}
P.iC.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$at:function(){return[P.bk]},
$ik:1,
$ak:function(){return[P.bk]},
$iq:1,
$aq:function(){return[P.bk]}}
P.e1.prototype={}
P.e2.prototype={}
P.ed.prototype={}
P.ee.prototype={}
P.eo.prototype={}
P.ep.prototype={}
P.ew.prototype={}
P.ex.prototype={}
P.bM.prototype={$ik:1,
$ak:function(){return[P.u]},
$iq:1,
$aq:function(){return[P.u]}}
P.eV.prototype={
gk:function(a){return a.length}}
P.eW.prototype={
i:function(a,b){return P.b1(a.get(b))},
q:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b1(u.value[1]))}},
gaw:function(a){var u=H.d([],[P.p])
this.q(a,new P.eX(u))
return u},
gk:function(a){return a.size},
j:function(a,b,c){throw H.c(P.w("Not supported"))},
$iT:1,
$aT:function(){return[P.p,null]}}
P.eX.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eY.prototype={
gk:function(a){return a.length}}
P.bx.prototype={}
P.hO.prototype={
gk:function(a){return a.length}}
P.dO.prototype={}
P.dl.prototype={
jg:function(a,b,c,d,e,f,g){var u,t=J.N(g)
if(!!t.$iaO)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.pe(g))
return}if(!!t.$icc)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.cL("Incorrect number or type of arguments"))}}
P.ih.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return P.b1(a.item(b))},
j:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$at:function(){return[[P.T,,,]]},
$ik:1,
$ak:function(){return[[P.T,,,]]},
$iq:1,
$aq:function(){return[[P.T,,,]]}}
P.ek.prototype={}
P.el.prototype={}
T.eR.prototype={
aT:function(a,b){return!0},
h:function(a){return"all"}}
T.cZ.prototype={
aT:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)if(u[s].aT(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.r)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.d8.prototype={}
T.aT.prototype={
aT:function(a,b){return!this.ez(0,b)},
h:function(a){return"!["+this.cH(0)+"]"}}
T.i6.prototype={
eF:function(a){var u,t
if(a.a.length<=0)throw H.c(P.i("May not create a Set with zero characters."))
u=new H.I([P.u,P.bp])
for(t=new H.d6(a,a.gk(a));t.D();)u.j(0,t.d,!0)
this.a=u},
aT:function(a,b){return this.a.br(0,b)},
h:function(a){var u=this.a
return P.cq(u.gaw(u),0,null)}}
R.dr.prototype={
w:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.dB(this.a.P(0,b))
r.a=H.d([],[T.d8])
r.c=!1
this.c.push(r)
return r},
iq:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
if(r.aT(0,a))return r}return},
h:function(a){return this.b}}
R.dy.prototype={
h:function(a){var u=H.mW(this.b,"\n","\\n"),t=H.mW(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.dz.prototype={
h:function(a){return this.b}}
R.iy.prototype={
P:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.dr(this,b)
u.c=H.d([],[R.dB])
this.a.j(0,b,u)}return u},
ba:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.dz(a)
u=P.p
t.c=new H.I([u,u])
this.b.j(0,a,t)}return t},
jk:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[R.dy]),k=this.c,j=[P.u],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)l.push(t)
return l}r=C.a.F(a,s)
q=k.iq(r)
if(q==null){if(t==null){i.push(r)
p=P.cq(i,0,m)
throw H.c(P.i("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}l.push(t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)i.push(r)
k=q.b
if(k.d!=null){p=P.cq(i,0,m)
o=k.d
n=o.c.i(0,p)
t=new R.dy(n==null?o.b:n,p,s)}++s}}}}
R.dB.prototype={
h:function(a){return this.b.b+": "+this.cH(0)}}
O.b5.prototype={
bF:function(a){var u=this
u.a=H.d([],[a])
u.d=u.c=u.b=null},
cE:function(a,b,c){this.b=b
this.c=a
this.d=c},
bd:function(a,b){return this.cE(a,null,b)},
h4:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
eH:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
ga2:function(a){var u=this.a
return new J.a9(u,u.length)},
I:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
m:function(a,b){var u,t,s=this,r=[H.mP(s,"b5",0)]
if(s.h4(H.d([b],r))){u=s.a
t=u.length
u.push(b)
s.eH(t,H.d([b],r))}},
$ik:1}
O.cf.prototype={
gk:function(a){return this.a.length},
gB:function(){var u=this.b
return u==null?this.b=D.H():u},
aI:function(){var u=this.b
if(u!=null)u.J(null)},
ga1:function(a){var u=this.a
if(u.length>0)return C.b.gaF(u)
else return V.da()},
ef:function(a){var u=this.a
if(a==null)u.push(V.da())
else u.push(a)
this.aI()},
cu:function(){var u=this.a
if(u.length>0){u.pop()
this.aI()}}}
E.f0.prototype={}
E.aD.prototype={
cW:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.a9(u,u.length);u.D();){t=u.d
if(t.f==null)t.cW()}},
scF:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gB().Y(0,s.ge7())
u=s.c
if(u!=null)u.gB().m(0,s.ge7())
t=new D.v("shape",r,s.c)
t.b=!0
s.ap(t)}},
saX:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gB().Y(0,s.ge9())
u=s.f
s.f=a
if(a!=null)a.gB().m(0,s.ge9())
s.cW()
t=new D.v("technique",u,s.f)
t.b=!0
s.ap(t)}},
sb4:function(a){var u,t,s=this
if(!J.A(s.r,a)){u=s.r
if(u!=null)u.gB().Y(0,s.ge5())
if(a!=null)a.gB().m(0,s.ge5())
s.r=a
t=new D.v("mover",u,a)
t.b=!0
s.ap(t)}},
b2:function(){var u=this.d,t=u!=null?V.m9(null,u.b2()):null
for(u=this.y.a,u=new J.a9(u,u.length);u.D();)t=V.m9(t,u.d.b2())
return t},
j8:function(a){var u,t,s,r,q,p=this.b2(),o=V.ll(),n=p.a,m=p.d
if(typeof n!=="number")return n.p()
u=p.b
t=p.e
if(typeof u!=="number")return u.p()
s=p.c
r=p.f
if(typeof s!=="number")return s.p()
o=o.n(0,new V.af(n+m/2,u+t/2,s+r/2))
if(t>m)m=t
if(r>m)m=r
if(m===0)return
q=a/m
this.bo(V.lX(q,q,q).l(0,V.lY(o.a,o.b,o.c)))},
bo:function(a){var u=this.c
if(u!=null)u.bo(a)
for(u=this.y.a,u=new J.a9(u,u.length);u.D();)u.d.bo(a)},
al:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aY(0,b,s):null
if(!J.A(q,s.x)){u=s.x
s.x=q
t=new D.v("matrix",u,q)
t.b=!0
s.ap(t)}r=s.f
if(r!=null)r.al(0,b)
for(r=s.y.a,r=new J.a9(r,r.length);r.D();)r.d.al(0,b)},
aG:function(a){var u,t,s,r=this
if(!r.b)return
u=a.dx
t=r.x
u.toString
if(t==null)u.a.push(u.ga1(u))
else u.a.push(t.l(0,u.ga1(u)))
u.aI()
a.eg(r.f)
u=a.dy
s=(u&&C.b).gaF(u)
if(s!=null&&r.d!=null)s.ei(a,r)
for(u=r.y.a,u=new J.a9(u,u.length);u.D();)u.d.aG(a)
a.ed()
a.dx.cu()},
ap:function(a){var u=this.z
if(u!=null)u.J(a)},
X:function(){return this.ap(null)},
e8:function(a){this.e=null
this.ap(a)},
iM:function(){return this.e8(null)},
ea:function(a){this.ap(a)},
iN:function(){return this.ea(null)},
e6:function(a){this.ap(a)},
iL:function(){return this.e6(null)},
e4:function(a){this.ap(a)},
iI:function(){return this.e4(null)},
iH:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ge3(),s=[{func:1,ret:-1,args:[D.ad]}],r=0;r<b.length;b.length===u||(0,H.r)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.b8()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.d([],s):o).push(t)}}this.X()},
iK:function(a,b){var u,t,s,r,q
for(u=b.length,t=this.ge3(),s=0;s<b.length;b.length===u||(0,H.r)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.b8()
q.d=0
r.z=q}q.Y(0,t)}}this.X()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hZ.prototype={
eE:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ak(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cf()
t=[V.aQ]
u.a=H.d([],t)
u.gB().m(0,new E.i_(s))
s.cy=u
u=new O.cf()
u.a=H.d([],t)
u.gB().m(0,new E.i0(s))
s.db=u
u=new O.cf()
u.a=H.d([],t)
u.gB().m(0,new E.i1(s))
s.dx=u
u=H.d([],[O.du])
s.dy=u
u.push(null)
s.fr=new H.I([P.p,A.dm])},
gj3:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga1(s)
u=t.db
u=t.z=s.l(0,u.ga1(u))
s=u}return s},
gee:function(){var u,t=this,s=t.ch
if(s==null){s=t.gj3()
u=t.dx
u=t.ch=s.l(0,u.ga1(u))
s=u}return s},
ger:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.ga1(s)
u=t.dx
u=t.cx=s.l(0,u.ga1(u))
s=u}return s},
eg:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gaF(u):a)},
ed:function(){var u=this.dy
if(u.length>1)u.pop()},
ds:function(a){var u=a.b
if(u.length===0)throw H.c(P.i("May not cache a shader with no name."))
if(this.fr.br(0,u))throw H.c(P.i('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.j(0,u,a)}}
E.i_.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.i0.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.i1.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dw.prototype={
cN:function(a){this.ej()},
cM:function(){return this.cN(null)},
giv:function(){var u,t=this,s=Date.now(),r=C.c.a9(P.lN(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.ak(s,!1)
return u/r},
de:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.l()
if(typeof r!=="number")return H.e(r)
u=C.d.bs(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.l()
t=C.d.bs(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.me(C.n,s.gj7())}},
ej:function(){if(!this.cx){this.cx=!0
var u=window
C.x.f5(u)
C.x.ht(u,W.mI(new E.iw(this),P.ap))}},
j5:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.de()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ak(r,!1)
s.y=P.lN(r-s.r.a).a*0.000001
r=s.cy
C.b.sk(r.a,0)
r.aI()
r=s.db
C.b.sk(r.a,0)
r.aI()
r=s.dx
C.b.sk(r.a,0)
r.aI()
r=s.dy;(r&&C.b).sk(r,0)
s.dy.push(null)
o.aG(p.e)}}catch(q){u=H.a3(q)
t=H.br(q)
P.eN("Error: "+H.f(u))
P.eN("Stack: "+H.f(t))
throw H.c(u)}}}
E.iw.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.j5()}}}
Z.dL.prototype={}
Z.cN.prototype={
aB:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.a3(s)
t=P.i('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.f(u))
throw H.c(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.f(u.e)+"]"}}
Z.dM.prototype={}
Z.bz.prototype={
ah:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aB:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aB(a)},
eo:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aG:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
eb:function(a){this.aB(a)
this.aG(a)
this.eo(a)},
h:function(a){var u,t,s,r,q=[P.p],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)p.push(u[s].h(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.aj(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.w(p,", ")+"\nAttrs:   "+C.b.w(r,", ")}}
Z.cO.prototype={}
Z.bD.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.co(this.c))+"'")+"]"}}
Z.aL.prototype={
gcG:function(a){var u=this.a,t=(u&$.aA().a)!==0?3:0
if((u&$.az().a)!==0)t+=3
if((u&$.ay().a)!==0)t+=3
if((u&$.b3().a)!==0)t+=2
if((u&$.bu().a)!==0)t+=3
if((u&$.bt().a)!==0)t+=3
if((u&$.cJ().a)!==0)t+=4
if((u&$.c2().a)!==0)++t
return(u&$.b2().a)!==0?t+4:t},
i0:function(a){var u,t=$.aA(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.az()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ay()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b3()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bu()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bt()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cJ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c2()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b2()
if((s&t.a)!==0)if(u===a)return t
return $.nc()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aL))return!1
return this.a===b.a},
h:function(a){var u=H.d([],[P.p]),t=this.a
if((t&$.aA().a)!==0)u.push("Pos")
if((t&$.az().a)!==0)u.push("Norm")
if((t&$.ay().a)!==0)u.push("Binm")
if((t&$.b3().a)!==0)u.push("Txt2D")
if((t&$.bu().a)!==0)u.push("TxtCube")
if((t&$.bt().a)!==0)u.push("Clr3")
if((t&$.cJ().a)!==0)u.push("Clr4")
if((t&$.c2().a)!==0)u.push("Weight")
if((t&$.b2().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.w(u,"|")}}
D.f3.prototype={}
D.b8.prototype={
m:function(a,b){var u=this.a;(u==null?this.a=H.d([],[{func:1,ret:-1,args:[D.ad]}]):u).push(b)},
Y:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.ao(s,b)
if(s===!0){s=t.a
u=(s&&C.b).Y(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.ao(s,b)
if(s===!0){s=t.b
u=(s&&C.b).Y(s,b)||u}return u},
J:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.ad()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.q(P.lV(u,!0,{func:1,ret:-1,args:[D.ad]}),new D.ft(q))
u=r.b
if(u!=null){r.b=H.d([],[{func:1,ret:-1,args:[D.ad]}])
C.b.q(u,new D.fu(q))}return!0},
ij:function(){return this.J(null)},
aW:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.J(u)}}}}
D.ft.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fu.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.ad.prototype={}
D.bE.prototype={}
D.bF.prototype={}
D.v.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
O.k9.prototype={
ar:function(a,b,c){return this.j1(a,b,!1)},
j1:function(a,b,c){var u=0,t=P.a1(null),s=this
var $async$ar=P.a2(function(d,e){if(d===1)return P.Z(e,t)
while(true)switch(u){case 0:u=2
return P.a8(s.aq(H.d(a.split("\n"),[P.p]),b,!1),$async$ar)
case 2:return P.a_(null,t)}})
return P.a0($async$ar,t)},
aq:function(a,b,c){return this.j_(a,b,!1)},
j_:function(a,b,c){var u=0,t=P.a1(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i
var $async$aq=P.a2(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:j=0
case 3:if(!!0){u=4
break}m=j
l=a.length
if(typeof m!=="number"){s=m.C()
u=1
break}if(!(m<l)){u=4
break}r=6
m=j
if(m>>>0!==m||m>=l){s=H.b(a,m)
u=1
break}u=9
return P.a8(o.a3(a[m],b,!1),$async$aq)
case 9:r=2
u=8
break
case 6:r=5
i=q
n=H.a3(i)
m=j
if(typeof m!=="number"){s=m.p()
u=1
break}throw H.c(P.i("Line "+H.f(m+1)+": "+H.f(n)))
u=8
break
case 5:u=2
break
case 8:m=j
if(typeof m!=="number"){s=m.p()
u=1
break}j=m+1
u=3
break
case 4:case 1:return P.a_(s,t)
case 2:return P.Z(q,t)}})
return P.a0($async$aq,t)},
a3:function(a,b,c){return this.iY(a,b,!1)},
iY:function(a,b,c){var u=0,t=P.a1(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$a3=P.a2(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
n=J.lH(a,"#")
k=n
if(typeof k!=="number"){s=k.bC()
u=1
break}if(k>=0)a=J.lI(a,0,n)
a=J.l4(a)
if(J.ac(a)<=0){u=1
break}m=O.mH(a)
if(J.ac(m)<1){u=1
break}case 7:switch(J.z(m,0)){case"newmtl":u=9
break
case"Ka":u=10
break
case"Kd":u=11
break
case"Ks":u=12
break
case"Ns":u=13
break
case"d":u=14
break
case"Tr":u=15
break
case"map_Ka":u=16
break
case"map_Kd":u=17
break
case"map_Ks":u=18
break
case"map_d":u=19
break
case"map_bump":u=20
break
case"bump":u=21
break
default:u=22
break}break
case 9:k=J.z(m,1)
j=O.lW()
o.c=j
o.b.j(0,k,j)
u=1
break
case 10:i=O.b0(J.z(m,1))
o.c.r.sW(0,V.la(i))
u=1
break
case 11:i=O.b0(J.z(m,1))
o.c.x.sW(0,V.la(i))
u=1
break
case 12:i=O.b0(J.z(m,1))
o.c.z.sW(0,V.la(i))
u=1
break
case 13:i=O.b0(J.z(m,1))
k=i.length
if(k!==1)H.m(P.i("Shininess may only have 1 number."))
j=o.c.z
if(0>=k){s=H.b(i,0)
u=1
break}h=i[0]
j.toString
if(h==null)h=100
if(h<=0){j.aN(new A.X(!1,j.c.b,!1))
j.c3(0)}else{j.aN(new A.X(!0,j.c.b,!1))
j.c3(h)}u=1
break
case 14:i=O.b0(J.z(m,1))
k=i.length
if(k!==1)H.m(P.i("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.b(i,0)
u=1
break}j.saa(0,i[0])
u=1
break
case 15:i=O.b0(J.z(m,1))
k=i.length
if(k!==1)H.m(P.i("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.b(i,0)
u=1
break}k=i[0]
if(typeof k!=="number"){s=H.e(k)
u=1
break}j.saa(0,1-k)
u=1
break
case 16:u=23
return P.a8(o.bZ(J.z(m,1),b),$async$a3)
case 23:u=1
break
case 17:u=24
return P.a8(o.c_(J.z(m,1),b),$async$a3)
case 24:u=1
break
case 18:u=25
return P.a8(o.c0(J.z(m,1),b),$async$a3)
case 25:u=1
break
case 19:u=26
return P.a8(o.bY(J.z(m,1),b),$async$a3)
case 26:u=1
break
case 20:u=27
return P.a8(o.bi(J.z(m,1),b),$async$a3)
case 27:u=1
break
case 21:u=28
return P.a8(o.bi(J.z(m,1),b),$async$a3)
case 28:u=1
break
case 22:u=1
break
case 8:r=2
u=6
break
case 4:r=3
f=q
l=H.a3(f)
k=P.i('Line: "'+H.f(a)+'": '+H.f(l))
throw H.c(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.a_(s,t)
case 2:return P.Z(q,t)}})
return P.a0($async$a3,t)},
bZ:function(a,b){return this.hi(a,b)},
hi:function(a,b){var u=0,t=P.a1(null),s=this,r
var $async$bZ=P.a2(function(c,d){if(c===1)return P.Z(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.r.sb8(s.a.b3(r))
return P.a_(null,t)}})
return P.a0($async$bZ,t)},
c_:function(a,b){return this.hk(a,b)},
hk:function(a,b){var u=0,t=P.a1(null),s=this,r
var $async$c_=P.a2(function(c,d){if(c===1)return P.Z(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.x.sb8(s.a.b3(r))
return P.a_(null,t)}})
return P.a0($async$c_,t)},
c0:function(a,b){return this.hp(a,b)},
hp:function(a,b){var u=0,t=P.a1(null),s=this,r
var $async$c0=P.a2(function(c,d){if(c===1)return P.Z(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.z.sb8(s.a.b3(r))
return P.a_(null,t)}})
return P.a0($async$c0,t)},
bY:function(a,b){return this.hh(a,b)},
hh:function(a,b){var u=0,t=P.a1(null),s=this,r
var $async$bY=P.a2(function(c,d){if(c===1)return P.Z(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.db.sb8(s.a.b3(r))
return P.a_(null,t)}})
return P.a0($async$bY,t)},
bi:function(a,b){return this.hj(a,b)},
hj:function(a,b){var u=0,t=P.a1(null),s=this,r
var $async$bi=P.a2(function(c,d){if(c===1)return P.Z(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.Q.sb8(s.a.b3(r))
return P.a_(null,t)}})
return P.a0($async$bi,t)}}
O.eK.prototype={}
O.ka.prototype={
gio:function(){var u=this.Q,t=u.y.a,s=t.length
if(s===1){if(0>=s)return H.b(t,0)
return t[0]}return u},
ar:function(a,b,c){return this.j2(a,b,!1)},
j2:function(a,b,c){var u=0,t=P.a1(null),s=this
var $async$ar=P.a2(function(d,e){if(d===1)return P.Z(e,t)
while(true)switch(u){case 0:u=2
return P.a8(s.aq(H.d(a.split("\n"),[P.p]),b,!1),$async$ar)
case 2:return P.a_(null,t)}})
return P.a0($async$ar,t)},
aq:function(a,b,c){return this.j0(a,b,!1)},
j0:function(a,b,c){var u=0,t=P.a1(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i
var $async$aq=P.a2(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:j=0
case 3:if(!!0){u=4
break}m=j
l=a.length
if(typeof m!=="number"){s=m.C()
u=1
break}if(!(m<l)){u=4
break}r=6
m=j
if(m>>>0!==m||m>=l){s=H.b(a,m)
u=1
break}u=9
return P.a8(o.a3(a[m],b,!1),$async$aq)
case 9:r=2
u=8
break
case 6:r=5
i=q
n=H.a3(i)
m=j
if(typeof m!=="number"){s=m.p()
u=1
break}throw H.c(P.i("Line "+H.f(m+1)+": "+H.f(n)))
u=8
break
case 5:u=2
break
case 8:m=j
if(typeof m!=="number"){s=m.p()
u=1
break}j=m+1
u=3
break
case 4:case 1:return P.a_(s,t)
case 2:return P.Z(q,t)}})
return P.a0($async$aq,t)},
a3:function(a,b,c){return this.iZ(a,b,!1)},
iZ:function(a,b,c){var u=0,t=P.a1(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$a3=P.a2(function(d,a0){if(d===1){q=a0
u=r}while(true)switch(u){case 0:r=4
n=J.lH(a,"#")
k=n
if(typeof k!=="number"){s=k.bC()
u=1
break}if(k>=0)a=J.lI(a,0,n)
a=J.l4(a)
if(J.ac(a)<=0){u=1
break}m=O.mH(a)
if(J.ac(m)<1){u=1
break}case 7:switch(J.z(m,0)){case"v":u=9
break
case"vt":u=10
break
case"vn":u=11
break
case"p":u=12
break
case"l":u=13
break
case"f":u=14
break
case"mtllib":u=15
break
case"usemtl":u=16
break
case"g":u=17
break
case"o":u=18
break
default:u=19
break}break
case 9:j=O.b0(J.z(m,1))
k=j.length
if(k<3)H.m(P.i("Positions must have at least 3 numbers."))
if(k>4)H.m(P.i("Positions must have at most than 4 numbers."))
if(k===4){if(3>=k){s=H.b(j,3)
u=1
break}i=j[3]
h=$.y()
h.toString
if(typeof i!=="number"){s=i.n()
u=1
break}if(!(Math.abs(i-1)<h.a))H.m(P.i("Currently, non-one w values in positions are not supported."))}i=o.b
if(0>=k){s=H.b(j,0)
u=1
break}h=j[0]
if(1>=k){s=H.b(j,1)
u=1
break}g=j[1]
if(2>=k){s=H.b(j,2)
u=1
break}g=[h,g,j[2]]
g=new O.eK(new V.af(g[0],g[1],g[2]))
g.b=H.d([],[F.b_])
i.push(g)
u=1
break
case 10:j=O.b0(J.z(m,1))
k=j.length
if(k<2)H.m(P.i("Textures must have at least 2 numbers."))
if(k>3)H.m(P.i("Textures must have at most than 3 numbers."))
if(k===3){if(2>=k){s=H.b(j,2)
u=1
break}i=j[2]
h=$.y()
h.toString
if(typeof i!=="number"){s=i.n()
u=1
break}if(!(Math.abs(i-0)<h.a))H.m(P.i("Currently, non-zero z values in textures are not supported."))}i=o.c
if(0>=k){s=H.b(j,0)
u=1
break}h=j[0]
if(1>=k){s=H.b(j,1)
u=1
break}h=[h,j[1]]
i.push(new V.as(h[0],h[1]))
u=1
break
case 11:j=O.b0(J.z(m,1))
k=j.length
if(k!==3)H.m(P.i("Normals must have exactly 3 numbers."))
i=o.d
if(0>=k){s=H.b(j,0)
u=1
break}h=j[0]
if(1>=k){s=H.b(j,1)
u=1
break}g=j[1]
if(2>=k){s=H.b(j,2)
u=1
break}i.push(new V.Q(h,g,j[2]))
u=1
break
case 12:o.ho(J.z(m,1))
u=1
break
case 13:o.hm(J.z(m,1))
u=1
break
case 14:o.hl(J.z(m,1))
u=1
break
case 15:u=20
return P.a8(o.bj(J.z(m,1),b,!1),$async$a3)
case 20:u=1
break
case 16:k=J.z(m,1)
o.x=o.e.i(0,k)
o.bm()
u=1
break
case 17:o.r=J.z(m,1)
o.bm()
u=1
break
case 18:o.r=J.z(m,1)
o.bm()
u=1
break
case 19:u=1
break
case 8:r=2
u=6
break
case 4:r=3
e=q
l=H.a3(e)
k=P.i('Line: "'+H.f(a)+'": '+H.f(l))
throw H.c(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.a_(s,t)
case 2:return P.Z(q,t)}})
return P.a0($async$a3,t)},
bm:function(){var u,t,s,r=this
if(r.z==null||r.y.a.c.length!==0){u=F.a7()
r.y=u
u=E.fr(u)
r.z=u
r.Q.y.m(0,u)
for(u=r.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)C.b.sk(u[s].b,0)}r.z.saX(r.x)
r.z.a=r.r},
bI:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=", was out of range [-",f=a.split("/"),e=f.length
if(0>=e)return H.b(f,0)
u=P.bs(f[0],h,h)
t=i.b.length
if(typeof u!=="number")return u.C()
if(u<-t||u>t||u===0)throw H.c(P.i("The position index, "+u+g+t+".."+t+"] or 0."))
if(u<0)u=t+u+1;--u
if(e>1){s=f[1]
if(s!=null&&s.length>0){r=P.bs(s,h,h)
q=i.c
t=q.length
if(typeof r!=="number")return r.C()
if(r<-t||r>t||r===0)throw H.c(P.i("The texture index, "+r+g+t+".."+t+"] or 0."))
if(r<0)r=t+r+1
p=r-1
if(p<0||p>=t)return H.b(q,p)
o=q[p]}else o=h}else o=h
if(e>2){s=f[2]
if(s!=null&&s.length>0){n=P.bs(s,h,h)
e=i.d
t=e.length
if(typeof n!=="number")return n.C()
if(n<-t||n>t||n===0)throw H.c(P.i("The normal index, "+n+g+t+".."+t+"] or 0."))
if(n<0)n=t+n+1
q=n-1
if(q<0||q>=t)return H.b(e,q)
m=e[q]}else m=h}else m=h
e=i.b
if(u<0||u>=e.length)return H.b(e,u)
l=e[u]
for(e=l.b,q=e.length,k=0;k<e.length;e.length===q||(0,H.r)(e),++k){j=e[k]
if(J.A(j.y,o)&&J.A(j.r,m))return j}j=F.bP(h,h,h,h,h,h,h,h,0)
j.sa5(0,l.a)
if(!J.A(j.y,o)){j.y=o
e=j.a
if(e!=null)e.X()}j.sb5(m)
i.y.a.m(0,j)
l.b.push(j)
return j},
ho:function(a){var u,t=O.kd(a),s=H.d([],[F.b_]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.b(t,u)
s.push(this.bI(t[u]))}this.y.b.i_(s)},
hm:function(a){var u,t=O.kd(a),s=H.d([],[F.b_]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.b(t,u)
s.push(this.bI(t[u]))}this.y.c.hZ(s)},
hl:function(a){var u,t=O.kd(a),s=H.d([],[F.b_]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.b(t,u)
s.push(this.bI(t[u]))}this.y.d.hY(s)},
bj:function(a,b,c){return this.hn(a,b,!1)},
hn:function(a,b,c){var u=0,t=P.a1(null),s=this,r
var $async$bj=P.a2(function(d,e){if(d===1)return P.Z(e,t)
while(true)switch(u){case 0:u=2
return P.a8(O.db(b+"/"+a,s.a,!1),$async$bj)
case 2:r=e
s.e.dq(0,r)
return P.a_(null,t)}})
return P.a0($async$bj,t)}}
O.hV.prototype={}
X.cP.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cP))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.f(this.a)}}
X.d4.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d4))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.f(this.a)}}
X.h9.prototype={
iU:function(a){this.c=a.b
this.d.m(0,a.a)
return!1},
iQ:function(a){this.c=a.b
this.d.Y(0,a.a)
return!1}}
X.d7.prototype={}
X.hh.prototype={
b_:function(a,b){var u,t,s,r,q,p=this,o=Date.now(),n=p.x,m=b.a,l=p.Q
if(typeof m!=="number")return m.l()
u=b.b
t=p.ch
if(typeof u!=="number")return u.l()
s=n.a
if(typeof s!=="number")return s.p()
n=n.b
if(typeof n!=="number")return n.p()
r=new V.as(s+m*l,n+u*t)
t=p.a.gaR()
q=new X.aS(a,V.bi(),p.x,t,r)
q.b=!0
p.z=new P.ak(o,!1)
p.x=r
return q},
ct:function(a,b){this.r=a.a
return!1},
b7:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ev()
if(typeof u!=="number")return u.am()
this.r=(u&~t)>>>0
return!1},
b6:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.b_(a,b))
return!0},
iV:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaR()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.l()
q=a.b
p=o.cy
if(typeof q!=="number")return q.l()
t=new X.ch(new V.E(s*r,q*p),u,t)
t.b=!0
n.J(t)
return!0},
fU:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.d7(c,r.a.gaR(),b)
s.b=!0
t.J(s)
r.y=new P.ak(u,!1)
r.x=V.bi()}}
X.ar.prototype={
v:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ar))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aS.prototype={}
X.hG.prototype={
bN:function(a,b,c){var u=this,t=new P.ak(Date.now(),!1),s=u.a.gaR(),r=new X.aS(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
ct:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.J(this.bN(a,b,!0))
return!0},
b7:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.ev()
if(typeof t!=="number")return t.am()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.J(u.bN(a,b,!0))
return!0},
b6:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.bN(a,b,!1))
return!0},
iW:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaR()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.l()
r=a.b
q=p.ch
if(typeof r!=="number")return r.l()
u=new X.ch(new V.E(t*s,r*q),u,b)
u.b=!0
o.J(u)
return!0},
gdD:function(){var u=this.b
return u==null?this.b=D.H():u},
gbA:function(){var u=this.c
return u==null?this.c=D.H():u},
ge2:function(){var u=this.d
return u==null?this.d=D.H():u}}
X.ch.prototype={}
X.hT.prototype={}
X.dA.prototype={}
X.iz.prototype={
b_:function(a,b){var u=this,t=new P.ak(Date.now(),!1),s=a.length>0?a[0]:V.bi(),r=u.a.gaR(),q=new X.dA(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
iT:function(a){var u=this.b
if(u==null)return!1
u.J(this.b_(a,!0))
return!0},
iR:function(a){var u=this.c
if(u==null)return!1
u.J(this.b_(a,!0))
return!0},
iS:function(a){var u=this.d
if(u==null)return!1
u.J(this.b_(a,!1))
return!0}}
X.dH.prototype={
gaR:function(){var u=this.a,t=C.j.gdw(u).c
t.toString
u=C.j.gdw(u).d
u.toString
return V.m6(0,0,t,u)},
d1:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.d4(u,new X.ar(t,a.altKey,a.shiftKey))},
aM:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ar(t,a.altKey,a.shiftKey)},
c5:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ar(t,a.altKey,a.shiftKey)},
aA:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.n()
u=t.top
if(typeof r!=="number")return r.n()
return new V.as(s-q,r-u)},
b0:function(a){return new V.E(a.movementX,a.movementY)},
c1:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.as])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
q=C.d.as(r.pageX)
C.d.as(r.pageY)
p=o.left
C.d.as(r.pageX)
n.push(new V.as(q-p,C.d.as(r.pageY)-o.top))}return n},
ay:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cP(u,new X.ar(t,a.altKey,a.shiftKey))},
bP:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.n()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.n()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fO:function(a){this.f=!0},
fC:function(a){this.f=!1},
fI:function(a){if(this.f&&this.bP(a))a.preventDefault()},
fS:function(a){var u
if(!this.f)return
u=this.d1(a)
this.b.iU(u)},
fQ:function(a){var u
if(!this.f)return
u=this.d1(a)
this.b.iQ(u)},
fW:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aM(a)
if(r.x){u=r.ay(a)
t=r.b0(a)
if(r.d.ct(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ay(a)
s=r.aA(a)
if(r.c.ct(u,s))a.preventDefault()},
h_:function(a){var u,t,s,r=this
r.aM(a)
u=r.ay(a)
if(r.x){t=r.b0(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.b7(u,s))a.preventDefault()},
fM:function(a){var u,t,s,r=this
if(!r.bP(a)){r.aM(a)
u=r.ay(a)
if(r.x){t=r.b0(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.b7(u,s))a.preventDefault()}},
fY:function(a){var u,t,s,r=this
r.aM(a)
u=r.ay(a)
if(r.x){t=r.b0(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.b6(u,s))a.preventDefault()},
fK:function(a){var u,t,s,r=this
if(!r.bP(a)){r.aM(a)
u=r.ay(a)
if(r.x){t=r.b0(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.b6(u,s))a.preventDefault()}},
h1:function(a){var u,t,s=this
s.aM(a)
u=new V.E((a&&C.w).gib(a),C.w.gic(a)).A(0,180)
if(s.x){if(s.d.iV(u))a.preventDefault()
return}if(s.r)return
t=s.aA(a)
if(s.c.iW(u,t))a.preventDefault()},
h3:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ay(s.y)
t=s.aA(s.y)
s.d.fU(u,t,r)}},
hg:function(a){var u,t=this
t.a.focus()
t.f=!0
t.c5(a)
u=t.c1(a)
if(t.e.iT(u))a.preventDefault()},
hc:function(a){var u
this.c5(a)
u=this.c1(a)
if(this.e.iR(u))a.preventDefault()},
he:function(a){var u
this.c5(a)
u=this.c1(a)
if(this.e.iS(u))a.preventDefault()}}
D.fj.prototype={$ial:1}
D.al.prototype={}
D.d5.prototype={
cO:function(a){var u=this.x
if(u!=null)u.J(a)},
d9:function(a){var u=this.y
if(u!=null)u.J(a)},
fT:function(){return this.d9(null)},
h6:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.r)(a),++t){s=a[t]
if(s==null||this.f1(s))return!1}return!0},
fu:function(a,b){var u,t,s,r
for(u=b.length,t=this.gd8(),s=0;s<b.length;b.length===u||(0,H.r)(b),++s){r=b[s]
r.gB().m(0,t)}u=new D.bE()
u.b=!0
this.cO(u)},
ha:function(a,b){var u,t,s,r
for(u=b.length,t=this.gd8(),s=0;s<b.length;b.length===u||(0,H.r)(b),++s){r=b[s]
r.gB().Y(0,t)}u=new D.bF()
u.b=!0
this.cO(u)},
f1:function(a){var u=C.b.ao(this.e,a)
return u},
$ak:function(){return[D.al]},
$ab5:function(){return[D.al]}}
D.hS.prototype={$ial:1}
D.ig.prototype={$ial:1}
V.S.prototype={
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.F.prototype={
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.F))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+", "+V.C(u.d,3,0)+"]"}}
V.fs.prototype={}
V.d9.prototype={
a6:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.K])
return t},
v:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.d9))return!1
u=b.a
t=r.a
s=$.y()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=r.d
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=r.x
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){var u,t,s,r,q=this,p=[P.K],o=V.bZ(H.d([q.a,q.d,q.r],p),3,0),n=V.bZ(H.d([q.b,q.e,q.x],p),3,0),m=V.bZ(H.d([q.c,q.f,q.y],p),3,0)
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
V.aQ.prototype={
a6:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.K])
return t},
e0:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=a9.f
if(typeof b0!=="number")return b0.l()
if(typeof b1!=="number")return H.e(b1)
u=a9.b
t=a9.e
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.e(t)
s=b0*b1-u*t
r=a9.r
if(typeof r!=="number")return H.e(r)
q=a9.c
if(typeof q!=="number")return q.l()
p=b0*r-q*t
o=a9.x
if(typeof o!=="number")return H.e(o)
n=a9.d
if(typeof n!=="number")return n.l()
m=b0*o-n*t
l=u*r-q*b1
k=u*o-n*b1
j=q*o-n*r
i=a9.y
h=a9.cy
if(typeof i!=="number")return i.l()
g=a9.z
f=a9.cx
if(typeof g!=="number")return g.l()
e=i*h-g*f
d=a9.db
c=a9.Q
if(typeof c!=="number")return c.l()
b=i*d-c*f
a=a9.dx
a0=a9.ch
if(typeof a0!=="number")return a0.l()
a1=i*a-a0*f
a2=g*d-c*h
a3=g*a-a0*h
a4=c*a-a0*d
a5=s*a4-p*a3+m*a2+l*a1-k*b+j*e
if(Math.abs(a5-0)<$.y().a)return V.da()
a6=1/a5
a7=-t
a8=-f
return V.aG((b1*a4-r*a3+o*a2)*a6,(-u*a4+q*a3-n*a2)*a6,(h*j-d*k+a*l)*a6,(-g*j+c*k-a0*l)*a6,(a7*a4+r*a1-o*b)*a6,(b0*a4-q*a1+n*b)*a6,(a8*j+d*m-a*p)*a6,(i*j-c*m+a0*p)*a6,(t*a3-b1*a1+o*e)*a6,(-b0*a3+u*a1-n*e)*a6,(f*k-h*m+a*s)*a6,(-i*k+g*m-a0*s)*a6,(a7*a2+b1*b-r*e)*a6,(b0*a2-u*b+q*e)*a6,(a8*l+h*p-d*s)*a6,(i*l-g*p+c*s)*a6)},
l:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=b3.a
if(typeof b0!=="number")return b0.l()
if(typeof b1!=="number")return H.e(b1)
u=a9.b
t=b3.e
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.e(t)
s=a9.c
r=b3.y
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.e(r)
q=a9.d
p=b3.cx
if(typeof q!=="number")return q.l()
o=b3.b
if(typeof o!=="number")return H.e(o)
n=b3.f
if(typeof n!=="number")return H.e(n)
m=b3.z
if(typeof m!=="number")return H.e(m)
l=b3.cy
k=b3.c
if(typeof k!=="number")return H.e(k)
j=b3.r
if(typeof j!=="number")return H.e(j)
i=b3.Q
if(typeof i!=="number")return H.e(i)
h=b3.db
g=b3.d
if(typeof g!=="number")return H.e(g)
f=b3.x
if(typeof f!=="number")return H.e(f)
e=b3.ch
if(typeof e!=="number")return H.e(e)
d=b3.dx
c=a9.e
if(typeof c!=="number")return c.l()
b=a9.f
if(typeof b!=="number")return b.l()
a=a9.r
if(typeof a!=="number")return a.l()
a0=a9.x
if(typeof a0!=="number")return a0.l()
a1=a9.y
if(typeof a1!=="number")return a1.l()
a2=a9.z
if(typeof a2!=="number")return a2.l()
a3=a9.Q
if(typeof a3!=="number")return a3.l()
a4=a9.ch
if(typeof a4!=="number")return a4.l()
a5=a9.cx
a6=a9.cy
a7=a9.db
a8=a9.dx
return V.aG(b0*b1+u*t+s*r+q*p,b0*o+u*n+s*m+q*l,b0*k+u*j+s*i+q*h,b0*g+u*f+s*e+q*d,c*b1+b*t+a*r+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,c*g+b*f+a*e+a0*d,a1*b1+a2*t+a3*r+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h,a1*g+a2*f+a3*e+a4*d,a5*b1+a6*t+a7*r+a8*p,a5*o+a6*n+a7*m+a8*l,a5*k+a6*j+a7*i+a8*h,a5*g+a6*f+a7*e+a8*d)},
cB:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.l()
if(typeof i!=="number")return H.e(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.e(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.e(r)
q=k.e
if(typeof q!=="number")return q.l()
p=k.f
if(typeof p!=="number")return p.l()
o=k.r
if(typeof o!=="number")return o.l()
n=k.y
if(typeof n!=="number")return n.l()
m=k.z
if(typeof m!=="number")return m.l()
l=k.Q
if(typeof l!=="number")return l.l()
return new V.Q(j*i+u*t+s*r,q*i+p*t+o*r,n*i+m*t+l*r)},
bz:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a,f=a.a
if(typeof g!=="number")return g.l()
if(typeof f!=="number")return H.e(f)
u=h.b
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.e(t)
s=h.c
r=a.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.e(r)
q=h.d
if(typeof q!=="number")return H.e(q)
p=h.e
if(typeof p!=="number")return p.l()
o=h.f
if(typeof o!=="number")return o.l()
n=h.r
if(typeof n!=="number")return n.l()
m=h.x
if(typeof m!=="number")return H.e(m)
l=h.y
if(typeof l!=="number")return l.l()
k=h.z
if(typeof k!=="number")return k.l()
j=h.Q
if(typeof j!=="number")return j.l()
i=h.ch
if(typeof i!=="number")return H.e(i)
return new V.af(g*f+u*t+s*r+q,p*f+o*t+n*r+m,l*f+k*t+j*r+i)},
v:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aQ))return!1
u=b.a
t=r.a
s=$.y()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=r.d
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=r.x
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.z
t=r.z
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=r.Q
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.ch
t=r.ch
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.cx-r.cx)<s))return!1
if(!(Math.abs(b.cy-r.cy)<s))return!1
if(!(Math.abs(b.db-r.db)<s))return!1
if(!(Math.abs(b.dx-r.dx)<s))return!1
return!0},
h:function(a){return this.O()},
G:function(a){var u,t,s,r,q,p=this,o=[P.K],n=V.bZ(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.bZ(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.bZ(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.bZ(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
V.as.prototype={
n:function(a,b){var u,t,s=this.a,r=b.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
u=this.b
t=b.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
return new V.as(s-r,u-t)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.as))return!1
u=b.a
t=this.a
s=$.y()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}}
V.af.prototype={
p:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.e(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.e(r)
return new V.af(q+p,u+t,s+r)},
n:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.e(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
return new V.af(q-p,u-t,s-r)},
A:function(a,b){var u,t,s
if(Math.abs(b-0)<$.y().a)return V.ll()
u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
s=this.c
if(typeof s!=="number")return s.A()
return new V.af(u/b,t/b,s/b)},
v:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.af))return!1
u=b.a
t=r.a
s=$.y()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.dk.prototype={
gae:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dk))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+", "+V.C(u.d,3,0)+"]"}}
V.bK.prototype={
v:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bK))return!1
u=b.a
t=r.a
s=$.y()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-r.d)<s))return!1
if(!(Math.abs(b.e-r.e)<s))return!1
if(!(Math.abs(b.f-r.f)<s))return!1
return!0},
h:function(a){var u=this
return"["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+", "+V.C(u.d,3,0)+", "+V.C(u.e,3,0)+", "+V.C(u.f,3,0)+"]"}}
V.E.prototype={
cp:function(a){return Math.sqrt(this.K(this))},
K:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.e(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.e(t)
return s*r+u*t},
l:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.l()
u=this.b
if(typeof u!=="number")return u.l()
return new V.E(t*b,u*b)},
A:function(a,b){var u,t
if(Math.abs(b-0)<$.y().a){u=$.mk
return u==null?$.mk=new V.E(0,0):u}u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.E(u/b,t/b)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
u=b.a
t=this.a
s=$.y()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}}
V.Q.prototype={
cp:function(a){return Math.sqrt(this.K(this))},
K:function(a){var u,t,s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.e(p)
u=this.b
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.e(t)
s=this.c
r=a.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.e(r)
return q*p+u*t+s*r},
aC:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.e(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.e(t)
s=a.a
if(typeof s!=="number")return H.e(s)
r=this.a
if(typeof r!=="number")return r.l()
return new V.Q(q*p-u*t,u*s-r*p,r*t-q*s)},
p:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.e(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.e(r)
return new V.Q(q+p,u+t,s+r)},
M:function(a){var u,t,s=this.a
if(typeof s!=="number")return s.M()
u=this.b
if(typeof u!=="number")return u.M()
t=this.c
if(typeof t!=="number")return t.M()
return new V.Q(-s,-u,-t)},
A:function(a,b){var u,t,s
if(Math.abs(b-0)<$.y().a)return V.R()
u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
s=this.c
if(typeof s!=="number")return s.A()
return new V.Q(u/b,t/b,s/b)},
e1:function(){var u=this.a,t=$.y()
t.toString
if(typeof u!=="number")return H.e(u)
t=t.a
if(!(Math.abs(0-u)<t))return!1
u=this.b
if(typeof u!=="number")return H.e(u)
if(!(Math.abs(0-u)<t))return!1
u=this.c
if(typeof u!=="number")return H.e(u)
if(!(Math.abs(0-u)<t))return!1
return!0},
v:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=r.a
s=$.y()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
U.f8.prototype={
bJ:function(a){var u=V.pE(a,this.c,this.b)
return u},
gB:function(){var u=this.y
return u==null?this.y=D.H():u},
R:function(a){var u=this.y
if(u!=null)u.J(a)},
scC:function(a,b){},
scq:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.y().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bJ(u)}s=new D.v("maximumLocation",s,t.b)
s.b=!0
t.R(s)}},
scs:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.y().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bJ(u)}s=new D.v("minimumLocation",s,t.c)
s.b=!0
t.R(s)}},
sa5:function(a,b){var u,t=this
b=t.bJ(b)
u=t.d
if(!(Math.abs(u-b)<$.y().a)){t.d=b
u=new D.v("location",u,b)
u.b=!0
t.R(u)}},
scr:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.y().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.v("maximumVelocity",r,a)
r.b=!0
s.R(r)}},
sV:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.y().a)){u.f=a
t=new D.v("velocity",t,a)
t.b=!0
u.R(t)}},
scd:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.y().a)){this.x=a
u=new D.v("dampening",u,a)
u.b=!0
this.R(u)}},
al:function(a,b){var u,t,s,r=this,q=r.f,p=$.y().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa5(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.y().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sV(u)}}}
U.cR.prototype={
gB:function(){var u=this.b
return u==null?this.b=D.H():u},
aY:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cR))return!1
return J.A(this.a,b.a)},
h:function(a){return"Constant: "+this.a.G("          ")}}
U.c9.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.H():u},
R:function(a){var u=this.e
if(u!=null)u.J(a)},
a8:function(){return this.R(null)},
fs:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaL(),s=[{func:1,ret:-1,args:[D.ad]}],r=0;r<b.length;b.length===u||(0,H.r)(b),++r){q=b[r]
if(q!=null){p=q.gB()
o=p.a;(o==null?p.a=H.d([],s):o).push(t)}}u=new D.bE()
u.b=!0
this.R(u)},
h8:function(a,b){var u,t,s,r
for(u=b.length,t=this.gaL(),s=0;s<b.length;b.length===u||(0,H.r)(b),++s){r=b[s]
if(r!=null)r.gB().Y(0,t)}u=new D.bF()
u.b=!0
this.R(u)},
aY:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.C()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a9(r,r.length),u=null;r.D();){q=r.d
if(q!=null){t=q.aY(0,b,c)
if(t!=null)u=u==null?t:t.l(0,u)}}s.f=u==null?V.da():u
r=s.e
if(r!=null)r.aW(0)}return s.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c9))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.A(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ak:function(){return[U.am]},
$ab5:function(){return[U.am]},
$iam:1}
U.am.prototype={}
U.dI.prototype={
gB:function(){var u=this.cy
return u==null?this.cy=D.H():u},
R:function(a){var u=this.cy
if(u!=null)u.J(a)},
a8:function(){return this.R(null)},
b1:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdD().m(0,u.gbQ())
u.a.c.ge2().m(0,u.gbS())
u.a.c.gbA().m(0,u.gbU())
return!0},
bR:function(a){var u=this
if(!J.A(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bT:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaS")
if(!n.y)return
if(n.x){u=a.d.n(0,a.y)
u=new V.E(u.a,u.b)
u=u.K(u)
t=n.r
if(typeof t!=="number")return H.e(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.n(0,a.y)
u=new V.E(t.a,t.b).l(0,2).A(0,u.gae())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.l()
s=n.e
if(typeof s!=="number")return H.e(s)
t.sV(u*10*s)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=new V.E(s.a,s.b).l(0,2).A(0,u.gae())
s=n.b
q=r.a
if(typeof q!=="number")return q.M()
p=n.e
if(typeof p!=="number")return H.e(p)
o=n.z
if(typeof o!=="number")return H.e(o)
s.sa5(0,-q*p+o)
n.b.sV(0)
t=t.n(0,a.z)
n.Q=new V.E(t.a,t.b).l(0,2).A(0,u.gae())}n.a8()},
bV:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.K(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.l()
s=r.e
if(typeof s!=="number")return H.e(s)
u.sV(t*10*s)
r.a8()}},
aY:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.C()
if(q<p){r.ch=p
u=b.y
r.b.al(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aG(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iam:1}
U.dJ.prototype={
gB:function(){var u=this.fx
return u==null?this.fx=D.H():u},
R:function(a){var u=this.fx
if(u!=null)u.J(a)},
a8:function(){return this.R(null)},
b1:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdD().m(0,s.gbQ())
s.a.c.ge2().m(0,s.gbS())
s.a.c.gbA().m(0,s.gbU())
u=s.a.d
t=u.f
u=t==null?u.f=D.H():t
u.m(0,s.gfh())
u=s.a.d
t=u.d
u=t==null?u.d=D.H():t
u.m(0,s.gfj())
u=s.a.e
t=u.b
u=t==null?u.b=D.H():t
u.m(0,s.ghK())
u=s.a.e
t=u.d
u=t==null?u.d=D.H():t
u.m(0,s.ghI())
u=s.a.e
t=u.c
u=t==null?u.c=D.H():t
u.m(0,s.ghG())
return!0},
au:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.M()
u=-u}if(this.r){if(typeof t!=="number")return t.M()
t=-t}return new V.E(u,t)},
bR:function(a){var u=this
H.l(a,"$iaS")
if(!J.A(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bT:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaS")
if(!n.cx)return
if(n.ch){u=a.d.n(0,a.y)
u=new V.E(u.a,u.b)
u=u.K(u)
t=n.Q
if(typeof t!=="number")return H.e(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.n(0,a.y)
u=n.au(new V.E(t.a,t.b).l(0,2).A(0,u.gae()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.M()
s=n.y
if(typeof s!=="number")return H.e(s)
t.sV(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.M()
t=n.x
if(typeof t!=="number")return H.e(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=n.au(new V.E(s.a,s.b).l(0,2).A(0,u.gae()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.e(p)
o=n.cy
if(typeof o!=="number")return H.e(o)
s.sa5(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.e(q)
s=n.db
if(typeof s!=="number")return H.e(s)
o.sa5(0,-p*q+s)
n.b.sV(0)
n.c.sV(0)
t=t.n(0,a.z)
n.dx=n.au(new V.E(t.a,t.b).l(0,2).A(0,u.gae()))}n.a8()},
bV:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.K(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.M()
s=r.y
if(typeof s!=="number")return H.e(s)
u.sV(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.M()
u=r.x
if(typeof u!=="number")return H.e(u)
s.sV(-t*10*u)
r.a8()}},
fi:function(a){var u=this
if(H.l(a,"$id7").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fk:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaS")
if(!J.A(n.d,a.x.b))return
u=a.c
t=a.d
s=t.n(0,a.y)
r=n.au(new V.E(s.a,s.b).l(0,2).A(0,u.gae()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.e(p)
o=n.cy
if(typeof o!=="number")return H.e(o)
s.sa5(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.e(q)
s=n.db
if(typeof s!=="number")return H.e(s)
o.sa5(0,-p*q+s)
n.b.sV(0)
n.c.sV(0)
t=t.n(0,a.z)
n.dx=n.au(new V.E(t.a,t.b).l(0,2).A(0,u.gae()))
n.a8()},
hL:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hJ:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$idA")
if(!n.cx)return
if(n.ch){u=a.d.n(0,a.y)
u=new V.E(u.a,u.b)
u=u.K(u)
t=n.Q
if(typeof t!=="number")return H.e(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.n(0,a.y)
u=n.au(new V.E(t.a,t.b).l(0,2).A(0,u.gae()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.M()
s=n.y
if(typeof s!=="number")return H.e(s)
t.sV(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.M()
t=n.x
if(typeof t!=="number")return H.e(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=n.au(new V.E(s.a,s.b).l(0,2).A(0,u.gae()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.e(p)
o=n.cy
if(typeof o!=="number")return H.e(o)
s.sa5(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.e(q)
s=n.db
if(typeof s!=="number")return H.e(s)
o.sa5(0,-p*q+s)
n.b.sV(0)
n.c.sV(0)
t=t.n(0,a.z)
n.dx=n.au(new V.E(t.a,t.b).l(0,2).A(0,u.gae()))}n.a8()},
hH:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.K(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.M()
s=r.y
if(typeof s!=="number")return H.e(s)
u.sV(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.M()
u=r.x
if(typeof u!=="number")return H.e(u)
s.sV(-t*10*u)
r.a8()}},
aY:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.C()
if(q<p){r.dy=p
u=b.y
r.c.al(0,u)
r.b.al(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aG(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.l(0,V.aG(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iam:1}
U.dK.prototype={
gB:function(){var u=this.r
return u==null?this.r=D.H():u},
R:function(a){var u=this.r
if(u!=null)u.J(a)},
b1:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.H():t
t=r.gfl()
u.m(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.H():s).m(0,t)
return!0},
fm:function(a){var u,t,s,r,q=this
if(!J.A(q.b,q.a.b.c))return
H.l(a,"$ich")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.l()
r=u+t*s
if(u!==r){q.d=r
u=new D.v("zoom",u,r)
u.b=!0
q.R(u)}},
aY:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.lX(u,u,u)}return t.f},
$iam:1}
M.cW.prototype={
ax:function(a){var u=this.y
if(u!=null)u.J(a)},
eI:function(){return this.ax(null)},
fE:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gat(),s=[{func:1,ret:-1,args:[D.ad]}],r=0;r<b.length;b.length===u||(0,H.r)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.b8()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.d([],s):o).push(t)}}u=new D.bE()
u.b=!0
this.ax(u)},
fG:function(a,b){var u,t,s,r,q
for(u=b.length,t=this.gat(),s=0;s<b.length;b.length===u||(0,H.r)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.b8()
q.d=0
r.z=q}q.Y(0,t)}}u=new D.bF()
u.b=!0
this.ax(u)},
saX:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gB().Y(0,t.gat())
u=t.d
t.d=a
if(a!=null)a.gB().m(0,t.gat())
s=new D.v("technique",u,t.d)
s.b=!0
t.ax(s)}},
gB:function(){var u=this.y
return u==null?this.y=D.H():u},
aG:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.eg(a1.d)
u=a1.c
u.toString
t=a2.a
t.bindFramebuffer(36160,null)
t.enable(2884)
t.enable(2929)
t.depthFunc(513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.e(s)
o=C.d.as(p*s)
p=q.b
if(typeof r!=="number")return H.e(r)
n=C.d.as(p*r)
p=C.d.as(q.c*s)
a2.c=p
q=C.d.as(q.d*r)
a2.d=q
t.viewport(o,n,p,q)
t.clearDepth(u.c)
u=u.a
t.clearColor(u.a,u.b,u.c,u.d)
t.clear(16640)
u=a1.b
t=a2.c
q=a2.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aG(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.ef(i)
t=$.m0
if(t==null){t=V.ll()
q=$.mn
if(q==null)q=$.mn=new V.Q(0,1,0)
p=V.mp()
h=p.A(0,Math.sqrt(p.K(p)))
q=q.aC(h)
g=q.A(0,Math.sqrt(q.K(q)))
f=h.aC(g)
e=new V.Q(t.a,t.b,t.c)
d=g.M(0).K(e)
c=f.M(0).K(e)
b=h.M(0).K(e)
t=V.aG(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.m0=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.l(0,a)}a2.db.ef(a)
for(u=a1.e.a,u=new J.a9(u,u.length);u.D();)u.d.al(0,a2)
for(u=a1.e.a,u=new J.a9(u,u.length);u.D();)u.d.aG(a2)
a1.b.toString
a2.cy.cu()
a2.db.cu()
a1.c.toString
a2.ed()}}
A.cM.prototype={}
A.eU.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ik:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dC:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.X.prototype={
gaa:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
h:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
v:function(a,b){if(b==null)return!1
if(!(b instanceof A.X))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.fG.prototype={}
A.hn.prototype={
eD:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.W("")
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
A.oY(c0,u)
A.p_(c0,u)
A.oZ(c0,u)
A.p1(c0,u)
A.p2(c0,u)
A.p0(c0,u)
A.p3(c0,u)
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
b5.e_(0,s.charCodeAt(0)==0?s:s,A.oX(b5.z))
b5.Q=b5.x.i(0,"posAttr")
b5.cx=b5.x.i(0,"normAttr")
b5.ch=b5.x.i(0,"binmAttr")
b5.cy=b5.x.i(0,"txt2DAttr")
b5.db=b5.x.i(0,"txtCubeAttr")
b5.dx=b5.x.i(0,"bendAttr")
if(c0.dx)b5.id=H.l(b5.y.L(0,"invViewMat"),"$iag")
if(t)b5.dy=H.l(b5.y.L(0,"objMat"),"$iag")
if(r)b5.fr=H.l(b5.y.L(0,"viewObjMat"),"$iag")
b5.fy=H.l(b5.y.L(0,"projViewObjMat"),"$iag")
if(c0.ry)b5.k1=H.l(b5.y.L(0,"txt2DMat"),"$ics")
if(c0.x1)b5.k2=H.l(b5.y.L(0,"txtCubeMat"),"$iag")
if(c0.x2)b5.k3=H.l(b5.y.L(0,"colorMat"),"$iag")
b5.r1=H.d([],[A.ag])
t=c0.y2
if(t>0){b5.k4=b5.y.L(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.i(0,q)
if(m==null)H.m(P.i(b7+q+b8))
s.push(H.l(m,"$iag"))}}t=c0.a
if(t.a)b5.r2=H.l(b5.y.L(0,"emissionClr"),"$iJ")
if(t.b)b5.rx=H.l(b5.y.L(0,"emissionTxt"),"$iab")
t=c0.b
if(t.a)b5.x1=H.l(b5.y.L(0,"ambientClr"),"$iJ")
if(t.b)b5.x2=H.l(b5.y.L(0,"ambientTxt"),"$iab")
t=c0.c
if(t.a)b5.y2=H.l(b5.y.L(0,"diffuseClr"),"$iJ")
if(t.b)b5.aD=H.l(b5.y.L(0,"diffuseTxt"),"$iab")
t=c0.d
if(t.a)b5.dF=H.l(b5.y.L(0,"invDiffuseClr"),"$iJ")
if(t.b)b5.dG=H.l(b5.y.L(0,"invDiffuseTxt"),"$iab")
t=c0.e
s=t.a
if(s||t.b||!1){b5.dJ=H.l(b5.y.L(0,"shininess"),"$ia4")
if(s)b5.dH=H.l(b5.y.L(0,"specularClr"),"$iJ")
if(t.b)b5.dI=H.l(b5.y.L(0,"specularTxt"),"$iab")}if(c0.f.b)b5.dK=H.l(b5.y.L(0,"bumpTxt"),"$iab")
if(c0.cy){b5.dL=H.l(b5.y.L(0,"envSampler"),"$ibN")
t=c0.r
if(t.a)b5.dM=H.l(b5.y.L(0,"reflectClr"),"$iJ")
if(t.b)b5.dN=H.l(b5.y.L(0,"reflectTxt"),"$iab")
t=c0.x
s=t.a
if(s||t.b||!1){b5.dO=H.l(b5.y.L(0,"refraction"),"$ia4")
if(s)b5.dP=H.l(b5.y.L(0,"refractClr"),"$iJ")
if(t.b)b5.dQ=H.l(b5.y.L(0,"refractTxt"),"$iab")}}t=c0.y
if(t.a)b5.dR=H.l(b5.y.L(0,"alpha"),"$ia4")
if(t.b)b5.dS=H.l(b5.y.L(0,"alphaTxt"),"$iab")
t=P.u
s=[t,A.dD]
b5.ce=new H.I(s)
b5.cf=new H.I([t,[P.q,A.cr]])
b5.cg=new H.I(s)
b5.ci=new H.I([t,[P.q,A.ct]])
b5.cj=new H.I(s)
b5.ck=new H.I([t,[P.q,A.cu]])
if(c0.id){for(t=c0.z,s=t.length,r=[A.cr],l=0;l<t.length;t.length===s||(0,H.r)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.f(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.am()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.i(0,g)
if(m==null)H.m(P.i(b7+g+b8))
H.l(m,"$iJ")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.i(0,g)
if(f==null)H.m(P.i(b7+g+b8))
H.l(f,"$iJ")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.i(0,g)
if(e==null)H.m(P.i(b7+g+b8))
H.l(e,"$iJ")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.i(0,g)
if(m==null)H.m(P.i(b7+g+b8))
H.l(m,"$iJ")
o=b5.y
g=i+"s["+n+"].color"
f=o.i(0,g)
if(f==null)H.m(P.i(b7+g+b8))
H.l(f,"$iJ")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.i(0,o)
if(e==null)H.m(P.i(b7+o+b8))
H.l(e,"$iab")
a=e}else a=b6
h.push(new A.cr(b,c,d,m,f,a))}b5.cf.j(0,j,h)
q=b5.ce
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.m(P.i(b7+o+b8))
q.j(0,j,m)}for(t=c0.Q,s=t.length,r=[A.ct],l=0;l<t.length;t.length===s||(0,H.r)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.f(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.i(0,o)
if(m==null)H.m(P.i(b7+o+b8))
H.l(m,"$iJ")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.i(0,o)
if(f==null)H.m(P.i(b7+o+b8))
H.l(f,"$iJ")
p=b5.y
o=i+"s["+n+"].color"
e=p.i(0,o)
if(e==null)H.m(P.i(b7+o+b8))
H.l(e,"$iJ")
if(typeof j!=="number")return j.am()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.i(0,o)
if(a0==null)H.m(P.i(b7+o+b8))
H.l(a0,"$ics")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.i(0,o)
if(a0==null)H.m(P.i(b7+o+b8))
H.l(a0,"$ibN")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.i(0,o)
if(a0==null)H.m(P.i(b7+o+b8))
H.l(a0,"$ibN")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.i(0,o)
if(a2==null)H.m(P.i(b7+o+b8))
H.l(a2,"$ibm")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.i(0,o)
if(a0==null)H.m(P.i(b7+o+b8))
H.l(a0,"$ia4")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.i(0,o)
if(a2==null)H.m(P.i(b7+o+b8))
H.l(a2,"$ia4")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.i(0,o)
if(a5==null)H.m(P.i(b7+o+b8))
H.l(a5,"$ia4")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}h.push(new A.ct(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.ci.j(0,j,h)
q=b5.cg
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.m(P.i(b7+o+b8))
q.j(0,j,m)}for(t=c0.ch,s=t.length,r=[A.cu],l=0;l<t.length;t.length===s||(0,H.r)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.f(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.i(0,o)
if(m==null)H.m(P.i(b7+o+b8))
H.l(m,"$iJ")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.i(0,o)
if(f==null)H.m(P.i(b7+o+b8))
H.l(f,"$iJ")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.i(0,o)
if(e==null)H.m(P.i(b7+o+b8))
H.l(e,"$iJ")
p=b5.y
o=i+"s["+n+"].color"
a0=p.i(0,o)
if(a0==null)H.m(P.i(b7+o+b8))
H.l(a0,"$iJ")
if(typeof j!=="number")return j.am()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.i(0,o)
if(a2==null)H.m(P.i(b7+o+b8))
H.l(a2,"$iJ")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.i(0,o)
if(a5==null)H.m(P.i(b7+o+b8))
H.l(a5,"$iJ")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.i(0,o)
if(a9==null)H.m(P.i(b7+o+b8))
H.l(a9,"$ia4")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.i(0,o)
if(b0==null)H.m(P.i(b7+o+b8))
H.l(b0,"$ia4")
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
if(a2==null)H.m(P.i(b7+g+b8))
H.l(a2,"$ibm")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.i(0,g)
if(a2==null)H.m(P.i(b7+g+b8))
H.l(a2,"$ia4")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.i(0,g)
if(a5==null)H.m(P.i(b7+g+b8))
H.l(a5,"$ia4")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.i(0,g)
if(a2==null)H.m(P.i(b7+g+b8))
H.l(a2,"$ia4")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.i(0,g)
if(a5==null)H.m(P.i(b7+g+b8))
H.l(a5,"$ia4")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.i(0,g)
if(a9==null)H.m(P.i(b7+g+b8))
H.l(a9,"$ia4")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.i(0,g)
if(a2==null)H.m(P.i(b7+g+b8))
H.l(a2,"$iab")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.i(0,o)
if(a2==null)H.m(P.i(b7+o+b8))
H.l(a2,"$iab")
a3=a2}else a3=b6
h.push(new A.cu(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.ck.j(0,j,h)
q=b5.cj
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.m(P.i(b7+o+b8))
q.j(0,j,m)}}},
an:function(a,b){if(b!=null&&b.d)a.ew(b)},
hx:function(a,b){}}
A.cT.prototype={
h:function(a){return"dirLight"+H.f(this.a)}}
A.di.prototype={
h:function(a){return"pointLight"+H.f(this.a)}}
A.dp.prototype={
h:function(a){return"spotLight"+H.f(this.a)}}
A.hq.prototype={
h:function(a){return this.aD}}
A.cr.prototype={}
A.ct.prototype={}
A.cu.prototype={}
A.dm.prototype={
cK:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
e_:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.d2(b,35633)
r.f=r.d2(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.m(P.i("Failed to link shader: "+H.f(s)))}r.hy()
r.hA()},
aB:function(a){a.a.useProgram(this.r)
this.x.ik()},
d2:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.i("Error compiling shader '"+H.f(s)+"': "+H.f(u)))}return s},
hy:function(){var u,t,s,r=this,q=H.d([],[A.cM]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.e(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cM(p,t.name,s))}r.x=new A.eU(q)},
hA:function(){var u,t,s,r=this,q=H.d([],[A.dC]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.e(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.ia(t.type,t.size,t.name,s))}r.y=new A.iK(q)},
aK:function(a,b,c){var u=this.a
if(a===1)return new A.dD(u,b,c)
else return A.lp(u,this.r,b,a,c)},
f2:function(a,b,c){var u=this.a
if(a===1)return new A.ab(u,b,c)
else return A.lp(u,this.r,b,a,c)},
f3:function(a,b,c){var u=this.a
if(a===1)return new A.bN(u,b,c)
else return A.lp(u,this.r,b,a,c)},
bn:function(a,b){return new P.dW(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
ia:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aK(b,c,d)
case 5121:return u.aK(b,c,d)
case 5122:return u.aK(b,c,d)
case 5123:return u.aK(b,c,d)
case 5124:return u.aK(b,c,d)
case 5125:return u.aK(b,c,d)
case 5126:return new A.a4(u.a,c,d)
case 35664:return new A.iG(u.a,c,d)
case 35665:return new A.J(u.a,c,d)
case 35666:return new A.bm(u.a,c,d)
case 35667:return new A.iH(u.a,c,d)
case 35668:return new A.iI(u.a,c,d)
case 35669:return new A.iJ(u.a,c,d)
case 35674:return new A.iL(u.a,c,d)
case 35675:return new A.cs(u.a,c,d)
case 35676:return new A.ag(u.a,c,d)
case 35678:return u.f2(b,c,d)
case 35680:return u.f3(b,c,d)
case 35670:throw H.c(u.bn("BOOL",c))
case 35671:throw H.c(u.bn("BOOL_VEC2",c))
case 35672:throw H.c(u.bn("BOOL_VEC3",c))
case 35673:throw H.c(u.bn("BOOL_VEC4",c))
default:throw H.c(P.i("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.dC.prototype={}
A.iK.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
L:function(a,b){var u=this.i(0,b)
if(u==null)throw H.c(P.i("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.r)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.dD.prototype={
h:function(a){return"Uniform1i: "+H.f(this.c)}}
A.iH.prototype={
h:function(a){return"Uniform2i: "+H.f(this.c)}}
A.iI.prototype={
h:function(a){return"Uniform3i: "+H.f(this.c)}}
A.iJ.prototype={
h:function(a){return"Uniform4i: "+H.f(this.c)}}
A.iF.prototype={
h:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.a4.prototype={
h:function(a){return"Uniform1f: "+H.f(this.c)}}
A.iG.prototype={
h:function(a){return"Uniform2f: "+H.f(this.c)}}
A.J.prototype={
h:function(a){return"Uniform3f: "+H.f(this.c)}}
A.bm.prototype={
bc:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
h:function(a){return"Uniform4f: "+H.f(this.c)}}
A.iL.prototype={
h:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.cs.prototype={
ac:function(a){var u=new Float32Array(H.bT(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.f(this.c)}}
A.ag.prototype={
ac:function(a){var u=new Float32Array(H.bT(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.f(this.c)}}
A.ab.prototype={
ew:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.bN.prototype={
h:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.b9.prototype={
eR:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.R()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.e1())return
return s.A(0,Math.sqrt(s.K(s)))},
eX:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.n(0,q)
r=new V.Q(r.a,r.b,r.c)
s=r.A(0,Math.sqrt(r.K(r)))
r=t.n(0,q)
r=new V.Q(r.a,r.b,r.c)
r=s.aC(r.A(0,Math.sqrt(r.K(r))))
return r.A(0,Math.sqrt(r.K(r)))},
c9:function(){var u,t=this
if(t.d!=null)return!0
u=t.eR()
if(u==null){u=t.eX()
if(u==null)return!1}t.d=u
t.a.a.X()
return!0},
eQ:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.R()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.e1())return
return s.A(0,Math.sqrt(s.K(s)))},
eW:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
k=s.b
if(typeof l!=="number")return l.n()
if(typeof k!=="number")return H.e(k)
r=l-k
if(Math.abs(r-0)<$.y().a){l=d.n(0,g)
l=new V.Q(l.a,l.b,l.c)
q=l.A(0,Math.sqrt(l.K(l)))
l=s.a
t=t.a
if(typeof l!=="number")return l.n()
if(typeof t!=="number")return H.e(t)
if(l-t<0)q=q.M(0)}else{k=u.b
if(typeof k!=="number")return H.e(k)
p=(l-k)/r
k=d.n(0,g)
l=k.a
if(typeof l!=="number")return l.l()
i=k.b
if(typeof i!=="number")return i.l()
k=k.c
if(typeof k!=="number")return k.l()
k=new V.af(l*p,i*p,k*p).p(0,g).n(0,j)
k=new V.Q(k.a,k.b,k.c)
q=k.A(0,Math.sqrt(k.K(k)))
s=s.a
t=t.a
if(typeof s!=="number")return s.n()
if(typeof t!=="number")return H.e(t)
u=u.a
if(typeof u!=="number")return H.e(u)
if((s-t)*p+t-u<0)q=q.M(0)}l=n.d
if(l!=null){o=l.A(0,Math.sqrt(l.K(l)))
l=o.aC(q)
l=l.A(0,Math.sqrt(l.K(l))).aC(o)
q=l.A(0,Math.sqrt(l.K(l)))}return q},
c8:function(){var u,t=this
if(t.e!=null)return!0
u=t.eQ()
if(u==null){u=t.eW()
if(u==null)return!1}t.e=u
t.a.a.X()
return!0},
v:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
G:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.a.aj(J.aj(s.e),0)+", "+C.a.aj(J.aj(t.b.e),0)+", "+C.a.aj(J.aj(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.h(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.h(0)+"}"):u+"-}"},
O:function(){return this.G("")}}
F.be.prototype={
v:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
G:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.a.aj(J.aj(u.e),0)+", "+C.a.aj(J.aj(this.b.e),0)},
O:function(){return this.G("")}}
F.bH.prototype={
v:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.aj(J.aj(u.e),0)},
O:function(){return this.G("")}}
F.at.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.H():u},
aQ:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aQ()||!1
if(!t.a.aQ())u=!1
s=t.e
if(s!=null)s.aW(0)
return u},
aP:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aP()||!1
if(!t.a.aP())u=!1
s=t.e
if(s!=null)s.aW(0)
return u},
bp:function(){var u=this.e
if(u!=null)++u.d
this.a.bp()
u=this.e
if(u!=null)u.aW(0)
return!0},
b2:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a.c,h=i.length
if(h<=0){i=$.ma
return i==null?$.ma=V.m8(0,0,0,0,0,0):i}i=i[0].f
u=V.m8(i.a,i.b,i.c,0,0,0)
for(t=h-1,i=this.a;t>=1;--t){s=i.c
if(t>=s.length)return H.b(s,t)
s=s[t].f
r=s.a
q=s.b
s=s.c
p=u.d
o=u.a
if(typeof r!=="number")return r.C()
if(typeof o!=="number")return H.e(o)
if(r<o){p+=o-r
n=r}else{if(r>o+p)p=r-o
n=o}m=u.e
r=u.b
if(typeof q!=="number")return q.C()
if(typeof r!=="number")return H.e(r)
if(q<r){m+=r-q
l=q}else{if(q>r+m)m=q-r
l=r}k=u.f
r=u.c
if(typeof s!=="number")return s.C()
if(typeof r!=="number")return H.e(r)
if(s<r){k+=r-s
j=s}else{if(s>r+k)k=s-r
j=r}u=new V.bK(n,l,j,p,m,k)}return u},
bo:function(a){var u,t,s
for(u=this.a.c.length-1;u>=0;--u){t=this.a.c
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.f
if(t!=null){t=a.bz(t)
if(!J.A(s.f,t)){s.f=t
t=s.a
if(t!=null){t=t.e
if(t!=null)t.J(null)}}}t=s.r
if(t!=null)s.sb5(a.cB(t))
t=s.x
if(t!=null)s.sU(a.cB(t))}},
dv:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aA()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.az().a)!==0)++s
if((t&$.ay().a)!==0)++s
if((t&$.b3().a)!==0)++s
if((t&$.bu().a)!==0)++s
if((t&$.bt().a)!==0)++s
if((t&$.cJ().a)!==0)++s
if((t&$.c2().a)!==0)++s
if((t&$.b2().a)!==0)++s
r=a4.gcG(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.d(u,[P.K])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.cN])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.i0(m)
k=l.gcG(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.cN(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].iD(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bT(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bz(new Z.dL(a1,d),o,a4)
c.b=H.d([],[Z.bD])
if(a0.b.b.length!==0){b=H.d([],[P.u])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.N()
b.push(t.e)}a=Z.ls(u,34963,b)
c.b.push(new Z.bD(0,b.length,a))}if(a0.c.b.length!==0){b=H.d([],[P.u])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.N()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.N()
b.push(t.e)}a=Z.ls(u,34963,b)
c.b.push(new Z.bD(1,b.length,a))}if(a0.d.b.length!==0){b=H.d([],[P.u])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.N()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.N()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].c
t.a.a.N()
b.push(t.e)}a=Z.ls(u,34963,b)
c.b.push(new Z.bD(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.d([],[P.p])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.G(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.G(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.G(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.G(t))}return C.b.w(s,"\n")},
X:function(){var u=this.e
if(u!=null)u.J(null)}}
F.i7.prototype={
a4:function(a,b,c,d){var u,t=this.a
t.a.m(0,b)
t.a.m(0,c)
t.a.m(0,d)
u=new F.b9()
t=b.a
if(t==null)H.m(P.i("May not create a face with a first vertex which is not attached to a shape."))
if(t!=c.a||t!=d.a)H.m(P.i("May not create a face with vertices attached to different shapes."))
u.a=b
b.d.b.push(u)
u.b=c
c.d.c.push(u)
u.c=d
d.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.X()
return u},
hY:function(a){var u,t,s,r,q,p=H.d([],[F.b9]),o=a.length
if(o>0){u=a[0]
for(t=this.a,s=2;s<o;++s){r=s-1
q=a.length
if(r>=q)return H.b(a,r)
r=a[r]
if(s>=q)return H.b(a,s)
q=a[s]
t.a.m(0,u)
t.a.m(0,r)
t.a.m(0,q)
p.push(F.nz(u,r,q))}}return p},
gk:function(a){return this.b.length},
aQ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.r)(u),++r)if(!u[r].c9())s=!1
return s},
aP:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.r)(u),++r)if(!u[r].c8())s=!1
return s},
h:function(a){return this.O()},
G:function(a){var u,t,s,r=H.d([],[P.p])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].G(a))
return C.b.w(r,"\n")},
O:function(){return this.G("")}}
F.i8.prototype={
t:function(a,b,c){var u,t=this.a
t.a.m(0,b)
t.a.m(0,c)
t=new F.be()
if(b==null)H.m(P.i("May not create a line with a null start vertex."))
if(c==null)H.m(P.i("May not create a line with a null end vertex."))
u=b.a
if(u==null)H.m(P.i("May not create a line with a start vertex which is not attached to a shape."))
if(u!=c.a)H.m(P.i("May not create a line with vertices attached to different shapes."))
t.a=b
b.c.b.push(t)
t.b=c
c.c.c.push(t)
t.a.a.c.b.push(t)
t.a.a.X()
return t},
hZ:function(a){var u,t,s,r,q=H.d([],[F.be]),p=a.length
for(u=this.a,t=1;t<p;t+=2){s=t-1
r=a.length
if(s>=r)return H.b(a,s)
s=a[s]
if(t>=r)return H.b(a,t)
r=a[t]
u.a.m(0,s)
u.a.m(0,r)
q.push(F.nH(s,r))}return q},
gk:function(a){return this.b.length},
h:function(a){return this.O()},
G:function(a){var u,t,s=H.d([],[P.p]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].G(a+(""+u+". ")))}return C.b.w(s,"\n")},
O:function(){return this.G("")}}
F.i9.prototype={
i_:function(a){var u,t,s,r=H.d([],[F.bH]),q=a.length
for(u=this.a,t=0;t<q;++t){if(t>=a.length)return H.b(a,t)
s=a[t]
u.a.m(0,s)
r.push(F.lk(s))}return r},
gk:function(a){return this.b.length},
h:function(a){return this.O()},
G:function(a){var u,t,s,r=H.d([],[P.p])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].G(a))
return C.b.w(r,"\n")},
O:function(){return this.G("")}}
F.b_.prototype={
Z:function(){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.bP(u.cx,r,o,t,s,q,p,null,n)},
sa5:function(a,b){var u
if(!J.A(this.f,b)){this.f=b
u=this.a
if(u!=null)u.X()}},
sb5:function(a){var u
a=a==null?null:a.A(0,Math.sqrt(a.K(a)))
if(!J.A(this.r,a)){this.r=a
u=this.a
if(u!=null)u.X()}},
sU:function(a){var u
a=a==null?null:a.A(0,Math.sqrt(a.K(a)))
if(!J.A(this.x,a)){this.x=a
u=this.a
if(u!=null)u.X()}},
sW:function(a,b){var u
if(!J.A(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.X()}},
iD:function(a){var u,t,s=this
if(a.v(0,$.aA())){u=s.f
t=[P.K]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.az())){u=s.r
t=[P.K]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.ay())){u=s.x
t=[P.K]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.b3())){u=s.y
t=[P.K]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.v(0,$.bu())){u=s.z
t=[P.K]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bt())){u=s.Q
t=[P.K]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.cJ())){u=s.Q
t=[P.K]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.c2()))return H.d([s.ch],[P.K])
else if(a.v(0,$.b2())){u=H.d([-1,-1,-1,-1],[P.K])
return u}else return H.d([],[P.K])},
c9:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.R()
t.d.q(0,new F.j6(s))
s=s.a
t.r=s.A(0,Math.sqrt(s.K(s)))
s=t.a
if(s!=null){s.X()
s=t.a.e
if(s!=null)s.aW(0)}return!0},
c8:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.R()
t.d.q(0,new F.j5(s))
s=s.a
t.x=s.A(0,Math.sqrt(s.K(s)))
s=t.a
if(s!=null){s.X()
s=t.a.e
if(s!=null)s.aW(0)}return!0},
dU:function(a){var u,t,s,r=this.c.b.length
for(u=0;u<r;++u){t=this.c.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.b
t.a.a.N()
t=t.e
a.a.a.N()
if(t==a.e)return s}return},
ir:function(a){var u=this.dU(a)
if(u!=null)return u
return a.dU(this)},
v:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
G:function(a){var u,t,s=this,r="-",q=H.d([],[P.p])
q.push(C.a.aj(J.aj(s.e),0))
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
q.push(V.C(s.ch,3,0))
q.push(r)
t=C.b.w(q,", ")
return a+"{"+t+"}"},
O:function(){return this.G("")}}
F.j6.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.p(0,t)}}}
F.j5.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.p(0,t)}}}
F.j_.prototype={
N:function(){},
m:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.i("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.X()
return!0},
c6:function(a,b,c){var u=null,t=F.bP(u,u,u,new V.af(a,b,c),u,u,u,u,0)
this.m(0,t)
return t},
gk:function(a){return this.c.length},
aQ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)u[s].c9()
return!0},
aP:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)u[s].c8()
return!0},
bp:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
if(typeof p!=="number")return p.l()
o=q.b
if(typeof o!=="number")return o.l()
n=q.c
if(typeof n!=="number")return n.l()
n=q.A(0,Math.sqrt(p*p+o*o+n*n))
if(!J.A(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.J(null)}}}}return!0},
h:function(a){return this.O()},
G:function(a){var u,t,s,r
this.N()
u=H.d([],[P.p])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r)u.push(t[r].G(a))
return C.b.w(u,"\n")},
O:function(){return this.G("")}}
F.j0.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
q:function(a,b){var u=this
C.b.q(u.b,b)
C.b.q(u.c,new F.j1(u,b))
C.b.q(u.d,new F.j2(u,b))},
h:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.p])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].G(""))
return C.b.w(r,"\n")}}
F.j1.prototype={
$1:function(a){if(!J.A(a.a,this.a))this.b.$1(a)}}
F.j2.prototype={
$1:function(a){var u=this.a
if(!J.A(a.a,u)&&!J.A(a.b,u))this.b.$1(a)}}
F.j3.prototype={
gk:function(a){return this.b.length+this.c.length},
h:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.p])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].G(""))
return C.b.w(r,"\n")}}
F.j4.prototype={
gk:function(a){return this.b.length},
h:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.p])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s)r.push(u[s].G(""))
return C.b.w(r,"\n")}}
O.d_.prototype={
gB:function(){var u=this.rx
return u==null?this.rx=D.H():u},
E:function(a){var u=this.rx
if(u!=null)u.J(a)},
sab:function(a){var u=this.r2
if(!(Math.abs(u-a)<$.y().a)){this.r2=a
u=new D.v("vectorScale",u,a)
u.b=!0
this.E(u)}},
al:function(a,b){},
ei:function(a,b){var u,t,s,r,q,p,o=this,n="Inspection",m=2929
if(o.a==null){u=a.fr.i(0,n)
if(u==null){t=a.a
u=new A.fG(t,n)
u.cK(t,n)
u.e_(0,"uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n","precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n")
u.z=u.x.i(0,"posAttr")
u.Q=u.x.i(0,"normAttr")
u.ch=u.x.i(0,"clrAttr")
u.cx=u.x.i(0,"binmAttr")
u.cy=H.l(u.y.i(0,"lightVec"),"$iJ")
u.db=H.l(u.y.i(0,"ambientClr"),"$ibm")
u.dx=H.l(u.y.i(0,"diffuseClr"),"$ibm")
u.dy=H.l(u.y.i(0,"weightScalar"),"$ia4")
u.fr=H.l(u.y.i(0,"viewMat"),"$iag")
u.fx=H.l(u.y.i(0,"viewObjMatrix"),"$iag")
u.fy=H.l(u.y.i(0,"projViewObjMatrix"),"$iag")
a.ds(u)}o.a=u}if(b.e==null){b.d.aQ()
b.d.aP()
b.d.bp()
t=new Z.cO()
t.a=new H.I([P.p,Z.bz])
b.e=t}t=o.a
t.aB(a)
s=o.r2
r=t.dy
r.a.uniform1f(r.d,s)
s=o.b
r=t.cy
r.toString
q=s.a
p=s.b
s=s.c
r.a.uniform3f(r.d,q,p,s)
s=a.db
s=s.ga1(s)
p=t.fr
p.toString
p.ac(s.a6(0,!0))
s=a.ger()
p=t.fx
p.toString
p.ac(s.a6(0,!0))
s=a.gee()
t=t.fy
t.toString
t.ac(s.a6(0,!0))
t=b.e
if(t instanceof Z.cO){s=a.a
s.blendFunc(1,1)
if(b.c==null){s.disable(m)
s.enable(3042)
s.blendFunc(1,1)
if(o.k3)o.dc(a,t,b.d,"Axis",o.gcU(),o.z,o.y)
if(o.k4)o.dc(a,t,b.d,"AABB",o.gcQ(),o.z,o.y)
s.enable(m)
s.blendFunc(770,771)}else{s.enable(m)
s.enable(3042)
s.blendFunc(770,771)
if(o.Q)o.a_(a,t,b.c,"shapeFill",o.ghB(),o.d,o.c)
if(o.id)o.a_(a,t,b.c,"colorFill",o.geZ(),o.x,o.r)
if(o.k1)o.a_(a,t,b.c,"txt2DColor",o.ghM(),o.x,o.r)
if(o.k2)o.a_(a,t,b.c,"weight",o.ghS(),o.x,o.r)
s.disable(m)
s.blendFunc(1,1)
if(o.cx)o.a_(a,t,b.c,"vertices",o.ghQ(),o.f,o.e)
if(o.fr)o.a_(a,t,b.c,"faceCenters",o.gf9(),o.f,o.e)
if(o.ch)o.a_(a,t,b.c,"wireFrame",o.ghU(),o.f,o.e)
if(o.cy)o.a_(a,t,b.c,"normals",o.gfo(),o.f,o.e)
if(o.db)o.a_(a,t,b.c,"binormals",o.geU(),o.f,o.e)
if(o.dx)o.a_(a,t,b.c,"tangentals",o.ghE(),o.f,o.e)
if(o.dy)o.a_(a,t,b.c,"textureCube",o.ghO(),o.f,o.e)
if(o.fx)o.a_(a,t,b.c,"faceNormals",o.gfb(),o.f,o.e)
if(o.fy)o.a_(a,t,b.c,"faceBinormals",o.gf7(),o.x,o.r)
if(o.go)o.a_(a,t,b.c,"faceTangentals",o.gfd(),o.x,o.r)
if(o.k3)o.a_(a,t,b.c,"Axis",o.gcU(),o.z,o.y)
if(o.k4)o.a_(a,t,b.c,"AABB",o.gcQ(),o.z,o.y)
s.enable(m)
s.blendFunc(770,771)}}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.dC()},
a_:function(a,b,c,d,e,f,g){var u,t=b.a.i(0,d)
if(t==null){t=this.cV(a,e.$1(c))
b.a.j(0,d,t)}u=this.a
u.db.bc(f)
u.dx.bc(g)
t.eb(a)},
dc:function(a,b,c,d,e,f,g){var u,t=b.a.i(0,d)
if(t==null){t=this.cV(a,e.$1(c))
b.a.j(0,d,t)}u=this.a
u.db.bc(f)
u.dx.bc(g)
t.eb(a)},
cV:function(a,b){var u=this,t=$.aA(),s=$.az(),r=b.dv(new Z.dM(a.a),new Z.aL(t.a|s.a|$.ay().a|$.bt().a))
r.ah($.aA()).e=u.a.z.c
r.ah($.az()).e=u.a.Q.c
r.ah($.bt()).e=u.a.ch.c
r.ah($.ay()).e=u.a.cx.c
return r},
hC:function(a){var u=F.a7()
C.b.q(a.a.c,new O.fR(u,new V.F(1,1,1,1)))
C.b.q(a.d.b,new O.fS(u))
return u},
dm:function(a,b){var u,t={}
t.a=b
u=F.a7()
t.a=new V.F(0,0.7,1,1)
C.b.q(a.a.c,new O.h1(t,u))
t=new O.h0(u)
C.b.q(a.c.b,new O.h2(u,t))
C.b.q(a.d.b,new O.h3(u,t))
return u},
hV:function(a){return this.dm(a,null)},
hR:function(a){var u=F.a7()
C.b.q(a.a.c,new O.fX(new V.F(1,1,1,1),u))
return u},
fp:function(a){var u=F.a7()
C.b.q(a.a.c,new O.fQ(new V.F(1,1,0.3,1),u))
return u},
eV:function(a){var u=F.a7()
C.b.q(a.a.c,new O.fJ(new V.F(1,0.3,0.3,1),u))
return u},
hF:function(a){var u=F.a7()
C.b.q(a.a.c,new O.fT(new V.F(1,0.3,1,1),u))
return u},
hP:function(a){var u=F.a7()
C.b.q(a.a.c,new O.fW(new V.F(1,0.3,0.3,1),u))
return u},
fa:function(a){var u=F.a7()
C.b.q(a.d.b,new O.fN(new V.F(1,1,0.3,1),u))
return u},
fc:function(a){var u=F.a7()
C.b.q(a.d.b,new O.fO(new V.F(1,1,0.3,1),u))
return u},
f8:function(a){var u=F.a7()
C.b.q(a.d.b,new O.fM(new V.F(1,0.3,0.3,1),u))
return u},
fe:function(a){var u=F.a7()
C.b.q(a.d.b,new O.fP(new V.F(1,0.3,1,1),u))
return u},
f_:function(a){var u=F.a7()
C.b.q(a.a.c,new O.fK(u))
C.b.q(a.d.b,new O.fL(u))
return u},
hN:function(a){var u=F.a7()
C.b.q(a.a.c,new O.fU(u))
C.b.q(a.d.b,new O.fV(u))
return u},
hT:function(a){var u,t,s={},r=F.a7(),q=a.a.c
if(q.length<1)return r
s.a=s.b=q[0].ch
C.b.q(q,new O.fY(s))
q=s.a
u=s.b
if(typeof q!=="number")return q.n()
if(typeof u!=="number")return H.e(u)
t=q-u
s.c=t
if(t<=0)s.c=1
C.b.q(a.a.c,new O.fZ(s,r))
C.b.q(a.d.b,new O.h_(r))
return r},
eS:function(a){return this.eT(a)},
eT:function(a){var u=F.a7(),t=new O.fI(u)
t.$3(1,0,0)
t.$3(0,1,0)
t.$3(0,0,1)
return u},
eM:function(a){return this.eN(a)},
eN:function(a){var u,t,s,r,q,p,o,n,m,l=a.b2(),k=F.a7(),j=new O.fH(k),i=l.a,h=l.b,g=l.c,f=j.$3(i,h,g),e=l.d
if(typeof i!=="number")return i.p()
e=i+e
u=j.$3(e,h,g)
t=l.e
if(typeof h!=="number")return h.p()
t=h+t
s=j.$3(e,t,g)
r=j.$3(i,t,g)
q=l.f
if(typeof g!=="number")return g.p()
q=g+q
p=j.$3(i,h,q)
o=j.$3(e,h,q)
n=j.$3(e,t,q)
m=j.$3(i,t,q)
k.c.t(0,f,u)
k.c.t(0,u,s)
k.c.t(0,s,r)
k.c.t(0,r,f)
k.c.t(0,p,o)
k.c.t(0,o,n)
k.c.t(0,n,m)
k.c.t(0,m,p)
k.c.t(0,f,p)
k.c.t(0,u,o)
k.c.t(0,s,n)
k.c.t(0,r,m)
return k}}
O.fR.prototype={
$1:function(a){var u=this.a.a,t=a.Z()
t.sW(0,this.b)
t.sU(V.R())
u.m(0,t)}}
O.fS.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.N()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.N()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.b(p,q)
t=p[q]
q=r.a
p=a.c
p.a.a.N()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
s=q[p]
r.d.a4(0,u,t,s)}}
O.h1.prototype={
$1:function(a){var u=this.b.a,t=a.Z()
t.sW(0,this.a.a)
t.sU(V.R())
u.m(0,t)}}
O.h0.prototype={
$2:function(a,b){if(a.ir(b)==null)this.a.c.t(0,a,b)}}
O.h2.prototype={
$1:function(a){var u,t=this.a,s=t.a,r=a.a
r.a.a.N()
r=r.e
s=s.c
if(r>>>0!==r||r>=s.length)return H.b(s,r)
u=s[r]
t=t.a
r=a.b
r.a.a.N()
r=r.e
t=t.c
if(r>>>0!==r||r>=t.length)return H.b(t,r)
this.b.$2(u,t[r])}}
O.h3.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.N()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.N()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.b(p,q)
t=p[q]
r=r.a
q=a.c
q.a.a.N()
q=q.e
r=r.c
if(q>>>0!==q||q>=r.length)return H.b(r,q)
s=r[q]
q=this.b
q.$2(u,t)
q.$2(t,s)
q.$2(s,u)}}
O.fX.prototype={
$1:function(a){var u,t=a.Z()
t.sW(0,this.a)
t.sU(V.R())
u=this.b
u.a.m(0,t)
u.b.a.a.m(0,t)
F.lk(t)}}
O.fQ.prototype={
$1:function(a){var u,t,s=a.Z()
s.sW(0,this.a)
s.sU(V.R())
u=s.Z()
u.sU(s.r)
t=this.b
t.a.m(0,s)
t.a.m(0,u)
t.c.t(0,s,u)}}
O.fJ.prototype={
$1:function(a){var u,t,s=a.Z()
s.sW(0,this.a)
s.sU(V.R())
u=s.Z()
u.sU(a.x)
t=this.b
t.a.m(0,s)
t.a.m(0,u)
t.c.t(0,s,u)}}
O.fT.prototype={
$1:function(a){var u,t,s=a.Z()
s.sW(0,this.a)
s.sU(V.R())
u=s.Z()
u.sU(a.x.aC(a.r).M(0))
t=this.b
t.a.m(0,s)
t.a.m(0,u)
t.c.t(0,s,u)}}
O.fW.prototype={
$1:function(a){var u,t,s=a.Z()
s.sW(0,this.a)
s.sU(V.R())
u=s.Z()
u.sU(a.z)
t=this.b
t.a.m(0,s)
t.a.m(0,u)
t.c.t(0,s,u)}}
O.fN.prototype={
$1:function(a){var u=null,t=a.a.f.p(0,a.b.f).p(0,a.c.f).A(0,3),s=a.d,r=F.bP(u,V.R(),this.a,t,s,u,u,u,0)
s=this.b
s.a.m(0,r)
s.b.a.a.m(0,r)
F.lk(r)}}
O.fO.prototype={
$1:function(a){var u=null,t=a.a.f.p(0,a.b.f).p(0,a.c.f).A(0,3),s=a.d,r=F.bP(u,V.R(),this.a,t,s,u,u,u,0),q=r.Z()
q.sU(a.d)
s=this.b
s.a.m(0,r)
s.a.m(0,q)
s.c.t(0,r,q)}}
O.fM.prototype={
$1:function(a){var u=null,t=a.a.f.p(0,a.b.f).p(0,a.c.f).A(0,3),s=a.d,r=F.bP(u,V.R(),this.a,t,s,u,u,u,0),q=r.Z()
q.sU(a.e)
s=this.b
s.a.m(0,r)
s.a.m(0,q)
s.c.t(0,r,q)}}
O.fP.prototype={
$1:function(a){var u=null,t=a.a.f.p(0,a.b.f).p(0,a.c.f).A(0,3),s=a.d,r=F.bP(u,V.R(),this.a,t,s,u,u,u,0),q=r.Z()
q.sU(a.e.aC(a.d).M(0))
s=this.b
s.a.m(0,r)
s.a.m(0,q)
s.c.t(0,r,q)}}
O.fK.prototype={
$1:function(a){var u=this.a.a,t=a.Z()
t.sU(V.R())
u.m(0,t)}}
O.fL.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.N()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.N()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.b(p,q)
t=p[q]
q=r.a
p=a.c
p.a.a.N()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
s=q[p]
r.d.a4(0,u,t,s)}}
O.fU.prototype={
$1:function(a){var u,t,s=a.y,r=this.a.a,q=a.Z(),p=s.a,o=s.b
if(typeof p!=="number")return p.C()
if(p<0)p=0
else if(p>1)p=1
if(typeof o!=="number")return o.C()
u=o<0
if(u)t=0
else if(o>1)t=1
else t=o
if(u)o=0
else if(o>1)o=1
q.sW(0,new V.F(p,t,o,1))
q.sU(V.R())
r.m(0,q)}}
O.fV.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.N()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.N()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.b(p,q)
t=p[q]
q=r.a
p=a.c
p.a.a.N()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
s=q[p]
r.d.a4(0,u,t,s)}}
O.fY.prototype={
$1:function(a){var u=this.a,t=u.b,s=a.ch
if(typeof t!=="number")return t.a0()
if(typeof s!=="number")return H.e(s)
if(t>s)u.b=s
t=u.a
if(typeof t!=="number")return t.C()
if(t<s)u.a=s}}
O.fZ.prototype={
$1:function(a){var u,t=a.ch,s=this.a,r=s.b
if(typeof t!=="number")return t.n()
if(typeof r!=="number")return H.e(r)
u=V.nt((t-r)/s.c*5/6,1,1)
s=this.b.a
r=a.Z()
r.sU(V.R())
r.sW(0,V.nu(u))
s.m(0,r)}}
O.h_.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.N()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.N()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.b(p,q)
t=p[q]
q=r.a
p=a.c
p.a.a.N()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
s=q[p]
r.d.a4(0,u,t,s)}}
O.fI.prototype={
$3:function(a,b,c){var u,t,s=a>1?1:a,r=b>1?1:b,q=c>1?1:c,p=new V.F(s,r,q,1)
s=this.a
u=s.a.c6(0,0,0)
u.sU(V.R())
u.sb5(V.mq())
u.sW(0,p)
t=s.a.c6(a,b,c)
t.sU(V.R())
t.sb5(V.mq())
t.sW(0,p)
s.c.t(0,u,t)}}
O.fH.prototype={
$3:function(a,b,c){var u=this.a.a.c6(a,b,c)
u.sU(V.R())
u.sb5(new V.Q(a,b,c))
return u}}
O.bf.prototype={
gB:function(){var u=this.fr
return u==null?this.fr=D.H():u},
E:function(a){var u=this.fr
if(u!=null)u.J(a)},
bG:function(){return this.E(null)},
dd:function(a){this.a=null
this.E(a)},
hv:function(){return this.dd(null)},
fw:function(a,b){var u=new D.bE()
u.b=!0
this.E(u)},
fA:function(a,b){var u=new D.bF()
u.b=!0
this.E(u)},
d_:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.u,h=new H.I([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
q=r.gav()
p=h.i(0,r.gav())
h.j(0,q,p==null?1:p)}o=H.d([],[A.cT])
h.q(0,new O.hu(j,o))
C.b.bE(o,new O.hv())
n=new H.I([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.r)(u),++s){r=u[s]
q=r.gav()
p=n.i(0,r.gav())
n.j(0,q,p==null?1:p)}m=H.d([],[A.di])
n.q(0,new O.hw(j,m))
C.b.bE(m,new O.hx())
l=new H.I([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.r)(i),++s){r=i[s]
t=r.gav()
q=l.i(0,r.gav())
l.j(0,t,q==null?1:q)}k=H.d([],[A.dp])
l.q(0,new O.hy(j,k))
C.b.bE(k,new O.hz())
i=C.c.a9(j.e.a.length+3,4)
j.dy.e
return A.nO(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
ag:function(a,b){if(b!=null)if(!C.b.ao(a,b)){b.a=a.length
a.push(b)}},
al:function(a,b){var u
for(u=this.dx.a,u=new J.a9(u,u.length);u.D();)C.i.al(u.d,b)},
ei:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a
if(b0==null){b0=a9.d_()
u=b1.fr.i(0,b0.aD)
if(u==null){u=A.nN(b0,b1.a)
b1.ds(u)}b0=a9.a=u
b2.e=null}t=b0.z
s=t.dE
b0=b2.e
if(!(b0 instanceof Z.bz))b0=b2.e=null
if(b0==null||!b0.d.v(0,s)){b0=t.k3
if(b0)b2.d.aQ()
r=t.k4
if(r)b2.d.aP()
q=t.r2
if(q)b2.d.bp()
p=b2.d.dv(new Z.dM(b1.a),s)
p.ah($.aA()).e=a9.a.Q.c
if(b0)p.ah($.az()).e=a9.a.cx.c
if(r)p.ah($.ay()).e=a9.a.ch.c
if(t.r1)p.ah($.b3()).e=a9.a.cy.c
if(q)p.ah($.bu()).e=a9.a.db.c
if(t.rx)p.ah($.b2()).e=a9.a.dx.c
b2.e=p}o=H.d([],[T.dv])
a9.a.aB(b1)
if(t.dy){b0=a9.a
r=b1.dx
r=r.ga1(r)
b0=b0.dy
b0.toString
b0.ac(r.a6(0,!0))}if(t.fr){b0=a9.a
r=b1.ger()
b0=b0.fr
b0.toString
b0.ac(r.a6(0,!0))}b0=a9.a
r=b1.gee()
b0=b0.fy
b0.toString
b0.ac(r.a6(0,!0))
if(t.ry){b0=a9.a
r=a9.b
b0=b0.k1
b0.toString
b0.ac(C.i.a6(r,!0))}if(t.x1){b0=a9.a
r=a9.c
b0=b0.k2
b0.toString
b0.ac(C.i.a6(r,!0))}if(t.x2){b0=a9.a
r=a9.d
b0=b0.k3
b0.toString
b0.ac(C.i.a6(r,!0))}if(t.y2>0){n=a9.e.a.length
b0=a9.a.k4
b0.a.uniform1i(b0.d,n)
for(m=0;m<n;++m){b0=a9.a
r=a9.e.a
if(m>=r.length)return H.b(r,m)
r=r[m]
b0=b0.r1
if(m>=b0.length)return H.b(b0,m)
b0=b0[m]
l=new Float32Array(H.bT(r.a6(0,!0)))
b0.a.uniformMatrix4fv(b0.d,!1,l)}}b0=t.a
if(b0.a){r=a9.a
q=a9.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ag(o,a9.f.d)
b0=a9.a
r=a9.f.d
b0.an(b0.rx,r)}if(t.id){b0=t.b
if(b0.a){r=a9.a
q=a9.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ag(o,a9.r.d)
b0=a9.a
r=a9.r.d
b0.an(b0.x2,r)}b0=t.c
if(b0.a){r=a9.a
q=a9.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ag(o,a9.x.d)
b0=a9.a
r=a9.x.d
b0.an(b0.aD,r)}b0=t.d
if(b0.a){r=a9.a
q=a9.y.f
r=r.dF
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ag(o,a9.y.d)
b0=a9.a
r=a9.y.d
b0.an(b0.dG,r)}b0=t.e
r=b0.a
if(r||b0.b||!1){q=a9.a
k=a9.z.ch
q=q.dJ
q.a.uniform1f(q.d,k)}if(r){r=a9.a
q=a9.z.f
r=r.dH
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ag(o,a9.z.d)
b0=a9.a
r=a9.z.d
b0.an(b0.dI,r)}b0=t.z
if(b0.length>0){r=b1.db
j=r.ga1(r)
r=P.u
i=new H.I([r,r])
for(r=a9.dx.e,q=r.length,h=0;h<r.length;r.length===q||(0,H.r)(r),++h){g=r[h]
f=g.gav()
e=i.i(0,f)
if(e==null)e=0
i.j(0,f,e+1)
d=J.z(a9.a.cf.i(0,f),e)
k=j.cB(g.gdB(g))
c=k.a
if(typeof c!=="number")return c.l()
b=k.b
if(typeof b!=="number")return b.l()
a=k.c
if(typeof a!=="number")return a.l()
a=k.A(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
k=a.b
a=a.c
b.a.uniform3f(b.d,c,k,a)
a=g.gW(g)
k=d.f
k.a.uniform3f(k.d,a.a,a.b,a.c)
g.gak()
k=g.gdB(g)
c=d.d
c.a.uniform3f(c.d,k.a,k.b,k.c)
k=g.gbA()
c=d.b
c.a.uniform3f(c.d,k.a,k.b,k.c)
k=g.gbx(g)
c=d.c
c.a.uniform3f(c.d,k.a,k.b,k.c)
k=g.gak()
if(!C.b.ao(o,k)){k.a=o.length
o.push(k)}k=g.gak()
c=k.gaS(k)
if(c){c=d.r
c.toString
b=k.d
if(!b)c.a.uniform1i(c.d,0)
else{k=k.a
c.a.uniform1i(c.d,k)}}}for(r=b0.length,h=0;h<b0.length;b0.length===r||(0,H.r)(b0),++h){q=b0[h].a
n=i.i(0,q)
if(n==null)n=0
q=a9.a.ce.i(0,q)
q.a.uniform1i(q.d,n)}}b0=t.Q
if(b0.length>0){r=b1.db
j=r.ga1(r)
r=P.u
a0=new H.I([r,r])
for(r=a9.dx.f,q=r.length,h=0;h<r.length;r.length===q||(0,H.r)(r),++h){g=r[h]
f=g.gav()
e=a0.i(0,f)
if(e==null)e=0
a0.j(0,f,e+1)
d=J.z(a9.a.ci.i(0,f),e)
a1=j.l(0,g.ga1(g))
k=g.ga1(g)
c=$.cm
k=k.bz(c==null?$.cm=new V.af(0,0,0):c)
c=d.b
c.a.uniform3f(c.d,k.a,k.b,k.c)
k=$.cm
k=a1.bz(k==null?$.cm=new V.af(0,0,0):k)
c=d.c
c.a.uniform3f(c.d,k.a,k.b,k.c)
k=g.gW(g)
c=d.e
c.a.uniform3f(c.d,k.a,k.b,k.c)
g.gak()
k=a1.e0(0)
c=k.a
b=k.b
a=k.c
a2=k.e
a3=k.f
a4=k.r
a5=k.y
a6=k.z
k=k.Q
a7=d.d
a7.toString
l=new Float32Array(H.bT(new V.d9(c,b,a,a2,a3,a4,a5,a6,k).a6(0,!0)))
a7.a.uniformMatrix3fv(a7.d,!1,l)
g.gak()
k=g.gak()
if(!C.b.ao(o,k)){k.a=o.length
o.push(k)}k=g.gak()
c=k.gaS(k)
if(c){c=d.f
c.toString
b=k.gaS(k)
if(!b)c.a.uniform1i(c.d,0)
else{k=k.gix(k)
c.a.uniform1i(c.d,k)}}g.gaZ()
k=g.gex()
c=d.x
c.toString
b=k.gig(k)
a=k.gih(k)
a2=k.gii()
k=k.gie()
c.a.uniform4f(c.d,b,a,a2,k)
k=g.gaZ()
if(!C.b.ao(o,k)){k.a=o.length
o.push(k)}k=g.gaZ()
c=k.gaS(k)
if(c){c=d.r
c.toString
b=k.gaS(k)
if(!b)c.a.uniform1i(c.d,0)
else{k=k.gix(k)
c.a.uniform1i(c.d,k)}}if(g.gil()){k=g.gi1()
c=d.y
c.a.uniform1f(c.d,k)
k=g.gi2()
c=d.z
c.a.uniform1f(c.d,k)
k=g.gi3()
c=d.Q
c.a.uniform1f(c.d,k)}}for(r=b0.length,h=0;h<b0.length;b0.length===r||(0,H.r)(b0),++h){q=b0[h].a
n=a0.i(0,q)
if(n==null)n=0
q=a9.a.cg.i(0,q)
q.a.uniform1i(q.d,n)}}b0=t.ch
if(b0.length>0){r=b1.db
j=r.ga1(r)
r=P.u
a8=new H.I([r,r])
for(r=a9.dx.r,q=r.length,h=0;h<r.length;r.length===q||(0,H.r)(r),++h){g=r[h]
f=g.gav()
e=a8.i(0,f)
if(e==null)e=0
a8.j(0,f,e+1)
d=J.z(a9.a.ck.i(0,f),e)
k=g.giX(g)
c=d.b
c.a.uniform3f(c.d,k.a,k.b,k.c)
k=g.gdB(g).jz()
c=d.c
c.a.uniform3f(c.d,k.a,k.b,k.c)
k=j.bz(g.giX(g))
c=d.d
c.a.uniform3f(c.d,k.a,k.b,k.c)
k=g.gW(g)
c=d.e
c.a.uniform3f(c.d,k.a,k.b,k.c)
g.gak()
k=g.gbA()
c=d.f
c.a.uniform3f(c.d,k.a,k.b,k.c)
k=g.gbx(g)
c=d.r
c.a.uniform3f(c.d,k.a,k.b,k.c)
k=g.gjA()
c=d.x
c.a.uniform1f(c.d,k)
k=g.gjB()
c=d.y
c.a.uniform1f(c.d,k)
g.gak()
k=g.gak()
if(!C.b.ao(o,k)){k.a=o.length
o.push(k)}k=g.gak()
c=k.gaS(k)
if(c){c=d.dx
c.toString
b=k.d
if(!b)c.a.uniform1i(c.d,0)
else{k=k.a
c.a.uniform1i(c.d,k)}}g.gaZ()
k=g.gex()
c=d.z
c.toString
b=k.gig(k)
a=k.gih(k)
a2=k.gii()
k=k.gie()
c.a.uniform4f(c.d,b,a,a2,k)
k=g.gaZ()
if(!C.b.ao(o,k)){k.a=o.length
o.push(k)}k=g.gaZ()
c=k.gaS(k)
if(c){c=d.dy
c.toString
b=k.d
if(!b)c.a.uniform1i(c.d,0)
else{k=k.a
c.a.uniform1i(c.d,k)}}if(g.gjo()){k=g.gjn()
c=d.Q
c.a.uniform1f(c.d,k)
k=g.gjm()
c=d.ch
c.a.uniform1f(c.d,k)}if(g.gil()){k=g.gi1()
c=d.cx
c.a.uniform1f(c.d,k)
k=g.gi2()
c=d.cy
c.a.uniform1f(c.d,k)
k=g.gi3()
c=d.db
c.a.uniform1f(c.d,k)}}for(r=b0.length,h=0;h<b0.length;b0.length===r||(0,H.r)(b0),++h){q=b0[h].a
n=a8.i(0,q)
if(n==null)n=0
q=a9.a.cj.i(0,q)
q.a.uniform1i(q.d,n)}}}if(t.f.b){a9.ag(o,a9.Q.d)
b0=a9.a
r=a9.Q.d
b0.an(b0.dK,r)}if(t.dx){b0=a9.a
r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.ga1(r).e0(0)}b0=b0.id
b0.toString
b0.ac(r.a6(0,!0))}if(t.cy){a9.ag(o,a9.ch)
b0=a9.a
r=a9.ch
b0.hx(b0.dL,r)
b0=t.r
if(b0.a){r=a9.a
q=a9.cx.f
r=r.dM
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ag(o,a9.cx.d)
b0=a9.a
r=a9.cx.d
b0.an(b0.dN,r)}b0=t.x
r=b0.a
if(r||b0.b||!1){q=a9.a
k=a9.cy.ch
q=q.dO
q.a.uniform1f(q.d,k)}if(r){r=a9.a
q=a9.cy.f
r=r.dP
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.ag(o,a9.cy.d)
b0=a9.a
r=a9.cy.d
b0.an(b0.dQ,r)}}b0=t.y
r=b0.a
q=!r
if(!q||b0.b||!1){if(r){r=a9.a
k=a9.db.f
r=r.dR
r.a.uniform1f(r.d,k)}if(b0.b){a9.ag(o,a9.db.d)
r=a9.a
k=a9.db.d
r.an(r.dS,k)}r=b1.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b1.a,m=0;m<o.length;++m){k=o[m]
if(!k.c&&k.d){k.c=!0
r.activeTexture(33984+k.a)
r.bindTexture(3553,k.b)}}k=H.l(b2.e,"$ibz")
k.aB(b1)
k.aG(b1)
k.eo(b1)
if(!q||b0.b||!1)r.disable(3042)
for(m=0;m<o.length;++m){b0=o[m]
if(b0.c){b0.c=!1
r.activeTexture(33984+b0.a)
r.bindTexture(3553,null)}}b0=a9.a
b0.toString
r.useProgram(null)
b0.x.dC()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.d_().aD}}
O.hu.prototype={
$2:function(a,b){if(typeof b!=="number")return b.p()
return this.b.push(new A.cT(a,C.c.a9(b+3,4)*4))}}
O.hv.prototype={
$2:function(a,b){return J.l1(a.a,b.a)}}
O.hw.prototype={
$2:function(a,b){if(typeof b!=="number")return b.p()
return this.b.push(new A.di(a,C.c.a9(b+3,4)*4))}}
O.hx.prototype={
$2:function(a,b){return J.l1(a.a,b.a)}}
O.hy.prototype={
$2:function(a,b){if(typeof b!=="number")return b.p()
return this.b.push(new A.dp(a,C.c.a9(b+3,4)*4))}}
O.hz.prototype={
$2:function(a,b){return J.l1(a.a,b.a)}}
O.ho.prototype={
c2:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.y().a)){u.f=a
t=new D.v(u.b,t,a)
t.b=!0
u.a.E(t)}},
az:function(){this.cI()
this.c2(1)},
saa:function(a,b){var u,t=this
if(b==null)b=1
u=t.c.b
if(b<=0){t.aN(new A.X(!1,u,!1))
t.c2(0)}else{t.aN(new A.X(!0,u,!1))
t.c2(b>=1?1:b)}}}
O.ce.prototype={
E:function(a){return this.a.E(a)},
bG:function(){return this.E(null)},
az:function(){},
aN:function(a){var u,t,s=this
if(!s.c.v(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.az()
u=s.a
u.a=null
u.E(null)}},
sb8:function(a){var u,t=this,s=t.c
if(!s.b)t.aN(new A.X(s.a,!0,!1))
s=t.d
if(s!==a){if(s!=null)s.gB().Y(0,t.gbe())
u=t.d
t.d=a
a.gB().m(0,t.gbe())
s=new D.v(t.b+".texture2D",u,t.d)
s.b=!0
t.a.E(s)}}}
O.hp.prototype={}
O.aF.prototype={
df:function(a){var u,t,s=this
if(!s.f.v(0,a)){u=s.f
s.f=a
t=new D.v(s.b+".color",u,a)
t.b=!0
s.a.E(t)}},
az:function(){this.cI()
this.df(new V.S(1,1,1))},
sW:function(a,b){this.aN(new A.X(!0,this.c.b,!1))
this.df(b)}}
O.hr.prototype={}
O.hs.prototype={
az:function(){var u,t=this
t.cJ()
u=t.ch
if(!(Math.abs(u-1)<$.y().a)){t.ch=1
u=new D.v(t.b+".refraction",u,1)
u.b=!0
t.a.E(u)}}}
O.ht.prototype={
c3:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.y().a)){u.ch=a
t=new D.v(u.b+".shininess",t,a)
t.b=!0
u.a.E(t)}},
az:function(){this.cJ()
this.c3(100)}}
O.du.prototype={}
T.dv.prototype={}
T.is.prototype={}
T.it.prototype={
gB:function(){var u=this.y
return u==null?this.y=D.H():u}}
T.iu.prototype={
b3:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.it()
t.a=0
t.b=q
t.d=t.c=!1
W.U(u,"load",new T.iv(this,t,u,!1,q,!1,!1),!1)
return t},
hw:function(a,b,c){var u,t,s,r
b=V.lE(b)
u=V.lE(a.width)
t=V.lE(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.l8()
s.width=u
s.height=t
r=C.j.eu(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.pf(r.getImageData(0,0,s.width,s.height))}}}
T.iv.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.hw(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.R.jg(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.ij()}++s.e}}
X.l7.prototype={}
X.fB.prototype={
gB:function(){var u=this.x
return u==null?this.x=D.H():u}}
X.dh.prototype={
gB:function(){var u=this.f
return u==null?this.f=D.H():u},
aJ:function(a){var u=this.f
if(u!=null)u.J(a)},
eL:function(){return this.aJ(null)},
sb4:function(a){var u,t,s=this
if(!J.A(s.b,a)){u=s.b
if(u!=null)u.gB().Y(0,s.gcP())
t=s.b
s.b=a
if(a!=null)a.gB().m(0,s.gcP())
u=new D.v("mover",t,s.b)
u.b=!0
s.aJ(u)}}}
X.io.prototype={}
V.f4.prototype={
a4:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=this
if(l.c==null)return
u=l.d.length
t=P.dG().gaU().i(0,l.a)
if(t==null||t.length<=u){s=d
r=!0}else{if(u>=t.length)return H.b(t,u)
s=t[u]==="1"
r=!1}c.$1(s)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.eP(l.c).m(0,p)
n=W.lP("checkbox")
n.checked=s
W.U(n,"change",new V.f5(l,c,n,u),!1)
p.appendChild(n)
m=q.createElement("span")
m.textContent=b
p.appendChild(m)
J.eP(l.c).m(0,q.createElement("br"))
l.d.push(n)
if(r)l.dl(u,s)},
t:function(a,b,c){return this.a4(a,b,c,!1)},
dl:function(a,b){var u,t,s,r,q,p=this.a,o=P.dG().gaU().i(0,p)
if(o==null)o=""
u=o.length
if(u<a)o=C.a.iP(o,a-u+1,"0")
t=a>0?C.a.u(o,0,a):""
t+=b?"1":"0"
u=a+1
if(u<o.length)t+=C.a.ad(o,u)
s=P.dG()
u=P.p
r=P.lU(s.gaU(),u,u)
r.j(0,p,t)
q=s.cw(0,r)
p=window.history
u=q.h(0)
p.toString
p.replaceState(new P.eq([],[]).bB(""),"",u)}}
V.f5.prototype={
$1:function(a){var u=this,t=u.c
u.b.$1(t.checked)
u.a.dl(u.d,t.checked)}}
V.kY.prototype={
$1:function(a){var u=C.d.em(this.a.giv(),2)
if(u!=="0.00")P.eN(u+" fps")}}
V.hW.prototype={
a4:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.dG().gaU().i(0,H.f(u))
if(t==null)if(d){c.$0()
m.dk(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.eP(m.c).m(0,q)
o=W.lP("radio")
o.checked=s
o.name=u
W.U(o,"change",new V.hX(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.eP(m.c).m(0,r.createElement("br"))},
t:function(a,b,c){return this.a4(a,b,c,!1)},
dk:function(a){var u,t,s=P.dG(),r=P.p,q=P.lU(s.gaU(),r,r)
q.j(0,this.a,a)
u=s.cw(0,q)
r=window.history
t=u.h(0)
r.toString
r.replaceState(new P.eq([],[]).bB(""),"",t)}}
V.hX.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.dk(u.d)}}}
V.ia.prototype={
eG:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.U(q,"scroll",new V.ic(o),!1)},
dr:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.hz()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.jk(C.b.iB(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
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
if(H.pA(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.b(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.jY(C.O,n,C.f,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.f(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
hW:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
for(s=0;s<3;++s){r=o.createElement("div")
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
hz:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new R.iy()
t=P.p
u.a=new H.I([t,R.dr])
u.b=new H.I([t,R.dz])
u.c=u.P(0,q)
t=u.P(0,q).w(0,p)
s=T.aa(new H.V("*"))
t.a.push(s)
t.c=!0
t=u.P(0,p).w(0,p)
s=new T.aT()
r=[T.d8]
s.a=H.d([],r)
t.a.push(s)
t=T.aa(new H.V("*"))
s.a.push(t)
t=u.P(0,p).w(0,"BoldEnd")
s=T.aa(new H.V("*"))
t.a.push(s)
t.c=!0
t=u.P(0,q).w(0,o)
s=T.aa(new H.V("_"))
t.a.push(s)
t.c=!0
t=u.P(0,o).w(0,o)
s=new T.aT()
s.a=H.d([],r)
t.a.push(s)
t=T.aa(new H.V("_"))
s.a.push(t)
t=u.P(0,o).w(0,n)
s=T.aa(new H.V("_"))
t.a.push(s)
t.c=!0
t=u.P(0,q).w(0,m)
s=T.aa(new H.V("`"))
t.a.push(s)
t.c=!0
t=u.P(0,m).w(0,m)
s=new T.aT()
s.a=H.d([],r)
t.a.push(s)
t=T.aa(new H.V("`"))
s.a.push(t)
t=u.P(0,m).w(0,"CodeEnd")
s=T.aa(new H.V("`"))
t.a.push(s)
t.c=!0
t=u.P(0,q).w(0,l)
s=T.aa(new H.V("["))
t.a.push(s)
t.c=!0
t=u.P(0,l).w(0,k)
s=T.aa(new H.V("|"))
t.a.push(s)
s=u.P(0,l).w(0,j)
t=T.aa(new H.V("]"))
s.a.push(t)
s.c=!0
s=u.P(0,l).w(0,l)
t=new T.aT()
t.a=H.d([],r)
s.a.push(t)
s=T.aa(new H.V("|]"))
t.a.push(s)
s=u.P(0,k).w(0,j)
t=T.aa(new H.V("]"))
s.a.push(t)
s.c=!0
s=u.P(0,k).w(0,k)
t=new T.aT()
t.a=H.d([],r)
s.a.push(t)
s=T.aa(new H.V("|]"))
t.a.push(s)
u.P(0,q).w(0,i).a.push(new T.eR())
s=u.P(0,i).w(0,i)
t=new T.aT()
t.a=H.d([],r)
s.a.push(t)
s=T.aa(new H.V("*_`["))
t.a.push(s)
s=u.P(0,"BoldEnd")
s.d=s.a.ba(p)
s=u.P(0,n)
s.d=s.a.ba(o)
s=u.P(0,"CodeEnd")
s.d=s.a.ba(m)
s=u.P(0,j)
s.d=s.a.ba("Link")
s=u.P(0,i)
s.d=s.a.ba(i)
this.b=u}}
V.ic.prototype={
$1:function(a){P.me(C.n,new V.ib(this.a))}}
V.ib.prototype={
$0:function(){var u=C.d.as(document.documentElement.scrollTop),t=this.a.style,s=H.f(-0.01*u)+"px"
t.top=s}}
G.ko.prototype={
$1:function(a){var u
this.a.a=a
u=this.b.y.a
if(u.length>1)u[0].b=a}}
G.kp.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.Q!==a){t.Q=a
u=new D.v("showFilled",!a,a)
u.b=!0
t.E(u)}}}
G.kq.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.ch!==a){t.ch=a
u=new D.v("showWireFrame",!a,a)
u.b=!0
t.E(u)}}}
G.kB.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.cx!==a){t.cx=a
u=new D.v("showVertices",!a,a)
u.b=!0
t.E(u)}}}
G.kM.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.cy!==a){t.cy=a
u=new D.v("showNormals",!a,a)
u.b=!0
t.E(u)}}}
G.kO.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.db!==a){t.db=a
u=new D.v("showBinormals",!a,a)
u.b=!0
t.E(u)}}}
G.kP.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.dx!==a){t.dx=a
u=new D.v("showTangentals",!a,a)
u.b=!0
t.E(u)}}}
G.kQ.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.fr!==a){t.fr=a
u=new D.v("showFaceCenters",!a,a)
u.b=!0
t.E(u)}}}
G.kR.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.fx!==a){t.fx=a
u=new D.v("showFaceNormals",!a,a)
u.b=!0
t.E(u)}}}
G.kS.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.fy!==a){t.fy=a
u=new D.v("showFaceBinormals",!a,a)
u.b=!0
t.E(u)}}}
G.kT.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.go!==a){t.go=a
u=new D.v("showFaceTangentals",!a,a)
u.b=!0
t.E(u)}}}
G.kr.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.id!==a){t.id=a
u=new D.v("showColorFill",!a,a)
u.b=!0
t.E(u)}}}
G.ks.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k1!==a){t.k1=a
u=new D.v("showTxt2DColor",!a,a)
u.b=!0
t.E(u)}}}
G.kt.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.dy!==a){t.dy=a
u=new D.v("showTxtCube",!a,a)
u.b=!0
t.E(u)}}}
G.ku.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k2!==a){t.k2=a
u=new D.v("showWeight",!a,a)
u.b=!0
t.E(u)}}}
G.kv.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k3!==a){t.k3=a
u=new D.v("showAxis",!a,a)
u.b=!0
t.E(u)}}}
G.kw.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k4!==a){t.k4=a
u=new D.v("showAABB",!a,a)
u.b=!0
t.E(u)}}}
G.kU.prototype={
$1:function(a){var u=E.fr(null)
u.scF(0,a.c)
C.b.q(a.y.a,new G.kV(u,this))
return u}}
G.kV.prototype={
$1:function(a){this.a.y.m(0,this.b.$1(a))}}
G.kW.prototype={
es:function(a){var u=0,t=P.a1(null),s=this,r,q,p,o,n
var $async$$1=P.a2(function(b,c){if(b===1)return P.Z(c,t)
while(true)switch(u){case 0:u=2
return P.a8(O.dg(a,s.b.f),$async$$1)
case 2:n=c
n.j8(3.5)
r=s.c
q=r.y
p=q.a
if(p.length>0){q.a=H.d([],[H.cI(q,0)])
q=q.d
if(q!=null)q.$2(0,p)}r.y.m(0,n)
n.b=s.a.a
o=s.d.$1(n)
o.saX(s.e)
r.y.m(0,o)
return P.a_(null,t)}})
return P.a0($async$$1,t)},
$1:function(a){return this.es(a)}}
G.kx.prototype={
$0:function(){var u=0,t=P.a1(P.Y),s=this
var $async$$0=P.a2(function(a,b){if(a===1)return P.Z(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/Cube.obj")
return P.a_(null,t)}})
return P.a0($async$$0,t)}}
G.ky.prototype={
$0:function(){var u=0,t=P.a1(P.Y),s=this
var $async$$0=P.a2(function(a,b){if(a===1)return P.Z(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/tree/tree.obj")
return P.a_(null,t)}})
return P.a0($async$$0,t)}}
G.kz.prototype={
$0:function(){var u=0,t=P.a1(P.Y),s=this
var $async$$0=P.a2(function(a,b){if(a===1)return P.Z(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/Wolf.obj")
return P.a_(null,t)}})
return P.a0($async$$0,t)}}
G.kA.prototype={
$0:function(){var u=0,t=P.a1(P.Y),s=this
var $async$$0=P.a2(function(a,b){if(a===1)return P.Z(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/plant/plant.obj")
return P.a_(null,t)}})
return P.a0($async$$0,t)}}
G.kC.prototype={
$0:function(){this.a.sab(0.01)}}
G.kD.prototype={
$0:function(){this.a.sab(0.02)}}
G.kE.prototype={
$0:function(){this.a.sab(0.04)}}
G.kF.prototype={
$0:function(){this.a.sab(0.06)}}
G.kG.prototype={
$0:function(){this.a.sab(0.08)}}
G.kH.prototype={
$0:function(){this.a.sab(0.1)}}
G.kI.prototype={
$0:function(){this.a.sab(0.2)}}
G.kJ.prototype={
$0:function(){this.a.sab(0.4)}}
G.kK.prototype={
$0:function(){this.a.sab(0.6)}}
G.kL.prototype={
$0:function(){this.a.sab(0.8)}}
G.kN.prototype={
$0:function(){this.a.sab(1)}};(function aliases(){var u=J.a.prototype
u.eA=u.h
u=J.d3.prototype
u.eB=u.h
u=T.cZ.prototype
u.ez=u.aT
u.cH=u.h
u=O.ce.prototype
u.cI=u.az
u=O.aF.prototype
u.cJ=u.az})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"pa","ol",8)
u(P,"pb","om",8)
u(P,"pc","on",8)
t(P,"mL","p8",11)
s(P.dP.prototype,"gi7",0,1,null,["$2","$1"],["bq","dz"],19,0)
var n
s(n=E.aD.prototype,"ge7",0,0,null,["$1","$0"],["e8","iM"],1,0)
s(n,"ge9",0,0,null,["$1","$0"],["ea","iN"],1,0)
s(n,"ge5",0,0,null,["$1","$0"],["e6","iL"],1,0)
s(n,"ge3",0,0,null,["$1","$0"],["e4","iI"],1,0)
r(n,"giG","iH",5)
r(n,"giJ","iK",5)
s(n=E.dw.prototype,"gcL",0,0,null,["$1","$0"],["cN","cM"],1,0)
q(n,"gj7","ej",11)
p(n=X.dH.prototype,"gfN","fO",6)
p(n,"gfB","fC",6)
p(n,"gfH","fI",3)
p(n,"gfR","fS",12)
p(n,"gfP","fQ",12)
p(n,"gfV","fW",3)
p(n,"gfZ","h_",3)
p(n,"gfL","fM",3)
p(n,"gfX","fY",3)
p(n,"gfJ","fK",3)
p(n,"gh0","h1",23)
p(n,"gh2","h3",6)
p(n,"ghf","hg",7)
p(n,"ghb","hc",7)
p(n,"ghd","he",7)
s(n=D.d5.prototype,"gd8",0,0,null,["$1","$0"],["d9","fT"],1,0)
p(n,"gh5","h6",24)
r(n,"gft","fu",13)
r(n,"gh9","ha",13)
o(V.E.prototype,"gk","cp",14)
o(V.Q.prototype,"gk","cp",14)
s(n=U.c9.prototype,"gaL",0,0,null,["$1","$0"],["R","a8"],1,0)
r(n,"gfq","fs",15)
r(n,"gh7","h8",15)
s(n=U.dI.prototype,"gaL",0,0,null,["$1","$0"],["R","a8"],1,0)
p(n,"gbQ","bR",2)
p(n,"gbS","bT",2)
p(n,"gbU","bV",2)
s(n=U.dJ.prototype,"gaL",0,0,null,["$1","$0"],["R","a8"],1,0)
p(n,"gbQ","bR",2)
p(n,"gbS","bT",2)
p(n,"gbU","bV",2)
p(n,"gfh","fi",2)
p(n,"gfj","fk",2)
p(n,"ghK","hL",2)
p(n,"ghI","hJ",2)
p(n,"ghG","hH",2)
p(U.dK.prototype,"gfl","fm",2)
s(n=M.cW.prototype,"gat",0,0,null,["$1","$0"],["ax","eI"],1,0)
r(n,"gfD","fE",5)
r(n,"gfF","fG",5)
p(n=O.d_.prototype,"ghB","hC",0)
s(n,"ghU",0,1,null,["$2$color","$1"],["dm","hV"],25,0)
p(n,"ghQ","hR",0)
p(n,"gfo","fp",0)
p(n,"geU","eV",0)
p(n,"ghE","hF",0)
p(n,"ghO","hP",0)
p(n,"gf9","fa",0)
p(n,"gfb","fc",0)
p(n,"gf7","f8",0)
p(n,"gfd","fe",0)
p(n,"geZ","f_",0)
p(n,"ghM","hN",0)
p(n,"ghS","hT",0)
p(n,"gcU","eS",0)
p(n,"gcQ","eM",0)
s(n=O.bf.prototype,"gbe",0,0,null,["$1","$0"],["E","bG"],1,0)
s(n,"ghu",0,0,null,["$1","$0"],["dd","hv"],1,0)
r(n,"gfv","fw",16)
r(n,"gfz","fA",16)
s(O.ce.prototype,"gbe",0,0,null,["$1","$0"],["E","bG"],1,0)
s(X.dh.prototype,"gcP",0,0,null,["$1","$0"],["aJ","eL"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.P,null)
s(P.P,[H.lh,J.a,J.a9,P.e4,P.k,H.d6,P.h4,H.cX,H.iP,H.fa,H.iD,P.b7,H.c7,H.c5,H.em,P.aP,H.hb,H.hd,H.h6,H.e5,H.ja,P.et,P.jb,P.ae,P.dP,P.dZ,P.ah,P.dN,P.dt,P.il,P.jN,P.dx,P.bw,P.k0,P.jK,P.jE,P.e3,P.t,P.jT,P.hk,P.f7,P.k_,P.jZ,P.bp,P.ak,P.ap,P.b6,P.hP,P.dq,P.dW,P.fA,P.q,P.T,P.Y,P.lm,P.au,P.p,P.W,P.bR,P.iR,P.jL,W.fe,W.f6,W.L,W.cY,P.jO,P.ey,P.jF,P.bM,T.eR,T.cZ,T.d8,T.i6,R.dr,R.dy,R.dz,R.iy,O.b5,O.cf,E.f0,E.aD,E.hZ,E.dw,Z.dL,Z.dM,Z.bz,Z.cO,Z.bD,Z.aL,D.f3,D.b8,D.ad,O.k9,O.eK,O.ka,X.cP,X.d4,X.h9,X.hh,X.ar,X.hG,X.iz,X.dH,D.fj,D.al,D.hS,D.ig,V.S,V.F,V.fs,V.d9,V.aQ,V.as,V.af,V.dk,V.bK,V.E,V.Q,U.dI,U.dJ,U.dK,M.cW,A.cM,A.eU,A.X,A.cT,A.di,A.dp,A.hq,A.cr,A.ct,A.cu,A.dC,A.iK,F.b9,F.be,F.bH,F.at,F.i7,F.i8,F.i9,F.b_,F.j_,F.j0,F.j3,F.j4,O.du,O.ce,O.hr,T.iu,X.l7,X.io,X.dh,V.f4,V.hW,V.ia])
s(J.a,[J.h5,J.d2,J.d3,J.ba,J.cd,J.bb,H.ci,H.bg,W.h,W.eQ,W.by,W.aC,W.G,W.dQ,W.aq,W.fi,W.fk,W.dS,W.cV,W.dU,W.fm,W.j,W.dX,W.aN,W.fC,W.e_,W.aO,W.hg,W.hA,W.e6,W.e7,W.aR,W.e8,W.eb,W.aU,W.ef,W.eh,W.aW,W.ei,W.aX,W.en,W.aI,W.er,W.ix,W.aZ,W.eu,W.iB,W.iW,W.eA,W.eC,W.eE,W.eG,W.eI,P.bd,P.e1,P.bh,P.ed,P.hU,P.eo,P.bk,P.ew,P.eV,P.dO,P.dl,P.ek])
s(J.d3,[J.hQ,J.bO,J.bc])
t(J.lg,J.ba)
s(J.cd,[J.d1,J.d0])
t(P.hf,P.e4)
s(P.hf,[H.dE,W.ji,W.jh,P.fw])
t(H.V,H.dE)
s(P.k,[H.fp,H.hl,H.j8])
s(P.h4,[H.hm,H.j9])
t(H.fb,H.fa)
s(P.b7,[H.hM,H.h8,H.iO,H.f2,H.i4,P.cl,P.aw,P.iQ,P.iM,P.ds,P.f9,P.fh])
s(H.c5,[H.l_,H.ip,H.h7,H.kk,H.kl,H.km,P.je,P.jd,P.jf,P.jg,P.jS,P.jR,P.k1,P.k2,P.ke,P.jn,P.jv,P.jr,P.js,P.jt,P.jp,P.ju,P.jo,P.jy,P.jz,P.jx,P.jw,P.kc,P.jI,P.jH,P.jJ,P.he,P.hj,P.fn,P.fo,P.iV,P.iS,P.iT,P.iU,P.jU,P.jV,P.jX,P.jW,P.k4,P.k3,P.k5,P.k6,W.fD,W.fE,W.hC,W.hE,W.i3,W.ik,W.jm,P.jP,P.kf,P.fx,P.fy,P.eX,E.i_,E.i0,E.i1,E.iw,D.ft,D.fu,F.j6,F.j5,F.j1,F.j2,O.fR,O.fS,O.h1,O.h0,O.h2,O.h3,O.fX,O.fQ,O.fJ,O.fT,O.fW,O.fN,O.fO,O.fM,O.fP,O.fK,O.fL,O.fU,O.fV,O.fY,O.fZ,O.h_,O.fI,O.fH,O.hu,O.hv,O.hw,O.hx,O.hy,O.hz,T.iv,V.f5,V.kY,V.hX,V.ic,V.ib,G.ko,G.kp,G.kq,G.kB,G.kM,G.kO,G.kP,G.kQ,G.kR,G.kS,G.kT,G.kr,G.ks,G.kt,G.ku,G.kv,G.kw,G.kU,G.kV,G.kW,G.kx,G.ky,G.kz,G.kA,G.kC,G.kD,G.kE,G.kF,G.kG,G.kH,G.kI,G.kJ,G.kK,G.kL,G.kN])
s(H.ip,[H.ii,H.c3])
t(P.hi,P.aP)
t(H.I,P.hi)
t(H.hc,H.fp)
t(H.dc,H.bg)
s(H.dc,[H.cw,H.cy])
t(H.cx,H.cw)
t(H.cj,H.cx)
t(H.cz,H.cy)
t(H.dd,H.cz)
s(H.dd,[H.hH,H.hI,H.hJ,H.hK,H.hL,H.de,H.ck])
t(P.jc,P.dP)
t(P.jG,P.k0)
t(P.jD,P.jK)
t(P.ez,P.hk)
t(P.dF,P.ez)
s(P.f7,[P.eZ,P.fq])
t(P.fc,P.il)
s(P.fc,[P.f_,P.iZ,P.iY])
t(P.iX,P.fq)
s(P.ap,[P.K,P.u])
s(P.aw,[P.bJ,P.fF])
t(P.jk,P.bR)
s(W.h,[W.B,W.fv,W.cb,W.cg,W.aV,W.cA,W.aY,W.aJ,W.cC,W.j7,W.cv,P.eY,P.bx])
s(W.B,[W.a5,W.b4])
s(W.a5,[W.o,P.n])
s(W.o,[W.eS,W.eT,W.bA,W.fz,W.cc,W.i5])
t(W.fd,W.aC)
t(W.c6,W.dQ)
s(W.aq,[W.ff,W.fg])
t(W.dT,W.dS)
t(W.cU,W.dT)
t(W.dV,W.dU)
t(W.fl,W.dV)
t(W.aE,W.by)
t(W.dY,W.dX)
t(W.c8,W.dY)
t(W.e0,W.e_)
t(W.ca,W.e0)
t(W.bC,W.cb)
s(W.j,[W.bl,W.cp])
s(W.bl,[W.bG,W.aH,W.bL])
t(W.hB,W.e6)
t(W.hD,W.e7)
t(W.e9,W.e8)
t(W.hF,W.e9)
t(W.ec,W.eb)
t(W.df,W.ec)
t(W.eg,W.ef)
t(W.hR,W.eg)
t(W.i2,W.eh)
t(W.cB,W.cA)
t(W.id,W.cB)
t(W.ej,W.ei)
t(W.ie,W.ej)
t(W.ij,W.en)
t(W.es,W.er)
t(W.iq,W.es)
t(W.cD,W.cC)
t(W.ir,W.cD)
t(W.ev,W.eu)
t(W.iA,W.ev)
t(W.bn,W.aH)
t(W.eB,W.eA)
t(W.jj,W.eB)
t(W.dR,W.cV)
t(W.eD,W.eC)
t(W.jA,W.eD)
t(W.eF,W.eE)
t(W.ea,W.eF)
t(W.eH,W.eG)
t(W.jM,W.eH)
t(W.eJ,W.eI)
t(W.jQ,W.eJ)
t(W.jl,P.dt)
t(P.eq,P.jO)
t(P.an,P.jF)
t(P.e2,P.e1)
t(P.ha,P.e2)
t(P.ee,P.ed)
t(P.hN,P.ee)
t(P.ep,P.eo)
t(P.im,P.ep)
t(P.ex,P.ew)
t(P.iC,P.ex)
t(P.eW,P.dO)
t(P.hO,P.bx)
t(P.el,P.ek)
t(P.ih,P.el)
s(T.cZ,[T.aT,R.dB])
s(E.f0,[Z.cN,A.dm,T.dv])
s(D.ad,[D.bE,D.bF,D.v,O.hV,X.hT])
s(X.hT,[X.d7,X.aS,X.ch,X.dA])
s(O.b5,[D.d5,U.c9])
s(D.f3,[U.f8,U.am])
t(U.cR,U.am)
s(A.dm,[A.fG,A.hn])
s(A.dC,[A.dD,A.iH,A.iI,A.iJ,A.iF,A.a4,A.iG,A.J,A.bm,A.iL,A.cs,A.ag,A.ab,A.bN])
s(O.du,[O.d_,O.bf])
s(O.ce,[O.ho,O.hp,O.aF])
s(O.aF,[O.hs,O.ht])
t(T.is,T.dv)
t(T.it,T.is)
t(X.fB,X.io)
u(H.dE,H.iP)
u(H.cw,P.t)
u(H.cx,H.cX)
u(H.cy,P.t)
u(H.cz,H.cX)
u(P.e4,P.t)
u(P.ez,P.jT)
u(W.dQ,W.fe)
u(W.dS,P.t)
u(W.dT,W.L)
u(W.dU,P.t)
u(W.dV,W.L)
u(W.dX,P.t)
u(W.dY,W.L)
u(W.e_,P.t)
u(W.e0,W.L)
u(W.e6,P.aP)
u(W.e7,P.aP)
u(W.e8,P.t)
u(W.e9,W.L)
u(W.eb,P.t)
u(W.ec,W.L)
u(W.ef,P.t)
u(W.eg,W.L)
u(W.eh,P.aP)
u(W.cA,P.t)
u(W.cB,W.L)
u(W.ei,P.t)
u(W.ej,W.L)
u(W.en,P.aP)
u(W.er,P.t)
u(W.es,W.L)
u(W.cC,P.t)
u(W.cD,W.L)
u(W.eu,P.t)
u(W.ev,W.L)
u(W.eA,P.t)
u(W.eB,W.L)
u(W.eC,P.t)
u(W.eD,W.L)
u(W.eE,P.t)
u(W.eF,W.L)
u(W.eG,P.t)
u(W.eH,W.L)
u(W.eI,P.t)
u(W.eJ,W.L)
u(P.e1,P.t)
u(P.e2,W.L)
u(P.ed,P.t)
u(P.ee,W.L)
u(P.eo,P.t)
u(P.ep,W.L)
u(P.ew,P.t)
u(P.ex,W.L)
u(P.dO,P.aP)
u(P.ek,P.t)
u(P.el,W.L)})()
var v={mangledGlobalNames:{u:"int",K:"double",ap:"num",p:"String",bp:"bool",Y:"Null",q:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:F.at,args:[F.at]},{func:1,ret:-1,opt:[D.ad]},{func:1,ret:-1,args:[D.ad]},{func:1,ret:-1,args:[W.aH]},{func:1,ret:P.Y,args:[,,]},{func:1,ret:-1,args:[P.u,[P.k,E.aD]]},{func:1,ret:-1,args:[W.j]},{func:1,ret:-1,args:[W.bL]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.Y,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bG]},{func:1,ret:-1,args:[P.u,[P.k,D.al]]},{func:1,ret:P.K},{func:1,ret:-1,args:[P.u,[P.k,U.am]]},{func:1,ret:-1,args:[P.u,[P.k,V.aQ]]},{func:1,ret:-1,args:[,]},{func:1,ret:P.Y,args:[,P.au]},{func:1,ret:-1,args:[P.P],opt:[P.au]},{func:1,ret:P.Y,args:[,],opt:[P.au]},{func:1,ret:[P.ah,,],args:[,]},{func:1,ret:P.bM,args:[,,]},{func:1,ret:-1,args:[W.bn]},{func:1,ret:P.bp,args:[[P.k,D.al]]},{func:1,ret:F.at,args:[F.at],named:{color:V.F}}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.j=W.bA.prototype
C.I=W.bC.prototype
C.J=J.a.prototype
C.b=J.ba.prototype
C.K=J.d0.prototype
C.c=J.d1.prototype
C.i=J.d2.prototype
C.d=J.cd.prototype
C.a=J.bb.prototype
C.L=J.bc.prototype
C.v=J.hQ.prototype
C.R=P.dl.prototype
C.o=J.bO.prototype
C.w=W.bn.prototype
C.x=W.cv.prototype
C.S=new P.f_()
C.y=new P.eZ()
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.z=function() {
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
C.E=function(getTagFallback) {
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
C.A=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.B=function(hooks) {
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
C.D=function(hooks) {
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
C.C=function(hooks) {
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
C.q=function(hooks) { return hooks; }

C.F=new P.hP()
C.f=new P.iX()
C.G=new P.iZ()
C.e=new P.jG()
C.n=new P.b6(0)
C.H=new P.b6(5e6)
C.r=H.d(u([127,2047,65535,1114111]),[P.u])
C.k=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.u])
C.l=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.u])
C.m=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.u])
C.N=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.u])
C.O=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.u])
C.h=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.u])
C.t=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.u])
C.P=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.u])
C.u=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.u])
C.M=H.d(u([]),[P.p])
C.Q=new H.fb(0,{},C.M,[P.p,P.p])})();(function staticFields(){$.aB=0
$.c4=null
$.lK=null
$.mQ=null
$.mJ=null
$.mU=null
$.kg=null
$.kn=null
$.lC=null
$.bU=null
$.cF=null
$.cG=null
$.ly=!1
$.D=C.e
$.ai=[]
$.mG=null
$.lZ=null
$.m1=null
$.cm=null
$.m7=null
$.ma=null
$.mk=null
$.mo=null
$.mm=null
$.mn=null
$.ml=null
$.m0=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pH","mZ",function(){return H.mN("_$dart_dartClosure")})
u($,"pJ","lF",function(){return H.mN("_$dart_js")})
u($,"pL","n_",function(){return H.aK(H.iE({
toString:function(){return"$receiver$"}}))})
u($,"pM","n0",function(){return H.aK(H.iE({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pN","n1",function(){return H.aK(H.iE(null))})
u($,"pO","n2",function(){return H.aK(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pR","n5",function(){return H.aK(H.iE(void 0))})
u($,"pS","n6",function(){return H.aK(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pQ","n4",function(){return H.aK(H.mg(null))})
u($,"pP","n3",function(){return H.aK(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pU","n8",function(){return H.aK(H.mg(void 0))})
u($,"pT","n7",function(){return H.aK(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"q7","lG",function(){return P.ok()})
u($,"pV","n9",function(){return P.oh()})
u($,"q8","nd",function(){return H.nQ(H.bT(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.u])))})
u($,"q9","ne",function(){return P.ln("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qa","nf",function(){return P.oI()})
u($,"q1","nc",function(){return Z.av(0)})
u($,"pW","na",function(){return Z.av(511)})
u($,"q3","aA",function(){return Z.av(1)})
u($,"q2","az",function(){return Z.av(2)})
u($,"pY","ay",function(){return Z.av(4)})
u($,"q4","b3",function(){return Z.av(8)})
u($,"q5","bu",function(){return Z.av(16)})
u($,"pZ","bt",function(){return Z.av(32)})
u($,"q_","cJ",function(){return Z.av(64)})
u($,"q0","nb",function(){return Z.av(96)})
u($,"q6","c2",function(){return Z.av(128)})
u($,"pX","b2",function(){return Z.av(256)})
u($,"pG","mY",function(){return new V.fs(1e-9)})
u($,"pF","y",function(){return $.mY()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.ci,DataView:H.bg,ArrayBufferView:H.bg,Float32Array:H.cj,Float64Array:H.cj,Int16Array:H.hH,Int32Array:H.hI,Int8Array:H.hJ,Uint16Array:H.hK,Uint32Array:H.hL,Uint8ClampedArray:H.de,CanvasPixelArray:H.de,Uint8Array:H.ck,HTMLAudioElement:W.o,HTMLBRElement:W.o,HTMLBaseElement:W.o,HTMLBodyElement:W.o,HTMLButtonElement:W.o,HTMLContentElement:W.o,HTMLDListElement:W.o,HTMLDataElement:W.o,HTMLDataListElement:W.o,HTMLDetailsElement:W.o,HTMLDialogElement:W.o,HTMLDivElement:W.o,HTMLEmbedElement:W.o,HTMLFieldSetElement:W.o,HTMLHRElement:W.o,HTMLHeadElement:W.o,HTMLHeadingElement:W.o,HTMLHtmlElement:W.o,HTMLIFrameElement:W.o,HTMLInputElement:W.o,HTMLLIElement:W.o,HTMLLabelElement:W.o,HTMLLegendElement:W.o,HTMLLinkElement:W.o,HTMLMapElement:W.o,HTMLMediaElement:W.o,HTMLMenuElement:W.o,HTMLMetaElement:W.o,HTMLMeterElement:W.o,HTMLModElement:W.o,HTMLOListElement:W.o,HTMLObjectElement:W.o,HTMLOptGroupElement:W.o,HTMLOptionElement:W.o,HTMLOutputElement:W.o,HTMLParagraphElement:W.o,HTMLParamElement:W.o,HTMLPictureElement:W.o,HTMLPreElement:W.o,HTMLProgressElement:W.o,HTMLQuoteElement:W.o,HTMLScriptElement:W.o,HTMLShadowElement:W.o,HTMLSlotElement:W.o,HTMLSourceElement:W.o,HTMLSpanElement:W.o,HTMLStyleElement:W.o,HTMLTableCaptionElement:W.o,HTMLTableCellElement:W.o,HTMLTableDataCellElement:W.o,HTMLTableHeaderCellElement:W.o,HTMLTableColElement:W.o,HTMLTableElement:W.o,HTMLTableRowElement:W.o,HTMLTableSectionElement:W.o,HTMLTemplateElement:W.o,HTMLTextAreaElement:W.o,HTMLTimeElement:W.o,HTMLTitleElement:W.o,HTMLTrackElement:W.o,HTMLUListElement:W.o,HTMLUnknownElement:W.o,HTMLVideoElement:W.o,HTMLDirectoryElement:W.o,HTMLFontElement:W.o,HTMLFrameElement:W.o,HTMLFrameSetElement:W.o,HTMLMarqueeElement:W.o,HTMLElement:W.o,AccessibleNodeList:W.eQ,HTMLAnchorElement:W.eS,HTMLAreaElement:W.eT,Blob:W.by,HTMLCanvasElement:W.bA,CDATASection:W.b4,CharacterData:W.b4,Comment:W.b4,ProcessingInstruction:W.b4,Text:W.b4,CSSPerspective:W.fd,CSSCharsetRule:W.G,CSSConditionRule:W.G,CSSFontFaceRule:W.G,CSSGroupingRule:W.G,CSSImportRule:W.G,CSSKeyframeRule:W.G,MozCSSKeyframeRule:W.G,WebKitCSSKeyframeRule:W.G,CSSKeyframesRule:W.G,MozCSSKeyframesRule:W.G,WebKitCSSKeyframesRule:W.G,CSSMediaRule:W.G,CSSNamespaceRule:W.G,CSSPageRule:W.G,CSSRule:W.G,CSSStyleRule:W.G,CSSSupportsRule:W.G,CSSViewportRule:W.G,CSSStyleDeclaration:W.c6,MSStyleCSSProperties:W.c6,CSS2Properties:W.c6,CSSImageValue:W.aq,CSSKeywordValue:W.aq,CSSNumericValue:W.aq,CSSPositionValue:W.aq,CSSResourceValue:W.aq,CSSUnitValue:W.aq,CSSURLImageValue:W.aq,CSSStyleValue:W.aq,CSSMatrixComponent:W.aC,CSSRotation:W.aC,CSSScale:W.aC,CSSSkew:W.aC,CSSTranslation:W.aC,CSSTransformComponent:W.aC,CSSTransformValue:W.ff,CSSUnparsedValue:W.fg,DataTransferItemList:W.fi,DOMException:W.fk,ClientRectList:W.cU,DOMRectList:W.cU,DOMRectReadOnly:W.cV,DOMStringList:W.fl,DOMTokenList:W.fm,Element:W.a5,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,AbsoluteOrientationSensor:W.h,Accelerometer:W.h,AccessibleNode:W.h,AmbientLightSensor:W.h,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BackgroundFetchRegistration:W.h,BatteryManager:W.h,BroadcastChannel:W.h,CanvasCaptureMediaStreamTrack:W.h,DedicatedWorkerGlobalScope:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,Gyroscope:W.h,LinearAccelerationSensor:W.h,Magnetometer:W.h,MediaDevices:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MIDIAccess:W.h,MIDIInput:W.h,MIDIOutput:W.h,MIDIPort:W.h,NetworkInformation:W.h,Notification:W.h,OffscreenCanvas:W.h,OrientationSensor:W.h,PaymentRequest:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationConnection:W.h,PresentationConnectionList:W.h,PresentationRequest:W.h,RelativeOrientationSensor:W.h,RemotePlayback:W.h,RTCDataChannel:W.h,DataChannel:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,Sensor:W.h,ServiceWorker:W.h,ServiceWorkerContainer:W.h,ServiceWorkerGlobalScope:W.h,ServiceWorkerRegistration:W.h,SharedWorker:W.h,SharedWorkerGlobalScope:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,VR:W.h,VRDevice:W.h,VRDisplay:W.h,VRSession:W.h,VisualViewport:W.h,WebSocket:W.h,Worker:W.h,WorkerGlobalScope:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,Clipboard:W.h,MojoInterfaceInterceptor:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioScheduledSourceNode:W.h,AudioWorkletNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConstantSourceNode:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.aE,FileList:W.c8,FileWriter:W.fv,HTMLFormElement:W.fz,Gamepad:W.aN,History:W.fC,HTMLCollection:W.ca,HTMLFormControlsCollection:W.ca,HTMLOptionsCollection:W.ca,XMLHttpRequest:W.bC,XMLHttpRequestUpload:W.cb,XMLHttpRequestEventTarget:W.cb,ImageData:W.aO,HTMLImageElement:W.cc,KeyboardEvent:W.bG,Location:W.hg,MediaList:W.hA,MessagePort:W.cg,MIDIInputMap:W.hB,MIDIOutputMap:W.hD,MimeType:W.aR,MimeTypeArray:W.hF,PointerEvent:W.aH,MouseEvent:W.aH,DragEvent:W.aH,Document:W.B,DocumentFragment:W.B,HTMLDocument:W.B,ShadowRoot:W.B,XMLDocument:W.B,Attr:W.B,DocumentType:W.B,Node:W.B,NodeList:W.df,RadioNodeList:W.df,Plugin:W.aU,PluginArray:W.hR,ProgressEvent:W.cp,ResourceProgressEvent:W.cp,RTCStatsReport:W.i2,HTMLSelectElement:W.i5,SourceBuffer:W.aV,SourceBufferList:W.id,SpeechGrammar:W.aW,SpeechGrammarList:W.ie,SpeechRecognitionResult:W.aX,Storage:W.ij,CSSStyleSheet:W.aI,StyleSheet:W.aI,TextTrack:W.aY,TextTrackCue:W.aJ,VTTCue:W.aJ,TextTrackCueList:W.iq,TextTrackList:W.ir,TimeRanges:W.ix,Touch:W.aZ,TouchEvent:W.bL,TouchList:W.iA,TrackDefaultList:W.iB,CompositionEvent:W.bl,FocusEvent:W.bl,TextEvent:W.bl,UIEvent:W.bl,URL:W.iW,VideoTrackList:W.j7,WheelEvent:W.bn,Window:W.cv,DOMWindow:W.cv,CSSRuleList:W.jj,ClientRect:W.dR,DOMRect:W.dR,GamepadList:W.jA,NamedNodeMap:W.ea,MozNamedAttrMap:W.ea,SpeechRecognitionResultList:W.jM,StyleSheetList:W.jQ,SVGLength:P.bd,SVGLengthList:P.ha,SVGNumber:P.bh,SVGNumberList:P.hN,SVGPointList:P.hU,SVGStringList:P.im,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGScriptElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGTransform:P.bk,SVGTransformList:P.iC,AudioBuffer:P.eV,AudioParamMap:P.eW,AudioTrackList:P.eY,AudioContext:P.bx,webkitAudioContext:P.bx,BaseAudioContext:P.bx,OfflineAudioContext:P.hO,WebGL2RenderingContext:P.dl,SQLResultSetRowList:P.ih})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,ProgressEvent:true,ResourceProgressEvent:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.cj.$nativeSuperclassTag="ArrayBufferView"
H.cy.$nativeSuperclassTag="ArrayBufferView"
H.cz.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
W.cA.$nativeSuperclassTag="EventTarget"
W.cB.$nativeSuperclassTag="EventTarget"
W.cC.$nativeSuperclassTag="EventTarget"
W.cD.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(G.mS,[])
else G.mS([])})})()
//# sourceMappingURL=test.dart.js.map
