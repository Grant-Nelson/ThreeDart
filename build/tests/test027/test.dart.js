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
a[c]=function(){a[c]=function(){H.qh(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lY"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lY"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lY(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={lz:function lz(){},
kV:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
hq:function(){return new P.cZ("No element")},
of:function(){return new P.cZ("Too many elements")},
eg:function(a,b,c,d,e){if(c-b<=32)H.oJ(a,b,c,d,e)
else H.oI(a,b,c,d,e)},
oJ:function(a,b,c,d,e){var u,t,s,r,q
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
oI:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.af(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.af(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof k!=="number")return k.S()
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
if(typeof g!=="number")return g.S()
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
if(typeof k!=="number")return k.S()
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
H.eg(a2,a3,o-2,a5,a6)
H.eg(a2,n+2,a4,a5,a6)
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
if(typeof k!=="number")return k.S()
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
break}}}H.eg(a2,o,n,a5,a6)}else H.eg(a2,o,n,a5,a6)},
u:function u(a){this.a=a},
h5:function h5(){},
c3:function c3(){},
cJ:function cJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hG:function hG(a,b,c){this.a=a
this.b=b
this.$ti=c},
hH:function hH(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hI:function hI(a,b,c){this.a=a
this.b=b
this.$ti=c},
da:function da(a,b,c){this.a=a
this.b=b
this.$ti=c},
jI:function jI(a,b,c){this.a=a
this.b=b
this.$ti=c},
c1:function c1(){},
d8:function d8(){},
es:function es(){},
o8:function(){throw H.d(P.J("Cannot modify unmodifiable Map"))},
cr:function(a){var u,t=H.qi(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
q_:function(a){return v.types[H.ac(a)]},
q6:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iM},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.at(a)
if(typeof u!=="string")throw H.d(H.b2(a))
return u},
cT:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
oA:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.e(p,3)
u=H.N(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.aj(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.E(s,q)|32)>t)return}return parseInt(a,b)},
cU:function(a){return H.or(a)+H.lU(H.bU(a),0,null)},
or:function(a){var u,t,s,r,q,p,o,n=J.T(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$icd){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cr(t.length>1&&C.b.E(t,0)===36?C.b.ah(t,1):t)},
os:function(){if(!!self.location)return self.location.href
return},
mB:function(a){var u,t,s,r,q=J.aF(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
oB:function(a){var u,t,s,r=H.c([],[P.l])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.b2(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.aY(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.d(H.b2(s))}return H.mB(r)},
mC:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.b2(s))
if(s<0)throw H.d(H.b2(s))
if(s>65535)return H.oB(a)}return H.mB(a)},
oC:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c7:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aY(u,10))>>>0,56320|u&1023)}}throw H.d(P.aj(a,0,1114111,null,null))},
c6:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oz:function(a){var u=H.c6(a).getFullYear()+0
return u},
ox:function(a){var u=H.c6(a).getMonth()+1
return u},
ot:function(a){var u=H.c6(a).getDate()+0
return u},
ou:function(a){var u=H.c6(a).getHours()+0
return u},
ow:function(a){var u=H.c6(a).getMinutes()+0
return u},
oy:function(a){var u=H.c6(a).getSeconds()+0
return u},
ov:function(a){var u=H.c6(a).getMilliseconds()+0
return u},
D:function(a){throw H.d(H.b2(a))},
e:function(a,b){if(a==null)J.aF(a)
throw H.d(H.cl(a,b))},
cl:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aP(!0,b,s,null)
u=H.ac(J.aF(a))
if(!(b<0)){if(typeof u!=="number")return H.D(u)
t=b>=u}else t=!0
if(t)return P.a0(b,a,s,null,u)
return P.e9(b,s)},
pV:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c8(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c8(a,c,!0,b,"end",u)
return new P.aP(!0,b,"end",null)},
b2:function(a){return new P.aP(!0,a,null,null)},
pR:function(a){if(typeof a!=="number")throw H.d(H.b2(a))
return a},
d:function(a){var u
if(a==null)a=new P.e5()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.ny})
u.name=""}else u.toString=H.ny
return u},
ny:function(){return J.at(this.dartException)},
B:function(a){throw H.d(a)},
v:function(a){throw H.d(P.bm(a))},
bh:function(a){var u,t,s,r,q,p
a=H.nw(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.j5(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j6:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mN:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
mw:function(a,b){return new H.i9(a,b==null?null:b.method)},
lA:function(a,b){var u=b==null,t=u?null:b.method
return new H.ht(a,t,u?null:b.receiver)},
ak:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.lk(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aY(t,16)&8191)===10)switch(s){case 438:return f.$1(H.lA(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.mw(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.nC()
q=$.nD()
p=$.nE()
o=$.nF()
n=$.nI()
m=$.nJ()
l=$.nH()
$.nG()
k=$.nL()
j=$.nK()
i=r.ao(u)
if(i!=null)return f.$1(H.lA(H.N(u),i))
else{i=q.ao(u)
if(i!=null){i.method="call"
return f.$1(H.lA(H.N(u),i))}else{i=p.ao(u)
if(i==null){i=o.ao(u)
if(i==null){i=n.ao(u)
if(i==null){i=m.ao(u)
if(i==null){i=l.ao(u)
if(i==null){i=o.ao(u)
if(i==null){i=k.ao(u)
if(i==null){i=j.ao(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.mw(H.N(u),i))}}return f.$1(new H.ji(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ei()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aP(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ei()
return a},
cp:function(a){var u
if(a==null)return new H.f8(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f8(a)},
pZ:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
q5:function(a,b,c,d,e,f){H.f(a,"$ibG")
switch(H.ac(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.C("Unsupported number of arguments for wrapped closure"))},
ck:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.q5)
a.$identity=u
return u},
o7:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.iI().constructor.prototype):Object.create(new H.cu(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b4
if(typeof t!=="number")return t.C()
$.b4=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.me(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.o3(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.me(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
o3:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.q_,a)
if(typeof a=="function")if(b)return a
else{u=c?H.md:H.lp
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
o4:function(a,b,c,d){var u=H.lp
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
me:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.o6(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.o4(t,!r,u,b)
if(t===0){r=$.b4
if(typeof r!=="number")return r.C()
$.b4=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cv
return new Function(r+H.i(q==null?$.cv=H.fN("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b4
if(typeof r!=="number")return r.C()
$.b4=r+1
o+=r
r="return function("+o+"){return this."
q=$.cv
return new Function(r+H.i(q==null?$.cv=H.fN("self"):q)+"."+H.i(u)+"("+o+");}")()},
o5:function(a,b,c,d){var u=H.lp,t=H.md
switch(b?-1:a){case 0:throw H.d(H.oG("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
o6:function(a,b){var u,t,s,r,q,p,o,n=$.cv
if(n==null)n=$.cv=H.fN("self")
u=$.mc
if(u==null)u=$.mc=H.fN("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.o5(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.b4
if(typeof u!=="number")return u.C()
$.b4=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.b4
if(typeof u!=="number")return u.C()
$.b4=u+1
return new Function(n+u+"}")()},
lY:function(a,b,c,d,e,f,g){return H.o7(a,b,c,d,!!e,!!f,g)},
lp:function(a){return a.a},
md:function(a){return a.c},
fN:function(a){var u,t,s,r=new H.cu("self","target","receiver","name"),q=J.lx(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
F:function(a){if(a==null)H.pN("boolean expression must not be null")
return a},
N:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.b1(a,"String"))},
pW:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.b1(a,"double"))},
ns:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.b1(a,"num"))},
lV:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.b1(a,"bool"))},
ac:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.b1(a,"int"))},
nu:function(a,b){throw H.d(H.b1(a,H.cr(H.N(b).substring(2))))},
qc:function(a,b){throw H.d(H.o2(a,H.cr(H.N(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.T(a)[b])return a
H.nu(a,b)},
q:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.qc(a,b)},
r0:function(a){if(a==null)return a
if(!!J.T(a).$ib)return a
throw H.d(H.b1(a,"List<dynamic>"))},
nq:function(a,b){var u
if(a==null)return a
u=J.T(a)
if(!!u.$ib)return a
if(u[b])return a
H.nu(a,b)},
nl:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ac(u)]
else return a.$S()}return},
fx:function(a,b){var u
if(typeof a=="function")return!0
u=H.nl(J.T(a))
if(u==null)return!1
return H.n6(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lR)return a
$.lR=!0
try{if(H.fx(a,b))return a
u=H.le(b)
t=H.b1(a,u)
throw H.d(t)}finally{$.lR=!1}},
lZ:function(a,b){if(a!=null&&!H.lX(a,b))H.B(H.b1(a,H.le(b)))
return a},
b1:function(a,b){return new H.j7("TypeError: "+P.dM(a)+": type '"+H.i(H.nc(a))+"' is not a subtype of type '"+b+"'")},
o2:function(a,b){return new H.fO("CastError: "+P.dM(a)+": type '"+H.i(H.nc(a))+"' is not a subtype of type '"+b+"'")},
nc:function(a){var u,t=J.T(a)
if(!!t.$icy){u=H.nl(t)
if(u!=null)return H.le(u)
return"Closure"}return H.cU(a)},
pN:function(a){throw H.d(new H.jJ(a))},
qh:function(a){throw H.d(new P.fY(a))},
oG:function(a){return new H.it(a)},
nn:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bU:function(a){if(a==null)return
return a.$ti},
r_:function(a,b,c){return H.cq(a["$a"+H.i(c)],H.bU(b))},
co:function(a,b,c,d){var u=H.cq(a["$a"+H.i(c)],H.bU(b))
return u==null?null:u[d]},
ao:function(a,b,c){var u=H.cq(a["$a"+H.i(b)],H.bU(a))
return u==null?null:u[c]},
r:function(a,b){var u=H.bU(a)
return u==null?null:u[b]},
le:function(a){return H.bT(a,null)},
bT:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cr(a[0].name)+H.lU(a,1,b)
if(typeof a=="function")return H.cr(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ac(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.i(b[t])}if('func' in a)return H.pm(a,b)
if('futureOr' in a)return"FutureOr<"+H.bT("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
pm:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.e(a0,m)
p=C.b.C(p,a0[m])
l=u[q]
if(l!=null&&l!==P.V)p+=" extends "+H.bT(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bT(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bT(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bT(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.pY(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.N(n[g])
i=i+h+H.bT(d[c],a0)+(" "+H.i(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lU:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.a7("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bT(p,c)}return"<"+u.i(0)+">"},
cq:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lW:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bU(a)
t=J.T(a)
if(t[b]==null)return!1
return H.nf(H.cq(t[d],u),null,c,null)},
m:function(a,b,c,d){if(a==null)return a
if(H.lW(a,b,c,d))return a
throw H.d(H.b1(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cr(b.substring(2))+H.lU(c,0,null),v.mangledGlobalNames)))},
nf:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aO(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aO(a[t],b,c[t],d))return!1
return!0},
qY:function(a,b,c){return a.apply(b,H.cq(J.T(b)["$a"+H.i(c)],H.bU(b)))},
np:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="V"||a.name==="O"||a===-1||a===-2||H.np(u)}return!1},
lX:function(a,b){var u,t
if(a==null)return b==null||b.name==="V"||b.name==="O"||b===-1||b===-2||H.np(b)
if(b==null||b===-1||b.name==="V"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lX(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fx(a,b)}u=J.T(a).constructor
t=H.bU(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aO(u,null,b,null)},
E:function(a,b){if(a!=null&&!H.lX(a,b))throw H.d(H.b1(a,H.le(b)))
return a},
aO:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="V"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="V"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aO(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="O")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aO("type" in a?a.type:l,b,s,d)
else if(H.aO(a,b,s,d))return!0
else{if(!('$i'+"cE" in t.prototype))return!1
r=t.prototype["$a"+"cE"]
q=H.cq(r,u?a.slice(1):l)
return H.aO(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.n6(a,b,c,d)
if('func' in a)return c.name==="bG"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.nf(H.cq(m,u),b,p,d)},
n6:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.qa(h,b,g,d)},
qa:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aO(c[s],d,a[s],b))return!1}return!0},
qZ:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
q8:function(a){var u,t,s,r,q=H.N($.no.$1(a)),p=$.kT[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kZ[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.N($.ne.$2(a,q))
if(q!=null){p=$.kT[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kZ[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.ld(u)
$.kT[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kZ[q]=u
return u}if(s==="-"){r=H.ld(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.nt(a,u)
if(s==="*")throw H.d(P.jh(q))
if(v.leafTags[q]===true){r=H.ld(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.nt(a,u)},
nt:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.m0(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ld:function(a){return J.m0(a,!1,null,!!a.$iM)},
q9:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ld(u)
else return J.m0(u,c,null,null)},
q3:function(){if(!0===$.m_)return
$.m_=!0
H.q4()},
q4:function(){var u,t,s,r,q,p,o,n
$.kT=Object.create(null)
$.kZ=Object.create(null)
H.q2()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.nv.$1(q)
if(p!=null){o=H.q9(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
q2:function(){var u,t,s,r,q,p,o=C.G()
o=H.cj(C.H,H.cj(C.I,H.cj(C.v,H.cj(C.v,H.cj(C.J,H.cj(C.K,H.cj(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.no=new H.kW(r)
$.ne=new H.kX(q)
$.nv=new H.kY(p)},
cj:function(a,b){return a(b)||b},
oh:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(P.a5("Illegal RegExp pattern ("+String(p)+")",a,null))},
qf:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pX:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nw:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
m2:function(a,b,c){var u=H.qg(a,b,c)
return u},
qg:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nw(b),'g'),H.pX(c))},
fS:function fS(){},
fT:function fT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j5:function j5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i9:function i9(a,b){this.a=a
this.b=b},
ht:function ht(a,b,c){this.a=a
this.b=b
this.c=c},
ji:function ji(a){this.a=a},
lk:function lk(a){this.a=a},
f8:function f8(a){this.a=a
this.b=null},
cy:function cy(){},
iS:function iS(){},
iI:function iI(){},
cu:function cu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j7:function j7(a){this.a=a},
fO:function fO(a){this.a=a},
it:function it(a){this.a=a},
jJ:function jJ(a){this.a=a},
a4:function a4(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hx:function hx(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hy:function hy(a,b){this.a=a
this.$ti=b},
hz:function hz(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kW:function kW(a){this.a=a},
kX:function kX(a){this.a=a},
kY:function kY(a){this.a=a},
hs:function hs(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ch:function(a){return a},
oq:function(a){return new Int8Array(a)},
bk:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.cl(b,a))},
pk:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.pV(a,b,c))
return b},
cO:function cO(){},
bM:function bM(){},
e1:function e1(){},
cP:function cP(){},
e2:function e2(){},
i1:function i1(){},
i2:function i2(){},
i3:function i3(){},
i4:function i4(){},
i5:function i5(){},
e3:function e3(){},
cQ:function cQ(){},
df:function df(){},
dg:function dg(){},
dh:function dh(){},
di:function di(){},
pY:function(a){return J.mm(a?Object.keys(a):[],null)},
qi:function(a){return v.mangledGlobalNames[a]},
qb:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
m0:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kU:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.m_==null){H.q3()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.jh("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.m4()]
if(r!=null)return r
r=H.q8(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.m4(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
og:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.lo(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.aj(a,0,4294967295,"length",null))
return J.mm(new Array(a),b)},
mm:function(a,b){return J.lx(H.c(a,[b]))},
lx:function(a){a.fixed$length=Array
return a},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dQ.prototype
return J.dP.prototype}if(typeof a=="string")return J.bK.prototype
if(a==null)return J.dR.prototype
if(typeof a=="boolean")return J.hr.prototype
if(a.constructor==Array)return J.b8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bL.prototype
return a}if(a instanceof P.V)return a
return J.kU(a)},
ds:function(a){if(typeof a=="string")return J.bK.prototype
if(a==null)return a
if(a.constructor==Array)return J.b8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bL.prototype
return a}if(a instanceof P.V)return a
return J.kU(a)},
fy:function(a){if(a==null)return a
if(a.constructor==Array)return J.b8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bL.prototype
return a}if(a instanceof P.V)return a
return J.kU(a)},
nm:function(a){if(typeof a=="number")return J.cI.prototype
if(typeof a=="string")return J.bK.prototype
if(a==null)return a
if(!(a instanceof P.V))return J.cd.prototype
return a},
dt:function(a){if(typeof a=="string")return J.bK.prototype
if(a==null)return a
if(!(a instanceof P.V))return J.cd.prototype
return a},
cn:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bL.prototype
return a}if(a instanceof P.V)return a
return J.kU(a)},
W:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).t(a,b)},
m6:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nm(a).u(a,b)},
dx:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.q6(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ds(a).j(a,b)},
lm:function(a,b,c){return J.fy(a).k(a,b,c)},
nU:function(a,b){return J.dt(a).E(a,b)},
nV:function(a,b,c){return J.cn(a).hP(a,b,c)},
nW:function(a,b,c,d){return J.cn(a).il(a,b,c,d)},
nX:function(a,b){return J.dt(a).X(a,b)},
ln:function(a,b){return J.nm(a).iz(a,b)},
fA:function(a,b){return J.fy(a).K(a,b)},
nY:function(a,b,c,d){return J.cn(a).iO(a,b,c,d)},
m7:function(a,b){return J.fy(a).H(a,b)},
nZ:function(a){return J.cn(a).giv(a)},
m8:function(a){return J.cn(a).gcg(a)},
dy:function(a){return J.T(a).gI(a)},
by:function(a){return J.fy(a).gU(a)},
aF:function(a){return J.ds(a).gn(a)},
m9:function(a){return J.fy(a).ji(a)},
o_:function(a,b){return J.cn(a).jl(a,b)},
o0:function(a,b,c){return J.dt(a).v(a,b,c)},
o1:function(a){return J.dt(a).jv(a)},
at:function(a){return J.T(a).i(a)},
a:function a(){},
hr:function hr(){},
dR:function dR(){},
dS:function dS(){},
id:function id(){},
cd:function cd(){},
bL:function bL(){},
b8:function b8(a){this.$ti=a},
ly:function ly(a){this.$ti=a},
au:function au(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cI:function cI(){},
dQ:function dQ(){},
dP:function dP(){},
bK:function bK(){}},P={
oW:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pO()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.ck(new P.jL(s),1)).observe(u,{childList:true})
return new P.jK(s,u,t)}else if(self.setImmediate!=null)return P.pP()
return P.pQ()},
oX:function(a){self.scheduleImmediate(H.ck(new P.jM(H.n(a,{func:1,ret:-1})),0))},
oY:function(a){self.setImmediate(H.ck(new P.jN(H.n(a,{func:1,ret:-1})),0))},
oZ:function(a){P.lF(C.o,H.n(a,{func:1,ret:-1}))},
lF:function(a,b){var u=C.d.af(a.a,1000)
return P.p4(u<0?0:u,b)},
mM:function(a,b){var u=C.d.af(a.a,1000)
return P.p5(u<0?0:u,b)},
p4:function(a,b){var u=new P.fe()
u.fb(a,b)
return u},
p5:function(a,b){var u=new P.fe()
u.fc(a,b)
return u},
p_:function(a,b){var u,t,s
b.a=1
try{a.eB(new P.jX(b),new P.jY(b),null)}catch(s){u=H.ak(s)
t=H.cp(s)
P.qd(new P.jZ(b,u,t))}},
mX:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaN")
if(u>=4){t=b.c3()
b.a=a.a
b.c=a.c
P.dd(b,t)}else{t=H.f(b.c,"$ibj")
b.a=2
b.c=a
a.dv(t)}},
dd:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$iap")
P.kJ(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.dd(h.a,b)}g=h.a
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
P.kJ(i,i,g.b,q.a,q.b)
return}l=$.a2
if(l!==n)$.a2=n
else l=i
g=b.c
if((g&15)===8)new P.k2(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.k1(u,b,q).$0()}else if((g&2)!==0)new P.k0(h,u,b).$0()
if(l!=null)$.a2=l
g=u.b
if(!!J.T(g).$icE){if(g.a>=4){k=H.f(o.c,"$ibj")
o.c=null
b=o.br(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.mX(g,o)
return}}j=b.b
k=H.f(j.c,"$ibj")
j.c=null
b=j.br(k)
g=u.a
p=u.b
if(!g){H.E(p,H.r(j,0))
j.a=4
j.c=p}else{H.f(p,"$iap")
j.a=8
j.c=p}h.a=j
g=j}},
pJ:function(a,b){if(H.fx(a,{func:1,args:[P.V,P.ax]}))return H.n(a,{func:1,ret:null,args:[P.V,P.ax]})
if(H.fx(a,{func:1,args:[P.V]}))return H.n(a,{func:1,ret:null,args:[P.V]})
throw H.d(P.lo(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pI:function(){var u,t
for(;u=$.ci,u!=null;){$.dr=null
t=u.b
$.ci=t
if(t==null)$.dq=null
u.a.$0()}},
pM:function(){$.lS=!0
try{P.pI()}finally{$.dr=null
$.lS=!1
if($.ci!=null)$.m5().$1(P.ng())}},
nb:function(a){var u=new P.eB(a)
if($.ci==null){$.ci=$.dq=u
if(!$.lS)$.m5().$1(P.ng())}else $.dq=$.dq.b=u},
pL:function(a){var u,t,s=$.ci
if(s==null){P.nb(a)
$.dr=$.dq
return}u=new P.eB(a)
t=$.dr
if(t==null){u.b=s
$.ci=$.dr=u}else{u.b=t.b
$.dr=t.b=u
if(u.b==null)$.dq=u}},
qd:function(a){var u=null,t=$.a2
if(C.f===t){P.kL(u,u,C.f,a)
return}P.kL(u,u,t,H.n(t.cc(a),{func:1,ret:-1}))},
mL:function(a,b){var u=$.a2
if(u===C.f)return P.lF(a,H.n(b,{func:1,ret:-1}))
return P.lF(a,H.n(u.cc(b),{func:1,ret:-1}))},
oM:function(a,b){var u=$.a2
if(u===C.f)return P.mM(a,H.n(b,{func:1,ret:-1,args:[P.bf]}))
return P.mM(a,H.n(u.dP(b,P.bf),{func:1,ret:-1,args:[P.bf]}))},
kJ:function(a,b,c,d,e){var u={}
u.a=d
P.pL(new P.kK(u,e))},
n7:function(a,b,c,d,e){var u,t=$.a2
if(t===c)return d.$0()
$.a2=c
u=t
try{t=d.$0()
return t}finally{$.a2=u}},
n8:function(a,b,c,d,e,f,g){var u,t=$.a2
if(t===c)return d.$1(e)
$.a2=c
u=t
try{t=d.$1(e)
return t}finally{$.a2=u}},
pK:function(a,b,c,d,e,f,g,h,i){var u,t=$.a2
if(t===c)return d.$2(e,f)
$.a2=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a2=u}},
kL:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.cc(d):c.iw(d,-1)
P.nb(d)},
jL:function jL(a){this.a=a},
jK:function jK(a,b,c){this.a=a
this.b=b
this.c=c},
jM:function jM(a){this.a=a},
jN:function jN(a){this.a=a},
fe:function fe(){this.c=0},
kr:function kr(a,b){this.a=a
this.b=b},
kq:function kq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bj:function bj(a,b,c,d,e){var _=this
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
jW:function jW(a,b){this.a=a
this.b=b},
k_:function k_(a,b){this.a=a
this.b=b},
jX:function jX(a){this.a=a},
jY:function jY(a){this.a=a},
jZ:function jZ(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function k2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k3:function k3(a){this.a=a},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
eB:function eB(a){this.a=a
this.b=null},
iL:function iL(){},
iN:function iN(a,b){this.a=a
this.b=b},
iO:function iO(a,b){this.a=a
this.b=b},
d_:function d_(){},
iM:function iM(){},
bf:function bf(){},
ap:function ap(a,b){this.a=a
this.b=b},
kA:function kA(){},
kK:function kK(a,b){this.a=a
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
oj:function(a,b){return new H.a4([a,b])},
lB:function(a,b){return new H.a4([a,b])},
ol:function(a){return H.pZ(a,new H.a4([null,null]))},
dV:function(a){return new P.k7([a])},
lM:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
p3:function(a,b,c){var u=new P.eQ(a,b,[c])
u.c=a.e
return u},
oe:function(a,b,c){var u,t
if(P.lT(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.h])
C.a.h($.az,a)
try{P.pn(a,u)}finally{if(0>=$.az.length)return H.e($.az,-1)
$.az.pop()}t=P.mI(b,H.nq(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
lw:function(a,b,c){var u,t
if(P.lT(a))return b+"..."+c
u=new P.a7(b)
C.a.h($.az,a)
try{t=u
t.a=P.mI(t.a,a,", ")}finally{if(0>=$.az.length)return H.e($.az,-1)
$.az.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lT:function(a){var u,t
for(u=$.az.length,t=0;t<u;++t)if(a===$.az[t])return!0
return!1},
pn:function(a,b){var u,t,s,r,q,p,o,n=a.gU(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.A())return
u=H.i(n.gJ(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.A()){if(l<=5)return
if(0>=b.length)return H.e(b,-1)
t=b.pop()
if(0>=b.length)return H.e(b,-1)
s=b.pop()}else{r=n.gJ(n);++l
if(!n.A()){if(l<=4){C.a.h(b,H.i(r))
return}t=H.i(r)
if(0>=b.length)return H.e(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gJ(n);++l
for(;n.A();r=q,q=p){p=n.gJ(n);++l
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
ok:function(a,b,c){var u=P.oj(b,c)
a.H(0,new P.hA(u,b,c))
return u},
mn:function(a,b){var u,t,s=P.dV(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t)s.h(0,H.E(a[t],b))
return s},
lC:function(a){var u,t={}
if(P.lT(a))return"{...}"
u=new P.a7("")
try{C.a.h($.az,a)
u.a+="{"
t.a=!0
J.m7(a,new P.hE(t,u))
u.a+="}"}finally{if(0>=$.az.length)return H.e($.az,-1)
$.az.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
k7:function k7(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ce:function ce(a){this.a=a
this.c=this.b=null},
eQ:function eQ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hA:function hA(a,b,c){this.a=a
this.b=b
this.c=c},
hB:function hB(){},
y:function y(){},
hD:function hD(){},
hE:function hE(a,b){this.a=a
this.b=b},
ag:function ag(){},
ks:function ks(){},
hF:function hF(){},
et:function et(a,b){this.a=a
this.$ti=b},
ke:function ke(){},
eR:function eR(){},
fk:function fk(){},
oQ:function(a,b,c,d){if(b instanceof Uint8Array)return P.oR(!1,b,c,d)
return},
oR:function(a,b,c,d){var u,t,s=$.nM()
if(s==null)return
u=0===c
if(u&&!0)return P.lI(s,b)
t=b.length
d=P.bO(c,d,t)
if(u&&d===t)return P.lI(s,b)
return P.lI(s,b.subarray(c,d))},
lI:function(a,b){if(P.oT(b))return
return P.oU(a,b)},
oU:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ak(t)}return},
oT:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
oS:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ak(t)}return},
na:function(a,b,c){var u,t,s
for(u=J.ds(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.aq()
if((s&127)!==s)return t-b}return c-b},
mb:function(a,b,c,d,e,f){if(C.d.bm(f,4)!==0)throw H.d(P.a5("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.a5("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.a5("Invalid base64 padding, more than two '=' characters",a,b))},
fK:function fK(){},
fL:function fL(){},
c_:function c_(){},
bC:function bC(){},
h7:function h7(){},
hn:function hn(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
hm:function hm(a){this.a=a},
jq:function jq(){},
js:function js(){},
ky:function ky(a){this.b=0
this.c=a},
jr:function jr(a){this.a=a},
kx:function kx(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fz:function(a,b,c){var u=H.oA(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.a5(a,null,null))},
oc:function(a){if(a instanceof H.cy)return a.i(0)
return"Instance of '"+H.i(H.cU(a))+"'"},
om:function(a,b,c){var u,t=J.og(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.k(t,u,b)
return H.m(t,"$ib",[c],"$ab")},
mo:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.by(a);u.A();)C.a.h(s,H.E(u.gJ(u),c))
if(b)return s
return H.m(J.lx(s),"$ib",t,"$ab")},
d0:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.m(a,"$ib8",[P.l],"$ab8")
u=a.length
c=P.bO(b,c,u)
return H.mC(b>0||c<u?C.a.eR(a,b,c):a)}if(!!J.T(a).$icQ)return H.oC(a,b,P.bO(b,c,a.length))
return P.oK(a,b,c)},
oK:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.d(P.aj(b,0,J.aF(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.aj(c,b,J.aF(a),q,q))
t=J.by(a)
for(s=0;s<b;++s)if(!t.A())throw H.d(P.aj(b,0,s,q,q))
r=[]
if(u)for(;t.A();)r.push(t.gJ(t))
else for(s=b;s<c;++s){if(!t.A())throw H.d(P.aj(c,b,s,q,q))
r.push(t.gJ(t))}return H.mC(r)},
oE:function(a){return new H.hs(a,H.oh(a,!1,!0,!1,!1,!1))},
mI:function(a,b,c){var u=J.by(b)
if(!u.A())return a
if(c.length===0){do a+=H.i(u.gJ(u))
while(u.A())}else{a+=H.i(u.gJ(u))
for(;u.A();)a=a+c+H.i(u.gJ(u))}return a},
mP:function(){var u=H.os()
if(u!=null)return P.oP(u)
throw H.d(P.J("'Uri.base' is not supported"))},
fl:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.nS().b
if(typeof b!=="string")H.B(H.b2(b))
u=u.test(b)}else u=!1
if(u)return b
H.E(b,H.ao(c,"c_",0))
t=c.giN().ci(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c7(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
o9:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
oa:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dI:function(a){if(a>=10)return""+a
return"0"+a},
mf:function(a){return new P.bE(1000*a)},
dM:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.oc(a)},
dA:function(a){return new P.aP(!1,null,null,a)},
lo:function(a,b,c){return new P.aP(!0,a,b,c)},
e9:function(a,b){return new P.c8(null,null,!0,a,b,"Value not in range")},
aj:function(a,b,c,d,e){return new P.c8(b,c,!0,a,d,"Invalid value")},
bO:function(a,b,c){if(0>a||a>c)throw H.d(P.aj(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.aj(b,a,c,"end",null))
return b}return c},
mD:function(a,b){if(typeof a!=="number")return a.S()
if(a<0)throw H.d(P.aj(a,0,null,b,null))},
a0:function(a,b,c,d,e){var u=H.ac(e==null?J.aF(b):e)
return new P.hp(u,!0,a,c,"Index out of range")},
J:function(a){return new P.jj(a)},
jh:function(a){return new P.jg(a)},
mH:function(a){return new P.cZ(a)},
bm:function(a){return new P.fR(a)},
C:function(a){return new P.eJ(a)},
a5:function(a,b,c){return new P.hh(a,b,c)},
on:function(a,b,c){var u,t=H.c([],[c])
C.a.sn(t,a)
for(u=0;u<a;++u)C.a.k(t,u,b.$1(u))
return t},
m1:function(a){H.qb(a)},
oP:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.E(a,4)^58)*3|C.b.E(a,0)^100|C.b.E(a,1)^97|C.b.E(a,2)^116|C.b.E(a,3)^97)>>>0
if(u===0)return P.mO(e<e?C.b.v(a,0,e):a,5,f).geH()
else if(u===32)return P.mO(C.b.v(a,5,e),0,f).geH()}t=new Array(8)
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
if(P.n9(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.jx()
if(r>=0)if(P.n9(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.C()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.S()
if(typeof n!=="number")return H.D(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.b.ac(a,"..",o)))j=n>o+2&&C.b.ac(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.ac(a,"file",0)){if(q<=0){if(!C.b.ac(a,"/",o)){i="file:///"
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
a=C.b.b1(a,o,n,"/");++e
n=h}k="file"}else if(C.b.ac(a,"http",0)){if(t&&p+3===o&&C.b.ac(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.b1(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.ac(a,"https",0)){if(t&&p+4===o&&C.b.ac(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.b1(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.v(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.kh(a,r,q,p,o,n,m,k)}return P.p6(a,0,e,r,q,p,o,n,m,k)},
mR:function(a){var u=P.h
return C.a.iS(H.c(a.split("&"),[u]),P.lB(u,u),new P.jo(C.h),[P.A,P.h,P.h])},
oO:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jl(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.X(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fz(C.b.v(a,s,t),n,n)
if(typeof p!=="number")return p.a7()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.e(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fz(C.b.v(a,s,c),n,n)
if(typeof p!=="number")return p.a7()
if(p>255)k.$2(l,s)
if(r>=u)return H.e(j,r)
j[r]=p
return j},
mQ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.jm(a),d=new P.jn(e,a)
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
n=C.a.gaD(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)C.a.h(u,d.$2(s,c))
else{m=P.oO(a,s,c)
C.a.h(u,(m[0]<<8|m[1])>>>0)
C.a.h(u,(m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.e(l,i)
l[i]=0
f=i+1
if(f>=k)return H.e(l,f)
l[f]=0
i+=2}else{f=C.d.aY(h,8)
if(i<0||i>=k)return H.e(l,i)
l[i]=f
f=i+1
if(f>=k)return H.e(l,f)
l[f]=h&255
i+=2}}return l},
p6:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.pe(a,b,d)
else{if(d===b)P.cg(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.pf(a,u,e-1):""
s=P.pb(a,e,f,!1)
if(typeof f!=="number")return f.C()
r=f+1
if(typeof g!=="number")return H.D(g)
q=r<g?P.pd(P.fz(C.b.v(a,r,g),new P.kt(a,f),n),j):n}else{q=n
s=q
t=""}p=P.pc(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.S()
o=h<i?P.lO(a,h+1,i,n):n
return new P.cf(j,t,s,q,p,o,i<c?P.pa(a,i+1,c):n)},
n0:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cg:function(a,b,c){throw H.d(P.a5(c,a,b))},
pd:function(a,b){if(a!=null&&a===P.n0(b))return
return a},
pb:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.b.X(a,b)===91){if(typeof c!=="number")return c.M()
u=c-1
if(C.b.X(a,u)!==93)P.cg(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.p8(a,t,u)
if(typeof s!=="number")return s.S()
if(s<u){r=s+1
q=P.n5(a,C.b.ac(a,"25",r)?s+3:r,u,"%25")}else q=""
P.mQ(a,t,s)
return C.b.v(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.D(c)
p=b
for(;p<c;++p)if(C.b.X(a,p)===58){s=C.b.bw(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.n5(a,C.b.ac(a,"25",r)?s+3:r,c,"%25")}else q=""
P.mQ(a,b,s)
return"["+C.b.v(a,b,s)+q+"]"}return P.ph(a,b,c)},
p8:function(a,b,c){var u,t=C.b.bw(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.D(c)
u=t<c}else u=!1
return u?t:c},
n5:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.a7(d):null
if(typeof c!=="number")return H.D(c)
u=b
t=u
s=!0
for(;u<c;){r=C.b.X(a,u)
if(r===37){q=P.lP(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.a7("")
o=l.a+=C.b.v(a,t,u)
if(p)q=C.b.v(a,u,u+3)
else if(q==="%")P.cg(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.e(C.i,p)
p=(C.i[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.a7("")
if(t<u){l.a+=C.b.v(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.b.X(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.a7("")
l.a+=C.b.v(a,t,u)
l.a+=P.lN(r)
u+=m
t=u}}}if(l==null)return C.b.v(a,b,c)
if(t<c)l.a+=C.b.v(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
ph:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.D(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.X(a,u)
if(q===37){p=P.lP(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.a7("")
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
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.a7("")
if(t<u){s.a+=C.b.v(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.l,o)
o=(C.l[o]&1<<(q&15))!==0}else o=!1
if(o)P.cg(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.X(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.a7("")
n=C.b.v(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.lN(q)
u+=l
t=u}}}}if(s==null)return C.b.v(a,b,c)
if(t<c){n=C.b.v(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
pe:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.n2(C.b.E(a,b)))P.cg(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.E(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.n,r)
r=(C.n[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cg(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.v(a,b,c)
return P.p7(t?a.toLowerCase():a)},
p7:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
pf:function(a,b,c){return P.dn(a,b,c,C.W,!1)},
pc:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dn(a,b,c,C.A,!0):C.k.jL(d,new P.ku(),P.h).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.aa(u,"/"))u="/"+u
return P.pg(u,e,f)},
pg:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.aa(a,"/"))return P.pi(a,!u||c)
return P.pj(a)},
lO:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.d(P.dA("Both query and queryParameters specified"))
return P.dn(a,b,c,C.m,!0)}if(d==null)return
u=new P.a7("")
t.a=""
d.H(0,new P.kv(new P.kw(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
pa:function(a,b,c){return P.dn(a,b,c,C.m,!0)},
lP:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.X(a,b+1)
t=C.b.X(a,p)
s=H.kV(u)
r=H.kV(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aY(q,4)
if(p>=8)return H.e(C.i,p)
p=(C.i[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c7(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
lN:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.c(u,[P.l])
C.a.k(t,0,37)
C.a.k(t,1,C.b.E(o,a>>>4))
C.a.k(t,2,C.b.E(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.c(u,[P.l])
for(q=0;--r,r>=0;s=128){p=C.d.i2(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.E(o,p>>>4))
C.a.k(t,q+2,C.b.E(o,p&15))
q+=3}}return P.d0(t,0,null)},
dn:function(a,b,c,d,e){var u=P.n4(a,b,c,d,e)
return u==null?C.b.v(a,b,c):u},
n4:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.S()
if(typeof c!=="number")return H.D(c)
if(!(o<c))break
c$0:{u=C.b.X(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.e(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.lP(a,o,!1)
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
s=P.lN(u)}}if(m==null)m=new P.a7("")
m.a+=C.b.v(a,n,o)
m.a+=H.i(s)
if(typeof r!=="number")return H.D(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.S()
if(n<c)m.a+=C.b.v(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
n3:function(a){if(C.b.aa(a,"."))return!0
return C.b.eg(a,"/.")!==-1},
pj:function(a){var u,t,s,r,q,p,o
if(!P.n3(a))return a
u=H.c([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.W(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
pi:function(a,b){var u,t,s,r,q,p
if(!P.n3(a))return!b?P.n1(a):a
u=H.c([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaD(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaD(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.k(u,0,P.n1(u[0]))}return C.a.m(u,"/")},
n1:function(a){var u,t,s,r=a.length
if(r>=2&&P.n2(J.nU(a,0)))for(u=1;u<r;++u){t=C.b.E(a,u)
if(t===58)return C.b.v(a,0,u)+"%3A"+C.b.ah(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.e(C.n,s)
s=(C.n[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
p9:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.E(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.dA("Invalid URL encoding"))}}return u},
lQ:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.E(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.v(a,b,c)
else r=new H.u(C.b.v(a,b,c))}else{r=H.c([],[P.l])
for(s=a.length,q=b;q<c;++q){t=C.b.E(a,q)
if(t>127)throw H.d(P.dA("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.dA("Truncated URI"))
C.a.h(r,P.p9(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.m(r,"$ib",[P.l],"$ab")
return new P.jr(!1).ci(r)},
n2:function(a){var u=a|32
return 97<=u&&u<=122},
mO:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.l])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.E(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.a5(m,a,t))}}if(s<0&&t>b)throw H.d(P.a5(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.E(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaD(l)
if(r!==44||t!==p+7||!C.b.ac(a,"base64",p+1))throw H.d(P.a5("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.j2(0,a,o,u)
else{n=P.n4(a,o,u,C.m,!0)
if(n!=null)a=C.b.b1(a,o,u,n)}return new P.jk(a,l,c)},
pl:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.on(22,new P.kE(),P.S),n=new P.kD(o),m=new P.kF(),l=new P.kG(),k=H.f(n.$2(0,225),"$iS")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iS")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iS")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iS")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iS")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iS")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iS")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iS")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iS")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iS"),"]",5)
k=H.f(n.$2(9,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iS")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iS")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iS"),"az",21)
k=H.f(n.$2(21,245),"$iS")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
n9:function(a,b,c,d,e){var u,t,s,r,q=$.nT()
for(u=b;u<c;++u){if(d<0||d>=q.length)return H.e(q,d)
t=q[d]
s=C.b.E(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.e(t,s)
r=t[s]
d=r&31
C.a.k(e,r>>>5,u)}return d},
R:function R(){},
aA:function aA(a,b){this.a=a
this.b=b},
t:function t(){},
bE:function bE(a){this.a=a},
h3:function h3(){},
h4:function h4(){},
bF:function bF(){},
fD:function fD(){},
e5:function e5(){},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c8:function c8(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hp:function hp(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
jj:function jj(a){this.a=a},
jg:function jg(a){this.a=a},
cZ:function cZ(a){this.a=a},
fR:function fR(a){this.a=a},
ic:function ic(){},
ei:function ei(){},
fY:function fY(a){this.a=a},
eJ:function eJ(a){this.a=a},
hh:function hh(a,b,c){this.a=a
this.b=b
this.c=c},
bG:function bG(){},
l:function l(){},
j:function j(){},
b7:function b7(){},
b:function b(){},
A:function A(){},
O:function O(){},
ad:function ad(){},
V:function V(){},
ax:function ax(){},
h:function h(){},
a7:function a7(a){this.a=a},
jo:function jo(a){this.a=a},
jl:function jl(a){this.a=a},
jm:function jm(a){this.a=a},
jn:function jn(a,b){this.a=a
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
kt:function kt(a,b){this.a=a
this.b=b},
ku:function ku(){},
kw:function kw(a,b){this.a=a
this.b=b},
kv:function kv(a){this.a=a},
jk:function jk(a,b,c){this.a=a
this.b=b
this.c=c},
kE:function kE(){},
kD:function kD(a){this.a=a},
kF:function kF(){},
kG:function kG(){},
kh:function kh(a,b,c,d,e,f,g,h){var _=this
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
pU:function(a){var u,t=J.T(a)
if(!!t.$ibo){u=t.gdT(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fj(a.data,a.height,a.width)},
pT:function(a){if(a instanceof P.fj)return{data:a.a,height:a.b,width:a.c}
return a},
bt:function(a){var u,t,s,r,q
if(a==null)return
u=P.lB(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r){q=H.N(t[r])
u.k(0,q,a[q])}return u},
pS:function(a){var u={}
a.H(0,new P.kM(u))
return u},
kj:function kj(){},
kl:function kl(a,b){this.a=a
this.b=b},
fj:function fj(a,b,c){this.a=a
this.b=b
this.c=c},
kM:function kM(a){this.a=a},
kk:function kk(a,b){this.a=a
this.b=b},
hd:function hd(a,b){this.a=a
this.b=b},
he:function he(){},
hf:function hf(){},
k6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
p2:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k8:function k8(){},
am:function am(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ba:function ba(){},
hv:function hv(){},
bd:function bd(){},
ia:function ia(){},
ii:function ii(){},
cW:function cW(){},
iP:function iP(){},
p:function p(){},
bg:function bg(){},
j4:function j4(){},
eO:function eO(){},
eP:function eP(){},
eZ:function eZ(){},
f_:function f_(){},
fa:function fa(){},
fb:function fb(){},
fh:function fh(){},
fi:function fi(){},
S:function S(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(a){this.a=a},
fI:function fI(){},
bW:function bW(){},
ib:function ib(){},
eC:function eC(){},
dC:function dC(){},
dO:function dO(){},
e8:function e8(){},
ea:function ea(){},
c9:function c9(){},
ec:function ec(){},
ek:function ek(){},
er:function er(){},
iH:function iH(){},
f6:function f6(){},
f7:function f7(){}},W={
ma:function(){var u=document.createElement("a")
return u},
lq:function(){var u=document.createElement("canvas")
return u},
ob:function(a,b,c){var u=document.body,t=(u&&C.t).an(u,a,b,c)
t.toString
u=W.G
u=new H.da(new W.as(t),H.n(new W.h6(),{func:1,ret:P.R,args:[u]}),[u])
return H.f(u.gaQ(u),"$iU")},
mi:function(a){H.f(a,"$ik")
return"wheel"},
cB:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cn(a)
t=u.gey(a)
if(typeof t==="string")r=u.gey(a)}catch(s){H.ak(s)}return r},
od:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icH")
try{s.type=a}catch(u){H.ak(u)}return s},
k5:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mZ:function(a,b,c,d){var u=W.k5(W.k5(W.k5(W.k5(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ab:function(a,b,c,d,e){var u=W.nd(new W.jV(c),W.o)
if(u!=null&&!0)J.nW(a,b,u,!1)
return new W.jU(a,b,u,!1,[e])},
mY:function(a){var u=W.ma(),t=window.location
u=new W.bS(new W.kd(u,t))
u.f2(a)
return u},
p0:function(a,b,c,d){H.f(a,"$iU")
H.N(b)
H.N(c)
H.f(d,"$ibS")
return!0},
p1:function(a,b,c,d){var u,t,s
H.f(a,"$iU")
H.N(b)
H.N(c)
u=H.f(d,"$ibS").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
n_:function(){var u=P.h,t=P.mn(C.p,u),s=H.r(C.p,0),r=H.n(new W.kp(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.ko(t,P.dV(u),P.dV(u),P.dV(u),null)
t.fa(null,new H.hI(C.p,r,[s,u]),q,null)
return t},
nd:function(a,b){var u=$.a2
if(u===C.f)return a
return u.dP(a,b)},
x:function x(){},
fB:function fB(){},
dz:function dz(){},
fC:function fC(){},
ct:function ct(){},
bX:function bX(){},
bz:function bz(){},
bZ:function bZ(){},
cx:function cx(){},
bA:function bA(){},
cz:function cz(){},
fU:function fU(){},
X:function X(){},
cA:function cA(){},
fV:function fV(){},
b5:function b5(){},
b6:function b6(){},
fW:function fW(){},
fX:function fX(){},
h_:function h_(){},
aG:function aG(){},
h0:function h0(){},
dJ:function dJ(){},
dK:function dK(){},
h1:function h1(){},
h2:function h2(){},
jP:function jP(a,b){this.a=a
this.b=b},
U:function U(){},
h6:function h6(){},
o:function o(){},
k:function k(){},
aH:function aH(){},
cD:function cD(){},
hc:function hc(){},
hg:function hg(){},
aR:function aR(){},
hl:function hl(){},
c2:function c2(){},
bo:function bo(){},
cG:function cG(){},
cH:function cH(){},
b9:function b9(){},
dW:function dW(){},
hV:function hV(){},
cM:function cM(){},
hW:function hW(){},
hX:function hX(a){this.a=a},
hY:function hY(){},
hZ:function hZ(a){this.a=a},
aS:function aS(){},
i_:function i_(){},
ah:function ah(){},
as:function as(a){this.a=a},
G:function G(){},
cR:function cR(){},
aT:function aT(){},
ig:function ig(){},
ir:function ir(){},
is:function is(a){this.a=a},
iu:function iu(){},
aV:function aV(){},
iF:function iF(){},
aW:function aW(){},
iG:function iG(){},
aX:function aX(){},
iJ:function iJ(){},
iK:function iK(a){this.a=a},
aJ:function aJ(){},
be:function be(){},
ej:function ej(){},
iQ:function iQ(){},
iR:function iR(){},
d2:function d2(){},
aZ:function aZ(){},
aK:function aK(){},
iT:function iT(){},
iU:function iU(){},
iZ:function iZ(){},
b_:function b_(){},
b0:function b0(){},
j2:function j2(){},
j3:function j3(){},
bQ:function bQ(){},
jp:function jp(){},
jH:function jH(){},
bi:function bi(){},
db:function db(){},
dc:function dc(){},
jQ:function jQ(){},
eE:function eE(){},
k4:function k4(){},
eW:function eW(){},
ki:function ki(){},
km:function km(){},
jO:function jO(){},
jS:function jS(a){this.a=a},
jT:function jT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lL:function lL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jU:function jU(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jV:function jV(a){this.a=a},
bS:function bS(a){this.a=a},
H:function H(){},
e4:function e4(a){this.a=a},
i7:function i7(a){this.a=a},
i6:function i6(a,b,c){this.a=a
this.b=b
this.c=c},
f3:function f3(){},
kf:function kf(){},
kg:function kg(){},
ko:function ko(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kp:function kp(){},
kn:function kn(){},
dN:function dN(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aD:function aD(){},
kd:function kd(a,b){this.a=a
this.b=b},
fm:function fm(a){this.a=a},
kz:function kz(a){this.a=a},
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
dj:function dj(){},
dk:function dk(){},
f4:function f4(){},
f5:function f5(){},
f9:function f9(){},
fc:function fc(){},
fd:function fd(){},
dl:function dl(){},
dm:function dm(){},
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
lr:function(a){var u=new O.a3([a])
u.bo(a)
return u},
a3:function a3(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cL:function cL(){this.b=this.a=null},
mp:function(){var u,t,s=new O.e_()
s.sfk(O.lr(V.av))
s.e.b3(s.gfT(),s.gfV())
u=new O.bb(s,"emission")
u.c=new A.al(!1,!1,!1)
u.f=new V.a8(0,0,0)
s.f=u
u=new O.bb(s,"ambient")
u.c=new A.al(!1,!1,!1)
u.f=new V.a8(0,0,0)
s.r=u
u=new O.bb(s,"diffuse")
u.c=new A.al(!1,!1,!1)
u.f=new V.a8(0,0,0)
s.x=u
u=new O.bb(s,"invDiffuse")
u.c=new A.al(!1,!1,!1)
u.f=new V.a8(0,0,0)
s.y=u
u=new O.hO(s,"specular")
u.c=new A.al(!1,!1,!1)
u.f=new V.a8(0,0,0)
u.ch=100
s.z=u
u=new O.hK(s,"bump")
u.c=new A.al(!1,!1,!1)
s.Q=u
s.ch=null
u=new O.bb(s,"reflect")
u.c=new A.al(!1,!1,!1)
u.f=new V.a8(0,0,0)
s.cx=u
u=new O.hN(s,"refract")
u.c=new A.al(!1,!1,!1)
u.f=new V.a8(0,0,0)
u.ch=1
s.cy=u
u=new O.hJ(s,"alpha")
u.c=new A.al(!1,!1,!1)
u.f=1
s.db=u
u=new D.dU()
u.bo(D.af)
u.sf4(H.c([],[D.bD]))
u.shG(H.c([],[D.e7]))
u.sf7(H.c([],[D.eh]))
u.y=u.x=null
u.cU(u.gfR(),u.ghq(),u.ghu())
s.dx=u
t=new O.hM()
t.b=new V.ae(0,0,0,0)
t.c=1
t.d=10
t.e=!1
s.dy=t
t=u.x
u=t==null?u.x=D.P():t
u.h(0,s.ghR())
u=s.dx
t=u.y
u=t==null?u.y=D.P():t
u.h(0,s.gaS())
s.fr=null
return s},
e_:function e_(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hP:function hP(a,b){this.a=a
this.b=b},
hQ:function hQ(){},
hR:function hR(a,b){this.a=a
this.b=b},
hS:function hS(){},
hT:function hT(a,b){this.a=a
this.b=b},
hU:function hU(){},
hJ:function hJ(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cK:function cK(){},
hK:function hK(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
bb:function bb(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hM:function hM(){var _=this
_.e=_.d=_.c=_.b=null},
hN:function hN(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hO:function hO(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ee:function ee(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bP:function bP(){}},E={
lv:function(){var u=new E.aq()
u.a=""
u.b=!0
u.sf1(0,O.lr(E.aq))
u.y.b3(u.gj3(),u.gj6())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sa9(0,null)
return u},
oF:function(a,b){var u=new E.im(a)
u.eZ(a,b)
return u},
oL:function(a,b,c,d,e){var u,t,s=J.T(a)
if(!!s.$ibZ)return E.mK(a,!0,!0,!0,!1)
u=W.lq()
t=u.style
t.width="100%"
t.height="100%"
s.gcg(a).h(0,u)
return E.mK(u,!0,!0,!0,!1)},
mK:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.en(),j=H.f(C.j.cS(a,"webgl2",P.ol(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic9")
if(j==null)H.B(P.C("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.oF(j,a)
u=new T.iW(j)
H.ac(j.getParameter(3379))
u.c=H.ac(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.eu(a)
t=new X.hu()
t.c=new X.aC(!1,!1,!1)
t.shJ(P.dV(P.l))
u.b=t
t=new X.i0(u)
t.f=0
t.r=V.br()
t.x=V.br()
t.ch=t.Q=1
u.c=t
t=new X.hC(u)
t.r=0
t.x=V.br()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.j1(u)
t.f=V.br()
t.r=V.br()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfz(H.c([],[[P.d_,P.V]]))
t=u.z
s=document
r=W.ah
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ab(s,"contextmenu",H.n(u.gh2(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ab(a,"focus",H.n(u.gh8(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ab(a,"blur",H.n(u.gfX(),o),!1,p))
t=u.z
n=W.b9
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ab(s,"keyup",H.n(u.ghc(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ab(s,"keydown",H.n(u.gha(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ab(a,"mousedown",H.n(u.ghg(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,"mouseup",H.n(u.ghk(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,l,H.n(u.ghi(),q),!1,r))
n=u.z
W.mi(a)
m=W.bi;(n&&C.a).h(n,W.ab(a,H.N(W.mi(a)),H.n(u.ghm(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ab(s,l,H.n(u.gh4(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ab(s,"mouseup",H.n(u.gh6(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ab(s,"pointerlockchange",H.n(u.gho(),o),!1,p))
p=u.z
o=W.b0
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ab(a,"touchstart",H.n(u.ghE(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchend",H.n(u.ghA(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchmove",H.n(u.ghC(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aA(Date.now(),!1)
k.cy=0
k.dz()
return k},
fM:function fM(){},
aq:function aq(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
im:function im(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
io:function io(a){this.a=a},
ip:function ip(a){this.a=a},
iq:function iq(a){this.a=a},
en:function en(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iY:function iY(a){this.a=a}},Z={
lK:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ch(c)),35044)
a.bindBuffer(b,null)
return new Z.ez(b,u)},
aM:function(a){return new Z.bs(a)},
ez:function ez(a,b){this.a=a
this.b=b},
dD:function dD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
eA:function eA(a){this.a=a},
cw:function cw(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bH:function bH(a,b,c){this.a=a
this.b=b
this.c=c},
bs:function bs(a){this.a=a}},D={
P:function(){var u=new D.c0()
u.sam(null)
u.saW(null)
u.c=null
u.d=0
return u},
fP:function fP(){},
c0:function c0(){var _=this
_.d=_.c=_.b=_.a=null},
h9:function h9(a){this.a=a},
ha:function ha(a){this.a=a},
z:function z(){this.b=null},
bI:function bI(a){this.b=null
this.$ti=a},
bJ:function bJ(a){this.b=null
this.$ti=a},
I:function I(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bD:function bD(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
af:function af(){},
dU:function dU(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
e7:function e7(){},
eh:function eh(){}},X={dE:function dE(a,b){this.a=a
this.b=b},dT:function dT(a,b){this.a=a
this.b=b},hu:function hu(){var _=this
_.d=_.c=_.b=_.a=null},dX:function dX(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hC:function hC(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aC:function aC(a,b,c){this.a=a
this.b=b
this.c=c},bq:function bq(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},i0:function i0(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cN:function cN(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ih:function ih(){},ep:function ep(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},j1:function j1(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},eu:function eu(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mk:function(a){var u=new X.hi(),t=new V.ae(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.lE()
u.r=t
return u},
lD:function(a){var u,t,s=new X.e6()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gp().h(0,s.gfd())
t=new D.I("mover",u,s.b,[U.ai])
t.b=!0
s.a2(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.L().a)){s.c=1.0471975511965976
t=new D.I("fov",t,1.0471975511965976,[P.t])
t.b=!0
s.a2(t)}t=s.d
if(!(Math.abs(t-0.1)<$.L().a)){s.d=0.1
t=new D.I("near",t,0.1,[P.t])
t.b=!0
s.a2(t)}t=s.e
if(!(Math.abs(t-2000)<$.L().a)){s.e=2000
t=new D.I("far",t,2000,[P.t])
t.b=!0
s.a2(t)}return s},
fJ:function fJ(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bY:function bY(){},
hi:function hi(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ho:function ho(){this.b=this.a=null},
e6:function e6(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
d1:function d1(){}},V={
ll:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bm(a-b,u)
return(a<0?a+u:a)+b},
Q:function(a,b,c){if(a==null)return C.b.ap("null",c)
return C.b.ap(C.e.eC(Math.abs(a-0)<$.L().a?0:a,b),c+b+1)},
cm:function(a,b,c){var u,t,s,r,q,p=H.c([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.v)(a),++s){r=V.Q(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.e(p,q)
C.a.k(p,q,C.b.ap(p[q],t))}return p},
du:function(a){return C.e.js(Math.pow(2,C.S.cs(Math.log(H.pR(a))/Math.log(2))))},
c4:function(){var u=$.mv
return u==null?$.mv=V.bc(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bc:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mu:function(a,b,c){return V.bc(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
mr:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bc(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
ms:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bc(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
mt:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bc(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
mq:function(a,b,c){var u=c.q(0,Math.sqrt(c.B(c))),t=b.aI(u),s=t.q(0,Math.sqrt(t.B(t))),r=u.aI(s),q=new V.K(a.a,a.b,a.c),p=s.T(0).B(q),o=r.T(0).B(q),n=u.T(0).B(q)
return V.bc(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
br:function(){var u=$.mz
return u==null?$.mz=new V.a6(0,0):u},
mA:function(){var u=$.cS
return u==null?$.cS=new V.Z(0,0,0):u},
lE:function(){var u=$.mF
return u==null?$.mF=V.mE(0,0,1,1):u},
mE:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cV(a,b,c,d)},
d9:function(){var u=$.mV
return u==null?$.mV=new V.K(0,0,0):u},
oV:function(){var u=$.jt
return u==null?$.jt=new V.K(-1,0,0):u},
lJ:function(){var u=$.ju
return u==null?$.ju=new V.K(0,1,0):u},
mW:function(){var u=$.jv
return u==null?$.jv=new V.K(0,0,1):u},
a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h8:function h8(a){this.a=a},
e0:function e0(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
av:function av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a6:function a6(a,b){this.a=a
this.b=b},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
aI:function aI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cV:function cV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Y:function Y(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
a1:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.C("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.E(a,0)
t=C.b.E(b,0)
s=new V.il()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
w:function(a){var u=new V.iv()
u.f_(a)
return u},
j0:function(){var u=new V.j_(),t=P.h
u.si5(new H.a4([t,V.cY]))
u.si8(new H.a4([t,V.d4]))
u.c=null
return u},
bl:function bl(){},
aB:function aB(){},
dY:function dY(){},
aw:function aw(){this.a=null},
il:function il(){this.b=this.a=null},
iv:function iv(){this.a=null},
cY:function cY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eo:function eo(a,b,c){this.a=a
this.b=b
this.c=c},
d4:function d4(a){this.b=a
this.c=null},
j_:function j_(){this.c=this.b=this.a=null},
d5:function d5(a){this.b=a
this.a=this.c=null},
qe:function(a){P.oM(C.P,new V.lf(a))},
oH:function(a){var u=new V.iA()
u.f0(a,!0)
return u},
bB:function bB(){},
lf:function lf(a){this.a=a},
fZ:function fZ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hj:function hj(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hk:function hk(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ie:function ie(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ij:function ij(a){this.a=a
this.c=null},
ik:function ik(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iA:function iA(){this.b=this.a=null},
iC:function iC(a){this.a=a},
iB:function iB(a){this.a=a},
iD:function iD(a){this.a=a},
nr:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="testCanvas",b1=null,b2=34067,b3="modifiers",b4=V.oH("Test 027"),b5=W.lq()
b5.className="pageLargeCanvas"
b5.id=b0
b4.a.appendChild(b5)
u=[P.h]
b4.dL(H.c(["Test of a back buffer target for rendering to a texture. ","That back buffer texture is applied to a box."],u))
b4.ik(H.c(["shapes"],u))
b4.dL(H.c(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b0)
if(t==null)H.B(P.C("Failed to find an element with the identifier, testCanvas."))
s=E.oL(t,!0,!0,!0,!1)
r=U.ml()
q=new U.eb()
q.r=q.f=q.e=q.d=q.c=q.b=q.a=0
q.seJ(0)
q.seq(0,0)
q.sew(0)
p=q.d
if(!(Math.abs(p-0.1)<$.L().a)){q.d=0.1
p=new D.I("deltaYaw",p,0.1,[P.t])
p.b=!0
q.G(p)}p=q.e
if(!(Math.abs(p-0.21)<$.L().a)){q.e=0.21
p=new D.I("deltaPitch",p,0.21,[P.t])
p.b=!0
q.G(p)}p=q.f
if(!(Math.abs(p-0.32)<$.L().a)){q.f=0.32
p=new D.I("deltaRoll",p,0.32,[P.t])
p.b=!0
q.G(p)}r.h(0,q)
r.h(0,U.lt(V.mu(0,0,5)))
o=X.lD(r)
n=new X.fJ()
n.d=n.c=n.b=n.a=512
n.e=!0
n.f=!1
n.x=n.r=1
n.ch=T.mJ(b1)
n.cx=new V.ae(0,0,0,1)
n.cy=!0
n.db=2000
n.dx=!0
n.dy=V.lE()
n.saz(0,512)
n.sau(0,512)
m=new V.ae(0,0,0,1)
if(!n.cx.t(0,m)){l=n.cx
n.cx=m
q=new D.I("color",l,m,[V.ae])
q.b=!0
n.a2(q)}if(n.cy){n.cy=!1
q=new D.I("clearColor",!0,!1,[P.R])
q.b=!0
n.a2(q)}q=n.db
if(!(Math.abs(q-2000)<$.L().a)){n.db=2000
q=new D.I("depth",q,2000,[P.t])
q.b=!0
n.a2(q)}q=n.r
if(!(Math.abs(q-1)<$.L().a)){n.r=1
q=new D.I("autoResizeScalarX",q,1,[P.t])
q.b=!0
n.a2(q)}q=n.x
if(!(Math.abs(q-1)<$.L().a)){n.x=1
q=new D.I("autoResizeScalarY",q,1,[P.t])
q.b=!0
n.a2(q)}k=V.lE()
if(!J.W(n.dy,k)){l=n.dy
n.dy=k
q=new D.I("region",l,k,[V.cV])
q.b=!0
n.a2(q)}q=s.f
p=q.a
j=p.createTexture()
p.bindTexture(b2,j)
p.texParameteri(b2,10242,10497)
p.texParameteri(b2,10243,10497)
p.texParameteri(b2,10241,9729)
p.texParameteri(b2,10240,9729)
p.bindTexture(b2,b1)
i=new T.em()
i.a=0
i.b=j
i.c=!1
i.d=0
q.aU(i,j,"../resources/maskonaive/posx.jpg",34069,!1,!1)
q.aU(i,j,"../resources/maskonaive/negx.jpg",34070,!1,!1)
q.aU(i,j,"../resources/maskonaive/posy.jpg",34071,!1,!1)
q.aU(i,j,"../resources/maskonaive/negy.jpg",34072,!1,!1)
q.aU(i,j,"../resources/maskonaive/posz.jpg",34073,!1,!1)
q.aU(i,j,"../resources/maskonaive/negz.jpg",34074,!1,!1)
h=new M.dH()
h.a=!0
q=E.lv()
g=F.iw()
p=g.a
f=new V.K(-1,-1,1)
f=f.q(0,Math.sqrt(f.B(f)))
e=p.bt(new V.aI(1,2,4,6),new V.ae(1,0,0,1),new V.Z(-1,-1,0),new V.a6(0,1),f,b1)
p=g.a
f=new V.K(1,-1,1)
f=f.q(0,Math.sqrt(f.B(f)))
d=p.bt(new V.aI(0,3,4,6),new V.ae(0,0,1,1),new V.Z(1,-1,0),new V.a6(1,1),f,b1)
p=g.a
f=new V.K(1,1,1)
f=f.q(0,Math.sqrt(f.B(f)))
c=p.bt(new V.aI(0,2,5,6),new V.ae(0,1,0,1),new V.Z(1,1,0),new V.a6(1,0),f,b1)
p=g.a
f=V.br()
b=new V.K(-1,1,1)
b=b.q(0,Math.sqrt(b.B(b)))
a=p.bt(new V.aI(0,2,4,7),new V.ae(1,1,0,1),new V.Z(-1,1,0),f,b,b1)
g.d.dJ(H.c([e,d,c,a],[F.ar]))
g.at()
q.sa9(0,g)
h.e=q
h.sb_(b1)
h.sbk(0,b1)
h.sb2(b1)
q=new O.ee()
q.b=1.0471975511965976
q.d=new V.a8(1,1,1)
l=q.c
q.c=i
i.gp().h(0,q.gaS())
p=new D.I("boxTexture",l,q.c,[T.em])
p.b=!0
q.Y(p)
h.sb2(q)
h.sbk(0,n)
h.sb_(o)
a0=E.lv()
a0.sa9(0,F.nz())
a1=O.mp()
q=a1.dx
a2=V.lJ()
p=U.lt(V.mq(V.mA(),a2,new V.K(0,-1,-1)))
m=new V.a8(1,1,1)
f=new D.bD()
f.c=new V.a8(1,1,1)
f.a=V.mW()
f.d=V.lJ()
f.e=V.oV()
l=f.b
f.b=p
p.gp().h(0,f.gf5())
p=new D.I("mover",l,f.b,[U.ai])
p.b=!0
f.aE(p)
if(!f.c.t(0,m)){l=f.c
f.c=m
p=new D.I("color",l,m,[V.a8])
p.b=!0
f.aE(p)}q.h(0,f)
q=a1.r
q.sbc(0,new V.a8(0,0,1))
q=a1.x
q.sbc(0,new V.a8(0,1,0))
q=a1.z
q.sbc(0,new V.a8(1,0,0))
q=a1.z
q.c6(new A.al(!0,q.c.b,!1))
q.dB(10)
a3=M.mj()
a3.sb_(o)
a3.sb2(a1)
a3.sbk(0,n)
a3.e.h(0,a0)
a4=U.ml()
q=s.r
p=new U.ew()
f=U.ls()
f.scR(0,!0)
f.scC(6.283185307179586)
f.scE(0)
f.sa1(0,0)
f.scD(100)
f.sW(0)
f.sck(0.5)
p.b=f
b=p.gaV()
f.gp().h(0,b)
f=U.ls()
f.scR(0,!0)
f.scC(6.283185307179586)
f.scE(0)
f.sa1(0,0)
f.scD(100)
f.sW(0)
f.sck(0.5)
p.c=f
f.gp().h(0,b)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
a5=new X.aC(!1,!1,!1)
l=p.d
p.d=a5
f=[X.aC]
b=new D.I(b3,l,a5,f)
b.b=!0
p.G(b)
b=p.f
if(b!==!1){p.f=!1
b=new D.I("invertX",b,!1,[P.R])
b.b=!0
p.G(b)}b=p.r
if(b!==!1){p.r=!1
b=new D.I("invertY",b,!1,[P.R])
b.b=!0
p.G(b)}p.bb(q)
a4.h(0,p)
q=s.r
p=new U.ev()
b=U.ls()
b.scR(0,!0)
b.scC(6.283185307179586)
b.scE(0)
b.sa1(0,0)
b.scD(100)
b.sW(0)
b.sck(0.2)
p.b=b
b.gp().h(0,p.gaV())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
a5=new X.aC(!0,!1,!1)
l=p.c
p.c=a5
b=new D.I(b3,l,a5,f)
b.b=!0
p.G(b)
p.bb(q)
a4.h(0,p)
q=s.r
p=new U.ex()
p.c=0.01
p.e=p.d=0
a5=new X.aC(!1,!1,!1)
p.b=a5
f=new D.I(b3,b1,a5,f)
f.b=!0
p.G(f)
p.bb(q)
a4.h(0,p)
a4.h(0,U.lt(V.mu(0,0,5)))
a6=X.lD(a4)
a7=E.lv()
a7.sa9(0,F.kN(1,b1,b1,1))
a8=O.mp()
q=a8.f
p=n.ch
f=q.c
if(!f.b)q.c6(new A.al(f.a,!0,!1))
f=q.d
if(f!==p){if(f!=null)f.gp().L(0,q.gaS())
l=q.d
q.d=p
p.gp().h(0,q.gaS())
p=new D.I(q.b+".texture2D",l,q.d,[T.el])
p.b=!0
q.a.Y(p)}a9=M.mj()
a9.sb_(a6)
a9.sb2(a8)
a9.e.h(0,a7)
q=M.aE
p=H.c([h,a3,a9],[q])
f=new M.dF()
f.bo(q)
f.e=!0
f.f=!1
f.r=null
f.b3(f.ghw(),f.ghy())
f.ag(0,p)
q=s.d
if(q!==f){if(q!=null)q.gp().L(0,s.gd_())
s.d=f
f.gp().h(0,s.gd_())
s.d0()}q=new V.ij("shapes")
u=u.getElementById("shapes")
q.c=u
if(u==null)H.B("Failed to find shapes for RadioGroup")
q.dH(0,"Cube",new V.l3(a7),!0)
q.aB(0,"Cuboid",new V.l4(a7))
q.aB(0,"Cylinder",new V.l5(a7))
q.aB(0,"Cone",new V.l6(a7))
q.aB(0,"Cylindrical",new V.l7(a7))
q.aB(0,"Sphere",new V.l8(a7))
q.aB(0,"Spherical",new V.l9(a7))
q.aB(0,"Toroid",new V.la(a7))
q.aB(0,"Knot",new V.lb(a7))
u=s.z
if(u==null)u=s.z=D.P()
q={func:1,ret:-1,args:[D.z]}
p=H.n(new V.lc(b4,a8),q)
if(u.b==null)u.saW(H.c([],[q]))
u=u.b;(u&&C.a).h(u,p)
V.qe(s)},
l3:function l3(a){this.a=a},
l4:function l4(a){this.a=a},
l2:function l2(){},
l5:function l5(a){this.a=a},
l6:function l6(a){this.a=a},
l7:function l7(a){this.a=a},
l1:function l1(){},
l8:function l8(a){this.a=a},
l9:function l9(a){this.a=a},
l0:function l0(){},
la:function la(a){this.a=a},
lb:function lb(a){this.a=a},
lc:function lc(a,b){this.a=a
this.b=b}},U={
ls:function(){var u=new U.fQ()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
lt:function(a){var u=new U.dG()
u.a=a
return u},
ml:function(){var u=new U.cF()
u.bo(U.ai)
u.b3(u.gf8(),u.ghs())
u.e=null
u.f=V.c4()
u.r=0
return u},
fQ:function fQ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dG:function dG(){this.b=this.a=null},
cF:function cF(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ai:function ai(){},
eb:function eb(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ev:function ev(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
ew:function ew(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ex:function ex(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
mj:function(){var u,t=new M.dL()
t.a=!0
t.sfn(0,O.lr(E.aq))
t.e.b3(t.gfZ(),t.gh0())
t.y=t.x=t.r=t.f=null
u=X.mk(null)
t.sb_(null)
t.sbk(0,u)
t.sb2(null)
return t},
dF:function dF(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
dH:function dH(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dL:function dL(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aE:function aE(){}},A={
oo:function(a,b){var u=a.aJ,t=new A.dZ(b,u)
t.cZ(b,u)
t.eY(a,b)
return t},
op:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gay(a0)+a1.gay(a1)+a2.gay(a2)+a3.gay(a3)+a4.gay(a4)+a5.gay(a5)+a6.gay(a6)+a7.gay(a7)+a8.gay(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.v)(a9),++t)f+="_"+H.i(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.v)(b0),++t)f+="_"+H.i(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.v)(b1),++t)f+="_"+H.i(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.b3()
if(l){u=$.bw()
g=new Z.bs(g.a|u.a)}if(k){u=$.bv()
g=new Z.bs(g.a|u.a)}if(j){u=$.bx()
g=new Z.bs(g.a|u.a)}if(i){u=$.bu()
g=new Z.bs(g.a|u.a)}return new A.hL(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,m,p,r,h,!0,!1,!1,o,r,n,l,k,j,!1,i,a,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
kH:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kI:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.kH(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.li(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
pr:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kH(b,t,"emission")
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
po:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.kI(b,t,"ambient")
b.a+="\n"},
pp:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.kI(b,t,"diffuse")
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
ps:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.kI(b,t,"invDiffuse")
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
py:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.kI(b,t,"specular")
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
pu:function(a,b){var u,t,s
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
pw:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.kH(b,t,"reflect")
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
px:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.kH(b,t,"refract")
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
pq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.i(u)
s=A.li(t)
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
pv:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.i(u)
s=A.li(t)
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
pz:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.i(u)
s=A.li(t)
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
pt:function(a,b){var u,t
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
u=a.b
if(u.a||u.b||!1)C.a.h(t,"ambientColor")
u=a.c
if(u.a||u.b||!1)C.a.h(t,"diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)C.a.h(t,"invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.m(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
pA:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.a7("")
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
A.pr(a,j)
A.po(a,j)
A.pp(a,j)
A.ps(a,j)
A.py(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.pw(a,j)
A.px(a,j)}A.pu(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.v)(q),++o)A.pq(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.v)(q),++o)A.pv(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.v)(q),++o)A.pz(a,q[o],j)
A.pt(a,j)}q=j.a+="// === Main ===\n"
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
u=a.b
if(u.a||u.b||!1)j.a+="   setAmbientColor();\n"
u=a.c
if(u.a||u.b||!1)j.a+="   setDiffuseColor();\n"
u=a.d
if(u.a||u.b||!1)j.a+="   setInvDiffuseColor();\n"
u=a.e
if(u.a||u.b||!1)j.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.v)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ah(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.v)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ah(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.v)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ah(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)C.a.h(n,"emissionColor()")
u=a.r
if(u.a||u.b||!1)C.a.h(n,"reflect(refl)")
u=a.x
if(u.a||u.b||!1)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.m(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
pB:function(a,b){var u,t,s
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
pD:function(a,b){var u
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
pC:function(a,b){var u
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
pF:function(a,b){var u,t
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
pG:function(a,b){var u,t
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
pE:function(a,b){var u
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
pH:function(a,b){var u
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
li:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.ah(a,1)},
lG:function(a,b,c,d,e){var u=new A.j9(a,c,e)
u.f=d
u.sii(P.om(d,0,P.l))
return u},
dB:function dB(a,b,c){this.a=a
this.b=b
this.c=c},
fE:function fE(a){this.a=a},
al:function al(a,b,c){this.a=a
this.b=b
this.c=c},
dZ:function dZ(a,b){var _=this
_.jC=_.dY=_.dX=_.dW=_.aJ=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jK=_.jJ=_.jI=_.cr=_.cq=_.cp=_.co=_.cn=_.cm=_.jH=_.e9=_.e8=_.jG=_.e7=_.e6=_.e5=_.jF=_.e4=_.e3=_.e2=_.jE=_.e1=_.e0=_.jD=_.e_=_.dZ=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aQ:function aQ(a,b){this.a=a
this.b=b},
aU:function aU(a,b){this.a=a
this.b=b},
aY:function aY(a,b){this.a=a
this.b=b},
hL:function hL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aJ=b3
_.dW=b4},
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
cX:function cX(){},
ef:function ef(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eq:function eq(){},
je:function je(a){this.a=a},
aL:function aL(a,b,c){this.a=a
this.c=b
this.d=c},
jb:function jb(a,b,c){this.a=a
this.c=b
this.d=c},
jc:function jc(a,b,c){this.a=a
this.c=b
this.d=c},
jd:function jd(a,b,c){this.a=a
this.c=b
this.d=c},
j9:function j9(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
aa:function aa(a,b,c){this.a=a
this.c=b
this.d=c},
ja:function ja(a,b,c){this.a=a
this.c=b
this.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
d6:function d6(a,b,c){this.a=a
this.c=b
this.d=c},
jf:function jf(a,b,c){this.a=a
this.c=b
this.d=c},
d7:function d7(a,b,c){this.a=a
this.c=b
this.d=c},
ay:function ay(a,b,c){this.a=a
this.c=b
this.d=c},
an:function an(a,b,c){this.a=a
this.c=b
this.d=c},
bR:function bR(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kN:function(a,b,c,d){var u=F.iw()
F.dp(u,b,c,d,a,1,0,0,1)
F.dp(u,b,c,d,a,0,1,0,3)
F.dp(u,b,c,d,a,0,0,1,2)
F.dp(u,b,c,d,a,-1,0,0,0)
F.dp(u,b,c,d,a,0,-1,0,0)
F.dp(u,b,c,d,a,0,0,-1,3)
u.at()
return u},
kC:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dp:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.K(h,g+a1,f+a2)
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
j.d=i}m=F.kC(i)
l=F.kC(j.b)
k=F.m3(d,a0,new F.kB(j,F.kC(j.c),F.kC(j.d),l,m,c),b)
if(k!=null)a.bh(k)},
nk:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.iw()
t=b?-1:1
s=-6.283185307179586/e
r=H.c([],[F.ar])
q=u.a
p=new V.K(0,0,t)
p=p.q(0,Math.sqrt(p.B(p)))
C.a.h(r,q.io(new V.aI(a,-1,-1,-1),new V.ae(1,1,1,1),new V.Z(0,0,c),new V.K(0,0,t),new V.a6(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.D(k)
j=new V.K(m,l,t).q(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.ey(new V.aI(a,-1,-1,-1),null,new V.ae(i,g,h,1),new V.Z(m*k,l*k,c),new V.K(0,0,t),new V.a6(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.dJ(r)
return u},
nh:function(a,b,c){return F.ni(!0,a,1,new F.kO(1,c),b)},
ni:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.m3(c,e,new F.kQ(d),null)
if(u==null)return
u.at()
u.cb()
if(b)u.bh(F.nk(3,!1,1,new F.kR(d),e))
u.bh(F.nk(1,!0,-1,new F.kS(d),e))
return u},
nx:function(a,b,c){var u,t={}
t.a=b
if(b==null)t.a=new F.lg()
u=F.kN(a,null,new F.lh(t,1),c)
u.cb()
return u},
nz:function(){return F.nj(15,30,0.5,1,new F.lj())},
q7:function(){return F.nj(12,120,0.3,1,new F.l_(3,2))},
nj:function(a,b,c,d,e){var u=F.m3(a,b,new F.kP(e,d,b,c),null)
if(u==null)return
u.at()
u.cb()
return u},
m3:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.iw()
t=H.c([],[F.ar])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ey(g,g,new V.ae(p,0,0,1),g,g,new V.a6(r,1),g,g,0)
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
o=F.ey(g,g,new V.ae(j,i,h,1),g,g,new V.a6(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cj(d))}}u.d.im(a+1,b+1,t)
return u},
cC:function(a,b,c){var u=new F.a9(),t=a.a
if(t==null)H.B(P.C("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.B(P.C("May not create a face with vertices attached to different shapes."))
u.c9(a)
u.ca(b)
u.hY(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a4()
return u},
oi:function(a,b){var u=new F.bp(),t=a.a
if(t==null)H.B(P.C("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.B(P.C("May not create a line with vertices attached to different shapes."))
u.c9(a)
u.ca(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a4()
return u},
iw:function(){var u=new F.ed(),t=new F.jw(u)
t.b=!1
t.sij(H.c([],[F.ar]))
u.a=t
t=new F.iz(u)
t.sc1(H.c([],[F.bN]))
u.b=t
t=new F.iy(u)
t.sfG(H.c([],[F.bp]))
u.c=t
t=new F.ix(u)
t.sfA(H.c([],[F.a9]))
u.d=t
u.e=null
return u},
ey:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ar(),r=new F.jE()
r.sc1(H.c([],[F.bN]))
s.b=r
r=new F.jA()
u=[F.bp]
r.sfH(H.c([],u))
r.sfI(H.c([],u))
s.c=r
r=new F.jx()
u=[F.a9]
r.sfB(H.c([],u))
r.sfC(H.c([],u))
r.sfD(H.c([],u))
s.d=r
h=$.nN()
s.e=0
r=$.b3()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bw().a)!==0?e:t
s.x=(u&$.bv().a)!==0?b:t
s.y=(u&$.bx().a)!==0?f:t
s.z=(u&$.bV().a)!==0?g:t
s.Q=(u&$.nO().a)!==0?c:t
s.ch=(u&$.cs().a)!==0?i:0
s.cx=(u&$.bu().a)!==0?a:t
return s},
kB:function kB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kO:function kO(a,b){this.a=a
this.b=b},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a){this.a=a},
lg:function lg(){},
lh:function lh(a,b){this.a=a
this.b=b},
lj:function lj(){},
l_:function l_(a,b){this.a=a
this.b=b},
kP:function kP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hb:function hb(){},
iE:function iE(){},
bp:function bp(){this.b=this.a=null},
hw:function hw(){},
j8:function j8(){},
bN:function bN(){this.a=null},
ed:function ed(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ix:function ix(a){this.a=a
this.b=null},
iy:function iy(a){this.a=a
this.b=null},
iz:function iz(a){this.a=a
this.b=null},
ar:function ar(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jG:function jG(a){this.a=a},
jF:function jF(a){this.a=a},
jw:function jw(a){this.a=a
this.c=this.b=null},
jx:function jx(){this.d=this.c=this.b=null},
jy:function jy(a,b){this.a=a
this.b=b},
jz:function jz(a,b){this.a=a
this.b=b},
jA:function jA(){this.c=this.b=null},
jC:function jC(){},
jB:function jB(){},
jD:function jD(){},
i8:function i8(){},
jE:function jE(){this.b=null}},T={
mJ:function(a){var u=new T.iV()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
d3:function d3(){},
el:function el(){},
iV:function iV(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
em:function em(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iW:function iW(a){var _=this
_.a=a
_.e=_.d=_.c=null},
iX:function iX(a,b,c,d,e,f,g){var _=this
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
H.lz.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gI:function(a){return H.cT(a)},
i:function(a){return"Instance of '"+H.i(H.cU(a))+"'"}}
J.hr.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iR:1}
J.dR.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.dS.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.id.prototype={}
J.cd.prototype={}
J.bL.prototype={
i:function(a){var u=a[$.nB()]
if(u==null)return this.eU(a)
return"JavaScript function for "+H.i(J.at(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibG:1}
J.b8.prototype={
h:function(a,b){H.E(b,H.r(a,0))
if(!!a.fixed$length)H.B(P.J("add"))
a.push(b)},
er:function(a,b){if(!!a.fixed$length)H.B(P.J("removeAt"))
if(b<0||b>=a.length)throw H.d(P.e9(b,null))
return a.splice(b,1)[0]},
L:function(a,b){var u
if(!!a.fixed$length)H.B(P.J("remove"))
for(u=0;u<a.length;++u)if(J.W(a[u],b)){a.splice(u,1)
return!0}return!1},
ag:function(a,b){var u,t
H.m(b,"$ij",[H.r(a,0)],"$aj")
if(!!a.fixed$length)H.B(P.J("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.v)(b),++t)a.push(b[t])},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.d(P.bm(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.i(a[u]))
return t.join(b)},
iZ:function(a){return this.m(a,"")},
iS:function(a,b,c,d){var u,t,s
H.E(b,d)
H.n(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.d(P.bm(a))}return t},
iR:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.R,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.F(b.$1(s)))return s
if(a.length!==u)throw H.d(P.bm(a))}throw H.d(H.hq())},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
eR:function(a,b,c){if(b<0||b>a.length)throw H.d(P.aj(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.aj(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.r(a,0)])
return H.c(a.slice(b,c),[H.r(a,0)])},
giQ:function(a){if(a.length>0)return a[0]
throw H.d(H.hq())},
gaD:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.hq())},
dN:function(a,b){var u,t
H.n(b,{func:1,ret:P.R,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.F(b.$1(a[t])))return!0
if(a.length!==u)throw H.d(P.bm(a))}return!1},
bI:function(a,b){var u=H.r(a,0)
H.n(b,{func:1,ret:P.l,args:[u,u]})
if(!!a.immutable$list)H.B(P.J("sort"))
H.eg(a,0,a.length-1,b,u)},
V:function(a,b){var u
for(u=0;u<a.length;++u)if(J.W(a[u],b))return!0
return!1},
i:function(a){return P.lw(a,"[","]")},
gU:function(a){return new J.au(a,a.length,[H.r(a,0)])},
gI:function(a){return H.cT(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.B(P.J("set length"))
if(b<0)throw H.d(P.aj(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.d(H.cl(a,b))
return a[b]},
k:function(a,b,c){H.E(c,H.r(a,0))
if(!!a.immutable$list)H.B(P.J("indexed set"))
if(b>=a.length||b<0)throw H.d(H.cl(a,b))
a[b]=c},
$ij:1,
$ib:1}
J.ly.prototype={}
J.au.prototype={
gJ:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.v(s))
u=t.c
if(u>=r){t.sdg(null)
return!1}t.sdg(s[u]);++t.c
return!0},
sdg:function(a){this.d=H.E(a,H.r(this,0))},
$ib7:1}
J.cI.prototype={
iz:function(a,b){var u
H.ns(b)
if(typeof b!=="number")throw H.d(H.b2(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbx(b)
if(this.gbx(a)===u)return 0
if(this.gbx(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbx:function(a){return a===0?1/a<0:a<0},
js:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.J(""+a+".toInt()"))},
cs:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.J(""+a+".floor()"))},
a5:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.J(""+a+".round()"))},
eC:function(a,b){var u
if(b>20)throw H.d(P.aj(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbx(a))return"-"+u
return u},
bl:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.aj(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.X(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.B(P.J("Unexpected toString result: "+u))
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
bm:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eX:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dD(a,b)},
af:function(a,b){return(a|0)===a?a/b|0:this.dD(a,b)},
dD:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.J("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aY:function(a,b){var u
if(a>0)u=this.dC(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
i2:function(a,b){if(b<0)throw H.d(H.b2(b))
return this.dC(a,b)},
dC:function(a,b){return b>31?0:a>>>b},
$it:1,
$iad:1}
J.dQ.prototype={$il:1}
J.dP.prototype={}
J.bK.prototype={
X:function(a,b){if(b<0)throw H.d(H.cl(a,b))
if(b>=a.length)H.B(H.cl(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.d(H.cl(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.d(P.lo(b,null,null))
return a+b},
b1:function(a,b,c,d){var u,t
c=P.bO(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ac:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.aj(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
aa:function(a,b){return this.ac(a,b,0)},
v:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.B(H.b2(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.S()
if(b<0)throw H.d(P.e9(b,null))
if(b>c)throw H.d(P.e9(b,null))
if(c>a.length)throw H.d(P.e9(c,null))
return a.substring(b,c)},
ah:function(a,b){return this.v(a,b,null)},
jv:function(a){return a.toLowerCase()},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ap:function(a,b){var u=b-a.length
if(u<=0)return a
return this.u(" ",u)+a},
bw:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.aj(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eg:function(a,b){return this.bw(a,b,0)},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$imx:1,
$ih:1}
H.u.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.b.X(this.a,b)},
$ad8:function(){return[P.l]},
$ay:function(){return[P.l]},
$aj:function(){return[P.l]},
$ab:function(){return[P.l]}}
H.h5.prototype={}
H.c3.prototype={
gU:function(a){var u=this
return new H.cJ(u,u.gn(u),[H.ao(u,"c3",0)])},
bG:function(a,b){return this.eT(0,H.n(b,{func:1,ret:P.R,args:[H.ao(this,"c3",0)]}))}}
H.cJ.prototype={
gJ:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.ds(s),q=r.gn(s)
if(t.b!==q)throw H.d(P.bm(s))
u=t.c
if(u>=q){t.sb7(null)
return!1}t.sb7(r.K(s,u));++t.c
return!0},
sb7:function(a){this.d=H.E(a,H.r(this,0))},
$ib7:1}
H.hG.prototype={
gU:function(a){return new H.hH(J.by(this.a),this.b,this.$ti)},
gn:function(a){return J.aF(this.a)},
K:function(a,b){return this.b.$1(J.fA(this.a,b))},
$aj:function(a,b){return[b]}}
H.hH.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.sb7(u.c.$1(t.gJ(t)))
return!0}u.sb7(null)
return!1},
gJ:function(a){return this.a},
sb7:function(a){this.a=H.E(a,H.r(this,1))},
$ab7:function(a,b){return[b]}}
H.hI.prototype={
gn:function(a){return J.aF(this.a)},
K:function(a,b){return this.b.$1(J.fA(this.a,b))},
$ac3:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.da.prototype={
gU:function(a){return new H.jI(J.by(this.a),this.b,this.$ti)}}
H.jI.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(H.F(t.$1(u.gJ(u))))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.c1.prototype={}
H.d8.prototype={
k:function(a,b,c){H.E(c,H.ao(this,"d8",0))
throw H.d(P.J("Cannot modify an unmodifiable list"))}}
H.es.prototype={}
H.fS.prototype={
i:function(a){return P.lC(this)},
k:function(a,b,c){H.E(b,H.r(this,0))
H.E(c,H.r(this,1))
return H.o8()},
$iA:1}
H.fT.prototype={
gn:function(a){return this.a},
bu:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bu(0,b))return
return this.dh(b)},
dh:function(a){return this.b[H.N(a)]},
H:function(a,b){var u,t,s,r,q=this,p=H.r(q,1)
H.n(b,{func:1,ret:-1,args:[H.r(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.E(q.dh(r),p))}}}
H.j5.prototype={
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
H.i9.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.ht.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.ji.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.lk.prototype={
$1:function(a){if(!!J.T(a).$ibF)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:24}
H.f8.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iax:1}
H.cy.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ibG:1,
gjw:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iS.prototype={}
H.iI.prototype={
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
else u=typeof t!=="object"?J.dy(t):H.cT(t)
return(u^H.cT(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.i(H.cU(u))+"'")}}
H.j7.prototype={
i:function(a){return this.a}}
H.fO.prototype={
i:function(a){return this.a}}
H.it.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.jJ.prototype={
i:function(a){return"Assertion failed: "+P.dM(this.a)}}
H.a4.prototype={
gn:function(a){return this.a},
giY:function(a){return this.a===0},
gab:function(a){return new H.hy(this,[H.r(this,0)])},
bu:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.dd(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.dd(t,b)}else return s.iV(b)},
iV:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cv(u.bQ(t,u.cu(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bp(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bp(r,b)
s=t==null?null:t.b
return s}else return q.iW(b)},
iW:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bQ(r,s.cu(a))
t=s.cv(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.E(b,H.r(s,0))
H.E(c,H.r(s,1))
if(typeof b==="string"){u=s.b
s.d3(u==null?s.b=s.c_():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.d3(t==null?s.c=s.c_():t,b,c)}else s.iX(b,c)},
iX:function(a,b){var u,t,s,r,q=this
H.E(a,H.r(q,0))
H.E(b,H.r(q,1))
u=q.d
if(u==null)u=q.d=q.c_()
t=q.cu(a)
s=q.bQ(u,t)
if(s==null)q.c7(u,t,[q.c0(a,b)])
else{r=q.cv(s,a)
if(r>=0)s[r].b=b
else s.push(q.c0(a,b))}},
H:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.r(s,0),H.r(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.d(P.bm(s))
u=u.c}},
d3:function(a,b,c){var u,t=this
H.E(b,H.r(t,0))
H.E(c,H.r(t,1))
u=t.bp(a,b)
if(u==null)t.c7(a,b,t.c0(b,c))
else u.b=c},
fO:function(){this.r=this.r+1&67108863},
c0:function(a,b){var u,t=this,s=new H.hx(H.E(a,H.r(t,0)),H.E(b,H.r(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fO()
return s},
cu:function(a){return J.dy(a)&0x3ffffff},
cv:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.W(a[t].a,b))return t
return-1},
i:function(a){return P.lC(this)},
bp:function(a,b){return a[b]},
bQ:function(a,b){return a[b]},
c7:function(a,b,c){a[b]=c},
ft:function(a,b){delete a[b]},
dd:function(a,b){return this.bp(a,b)!=null},
c_:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c7(t,u,t)
this.ft(t,u)
return t}}
H.hx.prototype={}
H.hy.prototype={
gn:function(a){return this.a.a},
gU:function(a){var u=this.a,t=new H.hz(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hz.prototype={
gJ:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bm(t))
else{t=u.c
if(t==null){u.sd2(null)
return!1}else{u.sd2(t.a)
u.c=u.c.c
return!0}}},
sd2:function(a){this.d=H.E(a,H.r(this,0))},
$ib7:1}
H.kW.prototype={
$1:function(a){return this.a(a)},
$S:24}
H.kX.prototype={
$2:function(a,b){return this.a(a,b)},
$S:42}
H.kY.prototype={
$1:function(a){return this.a(H.N(a))},
$S:44}
H.hs.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imx:1,
$ioD:1}
H.cO.prototype={$icO:1}
H.bM.prototype={$ibM:1,$ioN:1}
H.e1.prototype={
gn:function(a){return a.length},
$iM:1,
$aM:function(){}}
H.cP.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pW(c)
H.bk(b,a,a.length)
a[b]=c},
$ac1:function(){return[P.t]},
$ay:function(){return[P.t]},
$ij:1,
$aj:function(){return[P.t]},
$ib:1,
$ab:function(){return[P.t]}}
H.e2.prototype={
k:function(a,b,c){H.ac(c)
H.bk(b,a,a.length)
a[b]=c},
$ac1:function(){return[P.l]},
$ay:function(){return[P.l]},
$ij:1,
$aj:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]}}
H.i1.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.i2.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.i3.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.i4.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.i5.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.e3.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
$iqD:1}
H.cQ.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
$icQ:1,
$iS:1}
H.df.prototype={}
H.dg.prototype={}
H.dh.prototype={}
H.di.prototype={}
P.jL.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:31}
P.jK.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:35}
P.jM.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jN.prototype={
$0:function(){this.a.$0()},
$S:0}
P.fe.prototype={
fb:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ck(new P.kr(this,b),0),a)
else throw H.d(P.J("`setTimeout()` not found."))},
fc:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ck(new P.kq(this,a,Date.now(),b),0),a)
else throw H.d(P.J("Periodic timer."))},
$ibf:1}
P.kr.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.kq.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.eX(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bj.prototype={
j0:function(a){if((this.c&15)!==6)return!0
return this.b.b.cN(H.n(this.d,{func:1,ret:P.R,args:[P.V]}),a.a,P.R,P.V)},
iU:function(a){var u=this.e,t=P.V,s={futureOr:1,type:H.r(this,1)},r=this.b.b
if(H.fx(u,{func:1,args:[P.V,P.ax]}))return H.lZ(r.jn(u,a.a,a.b,null,t,P.ax),s)
else return H.lZ(r.cN(H.n(u,{func:1,args:[P.V]}),a.a,null,t),s)}}
P.aN.prototype={
eB:function(a,b,c){var u,t,s,r=H.r(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a2
if(u!==C.f){H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pJ(b,u)}t=new P.aN($.a2,[c])
s=b==null?1:3
this.d4(new P.bj(t,s,a,b,[r,c]))
return t},
jr:function(a,b){return this.eB(a,null,b)},
d4:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibj")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaN")
s=u.a
if(s<4){u.d4(a)
return}t.a=s
t.c=u.c}P.kL(null,null,t.b,H.n(new P.jW(t,a),{func:1,ret:-1}))}},
dv:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibj")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaN")
u=q.a
if(u<4){q.dv(a)
return}p.a=u
p.c=q.c}o.a=p.br(a)
P.kL(null,null,p.b,H.n(new P.k_(o,p),{func:1,ret:-1}))}},
c3:function(){var u=H.f(this.c,"$ibj")
this.c=null
return this.br(u)},
br:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d8:function(a){var u,t,s=this,r=H.r(s,0)
H.lZ(a,{futureOr:1,type:r})
u=s.$ti
if(H.lW(a,"$icE",u,"$acE"))if(H.lW(a,"$iaN",u,null))P.mX(a,s)
else P.p_(a,s)
else{t=s.c3()
H.E(a,r)
s.a=4
s.c=a
P.dd(s,t)}},
d9:function(a,b){var u,t=this
H.f(b,"$iax")
u=t.c3()
t.a=8
t.c=new P.ap(a,b)
P.dd(t,u)},
$icE:1}
P.jW.prototype={
$0:function(){P.dd(this.a,this.b)},
$S:0}
P.k_.prototype={
$0:function(){P.dd(this.b,this.a.a)},
$S:0}
P.jX.prototype={
$1:function(a){var u=this.a
u.a=0
u.d8(a)},
$S:31}
P.jY.prototype={
$2:function(a,b){H.f(b,"$iax")
this.a.d9(a,b)},
$1:function(a){return this.$2(a,null)},
$S:57}
P.jZ.prototype={
$0:function(){this.a.d9(this.b,this.c)},
$S:0}
P.k2.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.ex(H.n(s.d,{func:1}),null)}catch(r){u=H.ak(r)
t=H.cp(r)
if(o.d){s=H.f(o.a.a.c,"$iap").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$iap")
else q.b=new P.ap(u,t)
q.a=!0
return}if(!!J.T(n).$icE){if(n instanceof P.aN&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$iap")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jr(new P.k3(p),null)
s.a=!1}},
$S:3}
P.k3.prototype={
$1:function(a){return this.a},
$S:54}
P.k1.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.r(s,0)
q=H.E(n.c,r)
p=H.r(s,1)
n.a.b=s.b.b.cN(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ak(o)
t=H.cp(o)
s=n.a
s.b=new P.ap(u,t)
s.a=!0}},
$S:3}
P.k0.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$iap")
r=m.c
if(H.F(r.j0(u))&&r.e!=null){q=m.b
q.b=r.iU(u)
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
P.eB.prototype={}
P.iL.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aN($.a2,[P.l])
r.a=0
u=H.r(s,0)
t=H.n(new P.iN(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iO(r,q),{func:1,ret:-1})
W.ab(s.a,s.b,t,!1,u)
return q}}
P.iN.prototype={
$1:function(a){H.E(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.O,args:[H.r(this.b,0)]}}}
P.iO.prototype={
$0:function(){this.b.d8(this.a.a)},
$S:0}
P.d_.prototype={}
P.iM.prototype={}
P.bf.prototype={}
P.ap.prototype={
i:function(a){return H.i(this.a)},
$ibF:1}
P.kA.prototype={$iqS:1}
P.kK.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e5():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.i(0)
throw u},
$S:0}
P.k9.prototype={
jo:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.a2){a.$0()
return}P.n7(r,r,this,a,-1)}catch(s){u=H.ak(s)
t=H.cp(s)
P.kJ(r,r,this,u,H.f(t,"$iax"))}},
jp:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.f===$.a2){a.$1(b)
return}P.n8(r,r,this,a,b,-1,c)}catch(s){u=H.ak(s)
t=H.cp(s)
P.kJ(r,r,this,u,H.f(t,"$iax"))}},
iw:function(a,b){return new P.kb(this,H.n(a,{func:1,ret:b}),b)},
cc:function(a){return new P.ka(this,H.n(a,{func:1,ret:-1}))},
dP:function(a,b){return new P.kc(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
ex:function(a,b){H.n(a,{func:1,ret:b})
if($.a2===C.f)return a.$0()
return P.n7(null,null,this,a,b)},
cN:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.a2===C.f)return a.$1(b)
return P.n8(null,null,this,a,b,c,d)},
jn:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.a2===C.f)return a.$2(b,c)
return P.pK(null,null,this,a,b,c,d,e,f)}}
P.kb.prototype={
$0:function(){return this.a.ex(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.ka.prototype={
$0:function(){return this.a.jo(this.b)},
$S:3}
P.kc.prototype={
$1:function(a){var u=this.c
return this.a.jp(this.b,H.E(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k7.prototype={
gU:function(a){var u=this,t=new P.eQ(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
V:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$ice")!=null}else{t=this.fo(b)
return t}},
fo:function(a){var u=this.d
if(u==null)return!1
return this.bO(this.di(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.E(b,H.r(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d5(u==null?s.b=P.lM():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d5(t==null?s.c=P.lM():t,b)}else return s.ff(0,b)},
ff:function(a,b){var u,t,s,r=this
H.E(b,H.r(r,0))
u=r.d
if(u==null)u=r.d=P.lM()
t=r.da(b)
s=u[t]
if(s==null)u[t]=[r.bL(b)]
else{if(r.bO(s,b)>=0)return!1
s.push(r.bL(b))}return!0},
L:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hM(this.c,b)
else return this.hL(0,b)},
hL:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.di(r,b)
t=s.bO(u,b)
if(t<0)return!1
s.dE(u.splice(t,1)[0])
return!0},
d5:function(a,b){H.E(b,H.r(this,0))
if(H.f(a[b],"$ice")!=null)return!1
a[b]=this.bL(b)
return!0},
hM:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$ice")
if(u==null)return!1
this.dE(u)
delete a[b]
return!0},
d7:function(){this.r=1073741823&this.r+1},
bL:function(a){var u,t=this,s=new P.ce(H.E(a,H.r(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.d7()
return s},
dE:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.d7()},
da:function(a){return J.dy(a)&1073741823},
di:function(a,b){return a[this.da(b)]},
bO:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.W(a[t].a,b))return t
return-1}}
P.ce.prototype={}
P.eQ.prototype={
gJ:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bm(t))
else{t=u.c
if(t==null){u.sd6(null)
return!1}else{u.sd6(H.E(t.a,H.r(u,0)))
u.c=u.c.b
return!0}}},
sd6:function(a){this.d=H.E(a,H.r(this,0))},
$ib7:1}
P.hA.prototype={
$2:function(a,b){this.a.k(0,H.E(a,this.b),H.E(b,this.c))},
$S:7}
P.hB.prototype={$ij:1,$ib:1}
P.y.prototype={
gU:function(a){return new H.cJ(a,this.gn(a),[H.co(this,a,"y",0)])},
K:function(a,b){return this.j(a,b)},
ju:function(a,b){var u,t=this,s=H.c([],[H.co(t,a,"y",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
jt:function(a){return this.ju(a,!0)},
iO:function(a,b,c,d){var u
H.E(d,H.co(this,a,"y",0))
P.bO(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.lw(a,"[","]")}}
P.hD.prototype={}
P.hE.prototype={
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
for(u=J.by(s.gab(a));u.A();){t=u.gJ(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aF(this.gab(a))},
i:function(a){return P.lC(a)},
$iA:1}
P.ks.prototype={
k:function(a,b,c){H.E(b,H.r(this,0))
H.E(c,H.r(this,1))
throw H.d(P.J("Cannot modify unmodifiable map"))}}
P.hF.prototype={
j:function(a,b){return J.dx(this.a,b)},
k:function(a,b,c){J.lm(this.a,H.E(b,H.r(this,0)),H.E(c,H.r(this,1)))},
H:function(a,b){J.m7(this.a,H.n(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gn:function(a){return J.aF(this.a)},
i:function(a){return J.at(this.a)},
$iA:1}
P.et.prototype={}
P.ke.prototype={
ag:function(a,b){var u
for(u=J.by(H.m(b,"$ij",this.$ti,"$aj"));u.A();)this.h(0,u.gJ(u))},
i:function(a){return P.lw(this,"{","}")},
K:function(a,b){var u,t,s,r=this
P.mD(b,"index")
for(u=P.p3(r,r.r,H.r(r,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.d(P.a0(b,r,"index",null,t))},
$ij:1,
$imG:1}
P.eR.prototype={}
P.fk.prototype={}
P.fK.prototype={
j2:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bO(a0,a1,b.length)
u=$.nQ()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.E(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kV(C.b.E(b,n))
j=H.kV(C.b.E(b,n+1))
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
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.a7("")
g=r.a+=C.b.v(b,s,t)
r.a=g+H.c7(m)
s=n
continue}}throw H.d(P.a5("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.v(b,s,a1)
f=g.length
if(q>=0)P.mb(b,p,a1,q,o,f)
else{e=C.d.bm(f-1,4)+1
if(e===1)throw H.d(P.a5(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.b1(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.mb(b,p,a1,q,o,d)
else{e=C.d.bm(d,4)
if(e===1)throw H.d(P.a5(c,b,a1))
if(e>1)b=C.b.b1(b,a1,a1,e===2?"==":"=")}return b},
$ac_:function(){return[[P.b,P.l],P.h]}}
P.fL.prototype={
$abC:function(){return[[P.b,P.l],P.h]}}
P.c_.prototype={}
P.bC.prototype={}
P.h7.prototype={
$ac_:function(){return[P.h,[P.b,P.l]]}}
P.hn.prototype={
i:function(a){return this.a}}
P.hm.prototype={
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
default:p=o}if(p!=null){if(q==null)q=new P.a7("")
if(r>b)q.a+=C.b.v(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.o0(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abC:function(){return[P.h,P.h]}}
P.jq.prototype={
giN:function(){return C.N}}
P.js.prototype={
ci:function(a){var u,t,s=P.bO(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.ky(u)
if(t.fE(a,0,s)!==s)t.dG(J.nX(a,s-1),0)
return new Uint8Array(u.subarray(0,H.pk(0,t.b,u.length)))},
$abC:function(){return[P.h,[P.b,P.l]]}}
P.ky.prototype={
dG:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
if(b!==c&&(C.b.X(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.E(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dG(r,C.b.E(a,p)))s=p}else if(r<=2047){q=n.b
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
P.jr.prototype={
ci:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[P.l],"$ab")
u=P.oQ(!1,a,0,null)
if(u!=null)return u
t=P.bO(0,null,J.aF(a))
s=P.na(a,0,t)
if(s>0){r=P.d0(a,0,s)
if(s===t)return r
q=new P.a7(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.a7("")
n=new P.kx(!1,q)
n.c=o
n.iA(a,p,t)
if(n.e>0){H.B(P.a5("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c7(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abC:function(){return[[P.b,P.l],P.h]}}
P.kx.prototype={
iA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.m(a,"$ib",[P.l],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.ds(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.aq()
if((o&192)!==128){n=P.a5(h+C.d.bl(o,16),a,p)
throw H.d(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.e(C.w,n)
if(u<=C.w[n]){n=P.a5("Overlong encoding of 0x"+C.d.bl(u,16),a,p-s-1)
throw H.d(n)}if(u>1114111){n=P.a5("Character outside valid Unicode range: 0x"+C.d.bl(u,16),a,p-s-1)
throw H.d(n)}if(!i.c||u!==65279)q.a+=H.c7(u)
i.c=!1}for(n=p<c;n;){m=P.na(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.d0(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.S()
if(o<0){j=P.a5("Negative UTF-8 code unit: -0x"+C.d.bl(-o,16),a,k-1)
throw H.d(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a5(h+C.d.bl(o,16),a,k-1)
throw H.d(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.R.prototype={}
P.aA.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.aA&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.d.aY(u,30))&1073741823},
i:function(a){var u=this,t=P.o9(H.oz(u)),s=P.dI(H.ox(u)),r=P.dI(H.ot(u)),q=P.dI(H.ou(u)),p=P.dI(H.ow(u)),o=P.dI(H.oy(u)),n=P.oa(H.ov(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.t.prototype={}
P.bE.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.bE&&this.a===b.a},
gI:function(a){return C.d.gI(this.a)},
i:function(a){var u,t,s,r=new P.h4(),q=this.a
if(q<0)return"-"+new P.bE(0-q).i(0)
u=r.$1(C.d.af(q,6e7)%60)
t=r.$1(C.d.af(q,1e6)%60)
s=new P.h3().$1(q%1e6)
return""+C.d.af(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.h3.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:17}
P.h4.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:17}
P.bF.prototype={}
P.fD.prototype={
i:function(a){return"Assertion failed"}}
P.e5.prototype={
i:function(a){return"Throw of null."}}
P.aP.prototype={
gbN:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbM:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbN()+o+u
if(!q.a)return t
s=q.gbM()
r=P.dM(q.b)
return t+s+": "+r}}
P.c8.prototype={
gbN:function(){return"RangeError"},
gbM:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.hp.prototype={
gbN:function(){return"RangeError"},
gbM:function(){var u,t=H.ac(this.b)
if(typeof t!=="number")return t.S()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gn:function(a){return this.f}}
P.jj.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.jg.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cZ.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fR.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dM(u)+"."}}
P.ic.prototype={
i:function(a){return"Out of Memory"},
$ibF:1}
P.ei.prototype={
i:function(a){return"Stack Overflow"},
$ibF:1}
P.fY.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eJ.prototype={
i:function(a){return"Exception: "+this.a}}
P.hh.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.v(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.E(f,q)
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
k=""}j=C.b.v(f,m,n)
return h+l+j+k+"\n"+C.b.u(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.i(g)+")"):h}}
P.bG.prototype={}
P.l.prototype={}
P.j.prototype={
bG:function(a,b){var u=H.ao(this,"j",0)
return new H.da(this,H.n(b,{func:1,ret:P.R,args:[u]}),[u])},
gn:function(a){var u,t=this.gU(this)
for(u=0;t.A();)++u
return u},
gaQ:function(a){var u,t=this.gU(this)
if(!t.A())throw H.d(H.hq())
u=t.gJ(t)
if(t.A())throw H.d(H.of())
return u},
K:function(a,b){var u,t,s
P.mD(b,"index")
for(u=this.gU(this),t=0;u.A();){s=u.gJ(u)
if(b===t)return s;++t}throw H.d(P.a0(b,this,"index",null,t))},
i:function(a){return P.oe(this,"(",")")}}
P.b7.prototype={}
P.b.prototype={$ij:1}
P.A.prototype={}
P.O.prototype={
gI:function(a){return P.V.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.ad.prototype={}
P.V.prototype={constructor:P.V,$iV:1,
t:function(a,b){return this===b},
gI:function(a){return H.cT(this)},
i:function(a){return"Instance of '"+H.i(H.cU(this))+"'"},
toString:function(){return this.i(this)}}
P.ax.prototype={}
P.h.prototype={$imx:1}
P.a7.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iqr:1}
P.jo.prototype={
$2:function(a,b){var u,t,s,r=P.h
H.m(a,"$iA",[r,r],"$aA")
H.N(b)
u=J.dt(b).eg(b,"=")
if(u===-1){if(b!=="")J.lm(a,P.lQ(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.v(b,0,u)
s=C.b.ah(b,u+1)
r=this.a
J.lm(a,P.lQ(t,0,t.length,r,!0),P.lQ(s,0,s.length,r,!0))}return a},
$S:50}
P.jl.prototype={
$2:function(a,b){throw H.d(P.a5("Illegal IPv4 address, "+a,this.a,b))},
$S:48}
P.jm.prototype={
$2:function(a,b){throw H.d(P.a5("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jn.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fz(C.b.v(this.b,a,b),null,16)
if(typeof u!=="number")return u.S()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:46}
P.cf.prototype={
geI:function(){return this.b},
gct:function(a){var u=this.c
if(u==null)return""
if(C.b.aa(u,"["))return C.b.v(u,1,u.length-1)
return u},
gbA:function(a){var u=this.d
if(u==null)return P.n0(this.a)
return u},
gcI:function(a){var u=this.f
return u==null?"":u},
geb:function(){var u=this.r
return u==null?"":u},
eu:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.m(b,"$iA",[P.h,null],"$aA")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.aa(p,"/"))p="/"+p
n=P.lO(null,0,0,b)
return new P.cf(u,s,q,r,p,n,m.r)},
gcJ:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.h
s.shK(new P.et(P.mR(u==null?"":u),[t,t]))}return s.Q},
gec:function(){return this.c!=null},
gef:function(){return this.f!=null},
ged:function(){return this.r!=null},
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
if(!!J.T(b).$ilH)if(s.a==b.gbH())if(s.c!=null===b.gec())if(s.b==b.geI())if(s.gct(s)==b.gct(b))if(s.gbA(s)==b.gbA(b))if(s.e===b.gep(b)){u=s.f
t=u==null
if(!t===b.gef()){if(t)u=""
if(u===b.gcI(b)){u=s.r
t=u==null
if(!t===b.ged()){if(t)u=""
u=u===b.geb()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.b.gI(this.i(0)):u},
shK:function(a){var u=P.h
this.Q=H.m(a,"$iA",[u,u],"$aA")},
$ilH:1,
gbH:function(){return this.a},
gep:function(a){return this.e}}
P.kt.prototype={
$1:function(a){throw H.d(P.a5("Invalid port",this.a,this.b+1))},
$S:45}
P.ku.prototype={
$1:function(a){return P.fl(C.X,a,C.h,!1)},
$S:20}
P.kw.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.fl(C.i,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.fl(C.i,b,C.h,!0))}},
$S:21}
P.kv.prototype={
$2:function(a,b){var u,t
H.N(a)
if(b==null||typeof b==="string")this.a.$2(a,H.N(b))
else for(u=J.by(H.nq(b,"$ij")),t=this.a;u.A();)t.$2(a,H.N(u.gJ(u)))},
$S:43}
P.jk.prototype={
geH:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.e(o,0)
u=q.a
o=o[0]+1
t=C.b.bw(u,"?",o)
s=u.length
if(t>=0){r=P.dn(u,t+1,s,C.m,!1)
s=t}else r=p
return q.c=new P.jR("data",p,p,p,P.dn(u,o,s,C.A,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.e(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kE.prototype={
$1:function(a){return new Uint8Array(96)},
$S:41}
P.kD.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.nY(u,0,96,b)
return u},
$S:58}
P.kF.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.E(b,s)^96
if(r>=t)return H.e(a,r)
a[r]=c}}}
P.kG.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.E(b,0),t=C.b.E(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.e(a,r)
a[r]=c}}}
P.kh.prototype={
gec:function(){return this.c>0},
gee:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.C()
t=this.e
if(typeof t!=="number")return H.D(t)
t=u+1<t
u=t}else u=!1
return u},
gef:function(){var u=this.f
if(typeof u!=="number")return u.S()
return u<this.r},
ged:function(){return this.r<this.a.length},
gdk:function(){return this.b===4&&C.b.aa(this.a,"http")},
gdl:function(){return this.b===5&&C.b.aa(this.a,"https")},
gbH:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdk())q=t.x="http"
else if(t.gdl()){t.x="https"
q="https"}else if(q===4&&C.b.aa(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.aa(t.a,r)){t.x=r
q=r}else{q=C.b.v(t.a,0,q)
t.x=q}return q},
geI:function(){var u=this.c,t=this.b+3
return u>t?C.b.v(this.a,t,u-1):""},
gct:function(a){var u=this.c
return u>0?C.b.v(this.a,u,this.d):""},
gbA:function(a){var u,t=this
if(t.gee()){u=t.d
if(typeof u!=="number")return u.C()
return P.fz(C.b.v(t.a,u+1,t.e),null,null)}if(t.gdk())return 80
if(t.gdl())return 443
return 0},
gep:function(a){return C.b.v(this.a,this.e,this.f)},
gcI:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.S()
return u<t?C.b.v(this.a,u+1,t):""},
geb:function(){var u=this.r,t=this.a
return u<t.length?C.b.ah(t,u+1):""},
gcJ:function(){var u=this,t=u.f
if(typeof t!=="number")return t.S()
if(t>=u.r)return C.Y
t=P.h
return new P.et(P.mR(u.gcI(u)),[t,t])},
eu:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.m(b,"$iA",[P.h,null],"$aA")
u=k.gbH()
t=u==="file"
s=k.c
r=s>0?C.b.v(k.a,k.b+3,s):""
q=k.gee()?k.gbA(k):j
s=k.c
if(s>0)p=C.b.v(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.v(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.aa(o,"/"))o="/"+o
m=P.lO(j,0,0,b)
n=k.r
l=n<s.length?C.b.ah(s,n+1):j
return new P.cf(u,r,p,q,o,m,l)},
gI:function(a){var u=this.y
return u==null?this.y=C.b.gI(this.a):u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.T(b).$ilH&&this.a===b.i(0)},
i:function(a){return this.a},
$ilH:1}
P.jR.prototype={}
W.x.prototype={}
W.fB.prototype={
gn:function(a){return a.length}}
W.dz.prototype={
i:function(a){return String(a)},
$idz:1}
W.fC.prototype={
i:function(a){return String(a)}}
W.ct.prototype={$ict:1}
W.bX.prototype={$ibX:1}
W.bz.prototype={$ibz:1}
W.bZ.prototype={
cS:function(a,b,c){if(c!=null)return a.getContext(b,P.pS(c))
return a.getContext(b)},
eL:function(a,b){return this.cS(a,b,null)},
$ibZ:1}
W.cx.prototype={$icx:1}
W.bA.prototype={
gn:function(a){return a.length}}
W.cz.prototype={$icz:1}
W.fU.prototype={
gn:function(a){return a.length}}
W.X.prototype={$iX:1}
W.cA.prototype={
gn:function(a){return a.length}}
W.fV.prototype={}
W.b5.prototype={}
W.b6.prototype={}
W.fW.prototype={
gn:function(a){return a.length}}
W.fX.prototype={
gn:function(a){return a.length}}
W.h_.prototype={
gn:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.h0.prototype={
i:function(a){return String(a)}}
W.dJ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.m(c,"$iam",[P.ad],"$aam")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[[P.am,P.ad]]},
$ay:function(){return[[P.am,P.ad]]},
$ij:1,
$aj:function(){return[[P.am,P.ad]]},
$ib:1,
$ab:function(){return[[P.am,P.ad]]},
$aH:function(){return[[P.am,P.ad]]}}
W.dK.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gaz(a))+" x "+H.i(this.gau(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iam)return!1
return a.left===u.gby(b)&&a.top===u.gbD(b)&&this.gaz(a)===u.gaz(b)&&this.gau(a)===u.gau(b)},
gI:function(a){return W.mZ(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(this.gaz(a)),C.e.gI(this.gau(a)))},
gdQ:function(a){return a.bottom},
gau:function(a){return a.height},
gby:function(a){return a.left},
gcM:function(a){return a.right},
gbD:function(a){return a.top},
gaz:function(a){return a.width},
$iam:1,
$aam:function(){return[P.ad]}}
W.h1.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.N(c)
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[P.h]},
$ay:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aH:function(){return[P.h]}}
W.h2.prototype={
gn:function(a){return a.length}}
W.jP.prototype={
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
gU:function(a){var u=this.jt(this)
return new J.au(u,u.length,[H.r(u,0)])},
$ay:function(){return[W.U]},
$aj:function(){return[W.U]},
$ab:function(){return[W.U]}}
W.U.prototype={
giv:function(a){return new W.jS(a)},
gcg:function(a){return new W.jP(a,a.children)},
gdS:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.S()
if(s<0)s=-s*0
if(typeof r!=="number")return r.S()
if(r<0)r=-r*0
return new P.am(u,t,s,r,[P.ad])},
i:function(a){return a.localName},
an:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.mh
if(u==null){u=H.c([],[W.aD])
t=new W.e4(u)
C.a.h(u,W.mY(null))
C.a.h(u,W.n_())
$.mh=t
d=t}else d=u
u=$.mg
if(u==null){u=new W.fm(d)
$.mg=u
c=u}else{u.a=d
c=u}}if($.bn==null){u=document
t=u.implementation.createHTMLDocument("")
$.bn=t
$.lu=t.createRange()
t=$.bn.createElement("base")
H.f(t,"$ict")
t.href=u.baseURI
$.bn.head.appendChild(t)}u=$.bn
if(u.body==null){t=u.createElement("body")
u.body=H.f(t,"$ibz")}u=$.bn
if(!!this.$ibz)s=u.body
else{s=u.createElement(a.tagName)
$.bn.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.V(C.V,a.tagName)){$.lu.selectNodeContents(s)
r=$.lu.createContextualFragment(b)}else{s.innerHTML=b
r=$.bn.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bn.body
if(s==null?u!=null:s!==u)J.m9(s)
c.cT(r)
document.adoptNode(r)
return r},
iD:function(a,b,c){return this.an(a,b,c,null)},
eN:function(a,b){a.textContent=null
a.appendChild(this.an(a,b,null,null))},
$iU:1,
gey:function(a){return a.tagName}}
W.h6.prototype={
$1:function(a){return!!J.T(H.f(a,"$iG")).$iU},
$S:25}
W.o.prototype={$io:1}
W.k.prototype={
il:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.fg(a,b,c,!1)},
fg:function(a,b,c,d){return a.addEventListener(b,H.ck(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ik:1}
W.aH.prototype={$iaH:1}
W.cD.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaH")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aH]},
$ay:function(){return[W.aH]},
$ij:1,
$aj:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$icD:1,
$aH:function(){return[W.aH]}}
W.hc.prototype={
gn:function(a){return a.length}}
W.hg.prototype={
gn:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.hl.prototype={
gn:function(a){return a.length}}
W.c2.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
$ay:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ic2:1,
$aH:function(){return[W.G]}}
W.bo.prototype={$ibo:1,
gdT:function(a){return a.data}}
W.cG.prototype={$icG:1}
W.cH.prototype={$icH:1}
W.b9.prototype={$ib9:1}
W.dW.prototype={
i:function(a){return String(a)},
$idW:1}
W.hV.prototype={
gn:function(a){return a.length}}
W.cM.prototype={$icM:1}
W.hW.prototype={
j:function(a,b){return P.bt(a.get(H.N(b)))},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bt(t.value[1]))}},
gab:function(a){var u=H.c([],[P.h])
this.H(a,new W.hX(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.d(P.J("Not supported"))},
$aag:function(){return[P.h,null]},
$iA:1,
$aA:function(){return[P.h,null]}}
W.hX.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hY.prototype={
j:function(a,b){return P.bt(a.get(H.N(b)))},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bt(t.value[1]))}},
gab:function(a){var u=H.c([],[P.h])
this.H(a,new W.hZ(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.d(P.J("Not supported"))},
$aag:function(){return[P.h,null]},
$iA:1,
$aA:function(){return[P.h,null]}}
W.hZ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aS.prototype={$iaS:1}
W.i_.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaS")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aS]},
$ay:function(){return[W.aS]},
$ij:1,
$aj:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aH:function(){return[W.aS]}}
W.ah.prototype={$iah:1}
W.as.prototype={
gaQ:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.d(P.mH("No elements"))
if(t>1)throw H.d(P.mH("More than one element"))
return u.firstChild},
ag:function(a,b){var u,t,s,r
H.m(b,"$ij",[W.G],"$aj")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
k:function(a,b,c){var u,t
H.f(c,"$iG")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
u.replaceChild(c,t[b])},
gU:function(a){var u=this.a.childNodes
return new W.dN(u,u.length,[H.co(C.Z,u,"H",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$ay:function(){return[W.G]},
$aj:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
ji:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
jl:function(a,b){var u,t
try{u=a.parentNode
J.nV(u,b,a)}catch(t){H.ak(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eS(a):u},
iq:function(a,b){return a.appendChild(H.f(b,"$iG"))},
hP:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cR.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
$ay:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.aT.prototype={$iaT:1,
gn:function(a){return a.length}}
W.ig.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaT")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aT]},
$ay:function(){return[W.aT]},
$ij:1,
$aj:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aH:function(){return[W.aT]}}
W.ir.prototype={
j:function(a,b){return P.bt(a.get(H.N(b)))},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bt(t.value[1]))}},
gab:function(a){var u=H.c([],[P.h])
this.H(a,new W.is(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.d(P.J("Not supported"))},
$aag:function(){return[P.h,null]},
$iA:1,
$aA:function(){return[P.h,null]}}
W.is.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.iu.prototype={
gn:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.iF.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaV")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aV]},
$ay:function(){return[W.aV]},
$ij:1,
$aj:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aH:function(){return[W.aV]}}
W.aW.prototype={$iaW:1}
W.iG.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaW")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aW]},
$ay:function(){return[W.aW]},
$ij:1,
$aj:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aH:function(){return[W.aW]}}
W.aX.prototype={$iaX:1,
gn:function(a){return a.length}}
W.iJ.prototype={
j:function(a,b){return a.getItem(H.N(b))},
k:function(a,b,c){a.setItem(b,c)},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gab:function(a){var u=H.c([],[P.h])
this.H(a,new W.iK(u))
return u},
gn:function(a){return a.length},
$aag:function(){return[P.h,P.h]},
$iA:1,
$aA:function(){return[P.h,P.h]}}
W.iK.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:21}
W.aJ.prototype={$iaJ:1}
W.be.prototype={$ibe:1}
W.ej.prototype={
an:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bJ(a,b,c,d)
u=W.ob("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.as(t).ag(0,new W.as(u))
return t}}
W.iQ.prototype={
an:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bJ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.an(u.createElement("table"),b,c,d)
u.toString
u=new W.as(u)
s=u.gaQ(u)
s.toString
u=new W.as(s)
r=u.gaQ(u)
t.toString
r.toString
new W.as(t).ag(0,new W.as(r))
return t}}
W.iR.prototype={
an:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bJ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.an(u.createElement("table"),b,c,d)
u.toString
u=new W.as(u)
s=u.gaQ(u)
t.toString
s.toString
new W.as(t).ag(0,new W.as(s))
return t}}
W.d2.prototype={$id2:1}
W.aZ.prototype={$iaZ:1}
W.aK.prototype={$iaK:1}
W.iT.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaK")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aK]},
$ay:function(){return[W.aK]},
$ij:1,
$aj:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aH:function(){return[W.aK]}}
W.iU.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaZ")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aZ]},
$ay:function(){return[W.aZ]},
$ij:1,
$aj:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aH:function(){return[W.aZ]}}
W.iZ.prototype={
gn:function(a){return a.length}}
W.b_.prototype={$ib_:1}
W.b0.prototype={$ib0:1}
W.j2.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$ib_")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.b_]},
$ay:function(){return[W.b_]},
$ij:1,
$aj:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aH:function(){return[W.b_]}}
W.j3.prototype={
gn:function(a){return a.length}}
W.bQ.prototype={}
W.jp.prototype={
i:function(a){return String(a)}}
W.jH.prototype={
gn:function(a){return a.length}}
W.bi.prototype={
giG:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.J("deltaY is not supported"))},
giF:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.J("deltaX is not supported"))},
$ibi:1}
W.db.prototype={
hQ:function(a,b){return a.requestAnimationFrame(H.ck(H.n(b,{func:1,ret:-1,args:[P.ad]}),1))},
fw:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.dc.prototype={$idc:1}
W.jQ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iX")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.X]},
$ay:function(){return[W.X]},
$ij:1,
$aj:function(){return[W.X]},
$ib:1,
$ab:function(){return[W.X]},
$aH:function(){return[W.X]}}
W.eE.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iam)return!1
return a.left===u.gby(b)&&a.top===u.gbD(b)&&a.width===u.gaz(b)&&a.height===u.gau(b)},
gI:function(a){return W.mZ(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(a.width),C.e.gI(a.height))},
gau:function(a){return a.height},
gaz:function(a){return a.width}}
W.k4.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaR")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aR]},
$ay:function(){return[W.aR]},
$ij:1,
$aj:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aH:function(){return[W.aR]}}
W.eW.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
$ay:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.ki.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaX")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aX]},
$ay:function(){return[W.aX]},
$ij:1,
$aj:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aH:function(){return[W.aX]}}
W.km.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaJ")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aJ]},
$ay:function(){return[W.aJ]},
$ij:1,
$aj:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$aH:function(){return[W.aJ]}}
W.jO.prototype={
H:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.gab(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gab:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.e(r,t)
s=H.f(r[t],"$idc")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aag:function(){return[P.h,P.h]},
$aA:function(){return[P.h,P.h]}}
W.jS.prototype={
j:function(a,b){return this.a.getAttribute(H.N(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.gab(this).length}}
W.jT.prototype={}
W.lL.prototype={}
W.jU.prototype={}
W.jV.prototype={
$1:function(a){return this.a.$1(H.f(a,"$io"))},
$S:40}
W.bS.prototype={
f2:function(a){var u
if($.de.giY($.de)){for(u=0;u<262;++u)$.de.k(0,C.U[u],W.q0())
for(u=0;u<12;++u)$.de.k(0,C.q[u],W.q1())}},
aZ:function(a){return $.nR().V(0,W.cB(a))},
aC:function(a,b,c){var u=$.de.j(0,H.i(W.cB(a))+"::"+b)
if(u==null)u=$.de.j(0,"*::"+b)
if(u==null)return!1
return H.lV(u.$4(a,b,c,this))},
$iaD:1}
W.H.prototype={
gU:function(a){return new W.dN(a,this.gn(a),[H.co(this,a,"H",0)])}}
W.e4.prototype={
aZ:function(a){return C.a.dN(this.a,new W.i7(a))},
aC:function(a,b,c){return C.a.dN(this.a,new W.i6(a,b,c))},
$iaD:1}
W.i7.prototype={
$1:function(a){return H.f(a,"$iaD").aZ(this.a)},
$S:27}
W.i6.prototype={
$1:function(a){return H.f(a,"$iaD").aC(this.a,this.b,this.c)},
$S:27}
W.f3.prototype={
fa:function(a,b,c,d){var u,t,s
this.a.ag(0,c)
u=b.bG(0,new W.kf())
t=b.bG(0,new W.kg())
this.b.ag(0,u)
s=this.c
s.ag(0,C.x)
s.ag(0,t)},
aZ:function(a){return this.a.V(0,W.cB(a))},
aC:function(a,b,c){var u=this,t=W.cB(a),s=u.c
if(s.V(0,H.i(t)+"::"+b))return u.d.ip(c)
else if(s.V(0,"*::"+b))return u.d.ip(c)
else{s=u.b
if(s.V(0,H.i(t)+"::"+b))return!0
else if(s.V(0,"*::"+b))return!0
else if(s.V(0,H.i(t)+"::*"))return!0
else if(s.V(0,"*::*"))return!0}return!1},
$iaD:1}
W.kf.prototype={
$1:function(a){return!C.a.V(C.q,H.N(a))},
$S:28}
W.kg.prototype={
$1:function(a){return C.a.V(C.q,H.N(a))},
$S:28}
W.ko.prototype={
aC:function(a,b,c){if(this.eW(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.V(0,b)
return!1}}
W.kp.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.N(a))},
$S:20}
W.kn.prototype={
aZ:function(a){var u=J.T(a)
if(!!u.$icW)return!1
u=!!u.$ip
if(u&&W.cB(a)==="foreignObject")return!1
if(u)return!0
return!1},
aC:function(a,b,c){if(b==="is"||C.b.aa(b,"on"))return!1
return this.aZ(a)},
$iaD:1}
W.dN.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdj(J.dx(u.a,t))
u.c=t
return!0}u.sdj(null)
u.c=s
return!1},
gJ:function(a){return this.d},
sdj:function(a){this.d=H.E(a,H.r(this,0))},
$ib7:1}
W.aD.prototype={}
W.kd.prototype={$iqE:1}
W.fm.prototype={
cT:function(a){new W.kz(this).$2(a,null)},
ba:function(a,b){if(b==null)J.m9(a)
else b.removeChild(a)},
hV:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nZ(a)
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
p=H.F(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ak(r)}t="element unprintable"
try{t=J.at(a)}catch(r){H.ak(r)}try{s=W.cB(a)
this.hU(H.f(a,"$iU"),b,p,t,s,H.f(o,"$iA"),H.N(n))}catch(r){if(H.ak(r) instanceof P.aP)throw r
else{this.ba(a,b)
window
q="Removing corrupted element "+H.i(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hU:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.ba(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aZ(a)){o.ba(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.aC(a,"is",g)){o.ba(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gab(f)
t=H.c(u.slice(0),[H.r(u,0)])
for(s=f.gab(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.e(t,s)
r=t[s]
q=o.a
p=J.o1(r)
H.N(r)
if(!q.aC(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.i(e)+" "+r+'="'+H.i(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.T(a).$id2)o.cT(a.content)},
$iqp:1}
W.kz.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hV(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.ba(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ak(s)
r=H.f(u,"$iG")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iG")}},
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
W.dj.prototype={}
W.dk.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f9.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.dl.prototype={}
W.dm.prototype={}
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
P.kj.prototype={
ea:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cQ:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.T(a)
if(!!u.$iaA)return new Date(a.a)
if(!!u.$ioD)throw H.d(P.jh("structured clone of RegExp"))
if(!!u.$iaH)return a
if(!!u.$ibX)return a
if(!!u.$icD)return a
if(!!u.$ibo)return a
if(!!u.$icO||!!u.$ibM||!!u.$icM)return a
if(!!u.$iA){t=q.ea(a)
s=q.b
if(t>=s.length)return H.e(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.H(a,new P.kl(p,q))
return p.a}if(!!u.$ib){t=q.ea(a)
p=q.b
if(t>=p.length)return H.e(p,t)
r=p[t]
if(r!=null)return r
return q.iC(a,t)}throw H.d(P.jh("structured clone of other type"))},
iC:function(a,b){var u,t=J.ds(a),s=t.gn(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cQ(t.j(a,u)))
return r}}
P.kl.prototype={
$2:function(a,b){this.a.a[a]=this.b.cQ(b)},
$S:7}
P.fj.prototype={$ibo:1,
gdT:function(a){return this.a}}
P.kM.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.kk.prototype={}
P.hd.prototype={
gbq:function(){var u=this.b,t=H.ao(u,"y",0),s=W.U
return new H.hG(new H.da(u,H.n(new P.he(),{func:1,ret:P.R,args:[t]}),[t]),H.n(new P.hf(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.f(c,"$iU")
u=this.gbq()
J.o_(u.b.$1(J.fA(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aF(this.gbq().a)},
j:function(a,b){var u=this.gbq()
return u.b.$1(J.fA(u.a,b))},
gU:function(a){var u=P.mo(this.gbq(),!1,W.U)
return new J.au(u,u.length,[H.r(u,0)])},
$ay:function(){return[W.U]},
$aj:function(){return[W.U]},
$ab:function(){return[W.U]}}
P.he.prototype={
$1:function(a){return!!J.T(H.f(a,"$iG")).$iU},
$S:25}
P.hf.prototype={
$1:function(a){return H.q(H.f(a,"$iG"),"$iU")},
$S:38}
P.k8.prototype={
gcM:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.D(t)
return H.E(u+t,H.r(this,0))},
gdQ:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.D(t)
return H.E(u+t,H.r(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
t:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.T(b)
if(!!u.$iam){t=p.a
if(t==u.gby(b)){s=p.b
if(s==u.gbD(b)){r=p.c
if(typeof t!=="number")return t.C()
if(typeof r!=="number")return H.D(r)
q=H.r(p,0)
if(H.E(t+r,q)===u.gcM(b)){t=p.d
if(typeof s!=="number")return s.C()
if(typeof t!=="number")return H.D(t)
u=H.E(s+t,q)===u.gdQ(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t=this,s=t.a,r=J.dy(s),q=t.b,p=J.dy(q),o=t.c
if(typeof s!=="number")return s.C()
if(typeof o!=="number")return H.D(o)
u=H.r(t,0)
o=C.d.gI(H.E(s+o,u))
s=t.d
if(typeof q!=="number")return q.C()
if(typeof s!=="number")return H.D(s)
u=C.d.gI(H.E(q+s,u))
return P.p2(P.k6(P.k6(P.k6(P.k6(0,r),p),o),u))}}
P.am.prototype={
gby:function(a){return this.a},
gbD:function(a){return this.b},
gaz:function(a){return this.c},
gau:function(a){return this.d}}
P.ba.prototype={$iba:1}
P.hv.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$iba")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ay:function(){return[P.ba]},
$ij:1,
$aj:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aH:function(){return[P.ba]}}
P.bd.prototype={$ibd:1}
P.ia.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibd")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ay:function(){return[P.bd]},
$ij:1,
$aj:function(){return[P.bd]},
$ib:1,
$ab:function(){return[P.bd]},
$aH:function(){return[P.bd]}}
P.ii.prototype={
gn:function(a){return a.length}}
P.cW.prototype={$icW:1}
P.iP.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.N(c)
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ay:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aH:function(){return[P.h]}}
P.p.prototype={
gcg:function(a){return new P.hd(a,new W.as(a))},
an:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.aD])
C.a.h(p,W.mY(null))
C.a.h(p,W.n_())
C.a.h(p,new W.kn())
c=new W.fm(new W.e4(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).iD(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.as(s)
q=p.gaQ(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.bg.prototype={$ibg:1}
P.j4.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibg")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ay:function(){return[P.bg]},
$ij:1,
$aj:function(){return[P.bg]},
$ib:1,
$ab:function(){return[P.bg]},
$aH:function(){return[P.bg]}}
P.eO.prototype={}
P.eP.prototype={}
P.eZ.prototype={}
P.f_.prototype={}
P.fa.prototype={}
P.fb.prototype={}
P.fh.prototype={}
P.fi.prototype={}
P.S.prototype={$ij:1,
$aj:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$ioN:1}
P.fF.prototype={
gn:function(a){return a.length}}
P.fG.prototype={
j:function(a,b){return P.bt(a.get(H.N(b)))},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bt(t.value[1]))}},
gab:function(a){var u=H.c([],[P.h])
this.H(a,new P.fH(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.d(P.J("Not supported"))},
$aag:function(){return[P.h,null]},
$iA:1,
$aA:function(){return[P.h,null]}}
P.fH.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.fI.prototype={
gn:function(a){return a.length}}
P.bW.prototype={}
P.ib.prototype={
gn:function(a){return a.length}}
P.eC.prototype={}
P.dC.prototype={$idC:1}
P.dO.prototype={$idO:1}
P.e8.prototype={$ie8:1}
P.ea.prototype={$iea:1}
P.c9.prototype={
ez:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.T(g)
if(!!u.$ibo&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.pT(g))
return}if(!!u.$icG&&h==null&&t&&!0){this.i7(a,b,c,d,e,f,g)
return}throw H.d(P.dA("Incorrect number or type of arguments"))},
jq:function(a,b,c,d,e,f,g){return this.ez(a,b,c,d,e,f,g,null,null,null)},
i7:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a6:function(a,b,c){return a.uniform1f(b,c)},
bF:function(a,b,c){return a.uniform1i(b,c)},
Z:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eE:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eF:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eG:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic9:1}
P.ec.prototype={$iec:1}
P.ek.prototype={$iek:1}
P.er.prototype={$ier:1}
P.iH.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return P.bt(a.item(b))},
k:function(a,b,c){H.f(c,"$iA")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ay:function(){return[[P.A,,,]]},
$ij:1,
$aj:function(){return[[P.A,,,]]},
$ib:1,
$ab:function(){return[[P.A,,,]]},
$aH:function(){return[[P.A,,,]]}}
P.f6.prototype={}
P.f7.prototype={}
O.a3.prototype={
bo:function(a){var u=this
u.sfJ(H.c([],[a]))
u.sdt(null)
u.sdn(null)
u.sdu(null)},
cU:function(a,b,c){var u=this,t=H.ao(u,"a3",0)
H.n(b,{func:1,ret:P.R,args:[[P.j,t]]})
t={func:1,ret:-1,args:[P.l,[P.j,t]]}
H.n(a,t)
H.n(c,t)
u.sdt(b)
u.sdn(a)
u.sdu(c)},
b3:function(a,b){return this.cU(a,null,b)},
ds:function(a){var u
H.m(a,"$ij",[H.ao(this,"a3",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dm:function(a,b){var u
H.m(b,"$ij",[H.ao(this,"a3",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.au(u,u.length,[H.r(u,0)])},
K:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ao(s,"a3",0)
H.E(b,r)
r=[r]
if(H.F(s.ds(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.dm(t,H.c([b],r))}},
ag:function(a,b){var u,t,s=this
H.m(b,"$ij",[H.ao(s,"a3",0)],"$aj")
if(H.F(s.ds(b))){u=s.a
t=u.length
C.a.ag(u,b)
s.dm(t,b)}},
sfJ:function(a){this.a=H.m(a,"$ib",[H.ao(this,"a3",0)],"$ab")},
sdt:function(a){this.b=H.n(a,{func:1,ret:P.R,args:[[P.j,H.ao(this,"a3",0)]]})},
sdn:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.l,[P.j,H.ao(this,"a3",0)]]})},
sdu:function(a){H.n(a,{func:1,ret:-1,args:[P.l,[P.j,H.ao(this,"a3",0)]]})},
$ij:1}
O.cL.prototype={
gn:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.P():u},
aR:function(){var u=this.b
if(u!=null)u.D(null)},
ga8:function(a){var u=this.a
if(u.length>0)return C.a.gaD(u)
else return V.c4()},
bC:function(a){var u=this.a
if(a==null)C.a.h(u,V.c4())
else C.a.h(u,a)
this.aR()},
aM:function(){var u=this.a
if(u.length>0){u.pop()
this.aR()}},
sbS:function(a){this.a=H.m(a,"$ib",[V.av],"$ab")}}
E.fM.prototype={}
E.aq.prototype={
sa9:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().L(0,s.gem())
u=s.c
if(u!=null)u.gp().h(0,s.gem())
t=new D.I("shape",r,s.c,[F.ed])
t.b=!0
s.bz(t)}},
ax:function(a,b){var u
for(u=this.y.a,u=new J.au(u,u.length,[H.r(u,0)]);u.A();)u.d.ax(0,b)},
aj:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.ga8(s))
s.aR()
a.cH(t.f)
s=a.dy
u=(s&&C.a).gaD(s)
if(u!=null&&t.d!=null)u.es(a,t)
for(s=t.y.a,s=new J.au(s,s.length,[H.r(s,0)]);s.A();)s.d.aj(a)
a.cG()
a.dx.aM()},
bz:function(a){var u=this.z
if(u!=null)u.D(a)},
a4:function(){return this.bz(null)},
en:function(a){H.f(a,"$iz")
this.e=null
this.bz(a)},
j8:function(){return this.en(null)},
el:function(a){this.bz(H.f(a,"$iz"))},
j5:function(){return this.el(null)},
j4:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ij",[E.aq],"$aj")
for(u=b.length,t=this.gek(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c0()
o.sam(null)
o.saW(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sam(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a4()},
j7:function(a,b){var u,t
H.m(b,"$ij",[E.aq],"$aj")
for(u=b.gU(b),t=this.gek();u.A();)u.gJ(u).gp().L(0,t)
this.a4()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sf1:function(a,b){this.y=H.m(b,"$ia3",[E.aq],"$aa3")},
$ic5:1}
E.im.prototype={
eZ:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aA(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cL()
t=[V.av]
u.sbS(H.c([],t))
u.b=null
u.gp().h(0,new E.io(s))
s.cy=u
u=new O.cL()
u.sbS(H.c([],t))
u.b=null
u.gp().h(0,new E.ip(s))
s.db=u
u=new O.cL()
u.sbS(H.c([],t))
u.b=null
u.gp().h(0,new E.iq(s))
s.dx=u
s.si6(H.c([],[O.bP]))
u=s.dy;(u&&C.a).h(u,null)
s.si1(new H.a4([P.h,A.cX]))},
gjh:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga8(s)
u=t.db
u=t.z=s.u(0,u.ga8(u))
s=u}return s},
cH:function(a){var u=this.dy,t=a==null?(u&&C.a).gaD(u):a;(u&&C.a).h(u,t)},
cG:function(){var u=this.dy
if(u.length>1)u.pop()},
dM:function(a){var u=a.b
if(u.length===0)throw H.d(P.C("May not cache a shader with no name."))
if(this.fr.bu(0,u))throw H.d(P.C('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)},
si6:function(a){this.dy=H.m(a,"$ib",[O.bP],"$ab")},
si1:function(a){this.fr=H.m(a,"$iA",[P.h,A.cX],"$aA")}}
E.io.prototype={
$1:function(a){var u
H.f(a,"$iz")
u=this.a
u.ch=u.z=null},
$S:9}
E.ip.prototype={
$1:function(a){var u
H.f(a,"$iz")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:9}
E.iq.prototype={
$1:function(a){var u
H.f(a,"$iz")
u=this.a
u.cx=u.ch=null},
$S:9}
E.en.prototype={
d1:function(a){H.f(a,"$iz")
this.ev()},
d0:function(){return this.d1(null)},
giT:function(){var u,t=this,s=Date.now(),r=C.d.af(P.mf(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aA(s,!1)
return u/r},
dz:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.u()
if(typeof r!=="number")return H.D(r)
u=C.e.cs(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.u()
t=C.e.cs(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.mL(C.o,s.gjm())}},
ev:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iY(this),{func:1,ret:-1,args:[P.ad]})
C.E.fw(u)
C.E.hQ(u,W.nd(t,P.ad))}},
jk:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dz()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aA(r,!1)
s.y=P.mf(r-s.r.a).a*0.000001
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
o.aj(p.e)}s=p.z
if(s!=null)s.D(null)}catch(q){u=H.ak(q)
t=H.cp(q)
P.m1("Error: "+H.i(u))
P.m1("Stack: "+H.i(t))
throw H.d(u)}}}
E.iY.prototype={
$1:function(a){var u
H.ns(a)
u=this.a
if(u.ch){u.ch=!1
u.jk()}},
$S:37}
Z.ez.prototype={$iqj:1}
Z.dD.prototype={
a3:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ak(s)
t=P.C('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.d(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.eA.prototype={$iqk:1}
Z.cw.prototype={
aK:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a3:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a3(a)},
aw:function(a){var u,t,s
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
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.at(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfF:function(a){this.b=H.m(a,"$ib",[Z.bH],"$ab")},
$iqs:1}
Z.bH.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.i(H.cU(this.c))+"'")+"]"}}
Z.bs.prototype={
gcV:function(a){var u=this.a,t=(u&$.b3().a)!==0?3:0
if((u&$.bw().a)!==0)t+=3
if((u&$.bv().a)!==0)t+=3
if((u&$.bx().a)!==0)t+=2
if((u&$.bV().a)!==0)t+=3
if((u&$.dv().a)!==0)t+=3
if((u&$.dw().a)!==0)t+=4
if((u&$.cs().a)!==0)++t
return(u&$.bu().a)!==0?t+4:t},
ir:function(a){var u,t=$.b3(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bx()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bV()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bu()
if((s&t.a)!==0)if(u===a)return t
return $.nP()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bs))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.h]),t=this.a
if((t&$.b3().a)!==0)C.a.h(u,"Pos")
if((t&$.bw().a)!==0)C.a.h(u,"Norm")
if((t&$.bv().a)!==0)C.a.h(u,"Binm")
if((t&$.bx().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bV().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dv().a)!==0)C.a.h(u,"Clr3")
if((t&$.dw().a)!==0)C.a.h(u,"Clr4")
if((t&$.cs().a)!==0)C.a.h(u,"Weight")
if((t&$.bu().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fP.prototype={}
D.c0.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.z]}
H.n(b,u)
if(this.a==null)this.sam(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
L:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.z]})
u=s.a
u=u==null?null:C.a.V(u,b)
if(u===!0){u=s.a
t=(u&&C.a).L(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.V(u,b)
if(u===!0){u=s.b
t=(u&&C.a).L(u,b)||t}return t},
D:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.z()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.H(P.mo(u,!0,{func:1,ret:-1,args:[D.z]}),new D.h9(q))
u=r.b
if(u!=null){r.saW(H.c([],[{func:1,ret:-1,args:[D.z]}]))
C.a.H(u,new D.ha(q))}return!0},
cl:function(){return this.D(null)},
av:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.D(u)}}},
sam:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")},
saW:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")}}
D.h9.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:33}
D.ha.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:33}
D.z.prototype={}
D.bI.prototype={}
D.bJ.prototype={}
D.I.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.dE.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dE))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dT.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dT))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.hu.prototype={
jd:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
j9:function(a){this.c=a.b
this.d.L(0,a.a)
return!1},
shJ:function(a){this.d=H.m(a,"$imG",[P.l],"$amG")}}
X.dX.prototype={}
X.hC.prototype={
b8:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.u()
u=b.b
t=q.ch
if(typeof u!=="number")return u.u()
s=new V.a6(o.a+n*m,o.b+u*t)
t=q.a.gb0()
r=new X.bq(a,V.br(),q.x,t,s)
r.b=!0
q.z=new P.aA(p,!1)
q.x=s
return r},
cF:function(a,b){this.r=a.a
return!1},
bj:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eM()
if(typeof u!=="number")return u.aq()
this.r=(u&~t)>>>0
return!1},
bi:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.b8(a,b))
return!0},
je:function(a){var u,t,s,r,q,p,o=this,n=o.e
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
t=new X.cN(new V.Y(s*r,q*p),u,t)
t.b=!0
n.D(t)
return!0},
hf:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dX(c,r.a.gb0(),b)
s.b=!0
t.D(s)
r.y=new P.aA(u,!1)
r.x=V.br()}}
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
u+=H.F(this.b)?"Alt+":""
return u+(H.F(this.c)?"Shift+":"")}}
X.bq.prototype={}
X.i0.prototype={
bP:function(a,b,c){var u=this,t=new P.aA(Date.now(),!1),s=u.a.gb0(),r=new X.bq(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cF:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.D(this.bP(a,b,!0))
return!0},
bj:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eM()
if(typeof t!=="number")return t.aq()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.D(u.bP(a,b,!0))
return!0},
bi:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.bP(a,b,!1))
return!0},
jf:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gb0()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.u()
r=a.b
q=p.ch
if(typeof r!=="number")return r.u()
u=new X.cN(new V.Y(t*s,r*q),u,b)
u.b=!0
o.D(u)
return!0},
gdV:function(){var u=this.b
return u==null?this.b=D.P():u},
gcP:function(){var u=this.c
return u==null?this.c=D.P():u},
gej:function(){var u=this.d
return u==null?this.d=D.P():u}}
X.cN.prototype={}
X.ih.prototype={}
X.ep.prototype={}
X.j1.prototype={
b8:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.a6],"$ab")
u=new P.aA(Date.now(),!1)
t=a.length>0?a[0]:V.br()
s=q.a.gb0()
r=new X.ep(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
jc:function(a){var u
H.m(a,"$ib",[V.a6],"$ab")
u=this.b
if(u==null)return!1
u.D(this.b8(a,!0))
return!0},
ja:function(a){var u
H.m(a,"$ib",[V.a6],"$ab")
u=this.c
if(u==null)return!1
u.D(this.b8(a,!0))
return!0},
jb:function(a){var u
H.m(a,"$ib",[V.a6],"$ab")
u=this.d
if(u==null)return!1
u.D(this.b8(a,!1))
return!0}}
X.eu.prototype={
gb0:function(){var u=this.a,t=C.j.gdS(u).c
t.toString
u=C.j.gdS(u).d
u.toString
return V.mE(0,0,t,u)},
de:function(a){var u=a.keyCode,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.dT(u,new X.aC(t,a.altKey,a.shiftKey))},
aX:function(a){var u=this.b,t=H.F(a.ctrlKey)||H.F(a.metaKey)
u.c=new X.aC(t,a.altKey,a.shiftKey)},
c8:function(a){var u=this.b,t=H.F(a.ctrlKey)||H.F(a.metaKey)
u.c=new X.aC(t,a.altKey,a.shiftKey)},
aH:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.M()
u=t.top
if(typeof r!=="number")return r.M()
return new V.a6(s-q,r-u)},
b9:function(a){return new V.Y(a.movementX,a.movementY)},
c2:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a6])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
q=C.e.a5(r.pageX)
C.e.a5(r.pageY)
p=o.left
C.e.a5(r.pageX)
C.a.h(n,new V.a6(q-p,C.e.a5(r.pageY)-o.top))}return n},
aF:function(a){var u=a.buttons,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.dE(u,new X.aC(t,a.altKey,a.shiftKey))},
bT:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.M()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.M()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
h9:function(a){this.f=!0},
fY:function(a){this.f=!1},
h3:function(a){H.f(a,"$iah")
if(H.F(this.f)&&this.bT(a))a.preventDefault()},
hd:function(a){var u
H.f(a,"$ib9")
if(!H.F(this.f))return
u=this.de(a)
this.b.jd(u)},
hb:function(a){var u
H.f(a,"$ib9")
if(!H.F(this.f))return
u=this.de(a)
this.b.j9(u)},
hh:function(a){var u,t,s,r,q=this
H.f(a,"$iah")
u=q.a
u.focus()
q.f=!0
q.aX(a)
if(H.F(q.x)){t=q.aF(a)
s=q.b9(a)
if(q.d.cF(t,s))a.preventDefault()
return}if(H.F(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aF(a)
r=q.aH(a)
if(q.c.cF(t,r))a.preventDefault()},
hl:function(a){var u,t,s,r=this
H.f(a,"$iah")
r.aX(a)
u=r.aF(a)
if(H.F(r.x)){t=r.b9(a)
if(r.d.bj(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aH(a)
if(r.c.bj(u,s))a.preventDefault()},
h7:function(a){var u,t,s,r=this
H.f(a,"$iah")
if(!r.bT(a)){r.aX(a)
u=r.aF(a)
if(H.F(r.x)){t=r.b9(a)
if(r.d.bj(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aH(a)
if(r.c.bj(u,s))a.preventDefault()}},
hj:function(a){var u,t,s,r=this
H.f(a,"$iah")
r.aX(a)
u=r.aF(a)
if(H.F(r.x)){t=r.b9(a)
if(r.d.bi(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aH(a)
if(r.c.bi(u,s))a.preventDefault()},
h5:function(a){var u,t,s,r=this
H.f(a,"$iah")
if(!r.bT(a)){r.aX(a)
u=r.aF(a)
if(H.F(r.x)){t=r.b9(a)
if(r.d.bi(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aH(a)
if(r.c.bi(u,s))a.preventDefault()}},
hn:function(a){var u,t,s=this
H.f(a,"$ibi")
s.aX(a)
u=new V.Y((a&&C.D).giF(a),C.D.giG(a)).q(0,180)
if(H.F(s.x)){if(s.d.je(u))a.preventDefault()
return}if(H.F(s.r))return
t=s.aH(a)
if(s.c.jf(u,t))a.preventDefault()},
hp:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aF(s.y)
t=s.aH(s.y)
s.d.hf(u,t,r)}},
hF:function(a){var u,t=this
H.f(a,"$ib0")
t.a.focus()
t.f=!0
t.c8(a)
u=t.c2(a)
if(t.e.jc(u))a.preventDefault()},
hB:function(a){var u
H.f(a,"$ib0")
this.c8(a)
u=this.c2(a)
if(this.e.ja(u))a.preventDefault()},
hD:function(a){var u
H.f(a,"$ib0")
this.c8(a)
u=this.c2(a)
if(this.e.jb(u))a.preventDefault()},
sfz:function(a){this.z=H.m(a,"$ib",[[P.d_,P.V]],"$ab")}}
D.bD.prototype={
aE:function(a){var u
H.f(a,"$iz")
u=this.r
if(u!=null)u.D(a)},
f6:function(){return this.aE(null)},
$iaf:1,
$ic5:1}
D.af.prototype={$ic5:1}
D.dU.prototype={
aE:function(a){var u=this.x
if(u!=null)u.D(a)},
dr:function(a){var u
H.f(a,"$iz")
u=this.y
if(u!=null)u.D(a)},
he:function(){return this.dr(null)},
hr:function(a){var u,t,s
H.m(a,"$ij",[D.af],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(s==null||this.f3(s))return!1}return!0},
fS:function(a,b){var u,t,s,r,q,p,o,n=D.af
H.m(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gdq(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=H.f(b[q],"$iaf")
if(p instanceof D.bD)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.c0()
o.sam(null)
o.saW(null)
o.c=null
o.d=0
p.r=o}H.n(t,s)
if(o.a==null)o.sam(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bI([n])
n.b=!0
this.aE(n)},
hv:function(a,b){var u,t,s,r=D.af
H.m(b,"$ij",[r],"$aj")
for(u=b.gU(b),t=this.gdq();u.A();){s=u.gJ(u)
C.a.L(this.e,s)
s.gp().L(0,t)}r=new D.bJ([r])
r.b=!0
this.aE(r)},
f3:function(a){var u=C.a.V(this.e,a)
return u},
sf4:function(a){this.e=H.m(a,"$ib",[D.bD],"$ab")},
shG:function(a){this.f=H.m(a,"$ib",[D.e7],"$ab")},
sf7:function(a){this.r=H.m(a,"$ib",[D.eh],"$ab")},
$aj:function(){return[D.af]},
$aa3:function(){return[D.af]}}
D.e7.prototype={$iaf:1,$ic5:1}
D.eh.prototype={$iaf:1,$ic5:1}
V.a8.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a8))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
V.ae.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ae))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Q(u.a,3,0)+", "+V.Q(u.b,3,0)+", "+V.Q(u.c,3,0)+", "+V.Q(u.d,3,0)+"]"}}
V.h8.prototype={}
V.e0.prototype={
ak:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.t])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e0))return!1
u=b.a
t=$.L().a
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
i:function(a){var u,t,s,r,q=this,p=[P.t],o=V.cm(H.c([q.a,q.d,q.r],p),3,0),n=V.cm(H.c([q.b,q.e,q.x],p),3,0),m=V.cm(H.c([q.c,q.f,q.y],p),3,0)
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
V.av.prototype={
ak:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.t])
return t},
cw:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.L().a)return V.c4()
u=1/b1
t=-n
s=-a0
return V.bc((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
u:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bc(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bE:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.K(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cO:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.Z(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.av))return!1
u=b.a
t=$.L().a
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
i:function(a){return this.P()},
F:function(a){var u,t,s,r,q,p=this,o=[P.t],n=V.cm(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.cm(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.cm(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.cm(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
P:function(){return this.F("")}}
V.a6.prototype={
M:function(a,b){return new V.a6(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}}
V.Z.prototype={
C:function(a,b){return new V.Z(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a,b){return new V.Z(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.Z(this.a*b,this.b*b,this.c*b)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
V.aI.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aI))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Q(u.a,3,0)+", "+V.Q(u.b,3,0)+", "+V.Q(u.c,3,0)+", "+V.Q(u.d,3,0)+"]"}}
V.cV.prototype={
gai:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cV))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Q(u.a,3,0)+", "+V.Q(u.b,3,0)+", "+V.Q(u.c,3,0)+", "+V.Q(u.d,3,0)+"]"}}
V.Y.prototype={
cz:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.D(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.D(t)
return s*r+u*t},
u:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.u()
u=this.b
if(typeof u!=="number")return u.u()
return new V.Y(t*b,u*b)},
q:function(a,b){var u,t
if(Math.abs(b-0)<$.L().a){u=$.mS
return u==null?$.mS=new V.Y(0,0):u}u=this.a
if(typeof u!=="number")return u.q()
t=this.b
if(typeof t!=="number")return t.q()
return new V.Y(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=this.a
s=$.L()
s.toString
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.D(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.D(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}}
V.K.prototype={
cz:function(a){return Math.sqrt(this.B(this))},
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cA:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.K(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aI:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.K(u*t-s*r,s*q-p*t,p*r-u*q)},
C:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.K(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.K(this.a*b,this.b*b,this.c*b)},
q:function(a,b){if(Math.abs(b-0)<$.L().a)return V.d9()
return new V.K(this.a/b,this.b/b,this.c/b)},
ei:function(){var u=$.L().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
U.fQ.prototype={
bK:function(a){var u=V.ll(a,this.c,this.b)
return u},
gp:function(){var u=this.y
return u==null?this.y=D.P():u},
G:function(a){var u=this.y
if(u!=null)u.D(a)},
scR:function(a,b){},
scC:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.L().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bK(u)}s=new D.I("maximumLocation",s,t.b,[P.t])
s.b=!0
t.G(s)}},
scE:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.L().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bK(u)}s=new D.I("minimumLocation",s,t.c,[P.t])
s.b=!0
t.G(s)}},
sa1:function(a,b){var u,t=this
b=t.bK(b)
u=t.d
if(!(Math.abs(u-b)<$.L().a)){t.d=b
u=new D.I("location",u,b,[P.t])
u.b=!0
t.G(u)}},
scD:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.L().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.I("maximumVelocity",r,a,[P.t])
r.b=!0
s.G(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.L().a)){u.f=a
t=new D.I("velocity",t,a,[P.t])
t.b=!0
u.G(t)}},
sck:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.L().a)){this.x=a
u=new D.I("dampening",u,a,[P.t])
u.b=!0
this.G(u)}},
ax:function(a,b){var u,t,s,r=this,q=r.f,p=$.L().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa1(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.L().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sW(u)}}}
U.dG.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.P():u},
aP:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dG))return!1
return J.W(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")}}
U.cF.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.P():u},
G:function(a){var u
H.f(a,"$iz")
u=this.e
if(u!=null)u.D(a)},
ae:function(){return this.G(null)},
f9:function(a,b){var u,t,s,r,q,p,o,n=U.ai
H.m(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gaV(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.gp()
o.toString
H.n(t,s)
if(o.a==null)o.sam(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bI([n])
n.b=!0
this.G(n)},
ht:function(a,b){var u,t,s=U.ai
H.m(b,"$ij",[s],"$aj")
for(u=b.gU(b),t=this.gaV();u.A();)u.gJ(u).gp().L(0,t)
s=new D.bJ([s])
s.b=!0
this.G(s)},
aP:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.S()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.au(r,r.length,[H.r(r,0)]),u=null;r.A();){q=r.d
if(q!=null){t=q.aP(0,b,c)
if(t!=null)u=u==null?t:t.u(0,u)}}s.f=u==null?V.c4():u
r=s.e
if(r!=null)r.av(0)}return s.f},
t:function(a,b){var u,t,s,r
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
$aa3:function(){return[U.ai]},
$iai:1}
U.ai.prototype={}
U.eb.prototype={
gp:function(){var u=this.y
return u==null?this.y=D.P():u},
G:function(a){var u=this.y
if(u!=null)u.D(a)},
seJ:function(a){var u
a=V.ll(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.L().a)){this.a=a
u=new D.I("yaw",u,a,[P.t])
u.b=!0
this.G(u)}},
seq:function(a,b){var u
b=V.ll(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.L().a)){this.b=b
u=new D.I("pitch",u,b,[P.t])
u.b=!0
this.G(u)}},
sew:function(a){var u
a=V.ll(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.L().a)){this.c=a
u=new D.I("roll",u,a,[P.t])
u.b=!0
this.G(u)}},
aP:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.seJ(u.a+u.d*b.y)
u.seq(0,u.b+u.e*b.y)
u.sew(u.c+u.f*b.y)
u.x=V.mt(u.c).u(0,V.ms(u.b)).u(0,V.mr(u.a))
t=u.y
if(t!=null)t.av(0)}return u.x},
t:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.eb))return!1
u=r.a
t=b.a
s=$.L().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.Q(u.a,3,0)+", "+V.Q(u.b,3,0)+", "+V.Q(u.c,3,0)+"], ["+V.Q(u.d,3,0)+", "+V.Q(u.e,3,0)+", "+V.Q(u.f,3,0)+"]"}}
U.ev.prototype={
gp:function(){var u=this.cy
return u==null?this.cy=D.P():u},
G:function(a){var u
H.f(a,"$iz")
u=this.cy
if(u!=null)u.D(a)},
ae:function(){return this.G(null)},
bb:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdV().h(0,u.gbU())
u.a.c.gej().h(0,u.gbW())
u.a.c.gcP().h(0,u.gbY())
return!0},
bV:function(a){var u=this
H.f(a,"$iz")
if(!J.W(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bX:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.f(a,"$iz"),"$ibq")
if(!H.F(n.y))return
if(H.F(n.x)){u=a.d.M(0,a.y)
u=new V.Y(u.a,u.b)
u=u.B(u)
t=n.r
if(typeof t!=="number")return H.D(t)
if(u<t)return
n.x=!1}if(H.F(n.d)){u=a.c
t=a.d.M(0,a.y)
u=new V.Y(t.a,t.b).u(0,2).q(0,u.gai())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.u()
s=n.e
if(typeof s!=="number")return H.D(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=new V.Y(s.a,s.b).u(0,2).q(0,u.gai())
s=n.b
q=r.a
if(typeof q!=="number")return q.T()
p=n.e
if(typeof p!=="number")return H.D(p)
o=n.z
if(typeof o!=="number")return H.D(o)
s.sa1(0,-q*p+o)
n.b.sW(0)
t=t.M(0,a.z)
n.Q=new V.Y(t.a,t.b).u(0,2).q(0,u.gai())}n.ae()},
bZ:function(a){var u,t,s,r=this
H.f(a,"$iz")
if(!H.F(r.y))return
r.y=!1
if(H.F(r.x))return
u=r.Q
if(u.B(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.u()
s=r.e
if(typeof s!=="number")return H.D(s)
u.sW(t*10*s)
r.ae()}},
aP:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.S()
if(s<r){t.ch=r
u=b.y
t.b.ax(0,u)
t.cx=V.mt(t.b.d)}return t.cx},
$iai:1}
U.ew.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.P():u},
G:function(a){var u
H.f(a,"$iz")
u=this.fx
if(u!=null)u.D(a)},
ae:function(){return this.G(null)},
bb:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdV().h(0,s.gbU())
s.a.c.gej().h(0,s.gbW())
s.a.c.gcP().h(0,s.gbY())
u=s.a.d
t=u.f
u=t==null?u.f=D.P():t
u.h(0,s.gfK())
u=s.a.d
t=u.d
u=t==null?u.d=D.P():t
u.h(0,s.gfM())
u=s.a.e
t=u.b
u=t==null?u.b=D.P():t
u.h(0,s.gie())
u=s.a.e
t=u.d
u=t==null?u.d=D.P():t
u.h(0,s.gib())
u=s.a.e
t=u.c
u=t==null?u.c=D.P():t
u.h(0,s.gi9())
return!0},
aA:function(a){var u=a.a,t=a.b
if(H.F(this.f)){if(typeof u!=="number")return u.T()
u=-u}if(H.F(this.r)){if(typeof t!=="number")return t.T()
t=-t}return new V.Y(u,t)},
bV:function(a){var u=this
a=H.q(H.f(a,"$iz"),"$ibq")
if(!J.W(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bX:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.f(a,"$iz"),"$ibq")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.M(0,a.y)
u=new V.Y(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.D(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.M(0,a.y)
u=n.aA(new V.Y(t.a,t.b).u(0,2).q(0,u.gai()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.D(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.D(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=n.aA(new V.Y(s.a,s.b).u(0,2).q(0,u.gai()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.D(p)
o=n.cy
if(typeof o!=="number")return H.D(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.D(q)
s=n.db
if(typeof s!=="number")return H.D(s)
o.sa1(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.M(0,a.z)
n.dx=n.aA(new V.Y(t.a,t.b).u(0,2).q(0,u.gai()))}n.ae()},
bZ:function(a){var u,t,s,r=this
H.f(a,"$iz")
if(!H.F(r.cx))return
r.cx=!1
if(H.F(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.D(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.D(u)
s.sW(-t*10*u)
r.ae()}},
fL:function(a){var u=this
if(H.q(H.f(a,"$iz"),"$idX").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fN:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.f(a,"$iz"),"$ibq")
if(!J.W(n.d,a.x.b))return
u=a.c
t=a.d
s=t.M(0,a.y)
r=n.aA(new V.Y(s.a,s.b).u(0,2).q(0,u.gai()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.D(p)
o=n.cy
if(typeof o!=="number")return H.D(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.D(q)
s=n.db
if(typeof s!=="number")return H.D(s)
o.sa1(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.M(0,a.z)
n.dx=n.aA(new V.Y(t.a,t.b).u(0,2).q(0,u.gai()))
n.ae()},
ig:function(a){var u=this
H.f(a,"$iz")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
ic:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.f(a,"$iz"),"$iep")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.M(0,a.y)
u=new V.Y(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.D(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.M(0,a.y)
u=n.aA(new V.Y(t.a,t.b).u(0,2).q(0,u.gai()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.D(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.D(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=n.aA(new V.Y(s.a,s.b).u(0,2).q(0,u.gai()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.D(p)
o=n.cy
if(typeof o!=="number")return H.D(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.D(q)
s=n.db
if(typeof s!=="number")return H.D(s)
o.sa1(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.M(0,a.z)
n.dx=n.aA(new V.Y(t.a,t.b).u(0,2).q(0,u.gai()))}n.ae()},
ia:function(a){var u,t,s,r=this
H.f(a,"$iz")
if(!H.F(r.cx))return
r.cx=!1
if(H.F(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.D(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.D(u)
s.sW(-t*10*u)
r.ae()}},
aP:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.S()
if(s<r){t.dy=r
u=b.y
t.c.ax(0,u)
t.b.ax(0,u)
t.fr=V.mr(t.b.d).u(0,V.ms(t.c.d))}return t.fr},
$iai:1}
U.ex.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.P():u},
G:function(a){var u=this.r
if(u!=null)u.D(a)},
bb:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.P():t
t=r.gfP()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.P():s).h(0,t)
return!0},
fQ:function(a){var u,t,s,r,q=this
H.f(a,"$iz")
if(!J.W(q.b,q.a.b.c))return
H.q(a,"$icN")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){q.d=r
u=new D.I("zoom",u,r,[P.t])
u.b=!0
q.G(u)}},
aP:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.bc(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iai:1}
M.dF.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.P():u},
a0:function(a){var u
H.f(a,"$iz")
u=this.r
if(u!=null)u.D(a)},
b5:function(){return this.a0(null)},
hx:function(a,b){var u,t,s,r,q,p,o,n=M.aE
H.m(b,"$ij",[n],"$aj")
for(u=b.length,t=this.ga_(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.gp()
o.toString
H.n(t,s)
if(o.a==null)o.sam(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bI([n])
n.b=!0
this.a0(n)},
hz:function(a,b){var u,t,s=M.aE
H.m(b,"$ij",[s],"$aj")
for(u=b.gU(b),t=this.ga_();u.A();)u.gJ(u).gp().L(0,t)
s=new D.bJ([s])
s.b=!0
this.a0(s)},
aj:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.au(u,u.length,[H.r(u,0)]);u.A();){t=u.d
if(t!=null)t.aj(a)}s.f=!1},
$aj:function(){return[M.aE]},
$aa3:function(){return[M.aE]},
$iaE:1}
M.dH.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.P():u},
a0:function(a){var u
H.f(a,"$iz")
u=this.r
if(u!=null)u.D(a)},
b5:function(){return this.a0(null)},
sb_:function(a){var u,t,s=this
if(a==null)a=new X.ho()
u=s.b
if(u!==a){if(u!=null)u.gp().L(0,s.ga_())
t=s.b
s.b=a
a.gp().h(0,s.ga_())
u=new D.I("camera",t,s.b,[X.bY])
u.b=!0
s.a0(u)}},
sbk:function(a,b){var u,t,s=this
if(b==null)b=X.mk(null)
u=s.c
if(u!==b){if(u!=null)u.gp().L(0,s.ga_())
t=s.c
s.c=b
b.gp().h(0,s.ga_())
u=new D.I("target",t,s.c,[X.d1])
u.b=!0
s.a0(u)}},
sb2:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().L(0,t.ga_())
u=t.d
t.d=a
if(a!=null)a.gp().h(0,t.ga_())
s=new D.I("technique",u,t.d,[O.bP])
s.b=!0
t.a0(s)}},
aj:function(a){var u=this
a.cH(u.d)
u.c.a3(a)
u.b.a3(a)
u.e.ax(0,a)
u.e.aj(a)
u.b.aw(a)
u.c.aw(a)
a.cG()},
$iaE:1}
M.dL.prototype={
a0:function(a){var u
H.f(a,"$iz")
u=this.y
if(u!=null)u.D(a)},
b5:function(){return this.a0(null)},
h_:function(a,b){var u,t,s,r,q,p,o,n=E.aq
H.m(b,"$ij",[n],"$aj")
for(u=b.length,t=this.ga_(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c0()
o.sam(null)
o.saW(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sam(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bI([n])
n.b=!0
this.a0(n)},
h1:function(a,b){var u,t,s=E.aq
H.m(b,"$ij",[s],"$aj")
for(u=b.gU(b),t=this.ga_();u.A();)u.gJ(u).gp().L(0,t)
s=new D.bJ([s])
s.b=!0
this.a0(s)},
sb_:function(a){var u,t,s=this
if(a==null)a=X.lD(null)
u=s.b
if(u!==a){if(u!=null)u.gp().L(0,s.ga_())
t=s.b
s.b=a
a.gp().h(0,s.ga_())
u=new D.I("camera",t,s.b,[X.bY])
u.b=!0
s.a0(u)}},
sbk:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gp().L(0,t.ga_())
u=t.c
t.c=b
b.gp().h(0,t.ga_())
s=new D.I("target",u,t.c,[X.d1])
s.b=!0
t.a0(s)}},
sb2:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().L(0,t.ga_())
u=t.d
t.d=a
if(a!=null)a.gp().h(0,t.ga_())
s=new D.I("technique",u,t.d,[O.bP])
s.b=!0
t.a0(s)}},
gp:function(){var u=this.y
return u==null?this.y=D.P():u},
aj:function(a){var u,t=this
a.cH(t.d)
t.c.a3(a)
t.b.a3(a)
u=t.d
if(u!=null)u.ax(0,a)
for(u=t.e.a,u=new J.au(u,u.length,[H.r(u,0)]);u.A();)u.d.ax(0,a)
for(u=t.e.a,u=new J.au(u,u.length,[H.r(u,0)]);u.A();)u.d.aj(a)
t.b.toString
a.cy.aM()
a.db.aM()
t.c.aw(a)
a.cG()},
sfn:function(a,b){this.e=H.m(b,"$ia3",[E.aq],"$aa3")},
$iaE:1}
M.aE.prototype={}
A.dB.prototype={}
A.fE.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iL:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dU:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.al.prototype={
gay:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof A.al))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.dZ.prototype={
eY:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.a7("")
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
A.pB(c0,u)
A.pD(c0,u)
A.pC(c0,u)
A.pF(c0,u)
A.pG(c0,u)
A.pE(c0,u)
A.pH(c0,u)
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
b5.eh(0,s.charCodeAt(0)==0?s:s,A.pA(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.q(b5.y.N(0,"invViewMat"),"$iay")
if(t)b5.dy=H.q(b5.y.N(0,"objMat"),"$iay")
if(r)b5.fr=H.q(b5.y.N(0,"viewObjMat"),"$iay")
b5.fy=H.q(b5.y.N(0,"projViewObjMat"),"$iay")
if(c0.ry)b5.k1=H.q(b5.y.N(0,"txt2DMat"),"$id7")
if(c0.x1)b5.k2=H.q(b5.y.N(0,"txtCubeMat"),"$iay")
if(c0.x2)b5.k3=H.q(b5.y.N(0,"colorMat"),"$iay")
b5.sfj(H.c([],[A.ay]))
t=c0.y2
if(t>0){b5.k4=H.f(b5.y.N(0,"bendMatCount"),"$iaL")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.B(P.C(b7+q+b8));(s&&C.a).h(s,H.q(m,"$iay"))}}t=c0.a
if(t.a)b5.r2=H.q(b5.y.N(0,"emissionClr"),"$ia_")
if(t.b)b5.rx=H.q(b5.y.N(0,"emissionTxt"),"$ian")
t=c0.b
if(t.a)b5.x1=H.q(b5.y.N(0,"ambientClr"),"$ia_")
if(t.b)b5.x2=H.q(b5.y.N(0,"ambientTxt"),"$ian")
t=c0.c
if(t.a)b5.y2=H.q(b5.y.N(0,"diffuseClr"),"$ia_")
if(t.b)b5.aJ=H.q(b5.y.N(0,"diffuseTxt"),"$ian")
t=c0.d
if(t.a)b5.dX=H.q(b5.y.N(0,"invDiffuseClr"),"$ia_")
if(t.b)b5.dY=H.q(b5.y.N(0,"invDiffuseTxt"),"$ian")
t=c0.e
s=t.a
if(s||t.b||!1){b5.e0=H.q(b5.y.N(0,"shininess"),"$iaa")
if(s)b5.dZ=H.q(b5.y.N(0,"specularClr"),"$ia_")
if(t.b)b5.e_=H.q(b5.y.N(0,"specularTxt"),"$ian")}if(c0.f.b)b5.e1=H.q(b5.y.N(0,"bumpTxt"),"$ian")
if(c0.cy){b5.e2=H.q(b5.y.N(0,"envSampler"),"$ibR")
t=c0.r
if(t.a)b5.e3=H.q(b5.y.N(0,"reflectClr"),"$ia_")
if(t.b)b5.e4=H.q(b5.y.N(0,"reflectTxt"),"$ian")
t=c0.x
s=t.a
if(s||t.b||!1){b5.e5=H.q(b5.y.N(0,"refraction"),"$iaa")
if(s)b5.e6=H.q(b5.y.N(0,"refractClr"),"$ia_")
if(t.b)b5.e7=H.q(b5.y.N(0,"refractTxt"),"$ian")}}t=c0.y
if(t.a)b5.e8=H.q(b5.y.N(0,"alpha"),"$iaa")
if(t.b)b5.e9=H.q(b5.y.N(0,"alphaTxt"),"$ian")
t=P.l
s=[t,A.aL]
b5.sfu(new H.a4(s))
b5.sfv(new H.a4([t,[P.b,A.ca]]))
b5.shH(new H.a4(s))
b5.shI(new H.a4([t,[P.b,A.cb]]))
b5.si3(new H.a4(s))
b5.si4(new H.a4([t,[P.b,A.cc]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.ca],l=0;l<t.length;t.length===s||(0,H.v)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.i(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.aq()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.B(P.C(b7+g+b8))
H.q(m,"$ia_")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.B(P.C(b7+g+b8))
H.q(f,"$ia_")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.B(P.C(b7+g+b8))
H.q(e,"$ia_")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.B(P.C(b7+g+b8))
H.q(m,"$ia_")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.B(P.C(b7+g+b8))
H.q(f,"$ia_")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.B(P.C(b7+o+b8))
H.q(e,"$ian")
a=e}else a=b6
C.a.h(h,new A.ca(b,c,d,m,f,a))}b5.cn.k(0,j,h)
q=b5.cm
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.B(P.C(b7+o+b8))
q.k(0,j,H.f(m,"$iaL"))}for(t=c0.Q,s=t.length,r=[A.cb],l=0;l<t.length;t.length===s||(0,H.v)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.i(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.B(P.C(b7+o+b8))
H.q(m,"$ia_")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.B(P.C(b7+o+b8))
H.q(f,"$ia_")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.B(P.C(b7+o+b8))
H.q(e,"$ia_")
if(typeof j!=="number")return j.aq()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.B(P.C(b7+o+b8))
H.q(a0,"$id7")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.B(P.C(b7+o+b8))
H.q(a0,"$ibR")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.B(P.C(b7+o+b8))
H.q(a0,"$ibR")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.B(P.C(b7+o+b8))
H.q(a2,"$id6")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.B(P.C(b7+o+b8))
H.q(a0,"$iaa")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.B(P.C(b7+o+b8))
H.q(a2,"$iaa")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.B(P.C(b7+o+b8))
H.q(a5,"$iaa")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.cb(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.cp.k(0,j,h)
q=b5.co
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.B(P.C(b7+o+b8))
q.k(0,j,H.f(m,"$iaL"))}for(t=c0.ch,s=t.length,r=[A.cc],l=0;l<t.length;t.length===s||(0,H.v)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.i(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.B(P.C(b7+o+b8))
H.q(m,"$ia_")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.B(P.C(b7+o+b8))
H.q(f,"$ia_")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.B(P.C(b7+o+b8))
H.q(e,"$ia_")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.B(P.C(b7+o+b8))
H.q(a0,"$ia_")
if(typeof j!=="number")return j.aq()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.B(P.C(b7+o+b8))
H.q(a2,"$ia_")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.B(P.C(b7+o+b8))
H.q(a5,"$ia_")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.B(P.C(b7+o+b8))
H.q(a9,"$iaa")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.B(P.C(b7+o+b8))
H.q(b0,"$iaa")
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
if(a2==null)H.B(P.C(b7+g+b8))
H.q(a2,"$id6")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.B(P.C(b7+g+b8))
H.q(a2,"$iaa")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.B(P.C(b7+g+b8))
H.q(a5,"$iaa")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.B(P.C(b7+g+b8))
H.q(a2,"$iaa")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.B(P.C(b7+g+b8))
H.q(a5,"$iaa")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.B(P.C(b7+g+b8))
H.q(a9,"$iaa")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.B(P.C(b7+g+b8))
H.q(a2,"$ian")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.B(P.C(b7+o+b8))
H.q(a2,"$ian")
a3=a2}else a3=b6
C.a.h(h,new A.cc(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.cr.k(0,j,h)
q=b5.cq
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.B(P.C(b7+o+b8))
q.k(0,j,H.f(m,"$iaL"))}}},
as:function(a,b){if(b!=null&&b.d)a.eO(b)},
hX:function(a,b){},
sfj:function(a){this.r1=H.m(a,"$ib",[A.ay],"$ab")},
sfu:function(a){this.cm=H.m(a,"$iA",[P.l,A.aL],"$aA")},
sfv:function(a){this.cn=H.m(a,"$iA",[P.l,[P.b,A.ca]],"$aA")},
shH:function(a){this.co=H.m(a,"$iA",[P.l,A.aL],"$aA")},
shI:function(a){this.cp=H.m(a,"$iA",[P.l,[P.b,A.cb]],"$aA")},
si3:function(a){this.cq=H.m(a,"$iA",[P.l,A.aL],"$aA")},
si4:function(a){this.cr=H.m(a,"$iA",[P.l,[P.b,A.cc]],"$aA")}}
A.aQ.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.aU.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.aY.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.hL.prototype={
i:function(a){return this.aJ}}
A.ca.prototype={}
A.cb.prototype={}
A.cc.prototype={}
A.cX.prototype={
cZ:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
eh:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.df(b,35633)
r.f=r.df(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.F(H.lV(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.B(P.C("Failed to link shader: "+H.i(s)))}r.hZ()
r.i0()},
a3:function(a){a.a.useProgram(this.r)
this.x.iL()},
df:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.F(H.lV(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.C("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
hZ:function(){var u,t,s,r=this,q=H.c([],[A.dB]),p=r.a,o=H.ac(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.D(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dB(p,t.name,s))}r.x=new A.fE(q)},
i0:function(){var u,t,s,r=this,q=H.c([],[A.eq]),p=r.a,o=H.ac(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.D(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.iE(t.type,t.size,t.name,s))}r.y=new A.je(q)},
aT:function(a,b,c){var u=this.a
if(a===1)return new A.aL(u,b,c)
else return A.lG(u,this.r,b,a,c)},
fq:function(a,b,c){var u=this.a
if(a===1)return new A.an(u,b,c)
else return A.lG(u,this.r,b,a,c)},
fs:function(a,b,c){var u=this.a
if(a===1)return new A.bR(u,b,c)
else return A.lG(u,this.r,b,a,c)},
bs:function(a,b){return new P.eJ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
iE:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aT(b,c,d)
case 5121:return u.aT(b,c,d)
case 5122:return u.aT(b,c,d)
case 5123:return u.aT(b,c,d)
case 5124:return u.aT(b,c,d)
case 5125:return u.aT(b,c,d)
case 5126:return new A.aa(u.a,c,d)
case 35664:return new A.ja(u.a,c,d)
case 35665:return new A.a_(u.a,c,d)
case 35666:return new A.d6(u.a,c,d)
case 35667:return new A.jb(u.a,c,d)
case 35668:return new A.jc(u.a,c,d)
case 35669:return new A.jd(u.a,c,d)
case 35674:return new A.jf(u.a,c,d)
case 35675:return new A.d7(u.a,c,d)
case 35676:return new A.ay(u.a,c,d)
case 35678:return u.fq(b,c,d)
case 35680:return u.fs(b,c,d)
case 35670:throw H.d(u.bs("BOOL",c))
case 35671:throw H.d(u.bs("BOOL_VEC2",c))
case 35672:throw H.d(u.bs("BOOL_VEC3",c))
case 35673:throw H.d(u.bs("BOOL_VEC4",c))
default:throw H.d(P.C("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.ef.prototype={}
A.eq.prototype={}
A.je.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
N:function(a,b){var u=this.j(0,b)
if(u==null)throw H.d(P.C("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
P:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aL.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.jb.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.jc.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.jd.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.j9.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
sii:function(a){H.m(a,"$ib",[P.l],"$ab")}}
A.aa.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.ja.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.a_.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.d6.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.jf.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.d7.prototype={
ar:function(a){var u=new Float32Array(H.ch(H.m(a,"$ib",[P.t],"$ab")))
C.c.eF(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.ay.prototype={
ar:function(a){var u=new Float32Array(H.ch(H.m(a,"$ib",[P.t],"$ab")))
C.c.eG(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.an.prototype={
eO:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.bR.prototype={
eP:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.kB.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cA(s.b,b).cA(s.d.cA(s.c,b),c)
a.sa1(0,new V.Z(r.a,r.b,r.c))
a.seA(r.q(0,Math.sqrt(r.B(r))))
s=1-b
u=1-c
a.sdO(new V.aI(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:5}
F.kO.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:11}
F.kQ.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.D(p)
s=-s*p
u=r*p
a.sa1(0,new V.Z(s,u,q))
u=new V.K(s,u,q)
a.seA(u.q(0,Math.sqrt(u.B(u))))
a.sdO(new V.aI(1-c,2+c,-1,-1))},
$S:5}
F.kR.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:19}
F.kS.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:19}
F.lg.prototype={
$2:function(a,b){return 0},
$S:11}
F.lh.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.D(s)
u=a.f
t=new V.K(u.a,u.b,u.c)
s=t.q(0,Math.sqrt(t.B(t))).u(0,this.b+s)
a.sa1(0,new V.Z(s.a,s.b,s.c))},
$S:5}
F.lj.prototype={
$1:function(a){return new V.Z(Math.cos(a),Math.sin(a),0)},
$S:18}
F.l_.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.Z(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:18}
F.kP.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.m6(n.$1(o),m)
m=J.m6(n.$1(o+3.141592653589793/p.c),m).M(0,l)
m=new V.K(m.a,m.b,m.c)
u=m.q(0,Math.sqrt(m.B(m)))
n=$.mU
if(n==null){n=new V.K(1,0,0)
$.mU=n
t=n}else t=n
n=u.aI(!J.W(u,t)?V.mW():t)
s=n.q(0,Math.sqrt(n.B(n)))
n=s.aI(u)
t=n.q(0,Math.sqrt(n.B(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.u(0,n*m)
m=s.u(0,q*m)
a.sa1(0,l.C(0,new V.Z(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:5}
F.a9.prototype={
be:function(){var u=this
if(!u.gbf()){C.a.L(u.a.a.d.b,u)
u.a.a.a4()}u.c4()
u.c5()
u.hN()},
c9:function(a){this.a=a
C.a.h(a.d.b,this)},
ca:function(a){this.b=a
C.a.h(a.d.c,this)},
hY:function(a){this.c=a
C.a.h(a.d.d,this)},
c4:function(){var u=this.a
if(u!=null){C.a.L(u.d.b,this)
this.a=null}},
c5:function(){var u=this.b
if(u!=null){C.a.L(u.d.c,this)
this.b=null}},
hN:function(){var u=this.c
if(u!=null){C.a.L(u.d.d,this)
this.c=null}},
gbf:function(){return this.a==null||this.b==null||this.c==null},
fi:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d9()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.ei())return
return s.q(0,Math.sqrt(s.B(s)))},
fm:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.M(0,q)
r=new V.K(r.a,r.b,r.c)
s=r.q(0,Math.sqrt(r.B(r)))
r=t.M(0,q)
r=new V.K(r.a,r.b,r.c)
r=s.aI(r.q(0,Math.sqrt(r.B(r))))
return r.q(0,Math.sqrt(r.B(r)))},
cf:function(){var u,t=this
if(t.d!=null)return!0
u=t.fi()
if(u==null){u=t.fm()
if(u==null)return!1}t.d=u
t.a.a.a4()
return!0},
fh:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d9()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.ei())return
return s.q(0,Math.sqrt(s.B(s)))},
fl:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.L().a){l=d.M(0,g)
l=new V.K(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.B(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.M(0,g).u(0,p).C(0,g).M(0,j)
l=new V.K(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.B(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.q(0,Math.sqrt(l.B(l)))
l=o.aI(q)
l=l.q(0,Math.sqrt(l.B(l))).aI(o)
q=l.q(0,Math.sqrt(l.B(l)))}return q},
cd:function(){var u,t=this
if(t.e!=null)return!0
u=t.fh()
if(u==null){u=t.fl()
if(u==null)return!1}t.e=u
t.a.a.a4()
return!0},
giy:function(a){var u=this
if(J.W(u.a,u.b))return!0
if(J.W(u.b,u.c))return!0
if(J.W(u.c,u.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var u,t,s=this
if(s.gbf())return a+"disposed"
u=a+C.b.ap(J.at(s.a.e),0)+", "+C.b.ap(J.at(s.b.e),0)+", "+C.b.ap(J.at(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
P:function(){return this.F("")}}
F.hb.prototype={}
F.iE.prototype={
bg:function(a,b,c){var u,t=b.a
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
F.bp.prototype={
be:function(){var u=this
if(!u.gbf()){C.a.L(u.a.a.c.b,u)
u.a.a.a4()}u.c4()
u.c5()},
c9:function(a){this.a=a
C.a.h(a.c.b,this)},
ca:function(a){this.b=a
C.a.h(a.c.c,this)},
c4:function(){var u=this.a
if(u!=null){C.a.L(u.c.b,this)
this.a=null}},
c5:function(){var u=this.b
if(u!=null){C.a.L(u.c.c,this)
this.b=null}},
gbf:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){if(this.gbf())return a+"disposed"
return a+C.b.ap(J.at(this.a.e),0)+", "+C.b.ap(J.at(this.b.e),0)},
P:function(){return this.F("")}}
F.hw.prototype={}
F.j8.prototype={
bg:function(a,b,c){var u,t=b.a
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
F.bN.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ap(J.at(u.e),0)},
P:function(){return this.F("")}}
F.ed.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.P():u},
bh:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.w()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){r=g[s]
h.a.h(0,r.iB())}h.a.w()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bN()
if(n.a==null)H.B(P.C("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.D(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.oi(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cC(l,k,i)}g=h.e
if(g!=null)g.av(0)},
at:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.at()||!1
if(!t.a.at())u=!1
s=t.e
if(s!=null)s.av(0)
return u},
j1:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.r(o,0)])
for(o=[F.ar];u.length!==0;){t=C.a.giQ(u)
C.a.er(u,0)
if(t!=null){s=H.c([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.e(u,r)
q=u[r]
if(q!=null&&a.bg(0,t,q)){C.a.h(s,q)
C.a.er(u,r)}}if(s.length>1)b.bh(s)}}p.a.w()
p.c.cK()
p.d.cK()
p.b.jj()
p.c.cL(new F.j8())
p.d.cL(new F.iE())
o=p.e
if(o!=null)o.av(0)},
cb:function(){this.j1(new F.jB(),new F.i8())},
dR:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.b3()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bw().a)!==0)++s
if((t&$.bv().a)!==0)++s
if((t&$.bx().a)!==0)++s
if((t&$.bV().a)!==0)++s
if((t&$.dv().a)!==0)++s
if((t&$.dw().a)!==0)++s
if((t&$.cs().a)!==0)++s
if((t&$.bu().a)!==0)++s
r=a3.gcV(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.t
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.dD])
for(n=0,m=0;m<s;++m){l=a3.ir(m)
k=l.gcV(l)
C.a.k(o,m,new Z.dD(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.e(u,j)
i=u[j].j_(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.ch(p)),35044)
u.bindBuffer(a0,null)
e=new Z.cw(new Z.ez(a0,f),o,a3)
e.sfF(H.c([],[Z.bH]))
if(a.b.b.length!==0){t=P.l
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)}b=Z.lK(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bH(0,d.length,b))}if(a.c.b.length!==0){t=P.l
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.w()
C.a.h(d,c.e)}b=Z.lK(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bH(1,d.length,b))}if(a.d.b.length!==0){t=P.l
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.w()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].c
c.a.a.w()
C.a.h(d,c.e)}b=Z.lK(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bH(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.h])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.F(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.F(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.F(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.F(t))}return C.a.m(s,"\n")},
a4:function(){var u=this.e
if(u!=null)u.D(null)},
$iqq:1}
F.ix.prototype={
dJ:function(a){var u,t,s,r,q,p,o
H.m(a,"$ib",[F.ar],"$ab")
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
im:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.ar],"$ab")
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
if(a.bg(0,p,n)){p.be()
break}}}}},
cK:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.giy(s)
if(t)s.be()}},
at:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].cf())s=!1
return s},
ce:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].cd())s=!1
return s},
i:function(a){return this.P()},
F:function(a){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].F(a))
return C.a.m(r,"\n")},
P:function(){return this.F("")},
sfA:function(a){this.b=H.m(a,"$ib",[F.a9],"$ab")}}
F.iy.prototype={
gn:function(a){return this.b.length},
cL:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.bg(0,p,n)){p.be()
break}}}}},
cK:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.W(s.a,s.b)
if(t)s.be()}},
i:function(a){return this.P()},
F:function(a){var u,t,s=H.c([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].F(a+(""+u+". ")))}return C.a.m(s,"\n")},
P:function(){return this.F("")},
sfG:function(a){this.b=H.m(a,"$ib",[F.bp],"$ab")}}
F.iz.prototype={
gn:function(a){return this.b.length},
jj:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.L(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.D(null)}s=t.a
if(s!=null){C.a.L(s.b.b,t)
t.a=null}}}},
i:function(a){return this.P()},
F:function(a){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].F(a))
return C.a.m(r,"\n")},
P:function(){return this.F("")},
sc1:function(a){this.b=H.m(a,"$ib",[F.bN],"$ab")}}
F.ar.prototype={
cj:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ey(u.cx,r,o,t,s,q,p,a,n)},
iB:function(){return this.cj(null)},
sa1:function(a,b){var u
if(!J.W(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a4()}},
seA:function(a){var u
if(!J.W(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a4()}},
sdO:function(a){var u
if(!J.W(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a4()}},
j_:function(a){var u,t,s=this
if(a.t(0,$.b3())){u=s.f
t=[P.t]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bw())){u=s.r
t=[P.t]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bv())){u=s.x
t=[P.t]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bx())){u=s.y
t=[P.t]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.t(0,$.bV())){u=s.z
t=[P.t]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.dv())){u=s.Q
t=[P.t]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.dw())){u=s.Q
t=[P.t]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.cs()))return H.c([s.ch],[P.t])
else if(a.t(0,$.bu())){u=s.cx
t=[P.t]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.t])},
cf:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d9()
t.d.H(0,new F.jG(s))
s=s.a
t.r=s.q(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.a4()
s=t.a.e
if(s!=null)s.av(0)}return!0},
cd:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d9()
t.d.H(0,new F.jF(s))
s=s.a
t.x=s.q(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.a4()
s=t.a.e
if(s!=null)s.av(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var u,t,s=this,r="-",q=H.c([],[P.h])
C.a.h(q,C.b.ap(J.at(s.e),0))
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
C.a.h(q,V.Q(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
P:function(){return this.F("")}}
F.jG.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:10}
F.jF.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:10}
F.jw.prototype={
w:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.C("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a4()
return!0},
dK:function(a,b,c,d,e,f,g){var u=F.ey(a,null,b,c,d,e,f,g,0)
this.h(0,u)
return u},
bt:function(a,b,c,d,e,f){return this.dK(a,b,c,null,d,e,f)},
io:function(a,b,c,d,e,f){return this.dK(a,b,c,d,e,f,null)},
gn:function(a){return this.c.length},
at:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].cf()
return!0},
ce:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].cd()
return!0},
ix:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.q(0,Math.sqrt(p*p+o*o+n*n))
if(!J.W(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.D(null)}}}}return!0},
i:function(a){return this.P()},
F:function(a){var u,t,s,r
this.w()
u=H.c([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].F(a))
return C.a.m(u,"\n")},
P:function(){return this.F("")},
sij:function(a){this.c=H.m(a,"$ib",[F.ar],"$ab")}}
F.jx.prototype={
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
C.a.H(u.c,new F.jy(u,b))
C.a.H(u.d,new F.jz(u,b))},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sfB:function(a){this.b=H.m(a,"$ib",[F.a9],"$ab")},
sfC:function(a){this.c=H.m(a,"$ib",[F.a9],"$ab")},
sfD:function(a){this.d=H.m(a,"$ib",[F.a9],"$ab")}}
F.jy.prototype={
$1:function(a){H.f(a,"$ia9")
if(!J.W(a.a,this.a))this.b.$1(a)},
$S:10}
F.jz.prototype={
$1:function(a){var u
H.f(a,"$ia9")
u=this.a
if(!J.W(a.a,u)&&!J.W(a.b,u))this.b.$1(a)},
$S:10}
F.jA.prototype={
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.e(t,u)
return t[u]}else{if(b<0)return H.e(t,b)
return t[b]}},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sfH:function(a){this.b=H.m(a,"$ib",[F.bp],"$ab")},
sfI:function(a){this.c=H.m(a,"$ib",[F.bp],"$ab")}}
F.jC.prototype={}
F.jB.prototype={
bg:function(a,b,c){return J.W(b.f,c.f)}}
F.jD.prototype={}
F.i8.prototype={
bh:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[F.ar],"$ab")
u=V.d9()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.K(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.q(0,Math.sqrt(u.B(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.v)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.q(0,Math.sqrt(o*o+n*n+m*m))}if(!J.W(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.D(null)}}}return}}
F.jE.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sc1:function(a){this.b=H.m(a,"$ib",[F.bN],"$ab")}}
O.e_.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.P():u},
Y:function(a){var u
H.f(a,"$iz")
u=this.fr
if(u!=null)u.D(a)},
b6:function(){return this.Y(null)},
dw:function(a){H.f(a,"$iz")
this.a=null
this.Y(a)},
hS:function(){return this.dw(null)},
fU:function(a,b){var u=V.av
H.m(b,"$ij",[u],"$aj")
u=new D.bI([u])
u.b=!0
this.Y(u)},
fW:function(a,b){var u=V.av
H.m(b,"$ij",[u],"$aj")
u=new D.bJ([u])
u.b=!0
this.Y(u)},
dc:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.l,h=new H.a4([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=h.j(0,0)
h.k(0,0,r==null?1:r)}q=H.c([],[A.aQ])
h.H(0,new O.hP(j,q))
C.a.bI(q,new O.hQ())
p=new H.a4([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){o=u[s]
r=o.gbd()
n=p.j(0,o.gbd())
p.k(0,r,n==null?1:n)}m=H.c([],[A.aU])
p.H(0,new O.hR(j,m))
C.a.bI(m,new O.hS())
l=new H.a4([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.v)(i),++s){o=i[s]
t=o.gbd()
r=l.j(0,o.gbd())
l.k(0,t,r==null?1:r)}k=H.c([],[A.aY])
l.H(0,new O.hT(j,k))
C.a.bI(k,new O.hU())
i=C.d.af(j.e.a.length+3,4)
j.dy.e
return A.op(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
al:function(a,b){H.m(a,"$ib",[T.d3],"$ab")
if(b!=null)if(!C.a.V(a,b)){b.a=a.length
C.a.h(a,b)}},
ax:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.au(u,u.length,[H.r(u,0)]);u.A();){t=u.d
t.toString
s=$.jv
if(s==null)s=$.jv=new V.K(0,0,1)
t.a=s
r=$.ju
t.d=r==null?$.ju=new V.K(0,1,0):r
r=$.jt
t.e=r==null?$.jt=new V.K(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bE(s)
r=s.a
p=s.b
o=s.c
t.a=s.q(0,Math.sqrt(r*r+p*p+o*o))
o=q.bE(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.q(0,Math.sqrt(p*p+r*r+s*s))
s=q.bE(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.q(0,Math.sqrt(r*r+p*p+o*o))}}}},
es:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.dc()
u=H.f(b4.fr.j(0,b3.aJ),"$idZ")
if(u==null){u=A.oo(b3,b4.a)
b4.dM(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.dW
b3=b5.e
if(!(b3 instanceof Z.cw))b3=b5.e=null
if(b3==null||!b3.d.t(0,s)){b3=t.k3
if(b3)b5.d.at()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.ce()
q.a.ce()
q=q.e
if(q!=null)q.av(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.ix()
p=p.e
if(p!=null)p.av(0)}n=b5.d.dR(new Z.eA(b4.a),s)
n.aK($.b3()).e=b2.a.Q.c
if(b3)n.aK($.bw()).e=b2.a.cx.c
if(r)n.aK($.bv()).e=b2.a.ch.c
if(t.r1)n.aK($.bx()).e=b2.a.cy.c
if(q)n.aK($.bV()).e=b2.a.db.c
if(t.rx)n.aK($.bu()).e=b2.a.dx.c
b5.e=n}b3=T.d3
m=H.c([],[b3])
b2.a.a3(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.ga8(q)
r=r.dy
r.toString
r.ar(q.ak(0,!0))}if(t.fr){r=b2.a
q=b4.cx
if(q==null){q=b4.db
q=q.ga8(q)
p=b4.dx
p=b4.cx=q.u(0,p.ga8(p))
q=p}r=r.fr
r.toString
r.ar(q.ak(0,!0))}r=b2.a
q=b4.ch
if(q==null){q=b4.gjh()
p=b4.dx
p=b4.ch=q.u(0,p.ga8(p))
q=p}r=r.fy
r.toString
r.ar(q.ak(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.ar(C.k.ak(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.ar(C.k.ak(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.ar(C.k.ak(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.c.bF(r.a,r.d,l)
for(r=[P.t],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.e(p,k)
p=p[k]
q.toString
H.f(p,"$iav")
q=q.r1
if(k>=q.length)return H.e(q,k)
q=q[k]
j=new Float32Array(H.ch(H.m(p.ak(0,!0),"$ib",r,"$ab")))
C.c.eG(q.a,q.d,!1,j)}}r=t.a
if(r.a){q=b2.a
p=b2.f.f
q=q.r2
C.c.Z(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.al(m,b2.f.d)
r=b2.a
q=b2.f.d
r.as(r.rx,q)}if(t.id){r=t.b
if(r.a){q=b2.a
p=b2.r.f
q=q.x1
C.c.Z(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.al(m,b2.r.d)
r=b2.a
q=b2.r.d
r.as(r.x2,q)}r=t.c
if(r.a){q=b2.a
p=b2.x.f
q=q.y2
C.c.Z(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.al(m,b2.x.d)
r=b2.a
q=b2.x.d
r.as(r.aJ,q)}r=t.d
if(r.a){q=b2.a
p=b2.y.f
q=q.dX
C.c.Z(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.al(m,b2.y.d)
r=b2.a
q=b2.y.d
r.as(r.dY,q)}r=t.e
q=r.a
if(q||r.b||!1){p=b2.a
o=b2.z.ch
p=p.e0
C.c.a6(p.a,p.d,o)}if(q){q=b2.a
p=b2.z.f
q=q.dZ
C.c.Z(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.al(m,b2.z.d)
r=b2.a
q=b2.z.d
r.as(r.e_,q)}r=t.z
if(r.length>0){q=b4.db
i=q.ga8(q)
q=P.l
h=new H.a4([q,q])
for(q=b2.dx.e,p=q.length,g=0;g<q.length;q.length===p||(0,H.v)(q),++g){f=q[g]
e=h.j(0,0)
if(e==null)e=0
h.k(0,0,e+1)
d=J.dx(b2.a.cn.j(0,0),e)
o=i.bE(f.a)
c=o.a
b=o.b
a=o.c
a=o.q(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
o=a.b
a=a.c
C.c.Z(b.a,b.d,c,o,a)
a=f.c
o=d.f
C.c.Z(o.a,o.d,a.a,a.b,a.c)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.v)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.cm.j(0,p)
C.c.bF(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.ga8(q)
q=P.l
a0=new H.a4([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],c=[P.t],g=0;g<q.length;q.length===p||(0,H.v)(q),++g){f=q[g]
a1=f.gbd()
e=a0.j(0,a1)
if(e==null)e=0
a0.k(0,a1,e+1)
d=J.dx(b2.a.cp.j(0,a1),e)
a2=i.u(0,f.ga8(f))
b=f.ga8(f)
a=$.cS
b=b.cO(a==null?$.cS=new V.Z(0,0,0):a)
a=d.b
C.c.Z(a.a,a.d,b.a,b.b,b.c)
b=$.cS
b=a2.cO(b==null?$.cS=new V.Z(0,0,0):b)
a=d.c
C.c.Z(a.a,a.d,b.a,b.b,b.c)
b=f.gbc(f)
a=d.e
C.c.Z(a.a,a.d,b.a,b.b,b.c)
f.gaO()
b=a2.cw(0)
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
j=new Float32Array(H.ch(H.m(new V.e0(a,a3,a4,a5,a6,a7,a8,a9,b).ak(0,!0),"$ib",c,"$ab")))
C.c.eF(b0.a,b0.d,!1,j)
f.gaO()
b=f.gaO()
H.m(m,"$ib",o,"$ab")
if(!C.a.V(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gaO()
a=b.gcB(b)
if(a){a=d.f
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}f.gb4()
b=f.geQ()
a=d.x
a.toString
a3=b.giI(b)
a4=b.giJ(b)
a5=b.giK()
b=b.giH()
C.c.eE(a.a,a.d,a3,a4,a5,b)
b=f.gb4()
if(!C.a.V(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gb4()
a=b.gcB(b)
if(a){a=d.r
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}if(f.giM()){b=f.gis()
a=d.y
C.c.a6(a.a,a.d,b)
b=f.git()
a=d.z
C.c.a6(a.a,a.d,b)
b=f.giu()
a=d.Q
C.c.a6(a.a,a.d,b)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.v)(r),++g){p=r[g].a
l=a0.j(0,p)
if(l==null)l=0
p=b2.a.co.j(0,p)
C.c.bF(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.ga8(q)
q=P.l
b1=new H.a4([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.v)(q),++g){f=q[g]
a1=f.gbd()
e=b1.j(0,a1)
if(e==null)e=0
b1.k(0,a1,e+1)
d=J.dx(b2.a.cr.j(0,a1),e)
o=f.gjg(f)
c=d.b
C.c.Z(c.a,c.d,o.a,o.b,o.c)
o=f.gjA(f).jM()
c=d.c
C.c.Z(c.a,c.d,o.a,o.b,o.c)
o=i.cO(f.gjg(f))
c=d.d
C.c.Z(c.a,c.d,o.a,o.b,o.c)
o=f.gbc(f)
c=d.e
C.c.Z(c.a,c.d,o.a,o.b,o.c)
f.gaO()
o=f.gcP()
c=d.f
C.c.Z(c.a,c.d,o.a,o.b,o.c)
o=f.gcM(f)
c=d.r
C.c.Z(c.a,c.d,o.a,o.b,o.c)
o=f.gjN()
c=d.x
C.c.a6(c.a,c.d,o)
o=f.gjO()
c=d.y
C.c.a6(c.a,c.d,o)
f.gaO()
o=f.gaO()
H.m(m,"$ib",b3,"$ab")
if(!C.a.V(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gaO()
c=o.gcB(o)
if(c){c=d.dx
c.toString
b=o.d
if(!b)c.a.uniform1i(c.d,0)
else{o=o.a
c.a.uniform1i(c.d,o)}}f.gb4()
o=f.geQ()
c=d.z
c.toString
b=o.giI(o)
a=o.giJ(o)
a3=o.giK()
o=o.giH()
C.c.eE(c.a,c.d,b,a,a3,o)
o=f.gb4()
if(!C.a.V(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gb4()
c=o.gcB(o)
if(c){c=d.dy
c.toString
b=o.d
if(!b)c.a.uniform1i(c.d,0)
else{o=o.a
c.a.uniform1i(c.d,o)}}if(f.gjB()){o=f.gjz()
c=d.Q
C.c.a6(c.a,c.d,o)
o=f.gjy()
c=d.ch
C.c.a6(c.a,c.d,o)}if(f.giM()){o=f.gis()
c=d.cx
C.c.a6(c.a,c.d,o)
o=f.git()
c=d.cy
C.c.a6(c.a,c.d,o)
o=f.giu()
c=d.db
C.c.a6(c.a,c.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.v)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.cq.j(0,q)
C.c.bF(q.a,q.d,l)}}}if(t.f.b){b2.al(m,b2.Q.d)
b3=b2.a
r=b2.Q.d
b3.as(b3.e1,r)}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.ga8(r).cw(0)}b3=b3.id
b3.toString
b3.ar(r.ak(0,!0))}if(t.cy){b2.al(m,b2.ch)
b3=b2.a
r=b2.ch
b3.hX(b3.e2,r)
b3=t.r
if(b3.a){r=b2.a
q=b2.cx.f
r=r.e3
C.c.Z(r.a,r.d,q.a,q.b,q.c)}if(b3.b){b2.al(m,b2.cx.d)
b3=b2.a
r=b2.cx.d
b3.as(b3.e4,r)}b3=t.x
r=b3.a
if(r||b3.b||!1){q=b2.a
p=b2.cy.ch
q=q.e5
C.c.a6(q.a,q.d,p)}if(r){r=b2.a
q=b2.cy.f
r=r.e6
C.c.Z(r.a,r.d,q.a,q.b,q.c)}if(b3.b){b2.al(m,b2.cy.d)
b3=b2.a
r=b2.cy.d
b3.as(b3.e7,r)}}b3=t.y
r=b3.a
q=!r
if(!q||b3.b||!1){if(r){r=b2.a
p=b2.db.f
r=r.e8
C.c.a6(r.a,r.d,p)}if(b3.b){b2.al(m,b2.db.d)
r=b2.a
p=b2.db.d
r.as(r.e9,p)}r=b4.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b4.a,k=0;k<m.length;++k){p=m[k]
if(!p.c&&p.d){p.c=!0
r.activeTexture(33984+p.a)
r.bindTexture(3553,p.b)}}p=b5.e
p.a3(b4)
p.aj(b4)
p.aw(b4)
if(!q||b3.b||!1)r.disable(3042)
for(k=0;k<m.length;++k){b3=m[k]
if(b3.c){b3.c=!1
r.activeTexture(33984+b3.a)
r.bindTexture(3553,null)}}b3=b2.a
b3.toString
r.useProgram(null)
b3.x.dU()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dc().aJ},
sfk:function(a){this.e=H.m(a,"$ia3",[V.av],"$aa3")}}
O.hP.prototype={
$2:function(a,b){H.ac(a)
H.ac(b)
if(typeof b!=="number")return b.C()
return C.a.h(this.b,new A.aQ(a,C.d.af(b+3,4)*4))},
$S:12}
O.hQ.prototype={
$2:function(a,b){H.f(a,"$iaQ")
H.f(b,"$iaQ")
return J.ln(a.a,b.a)},
$S:51}
O.hR.prototype={
$2:function(a,b){H.ac(a)
H.ac(b)
if(typeof b!=="number")return b.C()
return C.a.h(this.b,new A.aU(a,C.d.af(b+3,4)*4))},
$S:12}
O.hS.prototype={
$2:function(a,b){H.f(a,"$iaU")
H.f(b,"$iaU")
return J.ln(a.a,b.a)},
$S:52}
O.hT.prototype={
$2:function(a,b){H.ac(a)
H.ac(b)
if(typeof b!=="number")return b.C()
return C.a.h(this.b,new A.aY(a,C.d.af(b+3,4)*4))},
$S:12}
O.hU.prototype={
$2:function(a,b){H.f(a,"$iaY")
H.f(b,"$iaY")
return J.ln(a.a,b.a)},
$S:53}
O.hJ.prototype={
aG:function(){var u,t=this
t.cX()
u=t.f
if(!(Math.abs(u-1)<$.L().a)){t.f=1
u=new D.I(t.b,u,1,[P.t])
u.b=!0
t.a.Y(u)}}}
O.cK.prototype={
Y:function(a){return this.a.Y(H.f(a,"$iz"))},
b6:function(){return this.Y(null)},
aG:function(){},
c6:function(a){var u,t,s=this
if(!s.c.t(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aG()
u=s.a
u.a=null
u.Y(null)}}}
O.hK.prototype={}
O.bb.prototype={
dA:function(a){var u,t,s=this
if(!s.f.t(0,a)){u=s.f
s.f=a
t=new D.I(s.b+".color",u,a,[V.a8])
t.b=!0
s.a.Y(t)}},
aG:function(){this.cX()
this.dA(new V.a8(1,1,1))},
sbc:function(a,b){this.c6(new A.al(!0,this.c.b,!1))
this.dA(b)}}
O.hM.prototype={}
O.hN.prototype={
aG:function(){var u,t=this
t.cY()
u=t.ch
if(!(Math.abs(u-1)<$.L().a)){t.ch=1
u=new D.I(t.b+".refraction",u,1,[P.t])
u.b=!0
t.a.Y(u)}}}
O.hO.prototype={
dB:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.L().a)){u.ch=a
t=new D.I(u.b+".shininess",t,a,[P.t])
t.b=!0
u.a.Y(t)}},
aG:function(){this.cY()
this.dB(100)}}
O.ee.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.P():u},
Y:function(a){var u
H.f(a,"$iz")
u=this.e
if(u!=null)u.D(a)},
b6:function(){return this.Y(null)},
es:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.f(a.fr.j(0,n),"$ief")
if(u==null){t=a.a
u=new A.ef(t,n)
u.cZ(t,n)
u.eh(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.q(u.y.j(0,"fov"),"$iaa")
u.ch=H.q(u.y.j(0,"ratio"),"$iaa")
u.cx=H.q(u.y.j(0,"boxClr"),"$ia_")
u.cy=H.q(u.y.j(0,"boxTxt"),"$ibR")
u.db=H.q(u.y.j(0,"viewMat"),"$iay")
a.dM(u)}o.a=u}if(b.e==null){t=b.d.dR(new Z.eA(a.a),$.b3())
t.aK($.b3()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.a3(a)
q=o.b
p=r.Q
C.c.a6(p.a,p.d,q)
q=r.ch
C.c.a6(q.a,q.d,t/s)
s=o.c
r.cy.eP(s)
s=o.d
t=r.cx
C.c.Z(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga8(s).cw(0)
r=r.db
r.toString
r.ar(s.ak(0,!0))
t=b.e
if(t instanceof Z.cw){t.a3(a)
t.aj(a)
t.aw(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.dU()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.bP.prototype={}
T.d3.prototype={}
T.el.prototype={}
T.iV.prototype={
gp:function(){var u=this.y
return u==null?this.y=D.P():u}}
T.em.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.P():u}}
T.iW.prototype={
aU:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.o
W.ab(t,"load",H.n(new T.iX(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
hT:function(a,b,c){var u,t,s,r
b=V.du(b)
u=V.du(a.width)
t=V.du(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.lq()
s.width=u
s.height=t
r=H.f(C.j.eL(s,"2d"),"$icx")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.pU(r.getImageData(0,0,s.width,s.height))}}}
T.iX.prototype={
$1:function(a){var u=this,t=u.a,s=t.hT(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.c.jq(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.cl()}++t.e},
$S:13}
V.bl.prototype={
aL:function(a,b){return!0},
i:function(a){return"all"},
$iaB:1}
V.aB.prototype={}
V.dY.prototype={
aL:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)if(u[s].aL(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sad:function(a){this.a=H.m(a,"$ib",[V.aB],"$ab")},
$iaB:1}
V.aw.prototype={
aL:function(a,b){return!this.eV(0,b)},
i:function(a){return"!["+this.cW(0)+"]"}}
V.il.prototype={
aL:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c7(this.a),t=H.c7(this.b)
return u+".."+t},
$iaB:1}
V.iv.prototype={
f_:function(a){var u,t
if(a.a.length<=0)throw H.d(P.C("May not create a SetMatcher with zero characters."))
u=new H.a4([P.l,P.R])
for(t=new H.cJ(a,a.gn(a),[H.ao(a,"y",0)]);t.A();)u.k(0,t.d,!0)
this.shW(u)},
aL:function(a,b){return this.a.bu(0,b)},
i:function(a){var u=this.a
return P.d0(u.gab(u),0,null)},
shW:function(a){this.a=H.m(a,"$iA",[P.l,P.R],"$aA")},
$iaB:1}
V.cY.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d5(this.a.l(0,b))
r.sad(H.c([],[V.aB]))
r.c=!1
C.a.h(this.c,r)
return r},
iP:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.aL(0,a))return r}return},
i:function(a){return this.b},
sih:function(a){this.c=H.m(a,"$ib",[V.d5],"$ab")}}
V.eo.prototype={
i:function(a){var u=H.m2(this.b,"\n","\\n"),t=H.m2(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d4.prototype={
aN:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.h],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.v)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shO:function(a){var u=P.h
this.c=H.m(a,"$iA",[u,u],"$aA")}}
V.j_.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cY(this,b)
u.sih(H.c([],[V.d5]))
u.d=null
this.a.k(0,b,u)}return u},
R:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.d4(a)
u=P.h
t.shO(new H.a4([u,u]))
this.b.k(0,a,t)}return t},
eD:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.c([],[V.eo]),k=this.c,j=[P.l],i=H.c([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.E(a,s)
q=k.iP(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.d0(i,0,m)
throw H.d(P.C("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.c([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.d0(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.eo(n==null?o.b:n,p,s)}++s}}},
si5:function(a){this.a=H.m(a,"$iA",[P.h,V.cY],"$aA")},
si8:function(a){this.b=H.m(a,"$iA",[P.h,V.d4],"$aA")}}
V.d5.prototype={
i:function(a){return this.b.b+": "+this.cW(0)}}
X.fJ.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.P():u},
a2:function(a){var u=this.fr
if(u!=null)u.D(a)},
saz:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.I("width",u,b,[P.l])
u.b=!0
t.a2(u)}},
sau:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.I("height",u,b,[P.l])
u.b=!0
t.a2(u)}},
a3:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=H.ac(u.getParameter(3379))
p=V.du(s)
o=V.du(r)
q=V.du(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.c.ez(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.mJ(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.cl()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.cl()
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
a.c=C.e.a5(s*h.a)
r=t.d
a.d=C.e.a5(r*h.b)
l=t.a
k=h.c
j=C.e.a5(l*k)
t=t.b
l=h.d
u.viewport(j,C.e.a5(t*l),C.e.a5(s*k),C.e.a5(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
aw:function(a){a.a.bindFramebuffer(36160,null)}}
X.bY.prototype={$ic5:1}
X.hi.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.P():u},
a3:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.D(u)
q=C.e.a5(r*u)
r=s.b
if(typeof t!=="number")return H.D(t)
p=C.e.a5(r*t)
r=C.e.a5(s.c*u)
a.c=r
s=C.e.a5(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
aw:function(a){}}
X.ho.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.P():u},
a3:function(a){var u
a.cy.bC(V.c4())
u=V.c4()
a.db.bC(u)},
aw:function(a){a.cy.aM()
a.db.aM()},
$ic5:1,
$ibY:1}
X.e6.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.P():u},
a2:function(a){var u
H.f(a,"$iz")
u=this.f
if(u!=null)u.D(a)},
fe:function(){return this.a2(null)},
a3:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.bc(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bC(k)
r=$.my
if(r==null){r=V.mA()
q=V.lJ()
p=$.mT
r=V.mq(r,q,p==null?$.mT=new V.K(0,0,-1):p)
$.my=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aP(0,a,s)
if(t!=null)u=t.u(0,u)}a.db.bC(u)},
aw:function(a){a.cy.aM()
a.db.aM()},
$ic5:1,
$ibY:1}
X.d1.prototype={}
V.bB.prototype={
bn:function(a){this.b=new P.hm(C.Q)
this.c=null
this.sbR(H.c([],[[P.b,W.aG]]))},
O:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.aG]))
u=a.split("\n")
for(l=u.length,t=[W.aG],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.N(q)
o=m.b.fp(q,0,q.length)
n=o==null?q:o
C.O.eN(p,H.m2(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaD(m.d),p)}},
eo:function(a,b){var u,t,s,r,q=this
H.m(b,"$ib",[P.h],"$ab")
q.sbR(H.c([],[[P.b,W.aG]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bv():t).eD(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)q.bB(t[r])},
sbR:function(a){this.d=H.m(a,"$ib",[[P.b,W.aG]],"$ab")}}
V.lf.prototype={
$1:function(a){var u
H.f(a,"$ibf")
u=C.e.eC(this.a.giT(),2)
if(u!=="0.00")P.m1(u+" fps")},
$S:55}
V.fZ.prototype={
bB:function(a){var u=this
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
bv:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.j0()
a1.c=a1.l(0,r)
u=a1.l(0,r).m(0,q)
t=V.w(new H.u("_"))
C.a.h(u.a,t)
t=V.a1("a","z")
C.a.h(u.a,t)
t=V.a1("A","Z")
C.a.h(u.a,t)
t=a1.l(0,q).m(0,q)
u=V.w(new H.u("_"))
C.a.h(t.a,u)
u=V.a1("0","9")
C.a.h(t.a,u)
u=V.a1("a","z")
C.a.h(t.a,u)
u=V.a1("A","Z")
C.a.h(t.a,u)
u=a1.l(0,r).m(0,p)
t=V.a1("0","9")
C.a.h(u.a,t)
t=a1.l(0,p).m(0,p)
u=V.a1("0","9")
C.a.h(t.a,u)
u=a1.l(0,p).m(0,o)
t=V.w(new H.u("."))
C.a.h(u.a,t)
t=a1.l(0,o).m(0,n)
u=V.a1("0","9")
C.a.h(t.a,u)
u=a1.l(0,n).m(0,n)
t=V.a1("0","9")
C.a.h(u.a,t)
t=a1.l(0,r).m(0,m)
u=V.w(new H.u(l))
C.a.h(t.a,u)
u=a1.l(0,m).m(0,m)
t=V.w(new H.u(l))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,k)
u=V.w(new H.u('"'))
C.a.h(t.a,u)
u=a1.l(0,k).m(0,j)
t=V.w(new H.u('"'))
C.a.h(u.a,t)
t=a1.l(0,k).m(0,i)
u=V.w(new H.u("\\"))
C.a.h(t.a,u)
u=a1.l(0,i).m(0,k)
t=V.w(new H.u('"'))
C.a.h(u.a,t)
C.a.h(a1.l(0,k).m(0,k).a,new V.bl())
t=a1.l(0,r).m(0,h)
u=V.w(new H.u("'"))
C.a.h(t.a,u)
u=a1.l(0,h).m(0,g)
t=V.w(new H.u("'"))
C.a.h(u.a,t)
t=a1.l(0,h).m(0,f)
u=V.w(new H.u("\\"))
C.a.h(t.a,u)
u=a1.l(0,f).m(0,h)
t=V.w(new H.u("'"))
C.a.h(u.a,t)
C.a.h(a1.l(0,h).m(0,h).a,new V.bl())
t=a1.l(0,r).m(0,e)
u=V.w(new H.u("/"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,d)
t=V.w(new H.u("/"))
C.a.h(u.a,t)
t=a1.l(0,d).m(0,c)
u=V.w(new H.u("\n"))
C.a.h(t.a,u)
u=a1.l(0,d).m(0,d)
t=new V.aw()
s=[V.aB]
t.sad(H.c([],s))
C.a.h(u.a,t)
u=V.w(new H.u("\n"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,b)
t=V.w(new H.u("*"))
C.a.h(u.a,t)
t=a1.l(0,b).m(0,a)
u=V.w(new H.u("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,b)
t=new V.aw()
t.sad(H.c([],s))
C.a.h(u.a,t)
u=V.w(new H.u("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,c)
t=V.w(new H.u("/"))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,a0)
u=V.w(new H.u(" \n\t"))
C.a.h(t.a,u)
u=a1.l(0,a0).m(0,a0)
t=V.w(new H.u(" \n\t"))
C.a.h(u.a,t)
t=a1.l(0,p)
t.d=t.a.R("Num")
t=a1.l(0,n)
t.d=t.a.R("Num")
t=a1.l(0,m)
t.d=t.a.R("Symbol")
t=a1.l(0,j)
t.d=t.a.R("String")
t=a1.l(0,g)
t.d=t.a.R("String")
t=a1.l(0,c)
t.d=t.a.R(d)
t=a1.l(0,a0)
t.d=t.a.R(a0)
t=a1.l(0,q)
t=t.d=t.a.R(q)
u=[P.h]
t.aN(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aN(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aN(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.hj.prototype={
bB:function(a){var u=this
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
bv:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.j0()
e.c=e.l(0,r)
u=e.l(0,r).m(0,q)
t=V.w(new H.u("_"))
C.a.h(u.a,t)
t=V.a1("a","z")
C.a.h(u.a,t)
t=V.a1("A","Z")
C.a.h(u.a,t)
t=e.l(0,q).m(0,q)
u=V.w(new H.u("_"))
C.a.h(t.a,u)
u=V.a1("0","9")
C.a.h(t.a,u)
u=V.a1("a","z")
C.a.h(t.a,u)
u=V.a1("A","Z")
C.a.h(t.a,u)
u=e.l(0,r).m(0,p)
t=V.a1("0","9")
C.a.h(u.a,t)
t=e.l(0,p).m(0,p)
u=V.a1("0","9")
C.a.h(t.a,u)
u=e.l(0,p).m(0,o)
t=V.w(new H.u("."))
C.a.h(u.a,t)
t=e.l(0,o).m(0,n)
u=V.a1("0","9")
C.a.h(t.a,u)
u=e.l(0,n).m(0,n)
t=V.a1("0","9")
C.a.h(u.a,t)
t=e.l(0,r).m(0,m)
u=V.w(new H.u(l))
C.a.h(t.a,u)
u=e.l(0,m).m(0,m)
t=V.w(new H.u(l))
C.a.h(u.a,t)
t=e.l(0,r).m(0,k)
u=V.w(new H.u("/"))
C.a.h(t.a,u)
u=e.l(0,k).m(0,j)
t=V.w(new H.u("/"))
C.a.h(u.a,t)
C.a.h(e.l(0,k).m(0,m).a,new V.bl())
t=e.l(0,j).m(0,i)
u=V.w(new H.u("\n"))
C.a.h(t.a,u)
u=e.l(0,j).m(0,j)
t=new V.aw()
s=[V.aB]
t.sad(H.c([],s))
C.a.h(u.a,t)
u=V.w(new H.u("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.w(new H.u("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.aw()
u.sad(H.c([],s))
C.a.h(t.a,u)
t=V.w(new H.u("\n"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,g)
u=V.w(new H.u("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,f)
t=V.w(new H.u(" \n\t"))
C.a.h(u.a,t)
t=e.l(0,f).m(0,f)
u=V.w(new H.u(" \n\t"))
C.a.h(t.a,u)
u=e.l(0,p)
u.d=u.a.R("Num")
u=e.l(0,n)
u.d=u.a.R("Num")
u=e.l(0,m)
u.d=u.a.R("Symbol")
u=e.l(0,i)
u.d=u.a.R(j)
u=e.l(0,g)
u.d=u.a.R(h)
u=e.l(0,f)
u.d=u.a.R(f)
u=e.l(0,q)
u=u.d=u.a.R(q)
t=[P.h]
u.aN(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aN(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aN(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.hk.prototype={
bB:function(a){var u=this,t="#111"
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
bv:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.j0()
l.c=l.l(0,s)
u=l.l(0,s).m(0,r)
t=V.w(new H.u("_"))
C.a.h(u.a,t)
t=V.a1("a","z")
C.a.h(u.a,t)
t=V.a1("A","Z")
C.a.h(u.a,t)
t=l.l(0,r).m(0,r)
u=V.w(new H.u("_"))
C.a.h(t.a,u)
u=V.a1("0","9")
C.a.h(t.a,u)
u=V.a1("a","z")
C.a.h(t.a,u)
u=V.a1("A","Z")
C.a.h(t.a,u)
u=l.l(0,r).m(0,q)
t=V.w(new H.u("="))
C.a.h(u.a,t)
u.c=!0
u=l.l(0,s).m(0,p)
t=V.w(new H.u("</\\-!>="))
C.a.h(u.a,t)
t=l.l(0,p).m(0,p)
u=V.w(new H.u("</\\-!>="))
C.a.h(t.a,u)
u=l.l(0,s).m(0,o)
t=V.w(new H.u('"'))
C.a.h(u.a,t)
t=l.l(0,o).m(0,n)
u=V.w(new H.u('"'))
C.a.h(t.a,u)
u=l.l(0,o).m(0,"EscStr")
t=V.w(new H.u("\\"))
C.a.h(u.a,t)
t=l.l(0,"EscStr").m(0,o)
u=V.w(new H.u('"'))
C.a.h(t.a,u)
C.a.h(l.l(0,o).m(0,o).a,new V.bl())
C.a.h(l.l(0,s).m(0,m).a,new V.bl())
u=l.l(0,m).m(0,m)
t=new V.aw()
t.sad(H.c([],[V.aB]))
C.a.h(u.a,t)
u=V.w(new H.u('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.a1("a","z")
C.a.h(t.a,u)
u=V.a1("A","Z")
C.a.h(t.a,u)
u=l.l(0,p)
u.d=u.a.R("Symbol")
u=l.l(0,n)
u.d=u.a.R("String")
u=l.l(0,r)
t=u.a.R(r)
u.d=t
t.aN(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.l(0,q)
t.d=t.a.R(q)
t=l.l(0,m)
t.d=t.a.R(m)
return l}}
V.ie.prototype={
eo:function(a,b){H.m(b,"$ib",[P.h],"$ab")
this.sbR(H.c([],[[P.b,W.aG]]))
this.O(C.a.m(b,"\n"),"#111")},
bB:function(a){},
bv:function(){return}}
V.ij.prototype={
dH:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.mP().gcJ().j(0,H.i(u))
if(t==null)if(d){c.$0()
m.dF(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.m8(m.c).h(0,q)
o=W.od("radio")
o.checked=s
o.name=u
u=W.o
W.ab(o,"change",H.n(new V.ik(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.m8(m.c).h(0,r.createElement("br"))},
aB:function(a,b,c){return this.dH(a,b,c,!1)},
dF:function(a){var u,t,s=P.mP(),r=P.h,q=P.ok(s.gcJ(),r,r)
q.k(0,this.a,a)
u=s.eu(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.kk([],[]).cQ(""),"",t)}}
V.ik.prototype={
$1:function(a){var u=this
if(H.F(u.b.checked)){u.c.$0()
u.a.dF(u.d)}},
$S:13}
V.iA.prototype={
f0:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.ab(q,"scroll",H.n(new V.iC(o),{func:1,ret:-1,args:[r]}),!1,r)},
dL:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.h],"$ab")
this.i_()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eD(C.a.iZ(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.v)(s),++q){p=s[q]
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
if(H.qf(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.N(m[1])
l.textContent=H.N(m[0])
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
eK:function(a){var u,t,s,r=new V.fZ("dart")
r.bn("dart")
u=new V.hj("glsl")
u.bn("glsl")
t=new V.hk("html")
t.bn("html")
s=C.a.iR(H.c([r,u,t],[V.bB]),new V.iD(a))
if(s!=null)return s
r=new V.ie("plain")
r.bn("plain")
return r},
dI:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.m(b0,"$ib",[P.h],"$ab")
u=H.c([],[P.l])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dt(r).aa(r,"+")){C.a.k(b0,s,C.b.ah(r,1))
C.a.h(u,1)
t=!0}else if(C.b.aa(r,"-")){C.a.k(b0,s,C.b.ah(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eK(a8)
q.eo(0,b0)
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
i=W.ma()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.v)(r),++a0)C.a_.iq(a,r[a0])
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
for(a3=C.a.gU(r);a3.A();)c.appendChild(a3.gJ(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
ik:function(a){var u,t,s,r,q,p,o,n="auto"
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
s=H.f(r.insertCell(-1),"$ibe").style
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
o=H.f(r.insertCell(-1),"$ibe")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
i_:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.j0()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.w(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.aw()
r=[V.aB]
s.sad(H.c([],r))
C.a.h(t.a,s)
t=V.w(new H.u("*"))
C.a.h(s.a,t)
t=u.l(0,p).m(0,"BoldEnd")
s=V.w(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,o)
s=V.w(new H.u("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,o).m(0,o)
s=new V.aw()
s.sad(H.c([],r))
C.a.h(t.a,s)
t=V.w(new H.u("_"))
C.a.h(s.a,t)
t=u.l(0,o).m(0,n)
s=V.w(new H.u("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,m)
s=V.w(new H.u("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,m).m(0,m)
s=new V.aw()
s.sad(H.c([],r))
C.a.h(t.a,s)
t=V.w(new H.u("`"))
C.a.h(s.a,t)
t=u.l(0,m).m(0,"CodeEnd")
s=V.w(new H.u("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,l)
s=V.w(new H.u("["))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,l).m(0,k)
s=V.w(new H.u("|"))
C.a.h(t.a,s)
s=u.l(0,l).m(0,j)
t=V.w(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,l).m(0,l)
t=new V.aw()
t.sad(H.c([],r))
C.a.h(s.a,t)
s=V.w(new H.u("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.w(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.aw()
t.sad(H.c([],r))
C.a.h(s.a,t)
s=V.w(new H.u("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.bl())
s=u.l(0,i).m(0,i)
t=new V.aw()
t.sad(H.c([],r))
C.a.h(s.a,t)
s=V.w(new H.u("*_`["))
C.a.h(t.a,s)
s=u.l(0,"BoldEnd")
s.d=s.a.R(p)
s=u.l(0,n)
s.d=s.a.R(o)
s=u.l(0,"CodeEnd")
s.d=s.a.R(m)
s=u.l(0,j)
s.d=s.a.R("Link")
s=u.l(0,i)
s.d=s.a.R(i)
this.b=u}}
V.iC.prototype={
$1:function(a){P.mL(C.o,new V.iB(this.a))},
$S:13}
V.iB.prototype={
$0:function(){var u=C.e.a5(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
V.iD.prototype={
$1:function(a){return H.f(a,"$ibB").a===this.a},
$S:56}
V.l3.prototype={
$0:function(){this.a.sa9(0,F.kN(1,null,null,1))},
$S:0}
V.l4.prototype={
$0:function(){this.a.sa9(0,F.kN(15,null,new V.l2(),15))},
$S:0}
V.l2.prototype={
$3:function(a,b,c){var u,t=Math.cos(c*4*3.141592653589793+3.141592653589793),s=Math.cos(b*4*3.141592653589793+3.141592653589793),r=a.f
r=new V.K(r.a,r.b,r.c)
u=r.q(0,Math.sqrt(r.B(r)))
r=a.f
s=u.u(0,t*0.1+s*0.1)
a.sa1(0,r.C(0,new V.Z(s.a,s.b,s.c)))},
$S:5}
V.l5.prototype={
$0:function(){this.a.sa9(0,F.nh(!0,30,1))},
$S:0}
V.l6.prototype={
$0:function(){this.a.sa9(0,F.nh(!1,30,0))},
$S:0}
V.l7.prototype={
$0:function(){this.a.sa9(0,F.ni(!0,!0,25,new V.l1(),50))},
$S:0}
V.l1.prototype={
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8},
$S:11}
V.l8.prototype={
$0:function(){this.a.sa9(0,F.nx(6,null,6))},
$S:0}
V.l9.prototype={
$0:function(){this.a.sa9(0,F.nx(10,new V.l0(),10))},
$S:0}
V.l0.prototype={
$2:function(a,b){var u=a-0.5,t=b-0.5
return Math.cos(Math.sqrt(u*u+t*t)*3.141592653589793)*0.3},
$S:11}
V.la.prototype={
$0:function(){this.a.sa9(0,F.nz())},
$S:0}
V.lb.prototype={
$0:function(){this.a.sa9(0,F.q7())},
$S:0}
V.lc.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iz")
u=this.a
t=this.b
s=t.a
r=[P.h]
u.dI("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.dI("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:9};(function aliases(){var u=J.a.prototype
u.eS=u.i
u=J.dS.prototype
u.eU=u.i
u=P.j.prototype
u.eT=u.bG
u=W.U.prototype
u.bJ=u.an
u=W.f3.prototype
u.eW=u.aC
u=O.cK.prototype
u.cX=u.aG
u=O.bb.prototype
u.cY=u.aG
u=V.dY.prototype
u.eV=u.aL
u.cW=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pO","oX",14)
u(P,"pP","oY",14)
u(P,"pQ","oZ",14)
t(P,"ng","pM",3)
s(W,"q0",4,null,["$4"],["p0"],30,0)
s(W,"q1",4,null,["$4"],["p1"],30,0)
var m
r(m=E.aq.prototype,"gem",0,0,null,["$1","$0"],["en","j8"],1,0)
r(m,"gek",0,0,null,["$1","$0"],["el","j5"],1,0)
q(m,"gj3","j4",6)
q(m,"gj6","j7",6)
r(m=E.en.prototype,"gd_",0,0,null,["$1","$0"],["d1","d0"],1,0)
p(m,"gjm","ev",3)
o(m=X.eu.prototype,"gh8","h9",16)
o(m,"gfX","fY",16)
o(m,"gh2","h3",4)
o(m,"ghc","hd",34)
o(m,"gha","hb",34)
o(m,"ghg","hh",4)
o(m,"ghk","hl",4)
o(m,"gh6","h7",4)
o(m,"ghi","hj",4)
o(m,"gh4","h5",4)
o(m,"ghm","hn",36)
o(m,"gho","hp",16)
o(m,"ghE","hF",15)
o(m,"ghA","hB",15)
o(m,"ghC","hD",15)
r(D.bD.prototype,"gf5",0,0,null,["$1","$0"],["aE","f6"],1,0)
r(m=D.dU.prototype,"gdq",0,0,null,["$1","$0"],["dr","he"],1,0)
o(m,"ghq","hr",49)
q(m,"gfR","fS",29)
q(m,"ghu","hv",29)
n(V.Y.prototype,"gn","cz",26)
n(V.K.prototype,"gn","cz",26)
r(m=U.cF.prototype,"gaV",0,0,null,["$1","$0"],["G","ae"],1,0)
q(m,"gf8","f9",23)
q(m,"ghs","ht",23)
r(m=U.ev.prototype,"gaV",0,0,null,["$1","$0"],["G","ae"],1,0)
o(m,"gbU","bV",2)
o(m,"gbW","bX",2)
o(m,"gbY","bZ",2)
r(m=U.ew.prototype,"gaV",0,0,null,["$1","$0"],["G","ae"],1,0)
o(m,"gbU","bV",2)
o(m,"gbW","bX",2)
o(m,"gbY","bZ",2)
o(m,"gfK","fL",2)
o(m,"gfM","fN",2)
o(m,"gie","ig",2)
o(m,"gib","ic",2)
o(m,"gi9","ia",2)
o(U.ex.prototype,"gfP","fQ",2)
r(m=M.dF.prototype,"ga_",0,0,null,["$1","$0"],["a0","b5"],1,0)
q(m,"ghw","hx",22)
q(m,"ghy","hz",22)
r(M.dH.prototype,"ga_",0,0,null,["$1","$0"],["a0","b5"],1,0)
r(m=M.dL.prototype,"ga_",0,0,null,["$1","$0"],["a0","b5"],1,0)
q(m,"gfZ","h_",6)
q(m,"gh0","h1",6)
r(m=O.e_.prototype,"gaS",0,0,null,["$1","$0"],["Y","b6"],1,0)
r(m,"ghR",0,0,null,["$1","$0"],["dw","hS"],1,0)
q(m,"gfT","fU",32)
q(m,"gfV","fW",32)
r(O.cK.prototype,"gaS",0,0,null,["$1","$0"],["Y","b6"],1,0)
r(O.ee.prototype,"gaS",0,0,null,["$1","$0"],["Y","b6"],1,0)
r(X.e6.prototype,"gfd",0,0,null,["$1","$0"],["a2","fe"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.V,null)
s(P.V,[H.lz,J.a,J.au,P.eR,P.j,H.cJ,P.b7,H.c1,H.d8,H.fS,H.j5,P.bF,H.cy,H.f8,P.ag,H.hx,H.hz,H.hs,P.fe,P.bj,P.aN,P.eB,P.iL,P.d_,P.iM,P.bf,P.ap,P.kA,P.ke,P.ce,P.eQ,P.y,P.ks,P.hF,P.c_,P.hn,P.ky,P.kx,P.R,P.aA,P.ad,P.bE,P.ic,P.ei,P.eJ,P.hh,P.bG,P.b,P.A,P.O,P.ax,P.h,P.a7,P.cf,P.jk,P.kh,W.fV,W.bS,W.H,W.e4,W.f3,W.kn,W.dN,W.aD,W.kd,W.fm,P.kj,P.fj,P.k8,P.S,O.a3,O.cL,E.fM,E.aq,E.im,E.en,Z.ez,Z.eA,Z.cw,Z.bH,Z.bs,D.fP,D.c0,D.z,X.dE,X.dT,X.hu,X.hC,X.aC,X.i0,X.j1,X.eu,D.bD,D.af,D.e7,D.eh,V.a8,V.ae,V.h8,V.e0,V.av,V.a6,V.Z,V.aI,V.cV,V.Y,V.K,U.ev,U.ew,U.ex,M.dH,M.dL,M.aE,A.dB,A.fE,A.al,A.aQ,A.aU,A.aY,A.hL,A.ca,A.cb,A.cc,A.eq,A.je,F.a9,F.hb,F.bp,F.hw,F.bN,F.ed,F.ix,F.iy,F.iz,F.ar,F.jw,F.jx,F.jA,F.jC,F.jD,F.jE,O.bP,O.cK,O.hM,T.iW,V.bl,V.aB,V.dY,V.il,V.iv,V.cY,V.eo,V.d4,V.j_,X.d1,X.bY,X.ho,X.e6,V.bB,V.ij,V.iA])
s(J.a,[J.hr,J.dR,J.dS,J.b8,J.cI,J.bK,H.cO,H.bM,W.k,W.fB,W.bX,W.cx,W.b5,W.b6,W.X,W.eD,W.h_,W.h0,W.eF,W.dK,W.eH,W.h2,W.o,W.eK,W.aR,W.hl,W.eM,W.bo,W.dW,W.hV,W.eS,W.eT,W.aS,W.eU,W.eX,W.aT,W.f0,W.f2,W.aW,W.f4,W.aX,W.f9,W.aJ,W.fc,W.iZ,W.b_,W.ff,W.j3,W.jp,W.fn,W.fp,W.fr,W.ft,W.fv,P.ba,P.eO,P.bd,P.eZ,P.ii,P.fa,P.bg,P.fh,P.fF,P.eC,P.dC,P.dO,P.e8,P.ea,P.c9,P.ec,P.ek,P.er,P.f6])
s(J.dS,[J.id,J.cd,J.bL])
t(J.ly,J.b8)
s(J.cI,[J.dQ,J.dP])
t(P.hB,P.eR)
s(P.hB,[H.es,W.jP,W.as,P.hd])
t(H.u,H.es)
s(P.j,[H.h5,H.hG,H.da])
s(H.h5,[H.c3,H.hy])
s(P.b7,[H.hH,H.jI])
t(H.hI,H.c3)
t(H.fT,H.fS)
s(P.bF,[H.i9,H.ht,H.ji,H.j7,H.fO,H.it,P.fD,P.e5,P.aP,P.jj,P.jg,P.cZ,P.fR,P.fY])
s(H.cy,[H.lk,H.iS,H.kW,H.kX,H.kY,P.jL,P.jK,P.jM,P.jN,P.kr,P.kq,P.jW,P.k_,P.jX,P.jY,P.jZ,P.k2,P.k3,P.k1,P.k0,P.iN,P.iO,P.kK,P.kb,P.ka,P.kc,P.hA,P.hE,P.h3,P.h4,P.jo,P.jl,P.jm,P.jn,P.kt,P.ku,P.kw,P.kv,P.kE,P.kD,P.kF,P.kG,W.h6,W.hX,W.hZ,W.is,W.iK,W.jV,W.i7,W.i6,W.kf,W.kg,W.kp,W.kz,P.kl,P.kM,P.he,P.hf,P.fH,E.io,E.ip,E.iq,E.iY,D.h9,D.ha,F.kB,F.kO,F.kQ,F.kR,F.kS,F.lg,F.lh,F.lj,F.l_,F.kP,F.jG,F.jF,F.jy,F.jz,O.hP,O.hQ,O.hR,O.hS,O.hT,O.hU,T.iX,V.lf,V.ik,V.iC,V.iB,V.iD,V.l3,V.l4,V.l2,V.l5,V.l6,V.l7,V.l1,V.l8,V.l9,V.l0,V.la,V.lb,V.lc])
s(H.iS,[H.iI,H.cu])
t(H.jJ,P.fD)
t(P.hD,P.ag)
s(P.hD,[H.a4,W.jO])
t(H.e1,H.bM)
s(H.e1,[H.df,H.dh])
t(H.dg,H.df)
t(H.cP,H.dg)
t(H.di,H.dh)
t(H.e2,H.di)
s(H.e2,[H.i1,H.i2,H.i3,H.i4,H.i5,H.e3,H.cQ])
t(P.k9,P.kA)
t(P.k7,P.ke)
t(P.fk,P.hF)
t(P.et,P.fk)
s(P.c_,[P.fK,P.h7])
t(P.bC,P.iM)
s(P.bC,[P.fL,P.hm,P.js,P.jr])
t(P.jq,P.h7)
s(P.ad,[P.t,P.l])
s(P.aP,[P.c8,P.hp])
t(P.jR,P.cf)
s(W.k,[W.G,W.hc,W.cM,W.aV,W.dj,W.aZ,W.aK,W.dl,W.jH,W.db,P.fI,P.bW])
s(W.G,[W.U,W.bA,W.dc])
s(W.U,[W.x,P.p])
s(W.x,[W.dz,W.fC,W.ct,W.bz,W.bZ,W.aG,W.hg,W.cG,W.cH,W.iu,W.be,W.ej,W.iQ,W.iR,W.d2])
s(W.b5,[W.cz,W.fW,W.fX])
t(W.fU,W.b6)
t(W.cA,W.eD)
t(W.eG,W.eF)
t(W.dJ,W.eG)
t(W.eI,W.eH)
t(W.h1,W.eI)
t(W.aH,W.bX)
t(W.eL,W.eK)
t(W.cD,W.eL)
t(W.eN,W.eM)
t(W.c2,W.eN)
t(W.bQ,W.o)
s(W.bQ,[W.b9,W.ah,W.b0])
t(W.hW,W.eS)
t(W.hY,W.eT)
t(W.eV,W.eU)
t(W.i_,W.eV)
t(W.eY,W.eX)
t(W.cR,W.eY)
t(W.f1,W.f0)
t(W.ig,W.f1)
t(W.ir,W.f2)
t(W.dk,W.dj)
t(W.iF,W.dk)
t(W.f5,W.f4)
t(W.iG,W.f5)
t(W.iJ,W.f9)
t(W.fd,W.fc)
t(W.iT,W.fd)
t(W.dm,W.dl)
t(W.iU,W.dm)
t(W.fg,W.ff)
t(W.j2,W.fg)
t(W.bi,W.ah)
t(W.fo,W.fn)
t(W.jQ,W.fo)
t(W.eE,W.dK)
t(W.fq,W.fp)
t(W.k4,W.fq)
t(W.fs,W.fr)
t(W.eW,W.fs)
t(W.fu,W.ft)
t(W.ki,W.fu)
t(W.fw,W.fv)
t(W.km,W.fw)
t(W.jS,W.jO)
t(W.jT,P.iL)
t(W.lL,W.jT)
t(W.jU,P.d_)
t(W.ko,W.f3)
t(P.kk,P.kj)
t(P.am,P.k8)
t(P.eP,P.eO)
t(P.hv,P.eP)
t(P.f_,P.eZ)
t(P.ia,P.f_)
t(P.cW,P.p)
t(P.fb,P.fa)
t(P.iP,P.fb)
t(P.fi,P.fh)
t(P.j4,P.fi)
t(P.fG,P.eC)
t(P.ib,P.bW)
t(P.f7,P.f6)
t(P.iH,P.f7)
s(E.fM,[Z.dD,A.cX,T.d3])
s(D.z,[D.bI,D.bJ,D.I,X.ih])
s(X.ih,[X.dX,X.bq,X.cN,X.ep])
s(O.a3,[D.dU,U.cF,M.dF])
s(D.fP,[U.fQ,U.ai])
s(U.ai,[U.dG,U.eb])
s(A.cX,[A.dZ,A.ef])
s(A.eq,[A.aL,A.jb,A.jc,A.jd,A.j9,A.aa,A.ja,A.a_,A.d6,A.jf,A.d7,A.ay,A.an,A.bR])
t(F.iE,F.hb)
t(F.j8,F.hw)
t(F.jB,F.jC)
t(F.i8,F.jD)
s(O.bP,[O.e_,O.ee])
s(O.cK,[O.hJ,O.hK,O.bb])
s(O.bb,[O.hN,O.hO])
s(T.d3,[T.el,T.em])
t(T.iV,T.el)
s(V.dY,[V.aw,V.d5])
s(X.d1,[X.fJ,X.hi])
s(V.bB,[V.fZ,V.hj,V.hk,V.ie])
u(H.es,H.d8)
u(H.df,P.y)
u(H.dg,H.c1)
u(H.dh,P.y)
u(H.di,H.c1)
u(P.eR,P.y)
u(P.fk,P.ks)
u(W.eD,W.fV)
u(W.eF,P.y)
u(W.eG,W.H)
u(W.eH,P.y)
u(W.eI,W.H)
u(W.eK,P.y)
u(W.eL,W.H)
u(W.eM,P.y)
u(W.eN,W.H)
u(W.eS,P.ag)
u(W.eT,P.ag)
u(W.eU,P.y)
u(W.eV,W.H)
u(W.eX,P.y)
u(W.eY,W.H)
u(W.f0,P.y)
u(W.f1,W.H)
u(W.f2,P.ag)
u(W.dj,P.y)
u(W.dk,W.H)
u(W.f4,P.y)
u(W.f5,W.H)
u(W.f9,P.ag)
u(W.fc,P.y)
u(W.fd,W.H)
u(W.dl,P.y)
u(W.dm,W.H)
u(W.ff,P.y)
u(W.fg,W.H)
u(W.fn,P.y)
u(W.fo,W.H)
u(W.fp,P.y)
u(W.fq,W.H)
u(W.fr,P.y)
u(W.fs,W.H)
u(W.ft,P.y)
u(W.fu,W.H)
u(W.fv,P.y)
u(W.fw,W.H)
u(P.eO,P.y)
u(P.eP,W.H)
u(P.eZ,P.y)
u(P.f_,W.H)
u(P.fa,P.y)
u(P.fb,W.H)
u(P.fh,P.y)
u(P.fi,W.H)
u(P.eC,P.ag)
u(P.f6,P.y)
u(P.f7,W.H)})()
var v={mangledGlobalNames:{l:"int",t:"double",ad:"num",h:"String",R:"bool",O:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.O},{func:1,ret:-1,opt:[D.z]},{func:1,ret:-1,args:[D.z]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ah]},{func:1,ret:P.O,args:[F.ar,P.t,P.t]},{func:1,ret:-1,args:[P.l,[P.j,E.aq]]},{func:1,ret:P.O,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:P.O,args:[D.z]},{func:1,ret:P.O,args:[F.a9]},{func:1,ret:P.t,args:[P.t,P.t]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:P.O,args:[W.o]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b0]},{func:1,ret:-1,args:[W.o]},{func:1,ret:P.h,args:[P.l]},{func:1,ret:V.Z,args:[P.t]},{func:1,ret:P.t,args:[P.t]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:-1,args:[P.l,[P.j,M.aE]]},{func:1,ret:-1,args:[P.l,[P.j,U.ai]]},{func:1,args:[,]},{func:1,ret:P.R,args:[W.G]},{func:1,ret:P.t},{func:1,ret:P.R,args:[W.aD]},{func:1,ret:P.R,args:[P.h]},{func:1,ret:-1,args:[P.l,[P.j,D.af]]},{func:1,ret:P.R,args:[W.U,P.h,P.h,W.bS]},{func:1,ret:P.O,args:[,]},{func:1,ret:-1,args:[P.l,[P.j,V.av]]},{func:1,ret:P.O,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:-1,args:[W.b9]},{func:1,ret:P.O,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bi]},{func:1,ret:P.O,args:[P.ad]},{func:1,ret:W.U,args:[W.G]},{func:1,ret:-1,args:[W.G,W.G]},{func:1,args:[W.o]},{func:1,ret:P.S,args:[P.l]},{func:1,args:[,P.h]},{func:1,ret:P.O,args:[P.h,,]},{func:1,args:[P.h]},{func:1,ret:P.O,args:[P.h]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.l]},{func:1,ret:P.R,args:[[P.j,D.af]]},{func:1,ret:[P.A,P.h,P.h],args:[[P.A,P.h,P.h],P.h]},{func:1,ret:P.l,args:[A.aQ,A.aQ]},{func:1,ret:P.l,args:[A.aU,A.aU]},{func:1,ret:P.l,args:[A.aY,A.aY]},{func:1,ret:[P.aN,,],args:[,]},{func:1,ret:P.O,args:[P.bf]},{func:1,ret:P.R,args:[V.bB]},{func:1,ret:P.O,args:[,],opt:[P.ax]},{func:1,ret:P.S,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bz.prototype
C.j=W.bZ.prototype
C.O=W.aG.prototype
C.R=J.a.prototype
C.a=J.b8.prototype
C.S=J.dP.prototype
C.d=J.dQ.prototype
C.k=J.dR.prototype
C.e=J.cI.prototype
C.b=J.bK.prototype
C.T=J.bL.prototype
C.Z=W.cR.prototype
C.B=J.id.prototype
C.c=P.c9.prototype
C.a_=W.be.prototype
C.C=W.ej.prototype
C.r=J.cd.prototype
C.D=W.bi.prototype
C.E=W.db.prototype
C.a0=new P.fL()
C.F=new P.fK()
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

C.M=new P.ic()
C.h=new P.jq()
C.N=new P.js()
C.f=new P.k9()
C.o=new P.bE(0)
C.P=new P.bE(5e6)
C.Q=new P.hn("element",!1,!1,!1)
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
C.Y=new H.fT(0,{},C.x,[P.h,P.h])})();(function staticFields(){$.b4=0
$.cv=null
$.mc=null
$.lR=!1
$.no=null
$.ne=null
$.nv=null
$.kT=null
$.kZ=null
$.m_=null
$.ci=null
$.dq=null
$.dr=null
$.lS=!1
$.a2=C.f
$.az=[]
$.bn=null
$.lu=null
$.mh=null
$.mg=null
$.de=P.lB(P.h,P.bG)
$.mv=null
$.mz=null
$.cS=null
$.mF=null
$.mS=null
$.mV=null
$.mU=null
$.jt=null
$.ju=null
$.jv=null
$.mT=null
$.my=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"qn","nB",function(){return H.nn("_$dart_dartClosure")})
u($,"qo","m4",function(){return H.nn("_$dart_js")})
u($,"qt","nC",function(){return H.bh(H.j6({
toString:function(){return"$receiver$"}}))})
u($,"qu","nD",function(){return H.bh(H.j6({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"qv","nE",function(){return H.bh(H.j6(null))})
u($,"qw","nF",function(){return H.bh(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qz","nI",function(){return H.bh(H.j6(void 0))})
u($,"qA","nJ",function(){return H.bh(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qy","nH",function(){return H.bh(H.mN(null))})
u($,"qx","nG",function(){return H.bh(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qC","nL",function(){return H.bh(H.mN(void 0))})
u($,"qB","nK",function(){return H.bh(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qT","m5",function(){return P.oW()})
u($,"qF","nM",function(){return P.oS()})
u($,"qU","nQ",function(){return H.oq(H.ch(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"qW","nS",function(){return P.oE("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qX","nT",function(){return P.pl()})
u($,"qV","nR",function(){return P.mn(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"qM","nP",function(){return Z.aM(0)})
u($,"qG","nN",function(){return Z.aM(511)})
u($,"qO","b3",function(){return Z.aM(1)})
u($,"qN","bw",function(){return Z.aM(2)})
u($,"qI","bv",function(){return Z.aM(4)})
u($,"qP","bx",function(){return Z.aM(8)})
u($,"qQ","bV",function(){return Z.aM(16)})
u($,"qJ","dv",function(){return Z.aM(32)})
u($,"qK","dw",function(){return Z.aM(64)})
u($,"qL","nO",function(){return Z.aM(96)})
u($,"qR","cs",function(){return Z.aM(128)})
u($,"qH","bu",function(){return Z.aM(256)})
u($,"qm","nA",function(){return new V.h8(1e-9)})
u($,"ql","L",function(){return $.nA()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cO,DataView:H.bM,ArrayBufferView:H.bM,Float32Array:H.cP,Float64Array:H.cP,Int16Array:H.i1,Int32Array:H.i2,Int8Array:H.i3,Uint16Array:H.i4,Uint32Array:H.i5,Uint8ClampedArray:H.e3,CanvasPixelArray:H.e3,Uint8Array:H.cQ,HTMLAudioElement:W.x,HTMLBRElement:W.x,HTMLButtonElement:W.x,HTMLContentElement:W.x,HTMLDListElement:W.x,HTMLDataElement:W.x,HTMLDataListElement:W.x,HTMLDetailsElement:W.x,HTMLDialogElement:W.x,HTMLEmbedElement:W.x,HTMLFieldSetElement:W.x,HTMLHRElement:W.x,HTMLHeadElement:W.x,HTMLHeadingElement:W.x,HTMLHtmlElement:W.x,HTMLIFrameElement:W.x,HTMLLIElement:W.x,HTMLLabelElement:W.x,HTMLLegendElement:W.x,HTMLLinkElement:W.x,HTMLMapElement:W.x,HTMLMediaElement:W.x,HTMLMenuElement:W.x,HTMLMetaElement:W.x,HTMLMeterElement:W.x,HTMLModElement:W.x,HTMLOListElement:W.x,HTMLObjectElement:W.x,HTMLOptGroupElement:W.x,HTMLOptionElement:W.x,HTMLOutputElement:W.x,HTMLParagraphElement:W.x,HTMLParamElement:W.x,HTMLPictureElement:W.x,HTMLPreElement:W.x,HTMLProgressElement:W.x,HTMLQuoteElement:W.x,HTMLScriptElement:W.x,HTMLShadowElement:W.x,HTMLSlotElement:W.x,HTMLSourceElement:W.x,HTMLSpanElement:W.x,HTMLStyleElement:W.x,HTMLTableCaptionElement:W.x,HTMLTableColElement:W.x,HTMLTextAreaElement:W.x,HTMLTimeElement:W.x,HTMLTitleElement:W.x,HTMLTrackElement:W.x,HTMLUListElement:W.x,HTMLUnknownElement:W.x,HTMLVideoElement:W.x,HTMLDirectoryElement:W.x,HTMLFontElement:W.x,HTMLFrameElement:W.x,HTMLFrameSetElement:W.x,HTMLMarqueeElement:W.x,HTMLElement:W.x,AccessibleNodeList:W.fB,HTMLAnchorElement:W.dz,HTMLAreaElement:W.fC,HTMLBaseElement:W.ct,Blob:W.bX,HTMLBodyElement:W.bz,HTMLCanvasElement:W.bZ,CanvasRenderingContext2D:W.cx,CDATASection:W.bA,CharacterData:W.bA,Comment:W.bA,ProcessingInstruction:W.bA,Text:W.bA,CSSNumericValue:W.cz,CSSUnitValue:W.cz,CSSPerspective:W.fU,CSSCharsetRule:W.X,CSSConditionRule:W.X,CSSFontFaceRule:W.X,CSSGroupingRule:W.X,CSSImportRule:W.X,CSSKeyframeRule:W.X,MozCSSKeyframeRule:W.X,WebKitCSSKeyframeRule:W.X,CSSKeyframesRule:W.X,MozCSSKeyframesRule:W.X,WebKitCSSKeyframesRule:W.X,CSSMediaRule:W.X,CSSNamespaceRule:W.X,CSSPageRule:W.X,CSSRule:W.X,CSSStyleRule:W.X,CSSSupportsRule:W.X,CSSViewportRule:W.X,CSSStyleDeclaration:W.cA,MSStyleCSSProperties:W.cA,CSS2Properties:W.cA,CSSImageValue:W.b5,CSSKeywordValue:W.b5,CSSPositionValue:W.b5,CSSResourceValue:W.b5,CSSURLImageValue:W.b5,CSSStyleValue:W.b5,CSSMatrixComponent:W.b6,CSSRotation:W.b6,CSSScale:W.b6,CSSSkew:W.b6,CSSTranslation:W.b6,CSSTransformComponent:W.b6,CSSTransformValue:W.fW,CSSUnparsedValue:W.fX,DataTransferItemList:W.h_,HTMLDivElement:W.aG,DOMException:W.h0,ClientRectList:W.dJ,DOMRectList:W.dJ,DOMRectReadOnly:W.dK,DOMStringList:W.h1,DOMTokenList:W.h2,Element:W.U,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,XMLHttpRequest:W.k,XMLHttpRequestEventTarget:W.k,XMLHttpRequestUpload:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.aH,FileList:W.cD,FileWriter:W.hc,HTMLFormElement:W.hg,Gamepad:W.aR,History:W.hl,HTMLCollection:W.c2,HTMLFormControlsCollection:W.c2,HTMLOptionsCollection:W.c2,ImageData:W.bo,HTMLImageElement:W.cG,HTMLInputElement:W.cH,KeyboardEvent:W.b9,Location:W.dW,MediaList:W.hV,MessagePort:W.cM,MIDIInputMap:W.hW,MIDIOutputMap:W.hY,MimeType:W.aS,MimeTypeArray:W.i_,PointerEvent:W.ah,MouseEvent:W.ah,DragEvent:W.ah,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cR,RadioNodeList:W.cR,Plugin:W.aT,PluginArray:W.ig,RTCStatsReport:W.ir,HTMLSelectElement:W.iu,SourceBuffer:W.aV,SourceBufferList:W.iF,SpeechGrammar:W.aW,SpeechGrammarList:W.iG,SpeechRecognitionResult:W.aX,Storage:W.iJ,CSSStyleSheet:W.aJ,StyleSheet:W.aJ,HTMLTableCellElement:W.be,HTMLTableDataCellElement:W.be,HTMLTableHeaderCellElement:W.be,HTMLTableElement:W.ej,HTMLTableRowElement:W.iQ,HTMLTableSectionElement:W.iR,HTMLTemplateElement:W.d2,TextTrack:W.aZ,TextTrackCue:W.aK,VTTCue:W.aK,TextTrackCueList:W.iT,TextTrackList:W.iU,TimeRanges:W.iZ,Touch:W.b_,TouchEvent:W.b0,TouchList:W.j2,TrackDefaultList:W.j3,CompositionEvent:W.bQ,FocusEvent:W.bQ,TextEvent:W.bQ,UIEvent:W.bQ,URL:W.jp,VideoTrackList:W.jH,WheelEvent:W.bi,Window:W.db,DOMWindow:W.db,Attr:W.dc,CSSRuleList:W.jQ,ClientRect:W.eE,DOMRect:W.eE,GamepadList:W.k4,NamedNodeMap:W.eW,MozNamedAttrMap:W.eW,SpeechRecognitionResultList:W.ki,StyleSheetList:W.km,SVGLength:P.ba,SVGLengthList:P.hv,SVGNumber:P.bd,SVGNumberList:P.ia,SVGPointList:P.ii,SVGScriptElement:P.cW,SVGStringList:P.iP,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bg,SVGTransformList:P.j4,AudioBuffer:P.fF,AudioParamMap:P.fG,AudioTrackList:P.fI,AudioContext:P.bW,webkitAudioContext:P.bW,BaseAudioContext:P.bW,OfflineAudioContext:P.ib,WebGLBuffer:P.dC,WebGLFramebuffer:P.dO,WebGLProgram:P.e8,WebGLRenderbuffer:P.ea,WebGL2RenderingContext:P.c9,WebGLShader:P.ec,WebGLTexture:P.ek,WebGLUniformLocation:P.er,SQLResultSetRowList:P.iH})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e1.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
H.e2.$nativeSuperclassTag="ArrayBufferView"
W.dj.$nativeSuperclassTag="EventTarget"
W.dk.$nativeSuperclassTag="EventTarget"
W.dl.$nativeSuperclassTag="EventTarget"
W.dm.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(V.nr,[])
else V.nr([])})})()
//# sourceMappingURL=test.dart.js.map
