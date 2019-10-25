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
a[c]=function(){a[c]=function(){H.lR(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.iN"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.iN"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.iN(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={iD:function iD(){},
kj:function(){return new P.fT("No element")},
cI:function(a,b,c,d){if(c-b<=32)H.kJ(a,b,c,d)
else H.kI(a,b,c,d)},
kJ:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.b(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.b(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.X()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.b(a,q)
C.a.l(a,s,a[q])
s=q}C.a.l(a,s,t)}},
kI:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.Z(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.Z(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.X()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.X()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.X()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.X()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.X()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.X()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.X()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.X()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.X()
if(a1>0){p=q
q=r
r=p}C.a.l(a2,d,u)
C.a.l(a2,b,s)
C.a.l(a2,c,q)
if(a3<0||a3>=a2.length)return H.b(a2,a3)
C.a.l(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.b(a2,a4)
C.a.l(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.I(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.a3()
if(k<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.a.l(a2,m,a2[o])
C.a.l(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.X()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.a.l(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.a.l(a2,o,a2[n])
C.a.l(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.b(a2,n)
C.a.l(a2,m,a2[n])
C.a.l(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.a3()
if(g<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.a.l(a2,m,a2[o])
C.a.l(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.X()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.X()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a3()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.a.l(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.a.l(a2,o,a2[n])
C.a.l(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.a.l(a2,m,a2[n])
C.a.l(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.b(a2,a1)
C.a.l(a2,a3,a2[a1])
C.a.l(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.b(a2,a1)
C.a.l(a2,a4,a2[a1])
C.a.l(a2,a1,r)
H.cI(a2,a3,o-2,a5)
H.cI(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.b(a2,o)
if(!J.I(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.b(a2,n)
if(!J.I(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.a.l(a2,m,a2[o])
C.a.l(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a3()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.a.l(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.a.l(a2,o,a2[n])
C.a.l(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.a.l(a2,m,a2[n])
C.a.l(a2,n,l)}n=j
break}}}H.cI(a2,o,n,a5)}else H.cI(a2,o,n,a5)},
J:function J(a){this.a=a},
eu:function eu(){},
cr:function cr(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
eX:function eX(a,b,c){this.a=a
this.b=b
this.$ti=c},
eY:function eY(a,b){this.a=null
this.b=a
this.c=b},
hF:function hF(a,b,c){this.a=a
this.b=b
this.$ti=c},
hG:function hG(a,b){this.a=a
this.b=b},
ch:function ch(){},
hq:function hq(){},
cX:function cX(){},
dY:function(a){var u,t=H.lS(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
lD:function(a){return v.types[a]},
lI:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.P(a).$it},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a1(a)
if(typeof u!=="string")throw H.f(H.av(a))
return u},
bI:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bJ:function(a){return H.ku(a)+H.jy(H.c2(a),0,null)},
ku:function(a){var u,t,s,r,q,p,o,n=J.P(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.C||!!n.$ibP){r=C.k(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.dY(t.length>1&&C.c.aU(t,0)===36?C.c.aE(t,1):t)},
jh:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
kD:function(a){var u,t,s,r=H.c([],[P.v])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.av(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.aW(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.f(H.av(s))}return H.jh(r)},
ji:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.av(s))
if(s<0)throw H.f(H.av(s))
if(s>65535)return H.kD(a)}return H.jh(a)},
kC:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aW(u,10))>>>0,56320|u&1023)}throw H.f(P.a8(a,0,1114111,null,null))},
bc:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
kB:function(a){var u=H.bc(a).getFullYear()+0
return u},
kz:function(a){var u=H.bc(a).getMonth()+1
return u},
kv:function(a){var u=H.bc(a).getDate()+0
return u},
kw:function(a){var u=H.bc(a).getHours()+0
return u},
ky:function(a){var u=H.bc(a).getMinutes()+0
return u},
kA:function(a){var u=H.bc(a).getSeconds()+0
return u},
kx:function(a){var u=H.bc(a).getMilliseconds()+0
return u},
q:function(a){throw H.f(H.av(a))},
b:function(a,b){if(a==null)J.bo(a)
throw H.f(H.bk(a,b))},
bk:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ac(!0,b,s,null)
u=J.bo(a)
if(!(b<0)){if(typeof u!=="number")return H.q(u)
t=b>=u}else t=!0
if(t)return P.E(b,a,s,null,u)
return P.fx(b,s)},
lw:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bd(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bd(a,c,!0,b,"end",u)
return new P.ac(!0,b,"end",null)},
av:function(a){return new P.ac(!0,a,null,null)},
ls:function(a){if(typeof a!=="number")throw H.f(H.av(a))
return a},
f:function(a){var u
if(a==null)a=new P.cB()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jM})
u.name=""}else u.toString=H.jM
return u},
jM:function(){return J.a1(this.dartException)},
p:function(a){throw H.f(a)},
m:function(a){throw H.f(P.bt(a))},
ai:function(a){var u,t,s,r,q,p
a=H.jJ(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.r])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hf(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hg:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jr:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jd:function(a,b){return new H.fo(a,b==null?null:b.method)},
iE:function(a,b){var u=b==null,t=u?null:b.method
return new H.eN(a,t,u?null:b.receiver)},
dZ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.ip(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aW(t,16)&8191)===10)switch(s){case 438:return f.$1(H.iE(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jd(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.jQ()
q=$.jR()
p=$.jS()
o=$.jT()
n=$.jW()
m=$.jX()
l=$.jV()
$.jU()
k=$.jZ()
j=$.jY()
i=r.a5(u)
if(i!=null)return f.$1(H.iE(u,i))
else{i=q.a5(u)
if(i!=null){i.method="call"
return f.$1(H.iE(u,i))}else{i=p.a5(u)
if(i==null){i=o.a5(u)
if(i==null){i=n.a5(u)
if(i==null){i=m.a5(u)
if(i==null){i=l.a5(u)
if(i==null){i=o.a5(u)
if(i==null){i=k.a5(u)
if(i==null){i=j.a5(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jd(u,i))}}return f.$1(new H.hp(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cK()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ac(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cK()
return a},
iQ:function(a){var u
if(a==null)return new H.dC(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dC(a)},
lA:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
lH:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.o("Unsupported number of arguments for wrapped closure"))},
bj:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lH)
a.$identity=u
return u},
kd:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.fU().constructor.prototype):Object.create(new H.bp(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ad
if(typeof t!=="number")return t.B()
$.ad=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.j0(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.k9(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.j0(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
k9:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lD,a)
if(typeof a=="function")if(b)return a
else{u=c?H.j_:H.is
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.f("Error in functionType of tearoff")},
ka:function(a,b,c,d){var u=H.is
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
j0:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kc(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.ka(t,!r,u,b)
if(t===0){r=$.ad
if(typeof r!=="number")return r.B()
$.ad=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bq
return new Function(r+H.e(q==null?$.bq=H.ea("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ad
if(typeof r!=="number")return r.B()
$.ad=r+1
o+=r
r="return function("+o+"){return this."
q=$.bq
return new Function(r+H.e(q==null?$.bq=H.ea("self"):q)+"."+H.e(u)+"("+o+");}")()},
kb:function(a,b,c,d){var u=H.is,t=H.j_
switch(b?-1:a){case 0:throw H.f(H.kG("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kc:function(a,b){var u,t,s,r,q,p,o,n=$.bq
if(n==null)n=$.bq=H.ea("self")
u=$.iZ
if(u==null)u=$.iZ=H.ea("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.kb(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ad
if(typeof u!=="number")return u.B()
$.ad=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ad
if(typeof u!=="number")return u.B()
$.ad=u+1
return new Function(n+u+"}")()},
iN:function(a,b,c,d,e,f,g){return H.kd(a,b,c,d,!!e,!!f,g)},
is:function(a){return a.a},
j_:function(a){return a.c},
ea:function(a){var u,t,s,r=new H.bp("self","target","receiver","name"),q=J.iB(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
lM:function(a,b){throw H.f(H.k8(a,H.dY(b.substring(2))))},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else u=!0
if(u)return a
H.lM(a,b)},
ly:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
k8:function(a,b){return new H.eb("CastError: "+P.iy(a)+": type '"+H.e(H.lo(a))+"' is not a subtype of type '"+b+"'")},
lo:function(a){var u,t=J.P(a)
if(!!t.$ibs){u=H.ly(t)
if(u!=null)return H.lN(u)
return"Closure"}return H.bJ(a)},
lR:function(a){throw H.f(new P.em(a))},
kG:function(a){return new H.fE(a)},
jD:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
c2:function(a){if(a==null)return
return a.$ti},
mo:function(a,b,c){return H.im(a["$a"+H.e(c)],H.c2(b))},
lC:function(a,b,c,d){var u=H.im(a["$a"+H.e(c)],H.c2(b))
return u==null?null:u[d]},
jE:function(a,b,c){var u=H.im(a["$a"+H.e(b)],H.c2(a))
return u==null?null:u[c]},
ie:function(a,b){var u=H.c2(a)
return u==null?null:u[b]},
lN:function(a){return H.aY(a,null)},
aY:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.dY(a[0].name)+H.jy(a,1,b)
if(typeof a=="function")return H.dY(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.e(b[t])}if('func' in a)return H.kX(a,b)
if('futureOr' in a)return"FutureOr<"+H.aY("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kX:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.r])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.c.B(p,a0[m])
l=u[q]
if(l!=null&&l!==P.W)p+=" extends "+H.aY(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.aY(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.aY(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.aY(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.lz(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.aY(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
jy:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aR("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aY(p,c)}return"<"+u.h(0)+">"},
im:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
mm:function(a,b,c){return a.apply(b,H.im(J.P(b)["$a"+H.e(c)],H.c2(b)))},
mn:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lJ:function(a){var u,t,s,r,q=$.jF.$1(a),p=$.ib[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ij[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.jB.$2(a,q)
if(q!=null){p=$.ib[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ij[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.ik(u)
$.ib[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.ij[q]=u
return u}if(s==="-"){r=H.ik(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.jH(a,u)
if(s==="*")throw H.f(P.js(q))
if(v.leafTags[q]===true){r=H.ik(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.jH(a,u)},
jH:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.iS(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ik:function(a){return J.iS(a,!1,null,!!a.$it)},
lK:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ik(u)
else return J.iS(u,c,null,null)},
lF:function(){if(!0===$.iR)return
$.iR=!0
H.lG()},
lG:function(){var u,t,s,r,q,p,o,n
$.ib=Object.create(null)
$.ij=Object.create(null)
H.lE()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jI.$1(q)
if(p!=null){o=H.lK(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lE:function(){var u,t,s,r,q,p,o=C.t()
o=H.bi(C.u,H.bi(C.v,H.bi(C.l,H.bi(C.l,H.bi(C.w,H.bi(C.x,H.bi(C.y(C.k),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.jF=new H.ig(r)
$.jB=new H.ih(q)
$.jI=new H.ii(p)},
bi:function(a,b){return a(b)||b},
kl:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.f(new P.eF("Illegal RegExp pattern ("+String(p)+")",a))},
jK:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lx:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
jJ:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jL:function(a,b,c){var u=H.lP(a,b,c)
return u},
lP:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.jJ(b),'g'),H.lx(c))},
hf:function hf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fo:function fo(a,b){this.a=a
this.b=b},
eN:function eN(a,b,c){this.a=a
this.b=b
this.c=c},
hp:function hp(a){this.a=a},
ip:function ip(a){this.a=a},
dC:function dC(a){this.a=a
this.b=null},
bs:function bs(){},
h_:function h_(){},
fU:function fU(){},
bp:function bp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eb:function eb(a){this.a=a},
fE:function fE(a){this.a=a},
H:function H(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eQ:function eQ(a,b){this.a=a
this.b=b
this.c=null},
cq:function cq(a,b){this.a=a
this.$ti=b},
eR:function eR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ig:function ig(a){this.a=a},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a},
eM:function eM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c_:function(a){return a},
aX:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.bk(b,a))},
kW:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.lw(a,b,c))
return b},
bF:function bF(){},
cx:function cx(){},
bE:function bE(){},
cy:function cy(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
cz:function cz(){},
fn:function fn(){},
bR:function bR(){},
bS:function bS(){},
bT:function bT(){},
bU:function bU(){},
lz:function(a){return J.j9(a?Object.keys(a):[],null)},
lS:function(a){return v.mangledGlobalNames[a]},
lL:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
iS:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
id:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.iR==null){H.lF()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.js("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.iV()]
if(r!=null)return r
r=H.lJ(a)
if(r!=null)return r
if(typeof a=="function")return C.E
u=Object.getPrototypeOf(a)
if(u==null)return C.o
if(u===Object.prototype)return C.o
if(typeof s=="function"){Object.defineProperty(s,$.iV(),{value:C.j,enumerable:false,writable:true,configurable:true})
return C.j}return C.j},
kk:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.iY(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.a8(a,0,4294967295,"length",null))
return J.j9(new Array(a),b)},
j9:function(a,b){return J.iB(H.c(a,[b]))},
iB:function(a){a.fixed$length=Array
return a},
P:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cl.prototype
return J.ck.prototype}if(typeof a=="string")return J.b6.prototype
if(a==null)return J.cm.prototype
if(typeof a=="boolean")return J.eL.prototype
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.W)return a
return J.id(a)},
ic:function(a){if(typeof a=="string")return J.b6.prototype
if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.W)return a
return J.id(a)},
iO:function(a){if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.W)return a
return J.id(a)},
lB:function(a){if(typeof a=="number")return J.bz.prototype
if(typeof a=="string")return J.b6.prototype
if(a==null)return a
if(!(a instanceof P.W))return J.bP.prototype
return a},
iP:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.W)return a
return J.id(a)},
I:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).p(a,b)},
e_:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lI(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ic(a).i(a,b)},
k3:function(a,b,c){return J.iP(a).eI(a,b,c)},
k4:function(a,b,c,d){return J.iP(a).eZ(a,b,c,d)},
iq:function(a,b){return J.lB(a).f7(a,b)},
ir:function(a,b,c){return J.ic(a).f8(a,b,c)},
iX:function(a,b){return J.iO(a).C(a,b)},
k5:function(a,b){return J.iO(a).H(a,b)},
b0:function(a){return J.P(a).gE(a)},
bn:function(a){return J.iO(a).gP(a)},
bo:function(a){return J.ic(a).gj(a)},
k6:function(a,b){return J.iP(a).fI(a,b)},
a1:function(a){return J.P(a).h(a)},
a:function a(){},
eL:function eL(){},
cm:function cm(){},
cn:function cn(){},
fs:function fs(){},
bP:function bP(){},
aK:function aK(){},
aJ:function aJ(a){this.$ti=a},
iC:function iC(a){this.$ti=a},
U:function U(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bz:function bz(){},
cl:function cl(){},
ck:function ck(){},
b6:function b6(){}},P={
kN:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lp()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bj(new P.hI(s),1)).observe(u,{childList:true})
return new P.hH(s,u,t)}else if(self.setImmediate!=null)return P.lq()
return P.lr()},
kO:function(a){self.scheduleImmediate(H.bj(new P.hJ(a),0))},
kP:function(a){self.setImmediate(H.bj(new P.hK(a),0))},
kQ:function(a){P.iH(C.i,a)},
iH:function(a,b){var u=C.d.Z(a.a,1000)
return P.kT(u<0?0:u,b)},
jq:function(a,b){var u=C.d.Z(a.a,1000)
return P.kU(u<0?0:u,b)},
kT:function(a,b){var u=new P.dI()
u.dm(a,b)
return u},
kU:function(a,b){var u=new P.dI()
u.dn(a,b)
return u},
li:function(){var u,t
for(;u=$.bh,u!=null;){$.c1=null
t=u.b
$.bh=t
if(t==null)$.c0=null
u.a.$0()}},
ln:function(){$.iL=!0
try{P.li()}finally{$.c1=null
$.iL=!1
if($.bh!=null)$.iW().$1(P.jC())}},
ll:function(a){var u=new P.d4(a)
if($.bh==null){$.bh=$.c0=u
if(!$.iL)$.iW().$1(P.jC())}else $.c0=$.c0.b=u},
lm:function(a){var u,t,s=$.bh
if(s==null){P.ll(a)
$.c1=$.c0
return}u=new P.d4(a)
t=$.c1
if(t==null){u.b=s
$.bh=$.c1=u}else{u.b=t.b
$.c1=t.b=u
if(u.b==null)$.c0=u}},
jp:function(a,b){var u=$.aa
if(u===C.e)return P.iH(a,b)
return P.iH(a,u.f5(b))},
kM:function(a,b){var u=$.aa
if(u===C.e)return P.jq(a,b)
return P.jq(a,u.cu(b,P.cQ))},
jz:function(a,b,c,d,e){var u={}
u.a=d
P.lm(new P.i9(u,e))},
lj:function(a,b,c,d){var u,t=$.aa
if(t===c)return d.$0()
$.aa=c
u=t
try{t=d.$0()
return t}finally{$.aa=u}},
lk:function(a,b,c,d,e){var u,t=$.aa
if(t===c)return d.$1(e)
$.aa=c
u=t
try{t=d.$1(e)
return t}finally{$.aa=u}},
hI:function hI(a){this.a=a},
hH:function hH(a,b,c){this.a=a
this.b=b
this.c=c},
hJ:function hJ(a){this.a=a},
hK:function hK(a){this.a=a},
dI:function dI(){this.c=0},
i2:function i2(a,b){this.a=a
this.b=b},
i1:function i1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d4:function d4(a){this.a=a
this.b=null},
cM:function cM(){},
fX:function fX(){},
cQ:function cQ(){},
i4:function i4(){},
i9:function i9(a,b){this.a=a
this.b=b},
hW:function hW(){},
hX:function hX(a,b){this.a=a
this.b=b},
hY:function hY(a,b,c){this.a=a
this.b=b
this.c=c},
kn:function(a,b){return new H.H([a,b])},
ko:function(a){return H.lA(a,new H.H([null,null]))},
kp:function(a){return new P.hT([a])},
iK:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kS:function(a,b){var u=new P.dj(a,b)
u.c=a.e
return u},
ki:function(a,b,c){var u,t
if(P.iM(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.r])
$.X.push(a)
try{P.kY(a,u)}finally{if(0>=$.X.length)return H.b($.X,-1)
$.X.pop()}t=P.jn(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
iA:function(a,b,c){var u,t
if(P.iM(a))return b+"..."+c
u=new P.aR(b)
$.X.push(a)
try{t=u
t.a=P.jn(t.a,a,", ")}finally{if(0>=$.X.length)return H.b($.X,-1)
$.X.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
iM:function(a){var u,t
for(u=$.X.length,t=0;t<u;++t)if(a===$.X[t])return!0
return!1},
kY:function(a,b){var u,t,s,r,q,p,o,n=a.gP(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.u())return
u=H.e(n.gG(n))
b.push(u)
m+=u.length+2;++l}if(!n.u()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gG(n);++l
if(!n.u()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gG(n);++l
for(;n.u();r=q,q=p){p=n.gG(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.e(r)
t=H.e(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
jb:function(a){var u,t={}
if(P.iM(a))return"{...}"
u=new P.aR("")
try{$.X.push(a)
u.a+="{"
t.a=!0
J.k5(a,new P.eW(t,u))
u.a+="}"}finally{if(0>=$.X.length)return H.b($.X,-1)
$.X.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
hT:function hT(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hU:function hU(a){this.a=a
this.c=this.b=null},
dj:function dj(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eS:function eS(){},
n:function n(){},
eV:function eV(){},
eW:function eW(a,b){this.a=a
this.b=b},
am:function am(){},
hZ:function hZ(){},
dk:function dk(){},
ed:function ed(){},
eh:function eh(){},
ev:function ev(){},
ht:function ht(){},
hu:function hu(){},
i3:function i3(a){this.b=0
this.c=a},
kh:function(a){if(a instanceof H.bs)return a.h(0)
return"Instance of '"+H.e(H.bJ(a))+"'"},
kq:function(a,b,c){var u,t,s=J.kk(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
ja:function(a,b,c){var u,t=H.c([],[c])
for(u=J.bn(a);u.u();)t.push(u.gG(u))
if(b)return t
return J.iB(t)},
iG:function(a){var u,t
if(a.constructor===Array){u=a.length
t=P.jk(0,null,u)
return H.ji(t<u?C.a.dd(a,0,t):a)}return P.kK(a,0,null)},
kK:function(a,b,c){var u,t,s=J.bn(a)
for(u=0;u<b;++u)if(!s.u())throw H.f(P.a8(b,0,u,null,null))
t=[]
for(;s.u();)t.push(s.gG(s))
return H.ji(t)},
kE:function(a){return new H.eM(a,H.kl(a,!1,!0,!1,!1,!1))},
jn:function(a,b,c){var u=J.bn(b)
if(!u.u())return a
if(c.length===0){do a+=H.e(u.gG(u))
while(u.u())}else{a+=H.e(u.gG(u))
for(;u.u();)a=a+c+H.e(u.gG(u))}return a},
kV:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.m){u=$.k2().b
u=u.test(b)}else u=!1
if(u)return b
t=C.A.f9(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.kC(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
ke:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kf:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cc:function(a){if(a>=10)return""+a
return"0"+a},
j6:function(a){return new P.aC(1000*a)},
iy:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a1(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kh(a)},
k7:function(a){return new P.ac(!1,null,null,a)},
iY:function(a,b,c){return new P.ac(!0,a,b,c)},
fx:function(a,b){return new P.bd(null,null,!0,a,b,"Value not in range")},
a8:function(a,b,c,d,e){return new P.bd(b,c,!0,a,d,"Invalid value")},
jk:function(a,b,c){if(0>a||a>c)throw H.f(P.a8(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.a8(b,a,c,"end",null))
return b}return c},
jj:function(a,b){if(typeof a!=="number")return a.a3()
if(a<0)throw H.f(P.a8(a,0,null,b,null))},
E:function(a,b,c,d,e){var u=e==null?J.bo(b):e
return new P.eJ(u,!0,a,c,"Index out of range")},
a0:function(a){return new P.hr(a)},
js:function(a){return new P.ho(a)},
bt:function(a){return new P.eg(a)},
o:function(a){return new P.dc(a)},
iU:function(a){H.lL(a)},
aZ:function aZ(){},
a3:function a3(a,b){this.a=a
this.b=b},
G:function G(){},
aC:function aC(a){this.a=a},
es:function es(){},
et:function et(){},
b4:function b4(){},
cB:function cB(){},
ac:function ac(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bd:function bd(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eJ:function eJ(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hr:function hr(a){this.a=a},
ho:function ho(a){this.a=a},
fT:function fT(a){this.a=a},
eg:function eg(a){this.a=a},
fr:function fr(){},
cK:function cK(){},
em:function em(a){this.a=a},
dc:function dc(a){this.a=a},
eF:function eF(a,b){this.a=a
this.b=b},
v:function v(){},
i:function i(){},
eK:function eK(){},
b9:function b9(){},
ct:function ct(){},
aM:function aM(){},
a7:function a7(){},
W:function W(){},
r:function r(){},
aR:function aR(a){this.a=a},
lv:function(a){var u,t=J.P(a)
if(!!t.$iaG){u=t.gcC(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.dN(a.data,a.height,a.width)},
lu:function(a){if(a instanceof P.dN)return{data:a.a,height:a.b,width:a.c}
return a},
aw:function(a){var u,t,s,r,q
if(a==null)return
u=P.kn(P.r,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
u.l(0,q,a[q])}return u},
lt:function(a){var u={}
a.H(0,new P.ia(u))
return u},
j5:function(){var u=$.j4
return u==null?$.j4=J.ir(window.navigator.userAgent,"Opera",0):u},
kg:function(){var u,t=$.j1
if(t!=null)return t
u=$.j2
if(u==null?$.j2=J.ir(window.navigator.userAgent,"Firefox",0):u)t="-moz-"
else{u=$.j3
if(u==null)u=$.j3=!P.j5()&&J.ir(window.navigator.userAgent,"Trident/",0)
if(u)t="-ms-"
else t=P.j5()?"-o-":"-webkit-"}return $.j1=t},
dN:function dN(a,b,c){this.a=a
this.b=b
this.c=c},
ia:function ia(a){this.a=a},
eB:function eB(a,b){this.a=a
this.b=b},
eC:function eC(){},
eD:function eD(){},
hS:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kR:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
hV:function hV(){},
a5:function a5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b8:function b8(){},
eP:function eP(){},
bb:function bb(){},
fp:function fp(){},
fw:function fw(){},
fY:function fY(){},
j:function j(){},
bf:function bf(){},
he:function he(){},
dh:function dh(){},
di:function di(){},
dt:function dt(){},
du:function du(){},
dE:function dE(){},
dF:function dF(){},
dL:function dL(){},
dM:function dM(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(a){this.a=a},
e8:function e8(){},
b1:function b1(){},
fq:function fq(){},
d5:function d5(){},
cF:function cF(){},
fS:function fS(){},
dA:function dA(){},
dB:function dB(){}},W={
iu:function(){var u=document.createElement("canvas")
return u},
ix:function(a){return"wheel"},
j8:function(a){var u=document.createElement("img")
u.src=a
return u},
hR:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jx:function(a,b,c,d){var u=W.hR(W.hR(W.hR(W.hR(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
L:function(a,b,c,d){var u=W.jA(new W.hP(c),W.h)
if(u!=null&&!0)J.k4(a,b,u,!1)
return new W.hO(a,b,u,!1)},
jA:function(a,b){var u=$.aa
if(u===C.e)return a
return u.cu(a,b)},
k:function k(){},
e0:function e0(){},
e2:function e2(){},
e3:function e3(){},
c6:function c6(){},
b2:function b2(){},
aB:function aB(){},
ei:function ei(){},
C:function C(){},
b3:function b3(){},
ej:function ej(){},
a2:function a2(){},
ae:function ae(){},
ek:function ek(){},
el:function el(){},
en:function en(){},
ep:function ep(){},
ce:function ce(){},
cf:function cf(){},
eq:function eq(){},
er:function er(){},
hM:function hM(a,b){this.a=a
this.b=b},
V:function V(){},
h:function h(){},
d:function d(){},
aE:function aE(){},
ez:function ez(){},
eA:function eA(){},
eE:function eE(){},
aF:function aF(){},
eH:function eH(){},
bx:function bx(){},
aG:function aG(){},
by:function by(){},
b7:function b7(){},
eT:function eT(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(a){this.a=a},
fe:function fe(){},
ff:function ff(a){this.a=a},
aL:function aL(){},
fg:function fg(){},
ah:function ah(){},
hL:function hL(a){this.a=a},
F:function F(){},
cA:function cA(){},
aN:function aN(){},
ft:function ft(){},
fC:function fC(){},
fD:function fD(a){this.a=a},
fF:function fF(){},
aO:function aO(){},
fP:function fP(){},
aP:function aP(){},
fQ:function fQ(){},
aQ:function aQ(){},
fV:function fV(){},
fW:function fW(a){this.a=a},
as:function as(){},
aS:function aS(){},
at:function at(){},
h0:function h0(){},
h1:function h1(){},
h9:function h9(){},
aT:function aT(){},
be:function be(){},
hc:function hc(){},
hd:function hd(){},
aU:function aU(){},
hs:function hs(){},
hE:function hE(){},
aW:function aW(){},
bQ:function bQ(){},
hN:function hN(){},
d7:function d7(){},
hQ:function hQ(){},
dq:function dq(){},
i_:function i_(){},
i0:function i0(){},
hO:function hO(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
hP:function hP(a){this.a=a},
D:function D(){},
ci:function ci(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
d6:function d6(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
dd:function dd(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
dl:function dl(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){},
dr:function dr(){},
ds:function ds(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
bV:function bV(){},
bW:function bW(){},
dy:function dy(){},
dz:function dz(){},
dD:function dD(){},
dG:function dG(){},
dH:function dH(){},
bX:function bX(){},
bY:function bY(){},
dJ:function dJ(){},
dK:function dK(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){}},T={
N:function(a){var u=new T.fG()
u.dk(a)
return u},
e1:function e1(){},
cj:function cj(){},
cu:function cu(){},
ap:function ap(){this.a=null},
fG:function fG(){this.a=null},
cO:function cO(){},
h2:function h2(){},
h3:function h3(){var _=this
_.y=_.d=_.c=_.b=_.a=null},
h4:function h4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h5:function h5(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
h7:function h7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
h6:function h6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={cL:function cL(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},cR:function cR(a,b,c){this.a=a
this.b=b
this.c=c},cS:function cS(a){this.b=a
this.c=null},ha:function ha(){this.c=this.b=this.a=null},cU:function cU(a){this.b=a
this.a=this.c=null}},O={
iv:function(a){var u=new O.aj([a])
u.aT(a)
return u},
aj:function aj(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bC:function bC(){this.b=this.a=null},
cv:function cv(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f5:function f5(a,b){this.a=a
this.b=b},
f6:function f6(){},
f7:function f7(a,b){this.a=a
this.b=b},
f8:function f8(){},
f9:function f9(a,b){this.a=a
this.b=b},
fa:function fa(){},
f_:function f_(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bB:function bB(){},
f0:function f0(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
af:function af(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
f2:function f2(){var _=this
_.e=_.d=_.c=_.b=null},
f3:function f3(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
f4:function f4(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cH:function cH(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
cN:function cN(){}},E={
j7:function(){var u,t=new E.al()
t.a=""
t.b=!0
u=O.iv(E.al)
t.y=u
u.aC(t.gfp(),t.gft())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sb9(0,null)
return t},
kF:function(a,b){var u=new E.fy(a)
u.dj(a,b)
return u},
kL:function(a,b,c,d,e){var u,t,s=J.P(a)
if(!!s.$ib2)return E.jo(a,!0,!0,!0,!1)
u=W.iu()
t=u.style
t.width="100%"
t.height="100%"
s.gcz(a).k(0,u)
return E.jo(u,!0,!0,!0,!1)},
jo:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.cP(),p=C.f.bV(a,"webgl2",P.ko(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.p(P.o("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.kF(p,a)
u=new T.h5(p)
u.b=p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.cY(a)
t=new X.eO()
t.c=new X.a4(!1,!1,!1)
t.d=P.kp(P.v)
u.b=t
t=new X.fh(u)
t.f=0
t.r=V.aq()
t.x=V.aq()
t.ch=t.Q=1
u.c=t
t=new X.eU(u)
t.r=0
t.x=V.aq()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hb(u)
t.f=V.aq()
t.r=V.aq()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.c([],[[P.cM,P.W]])
u.z=t
s=document
t.push(W.L(s,"contextmenu",u.ge1(),!1))
u.z.push(W.L(a,"focus",u.ge7(),!1))
u.z.push(W.L(a,"blur",u.gdW(),!1))
u.z.push(W.L(s,"keyup",u.geb(),!1))
u.z.push(W.L(s,"keydown",u.ge9(),!1))
u.z.push(W.L(a,"mousedown",u.gef(),!1))
u.z.push(W.L(a,"mouseup",u.gej(),!1))
u.z.push(W.L(a,r,u.geh(),!1))
t=u.z
W.ix(a)
W.ix(a)
t.push(W.L(a,W.ix(a),u.gel(),!1))
u.z.push(W.L(s,r,u.ge3(),!1))
u.z.push(W.L(s,"mouseup",u.ge5(),!1))
u.z.push(W.L(s,"pointerlockchange",u.gen(),!1))
u.z.push(W.L(a,"touchstart",u.geE(),!1))
u.z.push(W.L(a,"touchend",u.geA(),!1))
u.z.push(W.L(a,"touchmove",u.geC(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a3(Date.now(),!1)
q.db=0
q.cl()
return q},
e9:function e9(){},
al:function al(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fy:function fy(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fz:function fz(a){this.a=a},
fA:function fA(a){this.a=a},
fB:function fB(a){this.a=a},
cP:function cP(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
h8:function h8(a){this.a=a}},Z={
iJ:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.c_(c)),35044)
a.bindBuffer(b,null)
return new Z.d2(b,u)},
a6:function(a){return new Z.au(a)},
d2:function d2(a,b){this.a=a
this.b=b},
c7:function c7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
d3:function d3(a){this.a=a},
br:function br(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
b5:function b5(a,b,c){this.a=a
this.b=b
this.c=c},
au:function au(a){this.a=a}},D={
x:function(){var u=new D.bu()
u.d=0
return u},
ec:function ec(){},
bu:function bu(){var _=this
_.d=_.c=_.b=_.a=null},
ex:function ex(a){this.a=a},
ey:function ey(a){this.a=a},
M:function M(){this.b=null},
aH:function aH(){this.b=null},
aI:function aI(){this.b=null},
u:function u(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
eo:function eo(){},
Y:function Y(){},
cp:function cp(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
fu:function fu(){},
fR:function fR(){}},X={c8:function c8(a,b){this.a=a
this.b=b},co:function co(a,b){this.a=a
this.b=b},eO:function eO(){var _=this
_.d=_.c=_.b=_.a=null},cs:function cs(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},eU:function eU(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},ao:function ao(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fh:function fh(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bD:function bD(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fv:function fv(){},cT:function cT(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hb:function hb(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},cY:function cY(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iz:function(a){var u=new X.eG(),t=new V.ak(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.jm
if(t==null){t=V.jl(0,0,1,1)
$.jm=t}u.r=t
return u},
je:function(a){var u,t,s=new X.cC()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gm().k(0,s.gdq())
t=new D.u("mover",u,s.b)
t.b=!0
s.ae(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.w().a)){s.c=1.0471975511965976
t=new D.u("fov",t,1.0471975511965976)
t.b=!0
s.ae(t)}t=s.d
if(!(Math.abs(t-0.1)<$.w().a)){s.d=0.1
t=new D.u("near",t,0.1)
t.b=!0
s.ae(t)}t=s.e
if(!(Math.abs(t-2000)<$.w().a)){s.e=2000
t=new D.u("far",t,2000)
t.b=!0
s.ae(t)}return s},
it:function it(){},
eG:function eG(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eI:function eI(){this.b=this.a=null},
cC:function cC(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
fZ:function fZ(){}},V={
ee:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.ak(u,t,s,1)},
lT:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.b.d7(a-b,u)
return(a<0?a+u:a)+b},
A:function(a,b,c){if(a==null)return C.c.a6("null",c)
return C.c.a6(C.b.d5(Math.abs(a-0)<$.w().a?0:a,b),c+b+1)},
bl:function(a,b,c){var u,t,s,r,q,p,o=H.c([],[P.r])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.m)(a),++s){r=V.A(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.c.a6(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
iT:function(a){return C.b.fO(Math.pow(2,C.D.bH(Math.log(H.ls(a))/Math.log(2))))},
ba:function(){var u=$.jc
return u==null?$.jc=V.ag(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ag:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.an(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aq:function(){var u=$.jg
return u==null?$.jg=new V.S(0,0):u},
kt:function(){var u=$.bH
return u==null?$.bH=new V.T(0,0,0):u},
jl:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cE(a,b,c,d)},
d1:function(){var u=$.jw
return u==null?$.jw=new V.z(0,0,0):u},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ew:function ew(a){this.a=a},
cw:function cw(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
an:function an(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
S:function S(a,b){this.a=a
this.b=b},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cE:function cE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
y:function y(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
lO:function(a){P.kM(C.B,new V.il(a))},
kH:function(a){var u=new V.fL()
u.dl(a,!0)
return u},
il:function il(a){this.a=a},
fL:function fL(){this.b=this.a=null},
fN:function fN(a){this.a=a},
fM:function fM(a){this.a=a}},U={
iw:function(){var u=new U.ef()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
ef:function ef(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ca:function ca(){this.b=this.a=null},
bw:function bw(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
Z:function Z(){},
cZ:function cZ(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
d_:function d_(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d0:function d0(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={c9:function c9(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},cb:function cb(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},cg:function cg(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},a9:function a9(){},
jG:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="testCanvas",a4=null,a5="modifiers",a6=34067,a7=V.kH("Test 034"),a8=W.iu()
a8.className="pageLargeCanvas"
a8.id=a3
a7.a.appendChild(a8)
u=[P.r]
a7.cs(H.c(["Test of resizing the render target. ","Resizing the canvas works better in Chrome."],u))
a7.cs(H.c(["\xab[Back to Tests|../]"],u))
u=document
a8=u.getElementById(a3)
a7=a8.style
a7.width="100%"
a7.height="100%"
a7.margin="-4px"
t=u.createElement("div")
a7=t.style
a7.border="2px solid"
a7.padding="10px"
C.n.eM(a7,(a7&&C.n).dw(a7,"resize"),"both","")
a7.overflow="auto"
J.k6(a8,t)
t.appendChild(a8)
s=u.getElementById(a3)
if(s==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
r=E.kL(s,!0,!0,!0,!1)
q=new U.bw()
q.aT(U.Z)
q.aC(q.gdO(),q.ger())
q.e=null
q.f=V.ba()
q.r=0
a7=r.x
u=new U.d_()
p=U.iw()
p.sbU(0,!0)
p.sbN(6.283185307179586)
p.sbP(0)
p.sa_(0,0)
p.sbO(100)
p.sM(0)
p.sbA(0.5)
u.b=p
o=u.gax()
p.gm().k(0,o)
p=U.iw()
p.sbU(0,!0)
p.sbN(6.283185307179586)
p.sbP(0)
p.sa_(0,0)
p.sbO(100)
p.sM(0)
p.sbA(0.5)
u.c=p
p.gm().k(0,o)
u.d=null
u.r=u.f=u.e=!1
u.y=u.x=2.5
u.Q=4
u.ch=u.cx=!1
u.db=u.cy=0
u.dx=null
u.dy=0
u.fx=u.fr=null
n=new X.a4(!1,!1,!1)
m=u.d
u.d=n
p=new D.u(a5,m,n)
p.b=!0
u.K(p)
p=u.f
if(p!==!1){u.f=!1
p=new D.u("invertX",p,!1)
p.b=!0
u.K(p)}p=u.r
if(p!==!1){u.r=!1
p=new D.u("invertY",p,!1)
p.b=!0
u.K(p)}u.aJ(a7)
q.k(0,u)
a7=r.x
u=new U.cZ()
p=U.iw()
p.sbU(0,!0)
p.sbN(6.283185307179586)
p.sbP(0)
p.sa_(0,0)
p.sbO(100)
p.sM(0)
p.sbA(0.2)
u.b=p
p.gm().k(0,u.gax())
u.c=null
u.d=!1
u.e=2.5
u.r=4
u.x=u.y=!1
u.z=0
u.Q=null
u.ch=0
u.cy=u.cx=null
n=new X.a4(!0,!1,!1)
m=u.c
u.c=n
p=new D.u(a5,m,n)
p.b=!0
u.K(p)
u.aJ(a7)
q.k(0,u)
a7=r.x
u=new U.d0()
u.c=0.01
u.e=u.d=0
n=new X.a4(!1,!1,!1)
u.b=n
p=new D.u(a5,a4,n)
p.b=!0
u.K(p)
u.aJ(a7)
q.k(0,u)
l=V.ag(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
a7=new U.ca()
a7.a=l
q.k(0,a7)
k=X.je(q)
j=new O.cv()
a7=O.iv(V.an)
j.e=a7
a7.aC(j.gdS(),j.gdU())
a7=new O.af(j,"emission")
a7.c=new A.R(!1,!1,!1)
a7.f=new V.Q(0,0,0)
j.f=a7
a7=new O.af(j,"ambient")
a7.c=new A.R(!1,!1,!1)
a7.f=new V.Q(0,0,0)
j.r=a7
a7=new O.af(j,"diffuse")
a7.c=new A.R(!1,!1,!1)
a7.f=new V.Q(0,0,0)
j.x=a7
a7=new O.af(j,"invDiffuse")
a7.c=new A.R(!1,!1,!1)
a7.f=new V.Q(0,0,0)
j.y=a7
a7=new O.f4(j,"specular")
a7.c=new A.R(!1,!1,!1)
a7.f=new V.Q(0,0,0)
a7.ch=100
j.z=a7
a7=new O.f0(j,"bump")
a7.c=new A.R(!1,!1,!1)
j.Q=a7
j.ch=null
a7=new O.af(j,"reflect")
a7.c=new A.R(!1,!1,!1)
a7.f=new V.Q(0,0,0)
j.cx=a7
a7=new O.f3(j,"refract")
a7.c=new A.R(!1,!1,!1)
a7.f=new V.Q(0,0,0)
a7.ch=1
j.cy=a7
a7=new O.f_(j,"alpha")
a7.c=new A.R(!1,!1,!1)
a7.f=1
j.db=a7
a7=new D.cp()
a7.aT(D.Y)
a7.e=H.c([],[D.eo])
a7.f=H.c([],[D.fu])
a7.r=H.c([],[D.fR])
a7.y=a7.x=null
a7.bW(a7.gdQ(),a7.gep(),a7.geu())
j.dx=a7
u=new O.f2()
u.b=new V.ak(0,0,0,0)
u.c=1
u.d=10
u.e=!1
j.dy=u
u=a7.x
a7=u==null?a7.x=D.x():u
a7.k(0,j.geK())
a7=j.dx
u=a7.y
a7=u==null?a7.y=D.x():u
a7.k(0,j.gau())
j.fr=null
a7=j.r
a7.saL(0,new V.Q(0.3,0.3,0.3))
a7=j.x
a7.saL(0,new V.Q(0.8,0.8,0.8))
a7=j.x
u=r.f.fn("../resources/Test.png")
p=a7.c
if(!p.b)a7.co(new A.R(p.a,!0,!1))
p=a7.d
if(p!==u){if(p!=null)p.gm().N(0,a7.gau())
m=a7.d
a7.d=u
u.gm().k(0,a7.gau())
u=new D.u(a7.b+".texture2D",m,a7.d)
u.b=!0
a7.a.O(u)}i=X.iz(a4)
if(i.b){i.b=!1
a7=new D.u("clearColor",!0,!1)
a7.b=!0
i.ae(a7)}h=E.j7()
g=F.iF()
F.bZ(g,a4,a4,1,1,1,0,0,1)
F.bZ(g,a4,a4,1,1,0,1,0,3)
F.bZ(g,a4,a4,1,1,0,0,1,2)
F.bZ(g,a4,a4,1,1,-1,0,0,0)
F.bZ(g,a4,a4,1,1,0,-1,0,0)
F.bZ(g,a4,a4,1,1,0,0,-1,3)
g.al()
h.sb9(0,g)
f=new M.cg()
f.a=!0
a7=O.iv(E.al)
f.e=a7
a7.aC(f.gdY(),f.ge_())
f.y=f.x=f.r=f.f=null
e=X.iz(a4)
f.saK(a4)
f.saP(0,e)
f.saQ(a4)
f.e.k(0,h)
f.saQ(j)
f.saP(0,i)
f.saK(k)
a7=r.f
u=a7.a
d=u.createTexture()
u.bindTexture(a6,d)
u.texParameteri(a6,10242,10497)
u.texParameteri(a6,10243,10497)
u.texParameteri(a6,10241,9729)
u.texParameteri(a6,10240,9729)
u.bindTexture(a6,a4)
c=new T.h4()
c.a=0
c.b=d
c.c=!1
c.d=0
a7.aw(c,d,"../resources/maskonaive/posx.jpg",34069,!1,!1)
a7.aw(c,d,"../resources/maskonaive/negx.jpg",34070,!1,!1)
a7.aw(c,d,"../resources/maskonaive/posy.jpg",34071,!1,!1)
a7.aw(c,d,"../resources/maskonaive/negy.jpg",34072,!1,!1)
a7.aw(c,d,"../resources/maskonaive/posz.jpg",34073,!1,!1)
a7.aw(c,d,"../resources/maskonaive/negz.jpg",34074,!1,!1)
b=new M.cb()
b.a=!0
a7=E.j7()
g=F.iF()
u=g.a
p=new V.z(-1,-1,1)
p=p.t(0,Math.sqrt(p.w(p)))
a=u.aY(new V.ar(1,2,4,6),V.ee(255,0,0),new V.T(-1,-1,0),new V.S(0,1),p,a4)
p=g.a
u=new V.z(1,-1,1)
u=u.t(0,Math.sqrt(u.w(u)))
a0=p.aY(new V.ar(0,3,4,6),V.ee(0,0,255),new V.T(1,-1,0),new V.S(1,1),u,a4)
u=g.a
p=new V.z(1,1,1)
p=p.t(0,Math.sqrt(p.w(p)))
a1=u.aY(new V.ar(0,2,5,6),V.ee(0,128,0),new V.T(1,1,0),new V.S(1,0),p,a4)
p=g.a
u=V.aq()
o=new V.z(-1,1,1)
o=o.t(0,Math.sqrt(o.w(o)))
a2=p.aY(new V.ar(0,2,4,7),V.ee(255,255,0),new V.T(-1,1,0),u,o,a4)
g.d.f_(H.c([a,a0,a1,a2],[F.bg]))
g.al()
a7.sb9(0,g)
b.e=a7
b.saK(a4)
b.saP(0,a4)
b.saQ(a4)
a7=new O.cH()
a7.b=1.0471975511965976
a7.d=new V.Q(1,1,1)
m=a7.c
a7.c=c
c.gm().k(0,a7.gau())
u=new D.u("boxTexture",m,a7.c)
u.b=!0
a7.O(u)
b.saQ(a7)
b.saP(0,i)
b.saK(k)
a7=M.a9
u=H.c([b,f],[a7])
p=new M.c9()
p.aT(a7)
p.e=!0
p.f=!1
p.r=null
p.aC(p.gew(),p.gey())
p.bu(0,u)
a7=r.d
if(a7!==p){if(a7!=null)a7.gm().N(0,r.gc3())
r.d=p
p.gm().k(0,r.gc3())
r.c4()}V.lO(r)}},A={
kr:function(a,b){var u=a.am,t=new A.eZ(b,u)
t.c1(b,u)
t.di(a,b)
return t},
ks:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gad(a0)+a1.gad(a1)+a2.gad(a2)+a3.gad(a3)+a4.gad(a4)+a5.gad(a5)+a6.gad(a6)+a7.gad(a7)+a8.gad(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.m)(a9),++t)f+="_"+H.e(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.m)(b0),++t)f+="_"+H.e(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.m)(b1),++t)f+="_"+H.e(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.ab()
if(l){u=$.az()
g=new Z.au(g.a|u.a)}if(k){u=$.ay()
g=new Z.au(g.a|u.a)}if(j){u=$.aA()
g=new Z.au(g.a|u.a)}if(i){u=$.ax()
g=new Z.au(g.a|u.a)}return new A.f1(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,m,p,r,h,!0,!1,!1,o,r,n,l,k,j,!1,i,a,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
i7:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
i8:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.i7(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.io(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
l1:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.i7(b,t,"emission")
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
kZ:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.i8(b,t,"ambient")
b.a+="\n"},
l_:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.i8(b,t,"diffuse")
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
l2:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.i8(b,t,"invDiffuse")
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
l8:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.i8(b,t,"specular")
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
l4:function(a,b){var u,t,s
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
l6:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.i7(b,t,"reflect")
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
l7:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.i7(b,t,"refract")
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
l0:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.io(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ah()
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
r=[P.r]
o=H.c([],r)
n=a.b
if(n.a||n.b||!1)o.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
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
c.a+="      highLight = intensity*("+C.a.q(m," + ")+");\n"}else c.a+="   highLight = "+C.a.q(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.a.q(o," + ")+");\n"
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
l5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.io(t)
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
if(typeof u!=="number")return u.ah()
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
c.a=r+"\n"}r=[P.r]
l=H.c([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.q(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.c([],r)
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
k=H.c([],r)
r=a.c
if(r.a||r.b||!1)k.push("diffuse(norm, normDir)")
r=a.d
if(r.a||r.b||!1)k.push("invDiffuse(norm, normDir)")
r=a.e
if(r.a||r.b||!1)k.push("specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.q(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.q(l," + ")+");\n"
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
l9:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.io(t)
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
if(typeof u!=="number")return u.ah()
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
c.a=u+"\n"}u=[P.r]
j=H.c([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.q(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.c([],u)
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
i=H.c([],u)
u=a.c
if(u.a||u.b||!1)i.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)i.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)i.push("specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.q(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.q(j," + ")+");\n"
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
l3:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.r])
u=a.b
if(u.a||u.b||!1)t.push("ambientColor")
u=a.c
if(u.a||u.b||!1)t.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)t.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.a.q(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
la:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.aR("")
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
A.l1(a,j)
A.kZ(a,j)
A.l_(a,j)
A.l2(a,j)
A.l8(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.l6(a,j)
A.l7(a,j)}A.l4(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.l0(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.l5(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.l9(a,q[o],j)
A.l3(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.c([],[P.r])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.aE(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.aE(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.aE(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)n.push("emissionColor()")
u=a.r
if(u.a||u.b||!1)n.push("reflect(refl)")
u=a.x
if(u.a||u.b||!1)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.q(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
lb:function(a,b){var u,t,s
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
ld:function(a,b){var u
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
lc:function(a,b){var u
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
lf:function(a,b){var u,t
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
lg:function(a,b){var u,t
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
le:function(a,b){var u
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
lh:function(a,b){var u
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
io:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.c.aE(a,1)},
iI:function(a,b,c,d,e){var u=new A.hh(a,c,e)
u.f=d
P.kq(d,0,P.v)
return u},
c5:function c5(a,b,c){this.a=a
this.b=b
this.c=c},
e4:function e4(a){this.a=a},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
eZ:function eZ(a,b){var _=this
_.fW=_.cJ=_.cI=_.cH=_.am=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.h3=_.h2=_.h1=_.bG=_.bF=_.bE=_.bD=_.bC=_.bB=_.h0=_.cV=_.cU=_.h_=_.cT=_.cS=_.cR=_.fZ=_.cQ=_.cP=_.cO=_.fY=_.cN=_.cM=_.fX=_.cL=_.cK=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cd:function cd(a,b){this.a=a
this.b=b},
cD:function cD(a,b){this.a=a
this.b=b},
cJ:function cJ(a,b){this.a=a
this.b=b},
f1:function f1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.am=b3
_.cH=b4},
bL:function bL(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bN:function bN(a,b,c,d,e,f,g,h,i,j){var _=this
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
bO:function bO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cG:function cG(){},
fO:function fO(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cV:function cV(){},
hm:function hm(a){this.a=a},
cW:function cW(a,b,c){this.a=a
this.c=b
this.d=c},
hj:function hj(a,b,c){this.a=a
this.c=b
this.d=c},
hk:function hk(a,b,c){this.a=a
this.c=b
this.d=c},
hl:function hl(a,b,c){this.a=a
this.c=b
this.d=c},
hh:function hh(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
K:function K(a,b,c){this.a=a
this.c=b
this.d=c},
hi:function hi(a,b,c){this.a=a
this.c=b
this.d=c},
B:function B(a,b,c){this.a=a
this.c=b
this.d=c},
bK:function bK(a,b,c){this.a=a
this.c=b
this.d=c},
hn:function hn(a,b,c){this.a=a
this.c=b
this.d=c},
bM:function bM(a,b,c){this.a=a
this.c=b
this.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
O:function O(a,b,c){this.a=a
this.c=b
this.d=c},
aV:function aV(a,b,c){this.a=a
this.c=b
this.d=c}},F={
i6:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
bZ:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.z(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.z(u+a3,t+a1,s+a2)
q=new V.z(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.z(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.i6(i)
l=F.i6(j.b)
k=F.lQ(d,a0,new F.i5(j,F.i6(j.c),F.i6(j.d),l,m,c),b)
if(k!=null)a.fo(k)},
lQ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.iF()
t=H.c([],[F.bg])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.hv(g,g,new V.ak(p,0,0,1),g,g,new V.S(r,1),g,g,0)
q.k(0,o)
c.$3(o,r,0)
t.push(o.bz(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.hv(g,g,new V.ak(j,i,h,1),g,g,new V.S(r,m),g,g,0)
k.k(0,o)
c.$3(o,r,n)
t.push(o.bz(d))}}u.d.f0(a+1,b+1,t)
return u},
bv:function(a,b,c){var u=new F.aD(),t=a.a
if(t==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.o("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.W()
return u},
km:function(a,b){var u=new F.bA(),t=a.a
if(t==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.o("May not create a line with vertices attached to different shapes."))
u.a=a
a.c.b.push(u)
u.b=b
b.c.c.push(u)
u.a.a.c.b.push(u)
u.a.a.W()
return u},
iF:function(){var u=new F.fH(),t=new F.hw(u)
t.b=!1
t.c=H.c([],[F.bg])
u.a=t
t=new F.fK(u)
t.b=H.c([],[F.bG])
u.b=t
t=new F.fJ(u)
t.b=H.c([],[F.bA])
u.c=t
t=new F.fI(u)
t.b=H.c([],[F.aD])
u.d=t
u.e=null
return u},
hv:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bg(),r=new F.hB()
r.b=H.c([],[F.bG])
s.b=r
r=new F.hA()
u=[F.bA]
r.b=H.c([],u)
r.c=H.c([],u)
s.c=r
r=new F.hx()
u=[F.aD]
r.b=H.c([],u)
r.c=H.c([],u)
r.d=H.c([],u)
s.d=r
h=$.k_()
s.e=0
r=$.ab()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.az().a)!==0?e:t
s.x=(u&$.ay().a)!==0?b:t
s.y=(u&$.aA().a)!==0?f:t
s.z=(u&$.b_().a)!==0?g:t
s.Q=(u&$.k0().a)!==0?c:t
s.ch=(u&$.bm().a)!==0?i:0
s.cx=(u&$.ax().a)!==0?a:t
return s},
i5:function i5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aD:function aD(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bA:function bA(){this.b=this.a=null},
bG:function bG(){this.a=null},
fH:function fH(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fI:function fI(a){this.a=a
this.b=null},
fJ:function fJ(a){this.a=a
this.b=null},
fK:function fK(a){this.a=a
this.b=null},
bg:function bg(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hD:function hD(a){this.a=a},
hC:function hC(a){this.a=a},
hw:function hw(a){this.a=a
this.c=this.b=null},
hx:function hx(){this.d=this.c=this.b=null},
hy:function hy(a,b){this.a=a
this.b=b},
hz:function hz(a,b){this.a=a
this.b=b},
hA:function hA(){this.c=this.b=null},
hB:function hB(){this.b=null}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.iD.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gE:function(a){return H.bI(a)},
h:function(a){return"Instance of '"+H.e(H.bJ(a))+"'"}}
J.eL.prototype={
h:function(a){return String(a)},
gE:function(a){return a?519018:218159},
$iaZ:1}
J.cm.prototype={
p:function(a,b){return null==b},
h:function(a){return"null"},
gE:function(a){return 0}}
J.cn.prototype={
gE:function(a){return 0},
h:function(a){return String(a)}}
J.fs.prototype={}
J.bP.prototype={}
J.aK.prototype={
h:function(a){var u=a[$.jP()]
if(u==null)return this.dg(a)
return"JavaScript function for "+H.e(J.a1(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aJ.prototype={
N:function(a,b){var u
if(!!a.fixed$length)H.p(P.a0("remove"))
for(u=0;u<a.length;++u)if(J.I(a[u],b)){a.splice(u,1)
return!0}return!1},
bu:function(a,b){var u,t
if(!!a.fixed$length)H.p(P.a0("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.m)(b),++t)a.push(b[t])},
H:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.f(P.bt(a))}},
q:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
fl:function(a){return this.q(a,"")},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
dd:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.a8(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.a8(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.ie(a,0)])
return H.c(a.slice(b,c),[H.ie(a,0)])},
gbK:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.kj())},
ba:function(a,b){if(!!a.immutable$list)H.p(P.a0("sort"))
H.cI(a,0,a.length-1,b)},
ab:function(a,b){var u
for(u=0;u<a.length;++u)if(J.I(a[u],b))return!0
return!1},
h:function(a){return P.iA(a,"[","]")},
gP:function(a){return new J.U(a,a.length)},
gE:function(a){return H.bI(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.p(P.a0("set length"))
if(b<0)throw H.f(P.a8(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.f(H.bk(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.p(P.a0("indexed set"))
if(b>=a.length||b<0)throw H.f(H.bk(a,b))
a[b]=c},
$ii:1}
J.iC.prototype={}
J.U.prototype={
gG:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.m(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bz.prototype={
f7:function(a,b){var u
if(typeof b!=="number")throw H.f(H.av(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb1(b)
if(this.gb1(a)===u)return 0
if(this.gb1(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb1:function(a){return a===0?1/a<0:a<0},
fO:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.a0(""+a+".toInt()"))},
bH:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.a0(""+a+".floor()"))},
ac:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.a0(""+a+".round()"))},
d5:function(a,b){var u
if(b>20)throw H.f(P.a8(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb1(a))return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gE:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
n:function(a,b){if(typeof b!=="number")throw H.f(H.av(b))
return a*b},
d7:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dh:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cp(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.cp(a,b)},
cp:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.a0("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aW:function(a,b){var u
if(a>0)u=this.eR(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
eR:function(a,b){return b>31?0:a>>>b},
$iG:1,
$ia7:1}
J.cl.prototype={$iv:1}
J.ck.prototype={}
J.b6.prototype={
by:function(a,b){if(b<0)throw H.f(H.bk(a,b))
if(b>=a.length)H.p(H.bk(a,b))
return a.charCodeAt(b)},
aU:function(a,b){if(b>=a.length)throw H.f(H.bk(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.f(P.iY(b,null,null))
return a+b},
bY:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.fx(b,null))
if(b>c)throw H.f(P.fx(b,null))
if(c>a.length)throw H.f(P.fx(c,null))
return a.substring(b,c)},
aE:function(a,b){return this.bY(a,b,null)},
n:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.z)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a6:function(a,b){var u=b-a.length
if(u<=0)return a
return this.n(" ",u)+a},
f8:function(a,b,c){if(c>a.length)throw H.f(P.a8(c,0,a.length,null,null))
return H.jK(a,b,c)},
h:function(a){return a},
gE:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
$ir:1}
H.J.prototype={
gj:function(a){return this.a.length},
i:function(a,b){return C.c.by(this.a,b)},
$an:function(){return[P.v]},
$ai:function(){return[P.v]}}
H.eu.prototype={}
H.cr.prototype={
gG:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.ic(s),q=r.gj(s)
if(t.b!==q)throw H.f(P.bt(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.C(s,u);++t.c
return!0}}
H.eX.prototype={
gP:function(a){return new H.eY(J.bn(this.a),this.b)},
gj:function(a){return J.bo(this.a)},
C:function(a,b){return this.b.$1(J.iX(this.a,b))},
$ai:function(a,b){return[b]}}
H.eY.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.a=u.c.$1(t.gG(t))
return!0}u.a=null
return!1},
gG:function(a){return this.a}}
H.hF.prototype={
gP:function(a){return new H.hG(J.bn(this.a),this.b)}}
H.hG.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(t.$1(u.gG(u)))return!0
return!1},
gG:function(a){var u=this.a
return u.gG(u)}}
H.ch.prototype={}
H.hq.prototype={}
H.cX.prototype={}
H.hf.prototype={
a5:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fo.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.eN.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.hp.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ip.prototype={
$1:function(a){if(!!J.P(a).$ib4)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.dC.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bs.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
gfS:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.h_.prototype={}
H.fU.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.dY(u)+"'"}}
H.bp.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bp))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gE:function(a){var u,t=this.c
if(t==null)u=H.bI(this.a)
else u=typeof t!=="object"?J.b0(t):H.bI(t)
return(u^H.bI(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.bJ(u))+"'")}}
H.eb.prototype={
h:function(a){return this.a}}
H.fE.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.H.prototype={
gj:function(a){return this.a},
gap:function(a){return new H.cq(this,[H.ie(this,0)])},
cB:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cb(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cb(t,b)}else return s.fj(b)},
fj:function(a){var u=this.d
if(u==null)return!1
return this.bI(this.bg(u,J.b0(a)&0x3ffffff),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aV(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aV(r,b)
s=t==null?null:t.b
return s}else return q.fk(b)},
fk:function(a){var u,t,s=this.d
if(s==null)return
u=this.bg(s,J.b0(a)&0x3ffffff)
t=this.bI(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.c7(u==null?o.b=o.bp():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.c7(t==null?o.c=o.bp():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bp()
r=J.b0(b)&0x3ffffff
q=o.bg(s,r)
if(q==null)o.bs(s,r,[o.bq(b,c)])
else{p=o.bI(q,b)
if(p>=0)q[p].b=c
else q.push(o.bq(b,c))}}},
H:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.f(P.bt(u))
t=t.c}},
c7:function(a,b,c){var u=this.aV(a,b)
if(u==null)this.bs(a,b,this.bq(b,c))
else u.b=c},
bq:function(a,b){var u=this,t=new H.eQ(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
bI:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.I(a[t].a,b))return t
return-1},
h:function(a){return P.jb(this)},
aV:function(a,b){return a[b]},
bg:function(a,b){return a[b]},
bs:function(a,b,c){a[b]=c},
dE:function(a,b){delete a[b]},
cb:function(a,b){return this.aV(a,b)!=null},
bp:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bs(t,u,t)
this.dE(t,u)
return t}}
H.eQ.prototype={}
H.cq.prototype={
gj:function(a){return this.a.a},
gP:function(a){var u=this.a,t=new H.eR(u,u.r)
t.c=u.e
return t}}
H.eR.prototype={
gG:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bt(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.ig.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.ih.prototype={
$2:function(a,b){return this.a(a,b)}}
H.ii.prototype={
$1:function(a){return this.a(a)}}
H.eM.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bF.prototype={}
H.cx.prototype={
gj:function(a){return a.length},
$it:1,
$at:function(){}}
H.bE.prototype={
i:function(a,b){H.aX(b,a,a.length)
return a[b]},
$an:function(){return[P.G]},
$ii:1,
$ai:function(){return[P.G]}}
H.cy.prototype={
$an:function(){return[P.v]},
$ii:1,
$ai:function(){return[P.v]}}
H.fi.prototype={
i:function(a,b){H.aX(b,a,a.length)
return a[b]}}
H.fj.prototype={
i:function(a,b){H.aX(b,a,a.length)
return a[b]}}
H.fk.prototype={
i:function(a,b){H.aX(b,a,a.length)
return a[b]}}
H.fl.prototype={
i:function(a,b){H.aX(b,a,a.length)
return a[b]}}
H.fm.prototype={
i:function(a,b){H.aX(b,a,a.length)
return a[b]}}
H.cz.prototype={
gj:function(a){return a.length},
i:function(a,b){H.aX(b,a,a.length)
return a[b]}}
H.fn.prototype={
gj:function(a){return a.length},
i:function(a,b){H.aX(b,a,a.length)
return a[b]}}
H.bR.prototype={}
H.bS.prototype={}
H.bT.prototype={}
H.bU.prototype={}
P.hI.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.hH.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.hJ.prototype={
$0:function(){this.a.$0()}}
P.hK.prototype={
$0:function(){this.a.$0()}}
P.dI.prototype={
dm:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bj(new P.i2(this,b),0),a)
else throw H.f(P.a0("`setTimeout()` not found."))},
dn:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bj(new P.i1(this,a,Date.now(),b),0),a)
else throw H.f(P.a0("Periodic timer."))},
$icQ:1}
P.i2.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.i1.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.dh(u,q)}s.c=r
t.d.$1(s)}}
P.d4.prototype={}
P.cM.prototype={}
P.fX.prototype={}
P.cQ.prototype={}
P.i4.prototype={}
P.i9.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cB():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.h(0)
throw u}}
P.hW.prototype={
fK:function(a){var u,t,s,r=null
try{if(C.e===$.aa){a.$0()
return}P.lj(r,r,this,a)}catch(s){u=H.dZ(s)
t=H.iQ(s)
P.jz(r,r,this,u,t)}},
fL:function(a,b){var u,t,s,r=null
try{if(C.e===$.aa){a.$1(b)
return}P.lk(r,r,this,a,b)}catch(s){u=H.dZ(s)
t=H.iQ(s)
P.jz(r,r,this,u,t)}},
fM:function(a,b){return this.fL(a,b,null)},
f5:function(a){return new P.hX(this,a)},
cu:function(a,b){return new P.hY(this,a,b)}}
P.hX.prototype={
$0:function(){return this.a.fK(this.b)}}
P.hY.prototype={
$1:function(a){return this.a.fM(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.hT.prototype={
gP:function(a){var u=new P.dj(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
k:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.c8(u==null?s.b=P.iK():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.c8(t==null?s.c=P.iK():t,b)}else return s.ds(0,b)},
ds:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.iK()
u=s.c9(b)
t=r[u]
if(t==null)r[u]=[s.bc(b)]
else{if(s.ce(t,b)>=0)return!1
t.push(s.bc(b))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.eH(this.c,b)
else return this.eG(0,b)},
eG:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dH(r,b)
t=s.ce(u,b)
if(t<0)return!1
s.cq(u.splice(t,1)[0])
return!0},
c8:function(a,b){if(a[b]!=null)return!1
a[b]=this.bc(b)
return!0},
eH:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cq(u)
delete a[b]
return!0},
cf:function(){this.r=1073741823&this.r+1},
bc:function(a){var u,t=this,s=new P.hU(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cf()
return s},
cq:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cf()},
c9:function(a){return J.b0(a)&1073741823},
dH:function(a,b){return a[this.c9(b)]},
ce:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.I(a[t].a,b))return t
return-1}}
P.hU.prototype={}
P.dj.prototype={
gG:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bt(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.eS.prototype={$ii:1}
P.n.prototype={
gP:function(a){return new H.cr(a,this.gj(a))},
C:function(a,b){return this.i(a,b)},
fQ:function(a,b){var u,t,s=this,r=H.c([],[H.lC(s,a,"n",0)])
C.a.sj(r,s.gj(a))
for(u=0;u<s.gj(a);++u){t=s.i(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t}return r},
fP:function(a){return this.fQ(a,!0)},
h:function(a){return P.iA(a,"[","]")}}
P.eV.prototype={}
P.eW.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:8}
P.am.prototype={
H:function(a,b){var u,t
for(u=J.bn(this.gap(a));u.u();){t=u.gG(u)
b.$2(t,this.i(a,t))}},
gj:function(a){return J.bo(this.gap(a))},
h:function(a){return P.jb(a)}}
P.hZ.prototype={
h:function(a){return P.iA(this,"{","}")},
C:function(a,b){var u,t,s
P.jj(b,"index")
for(u=P.kS(this,this.r),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.f(P.E(b,this,"index",null,t))},
$ii:1}
P.dk.prototype={}
P.ed.prototype={}
P.eh.prototype={}
P.ev.prototype={}
P.ht.prototype={}
P.hu.prototype={
f9:function(a){var u,t,s=P.jk(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.i3(u)
if(t.dG(a,0,s)!==s)t.cr(C.c.by(a,s-1),0)
return new Uint8Array(u.subarray(0,H.kW(0,t.b,u.length)))}}
P.i3.prototype={
cr:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
dG:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.c.by(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.c.aU(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cr(r,C.c.aU(a,p)))s=p}else if(r<=2047){q=n.b
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
P.aZ.prototype={}
P.a3.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.a3&&this.a===b.a&&!0},
gE:function(a){var u=this.a
return(u^C.d.aW(u,30))&1073741823},
h:function(a){var u=this,t=P.ke(H.kB(u)),s=P.cc(H.kz(u)),r=P.cc(H.kv(u)),q=P.cc(H.kw(u)),p=P.cc(H.ky(u)),o=P.cc(H.kA(u)),n=P.kf(H.kx(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.G.prototype={}
P.aC.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aC&&this.a===b.a},
gE:function(a){return C.d.gE(this.a)},
h:function(a){var u,t,s,r=new P.et(),q=this.a
if(q<0)return"-"+new P.aC(0-q).h(0)
u=r.$1(C.d.Z(q,6e7)%60)
t=r.$1(C.d.Z(q,1e6)%60)
s=new P.es().$1(q%1e6)
return""+C.d.Z(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.es.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.et.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.b4.prototype={}
P.cB.prototype={
h:function(a){return"Throw of null."}}
P.ac.prototype={
gbe:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbd:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbe()+o+u
if(!q.a)return t
s=q.gbd()
r=P.iy(q.b)
return t+s+": "+r}}
P.bd.prototype={
gbe:function(){return"RangeError"},
gbd:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.eJ.prototype={
gbe:function(){return"RangeError"},
gbd:function(){var u,t=this.b
if(typeof t!=="number")return t.a3()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gj:function(a){return this.f}}
P.hr.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.ho.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.fT.prototype={
h:function(a){return"Bad state: "+this.a}}
P.eg.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.iy(u)+"."}}
P.fr.prototype={
h:function(a){return"Out of Memory"},
$ib4:1}
P.cK.prototype={
h:function(a){return"Stack Overflow"},
$ib4:1}
P.em.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dc.prototype={
h:function(a){return"Exception: "+this.a}}
P.eF.prototype={
h:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.c.bY(s,0,75)+"...":s
return t+"\n"+r}}
P.v.prototype={}
P.i.prototype={
gj:function(a){var u,t=this.gP(this)
for(u=0;t.u();)++u
return u},
C:function(a,b){var u,t,s
P.jj(b,"index")
for(u=this.gP(this),t=0;u.u();){s=u.gG(u)
if(b===t)return s;++t}throw H.f(P.E(b,this,"index",null,t))},
h:function(a){return P.ki(this,"(",")")}}
P.eK.prototype={}
P.b9.prototype={$ii:1}
P.ct.prototype={}
P.aM.prototype={
gE:function(a){return P.W.prototype.gE.call(this,this)},
h:function(a){return"null"}}
P.a7.prototype={}
P.W.prototype={constructor:P.W,$iW:1,
p:function(a,b){return this===b},
gE:function(a){return H.bI(this)},
h:function(a){return"Instance of '"+H.e(H.bJ(this))+"'"},
toString:function(){return this.h(this)}}
P.r.prototype={}
P.aR.prototype={
gj:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.k.prototype={}
W.e0.prototype={
gj:function(a){return a.length}}
W.e2.prototype={
h:function(a){return String(a)}}
W.e3.prototype={
h:function(a){return String(a)}}
W.c6.prototype={}
W.b2.prototype={
bV:function(a,b,c){if(c!=null)return a.getContext(b,P.lt(c))
return a.getContext(b)},
d6:function(a,b){return this.bV(a,b,null)},
$ib2:1}
W.aB.prototype={
gj:function(a){return a.length}}
W.ei.prototype={
gj:function(a){return a.length}}
W.C.prototype={$iC:1}
W.b3.prototype={
dw:function(a,b){var u=$.jO(),t=u[b]
if(typeof t==="string")return t
t=this.eS(a,b)
u[b]=t
return t},
eS:function(a,b){var u
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
u=P.kg()+b
if(u in a)return u
return b},
eM:function(a,b,c,d){a.setProperty(b,c,d)},
gj:function(a){return a.length}}
W.ej.prototype={}
W.a2.prototype={}
W.ae.prototype={}
W.ek.prototype={
gj:function(a){return a.length}}
W.el.prototype={
gj:function(a){return a.length}}
W.en.prototype={
gj:function(a){return a.length}}
W.ep.prototype={
h:function(a){return String(a)}}
W.ce.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[[P.a5,P.a7]]},
$an:function(){return[[P.a5,P.a7]]},
$ii:1,
$ai:function(){return[[P.a5,P.a7]]}}
W.cf.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gas(a))+" x "+H.e(this.gao(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.P(b)
if(!u.$ia5)return!1
return a.left===u.gb2(b)&&a.top===u.gb7(b)&&this.gas(a)===u.gas(b)&&this.gao(a)===u.gao(b)},
gE:function(a){return W.jx(C.b.gE(a.left),C.b.gE(a.top),C.b.gE(this.gas(a)),C.b.gE(this.gao(a)))},
gcv:function(a){return a.bottom},
gao:function(a){return a.height},
gb2:function(a){return a.left},
gb6:function(a){return a.right},
gb7:function(a){return a.top},
gas:function(a){return a.width},
$ia5:1,
$aa5:function(){return[P.a7]}}
W.eq.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[P.r]},
$an:function(){return[P.r]},
$ii:1,
$ai:function(){return[P.r]}}
W.er.prototype={
gj:function(a){return a.length}}
W.hM.prototype={
gj:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
k:function(a,b){this.a.appendChild(b)
return b},
gP:function(a){var u=this.fP(this)
return new J.U(u,u.length)},
$an:function(){return[W.V]},
$ai:function(){return[W.V]}}
W.V.prototype={
gcz:function(a){return new W.hM(a,a.children)},
gcA:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a3()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a3()
if(r<0)r=-r*0
return new P.a5(u,t,s,r,[P.a7])},
h:function(a){return a.localName},
$iV:1}
W.h.prototype={$ih:1}
W.d.prototype={
eZ:function(a,b,c,d){if(c!=null)this.dt(a,b,c,!1)},
dt:function(a,b,c,d){return a.addEventListener(b,H.bj(c,1),!1)}}
W.aE.prototype={$iaE:1}
W.ez.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aE]},
$an:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]}}
W.eA.prototype={
gj:function(a){return a.length}}
W.eE.prototype={
gj:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.eH.prototype={
gj:function(a){return a.length}}
W.bx.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.F]},
$an:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]}}
W.aG.prototype={$iaG:1,
gcC:function(a){return a.data}}
W.by.prototype={$iby:1}
W.b7.prototype={$ib7:1}
W.eT.prototype={
h:function(a){return String(a)}}
W.fb.prototype={
gj:function(a){return a.length}}
W.fc.prototype={
i:function(a,b){return P.aw(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aw(u.value[1]))}},
gap:function(a){var u=H.c([],[P.r])
this.H(a,new W.fd(u))
return u},
gj:function(a){return a.size}}
W.fd.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fe.prototype={
i:function(a,b){return P.aw(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aw(u.value[1]))}},
gap:function(a){var u=H.c([],[P.r])
this.H(a,new W.ff(u))
return u},
gj:function(a){return a.size}}
W.ff.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aL.prototype={$iaL:1}
W.fg.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aL]},
$an:function(){return[W.aL]},
$ii:1,
$ai:function(){return[W.aL]}}
W.ah.prototype={$iah:1}
W.hL.prototype={
gP:function(a){var u=this.a.childNodes
return new W.ci(u,u.length)},
gj:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$an:function(){return[W.F]},
$ai:function(){return[W.F]}}
W.F.prototype={
fI:function(a,b){var u,t
try{u=a.parentNode
J.k3(u,b,a)}catch(t){H.dZ(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.df(a):u},
eI:function(a,b,c){return a.replaceChild(b,c)},
$iF:1}
W.cA.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.F]},
$an:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]}}
W.aN.prototype={$iaN:1,
gj:function(a){return a.length}}
W.ft.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aN]},
$an:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]}}
W.fC.prototype={
i:function(a,b){return P.aw(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aw(u.value[1]))}},
gap:function(a){var u=H.c([],[P.r])
this.H(a,new W.fD(u))
return u},
gj:function(a){return a.size}}
W.fD.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fF.prototype={
gj:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.fP.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aO]},
$an:function(){return[W.aO]},
$ii:1,
$ai:function(){return[W.aO]}}
W.aP.prototype={$iaP:1}
W.fQ.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aP]},
$an:function(){return[W.aP]},
$ii:1,
$ai:function(){return[W.aP]}}
W.aQ.prototype={$iaQ:1,
gj:function(a){return a.length}}
W.fV.prototype={
i:function(a,b){return a.getItem(b)},
H:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gap:function(a){var u=H.c([],[P.r])
this.H(a,new W.fW(u))
return u},
gj:function(a){return a.length}}
W.fW.prototype={
$2:function(a,b){return this.a.push(a)}}
W.as.prototype={$ias:1}
W.aS.prototype={$iaS:1}
W.at.prototype={$iat:1}
W.h0.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.at]},
$an:function(){return[W.at]},
$ii:1,
$ai:function(){return[W.at]}}
W.h1.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aS]},
$an:function(){return[W.aS]},
$ii:1,
$ai:function(){return[W.aS]}}
W.h9.prototype={
gj:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.be.prototype={$ibe:1}
W.hc.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aT]},
$an:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]}}
W.hd.prototype={
gj:function(a){return a.length}}
W.aU.prototype={}
W.hs.prototype={
h:function(a){return String(a)}}
W.hE.prototype={
gj:function(a){return a.length}}
W.aW.prototype={
gfd:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.a0("deltaY is not supported"))},
gfc:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.a0("deltaX is not supported"))},
$iaW:1}
W.bQ.prototype={
eJ:function(a,b){return a.requestAnimationFrame(H.bj(b,1))},
dF:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hN.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.C]},
$an:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]}}
W.d7.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.P(b)
if(!u.$ia5)return!1
return a.left===u.gb2(b)&&a.top===u.gb7(b)&&a.width===u.gas(b)&&a.height===u.gao(b)},
gE:function(a){return W.jx(C.b.gE(a.left),C.b.gE(a.top),C.b.gE(a.width),C.b.gE(a.height))},
gao:function(a){return a.height},
gas:function(a){return a.width}}
W.hQ.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aF]},
$an:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]}}
W.dq.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.F]},
$an:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]}}
W.i_.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aQ]},
$an:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]}}
W.i0.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$it:1,
$at:function(){return[W.as]},
$an:function(){return[W.as]},
$ii:1,
$ai:function(){return[W.as]}}
W.hO.prototype={}
W.hP.prototype={
$1:function(a){return this.a.$1(a)}}
W.D.prototype={
gP:function(a){return new W.ci(a,this.gj(a))}}
W.ci.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.e_(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gG:function(a){return this.d}}
W.d6.prototype={}
W.d8.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.db.prototype={}
W.dd.prototype={}
W.de.prototype={}
W.df.prototype={}
W.dg.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.bV.prototype={}
W.bW.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dD.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.bX.prototype={}
W.bY.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dX.prototype={}
P.dN.prototype={$iaG:1,
gcC:function(a){return this.a}}
P.ia.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.eB.prototype={
gbh:function(){var u=this.b,t=H.jE(u,"n",0)
return new H.eX(new H.hF(u,new P.eC(),[t]),new P.eD(),[t,W.V])},
k:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.bo(this.gbh().a)},
i:function(a,b){var u=this.gbh()
return u.b.$1(J.iX(u.a,b))},
gP:function(a){var u=P.ja(this.gbh(),!1,W.V)
return new J.U(u,u.length)},
$an:function(){return[W.V]},
$ai:function(){return[W.V]}}
P.eC.prototype={
$1:function(a){return!!J.P(a).$iV}}
P.eD.prototype={
$1:function(a){return H.l(a,"$iV")}}
P.hV.prototype={
gb6:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.q(t)
return u+t},
gcv:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.q(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.P(b)
if(!!u.$ia5){t=q.a
if(t==u.gb2(b)){s=q.b
if(s==u.gb7(b)){r=q.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.q(r)
if(t+r===u.gb6(b)){t=q.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.q(t)
u=s+t===u.gcv(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gE:function(a){var u=this,t=u.a,s=J.b0(t),r=u.b,q=J.b0(r),p=u.c
if(typeof t!=="number")return t.B()
if(typeof p!=="number")return H.q(p)
p=C.d.gE(t+p)
t=u.d
if(typeof r!=="number")return r.B()
if(typeof t!=="number")return H.q(t)
t=C.d.gE(r+t)
return P.kR(P.hS(P.hS(P.hS(P.hS(0,s),q),p),t))}}
P.a5.prototype={
gb2:function(a){return this.a},
gb7:function(a){return this.b},
gas:function(a){return this.c},
gao:function(a){return this.d}}
P.b8.prototype={$ib8:1}
P.eP.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.i(a,b)},
$an:function(){return[P.b8]},
$ii:1,
$ai:function(){return[P.b8]}}
P.bb.prototype={$ibb:1}
P.fp.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.i(a,b)},
$an:function(){return[P.bb]},
$ii:1,
$ai:function(){return[P.bb]}}
P.fw.prototype={
gj:function(a){return a.length}}
P.fY.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.i(a,b)},
$an:function(){return[P.r]},
$ii:1,
$ai:function(){return[P.r]}}
P.j.prototype={
gcz:function(a){return new P.eB(a,new W.hL(a))}}
P.bf.prototype={$ibf:1}
P.he.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.i(a,b)},
$an:function(){return[P.bf]},
$ii:1,
$ai:function(){return[P.bf]}}
P.dh.prototype={}
P.di.prototype={}
P.dt.prototype={}
P.du.prototype={}
P.dE.prototype={}
P.dF.prototype={}
P.dL.prototype={}
P.dM.prototype={}
P.e5.prototype={
gj:function(a){return a.length}}
P.e6.prototype={
i:function(a,b){return P.aw(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aw(u.value[1]))}},
gap:function(a){var u=H.c([],[P.r])
this.H(a,new P.e7(u))
return u},
gj:function(a){return a.size}}
P.e7.prototype={
$2:function(a,b){return this.a.push(a)}}
P.e8.prototype={
gj:function(a){return a.length}}
P.b1.prototype={}
P.fq.prototype={
gj:function(a){return a.length}}
P.d5.prototype={}
P.cF.prototype={
d4:function(a,b,c,d,e,f,g){var u,t=J.P(g)
if(!!t.$iaG)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.lu(g))
return}if(!!t.$iby)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.f(P.k7("Incorrect number or type of arguments"))}}
P.fS.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return P.aw(a.item(b))},
C:function(a,b){return this.i(a,b)},
$an:function(){return[[P.ct,,,]]},
$ii:1,
$ai:function(){return[[P.ct,,,]]}}
P.dA.prototype={}
P.dB.prototype={}
T.e1.prototype={
aA:function(a,b){return!0},
h:function(a){return"all"}}
T.cj.prototype={
aA:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)if(u[s].aA(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.cu.prototype={}
T.ap.prototype={
aA:function(a,b){return!this.de(0,b)},
h:function(a){return"!["+this.bZ(0)+"]"}}
T.fG.prototype={
dk:function(a){var u,t
if(a.a.length<=0)throw H.f(P.o("May not create a Set with zero characters."))
u=new H.H([P.v,P.aZ])
for(t=new H.cr(a,a.gj(a));t.u();)u.l(0,t.d,!0)
this.a=u},
aA:function(a,b){return this.a.cB(0,b)},
h:function(a){var u=this.a
return P.iG(new H.cq(u,[H.ie(u,0)]))}}
R.cL.prototype={
q:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.cU(this.a.J(0,b))
r.a=H.c([],[T.cu])
r.c=!1
this.c.push(r)
return r},
fh:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.aA(0,a))return r}return},
h:function(a){return this.b}}
R.cR.prototype={
h:function(a){var u=H.jL(this.b,"\n","\\n"),t=H.jL(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.cS.prototype={
h:function(a){return this.b}}
R.ha.prototype={
J:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.cL(this,b)
u.c=H.c([],[R.cU])
this.a.l(0,b,u)}return u},
aR:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.cS(a)
u=P.r
t.c=new H.H([u,u])
this.b.l(0,a,t)}return t},
fR:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[R.cR]),l=this.c,k=[P.v],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)m.push(t)
return m}r=C.c.aU(a,s)
q=l.fh(r)
if(q==null){if(t==null){j.push(r)
p=P.iG(j)
throw H.f(P.o("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}m.push(t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)j.push(r)
l=q.b
if(l.d!=null){p=P.iG(j)
o=l.d
n=o.c.i(0,p)
t=new R.cR(n==null?o.b:n,p,s)}++s}}}}
R.cU.prototype={
h:function(a){return this.b.b+": "+this.bZ(0)}}
O.aj.prototype={
aT:function(a){this.a=H.c([],[a])
this.c=this.b=null},
bW:function(a,b,c){this.b=b
this.c=a},
aC:function(a,b){return this.bW(a,null,b)},
cj:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
c2:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gP:function(a){var u=this.a
return new J.U(u,u.length)},
C:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
k:function(a,b){var u,t,s=this,r=[H.jE(s,"aj",0)]
if(s.cj(H.c([b],r))){u=s.a
t=u.length
u.push(b)
s.c2(t,H.c([b],r))}},
bu:function(a,b){var u,t
if(this.cj(b)){u=this.a
t=u.length
C.a.bu(u,b)
this.c2(t,b)}},
$ii:1}
O.bC.prototype={
gj:function(a){return this.a.length},
gm:function(){var u=this.b
return u==null?this.b=D.x():u},
at:function(){var u=this.b
if(u!=null)u.A(null)},
gV:function(a){var u=this.a
if(u.length>0)return C.a.gbK(u)
else return V.ba()},
b5:function(a){var u=this.a
if(a==null)u.push(V.ba())
else u.push(a)
this.at()},
aq:function(){var u=this.a
if(u.length>0){u.pop()
this.at()}}}
E.e9.prototype={}
E.al.prototype={
sb9:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().N(0,s.gd0())
u=s.c
if(u!=null)u.gm().k(0,s.gd0())
t=new D.u("shape",r,s.c)
t.b=!0
s.b4(t)}},
a8:function(a,b){var u
for(u=this.y.a,u=new J.U(u,u.length);u.u();)u.d.a8(0,b)},
a1:function(a){var u,t=this,s=a.dx
s.a.push(s.gV(s))
s.at()
a.bS(t.f)
s=a.dy
u=(s&&C.a).gbK(s)
if(u!=null&&t.d!=null)u.d2(a,t)
for(s=t.y.a,s=new J.U(s,s.length);s.u();)s.d.a1(a)
a.bR()
a.dx.aq()},
b4:function(a){var u=this.z
if(u!=null)u.A(a)},
W:function(){return this.b4(null)},
d1:function(a){this.e=null
this.b4(a)},
fv:function(){return this.d1(null)},
d_:function(a){this.b4(a)},
fs:function(){return this.d_(null)},
fq:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcZ(),s=[{func:1,ret:-1,args:[D.M]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bu()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.W()},
fu:function(a,b){var u,t
for(u=b.gP(b),t=this.gcZ();u.u();)u.gG(u).gm().N(0,t)
this.W()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.fy.prototype={
dj:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a3(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bC()
t=[V.an]
u.a=H.c([],t)
u.gm().k(0,new E.fz(s))
s.cy=u
u=new O.bC()
u.a=H.c([],t)
u.gm().k(0,new E.fA(s))
s.db=u
u=new O.bC()
u.a=H.c([],t)
u.gm().k(0,new E.fB(s))
s.dx=u
u=H.c([],[O.cN])
s.dy=u
u.push(null)
s.fr=new H.H([P.r,A.cG])},
gfG:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gV(s)
u=t.db
u=t.z=s.n(0,u.gV(u))
s=u}return s},
bS:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gbK(u):a)},
bR:function(){var u=this.dy
if(u.length>1)u.pop()},
ct:function(a){var u=a.b
if(u.length===0)throw H.f(P.o("May not cache a shader with no name."))
if(this.fr.cB(0,u))throw H.f(P.o('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.l(0,u,a)}}
E.fz.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.fA.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.fB.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.cP.prototype={
c5:function(a){this.d3()},
c4:function(){return this.c5(null)},
gfi:function(){var u,t=this,s=Date.now(),r=C.d.Z(P.j6(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a3(s,!1)
return u/r},
cl:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.n()
if(typeof r!=="number")return H.q(r)
u=C.b.bH(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.n()
t=C.b.bH(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.jp(C.i,s.gfJ())}},
d3:function(){if(!this.cx){this.cx=!0
var u=window
C.r.dF(u)
C.r.eJ(u,W.jA(new E.h8(this),P.a7))}},
fH:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cl()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a3(r,!1)
s.y=P.j6(r-s.r.a).a*0.000001
r=s.cy
C.a.sj(r.a,0)
r.at()
r=s.db
C.a.sj(r.a,0)
r.at()
r=s.dx
C.a.sj(r.a,0)
r.at()
r=s.dy;(r&&C.a).sj(r,0)
s.dy.push(null)
o.a1(p.e)}}catch(q){u=H.dZ(q)
t=H.iQ(q)
P.iU("Error: "+H.e(u))
P.iU("Stack: "+H.e(t))
throw H.f(u)}}}
E.h8.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.fH()}}}
Z.d2.prototype={}
Z.c7.prototype={
U:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.dZ(s)
t=P.o('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.f(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.d3.prototype={}
Z.br.prototype={
an:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
U:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].U(a)},
aS:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a1:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.r],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)p.push(u[s].h(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a1(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.a.q(p,", ")+"\nAttrs:   "+C.a.q(r,", ")}}
Z.b5.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.bJ(this.c))+"'")+"]"}}
Z.au.prototype={
gbX:function(a){var u=this.a,t=(u&$.ab().a)!==0?3:0
if((u&$.az().a)!==0)t+=3
if((u&$.ay().a)!==0)t+=3
if((u&$.aA().a)!==0)t+=2
if((u&$.b_().a)!==0)t+=3
if((u&$.c3().a)!==0)t+=3
if((u&$.c4().a)!==0)t+=4
if((u&$.bm().a)!==0)++t
return(u&$.ax().a)!==0?t+4:t},
f1:function(a){var u,t=$.ab(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.az()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ay()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aA()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b_()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c3()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c4()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ax()
if((s&t.a)!==0)if(u===a)return t
return $.k1()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.au))return!1
return this.a===b.a},
h:function(a){var u=H.c([],[P.r]),t=this.a
if((t&$.ab().a)!==0)u.push("Pos")
if((t&$.az().a)!==0)u.push("Norm")
if((t&$.ay().a)!==0)u.push("Binm")
if((t&$.aA().a)!==0)u.push("Txt2D")
if((t&$.b_().a)!==0)u.push("TxtCube")
if((t&$.c3().a)!==0)u.push("Clr3")
if((t&$.c4().a)!==0)u.push("Clr4")
if((t&$.bm().a)!==0)u.push("Weight")
if((t&$.ax().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.q(u,"|")}}
D.ec.prototype={}
D.bu.prototype={
k:function(a,b){var u=this.a;(u==null?this.a=H.c([],[{func:1,ret:-1,args:[D.M]}]):u).push(b)},
N:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.ab(s,b)
if(s===!0){s=t.a
u=(s&&C.a).N(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.ab(s,b)
if(s===!0){s=t.b
u=(s&&C.a).N(s,b)||u}return u},
A:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.M()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.H(P.ja(u,!0,{func:1,ret:-1,args:[D.M]}),new D.ex(q))
u=r.b
if(u!=null){r.b=H.c([],[{func:1,ret:-1,args:[D.M]}])
C.a.H(u,new D.ey(q))}return!0},
cG:function(){return this.A(null)},
ar:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.A(u)}}}}
D.ex.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.ey.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.M.prototype={}
D.aH.prototype={}
D.aI.prototype={}
D.u.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.c8.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.c8))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.co.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.co))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.eO.prototype={
fC:function(a){this.c=a.b
this.d.k(0,a.a)
return!1},
fw:function(a){this.c=a.b
this.d.N(0,a.a)
return!1}}
X.cs.prototype={}
X.eU.prototype={
aH:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.n()
u=b.b
t=q.ch
if(typeof u!=="number")return u.n()
s=new V.S(o.a+n*m,o.b+u*t)
t=q.a.gaz()
r=new X.ao(a,V.aq(),q.x,t,s)
r.b=!0
q.z=new P.a3(p,!1)
q.x=s
return r},
bQ:function(a,b){this.r=a.a
return!1},
aO:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.d8()
if(typeof u!=="number")return u.ah()
this.r=(u&~t)>>>0
return!1},
aN:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.aH(a,b))
return!0},
fD:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaz()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.n()
q=a.b
p=o.cy
if(typeof q!=="number")return q.n()
t=new X.bD(new V.y(s*r,q*p),u,t)
t.b=!0
n.A(t)
return!0},
ee:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cs(c,r.a.gaz(),b)
s.b=!0
t.A(s)
r.y=new P.a3(u,!1)
r.x=V.aq()}}
X.a4.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.a4))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.ao.prototype={}
X.fh.prototype={
bf:function(a,b,c){var u=this,t=new P.a3(Date.now(),!1),s=u.a.gaz(),r=new X.ao(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
bQ:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.A(this.bf(a,b,!0))
return!0},
aO:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.d8()
if(typeof t!=="number")return t.ah()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.A(u.bf(a,b,!0))
return!0},
aN:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.bf(a,b,!1))
return!0},
fE:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaz()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.n()
r=a.b
q=p.ch
if(typeof r!=="number")return r.n()
u=new X.bD(new V.y(t*s,r*q),u,b)
u.b=!0
o.A(u)
return!0},
gcF:function(){var u=this.b
return u==null?this.b=D.x():u},
gb8:function(){var u=this.c
return u==null?this.c=D.x():u},
gcY:function(){var u=this.d
return u==null?this.d=D.x():u}}
X.bD.prototype={}
X.fv.prototype={}
X.cT.prototype={}
X.hb.prototype={
aH:function(a,b){var u=this,t=new P.a3(Date.now(),!1),s=a.length>0?a[0]:V.aq(),r=u.a.gaz(),q=new X.cT(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
fB:function(a){var u=this.b
if(u==null)return!1
u.A(this.aH(a,!0))
return!0},
fz:function(a){var u=this.c
if(u==null)return!1
u.A(this.aH(a,!0))
return!0},
fA:function(a){var u=this.d
if(u==null)return!1
u.A(this.aH(a,!1))
return!0}}
X.cY.prototype={
gaz:function(){var u=this.a,t=C.f.gcA(u).c
t.toString
u=C.f.gcA(u).d
u.toString
return V.jl(0,0,t,u)},
cc:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.co(u,new X.a4(t,a.altKey,a.shiftKey))},
ay:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a4(t,a.altKey,a.shiftKey)},
bt:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a4(t,a.altKey,a.shiftKey)},
ak:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.F()
u=t.top
if(typeof r!=="number")return r.F()
return new V.S(s-q,r-u)},
aI:function(a){return new V.y(a.movementX,a.movementY)},
br:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.S])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
q=C.b.ac(r.pageX)
C.b.ac(r.pageY)
p=o.left
C.b.ac(r.pageX)
n.push(new V.S(q-p,C.b.ac(r.pageY)-o.top))}return n},
ai:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.c8(u,new X.a4(t,a.altKey,a.shiftKey))},
bi:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.F()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.F()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
e8:function(a){this.f=!0},
dX:function(a){this.f=!1},
e2:function(a){if(this.f&&this.bi(a))a.preventDefault()},
ec:function(a){var u
if(!this.f)return
u=this.cc(a)
this.b.fC(u)},
ea:function(a){var u
if(!this.f)return
u=this.cc(a)
this.b.fw(u)},
eg:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.ay(a)
if(r.x){u=r.ai(a)
t=r.aI(a)
if(r.d.bQ(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ai(a)
s=r.ak(a)
if(r.c.bQ(u,s))a.preventDefault()},
ek:function(a){var u,t,s,r=this
r.ay(a)
u=r.ai(a)
if(r.x){t=r.aI(a)
if(r.d.aO(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aO(u,s))a.preventDefault()},
e6:function(a){var u,t,s,r=this
if(!r.bi(a)){r.ay(a)
u=r.ai(a)
if(r.x){t=r.aI(a)
if(r.d.aO(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aO(u,s))a.preventDefault()}},
ei:function(a){var u,t,s,r=this
r.ay(a)
u=r.ai(a)
if(r.x){t=r.aI(a)
if(r.d.aN(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aN(u,s))a.preventDefault()},
e4:function(a){var u,t,s,r=this
if(!r.bi(a)){r.ay(a)
u=r.ai(a)
if(r.x){t=r.aI(a)
if(r.d.aN(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aN(u,s))a.preventDefault()}},
em:function(a){var u,t,s=this
s.ay(a)
u=new V.y((a&&C.q).gfc(a),C.q.gfd(a)).t(0,180)
if(s.x){if(s.d.fD(u))a.preventDefault()
return}if(s.r)return
t=s.ak(a)
if(s.c.fE(u,t))a.preventDefault()},
eo:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ai(s.y)
t=s.ak(s.y)
s.d.ee(u,t,r)}},
eF:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bt(a)
u=t.br(a)
if(t.e.fB(u))a.preventDefault()},
eB:function(a){var u
this.bt(a)
u=this.br(a)
if(this.e.fz(u))a.preventDefault()},
eD:function(a){var u
this.bt(a)
u=this.br(a)
if(this.e.fA(u))a.preventDefault()}}
D.eo.prototype={$iY:1}
D.Y.prototype={}
D.cp.prototype={
c6:function(a){var u=this.x
if(u!=null)u.A(a)},
ci:function(a){var u=this.y
if(u!=null)u.A(a)},
ed:function(){return this.ci(null)},
eq:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(s==null||this.dB(s))return!1}return!0},
dR:function(a,b){var u,t,s,r
for(u=b.length,t=this.gcg(),s=0;s<b.length;b.length===u||(0,H.m)(b),++s){r=b[s]
r.gm().k(0,t)}u=new D.aH()
u.b=!0
this.c6(u)},
ev:function(a,b){var u,t,s
for(u=b.gP(b),t=this.gcg();u.u();){s=u.gG(u)
C.a.N(this.e,s)
s.gm().N(0,t)}u=new D.aI()
u.b=!0
this.c6(u)},
dB:function(a){var u=C.a.ab(this.e,a)
return u},
$ai:function(){return[D.Y]},
$aaj:function(){return[D.Y]}}
D.fu.prototype={$iY:1}
D.fR.prototype={$iY:1}
V.Q.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.ak.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ak))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+", "+V.A(u.d,3,0)+"]"}}
V.ew.prototype={}
V.cw.prototype={
a2:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.G])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cw))return!1
u=b.a
t=$.w().a
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
h:function(a){var u,t,s,r,q=this,p=[P.G],o=V.bl(H.c([q.a,q.d,q.r],p),3,0),n=V.bl(H.c([q.b,q.e,q.x],p),3,0),m=V.bl(H.c([q.c,q.f,q.y],p),3,0)
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
V.an.prototype={
a2:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.G])
return t},
bJ:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.w().a)return V.ba()
u=1/b1
t=-n
s=-a0
return V.ag((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
n:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ag(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bT:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.T(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.an))return!1
u=b.a
t=$.w().a
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
h:function(a){return this.I()},
v:function(a){var u,t,s,r,q,p=this,o=[P.G],n=V.bl(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bl(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bl(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bl(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
I:function(){return this.v("")}}
V.S.prototype={
F:function(a,b){return new V.S(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.T.prototype={
F:function(a,b){return new V.T(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.ar.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ar))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+", "+V.A(u.d,3,0)+"]"}}
V.cE.prototype={
ga0:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cE))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+", "+V.A(u.d,3,0)+"]"}}
V.y.prototype={
bL:function(a){return Math.sqrt(this.w(this))},
w:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.q(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.q(t)
return s*r+u*t},
n:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.n()
u=this.b
if(typeof u!=="number")return u.n()
return new V.y(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.w().a){u=$.jt
return u==null?$.jt=new V.y(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.y(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.y))return!1
u=b.a
t=this.a
s=$.w()
s.toString
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.q(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.q(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.z.prototype={
bL:function(a){return Math.sqrt(this.w(this))},
w:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bM:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.z(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aM:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.z(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a){return new V.z(-this.a,-this.b,-this.c)},
t:function(a,b){if(Math.abs(b-0)<$.w().a)return V.d1()
return new V.z(this.a/b,this.b/b,this.c/b)},
cX:function(){var u=$.w().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.z))return!1
u=b.a
t=$.w().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
U.ef.prototype={
bb:function(a){var u=V.lT(a,this.c,this.b)
return u},
gm:function(){var u=this.y
return u==null?this.y=D.x():u},
K:function(a){var u=this.y
if(u!=null)u.A(a)},
sbU:function(a,b){},
sbN:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.w().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bb(u)}s=new D.u("maximumLocation",s,t.b)
s.b=!0
t.K(s)}},
sbP:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.w().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bb(u)}s=new D.u("minimumLocation",s,t.c)
s.b=!0
t.K(s)}},
sa_:function(a,b){var u,t=this
b=t.bb(b)
u=t.d
if(!(Math.abs(u-b)<$.w().a)){t.d=b
u=new D.u("location",u,b)
u.b=!0
t.K(u)}},
sbO:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.w().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.u("maximumVelocity",r,a)
r.b=!0
s.K(r)}},
sM:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.w().a)){u.f=a
t=new D.u("velocity",t,a)
t.b=!0
u.K(t)}},
sbA:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.w().a)){this.x=a
u=new D.u("dampening",u,a)
u.b=!0
this.K(u)}},
a8:function(a,b){var u,t,s,r=this,q=r.f,p=$.w().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa_(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.w().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sM(u)}}}
U.ca.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.x():u},
aB:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ca))return!1
return J.I(this.a,b.a)},
h:function(a){return"Constant: "+this.a.v("          ")}}
U.bw.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.x():u},
K:function(a){var u=this.e
if(u!=null)u.A(a)},
Y:function(){return this.K(null)},
dP:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gax(),s=[{func:1,ret:-1,args:[D.M]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aH()
u.b=!0
this.K(u)},
es:function(a,b){var u,t
for(u=b.gP(b),t=this.gax();u.u();)u.gG(u).gm().N(0,t)
u=new D.aI()
u.b=!0
this.K(u)},
aB:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a3()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.U(r,r.length),u=null;r.u();){q=r.d
if(q!=null){t=q.aB(0,b,c)
if(t!=null)u=u==null?t:t.n(0,u)}}s.f=u==null?V.ba():u
r=s.e
if(r!=null)r.ar(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bw))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.I(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ai:function(){return[U.Z]},
$aaj:function(){return[U.Z]},
$iZ:1}
U.Z.prototype={}
U.cZ.prototype={
gm:function(){var u=this.cy
return u==null?this.cy=D.x():u},
K:function(a){var u=this.cy
if(u!=null)u.A(a)},
Y:function(){return this.K(null)},
aJ:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcF().k(0,u.gbj())
u.a.c.gcY().k(0,u.gbl())
u.a.c.gb8().k(0,u.gbn())
return!0},
bk:function(a){var u=this
if(!J.I(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bm:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iao")
if(!n.y)return
if(n.x){u=a.d.F(0,a.y)
u=new V.y(u.a,u.b)
u=u.w(u)
t=n.r
if(typeof t!=="number")return H.q(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.F(0,a.y)
u=new V.y(t.a,t.b).n(0,2).t(0,u.ga0())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.n()
s=n.e
if(typeof s!=="number")return H.q(s)
t.sM(u*10*s)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=new V.y(s.a,s.b).n(0,2).t(0,u.ga0())
s=n.b
q=r.a
if(typeof q!=="number")return q.L()
p=n.e
if(typeof p!=="number")return H.q(p)
o=n.z
if(typeof o!=="number")return H.q(o)
s.sa_(0,-q*p+o)
n.b.sM(0)
t=t.F(0,a.z)
n.Q=new V.y(t.a,t.b).n(0,2).t(0,u.ga0())}n.Y()},
bo:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.w(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.n()
s=r.e
if(typeof s!=="number")return H.q(s)
u.sM(t*10*s)
r.Y()}},
aB:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a3()
if(q<p){r.ch=p
u=b.y
r.b.a8(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.ag(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iZ:1}
U.d_.prototype={
gm:function(){var u=this.fx
return u==null?this.fx=D.x():u},
K:function(a){var u=this.fx
if(u!=null)u.A(a)},
Y:function(){return this.K(null)},
aJ:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcF().k(0,s.gbj())
s.a.c.gcY().k(0,s.gbl())
s.a.c.gb8().k(0,s.gbn())
u=s.a.d
t=u.f
u=t==null?u.f=D.x():t
u.k(0,s.gdI())
u=s.a.d
t=u.d
u=t==null?u.d=D.x():t
u.k(0,s.gdK())
u=s.a.e
t=u.b
u=t==null?u.b=D.x():t
u.k(0,s.geX())
u=s.a.e
t=u.d
u=t==null?u.d=D.x():t
u.k(0,s.geV())
u=s.a.e
t=u.c
u=t==null?u.c=D.x():t
u.k(0,s.geT())
return!0},
af:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.L()
u=-u}if(this.r){if(typeof t!=="number")return t.L()
t=-t}return new V.y(u,t)},
bk:function(a){var u=this
H.l(a,"$iao")
if(!J.I(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bm:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iao")
if(!n.cx)return
if(n.ch){u=a.d.F(0,a.y)
u=new V.y(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.q(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.F(0,a.y)
u=n.af(new V.y(t.a,t.b).n(0,2).t(0,u.ga0()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.L()
s=n.y
if(typeof s!=="number")return H.q(s)
t.sM(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.L()
t=n.x
if(typeof t!=="number")return H.q(t)
s.sM(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=n.af(new V.y(s.a,s.b).n(0,2).t(0,u.ga0()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sa_(0,-p*q+s)
n.b.sM(0)
n.c.sM(0)
t=t.F(0,a.z)
n.dx=n.af(new V.y(t.a,t.b).n(0,2).t(0,u.ga0()))}n.Y()},
bo:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.L()
s=r.y
if(typeof s!=="number")return H.q(s)
u.sM(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.L()
u=r.x
if(typeof u!=="number")return H.q(u)
s.sM(-t*10*u)
r.Y()}},
dJ:function(a){var u=this
if(H.l(a,"$ics").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
dL:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iao")
if(!J.I(n.d,a.x.b))return
u=a.c
t=a.d
s=t.F(0,a.y)
r=n.af(new V.y(s.a,s.b).n(0,2).t(0,u.ga0()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sa_(0,-p*q+s)
n.b.sM(0)
n.c.sM(0)
t=t.F(0,a.z)
n.dx=n.af(new V.y(t.a,t.b).n(0,2).t(0,u.ga0()))
n.Y()},
eY:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
eW:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$icT")
if(!n.cx)return
if(n.ch){u=a.d.F(0,a.y)
u=new V.y(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.q(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.F(0,a.y)
u=n.af(new V.y(t.a,t.b).n(0,2).t(0,u.ga0()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.L()
s=n.y
if(typeof s!=="number")return H.q(s)
t.sM(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.L()
t=n.x
if(typeof t!=="number")return H.q(t)
s.sM(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=n.af(new V.y(s.a,s.b).n(0,2).t(0,u.ga0()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sa_(0,-p*q+s)
n.b.sM(0)
n.c.sM(0)
t=t.F(0,a.z)
n.dx=n.af(new V.y(t.a,t.b).n(0,2).t(0,u.ga0()))}n.Y()},
eU:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.L()
s=r.y
if(typeof s!=="number")return H.q(s)
u.sM(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.L()
u=r.x
if(typeof u!=="number")return H.q(u)
s.sM(-t*10*u)
r.Y()}},
aB:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a3()
if(q<p){r.dy=p
u=b.y
r.c.a8(0,u)
r.b.a8(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.ag(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.n(0,V.ag(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iZ:1}
U.d0.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.x():u},
K:function(a){var u=this.r
if(u!=null)u.A(a)},
aJ:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.x():t
t=r.gdM()
u.k(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.x():s).k(0,t)
return!0},
dN:function(a){var u,t,s,r,q=this
if(!J.I(q.b,q.a.b.c))return
H.l(a,"$ibD")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.n()
r=u+t*s
if(u!==r){q.d=r
u=new D.u("zoom",u,r)
u.b=!0
q.K(u)}},
aB:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ag(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iZ:1}
M.c9.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.x():u},
S:function(a){var u=this.r
if(u!=null)u.A(a)},
aF:function(){return this.S(null)},
ex:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gR(),s=[{func:1,ret:-1,args:[D.M]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aH()
u.b=!0
this.S(u)},
ez:function(a,b){var u,t
for(u=b.gP(b),t=this.gR();u.u();)u.gG(u).gm().N(0,t)
u=new D.aI()
u.b=!0
this.S(u)},
a1:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.U(u,u.length);u.u();){t=u.d
if(t!=null)t.a1(a)}s.f=!1},
$ai:function(){return[M.a9]},
$aaj:function(){return[M.a9]},
$ia9:1}
M.cb.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.x():u},
S:function(a){var u=this.r
if(u!=null)u.A(a)},
aF:function(){return this.S(null)},
saK:function(a){var u,t,s=this
if(a==null)a=new X.eI()
u=s.b
if(u!==a){if(u!=null)u.gm().N(0,s.gR())
t=s.b
s.b=a
a.gm().k(0,s.gR())
u=new D.u("camera",t,s.b)
u.b=!0
s.S(u)}},
saP:function(a,b){var u,t,s=this
if(b==null)b=X.iz(null)
u=s.c
if(u!==b){if(u!=null)u.gm().N(0,s.gR())
t=s.c
s.c=b
b.gm().k(0,s.gR())
u=new D.u("target",t,s.c)
u.b=!0
s.S(u)}},
saQ:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().N(0,t.gR())
u=t.d
t.d=a
if(a!=null)a.gm().k(0,t.gR())
s=new D.u("technique",u,t.d)
s.b=!0
t.S(s)}},
a1:function(a){var u=this
a.bS(u.d)
u.c.U(a)
u.b.U(a)
u.e.a8(0,a)
u.e.a1(a)
u.b.aS(a)
u.c.toString
a.bR()},
$ia9:1}
M.cg.prototype={
S:function(a){var u=this.y
if(u!=null)u.A(a)},
aF:function(){return this.S(null)},
dZ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gR(),s=[{func:1,ret:-1,args:[D.M]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bu()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aH()
u.b=!0
this.S(u)},
e0:function(a,b){var u,t
for(u=b.gP(b),t=this.gR();u.u();)u.gG(u).gm().N(0,t)
u=new D.aI()
u.b=!0
this.S(u)},
saK:function(a){var u,t,s=this
if(a==null)a=X.je(null)
u=s.b
if(u!==a){if(u!=null)u.gm().N(0,s.gR())
t=s.b
s.b=a
a.gm().k(0,s.gR())
u=new D.u("camera",t,s.b)
u.b=!0
s.S(u)}},
saP:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gm().N(0,t.gR())
u=t.c
t.c=b
b.gm().k(0,t.gR())
s=new D.u("target",u,t.c)
s.b=!0
t.S(s)}},
saQ:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().N(0,t.gR())
u=t.d
t.d=a
if(a!=null)a.gm().k(0,t.gR())
s=new D.u("technique",u,t.d)
s.b=!0
t.S(s)}},
gm:function(){var u=this.y
return u==null?this.y=D.x():u},
a1:function(a){var u,t=this
a.bS(t.d)
t.c.U(a)
t.b.U(a)
u=t.d
if(u!=null)u.a8(0,a)
for(u=t.e.a,u=new J.U(u,u.length);u.u();)u.d.a8(0,a)
for(u=t.e.a,u=new J.U(u,u.length);u.u();)u.d.a1(a)
t.b.toString
a.cy.aq()
a.db.aq()
t.c.toString
a.bR()},
$ia9:1}
M.a9.prototype={}
A.c5.prototype={}
A.e4.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ff:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
cE:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.R.prototype={
gad:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
h:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof A.R))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.eZ.prototype={
di:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.aR("")
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
A.lb(c0,u)
A.ld(c0,u)
A.lc(c0,u)
A.lf(c0,u)
A.lg(c0,u)
A.le(c0,u)
A.lh(c0,u)
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
b5.cW(0,s.charCodeAt(0)==0?s:s,A.la(b5.z))
b5.Q=b5.x.i(0,"posAttr")
b5.cx=b5.x.i(0,"normAttr")
b5.ch=b5.x.i(0,"binmAttr")
b5.cy=b5.x.i(0,"txt2DAttr")
b5.db=b5.x.i(0,"txtCubeAttr")
b5.dx=b5.x.i(0,"bendAttr")
if(c0.dx)b5.id=H.l(b5.y.D(0,"invViewMat"),"$ia_")
if(t)b5.dy=H.l(b5.y.D(0,"objMat"),"$ia_")
if(r)b5.fr=H.l(b5.y.D(0,"viewObjMat"),"$ia_")
b5.fy=H.l(b5.y.D(0,"projViewObjMat"),"$ia_")
if(c0.ry)b5.k1=H.l(b5.y.D(0,"txt2DMat"),"$ibM")
if(c0.x1)b5.k2=H.l(b5.y.D(0,"txtCubeMat"),"$ia_")
if(c0.x2)b5.k3=H.l(b5.y.D(0,"colorMat"),"$ia_")
b5.r1=H.c([],[A.a_])
t=c0.y2
if(t>0){b5.k4=b5.y.D(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.i(0,q)
if(m==null)H.p(P.o(b7+q+b8))
s.push(H.l(m,"$ia_"))}}t=c0.a
if(t.a)b5.r2=H.l(b5.y.D(0,"emissionClr"),"$iB")
if(t.b)b5.rx=H.l(b5.y.D(0,"emissionTxt"),"$iO")
t=c0.b
if(t.a)b5.x1=H.l(b5.y.D(0,"ambientClr"),"$iB")
if(t.b)b5.x2=H.l(b5.y.D(0,"ambientTxt"),"$iO")
t=c0.c
if(t.a)b5.y2=H.l(b5.y.D(0,"diffuseClr"),"$iB")
if(t.b)b5.am=H.l(b5.y.D(0,"diffuseTxt"),"$iO")
t=c0.d
if(t.a)b5.cI=H.l(b5.y.D(0,"invDiffuseClr"),"$iB")
if(t.b)b5.cJ=H.l(b5.y.D(0,"invDiffuseTxt"),"$iO")
t=c0.e
s=t.a
if(s||t.b||!1){b5.cM=H.l(b5.y.D(0,"shininess"),"$iK")
if(s)b5.cK=H.l(b5.y.D(0,"specularClr"),"$iB")
if(t.b)b5.cL=H.l(b5.y.D(0,"specularTxt"),"$iO")}if(c0.f.b)b5.cN=H.l(b5.y.D(0,"bumpTxt"),"$iO")
if(c0.cy){b5.cO=H.l(b5.y.D(0,"envSampler"),"$iaV")
t=c0.r
if(t.a)b5.cP=H.l(b5.y.D(0,"reflectClr"),"$iB")
if(t.b)b5.cQ=H.l(b5.y.D(0,"reflectTxt"),"$iO")
t=c0.x
s=t.a
if(s||t.b||!1){b5.cR=H.l(b5.y.D(0,"refraction"),"$iK")
if(s)b5.cS=H.l(b5.y.D(0,"refractClr"),"$iB")
if(t.b)b5.cT=H.l(b5.y.D(0,"refractTxt"),"$iO")}}t=c0.y
if(t.a)b5.cU=H.l(b5.y.D(0,"alpha"),"$iK")
if(t.b)b5.cV=H.l(b5.y.D(0,"alphaTxt"),"$iO")
t=P.v
s=[t,A.cW]
b5.bB=new H.H(s)
b5.bC=new H.H([t,[P.b9,A.bL]])
b5.bD=new H.H(s)
b5.bE=new H.H([t,[P.b9,A.bN]])
b5.bF=new H.H(s)
b5.bG=new H.H([t,[P.b9,A.bO]])
if(c0.id){for(t=c0.z,s=t.length,r=[A.bL],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ah()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.i(0,g)
if(m==null)H.p(P.o(b7+g+b8))
H.l(m,"$iB")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.i(0,g)
if(f==null)H.p(P.o(b7+g+b8))
H.l(f,"$iB")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.i(0,g)
if(e==null)H.p(P.o(b7+g+b8))
H.l(e,"$iB")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.i(0,g)
if(m==null)H.p(P.o(b7+g+b8))
H.l(m,"$iB")
o=b5.y
g=i+"s["+n+"].color"
f=o.i(0,g)
if(f==null)H.p(P.o(b7+g+b8))
H.l(f,"$iB")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.i(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.l(e,"$iO")
a=e}else a=b6
h.push(new A.bL(b,c,d,m,f,a))}b5.bC.l(0,j,h)
q=b5.bB
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.l(0,j,m)}for(t=c0.Q,s=t.length,r=[A.bN],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.i(0,o)
if(m==null)H.p(P.o(b7+o+b8))
H.l(m,"$iB")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.i(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.l(f,"$iB")
p=b5.y
o=i+"s["+n+"].color"
e=p.i(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.l(e,"$iB")
if(typeof j!=="number")return j.ah()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.i(0,o)
if(a0==null)H.p(P.o(b7+o+b8))
H.l(a0,"$ibM")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.i(0,o)
if(a0==null)H.p(P.o(b7+o+b8))
H.l(a0,"$iaV")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.i(0,o)
if(a0==null)H.p(P.o(b7+o+b8))
H.l(a0,"$iaV")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.i(0,o)
if(a2==null)H.p(P.o(b7+o+b8))
H.l(a2,"$ibK")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.i(0,o)
if(a0==null)H.p(P.o(b7+o+b8))
H.l(a0,"$iK")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.i(0,o)
if(a2==null)H.p(P.o(b7+o+b8))
H.l(a2,"$iK")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.i(0,o)
if(a5==null)H.p(P.o(b7+o+b8))
H.l(a5,"$iK")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}h.push(new A.bN(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.bE.l(0,j,h)
q=b5.bD
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.l(0,j,m)}for(t=c0.ch,s=t.length,r=[A.bO],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.i(0,o)
if(m==null)H.p(P.o(b7+o+b8))
H.l(m,"$iB")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.i(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.l(f,"$iB")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.i(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.l(e,"$iB")
p=b5.y
o=i+"s["+n+"].color"
a0=p.i(0,o)
if(a0==null)H.p(P.o(b7+o+b8))
H.l(a0,"$iB")
if(typeof j!=="number")return j.ah()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.i(0,o)
if(a2==null)H.p(P.o(b7+o+b8))
H.l(a2,"$iB")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.i(0,o)
if(a5==null)H.p(P.o(b7+o+b8))
H.l(a5,"$iB")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.i(0,o)
if(a9==null)H.p(P.o(b7+o+b8))
H.l(a9,"$iK")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.i(0,o)
if(b0==null)H.p(P.o(b7+o+b8))
H.l(b0,"$iK")
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
if(a2==null)H.p(P.o(b7+g+b8))
H.l(a2,"$ibK")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.i(0,g)
if(a2==null)H.p(P.o(b7+g+b8))
H.l(a2,"$iK")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.i(0,g)
if(a5==null)H.p(P.o(b7+g+b8))
H.l(a5,"$iK")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.i(0,g)
if(a2==null)H.p(P.o(b7+g+b8))
H.l(a2,"$iK")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.i(0,g)
if(a5==null)H.p(P.o(b7+g+b8))
H.l(a5,"$iK")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.i(0,g)
if(a9==null)H.p(P.o(b7+g+b8))
H.l(a9,"$iK")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.i(0,g)
if(a2==null)H.p(P.o(b7+g+b8))
H.l(a2,"$iO")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.i(0,o)
if(a2==null)H.p(P.o(b7+o+b8))
H.l(a2,"$iO")
a3=a2}else a3=b6
h.push(new A.bO(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.bG.l(0,j,h)
q=b5.bF
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.l(0,j,m)}}},
aa:function(a,b){if(b!=null&&b.d)a.d9(b)},
eN:function(a,b){}}
A.cd.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.cD.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.cJ.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.f1.prototype={
h:function(a){return this.am}}
A.bL.prototype={}
A.bN.prototype={}
A.bO.prototype={}
A.cG.prototype={
c1:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cW:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cd(b,35633)
r.f=r.cd(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.p(P.o("Failed to link shader: "+H.e(s)))}r.eO()
r.eQ()},
U:function(a){a.a.useProgram(this.r)
this.x.ff()},
cd:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.o("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
eO:function(){var u,t,s,r=this,q=H.c([],[A.c5]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.q(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.c5(p,t.name,s))}r.x=new A.e4(q)},
eQ:function(){var u,t,s,r=this,q=H.c([],[A.cV]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.q(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fb(t.type,t.size,t.name,s))}r.y=new A.hm(q)},
av:function(a,b,c){var u=this.a
if(a===1)return new A.cW(u,b,c)
else return A.iI(u,this.r,b,a,c)},
dC:function(a,b,c){var u=this.a
if(a===1)return new A.O(u,b,c)
else return A.iI(u,this.r,b,a,c)},
dD:function(a,b,c){var u=this.a
if(a===1)return new A.aV(u,b,c)
else return A.iI(u,this.r,b,a,c)},
aX:function(a,b){return new P.dc(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
fb:function(a,b,c,d){var u=this
switch(a){case 5120:return u.av(b,c,d)
case 5121:return u.av(b,c,d)
case 5122:return u.av(b,c,d)
case 5123:return u.av(b,c,d)
case 5124:return u.av(b,c,d)
case 5125:return u.av(b,c,d)
case 5126:return new A.K(u.a,c,d)
case 35664:return new A.hi(u.a,c,d)
case 35665:return new A.B(u.a,c,d)
case 35666:return new A.bK(u.a,c,d)
case 35667:return new A.hj(u.a,c,d)
case 35668:return new A.hk(u.a,c,d)
case 35669:return new A.hl(u.a,c,d)
case 35674:return new A.hn(u.a,c,d)
case 35675:return new A.bM(u.a,c,d)
case 35676:return new A.a_(u.a,c,d)
case 35678:return u.dC(b,c,d)
case 35680:return u.dD(b,c,d)
case 35670:throw H.f(u.aX("BOOL",c))
case 35671:throw H.f(u.aX("BOOL_VEC2",c))
case 35672:throw H.f(u.aX("BOOL_VEC3",c))
case 35673:throw H.f(u.aX("BOOL_VEC4",c))
default:throw H.f(P.o("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.fO.prototype={}
A.cV.prototype={}
A.hm.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
D:function(a,b){var u=this.i(0,b)
if(u==null)throw H.f(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.I()},
I:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.cW.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.hj.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.hk.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.hl.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hh.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.K.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.hi.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.B.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.bK.prototype={
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.hn.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.bM.prototype={
a9:function(a){var u=new Float32Array(H.c_(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.a_.prototype={
a9:function(a){var u=new Float32Array(H.c_(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.O.prototype={
d9:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.aV.prototype={
da:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.i5.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bM(s.b,b).bM(s.d.bM(s.c,b),c)
s=new V.T(r.a,r.b,r.c)
if(!J.I(a.f,s)){a.f=s
s=a.a
if(s!=null)s.W()}a.sfN(r.t(0,Math.sqrt(r.w(r))))
s=1-b
u=1-c
u=new V.ar(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.I(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.W()}}}
F.aD.prototype={
dv:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d1()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.cX())return
return s.t(0,Math.sqrt(s.w(s)))},
dA:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.F(0,q)
r=new V.z(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.w(r)))
r=t.F(0,q)
r=new V.z(r.a,r.b,r.c)
r=s.aM(r.t(0,Math.sqrt(r.w(r))))
return r.t(0,Math.sqrt(r.w(r)))},
bx:function(){var u,t=this
if(t.d!=null)return!0
u=t.dv()
if(u==null){u=t.dA()
if(u==null)return!1}t.d=u
t.a.a.W()
return!0},
du:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d1()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.cX())return
return s.t(0,Math.sqrt(s.w(s)))},
dz:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.w().a){l=d.F(0,g)
l=new V.z(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.w(l)))
if(s.a-t.a<0)q=q.L(0)}else{p=(l-u.b)/r
l=d.F(0,g)
l=new V.T(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).F(0,j)
l=new V.z(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.w(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.L(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.w(l)))
l=o.aM(q)
l=l.t(0,Math.sqrt(l.w(l))).aM(o)
q=l.t(0,Math.sqrt(l.w(l)))}return q},
bv:function(){var u,t=this
if(t.e!=null)return!0
u=t.du()
if(u==null){u=t.dz()
if(u==null)return!1}t.e=u
t.a.a.W()
return!0},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.I()},
v:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.c.a6(J.a1(s.e),0)+", "+C.c.a6(J.a1(t.b.e),0)+", "+C.c.a6(J.a1(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.h(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.h(0)+"}"):u+"-}"},
I:function(){return this.v("")}}
F.bA.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.I()},
v:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.c.a6(J.a1(u.e),0)+", "+C.c.a6(J.a1(this.b.e),0)},
I:function(){return this.v("")}}
F.bG.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.I()},
v:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.a6(J.a1(u.e),0)},
I:function(){return this.v("")}}
F.fH.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.x():u},
fo:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.T()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){r=g[s]
h.a.k(0,r.fa())}h.a.T()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.T()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.k(0,n)
o=new F.bG()
if(n.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.A(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.T()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.T()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.k(0,l)
p.a.k(0,k)
F.km(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.T()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.T()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.T()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
i=p[o]
o=h.d.a
o.a.k(0,l)
o.a.k(0,k)
o.a.k(0,i)
F.bv(l,k,i)}g=h.e
if(g!=null)g.ar(0)},
al:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.al()||!1
if(!t.a.al())u=!1
s=t.e
if(s!=null)s.ar(0)
return u},
cw:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.ab()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.az().a)!==0)++s
if((t&$.ay().a)!==0)++s
if((t&$.aA().a)!==0)++s
if((t&$.b_().a)!==0)++s
if((t&$.c3().a)!==0)++s
if((t&$.c4().a)!==0)++s
if((t&$.bm().a)!==0)++s
if((t&$.ax().a)!==0)++s
r=a4.gbX(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.c(u,[P.G])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.c7])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.f1(m)
k=l.gbX(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.c7(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].fm(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.c_(p)),35044)
u.bindBuffer(a1,null)
c=new Z.br(new Z.d2(a1,d),o,a4)
c.b=H.c([],[Z.b5])
if(a0.b.b.length!==0){b=H.c([],[P.v])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.T()
b.push(t.e)}a=Z.iJ(u,34963,b)
c.b.push(new Z.b5(0,b.length,a))}if(a0.c.b.length!==0){b=H.c([],[P.v])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.T()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.T()
b.push(t.e)}a=Z.iJ(u,34963,b)
c.b.push(new Z.b5(1,b.length,a))}if(a0.d.b.length!==0){b=H.c([],[P.v])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.T()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.T()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].c
t.a.a.T()
b.push(t.e)}a=Z.iJ(u,34963,b)
c.b.push(new Z.b5(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.c([],[P.r])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.v(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.v(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.v(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.v(t))}return C.a.q(s,"\n")},
W:function(){var u=this.e
if(u!=null)u.A(null)}}
F.fI.prototype={
f_:function(a){var u,t,s,r,q=H.c([],[F.aD]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.k(0,p)
u.a.k(0,s)
u.a.k(0,r)
q.push(F.bv(p,s,r))}return q},
f0:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.c([],[F.aD])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.b(c,s)
m=c[s];++s
if(s>=n)return H.b(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.b(c,k)
j=c[k]
if(t<0||t>=n)return H.b(c,t)
i=c[t]
n=u.a
if(p){n.k(0,m)
u.a.k(0,l)
u.a.k(0,j)
h.push(F.bv(m,l,j))
u.a.k(0,m)
u.a.k(0,j)
u.a.k(0,i)
h.push(F.bv(m,j,i))}else{n.k(0,l)
u.a.k(0,j)
u.a.k(0,i)
h.push(F.bv(l,j,i))
u.a.k(0,l)
u.a.k(0,i)
u.a.k(0,m)
h.push(F.bv(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
al:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].bx())s=!1
return s},
bw:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].bv())s=!1
return s},
h:function(a){return this.I()},
v:function(a){var u,t,s,r=H.c([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(a))
return C.a.q(r,"\n")},
I:function(){return this.v("")}}
F.fJ.prototype={
gj:function(a){return this.b.length},
h:function(a){return this.I()},
v:function(a){var u,t,s=H.c([],[P.r]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].v(a+(""+u+". ")))}return C.a.q(s,"\n")},
I:function(){return this.v("")}}
F.fK.prototype={
gj:function(a){return this.b.length},
h:function(a){return this.I()},
v:function(a){var u,t,s,r=H.c([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(a))
return C.a.q(r,"\n")},
I:function(){return this.v("")}}
F.bg.prototype={
bz:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.hv(u.cx,r,o,t,s,q,p,a,n)},
fa:function(){return this.bz(null)},
sfN:function(a){var u
if(!J.I(this.z,a)){this.z=a
u=this.a
if(u!=null)u.W()}},
fm:function(a){var u,t,s=this
if(a.p(0,$.ab())){u=s.f
t=[P.G]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.az())){u=s.r
t=[P.G]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.ay())){u=s.x
t=[P.G]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.aA())){u=s.y
t=[P.G]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.p(0,$.b_())){u=s.z
t=[P.G]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.c3())){u=s.Q
t=[P.G]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.c4())){u=s.Q
t=[P.G]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bm()))return H.c([s.ch],[P.G])
else if(a.p(0,$.ax())){u=s.cx
t=[P.G]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.G])},
bx:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d1()
t.d.H(0,new F.hD(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.ar(0)}return!0},
bv:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d1()
t.d.H(0,new F.hC(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.ar(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.I()},
v:function(a){var u,t,s=this,r="-",q=H.c([],[P.r])
q.push(C.c.a6(J.a1(s.e),0))
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
q.push(V.A(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.a.q(q,", ")
return a+"{"+t+"}"},
I:function(){return this.v("")}}
F.hD.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.hC.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.hw.prototype={
T:function(){},
k:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.o("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.W()
return!0},
aY:function(a,b,c,d,e,f){var u=F.hv(a,null,b,c,null,d,e,f,0)
this.k(0,u)
return u},
gj:function(a){return this.c.length},
al:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].bx()
return!0},
bw:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].bv()
return!0},
f6:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.I(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.A(null)}}}}return!0},
h:function(a){return this.I()},
v:function(a){var u,t,s,r
this.T()
u=H.c([],[P.r])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r)u.push(t[r].v(a))
return C.a.q(u,"\n")},
I:function(){return this.v("")}}
F.hx.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
H:function(a,b){var u=this
C.a.H(u.b,b)
C.a.H(u.c,new F.hy(u,b))
C.a.H(u.d,new F.hz(u,b))},
h:function(a){return this.I()},
I:function(){var u,t,s,r=H.c([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(""))
return C.a.q(r,"\n")}}
F.hy.prototype={
$1:function(a){if(!J.I(a.a,this.a))this.b.$1(a)}}
F.hz.prototype={
$1:function(a){var u=this.a
if(!J.I(a.a,u)&&!J.I(a.b,u))this.b.$1(a)}}
F.hA.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a){return this.I()},
I:function(){var u,t,s,r=H.c([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(""))
return C.a.q(r,"\n")}}
F.hB.prototype={
gj:function(a){return this.b.length},
h:function(a){return this.I()},
I:function(){var u,t,s,r=H.c([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(""))
return C.a.q(r,"\n")}}
O.cv.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.x():u},
O:function(a){var u=this.fr
if(u!=null)u.A(a)},
aG:function(){return this.O(null)},
ck:function(a){this.a=null
this.O(a)},
eL:function(){return this.ck(null)},
dT:function(a,b){var u=new D.aH()
u.b=!0
this.O(u)},
dV:function(a,b){var u=new D.aI()
u.b=!0
this.O(u)},
ca:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.v,h=new H.H([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
q=r.gag()
p=h.i(0,r.gag())
h.l(0,q,p==null?1:p)}o=H.c([],[A.cd])
h.H(0,new O.f5(j,o))
C.a.ba(o,new O.f6())
n=new H.H([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
q=r.gag()
p=n.i(0,r.gag())
n.l(0,q,p==null?1:p)}m=H.c([],[A.cD])
n.H(0,new O.f7(j,m))
C.a.ba(m,new O.f8())
l=new H.H([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.m)(i),++s){r=i[s]
t=r.gag()
q=l.i(0,r.gag())
l.l(0,t,q==null?1:q)}k=H.c([],[A.cJ])
l.H(0,new O.f9(j,k))
C.a.ba(k,new O.fa())
i=C.d.Z(j.e.a.length+3,4)
j.dy.e
return A.ks(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
a4:function(a,b){if(b!=null)if(!C.a.ab(a,b)){b.a=a.length
a.push(b)}},
a8:function(a,b){var u
for(u=this.dx.a,u=new J.U(u,u.length);u.u();)C.h.a8(u.d,b)},
d2:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a
if(b0==null){b0=a9.ca()
u=b1.fr.i(0,b0.am)
if(u==null){u=A.kr(b0,b1.a)
b1.ct(u)}b0=a9.a=u
b2.e=null}t=b0.z
s=t.cH
b0=b2.e
if(!(b0 instanceof Z.br))b0=b2.e=null
if(b0==null||!b0.d.p(0,s)){b0=t.k3
if(b0)b2.d.al()
r=t.k4
if(r){q=b2.d
p=q.e
if(p!=null)++p.d
q.d.bw()
q.a.bw()
q=q.e
if(q!=null)q.ar(0)}q=t.r2
if(q){p=b2.d
o=p.e
if(o!=null)++o.d
p.a.f6()
p=p.e
if(p!=null)p.ar(0)}n=b2.d.cw(new Z.d3(b1.a),s)
n.an($.ab()).e=a9.a.Q.c
if(b0)n.an($.az()).e=a9.a.cx.c
if(r)n.an($.ay()).e=a9.a.ch.c
if(t.r1)n.an($.aA()).e=a9.a.cy.c
if(q)n.an($.b_()).e=a9.a.db.c
if(t.rx)n.an($.ax()).e=a9.a.dx.c
b2.e=n}m=H.c([],[T.cO])
a9.a.U(b1)
if(t.dy){b0=a9.a
r=b1.dx
r=r.gV(r)
b0=b0.dy
b0.toString
b0.a9(r.a2(0,!0))}if(t.fr){b0=a9.a
r=b1.cx
if(r==null){r=b1.db
r=r.gV(r)
q=b1.dx
q=b1.cx=r.n(0,q.gV(q))
r=q}b0=b0.fr
b0.toString
b0.a9(r.a2(0,!0))}b0=a9.a
r=b1.ch
if(r==null){r=b1.gfG()
q=b1.dx
q=b1.ch=r.n(0,q.gV(q))
r=q}b0=b0.fy
b0.toString
b0.a9(r.a2(0,!0))
if(t.ry){b0=a9.a
r=a9.b
b0=b0.k1
b0.toString
b0.a9(C.h.a2(r,!0))}if(t.x1){b0=a9.a
r=a9.c
b0=b0.k2
b0.toString
b0.a9(C.h.a2(r,!0))}if(t.x2){b0=a9.a
r=a9.d
b0=b0.k3
b0.toString
b0.a9(C.h.a2(r,!0))}if(t.y2>0){l=a9.e.a.length
b0=a9.a.k4
b0.a.uniform1i(b0.d,l)
for(k=0;k<l;++k){b0=a9.a
r=a9.e.a
if(k>=r.length)return H.b(r,k)
r=r[k]
b0=b0.r1
if(k>=b0.length)return H.b(b0,k)
b0=b0[k]
j=new Float32Array(H.c_(r.a2(0,!0)))
b0.a.uniformMatrix4fv(b0.d,!1,j)}}b0=t.a
if(b0.a){r=a9.a
q=a9.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.a4(m,a9.f.d)
b0=a9.a
r=a9.f.d
b0.aa(b0.rx,r)}if(t.id){b0=t.b
if(b0.a){r=a9.a
q=a9.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.a4(m,a9.r.d)
b0=a9.a
r=a9.r.d
b0.aa(b0.x2,r)}b0=t.c
if(b0.a){r=a9.a
q=a9.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.a4(m,a9.x.d)
b0=a9.a
r=a9.x.d
b0.aa(b0.am,r)}b0=t.d
if(b0.a){r=a9.a
q=a9.y.f
r=r.cI
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.a4(m,a9.y.d)
b0=a9.a
r=a9.y.d
b0.aa(b0.cJ,r)}b0=t.e
r=b0.a
if(r||b0.b||!1){q=a9.a
p=a9.z.ch
q=q.cM
q.a.uniform1f(q.d,p)}if(r){r=a9.a
q=a9.z.f
r=r.cK
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.a4(m,a9.z.d)
b0=a9.a
r=a9.z.d
b0.aa(b0.cL,r)}b0=t.z
if(b0.length>0){r=b1.db
i=r.gV(r)
r=P.v
h=new H.H([r,r])
for(r=a9.dx.e,q=r.length,g=0;g<r.length;r.length===q||(0,H.m)(r),++g){f=r[g]
e=f.gag()
d=h.i(0,e)
if(d==null)d=0
h.l(0,e,d+1)
c=J.e_(a9.a.bC.i(0,e),d)
p=f.gcD(f)
o=C.b.n(i.a,p.gaZ(p))+C.b.n(i.b,p.gb_(p))+C.b.n(i.c,p.gb0())
b=C.b.n(i.e,p.gaZ(p))+C.b.n(i.f,p.gb_(p))+C.b.n(i.r,p.gb0())
p=C.b.n(i.y,p.gaZ(p))+C.b.n(i.z,p.gb_(p))+C.b.n(i.Q,p.gb0())
p=new V.z(o,b,p).t(0,Math.sqrt(o*o+b*b+p*p))
b=c.e
o=p.a
a=p.b
p=p.c
b.a.uniform3f(b.d,o,a,p)
p=f.gaL(f)
a=c.f
a.a.uniform3f(a.d,p.a,p.b,p.c)
f.ga7()
p=f.gcD(f)
o=c.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gb8()
o=c.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gb6(f)
o=c.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.ga7()
if(!C.a.ab(m,p)){p.a=m.length
m.push(p)}p=f.ga7()
o=p.gb3(p)
if(o){o=c.r
o.toString
b=p.d
if(!b)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.m)(b0),++g){q=b0[g].a
l=h.i(0,q)
if(l==null)l=0
q=a9.a.bB.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.Q
if(b0.length>0){r=b1.db
i=r.gV(r)
r=P.v
a0=new H.H([r,r])
for(r=a9.dx.f,q=r.length,g=0;g<r.length;r.length===q||(0,H.m)(r),++g){f=r[g]
e=f.gag()
d=a0.i(0,e)
if(d==null)d=0
a0.l(0,e,d+1)
c=J.e_(a9.a.bE.i(0,e),d)
a1=i.n(0,f.gV(f))
p=f.gV(f)
o=$.bH
p=p.bT(o==null?$.bH=new V.T(0,0,0):o)
o=c.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.bH
p=a1.bT(p==null?$.bH=new V.T(0,0,0):p)
o=c.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gaL(f)
o=c.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.ga7()
p=a1.bJ(0)
o=p.a
b=p.b
a=p.c
a2=p.e
a3=p.f
a4=p.r
a5=p.y
a6=p.z
p=p.Q
a7=c.d
a7.toString
j=new Float32Array(H.c_(new V.cw(o,b,a,a2,a3,a4,a5,a6,p).a2(0,!0)))
a7.a.uniformMatrix3fv(a7.d,!1,j)
f.ga7()
p=f.ga7()
if(!C.a.ab(m,p)){p.a=m.length
m.push(p)}p=f.ga7()
o=p.gb3(p)
if(o){o=c.f
o.toString
b=p.d
if(b<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gaD()
p=f.gdc()
o=c.x
o.toString
b=p.gaZ(p)
a=p.gb_(p)
a2=p.gb0()
p=p.gfe()
o.a.uniform4f(o.d,b,a,a2,p)
p=f.gaD()
if(!C.a.ab(m,p)){p.a=m.length
m.push(p)}p=f.gaD()
o=p.gb3(p)
if(o){o=c.r
o.toString
b=p.d
if(b<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.gfg()){p=f.gf2()
o=c.y
o.a.uniform1f(o.d,p)
p=f.gf3()
o=c.z
o.a.uniform1f(o.d,p)
p=f.gf4()
o=c.Q
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.m)(b0),++g){q=b0[g].a
l=a0.i(0,q)
if(l==null)l=0
q=a9.a.bD.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.ch
if(b0.length>0){r=b1.db
i=r.gV(r)
r=P.v
a8=new H.H([r,r])
for(r=a9.dx.r,q=r.length,g=0;g<r.length;r.length===q||(0,H.m)(r),++g){f=r[g]
e=f.gag()
d=a8.i(0,e)
if(d==null)d=0
a8.l(0,e,d+1)
c=J.e_(a9.a.bG.i(0,e),d)
p=f.gfF(f)
o=c.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gcD(f).h4()
o=c.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=i.bT(f.gfF(f))
o=c.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gaL(f)
o=c.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.ga7()
p=f.gb8()
o=c.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gb6(f)
o=c.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gh5()
o=c.x
o.a.uniform1f(o.d,p)
p=f.gh6()
o=c.y
o.a.uniform1f(o.d,p)
f.ga7()
p=f.ga7()
if(!C.a.ab(m,p)){p.a=m.length
m.push(p)}p=f.ga7()
o=p.gb3(p)
if(o){o=c.dx
o.toString
b=p.d
if(!b)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gaD()
p=f.gdc()
o=c.z
o.toString
b=p.gaZ(p)
a=p.gb_(p)
a2=p.gb0()
p=p.gfe()
o.a.uniform4f(o.d,b,a,a2,p)
p=f.gaD()
if(!C.a.ab(m,p)){p.a=m.length
m.push(p)}p=f.gaD()
o=p.gb3(p)
if(o){o=c.dy
o.toString
b=p.d
if(!b)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.gfV()){p=f.gfU()
o=c.Q
o.a.uniform1f(o.d,p)
p=f.gfT()
o=c.ch
o.a.uniform1f(o.d,p)}if(f.gfg()){p=f.gf2()
o=c.cx
o.a.uniform1f(o.d,p)
p=f.gf3()
o=c.cy
o.a.uniform1f(o.d,p)
p=f.gf4()
o=c.db
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.m)(b0),++g){q=b0[g].a
l=a8.i(0,q)
if(l==null)l=0
q=a9.a.bF.i(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.b){a9.a4(m,a9.Q.d)
b0=a9.a
r=a9.Q.d
b0.aa(b0.cN,r)}if(t.dx){b0=a9.a
r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.gV(r).bJ(0)}b0=b0.id
b0.toString
b0.a9(r.a2(0,!0))}if(t.cy){a9.a4(m,a9.ch)
b0=a9.a
r=a9.ch
b0.eN(b0.cO,r)
b0=t.r
if(b0.a){r=a9.a
q=a9.cx.f
r=r.cP
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.a4(m,a9.cx.d)
b0=a9.a
r=a9.cx.d
b0.aa(b0.cQ,r)}b0=t.x
r=b0.a
if(r||b0.b||!1){q=a9.a
p=a9.cy.ch
q=q.cR
q.a.uniform1f(q.d,p)}if(r){r=a9.a
q=a9.cy.f
r=r.cS
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.a4(m,a9.cy.d)
b0=a9.a
r=a9.cy.d
b0.aa(b0.cT,r)}}b0=t.y
r=b0.a
q=!r
if(!q||b0.b||!1){if(r){r=a9.a
p=a9.db.f
r=r.cU
r.a.uniform1f(r.d,p)}if(b0.b){a9.a4(m,a9.db.d)
r=a9.a
p=a9.db.d
r.aa(r.cV,p)}r=b1.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b1.a,k=0;k<m.length;++k){p=m[k]
if(!p.c&&p.d){p.c=!0
r.activeTexture(33984+p.a)
r.bindTexture(3553,p.b)}}p=b2.e
p.U(b1)
p.a1(b1)
p.aS(b1)
if(!q||b0.b||!1)r.disable(3042)
for(k=0;k<m.length;++k){b0=m[k]
if(b0.c){b0.c=!1
r.activeTexture(33984+b0.a)
r.bindTexture(3553,null)}}b0=a9.a
b0.toString
r.useProgram(null)
b0.x.cE()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.ca().am}}
O.f5.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cd(a,C.d.Z(b+3,4)*4))}}
O.f6.prototype={
$2:function(a,b){return J.iq(a.a,b.a)}}
O.f7.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cD(a,C.d.Z(b+3,4)*4))}}
O.f8.prototype={
$2:function(a,b){return J.iq(a.a,b.a)}}
O.f9.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cJ(a,C.d.Z(b+3,4)*4))}}
O.fa.prototype={
$2:function(a,b){return J.iq(a.a,b.a)}}
O.f_.prototype={
aj:function(){var u,t=this
t.c_()
u=t.f
if(!(Math.abs(u-1)<$.w().a)){t.f=1
u=new D.u(t.b,u,1)
u.b=!0
t.a.O(u)}}}
O.bB.prototype={
O:function(a){return this.a.O(a)},
aG:function(){return this.O(null)},
aj:function(){},
co:function(a){var u,t,s=this
if(!s.c.p(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aj()
u=s.a
u.a=null
u.O(null)}}}
O.f0.prototype={}
O.af.prototype={
cn:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.u(s.b+".color",u,a)
t.b=!0
s.a.O(t)}},
aj:function(){this.c_()
this.cn(new V.Q(1,1,1))},
saL:function(a,b){this.co(new A.R(!0,this.c.b,!1))
this.cn(b)}}
O.f2.prototype={}
O.f3.prototype={
aj:function(){var u,t=this
t.c0()
u=t.ch
if(!(Math.abs(u-1)<$.w().a)){t.ch=1
u=new D.u(t.b+".refraction",u,1)
u.b=!0
t.a.O(u)}}}
O.f4.prototype={
aj:function(){var u,t=this
t.c0()
u=t.ch
if(!(Math.abs(u-100)<$.w().a)){t.ch=100
u=new D.u(t.b+".shininess",u,100)
u.b=!0
t.a.O(u)}}}
O.cH.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.x():u},
O:function(a){var u=this.e
if(u!=null)u.A(a)},
aG:function(){return this.O(null)},
d2:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.i(0,n)
if(u==null){t=a.a
u=new A.fO(t,n)
u.c1(t,n)
u.cW(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.i(0,"posAttr")
u.Q=H.l(u.y.i(0,"fov"),"$iK")
u.ch=H.l(u.y.i(0,"ratio"),"$iK")
u.cx=H.l(u.y.i(0,"boxClr"),"$iB")
u.cy=H.l(u.y.i(0,"boxTxt"),"$iaV")
u.db=H.l(u.y.i(0,"viewMat"),"$ia_")
a.ct(u)}o.a=u}if(b.e==null){t=b.d.cw(new Z.d3(a.a),$.ab())
t.an($.ab()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.U(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.da(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.gV(s).bJ(0)
r=r.db
r.toString
r.a9(s.a2(0,!0))
t=b.e
if(t instanceof Z.br){t.U(a)
t.a1(a)
t.aS(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.cE()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.cN.prototype={}
T.cO.prototype={}
T.h2.prototype={}
T.h3.prototype={
gm:function(){var u=this.y
return u==null?this.y=D.x():u}}
T.h4.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.x():u}}
T.h5.prototype={
fn:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.j8(a)
t=new T.h3()
t.a=0
t.b=q
t.d=t.c=!1
W.L(u,"load",new T.h7(this,t,u,!1,q,!1,!1),!1)
return t},
aw:function(a,b,c,d,e,f){var u=W.j8(c);++this.d
W.L(u,"load",new T.h6(this,u,!1,b,!1,d,a),!1)},
cm:function(a,b,c){var u,t,s,r
b=V.iT(b)
u=V.iT(a.width)
t=V.iT(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.iu()
s.width=u
s.height=t
r=C.f.d6(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.lv(r.getImageData(0,0,s.width,s.height))}}}
T.h7.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.cm(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.p.d4(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.cG()}++s.e}}
T.h6.prototype={
$1:function(a){var u=this,t=u.a,s=t.cm(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.p.d4(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.cG()}++t.e}}
X.it.prototype={}
X.eG.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.x():u},
ae:function(a){var u=this.x
if(u!=null)u.A(a)},
U:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.q(u)
q=C.b.ac(r*u)
r=s.b
if(typeof t!=="number")return H.q(t)
p=C.b.ac(r*t)
r=C.b.ac(s.c*u)
a.c=r
s=C.b.ac(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.eI.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.x():u},
U:function(a){var u
a.cy.b5(V.ba())
u=V.ba()
a.db.b5(u)},
aS:function(a){a.cy.aq()
a.db.aq()}}
X.cC.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.x():u},
ae:function(a){var u=this.f
if(u!=null)u.A(a)},
dr:function(){return this.ae(null)},
U:function(a){var u,t,s,r,q,p,o,n,m,l=this,k=a.c,j=a.d,i=l.c,h=l.d,g=l.e,f=g-h,e=1/Math.tan(i*0.5),d=V.ag(-e/(k/j),0,0,0,0,e,0,0,0,0,g/f,-g*h/f,0,0,1,0)
a.cy.b5(d)
k=$.jf
if(k==null){k=V.kt()
j=$.jv
if(j==null)j=$.jv=new V.z(0,1,0)
i=$.ju
if(i==null)i=$.ju=new V.z(0,0,-1)
u=i.t(0,Math.sqrt(i.w(i)))
j=j.aM(u)
t=j.t(0,Math.sqrt(j.w(j)))
s=u.aM(t)
r=new V.z(k.a,k.b,k.c)
q=t.L(0).w(r)
p=s.L(0).w(r)
o=u.L(0).w(r)
k=V.ag(t.a,s.a,u.a,q,t.b,s.b,u.b,p,t.c,s.c,u.c,o,0,0,0,1)
$.jf=k
n=k}else n=k
k=l.b
if(k!=null){m=k.aB(0,a,l)
if(m!=null)n=m.n(0,n)}a.db.b5(n)},
aS:function(a){a.cy.aq()
a.db.aq()}}
X.fZ.prototype={}
V.il.prototype={
$1:function(a){var u=C.b.d5(this.a.gfi(),2)
if(u!=="0.00")P.iU(u+" fps")}}
V.fL.prototype={
dl:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.L(q,"scroll",new V.fN(o),!1)},
cs:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.eP()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.fR(C.a.fl(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
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
if(H.jK(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.b(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.kV(C.F,n,C.m,!1)
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
eP:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new R.ha()
t=P.r
u.a=new H.H([t,R.cL])
u.b=new H.H([t,R.cS])
u.c=u.J(0,q)
t=u.J(0,q).q(0,p)
s=T.N(new H.J("*"))
t.a.push(s)
t.c=!0
t=u.J(0,p).q(0,p)
s=new T.ap()
r=[T.cu]
s.a=H.c([],r)
t.a.push(s)
t=T.N(new H.J("*"))
s.a.push(t)
t=u.J(0,p).q(0,"BoldEnd")
s=T.N(new H.J("*"))
t.a.push(s)
t.c=!0
t=u.J(0,q).q(0,o)
s=T.N(new H.J("_"))
t.a.push(s)
t.c=!0
t=u.J(0,o).q(0,o)
s=new T.ap()
s.a=H.c([],r)
t.a.push(s)
t=T.N(new H.J("_"))
s.a.push(t)
t=u.J(0,o).q(0,n)
s=T.N(new H.J("_"))
t.a.push(s)
t.c=!0
t=u.J(0,q).q(0,m)
s=T.N(new H.J("`"))
t.a.push(s)
t.c=!0
t=u.J(0,m).q(0,m)
s=new T.ap()
s.a=H.c([],r)
t.a.push(s)
t=T.N(new H.J("`"))
s.a.push(t)
t=u.J(0,m).q(0,"CodeEnd")
s=T.N(new H.J("`"))
t.a.push(s)
t.c=!0
t=u.J(0,q).q(0,l)
s=T.N(new H.J("["))
t.a.push(s)
t.c=!0
t=u.J(0,l).q(0,k)
s=T.N(new H.J("|"))
t.a.push(s)
s=u.J(0,l).q(0,j)
t=T.N(new H.J("]"))
s.a.push(t)
s.c=!0
s=u.J(0,l).q(0,l)
t=new T.ap()
t.a=H.c([],r)
s.a.push(t)
s=T.N(new H.J("|]"))
t.a.push(s)
s=u.J(0,k).q(0,j)
t=T.N(new H.J("]"))
s.a.push(t)
s.c=!0
s=u.J(0,k).q(0,k)
t=new T.ap()
t.a=H.c([],r)
s.a.push(t)
s=T.N(new H.J("|]"))
t.a.push(s)
u.J(0,q).q(0,i).a.push(new T.e1())
s=u.J(0,i).q(0,i)
t=new T.ap()
t.a=H.c([],r)
s.a.push(t)
s=T.N(new H.J("*_`["))
t.a.push(s)
s=u.J(0,"BoldEnd")
s.d=s.a.aR(p)
s=u.J(0,n)
s.d=s.a.aR(o)
s=u.J(0,"CodeEnd")
s.d=s.a.aR(m)
s=u.J(0,j)
s.d=s.a.aR("Link")
s=u.J(0,i)
s.d=s.a.aR(i)
this.b=u}}
V.fN.prototype={
$1:function(a){P.jp(C.i,new V.fM(this.a))}}
V.fM.prototype={
$0:function(){var u=C.b.ac(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}};(function aliases(){var u=J.a.prototype
u.df=u.h
u=J.cn.prototype
u.dg=u.h
u=T.cj.prototype
u.de=u.aA
u.bZ=u.h
u=O.bB.prototype
u.c_=u.aj
u=O.af.prototype
u.c0=u.aj})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"lp","kO",6)
u(P,"lq","kP",6)
u(P,"lr","kQ",6)
t(P,"jC","ln",9)
var n
s(n=E.al.prototype,"gd0",0,0,null,["$1","$0"],["d1","fv"],0,0)
s(n,"gcZ",0,0,null,["$1","$0"],["d_","fs"],0,0)
r(n,"gfp","fq",3)
r(n,"gft","fu",3)
s(n=E.cP.prototype,"gc3",0,0,null,["$1","$0"],["c5","c4"],0,0)
q(n,"gfJ","d3",9)
p(n=X.cY.prototype,"ge7","e8",4)
p(n,"gdW","dX",4)
p(n,"ge1","e2",2)
p(n,"geb","ec",10)
p(n,"ge9","ea",10)
p(n,"gef","eg",2)
p(n,"gej","ek",2)
p(n,"ge5","e6",2)
p(n,"geh","ei",2)
p(n,"ge3","e4",2)
p(n,"gel","em",17)
p(n,"gen","eo",4)
p(n,"geE","eF",5)
p(n,"geA","eB",5)
p(n,"geC","eD",5)
s(n=D.cp.prototype,"gcg",0,0,null,["$1","$0"],["ci","ed"],0,0)
p(n,"gep","eq",18)
r(n,"gdQ","dR",11)
r(n,"geu","ev",11)
o(V.y.prototype,"gj","bL",12)
o(V.z.prototype,"gj","bL",12)
s(n=U.bw.prototype,"gax",0,0,null,["$1","$0"],["K","Y"],0,0)
r(n,"gdO","dP",13)
r(n,"ger","es",13)
s(n=U.cZ.prototype,"gax",0,0,null,["$1","$0"],["K","Y"],0,0)
p(n,"gbj","bk",1)
p(n,"gbl","bm",1)
p(n,"gbn","bo",1)
s(n=U.d_.prototype,"gax",0,0,null,["$1","$0"],["K","Y"],0,0)
p(n,"gbj","bk",1)
p(n,"gbl","bm",1)
p(n,"gbn","bo",1)
p(n,"gdI","dJ",1)
p(n,"gdK","dL",1)
p(n,"geX","eY",1)
p(n,"geV","eW",1)
p(n,"geT","eU",1)
p(U.d0.prototype,"gdM","dN",1)
s(n=M.c9.prototype,"gR",0,0,null,["$1","$0"],["S","aF"],0,0)
r(n,"gew","ex",14)
r(n,"gey","ez",14)
s(M.cb.prototype,"gR",0,0,null,["$1","$0"],["S","aF"],0,0)
s(n=M.cg.prototype,"gR",0,0,null,["$1","$0"],["S","aF"],0,0)
r(n,"gdY","dZ",3)
r(n,"ge_","e0",3)
s(n=O.cv.prototype,"gau",0,0,null,["$1","$0"],["O","aG"],0,0)
s(n,"geK",0,0,null,["$1","$0"],["ck","eL"],0,0)
r(n,"gdS","dT",15)
r(n,"gdU","dV",15)
s(O.bB.prototype,"gau",0,0,null,["$1","$0"],["O","aG"],0,0)
s(O.cH.prototype,"gau",0,0,null,["$1","$0"],["O","aG"],0,0)
s(X.cC.prototype,"gdq",0,0,null,["$1","$0"],["ae","dr"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.W,null)
s(P.W,[H.iD,J.a,J.U,P.dk,P.i,H.cr,P.eK,H.ch,H.hq,H.hf,P.b4,H.bs,H.dC,P.am,H.eQ,H.eR,H.eM,P.dI,P.d4,P.cM,P.fX,P.cQ,P.i4,P.hZ,P.hU,P.dj,P.n,P.ed,P.i3,P.aZ,P.a3,P.a7,P.aC,P.fr,P.cK,P.dc,P.eF,P.b9,P.ct,P.aM,P.r,P.aR,W.ej,W.D,W.ci,P.dN,P.hV,T.e1,T.cj,T.cu,T.fG,R.cL,R.cR,R.cS,R.ha,O.aj,O.bC,E.e9,E.al,E.fy,E.cP,Z.d2,Z.d3,Z.br,Z.b5,Z.au,D.ec,D.bu,D.M,X.c8,X.co,X.eO,X.eU,X.a4,X.fh,X.hb,X.cY,D.eo,D.Y,D.fu,D.fR,V.Q,V.ak,V.ew,V.cw,V.an,V.S,V.T,V.ar,V.cE,V.y,V.z,U.cZ,U.d_,U.d0,M.cb,M.cg,M.a9,A.c5,A.e4,A.R,A.cd,A.cD,A.cJ,A.f1,A.bL,A.bN,A.bO,A.cV,A.hm,F.aD,F.bA,F.bG,F.fH,F.fI,F.fJ,F.fK,F.bg,F.hw,F.hx,F.hA,F.hB,O.cN,O.bB,O.f2,T.h5,X.it,X.fZ,X.eI,X.cC,V.fL])
s(J.a,[J.eL,J.cm,J.cn,J.aJ,J.bz,J.b6,H.bF,W.d,W.e0,W.c6,W.ae,W.C,W.d6,W.a2,W.en,W.ep,W.d8,W.cf,W.da,W.er,W.h,W.dd,W.aF,W.eH,W.df,W.aG,W.eT,W.fb,W.dl,W.dm,W.aL,W.dn,W.dr,W.aN,W.dv,W.dx,W.aP,W.dy,W.aQ,W.dD,W.as,W.dG,W.h9,W.aT,W.dJ,W.hd,W.hs,W.dO,W.dQ,W.dS,W.dU,W.dW,P.b8,P.dh,P.bb,P.dt,P.fw,P.dE,P.bf,P.dL,P.e5,P.d5,P.cF,P.dA])
s(J.cn,[J.fs,J.bP,J.aK])
t(J.iC,J.aJ)
s(J.bz,[J.cl,J.ck])
t(P.eS,P.dk)
s(P.eS,[H.cX,W.hM,W.hL,P.eB])
t(H.J,H.cX)
s(P.i,[H.eu,H.eX,H.hF])
s(P.eK,[H.eY,H.hG])
s(P.b4,[H.fo,H.eN,H.hp,H.eb,H.fE,P.cB,P.ac,P.hr,P.ho,P.fT,P.eg,P.em])
s(H.bs,[H.ip,H.h_,H.ig,H.ih,H.ii,P.hI,P.hH,P.hJ,P.hK,P.i2,P.i1,P.i9,P.hX,P.hY,P.eW,P.es,P.et,W.fd,W.ff,W.fD,W.fW,W.hP,P.ia,P.eC,P.eD,P.e7,E.fz,E.fA,E.fB,E.h8,D.ex,D.ey,F.i5,F.hD,F.hC,F.hy,F.hz,O.f5,O.f6,O.f7,O.f8,O.f9,O.fa,T.h7,T.h6,V.il,V.fN,V.fM])
s(H.h_,[H.fU,H.bp])
t(P.eV,P.am)
t(H.H,P.eV)
t(H.cq,H.eu)
t(H.cx,H.bF)
s(H.cx,[H.bR,H.bT])
t(H.bS,H.bR)
t(H.bE,H.bS)
t(H.bU,H.bT)
t(H.cy,H.bU)
s(H.cy,[H.fi,H.fj,H.fk,H.fl,H.fm,H.cz,H.fn])
t(P.hW,P.i4)
t(P.hT,P.hZ)
t(P.eh,P.fX)
t(P.ev,P.ed)
t(P.ht,P.ev)
t(P.hu,P.eh)
s(P.a7,[P.G,P.v])
s(P.ac,[P.bd,P.eJ])
s(W.d,[W.F,W.eA,W.aO,W.bV,W.aS,W.at,W.bX,W.hE,W.bQ,P.e8,P.b1])
s(W.F,[W.V,W.aB])
s(W.V,[W.k,P.j])
s(W.k,[W.e2,W.e3,W.b2,W.eE,W.by,W.fF])
t(W.ei,W.ae)
t(W.b3,W.d6)
s(W.a2,[W.ek,W.el])
t(W.d9,W.d8)
t(W.ce,W.d9)
t(W.db,W.da)
t(W.eq,W.db)
t(W.aE,W.c6)
t(W.de,W.dd)
t(W.ez,W.de)
t(W.dg,W.df)
t(W.bx,W.dg)
t(W.aU,W.h)
s(W.aU,[W.b7,W.ah,W.be])
t(W.fc,W.dl)
t(W.fe,W.dm)
t(W.dp,W.dn)
t(W.fg,W.dp)
t(W.ds,W.dr)
t(W.cA,W.ds)
t(W.dw,W.dv)
t(W.ft,W.dw)
t(W.fC,W.dx)
t(W.bW,W.bV)
t(W.fP,W.bW)
t(W.dz,W.dy)
t(W.fQ,W.dz)
t(W.fV,W.dD)
t(W.dH,W.dG)
t(W.h0,W.dH)
t(W.bY,W.bX)
t(W.h1,W.bY)
t(W.dK,W.dJ)
t(W.hc,W.dK)
t(W.aW,W.ah)
t(W.dP,W.dO)
t(W.hN,W.dP)
t(W.d7,W.cf)
t(W.dR,W.dQ)
t(W.hQ,W.dR)
t(W.dT,W.dS)
t(W.dq,W.dT)
t(W.dV,W.dU)
t(W.i_,W.dV)
t(W.dX,W.dW)
t(W.i0,W.dX)
t(W.hO,P.cM)
t(P.a5,P.hV)
t(P.di,P.dh)
t(P.eP,P.di)
t(P.du,P.dt)
t(P.fp,P.du)
t(P.dF,P.dE)
t(P.fY,P.dF)
t(P.dM,P.dL)
t(P.he,P.dM)
t(P.e6,P.d5)
t(P.fq,P.b1)
t(P.dB,P.dA)
t(P.fS,P.dB)
s(T.cj,[T.ap,R.cU])
s(E.e9,[Z.c7,A.cG,T.cO])
s(D.M,[D.aH,D.aI,D.u,X.fv])
s(X.fv,[X.cs,X.ao,X.bD,X.cT])
s(O.aj,[D.cp,U.bw,M.c9])
s(D.ec,[U.ef,U.Z])
t(U.ca,U.Z)
s(A.cG,[A.eZ,A.fO])
s(A.cV,[A.cW,A.hj,A.hk,A.hl,A.hh,A.K,A.hi,A.B,A.bK,A.hn,A.bM,A.a_,A.O,A.aV])
s(O.cN,[O.cv,O.cH])
s(O.bB,[O.f_,O.f0,O.af])
s(O.af,[O.f3,O.f4])
s(T.cO,[T.h2,T.h4])
t(T.h3,T.h2)
t(X.eG,X.fZ)
u(H.cX,H.hq)
u(H.bR,P.n)
u(H.bS,H.ch)
u(H.bT,P.n)
u(H.bU,H.ch)
u(P.dk,P.n)
u(W.d6,W.ej)
u(W.d8,P.n)
u(W.d9,W.D)
u(W.da,P.n)
u(W.db,W.D)
u(W.dd,P.n)
u(W.de,W.D)
u(W.df,P.n)
u(W.dg,W.D)
u(W.dl,P.am)
u(W.dm,P.am)
u(W.dn,P.n)
u(W.dp,W.D)
u(W.dr,P.n)
u(W.ds,W.D)
u(W.dv,P.n)
u(W.dw,W.D)
u(W.dx,P.am)
u(W.bV,P.n)
u(W.bW,W.D)
u(W.dy,P.n)
u(W.dz,W.D)
u(W.dD,P.am)
u(W.dG,P.n)
u(W.dH,W.D)
u(W.bX,P.n)
u(W.bY,W.D)
u(W.dJ,P.n)
u(W.dK,W.D)
u(W.dO,P.n)
u(W.dP,W.D)
u(W.dQ,P.n)
u(W.dR,W.D)
u(W.dS,P.n)
u(W.dT,W.D)
u(W.dU,P.n)
u(W.dV,W.D)
u(W.dW,P.n)
u(W.dX,W.D)
u(P.dh,P.n)
u(P.di,W.D)
u(P.dt,P.n)
u(P.du,W.D)
u(P.dE,P.n)
u(P.dF,W.D)
u(P.dL,P.n)
u(P.dM,W.D)
u(P.d5,P.am)
u(P.dA,P.n)
u(P.dB,W.D)})()
var v={mangledGlobalNames:{v:"int",G:"double",a7:"num",r:"String",aZ:"bool",aM:"Null",b9:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.M]},{func:1,ret:-1,args:[D.M]},{func:1,ret:-1,args:[W.ah]},{func:1,ret:-1,args:[P.v,[P.i,E.al]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.be]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aM,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.b7]},{func:1,ret:-1,args:[P.v,[P.i,D.Y]]},{func:1,ret:P.G},{func:1,ret:-1,args:[P.v,[P.i,U.Z]]},{func:1,ret:-1,args:[P.v,[P.i,M.a9]]},{func:1,ret:-1,args:[P.v,[P.i,V.an]]},{func:1,ret:P.aM,args:[,]},{func:1,ret:-1,args:[W.aW]},{func:1,ret:P.aZ,args:[[P.i,D.Y]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.f=W.b2.prototype
C.n=W.b3.prototype
C.C=J.a.prototype
C.a=J.aJ.prototype
C.D=J.ck.prototype
C.d=J.cl.prototype
C.h=J.cm.prototype
C.b=J.bz.prototype
C.c=J.b6.prototype
C.E=J.aK.prototype
C.o=J.fs.prototype
C.p=P.cF.prototype
C.j=J.bP.prototype
C.q=W.aW.prototype
C.r=W.bQ.prototype
C.k=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.t=function() {
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
C.y=function(getTagFallback) {
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
C.u=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.v=function(hooks) {
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
C.x=function(hooks) {
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
C.w=function(hooks) {
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
C.l=function(hooks) { return hooks; }

C.z=new P.fr()
C.m=new P.ht()
C.A=new P.hu()
C.e=new P.hW()
C.i=new P.aC(0)
C.B=new P.aC(5e6)
C.F=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.v])})();(function staticFields(){$.ad=0
$.bq=null
$.iZ=null
$.jF=null
$.jB=null
$.jI=null
$.ib=null
$.ij=null
$.iR=null
$.bh=null
$.c0=null
$.c1=null
$.iL=!1
$.aa=C.e
$.X=[]
$.j4=null
$.j3=null
$.j2=null
$.j1=null
$.jc=null
$.jg=null
$.bH=null
$.jm=null
$.jt=null
$.jw=null
$.jv=null
$.ju=null
$.jf=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"lX","jP",function(){return H.jD("_$dart_dartClosure")})
u($,"lY","iV",function(){return H.jD("_$dart_js")})
u($,"lZ","jQ",function(){return H.ai(H.hg({
toString:function(){return"$receiver$"}}))})
u($,"m_","jR",function(){return H.ai(H.hg({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"m0","jS",function(){return H.ai(H.hg(null))})
u($,"m1","jT",function(){return H.ai(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"m4","jW",function(){return H.ai(H.hg(void 0))})
u($,"m5","jX",function(){return H.ai(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"m3","jV",function(){return H.ai(H.jr(null))})
u($,"m2","jU",function(){return H.ai(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"m7","jZ",function(){return H.ai(H.jr(void 0))})
u($,"m6","jY",function(){return H.ai(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mk","iW",function(){return P.kN()})
u($,"ml","k2",function(){return P.kE("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"lW","jO",function(){return{}})
u($,"me","k1",function(){return Z.a6(0)})
u($,"m8","k_",function(){return Z.a6(511)})
u($,"mg","ab",function(){return Z.a6(1)})
u($,"mf","az",function(){return Z.a6(2)})
u($,"ma","ay",function(){return Z.a6(4)})
u($,"mh","aA",function(){return Z.a6(8)})
u($,"mi","b_",function(){return Z.a6(16)})
u($,"mb","c3",function(){return Z.a6(32)})
u($,"mc","c4",function(){return Z.a6(64)})
u($,"md","k0",function(){return Z.a6(96)})
u($,"mj","bm",function(){return Z.a6(128)})
u($,"m9","ax",function(){return Z.a6(256)})
u($,"lV","jN",function(){return new V.ew(1e-9)})
u($,"lU","w",function(){return $.jN()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bF,ArrayBufferView:H.bF,Float32Array:H.bE,Float64Array:H.bE,Int16Array:H.fi,Int32Array:H.fj,Int8Array:H.fk,Uint16Array:H.fl,Uint32Array:H.fm,Uint8ClampedArray:H.cz,CanvasPixelArray:H.cz,Uint8Array:H.fn,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLBodyElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLDivElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTableElement:W.k,HTMLTableRowElement:W.k,HTMLTableSectionElement:W.k,HTMLTemplateElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.e0,HTMLAnchorElement:W.e2,HTMLAreaElement:W.e3,Blob:W.c6,HTMLCanvasElement:W.b2,CDATASection:W.aB,CharacterData:W.aB,Comment:W.aB,ProcessingInstruction:W.aB,Text:W.aB,CSSPerspective:W.ei,CSSCharsetRule:W.C,CSSConditionRule:W.C,CSSFontFaceRule:W.C,CSSGroupingRule:W.C,CSSImportRule:W.C,CSSKeyframeRule:W.C,MozCSSKeyframeRule:W.C,WebKitCSSKeyframeRule:W.C,CSSKeyframesRule:W.C,MozCSSKeyframesRule:W.C,WebKitCSSKeyframesRule:W.C,CSSMediaRule:W.C,CSSNamespaceRule:W.C,CSSPageRule:W.C,CSSRule:W.C,CSSStyleRule:W.C,CSSSupportsRule:W.C,CSSViewportRule:W.C,CSSStyleDeclaration:W.b3,MSStyleCSSProperties:W.b3,CSS2Properties:W.b3,CSSImageValue:W.a2,CSSKeywordValue:W.a2,CSSNumericValue:W.a2,CSSPositionValue:W.a2,CSSResourceValue:W.a2,CSSUnitValue:W.a2,CSSURLImageValue:W.a2,CSSStyleValue:W.a2,CSSMatrixComponent:W.ae,CSSRotation:W.ae,CSSScale:W.ae,CSSSkew:W.ae,CSSTranslation:W.ae,CSSTransformComponent:W.ae,CSSTransformValue:W.ek,CSSUnparsedValue:W.el,DataTransferItemList:W.en,DOMException:W.ep,ClientRectList:W.ce,DOMRectList:W.ce,DOMRectReadOnly:W.cf,DOMStringList:W.eq,DOMTokenList:W.er,Element:W.V,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aE,FileList:W.ez,FileWriter:W.eA,HTMLFormElement:W.eE,Gamepad:W.aF,History:W.eH,HTMLCollection:W.bx,HTMLFormControlsCollection:W.bx,HTMLOptionsCollection:W.bx,ImageData:W.aG,HTMLImageElement:W.by,KeyboardEvent:W.b7,Location:W.eT,MediaList:W.fb,MIDIInputMap:W.fc,MIDIOutputMap:W.fe,MimeType:W.aL,MimeTypeArray:W.fg,PointerEvent:W.ah,MouseEvent:W.ah,DragEvent:W.ah,Document:W.F,DocumentFragment:W.F,HTMLDocument:W.F,ShadowRoot:W.F,XMLDocument:W.F,Attr:W.F,DocumentType:W.F,Node:W.F,NodeList:W.cA,RadioNodeList:W.cA,Plugin:W.aN,PluginArray:W.ft,RTCStatsReport:W.fC,HTMLSelectElement:W.fF,SourceBuffer:W.aO,SourceBufferList:W.fP,SpeechGrammar:W.aP,SpeechGrammarList:W.fQ,SpeechRecognitionResult:W.aQ,Storage:W.fV,CSSStyleSheet:W.as,StyleSheet:W.as,TextTrack:W.aS,TextTrackCue:W.at,VTTCue:W.at,TextTrackCueList:W.h0,TextTrackList:W.h1,TimeRanges:W.h9,Touch:W.aT,TouchEvent:W.be,TouchList:W.hc,TrackDefaultList:W.hd,CompositionEvent:W.aU,FocusEvent:W.aU,TextEvent:W.aU,UIEvent:W.aU,URL:W.hs,VideoTrackList:W.hE,WheelEvent:W.aW,Window:W.bQ,DOMWindow:W.bQ,CSSRuleList:W.hN,ClientRect:W.d7,DOMRect:W.d7,GamepadList:W.hQ,NamedNodeMap:W.dq,MozNamedAttrMap:W.dq,SpeechRecognitionResultList:W.i_,StyleSheetList:W.i0,SVGLength:P.b8,SVGLengthList:P.eP,SVGNumber:P.bb,SVGNumberList:P.fp,SVGPointList:P.fw,SVGStringList:P.fY,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGScriptElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGTransform:P.bf,SVGTransformList:P.he,AudioBuffer:P.e5,AudioParamMap:P.e6,AudioTrackList:P.e8,AudioContext:P.b1,webkitAudioContext:P.b1,BaseAudioContext:P.b1,OfflineAudioContext:P.fq,WebGL2RenderingContext:P.cF,SQLResultSetRowList:P.fS})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.bR.$nativeSuperclassTag="ArrayBufferView"
H.bS.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.bT.$nativeSuperclassTag="ArrayBufferView"
H.bU.$nativeSuperclassTag="ArrayBufferView"
H.cy.$nativeSuperclassTag="ArrayBufferView"
W.bV.$nativeSuperclassTag="EventTarget"
W.bW.$nativeSuperclassTag="EventTarget"
W.bX.$nativeSuperclassTag="EventTarget"
W.bY.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.jG,[])
else M.jG([])})})()
//# sourceMappingURL=test.dart.js.map
