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
a[c]=function(){a[c]=function(){H.qi(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.m9"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.m9"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.m9(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={lO:function lO(){},
kR:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
oh:function(){return new P.eb("No element")},
e8:function(a,b,c,d,e){if(c-b<=32)H.oO(a,b,c,d,e)
else H.oN(a,b,c,d,e)},
oO:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a1()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
oN:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.ab(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.ab(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(a3<0||a3>=a2.length)return H.c(a2,a3)
C.a.k(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.c(a2,a4)
C.a.k(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.S(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.C()
if(k<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a1()
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
if(typeof g!=="number")return g.C()
if(g<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a1()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a1()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.C()
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
H.e8(a2,a3,o-2,a5,a6)
H.e8(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.c(a2,o)
if(!J.S(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.c(a2,n)
if(!J.S(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.C()
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
break}}}H.e8(a2,o,n,a5,a6)}else H.e8(a2,o,n,a5,a6)},
ab:function ab(a){this.a=a},
h_:function h_(){},
dR:function dR(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hU:function hU(a,b,c){this.a=a
this.b=b
this.$ti=c},
hV:function hV(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
jF:function jF(a,b,c){this.a=a
this.b=b
this.$ti=c},
jG:function jG(a,b,c){this.a=a
this.b=b
this.$ti=c},
c5:function c5(){},
d7:function d7(){},
ek:function ek(){},
o9:function(){throw H.d(P.H("Cannot modify unmodifiable Map"))},
cx:function(a){var u,t=H.qj(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
q3:function(a){return v.types[H.ak(a)]},
q8:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.R(a).$iL},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aJ(a)
if(typeof u!=="string")throw H.d(H.aM(a))
return u},
cY:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
oG:function(a,b){var u,t,s,r,q,p
if(typeof a!=="string")H.t(H.aM(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.c(u,3)
t=H.a0(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.au(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.b.F(r,p)|32)>s)return}return parseInt(a,b)},
oF:function(a){var u,t
if(typeof a!=="string")H.t(H.aM(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.lD(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
cZ:function(a){return H.ow(a)+H.m7(H.bU(a),0,null)},
ow:function(a){var u,t,s,r,q,p,o,n=J.R(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.K||!!n.$ici){r=C.q(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cx(t.length>1&&C.b.F(t,0)===36?C.b.af(t,1):t)},
ox:function(){if(!!self.location)return self.location.href
return},
mE:function(a){var u,t,s,r,q=J.aD(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
oH:function(a){var u,t,s,r=H.f([],[P.n])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.z)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.aM(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.aT(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.d(H.aM(s))}return H.mE(r)},
mF:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.aM(s))
if(s<0)throw H.d(H.aM(s))
if(s>65535)return H.oH(a)}return H.mE(a)},
oI:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
e3:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aT(u,10))>>>0,56320|u&1023)}}throw H.d(P.au(a,0,1114111,null,null))},
c9:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oE:function(a){var u=H.c9(a).getFullYear()+0
return u},
oC:function(a){var u=H.c9(a).getMonth()+1
return u},
oy:function(a){var u=H.c9(a).getDate()+0
return u},
oz:function(a){var u=H.c9(a).getHours()+0
return u},
oB:function(a){var u=H.c9(a).getMinutes()+0
return u},
oD:function(a){var u=H.c9(a).getSeconds()+0
return u},
oA:function(a){var u=H.c9(a).getMilliseconds()+0
return u},
i:function(a){throw H.d(H.aM(a))},
c:function(a,b){if(a==null)J.aD(a)
throw H.d(H.bT(a,b))},
bT:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aV(!0,b,s,null)
u=H.ak(J.aD(a))
if(!(b<0)){if(typeof u!=="number")return H.i(u)
t=b>=u}else t=!0
if(t)return P.a1(b,a,s,null,u)
return P.iw(b,s)},
pX:function(a,b,c){var u="Invalid value"
if(a>c)return new P.ca(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.ca(a,c,!0,b,"end",u)
return new P.aV(!0,b,"end",null)},
aM:function(a){return new P.aV(!0,a,null,null)},
cr:function(a){if(typeof a!=="number")throw H.d(H.aM(a))
return a},
d:function(a){var u
if(a==null)a=new P.cW()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.nB})
u.name=""}else u.toString=H.nB
return u},
nB:function(){return J.aJ(this.dartException)},
t:function(a){throw H.d(a)},
z:function(a){throw H.d(P.c3(a))},
bq:function(a){var u,t,s,r,q,p
a=H.nz(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.f([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.j9(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ja:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mT:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
mA:function(a,b){return new H.ik(a,b==null?null:b.method)},
lP:function(a,b){var u=b==null,t=u?null:b.method
return new H.hH(a,t,u?null:b.receiver)},
am:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.ly(a)
if(a==null)return
if(a instanceof H.cG)return f.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aT(t,16)&8191)===10)switch(s){case 438:return f.$1(H.lP(H.j(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.mA(H.j(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.nE()
q=$.nF()
p=$.nG()
o=$.nH()
n=$.nK()
m=$.nL()
l=$.nJ()
$.nI()
k=$.nN()
j=$.nM()
i=r.ak(u)
if(i!=null)return f.$1(H.lP(H.a0(u),i))
else{i=q.ak(u)
if(i!=null){i.method="call"
return f.$1(H.lP(H.a0(u),i))}else{i=p.ak(u)
if(i==null){i=o.ak(u)
if(i==null){i=n.ak(u)
if(i==null){i=m.ak(u)
if(i==null){i=l.ak(u)
if(i==null){i=o.ak(u)
if(i==null){i=k.ak(u)
if(i==null){i=j.ak(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.mA(H.a0(u),i))}}return f.$1(new H.jl(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ea()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aV(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ea()
return a},
bV:function(a){var u
if(a instanceof H.cG)return a.b
if(a==null)return new H.f1(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f1(a)},
q1:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
q7:function(a,b,c,d,e,f){H.e(a,"$ilK")
switch(H.ak(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.q("Unsupported number of arguments for wrapped closure"))},
cs:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.q7)
a.$identity=u
return u},
o6:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.iP().constructor.prototype):Object.create(new H.cz(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.bd
if(typeof t!=="number")return t.p()
$.bd=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.ml(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.o2(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ml(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
o2:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.q3,a)
if(typeof a=="function")if(b)return a
else{u=c?H.mk:H.lF
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
o3:function(a,b,c,d){var u=H.lF
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ml:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.o5(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.o3(t,!r,u,b)
if(t===0){r=$.bd
if(typeof r!=="number")return r.p()
$.bd=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cA
return new Function(r+H.j(q==null?$.cA=H.fG("self"):q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.bd
if(typeof r!=="number")return r.p()
$.bd=r+1
o+=r
r="return function("+o+"){return this."
q=$.cA
return new Function(r+H.j(q==null?$.cA=H.fG("self"):q)+"."+H.j(u)+"("+o+");}")()},
o4:function(a,b,c,d){var u=H.lF,t=H.mk
switch(b?-1:a){case 0:throw H.d(H.oL("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
o5:function(a,b){var u,t,s,r,q,p,o,n=$.cA
if(n==null)n=$.cA=H.fG("self")
u=$.mj
if(u==null)u=$.mj=H.fG("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.o4(s,!q,t,b)
if(s===1){n="return function(){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+");"
u=$.bd
if(typeof u!=="number")return u.p()
$.bd=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+", "+o+");"
u=$.bd
if(typeof u!=="number")return u.p()
$.bd=u+1
return new Function(n+u+"}")()},
m9:function(a,b,c,d,e,f,g){return H.o6(a,b,c,d,!!e,!!f,g)},
lF:function(a){return a.a},
mk:function(a){return a.c},
fG:function(a){var u,t,s,r=new H.cz("self","target","receiver","name"),q=J.lM(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
D:function(a){if(a==null)H.pQ("boolean expression must not be null")
return a},
a0:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.b8(a,"String"))},
pY:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.b8(a,"double"))},
nw:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.b8(a,"num"))},
no:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.b8(a,"bool"))},
ak:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.b8(a,"int"))},
md:function(a,b){throw H.d(H.b8(a,H.cx(H.a0(b).substring(2))))},
qd:function(a,b){throw H.d(H.o1(a,H.cx(H.a0(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.R(a)[b])return a
H.md(a,b)},
u:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.R(a)[b]
else u=!0
if(u)return a
H.qd(a,b)},
r0:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.R(a)[b])return a
H.md(a,b)},
r_:function(a){if(a==null)return a
if(!!J.R(a).$ib)return a
throw H.d(H.b8(a,"List<dynamic>"))},
nu:function(a,b){var u
if(a==null)return a
u=J.R(a)
if(!!u.$ib)return a
if(u[b])return a
H.md(a,b)},
np:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ak(u)]
else return a.$S()}return},
fp:function(a,b){var u
if(typeof a=="function")return!0
u=H.np(J.R(a))
if(u==null)return!1
return H.nb(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.m4)return a
$.m4=!0
try{if(H.fp(a,b))return a
u=H.lv(b)
t=H.b8(a,u)
throw H.d(t)}finally{$.m4=!1}},
dn:function(a,b){if(a!=null&&!H.m8(a,b))H.t(H.b8(a,H.lv(b)))
return a},
b8:function(a,b){return new H.jb("TypeError: "+P.dH(a)+": type '"+H.j(H.nj(a))+"' is not a subtype of type '"+b+"'")},
o1:function(a,b){return new H.fH("CastError: "+P.dH(a)+": type '"+H.j(H.nj(a))+"' is not a subtype of type '"+b+"'")},
nj:function(a){var u,t=J.R(a)
if(!!t.$icD){u=H.np(t)
if(u!=null)return H.lv(u)
return"Closure"}return H.cZ(a)},
pQ:function(a){throw H.d(new H.jI(a))},
qi:function(a){throw H.d(new P.fT(a))},
oL:function(a){return new H.iD(a)},
nq:function(a){return v.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
bU:function(a){if(a==null)return
return a.$ti},
qZ:function(a,b,c){return H.cw(a["$a"+H.j(c)],H.bU(b))},
cv:function(a,b,c,d){var u=H.cw(a["$a"+H.j(c)],H.bU(b))
return u==null?null:u[d]},
aU:function(a,b,c){var u=H.cw(a["$a"+H.j(b)],H.bU(a))
return u==null?null:u[c]},
r:function(a,b){var u=H.bU(a)
return u==null?null:u[b]},
lv:function(a){return H.bS(a,null)},
bS:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cx(a[0].name)+H.m7(a,1,b)
if(typeof a=="function")return H.cx(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ak(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.j(b[t])}if('func' in a)return H.pp(a,b)
if('futureOr' in a)return"FutureOr<"+H.bS("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
pp:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.f([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.b.p(p,a0[m])
l=u[q]
if(l!=null&&l!==P.O)p+=" extends "+H.bS(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bS(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bS(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bS(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.q0(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.a0(n[g])
i=i+h+H.bS(d[c],a0)+(" "+H.j(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
m7:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.ac("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bS(p,c)}return"<"+u.j(0)+">"},
cw:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dm:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bU(a)
t=J.R(a)
if(t[b]==null)return!1
return H.nm(H.cw(t[d],u),null,c,null)},
o:function(a,b,c,d){if(a==null)return a
if(H.dm(a,b,c,d))return a
throw H.d(H.b8(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cx(b.substring(2))+H.m7(c,0,null),v.mangledGlobalNames)))},
nm:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aT(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aT(a[t],b,c[t],d))return!1
return!0},
qX:function(a,b,c){return a.apply(b,H.cw(J.R(b)["$a"+H.j(c)],H.bU(b)))},
nt:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="O"||a.name==="A"||a===-1||a===-2||H.nt(u)}return!1},
m8:function(a,b){var u,t
if(a==null)return b==null||b.name==="O"||b.name==="A"||b===-1||b===-2||H.nt(b)
if(b==null||b===-1||b.name==="O"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.m8(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fp(a,b)}u=J.R(a).constructor
t=H.bU(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aT(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.m8(a,b))throw H.d(H.b8(a,H.lv(b)))
return a},
aT:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="O"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="O"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aT(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="A")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aT("type" in a?a.type:l,b,s,d)
else if(H.aT(a,b,s,d))return!0
else{if(!('$i'+"aa" in t.prototype))return!1
r=t.prototype["$a"+"aa"]
q=H.cw(r,u?a.slice(1):l)
return H.aT(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.nb(a,b,c,d)
if('func' in a)return c.name==="lK"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.nm(H.cw(m,u),b,p,d)},
nb:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aT(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aT(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aT(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aT(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.qb(h,b,g,d)},
qb:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aT(c[s],d,a[s],b))return!1}return!0},
qY:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
q9:function(a){var u,t,s,r,q=H.a0($.ns.$1(a)),p=$.kO[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kV[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.a0($.nl.$2(a,q))
if(q!=null){p=$.kO[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kV[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.lu(u)
$.kO[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kV[q]=u
return u}if(s==="-"){r=H.lu(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.nx(a,u)
if(s==="*")throw H.d(P.jk(q))
if(v.leafTags[q]===true){r=H.lu(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.nx(a,u)},
nx:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.mb(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
lu:function(a){return J.mb(a,!1,null,!!a.$iL)},
qa:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.lu(u)
else return J.mb(u,c,null,null)},
q5:function(){if(!0===$.ma)return
$.ma=!0
H.q6()},
q6:function(){var u,t,s,r,q,p,o,n
$.kO=Object.create(null)
$.kV=Object.create(null)
H.q4()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ny.$1(q)
if(p!=null){o=H.qa(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
q4:function(){var u,t,s,r,q,p,o=C.A()
o=H.cq(C.B,H.cq(C.C,H.cq(C.r,H.cq(C.r,H.cq(C.D,H.cq(C.E,H.cq(C.F(C.q),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ns=new H.kS(r)
$.nl=new H.kT(q)
$.ny=new H.kU(p)},
cq:function(a,b){return a(b)||b},
ms:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(P.a6("Illegal RegExp pattern ("+String(p)+")",a,null))},
qg:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
q_:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nz:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
nA:function(a,b,c){var u=H.qh(a,b,c)
return u},
qh:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nz(b),'g'),H.q_(c))},
fN:function fN(){},
fO:function fO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j9:function j9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ik:function ik(a,b){this.a=a
this.b=b},
hH:function hH(a,b,c){this.a=a
this.b=b
this.c=c},
jl:function jl(a){this.a=a},
cG:function cG(a,b){this.a=a
this.b=b},
ly:function ly(a){this.a=a},
f1:function f1(a){this.a=a
this.b=null},
cD:function cD(){},
iX:function iX(){},
iP:function iP(){},
cz:function cz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jb:function jb(a){this.a=a},
fH:function fH(a){this.a=a},
iD:function iD(a){this.a=a},
jI:function jI(a){this.a=a},
Z:function Z(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hG:function hG(a){this.a=a},
hK:function hK(a,b){this.a=a
this.b=b
this.c=null},
hL:function hL(a,b){this.a=a
this.$ti=b},
hM:function hM(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kS:function kS(a){this.a=a},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
hF:function hF(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eL:function eL(a){this.b=a},
jH:function jH(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
cn:function(a){return a},
ou:function(a){return new Int8Array(a)},
bt:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bT(b,a))},
pn:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.pX(a,b,c))
return b},
cS:function cS(){},
bM:function bM(){},
dY:function dY(){},
cT:function cT(){},
dZ:function dZ(){},
ie:function ie(){},
ig:function ig(){},
ih:function ih(){},
ii:function ii(){},
ij:function ij(){},
e_:function e_(){},
cU:function cU(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
dd:function dd(){},
q0:function(a){return J.mq(a?Object.keys(a):[],null)},
qj:function(a){return v.mangledGlobalNames[a]},
qc:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
mb:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kQ:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.ma==null){H.q5()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.jk("Return interceptor for "+H.j(u(a,q))))}s=a.constructor
r=s==null?null:s[$.me()]
if(r!=null)return r
r=H.q9(a)
if(r!=null)return r
if(typeof a=="function")return C.M
u=Object.getPrototypeOf(a)
if(u==null)return C.w
if(u===Object.prototype)return C.w
if(typeof s=="function"){Object.defineProperty(s,$.me(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
oi:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.lE(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.au(a,0,4294967295,"length",null))
return J.mq(new Array(a),b)},
mq:function(a,b){return J.lM(H.f(a,[b]))},
lM:function(a){a.fixed$length=Array
return a},
mr:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
oj:function(a,b){var u,t
for(u=a.length;b<u;){t=C.b.F(a,b)
if(t!==32&&t!==13&&!J.mr(t))break;++b}return b},
ok:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.b.S(a,u)
if(t!==32&&t!==13&&!J.mr(t))break}return b},
R:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dM.prototype
return J.dL.prototype}if(typeof a=="string")return J.bK.prototype
if(a==null)return J.dN.prototype
if(typeof a=="boolean")return J.hE.prototype
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bL.prototype
return a}if(a instanceof P.O)return a
return J.kQ(a)},
dp:function(a){if(typeof a=="string")return J.bK.prototype
if(a==null)return a
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bL.prototype
return a}if(a instanceof P.O)return a
return J.kQ(a)},
kP:function(a){if(a==null)return a
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bL.prototype
return a}if(a instanceof P.O)return a
return J.kQ(a)},
q2:function(a){if(typeof a=="number")return J.cM.prototype
if(typeof a=="string")return J.bK.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.ci.prototype
return a},
cu:function(a){if(typeof a=="string")return J.bK.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.ci.prototype
return a},
fq:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bL.prototype
return a}if(a instanceof P.O)return a
return J.kQ(a)},
S:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.R(a).v(a,b)},
Q:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.q8(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dp(a).i(a,b)},
lz:function(a,b,c){return J.kP(a).k(a,b,c)},
nV:function(a,b){return J.cu(a).F(a,b)},
nW:function(a,b,c){return J.fq(a).i7(a,b,c)},
nX:function(a,b,c,d){return J.fq(a).iQ(a,b,c,d)},
nY:function(a,b){return J.cu(a).S(a,b)},
lA:function(a,b){return J.q2(a).iZ(a,b)},
lB:function(a,b){return J.kP(a).I(a,b)},
nZ:function(a,b,c,d){return J.fq(a).je(a,b,c,d)},
lC:function(a,b){return J.kP(a).q(a,b)},
fs:function(a){return J.fq(a).gcl(a)},
dr:function(a){return J.R(a).gH(a)},
bZ:function(a){return J.kP(a).ga3(a)},
aD:function(a){return J.dp(a).gl(a)},
mg:function(a,b){return J.cu(a).cw(a,b)},
o_:function(a,b){return J.fq(a).jS(a,b)},
mh:function(a,b,c){return J.cu(a).u(a,b,c)},
aJ:function(a){return J.R(a).j(a)},
lD:function(a){return J.cu(a).eI(a)},
a:function a(){},
hE:function hE(){},
dN:function dN(){},
dO:function dO(){},
ip:function ip(){},
ci:function ci(){},
bL:function bL(){},
bh:function bh(a){this.$ti=a},
lN:function lN(a){this.$ti=a},
ax:function ax(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cM:function cM(){},
dM:function dM(){},
dL:function dL(){},
bK:function bK(){}},P={
p0:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pR()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cs(new P.jM(s),1)).observe(u,{childList:true})
return new P.jL(s,u,t)}else if(self.setImmediate!=null)return P.pS()
return P.pT()},
p1:function(a){self.scheduleImmediate(H.cs(new P.jN(H.l(a,{func:1,ret:-1})),0))},
p2:function(a){self.setImmediate(H.cs(new P.jO(H.l(a,{func:1,ret:-1})),0))},
p3:function(a){P.lU(C.o,H.l(a,{func:1,ret:-1}))},
lU:function(a,b){var u=C.d.ab(a.a,1000)
return P.p6(u<0?0:u,b)},
mS:function(a,b){var u=C.d.ab(a.a,1000)
return P.p7(u<0?0:u,b)},
p6:function(a,b){var u=new P.f8()
u.f7(a,b)
return u},
p7:function(a,b){var u=new P.f8()
u.f8(a,b)
return u},
ai:function(a){return new P.jJ(new P.aq($.T,[a]),[a])},
ah:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
aw:function(a,b){P.pm(a,b)},
ag:function(a,b){b.cm(0,a)},
af:function(a,b){b.bw(H.am(a),H.bV(a))},
pm:function(a,b){var u,t=null,s=new P.kz(b),r=new P.kA(b),q=J.R(a)
if(!!q.$iaq)a.dG(s,r,t)
else if(!!q.$iaa)a.cK(s,r,t)
else{u=new P.aq($.T,[null])
H.B(a,null)
u.a=4
u.c=a
u.dG(s,t,t)}},
aj:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.T.eC(new P.kM(u),P.A,P.n,null)},
n3:function(a,b){var u,t,s
b.a=1
try{a.cK(new P.k_(b),new P.k0(b),null)}catch(s){u=H.am(s)
t=H.bV(s)
P.qe(new P.k1(b,u,t))}},
jZ:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iaq")
if(u>=4){t=b.bq()
b.a=a.a
b.c=a.c
P.ck(b,t)}else{t=H.e(b.c,"$ib9")
b.a=2
b.c=a
a.dz(t)}},
ck:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.e(g.c,"$iaE")
P.kJ(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.ck(h.a,b)}g=h.a
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
if(m){H.e(q,"$iaE")
P.kJ(i,i,g.b,q.a,q.b)
return}l=$.T
if(l!==n)$.T=n
else l=i
g=b.c
if((g&15)===8)new P.k6(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.k5(u,b,q).$0()}else if((g&2)!==0)new P.k4(h,u,b).$0()
if(l!=null)$.T=l
g=u.b
if(!!J.R(g).$iaa){if(g.a>=4){k=H.e(o.c,"$ib9")
o.c=null
b=o.br(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.jZ(g,o)
return}}j=b.b
k=H.e(j.c,"$ib9")
j.c=null
b=j.br(k)
g=u.a
p=u.b
if(!g){H.B(p,H.r(j,0))
j.a=4
j.c=p}else{H.e(p,"$iaE")
j.a=8
j.c=p}h.a=j
g=j}},
pM:function(a,b){if(H.fp(a,{func:1,args:[P.O,P.ae]}))return b.eC(a,null,P.O,P.ae)
if(H.fp(a,{func:1,args:[P.O]}))return H.l(a,{func:1,ret:null,args:[P.O]})
throw H.d(P.lE(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pL:function(){var u,t
for(;u=$.co,u!=null;){$.dk=null
t=u.b
$.co=t
if(t==null)$.dj=null
u.a.$0()}},
pP:function(){$.m5=!0
try{P.pL()}finally{$.dk=null
$.m5=!1
if($.co!=null)$.mf().$1(P.nn())}},
ng:function(a){var u=new P.et(a)
if($.co==null){$.co=$.dj=u
if(!$.m5)$.mf().$1(P.nn())}else $.dj=$.dj.b=u},
pO:function(a){var u,t,s=$.co
if(s==null){P.ng(a)
$.dk=$.dj
return}u=new P.et(a)
t=$.dk
if(t==null){u.b=s
$.co=$.dk=u}else{u.b=t.b
$.dk=t.b=u
if(u.b==null)$.dj=u}},
qe:function(a){var u=null,t=$.T
if(C.f===t){P.cp(u,u,C.f,a)
return}P.cp(u,u,t,H.l(t.ci(a),{func:1,ret:-1}))},
qs:function(a,b){if(a==null)H.t(P.o0("stream"))
return new P.kk([b])},
mR:function(a,b){var u=$.T
if(u===C.f)return P.lU(a,H.l(b,{func:1,ret:-1}))
return P.lU(a,H.l(u.ci(b),{func:1,ret:-1}))},
oS:function(a,b){var u=$.T
if(u===C.f)return P.mS(a,H.l(b,{func:1,ret:-1,args:[P.bo]}))
return P.mS(a,H.l(u.dP(b,P.bo),{func:1,ret:-1,args:[P.bo]}))},
kJ:function(a,b,c,d,e){var u={}
u.a=d
P.pO(new P.kK(u,e))},
nc:function(a,b,c,d,e){var u,t=$.T
if(t===c)return d.$0()
$.T=c
u=t
try{t=d.$0()
return t}finally{$.T=u}},
nd:function(a,b,c,d,e,f,g){var u,t=$.T
if(t===c)return d.$1(e)
$.T=c
u=t
try{t=d.$1(e)
return t}finally{$.T=u}},
pN:function(a,b,c,d,e,f,g,h,i){var u,t=$.T
if(t===c)return d.$2(e,f)
$.T=c
u=t
try{t=d.$2(e,f)
return t}finally{$.T=u}},
cp:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.ci(d):c.iY(d,-1)
P.ng(d)},
jM:function jM(a){this.a=a},
jL:function jL(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(a){this.a=a},
jO:function jO(a){this.a=a},
f8:function f8(){this.c=0},
kp:function kp(a,b){this.a=a
this.b=b},
ko:function ko(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jJ:function jJ(a,b){this.a=a
this.b=!1
this.$ti=b},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
kM:function kM(a){this.a=a},
aa:function aa(){},
ev:function ev(){},
jK:function jK(a,b){this.a=a
this.$ti=b},
b9:function b9(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aq:function aq(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jW:function jW(a,b){this.a=a
this.b=b},
k3:function k3(a,b){this.a=a
this.b=b},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
jY:function jY(a,b){this.a=a
this.b=b},
k2:function k2(a,b){this.a=a
this.b=b},
jX:function jX(a,b,c){this.a=a
this.b=b
this.c=c},
k6:function k6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k7:function k7(a){this.a=a},
k5:function k5(a,b,c){this.a=a
this.b=b
this.c=c},
k4:function k4(a,b,c){this.a=a
this.b=b
this.c=c},
et:function et(a){this.a=a
this.b=null},
iS:function iS(){},
iU:function iU(a,b){this.a=a
this.b=b},
iV:function iV(a,b){this.a=a
this.b=b},
d1:function d1(){},
iT:function iT(){},
kk:function kk(a){this.$ti=a},
bo:function bo(){},
aE:function aE(a,b){this.a=a
this.b=b},
ky:function ky(){},
kK:function kK(a,b){this.a=a
this.b=b},
kd:function kd(){},
kf:function kf(a,b,c){this.a=a
this.b=b
this.c=c},
ke:function ke(a,b){this.a=a
this.b=b},
kg:function kg(a,b,c){this.a=a
this.b=b
this.c=c},
om:function(a,b){return new H.Z([a,b])},
mt:function(a,b){return new H.Z([a,b])},
on:function(a){return H.q1(a,new H.Z([null,null]))},
oo:function(a){return new P.kb([a])},
m_:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
p5:function(a,b,c){var u=new P.eJ(a,b,[c])
u.c=a.e
return u},
og:function(a,b,c){var u,t
if(P.m6(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.f([],[P.h])
C.a.h($.aI,a)
try{P.pq(a,u)}finally{if(0>=$.aI.length)return H.c($.aI,-1)
$.aI.pop()}t=P.mP(b,H.nu(u,"$im"),", ")+c
return t.charCodeAt(0)==0?t:t},
lL:function(a,b,c){var u,t
if(P.m6(a))return b+"..."+c
u=new P.ac(b)
C.a.h($.aI,a)
try{t=u
t.a=P.mP(t.a,a,", ")}finally{if(0>=$.aI.length)return H.c($.aI,-1)
$.aI.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
m6:function(a){var u,t
for(u=$.aI.length,t=0;t<u;++t)if(a===$.aI[t])return!0
return!1},
pq:function(a,b){var u,t,s,r,q,p,o,n=a.ga3(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.D())return
u=H.j(n.gT(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.D()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gT(n);++l
if(!n.D()){if(l<=4){C.a.h(b,H.j(r))
return}t=H.j(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gT(n);++l
for(;n.D();r=q,q=p){p=n.gT(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2;--l}C.a.h(b,"...")
return}}s=H.j(r)
t=H.j(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.h(b,o)
C.a.h(b,s)
C.a.h(b,t)},
mu:function(a,b,c){var u=P.om(b,c)
a.q(0,new P.hN(u,b,c))
return u},
lQ:function(a){var u,t={}
if(P.m6(a))return"{...}"
u=new P.ac("")
try{C.a.h($.aI,a)
u.a+="{"
t.a=!0
J.lC(a,new P.hS(t,u))
u.a+="}"}finally{if(0>=$.aI.length)return H.c($.aI,-1)
$.aI.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
kb:function kb(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d9:function d9(a){this.a=a
this.c=this.b=null},
eJ:function eJ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hN:function hN(a,b,c){this.a=a
this.b=b
this.c=c},
hO:function hO(){},
y:function y(){},
hR:function hR(){},
hS:function hS(a,b){this.a=a
this.b=b},
ay:function ay(){},
kq:function kq(){},
hT:function hT(){},
el:function el(a,b){this.a=a
this.$ti=b},
kh:function kh(){},
eK:function eK(){},
fe:function fe(){},
oW:function(a,b,c,d){if(b instanceof Uint8Array)return P.oX(!1,b,c,d)
return},
oX:function(a,b,c,d){var u,t,s=$.nO()
if(s==null)return
u=0===c
if(u&&!0)return P.lX(s,b)
t=b.length
d=P.bO(c,d,t)
if(u&&d===t)return P.lX(s,b)
return P.lX(s,b.subarray(c,d))},
lX:function(a,b){if(P.oZ(b))return
return P.p_(a,b)},
p_:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.am(t)}return},
oZ:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
oY:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.am(t)}return},
nf:function(a,b,c){var u,t,s
for(u=J.dp(a),t=b;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.ao()
if((s&127)!==s)return t-b}return c-b},
mi:function(a,b,c,d,e,f){if(C.d.bh(f,4)!==0)throw H.d(P.a6("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.a6("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.a6("Invalid base64 padding, more than two '=' characters",a,b))},
fD:function fD(){},
fE:function fE(){},
c2:function c2(){},
c4:function c4(){},
h0:function h0(){},
jt:function jt(){},
jv:function jv(){},
kx:function kx(a){this.b=0
this.c=a},
ju:function ju(a){this.a=a},
kw:function kw(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
bW:function(a,b,c){var u=H.oG(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.a6(a,null,null))},
pZ:function(a){var u=H.oF(a)
if(u!=null)return u
throw H.d(P.a6("Invalid double",a,null))},
oc:function(a){if(a instanceof H.cD)return a.j(0)
return"Instance of '"+H.j(H.cZ(a))+"'"},
op:function(a,b,c){var u,t=J.oi(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.k(t,u,b)
return H.o(t,"$ib",[c],"$ab")},
mv:function(a,b,c){var u,t=[c],s=H.f([],t)
for(u=J.bZ(a);u.D();)C.a.h(s,H.B(u.gT(u),c))
if(b)return s
return H.o(J.lM(s),"$ib",t,"$ab")},
d2:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.o(a,"$ibh",[P.n],"$abh")
u=a.length
c=P.bO(b,c,u)
return H.mF(b>0||c<u?C.a.eT(a,b,c):a)}if(!!J.R(a).$icU)return H.oI(a,b,P.bO(b,c,a.length))
return P.oP(a,b,c)},
oP:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.d(P.au(b,0,J.aD(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.au(c,b,J.aD(a),q,q))
t=J.bZ(a)
for(s=0;s<b;++s)if(!t.D())throw H.d(P.au(b,0,s,q,q))
r=[]
if(u)for(;t.D();)r.push(t.gT(t))
else for(s=b;s<c;++s){if(!t.D())throw H.d(P.au(c,b,s,q,q))
r.push(t.gT(t))}return H.mF(r)},
lT:function(a){return new H.hF(a,H.ms(a,!1,!0,!1,!1,!1))},
mP:function(a,b,c){var u=J.bZ(b)
if(!u.D())return a
if(c.length===0){do a+=H.j(u.gT(u))
while(u.D())}else{a+=H.j(u.gT(u))
for(;u.D();)a=a+c+H.j(u.gT(u))}return a},
em:function(){var u=H.ox()
if(u!=null)return P.oV(u)
throw H.d(P.H("'Uri.base' is not supported"))},
kv:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.nT().b
if(typeof b!=="string")H.t(H.aM(b))
u=u.test(b)}else u=!1
if(u)return b
H.B(b,H.aU(c,"c2",0))
t=c.gjc().cn(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.e3(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
oa:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
ob:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dB:function(a){if(a>=10)return""+a
return"0"+a},
mm:function(a){return new P.bG(1000*a)},
dH:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aJ(a)
if(typeof a==="string")return JSON.stringify(a)
return P.oc(a)},
ds:function(a){return new P.aV(!1,null,null,a)},
lE:function(a,b,c){return new P.aV(!0,a,b,c)},
o0:function(a){return new P.aV(!1,null,a,"Must not be null")},
iw:function(a,b){return new P.ca(null,null,!0,a,b,"Value not in range")},
au:function(a,b,c,d,e){return new P.ca(b,c,!0,a,d,"Invalid value")},
bO:function(a,b,c){if(0>a||a>c)throw H.d(P.au(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.au(b,a,c,"end",null))
return b}return c},
mH:function(a,b){if(typeof a!=="number")return a.C()
if(a<0)throw H.d(P.au(a,0,null,b,null))},
a1:function(a,b,c,d,e){var u=H.ak(e==null?J.aD(b):e)
return new P.hf(u,!0,a,c,"Index out of range")},
H:function(a){return new P.jm(a)},
jk:function(a){return new P.jj(a)},
mO:function(a){return new P.eb(a)},
c3:function(a){return new P.fM(a)},
q:function(a){return new P.eC(a)},
a6:function(a,b,c){return new P.ha(a,b,c)},
oq:function(a,b,c){var u,t=H.f([],[c])
C.a.sl(t,a)
for(u=0;u<a;++u)C.a.k(t,u,b.$1(u))
return t},
fr:function(a){H.qc(a)},
oV:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.F(a,4)^58)*3|C.b.F(a,0)^100|C.b.F(a,1)^97|C.b.F(a,2)^116|C.b.F(a,3)^97)>>>0
if(u===0)return P.mU(e<e?C.b.u(a,0,e):a,5,f).geM()
else if(u===32)return P.mU(C.b.u(a,5,e),0,f).geM()}t=new Array(8)
t.fixed$length=Array
s=H.f(t,[P.n])
C.a.k(s,0,0)
C.a.k(s,1,-1)
C.a.k(s,2,-1)
C.a.k(s,7,-1)
C.a.k(s,3,0)
C.a.k(s,4,0)
C.a.k(s,5,e)
C.a.k(s,6,e)
if(P.ne(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.bJ()
if(r>=0)if(P.ne(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.p()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.C()
if(typeof n!=="number")return H.i(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.b.a9(a,"..",o)))j=n>o+2&&C.b.a9(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.a9(a,"file",0)){if(q<=0){if(!C.b.a9(a,"/",o)){i="file:///"
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
a=C.b.b_(a,o,n,"/");++e
n=h}k="file"}else if(C.b.a9(a,"http",0)){if(t&&p+3===o&&C.b.a9(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.b_(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.a9(a,"https",0)){if(t&&p+4===o&&C.b.a9(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.b_(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.u(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.ki(a,r,q,p,o,n,m,k)}return P.p8(a,0,e,r,q,p,o,n,m,k)},
mW:function(a){var u=P.h
return C.a.ji(H.f(a.split("&"),[u]),P.mt(u,u),new P.jr(C.h),[P.x,P.h,P.h])},
oU:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jo(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.S(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.bW(C.b.u(a,s,t),n,n)
if(typeof p!=="number")return p.a1()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.c(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.bW(C.b.u(a,s,c),n,n)
if(typeof p!=="number")return p.a1()
if(p>255)k.$2(l,s)
if(r>=u)return H.c(j,r)
j[r]=p
return j},
mV:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.jp(a),d=new P.jq(e,a)
if(a.length<2)e.$1("address is too short")
u=H.f([],[P.n])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.b.S(a,t)
if(p===58){if(t===b){++t
if(C.b.S(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
C.a.h(u,-1)
r=!0}else C.a.h(u,d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.a.gaJ(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)C.a.h(u,d.$2(s,c))
else{m=P.oU(a,s,c)
C.a.h(u,(m[0]<<8|m[1])>>>0)
C.a.h(u,(m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.c(l,i)
l[i]=0
f=i+1
if(f>=k)return H.c(l,f)
l[f]=0
i+=2}else{f=C.d.aT(h,8)
if(i<0||i>=k)return H.c(l,i)
l[i]=f
f=i+1
if(f>=k)return H.c(l,f)
l[f]=h&255
i+=2}}return l},
p8:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.pg(a,b,d)
else{if(d===b)P.cm(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.ph(a,u,e-1):""
s=P.pd(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.i(g)
q=r<g?P.pf(P.bW(C.b.u(a,r,g),new P.kr(a,f),n),j):n}else{q=n
s=q
t=""}p=P.pe(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.C()
o=h<i?P.m1(a,h+1,i,n):n
return new P.cl(j,t,s,q,p,o,i<c?P.pc(a,i+1,c):n)},
n5:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cm:function(a,b,c){throw H.d(P.a6(c,a,b))},
pf:function(a,b){if(a!=null&&a===P.n5(b))return
return a},
pd:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.b.S(a,b)===91){if(typeof c!=="number")return c.n()
u=c-1
if(C.b.S(a,u)!==93)P.cm(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.pa(a,t,u)
if(typeof s!=="number")return s.C()
if(s<u){r=s+1
q=P.na(a,C.b.a9(a,"25",r)?s+3:r,u,"%25")}else q=""
P.mV(a,t,s)
return C.b.u(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.i(c)
p=b
for(;p<c;++p)if(C.b.S(a,p)===58){s=C.b.bz(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.na(a,C.b.a9(a,"25",r)?s+3:r,c,"%25")}else q=""
P.mV(a,b,s)
return"["+C.b.u(a,b,s)+q+"]"}return P.pj(a,b,c)},
pa:function(a,b,c){var u,t=C.b.bz(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.i(c)
u=t<c}else u=!1
return u?t:c},
na:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.ac(d):null
if(typeof c!=="number")return H.i(c)
u=b
t=u
s=!0
for(;u<c;){r=C.b.S(a,u)
if(r===37){q=P.m2(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.ac("")
o=l.a+=C.b.u(a,t,u)
if(p)q=C.b.u(a,u,u+3)
else if(q==="%")P.cm(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.c(C.i,p)
p=(C.i[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.ac("")
if(t<u){l.a+=C.b.u(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.b.S(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.ac("")
l.a+=C.b.u(a,t,u)
l.a+=P.m0(r)
u+=m
t=u}}}if(l==null)return C.b.u(a,b,c)
if(t<c)l.a+=C.b.u(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
pj:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.i(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.S(a,u)
if(q===37){p=P.m2(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ac("")
n=C.b.u(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.u(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.c(C.u,o)
o=(C.u[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ac("")
if(t<u){s.a+=C.b.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.c(C.l,o)
o=(C.l[o]&1<<(q&15))!==0}else o=!1
if(o)P.cm(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.S(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ac("")
n=C.b.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.m0(q)
u+=l
t=u}}}}if(s==null)return C.b.u(a,b,c)
if(t<c){n=C.b.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
pg:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.n7(C.b.F(a,b)))P.cm(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.c(C.n,r)
r=(C.n[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cm(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.u(a,b,c)
return P.p9(t?a.toLowerCase():a)},
p9:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
ph:function(a,b,c){return P.di(a,b,c,C.O,!1)},
pe:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.di(a,b,c,C.v,!0):C.j.kk(d,new P.ks(),P.h).w(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.ah(u,"/"))u="/"+u
return P.pi(u,e,f)},
pi:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.ah(a,"/"))return P.pk(a,!u||c)
return P.pl(a)},
m1:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.d(P.ds("Both query and queryParameters specified"))
return P.di(a,b,c,C.m,!0)}if(d==null)return
u=new P.ac("")
t.a=""
d.q(0,new P.kt(new P.ku(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
pc:function(a,b,c){return P.di(a,b,c,C.m,!0)},
m2:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.S(a,b+1)
t=C.b.S(a,p)
s=H.kR(u)
r=H.kR(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aT(q,4)
if(p>=8)return H.c(C.i,p)
p=(C.i[p]&1<<(q&15))!==0}else p=!1
if(p)return H.e3(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.u(a,b,b+3).toUpperCase()
return},
m0:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.f(u,[P.n])
C.a.k(t,0,37)
C.a.k(t,1,C.b.F(o,a>>>4))
C.a.k(t,2,C.b.F(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.f(u,[P.n])
for(q=0;--r,r>=0;s=128){p=C.d.im(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.F(o,p>>>4))
C.a.k(t,q+2,C.b.F(o,p&15))
q+=3}}return P.d2(t,0,null)},
di:function(a,b,c,d,e){var u=P.n9(a,b,c,d,e)
return u==null?C.b.u(a,b,c):u},
n9:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.C()
if(typeof c!=="number")return H.i(c)
if(!(o<c))break
c$0:{u=C.b.S(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.c(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.m2(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.c(C.l,t)
t=(C.l[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.cm(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.b.S(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.m0(u)}}if(m==null)m=new P.ac("")
m.a+=C.b.u(a,n,o)
m.a+=H.j(s)
if(typeof r!=="number")return H.i(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.C()
if(n<c)m.a+=C.b.u(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
n8:function(a){if(C.b.ah(a,"."))return!0
return C.b.cw(a,"/.")!==-1},
pl:function(a){var u,t,s,r,q,p,o
if(!P.n8(a))return a
u=H.f([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.S(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.c(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.w(u,"/")},
pk:function(a,b){var u,t,s,r,q,p
if(!P.n8(a))return!b?P.n6(a):a
u=H.f([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaJ(u)!==".."){if(0>=u.length)return H.c(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.c(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaJ(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.c(u,0)
C.a.k(u,0,P.n6(u[0]))}return C.a.w(u,"/")},
n6:function(a){var u,t,s,r=a.length
if(r>=2&&P.n7(J.nV(a,0)))for(u=1;u<r;++u){t=C.b.F(a,u)
if(t===58)return C.b.u(a,0,u)+"%3A"+C.b.af(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.c(C.n,s)
s=(C.n[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
pb:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.ds("Invalid URL encoding"))}}return u},
m3:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.F(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.u(a,b,c)
else r=new H.ab(C.b.u(a,b,c))}else{r=H.f([],[P.n])
for(s=a.length,q=b;q<c;++q){t=C.b.F(a,q)
if(t>127)throw H.d(P.ds("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.ds("Truncated URI"))
C.a.h(r,P.pb(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.o(r,"$ib",[P.n],"$ab")
return new P.ju(!1).cn(r)},
n7:function(a){var u=a|32
return 97<=u&&u<=122},
mU:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.f([b-1],[P.n])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.F(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.a6(m,a,t))}}if(s<0&&t>b)throw H.d(P.a6(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.F(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaJ(l)
if(r!==44||t!==p+7||!C.b.a9(a,"base64",p+1))throw H.d(P.a6("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.z.jt(0,a,o,u)
else{n=P.n9(a,o,u,C.m,!0)
if(n!=null)a=C.b.b_(a,o,u,n)}return new P.jn(a,l,c)},
po:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.oq(22,new P.kC(),P.P),n=new P.kB(o),m=new P.kD(),l=new P.kE(),k=H.e(n.$2(0,225),"$iP")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(14,225),"$iP")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(15,225),"$iP")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(1,225),"$iP")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(2,235),"$iP")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(3,235),"$iP")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(4,229),"$iP")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(5,229),"$iP")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(6,231),"$iP")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(7,231),"$iP")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.e(n.$2(8,8),"$iP"),"]",5)
k=H.e(n.$2(9,235),"$iP")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(16,235),"$iP")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(17,235),"$iP")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(10,235),"$iP")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(18,235),"$iP")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(19,235),"$iP")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(11,235),"$iP")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(12,236),"$iP")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.e(n.$2(13,237),"$iP")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.e(n.$2(20,245),"$iP"),"az",21)
k=H.e(n.$2(21,245),"$iP")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
ne:function(a,b,c,d,e){var u,t,s,r,q=$.nU()
for(u=b;u<c;++u){if(d<0||d>=q.length)return H.c(q,d)
t=q[d]
s=C.b.F(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.c(t,s)
r=t[s]
d=r&31
C.a.k(e,r>>>5,u)}return d},
M:function M(){},
aK:function aK(a,b){this.a=a
this.b=b},
G:function G(){},
bG:function bG(a){this.a=a},
fY:function fY(){},
fZ:function fZ(){},
bH:function bH(){},
fx:function fx(){},
cW:function cW(){},
aV:function aV(a,b,c,d){var _=this
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
hf:function hf(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
jm:function jm(a){this.a=a},
jj:function jj(a){this.a=a},
eb:function eb(a){this.a=a},
fM:function fM(a){this.a=a},
io:function io(){},
ea:function ea(){},
fT:function fT(a){this.a=a},
eC:function eC(a){this.a=a},
ha:function ha(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
m:function m(){},
aO:function aO(){},
b:function b(){},
x:function x(){},
A:function A(){},
al:function al(){},
O:function O(){},
e5:function e5(){},
ae:function ae(){},
h:function h(){},
ac:function ac(a){this.a=a},
jr:function jr(a){this.a=a},
jo:function jo(a){this.a=a},
jp:function jp(a){this.a=a},
jq:function jq(a,b){this.a=a
this.b=b},
cl:function cl(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
kr:function kr(a,b){this.a=a
this.b=b},
ks:function ks(){},
ku:function ku(a,b){this.a=a
this.b=b},
kt:function kt(a){this.a=a},
jn:function jn(a,b,c){this.a=a
this.b=b
this.c=c},
kC:function kC(){},
kB:function kB(a){this.a=a},
kD:function kD(){},
kE:function kE(){},
ki:function ki(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jS:function jS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
pW:function(a){var u,t=J.R(a)
if(!!t.$ibu){u=t.gdU(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fd(a.data,a.height,a.width)},
pV:function(a){if(a instanceof P.fd)return{data:a.a,height:a.b,width:a.c}
return a},
bB:function(a){var u,t,s,r,q
if(a==null)return
u=P.mt(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r){q=H.a0(t[r])
u.k(0,q,a[q])}return u},
pU:function(a){var u={}
a.q(0,new P.kN(u))
return u},
kl:function kl(){},
km:function km(a,b){this.a=a
this.b=b},
fd:function fd(a,b,c){this.a=a
this.b=b
this.c=c},
kN:function kN(a){this.a=a},
f5:function f5(a,b){this.a=a
this.b=b},
h6:function h6(a,b){this.a=a
this.b=b},
h7:function h7(){},
h8:function h8(){},
ka:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
p4:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kc:function kc(){},
az:function az(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bj:function bj(){},
hJ:function hJ(){},
bm:function bm(){},
il:function il(){},
is:function is(){},
iW:function iW(){},
v:function v(){},
bp:function bp(){},
j8:function j8(){},
eH:function eH(){},
eI:function eI(){},
eT:function eT(){},
eU:function eU(){},
f3:function f3(){},
f4:function f4(){},
fb:function fb(){},
fc:function fc(){},
P:function P(){},
fz:function fz(){},
fA:function fA(){},
fB:function fB(a){this.a=a},
fC:function fC(){},
c_:function c_(){},
im:function im(){},
eu:function eu(){},
du:function du(){},
e4:function e4(){},
cc:function cc(){},
e7:function e7(){},
ed:function ed(){},
ej:function ej(){},
iO:function iO(){},
f_:function f_(){},
f0:function f0(){}},W={
lG:function(){var u=document.createElement("canvas")
return u},
mn:function(a){H.e(a,"$ik")
return"wheel"},
mo:function(a){return W.of(a,null,null).eG(new W.hd(),P.h)},
of:function(a,b,c){var u,t=W.bg,s=new P.aq($.T,[t]),r=new P.jK(s,[t]),q=new XMLHttpRequest()
C.J.jC(q,"GET",a,!0)
t=W.bn
u={func:1,ret:-1,args:[t]}
W.a8(q,"load",H.l(new W.he(q,r),u),!1,t)
W.a8(q,"error",H.l(r.gj_(),u),!1,t)
q.send()
return s},
mp:function(a){var u,t=document.createElement("input"),s=H.e(t,"$icL")
try{s.type=a}catch(u){H.am(u)}return s},
k9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
n4:function(a,b,c,d){var u=W.k9(W.k9(W.k9(W.k9(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a8:function(a,b,c,d,e){var u=W.nk(new W.jV(c),W.p)
if(u!=null&&!0)J.nX(a,b,u,!1)
return new W.jU(a,b,u,!1,[e])},
nk:function(a,b){var u=$.T
if(u===C.f)return a
return u.dP(a,b)},
w:function w(){},
ft:function ft(){},
fv:function fv(){},
fw:function fw(){},
c0:function c0(){},
c1:function c1(){},
cB:function cB(){},
bF:function bF(){},
cE:function cE(){},
fP:function fP(){},
V:function V(){},
cF:function cF(){},
fQ:function fQ(){},
be:function be(){},
bf:function bf(){},
fR:function fR(){},
fS:function fS(){},
fU:function fU(){},
dD:function dD(){},
fV:function fV(){},
dE:function dE(){},
dF:function dF(){},
fW:function fW(){},
fX:function fX(){},
jQ:function jQ(a,b){this.a=a
this.b=b},
a5:function a5(){},
p:function p(){},
k:function k(){},
aN:function aN(){},
cH:function cH(){},
h5:function h5(){},
h9:function h9(){},
aX:function aX(){},
hc:function hc(){},
c6:function c6(){},
bg:function bg(){},
hd:function hd(){},
he:function he(a,b){this.a=a
this.b=b},
cJ:function cJ(){},
bu:function bu(){},
cK:function cK(){},
cL:function cL(){},
cC:function cC(){},
bi:function bi(){},
hP:function hP(){},
i7:function i7(){},
cP:function cP(){},
i8:function i8(){},
i9:function i9(a){this.a=a},
ia:function ia(){},
ib:function ib(a){this.a=a},
aZ:function aZ(){},
ic:function ic(){},
ar:function ar(){},
jP:function jP(a){this.a=a},
I:function I(){},
cV:function cV(){},
b_:function b_(){},
iq:function iq(){},
bn:function bn(){},
iB:function iB(){},
iC:function iC(a){this.a=a},
iE:function iE(){},
b1:function b1(){},
iM:function iM(){},
b2:function b2(){},
iN:function iN(){},
b3:function b3(){},
iQ:function iQ(){},
iR:function iR(a){this.a=a},
aP:function aP(){},
bz:function bz(){},
b5:function b5(){},
aQ:function aQ(){},
iY:function iY(){},
iZ:function iZ(){},
j3:function j3(){},
b6:function b6(){},
b7:function b7(){},
j6:function j6(){},
j7:function j7(){},
bQ:function bQ(){},
js:function js(){},
jE:function jE(){},
bs:function bs(){},
d8:function d8(){},
jR:function jR(){},
ex:function ex(){},
k8:function k8(){},
eQ:function eQ(){},
kj:function kj(){},
kn:function kn(){},
jT:function jT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lZ:function lZ(a,b,c,d){var _=this
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
E:function E(){},
dI:function dI(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
ew:function ew(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eR:function eR(){},
eS:function eS(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
de:function de(){},
df:function df(){},
eY:function eY(){},
eZ:function eZ(){},
f2:function f2(){},
f6:function f6(){},
f7:function f7(){},
dg:function dg(){},
dh:function dh(){},
f9:function f9(){},
fa:function fa(){},
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
lH:function(a){var u=new O.a9([a])
u.bM(a)
return u},
a9:function a9(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cO:function cO(){this.b=this.a=null},
nr:function(a){var u=C.b.jq(a,"/")
if(u<=0)return a
return C.b.u(a,0,u)},
ni:function(a){var u,t,s=P.lT("([^\\s]+)")
$.nh=s
u=s.jh(a)
if(u==null)return H.f([],[P.h])
s=u.b
if(1>=s.length)return H.c(s,1)
t=s[1]
return H.f([t,C.b.eI(C.b.af(a,t.length))],[P.h])},
kL:function(a){var u,t=H.f([],[P.h]),s=P.lT("([^\\s]+)")
$.nh=s
s=new H.jH(s,a,0)
for(;s.D();){u=s.d.b
if(1>=u.length)return H.c(u,1)
C.a.h(t,u[1])}return t},
bA:function(a){var u,t=O.kL(a),s=H.f([],[P.G]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.c(t,u)
C.a.h(s,P.pZ(t[u]))}return s},
dX:function(a,b,c){return O.ot(a,b,!1)},
ot:function(a,b,c){var u=0,t=P.ai([P.x,P.h,O.aY]),s,r=2,q,p=[],o,n,m,l,k,j,i,h
var $async$dX=P.aj(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
o=O.nr(a)
k=new O.kH(b)
k.sc3(new H.Z([P.h,O.aY]))
k.c=null
n=k
u=7
return P.aw(W.mo(a),$async$dX)
case 7:m=e
u=8
return P.aw(n.au(m,o,!1),$async$dX)
case 8:j=n.b
s=j
u=1
break
r=2
u=6
break
case 4:r=3
h=q
l=H.am(h)
P.fr(a+": "+H.j(l))
j=P.q(a+": "+H.j(l))
throw H.d(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.ag(s,t)
case 2:return P.af(q,t)}})
return P.ah($async$dX,t)},
e0:function(a,b){var u=null,t=null,s=!1
return O.ov(a,b)},
ov:function(a,b){var u=0,t=P.ai(E.a2),s,r=2,q,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$e0=P.aj(function(a0,a1){if(a0===1){q=a1
u=r}while(true)switch(u){case 0:f=null
e=null
d=!1
r=4
o=O.nr(a)
k=f
j=new O.kI(b)
j.shZ(H.f([],[O.dl]))
j.siv(H.f([],[V.at]))
j.sh4(H.f([],[V.a3]))
j.sc3(new H.Z([P.h,O.aY]))
j.f=e
j.r=""
i=O.mw()
h=i.r
h.sX(0,new V.a4(0.35,0.35,0.35))
h=i.x
h.sX(0,new V.a4(0.65,0.65,0.65))
j.x=i
j.z=j.y=null
j.Q=E.h1(null)
if(k!=null)j.e.dM(0,k)
j.bs()
n=j
u=7
return P.aw(W.mo(a),$async$e0)
case 7:m=a1
u=8
return P.aw(n.au(m,o,d),$async$e0)
case 8:k=e
if(k!=null){i=new O.it()
i.b=!0
k.J(i)}k=n.gjd()
s=k
u=1
break
r=2
u=6
break
case 4:r=3
c=q
l=H.am(c)
P.fr(a+": "+H.j(l))
k=P.q(a+": "+H.j(l))
throw H.d(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.ag(s,t)
case 2:return P.af(q,t)}})
return P.ah($async$e0,t)},
kH:function kH(a){this.a=a
this.c=this.b=null},
dl:function dl(a){this.a=a
this.b=null},
kI:function kI(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
it:function it(){this.b=null},
mw:function(){var u,t,s=new O.aY()
s.sfj(O.lH(V.aG))
s.e.bj(s.ghb(),s.ghd())
u=new O.bk(s,"emission")
u.c=new A.ad(!1,!1,!1)
u.f=new V.a4(0,0,0)
s.f=u
u=new O.bk(s,"ambient")
u.c=new A.ad(!1,!1,!1)
u.f=new V.a4(0,0,0)
s.r=u
u=new O.bk(s,"diffuse")
u.c=new A.ad(!1,!1,!1)
u.f=new V.a4(0,0,0)
s.x=u
u=new O.bk(s,"invDiffuse")
u.c=new A.ad(!1,!1,!1)
u.f=new V.a4(0,0,0)
s.y=u
u=new O.i0(s,"specular")
u.c=new A.ad(!1,!1,!1)
u.f=new V.a4(0,0,0)
u.ch=100
s.z=u
u=new O.hX(s,"bump")
u.c=new A.ad(!1,!1,!1)
s.Q=u
s.ch=null
u=new O.bk(s,"reflect")
u.c=new A.ad(!1,!1,!1)
u.f=new V.a4(0,0,0)
s.cx=u
u=new O.i_(s,"refract")
u.c=new A.ad(!1,!1,!1)
u.f=new V.a4(0,0,0)
u.ch=1
s.cy=u
u=new O.hW(s,"alpha")
u.c=new A.ad(!1,!1,!1)
u.f=1
s.db=u
u=new D.dQ()
u.bM(D.an)
u.sf3(H.f([],[D.dC]))
u.shW(H.f([],[D.e2]))
u.sf4(H.f([],[D.e9]))
u.y=u.x=null
u.cP(u.gh9(),u.ghK(),u.ghO())
s.dx=u
t=new O.hZ()
t.b=new V.X(0,0,0,0)
t.c=1
t.d=10
t.e=!1
s.dy=t
t=u.x
u=t==null?u.x=D.Y():t
u.h(0,s.gi9())
u=s.dx
t=u.y
u=t==null?u.y=D.Y():t
u.h(0,s.gbk())
s.fr=null
return s},
dJ:function dJ(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hq:function hq(a,b){this.a=a
this.b=b},
hr:function hr(a){this.a=a},
hB:function hB(a,b){this.a=a
this.b=b},
hA:function hA(a){this.a=a},
hC:function hC(a,b){this.a=a
this.b=b},
hD:function hD(a,b){this.a=a
this.b=b},
hw:function hw(a,b){this.a=a
this.b=b},
hp:function hp(a,b){this.a=a
this.b=b},
hi:function hi(a,b){this.a=a
this.b=b},
hs:function hs(a,b){this.a=a
this.b=b},
hv:function hv(a,b){this.a=a
this.b=b},
hm:function hm(a,b){this.a=a
this.b=b},
hn:function hn(a,b){this.a=a
this.b=b},
hl:function hl(a,b){this.a=a
this.b=b},
ho:function ho(a,b){this.a=a
this.b=b},
hj:function hj(a){this.a=a},
hk:function hk(a){this.a=a},
ht:function ht(a){this.a=a},
hu:function hu(a){this.a=a},
hx:function hx(a){this.a=a},
hy:function hy(a,b){this.a=a
this.b=b},
hz:function hz(a){this.a=a},
hh:function hh(a){this.a=a},
hg:function hg(a){this.a=a},
aY:function aY(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i1:function i1(a,b){this.a=a
this.b=b},
i2:function i2(){},
i3:function i3(a,b){this.a=a
this.b=b},
i4:function i4(){},
i5:function i5(a,b){this.a=a
this.b=b},
i6:function i6(){},
hW:function hW(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cN:function cN(){},
hX:function hX(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
bk:function bk(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hZ:function hZ(){var _=this
_.e=_.d=_.c=_.b=null},
i_:function i_(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
i0:function i0(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bP:function bP(){}},E={
h1:function(a){var u=new E.a2()
u.a=""
u.b=!0
u.sf2(0,O.lH(E.a2))
u.y.bj(u.gju(),u.gjx())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.scQ(0,a)
u.sb1(null)
u.sba(null)
return u},
oK:function(a,b){var u=new E.ix(a)
u.eZ(a,b)
return u},
oR:function(a,b,c,d,e){var u,t,s=J.R(a)
if(!!s.$ic1)return E.mQ(a,!0,!0,!0,!1)
u=W.lG()
t=u.style
t.width="100%"
t.height="100%"
s.gcl(a).h(0,u)
return E.mQ(u,!0,!0,!0,!1)},
mQ:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ef(),j=H.e(C.k.cO(a,"webgl2",P.on(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$icc")
if(j==null)H.t(P.q("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.oK(j,a)
u=new T.j0(j)
u.b=H.ak(j.getParameter(3379))
H.ak(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.en(a)
t=new X.hI()
t.c=new X.aL(!1,!1,!1)
t.si_(P.oo(P.n))
u.b=t
t=new X.id(u)
t.f=0
t.r=V.bN()
t.x=V.bN()
t.ch=t.Q=1
u.c=t
t=new X.hQ(u)
t.r=0
t.x=V.bN()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.j5(u)
t.f=V.bN()
t.r=V.bN()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfD(H.f([],[[P.d1,P.O]]))
t=u.z
s=document
r=W.ar
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a8(s,"contextmenu",H.l(u.ghl(),q),!1,r))
t=u.z
p=W.p
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a8(a,"focus",H.l(u.ghr(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a8(a,"blur",H.l(u.ghf(),o),!1,p))
t=u.z
n=W.bi
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a8(s,"keyup",H.l(u.ghv(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a8(s,"keydown",H.l(u.ght(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a8(a,"mousedown",H.l(u.ghz(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a8(a,"mouseup",H.l(u.ghD(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a8(a,l,H.l(u.ghB(),q),!1,r))
n=u.z
W.mn(a)
m=W.bs;(n&&C.a).h(n,W.a8(a,H.a0(W.mn(a)),H.l(u.ghF(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a8(s,l,H.l(u.ghn(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a8(s,"mouseup",H.l(u.ghp(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a8(s,"pointerlockchange",H.l(u.ghH(),o),!1,p))
p=u.z
o=W.b7
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a8(a,"touchstart",H.l(u.ghU(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a8(a,"touchend",H.l(u.ghQ(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a8(a,"touchmove",H.l(u.ghS(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aK(Date.now(),!1)
k.cy=0
k.dC()
return k},
fF:function fF(){},
a2:function a2(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ix:function ix(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
iy:function iy(a){this.a=a},
iz:function iz(a){this.a=a},
iA:function iA(a){this.a=a},
ef:function ef(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
j2:function j2(a){this.a=a}},Z={
lY:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cn(c)),35044)
a.bindBuffer(b,null)
return new Z.er(b,u)},
aS:function(a){return new Z.br(a)},
er:function er(a,b){this.a=a
this.b=b},
dv:function dv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
es:function es(a){this.a=a},
bE:function bE(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
dw:function dw(){this.a=null},
bJ:function bJ(a,b,c){this.a=a
this.b=b
this.c=c},
br:function br(a){this.a=a}},D={
Y:function(){var u=new D.bI()
u.sap(null)
u.saQ(null)
u.c=null
u.d=0
return u},
fI:function fI(){},
bI:function bI(){var _=this
_.d=_.c=_.b=_.a=null},
h3:function h3(a){this.a=a},
h4:function h4(a){this.a=a},
C:function C(){this.b=null},
c7:function c7(a){this.b=null
this.$ti=a},
c8:function c8(a){this.b=null
this.$ti=a},
F:function F(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
dC:function dC(){},
an:function an(){},
dQ:function dQ(){var _=this
_.d=_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
e2:function e2(){},
e9:function e9(){}},X={dx:function dx(a,b){this.a=a
this.b=b},dP:function dP(a,b){this.a=a
this.b=b},hI:function hI(){var _=this
_.d=_.c=_.b=_.a=null},dS:function dS(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hQ:function hQ(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aL:function aL(a,b,c){this.a=a
this.b=b
this.c=c},bw:function bw(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},id:function id(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cQ:function cQ(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ir:function ir(){},eh:function eh(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},j5:function j5(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},en:function en(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
oe:function(a){var u=new X.hb(),t=new V.X(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.mJ
if(t==null){t=V.mI(0,0,1,1)
$.mJ=t}u.r=t
return u},
dy:function dy(){},
hb:function hb(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e1:function e1(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ec:function ec(){}},V={
lI:function(a){var u,t,s=a.length
if(0>=s)return H.c(a,0)
u=a[0]
if(1>=s)return H.c(a,1)
t=a[1]
if(2>=s)return H.c(a,2)
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
return new V.a4(u,t,s)},
o7:function(a,b,c){var u,t,s,r,q,p,o,n
a*=6
u=C.e.by(a)
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
return new V.a4(p,o,n)
case 1:if(r<0)p=0
else p=r>1?1:r
if(b<0)o=0
else o=b>1?1:b
if(s<0)n=0
else n=s>1?1:s
return new V.a4(p,o,n)
case 2:if(s<0)p=0
else p=s>1?1:s
if(b<0)o=0
else o=b>1?1:b
if(q<0)n=0
else n=q>1?1:q
return new V.a4(p,o,n)
case 3:if(s<0)p=0
else p=s>1?1:s
if(r<0)o=0
else o=r>1?1:r
if(b<0)n=0
else n=b>1?1:b
return new V.a4(p,o,n)
case 4:if(q<0)p=0
else p=q>1?1:q
if(s<0)o=0
else o=s>1?1:s
if(b<0)n=0
else n=b>1?1:b
return new V.a4(p,o,n)
default:if(b<0)p=0
else p=b>1?1:b
if(s<0)o=0
else o=s>1?1:s
if(r<0)n=0
else n=r>1?1:r
return new V.a4(p,o,n)}},
dz:function(a){if(a<0)a=0
else if(a>1)a=1
return new V.X(a,a,a,1)},
o8:function(a){return new V.X(a.a,a.b,a.c,1)},
qk:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bh(a-b,u)
return(a<0?a+u:a)+b},
U:function(a,b,c){if(a==null)return C.b.al("null",c)
return C.b.al(C.e.eH(Math.abs(a-0)<$.N().a?0:a,b),c+b+1)},
ct:function(a,b,c){var u,t,s,r,q,p=H.f([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.z)(a),++s){r=V.U(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.c(p,q)
C.a.k(p,q,C.b.al(p[q],t))}return p},
mc:function(a){return C.e.jZ(Math.pow(2,C.L.by(Math.log(H.cr(a))/Math.log(2))))},
dW:function(){var u=$.mz
return u==null?$.mz=V.bl(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bl:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
my:function(a,b,c){return V.bl(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
mx:function(a,b,c){return V.bl(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
bN:function(){var u=$.mD
return u==null?$.mD=new V.at(0,0):u},
lS:function(){var u=$.cX
return u==null?$.cX=new V.aH(0,0,0):u},
mI:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e6(a,b,c,d)},
mK:function(a,b,c,d,e,f){return new V.cb(a,b,c,d,e,f)},
mL:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i
if(a==null)return b
if(b==null)return a
u=a.a
t=b.a
s=Math.min(H.cr(u),H.cr(t))
r=a.b
q=b.b
p=Math.min(H.cr(r),H.cr(q))
o=a.c
n=b.c
m=Math.min(H.cr(o),H.cr(n))
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
return new V.cb(s,p,m,j-s,i-p,Math.max(o+t,n+q)-m)},
a7:function(){var u=$.n0
return u==null?$.n0=new V.a3(0,0,0):u},
n2:function(){var u=$.mZ
return u==null?$.mZ=new V.a3(1,0,0):u},
n1:function(){var u=$.mY
return u==null?$.mY=new V.a3(0,0,-1):u},
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
X:function X(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h2:function h2(a){this.a=a},
dV:function dV(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aG:function aG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
at:function at(a,b){this.a=a
this.b=b},
aH:function aH(a,b,c){this.a=a
this.b=b
this.c=c},
e6:function e6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cb:function cb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
W:function W(a,b){this.a=a
this.b=b},
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
aA:function(a){var u=new V.iF()
u.f_(a)
return u},
fu:function fu(){},
bv:function bv(){},
dT:function dT(){},
bx:function bx(){this.a=null},
iF:function iF(){this.a=null},
d0:function d0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eg:function eg(a,b,c){this.a=a
this.b=b
this.c=c},
d4:function d4(a){this.b=a
this.c=null},
j4:function j4(){this.c=this.b=this.a=null},
d5:function d5(a){this.b=a
this.a=this.c=null},
qf:function(a){P.oS(C.I,new V.lw(a))},
mG:function(a){var u=new V.iu(a),t=document.getElementById(a)
u.c=t
if(t==null)H.t("Failed to find "+a+" for RadioGroup")
return u},
oM:function(a){var u=new V.iJ()
u.f0(a,!0)
return u},
fJ:function fJ(a){this.a=a
this.d=this.c=null},
fK:function fK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lw:function lw(a){this.a=a},
iu:function iu(a){this.a=a
this.c=null},
iv:function iv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iJ:function iJ(){this.b=this.a=null},
iL:function iL(a){this.a=a},
iK:function iK(a){this.a=a}},U={
lJ:function(){var u=new U.fL()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
fL:function fL(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dA:function dA(){this.b=this.a=null},
cI:function cI(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
as:function as(){},
eo:function eo(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
ep:function ep(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eq:function eq(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dG:function dG(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
or:function(a,b){var u=a.aH,t=new A.dU(b,u)
t.cV(b,u)
t.eY(a,b)
return t},
os:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gac(a0)+a1.gac(a1)+a2.gac(a2)+a3.gac(a3)+a4.gac(a4)+a5.gac(a5)+a6.gac(a6)+a7.gac(a7)+a8.gac(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.z)(a9),++t)f+="_"+H.j(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.z)(b0),++t)f+="_"+H.j(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.z)(b1),++t)f+="_"+H.j(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.bc()
if(l){u=$.bb()
g=new Z.br(g.a|u.a)}if(k){u=$.ba()
g=new Z.br(g.a|u.a)}if(j){u=$.bD()
g=new Z.br(g.a|u.a)}if(i){u=$.bC()
g=new Z.br(g.a|u.a)}return new A.hY(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,m,p,r,h,!0,!1,!1,o,r,n,l,k,j,!1,i,a,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
kF:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kG:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.kF(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.lx(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
pu:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kF(b,t,"emission")
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
pr:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.kG(b,t,"ambient")
b.a+="\n"},
ps:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.kG(b,t,"diffuse")
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
pv:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.kG(b,t,"invDiffuse")
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
pB:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.kG(b,t,"specular")
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
px:function(a,b){var u,t,s
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
pz:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.kF(b,t,"reflect")
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
pA:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.kF(b,t,"refract")
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
pt:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.j(u)
s=A.lx(t)
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
r=[P.h]
o=H.f([],r)
n=a.b
if(n.a||n.b||!1)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.f([],r)
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
c.a+="      highLight = intensity*("+C.a.w(m," + ")+");\n"}else c.a+="   highLight = "+C.a.w(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.w(o," + ")+");\n"
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
py:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.j(u)
s=A.lx(t)
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
c.a=r+"\n"}r=[P.h]
l=H.f([],r)
C.a.h(l,"lit.color")
if(o)C.a.h(l,"attenuation")
if(u)C.a.h(l,"textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.w(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.f([],r)
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
k=H.f([],r)
r=a.c
if(r.a||r.b||!1)C.a.h(k,"diffuse(norm, normDir)")
r=a.d
if(r.a||r.b||!1)C.a.h(k,"invDiffuse(norm, normDir)")
r=a.e
if(r.a||r.b||!1)C.a.h(k,"specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.w(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.w(l," + ")+");\n"
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
pC:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.j(u)
s=A.lx(t)
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
c.a=u+"\n"}u=[P.h]
j=H.f([],u)
if(n)C.a.h(j,"attenuation")
if(o)C.a.h(j,"scale")
if(m)C.a.h(j,"texture2D(txt2D, txtLoc).rgb")
else C.a.h(j,"vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.w(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.f([],u)
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
i=H.f([],u)
u=a.c
if(u.a||u.b||!1)C.a.h(i,"diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)C.a.h(i,"invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)C.a.h(i,"specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.w(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.w(j," + ")+");\n"
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
pw:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.f([],[P.h])
u=a.b
if(u.a||u.b||!1)C.a.h(t,"ambientColor")
u=a.c
if(u.a||u.b||!1)C.a.h(t,"diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)C.a.h(t,"invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.w(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
pD:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.ac("")
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
A.pu(a,j)
A.pr(a,j)
A.ps(a,j)
A.pv(a,j)
A.pB(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.pz(a,j)
A.pA(a,j)}A.px(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.z)(q),++o)A.pt(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.z)(q),++o)A.py(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.z)(q),++o)A.pC(a,q[o],j)
A.pw(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.f([],[P.h])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.z)(u),++o){r=u[o].j(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.af(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.z)(u),++o){r=u[o].j(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.af(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.z)(u),++o){r=u[o].j(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.af(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)C.a.h(n,"emissionColor()")
u=a.r
if(u.a||u.b||!1)C.a.h(n,"reflect(refl)")
u=a.x
if(u.a||u.b||!1)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.w(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
pE:function(a,b){var u,t,s
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
pG:function(a,b){var u
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
pF:function(a,b){var u
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
pI:function(a,b){var u,t
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
pJ:function(a,b){var u,t
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
pH:function(a,b){var u
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
pK:function(a,b){var u
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
lx:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.b.af(a,1)},
lV:function(a,b,c,d,e){var u=new A.jc(a,c,e)
u.f=d
u.siI(P.op(d,0,P.n))
return u},
dt:function dt(a,b,c){this.a=a
this.b=b
this.c=c},
fy:function fy(a){this.a=a},
ad:function ad(a,b,c){this.a=a
this.b=b
this.c=c},
dK:function dK(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dU:function dU(a,b){var _=this
_.kb=_.e_=_.dZ=_.dY=_.aH=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.kj=_.ki=_.kh=_.cu=_.ct=_.cs=_.cr=_.cq=_.cp=_.kg=_.eb=_.ea=_.kf=_.e9=_.e8=_.e7=_.ke=_.e6=_.e5=_.e4=_.kd=_.e3=_.e2=_.kc=_.e1=_.e0=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aW:function aW(a,b){this.a=a
this.b=b},
b0:function b0(a,b){this.a=a
this.b=b},
b4:function b4(a,b){this.a=a
this.b=b},
hY:function hY(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aH=b3
_.dY=b4},
ce:function ce(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cf:function cf(a,b,c,d,e,f,g,h,i,j){var _=this
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
d_:function d_(){},
ei:function ei(){},
jh:function jh(a){this.a=a},
aR:function aR(a,b,c){this.a=a
this.c=b
this.d=c},
je:function je(a,b,c){this.a=a
this.c=b
this.d=c},
jf:function jf(a,b,c){this.a=a
this.c=b
this.d=c},
jg:function jg(a,b,c){this.a=a
this.c=b
this.d=c},
jc:function jc(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ap:function ap(a,b,c){this.a=a
this.c=b
this.d=c},
jd:function jd(a,b,c){this.a=a
this.c=b
this.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
bR:function bR(a,b,c){this.a=a
this.c=b
this.d=c},
ji:function ji(a,b,c){this.a=a
this.c=b
this.d=c},
d6:function d6(a,b,c){this.a=a
this.c=b
this.d=c},
aB:function aB(a,b,c){this.a=a
this.c=b
this.d=c},
aC:function aC(a,b,c){this.a=a
this.c=b
this.d=c},
cg:function cg(a,b,c){this.a=a
this.c=b
this.d=c}},F={
od:function(a,b,c){var u=new F.K(),t=a.a
if(t==null)H.t(P.q("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.q("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.Y()
return u},
ol:function(a,b){var u,t=new F.aF()
if(a==null)H.t(P.q("May not create a line with a null start vertex."))
if(b==null)H.t(P.q("May not create a line with a null end vertex."))
u=a.a
if(u==null)H.t(P.q("May not create a line with a start vertex which is not attached to a shape."))
if(u!=b.a)H.t(P.q("May not create a line with vertices attached to different shapes."))
t.a=a
C.a.h(a.c.b,t)
t.b=b
C.a.h(b.c.c,t)
C.a.h(t.a.a.c.b,t)
t.a.a.Y()
return t},
lR:function(a){var u=new F.by()
if(a.a==null)H.t(P.q("May not create a point with a vertex which is not attached to a shape."))
u.a=a
C.a.h(a.b.b,u)
C.a.h(u.a.a.b.b,u)
u.a.a.Y()
return u},
av:function(){var u=new F.ao(),t=new F.jw(u)
t.b=!1
t.sf6(H.f([],[F.J]))
u.a=t
t=new F.iI(u)
t.sc6(H.f([],[F.by]))
u.b=t
t=new F.iH(u)
t.sfU(H.f([],[F.aF]))
u.c=t
t=new F.iG(u)
t.sfN(H.f([],[F.K]))
u.d=t
u.e=null
return u},
cj:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.J(),r=new F.jB()
r.sc6(H.f([],[F.by]))
s.b=r
r=new F.jA()
u=[F.aF]
r.sfV(H.f([],u))
r.sfW(H.f([],u))
s.c=r
r=new F.jx()
u=[F.K]
r.sfO(H.f([],u))
r.sfP(H.f([],u))
r.sfQ(H.f([],u))
s.d=r
h=$.nP()
s.e=0
r=$.bc()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bb().a)!==0?e:t
s.x=(u&$.ba().a)!==0?b:t
s.y=(u&$.bD().a)!==0?f:t
s.z=(u&$.bY().a)!==0?g:t
s.Q=(u&$.nQ().a)!==0?c:t
s.ch=(u&$.cy().a)!==0?i:0
s.cx=(u&$.bC().a)!==0?a:t
return s},
K:function K(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aF:function aF(){this.b=this.a=null},
by:function by(){this.a=null},
ao:function ao(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
cd:function cd(){},
iG:function iG(a){this.a=a
this.b=null},
iH:function iH(a){this.a=a
this.b=null},
iI:function iI(a){this.a=a
this.b=null},
J:function J(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jD:function jD(a){this.a=a},
jC:function jC(a){this.a=a},
jw:function jw(a){this.a=a
this.c=this.b=null},
jx:function jx(){this.d=this.c=this.b=null},
jy:function jy(a,b){this.a=a
this.b=b},
jz:function jz(a,b){this.a=a
this.b=b},
jA:function jA(){this.c=this.b=null},
jB:function jB(){this.b=null}},T={d3:function d3(){},ee:function ee(){},j_:function j_(){var _=this
_.y=_.d=_.c=_.b=_.a=null},j0:function j0(a){var _=this
_.a=a
_.e=_.d=_.b=null},j1:function j1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},G={
nv:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="testCanvas",f=null,e="controls",d="modifiers",c={},b=V.oM("Test 032"),a=W.lG()
a.className="pageLargeCanvas"
a.id=g
b.a.appendChild(a)
u=[P.h]
b.dN(H.f(["The inspection test for shapes loaders. ","For generated shapes see test002. ","Note: Some shapes will take time to load."],u))
b.iP(H.f(["controls","shapes","scalars"],u))
b.dN(H.f(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(g)
if(t==null)H.t(P.q("Failed to find an element with the identifier, testCanvas."))
s=E.oR(t,!0,!0,!0,!1)
c.a=!0
r=E.h1(f)
b=new U.cI()
b.bM(U.as)
b.bj(b.gh7(),b.ghM())
b.e=null
b.f=V.dW()
b.r=0
q=s.r
p=new U.ep()
o=U.lJ()
o.scN(0,!0)
o.scC(6.283185307179586)
o.scE(0)
o.sa7(0,0)
o.scD(100)
o.sW(0)
o.sco(0.5)
p.b=o
n=p.gaP()
o.gB().h(0,n)
o=U.lJ()
o.scN(0,!0)
o.scC(6.283185307179586)
o.scE(0)
o.sa7(0,0)
o.scD(100)
o.sW(0)
o.sco(0.5)
p.c=o
o.gB().h(0,n)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
m=new X.aL(!1,!1,!1)
l=p.d
p.d=m
o=[X.aL]
n=new D.F(d,l,m,o)
n.b=!0
p.R(n)
n=p.f
if(n!==!1){p.f=!1
n=new D.F("invertX",n,!1,[P.M])
n.b=!0
p.R(n)}n=p.r
if(n!==!0){p.r=!0
n=new D.F("invertY",n,!0,[P.M])
n.b=!0
p.R(n)}p.b7(q)
b.h(0,p)
q=s.r
p=new U.eo()
n=U.lJ()
n.scN(0,!0)
n.scC(6.283185307179586)
n.scE(0)
n.sa7(0,0)
n.scD(100)
n.sW(0)
n.sco(0.2)
p.b=n
n.gB().h(0,p.gaP())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
m=new X.aL(!0,!1,!1)
l=p.c
p.c=m
n=new D.F(d,l,m,o)
n.b=!0
p.R(n)
p.b7(q)
b.h(0,p)
q=s.r
p=new U.eq()
p.c=0.01
p.e=p.d=0
m=new X.aL(!1,!1,!1)
p.b=m
o=new D.F(d,f,m,o)
o.b=!0
p.R(o)
p.b7(q)
b.h(0,p)
r.sba(b)
k=new O.dJ()
k.b=V.n1()
k.c=new V.X(0.2,0.3,0.4,1)
k.d=new V.X(0.1,0.2,0.3,1)
k.e=V.dz(0.7)
k.f=V.dz(0.3)
k.r=V.dz(0.5)
k.x=V.dz(0.5)
k.y=new V.X(1,1,1,1)
k.z=V.dz(0.8)
k.r1=k.k4=k.k3=k.k2=k.k1=k.id=k.go=k.fy=k.fx=k.fr=k.dy=k.dx=k.db=k.cy=k.cx=k.ch=k.Q=!1
k.r2=1
k.sad(0.4)
b=new M.dG()
b.a=!0
b.sfq(0,O.lH(E.a2))
b.e.bj(b.ghh(),b.ghj())
b.y=b.x=b.r=b.f=null
j=X.oe(f)
i=new X.e1()
i.c=1.0471975511965976
i.d=0.1
i.e=2000
i.sba(f)
q=i.c
if(!(Math.abs(q-1.0471975511965976)<$.N().a)){i.c=1.0471975511965976
q=new D.F("fov",q,1.0471975511965976,[P.G])
q.b=!0
i.aN(q)}q=i.d
if(!(Math.abs(q-0.1)<$.N().a)){i.d=0.1
q=new D.F("near",q,0.1,[P.G])
q.b=!0
i.aN(q)}q=i.e
if(!(Math.abs(q-2000)<$.N().a)){i.e=2000
q=new D.F("far",q,2000,[P.G])
q.b=!0
i.aN(q)}q=b.b
if(q!==i){if(q!=null)q.gB().Z(0,b.gaw())
l=b.b
b.b=i
i.gB().h(0,b.gaw())
q=new D.F("camera",l,b.b,[X.dy])
q.b=!0
b.aA(q)}q=b.c
if(q!==j){if(q!=null)q.gB().Z(0,b.gaw())
l=b.c
b.c=j
j.gB().h(0,b.gaw())
q=new D.F("target",l,b.c,[X.ec])
q.b=!0
b.aA(q)}b.sb1(f)
b.sb1(k)
b.e.h(0,r)
q=b.b
h=V.my(0,0,5)
p=new U.dA()
p.a=h
q.sba(p)
q=s.d
if(q!==b){if(q!=null)q.gB().Z(0,s.gcW())
s.d=b
b.gB().h(0,s.gcW())
s.cX()}b=new V.fJ(e)
u=u.getElementById(e)
b.c=u
if(u==null)H.t("Failed to find controls for CheckGroup")
b.sfp(H.f([],[W.cC]))
b.a6(0,"Material",new G.kW(c,r),!0)
b.t(0,"Filled",new G.kX(k))
b.a6(0,"Wire Frame",new G.kY(k),!0)
b.t(0,"Vertices",new G.l8(k))
b.t(0,"Normals",new G.lj(k))
b.t(0,"Binormals",new G.ll(k))
b.t(0,"Tangentals",new G.lm(k))
b.t(0,"Face Centers",new G.ln(k))
b.t(0,"Face Normals",new G.lo(k))
b.t(0,"Face Binormals",new G.lp(k))
b.t(0,"Face Tangentals",new G.lq(k))
b.t(0,"Colors",new G.kZ(k))
b.t(0,"Textures2D",new G.l_(k))
b.t(0,"TexturesCube",new G.l0(k))
b.t(0,"Weight",new G.l1(k))
b.a6(0,"Axis",new G.l2(k),!0)
b.t(0,"AABB",new G.l3(k))
c=new G.lt(c,s,r,new G.lr(),k)
b=V.mG("shapes")
b.a6(0,"Cube",new G.l4(c),!0)
b.t(0,"Low Poly Tree",new G.l5(c))
b.t(0,"Low Poly Wolf",new G.l6(c))
b.t(0,"Plant",new G.l7(c))
c=V.mG("scalars")
c.t(0,"0.01",new G.l9(k))
c.t(0,"0.02",new G.la(k))
c.t(0,"0.04",new G.lb(k))
c.t(0,"0.06",new G.lc(k))
c.t(0,"0.08",new G.ld(k))
c.t(0,"0.1",new G.le(k))
c.t(0,"0.2",new G.lf(k))
c.a6(0,"0.4",new G.lg(k),!0)
c.t(0,"0.6",new G.lh(k))
c.t(0,"0.8",new G.li(k))
c.t(0,"1.0",new G.lk(k))
V.qf(s)},
kW:function kW(a,b){this.a=a
this.b=b},
kX:function kX(a){this.a=a},
kY:function kY(a){this.a=a},
l8:function l8(a){this.a=a},
lj:function lj(a){this.a=a},
ll:function ll(a){this.a=a},
lm:function lm(a){this.a=a},
ln:function ln(a){this.a=a},
lo:function lo(a){this.a=a},
lp:function lp(a){this.a=a},
lq:function lq(a){this.a=a},
kZ:function kZ(a){this.a=a},
l_:function l_(a){this.a=a},
l0:function l0(a){this.a=a},
l1:function l1(a){this.a=a},
l2:function l2(a){this.a=a},
l3:function l3(a){this.a=a},
lr:function lr(){},
ls:function ls(a,b){this.a=a
this.b=b},
lt:function lt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
l4:function l4(a){this.a=a},
l5:function l5(a){this.a=a},
l6:function l6(a){this.a=a},
l7:function l7(a){this.a=a},
l9:function l9(a){this.a=a},
la:function la(a){this.a=a},
lb:function lb(a){this.a=a},
lc:function lc(a){this.a=a},
ld:function ld(a){this.a=a},
le:function le(a){this.a=a},
lf:function lf(a){this.a=a},
lg:function lg(a){this.a=a},
lh:function lh(a){this.a=a},
li:function li(a){this.a=a},
lk:function lk(a){this.a=a}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,G]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.lO.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gH:function(a){return H.cY(a)},
j:function(a){return"Instance of '"+H.j(H.cZ(a))+"'"}}
J.hE.prototype={
j:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iM:1}
J.dN.prototype={
v:function(a,b){return null==b},
j:function(a){return"null"},
gH:function(a){return 0},
$iA:1}
J.dO.prototype={
gH:function(a){return 0},
j:function(a){return String(a)}}
J.ip.prototype={}
J.ci.prototype={}
J.bL.prototype={
j:function(a){var u=a[$.nD()]
if(u==null)return this.eV(a)
return"JavaScript function for "+H.j(J.aJ(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ilK:1}
J.bh.prototype={
h:function(a,b){H.B(b,H.r(a,0))
if(!!a.fixed$length)H.t(P.H("add"))
a.push(b)},
Z:function(a,b){var u
if(!!a.fixed$length)H.t(P.H("remove"))
for(u=0;u<a.length;++u)if(J.S(a[u],b)){a.splice(u,1)
return!0}return!1},
q:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.d(P.c3(a))}},
w:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.j(a[u]))
return t.join(b)},
jp:function(a){return this.w(a,"")},
ji:function(a,b,c,d){var u,t,s
H.B(b,d)
H.l(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.d(P.c3(a))}return t},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
eT:function(a,b,c){if(b<0||b>a.length)throw H.d(P.au(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.au(c,b,a.length,"end",null))
if(b===c)return H.f([],[H.r(a,0)])
return H.f(a.slice(b,c),[H.r(a,0)])},
gaJ:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.oh())},
bL:function(a,b){var u=H.r(a,0)
H.l(b,{func:1,ret:P.n,args:[u,u]})
if(!!a.immutable$list)H.t(P.H("sort"))
H.e8(a,0,a.length-1,b,u)},
ar:function(a,b){var u
for(u=0;u<a.length;++u)if(J.S(a[u],b))return!0
return!1},
j:function(a){return P.lL(a,"[","]")},
ga3:function(a){return new J.ax(a,a.length,[H.r(a,0)])},
gH:function(a){return H.cY(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.H("set length"))
if(b<0)throw H.d(P.au(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.bT(a,b))
if(b>=a.length||b<0)throw H.d(H.bT(a,b))
return a[b]},
k:function(a,b,c){H.B(c,H.r(a,0))
if(!!a.immutable$list)H.t(P.H("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bT(a,b))
a[b]=c},
$im:1,
$ib:1}
J.lN.prototype={}
J.ax.prototype={
gT:function(a){return this.d},
D:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.z(s))
u=t.c
if(u>=r){t.sd0(null)
return!1}t.sd0(s[u]);++t.c
return!0},
sd0:function(a){this.d=H.B(a,H.r(this,0))},
$iaO:1}
J.cM.prototype={
iZ:function(a,b){var u
H.nw(b)
if(typeof b!=="number")throw H.d(H.aM(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbA(b)
if(this.gbA(a)===u)return 0
if(this.gbA(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbA:function(a){return a===0?1/a<0:a<0},
jZ:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.H(""+a+".toInt()"))},
by:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.H(""+a+".floor()"))},
av:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.H(""+a+".round()"))},
eH:function(a,b){var u
if(b>20)throw H.d(P.au(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbA(a))return"-"+u
return u},
bf:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.au(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.S(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.H("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.c(t,1)
u=t[1]
if(3>=s)return H.c(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.m("0",r)},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bh:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eX:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dF(a,b)},
ab:function(a,b){return(a|0)===a?a/b|0:this.dF(a,b)},
dF:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.H("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
aT:function(a,b){var u
if(a>0)u=this.dE(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
im:function(a,b){if(b<0)throw H.d(H.aM(b))
return this.dE(a,b)},
dE:function(a,b){return b>31?0:a>>>b},
$iG:1,
$ial:1}
J.dM.prototype={$in:1}
J.dL.prototype={}
J.bK.prototype={
S:function(a,b){if(b<0)throw H.d(H.bT(a,b))
if(b>=a.length)H.t(H.bT(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.d(H.bT(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.d(P.lE(b,null,null))
return a+b},
b_:function(a,b,c,d){var u,t
c=P.bO(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a9:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.au(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
ah:function(a,b){return this.a9(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.aM(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.C()
if(b<0)throw H.d(P.iw(b,null))
if(b>c)throw H.d(P.iw(b,null))
if(c>a.length)throw H.d(P.iw(c,null))
return a.substring(b,c)},
af:function(a,b){return this.u(a,b,null)},
eI:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.F(r,0)===133){u=J.oj(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.S(r,t)===133?J.ok(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
m:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.G)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
al:function(a,b){var u=b-a.length
if(u<=0)return a
return this.m(" ",u)+a},
jD:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.m(c,u)},
bz:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.au(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
cw:function(a,b){return this.bz(a,b,0)},
jq:function(a,b){var u=a.length,t=b.length
if(u+t>u)u-=t
return a.lastIndexOf(b,u)},
j:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$imB:1,
$ih:1}
H.ab.prototype={
gl:function(a){return this.a.length},
i:function(a,b){return C.b.S(this.a,b)},
$ad7:function(){return[P.n]},
$ay:function(){return[P.n]},
$am:function(){return[P.n]},
$ab:function(){return[P.n]}}
H.h_.prototype={}
H.dR.prototype={
gT:function(a){return this.d},
D:function(){var u,t=this,s=t.a,r=J.dp(s),q=r.gl(s)
if(t.b!==q)throw H.d(P.c3(s))
u=t.c
if(u>=q){t.sb4(null)
return!1}t.sb4(r.I(s,u));++t.c
return!0},
sb4:function(a){this.d=H.B(a,H.r(this,0))},
$iaO:1}
H.hU.prototype={
ga3:function(a){return new H.hV(J.bZ(this.a),this.b,this.$ti)},
gl:function(a){return J.aD(this.a)},
I:function(a,b){return this.b.$1(J.lB(this.a,b))},
$am:function(a,b){return[b]}}
H.hV.prototype={
D:function(){var u=this,t=u.b
if(t.D()){u.sb4(u.c.$1(t.gT(t)))
return!0}u.sb4(null)
return!1},
gT:function(a){return this.a},
sb4:function(a){this.a=H.B(a,H.r(this,1))},
$aaO:function(a,b){return[b]}}
H.jF.prototype={
ga3:function(a){return new H.jG(J.bZ(this.a),this.b,this.$ti)}}
H.jG.prototype={
D:function(){var u,t
for(u=this.a,t=this.b;u.D();)if(H.D(t.$1(u.gT(u))))return!0
return!1},
gT:function(a){var u=this.a
return u.gT(u)}}
H.c5.prototype={}
H.d7.prototype={
k:function(a,b,c){H.B(c,H.aU(this,"d7",0))
throw H.d(P.H("Cannot modify an unmodifiable list"))}}
H.ek.prototype={}
H.fN.prototype={
j:function(a){return P.lQ(this)},
k:function(a,b,c){H.B(b,H.r(this,0))
H.B(c,H.r(this,1))
return H.o9()},
$ix:1}
H.fO.prototype={
gl:function(a){return this.a},
bx:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bx(0,b))return
return this.dj(b)},
dj:function(a){return this.b[H.a0(a)]},
q:function(a,b){var u,t,s,r,q=this,p=H.r(q,1)
H.l(b,{func:1,ret:-1,args:[H.r(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.B(q.dj(r),p))}}}
H.j9.prototype={
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
H.ik.prototype={
j:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hH.prototype={
j:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.j(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.j(t.a)+")"
return s+r+"' on '"+u+"' ("+H.j(t.a)+")"}}
H.jl.prototype={
j:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.cG.prototype={}
H.ly.prototype={
$1:function(a){if(!!J.R(a).$ibH)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:22}
H.f1.prototype={
j:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iae:1}
H.cD.prototype={
j:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ilK:1,
gk7:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iX.prototype={}
H.iP.prototype={
j:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cx(u)+"'"}}
H.cz.prototype={
v:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cz))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.cY(this.a)
else u=typeof t!=="object"?J.dr(t):H.cY(t)
return(u^H.cY(this.b))>>>0},
j:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.j(H.cZ(u))+"'")}}
H.jb.prototype={
j:function(a){return this.a}}
H.fH.prototype={
j:function(a){return this.a}}
H.iD.prototype={
j:function(a){return"RuntimeError: "+H.j(this.a)}}
H.jI.prototype={
j:function(a){return"Assertion failed: "+P.dH(this.a)}}
H.Z.prototype={
gl:function(a){return this.a},
gaz:function(a){return new H.hL(this,[H.r(this,0)])},
bx:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.df(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.df(t,b)}else return s.jm(b)},
jm:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cA(u.bV(t,u.cz(a)),a)>=0},
dM:function(a,b){J.lC(H.o(b,"$ix",this.$ti,"$ax"),new H.hG(this))},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bm(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bm(r,b)
s=t==null?null:t.b
return s}else return q.jn(b)},
jn:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bV(r,s.cz(a))
t=s.cA(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.B(b,H.r(s,0))
H.B(c,H.r(s,1))
if(typeof b==="string"){u=s.b
s.d2(u==null?s.b=s.c4():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.d2(t==null?s.c=s.c4():t,b,c)}else s.jo(b,c)},
jo:function(a,b){var u,t,s,r,q=this
H.B(a,H.r(q,0))
H.B(b,H.r(q,1))
u=q.d
if(u==null)u=q.d=q.c4()
t=q.cz(a)
s=q.bV(u,t)
if(s==null)q.ce(u,t,[q.c5(a,b)])
else{r=q.cA(s,a)
if(r>=0)s[r].b=b
else s.push(q.c5(a,b))}},
q:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.r(s,0),H.r(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.d(P.c3(s))
u=u.c}},
d2:function(a,b,c){var u,t=this
H.B(b,H.r(t,0))
H.B(c,H.r(t,1))
u=t.bm(a,b)
if(u==null)t.ce(a,b,t.c5(b,c))
else u.b=c},
c5:function(a,b){var u=this,t=new H.hK(H.B(a,H.r(u,0)),H.B(b,H.r(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
cz:function(a){return J.dr(a)&0x3ffffff},
cA:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.S(a[t].a,b))return t
return-1},
j:function(a){return P.lQ(this)},
bm:function(a,b){return a[b]},
bV:function(a,b){return a[b]},
ce:function(a,b,c){a[b]=c},
fz:function(a,b){delete a[b]},
df:function(a,b){return this.bm(a,b)!=null},
c4:function(){var u="<non-identifier-key>",t=Object.create(null)
this.ce(t,u,t)
this.fz(t,u)
return t}}
H.hG.prototype={
$2:function(a,b){var u=this.a
u.k(0,H.B(a,H.r(u,0)),H.B(b,H.r(u,1)))},
$S:function(){var u=this.a
return{func:1,ret:P.A,args:[H.r(u,0),H.r(u,1)]}}}
H.hK.prototype={}
H.hL.prototype={
gl:function(a){return this.a.a},
ga3:function(a){var u=this.a,t=new H.hM(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hM.prototype={
gT:function(a){return this.d},
D:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.c3(t))
else{t=u.c
if(t==null){u.sdi(null)
return!1}else{u.sdi(t.a)
u.c=u.c.c
return!0}}},
sdi:function(a){this.d=H.B(a,H.r(this,0))},
$iaO:1}
H.kS.prototype={
$1:function(a){return this.a(a)},
$S:22}
H.kT.prototype={
$2:function(a,b){return this.a(a,b)},
$S:44}
H.kU.prototype={
$1:function(a){return this.a(H.a0(a))},
$S:31}
H.hF.prototype={
j:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
gh3:function(){var u=this,t=u.c
if(t!=null)return t
t=u.b
return u.c=H.ms(u.a,t.multiline,!t.ignoreCase,t.unicode,t.dotAll,!0)},
jh:function(a){var u=this.b.exec(a)
if(u==null)return
return new H.eL(u)},
fE:function(a,b){var u,t=this.gh3()
t.lastIndex=b
u=t.exec(a)
if(u==null)return
return new H.eL(u)},
$imB:1,
$ioJ:1}
H.eL.prototype={$ie5:1}
H.jH.prototype={
gT:function(a){return this.d},
D:function(){var u,t,s,r,q=this,p=q.b
if(p==null)return!1
u=q.c
if(u<=p.length){t=q.a
s=t.fE(p,u)
if(s!=null){q.d=s
p=s.b
u=p.index
r=u+p[0].length
if(u===r){if(t.b.unicode){p=q.c
u=p+1
t=q.b
if(u<t.length){p=J.cu(t).S(t,p)
if(p>=55296&&p<=56319){p=C.b.S(t,u)
p=p>=56320&&p<=57343}else p=!1}else p=!1}else p=!1
r=(p?r+1:r)+1}q.c=r
return!0}}q.b=q.d=null
return!1},
$iaO:1,
$aaO:function(){return[P.e5]}}
H.cS.prototype={$icS:1}
H.bM.prototype={$ibM:1,$ioT:1}
H.dY.prototype={
gl:function(a){return a.length},
$iL:1,
$aL:function(){}}
H.cT.prototype={
i:function(a,b){H.bt(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pY(c)
H.bt(b,a,a.length)
a[b]=c},
$ac5:function(){return[P.G]},
$ay:function(){return[P.G]},
$im:1,
$am:function(){return[P.G]},
$ib:1,
$ab:function(){return[P.G]}}
H.dZ.prototype={
k:function(a,b,c){H.ak(c)
H.bt(b,a,a.length)
a[b]=c},
$ac5:function(){return[P.n]},
$ay:function(){return[P.n]},
$im:1,
$am:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]}}
H.ie.prototype={
i:function(a,b){H.bt(b,a,a.length)
return a[b]}}
H.ig.prototype={
i:function(a,b){H.bt(b,a,a.length)
return a[b]}}
H.ih.prototype={
i:function(a,b){H.bt(b,a,a.length)
return a[b]}}
H.ii.prototype={
i:function(a,b){H.bt(b,a,a.length)
return a[b]}}
H.ij.prototype={
i:function(a,b){H.bt(b,a,a.length)
return a[b]}}
H.e_.prototype={
gl:function(a){return a.length},
i:function(a,b){H.bt(b,a,a.length)
return a[b]},
$iqE:1}
H.cU.prototype={
gl:function(a){return a.length},
i:function(a,b){H.bt(b,a,a.length)
return a[b]},
$icU:1,
$iP:1}
H.da.prototype={}
H.db.prototype={}
H.dc.prototype={}
H.dd.prototype={}
P.jM.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:25}
P.jL.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:46}
P.jN.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jO.prototype={
$0:function(){this.a.$0()},
$S:0}
P.f8.prototype={
f7:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cs(new P.kp(this,b),0),a)
else throw H.d(P.H("`setTimeout()` not found."))},
f8:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cs(new P.ko(this,a,Date.now(),b),0),a)
else throw H.d(P.H("Periodic timer."))},
$ibo:1}
P.kp.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:7}
P.ko.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.eX(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.jJ.prototype={
cm:function(a,b){var u,t,s=this,r=H.r(s,0)
H.dn(b,{futureOr:1,type:r})
u=!s.b||H.dm(b,"$iaa",s.$ti,"$aaa")
t=s.a
if(u)t.d3(b)
else t.dc(H.B(b,r))},
bw:function(a,b){var u=this.a
if(this.b)u.bl(a,b)
else u.d4(a,b)}}
P.kz.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:33}
P.kA.prototype={
$2:function(a,b){this.a.$2(1,new H.cG(a,H.e(b,"$iae")))},
$S:36}
P.kM.prototype={
$2:function(a,b){this.a(H.ak(a),b)},
$S:37}
P.aa.prototype={}
P.ev.prototype={
bw:function(a,b){var u
if(a==null)a=new P.cW()
u=this.a
if(u.a!==0)throw H.d(P.mO("Future already completed"))
u.d4(a,b)},
dT:function(a){return this.bw(a,null)}}
P.jK.prototype={
cm:function(a,b){var u
H.dn(b,{futureOr:1,type:H.r(this,0)})
u=this.a
if(u.a!==0)throw H.d(P.mO("Future already completed"))
u.d3(b)}}
P.b9.prototype={
js:function(a){if((this.c&15)!==6)return!0
return this.b.b.cJ(H.l(this.d,{func:1,ret:P.M,args:[P.O]}),a.a,P.M,P.O)},
jk:function(a){var u=this.e,t=P.O,s={futureOr:1,type:H.r(this,1)},r=this.b.b
if(H.fp(u,{func:1,args:[P.O,P.ae]}))return H.dn(r.jV(u,a.a,a.b,null,t,P.ae),s)
else return H.dn(r.cJ(H.l(u,{func:1,args:[P.O]}),a.a,null,t),s)}}
P.aq.prototype={
cK:function(a,b,c){var u,t,s,r=H.r(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.T
if(u!==C.f){H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pM(b,u)}t=new P.aq($.T,[c])
s=b==null?1:3
this.bO(new P.b9(t,s,a,b,[r,c]))
return t},
eG:function(a,b){return this.cK(a,null,b)},
dG:function(a,b,c){var u,t=H.r(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[t]})
u=new P.aq($.T,[c])
this.bO(new P.b9(u,(b==null?1:3)|16,a,b,[t,c]))
return u},
bO:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.e(t.c,"$ib9")
t.c=a}else{if(s===2){u=H.e(t.c,"$iaq")
s=u.a
if(s<4){u.bO(a)
return}t.a=s
t.c=u.c}P.cp(null,null,t.b,H.l(new P.jW(t,a),{func:1,ret:-1}))}},
dz:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.e(p.c,"$ib9")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.e(p.c,"$iaq")
u=q.a
if(u<4){q.dz(a)
return}p.a=u
p.c=q.c}o.a=p.br(a)
P.cp(null,null,p.b,H.l(new P.k3(o,p),{func:1,ret:-1}))}},
bq:function(){var u=H.e(this.c,"$ib9")
this.c=null
return this.br(u)},
br:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
da:function(a){var u,t,s=this,r=H.r(s,0)
H.dn(a,{futureOr:1,type:r})
u=s.$ti
if(H.dm(a,"$iaa",u,"$aaa"))if(H.dm(a,"$iaq",u,null))P.jZ(a,s)
else P.n3(a,s)
else{t=s.bq()
H.B(a,r)
s.a=4
s.c=a
P.ck(s,t)}},
dc:function(a){var u,t=this
H.B(a,H.r(t,0))
u=t.bq()
t.a=4
t.c=a
P.ck(t,u)},
bl:function(a,b){var u,t=this
H.e(b,"$iae")
u=t.bq()
t.a=8
t.c=new P.aE(a,b)
P.ck(t,u)},
d3:function(a){var u=this
H.dn(a,{futureOr:1,type:H.r(u,0)})
if(H.dm(a,"$iaa",u.$ti,"$aaa")){u.fo(a)
return}u.a=1
P.cp(null,null,u.b,H.l(new P.jY(u,a),{func:1,ret:-1}))},
fo:function(a){var u=this,t=u.$ti
H.o(a,"$iaa",t,"$aaa")
if(H.dm(a,"$iaq",t,null)){if(a.a===8){u.a=1
P.cp(null,null,u.b,H.l(new P.k2(u,a),{func:1,ret:-1}))}else P.jZ(a,u)
return}P.n3(a,u)},
d4:function(a,b){this.a=1
P.cp(null,null,this.b,H.l(new P.jX(this,a,b),{func:1,ret:-1}))},
$iaa:1}
P.jW.prototype={
$0:function(){P.ck(this.a,this.b)},
$S:0}
P.k3.prototype={
$0:function(){P.ck(this.b,this.a.a)},
$S:0}
P.k_.prototype={
$1:function(a){var u=this.a
u.a=0
u.da(a)},
$S:25}
P.k0.prototype={
$2:function(a,b){H.e(b,"$iae")
this.a.bl(a,b)},
$1:function(a){return this.$2(a,null)},
$S:42}
P.k1.prototype={
$0:function(){this.a.bl(this.b,this.c)},
$S:0}
P.jY.prototype={
$0:function(){var u=this.a
u.dc(H.B(this.b,H.r(u,0)))},
$S:0}
P.k2.prototype={
$0:function(){P.jZ(this.b,this.a)},
$S:0}
P.jX.prototype={
$0:function(){this.a.bl(this.b,this.c)},
$S:0}
P.k6.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eF(H.l(s.d,{func:1}),null)}catch(r){u=H.am(r)
t=H.bV(r)
if(o.d){s=H.e(o.a.a.c,"$iaE").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.e(o.a.a.c,"$iaE")
else q.b=new P.aE(u,t)
q.a=!0
return}if(!!J.R(n).$iaa){if(n instanceof P.aq&&n.a>=4){if(n.a===8){s=o.b
s.b=H.e(n.c,"$iaE")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.eG(new P.k7(p),null)
s.a=!1}},
$S:7}
P.k7.prototype={
$1:function(a){return this.a},
$S:45}
P.k5.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.r(s,0)
q=H.B(n.c,r)
p=H.r(s,1)
n.a.b=s.b.b.cJ(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.am(o)
t=H.bV(o)
s=n.a
s.b=new P.aE(u,t)
s.a=!0}},
$S:7}
P.k4.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.e(m.a.a.c,"$iaE")
r=m.c
if(H.D(r.js(u))&&r.e!=null){q=m.b
q.b=r.jk(u)
q.a=!1}}catch(p){t=H.am(p)
s=H.bV(p)
r=H.e(m.a.a.c,"$iaE")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.aE(t,s)
n.a=!0}},
$S:7}
P.et.prototype={}
P.iS.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.aq($.T,[P.n])
r.a=0
u=H.r(s,0)
t=H.l(new P.iU(r,s),{func:1,ret:-1,args:[u]})
H.l(new P.iV(r,q),{func:1,ret:-1})
W.a8(s.a,s.b,t,!1,u)
return q}}
P.iU.prototype={
$1:function(a){H.B(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.A,args:[H.r(this.b,0)]}}}
P.iV.prototype={
$0:function(){this.b.da(this.a.a)},
$S:0}
P.d1.prototype={}
P.iT.prototype={}
P.kk.prototype={}
P.bo.prototype={}
P.aE.prototype={
j:function(a){return H.j(this.a)},
$ibH:1}
P.ky.prototype={$iqS:1}
P.kK.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cW():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.j(0)
throw u},
$S:0}
P.kd.prototype={
jW:function(a){var u,t,s,r=null
H.l(a,{func:1,ret:-1})
try{if(C.f===$.T){a.$0()
return}P.nc(r,r,this,a,-1)}catch(s){u=H.am(s)
t=H.bV(s)
P.kJ(r,r,this,u,H.e(t,"$iae"))}},
jX:function(a,b,c){var u,t,s,r=null
H.l(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.f===$.T){a.$1(b)
return}P.nd(r,r,this,a,b,-1,c)}catch(s){u=H.am(s)
t=H.bV(s)
P.kJ(r,r,this,u,H.e(t,"$iae"))}},
iY:function(a,b){return new P.kf(this,H.l(a,{func:1,ret:b}),b)},
ci:function(a){return new P.ke(this,H.l(a,{func:1,ret:-1}))},
dP:function(a,b){return new P.kg(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
eF:function(a,b){H.l(a,{func:1,ret:b})
if($.T===C.f)return a.$0()
return P.nc(null,null,this,a,b)},
cJ:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.T===C.f)return a.$1(b)
return P.nd(null,null,this,a,b,c,d)},
jV:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.T===C.f)return a.$2(b,c)
return P.pN(null,null,this,a,b,c,d,e,f)},
eC:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}}
P.kf.prototype={
$0:function(){return this.a.eF(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.ke.prototype={
$0:function(){return this.a.jW(this.b)},
$S:7}
P.kg.prototype={
$1:function(a){var u=this.c
return this.a.jX(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.kb.prototype={
ga3:function(a){var u=this,t=new P.eJ(u,u.r,u.$ti)
t.c=u.e
return t},
gl:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.B(b,H.r(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d8(u==null?s.b=P.m_():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d8(t==null?s.c=P.m_():t,b)}else return s.fc(0,b)},
fc:function(a,b){var u,t,s,r=this
H.B(b,H.r(r,0))
u=r.d
if(u==null)u=r.d=P.m_()
t=r.dd(b)
s=u[t]
if(s==null)u[t]=[r.bR(b)]
else{if(r.dk(s,b)>=0)return!1
s.push(r.bR(b))}return!0},
Z:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.i5(this.c,b)
else return this.i4(0,b)},
i4:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.fS(r,b)
t=s.dk(u,b)
if(t<0)return!1
s.dH(u.splice(t,1)[0])
return!0},
d8:function(a,b){H.B(b,H.r(this,0))
if(H.e(a[b],"$id9")!=null)return!1
a[b]=this.bR(b)
return!0},
i5:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$id9")
if(u==null)return!1
this.dH(u)
delete a[b]
return!0},
dr:function(){this.r=1073741823&this.r+1},
bR:function(a){var u,t=this,s=new P.d9(H.B(a,H.r(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dr()
return s},
dH:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dr()},
dd:function(a){return J.dr(a)&1073741823},
fS:function(a,b){return a[this.dd(b)]},
dk:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.S(a[t].a,b))return t
return-1}}
P.d9.prototype={}
P.eJ.prototype={
gT:function(a){return this.d},
D:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.c3(t))
else{t=u.c
if(t==null){u.sd9(null)
return!1}else{u.sd9(H.B(t.a,H.r(u,0)))
u.c=u.c.b
return!0}}},
sd9:function(a){this.d=H.B(a,H.r(this,0))},
$iaO:1}
P.hN.prototype={
$2:function(a,b){this.a.k(0,H.B(a,this.b),H.B(b,this.c))},
$S:11}
P.hO.prototype={$im:1,$ib:1}
P.y.prototype={
ga3:function(a){return new H.dR(a,this.gl(a),[H.cv(this,a,"y",0)])},
I:function(a,b){return this.i(a,b)},
k0:function(a,b){var u,t=this,s=H.f([],[H.cv(t,a,"y",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.k(s,u,t.i(a,u))
return s},
k_:function(a){return this.k0(a,!0)},
je:function(a,b,c,d){var u
H.B(d,H.cv(this,a,"y",0))
P.bO(b,c,this.gl(a))
for(u=b;u<c;++u)this.k(a,u,d)},
j:function(a){return P.lL(a,"[","]")}}
P.hR.prototype={}
P.hS.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.j(a)
t.a=u+": "
t.a+=H.j(b)},
$S:11}
P.ay.prototype={
q:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.cv(s,a,"ay",0),H.cv(s,a,"ay",1)]})
for(u=J.bZ(s.gaz(a));u.D();){t=u.gT(u)
b.$2(t,s.i(a,t))}},
gl:function(a){return J.aD(this.gaz(a))},
j:function(a){return P.lQ(a)},
$ix:1}
P.kq.prototype={
k:function(a,b,c){H.B(b,H.r(this,0))
H.B(c,H.r(this,1))
throw H.d(P.H("Cannot modify unmodifiable map"))}}
P.hT.prototype={
i:function(a,b){return J.Q(this.a,b)},
k:function(a,b,c){J.lz(this.a,H.B(b,H.r(this,0)),H.B(c,H.r(this,1)))},
q:function(a,b){J.lC(this.a,H.l(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gl:function(a){return J.aD(this.a)},
j:function(a){return J.aJ(this.a)},
$ix:1}
P.el.prototype={}
P.kh.prototype={
j:function(a){return P.lL(this,"{","}")},
I:function(a,b){var u,t,s,r=this
P.mH(b,"index")
for(u=P.p5(r,r.r,H.r(r,0)),t=0;u.D();){s=u.d
if(b===t)return s;++t}throw H.d(P.a1(b,r,"index",null,t))},
$im:1,
$imN:1}
P.eK.prototype={}
P.fe.prototype={}
P.fD.prototype={
jt:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bO(a0,a1,b.length)
u=$.nS()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.F(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kR(C.b.F(b,n))
j=H.kR(C.b.F(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.c(u,i)
h=u[i]
if(h>=0){i=C.b.S("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ac("")
g=r.a+=C.b.u(b,s,t)
r.a=g+H.e3(m)
s=n
continue}}throw H.d(P.a6("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.u(b,s,a1)
f=g.length
if(q>=0)P.mi(b,p,a1,q,o,f)
else{e=C.d.bh(f-1,4)+1
if(e===1)throw H.d(P.a6(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.b_(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.mi(b,p,a1,q,o,d)
else{e=C.d.bh(d,4)
if(e===1)throw H.d(P.a6(c,b,a1))
if(e>1)b=C.b.b_(b,a1,a1,e===2?"==":"=")}return b},
$ac2:function(){return[[P.b,P.n],P.h]}}
P.fE.prototype={
$ac4:function(){return[[P.b,P.n],P.h]}}
P.c2.prototype={}
P.c4.prototype={}
P.h0.prototype={
$ac2:function(){return[P.h,[P.b,P.n]]}}
P.jt.prototype={
gjc:function(){return C.H}}
P.jv.prototype={
cn:function(a){var u,t,s=P.bO(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kx(u)
if(t.fR(a,0,s)!==s)t.dL(J.nY(a,s-1),0)
return new Uint8Array(u.subarray(0,H.pn(0,t.b,u.length)))},
$ac4:function(){return[P.h,[P.b,P.n]]}}
P.kx.prototype={
dL:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fR:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.S(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.F(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dL(r,C.b.F(a,p)))s=p}else if(r<=2047){q=n.b
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
P.ju.prototype={
cn:function(a){var u,t,s,r,q,p,o,n,m
H.o(a,"$ib",[P.n],"$ab")
u=P.oW(!1,a,0,null)
if(u!=null)return u
t=P.bO(0,null,J.aD(a))
s=P.nf(a,0,t)
if(s>0){r=P.d2(a,0,s)
if(s===t)return r
q=new P.ac(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ac("")
n=new P.kw(!1,q)
n.c=o
n.j0(a,p,t)
if(n.e>0){H.t(P.a6("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.e3(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$ac4:function(){return[[P.b,P.n],P.h]}}
P.kw.prototype={
j0:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.o(a,"$ib",[P.n],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.dp(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.i(a,p)
if(typeof o!=="number")return o.ao()
if((o&192)!==128){n=P.a6(h+C.d.bf(o,16),a,p)
throw H.d(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.c(C.t,n)
if(u<=C.t[n]){n=P.a6("Overlong encoding of 0x"+C.d.bf(u,16),a,p-s-1)
throw H.d(n)}if(u>1114111){n=P.a6("Character outside valid Unicode range: 0x"+C.d.bf(u,16),a,p-s-1)
throw H.d(n)}if(!i.c||u!==65279)q.a+=H.e3(u)
i.c=!1}for(n=p<c;n;){m=P.nf(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.d2(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.i(a,l)
if(typeof o!=="number")return o.C()
if(o<0){j=P.a6("Negative UTF-8 code unit: -0x"+C.d.bf(-o,16),a,k-1)
throw H.d(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a6(h+C.d.bf(o,16),a,k-1)
throw H.d(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.M.prototype={}
P.aK.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.aK&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.d.aT(u,30))&1073741823},
j:function(a){var u=this,t=P.oa(H.oE(u)),s=P.dB(H.oC(u)),r=P.dB(H.oy(u)),q=P.dB(H.oz(u)),p=P.dB(H.oB(u)),o=P.dB(H.oD(u)),n=P.ob(H.oA(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.G.prototype={}
P.bG.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.bG&&this.a===b.a},
gH:function(a){return C.d.gH(this.a)},
j:function(a){var u,t,s,r=new P.fZ(),q=this.a
if(q<0)return"-"+new P.bG(0-q).j(0)
u=r.$1(C.d.ab(q,6e7)%60)
t=r.$1(C.d.ab(q,1e6)%60)
s=new P.fY().$1(q%1e6)
return""+C.d.ab(q,36e8)+":"+H.j(u)+":"+H.j(t)+"."+H.j(s)}}
P.fY.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:28}
P.fZ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:28}
P.bH.prototype={}
P.fx.prototype={
j:function(a){return"Assertion failed"}}
P.cW.prototype={
j:function(a){return"Throw of null."}}
P.aV.prototype={
gbT:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbS:function(){return""},
j:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbT()+o+u
if(!q.a)return t
s=q.gbS()
r=P.dH(q.b)
return t+s+": "+r}}
P.ca.prototype={
gbT:function(){return"RangeError"},
gbS:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.j(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.j(s)
else if(t>s)u=": Not in range "+H.j(s)+".."+H.j(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.j(s)}return u}}
P.hf.prototype={
gbT:function(){return"RangeError"},
gbS:function(){var u,t=H.ak(this.b)
if(typeof t!=="number")return t.C()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.j(u)},
gl:function(a){return this.f}}
P.jm.prototype={
j:function(a){return"Unsupported operation: "+this.a}}
P.jj.prototype={
j:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.eb.prototype={
j:function(a){return"Bad state: "+this.a}}
P.fM.prototype={
j:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dH(u)+"."}}
P.io.prototype={
j:function(a){return"Out of Memory"},
$ibH:1}
P.ea.prototype={
j:function(a){return"Stack Overflow"},
$ibH:1}
P.fT.prototype={
j:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eC.prototype={
j:function(a){return"Exception: "+this.a}}
P.ha.prototype={
j:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=i!=null&&""!==i?"FormatException: "+H.j(i):"FormatException",g=this.c,f=this.b
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
for(q=g;q<o;++q){p=C.b.S(f,q)
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
return h+l+j+k+"\n"+C.b.m(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.j(g)+")"):h}}
P.n.prototype={}
P.m.prototype={
gl:function(a){var u,t=this.ga3(this)
for(u=0;t.D();)++u
return u},
I:function(a,b){var u,t,s
P.mH(b,"index")
for(u=this.ga3(this),t=0;u.D();){s=u.gT(u)
if(b===t)return s;++t}throw H.d(P.a1(b,this,"index",null,t))},
j:function(a){return P.og(this,"(",")")}}
P.aO.prototype={}
P.b.prototype={$im:1}
P.x.prototype={}
P.A.prototype={
gH:function(a){return P.O.prototype.gH.call(this,this)},
j:function(a){return"null"}}
P.al.prototype={}
P.O.prototype={constructor:P.O,$iO:1,
v:function(a,b){return this===b},
gH:function(a){return H.cY(this)},
j:function(a){return"Instance of '"+H.j(H.cZ(this))+"'"},
toString:function(){return this.j(this)}}
P.e5.prototype={}
P.ae.prototype={}
P.h.prototype={$imB:1}
P.ac.prototype={
gl:function(a){return this.a.length},
j:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iqt:1}
P.jr.prototype={
$2:function(a,b){var u,t,s,r=P.h
H.o(a,"$ix",[r,r],"$ax")
H.a0(b)
u=J.cu(b).cw(b,"=")
if(u===-1){if(b!=="")J.lz(a,P.m3(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.u(b,0,u)
s=C.b.af(b,u+1)
r=this.a
J.lz(a,P.m3(t,0,t.length,r,!0),P.m3(s,0,s.length,r,!0))}return a},
$S:49}
P.jo.prototype={
$2:function(a,b){throw H.d(P.a6("Illegal IPv4 address, "+a,this.a,b))},
$S:53}
P.jp.prototype={
$2:function(a,b){throw H.d(P.a6("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:57}
P.jq.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.bW(C.b.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.C()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:59}
P.cl.prototype={
geN:function(){return this.b},
gcv:function(a){var u=this.c
if(u==null)return""
if(C.b.ah(u,"["))return C.b.u(u,1,u.length-1)
return u},
gbC:function(a){var u=this.d
if(u==null)return P.n5(this.a)
return u},
gcH:function(a){var u=this.f
return u==null?"":u},
gee:function(){var u=this.r
return u==null?"":u},
cI:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.o(b,"$ix",[P.h,null],"$ax")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.ah(p,"/"))p="/"+p
n=P.m1(null,0,0,b)
return new P.cl(u,s,q,r,p,n,m.r)},
gaZ:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.h
s.si3(new P.el(P.mW(u==null?"":u),[t,t]))}return s.Q},
gef:function(){return this.c!=null},
gei:function(){return this.f!=null},
geg:function(){return this.r!=null},
j:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.j(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.j(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.j(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.R(b).$ilW)if(s.a==b.gbK())if(s.c!=null===b.gef())if(s.b==b.geN())if(s.gcv(s)==b.gcv(b))if(s.gbC(s)==b.gbC(b))if(s.e===b.gex(b)){u=s.f
t=u==null
if(!t===b.gei()){if(t)u=""
if(u===b.gcH(b)){u=s.r
t=u==null
if(!t===b.geg()){if(t)u=""
u=u===b.gee()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gH:function(a){var u=this.z
return u==null?this.z=C.b.gH(this.j(0)):u},
si3:function(a){var u=P.h
this.Q=H.o(a,"$ix",[u,u],"$ax")},
$ilW:1,
gbK:function(){return this.a},
gex:function(a){return this.e}}
P.kr.prototype={
$1:function(a){throw H.d(P.a6("Invalid port",this.a,this.b+1))},
$S:48}
P.ks.prototype={
$1:function(a){return P.kv(C.Q,a,C.h,!1)},
$S:34}
P.ku.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.j(P.kv(C.i,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.j(P.kv(C.i,b,C.h,!0))}},
$S:21}
P.kt.prototype={
$2:function(a,b){var u,t
H.a0(a)
if(b==null||typeof b==="string")this.a.$2(a,H.a0(b))
else for(u=J.bZ(H.nu(b,"$im")),t=this.a;u.D();)t.$2(a,H.a0(u.gT(u)))},
$S:32}
P.jn.prototype={
geM:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.c(o,0)
u=q.a
o=o[0]+1
t=C.b.bz(u,"?",o)
s=u.length
if(t>=0){r=P.di(u,t+1,s,C.m,!1)
s=t}else r=p
return q.c=new P.jS("data",p,p,p,P.di(u,o,s,C.v,!1),r,p)},
j:function(a){var u,t=this.b
if(0>=t.length)return H.c(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kC.prototype={
$1:function(a){return new Uint8Array(96)},
$S:35}
P.kB.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.c(u,a)
u=u[a]
J.nZ(u,0,96,b)
return u},
$S:38}
P.kD.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.F(b,s)^96
if(r>=t)return H.c(a,r)
a[r]=c}}}
P.kE.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.F(b,0),t=C.b.F(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.c(a,r)
a[r]=c}}}
P.ki.prototype={
gef:function(){return this.c>0},
geh:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.i(t)
t=u+1<t
u=t}else u=!1
return u},
gei:function(){var u=this.f
if(typeof u!=="number")return u.C()
return u<this.r},
geg:function(){return this.r<this.a.length},
gdm:function(){return this.b===4&&C.b.ah(this.a,"http")},
gdn:function(){return this.b===5&&C.b.ah(this.a,"https")},
gbK:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdm())q=t.x="http"
else if(t.gdn()){t.x="https"
q="https"}else if(q===4&&C.b.ah(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.ah(t.a,r)){t.x=r
q=r}else{q=C.b.u(t.a,0,q)
t.x=q}return q},
geN:function(){var u=this.c,t=this.b+3
return u>t?C.b.u(this.a,t,u-1):""},
gcv:function(a){var u=this.c
return u>0?C.b.u(this.a,u,this.d):""},
gbC:function(a){var u,t=this
if(t.geh()){u=t.d
if(typeof u!=="number")return u.p()
return P.bW(C.b.u(t.a,u+1,t.e),null,null)}if(t.gdm())return 80
if(t.gdn())return 443
return 0},
gex:function(a){return C.b.u(this.a,this.e,this.f)},
gcH:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.C()
return u<t?C.b.u(this.a,u+1,t):""},
gee:function(){var u=this.r,t=this.a
return u<t.length?C.b.af(t,u+1):""},
gaZ:function(){var u=this,t=u.f
if(typeof t!=="number")return t.C()
if(t>=u.r)return C.R
t=P.h
return new P.el(P.mW(u.gcH(u)),[t,t])},
cI:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.o(b,"$ix",[P.h,null],"$ax")
u=k.gbK()
t=u==="file"
s=k.c
r=s>0?C.b.u(k.a,k.b+3,s):""
q=k.geh()?k.gbC(k):j
s=k.c
if(s>0)p=C.b.u(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.u(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.ah(o,"/"))o="/"+o
m=P.m1(j,0,0,b)
n=k.r
l=n<s.length?C.b.af(s,n+1):j
return new P.cl(u,r,p,q,o,m,l)},
gH:function(a){var u=this.y
return u==null?this.y=C.b.gH(this.a):u},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.R(b).$ilW&&this.a===b.j(0)},
j:function(a){return this.a},
$ilW:1}
P.jS.prototype={}
W.w.prototype={}
W.ft.prototype={
gl:function(a){return a.length}}
W.fv.prototype={
j:function(a){return String(a)}}
W.fw.prototype={
j:function(a){return String(a)}}
W.c0.prototype={$ic0:1}
W.c1.prototype={
cO:function(a,b,c){if(c!=null)return a.getContext(b,P.pU(c))
return a.getContext(b)},
eP:function(a,b){return this.cO(a,b,null)},
$ic1:1}
W.cB.prototype={$icB:1}
W.bF.prototype={
gl:function(a){return a.length}}
W.cE.prototype={$icE:1}
W.fP.prototype={
gl:function(a){return a.length}}
W.V.prototype={$iV:1}
W.cF.prototype={
gl:function(a){return a.length}}
W.fQ.prototype={}
W.be.prototype={}
W.bf.prototype={}
W.fR.prototype={
gl:function(a){return a.length}}
W.fS.prototype={
gl:function(a){return a.length}}
W.fU.prototype={
gl:function(a){return a.length}}
W.dD.prototype={$idD:1}
W.fV.prototype={
j:function(a){return String(a)}}
W.dE.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.o(c,"$iaz",[P.al],"$aaz")
throw H.d(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[[P.az,P.al]]},
$ay:function(){return[[P.az,P.al]]},
$im:1,
$am:function(){return[[P.az,P.al]]},
$ib:1,
$ab:function(){return[[P.az,P.al]]},
$aE:function(){return[[P.az,P.al]]}}
W.dF.prototype={
j:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gaL(a))+" x "+H.j(this.gaI(a))},
v:function(a,b){var u
if(b==null)return!1
u=J.R(b)
if(!u.$iaz)return!1
return a.left===u.gbB(b)&&a.top===u.gbE(b)&&this.gaL(a)===u.gaL(b)&&this.gaI(a)===u.gaI(b)},
gH:function(a){return W.n4(C.e.gH(a.left),C.e.gH(a.top),C.e.gH(this.gaL(a)),C.e.gH(this.gaI(a)))},
gdQ:function(a){return a.bottom},
gaI:function(a){return a.height},
gbB:function(a){return a.left},
gbD:function(a){return a.right},
gbE:function(a){return a.top},
gaL:function(a){return a.width},
$iaz:1,
$aaz:function(){return[P.al]}}
W.fW.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.a0(c)
throw H.d(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[P.h]},
$ay:function(){return[P.h]},
$im:1,
$am:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aE:function(){return[P.h]}}
W.fX.prototype={
gl:function(a){return a.length}}
W.jQ.prototype={
gl:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return H.e(u[b],"$ia5")},
k:function(a,b,c){var u
H.e(c,"$ia5")
u=this.b
if(b<0||b>=u.length)return H.c(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga3:function(a){var u=this.k_(this)
return new J.ax(u,u.length,[H.r(u,0)])},
$ay:function(){return[W.a5]},
$am:function(){return[W.a5]},
$ab:function(){return[W.a5]}}
W.a5.prototype={
gcl:function(a){return new W.jQ(a,a.children)},
gdS:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.C()
if(s<0)s=-s*0
if(typeof r!=="number")return r.C()
if(r<0)r=-r*0
return new P.az(u,t,s,r,[P.al])},
j:function(a){return a.localName},
$ia5:1}
W.p.prototype={$ip:1}
W.k.prototype={
iQ:function(a,b,c,d){H.l(c,{func:1,args:[W.p]})
if(c!=null)this.fd(a,b,c,!1)},
fd:function(a,b,c,d){return a.addEventListener(b,H.cs(H.l(c,{func:1,args:[W.p]}),1),!1)},
$ik:1}
W.aN.prototype={$iaN:1}
W.cH.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$iaN")
throw H.d(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aN]},
$ay:function(){return[W.aN]},
$im:1,
$am:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$icH:1,
$aE:function(){return[W.aN]}}
W.h5.prototype={
gl:function(a){return a.length}}
W.h9.prototype={
gl:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.hc.prototype={
gl:function(a){return a.length}}
W.c6.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$iI")
throw H.d(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.I]},
$ay:function(){return[W.I]},
$im:1,
$am:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$ic6:1,
$aE:function(){return[W.I]}}
W.bg.prototype={
jC:function(a,b,c,d){return a.open(b,c,!0)},
$ibg:1}
W.hd.prototype={
$1:function(a){return H.e(a,"$ibg").responseText},
$S:40}
W.he.prototype={
$1:function(a){var u,t,s,r,q
H.e(a,"$ibn")
u=this.a
t=u.status
if(typeof t!=="number")return t.bJ()
s=t>=200&&t<300
r=t>307&&t<400
t=s||t===0||t===304||r
q=this.b
if(t)q.cm(0,u)
else q.dT(a)},
$S:43}
W.cJ.prototype={}
W.bu.prototype={$ibu:1,
gdU:function(a){return a.data}}
W.cK.prototype={$icK:1}
W.cL.prototype={$icL:1,$icC:1}
W.cC.prototype={$ia5:1,$ik:1,$iI:1}
W.bi.prototype={$ibi:1}
W.hP.prototype={
j:function(a){return String(a)}}
W.i7.prototype={
gl:function(a){return a.length}}
W.cP.prototype={$icP:1}
W.i8.prototype={
i:function(a,b){return P.bB(a.get(H.a0(b)))},
q:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bB(t.value[1]))}},
gaz:function(a){var u=H.f([],[P.h])
this.q(a,new W.i9(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.d(P.H("Not supported"))},
$aay:function(){return[P.h,null]},
$ix:1,
$ax:function(){return[P.h,null]}}
W.i9.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:12}
W.ia.prototype={
i:function(a,b){return P.bB(a.get(H.a0(b)))},
q:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bB(t.value[1]))}},
gaz:function(a){var u=H.f([],[P.h])
this.q(a,new W.ib(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.d(P.H("Not supported"))},
$aay:function(){return[P.h,null]},
$ix:1,
$ax:function(){return[P.h,null]}}
W.ib.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:12}
W.aZ.prototype={$iaZ:1}
W.ic.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$iaZ")
throw H.d(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aZ]},
$ay:function(){return[W.aZ]},
$im:1,
$am:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aE:function(){return[W.aZ]}}
W.ar.prototype={$iar:1}
W.jP.prototype={
k:function(a,b,c){var u,t
H.e(c,"$iI")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.c(t,b)
u.replaceChild(c,t[b])},
ga3:function(a){var u=this.a.childNodes
return new W.dI(u,u.length,[H.cv(C.S,u,"E",0)])},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$ay:function(){return[W.I]},
$am:function(){return[W.I]},
$ab:function(){return[W.I]}}
W.I.prototype={
jS:function(a,b){var u,t
try{u=a.parentNode
J.nW(u,b,a)}catch(t){H.am(t)}return a},
j:function(a){var u=a.nodeValue
return u==null?this.eU(a):u},
i7:function(a,b,c){return a.replaceChild(b,c)},
$iI:1}
W.cV.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$iI")
throw H.d(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.I]},
$ay:function(){return[W.I]},
$im:1,
$am:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$aE:function(){return[W.I]}}
W.b_.prototype={$ib_:1,
gl:function(a){return a.length}}
W.iq.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$ib_")
throw H.d(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.b_]},
$ay:function(){return[W.b_]},
$im:1,
$am:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aE:function(){return[W.b_]}}
W.bn.prototype={$ibn:1}
W.iB.prototype={
i:function(a,b){return P.bB(a.get(H.a0(b)))},
q:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bB(t.value[1]))}},
gaz:function(a){var u=H.f([],[P.h])
this.q(a,new W.iC(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.d(P.H("Not supported"))},
$aay:function(){return[P.h,null]},
$ix:1,
$ax:function(){return[P.h,null]}}
W.iC.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:12}
W.iE.prototype={
gl:function(a){return a.length}}
W.b1.prototype={$ib1:1}
W.iM.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$ib1")
throw H.d(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.b1]},
$ay:function(){return[W.b1]},
$im:1,
$am:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aE:function(){return[W.b1]}}
W.b2.prototype={$ib2:1}
W.iN.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$ib2")
throw H.d(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.b2]},
$ay:function(){return[W.b2]},
$im:1,
$am:function(){return[W.b2]},
$ib:1,
$ab:function(){return[W.b2]},
$aE:function(){return[W.b2]}}
W.b3.prototype={$ib3:1,
gl:function(a){return a.length}}
W.iQ.prototype={
i:function(a,b){return a.getItem(H.a0(b))},
k:function(a,b,c){a.setItem(b,c)},
q:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaz:function(a){var u=H.f([],[P.h])
this.q(a,new W.iR(u))
return u},
gl:function(a){return a.length},
$aay:function(){return[P.h,P.h]},
$ix:1,
$ax:function(){return[P.h,P.h]}}
W.iR.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:21}
W.aP.prototype={$iaP:1}
W.bz.prototype={$ibz:1}
W.b5.prototype={$ib5:1}
W.aQ.prototype={$iaQ:1}
W.iY.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$iaQ")
throw H.d(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aQ]},
$ay:function(){return[W.aQ]},
$im:1,
$am:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aE:function(){return[W.aQ]}}
W.iZ.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$ib5")
throw H.d(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.b5]},
$ay:function(){return[W.b5]},
$im:1,
$am:function(){return[W.b5]},
$ib:1,
$ab:function(){return[W.b5]},
$aE:function(){return[W.b5]}}
W.j3.prototype={
gl:function(a){return a.length}}
W.b6.prototype={$ib6:1}
W.b7.prototype={$ib7:1}
W.j6.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$ib6")
throw H.d(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.b6]},
$ay:function(){return[W.b6]},
$im:1,
$am:function(){return[W.b6]},
$ib:1,
$ab:function(){return[W.b6]},
$aE:function(){return[W.b6]}}
W.j7.prototype={
gl:function(a){return a.length}}
W.bQ.prototype={}
W.js.prototype={
j:function(a){return String(a)}}
W.jE.prototype={
gl:function(a){return a.length}}
W.bs.prototype={
gj4:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.H("deltaY is not supported"))},
gj3:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.H("deltaX is not supported"))},
$ibs:1}
W.d8.prototype={
i8:function(a,b){return a.requestAnimationFrame(H.cs(H.l(b,{func:1,ret:-1,args:[P.al]}),1))},
fC:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jR.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$iV")
throw H.d(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.V]},
$ay:function(){return[W.V]},
$im:1,
$am:function(){return[W.V]},
$ib:1,
$ab:function(){return[W.V]},
$aE:function(){return[W.V]}}
W.ex.prototype={
j:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
v:function(a,b){var u
if(b==null)return!1
u=J.R(b)
if(!u.$iaz)return!1
return a.left===u.gbB(b)&&a.top===u.gbE(b)&&a.width===u.gaL(b)&&a.height===u.gaI(b)},
gH:function(a){return W.n4(C.e.gH(a.left),C.e.gH(a.top),C.e.gH(a.width),C.e.gH(a.height))},
gaI:function(a){return a.height},
gaL:function(a){return a.width}}
W.k8.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$iaX")
throw H.d(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aX]},
$ay:function(){return[W.aX]},
$im:1,
$am:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aE:function(){return[W.aX]}}
W.eQ.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$iI")
throw H.d(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.I]},
$ay:function(){return[W.I]},
$im:1,
$am:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$aE:function(){return[W.I]}}
W.kj.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$ib3")
throw H.d(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.b3]},
$ay:function(){return[W.b3]},
$im:1,
$am:function(){return[W.b3]},
$ib:1,
$ab:function(){return[W.b3]},
$aE:function(){return[W.b3]}}
W.kn.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$iaP")
throw H.d(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aP]},
$ay:function(){return[W.aP]},
$im:1,
$am:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aE:function(){return[W.aP]}}
W.jT.prototype={}
W.lZ.prototype={}
W.jU.prototype={}
W.jV.prototype={
$1:function(a){return this.a.$1(H.e(a,"$ip"))},
$S:47}
W.E.prototype={
ga3:function(a){return new W.dI(a,this.gl(a),[H.cv(this,a,"E",0)])}}
W.dI.prototype={
D:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdl(J.Q(u.a,t))
u.c=t
return!0}u.sdl(null)
u.c=s
return!1},
gT:function(a){return this.d},
sdl:function(a){this.d=H.B(a,H.r(this,0))},
$iaO:1}
W.ew.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.de.prototype={}
W.df.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f2.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.dg.prototype={}
W.dh.prototype={}
W.f9.prototype={}
W.fa.prototype={}
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
P.kl.prototype={
ec:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
bI:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.R(a)
if(!!u.$iaK)return new Date(a.a)
if(!!u.$ioJ)throw H.d(P.jk("structured clone of RegExp"))
if(!!u.$iaN)return a
if(!!u.$ic0)return a
if(!!u.$icH)return a
if(!!u.$ibu)return a
if(!!u.$icS||!!u.$ibM||!!u.$icP)return a
if(!!u.$ix){t=q.ec(a)
s=q.b
if(t>=s.length)return H.c(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.q(a,new P.km(p,q))
return p.a}if(!!u.$ib){t=q.ec(a)
p=q.b
if(t>=p.length)return H.c(p,t)
r=p[t]
if(r!=null)return r
return q.j1(a,t)}throw H.d(P.jk("structured clone of other type"))},
j1:function(a,b){var u,t=J.dp(a),s=t.gl(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.bI(t.i(a,u)))
return r}}
P.km.prototype={
$2:function(a,b){this.a.a[a]=this.b.bI(b)},
$S:11}
P.fd.prototype={$ibu:1,
gdU:function(a){return this.a}}
P.kN.prototype={
$2:function(a,b){this.a[a]=b},
$S:11}
P.f5.prototype={}
P.h6.prototype={
gbn:function(){var u=this.b,t=H.aU(u,"y",0),s=W.a5
return new H.hU(new H.jF(u,H.l(new P.h7(),{func:1,ret:P.M,args:[t]}),[t]),H.l(new P.h8(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.e(c,"$ia5")
u=this.gbn()
J.o_(u.b.$1(J.lB(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aD(this.gbn().a)},
i:function(a,b){var u=this.gbn()
return u.b.$1(J.lB(u.a,b))},
ga3:function(a){var u=P.mv(this.gbn(),!1,W.a5)
return new J.ax(u,u.length,[H.r(u,0)])},
$ay:function(){return[W.a5]},
$am:function(){return[W.a5]},
$ab:function(){return[W.a5]}}
P.h7.prototype={
$1:function(a){return!!J.R(H.e(a,"$iI")).$ia5},
$S:52}
P.h8.prototype={
$1:function(a){return H.u(H.e(a,"$iI"),"$ia5")},
$S:30}
P.kc.prototype={
gbD:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
return H.B(u+t,H.r(this,0))},
gdQ:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
return H.B(u+t,H.r(this,0))},
j:function(a){var u=this
return"Rectangle ("+H.j(u.a)+", "+H.j(u.b)+") "+H.j(u.c)+" x "+H.j(u.d)},
v:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.R(b)
if(!!u.$iaz){t=p.a
if(t==u.gbB(b)){s=p.b
if(s==u.gbE(b)){r=p.c
if(typeof t!=="number")return t.p()
if(typeof r!=="number")return H.i(r)
q=H.r(p,0)
if(H.B(t+r,q)===u.gbD(b)){t=p.d
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.i(t)
u=H.B(s+t,q)===u.gdQ(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u,t=this,s=t.a,r=J.dr(s),q=t.b,p=J.dr(q),o=t.c
if(typeof s!=="number")return s.p()
if(typeof o!=="number")return H.i(o)
u=H.r(t,0)
o=C.d.gH(H.B(s+o,u))
s=t.d
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return H.i(s)
u=C.d.gH(H.B(q+s,u))
return P.p4(P.ka(P.ka(P.ka(P.ka(0,r),p),o),u))}}
P.az.prototype={
gbB:function(a){return this.a},
gbE:function(a){return this.b},
gaL:function(a){return this.c},
gaI:function(a){return this.d}}
P.bj.prototype={$ibj:1}
P.hJ.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.e(c,"$ibj")
throw H.d(P.H("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$ay:function(){return[P.bj]},
$im:1,
$am:function(){return[P.bj]},
$ib:1,
$ab:function(){return[P.bj]},
$aE:function(){return[P.bj]}}
P.bm.prototype={$ibm:1}
P.il.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.e(c,"$ibm")
throw H.d(P.H("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$ay:function(){return[P.bm]},
$im:1,
$am:function(){return[P.bm]},
$ib:1,
$ab:function(){return[P.bm]},
$aE:function(){return[P.bm]}}
P.is.prototype={
gl:function(a){return a.length}}
P.iW.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.a0(c)
throw H.d(P.H("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$ay:function(){return[P.h]},
$im:1,
$am:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aE:function(){return[P.h]}}
P.v.prototype={
gcl:function(a){return new P.h6(a,new W.jP(a))}}
P.bp.prototype={$ibp:1}
P.j8.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.e(c,"$ibp")
throw H.d(P.H("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$ay:function(){return[P.bp]},
$im:1,
$am:function(){return[P.bp]},
$ib:1,
$ab:function(){return[P.bp]},
$aE:function(){return[P.bp]}}
P.eH.prototype={}
P.eI.prototype={}
P.eT.prototype={}
P.eU.prototype={}
P.f3.prototype={}
P.f4.prototype={}
P.fb.prototype={}
P.fc.prototype={}
P.P.prototype={$im:1,
$am:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]},
$ioT:1}
P.fz.prototype={
gl:function(a){return a.length}}
P.fA.prototype={
i:function(a,b){return P.bB(a.get(H.a0(b)))},
q:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bB(t.value[1]))}},
gaz:function(a){var u=H.f([],[P.h])
this.q(a,new P.fB(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.d(P.H("Not supported"))},
$aay:function(){return[P.h,null]},
$ix:1,
$ax:function(){return[P.h,null]}}
P.fB.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:12}
P.fC.prototype={
gl:function(a){return a.length}}
P.c_.prototype={}
P.im.prototype={
gl:function(a){return a.length}}
P.eu.prototype={}
P.du.prototype={$idu:1}
P.e4.prototype={$ie4:1}
P.cc.prototype={
jY:function(a,b,c,d,e,f,g){var u,t=J.R(g)
if(!!t.$ibu)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.pV(g))
return}if(!!t.$icK)t=!0
else t=!1
if(t){this.iu(a,b,c,d,e,f,g)
return}throw H.d(P.ds("Incorrect number or type of arguments"))},
iu:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a5:function(a,b,c){return a.uniform1f(b,c)},
bG:function(a,b,c){return a.uniform1i(b,c)},
U:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
cM:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eK:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eL:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$icc:1}
P.e7.prototype={$ie7:1}
P.ed.prototype={$ied:1}
P.ej.prototype={$iej:1}
P.iO.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a1(b,a,null,null,null))
return P.bB(a.item(b))},
k:function(a,b,c){H.e(c,"$ix")
throw H.d(P.H("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$ay:function(){return[[P.x,,,]]},
$im:1,
$am:function(){return[[P.x,,,]]},
$ib:1,
$ab:function(){return[[P.x,,,]]},
$aE:function(){return[[P.x,,,]]}}
P.f_.prototype={}
P.f0.prototype={}
O.a9.prototype={
bM:function(a){var u=this
u.sdq(H.f([],[a]))
u.sdv(null)
u.sds(null)
u.sdw(null)},
cP:function(a,b,c){var u=this,t=H.aU(u,"a9",0)
H.l(b,{func:1,ret:P.M,args:[[P.m,t]]})
t={func:1,ret:-1,args:[P.n,[P.m,t]]}
H.l(a,t)
H.l(c,t)
u.sdv(b)
u.sds(a)
u.sdw(c)},
bj:function(a,b){return this.cP(a,null,b)},
hJ:function(a){var u
H.o(a,"$im",[H.aU(this,"a9",0)],"$am")
u=this.b
if(u!=null)return u.$1(a)
return!0},
f1:function(a,b){var u
H.o(b,"$im",[H.aU(this,"a9",0)],"$am")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
ga3:function(a){var u=this.a
return new J.ax(u,u.length,[H.r(u,0)])},
I:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aU(s,"a9",0)
H.B(b,r)
r=[r]
if(H.D(s.hJ(H.f([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.f1(t,H.f([b],r))}},
sdq:function(a){this.a=H.o(a,"$ib",[H.aU(this,"a9",0)],"$ab")},
sdv:function(a){this.b=H.l(a,{func:1,ret:P.M,args:[[P.m,H.aU(this,"a9",0)]]})},
sds:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.n,[P.m,H.aU(this,"a9",0)]]})},
sdw:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.n,[P.m,H.aU(this,"a9",0)]]})},
$im:1}
O.cO.prototype={
gl:function(a){return this.a.length},
gB:function(){var u=this.b
return u==null?this.b=D.Y():u},
aM:function(){var u=this.b
if(u!=null)u.J(null)},
ga2:function(a){var u=this.a
if(u.length>0)return C.a.gaJ(u)
else return V.dW()},
eA:function(a){var u=this.a
if(a==null)C.a.h(u,V.dW())
else C.a.h(u,a)
this.aM()},
cG:function(){var u=this.a
if(u.length>0){u.pop()
this.aM()}},
sbW:function(a){this.a=H.o(a,"$ib",[V.aG],"$ab")}}
E.fF.prototype={}
E.a2.prototype={
d7:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.ax(u,u.length,[H.r(u,0)]);u.D();){t=u.d
if(t.f==null)t.d7()}},
scQ:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gB().Z(0,s.ger())
u=s.c
if(u!=null)u.gB().h(0,s.ger())
t=new D.F("shape",r,s.c,[F.ao])
t.b=!0
s.as(t)}},
sb1:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gB().Z(0,s.geu())
u=s.f
s.f=a
if(a!=null)a.gB().h(0,s.geu())
s.d7()
t=new D.F("technique",u,s.f,[O.bP])
t.b=!0
s.as(t)}},
sba:function(a){var u,t,s=this
if(!J.S(s.r,a)){u=s.r
if(u!=null)u.gB().Z(0,s.gep())
if(a!=null)a.gB().h(0,s.gep())
s.r=a
t=new D.F("mover",u,a,[U.as])
t.b=!0
s.as(t)}},
b8:function(){var u=this.d,t=u!=null?V.mL(null,u.b8()):null
for(u=this.y.a,u=new J.ax(u,u.length,[H.r(u,0)]);u.D();)t=V.mL(t,u.d.b8())
return t},
jU:function(a){var u,t,s,r,q,p=this.b8(),o=V.lS(),n=p.a,m=p.d
if(typeof n!=="number")return n.p()
u=p.b
t=p.e
if(typeof u!=="number")return u.p()
s=p.c
r=p.f
if(typeof s!=="number")return s.p()
o=o.n(0,new V.aH(n+m/2,u+t/2,s+r/2))
if(t>m)m=t
if(r>m)m=r
if(m===0)return
q=a/m
this.bu(V.mx(q,q,q).m(0,V.my(o.a,o.b,o.c)))},
bu:function(a){var u=this.c
if(u!=null)u.bu(a)
for(u=this.y.a,u=new J.ax(u,u.length,[H.r(u,0)]);u.D();)u.d.bu(a)},
an:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.b2(0,b,s):null
if(!J.S(q,s.x)){u=s.x
s.x=q
t=new D.F("matrix",u,q,[V.aG])
t.b=!0
s.as(t)}r=s.f
if(r!=null)r.an(0,b)
for(r=s.y.a,r=new J.ax(r,r.length,[H.r(r,0)]);r.D();)r.d.an(0,b)},
aK:function(a){var u,t,s,r=this
if(!H.D(r.b))return
u=a.dx
t=r.x
u.toString
if(t==null)C.a.h(u.a,u.ga2(u))
else C.a.h(u.a,t.m(0,u.ga2(u)))
u.aM()
a.eB(r.f)
u=a.dy
s=(u&&C.a).gaJ(u)
if(s!=null&&r.d!=null)s.eD(a,r)
for(u=r.y.a,u=new J.ax(u,u.length,[H.r(u,0)]);u.D();)u.d.aK(a)
a.ey()
a.dx.cG()},
as:function(a){var u=this.z
if(u!=null)u.J(a)},
Y:function(){return this.as(null)},
es:function(a){H.e(a,"$iC")
this.e=null
this.as(a)},
jA:function(){return this.es(null)},
ev:function(a){this.as(H.e(a,"$iC"))},
jB:function(){return this.ev(null)},
eq:function(a){this.as(H.e(a,"$iC"))},
jz:function(){return this.eq(null)},
eo:function(a){this.as(H.e(a,"$iC"))},
jw:function(){return this.eo(null)},
jv:function(a,b){var u,t,s,r,q,p,o
H.o(b,"$im",[E.a2],"$am")
for(u=b.length,t=this.gen(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bI()
o.sap(null)
o.saQ(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sap(H.f([],r))
o=o.a;(o&&C.a).h(o,t)}}this.Y()},
jy:function(a,b){var u,t,s,r,q
H.o(b,"$im",[E.a2],"$am")
for(u=b.length,t=this.gen(),s=0;s<b.length;b.length===u||(0,H.z)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.bI()
q.sap(null)
q.saQ(null)
q.c=null
q.d=0
r.z=q}q.Z(0,t)}}this.Y()},
j:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sf2:function(a,b){this.y=H.o(b,"$ia9",[E.a2],"$aa9")},
$icR:1}
E.ix.prototype={
eZ:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aK(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cO()
t=[V.aG]
u.sbW(H.f([],t))
u.b=null
u.gB().h(0,new E.iy(s))
s.cy=u
u=new O.cO()
u.sbW(H.f([],t))
u.b=null
u.gB().h(0,new E.iz(s))
s.db=u
u=new O.cO()
u.sbW(H.f([],t))
u.b=null
u.gB().h(0,new E.iA(s))
s.dx=u
s.sit(H.f([],[O.bP]))
u=s.dy;(u&&C.a).h(u,null)
s.sij(new H.Z([P.h,A.d_]))},
gjQ:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga2(s)
u=t.db
u=t.z=s.m(0,u.ga2(u))
s=u}return s},
gez:function(){var u,t=this,s=t.ch
if(s==null){s=t.gjQ()
u=t.dx
u=t.ch=s.m(0,u.ga2(u))
s=u}return s},
geO:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.ga2(s)
u=t.dx
u=t.cx=s.m(0,u.ga2(u))
s=u}return s},
eB:function(a){var u=this.dy,t=a==null?(u&&C.a).gaJ(u):a;(u&&C.a).h(u,t)},
ey:function(){var u=this.dy
if(u.length>1)u.pop()},
dO:function(a){var u=a.b
if(u.length===0)throw H.d(P.q("May not cache a shader with no name."))
if(this.fr.bx(0,u))throw H.d(P.q('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)},
sit:function(a){this.dy=H.o(a,"$ib",[O.bP],"$ab")},
sij:function(a){this.fr=H.o(a,"$ix",[P.h,A.d_],"$ax")}}
E.iy.prototype={
$1:function(a){var u
H.e(a,"$iC")
u=this.a
u.ch=u.z=null},
$S:14}
E.iz.prototype={
$1:function(a){var u
H.e(a,"$iC")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:14}
E.iA.prototype={
$1:function(a){var u
H.e(a,"$iC")
u=this.a
u.cx=u.ch=null},
$S:14}
E.ef.prototype={
cY:function(a){H.e(a,"$iC")
this.eE()},
cX:function(){return this.cY(null)},
gjj:function(){var u,t=this,s=Date.now(),r=C.d.ab(P.mm(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aK(s,!1)
return u/r},
dC:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.m()
if(typeof r!=="number")return H.i(r)
u=C.e.by(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.m()
t=C.e.by(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.mR(C.o,s.gjT())}},
eE:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.j2(this),{func:1,ret:-1,args:[P.al]})
C.y.fC(u)
C.y.i8(u,W.nk(t,P.al))}},
jR:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dC()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aK(r,!1)
s.y=P.mm(r-s.r.a).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aM()
r=s.db
C.a.sl(r.a,0)
r.aM()
r=s.dx
C.a.sl(r.a,0)
r.aM()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aK(p.e)}}catch(q){u=H.am(q)
t=H.bV(q)
P.fr("Error: "+H.j(u))
P.fr("Stack: "+H.j(t))
throw H.d(u)}}}
E.j2.prototype={
$1:function(a){var u
H.nw(a)
u=this.a
if(u.ch){u.ch=!1
u.jR()}},
$S:29}
Z.er.prototype={$iql:1}
Z.dv.prototype={
aF:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.am(s)
t=P.q('Failed to bind buffer attribute "'+r.a.j(0)+'": '+H.j(u))
throw H.d(t)}},
j:function(a){var u=this
return"["+u.a.j(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.j(u.e)+"]"}}
Z.es.prototype={$iqm:1}
Z.bE.prototype={
aj:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aF:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aF(a)},
eJ:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aK:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
ew:function(a){this.aF(a)
this.aK(a)
this.eJ(a)},
j:function(a){var u,t,s,r,q=[P.h],p=H.f([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(p,u[s].j(0))
r=H.f([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aJ(q[s]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.w(p,", ")+"\nAttrs:   "+C.a.w(r,", ")},
sfT:function(a){this.b=H.o(a,"$ib",[Z.bJ],"$ab")},
$ioQ:1}
Z.dw.prototype={
sh0:function(a){this.a=H.o(a,"$ix",[P.h,Z.bE],"$ax")},
$ioQ:1}
Z.bJ.prototype={
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.j(H.cZ(this.c))+"'")+"]"}}
Z.br.prototype={
gcR:function(a){var u=this.a,t=(u&$.bc().a)!==0?3:0
if((u&$.bb().a)!==0)t+=3
if((u&$.ba().a)!==0)t+=3
if((u&$.bD().a)!==0)t+=2
if((u&$.bY().a)!==0)t+=3
if((u&$.bX().a)!==0)t+=3
if((u&$.dq().a)!==0)t+=4
if((u&$.cy().a)!==0)++t
return(u&$.bC().a)!==0?t+4:t},
iU:function(a){var u,t=$.bc(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bb()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ba()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bD()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bY()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bX()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dq()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cy()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bC()
if((s&t.a)!==0)if(u===a)return t
return $.nR()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.br))return!1
return this.a===b.a},
j:function(a){var u=H.f([],[P.h]),t=this.a
if((t&$.bc().a)!==0)C.a.h(u,"Pos")
if((t&$.bb().a)!==0)C.a.h(u,"Norm")
if((t&$.ba().a)!==0)C.a.h(u,"Binm")
if((t&$.bD().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bY().a)!==0)C.a.h(u,"TxtCube")
if((t&$.bX().a)!==0)C.a.h(u,"Clr3")
if((t&$.dq().a)!==0)C.a.h(u,"Clr4")
if((t&$.cy().a)!==0)C.a.h(u,"Weight")
if((t&$.bC().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.w(u,"|")}}
D.fI.prototype={}
D.bI.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.C]}
H.l(b,u)
if(this.a==null)this.sap(H.f([],[u]))
u=this.a;(u&&C.a).h(u,b)},
Z:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[D.C]})
u=s.a
u=u==null?null:C.a.ar(u,b)
if(u===!0){u=s.a
t=(u&&C.a).Z(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.ar(u,b)
if(u===!0){u=s.b
t=(u&&C.a).Z(u,b)||t}return t},
J:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.q(P.mv(u,!0,{func:1,ret:-1,args:[D.C]}),new D.h3(q))
u=r.b
if(u!=null){r.saQ(H.f([],[{func:1,ret:-1,args:[D.C]}]))
C.a.q(u,new D.h4(q))}return!0},
j9:function(){return this.J(null)},
b0:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.J(u)}}},
sap:function(a){this.a=H.o(a,"$ib",[{func:1,ret:-1,args:[D.C]}],"$ab")},
saQ:function(a){this.b=H.o(a,"$ib",[{func:1,ret:-1,args:[D.C]}],"$ab")}}
D.h3.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.C]})
u=this.a.a
u.b
a.$1(u)},
$S:23}
D.h4.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.C]})
u=this.a.a
u.b
a.$1(u)},
$S:23}
D.C.prototype={}
D.c7.prototype={}
D.c8.prototype={}
D.F.prototype={
j:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
O.kH.prototype={
au:function(a,b,c){var u=0,t=P.ai(null),s=this
var $async$au=P.aj(function(d,e){if(d===1)return P.af(e,t)
while(true)switch(u){case 0:u=2
return P.aw(s.at(H.f(a.split("\n"),[P.h]),b,!1),$async$au)
case 2:return P.ag(null,t)}})
return P.ah($async$au,t)},
at:function(a,b,c){H.o(a,"$ib",[P.h],"$ab")
return this.jO(a,b,!1)},
jO:function(a,b,c){var u=0,t=P.ai(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i
var $async$at=P.aj(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:j=0
case 3:if(!!0){u=4
break}m=j
l=a.length
if(typeof m!=="number"){s=m.C()
u=1
break}if(!(m<l)){u=4
break}r=6
u=9
return P.aw(o.a4(C.a.i(a,j),b,!1),$async$at)
case 9:r=2
u=8
break
case 6:r=5
i=q
n=H.am(i)
m=j
if(typeof m!=="number"){s=m.p()
u=1
break}throw H.d(P.q("Line "+H.j(m+1)+": "+H.j(n)))
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
case 4:case 1:return P.ag(s,t)
case 2:return P.af(q,t)}})
return P.ah($async$at,t)},
a4:function(a,b,c){return this.jM(a,b,!1)},
jM:function(a,b,c){var u=0,t=P.ai(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$a4=P.aj(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
n=J.mg(a,"#")
k=n
if(typeof k!=="number"){s=k.bJ()
u=1
break}if(k>=0)a=J.mh(a,0,n)
a=J.lD(a)
if(J.aD(a)<=0){u=1
break}m=O.ni(a)
if(J.aD(m)<1){u=1
break}case 7:switch(J.Q(m,0)){case"newmtl":u=9
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
case 9:k=J.Q(m,1)
j=O.mw()
o.c=j
o.b.k(0,k,j)
u=1
break
case 10:i=O.bA(J.Q(m,1))
o.c.r.sX(0,V.lI(i))
u=1
break
case 11:i=O.bA(J.Q(m,1))
o.c.x.sX(0,V.lI(i))
u=1
break
case 12:i=O.bA(J.Q(m,1))
o.c.z.sX(0,V.lI(i))
u=1
break
case 13:i=O.bA(J.Q(m,1))
k=i.length
if(k!==1)H.t(P.q("Shininess may only have 1 number."))
j=o.c.z
if(0>=k){s=H.c(i,0)
u=1
break}h=i[0]
j.toString
if(h==null)h=100
if(h<=0){j.aS(new A.ad(!1,j.c.b,!1))
j.cd(0)}else{j.aS(new A.ad(!0,j.c.b,!1))
j.cd(h)}u=1
break
case 14:i=O.bA(J.Q(m,1))
k=i.length
if(k!==1)H.t(P.q("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.c(i,0)
u=1
break}j.sac(0,i[0])
u=1
break
case 15:i=O.bA(J.Q(m,1))
k=i.length
if(k!==1)H.t(P.q("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.c(i,0)
u=1
break}k=i[0]
if(typeof k!=="number"){s=H.i(k)
u=1
break}j.sac(0,1-k)
u=1
break
case 16:u=23
return P.aw(o.c8(J.Q(m,1),b),$async$a4)
case 23:u=1
break
case 17:u=24
return P.aw(o.c9(J.Q(m,1),b),$async$a4)
case 24:u=1
break
case 18:u=25
return P.aw(o.ca(J.Q(m,1),b),$async$a4)
case 25:u=1
break
case 19:u=26
return P.aw(o.c7(J.Q(m,1),b),$async$a4)
case 26:u=1
break
case 20:u=27
return P.aw(o.bo(J.Q(m,1),b),$async$a4)
case 27:u=1
break
case 21:u=28
return P.aw(o.bo(J.Q(m,1),b),$async$a4)
case 28:u=1
break
case 22:u=1
break
case 8:r=2
u=6
break
case 4:r=3
f=q
l=H.am(f)
k=P.q('Line: "'+H.j(a)+'": '+H.j(l))
throw H.d(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.ag(s,t)
case 2:return P.af(q,t)}})
return P.ah($async$a4,t)},
c8:function(a,b){var u=0,t=P.ai(null),s=this,r
var $async$c8=P.aj(function(c,d){if(c===1)return P.af(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.r.sbe(s.a.b9(r))
return P.ag(null,t)}})
return P.ah($async$c8,t)},
c9:function(a,b){var u=0,t=P.ai(null),s=this,r
var $async$c9=P.aj(function(c,d){if(c===1)return P.af(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.x.sbe(s.a.b9(r))
return P.ag(null,t)}})
return P.ah($async$c9,t)},
ca:function(a,b){var u=0,t=P.ai(null),s=this,r
var $async$ca=P.aj(function(c,d){if(c===1)return P.af(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.z.sbe(s.a.b9(r))
return P.ag(null,t)}})
return P.ah($async$ca,t)},
c7:function(a,b){var u=0,t=P.ai(null),s=this,r
var $async$c7=P.aj(function(c,d){if(c===1)return P.af(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.db.sbe(s.a.b9(r))
return P.ag(null,t)}})
return P.ah($async$c7,t)},
bo:function(a,b){var u=0,t=P.ai(null),s=this,r
var $async$bo=P.aj(function(c,d){if(c===1)return P.af(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.Q.sbe(s.a.b9(r))
return P.ag(null,t)}})
return P.ah($async$bo,t)},
sc3:function(a){this.b=H.o(a,"$ix",[P.h,O.aY],"$ax")}}
O.dl.prototype={
sk6:function(a){this.b=H.o(a,"$ib",[F.J],"$ab")}}
O.kI.prototype={
gjd:function(){var u=this.Q,t=u.y.a,s=t.length
if(s===1){if(0>=s)return H.c(t,0)
return t[0]}return u},
au:function(a,b,c){var u=0,t=P.ai(null),s=this
var $async$au=P.aj(function(d,e){if(d===1)return P.af(e,t)
while(true)switch(u){case 0:u=2
return P.aw(s.at(H.f(a.split("\n"),[P.h]),b,!1),$async$au)
case 2:return P.ag(null,t)}})
return P.ah($async$au,t)},
at:function(a,b,c){H.o(a,"$ib",[P.h],"$ab")
return this.jP(a,b,!1)},
jP:function(a,b,c){var u=0,t=P.ai(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i
var $async$at=P.aj(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:j=0
case 3:if(!!0){u=4
break}m=j
l=a.length
if(typeof m!=="number"){s=m.C()
u=1
break}if(!(m<l)){u=4
break}r=6
u=9
return P.aw(o.a4(C.a.i(a,j),b,!1),$async$at)
case 9:r=2
u=8
break
case 6:r=5
i=q
n=H.am(i)
m=j
if(typeof m!=="number"){s=m.p()
u=1
break}throw H.d(P.q("Line "+H.j(m+1)+": "+H.j(n)))
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
case 4:case 1:return P.ag(s,t)
case 2:return P.af(q,t)}})
return P.ah($async$at,t)},
a4:function(a,b,c){return this.jN(a,b,!1)},
jN:function(a,b,c){var u=0,t=P.ai(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$a4=P.aj(function(d,a0){if(d===1){q=a0
u=r}while(true)switch(u){case 0:r=4
n=J.mg(a,"#")
k=n
if(typeof k!=="number"){s=k.bJ()
u=1
break}if(k>=0)a=J.mh(a,0,n)
a=J.lD(a)
if(J.aD(a)<=0){u=1
break}m=O.ni(a)
if(J.aD(m)<1){u=1
break}case 7:switch(J.Q(m,0)){case"v":u=9
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
case 9:j=O.bA(J.Q(m,1))
k=j.length
if(k<3)H.t(P.q("Positions must have at least 3 numbers."))
if(k>4)H.t(P.q("Positions must have at most than 4 numbers."))
if(k===4){if(3>=k){s=H.c(j,3)
u=1
break}i=j[3]
h=$.N()
h.toString
if(typeof i!=="number"){s=i.n()
u=1
break}if(!(Math.abs(i-1)<h.a))H.t(P.q("Currently, non-one w values in positions are not supported."))}i=o.b
if(0>=k){s=H.c(j,0)
u=1
break}h=j[0]
if(1>=k){s=H.c(j,1)
u=1
break}g=j[1]
if(2>=k){s=H.c(j,2)
u=1
break}g=[h,g,j[2]]
g=new O.dl(new V.aH(g[0],g[1],g[2]))
g.sk6(H.f([],[F.J]))
C.a.h(i,g)
u=1
break
case 10:j=O.bA(J.Q(m,1))
k=j.length
if(k<2)H.t(P.q("Textures must have at least 2 numbers."))
if(k>3)H.t(P.q("Textures must have at most than 3 numbers."))
if(k===3){if(2>=k){s=H.c(j,2)
u=1
break}i=j[2]
h=$.N()
h.toString
if(typeof i!=="number"){s=i.n()
u=1
break}if(!(Math.abs(i-0)<h.a))H.t(P.q("Currently, non-zero z values in textures are not supported."))}i=o.c
if(0>=k){s=H.c(j,0)
u=1
break}h=j[0]
if(1>=k){s=H.c(j,1)
u=1
break}h=[h,j[1]]
C.a.h(i,new V.at(h[0],h[1]))
u=1
break
case 11:j=O.bA(J.Q(m,1))
k=j.length
if(k!==3)H.t(P.q("Normals must have exactly 3 numbers."))
i=o.d
if(0>=k){s=H.c(j,0)
u=1
break}h=j[0]
if(1>=k){s=H.c(j,1)
u=1
break}g=j[1]
if(2>=k){s=H.c(j,2)
u=1
break}C.a.h(i,new V.a3(h,g,j[2]))
u=1
break
case 12:o.i2(J.Q(m,1))
u=1
break
case 13:o.i1(J.Q(m,1))
u=1
break
case 14:o.i0(J.Q(m,1))
u=1
break
case 15:u=20
return P.aw(o.bp(J.Q(m,1),b,!1),$async$a4)
case 20:u=1
break
case 16:k=J.Q(m,1)
o.x=H.e(o.e.i(0,k),"$iaY")
o.bs()
u=1
break
case 17:o.r=J.Q(m,1)
o.bs()
u=1
break
case 18:o.r=J.Q(m,1)
o.bs()
u=1
break
case 19:u=1
break
case 8:r=2
u=6
break
case 4:r=3
e=q
l=H.am(e)
k=P.q('Line: "'+H.j(a)+'": '+H.j(l))
throw H.d(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.ag(s,t)
case 2:return P.af(q,t)}})
return P.ah($async$a4,t)},
bs:function(){var u,t,s,r=this
if(r.z==null||r.y.a.c.length!==0){u=F.av()
r.y=u
u=E.h1(u)
r.z=u
r.Q.y.h(0,u)
for(u=r.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.sl(u[s].b,0)}r.z.sb1(r.x)
r.z.a=r.r},
bP:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=", was out of range [-",f=a.split("/"),e=f.length
if(0>=e)return H.c(f,0)
u=P.bW(f[0],h,h)
t=i.b.length
if(typeof u!=="number")return u.C()
if(u<-t||u>t||u===0)throw H.d(P.q("The position index, "+u+g+t+".."+t+"] or 0."))
if(u<0)u=t+u+1;--u
if(e>1){s=f[1]
if(s!=null&&s.length>0){r=P.bW(s,h,h)
q=i.c
t=q.length
if(typeof r!=="number")return r.C()
if(r<-t||r>t||r===0)throw H.d(P.q("The texture index, "+r+g+t+".."+t+"] or 0."))
if(r<0)r=t+r+1
p=r-1
if(p<0||p>=t)return H.c(q,p)
o=q[p]}else o=h}else o=h
if(e>2){s=f[2]
if(s!=null&&s.length>0){n=P.bW(s,h,h)
e=i.d
t=e.length
if(typeof n!=="number")return n.C()
if(n<-t||n>t||n===0)throw H.d(P.q("The normal index, "+n+g+t+".."+t+"] or 0."))
if(n<0)n=t+n+1
q=n-1
if(q<0||q>=t)return H.c(e,q)
m=e[q]}else m=h}else m=h
e=i.b
if(u<0||u>=e.length)return H.c(e,u)
l=e[u]
for(e=l.b,q=e.length,k=0;k<e.length;e.length===q||(0,H.z)(e),++k){j=e[k]
if(J.S(j.y,o)&&J.S(j.r,m))return j}j=F.cj(h,h,h,h,h,h,h,h,0)
j.sa7(0,l.a)
if(!J.S(j.y,o)){j.y=o
e=j.a
if(e!=null)e.Y()}j.sbb(m)
i.y.a.h(0,j)
C.a.h(l.b,j)
return j},
i2:function(a){var u,t=O.kL(a),s=H.f([],[F.J]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.c(t,u)
C.a.h(s,this.bP(t[u]))}this.y.b.iT(s)},
i1:function(a){var u,t=O.kL(a),s=H.f([],[F.J]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.c(t,u)
C.a.h(s,this.bP(t[u]))}this.y.c.iS(s)},
i0:function(a){var u,t=O.kL(a),s=H.f([],[F.J]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.c(t,u)
C.a.h(s,this.bP(t[u]))}this.y.d.iR(s)},
bp:function(a,b,c){var u=0,t=P.ai(null),s=this,r
var $async$bp=P.aj(function(d,e){if(d===1)return P.af(e,t)
while(true)switch(u){case 0:u=2
return P.aw(O.dX(b+"/"+a,s.a,!1),$async$bp)
case 2:r=e
s.e.dM(0,r)
return P.ag(null,t)}})
return P.ah($async$bp,t)},
shZ:function(a){this.b=H.o(a,"$ib",[O.dl],"$ab")},
siv:function(a){this.c=H.o(a,"$ib",[V.at],"$ab")},
sh4:function(a){this.d=H.o(a,"$ib",[V.a3],"$ab")},
sc3:function(a){this.e=H.o(a,"$ix",[P.h,O.aY],"$ax")}}
O.it.prototype={}
X.dx.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dx))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.j(this.a)}}
X.dP.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dP))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.j(this.a)}}
X.hI.prototype={
jI:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jE:function(a){this.c=a.b
this.d.Z(0,a.a)
return!1},
si_:function(a){this.d=H.o(a,"$imN",[P.n],"$amN")}}
X.dS.prototype={}
X.hQ.prototype={
b5:function(a,b){var u,t,s,r,q,p=this,o=Date.now(),n=p.x,m=b.a,l=p.Q
if(typeof m!=="number")return m.m()
u=b.b
t=p.ch
if(typeof u!=="number")return u.m()
s=n.a
if(typeof s!=="number")return s.p()
n=n.b
if(typeof n!=="number")return n.p()
r=new V.at(s+m*l,n+u*t)
t=p.a.gaW()
q=new X.bw(a,V.bN(),p.x,t,r)
q.b=!0
p.z=new P.aK(o,!1)
p.x=r
return q},
cF:function(a,b){this.r=a.a
return!1},
bd:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eQ()
if(typeof u!=="number")return u.ao()
this.r=(u&~t)>>>0
return!1},
bc:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.b5(a,b))
return!0},
jJ:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaW()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.m()
q=a.b
p=o.cy
if(typeof q!=="number")return q.m()
t=new X.cQ(new V.W(s*r,q*p),u,t)
t.b=!0
n.J(t)
return!0},
hy:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dS(c,r.a.gaW(),b)
s.b=!0
t.J(s)
r.y=new P.aK(u,!1)
r.x=V.bN()}}
X.aL.prototype={
v:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aL))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
j:function(a){var u=this.a?"Ctrl+":""
u+=H.D(this.b)?"Alt+":""
return u+(H.D(this.c)?"Shift+":"")}}
X.bw.prototype={}
X.id.prototype={
bU:function(a,b,c){var u=this,t=new P.aK(Date.now(),!1),s=u.a.gaW(),r=new X.bw(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cF:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.J(this.bU(a,b,!0))
return!0},
bd:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eQ()
if(typeof t!=="number")return t.ao()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.J(u.bU(a,b,!0))
return!0},
bc:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.bU(a,b,!1))
return!0},
jK:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaW()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.m()
r=a.b
q=p.ch
if(typeof r!=="number")return r.m()
u=new X.cQ(new V.W(t*s,r*q),u,b)
u.b=!0
o.J(u)
return!0},
gdX:function(){var u=this.b
return u==null?this.b=D.Y():u},
gbH:function(){var u=this.c
return u==null?this.c=D.Y():u},
gem:function(){var u=this.d
return u==null?this.d=D.Y():u}}
X.cQ.prototype={}
X.ir.prototype={}
X.eh.prototype={}
X.j5.prototype={
b5:function(a,b){var u,t,s,r,q=this
H.o(a,"$ib",[V.at],"$ab")
u=new P.aK(Date.now(),!1)
t=a.length>0?a[0]:V.bN()
s=q.a.gaW()
r=new X.eh(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
jH:function(a){var u
H.o(a,"$ib",[V.at],"$ab")
u=this.b
if(u==null)return!1
u.J(this.b5(a,!0))
return!0},
jF:function(a){var u
H.o(a,"$ib",[V.at],"$ab")
u=this.c
if(u==null)return!1
u.J(this.b5(a,!0))
return!0},
jG:function(a){var u
H.o(a,"$ib",[V.at],"$ab")
u=this.d
if(u==null)return!1
u.J(this.b5(a,!1))
return!0}}
X.en.prototype={
gaW:function(){var u=this.a,t=C.k.gdS(u).c
t.toString
u=C.k.gdS(u).d
u.toString
return V.mI(0,0,t,u)},
dg:function(a){var u=a.keyCode,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.dP(u,new X.aL(t,a.altKey,a.shiftKey))},
aR:function(a){var u=this.b,t=H.D(a.ctrlKey)||H.D(a.metaKey)
u.c=new X.aL(t,a.altKey,a.shiftKey)},
cf:function(a){var u=this.b,t=H.D(a.ctrlKey)||H.D(a.metaKey)
u.c=new X.aL(t,a.altKey,a.shiftKey)},
aE:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.n()
u=t.top
if(typeof r!=="number")return r.n()
return new V.at(s-q,r-u)},
b6:function(a){return new V.W(a.movementX,a.movementY)},
cb:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.f([],[V.at])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
q=C.e.av(r.pageX)
C.e.av(r.pageY)
p=o.left
C.e.av(r.pageX)
C.a.h(n,new V.at(q-p,C.e.av(r.pageY)-o.top))}return n},
aB:function(a){var u=a.buttons,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.dx(u,new X.aL(t,a.altKey,a.shiftKey))},
bX:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.n()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.n()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
hs:function(a){this.f=!0},
hg:function(a){this.f=!1},
hm:function(a){H.e(a,"$iar")
if(H.D(this.f)&&this.bX(a))a.preventDefault()},
hw:function(a){var u
H.e(a,"$ibi")
if(!H.D(this.f))return
u=this.dg(a)
this.b.jI(u)},
hu:function(a){var u
H.e(a,"$ibi")
if(!H.D(this.f))return
u=this.dg(a)
this.b.jE(u)},
hA:function(a){var u,t,s,r,q=this
H.e(a,"$iar")
u=q.a
u.focus()
q.f=!0
q.aR(a)
if(H.D(q.x)){t=q.aB(a)
s=q.b6(a)
if(q.d.cF(t,s))a.preventDefault()
return}if(H.D(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aB(a)
r=q.aE(a)
if(q.c.cF(t,r))a.preventDefault()},
hE:function(a){var u,t,s,r=this
H.e(a,"$iar")
r.aR(a)
u=r.aB(a)
if(H.D(r.x)){t=r.b6(a)
if(r.d.bd(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aE(a)
if(r.c.bd(u,s))a.preventDefault()},
hq:function(a){var u,t,s,r=this
H.e(a,"$iar")
if(!r.bX(a)){r.aR(a)
u=r.aB(a)
if(H.D(r.x)){t=r.b6(a)
if(r.d.bd(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aE(a)
if(r.c.bd(u,s))a.preventDefault()}},
hC:function(a){var u,t,s,r=this
H.e(a,"$iar")
r.aR(a)
u=r.aB(a)
if(H.D(r.x)){t=r.b6(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aE(a)
if(r.c.bc(u,s))a.preventDefault()},
ho:function(a){var u,t,s,r=this
H.e(a,"$iar")
if(!r.bX(a)){r.aR(a)
u=r.aB(a)
if(H.D(r.x)){t=r.b6(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aE(a)
if(r.c.bc(u,s))a.preventDefault()}},
hG:function(a){var u,t,s=this
H.e(a,"$ibs")
s.aR(a)
u=new V.W((a&&C.x).gj3(a),C.x.gj4(a)).A(0,180)
if(H.D(s.x)){if(s.d.jJ(u))a.preventDefault()
return}if(H.D(s.r))return
t=s.aE(a)
if(s.c.jK(u,t))a.preventDefault()},
hI:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aB(s.y)
t=s.aE(s.y)
s.d.hy(u,t,r)}},
hV:function(a){var u,t=this
H.e(a,"$ib7")
t.a.focus()
t.f=!0
t.cf(a)
u=t.cb(a)
if(t.e.jH(u))a.preventDefault()},
hR:function(a){var u
H.e(a,"$ib7")
this.cf(a)
u=this.cb(a)
if(this.e.jF(u))a.preventDefault()},
hT:function(a){var u
H.e(a,"$ib7")
this.cf(a)
u=this.cb(a)
if(this.e.jG(u))a.preventDefault()},
sfD:function(a){this.z=H.o(a,"$ib",[[P.d1,P.O]],"$ab")}}
D.dC.prototype={$ian:1,$icR:1}
D.an.prototype={$icR:1}
D.dQ.prototype={
cZ:function(a){var u=this.x
if(u!=null)u.J(a)},
du:function(a){var u=this.y
if(u!=null)u.J(a)},
hx:function(){return this.du(null)},
hL:function(a){var u,t,s
H.o(a,"$im",[D.an],"$am")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.z)(a),++t){s=a[t]
if(s==null||this.fu(s))return!1}return!0},
ha:function(a,b){var u,t,s,r,q=D.an
H.o(b,"$im",[q],"$am")
for(u=b.length,t=this.gdt(),s=0;s<b.length;b.length===u||(0,H.z)(b),++s){r=H.e(b[s],"$ian")
r.gB().h(0,t)}q=new D.c7([q])
q.b=!0
this.cZ(q)},
hP:function(a,b){var u,t,s,r,q=D.an
H.o(b,"$im",[q],"$am")
for(u=b.length,t=this.gdt(),s=0;s<b.length;b.length===u||(0,H.z)(b),++s){r=H.e(b[s],"$ian")
r.gB().Z(0,t)}q=new D.c8([q])
q.b=!0
this.cZ(q)},
fu:function(a){var u=C.a.ar(this.e,a)
return u},
sf3:function(a){this.e=H.o(a,"$ib",[D.dC],"$ab")},
shW:function(a){this.f=H.o(a,"$ib",[D.e2],"$ab")},
sf4:function(a){this.r=H.o(a,"$ib",[D.e9],"$ab")},
$am:function(){return[D.an]},
$aa9:function(){return[D.an]}}
D.e2.prototype={$ian:1,$icR:1}
D.e9.prototype={$ian:1,$icR:1}
V.a4.prototype={
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
j:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.X.prototype={
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
j:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.h2.prototype={}
V.dV.prototype={
a8:function(a,b){var u=this,t=H.f([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.G])
return t},
v:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dV))return!1
u=b.a
t=r.a
s=$.N()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=r.d
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=r.x
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
j:function(a){var u,t,s,r,q=this,p=[P.G],o=V.ct(H.f([q.a,q.d,q.r],p),3,0),n=V.ct(H.f([q.b,q.e,q.x],p),3,0),m=V.ct(H.f([q.c,q.f,q.y],p),3,0)
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
V.aG.prototype={
a8:function(a,b){var u=this,t=H.f([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.G])
return t},
ek:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=a9.f
if(typeof b0!=="number")return b0.m()
if(typeof b1!=="number")return H.i(b1)
u=a9.b
t=a9.e
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.i(t)
s=b0*b1-u*t
r=a9.r
if(typeof r!=="number")return H.i(r)
q=a9.c
if(typeof q!=="number")return q.m()
p=b0*r-q*t
o=a9.x
if(typeof o!=="number")return H.i(o)
n=a9.d
if(typeof n!=="number")return n.m()
m=b0*o-n*t
l=u*r-q*b1
k=u*o-n*b1
j=q*o-n*r
i=a9.y
h=a9.cy
if(typeof i!=="number")return i.m()
g=a9.z
f=a9.cx
if(typeof g!=="number")return g.m()
e=i*h-g*f
d=a9.db
c=a9.Q
if(typeof c!=="number")return c.m()
b=i*d-c*f
a=a9.dx
a0=a9.ch
if(typeof a0!=="number")return a0.m()
a1=i*a-a0*f
a2=g*d-c*h
a3=g*a-a0*h
a4=c*a-a0*d
a5=s*a4-p*a3+m*a2+l*a1-k*b+j*e
if(Math.abs(a5-0)<$.N().a)return V.dW()
a6=1/a5
a7=-t
a8=-f
return V.bl((b1*a4-r*a3+o*a2)*a6,(-u*a4+q*a3-n*a2)*a6,(h*j-d*k+a*l)*a6,(-g*j+c*k-a0*l)*a6,(a7*a4+r*a1-o*b)*a6,(b0*a4-q*a1+n*b)*a6,(a8*j+d*m-a*p)*a6,(i*j-c*m+a0*p)*a6,(t*a3-b1*a1+o*e)*a6,(-b0*a3+u*a1-n*e)*a6,(f*k-h*m+a*s)*a6,(-i*k+g*m-a0*s)*a6,(a7*a2+b1*b-r*e)*a6,(b0*a2-u*b+q*e)*a6,(a8*l+h*p-d*s)*a6,(i*l-g*p+c*s)*a6)},
m:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=b3.a
if(typeof b0!=="number")return b0.m()
if(typeof b1!=="number")return H.i(b1)
u=a9.b
t=b3.e
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.i(t)
s=a9.c
r=b3.y
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.i(r)
q=a9.d
p=b3.cx
if(typeof q!=="number")return q.m()
o=b3.b
if(typeof o!=="number")return H.i(o)
n=b3.f
if(typeof n!=="number")return H.i(n)
m=b3.z
if(typeof m!=="number")return H.i(m)
l=b3.cy
k=b3.c
if(typeof k!=="number")return H.i(k)
j=b3.r
if(typeof j!=="number")return H.i(j)
i=b3.Q
if(typeof i!=="number")return H.i(i)
h=b3.db
g=b3.d
if(typeof g!=="number")return H.i(g)
f=b3.x
if(typeof f!=="number")return H.i(f)
e=b3.ch
if(typeof e!=="number")return H.i(e)
d=b3.dx
c=a9.e
if(typeof c!=="number")return c.m()
b=a9.f
if(typeof b!=="number")return b.m()
a=a9.r
if(typeof a!=="number")return a.m()
a0=a9.x
if(typeof a0!=="number")return a0.m()
a1=a9.y
if(typeof a1!=="number")return a1.m()
a2=a9.z
if(typeof a2!=="number")return a2.m()
a3=a9.Q
if(typeof a3!=="number")return a3.m()
a4=a9.ch
if(typeof a4!=="number")return a4.m()
a5=a9.cx
a6=a9.cy
a7=a9.db
a8=a9.dx
return V.bl(b0*b1+u*t+s*r+q*p,b0*o+u*n+s*m+q*l,b0*k+u*j+s*i+q*h,b0*g+u*f+s*e+q*d,c*b1+b*t+a*r+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,c*g+b*f+a*e+a0*d,a1*b1+a2*t+a3*r+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h,a1*g+a2*f+a3*e+a4*d,a5*b1+a6*t+a7*r+a8*p,a5*o+a6*n+a7*m+a8*l,a5*k+a6*j+a7*i+a8*h,a5*g+a6*f+a7*e+a8*d)},
cL:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.m()
if(typeof i!=="number")return H.i(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.i(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.i(r)
q=k.e
if(typeof q!=="number")return q.m()
p=k.f
if(typeof p!=="number")return p.m()
o=k.r
if(typeof o!=="number")return o.m()
n=k.y
if(typeof n!=="number")return n.m()
m=k.z
if(typeof m!=="number")return m.m()
l=k.Q
if(typeof l!=="number")return l.m()
return new V.a3(j*i+u*t+s*r,q*i+p*t+o*r,n*i+m*t+l*r)},
bF:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a,f=a.a
if(typeof g!=="number")return g.m()
if(typeof f!=="number")return H.i(f)
u=h.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.i(t)
s=h.c
r=a.c
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.i(r)
q=h.d
if(typeof q!=="number")return H.i(q)
p=h.e
if(typeof p!=="number")return p.m()
o=h.f
if(typeof o!=="number")return o.m()
n=h.r
if(typeof n!=="number")return n.m()
m=h.x
if(typeof m!=="number")return H.i(m)
l=h.y
if(typeof l!=="number")return l.m()
k=h.z
if(typeof k!=="number")return k.m()
j=h.Q
if(typeof j!=="number")return j.m()
i=h.ch
if(typeof i!=="number")return H.i(i)
return new V.aH(g*f+u*t+s*r+q,p*f+o*t+n*r+m,l*f+k*t+j*r+i)},
v:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aG))return!1
u=b.a
t=r.a
s=$.N()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=r.d
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=r.x
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.z
t=r.z
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=r.Q
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.ch
t=r.ch
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.cx-r.cx)<s))return!1
if(!(Math.abs(b.cy-r.cy)<s))return!1
if(!(Math.abs(b.db-r.db)<s))return!1
if(!(Math.abs(b.dx-r.dx)<s))return!1
return!0},
j:function(a){return this.O()},
G:function(a){var u,t,s,r,q,p=this,o=[P.G],n=V.ct(H.f([p.a,p.e,p.y,p.cx],o),3,0),m=V.ct(H.f([p.b,p.f,p.z,p.cy],o),3,0),l=V.ct(H.f([p.c,p.r,p.Q,p.db],o),3,0),k=V.ct(H.f([p.d,p.x,p.ch,p.dx],o),3,0)
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
O:function(){return this.G("")}}
V.at.prototype={
n:function(a,b){var u,t,s=this.a,r=b.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.i(r)
u=this.b
t=b.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
return new V.at(s-r,u-t)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.at))return!1
u=b.a
t=this.a
s=$.N()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
j:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.aH.prototype={
p:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.i(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.i(r)
return new V.aH(q+p,u+t,s+r)},
n:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.i(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.i(r)
return new V.aH(q-p,u-t,s-r)},
A:function(a,b){var u,t,s
if(Math.abs(b-0)<$.N().a)return V.lS()
u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
s=this.c
if(typeof s!=="number")return s.A()
return new V.aH(u/b,t/b,s/b)},
v:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aH))return!1
u=b.a
t=r.a
s=$.N()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
j:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.e6.prototype={
gag:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e6))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
j:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.cb.prototype={
v:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cb))return!1
u=b.a
t=r.a
s=$.N()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-r.d)<s))return!1
if(!(Math.abs(b.e-r.e)<s))return!1
if(!(Math.abs(b.f-r.f)<s))return!1
return!0},
j:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+", "+V.U(u.e,3,0)+", "+V.U(u.f,3,0)+"]"}}
V.W.prototype={
cB:function(a){return Math.sqrt(this.K(this))},
K:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.i(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.i(t)
return s*r+u*t},
m:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.m()
u=this.b
if(typeof u!=="number")return u.m()
return new V.W(t*b,u*b)},
A:function(a,b){var u,t
if(Math.abs(b-0)<$.N().a){u=$.mX
return u==null?$.mX=new V.W(0,0):u}u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.W(u/b,t/b)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=this.a
s=$.N()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
j:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.a3.prototype={
cB:function(a){return Math.sqrt(this.K(this))},
K:function(a){var u,t,s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.m()
if(typeof p!=="number")return H.i(p)
u=this.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.i(t)
s=this.c
r=a.c
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.i(r)
return q*p+u*t+s*r},
aG:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof q!=="number")return q.m()
if(typeof p!=="number")return H.i(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.i(t)
s=a.a
if(typeof s!=="number")return H.i(s)
r=this.a
if(typeof r!=="number")return r.m()
return new V.a3(q*p-u*t,u*s-r*p,r*t-q*s)},
p:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.i(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.i(r)
return new V.a3(q+p,u+t,s+r)},
M:function(a){var u,t,s=this.a
if(typeof s!=="number")return s.M()
u=this.b
if(typeof u!=="number")return u.M()
t=this.c
if(typeof t!=="number")return t.M()
return new V.a3(-s,-u,-t)},
A:function(a,b){var u,t,s
if(Math.abs(b-0)<$.N().a)return V.a7()
u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
s=this.c
if(typeof s!=="number")return s.A()
return new V.a3(u/b,t/b,s/b)},
el:function(){var u=this.a,t=$.N()
t.toString
if(typeof u!=="number")return H.i(u)
t=t.a
if(!(Math.abs(0-u)<t))return!1
u=this.b
if(typeof u!=="number")return H.i(u)
if(!(Math.abs(0-u)<t))return!1
u=this.c
if(typeof u!=="number")return H.i(u)
if(!(Math.abs(0-u)<t))return!1
return!0},
v:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=r.a
s=$.N()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
j:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
U.fL.prototype={
bQ:function(a){var u=V.qk(a,this.c,this.b)
return u},
gB:function(){var u=this.y
return u==null?this.y=D.Y():u},
R:function(a){var u=this.y
if(u!=null)u.J(a)},
scN:function(a,b){},
scC:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.N().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bQ(u)}s=new D.F("maximumLocation",s,t.b,[P.G])
s.b=!0
t.R(s)}},
scE:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.N().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bQ(u)}s=new D.F("minimumLocation",s,t.c,[P.G])
s.b=!0
t.R(s)}},
sa7:function(a,b){var u,t=this
b=t.bQ(b)
u=t.d
if(!(Math.abs(u-b)<$.N().a)){t.d=b
u=new D.F("location",u,b,[P.G])
u.b=!0
t.R(u)}},
scD:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.N().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.F("maximumVelocity",r,a,[P.G])
r.b=!0
s.R(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.N().a)){u.f=a
t=new D.F("velocity",t,a,[P.G])
t.b=!0
u.R(t)}},
sco:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.N().a)){this.x=a
u=new D.F("dampening",u,a,[P.G])
u.b=!0
this.R(u)}},
an:function(a,b){var u,t,s,r=this,q=r.f,p=$.N().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa7(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.N().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sW(u)}}}
U.dA.prototype={
gB:function(){var u=this.b
return u==null?this.b=D.Y():u},
b2:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dA))return!1
return J.S(this.a,b.a)},
j:function(a){return"Constant: "+this.a.G("          ")}}
U.cI.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.Y():u},
R:function(a){var u
H.e(a,"$iC")
u=this.e
if(u!=null)u.J(a)},
aa:function(){return this.R(null)},
h8:function(a,b){var u,t,s,r,q,p,o,n=U.as
H.o(b,"$im",[n],"$am")
for(u=b.length,t=this.gaP(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.gB()
o.toString
H.l(t,s)
if(o.a==null)o.sap(H.f([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c7([n])
n.b=!0
this.R(n)},
hN:function(a,b){var u,t,s,r,q=U.as
H.o(b,"$im",[q],"$am")
for(u=b.length,t=this.gaP(),s=0;s<b.length;b.length===u||(0,H.z)(b),++s){r=b[s]
if(r!=null)r.gB().Z(0,t)}q=new D.c8([q])
q.b=!0
this.R(q)},
b2:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.C()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ax(r,r.length,[H.r(r,0)]),u=null;r.D();){q=r.d
if(q!=null){t=q.b2(0,b,c)
if(t!=null)u=u==null?t:t.m(0,u)}}s.f=u==null?V.dW():u
r=s.e
if(r!=null)r.b0(0)}return s.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cI))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.S(s,r[t]))return!1}return!0},
j:function(a){return"Group"},
$am:function(){return[U.as]},
$aa9:function(){return[U.as]},
$ias:1}
U.as.prototype={}
U.eo.prototype={
gB:function(){var u=this.cy
return u==null?this.cy=D.Y():u},
R:function(a){var u
H.e(a,"$iC")
u=this.cy
if(u!=null)u.J(a)},
aa:function(){return this.R(null)},
b7:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdX().h(0,u.gbY())
u.a.c.gem().h(0,u.gc_())
u.a.c.gbH().h(0,u.gc1())
return!0},
bZ:function(a){var u=this
H.e(a,"$iC")
if(!J.S(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
c0:function(a){var u,t,s,r,q,p,o,n=this
a=H.u(H.e(a,"$iC"),"$ibw")
if(!H.D(n.y))return
if(H.D(n.x)){u=a.d.n(0,a.y)
u=new V.W(u.a,u.b)
u=u.K(u)
t=n.r
if(typeof t!=="number")return H.i(t)
if(u<t)return
n.x=!1}if(H.D(n.d)){u=a.c
t=a.d.n(0,a.y)
u=new V.W(t.a,t.b).m(0,2).A(0,u.gag())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.m()
s=n.e
if(typeof s!=="number")return H.i(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=new V.W(s.a,s.b).m(0,2).A(0,u.gag())
s=n.b
q=r.a
if(typeof q!=="number")return q.M()
p=n.e
if(typeof p!=="number")return H.i(p)
o=n.z
if(typeof o!=="number")return H.i(o)
s.sa7(0,-q*p+o)
n.b.sW(0)
t=t.n(0,a.z)
n.Q=new V.W(t.a,t.b).m(0,2).A(0,u.gag())}n.aa()},
c2:function(a){var u,t,s,r=this
H.e(a,"$iC")
if(!H.D(r.y))return
r.y=!1
if(H.D(r.x))return
u=r.Q
if(u.K(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.m()
s=r.e
if(typeof s!=="number")return H.i(s)
u.sW(t*10*s)
r.aa()}},
b2:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.C()
if(q<p){r.ch=p
u=b.y
r.b.an(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.bl(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ias:1}
U.ep.prototype={
gB:function(){var u=this.fx
return u==null?this.fx=D.Y():u},
R:function(a){var u
H.e(a,"$iC")
u=this.fx
if(u!=null)u.J(a)},
aa:function(){return this.R(null)},
b7:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdX().h(0,s.gbY())
s.a.c.gem().h(0,s.gc_())
s.a.c.gbH().h(0,s.gc1())
u=s.a.d
t=u.f
u=t==null?u.f=D.Y():t
u.h(0,s.gfX())
u=s.a.d
t=u.d
u=t==null?u.d=D.Y():t
u.h(0,s.gfZ())
u=s.a.e
t=u.b
u=t==null?u.b=D.Y():t
u.h(0,s.giB())
u=s.a.e
t=u.d
u=t==null?u.d=D.Y():t
u.h(0,s.giz())
u=s.a.e
t=u.c
u=t==null?u.c=D.Y():t
u.h(0,s.gix())
return!0},
ax:function(a){var u=a.a,t=a.b
if(H.D(this.f)){if(typeof u!=="number")return u.M()
u=-u}if(H.D(this.r)){if(typeof t!=="number")return t.M()
t=-t}return new V.W(u,t)},
bZ:function(a){var u=this
a=H.u(H.e(a,"$iC"),"$ibw")
if(!J.S(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
c0:function(a){var u,t,s,r,q,p,o,n=this
a=H.u(H.e(a,"$iC"),"$ibw")
if(!H.D(n.cx))return
if(H.D(n.ch)){u=a.d.n(0,a.y)
u=new V.W(u.a,u.b)
u=u.K(u)
t=n.Q
if(typeof t!=="number")return H.i(t)
if(u<t)return
n.ch=!1}if(H.D(n.e)){u=a.c
t=a.d.n(0,a.y)
u=n.ax(new V.W(t.a,t.b).m(0,2).A(0,u.gag()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.M()
s=n.y
if(typeof s!=="number")return H.i(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.M()
t=n.x
if(typeof t!=="number")return H.i(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=n.ax(new V.W(s.a,s.b).m(0,2).A(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.i(p)
o=n.cy
if(typeof o!=="number")return H.i(o)
s.sa7(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.i(q)
s=n.db
if(typeof s!=="number")return H.i(s)
o.sa7(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.n(0,a.z)
n.dx=n.ax(new V.W(t.a,t.b).m(0,2).A(0,u.gag()))}n.aa()},
c2:function(a){var u,t,s,r=this
H.e(a,"$iC")
if(!H.D(r.cx))return
r.cx=!1
if(H.D(r.ch))return
u=r.dx
if(u.K(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.M()
s=r.y
if(typeof s!=="number")return H.i(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.M()
u=r.x
if(typeof u!=="number")return H.i(u)
s.sW(-t*10*u)
r.aa()}},
fY:function(a){var u=this
if(H.u(H.e(a,"$iC"),"$idS").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
h_:function(a){var u,t,s,r,q,p,o,n=this
a=H.u(H.e(a,"$iC"),"$ibw")
if(!J.S(n.d,a.x.b))return
u=a.c
t=a.d
s=t.n(0,a.y)
r=n.ax(new V.W(s.a,s.b).m(0,2).A(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.i(p)
o=n.cy
if(typeof o!=="number")return H.i(o)
s.sa7(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.i(q)
s=n.db
if(typeof s!=="number")return H.i(s)
o.sa7(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.n(0,a.z)
n.dx=n.ax(new V.W(t.a,t.b).m(0,2).A(0,u.gag()))
n.aa()},
iC:function(a){var u=this
H.e(a,"$iC")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
iA:function(a){var u,t,s,r,q,p,o,n=this
a=H.u(H.e(a,"$iC"),"$ieh")
if(!H.D(n.cx))return
if(H.D(n.ch)){u=a.d.n(0,a.y)
u=new V.W(u.a,u.b)
u=u.K(u)
t=n.Q
if(typeof t!=="number")return H.i(t)
if(u<t)return
n.ch=!1}if(H.D(n.e)){u=a.c
t=a.d.n(0,a.y)
u=n.ax(new V.W(t.a,t.b).m(0,2).A(0,u.gag()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.M()
s=n.y
if(typeof s!=="number")return H.i(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.M()
t=n.x
if(typeof t!=="number")return H.i(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=n.ax(new V.W(s.a,s.b).m(0,2).A(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.i(p)
o=n.cy
if(typeof o!=="number")return H.i(o)
s.sa7(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.i(q)
s=n.db
if(typeof s!=="number")return H.i(s)
o.sa7(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.n(0,a.z)
n.dx=n.ax(new V.W(t.a,t.b).m(0,2).A(0,u.gag()))}n.aa()},
iy:function(a){var u,t,s,r=this
H.e(a,"$iC")
if(!H.D(r.cx))return
r.cx=!1
if(H.D(r.ch))return
u=r.dx
if(u.K(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.M()
s=r.y
if(typeof s!=="number")return H.i(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.M()
u=r.x
if(typeof u!=="number")return H.i(u)
s.sW(-t*10*u)
r.aa()}},
b2:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.C()
if(q<p){r.dy=p
u=b.y
r.c.an(0,u)
r.b.an(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.bl(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.m(0,V.bl(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ias:1}
U.eq.prototype={
gB:function(){var u=this.r
return u==null?this.r=D.Y():u},
R:function(a){var u=this.r
if(u!=null)u.J(a)},
b7:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.Y():t
t=r.gh1()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.Y():s).h(0,t)
return!0},
h2:function(a){var u,t,s,r,q=this
H.e(a,"$iC")
if(!J.S(q.b,q.a.b.c))return
H.u(a,"$icQ")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.m()
r=u+t*s
if(u!==r){q.d=r
u=new D.F("zoom",u,r,[P.G])
u.b=!0
q.R(u)}},
b2:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.mx(u,u,u)}return t.f},
$ias:1}
M.dG.prototype={
aA:function(a){var u
H.e(a,"$iC")
u=this.y
if(u!=null)u.J(a)},
f5:function(){return this.aA(null)},
hi:function(a,b){var u,t,s,r,q,p,o,n=E.a2
H.o(b,"$im",[n],"$am")
for(u=b.length,t=this.gaw(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bI()
o.sap(null)
o.saQ(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sap(H.f([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c7([n])
n.b=!0
this.aA(n)},
hk:function(a,b){var u,t,s,r,q,p=E.a2
H.o(b,"$im",[p],"$am")
for(u=b.length,t=this.gaw(),s=0;s<b.length;b.length===u||(0,H.z)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.bI()
q.sap(null)
q.saQ(null)
q.c=null
q.d=0
r.z=q}q.Z(0,t)}}p=new D.c8([p])
p.b=!0
this.aA(p)},
sb1:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gB().Z(0,t.gaw())
u=t.d
t.d=a
if(a!=null)a.gB().h(0,t.gaw())
s=new D.F("technique",u,t.d,[O.bP])
s.b=!0
t.aA(s)}},
gB:function(){var u=this.y
return u==null?this.y=D.Y():u},
aK:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.eB(a1.d)
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
if(typeof s!=="number")return H.i(s)
o=C.e.av(p*s)
p=q.b
if(typeof r!=="number")return H.i(r)
n=C.e.av(p*r)
p=C.e.av(q.c*s)
a2.c=p
q=C.e.av(q.d*r)
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
i=V.bl(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.eA(i)
t=$.mC
if(t==null){t=V.lS()
q=$.n_
if(q==null)q=$.n_=new V.a3(0,1,0)
p=V.n1()
h=p.A(0,Math.sqrt(p.K(p)))
q=q.aG(h)
g=q.A(0,Math.sqrt(q.K(q)))
f=h.aG(g)
e=new V.a3(t.a,t.b,t.c)
d=g.M(0).K(e)
c=f.M(0).K(e)
b=h.M(0).K(e)
t=V.bl(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.mC=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.m(0,a)}a2.db.eA(a)
for(u=a1.e.a,u=new J.ax(u,u.length,[H.r(u,0)]);u.D();)u.d.an(0,a2)
for(u=a1.e.a,u=new J.ax(u,u.length,[H.r(u,0)]);u.D();)u.d.aK(a2)
a1.b.toString
a2.cy.cG()
a2.db.cG()
a1.c.toString
a2.ey()},
sfq:function(a,b){this.e=H.o(b,"$ia9",[E.a2],"$aa9")},
$iqr:1}
A.dt.prototype={}
A.fy.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ja:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dW:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ad.prototype={
gac:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
j:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
v:function(a,b){if(b==null)return!1
if(!(b instanceof A.ad))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.dK.prototype={}
A.dU.prototype={
eY:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.ac("")
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
A.pE(c0,u)
A.pG(c0,u)
A.pF(c0,u)
A.pI(c0,u)
A.pJ(c0,u)
A.pH(c0,u)
A.pK(c0,u)
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
b5.ej(0,s.charCodeAt(0)==0?s:s,A.pD(b5.z))
b5.Q=b5.x.i(0,"posAttr")
b5.cx=b5.x.i(0,"normAttr")
b5.ch=b5.x.i(0,"binmAttr")
b5.cy=b5.x.i(0,"txt2DAttr")
b5.db=b5.x.i(0,"txtCubeAttr")
b5.dx=b5.x.i(0,"bendAttr")
if(c0.dx)b5.id=H.u(b5.y.L(0,"invViewMat"),"$iaB")
if(t)b5.dy=H.u(b5.y.L(0,"objMat"),"$iaB")
if(r)b5.fr=H.u(b5.y.L(0,"viewObjMat"),"$iaB")
b5.fy=H.u(b5.y.L(0,"projViewObjMat"),"$iaB")
if(c0.ry)b5.k1=H.u(b5.y.L(0,"txt2DMat"),"$id6")
if(c0.x1)b5.k2=H.u(b5.y.L(0,"txtCubeMat"),"$iaB")
if(c0.x2)b5.k3=H.u(b5.y.L(0,"colorMat"),"$iaB")
b5.sfi(H.f([],[A.aB]))
t=c0.y2
if(t>0){b5.k4=H.e(b5.y.L(0,"bendMatCount"),"$iaR")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.i(0,q)
if(m==null)H.t(P.q(b7+q+b8));(s&&C.a).h(s,H.u(m,"$iaB"))}}t=c0.a
if(t.a)b5.r2=H.u(b5.y.L(0,"emissionClr"),"$ia_")
if(t.b)b5.rx=H.u(b5.y.L(0,"emissionTxt"),"$iaC")
t=c0.b
if(t.a)b5.x1=H.u(b5.y.L(0,"ambientClr"),"$ia_")
if(t.b)b5.x2=H.u(b5.y.L(0,"ambientTxt"),"$iaC")
t=c0.c
if(t.a)b5.y2=H.u(b5.y.L(0,"diffuseClr"),"$ia_")
if(t.b)b5.aH=H.u(b5.y.L(0,"diffuseTxt"),"$iaC")
t=c0.d
if(t.a)b5.dZ=H.u(b5.y.L(0,"invDiffuseClr"),"$ia_")
if(t.b)b5.e_=H.u(b5.y.L(0,"invDiffuseTxt"),"$iaC")
t=c0.e
s=t.a
if(s||t.b||!1){b5.e2=H.u(b5.y.L(0,"shininess"),"$iap")
if(s)b5.e0=H.u(b5.y.L(0,"specularClr"),"$ia_")
if(t.b)b5.e1=H.u(b5.y.L(0,"specularTxt"),"$iaC")}if(c0.f.b)b5.e3=H.u(b5.y.L(0,"bumpTxt"),"$iaC")
if(c0.cy){b5.e4=H.u(b5.y.L(0,"envSampler"),"$icg")
t=c0.r
if(t.a)b5.e5=H.u(b5.y.L(0,"reflectClr"),"$ia_")
if(t.b)b5.e6=H.u(b5.y.L(0,"reflectTxt"),"$iaC")
t=c0.x
s=t.a
if(s||t.b||!1){b5.e7=H.u(b5.y.L(0,"refraction"),"$iap")
if(s)b5.e8=H.u(b5.y.L(0,"refractClr"),"$ia_")
if(t.b)b5.e9=H.u(b5.y.L(0,"refractTxt"),"$iaC")}}t=c0.y
if(t.a)b5.ea=H.u(b5.y.L(0,"alpha"),"$iap")
if(t.b)b5.eb=H.u(b5.y.L(0,"alphaTxt"),"$iaC")
t=P.n
s=[t,A.aR]
b5.sfA(new H.Z(s))
b5.sfB(new H.Z([t,[P.b,A.ce]]))
b5.shX(new H.Z(s))
b5.shY(new H.Z([t,[P.b,A.cf]]))
b5.sio(new H.Z(s))
b5.sip(new H.Z([t,[P.b,A.ch]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.ce],l=0;l<t.length;t.length===s||(0,H.z)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.j(j)
h=H.f([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ao()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.i(0,g)
if(m==null)H.t(P.q(b7+g+b8))
H.u(m,"$ia_")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.i(0,g)
if(f==null)H.t(P.q(b7+g+b8))
H.u(f,"$ia_")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.i(0,g)
if(e==null)H.t(P.q(b7+g+b8))
H.u(e,"$ia_")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.i(0,g)
if(m==null)H.t(P.q(b7+g+b8))
H.u(m,"$ia_")
o=b5.y
g=i+"s["+n+"].color"
f=o.i(0,g)
if(f==null)H.t(P.q(b7+g+b8))
H.u(f,"$ia_")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.i(0,o)
if(e==null)H.t(P.q(b7+o+b8))
H.u(e,"$iaC")
a=e}else a=b6
C.a.h(h,new A.ce(b,c,d,m,f,a))}b5.cq.k(0,j,h)
q=b5.cp
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.t(P.q(b7+o+b8))
q.k(0,j,H.e(m,"$iaR"))}for(t=c0.Q,s=t.length,r=[A.cf],l=0;l<t.length;t.length===s||(0,H.z)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.j(j)
h=H.f([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.i(0,o)
if(m==null)H.t(P.q(b7+o+b8))
H.u(m,"$ia_")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.i(0,o)
if(f==null)H.t(P.q(b7+o+b8))
H.u(f,"$ia_")
p=b5.y
o=i+"s["+n+"].color"
e=p.i(0,o)
if(e==null)H.t(P.q(b7+o+b8))
H.u(e,"$ia_")
if(typeof j!=="number")return j.ao()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.i(0,o)
if(a0==null)H.t(P.q(b7+o+b8))
H.u(a0,"$id6")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.i(0,o)
if(a0==null)H.t(P.q(b7+o+b8))
H.u(a0,"$icg")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.i(0,o)
if(a0==null)H.t(P.q(b7+o+b8))
H.u(a0,"$icg")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.i(0,o)
if(a2==null)H.t(P.q(b7+o+b8))
H.u(a2,"$ibR")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.i(0,o)
if(a0==null)H.t(P.q(b7+o+b8))
H.u(a0,"$iap")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.i(0,o)
if(a2==null)H.t(P.q(b7+o+b8))
H.u(a2,"$iap")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.i(0,o)
if(a5==null)H.t(P.q(b7+o+b8))
H.u(a5,"$iap")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.cf(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.cs.k(0,j,h)
q=b5.cr
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.t(P.q(b7+o+b8))
q.k(0,j,H.e(m,"$iaR"))}for(t=c0.ch,s=t.length,r=[A.ch],l=0;l<t.length;t.length===s||(0,H.z)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.j(j)
h=H.f([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.i(0,o)
if(m==null)H.t(P.q(b7+o+b8))
H.u(m,"$ia_")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.i(0,o)
if(f==null)H.t(P.q(b7+o+b8))
H.u(f,"$ia_")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.i(0,o)
if(e==null)H.t(P.q(b7+o+b8))
H.u(e,"$ia_")
p=b5.y
o=i+"s["+n+"].color"
a0=p.i(0,o)
if(a0==null)H.t(P.q(b7+o+b8))
H.u(a0,"$ia_")
if(typeof j!=="number")return j.ao()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.i(0,o)
if(a2==null)H.t(P.q(b7+o+b8))
H.u(a2,"$ia_")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.i(0,o)
if(a5==null)H.t(P.q(b7+o+b8))
H.u(a5,"$ia_")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.i(0,o)
if(a9==null)H.t(P.q(b7+o+b8))
H.u(a9,"$iap")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.i(0,o)
if(b0==null)H.t(P.q(b7+o+b8))
H.u(b0,"$iap")
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
if(a2==null)H.t(P.q(b7+g+b8))
H.u(a2,"$ibR")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.i(0,g)
if(a2==null)H.t(P.q(b7+g+b8))
H.u(a2,"$iap")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.i(0,g)
if(a5==null)H.t(P.q(b7+g+b8))
H.u(a5,"$iap")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.i(0,g)
if(a2==null)H.t(P.q(b7+g+b8))
H.u(a2,"$iap")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.i(0,g)
if(a5==null)H.t(P.q(b7+g+b8))
H.u(a5,"$iap")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.i(0,g)
if(a9==null)H.t(P.q(b7+g+b8))
H.u(a9,"$iap")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.i(0,g)
if(a2==null)H.t(P.q(b7+g+b8))
H.u(a2,"$iaC")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.i(0,o)
if(a2==null)H.t(P.q(b7+o+b8))
H.u(a2,"$iaC")
a3=a2}else a3=b6
C.a.h(h,new A.ch(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.cu.k(0,j,h)
q=b5.ct
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.t(P.q(b7+o+b8))
q.k(0,j,H.e(m,"$iaR"))}}},
aq:function(a,b){if(b!=null&&b.d)a.eR(b)},
ie:function(a,b){},
sfi:function(a){this.r1=H.o(a,"$ib",[A.aB],"$ab")},
sfA:function(a){this.cp=H.o(a,"$ix",[P.n,A.aR],"$ax")},
sfB:function(a){this.cq=H.o(a,"$ix",[P.n,[P.b,A.ce]],"$ax")},
shX:function(a){this.cr=H.o(a,"$ix",[P.n,A.aR],"$ax")},
shY:function(a){this.cs=H.o(a,"$ix",[P.n,[P.b,A.cf]],"$ax")},
sio:function(a){this.ct=H.o(a,"$ix",[P.n,A.aR],"$ax")},
sip:function(a){this.cu=H.o(a,"$ix",[P.n,[P.b,A.ch]],"$ax")}}
A.aW.prototype={
j:function(a){return"dirLight"+H.j(this.a)}}
A.b0.prototype={
j:function(a){return"pointLight"+H.j(this.a)}}
A.b4.prototype={
j:function(a){return"spotLight"+H.j(this.a)}}
A.hY.prototype={
j:function(a){return this.aH}}
A.ce.prototype={}
A.cf.prototype={}
A.ch.prototype={}
A.d_.prototype={
cV:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
ej:function(a,b,c){var u,t,s,r=this
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
if(!H.D(H.no(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.t(P.q("Failed to link shader: "+H.j(s)))}r.ig()
r.ii()},
aF:function(a){a.a.useProgram(this.r)
this.x.ja()},
dh:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.D(H.no(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.q("Error compiling shader '"+H.j(s)+"': "+H.j(u)))}return s},
ig:function(){var u,t,s,r=this,q=H.f([],[A.dt]),p=r.a,o=H.ak(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.i(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dt(p,t.name,s))}r.x=new A.fy(q)},
ii:function(){var u,t,s,r=this,q=H.f([],[A.ei]),p=r.a,o=H.ak(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.i(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.j2(t.type,t.size,t.name,s))}r.y=new A.jh(q)},
aO:function(a,b,c){var u=this.a
if(a===1)return new A.aR(u,b,c)
else return A.lV(u,this.r,b,a,c)},
fv:function(a,b,c){var u=this.a
if(a===1)return new A.aC(u,b,c)
else return A.lV(u,this.r,b,a,c)},
fw:function(a,b,c){var u=this.a
if(a===1)return new A.cg(u,b,c)
else return A.lV(u,this.r,b,a,c)},
bt:function(a,b){return new P.eC(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
j2:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aO(b,c,d)
case 5121:return u.aO(b,c,d)
case 5122:return u.aO(b,c,d)
case 5123:return u.aO(b,c,d)
case 5124:return u.aO(b,c,d)
case 5125:return u.aO(b,c,d)
case 5126:return new A.ap(u.a,c,d)
case 35664:return new A.jd(u.a,c,d)
case 35665:return new A.a_(u.a,c,d)
case 35666:return new A.bR(u.a,c,d)
case 35667:return new A.je(u.a,c,d)
case 35668:return new A.jf(u.a,c,d)
case 35669:return new A.jg(u.a,c,d)
case 35674:return new A.ji(u.a,c,d)
case 35675:return new A.d6(u.a,c,d)
case 35676:return new A.aB(u.a,c,d)
case 35678:return u.fv(b,c,d)
case 35680:return u.fw(b,c,d)
case 35670:throw H.d(u.bt("BOOL",c))
case 35671:throw H.d(u.bt("BOOL_VEC2",c))
case 35672:throw H.d(u.bt("BOOL_VEC3",c))
case 35673:throw H.d(u.bt("BOOL_VEC4",c))
default:throw H.d(P.q("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.ei.prototype={}
A.jh.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
L:function(a,b){var u=this.i(0,b)
if(u==null)throw H.d(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return u},
j:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r)s+=u[r].j(0)+"\n"
return s}}
A.aR.prototype={
j:function(a){return"Uniform1i: "+H.j(this.c)}}
A.je.prototype={
j:function(a){return"Uniform2i: "+H.j(this.c)}}
A.jf.prototype={
j:function(a){return"Uniform3i: "+H.j(this.c)}}
A.jg.prototype={
j:function(a){return"Uniform4i: "+H.j(this.c)}}
A.jc.prototype={
j:function(a){return"Uniform1iv: "+H.j(this.c)},
siI:function(a){H.o(a,"$ib",[P.n],"$ab")}}
A.ap.prototype={
j:function(a){return"Uniform1f: "+H.j(this.c)}}
A.jd.prototype={
j:function(a){return"Uniform2f: "+H.j(this.c)}}
A.a_.prototype={
j:function(a){return"Uniform3f: "+H.j(this.c)}}
A.bR.prototype={
bi:function(a){return C.c.cM(this.a,this.d,a.a,a.b,a.c,a.d)},
j:function(a){return"Uniform4f: "+H.j(this.c)}}
A.ji.prototype={
j:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.d6.prototype={
ae:function(a){var u=new Float32Array(H.cn(H.o(a,"$ib",[P.G],"$ab")))
C.c.eK(this.a,this.d,!1,u)},
j:function(a){return"UniformMat3: "+H.j(this.c)}}
A.aB.prototype={
ae:function(a){var u=new Float32Array(H.cn(H.o(a,"$ib",[P.G],"$ab")))
C.c.eL(this.a,this.d,!1,u)},
j:function(a){return"UniformMat4: "+H.j(this.c)}}
A.aC.prototype={
eR:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
j:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.cg.prototype={
j:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.K.prototype={
ff:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.a7()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.el())return
return s.A(0,Math.sqrt(s.K(s)))},
fn:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.n(0,q)
r=new V.a3(r.a,r.b,r.c)
s=r.A(0,Math.sqrt(r.K(r)))
r=t.n(0,q)
r=new V.a3(r.a,r.b,r.c)
r=s.aG(r.A(0,Math.sqrt(r.K(r))))
return r.A(0,Math.sqrt(r.K(r)))},
ck:function(){var u,t=this
if(t.d!=null)return!0
u=t.ff()
if(u==null){u=t.fn()
if(u==null)return!1}t.d=u
t.a.a.Y()
return!0},
fe:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.a7()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.el())return
return s.A(0,Math.sqrt(s.K(s)))},
fm:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
k=s.b
if(typeof l!=="number")return l.n()
if(typeof k!=="number")return H.i(k)
r=l-k
if(Math.abs(r-0)<$.N().a){l=d.n(0,g)
l=new V.a3(l.a,l.b,l.c)
q=l.A(0,Math.sqrt(l.K(l)))
l=s.a
t=t.a
if(typeof l!=="number")return l.n()
if(typeof t!=="number")return H.i(t)
if(l-t<0)q=q.M(0)}else{k=u.b
if(typeof k!=="number")return H.i(k)
p=(l-k)/r
k=d.n(0,g)
l=k.a
if(typeof l!=="number")return l.m()
i=k.b
if(typeof i!=="number")return i.m()
k=k.c
if(typeof k!=="number")return k.m()
k=new V.aH(l*p,i*p,k*p).p(0,g).n(0,j)
k=new V.a3(k.a,k.b,k.c)
q=k.A(0,Math.sqrt(k.K(k)))
s=s.a
t=t.a
if(typeof s!=="number")return s.n()
if(typeof t!=="number")return H.i(t)
u=u.a
if(typeof u!=="number")return H.i(u)
if((s-t)*p+t-u<0)q=q.M(0)}l=n.d
if(l!=null){o=l.A(0,Math.sqrt(l.K(l)))
l=o.aG(q)
l=l.A(0,Math.sqrt(l.K(l))).aG(o)
q=l.A(0,Math.sqrt(l.K(l)))}return q},
cj:function(){var u,t=this
if(t.e!=null)return!0
u=t.fe()
if(u==null){u=t.fm()
if(u==null)return!1}t.e=u
t.a.a.Y()
return!0},
v:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.O()},
G:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.al(J.aJ(s.e),0)+", "+C.b.al(J.aJ(t.b.e),0)+", "+C.b.al(J.aJ(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.j(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.j(0)+"}"):u+"-}"},
O:function(){return this.G("")}}
F.aF.prototype={
v:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.O()},
G:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.al(J.aJ(u.e),0)+", "+C.b.al(J.aJ(this.b.e),0)},
O:function(){return this.G("")}}
F.by.prototype={
v:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.O()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.al(J.aJ(u.e),0)},
O:function(){return this.G("")}}
F.ao.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.Y():u},
aV:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aV()||!1
if(!t.a.aV())u=!1
s=t.e
if(s!=null)s.b0(0)
return u},
aU:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aU()||!1
if(!t.a.aU())u=!1
s=t.e
if(s!=null)s.b0(0)
return u},
bv:function(){var u=this.e
if(u!=null)++u.d
this.a.bv()
u=this.e
if(u!=null)u.b0(0)
return!0},
b8:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a.c,h=i.length
if(h<=0){i=$.mM
return i==null?$.mM=V.mK(0,0,0,0,0,0):i}i=i[0].f
u=V.mK(i.a,i.b,i.c,0,0,0)
for(t=h-1,i=this.a;t>=1;--t){s=i.c
if(t>=s.length)return H.c(s,t)
s=s[t].f
r=s.a
q=s.b
s=s.c
p=u.d
o=u.a
if(typeof r!=="number")return r.C()
if(typeof o!=="number")return H.i(o)
if(r<o){p+=o-r
n=r}else{if(r>o+p)p=r-o
n=o}m=u.e
r=u.b
if(typeof q!=="number")return q.C()
if(typeof r!=="number")return H.i(r)
if(q<r){m+=r-q
l=q}else{if(q>r+m)m=q-r
l=r}k=u.f
r=u.c
if(typeof s!=="number")return s.C()
if(typeof r!=="number")return H.i(r)
if(s<r){k+=r-s
j=s}else{if(s>r+k)k=s-r
j=r}u=new V.cb(n,l,j,p,m,k)}return u},
bu:function(a){var u,t,s
for(u=this.a.c.length-1;u>=0;--u){t=this.a.c
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.f
if(t!=null){t=a.bF(t)
if(!J.S(s.f,t)){s.f=t
t=s.a
if(t!=null){t=t.e
if(t!=null)t.J(null)}}}t=s.r
if(t!=null)s.sbb(a.cL(t))
t=s.x
if(t!=null)s.sV(a.cL(t))}},
dR:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bc()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bb().a)!==0)++s
if((t&$.ba().a)!==0)++s
if((t&$.bD().a)!==0)++s
if((t&$.bY().a)!==0)++s
if((t&$.bX().a)!==0)++s
if((t&$.dq().a)!==0)++s
if((t&$.cy().a)!==0)++s
if((t&$.bC().a)!==0)++s
r=a3.gcR(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.G
p=H.f(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.f(u,[Z.dv])
for(n=0,m=0;m<s;++m){l=a3.iU(m)
k=l.gcR(l)
C.a.k(o,m,new Z.dv(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.c(u,j)
i=u[j].jr(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.o(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cn(p)),35044)
u.bindBuffer(a0,null)
e=new Z.bE(new Z.er(a0,f),o,a3)
e.sfT(H.f([],[Z.bJ]))
if(a.b.b.length!==0){t=P.n
d=H.f([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.N()
C.a.h(d,c.e)}b=Z.lY(u,34963,H.o(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bJ(0,d.length,b))}if(a.c.b.length!==0){t=P.n
d=H.f([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.N()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.N()
C.a.h(d,c.e)}b=Z.lY(u,34963,H.o(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bJ(1,d.length,b))}if(a.d.b.length!==0){t=P.n
d=H.f([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.N()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.N()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.c(c,m)
c=c[m].c
c.a.a.N()
C.a.h(d,c.e)}b=Z.lY(u,34963,H.o(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bJ(4,d.length,b))}return e},
j:function(a){var u=this,t="   ",s=H.f([],[P.h])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.G(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.G(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.G(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.G(t))}return C.a.w(s,"\n")},
Y:function(){var u=this.e
if(u!=null)u.J(null)},
$icd:1}
F.cd.prototype={}
F.iG.prototype={
a6:function(a,b,c,d){var u,t=this.a
t.a.h(0,b)
t.a.h(0,c)
t.a.h(0,d)
u=new F.K()
t=b.a
if(t==null)H.t(P.q("May not create a face with a first vertex which is not attached to a shape."))
if(t!=c.a||t!=d.a)H.t(P.q("May not create a face with vertices attached to different shapes."))
u.a=b
C.a.h(b.d.b,u)
u.b=c
C.a.h(c.d.c,u)
u.c=d
C.a.h(d.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.Y()
return u},
iR:function(a){var u,t,s,r,q,p,o
H.o(a,"$ib",[F.J],"$ab")
u=H.f([],[F.K])
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
C.a.h(u,F.od(s,p,o))}}return u},
gl:function(a){return this.b.length},
aV:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].ck())s=!1
return s},
aU:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].cj())s=!1
return s},
j:function(a){return this.O()},
G:function(a){var u,t,s,r=H.f([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].G(a))
return C.a.w(r,"\n")},
O:function(){return this.G("")},
sfN:function(a){this.b=H.o(a,"$ib",[F.K],"$ab")}}
F.iH.prototype={
t:function(a,b,c){var u,t=this.a
t.a.h(0,b)
t.a.h(0,c)
t=new F.aF()
if(b==null)H.t(P.q("May not create a line with a null start vertex."))
if(c==null)H.t(P.q("May not create a line with a null end vertex."))
u=b.a
if(u==null)H.t(P.q("May not create a line with a start vertex which is not attached to a shape."))
if(u!=c.a)H.t(P.q("May not create a line with vertices attached to different shapes."))
t.a=b
C.a.h(b.c.b,t)
t.b=c
C.a.h(c.c.c,t)
C.a.h(t.a.a.c.b,t)
t.a.a.Y()
return t},
iS:function(a){var u,t,s,r,q,p
H.o(a,"$ib",[F.J],"$ab")
u=H.f([],[F.aF])
t=a.length
for(s=this.a,r=1;r<t;r+=2){q=r-1
p=a.length
if(q>=p)return H.c(a,q)
q=a[q]
if(r>=p)return H.c(a,r)
p=a[r]
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.ol(q,p))}return u},
gl:function(a){return this.b.length},
j:function(a){return this.O()},
G:function(a){var u,t,s=H.f([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
C.a.h(s,t[u].G(a+(""+u+". ")))}return C.a.w(s,"\n")},
O:function(){return this.G("")},
sfU:function(a){this.b=H.o(a,"$ib",[F.aF],"$ab")}}
F.iI.prototype={
iT:function(a){var u,t,s,r,q
H.o(a,"$ib",[F.J],"$ab")
u=H.f([],[F.by])
t=a.length
for(s=this.a,r=0;r<t;++r){if(r>=a.length)return H.c(a,r)
q=a[r]
s.a.h(0,q)
C.a.h(u,F.lR(q))}return u},
gl:function(a){return this.b.length},
j:function(a){return this.O()},
G:function(a){var u,t,s,r=H.f([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].G(a))
return C.a.w(r,"\n")},
O:function(){return this.G("")},
sc6:function(a){this.b=H.o(a,"$ib",[F.by],"$ab")}}
F.J.prototype={
a_:function(){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.cj(u.cx,r,o,t,s,q,p,null,n)},
sa7:function(a,b){var u
if(!J.S(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Y()}},
sbb:function(a){var u
a=a==null?null:a.A(0,Math.sqrt(a.K(a)))
if(!J.S(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Y()}},
sV:function(a){var u
a=a==null?null:a.A(0,Math.sqrt(a.K(a)))
if(!J.S(this.x,a)){this.x=a
u=this.a
if(u!=null)u.Y()}},
sX:function(a,b){var u
if(!J.S(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.Y()}},
jr:function(a){var u,t,s=this
if(a.v(0,$.bc())){u=s.f
t=[P.G]
if(u==null)return H.f([0,0,0],t)
else return H.f([u.a,u.b,u.c],t)}else if(a.v(0,$.bb())){u=s.r
t=[P.G]
if(u==null)return H.f([0,1,0],t)
else return H.f([u.a,u.b,u.c],t)}else if(a.v(0,$.ba())){u=s.x
t=[P.G]
if(u==null)return H.f([0,0,1],t)
else return H.f([u.a,u.b,u.c],t)}else if(a.v(0,$.bD())){u=s.y
t=[P.G]
if(u==null)return H.f([0,0],t)
else return H.f([u.a,u.b],t)}else if(a.v(0,$.bY())){u=s.z
t=[P.G]
if(u==null)return H.f([0,0,0],t)
else return H.f([u.a,u.b,u.c],t)}else if(a.v(0,$.bX())){u=s.Q
t=[P.G]
if(u==null)return H.f([1,1,1],t)
else return H.f([u.a,u.b,u.c],t)}else if(a.v(0,$.dq())){u=s.Q
t=[P.G]
if(u==null)return H.f([1,1,1,1],t)
else return H.f([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.cy()))return H.f([s.ch],[P.G])
else if(a.v(0,$.bC())){u=H.f([-1,-1,-1,-1],[P.G])
return u}else return H.f([],[P.G])},
ck:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.a7()
t.d.q(0,new F.jD(s))
s=s.a
t.r=s.A(0,Math.sqrt(s.K(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.b0(0)}return!0},
cj:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.a7()
t.d.q(0,new F.jC(s))
s=s.a
t.x=s.A(0,Math.sqrt(s.K(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.b0(0)}return!0},
ed:function(a){var u,t,s,r=this.c.b.length
for(u=0;u<r;++u){t=this.c.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.b
t.a.a.N()
t=t.e
a.a.a.N()
if(t==a.e)return s}return},
jg:function(a){var u=this.ed(a)
if(u!=null)return u
return a.ed(this)},
v:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.O()},
G:function(a){var u,t,s=this,r="-",q=H.f([],[P.h])
C.a.h(q,C.b.al(J.aJ(s.e),0))
u=s.f
if(u!=null)C.a.h(q,u.j(0))
else C.a.h(q,r)
u=s.r
if(u!=null)C.a.h(q,u.j(0))
else C.a.h(q,r)
u=s.x
if(u!=null)C.a.h(q,u.j(0))
else C.a.h(q,r)
u=s.y
if(u!=null)C.a.h(q,u.j(0))
else C.a.h(q,r)
u=s.z
if(u!=null)C.a.h(q,u.j(0))
else C.a.h(q,r)
u=s.Q
if(u!=null)C.a.h(q,u.j(0))
else C.a.h(q,r)
C.a.h(q,V.U(s.ch,3,0))
C.a.h(q,r)
t=C.a.w(q,", ")
return a+"{"+t+"}"},
O:function(){return this.G("")}}
F.jD.prototype={
$1:function(a){var u,t
H.e(a,"$iK")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:4}
F.jC.prototype={
$1:function(a){var u,t
H.e(a,"$iK")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:4}
F.jw.prototype={
N:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.q("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.Y()
return!0},
cg:function(a,b,c){var u=null,t=F.cj(u,u,u,new V.aH(a,b,c),u,u,u,u,0)
this.h(0,t)
return t},
gl:function(a){return this.c.length},
aV:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].ck()
return!0},
aU:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].cj()
return!0},
bv:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
if(typeof p!=="number")return p.m()
o=q.b
if(typeof o!=="number")return o.m()
n=q.c
if(typeof n!=="number")return n.m()
n=q.A(0,Math.sqrt(p*p+o*o+n*n))
if(!J.S(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.J(null)}}}}return!0},
j:function(a){return this.O()},
G:function(a){var u,t,s,r
this.N()
u=H.f([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].G(a))
return C.a.w(u,"\n")},
O:function(){return this.G("")},
sf6:function(a){this.c=H.o(a,"$ib",[F.J],"$ab")}}
F.jx.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
q:function(a,b){var u=this
H.l(b,{func:1,ret:-1,args:[F.K]})
C.a.q(u.b,b)
C.a.q(u.c,new F.jy(u,b))
C.a.q(u.d,new F.jz(u,b))},
j:function(a){return this.O()},
O:function(){var u,t,s,r=H.f([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].G(""))
return C.a.w(r,"\n")},
sfO:function(a){this.b=H.o(a,"$ib",[F.K],"$ab")},
sfP:function(a){this.c=H.o(a,"$ib",[F.K],"$ab")},
sfQ:function(a){this.d=H.o(a,"$ib",[F.K],"$ab")}}
F.jy.prototype={
$1:function(a){H.e(a,"$iK")
if(!J.S(a.a,this.a))this.b.$1(a)},
$S:4}
F.jz.prototype={
$1:function(a){var u
H.e(a,"$iK")
u=this.a
if(!J.S(a.a,u)&&!J.S(a.b,u))this.b.$1(a)},
$S:4}
F.jA.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a){return this.O()},
O:function(){var u,t,s,r=H.f([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].G(""))
return C.a.w(r,"\n")},
sfV:function(a){this.b=H.o(a,"$ib",[F.aF],"$ab")},
sfW:function(a){this.c=H.o(a,"$ib",[F.aF],"$ab")}}
F.jB.prototype={
gl:function(a){return this.b.length},
j:function(a){return this.O()},
O:function(){var u,t,s,r=H.f([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].G(""))
return C.a.w(r,"\n")},
sc6:function(a){this.b=H.o(a,"$ib",[F.by],"$ab")}}
O.dJ.prototype={
gB:function(){var u=this.rx
return u==null?this.rx=D.Y():u},
E:function(a){var u=this.rx
if(u!=null)u.J(a)},
sad:function(a){var u=this.r2
if(!(Math.abs(u-a)<$.N().a)){this.r2=a
u=new D.F("vectorScale",u,a,[P.G])
u.b=!0
this.E(u)}},
an:function(a,b){},
eD:function(a,b){var u,t,s,r,q,p,o=this,n="Inspection",m=2929
if(o.a==null){u=H.e(a.fr.i(0,n),"$idK")
if(u==null){t=a.a
u=new A.dK(t,n)
u.cV(t,n)
u.ej(0,"uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n","precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n")
u.z=u.x.i(0,"posAttr")
u.Q=u.x.i(0,"normAttr")
u.ch=u.x.i(0,"clrAttr")
u.cx=u.x.i(0,"binmAttr")
u.cy=H.u(u.y.i(0,"lightVec"),"$ia_")
u.db=H.u(u.y.i(0,"ambientClr"),"$ibR")
u.dx=H.u(u.y.i(0,"diffuseClr"),"$ibR")
u.dy=H.u(u.y.i(0,"weightScalar"),"$iap")
u.fr=H.u(u.y.i(0,"viewMat"),"$iaB")
u.fx=H.u(u.y.i(0,"viewObjMatrix"),"$iaB")
u.fy=H.u(u.y.i(0,"projViewObjMatrix"),"$iaB")
a.dO(u)}o.a=u}if(b.e==null){b.d.aV()
b.d.aU()
b.d.bv()
t=new Z.dw()
t.sh0(new H.Z([P.h,Z.bE]))
b.e=t}t=o.a
t.aF(a)
s=o.r2
r=t.dy
C.c.a5(r.a,r.d,s)
s=o.b
r=t.cy
r.toString
q=s.a
p=s.b
s=s.c
C.c.U(r.a,r.d,q,p,s)
s=a.db
s=s.ga2(s)
p=t.fr
p.toString
p.ae(s.a8(0,!0))
s=a.geO()
p=t.fx
p.toString
p.ae(s.a8(0,!0))
s=a.gez()
t=t.fy
t.toString
t.ae(s.a8(0,!0))
t=b.e
if(t instanceof Z.dw){s=a.a
s.blendFunc(1,1)
if(b.c==null){s.disable(m)
s.enable(3042)
s.blendFunc(1,1)
if(o.k3)o.dA(a,t,b.d,"Axis",H.l(o.gd5(),{func:1,ret:F.ao,args:[F.cd]}),o.z,o.y)
if(o.k4)o.dA(a,t,b.d,"AABB",H.l(o.gd1(),{func:1,ret:F.ao,args:[F.cd]}),o.z,o.y)
s.enable(m)
s.blendFunc(770,771)}else{s.enable(m)
s.enable(3042)
s.blendFunc(770,771)
if(o.Q)o.a0(a,t,b.c,"shapeFill",o.gik(),o.d,o.c)
if(o.id)o.a0(a,t,b.c,"colorFill",o.gfs(),o.x,o.r)
if(o.k1)o.a0(a,t,b.c,"txt2DColor",o.giE(),o.x,o.r)
if(o.k2)o.a0(a,t,b.c,"weight",o.giL(),o.x,o.r)
s.disable(m)
s.blendFunc(1,1)
if(o.cx)o.a0(a,t,b.c,"vertices",o.giJ(),o.f,o.e)
if(o.fr)o.a0(a,t,b.c,"faceCenters",o.gfH(),o.f,o.e)
if(o.ch)o.a0(a,t,b.c,"wireFrame",o.giN(),o.f,o.e)
if(o.cy)o.a0(a,t,b.c,"normals",o.gh5(),o.f,o.e)
if(o.db)o.a0(a,t,b.c,"binormals",o.gfk(),o.f,o.e)
if(o.dx)o.a0(a,t,b.c,"tangentals",o.gir(),o.f,o.e)
if(o.dy)o.a0(a,t,b.c,"textureCube",o.giG(),o.f,o.e)
if(o.fx)o.a0(a,t,b.c,"faceNormals",o.gfJ(),o.f,o.e)
if(o.fy)o.a0(a,t,b.c,"faceBinormals",o.gfF(),o.x,o.r)
if(o.go)o.a0(a,t,b.c,"faceTangentals",o.gfL(),o.x,o.r)
if(o.k3)o.a0(a,t,b.c,"Axis",o.gd5(),o.z,o.y)
if(o.k4)o.a0(a,t,b.c,"AABB",o.gd1(),o.z,o.y)
s.enable(m)
s.blendFunc(770,771)}}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.dW()},
a0:function(a,b,c,d,e,f,g){var u,t
H.l(e,{func:1,ret:F.ao,args:[F.ao]})
u=b.a.i(0,d)
if(u==null){u=this.d6(a,e.$1(c))
b.a.k(0,d,u)}t=this.a
t.db.bi(f)
t.dx.bi(g)
u.ew(a)},
dA:function(a,b,c,d,e,f,g){var u,t
H.l(e,{func:1,ret:F.ao,args:[F.cd]})
u=b.a.i(0,d)
if(u==null){u=this.d6(a,e.$1(c))
b.a.k(0,d,u)}t=this.a
t.db.bi(f)
t.dx.bi(g)
u.ew(a)},
d6:function(a,b){var u=this,t=$.bc(),s=$.bb(),r=b.dR(new Z.es(a.a),new Z.br(t.a|s.a|$.ba().a|$.bX().a))
r.aj($.bc()).e=u.a.z.c
r.aj($.bb()).e=u.a.Q.c
r.aj($.bX()).e=u.a.ch.c
r.aj($.ba()).e=u.a.cx.c
return r},
il:function(a){var u,t=F.av(),s=a.a
s.toString
u=H.l(new O.hq(t,new V.X(1,1,1,1)),{func:1,ret:-1,args:[F.J]})
C.a.q(s.c,u)
u=a.d
u.toString
s=H.l(new O.hr(t),{func:1,ret:-1,args:[F.K]})
C.a.q(u.b,s)
return t},
dK:function(a,b){var u,t,s,r={}
r.a=b
u=F.av()
r.a=new V.X(0,0.7,1,1)
t=a.a
t.toString
r=H.l(new O.hB(r,u),{func:1,ret:-1,args:[F.J]})
C.a.q(t.c,r)
r=new O.hA(u)
t=a.c
t.toString
s=H.l(new O.hC(u,r),{func:1,ret:-1,args:[F.aF]})
C.a.q(t.b,s)
s=a.d
s.toString
r=H.l(new O.hD(u,r),{func:1,ret:-1,args:[F.K]})
C.a.q(s.b,r)
return u},
iO:function(a){return this.dK(a,null)},
iK:function(a){var u,t=F.av(),s=a.a
s.toString
u=H.l(new O.hw(new V.X(1,1,1,1),t),{func:1,ret:-1,args:[F.J]})
C.a.q(s.c,u)
return t},
h6:function(a){var u,t=F.av(),s=a.a
s.toString
u=H.l(new O.hp(new V.X(1,1,0.3,1),t),{func:1,ret:-1,args:[F.J]})
C.a.q(s.c,u)
return t},
fl:function(a){var u,t=F.av(),s=a.a
s.toString
u=H.l(new O.hi(new V.X(1,0.3,0.3,1),t),{func:1,ret:-1,args:[F.J]})
C.a.q(s.c,u)
return t},
is:function(a){var u,t=F.av(),s=a.a
s.toString
u=H.l(new O.hs(new V.X(1,0.3,1,1),t),{func:1,ret:-1,args:[F.J]})
C.a.q(s.c,u)
return t},
iH:function(a){var u,t=F.av(),s=a.a
s.toString
u=H.l(new O.hv(new V.X(1,0.3,0.3,1),t),{func:1,ret:-1,args:[F.J]})
C.a.q(s.c,u)
return t},
fI:function(a){var u,t=F.av(),s=a.d
s.toString
u=H.l(new O.hm(new V.X(1,1,0.3,1),t),{func:1,ret:-1,args:[F.K]})
C.a.q(s.b,u)
return t},
fK:function(a){var u,t=F.av(),s=a.d
s.toString
u=H.l(new O.hn(new V.X(1,1,0.3,1),t),{func:1,ret:-1,args:[F.K]})
C.a.q(s.b,u)
return t},
fG:function(a){var u,t=F.av(),s=a.d
s.toString
u=H.l(new O.hl(new V.X(1,0.3,0.3,1),t),{func:1,ret:-1,args:[F.K]})
C.a.q(s.b,u)
return t},
fM:function(a){var u,t=F.av(),s=a.d
s.toString
u=H.l(new O.ho(new V.X(1,0.3,1,1),t),{func:1,ret:-1,args:[F.K]})
C.a.q(s.b,u)
return t},
ft:function(a){var u,t=F.av(),s=a.a
s.toString
u=H.l(new O.hj(t),{func:1,ret:-1,args:[F.J]})
C.a.q(s.c,u)
u=a.d
u.toString
s=H.l(new O.hk(t),{func:1,ret:-1,args:[F.K]})
C.a.q(u.b,s)
return t},
iF:function(a){var u,t=F.av(),s=a.a
s.toString
u=H.l(new O.ht(t),{func:1,ret:-1,args:[F.J]})
C.a.q(s.c,u)
u=a.d
u.toString
s=H.l(new O.hu(t),{func:1,ret:-1,args:[F.K]})
C.a.q(u.b,s)
return t},
iM:function(a){var u,t,s={},r=F.av(),q=a.a,p=q.c
if(p.length<1)return r
s.a=s.b=p[0].ch
q.toString
q={func:1,ret:-1,args:[F.J]}
C.a.q(p,H.l(new O.hx(s),q))
p=s.a
u=s.b
if(typeof p!=="number")return p.n()
if(typeof u!=="number")return H.i(u)
t=p-u
s.c=t
if(t<=0)s.c=1
p=a.a
p.toString
q=H.l(new O.hy(s,r),q)
C.a.q(p.c,q)
q=a.d
q.toString
p=H.l(new O.hz(r),{func:1,ret:-1,args:[F.K]})
C.a.q(q.b,p)
return r},
fg:function(a){return this.fh(a)},
fh:function(a){var u=F.av(),t=new O.hh(u)
t.$3(1,0,0)
t.$3(0,1,0)
t.$3(0,0,1)
return u},
fa:function(a){return this.fb(a)},
fb:function(a){var u,t,s,r,q,p,o,n,m,l=a.b8(),k=F.av(),j=new O.hg(k),i=l.a,h=l.b,g=l.c,f=j.$3(i,h,g),e=l.d
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
O.hq.prototype={
$1:function(a){var u,t
H.e(a,"$iJ")
u=this.a.a
t=a.a_()
t.sX(0,this.b)
t.sV(V.a7())
u.h(0,t)},
$S:6}
O.hr.prototype={
$1:function(a){var u,t,s,r,q,p
H.e(a,"$iK")
u=this.a
t=u.a
s=a.a
s.a.a.N()
s=s.e
r=C.a.i(t.c,s)
s=u.a
t=a.b
t.a.a.N()
t=t.e
q=C.a.i(s.c,t)
t=u.a
s=a.c
s.a.a.N()
s=s.e
p=C.a.i(t.c,s)
u.d.a6(0,r,q,p)},
$S:4}
O.hB.prototype={
$1:function(a){var u,t
H.e(a,"$iJ")
u=this.b.a
t=a.a_()
t.sX(0,this.a.a)
t.sV(V.a7())
u.h(0,t)},
$S:6}
O.hA.prototype={
$2:function(a,b){if(a.jg(b)==null)this.a.c.t(0,a,b)},
$S:50}
O.hC.prototype={
$1:function(a){var u,t,s,r
H.e(a,"$iaF")
u=this.a
t=u.a
s=a.a
s.a.a.N()
s=s.e
r=C.a.i(t.c,s)
u=u.a
s=a.b
s.a.a.N()
s=s.e
this.b.$2(r,C.a.i(u.c,s))},
$S:51}
O.hD.prototype={
$1:function(a){var u,t,s,r,q,p
H.e(a,"$iK")
u=this.a
t=u.a
s=a.a
s.a.a.N()
s=s.e
r=C.a.i(t.c,s)
s=u.a
t=a.b
t.a.a.N()
t=t.e
q=C.a.i(s.c,t)
u=u.a
t=a.c
t.a.a.N()
t=t.e
p=C.a.i(u.c,t)
t=this.b
t.$2(r,q)
t.$2(q,p)
t.$2(p,r)},
$S:4}
O.hw.prototype={
$1:function(a){var u,t=H.e(a,"$iJ").a_()
t.sX(0,this.a)
t.sV(V.a7())
u=this.b
u.a.h(0,t)
u.b.a.a.h(0,t)
F.lR(t)},
$S:6}
O.hp.prototype={
$1:function(a){var u,t,s=H.e(a,"$iJ").a_()
s.sX(0,this.a)
s.sV(V.a7())
u=s.a_()
u.sV(s.r)
t=this.b
t.a.h(0,s)
t.a.h(0,u)
t.c.t(0,s,u)},
$S:6}
O.hi.prototype={
$1:function(a){var u,t,s
H.e(a,"$iJ")
u=a.a_()
u.sX(0,this.a)
u.sV(V.a7())
t=u.a_()
t.sV(a.x)
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.t(0,u,t)},
$S:6}
O.hs.prototype={
$1:function(a){var u,t,s
H.e(a,"$iJ")
u=a.a_()
u.sX(0,this.a)
u.sV(V.a7())
t=u.a_()
t.sV(a.x.aG(a.r).M(0))
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.t(0,u,t)},
$S:6}
O.hv.prototype={
$1:function(a){var u,t,s
H.e(a,"$iJ")
u=a.a_()
u.sX(0,this.a)
u.sV(V.a7())
t=u.a_()
t.sV(a.z)
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.t(0,u,t)},
$S:6}
O.hm.prototype={
$1:function(a){var u,t,s,r=null
H.e(a,"$iK")
u=a.a.f.p(0,a.b.f).p(0,a.c.f).A(0,3)
t=a.d
s=F.cj(r,V.a7(),this.a,u,t,r,r,r,0)
t=this.b
t.a.h(0,s)
t.b.a.a.h(0,s)
F.lR(s)},
$S:4}
O.hn.prototype={
$1:function(a){var u,t,s,r,q=null
H.e(a,"$iK")
u=a.a.f.p(0,a.b.f).p(0,a.c.f).A(0,3)
t=a.d
s=F.cj(q,V.a7(),this.a,u,t,q,q,q,0)
r=s.a_()
r.sV(a.d)
t=this.b
t.a.h(0,s)
t.a.h(0,r)
t.c.t(0,s,r)},
$S:4}
O.hl.prototype={
$1:function(a){var u,t,s,r,q=null
H.e(a,"$iK")
u=a.a.f.p(0,a.b.f).p(0,a.c.f).A(0,3)
t=a.d
s=F.cj(q,V.a7(),this.a,u,t,q,q,q,0)
r=s.a_()
r.sV(a.e)
t=this.b
t.a.h(0,s)
t.a.h(0,r)
t.c.t(0,s,r)},
$S:4}
O.ho.prototype={
$1:function(a){var u,t,s,r,q=null
H.e(a,"$iK")
u=a.a.f.p(0,a.b.f).p(0,a.c.f).A(0,3)
t=a.d
s=F.cj(q,V.a7(),this.a,u,t,q,q,q,0)
r=s.a_()
r.sV(a.e.aG(a.d).M(0))
t=this.b
t.a.h(0,s)
t.a.h(0,r)
t.c.t(0,s,r)},
$S:4}
O.hj.prototype={
$1:function(a){var u,t
H.e(a,"$iJ")
u=this.a.a
t=a.a_()
t.sV(V.a7())
u.h(0,t)},
$S:6}
O.hk.prototype={
$1:function(a){var u,t,s,r,q,p
H.e(a,"$iK")
u=this.a
t=u.a
s=a.a
s.a.a.N()
s=s.e
r=C.a.i(t.c,s)
s=u.a
t=a.b
t.a.a.N()
t=t.e
q=C.a.i(s.c,t)
t=u.a
s=a.c
s.a.a.N()
s=s.e
p=C.a.i(t.c,s)
u.d.a6(0,r,q,p)},
$S:4}
O.ht.prototype={
$1:function(a){var u,t,s,r,q,p,o
H.e(a,"$iJ")
u=a.y
t=this.a.a
s=a.a_()
r=u.a
q=u.b
if(typeof r!=="number")return r.C()
if(r<0)r=0
else if(r>1)r=1
if(typeof q!=="number")return q.C()
p=q<0
if(p)o=0
else if(q>1)o=1
else o=q
if(p)q=0
else if(q>1)q=1
s.sX(0,new V.X(r,o,q,1))
s.sV(V.a7())
t.h(0,s)},
$S:6}
O.hu.prototype={
$1:function(a){var u,t,s,r,q,p
H.e(a,"$iK")
u=this.a
t=u.a
s=a.a
s.a.a.N()
s=s.e
r=C.a.i(t.c,s)
s=u.a
t=a.b
t.a.a.N()
t=t.e
q=C.a.i(s.c,t)
t=u.a
s=a.c
s.a.a.N()
s=s.e
p=C.a.i(t.c,s)
u.d.a6(0,r,q,p)},
$S:4}
O.hx.prototype={
$1:function(a){var u,t,s
H.e(a,"$iJ")
u=this.a
t=u.b
s=a.ch
if(typeof t!=="number")return t.a1()
if(typeof s!=="number")return H.i(s)
if(t>s)u.b=s
t=u.a
if(typeof t!=="number")return t.C()
if(t<s)u.a=s},
$S:6}
O.hy.prototype={
$1:function(a){var u,t,s,r
H.e(a,"$iJ")
u=a.ch
t=this.a
s=t.b
if(typeof u!=="number")return u.n()
if(typeof s!=="number")return H.i(s)
r=V.o7((u-s)/t.c*5/6,1,1)
t=this.b.a
s=a.a_()
s.sV(V.a7())
s.sX(0,V.o8(r))
t.h(0,s)},
$S:6}
O.hz.prototype={
$1:function(a){var u,t,s,r,q,p
H.e(a,"$iK")
u=this.a
t=u.a
s=a.a
s.a.a.N()
s=s.e
r=C.a.i(t.c,s)
s=u.a
t=a.b
t.a.a.N()
t=t.e
q=C.a.i(s.c,t)
t=u.a
s=a.c
s.a.a.N()
s=s.e
p=C.a.i(t.c,s)
u.d.a6(0,r,q,p)},
$S:4}
O.hh.prototype={
$3:function(a,b,c){var u,t,s=a>1?1:a,r=b>1?1:b,q=c>1?1:c,p=new V.X(s,r,q,1)
s=this.a
u=s.a.cg(0,0,0)
u.sV(V.a7())
u.sbb(V.n2())
u.sX(0,p)
t=s.a.cg(a,b,c)
t.sV(V.a7())
t.sbb(V.n2())
t.sX(0,p)
s.c.t(0,u,t)}}
O.hg.prototype={
$3:function(a,b,c){var u=this.a.a.cg(a,b,c)
u.sV(V.a7())
u.sbb(new V.a3(a,b,c))
return u}}
O.aY.prototype={
gB:function(){var u=this.fr
return u==null?this.fr=D.Y():u},
E:function(a){var u
H.e(a,"$iC")
u=this.fr
if(u!=null)u.J(a)},
bN:function(){return this.E(null)},
dB:function(a){H.e(a,"$iC")
this.a=null
this.E(a)},
ia:function(){return this.dB(null)},
hc:function(a,b){var u=V.aG
H.o(b,"$im",[u],"$am")
u=new D.c7([u])
u.b=!0
this.E(u)},
he:function(a,b){var u=V.aG
H.o(b,"$im",[u],"$am")
u=new D.c8([u])
u.b=!0
this.E(u)},
de:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.n,h=new H.Z([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
q=r.gay()
p=h.i(0,r.gay())
h.k(0,q,p==null?1:p)}o=H.f([],[A.aW])
h.q(0,new O.i1(j,o))
C.a.bL(o,new O.i2())
n=new H.Z([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
q=r.gay()
p=n.i(0,r.gay())
n.k(0,q,p==null?1:p)}m=H.f([],[A.b0])
n.q(0,new O.i3(j,m))
C.a.bL(m,new O.i4())
l=new H.Z([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.z)(i),++s){r=i[s]
t=r.gay()
q=l.i(0,r.gay())
l.k(0,t,q==null?1:q)}k=H.f([],[A.b4])
l.q(0,new O.i5(j,k))
C.a.bL(k,new O.i6())
i=C.d.ab(j.e.a.length+3,4)
j.dy.e
return A.os(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
ai:function(a,b){H.o(a,"$ib",[T.d3],"$ab")
if(b!=null)if(!C.a.ar(a,b)){b.a=a.length
C.a.h(a,b)}},
an:function(a,b){var u
for(u=this.dx.a,u=new J.ax(u,u.length,[H.r(u,0)]);u.D();)C.j.an(u.d,b)},
eD:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.de()
u=H.e(b4.fr.i(0,b3.aH),"$idU")
if(u==null){u=A.or(b3,b4.a)
b4.dO(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.dY
b3=b5.e
if(!(b3 instanceof Z.bE))b3=b5.e=null
if(b3==null||!b3.d.v(0,s)){b3=t.k3
if(b3)b5.d.aV()
r=t.k4
if(r)b5.d.aU()
q=t.r2
if(q)b5.d.bv()
p=b5.d.dR(new Z.es(b4.a),s)
p.aj($.bc()).e=b2.a.Q.c
if(b3)p.aj($.bb()).e=b2.a.cx.c
if(r)p.aj($.ba()).e=b2.a.ch.c
if(t.r1)p.aj($.bD()).e=b2.a.cy.c
if(q)p.aj($.bY()).e=b2.a.db.c
if(t.rx)p.aj($.bC()).e=b2.a.dx.c
b5.e=p}b3=T.d3
o=H.f([],[b3])
b2.a.aF(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.ga2(q)
r=r.dy
r.toString
r.ae(q.a8(0,!0))}if(t.fr){r=b2.a
q=b4.geO()
r=r.fr
r.toString
r.ae(q.a8(0,!0))}r=b2.a
q=b4.gez()
r=r.fy
r.toString
r.ae(q.a8(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.ae(C.j.a8(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.ae(C.j.a8(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.ae(C.j.a8(q,!0))}if(t.y2>0){n=b2.e.a.length
r=b2.a.k4
C.c.bG(r.a,r.d,n)
for(r=[P.G],m=0;m<n;++m){q=b2.a
l=b2.e.a
if(m>=l.length)return H.c(l,m)
l=l[m]
q.toString
H.e(l,"$iaG")
q=q.r1
if(m>=q.length)return H.c(q,m)
q=q[m]
k=new Float32Array(H.cn(H.o(l.a8(0,!0),"$ib",r,"$ab")))
C.c.eL(q.a,q.d,!1,k)}}r=t.a
if(r.a){q=b2.a
l=b2.f.f
q=q.r2
C.c.U(q.a,q.d,l.a,l.b,l.c)}if(r.b){b2.ai(o,b2.f.d)
r=b2.a
q=b2.f.d
r.aq(r.rx,q)}if(t.id){r=t.b
if(r.a){q=b2.a
l=b2.r.f
q=q.x1
C.c.U(q.a,q.d,l.a,l.b,l.c)}if(r.b){b2.ai(o,b2.r.d)
r=b2.a
q=b2.r.d
r.aq(r.x2,q)}r=t.c
if(r.a){q=b2.a
l=b2.x.f
q=q.y2
C.c.U(q.a,q.d,l.a,l.b,l.c)}if(r.b){b2.ai(o,b2.x.d)
r=b2.a
q=b2.x.d
r.aq(r.aH,q)}r=t.d
if(r.a){q=b2.a
l=b2.y.f
q=q.dZ
C.c.U(q.a,q.d,l.a,l.b,l.c)}if(r.b){b2.ai(o,b2.y.d)
r=b2.a
q=b2.y.d
r.aq(r.e_,q)}r=t.e
q=r.a
if(q||r.b||!1){l=b2.a
j=b2.z.ch
l=l.e2
C.c.a5(l.a,l.d,j)}if(q){q=b2.a
l=b2.z.f
q=q.e0
C.c.U(q.a,q.d,l.a,l.b,l.c)}if(r.b){b2.ai(o,b2.z.d)
r=b2.a
q=b2.z.d
r.aq(r.e1,q)}r=t.z
if(r.length>0){q=b4.db
i=q.ga2(q)
q=P.n
h=new H.Z([q,q])
for(q=b2.dx.e,l=q.length,j=[b3],g=0;g<q.length;q.length===l||(0,H.z)(q),++g){f=q[g]
e=f.gay()
d=h.i(0,e)
if(d==null)d=0
h.k(0,e,d+1)
c=J.Q(b2.a.cq.i(0,e),d)
b=i.cL(f.gdV(f))
a=b.a
if(typeof a!=="number")return a.m()
a0=b.b
if(typeof a0!=="number")return a0.m()
a1=b.c
if(typeof a1!=="number")return a1.m()
a1=b.A(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=c.e
a=a1.a
b=a1.b
a1=a1.c
C.c.U(a0.a,a0.d,a,b,a1)
a1=f.gX(f)
b=c.f
C.c.U(b.a,b.d,a1.a,a1.b,a1.c)
f.gam()
b=f.gdV(f)
a=c.d
C.c.U(a.a,a.d,b.a,b.b,b.c)
b=f.gbH()
a=c.b
C.c.U(a.a,a.d,b.a,b.b,b.c)
b=f.gbD(f)
a=c.c
C.c.U(a.a,a.d,b.a,b.b,b.c)
b=f.gam()
H.o(o,"$ib",j,"$ab")
if(!C.a.ar(o,b)){b.a=o.length
C.a.h(o,b)}b=f.gam()
a=b.gaX(b)
if(a){a=c.r
a.toString
a0=b.d
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.z)(r),++g){l=r[g].a
n=h.i(0,l)
if(n==null)n=0
l=b2.a.cp.i(0,l)
C.c.bG(l.a,l.d,n)}}r=t.Q
if(r.length>0){q=b4.db
i=q.ga2(q)
q=P.n
a2=new H.Z([q,q])
for(q=b2.dx.f,l=q.length,j=[b3],b=[P.G],g=0;g<q.length;q.length===l||(0,H.z)(q),++g){f=q[g]
e=f.gay()
d=a2.i(0,e)
if(d==null)d=0
a2.k(0,e,d+1)
c=J.Q(b2.a.cs.i(0,e),d)
a3=i.m(0,f.ga2(f))
a=f.ga2(f)
a0=$.cX
a=a.bF(a0==null?$.cX=new V.aH(0,0,0):a0)
a0=c.b
C.c.U(a0.a,a0.d,a.a,a.b,a.c)
a=$.cX
a=a3.bF(a==null?$.cX=new V.aH(0,0,0):a)
a0=c.c
C.c.U(a0.a,a0.d,a.a,a.b,a.c)
a=f.gX(f)
a0=c.e
C.c.U(a0.a,a0.d,a.a,a.b,a.c)
f.gam()
a=a3.ek(0)
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
k=new Float32Array(H.cn(H.o(new V.dV(a0,a1,a4,a5,a6,a7,a8,a9,a).a8(0,!0),"$ib",b,"$ab")))
C.c.eK(b0.a,b0.d,!1,k)
f.gam()
a=f.gam()
H.o(o,"$ib",j,"$ab")
if(!C.a.ar(o,a)){a.a=o.length
C.a.h(o,a)}a=f.gam()
a0=a.gaX(a)
if(a0){a0=c.f
a0.toString
a1=a.gaX(a)
if(!a1)a0.a.uniform1i(a0.d,0)
else{a=a.gjl(a)
a0.a.uniform1i(a0.d,a)}}f.gb3()
a=f.geS()
a0=c.x
a0.toString
a1=a.gj6(a)
a4=a.gj7(a)
a5=a.gj8()
a=a.gj5()
C.c.cM(a0.a,a0.d,a1,a4,a5,a)
a=f.gb3()
if(!C.a.ar(o,a)){a.a=o.length
C.a.h(o,a)}a=f.gb3()
a0=a.gaX(a)
if(a0){a0=c.r
a0.toString
a1=a.gaX(a)
if(!a1)a0.a.uniform1i(a0.d,0)
else{a=a.gjl(a)
a0.a.uniform1i(a0.d,a)}}if(f.gjb()){a=f.giV()
a0=c.y
C.c.a5(a0.a,a0.d,a)
a=f.giW()
a0=c.z
C.c.a5(a0.a,a0.d,a)
a=f.giX()
a0=c.Q
C.c.a5(a0.a,a0.d,a)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.z)(r),++g){l=r[g].a
n=a2.i(0,l)
if(n==null)n=0
l=b2.a.cr.i(0,l)
C.c.bG(l.a,l.d,n)}}r=t.ch
if(r.length>0){q=b4.db
i=q.ga2(q)
q=P.n
b1=new H.Z([q,q])
for(q=b2.dx.r,l=q.length,b3=[b3],g=0;g<q.length;q.length===l||(0,H.z)(q),++g){f=q[g]
e=f.gay()
d=b1.i(0,e)
if(d==null)d=0
b1.k(0,e,d+1)
c=J.Q(b2.a.cu.i(0,e),d)
j=f.gjL(f)
b=c.b
C.c.U(b.a,b.d,j.a,j.b,j.c)
j=f.gdV(f).kl()
b=c.c
C.c.U(b.a,b.d,j.a,j.b,j.c)
j=i.bF(f.gjL(f))
b=c.d
C.c.U(b.a,b.d,j.a,j.b,j.c)
j=f.gX(f)
b=c.e
C.c.U(b.a,b.d,j.a,j.b,j.c)
f.gam()
j=f.gbH()
b=c.f
C.c.U(b.a,b.d,j.a,j.b,j.c)
j=f.gbD(f)
b=c.r
C.c.U(b.a,b.d,j.a,j.b,j.c)
j=f.gkm()
b=c.x
C.c.a5(b.a,b.d,j)
j=f.gkn()
b=c.y
C.c.a5(b.a,b.d,j)
f.gam()
j=f.gam()
H.o(o,"$ib",b3,"$ab")
if(!C.a.ar(o,j)){j.a=o.length
C.a.h(o,j)}j=f.gam()
b=j.gaX(j)
if(b){b=c.dx
b.toString
a=j.d
if(!a)b.a.uniform1i(b.d,0)
else{j=j.a
b.a.uniform1i(b.d,j)}}f.gb3()
j=f.geS()
b=c.z
b.toString
a=j.gj6(j)
a0=j.gj7(j)
a1=j.gj8()
j=j.gj5()
C.c.cM(b.a,b.d,a,a0,a1,j)
j=f.gb3()
if(!C.a.ar(o,j)){j.a=o.length
C.a.h(o,j)}j=f.gb3()
b=j.gaX(j)
if(b){b=c.dy
b.toString
a=j.d
if(!a)b.a.uniform1i(b.d,0)
else{j=j.a
b.a.uniform1i(b.d,j)}}if(f.gka()){j=f.gk9()
b=c.Q
C.c.a5(b.a,b.d,j)
j=f.gk8()
b=c.ch
C.c.a5(b.a,b.d,j)}if(f.gjb()){j=f.giV()
b=c.cx
C.c.a5(b.a,b.d,j)
j=f.giW()
b=c.cy
C.c.a5(b.a,b.d,j)
j=f.giX()
b=c.db
C.c.a5(b.a,b.d,j)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.z)(r),++g){q=r[g].a
n=b1.i(0,q)
if(n==null)n=0
q=b2.a.ct.i(0,q)
C.c.bG(q.a,q.d,n)}}}if(t.f.b){b2.ai(o,b2.Q.d)
b3=b2.a
r=b2.Q.d
b3.aq(b3.e3,r)}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.ga2(r).ek(0)}b3=b3.id
b3.toString
b3.ae(r.a8(0,!0))}if(t.cy){b2.ai(o,b2.ch)
b3=b2.a
r=b2.ch
b3.ie(b3.e4,r)
b3=t.r
if(b3.a){r=b2.a
q=b2.cx.f
r=r.e5
C.c.U(r.a,r.d,q.a,q.b,q.c)}if(b3.b){b2.ai(o,b2.cx.d)
b3=b2.a
r=b2.cx.d
b3.aq(b3.e6,r)}b3=t.x
r=b3.a
if(r||b3.b||!1){q=b2.a
l=b2.cy.ch
q=q.e7
C.c.a5(q.a,q.d,l)}if(r){r=b2.a
q=b2.cy.f
r=r.e8
C.c.U(r.a,r.d,q.a,q.b,q.c)}if(b3.b){b2.ai(o,b2.cy.d)
b3=b2.a
r=b2.cy.d
b3.aq(b3.e9,r)}}b3=t.y
r=b3.a
q=!r
if(!q||b3.b||!1){if(r){r=b2.a
l=b2.db.f
r=r.ea
C.c.a5(r.a,r.d,l)}if(b3.b){b2.ai(o,b2.db.d)
r=b2.a
l=b2.db.d
r.aq(r.eb,l)}r=b4.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b4.a,m=0;m<o.length;++m){l=o[m]
if(!l.c&&l.d){l.c=!0
r.activeTexture(33984+l.a)
r.bindTexture(3553,l.b)}}l=H.u(b5.e,"$ibE")
l.aF(b4)
l.aK(b4)
l.eJ(b4)
if(!q||b3.b||!1)r.disable(3042)
for(m=0;m<o.length;++m){b3=o[m]
if(b3.c){b3.c=!1
r.activeTexture(33984+b3.a)
r.bindTexture(3553,null)}}b3=b2.a
b3.toString
r.useProgram(null)
b3.x.dW()},
j:function(a){var u=this.a
if(u!=null)return u.b
else return this.de().aH},
sfj:function(a){this.e=H.o(a,"$ia9",[V.aG],"$aa9")}}
O.i1.prototype={
$2:function(a,b){H.ak(a)
H.ak(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aW(a,C.d.ab(b+3,4)*4))},
$S:18}
O.i2.prototype={
$2:function(a,b){H.e(a,"$iaW")
H.e(b,"$iaW")
return J.lA(a.a,b.a)},
$S:54}
O.i3.prototype={
$2:function(a,b){H.ak(a)
H.ak(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.b0(a,C.d.ab(b+3,4)*4))},
$S:18}
O.i4.prototype={
$2:function(a,b){H.e(a,"$ib0")
H.e(b,"$ib0")
return J.lA(a.a,b.a)},
$S:55}
O.i5.prototype={
$2:function(a,b){H.ak(a)
H.ak(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.b4(a,C.d.ab(b+3,4)*4))},
$S:18}
O.i6.prototype={
$2:function(a,b){H.e(a,"$ib4")
H.e(b,"$ib4")
return J.lA(a.a,b.a)},
$S:56}
O.hW.prototype={
cc:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.N().a)){u.f=a
t=new D.F(u.b,t,a,[P.G])
t.b=!0
u.a.E(t)}},
aD:function(){this.cT()
this.cc(1)},
sac:function(a,b){var u,t=this
if(b==null)b=1
u=t.c.b
if(b<=0){t.aS(new A.ad(!1,u,!1))
t.cc(0)}else{t.aS(new A.ad(!0,u,!1))
t.cc(b>=1?1:b)}}}
O.cN.prototype={
E:function(a){return this.a.E(H.e(a,"$iC"))},
bN:function(){return this.E(null)},
aD:function(){},
aS:function(a){var u,t,s=this
if(!s.c.v(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aD()
u=s.a
u.a=null
u.E(null)}},
sbe:function(a){var u,t=this,s=t.c
if(!s.b)t.aS(new A.ad(s.a,!0,!1))
s=t.d
if(s!==a){if(s!=null)s.gB().Z(0,t.gbk())
u=t.d
t.d=a
a.gB().h(0,t.gbk())
s=new D.F(t.b+".texture2D",u,t.d,[T.ee])
s.b=!0
t.a.E(s)}}}
O.hX.prototype={}
O.bk.prototype={
dD:function(a){var u,t,s=this
if(!s.f.v(0,a)){u=s.f
s.f=a
t=new D.F(s.b+".color",u,a,[V.a4])
t.b=!0
s.a.E(t)}},
aD:function(){this.cT()
this.dD(new V.a4(1,1,1))},
sX:function(a,b){this.aS(new A.ad(!0,this.c.b,!1))
this.dD(b)}}
O.hZ.prototype={}
O.i_.prototype={
aD:function(){var u,t=this
t.cU()
u=t.ch
if(!(Math.abs(u-1)<$.N().a)){t.ch=1
u=new D.F(t.b+".refraction",u,1,[P.G])
u.b=!0
t.a.E(u)}}}
O.i0.prototype={
cd:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.N().a)){u.ch=a
t=new D.F(u.b+".shininess",t,a,[P.G])
t.b=!0
u.a.E(t)}},
aD:function(){this.cU()
this.cd(100)}}
O.bP.prototype={}
T.d3.prototype={}
T.ee.prototype={}
T.j_.prototype={
gB:function(){var u=this.y
return u==null?this.y=D.Y():u}}
T.j0.prototype={
b9:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.j_()
t.a=0
t.b=q
t.d=t.c=!1
r=W.p
W.a8(u,"load",H.l(new T.j1(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
ib:function(a,b,c){var u,t,s,r
b=V.mc(b)
u=V.mc(a.width)
t=V.mc(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.lG()
s.width=u
s.height=t
r=H.e(C.k.eP(s,"2d"),"$icB")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.pW(r.getImageData(0,0,s.width,s.height))}}}
T.j1.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.ib(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.c.jY(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.j9()}++s.e},
$S:13}
V.fu.prototype={
aY:function(a,b){return!0},
j:function(a){return"all"},
$ibv:1}
V.bv.prototype={}
V.dT.prototype={
aY:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)if(u[s].aY(0,b))return!0
return!1},
j:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.j(0)}return s},
saC:function(a){this.a=H.o(a,"$ib",[V.bv],"$ab")},
$ibv:1}
V.bx.prototype={
aY:function(a,b){return!this.eW(0,b)},
j:function(a){return"!["+this.cS(0)+"]"}}
V.iF.prototype={
f_:function(a){var u,t
if(a.a.length<=0)throw H.d(P.q("May not create a SetMatcher with zero characters."))
u=new H.Z([P.n,P.M])
for(t=new H.dR(a,a.gl(a),[H.aU(a,"y",0)]);t.D();)u.k(0,t.d,!0)
this.sic(u)},
aY:function(a,b){return this.a.bx(0,b)},
j:function(a){var u=this.a
return P.d2(u.gaz(u),0,null)},
sic:function(a){this.a=H.o(a,"$ix",[P.n,P.M],"$ax")},
$ibv:1}
V.d0.prototype={
w:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d5(this.a.P(0,b))
r.saC(H.f([],[V.bv]))
r.c=!1
C.a.h(this.c,r)
return r},
jf:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.aY(0,a))return r}return},
j:function(a){return this.b},
siD:function(a){this.c=H.o(a,"$ib",[V.d5],"$ab")}}
V.eg.prototype={
j:function(a){var u=H.nA(this.b,"\n","\\n"),t=H.nA(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d4.prototype={
j:function(a){return this.b},
si6:function(a){var u=P.h
this.c=H.o(a,"$ix",[u,u],"$ax")}}
V.j4.prototype={
P:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new V.d0(this,b)
u.siD(H.f([],[V.d5]))
u.d=null
this.a.k(0,b,u)}return u},
bg:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new V.d4(a)
u=P.h
t.si6(new H.Z([u,u]))
this.b.k(0,a,t)}return t},
k5:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.f([],[V.eg]),k=this.c,j=[P.n],i=H.f([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.F(a,s)
q=k.jf(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.d2(i,0,m)
throw H.d(P.q("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.f([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.d2(i,0,m)
o=k.d
n=o.c.i(0,p)
t=new V.eg(n==null?o.b:n,p,s)}++s}}},
siq:function(a){this.a=H.o(a,"$ix",[P.h,V.d0],"$ax")},
siw:function(a){this.b=H.o(a,"$ix",[P.h,V.d4],"$ax")}}
V.d5.prototype={
j:function(a){return this.b.b+": "+this.cS(0)}}
X.dy.prototype={$icR:1}
X.hb.prototype={
gB:function(){var u=this.x
return u==null?this.x=D.Y():u}}
X.e1.prototype={
gB:function(){var u=this.f
return u==null?this.f=D.Y():u},
aN:function(a){var u
H.e(a,"$iC")
u=this.f
if(u!=null)u.J(a)},
f9:function(){return this.aN(null)},
sba:function(a){var u,t,s=this
if(!J.S(s.b,a)){u=s.b
if(u!=null)u.gB().Z(0,s.gd_())
t=s.b
s.b=a
if(a!=null)a.gB().h(0,s.gd_())
u=new D.F("mover",t,s.b,[U.as])
u.b=!0
s.aN(u)}},
$icR:1,
$idy:1}
X.ec.prototype={}
V.fJ.prototype={
a6:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=this
H.l(c,{func:1,ret:-1,args:[P.M]})
if(l.c==null)return
u=l.d.length
t=P.em().gaZ().i(0,l.a)
if(t==null||t.length<=u){s=d
r=!0}else{if(u>=t.length)return H.c(t,u)
s=t[u]==="1"
r=!1}c.$1(s)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.fs(l.c).h(0,p)
n=W.mp("checkbox")
n.checked=s
o=W.p
W.a8(n,"change",H.l(new V.fK(l,c,n,u),{func:1,ret:-1,args:[o]}),!1,o)
p.appendChild(n)
m=q.createElement("span")
m.textContent=b
p.appendChild(m)
J.fs(l.c).h(0,q.createElement("br"))
C.a.h(l.d,n)
if(r)l.dJ(u,s)},
t:function(a,b,c){return this.a6(a,b,c,!1)},
dJ:function(a,b){var u,t,s,r,q,p=this.a,o=P.em().gaZ().i(0,p)
if(o==null)o=""
u=o.length
if(u<a)o=C.b.jD(o,a-u+1,"0")
t=a>0?C.b.u(o,0,a):""
t+=H.D(b)?"1":"0"
u=a+1
if(u<o.length)t+=C.b.af(o,u)
s=P.em()
u=P.h
r=P.mu(s.gaZ(),u,u)
r.k(0,p,t)
q=s.cI(0,r)
p=window.history
u=q.j(0)
p.toString
p.replaceState(new P.f5([],[]).bI(""),"",u)},
sfp:function(a){this.d=H.o(a,"$ib",[W.cC],"$ab")}}
V.fK.prototype={
$1:function(a){var u=this,t=u.c
u.b.$1(t.checked)
u.a.dJ(u.d,t.checked)},
$S:13}
V.lw.prototype={
$1:function(a){var u
H.e(a,"$ibo")
u=C.e.eH(this.a.gjj(),2)
if(u!=="0.00")P.fr(u+" fps")},
$S:58}
V.iu.prototype={
a6:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.l(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.em().gaZ().i(0,H.j(u))
if(t==null)if(d){c.$0()
m.dI(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.fs(m.c).h(0,q)
o=W.mp("radio")
o.checked=s
o.name=u
u=W.p
W.a8(o,"change",H.l(new V.iv(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.fs(m.c).h(0,r.createElement("br"))},
t:function(a,b,c){return this.a6(a,b,c,!1)},
dI:function(a){var u,t,s=P.em(),r=P.h,q=P.mu(s.gaZ(),r,r)
q.k(0,this.a,a)
u=s.cI(0,q)
r=window.history
t=u.j(0)
r.toString
r.replaceState(new P.f5([],[]).bI(""),"",t)}}
V.iv.prototype={
$1:function(a){var u=this
if(H.D(u.b.checked)){u.c.$0()
u.a.dI(u.d)}},
$S:13}
V.iJ.prototype={
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
r=W.p
W.a8(q,"scroll",H.l(new V.iL(o),{func:1,ret:-1,args:[r]}),!1,r)},
dN:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.o(a,"$ib",[P.h],"$ab")
this.ih()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.k5(C.a.jp(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
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
if(H.qg(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=H.a0(m[1])
l.textContent=H.a0(m[0])
t.appendChild(l)}else{k=P.kv(C.P,n,C.h,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.j(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
iP:function(a){var u,t,s,r,q,p,o,n="auto"
H.o(a,"$ib",[P.h],"$ab")
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
s=H.e(r.insertCell(-1),"$ibz").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
for(q=0;q<3;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.e(r.insertCell(-1),"$ibz")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
ih:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.j4()
t=P.h
u.siq(new H.Z([t,V.d0]))
u.siw(new H.Z([t,V.d4]))
u.c=null
u.c=u.P(0,q)
t=u.P(0,q).w(0,p)
s=V.aA(new H.ab("*"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,p).w(0,p)
s=new V.bx()
r=[V.bv]
s.saC(H.f([],r))
C.a.h(t.a,s)
t=V.aA(new H.ab("*"))
C.a.h(s.a,t)
t=u.P(0,p).w(0,"BoldEnd")
s=V.aA(new H.ab("*"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,q).w(0,o)
s=V.aA(new H.ab("_"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,o).w(0,o)
s=new V.bx()
s.saC(H.f([],r))
C.a.h(t.a,s)
t=V.aA(new H.ab("_"))
C.a.h(s.a,t)
t=u.P(0,o).w(0,n)
s=V.aA(new H.ab("_"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,q).w(0,m)
s=V.aA(new H.ab("`"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,m).w(0,m)
s=new V.bx()
s.saC(H.f([],r))
C.a.h(t.a,s)
t=V.aA(new H.ab("`"))
C.a.h(s.a,t)
t=u.P(0,m).w(0,"CodeEnd")
s=V.aA(new H.ab("`"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,q).w(0,l)
s=V.aA(new H.ab("["))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,l).w(0,k)
s=V.aA(new H.ab("|"))
C.a.h(t.a,s)
s=u.P(0,l).w(0,j)
t=V.aA(new H.ab("]"))
C.a.h(s.a,t)
s.c=!0
s=u.P(0,l).w(0,l)
t=new V.bx()
t.saC(H.f([],r))
C.a.h(s.a,t)
s=V.aA(new H.ab("|]"))
C.a.h(t.a,s)
s=u.P(0,k).w(0,j)
t=V.aA(new H.ab("]"))
C.a.h(s.a,t)
s.c=!0
s=u.P(0,k).w(0,k)
t=new V.bx()
t.saC(H.f([],r))
C.a.h(s.a,t)
s=V.aA(new H.ab("|]"))
C.a.h(t.a,s)
C.a.h(u.P(0,q).w(0,i).a,new V.fu())
s=u.P(0,i).w(0,i)
t=new V.bx()
t.saC(H.f([],r))
C.a.h(s.a,t)
s=V.aA(new H.ab("*_`["))
C.a.h(t.a,s)
s=u.P(0,"BoldEnd")
s.d=s.a.bg(p)
s=u.P(0,n)
s.d=s.a.bg(o)
s=u.P(0,"CodeEnd")
s.d=s.a.bg(m)
s=u.P(0,j)
s.d=s.a.bg("Link")
s=u.P(0,i)
s.d=s.a.bg(i)
this.b=u}}
V.iL.prototype={
$1:function(a){P.mR(C.o,new V.iK(this.a))},
$S:13}
V.iK.prototype={
$0:function(){var u=C.e.av(document.documentElement.scrollTop),t=this.a.style,s=H.j(-0.01*u)+"px"
t.top=s},
$S:0}
G.kW.prototype={
$1:function(a){var u
this.a.a=a
u=this.b.y.a
if(u.length>1)u[0].b=a},
$S:1}
G.kX.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.Q!==a){t.Q=a
u=new D.F("showFilled",!a,a,[P.M])
u.b=!0
t.E(u)}},
$S:1}
G.kY.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.ch!==a){t.ch=a
u=new D.F("showWireFrame",!a,a,[P.M])
u.b=!0
t.E(u)}},
$S:1}
G.l8.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.cx!==a){t.cx=a
u=new D.F("showVertices",!a,a,[P.M])
u.b=!0
t.E(u)}},
$S:1}
G.lj.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.cy!==a){t.cy=a
u=new D.F("showNormals",!a,a,[P.M])
u.b=!0
t.E(u)}},
$S:1}
G.ll.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.db!==a){t.db=a
u=new D.F("showBinormals",!a,a,[P.M])
u.b=!0
t.E(u)}},
$S:1}
G.lm.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.dx!==a){t.dx=a
u=new D.F("showTangentals",!a,a,[P.M])
u.b=!0
t.E(u)}},
$S:1}
G.ln.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.fr!==a){t.fr=a
u=new D.F("showFaceCenters",!a,a,[P.M])
u.b=!0
t.E(u)}},
$S:1}
G.lo.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.fx!==a){t.fx=a
u=new D.F("showFaceNormals",!a,a,[P.M])
u.b=!0
t.E(u)}},
$S:1}
G.lp.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.fy!==a){t.fy=a
u=new D.F("showFaceBinormals",!a,a,[P.M])
u.b=!0
t.E(u)}},
$S:1}
G.lq.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.go!==a){t.go=a
u=new D.F("showFaceTangentals",!a,a,[P.M])
u.b=!0
t.E(u)}},
$S:1}
G.kZ.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.id!==a){t.id=a
u=new D.F("showColorFill",!a,a,[P.M])
u.b=!0
t.E(u)}},
$S:1}
G.l_.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k1!==a){t.k1=a
u=new D.F("showTxt2DColor",!a,a,[P.M])
u.b=!0
t.E(u)}},
$S:1}
G.l0.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.dy!==a){t.dy=a
u=new D.F("showTxtCube",!a,a,[P.M])
u.b=!0
t.E(u)}},
$S:1}
G.l1.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k2!==a){t.k2=a
u=new D.F("showWeight",!a,a,[P.M])
u.b=!0
t.E(u)}},
$S:1}
G.l2.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k3!==a){t.k3=a
u=new D.F("showAxis",!a,a,[P.M])
u.b=!0
t.E(u)}},
$S:1}
G.l3.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k4!==a){t.k4=a
u=new D.F("showAABB",!a,a,[P.M])
u.b=!0
t.E(u)}},
$S:1}
G.lr.prototype={
$1:function(a){var u,t,s=E.h1(null)
s.scQ(0,a.c)
u=a.y
t=H.l(new G.ls(s,this),{func:1,ret:-1,args:[H.r(u,0)]})
C.a.q(u.a,t)
return s},
$S:60}
G.ls.prototype={
$1:function(a){H.e(a,"$ia2")
this.a.y.h(0,this.b.$1(a))},
$S:61}
G.lt.prototype={
$1:function(a){var u=0,t=P.ai(null),s=this,r,q,p,o,n,m
var $async$$1=P.aj(function(b,c){if(b===1)return P.af(c,t)
while(true)switch(u){case 0:u=2
return P.aw(O.e0(a,s.b.f),$async$$1)
case 2:m=c
m.jU(3.5)
r=s.c
q=r.y
p=q.a
if(p.length>0){o=H.r(q,0)
q.sdq(H.f([],[o]))
H.o(p,"$im",[o],"$am")
q=q.d
if(q!=null)q.$2(0,p)}r.y.h(0,m)
m.b=s.a.a
n=s.d.$1(m)
n.sb1(s.e)
r.y.h(0,n)
return P.ag(null,t)}})
return P.ah($async$$1,t)},
$S:62}
G.l4.prototype={
$0:function(){var u=0,t=P.ai(P.A),s=this
var $async$$0=P.aj(function(a,b){if(a===1)return P.af(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/Cube.obj")
return P.ag(null,t)}})
return P.ah($async$$0,t)},
$S:9}
G.l5.prototype={
$0:function(){var u=0,t=P.ai(P.A),s=this
var $async$$0=P.aj(function(a,b){if(a===1)return P.af(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/tree/tree.obj")
return P.ag(null,t)}})
return P.ah($async$$0,t)},
$S:9}
G.l6.prototype={
$0:function(){var u=0,t=P.ai(P.A),s=this
var $async$$0=P.aj(function(a,b){if(a===1)return P.af(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/Wolf.obj")
return P.ag(null,t)}})
return P.ah($async$$0,t)},
$S:9}
G.l7.prototype={
$0:function(){var u=0,t=P.ai(P.A),s=this
var $async$$0=P.aj(function(a,b){if(a===1)return P.af(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/plant/plant.obj")
return P.ag(null,t)}})
return P.ah($async$$0,t)},
$S:9}
G.l9.prototype={
$0:function(){this.a.sad(0.01)},
$S:0}
G.la.prototype={
$0:function(){this.a.sad(0.02)},
$S:0}
G.lb.prototype={
$0:function(){this.a.sad(0.04)},
$S:0}
G.lc.prototype={
$0:function(){this.a.sad(0.06)},
$S:0}
G.ld.prototype={
$0:function(){this.a.sad(0.08)},
$S:0}
G.le.prototype={
$0:function(){this.a.sad(0.1)},
$S:0}
G.lf.prototype={
$0:function(){this.a.sad(0.2)},
$S:0}
G.lg.prototype={
$0:function(){this.a.sad(0.4)},
$S:0}
G.lh.prototype={
$0:function(){this.a.sad(0.6)},
$S:0}
G.li.prototype={
$0:function(){this.a.sad(0.8)},
$S:0}
G.lk.prototype={
$0:function(){this.a.sad(1)},
$S:0};(function aliases(){var u=J.a.prototype
u.eU=u.j
u=J.dO.prototype
u.eV=u.j
u=O.cN.prototype
u.cT=u.aD
u=O.bk.prototype
u.cU=u.aD
u=V.dT.prototype
u.eW=u.aY
u.cS=u.j})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"pR","p1",17)
u(P,"pS","p2",17)
u(P,"pT","p3",17)
t(P,"nn","pP",7)
s(P.ev.prototype,"gj_",0,1,null,["$2","$1"],["bw","dT"],64,0)
var n
s(n=E.a2.prototype,"ger",0,0,null,["$1","$0"],["es","jA"],3,0)
s(n,"geu",0,0,null,["$1","$0"],["ev","jB"],3,0)
s(n,"gep",0,0,null,["$1","$0"],["eq","jz"],3,0)
s(n,"gen",0,0,null,["$1","$0"],["eo","jw"],3,0)
r(n,"gju","jv",10)
r(n,"gjx","jy",10)
s(n=E.ef.prototype,"gcW",0,0,null,["$1","$0"],["cY","cX"],3,0)
q(n,"gjT","eE",7)
p(n=X.en.prototype,"ghr","hs",15)
p(n,"ghf","hg",15)
p(n,"ghl","hm",8)
p(n,"ghv","hw",24)
p(n,"ght","hu",24)
p(n,"ghz","hA",8)
p(n,"ghD","hE",8)
p(n,"ghp","hq",8)
p(n,"ghB","hC",8)
p(n,"ghn","ho",8)
p(n,"ghF","hG",39)
p(n,"ghH","hI",15)
p(n,"ghU","hV",16)
p(n,"ghQ","hR",16)
p(n,"ghS","hT",16)
s(n=D.dQ.prototype,"gdt",0,0,null,["$1","$0"],["du","hx"],3,0)
p(n,"ghK","hL",41)
r(n,"gh9","ha",19)
r(n,"ghO","hP",19)
o(V.W.prototype,"gl","cB",26)
o(V.a3.prototype,"gl","cB",26)
s(n=U.cI.prototype,"gaP",0,0,null,["$1","$0"],["R","aa"],3,0)
r(n,"gh7","h8",27)
r(n,"ghM","hN",27)
s(n=U.eo.prototype,"gaP",0,0,null,["$1","$0"],["R","aa"],3,0)
p(n,"gbY","bZ",5)
p(n,"gc_","c0",5)
p(n,"gc1","c2",5)
s(n=U.ep.prototype,"gaP",0,0,null,["$1","$0"],["R","aa"],3,0)
p(n,"gbY","bZ",5)
p(n,"gc_","c0",5)
p(n,"gc1","c2",5)
p(n,"gfX","fY",5)
p(n,"gfZ","h_",5)
p(n,"giB","iC",5)
p(n,"giz","iA",5)
p(n,"gix","iy",5)
p(U.eq.prototype,"gh1","h2",5)
s(n=M.dG.prototype,"gaw",0,0,null,["$1","$0"],["aA","f5"],3,0)
r(n,"ghh","hi",10)
r(n,"ghj","hk",10)
p(n=O.dJ.prototype,"gik","il",2)
s(n,"giN",0,1,null,["$2$color","$1"],["dK","iO"],63,0)
p(n,"giJ","iK",2)
p(n,"gh5","h6",2)
p(n,"gfk","fl",2)
p(n,"gir","is",2)
p(n,"giG","iH",2)
p(n,"gfH","fI",2)
p(n,"gfJ","fK",2)
p(n,"gfF","fG",2)
p(n,"gfL","fM",2)
p(n,"gfs","ft",2)
p(n,"giE","iF",2)
p(n,"giL","iM",2)
p(n,"gd5","fg",2)
p(n,"gd1","fa",2)
s(n=O.aY.prototype,"gbk",0,0,null,["$1","$0"],["E","bN"],3,0)
s(n,"gi9",0,0,null,["$1","$0"],["dB","ia"],3,0)
r(n,"ghb","hc",20)
r(n,"ghd","he",20)
s(O.cN.prototype,"gbk",0,0,null,["$1","$0"],["E","bN"],3,0)
s(X.e1.prototype,"gd_",0,0,null,["$1","$0"],["aN","f9"],3,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.O,null)
s(P.O,[H.lO,J.a,J.ax,P.eK,P.m,H.dR,P.aO,H.c5,H.d7,H.fN,H.j9,P.bH,H.cG,H.cD,H.f1,P.ay,H.hK,H.hM,H.hF,H.eL,H.jH,P.f8,P.jJ,P.aa,P.ev,P.b9,P.aq,P.et,P.iS,P.d1,P.iT,P.kk,P.bo,P.aE,P.ky,P.kh,P.d9,P.eJ,P.y,P.kq,P.hT,P.c2,P.kx,P.kw,P.M,P.aK,P.al,P.bG,P.io,P.ea,P.eC,P.ha,P.b,P.x,P.A,P.e5,P.ae,P.h,P.ac,P.cl,P.jn,P.ki,W.fQ,W.cC,W.E,W.dI,P.kl,P.fd,P.kc,P.P,O.a9,O.cO,E.fF,E.a2,E.ix,E.ef,Z.er,Z.es,Z.bE,Z.dw,Z.bJ,Z.br,D.fI,D.bI,D.C,O.kH,O.dl,O.kI,X.dx,X.dP,X.hI,X.hQ,X.aL,X.id,X.j5,X.en,D.dC,D.an,D.e2,D.e9,V.a4,V.X,V.h2,V.dV,V.aG,V.at,V.aH,V.e6,V.cb,V.W,V.a3,U.eo,U.ep,U.eq,M.dG,A.dt,A.fy,A.ad,A.aW,A.b0,A.b4,A.hY,A.ce,A.cf,A.ch,A.ei,A.jh,F.K,F.aF,F.by,F.ao,F.iG,F.iH,F.iI,F.J,F.jw,F.jx,F.jA,F.jB,O.bP,O.cN,O.hZ,T.j0,V.fu,V.bv,V.dT,V.iF,V.d0,V.eg,V.d4,V.j4,X.dy,X.ec,X.e1,V.fJ,V.iu,V.iJ])
s(J.a,[J.hE,J.dN,J.dO,J.bh,J.cM,J.bK,H.cS,H.bM,W.k,W.ft,W.c0,W.cB,W.be,W.bf,W.V,W.ew,W.fU,W.fV,W.ey,W.dF,W.eA,W.fX,W.p,W.eD,W.aX,W.hc,W.eF,W.bu,W.hP,W.i7,W.eM,W.eN,W.aZ,W.eO,W.eR,W.b_,W.eV,W.eX,W.b2,W.eY,W.b3,W.f2,W.aP,W.f6,W.j3,W.b6,W.f9,W.j7,W.js,W.ff,W.fh,W.fj,W.fl,W.fn,P.bj,P.eH,P.bm,P.eT,P.is,P.f3,P.bp,P.fb,P.fz,P.eu,P.du,P.e4,P.cc,P.e7,P.ed,P.ej,P.f_])
s(J.dO,[J.ip,J.ci,J.bL])
t(J.lN,J.bh)
s(J.cM,[J.dM,J.dL])
t(P.hO,P.eK)
s(P.hO,[H.ek,W.jQ,W.jP,P.h6])
t(H.ab,H.ek)
s(P.m,[H.h_,H.hU,H.jF])
s(P.aO,[H.hV,H.jG])
t(H.fO,H.fN)
s(P.bH,[H.ik,H.hH,H.jl,H.jb,H.fH,H.iD,P.fx,P.cW,P.aV,P.jm,P.jj,P.eb,P.fM,P.fT])
s(H.cD,[H.ly,H.iX,H.hG,H.kS,H.kT,H.kU,P.jM,P.jL,P.jN,P.jO,P.kp,P.ko,P.kz,P.kA,P.kM,P.jW,P.k3,P.k_,P.k0,P.k1,P.jY,P.k2,P.jX,P.k6,P.k7,P.k5,P.k4,P.iU,P.iV,P.kK,P.kf,P.ke,P.kg,P.hN,P.hS,P.fY,P.fZ,P.jr,P.jo,P.jp,P.jq,P.kr,P.ks,P.ku,P.kt,P.kC,P.kB,P.kD,P.kE,W.hd,W.he,W.i9,W.ib,W.iC,W.iR,W.jV,P.km,P.kN,P.h7,P.h8,P.fB,E.iy,E.iz,E.iA,E.j2,D.h3,D.h4,F.jD,F.jC,F.jy,F.jz,O.hq,O.hr,O.hB,O.hA,O.hC,O.hD,O.hw,O.hp,O.hi,O.hs,O.hv,O.hm,O.hn,O.hl,O.ho,O.hj,O.hk,O.ht,O.hu,O.hx,O.hy,O.hz,O.hh,O.hg,O.i1,O.i2,O.i3,O.i4,O.i5,O.i6,T.j1,V.fK,V.lw,V.iv,V.iL,V.iK,G.kW,G.kX,G.kY,G.l8,G.lj,G.ll,G.lm,G.ln,G.lo,G.lp,G.lq,G.kZ,G.l_,G.l0,G.l1,G.l2,G.l3,G.lr,G.ls,G.lt,G.l4,G.l5,G.l6,G.l7,G.l9,G.la,G.lb,G.lc,G.ld,G.le,G.lf,G.lg,G.lh,G.li,G.lk])
s(H.iX,[H.iP,H.cz])
t(H.jI,P.fx)
t(P.hR,P.ay)
t(H.Z,P.hR)
t(H.hL,H.h_)
t(H.dY,H.bM)
s(H.dY,[H.da,H.dc])
t(H.db,H.da)
t(H.cT,H.db)
t(H.dd,H.dc)
t(H.dZ,H.dd)
s(H.dZ,[H.ie,H.ig,H.ih,H.ii,H.ij,H.e_,H.cU])
t(P.jK,P.ev)
t(P.kd,P.ky)
t(P.kb,P.kh)
t(P.fe,P.hT)
t(P.el,P.fe)
s(P.c2,[P.fD,P.h0])
t(P.c4,P.iT)
s(P.c4,[P.fE,P.jv,P.ju])
t(P.jt,P.h0)
s(P.al,[P.G,P.n])
s(P.aV,[P.ca,P.hf])
t(P.jS,P.cl)
s(W.k,[W.I,W.h5,W.cJ,W.cP,W.b1,W.de,W.b5,W.aQ,W.dg,W.jE,W.d8,P.fC,P.c_])
s(W.I,[W.a5,W.bF])
s(W.a5,[W.w,P.v])
s(W.w,[W.fv,W.fw,W.c1,W.dD,W.h9,W.cK,W.cL,W.iE,W.bz])
s(W.be,[W.cE,W.fR,W.fS])
t(W.fP,W.bf)
t(W.cF,W.ew)
t(W.ez,W.ey)
t(W.dE,W.ez)
t(W.eB,W.eA)
t(W.fW,W.eB)
t(W.aN,W.c0)
t(W.eE,W.eD)
t(W.cH,W.eE)
t(W.eG,W.eF)
t(W.c6,W.eG)
t(W.bg,W.cJ)
s(W.p,[W.bQ,W.bn])
s(W.bQ,[W.bi,W.ar,W.b7])
t(W.i8,W.eM)
t(W.ia,W.eN)
t(W.eP,W.eO)
t(W.ic,W.eP)
t(W.eS,W.eR)
t(W.cV,W.eS)
t(W.eW,W.eV)
t(W.iq,W.eW)
t(W.iB,W.eX)
t(W.df,W.de)
t(W.iM,W.df)
t(W.eZ,W.eY)
t(W.iN,W.eZ)
t(W.iQ,W.f2)
t(W.f7,W.f6)
t(W.iY,W.f7)
t(W.dh,W.dg)
t(W.iZ,W.dh)
t(W.fa,W.f9)
t(W.j6,W.fa)
t(W.bs,W.ar)
t(W.fg,W.ff)
t(W.jR,W.fg)
t(W.ex,W.dF)
t(W.fi,W.fh)
t(W.k8,W.fi)
t(W.fk,W.fj)
t(W.eQ,W.fk)
t(W.fm,W.fl)
t(W.kj,W.fm)
t(W.fo,W.fn)
t(W.kn,W.fo)
t(W.jT,P.iS)
t(W.lZ,W.jT)
t(W.jU,P.d1)
t(P.f5,P.kl)
t(P.az,P.kc)
t(P.eI,P.eH)
t(P.hJ,P.eI)
t(P.eU,P.eT)
t(P.il,P.eU)
t(P.f4,P.f3)
t(P.iW,P.f4)
t(P.fc,P.fb)
t(P.j8,P.fc)
t(P.fA,P.eu)
t(P.im,P.c_)
t(P.f0,P.f_)
t(P.iO,P.f0)
s(E.fF,[Z.dv,A.d_,T.d3])
s(D.C,[D.c7,D.c8,D.F,O.it,X.ir])
s(X.ir,[X.dS,X.bw,X.cQ,X.eh])
s(O.a9,[D.dQ,U.cI])
s(D.fI,[U.fL,U.as,F.cd])
t(U.dA,U.as)
s(A.d_,[A.dK,A.dU])
s(A.ei,[A.aR,A.je,A.jf,A.jg,A.jc,A.ap,A.jd,A.a_,A.bR,A.ji,A.d6,A.aB,A.aC,A.cg])
s(O.bP,[O.dJ,O.aY])
s(O.cN,[O.hW,O.hX,O.bk])
s(O.bk,[O.i_,O.i0])
t(T.ee,T.d3)
t(T.j_,T.ee)
s(V.dT,[V.bx,V.d5])
t(X.hb,X.ec)
u(H.ek,H.d7)
u(H.da,P.y)
u(H.db,H.c5)
u(H.dc,P.y)
u(H.dd,H.c5)
u(P.eK,P.y)
u(P.fe,P.kq)
u(W.ew,W.fQ)
u(W.ey,P.y)
u(W.ez,W.E)
u(W.eA,P.y)
u(W.eB,W.E)
u(W.eD,P.y)
u(W.eE,W.E)
u(W.eF,P.y)
u(W.eG,W.E)
u(W.eM,P.ay)
u(W.eN,P.ay)
u(W.eO,P.y)
u(W.eP,W.E)
u(W.eR,P.y)
u(W.eS,W.E)
u(W.eV,P.y)
u(W.eW,W.E)
u(W.eX,P.ay)
u(W.de,P.y)
u(W.df,W.E)
u(W.eY,P.y)
u(W.eZ,W.E)
u(W.f2,P.ay)
u(W.f6,P.y)
u(W.f7,W.E)
u(W.dg,P.y)
u(W.dh,W.E)
u(W.f9,P.y)
u(W.fa,W.E)
u(W.ff,P.y)
u(W.fg,W.E)
u(W.fh,P.y)
u(W.fi,W.E)
u(W.fj,P.y)
u(W.fk,W.E)
u(W.fl,P.y)
u(W.fm,W.E)
u(W.fn,P.y)
u(W.fo,W.E)
u(P.eH,P.y)
u(P.eI,W.E)
u(P.eT,P.y)
u(P.eU,W.E)
u(P.f3,P.y)
u(P.f4,W.E)
u(P.fb,P.y)
u(P.fc,W.E)
u(P.eu,P.ay)
u(P.f_,P.y)
u(P.f0,W.E)})()
var v={mangledGlobalNames:{n:"int",G:"double",al:"num",h:"String",M:"bool",A:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.A},{func:1,ret:P.A,args:[P.M]},{func:1,ret:F.ao,args:[F.ao]},{func:1,ret:-1,opt:[D.C]},{func:1,ret:P.A,args:[F.K]},{func:1,ret:-1,args:[D.C]},{func:1,ret:P.A,args:[F.J]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ar]},{func:1,ret:[P.aa,P.A]},{func:1,ret:-1,args:[P.n,[P.m,E.a2]]},{func:1,ret:P.A,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:P.A,args:[W.p]},{func:1,ret:P.A,args:[D.C]},{func:1,ret:-1,args:[W.p]},{func:1,ret:-1,args:[W.b7]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:-1,args:[P.n,[P.m,D.an]]},{func:1,ret:-1,args:[P.n,[P.m,V.aG]]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,args:[,]},{func:1,ret:P.A,args:[{func:1,ret:-1,args:[D.C]}]},{func:1,ret:-1,args:[W.bi]},{func:1,ret:P.A,args:[,]},{func:1,ret:P.G},{func:1,ret:-1,args:[P.n,[P.m,U.as]]},{func:1,ret:P.h,args:[P.n]},{func:1,ret:P.A,args:[P.al]},{func:1,ret:W.a5,args:[W.I]},{func:1,args:[P.h]},{func:1,ret:P.A,args:[P.h,,]},{func:1,ret:-1,args:[,]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:P.P,args:[P.n]},{func:1,ret:P.A,args:[,P.ae]},{func:1,ret:P.A,args:[P.n,,]},{func:1,ret:P.P,args:[,,]},{func:1,ret:-1,args:[W.bs]},{func:1,ret:P.h,args:[W.bg]},{func:1,ret:P.M,args:[[P.m,D.an]]},{func:1,ret:P.A,args:[,],opt:[P.ae]},{func:1,ret:P.A,args:[W.bn]},{func:1,args:[,P.h]},{func:1,ret:[P.aq,,],args:[,]},{func:1,ret:P.A,args:[{func:1,ret:-1}]},{func:1,args:[W.p]},{func:1,ret:P.A,args:[P.h]},{func:1,ret:[P.x,P.h,P.h],args:[[P.x,P.h,P.h],P.h]},{func:1,ret:-1,args:[F.J,F.J]},{func:1,ret:P.A,args:[F.aF]},{func:1,ret:P.M,args:[W.I]},{func:1,ret:-1,args:[P.h,P.n]},{func:1,ret:P.n,args:[A.aW,A.aW]},{func:1,ret:P.n,args:[A.b0,A.b0]},{func:1,ret:P.n,args:[A.b4,A.b4]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:P.A,args:[P.bo]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:E.a2,args:[E.a2]},{func:1,ret:P.A,args:[E.a2]},{func:1,ret:[P.aa,,],args:[P.h]},{func:1,ret:F.ao,args:[F.ao],named:{color:V.X}},{func:1,ret:-1,args:[P.O],opt:[P.ae]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.k=W.c1.prototype
C.J=W.bg.prototype
C.K=J.a.prototype
C.a=J.bh.prototype
C.L=J.dL.prototype
C.d=J.dM.prototype
C.j=J.dN.prototype
C.e=J.cM.prototype
C.b=J.bK.prototype
C.M=J.bL.prototype
C.S=W.cV.prototype
C.w=J.ip.prototype
C.c=P.cc.prototype
C.p=J.ci.prototype
C.x=W.bs.prototype
C.y=W.d8.prototype
C.T=new P.fE()
C.z=new P.fD()
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.A=function() {
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
C.F=function(getTagFallback) {
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
C.B=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.C=function(hooks) {
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
C.E=function(hooks) {
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
C.D=function(hooks) {
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
C.r=function(hooks) { return hooks; }

C.G=new P.io()
C.h=new P.jt()
C.H=new P.jv()
C.f=new P.kd()
C.o=new P.bG(0)
C.I=new P.bG(5e6)
C.t=H.f(u([127,2047,65535,1114111]),[P.n])
C.l=H.f(u([0,0,32776,33792,1,10240,0,0]),[P.n])
C.m=H.f(u([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.n=H.f(u([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.O=H.f(u([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.P=H.f(u([0,0,65498,45055,65535,34815,65534,18431]),[P.n])
C.i=H.f(u([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.u=H.f(u([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.Q=H.f(u([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.v=H.f(u([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.N=H.f(u([]),[P.h])
C.R=new H.fO(0,{},C.N,[P.h,P.h])})();(function staticFields(){$.bd=0
$.cA=null
$.mj=null
$.m4=!1
$.ns=null
$.nl=null
$.ny=null
$.kO=null
$.kV=null
$.ma=null
$.co=null
$.dj=null
$.dk=null
$.m5=!1
$.T=C.f
$.aI=[]
$.nh=null
$.mz=null
$.mD=null
$.cX=null
$.mJ=null
$.mM=null
$.mX=null
$.n0=null
$.mZ=null
$.n_=null
$.mY=null
$.mC=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"qp","nD",function(){return H.nq("_$dart_dartClosure")})
u($,"qq","me",function(){return H.nq("_$dart_js")})
u($,"qu","nE",function(){return H.bq(H.ja({
toString:function(){return"$receiver$"}}))})
u($,"qv","nF",function(){return H.bq(H.ja({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"qw","nG",function(){return H.bq(H.ja(null))})
u($,"qx","nH",function(){return H.bq(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qA","nK",function(){return H.bq(H.ja(void 0))})
u($,"qB","nL",function(){return H.bq(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qz","nJ",function(){return H.bq(H.mT(null))})
u($,"qy","nI",function(){return H.bq(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qD","nN",function(){return H.bq(H.mT(void 0))})
u($,"qC","nM",function(){return H.bq(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qT","mf",function(){return P.p0()})
u($,"qF","nO",function(){return P.oY()})
u($,"qU","nS",function(){return H.ou(H.cn(H.f([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))})
u($,"qV","nT",function(){return P.lT("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qW","nU",function(){return P.po()})
u($,"qM","nR",function(){return Z.aS(0)})
u($,"qG","nP",function(){return Z.aS(511)})
u($,"qO","bc",function(){return Z.aS(1)})
u($,"qN","bb",function(){return Z.aS(2)})
u($,"qI","ba",function(){return Z.aS(4)})
u($,"qP","bD",function(){return Z.aS(8)})
u($,"qQ","bY",function(){return Z.aS(16)})
u($,"qJ","bX",function(){return Z.aS(32)})
u($,"qK","dq",function(){return Z.aS(64)})
u($,"qL","nQ",function(){return Z.aS(96)})
u($,"qR","cy",function(){return Z.aS(128)})
u($,"qH","bC",function(){return Z.aS(256)})
u($,"qo","nC",function(){return new V.h2(1e-9)})
u($,"qn","N",function(){return $.nC()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cS,DataView:H.bM,ArrayBufferView:H.bM,Float32Array:H.cT,Float64Array:H.cT,Int16Array:H.ie,Int32Array:H.ig,Int8Array:H.ih,Uint16Array:H.ii,Uint32Array:H.ij,Uint8ClampedArray:H.e_,CanvasPixelArray:H.e_,Uint8Array:H.cU,HTMLAudioElement:W.w,HTMLBRElement:W.w,HTMLBaseElement:W.w,HTMLBodyElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLLIElement:W.w,HTMLLabelElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMediaElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTableElement:W.w,HTMLTableRowElement:W.w,HTMLTableSectionElement:W.w,HTMLTemplateElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLVideoElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,AccessibleNodeList:W.ft,HTMLAnchorElement:W.fv,HTMLAreaElement:W.fw,Blob:W.c0,HTMLCanvasElement:W.c1,CanvasRenderingContext2D:W.cB,CDATASection:W.bF,CharacterData:W.bF,Comment:W.bF,ProcessingInstruction:W.bF,Text:W.bF,CSSNumericValue:W.cE,CSSUnitValue:W.cE,CSSPerspective:W.fP,CSSCharsetRule:W.V,CSSConditionRule:W.V,CSSFontFaceRule:W.V,CSSGroupingRule:W.V,CSSImportRule:W.V,CSSKeyframeRule:W.V,MozCSSKeyframeRule:W.V,WebKitCSSKeyframeRule:W.V,CSSKeyframesRule:W.V,MozCSSKeyframesRule:W.V,WebKitCSSKeyframesRule:W.V,CSSMediaRule:W.V,CSSNamespaceRule:W.V,CSSPageRule:W.V,CSSRule:W.V,CSSStyleRule:W.V,CSSSupportsRule:W.V,CSSViewportRule:W.V,CSSStyleDeclaration:W.cF,MSStyleCSSProperties:W.cF,CSS2Properties:W.cF,CSSImageValue:W.be,CSSKeywordValue:W.be,CSSPositionValue:W.be,CSSResourceValue:W.be,CSSURLImageValue:W.be,CSSStyleValue:W.be,CSSMatrixComponent:W.bf,CSSRotation:W.bf,CSSScale:W.bf,CSSSkew:W.bf,CSSTranslation:W.bf,CSSTransformComponent:W.bf,CSSTransformValue:W.fR,CSSUnparsedValue:W.fS,DataTransferItemList:W.fU,HTMLDivElement:W.dD,DOMException:W.fV,ClientRectList:W.dE,DOMRectList:W.dE,DOMRectReadOnly:W.dF,DOMStringList:W.fW,DOMTokenList:W.fX,Element:W.a5,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.aN,FileList:W.cH,FileWriter:W.h5,HTMLFormElement:W.h9,Gamepad:W.aX,History:W.hc,HTMLCollection:W.c6,HTMLFormControlsCollection:W.c6,HTMLOptionsCollection:W.c6,XMLHttpRequest:W.bg,XMLHttpRequestUpload:W.cJ,XMLHttpRequestEventTarget:W.cJ,ImageData:W.bu,HTMLImageElement:W.cK,HTMLInputElement:W.cL,KeyboardEvent:W.bi,Location:W.hP,MediaList:W.i7,MessagePort:W.cP,MIDIInputMap:W.i8,MIDIOutputMap:W.ia,MimeType:W.aZ,MimeTypeArray:W.ic,PointerEvent:W.ar,MouseEvent:W.ar,DragEvent:W.ar,Document:W.I,DocumentFragment:W.I,HTMLDocument:W.I,ShadowRoot:W.I,XMLDocument:W.I,Attr:W.I,DocumentType:W.I,Node:W.I,NodeList:W.cV,RadioNodeList:W.cV,Plugin:W.b_,PluginArray:W.iq,ProgressEvent:W.bn,ResourceProgressEvent:W.bn,RTCStatsReport:W.iB,HTMLSelectElement:W.iE,SourceBuffer:W.b1,SourceBufferList:W.iM,SpeechGrammar:W.b2,SpeechGrammarList:W.iN,SpeechRecognitionResult:W.b3,Storage:W.iQ,CSSStyleSheet:W.aP,StyleSheet:W.aP,HTMLTableCellElement:W.bz,HTMLTableDataCellElement:W.bz,HTMLTableHeaderCellElement:W.bz,TextTrack:W.b5,TextTrackCue:W.aQ,VTTCue:W.aQ,TextTrackCueList:W.iY,TextTrackList:W.iZ,TimeRanges:W.j3,Touch:W.b6,TouchEvent:W.b7,TouchList:W.j6,TrackDefaultList:W.j7,CompositionEvent:W.bQ,FocusEvent:W.bQ,TextEvent:W.bQ,UIEvent:W.bQ,URL:W.js,VideoTrackList:W.jE,WheelEvent:W.bs,Window:W.d8,DOMWindow:W.d8,CSSRuleList:W.jR,ClientRect:W.ex,DOMRect:W.ex,GamepadList:W.k8,NamedNodeMap:W.eQ,MozNamedAttrMap:W.eQ,SpeechRecognitionResultList:W.kj,StyleSheetList:W.kn,SVGLength:P.bj,SVGLengthList:P.hJ,SVGNumber:P.bm,SVGNumberList:P.il,SVGPointList:P.is,SVGStringList:P.iW,SVGAElement:P.v,SVGAnimateElement:P.v,SVGAnimateMotionElement:P.v,SVGAnimateTransformElement:P.v,SVGAnimationElement:P.v,SVGCircleElement:P.v,SVGClipPathElement:P.v,SVGDefsElement:P.v,SVGDescElement:P.v,SVGDiscardElement:P.v,SVGEllipseElement:P.v,SVGFEBlendElement:P.v,SVGFEColorMatrixElement:P.v,SVGFEComponentTransferElement:P.v,SVGFECompositeElement:P.v,SVGFEConvolveMatrixElement:P.v,SVGFEDiffuseLightingElement:P.v,SVGFEDisplacementMapElement:P.v,SVGFEDistantLightElement:P.v,SVGFEFloodElement:P.v,SVGFEFuncAElement:P.v,SVGFEFuncBElement:P.v,SVGFEFuncGElement:P.v,SVGFEFuncRElement:P.v,SVGFEGaussianBlurElement:P.v,SVGFEImageElement:P.v,SVGFEMergeElement:P.v,SVGFEMergeNodeElement:P.v,SVGFEMorphologyElement:P.v,SVGFEOffsetElement:P.v,SVGFEPointLightElement:P.v,SVGFESpecularLightingElement:P.v,SVGFESpotLightElement:P.v,SVGFETileElement:P.v,SVGFETurbulenceElement:P.v,SVGFilterElement:P.v,SVGForeignObjectElement:P.v,SVGGElement:P.v,SVGGeometryElement:P.v,SVGGraphicsElement:P.v,SVGImageElement:P.v,SVGLineElement:P.v,SVGLinearGradientElement:P.v,SVGMarkerElement:P.v,SVGMaskElement:P.v,SVGMetadataElement:P.v,SVGPathElement:P.v,SVGPatternElement:P.v,SVGPolygonElement:P.v,SVGPolylineElement:P.v,SVGRadialGradientElement:P.v,SVGRectElement:P.v,SVGScriptElement:P.v,SVGSetElement:P.v,SVGStopElement:P.v,SVGStyleElement:P.v,SVGElement:P.v,SVGSVGElement:P.v,SVGSwitchElement:P.v,SVGSymbolElement:P.v,SVGTSpanElement:P.v,SVGTextContentElement:P.v,SVGTextElement:P.v,SVGTextPathElement:P.v,SVGTextPositioningElement:P.v,SVGTitleElement:P.v,SVGUseElement:P.v,SVGViewElement:P.v,SVGGradientElement:P.v,SVGComponentTransferFunctionElement:P.v,SVGFEDropShadowElement:P.v,SVGMPathElement:P.v,SVGTransform:P.bp,SVGTransformList:P.j8,AudioBuffer:P.fz,AudioParamMap:P.fA,AudioTrackList:P.fC,AudioContext:P.c_,webkitAudioContext:P.c_,BaseAudioContext:P.c_,OfflineAudioContext:P.im,WebGLBuffer:P.du,WebGLProgram:P.e4,WebGL2RenderingContext:P.cc,WebGLShader:P.e7,WebGLTexture:P.ed,WebGLUniformLocation:P.ej,SQLResultSetRowList:P.iO})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,ProgressEvent:true,ResourceProgressEvent:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dY.$nativeSuperclassTag="ArrayBufferView"
H.da.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
H.cT.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.dZ.$nativeSuperclassTag="ArrayBufferView"
W.de.$nativeSuperclassTag="EventTarget"
W.df.$nativeSuperclassTag="EventTarget"
W.dg.$nativeSuperclassTag="EventTarget"
W.dh.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(G.nv,[])
else G.nv([])})})()
//# sourceMappingURL=test.dart.js.map
