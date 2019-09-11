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
a[c]=function(){a[c]=function(){H.qb(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lV(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={ly:function ly(){},
kN:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
hk:function(){return new P.cX("No element")},
o9:function(){return new P.cX("Too many elements")},
ed:function(a,b,c,d,e){if(c-b<=32)H.oD(a,b,c,d,e)
else H.oC(a,b,c,d,e)},
oD:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.e(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.e(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a7()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.e(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
oC:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.af(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.af(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.a7()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a7()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a7()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a7()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a7()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a7()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a7()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a7()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a7()
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
if(J.W(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.e(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.R()
if(k<0){if(m!==o){if(o>=a2.length)return H.e(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.e(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a7()
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
if(typeof f!=="number")return f.a7()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.e(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a7()
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
H.ed(a2,a3,o-2,a5,a6)
H.ed(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.e(a2,o)
if(!J.W(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.e(a2,n)
if(!J.W(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.e(a2,m)
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
break}}}H.ed(a2,o,n,a5,a6)}else H.ed(a2,o,n,a5,a6)},
r:function r(a){this.a=a},
h_:function h_(){},
c2:function c2(){},
cJ:function cJ(a,b,c){var _=this
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
hC:function hC(a,b,c){this.a=a
this.b=b
this.$ti=c},
d9:function d9(a,b,c){this.a=a
this.b=b
this.$ti=c},
jB:function jB(a,b,c){this.a=a
this.b=b
this.$ti=c},
c0:function c0(){},
d7:function d7(){},
en:function en(){},
o2:function(){throw H.d(P.J("Cannot modify unmodifiable Map"))},
cr:function(a){var u,t=H.qc(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
pU:function(a){return v.types[H.ad(a)]},
q0:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.R(a).$iL},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ar(a)
if(typeof u!=="string")throw H.d(H.b1(a))
return u},
cS:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
ou:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.e(p,3)
u=H.M(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.aj(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.F(s,q)|32)>t)return}return parseInt(a,b)},
cT:function(a){return H.ol(a)+H.lR(H.bS(a),0,null)},
ol:function(a){var u,t,s,r,q,p,o,n=J.R(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$icd){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cr(t.length>1&&C.b.F(t,0)===36?C.b.ah(t,1):t)},
om:function(){if(!!self.location)return self.location.href
return},
mv:function(a){var u,t,s,r,q=J.aE(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
ov:function(a){var u,t,s,r=H.c([],[P.l])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.b1(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.aV(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.d(H.b1(s))}return H.mv(r)},
mw:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.b1(s))
if(s<0)throw H.d(H.b1(s))
if(s>65535)return H.ov(a)}return H.mv(a)},
ow:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c6:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aV(u,10))>>>0,56320|u&1023)}}throw H.d(P.aj(a,0,1114111,null,null))},
c5:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ot:function(a){var u=H.c5(a).getFullYear()+0
return u},
or:function(a){var u=H.c5(a).getMonth()+1
return u},
on:function(a){var u=H.c5(a).getDate()+0
return u},
oo:function(a){var u=H.c5(a).getHours()+0
return u},
oq:function(a){var u=H.c5(a).getMinutes()+0
return u},
os:function(a){var u=H.c5(a).getSeconds()+0
return u},
op:function(a){var u=H.c5(a).getMilliseconds()+0
return u},
E:function(a){throw H.d(H.b1(a))},
e:function(a,b){if(a==null)J.aE(a)
throw H.d(H.cl(a,b))},
cl:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aO(!0,b,s,null)
u=H.ad(J.aE(a))
if(!(b<0)){if(typeof u!=="number")return H.E(u)
t=b>=u}else t=!0
if(t)return P.a1(b,a,s,null,u)
return P.e7(b,s)},
pP:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c7(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c7(a,c,!0,b,"end",u)
return new P.aO(!0,b,"end",null)},
b1:function(a){return new P.aO(!0,a,null,null)},
pL:function(a){if(typeof a!=="number")throw H.d(H.b1(a))
return a},
d:function(a){var u
if(a==null)a=new P.e3()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.ns})
u.name=""}else u.toString=H.ns
return u},
ns:function(){return J.ar(this.dartException)},
C:function(a){throw H.d(a)},
u:function(a){throw H.d(P.bl(a))},
bg:function(a){var u,t,s,r,q,p
a=H.nq(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iZ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j_:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mH:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
mp:function(a,b){return new H.i3(a,b==null?null:b.method)},
lz:function(a,b){var u=b==null,t=u?null:b.method
return new H.hn(a,t,u?null:b.receiver)},
ak:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.ll(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aV(t,16)&8191)===10)switch(s){case 438:return f.$1(H.lz(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.mp(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.nw()
q=$.nx()
p=$.ny()
o=$.nz()
n=$.nC()
m=$.nD()
l=$.nB()
$.nA()
k=$.nF()
j=$.nE()
i=r.an(u)
if(i!=null)return f.$1(H.lz(H.M(u),i))
else{i=q.an(u)
if(i!=null){i.method="call"
return f.$1(H.lz(H.M(u),i))}else{i=p.an(u)
if(i==null){i=o.an(u)
if(i==null){i=n.an(u)
if(i==null){i=m.an(u)
if(i==null){i=l.an(u)
if(i==null){i=o.an(u)
if(i==null){i=k.an(u)
if(i==null){i=j.an(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.mp(H.M(u),i))}}return f.$1(new H.jb(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ef()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aO(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ef()
return a},
cp:function(a){var u
if(a==null)return new H.f3(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f3(a)},
pT:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
q_:function(a,b,c,d,e,f){H.f(a,"$ibD")
switch(H.ad(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.D("Unsupported number of arguments for wrapped closure"))},
ck:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.q_)
a.$identity=u
return u},
o1:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.iC().constructor.prototype):Object.create(new H.cu(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b3
if(typeof t!=="number")return t.D()
$.b3=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.md(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.nY(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.md(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
nY:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.pU,a)
if(typeof a=="function")if(b)return a
else{u=c?H.mc:H.lp
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
nZ:function(a,b,c,d){var u=H.lp
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
md:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.o0(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nZ(t,!r,u,b)
if(t===0){r=$.b3
if(typeof r!=="number")return r.D()
$.b3=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cv
return new Function(r+H.i(q==null?$.cv=H.fH("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b3
if(typeof r!=="number")return r.D()
$.b3=r+1
o+=r
r="return function("+o+"){return this."
q=$.cv
return new Function(r+H.i(q==null?$.cv=H.fH("self"):q)+"."+H.i(u)+"("+o+");}")()},
o_:function(a,b,c,d){var u=H.lp,t=H.mc
switch(b?-1:a){case 0:throw H.d(H.oA("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
o0:function(a,b){var u,t,s,r,q,p,o,n=$.cv
if(n==null)n=$.cv=H.fH("self")
u=$.mb
if(u==null)u=$.mb=H.fH("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.o_(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.b3
if(typeof u!=="number")return u.D()
$.b3=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.b3
if(typeof u!=="number")return u.D()
$.b3=u+1
return new Function(n+u+"}")()},
lV:function(a,b,c,d,e,f,g){return H.o1(a,b,c,d,!!e,!!f,g)},
lp:function(a){return a.a},
mc:function(a){return a.c},
fH:function(a){var u,t,s,r=new H.cu("self","target","receiver","name"),q=J.lw(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
G:function(a){if(a==null)H.pH("boolean expression must not be null")
return a},
M:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.b0(a,"String"))},
pQ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.b0(a,"double"))},
nm:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.b0(a,"num"))},
lS:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.b0(a,"bool"))},
ad:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.b0(a,"int"))},
no:function(a,b){throw H.d(H.b0(a,H.cr(H.M(b).substring(2))))},
q6:function(a,b){throw H.d(H.nX(a,H.cr(H.M(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.R(a)[b])return a
H.no(a,b)},
v:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.R(a)[b]
else u=!0
if(u)return a
H.q6(a,b)},
qW:function(a){if(a==null)return a
if(!!J.R(a).$ib)return a
throw H.d(H.b0(a,"List<dynamic>"))},
nk:function(a,b){var u
if(a==null)return a
u=J.R(a)
if(!!u.$ib)return a
if(u[b])return a
H.no(a,b)},
nf:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ad(u)]
else return a.$S()}return},
fs:function(a,b){var u
if(typeof a=="function")return!0
u=H.nf(J.R(a))
if(u==null)return!1
return H.n0(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lO)return a
$.lO=!0
try{if(H.fs(a,b))return a
u=H.lf(b)
t=H.b0(a,u)
throw H.d(t)}finally{$.lO=!1}},
lX:function(a,b){if(a!=null&&!H.lU(a,b))H.C(H.b0(a,H.lf(b)))
return a},
b0:function(a,b){return new H.j0("TypeError: "+P.dK(a)+": type '"+H.i(H.n6(a))+"' is not a subtype of type '"+b+"'")},
nX:function(a,b){return new H.fI("CastError: "+P.dK(a)+": type '"+H.i(H.n6(a))+"' is not a subtype of type '"+b+"'")},
n6:function(a){var u,t=J.R(a)
if(!!t.$icy){u=H.nf(t)
if(u!=null)return H.lf(u)
return"Closure"}return H.cT(a)},
pH:function(a){throw H.d(new H.jC(a))},
qb:function(a){throw H.d(new P.fS(a))},
oA:function(a){return new H.im(a)},
nh:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bS:function(a){if(a==null)return
return a.$ti},
qV:function(a,b,c){return H.cq(a["$a"+H.i(c)],H.bS(b))},
co:function(a,b,c,d){var u=H.cq(a["$a"+H.i(c)],H.bS(b))
return u==null?null:u[d]},
am:function(a,b,c){var u=H.cq(a["$a"+H.i(b)],H.bS(a))
return u==null?null:u[c]},
q:function(a,b){var u=H.bS(a)
return u==null?null:u[b]},
lf:function(a){return H.bR(a,null)},
bR:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cr(a[0].name)+H.lR(a,1,b)
if(typeof a=="function")return H.cr(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ad(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.i(b[t])}if('func' in a)return H.pg(a,b)
if('futureOr' in a)return"FutureOr<"+H.bR("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
pg:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.e(a0,m)
p=C.b.D(p,a0[m])
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
for(n=H.pS(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.M(n[g])
i=i+h+H.bR(d[c],a0)+(" "+H.i(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lR:function(a,b,c){var u,t,s,r,q,p
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
lT:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bS(a)
t=J.R(a)
if(t[b]==null)return!1
return H.n9(H.cq(t[d],u),null,c,null)},
m:function(a,b,c,d){if(a==null)return a
if(H.lT(a,b,c,d))return a
throw H.d(H.b0(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cr(b.substring(2))+H.lR(c,0,null),v.mangledGlobalNames)))},
n9:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aN(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aN(a[t],b,c[t],d))return!1
return!0},
qT:function(a,b,c){return a.apply(b,H.cq(J.R(b)["$a"+H.i(c)],H.bS(b)))},
nj:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="V"||a.name==="N"||a===-1||a===-2||H.nj(u)}return!1},
lU:function(a,b){var u,t
if(a==null)return b==null||b.name==="V"||b.name==="N"||b===-1||b===-2||H.nj(b)
if(b==null||b===-1||b.name==="V"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lU(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fs(a,b)}u=J.R(a).constructor
t=H.bS(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aN(u,null,b,null)},
F:function(a,b){if(a!=null&&!H.lU(a,b))throw H.d(H.b0(a,H.lf(b)))
return a},
aN:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="V"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="V"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aN(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="N")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aN("type" in a?a.type:l,b,s,d)
else if(H.aN(a,b,s,d))return!0
else{if(!('$i'+"cE" in t.prototype))return!1
r=t.prototype["$a"+"cE"]
q=H.cq(r,u?a.slice(1):l)
return H.aN(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.n0(a,b,c,d)
if('func' in a)return c.name==="bD"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.n9(H.cq(m,u),b,p,d)},
n0:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aN(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aN(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aN(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aN(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.q4(h,b,g,d)},
q4:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aN(c[s],d,a[s],b))return!1}return!0},
qU:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
q2:function(a){var u,t,s,r,q=H.M($.ni.$1(a)),p=$.kL[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kR[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.M($.n8.$2(a,q))
if(q!=null){p=$.kL[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kR[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.le(u)
$.kL[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kR[q]=u
return u}if(s==="-"){r=H.le(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.nn(a,u)
if(s==="*")throw H.d(P.ja(q))
if(v.leafTags[q]===true){r=H.le(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.nn(a,u)},
nn:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lZ(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
le:function(a){return J.lZ(a,!1,null,!!a.$iL)},
q3:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.le(u)
else return J.lZ(u,c,null,null)},
pY:function(){if(!0===$.lY)return
$.lY=!0
H.pZ()},
pZ:function(){var u,t,s,r,q,p,o,n
$.kL=Object.create(null)
$.kR=Object.create(null)
H.pX()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.np.$1(q)
if(p!=null){o=H.q3(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pX:function(){var u,t,s,r,q,p,o=C.G()
o=H.cj(C.H,H.cj(C.I,H.cj(C.v,H.cj(C.v,H.cj(C.J,H.cj(C.K,H.cj(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ni=new H.kO(r)
$.n8=new H.kP(q)
$.np=new H.kQ(p)},
cj:function(a,b){return a(b)||b},
ob:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(P.a6("Illegal RegExp pattern ("+String(p)+")",a,null))},
q9:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pR:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nq:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
m1:function(a,b,c){var u=H.qa(a,b,c)
return u},
qa:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nq(b),'g'),H.pR(c))},
fM:function fM(){},
fN:function fN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iZ:function iZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i3:function i3(a,b){this.a=a
this.b=b},
hn:function hn(a,b,c){this.a=a
this.b=b
this.c=c},
jb:function jb(a){this.a=a},
ll:function ll(a){this.a=a},
f3:function f3(a){this.a=a
this.b=null},
cy:function cy(){},
iM:function iM(){},
iC:function iC(){},
cu:function cu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j0:function j0(a){this.a=a},
fI:function fI(a){this.a=a},
im:function im(a){this.a=a},
jC:function jC(a){this.a=a},
a5:function a5(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hr:function hr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hs:function hs(a,b){this.a=a
this.$ti=b},
ht:function ht(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
hm:function hm(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ch:function(a){return a},
ok:function(a){return new Int8Array(a)},
bj:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.cl(b,a))},
pe:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.pP(a,b,c))
return b},
cN:function cN(){},
bJ:function bJ(){},
e_:function e_(){},
cO:function cO(){},
e0:function e0(){},
hW:function hW(){},
hX:function hX(){},
hY:function hY(){},
hZ:function hZ(){},
i_:function i_(){},
e1:function e1(){},
cP:function cP(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
dh:function dh(){},
pS:function(a){return J.mk(a?Object.keys(a):[],null)},
qc:function(a){return v.mangledGlobalNames[a]},
q5:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kM:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lY==null){H.pY()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.ja("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.m3()]
if(r!=null)return r
r=H.q2(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.m3(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
oa:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.lo(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.aj(a,0,4294967295,"length",null))
return J.mk(new Array(a),b)},
mk:function(a,b){return J.lw(H.c(a,[b]))},
lw:function(a){a.fixed$length=Array
return a},
R:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dN.prototype
return J.dM.prototype}if(typeof a=="string")return J.bH.prototype
if(a==null)return J.dO.prototype
if(typeof a=="boolean")return J.hl.prototype
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.V)return a
return J.kM(a)},
dr:function(a){if(typeof a=="string")return J.bH.prototype
if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.V)return a
return J.kM(a)},
ft:function(a){if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.V)return a
return J.kM(a)},
ng:function(a){if(typeof a=="number")return J.cI.prototype
if(typeof a=="string")return J.bH.prototype
if(a==null)return a
if(!(a instanceof P.V))return J.cd.prototype
return a},
ds:function(a){if(typeof a=="string")return J.bH.prototype
if(a==null)return a
if(!(a instanceof P.V))return J.cd.prototype
return a},
cn:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.V)return a
return J.kM(a)},
W:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.R(a).v(a,b)},
m5:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ng(a).w(a,b)},
dv:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.q0(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dr(a).j(a,b)},
lm:function(a,b,c){return J.ft(a).k(a,b,c)},
nO:function(a,b){return J.ds(a).F(a,b)},
nP:function(a,b,c){return J.cn(a).hF(a,b,c)},
nQ:function(a,b,c,d){return J.cn(a).i9(a,b,c,d)},
nR:function(a,b){return J.ds(a).X(a,b)},
ln:function(a,b){return J.ng(a).ip(a,b)},
fv:function(a,b){return J.ft(a).K(a,b)},
nS:function(a,b,c,d){return J.cn(a).iF(a,b,c,d)},
m6:function(a,b){return J.ft(a).H(a,b)},
nT:function(a){return J.cn(a).gik(a)},
m7:function(a){return J.cn(a).gcj(a)},
dw:function(a){return J.R(a).gI(a)},
bv:function(a){return J.ft(a).gU(a)},
aE:function(a){return J.dr(a).gn(a)},
m8:function(a){return J.ft(a).ja(a)},
nU:function(a,b){return J.cn(a).jd(a,b)},
nV:function(a,b,c){return J.ds(a).u(a,b,c)},
nW:function(a){return J.ds(a).jn(a)},
ar:function(a){return J.R(a).i(a)},
a:function a(){},
hl:function hl(){},
dO:function dO(){},
dP:function dP(){},
i7:function i7(){},
cd:function cd(){},
bI:function bI(){},
b7:function b7(a){this.$ti=a},
lx:function lx(a){this.$ti=a},
as:function as(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cI:function cI(){},
dN:function dN(){},
dM:function dM(){},
bH:function bH(){}},P={
oQ:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pI()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.ck(new P.jE(s),1)).observe(u,{childList:true})
return new P.jD(s,u,t)}else if(self.setImmediate!=null)return P.pJ()
return P.pK()},
oR:function(a){self.scheduleImmediate(H.ck(new P.jF(H.n(a,{func:1,ret:-1})),0))},
oS:function(a){self.setImmediate(H.ck(new P.jG(H.n(a,{func:1,ret:-1})),0))},
oT:function(a){P.lC(C.o,H.n(a,{func:1,ret:-1}))},
lC:function(a,b){var u=C.d.af(a.a,1000)
return P.oZ(u<0?0:u,b)},
mG:function(a,b){var u=C.d.af(a.a,1000)
return P.p_(u<0?0:u,b)},
oZ:function(a,b){var u=new P.f9()
u.eY(a,b)
return u},
p_:function(a,b){var u=new P.f9()
u.eZ(a,b)
return u},
oU:function(a,b){var u,t,s
b.a=1
try{a.es(new P.jQ(b),new P.jR(b),null)}catch(s){u=H.ak(s)
t=H.cp(s)
P.q7(new P.jS(b,u,t))}},
mR:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaM")
if(u>=4){t=b.c4()
b.a=a.a
b.c=a.c
P.dc(b,t)}else{t=H.f(b.c,"$ibi")
b.a=2
b.c=a
a.dw(t)}},
dc:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$ian")
P.kC(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
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
if(m){H.f(q,"$ian")
P.kC(i,i,g.b,q.a,q.b)
return}l=$.a3
if(l!==n)$.a3=n
else l=i
g=b.c
if((g&15)===8)new P.jW(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.jV(u,b,q).$0()}else if((g&2)!==0)new P.jU(h,u,b).$0()
if(l!=null)$.a3=l
g=u.b
if(!!J.R(g).$icE){if(g.a>=4){k=H.f(o.c,"$ibi")
o.c=null
b=o.bp(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.mR(g,o)
return}}j=b.b
k=H.f(j.c,"$ibi")
j.c=null
b=j.bp(k)
g=u.a
p=u.b
if(!g){H.F(p,H.q(j,0))
j.a=4
j.c=p}else{H.f(p,"$ian")
j.a=8
j.c=p}h.a=j
g=j}},
pD:function(a,b){if(H.fs(a,{func:1,args:[P.V,P.aw]}))return H.n(a,{func:1,ret:null,args:[P.V,P.aw]})
if(H.fs(a,{func:1,args:[P.V]}))return H.n(a,{func:1,ret:null,args:[P.V]})
throw H.d(P.lo(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pC:function(){var u,t
for(;u=$.ci,u!=null;){$.dq=null
t=u.b
$.ci=t
if(t==null)$.dp=null
u.a.$0()}},
pG:function(){$.lP=!0
try{P.pC()}finally{$.dq=null
$.lP=!1
if($.ci!=null)$.m4().$1(P.na())}},
n5:function(a){var u=new P.ew(a)
if($.ci==null){$.ci=$.dp=u
if(!$.lP)$.m4().$1(P.na())}else $.dp=$.dp.b=u},
pF:function(a){var u,t,s=$.ci
if(s==null){P.n5(a)
$.dq=$.dp
return}u=new P.ew(a)
t=$.dq
if(t==null){u.b=s
$.ci=$.dq=u}else{u.b=t.b
$.dq=t.b=u
if(u.b==null)$.dp=u}},
q7:function(a){var u=null,t=$.a3
if(C.f===t){P.kE(u,u,C.f,a)
return}P.kE(u,u,t,H.n(t.ce(a),{func:1,ret:-1}))},
mF:function(a,b){var u=$.a3
if(u===C.f)return P.lC(a,H.n(b,{func:1,ret:-1}))
return P.lC(a,H.n(u.ce(b),{func:1,ret:-1}))},
oG:function(a,b){var u=$.a3
if(u===C.f)return P.mG(a,H.n(b,{func:1,ret:-1,args:[P.be]}))
return P.mG(a,H.n(u.dP(b,P.be),{func:1,ret:-1,args:[P.be]}))},
kC:function(a,b,c,d,e){var u={}
u.a=d
P.pF(new P.kD(u,e))},
n1:function(a,b,c,d,e){var u,t=$.a3
if(t===c)return d.$0()
$.a3=c
u=t
try{t=d.$0()
return t}finally{$.a3=u}},
n2:function(a,b,c,d,e,f,g){var u,t=$.a3
if(t===c)return d.$1(e)
$.a3=c
u=t
try{t=d.$1(e)
return t}finally{$.a3=u}},
pE:function(a,b,c,d,e,f,g,h,i){var u,t=$.a3
if(t===c)return d.$2(e,f)
$.a3=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a3=u}},
kE:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.ce(d):c.il(d,-1)
P.n5(d)},
jE:function jE(a){this.a=a},
jD:function jD(a,b,c){this.a=a
this.b=b
this.c=c},
jF:function jF(a){this.a=a},
jG:function jG(a){this.a=a},
f9:function f9(){this.c=0},
kk:function kk(a,b){this.a=a
this.b=b},
kj:function kj(a,b,c,d){var _=this
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
aM:function aM(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jP:function jP(a,b){this.a=a
this.b=b},
jT:function jT(a,b){this.a=a
this.b=b},
jQ:function jQ(a){this.a=a},
jR:function jR(a){this.a=a},
jS:function jS(a,b,c){this.a=a
this.b=b
this.c=c},
jW:function jW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jX:function jX(a){this.a=a},
jV:function jV(a,b,c){this.a=a
this.b=b
this.c=c},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
ew:function ew(a){this.a=a
this.b=null},
iF:function iF(){},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(a,b){this.a=a
this.b=b},
cY:function cY(){},
iG:function iG(){},
be:function be(){},
an:function an(a,b){this.a=a
this.b=b},
kt:function kt(){},
kD:function kD(a,b){this.a=a
this.b=b},
k2:function k2(){},
k4:function k4(a,b,c){this.a=a
this.b=b
this.c=c},
k3:function k3(a,b){this.a=a
this.b=b},
k5:function k5(a,b,c){this.a=a
this.b=b
this.c=c},
od:function(a,b){return new H.a5([a,b])},
lA:function(a,b){return new H.a5([a,b])},
of:function(a){return H.pT(a,new H.a5([null,null]))},
dS:function(a){return new P.k0([a])},
lJ:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oY:function(a,b,c){var u=new P.eL(a,b,[c])
u.c=a.e
return u},
o8:function(a,b,c){var u,t
if(P.lQ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.h])
C.a.h($.ay,a)
try{P.ph(a,u)}finally{if(0>=$.ay.length)return H.e($.ay,-1)
$.ay.pop()}t=P.mD(b,H.nk(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
lv:function(a,b,c){var u,t
if(P.lQ(a))return b+"..."+c
u=new P.a8(b)
C.a.h($.ay,a)
try{t=u
t.a=P.mD(t.a,a,", ")}finally{if(0>=$.ay.length)return H.e($.ay,-1)
$.ay.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lQ:function(a){var u,t
for(u=$.ay.length,t=0;t<u;++t)if(a===$.ay[t])return!0
return!1},
ph:function(a,b){var u,t,s,r,q,p,o,n=a.gU(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.B())return
u=H.i(n.gJ(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.B()){if(l<=5)return
if(0>=b.length)return H.e(b,-1)
t=b.pop()
if(0>=b.length)return H.e(b,-1)
s=b.pop()}else{r=n.gJ(n);++l
if(!n.B()){if(l<=4){C.a.h(b,H.i(r))
return}t=H.i(r)
if(0>=b.length)return H.e(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gJ(n);++l
for(;n.B();r=q,q=p){p=n.gJ(n);++l
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
oe:function(a,b,c){var u=P.od(b,c)
a.H(0,new P.hu(u,b,c))
return u},
ml:function(a,b){var u,t,s=P.dS(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t)s.h(0,H.F(a[t],b))
return s},
lB:function(a){var u,t={}
if(P.lQ(a))return"{...}"
u=new P.a8("")
try{C.a.h($.ay,a)
u.a+="{"
t.a=!0
J.m6(a,new P.hy(t,u))
u.a+="}"}finally{if(0>=$.ay.length)return H.e($.ay,-1)
$.ay.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
k0:function k0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ce:function ce(a){this.a=a
this.c=this.b=null},
eL:function eL(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
hv:function hv(){},
y:function y(){},
hx:function hx(){},
hy:function hy(a,b){this.a=a
this.b=b},
ag:function ag(){},
kl:function kl(){},
hz:function hz(){},
eo:function eo(a,b){this.a=a
this.$ti=b},
k7:function k7(){},
eM:function eM(){},
ff:function ff(){},
oK:function(a,b,c,d){if(b instanceof Uint8Array)return P.oL(!1,b,c,d)
return},
oL:function(a,b,c,d){var u,t,s=$.nG()
if(s==null)return
u=0===c
if(u&&!0)return P.lF(s,b)
t=b.length
d=P.bL(c,d,t)
if(u&&d===t)return P.lF(s,b)
return P.lF(s,b.subarray(c,d))},
lF:function(a,b){if(P.oN(b))return
return P.oO(a,b)},
oO:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ak(t)}return},
oN:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
oM:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ak(t)}return},
n4:function(a,b,c){var u,t,s
for(u=J.dr(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.ap()
if((s&127)!==s)return t-b}return c-b},
ma:function(a,b,c,d,e,f){if(C.d.bk(f,4)!==0)throw H.d(P.a6("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.a6("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.a6("Invalid base64 padding, more than two '=' characters",a,b))},
fE:function fE(){},
fF:function fF(){},
bZ:function bZ(){},
bz:function bz(){},
h1:function h1(){},
hh:function hh(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
hg:function hg(a){this.a=a},
jj:function jj(){},
jl:function jl(){},
kr:function kr(a){this.b=0
this.c=a},
jk:function jk(a){this.a=a},
kq:function kq(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fu:function(a,b,c){var u=H.ou(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.a6(a,null,null))},
o6:function(a){if(a instanceof H.cy)return a.i(0)
return"Instance of '"+H.i(H.cT(a))+"'"},
og:function(a,b,c){var u,t=J.oa(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.k(t,u,b)
return H.m(t,"$ib",[c],"$ab")},
mm:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bv(a);u.B();)C.a.h(s,H.F(u.gJ(u),c))
if(b)return s
return H.m(J.lw(s),"$ib",t,"$ab")},
cZ:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.m(a,"$ib7",[P.l],"$ab7")
u=a.length
c=P.bL(b,c,u)
return H.mw(b>0||c<u?C.a.eG(a,b,c):a)}if(!!J.R(a).$icP)return H.ow(a,b,P.bL(b,c,a.length))
return P.oE(a,b,c)},
oE:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.d(P.aj(b,0,J.aE(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.aj(c,b,J.aE(a),q,q))
t=J.bv(a)
for(s=0;s<b;++s)if(!t.B())throw H.d(P.aj(b,0,s,q,q))
r=[]
if(u)for(;t.B();)r.push(t.gJ(t))
else for(s=b;s<c;++s){if(!t.B())throw H.d(P.aj(c,b,s,q,q))
r.push(t.gJ(t))}return H.mw(r)},
oy:function(a){return new H.hm(a,H.ob(a,!1,!0,!1,!1,!1))},
mD:function(a,b,c){var u=J.bv(b)
if(!u.B())return a
if(c.length===0){do a+=H.i(u.gJ(u))
while(u.B())}else{a+=H.i(u.gJ(u))
for(;u.B();)a=a+c+H.i(u.gJ(u))}return a},
mJ:function(){var u=H.om()
if(u!=null)return P.oJ(u)
throw H.d(P.J("'Uri.base' is not supported"))},
fg:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.nM().b
if(typeof b!=="string")H.C(H.b1(b))
u=u.test(b)}else u=!1
if(u)return b
H.F(b,H.am(c,"bZ",0))
t=c.giE().ck(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c6(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
o3:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
o4:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dG:function(a){if(a>=10)return""+a
return"0"+a},
mf:function(a){return new P.bB(1000*a)},
dK:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ar(a)
if(typeof a==="string")return JSON.stringify(a)
return P.o6(a)},
dy:function(a){return new P.aO(!1,null,null,a)},
lo:function(a,b,c){return new P.aO(!0,a,b,c)},
e7:function(a,b){return new P.c7(null,null,!0,a,b,"Value not in range")},
aj:function(a,b,c,d,e){return new P.c7(b,c,!0,a,d,"Invalid value")},
bL:function(a,b,c){if(0>a||a>c)throw H.d(P.aj(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.aj(b,a,c,"end",null))
return b}return c},
my:function(a,b){if(typeof a!=="number")return a.R()
if(a<0)throw H.d(P.aj(a,0,null,b,null))},
a1:function(a,b,c,d,e){var u=H.ad(e==null?J.aE(b):e)
return new P.hj(u,!0,a,c,"Index out of range")},
J:function(a){return new P.jc(a)},
ja:function(a){return new P.j9(a)},
mC:function(a){return new P.cX(a)},
bl:function(a){return new P.fL(a)},
D:function(a){return new P.eE(a)},
a6:function(a,b,c){return new P.hb(a,b,c)},
oh:function(a,b,c){var u,t=H.c([],[c])
C.a.sn(t,a)
for(u=0;u<a;++u)C.a.k(t,u,b.$1(u))
return t},
m0:function(a){H.q5(a)},
oJ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.F(a,4)^58)*3|C.b.F(a,0)^100|C.b.F(a,1)^97|C.b.F(a,2)^116|C.b.F(a,3)^97)>>>0
if(u===0)return P.mI(e<e?C.b.u(a,0,e):a,5,f).gez()
else if(u===32)return P.mI(C.b.u(a,5,e),0,f).gez()}t=new Array(8)
t.fixed$length=Array
s=H.c(t,[P.l])
C.a.k(s,0,0)
C.a.k(s,1,-1)
C.a.k(s,2,-1)
C.a.k(s,7,-1)
C.a.k(s,3,0)
C.a.k(s,4,0)
C.a.k(s,5,e)
C.a.k(s,6,e)
if(P.n3(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.jp()
if(r>=0)if(P.n3(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.D()
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
a=C.b.aY(a,o,n,"/");++e
n=h}k="file"}else if(C.b.ac(a,"http",0)){if(t&&p+3===o&&C.b.ac(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aY(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.ac(a,"https",0)){if(t&&p+4===o&&C.b.ac(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aY(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.u(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.ka(a,r,q,p,o,n,m,k)}return P.p0(a,0,e,r,q,p,o,n,m,k)},
mL:function(a){var u=P.h
return C.a.iJ(H.c(a.split("&"),[u]),P.lA(u,u),new P.jh(C.h),[P.z,P.h,P.h])},
oI:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.je(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.X(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fu(C.b.u(a,s,t),n,n)
if(typeof p!=="number")return p.a7()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.e(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fu(C.b.u(a,s,c),n,n)
if(typeof p!=="number")return p.a7()
if(p>255)k.$2(l,s)
if(r>=u)return H.e(j,r)
j[r]=p
return j},
mK:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.jf(a),d=new P.jg(e,a)
if(a.length<2)e.$1("address is too short")
u=H.c([],[P.l])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.b.X(a,t)
if(p===58){if(t===b){++t
if(C.b.X(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
C.a.h(u,-1)
r=!0}else C.a.h(u,d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.a.gay(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)C.a.h(u,d.$2(s,c))
else{m=P.oI(a,s,c)
C.a.h(u,(m[0]<<8|m[1])>>>0)
C.a.h(u,(m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.e(l,i)
l[i]=0
f=i+1
if(f>=k)return H.e(l,f)
l[f]=0
i+=2}else{f=C.d.aV(h,8)
if(i<0||i>=k)return H.e(l,i)
l[i]=f
f=i+1
if(f>=k)return H.e(l,f)
l[f]=h&255
i+=2}}return l},
p0:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.p8(a,b,d)
else{if(d===b)P.cg(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.p9(a,u,e-1):""
s=P.p5(a,e,f,!1)
if(typeof f!=="number")return f.D()
r=f+1
if(typeof g!=="number")return H.E(g)
q=r<g?P.p7(P.fu(C.b.u(a,r,g),new P.km(a,f),n),j):n}else{q=n
s=q
t=""}p=P.p6(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.R()
o=h<i?P.lL(a,h+1,i,n):n
return new P.cf(j,t,s,q,p,o,i<c?P.p4(a,i+1,c):n)},
mV:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cg:function(a,b,c){throw H.d(P.a6(c,a,b))},
p7:function(a,b){if(a!=null&&a===P.mV(b))return
return a},
p5:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.b.X(a,b)===91){if(typeof c!=="number")return c.M()
u=c-1
if(C.b.X(a,u)!==93)P.cg(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.p2(a,t,u)
if(typeof s!=="number")return s.R()
if(s<u){r=s+1
q=P.n_(a,C.b.ac(a,"25",r)?s+3:r,u,"%25")}else q=""
P.mK(a,t,s)
return C.b.u(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.E(c)
p=b
for(;p<c;++p)if(C.b.X(a,p)===58){s=C.b.bv(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.n_(a,C.b.ac(a,"25",r)?s+3:r,c,"%25")}else q=""
P.mK(a,b,s)
return"["+C.b.u(a,b,s)+q+"]"}return P.pb(a,b,c)},
p2:function(a,b,c){var u,t=C.b.bv(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.E(c)
u=t<c}else u=!1
return u?t:c},
n_:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.a8(d):null
if(typeof c!=="number")return H.E(c)
u=b
t=u
s=!0
for(;u<c;){r=C.b.X(a,u)
if(r===37){q=P.lM(a,u,!0)
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
if(p>=8)return H.e(C.i,p)
p=(C.i[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.a8("")
if(t<u){l.a+=C.b.u(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.b.X(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.a8("")
l.a+=C.b.u(a,t,u)
l.a+=P.lK(r)
u+=m
t=u}}}if(l==null)return C.b.u(a,b,c)
if(t<c)l.a+=C.b.u(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
pb:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.E(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.X(a,u)
if(q===37){p=P.lM(a,u,!0)
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
if(o>=8)return H.e(C.z,o)
o=(C.z[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.a8("")
if(t<u){s.a+=C.b.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.l,o)
o=(C.l[o]&1<<(q&15))!==0}else o=!1
if(o)P.cg(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.X(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.a8("")
n=C.b.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.lK(q)
u+=l
t=u}}}}if(s==null)return C.b.u(a,b,c)
if(t<c){n=C.b.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
p8:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mX(C.b.F(a,b)))P.cg(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.n,r)
r=(C.n[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cg(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.u(a,b,c)
return P.p1(t?a.toLowerCase():a)},
p1:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
p9:function(a,b,c){return P.dm(a,b,c,C.W,!1)},
p6:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dm(a,b,c,C.A,!0):C.k.jJ(d,new P.kn(),P.h).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a9(u,"/"))u="/"+u
return P.pa(u,e,f)},
pa:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a9(a,"/"))return P.pc(a,!u||c)
return P.pd(a)},
lL:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.d(P.dy("Both query and queryParameters specified"))
return P.dm(a,b,c,C.m,!0)}if(d==null)return
u=new P.a8("")
t.a=""
d.H(0,new P.ko(new P.kp(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
p4:function(a,b,c){return P.dm(a,b,c,C.m,!0)},
lM:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.X(a,b+1)
t=C.b.X(a,p)
s=H.kN(u)
r=H.kN(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aV(q,4)
if(p>=8)return H.e(C.i,p)
p=(C.i[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c6(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.u(a,b,b+3).toUpperCase()
return},
lK:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.c(u,[P.l])
C.a.k(t,0,37)
C.a.k(t,1,C.b.F(o,a>>>4))
C.a.k(t,2,C.b.F(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.c(u,[P.l])
for(q=0;--r,r>=0;s=128){p=C.d.hT(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.F(o,p>>>4))
C.a.k(t,q+2,C.b.F(o,p&15))
q+=3}}return P.cZ(t,0,null)},
dm:function(a,b,c,d,e){var u=P.mZ(a,b,c,d,e)
return u==null?C.b.u(a,b,c):u},
mZ:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.R()
if(typeof c!=="number")return H.E(c)
if(!(o<c))break
c$0:{u=C.b.X(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.e(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.lM(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.e(C.l,t)
t=(C.l[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.cg(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.b.X(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.lK(u)}}if(m==null)m=new P.a8("")
m.a+=C.b.u(a,n,o)
m.a+=H.i(s)
if(typeof r!=="number")return H.E(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.R()
if(n<c)m.a+=C.b.u(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
mY:function(a){if(C.b.a9(a,"."))return!0
return C.b.eb(a,"/.")!==-1},
pd:function(a){var u,t,s,r,q,p,o
if(!P.mY(a))return a
u=H.c([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.W(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
pc:function(a,b){var u,t,s,r,q,p
if(!P.mY(a))return!b?P.mW(a):a
u=H.c([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gay(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gay(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.k(u,0,P.mW(u[0]))}return C.a.m(u,"/")},
mW:function(a){var u,t,s,r=a.length
if(r>=2&&P.mX(J.nO(a,0)))for(u=1;u<r;++u){t=C.b.F(a,u)
if(t===58)return C.b.u(a,0,u)+"%3A"+C.b.ah(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.e(C.n,s)
s=(C.n[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
p3:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.dy("Invalid URL encoding"))}}return u},
lN:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.F(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.u(a,b,c)
else r=new H.r(C.b.u(a,b,c))}else{r=H.c([],[P.l])
for(s=a.length,q=b;q<c;++q){t=C.b.F(a,q)
if(t>127)throw H.d(P.dy("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.dy("Truncated URI"))
C.a.h(r,P.p3(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.m(r,"$ib",[P.l],"$ab")
return new P.jk(!1).ck(r)},
mX:function(a){var u=a|32
return 97<=u&&u<=122},
mI:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.l])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.F(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.a6(m,a,t))}}if(s<0&&t>b)throw H.d(P.a6(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.F(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gay(l)
if(r!==44||t!==p+7||!C.b.ac(a,"base64",p+1))throw H.d(P.a6("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.iV(0,a,o,u)
else{n=P.mZ(a,o,u,C.m,!0)
if(n!=null)a=C.b.aY(a,o,u,n)}return new P.jd(a,l,c)},
pf:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.oh(22,new P.kx(),P.Q),n=new P.kw(o),m=new P.ky(),l=new P.kz(),k=H.f(n.$2(0,225),"$iQ")
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
n3:function(a,b,c,d,e){var u,t,s,r,q=$.nN()
for(u=b;u<c;++u){if(d<0||d>=q.length)return H.e(q,d)
t=q[d]
s=C.b.F(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.e(t,s)
r=t[s]
d=r&31
C.a.k(e,r>>>5,u)}return d},
P:function P(){},
az:function az(a,b){this.a=a
this.b=b},
A:function A(){},
bB:function bB(a){this.a=a},
fY:function fY(){},
fZ:function fZ(){},
bC:function bC(){},
fy:function fy(){},
e3:function e3(){},
aO:function aO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c7:function c7(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hj:function hj(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
jc:function jc(a){this.a=a},
j9:function j9(a){this.a=a},
cX:function cX(a){this.a=a},
fL:function fL(a){this.a=a},
i6:function i6(){},
ef:function ef(){},
fS:function fS(a){this.a=a},
eE:function eE(a){this.a=a},
hb:function hb(a,b,c){this.a=a
this.b=b
this.c=c},
bD:function bD(){},
l:function l(){},
j:function j(){},
b6:function b6(){},
b:function b(){},
z:function z(){},
N:function N(){},
ac:function ac(){},
V:function V(){},
aw:function aw(){},
h:function h(){},
a8:function a8(a){this.a=a},
jh:function jh(a){this.a=a},
je:function je(a){this.a=a},
jf:function jf(a){this.a=a},
jg:function jg(a,b){this.a=a
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
km:function km(a,b){this.a=a
this.b=b},
kn:function kn(){},
kp:function kp(a,b){this.a=a
this.b=b},
ko:function ko(a){this.a=a},
jd:function jd(a,b,c){this.a=a
this.b=b
this.c=c},
kx:function kx(){},
kw:function kw(a){this.a=a},
ky:function ky(){},
kz:function kz(){},
ka:function ka(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jK:function jK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
pO:function(a){var u,t=J.R(a)
if(!!t.$ibn){u=t.gdU(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fe(a.data,a.height,a.width)},
pN:function(a){if(a instanceof P.fe)return{data:a.a,height:a.b,width:a.c}
return a},
br:function(a){var u,t,s,r,q
if(a==null)return
u=P.lA(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r){q=H.M(t[r])
u.k(0,q,a[q])}return u},
pM:function(a){var u={}
a.H(0,new P.kF(u))
return u},
kc:function kc(){},
ke:function ke(a,b){this.a=a
this.b=b},
fe:function fe(a,b,c){this.a=a
this.b=b
this.c=c},
kF:function kF(a){this.a=a},
kd:function kd(a,b){this.a=a
this.b=b},
h7:function h7(a,b){this.a=a
this.b=b},
h8:function h8(){},
h9:function h9(){},
k_:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oX:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k1:function k1(){},
al:function al(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b9:function b9(){},
hp:function hp(){},
bc:function bc(){},
i4:function i4(){},
ib:function ib(){},
cU:function cU(){},
iJ:function iJ(){},
p:function p(){},
bf:function bf(){},
iY:function iY(){},
eJ:function eJ(){},
eK:function eK(){},
eU:function eU(){},
eV:function eV(){},
f5:function f5(){},
f6:function f6(){},
fc:function fc(){},
fd:function fd(){},
Q:function Q(){},
fA:function fA(){},
fB:function fB(){},
fC:function fC(a){this.a=a},
fD:function fD(){},
bV:function bV(){},
i5:function i5(){},
ex:function ex(){},
dA:function dA(){},
e6:function e6(){},
c8:function c8(){},
e9:function e9(){},
eh:function eh(){},
em:function em(){},
iB:function iB(){},
f1:function f1(){},
f2:function f2(){}},W={
m9:function(){var u=document.createElement("a")
return u},
lq:function(){var u=document.createElement("canvas")
return u},
o5:function(a,b,c){var u=document.body,t=(u&&C.t).am(u,a,b,c)
t.toString
u=W.H
u=new H.d9(new W.aq(t),H.n(new W.h0(),{func:1,ret:P.P,args:[u]}),[u])
return H.f(u.gaO(u),"$iT")},
mi:function(a){H.f(a,"$ik")
return"wheel"},
cB:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cn(a)
t=u.geq(a)
if(typeof t==="string")r=u.geq(a)}catch(s){H.ak(s)}return r},
o7:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icH")
try{s.type=a}catch(u){H.ak(u)}return s},
jZ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mT:function(a,b,c,d){var u=W.jZ(W.jZ(W.jZ(W.jZ(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ab:function(a,b,c,d,e){var u=W.n7(new W.jO(c),W.o)
if(u!=null&&!0)J.nQ(a,b,u,!1)
return new W.jN(a,b,u,!1,[e])},
mS:function(a){var u=W.m9(),t=window.location
u=new W.bQ(new W.k6(u,t))
u.eS(a)
return u},
oV:function(a,b,c,d){H.f(a,"$iT")
H.M(b)
H.M(c)
H.f(d,"$ibQ")
return!0},
oW:function(a,b,c,d){var u,t,s
H.f(a,"$iT")
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
mU:function(){var u=P.h,t=P.ml(C.p,u),s=H.q(C.p,0),r=H.n(new W.ki(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.kh(t,P.dS(u),P.dS(u),P.dS(u),null)
t.eX(null,new H.hC(C.p,r,[s,u]),q,null)
return t},
n7:function(a,b){var u=$.a3
if(u===C.f)return a
return u.dP(a,b)},
x:function x(){},
fw:function fw(){},
dx:function dx(){},
fx:function fx(){},
ct:function ct(){},
bW:function bW(){},
bw:function bw(){},
bY:function bY(){},
cx:function cx(){},
bx:function bx(){},
cz:function cz(){},
fO:function fO(){},
X:function X(){},
cA:function cA(){},
fP:function fP(){},
b4:function b4(){},
b5:function b5(){},
fQ:function fQ(){},
fR:function fR(){},
fU:function fU(){},
aF:function aF(){},
fV:function fV(){},
dH:function dH(){},
dI:function dI(){},
fW:function fW(){},
fX:function fX(){},
jI:function jI(a,b){this.a=a
this.b=b},
T:function T(){},
h0:function h0(){},
o:function o(){},
k:function k(){},
aG:function aG(){},
cD:function cD(){},
h6:function h6(){},
ha:function ha(){},
aQ:function aQ(){},
hf:function hf(){},
c1:function c1(){},
bn:function bn(){},
cG:function cG(){},
cH:function cH(){},
b8:function b8(){},
dT:function dT(){},
hP:function hP(){},
cL:function cL(){},
hQ:function hQ(){},
hR:function hR(a){this.a=a},
hS:function hS(){},
hT:function hT(a){this.a=a},
aR:function aR(){},
hU:function hU(){},
ah:function ah(){},
aq:function aq(a){this.a=a},
H:function H(){},
cQ:function cQ(){},
aS:function aS(){},
i9:function i9(){},
ik:function ik(){},
il:function il(a){this.a=a},
io:function io(){},
aU:function aU(){},
iz:function iz(){},
aV:function aV(){},
iA:function iA(){},
aW:function aW(){},
iD:function iD(){},
iE:function iE(a){this.a=a},
aI:function aI(){},
bd:function bd(){},
eg:function eg(){},
iK:function iK(){},
iL:function iL(){},
d0:function d0(){},
aY:function aY(){},
aJ:function aJ(){},
iN:function iN(){},
iO:function iO(){},
iS:function iS(){},
aZ:function aZ(){},
b_:function b_(){},
iW:function iW(){},
iX:function iX(){},
bN:function bN(){},
ji:function ji(){},
jA:function jA(){},
bh:function bh(){},
da:function da(){},
db:function db(){},
jJ:function jJ(){},
ez:function ez(){},
jY:function jY(){},
eR:function eR(){},
kb:function kb(){},
kf:function kf(){},
jH:function jH(){},
jL:function jL(a){this.a=a},
jM:function jM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lI:function lI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jN:function jN(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jO:function jO(a){this.a=a},
bQ:function bQ(a){this.a=a},
I:function I(){},
e2:function e2(a){this.a=a},
i1:function i1(a){this.a=a},
i0:function i0(a,b,c){this.a=a
this.b=b
this.c=c},
eZ:function eZ(){},
k8:function k8(){},
k9:function k9(){},
kh:function kh(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ki:function ki(){},
kg:function kg(){},
dL:function dL(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aC:function aC(){},
k6:function k6(a,b){this.a=a
this.b=b},
fh:function fh(a){this.a=a},
ks:function ks(a){this.a=a},
ey:function ey(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eS:function eS(){},
eT:function eT(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
di:function di(){},
dj:function dj(){},
f_:function f_(){},
f0:function f0(){},
f4:function f4(){},
f7:function f7(){},
f8:function f8(){},
dk:function dk(){},
dl:function dl(){},
fa:function fa(){},
fb:function fb(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){}},O={
lr:function(a){var u=new O.a4([a])
u.bm(a)
return u},
a4:function a4(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cK:function cK(){this.b=this.a=null},
dW:function dW(){var _=this
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
dY:function dY(){},
hE:function hE(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ba:function ba(a,b){var _=this
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
eb:function eb(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bM:function bM(){}},E={
mj:function(){var u=new E.ao()
u.a=""
u.b=!0
u.seR(0,O.lr(E.ao))
u.y.b_(u.giW(),u.giZ())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sab(0,null)
return u},
oz:function(a,b){var u=new E.ig(a)
u.eO(a,b)
return u},
oF:function(a,b,c,d,e){var u,t,s=J.R(a)
if(!!s.$ibY)return E.mE(a,!0,!0,!0,!1)
u=W.lq()
t=u.style
t.width="100%"
t.height="100%"
s.gcj(a).h(0,u)
return E.mE(u,!0,!0,!0,!1)},
mE:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ei(),j=H.f(C.j.cS(a,"webgl2",P.of(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic8")
if(j==null)H.C(P.D("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.oz(j,a)
u=new T.iP(j)
H.ad(j.getParameter(3379))
u.c=H.ad(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.ep(a)
t=new X.ho()
t.c=new X.aB(!1,!1,!1)
t.shz(P.dS(P.l))
u.b=t
t=new X.hV(u)
t.f=0
t.r=V.bq()
t.x=V.bq()
t.ch=t.Q=1
u.c=t
t=new X.hw(u)
t.r=0
t.x=V.bq()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iV(u)
t.f=V.bq()
t.r=V.bq()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfk(H.c([],[[P.cY,P.V]]))
t=u.z
s=document
r=W.ah
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ab(s,"contextmenu",H.n(u.gfT(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ab(a,"focus",H.n(u.gfZ(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ab(a,"blur",H.n(u.gfN(),o),!1,p))
t=u.z
n=W.b8
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ab(s,"keyup",H.n(u.gh2(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ab(s,"keydown",H.n(u.gh0(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ab(a,"mousedown",H.n(u.gh6(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,"mouseup",H.n(u.gha(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,l,H.n(u.gh8(),q),!1,r))
n=u.z
W.mi(a)
m=W.bh;(n&&C.a).h(n,W.ab(a,H.M(W.mi(a)),H.n(u.ghc(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ab(s,l,H.n(u.gfV(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ab(s,"mouseup",H.n(u.gfX(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ab(s,"pointerlockchange",H.n(u.ghe(),o),!1,p))
p=u.z
o=W.b_
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ab(a,"touchstart",H.n(u.ghu(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchend",H.n(u.ghq(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchmove",H.n(u.ghs(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.az(Date.now(),!1)
k.cy=0
k.dA()
return k},
fG:function fG(){},
ao:function ao(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ig:function ig(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a},
ij:function ij(a){this.a=a},
ei:function ei(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iR:function iR(a){this.a=a}},Z={
lH:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ch(c)),35044)
a.bindBuffer(b,null)
return new Z.eu(b,u)},
aL:function(a){return new Z.bP(a)},
eu:function eu(a,b){this.a=a
this.b=b},
dB:function dB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ev:function ev(a){this.a=a},
cw:function cw(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c},
bP:function bP(a){this.a=a}},D={
U:function(){var u=new D.c_()
u.sal(null)
u.saT(null)
u.c=null
u.d=0
return u},
fJ:function fJ(){},
c_:function c_(){var _=this
_.d=_.c=_.b=_.a=null},
h3:function h3(a){this.a=a},
h4:function h4(a){this.a=a},
B:function B(){this.b=null},
bF:function bF(a){this.b=null
this.$ti=a},
bG:function bG(a){this.b=null
this.$ti=a},
O:function O(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bA:function bA(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
af:function af(){},
dR:function dR(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
e5:function e5(){},
ee:function ee(){},
nl:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="testCanvas",a5=null,a6=34067,a7="modifiers",a8=V.oB("Test 014"),a9=W.lq()
a9.className="pageLargeCanvas"
a9.id=a4
a8.a.appendChild(a9)
u=[P.h]
a8.dL(H.c(["Test of Material Lighting shader with different reflections and refractions. No alpha is being used. The background cube maps is being painted onto the object."],u))
a8.i8(H.c(["controls","shapes"],u))
a8.dL(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a4)
if(t==null)H.C(P.D("Failed to find an element with the identifier, testCanvas."))
s=E.oF(t,!0,!0,!0,!1)
r=X.lu(a5)
r.sdS(0,!1)
q=E.mj()
q.sab(0,F.nt())
u=s.f
p=u.a
o=p.createTexture()
p.bindTexture(a6,o)
p.texParameteri(a6,10242,10497)
p.texParameteri(a6,10243,10497)
p.texParameteri(a6,10241,9729)
p.texParameteri(a6,10240,9729)
p.bindTexture(a6,a5)
n=new T.d2()
n.a=0
n.b=o
n.c=!1
n.d=0
u.aS(n,o,"../resources/maskonaive/posx.jpg",34069,!1,!1)
u.aS(n,o,"../resources/maskonaive/negx.jpg",34070,!1,!1)
u.aS(n,o,"../resources/maskonaive/posy.jpg",34071,!1,!1)
u.aS(n,o,"../resources/maskonaive/negy.jpg",34072,!1,!1)
u.aS(n,o,"../resources/maskonaive/posz.jpg",34073,!1,!1)
u.aS(n,o,"../resources/maskonaive/negz.jpg",34074,!1,!1)
m=new O.dW()
m.sf7(O.lr(V.au))
m.e.b_(m.gfJ(),m.gfL())
u=new O.ba(m,"emission")
u.c=new A.ae(!1,!1,!1)
u.f=new V.t(0,0,0)
m.f=u
u=new O.ba(m,"ambient")
u.c=new A.ae(!1,!1,!1)
u.f=new V.t(0,0,0)
m.r=u
u=new O.ba(m,"diffuse")
u.c=new A.ae(!1,!1,!1)
u.f=new V.t(0,0,0)
m.x=u
u=new O.ba(m,"invDiffuse")
u.c=new A.ae(!1,!1,!1)
u.f=new V.t(0,0,0)
m.y=u
u=new O.hI(m,"specular")
u.c=new A.ae(!1,!1,!1)
u.f=new V.t(0,0,0)
u.ch=100
m.z=u
u=new O.hE(m,"bump")
u.c=new A.ae(!1,!1,!1)
m.Q=u
m.ch=null
u=new O.ba(m,"reflect")
u.c=new A.ae(!1,!1,!1)
u.f=new V.t(0,0,0)
m.cx=u
u=new O.hH(m,"refract")
u.c=new A.ae(!1,!1,!1)
u.f=new V.t(0,0,0)
u.ch=1
m.cy=u
u=new O.hD(m,"alpha")
u.c=new A.ae(!1,!1,!1)
u.f=1
m.db=u
u=new D.dR()
u.bm(D.af)
u.sfi(H.c([],[D.bA]))
u.shw(H.c([],[D.e5]))
u.shV(H.c([],[D.ee]))
u.y=u.x=null
u.cU(u.gfH(),u.ghg(),u.ghk())
m.dx=u
p=new O.hG()
p.b=new V.at(0,0,0,0)
p.c=1
p.d=10
p.e=!1
m.dy=p
p=u.x
u=p==null?u.x=D.U():p
u.h(0,m.ghH())
u=m.dx
p=u.y
u=p==null?u.y=D.U():p
p=m.gc0()
u.h(0,p)
m.fr=null
u=m.dx
l=V.lG()
k=U.me(V.mn(V.mu(),l,new V.K(-1,-1,-1)))
j=new V.t(1,1,1)
i=new D.bA()
i.c=new V.t(1,1,1)
i.a=V.mQ()
i.d=V.lG()
i.e=V.oP()
h=i.b
i.b=k
k.gq().h(0,i.geT())
k=new D.O("mover",h,i.b,[U.ai])
k.b=!0
i.aA(k)
if(!i.c.v(0,j)){h=i.c
i.c=j
k=new D.O("color",h,j,[V.t])
k.b=!0
i.aA(k)}u.h(0,i)
u=m.r
u.sp(0,new V.t(0.1,0.1,0.1))
u=m.x
u.sp(0,new V.t(0.1,0.1,0.1))
u=m.z
u.sp(0,new V.t(1,1,1))
u=m.z
u.bq(new A.ae(!0,!1,!1))
u.dC(10)
u=m.ch
if(u!==n){if(u!=null)u.gq().L(0,p)
h=m.ch
m.ch=n
n.gq().h(0,p)
u=new D.O("environment",h,m.ch,[T.d2])
u.b=!0
m.a4(u)}m.cy.saF(0.6)
u=m.cy
u.sp(0,new V.t(0.2,0.3,1))
u=m.cx
u.sp(0,new V.t(0.6,0.6,0.6))
g=new U.cF()
g.bm(U.ai)
g.b_(g.gfF(),g.ghi())
g.e=null
g.f=V.c3()
g.r=0
u=s.r
p=new U.er()
k=U.ls()
k.scR(0,!0)
k.scC(6.283185307179586)
k.scE(0)
k.sa2(0,0)
k.scD(100)
k.sW(0)
k.scm(0.5)
p.b=k
i=p.gaQ()
k.gq().h(0,i)
k=U.ls()
k.scR(0,!0)
k.scC(6.283185307179586)
k.scE(0)
k.sa2(0,0)
k.scD(100)
k.sW(0)
k.scm(0.5)
p.c=k
k.gq().h(0,i)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
f=new X.aB(!1,!1,!1)
h=p.d
p.d=f
k=[X.aB]
i=new D.O(a7,h,f,k)
i.b=!0
p.S(i)
i=p.f
if(i!==!1){p.f=!1
i=new D.O("invertX",i,!1,[P.P])
i.b=!0
p.S(i)}i=p.r
if(i!==!1){p.r=!1
i=new D.O("invertY",i,!1,[P.P])
i.b=!0
p.S(i)}p.b6(u)
g.h(0,p)
u=s.r
p=new U.eq()
i=U.ls()
i.scR(0,!0)
i.scC(6.283185307179586)
i.scE(0)
i.sa2(0,0)
i.scD(100)
i.sW(0)
i.scm(0.2)
p.b=i
i.gq().h(0,p.gaQ())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
f=new X.aB(!0,!1,!1)
h=p.c
p.c=f
i=new D.O(a7,h,f,k)
i.b=!0
p.S(i)
p.b6(u)
g.h(0,p)
u=s.r
p=new U.es()
p.c=0.01
p.e=p.d=0
f=new X.aB(!1,!1,!1)
p.b=f
k=new D.O(a7,a5,f,k)
k.b=!0
p.S(k)
p.b6(u)
g.h(0,p)
g.h(0,U.me(V.bb(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
e=X.mr(g)
d=new M.dF()
d.a=!0
u=E.mj()
c=F.iq()
p=c.a
k=new V.K(-1,-1,1)
k=k.t(0,Math.sqrt(k.C(k)))
b=p.bs(new V.aH(1,2,4,6),new V.at(1,0,0,1),new V.a_(-1,-1,0),new V.a7(0,1),k,a5)
p=c.a
k=new V.K(1,-1,1)
k=k.t(0,Math.sqrt(k.C(k)))
a=p.bs(new V.aH(0,3,4,6),new V.at(0,0,1,1),new V.a_(1,-1,0),new V.a7(1,1),k,a5)
p=c.a
k=new V.K(1,1,1)
k=k.t(0,Math.sqrt(k.C(k)))
a0=p.bs(new V.aH(0,2,5,6),new V.at(0,1,0,1),new V.a_(1,1,0),new V.a7(1,0),k,a5)
p=c.a
k=V.bq()
i=new V.K(-1,1,1)
i=i.t(0,Math.sqrt(i.C(i)))
a1=p.bs(new V.aH(0,2,4,7),new V.at(1,1,0,1),new V.a_(-1,1,0),k,i,a5)
c.d.dJ(H.c([b,a,a0,a1],[F.ap]))
c.ar()
u.sab(0,c)
d.e=u
d.sb7(a5)
d.sbh(0,a5)
d.sbi(a5)
u=new O.eb()
u.b=1.0471975511965976
u.d=new V.t(1,1,1)
h=u.c
u.c=n
n.gq().h(0,u.gc0())
p=new D.O("boxTexture",h,u.c,[T.d2])
p.b=!0
u.a4(p)
d.sbi(u)
d.sbh(0,r)
d.sb7(e)
a2=new M.dJ()
a2.a=!0
a2.sfa(0,O.lr(E.ao))
a2.e.b_(a2.gfP(),a2.gfR())
a2.y=a2.x=a2.r=a2.f=null
a3=X.lu(a5)
a2.sb7(a5)
a2.sbh(0,a3)
a2.sbi(a5)
a2.sb7(e)
a2.sbi(m)
a2.sbh(0,r)
a2.e.h(0,q)
a2.c.sdS(0,!1)
u=M.aD
p=H.c([d,a2],[u])
k=new M.dD()
k.bm(u)
k.e=!0
k.f=!1
k.r=null
k.b_(k.ghm(),k.gho())
k.ag(0,p)
u=s.d
if(u!==k){if(u!=null)u.gq().L(0,s.gd1())
s.d=k
k.gq().h(0,s.gd1())
s.d2()}u=V.mx("controls")
u.cc(0,"Silver",new D.kW(m),!0)
u.a3(0,"Gold",new D.kX(m))
u.a3(0,"Glass",new D.kY(m))
u.a3(0,"Blue Glass",new D.l6(m))
u.a3(0,"Water Bubble",new D.l7(m))
u.a3(0,"No Reflection",new D.l8(m))
u.a3(0,"Pink Distort",new D.l9(m))
u.a3(0,"Cloak",new D.la(m))
u.a3(0,"White and Shiny",new D.lb(m))
u=V.mx("shapes")
u.a3(0,"Cube",new D.lc(q))
u.a3(0,"Cuboid",new D.ld(q))
u.a3(0,"Cylinder",new D.kZ(q))
u.a3(0,"Cone",new D.l_(q))
u.a3(0,"Cylindrical",new D.l0(q))
u.a3(0,"Sphere",new D.l1(q))
u.a3(0,"Spherical",new D.l2(q))
u.cc(0,"Toroid",new D.l3(q),!0)
u.a3(0,"Knot",new D.l4(q))
u=s.z
if(u==null)u=s.z=D.U()
p={func:1,ret:-1,args:[D.B]}
k=H.n(new D.l5(a8,m),p)
if(u.b==null)u.saT(H.c([],[p]))
u=u.b;(u&&C.a).h(u,k)
V.q8(s)},
kW:function kW(a){this.a=a},
kX:function kX(a){this.a=a},
kY:function kY(a){this.a=a},
l6:function l6(a){this.a=a},
l7:function l7(a){this.a=a},
l8:function l8(a){this.a=a},
l9:function l9(a){this.a=a},
la:function la(a){this.a=a},
lb:function lb(a){this.a=a},
lc:function lc(a){this.a=a},
ld:function ld(a){this.a=a},
kV:function kV(){},
kZ:function kZ(a){this.a=a},
l_:function l_(a){this.a=a},
l0:function l0(a){this.a=a},
kU:function kU(){},
l1:function l1(a){this.a=a},
l2:function l2(a){this.a=a},
kT:function kT(){},
l3:function l3(a){this.a=a},
l4:function l4(a){this.a=a},
l5:function l5(a,b){this.a=a
this.b=b}},X={dC:function dC(a,b){this.a=a
this.b=b},dQ:function dQ(a,b){this.a=a
this.b=b},ho:function ho(){var _=this
_.d=_.c=_.b=_.a=null},dU:function dU(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hw:function hw(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aB:function aB(a,b,c){this.a=a
this.b=b
this.c=c},bp:function bp(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hV:function hV(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cM:function cM(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ia:function ia(){},ek:function ek(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iV:function iV(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ep:function ep(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lu:function(a){var u=new X.hc(),t=new V.at(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.mA
if(t==null){t=V.mz(0,0,1,1)
$.mA=t}u.r=t
return u},
mr:function(a){var u,t,s=new X.e4()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gq().h(0,s.gf_())
t=new D.O("mover",u,s.b,[U.ai])
t.b=!0
s.av(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.S().a)){s.c=1.0471975511965976
t=new D.O("fov",t,1.0471975511965976,[P.A])
t.b=!0
s.av(t)}t=s.d
if(!(Math.abs(t-0.1)<$.S().a)){s.d=0.1
t=new D.O("near",t,0.1,[P.A])
t.b=!0
s.av(t)}t=s.e
if(!(Math.abs(t-2000)<$.S().a)){s.e=2000
t=new D.O("far",t,2000,[P.A])
t.b=!0
s.av(t)}return s},
bX:function bX(){},
hc:function hc(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hi:function hi(){this.b=this.a=null},
e4:function e4(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
d_:function d_(){}},V={
qd:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bk(a-b,u)
return(a<0?a+u:a)+b},
Z:function(a,b,c){if(a==null)return C.b.ao("null",c)
return C.b.ao(C.e.eu(Math.abs(a-0)<$.S().a?0:a,b),c+b+1)},
cm:function(a,b,c){var u,t,s,r,q,p=H.c([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.u)(a),++s){r=V.Z(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.e(p,q)
C.a.k(p,q,C.b.ao(p[q],t))}return p},
m_:function(a){return C.e.jk(Math.pow(2,C.S.ct(Math.log(H.pL(a))/Math.log(2))))},
c3:function(){var u=$.mo
return u==null?$.mo=V.bb(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bb:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.au(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mn:function(a,b,c){var u=c.t(0,Math.sqrt(c.C(c))),t=b.aE(u),s=t.t(0,Math.sqrt(t.C(t))),r=u.aE(s),q=new V.K(a.a,a.b,a.c),p=s.T(0).C(q),o=r.T(0).C(q),n=u.T(0).C(q)
return V.bb(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bq:function(){var u=$.mt
return u==null?$.mt=new V.a7(0,0):u},
mu:function(){var u=$.cR
return u==null?$.cR=new V.a_(0,0,0):u},
mz:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e8(a,b,c,d)},
d8:function(){var u=$.mP
return u==null?$.mP=new V.K(0,0,0):u},
oP:function(){var u=$.jm
return u==null?$.jm=new V.K(-1,0,0):u},
lG:function(){var u=$.jn
return u==null?$.jn=new V.K(0,1,0):u},
mQ:function(){var u=$.jo
return u==null?$.jo=new V.K(0,0,1):u},
t:function t(a,b,c){this.a=a
this.b=b
this.c=c},
at:function at(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h2:function h2(a){this.a=a},
dZ:function dZ(a,b,c,d,e,f,g,h,i){var _=this
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
a7:function a7(a,b){this.a=a
this.b=b},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
aH:function aH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e8:function e8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Y:function Y(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
a2:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.D("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.F(a,0)
t=C.b.F(b,0)
s=new V.ie()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
w:function(a){var u=new V.ip()
u.eP(a)
return u},
iU:function(){var u=new V.iT(),t=P.h
u.shW(new H.a5([t,V.cW]))
u.shZ(new H.a5([t,V.d3]))
u.c=null
return u},
bk:function bk(){},
aA:function aA(){},
dV:function dV(){},
av:function av(){this.a=null},
ie:function ie(){this.b=this.a=null},
ip:function ip(){this.a=null},
cW:function cW(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ej:function ej(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(a){this.b=a
this.c=null},
iT:function iT(){this.c=this.b=this.a=null},
d4:function d4(a){this.b=a
this.a=this.c=null},
q8:function(a){P.oG(C.P,new V.lg(a))},
mx:function(a){var u=new V.ic(a),t=document.getElementById(a)
u.c=t
if(t==null)H.C("Failed to find "+a+" for RadioGroup")
return u},
oB:function(a){var u=new V.iu()
u.eQ(a,!0)
return u},
by:function by(){},
lg:function lg(a){this.a=a},
fT:function fT(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hd:function hd(a){var _=this
_.a=a
_.d=_.c=_.b=null},
he:function he(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i8:function i8(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ic:function ic(a){this.a=a
this.c=null},
id:function id(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iu:function iu(){this.b=this.a=null},
iw:function iw(a){this.a=a},
iv:function iv(a){this.a=a},
ix:function ix(a){this.a=a}},U={
ls:function(){var u=new U.fK()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
me:function(a){var u=new U.dE()
u.a=a
return u},
fK:function fK(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dE:function dE(){this.b=this.a=null},
cF:function cF(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ai:function ai(){},
eq:function eq(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
er:function er(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
es:function es(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dD:function dD(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},dF:function dF(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},dJ:function dJ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aD:function aD(){}},A={
oi:function(a,b){var u=a.bb,t=new A.dX(b,u)
t.d_(b,u)
t.eN(a,b)
return t},
oj:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gau(a0)+a1.gau(a1)+a2.gau(a2)+a3.gau(a3)+a4.gau(a4)+a5.gau(a5)+a6.gau(a6)+a7.gau(a7)+a8.gau(a8)+"_"
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
g=$.b2()
if(k){u=$.bu()
g=new Z.bP(g.a|u.a)}if(j){u=$.bt()
g=new Z.bP(g.a|u.a)}if(i){u=$.bs()
g=new Z.bP(g.a|u.a)}return new A.hF(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
kA:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
kB:function(a,b,c){var u
A.kA(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.lj(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
pl:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kA(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
pi:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.kB(b,t,"ambient")
b.a+="\n"},
pj:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.kB(b,t,"diffuse")
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
pm:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.kB(b,t,"invDiffuse")
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
ps:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.kB(b,t,"specular")
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
po:function(a,b){var u,t,s
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
pq:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.kA(b,t,"reflect")
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
pr:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.kA(b,t,"refract")
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
pk:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.i(u)
s=A.lj(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ap()
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
o=H.c([],r)
if(!a.b.a)n=!1
else n=!0
if(n)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
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
pp:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.i(u)
s=A.lj(t)
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
if(typeof u!=="number")return u.ap()
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
l=H.c([],r)
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
l=H.c([],r)
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
k=H.c([],r)
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
pt:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.i(u)
s=A.lj(t)
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
if(typeof u!=="number")return u.ap()
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
j=H.c([],u)
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
j=H.c([],u)
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
i=H.c([],u)
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
pn:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.h])
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
pu:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.a8("")
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
A.pl(a,j)
A.pi(a,j)
A.pj(a,j)
A.pm(a,j)
A.ps(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.pq(a,j)
A.pr(a,j)}A.po(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.pk(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.pp(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.pt(a,q[o],j)
A.pn(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.c([],[P.h])
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
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ah(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ah(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ah(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
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
pv:function(a,b){var u,t,s
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
px:function(a,b){var u
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
pw:function(a,b){var u
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
pz:function(a,b){var u,t
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
pA:function(a,b){var u,t
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
py:function(a,b){var u
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
pB:function(a,b){var u
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
lj:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.ah(a,1)},
lD:function(a,b,c,d,e){var u=new A.j2(a,c,e)
u.f=d
u.si6(P.og(d,0,P.l))
return u},
dz:function dz(a,b,c){this.a=a
this.b=b
this.c=c},
fz:function fz(a){this.a=a},
ae:function ae(a,b,c){this.a=a
this.b=b
this.c=c},
dX:function dX(a,b){var _=this
_.jv=_.ju=_.dY=_.dX=_.bb=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jI=_.jH=_.jG=_.cs=_.cr=_.cq=_.cp=_.co=_.cn=_.jF=_.jE=_.e4=_.jD=_.jC=_.e3=_.e2=_.jB=_.jA=_.e1=_.e0=_.jz=_.jy=_.e_=_.jx=_.jw=_.dZ=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aP:function aP(a,b){this.a=a
this.b=b},
aT:function aT(a,b){this.a=a
this.b=b},
aX:function aX(a,b){this.a=a
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
_.bb=b3
_.dX=b4},
c9:function c9(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ca:function ca(a,b,c,d,e,f,g,h,i,j){var _=this
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
cV:function cV(){},
ec:function ec(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
el:function el(){},
j7:function j7(a){this.a=a},
aK:function aK(a,b,c){this.a=a
this.c=b
this.d=c},
j4:function j4(a,b,c){this.a=a
this.c=b
this.d=c},
j5:function j5(a,b,c){this.a=a
this.c=b
this.d=c},
j6:function j6(a,b,c){this.a=a
this.c=b
this.d=c},
j2:function j2(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
aa:function aa(a,b,c){this.a=a
this.c=b
this.d=c},
j3:function j3(a,b,c){this.a=a
this.c=b
this.d=c},
a0:function a0(a,b,c){this.a=a
this.c=b
this.d=c},
d5:function d5(a,b,c){this.a=a
this.c=b
this.d=c},
j8:function j8(a,b,c){this.a=a
this.c=b
this.d=c},
d6:function d6(a,b,c){this.a=a
this.c=b
this.d=c},
ax:function ax(a,b,c){this.a=a
this.c=b
this.d=c},
cb:function cb(a,b,c){this.a=a
this.c=b
this.d=c},
bO:function bO(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lW:function(a,b,c,d){var u=F.iq()
F.dn(u,b,c,d,a,1,0,0,1)
F.dn(u,b,c,d,a,0,1,0,3)
F.dn(u,b,c,d,a,0,0,1,2)
F.dn(u,b,c,d,a,-1,0,0,0)
F.dn(u,b,c,d,a,0,-1,0,0)
F.dn(u,b,c,d,a,0,0,-1,3)
u.ar()
return u},
kv:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dn:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.K(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.K(u+a3,t+a1,s+a2)
q=new V.K(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.K(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.kv(i)
l=F.kv(j.b)
k=F.m2(d,a0,new F.ku(j,F.kv(j.c),F.kv(j.d),l,m,c),b)
if(k!=null)a.be(k)},
ne:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.iq()
t=b?-1:1
s=-6.283185307179586/e
r=H.c([],[F.ap])
q=u.a
p=new V.K(0,0,t)
p=p.t(0,Math.sqrt(p.C(p)))
C.a.h(r,q.ib(new V.aH(a,-1,-1,-1),new V.at(1,1,1,1),new V.a_(0,0,c),new V.K(0,0,t),new V.a7(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.E(k)
j=new V.K(m,l,t).t(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.et(new V.aH(a,-1,-1,-1),null,new V.at(i,g,h,1),new V.a_(m*k,l*k,c),new V.K(0,0,t),new V.a7(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.dJ(r)
return u},
nb:function(a,b,c){return F.nc(!0,a,1,new F.kG(1,c),b)},
nc:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.m2(c,e,new F.kI(d),null)
if(u==null)return
u.ar()
u.cd()
if(b)u.be(F.ne(3,!1,1,new F.kJ(d),e))
u.be(F.ne(1,!0,-1,new F.kK(d),e))
return u},
nr:function(a,b,c){var u,t={}
t.a=b
if(b==null)t.a=new F.lh()
u=F.lW(a,null,new F.li(t,1),c)
u.cd()
return u},
nt:function(){return F.nd(15,30,0.5,1,new F.lk())},
q1:function(){return F.nd(12,120,0.3,1,new F.kS(3,2))},
nd:function(a,b,c,d,e){var u=F.m2(a,b,new F.kH(e,d,b,c),null)
if(u==null)return
u.ar()
u.cd()
return u},
m2:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.iq()
t=H.c([],[F.ap])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.et(g,g,new V.at(p,0,0,1),g,g,new V.a7(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cl(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.et(g,g,new V.at(j,i,h,1),g,g,new V.a7(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cl(d))}}u.d.ia(a+1,b+1,t)
return u},
cC:function(a,b,c){var u=new F.a9(),t=a.a
if(t==null)H.C(P.D("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.C(P.D("May not create a face with vertices attached to different shapes."))
u.ca(a)
u.cb(b)
u.hO(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a5()
return u},
oc:function(a,b){var u=new F.bo(),t=a.a
if(t==null)H.C(P.D("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.C(P.D("May not create a line with vertices attached to different shapes."))
u.ca(a)
u.cb(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a5()
return u},
iq:function(){var u=new F.ea(),t=new F.jp(u)
t.b=!1
t.si7(H.c([],[F.ap]))
u.a=t
t=new F.it(u)
t.sc2(H.c([],[F.bK]))
u.b=t
t=new F.is(u)
t.sfs(H.c([],[F.bo]))
u.c=t
t=new F.ir(u)
t.sfl(H.c([],[F.a9]))
u.d=t
u.e=null
return u},
et:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ap(),r=new F.jx()
r.sc2(H.c([],[F.bK]))
s.b=r
r=new F.jt()
u=[F.bo]
r.sft(H.c([],u))
r.sfu(H.c([],u))
s.c=r
r=new F.jq()
u=[F.a9]
r.sfm(H.c([],u))
r.sfn(H.c([],u))
r.sfo(H.c([],u))
s.d=r
h=$.nH()
s.e=0
r=$.b2()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bu().a)!==0?e:t
s.x=(u&$.bt().a)!==0?b:t
s.y=(u&$.bT().a)!==0?f:t
s.z=(u&$.bU().a)!==0?g:t
s.Q=(u&$.nI().a)!==0?c:t
s.ch=(u&$.cs().a)!==0?i:0
s.cx=(u&$.bs().a)!==0?a:t
return s},
ku:function ku(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kG:function kG(a,b){this.a=a
this.b=b},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
lh:function lh(){},
li:function li(a,b){this.a=a
this.b=b},
lk:function lk(){},
kS:function kS(a,b){this.a=a
this.b=b},
kH:function kH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h5:function h5(){},
iy:function iy(){},
bo:function bo(){this.b=this.a=null},
hq:function hq(){},
j1:function j1(){},
bK:function bK(){this.a=null},
ea:function ea(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ir:function ir(a){this.a=a
this.b=null},
is:function is(a){this.a=a
this.b=null},
it:function it(a){this.a=a
this.b=null},
ap:function ap(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jz:function jz(a){this.a=a},
jy:function jy(a){this.a=a},
jp:function jp(a){this.a=a
this.c=this.b=null},
jq:function jq(){this.d=this.c=this.b=null},
jr:function jr(a,b){this.a=a
this.b=b},
js:function js(a,b){this.a=a
this.b=b},
jt:function jt(){this.c=this.b=null},
jv:function jv(){},
ju:function ju(){},
jw:function jw(){},
i2:function i2(){},
jx:function jx(){this.b=null}},T={d1:function d1(){},d2:function d2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},iP:function iP(a){var _=this
_.a=a
_.e=_.d=_.c=null},iQ:function iQ(a,b,c,d,e,f,g){var _=this
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
H.ly.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gI:function(a){return H.cS(a)},
i:function(a){return"Instance of '"+H.i(H.cT(a))+"'"}}
J.hl.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iP:1}
J.dO.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.dP.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.i7.prototype={}
J.cd.prototype={}
J.bI.prototype={
i:function(a){var u=a[$.nv()]
if(u==null)return this.eJ(a)
return"JavaScript function for "+H.i(J.ar(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibD:1}
J.b7.prototype={
h:function(a,b){H.F(b,H.q(a,0))
if(!!a.fixed$length)H.C(P.J("add"))
a.push(b)},
el:function(a,b){if(!!a.fixed$length)H.C(P.J("removeAt"))
if(b<0||b>=a.length)throw H.d(P.e7(b,null))
return a.splice(b,1)[0]},
L:function(a,b){var u
if(!!a.fixed$length)H.C(P.J("remove"))
for(u=0;u<a.length;++u)if(J.W(a[u],b)){a.splice(u,1)
return!0}return!1},
ag:function(a,b){var u,t
H.m(b,"$ij",[H.q(a,0)],"$aj")
if(!!a.fixed$length)H.C(P.J("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.u)(b),++t)a.push(b[t])},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.d(P.bl(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.i(a[u]))
return t.join(b)},
iR:function(a){return this.m(a,"")},
iJ:function(a,b,c,d){var u,t,s
H.F(b,d)
H.n(c,{func:1,ret:d,args:[d,H.q(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.d(P.bl(a))}return t},
iI:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.P,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.G(b.$1(s)))return s
if(a.length!==u)throw H.d(P.bl(a))}throw H.d(H.hk())},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
eG:function(a,b,c){if(b<0||b>a.length)throw H.d(P.aj(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.aj(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.q(a,0)])
return H.c(a.slice(b,c),[H.q(a,0)])},
giH:function(a){if(a.length>0)return a[0]
throw H.d(H.hk())},
gay:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.hk())},
dN:function(a,b){var u,t
H.n(b,{func:1,ret:P.P,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.G(b.$1(a[t])))return!0
if(a.length!==u)throw H.d(P.bl(a))}return!1},
bH:function(a,b){var u=H.q(a,0)
H.n(b,{func:1,ret:P.l,args:[u,u]})
if(!!a.immutable$list)H.C(P.J("sort"))
H.ed(a,0,a.length-1,b,u)},
V:function(a,b){var u
for(u=0;u<a.length;++u)if(J.W(a[u],b))return!0
return!1},
i:function(a){return P.lv(a,"[","]")},
gU:function(a){return new J.as(a,a.length,[H.q(a,0)])},
gI:function(a){return H.cS(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.C(P.J("set length"))
if(b<0)throw H.d(P.aj(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.d(H.cl(a,b))
return a[b]},
k:function(a,b,c){H.F(c,H.q(a,0))
if(!!a.immutable$list)H.C(P.J("indexed set"))
if(b>=a.length||b<0)throw H.d(H.cl(a,b))
a[b]=c},
$ij:1,
$ib:1}
J.lx.prototype={}
J.as.prototype={
gJ:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.u(s))
u=t.c
if(u>=r){t.sd4(null)
return!1}t.sd4(s[u]);++t.c
return!0},
sd4:function(a){this.d=H.F(a,H.q(this,0))},
$ib6:1}
J.cI.prototype={
ip:function(a,b){var u
H.nm(b)
if(typeof b!=="number")throw H.d(H.b1(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbw(b)
if(this.gbw(a)===u)return 0
if(this.gbw(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbw:function(a){return a===0?1/a<0:a<0},
jk:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.J(""+a+".toInt()"))},
ct:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.J(""+a+".floor()"))},
as:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.J(""+a+".round()"))},
eu:function(a,b){var u
if(b>20)throw H.d(P.aj(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbw(a))return"-"+u
return u},
bj:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.aj(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.X(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.C(P.J("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.w("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bk:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eM:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dE(a,b)},
af:function(a,b){return(a|0)===a?a/b|0:this.dE(a,b)},
dE:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.J("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aV:function(a,b){var u
if(a>0)u=this.dD(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hT:function(a,b){if(b<0)throw H.d(H.b1(b))
return this.dD(a,b)},
dD:function(a,b){return b>31?0:a>>>b},
$iA:1,
$iac:1}
J.dN.prototype={$il:1}
J.dM.prototype={}
J.bH.prototype={
X:function(a,b){if(b<0)throw H.d(H.cl(a,b))
if(b>=a.length)H.C(H.cl(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.d(H.cl(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(typeof b!=="string")throw H.d(P.lo(b,null,null))
return a+b},
aY:function(a,b,c,d){var u,t
c=P.bL(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ac:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.aj(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a9:function(a,b){return this.ac(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.C(H.b1(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.R()
if(b<0)throw H.d(P.e7(b,null))
if(b>c)throw H.d(P.e7(b,null))
if(c>a.length)throw H.d(P.e7(c,null))
return a.substring(b,c)},
ah:function(a,b){return this.u(a,b,null)},
jn:function(a){return a.toLowerCase()},
w:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ao:function(a,b){var u=b-a.length
if(u<=0)return a
return this.w(" ",u)+a},
bv:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.aj(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eb:function(a,b){return this.bv(a,b,0)},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$imq:1,
$ih:1}
H.r.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.b.X(this.a,b)},
$ad7:function(){return[P.l]},
$ay:function(){return[P.l]},
$aj:function(){return[P.l]},
$ab:function(){return[P.l]}}
H.h_.prototype={}
H.c2.prototype={
gU:function(a){var u=this
return new H.cJ(u,u.gn(u),[H.am(u,"c2",0)])},
bF:function(a,b){return this.eI(0,H.n(b,{func:1,ret:P.P,args:[H.am(this,"c2",0)]}))}}
H.cJ.prototype={
gJ:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=J.dr(s),q=r.gn(s)
if(t.b!==q)throw H.d(P.bl(s))
u=t.c
if(u>=q){t.sb2(null)
return!1}t.sb2(r.K(s,u));++t.c
return!0},
sb2:function(a){this.d=H.F(a,H.q(this,0))},
$ib6:1}
H.hA.prototype={
gU:function(a){return new H.hB(J.bv(this.a),this.b,this.$ti)},
gn:function(a){return J.aE(this.a)},
K:function(a,b){return this.b.$1(J.fv(this.a,b))},
$aj:function(a,b){return[b]}}
H.hB.prototype={
B:function(){var u=this,t=u.b
if(t.B()){u.sb2(u.c.$1(t.gJ(t)))
return!0}u.sb2(null)
return!1},
gJ:function(a){return this.a},
sb2:function(a){this.a=H.F(a,H.q(this,1))},
$ab6:function(a,b){return[b]}}
H.hC.prototype={
gn:function(a){return J.aE(this.a)},
K:function(a,b){return this.b.$1(J.fv(this.a,b))},
$ac2:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.d9.prototype={
gU:function(a){return new H.jB(J.bv(this.a),this.b,this.$ti)}}
H.jB.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(H.G(t.$1(u.gJ(u))))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.c0.prototype={}
H.d7.prototype={
k:function(a,b,c){H.F(c,H.am(this,"d7",0))
throw H.d(P.J("Cannot modify an unmodifiable list"))}}
H.en.prototype={}
H.fM.prototype={
i:function(a){return P.lB(this)},
k:function(a,b,c){H.F(b,H.q(this,0))
H.F(c,H.q(this,1))
return H.o2()},
$iz:1}
H.fN.prototype={
gn:function(a){return this.a},
bt:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bt(0,b))return
return this.dj(b)},
dj:function(a){return this.b[H.M(a)]},
H:function(a,b){var u,t,s,r,q=this,p=H.q(q,1)
H.n(b,{func:1,ret:-1,args:[H.q(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.F(q.dj(r),p))}}}
H.iZ.prototype={
an:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.i3.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hn.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.jb.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ll.prototype={
$1:function(a){if(!!J.R(a).$ibC)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:24}
H.f3.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaw:1}
H.cy.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ibD:1,
gjo:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iM.prototype={}
H.iC.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cr(u)+"'"}}
H.cu.prototype={
v:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cu))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cS(this.a)
else u=typeof t!=="object"?J.dw(t):H.cS(t)
return(u^H.cS(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.i(H.cT(u))+"'")}}
H.j0.prototype={
i:function(a){return this.a}}
H.fI.prototype={
i:function(a){return this.a}}
H.im.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.jC.prototype={
i:function(a){return"Assertion failed: "+P.dK(this.a)}}
H.a5.prototype={
gn:function(a){return this.a},
giQ:function(a){return this.a===0},
gaa:function(a){return new H.hs(this,[H.q(this,0)])},
bt:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.df(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.df(t,b)}else return s.iN(b)},
iN:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cw(u.bP(t,u.cv(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bn(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bn(r,b)
s=t==null?null:t.b
return s}else return q.iO(b)},
iO:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bP(r,s.cv(a))
t=s.cw(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.F(b,H.q(s,0))
H.F(c,H.q(s,1))
if(typeof b==="string"){u=s.b
s.d5(u==null?s.b=s.bZ():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.d5(t==null?s.c=s.bZ():t,b,c)}else s.iP(b,c)},
iP:function(a,b){var u,t,s,r,q=this
H.F(a,H.q(q,0))
H.F(b,H.q(q,1))
u=q.d
if(u==null)u=q.d=q.bZ()
t=q.cv(a)
s=q.bP(u,t)
if(s==null)q.c8(u,t,[q.c_(a,b)])
else{r=q.cw(s,a)
if(r>=0)s[r].b=b
else s.push(q.c_(a,b))}},
H:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.q(s,0),H.q(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.d(P.bl(s))
u=u.c}},
d5:function(a,b,c){var u,t=this
H.F(b,H.q(t,0))
H.F(c,H.q(t,1))
u=t.bn(a,b)
if(u==null)t.c8(a,b,t.c_(b,c))
else u.b=c},
fC:function(){this.r=this.r+1&67108863},
c_:function(a,b){var u,t=this,s=new H.hr(H.F(a,H.q(t,0)),H.F(b,H.q(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fC()
return s},
cv:function(a){return J.dw(a)&0x3ffffff},
cw:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.W(a[t].a,b))return t
return-1},
i:function(a){return P.lB(this)},
bn:function(a,b){return a[b]},
bP:function(a,b){return a[b]},
c8:function(a,b,c){a[b]=c},
fg:function(a,b){delete a[b]},
df:function(a,b){return this.bn(a,b)!=null},
bZ:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c8(t,u,t)
this.fg(t,u)
return t}}
H.hr.prototype={}
H.hs.prototype={
gn:function(a){return this.a.a},
gU:function(a){var u=this.a,t=new H.ht(u,u.r,this.$ti)
t.c=u.e
return t}}
H.ht.prototype={
gJ:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bl(t))
else{t=u.c
if(t==null){u.sdi(null)
return!1}else{u.sdi(t.a)
u.c=u.c.c
return!0}}},
sdi:function(a){this.d=H.F(a,H.q(this,0))},
$ib6:1}
H.kO.prototype={
$1:function(a){return this.a(a)},
$S:24}
H.kP.prototype={
$2:function(a,b){return this.a(a,b)},
$S:42}
H.kQ.prototype={
$1:function(a){return this.a(H.M(a))},
$S:44}
H.hm.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imq:1,
$iox:1}
H.cN.prototype={$icN:1}
H.bJ.prototype={$ibJ:1,$ioH:1}
H.e_.prototype={
gn:function(a){return a.length},
$iL:1,
$aL:function(){}}
H.cO.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pQ(c)
H.bj(b,a,a.length)
a[b]=c},
$ac0:function(){return[P.A]},
$ay:function(){return[P.A]},
$ij:1,
$aj:function(){return[P.A]},
$ib:1,
$ab:function(){return[P.A]}}
H.e0.prototype={
k:function(a,b,c){H.ad(c)
H.bj(b,a,a.length)
a[b]=c},
$ac0:function(){return[P.l]},
$ay:function(){return[P.l]},
$ij:1,
$aj:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]}}
H.hW.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hX.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hY.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hZ.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.i_.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.e1.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bj(b,a,a.length)
return a[b]},
$iqy:1}
H.cP.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bj(b,a,a.length)
return a[b]},
$icP:1,
$iQ:1}
H.de.prototype={}
H.df.prototype={}
H.dg.prototype={}
H.dh.prototype={}
P.jE.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:31}
P.jD.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:35}
P.jF.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jG.prototype={
$0:function(){this.a.$0()},
$S:0}
P.f9.prototype={
eY:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ck(new P.kk(this,b),0),a)
else throw H.d(P.J("`setTimeout()` not found."))},
eZ:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ck(new P.kj(this,a,Date.now(),b),0),a)
else throw H.d(P.J("Periodic timer."))},
$ibe:1}
P.kk.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.kj.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.eM(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bi.prototype={
iT:function(a){if((this.c&15)!==6)return!0
return this.b.b.cN(H.n(this.d,{func:1,ret:P.P,args:[P.V]}),a.a,P.P,P.V)},
iL:function(a){var u=this.e,t=P.V,s={futureOr:1,type:H.q(this,1)},r=this.b.b
if(H.fs(u,{func:1,args:[P.V,P.aw]}))return H.lX(r.jf(u,a.a,a.b,null,t,P.aw),s)
else return H.lX(r.cN(H.n(u,{func:1,args:[P.V]}),a.a,null,t),s)}}
P.aM.prototype={
es:function(a,b,c){var u,t,s,r=H.q(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a3
if(u!==C.f){H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pD(b,u)}t=new P.aM($.a3,[c])
s=b==null?1:3
this.d6(new P.bi(t,s,a,b,[r,c]))
return t},
jj:function(a,b){return this.es(a,null,b)},
d6:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibi")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaM")
s=u.a
if(s<4){u.d6(a)
return}t.a=s
t.c=u.c}P.kE(null,null,t.b,H.n(new P.jP(t,a),{func:1,ret:-1}))}},
dw:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibi")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaM")
u=q.a
if(u<4){q.dw(a)
return}p.a=u
p.c=q.c}o.a=p.bp(a)
P.kE(null,null,p.b,H.n(new P.jT(o,p),{func:1,ret:-1}))}},
c4:function(){var u=H.f(this.c,"$ibi")
this.c=null
return this.bp(u)},
bp:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
da:function(a){var u,t,s=this,r=H.q(s,0)
H.lX(a,{futureOr:1,type:r})
u=s.$ti
if(H.lT(a,"$icE",u,"$acE"))if(H.lT(a,"$iaM",u,null))P.mR(a,s)
else P.oU(a,s)
else{t=s.c4()
H.F(a,r)
s.a=4
s.c=a
P.dc(s,t)}},
dc:function(a,b){var u,t=this
H.f(b,"$iaw")
u=t.c4()
t.a=8
t.c=new P.an(a,b)
P.dc(t,u)},
$icE:1}
P.jP.prototype={
$0:function(){P.dc(this.a,this.b)},
$S:0}
P.jT.prototype={
$0:function(){P.dc(this.b,this.a.a)},
$S:0}
P.jQ.prototype={
$1:function(a){var u=this.a
u.a=0
u.da(a)},
$S:31}
P.jR.prototype={
$2:function(a,b){H.f(b,"$iaw")
this.a.dc(a,b)},
$1:function(a){return this.$2(a,null)},
$S:57}
P.jS.prototype={
$0:function(){this.a.dc(this.b,this.c)},
$S:0}
P.jW.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.ep(H.n(s.d,{func:1}),null)}catch(r){u=H.ak(r)
t=H.cp(r)
if(o.d){s=H.f(o.a.a.c,"$ian").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$ian")
else q.b=new P.an(u,t)
q.a=!0
return}if(!!J.R(n).$icE){if(n instanceof P.aM&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$ian")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jj(new P.jX(p),null)
s.a=!1}},
$S:3}
P.jX.prototype={
$1:function(a){return this.a},
$S:54}
P.jV.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.q(s,0)
q=H.F(n.c,r)
p=H.q(s,1)
n.a.b=s.b.b.cN(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ak(o)
t=H.cp(o)
s=n.a
s.b=new P.an(u,t)
s.a=!0}},
$S:3}
P.jU.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$ian")
r=m.c
if(H.G(r.iT(u))&&r.e!=null){q=m.b
q.b=r.iL(u)
q.a=!1}}catch(p){t=H.ak(p)
s=H.cp(p)
r=H.f(m.a.a.c,"$ian")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.an(t,s)
n.a=!0}},
$S:3}
P.ew.prototype={}
P.iF.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aM($.a3,[P.l])
r.a=0
u=H.q(s,0)
t=H.n(new P.iH(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iI(r,q),{func:1,ret:-1})
W.ab(s.a,s.b,t,!1,u)
return q}}
P.iH.prototype={
$1:function(a){H.F(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.q(this.b,0)]}}}
P.iI.prototype={
$0:function(){this.b.da(this.a.a)},
$S:0}
P.cY.prototype={}
P.iG.prototype={}
P.be.prototype={}
P.an.prototype={
i:function(a){return H.i(this.a)},
$ibC:1}
P.kt.prototype={$iqN:1}
P.kD.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e3():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.i(0)
throw u},
$S:0}
P.k2.prototype={
jg:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.a3){a.$0()
return}P.n1(r,r,this,a,-1)}catch(s){u=H.ak(s)
t=H.cp(s)
P.kC(r,r,this,u,H.f(t,"$iaw"))}},
jh:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.F(b,c)
try{if(C.f===$.a3){a.$1(b)
return}P.n2(r,r,this,a,b,-1,c)}catch(s){u=H.ak(s)
t=H.cp(s)
P.kC(r,r,this,u,H.f(t,"$iaw"))}},
il:function(a,b){return new P.k4(this,H.n(a,{func:1,ret:b}),b)},
ce:function(a){return new P.k3(this,H.n(a,{func:1,ret:-1}))},
dP:function(a,b){return new P.k5(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
ep:function(a,b){H.n(a,{func:1,ret:b})
if($.a3===C.f)return a.$0()
return P.n1(null,null,this,a,b)},
cN:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.F(b,d)
if($.a3===C.f)return a.$1(b)
return P.n2(null,null,this,a,b,c,d)},
jf:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.F(b,e)
H.F(c,f)
if($.a3===C.f)return a.$2(b,c)
return P.pE(null,null,this,a,b,c,d,e,f)}}
P.k4.prototype={
$0:function(){return this.a.ep(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.k3.prototype={
$0:function(){return this.a.jg(this.b)},
$S:3}
P.k5.prototype={
$1:function(a){var u=this.c
return this.a.jh(this.b,H.F(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k0.prototype={
gU:function(a){var u=this,t=new P.eL(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
V:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$ice")!=null}else{t=this.fb(b)
return t}},
fb:function(a){var u=this.d
if(u==null)return!1
return this.bN(this.dk(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.F(b,H.q(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d7(u==null?s.b=P.lJ():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d7(t==null?s.c=P.lJ():t,b)}else return s.f1(0,b)},
f1:function(a,b){var u,t,s,r=this
H.F(b,H.q(r,0))
u=r.d
if(u==null)u=r.d=P.lJ()
t=r.dd(b)
s=u[t]
if(s==null)u[t]=[r.bK(b)]
else{if(r.bN(s,b)>=0)return!1
s.push(r.bK(b))}return!0},
L:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hC(this.c,b)
else return this.hB(0,b)},
hB:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dk(r,b)
t=s.bN(u,b)
if(t<0)return!1
s.dF(u.splice(t,1)[0])
return!0},
d7:function(a,b){H.F(b,H.q(this,0))
if(H.f(a[b],"$ice")!=null)return!1
a[b]=this.bK(b)
return!0},
hC:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$ice")
if(u==null)return!1
this.dF(u)
delete a[b]
return!0},
d9:function(){this.r=1073741823&this.r+1},
bK:function(a){var u,t=this,s=new P.ce(H.F(a,H.q(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.d9()
return s},
dF:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.d9()},
dd:function(a){return J.dw(a)&1073741823},
dk:function(a,b){return a[this.dd(b)]},
bN:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.W(a[t].a,b))return t
return-1}}
P.ce.prototype={}
P.eL.prototype={
gJ:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bl(t))
else{t=u.c
if(t==null){u.sd8(null)
return!1}else{u.sd8(H.F(t.a,H.q(u,0)))
u.c=u.c.b
return!0}}},
sd8:function(a){this.d=H.F(a,H.q(this,0))},
$ib6:1}
P.hu.prototype={
$2:function(a,b){this.a.k(0,H.F(a,this.b),H.F(b,this.c))},
$S:7}
P.hv.prototype={$ij:1,$ib:1}
P.y.prototype={
gU:function(a){return new H.cJ(a,this.gn(a),[H.co(this,a,"y",0)])},
K:function(a,b){return this.j(a,b)},
jm:function(a,b){var u,t=this,s=H.c([],[H.co(t,a,"y",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
jl:function(a){return this.jm(a,!0)},
iF:function(a,b,c,d){var u
H.F(d,H.co(this,a,"y",0))
P.bL(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.lv(a,"[","]")}}
P.hx.prototype={}
P.hy.prototype={
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
H.n(b,{func:1,ret:-1,args:[H.co(s,a,"ag",0),H.co(s,a,"ag",1)]})
for(u=J.bv(s.gaa(a));u.B();){t=u.gJ(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aE(this.gaa(a))},
i:function(a){return P.lB(a)},
$iz:1}
P.kl.prototype={
k:function(a,b,c){H.F(b,H.q(this,0))
H.F(c,H.q(this,1))
throw H.d(P.J("Cannot modify unmodifiable map"))}}
P.hz.prototype={
j:function(a,b){return J.dv(this.a,b)},
k:function(a,b,c){J.lm(this.a,H.F(b,H.q(this,0)),H.F(c,H.q(this,1)))},
H:function(a,b){J.m6(this.a,H.n(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]}))},
gn:function(a){return J.aE(this.a)},
i:function(a){return J.ar(this.a)},
$iz:1}
P.eo.prototype={}
P.k7.prototype={
ag:function(a,b){var u
for(u=J.bv(H.m(b,"$ij",this.$ti,"$aj"));u.B();)this.h(0,u.gJ(u))},
i:function(a){return P.lv(this,"{","}")},
K:function(a,b){var u,t,s,r=this
P.my(b,"index")
for(u=P.oY(r,r.r,H.q(r,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.d(P.a1(b,r,"index",null,t))},
$ij:1,
$imB:1}
P.eM.prototype={}
P.ff.prototype={}
P.fE.prototype={
iV:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bL(a0,a1,b.length)
u=$.nK()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.F(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kN(C.b.F(b,n))
j=H.kN(C.b.F(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.b.X("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.a8("")
g=r.a+=C.b.u(b,s,t)
r.a=g+H.c6(m)
s=n
continue}}throw H.d(P.a6("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.u(b,s,a1)
f=g.length
if(q>=0)P.ma(b,p,a1,q,o,f)
else{e=C.d.bk(f-1,4)+1
if(e===1)throw H.d(P.a6(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aY(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.ma(b,p,a1,q,o,d)
else{e=C.d.bk(d,4)
if(e===1)throw H.d(P.a6(c,b,a1))
if(e>1)b=C.b.aY(b,a1,a1,e===2?"==":"=")}return b},
$abZ:function(){return[[P.b,P.l],P.h]}}
P.fF.prototype={
$abz:function(){return[[P.b,P.l],P.h]}}
P.bZ.prototype={}
P.bz.prototype={}
P.h1.prototype={
$abZ:function(){return[P.h,[P.b,P.l]]}}
P.hh.prototype={
i:function(a){return this.a}}
P.hg.prototype={
fd:function(a,b,c){var u,t,s,r,q,p,o=null
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
if(r>b)q.a+=C.b.u(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nV(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abz:function(){return[P.h,P.h]}}
P.jj.prototype={
giE:function(){return C.N}}
P.jl.prototype={
ck:function(a){var u,t,s=P.bL(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kr(u)
if(t.fp(a,0,s)!==s)t.dH(J.nR(a,s-1),0)
return new Uint8Array(u.subarray(0,H.pe(0,t.b,u.length)))},
$abz:function(){return[P.h,[P.b,P.l]]}}
P.kr.prototype={
dH:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fp:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.X(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.F(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dH(r,C.b.F(a,p)))s=p}else if(r<=2047){q=n.b
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
P.jk.prototype={
ck:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[P.l],"$ab")
u=P.oK(!1,a,0,null)
if(u!=null)return u
t=P.bL(0,null,J.aE(a))
s=P.n4(a,0,t)
if(s>0){r=P.cZ(a,0,s)
if(s===t)return r
q=new P.a8(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.a8("")
n=new P.kq(!1,q)
n.c=o
n.iq(a,p,t)
if(n.e>0){H.C(P.a6("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c6(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abz:function(){return[[P.b,P.l],P.h]}}
P.kq.prototype={
iq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.m(a,"$ib",[P.l],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.dr(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.ap()
if((o&192)!==128){n=P.a6(h+C.d.bj(o,16),a,p)
throw H.d(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.e(C.w,n)
if(u<=C.w[n]){n=P.a6("Overlong encoding of 0x"+C.d.bj(u,16),a,p-s-1)
throw H.d(n)}if(u>1114111){n=P.a6("Character outside valid Unicode range: 0x"+C.d.bj(u,16),a,p-s-1)
throw H.d(n)}if(!i.c||u!==65279)q.a+=H.c6(u)
i.c=!1}for(n=p<c;n;){m=P.n4(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cZ(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.R()
if(o<0){j=P.a6("Negative UTF-8 code unit: -0x"+C.d.bj(-o,16),a,k-1)
throw H.d(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a6(h+C.d.bj(o,16),a,k-1)
throw H.d(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.P.prototype={}
P.az.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.az&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.d.aV(u,30))&1073741823},
i:function(a){var u=this,t=P.o3(H.ot(u)),s=P.dG(H.or(u)),r=P.dG(H.on(u)),q=P.dG(H.oo(u)),p=P.dG(H.oq(u)),o=P.dG(H.os(u)),n=P.o4(H.op(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.A.prototype={}
P.bB.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.bB&&this.a===b.a},
gI:function(a){return C.d.gI(this.a)},
i:function(a){var u,t,s,r=new P.fZ(),q=this.a
if(q<0)return"-"+new P.bB(0-q).i(0)
u=r.$1(C.d.af(q,6e7)%60)
t=r.$1(C.d.af(q,1e6)%60)
s=new P.fY().$1(q%1e6)
return""+C.d.af(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.fY.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:17}
P.fZ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:17}
P.bC.prototype={}
P.fy.prototype={
i:function(a){return"Assertion failed"}}
P.e3.prototype={
i:function(a){return"Throw of null."}}
P.aO.prototype={
gbM:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbL:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbM()+o+u
if(!q.a)return t
s=q.gbL()
r=P.dK(q.b)
return t+s+": "+r}}
P.c7.prototype={
gbM:function(){return"RangeError"},
gbL:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.hj.prototype={
gbM:function(){return"RangeError"},
gbL:function(){var u,t=H.ad(this.b)
if(typeof t!=="number")return t.R()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gn:function(a){return this.f}}
P.jc.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.j9.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cX.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fL.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dK(u)+"."}}
P.i6.prototype={
i:function(a){return"Out of Memory"},
$ibC:1}
P.ef.prototype={
i:function(a){return"Stack Overflow"},
$ibC:1}
P.fS.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eE.prototype={
i:function(a){return"Exception: "+this.a}}
P.hb.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.u(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.F(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.X(f,q)
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
return h+l+j+k+"\n"+C.b.w(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.i(g)+")"):h}}
P.bD.prototype={}
P.l.prototype={}
P.j.prototype={
bF:function(a,b){var u=H.am(this,"j",0)
return new H.d9(this,H.n(b,{func:1,ret:P.P,args:[u]}),[u])},
gn:function(a){var u,t=this.gU(this)
for(u=0;t.B();)++u
return u},
gaO:function(a){var u,t=this.gU(this)
if(!t.B())throw H.d(H.hk())
u=t.gJ(t)
if(t.B())throw H.d(H.o9())
return u},
K:function(a,b){var u,t,s
P.my(b,"index")
for(u=this.gU(this),t=0;u.B();){s=u.gJ(u)
if(b===t)return s;++t}throw H.d(P.a1(b,this,"index",null,t))},
i:function(a){return P.o8(this,"(",")")}}
P.b6.prototype={}
P.b.prototype={$ij:1}
P.z.prototype={}
P.N.prototype={
gI:function(a){return P.V.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.ac.prototype={}
P.V.prototype={constructor:P.V,$iV:1,
v:function(a,b){return this===b},
gI:function(a){return H.cS(this)},
i:function(a){return"Instance of '"+H.i(H.cT(this))+"'"},
toString:function(){return this.i(this)}}
P.aw.prototype={}
P.h.prototype={$imq:1}
P.a8.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iqm:1}
P.jh.prototype={
$2:function(a,b){var u,t,s,r=P.h
H.m(a,"$iz",[r,r],"$az")
H.M(b)
u=J.ds(b).eb(b,"=")
if(u===-1){if(b!=="")J.lm(a,P.lN(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.u(b,0,u)
s=C.b.ah(b,u+1)
r=this.a
J.lm(a,P.lN(t,0,t.length,r,!0),P.lN(s,0,s.length,r,!0))}return a},
$S:50}
P.je.prototype={
$2:function(a,b){throw H.d(P.a6("Illegal IPv4 address, "+a,this.a,b))},
$S:48}
P.jf.prototype={
$2:function(a,b){throw H.d(P.a6("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jg.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fu(C.b.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.R()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:46}
P.cf.prototype={
geA:function(){return this.b},
gcu:function(a){var u=this.c
if(u==null)return""
if(C.b.a9(u,"["))return C.b.u(u,1,u.length-1)
return u},
gbz:function(a){var u=this.d
if(u==null)return P.mV(this.a)
return u},
gcI:function(a){var u=this.f
return u==null?"":u},
ge6:function(){var u=this.r
return u==null?"":u},
en:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.m(b,"$iz",[P.h,null],"$az")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a9(p,"/"))p="/"+p
n=P.lL(null,0,0,b)
return new P.cf(u,s,q,r,p,n,m.r)},
gcJ:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.h
s.shA(new P.eo(P.mL(u==null?"":u),[t,t]))}return s.Q},
ge7:function(){return this.c!=null},
gea:function(){return this.f!=null},
ge8:function(){return this.r!=null},
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
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.R(b).$ilE)if(s.a==b.gbG())if(s.c!=null===b.ge7())if(s.b==b.geA())if(s.gcu(s)==b.gcu(b))if(s.gbz(s)==b.gbz(b))if(s.e===b.gek(b)){u=s.f
t=u==null
if(!t===b.gea()){if(t)u=""
if(u===b.gcI(b)){u=s.r
t=u==null
if(!t===b.ge8()){if(t)u=""
u=u===b.ge6()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.b.gI(this.i(0)):u},
shA:function(a){var u=P.h
this.Q=H.m(a,"$iz",[u,u],"$az")},
$ilE:1,
gbG:function(){return this.a},
gek:function(a){return this.e}}
P.km.prototype={
$1:function(a){throw H.d(P.a6("Invalid port",this.a,this.b+1))},
$S:45}
P.kn.prototype={
$1:function(a){return P.fg(C.X,a,C.h,!1)},
$S:20}
P.kp.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.fg(C.i,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.fg(C.i,b,C.h,!0))}},
$S:21}
P.ko.prototype={
$2:function(a,b){var u,t
H.M(a)
if(b==null||typeof b==="string")this.a.$2(a,H.M(b))
else for(u=J.bv(H.nk(b,"$ij")),t=this.a;u.B();)t.$2(a,H.M(u.gJ(u)))},
$S:43}
P.jd.prototype={
gez:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.e(o,0)
u=q.a
o=o[0]+1
t=C.b.bv(u,"?",o)
s=u.length
if(t>=0){r=P.dm(u,t+1,s,C.m,!1)
s=t}else r=p
return q.c=new P.jK("data",p,p,p,P.dm(u,o,s,C.A,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.e(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kx.prototype={
$1:function(a){return new Uint8Array(96)},
$S:41}
P.kw.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.nS(u,0,96,b)
return u},
$S:58}
P.ky.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.F(b,s)^96
if(r>=t)return H.e(a,r)
a[r]=c}}}
P.kz.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.F(b,0),t=C.b.F(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.e(a,r)
a[r]=c}}}
P.ka.prototype={
ge7:function(){return this.c>0},
ge9:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.D()
t=this.e
if(typeof t!=="number")return H.E(t)
t=u+1<t
u=t}else u=!1
return u},
gea:function(){var u=this.f
if(typeof u!=="number")return u.R()
return u<this.r},
ge8:function(){return this.r<this.a.length},
gdm:function(){return this.b===4&&C.b.a9(this.a,"http")},
gdn:function(){return this.b===5&&C.b.a9(this.a,"https")},
gbG:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdm())q=t.x="http"
else if(t.gdn()){t.x="https"
q="https"}else if(q===4&&C.b.a9(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a9(t.a,r)){t.x=r
q=r}else{q=C.b.u(t.a,0,q)
t.x=q}return q},
geA:function(){var u=this.c,t=this.b+3
return u>t?C.b.u(this.a,t,u-1):""},
gcu:function(a){var u=this.c
return u>0?C.b.u(this.a,u,this.d):""},
gbz:function(a){var u,t=this
if(t.ge9()){u=t.d
if(typeof u!=="number")return u.D()
return P.fu(C.b.u(t.a,u+1,t.e),null,null)}if(t.gdm())return 80
if(t.gdn())return 443
return 0},
gek:function(a){return C.b.u(this.a,this.e,this.f)},
gcI:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.R()
return u<t?C.b.u(this.a,u+1,t):""},
ge6:function(){var u=this.r,t=this.a
return u<t.length?C.b.ah(t,u+1):""},
gcJ:function(){var u=this,t=u.f
if(typeof t!=="number")return t.R()
if(t>=u.r)return C.Y
t=P.h
return new P.eo(P.mL(u.gcI(u)),[t,t])},
en:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.m(b,"$iz",[P.h,null],"$az")
u=k.gbG()
t=u==="file"
s=k.c
r=s>0?C.b.u(k.a,k.b+3,s):""
q=k.ge9()?k.gbz(k):j
s=k.c
if(s>0)p=C.b.u(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.u(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a9(o,"/"))o="/"+o
m=P.lL(j,0,0,b)
n=k.r
l=n<s.length?C.b.ah(s,n+1):j
return new P.cf(u,r,p,q,o,m,l)},
gI:function(a){var u=this.y
return u==null?this.y=C.b.gI(this.a):u},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.R(b).$ilE&&this.a===b.i(0)},
i:function(a){return this.a},
$ilE:1}
P.jK.prototype={}
W.x.prototype={}
W.fw.prototype={
gn:function(a){return a.length}}
W.dx.prototype={
i:function(a){return String(a)},
$idx:1}
W.fx.prototype={
i:function(a){return String(a)}}
W.ct.prototype={$ict:1}
W.bW.prototype={$ibW:1}
W.bw.prototype={$ibw:1}
W.bY.prototype={
cS:function(a,b,c){if(c!=null)return a.getContext(b,P.pM(c))
return a.getContext(b)},
eC:function(a,b){return this.cS(a,b,null)},
$ibY:1}
W.cx.prototype={$icx:1}
W.bx.prototype={
gn:function(a){return a.length}}
W.cz.prototype={$icz:1}
W.fO.prototype={
gn:function(a){return a.length}}
W.X.prototype={$iX:1}
W.cA.prototype={
gn:function(a){return a.length}}
W.fP.prototype={}
W.b4.prototype={}
W.b5.prototype={}
W.fQ.prototype={
gn:function(a){return a.length}}
W.fR.prototype={
gn:function(a){return a.length}}
W.fU.prototype={
gn:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.fV.prototype={
i:function(a){return String(a)}}
W.dH.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.m(c,"$ial",[P.ac],"$aal")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[[P.al,P.ac]]},
$ay:function(){return[[P.al,P.ac]]},
$ij:1,
$aj:function(){return[[P.al,P.ac]]},
$ib:1,
$ab:function(){return[[P.al,P.ac]]},
$aI:function(){return[[P.al,P.ac]]}}
W.dI.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gaN(a))+" x "+H.i(this.gaH(a))},
v:function(a,b){var u
if(b==null)return!1
u=J.R(b)
if(!u.$ial)return!1
return a.left===u.gbx(b)&&a.top===u.gbC(b)&&this.gaN(a)===u.gaN(b)&&this.gaH(a)===u.gaH(b)},
gI:function(a){return W.mT(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(this.gaN(a)),C.e.gI(this.gaH(a)))},
gdQ:function(a){return a.bottom},
gaH:function(a){return a.height},
gbx:function(a){return a.left},
gcM:function(a){return a.right},
gbC:function(a){return a.top},
gaN:function(a){return a.width},
$ial:1,
$aal:function(){return[P.ac]}}
W.fW.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.M(c)
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[P.h]},
$ay:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aI:function(){return[P.h]}}
W.fX.prototype={
gn:function(a){return a.length}}
W.jI.prototype={
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.f(u[b],"$iT")},
k:function(a,b,c){var u
H.f(c,"$iT")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var u=this.jl(this)
return new J.as(u,u.length,[H.q(u,0)])},
$ay:function(){return[W.T]},
$aj:function(){return[W.T]},
$ab:function(){return[W.T]}}
W.T.prototype={
gik:function(a){return new W.jL(a)},
gcj:function(a){return new W.jI(a,a.children)},
gdT:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.R()
if(s<0)s=-s*0
if(typeof r!=="number")return r.R()
if(r<0)r=-r*0
return new P.al(u,t,s,r,[P.ac])},
i:function(a){return a.localName},
am:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.mh
if(u==null){u=H.c([],[W.aC])
t=new W.e2(u)
C.a.h(u,W.mS(null))
C.a.h(u,W.mU())
$.mh=t
d=t}else d=u
u=$.mg
if(u==null){u=new W.fh(d)
$.mg=u
c=u}else{u.a=d
c=u}}if($.bm==null){u=document
t=u.implementation.createHTMLDocument("")
$.bm=t
$.lt=t.createRange()
t=$.bm.createElement("base")
H.f(t,"$ict")
t.href=u.baseURI
$.bm.head.appendChild(t)}u=$.bm
if(u.body==null){t=u.createElement("body")
u.body=H.f(t,"$ibw")}u=$.bm
if(!!this.$ibw)s=u.body
else{s=u.createElement(a.tagName)
$.bm.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.V(C.V,a.tagName)){$.lt.selectNodeContents(s)
r=$.lt.createContextualFragment(b)}else{s.innerHTML=b
r=$.bm.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bm.body
if(s==null?u!=null:s!==u)J.m8(s)
c.cT(r)
document.adoptNode(r)
return r},
it:function(a,b,c){return this.am(a,b,c,null)},
eE:function(a,b){a.textContent=null
a.appendChild(this.am(a,b,null,null))},
$iT:1,
geq:function(a){return a.tagName}}
W.h0.prototype={
$1:function(a){return!!J.R(H.f(a,"$iH")).$iT},
$S:25}
W.o.prototype={$io:1}
W.k.prototype={
i9:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.f2(a,b,c,!1)},
f2:function(a,b,c,d){return a.addEventListener(b,H.ck(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ik:1}
W.aG.prototype={$iaG:1}
W.cD.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaG")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aG]},
$ay:function(){return[W.aG]},
$ij:1,
$aj:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$icD:1,
$aI:function(){return[W.aG]}}
W.h6.prototype={
gn:function(a){return a.length}}
W.ha.prototype={
gn:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.hf.prototype={
gn:function(a){return a.length}}
W.c1.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.H]},
$ay:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$ic1:1,
$aI:function(){return[W.H]}}
W.bn.prototype={$ibn:1,
gdU:function(a){return a.data}}
W.cG.prototype={$icG:1}
W.cH.prototype={$icH:1}
W.b8.prototype={$ib8:1}
W.dT.prototype={
i:function(a){return String(a)},
$idT:1}
W.hP.prototype={
gn:function(a){return a.length}}
W.cL.prototype={$icL:1}
W.hQ.prototype={
j:function(a,b){return P.br(a.get(H.M(b)))},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
gaa:function(a){var u=H.c([],[P.h])
this.H(a,new W.hR(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.d(P.J("Not supported"))},
$aag:function(){return[P.h,null]},
$iz:1,
$az:function(){return[P.h,null]}}
W.hR.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hS.prototype={
j:function(a,b){return P.br(a.get(H.M(b)))},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
gaa:function(a){var u=H.c([],[P.h])
this.H(a,new W.hT(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.d(P.J("Not supported"))},
$aag:function(){return[P.h,null]},
$iz:1,
$az:function(){return[P.h,null]}}
W.hT.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aR.prototype={$iaR:1}
W.hU.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaR")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aR]},
$ay:function(){return[W.aR]},
$ij:1,
$aj:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aI:function(){return[W.aR]}}
W.ah.prototype={$iah:1}
W.aq.prototype={
gaO:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.d(P.mC("No elements"))
if(t>1)throw H.d(P.mC("More than one element"))
return u.firstChild},
ag:function(a,b){var u,t,s,r
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
return new W.dL(u,u.length,[H.co(C.Z,u,"I",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$ay:function(){return[W.H]},
$aj:function(){return[W.H]},
$ab:function(){return[W.H]}}
W.H.prototype={
ja:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
jd:function(a,b){var u,t
try{u=a.parentNode
J.nP(u,b,a)}catch(t){H.ak(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eH(a):u},
ie:function(a,b){return a.appendChild(H.f(b,"$iH"))},
hF:function(a,b,c){return a.replaceChild(b,c)},
$iH:1}
W.cQ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.H]},
$ay:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aI:function(){return[W.H]}}
W.aS.prototype={$iaS:1,
gn:function(a){return a.length}}
W.i9.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaS")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aS]},
$ay:function(){return[W.aS]},
$ij:1,
$aj:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aI:function(){return[W.aS]}}
W.ik.prototype={
j:function(a,b){return P.br(a.get(H.M(b)))},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
gaa:function(a){var u=H.c([],[P.h])
this.H(a,new W.il(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.d(P.J("Not supported"))},
$aag:function(){return[P.h,null]},
$iz:1,
$az:function(){return[P.h,null]}}
W.il.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.io.prototype={
gn:function(a){return a.length}}
W.aU.prototype={$iaU:1}
W.iz.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaU")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aU]},
$ay:function(){return[W.aU]},
$ij:1,
$aj:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aI:function(){return[W.aU]}}
W.aV.prototype={$iaV:1}
W.iA.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaV")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aV]},
$ay:function(){return[W.aV]},
$ij:1,
$aj:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aI:function(){return[W.aV]}}
W.aW.prototype={$iaW:1,
gn:function(a){return a.length}}
W.iD.prototype={
j:function(a,b){return a.getItem(H.M(b))},
k:function(a,b,c){a.setItem(b,c)},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaa:function(a){var u=H.c([],[P.h])
this.H(a,new W.iE(u))
return u},
gn:function(a){return a.length},
$aag:function(){return[P.h,P.h]},
$iz:1,
$az:function(){return[P.h,P.h]}}
W.iE.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:21}
W.aI.prototype={$iaI:1}
W.bd.prototype={$ibd:1}
W.eg.prototype={
am:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bI(a,b,c,d)
u=W.o5("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.aq(t).ag(0,new W.aq(u))
return t}}
W.iK.prototype={
am:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bI(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.am(u.createElement("table"),b,c,d)
u.toString
u=new W.aq(u)
s=u.gaO(u)
s.toString
u=new W.aq(s)
r=u.gaO(u)
t.toString
r.toString
new W.aq(t).ag(0,new W.aq(r))
return t}}
W.iL.prototype={
am:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bI(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.am(u.createElement("table"),b,c,d)
u.toString
u=new W.aq(u)
s=u.gaO(u)
t.toString
s.toString
new W.aq(t).ag(0,new W.aq(s))
return t}}
W.d0.prototype={$id0:1}
W.aY.prototype={$iaY:1}
W.aJ.prototype={$iaJ:1}
W.iN.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaJ")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aJ]},
$ay:function(){return[W.aJ]},
$ij:1,
$aj:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$aI:function(){return[W.aJ]}}
W.iO.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaY")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aY]},
$ay:function(){return[W.aY]},
$ij:1,
$aj:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aI:function(){return[W.aY]}}
W.iS.prototype={
gn:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.b_.prototype={$ib_:1}
W.iW.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaZ")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aZ]},
$ay:function(){return[W.aZ]},
$ij:1,
$aj:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aI:function(){return[W.aZ]}}
W.iX.prototype={
gn:function(a){return a.length}}
W.bN.prototype={}
W.ji.prototype={
i:function(a){return String(a)}}
W.jA.prototype={
gn:function(a){return a.length}}
W.bh.prototype={
giw:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.J("deltaY is not supported"))},
giv:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.J("deltaX is not supported"))},
$ibh:1}
W.da.prototype={
hG:function(a,b){return a.requestAnimationFrame(H.ck(H.n(b,{func:1,ret:-1,args:[P.ac]}),1))},
fj:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.db.prototype={$idb:1}
W.jJ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iX")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.X]},
$ay:function(){return[W.X]},
$ij:1,
$aj:function(){return[W.X]},
$ib:1,
$ab:function(){return[W.X]},
$aI:function(){return[W.X]}}
W.ez.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
v:function(a,b){var u
if(b==null)return!1
u=J.R(b)
if(!u.$ial)return!1
return a.left===u.gbx(b)&&a.top===u.gbC(b)&&a.width===u.gaN(b)&&a.height===u.gaH(b)},
gI:function(a){return W.mT(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(a.width),C.e.gI(a.height))},
gaH:function(a){return a.height},
gaN:function(a){return a.width}}
W.jY.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaQ")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aQ]},
$ay:function(){return[W.aQ]},
$ij:1,
$aj:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aI:function(){return[W.aQ]}}
W.eR.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.H]},
$ay:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aI:function(){return[W.H]}}
W.kb.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaW")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aW]},
$ay:function(){return[W.aW]},
$ij:1,
$aj:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aI:function(){return[W.aW]}}
W.kf.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaI")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aI]},
$ay:function(){return[W.aI]},
$ij:1,
$aj:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$aI:function(){return[W.aI]}}
W.jH.prototype={
H:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.gaa(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gaa:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.e(r,t)
s=H.f(r[t],"$idb")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aag:function(){return[P.h,P.h]},
$az:function(){return[P.h,P.h]}}
W.jL.prototype={
j:function(a,b){return this.a.getAttribute(H.M(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.gaa(this).length}}
W.jM.prototype={}
W.lI.prototype={}
W.jN.prototype={}
W.jO.prototype={
$1:function(a){return this.a.$1(H.f(a,"$io"))},
$S:40}
W.bQ.prototype={
eS:function(a){var u
if($.dd.giQ($.dd)){for(u=0;u<262;++u)$.dd.k(0,C.U[u],W.pV())
for(u=0;u<12;++u)$.dd.k(0,C.q[u],W.pW())}},
aW:function(a){return $.nL().V(0,W.cB(a))},
ax:function(a,b,c){var u=$.dd.j(0,H.i(W.cB(a))+"::"+b)
if(u==null)u=$.dd.j(0,"*::"+b)
if(u==null)return!1
return H.lS(u.$4(a,b,c,this))},
$iaC:1}
W.I.prototype={
gU:function(a){return new W.dL(a,this.gn(a),[H.co(this,a,"I",0)])}}
W.e2.prototype={
aW:function(a){return C.a.dN(this.a,new W.i1(a))},
ax:function(a,b,c){return C.a.dN(this.a,new W.i0(a,b,c))},
$iaC:1}
W.i1.prototype={
$1:function(a){return H.f(a,"$iaC").aW(this.a)},
$S:27}
W.i0.prototype={
$1:function(a){return H.f(a,"$iaC").ax(this.a,this.b,this.c)},
$S:27}
W.eZ.prototype={
eX:function(a,b,c,d){var u,t,s
this.a.ag(0,c)
u=b.bF(0,new W.k8())
t=b.bF(0,new W.k9())
this.b.ag(0,u)
s=this.c
s.ag(0,C.x)
s.ag(0,t)},
aW:function(a){return this.a.V(0,W.cB(a))},
ax:function(a,b,c){var u=this,t=W.cB(a),s=u.c
if(s.V(0,H.i(t)+"::"+b))return u.d.ic(c)
else if(s.V(0,"*::"+b))return u.d.ic(c)
else{s=u.b
if(s.V(0,H.i(t)+"::"+b))return!0
else if(s.V(0,"*::"+b))return!0
else if(s.V(0,H.i(t)+"::*"))return!0
else if(s.V(0,"*::*"))return!0}return!1},
$iaC:1}
W.k8.prototype={
$1:function(a){return!C.a.V(C.q,H.M(a))},
$S:28}
W.k9.prototype={
$1:function(a){return C.a.V(C.q,H.M(a))},
$S:28}
W.kh.prototype={
ax:function(a,b,c){if(this.eL(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.V(0,b)
return!1}}
W.ki.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.M(a))},
$S:20}
W.kg.prototype={
aW:function(a){var u=J.R(a)
if(!!u.$icU)return!1
u=!!u.$ip
if(u&&W.cB(a)==="foreignObject")return!1
if(u)return!0
return!1},
ax:function(a,b,c){if(b==="is"||C.b.a9(b,"on"))return!1
return this.aW(a)},
$iaC:1}
W.dL.prototype={
B:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdl(J.dv(u.a,t))
u.c=t
return!0}u.sdl(null)
u.c=s
return!1},
gJ:function(a){return this.d},
sdl:function(a){this.d=H.F(a,H.q(this,0))},
$ib6:1}
W.aC.prototype={}
W.k6.prototype={$iqz:1}
W.fh.prototype={
cT:function(a){new W.ks(this).$2(a,null)},
b5:function(a,b){if(b==null)J.m8(a)
else b.removeChild(a)},
hL:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nT(a)
n=o.a.getAttribute("is")
H.f(a,"$iT")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.G(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ak(r)}t="element unprintable"
try{t=J.ar(a)}catch(r){H.ak(r)}try{s=W.cB(a)
this.hK(H.f(a,"$iT"),b,p,t,s,H.f(o,"$iz"),H.M(n))}catch(r){if(H.ak(r) instanceof P.aO)throw r
else{this.b5(a,b)
window
q="Removing corrupted element "+H.i(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hK:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b5(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aW(a)){o.b5(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.ax(a,"is",g)){o.b5(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gaa(f)
t=H.c(u.slice(0),[H.q(u,0)])
for(s=f.gaa(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.e(t,s)
r=t[s]
q=o.a
p=J.nW(r)
H.M(r)
if(!q.ax(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.i(e)+" "+r+'="'+H.i(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.R(a).$id0)o.cT(a.content)},
$iqk:1}
W.ks.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hL(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b5(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ak(s)
r=H.f(u,"$iH")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iH")}},
$S:39}
W.ey.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.di.prototype={}
W.dj.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f4.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
P.kc.prototype={
e5:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cQ:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.R(a)
if(!!u.$iaz)return new Date(a.a)
if(!!u.$iox)throw H.d(P.ja("structured clone of RegExp"))
if(!!u.$iaG)return a
if(!!u.$ibW)return a
if(!!u.$icD)return a
if(!!u.$ibn)return a
if(!!u.$icN||!!u.$ibJ||!!u.$icL)return a
if(!!u.$iz){t=q.e5(a)
s=q.b
if(t>=s.length)return H.e(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.H(a,new P.ke(p,q))
return p.a}if(!!u.$ib){t=q.e5(a)
p=q.b
if(t>=p.length)return H.e(p,t)
r=p[t]
if(r!=null)return r
return q.is(a,t)}throw H.d(P.ja("structured clone of other type"))},
is:function(a,b){var u,t=J.dr(a),s=t.gn(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cQ(t.j(a,u)))
return r}}
P.ke.prototype={
$2:function(a,b){this.a.a[a]=this.b.cQ(b)},
$S:7}
P.fe.prototype={$ibn:1,
gdU:function(a){return this.a}}
P.kF.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.kd.prototype={}
P.h7.prototype={
gbo:function(){var u=this.b,t=H.am(u,"y",0),s=W.T
return new H.hA(new H.d9(u,H.n(new P.h8(),{func:1,ret:P.P,args:[t]}),[t]),H.n(new P.h9(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.f(c,"$iT")
u=this.gbo()
J.nU(u.b.$1(J.fv(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aE(this.gbo().a)},
j:function(a,b){var u=this.gbo()
return u.b.$1(J.fv(u.a,b))},
gU:function(a){var u=P.mm(this.gbo(),!1,W.T)
return new J.as(u,u.length,[H.q(u,0)])},
$ay:function(){return[W.T]},
$aj:function(){return[W.T]},
$ab:function(){return[W.T]}}
P.h8.prototype={
$1:function(a){return!!J.R(H.f(a,"$iH")).$iT},
$S:25}
P.h9.prototype={
$1:function(a){return H.v(H.f(a,"$iH"),"$iT")},
$S:38}
P.k1.prototype={
gcM:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.E(t)
return H.F(u+t,H.q(this,0))},
gdQ:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.E(t)
return H.F(u+t,H.q(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
v:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.R(b)
if(!!u.$ial){t=p.a
if(t==u.gbx(b)){s=p.b
if(s==u.gbC(b)){r=p.c
if(typeof t!=="number")return t.D()
if(typeof r!=="number")return H.E(r)
q=H.q(p,0)
if(H.F(t+r,q)===u.gcM(b)){t=p.d
if(typeof s!=="number")return s.D()
if(typeof t!=="number")return H.E(t)
u=H.F(s+t,q)===u.gdQ(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t=this,s=t.a,r=J.dw(s),q=t.b,p=J.dw(q),o=t.c
if(typeof s!=="number")return s.D()
if(typeof o!=="number")return H.E(o)
u=H.q(t,0)
o=C.d.gI(H.F(s+o,u))
s=t.d
if(typeof q!=="number")return q.D()
if(typeof s!=="number")return H.E(s)
u=C.d.gI(H.F(q+s,u))
return P.oX(P.k_(P.k_(P.k_(P.k_(0,r),p),o),u))}}
P.al.prototype={
gbx:function(a){return this.a},
gbC:function(a){return this.b},
gaN:function(a){return this.c},
gaH:function(a){return this.d}}
P.b9.prototype={$ib9:1}
P.hp.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib9")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ay:function(){return[P.b9]},
$ij:1,
$aj:function(){return[P.b9]},
$ib:1,
$ab:function(){return[P.b9]},
$aI:function(){return[P.b9]}}
P.bc.prototype={$ibc:1}
P.i4.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibc")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ay:function(){return[P.bc]},
$ij:1,
$aj:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aI:function(){return[P.bc]}}
P.ib.prototype={
gn:function(a){return a.length}}
P.cU.prototype={$icU:1}
P.iJ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.M(c)
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ay:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aI:function(){return[P.h]}}
P.p.prototype={
gcj:function(a){return new P.h7(a,new W.aq(a))},
am:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.aC])
C.a.h(p,W.mS(null))
C.a.h(p,W.mU())
C.a.h(p,new W.kg())
c=new W.fh(new W.e2(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).it(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.aq(s)
q=p.gaO(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.bf.prototype={$ibf:1}
P.iY.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibf")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ay:function(){return[P.bf]},
$ij:1,
$aj:function(){return[P.bf]},
$ib:1,
$ab:function(){return[P.bf]},
$aI:function(){return[P.bf]}}
P.eJ.prototype={}
P.eK.prototype={}
P.eU.prototype={}
P.eV.prototype={}
P.f5.prototype={}
P.f6.prototype={}
P.fc.prototype={}
P.fd.prototype={}
P.Q.prototype={$ij:1,
$aj:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$ioH:1}
P.fA.prototype={
gn:function(a){return a.length}}
P.fB.prototype={
j:function(a,b){return P.br(a.get(H.M(b)))},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
gaa:function(a){var u=H.c([],[P.h])
this.H(a,new P.fC(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.d(P.J("Not supported"))},
$aag:function(){return[P.h,null]},
$iz:1,
$az:function(){return[P.h,null]}}
P.fC.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.fD.prototype={
gn:function(a){return a.length}}
P.bV.prototype={}
P.i5.prototype={
gn:function(a){return a.length}}
P.ex.prototype={}
P.dA.prototype={$idA:1}
P.e6.prototype={$ie6:1}
P.c8.prototype={
ji:function(a,b,c,d,e,f,g){var u,t=J.R(g)
if(!!t.$ibn)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.pN(g))
return}if(!!t.$icG)t=!0
else t=!1
if(t){this.hY(a,b,c,d,e,f,g)
return}throw H.d(P.dy("Incorrect number or type of arguments"))},
hY:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a6:function(a,b,c){return a.uniform1f(b,c)},
bE:function(a,b,c){return a.uniform1i(b,c)},
Z:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ew:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
ex:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ey:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic8:1}
P.e9.prototype={$ie9:1}
P.eh.prototype={$ieh:1}
P.em.prototype={$iem:1}
P.iB.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return P.br(a.item(b))},
k:function(a,b,c){H.f(c,"$iz")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ay:function(){return[[P.z,,,]]},
$ij:1,
$aj:function(){return[[P.z,,,]]},
$ib:1,
$ab:function(){return[[P.z,,,]]},
$aI:function(){return[[P.z,,,]]}}
P.f1.prototype={}
P.f2.prototype={}
O.a4.prototype={
bm:function(a){var u=this
u.sfv(H.c([],[a]))
u.sdu(null)
u.sdq(null)
u.sdv(null)},
cU:function(a,b,c){var u=this,t=H.am(u,"a4",0)
H.n(b,{func:1,ret:P.P,args:[[P.j,t]]})
t={func:1,ret:-1,args:[P.l,[P.j,t]]}
H.n(a,t)
H.n(c,t)
u.sdu(b)
u.sdq(a)
u.sdv(c)},
b_:function(a,b){return this.cU(a,null,b)},
dt:function(a){var u
H.m(a,"$ij",[H.am(this,"a4",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
d0:function(a,b){var u
H.m(b,"$ij",[H.am(this,"a4",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.as(u,u.length,[H.q(u,0)])},
K:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.am(s,"a4",0)
H.F(b,r)
r=[r]
if(H.G(s.dt(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.d0(t,H.c([b],r))}},
ag:function(a,b){var u,t,s=this
H.m(b,"$ij",[H.am(s,"a4",0)],"$aj")
if(H.G(s.dt(b))){u=s.a
t=u.length
C.a.ag(u,b)
s.d0(t,b)}},
sfv:function(a){this.a=H.m(a,"$ib",[H.am(this,"a4",0)],"$ab")},
sdu:function(a){this.b=H.n(a,{func:1,ret:P.P,args:[[P.j,H.am(this,"a4",0)]]})},
sdq:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.l,[P.j,H.am(this,"a4",0)]]})},
sdv:function(a){H.n(a,{func:1,ret:-1,args:[P.l,[P.j,H.am(this,"a4",0)]]})},
$ij:1}
O.cK.prototype={
gn:function(a){return this.a.length},
gq:function(){var u=this.b
return u==null?this.b=D.U():u},
aP:function(){var u=this.b
if(u!=null)u.E(null)},
ga8:function(a){var u=this.a
if(u.length>0)return C.a.gay(u)
else return V.c3()},
bB:function(a){var u=this.a
if(a==null)C.a.h(u,V.c3())
else C.a.h(u,a)
this.aP()},
aJ:function(){var u=this.a
if(u.length>0){u.pop()
this.aP()}},
sbR:function(a){this.a=H.m(a,"$ib",[V.au],"$ab")}}
E.fG.prototype={}
E.ao.prototype={
sab:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gq().L(0,s.geh())
u=s.c
if(u!=null)u.gq().h(0,s.geh())
t=new D.O("shape",r,s.c,[F.ea])
t.b=!0
s.by(t)}},
at:function(a,b){var u
for(u=this.y.a,u=new J.as(u,u.length,[H.q(u,0)]);u.B();)u.d.at(0,b)},
aj:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.ga8(s))
s.aP()
a.cH(t.f)
s=a.dy
u=(s&&C.a).gay(s)
if(u!=null&&t.d!=null)u.em(a,t)
for(s=t.y.a,s=new J.as(s,s.length,[H.q(s,0)]);s.B();)s.d.aj(a)
a.cG()
a.dx.aJ()},
by:function(a){var u=this.z
if(u!=null)u.E(a)},
a5:function(){return this.by(null)},
ei:function(a){H.f(a,"$iB")
this.e=null
this.by(a)},
j0:function(){return this.ei(null)},
eg:function(a){this.by(H.f(a,"$iB"))},
iY:function(){return this.eg(null)},
iX:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ij",[E.ao],"$aj")
for(u=b.length,t=this.gef(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c_()
o.sal(null)
o.saT(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sal(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a5()},
j_:function(a,b){var u,t
H.m(b,"$ij",[E.ao],"$aj")
for(u=b.gU(b),t=this.gef();u.B();)u.gJ(u).gq().L(0,t)
this.a5()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seR:function(a,b){this.y=H.m(b,"$ia4",[E.ao],"$aa4")},
$ic4:1}
E.ig.prototype={
eO:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.az(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cK()
t=[V.au]
u.sbR(H.c([],t))
u.b=null
u.gq().h(0,new E.ih(s))
s.cy=u
u=new O.cK()
u.sbR(H.c([],t))
u.b=null
u.gq().h(0,new E.ii(s))
s.db=u
u=new O.cK()
u.sbR(H.c([],t))
u.b=null
u.gq().h(0,new E.ij(s))
s.dx=u
s.shX(H.c([],[O.bM]))
u=s.dy;(u&&C.a).h(u,null)
s.shS(new H.a5([P.h,A.cV]))},
gj9:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga8(s)
u=t.db
u=t.z=s.w(0,u.ga8(u))
s=u}return s},
cH:function(a){var u=this.dy,t=a==null?(u&&C.a).gay(u):a;(u&&C.a).h(u,t)},
cG:function(){var u=this.dy
if(u.length>1)u.pop()},
dM:function(a){var u=a.b
if(u.length===0)throw H.d(P.D("May not cache a shader with no name."))
if(this.fr.bt(0,u))throw H.d(P.D('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)},
shX:function(a){this.dy=H.m(a,"$ib",[O.bM],"$ab")},
shS:function(a){this.fr=H.m(a,"$iz",[P.h,A.cV],"$az")}}
E.ih.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.ch=u.z=null},
$S:9}
E.ii.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:9}
E.ij.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.cx=u.ch=null},
$S:9}
E.ei.prototype={
d3:function(a){H.f(a,"$iB")
this.eo()},
d2:function(){return this.d3(null)},
giK:function(){var u,t=this,s=Date.now(),r=C.d.af(P.mf(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.az(s,!1)
return u/r},
dA:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.w()
if(typeof r!=="number")return H.E(r)
u=C.e.ct(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.w()
t=C.e.ct(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.mF(C.o,s.gje())}},
eo:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iR(this),{func:1,ret:-1,args:[P.ac]})
C.E.fj(u)
C.E.hG(u,W.n7(t,P.ac))}},
jc:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dA()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.az(r,!1)
s.y=P.mf(r-s.r.a).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aP()
r=s.db
C.a.sn(r.a,0)
r.aP()
r=s.dx
C.a.sn(r.a,0)
r.aP()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aj(p.e)}s=p.z
if(s!=null)s.E(null)}catch(q){u=H.ak(q)
t=H.cp(q)
P.m0("Error: "+H.i(u))
P.m0("Stack: "+H.i(t))
throw H.d(u)}}}
E.iR.prototype={
$1:function(a){var u
H.nm(a)
u=this.a
if(u.ch){u.ch=!1
u.jc()}},
$S:37}
Z.eu.prototype={$iqe:1}
Z.dB.prototype={
a1:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ak(s)
t=P.D('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.d(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.ev.prototype={$iqf:1}
Z.cw.prototype={
aG:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a1:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a1(a)},
aM:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aj:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.ar(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfq:function(a){this.b=H.m(a,"$ib",[Z.bE],"$ab")},
$iqn:1}
Z.bE.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.i(H.cT(this.c))+"'")+"]"}}
Z.bP.prototype={
gcW:function(a){var u=this.a,t=(u&$.b2().a)!==0?3:0
if((u&$.bu().a)!==0)t+=3
if((u&$.bt().a)!==0)t+=3
if((u&$.bT().a)!==0)t+=2
if((u&$.bU().a)!==0)t+=3
if((u&$.dt().a)!==0)t+=3
if((u&$.du().a)!==0)t+=4
if((u&$.cs().a)!==0)++t
return(u&$.bs().a)!==0?t+4:t},
ig:function(a){var u,t=$.b2(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bu()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bt()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bT()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bU()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dt()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.du()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bs()
if((s&t.a)!==0)if(u===a)return t
return $.nJ()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bP))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.h]),t=this.a
if((t&$.b2().a)!==0)C.a.h(u,"Pos")
if((t&$.bu().a)!==0)C.a.h(u,"Norm")
if((t&$.bt().a)!==0)C.a.h(u,"Binm")
if((t&$.bT().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bU().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dt().a)!==0)C.a.h(u,"Clr3")
if((t&$.du().a)!==0)C.a.h(u,"Clr4")
if((t&$.cs().a)!==0)C.a.h(u,"Weight")
if((t&$.bs().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fJ.prototype={}
D.c_.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.B]}
H.n(b,u)
if(this.a==null)this.sal(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
L:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.B]})
u=s.a
u=u==null?null:C.a.V(u,b)
if(u===!0){u=s.a
t=(u&&C.a).L(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.V(u,b)
if(u===!0){u=s.b
t=(u&&C.a).L(u,b)||t}return t},
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
return!0}if(!t)C.a.H(P.mm(u,!0,{func:1,ret:-1,args:[D.B]}),new D.h3(q))
u=r.b
if(u!=null){r.saT(H.c([],[{func:1,ret:-1,args:[D.B]}]))
C.a.H(u,new D.h4(q))}return!0},
iB:function(){return this.E(null)},
az:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}},
sal:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
saT:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.h3.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:33}
D.h4.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:33}
D.B.prototype={}
D.bF.prototype={}
D.bG.prototype={}
D.O.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.dC.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dC))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dQ.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dQ))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.ho.prototype={
j5:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
j1:function(a){this.c=a.b
this.d.L(0,a.a)
return!1},
shz:function(a){this.d=H.m(a,"$imB",[P.l],"$amB")}}
X.dU.prototype={}
X.hw.prototype={
b3:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.w()
u=b.b
t=q.ch
if(typeof u!=="number")return u.w()
s=new V.a7(o.a+n*m,o.b+u*t)
t=q.a.gaX()
r=new X.bp(a,V.bq(),q.x,t,s)
r.b=!0
q.z=new P.az(p,!1)
q.x=s
return r},
cF:function(a,b){this.r=a.a
return!1},
bg:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eD()
if(typeof u!=="number")return u.ap()
this.r=(u&~t)>>>0
return!1},
bf:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.b3(a,b))
return!0},
j6:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaX()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.w()
q=a.b
p=o.cy
if(typeof q!=="number")return q.w()
t=new X.cM(new V.Y(s*r,q*p),u,t)
t.b=!0
n.E(t)
return!0},
h5:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dU(c,r.a.gaX(),b)
s.b=!0
t.E(s)
r.y=new P.az(u,!1)
r.x=V.bq()}}
X.aB.prototype={
v:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aB))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.G(this.b)?"Alt+":""
return u+(H.G(this.c)?"Shift+":"")}}
X.bp.prototype={}
X.hV.prototype={
bO:function(a,b,c){var u=this,t=new P.az(Date.now(),!1),s=u.a.gaX(),r=new X.bp(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cF:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.bO(a,b,!0))
return!0},
bg:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eD()
if(typeof t!=="number")return t.ap()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.bO(a,b,!0))
return!0},
bf:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.bO(a,b,!1))
return!0},
j7:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaX()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.w()
r=a.b
q=p.ch
if(typeof r!=="number")return r.w()
u=new X.cM(new V.Y(t*s,r*q),u,b)
u.b=!0
o.E(u)
return!0},
gdW:function(){var u=this.b
return u==null?this.b=D.U():u},
gcP:function(){var u=this.c
return u==null?this.c=D.U():u},
gee:function(){var u=this.d
return u==null?this.d=D.U():u}}
X.cM.prototype={}
X.ia.prototype={}
X.ek.prototype={}
X.iV.prototype={
b3:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.a7],"$ab")
u=new P.az(Date.now(),!1)
t=a.length>0?a[0]:V.bq()
s=q.a.gaX()
r=new X.ek(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
j4:function(a){var u
H.m(a,"$ib",[V.a7],"$ab")
u=this.b
if(u==null)return!1
u.E(this.b3(a,!0))
return!0},
j2:function(a){var u
H.m(a,"$ib",[V.a7],"$ab")
u=this.c
if(u==null)return!1
u.E(this.b3(a,!0))
return!0},
j3:function(a){var u
H.m(a,"$ib",[V.a7],"$ab")
u=this.d
if(u==null)return!1
u.E(this.b3(a,!1))
return!0}}
X.ep.prototype={
gaX:function(){var u=this.a,t=C.j.gdT(u).c
t.toString
u=C.j.gdT(u).d
u.toString
return V.mz(0,0,t,u)},
dg:function(a){var u=a.keyCode,t=H.G(a.ctrlKey)||H.G(a.metaKey)
return new X.dQ(u,new X.aB(t,a.altKey,a.shiftKey))},
aU:function(a){var u=this.b,t=H.G(a.ctrlKey)||H.G(a.metaKey)
u.c=new X.aB(t,a.altKey,a.shiftKey)},
c9:function(a){var u=this.b,t=H.G(a.ctrlKey)||H.G(a.metaKey)
u.c=new X.aB(t,a.altKey,a.shiftKey)},
aD:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.M()
u=t.top
if(typeof r!=="number")return r.M()
return new V.a7(s-q,r-u)},
b4:function(a){return new V.Y(a.movementX,a.movementY)},
c3:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a7])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=C.e.as(r.pageX)
C.e.as(r.pageY)
p=o.left
C.e.as(r.pageX)
C.a.h(n,new V.a7(q-p,C.e.as(r.pageY)-o.top))}return n},
aB:function(a){var u=a.buttons,t=H.G(a.ctrlKey)||H.G(a.metaKey)
return new X.dC(u,new X.aB(t,a.altKey,a.shiftKey))},
bS:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.M()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.M()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
h_:function(a){this.f=!0},
fO:function(a){this.f=!1},
fU:function(a){H.f(a,"$iah")
if(H.G(this.f)&&this.bS(a))a.preventDefault()},
h3:function(a){var u
H.f(a,"$ib8")
if(!H.G(this.f))return
u=this.dg(a)
this.b.j5(u)},
h1:function(a){var u
H.f(a,"$ib8")
if(!H.G(this.f))return
u=this.dg(a)
this.b.j1(u)},
h7:function(a){var u,t,s,r,q=this
H.f(a,"$iah")
u=q.a
u.focus()
q.f=!0
q.aU(a)
if(H.G(q.x)){t=q.aB(a)
s=q.b4(a)
if(q.d.cF(t,s))a.preventDefault()
return}if(H.G(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aB(a)
r=q.aD(a)
if(q.c.cF(t,r))a.preventDefault()},
hb:function(a){var u,t,s,r=this
H.f(a,"$iah")
r.aU(a)
u=r.aB(a)
if(H.G(r.x)){t=r.b4(a)
if(r.d.bg(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aD(a)
if(r.c.bg(u,s))a.preventDefault()},
fY:function(a){var u,t,s,r=this
H.f(a,"$iah")
if(!r.bS(a)){r.aU(a)
u=r.aB(a)
if(H.G(r.x)){t=r.b4(a)
if(r.d.bg(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aD(a)
if(r.c.bg(u,s))a.preventDefault()}},
h9:function(a){var u,t,s,r=this
H.f(a,"$iah")
r.aU(a)
u=r.aB(a)
if(H.G(r.x)){t=r.b4(a)
if(r.d.bf(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aD(a)
if(r.c.bf(u,s))a.preventDefault()},
fW:function(a){var u,t,s,r=this
H.f(a,"$iah")
if(!r.bS(a)){r.aU(a)
u=r.aB(a)
if(H.G(r.x)){t=r.b4(a)
if(r.d.bf(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aD(a)
if(r.c.bf(u,s))a.preventDefault()}},
hd:function(a){var u,t,s=this
H.f(a,"$ibh")
s.aU(a)
u=new V.Y((a&&C.D).giv(a),C.D.giw(a)).t(0,180)
if(H.G(s.x)){if(s.d.j6(u))a.preventDefault()
return}if(H.G(s.r))return
t=s.aD(a)
if(s.c.j7(u,t))a.preventDefault()},
hf:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aB(s.y)
t=s.aD(s.y)
s.d.h5(u,t,r)}},
hv:function(a){var u,t=this
H.f(a,"$ib_")
t.a.focus()
t.f=!0
t.c9(a)
u=t.c3(a)
if(t.e.j4(u))a.preventDefault()},
hr:function(a){var u
H.f(a,"$ib_")
this.c9(a)
u=this.c3(a)
if(this.e.j2(u))a.preventDefault()},
ht:function(a){var u
H.f(a,"$ib_")
this.c9(a)
u=this.c3(a)
if(this.e.j3(u))a.preventDefault()},
sfk:function(a){this.z=H.m(a,"$ib",[[P.cY,P.V]],"$ab")}}
D.bA.prototype={
aA:function(a){var u
H.f(a,"$iB")
u=this.r
if(u!=null)u.E(a)},
eU:function(){return this.aA(null)},
$iaf:1,
$ic4:1}
D.af.prototype={$ic4:1}
D.dR.prototype={
aA:function(a){var u=this.x
if(u!=null)u.E(a)},
ds:function(a){var u
H.f(a,"$iB")
u=this.y
if(u!=null)u.E(a)},
h4:function(){return this.ds(null)},
hh:function(a){var u,t,s
H.m(a,"$ij",[D.af],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(s==null||this.fc(s))return!1}return!0},
fI:function(a,b){var u,t,s,r,q,p,o,n=D.af
H.m(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gdr(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=H.f(b[q],"$iaf")
if(p instanceof D.bA)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.c_()
o.sal(null)
o.saT(null)
o.c=null
o.d=0
p.r=o}H.n(t,s)
if(o.a==null)o.sal(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bF([n])
n.b=!0
this.aA(n)},
hl:function(a,b){var u,t,s,r=D.af
H.m(b,"$ij",[r],"$aj")
for(u=b.gU(b),t=this.gdr();u.B();){s=u.gJ(u)
C.a.L(this.e,s)
s.gq().L(0,t)}r=new D.bG([r])
r.b=!0
this.aA(r)},
fc:function(a){var u=C.a.V(this.e,a)
return u},
sfi:function(a){this.e=H.m(a,"$ib",[D.bA],"$ab")},
shw:function(a){this.f=H.m(a,"$ib",[D.e5],"$ab")},
shV:function(a){this.r=H.m(a,"$ib",[D.ee],"$ab")},
$aj:function(){return[D.af]},
$aa4:function(){return[D.af]}}
D.e5.prototype={$iaf:1,$ic4:1}
D.ee.prototype={$iaf:1,$ic4:1}
V.t.prototype={
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.t))return!1
u=b.a
t=$.S().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Z(this.a,3,0)+", "+V.Z(this.b,3,0)+", "+V.Z(this.c,3,0)+"]"}}
V.at.prototype={
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.at))return!1
u=b.a
t=$.S().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Z(u.a,3,0)+", "+V.Z(u.b,3,0)+", "+V.Z(u.c,3,0)+", "+V.Z(u.d,3,0)+"]"}}
V.h2.prototype={}
V.dZ.prototype={
ak:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.A])
return t},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dZ))return!1
u=b.a
t=$.S().a
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
i:function(a){var u,t,s,r,q=this,p=[P.A],o=V.cm(H.c([q.a,q.d,q.r],p),3,0),n=V.cm(H.c([q.b,q.e,q.x],p),3,0),m=V.cm(H.c([q.c,q.f,q.y],p),3,0)
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
ak:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.A])
return t},
cz:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.S().a)return V.c3()
u=1/b1
t=-n
s=-a0
return V.bb((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
w:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bb(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bD:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.K(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cO:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a_(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.au))return!1
u=b.a
t=$.S().a
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
G:function(a){var u,t,s,r,q,p=this,o=[P.A],n=V.cm(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.cm(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.cm(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.cm(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
V.a7.prototype={
M:function(a,b){return new V.a7(this.a-b.a,this.b-b.b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.S().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.Z(this.a,3,0)+", "+V.Z(this.b,3,0)+"]"}}
V.a_.prototype={
D:function(a,b){return new V.a_(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a,b){return new V.a_(this.a-b.a,this.b-b.b,this.c-b.c)},
w:function(a,b){return new V.a_(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.S().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Z(this.a,3,0)+", "+V.Z(this.b,3,0)+", "+V.Z(this.c,3,0)+"]"}}
V.aH.prototype={
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aH))return!1
u=b.a
t=$.S().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Z(u.a,3,0)+", "+V.Z(u.b,3,0)+", "+V.Z(u.c,3,0)+", "+V.Z(u.d,3,0)+"]"}}
V.e8.prototype={
gai:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e8))return!1
u=b.a
t=$.S().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Z(u.a,3,0)+", "+V.Z(u.b,3,0)+", "+V.Z(u.c,3,0)+", "+V.Z(u.d,3,0)+"]"}}
V.Y.prototype={
cA:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.E(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.E(t)
return s*r+u*t},
w:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.w()
u=this.b
if(typeof u!=="number")return u.w()
return new V.Y(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.S().a){u=$.mM
return u==null?$.mM=new V.Y(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.Y(u/b,t/b)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=this.a
s=$.S()
s.toString
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.E(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.E(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.Z(this.a,3,0)+", "+V.Z(this.b,3,0)+"]"}}
V.K.prototype={
cA:function(a){return Math.sqrt(this.C(this))},
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cB:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.K(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aE:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.K(u*t-s*r,s*q-p*t,p*r-u*q)},
D:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.K(-this.a,-this.b,-this.c)},
w:function(a,b){return new V.K(this.a*b,this.b*b,this.c*b)},
t:function(a,b){if(Math.abs(b-0)<$.S().a)return V.d8()
return new V.K(this.a/b,this.b/b,this.c/b)},
ed:function(){var u=$.S().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.S().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Z(this.a,3,0)+", "+V.Z(this.b,3,0)+", "+V.Z(this.c,3,0)+"]"}}
U.fK.prototype={
bJ:function(a){var u=V.qd(a,this.c,this.b)
return u},
gq:function(){var u=this.y
return u==null?this.y=D.U():u},
S:function(a){var u=this.y
if(u!=null)u.E(a)},
scR:function(a,b){},
scC:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.S().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bJ(u)}s=new D.O("maximumLocation",s,t.b,[P.A])
s.b=!0
t.S(s)}},
scE:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.S().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bJ(u)}s=new D.O("minimumLocation",s,t.c,[P.A])
s.b=!0
t.S(s)}},
sa2:function(a,b){var u,t=this
b=t.bJ(b)
u=t.d
if(!(Math.abs(u-b)<$.S().a)){t.d=b
u=new D.O("location",u,b,[P.A])
u.b=!0
t.S(u)}},
scD:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.S().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.O("maximumVelocity",r,a,[P.A])
r.b=!0
s.S(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.S().a)){u.f=a
t=new D.O("velocity",t,a,[P.A])
t.b=!0
u.S(t)}},
scm:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.S().a)){this.x=a
u=new D.O("dampening",u,a,[P.A])
u.b=!0
this.S(u)}},
at:function(a,b){var u,t,s,r=this,q=r.f,p=$.S().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa2(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.S().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sW(u)}}}
U.dE.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.U():u},
aZ:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dE))return!1
return J.W(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cF.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.U():u},
S:function(a){var u
H.f(a,"$iB")
u=this.e
if(u!=null)u.E(a)},
ad:function(){return this.S(null)},
fG:function(a,b){var u,t,s,r,q,p,o,n=U.ai
H.m(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gaQ(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.n(t,s)
if(o.a==null)o.sal(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bF([n])
n.b=!0
this.S(n)},
hj:function(a,b){var u,t,s=U.ai
H.m(b,"$ij",[s],"$aj")
for(u=b.gU(b),t=this.gaQ();u.B();)u.gJ(u).gq().L(0,t)
s=new D.bG([s])
s.b=!0
this.S(s)},
aZ:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.R()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.as(r,r.length,[H.q(r,0)]),u=null;r.B();){q=r.d
if(q!=null){t=q.aZ(0,b,c)
if(t!=null)u=u==null?t:t.w(0,u)}}s.f=u==null?V.c3():u
r=s.e
if(r!=null)r.az(0)}return s.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cF))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.W(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.ai]},
$aa4:function(){return[U.ai]},
$iai:1}
U.ai.prototype={}
U.eq.prototype={
gq:function(){var u=this.cy
return u==null?this.cy=D.U():u},
S:function(a){var u
H.f(a,"$iB")
u=this.cy
if(u!=null)u.E(a)},
ad:function(){return this.S(null)},
b6:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdW().h(0,u.gbT())
u.a.c.gee().h(0,u.gbV())
u.a.c.gcP().h(0,u.gbX())
return!0},
bU:function(a){var u=this
H.f(a,"$iB")
if(!J.W(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bW:function(a){var u,t,s,r,q,p,o,n=this
a=H.v(H.f(a,"$iB"),"$ibp")
if(!H.G(n.y))return
if(H.G(n.x)){u=a.d.M(0,a.y)
u=new V.Y(u.a,u.b)
u=u.C(u)
t=n.r
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.x=!1}if(H.G(n.d)){u=a.c
t=a.d.M(0,a.y)
u=new V.Y(t.a,t.b).w(0,2).t(0,u.gai())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.w()
s=n.e
if(typeof s!=="number")return H.E(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=new V.Y(s.a,s.b).w(0,2).t(0,u.gai())
s=n.b
q=r.a
if(typeof q!=="number")return q.T()
p=n.e
if(typeof p!=="number")return H.E(p)
o=n.z
if(typeof o!=="number")return H.E(o)
s.sa2(0,-q*p+o)
n.b.sW(0)
t=t.M(0,a.z)
n.Q=new V.Y(t.a,t.b).w(0,2).t(0,u.gai())}n.ad()},
bY:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.G(r.y))return
r.y=!1
if(H.G(r.x))return
u=r.Q
if(u.C(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.w()
s=r.e
if(typeof s!=="number")return H.E(s)
u.sW(t*10*s)
r.ad()}},
aZ:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.R()
if(q<p){r.ch=p
u=b.y
r.b.at(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.bb(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iai:1}
U.er.prototype={
gq:function(){var u=this.fx
return u==null?this.fx=D.U():u},
S:function(a){var u
H.f(a,"$iB")
u=this.fx
if(u!=null)u.E(a)},
ad:function(){return this.S(null)},
b6:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdW().h(0,s.gbT())
s.a.c.gee().h(0,s.gbV())
s.a.c.gcP().h(0,s.gbX())
u=s.a.d
t=u.f
u=t==null?u.f=D.U():t
u.h(0,s.gfw())
u=s.a.d
t=u.d
u=t==null?u.d=D.U():t
u.h(0,s.gfA())
u=s.a.e
t=u.b
u=t==null?u.b=D.U():t
u.h(0,s.gi3())
u=s.a.e
t=u.d
u=t==null?u.d=D.U():t
u.h(0,s.gi1())
u=s.a.e
t=u.c
u=t==null?u.c=D.U():t
u.h(0,s.gi_())
return!0},
aw:function(a){var u=a.a,t=a.b
if(H.G(this.f)){if(typeof u!=="number")return u.T()
u=-u}if(H.G(this.r)){if(typeof t!=="number")return t.T()
t=-t}return new V.Y(u,t)},
bU:function(a){var u=this
a=H.v(H.f(a,"$iB"),"$ibp")
if(!J.W(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bW:function(a){var u,t,s,r,q,p,o,n=this
a=H.v(H.f(a,"$iB"),"$ibp")
if(!H.G(n.cx))return
if(H.G(n.ch)){u=a.d.M(0,a.y)
u=new V.Y(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.G(n.e)){u=a.c
t=a.d.M(0,a.y)
u=n.aw(new V.Y(t.a,t.b).w(0,2).t(0,u.gai()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=n.aw(new V.Y(s.a,s.b).w(0,2).t(0,u.gai()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sa2(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.M(0,a.z)
n.dx=n.aw(new V.Y(t.a,t.b).w(0,2).t(0,u.gai()))}n.ad()},
bY:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.G(r.cx))return
r.cx=!1
if(H.G(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sW(-t*10*u)
r.ad()}},
fz:function(a){var u=this
if(H.v(H.f(a,"$iB"),"$idU").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fB:function(a){var u,t,s,r,q,p,o,n=this
a=H.v(H.f(a,"$iB"),"$ibp")
if(!J.W(n.d,a.x.b))return
u=a.c
t=a.d
s=t.M(0,a.y)
r=n.aw(new V.Y(s.a,s.b).w(0,2).t(0,u.gai()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sa2(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.M(0,a.z)
n.dx=n.aw(new V.Y(t.a,t.b).w(0,2).t(0,u.gai()))
n.ad()},
i4:function(a){var u=this
H.f(a,"$iB")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
i2:function(a){var u,t,s,r,q,p,o,n=this
a=H.v(H.f(a,"$iB"),"$iek")
if(!H.G(n.cx))return
if(H.G(n.ch)){u=a.d.M(0,a.y)
u=new V.Y(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.G(n.e)){u=a.c
t=a.d.M(0,a.y)
u=n.aw(new V.Y(t.a,t.b).w(0,2).t(0,u.gai()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=n.aw(new V.Y(s.a,s.b).w(0,2).t(0,u.gai()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sa2(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.M(0,a.z)
n.dx=n.aw(new V.Y(t.a,t.b).w(0,2).t(0,u.gai()))}n.ad()},
i0:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.G(r.cx))return
r.cx=!1
if(H.G(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sW(-t*10*u)
r.ad()}},
aZ:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.R()
if(q<p){r.dy=p
u=b.y
r.c.at(0,u)
r.b.at(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.bb(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.w(0,V.bb(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iai:1}
U.es.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.U():u},
S:function(a){var u=this.r
if(u!=null)u.E(a)},
b6:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.U():t
t=r.gfD()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.U():s).h(0,t)
return!0},
fE:function(a){var u,t,s,r,q=this
H.f(a,"$iB")
if(!J.W(q.b,q.a.b.c))return
H.v(a,"$icM")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.w()
r=u+t*s
if(u!==r){q.d=r
u=new D.O("zoom",u,r,[P.A])
u.b=!0
q.S(u)}},
aZ:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.bb(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iai:1}
M.dD.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.U():u},
a0:function(a){var u
H.f(a,"$iB")
u=this.r
if(u!=null)u.E(a)},
b1:function(){return this.a0(null)},
hn:function(a,b){var u,t,s,r,q,p,o,n=M.aD
H.m(b,"$ij",[n],"$aj")
for(u=b.length,t=this.ga_(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.n(t,s)
if(o.a==null)o.sal(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bF([n])
n.b=!0
this.a0(n)},
hp:function(a,b){var u,t,s=M.aD
H.m(b,"$ij",[s],"$aj")
for(u=b.gU(b),t=this.ga_();u.B();)u.gJ(u).gq().L(0,t)
s=new D.bG([s])
s.b=!0
this.a0(s)},
aj:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.as(u,u.length,[H.q(u,0)]);u.B();){t=u.d
if(t!=null)t.aj(a)}s.f=!1},
$aj:function(){return[M.aD]},
$aa4:function(){return[M.aD]},
$iaD:1}
M.dF.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.U():u},
a0:function(a){var u
H.f(a,"$iB")
u=this.r
if(u!=null)u.E(a)},
b1:function(){return this.a0(null)},
sb7:function(a){var u,t,s=this
if(a==null)a=new X.hi()
u=s.b
if(u!==a){if(u!=null)u.gq().L(0,s.ga_())
t=s.b
s.b=a
a.gq().h(0,s.ga_())
u=new D.O("camera",t,s.b,[X.bX])
u.b=!0
s.a0(u)}},
sbh:function(a,b){var u,t,s=this
if(b==null)b=X.lu(null)
u=s.c
if(u!==b){if(u!=null)u.gq().L(0,s.ga_())
t=s.c
s.c=b
b.gq().h(0,s.ga_())
u=new D.O("target",t,s.c,[X.d_])
u.b=!0
s.a0(u)}},
sbi:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().L(0,t.ga_())
u=t.d
t.d=a
if(a!=null)a.gq().h(0,t.ga_())
s=new D.O("technique",u,t.d,[O.bM])
s.b=!0
t.a0(s)}},
aj:function(a){var u=this
a.cH(u.d)
u.c.a1(a)
u.b.a1(a)
u.e.at(0,a)
u.e.aj(a)
u.b.aM(a)
u.c.toString
a.cG()},
$iaD:1}
M.dJ.prototype={
a0:function(a){var u
H.f(a,"$iB")
u=this.y
if(u!=null)u.E(a)},
b1:function(){return this.a0(null)},
fQ:function(a,b){var u,t,s,r,q,p,o,n=E.ao
H.m(b,"$ij",[n],"$aj")
for(u=b.length,t=this.ga_(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c_()
o.sal(null)
o.saT(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sal(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bF([n])
n.b=!0
this.a0(n)},
fS:function(a,b){var u,t,s=E.ao
H.m(b,"$ij",[s],"$aj")
for(u=b.gU(b),t=this.ga_();u.B();)u.gJ(u).gq().L(0,t)
s=new D.bG([s])
s.b=!0
this.a0(s)},
sb7:function(a){var u,t,s=this
if(a==null)a=X.mr(null)
u=s.b
if(u!==a){if(u!=null)u.gq().L(0,s.ga_())
t=s.b
s.b=a
a.gq().h(0,s.ga_())
u=new D.O("camera",t,s.b,[X.bX])
u.b=!0
s.a0(u)}},
sbh:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gq().L(0,t.ga_())
u=t.c
t.c=b
b.gq().h(0,t.ga_())
s=new D.O("target",u,t.c,[X.d_])
s.b=!0
t.a0(s)}},
sbi:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().L(0,t.ga_())
u=t.d
t.d=a
if(a!=null)a.gq().h(0,t.ga_())
s=new D.O("technique",u,t.d,[O.bM])
s.b=!0
t.a0(s)}},
gq:function(){var u=this.y
return u==null?this.y=D.U():u},
aj:function(a){var u,t=this
a.cH(t.d)
t.c.a1(a)
t.b.a1(a)
u=t.d
if(u!=null)u.at(0,a)
for(u=t.e.a,u=new J.as(u,u.length,[H.q(u,0)]);u.B();)u.d.at(0,a)
for(u=t.e.a,u=new J.as(u,u.length,[H.q(u,0)]);u.B();)u.d.aj(a)
t.b.toString
a.cy.aJ()
a.db.aJ()
t.c.toString
a.cG()},
sfa:function(a,b){this.e=H.m(b,"$ia4",[E.ao],"$aa4")},
$iaD:1}
M.aD.prototype={}
A.dz.prototype={}
A.fz.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iC:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dV:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ae.prototype={
gau:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
v:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.ae))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.dX.prototype={
eN:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
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
A.pv(c0,u)
A.px(c0,u)
A.pw(c0,u)
A.pz(c0,u)
A.pA(c0,u)
A.py(c0,u)
A.pB(c0,u)
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
b5.ec(0,s.charCodeAt(0)==0?s:s,A.pu(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.v(b5.y.Y(0,"invViewMat"),"$iax")
if(t)b5.dy=H.v(b5.y.Y(0,"objMat"),"$iax")
if(r)b5.fr=H.v(b5.y.Y(0,"viewObjMat"),"$iax")
b5.fy=H.v(b5.y.Y(0,"projViewObjMat"),"$iax")
if(c0.ry)b5.k1=H.v(b5.y.Y(0,"txt2DMat"),"$id6")
if(c0.x1)b5.k2=H.v(b5.y.Y(0,"txtCubeMat"),"$iax")
if(c0.x2)b5.k3=H.v(b5.y.Y(0,"colorMat"),"$iax")
b5.sf6(H.c([],[A.ax]))
t=c0.y2
if(t>0){b5.k4=H.f(b5.y.Y(0,"bendMatCount"),"$iaK")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.C(P.D(b7+q+b8));(s&&C.a).h(s,H.v(m,"$iax"))}}if(c0.a.a)b5.r2=H.v(b5.y.Y(0,"emissionClr"),"$ia0")
if(c0.b.a)b5.x1=H.v(b5.y.Y(0,"ambientClr"),"$ia0")
if(c0.c.a)b5.y2=H.v(b5.y.Y(0,"diffuseClr"),"$ia0")
if(c0.d.a)b5.dY=H.v(b5.y.Y(0,"invDiffuseClr"),"$ia0")
t=c0.e.a
if(!t)s=!1
else s=!0
if(s){b5.e_=H.v(b5.y.Y(0,"shininess"),"$iaa")
if(t)b5.dZ=H.v(b5.y.Y(0,"specularClr"),"$ia0")}if(c0.cy){b5.e0=H.v(b5.y.Y(0,"envSampler"),"$ibO")
if(c0.r.a)b5.e1=H.v(b5.y.Y(0,"reflectClr"),"$ia0")
t=c0.x.a
if(!t)s=!1
else s=!0
if(s){b5.e2=H.v(b5.y.Y(0,"refraction"),"$iaa")
if(t)b5.e3=H.v(b5.y.Y(0,"refractClr"),"$ia0")}}if(c0.y.a)b5.e4=H.v(b5.y.Y(0,"alpha"),"$iaa")
t=P.l
s=[t,A.aK]
b5.sfh(new H.a5(s))
b5.seV(new H.a5([t,[P.b,A.c9]]))
b5.shx(new H.a5(s))
b5.shy(new H.a5([t,[P.b,A.ca]]))
b5.shU(new H.a5(s))
b5.seW(new H.a5([t,[P.b,A.cc]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.c9],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.i(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ap()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.C(P.D(b7+g+b8))
H.v(m,"$ia0")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.C(P.D(b7+g+b8))
H.v(f,"$ia0")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.C(P.D(b7+g+b8))
H.v(e,"$ia0")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.C(P.D(b7+g+b8))
H.v(m,"$ia0")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.C(P.D(b7+g+b8))
H.v(f,"$ia0")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.C(P.D(b7+o+b8))
H.v(e,"$icb")
a=e}else a=b6
C.a.h(h,new A.c9(b,c,d,m,f,a))}b5.co.k(0,j,h)
q=b5.cn
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.C(P.D(b7+o+b8))
q.k(0,j,H.f(m,"$iaK"))}for(t=c0.Q,s=t.length,r=[A.ca],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.i(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.C(P.D(b7+o+b8))
H.v(m,"$ia0")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.C(P.D(b7+o+b8))
H.v(f,"$ia0")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.C(P.D(b7+o+b8))
H.v(e,"$ia0")
if(typeof j!=="number")return j.ap()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.C(P.D(b7+o+b8))
H.v(a0,"$id6")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.C(P.D(b7+o+b8))
H.v(a0,"$ibO")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.C(P.D(b7+o+b8))
H.v(a0,"$ibO")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.C(P.D(b7+o+b8))
H.v(a2,"$id5")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.C(P.D(b7+o+b8))
H.v(a0,"$iaa")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.C(P.D(b7+o+b8))
H.v(a2,"$iaa")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.C(P.D(b7+o+b8))
H.v(a5,"$iaa")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.ca(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.cq.k(0,j,h)
q=b5.cp
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.C(P.D(b7+o+b8))
q.k(0,j,H.f(m,"$iaK"))}for(t=c0.ch,s=t.length,r=[A.cc],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.i(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.C(P.D(b7+o+b8))
H.v(m,"$ia0")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.C(P.D(b7+o+b8))
H.v(f,"$ia0")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.C(P.D(b7+o+b8))
H.v(e,"$ia0")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.C(P.D(b7+o+b8))
H.v(a0,"$ia0")
if(typeof j!=="number")return j.ap()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.C(P.D(b7+o+b8))
H.v(a2,"$ia0")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.C(P.D(b7+o+b8))
H.v(a5,"$ia0")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.C(P.D(b7+o+b8))
H.v(a9,"$iaa")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.C(P.D(b7+o+b8))
H.v(b0,"$iaa")
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
if(a2==null)H.C(P.D(b7+g+b8))
H.v(a2,"$id5")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.C(P.D(b7+g+b8))
H.v(a2,"$iaa")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.C(P.D(b7+g+b8))
H.v(a5,"$iaa")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.C(P.D(b7+g+b8))
H.v(a2,"$iaa")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.C(P.D(b7+g+b8))
H.v(a5,"$iaa")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.C(P.D(b7+g+b8))
H.v(a9,"$iaa")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.C(P.D(b7+g+b8))
H.v(a2,"$icb")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.C(P.D(b7+o+b8))
H.v(a2,"$icb")
a3=a2}else a3=b6
C.a.h(h,new A.cc(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.cs.k(0,j,h)
q=b5.cr
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.C(P.D(b7+o+b8))
q.k(0,j,H.f(m,"$iaK"))}}},
hN:function(a,b){if(b!=null&&b.d>=6)a.cV(b)},
sf6:function(a){this.r1=H.m(a,"$ib",[A.ax],"$ab")},
sfh:function(a){this.cn=H.m(a,"$iz",[P.l,A.aK],"$az")},
seV:function(a){this.co=H.m(a,"$iz",[P.l,[P.b,A.c9]],"$az")},
shx:function(a){this.cp=H.m(a,"$iz",[P.l,A.aK],"$az")},
shy:function(a){this.cq=H.m(a,"$iz",[P.l,[P.b,A.ca]],"$az")},
shU:function(a){this.cr=H.m(a,"$iz",[P.l,A.aK],"$az")},
seW:function(a){this.cs=H.m(a,"$iz",[P.l,[P.b,A.cc]],"$az")}}
A.aP.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.aT.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.aX.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.hF.prototype={
i:function(a){return this.bb}}
A.c9.prototype={}
A.ca.prototype={}
A.cc.prototype={}
A.cV.prototype={
d_:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
ec:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.dh(b,35633)
r.f=r.dh(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.G(H.lS(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.C(P.D("Failed to link shader: "+H.i(s)))}r.hP()
r.hR()},
a1:function(a){a.a.useProgram(this.r)
this.x.iC()},
dh:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.G(H.lS(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.D("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
hP:function(){var u,t,s,r=this,q=H.c([],[A.dz]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dz(p,t.name,s))}r.x=new A.fz(q)},
hR:function(){var u,t,s,r=this,q=H.c([],[A.el]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.iu(t.type,t.size,t.name,s))}r.y=new A.j7(q)},
aR:function(a,b,c){var u=this.a
if(a===1)return new A.aK(u,b,c)
else return A.lD(u,this.r,b,a,c)},
fe:function(a,b,c){var u=this.a
if(a===1)return new A.cb(u,b,c)
else return A.lD(u,this.r,b,a,c)},
ff:function(a,b,c){var u=this.a
if(a===1)return new A.bO(u,b,c)
else return A.lD(u,this.r,b,a,c)},
br:function(a,b){return new P.eE(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
iu:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aR(b,c,d)
case 5121:return u.aR(b,c,d)
case 5122:return u.aR(b,c,d)
case 5123:return u.aR(b,c,d)
case 5124:return u.aR(b,c,d)
case 5125:return u.aR(b,c,d)
case 5126:return new A.aa(u.a,c,d)
case 35664:return new A.j3(u.a,c,d)
case 35665:return new A.a0(u.a,c,d)
case 35666:return new A.d5(u.a,c,d)
case 35667:return new A.j4(u.a,c,d)
case 35668:return new A.j5(u.a,c,d)
case 35669:return new A.j6(u.a,c,d)
case 35674:return new A.j8(u.a,c,d)
case 35675:return new A.d6(u.a,c,d)
case 35676:return new A.ax(u.a,c,d)
case 35678:return u.fe(b,c,d)
case 35680:return u.ff(b,c,d)
case 35670:throw H.d(u.br("BOOL",c))
case 35671:throw H.d(u.br("BOOL_VEC2",c))
case 35672:throw H.d(u.br("BOOL_VEC3",c))
case 35673:throw H.d(u.br("BOOL_VEC4",c))
default:throw H.d(P.D("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.ec.prototype={}
A.el.prototype={}
A.j7.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
Y:function(a,b){var u=this.j(0,b)
if(u==null)throw H.d(P.D("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aK.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.j4.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.j5.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.j6.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.j2.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
si6:function(a){H.m(a,"$ib",[P.l],"$ab")}}
A.aa.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.j3.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.a0.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.d5.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.j8.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.d6.prototype={
aq:function(a){var u=new Float32Array(H.ch(H.m(a,"$ib",[P.A],"$ab")))
C.c.ex(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.ax.prototype={
aq:function(a){var u=new Float32Array(H.ch(H.m(a,"$ib",[P.A],"$ab")))
C.c.ey(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.cb.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.bO.prototype={
cV:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.ku.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cB(s.b,b).cB(s.d.cB(s.c,b),c)
a.sa2(0,new V.a_(r.a,r.b,r.c))
a.ser(r.t(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
a.sdO(new V.aH(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:5}
F.kG.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:11}
F.kI.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.E(p)
s=-s*p
u=r*p
a.sa2(0,new V.a_(s,u,q))
u=new V.K(s,u,q)
a.ser(u.t(0,Math.sqrt(u.C(u))))
a.sdO(new V.aH(1-c,2+c,-1,-1))},
$S:5}
F.kJ.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:19}
F.kK.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:19}
F.lh.prototype={
$2:function(a,b){return 0},
$S:11}
F.li.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.E(s)
u=a.f
t=new V.K(u.a,u.b,u.c)
s=t.t(0,Math.sqrt(t.C(t))).w(0,this.b+s)
a.sa2(0,new V.a_(s.a,s.b,s.c))},
$S:5}
F.lk.prototype={
$1:function(a){return new V.a_(Math.cos(a),Math.sin(a),0)},
$S:18}
F.kS.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.a_(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:18}
F.kH.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.m5(n.$1(o),m)
m=J.m5(n.$1(o+3.141592653589793/p.c),m).M(0,l)
m=new V.K(m.a,m.b,m.c)
u=m.t(0,Math.sqrt(m.C(m)))
n=$.mO
if(n==null){n=new V.K(1,0,0)
$.mO=n
t=n}else t=n
n=u.aE(!J.W(u,t)?V.mQ():t)
s=n.t(0,Math.sqrt(n.C(n)))
n=s.aE(u)
t=n.t(0,Math.sqrt(n.C(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.w(0,n*m)
m=s.w(0,q*m)
a.sa2(0,l.D(0,new V.a_(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:5}
F.a9.prototype={
b9:function(){var u=this
if(!u.gba()){C.a.L(u.a.a.d.b,u)
u.a.a.a5()}u.c5()
u.c6()
u.hD()},
ca:function(a){this.a=a
C.a.h(a.d.b,this)},
cb:function(a){this.b=a
C.a.h(a.d.c,this)},
hO:function(a){this.c=a
C.a.h(a.d.d,this)},
c5:function(){var u=this.a
if(u!=null){C.a.L(u.d.b,this)
this.a=null}},
c6:function(){var u=this.b
if(u!=null){C.a.L(u.d.c,this)
this.b=null}},
hD:function(){var u=this.c
if(u!=null){C.a.L(u.d.d,this)
this.c=null}},
gba:function(){return this.a==null||this.b==null||this.c==null},
f5:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d8()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.ed())return
return s.t(0,Math.sqrt(s.C(s)))},
f9:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.M(0,q)
r=new V.K(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.C(r)))
r=t.M(0,q)
r=new V.K(r.a,r.b,r.c)
r=s.aE(r.t(0,Math.sqrt(r.C(r))))
return r.t(0,Math.sqrt(r.C(r)))},
ci:function(){var u,t=this
if(t.d!=null)return!0
u=t.f5()
if(u==null){u=t.f9()
if(u==null)return!1}t.d=u
t.a.a.a5()
return!0},
f4:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d8()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.ed())return
return s.t(0,Math.sqrt(s.C(s)))},
f8:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.S().a){l=d.M(0,g)
l=new V.K(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.M(0,g).w(0,p).D(0,g).M(0,j)
l=new V.K(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.C(l)))
l=o.aE(q)
l=l.t(0,Math.sqrt(l.C(l))).aE(o)
q=l.t(0,Math.sqrt(l.C(l)))}return q},
cf:function(){var u,t=this
if(t.e!=null)return!0
u=t.f4()
if(u==null){u=t.f8()
if(u==null)return!1}t.e=u
t.a.a.a5()
return!0},
gio:function(a){var u=this
if(J.W(u.a,u.b))return!0
if(J.W(u.b,u.c))return!0
if(J.W(u.c,u.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u,t,s=this
if(s.gba())return a+"disposed"
u=a+C.b.ao(J.ar(s.a.e),0)+", "+C.b.ao(J.ar(s.b.e),0)+", "+C.b.ao(J.ar(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
O:function(){return this.G("")}}
F.h5.prototype={}
F.iy.prototype={
bd:function(a,b,c){var u,t=b.a
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
if(t==u.e){t=b.c
t.a.a.A()
t=t.e
u=c.c
u.a.a.A()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.c
u.a.a.A()
if(t==u.e){t=b.c
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.A()
t=t.e
u=c.c
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
if(t==u.e){t=b.c
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bo.prototype={
b9:function(){var u=this
if(!u.gba()){C.a.L(u.a.a.c.b,u)
u.a.a.a5()}u.c5()
u.c6()},
ca:function(a){this.a=a
C.a.h(a.c.b,this)},
cb:function(a){this.b=a
C.a.h(a.c.c,this)},
c5:function(){var u=this.a
if(u!=null){C.a.L(u.c.b,this)
this.a=null}},
c6:function(){var u=this.b
if(u!=null){C.a.L(u.c.c,this)
this.b=null}},
gba:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){if(this.gba())return a+"disposed"
return a+C.b.ao(J.ar(this.a.e),0)+", "+C.b.ao(J.ar(this.b.e),0)},
O:function(){return this.G("")}}
F.hq.prototype={}
F.j1.prototype={
bd:function(a,b,c){var u,t=b.a
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
return t==u.e}else{t=b.a
t.a.a.A()
t=t.e
u=c.b
u.a.a.A()
if(t==u.e){t=b.b
t.a.a.A()
t=t.e
u=c.a
u.a.a.A()
return t==u.e}else return!1}}}
F.bK.prototype={
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ao(J.ar(u.e),0)},
O:function(){return this.G("")}}
F.ea.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.U():u},
be:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.A()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){r=g[s]
h.a.h(0,r.ir())}h.a.A()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bK()
if(n.a==null)H.C(P.D("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.E(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.A()
p=p.e
if(typeof p!=="number")return p.D()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.oc(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.A()
p=p.e
if(typeof p!=="number")return p.D()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cC(l,k,i)}g=h.e
if(g!=null)g.az(0)},
ar:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ar()||!1
if(!t.a.ar())u=!1
s=t.e
if(s!=null)s.az(0)
return u},
iU:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.q(o,0)])
for(o=[F.ap];u.length!==0;){t=C.a.giH(u)
C.a.el(u,0)
if(t!=null){s=H.c([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.e(u,r)
q=u[r]
if(q!=null&&a.bd(0,t,q)){C.a.h(s,q)
C.a.el(u,r)}}if(s.length>1)b.be(s)}}p.a.A()
p.c.cK()
p.d.cK()
p.b.jb()
p.c.cL(new F.j1())
p.d.cL(new F.iy())
o=p.e
if(o!=null)o.az(0)},
cd:function(){this.iU(new F.ju(),new F.i2())},
dR:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.b2()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bu().a)!==0)++s
if((t&$.bt().a)!==0)++s
if((t&$.bT().a)!==0)++s
if((t&$.bU().a)!==0)++s
if((t&$.dt().a)!==0)++s
if((t&$.du().a)!==0)++s
if((t&$.cs().a)!==0)++s
if((t&$.bs().a)!==0)++s
r=a3.gcW(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.A
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.dB])
for(n=0,m=0;m<s;++m){l=a3.ig(m)
k=l.gcW(l)
C.a.k(o,m,new Z.dB(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.e(u,j)
i=u[j].iS(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.ch(p)),35044)
u.bindBuffer(a0,null)
e=new Z.cw(new Z.eu(a0,f),o,a3)
e.sfq(H.c([],[Z.bE]))
if(a.b.b.length!==0){t=P.l
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.A()
C.a.h(d,c.e)}b=Z.lH(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bE(0,d.length,b))}if(a.c.b.length!==0){t=P.l
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.A()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.A()
C.a.h(d,c.e)}b=Z.lH(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bE(1,d.length,b))}if(a.d.b.length!==0){t=P.l
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.A()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.A()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].c
c.a.a.A()
C.a.h(d,c.e)}b=Z.lH(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bE(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.h])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.G(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.G(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.G(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.G(t))}return C.a.m(s,"\n")},
a5:function(){var u=this.e
if(u!=null)u.E(null)},
$iql:1}
F.ir.prototype={
dJ:function(a){var u,t,s,r,q,p,o
H.m(a,"$ib",[F.ap],"$ab")
u=H.c([],[F.a9])
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
C.a.h(u,F.cC(s,p,o))}}return u},
ia:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.ap],"$ab")
u=H.c([],[F.a9])
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
C.a.h(u,F.cC(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cC(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cC(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cC(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
cL:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.bd(0,p,n)){p.b9()
break}}}}},
cK:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.gio(s)
if(t)s.b9()}},
ar:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].ci())s=!1
return s},
cg:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].cf())s=!1
return s},
i:function(a){return this.O()},
G:function(a){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(a))
return C.a.m(r,"\n")},
O:function(){return this.G("")},
sfl:function(a){this.b=H.m(a,"$ib",[F.a9],"$ab")}}
F.is.prototype={
gn:function(a){return this.b.length},
cL:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.bd(0,p,n)){p.b9()
break}}}}},
cK:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.W(s.a,s.b)
if(t)s.b9()}},
i:function(a){return this.O()},
G:function(a){var u,t,s=H.c([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].G(a+(""+u+". ")))}return C.a.m(s,"\n")},
O:function(){return this.G("")},
sfs:function(a){this.b=H.m(a,"$ib",[F.bo],"$ab")}}
F.it.prototype={
gn:function(a){return this.b.length},
jb:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.L(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.E(null)}s=t.a
if(s!=null){C.a.L(s.b.b,t)
t.a=null}}}},
i:function(a){return this.O()},
G:function(a){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(a))
return C.a.m(r,"\n")},
O:function(){return this.G("")},
sc2:function(a){this.b=H.m(a,"$ib",[F.bK],"$ab")}}
F.ap.prototype={
cl:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.et(u.cx,r,o,t,s,q,p,a,n)},
ir:function(){return this.cl(null)},
sa2:function(a,b){var u
if(!J.W(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a5()}},
ser:function(a){var u
if(!J.W(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a5()}},
sdO:function(a){var u
if(!J.W(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a5()}},
iS:function(a){var u,t,s=this
if(a.v(0,$.b2())){u=s.f
t=[P.A]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.bu())){u=s.r
t=[P.A]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.bt())){u=s.x
t=[P.A]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.bT())){u=s.y
t=[P.A]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.v(0,$.bU())){u=s.z
t=[P.A]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.dt())){u=s.Q
t=[P.A]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.du())){u=s.Q
t=[P.A]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.cs()))return H.c([s.ch],[P.A])
else if(a.v(0,$.bs())){u=s.cx
t=[P.A]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.A])},
ci:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d8()
t.d.H(0,new F.jz(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a5()
s=t.a.e
if(s!=null)s.az(0)}return!0},
cf:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d8()
t.d.H(0,new F.jy(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a5()
s=t.a.e
if(s!=null)s.az(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u,t,s=this,r="-",q=H.c([],[P.h])
C.a.h(q,C.b.ao(J.ar(s.e),0))
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
C.a.h(q,V.Z(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
O:function(){return this.G("")}}
F.jz.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.D(0,u)}},
$S:10}
F.jy.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.D(0,u)}},
$S:10}
F.jp.prototype={
A:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.D("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a5()
return!0},
dK:function(a,b,c,d,e,f,g){var u=F.et(a,null,b,c,d,e,f,g,0)
this.h(0,u)
return u},
bs:function(a,b,c,d,e,f){return this.dK(a,b,c,null,d,e,f)},
ib:function(a,b,c,d,e,f){return this.dK(a,b,c,d,e,f,null)},
gn:function(a){return this.c.length},
ar:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].ci()
return!0},
cg:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].cf()
return!0},
im:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.W(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
this.A()
u=H.c([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
O:function(){return this.G("")},
si7:function(a){this.c=H.m(a,"$ib",[F.ap],"$ab")}}
F.jq.prototype={
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
H.n(b,{func:1,ret:-1,args:[F.a9]})
C.a.H(u.b,b)
C.a.H(u.c,new F.jr(u,b))
C.a.H(u.d,new F.js(u,b))},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
sfm:function(a){this.b=H.m(a,"$ib",[F.a9],"$ab")},
sfn:function(a){this.c=H.m(a,"$ib",[F.a9],"$ab")},
sfo:function(a){this.d=H.m(a,"$ib",[F.a9],"$ab")}}
F.jr.prototype={
$1:function(a){H.f(a,"$ia9")
if(!J.W(a.a,this.a))this.b.$1(a)},
$S:10}
F.js.prototype={
$1:function(a){var u
H.f(a,"$ia9")
u=this.a
if(!J.W(a.a,u)&&!J.W(a.b,u))this.b.$1(a)},
$S:10}
F.jt.prototype={
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.e(t,u)
return t[u]}else{if(b<0)return H.e(t,b)
return t[b]}},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
sft:function(a){this.b=H.m(a,"$ib",[F.bo],"$ab")},
sfu:function(a){this.c=H.m(a,"$ib",[F.bo],"$ab")}}
F.jv.prototype={}
F.ju.prototype={
bd:function(a,b,c){return J.W(b.f,c.f)}}
F.jw.prototype={}
F.i2.prototype={
be:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[F.ap],"$ab")
u=V.d8()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.K(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.t(0,Math.sqrt(u.C(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.u)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.t(0,Math.sqrt(o*o+n*n+m*m))}if(!J.W(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.E(null)}}}return}}
F.jx.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
sc2:function(a){this.b=H.m(a,"$ib",[F.bK],"$ab")}}
O.dW.prototype={
gq:function(){var u=this.fr
return u==null?this.fr=D.U():u},
a4:function(a){var u
H.f(a,"$iB")
u=this.fr
if(u!=null)u.E(a)},
c1:function(){return this.a4(null)},
dz:function(a){H.f(a,"$iB")
this.a=null
this.a4(a)},
hI:function(){return this.dz(null)},
fK:function(a,b){var u=V.au
H.m(b,"$ij",[u],"$aj")
u=new D.bF([u])
u.b=!0
this.a4(u)},
fM:function(a,b){var u=V.au
H.m(b,"$ij",[u],"$aj")
u=new D.bG([u])
u.b=!0
this.a4(u)},
de:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.l,h=new H.a5([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=h.j(0,0)
h.k(0,0,r==null?1:r)}q=H.c([],[A.aP])
h.H(0,new O.hJ(j,q))
C.a.bH(q,new O.hK())
p=new H.a5([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){o=u[s]
r=o.gb8()
n=p.j(0,o.gb8())
p.k(0,r,n==null?1:n)}m=H.c([],[A.aT])
p.H(0,new O.hL(j,m))
C.a.bH(m,new O.hM())
l=new H.a5([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.u)(i),++s){o=i[s]
t=o.gb8()
r=l.j(0,o.gb8())
l.k(0,t,r==null?1:r)}k=H.c([],[A.aX])
l.H(0,new O.hN(j,k))
C.a.bH(k,new O.hO())
i=C.d.af(j.e.a.length+3,4)
j.dy.e
return A.oj(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
f3:function(a,b){H.m(a,"$ib",[T.d1],"$ab")
if(b!=null)if(!C.a.V(a,b)){b.a=a.length
C.a.h(a,b)}},
at:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.as(u,u.length,[H.q(u,0)]);u.B();){t=u.d
t.toString
s=$.jo
if(s==null)s=$.jo=new V.K(0,0,1)
t.a=s
r=$.jn
t.d=r==null?$.jn=new V.K(0,1,0):r
r=$.jm
t.e=r==null?$.jm=new V.K(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bD(s)
r=s.a
p=s.b
o=s.c
t.a=s.t(0,Math.sqrt(r*r+p*p+o*o))
o=q.bD(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.t(0,Math.sqrt(p*p+r*r+s*s))
s=q.bD(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.t(0,Math.sqrt(r*r+p*p+o*o))}}}},
em:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.de()
u=H.f(b4.fr.j(0,b3.bb),"$idX")
if(u==null){u=A.oi(b3,b4.a)
b4.dM(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.dX
b3=b5.e
if(!(b3 instanceof Z.cw))b3=b5.e=null
if(b3==null||!b3.d.v(0,s)){b3=t.k3
if(b3)b5.d.ar()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.cg()
q.a.cg()
q=q.e
if(q!=null)q.az(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.im()
p=p.e
if(p!=null)p.az(0)}n=b5.d.dR(new Z.ev(b4.a),s)
n.aG($.b2()).e=b2.a.Q.c
if(b3)n.aG($.bu()).e=b2.a.cx.c
if(r)n.aG($.bt()).e=b2.a.ch.c
if(t.r1)n.aG($.bT()).e=b2.a.cy.c
if(q)n.aG($.bU()).e=b2.a.db.c
if(t.rx)n.aG($.bs()).e=b2.a.dx.c
b5.e=n}b3=T.d1
m=H.c([],[b3])
b2.a.a1(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.ga8(q)
r=r.dy
r.toString
r.aq(q.ak(0,!0))}if(t.fr){r=b2.a
q=b4.cx
if(q==null){q=b4.db
q=q.ga8(q)
p=b4.dx
p=b4.cx=q.w(0,p.ga8(p))
q=p}r=r.fr
r.toString
r.aq(q.ak(0,!0))}r=b2.a
q=b4.ch
if(q==null){q=b4.gj9()
p=b4.dx
p=b4.ch=q.w(0,p.ga8(p))
q=p}r=r.fy
r.toString
r.aq(q.ak(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.aq(C.k.ak(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.aq(C.k.ak(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.aq(C.k.ak(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.c.bE(r.a,r.d,l)
for(r=[P.A],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.e(p,k)
p=p[k]
q.toString
H.f(p,"$iau")
q=q.r1
if(k>=q.length)return H.e(q,k)
q=q[k]
j=new Float32Array(H.ch(H.m(p.ak(0,!0),"$ib",r,"$ab")))
C.c.ey(q.a,q.d,!1,j)}}if(t.a.a){r=b2.a
q=b2.f.f
r=r.r2
C.c.Z(r.a,r.d,q.a,q.b,q.c)}if(t.id){if(t.b.a){r=b2.a
q=b2.r.f
r=r.x1
C.c.Z(r.a,r.d,q.a,q.b,q.c)}if(t.c.a){r=b2.a
q=b2.x.f
r=r.y2
C.c.Z(r.a,r.d,q.a,q.b,q.c)}if(t.d.a){r=b2.a
q=b2.y.f
r=r.dY
C.c.Z(r.a,r.d,q.a,q.b,q.c)}r=t.e.a
if(!r)q=!1
else q=!0
if(q){q=b2.a
p=b2.z.ch
q=q.e_
C.c.a6(q.a,q.d,p)}if(r){r=b2.a
q=b2.z.f
r=r.dZ
C.c.Z(r.a,r.d,q.a,q.b,q.c)}r=t.z
if(r.length>0){q=b4.db
i=q.ga8(q)
q=P.l
h=new H.a5([q,q])
for(q=b2.dx.e,p=q.length,g=0;g<q.length;q.length===p||(0,H.u)(q),++g){f=q[g]
e=h.j(0,0)
if(e==null)e=0
h.k(0,0,e+1)
d=J.dv(b2.a.co.j(0,0),e)
o=i.bD(f.a)
c=o.a
b=o.b
a=o.c
a=o.t(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
o=a.b
a=a.c
C.c.Z(b.a,b.d,c,o,a)
a=f.c
o=d.f
C.c.Z(o.a,o.d,a.a,a.b,a.c)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.u)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.cn.j(0,p)
C.c.bE(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.ga8(q)
q=P.l
a0=new H.a5([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],c=[P.A],g=0;g<q.length;q.length===p||(0,H.u)(q),++g){f=q[g]
a1=f.gb8()
e=a0.j(0,a1)
if(e==null)e=0
a0.k(0,a1,e+1)
d=J.dv(b2.a.cq.j(0,a1),e)
a2=i.w(0,f.ga8(f))
b=f.ga8(f)
a=$.cR
b=b.cO(a==null?$.cR=new V.a_(0,0,0):a)
a=d.b
C.c.Z(a.a,a.d,b.a,b.b,b.c)
b=$.cR
b=a2.cO(b==null?$.cR=new V.a_(0,0,0):b)
a=d.c
C.c.Z(a.a,a.d,b.a,b.b,b.c)
b=f.gp(f)
a=d.e
C.c.Z(a.a,a.d,b.a,b.b,b.c)
f.gaL()
b=a2.cz(0)
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
j=new Float32Array(H.ch(H.m(new V.dZ(a,a3,a4,a5,a6,a7,a8,a9,b).ak(0,!0),"$ib",c,"$ab")))
C.c.ex(b0.a,b0.d,!1,j)
f.gaL()
b=f.gaL()
H.m(m,"$ib",o,"$ab")
if(!C.a.V(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gaL()
a=b.gbc(b)
if(a){a=d.f
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}f.gb0()
b=f.geF()
a=d.x
a.toString
a3=b.giy(b)
a4=b.giz(b)
a5=b.giA()
b=b.gix()
C.c.ew(a.a,a.d,a3,a4,a5,b)
b=f.gb0()
if(!C.a.V(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gb0()
a=b.gbc(b)
if(a){a=d.r
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}if(f.giD()){b=f.gih()
a=d.y
C.c.a6(a.a,a.d,b)
b=f.gii()
a=d.z
C.c.a6(a.a,a.d,b)
b=f.gij()
a=d.Q
C.c.a6(a.a,a.d,b)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.u)(r),++g){p=r[g].a
l=a0.j(0,p)
if(l==null)l=0
p=b2.a.cp.j(0,p)
C.c.bE(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.ga8(q)
q=P.l
b1=new H.a5([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.u)(q),++g){f=q[g]
a1=f.gb8()
e=b1.j(0,a1)
if(e==null)e=0
b1.k(0,a1,e+1)
d=J.dv(b2.a.cs.j(0,a1),e)
o=f.gj8(f)
c=d.b
C.c.Z(c.a,c.d,o.a,o.b,o.c)
o=f.gjs(f).jK()
c=d.c
C.c.Z(c.a,c.d,o.a,o.b,o.c)
o=i.cO(f.gj8(f))
c=d.d
C.c.Z(c.a,c.d,o.a,o.b,o.c)
o=f.gp(f)
c=d.e
C.c.Z(c.a,c.d,o.a,o.b,o.c)
f.gaL()
o=f.gcP()
c=d.f
C.c.Z(c.a,c.d,o.a,o.b,o.c)
o=f.gcM(f)
c=d.r
C.c.Z(c.a,c.d,o.a,o.b,o.c)
o=f.gjL()
c=d.x
C.c.a6(c.a,c.d,o)
o=f.gjM()
c=d.y
C.c.a6(c.a,c.d,o)
f.gaL()
o=f.gaL()
H.m(m,"$ib",b3,"$ab")
if(!C.a.V(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gaL()
c=o.gbc(o)
if(c){c=d.dx
c.toString
b=o.gbc(o)
if(!b)c.a.uniform1i(c.d,0)
else{o=o.giM(o)
c.a.uniform1i(c.d,o)}}f.gb0()
o=f.geF()
c=d.z
c.toString
b=o.giy(o)
a=o.giz(o)
a3=o.giA()
o=o.gix()
C.c.ew(c.a,c.d,b,a,a3,o)
o=f.gb0()
if(!C.a.V(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gb0()
c=o.gbc(o)
if(c){c=d.dy
c.toString
b=o.gbc(o)
if(!b)c.a.uniform1i(c.d,0)
else{o=o.giM(o)
c.a.uniform1i(c.d,o)}}if(f.gjt()){o=f.gjr()
c=d.Q
C.c.a6(c.a,c.d,o)
o=f.gjq()
c=d.ch
C.c.a6(c.a,c.d,o)}if(f.giD()){o=f.gih()
c=d.cx
C.c.a6(c.a,c.d,o)
o=f.gii()
c=d.cy
C.c.a6(c.a,c.d,o)
o=f.gij()
c=d.db
C.c.a6(c.a,c.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.u)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.cr.j(0,q)
C.c.bE(q.a,q.d,l)}}}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.ga8(r).cz(0)}b3=b3.id
b3.toString
b3.aq(r.ak(0,!0))}if(t.cy){b2.f3(m,b2.ch)
b3=b2.a
r=b2.ch
b3.hN(b3.e0,r)
if(t.r.a){b3=b2.a
r=b2.cx.f
b3=b3.e1
C.c.Z(b3.a,b3.d,r.a,r.b,r.c)}b3=t.x.a
if(!b3)r=!1
else r=!0
if(r){r=b2.a
q=b2.cy.ch
r=r.e2
C.c.a6(r.a,r.d,q)}if(b3){b3=b2.a
r=b2.cy.f
b3=b3.e3
C.c.Z(b3.a,b3.d,r.a,r.b,r.c)}}b3=t.y.a
r=!b3
if(r)q=!1
else q=!0
if(q){if(b3){b3=b2.a
q=b2.db.f
b3=b3.e4
C.c.a6(b3.a,b3.d,q)}b3=b4.a
b3.enable(3042)
b3.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a1(b4)
b3=b5.e
b3.a1(b4)
b3.aj(b4)
b3.aM(b4)
if(r)b3=!1
else b3=!0
if(b3)b4.a.disable(3042)
for(b3=b4.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b3.activeTexture(33984+r.a)
b3.bindTexture(34067,null)}}r=b2.a
r.toString
b3.useProgram(null)
r.x.dV()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.de().bb},
sf7:function(a){this.e=H.m(a,"$ia4",[V.au],"$aa4")}}
O.hJ.prototype={
$2:function(a,b){H.ad(a)
H.ad(b)
if(typeof b!=="number")return b.D()
return C.a.h(this.b,new A.aP(a,C.d.af(b+3,4)*4))},
$S:12}
O.hK.prototype={
$2:function(a,b){H.f(a,"$iaP")
H.f(b,"$iaP")
return J.ln(a.a,b.a)},
$S:51}
O.hL.prototype={
$2:function(a,b){H.ad(a)
H.ad(b)
if(typeof b!=="number")return b.D()
return C.a.h(this.b,new A.aT(a,C.d.af(b+3,4)*4))},
$S:12}
O.hM.prototype={
$2:function(a,b){H.f(a,"$iaT")
H.f(b,"$iaT")
return J.ln(a.a,b.a)},
$S:52}
O.hN.prototype={
$2:function(a,b){H.ad(a)
H.ad(b)
if(typeof b!=="number")return b.D()
return C.a.h(this.b,new A.aX(a,C.d.af(b+3,4)*4))},
$S:12}
O.hO.prototype={
$2:function(a,b){H.f(a,"$iaX")
H.f(b,"$iaX")
return J.ln(a.a,b.a)},
$S:53}
O.hD.prototype={
aC:function(){var u,t=this
t.cY()
u=t.f
if(!(Math.abs(u-1)<$.S().a)){t.f=1
u=new D.O(t.b,u,1,[P.A])
u.b=!0
t.a.a4(u)}}}
O.dY.prototype={
aC:function(){},
bq:function(a){var u,t,s=this
if(!s.c.v(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aC()
u=s.a
u.a=null
u.a4(null)}}}
O.hE.prototype={}
O.ba.prototype={
dB:function(a){var u,t,s=this
if(!s.f.v(0,a)){u=s.f
s.f=a
t=new D.O(s.b+".color",u,a,[V.t])
t.b=!0
s.a.a4(t)}},
aC:function(){this.cY()
this.dB(new V.t(1,1,1))},
sp:function(a,b){this.bq(new A.ae(!0,!1,!1))
this.dB(b)}}
O.hG.prototype={}
O.hH.prototype={
c7:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.S().a)){u.ch=a
t=new D.O(u.b+".refraction",t,a,[P.A])
t.b=!0
u.a.a4(t)}},
aC:function(){this.cZ()
this.c7(1)},
saF:function(a){var u=this
if(a<=0){u.bq(new A.ae(!1,!1,!1))
u.c7(0)}else{u.bq(new A.ae(!0,!1,!1))
u.c7(a)}}}
O.hI.prototype={
dC:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.S().a)){u.ch=a
t=new D.O(u.b+".shininess",t,a,[P.A])
t.b=!0
u.a.a4(t)}},
aC:function(){this.cZ()
this.dC(100)}}
O.eb.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.U():u},
a4:function(a){var u
H.f(a,"$iB")
u=this.e
if(u!=null)u.E(a)},
c1:function(){return this.a4(null)},
em:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.f(a.fr.j(0,n),"$iec")
if(u==null){t=a.a
u=new A.ec(t,n)
u.d_(t,n)
u.ec(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.v(u.y.j(0,"fov"),"$iaa")
u.ch=H.v(u.y.j(0,"ratio"),"$iaa")
u.cx=H.v(u.y.j(0,"boxClr"),"$ia0")
u.cy=H.v(u.y.j(0,"boxTxt"),"$ibO")
u.db=H.v(u.y.j(0,"viewMat"),"$iax")
a.dM(u)}o.a=u}if(b.e==null){t=b.d.dR(new Z.ev(a.a),$.b2())
t.aG($.b2()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.a1(a)}t=a.d
s=a.c
r=o.a
r.a1(a)
q=o.b
p=r.Q
C.c.a6(p.a,p.d,q)
q=r.ch
C.c.a6(q.a,q.d,t/s)
s=o.c
r.cy.cV(s)
s=o.d
t=r.cx
C.c.Z(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga8(s).cz(0)
r=r.db
r.toString
r.aq(s.ak(0,!0))
t=b.e
if(t instanceof Z.cw){t.a1(a)
t.aj(a)
t.aM(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.dV()
t=o.c
if(t!=null)t.aM(a)}}
O.bM.prototype={}
T.d1.prototype={}
T.d2.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.U():u},
a1:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
aM:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.iP.prototype={
aS:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.o
W.ab(t,"load",H.n(new T.iQ(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
hJ:function(a,b,c){var u,t,s,r
b=V.m_(b)
u=V.m_(a.width)
t=V.m_(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.lq()
s.width=u
s.height=t
r=H.f(C.j.eC(s,"2d"),"$icx")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.pO(r.getImageData(0,0,s.width,s.height))}}}
T.iQ.prototype={
$1:function(a){var u=this,t=u.a,s=t.hJ(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.c.ji(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.iB()}++t.e},
$S:13}
V.bk.prototype={
aI:function(a,b){return!0},
i:function(a){return"all"},
$iaA:1}
V.aA.prototype={}
V.dV.prototype={
aI:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)if(u[s].aI(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sae:function(a){this.a=H.m(a,"$ib",[V.aA],"$ab")},
$iaA:1}
V.av.prototype={
aI:function(a,b){return!this.eK(0,b)},
i:function(a){return"!["+this.cX(0)+"]"}}
V.ie.prototype={
aI:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c6(this.a),t=H.c6(this.b)
return u+".."+t},
$iaA:1}
V.ip.prototype={
eP:function(a){var u,t
if(a.a.length<=0)throw H.d(P.D("May not create a SetMatcher with zero characters."))
u=new H.a5([P.l,P.P])
for(t=new H.cJ(a,a.gn(a),[H.am(a,"y",0)]);t.B();)u.k(0,t.d,!0)
this.shM(u)},
aI:function(a,b){return this.a.bt(0,b)},
i:function(a){var u=this.a
return P.cZ(u.gaa(u),0,null)},
shM:function(a){this.a=H.m(a,"$iz",[P.l,P.P],"$az")},
$iaA:1}
V.cW.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d4(this.a.l(0,b))
r.sae(H.c([],[V.aA]))
r.c=!1
C.a.h(this.c,r)
return r},
iG:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.aI(0,a))return r}return},
i:function(a){return this.b},
si5:function(a){this.c=H.m(a,"$ib",[V.d4],"$ab")}}
V.ej.prototype={
i:function(a){var u=H.m1(this.b,"\n","\\n"),t=H.m1(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d3.prototype={
aK:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.h],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.u)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shE:function(a){var u=P.h
this.c=H.m(a,"$iz",[u,u],"$az")}}
V.iT.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cW(this,b)
u.si5(H.c([],[V.d4]))
u.d=null
this.a.k(0,b,u)}return u},
P:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.d3(a)
u=P.h
t.shE(new H.a5([u,u]))
this.b.k(0,a,t)}return t},
ev:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.c([],[V.ej]),k=this.c,j=[P.l],i=H.c([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.F(a,s)
q=k.iG(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cZ(i,0,m)
throw H.d(P.D("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.c([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cZ(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.ej(n==null?o.b:n,p,s)}++s}}},
shW:function(a){this.a=H.m(a,"$iz",[P.h,V.cW],"$az")},
shZ:function(a){this.b=H.m(a,"$iz",[P.h,V.d3],"$az")}}
V.d4.prototype={
i:function(a){return this.b.b+": "+this.cX(0)}}
X.bX.prototype={$ic4:1}
X.hc.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.U():u},
av:function(a){var u=this.x
if(u!=null)u.E(a)},
sdS:function(a,b){var u
if(this.b){this.b=!1
u=new D.O("clearColor",!0,!1,[P.P])
u.b=!0
this.av(u)}},
a1:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.E(u)
q=C.e.as(r*u)
r=s.b
if(typeof t!=="number")return H.E(t)
p=C.e.as(r*t)
r=C.e.as(s.c*u)
a.c=r
s=C.e.as(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.hi.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.U():u},
a1:function(a){var u
a.cy.bB(V.c3())
u=V.c3()
a.db.bB(u)},
aM:function(a){a.cy.aJ()
a.db.aJ()},
$ic4:1,
$ibX:1}
X.e4.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.U():u},
av:function(a){var u
H.f(a,"$iB")
u=this.f
if(u!=null)u.E(a)},
f0:function(){return this.av(null)},
a1:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.bb(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bB(k)
r=$.ms
if(r==null){r=V.mu()
q=V.lG()
p=$.mN
r=V.mn(r,q,p==null?$.mN=new V.K(0,0,-1):p)
$.ms=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aZ(0,a,s)
if(t!=null)u=t.w(0,u)}a.db.bB(u)},
aM:function(a){a.cy.aJ()
a.db.aJ()},
$ic4:1,
$ibX:1}
X.d_.prototype={}
V.by.prototype={
bl:function(a){this.b=new P.hg(C.Q)
this.c=null
this.sbQ(H.c([],[[P.b,W.aF]]))},
N:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.aF]))
u=a.split("\n")
for(l=u.length,t=[W.aF],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.M(q)
o=m.b.fd(q,0,q.length)
n=o==null?q:o
C.O.eE(p,H.m1(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gay(m.d),p)}},
ej:function(a,b){var u,t,s,r,q=this
H.m(b,"$ib",[P.h],"$ab")
q.sbQ(H.c([],[[P.b,W.aF]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bu():t).ev(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)q.bA(t[r])},
sbQ:function(a){this.d=H.m(a,"$ib",[[P.b,W.aF]],"$ab")}}
V.lg.prototype={
$1:function(a){var u
H.f(a,"$ibe")
u=C.e.eu(this.a.giK(),2)
if(u!=="0.00")P.m0(u+" fps")},
$S:55}
V.fT.prototype={
bA:function(a){var u=this
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
bu:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iU()
a1.c=a1.l(0,r)
u=a1.l(0,r).m(0,q)
t=V.w(new H.r("_"))
C.a.h(u.a,t)
t=V.a2("a","z")
C.a.h(u.a,t)
t=V.a2("A","Z")
C.a.h(u.a,t)
t=a1.l(0,q).m(0,q)
u=V.w(new H.r("_"))
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
t=V.w(new H.r("."))
C.a.h(u.a,t)
t=a1.l(0,o).m(0,n)
u=V.a2("0","9")
C.a.h(t.a,u)
u=a1.l(0,n).m(0,n)
t=V.a2("0","9")
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
C.a.h(a1.l(0,k).m(0,k).a,new V.bk())
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
C.a.h(a1.l(0,h).m(0,h).a,new V.bk())
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
t=new V.av()
s=[V.aA]
t.sae(H.c([],s))
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
t=new V.av()
t.sae(H.c([],s))
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
t.aK(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aK(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aK(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.hd.prototype={
bA:function(a){var u=this
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
bu:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iU()
e.c=e.l(0,r)
u=e.l(0,r).m(0,q)
t=V.w(new H.r("_"))
C.a.h(u.a,t)
t=V.a2("a","z")
C.a.h(u.a,t)
t=V.a2("A","Z")
C.a.h(u.a,t)
t=e.l(0,q).m(0,q)
u=V.w(new H.r("_"))
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
t=V.w(new H.r("."))
C.a.h(u.a,t)
t=e.l(0,o).m(0,n)
u=V.a2("0","9")
C.a.h(t.a,u)
u=e.l(0,n).m(0,n)
t=V.a2("0","9")
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
C.a.h(e.l(0,k).m(0,m).a,new V.bk())
t=e.l(0,j).m(0,i)
u=V.w(new H.r("\n"))
C.a.h(t.a,u)
u=e.l(0,j).m(0,j)
t=new V.av()
s=[V.aA]
t.sae(H.c([],s))
C.a.h(u.a,t)
u=V.w(new H.r("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.w(new H.r("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.av()
u.sae(H.c([],s))
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
u.aK(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aK(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aK(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.he.prototype={
bA:function(a){var u=this,t="#111"
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
bu:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iU()
l.c=l.l(0,s)
u=l.l(0,s).m(0,r)
t=V.w(new H.r("_"))
C.a.h(u.a,t)
t=V.a2("a","z")
C.a.h(u.a,t)
t=V.a2("A","Z")
C.a.h(u.a,t)
t=l.l(0,r).m(0,r)
u=V.w(new H.r("_"))
C.a.h(t.a,u)
u=V.a2("0","9")
C.a.h(t.a,u)
u=V.a2("a","z")
C.a.h(t.a,u)
u=V.a2("A","Z")
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
C.a.h(l.l(0,o).m(0,o).a,new V.bk())
C.a.h(l.l(0,s).m(0,m).a,new V.bk())
u=l.l(0,m).m(0,m)
t=new V.av()
t.sae(H.c([],[V.aA]))
C.a.h(u.a,t)
u=V.w(new H.r('</\\-!>=_"'))
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
t.aK(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.l(0,q)
t.d=t.a.P(q)
t=l.l(0,m)
t.d=t.a.P(m)
return l}}
V.i8.prototype={
ej:function(a,b){H.m(b,"$ib",[P.h],"$ab")
this.sbQ(H.c([],[[P.b,W.aF]]))
this.N(C.a.m(b,"\n"),"#111")},
bA:function(a){},
bu:function(){return}}
V.ic.prototype={
cc:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.mJ().gcJ().j(0,H.i(u))
if(t==null)if(d){c.$0()
m.dG(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.m7(m.c).h(0,q)
o=W.o7("radio")
o.checked=s
o.name=u
u=W.o
W.ab(o,"change",H.n(new V.id(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.m7(m.c).h(0,r.createElement("br"))},
a3:function(a,b,c){return this.cc(a,b,c,!1)},
dG:function(a){var u,t,s=P.mJ(),r=P.h,q=P.oe(s.gcJ(),r,r)
q.k(0,this.a,a)
u=s.en(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.kd([],[]).cQ(""),"",t)}}
V.id.prototype={
$1:function(a){var u=this
if(H.G(u.b.checked)){u.c.$0()
u.a.dG(u.d)}},
$S:13}
V.iu.prototype={
eQ:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.ab(q,"scroll",H.n(new V.iw(o),{func:1,ret:-1,args:[r]}),!1,r)},
dL:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.h],"$ab")
this.hQ()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ev(C.a.iR(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
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
if(H.q9(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.M(m[1])
l.textContent=H.M(m[0])
t.appendChild(l)}else{k=P.fg(C.y,n,C.h,!1)
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
eB:function(a){var u,t,s,r=new V.fT("dart")
r.bl("dart")
u=new V.hd("glsl")
u.bl("glsl")
t=new V.he("html")
t.bl("html")
s=C.a.iI(H.c([r,u,t],[V.by]),new V.ix(a))
if(s!=null)return s
r=new V.i8("plain")
r.bl("plain")
return r},
dI:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.m(b0,"$ib",[P.h],"$ab")
u=H.c([],[P.l])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.ds(r).a9(r,"+")){C.a.k(b0,s,C.b.ah(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a9(r,"-")){C.a.k(b0,s,C.b.ah(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eB(a8)
q.ej(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.fg(C.y,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.m9()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.u)(r),++a0)C.a_.ie(a,r[a0])
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
for(a3=C.a.gU(r);a3.B();)c.appendChild(a3.gJ(a3))
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
for(q=0;q<2;++q){p=u.createElement("div")
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
u=V.iU()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.w(new H.r("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.av()
r=[V.aA]
s.sae(H.c([],r))
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
s=new V.av()
s.sae(H.c([],r))
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
s=new V.av()
s.sae(H.c([],r))
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
t=new V.av()
t.sae(H.c([],r))
C.a.h(s.a,t)
s=V.w(new H.r("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.w(new H.r("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.av()
t.sae(H.c([],r))
C.a.h(s.a,t)
s=V.w(new H.r("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.bk())
s=u.l(0,i).m(0,i)
t=new V.av()
t.sae(H.c([],r))
C.a.h(s.a,t)
s=V.w(new H.r("*_`["))
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
V.iw.prototype={
$1:function(a){P.mF(C.o,new V.iv(this.a))},
$S:13}
V.iv.prototype={
$0:function(){var u=C.e.as(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
V.ix.prototype={
$1:function(a){return H.f(a,"$iby").a===this.a},
$S:56}
D.kW.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.t(0.1,0.1,0.1))
t=u.x
t.sp(0,new V.t(0.2,0.2,0.2))
t=u.z
t.sp(0,new V.t(1,1,1))
u.cy.sp(0,new V.t(0,0,0))
u=u.cx
u.sp(0,new V.t(1,1,1))},
$S:0}
D.kX.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.t(0.11,0.11,0.1))
t=u.x
t.sp(0,new V.t(0.21,0.21,0.2))
t=u.z
t.sp(0,new V.t(1,1,1))
u.cy.sp(0,new V.t(0,0,0))
u=u.cx
u.sp(0,new V.t(1,0.9,0.5))},
$S:0}
D.kY.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.t(0.1,0.1,0.1))
t=u.x
t.sp(0,new V.t(0.1,0.1,0.1))
t=u.z
t.sp(0,new V.t(1,1,1))
u.cy.saF(0.4)
t=u.cy
t.sp(0,new V.t(0.6,0.6,0.6))
u=u.cx
u.sp(0,new V.t(0.4,0.4,0.4))},
$S:0}
D.l6.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.t(0.1,0.1,0.1))
t=u.x
t.sp(0,new V.t(0.1,0.1,0.1))
t=u.z
t.sp(0,new V.t(1,1,1))
u.cy.saF(0.4)
t=u.cy
t.sp(0,new V.t(0.2,0.3,1))
u=u.cx
u.sp(0,new V.t(0.3,0.3,0.3))},
$S:0}
D.l7.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.t(0.1,0.1,0.1))
t=u.x
t.sp(0,new V.t(0.1,0.1,0.1))
t=u.z
t.sp(0,new V.t(1,1,1))
u.cy.saF(0.6)
t=u.cy
t.sp(0,new V.t(0.8,0.8,0.8))
u=u.cx
u.sp(0,new V.t(0.2,0.2,0.2))},
$S:0}
D.l8.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.t(0.1,0.1,0.1))
t=u.x
t.sp(0,new V.t(0.1,0.1,0.1))
t=u.z
t.sp(0,new V.t(1,1,1))
u.cy.saF(0.6)
t=u.cy
t.sp(0,new V.t(1,1,1))
u.cx.sp(0,new V.t(0,0,0))},
$S:0}
D.l9.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.t(0.1,0.1,0.1))
t=u.x
t.sp(0,new V.t(0.1,0.1,0.1))
t=u.z
t.sp(0,new V.t(1,1,1))
u.cy.saF(0.9)
t=u.cy
t.sp(0,new V.t(1,0.8,0.8))
u.cx.sp(0,new V.t(0,0,0))},
$S:0}
D.la.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.t(0,0,0))
t=u.x
t.sp(0,new V.t(0.1,0.1,0.1))
t=u.z
t.sp(0,new V.t(0.1,0.1,0.1))
u.cy.saF(0.99)
t=u.cy
t.sp(0,new V.t(0.95,0.95,0.95))
u.cx.sp(0,new V.t(0,0,0))},
$S:0}
D.lb.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.t(0.3,0.3,0.3))
t=u.x
t.sp(0,new V.t(0.5,0.5,0.5))
t=u.z
t.sp(0,new V.t(1,1,1))
u.cy.sp(0,new V.t(0,0,0))
u=u.cx
u.sp(0,new V.t(0.3,0.3,0.3))},
$S:0}
D.lc.prototype={
$0:function(){this.a.sab(0,F.lW(1,null,null,1))},
$S:0}
D.ld.prototype={
$0:function(){this.a.sab(0,F.lW(15,null,new D.kV(),15))},
$S:0}
D.kV.prototype={
$3:function(a,b,c){var u,t=Math.cos(c*4*3.141592653589793+3.141592653589793),s=Math.cos(b*4*3.141592653589793+3.141592653589793),r=a.f
r=new V.K(r.a,r.b,r.c)
u=r.t(0,Math.sqrt(r.C(r)))
r=a.f
s=u.w(0,t*0.1+s*0.1)
a.sa2(0,r.D(0,new V.a_(s.a,s.b,s.c)))},
$S:5}
D.kZ.prototype={
$0:function(){this.a.sab(0,F.nb(!0,30,1))},
$S:0}
D.l_.prototype={
$0:function(){this.a.sab(0,F.nb(!1,30,0))},
$S:0}
D.l0.prototype={
$0:function(){this.a.sab(0,F.nc(!0,!0,25,new D.kU(),50))},
$S:0}
D.kU.prototype={
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8},
$S:11}
D.l1.prototype={
$0:function(){this.a.sab(0,F.nr(6,null,6))},
$S:0}
D.l2.prototype={
$0:function(){this.a.sab(0,F.nr(10,new D.kT(),10))},
$S:0}
D.kT.prototype={
$2:function(a,b){var u=a-0.5,t=b-0.5
return Math.cos(Math.sqrt(u*u+t*t)*3.141592653589793)*0.3},
$S:11}
D.l3.prototype={
$0:function(){this.a.sab(0,F.nt())},
$S:0}
D.l4.prototype={
$0:function(){this.a.sab(0,F.q1())},
$S:0}
D.l5.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iB")
u=this.a
t=this.b
s=t.a
r=[P.h]
u.dI("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.dI("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:9};(function aliases(){var u=J.a.prototype
u.eH=u.i
u=J.dP.prototype
u.eJ=u.i
u=P.j.prototype
u.eI=u.bF
u=W.T.prototype
u.bI=u.am
u=W.eZ.prototype
u.eL=u.ax
u=O.dY.prototype
u.cY=u.aC
u=O.ba.prototype
u.cZ=u.aC
u=V.dV.prototype
u.eK=u.aI
u.cX=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pI","oR",14)
u(P,"pJ","oS",14)
u(P,"pK","oT",14)
t(P,"na","pG",3)
s(W,"pV",4,null,["$4"],["oV"],30,0)
s(W,"pW",4,null,["$4"],["oW"],30,0)
var m
r(m=E.ao.prototype,"geh",0,0,null,["$1","$0"],["ei","j0"],1,0)
r(m,"gef",0,0,null,["$1","$0"],["eg","iY"],1,0)
q(m,"giW","iX",6)
q(m,"giZ","j_",6)
r(m=E.ei.prototype,"gd1",0,0,null,["$1","$0"],["d3","d2"],1,0)
p(m,"gje","eo",3)
o(m=X.ep.prototype,"gfZ","h_",16)
o(m,"gfN","fO",16)
o(m,"gfT","fU",4)
o(m,"gh2","h3",34)
o(m,"gh0","h1",34)
o(m,"gh6","h7",4)
o(m,"gha","hb",4)
o(m,"gfX","fY",4)
o(m,"gh8","h9",4)
o(m,"gfV","fW",4)
o(m,"ghc","hd",36)
o(m,"ghe","hf",16)
o(m,"ghu","hv",15)
o(m,"ghq","hr",15)
o(m,"ghs","ht",15)
r(D.bA.prototype,"geT",0,0,null,["$1","$0"],["aA","eU"],1,0)
r(m=D.dR.prototype,"gdr",0,0,null,["$1","$0"],["ds","h4"],1,0)
o(m,"ghg","hh",49)
q(m,"gfH","fI",29)
q(m,"ghk","hl",29)
n(V.Y.prototype,"gn","cA",26)
n(V.K.prototype,"gn","cA",26)
r(m=U.cF.prototype,"gaQ",0,0,null,["$1","$0"],["S","ad"],1,0)
q(m,"gfF","fG",23)
q(m,"ghi","hj",23)
r(m=U.eq.prototype,"gaQ",0,0,null,["$1","$0"],["S","ad"],1,0)
o(m,"gbT","bU",2)
o(m,"gbV","bW",2)
o(m,"gbX","bY",2)
r(m=U.er.prototype,"gaQ",0,0,null,["$1","$0"],["S","ad"],1,0)
o(m,"gbT","bU",2)
o(m,"gbV","bW",2)
o(m,"gbX","bY",2)
o(m,"gfw","fz",2)
o(m,"gfA","fB",2)
o(m,"gi3","i4",2)
o(m,"gi1","i2",2)
o(m,"gi_","i0",2)
o(U.es.prototype,"gfD","fE",2)
r(m=M.dD.prototype,"ga_",0,0,null,["$1","$0"],["a0","b1"],1,0)
q(m,"ghm","hn",22)
q(m,"gho","hp",22)
r(M.dF.prototype,"ga_",0,0,null,["$1","$0"],["a0","b1"],1,0)
r(m=M.dJ.prototype,"ga_",0,0,null,["$1","$0"],["a0","b1"],1,0)
q(m,"gfP","fQ",6)
q(m,"gfR","fS",6)
r(m=O.dW.prototype,"gc0",0,0,null,["$1","$0"],["a4","c1"],1,0)
r(m,"ghH",0,0,null,["$1","$0"],["dz","hI"],1,0)
q(m,"gfJ","fK",32)
q(m,"gfL","fM",32)
r(O.eb.prototype,"gc0",0,0,null,["$1","$0"],["a4","c1"],1,0)
r(X.e4.prototype,"gf_",0,0,null,["$1","$0"],["av","f0"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.V,null)
s(P.V,[H.ly,J.a,J.as,P.eM,P.j,H.cJ,P.b6,H.c0,H.d7,H.fM,H.iZ,P.bC,H.cy,H.f3,P.ag,H.hr,H.ht,H.hm,P.f9,P.bi,P.aM,P.ew,P.iF,P.cY,P.iG,P.be,P.an,P.kt,P.k7,P.ce,P.eL,P.y,P.kl,P.hz,P.bZ,P.hh,P.kr,P.kq,P.P,P.az,P.ac,P.bB,P.i6,P.ef,P.eE,P.hb,P.bD,P.b,P.z,P.N,P.aw,P.h,P.a8,P.cf,P.jd,P.ka,W.fP,W.bQ,W.I,W.e2,W.eZ,W.kg,W.dL,W.aC,W.k6,W.fh,P.kc,P.fe,P.k1,P.Q,O.a4,O.cK,E.fG,E.ao,E.ig,E.ei,Z.eu,Z.ev,Z.cw,Z.bE,Z.bP,D.fJ,D.c_,D.B,X.dC,X.dQ,X.ho,X.hw,X.aB,X.hV,X.iV,X.ep,D.bA,D.af,D.e5,D.ee,V.t,V.at,V.h2,V.dZ,V.au,V.a7,V.a_,V.aH,V.e8,V.Y,V.K,U.eq,U.er,U.es,M.dF,M.dJ,M.aD,A.dz,A.fz,A.ae,A.aP,A.aT,A.aX,A.hF,A.c9,A.ca,A.cc,A.el,A.j7,F.a9,F.h5,F.bo,F.hq,F.bK,F.ea,F.ir,F.is,F.it,F.ap,F.jp,F.jq,F.jt,F.jv,F.jw,F.jx,O.bM,O.dY,O.hG,T.iP,V.bk,V.aA,V.dV,V.ie,V.ip,V.cW,V.ej,V.d3,V.iT,X.bX,X.d_,X.hi,X.e4,V.by,V.ic,V.iu])
s(J.a,[J.hl,J.dO,J.dP,J.b7,J.cI,J.bH,H.cN,H.bJ,W.k,W.fw,W.bW,W.cx,W.b4,W.b5,W.X,W.ey,W.fU,W.fV,W.eA,W.dI,W.eC,W.fX,W.o,W.eF,W.aQ,W.hf,W.eH,W.bn,W.dT,W.hP,W.eN,W.eO,W.aR,W.eP,W.eS,W.aS,W.eW,W.eY,W.aV,W.f_,W.aW,W.f4,W.aI,W.f7,W.iS,W.aZ,W.fa,W.iX,W.ji,W.fi,W.fk,W.fm,W.fo,W.fq,P.b9,P.eJ,P.bc,P.eU,P.ib,P.f5,P.bf,P.fc,P.fA,P.ex,P.dA,P.e6,P.c8,P.e9,P.eh,P.em,P.f1])
s(J.dP,[J.i7,J.cd,J.bI])
t(J.lx,J.b7)
s(J.cI,[J.dN,J.dM])
t(P.hv,P.eM)
s(P.hv,[H.en,W.jI,W.aq,P.h7])
t(H.r,H.en)
s(P.j,[H.h_,H.hA,H.d9])
s(H.h_,[H.c2,H.hs])
s(P.b6,[H.hB,H.jB])
t(H.hC,H.c2)
t(H.fN,H.fM)
s(P.bC,[H.i3,H.hn,H.jb,H.j0,H.fI,H.im,P.fy,P.e3,P.aO,P.jc,P.j9,P.cX,P.fL,P.fS])
s(H.cy,[H.ll,H.iM,H.kO,H.kP,H.kQ,P.jE,P.jD,P.jF,P.jG,P.kk,P.kj,P.jP,P.jT,P.jQ,P.jR,P.jS,P.jW,P.jX,P.jV,P.jU,P.iH,P.iI,P.kD,P.k4,P.k3,P.k5,P.hu,P.hy,P.fY,P.fZ,P.jh,P.je,P.jf,P.jg,P.km,P.kn,P.kp,P.ko,P.kx,P.kw,P.ky,P.kz,W.h0,W.hR,W.hT,W.il,W.iE,W.jO,W.i1,W.i0,W.k8,W.k9,W.ki,W.ks,P.ke,P.kF,P.h8,P.h9,P.fC,E.ih,E.ii,E.ij,E.iR,D.h3,D.h4,F.ku,F.kG,F.kI,F.kJ,F.kK,F.lh,F.li,F.lk,F.kS,F.kH,F.jz,F.jy,F.jr,F.js,O.hJ,O.hK,O.hL,O.hM,O.hN,O.hO,T.iQ,V.lg,V.id,V.iw,V.iv,V.ix,D.kW,D.kX,D.kY,D.l6,D.l7,D.l8,D.l9,D.la,D.lb,D.lc,D.ld,D.kV,D.kZ,D.l_,D.l0,D.kU,D.l1,D.l2,D.kT,D.l3,D.l4,D.l5])
s(H.iM,[H.iC,H.cu])
t(H.jC,P.fy)
t(P.hx,P.ag)
s(P.hx,[H.a5,W.jH])
t(H.e_,H.bJ)
s(H.e_,[H.de,H.dg])
t(H.df,H.de)
t(H.cO,H.df)
t(H.dh,H.dg)
t(H.e0,H.dh)
s(H.e0,[H.hW,H.hX,H.hY,H.hZ,H.i_,H.e1,H.cP])
t(P.k2,P.kt)
t(P.k0,P.k7)
t(P.ff,P.hz)
t(P.eo,P.ff)
s(P.bZ,[P.fE,P.h1])
t(P.bz,P.iG)
s(P.bz,[P.fF,P.hg,P.jl,P.jk])
t(P.jj,P.h1)
s(P.ac,[P.A,P.l])
s(P.aO,[P.c7,P.hj])
t(P.jK,P.cf)
s(W.k,[W.H,W.h6,W.cL,W.aU,W.di,W.aY,W.aJ,W.dk,W.jA,W.da,P.fD,P.bV])
s(W.H,[W.T,W.bx,W.db])
s(W.T,[W.x,P.p])
s(W.x,[W.dx,W.fx,W.ct,W.bw,W.bY,W.aF,W.ha,W.cG,W.cH,W.io,W.bd,W.eg,W.iK,W.iL,W.d0])
s(W.b4,[W.cz,W.fQ,W.fR])
t(W.fO,W.b5)
t(W.cA,W.ey)
t(W.eB,W.eA)
t(W.dH,W.eB)
t(W.eD,W.eC)
t(W.fW,W.eD)
t(W.aG,W.bW)
t(W.eG,W.eF)
t(W.cD,W.eG)
t(W.eI,W.eH)
t(W.c1,W.eI)
t(W.bN,W.o)
s(W.bN,[W.b8,W.ah,W.b_])
t(W.hQ,W.eN)
t(W.hS,W.eO)
t(W.eQ,W.eP)
t(W.hU,W.eQ)
t(W.eT,W.eS)
t(W.cQ,W.eT)
t(W.eX,W.eW)
t(W.i9,W.eX)
t(W.ik,W.eY)
t(W.dj,W.di)
t(W.iz,W.dj)
t(W.f0,W.f_)
t(W.iA,W.f0)
t(W.iD,W.f4)
t(W.f8,W.f7)
t(W.iN,W.f8)
t(W.dl,W.dk)
t(W.iO,W.dl)
t(W.fb,W.fa)
t(W.iW,W.fb)
t(W.bh,W.ah)
t(W.fj,W.fi)
t(W.jJ,W.fj)
t(W.ez,W.dI)
t(W.fl,W.fk)
t(W.jY,W.fl)
t(W.fn,W.fm)
t(W.eR,W.fn)
t(W.fp,W.fo)
t(W.kb,W.fp)
t(W.fr,W.fq)
t(W.kf,W.fr)
t(W.jL,W.jH)
t(W.jM,P.iF)
t(W.lI,W.jM)
t(W.jN,P.cY)
t(W.kh,W.eZ)
t(P.kd,P.kc)
t(P.al,P.k1)
t(P.eK,P.eJ)
t(P.hp,P.eK)
t(P.eV,P.eU)
t(P.i4,P.eV)
t(P.cU,P.p)
t(P.f6,P.f5)
t(P.iJ,P.f6)
t(P.fd,P.fc)
t(P.iY,P.fd)
t(P.fB,P.ex)
t(P.i5,P.bV)
t(P.f2,P.f1)
t(P.iB,P.f2)
s(E.fG,[Z.dB,A.cV,T.d1])
s(D.B,[D.bF,D.bG,D.O,X.ia])
s(X.ia,[X.dU,X.bp,X.cM,X.ek])
s(O.a4,[D.dR,U.cF,M.dD])
s(D.fJ,[U.fK,U.ai])
t(U.dE,U.ai)
s(A.cV,[A.dX,A.ec])
s(A.el,[A.aK,A.j4,A.j5,A.j6,A.j2,A.aa,A.j3,A.a0,A.d5,A.j8,A.d6,A.ax,A.cb,A.bO])
t(F.iy,F.h5)
t(F.j1,F.hq)
t(F.ju,F.jv)
t(F.i2,F.jw)
s(O.bM,[O.dW,O.eb])
s(O.dY,[O.hD,O.hE,O.ba])
s(O.ba,[O.hH,O.hI])
t(T.d2,T.d1)
s(V.dV,[V.av,V.d4])
t(X.hc,X.d_)
s(V.by,[V.fT,V.hd,V.he,V.i8])
u(H.en,H.d7)
u(H.de,P.y)
u(H.df,H.c0)
u(H.dg,P.y)
u(H.dh,H.c0)
u(P.eM,P.y)
u(P.ff,P.kl)
u(W.ey,W.fP)
u(W.eA,P.y)
u(W.eB,W.I)
u(W.eC,P.y)
u(W.eD,W.I)
u(W.eF,P.y)
u(W.eG,W.I)
u(W.eH,P.y)
u(W.eI,W.I)
u(W.eN,P.ag)
u(W.eO,P.ag)
u(W.eP,P.y)
u(W.eQ,W.I)
u(W.eS,P.y)
u(W.eT,W.I)
u(W.eW,P.y)
u(W.eX,W.I)
u(W.eY,P.ag)
u(W.di,P.y)
u(W.dj,W.I)
u(W.f_,P.y)
u(W.f0,W.I)
u(W.f4,P.ag)
u(W.f7,P.y)
u(W.f8,W.I)
u(W.dk,P.y)
u(W.dl,W.I)
u(W.fa,P.y)
u(W.fb,W.I)
u(W.fi,P.y)
u(W.fj,W.I)
u(W.fk,P.y)
u(W.fl,W.I)
u(W.fm,P.y)
u(W.fn,W.I)
u(W.fo,P.y)
u(W.fp,W.I)
u(W.fq,P.y)
u(W.fr,W.I)
u(P.eJ,P.y)
u(P.eK,W.I)
u(P.eU,P.y)
u(P.eV,W.I)
u(P.f5,P.y)
u(P.f6,W.I)
u(P.fc,P.y)
u(P.fd,W.I)
u(P.ex,P.ag)
u(P.f1,P.y)
u(P.f2,W.I)})()
var v={mangledGlobalNames:{l:"int",A:"double",ac:"num",h:"String",P:"bool",N:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.N},{func:1,ret:-1,opt:[D.B]},{func:1,ret:-1,args:[D.B]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ah]},{func:1,ret:P.N,args:[F.ap,P.A,P.A]},{func:1,ret:-1,args:[P.l,[P.j,E.ao]]},{func:1,ret:P.N,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:P.N,args:[D.B]},{func:1,ret:P.N,args:[F.a9]},{func:1,ret:P.A,args:[P.A,P.A]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:P.N,args:[W.o]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:-1,args:[W.o]},{func:1,ret:P.h,args:[P.l]},{func:1,ret:V.a_,args:[P.A]},{func:1,ret:P.A,args:[P.A]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:-1,args:[P.l,[P.j,M.aD]]},{func:1,ret:-1,args:[P.l,[P.j,U.ai]]},{func:1,args:[,]},{func:1,ret:P.P,args:[W.H]},{func:1,ret:P.A},{func:1,ret:P.P,args:[W.aC]},{func:1,ret:P.P,args:[P.h]},{func:1,ret:-1,args:[P.l,[P.j,D.af]]},{func:1,ret:P.P,args:[W.T,P.h,P.h,W.bQ]},{func:1,ret:P.N,args:[,]},{func:1,ret:-1,args:[P.l,[P.j,V.au]]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:-1,args:[W.b8]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bh]},{func:1,ret:P.N,args:[P.ac]},{func:1,ret:W.T,args:[W.H]},{func:1,ret:-1,args:[W.H,W.H]},{func:1,args:[W.o]},{func:1,ret:P.Q,args:[P.l]},{func:1,args:[,P.h]},{func:1,ret:P.N,args:[P.h,,]},{func:1,args:[P.h]},{func:1,ret:P.N,args:[P.h]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.l]},{func:1,ret:P.P,args:[[P.j,D.af]]},{func:1,ret:[P.z,P.h,P.h],args:[[P.z,P.h,P.h],P.h]},{func:1,ret:P.l,args:[A.aP,A.aP]},{func:1,ret:P.l,args:[A.aT,A.aT]},{func:1,ret:P.l,args:[A.aX,A.aX]},{func:1,ret:[P.aM,,],args:[,]},{func:1,ret:P.N,args:[P.be]},{func:1,ret:P.P,args:[V.by]},{func:1,ret:P.N,args:[,],opt:[P.aw]},{func:1,ret:P.Q,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bw.prototype
C.j=W.bY.prototype
C.O=W.aF.prototype
C.R=J.a.prototype
C.a=J.b7.prototype
C.S=J.dM.prototype
C.d=J.dN.prototype
C.k=J.dO.prototype
C.e=J.cI.prototype
C.b=J.bH.prototype
C.T=J.bI.prototype
C.Z=W.cQ.prototype
C.B=J.i7.prototype
C.c=P.c8.prototype
C.a_=W.bd.prototype
C.C=W.eg.prototype
C.r=J.cd.prototype
C.D=W.bh.prototype
C.E=W.da.prototype
C.a0=new P.fF()
C.F=new P.fE()
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

C.M=new P.i6()
C.h=new P.jj()
C.N=new P.jl()
C.f=new P.k2()
C.o=new P.bB(0)
C.P=new P.bB(5e6)
C.Q=new P.hh("element",!1,!1,!1)
C.w=H.c(u([127,2047,65535,1114111]),[P.l])
C.l=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.U=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.m=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.n=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.V=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.x=H.c(u([]),[P.h])
C.W=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.y=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.i=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.z=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.X=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.A=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.p=H.c(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.q=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.Y=new H.fN(0,{},C.x,[P.h,P.h])})();(function staticFields(){$.b3=0
$.cv=null
$.mb=null
$.lO=!1
$.ni=null
$.n8=null
$.np=null
$.kL=null
$.kR=null
$.lY=null
$.ci=null
$.dp=null
$.dq=null
$.lP=!1
$.a3=C.f
$.ay=[]
$.bm=null
$.lt=null
$.mh=null
$.mg=null
$.dd=P.lA(P.h,P.bD)
$.mo=null
$.mt=null
$.cR=null
$.mA=null
$.mM=null
$.mP=null
$.mO=null
$.jm=null
$.jn=null
$.jo=null
$.mN=null
$.ms=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"qi","nv",function(){return H.nh("_$dart_dartClosure")})
u($,"qj","m3",function(){return H.nh("_$dart_js")})
u($,"qo","nw",function(){return H.bg(H.j_({
toString:function(){return"$receiver$"}}))})
u($,"qp","nx",function(){return H.bg(H.j_({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"qq","ny",function(){return H.bg(H.j_(null))})
u($,"qr","nz",function(){return H.bg(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qu","nC",function(){return H.bg(H.j_(void 0))})
u($,"qv","nD",function(){return H.bg(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qt","nB",function(){return H.bg(H.mH(null))})
u($,"qs","nA",function(){return H.bg(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qx","nF",function(){return H.bg(H.mH(void 0))})
u($,"qw","nE",function(){return H.bg(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qO","m4",function(){return P.oQ()})
u($,"qA","nG",function(){return P.oM()})
u($,"qP","nK",function(){return H.ok(H.ch(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"qR","nM",function(){return P.oy("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qS","nN",function(){return P.pf()})
u($,"qQ","nL",function(){return P.ml(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"qH","nJ",function(){return Z.aL(0)})
u($,"qB","nH",function(){return Z.aL(511)})
u($,"qJ","b2",function(){return Z.aL(1)})
u($,"qI","bu",function(){return Z.aL(2)})
u($,"qD","bt",function(){return Z.aL(4)})
u($,"qK","bT",function(){return Z.aL(8)})
u($,"qL","bU",function(){return Z.aL(16)})
u($,"qE","dt",function(){return Z.aL(32)})
u($,"qF","du",function(){return Z.aL(64)})
u($,"qG","nI",function(){return Z.aL(96)})
u($,"qM","cs",function(){return Z.aL(128)})
u($,"qC","bs",function(){return Z.aL(256)})
u($,"qh","nu",function(){return new V.h2(1e-9)})
u($,"qg","S",function(){return $.nu()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cN,DataView:H.bJ,ArrayBufferView:H.bJ,Float32Array:H.cO,Float64Array:H.cO,Int16Array:H.hW,Int32Array:H.hX,Int8Array:H.hY,Uint16Array:H.hZ,Uint32Array:H.i_,Uint8ClampedArray:H.e1,CanvasPixelArray:H.e1,Uint8Array:H.cP,HTMLAudioElement:W.x,HTMLBRElement:W.x,HTMLButtonElement:W.x,HTMLContentElement:W.x,HTMLDListElement:W.x,HTMLDataElement:W.x,HTMLDataListElement:W.x,HTMLDetailsElement:W.x,HTMLDialogElement:W.x,HTMLEmbedElement:W.x,HTMLFieldSetElement:W.x,HTMLHRElement:W.x,HTMLHeadElement:W.x,HTMLHeadingElement:W.x,HTMLHtmlElement:W.x,HTMLIFrameElement:W.x,HTMLLIElement:W.x,HTMLLabelElement:W.x,HTMLLegendElement:W.x,HTMLLinkElement:W.x,HTMLMapElement:W.x,HTMLMediaElement:W.x,HTMLMenuElement:W.x,HTMLMetaElement:W.x,HTMLMeterElement:W.x,HTMLModElement:W.x,HTMLOListElement:W.x,HTMLObjectElement:W.x,HTMLOptGroupElement:W.x,HTMLOptionElement:W.x,HTMLOutputElement:W.x,HTMLParagraphElement:W.x,HTMLParamElement:W.x,HTMLPictureElement:W.x,HTMLPreElement:W.x,HTMLProgressElement:W.x,HTMLQuoteElement:W.x,HTMLScriptElement:W.x,HTMLShadowElement:W.x,HTMLSlotElement:W.x,HTMLSourceElement:W.x,HTMLSpanElement:W.x,HTMLStyleElement:W.x,HTMLTableCaptionElement:W.x,HTMLTableColElement:W.x,HTMLTextAreaElement:W.x,HTMLTimeElement:W.x,HTMLTitleElement:W.x,HTMLTrackElement:W.x,HTMLUListElement:W.x,HTMLUnknownElement:W.x,HTMLVideoElement:W.x,HTMLDirectoryElement:W.x,HTMLFontElement:W.x,HTMLFrameElement:W.x,HTMLFrameSetElement:W.x,HTMLMarqueeElement:W.x,HTMLElement:W.x,AccessibleNodeList:W.fw,HTMLAnchorElement:W.dx,HTMLAreaElement:W.fx,HTMLBaseElement:W.ct,Blob:W.bW,HTMLBodyElement:W.bw,HTMLCanvasElement:W.bY,CanvasRenderingContext2D:W.cx,CDATASection:W.bx,CharacterData:W.bx,Comment:W.bx,ProcessingInstruction:W.bx,Text:W.bx,CSSNumericValue:W.cz,CSSUnitValue:W.cz,CSSPerspective:W.fO,CSSCharsetRule:W.X,CSSConditionRule:W.X,CSSFontFaceRule:W.X,CSSGroupingRule:W.X,CSSImportRule:W.X,CSSKeyframeRule:W.X,MozCSSKeyframeRule:W.X,WebKitCSSKeyframeRule:W.X,CSSKeyframesRule:W.X,MozCSSKeyframesRule:W.X,WebKitCSSKeyframesRule:W.X,CSSMediaRule:W.X,CSSNamespaceRule:W.X,CSSPageRule:W.X,CSSRule:W.X,CSSStyleRule:W.X,CSSSupportsRule:W.X,CSSViewportRule:W.X,CSSStyleDeclaration:W.cA,MSStyleCSSProperties:W.cA,CSS2Properties:W.cA,CSSImageValue:W.b4,CSSKeywordValue:W.b4,CSSPositionValue:W.b4,CSSResourceValue:W.b4,CSSURLImageValue:W.b4,CSSStyleValue:W.b4,CSSMatrixComponent:W.b5,CSSRotation:W.b5,CSSScale:W.b5,CSSSkew:W.b5,CSSTranslation:W.b5,CSSTransformComponent:W.b5,CSSTransformValue:W.fQ,CSSUnparsedValue:W.fR,DataTransferItemList:W.fU,HTMLDivElement:W.aF,DOMException:W.fV,ClientRectList:W.dH,DOMRectList:W.dH,DOMRectReadOnly:W.dI,DOMStringList:W.fW,DOMTokenList:W.fX,Element:W.T,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,XMLHttpRequest:W.k,XMLHttpRequestEventTarget:W.k,XMLHttpRequestUpload:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.aG,FileList:W.cD,FileWriter:W.h6,HTMLFormElement:W.ha,Gamepad:W.aQ,History:W.hf,HTMLCollection:W.c1,HTMLFormControlsCollection:W.c1,HTMLOptionsCollection:W.c1,ImageData:W.bn,HTMLImageElement:W.cG,HTMLInputElement:W.cH,KeyboardEvent:W.b8,Location:W.dT,MediaList:W.hP,MessagePort:W.cL,MIDIInputMap:W.hQ,MIDIOutputMap:W.hS,MimeType:W.aR,MimeTypeArray:W.hU,PointerEvent:W.ah,MouseEvent:W.ah,DragEvent:W.ah,Document:W.H,DocumentFragment:W.H,HTMLDocument:W.H,ShadowRoot:W.H,XMLDocument:W.H,DocumentType:W.H,Node:W.H,NodeList:W.cQ,RadioNodeList:W.cQ,Plugin:W.aS,PluginArray:W.i9,RTCStatsReport:W.ik,HTMLSelectElement:W.io,SourceBuffer:W.aU,SourceBufferList:W.iz,SpeechGrammar:W.aV,SpeechGrammarList:W.iA,SpeechRecognitionResult:W.aW,Storage:W.iD,CSSStyleSheet:W.aI,StyleSheet:W.aI,HTMLTableCellElement:W.bd,HTMLTableDataCellElement:W.bd,HTMLTableHeaderCellElement:W.bd,HTMLTableElement:W.eg,HTMLTableRowElement:W.iK,HTMLTableSectionElement:W.iL,HTMLTemplateElement:W.d0,TextTrack:W.aY,TextTrackCue:W.aJ,VTTCue:W.aJ,TextTrackCueList:W.iN,TextTrackList:W.iO,TimeRanges:W.iS,Touch:W.aZ,TouchEvent:W.b_,TouchList:W.iW,TrackDefaultList:W.iX,CompositionEvent:W.bN,FocusEvent:W.bN,TextEvent:W.bN,UIEvent:W.bN,URL:W.ji,VideoTrackList:W.jA,WheelEvent:W.bh,Window:W.da,DOMWindow:W.da,Attr:W.db,CSSRuleList:W.jJ,ClientRect:W.ez,DOMRect:W.ez,GamepadList:W.jY,NamedNodeMap:W.eR,MozNamedAttrMap:W.eR,SpeechRecognitionResultList:W.kb,StyleSheetList:W.kf,SVGLength:P.b9,SVGLengthList:P.hp,SVGNumber:P.bc,SVGNumberList:P.i4,SVGPointList:P.ib,SVGScriptElement:P.cU,SVGStringList:P.iJ,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bf,SVGTransformList:P.iY,AudioBuffer:P.fA,AudioParamMap:P.fB,AudioTrackList:P.fD,AudioContext:P.bV,webkitAudioContext:P.bV,BaseAudioContext:P.bV,OfflineAudioContext:P.i5,WebGLBuffer:P.dA,WebGLProgram:P.e6,WebGL2RenderingContext:P.c8,WebGLShader:P.e9,WebGLTexture:P.eh,WebGLUniformLocation:P.em,SQLResultSetRowList:P.iB})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e_.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.e0.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(D.nl,[])
else D.nl([])})})()
//# sourceMappingURL=test.dart.js.map
