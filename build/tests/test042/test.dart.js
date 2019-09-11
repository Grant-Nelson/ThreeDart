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
a[c]=function(){a[c]=function(){H.nv(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ka"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ka"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ka(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jV:function jV(){},
kt:function(){return new P.hV("No element")},
dO:function(a,b,c,d,e){if(c-b<=32)H.mi(a,b,c,d,e)
else H.mh(a,b,c,d,e)},
mi:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.d(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.d(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a7()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.d(a,q)
C.a.m(a,s,a[q])
s=q}C.a.m(a,s,t)}},
mh:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.e.a4(a4-a3+1,6),d=a3+e,c=a4-e,b=C.e.a4(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
r=p}C.a.m(a2,d,u)
C.a.m(a2,b,s)
C.a.m(a2,c,q)
if(a3<0||a3>=a2.length)return H.d(a2,a3)
C.a.m(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.d(a2,a4)
C.a.m(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.G(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.ae()
if(k<0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.m(a2,m,a2[o])
C.a.m(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a7()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.d(a2,o)
C.a.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.d(a2,n)
C.a.m(a2,o,a2[n])
C.a.m(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.d(a2,n)
C.a.m(a2,m,a2[n])
C.a.m(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.ae()
if(g<0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.m(a2,m,a2[o])
C.a.m(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a7()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a7()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.ae()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.d(a2,o)
C.a.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.d(a2,n)
C.a.m(a2,o,a2[n])
C.a.m(a2,n,l)
o=i}else{if(n>=a1)return H.d(a2,n)
C.a.m(a2,m,a2[n])
C.a.m(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.d(a2,a1)
C.a.m(a2,a3,a2[a1])
C.a.m(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.d(a2,a1)
C.a.m(a2,a4,a2[a1])
C.a.m(a2,a1,r)
H.dO(a2,a3,o-2,a5,a6)
H.dO(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.d(a2,o)
if(!J.G(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.d(a2,n)
if(!J.G(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.m(a2,m,a2[o])
C.a.m(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.ae()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.d(a2,o)
C.a.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.d(a2,n)
C.a.m(a2,o,a2[n])
C.a.m(a2,n,l)
o=i}else{if(n>=a1)return H.d(a2,n)
C.a.m(a2,m,a2[n])
C.a.m(a2,n,l)}n=j
break}}}H.dO(a2,o,n,a5,a6)}else H.dO(a2,o,n,a5,a6)},
a0:function a0(a){this.a=a},
fv:function fv(){},
dx:function dx(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
h_:function h_(a,b,c){this.a=a
this.b=b
this.$ti=c},
h0:function h0(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
iK:function iK(a,b,c){this.a=a
this.b=b
this.$ti=c},
iL:function iL(a,b,c){this.a=a
this.b=b
this.$ti=c},
bQ:function bQ(){},
e_:function e_(){},
dZ:function dZ(){},
ca:function(a){var u,t=H.nw(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
ne:function(a){return v.types[H.a8(a)]},
nj:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.V(a).$iJ},
h:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aw(a)
if(typeof u!=="string")throw H.i(H.bn(a))
return u},
cz:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
cA:function(a){return H.m3(a)+H.k7(H.bK(a),0,null)},
m3:function(a){var u,t,s,r,q,p,o,n=J.V(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.F||!!n.$icJ){r=C.m(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.ca(t.length>1&&C.d.ba(t,0)===36?C.d.aT(t,1):t)},
kF:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
mc:function(a){var u,t,s,r=H.c([],[P.t])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.w)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.bn(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.bd(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.i(H.bn(s))}return H.kF(r)},
kG:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.bn(s))
if(s<0)throw H.i(H.bn(s))
if(s>65535)return H.mc(a)}return H.kF(a)},
mb:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.bd(u,10))>>>0,56320|u&1023)}throw H.i(P.aY(a,0,1114111,null,null))},
bV:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ma:function(a){var u=H.bV(a).getFullYear()+0
return u},
m8:function(a){var u=H.bV(a).getMonth()+1
return u},
m4:function(a){var u=H.bV(a).getDate()+0
return u},
m5:function(a){var u=H.bV(a).getHours()+0
return u},
m7:function(a){var u=H.bV(a).getMinutes()+0
return u},
m9:function(a){var u=H.bV(a).getSeconds()+0
return u},
m6:function(a){var u=H.bV(a).getMilliseconds()+0
return u},
E:function(a){throw H.i(H.bn(a))},
d:function(a,b){if(a==null)J.cd(a)
throw H.i(H.c6(a,b))},
c6:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aL(!0,b,s,null)
u=H.a8(J.cd(a))
if(!(b<0)){if(typeof u!=="number")return H.E(u)
t=b>=u}else t=!0
if(t)return P.S(b,a,s,null,u)
return P.dI(b,s)},
n8:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bW(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bW(a,c,!0,b,"end",u)
return new P.aL(!0,b,"end",null)},
bn:function(a){return new P.aL(!0,a,null,null)},
n3:function(a){if(typeof a!=="number")throw H.i(H.bn(a))
return a},
i:function(a){var u
if(a==null)a=new P.dF()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lq})
u.name=""}else u.toString=H.lq
return u},
lq:function(){return J.aw(this.dartException)},
z:function(a){throw H.i(a)},
w:function(a){throw H.i(P.cj(a))},
b4:function(a){var u,t,s,r,q,p
a=H.ln(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.n])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ih(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ii:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kQ:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kB:function(a,b){return new H.hs(a,b==null?null:b.method)},
jW:function(a,b){var u=b==null,t=u?null:b.method
return new H.fP(a,t,u?null:b.receiver)},
bL:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jJ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.bd(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jW(H.h(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kB(H.h(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lt()
q=$.lu()
p=$.lv()
o=$.lw()
n=$.lz()
m=$.lA()
l=$.ly()
$.lx()
k=$.lC()
j=$.lB()
i=r.aj(u)
if(i!=null)return f.$1(H.jW(H.aa(u),i))
else{i=q.aj(u)
if(i!=null){i.method="call"
return f.$1(H.jW(H.aa(u),i))}else{i=p.aj(u)
if(i==null){i=o.aj(u)
if(i==null){i=n.aj(u)
if(i==null){i=m.aj(u)
if(i==null){i=l.aj(u)
if(i==null){i=o.aj(u)
if(i==null){i=k.aj(u)
if(i==null){i=j.aj(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kB(H.aa(u),i))}}return f.$1(new H.it(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dQ()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aL(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dQ()
return a},
c8:function(a){var u
if(a==null)return new H.eD(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eD(a)},
nb:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
ni:function(a,b,c,d,e,f){H.j(a,"$ijR")
switch(H.a8(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.x("Unsupported number of arguments for wrapped closure"))},
c5:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ni)
a.$identity=u
return u},
lP:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hW().constructor.prototype):Object.create(new H.ce(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aM
if(typeof t!=="number")return t.F()
$.aM=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.km(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.lL(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.km(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
lL:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.ne,a)
if(typeof a=="function")if(b)return a
else{u=c?H.kl:H.jN
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.i("Error in functionType of tearoff")},
lM:function(a,b,c,d){var u=H.jN
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
km:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lO(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lM(t,!r,u,b)
if(t===0){r=$.aM
if(typeof r!=="number")return r.F()
$.aM=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cf
return new Function(r+H.h(q==null?$.cf=H.fd("self"):q)+";return "+p+"."+H.h(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aM
if(typeof r!=="number")return r.F()
$.aM=r+1
o+=r
r="return function("+o+"){return this."
q=$.cf
return new Function(r+H.h(q==null?$.cf=H.fd("self"):q)+"."+H.h(u)+"("+o+");}")()},
lN:function(a,b,c,d){var u=H.jN,t=H.kl
switch(b?-1:a){case 0:throw H.i(H.mf("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lO:function(a,b){var u,t,s,r,q,p,o,n=$.cf
if(n==null)n=$.cf=H.fd("self")
u=$.kk
if(u==null)u=$.kk=H.fd("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lN(s,!q,t,b)
if(s===1){n="return function(){return this."+H.h(n)+"."+H.h(t)+"(this."+H.h(u)+");"
u=$.aM
if(typeof u!=="number")return u.F()
$.aM=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.h(n)+"."+H.h(t)+"(this."+H.h(u)+", "+o+");"
u=$.aM
if(typeof u!=="number")return u.F()
$.aM=u+1
return new Function(n+u+"}")()},
ka:function(a,b,c,d,e,f,g){return H.lP(a,b,c,d,!!e,!!f,g)},
jN:function(a){return a.a},
kl:function(a){return a.c},
fd:function(a){var u,t,s,r=new H.ce("self","target","receiver","name"),q=J.jT(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
B:function(a){if(a==null)H.n_("boolean expression must not be null")
return a},
aa:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.b5(a,"String"))},
o8:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.b5(a,"double"))},
lj:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.b5(a,"num"))},
la:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.b5(a,"bool"))},
a8:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.b5(a,"int"))},
ll:function(a,b){throw H.i(H.b5(a,H.ca(H.aa(b).substring(2))))},
np:function(a,b){throw H.i(H.lK(a,H.ca(H.aa(b).substring(2))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.V(a)[b])return a
H.ll(a,b)},
m:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.V(a)[b]
else u=!0
if(u)return a
H.np(a,b)},
nk:function(a,b){var u
if(a==null)return a
u=J.V(a)
if(!!u.$ib)return a
if(u[b])return a
H.ll(a,b)},
le:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a8(u)]
else return a.$S()}return},
eZ:function(a,b){var u
if(typeof a=="function")return!0
u=H.le(J.V(a))
if(u==null)return!1
return H.l1(u,null,b,null)},
o:function(a,b){var u,t
if(a==null)return a
if($.k4)return a
$.k4=!0
try{if(H.eZ(a,b))return a
u=H.jE(b)
t=H.b5(a,u)
throw H.i(t)}finally{$.k4=!1}},
kb:function(a,b){if(a!=null&&!H.k9(a,b))H.z(H.b5(a,H.jE(b)))
return a},
b5:function(a,b){return new H.ij("TypeError: "+P.dj(a)+": type '"+H.h(H.l5(a))+"' is not a subtype of type '"+b+"'")},
lK:function(a,b){return new H.fe("CastError: "+P.dj(a)+": type '"+H.h(H.l5(a))+"' is not a subtype of type '"+b+"'")},
l5:function(a){var u,t=J.V(a)
if(!!t.$ich){u=H.le(t)
if(u!=null)return H.jE(u)
return"Closure"}return H.cA(a)},
n_:function(a){throw H.i(new H.iM(a))},
nv:function(a){throw H.i(new P.fo(a))},
mf:function(a){return new H.hH(a)},
lf:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bK:function(a){if(a==null)return
return a.$ti},
o9:function(a,b,c){return H.c9(a["$a"+H.h(c)],H.bK(b))},
d_:function(a,b,c,d){var u=H.c9(a["$a"+H.h(c)],H.bK(b))
return u==null?null:u[d]},
au:function(a,b,c){var u=H.c9(a["$a"+H.h(b)],H.bK(a))
return u==null?null:u[c]},
A:function(a,b){var u=H.bK(a)
return u==null?null:u[b]},
jE:function(a){return H.bJ(a,null)},
bJ:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ca(a[0].name)+H.k7(a,1,b)
if(typeof a=="function")return H.ca(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a8(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.h(b[t])}if('func' in a)return H.mz(a,b)
if('futureOr' in a)return"FutureOr<"+H.bJ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mz:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.n])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.d.F(p,a0[m])
l=u[q]
if(l!=null&&l!==P.P)p+=" extends "+H.bJ(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bJ(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bJ(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bJ(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.na(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.aa(n[g])
i=i+h+H.bJ(d[c],a0)+(" "+H.h(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
k7:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.bi("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bJ(p,c)}return"<"+u.i(0)+">"},
c9:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
k8:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bK(a)
t=J.V(a)
if(t[b]==null)return!1
return H.l8(H.c9(t[d],u),null,c,null)},
k:function(a,b,c,d){if(a==null)return a
if(H.k8(a,b,c,d))return a
throw H.i(H.b5(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ca(b.substring(2))+H.k7(c,0,null),v.mangledGlobalNames)))},
l8:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aC(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aC(a[t],b,c[t],d))return!1
return!0},
o6:function(a,b,c){return a.apply(b,H.c9(J.V(b)["$a"+H.h(c)],H.bK(b)))},
lh:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="P"||a.name==="N"||a===-1||a===-2||H.lh(u)}return!1},
k9:function(a,b){var u,t
if(a==null)return b==null||b.name==="P"||b.name==="N"||b===-1||b===-2||H.lh(b)
if(b==null||b===-1||b.name==="P"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.k9(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eZ(a,b)}u=J.V(a).constructor
t=H.bK(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aC(u,null,b,null)},
I:function(a,b){if(a!=null&&!H.k9(a,b))throw H.i(H.b5(a,H.jE(b)))
return a},
aC:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="P"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="P"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aC(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="N")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aC("type" in a?a.type:l,b,s,d)
else if(H.aC(a,b,s,d))return!0
else{if(!('$i'+"cn" in t.prototype))return!1
r=t.prototype["$a"+"cn"]
q=H.c9(r,u?a.slice(1):l)
return H.aC(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.l1(a,b,c,d)
if('func' in a)return c.name==="jR"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.l8(H.c9(m,u),b,p,d)},
l1:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aC(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aC(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aC(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aC(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.nn(h,b,g,d)},
nn:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aC(c[s],d,a[s],b))return!1}return!0},
o7:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nl:function(a){var u,t,s,r,q=H.aa($.lg.$1(a)),p=$.jx[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jC[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.aa($.l7.$2(a,q))
if(q!=null){p=$.jx[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jC[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jD(u)
$.jx[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jC[q]=u
return u}if(s==="-"){r=H.jD(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lk(a,u)
if(s==="*")throw H.i(P.kR(q))
if(v.leafTags[q]===true){r=H.jD(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lk(a,u)},
lk:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kf(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jD:function(a){return J.kf(a,!1,null,!!a.$iJ)},
nm:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jD(u)
else return J.kf(u,c,null,null)},
ng:function(){if(!0===$.ke)return
$.ke=!0
H.nh()},
nh:function(){var u,t,s,r,q,p,o,n
$.jx=Object.create(null)
$.jC=Object.create(null)
H.nf()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lm.$1(q)
if(p!=null){o=H.nm(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nf:function(){var u,t,s,r,q,p,o=C.v()
o=H.c4(C.w,H.c4(C.x,H.c4(C.n,H.c4(C.n,H.c4(C.y,H.c4(C.z,H.c4(C.A(C.m),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lg=new H.jz(r)
$.l7=new H.jA(q)
$.lm=new H.jB(p)},
c4:function(a,b){return a(b)||b},
lV:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.i(new P.fH("Illegal RegExp pattern ("+String(p)+")",a))},
nt:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
n9:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
ln:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lo:function(a,b,c){var u=H.nu(a,b,c)
return u},
nu:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.ln(b),'g'),H.n9(c))},
ih:function ih(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hs:function hs(a,b){this.a=a
this.b=b},
fP:function fP(a,b,c){this.a=a
this.b=b
this.c=c},
it:function it(a){this.a=a},
jJ:function jJ(a){this.a=a},
eD:function eD(a){this.a=a
this.b=null},
ch:function ch(){},
i3:function i3(){},
hW:function hW(){},
ce:function ce(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ij:function ij(a){this.a=a},
fe:function fe(a){this.a=a},
hH:function hH(a){this.a=a},
iM:function iM(a){this.a=a},
W:function W(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fT:function fT(a,b){this.a=a
this.b=b
this.c=null},
dw:function dw(a,b){this.a=a
this.$ti=b},
fU:function fU(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jz:function jz(a){this.a=a},
jA:function jA(a){this.a=a},
jB:function jB(a){this.a=a},
fO:function fO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c2:function(a){return a},
bI:function(a,b,c){if(a>>>0!==a||a>=c)throw H.i(H.c6(b,a))},
my:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.i(H.n8(a,b,c))
return b},
cw:function cw(){},
dC:function dC(){},
cv:function cv(){},
dD:function dD(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
hp:function hp(){},
dE:function dE(){},
hq:function hq(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
cS:function cS(){},
na:function(a){return J.ku(a?Object.keys(a):[],null)},
nw:function(a){return v.mangledGlobalNames[a]},
no:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kf:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jy:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.ke==null){H.ng()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.i(P.kR("Return interceptor for "+H.h(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kh()]
if(r!=null)return r
r=H.nl(a)
if(r!=null)return r
if(typeof a=="function")return C.H
u=Object.getPrototypeOf(a)
if(u==null)return C.r
if(u===Object.prototype)return C.r
if(typeof s=="function"){Object.defineProperty(s,$.kh(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
lU:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.jM(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.aY(a,0,4294967295,"length",null))
return J.ku(new Array(a),b)},
ku:function(a,b){return J.jT(H.c(a,[b]))},
jT:function(a){a.fixed$length=Array
return a},
V:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dr.prototype
return J.dq.prototype}if(typeof a=="string")return J.bS.prototype
if(a==null)return J.ds.prototype
if(typeof a=="boolean")return J.fN.prototype
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bC.prototype
return a}if(a instanceof P.P)return a
return J.jy(a)},
kc:function(a){if(typeof a=="string")return J.bS.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bC.prototype
return a}if(a instanceof P.P)return a
return J.jy(a)},
kd:function(a){if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bC.prototype
return a}if(a instanceof P.P)return a
return J.jy(a)},
nc:function(a){if(typeof a=="number")return J.cq.prototype
if(typeof a=="string")return J.bS.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.cJ.prototype
return a},
nd:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bC.prototype
return a}if(a instanceof P.P)return a
return J.jy(a)},
G:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.V(a).p(a,b)},
f_:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nj(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.kc(a).j(a,b)},
lH:function(a,b,c,d){return J.nd(a).hR(a,b,c,d)},
jL:function(a,b){return J.nc(a).hY(a,b)},
kj:function(a,b){return J.kd(a).H(a,b)},
lI:function(a,b){return J.kd(a).L(a,b)},
bM:function(a){return J.V(a).gI(a)},
cc:function(a){return J.kd(a).gT(a)},
cd:function(a){return J.kc(a).gk(a)},
aw:function(a){return J.V(a).i(a)},
a:function a(){},
fN:function fN(){},
ds:function ds(){},
dt:function dt(){},
hw:function hw(){},
cJ:function cJ(){},
bC:function bC(){},
aT:function aT(a){this.$ti=a},
jU:function jU(a){this.$ti=a},
ai:function ai(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cq:function cq(){},
dr:function dr(){},
dq:function dq(){},
bS:function bS(){}},P={
mo:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.n0()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c5(new P.iO(s),1)).observe(u,{childList:true})
return new P.iN(s,u,t)}else if(self.setImmediate!=null)return P.n1()
return P.n2()},
mp:function(a){self.scheduleImmediate(H.c5(new P.iP(H.o(a,{func:1,ret:-1})),0))},
mq:function(a){self.setImmediate(H.c5(new P.iQ(H.o(a,{func:1,ret:-1})),0))},
mr:function(a){P.k_(C.j,H.o(a,{func:1,ret:-1}))},
k_:function(a,b){var u=C.e.a4(a.a,1000)
return P.mv(u<0?0:u,b)},
kP:function(a,b){var u=C.e.a4(a.a,1000)
return P.mw(u<0?0:u,b)},
mv:function(a,b){var u=new P.eJ()
u.eE(a,b)
return u},
mw:function(a,b){var u=new P.eJ()
u.eF(a,b)
return u},
ms:function(a,b){var u,t,s
b.a=1
try{a.ed(new P.iY(b),new P.iZ(b),null)}catch(s){u=H.bL(s)
t=H.c8(s)
P.nq(new P.j_(b,u,t))}},
l_:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.j(a.c,"$iaB")
if(u>=4){t=b.bL()
b.a=a.a
b.c=a.c
P.cN(b,t)}else{t=H.j(b.c,"$ib8")
b.a=2
b.c=a
a.d9(t)}},
cN:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.j(g.c,"$iaj")
P.jp(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.cN(h.a,b)}g=h.a
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
if(m){H.j(q,"$iaj")
P.jp(i,i,g.b,q.a,q.b)
return}l=$.U
if(l!==n)$.U=n
else l=i
g=b.c
if((g&15)===8)new P.j3(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.j2(u,b,q).$0()}else if((g&2)!==0)new P.j1(h,u,b).$0()
if(l!=null)$.U=l
g=u.b
if(!!J.V(g).$icn){if(g.a>=4){k=H.j(o.c,"$ib8")
o.c=null
b=o.bc(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.l_(g,o)
return}}j=b.b
k=H.j(j.c,"$ib8")
j.c=null
b=j.bc(k)
g=u.a
p=u.b
if(!g){H.I(p,H.A(j,0))
j.a=4
j.c=p}else{H.j(p,"$iaj")
j.a=8
j.c=p}h.a=j
g=j}},
mW:function(a,b){if(H.eZ(a,{func:1,args:[P.P,P.aq]}))return H.o(a,{func:1,ret:null,args:[P.P,P.aq]})
if(H.eZ(a,{func:1,args:[P.P]}))return H.o(a,{func:1,ret:null,args:[P.P]})
throw H.i(P.jM(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mV:function(){var u,t
for(;u=$.c3,u!=null;){$.cZ=null
t=u.b
$.c3=t
if(t==null)$.cY=null
u.a.$0()}},
mZ:function(){$.k5=!0
try{P.mV()}finally{$.cZ=null
$.k5=!1
if($.c3!=null)$.ki().$1(P.l9())}},
l4:function(a){var u=new P.e6(a)
if($.c3==null){$.c3=$.cY=u
if(!$.k5)$.ki().$1(P.l9())}else $.cY=$.cY.b=u},
mY:function(a){var u,t,s=$.c3
if(s==null){P.l4(a)
$.cZ=$.cY
return}u=new P.e6(a)
t=$.cZ
if(t==null){u.b=s
$.c3=$.cZ=u}else{u.b=t.b
$.cZ=t.b=u
if(u.b==null)$.cY=u}},
nq:function(a){var u=null,t=$.U
if(C.f===t){P.jr(u,u,C.f,a)
return}P.jr(u,u,t,H.o(t.bU(a),{func:1,ret:-1}))},
kO:function(a,b){var u=$.U
if(u===C.f)return P.k_(a,H.o(b,{func:1,ret:-1}))
return P.k_(a,H.o(u.bU(b),{func:1,ret:-1}))},
mn:function(a,b){var u=$.U
if(u===C.f)return P.kP(a,H.o(b,{func:1,ret:-1,args:[P.b2]}))
return P.kP(a,H.o(u.dq(b,P.b2),{func:1,ret:-1,args:[P.b2]}))},
jp:function(a,b,c,d,e){var u={}
u.a=d
P.mY(new P.jq(u,e))},
l2:function(a,b,c,d,e){var u,t=$.U
if(t===c)return d.$0()
$.U=c
u=t
try{t=d.$0()
return t}finally{$.U=u}},
l3:function(a,b,c,d,e,f,g){var u,t=$.U
if(t===c)return d.$1(e)
$.U=c
u=t
try{t=d.$1(e)
return t}finally{$.U=u}},
mX:function(a,b,c,d,e,f,g,h,i){var u,t=$.U
if(t===c)return d.$2(e,f)
$.U=c
u=t
try{t=d.$2(e,f)
return t}finally{$.U=u}},
jr:function(a,b,c,d){var u
H.o(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bU(d):c.hV(d,-1)
P.l4(d)},
iO:function iO(a){this.a=a},
iN:function iN(a,b,c){this.a=a
this.b=b
this.c=c},
iP:function iP(a){this.a=a},
iQ:function iQ(a){this.a=a},
eJ:function eJ(){this.c=0},
ji:function ji(a,b){this.a=a
this.b=b},
jh:function jh(a,b,c,d){var _=this
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
aB:function aB(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iX:function iX(a,b){this.a=a
this.b=b},
j0:function j0(a,b){this.a=a
this.b=b},
iY:function iY(a){this.a=a},
iZ:function iZ(a){this.a=a},
j_:function j_(a,b,c){this.a=a
this.b=b
this.c=c},
j3:function j3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j4:function j4(a){this.a=a},
j2:function j2(a,b,c){this.a=a
this.b=b
this.c=c},
j1:function j1(a,b,c){this.a=a
this.b=b
this.c=c},
e6:function e6(a){this.a=a
this.b=null},
hZ:function hZ(){},
i0:function i0(a,b){this.a=a
this.b=b},
i1:function i1(a,b){this.a=a
this.b=b},
cE:function cE(){},
i_:function i_(){},
b2:function b2(){},
aj:function aj(a,b){this.a=a
this.b=b},
jk:function jk(){},
jq:function jq(a,b){this.a=a
this.b=b},
ja:function ja(){},
jc:function jc(a,b,c){this.a=a
this.b=b
this.c=c},
jb:function jb(a,b){this.a=a
this.b=b},
jd:function jd(a,b,c){this.a=a
this.b=b
this.c=c},
lX:function(a,b){return new H.W([a,b])},
lY:function(a){return H.nb(a,new H.W([null,null]))},
lZ:function(a){return new P.j8([a])},
k3:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mu:function(a,b,c){var u=new P.el(a,b,[c])
u.c=a.e
return u},
lT:function(a,b,c){var u,t
if(P.k6(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.n])
C.a.h($.as,a)
try{P.mA(a,u)}finally{if(0>=$.as.length)return H.d($.as,-1)
$.as.pop()}t=P.kK(b,H.nk(u,"$ie"),", ")+c
return t.charCodeAt(0)==0?t:t},
jS:function(a,b,c){var u,t
if(P.k6(a))return b+"..."+c
u=new P.bi(b)
C.a.h($.as,a)
try{t=u
t.a=P.kK(t.a,a,", ")}finally{if(0>=$.as.length)return H.d($.as,-1)
$.as.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
k6:function(a){var u,t
for(u=$.as.length,t=0;t<u;++t)if(a===$.as[t])return!0
return!1},
mA:function(a,b){var u,t,s,r,q,p,o,n=a.gT(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.A())return
u=H.h(n.gK(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.A()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gK(n);++l
if(!n.A()){if(l<=4){C.a.h(b,H.h(r))
return}t=H.h(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gK(n);++l
for(;n.A();r=q,q=p){p=n.gK(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2;--l}C.a.h(b,"...")
return}}s=H.h(r)
t=H.h(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.h(b,o)
C.a.h(b,s)
C.a.h(b,t)},
kw:function(a){var u,t={}
if(P.k6(a))return"{...}"
u=new P.bi("")
try{C.a.h($.as,a)
u.a+="{"
t.a=!0
J.lI(a,new P.fZ(t,u))
u.a+="}"}finally{if(0>=$.as.length)return H.d($.as,-1)
$.as.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
j8:function j8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cO:function cO(a){this.a=a
this.c=this.b=null},
el:function el(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fV:function fV(){},
y:function y(){},
fY:function fY(){},
fZ:function fZ(a,b){this.a=a
this.b=b},
ae:function ae(){},
je:function je(){},
em:function em(){},
ci:function ci(){},
da:function da(){},
fw:function fw(){},
iw:function iw(){},
ix:function ix(){},
jj:function jj(a){this.b=0
this.c=a},
lS:function(a){if(a instanceof H.ch)return a.i(0)
return"Instance of '"+H.h(H.cA(a))+"'"},
m_:function(a,b,c){var u,t=J.lU(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.m(t,u,b)
return H.k(t,"$ib",[c],"$ab")},
kv:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.cc(a);u.A();)C.a.h(s,H.I(u.gK(u),c))
if(b)return s
return H.k(J.jT(s),"$ib",t,"$ab")},
jY:function(a){var u,t
if(a.constructor===Array){H.k(a,"$iaT",[P.t],"$aaT")
u=a.length
t=P.kI(0,null,u)
return H.kG(t<u?C.a.cE(a,0,t):a)}return P.mj(a,0,null)},
mj:function(a,b,c){var u,t,s=J.cc(a)
for(u=0;u<b;++u)if(!s.A())throw H.i(P.aY(b,0,u,null,null))
t=[]
for(;s.A();)t.push(s.gK(s))
return H.kG(t)},
md:function(a){return new H.fO(a,H.lV(a,!1,!0,!1,!1,!1))},
kK:function(a,b,c){var u=J.cc(b)
if(!u.A())return a
if(c.length===0){do a+=H.h(u.gK(u))
while(u.A())}else{a+=H.h(u.gK(u))
for(;u.A();)a=a+c+H.h(u.gK(u))}return a},
mx:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.o){u=$.lG().b
u=u.test(b)}else u=!1
if(u)return b
t=C.C.hZ(H.I(b,H.au(c,"ci",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.mb(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lQ:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lR:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dc:function(a){if(a>=10)return""+a
return"0"+a},
ko:function(a){return new P.bw(1000*a)},
dj:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aw(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lS(a)},
lJ:function(a){return new P.aL(!1,null,null,a)},
jM:function(a,b,c){return new P.aL(!0,a,b,c)},
dI:function(a,b){return new P.bW(null,null,!0,a,b,"Value not in range")},
aY:function(a,b,c,d,e){return new P.bW(b,c,!0,a,d,"Invalid value")},
kI:function(a,b,c){if(0>a||a>c)throw H.i(P.aY(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.i(P.aY(b,a,c,"end",null))
return b}return c},
kH:function(a,b){if(typeof a!=="number")return a.ae()
if(a<0)throw H.i(P.aY(a,0,null,b,null))},
S:function(a,b,c,d,e){var u=H.a8(e==null?J.cd(b):e)
return new P.fM(u,!0,a,c,"Index out of range")},
an:function(a){return new P.iu(a)},
kR:function(a){return new P.is(a)},
cj:function(a){return new P.fi(a)},
x:function(a){return new P.ee(a)},
kg:function(a){H.no(a)},
Y:function Y(){},
ax:function ax(a,b){this.a=a
this.b=b},
q:function q(){},
bw:function bw(a){this.a=a},
ft:function ft(){},
fu:function fu(){},
bx:function bx(){},
f4:function f4(){},
dF:function dF(){},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bW:function bW(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fM:function fM(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iu:function iu(a){this.a=a},
is:function is(a){this.a=a},
hV:function hV(a){this.a=a},
fi:function fi(a){this.a=a},
hv:function hv(){},
dQ:function dQ(){},
fo:function fo(a){this.a=a},
ee:function ee(a){this.a=a},
fH:function fH(a,b){this.a=a
this.b=b},
t:function t(){},
e:function e(){},
aS:function aS(){},
b:function b(){},
F:function F(){},
N:function N(){},
a9:function a9(){},
P:function P(){},
aq:function aq(){},
n:function n(){},
bi:function bi(a){this.a=a},
n6:function(a){var u,t=J.V(a)
if(!!t.$iby){u=t.gdz(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eO(a.data,a.height,a.width)},
n5:function(a){if(a instanceof P.eO)return{data:a.a,height:a.b,width:a.c}
return a},
bo:function(a){var u,t,s,r,q
if(a==null)return
u=P.lX(P.n,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r){q=H.aa(t[r])
u.m(0,q,a[q])}return u},
n4:function(a){var u={}
a.L(0,new P.js(u))
return u},
eO:function eO(a,b,c){this.a=a
this.b=b
this.c=c},
js:function js(a){this.a=a},
fD:function fD(a,b){this.a=a
this.b=b},
fE:function fE(){},
fF:function fF(){},
j7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mt:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
j9:function j9(){},
ap:function ap(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ba:function ba(){},
fR:function fR(){},
bg:function bg(){},
ht:function ht(){},
hz:function hz(){},
i2:function i2(){},
p:function p(){},
bl:function bl(){},
ig:function ig(){},
ej:function ej(){},
ek:function ek(){},
eu:function eu(){},
ev:function ev(){},
eF:function eF(){},
eG:function eG(){},
eM:function eM(){},
eN:function eN(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(a){this.a=a},
f9:function f9(){},
bN:function bN(){},
hu:function hu(){},
e7:function e7(){},
d5:function d5(){},
dl:function dl(){},
dH:function dH(){},
dK:function dK(){},
bX:function bX(){},
dM:function dM(){},
dR:function dR(){},
dY:function dY(){},
hU:function hU(){},
eB:function eB(){},
eC:function eC(){}},W={
jO:function(){var u=document.createElement("canvas")
return u},
kp:function(a){H.j(a,"$if")
return"wheel"},
j6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l0:function(a,b,c,d){var u=W.j6(W.j6(W.j6(W.j6(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a7:function(a,b,c,d,e){var u=W.l6(new W.iW(c),W.l)
if(u!=null&&!0)J.lH(a,b,u,!1)
return new W.iV(a,b,u,!1,[e])},
l6:function(a,b){var u=$.U
if(u===C.f)return a
return u.dq(a,b)},
r:function r(){},
f0:function f0(){},
f2:function f2(){},
f3:function f3(){},
d4:function d4(){},
bP:function bP(){},
cg:function cg(){},
bu:function bu(){},
ck:function ck(){},
fk:function fk(){},
Q:function Q(){},
cl:function cl(){},
fl:function fl(){},
aN:function aN(){},
aO:function aO(){},
fm:function fm(){},
fn:function fn(){},
fp:function fp(){},
de:function de(){},
fq:function fq(){},
df:function df(){},
dg:function dg(){},
fr:function fr(){},
fs:function fs(){},
iS:function iS(a,b){this.a=a
this.b=b},
a1:function a1(){},
l:function l(){},
f:function f(){},
aQ:function aQ(){},
fB:function fB(){},
fC:function fC(){},
fG:function fG(){},
aR:function aR(){},
fK:function fK(){},
bR:function bR(){},
by:function by(){},
cp:function cp(){},
aU:function aU(){},
fW:function fW(){},
he:function he(){},
hf:function hf(){},
hg:function hg(a){this.a=a},
hh:function hh(){},
hi:function hi(a){this.a=a},
aW:function aW(){},
hj:function hj(){},
ac:function ac(){},
iR:function iR(a){this.a=a},
K:function K(){},
cx:function cx(){},
aX:function aX(){},
hx:function hx(){},
hF:function hF(){},
hG:function hG(a){this.a=a},
hI:function hI(){},
aZ:function aZ(){},
hS:function hS(){},
b_:function b_(){},
hT:function hT(){},
b0:function b0(){},
hX:function hX(){},
hY:function hY(a){this.a=a},
aH:function aH(){},
b1:function b1(){},
aI:function aI(){},
i4:function i4(){},
i5:function i5(){},
ia:function ia(){},
b3:function b3(){},
aK:function aK(){},
id:function id(){},
ie:function ie(){},
bG:function bG(){},
iv:function iv(){},
iJ:function iJ(){},
b7:function b7(){},
cM:function cM(){},
iT:function iT(){},
e9:function e9(){},
j5:function j5(){},
er:function er(){},
jf:function jf(){},
jg:function jg(){},
iU:function iU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
k2:function k2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iV:function iV(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iW:function iW(a){this.a=a},
C:function C(){},
dk:function dk(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
e8:function e8(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
es:function es(){},
et:function et(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
cT:function cT(){},
cU:function cU(){},
ez:function ez(){},
eA:function eA(){},
eE:function eE(){},
eH:function eH(){},
eI:function eI(){},
cV:function cV(){},
cW:function cW(){},
eK:function eK(){},
eL:function eL(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){}},O={
fg:function(a){var u=new O.R([a])
u.b9(a)
return u},
R:function R(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cs:function cs(){this.b=this.a=null},
kr:function(a,b){var u,t,s,r=new O.dp()
r.r=0
r.scs(null)
r.sbV(null)
if(a==null){u=$.kS
if(u==null){u=new V.O(1,0)
$.kS=u
t=u}else t=u}else t=a
if(!J.G(r.d,t)){s=r.d
r.d=t
u=new D.u("blurDirection",s,t,[V.O])
u.b=!0
r.w(u)}r.sdv(b)
r.sbW(null)
r.sbX(0)
return r},
h1:function(){var u,t,s=new O.dB()
s.seM(O.fg(V.a4))
s.e.aF(s.gfm(),s.gfo())
u=new O.aV(s,"emission")
u.c=new A.ak(!1,!1,!1)
u.f=new V.Z(0,0,0)
s.f=u
u=new O.aV(s,"ambient")
u.c=new A.ak(!1,!1,!1)
u.f=new V.Z(0,0,0)
s.r=u
u=new O.aV(s,"diffuse")
u.c=new A.ak(!1,!1,!1)
u.f=new V.Z(0,0,0)
s.x=u
u=new O.aV(s,"invDiffuse")
u.c=new A.ak(!1,!1,!1)
u.f=new V.Z(0,0,0)
s.y=u
u=new O.h7(s,"specular")
u.c=new A.ak(!1,!1,!1)
u.f=new V.Z(0,0,0)
u.ch=100
s.z=u
u=new O.h3(s,"bump")
u.c=new A.ak(!1,!1,!1)
s.Q=u
s.ch=null
u=new O.aV(s,"reflect")
u.c=new A.ak(!1,!1,!1)
u.f=new V.Z(0,0,0)
s.cx=u
u=new O.h6(s,"refract")
u.c=new A.ak(!1,!1,!1)
u.f=new V.Z(0,0,0)
u.ch=1
s.cy=u
u=new O.h2(s,"alpha")
u.c=new A.ak(!1,!1,!1)
u.f=1
s.db=u
u=new D.dv()
u.b9(D.ab)
u.sez(H.c([],[D.dd]))
u.shg(H.c([],[D.bD]))
u.seB(H.c([],[D.dP]))
u.y=u.x=null
u.cA(u.gfk(),u.gh0(),u.gh4())
s.dx=u
t=new O.h5()
t.b=new V.a_(0,0,0,0)
t.c=1
t.d=10
t.e=!1
s.dy=t
t=u.x
u=t==null?u.x=D.M():t
u.h(0,s.ghp())
u=s.dx
t=u.y
u=t==null?u.y=D.M():t
u.h(0,s.ga1())
s.fr=null
return s},
kM:function(){var u,t,s,r=new O.dT()
r.a=new V.a_(0,0,0,0)
r.sf_(O.fg(O.aJ))
r.c.aF(r.gfF(),r.gfH())
r.d=0
r.e=null
r.r=r.f=C.i
u=new V.a_(0,0,0,0)
if(!r.a.p(0,u)){t=r.a
r.a=u
s=new D.u("backColor",t,u,[V.a_])
s.b=!0
r.w(s)}r.sdr(C.i)
return r},
jZ:function(a,b){var u,t,s,r,q=new O.aJ(),p=q.a
q.a=b
b.gl().h(0,q.ga1())
u=new D.u("texture",p,q.a,[T.bY])
u.b=!0
q.w(u)
t=a==null?V.bd():a
if(!J.G(q.b,t)){p=q.b
q.b=t
u=new D.u("colorMatrix",p,t,[V.a4])
u.b=!0
q.w(u)}s=V.dJ()
if(!J.G(q.c,s)){p=q.c
q.c=s
u=new D.u("source",p,s,[V.bF])
u.b=!0
q.w(u)}r=V.dJ()
if(!J.G(q.d,r)){p=q.d
q.d=r
u=new D.u("destination",p,r,[V.bF])
u.b=!0
q.w(u)}if(q.e!==!1){q.e=!1
u=new D.u("flip",!0,!1,[P.Y])
u.b=!0
q.w(u)}q.f=null
return q},
dp:function dp(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dB:function dB(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h8:function h8(a,b){this.a=a
this.b=b},
h9:function h9(){},
ha:function ha(a,b){this.a=a
this.b=b},
hb:function hb(){},
hc:function hc(a,b){this.a=a
this.b=b},
hd:function hd(){},
h2:function h2(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cr:function cr(){},
h3:function h3(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aV:function aV(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h5:function h5(){var _=this
_.e=_.d=_.c=_.b=null},
h6:function h6(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h7:function h7(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bj:function bj(){},
dT:function dT(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aJ:function aJ(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
dh:function(){var u=new E.al()
u.a=""
u.b=!0
u.sey(0,O.fg(E.al))
u.y.aF(u.gig(),u.gij())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.saG(0,null)
u.sad(null)
u.sav(null)
return u},
me:function(a,b){var u=new E.hB(a)
u.eu(a,b)
return u},
mm:function(a,b,c,d,e){var u,t,s=J.V(a)
if(!!s.$ibP)return E.kN(a,!0,!0,!0,!1)
u=W.jO()
t=u.style
t.width="100%"
t.height="100%"
s.gdt(a).h(0,u)
return E.kN(u,!0,!0,!0,!1)},
kN:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dU(),j=H.j(C.h.cz(a,"webgl2",P.lY(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibX")
if(j==null)H.z(P.x("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.me(j,a)
u=new T.i7(j)
H.a8(j.getParameter(3379))
u.c=H.a8(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.e0(a)
t=new X.fQ()
t.c=new X.at(!1,!1,!1)
t.shj(P.lZ(P.t))
u.b=t
t=new X.hk(u)
t.f=0
t.r=V.bh()
t.x=V.bh()
t.ch=t.Q=1
u.c=t
t=new X.fX(u)
t.r=0
t.x=V.bh()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ic(u)
t.f=V.bh()
t.r=V.bh()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sf0(H.c([],[[P.cE,P.P]]))
t=u.z
s=document
r=W.ac
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a7(s,"contextmenu",H.o(u.gfz(),q),!1,r))
t=u.z
p=W.l
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a7(a,"focus",H.o(u.gfJ(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a7(a,"blur",H.o(u.gfq(),o),!1,p))
t=u.z
n=W.aU
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a7(s,"keyup",H.o(u.gfN(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a7(s,"keydown",H.o(u.gfL(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a7(a,"mousedown",H.o(u.gfR(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a7(a,"mouseup",H.o(u.gfV(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a7(a,l,H.o(u.gfT(),q),!1,r))
n=u.z
W.kp(a)
m=W.b7;(n&&C.a).h(n,W.a7(a,H.aa(W.kp(a)),H.o(u.gfX(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a7(s,l,H.o(u.gfB(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a7(s,"mouseup",H.o(u.gfD(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a7(s,"pointerlockchange",H.o(u.gfZ(),o),!1,p))
p=u.z
o=W.aK
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a7(a,"touchstart",H.o(u.ghe(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a7(a,"touchend",H.o(u.gha(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a7(a,"touchmove",H.o(u.ghc(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ax(Date.now(),!1)
k.cy=0
k.dc()
return k},
fc:function fc(){},
al:function al(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hB:function hB(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
dU:function dU(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
i9:function i9(a){this.a=a}},Z={
k1:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.c2(c)),35044)
a.bindBuffer(b,null)
return new Z.e5(b,u)},
aA:function(a){return new Z.b6(a)},
e5:function e5(a,b){this.a=a
this.b=b},
d6:function d6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
cL:function cL(a){this.a=a},
bt:function bt(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
b6:function b6(a){this.a=a}},D={
M:function(){var u=new D.aP()
u.sX(null)
u.sat(null)
u.c=null
u.d=0
return u},
ff:function ff(){},
aP:function aP(){var _=this
_.d=_.c=_.b=_.a=null},
fy:function fy(a){this.a=a},
fz:function fz(a){this.a=a},
v:function v(){this.b=null},
bA:function bA(a){this.b=null
this.$ti=a},
bB:function bB(a){this.b=null
this.$ti=a},
u:function u(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
dd:function dd(){},
ab:function ab(){},
dv:function dv(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
bD:function bD(){var _=this
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dP:function dP(){}},X={d7:function d7(a,b){this.a=a
this.b=b},du:function du(a,b){this.a=a
this.b=b},fQ:function fQ(){var _=this
_.d=_.c=_.b=_.a=null},dy:function dy(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fX:function fX(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},at:function at(a,b,c){this.a=a
this.b=b
this.c=c},be:function be(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hk:function hk(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cu:function cu(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hy:function hy(){},dW:function dW(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ic:function ic(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},e0:function e0(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
fb:function(a,b,c,d){var u,t,s,r,q=new X.fa()
q.d=q.c=q.b=q.a=512
q.e=!0
q.f=!1
q.x=q.r=1
q.ch=T.kL(null)
q.cx=new V.a_(0,0,0,1)
q.cy=!0
q.db=2000
q.dx=!0
q.dy=V.dJ()
q.sam(0,512)
q.sai(0,512)
u=new V.a_(0,0,0,1)
if(!q.cx.p(0,u)){t=q.cx
q.cx=u
s=new D.u("color",t,u,[V.a_])
s.b=!0
q.W(s)}if(q.cy!==d){q.cy=d
s=new D.u("clearColor",!d,d,[P.Y])
s.b=!0
q.W(s)}s=q.db
if(!(Math.abs(s-2000)<$.D().a)){q.db=2000
s=new D.u("depth",s,2000,[P.q])
s.b=!0
q.W(s)}if(!q.f){q.f=!0
s=new D.u("autoResize",!1,!0,[P.Y])
s.b=!0
q.W(s)}s=q.r
if(!(Math.abs(s-b)<$.D().a)){q.r=b
s=new D.u("autoResizeScalarX",s,b,[P.q])
s.b=!0
q.W(s)}s=q.x
if(!(Math.abs(s-c)<$.D().a)){q.x=c
s=new D.u("autoResizeScalarY",s,c,[P.q])
s.b=!0
q.W(s)}r=V.dJ()
if(!J.G(q.dy,r)){t=q.dy
q.dy=r
s=new D.u("region",t,r,[V.bF])
s.b=!0
q.W(s)}return q},
kq:function(a){var u=new X.fI(),t=new V.a_(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.dJ()
u.r=t
return u},
fa:function fa(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bO:function bO(){},
fI:function fI(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fL:function fL(){this.b=this.a=null},
dG:function dG(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cF:function cF(){}},V={
jK:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.ei(a-b,u)
return(a<0?a+u:a)+b},
L:function(a,b,c){if(a==null)return C.d.ak("null",c)
return C.d.ak(C.c.ee(Math.abs(a-0)<$.D().a?0:a,b),c+b+1)},
c7:function(a,b,c){var u,t,s,r,q,p=H.c([],[P.n])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.w)(a),++s){r=V.L(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.d(p,q)
C.a.m(p,q,C.d.ak(p[q],t))}return p},
d0:function(a){return C.c.iG(Math.pow(2,C.G.cc(Math.log(H.n3(a))/Math.log(2))))},
bd:function(){var u=$.ct
return u==null?$.ct=V.aE(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aE:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kA:function(a,b,c,d){return V.aE(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
jX:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aE(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
ky:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aE(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
kz:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aE(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
bh:function(){var u=$.kE
return u==null?$.kE=new V.X(0,0):u},
m2:function(){var u=$.cy
return u==null?$.cy=new V.a3(0,0,0):u},
dJ:function(){var u=$.cB
return u==null?$.cB=V.hA(0,0,1,1):u},
hA:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.bF(a,b,c,d)},
cK:function(){var u=$.kX
return u==null?$.kX=new V.H(0,0,0):u},
kZ:function(){var u=$.kY
return u==null?$.kY=new V.bm(1,0.00390625,0.0000152587890625,0):u},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
a_:function a_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fx:function fx(a){this.a=a},
bT:function bT(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a4:function a4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
X:function X(a,b){this.a=a
this.b=b},
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bF:function bF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
O:function O(a,b){this.a=a
this.b=b},
H:function H(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
af:function(a){var u=new V.hJ()
u.ev(a)
return u},
f1:function f1(){},
bc:function bc(){},
dz:function dz(){},
bf:function bf(){this.a=null},
hJ:function hJ(){this.a=null},
cD:function cD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dV:function dV(a,b,c){this.a=a
this.b=b
this.c=c},
cH:function cH(a){this.b=a
this.c=null},
ib:function ib(){this.c=this.b=this.a=null},
cI:function cI(a){this.b=a
this.a=this.c=null},
nr:function(a){P.mn(C.E,new V.jF(a))},
mg:function(a){var u=new V.hO()
u.ew(a,!0)
return u},
jF:function jF(a){this.a=a},
hO:function hO(){this.b=this.a=null},
hQ:function hQ(a){this.a=a},
hP:function hP(a){this.a=a}},U={
jP:function(){var u=new U.fh()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
jQ:function(a){var u=new U.d9()
u.a=a
return u},
ks:function(){var u=new U.co()
u.b9(U.a5)
u.aF(u.geC(),u.gh2())
u.e=null
u.f=V.bd()
u.r=0
return u},
fh:function fh(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d9:function d9(){this.b=this.a=null},
co:function co(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a5:function a5(){},
dL:function dL(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e1:function e1(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
e2:function e2(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e3:function e3(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
li:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0="testCanvas",c1=null,c2="../resources/StarsCan.png",c3="../resources/Stars.png",c4="modifiers",c5=V.mg("Test 042"),c6=W.jO()
c6.className="pageLargeCanvas"
c6.id=c0
c5.a.appendChild(c6)
u=[P.n]
c5.dl(H.c(["Test of the Blum effect technique."],u))
c5.dl(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(c0)
if(t==null)H.z(P.x("Failed to find an element with the identifier, testCanvas."))
s=E.mm(t,!0,!0,!0,!1)
r=U.ks()
c5=new U.dL()
c5.r=c5.f=c5.e=c5.d=c5.c=c5.b=c5.a=0
c5.seg(0)
c5.se6(0,0)
c5.sea(0)
u=c5.d
if(!(Math.abs(u-0)<$.D().a)){c5.d=0
u=new D.u("deltaYaw",u,0,[P.q])
u.b=!0
c5.E(u)}u=c5.e
if(!(Math.abs(u-0)<$.D().a)){c5.e=0
u=new D.u("deltaPitch",u,0,[P.q])
u.b=!0
c5.E(u)}u=c5.f
if(!(Math.abs(u-0.5)<$.D().a)){c5.f=0.5
u=new D.u("deltaRoll",u,0.5,[P.q])
u.b=!0
c5.E(u)}r.h(0,c5)
r.h(0,U.jQ(V.jX(1.5707963267948966)))
q=E.dh()
q.sav(r)
q.saG(0,F.ns(0.6))
c5=O.h1()
c5.f.saO(0,new V.Z(1,1,1))
q.sad(c5)
p=s.f.dV(c2,c2,c2,c2,c2,c2)
o=E.dh()
o.sav(r)
o.saG(0,F.lc(1.2,16,1.2))
c5=O.h1()
c5.x.saD(p)
c5.db.saD(p)
o.sad(c5)
n=E.dh()
n.sav(r)
c5=F.lc(1.2,16,1.2)
c5.bh()
n.saG(0,c5)
c5=O.h1()
u=c5.r
u.saO(0,new V.Z(0.6,0.6,0.6))
c5.x.saD(p)
c5.db.saD(p)
n.sad(c5)
m=s.f.dV(c3,c3,c3,c3,c3,c3)
l=new D.bD()
l.c=new V.Z(1,1,1)
l.r=1
l.y=l.x=0
l.z=!0
l.a=V.bd()
k=l.b
l.b=r
r.gl().h(0,l.gbq())
c5=new D.u("mover",k,l.b,[U.a5])
c5.b=!0
l.a8(c5)
j=new V.Z(1,1,1)
if(!l.c.p(0,j)){k=l.c
l.c=j
c5=new D.u("color",k,j,[V.Z])
c5.b=!0
l.a8(c5)}c5=l.d
if(c5!==m){if(c5!=null)c5.gl().C(0,l.gbq())
k=l.d
l.d=m
m.gl().h(0,l.gbq())
c5=new D.u("texture",k,l.d,[T.cG])
c5.b=!0
l.a8(c5)}i=V.kZ()
if(!J.G(l.f,i)){k=l.f
l.f=i
c5=new D.u("shadowAdjust",k,i,[V.bm])
c5.b=!0
l.a8(c5)}c5=l.r
if(!(Math.abs(c5-0.5)<$.D().a)){l.r=0.5
c5=new D.u("attenuation0",c5,0.5,[P.q])
c5.b=!0
l.a8(c5)}c5=l.x
if(!(Math.abs(c5-0.05)<$.D().a)){l.x=0.05
c5=new D.u("attenuation1",c5,0.05,[P.q])
c5.b=!0
l.a8(c5)}c5=l.y
if(!(Math.abs(c5-0.025)<$.D().a)){l.y=0.025
c5=new D.u("attenuation2",c5,0.025,[P.q])
c5.b=!0
l.a8(c5)}h=E.dh()
h.sav(U.jQ(V.kA(10,10,10,1)))
c5=F.lb(1,c1,c1,1)
c5.bh()
h.saG(0,c5)
g=U.ks()
c5=s.r
u=new U.e2()
f=U.jP()
f.scw(0,!0)
f.sci(6.283185307179586)
f.sck(0)
f.sa_(0,0)
f.scj(100)
f.sS(0)
f.sc3(0.5)
u.b=f
e=u.gaL()
f.gl().h(0,e)
f=U.jP()
f.scw(0,!0)
f.sci(6.283185307179586)
f.sck(0)
f.sa_(0,0)
f.scj(100)
f.sS(0)
f.sc3(0.5)
u.c=f
f.gl().h(0,e)
u.d=null
u.r=u.f=u.e=!1
u.y=u.x=2.5
u.Q=4
u.ch=u.cx=!1
u.db=u.cy=0
u.dx=null
u.dy=0
u.fx=u.fr=null
d=new X.at(!1,!1,!1)
k=u.d
u.d=d
f=[X.at]
e=new D.u(c4,k,d,f)
e.b=!0
u.E(e)
e=u.f
if(e!==!1){u.f=!1
e=new D.u("invertX",e,!1,[P.Y])
e.b=!0
u.E(e)}e=u.r
if(e!==!1){u.r=!1
e=new D.u("invertY",e,!1,[P.Y])
e.b=!0
u.E(e)}u.aX(c5)
g.h(0,u)
c5=s.r
u=new U.e1()
e=U.jP()
e.scw(0,!0)
e.sci(6.283185307179586)
e.sck(0)
e.sa_(0,0)
e.scj(100)
e.sS(0)
e.sc3(0.2)
u.b=e
e.gl().h(0,u.gaL())
u.c=null
u.d=!1
u.e=2.5
u.r=4
u.x=u.y=!1
u.z=0
u.Q=null
u.ch=0
u.cy=u.cx=null
d=new X.at(!0,!1,!1)
k=u.c
u.c=d
e=new D.u(c4,k,d,f)
e.b=!0
u.E(e)
u.aX(c5)
g.h(0,u)
c5=s.r
u=new U.e3()
u.c=0.01
u.e=u.d=0
d=new X.at(!1,!1,!1)
u.b=d
f=new D.u(c4,c1,d,f)
f.b=!0
u.E(f)
u.aX(c5)
g.h(0,u)
g.h(0,U.jQ(V.aE(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=O.h1()
c.dx.h(0,l)
c5=c.r
c5.saO(0,new V.Z(0.05,0.05,0.05))
c5=c.x
c5.saO(0,new V.Z(0.7,0.7,0.7))
b=X.fb(!0,1,1,!0)
a=new M.di()
a.a=!0
a.seP(0,O.fg(E.al))
a.e.aF(a.gft(),a.gfv())
a.y=a.x=a.r=a.f=null
a0=X.kq(c1)
a1=new X.dG()
a1.c=1.0471975511965976
a1.d=0.1
a1.e=2000
a1.sav(c1)
c5=a1.c
if(!(Math.abs(c5-1.0471975511965976)<$.D().a)){a1.c=1.0471975511965976
c5=new D.u("fov",c5,1.0471975511965976,[P.q])
c5.b=!0
a1.W(c5)}c5=a1.d
if(!(Math.abs(c5-0.1)<$.D().a)){a1.d=0.1
c5=new D.u("near",c5,0.1,[P.q])
c5.b=!0
a1.W(c5)}c5=a1.e
if(!(Math.abs(c5-2000)<$.D().a)){a1.e=2000
c5=new D.u("far",c5,2000,[P.q])
c5.b=!0
a1.W(c5)}c5=a.b
if(c5!==a1){if(c5!=null)c5.gl().C(0,a.gU())
k=a.b
a.b=a1
a1.gl().h(0,a.gU())
c5=new D.u("camera",k,a.b,[X.bO])
c5.b=!0
a.P(c5)}a.saQ(0,a0)
a.sad(c1)
a.sad(c)
a.e.h(0,h)
a.e.h(0,q)
a.e.h(0,n)
a.e.h(0,o)
a.b.sav(g)
a.saQ(0,b)
a2=X.fb(!0,1,1,!1)
a3=O.kM()
c5=a3.c
u=b.ch
c5.h(0,O.jZ(V.aE(3,3,3,-8,3,3,3,-8,3,3,3,-8,0,0,0,1),u))
a4=M.fj(c1,c1)
a4.saQ(0,a2)
a4.sad(a3)
a5=M.kn(c1)
for(c5=H.au(a5,"R",0),u=[c5],f={func:1,ret:-1,args:[D.v]},e=[f],a6=[c5],a7=a2,a8=0;a8<4;++a8,a7=a9){a9=X.fb(!0,0.25,0.25,!1)
b0=new V.bm(10,10,10,1)
b1=a7.ch
b2=a2.ch
b3=new M.dm()
b3.a=!0
b3.c=X.fb(!0,1,1,!1)
b4=O.kr(c1,c1)
b5=b4.x
if(b5==null){b5=new D.aP()
b5.sX(c1)
b5.sat(c1)
b5.c=null
b5.d=0
b4.x=b5}b6=H.o(b3.gU(),f)
if(b5.a==null)b5.sX(H.c([],e))
b5=b5.a;(b5&&C.a).h(b5,b6)
b3.d=b4
b3.e=M.fj(b3.c,b4)
b4=b3.c.ch
b5=$.kT
b4=O.kr(b5==null?$.kT=new V.O(0,1):b5,b4)
b5=b4.x
if(b5==null){b5=new D.aP()
b5.sX(c1)
b5.sat(c1)
b5.c=null
b5.d=0
b4.x=b5}if(b5.a==null)b5.sX(H.c([],e))
b5=b5.a;(b5&&C.a).h(b5,b6)
b3.f=b4
b3.r=M.fj(c1,b4)
b3.d.sbX(0)
b3.f.sbX(0)
b3.d.sdv(b1)
b3.d.sbW(b2)
b3.f.sbW(b2)
b3.d.scs(c1)
b3.f.scs(c1)
b3.d.sbV(b0)
b3.f.sbV(b0)
b3.r.saQ(0,a9)
H.I(b3,c5)
if(H.B(a5.bI(H.c([b3],u)))){b0=a5.a
b7=b0.length
C.a.h(b0,b3)
b0=H.k(H.c([b3],u),"$ie",a6,"$ae")
b1=a5.c
if(b1!=null)b1.$2(b7,b0)}}b8=O.kM()
b8.sdr(C.q)
b8.c.h(0,O.jZ(c1,b.ch))
b8.c.h(0,O.jZ(c1,a7.ch))
b9=M.fj(c1,c1)
b9.sad(b8)
c5=M.kn(H.c([a,a4,a5,b9],[M.am]))
u=s.d
if(u!==c5){if(u!=null)u.gl().C(0,s.gcJ())
s.d=c5
c5.gl().h(0,s.gcJ())
s.cK()}V.nr(s)}},M={
kn:function(a){var u=new M.d8()
u.b9(M.am)
u.e=!0
u.f=!1
u.r=null
u.aF(u.gh6(),u.gh8())
if(a!=null)u.bS(0,a)
return u},
fj:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null,i=new M.db()
i.a=!0
u=E.dh()
t=F.hK()
s=t.a
r=new V.H(-1,-1,1)
r=r.q(0,Math.sqrt(r.B(r)))
q=s.bf(new V.ay(1,2,4,6),new V.a_(1,0,0,1),new V.a3(-1,-1,0),new V.X(0,1),r,j)
s=t.a
r=new V.H(1,-1,1)
r=r.q(0,Math.sqrt(r.B(r)))
p=s.bf(new V.ay(0,3,4,6),new V.a_(0,0,1,1),new V.a3(1,-1,0),new V.X(1,1),r,j)
s=t.a
r=new V.H(1,1,1)
r=r.q(0,Math.sqrt(r.B(r)))
o=s.bf(new V.ay(0,2,5,6),new V.a_(0,1,0,1),new V.a3(1,1,0),new V.X(1,0),r,j)
s=t.a
r=V.bh()
n=new V.H(-1,1,1)
n=n.q(0,Math.sqrt(n.B(n)))
m=s.bf(new V.ay(0,2,4,7),new V.a_(1,1,0,1),new V.a3(-1,1,0),r,n,j)
t.d.dj(H.c([q,p,o,m],[F.ao]))
t.au()
u.saG(0,t)
i.e=u
l=new X.fL()
k=i.b
i.b=l
l.gl().h(0,i.gU())
u=new D.u("camera",k,i.b,[X.bO])
u.b=!0
i.P(u)
i.saQ(0,a)
i.sad(b)
return i},
d8:function d8(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
db:function db(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
di:function di(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dm:function dm(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
am:function am(){}},A={
m0:function(a,b){var u=a.b0,t=new A.dA(b,u)
t.bp(b,u)
t.es(a,b)
return t},
m1:function(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="MaterialLight_"+a1.gar(a1)+a2.gar(a2)+a3.gar(a3)+a4.gar(a4)+a5.gar(a5)+a6.gar(a6)+a7.gar(a7)+a8.gar(a8)+a9.gar(a9)+"_"
e+=a?"1":"0"
e+=b?"1":"0"
e+=c?"1":"0"
e=e+"0_"+a0
u=b0.length
if(u>0){e+="_Dir"
for(t=0;t<b0.length;b0.length===u||(0,H.w)(b0),++t)e+="_"+H.h(b0[t].a)}u=b1.length
if(u>0){e+="_Point"
for(t=0;t<b1.length;b1.length===u||(0,H.w)(b1),++t)e+="_"+H.h(b1[t].a)}u=b2.length
if(u>0){e+="_Spot"
for(t=0;t<b2.length;b2.length===u||(0,H.w)(b2),++t)e+="_"+H.h(b2[t].a)}for(u=b0.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b0[t].b
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
f=$.av()
if(k){u=$.br()
f=new Z.b6(f.a|u.a)}if(j){u=$.bq()
f=new Z.b6(f.a|u.a)}if(i){u=$.bs()
f=new Z.b6(f.a|u.a)}if(h){u=$.bp()
f=new Z.b6(f.a|u.a)}return new A.h4(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,s,p,l,p,r,g,!0,!1,!1,o,r,m,k,j,!1,i,h,!1,b,c,!1,a0,e.charCodeAt(0)==0?e:e,f)},
jn:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
jo:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.jn(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.jI(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
mE:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jn(b,t,"emission")
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
mB:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jo(b,t,"ambient")
b.a+="\n"},
mC:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jo(b,t,"diffuse")
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
mF:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jo(b,t,"invDiffuse")
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
mL:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jo(b,t,"specular")
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
mH:function(a,b){var u,t,s
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
mJ:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jn(b,t,"reflect")
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
mK:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jn(b,t,"refract")
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
mD:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.h(u)
s=A.jI(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.aw()
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
r=[P.n]
o=H.c([],r)
n=a.b
if(!n.a)n=n.c
else n=!0
if(n)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
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
c.a+="      highLight = intensity*("+C.a.u(m," + ")+");\n"}else c.a+="   highLight = "+C.a.u(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.u(o," + ")+");\n"
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
mI:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.h(u)
s=A.jI(t)
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
if(typeof u!=="number")return u.aw()
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
c.a=r+"\n"}r=[P.n]
l=H.c([],r)
C.a.h(l,"lit.color")
if(o)C.a.h(l,"attenuation")
if(u)C.a.h(l,"textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.u(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.c([],r)
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
k=H.c([],r)
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
r=c.a+="      highLight = intensity*("+C.a.u(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.u(l," + ")+");\n"
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
mM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.h(u)
s=A.jI(t)
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
if(typeof u!=="number")return u.aw()
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
c.a=u+"\n"}u=[P.n]
j=H.c([],u)
if(n)C.a.h(j,"attenuation")
if(o)C.a.h(j,"scale")
if(m)C.a.h(j,"texture2D(txt2D, txtLoc).rgb")
else C.a.h(j,"vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.u(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.c([],u)
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
i=H.c([],u)
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
u=c.a+="      highLight = intensity*("+C.a.u(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.u(j," + ")+");\n"
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
mG:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.n])
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
u=b.a+="   return "+C.a.u(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
mN:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.bi("")
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
A.mE(a,i)
A.mB(a,i)
A.mC(a,i)
A.mF(a,i)
A.mL(a,i)
t=a.cy
if(t){r=i.a+="// === Enviromental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.mJ(a,i)
A.mK(a,i)}A.mH(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.w)(q),++n)A.mD(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.w)(q),++n)A.mI(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.w)(q),++n)A.mM(a,q[n],i)
A.mG(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.c([],[P.n])
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
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.w)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.aT(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.w)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.aT(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.w)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.aT(r,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
u=i.a+="   vec4 objClr = vec4("+C.a.u(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
mO:function(a,b){var u,t,s
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
mQ:function(a,b){var u
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
mP:function(a,b){var u
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
mS:function(a,b){var u,t
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
mT:function(a,b){var u,t
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
mR:function(a,b){var u
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
mU:function(a,b){var u
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
jI:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.d.aT(a,1)},
ml:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.D
t=(s||b===C.p?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.q)t+="      clrAccum += color;\n"
else if(b===C.i)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
else t=s?t+"      clrAccum += color;\n      colorCount += 1.0;\n":t+"      clrAccum = color;\n      colorCount = 1.0;\n"
t+="   }\n}\n\nvoid layoutAll()\n{\n"
r=b===C.p
if(r)for(u=a-1;u>=0;--u)t=t+("   if(txtCount > "+u+")\n")+"   {\n"+("     layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return;\n")+("   layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(s)t+="   colorCount = 1.0;\n"
else if(r)t+="   colorCount = 0.0;\n"
t+="   layoutAll();\n"
t=(s?t+"   clrAccum = clrAccum/colorCount;\n":t)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return t.charCodeAt(0)==0?t:t},
mk:function(a,b,c){var u="TextureLayout_"+a+"_"+C.e.i(b.a),t=new A.dS(c,u)
t.bp(c,u)
t.ex(a,b,c)
return t},
k0:function(a,b,c,d,e){var u=new A.il(a,c,e)
u.f=d
u.shP(P.m_(d,0,P.t))
return u},
d3:function d3(a,b,c){this.a=a
this.b=b
this.c=c},
f5:function f5(a){this.a=a},
ak:function ak(a,b,c){this.a=a
this.b=b
this.c=c},
dn:function dn(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fJ:function fJ(a,b){this.a=a
this.b=b},
dA:function dA(a,b){var _=this
_.dG=_.iT=_.dF=_.bg=_.b0=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.j0=_.j_=_.iZ=_.cb=_.ca=_.c9=_.c8=_.c7=_.c6=_.dS=_.iY=_.dR=_.dQ=_.iX=_.dP=_.dO=_.dN=_.iW=_.dM=_.dL=_.dK=_.iV=_.dJ=_.dI=_.iU=_.dH=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aD:function aD(a,b){this.a=a
this.b=b},
aF:function aF(a,b){this.a=a
this.b=b},
aG:function aG(a,b){this.a=a
this.b=b},
h4:function h4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.b0=b3
_.bg=b4},
bZ:function bZ(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c0:function c0(a,b,c,d,e,f,g,h,i,j){var _=this
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
c1:function c1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cC:function cC(){},
bv:function bv(a,b){this.a=a
this.b=b},
dS:function dS(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dX:function dX(){},
iq:function iq(a){this.a=a},
ag:function ag(a,b,c){this.a=a
this.c=b
this.d=c},
im:function im(a,b,c){this.a=a
this.c=b
this.d=c},
io:function io(a,b,c){this.a=a
this.c=b
this.d=c},
ip:function ip(a,b,c){this.a=a
this.c=b
this.d=c},
il:function il(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a6:function a6(a,b,c){this.a=a
this.c=b
this.d=c},
ar:function ar(a,b,c){this.a=a
this.c=b
this.d=c},
T:function T(a,b,c){this.a=a
this.c=b
this.d=c},
bH:function bH(a,b,c){this.a=a
this.c=b
this.d=c},
ir:function ir(a,b,c){this.a=a
this.c=b
this.d=c},
c_:function c_(a,b,c){this.a=a
this.c=b
this.d=c},
ad:function ad(a,b,c){this.a=a
this.c=b
this.d=c},
az:function az(a,b,c){this.a=a
this.c=b
this.d=c},
ah:function ah(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lb:function(a,b,c,d){var u=F.hK()
F.cX(u,b,c,d,a,1,0,0,1)
F.cX(u,b,c,d,a,0,1,0,3)
F.cX(u,b,c,d,a,0,0,1,2)
F.cX(u,b,c,d,a,-1,0,0,0)
F.cX(u,b,c,d,a,0,-1,0,0)
F.cX(u,b,c,d,a,0,0,-1,3)
u.au()
return u},
jm:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cX:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.H(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.H(u+a3,t+a1,s+a2)
q=new V.H(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.H(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jm(i)
l=F.jm(j.b)
k=F.lp(d,a0,new F.jl(j,F.jm(j.c),F.jm(j.d),l,m,c),b)
if(k!=null)a.b3(k)},
ld:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.hK()
t=b?-1:1
s=-6.283185307179586/e
r=H.c([],[F.ao])
q=u.a
p=new V.H(0,0,t)
p=p.q(0,Math.sqrt(p.B(p)))
C.a.h(r,q.hT(new V.ay(a,-1,-1,-1),new V.a_(1,1,1,1),new V.a3(0,0,c),new V.H(0,0,t),new V.X(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.E(k)
j=new V.H(m,l,t).q(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.e4(new V.ay(a,-1,-1,-1),null,new V.a_(i,g,h,1),new V.a3(m*k,l*k,c),new V.H(0,0,t),new V.X(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.dj(r)
return u},
lc:function(a,b,c){return F.n7(!0,!0,1,new F.jt(a,c),b)},
n7:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.lp(c,e,new F.ju(d),null)
if(u==null)return
u.au()
u.dm()
u.b3(F.ld(3,!1,1,new F.jv(d),e))
u.b3(F.ld(1,!0,-1,new F.jw(d),e))
return u},
ns:function(a){var u,t,s={}
s.a=u
s.a=null
s.a=new F.jG()
t=F.lb(8,null,new F.jH(s,a),8)
t.dm()
return t},
lp:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.hK()
t=H.c([],[F.ao])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.e4(g,g,new V.a_(p,0,0,1),g,g,new V.X(r,1),g,g,0)
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
o=F.e4(g,g,new V.a_(j,i,h,1),g,g,new V.X(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.c2(d))}}u.d.hS(a+1,b+1,t)
return u},
cm:function(a,b,c){var u=new F.a2(),t=a.a
if(t==null)H.z(P.x("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.z(P.x("May not create a face with vertices attached to different shapes."))
u.bQ(a)
u.bR(b)
u.ht(c)
C.a.h(u.a.a.d.b,u)
u.a.a.Z()
return u},
lW:function(a,b){var u=new F.bb(),t=a.a
if(t==null)H.z(P.x("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.z(P.x("May not create a line with vertices attached to different shapes."))
u.bQ(a)
u.bR(b)
C.a.h(u.a.a.c.b,u)
u.a.a.Z()
return u},
hK:function(){var u=new F.dN(),t=new F.iy(u)
t.b=!1
t.shQ(H.c([],[F.ao]))
u.a=t
t=new F.hN(u)
t.sbJ(H.c([],[F.bE]))
u.b=t
t=new F.hM(u)
t.sfa(H.c([],[F.bb]))
u.c=t
t=new F.hL(u)
t.sf1(H.c([],[F.a2]))
u.d=t
u.e=null
return u},
e4:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ao(),r=new F.iG()
r.sbJ(H.c([],[F.bE]))
s.b=r
r=new F.iC()
u=[F.bb]
r.sfb(H.c([],u))
r.sfc(H.c([],u))
s.c=r
r=new F.iz()
u=[F.a2]
r.sf2(H.c([],u))
r.sf3(H.c([],u))
r.sf4(H.c([],u))
s.d=r
h=$.lD()
s.e=0
r=$.av()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.br().a)!==0?e:t
s.x=(u&$.bq().a)!==0?b:t
s.y=(u&$.b9().a)!==0?f:t
s.z=(u&$.bs().a)!==0?g:t
s.Q=(u&$.lE().a)!==0?c:t
s.ch=(u&$.cb().a)!==0?i:0
s.cx=(u&$.bp().a)!==0?a:t
return s},
jl:function jl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jt:function jt(a,b){this.a=a
this.b=b},
ju:function ju(a){this.a=a},
jv:function jv(a){this.a=a},
jw:function jw(a){this.a=a},
jG:function jG(){},
jH:function jH(a,b){this.a=a
this.b=b},
a2:function a2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fA:function fA(){},
hR:function hR(){},
bb:function bb(){this.b=this.a=null},
fS:function fS(){},
ik:function ik(){},
bE:function bE(){this.a=null},
dN:function dN(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hL:function hL(a){this.a=a
this.b=null},
hM:function hM(a){this.a=a
this.b=null},
hN:function hN(a){this.a=a
this.b=null},
ao:function ao(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iI:function iI(a){this.a=a},
iH:function iH(a){this.a=a},
iy:function iy(a){this.a=a
this.c=this.b=null},
iz:function iz(){this.d=this.c=this.b=null},
iA:function iA(a,b){this.a=a
this.b=b},
iB:function iB(a,b){this.a=a
this.b=b},
iC:function iC(){this.c=this.b=null},
iE:function iE(){},
iD:function iD(){},
iF:function iF(){},
hr:function hr(){},
iG:function iG(){this.b=null}},T={
kL:function(a){var u=new T.i6()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
bk:function bk(){},
bY:function bY(){},
i6:function i6(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cG:function cG(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i7:function i7(a){var _=this
_.a=a
_.e=_.d=_.c=null},
i8:function i8(a,b,c,d,e,f,g){var _=this
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
H.jV.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gI:function(a){return H.cz(a)},
i:function(a){return"Instance of '"+H.h(H.cA(a))+"'"}}
J.fN.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iY:1}
J.ds.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.dt.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.hw.prototype={}
J.cJ.prototype={}
J.bC.prototype={
i:function(a){var u=a[$.ls()]
if(u==null)return this.ep(a)
return"JavaScript function for "+H.h(J.aw(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ijR:1}
J.aT.prototype={
h:function(a,b){H.I(b,H.A(a,0))
if(!!a.fixed$length)H.z(P.an("add"))
a.push(b)},
e8:function(a,b){if(!!a.fixed$length)H.z(P.an("removeAt"))
if(b<0||b>=a.length)throw H.i(P.dI(b,null))
return a.splice(b,1)[0]},
C:function(a,b){var u
if(!!a.fixed$length)H.z(P.an("remove"))
for(u=0;u<a.length;++u)if(J.G(a[u],b)){a.splice(u,1)
return!0}return!1},
bS:function(a,b){var u,t
H.k(b,"$ie",[H.A(a,0)],"$ae")
if(!!a.fixed$length)H.z(P.an("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.w)(b),++t)a.push(b[t])},
L:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[H.A(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.i(P.cj(a))}},
u:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.m(t,u,H.h(a[u]))
return t.join(b)},
ia:function(a){return this.u(a,"")},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
cE:function(a,b,c){var u=a.length
if(b>u)throw H.i(P.aY(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.i(P.aY(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.A(a,0)])
return H.c(a.slice(b,c),[H.A(a,0)])},
cD:function(a,b){return this.cE(a,b,null)},
gi5:function(a){if(a.length>0)return a[0]
throw H.i(H.kt())},
gcf:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.i(H.kt())},
bo:function(a,b){var u=H.A(a,0)
H.o(b,{func:1,ret:P.t,args:[u,u]})
if(!!a.immutable$list)H.z(P.an("sort"))
H.dO(a,0,a.length-1,b,u)},
ah:function(a,b){var u
for(u=0;u<a.length;++u)if(J.G(a[u],b))return!0
return!1},
i:function(a){return P.jS(a,"[","]")},
gT:function(a){return new J.ai(a,a.length,[H.A(a,0)])},
gI:function(a){return H.cz(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.z(P.an("set length"))
if(b<0)throw H.i(P.aY(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.i(H.c6(a,b))
return a[b]},
m:function(a,b,c){H.I(c,H.A(a,0))
if(!!a.immutable$list)H.z(P.an("indexed set"))
if(b>=a.length||b<0)throw H.i(H.c6(a,b))
a[b]=c},
$ie:1,
$ib:1}
J.jU.prototype={}
J.ai.prototype={
gK:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.i(H.w(s))
u=t.c
if(u>=r){t.sd_(null)
return!1}t.sd_(s[u]);++t.c
return!0},
sd_:function(a){this.d=H.I(a,H.A(this,0))},
$iaS:1}
J.cq.prototype={
hY:function(a,b){var u
H.lj(b)
if(typeof b!=="number")throw H.i(H.bn(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbi(b)
if(this.gbi(a)===u)return 0
if(this.gbi(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbi:function(a){return a===0?1/a<0:a<0},
iG:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.i(P.an(""+a+".toInt()"))},
cc:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.i(P.an(""+a+".floor()"))},
V:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.an(""+a+".round()"))},
ee:function(a,b){var u
if(b>20)throw H.i(P.aY(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbi(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
n:function(a,b){if(typeof b!=="number")throw H.i(H.bn(b))
return a*b},
ei:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
er:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dg(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.dg(a,b)},
dg:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.i(P.an("Result of truncating division is "+H.h(u)+": "+H.h(a)+" ~/ "+b))},
bd:function(a,b){var u
if(a>0)u=this.hy(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hy:function(a,b){return b>31?0:a>>>b},
$iq:1,
$ia9:1}
J.dr.prototype={$it:1}
J.dq.prototype={}
J.bS.prototype={
c1:function(a,b){if(b<0)throw H.i(H.c6(a,b))
if(b>=a.length)H.z(H.c6(a,b))
return a.charCodeAt(b)},
ba:function(a,b){if(b>=a.length)throw H.i(H.c6(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(typeof b!=="string")throw H.i(P.jM(b,null,null))
return a+b},
cF:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.i(P.dI(b,null))
if(b>c)throw H.i(P.dI(b,null))
if(c>a.length)throw H.i(P.dI(c,null))
return a.substring(b,c)},
aT:function(a,b){return this.cF(a,b,null)},
n:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.B)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ak:function(a,b){var u=b-a.length
if(u<=0)return a
return this.n(" ",u)+a},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ikC:1,
$in:1}
H.a0.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.d.c1(this.a,b)},
$ae_:function(){return[P.t]},
$ay:function(){return[P.t]},
$ae:function(){return[P.t]},
$ab:function(){return[P.t]}}
H.fv.prototype={}
H.dx.prototype={
gK:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.kc(s),q=r.gk(s)
if(t.b!==q)throw H.i(P.cj(s))
u=t.c
if(u>=q){t.saU(null)
return!1}t.saU(r.H(s,u));++t.c
return!0},
saU:function(a){this.d=H.I(a,H.A(this,0))},
$iaS:1}
H.h_.prototype={
gT:function(a){return new H.h0(J.cc(this.a),this.b,this.$ti)},
gk:function(a){return J.cd(this.a)},
H:function(a,b){return this.b.$1(J.kj(this.a,b))},
$ae:function(a,b){return[b]}}
H.h0.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.saU(u.c.$1(t.gK(t)))
return!0}u.saU(null)
return!1},
gK:function(a){return this.a},
saU:function(a){this.a=H.I(a,H.A(this,1))},
$aaS:function(a,b){return[b]}}
H.iK.prototype={
gT:function(a){return new H.iL(J.cc(this.a),this.b,this.$ti)}}
H.iL.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(H.B(t.$1(u.gK(u))))return!0
return!1},
gK:function(a){var u=this.a
return u.gK(u)}}
H.bQ.prototype={}
H.e_.prototype={}
H.dZ.prototype={}
H.ih.prototype={
aj:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hs.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fP.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.h(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.h(t.a)+")"
return s+r+"' on '"+u+"' ("+H.h(t.a)+")"}}
H.it.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jJ.prototype={
$1:function(a){if(!!J.V(a).$ibx)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:23}
H.eD.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaq:1}
H.ch.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ijR:1,
giK:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i3.prototype={}
H.hW.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ca(u)+"'"}}
H.ce.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.ce))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cz(this.a)
else u=typeof t!=="object"?J.bM(t):H.cz(t)
return(u^H.cz(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.h(H.cA(u))+"'")}}
H.ij.prototype={
i:function(a){return this.a}}
H.fe.prototype={
i:function(a){return this.a}}
H.hH.prototype={
i:function(a){return"RuntimeError: "+H.h(this.a)}}
H.iM.prototype={
i:function(a){return"Assertion failed: "+P.dj(this.a)}}
H.W.prototype={
gk:function(a){return this.a},
gaC:function(a){return new H.dw(this,[H.A(this,0)])},
dw:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cX(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cX(t,b)}else return s.i8(b)},
i8:function(a){var u=this.d
if(u==null)return!1
return this.ce(this.bw(u,J.bM(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bb(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bb(r,b)
s=t==null?null:t.b
return s}else return q.i9(b)},
i9:function(a){var u,t,s=this.d
if(s==null)return
u=this.bw(s,J.bM(a)&0x3ffffff)
t=this.ce(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
H.I(b,H.A(o,0))
H.I(c,H.A(o,1))
if(typeof b==="string"){u=o.b
o.cO(u==null?o.b=o.bG():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cO(t==null?o.c=o.bG():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bG()
r=J.bM(b)&0x3ffffff
q=o.bw(s,r)
if(q==null)o.bO(s,r,[o.bH(b,c)])
else{p=o.ce(q,b)
if(p>=0)q[p].b=c
else q.push(o.bH(b,c))}}},
L:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.A(s,0),H.A(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.i(P.cj(s))
u=u.c}},
cO:function(a,b,c){var u,t=this
H.I(b,H.A(t,0))
H.I(c,H.A(t,1))
u=t.bb(a,b)
if(u==null)t.bO(a,b,t.bH(b,c))
else u.b=c},
bH:function(a,b){var u=this,t=new H.fT(H.I(a,H.A(u,0)),H.I(b,H.A(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
ce:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.G(a[t].a,b))return t
return-1},
i:function(a){return P.kw(this)},
bb:function(a,b){return a[b]},
bw:function(a,b){return a[b]},
bO:function(a,b,c){a[b]=c},
eU:function(a,b){delete a[b]},
cX:function(a,b){return this.bb(a,b)!=null},
bG:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bO(t,u,t)
this.eU(t,u)
return t}}
H.fT.prototype={}
H.dw.prototype={
gk:function(a){return this.a.a},
gT:function(a){var u=this.a,t=new H.fU(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fU.prototype={
gK:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.cj(t))
else{t=u.c
if(t==null){u.scN(null)
return!1}else{u.scN(t.a)
u.c=u.c.c
return!0}}},
scN:function(a){this.d=H.I(a,H.A(this,0))},
$iaS:1}
H.jz.prototype={
$1:function(a){return this.a(a)},
$S:23}
H.jA.prototype={
$2:function(a,b){return this.a(a,b)},
$S:29}
H.jB.prototype={
$1:function(a){return this.a(H.aa(a))},
$S:30}
H.fO.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ikC:1}
H.cw.prototype={$inP:1}
H.dC.prototype={
gk:function(a){return a.length},
$iJ:1,
$aJ:function(){}}
H.cv.prototype={
j:function(a,b){H.bI(b,a,a.length)
return a[b]},
$abQ:function(){return[P.q]},
$ay:function(){return[P.q]},
$ie:1,
$ae:function(){return[P.q]},
$ib:1,
$ab:function(){return[P.q]}}
H.dD.prototype={
$abQ:function(){return[P.t]},
$ay:function(){return[P.t]},
$ie:1,
$ae:function(){return[P.t]},
$ib:1,
$ab:function(){return[P.t]}}
H.hl.prototype={
j:function(a,b){H.bI(b,a,a.length)
return a[b]}}
H.hm.prototype={
j:function(a,b){H.bI(b,a,a.length)
return a[b]}}
H.hn.prototype={
j:function(a,b){H.bI(b,a,a.length)
return a[b]}}
H.ho.prototype={
j:function(a,b){H.bI(b,a,a.length)
return a[b]}}
H.hp.prototype={
j:function(a,b){H.bI(b,a,a.length)
return a[b]}}
H.dE.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bI(b,a,a.length)
return a[b]},
$inQ:1}
H.hq.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bI(b,a,a.length)
return a[b]},
$inR:1}
H.cP.prototype={}
H.cQ.prototype={}
H.cR.prototype={}
H.cS.prototype={}
P.iO.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:22}
P.iN.prototype={
$1:function(a){var u,t
this.a.a=H.o(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:31}
P.iP.prototype={
$0:function(){this.a.$0()},
$S:2}
P.iQ.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eJ.prototype={
eE:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c5(new P.ji(this,b),0),a)
else throw H.i(P.an("`setTimeout()` not found."))},
eF:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c5(new P.jh(this,a,Date.now(),b),0),a)
else throw H.i(P.an("Periodic timer."))},
$ib2:1}
P.ji.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jh.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.er(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.b8.prototype={
ic:function(a){if((this.c&15)!==6)return!0
return this.b.b.cr(H.o(this.d,{func:1,ret:P.Y,args:[P.P]}),a.a,P.Y,P.P)},
i7:function(a){var u=this.e,t=P.P,s={futureOr:1,type:H.A(this,1)},r=this.b.b
if(H.eZ(u,{func:1,args:[P.P,P.aq]}))return H.kb(r.iB(u,a.a,a.b,null,t,P.aq),s)
else return H.kb(r.cr(H.o(u,{func:1,args:[P.P]}),a.a,null,t),s)}}
P.aB.prototype={
ed:function(a,b,c){var u,t,s,r=H.A(this,0)
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.U
if(u!==C.f){H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.mW(b,u)}t=new P.aB($.U,[c])
s=b==null?1:3
this.cP(new P.b8(t,s,a,b,[r,c]))
return t},
iF:function(a,b){return this.ed(a,null,b)},
cP:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.j(t.c,"$ib8")
t.c=a}else{if(s===2){u=H.j(t.c,"$iaB")
s=u.a
if(s<4){u.cP(a)
return}t.a=s
t.c=u.c}P.jr(null,null,t.b,H.o(new P.iX(t,a),{func:1,ret:-1}))}},
d9:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.j(p.c,"$ib8")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.j(p.c,"$iaB")
u=q.a
if(u<4){q.d9(a)
return}p.a=u
p.c=q.c}o.a=p.bc(a)
P.jr(null,null,p.b,H.o(new P.j0(o,p),{func:1,ret:-1}))}},
bL:function(){var u=H.j(this.c,"$ib8")
this.c=null
return this.bc(u)},
bc:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cT:function(a){var u,t,s=this,r=H.A(s,0)
H.kb(a,{futureOr:1,type:r})
u=s.$ti
if(H.k8(a,"$icn",u,"$acn"))if(H.k8(a,"$iaB",u,null))P.l_(a,s)
else P.ms(a,s)
else{t=s.bL()
H.I(a,r)
s.a=4
s.c=a
P.cN(s,t)}},
cU:function(a,b){var u,t=this
H.j(b,"$iaq")
u=t.bL()
t.a=8
t.c=new P.aj(a,b)
P.cN(t,u)},
$icn:1}
P.iX.prototype={
$0:function(){P.cN(this.a,this.b)},
$S:2}
P.j0.prototype={
$0:function(){P.cN(this.b,this.a.a)},
$S:2}
P.iY.prototype={
$1:function(a){var u=this.a
u.a=0
u.cT(a)},
$S:22}
P.iZ.prototype={
$2:function(a,b){H.j(b,"$iaq")
this.a.cU(a,b)},
$1:function(a){return this.$2(a,null)},
$S:44}
P.j_.prototype={
$0:function(){this.a.cU(this.b,this.c)},
$S:2}
P.j3.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eb(H.o(s.d,{func:1}),null)}catch(r){u=H.bL(r)
t=H.c8(r)
if(o.d){s=H.j(o.a.a.c,"$iaj").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.j(o.a.a.c,"$iaj")
else q.b=new P.aj(u,t)
q.a=!0
return}if(!!J.V(n).$icn){if(n instanceof P.aB&&n.a>=4){if(n.a===8){s=o.b
s.b=H.j(n.c,"$iaj")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.iF(new P.j4(p),null)
s.a=!1}},
$S:3}
P.j4.prototype={
$1:function(a){return this.a},
$S:38}
P.j2.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.A(s,0)
q=H.I(n.c,r)
p=H.A(s,1)
n.a.b=s.b.b.cr(H.o(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.bL(o)
t=H.c8(o)
s=n.a
s.b=new P.aj(u,t)
s.a=!0}},
$S:3}
P.j1.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.j(m.a.a.c,"$iaj")
r=m.c
if(H.B(r.ic(u))&&r.e!=null){q=m.b
q.b=r.i7(u)
q.a=!1}}catch(p){t=H.bL(p)
s=H.c8(p)
r=H.j(m.a.a.c,"$iaj")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.aj(t,s)
n.a=!0}},
$S:3}
P.e6.prototype={}
P.hZ.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.aB($.U,[P.t])
r.a=0
u=H.A(s,0)
t=H.o(new P.i0(r,s),{func:1,ret:-1,args:[u]})
H.o(new P.i1(r,q),{func:1,ret:-1})
W.a7(s.a,s.b,t,!1,u)
return q}}
P.i0.prototype={
$1:function(a){H.I(a,H.A(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.A(this.b,0)]}}}
P.i1.prototype={
$0:function(){this.b.cT(this.a.a)},
$S:2}
P.cE.prototype={}
P.i_.prototype={}
P.b2.prototype={}
P.aj.prototype={
i:function(a){return H.h(this.a)},
$ibx:1}
P.jk.prototype={$io3:1}
P.jq.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dF():s
s=this.b
if(s==null)throw H.i(t)
u=H.i(t)
u.stack=s.i(0)
throw u},
$S:2}
P.ja.prototype={
iC:function(a){var u,t,s,r=null
H.o(a,{func:1,ret:-1})
try{if(C.f===$.U){a.$0()
return}P.l2(r,r,this,a,-1)}catch(s){u=H.bL(s)
t=H.c8(s)
P.jp(r,r,this,u,H.j(t,"$iaq"))}},
iD:function(a,b,c){var u,t,s,r=null
H.o(a,{func:1,ret:-1,args:[c]})
H.I(b,c)
try{if(C.f===$.U){a.$1(b)
return}P.l3(r,r,this,a,b,-1,c)}catch(s){u=H.bL(s)
t=H.c8(s)
P.jp(r,r,this,u,H.j(t,"$iaq"))}},
hV:function(a,b){return new P.jc(this,H.o(a,{func:1,ret:b}),b)},
bU:function(a){return new P.jb(this,H.o(a,{func:1,ret:-1}))},
dq:function(a,b){return new P.jd(this,H.o(a,{func:1,ret:-1,args:[b]}),b)},
eb:function(a,b){H.o(a,{func:1,ret:b})
if($.U===C.f)return a.$0()
return P.l2(null,null,this,a,b)},
cr:function(a,b,c,d){H.o(a,{func:1,ret:c,args:[d]})
H.I(b,d)
if($.U===C.f)return a.$1(b)
return P.l3(null,null,this,a,b,c,d)},
iB:function(a,b,c,d,e,f){H.o(a,{func:1,ret:d,args:[e,f]})
H.I(b,e)
H.I(c,f)
if($.U===C.f)return a.$2(b,c)
return P.mX(null,null,this,a,b,c,d,e,f)}}
P.jc.prototype={
$0:function(){return this.a.eb(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jb.prototype={
$0:function(){return this.a.iC(this.b)},
$S:3}
P.jd.prototype={
$1:function(a){var u=this.c
return this.a.iD(this.b,H.I(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.j8.prototype={
gT:function(a){var u=this,t=new P.el(u,u.r,u.$ti)
t.c=u.e
return t},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.I(b,H.A(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cR(u==null?s.b=P.k3():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cR(t==null?s.c=P.k3():t,b)}else return s.eH(0,b)},
eH:function(a,b){var u,t,s,r=this
H.I(b,H.A(r,0))
u=r.d
if(u==null)u=r.d=P.k3()
t=r.cV(b)
s=u[t]
if(s==null)u[t]=[r.bs(b)]
else{if(r.d0(s,b)>=0)return!1
s.push(r.bs(b))}return!0},
C:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hl(this.c,b)
else return this.hk(0,b)},
hk:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.f7(r,b)
t=s.d0(u,b)
if(t<0)return!1
s.dh(u.splice(t,1)[0])
return!0},
cR:function(a,b){H.I(b,H.A(this,0))
if(H.j(a[b],"$icO")!=null)return!1
a[b]=this.bs(b)
return!0},
hl:function(a,b){var u
if(a==null)return!1
u=H.j(a[b],"$icO")
if(u==null)return!1
this.dh(u)
delete a[b]
return!0},
d2:function(){this.r=1073741823&this.r+1},
bs:function(a){var u,t=this,s=new P.cO(H.I(a,H.A(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.d2()
return s},
dh:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.d2()},
cV:function(a){return J.bM(a)&1073741823},
f7:function(a,b){return a[this.cV(b)]},
d0:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.G(a[t].a,b))return t
return-1}}
P.cO.prototype={}
P.el.prototype={
gK:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.cj(t))
else{t=u.c
if(t==null){u.scS(null)
return!1}else{u.scS(H.I(t.a,H.A(u,0)))
u.c=u.c.b
return!0}}},
scS:function(a){this.d=H.I(a,H.A(this,0))},
$iaS:1}
P.fV.prototype={$ie:1,$ib:1}
P.y.prototype={
gT:function(a){return new H.dx(a,this.gk(a),[H.d_(this,a,"y",0)])},
H:function(a,b){return this.j(a,b)},
iI:function(a,b){var u,t=this,s=H.c([],[H.d_(t,a,"y",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.m(s,u,t.j(a,u))
return s},
iH:function(a){return this.iI(a,!0)},
i:function(a){return P.jS(a,"[","]")}}
P.fY.prototype={}
P.fZ.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.h(a)
t.a=u+": "
t.a+=H.h(b)},
$S:17}
P.ae.prototype={
L:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.d_(s,a,"ae",0),H.d_(s,a,"ae",1)]})
for(u=J.cc(s.gaC(a));u.A();){t=u.gK(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.cd(this.gaC(a))},
i:function(a){return P.kw(a)},
$iF:1}
P.je.prototype={
i:function(a){return P.jS(this,"{","}")},
H:function(a,b){var u,t,s,r=this
P.kH(b,"index")
for(u=P.mu(r,r.r,H.A(r,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.i(P.S(b,r,"index",null,t))},
$ie:1,
$ikJ:1}
P.em.prototype={}
P.ci.prototype={}
P.da.prototype={}
P.fw.prototype={
$aci:function(){return[P.n,[P.b,P.t]]}}
P.iw.prototype={}
P.ix.prototype={
hZ:function(a){var u,t,s=P.kI(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jj(u)
if(t.f5(a,0,s)!==s)t.di(C.d.c1(a,s-1),0)
return new Uint8Array(u.subarray(0,H.my(0,t.b,u.length)))},
$ada:function(){return[P.n,[P.b,P.t]]}}
P.jj.prototype={
di:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
f5:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.d.c1(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.d.ba(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.di(r,C.d.ba(a,p)))s=p}else if(r<=2047){q=n.b
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
P.Y.prototype={}
P.ax.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.ax&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.e.bd(u,30))&1073741823},
i:function(a){var u=this,t=P.lQ(H.ma(u)),s=P.dc(H.m8(u)),r=P.dc(H.m4(u)),q=P.dc(H.m5(u)),p=P.dc(H.m7(u)),o=P.dc(H.m9(u)),n=P.lR(H.m6(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.q.prototype={}
P.bw.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.bw&&this.a===b.a},
gI:function(a){return C.e.gI(this.a)},
i:function(a){var u,t,s,r=new P.fu(),q=this.a
if(q<0)return"-"+new P.bw(0-q).i(0)
u=r.$1(C.e.a4(q,6e7)%60)
t=r.$1(C.e.a4(q,1e6)%60)
s=new P.ft().$1(q%1e6)
return""+C.e.a4(q,36e8)+":"+H.h(u)+":"+H.h(t)+"."+H.h(s)}}
P.ft.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:21}
P.fu.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:21}
P.bx.prototype={}
P.f4.prototype={
i:function(a){return"Assertion failed"}}
P.dF.prototype={
i:function(a){return"Throw of null."}}
P.aL.prototype={
gbu:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbt:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbu()+o+u
if(!q.a)return t
s=q.gbt()
r=P.dj(q.b)
return t+s+": "+r}}
P.bW.prototype={
gbu:function(){return"RangeError"},
gbt:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.h(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.h(s)
else if(t>s)u=": Not in range "+H.h(s)+".."+H.h(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.h(s)}return u}}
P.fM.prototype={
gbu:function(){return"RangeError"},
gbt:function(){var u,t=H.a8(this.b)
if(typeof t!=="number")return t.ae()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.h(u)},
gk:function(a){return this.f}}
P.iu.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.is.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hV.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fi.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dj(u)+"."}}
P.hv.prototype={
i:function(a){return"Out of Memory"},
$ibx:1}
P.dQ.prototype={
i:function(a){return"Stack Overflow"},
$ibx:1}
P.fo.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ee.prototype={
i:function(a){return"Exception: "+this.a}}
P.fH.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.d.cF(s,0,75)+"...":s
return t+"\n"+r}}
P.t.prototype={}
P.e.prototype={
gk:function(a){var u,t=this.gT(this)
for(u=0;t.A();)++u
return u},
H:function(a,b){var u,t,s
P.kH(b,"index")
for(u=this.gT(this),t=0;u.A();){s=u.gK(u)
if(b===t)return s;++t}throw H.i(P.S(b,this,"index",null,t))},
i:function(a){return P.lT(this,"(",")")}}
P.aS.prototype={}
P.b.prototype={$ie:1}
P.F.prototype={}
P.N.prototype={
gI:function(a){return P.P.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.a9.prototype={}
P.P.prototype={constructor:P.P,$iP:1,
p:function(a,b){return this===b},
gI:function(a){return H.cz(this)},
i:function(a){return"Instance of '"+H.h(H.cA(this))+"'"},
toString:function(){return this.i(this)}}
P.aq.prototype={}
P.n.prototype={$ikC:1}
P.bi.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.r.prototype={}
W.f0.prototype={
gk:function(a){return a.length}}
W.f2.prototype={
i:function(a){return String(a)}}
W.f3.prototype={
i:function(a){return String(a)}}
W.d4.prototype={}
W.bP.prototype={
cz:function(a,b,c){if(c!=null)return a.getContext(b,P.n4(c))
return a.getContext(b)},
eh:function(a,b){return this.cz(a,b,null)},
$ibP:1}
W.cg.prototype={$icg:1}
W.bu.prototype={
gk:function(a){return a.length}}
W.ck.prototype={$ick:1}
W.fk.prototype={
gk:function(a){return a.length}}
W.Q.prototype={$iQ:1}
W.cl.prototype={
gk:function(a){return a.length}}
W.fl.prototype={}
W.aN.prototype={}
W.aO.prototype={}
W.fm.prototype={
gk:function(a){return a.length}}
W.fn.prototype={
gk:function(a){return a.length}}
W.fp.prototype={
gk:function(a){return a.length}}
W.de.prototype={$ide:1}
W.fq.prototype={
i:function(a){return String(a)}}
W.df.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[[P.ap,P.a9]]},
$ay:function(){return[[P.ap,P.a9]]},
$ie:1,
$ae:function(){return[[P.ap,P.a9]]},
$ib:1,
$ab:function(){return[[P.ap,P.a9]]},
$aC:function(){return[[P.ap,P.a9]]}}
W.dg.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gam(a))+" x "+H.h(this.gai(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$iap)return!1
return a.left===u.gbj(b)&&a.top===u.gbm(b)&&this.gam(a)===u.gam(b)&&this.gai(a)===u.gai(b)},
gI:function(a){return W.l0(C.c.gI(a.left),C.c.gI(a.top),C.c.gI(this.gam(a)),C.c.gI(this.gai(a)))},
gds:function(a){return a.bottom},
gai:function(a){return a.height},
gbj:function(a){return a.left},
gbl:function(a){return a.right},
gbm:function(a){return a.top},
gam:function(a){return a.width},
$iap:1,
$aap:function(){return[P.a9]}}
W.fr.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[P.n]},
$ay:function(){return[P.n]},
$ie:1,
$ae:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]},
$aC:function(){return[P.n]}}
W.fs.prototype={
gk:function(a){return a.length}}
W.iS.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.j(u[b],"$ia1")},
h:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var u=this.iH(this)
return new J.ai(u,u.length,[H.A(u,0)])},
$ay:function(){return[W.a1]},
$ae:function(){return[W.a1]},
$ab:function(){return[W.a1]}}
W.a1.prototype={
gdt:function(a){return new W.iS(a,a.children)},
gdu:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.ae()
if(s<0)s=-s*0
if(typeof r!=="number")return r.ae()
if(r<0)r=-r*0
return new P.ap(u,t,s,r,[P.a9])},
i:function(a){return a.localName},
$ia1:1}
W.l.prototype={$il:1}
W.f.prototype={
hR:function(a,b,c,d){H.o(c,{func:1,args:[W.l]})
if(c!=null)this.eI(a,b,c,!1)},
eI:function(a,b,c,d){return a.addEventListener(b,H.c5(H.o(c,{func:1,args:[W.l]}),1),!1)},
$if:1}
W.aQ.prototype={$iaQ:1}
W.fB.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aQ]},
$ay:function(){return[W.aQ]},
$ie:1,
$ae:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aC:function(){return[W.aQ]}}
W.fC.prototype={
gk:function(a){return a.length}}
W.fG.prototype={
gk:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.fK.prototype={
gk:function(a){return a.length}}
W.bR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.K]},
$ay:function(){return[W.K]},
$ie:1,
$ae:function(){return[W.K]},
$ib:1,
$ab:function(){return[W.K]},
$ibR:1,
$aC:function(){return[W.K]}}
W.by.prototype={$iby:1,
gdz:function(a){return a.data}}
W.cp.prototype={$icp:1}
W.aU.prototype={$iaU:1}
W.fW.prototype={
i:function(a){return String(a)}}
W.he.prototype={
gk:function(a){return a.length}}
W.hf.prototype={
j:function(a,b){return P.bo(a.get(H.aa(b)))},
L:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bo(t.value[1]))}},
gaC:function(a){var u=H.c([],[P.n])
this.L(a,new W.hg(u))
return u},
gk:function(a){return a.size},
$aae:function(){return[P.n,null]},
$iF:1,
$aF:function(){return[P.n,null]}}
W.hg.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hh.prototype={
j:function(a,b){return P.bo(a.get(H.aa(b)))},
L:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bo(t.value[1]))}},
gaC:function(a){var u=H.c([],[P.n])
this.L(a,new W.hi(u))
return u},
gk:function(a){return a.size},
$aae:function(){return[P.n,null]},
$iF:1,
$aF:function(){return[P.n,null]}}
W.hi.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aW.prototype={$iaW:1}
W.hj.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aW]},
$ay:function(){return[W.aW]},
$ie:1,
$ae:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aC:function(){return[W.aW]}}
W.ac.prototype={$iac:1}
W.iR.prototype={
gT:function(a){var u=this.a.childNodes
return new W.dk(u,u.length,[H.d_(C.J,u,"C",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$ay:function(){return[W.K]},
$ae:function(){return[W.K]},
$ab:function(){return[W.K]}}
W.K.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.eo(a):u},
$iK:1}
W.cx.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.K]},
$ay:function(){return[W.K]},
$ie:1,
$ae:function(){return[W.K]},
$ib:1,
$ab:function(){return[W.K]},
$aC:function(){return[W.K]}}
W.aX.prototype={$iaX:1,
gk:function(a){return a.length}}
W.hx.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aX]},
$ay:function(){return[W.aX]},
$ie:1,
$ae:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aC:function(){return[W.aX]}}
W.hF.prototype={
j:function(a,b){return P.bo(a.get(H.aa(b)))},
L:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bo(t.value[1]))}},
gaC:function(a){var u=H.c([],[P.n])
this.L(a,new W.hG(u))
return u},
gk:function(a){return a.size},
$aae:function(){return[P.n,null]},
$iF:1,
$aF:function(){return[P.n,null]}}
W.hG.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hI.prototype={
gk:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.hS.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aZ]},
$ay:function(){return[W.aZ]},
$ie:1,
$ae:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aC:function(){return[W.aZ]}}
W.b_.prototype={$ib_:1}
W.hT.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b_]},
$ay:function(){return[W.b_]},
$ie:1,
$ae:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aC:function(){return[W.b_]}}
W.b0.prototype={$ib0:1,
gk:function(a){return a.length}}
W.hX.prototype={
j:function(a,b){return a.getItem(H.aa(b))},
L:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.n,P.n]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaC:function(a){var u=H.c([],[P.n])
this.L(a,new W.hY(u))
return u},
gk:function(a){return a.length},
$aae:function(){return[P.n,P.n]},
$iF:1,
$aF:function(){return[P.n,P.n]}}
W.hY.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:34}
W.aH.prototype={$iaH:1}
W.b1.prototype={$ib1:1}
W.aI.prototype={$iaI:1}
W.i4.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aI]},
$ay:function(){return[W.aI]},
$ie:1,
$ae:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$aC:function(){return[W.aI]}}
W.i5.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b1]},
$ay:function(){return[W.b1]},
$ie:1,
$ae:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aC:function(){return[W.b1]}}
W.ia.prototype={
gk:function(a){return a.length}}
W.b3.prototype={$ib3:1}
W.aK.prototype={$iaK:1}
W.id.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b3]},
$ay:function(){return[W.b3]},
$ie:1,
$ae:function(){return[W.b3]},
$ib:1,
$ab:function(){return[W.b3]},
$aC:function(){return[W.b3]}}
W.ie.prototype={
gk:function(a){return a.length}}
W.bG.prototype={}
W.iv.prototype={
i:function(a){return String(a)}}
W.iJ.prototype={
gk:function(a){return a.length}}
W.b7.prototype={
gi2:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.an("deltaY is not supported"))},
gi1:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.an("deltaX is not supported"))},
$ib7:1}
W.cM.prototype={
ho:function(a,b){return a.requestAnimationFrame(H.c5(H.o(b,{func:1,ret:-1,args:[P.a9]}),1))},
eZ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iT.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.Q]},
$ay:function(){return[W.Q]},
$ie:1,
$ae:function(){return[W.Q]},
$ib:1,
$ab:function(){return[W.Q]},
$aC:function(){return[W.Q]}}
W.e9.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$iap)return!1
return a.left===u.gbj(b)&&a.top===u.gbm(b)&&a.width===u.gam(b)&&a.height===u.gai(b)},
gI:function(a){return W.l0(C.c.gI(a.left),C.c.gI(a.top),C.c.gI(a.width),C.c.gI(a.height))},
gai:function(a){return a.height},
gam:function(a){return a.width}}
W.j5.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aR]},
$ay:function(){return[W.aR]},
$ie:1,
$ae:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aC:function(){return[W.aR]}}
W.er.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.K]},
$ay:function(){return[W.K]},
$ie:1,
$ae:function(){return[W.K]},
$ib:1,
$ab:function(){return[W.K]},
$aC:function(){return[W.K]}}
W.jf.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b0]},
$ay:function(){return[W.b0]},
$ie:1,
$ae:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aC:function(){return[W.b0]}}
W.jg.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aH]},
$ay:function(){return[W.aH]},
$ie:1,
$ae:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aC:function(){return[W.aH]}}
W.iU.prototype={}
W.k2.prototype={}
W.iV.prototype={}
W.iW.prototype={
$1:function(a){return this.a.$1(H.j(a,"$il"))},
$S:36}
W.C.prototype={
gT:function(a){return new W.dk(a,this.gk(a),[H.d_(this,a,"C",0)])}}
W.dk.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sd1(J.f_(u.a,t))
u.c=t
return!0}u.sd1(null)
u.c=s
return!1},
gK:function(a){return this.d},
sd1:function(a){this.d=H.I(a,H.A(this,0))},
$iaS:1}
W.e8.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.es.prototype={}
W.et.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.cT.prototype={}
W.cU.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eE.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.cV.prototype={}
W.cW.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
P.eO.prototype={$iby:1,
gdz:function(a){return this.a}}
P.js.prototype={
$2:function(a,b){this.a[a]=b},
$S:17}
P.fD.prototype={
gbx:function(){var u=this.b,t=H.au(u,"y",0),s=W.a1
return new H.h_(new H.iK(u,H.o(new P.fE(),{func:1,ret:P.Y,args:[t]}),[t]),H.o(new P.fF(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.cd(this.gbx().a)},
j:function(a,b){var u=this.gbx()
return u.b.$1(J.kj(u.a,b))},
gT:function(a){var u=P.kv(this.gbx(),!1,W.a1)
return new J.ai(u,u.length,[H.A(u,0)])},
$ay:function(){return[W.a1]},
$ae:function(){return[W.a1]},
$ab:function(){return[W.a1]}}
P.fE.prototype={
$1:function(a){return!!J.V(H.j(a,"$iK")).$ia1},
$S:35}
P.fF.prototype={
$1:function(a){return H.m(H.j(a,"$iK"),"$ia1")},
$S:39}
P.j9.prototype={
gbl:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.E(t)
return H.I(u+t,H.A(this,0))},
gds:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.E(t)
return H.I(u+t,H.A(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.h(u.a)+", "+H.h(u.b)+") "+H.h(u.c)+" x "+H.h(u.d)},
p:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.V(b)
if(!!u.$iap){t=p.a
if(t==u.gbj(b)){s=p.b
if(s==u.gbm(b)){r=p.c
if(typeof t!=="number")return t.F()
if(typeof r!=="number")return H.E(r)
q=H.A(p,0)
if(H.I(t+r,q)===u.gbl(b)){t=p.d
if(typeof s!=="number")return s.F()
if(typeof t!=="number")return H.E(t)
u=H.I(s+t,q)===u.gds(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t=this,s=t.a,r=J.bM(s),q=t.b,p=J.bM(q),o=t.c
if(typeof s!=="number")return s.F()
if(typeof o!=="number")return H.E(o)
u=H.A(t,0)
o=C.e.gI(H.I(s+o,u))
s=t.d
if(typeof q!=="number")return q.F()
if(typeof s!=="number")return H.E(s)
u=C.e.gI(H.I(q+s,u))
return P.mt(P.j7(P.j7(P.j7(P.j7(0,r),p),o),u))}}
P.ap.prototype={
gbj:function(a){return this.a},
gbm:function(a){return this.b},
gam:function(a){return this.c},
gai:function(a){return this.d}}
P.ba.prototype={$iba:1}
P.fR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.j(a,b)},
$ay:function(){return[P.ba]},
$ie:1,
$ae:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aC:function(){return[P.ba]}}
P.bg.prototype={$ibg:1}
P.ht.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.j(a,b)},
$ay:function(){return[P.bg]},
$ie:1,
$ae:function(){return[P.bg]},
$ib:1,
$ab:function(){return[P.bg]},
$aC:function(){return[P.bg]}}
P.hz.prototype={
gk:function(a){return a.length}}
P.i2.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.j(a,b)},
$ay:function(){return[P.n]},
$ie:1,
$ae:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]},
$aC:function(){return[P.n]}}
P.p.prototype={
gdt:function(a){return new P.fD(a,new W.iR(a))}}
P.bl.prototype={$ibl:1}
P.ig.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.j(a,b)},
$ay:function(){return[P.bl]},
$ie:1,
$ae:function(){return[P.bl]},
$ib:1,
$ab:function(){return[P.bl]},
$aC:function(){return[P.bl]}}
P.ej.prototype={}
P.ek.prototype={}
P.eu.prototype={}
P.ev.prototype={}
P.eF.prototype={}
P.eG.prototype={}
P.eM.prototype={}
P.eN.prototype={}
P.f6.prototype={
gk:function(a){return a.length}}
P.f7.prototype={
j:function(a,b){return P.bo(a.get(H.aa(b)))},
L:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bo(t.value[1]))}},
gaC:function(a){var u=H.c([],[P.n])
this.L(a,new P.f8(u))
return u},
gk:function(a){return a.size},
$aae:function(){return[P.n,null]},
$iF:1,
$aF:function(){return[P.n,null]}}
P.f8.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.f9.prototype={
gk:function(a){return a.length}}
P.bN.prototype={}
P.hu.prototype={
gk:function(a){return a.length}}
P.e7.prototype={}
P.d5.prototype={$id5:1}
P.dl.prototype={$idl:1}
P.dH.prototype={$idH:1}
P.dK.prototype={$idK:1}
P.bX.prototype={
ec:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.V(g)
if(!!u.$iby&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.n5(g))
return}if(!!u.$icp&&h==null&&t&&!0){this.hF(a,b,c,d,e,f,g)
return}throw H.i(P.lJ("Incorrect number or type of arguments"))},
iE:function(a,b,c,d,e,f,g){return this.ec(a,b,c,d,e,f,g,null,null,null)},
hF:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a2:function(a,b,c){return a.uniform1f(b,c)},
aS:function(a,b,c){return a.uniform1i(b,c)},
b8:function(a,b,c,d){return a.uniform2f(b,c,d)},
R:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
cu:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
ef:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cv:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibX:1}
P.dM.prototype={$idM:1}
P.dR.prototype={$idR:1}
P.dY.prototype={$idY:1}
P.hU.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.S(b,a,null,null,null))
return P.bo(a.item(b))},
H:function(a,b){return this.j(a,b)},
$ay:function(){return[[P.F,,,]]},
$ie:1,
$ae:function(){return[[P.F,,,]]},
$ib:1,
$ab:function(){return[[P.F,,,]]},
$aC:function(){return[[P.F,,,]]}}
P.eB.prototype={}
P.eC.prototype={}
O.R.prototype={
b9:function(a){var u=this
u.sfd(H.c([],[a]))
u.sd7(null)
u.sd4(null)
u.sd8(null)},
cA:function(a,b,c){var u=this,t=H.au(u,"R",0)
H.o(b,{func:1,ret:P.Y,args:[[P.e,t]]})
t={func:1,ret:-1,args:[P.t,[P.e,t]]}
H.o(a,t)
H.o(c,t)
u.sd7(b)
u.sd4(a)
u.sd8(c)},
aF:function(a,b){return this.cA(a,null,b)},
bI:function(a){var u
H.k(a,"$ie",[H.au(this,"R",0)],"$ae")
u=this.b
if(u!=null)return u.$1(a)
return!0},
d3:function(a,b){var u
H.k(b,"$ie",[H.au(this,"R",0)],"$ae")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.ai(u,u.length,[H.A(u,0)])},
H:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.au(s,"R",0)
H.I(b,r)
r=[r]
if(H.B(s.bI(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.d3(t,H.c([b],r))}},
bS:function(a,b){var u,t,s=this
H.k(b,"$ie",[H.au(s,"R",0)],"$ae")
if(H.B(s.bI(b))){u=s.a
t=u.length
C.a.bS(u,b)
s.d3(t,b)}},
sfd:function(a){this.a=H.k(a,"$ib",[H.au(this,"R",0)],"$ab")},
sd7:function(a){this.b=H.o(a,{func:1,ret:P.Y,args:[[P.e,H.au(this,"R",0)]]})},
sd4:function(a){this.c=H.o(a,{func:1,ret:-1,args:[P.t,[P.e,H.au(this,"R",0)]]})},
sd8:function(a){H.o(a,{func:1,ret:-1,args:[P.t,[P.e,H.au(this,"R",0)]]})},
$ie:1}
O.cs.prototype={
gk:function(a){return this.a.length},
gl:function(){var u=this.b
return u==null?this.b=D.M():u},
aH:function(){var u=this.b
if(u!=null)u.v(null)},
gaa:function(a){var u=this.a
if(u.length>0)return C.a.gcf(u)
else return V.bd()},
bk:function(a){var u=this.a
if(a==null)C.a.h(u,V.bd())
else C.a.h(u,a)
this.aH()},
b6:function(){var u=this.a
if(u.length>0){u.pop()
this.aH()}},
sby:function(a){this.a=H.k(a,"$ib",[V.a4],"$ab")}}
E.fc.prototype={}
E.al.prototype={
cQ:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.ai(u,u.length,[H.A(u,0)]);u.A();){t=u.d
if(t.f==null)t.cQ()}},
saG:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gl().C(0,s.ge2())
u=s.c
if(u!=null)u.gl().h(0,s.ge2())
t=new D.u("shape",r,s.c,[F.dN])
t.b=!0
s.ap(t)}},
sad:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gl().C(0,s.ge4())
u=s.f
s.f=a
if(a!=null)a.gl().h(0,s.ge4())
s.cQ()
t=new D.u("technique",u,s.f,[O.bj])
t.b=!0
s.ap(t)}},
sav:function(a){var u,t,s=this
if(!J.G(s.r,a)){u=s.r
if(u!=null)u.gl().C(0,s.ge0())
if(a!=null)a.gl().h(0,s.ge0())
s.r=a
t=new D.u("mover",u,a,[U.a5])
t.b=!0
s.ap(t)}},
a6:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aq(0,b,s):null
if(!J.G(q,s.x)){u=s.x
s.x=q
t=new D.u("matrix",u,q,[V.a4])
t.b=!0
s.ap(t)}r=s.f
if(r!=null)r.a6(0,b)
for(r=s.y.a,r=new J.ai(r,r.length,[H.A(r,0)]);r.A();)r.d.a6(0,b)},
a0:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gaa(s))
else C.a.h(s.a,r.n(0,s.gaa(s)))
s.aH()
a.cn(t.f)
s=a.dy
u=(s&&C.a).gcf(s)
if(u!=null&&t.d!=null)u.cq(a,t)
for(s=t.y.a,s=new J.ai(s,s.length,[H.A(s,0)]);s.A();)s.d.a0(a)
a.cm()
a.dx.b6()},
ap:function(a){var u=this.z
if(u!=null)u.v(a)},
Z:function(){return this.ap(null)},
e3:function(a){H.j(a,"$iv")
this.e=null
this.ap(a)},
im:function(){return this.e3(null)},
e5:function(a){this.ap(H.j(a,"$iv"))},
io:function(){return this.e5(null)},
e1:function(a){this.ap(H.j(a,"$iv"))},
il:function(){return this.e1(null)},
e_:function(a){this.ap(H.j(a,"$iv"))},
ii:function(){return this.e_(null)},
ih:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ie",[E.al],"$ae")
for(u=b.length,t=this.gdZ(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.aP()
o.sX(null)
o.sat(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.sX(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.Z()},
ik:function(a,b){var u,t
H.k(b,"$ie",[E.al],"$ae")
for(u=b.gT(b),t=this.gdZ();u.A();)u.gK(u).gl().C(0,t)
this.Z()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sey:function(a,b){this.y=H.k(b,"$iR",[E.al],"$aR")},
$ibU:1}
E.hB.prototype={
eu:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ax(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cs()
t=[V.a4]
u.sby(H.c([],t))
u.b=null
u.gl().h(0,new E.hC(s))
s.cy=u
u=new O.cs()
u.sby(H.c([],t))
u.b=null
u.gl().h(0,new E.hD(s))
s.db=u
u=new O.cs()
u.sby(H.c([],t))
u.b=null
u.gl().h(0,new E.hE(s))
s.dx=u
s.shE(H.c([],[O.bj]))
u=s.dy;(u&&C.a).h(u,null)
s.shx(new H.W([P.n,A.cC]))},
gix:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gaa(s)
u=t.db
u=t.z=s.n(0,u.gaa(u))
s=u}return s},
ge7:function(){var u,t=this,s=t.ch
if(s==null){s=t.gix()
u=t.dx
u=t.ch=s.n(0,u.gaa(u))
s=u}return s},
cn:function(a){var u=this.dy,t=a==null?(u&&C.a).gcf(u):a;(u&&C.a).h(u,t)},
cm:function(){var u=this.dy
if(u.length>1)u.pop()},
bT:function(a){var u=a.b
if(u.length===0)throw H.i(P.x("May not cache a shader with no name."))
if(this.fr.dw(0,u))throw H.i(P.x('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)},
shE:function(a){this.dy=H.k(a,"$ib",[O.bj],"$ab")},
shx:function(a){this.fr=H.k(a,"$iF",[P.n,A.cC],"$aF")}}
E.hC.prototype={
$1:function(a){var u
H.j(a,"$iv")
u=this.a
u.ch=u.z=null},
$S:11}
E.hD.prototype={
$1:function(a){var u
H.j(a,"$iv")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:11}
E.hE.prototype={
$1:function(a){var u
H.j(a,"$iv")
u=this.a
u.cx=u.ch=null},
$S:11}
E.dU.prototype={
cL:function(a){H.j(a,"$iv")
this.e9()},
cK:function(){return this.cL(null)},
gi6:function(){var u,t=this,s=Date.now(),r=C.e.a4(P.ko(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ax(s,!1)
return u/r},
dc:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.n()
if(typeof r!=="number")return H.E(r)
u=C.c.cc(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.n()
t=C.c.cc(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kO(C.j,s.giA())}},
e9:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.o(new E.i9(this),{func:1,ret:-1,args:[P.a9]})
C.u.eZ(u)
C.u.ho(u,W.l6(t,P.a9))}},
iz:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dc()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ax(r,!1)
s.y=P.ko(r-s.r.a).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aH()
r=s.db
C.a.sk(r.a,0)
r.aH()
r=s.dx
C.a.sk(r.a,0)
r.aH()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.a0(p.e)}}catch(q){u=H.bL(q)
t=H.c8(q)
P.kg("Error: "+H.h(u))
P.kg("Stack: "+H.h(t))
throw H.i(u)}}}
E.i9.prototype={
$1:function(a){var u
H.lj(a)
u=this.a
if(u.ch){u.ch=!1
u.iz()}},
$S:32}
Z.e5.prototype={$inx:1}
Z.d6.prototype={
Y:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.bL(s)
t=P.x('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.h(u))
throw H.i(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.h(u.e)+"]"}}
Z.cL.prototype={$iny:1}
Z.bt.prototype={
ao:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
Y:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].Y(a)},
aE:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a0:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.n],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aw(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.u(p,", ")+"\nAttrs:   "+C.a.u(r,", ")},
sf8:function(a){this.b=H.k(a,"$ib",[Z.bz],"$ab")},
$inE:1}
Z.bz.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.h(H.cA(this.c))+"'")+"]"}}
Z.b6.prototype={
gcC:function(a){var u=this.a,t=(u&$.av().a)!==0?3:0
if((u&$.br().a)!==0)t+=3
if((u&$.bq().a)!==0)t+=3
if((u&$.b9().a)!==0)t+=2
if((u&$.bs().a)!==0)t+=3
if((u&$.d1().a)!==0)t+=3
if((u&$.d2().a)!==0)t+=4
if((u&$.cb().a)!==0)++t
return(u&$.bp().a)!==0?t+4:t},
hU:function(a){var u,t=$.av(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.br()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bq()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b9()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d1()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d2()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cb()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bp()
if((s&t.a)!==0)if(u===a)return t
return $.lF()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b6))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.n]),t=this.a
if((t&$.av().a)!==0)C.a.h(u,"Pos")
if((t&$.br().a)!==0)C.a.h(u,"Norm")
if((t&$.bq().a)!==0)C.a.h(u,"Binm")
if((t&$.b9().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bs().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d1().a)!==0)C.a.h(u,"Clr3")
if((t&$.d2().a)!==0)C.a.h(u,"Clr4")
if((t&$.cb().a)!==0)C.a.h(u,"Weight")
if((t&$.bp().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.u(u,"|")}}
D.ff.prototype={}
D.aP.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.v]}
H.o(b,u)
if(this.a==null)this.sX(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
C:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[D.v]})
u=s.a
u=u==null?null:C.a.ah(u,b)
if(u===!0){u=s.a
t=(u&&C.a).C(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.ah(u,b)
if(u===!0){u=s.b
t=(u&&C.a).C(u,b)||t}return t},
v:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.v()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.L(P.kv(u,!0,{func:1,ret:-1,args:[D.v]}),new D.fy(q))
u=r.b
if(u!=null){r.sat(H.c([],[{func:1,ret:-1,args:[D.v]}]))
C.a.L(u,new D.fz(q))}return!0},
c5:function(){return this.v(null)},
al:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.v(u)}}},
sX:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")},
sat:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")}}
D.fy.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:16}
D.fz.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:16}
D.v.prototype={}
D.bA.prototype={}
D.bB.prototype={}
D.u.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}
X.d7.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d7))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.du.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.du))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.fQ.prototype={
it:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
ip:function(a){this.c=a.b
this.d.C(0,a.a)
return!1},
shj:function(a){this.d=H.k(a,"$ikJ",[P.t],"$akJ")}}
X.dy.prototype={}
X.fX.prototype={
aV:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.n()
u=b.b
t=q.ch
if(typeof u!=="number")return u.n()
s=new V.X(o.a+n*m,o.b+u*t)
t=q.a.gaN()
r=new X.be(a,V.bh(),q.x,t,s)
r.b=!0
q.z=new P.ax(p,!1)
q.x=s
return r},
cl:function(a,b){this.r=a.a
return!1},
b5:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ej()
if(typeof u!=="number")return u.aw()
this.r=(u&~t)>>>0
return!1},
b4:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.aV(a,b))
return!0},
iu:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaN()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.n()
q=a.b
p=o.cy
if(typeof q!=="number")return q.n()
t=new X.cu(new V.O(s*r,q*p),u,t)
t.b=!0
n.v(t)
return!0},
fQ:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dy(c,r.a.gaN(),b)
s.b=!0
t.v(s)
r.y=new P.ax(u,!1)
r.x=V.bh()}}
X.at.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.at))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.B(this.b)?"Alt+":""
return u+(H.B(this.c)?"Shift+":"")}}
X.be.prototype={}
X.hk.prototype={
bv:function(a,b,c){var u=this,t=new P.ax(Date.now(),!1),s=u.a.gaN(),r=new X.be(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cl:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.v(this.bv(a,b,!0))
return!0},
b5:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.ej()
if(typeof t!=="number")return t.aw()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.v(u.bv(a,b,!0))
return!0},
b4:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.bv(a,b,!1))
return!0},
iv:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaN()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.n()
r=a.b
q=p.ch
if(typeof r!=="number")return r.n()
u=new X.cu(new V.O(t*s,r*q),u,b)
u.b=!0
o.v(u)
return!0},
gdB:function(){var u=this.b
return u==null?this.b=D.M():u},
gbn:function(){var u=this.c
return u==null?this.c=D.M():u},
gdX:function(){var u=this.d
return u==null?this.d=D.M():u}}
X.cu.prototype={}
X.hy.prototype={}
X.dW.prototype={}
X.ic.prototype={
aV:function(a,b){var u,t,s,r,q=this
H.k(a,"$ib",[V.X],"$ab")
u=new P.ax(Date.now(),!1)
t=a.length>0?a[0]:V.bh()
s=q.a.gaN()
r=new X.dW(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
is:function(a){var u
H.k(a,"$ib",[V.X],"$ab")
u=this.b
if(u==null)return!1
u.v(this.aV(a,!0))
return!0},
iq:function(a){var u
H.k(a,"$ib",[V.X],"$ab")
u=this.c
if(u==null)return!1
u.v(this.aV(a,!0))
return!0},
ir:function(a){var u
H.k(a,"$ib",[V.X],"$ab")
u=this.d
if(u==null)return!1
u.v(this.aV(a,!1))
return!0}}
X.e0.prototype={
gaN:function(){var u=this.a,t=C.h.gdu(u).c
t.toString
u=C.h.gdu(u).d
u.toString
return V.hA(0,0,t,u)},
cY:function(a){var u=a.keyCode,t=H.B(a.ctrlKey)||H.B(a.metaKey)
return new X.du(u,new X.at(t,a.altKey,a.shiftKey))},
aM:function(a){var u=this.b,t=H.B(a.ctrlKey)||H.B(a.metaKey)
u.c=new X.at(t,a.altKey,a.shiftKey)},
bP:function(a){var u=this.b,t=H.B(a.ctrlKey)||H.B(a.metaKey)
u.c=new X.at(t,a.altKey,a.shiftKey)},
aB:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.J()
u=t.top
if(typeof r!=="number")return r.J()
return new V.X(s-q,r-u)},
aW:function(a){return new V.O(a.movementX,a.movementY)},
bK:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.X])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
q=C.c.V(r.pageX)
C.c.V(r.pageY)
p=o.left
C.c.V(r.pageX)
C.a.h(n,new V.X(q-p,C.c.V(r.pageY)-o.top))}return n},
ay:function(a){var u=a.buttons,t=H.B(a.ctrlKey)||H.B(a.metaKey)
return new X.d7(u,new X.at(t,a.altKey,a.shiftKey))},
bz:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.J()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.J()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fK:function(a){this.f=!0},
fs:function(a){this.f=!1},
fA:function(a){H.j(a,"$iac")
if(H.B(this.f)&&this.bz(a))a.preventDefault()},
fO:function(a){var u
H.j(a,"$iaU")
if(!H.B(this.f))return
u=this.cY(a)
this.b.it(u)},
fM:function(a){var u
H.j(a,"$iaU")
if(!H.B(this.f))return
u=this.cY(a)
this.b.ip(u)},
fS:function(a){var u,t,s,r,q=this
H.j(a,"$iac")
u=q.a
u.focus()
q.f=!0
q.aM(a)
if(H.B(q.x)){t=q.ay(a)
s=q.aW(a)
if(q.d.cl(t,s))a.preventDefault()
return}if(H.B(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ay(a)
r=q.aB(a)
if(q.c.cl(t,r))a.preventDefault()},
fW:function(a){var u,t,s,r=this
H.j(a,"$iac")
r.aM(a)
u=r.ay(a)
if(H.B(r.x)){t=r.aW(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.aB(a)
if(r.c.b5(u,s))a.preventDefault()},
fE:function(a){var u,t,s,r=this
H.j(a,"$iac")
if(!r.bz(a)){r.aM(a)
u=r.ay(a)
if(H.B(r.x)){t=r.aW(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.aB(a)
if(r.c.b5(u,s))a.preventDefault()}},
fU:function(a){var u,t,s,r=this
H.j(a,"$iac")
r.aM(a)
u=r.ay(a)
if(H.B(r.x)){t=r.aW(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.aB(a)
if(r.c.b4(u,s))a.preventDefault()},
fC:function(a){var u,t,s,r=this
H.j(a,"$iac")
if(!r.bz(a)){r.aM(a)
u=r.ay(a)
if(H.B(r.x)){t=r.aW(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.aB(a)
if(r.c.b4(u,s))a.preventDefault()}},
fY:function(a){var u,t,s=this
H.j(a,"$ib7")
s.aM(a)
u=new V.O((a&&C.t).gi1(a),C.t.gi2(a)).q(0,180)
if(H.B(s.x)){if(s.d.iu(u))a.preventDefault()
return}if(H.B(s.r))return
t=s.aB(a)
if(s.c.iv(u,t))a.preventDefault()},
h_:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ay(s.y)
t=s.aB(s.y)
s.d.fQ(u,t,r)}},
hf:function(a){var u,t=this
H.j(a,"$iaK")
t.a.focus()
t.f=!0
t.bP(a)
u=t.bK(a)
if(t.e.is(u))a.preventDefault()},
hb:function(a){var u
H.j(a,"$iaK")
this.bP(a)
u=this.bK(a)
if(this.e.iq(u))a.preventDefault()},
hd:function(a){var u
H.j(a,"$iaK")
this.bP(a)
u=this.bK(a)
if(this.e.ir(u))a.preventDefault()},
sf0:function(a){this.z=H.k(a,"$ib",[[P.cE,P.P]],"$ab")}}
D.dd.prototype={$iab:1,$ibU:1}
D.ab.prototype={$ibU:1}
D.dv.prototype={
a8:function(a){var u=this.x
if(u!=null)u.v(a)},
d6:function(a){var u
H.j(a,"$iv")
u=this.y
if(u!=null)u.v(a)},
fP:function(){return this.d6(null)},
h1:function(a){var u,t,s
H.k(a,"$ie",[D.ab],"$ae")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.w)(a),++t){s=a[t]
if(s==null||this.eR(s))return!1}return!0},
fl:function(a,b){var u,t,s,r,q,p,o,n=D.ab
H.k(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gd5(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=H.j(b[q],"$iab")
if(p instanceof D.bD)C.a.h(this.f,p)
o=p.Q
if(o==null){o=new D.aP()
o.sX(null)
o.sat(null)
o.c=null
o.d=0
p.Q=o}H.o(t,s)
if(o.a==null)o.sX(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bA([n])
n.b=!0
this.a8(n)},
h5:function(a,b){var u,t,s,r=D.ab
H.k(b,"$ie",[r],"$ae")
for(u=b.gT(b),t=this.gd5();u.A();){s=u.gK(u)
C.a.C(this.e,s)
s.gl().C(0,t)}r=new D.bB([r])
r.b=!0
this.a8(r)},
eR:function(a){var u=C.a.ah(this.f,a)
return u},
sez:function(a){this.e=H.k(a,"$ib",[D.dd],"$ab")},
shg:function(a){this.f=H.k(a,"$ib",[D.bD],"$ab")},
seB:function(a){this.r=H.k(a,"$ib",[D.dP],"$ab")},
$ae:function(){return[D.ab]},
$aR:function(){return[D.ab]}}
D.bD.prototype={
a8:function(a){var u
H.j(a,"$iv")
u=this.Q
if(u!=null)u.v(a)},
eA:function(){return this.a8(null)},
gan:function(){var u=this.d!=null?1:0
return u+4},
$iab:1,
$ibU:1}
D.dP.prototype={$iab:1,$ibU:1}
V.Z.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}
V.a_.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.L(u.a,3,0)+", "+V.L(u.b,3,0)+", "+V.L(u.c,3,0)+", "+V.L(u.d,3,0)+"]"}}
V.fx.prototype={}
V.bT.prototype={
a5:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.q])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bT))return!1
u=b.a
t=$.D().a
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
i:function(a){var u,t,s,r,q=this,p=[P.q],o=V.c7(H.c([q.a,q.d,q.r],p),3,0),n=V.c7(H.c([q.b,q.e,q.x],p),3,0),m=V.c7(H.c([q.c,q.f,q.y],p),3,0)
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
V.a4.prototype={
a5:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.q])
return t},
dT:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.D().a)return V.bd()
u=1/b1
t=-n
s=-a0
return V.aE((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
n:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aE(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
ct:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a3(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.D().a
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
D:function(a){var u,t,s,r,q,p=this,o=[P.q],n=V.c7(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.c7(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.c7(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.c7(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
M:function(){return this.D("")}}
V.X.prototype={
J:function(a,b){return new V.X(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}}
V.a3.prototype={
J:function(a,b){return new V.a3(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}
V.ay.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ay))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.L(u.a,3,0)+", "+V.L(u.b,3,0)+", "+V.L(u.c,3,0)+", "+V.L(u.d,3,0)+"]"}}
V.bF.prototype={
gac:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bF))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.L(u.a,3,0)+", "+V.L(u.b,3,0)+", "+V.L(u.c,3,0)+", "+V.L(u.d,3,0)+"]"}}
V.O.prototype={
b1:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.E(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.E(t)
return s*r+u*t},
n:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.n()
u=this.b
if(typeof u!=="number")return u.n()
return new V.O(t*b,u*b)},
q:function(a,b){var u,t
if(Math.abs(b-0)<$.D().a){u=$.kU
return u==null?$.kU=new V.O(0,0):u}u=this.a
if(typeof u!=="number")return u.q()
t=this.b
if(typeof t!=="number")return t.q()
return new V.O(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=this.a
s=$.D()
s.toString
if(typeof u!=="number")return u.J()
if(typeof t!=="number")return H.E(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.J()
if(typeof t!=="number")return H.E(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}}
V.H.prototype={
b1:function(a){return Math.sqrt(this.B(this))},
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cg:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.H(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aY:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.H(u*t-s*r,s*q-p*t,p*r-u*q)},
F:function(a,b){return new V.H(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.H(-this.a,-this.b,-this.c)},
q:function(a,b){if(Math.abs(b-0)<$.D().a)return V.cK()
return new V.H(this.a/b,this.b/b,this.c/b)},
dU:function(){var u=$.D().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.H))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}
V.bm.prototype={
b1:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bm))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.L(u.a,3,0)+", "+V.L(u.b,3,0)+", "+V.L(u.c,3,0)+", "+V.L(u.d,3,0)+"]"}}
U.fh.prototype={
br:function(a){var u=V.jK(a,this.c,this.b)
return u},
gl:function(){var u=this.y
return u==null?this.y=D.M():u},
E:function(a){var u=this.y
if(u!=null)u.v(a)},
scw:function(a,b){},
sci:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.D().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.br(u)}s=new D.u("maximumLocation",s,t.b,[P.q])
s.b=!0
t.E(s)}},
sck:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.D().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.br(u)}s=new D.u("minimumLocation",s,t.c,[P.q])
s.b=!0
t.E(s)}},
sa_:function(a,b){var u,t=this
b=t.br(b)
u=t.d
if(!(Math.abs(u-b)<$.D().a)){t.d=b
u=new D.u("location",u,b,[P.q])
u.b=!0
t.E(u)}},
scj:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.D().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.u("maximumVelocity",r,a,[P.q])
r.b=!0
s.E(r)}},
sS:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.D().a)){u.f=a
t=new D.u("velocity",t,a,[P.q])
t.b=!0
u.E(t)}},
sc3:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.D().a)){this.x=a
u=new D.u("dampening",u,a,[P.q])
u.b=!0
this.E(u)}},
a6:function(a,b){var u,t,s,r=this,q=r.f,p=$.D().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa_(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.D().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sS(u)}}}
U.d9.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.M():u},
aq:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d9))return!1
return J.G(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")}}
U.co.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.M():u},
E:function(a){var u
H.j(a,"$iv")
u=this.e
if(u!=null)u.v(a)},
a9:function(){return this.E(null)},
eD:function(a,b){var u,t,s,r,q,p,o,n=U.a5
H.k(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gaL(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.gl()
o.toString
H.o(t,s)
if(o.a==null)o.sX(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bA([n])
n.b=!0
this.E(n)},
h3:function(a,b){var u,t,s=U.a5
H.k(b,"$ie",[s],"$ae")
for(u=b.gT(b),t=this.gaL();u.A();)u.gK(u).gl().C(0,t)
s=new D.bB([s])
s.b=!0
this.E(s)},
aq:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.ae()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ai(r,r.length,[H.A(r,0)]),u=null;r.A();){q=r.d
if(q!=null){t=q.aq(0,b,c)
if(t!=null)u=u==null?t:t.n(0,u)}}s.f=u==null?V.bd():u
r=s.e
if(r!=null)r.al(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.co))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.G(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ae:function(){return[U.a5]},
$aR:function(){return[U.a5]},
$ia5:1}
U.a5.prototype={}
U.dL.prototype={
gl:function(){var u=this.y
return u==null?this.y=D.M():u},
E:function(a){var u=this.y
if(u!=null)u.v(a)},
seg:function(a){var u
a=V.jK(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.D().a)){this.a=a
u=new D.u("yaw",u,a,[P.q])
u.b=!0
this.E(u)}},
se6:function(a,b){var u
b=V.jK(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.D().a)){this.b=b
u=new D.u("pitch",u,b,[P.q])
u.b=!0
this.E(u)}},
sea:function(a){var u
a=V.jK(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.D().a)){this.c=a
u=new D.u("roll",u,a,[P.q])
u.b=!0
this.E(u)}},
aq:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.seg(u.a+u.d*b.y)
u.se6(0,u.b+u.e*b.y)
u.sea(u.c+u.f*b.y)
u.x=V.kz(u.c).n(0,V.ky(u.b)).n(0,V.jX(u.a))
t=u.y
if(t!=null)t.al(0)}return u.x},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dL))return!1
u=r.a
t=b.a
s=$.D().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.L(u.a,3,0)+", "+V.L(u.b,3,0)+", "+V.L(u.c,3,0)+"], ["+V.L(u.d,3,0)+", "+V.L(u.e,3,0)+", "+V.L(u.f,3,0)+"]"}}
U.e1.prototype={
gl:function(){var u=this.cy
return u==null?this.cy=D.M():u},
E:function(a){var u
H.j(a,"$iv")
u=this.cy
if(u!=null)u.v(a)},
a9:function(){return this.E(null)},
aX:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdB().h(0,u.gbA())
u.a.c.gdX().h(0,u.gbC())
u.a.c.gbn().h(0,u.gbE())
return!0},
bB:function(a){var u=this
H.j(a,"$iv")
if(!J.G(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bD:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.j(a,"$iv"),"$ibe")
if(!H.B(n.y))return
if(H.B(n.x)){u=a.d.J(0,a.y)
u=new V.O(u.a,u.b)
u=u.B(u)
t=n.r
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.x=!1}if(H.B(n.d)){u=a.c
t=a.d.J(0,a.y)
u=new V.O(t.a,t.b).n(0,2).q(0,u.gac())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.n()
s=n.e
if(typeof s!=="number")return H.E(s)
t.sS(u*10*s)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=new V.O(s.a,s.b).n(0,2).q(0,u.gac())
s=n.b
q=r.a
if(typeof q!=="number")return q.O()
p=n.e
if(typeof p!=="number")return H.E(p)
o=n.z
if(typeof o!=="number")return H.E(o)
s.sa_(0,-q*p+o)
n.b.sS(0)
t=t.J(0,a.z)
n.Q=new V.O(t.a,t.b).n(0,2).q(0,u.gac())}n.a9()},
bF:function(a){var u,t,s,r=this
H.j(a,"$iv")
if(!H.B(r.y))return
r.y=!1
if(H.B(r.x))return
u=r.Q
if(u.B(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.n()
s=r.e
if(typeof s!=="number")return H.E(s)
u.sS(t*10*s)
r.a9()}},
aq:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.ae()
if(s<r){t.ch=r
u=b.y
t.b.a6(0,u)
t.cx=V.kz(t.b.d)}return t.cx},
$ia5:1}
U.e2.prototype={
gl:function(){var u=this.fx
return u==null?this.fx=D.M():u},
E:function(a){var u
H.j(a,"$iv")
u=this.fx
if(u!=null)u.v(a)},
a9:function(){return this.E(null)},
aX:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdB().h(0,s.gbA())
s.a.c.gdX().h(0,s.gbC())
s.a.c.gbn().h(0,s.gbE())
u=s.a.d
t=u.f
u=t==null?u.f=D.M():t
u.h(0,s.gfe())
u=s.a.d
t=u.d
u=t==null?u.d=D.M():t
u.h(0,s.gfg())
u=s.a.e
t=u.b
u=t==null?u.b=D.M():t
u.h(0,s.ghL())
u=s.a.e
t=u.d
u=t==null?u.d=D.M():t
u.h(0,s.ghJ())
u=s.a.e
t=u.c
u=t==null?u.c=D.M():t
u.h(0,s.ghH())
return!0},
as:function(a){var u=a.a,t=a.b
if(H.B(this.f)){if(typeof u!=="number")return u.O()
u=-u}if(H.B(this.r)){if(typeof t!=="number")return t.O()
t=-t}return new V.O(u,t)},
bB:function(a){var u=this
a=H.m(H.j(a,"$iv"),"$ibe")
if(!J.G(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bD:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.j(a,"$iv"),"$ibe")
if(!H.B(n.cx))return
if(H.B(n.ch)){u=a.d.J(0,a.y)
u=new V.O(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.B(n.e)){u=a.c
t=a.d.J(0,a.y)
u=n.as(new V.O(t.a,t.b).n(0,2).q(0,u.gac()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=n.as(new V.O(s.a,s.b).n(0,2).q(0,u.gac()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sa_(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.J(0,a.z)
n.dx=n.as(new V.O(t.a,t.b).n(0,2).q(0,u.gac()))}n.a9()},
bF:function(a){var u,t,s,r=this
H.j(a,"$iv")
if(!H.B(r.cx))return
r.cx=!1
if(H.B(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sS(-t*10*u)
r.a9()}},
ff:function(a){var u=this
if(H.m(H.j(a,"$iv"),"$idy").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fh:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.j(a,"$iv"),"$ibe")
if(!J.G(n.d,a.x.b))return
u=a.c
t=a.d
s=t.J(0,a.y)
r=n.as(new V.O(s.a,s.b).n(0,2).q(0,u.gac()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sa_(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.J(0,a.z)
n.dx=n.as(new V.O(t.a,t.b).n(0,2).q(0,u.gac()))
n.a9()},
hM:function(a){var u=this
H.j(a,"$iv")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hK:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.j(a,"$iv"),"$idW")
if(!H.B(n.cx))return
if(H.B(n.ch)){u=a.d.J(0,a.y)
u=new V.O(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.B(n.e)){u=a.c
t=a.d.J(0,a.y)
u=n.as(new V.O(t.a,t.b).n(0,2).q(0,u.gac()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=n.as(new V.O(s.a,s.b).n(0,2).q(0,u.gac()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sa_(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.J(0,a.z)
n.dx=n.as(new V.O(t.a,t.b).n(0,2).q(0,u.gac()))}n.a9()},
hI:function(a){var u,t,s,r=this
H.j(a,"$iv")
if(!H.B(r.cx))return
r.cx=!1
if(H.B(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sS(-t*10*u)
r.a9()}},
aq:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.ae()
if(s<r){t.dy=r
u=b.y
t.c.a6(0,u)
t.b.a6(0,u)
t.fr=V.jX(t.b.d).n(0,V.ky(t.c.d))}return t.fr},
$ia5:1}
U.e3.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.M():u},
E:function(a){var u=this.r
if(u!=null)u.v(a)},
aX:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.M():t
t=r.gfi()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.M():s).h(0,t)
return!0},
fj:function(a){var u,t,s,r,q=this
H.j(a,"$iv")
if(!J.G(q.b,q.a.b.c))return
H.m(a,"$icu")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.n()
r=u+t*s
if(u!==r){q.d=r
u=new D.u("zoom",u,r,[P.q])
u.b=!0
q.E(u)}},
aq:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.kA(u,u,u,1)}return t.f},
$ia5:1}
M.d8.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.M():u},
P:function(a){var u
H.j(a,"$iv")
u=this.r
if(u!=null)u.v(a)},
ax:function(){return this.P(null)},
h7:function(a,b){var u,t,s,r,q,p,o,n=M.am
H.k(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gU(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.gl()
o.toString
H.o(t,s)
if(o.a==null)o.sX(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bA([n])
n.b=!0
this.P(n)},
h9:function(a,b){var u,t,s=M.am
H.k(b,"$ie",[s],"$ae")
for(u=b.gT(b),t=this.gU();u.A();)u.gK(u).gl().C(0,t)
s=new D.bB([s])
s.b=!0
this.P(s)},
a0:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.ai(u,u.length,[H.A(u,0)]);u.A();){t=u.d
if(t!=null)t.a0(a)}s.f=!1},
$ae:function(){return[M.am]},
$aR:function(){return[M.am]},
$iam:1}
M.db.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.M():u},
P:function(a){var u
H.j(a,"$iv")
u=this.r
if(u!=null)u.v(a)},
ax:function(){return this.P(null)},
saQ:function(a,b){var u,t,s=this
if(b==null)b=X.kq(null)
u=s.c
if(u!==b){if(u!=null)u.gl().C(0,s.gU())
t=s.c
s.c=b
b.gl().h(0,s.gU())
u=new D.u("target",t,s.c,[X.cF])
u.b=!0
s.P(u)}},
sad:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gl().C(0,t.gU())
u=t.d
t.d=a
if(a!=null)a.gl().h(0,t.gU())
s=new D.u("technique",u,t.d,[O.bj])
s.b=!0
t.P(s)}},
a0:function(a){var u,t,s=this
a.cn(s.d)
s.c.Y(a)
u=s.b
u.toString
a.cy.bk(V.bd())
t=V.bd()
u.a
a.db.bk(t)
u=s.d
if(u!=null)u.a6(0,a)
s.e.a6(0,a)
s.e.a0(a)
s.b.toString
a.cy.b6()
a.db.b6()
s.c.aE(a)
a.cm()},
$iam:1}
M.di.prototype={
P:function(a){var u
H.j(a,"$iv")
u=this.y
if(u!=null)u.v(a)},
ax:function(){return this.P(null)},
fu:function(a,b){var u,t,s,r,q,p,o,n=E.al
H.k(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gU(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.aP()
o.sX(null)
o.sat(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.sX(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bA([n])
n.b=!0
this.P(n)},
fw:function(a,b){var u,t,s=E.al
H.k(b,"$ie",[s],"$ae")
for(u=b.gT(b),t=this.gU();u.A();)u.gK(u).gl().C(0,t)
s=new D.bB([s])
s.b=!0
this.P(s)},
saQ:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gl().C(0,t.gU())
u=t.c
t.c=b
b.gl().h(0,t.gU())
s=new D.u("target",u,t.c,[X.cF])
s.b=!0
t.P(s)}},
sad:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gl().C(0,t.gU())
u=t.d
t.d=a
if(a!=null)a.gl().h(0,t.gU())
s=new D.u("technique",u,t.d,[O.bj])
s.b=!0
t.P(s)}},
gl:function(){var u=this.y
return u==null?this.y=D.M():u},
a0:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
a.cn(c.d)
c.c.Y(a)
u=c.b
t=a.c
s=a.d
r=u.c
q=u.d
p=u.e
o=p-q
n=1/Math.tan(r*0.5)
m=V.aE(-n/(t/s),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
u.a
a.cy.bk(m)
t=$.kD
if(t==null){t=V.m2()
s=$.kW
if(s==null)s=$.kW=new V.H(0,1,0)
r=$.kV
if(r==null)r=$.kV=new V.H(0,0,-1)
l=r.q(0,Math.sqrt(r.B(r)))
s=s.aY(l)
k=s.q(0,Math.sqrt(s.B(s)))
j=l.aY(k)
i=new V.H(t.a,t.b,t.c)
h=k.O(0).B(i)
g=j.O(0).B(i)
f=l.O(0).B(i)
t=V.aE(k.a,j.a,l.a,h,k.b,j.b,l.b,g,k.c,j.c,l.c,f,0,0,0,1)
$.kD=t
e=t}else e=t
t=u.b
if(t!=null){d=t.aq(0,a,u)
if(d!=null)e=d.n(0,e)}a.db.bk(e)
u=c.d
if(u!=null)u.a6(0,a)
for(u=c.e.a,u=new J.ai(u,u.length,[H.A(u,0)]);u.A();)u.d.a6(0,a)
for(u=c.e.a,u=new J.ai(u,u.length,[H.A(u,0)]);u.A();)u.d.a0(a)
c.b.toString
a.cy.b6()
a.db.b6()
c.c.aE(a)
a.cm()},
seP:function(a,b){this.e=H.k(b,"$iR",[E.al],"$aR")},
$iam:1}
M.dm.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.M():u},
P:function(a){var u
H.j(a,"$iv")
u=this.b
if(u!=null)u.v(a)},
ax:function(){return this.P(null)},
a0:function(a){var u=this.e
if(u!=null)u.a0(a)
u=this.r
if(u!=null)u.a0(a)},
$iam:1}
M.am.prototype={}
A.d3.prototype={}
A.f5.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
i3:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
c4:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ak.prototype={
gar:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
p:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.ak))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.dn.prototype={
df:function(a,b){if(b!=null&&b.d)a.el(b)}}
A.fJ.prototype={
aI:function(a,b,c,d){var u,t,s,r,q=[P.q]
H.k(c,"$ib",q,"$ab")
H.k(d,"$ib",q,"$ab")
u=c.length
if(0>=u)return H.d(c,0)
t=Math.abs(c[0]-0)<$.D().a
if(t){if(0>=d.length)return H.d(d,0)
s=d[0]
d=C.a.cD(d,1)
c=C.a.cD(c,1);--u}else s=0
q=a.a+="vec4 blur"+b+"()\n"
q+="{\n"
a.a=q
if(t)q=a.a+="  vec4 color = texture2D(colorTxt, txt2D)*"+H.h(s)+";\n"
else q=a.a=q+"  vec4 color = vec4(0.0);\n"
q=a.a=q+"  vec2 offset;\n"
for(r=0;r<u;++r){if(r>=c.length)return H.d(c,r)
a.a+="  offset = blurScale * "+H.h(c[r])+";\n"
if(r>=d.length)return H.d(d,r)
a.a+="  color += texture2D(colorTxt, txt2D + offset) * "+H.h(d[r])+";\n"
if(r>=d.length)return H.d(d,r)
q=a.a+="  color += texture2D(colorTxt, txt2D - offset) * "+H.h(d[r])+";\n"}q+="  return color; \n"
a.a=q
q+="}\n"
a.a=q
a.a=q+"\n"},
i:function(a){return this.b}}
A.dA.prototype={
es:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.bi("")
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
A.mO(c0,u)
A.mQ(c0,u)
A.mP(c0,u)
A.mS(c0,u)
A.mT(c0,u)
A.mR(c0,u)
A.mU(c0,u)
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
b5.cd(0,s.charCodeAt(0)==0?s:s,A.mN(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.m(b5.y.G(0,"invViewMat"),"$iad")
if(t)b5.dy=H.m(b5.y.G(0,"objMat"),"$iad")
if(r)b5.fr=H.m(b5.y.G(0,"viewObjMat"),"$iad")
b5.fy=H.m(b5.y.G(0,"projViewObjMat"),"$iad")
if(c0.ry)b5.k1=H.m(b5.y.G(0,"txt2DMat"),"$ic_")
if(c0.x1)b5.k2=H.m(b5.y.G(0,"txtCubeMat"),"$iad")
if(c0.x2)b5.k3=H.m(b5.y.G(0,"colorMat"),"$iad")
b5.seL(H.c([],[A.ad]))
t=c0.y2
if(t>0){b5.k4=H.j(b5.y.G(0,"bendMatCount"),"$iag")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.z(P.x(b7+q+b8));(s&&C.a).h(s,H.m(m,"$iad"))}}t=c0.a
if(t.a)b5.r2=H.m(b5.y.G(0,"emissionClr"),"$iT")
if(t.c)b5.ry=H.m(b5.y.G(0,"emissionTxt"),"$iah")
t=c0.b
if(t.a)b5.x1=H.m(b5.y.G(0,"ambientClr"),"$iT")
if(t.c)b5.y1=H.m(b5.y.G(0,"ambientTxt"),"$iah")
t=c0.c
if(t.a)b5.y2=H.m(b5.y.G(0,"diffuseClr"),"$iT")
if(t.c)b5.bg=H.m(b5.y.G(0,"diffuseTxt"),"$iah")
t=c0.d
if(t.a)b5.dF=H.m(b5.y.G(0,"invDiffuseClr"),"$iT")
if(t.c)b5.dG=H.m(b5.y.G(0,"invDiffuseTxt"),"$iah")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dJ=H.m(b5.y.G(0,"shininess"),"$ia6")
if(s)b5.dH=H.m(b5.y.G(0,"specularClr"),"$iT")
if(t.c)b5.dI=H.m(b5.y.G(0,"specularTxt"),"$iah")}if(c0.f.c)b5.dK=H.m(b5.y.G(0,"bumpTxt"),"$iah")
if(c0.cy){b5.dL=H.m(b5.y.G(0,"envSampler"),"$iah")
t=c0.r
if(t.a)b5.dM=H.m(b5.y.G(0,"reflectClr"),"$iT")
if(t.c)b5.dN=H.m(b5.y.G(0,"reflectTxt"),"$iah")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dO=H.m(b5.y.G(0,"refraction"),"$ia6")
if(s)b5.dP=H.m(b5.y.G(0,"refractClr"),"$iT")
if(t.c)b5.dQ=H.m(b5.y.G(0,"refractTxt"),"$iah")}}t=c0.y
if(t.a)b5.dR=H.m(b5.y.G(0,"alpha"),"$ia6")
if(t.c)b5.dS=H.m(b5.y.G(0,"alphaTxt"),"$iah")
t=P.t
s=[t,A.ag]
b5.seX(new H.W(s))
b5.seY(new H.W([t,[P.b,A.bZ]]))
b5.shh(new H.W(s))
b5.shi(new H.W([t,[P.b,A.c0]]))
b5.shz(new H.W(s))
b5.shA(new H.W([t,[P.b,A.c1]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.bZ],l=0;l<t.length;t.length===s||(0,H.w)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.h(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.aw()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.z(P.x(b7+g+b8))
H.m(m,"$iT")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.z(P.x(b7+g+b8))
H.m(f,"$iT")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.z(P.x(b7+g+b8))
H.m(e,"$iT")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.z(P.x(b7+g+b8))
H.m(m,"$iT")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.z(P.x(b7+g+b8))
H.m(f,"$iT")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.z(P.x(b7+o+b8))
H.m(e,"$iaz")
a=e}else a=b6
C.a.h(h,new A.bZ(b,c,d,m,f,a))}b5.c7.m(0,j,h)
q=b5.c6
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.z(P.x(b7+o+b8))
q.m(0,j,H.j(m,"$iag"))}for(t=c0.Q,s=t.length,r=[A.c0],l=0;l<t.length;t.length===s||(0,H.w)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.h(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.z(P.x(b7+o+b8))
H.m(m,"$iT")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.z(P.x(b7+o+b8))
H.m(f,"$iT")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.z(P.x(b7+o+b8))
H.m(e,"$iT")
if(typeof j!=="number")return j.aw()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.z(P.x(b7+o+b8))
H.m(a0,"$ic_")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.z(P.x(b7+o+b8))
H.m(a0,"$iah")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.z(P.x(b7+o+b8))
H.m(a0,"$iah")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.z(P.x(b7+o+b8))
H.m(a2,"$ibH")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.z(P.x(b7+o+b8))
H.m(a0,"$ia6")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.z(P.x(b7+o+b8))
H.m(a2,"$ia6")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.z(P.x(b7+o+b8))
H.m(a5,"$ia6")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.c0(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.c9.m(0,j,h)
q=b5.c8
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.z(P.x(b7+o+b8))
q.m(0,j,H.j(m,"$iag"))}for(t=c0.ch,s=t.length,r=[A.c1],l=0;l<t.length;t.length===s||(0,H.w)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.h(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.z(P.x(b7+o+b8))
H.m(m,"$iT")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.z(P.x(b7+o+b8))
H.m(f,"$iT")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.z(P.x(b7+o+b8))
H.m(e,"$iT")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.z(P.x(b7+o+b8))
H.m(a0,"$iT")
if(typeof j!=="number")return j.aw()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.z(P.x(b7+o+b8))
H.m(a2,"$iT")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.z(P.x(b7+o+b8))
H.m(a5,"$iT")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.z(P.x(b7+o+b8))
H.m(a9,"$ia6")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.z(P.x(b7+o+b8))
H.m(b0,"$ia6")
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
if(a2==null)H.z(P.x(b7+g+b8))
H.m(a2,"$ibH")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.z(P.x(b7+g+b8))
H.m(a2,"$ia6")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.z(P.x(b7+g+b8))
H.m(a5,"$ia6")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.z(P.x(b7+g+b8))
H.m(a2,"$ia6")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.z(P.x(b7+g+b8))
H.m(a5,"$ia6")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.z(P.x(b7+g+b8))
H.m(a9,"$ia6")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.z(P.x(b7+g+b8))
H.m(a2,"$iaz")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.z(P.x(b7+o+b8))
H.m(a2,"$iaz")
a3=a2}else a3=b6
C.a.h(h,new A.c1(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.cb.m(0,j,h)
q=b5.ca
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.z(P.x(b7+o+b8))
q.m(0,j,H.j(m,"$iag"))}}},
ag:function(a,b){if(b!=null&&b.d>=6)a.em(b)},
seL:function(a){this.r1=H.k(a,"$ib",[A.ad],"$ab")},
seX:function(a){this.c6=H.k(a,"$iF",[P.t,A.ag],"$aF")},
seY:function(a){this.c7=H.k(a,"$iF",[P.t,[P.b,A.bZ]],"$aF")},
shh:function(a){this.c8=H.k(a,"$iF",[P.t,A.ag],"$aF")},
shi:function(a){this.c9=H.k(a,"$iF",[P.t,[P.b,A.c0]],"$aF")},
shz:function(a){this.ca=H.k(a,"$iF",[P.t,A.ag],"$aF")},
shA:function(a){this.cb=H.k(a,"$iF",[P.t,[P.b,A.c1]],"$aF")}}
A.aD.prototype={
i:function(a){return"dirLight"+H.h(this.a)}}
A.aF.prototype={
i:function(a){return"pointLight"+H.h(this.a)}}
A.aG.prototype={
i:function(a){return"spotLight"+H.h(this.a)}}
A.h4.prototype={
i:function(a){return this.b0}}
A.bZ.prototype={}
A.c0.prototype={}
A.c1.prototype={}
A.cC.prototype={
bp:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cd:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cZ(b,35633)
r.f=r.cZ(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.B(H.la(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.z(P.x("Failed to link shader: "+H.h(s)))}r.hu()
r.hw()},
Y:function(a){a.a.useProgram(this.r)
this.x.i3()},
cZ:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.B(H.la(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.i(P.x("Error compiling shader '"+H.h(s)+"': "+H.h(u)))}return s},
hu:function(){var u,t,s,r=this,q=H.c([],[A.d3]),p=r.a,o=H.a8(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d3(p,t.name,s))}r.x=new A.f5(q)},
hw:function(){var u,t,s,r=this,q=H.c([],[A.dX]),p=r.a,o=H.a8(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.i0(t.type,t.size,t.name,s))}r.y=new A.iq(q)},
aJ:function(a,b,c){var u=this.a
if(a===1)return new A.ag(u,b,c)
else return A.k0(u,this.r,b,a,c)},
eS:function(a,b,c){var u=this.a
if(a===1)return new A.az(u,b,c)
else return A.k0(u,this.r,b,a,c)},
eT:function(a,b,c){var u=this.a
if(a===1)return new A.ah(u,b,c)
else return A.k0(u,this.r,b,a,c)},
be:function(a,b){return new P.ee(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
i0:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aJ(b,c,d)
case 5121:return u.aJ(b,c,d)
case 5122:return u.aJ(b,c,d)
case 5123:return u.aJ(b,c,d)
case 5124:return u.aJ(b,c,d)
case 5125:return u.aJ(b,c,d)
case 5126:return new A.a6(u.a,c,d)
case 35664:return new A.ar(u.a,c,d)
case 35665:return new A.T(u.a,c,d)
case 35666:return new A.bH(u.a,c,d)
case 35667:return new A.im(u.a,c,d)
case 35668:return new A.io(u.a,c,d)
case 35669:return new A.ip(u.a,c,d)
case 35674:return new A.ir(u.a,c,d)
case 35675:return new A.c_(u.a,c,d)
case 35676:return new A.ad(u.a,c,d)
case 35678:return u.eS(b,c,d)
case 35680:return u.eT(b,c,d)
case 35670:throw H.i(u.be("BOOL",c))
case 35671:throw H.i(u.be("BOOL_VEC2",c))
case 35672:throw H.i(u.be("BOOL_VEC3",c))
case 35673:throw H.i(u.be("BOOL_VEC4",c))
default:throw H.i(P.x("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}}
A.bv.prototype={
i:function(a){return this.b}}
A.dS.prototype={
ex:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.cd(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.ml(a,b))
p.z=p.x.j(0,"posAttr")
p.Q=H.m(p.y.G(0,"txtCount"),"$iag")
p.ch=H.m(p.y.G(0,"backClr"),"$ibH")
p.shO(H.c([],[A.az]))
p.seQ(H.c([],[A.ad]))
u=[A.ar]
p.shB(H.c([],u))
p.shC(H.c([],u))
p.seV(H.c([],u))
p.seW(H.c([],u))
p.sf6(H.c([],[A.ag]))
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.j(0,r)
if(q==null)H.z(P.x(o+r+n));(u&&C.a).h(u,H.m(q,"$iaz"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.j(0,r)
if(q==null)H.z(P.x(o+r+n));(u&&C.a).h(u,H.m(q,"$iad"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.j(0,r)
if(q==null)H.z(P.x(o+r+n));(u&&C.a).h(u,H.m(q,"$iar"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.j(0,r)
if(q==null)H.z(P.x(o+r+n));(u&&C.a).h(u,H.m(q,"$iar"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.j(0,r)
if(q==null)H.z(P.x(o+r+n));(u&&C.a).h(u,H.m(q,"$iar"))
u=p.fr
s=p.y
r="destSize"+t
q=s.j(0,r)
if(q==null)H.z(P.x(o+r+n));(u&&C.a).h(u,H.m(q,"$iar"))
u=p.fx
s=p.y
r="flip"+t
q=s.j(0,r)
if(q==null)H.z(P.x(o+r+n));(u&&C.a).h(u,H.m(q,"$iag"))}},
shO:function(a){this.cx=H.k(a,"$ib",[A.az],"$ab")},
seQ:function(a){this.cy=H.k(a,"$ib",[A.ad],"$ab")},
shB:function(a){this.db=H.k(a,"$ib",[A.ar],"$ab")},
shC:function(a){this.dx=H.k(a,"$ib",[A.ar],"$ab")},
seV:function(a){this.dy=H.k(a,"$ib",[A.ar],"$ab")},
seW:function(a){this.fr=H.k(a,"$ib",[A.ar],"$ab")},
sf6:function(a){this.fx=H.k(a,"$ib",[A.ag],"$ab")}}
A.dX.prototype={}
A.iq.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
G:function(a,b){var u=this.j(0,b)
if(u==null)throw H.i(P.x("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.M()},
M:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.w)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.ag.prototype={
i:function(a){return"Uniform1i: "+H.h(this.c)}}
A.im.prototype={
i:function(a){return"Uniform2i: "+H.h(this.c)}}
A.io.prototype={
i:function(a){return"Uniform3i: "+H.h(this.c)}}
A.ip.prototype={
i:function(a){return"Uniform4i: "+H.h(this.c)}}
A.il.prototype={
i:function(a){return"Uniform1iv: "+H.h(this.c)},
shP:function(a){H.k(a,"$ib",[P.t],"$ab")}}
A.a6.prototype={
i:function(a){return"Uniform1f: "+H.h(this.c)}}
A.ar.prototype={
i:function(a){return"Uniform2f: "+H.h(this.c)}}
A.T.prototype={
i:function(a){return"Uniform3f: "+H.h(this.c)}}
A.bH.prototype={
en:function(a){var u=a.a,t=a.b,s=a.c,r=a.d
return C.b.cu(this.a,this.d,u,t,s,r)},
ek:function(a){return C.b.cu(this.a,this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.h(this.c)}}
A.ir.prototype={
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}}
A.c_.prototype={
af:function(a){var u=new Float32Array(H.c2(H.k(a,"$ib",[P.q],"$ab")))
C.b.ef(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.h(this.c)}}
A.ad.prototype={
af:function(a){var u=new Float32Array(H.c2(H.k(a,"$ib",[P.q],"$ab")))
C.b.cv(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.h(this.c)}}
A.az.prototype={
el:function(a){var u=a==null||!a.d,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.h(this.c)}}
A.ah.prototype={
em:function(a){var u=a.d,t=this.a,s=this.d
if(u<6)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}
F.jl.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cg(s.b,b).cg(s.d.cg(s.c,b),c)
a.sa_(0,new V.a3(r.a,r.b,r.c))
a.saD(r.q(0,Math.sqrt(r.B(r))))
s=1-b
u=1-c
a.sdn(new V.ay(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:9}
F.jt.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:24}
F.ju.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.E(p)
s=-s*p
u=r*p
a.sa_(0,new V.a3(s,u,q))
u=new V.H(s,u,q)
a.saD(u.q(0,Math.sqrt(u.B(u))))
a.sdn(new V.ay(1-c,2+c,-1,-1))},
$S:9}
F.jv.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:25}
F.jw.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:25}
F.jG.prototype={
$2:function(a,b){return 0},
$S:24}
F.jH.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.E(s)
u=this.b+s
s=a.f
t=new V.H(s.a,s.b,s.c)
s=t.q(0,Math.sqrt(t.B(t)))
a.sa_(0,new V.a3(s.a*u,s.b*u,s.c*u))},
$S:9}
F.a2.prototype={
aZ:function(){var u=this
if(!u.gb_()){C.a.C(u.a.a.d.b,u)
u.a.a.Z()}u.bM()
u.bN()
u.hm()},
bQ:function(a){this.a=a
C.a.h(a.d.b,this)},
bR:function(a){this.b=a
C.a.h(a.d.c,this)},
ht:function(a){this.c=a
C.a.h(a.d.d,this)},
bM:function(){var u=this.a
if(u!=null){C.a.C(u.d.b,this)
this.a=null}},
bN:function(){var u=this.b
if(u!=null){C.a.C(u.d.c,this)
this.b=null}},
hm:function(){var u=this.c
if(u!=null){C.a.C(u.d.d,this)
this.c=null}},
gb_:function(){return this.a==null||this.b==null||this.c==null},
eK:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cK()
if(q!=null)s=s.F(0,q)
if(u!=null)s=s.F(0,u)
if(t!=null)s=s.F(0,t)
if(s.dU())return
return s.q(0,Math.sqrt(s.B(s)))},
eO:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.J(0,q)
r=new V.H(r.a,r.b,r.c)
s=r.q(0,Math.sqrt(r.B(r)))
r=t.J(0,q)
r=new V.H(r.a,r.b,r.c)
r=s.aY(r.q(0,Math.sqrt(r.B(r))))
return r.q(0,Math.sqrt(r.B(r)))},
c0:function(){var u,t=this
if(t.d!=null)return!0
u=t.eK()
if(u==null){u=t.eO()
if(u==null)return!1}t.d=u
t.a.a.Z()
return!0},
eJ:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cK()
if(q!=null)s=s.F(0,q)
if(u!=null)s=s.F(0,u)
if(t!=null)s=s.F(0,t)
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
if(Math.abs(r-0)<$.D().a){l=d.J(0,g)
l=new V.H(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.B(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.J(0,g)
l=new V.a3(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).J(0,j)
l=new V.H(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.B(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.q(0,Math.sqrt(l.B(l)))
l=o.aY(q)
l=l.q(0,Math.sqrt(l.B(l))).aY(o)
q=l.q(0,Math.sqrt(l.B(l)))}return q},
bZ:function(){var u,t=this
if(t.e!=null)return!0
u=t.eJ()
if(u==null){u=t.eN()
if(u==null)return!1}t.e=u
t.a.a.Z()
return!0},
ghX:function(a){var u=this
if(J.G(u.a,u.b))return!0
if(J.G(u.b,u.c))return!0
if(J.G(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){var u,t,s=this
if(s.gb_())return a+"disposed"
u=a+C.d.ak(J.aw(s.a.e),0)+", "+C.d.ak(J.aw(s.b.e),0)+", "+C.d.ak(J.aw(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
M:function(){return this.D("")}}
F.fA.prototype={}
F.hR.prototype={
b2:function(a,b,c){var u,t=b.a
t.a.a.t()
t=t.e
u=c.a
u.a.a.t()
if(t==u.e){t=b.b
t.a.a.t()
t=t.e
u=c.b
u.a.a.t()
if(t==u.e){t=b.c
t.a.a.t()
t=t.e
u=c.c
u.a.a.t()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.t()
t=t.e
u=c.b
u.a.a.t()
if(t==u.e){t=b.b
t.a.a.t()
t=t.e
u=c.c
u.a.a.t()
if(t==u.e){t=b.c
t.a.a.t()
t=t.e
u=c.a
u.a.a.t()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.t()
t=t.e
u=c.c
u.a.a.t()
if(t==u.e){t=b.b
t.a.a.t()
t=t.e
u=c.a
u.a.a.t()
if(t==u.e){t=b.c
t.a.a.t()
t=t.e
u=c.b
u.a.a.t()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bb.prototype={
aZ:function(){var u=this
if(!u.gb_()){C.a.C(u.a.a.c.b,u)
u.a.a.Z()}u.bM()
u.bN()},
bQ:function(a){this.a=a
C.a.h(a.c.b,this)},
bR:function(a){this.b=a
C.a.h(a.c.c,this)},
bM:function(){var u=this.a
if(u!=null){C.a.C(u.c.b,this)
this.a=null}},
bN:function(){var u=this.b
if(u!=null){C.a.C(u.c.c,this)
this.b=null}},
gb_:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){if(this.gb_())return a+"disposed"
return a+C.d.ak(J.aw(this.a.e),0)+", "+C.d.ak(J.aw(this.b.e),0)},
M:function(){return this.D("")}}
F.fS.prototype={}
F.ik.prototype={
b2:function(a,b,c){var u,t=b.a
t.a.a.t()
t=t.e
u=c.a
u.a.a.t()
if(t==u.e){t=b.b
t.a.a.t()
t=t.e
u=c.b
u.a.a.t()
return t==u.e}else{t=b.a
t.a.a.t()
t=t.e
u=c.b
u.a.a.t()
if(t==u.e){t=b.b
t.a.a.t()
t=t.e
u=c.a
u.a.a.t()
return t==u.e}else return!1}}}
F.bE.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.d.ak(J.aw(u.e),0)},
M:function(){return this.D("")}}
F.dN.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.M():u},
b3:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.t()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.w)(g),++s){r=g[s]
h.a.h(0,r.i_())}h.a.t()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.w)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.t()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bE()
if(n.a==null)H.z(P.x("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.v(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.w)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.t()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.t()
p=p.e
if(typeof p!=="number")return p.F()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.lW(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.w)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.t()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.t()
p=p.e
if(typeof p!=="number")return p.F()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.t()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cm(l,k,i)}g=h.e
if(g!=null)g.al(0)},
au:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.au()||!1
if(!t.a.au())u=!1
s=t.e
if(s!=null)s.al(0)
return u},
ie:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.A(o,0)])
for(o=[F.ao];u.length!==0;){t=C.a.gi5(u)
C.a.e8(u,0)
if(t!=null){s=H.c([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.b2(0,t,q)){C.a.h(s,q)
C.a.e8(u,r)}}if(s.length>1)b.b3(s)}}p.a.t()
p.c.co()
p.d.co()
p.b.iy()
p.c.cp(new F.ik())
p.d.cp(new F.hR())
o=p.e
if(o!=null)o.al(0)},
dm:function(){this.ie(new F.iD(),new F.hr())},
bh:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.bh()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.d(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdY(new V.H(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.H(s,r,o).q(0,Math.sqrt(s*s+r*r+o*o))
if(!J.G(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.v(null)}}}}o=p.e
if(o!=null)o.al(0)},
bY:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.av()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.br().a)!==0)++s
if((t&$.bq().a)!==0)++s
if((t&$.b9().a)!==0)++s
if((t&$.bs().a)!==0)++s
if((t&$.d1().a)!==0)++s
if((t&$.d2().a)!==0)++s
if((t&$.cb().a)!==0)++s
if((t&$.bp().a)!==0)++s
r=a3.gcC(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.q
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.d6])
for(n=0,m=0;m<s;++m){l=a3.hU(m)
k=l.gcC(l)
C.a.m(o,m,new Z.d6(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.d(u,j)
i=u[j].ib(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.m(p,h,i[g]);++h}}n+=k}H.k(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.c2(p)),35044)
u.bindBuffer(a0,null)
e=new Z.bt(new Z.e5(a0,f),o,a3)
e.sf8(H.c([],[Z.bz]))
if(a.b.b.length!==0){t=P.t
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.t()
C.a.h(d,c.e)}b=Z.k1(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bz(0,d.length,b))}if(a.c.b.length!==0){t=P.t
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.t()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.t()
C.a.h(d,c.e)}b=Z.k1(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bz(1,d.length,b))}if(a.d.b.length!==0){t=P.t
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.t()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.t()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].c
c.a.a.t()
C.a.h(d,c.e)}b=Z.k1(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bz(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.n])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.D(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.D(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.D(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.D(t))}return C.a.u(s,"\n")},
Z:function(){var u=this.e
if(u!=null)u.v(null)},
$inD:1}
F.hL.prototype={
dj:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[F.ao],"$ab")
u=H.c([],[F.a2])
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
C.a.h(u,F.cm(s,p,o))}}return u},
hS:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.ao],"$ab")
u=H.c([],[F.a2])
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
C.a.h(u,F.cm(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cm(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cm(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cm(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
cp:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b2(0,p,n)){p.aZ()
break}}}}},
co:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.ghX(s)
if(t)s.aZ()}},
au:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.w)(u),++r)if(!u[r].c0())s=!1
return s},
c_:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.w)(u),++r)if(!u[r].bZ())s=!1
return s},
bh:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.H(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.H(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.v(null)}},
i:function(a){return this.M()},
D:function(a){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].D(a))
return C.a.u(r,"\n")},
M:function(){return this.D("")},
sf1:function(a){this.b=H.k(a,"$ib",[F.a2],"$ab")}}
F.hM.prototype={
gk:function(a){return this.b.length},
cp:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b2(0,p,n)){p.aZ()
break}}}}},
co:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.G(s.a,s.b)
if(t)s.aZ()}},
i:function(a){return this.M()},
D:function(a){var u,t,s=H.c([],[P.n]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
C.a.h(s,t[u].D(a+(""+u+". ")))}return C.a.u(s,"\n")},
M:function(){return this.D("")},
sfa:function(a){this.b=H.k(a,"$ib",[F.bb],"$ab")}}
F.hN.prototype={
gk:function(a){return this.b.length},
iy:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.C(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.v(null)}s=t.a
if(s!=null){C.a.C(s.b.b,t)
t.a=null}}}},
i:function(a){return this.M()},
D:function(a){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].D(a))
return C.a.u(r,"\n")},
M:function(){return this.D("")},
sbJ:function(a){this.b=H.k(a,"$ib",[F.bE],"$ab")}}
F.ao.prototype={
c2:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.e4(u.cx,r,o,t,s,q,p,a,n)},
i_:function(){return this.c2(null)},
sa_:function(a,b){var u
if(!J.G(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Z()}},
sdY:function(a){var u
a=a==null?null:a.q(0,Math.sqrt(a.B(a)))
if(!J.G(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Z()}},
saD:function(a){var u
if(!J.G(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Z()}},
sdn:function(a){var u
if(!J.G(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Z()}},
ib:function(a){var u,t,s=this
if(a.p(0,$.av())){u=s.f
t=[P.q]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.br())){u=s.r
t=[P.q]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bq())){u=s.x
t=[P.q]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.b9())){u=s.y
t=[P.q]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.p(0,$.bs())){u=s.z
t=[P.q]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.d1())){u=s.Q
t=[P.q]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.d2())){u=s.Q
t=[P.q]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.cb()))return H.c([s.ch],[P.q])
else if(a.p(0,$.bp())){u=s.cx
t=[P.q]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.q])},
c0:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cK()
t.d.L(0,new F.iI(s))
s=s.a
t.r=s.q(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.al(0)}return!0},
bZ:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cK()
t.d.L(0,new F.iH(s))
s=s.a
t.x=s.q(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.al(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){var u,t,s=this,r="-",q=H.c([],[P.n])
C.a.h(q,C.d.ak(J.aw(s.e),0))
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
C.a.h(q,V.L(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.u(q,", ")
return a+"{"+t+"}"},
M:function(){return this.D("")}}
F.iI.prototype={
$1:function(a){var u,t
H.j(a,"$ia2")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.F(0,u)}},
$S:5}
F.iH.prototype={
$1:function(a){var u,t
H.j(a,"$ia2")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.F(0,u)}},
$S:5}
F.iy.prototype={
t:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.i(P.x("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.Z()
return!0},
dk:function(a,b,c,d,e,f,g){var u=F.e4(a,null,b,c,d,e,f,g,0)
this.h(0,u)
return u},
bf:function(a,b,c,d,e,f){return this.dk(a,b,c,null,d,e,f)},
hT:function(a,b,c,d,e,f){return this.dk(a,b,c,d,e,f,null)},
gk:function(a){return this.c.length},
au:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)u[s].c0()
return!0},
c_:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)u[s].bZ()
return!0},
hW:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.q(0,Math.sqrt(p*p+o*o+n*n))
if(!J.G(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.v(null)}}}}return!0},
i:function(a){return this.M()},
D:function(a){var u,t,s,r
this.t()
u=H.c([],[P.n])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].D(a))
return C.a.u(u,"\n")},
M:function(){return this.D("")},
shQ:function(a){this.c=H.k(a,"$ib",[F.ao],"$ab")}}
F.iz.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
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
L:function(a,b){var u=this
H.o(b,{func:1,ret:-1,args:[F.a2]})
C.a.L(u.b,b)
C.a.L(u.c,new F.iA(u,b))
C.a.L(u.d,new F.iB(u,b))},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].D(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].D(""))
return C.a.u(r,"\n")},
sf2:function(a){this.b=H.k(a,"$ib",[F.a2],"$ab")},
sf3:function(a){this.c=H.k(a,"$ib",[F.a2],"$ab")},
sf4:function(a){this.d=H.k(a,"$ib",[F.a2],"$ab")}}
F.iA.prototype={
$1:function(a){H.j(a,"$ia2")
if(!J.G(a.a,this.a))this.b.$1(a)},
$S:5}
F.iB.prototype={
$1:function(a){var u
H.j(a,"$ia2")
u=this.a
if(!J.G(a.a,u)&&!J.G(a.b,u))this.b.$1(a)},
$S:5}
F.iC.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].D(""))
return C.a.u(r,"\n")},
sfb:function(a){this.b=H.k(a,"$ib",[F.bb],"$ab")},
sfc:function(a){this.c=H.k(a,"$ib",[F.bb],"$ab")}}
F.iE.prototype={}
F.iD.prototype={
b2:function(a,b,c){return J.G(b.f,c.f)}}
F.iF.prototype={}
F.hr.prototype={
b3:function(a){var u,t,s,r
H.k(a,"$ib",[F.ao],"$ab")
u=V.cK()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.H(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.q(0,Math.sqrt(u.B(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.w)(a),++s)a[s].sdY(u)
return}}
F.iG.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].D(""))
return C.a.u(r,"\n")},
sbJ:function(a){this.b=H.k(a,"$ib",[F.bE],"$ab")}}
O.dp.prototype={
gl:function(){var u=this.x
return u==null?this.x=D.M():u},
w:function(a){var u
H.j(a,"$iv")
u=this.x
if(u!=null)u.v(a)},
ab:function(){return this.w(null)},
sbX:function(a){var u=this.r
if(!(Math.abs(u-a)<$.D().a)){this.r=a
u=new D.u("blurValue",u,a,[P.q])
u.b=!0
this.w(u)}},
sdv:function(a){var u,t=this,s=t.e
if(s!=a){if(s!=null)s.gl().C(0,t.ga1())
u=t.e
t.e=a
if(a!=null)a.gl().h(0,t.ga1())
s=new D.u("colorTexture",u,t.e,[T.bY])
s.b=!0
t.w(s)}},
sbW:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gl().C(0,s.ga1())
u=s.f
s.f=a
if(a!=null)a.gl().h(0,s.ga1())
r=new D.u("blurTexture",u,s.f,[T.bY])
t=r.b=!0
s.w(r)
r=s.f==null
if(!(r&&u!=null))r=!r&&u==null
else r=t
if(r){s.a=null
s.w(null)}}},
scs:function(a){var u,t=this,s=$.kx
if(s==null){s=new V.bT(1,0,0,0,1,0,0,0,1)
$.kx=s
a=s}else a=s
if(!J.G(t.b,a)){u=t.b
t.b=a
s=new D.u("textureMatrix",u,a,[V.bT])
s.b=!0
t.w(s)}},
sbV:function(a){var u,t,s=this
if(a==null)a=V.kZ()
if(!J.G(s.c,a)){u=s.c
s.c=a
t=new D.u("blurAdjust",u,a,[V.bm])
t.b=!0
s.w(t)}},
a6:function(a,b){},
a3:function(a,b){H.k(a,"$ib",[T.bk],"$ab")
if(b!=null)if(!C.a.ah(a,b)){b.a=a.length
C.a.h(a,b)}},
cq:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a
if(g==null){u=h.f!=null
g="GaussianBlur_"+(u?"1":"0")
t=g.charCodeAt(0)==0?g:g
s=H.j(a.fr.j(0,t),"$idn")
if(s==null){g=a.a
s=new A.dn(g,t)
s.bp(g,t)
r=s.z=new A.fJ(u,t)
q=new P.bi("")
q.a="precision mediump float;\n"
q.a="precision mediump float;\n\n"
q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\n"
if(u){q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform sampler2D blurTxt;\n"
g=q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform sampler2D blurTxt;\nuniform vec4 blurAdj;\n"}else g=q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\n"
g+="uniform vec2 blurScale;\n"
q.a=g
g+="\n"
q.a=g
g+="varying vec2 txt2D;\n"
q.a=g
q.a=g+"\n"
g=[P.q]
r.aI(q,3,H.c([0.75],g),H.c([0.5],g))
r.aI(q,6,H.c([0.42857,2.14286],g),H.c([0.41667,0.08333],g))
r.aI(q,9,H.c([0,1.8],g),H.c([0.5122,0.2439],g))
r.aI(q,12,H.c([0,1.38462,3.23077],g),H.c([0.22703,0.31622,0.07027],g))
r.aI(q,15,H.c([0.9375,2.8125],g),H.c([0.36184,0.13816],g))
r.aI(q,18,H.c([0.47368,2.36842,4.26316],g),H.c([0.29916,0.16318,0.03766],g))
g=q.a+="void main()\n"
g=q.a=g+"{\n"
g=(u?q.a=g+"   float blurValue = dot(texture2D(blurTxt, txt2D), blurAdj);\n":g)+"   float blurOffset = abs(blurValue);\n"
q.a=g
g+="\n"
q.a=g
g+="   if     (blurOffset < 0.15) gl_FragColor = texture2D(colorTxt, txt2D);\n"
q.a=g
g+="   else if(blurOffset < 0.3)  gl_FragColor = blur3();\n"
q.a=g
g+="   else if(blurOffset < 0.45) gl_FragColor = blur6();\n"
q.a=g
g+="   else if(blurOffset < 0.6)  gl_FragColor = blur9();\n"
q.a=g
g+="   else if(blurOffset < 0.75) gl_FragColor = blur12();\n"
q.a=g
g+="   else if(blurOffset < 0.9)  gl_FragColor = blur15();\n"
q.a=g
g+="   else                       gl_FragColor = blur18();\n"
q.a=g
g=q.a=g+"}\n"
s.cd(0,"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n":"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n",g.charCodeAt(0)==0?g:g)
s.Q=s.x.j(0,"posAttr")
s.ch=s.x.j(0,"txtAttr")
s.cx=H.m(s.y.j(0,"projViewObjMat"),"$iad")
s.cy=H.m(s.y.j(0,"txt2DMat"),"$ic_")
s.dy=H.m(s.y.j(0,"colorTxt"),"$iaz")
s.dx=H.m(s.y.j(0,"blurScale"),"$iar")
g=s.y
if(u){s.fr=H.m(g.j(0,"blurTxt"),"$iaz")
s.db=H.m(s.y.j(0,"blurAdj"),"$ibH")}else s.fx=H.m(g.j(0,"blurValue"),"$ia6")
a.bT(s)}g=h.a=s
b.e=null}r=g.z
g=b.e
if((!(g instanceof Z.bt)?b.e=null:g)==null){g=b.d
p=$.av()
o=$.b9()
o=g.bY(new Z.cL(a.a),new Z.b6(p.a|o.a))
o.ao($.av()).e=h.a.Q.c
o.ao($.b9()).e=h.a.ch.c
b.e=o}n=H.c([],[T.bk])
h.a3(n,h.e)
g=r.a
if(g)h.a3(n,h.f)
for(m=0;m<n.length;++m)n[m].Y(a)
p=h.a
p.Y(a)
o=h.e
p.df(p.dy,o)
o=h.b
l=p.cy
l.toString
l.af(o.a5(0,!0))
o=h.d
l=o.a
k=a.c
if(typeof l!=="number")return l.q()
o=o.b
j=a.d
if(typeof o!=="number")return o.q()
i=p.dx
C.b.b8(i.a,i.d,l/k,o/j)
j=a.ge7()
p=p.cx
p.toString
p.af(j.a5(0,!0))
p=h.a
if(g){g=h.f
p.df(p.fr,g)
g=h.c
p.db.en(g)}else{g=h.r
p=p.fx
C.b.a2(p.a,p.d,g)}g=b.e
if(g instanceof Z.bt){g.Y(a)
g.a0(a)
g.aE(a)}else b.e=null
g=h.a
g.toString
p=a.a
p.useProgram(null)
g.x.c4()
for(m=0;m<n.length;++m){g=n[m]
if(g.c){g.c=!1
p.activeTexture(33984+g.a)
p.bindTexture(3553,null)}}}}
O.dB.prototype={
gl:function(){var u=this.fr
return u==null?this.fr=D.M():u},
w:function(a){var u
H.j(a,"$iv")
u=this.fr
if(u!=null)u.v(a)},
ab:function(){return this.w(null)},
da:function(a){H.j(a,"$iv")
this.a=null
this.w(a)},
hq:function(){return this.da(null)},
fn:function(a,b){var u=V.a4
H.k(b,"$ie",[u],"$ae")
u=new D.bA([u])
u.b=!0
this.w(u)},
fp:function(a,b){var u=V.a4
H.k(b,"$ie",[u],"$ae")
u=new D.bB([u])
u.b=!0
this.w(u)},
cW:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.t,h=new H.W([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
q=r.gan()
p=h.j(0,r.gan())
h.m(0,q,p==null?1:p)}o=H.c([],[A.aD])
h.L(0,new O.h8(j,o))
C.a.bo(o,new O.h9())
n=new H.W([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
q=r.gan()
p=n.j(0,r.gan())
n.m(0,q,p==null?1:p)}m=H.c([],[A.aF])
n.L(0,new O.ha(j,m))
C.a.bo(m,new O.hb())
l=new H.W([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.w)(i),++s){r=i[s]
t=r.gan()
q=l.j(0,r.gan())
l.m(0,t,q==null?1:q)}k=H.c([],[A.aG])
l.L(0,new O.hc(j,k))
C.a.bo(k,new O.hd())
i=C.e.a4(j.e.a.length+3,4)
j.dy.e
return A.m1(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
a3:function(a,b){H.k(a,"$ib",[T.bk],"$ab")
if(b!=null)if(!C.a.ah(a,b)){b.a=a.length
C.a.h(a,b)}},
a6:function(a,b){var u,t,s
for(u=this.dx.a,u=new J.ai(u,u.length,[H.A(u,0)]);u.A();){t=u.d
t.toString
s=$.ct
t.a=s==null?$.ct=new V.a4(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s
s=t.b
if(s!=null)t.a=s.aq(0,b,t)}},
cq:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cW()
u=H.j(b4.fr.j(0,b3.b0),"$idA")
if(u==null){u=A.m0(b3,b4.a)
b4.bT(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.bg
b3=b5.e
if(!(b3 instanceof Z.bt))b3=b5.e=null
if(b3==null||!b3.d.p(0,s)){b3=t.k3
if(b3)b5.d.au()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.c_()
q.a.c_()
q=q.e
if(q!=null)q.al(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.hW()
p=p.e
if(p!=null)p.al(0)}n=b5.d.bY(new Z.cL(b4.a),s)
n.ao($.av()).e=b2.a.Q.c
if(b3)n.ao($.br()).e=b2.a.cx.c
if(r)n.ao($.bq()).e=b2.a.ch.c
if(t.r1)n.ao($.b9()).e=b2.a.cy.c
if(q)n.ao($.bs()).e=b2.a.db.c
if(t.rx)n.ao($.bp()).e=b2.a.dx.c
b5.e=n}b3=T.bk
m=H.c([],[b3])
b2.a.Y(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.gaa(q)
r=r.dy
r.toString
r.af(q.a5(0,!0))}if(t.fr){r=b2.a
q=b4.cx
if(q==null){q=b4.db
q=q.gaa(q)
p=b4.dx
p=b4.cx=q.n(0,p.gaa(p))
q=p}r=r.fr
r.toString
r.af(q.a5(0,!0))}r=b2.a
q=b4.ge7()
r=r.fy
r.toString
r.af(q.a5(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.af(C.k.a5(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.af(C.k.a5(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.af(C.k.a5(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.b.aS(r.a,r.d,l)
for(r=[P.q],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.d(p,k)
p=p[k]
q.toString
H.j(p,"$ia4")
q=q.r1
if(k>=q.length)return H.d(q,k)
q=q[k]
j=new Float32Array(H.c2(H.k(p.a5(0,!0),"$ib",r,"$ab")))
C.b.cv(q.a,q.d,!1,j)}}r=t.a
if(r.a){q=b2.a
p=b2.f.f
q=q.r2
C.b.R(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.a3(m,b2.f.e)
r=b2.a
q=b2.f.e
r.ag(r.ry,q)}if(t.id){r=t.b
if(r.a){q=b2.a
p=b2.r.f
q=q.x1
C.b.R(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.a3(m,b2.r.e)
r=b2.a
q=b2.r.e
r.ag(r.y1,q)}r=t.c
if(r.a){q=b2.a
p=b2.x.f
q=q.y2
C.b.R(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.a3(m,b2.x.e)
r=b2.a
q=b2.x.e
r.ag(r.bg,q)}r=t.d
if(r.a){q=b2.a
p=b2.y.f
q=q.dF
C.b.R(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.a3(m,b2.y.e)
r=b2.a
q=b2.y.e
r.ag(r.dG,q)}r=t.e
q=r.a
if(!q)p=r.c
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.dJ
C.b.a2(p.a,p.d,o)}if(q){q=b2.a
p=b2.z.f
q=q.dH
C.b.R(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.a3(m,b2.z.e)
r=b2.a
q=b2.z.e
r.ag(r.dI,q)}r=t.z
if(r.length>0){q=b4.db
i=q.gaa(q)
q=P.t
h=new H.W([q,q])
for(q=b2.dx.e,p=q.length,o=[b3],g=0;g<q.length;q.length===p||(0,H.w)(q),++g){f=q[g]
e=f.gan()
d=h.j(0,e)
if(d==null)d=0
h.m(0,e,d+1)
c=J.f_(b2.a.c7.j(0,e),d)
b=f.gdA(f)
a=C.c.n(i.a,b.gdC(b))+C.c.n(i.b,b.gdD(b))+C.c.n(i.c,b.gdE())
a0=C.c.n(i.e,b.gdC(b))+C.c.n(i.f,b.gdD(b))+C.c.n(i.r,b.gdE())
b=C.c.n(i.y,b.gdC(b))+C.c.n(i.z,b.gdD(b))+C.c.n(i.Q,b.gdE())
b=new V.H(a,a0,b).q(0,Math.sqrt(a*a+a0*a0+b*b))
a0=c.e
a=b.a
a1=b.b
b=b.c
C.b.R(a0.a,a0.d,a,a1,b)
b=f.gaO(f)
a1=c.f
C.b.R(a1.a,a1.d,b.a,b.b,b.c)
f.gaR()
b=f.gdA(f)
a=c.d
C.b.R(a.a,a.d,b.a,b.b,b.c)
b=f.gbn()
a=c.b
C.b.R(a.a,a.d,b.a,b.b,b.c)
b=f.gbl(f)
a=c.c
C.b.R(a.a,a.d,b.a,b.b,b.c)
b=f.gaR()
H.k(m,"$ib",o,"$ab")
if(!C.a.ah(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gaR()
a=b.gdW(b)
if(a){a=c.r
a.toString
a0=b.d
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.w)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.c6.j(0,p)
C.b.aS(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.gaa(q)
q=P.t
a2=new H.W([q,q])
for(q=b2.dx.f,p=q.length,o=[P.q],b=[b3],g=0;g<q.length;q.length===p||(0,H.w)(q),++g){f=q[g]
e=f.gan()
d=a2.j(0,e)
if(d==null)d=0
a2.m(0,e,d+1)
c=J.f_(b2.a.c9.j(0,e),d)
a3=i.n(0,f.a)
a=f.a
a0=$.cy
a=a.ct(a0==null?$.cy=new V.a3(0,0,0):a0)
a0=c.b
C.b.R(a0.a,a0.d,a.a,a.b,a.c)
a=$.cy
a=a3.ct(a==null?$.cy=new V.a3(0,0,0):a)
a0=c.c
C.b.R(a0.a,a0.d,a.a,a.b,a.c)
a=f.c
a0=c.e
C.b.R(a0.a,a0.d,a.a,a.b,a.c)
if(f.d!=null||!1){a=a3.dT(0)
a0=a.a
a1=a.b
a4=a.c
a5=a.e
a6=a.f
a7=a.r
a8=a.y
a9=a.z
a=a.Q
b0=c.d
b0.toString
j=new Float32Array(H.c2(H.k(new V.bT(a0,a1,a4,a5,a6,a7,a8,a9,a).a5(0,!0),"$ib",o,"$ab")))
C.b.ef(b0.a,b0.d,!1,j)}a=f.d
a0=a!=null
if(a0){H.k(m,"$ib",b,"$ab")
if(a0)if(!C.a.ah(m,a)){a.a=m.length
C.a.h(m,a)}a=f.d
a0=a!=null
if(a0&&a.d>=6){a1=c.f
a1.toString
if(!a0||a.d<6)a1.a.uniform1i(a1.d,0)
else{a=a.a
a1.a.uniform1i(a1.d,a)}}}a=f.r
a0=c.y
C.b.a2(a0.a,a0.d,a)
a=f.x
a0=c.z
C.b.a2(a0.a,a0.d,a)
a=f.y
a0=c.Q
C.b.a2(a0.a,a0.d,a)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.w)(r),++g){p=r[g].a
l=a2.j(0,p)
if(l==null)l=0
p=b2.a.c8.j(0,p)
C.b.aS(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.gaa(q)
q=P.t
b1=new H.W([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.w)(q),++g){f=q[g]
e=f.gan()
d=b1.j(0,e)
if(d==null)d=0
b1.m(0,e,d+1)
c=J.f_(b2.a.cb.j(0,e),d)
o=f.giw(f)
b=c.b
C.b.R(b.a,b.d,o.a,o.b,o.c)
o=f.gdA(f).j1()
b=c.c
C.b.R(b.a,b.d,o.a,o.b,o.c)
o=i.ct(f.giw(f))
b=c.d
C.b.R(b.a,b.d,o.a,o.b,o.c)
o=f.gaO(f)
b=c.e
C.b.R(b.a,b.d,o.a,o.b,o.c)
f.gaR()
o=f.gbn()
b=c.f
C.b.R(b.a,b.d,o.a,o.b,o.c)
o=f.gbl(f)
b=c.r
C.b.R(b.a,b.d,o.a,o.b,o.c)
o=f.gj2()
b=c.x
C.b.a2(b.a,b.d,o)
o=f.gj3()
b=c.y
C.b.a2(b.a,b.d,o)
f.gaR()
o=f.gaR()
H.k(m,"$ib",b3,"$ab")
if(!C.a.ah(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gaR()
b=o.gdW(o)
if(b){b=c.dx
b.toString
a=o.d
if(!a)b.a.uniform1i(b.d,0)
else{o=o.a
b.a.uniform1i(b.d,o)}}f.gcB()
o=f.giL()
b=c.z
C.b.cu(b.a,b.d,o.a,o.b,o.c,o.d)
o=f.gcB()
if(!C.a.ah(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gcB()
b=o.gdW(o)
if(b){b=c.dy
b.toString
a=o.d
if(!a)b.a.uniform1i(b.d,0)
else{o=o.a
b.a.uniform1i(b.d,o)}}if(f.giS()){o=f.giQ()
b=c.Q
C.b.a2(b.a,b.d,o)
o=f.giP()
b=c.ch
C.b.a2(b.a,b.d,o)}if(f.giR()){o=f.giM()
b=c.cx
C.b.a2(b.a,b.d,o)
o=f.giN()
b=c.cy
C.b.a2(b.a,b.d,o)
o=f.giO()
b=c.db
C.b.a2(b.a,b.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.w)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.ca.j(0,q)
C.b.aS(q.a,q.d,l)}}}if(t.f.c){b2.a3(m,b2.Q.e)
b3=b2.a
r=b2.Q.e
b3.ag(b3.dK,r)}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.gaa(r).dT(0)}b3=b3.id
b3.toString
b3.af(r.a5(0,!0))}if(t.cy){b2.a3(m,b2.ch)
b3=b2.a
r=b2.ch
b3.ag(b3.dL,r)
b3=t.r
if(b3.a){r=b2.a
q=b2.cx.f
r=r.dM
C.b.R(r.a,r.d,q.a,q.b,q.c)}if(b3.c){b2.a3(m,b2.cx.e)
b3=b2.a
r=b2.cx.e
b3.ag(b3.dN,r)}b3=t.x
r=b3.a
if(!r)q=b3.c
else q=!0
if(q){q=b2.a
p=b2.cy.ch
q=q.dO
C.b.a2(q.a,q.d,p)}if(r){r=b2.a
q=b2.cy.f
r=r.dP
C.b.R(r.a,r.d,q.a,q.b,q.c)}if(b3.c){b2.a3(m,b2.cy.e)
b3=b2.a
r=b2.cy.e
b3.ag(b3.dQ,r)}}b3=t.y
r=b3.a
q=!r
if(q)p=b3.c
else p=!0
if(p){if(r){r=b2.a
p=b2.db.f
r=r.dR
C.b.a2(r.a,r.d,p)}if(b3.c){b2.a3(m,b2.db.e)
r=b2.a
p=b2.db.e
r.ag(r.dS,p)}r=b4.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b4.a,k=0;k<m.length;++k){p=m[k]
if(!p.c&&p.d>=6){p.c=!0
r.activeTexture(33984+p.a)
r.bindTexture(34067,p.b)}}p=b5.e
p.Y(b4)
p.a0(b4)
p.aE(b4)
if(q)b3=b3.c
else b3=!0
if(b3)r.disable(3042)
for(k=0;k<m.length;++k){b3=m[k]
if(b3.c){b3.c=!1
r.activeTexture(33984+b3.a)
r.bindTexture(34067,null)}}b3=b2.a
b3.toString
r.useProgram(null)
b3.x.c4()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cW().b0},
seM:function(a){this.e=H.k(a,"$iR",[V.a4],"$aR")}}
O.h8.prototype={
$2:function(a,b){H.a8(a)
H.a8(b)
if(typeof b!=="number")return b.F()
return C.a.h(this.b,new A.aD(a,C.e.a4(b+3,4)*4))},
$S:8}
O.h9.prototype={
$2:function(a,b){H.j(a,"$iaD")
H.j(b,"$iaD")
return J.jL(a.a,b.a)},
$S:40}
O.ha.prototype={
$2:function(a,b){H.a8(a)
H.a8(b)
if(typeof b!=="number")return b.F()
return C.a.h(this.b,new A.aF(a,C.e.a4(b+3,4)*4))},
$S:8}
O.hb.prototype={
$2:function(a,b){H.j(a,"$iaF")
H.j(b,"$iaF")
return J.jL(a.a,b.a)},
$S:41}
O.hc.prototype={
$2:function(a,b){H.a8(a)
H.a8(b)
if(typeof b!=="number")return b.F()
return C.a.h(this.b,new A.aG(a,C.e.a4(b+3,4)*4))},
$S:8}
O.hd.prototype={
$2:function(a,b){H.j(a,"$iaG")
H.j(b,"$iaG")
return J.jL(a.a,b.a)},
$S:42}
O.h2.prototype={
aA:function(){var u,t=this
t.cH()
u=t.f
if(!(Math.abs(u-1)<$.D().a)){t.f=1
u=new D.u(t.b,u,1,[P.q])
u.b=!0
t.a.w(u)}}}
O.cr.prototype={
w:function(a){return this.a.w(H.j(a,"$iv"))},
ab:function(){return this.w(null)},
aA:function(){},
de:function(a){var u,t,s=this
if(!s.c.p(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aA()
u=s.a
u.a=null
u.w(null)}},
saD:function(a){var u,t=this,s=t.c
if(!s.c)t.de(new A.ak(s.a,!1,!0))
s=t.e
if(s!==a){if(s!=null)s.gl().C(0,t.ga1())
u=t.e
t.e=a
a.gl().h(0,t.ga1())
s=new D.u(t.b+".textureCube",u,t.e,[T.cG])
s.b=!0
t.a.w(s)}}}
O.h3.prototype={}
O.aV.prototype={
dd:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.u(s.b+".color",u,a,[V.Z])
t.b=!0
s.a.w(t)}},
aA:function(){this.cH()
this.dd(new V.Z(1,1,1))},
saO:function(a,b){this.de(new A.ak(!0,!1,this.c.c))
this.dd(b)}}
O.h5.prototype={}
O.h6.prototype={
aA:function(){var u,t=this
t.cI()
u=t.ch
if(!(Math.abs(u-1)<$.D().a)){t.ch=1
u=new D.u(t.b+".refraction",u,1,[P.q])
u.b=!0
t.a.w(u)}}}
O.h7.prototype={
aA:function(){var u,t=this
t.cI()
u=t.ch
if(!(Math.abs(u-100)<$.D().a)){t.ch=100
u=new D.u(t.b+".shininess",u,100,[P.q])
u.b=!0
t.a.w(u)}}}
O.bj.prototype={}
O.dT.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.M():u},
w:function(a){var u
H.j(a,"$iv")
u=this.e
if(u!=null)u.v(a)},
ab:function(){return this.w(null)},
fG:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ie",[O.aJ],"$ae")
for(u=b.length,t=this.ga1(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.aP()
o.sX(null)
o.sat(null)
o.c=null
o.d=0
p.f=o}H.o(t,s)
if(o.a==null)o.sX(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.ab()},
fI:function(a,b){var u,t
H.k(b,"$ie",[O.aJ],"$ae")
for(u=b.gT(b),t=this.ga1();u.A();)u.gK(u).gl().C(0,t)
this.ab()},
sdr:function(a){var u=this.f
if(u!==a){this.f=a
u=new D.u("blend",u,a,[A.bv])
u.b=!0
this.w(u)}},
a6:function(a,b){},
f9:function(a){a=C.e.a4(a+3,4)*4
if(a<=0)return 4
return a},
cq:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.f9(h.c.a.length)
if(g!==h.d||h.f!=h.r){h.d=g
h.r=h.f
h.b=null}u=h.b
if(u==null){u=h.f
t="TextureLayout_"+g+"_"+C.e.i(u.a)
s=H.j(a.fr.j(0,t),"$idS")
if(s==null){s=A.mk(g,u,a.a)
a.bT(s)}h.b=s
u=s}if(b.e==null){u=b.d.bY(new Z.cL(a.a),$.av())
t=u.ao($.av())
r=h.b
t.e=r.z.c
b.e=u
u=r}u.Y(a)
u=T.bk
q=H.c([],[u])
for(t=[P.q],u=[u],p=0,o=0;r=h.c.a,o<r.length;++o){n=r[o]
if(n!=null&&n.a!=null){r=n.a
H.k(q,"$ib",u,"$ab")
if(r!=null)if(!C.a.ah(q,r)){r.a=q.length
C.a.h(q,r)}r=h.b
m=n.a
r=r.cx
if(p>=r.length)return H.d(r,p)
r=r[p]
l=m==null||!m.d
k=r.a
r=r.d
if(l)k.uniform1i(r,0)
else k.uniform1i(r,m.a)
r=h.b
m=n.b
r=r.cy
if(p>=r.length)return H.d(r,p)
r=r[p]
if(m==null){m=$.ct
if(m==null){m=new V.a4(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.ct=m}}j=new Float32Array(H.c2(H.k(m.a5(0,!0),"$ib",t,"$ab")))
C.b.cv(r.a,r.d,!1,j)
r=h.b
i=n.c
r.toString
if(i==null){m=$.cB
if(m==null){m=V.hA(0,0,1,1)
$.cB=m
i=m}else i=m}m=r.db
if(p>=m.length)return H.d(m,p)
m=m[p]
C.b.b8(m.a,m.d,i.a,i.b)
r=r.dx
if(p>=r.length)return H.d(r,p)
r=r[p]
C.b.b8(r.a,r.d,i.c,i.d)
r=h.b
i=n.d
r.toString
if(i==null){m=$.cB
if(m==null){m=V.hA(0,0,1,1)
$.cB=m
i=m}else i=m}m=r.dy
if(p>=m.length)return H.d(m,p)
m=m[p]
C.b.b8(m.a,m.d,i.a,i.b)
r=r.fr
if(p>=r.length)return H.d(r,p)
r=r[p]
C.b.b8(r.a,r.d,i.c,i.d)
r=h.b
m=n.e
r=r.fx
if(p>=r.length)return H.d(r,p)
r=r[p]
m=H.B(m)?1:0
C.b.aS(r.a,r.d,m);++p}}u=h.b.Q
C.b.aS(u.a,u.d,p)
u=h.b
t=h.a
u.ch.ek(t)
for(o=0;o<q.length;++o)q[o].Y(a)
u=b.e
if(u instanceof Z.bt){u.Y(a)
u.a0(a)
u.aE(a)}else b.e=null
u=h.b
u.toString
t=a.a
t.useProgram(null)
u.x.c4()
for(o=0;o<q.length;++o){u=q[o]
if(u.c){u.c=!1
t.activeTexture(33984+u.a)
t.bindTexture(3553,null)}}},
sf_:function(a){this.c=H.k(a,"$iR",[O.aJ],"$aR")}}
O.aJ.prototype={
w:function(a){var u
H.j(a,"$iv")
u=this.f
if(u!=null)u.v(a)},
ab:function(){return this.w(null)}}
T.bk.prototype={}
T.bY.prototype={}
T.i6.prototype={
gl:function(){var u=this.y
return u==null?this.y=D.M():u},
Y:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}}
T.cG.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.M():u}}
T.i7.prototype={
dV:function(a,b,c,d,e,f){var u,t=this,s=34067,r=t.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,10497)
r.texParameteri(s,10243,10497)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null)
u=new T.cG()
u.a=0
u.b=q
u.c=!1
u.d=0
t.aK(u,q,a,34069,!1,!1)
t.aK(u,q,d,34070,!1,!1)
t.aK(u,q,b,34071,!1,!1)
t.aK(u,q,e,34072,!1,!1)
t.aK(u,q,c,34073,!1,!1)
t.aK(u,q,f,34074,!1,!1)
return u},
aK:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.l
W.a7(t,"load",H.o(new T.i8(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
hr:function(a,b,c){var u,t,s,r
b=V.d0(b)
u=V.d0(a.width)
t=V.d0(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jO()
s.width=u
s.height=t
r=H.j(C.h.eh(s,"2d"),"$icg")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.n6(r.getImageData(0,0,s.width,s.height))}}}
T.i8.prototype={
$1:function(a){var u=this,t=u.a,s=t.hr(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.iE(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.c5()}++t.e},
$S:28}
V.f1.prototype={
aP:function(a,b){return!0},
i:function(a){return"all"},
$ibc:1}
V.bc.prototype={}
V.dz.prototype={
aP:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)if(u[s].aP(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.w)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saz:function(a){this.a=H.k(a,"$ib",[V.bc],"$ab")},
$ibc:1}
V.bf.prototype={
aP:function(a,b){return!this.eq(0,b)},
i:function(a){return"!["+this.cG(0)+"]"}}
V.hJ.prototype={
ev:function(a){var u,t
if(a.a.length<=0)throw H.i(P.x("May not create a SetMatcher with zero characters."))
u=new H.W([P.t,P.Y])
for(t=new H.dx(a,a.gk(a),[H.au(a,"y",0)]);t.A();)u.m(0,t.d,!0)
this.shs(u)},
aP:function(a,b){return this.a.dw(0,b)},
i:function(a){var u=this.a
return P.jY(new H.dw(u,[H.A(u,0)]))},
shs:function(a){this.a=H.k(a,"$iF",[P.t,P.Y],"$aF")},
$ibc:1}
V.cD.prototype={
u:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cI(this.a.N(0,b))
r.saz(H.c([],[V.bc]))
r.c=!1
C.a.h(this.c,r)
return r},
i4:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
if(r.aP(0,a))return r}return},
i:function(a){return this.b},
shN:function(a){this.c=H.k(a,"$ib",[V.cI],"$ab")}}
V.dV.prototype={
i:function(a){var u=H.lo(this.b,"\n","\\n"),t=H.lo(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cH.prototype={
i:function(a){return this.b},
shn:function(a){var u=P.n
this.c=H.k(a,"$iF",[u,u],"$aF")}}
V.ib.prototype={
N:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cD(this,b)
u.shN(H.c([],[V.cI]))
u.d=null
this.a.m(0,b,u)}return u},
b7:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cH(a)
u=P.n
t.shn(new H.W([u,u]))
this.b.m(0,a,t)}return t},
iJ:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dV]),l=this.c,k=[P.t],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.d.ba(a,s)
q=l.i4(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.jY(j)
throw H.i(P.x("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.jY(j)
o=l.d
n=o.c.j(0,p)
t=new V.dV(n==null?o.b:n,p,s)}++s}}},
shD:function(a){this.a=H.k(a,"$iF",[P.n,V.cD],"$aF")},
shG:function(a){this.b=H.k(a,"$iF",[P.n,V.cH],"$aF")}}
V.cI.prototype={
i:function(a){return this.b.b+": "+this.cG(0)}}
X.fa.prototype={
gl:function(){var u=this.fr
return u==null?this.fr=D.M():u},
W:function(a){var u=this.fr
if(u!=null)u.v(a)},
sam:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.u("width",u,b,[P.t])
u.b=!0
t.W(u)}},
sai:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.u("height",u,b,[P.t])
u.b=!0
t.W(u)}},
Y:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){u=a.a
t=u.drawingBufferWidth
s=h.r
if(typeof t!=="number")return t.n()
h.sam(0,C.c.V(t*s))
u=u.drawingBufferHeight
s=h.x
if(typeof u!=="number")return u.n()
h.sai(0,C.c.V(u*s))}if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=H.a8(u.getParameter(3379))
p=V.d0(s)
o=V.d0(r)
q=V.d0(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.b.ec(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.kL(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.c5()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.c5()
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
a.c=C.c.V(s*h.a)
r=t.d
a.d=C.c.V(r*h.b)
l=t.a
k=h.c
j=C.c.V(l*k)
t=t.b
l=h.d
u.viewport(j,C.c.V(t*l),C.c.V(s*k),C.c.V(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
aE:function(a){a.a.bindFramebuffer(36160,null)}}
X.bO.prototype={$ibU:1}
X.fI.prototype={
gl:function(){var u=this.x
return u==null?this.x=D.M():u},
Y:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.E(u)
q=C.c.V(r*u)
r=s.b
if(typeof t!=="number")return H.E(t)
p=C.c.V(r*t)
r=C.c.V(s.c*u)
a.c=r
s=C.c.V(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
aE:function(a){}}
X.fL.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.M():u},
$ibU:1,
$ibO:1}
X.dG.prototype={
gl:function(){var u=this.f
return u==null?this.f=D.M():u},
W:function(a){var u
H.j(a,"$iv")
u=this.f
if(u!=null)u.v(a)},
eG:function(){return this.W(null)},
sav:function(a){var u,t,s=this
if(!J.G(s.b,a)){u=s.b
if(u!=null)u.gl().C(0,s.gcM())
t=s.b
s.b=a
if(a!=null)a.gl().h(0,s.gcM())
u=new D.u("mover",t,s.b,[U.a5])
u.b=!0
s.W(u)}},
$ibU:1,
$ibO:1}
X.cF.prototype={}
V.jF.prototype={
$1:function(a){var u
H.j(a,"$ib2")
u=C.c.ee(this.a.gi6(),2)
if(u!=="0.00")P.kg(u+" fps")},
$S:37}
V.hO.prototype={
ew:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.l
W.a7(q,"scroll",H.o(new V.hQ(o),{func:1,ret:-1,args:[r]}),!1,r)},
dl:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.n],"$ab")
this.hv()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.iJ(C.a.ia(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.w)(s),++q){p=s[q]
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
if(H.nt(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.aa(m[1])
l.textContent=H.aa(m[0])
t.appendChild(l)}else{k=P.mx(C.I,n,C.o,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
hv:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.ib()
t=P.n
u.shD(new H.W([t,V.cD]))
u.shG(new H.W([t,V.cH]))
u.c=null
u.c=u.N(0,q)
t=u.N(0,q).u(0,p)
s=V.af(new H.a0("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,p).u(0,p)
s=new V.bf()
r=[V.bc]
s.saz(H.c([],r))
C.a.h(t.a,s)
t=V.af(new H.a0("*"))
C.a.h(s.a,t)
t=u.N(0,p).u(0,"BoldEnd")
s=V.af(new H.a0("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).u(0,o)
s=V.af(new H.a0("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,o).u(0,o)
s=new V.bf()
s.saz(H.c([],r))
C.a.h(t.a,s)
t=V.af(new H.a0("_"))
C.a.h(s.a,t)
t=u.N(0,o).u(0,n)
s=V.af(new H.a0("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).u(0,m)
s=V.af(new H.a0("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,m).u(0,m)
s=new V.bf()
s.saz(H.c([],r))
C.a.h(t.a,s)
t=V.af(new H.a0("`"))
C.a.h(s.a,t)
t=u.N(0,m).u(0,"CodeEnd")
s=V.af(new H.a0("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).u(0,l)
s=V.af(new H.a0("["))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,l).u(0,k)
s=V.af(new H.a0("|"))
C.a.h(t.a,s)
s=u.N(0,l).u(0,j)
t=V.af(new H.a0("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,l).u(0,l)
t=new V.bf()
t.saz(H.c([],r))
C.a.h(s.a,t)
s=V.af(new H.a0("|]"))
C.a.h(t.a,s)
s=u.N(0,k).u(0,j)
t=V.af(new H.a0("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,k).u(0,k)
t=new V.bf()
t.saz(H.c([],r))
C.a.h(s.a,t)
s=V.af(new H.a0("|]"))
C.a.h(t.a,s)
C.a.h(u.N(0,q).u(0,i).a,new V.f1())
s=u.N(0,i).u(0,i)
t=new V.bf()
t.saz(H.c([],r))
C.a.h(s.a,t)
s=V.af(new H.a0("*_`["))
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
V.hQ.prototype={
$1:function(a){P.kO(C.j,new V.hP(this.a))},
$S:28}
V.hP.prototype={
$0:function(){var u=C.c.V(document.documentElement.scrollTop),t=this.a.style,s=H.h(-0.01*u)+"px"
t.top=s},
$S:2};(function aliases(){var u=J.a.prototype
u.eo=u.i
u=J.dt.prototype
u.ep=u.i
u=O.cr.prototype
u.cH=u.aA
u=O.aV.prototype
u.cI=u.aA
u=V.dz.prototype
u.eq=u.aP
u.cG=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"n0","mp",14)
u(P,"n1","mq",14)
u(P,"n2","mr",14)
t(P,"l9","mZ",3)
var n
s(n=E.al.prototype,"ge2",0,0,null,["$1","$0"],["e3","im"],0,0)
s(n,"ge4",0,0,null,["$1","$0"],["e5","io"],0,0)
s(n,"ge0",0,0,null,["$1","$0"],["e1","il"],0,0)
s(n,"gdZ",0,0,null,["$1","$0"],["e_","ii"],0,0)
r(n,"gig","ih",7)
r(n,"gij","ik",7)
s(n=E.dU.prototype,"gcJ",0,0,null,["$1","$0"],["cL","cK"],0,0)
q(n,"giA","e9",3)
p(n=X.e0.prototype,"gfJ","fK",10)
p(n,"gfq","fs",10)
p(n,"gfz","fA",4)
p(n,"gfN","fO",19)
p(n,"gfL","fM",19)
p(n,"gfR","fS",4)
p(n,"gfV","fW",4)
p(n,"gfD","fE",4)
p(n,"gfT","fU",4)
p(n,"gfB","fC",4)
p(n,"gfX","fY",33)
p(n,"gfZ","h_",10)
p(n,"ghe","hf",12)
p(n,"gha","hb",12)
p(n,"ghc","hd",12)
s(n=D.dv.prototype,"gd5",0,0,null,["$1","$0"],["d6","fP"],0,0)
p(n,"gh0","h1",43)
r(n,"gfk","fl",20)
r(n,"gh4","h5",20)
s(D.bD.prototype,"gbq",0,0,null,["$1","$0"],["a8","eA"],0,0)
o(V.O.prototype,"gk","b1",13)
o(V.H.prototype,"gk","b1",13)
o(V.bm.prototype,"gk","b1",13)
s(n=U.co.prototype,"gaL",0,0,null,["$1","$0"],["E","a9"],0,0)
r(n,"geC","eD",18)
r(n,"gh2","h3",18)
s(n=U.e1.prototype,"gaL",0,0,null,["$1","$0"],["E","a9"],0,0)
p(n,"gbA","bB",1)
p(n,"gbC","bD",1)
p(n,"gbE","bF",1)
s(n=U.e2.prototype,"gaL",0,0,null,["$1","$0"],["E","a9"],0,0)
p(n,"gbA","bB",1)
p(n,"gbC","bD",1)
p(n,"gbE","bF",1)
p(n,"gfe","ff",1)
p(n,"gfg","fh",1)
p(n,"ghL","hM",1)
p(n,"ghJ","hK",1)
p(n,"ghH","hI",1)
p(U.e3.prototype,"gfi","fj",1)
s(n=M.d8.prototype,"gU",0,0,null,["$1","$0"],["P","ax"],0,0)
r(n,"gh6","h7",15)
r(n,"gh8","h9",15)
s(M.db.prototype,"gU",0,0,null,["$1","$0"],["P","ax"],0,0)
s(n=M.di.prototype,"gU",0,0,null,["$1","$0"],["P","ax"],0,0)
r(n,"gft","fu",7)
r(n,"gfv","fw",7)
s(M.dm.prototype,"gU",0,0,null,["$1","$0"],["P","ax"],0,0)
s(O.dp.prototype,"ga1",0,0,null,["$1","$0"],["w","ab"],0,0)
s(n=O.dB.prototype,"ga1",0,0,null,["$1","$0"],["w","ab"],0,0)
s(n,"ghp",0,0,null,["$1","$0"],["da","hq"],0,0)
r(n,"gfm","fn",26)
r(n,"gfo","fp",26)
s(O.cr.prototype,"ga1",0,0,null,["$1","$0"],["w","ab"],0,0)
s(n=O.dT.prototype,"ga1",0,0,null,["$1","$0"],["w","ab"],0,0)
r(n,"gfF","fG",27)
r(n,"gfH","fI",27)
s(O.aJ.prototype,"ga1",0,0,null,["$1","$0"],["w","ab"],0,0)
s(X.dG.prototype,"gcM",0,0,null,["$1","$0"],["W","eG"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.P,null)
s(P.P,[H.jV,J.a,J.ai,P.em,P.e,H.dx,P.aS,H.bQ,H.e_,H.ih,P.bx,H.ch,H.eD,P.ae,H.fT,H.fU,H.fO,P.eJ,P.b8,P.aB,P.e6,P.hZ,P.cE,P.i_,P.b2,P.aj,P.jk,P.je,P.cO,P.el,P.y,P.ci,P.jj,P.Y,P.ax,P.a9,P.bw,P.hv,P.dQ,P.ee,P.fH,P.b,P.F,P.N,P.aq,P.n,P.bi,W.fl,W.C,W.dk,P.eO,P.j9,O.R,O.cs,E.fc,E.al,E.hB,E.dU,Z.e5,Z.cL,Z.bt,Z.bz,Z.b6,D.ff,D.aP,D.v,X.d7,X.du,X.fQ,X.fX,X.at,X.hk,X.ic,X.e0,D.dd,D.ab,D.bD,D.dP,V.Z,V.a_,V.fx,V.bT,V.a4,V.X,V.a3,V.ay,V.bF,V.O,V.H,V.bm,U.e1,U.e2,U.e3,M.db,M.di,M.dm,M.am,A.d3,A.f5,A.ak,A.fJ,A.aD,A.aF,A.aG,A.h4,A.bZ,A.c0,A.c1,A.bv,A.dX,A.iq,F.a2,F.fA,F.bb,F.fS,F.bE,F.dN,F.hL,F.hM,F.hN,F.ao,F.iy,F.iz,F.iC,F.iE,F.iF,F.iG,O.bj,O.cr,O.h5,O.aJ,T.i7,V.f1,V.bc,V.dz,V.hJ,V.cD,V.dV,V.cH,V.ib,X.cF,X.bO,X.fL,X.dG,V.hO])
s(J.a,[J.fN,J.ds,J.dt,J.aT,J.cq,J.bS,H.cw,W.f,W.f0,W.d4,W.cg,W.aN,W.aO,W.Q,W.e8,W.fp,W.fq,W.ea,W.dg,W.ec,W.fs,W.l,W.ef,W.aR,W.fK,W.eh,W.by,W.fW,W.he,W.en,W.eo,W.aW,W.ep,W.es,W.aX,W.ew,W.ey,W.b_,W.ez,W.b0,W.eE,W.aH,W.eH,W.ia,W.b3,W.eK,W.ie,W.iv,W.eP,W.eR,W.eT,W.eV,W.eX,P.ba,P.ej,P.bg,P.eu,P.hz,P.eF,P.bl,P.eM,P.f6,P.e7,P.d5,P.dl,P.dH,P.dK,P.bX,P.dM,P.dR,P.dY,P.eB])
s(J.dt,[J.hw,J.cJ,J.bC])
t(J.jU,J.aT)
s(J.cq,[J.dr,J.dq])
t(P.fV,P.em)
s(P.fV,[H.dZ,W.iS,W.iR,P.fD])
t(H.a0,H.dZ)
s(P.e,[H.fv,H.h_,H.iK])
s(P.aS,[H.h0,H.iL])
s(P.bx,[H.hs,H.fP,H.it,H.ij,H.fe,H.hH,P.f4,P.dF,P.aL,P.iu,P.is,P.hV,P.fi,P.fo])
s(H.ch,[H.jJ,H.i3,H.jz,H.jA,H.jB,P.iO,P.iN,P.iP,P.iQ,P.ji,P.jh,P.iX,P.j0,P.iY,P.iZ,P.j_,P.j3,P.j4,P.j2,P.j1,P.i0,P.i1,P.jq,P.jc,P.jb,P.jd,P.fZ,P.ft,P.fu,W.hg,W.hi,W.hG,W.hY,W.iW,P.js,P.fE,P.fF,P.f8,E.hC,E.hD,E.hE,E.i9,D.fy,D.fz,F.jl,F.jt,F.ju,F.jv,F.jw,F.jG,F.jH,F.iI,F.iH,F.iA,F.iB,O.h8,O.h9,O.ha,O.hb,O.hc,O.hd,T.i8,V.jF,V.hQ,V.hP])
s(H.i3,[H.hW,H.ce])
t(H.iM,P.f4)
t(P.fY,P.ae)
t(H.W,P.fY)
t(H.dw,H.fv)
t(H.dC,H.cw)
s(H.dC,[H.cP,H.cR])
t(H.cQ,H.cP)
t(H.cv,H.cQ)
t(H.cS,H.cR)
t(H.dD,H.cS)
s(H.dD,[H.hl,H.hm,H.hn,H.ho,H.hp,H.dE,H.hq])
t(P.ja,P.jk)
t(P.j8,P.je)
t(P.da,P.i_)
t(P.fw,P.ci)
t(P.iw,P.fw)
t(P.ix,P.da)
s(P.a9,[P.q,P.t])
s(P.aL,[P.bW,P.fM])
s(W.f,[W.K,W.fC,W.aZ,W.cT,W.b1,W.aI,W.cV,W.iJ,W.cM,P.f9,P.bN])
s(W.K,[W.a1,W.bu])
s(W.a1,[W.r,P.p])
s(W.r,[W.f2,W.f3,W.bP,W.de,W.fG,W.cp,W.hI])
s(W.aN,[W.ck,W.fm,W.fn])
t(W.fk,W.aO)
t(W.cl,W.e8)
t(W.eb,W.ea)
t(W.df,W.eb)
t(W.ed,W.ec)
t(W.fr,W.ed)
t(W.aQ,W.d4)
t(W.eg,W.ef)
t(W.fB,W.eg)
t(W.ei,W.eh)
t(W.bR,W.ei)
t(W.bG,W.l)
s(W.bG,[W.aU,W.ac,W.aK])
t(W.hf,W.en)
t(W.hh,W.eo)
t(W.eq,W.ep)
t(W.hj,W.eq)
t(W.et,W.es)
t(W.cx,W.et)
t(W.ex,W.ew)
t(W.hx,W.ex)
t(W.hF,W.ey)
t(W.cU,W.cT)
t(W.hS,W.cU)
t(W.eA,W.ez)
t(W.hT,W.eA)
t(W.hX,W.eE)
t(W.eI,W.eH)
t(W.i4,W.eI)
t(W.cW,W.cV)
t(W.i5,W.cW)
t(W.eL,W.eK)
t(W.id,W.eL)
t(W.b7,W.ac)
t(W.eQ,W.eP)
t(W.iT,W.eQ)
t(W.e9,W.dg)
t(W.eS,W.eR)
t(W.j5,W.eS)
t(W.eU,W.eT)
t(W.er,W.eU)
t(W.eW,W.eV)
t(W.jf,W.eW)
t(W.eY,W.eX)
t(W.jg,W.eY)
t(W.iU,P.hZ)
t(W.k2,W.iU)
t(W.iV,P.cE)
t(P.ap,P.j9)
t(P.ek,P.ej)
t(P.fR,P.ek)
t(P.ev,P.eu)
t(P.ht,P.ev)
t(P.eG,P.eF)
t(P.i2,P.eG)
t(P.eN,P.eM)
t(P.ig,P.eN)
t(P.f7,P.e7)
t(P.hu,P.bN)
t(P.eC,P.eB)
t(P.hU,P.eC)
s(E.fc,[Z.d6,A.cC,T.bk])
s(D.v,[D.bA,D.bB,D.u,X.hy])
s(X.hy,[X.dy,X.be,X.cu,X.dW])
s(O.R,[D.dv,U.co,M.d8])
s(D.ff,[U.fh,U.a5])
s(U.a5,[U.d9,U.dL])
s(A.cC,[A.dn,A.dA,A.dS])
s(A.dX,[A.ag,A.im,A.io,A.ip,A.il,A.a6,A.ar,A.T,A.bH,A.ir,A.c_,A.ad,A.az,A.ah])
t(F.hR,F.fA)
t(F.ik,F.fS)
t(F.iD,F.iE)
t(F.hr,F.iF)
s(O.bj,[O.dp,O.dB,O.dT])
s(O.cr,[O.h2,O.h3,O.aV])
s(O.aV,[O.h6,O.h7])
s(T.bk,[T.bY,T.cG])
t(T.i6,T.bY)
s(V.dz,[V.bf,V.cI])
s(X.cF,[X.fa,X.fI])
u(H.dZ,H.e_)
u(H.cP,P.y)
u(H.cQ,H.bQ)
u(H.cR,P.y)
u(H.cS,H.bQ)
u(P.em,P.y)
u(W.e8,W.fl)
u(W.ea,P.y)
u(W.eb,W.C)
u(W.ec,P.y)
u(W.ed,W.C)
u(W.ef,P.y)
u(W.eg,W.C)
u(W.eh,P.y)
u(W.ei,W.C)
u(W.en,P.ae)
u(W.eo,P.ae)
u(W.ep,P.y)
u(W.eq,W.C)
u(W.es,P.y)
u(W.et,W.C)
u(W.ew,P.y)
u(W.ex,W.C)
u(W.ey,P.ae)
u(W.cT,P.y)
u(W.cU,W.C)
u(W.ez,P.y)
u(W.eA,W.C)
u(W.eE,P.ae)
u(W.eH,P.y)
u(W.eI,W.C)
u(W.cV,P.y)
u(W.cW,W.C)
u(W.eK,P.y)
u(W.eL,W.C)
u(W.eP,P.y)
u(W.eQ,W.C)
u(W.eR,P.y)
u(W.eS,W.C)
u(W.eT,P.y)
u(W.eU,W.C)
u(W.eV,P.y)
u(W.eW,W.C)
u(W.eX,P.y)
u(W.eY,W.C)
u(P.ej,P.y)
u(P.ek,W.C)
u(P.eu,P.y)
u(P.ev,W.C)
u(P.eF,P.y)
u(P.eG,W.C)
u(P.eM,P.y)
u(P.eN,W.C)
u(P.e7,P.ae)
u(P.eB,P.y)
u(P.eC,W.C)})()
var v={mangledGlobalNames:{t:"int",q:"double",a9:"num",n:"String",Y:"bool",N:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.v]},{func:1,ret:-1,args:[D.v]},{func:1,ret:P.N},{func:1,ret:-1},{func:1,ret:-1,args:[W.ac]},{func:1,ret:P.N,args:[F.a2]},{func:1,ret:-1,args:[P.n,,]},{func:1,ret:-1,args:[P.t,[P.e,E.al]]},{func:1,ret:-1,args:[P.t,P.t]},{func:1,ret:P.N,args:[F.ao,P.q,P.q]},{func:1,ret:-1,args:[W.l]},{func:1,ret:P.N,args:[D.v]},{func:1,ret:-1,args:[W.aK]},{func:1,ret:P.q},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.t,[P.e,M.am]]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:P.N,args:[,,]},{func:1,ret:-1,args:[P.t,[P.e,U.a5]]},{func:1,ret:-1,args:[W.aU]},{func:1,ret:-1,args:[P.t,[P.e,D.ab]]},{func:1,ret:P.n,args:[P.t]},{func:1,ret:P.N,args:[,]},{func:1,args:[,]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:P.q,args:[P.q]},{func:1,ret:-1,args:[P.t,[P.e,V.a4]]},{func:1,ret:-1,args:[P.t,[P.e,O.aJ]]},{func:1,ret:P.N,args:[W.l]},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,ret:P.N,args:[P.a9]},{func:1,ret:-1,args:[W.b7]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:P.Y,args:[W.K]},{func:1,args:[W.l]},{func:1,ret:P.N,args:[P.b2]},{func:1,ret:[P.aB,,],args:[,]},{func:1,ret:W.a1,args:[W.K]},{func:1,ret:P.t,args:[A.aD,A.aD]},{func:1,ret:P.t,args:[A.aF,A.aF]},{func:1,ret:P.t,args:[A.aG,A.aG]},{func:1,ret:P.Y,args:[[P.e,D.ab]]},{func:1,ret:P.N,args:[,],opt:[P.aq]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.h=W.bP.prototype
C.F=J.a.prototype
C.a=J.aT.prototype
C.G=J.dq.prototype
C.e=J.dr.prototype
C.k=J.ds.prototype
C.c=J.cq.prototype
C.d=J.bS.prototype
C.H=J.bC.prototype
C.J=W.cx.prototype
C.r=J.hw.prototype
C.b=P.bX.prototype
C.l=J.cJ.prototype
C.t=W.b7.prototype
C.u=W.cM.prototype
C.m=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.v=function() {
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
C.A=function(getTagFallback) {
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
C.w=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.x=function(hooks) {
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
C.z=function(hooks) {
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
C.y=function(hooks) {
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
C.n=function(hooks) { return hooks; }

C.B=new P.hv()
C.o=new P.iw()
C.C=new P.ix()
C.f=new P.ja()
C.p=new A.bv(0,"ColorBlendType.Overwrite")
C.q=new A.bv(1,"ColorBlendType.Additive")
C.D=new A.bv(2,"ColorBlendType.Average")
C.i=new A.bv(3,"ColorBlendType.AlphaBlend")
C.j=new P.bw(0)
C.E=new P.bw(5e6)
C.I=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.t])})();(function staticFields(){$.aM=0
$.cf=null
$.kk=null
$.k4=!1
$.lg=null
$.l7=null
$.lm=null
$.jx=null
$.jC=null
$.ke=null
$.c3=null
$.cY=null
$.cZ=null
$.k5=!1
$.U=C.f
$.as=[]
$.kx=null
$.ct=null
$.kE=null
$.cy=null
$.cB=null
$.kU=null
$.kS=null
$.kT=null
$.kX=null
$.kW=null
$.kV=null
$.kY=null
$.kD=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nB","ls",function(){return H.lf("_$dart_dartClosure")})
u($,"nC","kh",function(){return H.lf("_$dart_js")})
u($,"nF","lt",function(){return H.b4(H.ii({
toString:function(){return"$receiver$"}}))})
u($,"nG","lu",function(){return H.b4(H.ii({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nH","lv",function(){return H.b4(H.ii(null))})
u($,"nI","lw",function(){return H.b4(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nL","lz",function(){return H.b4(H.ii(void 0))})
u($,"nM","lA",function(){return H.b4(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nK","ly",function(){return H.b4(H.kQ(null))})
u($,"nJ","lx",function(){return H.b4(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nO","lC",function(){return H.b4(H.kQ(void 0))})
u($,"nN","lB",function(){return H.b4(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"o4","ki",function(){return P.mo()})
u($,"o5","lG",function(){return P.md("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nY","lF",function(){return Z.aA(0)})
u($,"nS","lD",function(){return Z.aA(511)})
u($,"o_","av",function(){return Z.aA(1)})
u($,"nZ","br",function(){return Z.aA(2)})
u($,"nU","bq",function(){return Z.aA(4)})
u($,"o0","b9",function(){return Z.aA(8)})
u($,"o1","bs",function(){return Z.aA(16)})
u($,"nV","d1",function(){return Z.aA(32)})
u($,"nW","d2",function(){return Z.aA(64)})
u($,"nX","lE",function(){return Z.aA(96)})
u($,"o2","cb",function(){return Z.aA(128)})
u($,"nT","bp",function(){return Z.aA(256)})
u($,"nA","lr",function(){return new V.fx(1e-9)})
u($,"nz","D",function(){return $.lr()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cw,ArrayBufferView:H.cw,Float32Array:H.cv,Float64Array:H.cv,Int16Array:H.hl,Int32Array:H.hm,Int8Array:H.hn,Uint16Array:H.ho,Uint32Array:H.hp,Uint8ClampedArray:H.dE,CanvasPixelArray:H.dE,Uint8Array:H.hq,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLBaseElement:W.r,HTMLBodyElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLInputElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableCellElement:W.r,HTMLTableDataCellElement:W.r,HTMLTableHeaderCellElement:W.r,HTMLTableColElement:W.r,HTMLTableElement:W.r,HTMLTableRowElement:W.r,HTMLTableSectionElement:W.r,HTMLTemplateElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.f0,HTMLAnchorElement:W.f2,HTMLAreaElement:W.f3,Blob:W.d4,HTMLCanvasElement:W.bP,CanvasRenderingContext2D:W.cg,CDATASection:W.bu,CharacterData:W.bu,Comment:W.bu,ProcessingInstruction:W.bu,Text:W.bu,CSSNumericValue:W.ck,CSSUnitValue:W.ck,CSSPerspective:W.fk,CSSCharsetRule:W.Q,CSSConditionRule:W.Q,CSSFontFaceRule:W.Q,CSSGroupingRule:W.Q,CSSImportRule:W.Q,CSSKeyframeRule:W.Q,MozCSSKeyframeRule:W.Q,WebKitCSSKeyframeRule:W.Q,CSSKeyframesRule:W.Q,MozCSSKeyframesRule:W.Q,WebKitCSSKeyframesRule:W.Q,CSSMediaRule:W.Q,CSSNamespaceRule:W.Q,CSSPageRule:W.Q,CSSRule:W.Q,CSSStyleRule:W.Q,CSSSupportsRule:W.Q,CSSViewportRule:W.Q,CSSStyleDeclaration:W.cl,MSStyleCSSProperties:W.cl,CSS2Properties:W.cl,CSSImageValue:W.aN,CSSKeywordValue:W.aN,CSSPositionValue:W.aN,CSSResourceValue:W.aN,CSSURLImageValue:W.aN,CSSStyleValue:W.aN,CSSMatrixComponent:W.aO,CSSRotation:W.aO,CSSScale:W.aO,CSSSkew:W.aO,CSSTranslation:W.aO,CSSTransformComponent:W.aO,CSSTransformValue:W.fm,CSSUnparsedValue:W.fn,DataTransferItemList:W.fp,HTMLDivElement:W.de,DOMException:W.fq,ClientRectList:W.df,DOMRectList:W.df,DOMRectReadOnly:W.dg,DOMStringList:W.fr,DOMTokenList:W.fs,Element:W.a1,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.aQ,FileList:W.fB,FileWriter:W.fC,HTMLFormElement:W.fG,Gamepad:W.aR,History:W.fK,HTMLCollection:W.bR,HTMLFormControlsCollection:W.bR,HTMLOptionsCollection:W.bR,ImageData:W.by,HTMLImageElement:W.cp,KeyboardEvent:W.aU,Location:W.fW,MediaList:W.he,MIDIInputMap:W.hf,MIDIOutputMap:W.hh,MimeType:W.aW,MimeTypeArray:W.hj,PointerEvent:W.ac,MouseEvent:W.ac,DragEvent:W.ac,Document:W.K,DocumentFragment:W.K,HTMLDocument:W.K,ShadowRoot:W.K,XMLDocument:W.K,Attr:W.K,DocumentType:W.K,Node:W.K,NodeList:W.cx,RadioNodeList:W.cx,Plugin:W.aX,PluginArray:W.hx,RTCStatsReport:W.hF,HTMLSelectElement:W.hI,SourceBuffer:W.aZ,SourceBufferList:W.hS,SpeechGrammar:W.b_,SpeechGrammarList:W.hT,SpeechRecognitionResult:W.b0,Storage:W.hX,CSSStyleSheet:W.aH,StyleSheet:W.aH,TextTrack:W.b1,TextTrackCue:W.aI,VTTCue:W.aI,TextTrackCueList:W.i4,TextTrackList:W.i5,TimeRanges:W.ia,Touch:W.b3,TouchEvent:W.aK,TouchList:W.id,TrackDefaultList:W.ie,CompositionEvent:W.bG,FocusEvent:W.bG,TextEvent:W.bG,UIEvent:W.bG,URL:W.iv,VideoTrackList:W.iJ,WheelEvent:W.b7,Window:W.cM,DOMWindow:W.cM,CSSRuleList:W.iT,ClientRect:W.e9,DOMRect:W.e9,GamepadList:W.j5,NamedNodeMap:W.er,MozNamedAttrMap:W.er,SpeechRecognitionResultList:W.jf,StyleSheetList:W.jg,SVGLength:P.ba,SVGLengthList:P.fR,SVGNumber:P.bg,SVGNumberList:P.ht,SVGPointList:P.hz,SVGStringList:P.i2,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGScriptElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGTransform:P.bl,SVGTransformList:P.ig,AudioBuffer:P.f6,AudioParamMap:P.f7,AudioTrackList:P.f9,AudioContext:P.bN,webkitAudioContext:P.bN,BaseAudioContext:P.bN,OfflineAudioContext:P.hu,WebGLBuffer:P.d5,WebGLFramebuffer:P.dl,WebGLProgram:P.dH,WebGLRenderbuffer:P.dK,WebGL2RenderingContext:P.bX,WebGLShader:P.dM,WebGLTexture:P.dR,WebGLUniformLocation:P.dY,SQLResultSetRowList:P.hU})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dC.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
H.cS.$nativeSuperclassTag="ArrayBufferView"
H.dD.$nativeSuperclassTag="ArrayBufferView"
W.cT.$nativeSuperclassTag="EventTarget"
W.cU.$nativeSuperclassTag="EventTarget"
W.cV.$nativeSuperclassTag="EventTarget"
W.cW.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.li,[])
else U.li([])})})()
//# sourceMappingURL=test.dart.js.map
