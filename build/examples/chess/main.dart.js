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
a[c]=function(){a[c]=function(){H.p9(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lB"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lB"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lB(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={l8:function l8(){},
ns:function(){return new P.el("No element")},
ei:function(a,b,c,d,e){if(c-b<=32)H.nW(a,b,c,d,e)
else H.nV(a,b,c,d,e)},
nW:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.d(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.d(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.ag()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.d(a,q)
C.a.n(a,s,a[q])
s=q}C.a.n(a,s,t)}},
nV:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.e.aa(a4-a3+1,6),d=a3+e,c=a4-e,b=C.e.aa(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.ag()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.ag()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.ag()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.ag()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.ag()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.ag()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.ag()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.ag()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.ag()
if(a1>0){p=q
q=r
r=p}C.a.n(a2,d,u)
C.a.n(a2,b,s)
C.a.n(a2,c,q)
if(a3<0||a3>=a2.length)return H.d(a2,a3)
C.a.n(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.d(a2,a4)
C.a.n(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.P(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.a_()
if(k<0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.ag()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.d(a2,o)
C.a.n(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.d(a2,n)
C.a.n(a2,o,a2[n])
C.a.n(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.d(a2,n)
C.a.n(a2,m,a2[n])
C.a.n(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.a_()
if(g<0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.ag()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.ag()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a_()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.d(a2,o)
C.a.n(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.d(a2,n)
C.a.n(a2,o,a2[n])
C.a.n(a2,n,l)
o=i}else{if(n>=a1)return H.d(a2,n)
C.a.n(a2,m,a2[n])
C.a.n(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.d(a2,a1)
C.a.n(a2,a3,a2[a1])
C.a.n(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.d(a2,a1)
C.a.n(a2,a4,a2[a1])
C.a.n(a2,a1,r)
H.ei(a2,a3,o-2,a5,a6)
H.ei(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.d(a2,o)
if(!J.P(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.d(a2,n)
if(!J.P(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a_()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.d(a2,o)
C.a.n(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.d(a2,n)
C.a.n(a2,o,a2[n])
C.a.n(a2,n,l)
o=i}else{if(n>=a1)return H.d(a2,n)
C.a.n(a2,m,a2[n])
C.a.n(a2,n,l)}n=j
break}}}H.ei(a2,o,n,a5,a6)}else H.ei(a2,o,n,a5,a6)},
a9:function a9(a){this.a=a},
h2:function h2(){},
dZ:function dZ(a,b,c){var _=this
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
jI:function jI(a,b,c){this.a=a
this.b=b
this.$ti=c},
jJ:function jJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
cf:function cf(){},
es:function es(){},
er:function er(){},
cy:function(a){var u,t=H.pa(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oT:function(a){return v.types[H.a7(a)]},
oY:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.X(a).$iK},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aJ(a)
if(typeof u!=="string")throw H.h(H.aU(a))
return u},
cY:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nP:function(a,b){var u,t
if(typeof a!=="string")H.y(H.aU(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.d(u,3)
t=H.ad(u[3])
if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return},
nO:function(a){var u,t
if(typeof a!=="string")H.y(H.aU(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.kV(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
cZ:function(a){return H.nG(a)+H.lz(H.c3(a),0,null)},
nG:function(a){var u,t,s,r,q,p,o,n=J.X(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.E||!!n.$icp){r=C.n(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cy(t.length>1&&C.c.b0(t,0)===36?C.c.aY(t,1):t)},
md:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
nR:function(a){var u,t,s,r=H.b([],[P.t])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.aU(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.bC(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.h(H.aU(s))}return H.md(r)},
me:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.aU(s))
if(s<0)throw H.h(H.aU(s))
if(s>65535)return H.nR(a)}return H.md(a)},
nQ:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.bC(u,10))>>>0,56320|u&1023)}throw H.h(P.bl(a,0,1114111,null,null))},
ci:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nN:function(a){var u=H.ci(a).getFullYear()+0
return u},
nL:function(a){var u=H.ci(a).getMonth()+1
return u},
nH:function(a){var u=H.ci(a).getDate()+0
return u},
nI:function(a){var u=H.ci(a).getHours()+0
return u},
nK:function(a){var u=H.ci(a).getMinutes()+0
return u},
nM:function(a){var u=H.ci(a).getSeconds()+0
return u},
nJ:function(a){var u=H.ci(a).getMilliseconds()+0
return u},
e:function(a){throw H.h(H.aU(a))},
d:function(a,b){if(a==null)J.b7(a)
throw H.h(H.cv(a,b))},
cv:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aV(!0,b,s,null)
u=H.a7(J.b7(a))
if(!(b<0)){if(typeof u!=="number")return H.e(u)
t=b>=u}else t=!0
if(t)return P.Z(b,a,s,null,u)
return P.im(b,s)},
oL:function(a,b,c){var u="Invalid value"
if(a>c)return new P.cj(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.cj(a,c,!0,b,"end",u)
return new P.aV(!0,b,"end",null)},
aU:function(a){return new P.aV(!0,a,null,null)},
oH:function(a){if(typeof a!=="number")throw H.h(H.aU(a))
return a},
h:function(a){var u
if(a==null)a=new P.cV()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mV})
u.name=""}else u.toString=H.mV
return u},
mV:function(){return J.aJ(this.dartException)},
y:function(a){throw H.h(a)},
x:function(a){throw H.h(P.cI(a))},
bs:function(a){var u,t,s,r,q,p
a=H.mT(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.m])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.jf(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
jg:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mq:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m7:function(a,b){return new H.i6(a,b==null?null:b.method)},
l9:function(a,b){var u=b==null,t=u?null:b.method
return new H.ho(a,t,u?null:b.receiver)},
ax:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kR(a)
if(a==null)return
if(a instanceof H.cL)return f.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.bC(t,16)&8191)===10)switch(s){case 438:return f.$1(H.l9(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.m7(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mY()
q=$.mZ()
p=$.n_()
o=$.n0()
n=$.n3()
m=$.n4()
l=$.n2()
$.n1()
k=$.n6()
j=$.n5()
i=r.at(u)
if(i!=null)return f.$1(H.l9(H.ad(u),i))
else{i=q.at(u)
if(i!=null){i.method="call"
return f.$1(H.l9(H.ad(u),i))}else{i=p.at(u)
if(i==null){i=o.at(u)
if(i==null){i=n.at(u)
if(i==null){i=m.at(u)
if(i==null){i=l.at(u)
if(i==null){i=o.at(u)
if(i==null){i=k.at(u)
if(i==null){i=j.at(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.m7(H.ad(u),i))}}return f.$1(new H.jq(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ek()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aV(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ek()
return a},
c4:function(a){var u
if(a instanceof H.cL)return a.b
if(a==null)return new H.f5(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f5(a)},
oQ:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
oX:function(a,b,c,d,e,f){H.k(a,"$il3")
switch(H.a7(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.r("Unsupported number of arguments for wrapped closure"))},
cu:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oX)
a.$identity=u
return u},
nl:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.iQ().constructor.prototype):Object.create(new H.cD(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b8
if(typeof t!=="number")return t.D()
$.b8=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lR(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.nh(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lR(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
nh:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oT,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lQ:H.kY
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.h("Error in functionType of tearoff")},
ni:function(a,b,c,d){var u=H.kY
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lR:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nk(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.ni(t,!r,u,b)
if(t===0){r=$.b8
if(typeof r!=="number")return r.D()
$.b8=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cE
return new Function(r+H.i(q==null?$.cE=H.fJ("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b8
if(typeof r!=="number")return r.D()
$.b8=r+1
o+=r
r="return function("+o+"){return this."
q=$.cE
return new Function(r+H.i(q==null?$.cE=H.fJ("self"):q)+"."+H.i(u)+"("+o+");}")()},
nj:function(a,b,c,d){var u=H.kY,t=H.lQ
switch(b?-1:a){case 0:throw H.h(H.nT("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nk:function(a,b){var u,t,s,r,q,p,o,n=$.cE
if(n==null)n=$.cE=H.fJ("self")
u=$.lP
if(u==null)u=$.lP=H.fJ("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nj(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.b8
if(typeof u!=="number")return u.D()
$.b8=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.b8
if(typeof u!=="number")return u.D()
$.b8=u+1
return new Function(n+u+"}")()},
lB:function(a,b,c,d,e,f,g){return H.nl(a,b,c,d,!!e,!!f,g)},
kY:function(a){return a.a},
lQ:function(a){return a.c},
fJ:function(a){var u,t,s,r=new H.cD("self","target","receiver","name"),q=J.l5(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
D:function(a){if(a==null)H.oD("boolean expression must not be null")
return a},
ad:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.b3(a,"String"))},
q3:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.b3(a,"double"))},
mQ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.b3(a,"num"))},
mJ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.b3(a,"bool"))},
a7:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.b3(a,"int"))},
lH:function(a,b){throw H.h(H.b3(a,H.cy(H.ad(b).substring(2))))},
p3:function(a,b){throw H.h(H.ng(a,H.cy(H.ad(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.X(a)[b])return a
H.lH(a,b)},
q:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.X(a)[b]
else u=!0
if(u)return a
H.p3(a,b)},
q6:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.X(a)[b])return a
H.lH(a,b)},
q5:function(a){if(a==null)return a
if(!!J.X(a).$ic)return a
throw H.h(H.b3(a,"List<dynamic>"))},
oZ:function(a,b){var u
if(a==null)return a
u=J.X(a)
if(!!u.$ic)return a
if(u[b])return a
H.lH(a,b)},
mK:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a7(u)]
else return a.$S()}return},
fr:function(a,b){var u
if(typeof a=="function")return!0
u=H.mK(J.X(a))
if(u==null)return!1
return H.my(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lw)return a
$.lw=!0
try{if(H.fr(a,b))return a
u=H.kM(b)
t=H.b3(a,u)
throw H.h(t)}finally{$.lw=!1}},
dt:function(a,b){if(a!=null&&!H.lA(a,b))H.y(H.b3(a,H.kM(b)))
return a},
b3:function(a,b){return new H.jh("TypeError: "+P.dP(a)+": type '"+H.i(H.mE(a))+"' is not a subtype of type '"+b+"'")},
ng:function(a,b){return new H.fK("CastError: "+P.dP(a)+": type '"+H.i(H.mE(a))+"' is not a subtype of type '"+b+"'")},
mE:function(a){var u,t=J.X(a)
if(!!t.$icG){u=H.mK(t)
if(u!=null)return H.kM(u)
return"Closure"}return H.cZ(a)},
oD:function(a){throw H.h(new H.jL(a))},
p9:function(a){throw H.h(new P.fS(a))},
nT:function(a){return new H.iy(a)},
mL:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
c3:function(a){if(a==null)return
return a.$ti},
q4:function(a,b,c){return H.cx(a["$a"+H.i(c)],H.c3(b))},
du:function(a,b,c,d){var u=H.cx(a["$a"+H.i(c)],H.c3(b))
return u==null?null:u[d]},
aH:function(a,b,c){var u=H.cx(a["$a"+H.i(b)],H.c3(a))
return u==null?null:u[c]},
z:function(a,b){var u=H.c3(a)
return u==null?null:u[b]},
kM:function(a){return H.c2(a,null)},
c2:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cy(a[0].name)+H.lz(a,1,b)
if(typeof a=="function")return H.cy(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a7(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.i(b[t])}if('func' in a)return H.oc(a,b)
if('futureOr' in a)return"FutureOr<"+H.c2("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oc:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.m])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.c.D(p,a0[m])
l=u[q]
if(l!=null&&l!==P.O)p+=" extends "+H.c2(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.c2(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.c2(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.c2(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oP(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.ad(n[g])
i=i+h+H.c2(d[c],a0)+(" "+H.i(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lz:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.bY("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.c2(p,c)}return"<"+u.i(0)+">"},
cx:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ds:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.c3(a)
t=J.X(a)
if(t[b]==null)return!1
return H.mH(H.cx(t[d],u),null,c,null)},
l:function(a,b,c,d){if(a==null)return a
if(H.ds(a,b,c,d))return a
throw H.h(H.b3(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cy(b.substring(2))+H.lz(c,0,null),v.mangledGlobalNames)))},
mH:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aT(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aT(a[t],b,c[t],d))return!1
return!0},
q1:function(a,b,c){return a.apply(b,H.cx(J.X(b)["$a"+H.i(c)],H.c3(b)))},
mO:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="O"||a.name==="J"||a===-1||a===-2||H.mO(u)}return!1},
lA:function(a,b){var u,t
if(a==null)return b==null||b.name==="O"||b.name==="J"||b===-1||b===-2||H.mO(b)
if(b==null||b===-1||b.name==="O"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lA(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fr(a,b)}u=J.X(a).constructor
t=H.c3(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aT(u,null,b,null)},
G:function(a,b){if(a!=null&&!H.lA(a,b))throw H.h(H.b3(a,H.kM(b)))
return a},
aT:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="O"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="O"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aT(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="J")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aT("type" in a?a.type:l,b,s,d)
else if(H.aT(a,b,s,d))return!0
else{if(!('$i'+"aK" in t.prototype))return!1
r=t.prototype["$a"+"aK"]
q=H.cx(r,u?a.slice(1):l)
return H.aT(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.my(a,b,c,d)
if('func' in a)return c.name==="l3"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mH(H.cx(m,u),b,p,d)},
my:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.p1(h,b,g,d)},
p1:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aT(c[s],d,a[s],b))return!1}return!0},
q2:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
p_:function(a){var u,t,s,r,q=H.ad($.mN.$1(a)),p=$.kD[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kJ[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.ad($.mG.$2(a,q))
if(q!=null){p=$.kD[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kJ[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kL(u)
$.kD[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kJ[q]=u
return u}if(s==="-"){r=H.kL(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mR(a,u)
if(s==="*")throw H.h(P.mr(q))
if(v.leafTags[q]===true){r=H.kL(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mR(a,u)},
mR:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lG(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kL:function(a){return J.lG(a,!1,null,!!a.$iK)},
p0:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kL(u)
else return J.lG(u,c,null,null)},
oV:function(){if(!0===$.lE)return
$.lE=!0
H.oW()},
oW:function(){var u,t,s,r,q,p,o,n
$.kD=Object.create(null)
$.kJ=Object.create(null)
H.oU()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mS.$1(q)
if(p!=null){o=H.p0(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oU:function(){var u,t,s,r,q,p,o=C.u()
o=H.ct(C.v,H.ct(C.w,H.ct(C.o,H.ct(C.o,H.ct(C.x,H.ct(C.y,H.ct(C.z(C.n),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mN=new H.kG(r)
$.mG=new H.kH(q)
$.mS=new H.kI(p)},
ct:function(a,b){return a(b)||b},
m0:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.h(P.l1("Illegal RegExp pattern ("+String(p)+")",a))},
p7:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oO:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mT:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
mU:function(a,b,c){var u=H.p8(a,b,c)
return u},
p8:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mT(b),'g'),H.oO(c))},
jf:function jf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i6:function i6(a,b){this.a=a
this.b=b},
ho:function ho(a,b,c){this.a=a
this.b=b
this.c=c},
jq:function jq(a){this.a=a},
cL:function cL(a,b){this.a=a
this.b=b},
kR:function kR(a){this.a=a},
f5:function f5(a){this.a=a
this.b=null},
cG:function cG(){},
iZ:function iZ(){},
iQ:function iQ(){},
cD:function cD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jh:function jh(a){this.a=a},
fK:function fK(a){this.a=a},
iy:function iy(a){this.a=a},
jL:function jL(a){this.a=a},
a1:function a1(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hn:function hn(a){this.a=a},
hy:function hy(a,b){this.a=a
this.b=b
this.c=null},
dY:function dY(a,b){this.a=a
this.$ti=b},
hz:function hz(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
hm:function hm(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eP:function eP(a){this.b=a},
jK:function jK(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dn:function(a){return a},
c1:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.cv(b,a))},
ob:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.oL(a,b,c))
return b},
cT:function cT(){},
e5:function e5(){},
cS:function cS(){},
e6:function e6(){},
i0:function i0(){},
i1:function i1(){},
i2:function i2(){},
i3:function i3(){},
i4:function i4(){},
e7:function e7(){},
i5:function i5(){},
df:function df(){},
dg:function dg(){},
dh:function dh(){},
di:function di(){},
oP:function(a){return J.lZ(a?Object.keys(a):[],null)},
pa:function(a){return v.mangledGlobalNames[a]},
p2:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lG:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kF:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lE==null){H.oV()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.mr("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lI()]
if(r!=null)return r
r=H.p_(a)
if(r!=null)return r
if(typeof a=="function")return C.F
u=Object.getPrototypeOf(a)
if(u==null)return C.q
if(u===Object.prototype)return C.q
if(typeof s=="function"){Object.defineProperty(s,$.lI(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
nt:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.kW(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.bl(a,0,4294967295,"length",null))
return J.lZ(new Array(a),b)},
lZ:function(a,b){return J.l5(H.b(a,[b]))},
l5:function(a){a.fixed$length=Array
return a},
m_:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
nu:function(a,b){var u,t
for(u=a.length;b<u;){t=C.c.b0(a,b)
if(t!==32&&t!==13&&!J.m_(t))break;++b}return b},
l6:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.c.aJ(a,u)
if(t!==32&&t!==13&&!J.m_(t))break}return b},
X:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dT.prototype
return J.dS.prototype}if(typeof a=="string")return J.bV.prototype
if(a==null)return J.dU.prototype
if(typeof a=="boolean")return J.hl.prototype
if(a.constructor==Array)return J.aX.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bW.prototype
return a}if(a instanceof P.O)return a
return J.kF(a)},
lC:function(a){if(typeof a=="string")return J.bV.prototype
if(a==null)return a
if(a.constructor==Array)return J.aX.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bW.prototype
return a}if(a instanceof P.O)return a
return J.kF(a)},
lD:function(a){if(a==null)return a
if(a.constructor==Array)return J.aX.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bW.prototype
return a}if(a instanceof P.O)return a
return J.kF(a)},
oR:function(a){if(typeof a=="number")return J.cP.prototype
if(typeof a=="string")return J.bV.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.cp.prototype
return a},
kE:function(a){if(typeof a=="string")return J.bV.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.cp.prototype
return a},
oS:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bW.prototype
return a}if(a instanceof P.O)return a
return J.kF(a)},
P:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.X(a).m(a,b)},
R:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.oY(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.lC(a).j(a,b)},
nb:function(a,b,c,d){return J.oS(a).iY(a,b,c,d)},
kU:function(a,b){return J.oR(a).bH(a,b)},
lL:function(a,b){return J.lD(a).H(a,b)},
lM:function(a,b){return J.lD(a).M(a,b)},
c8:function(a){return J.X(a).gJ(a)},
cC:function(a){return J.lD(a).gU(a)},
b7:function(a){return J.lC(a).gl(a)},
lN:function(a,b){return J.kE(a).js(a,b)},
lO:function(a,b,c){return J.kE(a).br(a,b,c)},
aJ:function(a){return J.X(a).i(a)},
kV:function(a){return J.kE(a).eM(a)},
a:function a(){},
hl:function hl(){},
dU:function dU(){},
dV:function dV(){},
id:function id(){},
cp:function cp(){},
bW:function bW(){},
aX:function aX(a){this.$ti=a},
l7:function l7(a){this.$ti=a},
at:function at(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cP:function cP(){},
dT:function dT(){},
dS:function dS(){},
bV:function bV(){}},P={
o2:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oE()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cu(new P.jP(s),1)).observe(u,{childList:true})
return new P.jO(s,u,t)}else if(self.setImmediate!=null)return P.oF()
return P.oG()},
o3:function(a){self.scheduleImmediate(H.cu(new P.jQ(H.n(a,{func:1,ret:-1})),0))},
o4:function(a){self.setImmediate(H.cu(new P.jR(H.n(a,{func:1,ret:-1})),0))},
o5:function(a){P.lq(C.i,H.n(a,{func:1,ret:-1}))},
lq:function(a,b){var u=C.e.aa(a.a,1000)
return P.o8(u<0?0:u,b)},
mp:function(a,b){var u=C.e.aa(a.a,1000)
return P.o9(u<0?0:u,b)},
o8:function(a,b){var u=new P.fb()
u.fw(a,b)
return u},
o9:function(a,b){var u=new P.fb()
u.fz(a,b)
return u},
aE:function(a){return new P.jM(new P.ah($.T,[a]),[a])},
aD:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
as:function(a,b){P.oa(a,b)},
aC:function(a,b){b.cr(0,a)},
aB:function(a,b){b.bI(H.ax(a),H.c4(a))},
oa:function(a,b){var u,t=null,s=new P.kr(b),r=new P.ks(b),q=J.X(a)
if(!!q.$iah)a.dS(s,r,t)
else if(!!q.$iaK)a.cT(s,r,t)
else{u=new P.ah($.T,[null])
H.G(a,null)
u.a=4
u.c=a
u.dS(s,t,t)}},
aG:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.T.eF(new P.kA(u),P.J,P.t,null)},
mv:function(a,b){var u,t,s
b.a=1
try{a.cT(new P.k1(b),new P.k2(b),null)}catch(s){u=H.ax(s)
t=H.c4(s)
P.p4(new P.k3(b,u,t))}},
k0:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iah")
if(u>=4){t=b.bA()
b.a=a.a
b.c=a.c
P.cq(b,t)}else{t=H.k(b.c,"$ib4")
b.a=2
b.c=a
a.dM(t)}},
cq:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iau")
P.kx(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.cq(h.a,b)}g=h.a
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
if(m){H.k(q,"$iau")
P.kx(i,i,g.b,q.a,q.b)
return}l=$.T
if(l!==n)$.T=n
else l=i
g=b.c
if((g&15)===8)new P.k8(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.k7(u,b,q).$0()}else if((g&2)!==0)new P.k6(h,u,b).$0()
if(l!=null)$.T=l
g=u.b
if(!!J.X(g).$iaK){if(g.a>=4){k=H.k(o.c,"$ib4")
o.c=null
b=o.bB(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.k0(g,o)
return}}j=b.b
k=H.k(j.c,"$ib4")
j.c=null
b=j.bB(k)
g=u.a
p=u.b
if(!g){H.G(p,H.z(j,0))
j.a=4
j.c=p}else{H.k(p,"$iau")
j.a=8
j.c=p}h.a=j
g=j}},
oz:function(a,b){if(H.fr(a,{func:1,args:[P.O,P.ab]}))return b.eF(a,null,P.O,P.ab)
if(H.fr(a,{func:1,args:[P.O]}))return H.n(a,{func:1,ret:null,args:[P.O]})
throw H.h(P.kW(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oy:function(){var u,t
for(;u=$.cr,u!=null;){$.dq=null
t=u.b
$.cr=t
if(t==null)$.dp=null
u.a.$0()}},
oC:function(){$.lx=!0
try{P.oy()}finally{$.dq=null
$.lx=!1
if($.cr!=null)$.lK().$1(P.mI())}},
mB:function(a){var u=new P.ex(a)
if($.cr==null){$.cr=$.dp=u
if(!$.lx)$.lK().$1(P.mI())}else $.dp=$.dp.b=u},
oB:function(a){var u,t,s=$.cr
if(s==null){P.mB(a)
$.dq=$.dp
return}u=new P.ex(a)
t=$.dq
if(t==null){u.b=s
$.cr=$.dq=u}else{u.b=t.b
$.dq=t.b=u
if(u.b==null)$.dp=u}},
p4:function(a){var u=null,t=$.T
if(C.f===t){P.cs(u,u,C.f,a)
return}P.cs(u,u,t,H.n(t.cm(a),{func:1,ret:-1}))},
pj:function(a,b){if(a==null)H.y(P.ne("stream"))
return new P.kl([b])},
lp:function(a,b){var u=$.T
if(u===C.f)return P.lq(a,H.n(b,{func:1,ret:-1}))
return P.lq(a,H.n(u.cm(b),{func:1,ret:-1}))},
o_:function(a,b){var u=$.T
if(u===C.f)return P.mp(a,H.n(b,{func:1,ret:-1,args:[P.bq]}))
return P.mp(a,H.n(u.dZ(b,P.bq),{func:1,ret:-1,args:[P.bq]}))},
kx:function(a,b,c,d,e){var u={}
u.a=d
P.oB(new P.ky(u,e))},
mz:function(a,b,c,d,e){var u,t=$.T
if(t===c)return d.$0()
$.T=c
u=t
try{t=d.$0()
return t}finally{$.T=u}},
mA:function(a,b,c,d,e,f,g){var u,t=$.T
if(t===c)return d.$1(e)
$.T=c
u=t
try{t=d.$1(e)
return t}finally{$.T=u}},
oA:function(a,b,c,d,e,f,g,h,i){var u,t=$.T
if(t===c)return d.$2(e,f)
$.T=c
u=t
try{t=d.$2(e,f)
return t}finally{$.T=u}},
cs:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.cm(d):c.j5(d,-1)
P.mB(d)},
jP:function jP(a){this.a=a},
jO:function jO(a,b,c){this.a=a
this.b=b
this.c=c},
jQ:function jQ(a){this.a=a},
jR:function jR(a){this.a=a},
fb:function fb(){this.c=0},
ko:function ko(a,b){this.a=a
this.b=b},
kn:function kn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jM:function jM(a,b){this.a=a
this.b=!1
this.$ti=b},
kr:function kr(a){this.a=a},
ks:function ks(a){this.a=a},
kA:function kA(a){this.a=a},
ez:function ez(){},
jN:function jN(a,b){this.a=a
this.$ti=b},
b4:function b4(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ah:function ah(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jY:function jY(a,b){this.a=a
this.b=b},
k5:function k5(a,b){this.a=a
this.b=b},
k1:function k1(a){this.a=a},
k2:function k2(a){this.a=a},
k3:function k3(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(a,b){this.a=a
this.b=b},
k4:function k4(a,b){this.a=a
this.b=b},
jZ:function jZ(a,b,c){this.a=a
this.b=b
this.c=c},
k8:function k8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k9:function k9(a){this.a=a},
k7:function k7(a,b,c){this.a=a
this.b=b
this.c=c},
k6:function k6(a,b,c){this.a=a
this.b=b
this.c=c},
ex:function ex(a){this.a=a
this.b=null},
iT:function iT(){},
iV:function iV(a,b){this.a=a
this.b=b},
iW:function iW(a,b){this.a=a
this.b=b},
d2:function d2(){},
iU:function iU(){},
kl:function kl(a){this.$ti=a},
bq:function bq(){},
au:function au(a,b){this.a=a
this.b=b},
kq:function kq(){},
ky:function ky(a,b){this.a=a
this.b=b},
kf:function kf(){},
kh:function kh(a,b,c){this.a=a
this.b=b
this.c=c},
kg:function kg(a,b){this.a=a
this.b=b},
ki:function ki(a,b,c){this.a=a
this.b=b
this.c=c},
nw:function(a,b){return new H.a1([a,b])},
nx:function(a){return H.oQ(a,new H.a1([null,null]))},
ny:function(a){return new P.kd([a])},
lv:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
o7:function(a,b,c){var u=new P.eN(a,b,[c])
u.c=a.e
return u},
nr:function(a,b,c){var u,t
if(P.ly(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.m])
C.a.h($.aF,a)
try{P.od(a,u)}finally{if(0>=$.aF.length)return H.d($.aF,-1)
$.aF.pop()}t=P.mn(b,H.oZ(u,"$if"),", ")+c
return t.charCodeAt(0)==0?t:t},
l4:function(a,b,c){var u,t
if(P.ly(a))return b+"..."+c
u=new P.bY(b)
C.a.h($.aF,a)
try{t=u
t.a=P.mn(t.a,a,", ")}finally{if(0>=$.aF.length)return H.d($.aF,-1)
$.aF.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ly:function(a){var u,t
for(u=$.aF.length,t=0;t<u;++t)if(a===$.aF[t])return!0
return!1},
od:function(a,b){var u,t,s,r,q,p,o,n=a.gU(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.A())return
u=H.i(n.gL(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.A()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gL(n);++l
if(!n.A()){if(l<=4){C.a.h(b,H.i(r))
return}t=H.i(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gL(n);++l
for(;n.A();r=q,q=p){p=n.gL(n);++l
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
m4:function(a){var u,t={}
if(P.ly(a))return"{...}"
u=new P.bY("")
try{C.a.h($.aF,a)
u.a+="{"
t.a=!0
J.lM(a,new P.hE(t,u))
u.a+="}"}finally{if(0>=$.aF.length)return H.d($.aF,-1)
$.aF.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
kd:function kd(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
de:function de(a){this.a=a
this.c=this.b=null},
eN:function eN(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hA:function hA(){},
C:function C(){},
hD:function hD(){},
hE:function hE(a,b){this.a=a
this.b=b},
am:function am(){},
kj:function kj(){},
eO:function eO(){},
cH:function cH(){},
dI:function dI(){},
h3:function h3(){},
jt:function jt(){},
ju:function ju(){},
kp:function kp(a){this.b=0
this.c=a},
lF:function(a){var u=H.nP(a,null)
if(u!=null)return u
throw H.h(P.l1(a,null))},
oN:function(a){var u=H.nO(a)
if(u!=null)return u
throw H.h(P.l1("Invalid double",a))},
np:function(a){if(a instanceof H.cG)return a.i(0)
return"Instance of '"+H.i(H.cZ(a))+"'"},
nz:function(a,b,c){var u,t=J.nt(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.n(t,u,b)
return H.l(t,"$ic",[c],"$ac")},
m2:function(a,b,c){var u,t=[c],s=H.b([],t)
for(u=J.cC(a);u.A();)C.a.h(s,H.G(u.gL(u),c))
if(b)return s
return H.l(J.l5(s),"$ic",t,"$ac")},
lm:function(a){var u,t
if(a.constructor===Array){H.l(a,"$iaX",[P.t],"$aaX")
u=a.length
t=P.mh(0,null,u)
return H.me(t<u?C.a.eX(a,0,t):a)}return P.nX(a,0,null)},
nX:function(a,b,c){var u,t,s=J.cC(a)
for(u=0;u<b;++u)if(!s.A())throw H.h(P.bl(b,0,u,null,null))
t=[]
for(;s.A();)t.push(s.gL(s))
return H.me(t)},
li:function(a){return new H.hm(a,H.m0(a,!1,!0,!1,!1,!1))},
mn:function(a,b,c){var u=J.cC(b)
if(!u.A())return a
if(c.length===0){do a+=H.i(u.gL(u))
while(u.A())}else{a+=H.i(u.gL(u))
for(;u.A();)a=a+c+H.i(u.gL(u))}return a},
mx:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.j){u=$.na().b
u=u.test(b)}else u=!1
if(u)return b
t=C.B.jb(H.G(b,H.aH(c,"cH",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.nQ(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nn:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
no:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dK:function(a){if(a>=10)return""+a
return"0"+a},
lU:function(a){return new P.bP(1000*a)},
dP:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aJ(a)
if(typeof a==="string")return JSON.stringify(a)
return P.np(a)},
nd:function(a){return new P.aV(!1,null,null,a)},
kW:function(a,b,c){return new P.aV(!0,a,b,c)},
ne:function(a){return new P.aV(!1,null,a,"Must not be null")},
im:function(a,b){return new P.cj(null,null,!0,a,b,"Value not in range")},
bl:function(a,b,c,d,e){return new P.cj(b,c,!0,a,d,"Invalid value")},
mh:function(a,b,c){if(0>a||a>c)throw H.h(P.bl(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.h(P.bl(b,a,c,"end",null))
return b}return c},
mg:function(a,b){if(typeof a!=="number")return a.a_()
if(a<0)throw H.h(P.bl(a,0,null,b,null))},
Z:function(a,b,c,d,e){var u=H.a7(e==null?J.b7(b):e)
return new P.hk(u,!0,a,c,"Index out of range")},
aA:function(a){return new P.jr(a)},
mr:function(a){return new P.jp(a)},
mm:function(a){return new P.el(a)},
cI:function(a){return new P.fN(a)},
r:function(a){return new P.eG(a)},
l1:function(a,b){return new P.hd(a,b)},
nA:function(a,b,c,d){var u,t,s=new Array(a)
s.fixed$length=Array
u=H.b(s,[d])
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
fs:function(a){H.p2(a)},
a6:function a6(){},
aO:function aO(a,b){this.a=a
this.b=b},
E:function E(){},
bP:function bP(a){this.a=a},
fX:function fX(){},
fY:function fY(){},
bQ:function bQ(){},
fx:function fx(){},
cV:function cV(){},
aV:function aV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cj:function cj(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hk:function hk(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
jr:function jr(a){this.a=a},
jp:function jp(a){this.a=a},
el:function el(a){this.a=a},
fN:function fN(a){this.a=a},
i9:function i9(){},
ek:function ek(){},
fS:function fS(a){this.a=a},
eG:function eG(a){this.a=a},
hd:function hd(a,b){this.a=a
this.b=b},
t:function t(){},
f:function f(){},
aP:function aP(){},
c:function c(){},
H:function H(){},
J:function J(){},
ai:function ai(){},
O:function O(){},
eb:function eb(){},
ab:function ab(){},
m:function m(){},
bY:function bY(a){this.a=a},
oK:function(a){var u,t=J.X(a)
if(!!t.$ibR){u=t.ge8(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fg(a.data,a.height,a.width)},
oJ:function(a){if(a instanceof P.fg)return{data:a.a,height:a.b,width:a.c}
return a},
bH:function(a){var u,t,s,r,q
if(a==null)return
u=P.nw(P.m,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r){q=H.ad(t[r])
u.n(0,q,a[q])}return u},
oI:function(a){var u={}
a.M(0,new P.kB(u))
return u},
fg:function fg(a,b,c){this.a=a
this.b=b
this.c=c},
kB:function kB(a){this.a=a},
h9:function h9(a,b){this.a=a
this.b=b},
ha:function ha(){},
hb:function hb(){},
kc:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
o6:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ke:function ke(){},
ay:function ay(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bw:function bw(){},
hx:function hx(){},
bB:function bB(){},
i7:function i7(){},
ih:function ih(){},
iY:function iY(){},
u:function u(){},
bE:function bE(){},
je:function je(){},
eL:function eL(){},
eM:function eM(){},
eX:function eX(){},
eY:function eY(){},
f7:function f7(){},
f8:function f8(){},
fe:function fe(){},
ff:function ff(){},
fz:function fz(){},
fA:function fA(){},
fB:function fB(a){this.a=a},
fC:function fC(){},
c9:function c9(){},
i8:function i8(){},
ey:function ey(){},
dB:function dB(){},
dR:function dR(){},
ea:function ea(){},
ec:function ec(){},
ck:function ck(){},
ed:function ed(){},
em:function em(){},
eq:function eq(){},
iK:function iK(){},
f3:function f3(){},
f4:function f4(){}},W={
nc:function(){var u=document.createElement("a")
return u},
kZ:function(){var u=document.createElement("canvas")
return u},
lV:function(a){H.k(a,"$ij")
return"wheel"},
lX:function(a){return W.nq(a,null,null).av(new W.hh(),P.m)},
nq:function(a,b,c){var u,t=W.bd,s=new P.ah($.T,[t]),r=new P.jN(s,[t]),q=new XMLHttpRequest()
C.D.jJ(q,"GET",a,!0)
t=W.bk
u={func:1,ret:-1,args:[t]}
W.a5(q,"load",H.n(new W.hi(q,r),u),!1,t)
W.a5(q,"error",H.n(r.gj9(),u),!1,t)
q.send()
return s},
lY:function(a){var u=document.createElement("img")
u.src=a
return u},
kb:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mw:function(a,b,c,d){var u=W.kb(W.kb(W.kb(W.kb(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a5:function(a,b,c,d,e){var u=W.mF(new W.jX(c),W.o)
if(u!=null&&!0)J.nb(a,b,u,!1)
return new W.jW(a,b,u,!1,[e])},
mF:function(a,b){var u=$.T
if(u===C.f)return a
return u.dZ(a,b)},
w:function w(){},
ft:function ft(){},
fv:function fv(){},
fw:function fw(){},
dz:function dz(){},
cc:function cc(){},
cF:function cF(){},
bN:function bN(){},
cJ:function cJ(){},
fO:function fO(){},
U:function U(){},
cK:function cK(){},
fP:function fP(){},
b9:function b9(){},
ba:function ba(){},
fQ:function fQ(){},
fR:function fR(){},
fT:function fT(){},
dL:function dL(){},
fU:function fU(){},
dM:function dM(){},
dN:function dN(){},
fV:function fV(){},
fW:function fW(){},
jT:function jT(a,b){this.a=a
this.b=b},
aa:function aa(){},
o:function o(){},
j:function j(){},
bb:function bb(){},
h7:function h7(){},
h8:function h8(){},
hc:function hc(){},
bc:function bc(){},
hg:function hg(){},
cg:function cg(){},
bd:function bd(){},
hh:function hh(){},
hi:function hi(a,b){this.a=a
this.b=b},
cN:function cN(){},
bR:function bR(){},
cO:function cO(){},
be:function be(){},
hB:function hB(){},
hU:function hU(){},
hV:function hV(){},
hW:function hW(a){this.a=a},
hX:function hX(){},
hY:function hY(a){this.a=a},
bh:function bh(){},
hZ:function hZ(){},
ak:function ak(){},
jS:function jS(a){this.a=a},
L:function L(){},
cU:function cU(){},
bi:function bi(){},
ie:function ie(){},
bk:function bk(){},
iw:function iw(){},
ix:function ix(a){this.a=a},
iz:function iz(){},
bm:function bm(){},
iI:function iI(){},
bn:function bn(){},
iJ:function iJ(){},
bo:function bo(){},
iR:function iR(){},
iS:function iS(a){this.a=a},
b0:function b0(){},
bp:function bp(){},
b1:function b1(){},
j_:function j_(){},
j0:function j0(){},
j9:function j9(){},
br:function br(){},
b2:function b2(){},
jc:function jc(){},
jd:function jd(){},
c_:function c_(){},
js:function js(){},
jH:function jH(){},
bt:function bt(){},
dd:function dd(){},
jU:function jU(){},
eB:function eB(){},
ka:function ka(){},
eU:function eU(){},
kk:function kk(){},
km:function km(){},
jV:function jV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lu:function lu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jW:function jW(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jX:function jX(a){this.a=a},
F:function F(){},
dQ:function dQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
eA:function eA(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eV:function eV(){},
eW:function eW(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
dj:function dj(){},
dk:function dk(){},
f1:function f1(){},
f2:function f2(){},
f6:function f6(){},
f9:function f9(){},
fa:function fa(){},
dl:function dl(){},
dm:function dm(){},
fc:function fc(){},
fd:function fd(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){}},O={
l_:function(a){var u=new O.Y([a])
u.bs(a)
return u},
Y:function Y(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cR:function cR(){this.b=this.a=null},
mM:function(a){var u=C.c.jx(a,"/")
if(u<=0)return a
return C.c.br(a,0,u)},
mD:function(a){var u,t,s=P.li("([^\\s]+)")
$.mC=s
u=s.jn(a)
if(u==null)return H.b([],[P.m])
s=u.b
if(1>=s.length)return H.d(s,1)
t=s[1]
return H.b([t,C.c.eM(C.c.aY(a,t.length))],[P.m])},
kz:function(a){var u,t=H.b([],[P.m]),s=P.li("([^\\s]+)")
$.mC=s
s=new H.jK(s,a,0)
for(;s.A();){u=s.d.b
if(1>=u.length)return H.d(u,1)
C.a.h(t,u[1])}return t},
bG:function(a){var u,t=O.kz(a),s=H.b([],[P.E]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.d(t,u)
C.a.h(s,P.oN(t[u]))}return s},
e4:function(a,b,c){return O.nE(a,b,!1)},
nE:function(a,b,c){var u=0,t=P.aE([P.H,P.m,O.aL]),s,r=2,q,p=[],o,n,m,l,k,j,i,h
var $async$e4=P.aG(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
o=O.mM(a)
k=new O.kv(b)
k.sc5(new H.a1([P.m,O.aL]))
k.c=null
n=k
u=7
return P.as(W.lX(a),$async$e4)
case 7:m=e
u=8
return P.as(n.aD(m,o,!1),$async$e4)
case 8:j=n.b
s=j
u=1
break
r=2
u=6
break
case 4:r=3
h=q
l=H.ax(h)
P.fs(a+": "+H.i(l))
j=P.r(a+": "+H.i(l))
throw H.h(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.aC(s,t)
case 2:return P.aB(q,t)}})
return P.aD($async$e4,t)},
aQ:function(a,b){var u=null,t=null,s=!1
return O.nF(a,b)},
nF:function(a,b){var u=0,t=P.aE(E.S),s,r=2,q,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$aQ=P.aG(function(a0,a1){if(a0===1){q=a1
u=r}while(true)switch(u){case 0:f=null
e=null
d=!1
r=4
o=O.mM(a)
k=f
j=new O.kw(b)
j.sim(H.b([],[O.dr]))
j.siL(H.b([],[V.a4]))
j.shm(H.b([],[V.M]))
j.sc5(new H.a1([P.m,O.aL]))
j.f=e
j.r=""
i=O.an()
h=i.r
h.sq(0,new V.v(0.35,0.35,0.35))
h=i.x
h.sq(0,new V.v(0.65,0.65,0.65))
j.x=i
j.z=j.y=null
j.Q=E.a0(null,!0,null,"",null,null)
if(k!=null)j.e.aI(0,k)
j.bD()
n=j
u=7
return P.as(W.lX(a),$async$aQ)
case 7:m=a1
u=8
return P.as(n.aD(m,o,d),$async$aQ)
case 8:k=e
if(k!=null){i=new O.ii()
i.b=!0
k.C(i)}k=n.gjl()
s=k
u=1
break
r=2
u=6
break
case 4:r=3
c=q
l=H.ax(c)
P.fs(a+": "+H.i(l))
k=P.r(a+": "+H.i(l))
throw H.h(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.aC(s,t)
case 2:return P.aB(q,t)}})
return P.aD($async$aQ,t)},
kv:function kv(a){this.a=a
this.c=this.b=null},
dr:function dr(a){this.a=a
this.b=null},
kw:function kw(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ii:function ii(){this.b=null},
an:function(){var u,t,s=new O.aL()
s.sfG(O.l_(V.ao))
s.e.bd(s.ghr(),s.ght())
u=new O.bg(s,"emission")
u.c=new A.a3(!1,!1,!1)
u.f=new V.v(0,0,0)
s.f=u
u=new O.bg(s,"ambient")
u.c=new A.a3(!1,!1,!1)
u.f=new V.v(0,0,0)
s.r=u
u=new O.bg(s,"diffuse")
u.c=new A.a3(!1,!1,!1)
u.f=new V.v(0,0,0)
s.x=u
u=new O.bg(s,"invDiffuse")
u.c=new A.a3(!1,!1,!1)
u.f=new V.v(0,0,0)
s.y=u
u=new O.hM(s,"specular")
u.c=new A.a3(!1,!1,!1)
u.f=new V.v(0,0,0)
u.ch=100
s.z=u
u=new O.hI(s,"bump")
u.c=new A.a3(!1,!1,!1)
s.Q=u
s.ch=null
u=new O.bg(s,"reflect")
u.c=new A.a3(!1,!1,!1)
u.f=new V.v(0,0,0)
s.cx=u
u=new O.hL(s,"refract")
u.c=new A.a3(!1,!1,!1)
u.f=new V.v(0,0,0)
u.ch=1
s.cy=u
u=new O.hH(s,"alpha")
u.c=new A.a3(!1,!1,!1)
u.f=1
s.db=u
u=new D.dX()
u.bs(D.aj)
u.sfg(H.b([],[D.cd]))
u.sij(H.b([],[D.e9]))
u.sfh(H.b([],[D.ej]))
u.y=u.x=null
u.d1(u.ghp(),u.gi0(),u.gi4())
s.dx=u
t=new O.hK()
t.b=new V.af(0,0,0,0)
t.c=1
t.d=10
t.e=!1
s.dy=t
t=u.x
u=t==null?u.x=D.Q():t
u.h(0,s.giw())
u=s.dx
t=u.y
u=t==null?u.y=D.Q():t
u.h(0,s.gaF())
s.fr=null
return s},
aL:function aL(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hN:function hN(a,b){this.a=a
this.b=b},
hO:function hO(){},
hP:function hP(a,b){this.a=a
this.b=b},
hQ:function hQ(){},
hR:function hR(a,b){this.a=a
this.b=b},
hS:function hS(){},
hH:function hH(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cQ:function cQ(){},
hI:function hI(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
bg:function bg(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hK:function hK(){var _=this
_.e=_.d=_.c=_.b=null},
hL:function hL(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hM:function hM(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ef:function ef(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iH:function iH(){this.c=this.b=this.a=null},
bZ:function bZ(){}},E={
a0:function(a,b,c,d,e,f){var u=new E.S()
u.an(a,b,c,d,e,f)
return u},
nS:function(a,b){var u=new E.io(a)
u.f9(a,b)
return u},
nY:function(a,b,c,d,e){var u,t,s=J.X(a)
if(!!s.$icc)return E.mo(a,!0,!0,!0,!1)
u=W.kZ()
t=u.style
t.width="100%"
t.height="100%"
s.ge0(a).h(0,u)
return E.mo(u,!0,!0,!0,!1)},
mo:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.en(),j=H.k(C.h.cZ(a,"webgl2",P.nx(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ick")
if(j==null)H.y(P.r("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.nS(j,a)
u=new T.j2(j)
u.b=H.a7(j.getParameter(3379))
u.c=H.a7(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.et(a)
t=new X.hp()
t.sio(P.ny(P.t))
u.b=t
t=new X.i_(u)
t.f=0
t.r=V.bD()
t.x=V.bD()
t.ch=t.Q=1
u.c=t
t=new X.hC(u)
t.r=0
t.x=V.bD()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.jb(u)
t.f=V.bD()
t.r=V.bD()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfW(H.b([],[[P.d2,P.O]]))
t=u.z
s=document
r=W.ak
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a5(s,"contextmenu",H.n(u.ghB(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a5(a,"focus",H.n(u.ghH(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a5(a,"blur",H.n(u.ghv(),o),!1,p))
t=u.z
n=W.be
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a5(s,"keyup",H.n(u.ghN(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a5(s,"keydown",H.n(u.ghL(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a5(a,"mousedown",H.n(u.ghR(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a5(a,"mouseup",H.n(u.ghV(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a5(a,l,H.n(u.ghT(),q),!1,r))
n=u.z
W.lV(a)
m=W.bt;(n&&C.a).h(n,W.a5(a,H.ad(W.lV(a)),H.n(u.ghX(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a5(s,l,H.n(u.ghD(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a5(s,"mouseup",H.n(u.ghF(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a5(s,"pointerlockchange",H.n(u.ghZ(),o),!1,p))
p=u.z
o=W.b2
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a5(a,"touchstart",H.n(u.gig(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a5(a,"touchend",H.n(u.gia(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a5(a,"touchmove",H.n(u.gic(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aO(Date.now(),!1)
k.cy=0
k.dO()
return k},
fE:function fE(){},
S:function S(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
io:function io(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ip:function ip(a){this.a=a},
iq:function iq(a){this.a=a},
ir:function ir(a){this.a=a},
en:function en(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
j6:function j6(a){this.a=a}},Z={
lt:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.dn(c)),35044)
a.bindBuffer(b,null)
return new Z.ew(b,u)},
aS:function(a){return new Z.bF(a)},
ew:function ew(a,b){this.a=a
this.b=b},
dC:function dC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dc:function dc(a){this.a=a},
ca:function ca(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bS:function bS(a,b,c){this.a=a
this.b=b
this.c=c},
bF:function bF(a){this.a=a}},D={
Q:function(){var u=new D.ce()
u.sap(null)
u.sbj(null)
u.c=null
u.d=0
return u},
fL:function fL(){},
ce:function ce(){var _=this
_.d=_.c=_.b=_.a=null},
h5:function h5(a){this.a=a},
h6:function h6(a){this.a=a},
A:function A(){this.b=null},
bT:function bT(a){this.b=null
this.$ti=a},
bU:function bU(a){this.b=null
this.$ti=a},
I:function I(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
lT:function(){var u=new D.cd()
u.c=new V.v(1,1,1)
u.a=V.o1()
u.d=V.jy()
u.e=V.o0()
u.sq(0,null)
return u},
cd:function cd(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aj:function aj(){},
dX:function dX(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
e9:function e9(){},
ej:function ej(){}},X={dD:function dD(a,b){this.a=a
this.b=b},dW:function dW(a,b){this.a=a
this.b=b},hp:function hp(){this.d=this.b=this.a=null},e_:function e_(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hC:function hC(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},aY:function aY(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},i_:function i_(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ig:function ig(){},d9:function d9(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},jb:function jb(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},et:function et(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
l2:function(a){var u=new X.he(),t=new V.af(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.lj()
u.r=t
return u},
ma:function(a){var u,t,s=new X.e8()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gt().h(0,s.gfA())
t=new D.I("mover",u,s.b,[U.av])
t.b=!0
s.a2(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.N().a)){s.c=1.0471975511965976
t=new D.I("fov",t,1.0471975511965976,[P.E])
t.b=!0
s.a2(t)}t=s.d
if(!(Math.abs(t-0.1)<$.N().a)){s.d=0.1
t=new D.I("near",t,0.1,[P.E])
t.b=!0
s.a2(t)}t=s.e
if(!(Math.abs(t-2000)<$.N().a)){s.e=2000
t=new D.I("far",t,2000,[P.E])
t.b=!0
s.a2(t)}return s},
fD:function fD(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cb:function cb(){},
he:function he(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hj:function hj(){this.b=this.a=null},
e8:function e8(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
d3:function d3(){}},V={
l0:function(a){var u,t,s=a.length
if(0>=s)return H.d(a,0)
u=a[0]
if(1>=s)return H.d(a,1)
t=a[1]
if(2>=s)return H.d(a,2)
s=a[2]
if(typeof u!=="number")return u.a_()
if(u<0)u=0
else if(u>1)u=1
if(typeof t!=="number")return t.a_()
if(t<0)t=0
else if(t>1)t=1
if(typeof s!=="number")return s.a_()
if(s<0)s=0
else if(s>1)s=1
return new V.v(u,t,s)},
nm:function(a,b,c){var u,t,s,r,q,p,o,n
a*=6
u=C.d.b9(a)
t=a-u
s=b*(1-c)
r=b*(1-c*t)
q=b*(1-c*(1-t))
switch(u){case 0:p=b>1?1:b
if(q<0)o=0
else o=q>1?1:q
if(s<0)n=0
else n=s>1?1:s
return new V.v(p,o,n)
case 1:if(r<0)p=0
else p=r>1?1:r
o=b>1?1:b
if(s<0)n=0
else n=s>1?1:s
return new V.v(p,o,n)
case 2:if(s<0)p=0
else p=s>1?1:s
o=b>1?1:b
if(q<0)n=0
else n=q>1?1:q
return new V.v(p,o,n)
case 3:if(s<0)p=0
else p=s>1?1:s
if(r<0)o=0
else o=r>1?1:r
n=b>1?1:b
return new V.v(p,o,n)
case 4:if(q<0)p=0
else p=q>1?1:q
if(s<0)o=0
else o=s>1?1:s
n=b>1?1:b
return new V.v(p,o,n)
default:p=b>1?1:b
if(s<0)o=0
else o=s>1?1:s
if(r<0)n=0
else n=r>1?1:r
return new V.v(p,o,n)}},
pb:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.d_(a-b,u)
return(a<0?a+u:a)+b},
V:function(a,b,c){if(a==null)return C.c.au("null",c)
return C.c.au(C.d.eL(Math.abs(a-0)<$.N().a?0:a,b),c+b+1)},
cw:function(a,b,c){var u,t,s,r,q,p=H.b([],[P.m])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.x)(a),++s){r=V.V(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.d(p,q)
C.a.n(p,q,C.c.au(p[q],t))}return p},
dv:function(a){return C.d.k8(Math.pow(2,C.k.b9(Math.log(H.oH(a))/Math.log(2))))},
bX:function(){var u=$.m6
return u==null?$.m6=V.by(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
by:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
e3:function(a,b,c){return V.by(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
le:function(a,b,c,d){return V.by(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
m5:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.by(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
ld:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.by(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
lc:function(a,b,c){var u=c.u(0,Math.sqrt(c.F(c))),t=b.bm(u),s=t.u(0,Math.sqrt(t.F(t))),r=u.bm(s),q=new V.M(a.a,a.b,a.c),p=s.O(0).F(q),o=r.O(0).F(q),n=u.O(0).F(q)
return V.by(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bD:function(){var u=$.mc
return u==null?$.mc=new V.a4(0,0):u},
lg:function(){var u=$.cX
return u==null?$.cX=new V.al(0,0,0):u},
lj:function(){var u=$.mj
return u==null?$.mj=V.mi(0,0,1,1):u},
mi:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d_(a,b,c,d)},
ev:function(){var u=$.mu
return u==null?$.mu=new V.M(0,0,0):u},
o0:function(){var u=$.jv
return u==null?$.jv=new V.M(-1,0,0):u},
jy:function(){var u=$.jw
return u==null?$.jw=new V.M(0,1,0):u},
o1:function(){var u=$.jx
return u==null?$.jx=new V.M(0,0,1):u},
v:function v(a,b,c){this.a=a
this.b=b
this.c=c},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h4:function h4(a){this.a=a},
e2:function e2(a,b,c,d,e,f,g,h,i){var _=this
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
a4:function a4(a,b){this.a=a
this.b=b},
al:function al(a,b,c){this.a=a
this.b=b
this.c=c},
bj:function bj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d_:function d_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a2:function a2(a,b){this.a=a
this.b=b},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
ap:function(a){var u=new V.iA()
u.fb(a)
return u},
fu:function fu(){},
bx:function bx(){},
e0:function e0(){},
bA:function bA(){this.a=null},
iA:function iA(){this.a=null},
d1:function d1(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eo:function eo(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(a){this.b=a
this.c=null},
ja:function ja(){this.c=this.b=this.a=null},
da:function da(a){this.b=a
this.a=this.c=null},
p5:function(a){P.o_(C.C,new V.kN(a))},
nU:function(a){var u=new V.iE()
u.fc(a,!0)
return u},
kN:function kN(a){this.a=a},
iE:function iE(){this.b=this.a=null},
iG:function iG(a){this.a=a},
iF:function iF(a){this.a=a}},U={
lS:function(){var u=new U.fM()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
bO:function(a){var u=new U.dH()
u.sY(0,a)
return u},
fM:function fM(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dH:function dH(){this.b=this.a=null},
cM:function cM(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
av:function av(){},
eu:function eu(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
lW:function(){var u,t=new M.dO()
t.a=!0
t.sfK(0,O.l_(E.S))
t.e.bd(t.ghx(),t.ghz())
t.y=t.x=t.r=t.f=null
u=X.l2(null)
t.sb8(null)
t.sbc(0,u)
return t},
dG:function dG(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
dJ:function dJ(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dO:function dO(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aM:function aM(){}},A={
nB:function(a,b){var u=a.aT,t=new A.e1(b,u)
t.bU(b,u)
t.f5(a,b)
return t},
nC:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gak(a0)+a1.gak(a1)+a2.gak(a2)+a3.gak(a3)+a4.gak(a4)+a5.gak(a5)+a6.gak(a6)+a7.gak(a7)+a8.gak(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.x)(a9),++t)f+="_"+H.i(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.x)(b0),++t)f+="_"+H.i(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.x)(b1),++t)f+="_"+H.i(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.aN()
if(l){u=$.bL()
g=new Z.bF(g.a|u.a)}if(k){u=$.bK()
g=new Z.bF(g.a|u.a)}if(j){u=$.bM()
g=new Z.bF(g.a|u.a)}if(i){u=$.bJ()
g=new Z.bF(g.a|u.a)}return new A.hJ(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,m,p,r,h,!0,!1,!1,o,r,n,l,k,j,!1,i,a,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
kt:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
ku:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.kt(a,b,c)
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
oh:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kt(b,t,"emission")
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
oe:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.ku(b,t,"ambient")
b.a+="\n"},
of:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.ku(b,t,"diffuse")
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
oi:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.ku(b,t,"invDiffuse")
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
oo:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.ku(b,t,"specular")
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
ok:function(a,b){var u,t,s
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
om:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.kt(b,t,"reflect")
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
on:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.kt(b,t,"refract")
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
og:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
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
if(typeof u!=="number")return u.w()
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
r=[P.m]
o=H.b([],r)
n=a.b
if(n.a||n.b||!1)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.b([],r)
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
ol:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
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
if(typeof u!=="number")return u.w()
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
c.a=r+"\n"}r=[P.m]
l=H.b([],r)
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
l=H.b([],r)
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
k=H.b([],r)
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
op:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
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
if(typeof u!=="number")return u.w()
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
c.a=u+"\n"}u=[P.m]
j=H.b([],u)
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
j=H.b([],u)
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
i=H.b([],u)
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
oj:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.m])
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
oq:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.bY("")
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
A.oh(a,j)
A.oe(a,j)
A.of(a,j)
A.oi(a,j)
A.oo(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.om(a,j)
A.on(a,j)}A.ok(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.x)(q),++o)A.og(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.x)(q),++o)A.ol(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.x)(q),++o)A.op(a,q[o],j)
A.oj(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.b([],[P.m])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.x)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.aY(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.x)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.aY(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.x)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.aY(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
or:function(a,b){var u,t,s
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
ot:function(a,b){var u
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
os:function(a,b){var u
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
ov:function(a,b){var u,t
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
ow:function(a,b){var u,t
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
ou:function(a,b){var u
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
ox:function(a,b){var u
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
kQ:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.c.aY(a,1)},
lr:function(a,b,c,d,e){var u=new A.ji(a,c,e)
u.f=d
u.siV(P.nz(d,0,P.t))
return u},
dy:function dy(a,b,c){this.a=a
this.b=b
this.c=c},
fy:function fy(a){this.a=a},
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
e1:function e1(a,b){var _=this
_.kj=_.ed=_.ec=_.eb=_.aT=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.kr=_.kq=_.kp=_.cB=_.cA=_.cz=_.cw=_.cv=_.cu=_.ko=_.ep=_.eo=_.kn=_.en=_.em=_.el=_.km=_.ek=_.ej=_.ei=_.kl=_.eh=_.eg=_.kk=_.ef=_.ee=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aW:function aW(a,b){this.a=a
this.b=b},
aZ:function aZ(a,b){this.a=a
this.b=b},
b_:function b_(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aT=b3
_.eb=b4},
cm:function cm(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cn:function cn(a,b,c,d,e,f,g,h,i,j){var _=this
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
co:function co(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
eg:function eg(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eh:function eh(a,b){var _=this
_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ep:function ep(){},
jn:function jn(a){this.a=a},
aR:function aR(a,b,c){this.a=a
this.c=b
this.d=c},
jk:function jk(a,b,c){this.a=a
this.c=b
this.d=c},
jl:function jl(a,b,c){this.a=a
this.c=b
this.d=c},
jm:function jm(a,b,c){this.a=a
this.c=b
this.d=c},
ji:function ji(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ac:function ac(a,b,c){this.a=a
this.c=b
this.d=c},
jj:function jj(a,b,c){this.a=a
this.c=b
this.d=c},
W:function W(a,b,c){this.a=a
this.c=b
this.d=c},
cl:function cl(a,b,c){this.a=a
this.c=b
this.d=c},
jo:function jo(a,b,c){this.a=a
this.c=b
this.d=c},
db:function db(a,b,c){this.a=a
this.c=b
this.d=c},
aw:function aw(a,b,c){this.a=a
this.c=b
this.d=c},
aq:function aq(a,b,c){this.a=a
this.c=b
this.d=c},
c0:function c0(a,b,c){this.a=a
this.c=b
this.d=c}},F={
oM:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new F.kC()
if(a<3)return
u=F.ll()
t=-6.283185307179586/a
s=H.b([],[F.ar])
r=u.a
q=new V.M(0,0,1)
q=q.u(0,Math.sqrt(q.F(q)))
C.a.h(s,r.j0(new V.bj(-1,-1,-1,-1),new V.af(1,1,1,1),new V.al(0,0,0),new V.M(0,0,1),new V.a4(0.5,0.5),q))
for(p=0;p<=a;++p){o=t*p
n=Math.sin(o)
m=Math.cos(o)
l=g.$1(p/a)
r=u.a
if(typeof l!=="number")return H.e(l)
q=new V.M(n,m,1).u(0,Math.sqrt(n*n+m*m+1))
if(n<0)k=0
else k=n>1?1:n
j=m<0
if(j)i=0
else i=m>1?1:m
if(j)j=0
else j=m>1?1:m
r.toString
h=F.ls(new V.bj(-1,-1,-1,-1),null,new V.af(k,i,j,1),new V.al(n*l,m*l,0),new V.M(0,0,1),new V.a4(n*0.5+0.5,m*0.5+0.5),q,null,0)
r.h(0,h)
C.a.h(s,h)}u.d.cj(s)
return u},
nv:function(a,b){var u=new F.bf(),t=a.a
if(t==null)H.y(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.y(P.r("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.ah()
return u},
ll:function(){var u=new F.ee(),t=new F.jz(u)
t.b=!1
t.siW(H.b([],[F.ar]))
u.a=t
t=new F.iD(u)
t.sc8(H.b([],[F.bC]))
u.b=t
t=new F.iC(u)
t.sh6(H.b([],[F.bf]))
u.c=t
t=new F.iB(u)
t.sfY(H.b([],[F.ag]))
u.d=t
u.e=null
return u},
ls:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ar(),r=new F.jE()
r.sc8(H.b([],[F.bC]))
s.b=r
r=new F.jD()
u=[F.bf]
r.sh7(H.b([],u))
r.sh8(H.b([],u))
s.c=r
r=new F.jA()
u=[F.ag]
r.sfZ(H.b([],u))
r.sh_(H.b([],u))
r.sh0(H.b([],u))
s.d=r
h=$.n7()
s.e=0
r=$.aN()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bL().a)!==0?e:t
s.x=(u&$.bK().a)!==0?b:t
s.y=(u&$.bM().a)!==0?f:t
s.z=(u&$.c7().a)!==0?g:t
s.Q=(u&$.n8().a)!==0?c:t
s.ch=(u&$.cB().a)!==0?i:0
s.cx=(u&$.bJ().a)!==0?a:t
return s},
kC:function kC(){},
ag:function ag(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bf:function bf(){this.b=this.a=null},
bC:function bC(){this.a=null},
ee:function ee(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iB:function iB(a){this.a=a
this.b=null},
iC:function iC(a){this.a=a
this.b=null},
iD:function iD(a){this.a=a
this.b=null},
ar:function ar(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jG:function jG(a){this.a=a},
jF:function jF(a){this.a=a},
jz:function jz(a){this.a=a
this.c=this.b=null},
jA:function jA(){this.d=this.c=this.b=null},
jB:function jB(a,b){this.a=a
this.b=b},
jC:function jC(a,b){this.a=a
this.b=b},
jD:function jD(){this.c=this.b=null},
jE:function jE(){this.b=null}},T={
ln:function(a){var u=new T.j1()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
dE:function dE(){var _=this
_.ch=_.Q=_.z=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dF:function dF(a,b){this.c=a
this.d=b
this.b=null},
d4:function d4(){},
d5:function d5(){},
j1:function j1(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d6:function d6(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
j2:function j2(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
j4:function j4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
j3:function j3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c}},Q={
m3:function(a){if(a>=64)return new Q.p(0,0)
return new Q.p(C.e.aa(a,8)+1,C.e.d_(a,8)+1)},
ml:function(){var u=new Q.iL()
u.fd()
return u},
az:function(a){return new Q.B(a)},
hf:function hf(){this.d=this.c=this.a=null},
p:function p(a,b){this.a=a
this.b=b},
a_:function a_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iL:function iL(){this.c=this.a=null},
iM:function iM(a){this.a=a},
iO:function iO(a){this.a=a},
iP:function iP(a,b){this.a=a
this.b=b},
iN:function iN(a,b,c){this.a=a
this.b=b
this.c=c},
iX:function iX(){this.d=this.c=null},
B:function B(a){this.a=a}},S={
fG:function(a,b,c,d,e,f){var u=null,t=new S.fF(e,f,b,c)
t.an(u,!0,u,"",u,u)
t.aZ(b,c,e,f)
t.f0(a,b,c,d,e,f)
return t},
nf:function(a,b){var u=null,t=new S.dA(b)
t.an(u,!0,u,"",u,u)
t.f1(a,b)
return t},
h_:function(a,b,c,d,e,f){var u=null,t=new S.fZ()
t.an(u,!0,u,"",u,u)
t.f2(a,b,c,d,e,f)
return t},
p6:function(a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3="modifiers",a4=document.getElementById("targetCanvas")
if(a4==null)H.y(P.r("Failed to find an element with the identifier, targetCanvas."))
u=E.nY(a4,!0,!0,!0,!1)
t=u.r
s=new U.eu()
r=U.lS()
r.scX(0,!0)
r.scK(6.283185307179586)
r.scL(0)
r.sas(0,0)
r.seu(100)
r.sa5(0)
r.se7(0.5)
s.b=r
q=s.gbx()
r.gt().h(0,q)
r=U.lS()
r.scX(0,!0)
r.scK(6.283185307179586)
r.scL(0)
r.sas(0,0)
r.seu(100)
r.sa5(0)
r.se7(0.5)
s.c=r
r.gt().h(0,q)
s.d=null
s.r=s.f=s.e=!1
s.y=s.x=2.5
s.Q=4
s.ch=s.cx=!1
s.db=s.cy=0
s.dx=null
s.dy=0
s.fx=s.fr=null
p=new X.bz(!1,!1,!1)
o=s.d
s.d=p
r=[X.bz]
q=new D.I(a3,o,p,r)
q.b=!0
s.X(q)
q=s.f
if(q!==!1){s.f=!1
q=new D.I("invertX",q,!1,[P.a6])
q.b=!0
s.X(q)}q=s.r
if(q!==!1){s.r=!1
q=new D.I("invertY",q,!1,[P.a6])
q.b=!0
s.X(q)}s.cl(t)
s.b.scL(-1.5707963267948966)
s.b.scK(0)
s.b.sas(0,-0.5)
s.b.scX(0,!1)
t=U.av
s=H.b([s,U.bO(V.le(1.75,1.75,1.75,1)),U.bO(V.e3(0,0,15))],[t])
q=new U.cM()
q.bs(t)
q.bd(q.ghn(),q.gi2())
q.aI(0,s)
q.e=null
q.f=V.bX()
q.r=0
n=X.ma(q)
m=X.l2(a2)
if(m.b){m.b=!1
t=new D.I("clearColor",!0,!1,[P.a6])
t.b=!0
m.a2(t)}l=S.nf(u,a5)
t=l.k4.a
k=new M.dJ()
k.a=!0
s=E.a0(a2,!0,a2,"",a2,a2)
j=F.ll()
q=j.a
i=new V.M(-1,-1,1)
i=i.u(0,Math.sqrt(i.F(i)))
h=q.bF(new V.bj(1,2,4,6),new V.af(1,0,0,1),new V.al(-1,-1,0),new V.a4(0,1),i,a2)
q=j.a
i=new V.M(1,-1,1)
i=i.u(0,Math.sqrt(i.F(i)))
g=q.bF(new V.bj(0,3,4,6),new V.af(0,0,1,1),new V.al(1,-1,0),new V.a4(1,1),i,a2)
q=j.a
i=new V.M(1,1,1)
i=i.u(0,Math.sqrt(i.F(i)))
f=q.bF(new V.bj(0,2,5,6),new V.af(0,1,0,1),new V.al(1,1,0),new V.a4(1,0),i,a2)
q=j.a
i=V.bD()
e=new V.M(-1,1,1)
e=e.u(0,Math.sqrt(e.F(e)))
d=q.bF(new V.bj(0,2,4,7),new V.af(1,1,0,1),new V.al(-1,1,0),i,e,a2)
j.d.cj(H.b([h,g,f,d],[F.ar]))
j.b7()
s.sa0(0,j)
k.e=s
k.sb8(a2)
k.sbc(0,a2)
k.sZ(a2)
s=new O.ef()
s.b=1.0471975511965976
s.d=new V.v(1,1,1)
if(null!=t){o=s.c
s.c=t
t.gt().h(0,s.gaF())
t=new D.I("boxTexture",o,s.c,[T.d6])
t.b=!0
s.T(t)}k.sZ(s)
k.sbc(0,m)
k.sb8(n)
c=M.lW()
c.sbc(0,m)
c.sb8(n)
c.e.h(0,l)
b=new X.fD()
b.d=b.c=b.b=b.a=512
b.e=!0
b.f=!1
b.x=b.r=1
b.ch=T.ln(a2)
b.cx=new V.af(0,0,0,1)
b.cy=!0
b.db=2000
b.dx=!0
b.dy=V.lj()
b.saw(0,512)
b.sar(0,512)
a=new V.af(0,0,0,1)
if(!b.cx.m(0,a)){o=b.cx
b.cx=a
t=new D.I("color",o,a,[V.af])
t.b=!0
b.a2(t)}t=b.db
if(!(Math.abs(t-2000)<$.N().a)){b.db=2000
t=new D.I("depth",t,2000,[P.E])
t.b=!0
b.a2(t)}if(!b.f){b.f=!0
t=new D.I("autoResize",!1,!0,[P.a6])
t.b=!0
b.a2(t)}t=b.r
if(!(Math.abs(t-0.5)<$.N().a)){b.r=0.5
t=new D.I("autoResizeScalarX",t,0.5,[P.E])
t.b=!0
b.a2(t)}t=b.x
if(!(Math.abs(t-0.5)<$.N().a)){b.x=0.5
t=new D.I("autoResizeScalarY",t,0.5,[P.E])
t.b=!0
b.a2(t)}a0=V.lj()
if(!J.P(b.dy,a0)){o=b.dy
b.dy=a0
t=new D.I("region",o,a0,[V.d_])
t.b=!0
b.a2(t)}a1=M.lW()
a1.sbc(0,b)
a1.sb8(n)
a1.e.h(0,l)
t=u.f
s=u.r
q=b.ch
i=new T.dE()
i.a=t
i.z=4
i.ch=i.Q=!1
p=new X.bz(!1,!1,!1)
i.c=p
t=new D.I(a3,a2,p,r)
t.b=!0
i.bu(t)
t=i.d
if(t!==q){if(t!=null)t.gt().R(0,i.gdg())
o=i.d
i.d=q
q.gt().h(0,i.gdg())
t=new D.I("texture",o,i.d,[T.d5])
t.b=!0
i.bu(t)}i.cl(s)
t=i.f
if(t==null)t=i.f=D.Q()
t.h(0,new S.kO(l,u,a1))
t=i.x
if(t==null)t=i.x=D.Q()
t.h(0,new S.kP(l))
t=M.aM
s=H.b([k,c],[t])
r=new M.dG()
r.bs(t)
r.e=!0
r.f=!1
r.r=null
r.bd(r.gi6(),r.gi8())
r.aI(0,s)
t=u.d
if(t!==r){if(t!=null)t.gt().R(0,u.gdd())
u.d=r
r.gt().h(0,u.gdd())
u.de()}V.p5(u)},
m1:function(a,b,c,d,e){var u=null,t=new S.hq(d,e,b,c)
t.an(u,!0,u,"",u,u)
t.aZ(b,c,d,e)
t.f3(a,b,c,d,e)
return t},
hu:function(a,b,c,d,e,f){var u=null,t=new S.ht(e,f,b,c)
t.an(u,!0,u,"",u,u)
t.aZ(b,c,e,f)
t.f4(a,b,c,d,e,f)
return t},
nD:function(a){var u=new S.hT()
u.f6(a)
return u},
m9:function(a,b,c,d,e,f){var u=null,t=new S.ia(e,f,b,c)
t.an(u,!0,u,"",u,u)
t.aZ(b,c,e,f)
t.f7(a,b,c,d,e,f)
return t},
mf:function(a,b,c,d,e,f){var u=null,t=new S.ij(e,f,b,c)
t.an(u,!0,u,"",u,u)
t.aZ(b,c,e,f)
t.f8(a,b,c,d,e,f)
return t},
it:function(a,b,c,d,e,f){var u=null,t=new S.is(e,f,b,c)
t.an(u,!0,u,"",u,u)
t.aZ(b,c,e,f)
t.fa(a,b,c,d,e,f)
return t},
nZ:function(a,b,c,d){var u=null,t=new S.d7(d,b,c)
t.an(u,!0,u,"",u,u)
t.fe(a,b,c,d)
return t},
fF:function fF(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
fI:function fI(){},
dA:function dA(a){var _=this
_.fy=a
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=null},
fZ:function fZ(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h1:function h1(){},
kO:function kO(a,b,c){this.a=a
this.b=b
this.c=c},
kP:function kP(a){this.a=a},
hq:function hq(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
hs:function hs(){},
ht:function ht(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
hw:function hw(){},
hT:function hT(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ia:function ia(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
ic:function ic(){},
cW:function cW(){},
ij:function ij(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
il:function il(){},
is:function is(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
iv:function iv(){},
d7:function d7(a,b,c){var _=this
_.fy=a
_.id=b
_.k1=c
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=null},
j8:function j8(){}},L={
mP:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=V.nU("3Dart Chess"),d=[P.m]
e.b6(H.b(["This example is in development and may still have a few issues and glitches."],d))
u=W.kZ()
u.className="pageLargeCanvas"
u.id="targetCanvas"
e.a.appendChild(u)
e.dW(1,"About")
e.b6(H.b(["Click and drag to see the board from different angles. ","Click without dragging to select a piece, unselect a piece, or pick which movement should be made. ","The game will start with white's turn."],d))
e.b6(H.b(["3Dart Chess is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create simple browser driven video games. ","This example has no server backing it so currently there is no networked two player mode. ","It would take very little to turn this into a simple online game."],d))
e.b6(H.b(["\xab[Back to Examples List|../../]"],d))
e.dW(1,"Help wanted")
e.b6(H.b(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want ","to learn more about it, check out the ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/chess]."],d))
e.b6(H.b(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."],d))
t=new Q.hf()
t.a=!0
s=Q.ml()
d=$.b6()
e=$.bv()
d=d.a
e=e.a
if(typeof d!=="number")return d.W()
if(typeof e!=="number")return H.e(e)
r=d|e
q=$.b5().a
if(typeof q!=="number")return H.e(q)
p=1&q
s.B(new Q.p(1,1),new Q.B((r|p)>>>0))
o=$.cz()
o=o.a
if(typeof o!=="number")return o.W()
n=o|e
s.B(new Q.p(1,2),new Q.B((n|p)>>>0))
m=$.bu()
m=m.a
if(typeof m!=="number")return m.W()
l=m|e
s.B(new Q.p(1,3),new Q.B((l|p)>>>0))
k=$.bI()
k=k.a
if(typeof k!=="number")return k.W()
s.B(new Q.p(1,4),new Q.B((k|e|p)>>>0))
j=$.aI()
j=j.a
if(typeof j!=="number")return j.W()
s.B(new Q.p(1,5),new Q.B((j|e|p)>>>0))
i=2&q
s.B(new Q.p(1,6),new Q.B((l|i)>>>0))
s.B(new Q.p(1,7),new Q.B((n|i)>>>0))
s.B(new Q.p(1,8),new Q.B((r|i)>>>0))
r=$.cA()
r=r.a
if(typeof r!=="number")return r.W()
e=r|e
s.B(new Q.p(2,1),new Q.B((e|p)>>>0))
s.B(new Q.p(2,2),new Q.B((e|i)>>>0))
n=3&q
s.B(new Q.p(2,3),new Q.B((e|n)>>>0))
l=4&q
s.B(new Q.p(2,4),new Q.B((e|l)>>>0))
h=5&q
s.B(new Q.p(2,5),new Q.B((e|h)>>>0))
g=6&q
s.B(new Q.p(2,6),new Q.B((e|g)>>>0))
f=7&q
s.B(new Q.p(2,7),new Q.B((e|f)>>>0))
q=8&q
s.B(new Q.p(2,8),new Q.B((e|q)>>>0))
e=$.ae()
e=e.a
if(typeof e!=="number")return H.e(e)
r|=e
s.B(new Q.p(7,1),new Q.B((r|p)>>>0))
s.B(new Q.p(7,2),new Q.B((r|i)>>>0))
s.B(new Q.p(7,3),new Q.B((r|n)>>>0))
s.B(new Q.p(7,4),new Q.B((r|l)>>>0))
s.B(new Q.p(7,5),new Q.B((r|h)>>>0))
s.B(new Q.p(7,6),new Q.B((r|g)>>>0))
s.B(new Q.p(7,7),new Q.B((r|f)>>>0))
s.B(new Q.p(7,8),new Q.B((r|q)>>>0))
d|=e
s.B(new Q.p(8,1),new Q.B((d|p)>>>0))
r=o|e
s.B(new Q.p(8,2),new Q.B((r|p)>>>0))
q=m|e
s.B(new Q.p(8,3),new Q.B((q|p)>>>0))
s.B(new Q.p(8,4),new Q.B((k|e|p)>>>0))
s.B(new Q.p(8,5),new Q.B((j|e|p)>>>0))
s.B(new Q.p(8,6),new Q.B((q|i)>>>0))
s.B(new Q.p(8,7),new Q.B((r|i)>>>0))
s.B(new Q.p(8,8),new Q.B((d|i)>>>0))
t.c=s
P.lp(C.i,new L.kK(t))},
kK:function kK(a){this.a=a}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,Q,S,L]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l8.prototype={}
J.a.prototype={
m:function(a,b){return a===b},
gJ:function(a){return H.cY(a)},
i:function(a){return"Instance of '"+H.i(H.cZ(a))+"'"}}
J.hl.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$ia6:1}
J.dU.prototype={
m:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0},
$iJ:1}
J.dV.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.id.prototype={}
J.cp.prototype={}
J.bW.prototype={
i:function(a){var u=a[$.mX()]
if(u==null)return this.eZ(a)
return"JavaScript function for "+H.i(J.aJ(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$il3:1}
J.aX.prototype={
h:function(a,b){H.G(b,H.z(a,0))
if(!!a.fixed$length)H.y(P.aA("add"))
a.push(b)},
R:function(a,b){var u
if(!!a.fixed$length)H.y(P.aA("remove"))
for(u=0;u<a.length;++u)if(J.P(a[u],b)){a.splice(u,1)
return!0}return!1},
aI:function(a,b){var u,t
H.l(b,"$if",[H.z(a,0)],"$af")
if(!!a.fixed$length)H.y(P.aA("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.x)(b),++t)a.push(b[t])},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.z(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.cI(a))}},
v:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.n(t,u,H.i(a[u]))
return t.join(b)},
jw:function(a){return this.v(a,"")},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
eX:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.bl(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.bl(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.z(a,0)])
return H.b(a.slice(b,c),[H.z(a,0)])},
gcH:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.ns())},
bT:function(a,b){var u=H.z(a,0)
H.n(b,{func:1,ret:P.t,args:[u,u]})
if(!!a.immutable$list)H.y(P.aA("sort"))
H.ei(a,0,a.length-1,b,u)},
aK:function(a,b){var u
for(u=0;u<a.length;++u)if(J.P(a[u],b))return!0
return!1},
i:function(a){return P.l4(a,"[","]")},
gU:function(a){return new J.at(a,a.length,[H.z(a,0)])},
gJ:function(a){return H.cY(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.y(P.aA("set length"))
if(b<0)throw H.h(P.bl(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.h(H.cv(a,b))
return a[b]},
n:function(a,b,c){H.G(c,H.z(a,0))
if(!!a.immutable$list)H.y(P.aA("indexed set"))
if(b>=a.length||b<0)throw H.h(H.cv(a,b))
a[b]=c},
$if:1,
$ic:1}
J.l7.prototype={}
J.at.prototype={
gL:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.x(s))
u=t.c
if(u>=r){t.sdz(null)
return!1}t.sdz(s[u]);++t.c
return!0},
sdz:function(a){this.d=H.G(a,H.z(this,0))},
$iaP:1}
J.cP.prototype={
bH:function(a,b){var u
H.mQ(b)
if(typeof b!=="number")throw H.h(H.aU(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbJ(b)
if(this.gbJ(a)===u)return 0
if(this.gbJ(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbJ:function(a){return a===0?1/a<0:a<0},
k8:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.h(P.aA(""+a+".toInt()"))},
b9:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.aA(""+a+".floor()"))},
a4:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.aA(""+a+".round()"))},
j7:function(a,b,c){if(C.e.bH(b,c)>0)throw H.h(H.aU(b))
if(this.bH(a,b)<0)return b
if(this.bH(a,c)>0)return c
return a},
eL:function(a,b){var u
if(b>20)throw H.h(P.bl(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbJ(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
d_:function(a,b){var u
if(typeof b!=="number")throw H.h(H.aU(b))
u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
da:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dR(a,b)},
aa:function(a,b){return(a|0)===a?a/b|0:this.dR(a,b)},
dR:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.aA("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
bC:function(a,b){var u
if(a>0)u=this.iF(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iF:function(a,b){return b>31?0:a>>>b},
$iE:1,
$iai:1}
J.dT.prototype={$it:1}
J.dS.prototype={}
J.bV.prototype={
aJ:function(a,b){if(b<0)throw H.h(H.cv(a,b))
if(b>=a.length)H.y(H.cv(a,b))
return a.charCodeAt(b)},
b0:function(a,b){if(b>=a.length)throw H.h(H.cv(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(typeof b!=="string")throw H.h(P.kW(b,null,null))
return a+b},
br:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.im(b,null))
if(b>c)throw H.h(P.im(b,null))
if(c>a.length)throw H.h(P.im(c,null))
return a.substring(b,c)},
aY:function(a,b){return this.br(a,b,null)},
eM:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.b0(r,0)===133){u=J.nu(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.aJ(r,t)===133?J.l6(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
kc:function(a){var u,t,s
if(typeof a.trimRight!="undefined"){u=a.trimRight()
t=u.length
if(t===0)return u
s=t-1
if(this.aJ(u,s)===133)t=J.l6(u,s)}else{t=J.l6(a,a.length)
u=a}if(t===u.length)return u
if(t===0)return""
return u.substring(0,t)},
k:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.A)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
au:function(a,b){var u=b-a.length
if(u<=0)return a
return this.k(" ",u)+a},
bM:function(a,b){var u=b-a.length
if(u<=0)return a
return a+this.k(" ",u)},
js:function(a,b){var u=a.indexOf(b,0)
return u},
jx:function(a,b){var u=a.length,t=b.length
if(u+t>u)u-=t
return a.lastIndexOf(b,u)},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$im8:1,
$im:1}
H.a9.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.c.aJ(this.a,b)},
$aes:function(){return[P.t]},
$aC:function(){return[P.t]},
$af:function(){return[P.t]},
$ac:function(){return[P.t]}}
H.h2.prototype={}
H.dZ.prototype={
gL:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.lC(s),q=r.gl(s)
if(t.b!==q)throw H.h(P.cI(s))
u=t.c
if(u>=q){t.sbh(null)
return!1}t.sbh(r.H(s,u));++t.c
return!0},
sbh:function(a){this.d=H.G(a,H.z(this,0))},
$iaP:1}
H.hF.prototype={
gU:function(a){return new H.hG(J.cC(this.a),this.b,this.$ti)},
gl:function(a){return J.b7(this.a)},
H:function(a,b){return this.b.$1(J.lL(this.a,b))},
$af:function(a,b){return[b]}}
H.hG.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.sbh(u.c.$1(t.gL(t)))
return!0}u.sbh(null)
return!1},
gL:function(a){return this.a},
sbh:function(a){this.a=H.G(a,H.z(this,1))},
$aaP:function(a,b){return[b]}}
H.jI.prototype={
gU:function(a){return new H.jJ(J.cC(this.a),this.b,this.$ti)}}
H.jJ.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(H.D(t.$1(u.gL(u))))return!0
return!1},
gL:function(a){var u=this.a
return u.gL(u)}}
H.cf.prototype={}
H.es.prototype={}
H.er.prototype={}
H.jf.prototype={
at:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.i6.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.ho.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.jq.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.cL.prototype={}
H.kR.prototype={
$1:function(a){if(!!J.X(a).$ibQ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.f5.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iab:1}
H.cG.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$il3:1,
gke:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iZ.prototype={}
H.iQ.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cy(u)+"'"}}
H.cD.prototype={
m:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cD))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.cY(this.a)
else u=typeof t!=="object"?J.c8(t):H.cY(t)
return(u^H.cY(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.i(H.cZ(u))+"'")}}
H.jh.prototype={
i:function(a){return this.a}}
H.fK.prototype={
i:function(a){return this.a}}
H.iy.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.jL.prototype={
i:function(a){return"Assertion failed: "+P.dP(this.a)}}
H.a1.prototype={
gl:function(a){return this.a},
gaU:function(a){return new H.dY(this,[H.z(this,0)])},
e5:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.du(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.du(t,b)}else return s.jt(b)},
jt:function(a){var u=this.d
if(u==null)return!1
return this.cF(this.c1(u,J.c8(a)&0x3ffffff),a)>=0},
aI:function(a,b){J.lM(H.l(b,"$iH",this.$ti,"$aH"),new H.hn(this))},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bw(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bw(r,b)
s=t==null?null:t.b
return s}else return q.ju(b)},
ju:function(a){var u,t,s=this.d
if(s==null)return
u=this.c1(s,J.c8(a)&0x3ffffff)
t=this.cF(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s,r,q,p,o=this
H.G(b,H.z(o,0))
H.G(c,H.z(o,1))
if(typeof b==="string"){u=o.b
o.di(u==null?o.b=o.c6():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.di(t==null?o.c=o.c6():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.c6()
r=J.c8(b)&0x3ffffff
q=o.c1(s,r)
if(q==null)o.cg(s,r,[o.c7(b,c)])
else{p=o.cF(q,b)
if(p>=0)q[p].b=c
else q.push(o.c7(b,c))}}},
M:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.z(s,0),H.z(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.h(P.cI(s))
u=u.c}},
di:function(a,b,c){var u,t=this
H.G(b,H.z(t,0))
H.G(c,H.z(t,1))
u=t.bw(a,b)
if(u==null)t.cg(a,b,t.c7(b,c))
else u.b=c},
c7:function(a,b){var u=this,t=new H.hy(H.G(a,H.z(u,0)),H.G(b,H.z(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
cF:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.P(a[t].a,b))return t
return-1},
i:function(a){return P.m4(this)},
bw:function(a,b){return a[b]},
c1:function(a,b){return a[b]},
cg:function(a,b,c){a[b]=c},
fR:function(a,b){delete a[b]},
du:function(a,b){return this.bw(a,b)!=null},
c6:function(){var u="<non-identifier-key>",t=Object.create(null)
this.cg(t,u,t)
this.fR(t,u)
return t}}
H.hn.prototype={
$2:function(a,b){var u=this.a
u.n(0,H.G(a,H.z(u,0)),H.G(b,H.z(u,1)))},
$S:function(){var u=this.a
return{func:1,ret:P.J,args:[H.z(u,0),H.z(u,1)]}}}
H.hy.prototype={}
H.dY.prototype={
gl:function(a){return this.a.a},
gU:function(a){var u=this.a,t=new H.hz(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hz.prototype={
gL:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.cI(t))
else{t=u.c
if(t==null){u.sdh(null)
return!1}else{u.sdh(t.a)
u.c=u.c.c
return!0}}},
sdh:function(a){this.d=H.G(a,H.z(this,0))},
$iaP:1}
H.kG.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.kH.prototype={
$2:function(a,b){return this.a(a,b)},
$S:32}
H.kI.prototype={
$1:function(a){return this.a(H.ad(a))},
$S:30}
H.hm.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
ghl:function(){var u=this,t=u.c
if(t!=null)return t
t=u.b
return u.c=H.m0(u.a,t.multiline,!t.ignoreCase,t.unicode,t.dotAll,!0)},
jn:function(a){var u=this.b.exec(a)
if(u==null)return
return new H.eP(u)},
fX:function(a,b){var u,t=this.ghl()
t.lastIndex=b
u=t.exec(a)
if(u==null)return
return new H.eP(u)},
$im8:1}
H.eP.prototype={$ieb:1}
H.jK.prototype={
gL:function(a){return this.d},
A:function(){var u,t,s,r,q=this,p=q.b
if(p==null)return!1
u=q.c
if(u<=p.length){t=q.a
s=t.fX(p,u)
if(s!=null){q.d=s
p=s.b
u=p.index
r=u+p[0].length
if(u===r){if(t.b.unicode){p=q.c
u=p+1
t=q.b
if(u<t.length){p=J.kE(t).aJ(t,p)
if(p>=55296&&p<=56319){p=C.c.aJ(t,u)
p=p>=56320&&p<=57343}else p=!1}else p=!1}else p=!1
r=(p?r+1:r)+1}q.c=r
return!0}}q.b=q.d=null
return!1},
$iaP:1,
$aaP:function(){return[P.eb]}}
H.cT.prototype={$ipK:1}
H.e5.prototype={
gl:function(a){return a.length},
$iK:1,
$aK:function(){}}
H.cS.prototype={
j:function(a,b){H.c1(b,a,a.length)
return a[b]},
$acf:function(){return[P.E]},
$aC:function(){return[P.E]},
$if:1,
$af:function(){return[P.E]},
$ic:1,
$ac:function(){return[P.E]}}
H.e6.prototype={
$acf:function(){return[P.t]},
$aC:function(){return[P.t]},
$if:1,
$af:function(){return[P.t]},
$ic:1,
$ac:function(){return[P.t]}}
H.i0.prototype={
j:function(a,b){H.c1(b,a,a.length)
return a[b]}}
H.i1.prototype={
j:function(a,b){H.c1(b,a,a.length)
return a[b]}}
H.i2.prototype={
j:function(a,b){H.c1(b,a,a.length)
return a[b]}}
H.i3.prototype={
j:function(a,b){H.c1(b,a,a.length)
return a[b]}}
H.i4.prototype={
j:function(a,b){H.c1(b,a,a.length)
return a[b]}}
H.e7.prototype={
gl:function(a){return a.length},
j:function(a,b){H.c1(b,a,a.length)
return a[b]},
$ipL:1}
H.i5.prototype={
gl:function(a){return a.length},
j:function(a,b){H.c1(b,a,a.length)
return a[b]},
$ipM:1}
H.df.prototype={}
H.dg.prototype={}
H.dh.prototype={}
H.di.prototype={}
P.jP.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.jO.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:35}
P.jQ.prototype={
$0:function(){this.a.$0()},
$S:2}
P.jR.prototype={
$0:function(){this.a.$0()},
$S:2}
P.fb.prototype={
fw:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cu(new P.ko(this,b),0),a)
else throw H.h(P.aA("`setTimeout()` not found."))},
fz:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cu(new P.kn(this,a,Date.now(),b),0),a)
else throw H.h(P.aA("Periodic timer."))},
$ibq:1}
P.ko.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:4}
P.kn.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.da(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.jM.prototype={
cr:function(a,b){var u,t,s=this,r=H.z(s,0)
H.dt(b,{futureOr:1,type:r})
u=!s.b||H.ds(b,"$iaK",s.$ti,"$aaK")
t=s.a
if(u)t.dj(b)
else t.dr(H.G(b,r))},
bI:function(a,b){var u=this.a
if(this.b)u.bv(a,b)
else u.dk(a,b)}}
P.kr.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:46}
P.ks.prototype={
$2:function(a,b){this.a.$2(1,new H.cL(a,H.k(b,"$iab")))},
$S:41}
P.kA.prototype={
$2:function(a,b){this.a(H.a7(a),b)},
$S:42}
P.ez.prototype={
bI:function(a,b){var u
if(a==null)a=new P.cV()
u=this.a
if(u.a!==0)throw H.h(P.mm("Future already completed"))
u.dk(a,b)},
e4:function(a){return this.bI(a,null)}}
P.jN.prototype={
cr:function(a,b){var u
H.dt(b,{futureOr:1,type:H.z(this,0)})
u=this.a
if(u.a!==0)throw H.h(P.mm("Future already completed"))
u.dj(b)}}
P.b4.prototype={
jz:function(a){if((this.c&15)!==6)return!0
return this.b.b.cS(H.n(this.d,{func:1,ret:P.a6,args:[P.O]}),a.a,P.a6,P.O)},
jp:function(a){var u=this.e,t=P.O,s={futureOr:1,type:H.z(this,1)},r=this.b.b
if(H.fr(u,{func:1,args:[P.O,P.ab]}))return H.dt(r.k5(u,a.a,a.b,null,t,P.ab),s)
else return H.dt(r.cS(H.n(u,{func:1,args:[P.O]}),a.a,null,t),s)}}
P.ah.prototype={
cT:function(a,b,c){var u,t,s,r=H.z(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.T
if(u!==C.f){H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.oz(b,u)}t=new P.ah($.T,[c])
s=b==null?1:3
this.bV(new P.b4(t,s,a,b,[r,c]))
return t},
av:function(a,b){return this.cT(a,null,b)},
dS:function(a,b,c){var u,t=H.z(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[t]})
u=new P.ah($.T,[c])
this.bV(new P.b4(u,(b==null?1:3)|16,a,b,[t,c]))
return u},
bV:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$ib4")
t.c=a}else{if(s===2){u=H.k(t.c,"$iah")
s=u.a
if(s<4){u.bV(a)
return}t.a=s
t.c=u.c}P.cs(null,null,t.b,H.n(new P.jY(t,a),{func:1,ret:-1}))}},
dM:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$ib4")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iah")
u=q.a
if(u<4){q.dM(a)
return}p.a=u
p.c=q.c}o.a=p.bB(a)
P.cs(null,null,p.b,H.n(new P.k5(o,p),{func:1,ret:-1}))}},
bA:function(){var u=H.k(this.c,"$ib4")
this.c=null
return this.bB(u)},
bB:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dq:function(a){var u,t,s=this,r=H.z(s,0)
H.dt(a,{futureOr:1,type:r})
u=s.$ti
if(H.ds(a,"$iaK",u,"$aaK"))if(H.ds(a,"$iah",u,null))P.k0(a,s)
else P.mv(a,s)
else{t=s.bA()
H.G(a,r)
s.a=4
s.c=a
P.cq(s,t)}},
dr:function(a){var u,t=this
H.G(a,H.z(t,0))
u=t.bA()
t.a=4
t.c=a
P.cq(t,u)},
bv:function(a,b){var u,t=this
H.k(b,"$iab")
u=t.bA()
t.a=8
t.c=new P.au(a,b)
P.cq(t,u)},
dj:function(a){var u=this
H.dt(a,{futureOr:1,type:H.z(u,0)})
if(H.ds(a,"$iaK",u.$ti,"$aaK")){u.fJ(a)
return}u.a=1
P.cs(null,null,u.b,H.n(new P.k_(u,a),{func:1,ret:-1}))},
fJ:function(a){var u=this,t=u.$ti
H.l(a,"$iaK",t,"$aaK")
if(H.ds(a,"$iah",t,null)){if(a.a===8){u.a=1
P.cs(null,null,u.b,H.n(new P.k4(u,a),{func:1,ret:-1}))}else P.k0(a,u)
return}P.mv(a,u)},
dk:function(a,b){this.a=1
P.cs(null,null,this.b,H.n(new P.jZ(this,a,b),{func:1,ret:-1}))},
$iaK:1}
P.jY.prototype={
$0:function(){P.cq(this.a,this.b)},
$S:2}
P.k5.prototype={
$0:function(){P.cq(this.b,this.a.a)},
$S:2}
P.k1.prototype={
$1:function(a){var u=this.a
u.a=0
u.dq(a)},
$S:17}
P.k2.prototype={
$2:function(a,b){H.k(b,"$iab")
this.a.bv(a,b)},
$1:function(a){return this.$2(a,null)},
$S:28}
P.k3.prototype={
$0:function(){this.a.bv(this.b,this.c)},
$S:2}
P.k_.prototype={
$0:function(){var u=this.a
u.dr(H.G(this.b,H.z(u,0)))},
$S:2}
P.k4.prototype={
$0:function(){P.k0(this.b,this.a)},
$S:2}
P.jZ.prototype={
$0:function(){this.a.bv(this.b,this.c)},
$S:2}
P.k8.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eG(H.n(s.d,{func:1}),null)}catch(r){u=H.ax(r)
t=H.c4(r)
if(o.d){s=H.k(o.a.a.c,"$iau").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iau")
else q.b=new P.au(u,t)
q.a=!0
return}if(!!J.X(n).$iaK){if(n instanceof P.ah&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iau")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.av(new P.k9(p),null)
s.a=!1}},
$S:4}
P.k9.prototype={
$1:function(a){return this.a},
$S:29}
P.k7.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.z(s,0)
q=H.G(n.c,r)
p=H.z(s,1)
n.a.b=s.b.b.cS(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ax(o)
t=H.c4(o)
s=n.a
s.b=new P.au(u,t)
s.a=!0}},
$S:4}
P.k6.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iau")
r=m.c
if(H.D(r.jz(u))&&r.e!=null){q=m.b
q.b=r.jp(u)
q.a=!1}}catch(p){t=H.ax(p)
s=H.c4(p)
r=H.k(m.a.a.c,"$iau")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.au(t,s)
n.a=!0}},
$S:4}
P.ex.prototype={}
P.iT.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.ah($.T,[P.t])
r.a=0
u=H.z(s,0)
t=H.n(new P.iV(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iW(r,q),{func:1,ret:-1})
W.a5(s.a,s.b,t,!1,u)
return q}}
P.iV.prototype={
$1:function(a){H.G(a,H.z(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.z(this.b,0)]}}}
P.iW.prototype={
$0:function(){this.b.dq(this.a.a)},
$S:2}
P.d2.prototype={}
P.iU.prototype={}
P.kl.prototype={}
P.bq.prototype={}
P.au.prototype={
i:function(a){return H.i(this.a)},
$ibQ:1}
P.kq.prototype={$ipZ:1}
P.ky.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cV():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.i(0)
throw u},
$S:2}
P.kf.prototype={
k6:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.T){a.$0()
return}P.mz(r,r,this,a,-1)}catch(s){u=H.ax(s)
t=H.c4(s)
P.kx(r,r,this,u,H.k(t,"$iab"))}},
k7:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.G(b,c)
try{if(C.f===$.T){a.$1(b)
return}P.mA(r,r,this,a,b,-1,c)}catch(s){u=H.ax(s)
t=H.c4(s)
P.kx(r,r,this,u,H.k(t,"$iab"))}},
j5:function(a,b){return new P.kh(this,H.n(a,{func:1,ret:b}),b)},
cm:function(a){return new P.kg(this,H.n(a,{func:1,ret:-1}))},
dZ:function(a,b){return new P.ki(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eG:function(a,b){H.n(a,{func:1,ret:b})
if($.T===C.f)return a.$0()
return P.mz(null,null,this,a,b)},
cS:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.G(b,d)
if($.T===C.f)return a.$1(b)
return P.mA(null,null,this,a,b,c,d)},
k5:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.G(b,e)
H.G(c,f)
if($.T===C.f)return a.$2(b,c)
return P.oA(null,null,this,a,b,c,d,e,f)},
eF:function(a,b,c,d){return H.n(a,{func:1,ret:b,args:[c,d]})}}
P.kh.prototype={
$0:function(){return this.a.eG(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.kg.prototype={
$0:function(){return this.a.k6(this.b)},
$S:4}
P.ki.prototype={
$1:function(a){var u=this.c
return this.a.k7(this.b,H.G(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.kd.prototype={
gU:function(a){var u=this,t=new P.eN(u,u.r,u.$ti)
t.c=u.e
return t},
gl:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.G(b,H.z(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.dm(u==null?s.b=P.lv():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.dm(t==null?s.c=P.lv():t,b)}else return s.fL(0,b)},
fL:function(a,b){var u,t,s,r=this
H.G(b,H.z(r,0))
u=r.d
if(u==null)u=r.d=P.lv()
t=r.ds(b)
s=u[t]
if(s==null)u[t]=[r.bY(b)]
else{if(r.dA(s,b)>=0)return!1
s.push(r.bY(b))}return!0},
R:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.it(this.c,b)
else return this.is(0,b)},
is:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.h3(r,b)
t=s.dA(u,b)
if(t<0)return!1
s.dT(u.splice(t,1)[0])
return!0},
dm:function(a,b){H.G(b,H.z(this,0))
if(H.k(a[b],"$ide")!=null)return!1
a[b]=this.bY(b)
return!0},
it:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$ide")
if(u==null)return!1
this.dT(u)
delete a[b]
return!0},
dD:function(){this.r=1073741823&this.r+1},
bY:function(a){var u,t=this,s=new P.de(H.G(a,H.z(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dD()
return s},
dT:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dD()},
ds:function(a){return J.c8(a)&1073741823},
h3:function(a,b){return a[this.ds(b)]},
dA:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.P(a[t].a,b))return t
return-1}}
P.de.prototype={}
P.eN.prototype={
gL:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.cI(t))
else{t=u.c
if(t==null){u.sdn(null)
return!1}else{u.sdn(H.G(t.a,H.z(u,0)))
u.c=u.c.b
return!0}}},
sdn:function(a){this.d=H.G(a,H.z(this,0))},
$iaP:1}
P.hA.prototype={$if:1,$ic:1}
P.C.prototype={
gU:function(a){return new H.dZ(a,this.gl(a),[H.du(this,a,"C",0)])},
H:function(a,b){return this.j(a,b)},
ka:function(a,b){var u,t=this,s=H.b([],[H.du(t,a,"C",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.n(s,u,t.j(a,u))
return s},
k9:function(a){return this.ka(a,!0)},
i:function(a){return P.l4(a,"[","]")}}
P.hD.prototype={}
P.hE.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.i(a)
t.a=u+": "
t.a+=H.i(b)},
$S:18}
P.am.prototype={
M:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.du(s,a,"am",0),H.du(s,a,"am",1)]})
for(u=J.cC(s.gaU(a));u.A();){t=u.gL(u)
b.$2(t,s.j(a,t))}},
gl:function(a){return J.b7(this.gaU(a))},
i:function(a){return P.m4(a)},
$iH:1}
P.kj.prototype={
i:function(a){return P.l4(this,"{","}")},
H:function(a,b){var u,t,s,r=this
P.mg(b,"index")
for(u=P.o7(r,r.r,H.z(r,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.h(P.Z(b,r,"index",null,t))},
$if:1,
$imk:1}
P.eO.prototype={}
P.cH.prototype={}
P.dI.prototype={}
P.h3.prototype={
$acH:function(){return[P.m,[P.c,P.t]]}}
P.jt.prototype={}
P.ju.prototype={
jb:function(a){var u,t,s=P.mh(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kp(u)
if(t.h1(a,0,s)!==s)t.dV(C.c.aJ(a,s-1),0)
return new Uint8Array(u.subarray(0,H.ob(0,t.b,u.length)))},
$adI:function(){return[P.m,[P.c,P.t]]}}
P.kp.prototype={
dV:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
h1:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.c.aJ(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.c.b0(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dV(r,C.c.b0(a,p)))s=p}else if(r<=2047){q=n.b
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
P.a6.prototype={}
P.aO.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.aO&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.e.bC(u,30))&1073741823},
i:function(a){var u=this,t=P.nn(H.nN(u)),s=P.dK(H.nL(u)),r=P.dK(H.nH(u)),q=P.dK(H.nI(u)),p=P.dK(H.nK(u)),o=P.dK(H.nM(u)),n=P.no(H.nJ(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.E.prototype={}
P.bP.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.bP&&this.a===b.a},
gJ:function(a){return C.e.gJ(this.a)},
i:function(a){var u,t,s,r=new P.fY(),q=this.a
if(q<0)return"-"+new P.bP(0-q).i(0)
u=r.$1(C.e.aa(q,6e7)%60)
t=r.$1(C.e.aa(q,1e6)%60)
s=new P.fX().$1(q%1e6)
return""+C.e.aa(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.fX.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:19}
P.fY.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:19}
P.bQ.prototype={}
P.fx.prototype={
i:function(a){return"Assertion failed"}}
P.cV.prototype={
i:function(a){return"Throw of null."}}
P.aV.prototype={
gc_:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbZ:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gc_()+o+u
if(!q.a)return t
s=q.gbZ()
r=P.dP(q.b)
return t+s+": "+r}}
P.cj.prototype={
gc_:function(){return"RangeError"},
gbZ:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.hk.prototype={
gc_:function(){return"RangeError"},
gbZ:function(){var u,t=H.a7(this.b)
if(typeof t!=="number")return t.a_()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gl:function(a){return this.f}}
P.jr.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.jp.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.el.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fN.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dP(u)+"."}}
P.i9.prototype={
i:function(a){return"Out of Memory"},
$ibQ:1}
P.ek.prototype={
i:function(a){return"Stack Overflow"},
$ibQ:1}
P.fS.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eG.prototype={
i:function(a){return"Exception: "+this.a}}
P.hd.prototype={
i:function(a){var u,t=this.a,s=t!=null&&""!==t?"FormatException: "+H.i(t):"FormatException",r=this.b
if(typeof r==="string"){u=r.length>78?C.c.br(r,0,75)+"...":r
return s+"\n"+u}else return s}}
P.t.prototype={}
P.f.prototype={
gl:function(a){var u,t=this.gU(this)
for(u=0;t.A();)++u
return u},
H:function(a,b){var u,t,s
P.mg(b,"index")
for(u=this.gU(this),t=0;u.A();){s=u.gL(u)
if(b===t)return s;++t}throw H.h(P.Z(b,this,"index",null,t))},
i:function(a){return P.nr(this,"(",")")}}
P.aP.prototype={}
P.c.prototype={$if:1}
P.H.prototype={}
P.J.prototype={
gJ:function(a){return P.O.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.ai.prototype={}
P.O.prototype={constructor:P.O,$iO:1,
m:function(a,b){return this===b},
gJ:function(a){return H.cY(this)},
i:function(a){return"Instance of '"+H.i(H.cZ(this))+"'"},
toString:function(){return this.i(this)}}
P.eb.prototype={}
P.ab.prototype={}
P.m.prototype={$im8:1}
P.bY.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.w.prototype={}
W.ft.prototype={
gl:function(a){return a.length}}
W.fv.prototype={
i:function(a){return String(a)}}
W.fw.prototype={
i:function(a){return String(a)}}
W.dz.prototype={}
W.cc.prototype={
cZ:function(a,b,c){if(c!=null)return a.getContext(b,P.oI(c))
return a.getContext(b)},
eQ:function(a,b){return this.cZ(a,b,null)},
$icc:1}
W.cF.prototype={$icF:1}
W.bN.prototype={
gl:function(a){return a.length}}
W.cJ.prototype={$icJ:1}
W.fO.prototype={
gl:function(a){return a.length}}
W.U.prototype={$iU:1}
W.cK.prototype={
gl:function(a){return a.length}}
W.fP.prototype={}
W.b9.prototype={}
W.ba.prototype={}
W.fQ.prototype={
gl:function(a){return a.length}}
W.fR.prototype={
gl:function(a){return a.length}}
W.fT.prototype={
gl:function(a){return a.length}}
W.dL.prototype={$idL:1}
W.fU.prototype={
i:function(a){return String(a)}}
W.dM.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[[P.ay,P.ai]]},
$aC:function(){return[[P.ay,P.ai]]},
$if:1,
$af:function(){return[[P.ay,P.ai]]},
$ic:1,
$ac:function(){return[[P.ay,P.ai]]},
$aF:function(){return[[P.ay,P.ai]]}}
W.dN.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gaw(a))+" x "+H.i(this.gar(a))},
m:function(a,b){var u
if(b==null)return!1
u=J.X(b)
if(!u.$iay)return!1
return a.left===u.gbK(b)&&a.top===u.gbO(b)&&this.gaw(a)===u.gaw(b)&&this.gar(a)===u.gar(b)},
gJ:function(a){return W.mw(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(this.gaw(a)),C.d.gJ(this.gar(a)))},
ge_:function(a){return a.bottom},
gar:function(a){return a.height},
gbK:function(a){return a.left},
gcR:function(a){return a.right},
gbO:function(a){return a.top},
gaw:function(a){return a.width},
$iay:1,
$aay:function(){return[P.ai]}}
W.fV.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[P.m]},
$aC:function(){return[P.m]},
$if:1,
$af:function(){return[P.m]},
$ic:1,
$ac:function(){return[P.m]},
$aF:function(){return[P.m]}}
W.fW.prototype={
gl:function(a){return a.length}}
W.jT.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.k(u[b],"$iaa")},
h:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var u=this.k9(this)
return new J.at(u,u.length,[H.z(u,0)])},
$aC:function(){return[W.aa]},
$af:function(){return[W.aa]},
$ac:function(){return[W.aa]}}
W.aa.prototype={
ge0:function(a){return new W.jT(a,a.children)},
ge3:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a_()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a_()
if(r<0)r=-r*0
return new P.ay(u,t,s,r,[P.ai])},
i:function(a){return a.localName},
$iaa:1}
W.o.prototype={$io:1}
W.j.prototype={
iY:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.fC(a,b,c,!1)},
fC:function(a,b,c,d){return a.addEventListener(b,H.cu(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ij:1}
W.bb.prototype={$ibb:1}
W.h7.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.bb]},
$aC:function(){return[W.bb]},
$if:1,
$af:function(){return[W.bb]},
$ic:1,
$ac:function(){return[W.bb]},
$aF:function(){return[W.bb]}}
W.h8.prototype={
gl:function(a){return a.length}}
W.hc.prototype={
gl:function(a){return a.length}}
W.bc.prototype={$ibc:1}
W.hg.prototype={
gl:function(a){return a.length}}
W.cg.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.L]},
$aC:function(){return[W.L]},
$if:1,
$af:function(){return[W.L]},
$ic:1,
$ac:function(){return[W.L]},
$icg:1,
$aF:function(){return[W.L]}}
W.bd.prototype={
jJ:function(a,b,c,d){return a.open(b,c,!0)},
$ibd:1}
W.hh.prototype={
$1:function(a){return H.k(a,"$ibd").responseText},
$S:33}
W.hi.prototype={
$1:function(a){var u,t,s,r,q
H.k(a,"$ibk")
u=this.a
t=u.status
if(typeof t!=="number")return t.cY()
s=t>=200&&t<300
r=t>307&&t<400
t=s||t===0||t===304||r
q=this.b
if(t)q.cr(0,u)
else q.e4(a)},
$S:27}
W.cN.prototype={}
W.bR.prototype={$ibR:1,
ge8:function(a){return a.data}}
W.cO.prototype={$icO:1}
W.be.prototype={$ibe:1}
W.hB.prototype={
i:function(a){return String(a)}}
W.hU.prototype={
gl:function(a){return a.length}}
W.hV.prototype={
j:function(a,b){return P.bH(a.get(H.ad(b)))},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.m,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bH(t.value[1]))}},
gaU:function(a){var u=H.b([],[P.m])
this.M(a,new W.hW(u))
return u},
gl:function(a){return a.size},
$aam:function(){return[P.m,null]},
$iH:1,
$aH:function(){return[P.m,null]}}
W.hW.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hX.prototype={
j:function(a,b){return P.bH(a.get(H.ad(b)))},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.m,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bH(t.value[1]))}},
gaU:function(a){var u=H.b([],[P.m])
this.M(a,new W.hY(u))
return u},
gl:function(a){return a.size},
$aam:function(){return[P.m,null]},
$iH:1,
$aH:function(){return[P.m,null]}}
W.hY.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.bh.prototype={$ibh:1}
W.hZ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.bh]},
$aC:function(){return[W.bh]},
$if:1,
$af:function(){return[W.bh]},
$ic:1,
$ac:function(){return[W.bh]},
$aF:function(){return[W.bh]}}
W.ak.prototype={$iak:1}
W.jS.prototype={
gU:function(a){var u=this.a.childNodes
return new W.dQ(u,u.length,[H.du(C.G,u,"F",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aC:function(){return[W.L]},
$af:function(){return[W.L]},
$ac:function(){return[W.L]}}
W.L.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.eY(a):u},
$iL:1}
W.cU.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.L]},
$aC:function(){return[W.L]},
$if:1,
$af:function(){return[W.L]},
$ic:1,
$ac:function(){return[W.L]},
$aF:function(){return[W.L]}}
W.bi.prototype={$ibi:1,
gl:function(a){return a.length}}
W.ie.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.bi]},
$aC:function(){return[W.bi]},
$if:1,
$af:function(){return[W.bi]},
$ic:1,
$ac:function(){return[W.bi]},
$aF:function(){return[W.bi]}}
W.bk.prototype={$ibk:1}
W.iw.prototype={
j:function(a,b){return P.bH(a.get(H.ad(b)))},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.m,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bH(t.value[1]))}},
gaU:function(a){var u=H.b([],[P.m])
this.M(a,new W.ix(u))
return u},
gl:function(a){return a.size},
$aam:function(){return[P.m,null]},
$iH:1,
$aH:function(){return[P.m,null]}}
W.ix.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.iz.prototype={
gl:function(a){return a.length}}
W.bm.prototype={$ibm:1}
W.iI.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.bm]},
$aC:function(){return[W.bm]},
$if:1,
$af:function(){return[W.bm]},
$ic:1,
$ac:function(){return[W.bm]},
$aF:function(){return[W.bm]}}
W.bn.prototype={$ibn:1}
W.iJ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.bn]},
$aC:function(){return[W.bn]},
$if:1,
$af:function(){return[W.bn]},
$ic:1,
$ac:function(){return[W.bn]},
$aF:function(){return[W.bn]}}
W.bo.prototype={$ibo:1,
gl:function(a){return a.length}}
W.iR.prototype={
j:function(a,b){return a.getItem(H.ad(b))},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.m,P.m]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaU:function(a){var u=H.b([],[P.m])
this.M(a,new W.iS(u))
return u},
gl:function(a){return a.length},
$aam:function(){return[P.m,P.m]},
$iH:1,
$aH:function(){return[P.m,P.m]}}
W.iS.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:36}
W.b0.prototype={$ib0:1}
W.bp.prototype={$ibp:1}
W.b1.prototype={$ib1:1}
W.j_.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.b1]},
$aC:function(){return[W.b1]},
$if:1,
$af:function(){return[W.b1]},
$ic:1,
$ac:function(){return[W.b1]},
$aF:function(){return[W.b1]}}
W.j0.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.bp]},
$aC:function(){return[W.bp]},
$if:1,
$af:function(){return[W.bp]},
$ic:1,
$ac:function(){return[W.bp]},
$aF:function(){return[W.bp]}}
W.j9.prototype={
gl:function(a){return a.length}}
W.br.prototype={$ibr:1}
W.b2.prototype={$ib2:1}
W.jc.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.br]},
$aC:function(){return[W.br]},
$if:1,
$af:function(){return[W.br]},
$ic:1,
$ac:function(){return[W.br]},
$aF:function(){return[W.br]}}
W.jd.prototype={
gl:function(a){return a.length}}
W.c_.prototype={}
W.js.prototype={
i:function(a){return String(a)}}
W.jH.prototype={
gl:function(a){return a.length}}
W.bt.prototype={
gje:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.aA("deltaY is not supported"))},
gjd:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.aA("deltaX is not supported"))},
$ibt:1}
W.dd.prototype={
iv:function(a,b){return a.requestAnimationFrame(H.cu(H.n(b,{func:1,ret:-1,args:[P.ai]}),1))},
fV:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jU.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.U]},
$aC:function(){return[W.U]},
$if:1,
$af:function(){return[W.U]},
$ic:1,
$ac:function(){return[W.U]},
$aF:function(){return[W.U]}}
W.eB.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
m:function(a,b){var u
if(b==null)return!1
u=J.X(b)
if(!u.$iay)return!1
return a.left===u.gbK(b)&&a.top===u.gbO(b)&&a.width===u.gaw(b)&&a.height===u.gar(b)},
gJ:function(a){return W.mw(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(a.width),C.d.gJ(a.height))},
gar:function(a){return a.height},
gaw:function(a){return a.width}}
W.ka.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.bc]},
$aC:function(){return[W.bc]},
$if:1,
$af:function(){return[W.bc]},
$ic:1,
$ac:function(){return[W.bc]},
$aF:function(){return[W.bc]}}
W.eU.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.L]},
$aC:function(){return[W.L]},
$if:1,
$af:function(){return[W.L]},
$ic:1,
$ac:function(){return[W.L]},
$aF:function(){return[W.L]}}
W.kk.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.bo]},
$aC:function(){return[W.bo]},
$if:1,
$af:function(){return[W.bo]},
$ic:1,
$ac:function(){return[W.bo]},
$aF:function(){return[W.bo]}}
W.km.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.b0]},
$aC:function(){return[W.b0]},
$if:1,
$af:function(){return[W.b0]},
$ic:1,
$ac:function(){return[W.b0]},
$aF:function(){return[W.b0]}}
W.jV.prototype={}
W.lu.prototype={}
W.jW.prototype={}
W.jX.prototype={
$1:function(a){return this.a.$1(H.k(a,"$io"))},
$S:37}
W.F.prototype={
gU:function(a){return new W.dQ(a,this.gl(a),[H.du(this,a,"F",0)])}}
W.dQ.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdB(J.R(u.a,t))
u.c=t
return!0}u.sdB(null)
u.c=s
return!1},
gL:function(a){return this.d},
sdB:function(a){this.d=H.G(a,H.z(this,0))},
$iaP:1}
W.eA.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.f6.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
P.fg.prototype={$ibR:1,
ge8:function(a){return this.a}}
P.kB.prototype={
$2:function(a,b){this.a[a]=b},
$S:18}
P.h9.prototype={
gc2:function(){var u=this.b,t=H.aH(u,"C",0),s=W.aa
return new H.hF(new H.jI(u,H.n(new P.ha(),{func:1,ret:P.a6,args:[t]}),[t]),H.n(new P.hb(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.b7(this.gc2().a)},
j:function(a,b){var u=this.gc2()
return u.b.$1(J.lL(u.a,b))},
gU:function(a){var u=P.m2(this.gc2(),!1,W.aa)
return new J.at(u,u.length,[H.z(u,0)])},
$aC:function(){return[W.aa]},
$af:function(){return[W.aa]},
$ac:function(){return[W.aa]}}
P.ha.prototype={
$1:function(a){return!!J.X(H.k(a,"$iL")).$iaa},
$S:38}
P.hb.prototype={
$1:function(a){return H.q(H.k(a,"$iL"),"$iaa")},
$S:40}
P.ke.prototype={
gcR:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.e(t)
return H.G(u+t,H.z(this,0))},
ge_:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.e(t)
return H.G(u+t,H.z(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
m:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.X(b)
if(!!u.$iay){t=p.a
if(t==u.gbK(b)){s=p.b
if(s==u.gbO(b)){r=p.c
if(typeof t!=="number")return t.D()
if(typeof r!=="number")return H.e(r)
q=H.z(p,0)
if(H.G(t+r,q)===u.gcR(b)){t=p.d
if(typeof s!=="number")return s.D()
if(typeof t!=="number")return H.e(t)
u=H.G(s+t,q)===u.ge_(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t=this,s=t.a,r=J.c8(s),q=t.b,p=J.c8(q),o=t.c
if(typeof s!=="number")return s.D()
if(typeof o!=="number")return H.e(o)
u=H.z(t,0)
o=C.e.gJ(H.G(s+o,u))
s=t.d
if(typeof q!=="number")return q.D()
if(typeof s!=="number")return H.e(s)
u=C.e.gJ(H.G(q+s,u))
return P.o6(P.kc(P.kc(P.kc(P.kc(0,r),p),o),u))}}
P.ay.prototype={
gbK:function(a){return this.a},
gbO:function(a){return this.b},
gaw:function(a){return this.c},
gar:function(a){return this.d}}
P.bw.prototype={$ibw:1}
P.hx.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Z(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.j(a,b)},
$aC:function(){return[P.bw]},
$if:1,
$af:function(){return[P.bw]},
$ic:1,
$ac:function(){return[P.bw]},
$aF:function(){return[P.bw]}}
P.bB.prototype={$ibB:1}
P.i7.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Z(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.j(a,b)},
$aC:function(){return[P.bB]},
$if:1,
$af:function(){return[P.bB]},
$ic:1,
$ac:function(){return[P.bB]},
$aF:function(){return[P.bB]}}
P.ih.prototype={
gl:function(a){return a.length}}
P.iY.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Z(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.j(a,b)},
$aC:function(){return[P.m]},
$if:1,
$af:function(){return[P.m]},
$ic:1,
$ac:function(){return[P.m]},
$aF:function(){return[P.m]}}
P.u.prototype={
ge0:function(a){return new P.h9(a,new W.jS(a))}}
P.bE.prototype={$ibE:1}
P.je.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Z(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.j(a,b)},
$aC:function(){return[P.bE]},
$if:1,
$af:function(){return[P.bE]},
$ic:1,
$ac:function(){return[P.bE]},
$aF:function(){return[P.bE]}}
P.eL.prototype={}
P.eM.prototype={}
P.eX.prototype={}
P.eY.prototype={}
P.f7.prototype={}
P.f8.prototype={}
P.fe.prototype={}
P.ff.prototype={}
P.fz.prototype={
gl:function(a){return a.length}}
P.fA.prototype={
j:function(a,b){return P.bH(a.get(H.ad(b)))},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.m,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bH(t.value[1]))}},
gaU:function(a){var u=H.b([],[P.m])
this.M(a,new P.fB(u))
return u},
gl:function(a){return a.size},
$aam:function(){return[P.m,null]},
$iH:1,
$aH:function(){return[P.m,null]}}
P.fB.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
P.fC.prototype={
gl:function(a){return a.length}}
P.c9.prototype={}
P.i8.prototype={
gl:function(a){return a.length}}
P.ey.prototype={}
P.dB.prototype={$idB:1}
P.dR.prototype={$idR:1}
P.ea.prototype={$iea:1}
P.ec.prototype={$iec:1}
P.ck.prototype={
eI:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.X(g)
if(!!u.$ibR&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.oJ(g))
return}if(!!u.$icO&&h==null&&t&&!0){this.iK(a,b,c,d,e,f,g)
return}throw H.h(P.nd("Incorrect number or type of arguments"))},
eH:function(a,b,c,d,e,f,g){return this.eI(a,b,c,d,e,f,g,null,null,null)},
iK:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ac:function(a,b,c){return a.uniform1f(b,c)},
bQ:function(a,b,c){return a.uniform1i(b,c)},
V:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
cV:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eO:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eP:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ick:1}
P.ed.prototype={$ied:1}
P.em.prototype={$iem:1}
P.eq.prototype={$ieq:1}
P.iK.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Z(b,a,null,null,null))
return P.bH(a.item(b))},
H:function(a,b){return this.j(a,b)},
$aC:function(){return[[P.H,,,]]},
$if:1,
$af:function(){return[[P.H,,,]]},
$ic:1,
$ac:function(){return[[P.H,,,]]},
$aF:function(){return[[P.H,,,]]}}
P.f3.prototype={}
P.f4.prototype={}
O.Y.prototype={
bs:function(a){var u=this
u.sh9(H.b([],[a]))
u.sdI(null)
u.sdF(null)
u.sdJ(null)},
d1:function(a,b,c){var u=this,t=H.aH(u,"Y",0)
H.n(b,{func:1,ret:P.a6,args:[[P.f,t]]})
t={func:1,ret:-1,args:[P.t,[P.f,t]]}
H.n(a,t)
H.n(c,t)
u.sdI(b)
u.sdF(a)
u.sdJ(c)},
bd:function(a,b){return this.d1(a,null,b)},
aQ:function(a){var u
H.l(a,"$if",[H.aH(this,"Y",0)],"$af")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dc:function(a,b){var u
H.l(b,"$if",[H.aH(this,"Y",0)],"$af")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.at(u,u.length,[H.z(u,0)])},
H:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aH(s,"Y",0)
H.G(b,r)
r=[r]
if(H.D(s.aQ(H.b([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.dc(t,H.b([b],r))}},
aI:function(a,b){var u,t,s=this
H.l(b,"$if",[H.aH(s,"Y",0)],"$af")
if(H.D(s.aQ(b))){u=s.a
t=u.length
C.a.aI(u,b)
s.dc(t,b)}},
sh9:function(a){this.a=H.l(a,"$ic",[H.aH(this,"Y",0)],"$ac")},
sdI:function(a){this.b=H.n(a,{func:1,ret:P.a6,args:[[P.f,H.aH(this,"Y",0)]]})},
sdF:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.t,[P.f,H.aH(this,"Y",0)]]})},
sdJ:function(a){H.n(a,{func:1,ret:-1,args:[P.t,[P.f,H.aH(this,"Y",0)]]})},
$if:1}
O.cR.prototype={
gl:function(a){return this.a.length},
gt:function(){var u=this.b
return u==null?this.b=D.Q():u},
b_:function(){var u=this.b
if(u!=null)u.C(null)},
gY:function(a){var u=this.a
if(u.length>0)return C.a.gcH(u)
else return V.bX()},
bN:function(a){var u=this.a
if(a==null)C.a.h(u,V.bX())
else C.a.h(u,a)
this.b_()},
aW:function(){var u=this.a
if(u.length>0){u.pop()
this.b_()}},
sc3:function(a){this.a=H.l(a,"$ic",[V.ao],"$ac")}}
E.fE.prototype={}
E.S.prototype={
an:function(a,b,c,d,e,f){var u=this
u.a=d
u.b=b
u.x=u.r=u.f=u.e=u.d=u.c=null
u.sff(0,O.l_(E.S))
u.y.bd(u.gjB(),u.gjE())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sa0(0,e)
u.sZ(f)
u.sbL(c)
if(a!=null)u.y.aI(0,a)},
dl:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.at(u,u.length,[H.z(u,0)]);u.A();){t=u.d
if(t.f==null)t.dl()}},
sa0:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().R(0,s.geA())
u=s.c
if(u!=null)u.gt().h(0,s.geA())
t=new D.I("shape",r,s.c,[F.ee])
t.b=!0
s.aB(t)}},
sZ:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gt().R(0,s.geC())
u=s.f
s.f=a
if(a!=null)a.gt().h(0,s.geC())
s.dl()
t=new D.I("technique",u,s.f,[O.bZ])
t.b=!0
s.aB(t)}},
sbL:function(a){var u,t,s=this
if(!J.P(s.r,a)){u=s.r
if(u!=null)u.gt().R(0,s.gey())
if(a!=null)a.gt().h(0,s.gey())
s.r=a
t=new D.I("mover",u,a,[U.av])
t.b=!0
s.aB(t)}},
aE:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.P(q,s.x)){u=s.x
s.x=q
t=new D.I("matrix",u,q,[V.ao])
t.b=!0
s.aB(t)}r=s.f
if(r!=null)r.aE(0,b)
for(r=s.y.a,r=new J.at(r,r.length,[H.z(r,0)]);r.A();)r.d.aE(0,b)},
ab:function(a){var u,t,s,r=this
if(!r.b)return
u=a.dx
t=r.x
u.toString
if(t==null)C.a.h(u.a,u.gY(u))
else C.a.h(u.a,t.k(0,u.gY(u)))
u.b_()
a.cO(r.f)
u=a.dy
s=(u&&C.a).gcH(u)
if(s!=null&&r.d!=null)s.cP(a,r)
for(u=r.y.a,u=new J.at(u,u.length,[H.z(u,0)]);u.A();)u.d.ab(a)
a.cN()
a.dx.aW()},
aB:function(a){var u=this.z
if(u!=null)u.C(a)},
ah:function(){return this.aB(null)},
eB:function(a){H.k(a,"$iA")
this.e=null
this.aB(a)},
jH:function(){return this.eB(null)},
eD:function(a){this.aB(H.k(a,"$iA"))},
jI:function(){return this.eD(null)},
ez:function(a){this.aB(H.k(a,"$iA"))},
jG:function(){return this.ez(null)},
ex:function(a){this.aB(H.k(a,"$iA"))},
jD:function(){return this.ex(null)},
jC:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$if",[E.S],"$af")
for(u=b.length,t=this.gew(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.ce()
o.sap(null)
o.sbj(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sap(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.ah()},
jF:function(a,b){var u,t
H.l(b,"$if",[E.S],"$af")
for(u=b.gU(b),t=this.gew();u.A();)u.gL(u).gt().R(0,t)
this.ah()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sff:function(a,b){this.y=H.l(b,"$iY",[E.S],"$aY")},
$ich:1}
E.io.prototype={
f9:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aO(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cR()
t=[V.ao]
u.sc3(H.b([],t))
u.b=null
u.gt().h(0,new E.ip(s))
s.cy=u
u=new O.cR()
u.sc3(H.b([],t))
u.b=null
u.gt().h(0,new E.iq(s))
s.db=u
u=new O.cR()
u.sc3(H.b([],t))
u.b=null
u.gt().h(0,new E.ir(s))
s.dx=u
s.siJ(H.b([],[O.bZ]))
u=s.dy;(u&&C.a).h(u,null)
s.siE(new H.a1([P.m,A.d0]))},
gjZ:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gY(s)
u=t.db
u=t.z=s.k(0,u.gY(u))
s=u}return s},
geE:function(){var u,t=this,s=t.ch
if(s==null){s=t.gjZ()
u=t.dx
u=t.ch=s.k(0,u.gY(u))
s=u}return s},
cO:function(a){var u=this.dy,t=a==null?(u&&C.a).gcH(u):a;(u&&C.a).h(u,t)},
cN:function(){var u=this.dy
if(u.length>1)u.pop()},
ck:function(a){var u=a.b
if(u.length===0)throw H.h(P.r("May not cache a shader with no name."))
if(this.fr.e5(0,u))throw H.h(P.r('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.n(0,u,a)},
siJ:function(a){this.dy=H.l(a,"$ic",[O.bZ],"$ac")},
siE:function(a){this.fr=H.l(a,"$iH",[P.m,A.d0],"$aH")}}
E.ip.prototype={
$1:function(a){var u
H.k(a,"$iA")
u=this.a
u.ch=u.z=null},
$S:6}
E.iq.prototype={
$1:function(a){var u
H.k(a,"$iA")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:6}
E.ir.prototype={
$1:function(a){var u
H.k(a,"$iA")
u=this.a
u.cx=u.ch=null},
$S:6}
E.en.prototype={
df:function(a){H.k(a,"$iA")
this.cQ()},
de:function(){return this.df(null)},
gjo:function(){var u,t=this,s=Date.now(),r=C.e.aa(P.lU(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aO(s,!1)
return u/r},
dO:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.k()
if(typeof r!=="number")return H.e(r)
u=C.d.b9(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.k()
t=C.d.b9(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lp(C.i,s.gk0())}},
cQ:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.j6(this),{func:1,ret:-1,args:[P.ai]})
C.t.fV(u)
C.t.iv(u,W.mF(t,P.ai))}},
ab:function(a){var u,t,s,r,q,p=this
try{++p.cy
p.ch=!1
p.dO()
if(a==null)a=p.d
if(a!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aO(r,!1)
s.y=P.lU(r-s.r.a).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.b_()
r=s.db
C.a.sl(r.a,0)
r.b_()
r=s.dx
C.a.sl(r.a,0)
r.b_()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
a.ab(p.e)}}catch(q){u=H.ax(q)
t=H.c4(q)
P.fs("Error: "+H.i(u))
P.fs("Stack: "+H.i(t))
throw H.h(u)}},
k_:function(){return this.ab(null)}}
E.j6.prototype={
$1:function(a){var u
H.mQ(a)
u=this.a
if(u.ch){u.ch=!1
u.k_()}},
$S:49}
Z.ew.prototype={$ipc:1}
Z.dC.prototype={
S:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ax(s)
t=P.r('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.h(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.dc.prototype={$ipd:1}
Z.ca.prototype={
aL:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
S:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].S(a)},
af:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ab:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.m],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(p,u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aJ(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.v(p,", ")+"\nAttrs:   "+C.a.v(r,", ")},
sh4:function(a){this.b=H.l(a,"$ic",[Z.bS],"$ac")},
$ipk:1}
Z.bS.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.i(H.cZ(this.c))+"'")+"]"}}
Z.bF.prototype={
gd5:function(a){var u=this.a,t=(u&$.aN().a)!==0?3:0
if((u&$.bL().a)!==0)t+=3
if((u&$.bK().a)!==0)t+=3
if((u&$.bM().a)!==0)t+=2
if((u&$.c7().a)!==0)t+=3
if((u&$.dw().a)!==0)t+=3
if((u&$.dx().a)!==0)t+=4
if((u&$.cB().a)!==0)++t
return(u&$.bJ().a)!==0?t+4:t},
j1:function(a){var u,t=$.aN(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bL()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bK()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bM()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c7()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dx()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cB()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bJ()
if((s&t.a)!==0)if(u===a)return t
return $.n9()},
m:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bF))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.m]),t=this.a
if((t&$.aN().a)!==0)C.a.h(u,"Pos")
if((t&$.bL().a)!==0)C.a.h(u,"Norm")
if((t&$.bK().a)!==0)C.a.h(u,"Binm")
if((t&$.bM().a)!==0)C.a.h(u,"Txt2D")
if((t&$.c7().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dw().a)!==0)C.a.h(u,"Clr3")
if((t&$.dx().a)!==0)C.a.h(u,"Clr4")
if((t&$.cB().a)!==0)C.a.h(u,"Weight")
if((t&$.bJ().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.v(u,"|")}}
D.fL.prototype={}
D.ce.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.A]}
H.n(b,u)
if(this.a==null)this.sap(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
R:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.A]})
u=s.a
u=u==null?null:C.a.aK(u,b)
if(u===!0){u=s.a
t=(u&&C.a).R(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.aK(u,b)
if(u===!0){u=s.b
t=(u&&C.a).R(u,b)||t}return t},
C:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.A()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.M(P.m2(u,!0,{func:1,ret:-1,args:[D.A]}),new D.h5(q))
u=r.b
if(u!=null){r.sbj(H.b([],[{func:1,ret:-1,args:[D.A]}]))
C.a.M(u,new D.h6(q))}return!0},
ct:function(){return this.C(null)},
bb:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.C(u)}}},
sap:function(a){this.a=H.l(a,"$ic",[{func:1,ret:-1,args:[D.A]}],"$ac")},
sbj:function(a){this.b=H.l(a,"$ic",[{func:1,ret:-1,args:[D.A]}],"$ac")}}
D.h5.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:20}
D.h6.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:20}
D.A.prototype={}
D.bT.prototype={}
D.bU.prototype={}
D.I.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
O.kv.prototype={
aD:function(a,b,c){var u=0,t=P.aE(null),s=this
var $async$aD=P.aG(function(d,e){if(d===1)return P.aB(e,t)
while(true)switch(u){case 0:u=2
return P.as(s.aC(H.b(a.split("\n"),[P.m]),b,!1),$async$aD)
case 2:return P.aC(null,t)}})
return P.aD($async$aD,t)},
aC:function(a,b,c){H.l(a,"$ic",[P.m],"$ac")
return this.jX(a,b,!1)},
jX:function(a,b,c){var u=0,t=P.aE(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i
var $async$aC=P.aG(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:j=0
case 3:if(!!0){u=4
break}m=j
l=a.length
if(typeof m!=="number"){s=m.a_()
u=1
break}if(!(m<l)){u=4
break}r=6
u=9
return P.as(o.ae(C.a.j(a,j),b,!1),$async$aC)
case 9:r=2
u=8
break
case 6:r=5
i=q
n=H.ax(i)
m=j
if(typeof m!=="number"){s=m.D()
u=1
break}throw H.h(P.r("Line "+H.i(m+1)+": "+H.i(n)))
u=8
break
case 5:u=2
break
case 8:m=j
if(typeof m!=="number"){s=m.D()
u=1
break}j=m+1
u=3
break
case 4:case 1:return P.aC(s,t)
case 2:return P.aB(q,t)}})
return P.aD($async$aC,t)},
ae:function(a,b,c){return this.jV(a,b,!1)},
jV:function(a,b,c){var u=0,t=P.aE(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g
var $async$ae=P.aG(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
n=J.lN(a,"#")
k=n
if(typeof k!=="number"){s=k.cY()
u=1
break}if(k>=0)a=J.lO(a,0,n)
a=J.kV(a)
if(J.b7(a)<=0){u=1
break}m=O.mD(a)
if(J.b7(m)<1){u=1
break}case 7:switch(J.R(m,0)){case"newmtl":u=9
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
case 9:k=J.R(m,1)
j=O.an()
o.c=j
o.b.n(0,k,j)
u=1
break
case 10:i=O.bG(J.R(m,1))
o.c.r.sq(0,V.l0(i))
u=1
break
case 11:i=O.bG(J.R(m,1))
o.c.x.sq(0,V.l0(i))
u=1
break
case 12:i=O.bG(J.R(m,1))
o.c.z.sq(0,V.l0(i))
u=1
break
case 13:i=O.bG(J.R(m,1))
k=i.length
if(k!==1)H.y(P.r("Shininess may only have 1 number."))
j=o.c.z
if(0>=k){s=H.d(i,0)
u=1
break}j.sa9(i[0])
u=1
break
case 14:i=O.bG(J.R(m,1))
k=i.length
if(k!==1)H.y(P.r("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.d(i,0)
u=1
break}j.sak(0,i[0])
u=1
break
case 15:i=O.bG(J.R(m,1))
k=i.length
if(k!==1)H.y(P.r("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.d(i,0)
u=1
break}k=i[0]
if(typeof k!=="number"){s=H.e(k)
u=1
break}j.sak(0,1-k)
u=1
break
case 16:u=23
return P.as(o.ca(J.R(m,1),b),$async$ae)
case 23:u=1
break
case 17:u=24
return P.as(o.cb(J.R(m,1),b),$async$ae)
case 24:u=1
break
case 18:u=25
return P.as(o.cc(J.R(m,1),b),$async$ae)
case 25:u=1
break
case 19:u=26
return P.as(o.c9(J.R(m,1),b),$async$ae)
case 26:u=1
break
case 20:u=27
return P.as(o.by(J.R(m,1),b),$async$ae)
case 27:u=1
break
case 21:u=28
return P.as(o.by(J.R(m,1),b),$async$ae)
case 28:u=1
break
case 22:u=1
break
case 8:r=2
u=6
break
case 4:r=3
g=q
l=H.ax(g)
k=P.r('Line: "'+H.i(a)+'": '+H.i(l))
throw H.h(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.aC(s,t)
case 2:return P.aB(q,t)}})
return P.aD($async$ae,t)},
ca:function(a,b){var u=0,t=P.aE(null),s=this,r
var $async$ca=P.aG(function(c,d){if(c===1)return P.aB(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.r.sai(s.a.az(r))
return P.aC(null,t)}})
return P.aD($async$ca,t)},
cb:function(a,b){var u=0,t=P.aE(null),s=this,r
var $async$cb=P.aG(function(c,d){if(c===1)return P.aB(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.x.sai(s.a.az(r))
return P.aC(null,t)}})
return P.aD($async$cb,t)},
cc:function(a,b){var u=0,t=P.aE(null),s=this,r
var $async$cc=P.aG(function(c,d){if(c===1)return P.aB(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.z.sai(s.a.az(r))
return P.aC(null,t)}})
return P.aD($async$cc,t)},
c9:function(a,b){var u=0,t=P.aE(null),s=this,r
var $async$c9=P.aG(function(c,d){if(c===1)return P.aB(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.db.sai(s.a.az(r))
return P.aC(null,t)}})
return P.aD($async$c9,t)},
by:function(a,b){var u=0,t=P.aE(null),s=this,r
var $async$by=P.aG(function(c,d){if(c===1)return P.aB(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.Q.sai(s.a.az(r))
return P.aC(null,t)}})
return P.aD($async$by,t)},
sc5:function(a){this.b=H.l(a,"$iH",[P.m,O.aL],"$aH")}}
O.dr.prototype={
skd:function(a){this.b=H.l(a,"$ic",[F.ar],"$ac")}}
O.kw.prototype={
gjl:function(){var u=this.Q,t=u.y.a,s=t.length
if(s===1){if(0>=s)return H.d(t,0)
return t[0]}return u},
aD:function(a,b,c){var u=0,t=P.aE(null),s=this
var $async$aD=P.aG(function(d,e){if(d===1)return P.aB(e,t)
while(true)switch(u){case 0:u=2
return P.as(s.aC(H.b(a.split("\n"),[P.m]),b,!1),$async$aD)
case 2:return P.aC(null,t)}})
return P.aD($async$aD,t)},
aC:function(a,b,c){H.l(a,"$ic",[P.m],"$ac")
return this.jY(a,b,!1)},
jY:function(a,b,c){var u=0,t=P.aE(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i
var $async$aC=P.aG(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:j=0
case 3:if(!!0){u=4
break}m=j
l=a.length
if(typeof m!=="number"){s=m.a_()
u=1
break}if(!(m<l)){u=4
break}r=6
u=9
return P.as(o.ae(C.a.j(a,j),b,!1),$async$aC)
case 9:r=2
u=8
break
case 6:r=5
i=q
n=H.ax(i)
m=j
if(typeof m!=="number"){s=m.D()
u=1
break}throw H.h(P.r("Line "+H.i(m+1)+": "+H.i(n)))
u=8
break
case 5:u=2
break
case 8:m=j
if(typeof m!=="number"){s=m.D()
u=1
break}j=m+1
u=3
break
case 4:case 1:return P.aC(s,t)
case 2:return P.aB(q,t)}})
return P.aD($async$aC,t)},
ae:function(a,b,c){return this.jW(a,b,!1)},
jW:function(a,b,c){var u=0,t=P.aE(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$ae=P.aG(function(d,a0){if(d===1){q=a0
u=r}while(true)switch(u){case 0:r=4
n=J.lN(a,"#")
k=n
if(typeof k!=="number"){s=k.cY()
u=1
break}if(k>=0)a=J.lO(a,0,n)
a=J.kV(a)
if(J.b7(a)<=0){u=1
break}m=O.mD(a)
if(J.b7(m)<1){u=1
break}case 7:switch(J.R(m,0)){case"v":u=9
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
case 9:j=O.bG(J.R(m,1))
k=j.length
if(k<3)H.y(P.r("Positions must have at least 3 numbers."))
if(k>4)H.y(P.r("Positions must have at most than 4 numbers."))
if(k===4){if(3>=k){s=H.d(j,3)
u=1
break}i=j[3]
h=$.N()
h.toString
if(typeof i!=="number"){s=i.p()
u=1
break}if(!(Math.abs(i-1)<h.a))H.y(P.r("Currently, non-one w values in positions are not supported."))}i=o.b
if(0>=k){s=H.d(j,0)
u=1
break}h=j[0]
if(1>=k){s=H.d(j,1)
u=1
break}g=j[1]
if(2>=k){s=H.d(j,2)
u=1
break}g=[h,g,j[2]]
g=new O.dr(new V.al(g[0],g[1],g[2]))
g.skd(H.b([],[F.ar]))
C.a.h(i,g)
u=1
break
case 10:j=O.bG(J.R(m,1))
k=j.length
if(k<2)H.y(P.r("Textures must have at least 2 numbers."))
if(k>3)H.y(P.r("Textures must have at most than 3 numbers."))
if(k===3){if(2>=k){s=H.d(j,2)
u=1
break}i=j[2]
h=$.N()
h.toString
if(typeof i!=="number"){s=i.p()
u=1
break}if(!(Math.abs(i-0)<h.a))H.y(P.r("Currently, non-zero z values in textures are not supported."))}i=o.c
if(0>=k){s=H.d(j,0)
u=1
break}h=j[0]
if(1>=k){s=H.d(j,1)
u=1
break}h=[h,j[1]]
C.a.h(i,new V.a4(h[0],h[1]))
u=1
break
case 11:j=O.bG(J.R(m,1))
k=j.length
if(k!==3)H.y(P.r("Normals must have exactly 3 numbers."))
i=o.d
if(0>=k){s=H.d(j,0)
u=1
break}h=j[0]
if(1>=k){s=H.d(j,1)
u=1
break}g=j[1]
if(2>=k){s=H.d(j,2)
u=1
break}C.a.h(i,new V.M(h,g,j[2]))
u=1
break
case 12:o.ir(J.R(m,1))
u=1
break
case 13:o.iq(J.R(m,1))
u=1
break
case 14:o.ip(J.R(m,1))
u=1
break
case 15:u=20
return P.as(o.bz(J.R(m,1),b,!1),$async$ae)
case 20:u=1
break
case 16:k=J.R(m,1)
o.x=H.k(o.e.j(0,k),"$iaL")
o.bD()
u=1
break
case 17:o.r=J.R(m,1)
o.bD()
u=1
break
case 18:o.r=J.R(m,1)
o.bD()
u=1
break
case 19:u=1
break
case 8:r=2
u=6
break
case 4:r=3
e=q
l=H.ax(e)
k=P.r('Line: "'+H.i(a)+'": '+H.i(l))
throw H.h(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.aC(s,t)
case 2:return P.aB(q,t)}})
return P.aD($async$ae,t)},
bD:function(){var u,t,s,r=this
if(r.z==null||r.y.a.c.length!==0){u=F.ll()
r.y=u
u=E.a0(null,!0,null,"",u,null)
r.z=u
r.Q.y.h(0,u)
for(u=r.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.sl(u[s].b,0)}r.z.sZ(r.x)
r.z.a=r.r},
bW:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=", was out of range [-",g=null,f=a.split("/"),e=f.length
if(0>=e)return H.d(f,0)
u=P.lF(f[0])
t=i.b.length
if(typeof u!=="number")return u.a_()
if(u<-t||u>t||u===0)throw H.h(P.r("The position index, "+u+h+t+".."+t+"] or 0."))
if(u<0)u=t+u+1;--u
if(e>1){s=f[1]
if(s!=null&&s.length>0){r=P.lF(s)
q=i.c
t=q.length
if(typeof r!=="number")return r.a_()
if(r<-t||r>t||r===0)throw H.h(P.r("The texture index, "+r+h+t+".."+t+"] or 0."))
if(r<0)r=t+r+1
p=r-1
if(p<0||p>=t)return H.d(q,p)
o=q[p]}else o=g}else o=g
if(e>2){s=f[2]
if(s!=null&&s.length>0){n=P.lF(s)
e=i.d
t=e.length
if(typeof n!=="number")return n.a_()
if(n<-t||n>t||n===0)throw H.h(P.r("The normal index, "+n+h+t+".."+t+"] or 0."))
if(n<0)n=t+n+1
q=n-1
if(q<0||q>=t)return H.d(e,q)
m=e[q]}else m=g}else m=g
e=i.b
if(u<0||u>=e.length)return H.d(e,u)
l=e[u]
for(e=l.b,q=e.length,k=0;k<e.length;e.length===q||(0,H.x)(e),++k){j=e[k]
if(J.P(j.y,o)&&J.P(j.r,m))return j}j=F.ls(g,g,g,g,g,g,g,g,0)
e=l.a
if(!J.P(j.f,e)){j.f=e
e=j.a
if(e!=null)e.ah()}if(!J.P(j.y,o)){j.y=o
e=j.a
if(e!=null)e.ah()}m=m==null?g:m.u(0,Math.sqrt(m.F(m)))
if(!J.P(j.r,m)){j.r=m
e=j.a
if(e!=null)e.ah()}i.y.a.h(0,j)
C.a.h(l.b,j)
return j},
ir:function(a){var u,t=O.kz(a),s=H.b([],[F.ar]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.d(t,u)
C.a.h(s,this.bW(t[u]))}this.y.b.j_(s)},
iq:function(a){var u,t=O.kz(a),s=H.b([],[F.ar]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.d(t,u)
C.a.h(s,this.bW(t[u]))}this.y.c.iZ(s)},
ip:function(a){var u,t=O.kz(a),s=H.b([],[F.ar]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.d(t,u)
C.a.h(s,this.bW(t[u]))}this.y.d.cj(s)},
bz:function(a,b,c){var u=0,t=P.aE(null),s=this,r
var $async$bz=P.aG(function(d,e){if(d===1)return P.aB(e,t)
while(true)switch(u){case 0:u=2
return P.as(O.e4(b+"/"+a,s.a,!1),$async$bz)
case 2:r=e
s.e.aI(0,r)
return P.aC(null,t)}})
return P.aD($async$bz,t)},
sim:function(a){this.b=H.l(a,"$ic",[O.dr],"$ac")},
siL:function(a){this.c=H.l(a,"$ic",[V.a4],"$ac")},
shm:function(a){this.d=H.l(a,"$ic",[V.M],"$ac")},
sc5:function(a){this.e=H.l(a,"$iH",[P.m,O.aL],"$aH")}}
O.ii.prototype={}
X.dD.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dD))return!1
if(this.a!=b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dW.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dW))return!1
if(this.a!=b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.hp.prototype={
jO:function(a){this.d.h(0,a.a)
return!1},
jK:function(a){this.d.R(0,a.a)
return!1},
sio:function(a){this.d=H.l(a,"$imk",[P.t],"$amk")}}
X.e_.prototype={}
X.hC.prototype={
bi:function(a,b){var u,t,s,r,q,p=this,o=Date.now(),n=p.x,m=b.a,l=p.Q
if(typeof m!=="number")return m.k()
u=b.b
t=p.ch
if(typeof u!=="number")return u.k()
s=n.a
if(typeof s!=="number")return s.D()
n=n.b
if(typeof n!=="number")return n.D()
r=new V.a4(s+m*l,n+u*t)
t=p.a.gbG()
q=new X.aY(a,V.bD(),p.x,t,r)
q.b=!0
p.z=new P.aO(o,!1)
p.x=r
return q},
cM:function(a,b){this.r=a.a
return!1},
bp:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eR()
if(typeof u!=="number")return u.w()
this.r=(u&~t)>>>0
return!1},
bo:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.bi(a,b))
return!0},
jP:function(a){return!1},
hQ:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.e_(c,r.a.gbG(),b)
s.b=!0
t.C(s)
r.y=new P.aO(u,!1)
r.x=V.bD()}}
X.bz.prototype={
m:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bz))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.D(this.b)?"Alt+":""
return u+(H.D(this.c)?"Shift+":"")}}
X.aY.prototype={}
X.i_.prototype={
c0:function(a,b,c){var u=this,t=new P.aO(Date.now(),!1),s=u.a.gbG(),r=new X.aY(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cM:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.C(this.c0(a,b,!0))
return!0},
bp:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eR()
if(typeof t!=="number")return t.w()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.C(u.c0(a,b,!0))
return!0},
bo:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.c0(a,b,!1))
return!0},
jQ:function(a,b){return!1},
ge9:function(){var u=this.b
return u==null?this.b=D.Q():u},
gcW:function(){var u=this.c
return u==null?this.c=D.Q():u},
gbn:function(){var u=this.d
return u==null?this.d=D.Q():u}}
X.ig.prototype={}
X.d9.prototype={}
X.jb.prototype={
bi:function(a,b){var u,t,s,r,q=this
H.l(a,"$ic",[V.a4],"$ac")
u=new P.aO(Date.now(),!1)
t=a.length>0?a[0]:V.bD()
s=q.a.gbG()
r=new X.d9(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
jN:function(a){var u
H.l(a,"$ic",[V.a4],"$ac")
u=this.b
if(u==null)return!1
u.C(this.bi(a,!0))
return!0},
jL:function(a){var u
H.l(a,"$ic",[V.a4],"$ac")
u=this.c
if(u==null)return!1
u.C(this.bi(a,!0))
return!0},
jM:function(a){var u
H.l(a,"$ic",[V.a4],"$ac")
u=this.d
if(u==null)return!1
u.C(this.bi(a,!1))
return!0},
gd6:function(a){var u=this.b
return u==null?this.b=D.Q():u},
gea:function(a){var u=this.c
return u==null?this.c=D.Q():u},
gbn:function(){var u=this.d
return u==null?this.d=D.Q():u}}
X.et.prototype={
gbG:function(){var u=this.a,t=C.h.ge3(u).c
t.toString
u=C.h.ge3(u).d
u.toString
return V.mi(0,0,t,u)},
dv:function(a){var u=a.keyCode,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.dW(u,new X.bz(t,a.altKey,a.shiftKey))},
b5:function(a){if(!H.D(a.ctrlKey))H.D(a.metaKey)
a.shiftKey},
ci:function(a){if(!H.D(a.ctrlKey))H.D(a.metaKey)
a.shiftKey},
aR:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.p()
u=t.top
if(typeof r!=="number")return r.p()
return new V.a4(s-q,r-u)},
bk:function(a){return new V.a2(a.movementX,a.movementY)},
cd:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a4])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
q=C.d.a4(r.pageX)
C.d.a4(r.pageY)
p=o.left
C.d.a4(r.pageX)
C.a.h(n,new V.a4(q-p,C.d.a4(r.pageY)-o.top))}return n},
aN:function(a){var u=a.buttons,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.dD(u,new X.bz(t,a.altKey,a.shiftKey))},
c4:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.p()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.p()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
hI:function(a){this.f=!0},
hw:function(a){this.f=!1},
hC:function(a){H.k(a,"$iak")
if(H.D(this.f)&&this.c4(a))a.preventDefault()},
hO:function(a){var u
H.k(a,"$ibe")
if(!H.D(this.f))return
u=this.dv(a)
this.b.jO(u)},
hM:function(a){var u
H.k(a,"$ibe")
if(!H.D(this.f))return
u=this.dv(a)
this.b.jK(u)},
hS:function(a){var u,t,s,r,q=this
H.k(a,"$iak")
u=q.a
u.focus()
q.f=!0
q.b5(a)
if(H.D(q.x)){t=q.aN(a)
s=q.bk(a)
if(q.d.cM(t,s))a.preventDefault()
return}if(H.D(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aN(a)
r=q.aR(a)
if(q.c.cM(t,r))a.preventDefault()},
hW:function(a){var u,t,s,r=this
H.k(a,"$iak")
r.b5(a)
u=r.aN(a)
if(H.D(r.x)){t=r.bk(a)
if(r.d.bp(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aR(a)
if(r.c.bp(u,s))a.preventDefault()},
hG:function(a){var u,t,s,r=this
H.k(a,"$iak")
if(!r.c4(a)){r.b5(a)
u=r.aN(a)
if(H.D(r.x)){t=r.bk(a)
if(r.d.bp(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aR(a)
if(r.c.bp(u,s))a.preventDefault()}},
hU:function(a){var u,t,s,r=this
H.k(a,"$iak")
r.b5(a)
u=r.aN(a)
if(H.D(r.x)){t=r.bk(a)
if(r.d.bo(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aR(a)
if(r.c.bo(u,s))a.preventDefault()},
hE:function(a){var u,t,s,r=this
H.k(a,"$iak")
if(!r.c4(a)){r.b5(a)
u=r.aN(a)
if(H.D(r.x)){t=r.bk(a)
if(r.d.bo(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aR(a)
if(r.c.bo(u,s))a.preventDefault()}},
hY:function(a){var u,t,s=this
H.k(a,"$ibt")
s.b5(a)
u=new V.a2((a&&C.r).gjd(a),C.r.gje(a)).u(0,180)
if(H.D(s.x)){if(s.d.jP(u))a.preventDefault()
return}if(H.D(s.r))return
t=s.aR(a)
if(s.c.jQ(u,t))a.preventDefault()},
i_:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aN(s.y)
t=s.aR(s.y)
s.d.hQ(u,t,r)}},
ih:function(a){var u,t=this
H.k(a,"$ib2")
t.a.focus()
t.f=!0
t.ci(a)
u=t.cd(a)
if(t.e.jN(u))a.preventDefault()},
ib:function(a){var u
H.k(a,"$ib2")
this.ci(a)
u=this.cd(a)
if(this.e.jL(u))a.preventDefault()},
ie:function(a){var u
H.k(a,"$ib2")
this.ci(a)
u=this.cd(a)
if(this.e.jM(u))a.preventDefault()},
sfW:function(a){this.z=H.l(a,"$ic",[[P.d2,P.O]],"$ac")}}
D.cd.prototype={
bt:function(a){var u
H.k(a,"$iA")
u=this.r
if(u!=null)u.C(a)},
sq:function(a,b){var u,t,s=this
if(b==null)b=new V.v(1,1,1)
if(!s.c.m(0,b)){u=s.c
s.c=b
t=new D.I("color",u,b,[V.v])
t.b=!0
s.bt(t)}},
$iaj:1,
$ich:1}
D.aj.prototype={$ich:1}
D.dX.prototype={
bt:function(a){var u=this.x
if(u!=null)u.C(a)},
dH:function(a){var u
H.k(a,"$iA")
u=this.y
if(u!=null)u.C(a)},
hP:function(){return this.dH(null)},
i1:function(a){var u,t,s
H.l(a,"$if",[D.aj],"$af")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t){s=a[t]
if(s==null||this.fM(s))return!1}return!0},
hq:function(a,b){var u,t,s,r,q,p,o,n=D.aj
H.l(b,"$if",[n],"$af")
for(u=b.length,t=this.gdG(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=H.k(b[q],"$iaj")
if(p instanceof D.cd)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.ce()
o.sap(null)
o.sbj(null)
o.c=null
o.d=0
p.r=o}H.n(t,s)
if(o.a==null)o.sap(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bT([n])
n.b=!0
this.bt(n)},
i5:function(a,b){var u,t,s,r=D.aj
H.l(b,"$if",[r],"$af")
for(u=b.gU(b),t=this.gdG();u.A();){s=u.gL(u)
C.a.R(this.e,s)
s.gt().R(0,t)}r=new D.bU([r])
r.b=!0
this.bt(r)},
fM:function(a){var u=C.a.aK(this.e,a)
return u},
sfg:function(a){this.e=H.l(a,"$ic",[D.cd],"$ac")},
sij:function(a){this.f=H.l(a,"$ic",[D.e9],"$ac")},
sfh:function(a){this.r=H.l(a,"$ic",[D.ej],"$ac")},
$af:function(){return[D.aj]},
$aY:function(){return[D.aj]}}
D.e9.prototype={$iaj:1,$ich:1}
D.ej.prototype={$iaj:1,$ich:1}
V.v.prototype={
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.v))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
V.af.prototype={
eN:function(){var u=this
return new V.af(Math.floor(u.a*255)/255,Math.floor(u.b*255)/255,Math.floor(u.c*255)/255,Math.floor(u.d*255)/255)},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.af))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.V(u.a,3,0)+", "+V.V(u.b,3,0)+", "+V.V(u.c,3,0)+", "+V.V(u.d,3,0)+"]"}}
V.h4.prototype={}
V.e2.prototype={
aj:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.E])
return t},
m:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.e2))return!1
u=b.a
t=r.a
s=$.N()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=r.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=r.x
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.E],o=V.cw(H.b([q.a,q.d,q.r],p),3,0),n=V.cw(H.b([q.b,q.e,q.x],p),3,0),m=V.cw(H.b([q.c,q.f,q.y],p),3,0)
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
V.ao.prototype={
aj:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.E])
return t},
cG:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=a9.f
if(typeof b0!=="number")return b0.k()
if(typeof b1!=="number")return H.e(b1)
u=a9.b
t=a9.e
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.e(t)
s=b0*b1-u*t
r=a9.r
if(typeof r!=="number")return H.e(r)
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
if(Math.abs(a5-0)<$.N().a)return V.bX()
a6=1/a5
a7=-t
a8=-f
return V.by((b1*a4-r*a3+o*a2)*a6,(-u*a4+q*a3-n*a2)*a6,(h*j-d*k+a*l)*a6,(-g*j+c*k-a0*l)*a6,(a7*a4+r*a1-o*b)*a6,(b0*a4-q*a1+n*b)*a6,(a8*j+d*m-a*p)*a6,(i*j-c*m+a0*p)*a6,(t*a3-b1*a1+o*e)*a6,(-b0*a3+u*a1-n*e)*a6,(f*k-h*m+a*s)*a6,(-i*k+g*m-a0*s)*a6,(a7*a2+b1*b-r*e)*a6,(b0*a2-u*b+q*e)*a6,(a8*l+h*p-d*s)*a6,(i*l-g*p+c*s)*a6)},
k:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=b3.a
if(typeof b0!=="number")return b0.k()
if(typeof b1!=="number")return H.e(b1)
u=a9.b
t=b3.e
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.e(t)
s=a9.c
r=b3.y
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.e(r)
q=a9.d
p=b3.cx
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
return V.by(b0*b1+u*t+s*r+q*p,b0*o+u*n+s*m+q*l,b0*k+u*j+s*i+q*h,b0*g+u*f+s*e+q*d,c*b1+b*t+a*r+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,c*g+b*f+a*e+a0*d,a1*b1+a2*t+a3*r+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h,a1*g+a2*f+a3*e+a4*d,a5*b1+a6*t+a7*r+a8*p,a5*o+a6*n+a7*m+a8*l,a5*k+a6*j+a7*i+a8*h,a5*g+a6*f+a7*e+a8*d)},
bP:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.e(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.e(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.e(r)
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
return new V.M(j*i+u*t+s*r,q*i+p*t+o*r,n*i+m*t+l*r)},
cU:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.e(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.e(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.e(r)
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
return new V.al(j*i+u*t+s*r+k.d,q*i+p*t+o*r+k.x,n*i+m*t+l*r+k.ch)},
m:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ao))return!1
u=b.a
t=r.a
s=$.N()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-r.d)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.x-r.x)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.z
t=r.z
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=r.Q
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-r.ch)<s))return!1
if(!(Math.abs(b.cx-r.cx)<s))return!1
if(!(Math.abs(b.cy-r.cy)<s))return!1
if(!(Math.abs(b.db-r.db)<s))return!1
if(!(Math.abs(b.dx-r.dx)<s))return!1
return!0},
i:function(a){return this.N()},
G:function(a){var u,t,s,r,q,p=this,o=[P.E],n=V.cw(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.cw(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.cw(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.cw(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
N:function(){return this.G("")}}
V.a4.prototype={
p:function(a,b){var u,t,s=this.a,r=b.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.e(r)
u=this.b
t=b.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
return new V.a4(s-r,u-t)},
m:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=this.a
s=$.N()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}}
V.al.prototype={
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
return new V.al(q-p,u-t,s-r)},
m:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.al))return!1
u=b.a
t=r.a
s=$.N()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
V.bj.prototype={
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bj))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.V(u.a,3,0)+", "+V.V(u.b,3,0)+", "+V.V(u.c,3,0)+", "+V.V(u.d,3,0)+"]"}}
V.d_.prototype={
gaM:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d_))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.V(u.a,3,0)+", "+V.V(u.b,3,0)+", "+V.V(u.c,3,0)+", "+V.V(u.d,3,0)+"]"}}
V.a2.prototype={
cI:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.e(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.e(t)
return s*r+u*t},
k:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.k()
u=this.b
if(typeof u!=="number")return u.k()
return new V.a2(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.N().a){u=$.ms
return u==null?$.ms=new V.a2(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.a2(u/b,t/b)},
m:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=this.a
s=$.N()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}}
V.M.prototype={
cI:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u,t,s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.e(p)
u=this.b
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.e(t)
s=this.c
r=a.c
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.e(r)
return q*p+u*t+s*r},
bm:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.e(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.e(t)
s=a.a
if(typeof s!=="number")return H.e(s)
r=this.a
if(typeof r!=="number")return r.k()
return new V.M(q*p-u*t,u*s-r*p,r*t-q*s)},
D:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.D()
if(typeof p!=="number")return H.e(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.e(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.D()
if(typeof r!=="number")return H.e(r)
return new V.M(q+p,u+t,s+r)},
O:function(a){var u,t,s=this.a
if(typeof s!=="number")return s.O()
u=this.b
if(typeof u!=="number")return u.O()
t=this.c
if(typeof t!=="number")return t.O()
return new V.M(-s,-u,-t)},
u:function(a,b){var u,t,s
if(Math.abs(b-0)<$.N().a)return V.ev()
u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
s=this.c
if(typeof s!=="number")return s.u()
return new V.M(u/b,t/b,s/b)},
es:function(){var u=this.a,t=$.N()
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
m:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=r.a
s=$.N()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
U.fM.prototype={
bX:function(a){var u=this.a,t=this.c,s=this.b
if(u)return V.pb(a,t,s)
else{if(a<t)u=t
else u=a>s?s:a
return u}},
gt:function(){var u=this.y
return u==null?this.y=D.Q():u},
X:function(a){var u=this.y
if(u!=null)u.C(a)},
scX:function(a,b){var u=this.a
if(u!==b){this.a=b
u=new D.I("wrap",u,b,[P.a6])
u.b=!0
this.X(u)}},
scK:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.N().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bX(u)}s=new D.I("maximumLocation",s,t.b,[P.E])
s.b=!0
t.X(s)}},
scL:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.N().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bX(u)}s=new D.I("minimumLocation",s,t.c,[P.E])
s.b=!0
t.X(s)}},
sas:function(a,b){var u,t=this
b=t.bX(b)
u=t.d
if(!(Math.abs(u-b)<$.N().a)){t.d=b
u=new D.I("location",u,b,[P.E])
u.b=!0
t.X(u)}},
seu:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.N().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.I("maximumVelocity",r,a,[P.E])
r.b=!0
s.X(r)}},
sa5:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.N().a)){u.f=a
t=new D.I("velocity",t,a,[P.E])
t.b=!0
u.X(t)}},
se7:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.N().a)){this.x=a
u=new D.I("dampening",u,a,[P.E])
u.b=!0
this.X(u)}},
aE:function(a,b){var u,t,s,r=this,q=r.f,p=$.N().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sas(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.N().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sa5(u)}}}
U.dH.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.Q():u},
sY:function(a,b){var u,t,s,r=this
if(b==null)b=V.bX()
if(!J.P(r.a,b)){u=r.a
r.a=b
t=new D.I("matrix",u,b,[V.ao])
t.b=!0
s=r.b
if(s!=null)s.C(t)}},
bR:function(a,b,c){return this.a},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dH))return!1
return J.P(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cM.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.Q():u},
X:function(a){var u
H.k(a,"$iA")
u=this.e
if(u!=null)u.C(a)},
aH:function(){return this.X(null)},
ho:function(a,b){var u,t,s,r,q,p,o,n=U.av
H.l(b,"$if",[n],"$af")
for(u=b.length,t=this.gbx(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.gt()
o.toString
H.n(t,s)
if(o.a==null)o.sap(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bT([n])
n.b=!0
this.X(n)},
i3:function(a,b){var u,t,s=U.av
H.l(b,"$if",[s],"$af")
for(u=b.gU(b),t=this.gbx();u.A();)u.gL(u).gt().R(0,t)
s=new D.bU([s])
s.b=!0
this.X(s)},
bR:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a_()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.at(r,r.length,[H.z(r,0)]),u=null;r.A();){q=r.d
if(q!=null){t=q.bR(0,b,c)
if(t!=null)u=u==null?t:t.k(0,u)}}s.f=u==null?V.bX():u
r=s.e
if(r!=null)r.bb(0)}return s.f},
m:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cM))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.P(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$af:function(){return[U.av]},
$aY:function(){return[U.av]},
$iav:1}
U.av.prototype={}
U.eu.prototype={
gt:function(){var u=this.fx
return u==null?this.fx=D.Q():u},
X:function(a){var u
H.k(a,"$iA")
u=this.fx
if(u!=null)u.C(a)},
aH:function(){return this.X(null)},
cl:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.ge9().h(0,s.gfi())
s.a.c.gbn().h(0,s.gfk())
s.a.c.gcW().h(0,s.gfm())
u=s.a.d
t=u.f
u=t==null?u.f=D.Q():t
u.h(0,s.gha())
u=s.a.d
t=u.d
u=t==null?u.d=D.Q():t
u.h(0,s.ghc())
u=s.a.e
u.gd6(u).h(0,s.gft())
s.a.e.gbn().h(0,s.gfq())
u=s.a.e
u.gea(u).h(0,s.gfo())
return!0},
aG:function(a){var u=a.a,t=a.b
if(H.D(this.f)){if(typeof u!=="number")return u.O()
u=-u}if(H.D(this.r)){if(typeof t!=="number")return t.O()
t=-t}return new V.a2(u,t)},
fj:function(a){var u=this
a=H.q(H.k(a,"$iA"),"$iaY")
if(!J.P(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fl:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.k(a,"$iA"),"$iaY")
if(!H.D(n.cx))return
if(H.D(n.ch)){u=a.d.p(0,a.y)
u=new V.a2(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.e(t)
if(u<t)return
n.ch=!1}if(H.D(n.e)){u=a.c
t=a.d.p(0,a.y)
u=n.aG(new V.a2(t.a,t.b).k(0,2).u(0,u.gaM()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.e(s)
t.sa5(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.e(t)
s.sa5(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.aG(new V.a2(s.a,s.b).k(0,2).u(0,u.gaM()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.e(p)
o=n.cy
if(typeof o!=="number")return H.e(o)
s.sas(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.e(q)
s=n.db
if(typeof s!=="number")return H.e(s)
o.sas(0,-p*q+s)
n.b.sa5(0)
n.c.sa5(0)
t=t.p(0,a.z)
n.dx=n.aG(new V.a2(t.a,t.b).k(0,2).u(0,u.gaM()))}n.aH()},
fn:function(a){var u,t,s,r=this
H.k(a,"$iA")
if(!H.D(r.cx))return
r.cx=!1
if(H.D(r.ch))return
u=r.dx
if(u.F(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.e(s)
u.sa5(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.e(u)
s.sa5(-t*10*u)
r.aH()}},
hb:function(a){var u=this
if(H.q(H.k(a,"$iA"),"$ie_").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
hd:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.k(a,"$iA"),"$iaY")
if(!J.P(n.d,a.x.b))return
u=a.c
t=a.d
s=t.p(0,a.y)
r=n.aG(new V.a2(s.a,s.b).k(0,2).u(0,u.gaM()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.e(p)
o=n.cy
if(typeof o!=="number")return H.e(o)
s.sas(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.e(q)
s=n.db
if(typeof s!=="number")return H.e(s)
o.sas(0,-p*q+s)
n.b.sa5(0)
n.c.sa5(0)
t=t.p(0,a.z)
n.dx=n.aG(new V.a2(t.a,t.b).k(0,2).u(0,u.gaM()))
n.aH()},
fu:function(a){var u=this
H.k(a,"$iA")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fs:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.k(a,"$iA"),"$id9")
if(!H.D(n.cx))return
if(H.D(n.ch)){u=a.d.p(0,a.y)
u=new V.a2(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.e(t)
if(u<t)return
n.ch=!1}if(H.D(n.e)){u=a.c
t=a.d.p(0,a.y)
u=n.aG(new V.a2(t.a,t.b).k(0,2).u(0,u.gaM()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.e(s)
t.sa5(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.e(t)
s.sa5(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.aG(new V.a2(s.a,s.b).k(0,2).u(0,u.gaM()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.e(p)
o=n.cy
if(typeof o!=="number")return H.e(o)
s.sas(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.e(q)
s=n.db
if(typeof s!=="number")return H.e(s)
o.sas(0,-p*q+s)
n.b.sa5(0)
n.c.sa5(0)
t=t.p(0,a.z)
n.dx=n.aG(new V.a2(t.a,t.b).k(0,2).u(0,u.gaM()))}n.aH()},
fp:function(a){var u,t,s,r=this
H.k(a,"$iA")
if(!H.D(r.cx))return
r.cx=!1
if(H.D(r.ch))return
u=r.dx
if(u.F(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.e(s)
u.sa5(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.e(u)
s.sa5(-t*10*u)
r.aH()}},
bR:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.a_()
if(s<r){t.dy=r
u=b.y
t.c.aE(0,u)
t.b.aE(0,u)
t.fr=V.m5(t.b.d).k(0,V.ld(t.c.d))}return t.fr},
$iav:1}
M.dG.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.Q():u},
a1:function(a){var u
H.k(a,"$iA")
u=this.r
if(u!=null)u.C(a)},
bf:function(){return this.a1(null)},
i7:function(a,b){var u,t,s,r,q,p,o,n=M.aM
H.l(b,"$if",[n],"$af")
for(u=b.length,t=this.ga6(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.gt()
o.toString
H.n(t,s)
if(o.a==null)o.sap(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bT([n])
n.b=!0
this.a1(n)},
i9:function(a,b){var u,t,s=M.aM
H.l(b,"$if",[s],"$af")
for(u=b.gU(b),t=this.ga6();u.A();)u.gL(u).gt().R(0,t)
s=new D.bU([s])
s.b=!0
this.a1(s)},
ab:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.at(u,u.length,[H.z(u,0)]);u.A();){t=u.d
if(t!=null)t.ab(a)}s.f=!1},
$af:function(){return[M.aM]},
$aY:function(){return[M.aM]},
$iaM:1}
M.dJ.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.Q():u},
a1:function(a){var u
H.k(a,"$iA")
u=this.r
if(u!=null)u.C(a)},
bf:function(){return this.a1(null)},
sb8:function(a){var u,t,s=this
if(a==null)a=new X.hj()
u=s.b
if(u!==a){if(u!=null)u.gt().R(0,s.ga6())
t=s.b
s.b=a
a.gt().h(0,s.ga6())
u=new D.I("camera",t,s.b,[X.cb])
u.b=!0
s.a1(u)}},
sbc:function(a,b){var u,t,s=this
if(b==null)b=X.l2(null)
u=s.c
if(u!==b){if(u!=null)u.gt().R(0,s.ga6())
t=s.c
s.c=b
b.gt().h(0,s.ga6())
u=new D.I("target",t,s.c,[X.d3])
u.b=!0
s.a1(u)}},
sZ:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gt().R(0,t.ga6())
u=t.d
t.d=a
if(a!=null)a.gt().h(0,t.ga6())
s=new D.I("technique",u,t.d,[O.bZ])
s.b=!0
t.a1(s)}},
ab:function(a){var u=this
a.cO(u.d)
u.c.S(a)
u.b.S(a)
u.e.aE(0,a)
u.e.ab(a)
u.b.af(a)
u.c.toString
a.cN()},
$iaM:1}
M.dO.prototype={
a1:function(a){var u
H.k(a,"$iA")
u=this.y
if(u!=null)u.C(a)},
bf:function(){return this.a1(null)},
hy:function(a,b){var u,t,s,r,q,p,o,n=E.S
H.l(b,"$if",[n],"$af")
for(u=b.length,t=this.ga6(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.ce()
o.sap(null)
o.sbj(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sap(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bT([n])
n.b=!0
this.a1(n)},
hA:function(a,b){var u,t,s=E.S
H.l(b,"$if",[s],"$af")
for(u=b.gU(b),t=this.ga6();u.A();)u.gL(u).gt().R(0,t)
s=new D.bU([s])
s.b=!0
this.a1(s)},
sb8:function(a){var u,t,s=this
if(a==null)a=X.ma(null)
u=s.b
if(u!==a){if(u!=null)u.gt().R(0,s.ga6())
t=s.b
s.b=a
a.gt().h(0,s.ga6())
u=new D.I("camera",t,s.b,[X.cb])
u.b=!0
s.a1(u)}},
sbc:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gt().R(0,t.ga6())
u=t.c
t.c=b
b.gt().h(0,t.ga6())
s=new D.I("target",u,t.c,[X.d3])
s.b=!0
t.a1(s)}},
gt:function(){var u=this.y
return u==null?this.y=D.Q():u},
ab:function(a){var u,t=this
a.cO(t.d)
t.c.S(a)
t.b.S(a)
for(u=t.e.a,u=new J.at(u,u.length,[H.z(u,0)]);u.A();)u.d.aE(0,a)
for(u=t.e.a,u=new J.at(u,u.length,[H.z(u,0)]);u.A();)u.d.ab(a)
t.b.toString
a.cy.aW()
a.db.aW()
t.c.af(a)
a.cN()},
sfK:function(a,b){this.e=H.l(b,"$iY",[E.S],"$aY")},
$iaM:1}
M.aM.prototype={}
A.dy.prototype={}
A.fy.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jj:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
cs:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a3.prototype={
gak:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
m:function(a,b){if(b==null)return!1
if(!(b instanceof A.a3))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.e1.prototype={
f5:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.bY("")
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
A.or(c0,u)
A.ot(c0,u)
A.os(c0,u)
A.ov(c0,u)
A.ow(c0,u)
A.ou(c0,u)
A.ox(c0,u)
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
b5.cE(0,s.charCodeAt(0)==0?s:s,A.oq(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.q(b5.y.I(0,"invViewMat"),"$iaw")
if(t)b5.dy=H.q(b5.y.I(0,"objMat"),"$iaw")
if(r)b5.fr=H.q(b5.y.I(0,"viewObjMat"),"$iaw")
b5.fy=H.q(b5.y.I(0,"projViewObjMat"),"$iaw")
if(c0.ry)b5.k1=H.q(b5.y.I(0,"txt2DMat"),"$idb")
if(c0.x1)b5.k2=H.q(b5.y.I(0,"txtCubeMat"),"$iaw")
if(c0.x2)b5.k3=H.q(b5.y.I(0,"colorMat"),"$iaw")
b5.sfF(H.b([],[A.aw]))
t=c0.y2
if(t>0){b5.k4=H.k(b5.y.I(0,"bendMatCount"),"$iaR")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.y(P.r(b7+q+b8));(s&&C.a).h(s,H.q(m,"$iaw"))}}t=c0.a
if(t.a)b5.r2=H.q(b5.y.I(0,"emissionClr"),"$iW")
if(t.b)b5.rx=H.q(b5.y.I(0,"emissionTxt"),"$iaq")
t=c0.b
if(t.a)b5.x1=H.q(b5.y.I(0,"ambientClr"),"$iW")
if(t.b)b5.x2=H.q(b5.y.I(0,"ambientTxt"),"$iaq")
t=c0.c
if(t.a)b5.y2=H.q(b5.y.I(0,"diffuseClr"),"$iW")
if(t.b)b5.aT=H.q(b5.y.I(0,"diffuseTxt"),"$iaq")
t=c0.d
if(t.a)b5.ec=H.q(b5.y.I(0,"invDiffuseClr"),"$iW")
if(t.b)b5.ed=H.q(b5.y.I(0,"invDiffuseTxt"),"$iaq")
t=c0.e
s=t.a
if(s||t.b||!1){b5.eg=H.q(b5.y.I(0,"shininess"),"$iac")
if(s)b5.ee=H.q(b5.y.I(0,"specularClr"),"$iW")
if(t.b)b5.ef=H.q(b5.y.I(0,"specularTxt"),"$iaq")}if(c0.f.b)b5.eh=H.q(b5.y.I(0,"bumpTxt"),"$iaq")
if(c0.cy){b5.ei=H.q(b5.y.I(0,"envSampler"),"$ic0")
t=c0.r
if(t.a)b5.ej=H.q(b5.y.I(0,"reflectClr"),"$iW")
if(t.b)b5.ek=H.q(b5.y.I(0,"reflectTxt"),"$iaq")
t=c0.x
s=t.a
if(s||t.b||!1){b5.el=H.q(b5.y.I(0,"refraction"),"$iac")
if(s)b5.em=H.q(b5.y.I(0,"refractClr"),"$iW")
if(t.b)b5.en=H.q(b5.y.I(0,"refractTxt"),"$iaq")}}t=c0.y
if(t.a)b5.eo=H.q(b5.y.I(0,"alpha"),"$iac")
if(t.b)b5.ep=H.q(b5.y.I(0,"alphaTxt"),"$iaq")
t=P.t
s=[t,A.aR]
b5.sfS(new H.a1(s))
b5.sfT(new H.a1([t,[P.c,A.cm]]))
b5.sik(new H.a1(s))
b5.sil(new H.a1([t,[P.c,A.cn]]))
b5.siG(new H.a1(s))
b5.siH(new H.a1([t,[P.c,A.co]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.cm],l=0;l<t.length;t.length===s||(0,H.x)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.i(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.w()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.y(P.r(b7+g+b8))
H.q(m,"$iW")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.y(P.r(b7+g+b8))
H.q(f,"$iW")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.y(P.r(b7+g+b8))
H.q(e,"$iW")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.y(P.r(b7+g+b8))
H.q(m,"$iW")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.y(P.r(b7+g+b8))
H.q(f,"$iW")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.y(P.r(b7+o+b8))
H.q(e,"$iaq")
a=e}else a=b6
C.a.h(h,new A.cm(b,c,d,m,f,a))}b5.cv.n(0,j,h)
q=b5.cu
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.y(P.r(b7+o+b8))
q.n(0,j,H.k(m,"$iaR"))}for(t=c0.Q,s=t.length,r=[A.cn],l=0;l<t.length;t.length===s||(0,H.x)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.i(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.y(P.r(b7+o+b8))
H.q(m,"$iW")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.y(P.r(b7+o+b8))
H.q(f,"$iW")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.y(P.r(b7+o+b8))
H.q(e,"$iW")
if(typeof j!=="number")return j.w()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.y(P.r(b7+o+b8))
H.q(a0,"$idb")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.y(P.r(b7+o+b8))
H.q(a0,"$ic0")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.y(P.r(b7+o+b8))
H.q(a0,"$ic0")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.y(P.r(b7+o+b8))
H.q(a2,"$icl")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.y(P.r(b7+o+b8))
H.q(a0,"$iac")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.y(P.r(b7+o+b8))
H.q(a2,"$iac")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.y(P.r(b7+o+b8))
H.q(a5,"$iac")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.cn(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.cz.n(0,j,h)
q=b5.cw
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.y(P.r(b7+o+b8))
q.n(0,j,H.k(m,"$iaR"))}for(t=c0.ch,s=t.length,r=[A.co],l=0;l<t.length;t.length===s||(0,H.x)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.i(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.y(P.r(b7+o+b8))
H.q(m,"$iW")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.y(P.r(b7+o+b8))
H.q(f,"$iW")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.y(P.r(b7+o+b8))
H.q(e,"$iW")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.y(P.r(b7+o+b8))
H.q(a0,"$iW")
if(typeof j!=="number")return j.w()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.y(P.r(b7+o+b8))
H.q(a2,"$iW")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.y(P.r(b7+o+b8))
H.q(a5,"$iW")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.y(P.r(b7+o+b8))
H.q(a9,"$iac")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.y(P.r(b7+o+b8))
H.q(b0,"$iac")
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
if(a2==null)H.y(P.r(b7+g+b8))
H.q(a2,"$icl")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.y(P.r(b7+g+b8))
H.q(a2,"$iac")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.y(P.r(b7+g+b8))
H.q(a5,"$iac")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.y(P.r(b7+g+b8))
H.q(a2,"$iac")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.y(P.r(b7+g+b8))
H.q(a5,"$iac")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.y(P.r(b7+g+b8))
H.q(a9,"$iac")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.y(P.r(b7+g+b8))
H.q(a2,"$iaq")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.y(P.r(b7+o+b8))
H.q(a2,"$iaq")
a3=a2}else a3=b6
C.a.h(h,new A.co(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.cB.n(0,j,h)
q=b5.cA
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.y(P.r(b7+o+b8))
q.n(0,j,H.k(m,"$iaR"))}}},
ax:function(a,b){if(b!=null&&b.d)a.eV(b)},
iA:function(a,b){if(b!=null&&b.d>=6)a.d3(b)},
sfF:function(a){this.r1=H.l(a,"$ic",[A.aw],"$ac")},
sfS:function(a){this.cu=H.l(a,"$iH",[P.t,A.aR],"$aH")},
sfT:function(a){this.cv=H.l(a,"$iH",[P.t,[P.c,A.cm]],"$aH")},
sik:function(a){this.cw=H.l(a,"$iH",[P.t,A.aR],"$aH")},
sil:function(a){this.cz=H.l(a,"$iH",[P.t,[P.c,A.cn]],"$aH")},
siG:function(a){this.cA=H.l(a,"$iH",[P.t,A.aR],"$aH")},
siH:function(a){this.cB=H.l(a,"$iH",[P.t,[P.c,A.co]],"$aH")}}
A.aW.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.aZ.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.b_.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.hJ.prototype={
i:function(a){return this.aT}}
A.cm.prototype={}
A.cn.prototype={}
A.co.prototype={}
A.d0.prototype={
bU:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cE:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.dw(b,35633)
r.f=r.dw(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.D(H.mJ(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.y(P.r("Failed to link shader: "+H.i(s)))}r.iB()
r.iD()},
S:function(a){a.a.useProgram(this.r)
this.x.jj()},
dw:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.D(H.mJ(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.h(P.r("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
iB:function(){var u,t,s,r=this,q=H.b([],[A.dy]),p=r.a,o=H.a7(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.e(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dy(p,t.name,s))}r.x=new A.fy(q)},
iD:function(){var u,t,s,r=this,q=H.b([],[A.ep]),p=r.a,o=H.a7(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.e(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.jc(t.type,t.size,t.name,s))}r.y=new A.jn(q)},
b1:function(a,b,c){var u=this.a
if(a===1)return new A.aR(u,b,c)
else return A.lr(u,this.r,b,a,c)},
fO:function(a,b,c){var u=this.a
if(a===1)return new A.aq(u,b,c)
else return A.lr(u,this.r,b,a,c)},
fP:function(a,b,c){var u=this.a
if(a===1)return new A.c0(u,b,c)
else return A.lr(u,this.r,b,a,c)},
bE:function(a,b){return new P.eG(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
jc:function(a,b,c,d){var u=this
switch(a){case 5120:return u.b1(b,c,d)
case 5121:return u.b1(b,c,d)
case 5122:return u.b1(b,c,d)
case 5123:return u.b1(b,c,d)
case 5124:return u.b1(b,c,d)
case 5125:return u.b1(b,c,d)
case 5126:return new A.ac(u.a,c,d)
case 35664:return new A.jj(u.a,c,d)
case 35665:return new A.W(u.a,c,d)
case 35666:return new A.cl(u.a,c,d)
case 35667:return new A.jk(u.a,c,d)
case 35668:return new A.jl(u.a,c,d)
case 35669:return new A.jm(u.a,c,d)
case 35674:return new A.jo(u.a,c,d)
case 35675:return new A.db(u.a,c,d)
case 35676:return new A.aw(u.a,c,d)
case 35678:return u.fO(b,c,d)
case 35680:return u.fP(b,c,d)
case 35670:throw H.h(u.bE("BOOL",c))
case 35671:throw H.h(u.bE("BOOL_VEC2",c))
case 35672:throw H.h(u.bE("BOOL_VEC3",c))
case 35673:throw H.h(u.bE("BOOL_VEC4",c))
default:throw H.h(P.r("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.eg.prototype={}
A.eh.prototype={}
A.ep.prototype={}
A.jn.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
I:function(a,b){var u=this.j(0,b)
if(u==null)throw H.h(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.N()},
N:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aR.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.jk.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.jl.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.jm.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.ji.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
siV:function(a){H.l(a,"$ic",[P.t],"$ac")}}
A.ac.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.jj.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.W.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.cl.prototype={
eT:function(a){var u=a.a,t=a.b,s=a.c,r=a.d
return C.b.cV(this.a,this.d,u,t,s,r)},
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.jo.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.db.prototype={
am:function(a){var u=new Float32Array(H.dn(H.l(a,"$ic",[P.E],"$ac")))
C.b.eO(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.aw.prototype={
am:function(a){var u=new Float32Array(H.dn(H.l(a,"$ic",[P.E],"$ac")))
C.b.eP(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.aq.prototype={
eV:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.c0.prototype={
d3:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.kC.prototype={
$1:function(a){return 1},
$S:39}
F.ag.prototype={
fE:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.ev()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.es())return
return s.u(0,Math.sqrt(s.F(s)))},
fI:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.p(0,q)
r=new V.M(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.F(r)))
r=t.p(0,q)
r=new V.M(r.a,r.b,r.c)
r=s.bm(r.u(0,Math.sqrt(r.F(r))))
return r.u(0,Math.sqrt(r.F(r)))},
cq:function(){var u,t=this
if(t.d!=null)return!0
u=t.fE()
if(u==null){u=t.fI()
if(u==null)return!1}t.d=u
t.a.a.ah()
return!0},
fD:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.ev()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.es())return
return s.u(0,Math.sqrt(s.F(s)))},
fH:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
k=s.b
if(typeof l!=="number")return l.p()
if(typeof k!=="number")return H.e(k)
r=l-k
if(Math.abs(r-0)<$.N().a){l=d.p(0,g)
l=new V.M(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.F(l)))
l=s.a
t=t.a
if(typeof l!=="number")return l.p()
if(typeof t!=="number")return H.e(t)
if(l-t<0)q=q.O(0)}else{k=u.b
if(typeof k!=="number")return H.e(k)
p=(l-k)/r
k=d.p(0,g)
l=k.a
if(typeof l!=="number")return l.k()
i=k.b
if(typeof i!=="number")return i.k()
k=k.c
if(typeof k!=="number")return k.k()
h=g.a
if(typeof h!=="number")return H.e(h)
f=g.b
if(typeof f!=="number")return H.e(f)
e=g.c
if(typeof e!=="number")return H.e(e)
e=new V.al(l*p+h,i*p+f,k*p+e).p(0,j)
e=new V.M(e.a,e.b,e.c)
q=e.u(0,Math.sqrt(e.F(e)))
s=s.a
t=t.a
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.e(t)
u=u.a
if(typeof u!=="number")return H.e(u)
if((s-t)*p+t-u<0)q=q.O(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.F(l)))
l=o.bm(q)
l=l.u(0,Math.sqrt(l.F(l))).bm(o)
q=l.u(0,Math.sqrt(l.F(l)))}return q},
co:function(){var u,t=this
if(t.e!=null)return!0
u=t.fD()
if(u==null){u=t.fH()
if(u==null)return!1}t.e=u
t.a.a.ah()
return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
G:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.c.au(J.aJ(s.e),0)+", "+C.c.au(J.aJ(t.b.e),0)+", "+C.c.au(J.aJ(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
N:function(){return this.G("")}}
F.bf.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
G:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.c.au(J.aJ(u.e),0)+", "+C.c.au(J.aJ(this.b.e),0)},
N:function(){return this.G("")}}
F.bC.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.au(J.aJ(u.e),0)},
N:function(){return this.G("")}}
F.ee.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.Q():u},
b7:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.b7()||!1
if(!t.a.b7())u=!1
s=t.e
if(s!=null)s.bb(0)
return u},
cn:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aN()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bL().a)!==0)++s
if((t&$.bK().a)!==0)++s
if((t&$.bM().a)!==0)++s
if((t&$.c7().a)!==0)++s
if((t&$.dw().a)!==0)++s
if((t&$.dx().a)!==0)++s
if((t&$.cB().a)!==0)++s
if((t&$.bJ().a)!==0)++s
r=a3.gd5(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.E
p=H.b(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.dC])
for(n=0,m=0;m<s;++m){l=a3.j1(m)
k=l.gd5(l)
C.a.n(o,m,new Z.dC(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.d(u,j)
i=u[j].jy(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.n(p,h,i[g]);++h}}n+=k}H.l(p,"$ic",[t],"$ac")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.dn(p)),35044)
u.bindBuffer(a0,null)
e=new Z.ca(new Z.ew(a0,f),o,a3)
e.sh4(H.b([],[Z.bS]))
if(a.b.b.length!==0){t=P.t
d=H.b([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.aS()
C.a.h(d,c.e)}b=Z.lt(u,34963,H.l(d,"$ic",[t],"$ac"))
C.a.h(e.b,new Z.bS(0,d.length,b))}if(a.c.b.length!==0){t=P.t
d=H.b([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.aS()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.aS()
C.a.h(d,c.e)}b=Z.lt(u,34963,H.l(d,"$ic",[t],"$ac"))
C.a.h(e.b,new Z.bS(1,d.length,b))}if(a.d.b.length!==0){t=P.t
d=H.b([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.aS()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.aS()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].c
c.a.a.aS()
C.a.h(d,c.e)}b=Z.lt(u,34963,H.l(d,"$ic",[t],"$ac"))
C.a.h(e.b,new Z.bS(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.b([],[P.m])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.G(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.G(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.G(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.G(t))}return C.a.v(s,"\n")},
ah:function(){var u=this.e
if(u!=null)u.C(null)},
$ipi:1}
F.iB.prototype={
cj:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ic",[F.ar],"$ac")
u=H.b([],[F.ag])
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
n=new F.ag()
m=s.a
if(m==null)H.y(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(m!=p.a||m!=o.a)H.y(P.r("May not create a face with vertices attached to different shapes."))
n.a=s
C.a.h(s.d.b,n)
n.b=p
C.a.h(p.d.c,n)
n.c=o
C.a.h(o.d.d,n)
C.a.h(n.a.a.d.b,n)
p=n.a.a.e
if(p!=null)p.C(null)
C.a.h(u,n)}}return u},
gl:function(a){return this.b.length},
b7:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].cq())s=!1
return s},
cp:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].co())s=!1
return s},
i:function(a){return this.N()},
G:function(a){var u,t,s,r=H.b([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].G(a))
return C.a.v(r,"\n")},
N:function(){return this.G("")},
sfY:function(a){this.b=H.l(a,"$ic",[F.ag],"$ac")}}
F.iC.prototype={
iZ:function(a){var u,t,s,r,q,p
H.l(a,"$ic",[F.ar],"$ac")
u=H.b([],[F.bf])
t=a.length
for(s=this.a,r=1;r<t;r+=2){q=r-1
p=a.length
if(q>=p)return H.d(a,q)
q=a[q]
if(r>=p)return H.d(a,r)
p=a[r]
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.nv(q,p))}return u},
gl:function(a){return this.b.length},
i:function(a){return this.N()},
G:function(a){var u,t,s=H.b([],[P.m]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
C.a.h(s,t[u].G(a+(""+u+". ")))}return C.a.v(s,"\n")},
N:function(){return this.G("")},
sh6:function(a){this.b=H.l(a,"$ic",[F.bf],"$ac")}}
F.iD.prototype={
j_:function(a){var u,t,s,r,q,p
H.l(a,"$ic",[F.ar],"$ac")
u=H.b([],[F.bC])
t=a.length
for(s=this.a,r=0;r<t;++r){if(r>=a.length)return H.d(a,r)
q=a[r]
s.a.h(0,q)
p=new F.bC()
if(q.a==null)H.y(P.r("May not create a point with a vertex which is not attached to a shape."))
p.a=q
C.a.h(q.b.b,p)
C.a.h(p.a.a.b.b,p)
q=p.a.a.e
if(q!=null)q.C(null)
C.a.h(u,p)}return u},
gl:function(a){return this.b.length},
i:function(a){return this.N()},
G:function(a){var u,t,s,r=H.b([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].G(a))
return C.a.v(r,"\n")},
N:function(){return this.G("")},
sc8:function(a){this.b=H.l(a,"$ic",[F.bC],"$ac")}}
F.ar.prototype={
jy:function(a){var u,t,s=this
if(a.m(0,$.aN())){u=s.f
t=[P.E]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.m(0,$.bL())){u=s.r
t=[P.E]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.m(0,$.bK())){u=s.x
t=[P.E]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.m(0,$.bM())){u=s.y
t=[P.E]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.m(0,$.c7())){u=s.z
t=[P.E]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.m(0,$.dw())){u=s.Q
t=[P.E]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.m(0,$.dx())){u=s.Q
t=[P.E]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.m(0,$.cB()))return H.b([s.ch],[P.E])
else if(a.m(0,$.bJ())){u=s.cx
t=[P.E]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.E])},
cq:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.ev()
t.d.M(0,new F.jG(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.ah()
s=t.a.e
if(s!=null)s.bb(0)}return!0},
co:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.ev()
t.d.M(0,new F.jF(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.ah()
s=t.a.e
if(s!=null)s.bb(0)}return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
G:function(a){var u,t,s=this,r="-",q=H.b([],[P.m])
C.a.h(q,C.c.au(J.aJ(s.e),0))
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
C.a.h(q,V.V(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.v(q,", ")
return a+"{"+t+"}"},
N:function(){return this.G("")}}
F.jG.prototype={
$1:function(a){var u,t
H.k(a,"$iag")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.D(0,u)}},
$S:9}
F.jF.prototype={
$1:function(a){var u,t
H.k(a,"$iag")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.D(0,u)}},
$S:9}
F.jz.prototype={
aS:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.h(P.r("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.ah()
return!0},
dX:function(a,b,c,d,e,f,g){var u=F.ls(a,null,b,c,d,e,f,g,0)
this.h(0,u)
return u},
bF:function(a,b,c,d,e,f){return this.dX(a,b,c,null,d,e,f)},
j0:function(a,b,c,d,e,f){return this.dX(a,b,c,d,e,f,null)},
gl:function(a){return this.c.length},
b7:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].cq()
return!0},
cp:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].co()
return!0},
j6:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
if(typeof p!=="number")return p.k()
o=q.b
if(typeof o!=="number")return o.k()
n=q.c
if(typeof n!=="number")return n.k()
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.P(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.C(null)}}}}return!0},
i:function(a){return this.N()},
G:function(a){var u,t,s,r
this.aS()
u=H.b([],[P.m])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].G(a))
return C.a.v(u,"\n")},
N:function(){return this.G("")},
siW:function(a){this.c=H.l(a,"$ic",[F.ar],"$ac")}}
F.jA.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
M:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.ag]})
C.a.M(u.b,b)
C.a.M(u.c,new F.jB(u,b))
C.a.M(u.d,new F.jC(u,b))},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.b([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].G(""))
return C.a.v(r,"\n")},
sfZ:function(a){this.b=H.l(a,"$ic",[F.ag],"$ac")},
sh_:function(a){this.c=H.l(a,"$ic",[F.ag],"$ac")},
sh0:function(a){this.d=H.l(a,"$ic",[F.ag],"$ac")}}
F.jB.prototype={
$1:function(a){H.k(a,"$iag")
if(!J.P(a.a,this.a))this.b.$1(a)},
$S:9}
F.jC.prototype={
$1:function(a){var u
H.k(a,"$iag")
u=this.a
if(!J.P(a.a,u)&&!J.P(a.b,u))this.b.$1(a)},
$S:9}
F.jD.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.b([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].G(""))
return C.a.v(r,"\n")},
sh7:function(a){this.b=H.l(a,"$ic",[F.bf],"$ac")},
sh8:function(a){this.c=H.l(a,"$ic",[F.bf],"$ac")}}
F.jE.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.b([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].G(""))
return C.a.v(r,"\n")},
sc8:function(a){this.b=H.l(a,"$ic",[F.bC],"$ac")}}
O.aL.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.Q():u},
T:function(a){var u
H.k(a,"$iA")
u=this.fr
if(u!=null)u.C(a)},
bg:function(){return this.T(null)},
dN:function(a){H.k(a,"$iA")
this.a=null
this.T(a)},
ix:function(){return this.dN(null)},
hs:function(a,b){var u=V.ao
H.l(b,"$if",[u],"$af")
u=new D.bT([u])
u.b=!0
this.T(u)},
hu:function(a,b){var u=V.ao
H.l(b,"$if",[u],"$af")
u=new D.bU([u])
u.b=!0
this.T(u)},
sad:function(a){var u,t=this,s=t.ch
if(s!=a){if(s!=null)s.gt().R(0,t.gaF())
u=t.ch
t.ch=a
if(a!=null)a.gt().h(0,t.gaF())
s=new D.I("environment",u,t.ch,[T.d6])
s.b=!0
t.T(s)}},
dt:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.t,h=new H.a1([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=h.j(0,0)
h.n(0,0,r==null?1:r)}q=H.b([],[A.aW])
h.M(0,new O.hN(j,q))
C.a.bT(q,new O.hO())
p=new H.a1([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){o=u[s]
r=o.gbl()
n=p.j(0,o.gbl())
p.n(0,r,n==null?1:n)}m=H.b([],[A.aZ])
p.M(0,new O.hP(j,m))
C.a.bT(m,new O.hQ())
l=new H.a1([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.x)(i),++s){o=i[s]
t=o.gbl()
r=l.j(0,o.gbl())
l.n(0,t,r==null?1:r)}k=H.b([],[A.b_])
l.M(0,new O.hR(j,k))
C.a.bT(k,new O.hS())
i=C.e.aa(j.e.a.length+3,4)
j.dy.e
return A.nC(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
ao:function(a,b){H.l(a,"$ic",[T.d4],"$ac")
if(b!=null)if(!C.a.aK(a,b)){b.say(0,a.length)
C.a.h(a,b)}},
aE:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.at(u,u.length,[H.z(u,0)]);u.A();){t=u.d
t.toString
s=$.jx
if(s==null)s=$.jx=new V.M(0,0,1)
t.a=s
r=$.jw
t.d=r==null?$.jw=new V.M(0,1,0):r
r=$.jv
t.e=r==null?$.jv=new V.M(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bP(s)
r=s.a
if(typeof r!=="number")return r.k()
p=s.b
if(typeof p!=="number")return p.k()
o=s.c
if(typeof o!=="number")return o.k()
t.a=s.u(0,Math.sqrt(r*r+p*p+o*o))
o=q.bP(t.d)
p=o.a
if(typeof p!=="number")return p.k()
r=o.b
if(typeof r!=="number")return r.k()
s=o.c
if(typeof s!=="number")return s.k()
t.d=o.u(0,Math.sqrt(p*p+r*r+s*s))
s=q.bP(t.e)
r=s.a
if(typeof r!=="number")return r.k()
p=s.b
if(typeof p!=="number")return p.k()
o=s.c
if(typeof o!=="number")return o.k()
t.e=s.u(0,Math.sqrt(r*r+p*p+o*o))}}}},
cP:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.dt()
u=H.k(b4.fr.j(0,b3.aT),"$ie1")
if(u==null){u=A.nB(b3,b4.a)
b4.ck(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.eb
b3=b5.e
if(!(b3 instanceof Z.ca))b3=b5.e=null
if(b3==null||!b3.d.m(0,s)){b3=t.k3
if(b3)b5.d.b7()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.cp()
q.a.cp()
q=q.e
if(q!=null)q.bb(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.j6()
p=p.e
if(p!=null)p.bb(0)}n=b5.d.cn(new Z.dc(b4.a),s)
n.aL($.aN()).e=b2.a.Q.c
if(b3)n.aL($.bL()).e=b2.a.cx.c
if(r)n.aL($.bK()).e=b2.a.ch.c
if(t.r1)n.aL($.bM()).e=b2.a.cy.c
if(q)n.aL($.c7()).e=b2.a.db.c
if(t.rx)n.aL($.bJ()).e=b2.a.dx.c
b5.e=n}b3=T.d4
m=H.b([],[b3])
b2.a.S(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.gY(q)
r=r.dy
r.toString
r.am(q.aj(0,!0))}if(t.fr){r=b2.a
q=b4.cx
if(q==null){q=b4.db
q=q.gY(q)
p=b4.dx
p=b4.cx=q.k(0,p.gY(p))
q=p}r=r.fr
r.toString
r.am(q.aj(0,!0))}r=b2.a
q=b4.geE()
r=r.fy
r.toString
r.am(q.aj(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.am(C.l.aj(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.am(C.l.aj(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.am(C.l.aj(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.b.bQ(r.a,r.d,l)
for(r=[P.E],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.d(p,k)
p=p[k]
q.toString
H.k(p,"$iao")
q=q.r1
if(k>=q.length)return H.d(q,k)
q=q[k]
j=new Float32Array(H.dn(H.l(p.aj(0,!0),"$ic",r,"$ac")))
C.b.eP(q.a,q.d,!1,j)}}r=t.a
if(r.a){q=b2.a
p=b2.f.f
q=q.r2
C.b.V(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.ao(m,b2.f.d)
r=b2.a
q=b2.f.d
r.ax(r.rx,q)}if(t.id){r=t.b
if(r.a){q=b2.a
p=b2.r.f
q=q.x1
C.b.V(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.ao(m,b2.r.d)
r=b2.a
q=b2.r.d
r.ax(r.x2,q)}r=t.c
if(r.a){q=b2.a
p=b2.x.f
q=q.y2
C.b.V(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.ao(m,b2.x.d)
r=b2.a
q=b2.x.d
r.ax(r.aT,q)}r=t.d
if(r.a){q=b2.a
p=b2.y.f
q=q.ec
C.b.V(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.ao(m,b2.y.d)
r=b2.a
q=b2.y.d
r.ax(r.ed,q)}r=t.e
q=r.a
if(q||r.b||!1){p=b2.a
o=b2.z.ch
p=p.eg
C.b.ac(p.a,p.d,o)}if(q){q=b2.a
p=b2.z.f
q=q.ee
C.b.V(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.ao(m,b2.z.d)
r=b2.a
q=b2.z.d
r.ax(r.ef,q)}r=t.z
if(r.length>0){q=b4.db
i=q.gY(q)
q=P.t
h=new H.a1([q,q])
for(q=b2.dx.e,p=q.length,g=0;g<q.length;q.length===p||(0,H.x)(q),++g){f=q[g]
e=h.j(0,0)
if(e==null)e=0
h.n(0,0,e+1)
d=J.R(b2.a.cv.j(0,0),e)
o=i.bP(f.a)
c=o.a
if(typeof c!=="number")return c.k()
b=o.b
if(typeof b!=="number")return b.k()
a=o.c
if(typeof a!=="number")return a.k()
a=o.u(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
o=a.b
a=a.c
C.b.V(b.a,b.d,c,o,a)
a=f.c
o=d.f
C.b.V(o.a,o.d,a.a,a.b,a.c)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.x)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.cu.j(0,p)
C.b.bQ(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.gY(q)
q=P.t
a0=new H.a1([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],c=[P.E],g=0;g<q.length;q.length===p||(0,H.x)(q),++g){f=q[g]
a1=f.gbl()
e=a0.j(0,a1)
if(e==null)e=0
a0.n(0,a1,e+1)
d=J.R(b2.a.cz.j(0,a1),e)
a2=i.k(0,f.gY(f))
b=f.gY(f)
a=$.cX
b=b.cU(a==null?$.cX=new V.al(0,0,0):a)
a=d.b
C.b.V(a.a,a.d,b.a,b.b,b.c)
b=$.cX
b=a2.cU(b==null?$.cX=new V.al(0,0,0):b)
a=d.c
C.b.V(a.a,a.d,b.a,b.b,b.c)
b=f.gq(f)
a=d.e
C.b.V(a.a,a.d,b.a,b.b,b.c)
f.gaX()
b=a2.cG(0)
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
j=new Float32Array(H.dn(H.l(new V.e2(a,a3,a4,a5,a6,a7,a8,a9,b).aj(0,!0),"$ic",c,"$ac")))
C.b.eO(b0.a,b0.d,!1,j)
f.gaX()
b=f.gaX()
H.l(m,"$ic",o,"$ac")
if(!C.a.aK(m,b)){b.say(0,m.length)
C.a.h(m,b)}b=f.gaX()
a=b.gcJ(b)
if(a){a=d.f
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}f.gbe()
b=f.geW()
a=d.x
a.toString
a3=b.gjg(b)
a4=b.gjh(b)
a5=b.gji()
b=b.gjf()
C.b.cV(a.a,a.d,a3,a4,a5,b)
b=f.gbe()
if(!C.a.aK(m,b)){b.say(0,m.length)
C.a.h(m,b)}b=f.gbe()
a=b.gcJ(b)
if(a){a=d.r
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}if(f.gjk()){b=f.gj2()
a=d.y
C.b.ac(a.a,a.d,b)
b=f.gj3()
a=d.z
C.b.ac(a.a,a.d,b)
b=f.gj4()
a=d.Q
C.b.ac(a.a,a.d,b)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.x)(r),++g){p=r[g].a
l=a0.j(0,p)
if(l==null)l=0
p=b2.a.cw.j(0,p)
C.b.bQ(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.gY(q)
q=P.t
b1=new H.a1([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.x)(q),++g){f=q[g]
a1=f.gbl()
e=b1.j(0,a1)
if(e==null)e=0
b1.n(0,a1,e+1)
d=J.R(b2.a.cB.j(0,a1),e)
o=f.gjU(f)
c=d.b
C.b.V(c.a,c.d,o.a,o.b,o.c)
o=f.gkh(f).ks()
c=d.c
C.b.V(c.a,c.d,o.a,o.b,o.c)
o=i.cU(f.gjU(f))
c=d.d
C.b.V(c.a,c.d,o.a,o.b,o.c)
o=f.gq(f)
c=d.e
C.b.V(c.a,c.d,o.a,o.b,o.c)
f.gaX()
o=f.gcW()
c=d.f
C.b.V(c.a,c.d,o.a,o.b,o.c)
o=f.gcR(f)
c=d.r
C.b.V(c.a,c.d,o.a,o.b,o.c)
o=f.gkt()
c=d.x
C.b.ac(c.a,c.d,o)
o=f.gku()
c=d.y
C.b.ac(c.a,c.d,o)
f.gaX()
o=f.gaX()
H.l(m,"$ic",b3,"$ac")
if(!C.a.aK(m,o)){o.say(0,m.length)
C.a.h(m,o)}o=f.gaX()
c=o.gcJ(o)
if(c){c=d.dx
c.toString
b=o.d
if(!b)c.a.uniform1i(c.d,0)
else{o=o.a
c.a.uniform1i(c.d,o)}}f.gbe()
o=f.geW()
c=d.z
c.toString
b=o.gjg(o)
a=o.gjh(o)
a3=o.gji()
o=o.gjf()
C.b.cV(c.a,c.d,b,a,a3,o)
o=f.gbe()
if(!C.a.aK(m,o)){o.say(0,m.length)
C.a.h(m,o)}o=f.gbe()
c=o.gcJ(o)
if(c){c=d.dy
c.toString
b=o.d
if(!b)c.a.uniform1i(c.d,0)
else{o=o.a
c.a.uniform1i(c.d,o)}}if(f.gki()){o=f.gkg()
c=d.Q
C.b.ac(c.a,c.d,o)
o=f.gkf()
c=d.ch
C.b.ac(c.a,c.d,o)}if(f.gjk()){o=f.gj2()
c=d.cx
C.b.ac(c.a,c.d,o)
o=f.gj3()
c=d.cy
C.b.ac(c.a,c.d,o)
o=f.gj4()
c=d.db
C.b.ac(c.a,c.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.x)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.cA.j(0,q)
C.b.bQ(q.a,q.d,l)}}}if(t.f.b){b2.ao(m,b2.Q.d)
b3=b2.a
r=b2.Q.d
b3.ax(b3.eh,r)}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.gY(r).cG(0)}b3=b3.id
b3.toString
b3.am(r.aj(0,!0))}if(t.cy){b2.ao(m,b2.ch)
b3=b2.a
r=b2.ch
b3.iA(b3.ei,r)
b3=t.r
if(b3.a){r=b2.a
q=b2.cx.f
r=r.ej
C.b.V(r.a,r.d,q.a,q.b,q.c)}if(b3.b){b2.ao(m,b2.cx.d)
b3=b2.a
r=b2.cx.d
b3.ax(b3.ek,r)}b3=t.x
r=b3.a
if(r||b3.b||!1){q=b2.a
p=b2.cy.ch
q=q.el
C.b.ac(q.a,q.d,p)}if(r){r=b2.a
q=b2.cy.f
r=r.em
C.b.V(r.a,r.d,q.a,q.b,q.c)}if(b3.b){b2.ao(m,b2.cy.d)
b3=b2.a
r=b2.cy.d
b3.ax(b3.en,r)}}b3=t.y
r=b3.a
q=!r
if(!q||b3.b||!1){if(r){r=b2.a
p=b2.db.f
r=r.eo
C.b.ac(r.a,r.d,p)}if(b3.b){b2.ao(m,b2.db.d)
r=b2.a
p=b2.db.d
r.ax(r.ep,p)}r=b4.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].S(b4)
r=b5.e
r.S(b4)
r.ab(b4)
r.af(b4)
if(!q||b3.b||!1)b4.a.disable(3042)
for(k=0;k<m.length;++k)m[k].af(b4)
b3=b2.a
b3.toString
b4.a.useProgram(null)
b3.x.cs()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dt().aT},
sfG:function(a){this.e=H.l(a,"$iY",[V.ao],"$aY")}}
O.hN.prototype={
$2:function(a,b){H.a7(a)
H.a7(b)
if(typeof b!=="number")return b.D()
return C.a.h(this.b,new A.aW(a,C.e.aa(b+3,4)*4))},
$S:13}
O.hO.prototype={
$2:function(a,b){H.k(a,"$iaW")
H.k(b,"$iaW")
return J.kU(a.a,b.a)},
$S:43}
O.hP.prototype={
$2:function(a,b){H.a7(a)
H.a7(b)
if(typeof b!=="number")return b.D()
return C.a.h(this.b,new A.aZ(a,C.e.aa(b+3,4)*4))},
$S:13}
O.hQ.prototype={
$2:function(a,b){H.k(a,"$iaZ")
H.k(b,"$iaZ")
return J.kU(a.a,b.a)},
$S:44}
O.hR.prototype={
$2:function(a,b){H.a7(a)
H.a7(b)
if(typeof b!=="number")return b.D()
return C.a.h(this.b,new A.b_(a,C.e.aa(b+3,4)*4))},
$S:13}
O.hS.prototype={
$2:function(a,b){H.k(a,"$ib_")
H.k(b,"$ib_")
return J.kU(a.a,b.a)},
$S:45}
O.hH.prototype={
ce:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.N().a)){u.f=a
t=new D.I(u.b,t,a,[P.E])
t.b=!0
u.a.T(t)}},
aP:function(){this.d8()
this.ce(1)},
sak:function(a,b){var u,t=this
if(b==null)b=1
u=t.c.b
if(b<=0){t.aq(new A.a3(!1,u,!1))
t.ce(0)}else{t.aq(new A.a3(!0,u,!1))
t.ce(b>=1?1:b)}}}
O.cQ.prototype={
T:function(a){return this.a.T(H.k(a,"$iA"))},
bg:function(){return this.T(null)},
aP:function(){},
aq:function(a){var u,t,s=this
if(!s.c.m(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aP()
u=s.a
u.a=null
u.T(null)}},
sai:function(a){var u,t=this,s=t.c
if(!s.b)t.aq(new A.a3(s.a,!0,!1))
s=t.d
if(s!==a){if(s!=null)s.gt().R(0,t.gaF())
u=t.d
t.d=a
a.gt().h(0,t.gaF())
s=new D.I(t.b+".texture2D",u,t.d,[T.d5])
s.b=!0
t.a.T(s)}}}
O.hI.prototype={}
O.bg.prototype={
b4:function(a){var u,t,s=this
if(!s.f.m(0,a)){u=s.f
s.f=a
t=new D.I(s.b+".color",u,a,[V.v])
t.b=!0
s.a.T(t)}},
aP:function(){this.d8()
this.b4(new V.v(1,1,1))},
sq:function(a,b){this.aq(new A.a3(!0,this.c.b,!1))
this.b4(b)}}
O.hK.prototype={}
O.hL.prototype={
aP:function(){var u,t=this
t.d9()
u=t.ch
if(!(Math.abs(u-1)<$.N().a)){t.ch=1
u=new D.I(t.b+".refraction",u,1,[P.E])
u.b=!0
t.a.T(u)}}}
O.hM.prototype={
cf:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.N().a)){u.ch=a
t=new D.I(u.b+".shininess",t,a,[P.E])
t.b=!0
u.a.T(t)}},
aP:function(){this.d9()
this.cf(100)},
sa9:function(a){var u,t=this
if(a==null)a=100
u=t.c.b
if(a<=0){t.aq(new A.a3(!1,u,!1))
t.cf(0)}else{t.aq(new A.a3(!0,u,!1))
t.cf(a)}}}
O.ef.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.Q():u},
T:function(a){var u
H.k(a,"$iA")
u=this.e
if(u!=null)u.C(a)},
bg:function(){return this.T(null)},
cP:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.k(a.fr.j(0,n),"$ieg")
if(u==null){t=a.a
u=new A.eg(t,n)
u.bU(t,n)
u.cE(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.q(u.y.j(0,"fov"),"$iac")
u.ch=H.q(u.y.j(0,"ratio"),"$iac")
u.cx=H.q(u.y.j(0,"boxClr"),"$iW")
u.cy=H.q(u.y.j(0,"boxTxt"),"$ic0")
u.db=H.q(u.y.j(0,"viewMat"),"$iaw")
a.ck(u)}o.a=u}if(b.e==null){t=b.d.cn(new Z.dc(a.a),$.aN())
t.aL($.aN()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.S(a)}t=a.d
s=a.c
r=o.a
r.S(a)
q=o.b
p=r.Q
C.b.ac(p.a,p.d,q)
q=r.ch
C.b.ac(q.a,q.d,t/s)
s=o.c
r.cy.d3(s)
s=o.d
t=r.cx
C.b.V(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.gY(s).cG(0)
r=r.db
r.toString
r.am(s.aj(0,!0))
t=b.e
if(t instanceof Z.ca){t.S(a)
t.ab(a)
t.af(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.cs()
t=o.c
if(t!=null)t.af(a)}}
O.iH.prototype={
gt:function(){var u=this.c
return u==null?this.c=D.Q():u},
aE:function(a,b){},
cP:function(a,b){var u,t,s,r=this,q="SolidColor",p=r.a
if(p==null){u=H.k(a.fr.j(0,q),"$ieh")
if(u==null){p=a.a
u=new A.eh(p,q)
u.bU(p,q)
u.cE(0,"uniform mat4 projViewObjMat;                       \n                                                   \nattribute vec3 posAttr;                            \n                                                   \nvoid main()                                        \n{                                                  \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0); \n}                                                  \n","precision mediump float; \n                         \nuniform vec4 color;      \n                         \nvoid main()              \n{                        \n   gl_FragColor = color; \n}                        \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.q(u.y.j(0,"color"),"$icl")
u.ch=H.q(u.y.j(0,"projViewObjMat"),"$iaw")
a.ck(u)}r.a=u
p=u}t=b.e
if((!(t instanceof Z.ca)?b.e=null:t)==null){p=b.d.cn(new Z.dc(a.a),$.aN())
t=p.aL($.aN())
s=r.a
t.e=s.z.c
b.e=p
p=s}p.S(a)
t=r.b
p.Q.eT(t)
t=a.geE()
p=p.ch
p.toString
p.am(t.aj(0,!0))
t=b.e
t.S(a)
t.ab(a)
t.af(a)
t=r.a
t.toString
a.a.useProgram(null)
t.x.cs()}}
O.bZ.prototype={}
T.dE.prototype={
bu:function(a){H.k(a,"$iA")},
fv:function(){return this.bu(null)},
cl:function(a){var u,t=this
if(t.b!=null)return!1
t.b=a
a.c.ge9().h(0,t.ghf())
t.b.c.gbn().h(0,t.ghh())
t.b.c.gcW().h(0,t.ghj())
u=t.b.e
u.gd6(u).h(0,t.giS())
t.b.e.gbn().h(0,t.giQ())
u=t.b.e
u.gea(u).h(0,t.giO())
return!0},
hg:function(a){if(!H.q(H.k(a,"$iA"),"$iaY").x.b.m(0,this.c))return
this.ch=this.Q=!0},
hi:function(a){var u,t=this
H.k(a,"$iA")
if(!t.Q)return
if(t.ch){H.q(a,"$iaY")
u=a.d.p(0,a.y)
u=new V.a2(u.a,u.b)
if(u.F(u)<t.z)return
t.ch=!1}},
hk:function(a){var u=this
H.k(a,"$iA")
if(!u.Q)return
u.Q=!1
if(!u.ch)return
u.dK(a)},
iT:function(a){H.k(a,"$iA")
this.ch=this.Q=!0},
iR:function(a){var u,t=this
H.k(a,"$iA")
if(!t.Q)return
if(t.ch){H.q(a,"$id9")
u=a.d.p(0,a.y)
u=new V.a2(u.a,u.b)
if(u.F(u)<t.z)return
t.ch=!1}},
iP:function(a){var u=this
H.k(a,"$iA")
if(!u.Q)return
u.Q=!1
if(!u.ch)return
u.dK(a)},
dK:function(a){var u,t,s,r,q,p,o,n,m,l,k=this
H.q(a,"$iaY")
u=new D.A()
u.b=!0
t=k.f
if(t!=null)t.C(u)
u=a.d
t=u.a
s=a.c
if(typeof t!=="number")return t.u()
r=t/s.c
u=u.b
if(typeof u!=="number")return u.u()
q=u/s.d
s=k.a
u=k.d
t=u.r
if(typeof t!=="number")return t.p()
p=C.k.b9(r*(t-1))
t=u.x
if(typeof t!=="number")return t.p()
o=C.k.b9(q*(t-1))
s=s.a
t=u.x
if(typeof t!=="number")return t.p()
n=t-1-o
s.bindFramebuffer(36160,s.createFramebuffer())
s.readBuffer(36064)
s.framebufferTexture2D(36160,36064,3553,u.b,0)
m=new Uint8Array(4)
s.readPixels(p,n,1,1,6408,5121,m)
s.bindFramebuffer(36160,null)
new T.j5(m,1,1).h2()
u=m.length
if(0>=u)return H.d(m,0)
t=m[0]/255
if(1>=u)return H.d(m,1)
s=m[1]/255
if(2>=u)return H.d(m,2)
l=m[2]/255
if(3>=u)return H.d(m,3)
u=m[3]/255
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(l<0)l=0
else if(l>1)l=1
if(u<0)u=0
else if(u>1)u=1
u=new T.dF(new V.a2(r,q),new V.af(t,s,l,u))
u.b=!0
l=k.x
if(l!=null)l.C(u)}}
T.dF.prototype={
i:function(a){return"ColorPicker: "+this.c.i(0)+" => "+this.d.i(0)}}
T.d4.prototype={}
T.d5.prototype={}
T.j1.prototype={
dQ:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.ct()}},
say:function(a,b){this.a=b},
gt:function(){var u=this.y
return u==null?this.y=D.Q():u},
S:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}},
af:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(3553,null)}}}
T.d6.prototype={
say:function(a,b){this.a=b},
gt:function(){var u=this.e
return u==null?this.e=D.Q():u},
S:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
af:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.j2.prototype={
az:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.lY(a)
t=T.ln(q)
r=W.o
W.a5(u,"load",H.n(new T.j4(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
b3:function(a,b,c,d,e,f){var u,t=W.lY(c);++this.d
u=W.o
W.a5(t,"load",H.n(new T.j3(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
dP:function(a,b,c){var u,t,s,r
b=V.dv(b)
u=V.dv(a.width)
t=V.dv(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kZ()
s.width=u
s.height=t
r=H.k(C.h.eQ(s,"2d"),"$icF")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oK(r.getImageData(0,0,s.width,s.height))}}}
T.j4.prototype={
$1:function(a){var u,t,s=this,r=3553,q=s.b,p=s.c
q.e=p.width
q.f=p.height
u=s.a
t=u.dP(p,u.b,s.d)
q.r=p.width
q.x=p.height
p=u.a
p.bindTexture(r,s.e)
p.pixelStorei(37440,s.f?1:0)
C.b.eH(p,r,0,6408,6408,5121,t)
if(s.r)p.generateMipmap(r)
p.bindTexture(r,null)
q.dQ();++u.e},
$S:14}
T.j3.prototype={
$1:function(a){var u=this,t=u.a,s=t.dP(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.eH(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.ct()}++t.e},
$S:14}
T.j5.prototype={
h2:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.c
if(typeof f!=="number")return f.da()
u=C.e.aa(f,2)
t=this.b
s=this.a
r=s.length
q=t*4
for(;u>=0;--u){p=q*u
o=q*(f-1-u)
for(n=0;n<t;++n){m=4*n
l=p+m
k=o+m
for(j=0;j<4;++j){i=l+j
h=k+j
if(i<0||i>=r)return H.d(s,i)
g=s[i]
if(h<0||h>=r)return H.d(s,h)
s[i]=s[h]
s[h]=g}}}}}
V.fu.prototype={
ba:function(a,b){return!0},
i:function(a){return"all"},
$ibx:1}
V.bx.prototype={}
V.e0.prototype={
ba:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)if(u[s].ba(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saO:function(a){this.a=H.l(a,"$ic",[V.bx],"$ac")},
$ibx:1}
V.bA.prototype={
ba:function(a,b){return!this.f_(0,b)},
i:function(a){return"!["+this.d7(0)+"]"}}
V.iA.prototype={
fb:function(a){var u,t
if(a.a.length<=0)throw H.h(P.r("May not create a SetMatcher with zero characters."))
u=new H.a1([P.t,P.a6])
for(t=new H.dZ(a,a.gl(a),[H.aH(a,"C",0)]);t.A();)u.n(0,t.d,!0)
this.siz(u)},
ba:function(a,b){return this.a.e5(0,b)},
i:function(a){var u=this.a
return P.lm(new H.dY(u,[H.z(u,0)]))},
siz:function(a){this.a=H.l(a,"$iH",[P.t,P.a6],"$aH")},
$ibx:1}
V.d1.prototype={
v:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.da(this.a.P(0,b))
r.saO(H.b([],[V.bx]))
r.c=!1
C.a.h(this.c,r)
return r},
jm:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.ba(0,a))return r}return},
i:function(a){return this.b},
siU:function(a){this.c=H.l(a,"$ic",[V.da],"$ac")}}
V.eo.prototype={
i:function(a){var u=H.mU(this.b,"\n","\\n"),t=H.mU(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d8.prototype={
i:function(a){return this.b},
siu:function(a){var u=P.m
this.c=H.l(a,"$iH",[u,u],"$aH")}}
V.ja.prototype={
P:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.d1(this,b)
u.siU(H.b([],[V.da]))
u.d=null
this.a.n(0,b,u)}return u},
bq:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.d8(a)
u=P.m
t.siu(new H.a1([u,u]))
this.b.n(0,a,t)}return t},
kb:function(a){var u,t,s,r,q,p,o,n,m=H.b([],[V.eo]),l=this.c,k=[P.t],j=H.b([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.c.b0(a,s)
q=l.jm(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.lm(j)
throw H.h(P.r("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.b([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.lm(j)
o=l.d
n=o.c.j(0,p)
t=new V.eo(n==null?o.b:n,p,s)}++s}}},
siI:function(a){this.a=H.l(a,"$iH",[P.m,V.d1],"$aH")},
siN:function(a){this.b=H.l(a,"$iH",[P.m,V.d8],"$aH")}}
V.da.prototype={
i:function(a){return this.b.b+": "+this.d7(0)}}
X.fD.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.Q():u},
a2:function(a){var u=this.fr
if(u!=null)u.C(a)},
saw:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.I("width",u,b,[P.t])
u.b=!0
t.a2(u)}},
sar:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.I("height",u,b,[P.t])
u.b=!0
t.a2(u)}},
S:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=3553,f=36161,e=36160
if(i.f){u=a.a
t=u.drawingBufferWidth
s=i.r
if(typeof t!=="number")return t.k()
i.saw(0,C.d.a4(t*s))
u=u.drawingBufferHeight
s=i.x
if(typeof u!=="number")return u.k()
i.sar(0,C.d.a4(u*s))}if(i.y==null){u=a.a
t=i.ch
s=i.a
r=i.b
q=H.a7(u.getParameter(3379))
p=V.dv(s)
o=V.dv(r)
q=V.dv(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(g,n)
u.texParameteri(g,10242,33071)
u.texParameteri(g,10243,33071)
u.texParameteri(g,10241,9729)
u.texParameteri(g,10240,9729)
C.b.eI(u,g,0,6408,p,o,0,6408,5121,h)
u.bindTexture(g,h)
m=T.ln(n)
m.e=s
m.f=r
m.r=p
m.x=o
m.dQ()
t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.ct()
t=i.ch
s=t.b
i.z=s
i.c=t.r
i.d=t.x
u.bindTexture(g,s)
t=u.createRenderbuffer()
i.Q=t
u.bindRenderbuffer(f,t)
u.renderbufferStorage(f,33189,i.c,i.d)
t=u.createFramebuffer()
i.y=t
u.bindFramebuffer(e,t)
u.framebufferTexture2D(e,36064,g,i.z,0)
u.framebufferRenderbuffer(e,36096,f,i.Q)
u.bindTexture(g,h)
u.bindRenderbuffer(f,h)
u.bindFramebuffer(e,h)}u=a.a
u.bindFramebuffer(e,i.y)
u.enable(2884)
u.enable(2929)
u.depthFunc(513)
t=i.dy
s=t.c
a.c=C.d.a4(s*i.a)
r=t.d
a.d=C.d.a4(r*i.b)
l=t.a
k=i.c
if(typeof k!=="number")return H.e(k)
j=C.d.a4(l*k)
t=t.b
l=i.d
if(typeof l!=="number")return H.e(l)
u.viewport(j,C.d.a4(t*l),C.d.a4(s*k),C.d.a4(r*l))
u.clearDepth(i.db)
t=i.cx
u.clearColor(t.a,t.b,t.c,t.d)
u.clear(16640)},
af:function(a){a.a.bindFramebuffer(36160,null)}}
X.cb.prototype={$ich:1}
X.he.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.Q():u},
a2:function(a){var u=this.x
if(u!=null)u.C(a)},
S:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.e(u)
q=C.d.a4(r*u)
r=s.b
if(typeof t!=="number")return H.e(t)
p=C.d.a4(r*t)
r=C.d.a4(s.c*u)
a.c=r
s=C.d.a4(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)},
af:function(a){}}
X.hj.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.Q():u},
S:function(a){var u
a.cy.bN(V.bX())
u=V.bX()
a.db.bN(u)},
af:function(a){a.cy.aW()
a.db.aW()},
$ich:1,
$icb:1}
X.e8.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.Q():u},
a2:function(a){var u
H.k(a,"$iA")
u=this.f
if(u!=null)u.C(a)},
fB:function(){return this.a2(null)},
S:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.by(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bN(k)
r=$.mb
if(r==null){r=V.lg()
q=V.jy()
p=$.mt
r=V.lc(r,q,p==null?$.mt=new V.M(0,0,-1):p)
$.mb=r
u=r}else u=r
r=s.b
if(r!=null){t=r.bR(0,a,s)
if(t!=null)u=t.k(0,u)}a.db.bN(u)},
af:function(a){a.cy.aW()
a.db.aW()},
$ich:1,
$icb:1}
X.d3.prototype={}
V.kN.prototype={
$1:function(a){var u
H.k(a,"$ibq")
u=C.d.eL(this.a.gjo(),2)
if(u!=="0.00")P.fs(u+" fps")},
$S:47}
V.iE.prototype={
fc:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a5(q,"scroll",H.n(new V.iG(o),{func:1,ret:-1,args:[r]}),!1,r)},
dW:function(a,b){var u,t,s,r,q
a=H.a7(C.e.j7(a,0,4))
u=P.mx(C.p,b,C.j,!1)
t=document.createElement("div")
t.className="textHeader"
t.id=u
s=t.style
r=""+(28-a*3)+"px"
s.fontSize=r
q=W.nc()
q.href="#"+u
q.textContent=b
t.appendChild(q)
this.a.appendChild(t)},
b6:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ic",[P.m],"$ac")
this.iC()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.kb(C.a.jw(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
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
if(H.p7(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.ad(m[1])
l.textContent=H.ad(m[0])
t.appendChild(l)}else{k=P.mx(C.p,n,C.j,!1)
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
iC:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.ja()
t=P.m
u.siI(new H.a1([t,V.d1]))
u.siN(new H.a1([t,V.d8]))
u.c=null
u.c=u.P(0,q)
t=u.P(0,q).v(0,p)
s=V.ap(new H.a9("*"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,p).v(0,p)
s=new V.bA()
r=[V.bx]
s.saO(H.b([],r))
C.a.h(t.a,s)
t=V.ap(new H.a9("*"))
C.a.h(s.a,t)
t=u.P(0,p).v(0,"BoldEnd")
s=V.ap(new H.a9("*"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,q).v(0,o)
s=V.ap(new H.a9("_"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,o).v(0,o)
s=new V.bA()
s.saO(H.b([],r))
C.a.h(t.a,s)
t=V.ap(new H.a9("_"))
C.a.h(s.a,t)
t=u.P(0,o).v(0,n)
s=V.ap(new H.a9("_"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,q).v(0,m)
s=V.ap(new H.a9("`"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,m).v(0,m)
s=new V.bA()
s.saO(H.b([],r))
C.a.h(t.a,s)
t=V.ap(new H.a9("`"))
C.a.h(s.a,t)
t=u.P(0,m).v(0,"CodeEnd")
s=V.ap(new H.a9("`"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,q).v(0,l)
s=V.ap(new H.a9("["))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,l).v(0,k)
s=V.ap(new H.a9("|"))
C.a.h(t.a,s)
s=u.P(0,l).v(0,j)
t=V.ap(new H.a9("]"))
C.a.h(s.a,t)
s.c=!0
s=u.P(0,l).v(0,l)
t=new V.bA()
t.saO(H.b([],r))
C.a.h(s.a,t)
s=V.ap(new H.a9("|]"))
C.a.h(t.a,s)
s=u.P(0,k).v(0,j)
t=V.ap(new H.a9("]"))
C.a.h(s.a,t)
s.c=!0
s=u.P(0,k).v(0,k)
t=new V.bA()
t.saO(H.b([],r))
C.a.h(s.a,t)
s=V.ap(new H.a9("|]"))
C.a.h(t.a,s)
C.a.h(u.P(0,q).v(0,i).a,new V.fu())
s=u.P(0,i).v(0,i)
t=new V.bA()
t.saO(H.b([],r))
C.a.h(s.a,t)
s=V.ap(new H.a9("*_`["))
C.a.h(t.a,s)
s=u.P(0,"BoldEnd")
s.d=s.a.bq(p)
s=u.P(0,n)
s.d=s.a.bq(o)
s=u.P(0,"CodeEnd")
s.d=s.a.bq(m)
s=u.P(0,j)
s.d=s.a.bq("Link")
s=u.P(0,i)
s.d=s.a.bq(i)
this.b=u}}
V.iG.prototype={
$1:function(a){P.lp(C.i,new V.iF(this.a))},
$S:14}
V.iF.prototype={
$0:function(){var u=C.d.a4(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:2}
Q.hf.prototype={}
Q.p.prototype={
gaA:function(){var u=this.a
if(u>=1)if(u<=8){u=this.b
u=u>=1&&u<=8}else u=!1
else u=!1
return u},
gay:function(a){return this.gaA()?(this.a-1)*8+(this.b-1):-1},
i:function(a){return""+this.a+" "+this.b},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof Q.p))return!1
if(b.a!==this.a)return!1
if(b.b!==this.b)return!1
return!0}}
Q.a_.prototype={
i:function(a){var u=this,t=u.d,s=t!=null?", "+t.i(0)+" => "+H.i(u.e):""
return u.a+", "+u.b.i(0)+" => "+u.c.i(0)+s}}
Q.iL.prototype={
fd:function(){this.sfQ(P.nA(64,new Q.iM($.a8().a),!1,P.t))
this.c=null},
e6:function(){var u,t,s,r=Q.ml()
for(u=0;u<64;++u){t=r.a
s=this.a
if(u>=s.length)return H.d(s,u);(t&&C.a).n(t,u,s[u])}return r},
E:function(a){var u,t
if(!a.gaA())return $.kT()
u=a.gay(a)
t=this.a
if(u<0||u>=t.length)return H.d(t,u)
return new Q.B(t[u])},
B:function(a,b){var u
if(!a.gaA())return!1
u=this.a;(u&&C.a).n(u,a.gay(a),b.a)
return!0},
cC:function(a){var u,t,s=a.a,r=$.kS(),q=r.a
if(typeof s!=="number")return s.w()
if(typeof q!=="number")return H.e(q)
u=new Q.B((s&q)>>>0)
for(t=0;s=this.a,t<s.length;++t){s=s[t]
q=r.a
if(typeof s!=="number")return s.w()
if(typeof q!=="number")return H.e(q)
if(new Q.B((s&q)>>>0).m(0,u))return Q.m3(t)}return new Q.p(0,0)},
dY:function(a){var u=this,t=a.b,s=u.E(t),r=a.d,q=r!=null?u.E(r):null,p=$.a8()
u.B(t,p)
t=q!=null
if(t)u.B(r,p)
r=$.c5()
p=s.a
r=r.a
if(typeof p!=="number")return p.W()
if(typeof r!=="number")return H.e(r)
u.B(a.c,new Q.B((p|r)>>>0))
if(t&&a.e!=null){t=q.a
if(typeof t!=="number")return t.W()
u.B(a.e,new Q.B((t|r)>>>0))}},
ja:function(a){if(this.er(a)){if(!this.jq(a))return 2
return 1}return 0},
er:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=$.bI(),f=a?$.ae():$.bv()
g=g.a
f=f.a
if(typeof g!=="number")return g.W()
if(typeof f!=="number")return H.e(f)
u=$.b5().a
if(typeof u!=="number")return H.e(u)
t=h.cC(new Q.B((g|f|1&u)>>>0))
if(!t.gaA())return!1
s=a?-1:1
g=t.a
f=g+s
u=t.b
r=u+1
q=!a
p=$.cA()
o=[Q.B]
if(h.K(new Q.p(f,r),q,H.b([p],o)))return!0
n=u+-1
if(h.K(new Q.p(f,n),q,H.b([p],o)))return!0
f=g+2
p=$.cz()
if(h.K(new Q.p(f,r),q,H.b([p],o)))return!0
if(h.K(new Q.p(f,n),q,H.b([p],o)))return!0
f=g+1
m=u+2
if(h.K(new Q.p(f,m),q,H.b([p],o)))return!0
l=g+-1
if(h.K(new Q.p(l,m),q,H.b([p],o)))return!0
m=g+-2
if(h.K(new Q.p(m,r),q,H.b([p],o)))return!0
if(h.K(new Q.p(m,n),q,H.b([p],o)))return!0
m=u+-2
if(h.K(new Q.p(f,m),q,H.b([p],o)))return!0
if(h.K(new Q.p(l,m),q,H.b([p],o)))return!0
for(p=g>=1,m=g<=8,k=1;k<8;++k){j=u+k
i=new Q.p(g,j)
if(h.K(i,q,H.b([$.b6(),$.aI()],o)))return!0
if(!(p&&m&&j>=1&&j<=8&&h.E(i).a==$.a8().a))break}for(k=1;k<8;++k){j=u+-k
i=new Q.p(g,j)
if(h.K(i,q,H.b([$.b6(),$.aI()],o)))return!0
if(!(p&&m&&j>=1&&j<=8&&h.E(i).a==$.a8().a))break}for(p=u>=1,m=u<=8,k=1;k<8;++k){j=g+k
i=new Q.p(j,u)
if(h.K(i,q,H.b([$.b6(),$.aI()],o)))return!0
if(!(j>=1&&j<=8&&p&&m&&h.E(i).a==$.a8().a))break}for(k=1;k<8;++k){j=g+-k
i=new Q.p(j,u)
if(h.K(i,q,H.b([$.b6(),$.aI()],o)))return!0
if(!(j>=1&&j<=8&&p&&m&&h.E(i).a==$.a8().a))break}for(k=1;k<8;++k){p=g+k
m=u+k
i=new Q.p(p,m)
if(h.K(i,q,H.b([$.bu(),$.aI()],o)))return!0
if(!(p>=1&&p<=8&&m>=1&&m<=8&&h.E(i).a==$.a8().a))break}for(k=1;k<8;++k){p=g+k
m=u+-k
i=new Q.p(p,m)
if(h.K(i,q,H.b([$.bu(),$.aI()],o)))return!0
if(!(p>=1&&p<=8&&m>=1&&m<=8&&h.E(i).a==$.a8().a))break}for(k=1;k<8;++k){p=g+-k
m=u+k
i=new Q.p(p,m)
if(h.K(i,q,H.b([$.bu(),$.aI()],o)))return!0
if(!(p>=1&&p<=8&&m>=1&&m<=8&&h.E(i).a==$.a8().a))break}for(k=1;k<8;++k){p=-k
m=g+p
p=u+p
i=new Q.p(m,p)
if(h.K(i,q,H.b([$.bu(),$.aI()],o)))return!0
if(!(m>=1&&m<=8&&p>=1&&p<=8&&h.E(i).a==$.a8().a))break}p=$.bI()
if(h.K(new Q.p(f,r),q,H.b([p],o)))return!0
if(h.K(new Q.p(f,u),q,H.b([p],o)))return!0
if(h.K(new Q.p(f,n),q,H.b([p],o)))return!0
if(h.K(new Q.p(g,n),q,H.b([p],o)))return!0
if(h.K(new Q.p(l,n),q,H.b([p],o)))return!0
if(h.K(new Q.p(l,u),q,H.b([p],o)))return!0
if(h.K(new Q.p(l,r),q,H.b([p],o)))return!0
if(h.K(new Q.p(g,r),q,H.b([p],o)))return!0
return!1},
K:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ic",[Q.B],"$ac")
if(a.gaA()){u=this.E(a)
u.toString
t=$.ae()
s=u.a
t=t.a
if(typeof s!=="number")return s.w()
if(typeof t!=="number")return H.e(t)
if((s&t)>>>0===t===b){t=$.c6()
r=t.a
if(typeof r!=="number")return H.e(r)
q=new Q.B((s&r)>>>0)
for(p=c.length-1;p>=0;--p){if(p>=c.length)return H.d(c,p)
s=c[p].a
r=t.a
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.e(r)
if(q.m(0,new Q.B((s&r)>>>0)))return!0}}}return!1},
jq:function(a){var u,t,s
for(u=0;u<64;++u){t=this.a
if(u>=t.length)return H.d(t,u)
t=t[u]
if(t!=$.a8().a){s=$.ae().a
if(typeof t!=="number")return t.w()
if(typeof s!=="number")return H.e(s)
s=(t&s)>>>0===s===a
t=s}else t=!1
if(t)if(this.jr(Q.m3(u)))return!0}return!1},
jr:function(a){var u={}
u.a=!1
this.cD(new Q.iO(u),a)
return u.a},
jv:function(a){var u={}
u.a=!1
this.cD(new Q.iP(u,a),a.b)
return u.a},
cD:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b="Pawn en passent ",a={func:1,ret:-1,args:[Q.a_]}
H.n(a0,a)
if(!a1.gaA())return
u=d.E(a1)
t=new Q.iN(d,u,a0)
s=u.a
r=$.c6().a
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.e(r)
q=new Q.B((s&r)>>>0)
if(q.m(0,$.cA())){H.n(t,a)
u=d.E(a1)
u.toString
a=$.ae()
s=u.a
a=a.a
if(typeof s!=="number")return s.w()
if(typeof a!=="number")return H.e(a)
p=(s&a)>>>0===a
r=$.c5().a
if(typeof r!=="number")return H.e(r)
o=p?-1:1
n=a1.a
m=n+o
l=a1.b
k=new Q.p(m,l)
j=d.E(k).a
i=$.a8().a
if(j==i){t.$1(new Q.a_("Pawn move to "+k.i(0),a1,k,c,c))
if((s&r)>>>0!==r){k=new Q.p(n+(o+o),l)
if(d.E(k).a==i)t.$1(new Q.a_("Pawn move to "+k.i(0),a1,k,c,c))}}s=l+-1
k=new Q.p(m,s)
h=d.E(k)
j=h.a
g=$.kT().a
if(j!=g)if(j!=i){if(typeof j!=="number")return j.w()
j=(j&a)>>>0===a!==p}else j=!1
else j=!1
if(j)t.$1(new Q.a_("Pawn take "+h.gaV()+" at "+k.i(0),a1,k,k,c));++l
k=new Q.p(m,l)
h=d.E(k)
j=h.a
if(j!=g)if(j!=i){if(typeof j!=="number")return j.w()
j=(j&a)>>>0===a!==p}else j=!1
else j=!1
if(j)t.$1(new Q.a_("Pawn take "+h.gaV()+" at "+k.i(0),a1,k,k,c))
if(d.c!=null)j=n===(p?4:5)
else j=!1
if(j){k=new Q.p(m,s)
if(k.gaA()&&d.E(k).a==i){f=new Q.p(n,s)
h=d.E(f)
j=h.a
if(j!=i){if(typeof j!=="number")return j.w()
j=(j&a)>>>0===a!==p}else j=!1
if(j){e=d.c.E(new Q.p(n+(o+o),s))
s=e.a
if(typeof s!=="number")return s.w()
if((s&r)>>>0!==r&&e.d0(h))t.$1(new Q.a_(b+h.gaV()+" at "+k.i(0),a1,k,f,c))}}k=new Q.p(m,l)
if(k.gaA()&&d.E(k).a==i){f=new Q.p(n,l)
h=d.E(f)
s=h.a
if(s!=i){if(typeof s!=="number")return s.w()
a=(s&a)>>>0===a!==p}else a=!1
if(a){e=d.c.E(new Q.p(n+(o+o),l))
a=e.a
if(typeof a!=="number")return a.w()
if((a&r)>>>0!==r&&e.d0(h))t.$1(new Q.a_(b+h.gaV()+" at "+k.i(0),a1,k,f,c))}}}}else if(q.m(0,$.b6()))d.iy(t,a1)
else if(q.m(0,$.cz())){H.n(t,a)
d.a3(t,a1,2,1)
d.a3(t,a1,2,-1)
d.a3(t,a1,1,2)
d.a3(t,a1,-1,2)
d.a3(t,a1,-2,1)
d.a3(t,a1,-2,-1)
d.a3(t,a1,1,-2)
d.a3(t,a1,-1,-2)}else if(q.m(0,$.bu())){H.n(t,a)
d.a8(t,a1,1,1)
d.a8(t,a1,1,-1)
d.a8(t,a1,-1,-1)
d.a8(t,a1,-1,1)}else if(q.m(0,$.aI())){H.n(t,a)
d.a8(t,a1,1,1)
d.a8(t,a1,1,0)
d.a8(t,a1,1,-1)
d.a8(t,a1,0,-1)
d.a8(t,a1,-1,-1)
d.a8(t,a1,-1,0)
d.a8(t,a1,-1,1)
d.a8(t,a1,0,1)}else if(q.m(0,$.bI()))d.h5(t,a1)},
a3:function(a,b,c,d){var u,t,s,r,q,p
H.n(a,{func:1,ret:-1,args:[Q.a_]})
u=new Q.p(b.a+c,b.b+d)
if(!u.gaA())return!0
t=this.E(b)
s=this.E(u)
r=s.a
if(r==$.a8().a){a.$1(new Q.a_(t.gaV()+" move to "+u.i(0),b,u,null,null))
return!1}t.toString
q=$.ae()
p=t.a
q=q.a
if(typeof p!=="number")return p.w()
if(typeof q!=="number")return H.e(q)
if(typeof r!=="number")return r.w()
r=(r&q)>>>0===q!==((p&q)>>>0===q)
if(r)a.$1(new Q.a_(t.gaV()+" take "+s.gaV()+" at "+u.i(0),b,u,u,null))
return!0},
a8:function(a,b,c,d){var u
H.n(a,{func:1,ret:-1,args:[Q.a_]})
for(u=1;u<8;++u)if(this.a3(a,b,c*u,d*u))return},
iy:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.n(a,{func:1,ret:-1,args:[Q.a_]})
u=m.E(b)
u.toString
t=$.ae()
s=u.a
t=t.a
if(typeof s!=="number")return s.w()
if(typeof t!=="number")return H.e(t)
r=$.c5().a
if(typeof r!=="number")return H.e(r)
m.a8(a,b,0,1)
m.a8(a,b,0,-1)
m.a8(a,b,1,0)
m.a8(a,b,-1,0)
if((s&r)>>>0!==r){q=new Q.p((s&t)>>>0===t?8:1,4)
t=m.E(q).a
s=$.c6().a
if(typeof t!=="number")return t.w()
if(typeof s!=="number")return H.e(s)
if(new Q.B((t&s)>>>0).m(0,$.bI())&&(t&r)>>>0!==r){t=b.b
p=t>4?-1:1
n=t+p
t=b.a
while(!0){if(!(n!==4)){o=!0
break}if(m.E(new Q.p(t,n)).a!=$.a8().a){o=!1
break}n+=p}if(o){t=q.a
s=4-p-p
a.$1(new Q.a_("Rook castles with King",b,new Q.p(t,s+p),q,new Q.p(t,s)))}}}},
h5:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=this
H.n(a,{func:1,ret:-1,args:[Q.a_]})
u=j.E(b)
u.toString
t=$.c5()
s=u.a
t=t.a
if(typeof s!=="number")return s.w()
if(typeof t!=="number")return H.e(t)
j.a3(a,b,1,1)
j.a3(a,b,1,0)
j.a3(a,b,1,-1)
j.a3(a,b,0,-1)
j.a3(a,b,-1,-1)
j.a3(a,b,-1,0)
j.a3(a,b,-1,1)
j.a3(a,b,0,1)
if((s&t)>>>0!==t)for(t=b.a,s=b.b,r=1;r<=8;r+=7){q=new Q.p(t,r)
p=j.E(q).a
o=$.c6().a
if(typeof p!=="number")return p.w()
if(typeof o!=="number")return H.e(o)
if(new Q.B((p&o)>>>0).m(0,$.b6())){o=$.c5().a
if(typeof o!=="number")return H.e(o)
o=(p&o)>>>0!==o
p=o}else p=!1
if(p){n=s>r?-1:1
l=s+n
k=l
while(!0){if(!(k!==r)){m=!0
break}if(j.E(new Q.p(t,k)).a!=$.a8().a){m=!1
break}k+=n}if(m){p=l+n
a.$1(new Q.a_("King castles with Rook",b,new Q.p(t,p),q,new Q.p(t,p-n)))}}}},
i:function(a){var u,t,s,r,q,p,o,n,m=0
while(!0){if(!(m<64)){u=!1
break}t=this.a
if(m>=t.length)return H.d(t,m)
t=t[m]
s=$.c5().a
if(typeof t!=="number")return t.w()
if(typeof s!=="number")return H.e(s)
if((t&s)>>>0===s){u=!0
break}++m}r=new Q.iX()
r.d=!1
t=new Array(64)
t.fixed$length=Array
r.sfN(0,H.b(t,[P.m]))
r.d=!0
for(q=0;q<8;q=p)for(p=q+1,t=(p-1)*8,o=0;o<8;o=n){n=o+1
m=t+(n-1)
s=this.a
if(m<0||m>=s.length)return H.d(s,m)
r.eS(q,o,new Q.B(s[m]).eK(0,!1,u))}return r.i(0)},
sfQ:function(a){this.a=H.l(a,"$ic",[P.t],"$ac")}}
Q.iM.prototype={
$1:function(a){return this.a},
$S:48}
Q.iO.prototype={
$1:function(a){this.a.a=!0},
$S:15}
Q.iP.prototype={
$1:function(a){var u,t=this.a
if(t.a)return
u=this.b
if(a.b.m(0,u.b)&&a.c.m(0,u.c)&&J.P(a.d,u.d)&&J.P(a.e,u.e))t.a=!0},
$S:15}
Q.iN.prototype={
$1:function(a){var u,t,s=this.a.e6()
s.dY(a)
u=this.b
u.toString
t=$.ae()
u=u.a
t=t.a
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.e(t)
if(!s.er((u&t)>>>0===t))this.c.$1(a)},
$S:15}
Q.iX.prototype={
dC:function(a,b){var u=a*8+b
if(u>=64)return-1
return u},
eS:function(a,b,c){var u=this.dC(a,b)
if(u<0)return
C.a.n(this.c,u,c)},
he:function(){var u,t,s,r,q=this.c,p=q.length
if(p<=0)return 0
u=q[0]
t=(u==null?"":u).length
for(s=1;s<p;++s){u=q[s]
r=(u==null?"":u).length
if(r>t)t=r}return t},
i:function(a){var u,t,s,r,q,p,o,n=this,m=H.b([],[P.m]),l=n.he()
if(n.d){u=C.c.bM("",2+C.e.aa(l-1,2))
for(t=l+1,s=0;s<8;){++s
u+=C.c.bM(" "+s,t)}C.a.h(m,C.c.kc(u))
r=2}else r=0
for(q=0;q<8;++q){u=n.d?C.c.bM(""+(q+1),r):""
for(s=0;s<8;++s){if(n.d||s!==0)u+="|"
p=n.dC(q,s)
t=n.c
if(p<0||p>=t.length)return H.d(t,p)
o=t[p]
u+=C.c.bM(o==null?"":o,l)}C.a.h(m,n.d?u+"|":u)}return C.a.v(m,"\n")},
sfN:function(a,b){this.c=H.l(b,"$ic",[P.m],"$ac")}}
Q.B.prototype={
W:function(a,b){var u=this.a,t=b.a
if(typeof u!=="number")return u.W()
if(typeof t!=="number")return H.e(t)
return new Q.B((u|t)>>>0)},
d0:function(a){var u,t=this.a,s=$.kS().a
if(typeof t!=="number")return t.w()
if(typeof s!=="number")return H.e(s)
u=a.a
if(typeof u!=="number")return u.w()
return(t&s)>>>0===(u&s)>>>0},
m:function(a,b){var u
if(b==null)return!1
if(!(b instanceof Q.B))return!1
u=b.a
return this.a==u},
gj8:function(){var u,t=this.a,s=$.lJ().a
if(typeof t!=="number")return t.w()
if(typeof s!=="number")return H.e(s)
u=new Q.B((t&s)>>>0)
if(u.m(0,$.bv()))return"B"
if(u.m(0,$.ae()))return"W"
return" "},
gjT:function(){var u,t=this.a,s=$.c6().a
if(typeof t!=="number")return t.w()
if(typeof s!=="number")return H.e(s)
u=new Q.B((t&s)>>>0)
if(u.m(0,$.cA()))return"P"
if(u.m(0,$.b6()))return"R"
if(u.m(0,$.cz()))return"H"
if(u.m(0,$.bu()))return"B"
if(u.m(0,$.aI()))return"Q"
if(u.m(0,$.bI()))return"K"
return" "},
gjA:function(){var u=this.a,t=$.b5().a
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.e(t)
t=(u&t)>>>0
if(t===$.a8().a)return" "
return""+t},
gaV:function(){var u,t=this.a,s=$.c6().a
if(typeof t!=="number")return t.w()
if(typeof s!=="number")return H.e(s)
u=new Q.B((t&s)>>>0)
if(u.m(0,$.cA()))return"Pawn"
if(u.m(0,$.b6()))return"Rook"
if(u.m(0,$.cz()))return"Knight"
if(u.m(0,$.bu()))return"Bishop"
if(u.m(0,$.aI()))return"Queen"
if(u.m(0,$.bI()))return"King"
return"Empty"},
eK:function(a,b,c){var u,t,s=this,r=s.a
if(r==$.a8().a)return""
if(c){u=$.c5().a
if(typeof r!=="number")return r.w()
if(typeof u!=="number")return H.e(u)
t=(r&u)>>>0===u?"+":" "}else t=""
t=t+s.gj8()+s.gjT()
return b?t+s.gjA():t},
i:function(a){return this.eK(a,!0,!0)}}
S.fF.prototype={
f0:function(a,b,c,d,e,f){var u,t,s,r,q=null
if($.fH==null){$.fH=E.a0(q,!0,q,"color bishop shape",q,q)
$.kX=E.a0(q,!0,q,"pick bishop shape",q,q)
O.aQ("./resources/bishop.obj",a.f).av(new S.fI(),q)}u=this.k3
t=u?"white":"black"
s=t+(" bishop "+d)
t=$.bu()
u=u?$.ae():$.bv()
t=t.a
u=u.a
if(typeof t!=="number")return t.W()
if(typeof u!=="number")return H.e(u)
r=$.b5().a
if(typeof r!=="number")return H.e(r)
this.b2(s,new Q.B((t|u|d&r)>>>0),$.fH,$.kX)}}
S.fI.prototype={
$1:function(a){H.k(a,"$iS")
$.fH.sa0(0,a.c)
$.kX.sa0(0,a.c)},
$S:3}
S.dA.prototype={
f1:function(a,b){var u,t,s,r,q,p,o,n,m,l=this,k=null
l.sii(H.b([],[S.cW]))
l.siM(H.b([],[S.d7]))
l.sdE(H.b([],[Q.a_]))
l.k4=S.nD(a)
l.a="board"
l.r1=!1
for(u=1;u<=8;++u)for(t=1;t<=8;++t){s=S.nZ(a,l,(u+t)%2===0,new Q.p(u,t))
r=l.id;(r&&C.a).h(r,s)
r=l.y
q=H.z(r,0)
H.G(s,q)
p=[q]
if(H.D(r.aQ(H.b([s],p)))){o=r.a
n=o.length
C.a.h(o,s)
q=H.l(H.b([s],p),"$if",[q],"$af")
r=r.c
if(r!=null)r.$2(n,q)}}for(u=1;u<=8;++u){r=S.m9(a,l,!0,u,0,0.7)
q=l.go;(q&&C.a).h(q,r)
q=l.y
p=H.z(q,0)
H.G(r,p)
o=[p]
if(H.D(q.aQ(H.b([r],o)))){m=q.a
n=m.length
C.a.h(m,r)
p=H.l(H.b([r],o),"$if",[p],"$af")
r=q.c
if(r!=null)r.$2(n,p)}r=S.m9(a,l,!1,u,0,0.7)
q=l.go;(q&&C.a).h(q,r)
q=l.y
p=H.z(q,0)
H.G(r,p)
o=[p]
if(H.D(q.aQ(H.b([r],o)))){m=q.a
n=m.length
C.a.h(m,r)
p=H.l(H.b([r],o),"$if",[p],"$af")
r=q.c
if(r!=null)r.$2(n,p)}}l.a7(0,S.it(a,l,!0,1,0,0.7))
l.a7(0,S.it(a,l,!0,2,0,0.7))
l.a7(0,S.it(a,l,!1,1,0,0.7))
l.a7(0,S.it(a,l,!1,2,0,0.7))
l.a7(0,S.hu(a,l,!0,1,0,0.7))
l.a7(0,S.hu(a,l,!0,2,3.141592653589793,0.7))
l.a7(0,S.hu(a,l,!1,1,0,0.7))
l.a7(0,S.hu(a,l,!1,2,3.141592653589793,0.7))
l.a7(0,S.fG(a,l,!0,1,-1.5707963267948966,0.8))
l.a7(0,S.fG(a,l,!0,2,1.5707963267948966,0.8))
l.a7(0,S.fG(a,l,!1,1,-1.5707963267948966,0.8))
l.a7(0,S.fG(a,l,!1,2,1.5707963267948966,0.8))
l.a7(0,S.mf(a,l,!0,1,0,1))
l.a7(0,S.mf(a,l,!1,1,0,1))
l.a7(0,S.m1(a,l,!0,1.5707963267948966,0.9))
l.a7(0,S.m1(a,l,!1,1.5707963267948966,0.9))
r=E.a0(k,!0,k,"",k,k)
l.k3=r
l.y.h(0,r)
l.k3.y.h(0,S.h_(a,l,0,0,0,0))
l.k3.y.h(0,S.h_(a,l,8,0,1.5707963267948966,1))
l.k3.y.h(0,S.h_(a,l,8,8,3.141592653589793,2))
l.k3.y.h(0,S.h_(a,l,0,8,4.71238898038469,3))
r=F.oM(30)
q=l.k4.db
q=E.a0(k,!0,U.bO(V.e3(0,-0.5,0).k(0,V.m5(-1.5707963267948966)).k(0,V.le(12,12,12,1))),"",r,q)
l.k2=q
l.y.h(0,q)
q=l.fy
r=q.d
if(r==null)r=q.d=D.Q()
r.h(0,l.ghJ())
l.d2(q.c)},
a7:function(a,b){var u=this.go;(u&&C.a).h(u,b)
this.y.h(0,b)},
jR:function(a){var u,t,s,r,q,p=this
for(u=p.go,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(J.P(r.ry.b,a)){p.dL(r.fy)
return}}for(u=p.id,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){q=u[s]
if(J.P(q.r1.b,a)){p.dL(q.fy)
return}}},
dL:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=this
for(u=j.k1,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.c.m(0,a)||J.P(r.d,a)){u=j.fy
H.k(r,"$ia_")
q=u.c.E(r.b)
q.toString
t=$.ae()
p=q.a
t=t.a
if(typeof p!=="number")return p.w()
if(typeof t!=="number")return H.e(t)
if((p&t)>>>0===t!==u.a)H.y(P.r("may not make a move movement out-of-turn"))
if(!u.c.jv(r))H.y(P.r("not a valid move: "+J.aJ(r)))
t=u.c
o=t.e6()
o.c=t
u.c=o
o.dY(r)
t=!u.a
u.a=t
u.c.ja(t)
u=u.d
if(u!=null)u.C(null)
u=j.k1;(u&&C.a).sl(u,0)
return}}u=j.fy
n=u.c.E(a)
t=n.a
if(t!=$.a8().a){p=$.ae().a
if(typeof t!=="number")return t.w()
if(typeof p!=="number")return H.e(p)
p=(t&p)>>>0===p!==u.a}else p=!0
if(p)return
q=j.eq(n)
m=q!=null&&H.D(q.r1)
j.e1()
j.e2()
if(!m){q=j.eq(n)
if(q!=null){q.sbS(0,!0)
l=j.eJ(q.fy)
if(l!=null)l.sbS(0,!0)}if(t==$.kT().a)H.y(P.r("may not get movements for an out-of-bounds piece"))
p=$.ae().a
if(typeof t!=="number")return t.w()
if(typeof p!=="number")return H.e(p)
if((t&p)>>>0===p!==u.a)H.y(P.r("may not get movements out-of-turn"))
u=u.c
t=u.cC(n)
k=H.b([],[Q.a_])
u.cD(C.a.giX(k),t)
j.sdE(k)
j.eU(j.k1)}},
hK:function(a){var u=this
H.k(a,"$iA")
u.e1()
u.e2()
u.d2(u.fy.c)},
eq:function(a){var u,t,s,r,q,p=a.a,o=$.kS(),n=o.a
if(typeof p!=="number")return p.w()
if(typeof n!=="number")return H.e(n)
u=new Q.B((p&n)>>>0)
for(p=this.go,n=p.length,t=0;t<p.length;p.length===n||(0,H.x)(p),++t){s=p[t]
r=s.k4.a
q=o.a
if(typeof r!=="number")return r.w()
if(typeof q!=="number")return H.e(q)
if(new Q.B((r&q)>>>0).m(0,u))return s}return},
jS:function(a){var u,t,s,r
for(u=this.go,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(J.P(r.fy,a))return r}return},
eJ:function(a){var u,t,s,r
for(u=this.id,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.fy.m(0,a))return r}return},
e1:function(){var u,t,s,r,q
for(u=this.go,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(!1!==r.r2){r.r1=r.r2=!1
r.al()}}for(u=this.id,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){q=u[s]
if(!1!==q.k3){q.k2=q.k3=!1
q.al()}}},
e2:function(){var u,t,s,r,q
for(u=this.go,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(!1!==r.r1){r.r2=r.r1=!1
r.al()}}for(u=this.id,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){q=u[s]
if(!1!==q.k2){q.k3=q.k2=!1
q.al()}}},
sd4:function(a){var u,t,s,r,q,p,o=this
if(a!==o.r1){o.r1=a
u=o.k2.b=!a
o.k3.b=u
for(t=o.go,s=t.length,r=0;r<s;++r){q=t[r]
if(a!==q.rx){q.rx=a
q.x1.b=u
q.x2.b=a}}for(t=o.id,s=t.length,r=0;r<s;++r){p=t[r]
if(a!==p.k4){p.k4=a
p.r2.b=u
p.rx.b=a}}}},
d2:function(a){var u,t,s,r,q,p
for(u=this.go,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
q=a.cC(r.k4)
if(!J.P(r.fy,q)){r.fy=q
r.dU()}p=q.a
if(p>=1)if(p<=8){p=q.b
p=p>=1&&p<=8}else p=!1
else p=!1
r.b=p}},
eU:function(a){var u,t,s,r,q,p
H.l(a,"$ic",[Q.a_],"$ac")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t){s=a[t]
r=this.eJ(s.c)
if(!0!==r.k3){r.k3=!0
r.k2=!1
r.al()}q=s.d
if(q!=null){p=this.jS(q)
if(!0!==p.r2){p.r2=!0
p.r1=!1
p.al()}}}},
sii:function(a){this.go=H.l(a,"$ic",[S.cW],"$ac")},
siM:function(a){this.id=H.l(a,"$ic",[S.d7],"$ac")},
sdE:function(a){this.k1=H.l(a,"$ic",[Q.a_],"$ac")}}
S.fZ.prototype={
f2:function(a,b,c,d,e,f){var u,t=this,s=null
if($.h0==null){$.h0=E.a0(s,!0,s,"edge shape",s,s)
O.aQ("./resources/edge.obj",a.f).av(new S.h1(),s)}t.sbL(U.bO(V.e3(c-4,0,d-4).k(0,V.ld(e))))
t.a="edge"
t.y.h(0,$.h0)
u=b.k4.cy
if(f>=u.length)return H.d(u,f)
t.sZ(u[f])}}
S.h1.prototype={
$1:function(a){H.k(a,"$iS")
$.h0.sa0(0,a.c)},
$S:3}
S.kO.prototype={
$1:function(a){var u,t
H.k(a,"$iA")
u=this.a
u.sd4(!0)
t=this.b
t.ab(this.c)
u.sd4(!1)
t.cQ()},
$S:6}
S.kP.prototype={
$1:function(a){this.a.jR(H.q(H.k(a,"$iA"),"$idF").d.eN())},
$S:6}
S.hq.prototype={
f3:function(a,b,c,d,e){var u,t,s,r,q=null
if($.hr==null){$.hr=E.a0(q,!0,q,"color king shape",q,q)
$.la=E.a0(q,!0,q,"pick king shape",q,q)
O.aQ("./resources/king.obj",a.f).av(new S.hs(),q)}u=this.k3
t=(u?"white":"black")+" king"
s=$.bI()
u=u?$.ae():$.bv()
s=s.a
u=u.a
if(typeof s!=="number")return s.W()
if(typeof u!=="number")return H.e(u)
r=$.b5().a
if(typeof r!=="number")return H.e(r)
this.b2(t,new Q.B((s|u|1&r)>>>0),$.hr,$.la)}}
S.hs.prototype={
$1:function(a){H.k(a,"$iS")
$.hr.sa0(0,a.c)
$.la.sa0(0,a.c)},
$S:3}
S.ht.prototype={
f4:function(a,b,c,d,e,f){var u,t,s,r,q=null
if($.hv==null){$.hv=E.a0(q,!0,q,"color knight shape",q,q)
$.lb=E.a0(q,!0,q,"pick knight shape",q,q)
O.aQ("./resources/knight.obj",a.f).av(new S.hw(),q)}u=this.k3
t=u?"white":"black"
s=t+(" knight "+d)
t=$.cz()
u=u?$.ae():$.bv()
t=t.a
u=u.a
if(typeof t!=="number")return t.W()
if(typeof u!=="number")return H.e(u)
r=$.b5().a
if(typeof r!=="number")return H.e(r)
this.b2(s,new Q.B((t|u|d&r)>>>0),$.hv,$.lb)}}
S.hw.prototype={
$1:function(a){H.k(a,"$iS")
$.hv.sa0(0,a.c)
$.lb.sa0(0,a.c)},
$S:3}
S.hT.prototype={
f6:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=34067,e=a.f,d=e.a,c=d.createTexture()
d.bindTexture(f,c)
d.texParameteri(f,10242,10497)
d.texParameteri(f,10243,10497)
d.texParameteri(f,10241,9729)
d.texParameteri(f,10240,9729)
d.bindTexture(f,null)
u=new T.d6()
u.a=0
u.b=c
u.c=!1
u.d=0
e.b3(u,c,"resources/posx.png",34069,!1,!1)
e.b3(u,c,"resources/negx.png",34070,!1,!1)
e.b3(u,c,"resources/posy.png",34071,!1,!1)
e.b3(u,c,"resources/negy.png",34072,!1,!1)
e.b3(u,c,"resources/posz.png",34073,!1,!1)
e.b3(u,c,"resources/negz.png",34074,!1,!1)
g.a=u
t=D.lT()
t.sq(0,new V.v(1,0.9,0.8))
t.b=U.bO(V.lc(V.lg(),V.jy(),new V.M(0,-1,-0.25)))
s=D.lT()
s.sq(0,new V.v(0,0.1,0.3))
s.b=U.bO(V.lc(V.lg(),V.jy(),new V.M(0,1,0.25)))
r=new V.v(0.15,0.15,0.15)
e=O.an()
d=e.x
d.sq(0,new V.v(0.6,0.6,0.6))
d=e.r
d.sq(0,new V.v(0.4,0.4,0.4))
e.z.sq(0,new V.v(1,1,1))
e.z.sa9(60)
e.sad(g.a)
e.cx.sq(0,r)
e.dx.h(0,t)
e.dx.h(0,s)
g.b=e
e=O.an()
d=e.x
d.sq(0,new V.v(0.2,0.2,0.2))
d=e.r
d.sq(0,new V.v(0.1,0.1,0.1))
e.z.sq(0,new V.v(1,1,1))
e.z.sa9(60)
e.sad(g.a)
e.cx.sq(0,r)
e.dx.h(0,t)
e.dx.h(0,s)
g.c=e
e=O.an()
d=e.x
d.sq(0,new V.v(0.6,0,0))
d=e.r
d.sq(0,new V.v(0.8,0,0))
e.z.sq(0,new V.v(1,1,1))
e.z.sa9(100)
e.sad(g.a)
e.cx.sq(0,r)
e.dx.h(0,t)
e.dx.h(0,s)
g.d=e
e=O.an()
d=e.x
d.sq(0,new V.v(0.2,0,0))
d=e.r
d.sq(0,new V.v(0.6,0,0))
e.z.sq(0,new V.v(1,1,1))
e.z.sa9(100)
e.sad(g.a)
e.cx.sq(0,r)
e.dx.h(0,t)
e.dx.h(0,s)
g.e=e
e=O.an()
d=e.x
d.sq(0,new V.v(0.5,0.5,0))
d=e.r
d.sq(0,new V.v(0.7,0.7,0))
e.z.sq(0,new V.v(1,1,1))
e.z.sa9(100)
e.sad(g.a)
e.cx.sq(0,r)
e.dx.h(0,t)
e.dx.h(0,s)
g.f=e
e=O.an()
d=e.x
d.sq(0,new V.v(0.1,0.1,0))
d=e.r
d.sq(0,new V.v(0.5,0.5,0))
e.z.sq(0,new V.v(1,1,1))
e.z.sa9(100)
e.sad(g.a)
e.cx.sq(0,r)
e.dx.h(0,t)
e.dx.h(0,s)
g.r=e
q=new V.v(0.075,0.075,0.075)
e=O.an()
d=e.x
d.sq(0,new V.v(0.6,0.6,0.6))
d=e.r
d.sq(0,new V.v(0.4,0.4,0.4))
e.z.sq(0,new V.v(1,1,1))
e.z.sa9(60)
e.sad(g.a)
e.cx.sq(0,q)
e.dx.h(0,t)
e.dx.h(0,s)
g.x=e
e=O.an()
d=e.x
d.sq(0,new V.v(0.2,0.2,0.2))
d=e.r
d.sq(0,new V.v(0.1,0.1,0.1))
e.z.sq(0,new V.v(1,1,1))
e.z.sa9(60)
e.sad(g.a)
e.cx.sq(0,q)
e.dx.h(0,t)
e.dx.h(0,s)
g.y=e
e=O.an()
d=e.x
d.sq(0,new V.v(0.6,0,0))
d=e.r
d.sq(0,new V.v(0.8,0,0))
e.z.sq(0,new V.v(1,1,1))
e.z.sa9(100)
e.sad(g.a)
e.cx.sq(0,q)
e.dx.h(0,t)
e.dx.h(0,s)
g.z=e
e=O.an()
d=e.x
d.sq(0,new V.v(0.2,0,0))
d=e.r
d.sq(0,new V.v(0.6,0,0))
e.z.sq(0,new V.v(1,1,1))
e.z.sa9(100)
e.sad(g.a)
e.cx.sq(0,q)
e.dx.h(0,t)
e.dx.h(0,s)
g.Q=e
e=O.an()
d=e.x
d.sq(0,new V.v(0.5,0.5,0))
d=e.r
d.sq(0,new V.v(0.7,0.7,0))
e.z.sq(0,new V.v(1,1,1))
e.z.sa9(100)
e.sad(g.a)
e.cx.sq(0,q)
e.dx.h(0,t)
e.dx.h(0,s)
g.ch=e
e=O.an()
d=e.x
d.sq(0,new V.v(0.1,0.1,0))
d=e.r
d.sq(0,new V.v(0.5,0.5,0))
e.z.sq(0,new V.v(1,1,1))
e.z.sa9(100)
e.sad(g.a)
e.cx.sq(0,q)
e.dx.h(0,t)
e.dx.h(0,s)
g.cx=e
g.sfU(H.b([],[O.aL]))
for(p=0;p<4;++p){o=a.f.az("resources/edge"+p+".png")
e=g.cy
d=O.an()
n=d.x
n.aq(new A.a3(!0,n.c.b,!1))
n.b4(new V.v(0.6,0.6,0.6))
d.x.sai(o)
n=d.r
n.aq(new A.a3(!0,n.c.b,!1))
n.b4(new V.v(0.4,0.4,0.4))
d.r.sai(o)
n=d.z
n.aq(new A.a3(!0,n.c.b,!1))
n.b4(new V.v(1,1,1))
d.z.sa9(80)
d.sad(g.a)
n=d.cx
n.aq(new A.a3(!0,n.c.b,!1))
n.b4(new V.v(0.1,0.1,0.1))
n=d.dx
n.toString
m=H.aH(n,"Y",0)
H.G(t,m)
l=[m]
if(H.D(n.aQ(H.b([t],l)))){k=n.a
j=k.length
C.a.h(k,t)
m=H.l(H.b([t],l),"$if",[m],"$af")
n=n.c
if(n!=null)n.$2(j,m)}n=d.dx
n.toString
m=H.aH(n,"Y",0)
H.G(s,m)
l=[m]
if(H.D(n.aQ(H.b([s],l)))){k=n.a
j=k.length
C.a.h(k,s)
m=H.l(H.b([s],l),"$if",[m],"$af")
n=n.c
if(n!=null)n.$2(j,m)}(e&&C.a).h(e,d)}i=a.f.az("resources/tableColor.png")
h=a.f.az("resources/tableSpec.png")
e=O.an()
d=e.x
d.sq(0,new V.v(0.6,0.6,0.6))
e.x.sai(i)
d=e.r
d.sq(0,new V.v(0.4,0.4,0.4))
e.r.sai(i)
e.z.sq(0,new V.v(1,1,1))
e.z.sa9(80)
e.z.sai(h)
e.sad(g.a)
e.cx.sai(h)
e.Q.sai(a.f.az("resources/tableNormal.png"))
e.dx.h(0,t)
e.dx.h(0,s)
g.db=e},
ev:function(a){var u=V.nm(a/96,1,1),t=new V.af(u.a,u.b,u.c,1).eN()
u=new O.iH()
u.b=t
return u},
sfU:function(a){this.cy=H.l(a,"$ic",[O.aL],"$ac")}}
S.ia.prototype={
f7:function(a,b,c,d,e,f){var u,t,s,r,q=null
if($.ib==null){$.ib=E.a0(q,!0,q,"color pawn shape",q,q)
$.lf=E.a0(q,!0,q,"pick pawn shape",q,q)
O.aQ("./resources/pawn.obj",a.f).av(new S.ic(),q)}u=this.k3
t=u?"white":"black"
s=t+(" pawn "+d)
t=$.cA()
u=u?$.ae():$.bv()
t=t.a
u=u.a
if(typeof t!=="number")return t.W()
if(typeof u!=="number")return H.e(u)
r=$.b5().a
if(typeof r!=="number")return H.e(r)
this.b2(s,new Q.B((t|u|d&r)>>>0),$.ib,$.lf)}}
S.ic.prototype={
$1:function(a){H.k(a,"$iS")
$.ib.sa0(0,a.c)
$.lf.sa0(0,a.c)},
$S:3}
S.cW.prototype={
aZ:function(a,b,c,d){var u=this
u.fy=new Q.p(0,0)
u.k1=U.bO(null)
u.k4=$.a8()
u.rx=u.r2=u.r1=!1},
b2:function(a,b,c,d){var u=this,t=null,s=u.k2
u.ry=s.k4.ev(s.y.a.length)
u.k4=b
s=[E.S]
u.x1=E.a0(H.b([c],s),!0,t,"color "+a,t,t)
u.x2=E.a0(H.b([d],s),!1,t,"pick "+a,t,u.ry)
u.sbL(u.k1)
u.a=a
u.y.h(0,u.x1)
u.y.h(0,u.x2)
u.dU()
u.al()},
sbS:function(a,b){var u=this
if(b!==u.r1){u.r1=b
u.r2=!1
u.al()}},
dU:function(){var u=this,t=u.k1,s=u.fy,r=u.id
r=V.e3(s.a-4.5,0,s.b-4.5).k(0,V.ld(u.go)).k(0,V.le(r,r,r,1))
t.sY(0,r)
return r},
al:function(){var u,t,s=this
if(s.k3)if(H.D(s.r1))s.sZ(s.k2.k4.d)
else{u=H.D(s.r2)
t=s.k2.k4
if(u)s.sZ(t.f)
else s.sZ(t.b)}else if(H.D(s.r1))s.sZ(s.k2.k4.e)
else{u=H.D(s.r2)
t=s.k2.k4
if(u)s.sZ(t.r)
else s.sZ(t.c)}}}
S.ij.prototype={
f8:function(a,b,c,d,e,f){var u,t,s,r,q=null
if($.ik==null){$.ik=E.a0(q,!0,q,"color queen shape",q,q)
$.lh=E.a0(q,!0,q,"pick queen shape",q,q)
O.aQ("./resources/queen.obj",a.f).av(new S.il(),q)}u=this.k3
t=u?"white":"black"
s=t+(" queen "+d)
t=$.aI()
u=u?$.ae():$.bv()
t=t.a
u=u.a
if(typeof t!=="number")return t.W()
if(typeof u!=="number")return H.e(u)
r=$.b5().a
if(typeof r!=="number")return H.e(r)
this.b2(s,new Q.B((t|u|d&r)>>>0),$.ik,$.lh)}}
S.il.prototype={
$1:function(a){H.k(a,"$iS")
$.ik.sa0(0,a.c)
$.lh.sa0(0,a.c)},
$S:3}
S.is.prototype={
fa:function(a,b,c,d,e,f){var u,t,s,r,q=null,p="rook shape"
if($.iu==null){$.iu=E.a0(q,!0,q,p,q,q)
$.lk=E.a0(q,!0,q,p,q,q)
O.aQ("./resources/rook.obj",a.f).av(new S.iv(),q)}u=this.k3
t=u?"white":"black"
s=t+(" rook "+d)
t=$.b6()
u=u?$.ae():$.bv()
t=t.a
u=u.a
if(typeof t!=="number")return t.W()
if(typeof u!=="number")return H.e(u)
r=$.b5().a
if(typeof r!=="number")return H.e(r)
this.b2(s,new Q.B((t|u|d&r)>>>0),$.iu,$.lk)}}
S.iv.prototype={
$1:function(a){H.k(a,"$iS")
$.iu.sa0(0,a.c)
$.lk.sa0(0,a.c)},
$S:3}
S.d7.prototype={
fe:function(a,b,c,d){var u,t,s,r,q=this,p=null
if($.j7==null){$.j7=E.a0(p,!0,p,"color tile shape",p,p)
$.lo=E.a0(p,!0,p,"pick tile shape",p,p)
O.aQ("./resources/tile.obj",a.f).av(new S.j8(),p)}q.k4=q.k3=q.k2=!1
u=q.k1?"white":"black"
t=q.fy
s=t.a
t=t.b
r=u+(" tile "+s+" "+t)
u=q.id
q.r1=u.k4.ev(u.y.a.length)
u=[E.S]
q.r2=E.a0(H.b([$.j7],u),!0,p,"color "+r,p,p)
q.rx=E.a0(H.b([$.lo],u),!1,p,"pick "+r,p,q.r1)
q.sbL(U.bO(V.e3(s-4.5,0,t-4.5)))
q.a=r
q.y.h(0,q.r2)
q.y.h(0,q.rx)
q.al()},
sbS:function(a,b){var u=this
if(b!==u.k2){u.k2=b
u.k3=!1
u.al()}},
al:function(){var u,t,s=this
if(s.k1)if(H.D(s.k2))s.sZ(s.id.k4.z)
else{u=H.D(s.k3)
t=s.id.k4
if(u)s.sZ(t.ch)
else s.sZ(t.x)}else if(H.D(s.k2))s.sZ(s.id.k4.Q)
else{u=H.D(s.k3)
t=s.id.k4
if(u)s.sZ(t.cx)
else s.sZ(t.y)}}}
S.j8.prototype={
$1:function(a){H.k(a,"$iS")
$.j7.sa0(0,a.c)
$.lo.sa0(0,a.c)},
$S:3}
L.kK.prototype={
$0:function(){return S.p6(this.a)},
$S:4};(function aliases(){var u=J.a.prototype
u.eY=u.i
u=J.dV.prototype
u.eZ=u.i
u=O.cQ.prototype
u.d8=u.aP
u=O.bg.prototype
u.d9=u.aP
u=V.e0.prototype
u.f_=u.ba
u.d7=u.i})();(function installTearOffs(){var u=hunkHelpers._instance_1i,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(J.aX.prototype,"giX","h",34)
t(P,"oE","o3",12)
t(P,"oF","o4",12)
t(P,"oG","o5",12)
s(P,"mI","oC",4)
r(P.ez.prototype,"gj9",0,1,null,["$2","$1"],["bI","e4"],50,0)
var m
r(m=E.S.prototype,"geA",0,0,null,["$1","$0"],["eB","jH"],0,0)
r(m,"geC",0,0,null,["$1","$0"],["eD","jI"],0,0)
r(m,"gey",0,0,null,["$1","$0"],["ez","jG"],0,0)
r(m,"gew",0,0,null,["$1","$0"],["ex","jD"],0,0)
q(m,"gjB","jC",8)
q(m,"gjE","jF",8)
r(m=E.en.prototype,"gdd",0,0,null,["$1","$0"],["df","de"],0,0)
p(m,"gk0","cQ",4)
o(m=X.et.prototype,"ghH","hI",10)
o(m,"ghv","hw",10)
o(m,"ghB","hC",5)
o(m,"ghN","hO",21)
o(m,"ghL","hM",21)
o(m,"ghR","hS",5)
o(m,"ghV","hW",5)
o(m,"ghF","hG",5)
o(m,"ghT","hU",5)
o(m,"ghD","hE",5)
o(m,"ghX","hY",31)
o(m,"ghZ","i_",10)
o(m,"gig","ih",11)
o(m,"gia","ib",11)
o(m,"gic","ie",11)
r(m=D.dX.prototype,"gdG",0,0,null,["$1","$0"],["dH","hP"],0,0)
o(m,"gi0","i1",51)
q(m,"ghp","hq",22)
q(m,"gi4","i5",22)
n(V.a2.prototype,"gl","cI",23)
n(V.M.prototype,"gl","cI",23)
r(m=U.cM.prototype,"gbx",0,0,null,["$1","$0"],["X","aH"],0,0)
q(m,"ghn","ho",24)
q(m,"gi2","i3",24)
r(m=U.eu.prototype,"gbx",0,0,null,["$1","$0"],["X","aH"],0,0)
o(m,"gfi","fj",1)
o(m,"gfk","fl",1)
o(m,"gfm","fn",1)
o(m,"gha","hb",1)
o(m,"ghc","hd",1)
o(m,"gft","fu",1)
o(m,"gfq","fs",1)
o(m,"gfo","fp",1)
r(m=M.dG.prototype,"ga6",0,0,null,["$1","$0"],["a1","bf"],0,0)
q(m,"gi6","i7",25)
q(m,"gi8","i9",25)
r(M.dJ.prototype,"ga6",0,0,null,["$1","$0"],["a1","bf"],0,0)
r(m=M.dO.prototype,"ga6",0,0,null,["$1","$0"],["a1","bf"],0,0)
q(m,"ghx","hy",8)
q(m,"ghz","hA",8)
r(m=O.aL.prototype,"gaF",0,0,null,["$1","$0"],["T","bg"],0,0)
r(m,"giw",0,0,null,["$1","$0"],["dN","ix"],0,0)
q(m,"ghr","hs",26)
q(m,"ght","hu",26)
r(O.cQ.prototype,"gaF",0,0,null,["$1","$0"],["T","bg"],0,0)
r(O.ef.prototype,"gaF",0,0,null,["$1","$0"],["T","bg"],0,0)
r(m=T.dE.prototype,"gdg",0,0,null,["$1","$0"],["bu","fv"],0,0)
o(m,"ghf","hg",1)
o(m,"ghh","hi",1)
o(m,"ghj","hk",1)
o(m,"giS","iT",1)
o(m,"giQ","iR",1)
o(m,"giO","iP",1)
r(X.e8.prototype,"gfA",0,0,null,["$1","$0"],["a2","fB"],0,0)
o(S.dA.prototype,"ghJ","hK",1)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.O,null)
s(P.O,[H.l8,J.a,J.at,P.eO,P.f,H.dZ,P.aP,H.cf,H.es,H.jf,P.bQ,H.cL,H.cG,H.f5,P.am,H.hy,H.hz,H.hm,H.eP,H.jK,P.fb,P.jM,P.ez,P.b4,P.ah,P.ex,P.iT,P.d2,P.iU,P.kl,P.bq,P.au,P.kq,P.kj,P.de,P.eN,P.C,P.cH,P.kp,P.a6,P.aO,P.ai,P.bP,P.i9,P.ek,P.eG,P.hd,P.c,P.H,P.J,P.eb,P.ab,P.m,P.bY,W.fP,W.F,W.dQ,P.fg,P.ke,O.Y,O.cR,E.fE,E.S,E.io,E.en,Z.ew,Z.dc,Z.ca,Z.bS,Z.bF,D.fL,D.ce,D.A,O.kv,O.dr,O.kw,X.dD,X.dW,X.hp,X.hC,X.bz,X.i_,X.jb,X.et,D.cd,D.aj,D.e9,D.ej,V.v,V.af,V.h4,V.e2,V.ao,V.a4,V.al,V.bj,V.d_,V.a2,V.M,U.eu,M.dJ,M.dO,M.aM,A.dy,A.fy,A.a3,A.aW,A.aZ,A.b_,A.hJ,A.cm,A.cn,A.co,A.ep,A.jn,F.ag,F.bf,F.bC,F.ee,F.iB,F.iC,F.iD,F.ar,F.jz,F.jA,F.jD,F.jE,O.bZ,O.cQ,O.hK,T.dE,T.j2,T.j5,V.fu,V.bx,V.e0,V.iA,V.d1,V.eo,V.d8,V.ja,X.d3,X.cb,X.hj,X.e8,V.iE,Q.hf,Q.p,Q.a_,Q.iL,Q.iX,Q.B,S.hT])
s(J.a,[J.hl,J.dU,J.dV,J.aX,J.cP,J.bV,H.cT,W.j,W.ft,W.dz,W.cF,W.b9,W.ba,W.U,W.eA,W.fT,W.fU,W.eC,W.dN,W.eE,W.fW,W.o,W.eH,W.bc,W.hg,W.eJ,W.bR,W.hB,W.hU,W.eQ,W.eR,W.bh,W.eS,W.eV,W.bi,W.eZ,W.f0,W.bn,W.f1,W.bo,W.f6,W.b0,W.f9,W.j9,W.br,W.fc,W.jd,W.js,W.fh,W.fj,W.fl,W.fn,W.fp,P.bw,P.eL,P.bB,P.eX,P.ih,P.f7,P.bE,P.fe,P.fz,P.ey,P.dB,P.dR,P.ea,P.ec,P.ck,P.ed,P.em,P.eq,P.f3])
s(J.dV,[J.id,J.cp,J.bW])
t(J.l7,J.aX)
s(J.cP,[J.dT,J.dS])
t(P.hA,P.eO)
s(P.hA,[H.er,W.jT,W.jS,P.h9])
t(H.a9,H.er)
s(P.f,[H.h2,H.hF,H.jI])
s(P.aP,[H.hG,H.jJ])
s(P.bQ,[H.i6,H.ho,H.jq,H.jh,H.fK,H.iy,P.fx,P.cV,P.aV,P.jr,P.jp,P.el,P.fN,P.fS])
s(H.cG,[H.kR,H.iZ,H.hn,H.kG,H.kH,H.kI,P.jP,P.jO,P.jQ,P.jR,P.ko,P.kn,P.kr,P.ks,P.kA,P.jY,P.k5,P.k1,P.k2,P.k3,P.k_,P.k4,P.jZ,P.k8,P.k9,P.k7,P.k6,P.iV,P.iW,P.ky,P.kh,P.kg,P.ki,P.hE,P.fX,P.fY,W.hh,W.hi,W.hW,W.hY,W.ix,W.iS,W.jX,P.kB,P.ha,P.hb,P.fB,E.ip,E.iq,E.ir,E.j6,D.h5,D.h6,F.kC,F.jG,F.jF,F.jB,F.jC,O.hN,O.hO,O.hP,O.hQ,O.hR,O.hS,T.j4,T.j3,V.kN,V.iG,V.iF,Q.iM,Q.iO,Q.iP,Q.iN,S.fI,S.h1,S.kO,S.kP,S.hs,S.hw,S.ic,S.il,S.iv,S.j8,L.kK])
s(H.iZ,[H.iQ,H.cD])
t(H.jL,P.fx)
t(P.hD,P.am)
t(H.a1,P.hD)
t(H.dY,H.h2)
t(H.e5,H.cT)
s(H.e5,[H.df,H.dh])
t(H.dg,H.df)
t(H.cS,H.dg)
t(H.di,H.dh)
t(H.e6,H.di)
s(H.e6,[H.i0,H.i1,H.i2,H.i3,H.i4,H.e7,H.i5])
t(P.jN,P.ez)
t(P.kf,P.kq)
t(P.kd,P.kj)
t(P.dI,P.iU)
t(P.h3,P.cH)
t(P.jt,P.h3)
t(P.ju,P.dI)
s(P.ai,[P.E,P.t])
s(P.aV,[P.cj,P.hk])
s(W.j,[W.L,W.h8,W.cN,W.bm,W.dj,W.bp,W.b1,W.dl,W.jH,W.dd,P.fC,P.c9])
s(W.L,[W.aa,W.bN])
s(W.aa,[W.w,P.u])
s(W.w,[W.fv,W.fw,W.cc,W.dL,W.hc,W.cO,W.iz])
s(W.b9,[W.cJ,W.fQ,W.fR])
t(W.fO,W.ba)
t(W.cK,W.eA)
t(W.eD,W.eC)
t(W.dM,W.eD)
t(W.eF,W.eE)
t(W.fV,W.eF)
t(W.bb,W.dz)
t(W.eI,W.eH)
t(W.h7,W.eI)
t(W.eK,W.eJ)
t(W.cg,W.eK)
t(W.bd,W.cN)
s(W.o,[W.c_,W.bk])
s(W.c_,[W.be,W.ak,W.b2])
t(W.hV,W.eQ)
t(W.hX,W.eR)
t(W.eT,W.eS)
t(W.hZ,W.eT)
t(W.eW,W.eV)
t(W.cU,W.eW)
t(W.f_,W.eZ)
t(W.ie,W.f_)
t(W.iw,W.f0)
t(W.dk,W.dj)
t(W.iI,W.dk)
t(W.f2,W.f1)
t(W.iJ,W.f2)
t(W.iR,W.f6)
t(W.fa,W.f9)
t(W.j_,W.fa)
t(W.dm,W.dl)
t(W.j0,W.dm)
t(W.fd,W.fc)
t(W.jc,W.fd)
t(W.bt,W.ak)
t(W.fi,W.fh)
t(W.jU,W.fi)
t(W.eB,W.dN)
t(W.fk,W.fj)
t(W.ka,W.fk)
t(W.fm,W.fl)
t(W.eU,W.fm)
t(W.fo,W.fn)
t(W.kk,W.fo)
t(W.fq,W.fp)
t(W.km,W.fq)
t(W.jV,P.iT)
t(W.lu,W.jV)
t(W.jW,P.d2)
t(P.ay,P.ke)
t(P.eM,P.eL)
t(P.hx,P.eM)
t(P.eY,P.eX)
t(P.i7,P.eY)
t(P.f8,P.f7)
t(P.iY,P.f8)
t(P.ff,P.fe)
t(P.je,P.ff)
t(P.fA,P.ey)
t(P.i8,P.c9)
t(P.f4,P.f3)
t(P.iK,P.f4)
s(E.fE,[Z.dC,A.d0,T.d4])
s(D.A,[D.bT,D.bU,D.I,O.ii,X.ig,T.dF])
s(X.ig,[X.e_,X.aY,X.d9])
s(O.Y,[D.dX,U.cM,M.dG])
s(D.fL,[U.fM,U.av])
t(U.dH,U.av)
s(A.d0,[A.e1,A.eg,A.eh])
s(A.ep,[A.aR,A.jk,A.jl,A.jm,A.ji,A.ac,A.jj,A.W,A.cl,A.jo,A.db,A.aw,A.aq,A.c0])
s(O.bZ,[O.aL,O.ef,O.iH])
s(O.cQ,[O.hH,O.hI,O.bg])
s(O.bg,[O.hL,O.hM])
s(T.d4,[T.d5,T.d6])
t(T.j1,T.d5)
s(V.e0,[V.bA,V.da])
s(X.d3,[X.fD,X.he])
s(E.S,[S.cW,S.dA,S.fZ,S.d7])
s(S.cW,[S.fF,S.hq,S.ht,S.ia,S.ij,S.is])
u(H.er,H.es)
u(H.df,P.C)
u(H.dg,H.cf)
u(H.dh,P.C)
u(H.di,H.cf)
u(P.eO,P.C)
u(W.eA,W.fP)
u(W.eC,P.C)
u(W.eD,W.F)
u(W.eE,P.C)
u(W.eF,W.F)
u(W.eH,P.C)
u(W.eI,W.F)
u(W.eJ,P.C)
u(W.eK,W.F)
u(W.eQ,P.am)
u(W.eR,P.am)
u(W.eS,P.C)
u(W.eT,W.F)
u(W.eV,P.C)
u(W.eW,W.F)
u(W.eZ,P.C)
u(W.f_,W.F)
u(W.f0,P.am)
u(W.dj,P.C)
u(W.dk,W.F)
u(W.f1,P.C)
u(W.f2,W.F)
u(W.f6,P.am)
u(W.f9,P.C)
u(W.fa,W.F)
u(W.dl,P.C)
u(W.dm,W.F)
u(W.fc,P.C)
u(W.fd,W.F)
u(W.fh,P.C)
u(W.fi,W.F)
u(W.fj,P.C)
u(W.fk,W.F)
u(W.fl,P.C)
u(W.fm,W.F)
u(W.fn,P.C)
u(W.fo,W.F)
u(W.fp,P.C)
u(W.fq,W.F)
u(P.eL,P.C)
u(P.eM,W.F)
u(P.eX,P.C)
u(P.eY,W.F)
u(P.f7,P.C)
u(P.f8,W.F)
u(P.fe,P.C)
u(P.ff,W.F)
u(P.ey,P.am)
u(P.f3,P.C)
u(P.f4,W.F)})()
var v={mangledGlobalNames:{t:"int",E:"double",ai:"num",m:"String",a6:"bool",J:"Null",c:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.A]},{func:1,ret:-1,args:[D.A]},{func:1,ret:P.J},{func:1,ret:P.J,args:[E.S]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ak]},{func:1,ret:P.J,args:[D.A]},{func:1,ret:-1,args:[P.m,,]},{func:1,ret:-1,args:[P.t,[P.f,E.S]]},{func:1,ret:P.J,args:[F.ag]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[W.b2]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.t,P.t]},{func:1,ret:P.J,args:[W.o]},{func:1,ret:P.J,args:[Q.a_]},{func:1,args:[,]},{func:1,ret:P.J,args:[,]},{func:1,ret:P.J,args:[,,]},{func:1,ret:P.m,args:[P.t]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:-1,args:[W.be]},{func:1,ret:-1,args:[P.t,[P.f,D.aj]]},{func:1,ret:P.E},{func:1,ret:-1,args:[P.t,[P.f,U.av]]},{func:1,ret:-1,args:[P.t,[P.f,M.aM]]},{func:1,ret:-1,args:[P.t,[P.f,V.ao]]},{func:1,ret:P.J,args:[W.bk]},{func:1,ret:P.J,args:[,],opt:[P.ab]},{func:1,ret:[P.ah,,],args:[,]},{func:1,args:[P.m]},{func:1,ret:-1,args:[W.bt]},{func:1,args:[,P.m]},{func:1,ret:P.m,args:[W.bd]},{func:1,ret:-1,args:[P.O]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,args:[W.o]},{func:1,ret:P.a6,args:[W.L]},{func:1,ret:P.E,args:[P.E]},{func:1,ret:W.aa,args:[W.L]},{func:1,ret:P.J,args:[,P.ab]},{func:1,ret:P.J,args:[P.t,,]},{func:1,ret:P.t,args:[A.aW,A.aW]},{func:1,ret:P.t,args:[A.aZ,A.aZ]},{func:1,ret:P.t,args:[A.b_,A.b_]},{func:1,ret:-1,args:[,]},{func:1,ret:P.J,args:[P.bq]},{func:1,ret:P.t,args:[P.t]},{func:1,ret:P.J,args:[P.ai]},{func:1,ret:-1,args:[P.O],opt:[P.ab]},{func:1,ret:P.a6,args:[[P.f,D.aj]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.h=W.cc.prototype
C.D=W.bd.prototype
C.E=J.a.prototype
C.a=J.aX.prototype
C.k=J.dS.prototype
C.e=J.dT.prototype
C.l=J.dU.prototype
C.d=J.cP.prototype
C.c=J.bV.prototype
C.F=J.bW.prototype
C.G=W.cU.prototype
C.q=J.id.prototype
C.b=P.ck.prototype
C.m=J.cp.prototype
C.r=W.bt.prototype
C.t=W.dd.prototype
C.n=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.u=function() {
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
C.z=function(getTagFallback) {
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
C.v=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.w=function(hooks) {
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
C.y=function(hooks) {
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
C.x=function(hooks) {
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
C.o=function(hooks) { return hooks; }

C.A=new P.i9()
C.j=new P.jt()
C.B=new P.ju()
C.f=new P.kf()
C.i=new P.bP(0)
C.C=new P.bP(5e6)
C.p=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.t])})();(function staticFields(){$.b8=0
$.cE=null
$.lP=null
$.lw=!1
$.mN=null
$.mG=null
$.mS=null
$.kD=null
$.kJ=null
$.lE=null
$.cr=null
$.dp=null
$.dq=null
$.lx=!1
$.T=C.f
$.aF=[]
$.mC=null
$.m6=null
$.mc=null
$.cX=null
$.mj=null
$.ms=null
$.mu=null
$.jv=null
$.jw=null
$.jx=null
$.mt=null
$.mb=null
$.fH=null
$.kX=null
$.h0=null
$.hr=null
$.la=null
$.hv=null
$.lb=null
$.ib=null
$.lf=null
$.ik=null
$.lh=null
$.iu=null
$.lk=null
$.j7=null
$.lo=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pg","mX",function(){return H.mL("_$dart_dartClosure")})
u($,"ph","lI",function(){return H.mL("_$dart_js")})
u($,"pA","mY",function(){return H.bs(H.jg({
toString:function(){return"$receiver$"}}))})
u($,"pB","mZ",function(){return H.bs(H.jg({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pC","n_",function(){return H.bs(H.jg(null))})
u($,"pD","n0",function(){return H.bs(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pG","n3",function(){return H.bs(H.jg(void 0))})
u($,"pH","n4",function(){return H.bs(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pF","n2",function(){return H.bs(H.mq(null))})
u($,"pE","n1",function(){return H.bs(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pJ","n6",function(){return H.bs(H.mq(void 0))})
u($,"pI","n5",function(){return H.bs(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"q_","lK",function(){return P.o2()})
u($,"q0","na",function(){return P.li("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pT","n9",function(){return Z.aS(0)})
u($,"pN","n7",function(){return Z.aS(511)})
u($,"pV","aN",function(){return Z.aS(1)})
u($,"pU","bL",function(){return Z.aS(2)})
u($,"pP","bK",function(){return Z.aS(4)})
u($,"pW","bM",function(){return Z.aS(8)})
u($,"pX","c7",function(){return Z.aS(16)})
u($,"pQ","dw",function(){return Z.aS(32)})
u($,"pR","dx",function(){return Z.aS(64)})
u($,"pS","n8",function(){return Z.aS(96)})
u($,"pY","cB",function(){return Z.aS(128)})
u($,"pO","bJ",function(){return Z.aS(256)})
u($,"pf","mW",function(){return new V.h4(1e-9)})
u($,"pe","N",function(){return $.mW()})
u($,"pu","kT",function(){return Q.az(-1)})
u($,"pp","a8",function(){return Q.az(0)})
u($,"pt","c5",function(){return Q.az(4096)})
u($,"po","b5",function(){return Q.az(15)})
u($,"pq","kS",function(){return $.lJ().W(0,$.c6()).W(0,$.b5())})
u($,"pm","bv",function(){return Q.az(256)})
u($,"pz","ae",function(){return Q.az(512)})
u($,"pn","lJ",function(){return Q.az(768)})
u($,"pv","cA",function(){return Q.az(16)})
u($,"py","b6",function(){return Q.az(32)})
u($,"ps","cz",function(){return Q.az(48)})
u($,"pl","bu",function(){return Q.az(64)})
u($,"px","aI",function(){return Q.az(80)})
u($,"pr","bI",function(){return Q.az(96)})
u($,"pw","c6",function(){return Q.az(240)})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cT,ArrayBufferView:H.cT,Float32Array:H.cS,Float64Array:H.cS,Int16Array:H.i0,Int32Array:H.i1,Int8Array:H.i2,Uint16Array:H.i3,Uint32Array:H.i4,Uint8ClampedArray:H.e7,CanvasPixelArray:H.e7,Uint8Array:H.i5,HTMLAudioElement:W.w,HTMLBRElement:W.w,HTMLBaseElement:W.w,HTMLBodyElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLInputElement:W.w,HTMLLIElement:W.w,HTMLLabelElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMediaElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableCellElement:W.w,HTMLTableDataCellElement:W.w,HTMLTableHeaderCellElement:W.w,HTMLTableColElement:W.w,HTMLTableElement:W.w,HTMLTableRowElement:W.w,HTMLTableSectionElement:W.w,HTMLTemplateElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLVideoElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,AccessibleNodeList:W.ft,HTMLAnchorElement:W.fv,HTMLAreaElement:W.fw,Blob:W.dz,HTMLCanvasElement:W.cc,CanvasRenderingContext2D:W.cF,CDATASection:W.bN,CharacterData:W.bN,Comment:W.bN,ProcessingInstruction:W.bN,Text:W.bN,CSSNumericValue:W.cJ,CSSUnitValue:W.cJ,CSSPerspective:W.fO,CSSCharsetRule:W.U,CSSConditionRule:W.U,CSSFontFaceRule:W.U,CSSGroupingRule:W.U,CSSImportRule:W.U,CSSKeyframeRule:W.U,MozCSSKeyframeRule:W.U,WebKitCSSKeyframeRule:W.U,CSSKeyframesRule:W.U,MozCSSKeyframesRule:W.U,WebKitCSSKeyframesRule:W.U,CSSMediaRule:W.U,CSSNamespaceRule:W.U,CSSPageRule:W.U,CSSRule:W.U,CSSStyleRule:W.U,CSSSupportsRule:W.U,CSSViewportRule:W.U,CSSStyleDeclaration:W.cK,MSStyleCSSProperties:W.cK,CSS2Properties:W.cK,CSSImageValue:W.b9,CSSKeywordValue:W.b9,CSSPositionValue:W.b9,CSSResourceValue:W.b9,CSSURLImageValue:W.b9,CSSStyleValue:W.b9,CSSMatrixComponent:W.ba,CSSRotation:W.ba,CSSScale:W.ba,CSSSkew:W.ba,CSSTranslation:W.ba,CSSTransformComponent:W.ba,CSSTransformValue:W.fQ,CSSUnparsedValue:W.fR,DataTransferItemList:W.fT,HTMLDivElement:W.dL,DOMException:W.fU,ClientRectList:W.dM,DOMRectList:W.dM,DOMRectReadOnly:W.dN,DOMStringList:W.fV,DOMTokenList:W.fW,Element:W.aa,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.bb,FileList:W.h7,FileWriter:W.h8,HTMLFormElement:W.hc,Gamepad:W.bc,History:W.hg,HTMLCollection:W.cg,HTMLFormControlsCollection:W.cg,HTMLOptionsCollection:W.cg,XMLHttpRequest:W.bd,XMLHttpRequestUpload:W.cN,XMLHttpRequestEventTarget:W.cN,ImageData:W.bR,HTMLImageElement:W.cO,KeyboardEvent:W.be,Location:W.hB,MediaList:W.hU,MIDIInputMap:W.hV,MIDIOutputMap:W.hX,MimeType:W.bh,MimeTypeArray:W.hZ,PointerEvent:W.ak,MouseEvent:W.ak,DragEvent:W.ak,Document:W.L,DocumentFragment:W.L,HTMLDocument:W.L,ShadowRoot:W.L,XMLDocument:W.L,Attr:W.L,DocumentType:W.L,Node:W.L,NodeList:W.cU,RadioNodeList:W.cU,Plugin:W.bi,PluginArray:W.ie,ProgressEvent:W.bk,ResourceProgressEvent:W.bk,RTCStatsReport:W.iw,HTMLSelectElement:W.iz,SourceBuffer:W.bm,SourceBufferList:W.iI,SpeechGrammar:W.bn,SpeechGrammarList:W.iJ,SpeechRecognitionResult:W.bo,Storage:W.iR,CSSStyleSheet:W.b0,StyleSheet:W.b0,TextTrack:W.bp,TextTrackCue:W.b1,VTTCue:W.b1,TextTrackCueList:W.j_,TextTrackList:W.j0,TimeRanges:W.j9,Touch:W.br,TouchEvent:W.b2,TouchList:W.jc,TrackDefaultList:W.jd,CompositionEvent:W.c_,FocusEvent:W.c_,TextEvent:W.c_,UIEvent:W.c_,URL:W.js,VideoTrackList:W.jH,WheelEvent:W.bt,Window:W.dd,DOMWindow:W.dd,CSSRuleList:W.jU,ClientRect:W.eB,DOMRect:W.eB,GamepadList:W.ka,NamedNodeMap:W.eU,MozNamedAttrMap:W.eU,SpeechRecognitionResultList:W.kk,StyleSheetList:W.km,SVGLength:P.bw,SVGLengthList:P.hx,SVGNumber:P.bB,SVGNumberList:P.i7,SVGPointList:P.ih,SVGStringList:P.iY,SVGAElement:P.u,SVGAnimateElement:P.u,SVGAnimateMotionElement:P.u,SVGAnimateTransformElement:P.u,SVGAnimationElement:P.u,SVGCircleElement:P.u,SVGClipPathElement:P.u,SVGDefsElement:P.u,SVGDescElement:P.u,SVGDiscardElement:P.u,SVGEllipseElement:P.u,SVGFEBlendElement:P.u,SVGFEColorMatrixElement:P.u,SVGFEComponentTransferElement:P.u,SVGFECompositeElement:P.u,SVGFEConvolveMatrixElement:P.u,SVGFEDiffuseLightingElement:P.u,SVGFEDisplacementMapElement:P.u,SVGFEDistantLightElement:P.u,SVGFEFloodElement:P.u,SVGFEFuncAElement:P.u,SVGFEFuncBElement:P.u,SVGFEFuncGElement:P.u,SVGFEFuncRElement:P.u,SVGFEGaussianBlurElement:P.u,SVGFEImageElement:P.u,SVGFEMergeElement:P.u,SVGFEMergeNodeElement:P.u,SVGFEMorphologyElement:P.u,SVGFEOffsetElement:P.u,SVGFEPointLightElement:P.u,SVGFESpecularLightingElement:P.u,SVGFESpotLightElement:P.u,SVGFETileElement:P.u,SVGFETurbulenceElement:P.u,SVGFilterElement:P.u,SVGForeignObjectElement:P.u,SVGGElement:P.u,SVGGeometryElement:P.u,SVGGraphicsElement:P.u,SVGImageElement:P.u,SVGLineElement:P.u,SVGLinearGradientElement:P.u,SVGMarkerElement:P.u,SVGMaskElement:P.u,SVGMetadataElement:P.u,SVGPathElement:P.u,SVGPatternElement:P.u,SVGPolygonElement:P.u,SVGPolylineElement:P.u,SVGRadialGradientElement:P.u,SVGRectElement:P.u,SVGScriptElement:P.u,SVGSetElement:P.u,SVGStopElement:P.u,SVGStyleElement:P.u,SVGElement:P.u,SVGSVGElement:P.u,SVGSwitchElement:P.u,SVGSymbolElement:P.u,SVGTSpanElement:P.u,SVGTextContentElement:P.u,SVGTextElement:P.u,SVGTextPathElement:P.u,SVGTextPositioningElement:P.u,SVGTitleElement:P.u,SVGUseElement:P.u,SVGViewElement:P.u,SVGGradientElement:P.u,SVGComponentTransferFunctionElement:P.u,SVGFEDropShadowElement:P.u,SVGMPathElement:P.u,SVGTransform:P.bE,SVGTransformList:P.je,AudioBuffer:P.fz,AudioParamMap:P.fA,AudioTrackList:P.fC,AudioContext:P.c9,webkitAudioContext:P.c9,BaseAudioContext:P.c9,OfflineAudioContext:P.i8,WebGLBuffer:P.dB,WebGLFramebuffer:P.dR,WebGLProgram:P.ea,WebGLRenderbuffer:P.ec,WebGL2RenderingContext:P.ck,WebGLShader:P.ed,WebGLTexture:P.em,WebGLUniformLocation:P.eq,SQLResultSetRowList:P.iK})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,ProgressEvent:true,ResourceProgressEvent:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e5.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.cS.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
H.e6.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(L.mP,[])
else L.mP([])})})()
//# sourceMappingURL=main.dart.js.map
