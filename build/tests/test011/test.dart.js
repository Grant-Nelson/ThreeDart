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
a[c]=function(){a[c]=function(){H.pX(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lJ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lJ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lJ(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={ll:function ll(){},
kL:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
hg:function(){return new P.cY("No element")},
nT:function(){return new P.cY("Too many elements")},
ea:function(a,b,c,d,e){if(c-b<=32)H.om(a,b,c,d,e)
else H.ol(a,b,c,d,e)},
om:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.d(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.d(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a1()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.d(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
ol:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.a9(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.a9(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
r=p}C.a.k(a2,d,u)
C.a.k(a2,b,s)
C.a.k(a2,c,q)
if(a3<0||a3>=a2.length)return H.d(a2,a3)
C.a.k(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.d(a2,a4)
C.a.k(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.K(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.R()
if(k<0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a1()
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
if(typeof g!=="number")return g.R()
if(g<0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a1()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a1()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.R()
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
H.ea(a2,a3,o-2,a5,a6)
H.ea(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.d(a2,o)
if(!J.K(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.d(a2,n)
if(!J.K(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.R()
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
break}}}H.ea(a2,o,n,a5,a6)}else H.ea(a2,o,n,a5,a6)},
t:function t(a){this.a=a},
fX:function fX(){},
c2:function c2(){},
cI:function cI(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hw:function hw(a,b,c){this.a=a
this.b=b
this.$ti=c},
hx:function hx(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hy:function hy(a,b,c){this.a=a
this.b=b
this.$ti=c},
d9:function d9(a,b,c){this.a=a
this.b=b
this.$ti=c},
jz:function jz(a,b,c){this.a=a
this.b=b
this.$ti=c},
bZ:function bZ(){},
d6:function d6(){},
em:function em(){},
nL:function(){throw H.c(P.J("Cannot modify unmodifiable Map"))},
cr:function(a){var u,t=H.pZ(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
pE:function(a){return v.types[H.ad(a)]},
pL:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iL},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.au(a)
if(typeof u!=="string")throw H.c(H.b2(a))
return u},
cT:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
od:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=H.M(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ai(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.E(s,q)|32)>t)return}return parseInt(a,b)},
cU:function(a){return H.o4(a)+H.lF(H.bS(a),0,null)},
o4:function(a){var u,t,s,r,q,p,o,n=J.T(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$icc){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cr(t.length>1&&C.b.E(t,0)===36?C.b.ab(t,1):t)},
o5:function(){if(!!self.location)return self.location.href
return},
mf:function(a){var u,t,s,r,q=J.aF(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
oe:function(a){var u,t,s,r=H.e([],[P.l])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.b2(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.aU(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.b2(s))}return H.mf(r)},
mg:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.b2(s))
if(s<0)throw H.c(H.b2(s))
if(s>65535)return H.oe(a)}return H.mf(a)},
of:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c4:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aU(u,10))>>>0,56320|u&1023)}}throw H.c(P.ai(a,0,1114111,null,null))},
c3:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oc:function(a){var u=H.c3(a).getFullYear()+0
return u},
oa:function(a){var u=H.c3(a).getMonth()+1
return u},
o6:function(a){var u=H.c3(a).getDate()+0
return u},
o7:function(a){var u=H.c3(a).getHours()+0
return u},
o9:function(a){var u=H.c3(a).getMinutes()+0
return u},
ob:function(a){var u=H.c3(a).getSeconds()+0
return u},
o8:function(a){var u=H.c3(a).getMilliseconds()+0
return u},
D:function(a){throw H.c(H.b2(a))},
d:function(a,b){if(a==null)J.aF(a)
throw H.c(H.cl(a,b))},
cl:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aP(!0,b,s,null)
u=H.ad(J.aF(a))
if(!(b<0)){if(typeof u!=="number")return H.D(u)
t=b>=u}else t=!0
if(t)return P.Z(b,a,s,null,u)
return P.e6(b,s)},
pz:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c5(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c5(a,c,!0,b,"end",u)
return new P.aP(!0,b,"end",null)},
b2:function(a){return new P.aP(!0,a,null,null)},
pu:function(a){if(typeof a!=="number")throw H.c(H.b2(a))
return a},
c:function(a){var u
if(a==null)a=new P.e2()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.nb})
u.name=""}else u.toString=H.nb
return u},
nb:function(){return J.au(this.dartException)},
w:function(a){throw H.c(a)},
v:function(a){throw H.c(P.bl(a))},
bg:function(a){var u,t,s,r,q,p
a=H.n9(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.e([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iW(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iX:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mq:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
mb:function(a,b){return new H.i0(a,b==null?null:b.method)},
lm:function(a,b){var u=b==null,t=u?null:b.method
return new H.hj(a,t,u?null:b.receiver)},
ak:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.l9(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aU(t,16)&8191)===10)switch(s){case 438:return f.$1(H.lm(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.mb(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.ne()
q=$.nf()
p=$.ng()
o=$.nh()
n=$.nk()
m=$.nl()
l=$.nj()
$.ni()
k=$.nn()
j=$.nm()
i=r.ag(u)
if(i!=null)return f.$1(H.lm(H.M(u),i))
else{i=q.ag(u)
if(i!=null){i.method="call"
return f.$1(H.lm(H.M(u),i))}else{i=p.ag(u)
if(i==null){i=o.ag(u)
if(i==null){i=n.ag(u)
if(i==null){i=m.ag(u)
if(i==null){i=l.ag(u)
if(i==null){i=o.ag(u)
if(i==null){i=k.ag(u)
if(i==null){i=j.ag(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.mb(H.M(u),i))}}return f.$1(new H.j8(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ec()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aP(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ec()
return a},
cp:function(a){var u
if(a==null)return new H.f0(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f0(a)},
pD:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
pK:function(a,b,c,d,e,f){H.f(a,"$ibH")
switch(H.ad(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.u("Unsupported number of arguments for wrapped closure"))},
ck:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pK)
a.$identity=u
return u},
nK:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.iz().constructor.prototype):Object.create(new H.cu(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b3
if(typeof t!=="number")return t.v()
$.b3=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.m0(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.nG(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.m0(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
nG:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.pE,a)
if(typeof a=="function")if(b)return a
else{u=c?H.m_:H.ld
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
nH:function(a,b,c,d){var u=H.ld
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
m0:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nJ(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nH(t,!r,u,b)
if(t===0){r=$.b3
if(typeof r!=="number")return r.v()
$.b3=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cv
return new Function(r+H.i(q==null?$.cv=H.fE("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b3
if(typeof r!=="number")return r.v()
$.b3=r+1
o+=r
r="return function("+o+"){return this."
q=$.cv
return new Function(r+H.i(q==null?$.cv=H.fE("self"):q)+"."+H.i(u)+"("+o+");}")()},
nI:function(a,b,c,d){var u=H.ld,t=H.m_
switch(b?-1:a){case 0:throw H.c(H.oj("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nJ:function(a,b){var u,t,s,r,q,p,o,n=$.cv
if(n==null)n=$.cv=H.fE("self")
u=$.lZ
if(u==null)u=$.lZ=H.fE("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nI(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.b3
if(typeof u!=="number")return u.v()
$.b3=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.b3
if(typeof u!=="number")return u.v()
$.b3=u+1
return new Function(n+u+"}")()},
lJ:function(a,b,c,d,e,f,g){return H.nK(a,b,c,d,!!e,!!f,g)},
ld:function(a){return a.a},
m_:function(a){return a.c},
fE:function(a){var u,t,s,r=new H.cu("self","target","receiver","name"),q=J.lj(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
G:function(a){if(a==null)H.pq("boolean expression must not be null")
return a},
M:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b1(a,"String"))},
pA:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b1(a,"double"))},
n5:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b1(a,"num"))},
lG:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b1(a,"bool"))},
ad:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b1(a,"int"))},
n7:function(a,b){throw H.c(H.b1(a,H.cr(H.M(b).substring(2))))},
pS:function(a,b){throw H.c(H.nF(a,H.cr(H.M(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.T(a)[b])return a
H.n7(a,b)},
r:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.pS(a,b)},
qJ:function(a){if(a==null)return a
if(!!J.T(a).$ib)return a
throw H.c(H.b1(a,"List<dynamic>"))},
n3:function(a,b){var u
if(a==null)return a
u=J.T(a)
if(!!u.$ib)return a
if(u[b])return a
H.n7(a,b)},
mZ:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ad(u)]
else return a.$S()}return},
fp:function(a,b){var u
if(typeof a=="function")return!0
u=H.mZ(J.T(a))
if(u==null)return!1
return H.mL(u,null,b,null)},
o:function(a,b){var u,t
if(a==null)return a
if($.lC)return a
$.lC=!0
try{if(H.fp(a,b))return a
u=H.l2(b)
t=H.b1(a,u)
throw H.c(t)}finally{$.lC=!1}},
lL:function(a,b){if(a!=null&&!H.lI(a,b))H.w(H.b1(a,H.l2(b)))
return a},
b1:function(a,b){return new H.iY("TypeError: "+P.dK(a)+": type '"+H.i(H.mR(a))+"' is not a subtype of type '"+b+"'")},
nF:function(a,b){return new H.fF("CastError: "+P.dK(a)+": type '"+H.i(H.mR(a))+"' is not a subtype of type '"+b+"'")},
mR:function(a){var u,t=J.T(a)
if(!!t.$icx){u=H.mZ(t)
if(u!=null)return H.l2(u)
return"Closure"}return H.cU(a)},
pq:function(a){throw H.c(new H.jA(a))},
pX:function(a){throw H.c(new P.fP(a))},
oj:function(a){return new H.ij(a)},
n0:function(a){return v.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
bS:function(a){if(a==null)return
return a.$ti},
qI:function(a,b,c){return H.cq(a["$a"+H.i(c)],H.bS(b))},
co:function(a,b,c,d){var u=H.cq(a["$a"+H.i(c)],H.bS(b))
return u==null?null:u[d]},
at:function(a,b,c){var u=H.cq(a["$a"+H.i(b)],H.bS(a))
return u==null?null:u[c]},
q:function(a,b){var u=H.bS(a)
return u==null?null:u[b]},
l2:function(a){return H.bR(a,null)},
bR:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cr(a[0].name)+H.lF(a,1,b)
if(typeof a=="function")return H.cr(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ad(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.i(b[t])}if('func' in a)return H.p_(a,b)
if('futureOr' in a)return"FutureOr<"+H.bR("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
p_:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.e([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.b.v(p,a0[m])
l=u[q]
if(l!=null&&l!==P.V)p+=" extends "+H.bR(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bR(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bR(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bR(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.pC(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.M(n[g])
i=i+h+H.bR(d[c],a0)+(" "+H.i(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lF:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.a8("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bR(p,c)}return"<"+u.i(0)+">"},
cq:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lH:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bS(a)
t=J.T(a)
if(t[b]==null)return!1
return H.mU(H.cq(t[d],u),null,c,null)},
m:function(a,b,c,d){if(a==null)return a
if(H.lH(a,b,c,d))return a
throw H.c(H.b1(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cr(b.substring(2))+H.lF(c,0,null),v.mangledGlobalNames)))},
mU:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aO(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aO(a[t],b,c[t],d))return!1
return!0},
qG:function(a,b,c){return a.apply(b,H.cq(J.T(b)["$a"+H.i(c)],H.bS(b)))},
n2:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="V"||a.name==="N"||a===-1||a===-2||H.n2(u)}return!1},
lI:function(a,b){var u,t
if(a==null)return b==null||b.name==="V"||b.name==="N"||b===-1||b===-2||H.n2(b)
if(b==null||b===-1||b.name==="V"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lI(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fp(a,b)}u=J.T(a).constructor
t=H.bS(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aO(u,null,b,null)},
F:function(a,b){if(a!=null&&!H.lI(a,b))throw H.c(H.b1(a,H.l2(b)))
return a},
aO:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="V"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="V"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aO(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="N")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aO("type" in a?a.type:l,b,s,d)
else if(H.aO(a,b,s,d))return!0
else{if(!('$i'+"cD" in t.prototype))return!1
r=t.prototype["$a"+"cD"]
q=H.cq(r,u?a.slice(1):l)
return H.aO(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.mL(a,b,c,d)
if('func' in a)return c.name==="bH"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mU(H.cq(m,u),b,p,d)},
mL:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aO(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aO(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aO(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aO(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pQ(h,b,g,d)},
pQ:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aO(c[s],d,a[s],b))return!1}return!0},
qH:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pO:function(a){var u,t,s,r,q=H.M($.n1.$1(a)),p=$.kJ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kP[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.M($.mT.$2(a,q))
if(q!=null){p=$.kJ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kP[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.l1(u)
$.kJ[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kP[q]=u
return u}if(s==="-"){r=H.l1(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.n6(a,u)
if(s==="*")throw H.c(P.j7(q))
if(v.leafTags[q]===true){r=H.l1(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.n6(a,u)},
n6:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lN(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
l1:function(a){return J.lN(a,!1,null,!!a.$iL)},
pP:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.l1(u)
else return J.lN(u,c,null,null)},
pI:function(){if(!0===$.lM)return
$.lM=!0
H.pJ()},
pJ:function(){var u,t,s,r,q,p,o,n
$.kJ=Object.create(null)
$.kP=Object.create(null)
H.pH()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.n8.$1(q)
if(p!=null){o=H.pP(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pH:function(){var u,t,s,r,q,p,o=C.G()
o=H.cj(C.H,H.cj(C.I,H.cj(C.v,H.cj(C.v,H.cj(C.J,H.cj(C.K,H.cj(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.n1=new H.kM(r)
$.mT=new H.kN(q)
$.n8=new H.kO(p)},
cj:function(a,b){return a(b)||b},
nV:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.a7("Illegal RegExp pattern ("+String(p)+")",a,null))},
pV:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pB:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n9:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lQ:function(a,b,c){var u=H.pW(a,b,c)
return u},
pW:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n9(b),'g'),H.pB(c))},
fJ:function fJ(){},
fK:function fK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iW:function iW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i0:function i0(a,b){this.a=a
this.b=b},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
j8:function j8(a){this.a=a},
l9:function l9(a){this.a=a},
f0:function f0(a){this.a=a
this.b=null},
cx:function cx(){},
iJ:function iJ(){},
iz:function iz(){},
cu:function cu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iY:function iY(a){this.a=a},
fF:function fF(a){this.a=a},
ij:function ij(a){this.a=a},
jA:function jA(a){this.a=a},
a4:function a4(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hn:function hn(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ho:function ho(a,b){this.a=a
this.$ti=b},
hp:function hp(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
hi:function hi(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ch:function(a){return a},
o3:function(a){return new Int8Array(a)},
bj:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cl(b,a))},
oY:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.pz(a,b,c))
return b},
cO:function cO(){},
bL:function bL(){},
dZ:function dZ(){},
cP:function cP(){},
e_:function e_(){},
hT:function hT(){},
hU:function hU(){},
hV:function hV(){},
hW:function hW(){},
hX:function hX(){},
e0:function e0(){},
cQ:function cQ(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
dh:function dh(){},
pC:function(a){return J.m6(a?Object.keys(a):[],null)},
pZ:function(a){return v.mangledGlobalNames[a]},
pR:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lN:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kK:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lM==null){H.pI()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.j7("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lR()]
if(r!=null)return r
r=H.pO(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.lR(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
nU:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.lc(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ai(a,0,4294967295,"length",null))
return J.m6(new Array(a),b)},
m6:function(a,b){return J.lj(H.e(a,[b]))},
lj:function(a){a.fixed$length=Array
return a},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dN.prototype
return J.dM.prototype}if(typeof a=="string")return J.bJ.prototype
if(a==null)return J.dO.prototype
if(typeof a=="boolean")return J.hh.prototype
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.V)return a
return J.kK(a)},
dr:function(a){if(typeof a=="string")return J.bJ.prototype
if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.V)return a
return J.kK(a)},
fq:function(a){if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.V)return a
return J.kK(a)},
n_:function(a){if(typeof a=="number")return J.cH.prototype
if(typeof a=="string")return J.bJ.prototype
if(a==null)return a
if(!(a instanceof P.V))return J.cc.prototype
return a},
ds:function(a){if(typeof a=="string")return J.bJ.prototype
if(a==null)return a
if(!(a instanceof P.V))return J.cc.prototype
return a},
cn:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.V)return a
return J.kK(a)},
K:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).t(a,b)},
lT:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.n_(a).q(a,b)},
dv:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pL(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dr(a).j(a,b)},
la:function(a,b,c){return J.fq(a).k(a,b,c)},
nw:function(a,b){return J.ds(a).E(a,b)},
nx:function(a,b,c){return J.cn(a).hG(a,b,c)},
ny:function(a,b,c,d){return J.cn(a).i9(a,b,c,d)},
nz:function(a,b){return J.ds(a).Y(a,b)},
lb:function(a,b){return J.n_(a).ir(a,b)},
fs:function(a,b){return J.fq(a).J(a,b)},
nA:function(a,b,c,d){return J.cn(a).iI(a,b,c,d)},
lU:function(a,b){return J.fq(a).H(a,b)},
nB:function(a){return J.cn(a).gil(a)},
lV:function(a){return J.cn(a).gcg(a)},
dw:function(a){return J.T(a).gI(a)},
bz:function(a){return J.fq(a).gW(a)},
aF:function(a){return J.dr(a).gn(a)},
lW:function(a){return J.fq(a).je(a)},
nC:function(a,b){return J.cn(a).ji(a,b)},
nD:function(a,b,c){return J.ds(a).u(a,b,c)},
nE:function(a){return J.ds(a).jr(a)},
au:function(a){return J.T(a).i(a)},
a:function a(){},
hh:function hh(){},
dO:function dO(){},
dP:function dP(){},
i4:function i4(){},
cc:function cc(){},
bK:function bK(){},
b7:function b7(a){this.$ti=a},
lk:function lk(a){this.$ti=a},
az:function az(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cH:function cH(){},
dN:function dN(){},
dM:function dM(){},
bJ:function bJ(){}},P={
oz:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pr()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.ck(new P.jC(s),1)).observe(u,{childList:true})
return new P.jB(s,u,t)}else if(self.setImmediate!=null)return P.ps()
return P.pt()},
oA:function(a){self.scheduleImmediate(H.ck(new P.jD(H.o(a,{func:1,ret:-1})),0))},
oB:function(a){self.setImmediate(H.ck(new P.jE(H.o(a,{func:1,ret:-1})),0))},
oC:function(a){P.lq(C.o,H.o(a,{func:1,ret:-1}))},
lq:function(a,b){var u=C.d.a9(a.a,1000)
return P.oI(u<0?0:u,b)},
mp:function(a,b){var u=C.d.a9(a.a,1000)
return P.oJ(u<0?0:u,b)},
oI:function(a,b){var u=new P.f6()
u.f3(a,b)
return u},
oJ:function(a,b){var u=new P.f6()
u.f4(a,b)
return u},
oD:function(a,b){var u,t,s
b.a=1
try{a.eu(new P.jO(b),new P.jP(b),null)}catch(s){u=H.ak(s)
t=H.cp(s)
P.pT(new P.jQ(b,u,t))}},
mB:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaN")
if(u>=4){t=b.c5()
b.a=a.a
b.c=a.c
P.dc(b,t)}else{t=H.f(b.c,"$ibi")
b.a=2
b.c=a
a.dq(t)}},
dc:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$iap")
P.kA(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.dc(h.a,b)}g=h.a
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
if(m){H.f(q,"$iap")
P.kA(i,i,g.b,q.a,q.b)
return}l=$.a2
if(l!==n)$.a2=n
else l=i
g=b.c
if((g&15)===8)new P.jU(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.jT(u,b,q).$0()}else if((g&2)!==0)new P.jS(h,u,b).$0()
if(l!=null)$.a2=l
g=u.b
if(!!J.T(g).$icD){if(g.a>=4){k=H.f(o.c,"$ibi")
o.c=null
b=o.bo(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.mB(g,o)
return}}j=b.b
k=H.f(j.c,"$ibi")
j.c=null
b=j.bo(k)
g=u.a
p=u.b
if(!g){H.F(p,H.q(j,0))
j.a=4
j.c=p}else{H.f(p,"$iap")
j.a=8
j.c=p}h.a=j
g=j}},
pm:function(a,b){if(H.fp(a,{func:1,args:[P.V,P.ax]}))return H.o(a,{func:1,ret:null,args:[P.V,P.ax]})
if(H.fp(a,{func:1,args:[P.V]}))return H.o(a,{func:1,ret:null,args:[P.V]})
throw H.c(P.lc(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pl:function(){var u,t
for(;u=$.ci,u!=null;){$.dq=null
t=u.b
$.ci=t
if(t==null)$.dp=null
u.a.$0()}},
pp:function(){$.lD=!0
try{P.pl()}finally{$.dq=null
$.lD=!1
if($.ci!=null)$.lS().$1(P.mV())}},
mQ:function(a){var u=new P.et(a)
if($.ci==null){$.ci=$.dp=u
if(!$.lD)$.lS().$1(P.mV())}else $.dp=$.dp.b=u},
po:function(a){var u,t,s=$.ci
if(s==null){P.mQ(a)
$.dq=$.dp
return}u=new P.et(a)
t=$.dq
if(t==null){u.b=s
$.ci=$.dq=u}else{u.b=t.b
$.dq=t.b=u
if(u.b==null)$.dp=u}},
pT:function(a){var u=null,t=$.a2
if(C.f===t){P.kC(u,u,C.f,a)
return}P.kC(u,u,t,H.o(t.cc(a),{func:1,ret:-1}))},
mo:function(a,b){var u=$.a2
if(u===C.f)return P.lq(a,H.o(b,{func:1,ret:-1}))
return P.lq(a,H.o(u.cc(b),{func:1,ret:-1}))},
op:function(a,b){var u=$.a2
if(u===C.f)return P.mp(a,H.o(b,{func:1,ret:-1,args:[P.be]}))
return P.mp(a,H.o(u.dH(b,P.be),{func:1,ret:-1,args:[P.be]}))},
kA:function(a,b,c,d,e){var u={}
u.a=d
P.po(new P.kB(u,e))},
mM:function(a,b,c,d,e){var u,t=$.a2
if(t===c)return d.$0()
$.a2=c
u=t
try{t=d.$0()
return t}finally{$.a2=u}},
mN:function(a,b,c,d,e,f,g){var u,t=$.a2
if(t===c)return d.$1(e)
$.a2=c
u=t
try{t=d.$1(e)
return t}finally{$.a2=u}},
pn:function(a,b,c,d,e,f,g,h,i){var u,t=$.a2
if(t===c)return d.$2(e,f)
$.a2=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a2=u}},
kC:function(a,b,c,d){var u
H.o(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.cc(d):c.im(d,-1)
P.mQ(d)},
jC:function jC(a){this.a=a},
jB:function jB(a,b,c){this.a=a
this.b=b
this.c=c},
jD:function jD(a){this.a=a},
jE:function jE(a){this.a=a},
f6:function f6(){this.c=0},
ki:function ki(a,b){this.a=a
this.b=b},
kh:function kh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bi:function bi(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aN:function aN(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jN:function jN(a,b){this.a=a
this.b=b},
jR:function jR(a,b){this.a=a
this.b=b},
jO:function jO(a){this.a=a},
jP:function jP(a){this.a=a},
jQ:function jQ(a,b,c){this.a=a
this.b=b
this.c=c},
jU:function jU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jV:function jV(a){this.a=a},
jT:function jT(a,b,c){this.a=a
this.b=b
this.c=c},
jS:function jS(a,b,c){this.a=a
this.b=b
this.c=c},
et:function et(a){this.a=a
this.b=null},
iC:function iC(){},
iE:function iE(a,b){this.a=a
this.b=b},
iF:function iF(a,b){this.a=a
this.b=b},
cZ:function cZ(){},
iD:function iD(){},
be:function be(){},
ap:function ap(a,b){this.a=a
this.b=b},
kr:function kr(){},
kB:function kB(a,b){this.a=a
this.b=b},
k0:function k0(){},
k2:function k2(a,b,c){this.a=a
this.b=b
this.c=c},
k1:function k1(a,b){this.a=a
this.b=b},
k3:function k3(a,b,c){this.a=a
this.b=b
this.c=c},
nX:function(a,b){return new H.a4([a,b])},
ln:function(a,b){return new H.a4([a,b])},
nZ:function(a){return H.pD(a,new H.a4([null,null]))},
dS:function(a){return new P.jZ([a])},
lx:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oH:function(a,b,c){var u=new P.eI(a,b,[c])
u.c=a.e
return u},
nS:function(a,b,c){var u,t
if(P.lE(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.e([],[P.h])
C.a.h($.ay,a)
try{P.p0(a,u)}finally{if(0>=$.ay.length)return H.d($.ay,-1)
$.ay.pop()}t=P.mm(b,H.n3(u,"$ik"),", ")+c
return t.charCodeAt(0)==0?t:t},
li:function(a,b,c){var u,t
if(P.lE(a))return b+"..."+c
u=new P.a8(b)
C.a.h($.ay,a)
try{t=u
t.a=P.mm(t.a,a,", ")}finally{if(0>=$.ay.length)return H.d($.ay,-1)
$.ay.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lE:function(a){var u,t
for(u=$.ay.length,t=0;t<u;++t)if(a===$.ay[t])return!0
return!1},
p0:function(a,b){var u,t,s,r,q,p,o,n=a.gW(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.C())return
u=H.i(n.gK(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.C()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gK(n);++l
if(!n.C()){if(l<=4){C.a.h(b,H.i(r))
return}t=H.i(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gK(n);++l
for(;n.C();r=q,q=p){p=n.gK(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2;--l}C.a.h(b,"...")
return}}s=H.i(r)
t=H.i(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.h(b,o)
C.a.h(b,s)
C.a.h(b,t)},
nY:function(a,b,c){var u=P.nX(b,c)
a.H(0,new P.hq(u,b,c))
return u},
m7:function(a,b){var u,t,s=P.dS(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t)s.h(0,H.F(a[t],b))
return s},
lo:function(a){var u,t={}
if(P.lE(a))return"{...}"
u=new P.a8("")
try{C.a.h($.ay,a)
u.a+="{"
t.a=!0
J.lU(a,new P.hu(t,u))
u.a+="}"}finally{if(0>=$.ay.length)return H.d($.ay,-1)
$.ay.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jZ:function jZ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ce:function ce(a){this.a=a
this.c=this.b=null},
eI:function eI(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hq:function hq(a,b,c){this.a=a
this.b=b
this.c=c},
hr:function hr(){},
z:function z(){},
ht:function ht(){},
hu:function hu(a,b){this.a=a
this.b=b},
af:function af(){},
kj:function kj(){},
hv:function hv(){},
en:function en(a,b){this.a=a
this.$ti=b},
k5:function k5(){},
eJ:function eJ(){},
fc:function fc(){},
ot:function(a,b,c,d){if(b instanceof Uint8Array)return P.ou(!1,b,c,d)
return},
ou:function(a,b,c,d){var u,t,s=$.no()
if(s==null)return
u=0===c
if(u&&!0)return P.lt(s,b)
t=b.length
d=P.bO(c,d,t)
if(u&&d===t)return P.lt(s,b)
return P.lt(s,b.subarray(c,d))},
lt:function(a,b){if(P.ow(b))return
return P.ox(a,b)},
ox:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ak(t)}return},
ow:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
ov:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ak(t)}return},
mP:function(a,b,c){var u,t,s
for(u=J.dr(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.aj()
if((s&127)!==s)return t-b}return c-b},
lY:function(a,b,c,d,e,f){if(C.d.bi(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fB:function fB(){},
fC:function fC(){},
bX:function bX(){},
bD:function bD(){},
fZ:function fZ(){},
he:function he(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
hd:function hd(a){this.a=a},
jg:function jg(){},
ji:function ji(){},
kp:function kp(a){this.b=0
this.c=a},
jh:function jh(a){this.a=a},
ko:function ko(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fr:function(a,b,c){var u=H.od(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a7(a,null,null))},
nP:function(a){if(a instanceof H.cx)return a.i(0)
return"Instance of '"+H.i(H.cU(a))+"'"},
o_:function(a,b,c){var u,t=J.nU(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.k(t,u,b)
return H.m(t,"$ib",[c],"$ab")},
m8:function(a,b,c){var u,t=[c],s=H.e([],t)
for(u=J.bz(a);u.C();)C.a.h(s,H.F(u.gK(u),c))
if(b)return s
return H.m(J.lj(s),"$ib",t,"$ab")},
d_:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.m(a,"$ib7",[P.l],"$ab7")
u=a.length
c=P.bO(b,c,u)
return H.mg(b>0||c<u?C.a.eJ(a,b,c):a)}if(!!J.T(a).$icQ)return H.of(a,b,P.bO(b,c,a.length))
return P.on(a,b,c)},
on:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.ai(b,0,J.aF(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.ai(c,b,J.aF(a),q,q))
t=J.bz(a)
for(s=0;s<b;++s)if(!t.C())throw H.c(P.ai(b,0,s,q,q))
r=[]
if(u)for(;t.C();)r.push(t.gK(t))
else for(s=b;s<c;++s){if(!t.C())throw H.c(P.ai(c,b,s,q,q))
r.push(t.gK(t))}return H.mg(r)},
oh:function(a){return new H.hi(a,H.nV(a,!1,!0,!1,!1,!1))},
mm:function(a,b,c){var u=J.bz(b)
if(!u.C())return a
if(c.length===0){do a+=H.i(u.gK(u))
while(u.C())}else{a+=H.i(u.gK(u))
for(;u.C();)a=a+c+H.i(u.gK(u))}return a},
ms:function(){var u=H.o5()
if(u!=null)return P.os(u)
throw H.c(P.J("'Uri.base' is not supported"))},
fd:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.nu().b
if(typeof b!=="string")H.w(H.b2(b))
u=u.test(b)}else u=!1
if(u)return b
H.F(b,H.at(c,"bX",0))
t=c.giH().ci(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c4(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nM:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nN:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dG:function(a){if(a>=10)return""+a
return"0"+a},
m2:function(a){return new P.bF(1000*a)},
dK:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.au(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nP(a)},
dy:function(a){return new P.aP(!1,null,null,a)},
lc:function(a,b,c){return new P.aP(!0,a,b,c)},
e6:function(a,b){return new P.c5(null,null,!0,a,b,"Value not in range")},
ai:function(a,b,c,d,e){return new P.c5(b,c,!0,a,d,"Invalid value")},
bO:function(a,b,c){if(0>a||a>c)throw H.c(P.ai(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ai(b,a,c,"end",null))
return b}return c},
mh:function(a,b){if(typeof a!=="number")return a.R()
if(a<0)throw H.c(P.ai(a,0,null,b,null))},
Z:function(a,b,c,d,e){var u=H.ad(e==null?J.aF(b):e)
return new P.hf(u,!0,a,c,"Index out of range")},
J:function(a){return new P.j9(a)},
j7:function(a){return new P.j6(a)},
ml:function(a){return new P.cY(a)},
bl:function(a){return new P.fI(a)},
u:function(a){return new P.eB(a)},
a7:function(a,b,c){return new P.h8(a,b,c)},
o0:function(a,b,c){var u,t=H.e([],[c])
C.a.sn(t,a)
for(u=0;u<a;++u)C.a.k(t,u,b.$1(u))
return t},
lP:function(a){H.pR(a)},
os:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.E(a,4)^58)*3|C.b.E(a,0)^100|C.b.E(a,1)^97|C.b.E(a,2)^116|C.b.E(a,3)^97)>>>0
if(u===0)return P.mr(e<e?C.b.u(a,0,e):a,5,f).geA()
else if(u===32)return P.mr(C.b.u(a,5,e),0,f).geA()}t=new Array(8)
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
if(P.mO(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.ju()
if(r>=0)if(P.mO(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.v()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.R()
if(typeof n!=="number")return H.D(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.b.a6(a,"..",o)))j=n>o+2&&C.b.a6(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.a6(a,"file",0)){if(q<=0){if(!C.b.a6(a,"/",o)){i="file:///"
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
a=C.b.b0(a,o,n,"/");++e
n=h}k="file"}else if(C.b.a6(a,"http",0)){if(t&&p+3===o&&C.b.a6(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.b0(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.a6(a,"https",0)){if(t&&p+4===o&&C.b.a6(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.b0(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.u(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.k8(a,r,q,p,o,n,m,k)}return P.oK(a,0,e,r,q,p,o,n,m,k)},
mu:function(a){var u=P.h
return C.a.iN(H.e(a.split("&"),[u]),P.ln(u,u),new P.je(C.h),[P.B,P.h,P.h])},
or:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jb(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.Y(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fr(C.b.u(a,s,t),n,n)
if(typeof p!=="number")return p.a1()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fr(C.b.u(a,s,c),n,n)
if(typeof p!=="number")return p.a1()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
mt:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.jc(a),d=new P.jd(e,a)
if(a.length<2)e.$1("address is too short")
u=H.e([],[P.l])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.b.Y(a,t)
if(p===58){if(t===b){++t
if(C.b.Y(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
C.a.h(u,-1)
r=!0}else C.a.h(u,d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.a.gav(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)C.a.h(u,d.$2(s,c))
else{m=P.or(a,s,c)
C.a.h(u,(m[0]<<8|m[1])>>>0)
C.a.h(u,(m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.d(l,i)
l[i]=0
f=i+1
if(f>=k)return H.d(l,f)
l[f]=0
i+=2}else{f=C.d.aU(h,8)
if(i<0||i>=k)return H.d(l,i)
l[i]=f
f=i+1
if(f>=k)return H.d(l,f)
l[f]=h&255
i+=2}}return l},
oK:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oS(a,b,d)
else{if(d===b)P.cg(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oT(a,u,e-1):""
s=P.oP(a,e,f,!1)
if(typeof f!=="number")return f.v()
r=f+1
if(typeof g!=="number")return H.D(g)
q=r<g?P.oR(P.fr(C.b.u(a,r,g),new P.kk(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oQ(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.R()
o=h<i?P.lz(a,h+1,i,n):n
return new P.cf(j,t,s,q,p,o,i<c?P.oO(a,i+1,c):n)},
mF:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cg:function(a,b,c){throw H.c(P.a7(c,a,b))},
oR:function(a,b){if(a!=null&&a===P.mF(b))return
return a},
oP:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.b.Y(a,b)===91){if(typeof c!=="number")return c.L()
u=c-1
if(C.b.Y(a,u)!==93)P.cg(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.oM(a,t,u)
if(typeof s!=="number")return s.R()
if(s<u){r=s+1
q=P.mK(a,C.b.a6(a,"25",r)?s+3:r,u,"%25")}else q=""
P.mt(a,t,s)
return C.b.u(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.D(c)
p=b
for(;p<c;++p)if(C.b.Y(a,p)===58){s=C.b.bx(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.mK(a,C.b.a6(a,"25",r)?s+3:r,c,"%25")}else q=""
P.mt(a,b,s)
return"["+C.b.u(a,b,s)+q+"]"}return P.oV(a,b,c)},
oM:function(a,b,c){var u,t=C.b.bx(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.D(c)
u=t<c}else u=!1
return u?t:c},
mK:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.a8(d):null
if(typeof c!=="number")return H.D(c)
u=b
t=u
s=!0
for(;u<c;){r=C.b.Y(a,u)
if(r===37){q=P.lA(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.a8("")
o=l.a+=C.b.u(a,t,u)
if(p)q=C.b.u(a,u,u+3)
else if(q==="%")P.cg(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.i,p)
p=(C.i[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.a8("")
if(t<u){l.a+=C.b.u(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.b.Y(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.a8("")
l.a+=C.b.u(a,t,u)
l.a+=P.ly(r)
u+=m
t=u}}}if(l==null)return C.b.u(a,b,c)
if(t<c)l.a+=C.b.u(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
oV:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.D(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.Y(a,u)
if(q===37){p=P.lA(a,u,!0)
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
if(o>=8)return H.d(C.z,o)
o=(C.z[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.a8("")
if(t<u){s.a+=C.b.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.l,o)
o=(C.l[o]&1<<(q&15))!==0}else o=!1
if(o)P.cg(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.Y(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.a8("")
n=C.b.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.ly(q)
u+=l
t=u}}}}if(s==null)return C.b.u(a,b,c)
if(t<c){n=C.b.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oS:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mH(C.b.E(a,b)))P.cg(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.E(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.n,r)
r=(C.n[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cg(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.u(a,b,c)
return P.oL(t?a.toLowerCase():a)},
oL:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oT:function(a,b,c){return P.dm(a,b,c,C.W,!1)},
oQ:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dm(a,b,c,C.A,!0):C.k.jI(d,new P.kl(),P.h).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a3(u,"/"))u="/"+u
return P.oU(u,e,f)},
oU:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a3(a,"/"))return P.oW(a,!u||c)
return P.oX(a)},
lz:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.dy("Both query and queryParameters specified"))
return P.dm(a,b,c,C.m,!0)}if(d==null)return
u=new P.a8("")
t.a=""
d.H(0,new P.km(new P.kn(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oO:function(a,b,c){return P.dm(a,b,c,C.m,!0)},
lA:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.Y(a,b+1)
t=C.b.Y(a,p)
s=H.kL(u)
r=H.kL(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aU(q,4)
if(p>=8)return H.d(C.i,p)
p=(C.i[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c4(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.u(a,b,b+3).toUpperCase()
return},
ly:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.e(u,[P.l])
C.a.k(t,0,37)
C.a.k(t,1,C.b.E(o,a>>>4))
C.a.k(t,2,C.b.E(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.e(u,[P.l])
for(q=0;--r,r>=0;s=128){p=C.d.hT(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.E(o,p>>>4))
C.a.k(t,q+2,C.b.E(o,p&15))
q+=3}}return P.d_(t,0,null)},
dm:function(a,b,c,d,e){var u=P.mJ(a,b,c,d,e)
return u==null?C.b.u(a,b,c):u},
mJ:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.R()
if(typeof c!=="number")return H.D(c)
if(!(o<c))break
c$0:{u=C.b.Y(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.lA(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.l,t)
t=(C.l[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.cg(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.b.Y(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.ly(u)}}if(m==null)m=new P.a8("")
m.a+=C.b.u(a,n,o)
m.a+=H.i(s)
if(typeof r!=="number")return H.D(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.R()
if(n<c)m.a+=C.b.u(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
mI:function(a){if(C.b.a3(a,"."))return!0
return C.b.e6(a,"/.")!==-1},
oX:function(a){var u,t,s,r,q,p,o
if(!P.mI(a))return a
u=H.e([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.K(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oW:function(a,b){var u,t,s,r,q,p
if(!P.mI(a))return!b?P.mG(a):a
u=H.e([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gav(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gav(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.d(u,0)
C.a.k(u,0,P.mG(u[0]))}return C.a.m(u,"/")},
mG:function(a){var u,t,s,r=a.length
if(r>=2&&P.mH(J.nw(a,0)))for(u=1;u<r;++u){t=C.b.E(a,u)
if(t===58)return C.b.u(a,0,u)+"%3A"+C.b.ab(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.n,s)
s=(C.n[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oN:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.E(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dy("Invalid URL encoding"))}}return u},
lB:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.E(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.u(a,b,c)
else r=new H.t(C.b.u(a,b,c))}else{r=H.e([],[P.l])
for(s=a.length,q=b;q<c;++q){t=C.b.E(a,q)
if(t>127)throw H.c(P.dy("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.dy("Truncated URI"))
C.a.h(r,P.oN(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.m(r,"$ib",[P.l],"$ab")
return new P.jh(!1).ci(r)},
mH:function(a){var u=a|32
return 97<=u&&u<=122},
mr:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.e([b-1],[P.l])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.E(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a7(m,a,t))}}if(s<0&&t>b)throw H.c(P.a7(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.E(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gav(l)
if(r!==44||t!==p+7||!C.b.a6(a,"base64",p+1))throw H.c(P.a7("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.iY(0,a,o,u)
else{n=P.mJ(a,o,u,C.m,!0)
if(n!=null)a=C.b.b0(a,o,u,n)}return new P.ja(a,l,c)},
oZ:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.o0(22,new P.kv(),P.Q),n=new P.ku(o),m=new P.kw(),l=new P.kx(),k=H.f(n.$2(0,225),"$iQ")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iQ")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iQ")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iQ")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iQ")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iQ")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iQ")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iQ")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iQ")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iQ"),"]",5)
k=H.f(n.$2(9,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iQ")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iQ")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iQ"),"az",21)
k=H.f(n.$2(21,245),"$iQ")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mO:function(a,b,c,d,e){var u,t,s,r,q=$.nv()
for(u=b;u<c;++u){if(d<0||d>=q.length)return H.d(q,d)
t=q[d]
s=C.b.E(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.d(t,s)
r=t[s]
d=r&31
C.a.k(e,r>>>5,u)}return d},
R:function R(){},
aA:function aA(a,b){this.a=a
this.b=b},
A:function A(){},
bF:function bF(a){this.a=a},
fV:function fV(){},
fW:function fW(){},
bG:function bG(){},
fv:function fv(){},
e2:function e2(){},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c5:function c5(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hf:function hf(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
j9:function j9(a){this.a=a},
j6:function j6(a){this.a=a},
cY:function cY(a){this.a=a},
fI:function fI(a){this.a=a},
i3:function i3(){},
ec:function ec(){},
fP:function fP(a){this.a=a},
eB:function eB(a){this.a=a},
h8:function h8(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function bH(){},
l:function l(){},
k:function k(){},
b6:function b6(){},
b:function b(){},
B:function B(){},
N:function N(){},
ab:function ab(){},
V:function V(){},
ax:function ax(){},
h:function h(){},
a8:function a8(a){this.a=a},
je:function je(a){this.a=a},
jb:function jb(a){this.a=a},
jc:function jc(a){this.a=a},
jd:function jd(a,b){this.a=a
this.b=b},
cf:function cf(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
kk:function kk(a,b){this.a=a
this.b=b},
kl:function kl(){},
kn:function kn(a,b){this.a=a
this.b=b},
km:function km(a){this.a=a},
ja:function ja(a,b,c){this.a=a
this.b=b
this.c=c},
kv:function kv(){},
ku:function ku(a){this.a=a},
kw:function kw(){},
kx:function kx(){},
k8:function k8(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jI:function jI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
px:function(a){var u,t=J.T(a)
if(!!t.$ibn){u=t.gdL(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fb(a.data,a.height,a.width)},
pw:function(a){if(a instanceof P.fb)return{data:a.a,height:a.b,width:a.c}
return a},
bt:function(a){var u,t,s,r,q
if(a==null)return
u=P.ln(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r){q=H.M(t[r])
u.k(0,q,a[q])}return u},
pv:function(a){var u={}
a.H(0,new P.kD(u))
return u},
ka:function ka(){},
kc:function kc(a,b){this.a=a
this.b=b},
fb:function fb(a,b,c){this.a=a
this.b=b
this.c=c},
kD:function kD(a){this.a=a},
kb:function kb(a,b){this.a=a
this.b=b},
h4:function h4(a,b){this.a=a
this.b=b},
h5:function h5(){},
h6:function h6(){},
jY:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oG:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k_:function k_(){},
am:function am(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b9:function b9(){},
hl:function hl(){},
bc:function bc(){},
i1:function i1(){},
i8:function i8(){},
cV:function cV(){},
iG:function iG(){},
p:function p(){},
bf:function bf(){},
iV:function iV(){},
eG:function eG(){},
eH:function eH(){},
eR:function eR(){},
eS:function eS(){},
f2:function f2(){},
f3:function f3(){},
f9:function f9(){},
fa:function fa(){},
Q:function Q(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(a){this.a=a},
fA:function fA(){},
bU:function bU(){},
i2:function i2(){},
eu:function eu(){},
dA:function dA(){},
e5:function e5(){},
c6:function c6(){},
e8:function e8(){},
ef:function ef(){},
el:function el(){},
iy:function iy(){},
eZ:function eZ(){},
f_:function f_(){}},W={
lX:function(){var u=document.createElement("a")
return u},
le:function(){var u=document.createElement("canvas")
return u},
nO:function(a,b,c){var u=document.body,t=(u&&C.t).af(u,a,b,c)
t.toString
u=W.H
u=new H.d9(new W.ar(t),H.o(new W.fY(),{func:1,ret:P.R,args:[u]}),[u])
return H.f(u.gaL(u),"$iU")},
m5:function(a){H.f(a,"$ij")
return"wheel"},
cA:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cn(a)
t=u.ger(a)
if(typeof t==="string")r=u.ger(a)}catch(s){H.ak(s)}return r},
nR:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icG")
try{s.type=a}catch(u){H.ak(u)}return s},
jX:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mD:function(a,b,c,d){var u=W.jX(W.jX(W.jX(W.jX(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
aa:function(a,b,c,d,e){var u=W.mS(new W.jM(c),W.n)
if(u!=null&&!0)J.ny(a,b,u,!1)
return new W.jL(a,b,u,!1,[e])},
mC:function(a){var u=W.lX(),t=window.location
u=new W.bQ(new W.k4(u,t))
u.eW(a)
return u},
oE:function(a,b,c,d){H.f(a,"$iU")
H.M(b)
H.M(c)
H.f(d,"$ibQ")
return!0},
oF:function(a,b,c,d){var u,t,s
H.f(a,"$iU")
H.M(b)
H.M(c)
u=H.f(d,"$ibQ").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mE:function(){var u=P.h,t=P.m7(C.p,u),s=H.q(C.p,0),r=H.o(new W.kg(),{func:1,ret:u,args:[s]}),q=H.e(["TEMPLATE"],[u])
t=new W.kf(t,P.dS(u),P.dS(u),P.dS(u),null)
t.f2(null,new H.hy(C.p,r,[s,u]),q,null)
return t},
mS:function(a,b){var u=$.a2
if(u===C.f)return a
return u.dH(a,b)},
y:function y(){},
ft:function ft(){},
dx:function dx(){},
fu:function fu(){},
ct:function ct(){},
bV:function bV(){},
bA:function bA(){},
bW:function bW(){},
cw:function cw(){},
bB:function bB(){},
cy:function cy(){},
fL:function fL(){},
W:function W(){},
cz:function cz(){},
fM:function fM(){},
b4:function b4(){},
b5:function b5(){},
fN:function fN(){},
fO:function fO(){},
fR:function fR(){},
aH:function aH(){},
fS:function fS(){},
dH:function dH(){},
dI:function dI(){},
fT:function fT(){},
fU:function fU(){},
jG:function jG(a,b){this.a=a
this.b=b},
U:function U(){},
fY:function fY(){},
n:function n(){},
j:function j(){},
aI:function aI(){},
cC:function cC(){},
h3:function h3(){},
h7:function h7(){},
aR:function aR(){},
hc:function hc(){},
c_:function c_(){},
bn:function bn(){},
cF:function cF(){},
cG:function cG(){},
b8:function b8(){},
dT:function dT(){},
hM:function hM(){},
cL:function cL(){},
hN:function hN(){},
hO:function hO(a){this.a=a},
hP:function hP(){},
hQ:function hQ(a){this.a=a},
aS:function aS(){},
hR:function hR(){},
ag:function ag(){},
ar:function ar(a){this.a=a},
H:function H(){},
cR:function cR(){},
aT:function aT(){},
i6:function i6(){},
ih:function ih(){},
ii:function ii(a){this.a=a},
ik:function ik(){},
aV:function aV(){},
iw:function iw(){},
aW:function aW(){},
ix:function ix(){},
aX:function aX(){},
iA:function iA(){},
iB:function iB(a){this.a=a},
aJ:function aJ(){},
bd:function bd(){},
ed:function ed(){},
iH:function iH(){},
iI:function iI(){},
d0:function d0(){},
aZ:function aZ(){},
aK:function aK(){},
iK:function iK(){},
iL:function iL(){},
iP:function iP(){},
b_:function b_(){},
b0:function b0(){},
iT:function iT(){},
iU:function iU(){},
bP:function bP(){},
jf:function jf(){},
jx:function jx(){},
bh:function bh(){},
da:function da(){},
db:function db(){},
jH:function jH(){},
ew:function ew(){},
jW:function jW(){},
eO:function eO(){},
k9:function k9(){},
kd:function kd(){},
jF:function jF(){},
jJ:function jJ(a){this.a=a},
jK:function jK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lw:function lw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jL:function jL(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jM:function jM(a){this.a=a},
bQ:function bQ(a){this.a=a},
I:function I(){},
e1:function e1(a){this.a=a},
hZ:function hZ(a){this.a=a},
hY:function hY(a,b,c){this.a=a
this.b=b
this.c=c},
eW:function eW(){},
k6:function k6(){},
k7:function k7(){},
kf:function kf(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kg:function kg(){},
ke:function ke(){},
dL:function dL(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aD:function aD(){},
k4:function k4(a,b){this.a=a
this.b=b},
fe:function fe(a){this.a=a},
kq:function kq(a){this.a=a},
ev:function ev(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eP:function eP(){},
eQ:function eQ(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
di:function di(){},
dj:function dj(){},
eX:function eX(){},
eY:function eY(){},
f1:function f1(){},
f4:function f4(){},
f5:function f5(){},
dk:function dk(){},
dl:function dl(){},
f7:function f7(){},
f8:function f8(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){}},O={
lf:function(a){var u=new O.a6([a])
u.bK(a)
return u},
a6:function a6(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cK:function cK(){this.b=this.a=null},
dW:function dW(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hG:function hG(a,b){this.a=a
this.b=b},
hH:function hH(){},
hI:function hI(a,b){this.a=a
this.b=b},
hJ:function hJ(){},
hK:function hK(a,b){this.a=a
this.b=b},
hL:function hL(){},
hA:function hA(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cJ:function cJ(){},
hB:function hB(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ba:function ba(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hD:function hD(){var _=this
_.e=_.d=_.c=_.b=null},
hE:function hE(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hF:function hF(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c7:function c7(){}},E={
oi:function(a,b){var u=new E.ic(a)
u.eR(a,b)
return u},
oo:function(a,b,c,d,e){var u,t,s=J.T(a)
if(!!s.$ibW)return E.mn(a,!0,!0,!0,!1)
u=W.le()
t=u.style
t.width="100%"
t.height="100%"
s.gcg(a).h(0,u)
return E.mn(u,!0,!0,!0,!1)},
mn:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.eh(),j=H.f(C.j.cP(a,"webgl2",P.nZ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic6")
if(j==null)H.w(P.u("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.oi(j,a)
u=new T.iM(j)
H.ad(j.getParameter(3379))
u.c=H.ad(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.eo(a)
t=new X.hk()
t.c=new X.aC(!1,!1,!1)
t.shA(P.dS(P.l))
u.b=t
t=new X.hS(u)
t.f=0
t.r=V.bq()
t.x=V.bq()
t.ch=t.Q=1
u.c=t
t=new X.hs(u)
t.r=0
t.x=V.bq()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iS(u)
t.f=V.bq()
t.r=V.bq()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfo(H.e([],[[P.cZ,P.V]]))
t=u.z
s=document
r=W.ag
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.aa(s,"contextmenu",H.o(u.gfX(),q),!1,r))
t=u.z
p=W.n
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.aa(a,"focus",H.o(u.gh2(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.aa(a,"blur",H.o(u.gfR(),o),!1,p))
t=u.z
n=W.b8
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.aa(s,"keyup",H.o(u.gh6(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.aa(s,"keydown",H.o(u.gh4(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.aa(a,"mousedown",H.o(u.gha(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,"mouseup",H.o(u.ghe(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,l,H.o(u.ghc(),q),!1,r))
n=u.z
W.m5(a)
m=W.bh;(n&&C.a).h(n,W.aa(a,H.M(W.m5(a)),H.o(u.ghg(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.aa(s,l,H.o(u.gfZ(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.aa(s,"mouseup",H.o(u.gh0(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.aa(s,"pointerlockchange",H.o(u.ghi(),o),!1,p))
p=u.z
o=W.b0
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.aa(a,"touchstart",H.o(u.ghv(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchend",H.o(u.ghr(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchmove",H.o(u.ght(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aA(Date.now(),!1)
k.cy=0
k.ds()
return k},
fD:function fD(){},
av:function av(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ic:function ic(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
id:function id(a){this.a=a},
ie:function ie(a){this.a=a},
ig:function ig(a){this.a=a},
eh:function eh(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iO:function iO(a){this.a=a}},Z={
lv:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ch(c)),35044)
a.bindBuffer(b,null)
return new Z.es(b,u)},
aM:function(a){return new Z.bs(a)},
es:function es(a,b){this.a=a
this.b=b},
dB:function dB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jy:function jy(a){this.a=a},
dC:function dC(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bI:function bI(a,b,c){this.a=a
this.b=b
this.c=c},
bs:function bs(a){this.a=a}},D={
Y:function(){var u=new D.bY()
u.sak(null)
u.saS(null)
u.c=null
u.d=0
return u},
fG:function fG(){},
bY:function bY(){var _=this
_.d=_.c=_.b=_.a=null},
h0:function h0(a){this.a=a},
h1:function h1(a){this.a=a},
C:function C(){this.b=null},
c0:function c0(a){this.b=null
this.$ti=a},
c1:function c1(a){this.b=null
this.$ti=a},
P:function P(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bE:function bE(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ae:function ae(){},
dR:function dR(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
e4:function e4(){},
eb:function eb(){}},X={dD:function dD(a,b){this.a=a
this.b=b},dQ:function dQ(a,b){this.a=a
this.b=b},hk:function hk(){var _=this
_.d=_.c=_.b=_.a=null},dU:function dU(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hs:function hs(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aC:function aC(a,b,c){this.a=a
this.b=b
this.c=c},bp:function bp(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hS:function hS(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cM:function cM(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},i7:function i7(){},ej:function ej(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iS:function iS(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},eo:function eo(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nQ:function(a){var u=new X.h9(),t=new V.aG(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.mj
if(t==null){t=V.mi(0,0,1,1)
$.mj=t}u.r=t
return u},
dE:function dE(){},
h9:function h9(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e3:function e3(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ee:function ee(){}},V={
q_:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bi(a-b,u)
return(a<0?a+u:a)+b},
S:function(a,b,c){if(a==null)return C.b.ah("null",c)
return C.b.ah(C.e.ev(Math.abs(a-0)<$.O().a?0:a,b),c+b+1)},
cm:function(a,b,c){var u,t,s,r,q,p=H.e([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.v)(a),++s){r=V.S(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.d(p,q)
C.a.k(p,q,C.b.ah(p[q],t))}return p},
lO:function(a){return C.e.jp(Math.pow(2,C.S.cr(Math.log(H.pu(a))/Math.log(2))))},
dY:function(){var u=$.ma
return u==null?$.ma=V.bb(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bb:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m9:function(a,b,c){var u=c.p(0,Math.sqrt(c.B(c))),t=b.aE(u),s=t.p(0,Math.sqrt(t.B(t))),r=u.aE(s),q=new V.E(a.a,a.b,a.c),p=s.T(0).B(q),o=r.T(0).B(q),n=u.T(0).B(q)
return V.bb(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bq:function(){var u=$.me
return u==null?$.me=new V.a5(0,0):u},
lp:function(){var u=$.cS
return u==null?$.cS=new V.a_(0,0,0):u},
mi:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e7(a,b,c,d)},
d7:function(){var u=$.my
return u==null?$.my=new V.E(0,0,0):u},
oy:function(){var u=$.jj
return u==null?$.jj=new V.E(-1,0,0):u},
lu:function(){var u=$.jk
return u==null?$.jk=new V.E(0,1,0):u},
mz:function(){var u=$.jl
return u==null?$.jl=new V.E(0,0,1):u},
ac:function ac(a,b,c){this.a=a
this.b=b
this.c=c},
aG:function aG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h_:function h_(a){this.a=a},
dX:function dX(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aq:function aq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a5:function a5(a,b){this.a=a
this.b=b},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e7:function e7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
X:function X(a,b){this.a=a
this.b=b},
E:function E(a,b,c){this.a=a
this.b=b
this.c=c},
br:function br(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a0:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.u("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.E(a,0)
t=C.b.E(b,0)
s=new V.ib()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
x:function(a){var u=new V.il()
u.eS(a)
return u},
iR:function(){var u=new V.iQ(),t=P.h
u.shW(new H.a4([t,V.cX]))
u.shZ(new H.a4([t,V.d2]))
u.c=null
return u},
bk:function bk(){},
aB:function aB(){},
dV:function dV(){},
aw:function aw(){this.a=null},
ib:function ib(){this.b=this.a=null},
il:function il(){this.a=null},
cX:function cX(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ei:function ei(a,b,c){this.a=a
this.b=b
this.c=c},
d2:function d2(a){this.b=a
this.c=null},
iQ:function iQ(){this.c=this.b=this.a=null},
d3:function d3(a){this.b=a
this.a=this.c=null},
pU:function(a){P.op(C.P,new V.l3(a))},
ok:function(a){var u=new V.ir()
u.eU(a,!0)
return u},
bC:function bC(){},
l3:function l3(a){this.a=a},
fQ:function fQ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ha:function ha(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hb:function hb(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i5:function i5(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i9:function i9(a){this.a=a
this.c=null},
ia:function ia(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ir:function ir(){this.b=this.a=null},
it:function it(a){this.a=a},
is:function is(a){this.a=a},
iu:function iu(a){this.a=a}},U={
lg:function(){var u=new U.fH()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
m1:function(a){var u=new U.dF()
u.a=a
return u},
fH:function fH(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dF:function dF(){this.b=this.a=null},
cE:function cE(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ah:function ah(){},
ep:function ep(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
eq:function eq(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
er:function er(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dJ:function dJ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
o1:function(a,b){var u=a.bb,t=new A.hz(b,u)
t.eT(b,u)
t.eQ(a,b)
return t},
o2:function(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="MaterialLight_"+a1.gan(a1)+a2.gan(a2)+a3.gan(a3)+a4.gan(a4)+a5.gan(a5)+a6.gan(a6)+a7.gan(a7)+a8.gan(a8)+a9.gan(a9)+"_"
e+=a?"1":"0"
e+=b?"1":"0"
e+=c?"1":"0"
e=e+"0_"+a0
u=b0.length
if(u>0){e+="_Dir"
for(t=0;t<b0.length;b0.length===u||(0,H.v)(b0),++t)e+="_"+H.i(b0[t].a)}u=b1.length
if(u>0){e+="_Point"
for(t=0;t<b1.length;b1.length===u||(0,H.v)(b1),++t)e+="_"+H.i(b1[t].a)}u=b2.length
if(u>0){e+="_Spot"
for(t=0;t<b2.length;b2.length===u||(0,H.v)(b2),++t)e+="_"+H.i(b2[t].a)}for(u=b0.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b0[t].b
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
f=$.bx()
if(k){u=$.bw()
f=new Z.bs(f.a|u.a)}if(j){u=$.bv()
f=new Z.bs(f.a|u.a)}if(i){u=$.by()
f=new Z.bs(f.a|u.a)}if(h){u=$.bu()
f=new Z.bs(f.a|u.a)}return new A.hC(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,s,p,l,p,r,g,!0,!1,!1,o,r,m,k,j,!1,i,h,!1,b,c,!1,a0,e.charCodeAt(0)==0?e:e,f)},
ky:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
kz:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.ky(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.l7(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
p4:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.ky(b,t,"emission")
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
p1:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.kz(b,t,"ambient")
b.a+="\n"},
p2:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
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
p5:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
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
pb:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
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
p7:function(a,b){var u,t,s
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
p9:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.ky(b,t,"reflect")
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
pa:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.ky(b,t,"refract")
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
p3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.i(u)
s=A.l7(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.aj()
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
n=a.b
if(!n.a)n=n.c
else n=!0
if(n)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.e([],r)
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
p8:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.i(u)
s=A.l7(t)
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
if(typeof u!=="number")return u.aj()
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
o=c.a+="   return "+C.a.m(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.e([],r)
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
k=H.e([],r)
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
pc:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.i(u)
s=A.l7(t)
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
if(typeof u!=="number")return u.aj()
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
r=c.a+="   return "+C.a.m(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.e([],u)
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
i=H.e([],u)
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
p6:function(a,b){var u,t
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
pd:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.a8("")
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
A.p4(a,i)
A.p1(a,i)
A.p2(a,i)
A.p5(a,i)
A.pb(a,i)
t=a.cy
if(t){r=i.a+="// === Enviromental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.p9(a,i)
A.pa(a,i)}A.p7(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.v)(q),++n)A.p3(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.v)(q),++n)A.p8(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.v)(q),++n)A.pc(a,q[n],i)
A.p6(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.e([],[P.h])
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
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.v)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.ab(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.v)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.ab(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.v)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.ab(r,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
pe:function(a,b){var u,t,s
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
pg:function(a,b){var u
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
pf:function(a,b){var u
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
pi:function(a,b){var u,t
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
pj:function(a,b){var u,t
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
ph:function(a,b){var u
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
pk:function(a,b){var u
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
l7:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.b.ab(a,1)},
lr:function(a,b,c,d,e){var u=new A.j_(a,c,e)
u.f=d
u.si6(P.o_(d,0,P.l))
return u},
dz:function dz(a,b,c){this.a=a
this.b=b
this.c=c},
fw:function fw(a){this.a=a},
al:function al(a,b,c){this.a=a
this.b=b
this.c=c},
hz:function hz(a,b){var _=this
_.dO=_.jz=_.dN=_.bw=_.bb=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jH=_.jG=_.jF=_.cq=_.cp=_.co=_.cn=_.cm=_.cl=_.e_=_.jE=_.dZ=_.dY=_.jD=_.dX=_.dW=_.dV=_.jC=_.dU=_.dT=_.dS=_.jB=_.dR=_.dQ=_.jA=_.dP=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aQ:function aQ(a,b){this.a=a
this.b=b},
aU:function aU(a,b){this.a=a
this.b=b},
aY:function aY(a,b){this.a=a
this.b=b},
hC:function hC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.bb=b3
_.bw=b4},
c8:function c8(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c9:function c9(a,b,c,d,e,f,g,h,i,j){var _=this
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
cb:function cb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cW:function cW(){},
ek:function ek(){},
j4:function j4(a){this.a=a},
aL:function aL(a,b,c){this.a=a
this.c=b
this.d=c},
j1:function j1(a,b,c){this.a=a
this.c=b
this.d=c},
j2:function j2(a,b,c){this.a=a
this.c=b
this.d=c},
j3:function j3(a,b,c){this.a=a
this.c=b
this.d=c},
j_:function j_(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
aj:function aj(a,b,c){this.a=a
this.c=b
this.d=c},
j0:function j0(a,b,c){this.a=a
this.c=b
this.d=c},
a1:function a1(a,b,c){this.a=a
this.c=b
this.d=c},
d4:function d4(a,b,c){this.a=a
this.c=b
this.d=c},
j5:function j5(a,b,c){this.a=a
this.c=b
this.d=c},
d5:function d5(a,b,c){this.a=a
this.c=b
this.d=c},
aE:function aE(a,b,c){this.a=a
this.c=b
this.d=c},
ca:function ca(a,b,c){this.a=a
this.c=b
this.d=c},
an:function an(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lK:function(a,b,c,d){var u=F.im()
F.dn(u,b,c,d,a,1,0,0,1)
F.dn(u,b,c,d,a,0,1,0,3)
F.dn(u,b,c,d,a,0,0,1,2)
F.dn(u,b,c,d,a,-1,0,0,0)
F.dn(u,b,c,d,a,0,-1,0,0)
F.dn(u,b,c,d,a,0,0,-1,3)
u.al()
return u},
kt:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dn:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.E(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.E(u+a3,t+a1,s+a2)
q=new V.E(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.E(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.kt(i)
l=F.kt(j.b)
k=F.l6(d,a0,new F.ks(j,F.kt(j.c),F.kt(j.d),l,m,c),b)
if(k!=null)a.aZ(k)},
mY:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.im()
t=b?-1:1
s=-6.283185307179586/e
r=H.e([],[F.ao])
q=u.a
p=new V.E(0,0,t)
p=p.p(0,Math.sqrt(p.B(p)))
C.a.h(r,q.ic(new V.bN(a,-1,-1,-1),new V.aG(1,1,1,1),new V.a_(0,0,c),new V.E(0,0,t),new V.a5(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.D(k)
j=new V.E(m,l,t).p(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.cd(new V.bN(a,-1,-1,-1),null,new V.aG(i,g,h,1),new V.a_(m*k,l*k,c),new V.E(0,0,t),new V.a5(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.ia(r)
return u},
mW:function(a,b,c){return F.py(!0,a,1,new F.kE(1,c),b)},
py:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.l6(c,e,new F.kG(d),null)
if(u==null)return
u.al()
u.bt()
if(b)u.aZ(F.mY(3,!1,1,new F.kH(d),e))
u.aZ(F.mY(1,!0,-1,new F.kI(d),e))
return u},
pN:function(a,b){var u=F.l6(a,b,new F.kR(),null)
u.d.bC()
u.al()
u.bt()
return u},
as:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null
b=b.p(0,Math.sqrt(b.B(b)))
u=b.a
t=b.b
s=b.c
r=F.cd(j,j,j,new V.a_(u,t,s),b,j,j,j,0)
q=a.iJ(r,new F.d8())
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
r.sau(0,new V.aG(p,o,n,1))
m=Math.sqrt(u*u+t*t)
l=Math.atan2(t,u)/1.5707963267948966
if(l<0)l=-l
k=Math.atan2(m,s)/3.141592653589793
r.scJ(new V.a5(l,k<0?-k:k))
a.a.h(0,r)
return r},
a3:function(a,b,c,d,e){var u,t,s,r
if(e<=0)a.d.bs(0,b,d,c)
else{u=F.as(a,b.r.v(0,c.r).q(0,0.5))
t=F.as(a,c.r.v(0,d.r).q(0,0.5))
s=F.as(a,d.r.v(0,b.r).q(0,0.5))
r=e-1
F.a3(a,b,u,s,r)
F.a3(a,u,c,t,r)
F.a3(a,t,s,u,r)
F.a3(a,s,t,d,r)}},
na:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.l4()
t=F.lK(a,null,new F.l5(s,1),b)
t.bt()
return t},
pY:function(){return F.mX(15,30,0.5,1,new F.l8())},
pM:function(){return F.mX(12,120,0.3,1,new F.kQ(3,2))},
mX:function(a,b,c,d,e){var u=F.l6(a,b,new F.kF(e,d,b,c),null)
if(u==null)return
u.al()
u.bt()
return u},
l6:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.im()
t=H.e([],[F.ao])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.cd(g,g,new V.aG(p,0,0,1),g,g,new V.a5(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cj(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.cd(g,g,new V.aG(j,i,h,1),g,g,new V.a5(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cj(d))}}u.d.ib(a+1,b+1,t)
return u},
cB:function(a,b,c){var u=new F.a9(),t=a.a
if(t==null)H.w(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.w(P.u("May not create a face with vertices attached to different shapes."))
u.bp(a)
u.bq(b)
u.dv(c)
C.a.h(u.a.a.d.b,u)
u.a.a.U()
return u},
nW:function(a,b){var u=new F.bo(),t=a.a
if(t==null)H.w(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.w(P.u("May not create a line with vertices attached to different shapes."))
u.bp(a)
u.bq(b)
C.a.h(u.a.a.c.b,u)
u.a.a.U()
return u},
im:function(){var u=new F.e9(),t=new F.jm(u)
t.b=!1
t.si7(H.e([],[F.ao]))
u.a=t
t=new F.iq(u)
t.sc3(H.e([],[F.bM]))
u.b=t
t=new F.ip(u)
t.sfw(H.e([],[F.bo]))
u.c=t
t=new F.io(u)
t.sfp(H.e([],[F.a9]))
u.d=t
u.e=null
return u},
cd:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ao(),r=new F.ju()
r.sc3(H.e([],[F.bM]))
s.b=r
r=new F.jr()
u=[F.bo]
r.sfz(H.e([],u))
r.sfA(H.e([],u))
s.c=r
r=new F.jn()
u=[F.a9]
r.sfq(H.e([],u))
r.sfs(H.e([],u))
r.sft(H.e([],u))
s.d=r
h=$.np()
s.e=0
r=$.bx()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bw().a)!==0?e:t
s.x=(u&$.bv().a)!==0?b:t
s.y=(u&$.bT().a)!==0?f:t
s.z=(u&$.by().a)!==0?g:t
s.Q=(u&$.nq().a)!==0?c:t
s.ch=(u&$.cs().a)!==0?i:0
s.cx=(u&$.bu().a)!==0?a:t
return s},
ks:function ks(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kE:function kE(a,b){this.a=a
this.b=b},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kR:function kR(){},
l4:function l4(){},
l5:function l5(a,b){this.a=a
this.b=b},
l8:function l8(){},
kQ:function kQ(a,b){this.a=a
this.b=b},
kF:function kF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h2:function h2(){},
iv:function iv(){},
bo:function bo(){this.b=this.a=null},
hm:function hm(){},
iZ:function iZ(){},
bM:function bM(){this.a=null},
e9:function e9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
io:function io(a){this.a=a
this.b=null},
ip:function ip(a){this.a=a
this.b=null},
iq:function iq(a){this.a=a
this.b=null},
ao:function ao(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jw:function jw(a){this.a=a},
jv:function jv(a){this.a=a},
jm:function jm(a){this.a=a
this.c=this.b=null},
jn:function jn(){this.d=this.c=this.b=null},
jo:function jo(a,b){this.a=a
this.b=b},
jp:function jp(a,b){this.a=a
this.b=b},
jr:function jr(){this.c=this.b=null},
js:function js(){},
d8:function d8(){},
jt:function jt(){},
jq:function jq(){},
i_:function i_(){},
ju:function ju(){this.b=null}},T={d1:function d1(){},eg:function eg(){var _=this
_.e=_.d=_.c=_.b=_.a=null},iM:function iM(a){var _=this
_.a=a
_.e=_.d=_.c=null},iN:function iN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={
n4:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a=null,a0="modifiers",a1=V.ok("Test 011"),a2=W.le()
a2.className="pageLargeCanvas"
a2.id=b
a1.a.appendChild(a2)
u=[P.h]
a1.dE(H.e(["A test of the Material Lighting shader with cube textures and ","a directional light. The cube textures are for ambient, diffuse, ","and specular."],u))
a1.i8(H.e(["shapes"],u))
a1.dE(H.e(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b)
if(t==null)H.w(P.u("Failed to find an element with the identifier, testCanvas."))
s=E.oo(t,!0,!0,!0,!1)
r=new E.av()
r.a=""
r.b=!0
q=E.av
r.sfe(0,O.lf(q))
r.y.bj(r.giZ(),r.gj1())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.saa(0,a)
r.sbe(a)
r.saa(0,F.na(8,8))
p=new U.cE()
o=U.ah
p.bK(o)
p.bj(p.gfJ(),p.ghn())
p.e=null
p.f=V.dY()
p.r=0
n=s.r
m=new U.eq()
l=U.lg()
l.scO(0,!0)
l.scw(6.283185307179586)
l.scA(0)
l.sZ(0,0)
l.scz(100)
l.sX(0)
l.sck(0.5)
m.b=l
k=m.gaR()
l.gA().h(0,k)
l=U.lg()
l.scO(0,!0)
l.scw(6.283185307179586)
l.scA(0)
l.sZ(0,0)
l.scz(100)
l.sX(0)
l.sck(0.5)
m.c=l
l.gA().h(0,k)
m.d=null
m.r=m.f=m.e=!1
m.y=m.x=2.5
m.Q=4
m.ch=m.cx=!1
m.db=m.cy=0
m.dx=null
m.dy=0
m.fx=m.fr=null
j=new X.aC(!1,!1,!1)
i=m.d
m.d=j
l=[X.aC]
k=new D.P(a0,i,j,l)
k.b=!0
m.S(k)
k=m.f
if(k!==!1){m.f=!1
k=new D.P("invertX",k,!1,[P.R])
k.b=!0
m.S(k)}k=m.r
if(k!==!0){m.r=!0
k=new D.P("invertY",k,!0,[P.R])
k.b=!0
m.S(k)}m.b7(n)
p.h(0,m)
n=s.r
m=new U.ep()
k=U.lg()
k.scO(0,!0)
k.scw(6.283185307179586)
k.scA(0)
k.sZ(0,0)
k.scz(100)
k.sX(0)
k.sck(0.2)
m.b=k
k.gA().h(0,m.gaR())
m.c=null
m.d=!1
m.e=2.5
m.r=4
m.x=m.y=!1
m.z=0
m.Q=null
m.ch=0
m.cy=m.cx=null
j=new X.aC(!0,!1,!1)
i=m.c
m.c=j
k=new D.P(a0,i,j,l)
k.b=!0
m.S(k)
m.b7(n)
p.h(0,m)
n=s.r
m=new U.er()
m.c=0.01
m.e=m.d=0
j=new X.aC(!1,!1,!1)
m.b=j
l=new D.P(a0,a,j,l)
l.b=!0
m.S(l)
m.b7(n)
p.h(0,m)
r.sbe(p)
h=s.f.e9("../resources/earthColor")
g=new O.dW()
g.sfb(O.lf(V.aq))
g.e.bj(g.gfN(),g.gfP())
p=new O.ba(g,"emission")
p.c=new A.al(!1,!1,!1)
p.f=new V.ac(0,0,0)
g.f=p
p=new O.ba(g,"ambient")
p.c=new A.al(!1,!1,!1)
p.f=new V.ac(0,0,0)
g.r=p
p=new O.ba(g,"diffuse")
p.c=new A.al(!1,!1,!1)
p.f=new V.ac(0,0,0)
g.x=p
p=new O.ba(g,"invDiffuse")
p.c=new A.al(!1,!1,!1)
p.f=new V.ac(0,0,0)
g.y=p
p=new O.hF(g,"specular")
p.c=new A.al(!1,!1,!1)
p.f=new V.ac(0,0,0)
p.ch=100
g.z=p
p=new O.hB(g,"bump")
p.c=new A.al(!1,!1,!1)
g.Q=p
g.ch=null
p=new O.ba(g,"reflect")
p.c=new A.al(!1,!1,!1)
p.f=new V.ac(0,0,0)
g.cx=p
p=new O.hE(g,"refract")
p.c=new A.al(!1,!1,!1)
p.f=new V.ac(0,0,0)
p.ch=1
g.cy=p
p=new O.hA(g,"alpha")
p.c=new A.al(!1,!1,!1)
p.f=1
g.db=p
p=new D.dR()
p.bK(D.ae)
p.sfm(H.e([],[D.bE]))
p.shx(H.e([],[D.e4]))
p.shV(H.e([],[D.eb]))
p.y=p.x=null
p.cR(p.gfL(),p.ghl(),p.ghp())
g.dx=p
n=new O.hD()
n.b=new V.aG(0,0,0,0)
n.c=1
n.d=10
n.e=!1
g.dy=n
n=p.x
p=n==null?p.x=D.Y():n
p.h(0,g.ghJ())
p=g.dx
n=p.y
p=n==null?p.y=D.Y():n
p.h(0,g.gbl())
g.fr=null
p=g.dx
f=V.lu()
n=U.m1(V.m9(V.lp(),f,new V.E(-1,-1,-1)))
e=new V.ac(1,1,1)
m=new D.bE()
m.c=new V.ac(1,1,1)
m.a=V.mz()
m.d=V.lu()
m.e=V.oy()
i=m.b
m.b=n
n.gA().h(0,m.geX())
o=new D.P("mover",i,m.b,[o])
o.b=!0
m.az(o)
if(!m.c.t(0,e)){i=m.c
m.c=e
o=new D.P("color",i,e,[V.ac])
o.b=!0
m.az(o)}p.h(0,m)
p=g.r
p.sau(0,new V.ac(0.2,0.2,0.2))
p=g.x
p.sau(0,new V.ac(0.8,0.8,0.8))
g.r.sax(h)
g.x.sax(h)
g.z.sax(s.f.e9("../resources/earthSpecular"))
p=g.z
p.c8(new A.al(!0,!1,p.c.c))
p.du(10)
p=new M.dJ()
p.a=!0
p.seZ(0,O.lf(q))
p.e.bj(p.gfT(),p.gfV())
p.y=p.x=p.r=p.f=null
d=X.nQ(a)
c=new X.e3()
c.c=1.0471975511965976
c.d=0.1
c.e=2000
c.sbe(a)
q=c.c
if(!(Math.abs(q-1.0471975511965976)<$.O().a)){c.c=1.0471975511965976
q=new D.P("fov",q,1.0471975511965976,[P.A])
q.b=!0
c.aN(q)}q=c.d
if(!(Math.abs(q-0.1)<$.O().a)){c.d=0.1
q=new D.P("near",q,0.1,[P.A])
q.b=!0
c.aN(q)}q=c.e
if(!(Math.abs(q-2000)<$.O().a)){c.e=2000
q=new D.P("far",q,2000,[P.A])
q.b=!0
c.aN(q)}q=p.b
if(q!==c){if(q!=null)q.gA().D(0,p.gap())
i=p.b
p.b=c
c.gA().h(0,p.gap())
q=new D.P("camera",i,p.b,[X.dE])
q.b=!0
p.aA(q)}q=p.c
if(q!==d){if(q!=null)q.gA().D(0,p.gap())
i=p.c
p.c=d
d.gA().h(0,p.gap())
q=new D.P("target",i,p.c,[X.ee])
q.b=!0
p.aA(q)}p.ses(a)
p.ses(g)
p.e.h(0,r)
p.b.sbe(U.m1(V.bb(1,0,0,0,0,1,0,0,0,0,1,3,0,0,0,1)))
q=s.d
if(q!==p){if(q!=null)q.gA().D(0,s.gcW())
s.d=p
p.gA().h(0,s.gcW())
s.cX()}q=new V.i9("shapes")
u=u.getElementById("shapes")
q.c=u
if(u==null)H.w("Failed to find shapes for RadioGroup")
q.ar(0,"Cube",new R.kS(r))
q.ar(0,"Cuboid",new R.kT(r))
q.ar(0,"Cylinder",new R.kU(r))
q.ar(0,"Cone",new R.kV(r))
q.ar(0,"LatLonSphere",new R.kW(r))
q.ar(0,"IsoSphere",new R.kX(r))
q.bs(0,"Sphere",new R.kY(r),!0)
q.ar(0,"Toroid",new R.kZ(r))
q.ar(0,"Knot",new R.l_(r))
u=s.z
if(u==null)u=s.z=D.Y()
q={func:1,ret:-1,args:[D.C]}
p=H.o(new R.l0(a1,g),q)
if(u.b==null)u.saS(H.e([],[q]))
u=u.b;(u&&C.a).h(u,p)
V.pU(s)},
kS:function kS(a){this.a=a},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
kV:function kV(a){this.a=a},
kW:function kW(a){this.a=a},
kX:function kX(a){this.a=a},
kY:function kY(a){this.a=a},
kZ:function kZ(a){this.a=a},
l_:function l_(a){this.a=a},
l0:function l0(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,R]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ll.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gI:function(a){return H.cT(a)},
i:function(a){return"Instance of '"+H.i(H.cU(a))+"'"}}
J.hh.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iR:1}
J.dO.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.dP.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.i4.prototype={}
J.cc.prototype={}
J.bK.prototype={
i:function(a){var u=a[$.nd()]
if(u==null)return this.eM(a)
return"JavaScript function for "+H.i(J.au(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibH:1}
J.b7.prototype={
h:function(a,b){H.F(b,H.q(a,0))
if(!!a.fixed$length)H.w(P.J("add"))
a.push(b)},
en:function(a,b){if(!!a.fixed$length)H.w(P.J("removeAt"))
if(b<0||b>=a.length)throw H.c(P.e6(b,null))
return a.splice(b,1)[0]},
D:function(a,b){var u
if(!!a.fixed$length)H.w(P.J("remove"))
for(u=0;u<a.length;++u)if(J.K(a[u],b)){a.splice(u,1)
return!0}return!1},
H:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bl(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.i(a[u]))
return t.join(b)},
iV:function(a){return this.m(a,"")},
iN:function(a,b,c,d){var u,t,s
H.F(b,d)
H.o(c,{func:1,ret:d,args:[d,H.q(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bl(a))}return t},
iM:function(a,b){var u,t,s
H.o(b,{func:1,ret:P.R,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.G(b.$1(s)))return s
if(a.length!==u)throw H.c(P.bl(a))}throw H.c(H.hg())},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
eJ:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ai(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ai(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.q(a,0)])
return H.e(a.slice(b,c),[H.q(a,0)])},
giL:function(a){if(a.length>0)return a[0]
throw H.c(H.hg())},
gav:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hg())},
dF:function(a,b){var u,t
H.o(b,{func:1,ret:P.R,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.G(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.bl(a))}return!1},
bI:function(a,b){var u=H.q(a,0)
H.o(b,{func:1,ret:P.l,args:[u,u]})
if(!!a.immutable$list)H.w(P.J("sort"))
H.ea(a,0,a.length-1,b,u)},
V:function(a,b){var u
for(u=0;u<a.length;++u)if(J.K(a[u],b))return!0
return!1},
i:function(a){return P.li(a,"[","]")},
gW:function(a){return new J.az(a,a.length,[H.q(a,0)])},
gI:function(a){return H.cT(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.w(P.J("set length"))
if(b<0)throw H.c(P.ai(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cl(a,b))
return a[b]},
k:function(a,b,c){H.F(c,H.q(a,0))
if(!!a.immutable$list)H.w(P.J("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cl(a,b))
a[b]=c},
$ik:1,
$ib:1}
J.lk.prototype={}
J.az.prototype={
gK:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.v(s))
u=t.c
if(u>=r){t.sdd(null)
return!1}t.sdd(s[u]);++t.c
return!0},
sdd:function(a){this.d=H.F(a,H.q(this,0))},
$ib6:1}
J.cH.prototype={
ir:function(a,b){var u
H.n5(b)
if(typeof b!=="number")throw H.c(H.b2(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gby(b)
if(this.gby(a)===u)return 0
if(this.gby(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gby:function(a){return a===0?1/a<0:a<0},
jp:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.J(""+a+".toInt()"))},
cr:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.J(""+a+".floor()"))},
am:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.J(""+a+".round()"))},
ev:function(a,b){var u
if(b>20)throw H.c(P.ai(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gby(a))return"-"+u
return u},
bh:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ai(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.Y(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.w(P.J("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.q("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bi:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eP:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dz(a,b)},
a9:function(a,b){return(a|0)===a?a/b|0:this.dz(a,b)},
dz:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.J("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aU:function(a,b){var u
if(a>0)u=this.dw(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hT:function(a,b){if(b<0)throw H.c(H.b2(b))
return this.dw(a,b)},
dw:function(a,b){return b>31?0:a>>>b},
$iA:1,
$iab:1}
J.dN.prototype={$il:1}
J.dM.prototype={}
J.bJ.prototype={
Y:function(a,b){if(b<0)throw H.c(H.cl(a,b))
if(b>=a.length)H.w(H.cl(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.c(H.cl(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!=="string")throw H.c(P.lc(b,null,null))
return a+b},
b0:function(a,b,c,d){var u,t
c=P.bO(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a6:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ai(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a3:function(a,b){return this.a6(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.w(H.b2(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.R()
if(b<0)throw H.c(P.e6(b,null))
if(b>c)throw H.c(P.e6(b,null))
if(c>a.length)throw H.c(P.e6(c,null))
return a.substring(b,c)},
ab:function(a,b){return this.u(a,b,null)},
jr:function(a){return a.toLowerCase()},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ah:function(a,b){var u=b-a.length
if(u<=0)return a
return this.q(" ",u)+a},
bx:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ai(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
e6:function(a,b){return this.bx(a,b,0)},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$imc:1,
$ih:1}
H.t.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.b.Y(this.a,b)},
$ad6:function(){return[P.l]},
$az:function(){return[P.l]},
$ak:function(){return[P.l]},
$ab:function(){return[P.l]}}
H.fX.prototype={}
H.c2.prototype={
gW:function(a){var u=this
return new H.cI(u,u.gn(u),[H.at(u,"c2",0)])},
bG:function(a,b){return this.eL(0,H.o(b,{func:1,ret:P.R,args:[H.at(this,"c2",0)]}))}}
H.cI.prototype={
gK:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=J.dr(s),q=r.gn(s)
if(t.b!==q)throw H.c(P.bl(s))
u=t.c
if(u>=q){t.sb3(null)
return!1}t.sb3(r.J(s,u));++t.c
return!0},
sb3:function(a){this.d=H.F(a,H.q(this,0))},
$ib6:1}
H.hw.prototype={
gW:function(a){return new H.hx(J.bz(this.a),this.b,this.$ti)},
gn:function(a){return J.aF(this.a)},
J:function(a,b){return this.b.$1(J.fs(this.a,b))},
$ak:function(a,b){return[b]}}
H.hx.prototype={
C:function(){var u=this,t=u.b
if(t.C()){u.sb3(u.c.$1(t.gK(t)))
return!0}u.sb3(null)
return!1},
gK:function(a){return this.a},
sb3:function(a){this.a=H.F(a,H.q(this,1))},
$ab6:function(a,b){return[b]}}
H.hy.prototype={
gn:function(a){return J.aF(this.a)},
J:function(a,b){return this.b.$1(J.fs(this.a,b))},
$ac2:function(a,b){return[b]},
$ak:function(a,b){return[b]}}
H.d9.prototype={
gW:function(a){return new H.jz(J.bz(this.a),this.b,this.$ti)}}
H.jz.prototype={
C:function(){var u,t
for(u=this.a,t=this.b;u.C();)if(H.G(t.$1(u.gK(u))))return!0
return!1},
gK:function(a){var u=this.a
return u.gK(u)}}
H.bZ.prototype={}
H.d6.prototype={
k:function(a,b,c){H.F(c,H.at(this,"d6",0))
throw H.c(P.J("Cannot modify an unmodifiable list"))}}
H.em.prototype={}
H.fJ.prototype={
i:function(a){return P.lo(this)},
k:function(a,b,c){H.F(b,H.q(this,0))
H.F(c,H.q(this,1))
return H.nL()},
$iB:1}
H.fK.prototype={
gn:function(a){return this.a},
bu:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bu(0,b))return
return this.de(b)},
de:function(a){return this.b[H.M(a)]},
H:function(a,b){var u,t,s,r,q=this,p=H.q(q,1)
H.o(b,{func:1,ret:-1,args:[H.q(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.F(q.de(r),p))}}}
H.iW.prototype={
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
H.i0.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hj.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.j8.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.l9.prototype={
$1:function(a){if(!!J.T(a).$ibG)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:25}
H.f0.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iax:1}
H.cx.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ibH:1,
gjt:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iJ.prototype={}
H.iz.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cr(u)+"'"}}
H.cu.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cu))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cT(this.a)
else u=typeof t!=="object"?J.dw(t):H.cT(t)
return(u^H.cT(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.i(H.cU(u))+"'")}}
H.iY.prototype={
i:function(a){return this.a}}
H.fF.prototype={
i:function(a){return this.a}}
H.ij.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.jA.prototype={
i:function(a){return"Assertion failed: "+P.dK(this.a)}}
H.a4.prototype={
gn:function(a){return this.a},
giU:function(a){return this.a===0},
ga4:function(a){return new H.ho(this,[H.q(this,0)])},
bu:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.d9(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.d9(t,b)}else return s.iR(b)},
iR:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cu(u.bS(t,u.ct(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bm(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bm(r,b)
s=t==null?null:t.b
return s}else return q.iS(b)},
iS:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bS(r,s.ct(a))
t=s.cu(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.F(b,H.q(s,0))
H.F(c,H.q(s,1))
if(typeof b==="string"){u=s.b
s.d0(u==null?s.b=s.c1():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.d0(t==null?s.c=s.c1():t,b,c)}else s.iT(b,c)},
iT:function(a,b){var u,t,s,r,q=this
H.F(a,H.q(q,0))
H.F(b,H.q(q,1))
u=q.d
if(u==null)u=q.d=q.c1()
t=q.ct(a)
s=q.bS(u,t)
if(s==null)q.c9(u,t,[q.c2(a,b)])
else{r=q.cu(s,a)
if(r>=0)s[r].b=b
else s.push(q.c2(a,b))}},
H:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.q(s,0),H.q(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bl(s))
u=u.c}},
d0:function(a,b,c){var u,t=this
H.F(b,H.q(t,0))
H.F(c,H.q(t,1))
u=t.bm(a,b)
if(u==null)t.c9(a,b,t.c2(b,c))
else u.b=c},
fG:function(){this.r=this.r+1&67108863},
c2:function(a,b){var u,t=this,s=new H.hn(H.F(a,H.q(t,0)),H.F(b,H.q(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fG()
return s},
ct:function(a){return J.dw(a)&0x3ffffff},
cu:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.K(a[t].a,b))return t
return-1},
i:function(a){return P.lo(this)},
bm:function(a,b){return a[b]},
bS:function(a,b){return a[b]},
c9:function(a,b,c){a[b]=c},
fk:function(a,b){delete a[b]},
d9:function(a,b){return this.bm(a,b)!=null},
c1:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c9(t,u,t)
this.fk(t,u)
return t}}
H.hn.prototype={}
H.ho.prototype={
gn:function(a){return this.a.a},
gW:function(a){var u=this.a,t=new H.hp(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hp.prototype={
gK:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bl(t))
else{t=u.c
if(t==null){u.sd_(null)
return!1}else{u.sd_(t.a)
u.c=u.c.c
return!0}}},
sd_:function(a){this.d=H.F(a,H.q(this,0))},
$ib6:1}
H.kM.prototype={
$1:function(a){return this.a(a)},
$S:25}
H.kN.prototype={
$2:function(a,b){return this.a(a,b)},
$S:56}
H.kO.prototype={
$1:function(a){return this.a(H.M(a))},
$S:53}
H.hi.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imc:1,
$iog:1}
H.cO.prototype={$icO:1}
H.bL.prototype={$ibL:1,$ioq:1}
H.dZ.prototype={
gn:function(a){return a.length},
$iL:1,
$aL:function(){}}
H.cP.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pA(c)
H.bj(b,a,a.length)
a[b]=c},
$abZ:function(){return[P.A]},
$az:function(){return[P.A]},
$ik:1,
$ak:function(){return[P.A]},
$ib:1,
$ab:function(){return[P.A]}}
H.e_.prototype={
k:function(a,b,c){H.ad(c)
H.bj(b,a,a.length)
a[b]=c},
$abZ:function(){return[P.l]},
$az:function(){return[P.l]},
$ik:1,
$ak:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]}}
H.hT.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hU.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hV.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hW.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hX.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.e0.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bj(b,a,a.length)
return a[b]},
$iql:1}
H.cQ.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bj(b,a,a.length)
return a[b]},
$icQ:1,
$iQ:1}
H.de.prototype={}
H.df.prototype={}
H.dg.prototype={}
H.dh.prototype={}
P.jC.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:18}
P.jB.prototype={
$1:function(a){var u,t
this.a.a=H.o(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:49}
P.jD.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jE.prototype={
$0:function(){this.a.$0()},
$S:0}
P.f6.prototype={
f3:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ck(new P.ki(this,b),0),a)
else throw H.c(P.J("`setTimeout()` not found."))},
f4:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ck(new P.kh(this,a,Date.now(),b),0),a)
else throw H.c(P.J("Periodic timer."))},
$ibe:1}
P.ki.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.kh.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.eP(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bi.prototype={
iX:function(a){if((this.c&15)!==6)return!0
return this.b.b.cI(H.o(this.d,{func:1,ret:P.R,args:[P.V]}),a.a,P.R,P.V)},
iP:function(a){var u=this.e,t=P.V,s={futureOr:1,type:H.q(this,1)},r=this.b.b
if(H.fp(u,{func:1,args:[P.V,P.ax]}))return H.lL(r.jk(u,a.a,a.b,null,t,P.ax),s)
else return H.lL(r.cI(H.o(u,{func:1,args:[P.V]}),a.a,null,t),s)}}
P.aN.prototype={
eu:function(a,b,c){var u,t,s,r=H.q(this,0)
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a2
if(u!==C.f){H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pm(b,u)}t=new P.aN($.a2,[c])
s=b==null?1:3
this.d1(new P.bi(t,s,a,b,[r,c]))
return t},
jo:function(a,b){return this.eu(a,null,b)},
d1:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibi")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaN")
s=u.a
if(s<4){u.d1(a)
return}t.a=s
t.c=u.c}P.kC(null,null,t.b,H.o(new P.jN(t,a),{func:1,ret:-1}))}},
dq:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibi")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaN")
u=q.a
if(u<4){q.dq(a)
return}p.a=u
p.c=q.c}o.a=p.bo(a)
P.kC(null,null,p.b,H.o(new P.jR(o,p),{func:1,ret:-1}))}},
c5:function(){var u=H.f(this.c,"$ibi")
this.c=null
return this.bo(u)},
bo:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d5:function(a){var u,t,s=this,r=H.q(s,0)
H.lL(a,{futureOr:1,type:r})
u=s.$ti
if(H.lH(a,"$icD",u,"$acD"))if(H.lH(a,"$iaN",u,null))P.mB(a,s)
else P.oD(a,s)
else{t=s.c5()
H.F(a,r)
s.a=4
s.c=a
P.dc(s,t)}},
d6:function(a,b){var u,t=this
H.f(b,"$iax")
u=t.c5()
t.a=8
t.c=new P.ap(a,b)
P.dc(t,u)},
$icD:1}
P.jN.prototype={
$0:function(){P.dc(this.a,this.b)},
$S:0}
P.jR.prototype={
$0:function(){P.dc(this.b,this.a.a)},
$S:0}
P.jO.prototype={
$1:function(a){var u=this.a
u.a=0
u.d5(a)},
$S:18}
P.jP.prototype={
$2:function(a,b){H.f(b,"$iax")
this.a.d6(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jQ.prototype={
$0:function(){this.a.d6(this.b,this.c)},
$S:0}
P.jU.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eq(H.o(s.d,{func:1}),null)}catch(r){u=H.ak(r)
t=H.cp(r)
if(o.d){s=H.f(o.a.a.c,"$iap").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$iap")
else q.b=new P.ap(u,t)
q.a=!0
return}if(!!J.T(n).$icD){if(n instanceof P.aN&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$iap")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jo(new P.jV(p),null)
s.a=!1}},
$S:3}
P.jV.prototype={
$1:function(a){return this.a},
$S:46}
P.jT.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.q(s,0)
q=H.F(n.c,r)
p=H.q(s,1)
n.a.b=s.b.b.cI(H.o(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ak(o)
t=H.cp(o)
s=n.a
s.b=new P.ap(u,t)
s.a=!0}},
$S:3}
P.jS.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$iap")
r=m.c
if(H.G(r.iX(u))&&r.e!=null){q=m.b
q.b=r.iP(u)
q.a=!1}}catch(p){t=H.ak(p)
s=H.cp(p)
r=H.f(m.a.a.c,"$iap")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ap(t,s)
n.a=!0}},
$S:3}
P.et.prototype={}
P.iC.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aN($.a2,[P.l])
r.a=0
u=H.q(s,0)
t=H.o(new P.iE(r,s),{func:1,ret:-1,args:[u]})
H.o(new P.iF(r,q),{func:1,ret:-1})
W.aa(s.a,s.b,t,!1,u)
return q}}
P.iE.prototype={
$1:function(a){H.F(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.q(this.b,0)]}}}
P.iF.prototype={
$0:function(){this.b.d5(this.a.a)},
$S:0}
P.cZ.prototype={}
P.iD.prototype={}
P.be.prototype={}
P.ap.prototype={
i:function(a){return H.i(this.a)},
$ibG:1}
P.kr.prototype={$iqA:1}
P.kB.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e2():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:0}
P.k0.prototype={
jl:function(a){var u,t,s,r=null
H.o(a,{func:1,ret:-1})
try{if(C.f===$.a2){a.$0()
return}P.mM(r,r,this,a,-1)}catch(s){u=H.ak(s)
t=H.cp(s)
P.kA(r,r,this,u,H.f(t,"$iax"))}},
jm:function(a,b,c){var u,t,s,r=null
H.o(a,{func:1,ret:-1,args:[c]})
H.F(b,c)
try{if(C.f===$.a2){a.$1(b)
return}P.mN(r,r,this,a,b,-1,c)}catch(s){u=H.ak(s)
t=H.cp(s)
P.kA(r,r,this,u,H.f(t,"$iax"))}},
im:function(a,b){return new P.k2(this,H.o(a,{func:1,ret:b}),b)},
cc:function(a){return new P.k1(this,H.o(a,{func:1,ret:-1}))},
dH:function(a,b){return new P.k3(this,H.o(a,{func:1,ret:-1,args:[b]}),b)},
eq:function(a,b){H.o(a,{func:1,ret:b})
if($.a2===C.f)return a.$0()
return P.mM(null,null,this,a,b)},
cI:function(a,b,c,d){H.o(a,{func:1,ret:c,args:[d]})
H.F(b,d)
if($.a2===C.f)return a.$1(b)
return P.mN(null,null,this,a,b,c,d)},
jk:function(a,b,c,d,e,f){H.o(a,{func:1,ret:d,args:[e,f]})
H.F(b,e)
H.F(c,f)
if($.a2===C.f)return a.$2(b,c)
return P.pn(null,null,this,a,b,c,d,e,f)}}
P.k2.prototype={
$0:function(){return this.a.eq(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.k1.prototype={
$0:function(){return this.a.jl(this.b)},
$S:3}
P.k3.prototype={
$1:function(a){var u=this.c
return this.a.jm(this.b,H.F(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jZ.prototype={
gW:function(a){var u=this,t=new P.eI(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
V:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$ice")!=null}else{t=this.ff(b)
return t}},
ff:function(a){var u=this.d
if(u==null)return!1
return this.bQ(this.df(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.F(b,H.q(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d2(u==null?s.b=P.lx():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d2(t==null?s.c=P.lx():t,b)}else return s.f6(0,b)},
f6:function(a,b){var u,t,s,r=this
H.F(b,H.q(r,0))
u=r.d
if(u==null)u=r.d=P.lx()
t=r.d7(b)
s=u[t]
if(s==null)u[t]=[r.bN(b)]
else{if(r.bQ(s,b)>=0)return!1
s.push(r.bN(b))}return!0},
D:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hD(this.c,b)
else return this.hC(0,b)},
hC:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.df(r,b)
t=s.bQ(u,b)
if(t<0)return!1
s.dA(u.splice(t,1)[0])
return!0},
d2:function(a,b){H.F(b,H.q(this,0))
if(H.f(a[b],"$ice")!=null)return!1
a[b]=this.bN(b)
return!0},
hD:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$ice")
if(u==null)return!1
this.dA(u)
delete a[b]
return!0},
d4:function(){this.r=1073741823&this.r+1},
bN:function(a){var u,t=this,s=new P.ce(H.F(a,H.q(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.d4()
return s},
dA:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.d4()},
d7:function(a){return J.dw(a)&1073741823},
df:function(a,b){return a[this.d7(b)]},
bQ:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.K(a[t].a,b))return t
return-1}}
P.ce.prototype={}
P.eI.prototype={
gK:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bl(t))
else{t=u.c
if(t==null){u.sd3(null)
return!1}else{u.sd3(H.F(t.a,H.q(u,0)))
u.c=u.c.b
return!0}}},
sd3:function(a){this.d=H.F(a,H.q(this,0))},
$ib6:1}
P.hq.prototype={
$2:function(a,b){this.a.k(0,H.F(a,this.b),H.F(b,this.c))},
$S:6}
P.hr.prototype={$ik:1,$ib:1}
P.z.prototype={
gW:function(a){return new H.cI(a,this.gn(a),[H.co(this,a,"z",0)])},
J:function(a,b){return this.j(a,b)},
jq:function(a,b){var u,t=this,s=H.e([],[H.co(t,a,"z",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
cK:function(a){return this.jq(a,!0)},
iI:function(a,b,c,d){var u
H.F(d,H.co(this,a,"z",0))
P.bO(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.li(a,"[","]")}}
P.ht.prototype={}
P.hu.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.i(a)
t.a=u+": "
t.a+=H.i(b)},
$S:6}
P.af.prototype={
H:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.co(s,a,"af",0),H.co(s,a,"af",1)]})
for(u=J.bz(s.ga4(a));u.C();){t=u.gK(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aF(this.ga4(a))},
i:function(a){return P.lo(a)},
$iB:1}
P.kj.prototype={
k:function(a,b,c){H.F(b,H.q(this,0))
H.F(c,H.q(this,1))
throw H.c(P.J("Cannot modify unmodifiable map"))}}
P.hv.prototype={
j:function(a,b){return J.dv(this.a,b)},
k:function(a,b,c){J.la(this.a,H.F(b,H.q(this,0)),H.F(c,H.q(this,1)))},
H:function(a,b){J.lU(this.a,H.o(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]}))},
gn:function(a){return J.aF(this.a)},
i:function(a){return J.au(this.a)},
$iB:1}
P.en.prototype={}
P.k5.prototype={
as:function(a,b){var u
for(u=J.bz(H.m(b,"$ik",this.$ti,"$ak"));u.C();)this.h(0,u.gK(u))},
i:function(a){return P.li(this,"{","}")},
J:function(a,b){var u,t,s,r=this
P.mh(b,"index")
for(u=P.oH(r,r.r,H.q(r,0)),t=0;u.C();){s=u.d
if(b===t)return s;++t}throw H.c(P.Z(b,r,"index",null,t))},
$ik:1,
$imk:1}
P.eJ.prototype={}
P.fc.prototype={}
P.fB.prototype={
iY:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bO(a0,a1,b.length)
u=$.ns()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.E(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kL(C.b.E(b,n))
j=H.kL(C.b.E(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.b.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.a8("")
g=r.a+=C.b.u(b,s,t)
r.a=g+H.c4(m)
s=n
continue}}throw H.c(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.u(b,s,a1)
f=g.length
if(q>=0)P.lY(b,p,a1,q,o,f)
else{e=C.d.bi(f-1,4)+1
if(e===1)throw H.c(P.a7(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.b0(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lY(b,p,a1,q,o,d)
else{e=C.d.bi(d,4)
if(e===1)throw H.c(P.a7(c,b,a1))
if(e>1)b=C.b.b0(b,a1,a1,e===2?"==":"=")}return b},
$abX:function(){return[[P.b,P.l],P.h]}}
P.fC.prototype={
$abD:function(){return[[P.b,P.l],P.h]}}
P.bX.prototype={}
P.bD.prototype={}
P.fZ.prototype={
$abX:function(){return[P.h,[P.b,P.l]]}}
P.he.prototype={
i:function(a){return this.a}}
P.hd.prototype={
fh:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.d(a,r)
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
if(r>b)q.a+=C.b.u(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nD(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abD:function(){return[P.h,P.h]}}
P.jg.prototype={
giH:function(){return C.N}}
P.ji.prototype={
ci:function(a){var u,t,s=P.bO(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kp(u)
if(t.fu(a,0,s)!==s)t.dC(J.nz(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oY(0,t.b,u.length)))},
$abD:function(){return[P.h,[P.b,P.l]]}}
P.kp.prototype={
dC:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fu:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.Y(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.E(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dC(r,C.b.E(a,p)))s=p}else if(r<=2047){q=n.b
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
P.jh.prototype={
ci:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[P.l],"$ab")
u=P.ot(!1,a,0,null)
if(u!=null)return u
t=P.bO(0,null,J.aF(a))
s=P.mP(a,0,t)
if(s>0){r=P.d_(a,0,s)
if(s===t)return r
q=new P.a8(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.a8("")
n=new P.ko(!1,q)
n.c=o
n.is(a,p,t)
if(n.e>0){H.w(P.a7("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c4(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abD:function(){return[[P.b,P.l],P.h]}}
P.ko.prototype={
is:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.m(a,"$ib",[P.l],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.dr(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.aj()
if((o&192)!==128){n=P.a7(h+C.d.bh(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.d(C.w,n)
if(u<=C.w[n]){n=P.a7("Overlong encoding of 0x"+C.d.bh(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a7("Character outside valid Unicode range: 0x"+C.d.bh(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.c4(u)
i.c=!1}for(n=p<c;n;){m=P.mP(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.d_(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.R()
if(o<0){j=P.a7("Negative UTF-8 code unit: -0x"+C.d.bh(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a7(h+C.d.bh(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.R.prototype={}
P.aA.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.aA&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.d.aU(u,30))&1073741823},
i:function(a){var u=this,t=P.nM(H.oc(u)),s=P.dG(H.oa(u)),r=P.dG(H.o6(u)),q=P.dG(H.o7(u)),p=P.dG(H.o9(u)),o=P.dG(H.ob(u)),n=P.nN(H.o8(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.A.prototype={}
P.bF.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.bF&&this.a===b.a},
gI:function(a){return C.d.gI(this.a)},
i:function(a){var u,t,s,r=new P.fW(),q=this.a
if(q<0)return"-"+new P.bF(0-q).i(0)
u=r.$1(C.d.a9(q,6e7)%60)
t=r.$1(C.d.a9(q,1e6)%60)
s=new P.fV().$1(q%1e6)
return""+C.d.a9(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.fV.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:19}
P.fW.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:19}
P.bG.prototype={}
P.fv.prototype={
i:function(a){return"Assertion failed"}}
P.e2.prototype={
i:function(a){return"Throw of null."}}
P.aP.prototype={
gbP:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbO:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbP()+o+u
if(!q.a)return t
s=q.gbO()
r=P.dK(q.b)
return t+s+": "+r}}
P.c5.prototype={
gbP:function(){return"RangeError"},
gbO:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.hf.prototype={
gbP:function(){return"RangeError"},
gbO:function(){var u,t=H.ad(this.b)
if(typeof t!=="number")return t.R()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gn:function(a){return this.f}}
P.j9.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.j6.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cY.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fI.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dK(u)+"."}}
P.i3.prototype={
i:function(a){return"Out of Memory"},
$ibG:1}
P.ec.prototype={
i:function(a){return"Stack Overflow"},
$ibG:1}
P.fP.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eB.prototype={
i:function(a){return"Exception: "+this.a}}
P.h8.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.u(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.E(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.Y(f,q)
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
return h+l+j+k+"\n"+C.b.q(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.i(g)+")"):h}}
P.bH.prototype={}
P.l.prototype={}
P.k.prototype={
bG:function(a,b){var u=H.at(this,"k",0)
return new H.d9(this,H.o(b,{func:1,ret:P.R,args:[u]}),[u])},
gn:function(a){var u,t=this.gW(this)
for(u=0;t.C();)++u
return u},
gaL:function(a){var u,t=this.gW(this)
if(!t.C())throw H.c(H.hg())
u=t.gK(t)
if(t.C())throw H.c(H.nT())
return u},
J:function(a,b){var u,t,s
P.mh(b,"index")
for(u=this.gW(this),t=0;u.C();){s=u.gK(u)
if(b===t)return s;++t}throw H.c(P.Z(b,this,"index",null,t))},
i:function(a){return P.nS(this,"(",")")}}
P.b6.prototype={}
P.b.prototype={$ik:1}
P.B.prototype={}
P.N.prototype={
gI:function(a){return P.V.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.ab.prototype={}
P.V.prototype={constructor:P.V,$iV:1,
t:function(a,b){return this===b},
gI:function(a){return H.cT(this)},
i:function(a){return"Instance of '"+H.i(H.cU(this))+"'"},
toString:function(){return this.i(this)}}
P.ax.prototype={}
P.h.prototype={$imc:1}
P.a8.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iq9:1}
P.je.prototype={
$2:function(a,b){var u,t,s,r=P.h
H.m(a,"$iB",[r,r],"$aB")
H.M(b)
u=J.ds(b).e6(b,"=")
if(u===-1){if(b!=="")J.la(a,P.lB(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.u(b,0,u)
s=C.b.ab(b,u+1)
r=this.a
J.la(a,P.lB(t,0,t.length,r,!0),P.lB(s,0,s.length,r,!0))}return a},
$S:45}
P.jb.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:44}
P.jc.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.jd.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fr(C.b.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.R()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:42}
P.cf.prototype={
geB:function(){return this.b},
gcs:function(a){var u=this.c
if(u==null)return""
if(C.b.a3(u,"["))return C.b.u(u,1,u.length-1)
return u},
gbA:function(a){var u=this.d
if(u==null)return P.mF(this.a)
return u},
gcE:function(a){var u=this.f
return u==null?"":u},
ge1:function(){var u=this.r
return u==null?"":u},
eo:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.m(b,"$iB",[P.h,null],"$aB")
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
n=P.lz(null,0,0,b)
return new P.cf(u,s,q,r,p,n,m.r)},
gcF:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.h
s.shB(new P.en(P.mu(u==null?"":u),[t,t]))}return s.Q},
ge2:function(){return this.c!=null},
ge5:function(){return this.f!=null},
ge3:function(){return this.r!=null},
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
if(!!J.T(b).$ils)if(s.a==b.gbH())if(s.c!=null===b.ge2())if(s.b==b.geB())if(s.gcs(s)==b.gcs(b))if(s.gbA(s)==b.gbA(b))if(s.e===b.gej(b)){u=s.f
t=u==null
if(!t===b.ge5()){if(t)u=""
if(u===b.gcE(b)){u=s.r
t=u==null
if(!t===b.ge3()){if(t)u=""
u=u===b.ge1()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.b.gI(this.i(0)):u},
shB:function(a){var u=P.h
this.Q=H.m(a,"$iB",[u,u],"$aB")},
$ils:1,
gbH:function(){return this.a},
gej:function(a){return this.e}}
P.kk.prototype={
$1:function(a){throw H.c(P.a7("Invalid port",this.a,this.b+1))},
$S:41}
P.kl.prototype={
$1:function(a){return P.fd(C.X,a,C.h,!1)},
$S:23}
P.kn.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.fd(C.i,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.fd(C.i,b,C.h,!0))}},
$S:24}
P.km.prototype={
$2:function(a,b){var u,t
H.M(a)
if(b==null||typeof b==="string")this.a.$2(a,H.M(b))
else for(u=J.bz(H.n3(b,"$ik")),t=this.a;u.C();)t.$2(a,H.M(u.gK(u)))},
$S:40}
P.ja.prototype={
geA:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.b.bx(u,"?",o)
s=u.length
if(t>=0){r=P.dm(u,t+1,s,C.m,!1)
s=t}else r=p
return q.c=new P.jI("data",p,p,p,P.dm(u,o,s,C.A,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kv.prototype={
$1:function(a){return new Uint8Array(96)},
$S:48}
P.ku.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.nA(u,0,96,b)
return u},
$S:39}
P.kw.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.E(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.kx.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.E(b,0),t=C.b.E(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.k8.prototype={
ge2:function(){return this.c>0},
ge4:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.v()
t=this.e
if(typeof t!=="number")return H.D(t)
t=u+1<t
u=t}else u=!1
return u},
ge5:function(){var u=this.f
if(typeof u!=="number")return u.R()
return u<this.r},
ge3:function(){return this.r<this.a.length},
gdh:function(){return this.b===4&&C.b.a3(this.a,"http")},
gdi:function(){return this.b===5&&C.b.a3(this.a,"https")},
gbH:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdh())q=t.x="http"
else if(t.gdi()){t.x="https"
q="https"}else if(q===4&&C.b.a3(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a3(t.a,r)){t.x=r
q=r}else{q=C.b.u(t.a,0,q)
t.x=q}return q},
geB:function(){var u=this.c,t=this.b+3
return u>t?C.b.u(this.a,t,u-1):""},
gcs:function(a){var u=this.c
return u>0?C.b.u(this.a,u,this.d):""},
gbA:function(a){var u,t=this
if(t.ge4()){u=t.d
if(typeof u!=="number")return u.v()
return P.fr(C.b.u(t.a,u+1,t.e),null,null)}if(t.gdh())return 80
if(t.gdi())return 443
return 0},
gej:function(a){return C.b.u(this.a,this.e,this.f)},
gcE:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.R()
return u<t?C.b.u(this.a,u+1,t):""},
ge1:function(){var u=this.r,t=this.a
return u<t.length?C.b.ab(t,u+1):""},
gcF:function(){var u=this,t=u.f
if(typeof t!=="number")return t.R()
if(t>=u.r)return C.Y
t=P.h
return new P.en(P.mu(u.gcE(u)),[t,t])},
eo:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.m(b,"$iB",[P.h,null],"$aB")
u=k.gbH()
t=u==="file"
s=k.c
r=s>0?C.b.u(k.a,k.b+3,s):""
q=k.ge4()?k.gbA(k):j
s=k.c
if(s>0)p=C.b.u(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.u(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a3(o,"/"))o="/"+o
m=P.lz(j,0,0,b)
n=k.r
l=n<s.length?C.b.ab(s,n+1):j
return new P.cf(u,r,p,q,o,m,l)},
gI:function(a){var u=this.y
return u==null?this.y=C.b.gI(this.a):u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.T(b).$ils&&this.a===b.i(0)},
i:function(a){return this.a},
$ils:1}
P.jI.prototype={}
W.y.prototype={}
W.ft.prototype={
gn:function(a){return a.length}}
W.dx.prototype={
i:function(a){return String(a)},
$idx:1}
W.fu.prototype={
i:function(a){return String(a)}}
W.ct.prototype={$ict:1}
W.bV.prototype={$ibV:1}
W.bA.prototype={$ibA:1}
W.bW.prototype={
cP:function(a,b,c){if(c!=null)return a.getContext(b,P.pv(c))
return a.getContext(b)},
eE:function(a,b){return this.cP(a,b,null)},
$ibW:1}
W.cw.prototype={$icw:1}
W.bB.prototype={
gn:function(a){return a.length}}
W.cy.prototype={$icy:1}
W.fL.prototype={
gn:function(a){return a.length}}
W.W.prototype={$iW:1}
W.cz.prototype={
gn:function(a){return a.length}}
W.fM.prototype={}
W.b4.prototype={}
W.b5.prototype={}
W.fN.prototype={
gn:function(a){return a.length}}
W.fO.prototype={
gn:function(a){return a.length}}
W.fR.prototype={
gn:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.fS.prototype={
i:function(a){return String(a)}}
W.dH.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.m(c,"$iam",[P.ab],"$aam")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[[P.am,P.ab]]},
$az:function(){return[[P.am,P.ab]]},
$ik:1,
$ak:function(){return[[P.am,P.ab]]},
$ib:1,
$ab:function(){return[[P.am,P.ab]]},
$aI:function(){return[[P.am,P.ab]]}}
W.dI.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gaK(a))+" x "+H.i(this.gaF(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iam)return!1
return a.left===u.gbz(b)&&a.top===u.gbD(b)&&this.gaK(a)===u.gaK(b)&&this.gaF(a)===u.gaF(b)},
gI:function(a){return W.mD(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(this.gaK(a)),C.e.gI(this.gaF(a)))},
gdJ:function(a){return a.bottom},
gaF:function(a){return a.height},
gbz:function(a){return a.left},
gcH:function(a){return a.right},
gbD:function(a){return a.top},
gaK:function(a){return a.width},
$iam:1,
$aam:function(){return[P.ab]}}
W.fT.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.M(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[P.h]},
$az:function(){return[P.h]},
$ik:1,
$ak:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aI:function(){return[P.h]}}
W.fU.prototype={
gn:function(a){return a.length}}
W.jG.prototype={
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.f(u[b],"$iU")},
k:function(a,b,c){var u
H.f(c,"$iU")
u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gW:function(a){var u=this.cK(this)
return new J.az(u,u.length,[H.q(u,0)])},
$az:function(){return[W.U]},
$ak:function(){return[W.U]},
$ab:function(){return[W.U]}}
W.U.prototype={
gil:function(a){return new W.jJ(a)},
gcg:function(a){return new W.jG(a,a.children)},
gdK:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.R()
if(s<0)s=-s*0
if(typeof r!=="number")return r.R()
if(r<0)r=-r*0
return new P.am(u,t,s,r,[P.ab])},
i:function(a){return a.localName},
af:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.m4
if(u==null){u=H.e([],[W.aD])
t=new W.e1(u)
C.a.h(u,W.mC(null))
C.a.h(u,W.mE())
$.m4=t
d=t}else d=u
u=$.m3
if(u==null){u=new W.fe(d)
$.m3=u
c=u}else{u.a=d
c=u}}if($.bm==null){u=document
t=u.implementation.createHTMLDocument("")
$.bm=t
$.lh=t.createRange()
t=$.bm.createElement("base")
H.f(t,"$ict")
t.href=u.baseURI
$.bm.head.appendChild(t)}u=$.bm
if(u.body==null){t=u.createElement("body")
u.body=H.f(t,"$ibA")}u=$.bm
if(!!this.$ibA)s=u.body
else{s=u.createElement(a.tagName)
$.bm.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.V(C.V,a.tagName)){$.lh.selectNodeContents(s)
r=$.lh.createContextualFragment(b)}else{s.innerHTML=b
r=$.bm.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bm.body
if(s==null?u!=null:s!==u)J.lW(s)
c.cQ(r)
document.adoptNode(r)
return r},
iv:function(a,b,c){return this.af(a,b,c,null)},
eG:function(a,b){a.textContent=null
a.appendChild(this.af(a,b,null,null))},
$iU:1,
ger:function(a){return a.tagName}}
W.fY.prototype={
$1:function(a){return!!J.T(H.f(a,"$iH")).$iU},
$S:27}
W.n.prototype={$in:1}
W.j.prototype={
i9:function(a,b,c,d){H.o(c,{func:1,args:[W.n]})
if(c!=null)this.f7(a,b,c,!1)},
f7:function(a,b,c,d){return a.addEventListener(b,H.ck(H.o(c,{func:1,args:[W.n]}),1),!1)},
$ij:1}
W.aI.prototype={$iaI:1}
W.cC.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaI")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aI]},
$az:function(){return[W.aI]},
$ik:1,
$ak:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$icC:1,
$aI:function(){return[W.aI]}}
W.h3.prototype={
gn:function(a){return a.length}}
W.h7.prototype={
gn:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.hc.prototype={
gn:function(a){return a.length}}
W.c_.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.H]},
$az:function(){return[W.H]},
$ik:1,
$ak:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$ic_:1,
$aI:function(){return[W.H]}}
W.bn.prototype={$ibn:1,
gdL:function(a){return a.data}}
W.cF.prototype={$icF:1}
W.cG.prototype={$icG:1}
W.b8.prototype={$ib8:1}
W.dT.prototype={
i:function(a){return String(a)},
$idT:1}
W.hM.prototype={
gn:function(a){return a.length}}
W.cL.prototype={$icL:1}
W.hN.prototype={
j:function(a,b){return P.bt(a.get(H.M(b)))},
H:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bt(t.value[1]))}},
ga4:function(a){var u=H.e([],[P.h])
this.H(a,new W.hO(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aaf:function(){return[P.h,null]},
$iB:1,
$aB:function(){return[P.h,null]}}
W.hO.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hP.prototype={
j:function(a,b){return P.bt(a.get(H.M(b)))},
H:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bt(t.value[1]))}},
ga4:function(a){var u=H.e([],[P.h])
this.H(a,new W.hQ(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aaf:function(){return[P.h,null]},
$iB:1,
$aB:function(){return[P.h,null]}}
W.hQ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aS.prototype={$iaS:1}
W.hR.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaS")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aS]},
$az:function(){return[W.aS]},
$ik:1,
$ak:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aI:function(){return[W.aS]}}
W.ag.prototype={$iag:1}
W.ar.prototype={
gaL:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.ml("No elements"))
if(t>1)throw H.c(P.ml("More than one element"))
return u.firstChild},
as:function(a,b){var u,t,s,r
H.m(b,"$ik",[W.H],"$ak")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
k:function(a,b,c){var u,t
H.f(c,"$iH")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gW:function(a){var u=this.a.childNodes
return new W.dL(u,u.length,[H.co(C.Z,u,"I",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$az:function(){return[W.H]},
$ak:function(){return[W.H]},
$ab:function(){return[W.H]}}
W.H.prototype={
je:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
ji:function(a,b){var u,t
try{u=a.parentNode
J.nx(u,b,a)}catch(t){H.ak(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eK(a):u},
ig:function(a,b){return a.appendChild(H.f(b,"$iH"))},
hG:function(a,b,c){return a.replaceChild(b,c)},
$iH:1}
W.cR.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.H]},
$az:function(){return[W.H]},
$ik:1,
$ak:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aI:function(){return[W.H]}}
W.aT.prototype={$iaT:1,
gn:function(a){return a.length}}
W.i6.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaT")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aT]},
$az:function(){return[W.aT]},
$ik:1,
$ak:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aI:function(){return[W.aT]}}
W.ih.prototype={
j:function(a,b){return P.bt(a.get(H.M(b)))},
H:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bt(t.value[1]))}},
ga4:function(a){var u=H.e([],[P.h])
this.H(a,new W.ii(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aaf:function(){return[P.h,null]},
$iB:1,
$aB:function(){return[P.h,null]}}
W.ii.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.ik.prototype={
gn:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.iw.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaV")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aV]},
$az:function(){return[W.aV]},
$ik:1,
$ak:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aI:function(){return[W.aV]}}
W.aW.prototype={$iaW:1}
W.ix.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaW")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aW]},
$az:function(){return[W.aW]},
$ik:1,
$ak:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aI:function(){return[W.aW]}}
W.aX.prototype={$iaX:1,
gn:function(a){return a.length}}
W.iA.prototype={
j:function(a,b){return a.getItem(H.M(b))},
k:function(a,b,c){a.setItem(b,c)},
H:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga4:function(a){var u=H.e([],[P.h])
this.H(a,new W.iB(u))
return u},
gn:function(a){return a.length},
$aaf:function(){return[P.h,P.h]},
$iB:1,
$aB:function(){return[P.h,P.h]}}
W.iB.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:24}
W.aJ.prototype={$iaJ:1}
W.bd.prototype={$ibd:1}
W.ed.prototype={
af:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bJ(a,b,c,d)
u=W.nO("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ar(t).as(0,new W.ar(u))
return t}}
W.iH.prototype={
af:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bJ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.af(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaL(u)
s.toString
u=new W.ar(s)
r=u.gaL(u)
t.toString
r.toString
new W.ar(t).as(0,new W.ar(r))
return t}}
W.iI.prototype={
af:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bJ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.af(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaL(u)
t.toString
s.toString
new W.ar(t).as(0,new W.ar(s))
return t}}
W.d0.prototype={$id0:1}
W.aZ.prototype={$iaZ:1}
W.aK.prototype={$iaK:1}
W.iK.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaK")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aK]},
$az:function(){return[W.aK]},
$ik:1,
$ak:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aI:function(){return[W.aK]}}
W.iL.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaZ")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aZ]},
$az:function(){return[W.aZ]},
$ik:1,
$ak:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aI:function(){return[W.aZ]}}
W.iP.prototype={
gn:function(a){return a.length}}
W.b_.prototype={$ib_:1}
W.b0.prototype={$ib0:1}
W.iT.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$ib_")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.b_]},
$az:function(){return[W.b_]},
$ik:1,
$ak:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aI:function(){return[W.b_]}}
W.iU.prototype={
gn:function(a){return a.length}}
W.bP.prototype={}
W.jf.prototype={
i:function(a){return String(a)}}
W.jx.prototype={
gn:function(a){return a.length}}
W.bh.prototype={
giy:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.J("deltaY is not supported"))},
gix:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.J("deltaX is not supported"))},
$ibh:1}
W.da.prototype={
hI:function(a,b){return a.requestAnimationFrame(H.ck(H.o(b,{func:1,ret:-1,args:[P.ab]}),1))},
fn:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.db.prototype={$idb:1}
W.jH.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iW")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.W]},
$az:function(){return[W.W]},
$ik:1,
$ak:function(){return[W.W]},
$ib:1,
$ab:function(){return[W.W]},
$aI:function(){return[W.W]}}
W.ew.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iam)return!1
return a.left===u.gbz(b)&&a.top===u.gbD(b)&&a.width===u.gaK(b)&&a.height===u.gaF(b)},
gI:function(a){return W.mD(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(a.width),C.e.gI(a.height))},
gaF:function(a){return a.height},
gaK:function(a){return a.width}}
W.jW.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaR")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aR]},
$az:function(){return[W.aR]},
$ik:1,
$ak:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aI:function(){return[W.aR]}}
W.eO.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.H]},
$az:function(){return[W.H]},
$ik:1,
$ak:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aI:function(){return[W.H]}}
W.k9.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaX")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aX]},
$az:function(){return[W.aX]},
$ik:1,
$ak:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aI:function(){return[W.aX]}}
W.kd.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaJ")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aJ]},
$az:function(){return[W.aJ]},
$ik:1,
$ak:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$aI:function(){return[W.aJ]}}
W.jF.prototype={
H:function(a,b){var u,t,s,r,q
H.o(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.ga4(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga4:function(a){var u,t,s,r=this.a.attributes,q=H.e([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=H.f(r[t],"$idb")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aaf:function(){return[P.h,P.h]},
$aB:function(){return[P.h,P.h]}}
W.jJ.prototype={
j:function(a,b){return this.a.getAttribute(H.M(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.ga4(this).length}}
W.jK.prototype={}
W.lw.prototype={}
W.jL.prototype={}
W.jM.prototype={
$1:function(a){return this.a.$1(H.f(a,"$in"))},
$S:37}
W.bQ.prototype={
eW:function(a){var u
if($.dd.giU($.dd)){for(u=0;u<262;++u)$.dd.k(0,C.U[u],W.pF())
for(u=0;u<12;++u)$.dd.k(0,C.q[u],W.pG())}},
aV:function(a){return $.nt().V(0,W.cA(a))},
at:function(a,b,c){var u=$.dd.j(0,H.i(W.cA(a))+"::"+b)
if(u==null)u=$.dd.j(0,"*::"+b)
if(u==null)return!1
return H.lG(u.$4(a,b,c,this))},
$iaD:1}
W.I.prototype={
gW:function(a){return new W.dL(a,this.gn(a),[H.co(this,a,"I",0)])}}
W.e1.prototype={
aV:function(a){return C.a.dF(this.a,new W.hZ(a))},
at:function(a,b,c){return C.a.dF(this.a,new W.hY(a,b,c))},
$iaD:1}
W.hZ.prototype={
$1:function(a){return H.f(a,"$iaD").aV(this.a)},
$S:29}
W.hY.prototype={
$1:function(a){return H.f(a,"$iaD").at(this.a,this.b,this.c)},
$S:29}
W.eW.prototype={
f2:function(a,b,c,d){var u,t,s
this.a.as(0,c)
u=b.bG(0,new W.k6())
t=b.bG(0,new W.k7())
this.b.as(0,u)
s=this.c
s.as(0,C.x)
s.as(0,t)},
aV:function(a){return this.a.V(0,W.cA(a))},
at:function(a,b,c){var u=this,t=W.cA(a),s=u.c
if(s.V(0,H.i(t)+"::"+b))return u.d.ie(c)
else if(s.V(0,"*::"+b))return u.d.ie(c)
else{s=u.b
if(s.V(0,H.i(t)+"::"+b))return!0
else if(s.V(0,"*::"+b))return!0
else if(s.V(0,H.i(t)+"::*"))return!0
else if(s.V(0,"*::*"))return!0}return!1},
$iaD:1}
W.k6.prototype={
$1:function(a){return!C.a.V(C.q,H.M(a))},
$S:30}
W.k7.prototype={
$1:function(a){return C.a.V(C.q,H.M(a))},
$S:30}
W.kf.prototype={
at:function(a,b,c){if(this.eO(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.V(0,b)
return!1}}
W.kg.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.M(a))},
$S:23}
W.ke.prototype={
aV:function(a){var u=J.T(a)
if(!!u.$icV)return!1
u=!!u.$ip
if(u&&W.cA(a)==="foreignObject")return!1
if(u)return!0
return!1},
at:function(a,b,c){if(b==="is"||C.b.a3(b,"on"))return!1
return this.aV(a)},
$iaD:1}
W.dL.prototype={
C:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdg(J.dv(u.a,t))
u.c=t
return!0}u.sdg(null)
u.c=s
return!1},
gK:function(a){return this.d},
sdg:function(a){this.d=H.F(a,H.q(this,0))},
$ib6:1}
W.aD.prototype={}
W.k4.prototype={$iqm:1}
W.fe.prototype={
cQ:function(a){new W.kq(this).$2(a,null)},
b6:function(a,b){if(b==null)J.lW(a)
else b.removeChild(a)},
hN:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nB(a)
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
p=H.G(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ak(r)}t="element unprintable"
try{t=J.au(a)}catch(r){H.ak(r)}try{s=W.cA(a)
this.hM(H.f(a,"$iU"),b,p,t,s,H.f(o,"$iB"),H.M(n))}catch(r){if(H.ak(r) instanceof P.aP)throw r
else{this.b6(a,b)
window
q="Removing corrupted element "+H.i(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hM:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b6(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aV(a)){o.b6(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.at(a,"is",g)){o.b6(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga4(f)
t=H.e(u.slice(0),[H.q(u,0)])
for(s=f.ga4(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
q=o.a
p=J.nE(r)
H.M(r)
if(!q.at(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.i(e)+" "+r+'="'+H.i(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.T(a).$id0)o.cQ(a.content)},
$iq6:1}
W.kq.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hN(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b6(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ak(s)
r=H.f(u,"$iH")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iH")}},
$S:35}
W.ev.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.di.prototype={}
W.dj.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.f1.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.f7.prototype={}
W.f8.prototype={}
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
P.ka.prototype={
e0:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cN:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.T(a)
if(!!u.$iaA)return new Date(a.a)
if(!!u.$iog)throw H.c(P.j7("structured clone of RegExp"))
if(!!u.$iaI)return a
if(!!u.$ibV)return a
if(!!u.$icC)return a
if(!!u.$ibn)return a
if(!!u.$icO||!!u.$ibL||!!u.$icL)return a
if(!!u.$iB){t=q.e0(a)
s=q.b
if(t>=s.length)return H.d(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.H(a,new P.kc(p,q))
return p.a}if(!!u.$ib){t=q.e0(a)
p=q.b
if(t>=p.length)return H.d(p,t)
r=p[t]
if(r!=null)return r
return q.iu(a,t)}throw H.c(P.j7("structured clone of other type"))},
iu:function(a,b){var u,t=J.dr(a),s=t.gn(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cN(t.j(a,u)))
return r}}
P.kc.prototype={
$2:function(a,b){this.a.a[a]=this.b.cN(b)},
$S:6}
P.fb.prototype={$ibn:1,
gdL:function(a){return this.a}}
P.kD.prototype={
$2:function(a,b){this.a[a]=b},
$S:6}
P.kb.prototype={}
P.h4.prototype={
gbn:function(){var u=this.b,t=H.at(u,"z",0),s=W.U
return new H.hw(new H.d9(u,H.o(new P.h5(),{func:1,ret:P.R,args:[t]}),[t]),H.o(new P.h6(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.f(c,"$iU")
u=this.gbn()
J.nC(u.b.$1(J.fs(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aF(this.gbn().a)},
j:function(a,b){var u=this.gbn()
return u.b.$1(J.fs(u.a,b))},
gW:function(a){var u=P.m8(this.gbn(),!1,W.U)
return new J.az(u,u.length,[H.q(u,0)])},
$az:function(){return[W.U]},
$ak:function(){return[W.U]},
$ab:function(){return[W.U]}}
P.h5.prototype={
$1:function(a){return!!J.T(H.f(a,"$iH")).$iU},
$S:27}
P.h6.prototype={
$1:function(a){return H.r(H.f(a,"$iH"),"$iU")},
$S:34}
P.k_.prototype={
gcH:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.D(t)
return H.F(u+t,H.q(this,0))},
gdJ:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.D(t)
return H.F(u+t,H.q(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
t:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.T(b)
if(!!u.$iam){t=p.a
if(t==u.gbz(b)){s=p.b
if(s==u.gbD(b)){r=p.c
if(typeof t!=="number")return t.v()
if(typeof r!=="number")return H.D(r)
q=H.q(p,0)
if(H.F(t+r,q)===u.gcH(b)){t=p.d
if(typeof s!=="number")return s.v()
if(typeof t!=="number")return H.D(t)
u=H.F(s+t,q)===u.gdJ(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t=this,s=t.a,r=J.dw(s),q=t.b,p=J.dw(q),o=t.c
if(typeof s!=="number")return s.v()
if(typeof o!=="number")return H.D(o)
u=H.q(t,0)
o=C.d.gI(H.F(s+o,u))
s=t.d
if(typeof q!=="number")return q.v()
if(typeof s!=="number")return H.D(s)
u=C.d.gI(H.F(q+s,u))
return P.oG(P.jY(P.jY(P.jY(P.jY(0,r),p),o),u))}}
P.am.prototype={
gbz:function(a){return this.a},
gbD:function(a){return this.b},
gaK:function(a){return this.c},
gaF:function(a){return this.d}}
P.b9.prototype={$ib9:1}
P.hl.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib9")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$az:function(){return[P.b9]},
$ik:1,
$ak:function(){return[P.b9]},
$ib:1,
$ab:function(){return[P.b9]},
$aI:function(){return[P.b9]}}
P.bc.prototype={$ibc:1}
P.i1.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibc")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$az:function(){return[P.bc]},
$ik:1,
$ak:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aI:function(){return[P.bc]}}
P.i8.prototype={
gn:function(a){return a.length}}
P.cV.prototype={$icV:1}
P.iG.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.M(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$az:function(){return[P.h]},
$ik:1,
$ak:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aI:function(){return[P.h]}}
P.p.prototype={
gcg:function(a){return new P.h4(a,new W.ar(a))},
af:function(a,b,c,d){var u,t,s,r,q,p=H.e([],[W.aD])
C.a.h(p,W.mC(null))
C.a.h(p,W.mE())
C.a.h(p,new W.ke())
c=new W.fe(new W.e1(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).iv(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ar(s)
q=p.gaL(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.bf.prototype={$ibf:1}
P.iV.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibf")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$az:function(){return[P.bf]},
$ik:1,
$ak:function(){return[P.bf]},
$ib:1,
$ab:function(){return[P.bf]},
$aI:function(){return[P.bf]}}
P.eG.prototype={}
P.eH.prototype={}
P.eR.prototype={}
P.eS.prototype={}
P.f2.prototype={}
P.f3.prototype={}
P.f9.prototype={}
P.fa.prototype={}
P.Q.prototype={$ik:1,
$ak:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$ioq:1}
P.fx.prototype={
gn:function(a){return a.length}}
P.fy.prototype={
j:function(a,b){return P.bt(a.get(H.M(b)))},
H:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bt(t.value[1]))}},
ga4:function(a){var u=H.e([],[P.h])
this.H(a,new P.fz(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aaf:function(){return[P.h,null]},
$iB:1,
$aB:function(){return[P.h,null]}}
P.fz.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.fA.prototype={
gn:function(a){return a.length}}
P.bU.prototype={}
P.i2.prototype={
gn:function(a){return a.length}}
P.eu.prototype={}
P.dA.prototype={$idA:1}
P.e5.prototype={$ie5:1}
P.c6.prototype={
jn:function(a,b,c,d,e,f,g){var u,t=J.T(g)
if(!!t.$ibn)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.pw(g))
return}if(!!t.$icF)t=!0
else t=!1
if(t){this.hY(a,b,c,d,e,f,g)
return}throw H.c(P.dy("Incorrect number or type of arguments"))},
hY:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a5:function(a,b,c){return a.uniform1f(b,c)},
bF:function(a,b,c){return a.uniform1i(b,c)},
a_:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ex:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
ey:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ez:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic6:1}
P.e8.prototype={$ie8:1}
P.ef.prototype={$ief:1}
P.el.prototype={$iel:1}
P.iy.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return P.bt(a.item(b))},
k:function(a,b,c){H.f(c,"$iB")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$az:function(){return[[P.B,,,]]},
$ik:1,
$ak:function(){return[[P.B,,,]]},
$ib:1,
$ab:function(){return[[P.B,,,]]},
$aI:function(){return[[P.B,,,]]}}
P.eZ.prototype={}
P.f_.prototype={}
O.a6.prototype={
bK:function(a){var u=this
u.sfB(H.e([],[a]))
u.sdm(null)
u.sdj(null)
u.sdn(null)},
cR:function(a,b,c){var u=this,t=H.at(u,"a6",0)
H.o(b,{func:1,ret:P.R,args:[[P.k,t]]})
t={func:1,ret:-1,args:[P.l,[P.k,t]]}
H.o(a,t)
H.o(c,t)
u.sdm(b)
u.sdj(a)
u.sdn(c)},
bj:function(a,b){return this.cR(a,null,b)},
hk:function(a){var u
H.m(a,"$ik",[H.at(this,"a6",0)],"$ak")
u=this.b
if(u!=null)return u.$1(a)
return!0},
eV:function(a,b){var u
H.m(b,"$ik",[H.at(this,"a6",0)],"$ak")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gW:function(a){var u=this.a
return new J.az(u,u.length,[H.q(u,0)])},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.at(s,"a6",0)
H.F(b,r)
r=[r]
if(H.G(s.hk(H.e([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.eV(t,H.e([b],r))}},
sfB:function(a){this.a=H.m(a,"$ib",[H.at(this,"a6",0)],"$ab")},
sdm:function(a){this.b=H.o(a,{func:1,ret:P.R,args:[[P.k,H.at(this,"a6",0)]]})},
sdj:function(a){this.c=H.o(a,{func:1,ret:-1,args:[P.l,[P.k,H.at(this,"a6",0)]]})},
sdn:function(a){H.o(a,{func:1,ret:-1,args:[P.l,[P.k,H.at(this,"a6",0)]]})},
$ik:1}
O.cK.prototype={
gn:function(a){return this.a.length},
gA:function(){var u=this.b
return u==null?this.b=D.Y():u},
aM:function(){var u=this.b
if(u!=null)u.F(null)},
ga2:function(a){var u=this.a
if(u.length>0)return C.a.gav(u)
else return V.dY()},
el:function(a){var u=this.a
if(a==null)C.a.h(u,V.dY())
else C.a.h(u,a)
this.aM()},
cD:function(){var u=this.a
if(u.length>0){u.pop()
this.aM()}},
sbU:function(a){this.a=H.m(a,"$ib",[V.aq],"$ab")}}
E.fD.prototype={}
E.av.prototype={
saa:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gA().D(0,s.geg())
u=s.c
if(u!=null)u.gA().h(0,s.geg())
t=new D.P("shape",r,s.c,[F.e9])
t.b=!0
s.aH(t)}},
sbe:function(a){var u,t,s=this
if(!J.K(s.r,a)){u=s.r
if(u!=null)u.gA().D(0,s.gee())
if(a!=null)a.gA().h(0,s.gee())
s.r=a
t=new D.P("mover",u,a,[U.ah])
t.b=!0
s.aH(t)}},
ay:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.b1(0,b,s):null
if(!J.K(q,s.x)){u=s.x
s.x=q
t=new D.P("matrix",u,q,[V.aq])
t.b=!0
s.aH(t)}for(r=s.y.a,r=new J.az(r,r.length,[H.q(r,0)]);r.C();)r.d.ay(0,b)},
b_:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga2(s))
else C.a.h(s.a,r.q(0,s.ga2(s)))
s.aM()
a.em(t.f)
s=a.dy
u=(s&&C.a).gav(s)
if(u!=null&&t.d!=null)u.jh(a,t)
for(s=t.y.a,s=new J.az(s,s.length,[H.q(s,0)]);s.C();)s.d.b_(a)
a.ek()
a.dx.cD()},
aH:function(a){var u=this.z
if(u!=null)u.F(a)},
U:function(){return this.aH(null)},
eh:function(a){H.f(a,"$iC")
this.e=null
this.aH(a)},
j4:function(){return this.eh(null)},
ef:function(a){this.aH(H.f(a,"$iC"))},
j3:function(){return this.ef(null)},
ed:function(a){this.aH(H.f(a,"$iC"))},
j0:function(){return this.ed(null)},
j_:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ik",[E.av],"$ak")
for(u=b.length,t=this.gec(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bY()
o.sak(null)
o.saS(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.sak(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}this.U()},
j2:function(a,b){var u,t
H.m(b,"$ik",[E.av],"$ak")
for(u=b.gW(b),t=this.gec();u.C();)u.gK(u).gA().D(0,t)
this.U()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfe:function(a,b){this.y=H.m(b,"$ia6",[E.av],"$aa6")},
$icN:1}
E.ic.prototype={
eR:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aA(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cK()
t=[V.aq]
u.sbU(H.e([],t))
u.b=null
u.gA().h(0,new E.id(s))
s.cy=u
u=new O.cK()
u.sbU(H.e([],t))
u.b=null
u.gA().h(0,new E.ie(s))
s.db=u
u=new O.cK()
u.sbU(H.e([],t))
u.b=null
u.gA().h(0,new E.ig(s))
s.dx=u
s.shX(H.e([],[O.c7]))
u=s.dy;(u&&C.a).h(u,null)
s.shS(new H.a4([P.h,A.cW]))},
gjd:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga2(s)
u=t.db
u=t.z=s.q(0,u.ga2(u))
s=u}return s},
em:function(a){var u=this.dy,t=a==null?(u&&C.a).gav(u):a;(u&&C.a).h(u,t)},
ek:function(){var u=this.dy
if(u.length>1)u.pop()},
shX:function(a){this.dy=H.m(a,"$ib",[O.c7],"$ab")},
shS:function(a){this.fr=H.m(a,"$iB",[P.h,A.cW],"$aB")}}
E.id.prototype={
$1:function(a){var u
H.f(a,"$iC")
u=this.a
u.ch=u.z=null},
$S:10}
E.ie.prototype={
$1:function(a){var u
H.f(a,"$iC")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:10}
E.ig.prototype={
$1:function(a){var u
H.f(a,"$iC")
u=this.a
u.cx=u.ch=null},
$S:10}
E.eh.prototype={
cY:function(a){H.f(a,"$iC")
this.ep()},
cX:function(){return this.cY(null)},
giO:function(){var u,t=this,s=Date.now(),r=C.d.a9(P.m2(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aA(s,!1)
return u/r},
ds:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.q()
if(typeof r!=="number")return H.D(r)
u=C.e.cr(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.q()
t=C.e.cr(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.mo(C.o,s.gjj())}},
ep:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.o(new E.iO(this),{func:1,ret:-1,args:[P.ab]})
C.E.fn(u)
C.E.hI(u,W.mS(t,P.ab))}},
jg:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.ds()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aA(r,!1)
s.y=P.m2(r-s.r.a).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aM()
r=s.db
C.a.sn(r.a,0)
r.aM()
r=s.dx
C.a.sn(r.a,0)
r.aM()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.b_(p.e)}s=p.z
if(s!=null)s.F(null)}catch(q){u=H.ak(q)
t=H.cp(q)
P.lP("Error: "+H.i(u))
P.lP("Stack: "+H.i(t))
throw H.c(u)}}}
E.iO.prototype={
$1:function(a){var u
H.n5(a)
u=this.a
if(u.ch){u.ch=!1
u.jg()}},
$S:57}
Z.es.prototype={$iq0:1}
Z.dB.prototype={
cb:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ak(s)
t=P.u('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.jy.prototype={$iq1:1}
Z.dC.prototype={
aX:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
cb:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].cb(a)},
js:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
b_:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.e([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(p,u[s].i(0))
r=H.e([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.au(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfv:function(a){this.b=H.m(a,"$ib",[Z.bI],"$ab")},
$iqa:1}
Z.bI.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.i(H.cU(this.c))+"'")+"]"}}
Z.bs.prototype={
gcS:function(a){var u=this.a,t=(u&$.bx().a)!==0?3:0
if((u&$.bw().a)!==0)t+=3
if((u&$.bv().a)!==0)t+=3
if((u&$.bT().a)!==0)t+=2
if((u&$.by().a)!==0)t+=3
if((u&$.dt().a)!==0)t+=3
if((u&$.du().a)!==0)t+=4
if((u&$.cs().a)!==0)++t
return(u&$.bu().a)!==0?t+4:t},
ih:function(a){var u,t=$.bx(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bT()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.by()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dt()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.du()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bu()
if((s&t.a)!==0)if(u===a)return t
return $.nr()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bs))return!1
return this.a===b.a},
i:function(a){var u=H.e([],[P.h]),t=this.a
if((t&$.bx().a)!==0)C.a.h(u,"Pos")
if((t&$.bw().a)!==0)C.a.h(u,"Norm")
if((t&$.bv().a)!==0)C.a.h(u,"Binm")
if((t&$.bT().a)!==0)C.a.h(u,"Txt2D")
if((t&$.by().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dt().a)!==0)C.a.h(u,"Clr3")
if((t&$.du().a)!==0)C.a.h(u,"Clr4")
if((t&$.cs().a)!==0)C.a.h(u,"Weight")
if((t&$.bu().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fG.prototype={}
D.bY.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.C]}
H.o(b,u)
if(this.a==null)this.sak(H.e([],[u]))
u=this.a;(u&&C.a).h(u,b)},
D:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[D.C]})
u=s.a
u=u==null?null:C.a.V(u,b)
if(u===!0){u=s.a
t=(u&&C.a).D(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.V(u,b)
if(u===!0){u=s.b
t=(u&&C.a).D(u,b)||t}return t},
F:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.C()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.H(P.m8(u,!0,{func:1,ret:-1,args:[D.C]}),new D.h0(q))
u=r.b
if(u!=null){r.saS(H.e([],[{func:1,ret:-1,args:[D.C]}]))
C.a.H(u,new D.h1(q))}return!0},
iE:function(){return this.F(null)},
aw:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.F(u)}}},
sak:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.C]}],"$ab")},
saS:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.C]}],"$ab")}}
D.h0.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.C]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.h1.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.C]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.C.prototype={}
D.c0.prototype={}
D.c1.prototype={}
D.P.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.dD.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dD))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dQ.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dQ))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.hk.prototype={
j9:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
j5:function(a){this.c=a.b
this.d.D(0,a.a)
return!1},
shA:function(a){this.d=H.m(a,"$imk",[P.l],"$amk")}}
X.dU.prototype={}
X.hs.prototype={
b4:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.q()
u=b.b
t=q.ch
if(typeof u!=="number")return u.q()
s=o.v(0,new V.a5(n*m,u*t))
t=q.a.gaW()
r=new X.bp(a,V.bq(),q.x,t,s)
r.b=!0
q.z=new P.aA(p,!1)
q.x=s
return r},
cC:function(a,b){this.r=a.a
return!1},
bg:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eF()
if(typeof u!=="number")return u.aj()
this.r=(u&~t)>>>0
return!1},
bf:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.b4(a,b))
return!0},
ja:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaW()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.q()
q=a.b
p=o.cy
if(typeof q!=="number")return q.q()
t=new X.cM(new V.X(s*r,q*p),u,t)
t.b=!0
n.F(t)
return!0},
h9:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dU(c,r.a.gaW(),b)
s.b=!0
t.F(s)
r.y=new P.aA(u,!1)
r.x=V.bq()}}
X.aC.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aC))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.G(this.b)?"Alt+":""
return u+(H.G(this.c)?"Shift+":"")}}
X.bp.prototype={}
X.hS.prototype={
bR:function(a,b,c){var u=this,t=new P.aA(Date.now(),!1),s=u.a.gaW(),r=new X.bp(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cC:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.F(this.bR(a,b,!0))
return!0},
bg:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eF()
if(typeof t!=="number")return t.aj()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.F(u.bR(a,b,!0))
return!0},
bf:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.bR(a,b,!1))
return!0},
jb:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaW()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.q()
r=a.b
q=p.ch
if(typeof r!=="number")return r.q()
u=new X.cM(new V.X(t*s,r*q),u,b)
u.b=!0
o.F(u)
return!0},
gdM:function(){var u=this.b
return u==null?this.b=D.Y():u},
gcM:function(){var u=this.c
return u==null?this.c=D.Y():u},
geb:function(){var u=this.d
return u==null?this.d=D.Y():u}}
X.cM.prototype={}
X.i7.prototype={}
X.ej.prototype={}
X.iS.prototype={
b4:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.a5],"$ab")
u=new P.aA(Date.now(),!1)
t=a.length>0?a[0]:V.bq()
s=q.a.gaW()
r=new X.ej(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
j8:function(a){var u
H.m(a,"$ib",[V.a5],"$ab")
u=this.b
if(u==null)return!1
u.F(this.b4(a,!0))
return!0},
j6:function(a){var u
H.m(a,"$ib",[V.a5],"$ab")
u=this.c
if(u==null)return!1
u.F(this.b4(a,!0))
return!0},
j7:function(a){var u
H.m(a,"$ib",[V.a5],"$ab")
u=this.d
if(u==null)return!1
u.F(this.b4(a,!1))
return!0}}
X.eo.prototype={
gaW:function(){var u=this.a,t=C.j.gdK(u).c
t.toString
u=C.j.gdK(u).d
u.toString
return V.mi(0,0,t,u)},
da:function(a){var u=a.keyCode,t=H.G(a.ctrlKey)||H.G(a.metaKey)
return new X.dQ(u,new X.aC(t,a.altKey,a.shiftKey))},
aT:function(a){var u=this.b,t=H.G(a.ctrlKey)||H.G(a.metaKey)
u.c=new X.aC(t,a.altKey,a.shiftKey)},
ca:function(a){var u=this.b,t=H.G(a.ctrlKey)||H.G(a.metaKey)
u.c=new X.aC(t,a.altKey,a.shiftKey)},
aD:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.L()
u=t.top
if(typeof r!=="number")return r.L()
return new V.a5(s-q,r-u)},
b5:function(a){return new V.X(a.movementX,a.movementY)},
c4:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.e([],[V.a5])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
q=C.e.am(r.pageX)
C.e.am(r.pageY)
p=o.left
C.e.am(r.pageX)
C.a.h(n,new V.a5(q-p,C.e.am(r.pageY)-o.top))}return n},
aB:function(a){var u=a.buttons,t=H.G(a.ctrlKey)||H.G(a.metaKey)
return new X.dD(u,new X.aC(t,a.altKey,a.shiftKey))},
bV:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.L()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.L()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
h3:function(a){this.f=!0},
fS:function(a){this.f=!1},
fY:function(a){H.f(a,"$iag")
if(H.G(this.f)&&this.bV(a))a.preventDefault()},
h7:function(a){var u
H.f(a,"$ib8")
if(!H.G(this.f))return
u=this.da(a)
this.b.j9(u)},
h5:function(a){var u
H.f(a,"$ib8")
if(!H.G(this.f))return
u=this.da(a)
this.b.j5(u)},
hb:function(a){var u,t,s,r,q=this
H.f(a,"$iag")
u=q.a
u.focus()
q.f=!0
q.aT(a)
if(H.G(q.x)){t=q.aB(a)
s=q.b5(a)
if(q.d.cC(t,s))a.preventDefault()
return}if(H.G(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aB(a)
r=q.aD(a)
if(q.c.cC(t,r))a.preventDefault()},
hf:function(a){var u,t,s,r=this
H.f(a,"$iag")
r.aT(a)
u=r.aB(a)
if(H.G(r.x)){t=r.b5(a)
if(r.d.bg(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aD(a)
if(r.c.bg(u,s))a.preventDefault()},
h1:function(a){var u,t,s,r=this
H.f(a,"$iag")
if(!r.bV(a)){r.aT(a)
u=r.aB(a)
if(H.G(r.x)){t=r.b5(a)
if(r.d.bg(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aD(a)
if(r.c.bg(u,s))a.preventDefault()}},
hd:function(a){var u,t,s,r=this
H.f(a,"$iag")
r.aT(a)
u=r.aB(a)
if(H.G(r.x)){t=r.b5(a)
if(r.d.bf(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aD(a)
if(r.c.bf(u,s))a.preventDefault()},
h_:function(a){var u,t,s,r=this
H.f(a,"$iag")
if(!r.bV(a)){r.aT(a)
u=r.aB(a)
if(H.G(r.x)){t=r.b5(a)
if(r.d.bf(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aD(a)
if(r.c.bf(u,s))a.preventDefault()}},
hh:function(a){var u,t,s=this
H.f(a,"$ibh")
s.aT(a)
u=new V.X((a&&C.D).gix(a),C.D.giy(a)).p(0,180)
if(H.G(s.x)){if(s.d.ja(u))a.preventDefault()
return}if(H.G(s.r))return
t=s.aD(a)
if(s.c.jb(u,t))a.preventDefault()},
hj:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aB(s.y)
t=s.aD(s.y)
s.d.h9(u,t,r)}},
hw:function(a){var u,t=this
H.f(a,"$ib0")
t.a.focus()
t.f=!0
t.ca(a)
u=t.c4(a)
if(t.e.j8(u))a.preventDefault()},
hs:function(a){var u
H.f(a,"$ib0")
this.ca(a)
u=this.c4(a)
if(this.e.j6(u))a.preventDefault()},
hu:function(a){var u
H.f(a,"$ib0")
this.ca(a)
u=this.c4(a)
if(this.e.j7(u))a.preventDefault()},
sfo:function(a){this.z=H.m(a,"$ib",[[P.cZ,P.V]],"$ab")}}
D.bE.prototype={
az:function(a){var u
H.f(a,"$iC")
u=this.r
if(u!=null)u.F(a)},
eY:function(){return this.az(null)},
$iae:1,
$icN:1}
D.ae.prototype={$icN:1}
D.dR.prototype={
az:function(a){var u=this.x
if(u!=null)u.F(a)},
dl:function(a){var u
H.f(a,"$iC")
u=this.y
if(u!=null)u.F(a)},
h8:function(){return this.dl(null)},
hm:function(a){var u,t,s
H.m(a,"$ik",[D.ae],"$ak")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(s==null||this.fg(s))return!1}return!0},
fM:function(a,b){var u,t,s,r,q,p,o,n=D.ae
H.m(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gdk(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=H.f(b[q],"$iae")
if(p instanceof D.bE)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bY()
o.sak(null)
o.saS(null)
o.c=null
o.d=0
p.r=o}H.o(t,s)
if(o.a==null)o.sak(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.c0([n])
n.b=!0
this.az(n)},
hq:function(a,b){var u,t,s,r=D.ae
H.m(b,"$ik",[r],"$ak")
for(u=b.gW(b),t=this.gdk();u.C();){s=u.gK(u)
C.a.D(this.e,s)
s.gA().D(0,t)}r=new D.c1([r])
r.b=!0
this.az(r)},
fg:function(a){var u=C.a.V(this.e,a)
return u},
sfm:function(a){this.e=H.m(a,"$ib",[D.bE],"$ab")},
shx:function(a){this.f=H.m(a,"$ib",[D.e4],"$ab")},
shV:function(a){this.r=H.m(a,"$ib",[D.eb],"$ab")},
$ak:function(){return[D.ae]},
$aa6:function(){return[D.ae]}}
D.e4.prototype={$iae:1,$icN:1}
D.eb.prototype={$iae:1,$icN:1}
V.ac.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ac))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
V.aG.prototype={
cK:function(a){var u=this
return H.e([u.a,u.b,u.c,u.d],[P.A])},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aG))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.h_.prototype={}
V.dX.prototype={
ai:function(a,b){var u=this,t=H.e([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.A])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dX))return!1
u=b.a
t=$.O().a
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
i:function(a){var u,t,s,r,q=this,p=[P.A],o=V.cm(H.e([q.a,q.d,q.r],p),3,0),n=V.cm(H.e([q.b,q.e,q.x],p),3,0),m=V.cm(H.e([q.c,q.f,q.y],p),3,0)
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
V.aq.prototype={
ai:function(a,b){var u=this,t=H.e([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.A])
return t},
e7:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.O().a)return V.dY()
u=1/b1
t=-n
s=-a0
return V.bb((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
q:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bb(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bE:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.E(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cL:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a_(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aq))return!1
u=b.a
t=$.O().a
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
G:function(a){var u,t,s,r,q,p=this,o=[P.A],n=V.cm(H.e([p.a,p.e,p.y,p.cx],o),3,0),m=V.cm(H.e([p.b,p.f,p.z,p.cy],o),3,0),l=V.cm(H.e([p.c,p.r,p.Q,p.db],o),3,0),k=V.cm(H.e([p.d,p.x,p.ch,p.dx],o),3,0)
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
O:function(){return this.G("")}}
V.a5.prototype={
v:function(a,b){return new V.a5(this.a+b.a,this.b+b.b)},
L:function(a,b){return new V.a5(this.a-b.a,this.b-b.b)},
p:function(a,b){if(Math.abs(b-0)<$.O().a)return V.bq()
return new V.a5(this.a/b,this.b/b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}}
V.a_.prototype={
v:function(a,b){return new V.a_(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.a_(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){return new V.a_(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if(Math.abs(b-0)<$.O().a)return V.lp()
return new V.a_(this.a/b,this.b/b,this.c/b)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
V.bN.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bN))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.e7.prototype={
gac:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e7))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.X.prototype={
bc:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.D(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.D(t)
return s*r+u*t},
q:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.q()
u=this.b
if(typeof u!=="number")return u.q()
return new V.X(t*b,u*b)},
p:function(a,b){var u,t
if(Math.abs(b-0)<$.O().a){u=$.mv
return u==null?$.mv=new V.X(0,0):u}u=this.a
if(typeof u!=="number")return u.p()
t=this.b
if(typeof t!=="number")return t.p()
return new V.X(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=this.a
s=$.O()
s.toString
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.D(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.D(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}}
V.E.prototype={
bc:function(a){return Math.sqrt(this.B(this))},
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cv:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.E(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aE:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.E(u*t-s*r,s*q-p*t,p*r-u*q)},
v:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.E(-this.a,-this.b,-this.c)},
q:function(a,b){return new V.E(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if(Math.abs(b-0)<$.O().a)return V.d7()
return new V.E(this.a/b,this.b/b,this.c/b)},
e8:function(){var u=$.O().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.E))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
V.br.prototype={
bc:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u,t=this
if(Math.abs(b-0)<$.O().a){u=$.mA
return u==null?$.mA=new V.br(0,0,0,0):u}return new V.br(t.a/b,t.b/b,t.c/b,t.d/b)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.br))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
U.fH.prototype={
bM:function(a){var u=V.q_(a,this.c,this.b)
return u},
gA:function(){var u=this.y
return u==null?this.y=D.Y():u},
S:function(a){var u=this.y
if(u!=null)u.F(a)},
scO:function(a,b){},
scw:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.O().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bM(u)}s=new D.P("maximumLocation",s,t.b,[P.A])
s.b=!0
t.S(s)}},
scA:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.O().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bM(u)}s=new D.P("minimumLocation",s,t.c,[P.A])
s.b=!0
t.S(s)}},
sZ:function(a,b){var u,t=this
b=t.bM(b)
u=t.d
if(!(Math.abs(u-b)<$.O().a)){t.d=b
u=new D.P("location",u,b,[P.A])
u.b=!0
t.S(u)}},
scz:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.O().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.P("maximumVelocity",r,a,[P.A])
r.b=!0
s.S(r)}},
sX:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.O().a)){u.f=a
t=new D.P("velocity",t,a,[P.A])
t.b=!0
u.S(t)}},
sck:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.O().a)){this.x=a
u=new D.P("dampening",u,a,[P.A])
u.b=!0
this.S(u)}},
ay:function(a,b){var u,t,s,r=this,q=r.f,p=$.O().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sZ(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.O().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sX(u)}}}
U.dF.prototype={
gA:function(){var u=this.b
return u==null?this.b=D.Y():u},
b1:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dF))return!1
return J.K(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cE.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.Y():u},
S:function(a){var u
H.f(a,"$iC")
u=this.e
if(u!=null)u.F(a)},
a8:function(){return this.S(null)},
fK:function(a,b){var u,t,s,r,q,p,o,n=U.ah
H.m(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gaR(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.gA()
o.toString
H.o(t,s)
if(o.a==null)o.sak(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c0([n])
n.b=!0
this.S(n)},
ho:function(a,b){var u,t,s=U.ah
H.m(b,"$ik",[s],"$ak")
for(u=b.gW(b),t=this.gaR();u.C();)u.gK(u).gA().D(0,t)
s=new D.c1([s])
s.b=!0
this.S(s)},
b1:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.R()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.az(r,r.length,[H.q(r,0)]),u=null;r.C();){q=r.d
if(q!=null){t=q.b1(0,b,c)
if(t!=null)u=u==null?t:t.q(0,u)}}s.f=u==null?V.dY():u
r=s.e
if(r!=null)r.aw(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cE))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.K(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ak:function(){return[U.ah]},
$aa6:function(){return[U.ah]},
$iah:1}
U.ah.prototype={}
U.ep.prototype={
gA:function(){var u=this.cy
return u==null?this.cy=D.Y():u},
S:function(a){var u
H.f(a,"$iC")
u=this.cy
if(u!=null)u.F(a)},
a8:function(){return this.S(null)},
b7:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdM().h(0,u.gbW())
u.a.c.geb().h(0,u.gbY())
u.a.c.gcM().h(0,u.gc_())
return!0},
bX:function(a){var u=this
H.f(a,"$iC")
if(!J.K(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bZ:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.f(a,"$iC"),"$ibp")
if(!H.G(n.y))return
if(H.G(n.x)){u=a.d.L(0,a.y)
u=new V.X(u.a,u.b)
u=u.B(u)
t=n.r
if(typeof t!=="number")return H.D(t)
if(u<t)return
n.x=!1}if(H.G(n.d)){u=a.c
t=a.d.L(0,a.y)
u=new V.X(t.a,t.b).q(0,2).p(0,u.gac())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.q()
s=n.e
if(typeof s!=="number")return H.D(s)
t.sX(u*10*s)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=new V.X(s.a,s.b).q(0,2).p(0,u.gac())
s=n.b
q=r.a
if(typeof q!=="number")return q.T()
p=n.e
if(typeof p!=="number")return H.D(p)
o=n.z
if(typeof o!=="number")return H.D(o)
s.sZ(0,-q*p+o)
n.b.sX(0)
t=t.L(0,a.z)
n.Q=new V.X(t.a,t.b).q(0,2).p(0,u.gac())}n.a8()},
c0:function(a){var u,t,s,r=this
H.f(a,"$iC")
if(!H.G(r.y))return
r.y=!1
if(H.G(r.x))return
u=r.Q
if(u.B(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.q()
s=r.e
if(typeof s!=="number")return H.D(s)
u.sX(t*10*s)
r.a8()}},
b1:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.R()
if(q<p){r.ch=p
u=b.y
r.b.ay(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.bb(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iah:1}
U.eq.prototype={
gA:function(){var u=this.fx
return u==null?this.fx=D.Y():u},
S:function(a){var u
H.f(a,"$iC")
u=this.fx
if(u!=null)u.F(a)},
a8:function(){return this.S(null)},
b7:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdM().h(0,s.gbW())
s.a.c.geb().h(0,s.gbY())
s.a.c.gcM().h(0,s.gc_())
u=s.a.d
t=u.f
u=t==null?u.f=D.Y():t
u.h(0,s.gfC())
u=s.a.d
t=u.d
u=t==null?u.d=D.Y():t
u.h(0,s.gfE())
u=s.a.e
t=u.b
u=t==null?u.b=D.Y():t
u.h(0,s.gi3())
u=s.a.e
t=u.d
u=t==null?u.d=D.Y():t
u.h(0,s.gi1())
u=s.a.e
t=u.c
u=t==null?u.c=D.Y():t
u.h(0,s.gi_())
return!0},
aq:function(a){var u=a.a,t=a.b
if(H.G(this.f)){if(typeof u!=="number")return u.T()
u=-u}if(H.G(this.r)){if(typeof t!=="number")return t.T()
t=-t}return new V.X(u,t)},
bX:function(a){var u=this
a=H.r(H.f(a,"$iC"),"$ibp")
if(!J.K(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bZ:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.f(a,"$iC"),"$ibp")
if(!H.G(n.cx))return
if(H.G(n.ch)){u=a.d.L(0,a.y)
u=new V.X(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.D(t)
if(u<t)return
n.ch=!1}if(H.G(n.e)){u=a.c
t=a.d.L(0,a.y)
u=n.aq(new V.X(t.a,t.b).q(0,2).p(0,u.gac()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.D(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.D(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.aq(new V.X(s.a,s.b).q(0,2).p(0,u.gac()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.D(p)
o=n.cy
if(typeof o!=="number")return H.D(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.D(q)
s=n.db
if(typeof s!=="number")return H.D(s)
o.sZ(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.L(0,a.z)
n.dx=n.aq(new V.X(t.a,t.b).q(0,2).p(0,u.gac()))}n.a8()},
c0:function(a){var u,t,s,r=this
H.f(a,"$iC")
if(!H.G(r.cx))return
r.cx=!1
if(H.G(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.D(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.D(u)
s.sX(-t*10*u)
r.a8()}},
fD:function(a){var u=this
if(H.r(H.f(a,"$iC"),"$idU").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fF:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.f(a,"$iC"),"$ibp")
if(!J.K(n.d,a.x.b))return
u=a.c
t=a.d
s=t.L(0,a.y)
r=n.aq(new V.X(s.a,s.b).q(0,2).p(0,u.gac()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.D(p)
o=n.cy
if(typeof o!=="number")return H.D(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.D(q)
s=n.db
if(typeof s!=="number")return H.D(s)
o.sZ(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.L(0,a.z)
n.dx=n.aq(new V.X(t.a,t.b).q(0,2).p(0,u.gac()))
n.a8()},
i4:function(a){var u=this
H.f(a,"$iC")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
i2:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.f(a,"$iC"),"$iej")
if(!H.G(n.cx))return
if(H.G(n.ch)){u=a.d.L(0,a.y)
u=new V.X(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.D(t)
if(u<t)return
n.ch=!1}if(H.G(n.e)){u=a.c
t=a.d.L(0,a.y)
u=n.aq(new V.X(t.a,t.b).q(0,2).p(0,u.gac()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.D(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.D(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.aq(new V.X(s.a,s.b).q(0,2).p(0,u.gac()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.D(p)
o=n.cy
if(typeof o!=="number")return H.D(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.D(q)
s=n.db
if(typeof s!=="number")return H.D(s)
o.sZ(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.L(0,a.z)
n.dx=n.aq(new V.X(t.a,t.b).q(0,2).p(0,u.gac()))}n.a8()},
i0:function(a){var u,t,s,r=this
H.f(a,"$iC")
if(!H.G(r.cx))return
r.cx=!1
if(H.G(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.D(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.D(u)
s.sX(-t*10*u)
r.a8()}},
b1:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.R()
if(q<p){r.dy=p
u=b.y
r.c.ay(0,u)
r.b.ay(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.bb(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.q(0,V.bb(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iah:1}
U.er.prototype={
gA:function(){var u=this.r
return u==null?this.r=D.Y():u},
S:function(a){var u=this.r
if(u!=null)u.F(a)},
b7:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.Y():t
t=r.gfH()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.Y():s).h(0,t)
return!0},
fI:function(a){var u,t,s,r,q=this
H.f(a,"$iC")
if(!J.K(q.b,q.a.b.c))return
H.r(a,"$icM")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){q.d=r
u=new D.P("zoom",u,r,[P.A])
u.b=!0
q.S(u)}},
b1:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.bb(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iah:1}
M.dJ.prototype={
aA:function(a){var u
H.f(a,"$iC")
u=this.y
if(u!=null)u.F(a)},
f_:function(){return this.aA(null)},
fU:function(a,b){var u,t,s,r,q,p,o,n=E.av
H.m(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gap(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bY()
o.sak(null)
o.saS(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.sak(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c0([n])
n.b=!0
this.aA(n)},
fW:function(a,b){var u,t,s=E.av
H.m(b,"$ik",[s],"$ak")
for(u=b.gW(b),t=this.gap();u.C();)u.gK(u).gA().D(0,t)
s=new D.c1([s])
s.b=!0
this.aA(s)},
ses:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gA().D(0,t.gap())
u=t.d
t.d=a
if(a!=null)a.gA().h(0,t.gap())
s=new D.P("technique",u,t.d,[O.c7])
s.b=!0
t.aA(s)}},
gA:function(){var u=this.y
return u==null?this.y=D.Y():u},
b_:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.em(f.d)
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
if(typeof s!=="number")return H.D(s)
o=C.e.am(p*s)
p=q.b
if(typeof r!=="number")return H.D(r)
n=C.e.am(p*r)
p=C.e.am(q.c*s)
a.c=p
q=C.e.am(q.d*r)
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
i=V.bb(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.el(i)
t=$.md
if(t==null){t=V.lp()
q=V.lu()
p=$.mw
t=V.m9(t,q,p==null?$.mw=new V.E(0,0,-1):p)
$.md=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.q(0,h)}a.db.el(h)
u=f.d
if(u!=null)u.ay(0,a)
for(u=f.e.a,u=new J.az(u,u.length,[H.q(u,0)]);u.C();)u.d.ay(0,a)
for(u=f.e.a,u=new J.az(u,u.length,[H.q(u,0)]);u.C();)u.d.b_(a)
f.b.toString
a.cy.cD()
a.db.cD()
f.c.toString
a.ek()},
seZ:function(a,b){this.e=H.m(b,"$ia6",[E.av],"$aa6")},
$iq7:1}
A.dz.prototype={}
A.fw.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iF:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
iz:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.al.prototype={
gan:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
t:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.al))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.hz.prototype={
eQ:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
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
A.pe(c3,u)
A.pg(c3,u)
A.pf(c3,u)
A.pi(c3,u)
A.pj(c3,u)
A.ph(c3,u)
A.pk(c3,u)
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
m=A.pd(b8.z)
b8.c=n
b8.d=m
b8.e=b8.dc(n,35633)
b8.f=b8.dc(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.G(H.lG(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.w(P.u("Failed to link shader: "+H.i(l)))}b8.hP()
b8.hR()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.r(b8.y.M(0,"invViewMat"),"$iaE")
if(t)b8.dy=H.r(b8.y.M(0,"objMat"),"$iaE")
if(r)b8.fr=H.r(b8.y.M(0,"viewObjMat"),"$iaE")
b8.fy=H.r(b8.y.M(0,"projViewObjMat"),"$iaE")
if(c3.ry)b8.k1=H.r(b8.y.M(0,"txt2DMat"),"$id5")
if(c3.x1)b8.k2=H.r(b8.y.M(0,"txtCubeMat"),"$iaE")
if(c3.x2)b8.k3=H.r(b8.y.M(0,"colorMat"),"$iaE")
b8.sfa(H.e([],[A.aE]))
t=c3.y2
if(t>0){b8.k4=H.f(b8.y.M(0,"bendMatCount"),"$iaL")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.w(P.u(c0+q+c1));(s&&C.a).h(s,H.r(j,"$iaE"))}}t=c3.a
if(t.a)b8.r2=H.r(b8.y.M(0,"emissionClr"),"$ia1")
if(t.c)b8.ry=H.r(b8.y.M(0,"emissionTxt"),"$ian")
t=c3.b
if(t.a)b8.x1=H.r(b8.y.M(0,"ambientClr"),"$ia1")
if(t.c)b8.y1=H.r(b8.y.M(0,"ambientTxt"),"$ian")
t=c3.c
if(t.a)b8.y2=H.r(b8.y.M(0,"diffuseClr"),"$ia1")
if(t.c)b8.bw=H.r(b8.y.M(0,"diffuseTxt"),"$ian")
t=c3.d
if(t.a)b8.dN=H.r(b8.y.M(0,"invDiffuseClr"),"$ia1")
if(t.c)b8.dO=H.r(b8.y.M(0,"invDiffuseTxt"),"$ian")
t=c3.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b8.dR=H.r(b8.y.M(0,"shininess"),"$iaj")
if(s)b8.dP=H.r(b8.y.M(0,"specularClr"),"$ia1")
if(t.c)b8.dQ=H.r(b8.y.M(0,"specularTxt"),"$ian")}if(c3.f.c)b8.dS=H.r(b8.y.M(0,"bumpTxt"),"$ian")
if(c3.cy){b8.dT=H.r(b8.y.M(0,"envSampler"),"$ian")
t=c3.r
if(t.a)b8.dU=H.r(b8.y.M(0,"reflectClr"),"$ia1")
if(t.c)b8.dV=H.r(b8.y.M(0,"reflectTxt"),"$ian")
t=c3.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b8.dW=H.r(b8.y.M(0,"refraction"),"$iaj")
if(s)b8.dX=H.r(b8.y.M(0,"refractClr"),"$ia1")
if(t.c)b8.dY=H.r(b8.y.M(0,"refractTxt"),"$ian")}}t=c3.y
if(t.a)b8.dZ=H.r(b8.y.M(0,"alpha"),"$iaj")
if(t.c)b8.e_=H.r(b8.y.M(0,"alphaTxt"),"$ian")
t=P.l
s=[t,A.aL]
b8.sfl(new H.a4(s))
b8.sf0(new H.a4([t,[P.b,A.c8]]))
b8.shy(new H.a4(s))
b8.shz(new H.a4([t,[P.b,A.c9]]))
b8.shU(new H.a4(s))
b8.sf1(new H.a4([t,[P.b,A.cb]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.c8],i=0;i<t.length;t.length===s||(0,H.v)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.i(g)
e=H.e([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.aj()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.w(P.u(c0+d+c1))
H.r(j,"$ia1")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.w(P.u(c0+d+c1))
H.r(c,"$ia1")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.w(P.u(c0+d+c1))
H.r(b,"$ia1")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.w(P.u(c0+d+c1))
H.r(j,"$ia1")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.w(P.u(c0+d+c1))
H.r(c,"$ia1")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.w(P.u(c0+o+c1))
H.r(b,"$ica")
a2=b}else a2=b9
C.a.h(e,new A.c8(a1,a0,a,j,c,a2))}b8.cm.k(0,g,e)
q=b8.cl
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.w(P.u(c0+o+c1))
q.k(0,g,H.f(j,"$iaL"))}for(t=c3.Q,s=t.length,r=[A.c9],i=0;i<t.length;t.length===s||(0,H.v)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.i(g)
e=H.e([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.w(P.u(c0+o+c1))
H.r(j,"$ia1")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.w(P.u(c0+o+c1))
H.r(c,"$ia1")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.w(P.u(c0+o+c1))
H.r(b,"$ia1")
if(typeof g!=="number")return g.aj()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.w(P.u(c0+o+c1))
H.r(a3,"$id5")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.w(P.u(c0+o+c1))
H.r(a3,"$ian")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.w(P.u(c0+o+c1))
H.r(a3,"$ian")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.w(P.u(c0+o+c1))
H.r(a5,"$id4")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.j(0,o)
if(a3==null)H.w(P.u(c0+o+c1))
H.r(a3,"$iaj")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.j(0,o)
if(a5==null)H.w(P.u(c0+o+c1))
H.r(a5,"$iaj")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.j(0,o)
if(a8==null)H.w(P.u(c0+o+c1))
H.r(a8,"$iaj")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.c9(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.co.k(0,g,e)
q=b8.cn
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.w(P.u(c0+o+c1))
q.k(0,g,H.f(j,"$iaL"))}for(t=c3.ch,s=t.length,r=[A.cb],i=0;i<t.length;t.length===s||(0,H.v)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.i(g)
e=H.e([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.w(P.u(c0+o+c1))
H.r(j,"$ia1")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.w(P.u(c0+o+c1))
H.r(c,"$ia1")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.w(P.u(c0+o+c1))
H.r(b,"$ia1")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.w(P.u(c0+o+c1))
H.r(a3,"$ia1")
if(typeof g!=="number")return g.aj()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.w(P.u(c0+o+c1))
H.r(a5,"$ia1")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.w(P.u(c0+o+c1))
H.r(a8,"$ia1")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.j(0,o)
if(b2==null)H.w(P.u(c0+o+c1))
H.r(b2,"$iaj")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.j(0,o)
if(b3==null)H.w(P.u(c0+o+c1))
H.r(b3,"$iaj")
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
if(a5==null)H.w(P.u(c0+d+c1))
H.r(a5,"$id4")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.j(0,d)
if(a5==null)H.w(P.u(c0+d+c1))
H.r(a5,"$iaj")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.j(0,d)
if(a8==null)H.w(P.u(c0+d+c1))
H.r(a8,"$iaj")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.j(0,d)
if(a5==null)H.w(P.u(c0+d+c1))
H.r(a5,"$iaj")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.j(0,d)
if(a8==null)H.w(P.u(c0+d+c1))
H.r(a8,"$iaj")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.j(0,d)
if(b2==null)H.w(P.u(c0+d+c1))
H.r(b2,"$iaj")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.j(0,d)
if(a5==null)H.w(P.u(c0+d+c1))
H.r(a5,"$ica")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.w(P.u(c0+o+c1))
H.r(a5,"$ica")
a6=a5}else a6=b9
C.a.h(e,new A.cb(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.cq.k(0,g,e)
q=b8.cp
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.w(P.u(c0+o+c1))
q.k(0,g,H.f(j,"$iaL"))}}},
ae:function(a,b){if(b!=null&&b.d>=6)a.eH(b)},
sfa:function(a){this.r1=H.m(a,"$ib",[A.aE],"$ab")},
sfl:function(a){this.cl=H.m(a,"$iB",[P.l,A.aL],"$aB")},
sf0:function(a){this.cm=H.m(a,"$iB",[P.l,[P.b,A.c8]],"$aB")},
shy:function(a){this.cn=H.m(a,"$iB",[P.l,A.aL],"$aB")},
shz:function(a){this.co=H.m(a,"$iB",[P.l,[P.b,A.c9]],"$aB")},
shU:function(a){this.cp=H.m(a,"$iB",[P.l,A.aL],"$aB")},
sf1:function(a){this.cq=H.m(a,"$iB",[P.l,[P.b,A.cb]],"$aB")}}
A.aQ.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.aU.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.aY.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.hC.prototype={
i:function(a){return this.bb}}
A.c8.prototype={}
A.c9.prototype={}
A.cb.prototype={}
A.cW.prototype={
eT:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dc:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.G(H.lG(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.u("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
hP:function(){var u,t,s,r=this,q=H.e([],[A.dz]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.D(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dz(p,t.name,s))}r.x=new A.fw(q)},
hR:function(){var u,t,s,r=this,q=H.e([],[A.ek]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.D(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.iw(t.type,t.size,t.name,s))}r.y=new A.j4(q)},
aP:function(a,b,c){var u=this.a
if(a===1)return new A.aL(u,b,c)
else return A.lr(u,this.r,b,a,c)},
fi:function(a,b,c){var u=this.a
if(a===1)return new A.ca(u,b,c)
else return A.lr(u,this.r,b,a,c)},
fj:function(a,b,c){var u=this.a
if(a===1)return new A.an(u,b,c)
else return A.lr(u,this.r,b,a,c)},
br:function(a,b){return new P.eB(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
iw:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aP(b,c,d)
case 5121:return u.aP(b,c,d)
case 5122:return u.aP(b,c,d)
case 5123:return u.aP(b,c,d)
case 5124:return u.aP(b,c,d)
case 5125:return u.aP(b,c,d)
case 5126:return new A.aj(u.a,c,d)
case 35664:return new A.j0(u.a,c,d)
case 35665:return new A.a1(u.a,c,d)
case 35666:return new A.d4(u.a,c,d)
case 35667:return new A.j1(u.a,c,d)
case 35668:return new A.j2(u.a,c,d)
case 35669:return new A.j3(u.a,c,d)
case 35674:return new A.j5(u.a,c,d)
case 35675:return new A.d5(u.a,c,d)
case 35676:return new A.aE(u.a,c,d)
case 35678:return u.fi(b,c,d)
case 35680:return u.fj(b,c,d)
case 35670:throw H.c(u.br("BOOL",c))
case 35671:throw H.c(u.br("BOOL_VEC2",c))
case 35672:throw H.c(u.br("BOOL_VEC3",c))
case 35673:throw H.c(u.br("BOOL_VEC4",c))
default:throw H.c(P.u("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.ek.prototype={}
A.j4.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
M:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aL.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.j1.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.j2.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.j3.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.j_.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
si6:function(a){H.m(a,"$ib",[P.l],"$ab")}}
A.aj.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.j0.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.a1.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.d4.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.j5.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.d5.prototype={
ao:function(a){var u=new Float32Array(H.ch(H.m(a,"$ib",[P.A],"$ab")))
C.c.ey(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.aE.prototype={
ao:function(a){var u=new Float32Array(H.ch(H.m(a,"$ib",[P.A],"$ab")))
C.c.ez(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.ca.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.an.prototype={
eH:function(a){var u=a.d,t=this.a,s=this.d
if(u<6)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.ks.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cv(s.b,b).cv(s.d.cv(s.c,b),c)
a.sZ(0,new V.a_(r.a,r.b,r.c))
a.sax(r.p(0,Math.sqrt(r.B(r))))
s=1-b
u=1-c
a.sdG(new V.bN(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:5}
F.kE.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:21}
F.kG.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.D(p)
s=-s*p
u=r*p
a.sZ(0,new V.a_(s,u,q))
u=new V.E(s,u,q)
a.sax(u.p(0,Math.sqrt(u.B(u))))
a.sdG(new V.bN(1-c,2+c,-1,-1))},
$S:5}
F.kH.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:20}
F.kI.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:20}
F.kR.prototype={
$3:function(a,b,c){var u=c*3.141592653589793,t=Math.sin(u),s=b*6.283185307179586,r=new V.E(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.p(0,Math.sqrt(r.B(r)))
a.sZ(0,new V.a_(s.a,s.b,s.c))},
$S:5}
F.l4.prototype={
$2:function(a,b){return 0},
$S:21}
F.l5.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.D(s)
u=a.f
t=new V.E(u.a,u.b,u.c)
s=t.p(0,Math.sqrt(t.B(t))).q(0,this.b+s)
a.sZ(0,new V.a_(s.a,s.b,s.c))},
$S:5}
F.l8.prototype={
$1:function(a){return new V.a_(Math.cos(a),Math.sin(a),0)},
$S:17}
F.kQ.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.a_(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:17}
F.kF.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lT(n.$1(o),m)
m=J.lT(n.$1(o+3.141592653589793/p.c),m).L(0,l)
m=new V.E(m.a,m.b,m.c)
u=m.p(0,Math.sqrt(m.B(m)))
n=$.mx
if(n==null){n=new V.E(1,0,0)
$.mx=n
t=n}else t=n
n=u.aE(!J.K(u,t)?V.mz():t)
s=n.p(0,Math.sqrt(n.B(n)))
n=s.aE(u)
t=n.p(0,Math.sqrt(n.B(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.q(0,n*m)
m=s.q(0,q*m)
a.sZ(0,l.v(0,new V.a_(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:5}
F.a9.prototype={
b9:function(){var u=this
if(!u.gba()){C.a.D(u.a.a.d.b,u)
u.a.a.U()}u.c6()
u.c7()
u.hE()},
bp:function(a){this.a=a
C.a.h(a.d.b,this)},
bq:function(a){this.b=a
C.a.h(a.d.c,this)},
dv:function(a){this.c=a
C.a.h(a.d.d,this)},
c6:function(){var u=this.a
if(u!=null){C.a.D(u.d.b,this)
this.a=null}},
c7:function(){var u=this.b
if(u!=null){C.a.D(u.d.c,this)
this.b=null}},
hE:function(){var u=this.c
if(u!=null){C.a.D(u.d.d,this)
this.c=null}},
gba:function(){return this.a==null||this.b==null||this.c==null},
f9:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d7()
if(q!=null)s=s.v(0,q)
if(u!=null)s=s.v(0,u)
if(t!=null)s=s.v(0,t)
if(s.e8())return
return s.p(0,Math.sqrt(s.B(s)))},
fd:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.L(0,q)
r=new V.E(r.a,r.b,r.c)
s=r.p(0,Math.sqrt(r.B(r)))
r=t.L(0,q)
r=new V.E(r.a,r.b,r.c)
r=s.aE(r.p(0,Math.sqrt(r.B(r))))
return r.p(0,Math.sqrt(r.B(r)))},
cf:function(){var u,t=this
if(t.d!=null)return!0
u=t.f9()
if(u==null){u=t.fd()
if(u==null)return!1}t.d=u
t.a.a.U()
return!0},
f8:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d7()
if(q!=null)s=s.v(0,q)
if(u!=null)s=s.v(0,u)
if(t!=null)s=s.v(0,t)
if(s.e8())return
return s.p(0,Math.sqrt(s.B(s)))},
fc:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.O().a){l=d.L(0,g)
l=new V.E(l.a,l.b,l.c)
q=l.p(0,Math.sqrt(l.B(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.L(0,g).q(0,p).v(0,g).L(0,j)
l=new V.E(l.a,l.b,l.c)
q=l.p(0,Math.sqrt(l.B(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.p(0,Math.sqrt(l.B(l)))
l=o.aE(q)
l=l.p(0,Math.sqrt(l.B(l))).aE(o)
q=l.p(0,Math.sqrt(l.B(l)))}return q},
cd:function(){var u,t=this
if(t.e!=null)return!0
u=t.f8()
if(u==null){u=t.fc()
if(u==null)return!1}t.e=u
t.a.a.U()
return!0},
aO:function(a,b){var u=b.a
if(u==null)throw H.c(P.u("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.u("May not replace a face's vertex with a vertex attached to a different shape."))},
giq:function(a){var u=this
if(J.K(u.a,u.b))return!0
if(J.K(u.b,u.c))return!0
if(J.K(u.c,u.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u,t,s=this
if(s.gba())return a+"disposed"
u=a+C.b.ah(J.au(s.a.e),0)+", "+C.b.ah(J.au(s.b.e),0)+", "+C.b.ah(J.au(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
O:function(){return this.G("")}}
F.h2.prototype={}
F.iv.prototype={
aY:function(a,b,c){var u,t=b.a
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
F.bo.prototype={
b9:function(){var u=this
if(!u.gba()){C.a.D(u.a.a.c.b,u)
u.a.a.U()}u.c6()
u.c7()},
bp:function(a){this.a=a
C.a.h(a.c.b,this)},
bq:function(a){this.b=a
C.a.h(a.c.c,this)},
c6:function(){var u=this.a
if(u!=null){C.a.D(u.c.b,this)
this.a=null}},
c7:function(){var u=this.b
if(u!=null){C.a.D(u.c.c,this)
this.b=null}},
gba:function(){return this.a==null||this.b==null},
aO:function(a,b){var u=b.a
if(u==null)throw H.c(P.u("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.u("May not replace a line's vertex with a vertex attached to a different shape."))},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){if(this.gba())return a+"disposed"
return a+C.b.ah(J.au(this.a.e),0)+", "+C.b.ah(J.au(this.b.e),0)},
O:function(){return this.G("")}}
F.hm.prototype={}
F.iZ.prototype={
aY:function(a,b,c){var u,t=b.a
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
F.bM.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ah(J.au(u.e),0)},
O:function(){return this.G("")}}
F.e9.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.Y():u},
aZ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.w()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){r=g[s]
h.a.h(0,r.it())}h.a.w()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bM()
if(n.a==null)H.w(P.u("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.F(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.v()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.nW(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.v()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cB(l,k,i)}g=h.e
if(g!=null)g.aw(0)},
al:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.al()||!1
if(!t.a.al())u=!1
s=t.e
if(s!=null)s.aw(0)
return u},
iJ:function(a,b){var u,t,s,r=this.a.c.length
for(u=0;u<r;++u){t=this.a.c
if(u>=t.length)return H.d(t,u)
s=t[u]
if(b.aY(0,a,s))return s}return},
hH:function(a,b){var u,t,s,r,q,p
H.m(b,"$ib",[F.ao],"$ab")
this.a.h(0,a)
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.v)(b),++t){s=b[t]
for(;r=s.d,r.b.length+r.c.length+r.d.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null||r.c==null)H.w(P.u("May not replace a face's vertex when the point has been disposed."))
if(J.K(q,s)){r.aO(s,a)
q=r.a
if(q!=null){C.a.D(q.d.b,r)
r.a=null}r.a=a
C.a.h(a.d.b,r)
p=1}else p=0
if(J.K(r.b,s)){r.aO(s,a)
q=r.b
if(q!=null){C.a.D(q.d.c,r)
r.b=null}r.b=a
C.a.h(a.d.c,r);++p}if(J.K(r.c,s)){r.aO(s,a)
q=r.c
if(q!=null){C.a.D(q.d.d,r)
r.c=null}r.c=a
C.a.h(a.d.d,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.F(null)}}for(;r=s.c,r.b.length+r.c.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null)H.w(P.u("May not replace a line's vertex when the point has been disposed."))
if(J.K(q,s)){r.aO(s,a)
q=r.a
if(q!=null){C.a.D(q.c.b,r)
r.a=null}r.a=a
C.a.h(a.c.b,r)
p=1}else p=0
if(J.K(r.b,s)){r.aO(s,a)
q=r.b
if(q!=null){C.a.D(q.c.c,r)
r.b=null}r.b=a
C.a.h(a.c.c,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.F(null)}}for(;r=s.b.b,r.length>0;){r=r[0]
q=r.a
if(q==null)H.w(P.u("May not replace a point's vertex when the point has been disposed."))
if(J.K(q,s)){if(a.a==null)H.w(P.u("May not replace a point's vertex with a vertex which is not attached to a shape."))
q=r.a
if(q!=null){C.a.D(q.b.b,r)
r.a=null}r.a=a
C.a.h(a.b.b,r)
p=1}else p=0
if(p>0){r=r.a.a.e
if(r!=null)r.F(null)}}this.a.D(0,s)}},
ea:function(a,b){var u,t,s,r,q,p,o=this,n=o.e
if(n!=null)++n.d
n=o.a.c
u=H.e(n.slice(0),[H.q(n,0)])
for(n=[F.ao];u.length!==0;){t=C.a.giL(u)
C.a.en(u,0)
if(t!=null){s=H.e([],n)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.aY(0,t,q)){C.a.h(s,q)
C.a.en(u,r)}}if(s.length>1){p=b.aZ(s)
if(p!=null){o.hH(p,s)
C.a.h(u,p)}}}}o.a.w()
o.c.bC()
o.d.bC()
o.b.jf()
o.c.cG(new F.iZ())
o.d.cG(new F.iv())
n=o.e
if(n!=null)n.aw(0)},
bt:function(){this.ea(new F.d8(),new F.i_())},
io:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bx()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bw().a)!==0)++s
if((t&$.bv().a)!==0)++s
if((t&$.bT().a)!==0)++s
if((t&$.by().a)!==0)++s
if((t&$.dt().a)!==0)++s
if((t&$.du().a)!==0)++s
if((t&$.cs().a)!==0)++s
if((t&$.bu().a)!==0)++s
r=a3.gcS(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.A
p=H.e(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.e(u,[Z.dB])
for(n=0,m=0;m<s;++m){l=a3.ih(m)
k=l.gcS(l)
C.a.k(o,m,new Z.dB(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.d(u,j)
i=u[j].iW(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.ch(p)),35044)
u.bindBuffer(a0,null)
e=new Z.dC(new Z.es(a0,f),o,a3)
e.sfv(H.e([],[Z.bI]))
if(a.b.b.length!==0){t=P.l
d=H.e([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)}b=Z.lv(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bI(0,d.length,b))}if(a.c.b.length!==0){t=P.l
d=H.e([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.w()
C.a.h(d,c.e)}b=Z.lv(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bI(1,d.length,b))}if(a.d.b.length!==0){t=P.l
d=H.e([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.w()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].c
c.a.a.w()
C.a.h(d,c.e)}b=Z.lv(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bI(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.e([],[P.h])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.G(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.G(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.G(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.G(t))}return C.a.m(s,"\n")},
U:function(){var u=this.e
if(u!=null)u.F(null)},
$iq8:1}
F.io.prototype={
bs:function(a,b,c,d){var u,t=this.a
t.a.h(0,b)
t.a.h(0,c)
t.a.h(0,d)
u=new F.a9()
t=b.a
if(t==null)H.w(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=c.a||t!=d.a)H.w(P.u("May not create a face with vertices attached to different shapes."))
u.bp(b)
u.bq(c)
u.dv(d)
C.a.h(u.a.a.d.b,u)
u.a.a.U()
return u},
ia:function(a){var u,t,s,r,q,p,o
H.m(a,"$ib",[F.ao],"$ab")
u=H.e([],[F.a9])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.d(a,p)
p=a[p]
if(q>=o)return H.d(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.cB(s,p,o))}}return u},
ib:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.ao],"$ab")
u=H.e([],[F.a9])
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
C.a.h(u,F.cB(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cB(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cB(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cB(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
cG:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.aY(0,p,n)){p.b9()
break}}}}},
bC:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.giq(s)
if(t)s.b9()}},
al:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].cf())s=!1
return s},
ce:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].cd())s=!1
return s},
i:function(a){return this.O()},
G:function(a){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].G(a))
return C.a.m(r,"\n")},
O:function(){return this.G("")},
sfp:function(a){this.b=H.m(a,"$ib",[F.a9],"$ab")}}
F.ip.prototype={
gn:function(a){return this.b.length},
cG:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.aY(0,p,n)){p.b9()
break}}}}},
bC:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.K(s.a,s.b)
if(t)s.b9()}},
i:function(a){return this.O()},
G:function(a){var u,t,s=H.e([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
C.a.h(s,t[u].G(a+(""+u+". ")))}return C.a.m(s,"\n")},
O:function(){return this.G("")},
sfw:function(a){this.b=H.m(a,"$ib",[F.bo],"$ab")}}
F.iq.prototype={
gn:function(a){return this.b.length},
jf:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.D(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.F(null)}s=t.a
if(s!=null){C.a.D(s.b.b,t)
t.a=null}}}},
i:function(a){return this.O()},
G:function(a){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].G(a))
return C.a.m(r,"\n")},
O:function(){return this.G("")},
sc3:function(a){this.b=H.m(a,"$ib",[F.bM],"$ab")}}
F.ao.prototype={
cj:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.cd(u.cx,r,o,t,s,q,p,a,n)},
it:function(){return this.cj(null)},
sZ:function(a,b){var u
if(!J.K(this.f,b)){this.f=b
u=this.a
if(u!=null)u.U()}},
scB:function(a){var u
a=a==null?null:a.p(0,Math.sqrt(a.B(a)))
if(!J.K(this.r,a)){this.r=a
u=this.a
if(u!=null)u.U()}},
sdI:function(a){var u
a=a==null?null:a.p(0,Math.sqrt(a.B(a)))
if(!J.K(this.x,a)){this.x=a
u=this.a
if(u!=null)u.U()}},
scJ:function(a){var u
if(!J.K(this.y,a)){this.y=a
u=this.a
if(u!=null)u.U()}},
sax:function(a){var u
if(!J.K(this.z,a)){this.z=a
u=this.a
if(u!=null)u.U()}},
sau:function(a,b){var u
if(!J.K(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.U()}},
seC:function(a,b){var u
if(this.ch!==b){this.ch=b
u=this.a
if(u!=null)u.U()}},
sdG:function(a){var u
if(!J.K(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.U()}},
iW:function(a){var u,t,s=this
if(a.t(0,$.bx())){u=s.f
t=[P.A]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.t(0,$.bw())){u=s.r
t=[P.A]
if(u==null)return H.e([0,1,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.t(0,$.bv())){u=s.x
t=[P.A]
if(u==null)return H.e([0,0,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.t(0,$.bT())){u=s.y
t=[P.A]
if(u==null)return H.e([0,0],t)
else return H.e([u.a,u.b],t)}else if(a.t(0,$.by())){u=s.z
t=[P.A]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.t(0,$.dt())){u=s.Q
t=[P.A]
if(u==null)return H.e([1,1,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.t(0,$.du())){u=s.Q
if(u==null)return H.e([1,1,1,1],[P.A])
else return u.cK(0)}else if(a.t(0,$.cs()))return H.e([s.ch],[P.A])
else if(a.t(0,$.bu())){u=s.cx
t=[P.A]
if(u==null)return H.e([-1,-1,-1,-1],t)
else return H.e([u.a,u.b,u.c,u.d],t)}else return H.e([],[P.A])},
cf:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d7()
t.d.H(0,new F.jw(s))
s=s.a
t.r=s.p(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.U()
s=t.a.e
if(s!=null)s.aw(0)}return!0},
cd:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d7()
t.d.H(0,new F.jv(s))
s=s.a
t.x=s.p(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.U()
s=t.a.e
if(s!=null)s.aw(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u,t,s=this,r="-",q=H.e([],[P.h])
C.a.h(q,C.b.ah(J.au(s.e),0))
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
F.jw.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.v(0,u)}},
$S:7}
F.jv.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.v(0,u)}},
$S:7}
F.jm.prototype={
w:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.u("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.U()
return!0},
ic:function(a,b,c,d,e,f){var u=F.cd(a,null,b,c,d,e,f,null,0)
this.h(0,u)
return u},
gn:function(a){return this.c.length},
D:function(a,b){var u,t
if(b==null)return!1
u=this.a
if(b.a!==u)return!1
if(b.b.b.length===0){t=b.c
if(t.b.length===0&&t.c.length===0){t=b.d
t=t.b.length===0&&t.c.length===0&&t.d.length===0}else t=!1}else t=!1
if(!t)throw H.c(P.u("May not remove a vertex without first making it empty."))
b.a=null
C.a.D(this.c,b)
u.U()
return this.b=!0},
al:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].cf()
return!0},
ce:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].cd()
return!0},
ip:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.p(0,Math.sqrt(p*p+o*o+n*n))
if(!J.K(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}}return!0},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
this.w()
u=H.e([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
O:function(){return this.G("")},
si7:function(a){this.c=H.m(a,"$ib",[F.ao],"$ab")}}
F.jn.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.d(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.d(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.d(t,b)
return t[b]},
H:function(a,b){var u=this
H.o(b,{func:1,ret:-1,args:[F.a9]})
C.a.H(u.b,b)
C.a.H(u.c,new F.jo(u,b))
C.a.H(u.d,new F.jp(u,b))},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
sfq:function(a){this.b=H.m(a,"$ib",[F.a9],"$ab")},
sfs:function(a){this.c=H.m(a,"$ib",[F.a9],"$ab")},
sft:function(a){this.d=H.m(a,"$ib",[F.a9],"$ab")}}
F.jo.prototype={
$1:function(a){H.f(a,"$ia9")
if(!J.K(a.a,this.a))this.b.$1(a)},
$S:7}
F.jp.prototype={
$1:function(a){var u
H.f(a,"$ia9")
u=this.a
if(!J.K(a.a,u)&&!J.K(a.b,u))this.b.$1(a)},
$S:7}
F.jr.prototype={
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
sfz:function(a){this.b=H.m(a,"$ib",[F.bo],"$ab")},
sfA:function(a){this.c=H.m(a,"$ib",[F.bo],"$ab")}}
F.js.prototype={}
F.d8.prototype={
aY:function(a,b,c){return J.K(b.f,c.f)}}
F.jt.prototype={}
F.jq.prototype={
aZ:function(a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null
H.m(a5,"$ib",[F.ao],"$ab")
for(u=a5.length,t=a4,s=t,r=s,q=r,p=q,o=p,n=0,m=0,l=0,k=0,j=0,i=0,h=0;h<u;++h){g=a5[h]
f=g.f
if(f!=null){o=o==null?f:new V.a_(o.a+f.a,o.b+f.b,o.c+f.c);++n}e=g.r
if(e!=null)p=p==null?e:new V.E(p.a+e.a,p.b+e.b,p.c+e.c)
d=g.x
if(d!=null)q=q==null?d:new V.E(q.a+d.a,q.b+d.b,q.c+d.c)
c=g.y
if(c!=null){s=s==null?c:new V.a5(s.a+c.a,s.b+c.b);++l}b=g.z
if(b!=null){t=t==null?b:new V.E(t.a+b.a,t.b+b.b,t.c+b.c);++k}a=g.Q
if(a!=null){a0=a.a
a1=a.b
a2=a.c
a=a.d
if(r==null){a=[a0,a1,a2,a]
r=new V.br(a[0],a[1],a[2],a[3])}else{a=[a0,a1,a2,a]
a0=a[0]
a1=a[1]
a2=a[2]
a=a[3]
r=new V.br(r.a+a0,r.b+a1,r.c+a2,r.d+a)}++m}a=g.ch
if(typeof a!=="number")return H.D(a)
i+=a;++j}a3=F.cd(a4,a4,a4,a4,a4,a4,a4,a4,0)
if(n<=0||o==null)a3.sZ(0,a4)
else a3.sZ(0,o.p(0,n))
if(p==null)a3.scB(a4)
else a3.scB(p.p(0,Math.sqrt(p.B(p))))
if(q==null)a3.sdI(a4)
else a3.sdI(q.p(0,Math.sqrt(q.B(q))))
if(l<=0||s==null)a3.scJ(a4)
else a3.scJ(s.p(0,l))
if(k<=0||t==null)a3.sax(a4)
else a3.sax(t.p(0,k))
if(m<=0||r==null)a3.sau(0,a4)
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
a3.sau(0,new V.aG(a,a0,a1,u))}if(j<=0)a3.seC(0,0)
else a3.seC(0,i/j)
return a3}}
F.i_.prototype={
aZ:function(a){var u,t,s,r
H.m(a,"$ib",[F.ao],"$ab")
u=V.d7()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.E(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.p(0,Math.sqrt(u.B(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.v)(a),++s)a[s].scB(u)
return}}
F.ju.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
sc3:function(a){this.b=H.m(a,"$ib",[F.bM],"$ab")}}
O.dW.prototype={
gA:function(){var u=this.fr
return u==null?this.fr=D.Y():u},
a0:function(a){var u
H.f(a,"$iC")
u=this.fr
if(u!=null)u.F(a)},
bL:function(){return this.a0(null)},
dr:function(a){H.f(a,"$iC")
this.a=null
this.a0(a)},
hK:function(){return this.dr(null)},
fO:function(a,b){var u=V.aq
H.m(b,"$ik",[u],"$ak")
u=new D.c0([u])
u.b=!0
this.a0(u)},
fQ:function(a,b){var u=V.aq
H.m(b,"$ik",[u],"$ak")
u=new D.c1([u])
u.b=!0
this.a0(u)},
d8:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.l,h=new H.a4([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=h.j(0,0)
h.k(0,0,r==null?1:r)}q=H.e([],[A.aQ])
h.H(0,new O.hG(j,q))
C.a.bI(q,new O.hH())
p=new H.a4([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){o=u[s]
r=o.gb8()
n=p.j(0,o.gb8())
p.k(0,r,n==null?1:n)}m=H.e([],[A.aU])
p.H(0,new O.hI(j,m))
C.a.bI(m,new O.hJ())
l=new H.a4([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.v)(i),++s){o=i[s]
t=o.gb8()
r=l.j(0,o.gb8())
l.k(0,t,r==null?1:r)}k=H.e([],[A.aY])
l.H(0,new O.hK(j,k))
C.a.bI(k,new O.hL())
i=C.d.a9(j.e.a.length+3,4)
j.dy.e
return A.o2(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
ad:function(a,b){H.m(a,"$ib",[T.d1],"$ab")
if(b!=null)if(!C.a.V(a,b)){b.a=a.length
C.a.h(a,b)}},
ay:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.az(u,u.length,[H.q(u,0)]);u.C();){t=u.d
t.toString
s=$.jl
if(s==null)s=$.jl=new V.E(0,0,1)
t.a=s
r=$.jk
t.d=r==null?$.jk=new V.E(0,1,0):r
r=$.jj
t.e=r==null?$.jj=new V.E(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bE(s)
r=s.a
p=s.b
o=s.c
t.a=s.p(0,Math.sqrt(r*r+p*p+o*o))
o=q.bE(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.p(0,Math.sqrt(p*p+r*r+s*s))
s=q.bE(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.p(0,Math.sqrt(r*r+p*p+o*o))}}}},
jh:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.d8()
u=b6.fr.j(0,b5.bb)
if(u==null){u=A.o1(b5,b6.a)
t=u.b
if(t.length===0)H.w(P.u("May not cache a shader with no name."))
if(b6.fr.bu(0,t))H.w(P.u('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.k(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.bw
b5=b7.e
if(!(b5 instanceof Z.dC))b5=b7.e=null
if(b5==null||!b5.d.t(0,r)){b5=s.k3
if(b5)b7.d.al()
q=s.k4
if(q){p=b7.d
o=p.e
if(o!=null)++o.d
p.d.ce()
p.a.ce()
p=p.e
if(p!=null)p.aw(0)}p=s.r2
if(p){o=b7.d
n=o.e
if(n!=null)++n.d
o.a.ip()
o=o.e
if(o!=null)o.aw(0)}m=b7.d.io(new Z.jy(b6.a),r)
m.aX($.bx()).e=b4.a.Q.c
if(b5)m.aX($.bw()).e=b4.a.cx.c
if(q)m.aX($.bv()).e=b4.a.ch.c
if(s.r1)m.aX($.bT()).e=b4.a.cy.c
if(p)m.aX($.by()).e=b4.a.db.c
if(s.rx)m.aX($.bu()).e=b4.a.dx.c
b7.e=m}b5=T.d1
l=H.e([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.iF()
if(s.dy){q=b4.a
o=b6.dx
o=o.ga2(o)
q=q.dy
q.toString
q.ao(o.ai(0,!0))}if(s.fr){q=b4.a
o=b6.cx
if(o==null){o=b6.db
o=o.ga2(o)
n=b6.dx
n=b6.cx=o.q(0,n.ga2(n))
o=n}q=q.fr
q.toString
q.ao(o.ai(0,!0))}q=b4.a
o=b6.ch
if(o==null){o=b6.gjd()
n=b6.dx
n=b6.ch=o.q(0,n.ga2(n))
o=n}q=q.fy
q.toString
q.ao(o.ai(0,!0))
if(s.ry){q=b4.a
o=b4.b
q=q.k1
q.toString
q.ao(C.k.ai(o,!0))}if(s.x1){q=b4.a
o=b4.c
q=q.k2
q.toString
q.ao(C.k.ai(o,!0))}if(s.x2){q=b4.a
o=b4.d
q=q.k3
q.toString
q.ao(C.k.ai(o,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.c.bF(q.a,q.d,k)
for(q=[P.A],j=0;j<k;++j){o=b4.a
n=b4.e.a
if(j>=n.length)return H.d(n,j)
n=n[j]
o.toString
H.f(n,"$iaq")
o=o.r1
if(j>=o.length)return H.d(o,j)
o=o[j]
i=new Float32Array(H.ch(H.m(n.ai(0,!0),"$ib",q,"$ab")))
C.c.ez(o.a,o.d,!1,i)}}q=s.a
if(q.a){o=b4.a
n=b4.f.f
o=o.r2
C.c.a_(o.a,o.d,n.a,n.b,n.c)}if(q.c){b4.ad(l,b4.f.e)
q=b4.a
o=b4.f.e
q.ae(q.ry,o)}if(s.id){q=s.b
if(q.a){o=b4.a
n=b4.r.f
o=o.x1
C.c.a_(o.a,o.d,n.a,n.b,n.c)}if(q.c){b4.ad(l,b4.r.e)
q=b4.a
o=b4.r.e
q.ae(q.y1,o)}q=s.c
if(q.a){o=b4.a
n=b4.x.f
o=o.y2
C.c.a_(o.a,o.d,n.a,n.b,n.c)}if(q.c){b4.ad(l,b4.x.e)
q=b4.a
o=b4.x.e
q.ae(q.bw,o)}q=s.d
if(q.a){o=b4.a
n=b4.y.f
o=o.dN
C.c.a_(o.a,o.d,n.a,n.b,n.c)}if(q.c){b4.ad(l,b4.y.e)
q=b4.a
o=b4.y.e
q.ae(q.dO,o)}q=s.e
o=q.a
if(!o)n=q.c
else n=!0
if(n){n=b4.a
h=b4.z.ch
n=n.dR
C.c.a5(n.a,n.d,h)}if(o){o=b4.a
n=b4.z.f
o=o.dP
C.c.a_(o.a,o.d,n.a,n.b,n.c)}if(q.c){b4.ad(l,b4.z.e)
q=b4.a
o=b4.z.e
q.ae(q.dQ,o)}q=s.z
if(q.length>0){o=b6.db
g=o.ga2(o)
o=P.l
f=new H.a4([o,o])
for(o=b4.dx.e,n=o.length,e=0;e<o.length;o.length===n||(0,H.v)(o),++e){d=o[e]
c=f.j(0,0)
if(c==null)c=0
f.k(0,0,c+1)
b=J.dv(b4.a.cm.j(0,0),c)
h=g.bE(d.a)
a=h.a
a0=h.b
a1=h.c
a1=h.p(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
h=a1.b
a1=a1.c
C.c.a_(a0.a,a0.d,a,h,a1)
a1=d.c
h=b.f
C.c.a_(h.a,h.d,a1.a,a1.b,a1.c)}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.v)(q),++e){n=q[e].a
k=f.j(0,n)
if(k==null)k=0
n=b4.a.cl.j(0,n)
C.c.bF(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b6.db
g=o.ga2(o)
o=P.l
a2=new H.a4([o,o])
for(o=b4.dx.f,n=o.length,h=[b5],a=[P.A],e=0;e<o.length;o.length===n||(0,H.v)(o),++e){d=o[e]
a3=d.gb8()
c=a2.j(0,a3)
if(c==null)c=0
a2.k(0,a3,c+1)
b=J.dv(b4.a.co.j(0,a3),c)
a4=g.q(0,d.ga2(d))
a0=d.ga2(d)
a1=$.cS
a0=a0.cL(a1==null?$.cS=new V.a_(0,0,0):a1)
a1=b.b
C.c.a_(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=$.cS
a0=a4.cL(a0==null?$.cS=new V.a_(0,0,0):a0)
a1=b.c
C.c.a_(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gau(d)
a1=b.e
C.c.a_(a1.a,a1.d,a0.a,a0.b,a0.c)
d.gaJ()
a0=a4.e7(0)
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
i=new Float32Array(H.ch(H.m(new V.dX(a1,a5,a6,a7,a8,a9,b0,b1,a0).ai(0,!0),"$ib",a,"$ab")))
C.c.ey(b2.a,b2.d,!1,i)
d.gaJ()
a0=d.gaJ()
H.m(l,"$ib",h,"$ab")
if(!C.a.V(l,a0)){a0.a=l.length
C.a.h(l,a0)}a0=d.gaJ()
a1=a0.gbd(a0)
if(a1){a1=b.f
a1.toString
a5=a0.d
if(a5<6)a1.a.uniform1i(a1.d,0)
else{a0=a0.a
a1.a.uniform1i(a1.d,a0)}}d.gb2()
a0=d.geI()
a1=b.x
a1.toString
a5=a0.giB(a0)
a6=a0.giC(a0)
a7=a0.giD()
a0=a0.giA()
C.c.ex(a1.a,a1.d,a5,a6,a7,a0)
a0=d.gb2()
if(!C.a.V(l,a0)){a0.a=l.length
C.a.h(l,a0)}a0=d.gb2()
a1=a0.gbd(a0)
if(a1){a1=b.r
a1.toString
a5=a0.d
if(a5<6)a1.a.uniform1i(a1.d,0)
else{a0=a0.a
a1.a.uniform1i(a1.d,a0)}}if(d.giG()){a0=d.gii()
a1=b.y
C.c.a5(a1.a,a1.d,a0)
a0=d.gij()
a1=b.z
C.c.a5(a1.a,a1.d,a0)
a0=d.gik()
a1=b.Q
C.c.a5(a1.a,a1.d,a0)}}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.v)(q),++e){n=q[e].a
k=a2.j(0,n)
if(k==null)k=0
n=b4.a.cn.j(0,n)
C.c.bF(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=b6.db
g=o.ga2(o)
o=P.l
b3=new H.a4([o,o])
for(o=b4.dx.r,n=o.length,b5=[b5],e=0;e<o.length;o.length===n||(0,H.v)(o),++e){d=o[e]
a3=d.gb8()
c=b3.j(0,a3)
if(c==null)c=0
b3.k(0,a3,c+1)
b=J.dv(b4.a.cq.j(0,a3),c)
h=d.gjc(d)
a=b.b
C.c.a_(a.a,a.d,h.a,h.b,h.c)
h=d.gjx(d).jJ()
a=b.c
C.c.a_(a.a,a.d,h.a,h.b,h.c)
h=g.cL(d.gjc(d))
a=b.d
C.c.a_(a.a,a.d,h.a,h.b,h.c)
h=d.gau(d)
a=b.e
C.c.a_(a.a,a.d,h.a,h.b,h.c)
d.gaJ()
h=d.gcM()
a=b.f
C.c.a_(a.a,a.d,h.a,h.b,h.c)
h=d.gcH(d)
a=b.r
C.c.a_(a.a,a.d,h.a,h.b,h.c)
h=d.gjK()
a=b.x
C.c.a5(a.a,a.d,h)
h=d.gjL()
a=b.y
C.c.a5(a.a,a.d,h)
d.gaJ()
h=d.gaJ()
H.m(l,"$ib",b5,"$ab")
if(!C.a.V(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gaJ()
a=h.gbd(h)
if(a){a=b.dx
a.toString
a0=h.gbd(h)
if(!a0)a.a.uniform1i(a.d,0)
else{h=h.giQ(h)
a.a.uniform1i(a.d,h)}}d.gb2()
h=d.geI()
a=b.z
a.toString
a0=h.giB(h)
a1=h.giC(h)
a5=h.giD()
h=h.giA()
C.c.ex(a.a,a.d,a0,a1,a5,h)
h=d.gb2()
if(!C.a.V(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gb2()
a=h.gbd(h)
if(a){a=b.dy
a.toString
a0=h.gbd(h)
if(!a0)a.a.uniform1i(a.d,0)
else{h=h.giQ(h)
a.a.uniform1i(a.d,h)}}if(d.gjy()){h=d.gjw()
a=b.Q
C.c.a5(a.a,a.d,h)
h=d.gjv()
a=b.ch
C.c.a5(a.a,a.d,h)}if(d.giG()){h=d.gii()
a=b.cx
C.c.a5(a.a,a.d,h)
h=d.gij()
a=b.cy
C.c.a5(a.a,a.d,h)
h=d.gik()
a=b.db
C.c.a5(a.a,a.d,h)}}for(b5=q.length,e=0;e<q.length;q.length===b5||(0,H.v)(q),++e){o=q[e].a
k=b3.j(0,o)
if(k==null)k=0
o=b4.a.cp.j(0,o)
C.c.bF(o.a,o.d,k)}}}if(s.f.c){b4.ad(l,b4.Q.e)
b5=b4.a
q=b4.Q.e
b5.ae(b5.dS,q)}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.ga2(q).e7(0)}b5=b5.id
b5.toString
b5.ao(q.ai(0,!0))}if(s.cy){b4.ad(l,b4.ch)
b5=b4.a
q=b4.ch
b5.ae(b5.dT,q)
b5=s.r
if(b5.a){q=b4.a
o=b4.cx.f
q=q.dU
C.c.a_(q.a,q.d,o.a,o.b,o.c)}if(b5.c){b4.ad(l,b4.cx.e)
b5=b4.a
q=b4.cx.e
b5.ae(b5.dV,q)}b5=s.x
q=b5.a
if(!q)o=b5.c
else o=!0
if(o){o=b4.a
n=b4.cy.ch
o=o.dW
C.c.a5(o.a,o.d,n)}if(q){q=b4.a
o=b4.cy.f
q=q.dX
C.c.a_(q.a,q.d,o.a,o.b,o.c)}if(b5.c){b4.ad(l,b4.cy.e)
b5=b4.a
q=b4.cy.e
b5.ae(b5.dY,q)}}b5=s.y
q=b5.a
o=!q
if(o)n=b5.c
else n=!0
if(n){if(q){q=b4.a
n=b4.db.f
q=q.dZ
C.c.a5(q.a,q.d,n)}if(b5.c){b4.ad(l,b4.db.e)
q=b4.a
n=b4.db.e
q.ae(q.e_,n)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j){q=l[j]
if(!q.c&&q.d>=6){q.c=!0
p.activeTexture(33984+q.a)
p.bindTexture(34067,q.b)}}q=b7.e
q.cb(b6)
q.b_(b6)
q.js(b6)
if(o)b5=b5.c
else b5=!0
if(b5)p.disable(3042)
for(j=0;j<l.length;++j){b5=l[j]
if(b5.c){b5.c=!1
p.activeTexture(33984+b5.a)
p.bindTexture(34067,null)}}b5=b4.a
b5.toString
p.useProgram(null)
b5.x.iz()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d8().bb},
sfb:function(a){this.e=H.m(a,"$ia6",[V.aq],"$aa6")}}
O.hG.prototype={
$2:function(a,b){H.ad(a)
H.ad(b)
if(typeof b!=="number")return b.v()
return C.a.h(this.b,new A.aQ(a,C.d.a9(b+3,4)*4))},
$S:11}
O.hH.prototype={
$2:function(a,b){H.f(a,"$iaQ")
H.f(b,"$iaQ")
return J.lb(a.a,b.a)},
$S:50}
O.hI.prototype={
$2:function(a,b){H.ad(a)
H.ad(b)
if(typeof b!=="number")return b.v()
return C.a.h(this.b,new A.aU(a,C.d.a9(b+3,4)*4))},
$S:11}
O.hJ.prototype={
$2:function(a,b){H.f(a,"$iaU")
H.f(b,"$iaU")
return J.lb(a.a,b.a)},
$S:51}
O.hK.prototype={
$2:function(a,b){H.ad(a)
H.ad(b)
if(typeof b!=="number")return b.v()
return C.a.h(this.b,new A.aY(a,C.d.a9(b+3,4)*4))},
$S:11}
O.hL.prototype={
$2:function(a,b){H.f(a,"$iaY")
H.f(b,"$iaY")
return J.lb(a.a,b.a)},
$S:52}
O.hA.prototype={
aC:function(){var u,t=this
t.cU()
u=t.f
if(!(Math.abs(u-1)<$.O().a)){t.f=1
u=new D.P(t.b,u,1,[P.A])
u.b=!0
t.a.a0(u)}}}
O.cJ.prototype={
a0:function(a){return this.a.a0(H.f(a,"$iC"))},
bL:function(){return this.a0(null)},
aC:function(){},
c8:function(a){var u,t,s=this
if(!s.c.t(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aC()
u=s.a
u.a=null
u.a0(null)}},
sax:function(a){var u,t=this,s=t.c
if(!s.c)t.c8(new A.al(s.a,!1,!0))
s=t.e
if(s!==a){if(s!=null)s.gA().D(0,t.gbl())
u=t.e
t.e=a
a.gA().h(0,t.gbl())
s=new D.P(t.b+".textureCube",u,t.e,[T.eg])
s.b=!0
t.a.a0(s)}}}
O.hB.prototype={}
O.ba.prototype={
dt:function(a){var u,t,s=this
if(!s.f.t(0,a)){u=s.f
s.f=a
t=new D.P(s.b+".color",u,a,[V.ac])
t.b=!0
s.a.a0(t)}},
aC:function(){this.cU()
this.dt(new V.ac(1,1,1))},
sau:function(a,b){this.c8(new A.al(!0,!1,this.c.c))
this.dt(b)}}
O.hD.prototype={}
O.hE.prototype={
aC:function(){var u,t=this
t.cV()
u=t.ch
if(!(Math.abs(u-1)<$.O().a)){t.ch=1
u=new D.P(t.b+".refraction",u,1,[P.A])
u.b=!0
t.a.a0(u)}}}
O.hF.prototype={
du:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.O().a)){u.ch=a
t=new D.P(u.b+".shininess",t,a,[P.A])
t.b=!0
u.a.a0(t)}},
aC:function(){this.cV()
this.du(100)}}
O.c7.prototype={}
T.d1.prototype={}
T.eg.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.Y():u}}
T.iM.prototype={
e9:function(a){var u,t=this,s=34067,r=a+"/posx.png",q=a+"/posy.png",p=a+"/posz.png",o=a+"/negx.png",n=a+"/negy.png",m=a+"/negz.png",l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.eg()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aQ(u,k,r,34069,!1,!1)
t.aQ(u,k,o,34070,!1,!1)
t.aQ(u,k,q,34071,!1,!1)
t.aQ(u,k,n,34072,!1,!1)
t.aQ(u,k,p,34073,!1,!1)
t.aQ(u,k,m,34074,!1,!1)
return u},
aQ:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.n
W.aa(t,"load",H.o(new T.iN(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
hL:function(a,b,c){var u,t,s,r
b=V.lO(b)
u=V.lO(a.width)
t=V.lO(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.le()
s.width=u
s.height=t
r=H.f(C.j.eE(s,"2d"),"$icw")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.px(r.getImageData(0,0,s.width,s.height))}}}
T.iN.prototype={
$1:function(a){var u=this,t=u.a,s=t.hL(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.c.jn(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.iE()}++t.e},
$S:14}
V.bk.prototype={
aG:function(a,b){return!0},
i:function(a){return"all"},
$iaB:1}
V.aB.prototype={}
V.dV.prototype={
aG:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)if(u[s].aG(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa7:function(a){this.a=H.m(a,"$ib",[V.aB],"$ab")},
$iaB:1}
V.aw.prototype={
aG:function(a,b){return!this.eN(0,b)},
i:function(a){return"!["+this.cT(0)+"]"}}
V.ib.prototype={
aG:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c4(this.a),t=H.c4(this.b)
return u+".."+t},
$iaB:1}
V.il.prototype={
eS:function(a){var u,t
if(a.a.length<=0)throw H.c(P.u("May not create a SetMatcher with zero characters."))
u=new H.a4([P.l,P.R])
for(t=new H.cI(a,a.gn(a),[H.at(a,"z",0)]);t.C();)u.k(0,t.d,!0)
this.shO(u)},
aG:function(a,b){return this.a.bu(0,b)},
i:function(a){var u=this.a
return P.d_(u.ga4(u),0,null)},
shO:function(a){this.a=H.m(a,"$iB",[P.l,P.R],"$aB")},
$iaB:1}
V.cX.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d3(this.a.l(0,b))
r.sa7(H.e([],[V.aB]))
r.c=!1
C.a.h(this.c,r)
return r},
iK:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.aG(0,a))return r}return},
i:function(a){return this.b},
si5:function(a){this.c=H.m(a,"$ib",[V.d3],"$ab")}}
V.ei.prototype={
i:function(a){var u=H.lQ(this.b,"\n","\\n"),t=H.lQ(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d2.prototype={
aI:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.h],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.v)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shF:function(a){var u=P.h
this.c=H.m(a,"$iB",[u,u],"$aB")}}
V.iQ.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cX(this,b)
u.si5(H.e([],[V.d3]))
u.d=null
this.a.k(0,b,u)}return u},
P:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.d2(a)
u=P.h
t.shF(new H.a4([u,u]))
this.b.k(0,a,t)}return t},
ew:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.e([],[V.ei]),k=this.c,j=[P.l],i=H.e([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.E(a,s)
q=k.iK(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.d_(i,0,m)
throw H.c(P.u("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.e([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.d_(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.ei(n==null?o.b:n,p,s)}++s}}},
shW:function(a){this.a=H.m(a,"$iB",[P.h,V.cX],"$aB")},
shZ:function(a){this.b=H.m(a,"$iB",[P.h,V.d2],"$aB")}}
V.d3.prototype={
i:function(a){return this.b.b+": "+this.cT(0)}}
X.dE.prototype={$icN:1}
X.h9.prototype={
gA:function(){var u=this.x
return u==null?this.x=D.Y():u}}
X.e3.prototype={
gA:function(){var u=this.f
return u==null?this.f=D.Y():u},
aN:function(a){var u
H.f(a,"$iC")
u=this.f
if(u!=null)u.F(a)},
f5:function(){return this.aN(null)},
sbe:function(a){var u,t,s=this
if(!J.K(s.b,a)){u=s.b
if(u!=null)u.gA().D(0,s.gcZ())
t=s.b
s.b=a
if(a!=null)a.gA().h(0,s.gcZ())
u=new D.P("mover",t,s.b,[U.ah])
u.b=!0
s.aN(u)}},
$icN:1,
$idE:1}
X.ee.prototype={}
V.bC.prototype={
bk:function(a){this.b=new P.hd(C.Q)
this.c=null
this.sbT(H.e([],[[P.b,W.aH]]))},
N:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.e([],[W.aH]))
u=a.split("\n")
for(l=u.length,t=[W.aH],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.e([],t))
p=document.createElement("div")
p.className="codePart"
H.M(q)
o=m.b.fh(q,0,q.length)
n=o==null?q:o
C.O.eG(p,H.lQ(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gav(m.d),p)}},
ei:function(a,b){var u,t,s,r,q=this
H.m(b,"$ib",[P.h],"$ab")
q.sbT(H.e([],[[P.b,W.aH]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bv():t).ew(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)q.bB(t[r])},
sbT:function(a){this.d=H.m(a,"$ib",[[P.b,W.aH]],"$ab")}}
V.l3.prototype={
$1:function(a){var u
H.f(a,"$ibe")
u=C.e.ev(this.a.giO(),2)
if(u!=="0.00")P.lP(u+" fps")},
$S:54}
V.fQ.prototype={
bB:function(a){var u=this
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
bv:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iR()
a1.c=a1.l(0,r)
u=a1.l(0,r).m(0,q)
t=V.x(new H.t("_"))
C.a.h(u.a,t)
t=V.a0("a","z")
C.a.h(u.a,t)
t=V.a0("A","Z")
C.a.h(u.a,t)
t=a1.l(0,q).m(0,q)
u=V.x(new H.t("_"))
C.a.h(t.a,u)
u=V.a0("0","9")
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
C.a.h(t.a,u)
u=a1.l(0,r).m(0,p)
t=V.a0("0","9")
C.a.h(u.a,t)
t=a1.l(0,p).m(0,p)
u=V.a0("0","9")
C.a.h(t.a,u)
u=a1.l(0,p).m(0,o)
t=V.x(new H.t("."))
C.a.h(u.a,t)
t=a1.l(0,o).m(0,n)
u=V.a0("0","9")
C.a.h(t.a,u)
u=a1.l(0,n).m(0,n)
t=V.a0("0","9")
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
C.a.h(a1.l(0,k).m(0,k).a,new V.bk())
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
C.a.h(a1.l(0,h).m(0,h).a,new V.bk())
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
t=new V.aw()
s=[V.aB]
t.sa7(H.e([],s))
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
t=new V.aw()
t.sa7(H.e([],s))
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
t.aI(0,"Class",H.e(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aI(0,"Type",H.e(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aI(0,"Reserved",H.e(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.ha.prototype={
bB:function(a){var u=this
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
bv:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iR()
e.c=e.l(0,r)
u=e.l(0,r).m(0,q)
t=V.x(new H.t("_"))
C.a.h(u.a,t)
t=V.a0("a","z")
C.a.h(u.a,t)
t=V.a0("A","Z")
C.a.h(u.a,t)
t=e.l(0,q).m(0,q)
u=V.x(new H.t("_"))
C.a.h(t.a,u)
u=V.a0("0","9")
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
C.a.h(t.a,u)
u=e.l(0,r).m(0,p)
t=V.a0("0","9")
C.a.h(u.a,t)
t=e.l(0,p).m(0,p)
u=V.a0("0","9")
C.a.h(t.a,u)
u=e.l(0,p).m(0,o)
t=V.x(new H.t("."))
C.a.h(u.a,t)
t=e.l(0,o).m(0,n)
u=V.a0("0","9")
C.a.h(t.a,u)
u=e.l(0,n).m(0,n)
t=V.a0("0","9")
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
C.a.h(e.l(0,k).m(0,m).a,new V.bk())
t=e.l(0,j).m(0,i)
u=V.x(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,j).m(0,j)
t=new V.aw()
s=[V.aB]
t.sa7(H.e([],s))
C.a.h(u.a,t)
u=V.x(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.x(new H.t("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.aw()
u.sa7(H.e([],s))
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
u.aI(0,"Type",H.e(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aI(0,"Reserved",H.e(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aI(0,"Builtin",H.e(["gl_FragColor","gl_Position"],t))
return e}}
V.hb.prototype={
bB:function(a){var u=this,t="#111"
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
bv:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iR()
l.c=l.l(0,s)
u=l.l(0,s).m(0,r)
t=V.x(new H.t("_"))
C.a.h(u.a,t)
t=V.a0("a","z")
C.a.h(u.a,t)
t=V.a0("A","Z")
C.a.h(u.a,t)
t=l.l(0,r).m(0,r)
u=V.x(new H.t("_"))
C.a.h(t.a,u)
u=V.a0("0","9")
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
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
C.a.h(l.l(0,o).m(0,o).a,new V.bk())
C.a.h(l.l(0,s).m(0,m).a,new V.bk())
u=l.l(0,m).m(0,m)
t=new V.aw()
t.sa7(H.e([],[V.aB]))
C.a.h(u.a,t)
u=V.x(new H.t('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
C.a.h(t.a,u)
u=l.l(0,p)
u.d=u.a.P("Symbol")
u=l.l(0,n)
u.d=u.a.P("String")
u=l.l(0,r)
t=u.a.P(r)
u.d=t
t.aI(0,"Reserved",H.e(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.l(0,q)
t.d=t.a.P(q)
t=l.l(0,m)
t.d=t.a.P(m)
return l}}
V.i5.prototype={
ei:function(a,b){H.m(b,"$ib",[P.h],"$ab")
this.sbT(H.e([],[[P.b,W.aH]]))
this.N(C.a.m(b,"\n"),"#111")},
bB:function(a){},
bv:function(){return}}
V.i9.prototype={
bs:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.o(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.ms().gcF().j(0,H.i(u))
if(t==null)if(d){c.$0()
m.dB(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lV(m.c).h(0,q)
o=W.nR("radio")
o.checked=s
o.name=u
u=W.n
W.aa(o,"change",H.o(new V.ia(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lV(m.c).h(0,r.createElement("br"))},
ar:function(a,b,c){return this.bs(a,b,c,!1)},
dB:function(a){var u,t,s=P.ms(),r=P.h,q=P.nY(s.gcF(),r,r)
q.k(0,this.a,a)
u=s.eo(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.kb([],[]).cN(""),"",t)}}
V.ia.prototype={
$1:function(a){var u=this
if(H.G(u.b.checked)){u.c.$0()
u.a.dB(u.d)}},
$S:14}
V.ir.prototype={
eU:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.aa(q,"scroll",H.o(new V.it(o),{func:1,ret:-1,args:[r]}),!1,r)},
dE:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.h],"$ab")
this.hQ()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ew(C.a.iV(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.v)(s),++q){p=s[q]
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
if(H.pV(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.M(m[1])
l.textContent=H.M(m[0])
t.appendChild(l)}else{k=P.fd(C.y,n,C.h,!1)
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
eD:function(a){var u,t,s,r=new V.fQ("dart")
r.bk("dart")
u=new V.ha("glsl")
u.bk("glsl")
t=new V.hb("html")
t.bk("html")
s=C.a.iM(H.e([r,u,t],[V.bC]),new V.iu(a))
if(s!=null)return s
r=new V.i5("plain")
r.bk("plain")
return r},
dD:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.m(b0,"$ib",[P.h],"$ab")
u=H.e([],[P.l])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.ds(r).a3(r,"+")){C.a.k(b0,s,C.b.ab(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a3(r,"-")){C.a.k(b0,s,C.b.ab(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eD(a8)
q.ei(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.fd(C.y,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lX()
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
if(s>=u.length)return H.d(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.v)(r),++a0)C.a_.ig(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.v)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gW(r);a3.C();)c.appendChild(a3.gK(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
i8:function(a){var u,t,s,r,q,p,o,n="auto"
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
s=H.f(r.insertCell(-1),"$ibd").style
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
o=H.f(r.insertCell(-1),"$ibd")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hQ:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iR()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.x(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.aw()
r=[V.aB]
s.sa7(H.e([],r))
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
s=new V.aw()
s.sa7(H.e([],r))
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
s=new V.aw()
s.sa7(H.e([],r))
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
t=new V.aw()
t.sa7(H.e([],r))
C.a.h(s.a,t)
s=V.x(new H.t("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.x(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.aw()
t.sa7(H.e([],r))
C.a.h(s.a,t)
s=V.x(new H.t("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.bk())
s=u.l(0,i).m(0,i)
t=new V.aw()
t.sa7(H.e([],r))
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
V.it.prototype={
$1:function(a){P.mo(C.o,new V.is(this.a))},
$S:14}
V.is.prototype={
$0:function(){var u=C.e.am(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
V.iu.prototype={
$1:function(a){return H.f(a,"$ibC").a===this.a},
$S:55}
R.kS.prototype={
$0:function(){this.a.saa(0,F.lK(1,null,null,1))},
$S:0}
R.kT.prototype={
$0:function(){this.a.saa(0,F.lK(8,null,null,8))},
$S:0}
R.kU.prototype={
$0:function(){this.a.saa(0,F.mW(!0,40,1))},
$S:0}
R.kV.prototype={
$0:function(){this.a.saa(0,F.mW(!1,40,0))},
$S:0}
R.kW.prototype={
$0:function(){this.a.saa(0,F.pN(10,20))},
$S:0}
R.kX.prototype={
$0:function(){var u=F.im(),t=Math.sqrt(5)/2+0.5,s=F.as(u,new V.E(-1,t,0)),r=F.as(u,new V.E(1,t,0)),q=-t,p=F.as(u,new V.E(-1,q,0)),o=F.as(u,new V.E(1,q,0)),n=F.as(u,new V.E(0,-1,q)),m=F.as(u,new V.E(0,1,q)),l=F.as(u,new V.E(0,-1,t)),k=F.as(u,new V.E(0,1,t)),j=F.as(u,new V.E(t,0,1)),i=F.as(u,new V.E(t,0,-1)),h=F.as(u,new V.E(q,0,1)),g=F.as(u,new V.E(q,0,-1))
F.a3(u,s,g,m,2)
F.a3(u,s,m,r,2)
F.a3(u,s,r,k,2)
F.a3(u,s,k,h,2)
F.a3(u,s,h,g,2)
F.a3(u,r,m,i,2)
F.a3(u,m,g,n,2)
F.a3(u,g,h,p,2)
F.a3(u,h,k,l,2)
F.a3(u,k,r,j,2)
F.a3(u,o,i,n,2)
F.a3(u,o,n,p,2)
F.a3(u,o,p,l,2)
F.a3(u,o,l,j,2)
F.a3(u,o,j,i,2)
F.a3(u,n,i,m,2)
F.a3(u,p,n,g,2)
F.a3(u,l,p,h,2)
F.a3(u,j,l,k,2)
F.a3(u,i,j,r,2)
u.ea(new F.d8(),new F.jq())
this.a.saa(0,u)},
$S:0}
R.kY.prototype={
$0:function(){this.a.saa(0,F.na(6,6))},
$S:0}
R.kZ.prototype={
$0:function(){this.a.saa(0,F.pY())},
$S:0}
R.l_.prototype={
$0:function(){this.a.saa(0,F.pM())},
$S:0}
R.l0.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iC")
u=this.a
t=this.b
s=t.a
r=[P.h]
u.dD("Vertex Shader","glsl",0,H.e((s==null?null:s.c).split("\n"),r))
t=t.a
u.dD("Fragment Shader","glsl",0,H.e((t==null?null:t.d).split("\n"),r))},
$S:10};(function aliases(){var u=J.a.prototype
u.eK=u.i
u=J.dP.prototype
u.eM=u.i
u=P.k.prototype
u.eL=u.bG
u=W.U.prototype
u.bJ=u.af
u=W.eW.prototype
u.eO=u.at
u=O.cJ.prototype
u.cU=u.aC
u=O.ba.prototype
u.cV=u.aC
u=V.dV.prototype
u.eN=u.aG
u.cT=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pr","oA",12)
u(P,"ps","oB",12)
u(P,"pt","oC",12)
t(P,"mV","pp",3)
s(W,"pF",4,null,["$4"],["oE"],28,0)
s(W,"pG",4,null,["$4"],["oF"],28,0)
var m
r(m=E.av.prototype,"geg",0,0,null,["$1","$0"],["eh","j4"],1,0)
r(m,"gee",0,0,null,["$1","$0"],["ef","j3"],1,0)
r(m,"gec",0,0,null,["$1","$0"],["ed","j0"],1,0)
q(m,"giZ","j_",9)
q(m,"gj1","j2",9)
r(m=E.eh.prototype,"gcW",0,0,null,["$1","$0"],["cY","cX"],1,0)
p(m,"gjj","ep",3)
o(m=X.eo.prototype,"gh2","h3",16)
o(m,"gfR","fS",16)
o(m,"gfX","fY",4)
o(m,"gh6","h7",31)
o(m,"gh4","h5",31)
o(m,"gha","hb",4)
o(m,"ghe","hf",4)
o(m,"gh0","h1",4)
o(m,"ghc","hd",4)
o(m,"gfZ","h_",4)
o(m,"ghg","hh",36)
o(m,"ghi","hj",16)
o(m,"ghv","hw",15)
o(m,"ghr","hs",15)
o(m,"ght","hu",15)
r(D.bE.prototype,"geX",0,0,null,["$1","$0"],["az","eY"],1,0)
r(m=D.dR.prototype,"gdk",0,0,null,["$1","$0"],["dl","h8"],1,0)
o(m,"ghl","hm",38)
q(m,"gfL","fM",26)
q(m,"ghp","hq",26)
n(V.X.prototype,"gn","bc",13)
n(V.E.prototype,"gn","bc",13)
n(V.br.prototype,"gn","bc",13)
r(m=U.cE.prototype,"gaR",0,0,null,["$1","$0"],["S","a8"],1,0)
q(m,"gfJ","fK",22)
q(m,"ghn","ho",22)
r(m=U.ep.prototype,"gaR",0,0,null,["$1","$0"],["S","a8"],1,0)
o(m,"gbW","bX",2)
o(m,"gbY","bZ",2)
o(m,"gc_","c0",2)
r(m=U.eq.prototype,"gaR",0,0,null,["$1","$0"],["S","a8"],1,0)
o(m,"gbW","bX",2)
o(m,"gbY","bZ",2)
o(m,"gc_","c0",2)
o(m,"gfC","fD",2)
o(m,"gfE","fF",2)
o(m,"gi3","i4",2)
o(m,"gi1","i2",2)
o(m,"gi_","i0",2)
o(U.er.prototype,"gfH","fI",2)
r(m=M.dJ.prototype,"gap",0,0,null,["$1","$0"],["aA","f_"],1,0)
q(m,"gfT","fU",9)
q(m,"gfV","fW",9)
r(m=O.dW.prototype,"gbl",0,0,null,["$1","$0"],["a0","bL"],1,0)
r(m,"ghJ",0,0,null,["$1","$0"],["dr","hK"],1,0)
q(m,"gfN","fO",33)
q(m,"gfP","fQ",33)
r(O.cJ.prototype,"gbl",0,0,null,["$1","$0"],["a0","bL"],1,0)
r(X.e3.prototype,"gcZ",0,0,null,["$1","$0"],["aN","f5"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.V,null)
s(P.V,[H.ll,J.a,J.az,P.eJ,P.k,H.cI,P.b6,H.bZ,H.d6,H.fJ,H.iW,P.bG,H.cx,H.f0,P.af,H.hn,H.hp,H.hi,P.f6,P.bi,P.aN,P.et,P.iC,P.cZ,P.iD,P.be,P.ap,P.kr,P.k5,P.ce,P.eI,P.z,P.kj,P.hv,P.bX,P.he,P.kp,P.ko,P.R,P.aA,P.ab,P.bF,P.i3,P.ec,P.eB,P.h8,P.bH,P.b,P.B,P.N,P.ax,P.h,P.a8,P.cf,P.ja,P.k8,W.fM,W.bQ,W.I,W.e1,W.eW,W.ke,W.dL,W.aD,W.k4,W.fe,P.ka,P.fb,P.k_,P.Q,O.a6,O.cK,E.fD,E.av,E.ic,E.eh,Z.es,Z.jy,Z.dC,Z.bI,Z.bs,D.fG,D.bY,D.C,X.dD,X.dQ,X.hk,X.hs,X.aC,X.hS,X.iS,X.eo,D.bE,D.ae,D.e4,D.eb,V.ac,V.aG,V.h_,V.dX,V.aq,V.a5,V.a_,V.bN,V.e7,V.X,V.E,V.br,U.ep,U.eq,U.er,M.dJ,A.dz,A.fw,A.al,A.aQ,A.aU,A.aY,A.hC,A.c8,A.c9,A.cb,A.ek,A.j4,F.a9,F.h2,F.bo,F.hm,F.bM,F.e9,F.io,F.ip,F.iq,F.ao,F.jm,F.jn,F.jr,F.js,F.jt,F.ju,O.c7,O.cJ,O.hD,T.iM,V.bk,V.aB,V.dV,V.ib,V.il,V.cX,V.ei,V.d2,V.iQ,X.dE,X.ee,X.e3,V.bC,V.i9,V.ir])
s(J.a,[J.hh,J.dO,J.dP,J.b7,J.cH,J.bJ,H.cO,H.bL,W.j,W.ft,W.bV,W.cw,W.b4,W.b5,W.W,W.ev,W.fR,W.fS,W.ex,W.dI,W.ez,W.fU,W.n,W.eC,W.aR,W.hc,W.eE,W.bn,W.dT,W.hM,W.eK,W.eL,W.aS,W.eM,W.eP,W.aT,W.eT,W.eV,W.aW,W.eX,W.aX,W.f1,W.aJ,W.f4,W.iP,W.b_,W.f7,W.iU,W.jf,W.ff,W.fh,W.fj,W.fl,W.fn,P.b9,P.eG,P.bc,P.eR,P.i8,P.f2,P.bf,P.f9,P.fx,P.eu,P.dA,P.e5,P.c6,P.e8,P.ef,P.el,P.eZ])
s(J.dP,[J.i4,J.cc,J.bK])
t(J.lk,J.b7)
s(J.cH,[J.dN,J.dM])
t(P.hr,P.eJ)
s(P.hr,[H.em,W.jG,W.ar,P.h4])
t(H.t,H.em)
s(P.k,[H.fX,H.hw,H.d9])
s(H.fX,[H.c2,H.ho])
s(P.b6,[H.hx,H.jz])
t(H.hy,H.c2)
t(H.fK,H.fJ)
s(P.bG,[H.i0,H.hj,H.j8,H.iY,H.fF,H.ij,P.fv,P.e2,P.aP,P.j9,P.j6,P.cY,P.fI,P.fP])
s(H.cx,[H.l9,H.iJ,H.kM,H.kN,H.kO,P.jC,P.jB,P.jD,P.jE,P.ki,P.kh,P.jN,P.jR,P.jO,P.jP,P.jQ,P.jU,P.jV,P.jT,P.jS,P.iE,P.iF,P.kB,P.k2,P.k1,P.k3,P.hq,P.hu,P.fV,P.fW,P.je,P.jb,P.jc,P.jd,P.kk,P.kl,P.kn,P.km,P.kv,P.ku,P.kw,P.kx,W.fY,W.hO,W.hQ,W.ii,W.iB,W.jM,W.hZ,W.hY,W.k6,W.k7,W.kg,W.kq,P.kc,P.kD,P.h5,P.h6,P.fz,E.id,E.ie,E.ig,E.iO,D.h0,D.h1,F.ks,F.kE,F.kG,F.kH,F.kI,F.kR,F.l4,F.l5,F.l8,F.kQ,F.kF,F.jw,F.jv,F.jo,F.jp,O.hG,O.hH,O.hI,O.hJ,O.hK,O.hL,T.iN,V.l3,V.ia,V.it,V.is,V.iu,R.kS,R.kT,R.kU,R.kV,R.kW,R.kX,R.kY,R.kZ,R.l_,R.l0])
s(H.iJ,[H.iz,H.cu])
t(H.jA,P.fv)
t(P.ht,P.af)
s(P.ht,[H.a4,W.jF])
t(H.dZ,H.bL)
s(H.dZ,[H.de,H.dg])
t(H.df,H.de)
t(H.cP,H.df)
t(H.dh,H.dg)
t(H.e_,H.dh)
s(H.e_,[H.hT,H.hU,H.hV,H.hW,H.hX,H.e0,H.cQ])
t(P.k0,P.kr)
t(P.jZ,P.k5)
t(P.fc,P.hv)
t(P.en,P.fc)
s(P.bX,[P.fB,P.fZ])
t(P.bD,P.iD)
s(P.bD,[P.fC,P.hd,P.ji,P.jh])
t(P.jg,P.fZ)
s(P.ab,[P.A,P.l])
s(P.aP,[P.c5,P.hf])
t(P.jI,P.cf)
s(W.j,[W.H,W.h3,W.cL,W.aV,W.di,W.aZ,W.aK,W.dk,W.jx,W.da,P.fA,P.bU])
s(W.H,[W.U,W.bB,W.db])
s(W.U,[W.y,P.p])
s(W.y,[W.dx,W.fu,W.ct,W.bA,W.bW,W.aH,W.h7,W.cF,W.cG,W.ik,W.bd,W.ed,W.iH,W.iI,W.d0])
s(W.b4,[W.cy,W.fN,W.fO])
t(W.fL,W.b5)
t(W.cz,W.ev)
t(W.ey,W.ex)
t(W.dH,W.ey)
t(W.eA,W.ez)
t(W.fT,W.eA)
t(W.aI,W.bV)
t(W.eD,W.eC)
t(W.cC,W.eD)
t(W.eF,W.eE)
t(W.c_,W.eF)
t(W.bP,W.n)
s(W.bP,[W.b8,W.ag,W.b0])
t(W.hN,W.eK)
t(W.hP,W.eL)
t(W.eN,W.eM)
t(W.hR,W.eN)
t(W.eQ,W.eP)
t(W.cR,W.eQ)
t(W.eU,W.eT)
t(W.i6,W.eU)
t(W.ih,W.eV)
t(W.dj,W.di)
t(W.iw,W.dj)
t(W.eY,W.eX)
t(W.ix,W.eY)
t(W.iA,W.f1)
t(W.f5,W.f4)
t(W.iK,W.f5)
t(W.dl,W.dk)
t(W.iL,W.dl)
t(W.f8,W.f7)
t(W.iT,W.f8)
t(W.bh,W.ag)
t(W.fg,W.ff)
t(W.jH,W.fg)
t(W.ew,W.dI)
t(W.fi,W.fh)
t(W.jW,W.fi)
t(W.fk,W.fj)
t(W.eO,W.fk)
t(W.fm,W.fl)
t(W.k9,W.fm)
t(W.fo,W.fn)
t(W.kd,W.fo)
t(W.jJ,W.jF)
t(W.jK,P.iC)
t(W.lw,W.jK)
t(W.jL,P.cZ)
t(W.kf,W.eW)
t(P.kb,P.ka)
t(P.am,P.k_)
t(P.eH,P.eG)
t(P.hl,P.eH)
t(P.eS,P.eR)
t(P.i1,P.eS)
t(P.cV,P.p)
t(P.f3,P.f2)
t(P.iG,P.f3)
t(P.fa,P.f9)
t(P.iV,P.fa)
t(P.fy,P.eu)
t(P.i2,P.bU)
t(P.f_,P.eZ)
t(P.iy,P.f_)
s(E.fD,[Z.dB,A.cW,T.d1])
s(D.C,[D.c0,D.c1,D.P,X.i7])
s(X.i7,[X.dU,X.bp,X.cM,X.ej])
s(O.a6,[D.dR,U.cE])
s(D.fG,[U.fH,U.ah])
t(U.dF,U.ah)
t(A.hz,A.cW)
s(A.ek,[A.aL,A.j1,A.j2,A.j3,A.j_,A.aj,A.j0,A.a1,A.d4,A.j5,A.d5,A.aE,A.ca,A.an])
t(F.iv,F.h2)
t(F.iZ,F.hm)
t(F.d8,F.js)
s(F.jt,[F.jq,F.i_])
t(O.dW,O.c7)
s(O.cJ,[O.hA,O.hB,O.ba])
s(O.ba,[O.hE,O.hF])
t(T.eg,T.d1)
s(V.dV,[V.aw,V.d3])
t(X.h9,X.ee)
s(V.bC,[V.fQ,V.ha,V.hb,V.i5])
u(H.em,H.d6)
u(H.de,P.z)
u(H.df,H.bZ)
u(H.dg,P.z)
u(H.dh,H.bZ)
u(P.eJ,P.z)
u(P.fc,P.kj)
u(W.ev,W.fM)
u(W.ex,P.z)
u(W.ey,W.I)
u(W.ez,P.z)
u(W.eA,W.I)
u(W.eC,P.z)
u(W.eD,W.I)
u(W.eE,P.z)
u(W.eF,W.I)
u(W.eK,P.af)
u(W.eL,P.af)
u(W.eM,P.z)
u(W.eN,W.I)
u(W.eP,P.z)
u(W.eQ,W.I)
u(W.eT,P.z)
u(W.eU,W.I)
u(W.eV,P.af)
u(W.di,P.z)
u(W.dj,W.I)
u(W.eX,P.z)
u(W.eY,W.I)
u(W.f1,P.af)
u(W.f4,P.z)
u(W.f5,W.I)
u(W.dk,P.z)
u(W.dl,W.I)
u(W.f7,P.z)
u(W.f8,W.I)
u(W.ff,P.z)
u(W.fg,W.I)
u(W.fh,P.z)
u(W.fi,W.I)
u(W.fj,P.z)
u(W.fk,W.I)
u(W.fl,P.z)
u(W.fm,W.I)
u(W.fn,P.z)
u(W.fo,W.I)
u(P.eG,P.z)
u(P.eH,W.I)
u(P.eR,P.z)
u(P.eS,W.I)
u(P.f2,P.z)
u(P.f3,W.I)
u(P.f9,P.z)
u(P.fa,W.I)
u(P.eu,P.af)
u(P.eZ,P.z)
u(P.f_,W.I)})()
var v={mangledGlobalNames:{l:"int",A:"double",ab:"num",h:"String",R:"bool",N:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.N},{func:1,ret:-1,opt:[D.C]},{func:1,ret:-1,args:[D.C]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ag]},{func:1,ret:P.N,args:[F.ao,P.A,P.A]},{func:1,ret:P.N,args:[,,]},{func:1,ret:P.N,args:[F.a9]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[P.l,[P.k,E.av]]},{func:1,ret:P.N,args:[D.C]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.A},{func:1,ret:P.N,args:[W.n]},{func:1,ret:-1,args:[W.b0]},{func:1,ret:-1,args:[W.n]},{func:1,ret:V.a_,args:[P.A]},{func:1,ret:P.N,args:[,]},{func:1,ret:P.h,args:[P.l]},{func:1,ret:P.A,args:[P.A]},{func:1,ret:P.A,args:[P.A,P.A]},{func:1,ret:-1,args:[P.l,[P.k,U.ah]]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,args:[,]},{func:1,ret:-1,args:[P.l,[P.k,D.ae]]},{func:1,ret:P.R,args:[W.H]},{func:1,ret:P.R,args:[W.U,P.h,P.h,W.bQ]},{func:1,ret:P.R,args:[W.aD]},{func:1,ret:P.R,args:[P.h]},{func:1,ret:-1,args:[W.b8]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.C]}]},{func:1,ret:-1,args:[P.l,[P.k,V.aq]]},{func:1,ret:W.U,args:[W.H]},{func:1,ret:-1,args:[W.H,W.H]},{func:1,ret:-1,args:[W.bh]},{func:1,args:[W.n]},{func:1,ret:P.R,args:[[P.k,D.ae]]},{func:1,ret:P.Q,args:[,,]},{func:1,ret:P.N,args:[P.h,,]},{func:1,ret:P.N,args:[P.h]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.l]},{func:1,ret:[P.B,P.h,P.h],args:[[P.B,P.h,P.h],P.h]},{func:1,ret:[P.aN,,],args:[,]},{func:1,ret:P.N,args:[,],opt:[P.ax]},{func:1,ret:P.Q,args:[P.l]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,ret:P.l,args:[A.aQ,A.aQ]},{func:1,ret:P.l,args:[A.aU,A.aU]},{func:1,ret:P.l,args:[A.aY,A.aY]},{func:1,args:[P.h]},{func:1,ret:P.N,args:[P.be]},{func:1,ret:P.R,args:[V.bC]},{func:1,args:[,P.h]},{func:1,ret:P.N,args:[P.ab]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bA.prototype
C.j=W.bW.prototype
C.O=W.aH.prototype
C.R=J.a.prototype
C.a=J.b7.prototype
C.S=J.dM.prototype
C.d=J.dN.prototype
C.k=J.dO.prototype
C.e=J.cH.prototype
C.b=J.bJ.prototype
C.T=J.bK.prototype
C.Z=W.cR.prototype
C.B=J.i4.prototype
C.c=P.c6.prototype
C.a_=W.bd.prototype
C.C=W.ed.prototype
C.r=J.cc.prototype
C.D=W.bh.prototype
C.E=W.da.prototype
C.a0=new P.fC()
C.F=new P.fB()
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

C.M=new P.i3()
C.h=new P.jg()
C.N=new P.ji()
C.f=new P.k0()
C.o=new P.bF(0)
C.P=new P.bF(5e6)
C.Q=new P.he("element",!1,!1,!1)
C.w=H.e(u([127,2047,65535,1114111]),[P.l])
C.l=H.e(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.U=H.e(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.m=H.e(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.n=H.e(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.V=H.e(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.x=H.e(u([]),[P.h])
C.W=H.e(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.y=H.e(u([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.i=H.e(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.z=H.e(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.X=H.e(u([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.A=H.e(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.p=H.e(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.q=H.e(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.Y=new H.fK(0,{},C.x,[P.h,P.h])})();(function staticFields(){$.b3=0
$.cv=null
$.lZ=null
$.lC=!1
$.n1=null
$.mT=null
$.n8=null
$.kJ=null
$.kP=null
$.lM=null
$.ci=null
$.dp=null
$.dq=null
$.lD=!1
$.a2=C.f
$.ay=[]
$.bm=null
$.lh=null
$.m4=null
$.m3=null
$.dd=P.ln(P.h,P.bH)
$.ma=null
$.me=null
$.cS=null
$.mj=null
$.mv=null
$.my=null
$.mx=null
$.jj=null
$.jk=null
$.jl=null
$.mw=null
$.mA=null
$.md=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"q4","nd",function(){return H.n0("_$dart_dartClosure")})
u($,"q5","lR",function(){return H.n0("_$dart_js")})
u($,"qb","ne",function(){return H.bg(H.iX({
toString:function(){return"$receiver$"}}))})
u($,"qc","nf",function(){return H.bg(H.iX({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"qd","ng",function(){return H.bg(H.iX(null))})
u($,"qe","nh",function(){return H.bg(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qh","nk",function(){return H.bg(H.iX(void 0))})
u($,"qi","nl",function(){return H.bg(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qg","nj",function(){return H.bg(H.mq(null))})
u($,"qf","ni",function(){return H.bg(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qk","nn",function(){return H.bg(H.mq(void 0))})
u($,"qj","nm",function(){return H.bg(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qB","lS",function(){return P.oz()})
u($,"qn","no",function(){return P.ov()})
u($,"qC","ns",function(){return H.o3(H.ch(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"qE","nu",function(){return P.oh("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qF","nv",function(){return P.oZ()})
u($,"qD","nt",function(){return P.m7(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"qu","nr",function(){return Z.aM(0)})
u($,"qo","np",function(){return Z.aM(511)})
u($,"qw","bx",function(){return Z.aM(1)})
u($,"qv","bw",function(){return Z.aM(2)})
u($,"qq","bv",function(){return Z.aM(4)})
u($,"qx","bT",function(){return Z.aM(8)})
u($,"qy","by",function(){return Z.aM(16)})
u($,"qr","dt",function(){return Z.aM(32)})
u($,"qs","du",function(){return Z.aM(64)})
u($,"qt","nq",function(){return Z.aM(96)})
u($,"qz","cs",function(){return Z.aM(128)})
u($,"qp","bu",function(){return Z.aM(256)})
u($,"q3","nc",function(){return new V.h_(1e-9)})
u($,"q2","O",function(){return $.nc()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cO,DataView:H.bL,ArrayBufferView:H.bL,Float32Array:H.cP,Float64Array:H.cP,Int16Array:H.hT,Int32Array:H.hU,Int8Array:H.hV,Uint16Array:H.hW,Uint32Array:H.hX,Uint8ClampedArray:H.e0,CanvasPixelArray:H.e0,Uint8Array:H.cQ,HTMLAudioElement:W.y,HTMLBRElement:W.y,HTMLButtonElement:W.y,HTMLContentElement:W.y,HTMLDListElement:W.y,HTMLDataElement:W.y,HTMLDataListElement:W.y,HTMLDetailsElement:W.y,HTMLDialogElement:W.y,HTMLEmbedElement:W.y,HTMLFieldSetElement:W.y,HTMLHRElement:W.y,HTMLHeadElement:W.y,HTMLHeadingElement:W.y,HTMLHtmlElement:W.y,HTMLIFrameElement:W.y,HTMLLIElement:W.y,HTMLLabelElement:W.y,HTMLLegendElement:W.y,HTMLLinkElement:W.y,HTMLMapElement:W.y,HTMLMediaElement:W.y,HTMLMenuElement:W.y,HTMLMetaElement:W.y,HTMLMeterElement:W.y,HTMLModElement:W.y,HTMLOListElement:W.y,HTMLObjectElement:W.y,HTMLOptGroupElement:W.y,HTMLOptionElement:W.y,HTMLOutputElement:W.y,HTMLParagraphElement:W.y,HTMLParamElement:W.y,HTMLPictureElement:W.y,HTMLPreElement:W.y,HTMLProgressElement:W.y,HTMLQuoteElement:W.y,HTMLScriptElement:W.y,HTMLShadowElement:W.y,HTMLSlotElement:W.y,HTMLSourceElement:W.y,HTMLSpanElement:W.y,HTMLStyleElement:W.y,HTMLTableCaptionElement:W.y,HTMLTableColElement:W.y,HTMLTextAreaElement:W.y,HTMLTimeElement:W.y,HTMLTitleElement:W.y,HTMLTrackElement:W.y,HTMLUListElement:W.y,HTMLUnknownElement:W.y,HTMLVideoElement:W.y,HTMLDirectoryElement:W.y,HTMLFontElement:W.y,HTMLFrameElement:W.y,HTMLFrameSetElement:W.y,HTMLMarqueeElement:W.y,HTMLElement:W.y,AccessibleNodeList:W.ft,HTMLAnchorElement:W.dx,HTMLAreaElement:W.fu,HTMLBaseElement:W.ct,Blob:W.bV,HTMLBodyElement:W.bA,HTMLCanvasElement:W.bW,CanvasRenderingContext2D:W.cw,CDATASection:W.bB,CharacterData:W.bB,Comment:W.bB,ProcessingInstruction:W.bB,Text:W.bB,CSSNumericValue:W.cy,CSSUnitValue:W.cy,CSSPerspective:W.fL,CSSCharsetRule:W.W,CSSConditionRule:W.W,CSSFontFaceRule:W.W,CSSGroupingRule:W.W,CSSImportRule:W.W,CSSKeyframeRule:W.W,MozCSSKeyframeRule:W.W,WebKitCSSKeyframeRule:W.W,CSSKeyframesRule:W.W,MozCSSKeyframesRule:W.W,WebKitCSSKeyframesRule:W.W,CSSMediaRule:W.W,CSSNamespaceRule:W.W,CSSPageRule:W.W,CSSRule:W.W,CSSStyleRule:W.W,CSSSupportsRule:W.W,CSSViewportRule:W.W,CSSStyleDeclaration:W.cz,MSStyleCSSProperties:W.cz,CSS2Properties:W.cz,CSSImageValue:W.b4,CSSKeywordValue:W.b4,CSSPositionValue:W.b4,CSSResourceValue:W.b4,CSSURLImageValue:W.b4,CSSStyleValue:W.b4,CSSMatrixComponent:W.b5,CSSRotation:W.b5,CSSScale:W.b5,CSSSkew:W.b5,CSSTranslation:W.b5,CSSTransformComponent:W.b5,CSSTransformValue:W.fN,CSSUnparsedValue:W.fO,DataTransferItemList:W.fR,HTMLDivElement:W.aH,DOMException:W.fS,ClientRectList:W.dH,DOMRectList:W.dH,DOMRectReadOnly:W.dI,DOMStringList:W.fT,DOMTokenList:W.fU,Element:W.U,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aI,FileList:W.cC,FileWriter:W.h3,HTMLFormElement:W.h7,Gamepad:W.aR,History:W.hc,HTMLCollection:W.c_,HTMLFormControlsCollection:W.c_,HTMLOptionsCollection:W.c_,ImageData:W.bn,HTMLImageElement:W.cF,HTMLInputElement:W.cG,KeyboardEvent:W.b8,Location:W.dT,MediaList:W.hM,MessagePort:W.cL,MIDIInputMap:W.hN,MIDIOutputMap:W.hP,MimeType:W.aS,MimeTypeArray:W.hR,PointerEvent:W.ag,MouseEvent:W.ag,DragEvent:W.ag,Document:W.H,DocumentFragment:W.H,HTMLDocument:W.H,ShadowRoot:W.H,XMLDocument:W.H,DocumentType:W.H,Node:W.H,NodeList:W.cR,RadioNodeList:W.cR,Plugin:W.aT,PluginArray:W.i6,RTCStatsReport:W.ih,HTMLSelectElement:W.ik,SourceBuffer:W.aV,SourceBufferList:W.iw,SpeechGrammar:W.aW,SpeechGrammarList:W.ix,SpeechRecognitionResult:W.aX,Storage:W.iA,CSSStyleSheet:W.aJ,StyleSheet:W.aJ,HTMLTableCellElement:W.bd,HTMLTableDataCellElement:W.bd,HTMLTableHeaderCellElement:W.bd,HTMLTableElement:W.ed,HTMLTableRowElement:W.iH,HTMLTableSectionElement:W.iI,HTMLTemplateElement:W.d0,TextTrack:W.aZ,TextTrackCue:W.aK,VTTCue:W.aK,TextTrackCueList:W.iK,TextTrackList:W.iL,TimeRanges:W.iP,Touch:W.b_,TouchEvent:W.b0,TouchList:W.iT,TrackDefaultList:W.iU,CompositionEvent:W.bP,FocusEvent:W.bP,TextEvent:W.bP,UIEvent:W.bP,URL:W.jf,VideoTrackList:W.jx,WheelEvent:W.bh,Window:W.da,DOMWindow:W.da,Attr:W.db,CSSRuleList:W.jH,ClientRect:W.ew,DOMRect:W.ew,GamepadList:W.jW,NamedNodeMap:W.eO,MozNamedAttrMap:W.eO,SpeechRecognitionResultList:W.k9,StyleSheetList:W.kd,SVGLength:P.b9,SVGLengthList:P.hl,SVGNumber:P.bc,SVGNumberList:P.i1,SVGPointList:P.i8,SVGScriptElement:P.cV,SVGStringList:P.iG,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bf,SVGTransformList:P.iV,AudioBuffer:P.fx,AudioParamMap:P.fy,AudioTrackList:P.fA,AudioContext:P.bU,webkitAudioContext:P.bU,BaseAudioContext:P.bU,OfflineAudioContext:P.i2,WebGLBuffer:P.dA,WebGLProgram:P.e5,WebGL2RenderingContext:P.c6,WebGLShader:P.e8,WebGLTexture:P.ef,WebGLUniformLocation:P.el,SQLResultSetRowList:P.iy})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dZ.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.e_.$nativeSuperclassTag="ArrayBufferView"
W.di.$nativeSuperclassTag="EventTarget"
W.dj.$nativeSuperclassTag="EventTarget"
W.dk.$nativeSuperclassTag="EventTarget"
W.dl.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(R.n4,[])
else R.n4([])})})()
//# sourceMappingURL=test.dart.js.map
