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
a[c]=function(){a[c]=function(){H.pH(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lq"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lq"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lq(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={l3:function l3(){},
ky:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
h5:function(){return new P.cR("No element")},
nH:function(){return new P.cR("Too many elements")},
e2:function(a,b,c,d,e){if(c-b<=32)H.oa(a,b,c,d,e)
else H.o9(a,b,c,d,e)},
oa:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a0()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
o9:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.a7(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.a7(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
r=p}C.a.k(a2,d,u)
C.a.k(a2,b,s)
C.a.k(a2,c,q)
if(a3<0||a3>=a2.length)return H.c(a2,a3)
C.a.k(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.c(a2,a4)
C.a.k(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.P(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.P()
if(k<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a0()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.c(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.P()
if(g<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a0()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a0()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.P()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.c(a2,a1)
C.a.k(a2,a3,a2[a1])
C.a.k(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.c(a2,a1)
C.a.k(a2,a4,a2[a1])
C.a.k(a2,a1,r)
H.e2(a2,a3,o-2,a5,a6)
H.e2(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.c(a2,o)
if(!J.P(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.c(a2,n)
if(!J.P(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.P()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)}n=j
break}}}H.e2(a2,o,n,a5,a6)}else H.e2(a2,o,n,a5,a6)},
r:function r(a){this.a=a},
fM:function fM(){},
c_:function c_(){},
cE:function cE(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hm:function hm(a,b,c){this.a=a
this.b=b
this.$ti=c},
hn:function hn(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ho:function ho(a,b,c){this.a=a
this.b=b
this.$ti=c},
d0:function d0(a,b,c){this.a=a
this.b=b
this.$ti=c},
jm:function jm(a,b,c){this.a=a
this.b=b
this.$ti=c},
bW:function bW(){},
cZ:function cZ(){},
ec:function ec(){},
nz:function(){throw H.e(P.I("Cannot modify unmodifiable Map"))},
co:function(a){var u,t=H.pI(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
po:function(a){return v.types[H.ac(a)]},
pv:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.V(a).$iL},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ar(a)
if(typeof u!=="string")throw H.e(H.be(a))
return u},
cM:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
o1:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.c(p,3)
u=H.N(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.e(P.ag(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.C(s,q)|32)>t)return}return parseInt(a,b)},
cN:function(a){return H.nT(a)+H.lm(H.bO(a),0,null)},
nT:function(a){var u,t,s,r,q,p,o,n=J.V(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ic9){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.co(t.length>1&&C.b.C(t,0)===36?C.b.a8(t,1):t)},
nU:function(){if(!!self.location)return self.location.href
return},
m2:function(a){var u,t,s,r,q=J.aB(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
o2:function(a){var u,t,s,r=H.d([],[P.l])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.be(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.aN(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.e(H.be(s))}return H.m2(r)},
m3:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.be(s))
if(s<0)throw H.e(H.be(s))
if(s>65535)return H.o2(a)}return H.m2(a)},
o3:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c1:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aN(u,10))>>>0,56320|u&1023)}}throw H.e(P.ag(a,0,1114111,null,null))},
c0:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o0:function(a){var u=H.c0(a).getFullYear()+0
return u},
nZ:function(a){var u=H.c0(a).getMonth()+1
return u},
nV:function(a){var u=H.c0(a).getDate()+0
return u},
nW:function(a){var u=H.c0(a).getHours()+0
return u},
nY:function(a){var u=H.c0(a).getMinutes()+0
return u},
o_:function(a){var u=H.c0(a).getSeconds()+0
return u},
nX:function(a){var u=H.c0(a).getMilliseconds()+0
return u},
F:function(a){throw H.e(H.be(a))},
c:function(a,b){if(a==null)J.aB(a)
throw H.e(H.ci(a,b))},
ci:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aK(!0,b,s,null)
u=H.ac(J.aB(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.X(b,a,s,null,u)
return P.dZ(b,s)},
pj:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c2(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c2(a,c,!0,b,"end",u)
return new P.aK(!0,b,"end",null)},
be:function(a){return new P.aK(!0,a,null,null)},
e:function(a){var u
if(a==null)a=new P.dV()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mZ})
u.name=""}else u.toString=H.mZ
return u},
mZ:function(){return J.ar(this.dartException)},
z:function(a){throw H.e(a)},
u:function(a){throw H.e(P.bg(a))},
ba:function(a){var u,t,s,r,q,p
a=H.mY(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iJ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iK:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
md:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lY:function(a,b){return new H.hR(a,b==null?null:b.method)},
l4:function(a,b){var u=b==null,t=u?null:b.method
return new H.h9(a,t,u?null:b.receiver)},
ai:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kS(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aN(t,16)&8191)===10)switch(s){case 438:return f.$1(H.l4(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lY(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.n2()
q=$.n3()
p=$.n4()
o=$.n5()
n=$.n8()
m=$.n9()
l=$.n7()
$.n6()
k=$.nb()
j=$.na()
i=r.ad(u)
if(i!=null)return f.$1(H.l4(H.N(u),i))
else{i=q.ad(u)
if(i!=null){i.method="call"
return f.$1(H.l4(H.N(u),i))}else{i=p.ad(u)
if(i==null){i=o.ad(u)
if(i==null){i=n.ad(u)
if(i==null){i=m.ad(u)
if(i==null){i=l.ad(u)
if(i==null){i=o.ad(u)
if(i==null){i=k.ad(u)
if(i==null){i=j.ad(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lY(H.N(u),i))}}return f.$1(new H.iW(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.e3()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aK(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.e3()
return a},
cm:function(a){var u
if(a==null)return new H.eQ(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eQ(a)},
pn:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
pu:function(a,b,c,d,e,f){H.h(a,"$ibw")
switch(H.ac(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.B("Unsupported number of arguments for wrapped closure"))},
ch:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pu)
a.$identity=u
return u},
ny:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.io().constructor.prototype):Object.create(new H.cr(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aY
if(typeof t!=="number")return t.w()
$.aY=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lK(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.nu(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lK(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
nu:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.po,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lI:H.kW
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.e("Error in functionType of tearoff")},
nv:function(a,b,c,d){var u=H.kW
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lK:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nx(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nv(t,!r,u,b)
if(t===0){r=$.aY
if(typeof r!=="number")return r.w()
$.aY=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cs
return new Function(r+H.i(q==null?$.cs=H.ft("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aY
if(typeof r!=="number")return r.w()
$.aY=r+1
o+=r
r="return function("+o+"){return this."
q=$.cs
return new Function(r+H.i(q==null?$.cs=H.ft("self"):q)+"."+H.i(u)+"("+o+");}")()},
nw:function(a,b,c,d){var u=H.kW,t=H.lI
switch(b?-1:a){case 0:throw H.e(H.o7("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nx:function(a,b){var u,t,s,r,q,p,o,n=$.cs
if(n==null)n=$.cs=H.ft("self")
u=$.lH
if(u==null)u=$.lH=H.ft("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nw(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.aY
if(typeof u!=="number")return u.w()
$.aY=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.aY
if(typeof u!=="number")return u.w()
$.aY=u+1
return new Function(n+u+"}")()},
lq:function(a,b,c,d,e,f,g){return H.ny(a,b,c,d,!!e,!!f,g)},
kW:function(a){return a.a},
lI:function(a){return a.c},
ft:function(a){var u,t,s,r=new H.cr("self","target","receiver","name"),q=J.l1(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
H:function(a){if(a==null)H.pd("boolean expression must not be null")
return a},
N:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aX(a,"String"))},
pk:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aX(a,"double"))},
mU:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aX(a,"num"))},
ln:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aX(a,"bool"))},
ac:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aX(a,"int"))},
mW:function(a,b){throw H.e(H.aX(a,H.co(H.N(b).substring(2))))},
pB:function(a,b){throw H.e(H.nt(a,H.co(H.N(b).substring(2))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.V(a)[b])return a
H.mW(a,b)},
A:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.V(a)[b]
else u=!0
if(u)return a
H.pB(a,b)},
qr:function(a){if(a==null)return a
if(!!J.V(a).$ib)return a
throw H.e(H.aX(a,"List<dynamic>"))},
mS:function(a,b){var u
if(a==null)return a
u=J.V(a)
if(!!u.$ib)return a
if(u[b])return a
H.mW(a,b)},
mN:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ac(u)]
else return a.$S()}return},
fd:function(a,b){var u
if(typeof a=="function")return!0
u=H.mN(J.V(a))
if(u==null)return!1
return H.mA(u,null,b,null)},
o:function(a,b){var u,t
if(a==null)return a
if($.lj)return a
$.lj=!0
try{if(H.fd(a,b))return a
u=H.kM(b)
t=H.aX(a,u)
throw H.e(t)}finally{$.lj=!1}},
lt:function(a,b){if(a!=null&&!H.lp(a,b))H.z(H.aX(a,H.kM(b)))
return a},
aX:function(a,b){return new H.iL("TypeError: "+P.dC(a)+": type '"+H.i(H.mG(a))+"' is not a subtype of type '"+b+"'")},
nt:function(a,b){return new H.fu("CastError: "+P.dC(a)+": type '"+H.i(H.mG(a))+"' is not a subtype of type '"+b+"'")},
mG:function(a){var u,t=J.V(a)
if(!!t.$ict){u=H.mN(t)
if(u!=null)return H.kM(u)
return"Closure"}return H.cN(a)},
pd:function(a){throw H.e(new H.jn(a))},
pH:function(a){throw H.e(new P.fE(a))},
o7:function(a){return new H.i8(a)},
mP:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bO:function(a){if(a==null)return
return a.$ti},
qq:function(a,b,c){return H.cn(a["$a"+H.i(c)],H.bO(b))},
cl:function(a,b,c,d){var u=H.cn(a["$a"+H.i(c)],H.bO(b))
return u==null?null:u[d]},
aq:function(a,b,c){var u=H.cn(a["$a"+H.i(b)],H.bO(a))
return u==null?null:u[c]},
q:function(a,b){var u=H.bO(a)
return u==null?null:u[b]},
kM:function(a){return H.bN(a,null)},
bN:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.co(a[0].name)+H.lm(a,1,b)
if(typeof a=="function")return H.co(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ac(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.i(b[t])}if('func' in a)return H.oN(a,b)
if('futureOr' in a)return"FutureOr<"+H.bN("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oN:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],[P.f])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.b.w(p,a0[m])
l=u[q]
if(l!=null&&l!==P.U)p+=" extends "+H.bN(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bN(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bN(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bN(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.pm(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.N(n[g])
i=i+h+H.bN(d[c],a0)+(" "+H.i(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lm:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.a6("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bN(p,c)}return"<"+u.i(0)+">"},
cn:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lo:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bO(a)
t=J.V(a)
if(t[b]==null)return!1
return H.mJ(H.cn(t[d],u),null,c,null)},
m:function(a,b,c,d){if(a==null)return a
if(H.lo(a,b,c,d))return a
throw H.e(H.aX(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.co(b.substring(2))+H.lm(c,0,null),v.mangledGlobalNames)))},
mJ:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aJ(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aJ(a[t],b,c[t],d))return!1
return!0},
qo:function(a,b,c){return a.apply(b,H.cn(J.V(b)["$a"+H.i(c)],H.bO(b)))},
mR:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="U"||a.name==="O"||a===-1||a===-2||H.mR(u)}return!1},
lp:function(a,b){var u,t
if(a==null)return b==null||b.name==="U"||b.name==="O"||b===-1||b===-2||H.mR(b)
if(b==null||b===-1||b.name==="U"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lp(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fd(a,b)}u=J.V(a).constructor
t=H.bO(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aJ(u,null,b,null)},
C:function(a,b){if(a!=null&&!H.lp(a,b))throw H.e(H.aX(a,H.kM(b)))
return a},
aJ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="U"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="U"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aJ(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="O")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aJ("type" in a?a.type:l,b,s,d)
else if(H.aJ(a,b,s,d))return!0
else{if(!('$i'+"cz" in t.prototype))return!1
r=t.prototype["$a"+"cz"]
q=H.cn(r,u?a.slice(1):l)
return H.aJ(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.mA(a,b,c,d)
if('func' in a)return c.name==="bw"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mJ(H.cn(m,u),b,p,d)},
mA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aJ(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aJ(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aJ(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aJ(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pz(h,b,g,d)},
pz:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aJ(c[s],d,a[s],b))return!1}return!0},
qp:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
px:function(a){var u,t,s,r,q=H.N($.mQ.$1(a)),p=$.kw[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kC[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.N($.mI.$2(a,q))
if(q!=null){p=$.kw[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kC[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kL(u)
$.kw[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kC[q]=u
return u}if(s==="-"){r=H.kL(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mV(a,u)
if(s==="*")throw H.e(P.iV(q))
if(v.leafTags[q]===true){r=H.kL(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mV(a,u)},
mV:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lv(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kL:function(a){return J.lv(a,!1,null,!!a.$iL)},
py:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kL(u)
else return J.lv(u,c,null,null)},
ps:function(){if(!0===$.lu)return
$.lu=!0
H.pt()},
pt:function(){var u,t,s,r,q,p,o,n
$.kw=Object.create(null)
$.kC=Object.create(null)
H.pr()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mX.$1(q)
if(p!=null){o=H.py(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pr:function(){var u,t,s,r,q,p,o=C.G()
o=H.cg(C.H,H.cg(C.I,H.cg(C.v,H.cg(C.v,H.cg(C.J,H.cg(C.K,H.cg(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mQ=new H.kz(r)
$.mI=new H.kA(q)
$.mX=new H.kB(p)},
cg:function(a,b){return a(b)||b},
nJ:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.e(P.a5("Illegal RegExp pattern ("+String(p)+")",a,null))},
pF:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pl:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mY:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lx:function(a,b,c){var u=H.pG(a,b,c)
return u},
pG:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mY(b),'g'),H.pl(c))},
fy:function fy(){},
fz:function fz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iJ:function iJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hR:function hR(a,b){this.a=a
this.b=b},
h9:function h9(a,b,c){this.a=a
this.b=b
this.c=c},
iW:function iW(a){this.a=a},
kS:function kS(a){this.a=a},
eQ:function eQ(a){this.a=a
this.b=null},
ct:function ct(){},
iy:function iy(){},
io:function io(){},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iL:function iL(a){this.a=a},
fu:function fu(a){this.a=a},
i8:function i8(a){this.a=a},
jn:function jn(a){this.a=a},
a0:function a0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hd:function hd(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
he:function he(a,b){this.a=a
this.$ti=b},
hf:function hf(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a},
h8:function h8(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ce:function(a){return a},
nS:function(a){return new Int8Array(a)},
bd:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.ci(b,a))},
oL:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.e(H.pj(a,b,c))
return b},
cI:function cI(){},
bC:function bC(){},
dR:function dR(){},
cJ:function cJ(){},
dS:function dS(){},
hJ:function hJ(){},
hK:function hK(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(){},
dT:function dT(){},
cK:function cK(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){},
pm:function(a){return J.lQ(a?Object.keys(a):[],null)},
pI:function(a){return v.mangledGlobalNames[a]},
pA:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lv:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kx:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lu==null){H.ps()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.iV("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lz()]
if(r!=null)return r
r=H.px(a)
if(r!=null)return r
if(typeof a=="function")return C.S
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.lz(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
nI:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.kV(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.ag(a,0,4294967295,"length",null))
return J.lQ(new Array(a),b)},
lQ:function(a,b){return J.l1(H.d(a,[b]))},
l1:function(a){a.fixed$length=Array
return a},
V:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dE.prototype
return J.h7.prototype}if(typeof a=="string")return J.by.prototype
if(a==null)return J.dF.prototype
if(typeof a=="boolean")return J.h6.prototype
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bz.prototype
return a}if(a instanceof P.U)return a
return J.kx(a)},
dh:function(a){if(typeof a=="string")return J.by.prototype
if(a==null)return a
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bz.prototype
return a}if(a instanceof P.U)return a
return J.kx(a)},
fe:function(a){if(a==null)return a
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bz.prototype
return a}if(a instanceof P.U)return a
return J.kx(a)},
mO:function(a){if(typeof a=="number")return J.cD.prototype
if(typeof a=="string")return J.by.prototype
if(a==null)return a
if(!(a instanceof P.U))return J.c9.prototype
return a},
di:function(a){if(typeof a=="string")return J.by.prototype
if(a==null)return a
if(!(a instanceof P.U))return J.c9.prototype
return a},
ck:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bz.prototype
return a}if(a instanceof P.U)return a
return J.kx(a)},
P:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.V(a).p(a,b)},
lB:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mO(a).A(a,b)},
dl:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pv(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dh(a).j(a,b)},
kT:function(a,b,c){return J.fe(a).k(a,b,c)},
nk:function(a,b){return J.di(a).C(a,b)},
nl:function(a,b,c){return J.ck(a).hl(a,b,c)},
nm:function(a,b,c,d){return J.ck(a).hO(a,b,c,d)},
nn:function(a,b){return J.di(a).T(a,b)},
kU:function(a,b){return J.mO(a).i0(a,b)},
fg:function(a,b){return J.fe(a).H(a,b)},
no:function(a,b,c,d){return J.ck(a).ic(a,b,c,d)},
lC:function(a,b){return J.fe(a).F(a,b)},
np:function(a){return J.ck(a).ghW(a)},
lD:function(a){return J.ck(a).gc0(a)},
dm:function(a){return J.V(a).gG(a)},
bp:function(a){return J.fe(a).gS(a)},
aB:function(a){return J.dh(a).gn(a)},
lE:function(a){return J.fe(a).iL(a)},
nq:function(a,b){return J.ck(a).iP(a,b)},
nr:function(a,b,c){return J.di(a).q(a,b,c)},
ns:function(a){return J.di(a).iX(a)},
ar:function(a){return J.V(a).i(a)},
a:function a(){},
h6:function h6(){},
dF:function dF(){},
dG:function dG(){},
hV:function hV(){},
c9:function c9(){},
bz:function bz(){},
b2:function b2(a){this.$ti=a},
l2:function l2(a){this.$ti=a},
as:function as(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cD:function cD(){},
dE:function dE(){},
h7:function h7(){},
by:function by(){}},P={
om:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pe()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.ch(new P.jp(s),1)).observe(u,{childList:true})
return new P.jo(s,u,t)}else if(self.setImmediate!=null)return P.pf()
return P.pg()},
on:function(a){self.scheduleImmediate(H.ch(new P.jq(H.o(a,{func:1,ret:-1})),0))},
oo:function(a){self.setImmediate(H.ch(new P.jr(H.o(a,{func:1,ret:-1})),0))},
op:function(a){P.l8(C.o,H.o(a,{func:1,ret:-1}))},
l8:function(a,b){var u=C.d.a7(a.a,1000)
return P.ov(u<0?0:u,b)},
mc:function(a,b){var u=C.d.a7(a.a,1000)
return P.ow(u<0?0:u,b)},
ov:function(a,b){var u=new P.eW()
u.eE(a,b)
return u},
ow:function(a,b){var u=new P.eW()
u.eF(a,b)
return u},
oq:function(a,b){var u,t,s
b.a=1
try{a.e3(new P.jB(b),new P.jC(b),null)}catch(s){u=H.ai(s)
t=H.cm(s)
P.pC(new P.jD(b,u,t))}},
mq:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.h(a.c,"$iaI")
if(u>=4){t=b.bP()
b.a=a.a
b.c=a.c
P.d3(b,t)}else{t=H.h(b.c,"$ibc")
b.a=2
b.c=a
a.d_(t)}},
d3:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.h(g.c,"$ial")
P.kn(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.d3(h.a,b)}g=h.a
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
if(m){H.h(q,"$ial")
P.kn(i,i,g.b,q.a,q.b)
return}l=$.a_
if(l!==n)$.a_=n
else l=i
g=b.c
if((g&15)===8)new P.jH(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.jG(u,b,q).$0()}else if((g&2)!==0)new P.jF(h,u,b).$0()
if(l!=null)$.a_=l
g=u.b
if(!!J.V(g).$icz){if(g.a>=4){k=H.h(o.c,"$ibc")
o.c=null
b=o.bh(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.mq(g,o)
return}}j=b.b
k=H.h(j.c,"$ibc")
j.c=null
b=j.bh(k)
g=u.a
p=u.b
if(!g){H.C(p,H.q(j,0))
j.a=4
j.c=p}else{H.h(p,"$ial")
j.a=8
j.c=p}h.a=j
g=j}},
p9:function(a,b){if(H.fd(a,{func:1,args:[P.U,P.au]}))return H.o(a,{func:1,ret:null,args:[P.U,P.au]})
if(H.fd(a,{func:1,args:[P.U]}))return H.o(a,{func:1,ret:null,args:[P.U]})
throw H.e(P.kV(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
p8:function(){var u,t
for(;u=$.cf,u!=null;){$.dg=null
t=u.b
$.cf=t
if(t==null)$.df=null
u.a.$0()}},
pc:function(){$.lk=!0
try{P.p8()}finally{$.dg=null
$.lk=!1
if($.cf!=null)$.lA().$1(P.mK())}},
mF:function(a){var u=new P.ei(a)
if($.cf==null){$.cf=$.df=u
if(!$.lk)$.lA().$1(P.mK())}else $.df=$.df.b=u},
pb:function(a){var u,t,s=$.cf
if(s==null){P.mF(a)
$.dg=$.df
return}u=new P.ei(a)
t=$.dg
if(t==null){u.b=s
$.cf=$.dg=u}else{u.b=t.b
$.dg=t.b=u
if(u.b==null)$.df=u}},
pC:function(a){var u=null,t=$.a_
if(C.f===t){P.kp(u,u,C.f,a)
return}P.kp(u,u,t,H.o(t.bX(a),{func:1,ret:-1}))},
mb:function(a,b){var u=$.a_
if(u===C.f)return P.l8(a,H.o(b,{func:1,ret:-1}))
return P.l8(a,H.o(u.bX(b),{func:1,ret:-1}))},
od:function(a,b){var u=$.a_
if(u===C.f)return P.mc(a,H.o(b,{func:1,ret:-1,args:[P.b8]}))
return P.mc(a,H.o(u.dg(b,P.b8),{func:1,ret:-1,args:[P.b8]}))},
kn:function(a,b,c,d,e){var u={}
u.a=d
P.pb(new P.ko(u,e))},
mB:function(a,b,c,d,e){var u,t=$.a_
if(t===c)return d.$0()
$.a_=c
u=t
try{t=d.$0()
return t}finally{$.a_=u}},
mC:function(a,b,c,d,e,f,g){var u,t=$.a_
if(t===c)return d.$1(e)
$.a_=c
u=t
try{t=d.$1(e)
return t}finally{$.a_=u}},
pa:function(a,b,c,d,e,f,g,h,i){var u,t=$.a_
if(t===c)return d.$2(e,f)
$.a_=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a_=u}},
kp:function(a,b,c,d){var u
H.o(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bX(d):c.hX(d,-1)
P.mF(d)},
jp:function jp(a){this.a=a},
jo:function jo(a,b,c){this.a=a
this.b=b
this.c=c},
jq:function jq(a){this.a=a},
jr:function jr(a){this.a=a},
eW:function eW(){this.c=0},
k5:function k5(a,b){this.a=a
this.b=b},
k4:function k4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bc:function bc(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aI:function aI(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jA:function jA(a,b){this.a=a
this.b=b},
jE:function jE(a,b){this.a=a
this.b=b},
jB:function jB(a){this.a=a},
jC:function jC(a){this.a=a},
jD:function jD(a,b,c){this.a=a
this.b=b
this.c=c},
jH:function jH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jI:function jI(a){this.a=a},
jG:function jG(a,b,c){this.a=a
this.b=b
this.c=c},
jF:function jF(a,b,c){this.a=a
this.b=b
this.c=c},
ei:function ei(a){this.a=a
this.b=null},
ir:function ir(){},
it:function it(a,b){this.a=a
this.b=b},
iu:function iu(a,b){this.a=a
this.b=b},
cS:function cS(){},
is:function is(){},
b8:function b8(){},
al:function al(a,b){this.a=a
this.b=b},
ke:function ke(){},
ko:function ko(a,b){this.a=a
this.b=b},
jO:function jO(){},
jQ:function jQ(a,b,c){this.a=a
this.b=b
this.c=c},
jP:function jP(a,b){this.a=a
this.b=b},
jR:function jR(a,b,c){this.a=a
this.b=b
this.c=c},
nL:function(a,b){return new H.a0([a,b])},
l5:function(a,b){return new H.a0([a,b])},
nN:function(a){return H.pn(a,new H.a0([null,null]))},
dJ:function(a){return new P.jM([a])},
le:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ou:function(a,b,c){var u=new P.ex(a,b,[c])
u.c=a.e
return u},
nG:function(a,b,c){var u,t
if(P.ll(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.f])
C.a.h($.aw,a)
try{P.oO(a,u)}finally{if(0>=$.aw.length)return H.c($.aw,-1)
$.aw.pop()}t=P.m9(b,H.mS(u,"$ik"),", ")+c
return t.charCodeAt(0)==0?t:t},
l0:function(a,b,c){var u,t
if(P.ll(a))return b+"..."+c
u=new P.a6(b)
C.a.h($.aw,a)
try{t=u
t.a=P.m9(t.a,a,", ")}finally{if(0>=$.aw.length)return H.c($.aw,-1)
$.aw.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ll:function(a){var u,t
for(u=$.aw.length,t=0;t<u;++t)if(a===$.aw[t])return!0
return!1},
oO:function(a,b){var u,t,s,r,q,p,o,n=a.gS(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.v())return
u=H.i(n.gI(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.v()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gI(n);++l
if(!n.v()){if(l<=4){C.a.h(b,H.i(r))
return}t=H.i(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gI(n);++l
for(;n.v();r=q,q=p){p=n.gI(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2;--l}C.a.h(b,"...")
return}}s=H.i(r)
t=H.i(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.h(b,o)
C.a.h(b,s)
C.a.h(b,t)},
nM:function(a,b,c){var u=P.nL(b,c)
a.F(0,new P.hg(u,b,c))
return u},
lR:function(a,b){var u,t,s=P.dJ(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t)s.h(0,H.C(a[t],b))
return s},
l6:function(a){var u,t={}
if(P.ll(a))return"{...}"
u=new P.a6("")
try{C.a.h($.aw,a)
u.a+="{"
t.a=!0
J.lC(a,new P.hk(t,u))
u.a+="}"}finally{if(0>=$.aw.length)return H.c($.aw,-1)
$.aw.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jM:function jM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cb:function cb(a){this.a=a
this.c=this.b=null},
ex:function ex(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
hh:function hh(){},
x:function x(){},
hj:function hj(){},
hk:function hk(a,b){this.a=a
this.b=b},
ae:function ae(){},
k6:function k6(){},
hl:function hl(){},
ed:function ed(a,b){this.a=a
this.$ti=b},
jT:function jT(){},
ey:function ey(){},
f0:function f0(){},
og:function(a,b,c,d){if(b instanceof Uint8Array)return P.oh(!1,b,c,d)
return},
oh:function(a,b,c,d){var u,t,s=$.nc()
if(s==null)return
u=0===c
if(u&&!0)return P.lb(s,b)
t=b.length
d=P.bH(c,d,t)
if(u&&d===t)return P.lb(s,b)
return P.lb(s,b.subarray(c,d))},
lb:function(a,b){if(P.oj(b))return
return P.ok(a,b)},
ok:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ai(t)}return},
oj:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
oi:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ai(t)}return},
mE:function(a,b,c){var u,t,s
for(u=J.dh(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.ag()
if((s&127)!==s)return t-b}return c-b},
lG:function(a,b,c,d,e,f){if(C.d.bb(f,4)!==0)throw H.e(P.a5("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.e(P.a5("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.e(P.a5("Invalid base64 padding, more than two '=' characters",a,b))},
fq:function fq(){},
fr:function fr(){},
bU:function bU(){},
bt:function bt(){},
fO:function fO(){},
h3:function h3(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
h2:function h2(a){this.a=a},
j3:function j3(){},
j5:function j5(){},
kc:function kc(a){this.b=0
this.c=a},
j4:function j4(a){this.a=a},
kb:function kb(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
ff:function(a,b,c){var u=H.o1(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.e(P.a5(a,null,null))},
nD:function(a){if(a instanceof H.ct)return a.i(0)
return"Instance of '"+H.i(H.cN(a))+"'"},
nO:function(a,b,c){var u,t=J.nI(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.k(t,u,b)
return H.m(t,"$ib",[c],"$ab")},
lS:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bp(a);u.v();)C.a.h(s,H.C(u.gI(u),c))
if(b)return s
return H.m(J.l1(s),"$ib",t,"$ab")},
cT:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.m(a,"$ib2",[P.l],"$ab2")
u=a.length
c=P.bH(b,c,u)
return H.m3(b>0||c<u?C.a.eg(a,b,c):a)}if(!!J.V(a).$icK)return H.o3(a,b,P.bH(b,c,a.length))
return P.ob(a,b,c)},
ob:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.e(P.ag(b,0,J.aB(a),q,q))
u=c==null
if(!u&&c<b)throw H.e(P.ag(c,b,J.aB(a),q,q))
t=J.bp(a)
for(s=0;s<b;++s)if(!t.v())throw H.e(P.ag(b,0,s,q,q))
r=[]
if(u)for(;t.v();)r.push(t.gI(t))
else for(s=b;s<c;++s){if(!t.v())throw H.e(P.ag(c,b,s,q,q))
r.push(t.gI(t))}return H.m3(r)},
o5:function(a){return new H.h8(a,H.nJ(a,!1,!0,!1,!1,!1))},
m9:function(a,b,c){var u=J.bp(b)
if(!u.v())return a
if(c.length===0){do a+=H.i(u.gI(u))
while(u.v())}else{a+=H.i(u.gI(u))
for(;u.v();)a=a+c+H.i(u.gI(u))}return a},
mf:function(){var u=H.nU()
if(u!=null)return P.of(u)
throw H.e(P.I("'Uri.base' is not supported"))},
f1:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.ni().b
if(typeof b!=="string")H.z(H.be(b))
u=u.test(b)}else u=!1
if(u)return b
H.C(b,H.aq(c,"bU",0))
t=c.gib().c1(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c1(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nA:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nB:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dx:function(a){if(a>=10)return""+a
return"0"+a},
lM:function(a){return new P.bu(1000*a)},
dC:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ar(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nD(a)},
fj:function(a){return new P.aK(!1,null,null,a)},
kV:function(a,b,c){return new P.aK(!0,a,b,c)},
dZ:function(a,b){return new P.c2(null,null,!0,a,b,"Value not in range")},
ag:function(a,b,c,d,e){return new P.c2(b,c,!0,a,d,"Invalid value")},
bH:function(a,b,c){if(0>a||a>c)throw H.e(P.ag(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.e(P.ag(b,a,c,"end",null))
return b}return c},
m4:function(a,b){if(typeof a!=="number")return a.P()
if(a<0)throw H.e(P.ag(a,0,null,b,null))},
X:function(a,b,c,d,e){var u=H.ac(e==null?J.aB(b):e)
return new P.h4(u,!0,a,c,"Index out of range")},
I:function(a){return new P.iX(a)},
iV:function(a){return new P.iU(a)},
m8:function(a){return new P.cR(a)},
bg:function(a){return new P.fx(a)},
B:function(a){return new P.eq(a)},
a5:function(a,b,c){return new P.fY(a,b,c)},
nP:function(a,b,c){var u,t=H.d([],[c])
C.a.sn(t,a)
for(u=0;u<a;++u)C.a.k(t,u,b.$1(u))
return t},
lw:function(a){H.pA(a)},
of:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.C(a,4)^58)*3|C.b.C(a,0)^100|C.b.C(a,1)^97|C.b.C(a,2)^116|C.b.C(a,3)^97)>>>0
if(u===0)return P.me(e<e?C.b.q(a,0,e):a,5,f).ge9()
else if(u===32)return P.me(C.b.q(a,5,e),0,f).ge9()}t=new Array(8)
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
if(P.mD(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.j_()
if(r>=0)if(P.mD(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.w()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.P()
if(typeof n!=="number")return H.F(n)
if(m<n)n=m
if(typeof o!=="number")return o.P()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.P()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.P()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.a5(a,"..",o)))j=n>o+2&&C.b.a5(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.a5(a,"file",0)){if(q<=0){if(!C.b.a5(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.q(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aS(a,o,n,"/");++e
n=h}k="file"}else if(C.b.a5(a,"http",0)){if(t&&p+3===o&&C.b.a5(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aS(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.a5(a,"https",0)){if(t&&p+4===o&&C.b.a5(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aS(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.q(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jW(a,r,q,p,o,n,m,k)}return P.ox(a,0,e,r,q,p,o,n,m,k)},
mh:function(a){var u=P.f
return C.a.ii(H.d(a.split("&"),[u]),P.l5(u,u),new P.j1(C.h),[P.y,P.f,P.f])},
oe:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iZ(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.T(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.ff(C.b.q(a,s,t),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.c(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.ff(C.b.q(a,s,c),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
if(r>=u)return H.c(j,r)
j[r]=p
return j},
mg:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.j_(a),d=new P.j0(e,a)
if(a.length<2)e.$1("address is too short")
u=H.d([],[P.l])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.b.T(a,t)
if(p===58){if(t===b){++t
if(C.b.T(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
C.a.h(u,-1)
r=!0}else C.a.h(u,d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.a.gau(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)C.a.h(u,d.$2(s,c))
else{m=P.oe(a,s,c)
C.a.h(u,(m[0]<<8|m[1])>>>0)
C.a.h(u,(m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.c(l,i)
l[i]=0
f=i+1
if(f>=k)return H.c(l,f)
l[f]=0
i+=2}else{f=C.d.aN(h,8)
if(i<0||i>=k)return H.c(l,i)
l[i]=f
f=i+1
if(f>=k)return H.c(l,f)
l[f]=h&255
i+=2}}return l},
ox:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oF(a,b,d)
else{if(d===b)P.cd(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oG(a,u,e-1):""
s=P.oC(a,e,f,!1)
if(typeof f!=="number")return f.w()
r=f+1
if(typeof g!=="number")return H.F(g)
q=r<g?P.oE(P.ff(C.b.q(a,r,g),new P.k7(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oD(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.P()
o=h<i?P.lg(a,h+1,i,n):n
return new P.cc(j,t,s,q,p,o,i<c?P.oB(a,i+1,c):n)},
mu:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cd:function(a,b,c){throw H.e(P.a5(c,a,b))},
oE:function(a,b){if(a!=null&&a===P.mu(b))return
return a},
oC:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.b.T(a,b)===91){if(typeof c!=="number")return c.O()
u=c-1
if(C.b.T(a,u)!==93)P.cd(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.oz(a,t,u)
if(typeof s!=="number")return s.P()
if(s<u){r=s+1
q=P.mz(a,C.b.a5(a,"25",r)?s+3:r,u,"%25")}else q=""
P.mg(a,t,s)
return C.b.q(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.F(c)
p=b
for(;p<c;++p)if(C.b.T(a,p)===58){s=C.b.bn(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.mz(a,C.b.a5(a,"25",r)?s+3:r,c,"%25")}else q=""
P.mg(a,b,s)
return"["+C.b.q(a,b,s)+q+"]"}return P.oI(a,b,c)},
oz:function(a,b,c){var u,t=C.b.bn(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.F(c)
u=t<c}else u=!1
return u?t:c},
mz:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.a6(d):null
if(typeof c!=="number")return H.F(c)
u=b
t=u
s=!0
for(;u<c;){r=C.b.T(a,u)
if(r===37){q=P.lh(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.a6("")
o=l.a+=C.b.q(a,t,u)
if(p)q=C.b.q(a,u,u+3)
else if(q==="%")P.cd(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.c(C.i,p)
p=(C.i[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.a6("")
if(t<u){l.a+=C.b.q(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.b.T(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.a6("")
l.a+=C.b.q(a,t,u)
l.a+=P.lf(r)
u+=m
t=u}}}if(l==null)return C.b.q(a,b,c)
if(t<c)l.a+=C.b.q(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
oI:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.F(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.T(a,u)
if(q===37){p=P.lh(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.a6("")
n=C.b.q(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.q(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.c(C.z,o)
o=(C.z[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.a6("")
if(t<u){s.a+=C.b.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.c(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.cd(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.T(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.a6("")
n=C.b.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.lf(q)
u+=l
t=u}}}}if(s==null)return C.b.q(a,b,c)
if(t<c){n=C.b.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oF:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mw(C.b.C(a,b)))P.cd(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.C(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.c(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cd(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.q(a,b,c)
return P.oy(t?a.toLowerCase():a)},
oy:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oG:function(a,b,c){return P.dd(a,b,c,C.V,!1)},
oD:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dd(a,b,c,C.A,!0):C.j.jk(d,new P.k8(),P.f).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a3(u,"/"))u="/"+u
return P.oH(u,e,f)},
oH:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a3(a,"/"))return P.oJ(a,!u||c)
return P.oK(a)},
lg:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.e(P.fj("Both query and queryParameters specified"))
return P.dd(a,b,c,C.l,!0)}if(d==null)return
u=new P.a6("")
t.a=""
d.F(0,new P.k9(new P.ka(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oB:function(a,b,c){return P.dd(a,b,c,C.l,!0)},
lh:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.T(a,b+1)
t=C.b.T(a,p)
s=H.ky(u)
r=H.ky(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aN(q,4)
if(p>=8)return H.c(C.i,p)
p=(C.i[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c1(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.q(a,b,b+3).toUpperCase()
return},
lf:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.l])
C.a.k(t,0,37)
C.a.k(t,1,C.b.C(o,a>>>4))
C.a.k(t,2,C.b.C(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.l])
for(q=0;--r,r>=0;s=128){p=C.d.hy(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.C(o,p>>>4))
C.a.k(t,q+2,C.b.C(o,p&15))
q+=3}}return P.cT(t,0,null)},
dd:function(a,b,c,d,e){var u=P.my(a,b,c,d,e)
return u==null?C.b.q(a,b,c):u},
my:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.P()
if(typeof c!=="number")return H.F(c)
if(!(o<c))break
c$0:{u=C.b.T(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.c(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.lh(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.c(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.cd(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.b.T(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.lf(u)}}if(m==null)m=new P.a6("")
m.a+=C.b.q(a,n,o)
m.a+=H.i(s)
if(typeof r!=="number")return H.F(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.P()
if(n<c)m.a+=C.b.q(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
mx:function(a){if(C.b.a3(a,"."))return!0
return C.b.dE(a,"/.")!==-1},
oK:function(a){var u,t,s,r,q,p,o
if(!P.mx(a))return a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.P(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.c(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oJ:function(a,b){var u,t,s,r,q,p
if(!P.mx(a))return!b?P.mv(a):a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gau(u)!==".."){if(0>=u.length)return H.c(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.c(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gau(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.c(u,0)
C.a.k(u,0,P.mv(u[0]))}return C.a.m(u,"/")},
mv:function(a){var u,t,s,r=a.length
if(r>=2&&P.mw(J.nk(a,0)))for(u=1;u<r;++u){t=C.b.C(a,u)
if(t===58)return C.b.q(a,0,u)+"%3A"+C.b.a8(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.c(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oA:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.C(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.e(P.fj("Invalid URL encoding"))}}return u},
li:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.C(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.q(a,b,c)
else r=new H.r(C.b.q(a,b,c))}else{r=H.d([],[P.l])
for(s=a.length,q=b;q<c;++q){t=C.b.C(a,q)
if(t>127)throw H.e(P.fj("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.e(P.fj("Truncated URI"))
C.a.h(r,P.oA(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.m(r,"$ib",[P.l],"$ab")
return new P.j4(!1).c1(r)},
mw:function(a){var u=a|32
return 97<=u&&u<=122},
me:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.l])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.C(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.e(P.a5(m,a,t))}}if(s<0&&t>b)throw H.e(P.a5(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.C(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gau(l)
if(r!==44||t!==p+7||!C.b.a5(a,"base64",p+1))throw H.e(P.a5("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.iu(0,a,o,u)
else{n=P.my(a,o,u,C.l,!0)
if(n!=null)a=C.b.aS(a,o,u,n)}return new P.iY(a,l,c)},
oM:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nP(22,new P.ki(),P.Q),n=new P.kh(o),m=new P.kj(),l=new P.kk(),k=H.h(n.$2(0,225),"$iQ")
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
mD:function(a,b,c,d,e){var u,t,s,r,q=$.nj()
for(u=b;u<c;++u){if(d<0||d>=q.length)return H.c(q,d)
t=q[d]
s=C.b.C(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.c(t,s)
r=t[s]
d=r&31
C.a.k(e,r>>>5,u)}return d},
R:function R(){},
ax:function ax(a,b){this.a=a
this.b=b},
t:function t(){},
bu:function bu(a){this.a=a},
fK:function fK(){},
fL:function fL(){},
bv:function bv(){},
fk:function fk(){},
dV:function dV(){},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c2:function c2(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h4:function h4(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iX:function iX(a){this.a=a},
iU:function iU(a){this.a=a},
cR:function cR(a){this.a=a},
fx:function fx(a){this.a=a},
hU:function hU(){},
e3:function e3(){},
fE:function fE(a){this.a=a},
eq:function eq(a){this.a=a},
fY:function fY(a,b,c){this.a=a
this.b=b
this.c=c},
bw:function bw(){},
l:function l(){},
k:function k(){},
b1:function b1(){},
b:function b(){},
y:function y(){},
O:function O(){},
a9:function a9(){},
U:function U(){},
au:function au(){},
f:function f(){},
a6:function a6(a){this.a=a},
j1:function j1(a){this.a=a},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
j0:function j0(a,b){this.a=a
this.b=b},
cc:function cc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
k7:function k7(a,b){this.a=a
this.b=b},
k8:function k8(){},
ka:function ka(a,b){this.a=a
this.b=b},
k9:function k9(a){this.a=a},
iY:function iY(a,b,c){this.a=a
this.b=b
this.c=c},
ki:function ki(){},
kh:function kh(a){this.a=a},
kj:function kj(){},
kk:function kk(){},
jW:function jW(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jv:function jv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
bk:function(a){var u,t,s,r,q
if(a==null)return
u=P.l5(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r){q=H.N(t[r])
u.k(0,q,a[q])}return u},
ph:function(a){var u={}
a.F(0,new P.kq(u))
return u},
jY:function jY(){},
k_:function k_(a,b){this.a=a
this.b=b},
kq:function kq(a){this.a=a},
jZ:function jZ(a,b){this.a=a
this.b=b},
fU:function fU(a,b){this.a=a
this.b=b},
fV:function fV(){},
fW:function fW(){},
jL:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ot:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jN:function jN(){},
ak:function ak(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b4:function b4(){},
hb:function hb(){},
b6:function b6(){},
hS:function hS(){},
hZ:function hZ(){},
cO:function cO(){},
iv:function iv(){},
p:function p(){},
b9:function b9(){},
iI:function iI(){},
ev:function ev(){},
ew:function ew(){},
eG:function eG(){},
eH:function eH(){},
eS:function eS(){},
eT:function eT(){},
eZ:function eZ(){},
f_:function f_(){},
Q:function Q(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(a){this.a=a},
fp:function fp(){},
bR:function bR(){},
hT:function hT(){},
ej:function ej(){},
dq:function dq(){},
dY:function dY(){},
c3:function c3(){},
e0:function e0(){},
eb:function eb(){},
im:function im(){},
eO:function eO(){},
eP:function eP(){}},W={
lF:function(){var u=document.createElement("a")
return u},
lJ:function(){var u=document.createElement("canvas")
return u},
nC:function(a,b,c){var u=document.body,t=(u&&C.t).ac(u,a,b,c)
t.toString
u=W.E
u=new H.d0(new W.ap(t),H.o(new W.fN(),{func:1,ret:P.R,args:[u]}),[u])
return H.h(u.gaH(u),"$iT")},
lP:function(a){H.h(a,"$ij")
return"wheel"},
cw:function(a){var u,t,s,r="element tag unavailable"
try{u=J.ck(a)
t=u.ge1(a)
if(typeof t==="string")r=u.ge1(a)}catch(s){H.ai(s)}return r},
nF:function(a){var u,t=document.createElement("input"),s=H.h(t,"$icC")
try{s.type=a}catch(u){H.ai(u)}return s},
jK:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ms:function(a,b,c,d){var u=W.jK(W.jK(W.jK(W.jK(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ab:function(a,b,c,d,e){var u=W.mH(new W.jz(c),W.n)
if(u!=null&&!0)J.nm(a,b,u,!1)
return new W.jy(a,b,u,!1,[e])},
mr:function(a){var u=W.lF(),t=window.location
u=new W.bM(new W.jS(u,t))
u.eu(a)
return u},
or:function(a,b,c,d){H.h(a,"$iT")
H.N(b)
H.N(c)
H.h(d,"$ibM")
return!0},
os:function(a,b,c,d){var u,t,s
H.h(a,"$iT")
H.N(b)
H.N(c)
u=H.h(d,"$ibM").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mt:function(){var u=P.f,t=P.lR(C.p,u),s=H.q(C.p,0),r=H.o(new W.k3(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.k2(t,P.dJ(u),P.dJ(u),P.dJ(u),null)
t.eB(null,new H.ho(C.p,r,[s,u]),q,null)
return t},
mH:function(a,b){var u=$.a_
if(u===C.f)return a
return u.dg(a,b)},
v:function v(){},
fh:function fh(){},
dn:function dn(){},
fi:function fi(){},
cq:function cq(){},
bS:function bS(){},
bq:function bq(){},
bT:function bT(){},
br:function br(){},
cu:function cu(){},
fA:function fA(){},
W:function W(){},
cv:function cv(){},
fB:function fB(){},
b_:function b_(){},
b0:function b0(){},
fC:function fC(){},
fD:function fD(){},
fG:function fG(){},
aC:function aC(){},
fH:function fH(){},
dz:function dz(){},
dA:function dA(){},
fI:function fI(){},
fJ:function fJ(){},
jt:function jt(a,b){this.a=a
this.b=b},
T:function T(){},
fN:function fN(){},
n:function n(){},
j:function j(){},
aD:function aD(){},
cy:function cy(){},
fT:function fT(){},
fX:function fX(){},
aM:function aM(){},
h1:function h1(){},
bX:function bX(){},
cB:function cB(){},
cC:function cC(){},
b3:function b3(){},
dK:function dK(){},
hC:function hC(){},
cG:function cG(){},
hD:function hD(){},
hE:function hE(a){this.a=a},
hF:function hF(){},
hG:function hG(a){this.a=a},
aN:function aN(){},
hH:function hH(){},
af:function af(){},
ap:function ap(a){this.a=a},
E:function E(){},
cL:function cL(){},
aO:function aO(){},
hX:function hX(){},
i6:function i6(){},
i7:function i7(a){this.a=a},
i9:function i9(){},
aQ:function aQ(){},
ik:function ik(){},
aR:function aR(){},
il:function il(){},
aS:function aS(){},
ip:function ip(){},
iq:function iq(a){this.a=a},
aE:function aE(){},
b7:function b7(){},
e4:function e4(){},
iw:function iw(){},
ix:function ix(){},
cU:function cU(){},
aU:function aU(){},
aF:function aF(){},
iz:function iz(){},
iA:function iA(){},
iC:function iC(){},
aV:function aV(){},
aW:function aW(){},
iG:function iG(){},
iH:function iH(){},
bK:function bK(){},
j2:function j2(){},
jk:function jk(){},
bb:function bb(){},
d1:function d1(){},
d2:function d2(){},
ju:function ju(){},
el:function el(){},
jJ:function jJ(){},
eD:function eD(){},
jX:function jX(){},
k0:function k0(){},
js:function js(){},
jw:function jw(a){this.a=a},
jx:function jx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ld:function ld(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jy:function jy(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jz:function jz(a){this.a=a},
bM:function bM(a){this.a=a},
G:function G(){},
dU:function dU(a){this.a=a},
hP:function hP(a){this.a=a},
hO:function hO(a,b,c){this.a=a
this.b=b
this.c=c},
eL:function eL(){},
jU:function jU(){},
jV:function jV(){},
k2:function k2(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
k3:function k3(){},
k1:function k1(){},
dD:function dD(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
az:function az(){},
jS:function jS(a,b){this.a=a
this.b=b},
f2:function f2(a){this.a=a},
kd:function kd(a){this.a=a},
ek:function ek(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eE:function eE(){},
eF:function eF(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
d9:function d9(){},
da:function da(){},
eM:function eM(){},
eN:function eN(){},
eR:function eR(){},
eU:function eU(){},
eV:function eV(){},
db:function db(){},
dc:function dc(){},
eX:function eX(){},
eY:function eY(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){}},O={
kX:function(a){var u=new O.a2([a])
u.bA(a)
return u},
a2:function a2(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cF:function cF(){this.b=this.a=null},
lT:function(){var u,t,s=new O.dN()
s.seN(O.kX(V.ao))
s.e.bc(s.gfn(),s.gfp())
u=new O.b5(s,"emission")
u.c=new A.am(!1,!1,!1)
u.f=new V.a3(0,0,0)
s.f=u
u=new O.b5(s,"ambient")
u.c=new A.am(!1,!1,!1)
u.f=new V.a3(0,0,0)
s.r=u
u=new O.b5(s,"diffuse")
u.c=new A.am(!1,!1,!1)
u.f=new V.a3(0,0,0)
s.x=u
u=new O.b5(s,"invDiffuse")
u.c=new A.am(!1,!1,!1)
u.f=new V.a3(0,0,0)
s.y=u
u=new O.hv(s,"specular")
u.c=new A.am(!1,!1,!1)
u.f=new V.a3(0,0,0)
u.ch=100
s.z=u
u=new O.hr(s,"bump")
u.c=new A.am(!1,!1,!1)
s.Q=u
s.ch=null
u=new O.b5(s,"reflect")
u.c=new A.am(!1,!1,!1)
u.f=new V.a3(0,0,0)
s.cx=u
u=new O.hu(s,"refract")
u.c=new A.am(!1,!1,!1)
u.f=new V.a3(0,0,0)
u.ch=1
s.cy=u
u=new O.hq(s,"alpha")
u.c=new A.am(!1,!1,!1)
u.f=1
s.db=u
u=new D.dI()
u.bA(D.ad)
u.sew(H.d([],[D.dy]))
u.shc(H.d([],[D.dX]))
u.sex(H.d([],[D.bI]))
u.y=u.x=null
u.cp(u.gfl(),u.gh0(),u.gh4())
s.dx=u
t=new O.ht()
t.b=new V.aZ(0,0,0,0)
t.c=1
t.d=10
t.e=!1
s.dy=t
t=u.x
u=t==null?u.x=D.a4():t
u.h(0,s.ghn())
u=s.dx
t=u.y
u=t==null?u.y=D.a4():t
u.h(0,s.geC())
s.fr=null
return s},
dN:function dN(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hw:function hw(a,b){this.a=a
this.b=b},
hx:function hx(){},
hy:function hy(a,b){this.a=a
this.b=b},
hz:function hz(){},
hA:function hA(a,b){this.a=a
this.b=b},
hB:function hB(){},
hq:function hq(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dO:function dO(){},
hr:function hr(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b5:function b5(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ht:function ht(){var _=this
_.e=_.d=_.c=_.b=null},
hu:function hu(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hv:function hv(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bJ:function bJ(){}},E={
kZ:function(){var u=new E.an()
u.a=""
u.b=!0
u.ses(0,O.kX(E.an))
u.y.bc(u.giv(),u.giy())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.saa(0,null)
u.sb9(null)
u.saQ(null)
return u},
o6:function(a,b){var u=new E.i2(a)
u.eo(a,b)
return u},
oc:function(a,b,c,d,e){var u,t,s=J.V(a)
if(!!s.$ibT)return E.ma(a,!0,!0,!0,!1)
u=W.lJ()
t=u.style
t.width="100%"
t.height="100%"
s.gc0(a).h(0,u)
return E.ma(u,!0,!0,!0,!1)},
ma:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.e7(),j=H.h(C.n.ed(a,"webgl2",P.nN(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic3")
if(j==null)H.z(P.B("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.o6(j,a)
H.ac(j.getParameter(3379))
H.ac(j.getParameter(34076))
u=new X.ee(a)
t=new X.ha()
t.shf(P.dJ(P.l))
u.b=t
t=new X.hI(u)
t.f=0
t.r=V.bE()
t.x=V.bE()
t.ch=t.Q=1
u.c=t
t=new X.hi(u)
t.r=0
t.x=V.bE()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iF(u)
t.f=V.bE()
t.r=V.bE()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seZ(H.d([],[[P.cS,P.U]]))
t=u.z
s=document
r=W.af
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ab(s,"contextmenu",H.o(u.gfC(),q),!1,r))
t=u.z
p=W.n
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ab(a,"focus",H.o(u.gfI(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ab(a,"blur",H.o(u.gfs(),o),!1,p))
t=u.z
n=W.b3
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ab(s,"keyup",H.o(u.gfM(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ab(s,"keydown",H.o(u.gfK(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ab(a,"mousedown",H.o(u.gfQ(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,"mouseup",H.o(u.gfU(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,l,H.o(u.gfS(),q),!1,r))
n=u.z
W.lP(a)
m=W.bb;(n&&C.a).h(n,W.ab(a,H.N(W.lP(a)),H.o(u.gfW(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ab(s,l,H.o(u.gfE(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ab(s,"mouseup",H.o(u.gfG(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ab(s,"pointerlockchange",H.o(u.gfY(),o),!1,p))
p=u.z
o=W.aW
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ab(a,"touchstart",H.o(u.gha(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchend",H.o(u.gh6(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchmove",H.o(u.gh8(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ax(Date.now(),!1)
k.cy=0
k.d1()
return k},
fs:function fs(){},
an:function an(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i2:function i2(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i3:function i3(a){this.a=a},
i4:function i4(a){this.a=a},
i5:function i5(a){this.a=a},
e7:function e7(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=null},
iB:function iB(a){this.a=a}},Z={
lc:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ce(c)),35044)
a.bindBuffer(b,null)
return new Z.eh(b,u)},
aH:function(a){return new Z.bL(a)},
eh:function eh(a,b){this.a=a
this.b=b},
dr:function dr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jl:function jl(a){this.a=a},
ds:function ds(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bx:function bx(a,b,c){this.a=a
this.b=b
this.c=c},
bL:function bL(a){this.a=a}},D={
a4:function(){var u=new D.bV()
u.sah(null)
u.saL(null)
u.c=null
u.d=0
return u},
fv:function fv(){},
bV:function bV(){var _=this
_.d=_.c=_.b=_.a=null},
fQ:function fQ(a){this.a=a},
fR:function fR(a){this.a=a},
D:function D(){this.b=null},
bY:function bY(a){this.b=null
this.$ti=a},
bZ:function bZ(a){this.b=null
this.$ti=a},
M:function M(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
dy:function dy(){},
ad:function ad(){},
dI:function dI(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dX:function dX(){},
bI:function bI(){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},X={dt:function dt(a,b){this.a=a
this.b=b},dH:function dH(a,b){this.a=a
this.b=b},ha:function ha(){this.d=this.b=this.a=null},dL:function dL(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hi:function hi(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bA:function bA(a,b,c){this.a=a
this.b=b
this.c=c},bB:function bB(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hI:function hI(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hY:function hY(){},e9:function e9(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iF:function iF(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ee:function ee(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nE:function(a){var u=new X.fZ(),t=new V.aZ(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.m6
if(t==null){t=V.m5(0,0,1,1)
$.m6=t}u.r=t
return u},
du:function du(){},
fZ:function fZ(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dW:function dW(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
e5:function e5(){}},V={
pJ:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bb(a-b,u)
return(a<0?a+u:a)+b},
S:function(a,b,c){if(a==null)return C.b.ae("null",c)
return C.b.ae(C.e.e4(Math.abs(a-0)<$.K().a?0:a,b),c+b+1)},
cj:function(a,b,c){var u,t,s,r,q,p=H.d([],[P.f])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.u)(a),++s){r=V.S(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.c(p,q)
C.a.k(p,q,C.b.ae(p[q],t))}return p},
dQ:function(){var u=$.lX
return u==null?$.lX=V.bj(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bj:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lW:function(a,b,c){return V.bj(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lV:function(a,b,c,d){return V.bj(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lU:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bj(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
bE:function(){var u=$.m0
return u==null?$.m0=new V.aa(0,0):u},
m1:function(){var u=$.bF
return u==null?$.bF=new V.a1(0,0,0):u},
m5:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e_(a,b,c,d)},
d_:function(){var u=$.mm
return u==null?$.mm=new V.J(0,0,0):u},
ol:function(){var u=$.j6
return u==null?$.j6=new V.J(-1,0,0):u},
mn:function(){var u=$.j7
return u==null?$.j7=new V.J(0,1,0):u},
mo:function(){var u=$.j8
return u==null?$.j8=new V.J(0,0,1):u},
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
aZ:function aZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fP:function fP(a){this.a=a},
dP:function dP(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ao:function ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aa:function aa(a,b){this.a=a
this.b=b},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
bG:function bG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e_:function e_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a7:function a7(a,b){this.a=a
this.b=b},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
ca:function ca(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Y:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.e(P.B("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.C(a,0)
t=C.b.C(b,0)
s=new V.i1()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
w:function(a){var u=new V.ia()
u.ep(a)
return u},
iE:function(){var u=new V.iD(),t=P.f
u.shB(new H.a0([t,V.cQ]))
u.shD(new H.a0([t,V.cV]))
u.c=null
return u},
bf:function bf(){},
ay:function ay(){},
dM:function dM(){},
at:function at(){this.a=null},
i1:function i1(){this.b=this.a=null},
ia:function ia(){this.a=null},
cQ:function cQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e8:function e8(a,b,c){this.a=a
this.b=b
this.c=c},
cV:function cV(a){this.b=a
this.c=null},
iD:function iD(){this.c=this.b=this.a=null},
cW:function cW(a){this.b=a
this.a=this.c=null},
pD:function(a){P.od(C.P,new V.kN(a))},
o8:function(a){var u=new V.ie()
u.er(a,!0)
return u},
bs:function bs(){},
kN:function kN(a){this.a=a},
fF:function fF(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h_:function h_(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h0:function h0(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hW:function hW(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i_:function i_(a){this.a=a
this.c=null},
i0:function i0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ie:function ie(){this.b=this.a=null},
ih:function ih(a){this.a=a},
ig:function ig(a){this.a=a},
ii:function ii(a){this.a=a}},U={
lL:function(){var u=new U.fw()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
dw:function(a){var u=new U.dv()
u.a=a
return u},
l_:function(){var u=new U.cA()
u.bA(U.aj)
u.bc(u.gey(),u.gh2())
u.e=null
u.f=V.dQ()
u.r=0
return u},
mi:function(a,b){var u,t,s,r=new U.ef(),q=U.lL()
q.seb(0,!0)
q.sdH(6.283185307179586)
q.sdJ(0)
q.sa1(0,0)
q.sdI(100)
q.sY(0)
q.sdj(0.5)
r.b=q
u=r.gbe()
q.gB().h(0,u)
q=U.lL()
q.seb(0,!0)
q.sdH(6.283185307179586)
q.sdJ(0)
q.sa1(0,0)
q.sdI(100)
q.sY(0)
q.sdj(0.5)
r.c=q
q.gB().h(0,u)
r.d=null
r.r=r.f=r.e=!1
r.y=r.x=2.5
r.Q=4
r.ch=r.cx=!1
r.db=r.cy=0
r.dx=null
r.dy=0
r.fx=r.fr=null
t=new X.bA(a,!1,!1)
s=r.d
r.d=t
q=new D.M("modifiers",s,t,[X.bA])
q.b=!0
r.X(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.M("invertX",q,!1,[P.R])
q.b=!0
r.X(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.M("invertY",q,!1,[P.R])
q.b=!0
r.X(q)}r.hV(b)
return r},
fw:function fw(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dv:function dv(){this.b=this.a=null},
cA:function cA(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
aj:function aj(){},
ef:function ef(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dB:function dB(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nQ:function(a,b){var u=a.b1,t=new A.hp(b,u)
t.eq(b,u)
t.en(a,b)
return t},
nR:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gam(a0)+a1.gam(a1)+a2.gam(a2)+a3.gam(a3)+a4.gam(a4)+a5.gam(a5)+a6.gam(a6)+a7.gam(a7)+a8.gam(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.u)(a9),++t)f+="_"+H.i(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.u)(b0),++t)f+="_"+H.i(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.u)(b1),++t)f+="_"+H.i(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.bo()
if(k){u=$.bn()
g=new Z.bL(g.a|u.a)}if(j){u=$.bm()
g=new Z.bL(g.a|u.a)}if(i){u=$.bl()
g=new Z.bL(g.a|u.a)}return new A.hs(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
kl:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
km:function(a,b,c){var u
A.kl(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kQ(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
oS:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kl(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
oP:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.km(b,t,"ambient")
b.a+="\n"},
oQ:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.km(b,t,"diffuse")
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
oT:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.km(b,t,"invDiffuse")
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
oZ:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.km(b,t,"specular")
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
oV:function(a,b){var u,t,s
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
oX:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.kl(b,t,"reflect")
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
oY:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.kl(b,t,"refract")
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
oR:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
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
if(typeof u!=="number")return u.ag()
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
r=[P.f]
o=H.d([],r)
if(!a.b.a)n=!1
else n=!0
if(n)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.d([],r)
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
oW:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
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
if(typeof u!=="number")return u.ag()
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
c.a=r+"\n"}r=[P.f]
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
k=H.d([],r)
if(!a.c.a)r=!1
else r=!0
if(r)C.a.h(k,"diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)C.a.h(k,"invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
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
p_:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
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
if(typeof u!=="number")return u.ag()
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
c.a=u+"\n"}u=[P.f]
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
i=H.d([],u)
if(!a.c.a)u=!1
else u=!0
if(u)C.a.h(i,"diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)C.a.h(i,"invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
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
oU:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.d([],[P.f])
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
u=b.a+="   return "+C.a.m(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
p0:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.a6("")
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
A.oS(a,j)
A.oP(a,j)
A.oQ(a,j)
A.oT(a,j)
A.oZ(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.oX(a,j)
A.oY(a,j)}A.oV(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.oR(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.oW(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.p_(a,q[o],j)
A.oU(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.d([],[P.f])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a8(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a8(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a8(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)C.a.h(n,"emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)C.a.h(n,"reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.m(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
p1:function(a,b){var u,t,s
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
p3:function(a,b){var u
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
p2:function(a,b){var u
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
p5:function(a,b){var u,t
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
p6:function(a,b){var u,t
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
p4:function(a,b){var u
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
p7:function(a,b){var u
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
kQ:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.b.a8(a,1)},
l9:function(a,b,c,d,e){var u=new A.iN(a,c,e)
u.f=d
u.shL(P.nO(d,0,P.l))
return u},
dp:function dp(a,b,c){this.a=a
this.b=b
this.c=c},
fl:function fl(a){this.a=a},
am:function am(a,b,c){this.a=a
this.b=b
this.c=c},
hp:function hp(a,b){var _=this
_.j6=_.j5=_.dl=_.dk=_.b1=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jj=_.ji=_.jh=_.c8=_.c7=_.c6=_.c5=_.c4=_.c3=_.jg=_.jf=_.du=_.je=_.jd=_.dt=_.ds=_.jc=_.jb=_.dr=_.dq=_.ja=_.j9=_.dn=_.j8=_.j7=_.dm=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aL:function aL(a,b){this.a=a
this.b=b},
aP:function aP(a,b){this.a=a
this.b=b},
aT:function aT(a,b){this.a=a
this.b=b},
hs:function hs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.b1=b3
_.dk=b4},
c4:function c4(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c5:function c5(a,b,c,d,e,f,g,h,i,j){var _=this
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
c8:function c8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cP:function cP(){},
ea:function ea(){},
iS:function iS(a){this.a=a},
aG:function aG(a,b,c){this.a=a
this.c=b
this.d=c},
iP:function iP(a,b,c){this.a=a
this.c=b
this.d=c},
iQ:function iQ(a,b,c){this.a=a
this.c=b
this.d=c},
iR:function iR(a,b,c){this.a=a
this.c=b
this.d=c},
iN:function iN(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ah:function ah(a,b,c){this.a=a
this.c=b
this.d=c},
iO:function iO(a,b,c){this.a=a
this.c=b
this.d=c},
Z:function Z(a,b,c){this.a=a
this.c=b
this.d=c},
cX:function cX(a,b,c){this.a=a
this.c=b
this.d=c},
iT:function iT(a,b,c){this.a=a
this.c=b
this.d=c},
cY:function cY(a,b,c){this.a=a
this.c=b
this.d=c},
aA:function aA(a,b,c){this.a=a
this.c=b
this.d=c},
c6:function c6(a,b,c){this.a=a
this.c=b
this.d=c},
c7:function c7(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lr:function(a,b,c,d){var u=F.l7()
F.de(u,b,c,d,a,1,0,0,1)
F.de(u,b,c,d,a,0,1,0,3)
F.de(u,b,c,d,a,0,0,1,2)
F.de(u,b,c,d,a,-1,0,0,0)
F.de(u,b,c,d,a,0,-1,0,0)
F.de(u,b,c,d,a,0,0,-1,3)
u.at()
return u},
kg:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
de:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.J(h,g+a1,f+a2)
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
j.d=i}m=F.kg(i)
l=F.kg(j.b)
k=F.ly(d,a0,new F.kf(j,F.kg(j.c),F.kg(j.d),l,m,c),b)
if(k!=null)a.b6(k)},
mM:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.l7()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.av])
q=u.a
p=new V.J(0,0,t)
p=p.t(0,Math.sqrt(p.D(p)))
C.a.h(r,q.hR(new V.bG(a,-1,-1,-1),new V.aZ(1,1,1,1),new V.a1(0,0,c),new V.J(0,0,t),new V.aa(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.F(k)
j=new V.J(m,l,t).t(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.eg(new V.bG(a,-1,-1,-1),null,new V.aZ(i,g,h,1),new V.a1(m*k,l*k,c),new V.J(0,0,t),new V.aa(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.hP(r)
return u},
ls:function(a,b,c,d,e){return F.pi(b,c,1,new F.kr(a,e),d)},
pi:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.ly(c,e,new F.kt(d),null)
if(u==null)return
u.at()
u.bW()
if(b)u.b6(F.mM(3,!1,1,new F.ku(d),e))
if(a)u.b6(F.mM(1,!0,-1,new F.kv(d),e))
return u},
pE:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kO()
t=F.lr(a,null,new F.kP(s,1),b)
t.bW()
return t},
n_:function(){return F.mL(15,30,0.5,1,new F.kR())},
pw:function(){return F.mL(12,120,0.3,1,new F.kD(3,2))},
mL:function(a,b,c,d,e){var u=F.ly(a,b,new F.ks(e,d,b,c),null)
if(u==null)return
u.at()
u.bW()
return u},
ly:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.l7()
t=H.d([],[F.av])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.eg(g,g,new V.aZ(p,0,0,1),g,g,new V.aa(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.c2(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.eg(g,g,new V.aZ(j,i,h,1),g,g,new V.aa(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.c2(d))}}u.d.hQ(a+1,b+1,t)
return u},
cx:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.z(P.B("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.z(P.B("May not create a face with vertices attached to different shapes."))
u.bU(a)
u.bV(b)
u.ht(c)
C.a.h(u.a.a.d.b,u)
u.a.a.Z()
return u},
nK:function(a,b){var u=new F.bi(),t=a.a
if(t==null)H.z(P.B("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.z(P.B("May not create a line with vertices attached to different shapes."))
u.bU(a)
u.bV(b)
C.a.h(u.a.a.c.b,u)
u.a.a.Z()
return u},
l7:function(){var u=new F.e1(),t=new F.j9(u)
t.b=!1
t.shM(H.d([],[F.av]))
u.a=t
t=new F.id(u)
t.sbN(H.d([],[F.bD]))
u.b=t
t=new F.ic(u)
t.sf5(H.d([],[F.bi]))
u.c=t
t=new F.ib(u)
t.sf_(H.d([],[F.a8]))
u.d=t
u.e=null
return u},
eg:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.av(),r=new F.jh()
r.sbN(H.d([],[F.bD]))
s.b=r
r=new F.jd()
u=[F.bi]
r.sf6(H.d([],u))
r.sf7(H.d([],u))
s.c=r
r=new F.ja()
u=[F.a8]
r.sf0(H.d([],u))
r.sf1(H.d([],u))
r.sf2(H.d([],u))
s.d=r
h=$.nd()
s.e=0
r=$.bo()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bn().a)!==0?e:t
s.x=(u&$.bm().a)!==0?b:t
s.y=(u&$.bP().a)!==0?f:t
s.z=(u&$.bQ().a)!==0?g:t
s.Q=(u&$.ne().a)!==0?c:t
s.ch=(u&$.cp().a)!==0?i:0
s.cx=(u&$.bl().a)!==0?a:t
return s},
kf:function kf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kr:function kr(a,b){this.a=a
this.b=b},
kt:function kt(a){this.a=a},
ku:function ku(a){this.a=a},
kv:function kv(a){this.a=a},
kO:function kO(){},
kP:function kP(a,b){this.a=a
this.b=b},
kR:function kR(){},
kD:function kD(a,b){this.a=a
this.b=b},
ks:function ks(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fS:function fS(){},
ij:function ij(){},
bi:function bi(){this.b=this.a=null},
hc:function hc(){},
iM:function iM(){},
bD:function bD(){this.a=null},
e1:function e1(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ib:function ib(a){this.a=a
this.b=null},
ic:function ic(a){this.a=a
this.b=null},
id:function id(a){this.a=a
this.b=null},
av:function av(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jj:function jj(a){this.a=a},
ji:function ji(a){this.a=a},
j9:function j9(a){this.a=a
this.c=this.b=null},
ja:function ja(){this.d=this.c=this.b=null},
jb:function jb(a,b){this.a=a
this.b=b},
jc:function jc(a,b){this.a=a
this.b=b},
jd:function jd(){this.c=this.b=null},
jf:function jf(){},
je:function je(){},
jg:function jg(){},
hQ:function hQ(){},
jh:function jh(){this.b=null}},T={e6:function e6(){}},N={
mT:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="testCanvas",c=null,b=V.o8("Test 024"),a=W.lJ()
a.className="pageLargeCanvas"
a.id=d
b.a.appendChild(a)
u=[P.f]
b.dd(H.d(["Test of the Material Lighting shader with a simple spot light. ","Use Ctrl plus the mouse to move the light."],u))
b.hN(H.d(["shapes"],u))
b.dd(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(d)
if(t==null)H.z(P.B("Failed to find an element with the identifier, testCanvas."))
s=E.oc(t,!0,!0,!0,!1)
r=U.l_()
r.h(0,U.dw(V.lW(0,0,-2.5)))
r.h(0,U.mi(!0,s.r))
q=new V.a3(1,1,1)
p=new D.bI()
p.r=new V.a3(1,1,1)
p.ch=1.0471975511965976
p.cx=1
p.dx=p.cy=1.5707963267948966
p.db=!0
p.dy=1
p.fx=p.fr=0
p.fy=!0
p.a=V.m1()
p.b=V.mo()
p.c=V.mn()
p.d=V.ol()
o=p.f
p.f=r
r.gB().h(0,p.gfu())
n=new D.M("mover",o,p.f,[U.aj])
n.b=!0
p.a_(n)
if(!p.r.p(0,q)){o=p.r
p.r=q
n=new D.M("color",o,q,[V.a3])
n.b=!0
p.a_(n)}n=p.ch
if(!(Math.abs(n-1.0471975511965976)<$.K().a)){p.ch=1.0471975511965976
m=1/(Math.sqrt(2)*Math.tan(p.ch))
p.z=m
p.Q=m*p.cx
n=new D.M("fov",n,p.ch,[P.t])
n.b=!0
p.a_(n)}n=p.cx
if(!(Math.abs(n-1)<$.K().a)){p.cx=1
m=p.z
if(typeof m!=="number")return m.A()
p.Q=m
n=new D.M("ratio",n,1,[P.t])
n.b=!0
p.a_(n)}n=p.cy
if(!(Math.abs(n-0.6)<$.K().a)){p.cy=0.6
n=new D.M("cutoff",n,0.6,[P.t])
n.b=!0
p.a_(n)}n=p.dx
if(!(Math.abs(n-0.5)<$.K().a)){p.dx=0.5
n=new D.M("coneAngle",n,0.5,[P.t])
n.b=!0
p.a_(n)}n=$.mp
if(n==null){n=new V.ca(1,0.00390625,0.0000152587890625,0)
$.mp=n
l=n}else l=n
if(!J.P(p.e,l)){o=p.e
p.e=l
n=new D.M("shadowAdjust",o,l,[V.ca])
n.b=!0
p.a_(n)}n=p.dy
if(!(Math.abs(n-0.5)<$.K().a)){p.dy=0.5
n=new D.M("attenuation0",n,0.5,[P.t])
n.b=!0
p.a_(n)}n=p.fr
if(!(Math.abs(n-0.05)<$.K().a)){p.fr=0.05
n=new D.M("attenuation1",n,0.05,[P.t])
n.b=!0
p.a_(n)}n=p.fx
if(!(Math.abs(n-0.05)<$.K().a)){p.fx=0.05
n=new D.M("attenuation2",n,0.05,[P.t])
n.b=!0
p.a_(n)}k=O.lT()
k.dx.h(0,p)
k.f.saB(0,new V.a3(0,0,0))
n=k.r
n.saB(0,new V.a3(0,0,0))
n=k.x
n.saB(0,new V.a3(0.7,0.7,0.7))
n=k.z
n.saB(0,new V.a3(0.3,0.3,0.3))
n=k.z
n.d3(new A.am(!0,!1,!1))
n.d4(100)
j=E.kZ()
j.saa(0,F.n_())
i=E.kZ()
i.saQ(U.dw(V.lV(3,3,3,1)))
n=F.lr(1,c,c,1)
n.c9()
i.saa(0,n)
h=U.l_()
h.h(0,U.mi(!1,s.r))
h.h(0,U.dw(V.lU(3.141592653589793)))
h.h(0,U.dw(V.lW(0,0,5)))
g=E.kZ()
n=U.l_()
n.h(0,U.dw(V.lV(0.1,0.1,0.1,1)))
n.h(0,r)
g.saQ(n)
g.saa(0,F.ls(0,!1,!0,40,1))
n=O.lT()
m=n.f
m.saB(0,new V.a3(1,1,1))
g.sb9(n)
n=new M.dB()
n.a=!0
n.seQ(0,O.kX(E.an))
n.e.bc(n.gfw(),n.gfA())
n.y=n.x=n.r=n.f=null
f=X.nE(c)
e=new X.dW()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.saQ(c)
m=e.c
if(!(Math.abs(m-1.0471975511965976)<$.K().a)){e.c=1.0471975511965976
m=new D.M("fov",m,1.0471975511965976,[P.t])
m.b=!0
e.aJ(m)}m=e.d
if(!(Math.abs(m-0.1)<$.K().a)){e.d=0.1
m=new D.M("near",m,0.1,[P.t])
m.b=!0
e.aJ(m)}m=e.e
if(!(Math.abs(m-2000)<$.K().a)){e.e=2000
m=new D.M("far",m,2000,[P.t])
m.b=!0
e.aJ(m)}m=n.b
if(m!==e){if(m!=null)m.gB().K(0,n.gap())
o=n.b
n.b=e
e.gB().h(0,n.gap())
m=new D.M("camera",o,n.b,[X.du])
m.b=!0
n.ax(m)}m=n.c
if(m!==f){if(m!=null)m.gB().K(0,n.gap())
o=n.c
n.c=f
f.gB().h(0,n.gap())
m=new D.M("target",o,n.c,[X.e5])
m.b=!0
n.ax(m)}n.sb9(c)
n.sb9(k)
n.e.h(0,j)
n.e.h(0,i)
n.e.h(0,g)
n.b.saQ(h)
m=s.d
if(m!==n){if(m!=null)m.gB().K(0,s.gcv())
s.d=n
n.gB().h(0,s.gcv())
s.cw()}n=new V.i_("shapes")
u=u.getElementById("shapes")
n.c=u
if(u==null)H.z("Failed to find shapes for RadioGroup")
n.aZ(0,"Cube",new N.kE(j))
n.aZ(0,"Cylinder",new N.kF(j))
n.aZ(0,"Cone",new N.kG(j))
n.aZ(0,"Sphere",new N.kH(j))
n.da(0,"Toroid",new N.kI(j),!0)
n.aZ(0,"Knot",new N.kJ(j))
u=s.z
if(u==null)u=s.z=D.a4()
n={func:1,ret:-1,args:[D.D]}
m=H.o(new N.kK(b,k),n)
if(u.b==null)u.saL(H.d([],[n]))
u=u.b;(u&&C.a).h(u,m)
V.pD(s)},
kE:function kE(a){this.a=a},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l3.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gG:function(a){return H.cM(a)},
i:function(a){return"Instance of '"+H.i(H.cN(a))+"'"}}
J.h6.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iR:1}
J.dF.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.dG.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.hV.prototype={}
J.c9.prototype={}
J.bz.prototype={
i:function(a){var u=a[$.n1()]
if(u==null)return this.ej(a)
return"JavaScript function for "+H.i(J.ar(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibw:1}
J.b2.prototype={
h:function(a,b){H.C(b,H.q(a,0))
if(!!a.fixed$length)H.z(P.I("add"))
a.push(b)},
dY:function(a,b){if(!!a.fixed$length)H.z(P.I("removeAt"))
if(b<0||b>=a.length)throw H.e(P.dZ(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var u
if(!!a.fixed$length)H.z(P.I("remove"))
for(u=0;u<a.length;++u)if(J.P(a[u],b)){a.splice(u,1)
return!0}return!1},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.e(P.bg(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.i(a[u]))
return t.join(b)},
iq:function(a){return this.m(a,"")},
ii:function(a,b,c,d){var u,t,s
H.C(b,d)
H.o(c,{func:1,ret:d,args:[d,H.q(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.e(P.bg(a))}return t},
ih:function(a,b){var u,t,s
H.o(b,{func:1,ret:P.R,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.H(b.$1(s)))return s
if(a.length!==u)throw H.e(P.bg(a))}throw H.e(H.h5())},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
eg:function(a,b,c){if(b<0||b>a.length)throw H.e(P.ag(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.ag(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.q(a,0)])
return H.d(a.slice(b,c),[H.q(a,0)])},
gig:function(a){if(a.length>0)return a[0]
throw H.e(H.h5())},
gau:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.e(H.h5())},
de:function(a,b){var u,t
H.o(b,{func:1,ret:P.R,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.H(b.$1(a[t])))return!0
if(a.length!==u)throw H.e(P.bg(a))}return!1},
by:function(a,b){var u=H.q(a,0)
H.o(b,{func:1,ret:P.l,args:[u,u]})
if(!!a.immutable$list)H.z(P.I("sort"))
H.e2(a,0,a.length-1,b,u)},
U:function(a,b){var u
for(u=0;u<a.length;++u)if(J.P(a[u],b))return!0
return!1},
i:function(a){return P.l0(a,"[","]")},
gS:function(a){return new J.as(a,a.length,[H.q(a,0)])},
gG:function(a){return H.cM(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.z(P.I("set length"))
if(b<0)throw H.e(P.ag(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.e(H.ci(a,b))
return a[b]},
k:function(a,b,c){H.C(c,H.q(a,0))
if(!!a.immutable$list)H.z(P.I("indexed set"))
if(b>=a.length||b<0)throw H.e(H.ci(a,b))
a[b]=c},
$ik:1,
$ib:1}
J.l2.prototype={}
J.as.prototype={
gI:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.u(s))
u=t.c
if(u>=r){t.scP(null)
return!1}t.scP(s[u]);++t.c
return!0},
scP:function(a){this.d=H.C(a,H.q(this,0))},
$ib1:1}
J.cD.prototype={
i0:function(a,b){var u
H.mU(b)
if(typeof b!=="number")throw H.e(H.be(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbo(b)
if(this.gbo(a)===u)return 0
if(this.gbo(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbo:function(a){return a===0?1/a<0:a<0},
dw:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.e(P.I(""+a+".floor()"))},
al:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.I(""+a+".round()"))},
e4:function(a,b){var u
if(b>20)throw H.e(P.ag(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbo(a))return"-"+u
return u},
ba:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.e(P.ag(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.T(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.z(P.I("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.c(t,1)
u=t[1]
if(3>=s)return H.c(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.A("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
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
em:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d6(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.d6(a,b)},
d6:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.I("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aN:function(a,b){var u
if(a>0)u=this.d5(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hy:function(a,b){if(b<0)throw H.e(H.be(b))
return this.d5(a,b)},
d5:function(a,b){return b>31?0:a>>>b},
$it:1,
$ia9:1}
J.dE.prototype={$il:1}
J.h7.prototype={}
J.by.prototype={
T:function(a,b){if(b<0)throw H.e(H.ci(a,b))
if(b>=a.length)H.z(H.ci(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.e(H.ci(a,b))
return a.charCodeAt(b)},
w:function(a,b){if(typeof b!=="string")throw H.e(P.kV(b,null,null))
return a+b},
aS:function(a,b,c,d){var u,t
c=P.bH(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a5:function(a,b,c){var u
if(c<0||c>a.length)throw H.e(P.ag(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a3:function(a,b){return this.a5(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.z(H.be(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.e(P.dZ(b,null))
if(b>c)throw H.e(P.dZ(b,null))
if(c>a.length)throw H.e(P.dZ(c,null))
return a.substring(b,c)},
a8:function(a,b){return this.q(a,b,null)},
iX:function(a){return a.toLowerCase()},
A:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ae:function(a,b){var u=b-a.length
if(u<=0)return a
return this.A(" ",u)+a},
bn:function(a,b,c){var u
if(c<0||c>a.length)throw H.e(P.ag(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dE:function(a,b){return this.bn(a,b,0)},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$ilZ:1,
$if:1}
H.r.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.b.T(this.a,b)},
$acZ:function(){return[P.l]},
$ax:function(){return[P.l]},
$ak:function(){return[P.l]},
$ab:function(){return[P.l]}}
H.fM.prototype={}
H.c_.prototype={
gS:function(a){var u=this
return new H.cE(u,u.gn(u),[H.aq(u,"c_",0)])},
bw:function(a,b){return this.ei(0,H.o(b,{func:1,ret:P.R,args:[H.aq(this,"c_",0)]}))}}
H.cE.prototype={
gI:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.dh(s),q=r.gn(s)
if(t.b!==q)throw H.e(P.bg(s))
u=t.c
if(u>=q){t.saV(null)
return!1}t.saV(r.H(s,u));++t.c
return!0},
saV:function(a){this.d=H.C(a,H.q(this,0))},
$ib1:1}
H.hm.prototype={
gS:function(a){return new H.hn(J.bp(this.a),this.b,this.$ti)},
gn:function(a){return J.aB(this.a)},
H:function(a,b){return this.b.$1(J.fg(this.a,b))},
$ak:function(a,b){return[b]}}
H.hn.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.saV(u.c.$1(t.gI(t)))
return!0}u.saV(null)
return!1},
gI:function(a){return this.a},
saV:function(a){this.a=H.C(a,H.q(this,1))},
$ab1:function(a,b){return[b]}}
H.ho.prototype={
gn:function(a){return J.aB(this.a)},
H:function(a,b){return this.b.$1(J.fg(this.a,b))},
$ac_:function(a,b){return[b]},
$ak:function(a,b){return[b]}}
H.d0.prototype={
gS:function(a){return new H.jm(J.bp(this.a),this.b,this.$ti)}}
H.jm.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(H.H(t.$1(u.gI(u))))return!0
return!1},
gI:function(a){var u=this.a
return u.gI(u)}}
H.bW.prototype={}
H.cZ.prototype={
k:function(a,b,c){H.C(c,H.aq(this,"cZ",0))
throw H.e(P.I("Cannot modify an unmodifiable list"))}}
H.ec.prototype={}
H.fy.prototype={
i:function(a){return P.l6(this)},
k:function(a,b,c){H.C(b,H.q(this,0))
H.C(c,H.q(this,1))
return H.nz()},
$iy:1}
H.fz.prototype={
gn:function(a){return this.a},
bl:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bl(0,b))return
return this.cQ(b)},
cQ:function(a){return this.b[H.N(a)]},
F:function(a,b){var u,t,s,r,q=this,p=H.q(q,1)
H.o(b,{func:1,ret:-1,args:[H.q(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.C(q.cQ(r),p))}}}
H.iJ.prototype={
ad:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hR.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.h9.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.iW.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kS.prototype={
$1:function(a){if(!!J.V(a).$ibv)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:25}
H.eQ.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iau:1}
H.ct.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ibw:1,
giZ:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iy.prototype={}
H.io.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.co(u)+"'"}}
H.cr.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cr))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.cM(this.a)
else u=typeof t!=="object"?J.dm(t):H.cM(t)
return(u^H.cM(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.i(H.cN(u))+"'")}}
H.iL.prototype={
i:function(a){return this.a}}
H.fu.prototype={
i:function(a){return this.a}}
H.i8.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.jn.prototype={
i:function(a){return"Assertion failed: "+P.dC(this.a)}}
H.a0.prototype={
gn:function(a){return this.a},
gip:function(a){return this.a===0},
ga4:function(a){return new H.he(this,[H.q(this,0)])},
bl:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cM(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cM(t,b)}else return s.il(b)},
il:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cc(u.bH(t,u.cb(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bf(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bf(r,b)
s=t==null?null:t.b
return s}else return q.im(b)},
im:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bH(r,s.cb(a))
t=s.cc(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.C(b,H.q(s,0))
H.C(c,H.q(s,1))
if(typeof b==="string"){u=s.b
s.cC(u==null?s.b=s.bL():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cC(t==null?s.c=s.bL():t,b,c)}else s.io(b,c)},
io:function(a,b){var u,t,s,r,q=this
H.C(a,H.q(q,0))
H.C(b,H.q(q,1))
u=q.d
if(u==null)u=q.d=q.bL()
t=q.cb(a)
s=q.bH(u,t)
if(s==null)q.bS(u,t,[q.bM(a,b)])
else{r=q.cc(s,a)
if(r>=0)s[r].b=b
else s.push(q.bM(a,b))}},
F:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.q(s,0),H.q(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.e(P.bg(s))
u=u.c}},
cC:function(a,b,c){var u,t=this
H.C(b,H.q(t,0))
H.C(c,H.q(t,1))
u=t.bf(a,b)
if(u==null)t.bS(a,b,t.bM(b,c))
else u.b=c},
fd:function(){this.r=this.r+1&67108863},
bM:function(a,b){var u,t=this,s=new H.hd(H.C(a,H.q(t,0)),H.C(b,H.q(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fd()
return s},
cb:function(a){return J.dm(a)&0x3ffffff},
cc:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.P(a[t].a,b))return t
return-1},
i:function(a){return P.l6(this)},
bf:function(a,b){return a[b]},
bH:function(a,b){return a[b]},
bS:function(a,b,c){a[b]=c},
eV:function(a,b){delete a[b]},
cM:function(a,b){return this.bf(a,b)!=null},
bL:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bS(t,u,t)
this.eV(t,u)
return t}}
H.hd.prototype={}
H.he.prototype={
gn:function(a){return this.a.a},
gS:function(a){var u=this.a,t=new H.hf(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hf.prototype={
gI:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.bg(t))
else{t=u.c
if(t==null){u.scB(null)
return!1}else{u.scB(t.a)
u.c=u.c.c
return!0}}},
scB:function(a){this.d=H.C(a,H.q(this,0))},
$ib1:1}
H.kz.prototype={
$1:function(a){return this.a(a)},
$S:25}
H.kA.prototype={
$2:function(a,b){return this.a(a,b)},
$S:56}
H.kB.prototype={
$1:function(a){return this.a(H.N(a))},
$S:54}
H.h8.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ilZ:1,
$io4:1}
H.cI.prototype={$icI:1}
H.bC.prototype={$ibC:1}
H.dR.prototype={
gn:function(a){return a.length},
$iL:1,
$aL:function(){}}
H.cJ.prototype={
j:function(a,b){H.bd(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pk(c)
H.bd(b,a,a.length)
a[b]=c},
$abW:function(){return[P.t]},
$ax:function(){return[P.t]},
$ik:1,
$ak:function(){return[P.t]},
$ib:1,
$ab:function(){return[P.t]}}
H.dS.prototype={
k:function(a,b,c){H.ac(c)
H.bd(b,a,a.length)
a[b]=c},
$abW:function(){return[P.l]},
$ax:function(){return[P.l]},
$ik:1,
$ak:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]}}
H.hJ.prototype={
j:function(a,b){H.bd(b,a,a.length)
return a[b]}}
H.hK.prototype={
j:function(a,b){H.bd(b,a,a.length)
return a[b]}}
H.hL.prototype={
j:function(a,b){H.bd(b,a,a.length)
return a[b]}}
H.hM.prototype={
j:function(a,b){H.bd(b,a,a.length)
return a[b]}}
H.hN.prototype={
j:function(a,b){H.bd(b,a,a.length)
return a[b]}}
H.dT.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bd(b,a,a.length)
return a[b]}}
H.cK.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bd(b,a,a.length)
return a[b]},
$icK:1,
$iQ:1}
H.d5.prototype={}
H.d6.prototype={}
H.d7.prototype={}
H.d8.prototype={}
P.jp.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:18}
P.jo.prototype={
$1:function(a){var u,t
this.a.a=H.o(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:49}
P.jq.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jr.prototype={
$0:function(){this.a.$0()},
$S:0}
P.eW.prototype={
eE:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ch(new P.k5(this,b),0),a)
else throw H.e(P.I("`setTimeout()` not found."))},
eF:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ch(new P.k4(this,a,Date.now(),b),0),a)
else throw H.e(P.I("Periodic timer."))},
$ib8:1}
P.k5.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.k4.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.em(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bc.prototype={
is:function(a){if((this.c&15)!==6)return!0
return this.b.b.cm(H.o(this.d,{func:1,ret:P.R,args:[P.U]}),a.a,P.R,P.U)},
ik:function(a){var u=this.e,t=P.U,s={futureOr:1,type:H.q(this,1)},r=this.b.b
if(H.fd(u,{func:1,args:[P.U,P.au]}))return H.lt(r.iR(u,a.a,a.b,null,t,P.au),s)
else return H.lt(r.cm(H.o(u,{func:1,args:[P.U]}),a.a,null,t),s)}}
P.aI.prototype={
e3:function(a,b,c){var u,t,s,r=H.q(this,0)
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a_
if(u!==C.f){H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.p9(b,u)}t=new P.aI($.a_,[c])
s=b==null?1:3
this.cD(new P.bc(t,s,a,b,[r,c]))
return t},
iU:function(a,b){return this.e3(a,null,b)},
cD:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.h(t.c,"$ibc")
t.c=a}else{if(s===2){u=H.h(t.c,"$iaI")
s=u.a
if(s<4){u.cD(a)
return}t.a=s
t.c=u.c}P.kp(null,null,t.b,H.o(new P.jA(t,a),{func:1,ret:-1}))}},
d_:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.h(p.c,"$ibc")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.h(p.c,"$iaI")
u=q.a
if(u<4){q.d_(a)
return}p.a=u
p.c=q.c}o.a=p.bh(a)
P.kp(null,null,p.b,H.o(new P.jE(o,p),{func:1,ret:-1}))}},
bP:function(){var u=H.h(this.c,"$ibc")
this.c=null
return this.bh(u)},
bh:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cI:function(a){var u,t,s=this,r=H.q(s,0)
H.lt(a,{futureOr:1,type:r})
u=s.$ti
if(H.lo(a,"$icz",u,"$acz"))if(H.lo(a,"$iaI",u,null))P.mq(a,s)
else P.oq(a,s)
else{t=s.bP()
H.C(a,r)
s.a=4
s.c=a
P.d3(s,t)}},
cJ:function(a,b){var u,t=this
H.h(b,"$iau")
u=t.bP()
t.a=8
t.c=new P.al(a,b)
P.d3(t,u)},
$icz:1}
P.jA.prototype={
$0:function(){P.d3(this.a,this.b)},
$S:0}
P.jE.prototype={
$0:function(){P.d3(this.b,this.a.a)},
$S:0}
P.jB.prototype={
$1:function(a){var u=this.a
u.a=0
u.cI(a)},
$S:18}
P.jC.prototype={
$2:function(a,b){H.h(b,"$iau")
this.a.cJ(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jD.prototype={
$0:function(){this.a.cJ(this.b,this.c)},
$S:0}
P.jH.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.e0(H.o(s.d,{func:1}),null)}catch(r){u=H.ai(r)
t=H.cm(r)
if(o.d){s=H.h(o.a.a.c,"$ial").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.h(o.a.a.c,"$ial")
else q.b=new P.al(u,t)
q.a=!0
return}if(!!J.V(n).$icz){if(n instanceof P.aI&&n.a>=4){if(n.a===8){s=o.b
s.b=H.h(n.c,"$ial")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.iU(new P.jI(p),null)
s.a=!1}},
$S:3}
P.jI.prototype={
$1:function(a){return this.a},
$S:46}
P.jG.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.q(s,0)
q=H.C(n.c,r)
p=H.q(s,1)
n.a.b=s.b.b.cm(H.o(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ai(o)
t=H.cm(o)
s=n.a
s.b=new P.al(u,t)
s.a=!0}},
$S:3}
P.jF.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.h(m.a.a.c,"$ial")
r=m.c
if(H.H(r.is(u))&&r.e!=null){q=m.b
q.b=r.ik(u)
q.a=!1}}catch(p){t=H.ai(p)
s=H.cm(p)
r=H.h(m.a.a.c,"$ial")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.al(t,s)
n.a=!0}},
$S:3}
P.ei.prototype={}
P.ir.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aI($.a_,[P.l])
r.a=0
u=H.q(s,0)
t=H.o(new P.it(r,s),{func:1,ret:-1,args:[u]})
H.o(new P.iu(r,q),{func:1,ret:-1})
W.ab(s.a,s.b,t,!1,u)
return q}}
P.it.prototype={
$1:function(a){H.C(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.O,args:[H.q(this.b,0)]}}}
P.iu.prototype={
$0:function(){this.b.cI(this.a.a)},
$S:0}
P.cS.prototype={}
P.is.prototype={}
P.b8.prototype={}
P.al.prototype={
i:function(a){return H.i(this.a)},
$ibv:1}
P.ke.prototype={$iqi:1}
P.ko.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dV():s
s=this.b
if(s==null)throw H.e(t)
u=H.e(t)
u.stack=s.i(0)
throw u},
$S:0}
P.jO.prototype={
iS:function(a){var u,t,s,r=null
H.o(a,{func:1,ret:-1})
try{if(C.f===$.a_){a.$0()
return}P.mB(r,r,this,a,-1)}catch(s){u=H.ai(s)
t=H.cm(s)
P.kn(r,r,this,u,H.h(t,"$iau"))}},
iT:function(a,b,c){var u,t,s,r=null
H.o(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.f===$.a_){a.$1(b)
return}P.mC(r,r,this,a,b,-1,c)}catch(s){u=H.ai(s)
t=H.cm(s)
P.kn(r,r,this,u,H.h(t,"$iau"))}},
hX:function(a,b){return new P.jQ(this,H.o(a,{func:1,ret:b}),b)},
bX:function(a){return new P.jP(this,H.o(a,{func:1,ret:-1}))},
dg:function(a,b){return new P.jR(this,H.o(a,{func:1,ret:-1,args:[b]}),b)},
e0:function(a,b){H.o(a,{func:1,ret:b})
if($.a_===C.f)return a.$0()
return P.mB(null,null,this,a,b)},
cm:function(a,b,c,d){H.o(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.a_===C.f)return a.$1(b)
return P.mC(null,null,this,a,b,c,d)},
iR:function(a,b,c,d,e,f){H.o(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.a_===C.f)return a.$2(b,c)
return P.pa(null,null,this,a,b,c,d,e,f)}}
P.jQ.prototype={
$0:function(){return this.a.e0(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jP.prototype={
$0:function(){return this.a.iS(this.b)},
$S:3}
P.jR.prototype={
$1:function(a){var u=this.c
return this.a.iT(this.b,H.C(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jM.prototype={
gS:function(a){var u=this,t=new P.ex(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
U:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.h(u[b],"$icb")!=null}else{t=this.eR(b)
return t}},
eR:function(a){var u=this.d
if(u==null)return!1
return this.bF(this.cR(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.C(b,H.q(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cF(u==null?s.b=P.le():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cF(t==null?s.c=P.le():t,b)}else return s.eH(0,b)},
eH:function(a,b){var u,t,s,r=this
H.C(b,H.q(r,0))
u=r.d
if(u==null)u=r.d=P.le()
t=r.cK(b)
s=u[t]
if(s==null)u[t]=[r.bC(b)]
else{if(r.bF(s,b)>=0)return!1
s.push(r.bC(b))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hi(this.c,b)
else return this.hh(0,b)},
hh:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cR(r,b)
t=s.bF(u,b)
if(t<0)return!1
s.d7(u.splice(t,1)[0])
return!0},
cF:function(a,b){H.C(b,H.q(this,0))
if(H.h(a[b],"$icb")!=null)return!1
a[b]=this.bC(b)
return!0},
hi:function(a,b){var u
if(a==null)return!1
u=H.h(a[b],"$icb")
if(u==null)return!1
this.d7(u)
delete a[b]
return!0},
cH:function(){this.r=1073741823&this.r+1},
bC:function(a){var u,t=this,s=new P.cb(H.C(a,H.q(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cH()
return s},
d7:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cH()},
cK:function(a){return J.dm(a)&1073741823},
cR:function(a,b){return a[this.cK(b)]},
bF:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.P(a[t].a,b))return t
return-1}}
P.cb.prototype={}
P.ex.prototype={
gI:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.bg(t))
else{t=u.c
if(t==null){u.scG(null)
return!1}else{u.scG(H.C(t.a,H.q(u,0)))
u.c=u.c.b
return!0}}},
scG:function(a){this.d=H.C(a,H.q(this,0))},
$ib1:1}
P.hg.prototype={
$2:function(a,b){this.a.k(0,H.C(a,this.b),H.C(b,this.c))},
$S:5}
P.hh.prototype={$ik:1,$ib:1}
P.x.prototype={
gS:function(a){return new H.cE(a,this.gn(a),[H.cl(this,a,"x",0)])},
H:function(a,b){return this.j(a,b)},
iW:function(a,b){var u,t=this,s=H.d([],[H.cl(t,a,"x",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
iV:function(a){return this.iW(a,!0)},
ic:function(a,b,c,d){var u
H.C(d,H.cl(this,a,"x",0))
P.bH(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.l0(a,"[","]")}}
P.hj.prototype={}
P.hk.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.i(a)
t.a=u+": "
t.a+=H.i(b)},
$S:5}
P.ae.prototype={
F:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.cl(s,a,"ae",0),H.cl(s,a,"ae",1)]})
for(u=J.bp(s.ga4(a));u.v();){t=u.gI(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aB(this.ga4(a))},
i:function(a){return P.l6(a)},
$iy:1}
P.k6.prototype={
k:function(a,b,c){H.C(b,H.q(this,0))
H.C(c,H.q(this,1))
throw H.e(P.I("Cannot modify unmodifiable map"))}}
P.hl.prototype={
j:function(a,b){return J.dl(this.a,b)},
k:function(a,b,c){J.kT(this.a,H.C(b,H.q(this,0)),H.C(c,H.q(this,1)))},
F:function(a,b){J.lC(this.a,H.o(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]}))},
gn:function(a){return J.aB(this.a)},
i:function(a){return J.ar(this.a)},
$iy:1}
P.ed.prototype={}
P.jT.prototype={
ar:function(a,b){var u
for(u=J.bp(H.m(b,"$ik",this.$ti,"$ak"));u.v();)this.h(0,u.gI(u))},
i:function(a){return P.l0(this,"{","}")},
H:function(a,b){var u,t,s,r=this
P.m4(b,"index")
for(u=P.ou(r,r.r,H.q(r,0)),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.e(P.X(b,r,"index",null,t))},
$ik:1,
$im7:1}
P.ey.prototype={}
P.f0.prototype={}
P.fq.prototype={
iu:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bH(a0,a1,b.length)
u=$.ng()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.C(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.ky(C.b.C(b,n))
j=H.ky(C.b.C(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.c(u,i)
h=u[i]
if(h>=0){i=C.b.T("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.a6("")
g=r.a+=C.b.q(b,s,t)
r.a=g+H.c1(m)
s=n
continue}}throw H.e(P.a5("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.q(b,s,a1)
f=g.length
if(q>=0)P.lG(b,p,a1,q,o,f)
else{e=C.d.bb(f-1,4)+1
if(e===1)throw H.e(P.a5(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aS(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lG(b,p,a1,q,o,d)
else{e=C.d.bb(d,4)
if(e===1)throw H.e(P.a5(c,b,a1))
if(e>1)b=C.b.aS(b,a1,a1,e===2?"==":"=")}return b},
$abU:function(){return[[P.b,P.l],P.f]}}
P.fr.prototype={
$abt:function(){return[[P.b,P.l],P.f]}}
P.bU.prototype={}
P.bt.prototype={}
P.fO.prototype={
$abU:function(){return[P.f,[P.b,P.l]]}}
P.h3.prototype={
i:function(a){return this.a}}
P.h2.prototype={
eS:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.a6("")
if(r>b)q.a+=C.b.q(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nr(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abt:function(){return[P.f,P.f]}}
P.j3.prototype={
gib:function(){return C.N}}
P.j5.prototype={
c1:function(a){var u,t,s=P.bH(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kc(u)
if(t.f3(a,0,s)!==s)t.d9(J.nn(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oL(0,t.b,u.length)))},
$abt:function(){return[P.f,[P.b,P.l]]}}
P.kc.prototype={
d9:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
f3:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.T(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.C(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d9(r,C.b.C(a,p)))s=p}else if(r<=2047){q=n.b
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
P.j4.prototype={
c1:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[P.l],"$ab")
u=P.og(!1,a,0,null)
if(u!=null)return u
t=P.bH(0,null,J.aB(a))
s=P.mE(a,0,t)
if(s>0){r=P.cT(a,0,s)
if(s===t)return r
q=new P.a6(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.a6("")
n=new P.kb(!1,q)
n.c=o
n.i1(a,p,t)
if(n.e>0){H.z(P.a5("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c1(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abt:function(){return[[P.b,P.l],P.f]}}
P.kb.prototype={
i1:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.m(a,"$ib",[P.l],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.dh(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.ag()
if((o&192)!==128){n=P.a5(h+C.d.ba(o,16),a,p)
throw H.e(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.c(C.w,n)
if(u<=C.w[n]){n=P.a5("Overlong encoding of 0x"+C.d.ba(u,16),a,p-s-1)
throw H.e(n)}if(u>1114111){n=P.a5("Character outside valid Unicode range: 0x"+C.d.ba(u,16),a,p-s-1)
throw H.e(n)}if(!i.c||u!==65279)q.a+=H.c1(u)
i.c=!1}for(n=p<c;n;){m=P.mE(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cT(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.P()
if(o<0){j=P.a5("Negative UTF-8 code unit: -0x"+C.d.ba(-o,16),a,k-1)
throw H.e(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a5(h+C.d.ba(o,16),a,k-1)
throw H.e(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.R.prototype={}
P.ax.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.ax&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.d.aN(u,30))&1073741823},
i:function(a){var u=this,t=P.nA(H.o0(u)),s=P.dx(H.nZ(u)),r=P.dx(H.nV(u)),q=P.dx(H.nW(u)),p=P.dx(H.nY(u)),o=P.dx(H.o_(u)),n=P.nB(H.nX(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.t.prototype={}
P.bu.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.bu&&this.a===b.a},
gG:function(a){return C.d.gG(this.a)},
i:function(a){var u,t,s,r=new P.fL(),q=this.a
if(q<0)return"-"+new P.bu(0-q).i(0)
u=r.$1(C.d.a7(q,6e7)%60)
t=r.$1(C.d.a7(q,1e6)%60)
s=new P.fK().$1(q%1e6)
return""+C.d.a7(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.fK.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:19}
P.fL.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:19}
P.bv.prototype={}
P.fk.prototype={
i:function(a){return"Assertion failed"}}
P.dV.prototype={
i:function(a){return"Throw of null."}}
P.aK.prototype={
gbE:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbD:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbE()+o+u
if(!q.a)return t
s=q.gbD()
r=P.dC(q.b)
return t+s+": "+r}}
P.c2.prototype={
gbE:function(){return"RangeError"},
gbD:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.h4.prototype={
gbE:function(){return"RangeError"},
gbD:function(){var u,t=H.ac(this.b)
if(typeof t!=="number")return t.P()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gn:function(a){return this.f}}
P.iX.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iU.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cR.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fx.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dC(u)+"."}}
P.hU.prototype={
i:function(a){return"Out of Memory"},
$ibv:1}
P.e3.prototype={
i:function(a){return"Stack Overflow"},
$ibv:1}
P.fE.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eq.prototype={
i:function(a){return"Exception: "+this.a}}
P.fY.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.q(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.C(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.T(f,q)
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
k=""}j=C.b.q(f,m,n)
return h+l+j+k+"\n"+C.b.A(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.i(g)+")"):h}}
P.bw.prototype={}
P.l.prototype={}
P.k.prototype={
bw:function(a,b){var u=H.aq(this,"k",0)
return new H.d0(this,H.o(b,{func:1,ret:P.R,args:[u]}),[u])},
gn:function(a){var u,t=this.gS(this)
for(u=0;t.v();)++u
return u},
gaH:function(a){var u,t=this.gS(this)
if(!t.v())throw H.e(H.h5())
u=t.gI(t)
if(t.v())throw H.e(H.nH())
return u},
H:function(a,b){var u,t,s
P.m4(b,"index")
for(u=this.gS(this),t=0;u.v();){s=u.gI(u)
if(b===t)return s;++t}throw H.e(P.X(b,this,"index",null,t))},
i:function(a){return P.nG(this,"(",")")}}
P.b1.prototype={}
P.b.prototype={$ik:1}
P.y.prototype={}
P.O.prototype={
gG:function(a){return P.U.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.a9.prototype={}
P.U.prototype={constructor:P.U,$iU:1,
p:function(a,b){return this===b},
gG:function(a){return H.cM(this)},
i:function(a){return"Instance of '"+H.i(H.cN(this))+"'"},
toString:function(){return this.i(this)}}
P.au.prototype={}
P.f.prototype={$ilZ:1}
P.a6.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipT:1}
P.j1.prototype={
$2:function(a,b){var u,t,s,r=P.f
H.m(a,"$iy",[r,r],"$ay")
H.N(b)
u=J.di(b).dE(b,"=")
if(u===-1){if(b!=="")J.kT(a,P.li(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.q(b,0,u)
s=C.b.a8(b,u+1)
r=this.a
J.kT(a,P.li(t,0,t.length,r,!0),P.li(s,0,s.length,r,!0))}return a},
$S:45}
P.iZ.prototype={
$2:function(a,b){throw H.e(P.a5("Illegal IPv4 address, "+a,this.a,b))},
$S:44}
P.j_.prototype={
$2:function(a,b){throw H.e(P.a5("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.j0.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.ff(C.b.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.P()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:42}
P.cc.prototype={
gea:function(){return this.b},
gca:function(a){var u=this.c
if(u==null)return""
if(C.b.a3(u,"["))return C.b.q(u,1,u.length-1)
return u},
gbq:function(a){var u=this.d
if(u==null)return P.mu(this.a)
return u},
gcg:function(a){var u=this.f
return u==null?"":u},
gdz:function(){var u=this.r
return u==null?"":u},
dZ:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.m(b,"$iy",[P.f,null],"$ay")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a3(p,"/"))p="/"+p
n=P.lg(null,0,0,b)
return new P.cc(u,s,q,r,p,n,m.r)},
gci:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.f
s.shg(new P.ed(P.mh(u==null?"":u),[t,t]))}return s.Q},
gdA:function(){return this.c!=null},
gdD:function(){return this.f!=null},
gdB:function(){return this.r!=null},
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
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.V(b).$ila)if(s.a==b.gbx())if(s.c!=null===b.gdA())if(s.b==b.gea())if(s.gca(s)==b.gca(b))if(s.gbq(s)==b.gbq(b))if(s.e===b.gdU(b)){u=s.f
t=u==null
if(!t===b.gdD()){if(t)u=""
if(u===b.gcg(b)){u=s.r
t=u==null
if(!t===b.gdB()){if(t)u=""
u=u===b.gdz()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gG:function(a){var u=this.z
return u==null?this.z=C.b.gG(this.i(0)):u},
shg:function(a){var u=P.f
this.Q=H.m(a,"$iy",[u,u],"$ay")},
$ila:1,
gbx:function(){return this.a},
gdU:function(a){return this.e}}
P.k7.prototype={
$1:function(a){throw H.e(P.a5("Invalid port",this.a,this.b+1))},
$S:41}
P.k8.prototype={
$1:function(a){return P.f1(C.W,a,C.h,!1)},
$S:23}
P.ka.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.f1(C.i,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.f1(C.i,b,C.h,!0))}},
$S:24}
P.k9.prototype={
$2:function(a,b){var u,t
H.N(a)
if(b==null||typeof b==="string")this.a.$2(a,H.N(b))
else for(u=J.bp(H.mS(b,"$ik")),t=this.a;u.v();)t.$2(a,H.N(u.gI(u)))},
$S:40}
P.iY.prototype={
ge9:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.c(o,0)
u=q.a
o=o[0]+1
t=C.b.bn(u,"?",o)
s=u.length
if(t>=0){r=P.dd(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jv("data",p,p,p,P.dd(u,o,s,C.A,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.c(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.ki.prototype={
$1:function(a){return new Uint8Array(96)},
$S:48}
P.kh.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.c(u,a)
u=u[a]
J.no(u,0,96,b)
return u},
$S:39}
P.kj.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.C(b,s)^96
if(r>=t)return H.c(a,r)
a[r]=c}}}
P.kk.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.C(b,0),t=C.b.C(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.c(a,r)
a[r]=c}}}
P.jW.prototype={
gdA:function(){return this.c>0},
gdC:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.w()
t=this.e
if(typeof t!=="number")return H.F(t)
t=u+1<t
u=t}else u=!1
return u},
gdD:function(){var u=this.f
if(typeof u!=="number")return u.P()
return u<this.r},
gdB:function(){return this.r<this.a.length},
gcT:function(){return this.b===4&&C.b.a3(this.a,"http")},
gcU:function(){return this.b===5&&C.b.a3(this.a,"https")},
gbx:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcT())q=t.x="http"
else if(t.gcU()){t.x="https"
q="https"}else if(q===4&&C.b.a3(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a3(t.a,r)){t.x=r
q=r}else{q=C.b.q(t.a,0,q)
t.x=q}return q},
gea:function(){var u=this.c,t=this.b+3
return u>t?C.b.q(this.a,t,u-1):""},
gca:function(a){var u=this.c
return u>0?C.b.q(this.a,u,this.d):""},
gbq:function(a){var u,t=this
if(t.gdC()){u=t.d
if(typeof u!=="number")return u.w()
return P.ff(C.b.q(t.a,u+1,t.e),null,null)}if(t.gcT())return 80
if(t.gcU())return 443
return 0},
gdU:function(a){return C.b.q(this.a,this.e,this.f)},
gcg:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.P()
return u<t?C.b.q(this.a,u+1,t):""},
gdz:function(){var u=this.r,t=this.a
return u<t.length?C.b.a8(t,u+1):""},
gci:function(){var u=this,t=u.f
if(typeof t!=="number")return t.P()
if(t>=u.r)return C.X
t=P.f
return new P.ed(P.mh(u.gcg(u)),[t,t])},
dZ:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.m(b,"$iy",[P.f,null],"$ay")
u=k.gbx()
t=u==="file"
s=k.c
r=s>0?C.b.q(k.a,k.b+3,s):""
q=k.gdC()?k.gbq(k):j
s=k.c
if(s>0)p=C.b.q(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.q(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a3(o,"/"))o="/"+o
m=P.lg(j,0,0,b)
n=k.r
l=n<s.length?C.b.a8(s,n+1):j
return new P.cc(u,r,p,q,o,m,l)},
gG:function(a){var u=this.y
return u==null?this.y=C.b.gG(this.a):u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.V(b).$ila&&this.a===b.i(0)},
i:function(a){return this.a},
$ila:1}
P.jv.prototype={}
W.v.prototype={}
W.fh.prototype={
gn:function(a){return a.length}}
W.dn.prototype={
i:function(a){return String(a)},
$idn:1}
W.fi.prototype={
i:function(a){return String(a)}}
W.cq.prototype={$icq:1}
W.bS.prototype={$ibS:1}
W.bq.prototype={$ibq:1}
W.bT.prototype={
ed:function(a,b,c){var u=a.getContext(b,P.ph(c))
return u},
$ibT:1}
W.br.prototype={
gn:function(a){return a.length}}
W.cu.prototype={$icu:1}
W.fA.prototype={
gn:function(a){return a.length}}
W.W.prototype={$iW:1}
W.cv.prototype={
gn:function(a){return a.length}}
W.fB.prototype={}
W.b_.prototype={}
W.b0.prototype={}
W.fC.prototype={
gn:function(a){return a.length}}
W.fD.prototype={
gn:function(a){return a.length}}
W.fG.prototype={
gn:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.fH.prototype={
i:function(a){return String(a)}}
W.dz.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.m(c,"$iak",[P.a9],"$aak")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[[P.ak,P.a9]]},
$ax:function(){return[[P.ak,P.a9]]},
$ik:1,
$ak:function(){return[[P.ak,P.a9]]},
$ib:1,
$ab:function(){return[[P.ak,P.a9]]},
$aG:function(){return[[P.ak,P.a9]]}}
W.dA.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gaG(a))+" x "+H.i(this.gaD(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$iak)return!1
return a.left===u.gbp(b)&&a.top===u.gbs(b)&&this.gaG(a)===u.gaG(b)&&this.gaD(a)===u.gaD(b)},
gG:function(a){return W.ms(C.e.gG(a.left),C.e.gG(a.top),C.e.gG(this.gaG(a)),C.e.gG(this.gaD(a)))},
gdh:function(a){return a.bottom},
gaD:function(a){return a.height},
gbp:function(a){return a.left},
gcl:function(a){return a.right},
gbs:function(a){return a.top},
gaG:function(a){return a.width},
$iak:1,
$aak:function(){return[P.a9]}}
W.fI.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.N(c)
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[P.f]},
$ax:function(){return[P.f]},
$ik:1,
$ak:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aG:function(){return[P.f]}}
W.fJ.prototype={
gn:function(a){return a.length}}
W.jt.prototype={
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return H.h(u[b],"$iT")},
k:function(a,b,c){var u
H.h(c,"$iT")
u=this.b
if(b<0||b>=u.length)return H.c(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var u=this.iV(this)
return new J.as(u,u.length,[H.q(u,0)])},
$ax:function(){return[W.T]},
$ak:function(){return[W.T]},
$ab:function(){return[W.T]}}
W.T.prototype={
ghW:function(a){return new W.jw(a)},
gc0:function(a){return new W.jt(a,a.children)},
gdi:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.P()
if(s<0)s=-s*0
if(typeof r!=="number")return r.P()
if(r<0)r=-r*0
return new P.ak(u,t,s,r,[P.a9])},
i:function(a){return a.localName},
ac:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lO
if(u==null){u=H.d([],[W.az])
t=new W.dU(u)
C.a.h(u,W.mr(null))
C.a.h(u,W.mt())
$.lO=t
d=t}else d=u
u=$.lN
if(u==null){u=new W.f2(d)
$.lN=u
c=u}else{u.a=d
c=u}}if($.bh==null){u=document
t=u.implementation.createHTMLDocument("")
$.bh=t
$.kY=t.createRange()
t=$.bh.createElement("base")
H.h(t,"$icq")
t.href=u.baseURI
$.bh.head.appendChild(t)}u=$.bh
if(u.body==null){t=u.createElement("body")
u.body=H.h(t,"$ibq")}u=$.bh
if(!!this.$ibq)s=u.body
else{s=u.createElement(a.tagName)
$.bh.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.U(C.U,a.tagName)){$.kY.selectNodeContents(s)
r=$.kY.createContextualFragment(b)}else{s.innerHTML=b
r=$.bh.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bh.body
if(s==null?u!=null:s!==u)J.lE(s)
c.co(r)
document.adoptNode(r)
return r},
i4:function(a,b,c){return this.ac(a,b,c,null)},
ef:function(a,b){a.textContent=null
a.appendChild(this.ac(a,b,null,null))},
$iT:1,
ge1:function(a){return a.tagName}}
W.fN.prototype={
$1:function(a){return!!J.V(H.h(a,"$iE")).$iT},
$S:27}
W.n.prototype={$in:1}
W.j.prototype={
hO:function(a,b,c,d){H.o(c,{func:1,args:[W.n]})
if(c!=null)this.eI(a,b,c,!1)},
eI:function(a,b,c,d){return a.addEventListener(b,H.ch(H.o(c,{func:1,args:[W.n]}),1),!1)},
$ij:1}
W.aD.prototype={$iaD:1}
W.cy.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaD")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aD]},
$ax:function(){return[W.aD]},
$ik:1,
$ak:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$icy:1,
$aG:function(){return[W.aD]}}
W.fT.prototype={
gn:function(a){return a.length}}
W.fX.prototype={
gn:function(a){return a.length}}
W.aM.prototype={$iaM:1}
W.h1.prototype={
gn:function(a){return a.length}}
W.bX.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iE")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.E]},
$ax:function(){return[W.E]},
$ik:1,
$ak:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$ibX:1,
$aG:function(){return[W.E]}}
W.cB.prototype={$icB:1}
W.cC.prototype={$icC:1}
W.b3.prototype={$ib3:1}
W.dK.prototype={
i:function(a){return String(a)},
$idK:1}
W.hC.prototype={
gn:function(a){return a.length}}
W.cG.prototype={$icG:1}
W.hD.prototype={
j:function(a,b){return P.bk(a.get(H.N(b)))},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bk(t.value[1]))}},
ga4:function(a){var u=H.d([],[P.f])
this.F(a,new W.hE(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.e(P.I("Not supported"))},
$aae:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
W.hE.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hF.prototype={
j:function(a,b){return P.bk(a.get(H.N(b)))},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bk(t.value[1]))}},
ga4:function(a){var u=H.d([],[P.f])
this.F(a,new W.hG(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.e(P.I("Not supported"))},
$aae:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
W.hG.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aN.prototype={$iaN:1}
W.hH.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaN")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aN]},
$ax:function(){return[W.aN]},
$ik:1,
$ak:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aG:function(){return[W.aN]}}
W.af.prototype={$iaf:1}
W.ap.prototype={
gaH:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.e(P.m8("No elements"))
if(t>1)throw H.e(P.m8("More than one element"))
return u.firstChild},
ar:function(a,b){var u,t,s,r
H.m(b,"$ik",[W.E],"$ak")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
k:function(a,b,c){var u,t
H.h(c,"$iE")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.c(t,b)
u.replaceChild(c,t[b])},
gS:function(a){var u=this.a.childNodes
return new W.dD(u,u.length,[H.cl(C.Y,u,"G",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$ax:function(){return[W.E]},
$ak:function(){return[W.E]},
$ab:function(){return[W.E]}}
W.E.prototype={
iL:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
iP:function(a,b){var u,t
try{u=a.parentNode
J.nl(u,b,a)}catch(t){H.ai(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eh(a):u},
hT:function(a,b){return a.appendChild(H.h(b,"$iE"))},
hl:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.cL.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iE")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.E]},
$ax:function(){return[W.E]},
$ik:1,
$ak:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aG:function(){return[W.E]}}
W.aO.prototype={$iaO:1,
gn:function(a){return a.length}}
W.hX.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaO")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aO]},
$ax:function(){return[W.aO]},
$ik:1,
$ak:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aG:function(){return[W.aO]}}
W.i6.prototype={
j:function(a,b){return P.bk(a.get(H.N(b)))},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bk(t.value[1]))}},
ga4:function(a){var u=H.d([],[P.f])
this.F(a,new W.i7(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.e(P.I("Not supported"))},
$aae:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
W.i7.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.i9.prototype={
gn:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.ik.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaQ")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aQ]},
$ax:function(){return[W.aQ]},
$ik:1,
$ak:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aG:function(){return[W.aQ]}}
W.aR.prototype={$iaR:1}
W.il.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaR")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aR]},
$ax:function(){return[W.aR]},
$ik:1,
$ak:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aG:function(){return[W.aR]}}
W.aS.prototype={$iaS:1,
gn:function(a){return a.length}}
W.ip.prototype={
j:function(a,b){return a.getItem(H.N(b))},
k:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga4:function(a){var u=H.d([],[P.f])
this.F(a,new W.iq(u))
return u},
gn:function(a){return a.length},
$aae:function(){return[P.f,P.f]},
$iy:1,
$ay:function(){return[P.f,P.f]}}
W.iq.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:24}
W.aE.prototype={$iaE:1}
W.b7.prototype={$ib7:1}
W.e4.prototype={
ac:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bz(a,b,c,d)
u=W.nC("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ap(t).ar(0,new W.ap(u))
return t}}
W.iw.prototype={
ac:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bz(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ac(u.createElement("table"),b,c,d)
u.toString
u=new W.ap(u)
s=u.gaH(u)
s.toString
u=new W.ap(s)
r=u.gaH(u)
t.toString
r.toString
new W.ap(t).ar(0,new W.ap(r))
return t}}
W.ix.prototype={
ac:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bz(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ac(u.createElement("table"),b,c,d)
u.toString
u=new W.ap(u)
s=u.gaH(u)
t.toString
s.toString
new W.ap(t).ar(0,new W.ap(s))
return t}}
W.cU.prototype={$icU:1}
W.aU.prototype={$iaU:1}
W.aF.prototype={$iaF:1}
W.iz.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaF")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aF]},
$ax:function(){return[W.aF]},
$ik:1,
$ak:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$aG:function(){return[W.aF]}}
W.iA.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaU")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aU]},
$ax:function(){return[W.aU]},
$ik:1,
$ak:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aG:function(){return[W.aU]}}
W.iC.prototype={
gn:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.aW.prototype={$iaW:1}
W.iG.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaV")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aV]},
$ax:function(){return[W.aV]},
$ik:1,
$ak:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aG:function(){return[W.aV]}}
W.iH.prototype={
gn:function(a){return a.length}}
W.bK.prototype={}
W.j2.prototype={
i:function(a){return String(a)}}
W.jk.prototype={
gn:function(a){return a.length}}
W.bb.prototype={
gi7:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.I("deltaY is not supported"))},
gi6:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.I("deltaX is not supported"))},
$ibb:1}
W.d1.prototype={
hm:function(a,b){return a.requestAnimationFrame(H.ch(H.o(b,{func:1,ret:-1,args:[P.a9]}),1))},
eY:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d2.prototype={$id2:1}
W.ju.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iW")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.W]},
$ax:function(){return[W.W]},
$ik:1,
$ak:function(){return[W.W]},
$ib:1,
$ab:function(){return[W.W]},
$aG:function(){return[W.W]}}
W.el.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$iak)return!1
return a.left===u.gbp(b)&&a.top===u.gbs(b)&&a.width===u.gaG(b)&&a.height===u.gaD(b)},
gG:function(a){return W.ms(C.e.gG(a.left),C.e.gG(a.top),C.e.gG(a.width),C.e.gG(a.height))},
gaD:function(a){return a.height},
gaG:function(a){return a.width}}
W.jJ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaM")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aM]},
$ax:function(){return[W.aM]},
$ik:1,
$ak:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aG:function(){return[W.aM]}}
W.eD.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iE")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.E]},
$ax:function(){return[W.E]},
$ik:1,
$ak:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aG:function(){return[W.E]}}
W.jX.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaS")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aS]},
$ax:function(){return[W.aS]},
$ik:1,
$ak:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aG:function(){return[W.aS]}}
W.k0.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaE")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aE]},
$ax:function(){return[W.aE]},
$ik:1,
$ak:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$aG:function(){return[W.aE]}}
W.js.prototype={
F:function(a,b){var u,t,s,r,q
H.o(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.ga4(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga4:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.f])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.c(r,t)
s=H.h(r[t],"$id2")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aae:function(){return[P.f,P.f]},
$ay:function(){return[P.f,P.f]}}
W.jw.prototype={
j:function(a,b){return this.a.getAttribute(H.N(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.ga4(this).length}}
W.jx.prototype={}
W.ld.prototype={}
W.jy.prototype={}
W.jz.prototype={
$1:function(a){return this.a.$1(H.h(a,"$in"))},
$S:37}
W.bM.prototype={
eu:function(a){var u
if($.d4.gip($.d4)){for(u=0;u<262;++u)$.d4.k(0,C.T[u],W.pp())
for(u=0;u<12;++u)$.d4.k(0,C.q[u],W.pq())}},
aO:function(a){return $.nh().U(0,W.cw(a))},
as:function(a,b,c){var u=$.d4.j(0,H.i(W.cw(a))+"::"+b)
if(u==null)u=$.d4.j(0,"*::"+b)
if(u==null)return!1
return H.ln(u.$4(a,b,c,this))},
$iaz:1}
W.G.prototype={
gS:function(a){return new W.dD(a,this.gn(a),[H.cl(this,a,"G",0)])}}
W.dU.prototype={
aO:function(a){return C.a.de(this.a,new W.hP(a))},
as:function(a,b,c){return C.a.de(this.a,new W.hO(a,b,c))},
$iaz:1}
W.hP.prototype={
$1:function(a){return H.h(a,"$iaz").aO(this.a)},
$S:29}
W.hO.prototype={
$1:function(a){return H.h(a,"$iaz").as(this.a,this.b,this.c)},
$S:29}
W.eL.prototype={
eB:function(a,b,c,d){var u,t,s
this.a.ar(0,c)
u=b.bw(0,new W.jU())
t=b.bw(0,new W.jV())
this.b.ar(0,u)
s=this.c
s.ar(0,C.x)
s.ar(0,t)},
aO:function(a){return this.a.U(0,W.cw(a))},
as:function(a,b,c){var u=this,t=W.cw(a),s=u.c
if(s.U(0,H.i(t)+"::"+b))return u.d.hS(c)
else if(s.U(0,"*::"+b))return u.d.hS(c)
else{s=u.b
if(s.U(0,H.i(t)+"::"+b))return!0
else if(s.U(0,"*::"+b))return!0
else if(s.U(0,H.i(t)+"::*"))return!0
else if(s.U(0,"*::*"))return!0}return!1},
$iaz:1}
W.jU.prototype={
$1:function(a){return!C.a.U(C.q,H.N(a))},
$S:30}
W.jV.prototype={
$1:function(a){return C.a.U(C.q,H.N(a))},
$S:30}
W.k2.prototype={
as:function(a,b,c){if(this.el(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.U(0,b)
return!1}}
W.k3.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.N(a))},
$S:23}
W.k1.prototype={
aO:function(a){var u=J.V(a)
if(!!u.$icO)return!1
u=!!u.$ip
if(u&&W.cw(a)==="foreignObject")return!1
if(u)return!0
return!1},
as:function(a,b,c){if(b==="is"||C.b.a3(b,"on"))return!1
return this.aO(a)},
$iaz:1}
W.dD.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scS(J.dl(u.a,t))
u.c=t
return!0}u.scS(null)
u.c=s
return!1},
gI:function(a){return this.d},
scS:function(a){this.d=H.C(a,H.q(this,0))},
$ib1:1}
W.az.prototype={}
W.jS.prototype={$iq4:1}
W.f2.prototype={
co:function(a){new W.kd(this).$2(a,null)},
aY:function(a,b){if(b==null)J.lE(a)
else b.removeChild(a)},
hq:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.np(a)
n=o.a.getAttribute("is")
H.h(a,"$iT")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.H(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ai(r)}t="element unprintable"
try{t=J.ar(a)}catch(r){H.ai(r)}try{s=W.cw(a)
this.hp(H.h(a,"$iT"),b,p,t,s,H.h(o,"$iy"),H.N(n))}catch(r){if(H.ai(r) instanceof P.aK)throw r
else{this.aY(a,b)
window
q="Removing corrupted element "+H.i(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hp:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aY(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aO(a)){o.aY(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.as(a,"is",g)){o.aY(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga4(f)
t=H.d(u.slice(0),[H.q(u,0)])
for(s=f.ga4(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.c(t,s)
r=t[s]
q=o.a
p=J.ns(r)
H.N(r)
if(!q.as(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.i(e)+" "+r+'="'+H.i(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.V(a).$icU)o.co(a.content)},
$ipQ:1}
W.kd.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hq(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aY(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ai(s)
r=H.h(u,"$iE")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.h(t,"$iE")}},
$S:35}
W.ek.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eR.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
P.jY.prototype={
dv:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cn:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.V(a)
if(!!u.$iax)return new Date(a.a)
if(!!u.$io4)throw H.e(P.iV("structured clone of RegExp"))
if(!!u.$iaD)return a
if(!!u.$ibS)return a
if(!!u.$icy)return a
if(!!u.$icB)return a
if(!!u.$icI||!!u.$ibC||!!u.$icG)return a
if(!!u.$iy){t=q.dv(a)
s=q.b
if(t>=s.length)return H.c(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.F(a,new P.k_(p,q))
return p.a}if(!!u.$ib){t=q.dv(a)
p=q.b
if(t>=p.length)return H.c(p,t)
r=p[t]
if(r!=null)return r
return q.i3(a,t)}throw H.e(P.iV("structured clone of other type"))},
i3:function(a,b){var u,t=J.dh(a),s=t.gn(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cn(t.j(a,u)))
return r}}
P.k_.prototype={
$2:function(a,b){this.a.a[a]=this.b.cn(b)},
$S:5}
P.kq.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.jZ.prototype={}
P.fU.prototype={
gbg:function(){var u=this.b,t=H.aq(u,"x",0),s=W.T
return new H.hm(new H.d0(u,H.o(new P.fV(),{func:1,ret:P.R,args:[t]}),[t]),H.o(new P.fW(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.h(c,"$iT")
u=this.gbg()
J.nq(u.b.$1(J.fg(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aB(this.gbg().a)},
j:function(a,b){var u=this.gbg()
return u.b.$1(J.fg(u.a,b))},
gS:function(a){var u=P.lS(this.gbg(),!1,W.T)
return new J.as(u,u.length,[H.q(u,0)])},
$ax:function(){return[W.T]},
$ak:function(){return[W.T]},
$ab:function(){return[W.T]}}
P.fV.prototype={
$1:function(a){return!!J.V(H.h(a,"$iE")).$iT},
$S:27}
P.fW.prototype={
$1:function(a){return H.A(H.h(a,"$iE"),"$iT")},
$S:34}
P.jN.prototype={
gcl:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.F(t)
return H.C(u+t,H.q(this,0))},
gdh:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.F(t)
return H.C(u+t,H.q(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
p:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.V(b)
if(!!u.$iak){t=p.a
if(t==u.gbp(b)){s=p.b
if(s==u.gbs(b)){r=p.c
if(typeof t!=="number")return t.w()
if(typeof r!=="number")return H.F(r)
q=H.q(p,0)
if(H.C(t+r,q)===u.gcl(b)){t=p.d
if(typeof s!=="number")return s.w()
if(typeof t!=="number")return H.F(t)
u=H.C(s+t,q)===u.gdh(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t=this,s=t.a,r=J.dm(s),q=t.b,p=J.dm(q),o=t.c
if(typeof s!=="number")return s.w()
if(typeof o!=="number")return H.F(o)
u=H.q(t,0)
o=C.d.gG(H.C(s+o,u))
s=t.d
if(typeof q!=="number")return q.w()
if(typeof s!=="number")return H.F(s)
u=C.d.gG(H.C(q+s,u))
return P.ot(P.jL(P.jL(P.jL(P.jL(0,r),p),o),u))}}
P.ak.prototype={
gbp:function(a){return this.a},
gbs:function(a){return this.b},
gaG:function(a){return this.c},
gaD:function(a){return this.d}}
P.b4.prototype={$ib4:1}
P.hb.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ib4")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$ax:function(){return[P.b4]},
$ik:1,
$ak:function(){return[P.b4]},
$ib:1,
$ab:function(){return[P.b4]},
$aG:function(){return[P.b4]}}
P.b6.prototype={$ib6:1}
P.hS.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ib6")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$ax:function(){return[P.b6]},
$ik:1,
$ak:function(){return[P.b6]},
$ib:1,
$ab:function(){return[P.b6]},
$aG:function(){return[P.b6]}}
P.hZ.prototype={
gn:function(a){return a.length}}
P.cO.prototype={$icO:1}
P.iv.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.N(c)
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$ax:function(){return[P.f]},
$ik:1,
$ak:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aG:function(){return[P.f]}}
P.p.prototype={
gc0:function(a){return new P.fU(a,new W.ap(a))},
ac:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.az])
C.a.h(p,W.mr(null))
C.a.h(p,W.mt())
C.a.h(p,new W.k1())
c=new W.f2(new W.dU(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).i4(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ap(s)
q=p.gaH(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.b9.prototype={$ib9:1}
P.iI.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ib9")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$ax:function(){return[P.b9]},
$ik:1,
$ak:function(){return[P.b9]},
$ib:1,
$ab:function(){return[P.b9]},
$aG:function(){return[P.b9]}}
P.ev.prototype={}
P.ew.prototype={}
P.eG.prototype={}
P.eH.prototype={}
P.eS.prototype={}
P.eT.prototype={}
P.eZ.prototype={}
P.f_.prototype={}
P.Q.prototype={$ik:1,
$ak:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]}}
P.fm.prototype={
gn:function(a){return a.length}}
P.fn.prototype={
j:function(a,b){return P.bk(a.get(H.N(b)))},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bk(t.value[1]))}},
ga4:function(a){var u=H.d([],[P.f])
this.F(a,new P.fo(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.e(P.I("Not supported"))},
$aae:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
P.fo.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.fp.prototype={
gn:function(a){return a.length}}
P.bR.prototype={}
P.hT.prototype={
gn:function(a){return a.length}}
P.ej.prototype={}
P.dq.prototype={$idq:1}
P.dY.prototype={$idY:1}
P.c3.prototype={
a9:function(a,b,c){return a.uniform1f(b,c)},
bv:function(a,b,c){return a.uniform1i(b,c)},
W:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
iY:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
e7:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
e8:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic3:1}
P.e0.prototype={$ie0:1}
P.eb.prototype={$ieb:1}
P.im.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return P.bk(a.item(b))},
k:function(a,b,c){H.h(c,"$iy")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$ax:function(){return[[P.y,,,]]},
$ik:1,
$ak:function(){return[[P.y,,,]]},
$ib:1,
$ab:function(){return[[P.y,,,]]},
$aG:function(){return[[P.y,,,]]}}
P.eO.prototype={}
P.eP.prototype={}
O.a2.prototype={
bA:function(a){var u=this
u.sf8(H.d([],[a]))
u.scY(null)
u.scV(null)
u.scZ(null)},
cp:function(a,b,c){var u=this,t=H.aq(u,"a2",0)
H.o(b,{func:1,ret:P.R,args:[[P.k,t]]})
t={func:1,ret:-1,args:[P.l,[P.k,t]]}
H.o(a,t)
H.o(c,t)
u.scY(b)
u.scV(a)
u.scZ(c)},
bc:function(a,b){return this.cp(a,null,b)},
h_:function(a){var u
H.m(a,"$ik",[H.aq(this,"a2",0)],"$ak")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fk:function(a,b){var u
H.m(b,"$ik",[H.aq(this,"a2",0)],"$ak")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.as(u,u.length,[H.q(u,0)])},
H:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aq(s,"a2",0)
H.C(b,r)
r=[r]
if(H.H(s.h_(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.fk(t,H.d([b],r))}},
sf8:function(a){this.a=H.m(a,"$ib",[H.aq(this,"a2",0)],"$ab")},
scY:function(a){this.b=H.o(a,{func:1,ret:P.R,args:[[P.k,H.aq(this,"a2",0)]]})},
scV:function(a){this.c=H.o(a,{func:1,ret:-1,args:[P.l,[P.k,H.aq(this,"a2",0)]]})},
scZ:function(a){H.o(a,{func:1,ret:-1,args:[P.l,[P.k,H.aq(this,"a2",0)]]})},
$ik:1}
O.cF.prototype={
gn:function(a){return this.a.length},
gB:function(){var u=this.b
return u==null?this.b=D.a4():u},
aI:function(){var u=this.b
if(u!=null)u.J(null)},
ga2:function(a){var u=this.a
if(u.length>0)return C.a.gau(u)
else return V.dQ()},
dW:function(a){var u=this.a
if(a==null)C.a.h(u,V.dQ())
else C.a.h(u,a)
this.aI()},
cf:function(){var u=this.a
if(u.length>0){u.pop()
this.aI()}},
sbJ:function(a){this.a=H.m(a,"$ib",[V.ao],"$ab")}}
E.fs.prototype={}
E.an.prototype={
cE:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.as(u,u.length,[H.q(u,0)]);u.v();){t=u.d
if(t.f==null)t.cE()}},
saa:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gB().K(0,s.gdP())
u=s.c
if(u!=null)u.gB().h(0,s.gdP())
t=new D.M("shape",r,s.c,[F.e1])
t.b=!0
s.aj(t)}},
sb9:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gB().K(0,s.gdR())
u=s.f
s.f=a
if(a!=null)a.gB().h(0,s.gdR())
s.cE()
t=new D.M("technique",u,s.f,[O.bJ])
t.b=!0
s.aj(t)}},
saQ:function(a){var u,t,s=this
if(!J.P(s.r,a)){u=s.r
if(u!=null)u.gB().K(0,s.gdN())
if(a!=null)a.gB().h(0,s.gdN())
s.r=a
t=new D.M("mover",u,a,[U.aj])
t.b=!0
s.aj(t)}},
aw:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aU(0,b,s):null
if(!J.P(q,s.x)){u=s.x
s.x=q
t=new D.M("matrix",u,q,[V.ao])
t.b=!0
s.aj(t)}r=s.f
if(r!=null)r.aw(0,b)
for(r=s.y.a,r=new J.as(r,r.length,[H.q(r,0)]);r.v();)r.d.aw(0,b)},
aR:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga2(s))
else C.a.h(s.a,r.A(0,s.ga2(s)))
s.aI()
a.dX(t.f)
s=a.dy
u=(s&&C.a).gau(s)
if(u!=null&&t.d!=null)u.iO(a,t)
for(s=t.y.a,s=new J.as(s,s.length,[H.q(s,0)]);s.v();)s.d.aR(a)
a.dV()
a.dx.cf()},
aj:function(a){var u=this.z
if(u!=null)u.J(a)},
Z:function(){return this.aj(null)},
dQ:function(a){H.h(a,"$iD")
this.e=null
this.aj(a)},
iB:function(){return this.dQ(null)},
dS:function(a){this.aj(H.h(a,"$iD"))},
iC:function(){return this.dS(null)},
dO:function(a){this.aj(H.h(a,"$iD"))},
iA:function(){return this.dO(null)},
dM:function(a){this.aj(H.h(a,"$iD"))},
ix:function(){return this.dM(null)},
iw:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ik",[E.an],"$ak")
for(u=b.length,t=this.gdL(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bV()
o.sah(null)
o.saL(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.sah(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.Z()},
iz:function(a,b){var u,t
H.m(b,"$ik",[E.an],"$ak")
for(u=b.gS(b),t=this.gdL();u.v();)u.gI(u).gB().K(0,t)
this.Z()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
ses:function(a,b){this.y=H.m(b,"$ia2",[E.an],"$aa2")},
$icH:1}
E.i2.prototype={
eo:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ax(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cF()
t=[V.ao]
u.sbJ(H.d([],t))
u.b=null
u.gB().h(0,new E.i3(s))
s.cy=u
u=new O.cF()
u.sbJ(H.d([],t))
u.b=null
u.gB().h(0,new E.i4(s))
s.db=u
u=new O.cF()
u.sbJ(H.d([],t))
u.b=null
u.gB().h(0,new E.i5(s))
s.dx=u
s.shC(H.d([],[O.bJ]))
u=s.dy;(u&&C.a).h(u,null)
s.shx(new H.a0([P.f,A.cP]))},
giK:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga2(s)
u=t.db
u=t.z=s.A(0,u.ga2(u))
s=u}return s},
dX:function(a){var u=this.dy,t=a==null?(u&&C.a).gau(u):a;(u&&C.a).h(u,t)},
dV:function(){var u=this.dy
if(u.length>1)u.pop()},
shC:function(a){this.dy=H.m(a,"$ib",[O.bJ],"$ab")},
shx:function(a){this.fr=H.m(a,"$iy",[P.f,A.cP],"$ay")}}
E.i3.prototype={
$1:function(a){var u
H.h(a,"$iD")
u=this.a
u.ch=u.z=null},
$S:10}
E.i4.prototype={
$1:function(a){var u
H.h(a,"$iD")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:10}
E.i5.prototype={
$1:function(a){var u
H.h(a,"$iD")
u=this.a
u.cx=u.ch=null},
$S:10}
E.e7.prototype={
cz:function(a){H.h(a,"$iD")
this.e_()},
cw:function(){return this.cz(null)},
gij:function(){var u,t=this,s=Date.now(),r=C.d.a7(P.lM(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ax(s,!1)
return u/r},
d1:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.A()
if(typeof r!=="number")return H.F(r)
u=C.e.dw(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.A()
t=C.e.dw(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.mb(C.o,s.giQ())}},
e_:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.o(new E.iB(this),{func:1,ret:-1,args:[P.a9]})
C.E.eY(u)
C.E.hm(u,W.mH(t,P.a9))}},
iN:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.d1()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ax(r,!1)
s.y=P.lM(r-s.r.a).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aI()
r=s.db
C.a.sn(r.a,0)
r.aI()
r=s.dx
C.a.sn(r.a,0)
r.aI()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aR(p.e)}s=p.z
if(s!=null)s.J(null)}catch(q){u=H.ai(q)
t=H.cm(q)
P.lw("Error: "+H.i(u))
P.lw("Stack: "+H.i(t))
throw H.e(u)}}}
E.iB.prototype={
$1:function(a){var u
H.mU(a)
u=this.a
if(u.ch){u.ch=!1
u.iN()}},
$S:57}
Z.eh.prototype={$ipK:1}
Z.dr.prototype={
bj:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ai(s)
t=P.B('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.e(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.jl.prototype={$ipL:1}
Z.ds.prototype={
aP:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bj:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bj(a)},
e6:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aR:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.f],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.ar(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sf4:function(a){this.b=H.m(a,"$ib",[Z.bx],"$ab")},
$ipU:1}
Z.bx.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.i(H.cN(this.c))+"'")+"]"}}
Z.bL.prototype={
gcr:function(a){var u=this.a,t=(u&$.bo().a)!==0?3:0
if((u&$.bn().a)!==0)t+=3
if((u&$.bm().a)!==0)t+=3
if((u&$.bP().a)!==0)t+=2
if((u&$.bQ().a)!==0)t+=3
if((u&$.dj().a)!==0)t+=3
if((u&$.dk().a)!==0)t+=4
if((u&$.cp().a)!==0)++t
return(u&$.bl().a)!==0?t+4:t},
hU:function(a){var u,t=$.bo(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bP()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bQ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bl()
if((s&t.a)!==0)if(u===a)return t
return $.nf()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bL))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.f]),t=this.a
if((t&$.bo().a)!==0)C.a.h(u,"Pos")
if((t&$.bn().a)!==0)C.a.h(u,"Norm")
if((t&$.bm().a)!==0)C.a.h(u,"Binm")
if((t&$.bP().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bQ().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dj().a)!==0)C.a.h(u,"Clr3")
if((t&$.dk().a)!==0)C.a.h(u,"Clr4")
if((t&$.cp().a)!==0)C.a.h(u,"Weight")
if((t&$.bl().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fv.prototype={}
D.bV.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.D]}
H.o(b,u)
if(this.a==null)this.sah(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
K:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[D.D]})
u=s.a
u=u==null?null:C.a.U(u,b)
if(u===!0){u=s.a
t=(u&&C.a).K(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.U(u,b)
if(u===!0){u=s.b
t=(u&&C.a).K(u,b)||t}return t},
J:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.D()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.F(P.lS(u,!0,{func:1,ret:-1,args:[D.D]}),new D.fQ(q))
u=r.b
if(u!=null){r.saL(H.d([],[{func:1,ret:-1,args:[D.D]}]))
C.a.F(u,new D.fR(q))}return!0},
ak:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.J(u)}}},
sah:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")},
saL:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")}}
D.fQ.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.fR.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.D.prototype={}
D.bY.prototype={}
D.bZ.prototype={}
D.M.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.dt.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dt))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dH.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dH))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.ha.prototype={
iH:function(a){this.d.h(0,a.a)
return!1},
iD:function(a){this.d.K(0,a.a)
return!1},
shf:function(a){this.d=H.m(a,"$im7",[P.l],"$am7")}}
X.dL.prototype={}
X.hi.prototype={
aW:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.A()
u=b.b
t=q.ch
if(typeof u!=="number")return u.A()
s=new V.aa(o.a+n*m,o.b+u*t)
t=q.a.gbk()
r=new X.bB(a,V.bE(),q.x,t,s)
r.b=!0
q.z=new P.ax(p,!1)
q.x=s
return r},
ce:function(a,b){this.r=a.a
return!1},
b8:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ee()
if(typeof u!=="number")return u.ag()
this.r=(u&~t)>>>0
return!1},
b7:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.aW(a,b))
return!0},
iI:function(a){return!1},
fP:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dL(c,r.a.gbk(),b)
s.b=!0
t.J(s)
r.y=new P.ax(u,!1)
r.x=V.bE()}}
X.bA.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bA))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.H(this.b)?"Alt+":""
return u+(H.H(this.c)?"Shift+":"")}}
X.bB.prototype={}
X.hI.prototype={
bG:function(a,b,c){var u=this,t=new P.ax(Date.now(),!1),s=u.a.gbk(),r=new X.bB(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
ce:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.J(this.bG(a,b,!0))
return!0},
b8:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.ee()
if(typeof t!=="number")return t.ag()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.J(u.bG(a,b,!0))
return!0},
b7:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.bG(a,b,!1))
return!0},
iJ:function(a,b){return!1}}
X.hY.prototype={}
X.e9.prototype={}
X.iF.prototype={
aW:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.aa],"$ab")
u=new P.ax(Date.now(),!1)
t=a.length>0?a[0]:V.bE()
s=q.a.gbk()
r=new X.e9(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
iG:function(a){var u
H.m(a,"$ib",[V.aa],"$ab")
u=this.b
if(u==null)return!1
u.J(this.aW(a,!0))
return!0},
iE:function(a){var u
H.m(a,"$ib",[V.aa],"$ab")
u=this.c
if(u==null)return!1
u.J(this.aW(a,!0))
return!0},
iF:function(a){var u
H.m(a,"$ib",[V.aa],"$ab")
u=this.d
if(u==null)return!1
u.J(this.aW(a,!1))
return!0}}
X.ee.prototype={
gbk:function(){var u=this.a,t=C.n.gdi(u).c
t.toString
u=C.n.gdi(u).d
u.toString
return V.m5(0,0,t,u)},
cN:function(a){var u=a.keyCode,t=H.H(a.ctrlKey)||H.H(a.metaKey)
return new X.dH(u,new X.bA(t,a.altKey,a.shiftKey))},
aM:function(a){if(!H.H(a.ctrlKey))H.H(a.metaKey)
a.shiftKey},
bT:function(a){if(!H.H(a.ctrlKey))H.H(a.metaKey)
a.shiftKey},
aA:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.O()
u=t.top
if(typeof r!=="number")return r.O()
return new V.aa(s-q,r-u)},
aX:function(a){return new V.a7(a.movementX,a.movementY)},
bO:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.aa])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=C.e.al(r.pageX)
C.e.al(r.pageY)
p=o.left
C.e.al(r.pageX)
C.a.h(n,new V.aa(q-p,C.e.al(r.pageY)-o.top))}return n},
ay:function(a){var u=a.buttons,t=H.H(a.ctrlKey)||H.H(a.metaKey)
return new X.dt(u,new X.bA(t,a.altKey,a.shiftKey))},
bK:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.O()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.O()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fJ:function(a){this.f=!0},
ft:function(a){this.f=!1},
fD:function(a){H.h(a,"$iaf")
if(H.H(this.f)&&this.bK(a))a.preventDefault()},
fN:function(a){var u
H.h(a,"$ib3")
if(!H.H(this.f))return
u=this.cN(a)
this.b.iH(u)},
fL:function(a){var u
H.h(a,"$ib3")
if(!H.H(this.f))return
u=this.cN(a)
this.b.iD(u)},
fR:function(a){var u,t,s,r,q=this
H.h(a,"$iaf")
u=q.a
u.focus()
q.f=!0
q.aM(a)
if(H.H(q.x)){t=q.ay(a)
s=q.aX(a)
if(q.d.ce(t,s))a.preventDefault()
return}if(H.H(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ay(a)
r=q.aA(a)
if(q.c.ce(t,r))a.preventDefault()},
fV:function(a){var u,t,s,r=this
H.h(a,"$iaf")
r.aM(a)
u=r.ay(a)
if(H.H(r.x)){t=r.aX(a)
if(r.d.b8(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aA(a)
if(r.c.b8(u,s))a.preventDefault()},
fH:function(a){var u,t,s,r=this
H.h(a,"$iaf")
if(!r.bK(a)){r.aM(a)
u=r.ay(a)
if(H.H(r.x)){t=r.aX(a)
if(r.d.b8(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aA(a)
if(r.c.b8(u,s))a.preventDefault()}},
fT:function(a){var u,t,s,r=this
H.h(a,"$iaf")
r.aM(a)
u=r.ay(a)
if(H.H(r.x)){t=r.aX(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aA(a)
if(r.c.b7(u,s))a.preventDefault()},
fF:function(a){var u,t,s,r=this
H.h(a,"$iaf")
if(!r.bK(a)){r.aM(a)
u=r.ay(a)
if(H.H(r.x)){t=r.aX(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aA(a)
if(r.c.b7(u,s))a.preventDefault()}},
fX:function(a){var u,t,s=this
H.h(a,"$ibb")
s.aM(a)
u=new V.a7((a&&C.D).gi6(a),C.D.gi7(a)).t(0,180)
if(H.H(s.x)){if(s.d.iI(u))a.preventDefault()
return}if(H.H(s.r))return
t=s.aA(a)
if(s.c.iJ(u,t))a.preventDefault()},
fZ:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ay(s.y)
t=s.aA(s.y)
s.d.fP(u,t,r)}},
hb:function(a){var u,t=this
H.h(a,"$iaW")
t.a.focus()
t.f=!0
t.bT(a)
u=t.bO(a)
if(t.e.iG(u))a.preventDefault()},
h7:function(a){var u
H.h(a,"$iaW")
this.bT(a)
u=this.bO(a)
if(this.e.iE(u))a.preventDefault()},
h9:function(a){var u
H.h(a,"$iaW")
this.bT(a)
u=this.bO(a)
if(this.e.iF(u))a.preventDefault()},
seZ:function(a){this.z=H.m(a,"$ib",[[P.cS,P.U]],"$ab")}}
D.dy.prototype={$iad:1,$icH:1}
D.ad.prototype={$icH:1}
D.dI.prototype={
a_:function(a){var u=this.x
if(u!=null)u.J(a)},
cX:function(a){var u
H.h(a,"$iD")
u=this.y
if(u!=null)u.J(a)},
fO:function(){return this.cX(null)},
h1:function(a){var u,t,s
H.m(a,"$ik",[D.ad],"$ak")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(s==null||this.ev(s))return!1}return!0},
fm:function(a,b){var u,t,s,r,q,p,o,n=D.ad
H.m(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gcW(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=H.h(b[q],"$iad")
if(p instanceof D.bI)C.a.h(this.r,p)
o=p.go
if(o==null){o=new D.bV()
o.sah(null)
o.saL(null)
o.c=null
o.d=0
p.go=o}H.o(t,s)
if(o.a==null)o.sah(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bY([n])
n.b=!0
this.a_(n)},
h5:function(a,b){var u,t,s,r=D.ad
H.m(b,"$ik",[r],"$ak")
for(u=b.gS(b),t=this.gcW();u.v();){s=u.gI(u)
C.a.K(this.e,s)
s.gB().K(0,t)}r=new D.bZ([r])
r.b=!0
this.a_(r)},
ev:function(a){var u=C.a.U(this.r,a)
return u},
sew:function(a){this.e=H.m(a,"$ib",[D.dy],"$ab")},
shc:function(a){this.f=H.m(a,"$ib",[D.dX],"$ab")},
sex:function(a){this.r=H.m(a,"$ib",[D.bI],"$ab")},
$ak:function(){return[D.ad]},
$aa2:function(){return[D.ad]}}
D.dX.prototype={$iad:1,$icH:1}
D.bI.prototype={
a_:function(a){var u
H.h(a,"$iD")
u=this.go
if(u!=null)u.J(a)},
fv:function(){return this.a_(null)},
gai:function(){return 12},
$iad:1,
$icH:1}
V.a3.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
V.aZ.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aZ))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.fP.prototype={}
V.dP.prototype={
af:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.t])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dP))return!1
u=b.a
t=$.K().a
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
i:function(a){var u,t,s,r,q=this,p=[P.t],o=V.cj(H.d([q.a,q.d,q.r],p),3,0),n=V.cj(H.d([q.b,q.e,q.x],p),3,0),m=V.cj(H.d([q.c,q.f,q.y],p),3,0)
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
V.ao.prototype={
af:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.t])
return t},
dF:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.K().a)return V.dQ()
u=1/b1
t=-n
s=-a0
return V.bj((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
A:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bj(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bu:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.J(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bt:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a1(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ao))return!1
u=b.a
t=$.K().a
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
i:function(a){return this.M()},
E:function(a){var u,t,s,r,q,p=this,o=[P.t],n=V.cj(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cj(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cj(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cj(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
M:function(){return this.E("")}}
V.aa.prototype={
O:function(a,b){return new V.aa(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}}
V.a1.prototype={
w:function(a,b){return new V.a1(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a,b){return new V.a1(this.a-b.a,this.b-b.b,this.c-b.c)},
A:function(a,b){return new V.a1(this.a*b,this.b*b,this.c*b)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
V.bG.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bG))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.e_.prototype={
gav:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e_))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.a7.prototype={
b3:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.F(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.F(t)
return s*r+u*t},
A:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.A()
u=this.b
if(typeof u!=="number")return u.A()
return new V.a7(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.K().a){u=$.mj
return u==null?$.mj=new V.a7(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.a7(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=this.a
s=$.K()
s.toString
if(typeof u!=="number")return u.O()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.O()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}}
V.J.prototype={
b3:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cd:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.J(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aC:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.J(u*t-s*r,s*q-p*t,p*r-u*q)},
w:function(a,b){return new V.J(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a){return new V.J(-this.a,-this.b,-this.c)},
A:function(a,b){return new V.J(this.a*b,this.b*b,this.c*b)},
t:function(a,b){if(Math.abs(b-0)<$.K().a)return V.d_()
return new V.J(this.a/b,this.b/b,this.c/b)},
dG:function(){var u=$.K().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.J))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
V.ca.prototype={
b3:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ca))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
U.fw.prototype={
bB:function(a){var u=V.pJ(a,this.c,this.b)
return u},
gB:function(){var u=this.y
return u==null?this.y=D.a4():u},
X:function(a){var u=this.y
if(u!=null)u.J(a)},
seb:function(a,b){},
sdH:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.K().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bB(u)}s=new D.M("maximumLocation",s,t.b,[P.t])
s.b=!0
t.X(s)}},
sdJ:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.K().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bB(u)}s=new D.M("minimumLocation",s,t.c,[P.t])
s.b=!0
t.X(s)}},
sa1:function(a,b){var u,t=this
b=t.bB(b)
u=t.d
if(!(Math.abs(u-b)<$.K().a)){t.d=b
u=new D.M("location",u,b,[P.t])
u.b=!0
t.X(u)}},
sdI:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.K().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.M("maximumVelocity",r,a,[P.t])
r.b=!0
s.X(r)}},
sY:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.K().a)){u.f=a
t=new D.M("velocity",t,a,[P.t])
t.b=!0
u.X(t)}},
sdj:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.K().a)){this.x=a
u=new D.M("dampening",u,a,[P.t])
u.b=!0
this.X(u)}},
aw:function(a,b){var u,t,s,r=this,q=r.f,p=$.K().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa1(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.K().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sY(u)}}}
U.dv.prototype={
gB:function(){var u=this.b
return u==null?this.b=D.a4():u},
aU:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dv))return!1
return J.P(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.cA.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.a4():u},
X:function(a){var u
H.h(a,"$iD")
u=this.e
if(u!=null)u.J(a)},
ao:function(){return this.X(null)},
ez:function(a,b){var u,t,s,r,q,p,o,n=U.aj
H.m(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gbe(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gB()
o.toString
H.o(t,s)
if(o.a==null)o.sah(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bY([n])
n.b=!0
this.X(n)},
h3:function(a,b){var u,t,s=U.aj
H.m(b,"$ik",[s],"$ak")
for(u=b.gS(b),t=this.gbe();u.v();)u.gI(u).gB().K(0,t)
s=new D.bZ([s])
s.b=!0
this.X(s)},
aU:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.P()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.as(r,r.length,[H.q(r,0)]),u=null;r.v();){q=r.d
if(q!=null){t=q.aU(0,b,c)
if(t!=null)u=u==null?t:t.A(0,u)}}s.f=u==null?V.dQ():u
r=s.e
if(r!=null)r.ak(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cA))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.P(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ak:function(){return[U.aj]},
$aa2:function(){return[U.aj]},
$iaj:1}
U.aj.prototype={}
U.ef.prototype={
gB:function(){var u=this.fx
return u==null?this.fx=D.a4():u},
X:function(a){var u
H.h(a,"$iD")
u=this.fx
if(u!=null)u.J(a)},
ao:function(){return this.X(null)},
hV:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.a4():t
u.h(0,s.gfe())
u=s.a.c
t=u.d
u=t==null?u.d=D.a4():t
u.h(0,s.gfg())
u=s.a.c
t=u.c
u=t==null?u.c=D.a4():t
u.h(0,s.gfi())
u=s.a.d
t=u.f
u=t==null?u.f=D.a4():t
u.h(0,s.gf9())
u=s.a.d
t=u.d
u=t==null?u.d=D.a4():t
u.h(0,s.gfb())
u=s.a.e
t=u.b
u=t==null?u.b=D.a4():t
u.h(0,s.ghI())
u=s.a.e
t=u.d
u=t==null?u.d=D.a4():t
u.h(0,s.ghG())
u=s.a.e
t=u.c
u=t==null?u.c=D.a4():t
u.h(0,s.ghE())
return!0},
aq:function(a){var u=a.a,t=a.b
if(H.H(this.f)){if(typeof u!=="number")return u.R()
u=-u}if(H.H(this.r)){if(typeof t!=="number")return t.R()
t=-t}return new V.a7(u,t)},
ff:function(a){var u=this
a=H.A(H.h(a,"$iD"),"$ibB")
if(!J.P(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fh:function(a){var u,t,s,r,q,p,o,n=this
a=H.A(H.h(a,"$iD"),"$ibB")
if(!H.H(n.cx))return
if(H.H(n.ch)){u=a.d.O(0,a.y)
u=new V.a7(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.H(n.e)){u=a.c
t=a.d.O(0,a.y)
u=n.aq(new V.a7(t.a,t.b).A(0,2).t(0,u.gav()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.R()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.R()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.O(0,a.y)
r=n.aq(new V.a7(s.a,s.b).A(0,2).t(0,u.gav()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa1(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.O(0,a.z)
n.dx=n.aq(new V.a7(t.a,t.b).A(0,2).t(0,u.gav()))}n.ao()},
fj:function(a){var u,t,s,r=this
H.h(a,"$iD")
if(!H.H(r.cx))return
r.cx=!1
if(H.H(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.R()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.R()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sY(-t*10*u)
r.ao()}},
fa:function(a){var u=this
if(H.A(H.h(a,"$iD"),"$idL").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fc:function(a){var u,t,s,r,q,p,o,n=this
a=H.A(H.h(a,"$iD"),"$ibB")
if(!J.P(n.d,a.x.b))return
u=a.c
t=a.d
s=t.O(0,a.y)
r=n.aq(new V.a7(s.a,s.b).A(0,2).t(0,u.gav()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa1(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.O(0,a.z)
n.dx=n.aq(new V.a7(t.a,t.b).A(0,2).t(0,u.gav()))
n.ao()},
hJ:function(a){var u=this
H.h(a,"$iD")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hH:function(a){var u,t,s,r,q,p,o,n=this
a=H.A(H.h(a,"$iD"),"$ie9")
if(!H.H(n.cx))return
if(H.H(n.ch)){u=a.d.O(0,a.y)
u=new V.a7(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.H(n.e)){u=a.c
t=a.d.O(0,a.y)
u=n.aq(new V.a7(t.a,t.b).A(0,2).t(0,u.gav()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.R()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.R()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.O(0,a.y)
r=n.aq(new V.a7(s.a,s.b).A(0,2).t(0,u.gav()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa1(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.O(0,a.z)
n.dx=n.aq(new V.a7(t.a,t.b).A(0,2).t(0,u.gav()))}n.ao()},
hF:function(a){var u,t,s,r=this
H.h(a,"$iD")
if(!H.H(r.cx))return
r.cx=!1
if(H.H(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.R()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.R()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sY(-t*10*u)
r.ao()}},
aU:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.dy=p
u=b.y
r.c.aw(0,u)
r.b.aw(0,u)
q=V.lU(r.b.d)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.A(0,V.bj(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iaj:1}
M.dB.prototype={
ax:function(a){var u
H.h(a,"$iD")
u=this.y
if(u!=null)u.J(a)},
eA:function(){return this.ax(null)},
fz:function(a,b){var u,t,s,r,q,p,o,n=E.an
H.m(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gap(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bV()
o.sah(null)
o.saL(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.sah(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bY([n])
n.b=!0
this.ax(n)},
fB:function(a,b){var u,t,s=E.an
H.m(b,"$ik",[s],"$ak")
for(u=b.gS(b),t=this.gap();u.v();)u.gI(u).gB().K(0,t)
s=new D.bZ([s])
s.b=!0
this.ax(s)},
sb9:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gB().K(0,t.gap())
u=t.d
t.d=a
if(a!=null)a.gB().h(0,t.gap())
s=new D.M("technique",u,t.d,[O.bJ])
s.b=!0
t.ax(s)}},
gB:function(){var u=this.y
return u==null?this.y=D.a4():u},
aR:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.dX(a1.d)
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
if(typeof s!=="number")return H.F(s)
o=C.e.al(p*s)
p=q.b
if(typeof r!=="number")return H.F(r)
n=C.e.al(p*r)
p=C.e.al(q.c*s)
a2.c=p
q=C.e.al(q.d*r)
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
i=V.bj(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.dW(i)
t=$.m_
if(t==null){t=V.m1()
q=V.mn()
p=$.mk
if(p==null)p=$.mk=new V.J(0,0,-1)
h=p.t(0,Math.sqrt(p.D(p)))
q=q.aC(h)
g=q.t(0,Math.sqrt(q.D(q)))
f=h.aC(g)
e=new V.J(t.a,t.b,t.c)
d=g.R(0).D(e)
c=f.R(0).D(e)
b=h.R(0).D(e)
t=V.bj(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.m_=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.aU(0,a2,u)
if(a0!=null)a=a0.A(0,a)}a2.db.dW(a)
u=a1.d
if(u!=null)u.aw(0,a2)
for(u=a1.e.a,u=new J.as(u,u.length,[H.q(u,0)]);u.v();)u.d.aw(0,a2)
for(u=a1.e.a,u=new J.as(u,u.length,[H.q(u,0)]);u.v();)u.d.aR(a2)
a1.b.toString
a2.cy.cf()
a2.db.cf()
a1.c.toString
a2.dV()},
seQ:function(a,b){this.e=H.m(b,"$ia2",[E.an],"$aa2")},
$ipR:1}
A.dp.prototype={}
A.fl.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ia:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
i9:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.am.prototype={
gam:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
p:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.am))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.hp.prototype={
en:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.a6("")
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
A.p1(c3,u)
A.p3(c3,u)
A.p2(c3,u)
A.p5(c3,u)
A.p6(c3,u)
A.p4(c3,u)
A.p7(c3,u)
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
m=A.p0(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cO(n,35633)
b8.f=b8.cO(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.H(H.ln(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.z(P.B("Failed to link shader: "+H.i(l)))}b8.hu()
b8.hw()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.A(b8.y.V(0,"invViewMat"),"$iaA")
if(t)b8.dy=H.A(b8.y.V(0,"objMat"),"$iaA")
if(r)b8.fr=H.A(b8.y.V(0,"viewObjMat"),"$iaA")
b8.fy=H.A(b8.y.V(0,"projViewObjMat"),"$iaA")
if(c3.ry)b8.k1=H.A(b8.y.V(0,"txt2DMat"),"$icY")
if(c3.x1)b8.k2=H.A(b8.y.V(0,"txtCubeMat"),"$iaA")
if(c3.x2)b8.k3=H.A(b8.y.V(0,"colorMat"),"$iaA")
b8.seM(H.d([],[A.aA]))
t=c3.y2
if(t>0){b8.k4=H.h(b8.y.V(0,"bendMatCount"),"$iaG")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.z(P.B(c0+q+c1));(s&&C.a).h(s,H.A(j,"$iaA"))}}if(c3.a.a)b8.r2=H.A(b8.y.V(0,"emissionClr"),"$iZ")
if(c3.b.a)b8.x1=H.A(b8.y.V(0,"ambientClr"),"$iZ")
if(c3.c.a)b8.y2=H.A(b8.y.V(0,"diffuseClr"),"$iZ")
if(c3.d.a)b8.dl=H.A(b8.y.V(0,"invDiffuseClr"),"$iZ")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.dn=H.A(b8.y.V(0,"shininess"),"$iah")
if(t)b8.dm=H.A(b8.y.V(0,"specularClr"),"$iZ")}if(c3.cy){b8.dq=H.A(b8.y.V(0,"envSampler"),"$ic7")
if(c3.r.a)b8.dr=H.A(b8.y.V(0,"reflectClr"),"$iZ")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.ds=H.A(b8.y.V(0,"refraction"),"$iah")
if(t)b8.dt=H.A(b8.y.V(0,"refractClr"),"$iZ")}}if(c3.y.a)b8.du=H.A(b8.y.V(0,"alpha"),"$iah")
t=P.l
s=[t,A.aG]
b8.seW(new H.a0(s))
b8.seX(new H.a0([t,[P.b,A.c4]]))
b8.shd(new H.a0(s))
b8.she(new H.a0([t,[P.b,A.c5]]))
b8.shz(new H.a0(s))
b8.shA(new H.a0([t,[P.b,A.c8]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.c4],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ag()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.z(P.B(c0+d+c1))
H.A(j,"$iZ")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.z(P.B(c0+d+c1))
H.A(c,"$iZ")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.z(P.B(c0+d+c1))
H.A(b,"$iZ")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.z(P.B(c0+d+c1))
H.A(j,"$iZ")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.z(P.B(c0+d+c1))
H.A(c,"$iZ")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.z(P.B(c0+o+c1))
H.A(b,"$ic6")
a2=b}else a2=b9
C.a.h(e,new A.c4(a1,a0,a,j,c,a2))}b8.c4.k(0,g,e)
q=b8.c3
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.z(P.B(c0+o+c1))
q.k(0,g,H.h(j,"$iaG"))}for(t=c3.Q,s=t.length,r=[A.c5],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.z(P.B(c0+o+c1))
H.A(j,"$iZ")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.z(P.B(c0+o+c1))
H.A(c,"$iZ")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.z(P.B(c0+o+c1))
H.A(b,"$iZ")
if(typeof g!=="number")return g.ag()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.z(P.B(c0+o+c1))
H.A(a3,"$icY")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.z(P.B(c0+o+c1))
H.A(a3,"$ic7")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.z(P.B(c0+o+c1))
H.A(a3,"$ic7")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.z(P.B(c0+o+c1))
H.A(a5,"$icX")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.j(0,o)
if(a3==null)H.z(P.B(c0+o+c1))
H.A(a3,"$iah")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.j(0,o)
if(a5==null)H.z(P.B(c0+o+c1))
H.A(a5,"$iah")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.j(0,o)
if(a8==null)H.z(P.B(c0+o+c1))
H.A(a8,"$iah")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.c5(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.c6.k(0,g,e)
q=b8.c5
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.z(P.B(c0+o+c1))
q.k(0,g,H.h(j,"$iaG"))}for(t=c3.ch,s=t.length,r=[A.c8],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.z(P.B(c0+o+c1))
H.A(j,"$iZ")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.z(P.B(c0+o+c1))
H.A(c,"$iZ")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.z(P.B(c0+o+c1))
H.A(b,"$iZ")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.z(P.B(c0+o+c1))
H.A(a3,"$iZ")
if(typeof g!=="number")return g.ag()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.z(P.B(c0+o+c1))
H.A(a5,"$iZ")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.z(P.B(c0+o+c1))
H.A(a8,"$iZ")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.j(0,o)
if(b2==null)H.z(P.B(c0+o+c1))
H.A(b2,"$iah")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.j(0,o)
if(b3==null)H.z(P.B(c0+o+c1))
H.A(b3,"$iah")
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
if(a5==null)H.z(P.B(c0+d+c1))
H.A(a5,"$icX")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.j(0,d)
if(a5==null)H.z(P.B(c0+d+c1))
H.A(a5,"$iah")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.j(0,d)
if(a8==null)H.z(P.B(c0+d+c1))
H.A(a8,"$iah")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.j(0,d)
if(a5==null)H.z(P.B(c0+d+c1))
H.A(a5,"$iah")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.j(0,d)
if(a8==null)H.z(P.B(c0+d+c1))
H.A(a8,"$iah")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.j(0,d)
if(b2==null)H.z(P.B(c0+d+c1))
H.A(b2,"$iah")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.j(0,d)
if(a5==null)H.z(P.B(c0+d+c1))
H.A(a5,"$ic6")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.z(P.B(c0+o+c1))
H.A(a5,"$ic6")
a6=a5}else a6=b9
C.a.h(e,new A.c8(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.c8.k(0,g,e)
q=b8.c7
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.z(P.B(c0+o+c1))
q.k(0,g,H.h(j,"$iaG"))}}},
hs:function(a,b){},
seM:function(a){this.r1=H.m(a,"$ib",[A.aA],"$ab")},
seW:function(a){this.c3=H.m(a,"$iy",[P.l,A.aG],"$ay")},
seX:function(a){this.c4=H.m(a,"$iy",[P.l,[P.b,A.c4]],"$ay")},
shd:function(a){this.c5=H.m(a,"$iy",[P.l,A.aG],"$ay")},
she:function(a){this.c6=H.m(a,"$iy",[P.l,[P.b,A.c5]],"$ay")},
shz:function(a){this.c7=H.m(a,"$iy",[P.l,A.aG],"$ay")},
shA:function(a){this.c8=H.m(a,"$iy",[P.l,[P.b,A.c8]],"$ay")}}
A.aL.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.aP.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.aT.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.hs.prototype={
i:function(a){return this.b1}}
A.c4.prototype={}
A.c5.prototype={}
A.c8.prototype={}
A.cP.prototype={
eq:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cO:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.H(H.ln(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.e(P.B("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
hu:function(){var u,t,s,r=this,q=H.d([],[A.dp]),p=r.a,o=H.ac(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dp(p,t.name,s))}r.x=new A.fl(q)},
hw:function(){var u,t,s,r=this,q=H.d([],[A.ea]),p=r.a,o=H.ac(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.i5(t.type,t.size,t.name,s))}r.y=new A.iS(q)},
aK:function(a,b,c){var u=this.a
if(a===1)return new A.aG(u,b,c)
else return A.l9(u,this.r,b,a,c)},
eT:function(a,b,c){var u=this.a
if(a===1)return new A.c6(u,b,c)
else return A.l9(u,this.r,b,a,c)},
eU:function(a,b,c){var u=this.a
if(a===1)return new A.c7(u,b,c)
else return A.l9(u,this.r,b,a,c)},
bi:function(a,b){return new P.eq(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
i5:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aK(b,c,d)
case 5121:return u.aK(b,c,d)
case 5122:return u.aK(b,c,d)
case 5123:return u.aK(b,c,d)
case 5124:return u.aK(b,c,d)
case 5125:return u.aK(b,c,d)
case 5126:return new A.ah(u.a,c,d)
case 35664:return new A.iO(u.a,c,d)
case 35665:return new A.Z(u.a,c,d)
case 35666:return new A.cX(u.a,c,d)
case 35667:return new A.iP(u.a,c,d)
case 35668:return new A.iQ(u.a,c,d)
case 35669:return new A.iR(u.a,c,d)
case 35674:return new A.iT(u.a,c,d)
case 35675:return new A.cY(u.a,c,d)
case 35676:return new A.aA(u.a,c,d)
case 35678:return u.eT(b,c,d)
case 35680:return u.eU(b,c,d)
case 35670:throw H.e(u.bi("BOOL",c))
case 35671:throw H.e(u.bi("BOOL_VEC2",c))
case 35672:throw H.e(u.bi("BOOL_VEC3",c))
case 35673:throw H.e(u.bi("BOOL_VEC4",c))
default:throw H.e(P.B("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.ea.prototype={}
A.iS.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
V:function(a,b){var u=this.j(0,b)
if(u==null)throw H.e(P.B("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.M()},
M:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aG.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.iP.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.iQ.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.iR.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.iN.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
shL:function(a){H.m(a,"$ib",[P.l],"$ab")}}
A.ah.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.iO.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.Z.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.cX.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.iT.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.cY.prototype={
an:function(a){var u=new Float32Array(H.ce(H.m(a,"$ib",[P.t],"$ab")))
C.c.e7(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.aA.prototype={
an:function(a){var u=new Float32Array(H.ce(H.m(a,"$ib",[P.t],"$ab")))
C.c.e8(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.c6.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.c7.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.kf.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cd(s.b,b).cd(s.d.cd(s.c,b),c)
a.sa1(0,new V.a1(r.a,r.b,r.c))
a.se2(r.t(0,Math.sqrt(r.D(r))))
s=1-b
u=1-c
a.sdf(new V.bG(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:7}
F.kr.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:21}
F.kt.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.F(p)
s=-s*p
u=r*p
a.sa1(0,new V.a1(s,u,q))
u=new V.J(s,u,q)
a.se2(u.t(0,Math.sqrt(u.D(u))))
a.sdf(new V.bG(1-c,2+c,-1,-1))},
$S:7}
F.ku.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:20}
F.kv.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:20}
F.kO.prototype={
$2:function(a,b){return 0},
$S:21}
F.kP.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.F(s)
u=a.f
t=new V.J(u.a,u.b,u.c)
s=t.t(0,Math.sqrt(t.D(t))).A(0,this.b+s)
a.sa1(0,new V.a1(s.a,s.b,s.c))},
$S:7}
F.kR.prototype={
$1:function(a){return new V.a1(Math.cos(a),Math.sin(a),0)},
$S:17}
F.kD.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.a1(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:17}
F.ks.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lB(n.$1(o),m)
m=J.lB(n.$1(o+3.141592653589793/p.c),m).O(0,l)
m=new V.J(m.a,m.b,m.c)
u=m.t(0,Math.sqrt(m.D(m)))
n=$.ml
if(n==null){n=new V.J(1,0,0)
$.ml=n
t=n}else t=n
n=u.aC(!J.P(u,t)?V.mo():t)
s=n.t(0,Math.sqrt(n.D(n)))
n=s.aC(u)
t=n.t(0,Math.sqrt(n.D(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.A(0,n*m)
m=s.A(0,q*m)
a.sa1(0,l.w(0,new V.a1(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:7}
F.a8.prototype={
b_:function(){var u=this
if(!u.gb0()){C.a.K(u.a.a.d.b,u)
u.a.a.Z()}u.bQ()
u.bR()
u.hj()},
bU:function(a){this.a=a
C.a.h(a.d.b,this)},
bV:function(a){this.b=a
C.a.h(a.d.c,this)},
ht:function(a){this.c=a
C.a.h(a.d.d,this)},
bQ:function(){var u=this.a
if(u!=null){C.a.K(u.d.b,this)
this.a=null}},
bR:function(){var u=this.b
if(u!=null){C.a.K(u.d.c,this)
this.b=null}},
hj:function(){var u=this.c
if(u!=null){C.a.K(u.d.d,this)
this.c=null}},
gb0:function(){return this.a==null||this.b==null||this.c==null},
eL:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d_()
if(q!=null)s=s.w(0,q)
if(u!=null)s=s.w(0,u)
if(t!=null)s=s.w(0,t)
if(s.dG())return
return s.t(0,Math.sqrt(s.D(s)))},
eP:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.O(0,q)
r=new V.J(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.D(r)))
r=t.O(0,q)
r=new V.J(r.a,r.b,r.c)
r=s.aC(r.t(0,Math.sqrt(r.D(r))))
return r.t(0,Math.sqrt(r.D(r)))},
c_:function(){var u,t=this
if(t.d!=null)return!0
u=t.eL()
if(u==null){u=t.eP()
if(u==null)return!1}t.d=u
t.a.a.Z()
return!0},
eK:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d_()
if(q!=null)s=s.w(0,q)
if(u!=null)s=s.w(0,u)
if(t!=null)s=s.w(0,t)
if(s.dG())return
return s.t(0,Math.sqrt(s.D(s)))},
eO:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.K().a){l=d.O(0,g)
l=new V.J(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.D(l)))
if(s.a-t.a<0)q=q.R(0)}else{p=(l-u.b)/r
l=d.O(0,g).A(0,p).w(0,g).O(0,j)
l=new V.J(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.D(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.R(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.D(l)))
l=o.aC(q)
l=l.t(0,Math.sqrt(l.D(l))).aC(o)
q=l.t(0,Math.sqrt(l.D(l)))}return q},
bY:function(){var u,t=this
if(t.e!=null)return!0
u=t.eK()
if(u==null){u=t.eO()
if(u==null)return!1}t.e=u
t.a.a.Z()
return!0},
gi_:function(a){var u=this
if(J.P(u.a,u.b))return!0
if(J.P(u.b,u.c))return!0
if(J.P(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u,t,s=this
if(s.gb0())return a+"disposed"
u=a+C.b.ae(J.ar(s.a.e),0)+", "+C.b.ae(J.ar(s.b.e),0)+", "+C.b.ae(J.ar(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
M:function(){return this.E("")}}
F.fS.prototype={}
F.ij.prototype={
b5:function(a,b,c){var u,t=b.a
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
F.bi.prototype={
b_:function(){var u=this
if(!u.gb0()){C.a.K(u.a.a.c.b,u)
u.a.a.Z()}u.bQ()
u.bR()},
bU:function(a){this.a=a
C.a.h(a.c.b,this)},
bV:function(a){this.b=a
C.a.h(a.c.c,this)},
bQ:function(){var u=this.a
if(u!=null){C.a.K(u.c.b,this)
this.a=null}},
bR:function(){var u=this.b
if(u!=null){C.a.K(u.c.c,this)
this.b=null}},
gb0:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){if(this.gb0())return a+"disposed"
return a+C.b.ae(J.ar(this.a.e),0)+", "+C.b.ae(J.ar(this.b.e),0)},
M:function(){return this.E("")}}
F.hc.prototype={}
F.iM.prototype={
b5:function(a,b,c){var u,t=b.a
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
F.bD.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ae(J.ar(u.e),0)},
M:function(){return this.E("")}}
F.e1.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.a4():u},
b6:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.u()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){r=g[s]
h.a.h(0,r.i2())}h.a.u()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bD()
if(n.a==null)H.z(P.B("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.J(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.w()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.nK(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.w()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cx(l,k,i)}g=h.e
if(g!=null)g.ak(0)},
at:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.at()||!1
if(!t.a.at())u=!1
s=t.e
if(s!=null)s.ak(0)
return u},
it:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.q(o,0)])
for(o=[F.av];u.length!==0;){t=C.a.gig(u)
C.a.dY(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.c(u,r)
q=u[r]
if(q!=null&&a.b5(0,t,q)){C.a.h(s,q)
C.a.dY(u,r)}}if(s.length>1)b.b6(s)}}p.a.u()
p.c.cj()
p.d.cj()
p.b.iM()
p.c.ck(new F.iM())
p.d.ck(new F.ij())
o=p.e
if(o!=null)o.ak(0)},
bW:function(){this.it(new F.je(),new F.hQ())},
c9:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.c9()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.c(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdK(new V.J(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.J(s,r,o).t(0,Math.sqrt(s*s+r*r+o*o))
if(!J.P(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.J(null)}}}}o=p.e
if(o!=null)o.ak(0)},
hY:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bo()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bn().a)!==0)++s
if((t&$.bm().a)!==0)++s
if((t&$.bP().a)!==0)++s
if((t&$.bQ().a)!==0)++s
if((t&$.dj().a)!==0)++s
if((t&$.dk().a)!==0)++s
if((t&$.cp().a)!==0)++s
if((t&$.bl().a)!==0)++s
r=a3.gcr(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.t
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dr])
for(n=0,m=0;m<s;++m){l=a3.hU(m)
k=l.gcr(l)
C.a.k(o,m,new Z.dr(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.c(u,j)
i=u[j].ir(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.ce(p)),35044)
u.bindBuffer(a0,null)
e=new Z.ds(new Z.eh(a0,f),o,a3)
e.sf4(H.d([],[Z.bx]))
if(a.b.b.length!==0){t=P.l
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.u()
C.a.h(d,c.e)}b=Z.lc(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bx(0,d.length,b))}if(a.c.b.length!==0){t=P.l
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.u()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.u()
C.a.h(d,c.e)}b=Z.lc(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bx(1,d.length,b))}if(a.d.b.length!==0){t=P.l
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.u()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.u()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.c(c,m)
c=c[m].c
c.a.a.u()
C.a.h(d,c.e)}b=Z.lc(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bx(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.f])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.E(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.E(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.E(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.E(t))}return C.a.m(s,"\n")},
Z:function(){var u=this.e
if(u!=null)u.J(null)},
$ipS:1}
F.ib.prototype={
hP:function(a){var u,t,s,r,q,p,o
H.m(a,"$ib",[F.av],"$ab")
u=H.d([],[F.a8])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.c(a,p)
p=a[p]
if(q>=o)return H.c(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.cx(s,p,o))}}return u},
hQ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.av],"$ab")
u=H.d([],[F.a8])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.c(c,r)
l=c[r];++r
if(r>=m)return H.c(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.c(c,j)
i=c[j]
if(s<0||s>=m)return H.c(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.cx(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cx(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cx(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cx(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
ck:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b5(0,p,n)){p.b_()
break}}}}},
cj:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.gi_(s)
if(t)s.b_()}},
at:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].c_())s=!1
return s},
bZ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].bY())s=!1
return s},
c9:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.J(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.J(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.J(null)}},
i:function(a){return this.M()},
E:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].E(a))
return C.a.m(r,"\n")},
M:function(){return this.E("")},
sf_:function(a){this.b=H.m(a,"$ib",[F.a8],"$ab")}}
F.ic.prototype={
gn:function(a){return this.b.length},
ck:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b5(0,p,n)){p.b_()
break}}}}},
cj:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=J.P(s.a,s.b)
if(t)s.b_()}},
i:function(a){return this.M()},
E:function(a){var u,t,s=H.d([],[P.f]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
C.a.h(s,t[u].E(a+(""+u+". ")))}return C.a.m(s,"\n")},
M:function(){return this.E("")},
sf5:function(a){this.b=H.m(a,"$ib",[F.bi],"$ab")}}
F.id.prototype={
gn:function(a){return this.b.length},
iM:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.K(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.J(null)}s=t.a
if(s!=null){C.a.K(s.b.b,t)
t.a=null}}}},
i:function(a){return this.M()},
E:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].E(a))
return C.a.m(r,"\n")},
M:function(){return this.E("")},
sbN:function(a){this.b=H.m(a,"$ib",[F.bD],"$ab")}}
F.av.prototype={
c2:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.eg(u.cx,r,o,t,s,q,p,a,n)},
i2:function(){return this.c2(null)},
sa1:function(a,b){var u
if(!J.P(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Z()}},
sdK:function(a){var u
a=a==null?null:a.t(0,Math.sqrt(a.D(a)))
if(!J.P(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Z()}},
se2:function(a){var u
if(!J.P(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Z()}},
sdf:function(a){var u
if(!J.P(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Z()}},
ir:function(a){var u,t,s=this
if(a.p(0,$.bo())){u=s.f
t=[P.t]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.bn())){u=s.r
t=[P.t]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.bm())){u=s.x
t=[P.t]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.bP())){u=s.y
t=[P.t]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.p(0,$.bQ())){u=s.z
t=[P.t]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.dj())){u=s.Q
t=[P.t]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.dk())){u=s.Q
t=[P.t]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.cp()))return H.d([s.ch],[P.t])
else if(a.p(0,$.bl())){u=s.cx
t=[P.t]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.t])},
c_:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d_()
t.d.F(0,new F.jj(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ak(0)}return!0},
bY:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d_()
t.d.F(0,new F.ji(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ak(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u,t,s=this,r="-",q=H.d([],[P.f])
C.a.h(q,C.b.ae(J.ar(s.e),0))
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
M:function(){return this.E("")}}
F.jj.prototype={
$1:function(a){var u,t
H.h(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.w(0,u)}},
$S:6}
F.ji.prototype={
$1:function(a){var u,t
H.h(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.w(0,u)}},
$S:6}
F.j9.prototype={
u:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.c(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.e(P.B("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.Z()
return!0},
hR:function(a,b,c,d,e,f){var u=F.eg(a,null,b,c,d,e,f,null,0)
this.h(0,u)
return u},
gn:function(a){return this.c.length},
at:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].c_()
return!0},
bZ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].bY()
return!0},
hZ:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.P(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.J(null)}}}}return!0},
i:function(a){return this.M()},
E:function(a){var u,t,s,r
this.u()
u=H.d([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].E(a))
return C.a.m(u,"\n")},
M:function(){return this.E("")},
shM:function(a){this.c=H.m(a,"$ib",[F.av],"$ab")}}
F.ja.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.c(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.c(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.c(t,b)
return t[b]},
F:function(a,b){var u=this
H.o(b,{func:1,ret:-1,args:[F.a8]})
C.a.F(u.b,b)
C.a.F(u.c,new F.jb(u,b))
C.a.F(u.d,new F.jc(u,b))},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].E(""))
return C.a.m(r,"\n")},
sf0:function(a){this.b=H.m(a,"$ib",[F.a8],"$ab")},
sf1:function(a){this.c=H.m(a,"$ib",[F.a8],"$ab")},
sf2:function(a){this.d=H.m(a,"$ib",[F.a8],"$ab")}}
F.jb.prototype={
$1:function(a){H.h(a,"$ia8")
if(!J.P(a.a,this.a))this.b.$1(a)},
$S:6}
F.jc.prototype={
$1:function(a){var u
H.h(a,"$ia8")
u=this.a
if(!J.P(a.a,u)&&!J.P(a.b,u))this.b.$1(a)},
$S:6}
F.jd.prototype={
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.c(t,u)
return t[u]}else{if(b<0)return H.c(t,b)
return t[b]}},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].E(""))
return C.a.m(r,"\n")},
sf6:function(a){this.b=H.m(a,"$ib",[F.bi],"$ab")},
sf7:function(a){this.c=H.m(a,"$ib",[F.bi],"$ab")}}
F.jf.prototype={}
F.je.prototype={
b5:function(a,b,c){return J.P(b.f,c.f)}}
F.jg.prototype={}
F.hQ.prototype={
b6:function(a){var u,t,s,r
H.m(a,"$ib",[F.av],"$ab")
u=V.d_()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.J(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.t(0,Math.sqrt(u.D(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.u)(a),++s)a[s].sdK(u)
return}}
F.jh.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].E(""))
return C.a.m(r,"\n")},
sbN:function(a){this.b=H.m(a,"$ib",[F.bD],"$ab")}}
O.dN.prototype={
gB:function(){var u=this.fr
return u==null?this.fr=D.a4():u},
ab:function(a){var u
H.h(a,"$iD")
u=this.fr
if(u!=null)u.J(a)},
eD:function(){return this.ab(null)},
d0:function(a){H.h(a,"$iD")
this.a=null
this.ab(a)},
ho:function(){return this.d0(null)},
fo:function(a,b){var u=V.ao
H.m(b,"$ik",[u],"$ak")
u=new D.bY([u])
u.b=!0
this.ab(u)},
fq:function(a,b){var u=V.ao
H.m(b,"$ik",[u],"$ak")
u=new D.bZ([u])
u.b=!0
this.ab(u)},
cL:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.l,h=new H.a0([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.gai()
p=h.j(0,r.gai())
h.k(0,q,p==null?1:p)}o=H.d([],[A.aL])
h.F(0,new O.hw(j,o))
C.a.by(o,new O.hx())
n=new H.a0([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.gai()
p=n.j(0,r.gai())
n.k(0,q,p==null?1:p)}m=H.d([],[A.aP])
n.F(0,new O.hy(j,m))
C.a.by(m,new O.hz())
l=new H.a0([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.u)(i),++s){r=i[s]
t=r.gai()
q=l.j(0,r.gai())
l.k(0,t,q==null?1:q)}k=H.d([],[A.aT])
l.F(0,new O.hA(j,k))
C.a.by(k,new O.hB())
i=C.d.a7(j.e.a.length+3,4)
j.dy.e
return A.nR(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
eJ:function(a,b){H.m(a,"$ib",[T.e6],"$ab")},
aw:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.as(u,u.length,[H.q(u,0)]);u.v();){t=u.d
t.toString
s=$.bF
t.a=s==null?$.bF=new V.a1(0,0,0):s
s=$.j8
t.b=s==null?$.j8=new V.J(0,0,1):s
s=$.j7
t.c=s==null?$.j7=new V.J(0,1,0):s
s=$.j6
t.d=s==null?$.j6=new V.J(-1,0,0):s
s=t.f
if(s!=null){r=s.aU(0,b,t)
if(r!=null){t.a=r.bt(t.a)
s=r.bu(t.b)
q=s.a
p=s.b
o=s.c
t.b=s.t(0,Math.sqrt(q*q+p*p+o*o))
o=r.bu(t.c)
p=o.a
q=o.b
s=o.c
t.c=o.t(0,Math.sqrt(p*p+q*q+s*s))
s=r.bu(t.d)
q=s.a
p=s.b
o=s.c
t.d=s.t(0,Math.sqrt(q*q+p*p+o*o))}}}},
iO:function(b5,b6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b3.a
if(b4==null){b4=b3.cL()
u=b5.fr.j(0,b4.b1)
if(u==null){u=A.nQ(b4,b5.a)
t=u.b
if(t.length===0)H.z(P.B("May not cache a shader with no name."))
if(b5.fr.bl(0,t))H.z(P.B('Shader cache already contains a shader by the name "'+t+'".'))
b5.fr.k(0,t,u)}b4=b3.a=u
b6.e=null}s=b4.z
r=s.dk
b4=b6.e
if(!(b4 instanceof Z.ds))b4=b6.e=null
if(b4==null||!b4.d.p(0,r)){b4=s.k3
if(b4)b6.d.at()
q=s.k4
if(q){p=b6.d
o=p.e
if(o!=null)++o.d
p.d.bZ()
p.a.bZ()
p=p.e
if(p!=null)p.ak(0)}p=s.r2
if(p){o=b6.d
n=o.e
if(n!=null)++n.d
o.a.hZ()
o=o.e
if(o!=null)o.ak(0)}m=b6.d.hY(new Z.jl(b5.a),r)
m.aP($.bo()).e=b3.a.Q.c
if(b4)m.aP($.bn()).e=b3.a.cx.c
if(q)m.aP($.bm()).e=b3.a.ch.c
if(s.r1)m.aP($.bP()).e=b3.a.cy.c
if(p)m.aP($.bQ()).e=b3.a.db.c
if(s.rx)m.aP($.bl()).e=b3.a.dx.c
b6.e=m}b4=T.e6
l=H.d([],[b4])
q=b3.a
p=b5.a
p.useProgram(q.r)
q.x.ia()
if(s.dy){q=b3.a
o=b5.dx
o=o.ga2(o)
q=q.dy
q.toString
q.an(o.af(0,!0))}if(s.fr){q=b3.a
o=b5.cx
if(o==null){o=b5.db
o=o.ga2(o)
n=b5.dx
n=b5.cx=o.A(0,n.ga2(n))
o=n}q=q.fr
q.toString
q.an(o.af(0,!0))}q=b3.a
o=b5.ch
if(o==null){o=b5.giK()
n=b5.dx
n=b5.ch=o.A(0,n.ga2(n))
o=n}q=q.fy
q.toString
q.an(o.af(0,!0))
if(s.ry){q=b3.a
o=b3.b
q=q.k1
q.toString
q.an(C.j.af(o,!0))}if(s.x1){q=b3.a
o=b3.c
q=q.k2
q.toString
q.an(C.j.af(o,!0))}if(s.x2){q=b3.a
o=b3.d
q=q.k3
q.toString
q.an(C.j.af(o,!0))}if(s.y2>0){k=b3.e.a.length
q=b3.a.k4
C.c.bv(q.a,q.d,k)
for(q=[P.t],j=0;j<k;++j){o=b3.a
n=b3.e.a
if(j>=n.length)return H.c(n,j)
n=n[j]
o.toString
H.h(n,"$iao")
o=o.r1
if(j>=o.length)return H.c(o,j)
o=o[j]
i=new Float32Array(H.ce(H.m(n.af(0,!0),"$ib",q,"$ab")))
C.c.e8(o.a,o.d,!1,i)}}if(s.a.a){q=b3.a
o=b3.f.f
q=q.r2
C.c.W(q.a,q.d,o.a,o.b,o.c)}if(s.id){if(s.b.a){q=b3.a
o=b3.r.f
q=q.x1
C.c.W(q.a,q.d,o.a,o.b,o.c)}if(s.c.a){q=b3.a
o=b3.x.f
q=q.y2
C.c.W(q.a,q.d,o.a,o.b,o.c)}if(s.d.a){q=b3.a
o=b3.y.f
q=q.dl
C.c.W(q.a,q.d,o.a,o.b,o.c)}q=s.e.a
if(!q)o=!1
else o=!0
if(o){o=b3.a
n=b3.z.ch
o=o.dn
C.c.a9(o.a,o.d,n)}if(q){q=b3.a
o=b3.z.f
q=q.dm
C.c.W(q.a,q.d,o.a,o.b,o.c)}q=s.z
if(q.length>0){o=b5.db
h=o.ga2(o)
o=P.l
g=new H.a0([o,o])
for(o=b3.dx.e,n=o.length,f=[b4],e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
c=d.gai()
b=g.j(0,c)
if(b==null)b=0
g.k(0,c,b+1)
a=J.dl(b3.a.c4.j(0,c),b)
a0=h.bu(d.gi8(d))
a1=a0.a
a2=a0.b
a3=a0.c
a3=a0.t(0,Math.sqrt(a1*a1+a2*a2+a3*a3))
a2=a.e
a1=a3.a
a0=a3.b
a3=a3.c
C.c.W(a2.a,a2.d,a1,a0,a3)
a3=d.gaB(d)
a0=a.f
C.c.W(a0.a,a0.d,a3.a,a3.b,a3.c)
d.gaT()
a0=d.gi8(d)
a1=a.d
C.c.W(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gjl()
a1=a.b
C.c.W(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gcl(d)
a1=a.c
C.c.W(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gaT()
H.m(l,"$ib",f,"$ab")
if(!C.a.U(l,a0)){a0.sb2(0,l.length)
C.a.h(l,a0)}a0=d.gaT()
a1=a0.gb4(a0)
if(a1){a1=a.r
a1.toString
a2=a0.gb4(a0)
if(!a2)a1.a.uniform1i(a1.d,0)
else{a0=a0.gb2(a0)
a1.a.uniform1i(a1.d,a0)}}}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.u)(q),++e){n=q[e].a
k=g.j(0,n)
if(k==null)k=0
n=b3.a.c3.j(0,n)
C.c.bv(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b5.db
h=o.ga2(o)
o=P.l
a4=new H.a0([o,o])
for(o=b3.dx.f,n=o.length,b4=[b4],f=[P.t],e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
c=d.gai()
b=a4.j(0,c)
if(b==null)b=0
a4.k(0,c,b+1)
a=J.dl(b3.a.c6.j(0,c),b)
a5=h.A(0,d.ga2(d))
a0=d.ga2(d)
a1=$.bF
a0=a0.bt(a1==null?$.bF=new V.a1(0,0,0):a1)
a1=a.b
C.c.W(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=$.bF
a0=a5.bt(a0==null?$.bF=new V.a1(0,0,0):a0)
a1=a.c
C.c.W(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gaB(d)
a1=a.e
C.c.W(a1.a,a1.d,a0.a,a0.b,a0.c)
d.gaT()
a0=a5.dF(0)
a1=a0.a
a2=a0.b
a3=a0.c
a6=a0.e
a7=a0.f
a8=a0.r
a9=a0.y
b0=a0.z
a0=a0.Q
b1=a.d
b1.toString
i=new Float32Array(H.ce(H.m(new V.dP(a1,a2,a3,a6,a7,a8,a9,b0,a0).af(0,!0),"$ib",f,"$ab")))
C.c.e7(b1.a,b1.d,!1,i)
d.gaT()
a0=d.gaT()
H.m(l,"$ib",b4,"$ab")
if(!C.a.U(l,a0)){a0.sb2(0,l.length)
C.a.h(l,a0)}a0=d.gaT()
a1=a0.gb4(a0)
if(a1){a1=a.f
a1.toString
a2=a0.gb4(a0)
if(!a2)a1.a.uniform1i(a1.d,0)
else{a0=a0.gb2(a0)
a1.a.uniform1i(a1.d,a0)}}d.gcq()
a0=d.gj0()
a1=a.x
C.c.iY(a1.a,a1.d,a0.a,a0.b,a0.c,a0.d)
a0=d.gcq()
if(!C.a.U(l,a0)){a0.sb2(0,l.length)
C.a.h(l,a0)}a0=d.gcq()
a1=a0.gb4(a0)
if(a1){a1=a.r
a1.toString
a2=a0.gb4(a0)
if(!a2)a1.a.uniform1i(a1.d,0)
else{a0=a0.gb2(a0)
a1.a.uniform1i(a1.d,a0)}}if(d.gj4()){a0=d.gj1()
a1=a.y
C.c.a9(a1.a,a1.d,a0)
a0=d.gj2()
a1=a.z
C.c.a9(a1.a,a1.d,a0)
a0=d.gj3()
a1=a.Q
C.c.a9(a1.a,a1.d,a0)}}for(b4=q.length,e=0;e<q.length;q.length===b4||(0,H.u)(q),++e){o=q[e].a
k=a4.j(0,o)
if(k==null)k=0
o=b3.a.c5.j(0,o)
C.c.bv(o.a,o.d,k)}}b4=s.ch
if(b4.length>0){q=b5.db
h=q.ga2(q)
q=P.l
b2=new H.a0([q,q])
for(q=b3.dx.r,o=q.length,e=0;e<q.length;q.length===o||(0,H.u)(q),++e){d=q[e]
c=d.gai()
b=b2.j(0,c)
if(b==null)b=0
b2.k(0,c,b+1)
a=J.dl(b3.a.c8.j(0,c),b)
n=d.a
f=a.b
a0=n.a
a1=n.b
n=n.c
C.c.W(f.a,f.d,a0,a1,n)
n=d.b
a1=n.a
a0=n.b
f=n.c
f=n.t(0,Math.sqrt(a1*a1+a0*a0+f*f))
a0=a.c
a1=f.a
n=f.b
f=f.c
C.c.W(a0.a,a0.d,a1,n,f)
f=h.bt(d.a)
n=a.d
C.c.W(n.a,n.d,f.a,f.b,f.c)
f=d.r
n=a.e
C.c.W(n.a,n.d,f.a,f.b,f.c)
n=d.cy
f=a.Q
C.c.a9(f.a,f.d,n)
n=d.dx
f=a.ch
C.c.a9(f.a,f.d,n)
n=d.dy
f=a.cx
C.c.a9(f.a,f.d,n)
n=d.fr
f=a.cy
C.c.a9(f.a,f.d,n)
n=d.fx
f=a.db
C.c.a9(f.a,f.d,n)}for(q=b4.length,e=0;e<b4.length;b4.length===q||(0,H.u)(b4),++e){o=b4[e].a
k=b2.j(0,o)
if(k==null)k=0
o=b3.a.c7.j(0,o)
C.c.bv(o.a,o.d,k)}}}if(s.dx){b4=b3.a
q=b5.Q
if(q==null){q=b5.db
q=b5.Q=q.ga2(q).dF(0)}b4=b4.id
b4.toString
b4.an(q.af(0,!0))}if(s.cy){b3.eJ(l,b3.ch)
b4=b3.a
q=b3.ch
b4.hs(b4.dq,q)
if(s.r.a){b4=b3.a
q=b3.cx.f
b4=b4.dr
C.c.W(b4.a,b4.d,q.a,q.b,q.c)}b4=s.x.a
if(!b4)q=!1
else q=!0
if(q){q=b3.a
o=b3.cy.ch
q=q.ds
C.c.a9(q.a,q.d,o)}if(b4){b4=b3.a
q=b3.cy.f
b4=b4.dt
C.c.W(b4.a,b4.d,q.a,q.b,q.c)}}b4=s.y.a
q=!b4
if(q)o=!1
else o=!0
if(o){if(b4){b4=b3.a
o=b3.db.f
b4=b4.du
C.c.a9(b4.a,b4.d,o)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].bj(b5)
b4=b6.e
b4.bj(b5)
b4.aR(b5)
b4.e6(b5)
if(q)b4=!1
else b4=!0
if(b4)p.disable(3042)
for(j=0;j<l.length;++j)l[j].e6(b5)
b4=b3.a
b4.toString
p.useProgram(null)
b4.x.i9()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cL().b1},
seN:function(a){this.e=H.m(a,"$ia2",[V.ao],"$aa2")}}
O.hw.prototype={
$2:function(a,b){H.ac(a)
H.ac(b)
if(typeof b!=="number")return b.w()
return C.a.h(this.b,new A.aL(a,C.d.a7(b+3,4)*4))},
$S:11}
O.hx.prototype={
$2:function(a,b){H.h(a,"$iaL")
H.h(b,"$iaL")
return J.kU(a.a,b.a)},
$S:50}
O.hy.prototype={
$2:function(a,b){H.ac(a)
H.ac(b)
if(typeof b!=="number")return b.w()
return C.a.h(this.b,new A.aP(a,C.d.a7(b+3,4)*4))},
$S:11}
O.hz.prototype={
$2:function(a,b){H.h(a,"$iaP")
H.h(b,"$iaP")
return J.kU(a.a,b.a)},
$S:51}
O.hA.prototype={
$2:function(a,b){H.ac(a)
H.ac(b)
if(typeof b!=="number")return b.w()
return C.a.h(this.b,new A.aT(a,C.d.a7(b+3,4)*4))},
$S:11}
O.hB.prototype={
$2:function(a,b){H.h(a,"$iaT")
H.h(b,"$iaT")
return J.kU(a.a,b.a)},
$S:52}
O.hq.prototype={
az:function(){var u,t=this
t.ct()
u=t.f
if(!(Math.abs(u-1)<$.K().a)){t.f=1
u=new D.M(t.b,u,1,[P.t])
u.b=!0
t.a.ab(u)}}}
O.dO.prototype={
az:function(){},
d3:function(a){var u,t,s=this
if(!s.c.p(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.az()
u=s.a
u.a=null
u.ab(null)}}}
O.hr.prototype={}
O.b5.prototype={
d2:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.M(s.b+".color",u,a,[V.a3])
t.b=!0
s.a.ab(t)}},
az:function(){this.ct()
this.d2(new V.a3(1,1,1))},
saB:function(a,b){this.d3(new A.am(!0,!1,!1))
this.d2(b)}}
O.ht.prototype={}
O.hu.prototype={
az:function(){var u,t=this
t.cu()
u=t.ch
if(!(Math.abs(u-1)<$.K().a)){t.ch=1
u=new D.M(t.b+".refraction",u,1,[P.t])
u.b=!0
t.a.ab(u)}}}
O.hv.prototype={
d4:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.K().a)){u.ch=a
t=new D.M(u.b+".shininess",t,a,[P.t])
t.b=!0
u.a.ab(t)}},
az:function(){this.cu()
this.d4(100)}}
O.bJ.prototype={}
T.e6.prototype={}
V.bf.prototype={
aE:function(a,b){return!0},
i:function(a){return"all"},
$iay:1}
V.ay.prototype={}
V.dM.prototype={
aE:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)if(u[s].aE(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa6:function(a){this.a=H.m(a,"$ib",[V.ay],"$ab")},
$iay:1}
V.at.prototype={
aE:function(a,b){return!this.ek(0,b)},
i:function(a){return"!["+this.cs(0)+"]"}}
V.i1.prototype={
aE:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c1(this.a),t=H.c1(this.b)
return u+".."+t},
$iay:1}
V.ia.prototype={
ep:function(a){var u,t
if(a.a.length<=0)throw H.e(P.B("May not create a SetMatcher with zero characters."))
u=new H.a0([P.l,P.R])
for(t=new H.cE(a,a.gn(a),[H.aq(a,"x",0)]);t.v();)u.k(0,t.d,!0)
this.shr(u)},
aE:function(a,b){return this.a.bl(0,b)},
i:function(a){var u=this.a
return P.cT(u.ga4(u),0,null)},
shr:function(a){this.a=H.m(a,"$iy",[P.l,P.R],"$ay")},
$iay:1}
V.cQ.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cW(this.a.l(0,b))
r.sa6(H.d([],[V.ay]))
r.c=!1
C.a.h(this.c,r)
return r},
ie:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.aE(0,a))return r}return},
i:function(a){return this.b},
shK:function(a){this.c=H.m(a,"$ib",[V.cW],"$ab")}}
V.e8.prototype={
i:function(a){var u=H.lx(this.b,"\n","\\n"),t=H.lx(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cV.prototype={
aF:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.u)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shk:function(a){var u=P.f
this.c=H.m(a,"$iy",[u,u],"$ay")}}
V.iD.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cQ(this,b)
u.shK(H.d([],[V.cW]))
u.d=null
this.a.k(0,b,u)}return u},
N:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cV(a)
u=P.f
t.shk(new H.a0([u,u]))
this.b.k(0,a,t)}return t},
e5:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.e8]),k=this.c,j=[P.l],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.C(a,s)
q=k.ie(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cT(i,0,m)
throw H.e(P.B("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cT(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.e8(n==null?o.b:n,p,s)}++s}}},
shB:function(a){this.a=H.m(a,"$iy",[P.f,V.cQ],"$ay")},
shD:function(a){this.b=H.m(a,"$iy",[P.f,V.cV],"$ay")}}
V.cW.prototype={
i:function(a){return this.b.b+": "+this.cs(0)}}
X.du.prototype={$icH:1}
X.fZ.prototype={
gB:function(){var u=this.x
return u==null?this.x=D.a4():u}}
X.dW.prototype={
gB:function(){var u=this.f
return u==null?this.f=D.a4():u},
aJ:function(a){var u
H.h(a,"$iD")
u=this.f
if(u!=null)u.J(a)},
eG:function(){return this.aJ(null)},
saQ:function(a){var u,t,s=this
if(!J.P(s.b,a)){u=s.b
if(u!=null)u.gB().K(0,s.gcA())
t=s.b
s.b=a
if(a!=null)a.gB().h(0,s.gcA())
u=new D.M("mover",t,s.b,[U.aj])
u.b=!0
s.aJ(u)}},
$icH:1,
$idu:1}
X.e5.prototype={}
V.bs.prototype={
bd:function(a){this.b=new P.h2(C.Q)
this.c=null
this.sbI(H.d([],[[P.b,W.aC]]))},
L:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aC]))
u=a.split("\n")
for(l=u.length,t=[W.aC],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.N(q)
o=m.b.eS(q,0,q.length)
n=o==null?q:o
C.O.ef(p,H.lx(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gau(m.d),p)}},
dT:function(a,b){var u,t,s,r,q=this
H.m(b,"$ib",[P.f],"$ab")
q.sbI(H.d([],[[P.b,W.aC]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bm():t).e5(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)q.br(t[r])},
sbI:function(a){this.d=H.m(a,"$ib",[[P.b,W.aC]],"$ab")}}
V.kN.prototype={
$1:function(a){var u
H.h(a,"$ib8")
u=C.e.e4(this.a.gij(),2)
if(u!=="0.00")P.lw(u+" fps")},
$S:53}
V.fF.prototype={
br:function(a){var u=this
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
bm:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iE()
a1.c=a1.l(0,r)
u=a1.l(0,r).m(0,q)
t=V.w(new H.r("_"))
C.a.h(u.a,t)
t=V.Y("a","z")
C.a.h(u.a,t)
t=V.Y("A","Z")
C.a.h(u.a,t)
t=a1.l(0,q).m(0,q)
u=V.w(new H.r("_"))
C.a.h(t.a,u)
u=V.Y("0","9")
C.a.h(t.a,u)
u=V.Y("a","z")
C.a.h(t.a,u)
u=V.Y("A","Z")
C.a.h(t.a,u)
u=a1.l(0,r).m(0,p)
t=V.Y("0","9")
C.a.h(u.a,t)
t=a1.l(0,p).m(0,p)
u=V.Y("0","9")
C.a.h(t.a,u)
u=a1.l(0,p).m(0,o)
t=V.w(new H.r("."))
C.a.h(u.a,t)
t=a1.l(0,o).m(0,n)
u=V.Y("0","9")
C.a.h(t.a,u)
u=a1.l(0,n).m(0,n)
t=V.Y("0","9")
C.a.h(u.a,t)
t=a1.l(0,r).m(0,m)
u=V.w(new H.r(l))
C.a.h(t.a,u)
u=a1.l(0,m).m(0,m)
t=V.w(new H.r(l))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,k)
u=V.w(new H.r('"'))
C.a.h(t.a,u)
u=a1.l(0,k).m(0,j)
t=V.w(new H.r('"'))
C.a.h(u.a,t)
t=a1.l(0,k).m(0,i)
u=V.w(new H.r("\\"))
C.a.h(t.a,u)
u=a1.l(0,i).m(0,k)
t=V.w(new H.r('"'))
C.a.h(u.a,t)
C.a.h(a1.l(0,k).m(0,k).a,new V.bf())
t=a1.l(0,r).m(0,h)
u=V.w(new H.r("'"))
C.a.h(t.a,u)
u=a1.l(0,h).m(0,g)
t=V.w(new H.r("'"))
C.a.h(u.a,t)
t=a1.l(0,h).m(0,f)
u=V.w(new H.r("\\"))
C.a.h(t.a,u)
u=a1.l(0,f).m(0,h)
t=V.w(new H.r("'"))
C.a.h(u.a,t)
C.a.h(a1.l(0,h).m(0,h).a,new V.bf())
t=a1.l(0,r).m(0,e)
u=V.w(new H.r("/"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,d)
t=V.w(new H.r("/"))
C.a.h(u.a,t)
t=a1.l(0,d).m(0,c)
u=V.w(new H.r("\n"))
C.a.h(t.a,u)
u=a1.l(0,d).m(0,d)
t=new V.at()
s=[V.ay]
t.sa6(H.d([],s))
C.a.h(u.a,t)
u=V.w(new H.r("\n"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,b)
t=V.w(new H.r("*"))
C.a.h(u.a,t)
t=a1.l(0,b).m(0,a)
u=V.w(new H.r("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,b)
t=new V.at()
t.sa6(H.d([],s))
C.a.h(u.a,t)
u=V.w(new H.r("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,c)
t=V.w(new H.r("/"))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,a0)
u=V.w(new H.r(" \n\t"))
C.a.h(t.a,u)
u=a1.l(0,a0).m(0,a0)
t=V.w(new H.r(" \n\t"))
C.a.h(u.a,t)
t=a1.l(0,p)
t.d=t.a.N("Num")
t=a1.l(0,n)
t.d=t.a.N("Num")
t=a1.l(0,m)
t.d=t.a.N("Symbol")
t=a1.l(0,j)
t.d=t.a.N("String")
t=a1.l(0,g)
t.d=t.a.N("String")
t=a1.l(0,c)
t.d=t.a.N(d)
t=a1.l(0,a0)
t.d=t.a.N(a0)
t=a1.l(0,q)
t=t.d=t.a.N(q)
u=[P.f]
t.aF(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aF(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aF(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.h_.prototype={
br:function(a){var u=this
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
bm:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iE()
e.c=e.l(0,r)
u=e.l(0,r).m(0,q)
t=V.w(new H.r("_"))
C.a.h(u.a,t)
t=V.Y("a","z")
C.a.h(u.a,t)
t=V.Y("A","Z")
C.a.h(u.a,t)
t=e.l(0,q).m(0,q)
u=V.w(new H.r("_"))
C.a.h(t.a,u)
u=V.Y("0","9")
C.a.h(t.a,u)
u=V.Y("a","z")
C.a.h(t.a,u)
u=V.Y("A","Z")
C.a.h(t.a,u)
u=e.l(0,r).m(0,p)
t=V.Y("0","9")
C.a.h(u.a,t)
t=e.l(0,p).m(0,p)
u=V.Y("0","9")
C.a.h(t.a,u)
u=e.l(0,p).m(0,o)
t=V.w(new H.r("."))
C.a.h(u.a,t)
t=e.l(0,o).m(0,n)
u=V.Y("0","9")
C.a.h(t.a,u)
u=e.l(0,n).m(0,n)
t=V.Y("0","9")
C.a.h(u.a,t)
t=e.l(0,r).m(0,m)
u=V.w(new H.r(l))
C.a.h(t.a,u)
u=e.l(0,m).m(0,m)
t=V.w(new H.r(l))
C.a.h(u.a,t)
t=e.l(0,r).m(0,k)
u=V.w(new H.r("/"))
C.a.h(t.a,u)
u=e.l(0,k).m(0,j)
t=V.w(new H.r("/"))
C.a.h(u.a,t)
C.a.h(e.l(0,k).m(0,m).a,new V.bf())
t=e.l(0,j).m(0,i)
u=V.w(new H.r("\n"))
C.a.h(t.a,u)
u=e.l(0,j).m(0,j)
t=new V.at()
s=[V.ay]
t.sa6(H.d([],s))
C.a.h(u.a,t)
u=V.w(new H.r("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.w(new H.r("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.at()
u.sa6(H.d([],s))
C.a.h(t.a,u)
t=V.w(new H.r("\n"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,g)
u=V.w(new H.r("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,f)
t=V.w(new H.r(" \n\t"))
C.a.h(u.a,t)
t=e.l(0,f).m(0,f)
u=V.w(new H.r(" \n\t"))
C.a.h(t.a,u)
u=e.l(0,p)
u.d=u.a.N("Num")
u=e.l(0,n)
u.d=u.a.N("Num")
u=e.l(0,m)
u.d=u.a.N("Symbol")
u=e.l(0,i)
u.d=u.a.N(j)
u=e.l(0,g)
u.d=u.a.N(h)
u=e.l(0,f)
u.d=u.a.N(f)
u=e.l(0,q)
u=u.d=u.a.N(q)
t=[P.f]
u.aF(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aF(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aF(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.h0.prototype={
br:function(a){var u=this,t="#111"
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
bm:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iE()
l.c=l.l(0,s)
u=l.l(0,s).m(0,r)
t=V.w(new H.r("_"))
C.a.h(u.a,t)
t=V.Y("a","z")
C.a.h(u.a,t)
t=V.Y("A","Z")
C.a.h(u.a,t)
t=l.l(0,r).m(0,r)
u=V.w(new H.r("_"))
C.a.h(t.a,u)
u=V.Y("0","9")
C.a.h(t.a,u)
u=V.Y("a","z")
C.a.h(t.a,u)
u=V.Y("A","Z")
C.a.h(t.a,u)
u=l.l(0,r).m(0,q)
t=V.w(new H.r("="))
C.a.h(u.a,t)
u.c=!0
u=l.l(0,s).m(0,p)
t=V.w(new H.r("</\\-!>="))
C.a.h(u.a,t)
t=l.l(0,p).m(0,p)
u=V.w(new H.r("</\\-!>="))
C.a.h(t.a,u)
u=l.l(0,s).m(0,o)
t=V.w(new H.r('"'))
C.a.h(u.a,t)
t=l.l(0,o).m(0,n)
u=V.w(new H.r('"'))
C.a.h(t.a,u)
u=l.l(0,o).m(0,"EscStr")
t=V.w(new H.r("\\"))
C.a.h(u.a,t)
t=l.l(0,"EscStr").m(0,o)
u=V.w(new H.r('"'))
C.a.h(t.a,u)
C.a.h(l.l(0,o).m(0,o).a,new V.bf())
C.a.h(l.l(0,s).m(0,m).a,new V.bf())
u=l.l(0,m).m(0,m)
t=new V.at()
t.sa6(H.d([],[V.ay]))
C.a.h(u.a,t)
u=V.w(new H.r('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.Y("a","z")
C.a.h(t.a,u)
u=V.Y("A","Z")
C.a.h(t.a,u)
u=l.l(0,p)
u.d=u.a.N("Symbol")
u=l.l(0,n)
u.d=u.a.N("String")
u=l.l(0,r)
t=u.a.N(r)
u.d=t
t.aF(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
t=l.l(0,q)
t.d=t.a.N(q)
t=l.l(0,m)
t.d=t.a.N(m)
return l}}
V.hW.prototype={
dT:function(a,b){H.m(b,"$ib",[P.f],"$ab")
this.sbI(H.d([],[[P.b,W.aC]]))
this.L(C.a.m(b,"\n"),"#111")},
br:function(a){},
bm:function(){return}}
V.i_.prototype={
da:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.o(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.mf().gci().j(0,H.i(u))
if(t==null)if(d){c.$0()
m.d8(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lD(m.c).h(0,q)
o=W.nF("radio")
o.checked=s
o.name=u
u=W.n
W.ab(o,"change",H.o(new V.i0(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lD(m.c).h(0,r.createElement("br"))},
aZ:function(a,b,c){return this.da(a,b,c,!1)},
d8:function(a){var u,t,s=P.mf(),r=P.f,q=P.nM(s.gci(),r,r)
q.k(0,this.a,a)
u=s.dZ(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jZ([],[]).cn(""),"",t)}}
V.i0.prototype={
$1:function(a){var u=this
if(H.H(u.b.checked)){u.c.$0()
u.a.d8(u.d)}},
$S:16}
V.ie.prototype={
er:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.n
W.ab(q,"scroll",H.o(new V.ih(o),{func:1,ret:-1,args:[r]}),!1,r)},
dd:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.f],"$ab")
this.hv()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.e5(C.a.iq(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
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
if(H.pF(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=H.N(m[1])
l.textContent=H.N(m[0])
t.appendChild(l)}else{k=P.f1(C.y,n,C.h,!1)
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
ec:function(a){var u,t,s,r=new V.fF("dart")
r.bd("dart")
u=new V.h_("glsl")
u.bd("glsl")
t=new V.h0("html")
t.bd("html")
s=C.a.ih(H.d([r,u,t],[V.bs]),new V.ii(a))
if(s!=null)return s
r=new V.hW("plain")
r.bd("plain")
return r},
dc:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.m(b0,"$ib",[P.f],"$ab")
u=H.d([],[P.l])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.di(r).a3(r,"+")){C.a.k(b0,s,C.b.a8(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a3(r,"-")){C.a.k(b0,s,C.b.a8(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.ec(a8)
q.dT(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.f1(C.y,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lF()
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
if(s>=u.length)return H.c(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.u)(r),++a0)C.Z.hT(a,r[a0])
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
for(a3=C.a.gS(r);a3.v();)c.appendChild(a3.gI(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
hN:function(a){var u,t,s,r,q,p,o,n="auto"
H.m(a,"$ib",[P.f],"$ab")
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
s=H.h(r.insertCell(-1),"$ib7").style
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
o=H.h(r.insertCell(-1),"$ib7")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hv:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iE()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.w(new H.r("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.at()
r=[V.ay]
s.sa6(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.r("*"))
C.a.h(s.a,t)
t=u.l(0,p).m(0,"BoldEnd")
s=V.w(new H.r("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,o)
s=V.w(new H.r("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,o).m(0,o)
s=new V.at()
s.sa6(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.r("_"))
C.a.h(s.a,t)
t=u.l(0,o).m(0,n)
s=V.w(new H.r("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,m)
s=V.w(new H.r("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,m).m(0,m)
s=new V.at()
s.sa6(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.r("`"))
C.a.h(s.a,t)
t=u.l(0,m).m(0,"CodeEnd")
s=V.w(new H.r("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,l)
s=V.w(new H.r("["))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,l).m(0,k)
s=V.w(new H.r("|"))
C.a.h(t.a,s)
s=u.l(0,l).m(0,j)
t=V.w(new H.r("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,l).m(0,l)
t=new V.at()
t.sa6(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.r("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.w(new H.r("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.at()
t.sa6(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.r("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.bf())
s=u.l(0,i).m(0,i)
t=new V.at()
t.sa6(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.r("*_`["))
C.a.h(t.a,s)
s=u.l(0,"BoldEnd")
s.d=s.a.N(p)
s=u.l(0,n)
s.d=s.a.N(o)
s=u.l(0,"CodeEnd")
s.d=s.a.N(m)
s=u.l(0,j)
s.d=s.a.N("Link")
s=u.l(0,i)
s.d=s.a.N(i)
this.b=u}}
V.ih.prototype={
$1:function(a){P.mb(C.o,new V.ig(this.a))},
$S:16}
V.ig.prototype={
$0:function(){var u=C.e.al(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
V.ii.prototype={
$1:function(a){return H.h(a,"$ibs").a===this.a},
$S:55}
N.kE.prototype={
$0:function(){this.a.saa(0,F.lr(1,null,null,1))},
$S:0}
N.kF.prototype={
$0:function(){this.a.saa(0,F.ls(1,!0,!0,40,1))},
$S:0}
N.kG.prototype={
$0:function(){this.a.saa(0,F.ls(1,!0,!1,40,0))},
$S:0}
N.kH.prototype={
$0:function(){this.a.saa(0,F.pE(6,6))},
$S:0}
N.kI.prototype={
$0:function(){this.a.saa(0,F.n_())},
$S:0}
N.kJ.prototype={
$0:function(){this.a.saa(0,F.pw())},
$S:0}
N.kK.prototype={
$1:function(a){var u,t,s,r
H.h(a,"$iD")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.dc("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dc("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:10};(function aliases(){var u=J.a.prototype
u.eh=u.i
u=J.dG.prototype
u.ej=u.i
u=P.k.prototype
u.ei=u.bw
u=W.T.prototype
u.bz=u.ac
u=W.eL.prototype
u.el=u.as
u=O.dO.prototype
u.ct=u.az
u=O.b5.prototype
u.cu=u.az
u=V.dM.prototype
u.ek=u.aE
u.cs=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pe","on",13)
u(P,"pf","oo",13)
u(P,"pg","op",13)
t(P,"mK","pc",3)
s(W,"pp",4,null,["$4"],["or"],28,0)
s(W,"pq",4,null,["$4"],["os"],28,0)
var m
r(m=E.an.prototype,"gdP",0,0,null,["$1","$0"],["dQ","iB"],1,0)
r(m,"gdR",0,0,null,["$1","$0"],["dS","iC"],1,0)
r(m,"gdN",0,0,null,["$1","$0"],["dO","iA"],1,0)
r(m,"gdL",0,0,null,["$1","$0"],["dM","ix"],1,0)
q(m,"giv","iw",9)
q(m,"giy","iz",9)
r(m=E.e7.prototype,"gcv",0,0,null,["$1","$0"],["cz","cw"],1,0)
p(m,"giQ","e_",3)
o(m=X.ee.prototype,"gfI","fJ",15)
o(m,"gfs","ft",15)
o(m,"gfC","fD",4)
o(m,"gfM","fN",31)
o(m,"gfK","fL",31)
o(m,"gfQ","fR",4)
o(m,"gfU","fV",4)
o(m,"gfG","fH",4)
o(m,"gfS","fT",4)
o(m,"gfE","fF",4)
o(m,"gfW","fX",36)
o(m,"gfY","fZ",15)
o(m,"gha","hb",14)
o(m,"gh6","h7",14)
o(m,"gh8","h9",14)
r(m=D.dI.prototype,"gcW",0,0,null,["$1","$0"],["cX","fO"],1,0)
o(m,"gh0","h1",38)
q(m,"gfl","fm",26)
q(m,"gh4","h5",26)
r(D.bI.prototype,"gfu",0,0,null,["$1","$0"],["a_","fv"],1,0)
n(V.a7.prototype,"gn","b3",12)
n(V.J.prototype,"gn","b3",12)
n(V.ca.prototype,"gn","b3",12)
r(m=U.cA.prototype,"gbe",0,0,null,["$1","$0"],["X","ao"],1,0)
q(m,"gey","ez",22)
q(m,"gh2","h3",22)
r(m=U.ef.prototype,"gbe",0,0,null,["$1","$0"],["X","ao"],1,0)
o(m,"gfe","ff",2)
o(m,"gfg","fh",2)
o(m,"gfi","fj",2)
o(m,"gf9","fa",2)
o(m,"gfb","fc",2)
o(m,"ghI","hJ",2)
o(m,"ghG","hH",2)
o(m,"ghE","hF",2)
r(m=M.dB.prototype,"gap",0,0,null,["$1","$0"],["ax","eA"],1,0)
q(m,"gfw","fz",9)
q(m,"gfA","fB",9)
r(m=O.dN.prototype,"geC",0,0,null,["$1","$0"],["ab","eD"],1,0)
r(m,"ghn",0,0,null,["$1","$0"],["d0","ho"],1,0)
q(m,"gfn","fo",33)
q(m,"gfp","fq",33)
r(X.dW.prototype,"gcA",0,0,null,["$1","$0"],["aJ","eG"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.U,null)
s(P.U,[H.l3,J.a,J.as,P.ey,P.k,H.cE,P.b1,H.bW,H.cZ,H.fy,H.iJ,P.bv,H.ct,H.eQ,P.ae,H.hd,H.hf,H.h8,P.eW,P.bc,P.aI,P.ei,P.ir,P.cS,P.is,P.b8,P.al,P.ke,P.jT,P.cb,P.ex,P.x,P.k6,P.hl,P.bU,P.h3,P.kc,P.kb,P.R,P.ax,P.a9,P.bu,P.hU,P.e3,P.eq,P.fY,P.bw,P.b,P.y,P.O,P.au,P.f,P.a6,P.cc,P.iY,P.jW,W.fB,W.bM,W.G,W.dU,W.eL,W.k1,W.dD,W.az,W.jS,W.f2,P.jY,P.jN,P.Q,O.a2,O.cF,E.fs,E.an,E.i2,E.e7,Z.eh,Z.jl,Z.ds,Z.bx,Z.bL,D.fv,D.bV,D.D,X.dt,X.dH,X.ha,X.hi,X.bA,X.hI,X.iF,X.ee,D.dy,D.ad,D.dX,D.bI,V.a3,V.aZ,V.fP,V.dP,V.ao,V.aa,V.a1,V.bG,V.e_,V.a7,V.J,V.ca,U.ef,M.dB,A.dp,A.fl,A.am,A.aL,A.aP,A.aT,A.hs,A.c4,A.c5,A.c8,A.ea,A.iS,F.a8,F.fS,F.bi,F.hc,F.bD,F.e1,F.ib,F.ic,F.id,F.av,F.j9,F.ja,F.jd,F.jf,F.jg,F.jh,O.bJ,O.dO,O.ht,V.bf,V.ay,V.dM,V.i1,V.ia,V.cQ,V.e8,V.cV,V.iD,X.du,X.e5,X.dW,V.bs,V.i_,V.ie])
s(J.a,[J.h6,J.dF,J.dG,J.b2,J.cD,J.by,H.cI,H.bC,W.j,W.fh,W.bS,W.b_,W.b0,W.W,W.ek,W.fG,W.fH,W.em,W.dA,W.eo,W.fJ,W.n,W.er,W.aM,W.h1,W.et,W.cB,W.dK,W.hC,W.ez,W.eA,W.aN,W.eB,W.eE,W.aO,W.eI,W.eK,W.aR,W.eM,W.aS,W.eR,W.aE,W.eU,W.iC,W.aV,W.eX,W.iH,W.j2,W.f3,W.f5,W.f7,W.f9,W.fb,P.b4,P.ev,P.b6,P.eG,P.hZ,P.eS,P.b9,P.eZ,P.fm,P.ej,P.dq,P.dY,P.c3,P.e0,P.eb,P.eO])
s(J.dG,[J.hV,J.c9,J.bz])
t(J.l2,J.b2)
s(J.cD,[J.dE,J.h7])
t(P.hh,P.ey)
s(P.hh,[H.ec,W.jt,W.ap,P.fU])
t(H.r,H.ec)
s(P.k,[H.fM,H.hm,H.d0])
s(H.fM,[H.c_,H.he])
s(P.b1,[H.hn,H.jm])
t(H.ho,H.c_)
t(H.fz,H.fy)
s(P.bv,[H.hR,H.h9,H.iW,H.iL,H.fu,H.i8,P.fk,P.dV,P.aK,P.iX,P.iU,P.cR,P.fx,P.fE])
s(H.ct,[H.kS,H.iy,H.kz,H.kA,H.kB,P.jp,P.jo,P.jq,P.jr,P.k5,P.k4,P.jA,P.jE,P.jB,P.jC,P.jD,P.jH,P.jI,P.jG,P.jF,P.it,P.iu,P.ko,P.jQ,P.jP,P.jR,P.hg,P.hk,P.fK,P.fL,P.j1,P.iZ,P.j_,P.j0,P.k7,P.k8,P.ka,P.k9,P.ki,P.kh,P.kj,P.kk,W.fN,W.hE,W.hG,W.i7,W.iq,W.jz,W.hP,W.hO,W.jU,W.jV,W.k3,W.kd,P.k_,P.kq,P.fV,P.fW,P.fo,E.i3,E.i4,E.i5,E.iB,D.fQ,D.fR,F.kf,F.kr,F.kt,F.ku,F.kv,F.kO,F.kP,F.kR,F.kD,F.ks,F.jj,F.ji,F.jb,F.jc,O.hw,O.hx,O.hy,O.hz,O.hA,O.hB,V.kN,V.i0,V.ih,V.ig,V.ii,N.kE,N.kF,N.kG,N.kH,N.kI,N.kJ,N.kK])
s(H.iy,[H.io,H.cr])
t(H.jn,P.fk)
t(P.hj,P.ae)
s(P.hj,[H.a0,W.js])
t(H.dR,H.bC)
s(H.dR,[H.d5,H.d7])
t(H.d6,H.d5)
t(H.cJ,H.d6)
t(H.d8,H.d7)
t(H.dS,H.d8)
s(H.dS,[H.hJ,H.hK,H.hL,H.hM,H.hN,H.dT,H.cK])
t(P.jO,P.ke)
t(P.jM,P.jT)
t(P.f0,P.hl)
t(P.ed,P.f0)
s(P.bU,[P.fq,P.fO])
t(P.bt,P.is)
s(P.bt,[P.fr,P.h2,P.j5,P.j4])
t(P.j3,P.fO)
s(P.a9,[P.t,P.l])
s(P.aK,[P.c2,P.h4])
t(P.jv,P.cc)
s(W.j,[W.E,W.fT,W.cG,W.aQ,W.d9,W.aU,W.aF,W.db,W.jk,W.d1,P.fp,P.bR])
s(W.E,[W.T,W.br,W.d2])
s(W.T,[W.v,P.p])
s(W.v,[W.dn,W.fi,W.cq,W.bq,W.bT,W.aC,W.fX,W.cC,W.i9,W.b7,W.e4,W.iw,W.ix,W.cU])
s(W.b_,[W.cu,W.fC,W.fD])
t(W.fA,W.b0)
t(W.cv,W.ek)
t(W.en,W.em)
t(W.dz,W.en)
t(W.ep,W.eo)
t(W.fI,W.ep)
t(W.aD,W.bS)
t(W.es,W.er)
t(W.cy,W.es)
t(W.eu,W.et)
t(W.bX,W.eu)
t(W.bK,W.n)
s(W.bK,[W.b3,W.af,W.aW])
t(W.hD,W.ez)
t(W.hF,W.eA)
t(W.eC,W.eB)
t(W.hH,W.eC)
t(W.eF,W.eE)
t(W.cL,W.eF)
t(W.eJ,W.eI)
t(W.hX,W.eJ)
t(W.i6,W.eK)
t(W.da,W.d9)
t(W.ik,W.da)
t(W.eN,W.eM)
t(W.il,W.eN)
t(W.ip,W.eR)
t(W.eV,W.eU)
t(W.iz,W.eV)
t(W.dc,W.db)
t(W.iA,W.dc)
t(W.eY,W.eX)
t(W.iG,W.eY)
t(W.bb,W.af)
t(W.f4,W.f3)
t(W.ju,W.f4)
t(W.el,W.dA)
t(W.f6,W.f5)
t(W.jJ,W.f6)
t(W.f8,W.f7)
t(W.eD,W.f8)
t(W.fa,W.f9)
t(W.jX,W.fa)
t(W.fc,W.fb)
t(W.k0,W.fc)
t(W.jw,W.js)
t(W.jx,P.ir)
t(W.ld,W.jx)
t(W.jy,P.cS)
t(W.k2,W.eL)
t(P.jZ,P.jY)
t(P.ak,P.jN)
t(P.ew,P.ev)
t(P.hb,P.ew)
t(P.eH,P.eG)
t(P.hS,P.eH)
t(P.cO,P.p)
t(P.eT,P.eS)
t(P.iv,P.eT)
t(P.f_,P.eZ)
t(P.iI,P.f_)
t(P.fn,P.ej)
t(P.hT,P.bR)
t(P.eP,P.eO)
t(P.im,P.eP)
s(E.fs,[Z.dr,A.cP,T.e6])
s(D.D,[D.bY,D.bZ,D.M,X.hY])
s(X.hY,[X.dL,X.bB,X.e9])
s(O.a2,[D.dI,U.cA])
s(D.fv,[U.fw,U.aj])
t(U.dv,U.aj)
t(A.hp,A.cP)
s(A.ea,[A.aG,A.iP,A.iQ,A.iR,A.iN,A.ah,A.iO,A.Z,A.cX,A.iT,A.cY,A.aA,A.c6,A.c7])
t(F.ij,F.fS)
t(F.iM,F.hc)
t(F.je,F.jf)
t(F.hQ,F.jg)
t(O.dN,O.bJ)
s(O.dO,[O.hq,O.hr,O.b5])
s(O.b5,[O.hu,O.hv])
s(V.dM,[V.at,V.cW])
t(X.fZ,X.e5)
s(V.bs,[V.fF,V.h_,V.h0,V.hW])
u(H.ec,H.cZ)
u(H.d5,P.x)
u(H.d6,H.bW)
u(H.d7,P.x)
u(H.d8,H.bW)
u(P.ey,P.x)
u(P.f0,P.k6)
u(W.ek,W.fB)
u(W.em,P.x)
u(W.en,W.G)
u(W.eo,P.x)
u(W.ep,W.G)
u(W.er,P.x)
u(W.es,W.G)
u(W.et,P.x)
u(W.eu,W.G)
u(W.ez,P.ae)
u(W.eA,P.ae)
u(W.eB,P.x)
u(W.eC,W.G)
u(W.eE,P.x)
u(W.eF,W.G)
u(W.eI,P.x)
u(W.eJ,W.G)
u(W.eK,P.ae)
u(W.d9,P.x)
u(W.da,W.G)
u(W.eM,P.x)
u(W.eN,W.G)
u(W.eR,P.ae)
u(W.eU,P.x)
u(W.eV,W.G)
u(W.db,P.x)
u(W.dc,W.G)
u(W.eX,P.x)
u(W.eY,W.G)
u(W.f3,P.x)
u(W.f4,W.G)
u(W.f5,P.x)
u(W.f6,W.G)
u(W.f7,P.x)
u(W.f8,W.G)
u(W.f9,P.x)
u(W.fa,W.G)
u(W.fb,P.x)
u(W.fc,W.G)
u(P.ev,P.x)
u(P.ew,W.G)
u(P.eG,P.x)
u(P.eH,W.G)
u(P.eS,P.x)
u(P.eT,W.G)
u(P.eZ,P.x)
u(P.f_,W.G)
u(P.ej,P.ae)
u(P.eO,P.x)
u(P.eP,W.G)})()
var v={mangledGlobalNames:{l:"int",t:"double",a9:"num",f:"String",R:"bool",O:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.O},{func:1,ret:-1,opt:[D.D]},{func:1,ret:-1,args:[D.D]},{func:1,ret:-1},{func:1,ret:-1,args:[W.af]},{func:1,ret:P.O,args:[,,]},{func:1,ret:P.O,args:[F.a8]},{func:1,ret:P.O,args:[F.av,P.t,P.t]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.l,[P.k,E.an]]},{func:1,ret:P.O,args:[D.D]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:P.t},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aW]},{func:1,ret:-1,args:[W.n]},{func:1,ret:P.O,args:[W.n]},{func:1,ret:V.a1,args:[P.t]},{func:1,ret:P.O,args:[,]},{func:1,ret:P.f,args:[P.l]},{func:1,ret:P.t,args:[P.t]},{func:1,ret:P.t,args:[P.t,P.t]},{func:1,ret:-1,args:[P.l,[P.k,U.aj]]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,args:[,]},{func:1,ret:-1,args:[P.l,[P.k,D.ad]]},{func:1,ret:P.R,args:[W.E]},{func:1,ret:P.R,args:[W.T,P.f,P.f,W.bM]},{func:1,ret:P.R,args:[W.az]},{func:1,ret:P.R,args:[P.f]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:P.O,args:[{func:1,ret:-1,args:[D.D]}]},{func:1,ret:-1,args:[P.l,[P.k,V.ao]]},{func:1,ret:W.T,args:[W.E]},{func:1,ret:-1,args:[W.E,W.E]},{func:1,ret:-1,args:[W.bb]},{func:1,args:[W.n]},{func:1,ret:P.R,args:[[P.k,D.ad]]},{func:1,ret:P.Q,args:[,,]},{func:1,ret:P.O,args:[P.f,,]},{func:1,ret:P.O,args:[P.f]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.l]},{func:1,ret:[P.y,P.f,P.f],args:[[P.y,P.f,P.f],P.f]},{func:1,ret:[P.aI,,],args:[,]},{func:1,ret:P.O,args:[,],opt:[P.au]},{func:1,ret:P.Q,args:[P.l]},{func:1,ret:P.O,args:[{func:1,ret:-1}]},{func:1,ret:P.l,args:[A.aL,A.aL]},{func:1,ret:P.l,args:[A.aP,A.aP]},{func:1,ret:P.l,args:[A.aT,A.aT]},{func:1,ret:P.O,args:[P.b8]},{func:1,args:[P.f]},{func:1,ret:P.R,args:[V.bs]},{func:1,args:[,P.f]},{func:1,ret:P.O,args:[P.a9]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bq.prototype
C.n=W.bT.prototype
C.O=W.aC.prototype
C.R=J.a.prototype
C.a=J.b2.prototype
C.d=J.dE.prototype
C.j=J.dF.prototype
C.e=J.cD.prototype
C.b=J.by.prototype
C.S=J.bz.prototype
C.Y=W.cL.prototype
C.B=J.hV.prototype
C.c=P.c3.prototype
C.Z=W.b7.prototype
C.C=W.e4.prototype
C.r=J.c9.prototype
C.D=W.bb.prototype
C.E=W.d1.prototype
C.a_=new P.fr()
C.F=new P.fq()
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

C.M=new P.hU()
C.h=new P.j3()
C.N=new P.j5()
C.f=new P.jO()
C.o=new P.bu(0)
C.P=new P.bu(5e6)
C.Q=new P.h3("element",!1,!1,!1)
C.w=H.d(u([127,2047,65535,1114111]),[P.l])
C.k=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.T=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.l=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.m=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.U=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.x=H.d(u([]),[P.f])
C.V=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.y=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.i=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.z=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.W=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.A=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.p=H.d(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.q=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.X=new H.fz(0,{},C.x,[P.f,P.f])})();(function staticFields(){$.aY=0
$.cs=null
$.lH=null
$.lj=!1
$.mQ=null
$.mI=null
$.mX=null
$.kw=null
$.kC=null
$.lu=null
$.cf=null
$.df=null
$.dg=null
$.lk=!1
$.a_=C.f
$.aw=[]
$.bh=null
$.kY=null
$.lO=null
$.lN=null
$.d4=P.l5(P.f,P.bw)
$.lX=null
$.m0=null
$.bF=null
$.m6=null
$.mj=null
$.mm=null
$.ml=null
$.j6=null
$.j7=null
$.j8=null
$.mk=null
$.mp=null
$.m_=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pO","n1",function(){return H.mP("_$dart_dartClosure")})
u($,"pP","lz",function(){return H.mP("_$dart_js")})
u($,"pV","n2",function(){return H.ba(H.iK({
toString:function(){return"$receiver$"}}))})
u($,"pW","n3",function(){return H.ba(H.iK({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pX","n4",function(){return H.ba(H.iK(null))})
u($,"pY","n5",function(){return H.ba(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q0","n8",function(){return H.ba(H.iK(void 0))})
u($,"q1","n9",function(){return H.ba(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q_","n7",function(){return H.ba(H.md(null))})
u($,"pZ","n6",function(){return H.ba(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"q3","nb",function(){return H.ba(H.md(void 0))})
u($,"q2","na",function(){return H.ba(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qj","lA",function(){return P.om()})
u($,"q5","nc",function(){return P.oi()})
u($,"qk","ng",function(){return H.nS(H.ce(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"qm","ni",function(){return P.o5("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qn","nj",function(){return P.oM()})
u($,"ql","nh",function(){return P.lR(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"qc","nf",function(){return Z.aH(0)})
u($,"q6","nd",function(){return Z.aH(511)})
u($,"qe","bo",function(){return Z.aH(1)})
u($,"qd","bn",function(){return Z.aH(2)})
u($,"q8","bm",function(){return Z.aH(4)})
u($,"qf","bP",function(){return Z.aH(8)})
u($,"qg","bQ",function(){return Z.aH(16)})
u($,"q9","dj",function(){return Z.aH(32)})
u($,"qa","dk",function(){return Z.aH(64)})
u($,"qb","ne",function(){return Z.aH(96)})
u($,"qh","cp",function(){return Z.aH(128)})
u($,"q7","bl",function(){return Z.aH(256)})
u($,"pN","n0",function(){return new V.fP(1e-9)})
u($,"pM","K",function(){return $.n0()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cI,DataView:H.bC,ArrayBufferView:H.bC,Float32Array:H.cJ,Float64Array:H.cJ,Int16Array:H.hJ,Int32Array:H.hK,Int8Array:H.hL,Uint16Array:H.hM,Uint32Array:H.hN,Uint8ClampedArray:H.dT,CanvasPixelArray:H.dT,Uint8Array:H.cK,HTMLAudioElement:W.v,HTMLBRElement:W.v,HTMLButtonElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLImageElement:W.v,HTMLLIElement:W.v,HTMLLabelElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMediaElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableColElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLVideoElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,AccessibleNodeList:W.fh,HTMLAnchorElement:W.dn,HTMLAreaElement:W.fi,HTMLBaseElement:W.cq,Blob:W.bS,HTMLBodyElement:W.bq,HTMLCanvasElement:W.bT,CDATASection:W.br,CharacterData:W.br,Comment:W.br,ProcessingInstruction:W.br,Text:W.br,CSSNumericValue:W.cu,CSSUnitValue:W.cu,CSSPerspective:W.fA,CSSCharsetRule:W.W,CSSConditionRule:W.W,CSSFontFaceRule:W.W,CSSGroupingRule:W.W,CSSImportRule:W.W,CSSKeyframeRule:W.W,MozCSSKeyframeRule:W.W,WebKitCSSKeyframeRule:W.W,CSSKeyframesRule:W.W,MozCSSKeyframesRule:W.W,WebKitCSSKeyframesRule:W.W,CSSMediaRule:W.W,CSSNamespaceRule:W.W,CSSPageRule:W.W,CSSRule:W.W,CSSStyleRule:W.W,CSSSupportsRule:W.W,CSSViewportRule:W.W,CSSStyleDeclaration:W.cv,MSStyleCSSProperties:W.cv,CSS2Properties:W.cv,CSSImageValue:W.b_,CSSKeywordValue:W.b_,CSSPositionValue:W.b_,CSSResourceValue:W.b_,CSSURLImageValue:W.b_,CSSStyleValue:W.b_,CSSMatrixComponent:W.b0,CSSRotation:W.b0,CSSScale:W.b0,CSSSkew:W.b0,CSSTranslation:W.b0,CSSTransformComponent:W.b0,CSSTransformValue:W.fC,CSSUnparsedValue:W.fD,DataTransferItemList:W.fG,HTMLDivElement:W.aC,DOMException:W.fH,ClientRectList:W.dz,DOMRectList:W.dz,DOMRectReadOnly:W.dA,DOMStringList:W.fI,DOMTokenList:W.fJ,Element:W.T,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aD,FileList:W.cy,FileWriter:W.fT,HTMLFormElement:W.fX,Gamepad:W.aM,History:W.h1,HTMLCollection:W.bX,HTMLFormControlsCollection:W.bX,HTMLOptionsCollection:W.bX,ImageData:W.cB,HTMLInputElement:W.cC,KeyboardEvent:W.b3,Location:W.dK,MediaList:W.hC,MessagePort:W.cG,MIDIInputMap:W.hD,MIDIOutputMap:W.hF,MimeType:W.aN,MimeTypeArray:W.hH,PointerEvent:W.af,MouseEvent:W.af,DragEvent:W.af,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,DocumentType:W.E,Node:W.E,NodeList:W.cL,RadioNodeList:W.cL,Plugin:W.aO,PluginArray:W.hX,RTCStatsReport:W.i6,HTMLSelectElement:W.i9,SourceBuffer:W.aQ,SourceBufferList:W.ik,SpeechGrammar:W.aR,SpeechGrammarList:W.il,SpeechRecognitionResult:W.aS,Storage:W.ip,CSSStyleSheet:W.aE,StyleSheet:W.aE,HTMLTableCellElement:W.b7,HTMLTableDataCellElement:W.b7,HTMLTableHeaderCellElement:W.b7,HTMLTableElement:W.e4,HTMLTableRowElement:W.iw,HTMLTableSectionElement:W.ix,HTMLTemplateElement:W.cU,TextTrack:W.aU,TextTrackCue:W.aF,VTTCue:W.aF,TextTrackCueList:W.iz,TextTrackList:W.iA,TimeRanges:W.iC,Touch:W.aV,TouchEvent:W.aW,TouchList:W.iG,TrackDefaultList:W.iH,CompositionEvent:W.bK,FocusEvent:W.bK,TextEvent:W.bK,UIEvent:W.bK,URL:W.j2,VideoTrackList:W.jk,WheelEvent:W.bb,Window:W.d1,DOMWindow:W.d1,Attr:W.d2,CSSRuleList:W.ju,ClientRect:W.el,DOMRect:W.el,GamepadList:W.jJ,NamedNodeMap:W.eD,MozNamedAttrMap:W.eD,SpeechRecognitionResultList:W.jX,StyleSheetList:W.k0,SVGLength:P.b4,SVGLengthList:P.hb,SVGNumber:P.b6,SVGNumberList:P.hS,SVGPointList:P.hZ,SVGScriptElement:P.cO,SVGStringList:P.iv,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.b9,SVGTransformList:P.iI,AudioBuffer:P.fm,AudioParamMap:P.fn,AudioTrackList:P.fp,AudioContext:P.bR,webkitAudioContext:P.bR,BaseAudioContext:P.bR,OfflineAudioContext:P.hT,WebGLBuffer:P.dq,WebGLProgram:P.dY,WebGL2RenderingContext:P.c3,WebGLShader:P.e0,WebGLUniformLocation:P.eb,SQLResultSetRowList:P.im})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dR.$nativeSuperclassTag="ArrayBufferView"
H.d5.$nativeSuperclassTag="ArrayBufferView"
H.d6.$nativeSuperclassTag="ArrayBufferView"
H.cJ.$nativeSuperclassTag="ArrayBufferView"
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.dS.$nativeSuperclassTag="ArrayBufferView"
W.d9.$nativeSuperclassTag="EventTarget"
W.da.$nativeSuperclassTag="EventTarget"
W.db.$nativeSuperclassTag="EventTarget"
W.dc.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.mT,[])
else N.mT([])})})()
//# sourceMappingURL=test.dart.js.map
