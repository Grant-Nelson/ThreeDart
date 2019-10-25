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
a[c]=function(){a[c]=function(){H.mN(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jz"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jz"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jz(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jn:function jn(){},
l9:function(){return new P.d5("No element")},
d1:function(a,b,c,d){if(c-b<=32)H.lA(a,b,c,d)
else H.lz(a,b,c,d)},
lA:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a_()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.a.m(a,s,a[q])
s=q}C.a.m(a,s,t)}},
lz:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.Y(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.Y(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=q
q=r
r=p}C.a.m(a2,d,u)
C.a.m(a2,b,s)
C.a.m(a2,c,q)
if(a3<0||a3>=a2.length)return H.c(a2,a3)
C.a.m(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.c(a2,a4)
C.a.m(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.G(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.a6()
if(k<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.m(a2,m,a2[o])
C.a.m(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a_()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.m(a2,o,a2[n])
C.a.m(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.c(a2,n)
C.a.m(a2,m,a2[n])
C.a.m(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.a6()
if(g<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.m(a2,m,a2[o])
C.a.m(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a_()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a_()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a6()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.m(a2,o,a2[n])
C.a.m(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.a.m(a2,m,a2[n])
C.a.m(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.c(a2,a1)
C.a.m(a2,a3,a2[a1])
C.a.m(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.c(a2,a1)
C.a.m(a2,a4,a2[a1])
C.a.m(a2,a1,r)
H.d1(a2,a3,o-2,a5)
H.d1(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.c(a2,o)
if(!J.G(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.c(a2,n)
if(!J.G(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.m(a2,m,a2[o])
C.a.m(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a6()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.m(a2,o,a2[n])
C.a.m(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.a.m(a2,m,a2[n])
C.a.m(a2,n,l)}n=j
break}}}H.d1(a2,o,n,a5)}else H.d1(a2,o,n,a5)},
M:function M(a){this.a=a},
eN:function eN(){},
cM:function cM(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
ff:function ff(a,b,c){this.a=a
this.b=b
this.$ti=c},
fg:function fg(a,b){this.a=null
this.b=a
this.c=b},
i2:function i2(a,b,c){this.a=a
this.b=b
this.$ti=c},
i3:function i3(a,b){this.a=a
this.b=b},
cC:function cC(){},
hL:function hL(){},
dg:function dg(){},
eg:function(a){var u,t=H.mO(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
mv:function(a){return v.types[a]},
mA:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.L(a).$iv},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a5(a)
if(typeof u!=="string")throw H.f(H.b2(a))
return u},
bZ:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
c_:function(a){return H.ll(a)+H.ko(H.by(a),0,null)},
ll:function(a){var u,t,s,r,q,p,o,n=J.L(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.D||!!n.$ic6){r=C.l(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.eg(t.length>1&&C.c.b1(t,0)===36?C.c.aM(t,1):t)},
k4:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lu:function(a){var u,t,s,r=H.b([],[P.z])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.b2(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.b5(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.f(H.b2(s))}return H.k4(r)},
k5:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.b2(s))
if(s<0)throw H.f(H.b2(s))
if(s>65535)return H.lu(a)}return H.k4(a)},
lt:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.b5(u,10))>>>0,56320|u&1023)}throw H.f(P.an(a,0,1114111,null,null))},
bl:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ls:function(a){var u=H.bl(a).getFullYear()+0
return u},
lq:function(a){var u=H.bl(a).getMonth()+1
return u},
lm:function(a){var u=H.bl(a).getDate()+0
return u},
ln:function(a){var u=H.bl(a).getHours()+0
return u},
lp:function(a){var u=H.bl(a).getMinutes()+0
return u},
lr:function(a){var u=H.bl(a).getSeconds()+0
return u},
lo:function(a){var u=H.bl(a).getMilliseconds()+0
return u},
r:function(a){throw H.f(H.b2(a))},
c:function(a,b){if(a==null)J.bD(a)
throw H.f(H.bw(a,b))},
bw:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ag(!0,b,s,null)
u=J.bD(a)
if(!(b<0)){if(typeof u!=="number")return H.r(u)
t=b>=u}else t=!0
if(t)return P.F(b,a,s,null,u)
return P.fR(b,s)},
mo:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bm(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bm(a,c,!0,b,"end",u)
return new P.ag(!0,b,"end",null)},
b2:function(a){return new P.ag(!0,a,null,null)},
mk:function(a){if(typeof a!=="number")throw H.f(H.b2(a))
return a},
f:function(a){var u
if(a==null)a=new P.bW()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kE})
u.name=""}else u.toString=H.kE
return u},
kE:function(){return J.a5(this.dartException)},
q:function(a){throw H.f(a)},
m:function(a){throw H.f(P.bH(a))},
ao:function(a){var u,t,s,r,q,p
a=H.kC(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.u])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hA(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hB:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kg:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
k_:function(a,b){return new H.fH(a,b==null?null:b.method)},
jo:function(a,b){var u=b==null,t=u?null:b.method
return new H.f5(a,t,u?null:b.receiver)},
b5:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.j7(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.b5(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jo(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.k_(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kH()
q=$.kI()
p=$.kJ()
o=$.kK()
n=$.kN()
m=$.kO()
l=$.kM()
$.kL()
k=$.kQ()
j=$.kP()
i=r.ab(u)
if(i!=null)return f.$1(H.jo(u,i))
else{i=q.ab(u)
if(i!=null){i.method="call"
return f.$1(H.jo(u,i))}else{i=p.ab(u)
if(i==null){i=o.ab(u)
if(i==null){i=n.ab(u)
if(i==null){i=m.ab(u)
if(i==null){i=l.ab(u)
if(i==null){i=o.ab(u)
if(i==null){i=k.ab(u)
if(i==null){i=j.ab(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.k_(u,i))}}return f.$1(new H.hK(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.d3()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ag(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.d3()
return a},
bz:function(a){var u
if(a==null)return new H.dV(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dV(a)},
mr:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
mz:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.o("Unsupported number of arguments for wrapped closure"))},
ay:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mz)
a.$identity=u
return u},
l3:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.he().constructor.prototype):Object.create(new H.bE(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ah
if(typeof t!=="number")return t.B()
$.ah=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jM(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.l_(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jM(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
l_:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mv,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jL:H.jb
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.f("Error in functionType of tearoff")},
l0:function(a,b,c,d){var u=H.jb
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jM:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.l2(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.l0(t,!r,u,b)
if(t===0){r=$.ah
if(typeof r!=="number")return r.B()
$.ah=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bF
return new Function(r+H.e(q==null?$.bF=H.ev("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ah
if(typeof r!=="number")return r.B()
$.ah=r+1
o+=r
r="return function("+o+"){return this."
q=$.bF
return new Function(r+H.e(q==null?$.bF=H.ev("self"):q)+"."+H.e(u)+"("+o+");}")()},
l1:function(a,b,c,d){var u=H.jb,t=H.jL
switch(b?-1:a){case 0:throw H.f(H.lx("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
l2:function(a,b){var u,t,s,r,q,p,o,n=$.bF
if(n==null)n=$.bF=H.ev("self")
u=$.jK
if(u==null)u=$.jK=H.ev("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.l1(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ah
if(typeof u!=="number")return u.B()
$.ah=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ah
if(typeof u!=="number")return u.B()
$.ah=u+1
return new Function(n+u+"}")()},
jz:function(a,b,c,d,e,f,g){return H.l3(a,b,c,d,!!e,!!f,g)},
jb:function(a){return a.a},
jL:function(a){return a.c},
ev:function(a){var u,t,s,r=new H.bE("self","target","receiver","name"),q=J.jl(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
mG:function(a,b){throw H.f(H.kZ(a,H.eg(b.substring(2))))},
h:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.L(a)[b]
else u=!0
if(u)return a
H.mG(a,b)},
kw:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
jA:function(a,b){var u
if(typeof a=="function")return!0
u=H.kw(J.L(a))
if(u==null)return!1
return H.kn(u,null,b,null)},
kZ:function(a,b){return new H.ew("CastError: "+P.ji(a)+": type '"+H.e(H.mg(a))+"' is not a subtype of type '"+b+"'")},
mg:function(a){var u,t=J.L(a)
if(!!t.$ibG){u=H.kw(t)
if(u!=null)return H.mH(u)
return"Closure"}return H.c_(a)},
mN:function(a){throw H.f(new P.eG(a))},
lx:function(a){return new H.fY(a)},
kx:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
by:function(a){if(a==null)return
return a.$ti},
nj:function(a,b,c){return H.bA(a["$a"+H.e(c)],H.by(b))},
mu:function(a,b,c,d){var u=H.bA(a["$a"+H.e(c)],H.by(b))
return u==null?null:u[d]},
jD:function(a,b,c){var u=H.bA(a["$a"+H.e(b)],H.by(a))
return u==null?null:u[c]},
b4:function(a,b){var u=H.by(a)
return u==null?null:u[b]},
mH:function(a){return H.b1(a,null)},
b1:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.eg(a[0].name)+H.ko(a,1,b)
if(typeof a=="function")return H.eg(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.e(b[t])}if('func' in a)return H.lQ(a,b)
if('futureOr' in a)return"FutureOr<"+H.b1("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lQ:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.u])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.c.B(p,a0[m])
l=u[q]
if(l!=null&&l!==P.N)p+=" extends "+H.b1(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.b1(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.b1(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.b1(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.mq(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.b1(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
ko:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aW("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b1(p,c)}return"<"+u.h(0)+">"},
bA:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
iT:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.by(a)
t=J.L(a)
if(t[b]==null)return!1
return H.ku(H.bA(t[d],u),null,c,null)},
ku:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.af(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.af(a[t],b,c[t],d))return!1
return!0},
nh:function(a,b,c){return a.apply(b,H.bA(J.L(b)["$a"+H.e(c)],H.by(b)))},
af:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="N"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="N"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.af(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="ad")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.af("type" in a?a.type:l,b,s,d)
else if(H.af(a,b,s,d))return!0
else{if(!('$i'+"aJ" in t.prototype))return!1
r=t.prototype["$a"+"aJ"]
q=H.bA(r,u?a.slice(1):l)
return H.af(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.kn(a,b,c,d)
if('func' in a)return c.name==="mS"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.ku(H.bA(m,u),b,p,d)},
kn:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.af(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.af(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.af(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.af(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.mD(h,b,g,d)},
mD:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.af(c[s],d,a[s],b))return!1}return!0},
ni:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mB:function(a){var u,t,s,r,q=$.ky.$1(a),p=$.iV[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j_[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.kt.$2(a,q)
if(q!=null){p=$.iV[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j_[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.j2(u)
$.iV[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.j_[q]=u
return u}if(s==="-"){r=H.j2(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kA(a,u)
if(s==="*")throw H.f(P.kh(q))
if(v.leafTags[q]===true){r=H.j2(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kA(a,u)},
kA:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jF(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
j2:function(a){return J.jF(a,!1,null,!!a.$iv)},
mC:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.j2(u)
else return J.jF(u,c,null,null)},
mx:function(){if(!0===$.jE)return
$.jE=!0
H.my()},
my:function(){var u,t,s,r,q,p,o,n
$.iV=Object.create(null)
$.j_=Object.create(null)
H.mw()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kB.$1(q)
if(p!=null){o=H.mC(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mw:function(){var u,t,s,r,q,p,o=C.u()
o=H.bv(C.v,H.bv(C.w,H.bv(C.m,H.bv(C.m,H.bv(C.x,H.bv(C.y,H.bv(C.z(C.l),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ky=new H.iX(r)
$.kt=new H.iY(q)
$.kB=new H.iZ(p)},
bv:function(a,b){return a(b)||b},
lb:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.f(new P.eY("Illegal RegExp pattern ("+String(p)+")",a))},
mK:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mp:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kC:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kD:function(a,b,c){var u=H.mL(a,b,c)
return u},
mL:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kC(b),'g'),H.mp(c))},
hA:function hA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fH:function fH(a,b){this.a=a
this.b=b},
f5:function f5(a,b,c){this.a=a
this.b=b
this.c=c},
hK:function hK(a){this.a=a},
j7:function j7(a){this.a=a},
dV:function dV(a){this.a=a
this.b=null},
bG:function bG(){},
hk:function hk(){},
he:function he(){},
bE:function bE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ew:function ew(a){this.a=a},
fY:function fY(a){this.a=a},
K:function K(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f8:function f8(a,b){this.a=a
this.b=b
this.c=null},
cL:function cL(a,b){this.a=a
this.$ti=b},
f9:function f9(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iX:function iX(a){this.a=a},
iY:function iY(a){this.a=a},
iZ:function iZ(a){this.a=a},
f4:function f4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ci:function(a){return a},
b0:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.bw(b,a))},
lP:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.mo(a,b,c))
return b},
bV:function bV(){},
cS:function cS(){},
bU:function bU(){},
cT:function cT(){},
fB:function fB(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(){},
cU:function cU(){},
fG:function fG(){},
c9:function c9(){},
ca:function ca(){},
cb:function cb(){},
cc:function cc(){},
mq:function(a){return J.jR(a?Object.keys(a):[],null)},
mO:function(a){return v.mangledGlobalNames[a]},
mE:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jF:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iW:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jE==null){H.mx()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.kh("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jH()]
if(r!=null)return r
r=H.mB(a)
if(r!=null)return r
if(typeof a=="function")return C.E
u=Object.getPrototypeOf(a)
if(u==null)return C.p
if(u===Object.prototype)return C.p
if(typeof s=="function"){Object.defineProperty(s,$.jH(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
la:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.ja(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.an(a,0,4294967295,"length",null))
return J.jR(new Array(a),b)},
jR:function(a,b){return J.jl(H.b(a,[b]))},
jl:function(a){a.fixed$length=Array
return a},
L:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cG.prototype
return J.cF.prototype}if(typeof a=="string")return J.bf.prototype
if(a==null)return J.cH.prototype
if(typeof a=="boolean")return J.f3.prototype
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.N)return a
return J.iW(a)},
jB:function(a){if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.N)return a
return J.iW(a)},
jC:function(a){if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.N)return a
return J.iW(a)},
ms:function(a){if(typeof a=="number")return J.bP.prototype
if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.c6.prototype
return a},
mt:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.N)return a
return J.iW(a)},
G:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).n(a,b)},
eh:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mA(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jB(a).i(a,b)},
kV:function(a,b,c,d){return J.mt(a).fI(a,b,c,d)},
j9:function(a,b){return J.ms(a).fS(a,b)},
jJ:function(a,b){return J.jC(a).E(a,b)},
kW:function(a,b){return J.jC(a).I(a,b)},
b7:function(a){return J.L(a).gG(a)},
bC:function(a){return J.jC(a).gR(a)},
bD:function(a){return J.jB(a).gj(a)},
a5:function(a){return J.L(a).h(a)},
a:function a(){},
f3:function f3(){},
cH:function cH(){},
cI:function cI(){},
fL:function fL(){},
c6:function c6(){},
aP:function aP(){},
aO:function aO(a){this.$ti=a},
jm:function jm(a){this.$ti=a},
U:function U(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bP:function bP(){},
cG:function cG(){},
cF:function cF(){},
bf:function bf(){}},P={
lG:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mh()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.ay(new P.i6(s),1)).observe(u,{childList:true})
return new P.i5(s,u,t)}else if(self.setImmediate!=null)return P.mi()
return P.mj()},
lH:function(a){self.scheduleImmediate(H.ay(new P.i7(a),0))},
lI:function(a){self.setImmediate(H.ay(new P.i8(a),0))},
lJ:function(a){P.js(C.h,a)},
js:function(a,b){var u=C.d.Y(a.a,1000)
return P.lM(u<0?0:u,b)},
kf:function(a,b){var u=C.d.Y(a.a,1000)
return P.lN(u<0?0:u,b)},
lM:function(a,b){var u=new P.e0()
u.e1(a,b)
return u},
lN:function(a,b){var u=new P.e0()
u.e2(a,b)
return u},
kl:function(a,b){var u,t,s
b.a=1
try{a.dA(new P.il(b),new P.im(b),null)}catch(s){u=H.b5(s)
t=H.bz(s)
P.mI(new P.io(b,u,t))}},
ik:function(a,b){var u,t
for(;u=a.a,u===2;)a=a.c
if(u>=4){t=b.b3()
b.a=a.a
b.c=a.c
P.bs(b,t)}else{t=b.c
b.a=2
b.c=a
a.cK(t)}},
bs:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null,i={},h=i.a=a
for(;!0;){u={}
t=h.a===8
if(b==null){if(t){s=h.c
P.iR(j,j,h.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.bs(i.a,b)}h=i.a
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
if(n){P.iR(j,j,h.b,q.a,q.b)
return}m=$.I
if(m!==o)$.I=o
else m=j
h=b.c
if((h&15)===8)new P.it(i,u,b,t).$0()
else if(s){if((h&1)!==0)new P.is(u,b,q).$0()}else if((h&2)!==0)new P.ir(i,u,b).$0()
if(m!=null)$.I=m
h=u.b
if(!!J.L(h).$iaJ){if(h.a>=4){l=p.c
p.c=null
b=p.b4(l)
p.a=h.a
p.c=h.c
i.a=h
continue}else P.ik(h,p)
return}}k=b.b
l=k.c
k.c=null
b=k.b4(l)
h=u.a
s=u.b
if(!h){k.a=4
k.c=s}else{k.a=8
k.c=s}i.a=k
h=k}},
mc:function(a,b){if(H.jA(a,{func:1,args:[P.N,P.aV]}))return a
if(H.jA(a,{func:1,args:[P.N]}))return a
throw H.f(P.ja(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mb:function(){var u,t
for(;u=$.bt,u!=null;){$.ck=null
t=u.b
$.bt=t
if(t==null)$.cj=null
u.a.$0()}},
mf:function(){$.jx=!0
try{P.mb()}finally{$.ck=null
$.jx=!1
if($.bt!=null)$.jI().$1(P.kv())}},
kr:function(a){var u=new P.dn(a)
if($.bt==null){$.bt=$.cj=u
if(!$.jx)$.jI().$1(P.kv())}else $.cj=$.cj.b=u},
me:function(a){var u,t,s=$.bt
if(s==null){P.kr(a)
$.ck=$.cj
return}u=new P.dn(a)
t=$.ck
if(t==null){u.b=s
$.bt=$.ck=u}else{u.b=t.b
$.ck=t.b=u
if(u.b==null)$.cj=u}},
mI:function(a){var u=null,t=$.I
if(C.e===t){P.bu(u,u,C.e,a)
return}P.bu(u,u,t,t.bE(a))},
ke:function(a,b){var u=$.I
if(u===C.e)return P.js(a,b)
return P.js(a,u.bE(b))},
lD:function(a,b){var u=$.I
if(u===C.e)return P.kf(a,b)
return P.kf(a,u.cT(b,P.da))},
iR:function(a,b,c,d,e){var u={}
u.a=d
P.me(new P.iS(u,e))},
kp:function(a,b,c,d){var u,t=$.I
if(t===c)return d.$0()
$.I=c
u=t
try{t=d.$0()
return t}finally{$.I=u}},
kq:function(a,b,c,d,e){var u,t=$.I
if(t===c)return d.$1(e)
$.I=c
u=t
try{t=d.$1(e)
return t}finally{$.I=u}},
md:function(a,b,c,d,e,f){var u,t=$.I
if(t===c)return d.$2(e,f)
$.I=c
u=t
try{t=d.$2(e,f)
return t}finally{$.I=u}},
bu:function(a,b,c,d){var u=C.e!==c
if(u)d=!(!u||!1)?c.bE(d):c.fP(d)
P.kr(d)},
i6:function i6(a){this.a=a},
i5:function i5(a,b,c){this.a=a
this.b=b
this.c=c},
i7:function i7(a){this.a=a},
i8:function i8(a){this.a=a},
e0:function e0(){this.c=0},
iK:function iK(a,b){this.a=a
this.b=b},
iJ:function iJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ib:function ib(){},
i4:function i4(a,b){this.a=a
this.$ti=b},
ig:function ig(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d},
ap:function ap(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
ih:function ih(a,b){this.a=a
this.b=b},
iq:function iq(a,b){this.a=a
this.b=b},
il:function il(a){this.a=a},
im:function im(a){this.a=a},
io:function io(a,b,c){this.a=a
this.b=b
this.c=c},
ij:function ij(a,b){this.a=a
this.b=b},
ip:function ip(a,b){this.a=a
this.b=b},
ii:function ii(a,b,c){this.a=a
this.b=b
this.c=c},
it:function it(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iu:function iu(a){this.a=a},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c},
ir:function ir(a,b,c){this.a=a
this.b=b
this.c=c},
dn:function dn(a){this.a=a
this.b=null},
d6:function d6(){},
hh:function hh(){},
da:function da(){},
b8:function b8(a,b){this.a=a
this.b=b},
iM:function iM(){},
iS:function iS(a,b){this.a=a
this.b=b},
iC:function iC(){},
iE:function iE(a,b){this.a=a
this.b=b},
iD:function iD(a,b){this.a=a
this.b=b},
iF:function iF(a,b,c){this.a=a
this.b=b
this.c=c},
ld:function(a,b){return new H.K([a,b])},
le:function(a){return H.mr(a,new H.K([null,null]))},
lf:function(a){return new P.iz([a])},
jw:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lL:function(a,b){var u=new P.dD(a,b)
u.c=a.e
return u},
l8:function(a,b,c){var u,t
if(P.jy(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.u])
$.a_.push(a)
try{P.lR(a,u)}finally{if(0>=$.a_.length)return H.c($.a_,-1)
$.a_.pop()}t=P.kb(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
jk:function(a,b,c){var u,t
if(P.jy(a))return b+"..."+c
u=new P.aW(b)
$.a_.push(a)
try{t=u
t.a=P.kb(t.a,a,", ")}finally{if(0>=$.a_.length)return H.c($.a_,-1)
$.a_.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jy:function(a){var u,t
for(u=$.a_.length,t=0;t<u;++t)if(a===$.a_[t])return!0
return!1},
lR:function(a,b){var u,t,s,r,q,p,o,n=a.gR(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.v())return
u=H.e(n.gH(n))
b.push(u)
m+=u.length+2;++l}if(!n.v()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gH(n);++l
if(!n.v()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gH(n);++l
for(;n.v();r=q,q=p){p=n.gH(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.e(r)
t=H.e(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
jT:function(a){var u,t={}
if(P.jy(a))return"{...}"
u=new P.aW("")
try{$.a_.push(a)
u.a+="{"
t.a=!0
J.kW(a,new P.fe(t,u))
u.a+="}"}finally{if(0>=$.a_.length)return H.c($.a_,-1)
$.a_.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iz:function iz(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iA:function iA(a){this.a=a
this.c=this.b=null},
dD:function dD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fa:function fa(){},
n:function n(){},
fd:function fd(){},
fe:function fe(a,b){this.a=a
this.b=b},
ar:function ar(){},
iG:function iG(){},
dE:function dE(){},
ey:function ey(){},
eB:function eB(){},
eO:function eO(){},
hO:function hO(){},
hP:function hP(){},
iL:function iL(a){this.b=0
this.c=a},
l7:function(a){if(a instanceof H.bG)return a.h(0)
return"Instance of '"+H.e(H.c_(a))+"'"},
lg:function(a,b,c){var u,t,s=J.la(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jS:function(a,b,c){var u,t=H.b([],[c])
for(u=J.bC(a);u.v();)t.push(u.gH(u))
if(b)return t
return J.jl(t)},
jr:function(a){var u,t
if(a.constructor===Array){u=a.length
t=P.k7(0,null,u)
return H.k5(t<u?C.a.dI(a,0,t):a)}return P.lB(a,0,null)},
lB:function(a,b,c){var u,t,s=J.bC(a)
for(u=0;u<b;++u)if(!s.v())throw H.f(P.an(b,0,u,null,null))
t=[]
for(;s.v();)t.push(s.gH(s))
return H.k5(t)},
lv:function(a){return new H.f4(a,H.lb(a,!1,!0,!1,!1,!1))},
kb:function(a,b,c){var u=J.bC(b)
if(!u.v())return a
if(c.length===0){do a+=H.e(u.gH(u))
while(u.v())}else{a+=H.e(u.gH(u))
for(;u.v();)a=a+c+H.e(u.gH(u))}return a},
lO:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.n){u=$.kU().b
u=u.test(b)}else u=!1
if(u)return b
t=C.B.fV(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.lt(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
l5:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
l6:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cx:function(a){if(a>=10)return""+a
return"0"+a},
jO:function(a){return new P.aF(1000*a)},
ji:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a5(a)
if(typeof a==="string")return JSON.stringify(a)
return P.l7(a)},
kX:function(a){return new P.ag(!1,null,null,a)},
ja:function(a,b,c){return new P.ag(!0,a,b,c)},
fR:function(a,b){return new P.bm(null,null,!0,a,b,"Value not in range")},
an:function(a,b,c,d,e){return new P.bm(b,c,!0,a,d,"Invalid value")},
k7:function(a,b,c){if(0>a||a>c)throw H.f(P.an(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.an(b,a,c,"end",null))
return b}return c},
k6:function(a,b){if(typeof a!=="number")return a.a6()
if(a<0)throw H.f(P.an(a,0,null,b,null))},
F:function(a,b,c,d,e){var u=e==null?J.bD(b):e
return new P.f1(u,!0,a,c,"Index out of range")},
a3:function(a){return new P.hM(a)},
kh:function(a){return new P.hJ(a)},
ka:function(a){return new P.d5(a)},
bH:function(a){return new P.eA(a)},
o:function(a){return new P.dw(a)},
jG:function(a){H.mE(a)},
b3:function b3(){},
a7:function a7(a,b){this.a=a
this.b=b},
J:function J(){},
aF:function aF(a){this.a=a},
eL:function eL(){},
eM:function eM(){},
aG:function aG(){},
bW:function bW(){},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bm:function bm(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f1:function f1(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hM:function hM(a){this.a=a},
hJ:function hJ(a){this.a=a},
d5:function d5(a){this.a=a},
eA:function eA(a){this.a=a},
fK:function fK(){},
d3:function d3(){},
eG:function eG(a){this.a=a},
dw:function dw(a){this.a=a},
eY:function eY(a,b){this.a=a
this.b=b},
z:function z(){},
j:function j(){},
f2:function f2(){},
bi:function bi(){},
cO:function cO(){},
ad:function ad(){},
ab:function ab(){},
N:function N(){},
aV:function aV(){},
u:function u(){},
aW:function aW(a){this.a=a},
mn:function(a){var u,t=J.L(a)
if(!!t.$iaL){u=t.gcY(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.e5(a.data,a.height,a.width)},
mm:function(a){if(a instanceof P.e5)return{data:a.a,height:a.b,width:a.c}
return a},
az:function(a){var u,t,s,r,q
if(a==null)return
u=P.ld(P.u,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
ml:function(a){var u={}
a.I(0,new P.iU(u))
return u},
e5:function e5(a,b,c){this.a=a
this.b=b
this.c=c},
iU:function iU(a){this.a=a},
eU:function eU(a,b){this.a=a
this.b=b},
eV:function eV(){},
eW:function eW(){},
iy:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lK:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iw:function iw(){},
iB:function iB(){},
a9:function a9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bh:function bh(){},
f7:function f7(){},
bk:function bk(){},
fI:function fI(){},
fQ:function fQ(){},
hi:function hi(){},
k:function k(){},
bo:function bo(){},
hz:function hz(){},
dB:function dB(){},
dC:function dC(){},
dM:function dM(){},
dN:function dN(){},
dX:function dX(){},
dY:function dY(){},
e3:function e3(){},
e4:function e4(){},
en:function en(){},
eq:function eq(){},
er:function er(a){this.a=a},
es:function es(){},
b9:function b9(){},
fJ:function fJ(){},
dp:function dp(){},
cZ:function cZ(){},
hd:function hd(){},
dT:function dT(){},
dU:function dU(){}},W={
mF:function(a,b){var u=new P.ap($.I,[b]),t=new P.i4(u,[b])
a.then(H.ay(new W.j3(t),1),H.ay(new W.j4(t),1))
return u},
kY:function(a){var u=new Audio(a)
return u},
jd:function(){var u=document.createElement("canvas")
return u},
jh:function(a){return"wheel"},
ix:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
km:function(a,b,c,d){var u=W.ix(W.ix(W.ix(W.ix(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
P:function(a,b,c,d){var u=W.ks(new W.ie(c),W.i)
if(u!=null&&!0)J.kV(a,b,u,!1)
return new W.id(a,b,u,!1)},
ks:function(a,b){var u=$.I
if(u===C.e)return a
return u.cT(a,b)},
j3:function j3(a){this.a=a},
j4:function j4(a){this.a=a},
l:function l(){},
ei:function ei(){},
ek:function ek(){},
el:function el(){},
cp:function cp(){},
bb:function bb(){},
aE:function aE(){},
eC:function eC(){},
D:function D(){},
bJ:function bJ(){},
eD:function eD(){},
a6:function a6(){},
aj:function aj(){},
eE:function eE(){},
eF:function eF(){},
eH:function eH(){},
eI:function eI(){},
cz:function cz(){},
cA:function cA(){},
eJ:function eJ(){},
eK:function eK(){},
ia:function ia(a,b){this.a=a
this.b=b},
Y:function Y(){},
i:function i(){},
d:function d(){},
aI:function aI(){},
eS:function eS(){},
eT:function eT(){},
eX:function eX(){},
aK:function aK(){},
f_:function f_(){},
bN:function bN(){},
aL:function aL(){},
bO:function bO(){},
bg:function bg(){},
fb:function fb(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(a){this.a=a},
fx:function fx(){},
fy:function fy(a){this.a=a},
aQ:function aQ(){},
fz:function fz(){},
am:function am(){},
i9:function i9(a){this.a=a},
H:function H(){},
cV:function cV(){},
aR:function aR(){},
fN:function fN(){},
fW:function fW(){},
fX:function fX(a){this.a=a},
fZ:function fZ(){},
aS:function aS(){},
ha:function ha(){},
aT:function aT(){},
hb:function hb(){},
aU:function aU(){},
hf:function hf(){},
hg:function hg(a){this.a=a},
av:function av(){},
aX:function aX(){},
aw:function aw(){},
hl:function hl(){},
hm:function hm(){},
hu:function hu(){},
aY:function aY(){},
bn:function bn(){},
hx:function hx(){},
hy:function hy(){},
aZ:function aZ(){},
hN:function hN(){},
i1:function i1(){},
b_:function b_(){},
c8:function c8(){},
ic:function ic(){},
dr:function dr(){},
iv:function iv(){},
dJ:function dJ(){},
iH:function iH(){},
iI:function iI(){},
id:function id(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ie:function ie(a){this.a=a},
E:function E(){},
cD:function cD(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
dq:function dq(){},
ds:function ds(){},
dt:function dt(){},
du:function du(){},
dv:function dv(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
dK:function dK(){},
dL:function dL(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
cd:function cd(){},
ce:function ce(){},
dR:function dR(){},
dS:function dS(){},
dW:function dW(){},
dZ:function dZ(){},
e_:function e_(){},
cf:function cf(){},
cg:function cg(){},
e1:function e1(){},
e2:function e2(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){}},T={
T:function(a){var u=new T.h_()
u.dP(a)
return u},
ej:function ej(){},
cE:function cE(){},
cP:function cP(){},
as:function as(){this.a=null},
h_:function h_(){this.a=null},
kc:function(a){var u=new T.ho()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
ct:function ct(){var _=this
_.ch=_.Q=_.z=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cu:function cu(a,b){this.c=a
this.d=b
this.b=null},
d8:function d8(){},
hn:function hn(){},
ho:function ho(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hp:function hp(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hq:function hq(a){var _=this
_.a=a
_.e=_.d=_.c=null},
hr:function hr(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hs:function hs(a,b,c){this.a=a
this.b=b
this.c=c}},R={d4:function d4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},db:function db(a,b,c){this.a=a
this.b=b
this.c=c},dc:function dc(a){this.b=a
this.c=null},hv:function hv(){this.c=this.b=this.a=null},dd:function dd(a){this.b=a
this.a=this.c=null}},F={eo:function eo(){this.b=this.a=null},ep:function ep(a,b){this.a=a
this.b=b},fM:function fM(a){this.a=a
this.c=this.b=null},
iO:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
ch:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.x(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.x(u+a3,t+a1,s+a2)
q=new V.x(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.x(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.iO(i)
l=F.iO(j.b)
k=F.mM(d,a0,new F.iN(j,F.iO(j.c),F.iO(j.d),l,m,c),b)
if(k!=null)a.hf(k)},
mM:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.jq()
t=H.b([],[F.br])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.hT(g,g,new V.X(p,0,0,1),g,g,new V.V(r,1),g,g,0)
q.k(0,o)
c.$3(o,r,0)
t.push(o.bK(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.hT(g,g,new V.X(j,i,h,1),g,g,new V.V(r,m),g,g,0)
k.k(0,o)
c.$3(o,r,n)
t.push(o.bK(d))}}u.d.fK(a+1,b+1,t)
return u},
bL:function(a,b,c){var u=new F.aH(),t=a.a
if(t==null)H.q(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.q(P.o("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.Z()
return u},
lc:function(a,b){var u=new F.bQ(),t=a.a
if(t==null)H.q(P.o("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.q(P.o("May not create a line with vertices attached to different shapes."))
u.a=a
a.c.b.push(u)
u.b=b
b.c.c.push(u)
u.a.a.c.b.push(u)
u.a.a.Z()
return u},
jq:function(){var u=new F.h0(),t=new F.hU(u)
t.b=!1
t.c=H.b([],[F.br])
u.a=t
t=new F.h3(u)
t.b=H.b([],[F.bX])
u.b=t
t=new F.h2(u)
t.b=H.b([],[F.bQ])
u.c=t
t=new F.h1(u)
t.b=H.b([],[F.aH])
u.d=t
u.e=null
return u},
hT:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.br(),r=new F.hZ()
r.b=H.b([],[F.bX])
s.b=r
r=new F.hY()
u=[F.bQ]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.hV()
u=[F.aH]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.kR()
s.e=0
r=$.a4()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aC().a)!==0?e:t
s.x=(u&$.aB().a)!==0?b:t
s.y=(u&$.b6().a)!==0?f:t
s.z=(u&$.aD().a)!==0?g:t
s.Q=(u&$.kS().a)!==0?c:t
s.ch=(u&$.bB().a)!==0?i:0
s.cx=(u&$.aA().a)!==0?a:t
return s},
iN:function iN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aH:function aH(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bQ:function bQ(){this.b=this.a=null},
bX:function bX(){this.a=null},
h0:function h0(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h1:function h1(a){this.a=a
this.b=null},
h2:function h2(a){this.a=a
this.b=null},
h3:function h3(a){this.a=a
this.b=null},
br:function br(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i0:function i0(a){this.a=a},
i_:function i_(a){this.a=a},
hU:function hU(a){this.a=a
this.c=this.b=null},
hV:function hV(){this.d=this.c=this.b=null},
hW:function hW(a,b){this.a=a
this.b=b},
hX:function hX(a,b){this.a=a
this.b=b},
hY:function hY(){this.c=this.b=null},
hZ:function hZ(){this.b=null}},O={
je:function(a){var u=new O.ai([a])
u.b_(a)
return u},
ai:function ai(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bS:function bS(){this.b=this.a=null},
cQ:function cQ(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fo:function fo(a,b){this.a=a
this.b=b},
fp:function fp(){},
fq:function fq(a,b){this.a=a
this.b=b},
fr:function fr(){},
fs:function fs(a,b){this.a=a
this.b=b},
ft:function ft(){},
fi:function fi(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bR:function bR(){},
fj:function fj(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ak:function ak(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fl:function fl(){var _=this
_.e=_.d=_.c=_.b=null},
fm:function fm(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fn:function fn(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d0:function d0(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h8:function h8(){this.c=this.b=this.a=null},
d7:function d7(){}},E={
bK:function(a){var u,t=new E.aq()
t.a=""
t.b=!0
u=O.je(E.aq)
t.y=u
u.aK(t.ghg(),t.ghj())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sci(0,a)
t.saJ(null)
t.sc5(null)
return t},
lw:function(a,b){var u=new E.fS(a)
u.dO(a,b)
return u},
lC:function(a,b,c,d,e){var u,t,s=J.L(a)
if(!!s.$ibb)return E.kd(a,!0,!0,!0,!1)
u=W.jd()
t=u.style
t.width="100%"
t.height="100%"
s.gcV(a).k(0,u)
return E.kd(u,!0,!0,!0,!1)},
kd:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.d9(),p=C.f.ce(a,"webgl2",P.le(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.q(P.o("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.lw(p,a)
u=new T.hq(p)
p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new F.eo()
u.b=u.a=0
q.r=u
u=new X.dh(a)
t=new X.f6()
t.c=new X.a1(!1,!1,!1)
t.d=P.lf(P.z)
u.b=t
t=new X.fA(u)
t.f=0
t.r=V.at()
t.x=V.at()
t.ch=t.Q=1
u.c=t
t=new X.fc(u)
t.r=0
t.x=V.at()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hw(u)
t.f=V.at()
t.r=V.at()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.d6,P.N]])
u.z=t
s=document
t.push(W.P(s,"contextmenu",u.geM(),!1))
u.z.push(W.P(a,"focus",u.geS(),!1))
u.z.push(W.P(a,"blur",u.geG(),!1))
u.z.push(W.P(s,"keyup",u.geW(),!1))
u.z.push(W.P(s,"keydown",u.geU(),!1))
u.z.push(W.P(a,"mousedown",u.gf_(),!1))
u.z.push(W.P(a,"mouseup",u.gf3(),!1))
u.z.push(W.P(a,r,u.gf1(),!1))
t=u.z
W.jh(a)
W.jh(a)
t.push(W.P(a,W.jh(a),u.gf5(),!1))
u.z.push(W.P(s,r,u.geO(),!1))
u.z.push(W.P(s,"mouseup",u.geQ(),!1))
u.z.push(W.P(s,"pointerlockchange",u.gf7(),!1))
u.z.push(W.P(a,"touchstart",u.gfn(),!1))
u.z.push(W.P(a,"touchend",u.gfj(),!1))
u.z.push(W.P(a,"touchmove",u.gfl(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a7(Date.now(),!1)
q.db=0
q.cM()
return q},
eu:function eu(){},
aq:function aq(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fS:function fS(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fT:function fT(a){this.a=a},
fU:function fU(a){this.a=a},
fV:function fV(a){this.a=a},
d9:function d9(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ht:function ht(a){this.a=a}},Z={
jv:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ci(c)),35044)
a.bindBuffer(b,null)
return new Z.dm(b,u)},
aa:function(a){return new Z.ax(a)},
dm:function dm(a,b){this.a=a
this.b=b},
cq:function cq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
c7:function c7(a){this.a=a},
ba:function ba(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
be:function be(a,b,c){this.a=a
this.b=b
this.c=c},
ax:function ax(a){this.a=a}},D={
w:function(){var u=new D.bd()
u.d=0
return u},
ex:function ex(){},
bd:function bd(){var _=this
_.d=_.c=_.b=_.a=null},
eQ:function eQ(a){this.a=a},
eR:function eR(a){this.a=a},
Q:function Q(){this.b=null},
aM:function aM(){this.b=null},
aN:function aN(){this.b=null},
p:function p(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
jN:function(a,b){var u,t,s=new D.bc()
s.c=new V.C(1,1,1)
s.a=V.lF()
s.d=V.ju()
s.e=V.lE()
u=s.b
s.b=b
b.gl().k(0,s.gdR())
t=new D.p("mover",u,s.b)
t.b=!0
s.ao(t)
if(!s.c.n(0,a)){u=s.c
s.c=a
t=new D.p("color",u,a)
t.b=!0
s.ao(t)}return s},
bc:function bc(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a0:function a0(){},
cK:function cK(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
fO:function fO(){},
hc:function hc(){}},X={cr:function cr(a,b){this.a=a
this.b=b},cJ:function cJ(a,b){this.a=a
this.b=b},f6:function f6(){var _=this
_.d=_.c=_.b=_.a=null},cN:function cN(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fc:function fc(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},a8:function a8(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fA:function fA(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bT:function bT(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fP:function fP(){},c1:function c1(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hw:function hw(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dh:function dh(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jj:function(a,b){var u=new X.eZ(),t=new V.X(0,0,0,1)
u.a=t
u.b=a
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.jp()
u.r=t
return u},
k0:function(a){var u,t,s=new X.cW()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gl().k(0,s.ge3())
t=new D.p("mover",u,s.b)
t.b=!0
s.W(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.t().a)){s.c=1.0471975511965976
t=new D.p("fov",t,1.0471975511965976)
t.b=!0
s.W(t)}t=s.d
if(!(Math.abs(t-0.1)<$.t().a)){s.d=0.1
t=new D.p("near",t,0.1)
t.b=!0
s.W(t)}t=s.e
if(!(Math.abs(t-2000)<$.t().a)){s.e=2000
t=new D.p("far",t,2000)
t.b=!0
s.W(t)}return s},
et:function et(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jc:function jc(){},
eZ:function eZ(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f0:function f0(){this.b=this.a=null},
cW:function cW(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hj:function hj(){}},V={
l4:function(a,b,c){var u,t,s,r,q,p,o,n
a*=6
u=C.b.aF(a)
t=a-u
s=b*(1-c)
r=b*(1-c*t)
q=b*(1-c*(1-t))
switch(u){case 0:p=b>1?1:b
if(q<0)o=0
else o=q>1?1:q
if(s<0)n=0
else n=s>1?1:s
return new V.C(p,o,n)
case 1:if(r<0)p=0
else p=r>1?1:r
o=b>1?1:b
if(s<0)n=0
else n=s>1?1:s
return new V.C(p,o,n)
case 2:if(s<0)p=0
else p=s>1?1:s
o=b>1?1:b
if(q<0)n=0
else n=q>1?1:q
return new V.C(p,o,n)
case 3:if(s<0)p=0
else p=s>1?1:s
if(r<0)o=0
else o=r>1?1:r
n=b>1?1:b
return new V.C(p,o,n)
case 4:if(q<0)p=0
else p=q>1?1:q
if(s<0)o=0
else o=s>1?1:s
n=b>1?1:b
return new V.C(p,o,n)
default:p=b>1?1:b
if(s<0)o=0
else o=s>1?1:s
if(r<0)n=0
else n=r>1?1:r
return new V.C(p,o,n)}},
cs:function(a,b,c,d){var u=a/255,t=b/255,s=c/255,r=d/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.X(u,t,s,r)},
j8:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.b.dE(a-b,u)
return(a<0?a+u:a)+b},
y:function(a,b,c){if(a==null)return C.c.ac("null",c)
return C.c.ac(C.b.dB(Math.abs(a-0)<$.t().a?0:a,b),c+b+1)},
bx:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.u])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.m)(a),++s){r=V.y(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.c(o,q)
u=C.c.ac(o[q],t)
p=o.length
if(q>=p)return H.c(o,q)
o[q]=u}return o},
cl:function(a){return C.b.hI(Math.pow(2,C.i.aF(Math.log(H.mk(a))/Math.log(2))))},
bj:function(){var u=$.jZ
return u==null?$.jZ=V.al(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
al:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ac(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lk:function(a,b,c){return V.al(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lj:function(a,b,c){return V.al(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
jV:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.al(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
jW:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.al(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
jX:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.al(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
jY:function(a,b,c,d){d=V.ju()
return V.jU(V.k3(),d,new V.x(a,b,c))},
jU:function(a,b,c){var u=c.t(0,Math.sqrt(c.w(c))),t=b.aT(u),s=t.t(0,Math.sqrt(t.w(t))),r=u.aT(s),q=new V.x(a.a,a.b,a.c),p=s.L(0).w(q),o=r.L(0).w(q),n=u.L(0).w(q)
return V.al(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
at:function(){var u=$.k2
return u==null?$.k2=new V.V(0,0):u},
k3:function(){var u=$.bY
return u==null?$.bY=new V.W(0,0,0):u},
jp:function(){var u=$.k9
return u==null?$.k9=V.k8(0,0,1,1):u},
k8:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cY(a,b,c,d)},
dl:function(){var u=$.kk
return u==null?$.kk=new V.x(0,0,0):u},
lE:function(){var u=$.hQ
return u==null?$.hQ=new V.x(-1,0,0):u},
ju:function(){var u=$.hR
return u==null?$.hR=new V.x(0,1,0):u},
lF:function(){var u=$.hS
return u==null?$.hS=new V.x(0,0,1):u},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
X:function X(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eP:function eP(a){this.a=a},
cR:function cR(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ac:function ac(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
V:function V(a,b){this.a=a
this.b=b},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
au:function au(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cY:function cY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
A:function A(a,b){this.a=a
this.b=b},
x:function x(a,b,c){this.a=a
this.b=b
this.c=c},
mJ:function(a){P.lD(C.C,new V.j5(a))},
ly:function(a){var u=new V.h4()
u.dQ(a,!0)
return u},
j5:function j5(a){this.a=a},
h4:function h4(){this.b=this.a=null},
h6:function h6(a){this.a=a},
h5:function h5(a){this.a=a}},U={
jf:function(){var u=new U.ez()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
jg:function(a){var u=new U.bI()
u.a=a
return u},
jQ:function(){var u=new U.bM()
u.b_(U.a2)
u.aK(u.gdT(),u.gfb())
u.e=null
u.f=V.bj()
u.r=0
return u},
ez:function ez(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bI:function bI(){this.b=this.a=null},
bM:function bM(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a2:function a2(){},
c0:function c0(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
di:function di(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dj:function dj(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dk:function dk(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
jP:function(){var u,t,s=new M.cB()
s.a=!0
u=O.je(E.aq)
s.e=u
u.aK(s.geI(),s.geK())
s.y=s.x=s.r=s.f=null
t=X.jj(!0,null)
s.saD(null)
s.saI(0,t)
return s},
cv:function cv(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cw:function cw(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cB:function cB(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ae:function ae(){},
kz:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6="testCanvas",b7=null,b8="modifiers",b9=V.ly("Test 047"),c0=W.jd()
c0.className="pageLargeCanvas"
c0.id=b6
b9.a.appendChild(c0)
u=[P.u]
b9.cS(H.b(["Test of the audio player. When you click on a cube it will ","play the same audio at slightly different rate and volume."],u))
b9.cS(H.b(["\xab[Back to Tests|../]"],u))
t=document.getElementById(b6)
if(t==null)H.q(P.o("Failed to find an element with the identifier, testCanvas."))
s=E.lC(t,!0,!0,!0,!1)
r=U.jQ()
b9=s.x
u=new U.dj()
q=U.jf()
q.scd(0,!0)
q.sc2(6.283185307179586)
q.sc4(0)
q.sa3(0,0)
q.sc3(100)
q.sN(0)
q.sbL(0.5)
u.b=q
p=u.gaB()
q.gl().k(0,p)
q=U.jf()
q.scd(0,!0)
q.sc2(6.283185307179586)
q.sc4(0)
q.sa3(0,0)
q.sc3(100)
q.sN(0)
q.sbL(0.5)
u.c=q
q.gl().k(0,p)
u.d=null
u.r=u.f=u.e=!1
u.y=u.x=2.5
u.Q=4
u.ch=u.cx=!1
u.db=u.cy=0
u.dx=null
u.dy=0
u.fx=u.fr=null
o=new X.a1(!1,!1,!1)
n=u.d
u.d=o
q=new D.p(b8,n,o)
q.b=!0
u.D(q)
q=u.f
if(q!==!1){u.f=!1
q=new D.p("invertX",q,!1)
q.b=!0
u.D(q)}q=u.r
if(q!==!1){u.r=!1
q=new D.p("invertY",q,!1)
q.b=!0
u.D(q)}u.as(b9)
r.k(0,u)
b9=s.x
u=new U.di()
q=U.jf()
q.scd(0,!0)
q.sc2(6.283185307179586)
q.sc4(0)
q.sa3(0,0)
q.sc3(100)
q.sN(0)
q.sbL(0.2)
u.b=q
q.gl().k(0,u.gaB())
u.c=null
u.d=!1
u.e=2.5
u.r=4
u.x=u.y=!1
u.z=0
u.Q=null
u.ch=0
u.cy=u.cx=null
o=new X.a1(!0,!1,!1)
n=u.c
u.c=o
q=new D.p(b8,n,o)
q.b=!0
u.D(q)
u.as(b9)
r.k(0,u)
b9=s.x
u=new U.dk()
u.c=0.01
u.e=u.d=0
o=new X.a1(!1,!1,!1)
u.b=o
q=new D.p(b8,b7,o)
q.b=!0
u.D(q)
u.as(b9)
r.k(0,u)
r.k(0,U.jg(V.lk(0,0,5)))
m=X.k0(r)
l=s.f.df("../resources/diceColor")
k=new O.cQ()
b9=O.je(V.ac)
k.e=b9
b9.aK(k.geC(),k.geE())
b9=new O.ak(k,"emission")
b9.c=new A.S(!1,!1,!1)
b9.f=new V.C(0,0,0)
k.f=b9
b9=new O.ak(k,"ambient")
b9.c=new A.S(!1,!1,!1)
b9.f=new V.C(0,0,0)
k.r=b9
b9=new O.ak(k,"diffuse")
b9.c=new A.S(!1,!1,!1)
b9.f=new V.C(0,0,0)
k.x=b9
b9=new O.ak(k,"invDiffuse")
b9.c=new A.S(!1,!1,!1)
b9.f=new V.C(0,0,0)
k.y=b9
b9=new O.fn(k,"specular")
b9.c=new A.S(!1,!1,!1)
b9.f=new V.C(0,0,0)
b9.ch=100
k.z=b9
b9=new O.fj(k,"bump")
b9.c=new A.S(!1,!1,!1)
k.Q=b9
k.ch=null
b9=new O.ak(k,"reflect")
b9.c=new A.S(!1,!1,!1)
b9.f=new V.C(0,0,0)
k.cx=b9
b9=new O.fm(k,"refract")
b9.c=new A.S(!1,!1,!1)
b9.f=new V.C(0,0,0)
b9.ch=1
k.cy=b9
b9=new O.fi(k,"alpha")
b9.c=new A.S(!1,!1,!1)
b9.f=1
k.db=b9
b9=new D.cK()
b9.b_(D.a0)
b9.e=H.b([],[D.bc])
b9.f=H.b([],[D.fO])
b9.r=H.b([],[D.hc])
b9.y=b9.x=null
b9.cf(b9.geA(),b9.gf9(),b9.gfd())
k.dx=b9
u=new O.fl()
u.b=new V.X(0,0,0,0)
u.c=1
u.d=10
u.e=!1
k.dy=u
u=b9.x
b9=u==null?b9.x=D.w():u
b9.k(0,k.gft())
b9=k.dx
u=b9.y
b9=u==null?b9.y=D.w():u
b9.k(0,k.gay())
k.fr=null
b9=k.dx
u=U.jg(V.jY(-1,-1,-1,b7))
b9.k(0,D.jN(new V.C(1,0.9,0.9),u))
b9=k.dx
u=U.jg(V.jY(1,1,2,b7))
b9.k(0,D.jN(new V.C(0.2,0.2,0.35),u))
b9=k.r
b9.saR(0,new V.C(0.2,0.2,0.2))
k.r.saY(l)
b9=k.x
b9.saR(0,new V.C(0.8,0.8,0.8))
k.x.saY(l)
b9=k.z
b9.saR(0,new V.C(0.7,0.7,0.7))
b9=k.z
b9.bz(new A.S(!0,!1,b9.c.c))
b9.cO(10)
k.Q.saY(s.f.df("../resources/diceBumpMap"))
j=s.r.hd("../resources/tink.mp3")
i=H.b([],[U.c0])
h=H.b([],[V.X])
g=F.jq()
F.ch(g,b7,b7,1,1,1,0,0,1)
F.ch(g,b7,b7,1,1,0,1,0,3)
F.ch(g,b7,b7,1,1,0,0,1,2)
F.ch(g,b7,b7,1,1,-1,0,0,0)
F.ch(g,b7,b7,1,1,0,-1,0,0)
F.ch(g,b7,b7,1,1,0,0,-1,3)
g.at()
f=E.bK(g)
e=E.bK(b7)
d=E.bK(b7)
for(c=-1.6;c<=1.7;c+=0.8)for(b=-1.6;b<=1.7;b+=0.8)for(a=-1.6;a<=1.7;a+=0.8){a0=new V.ac(1,0,0,c,0,1,0,b,0,0,1,a,0,0,0,1).p(0,new V.ac(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
r=new U.c0()
r.r=r.f=r.e=r.d=r.c=r.b=r.a=0
r.sdC(0)
r.sds(0,0)
r.sdv(0)
b9=r.d
if(!(Math.abs(b9-0)<$.t().a)){r.d=0
b9=new D.p("deltaYaw",b9,0)
b9.b=!0
u=r.y
if(u!=null)u.u(b9)}r.sbM(0)
r.sbN(0)
i.push(r)
a1=U.jQ()
b9=[H.jD(a1,"ai",0)]
if(a1.ai(H.b([r],b9))){u=a1.a
a2=u.length
u.push(r)
u=H.b([r],b9)
q=a1.c
if(q!=null)q.$2(a2,u)}u=new U.bI()
u.sT(0,a0)
if(a1.ai(H.b([u],b9))){q=a1.a
a2=q.length
q.push(u)
b9=H.b([u],b9)
u=a1.c
if(u!=null)u.$2(a2,b9)}a3=E.bK(b7)
a3.saJ(k)
a3.sc5(a1)
b9=a3.y
u=[H.b4(b9,0)]
if(b9.ai(H.b([f],u))){q=b9.a
a2=q.length
q.push(f)
u=H.b([f],u)
b9=b9.c
if(b9!=null)b9.$2(a2,u)}b9=e.y
u=[H.b4(b9,0)]
if(b9.ai(H.b([a3],u))){q=b9.a
a2=q.length
q.push(a3)
u=H.b([a3],u)
b9=b9.c
if(b9!=null)b9.$2(a2,u)}b9=V.l4(h.length/125,1,1)
l=new V.X(Math.floor(b9.a*255)/255,Math.floor(b9.b*255)/255,Math.floor(b9.c*255)/255,Math.floor(255)/255)
h.push(l)
a4=E.bK(b7)
b9=new O.h8()
b9.b=l
a4.saJ(b9)
a4.sc5(a1)
b9=a4.y
u=[H.b4(b9,0)]
if(b9.ai(H.b([f],u))){q=b9.a
a2=q.length
q.push(f)
u=H.b([f],u)
b9=b9.c
if(b9!=null)b9.$2(a2,u)}b9=d.y
u=[H.b4(b9,0)]
if(b9.ai(H.b([a4],u))){q=b9.a
a2=q.length
q.push(a4)
u=H.b([a4],u)
b9=b9.c
if(b9!=null)b9.$2(a2,u)}}a5=new X.et()
a5.d=a5.c=a5.b=a5.a=512
a5.e=!0
a5.f=!1
a5.x=a5.r=1
a5.ch=T.kc(b7)
a5.cx=new V.X(0,0,0,1)
a5.cy=!0
a5.db=2000
a5.dx=!0
a5.dy=V.jp()
a5.sae(0,512)
a5.saa(0,512)
l=new V.X(0,0,0,1)
if(!a5.cx.n(0,l)){n=a5.cx
a5.cx=l
b9=new D.p("color",n,l)
b9.b=!0
a5.W(b9)}b9=a5.db
if(!(Math.abs(b9-2000)<$.t().a)){a5.db=2000
b9=new D.p("depth",b9,2000)
b9.b=!0
a5.W(b9)}if(!a5.f){a5.f=!0
b9=new D.p("autoResize",!1,!0)
b9.b=!0
a5.W(b9)}b9=a5.r
if(!(Math.abs(b9-0.5)<$.t().a)){a5.r=0.5
b9=new D.p("autoResizeScalarX",b9,0.5)
b9.b=!0
a5.W(b9)}b9=a5.x
if(!(Math.abs(b9-0.5)<$.t().a)){a5.x=0.5
b9=new D.p("autoResizeScalarY",b9,0.5)
b9.b=!0
a5.W(b9)}a6=V.jp()
if(!J.G(a5.dy,a6)){n=a5.dy
a5.dy=a6
b9=new D.p("region",n,a6)
b9.b=!0
a5.W(b9)}a7=M.jP()
a7.e.k(0,d)
a7.saI(0,a5)
a7.saD(m)
a8=X.jj(!1,b7)
a9=M.jP()
a9.e.k(0,e)
a9.saI(0,a8)
a9.saD(m)
b9=s.f.dg("../resources/maskonaive",".jpg")
b0=new M.cw()
b0.a=!0
u=E.bK(b7)
g=F.jq()
q=g.a
p=new V.x(-1,-1,1)
p=p.t(0,Math.sqrt(p.w(p)))
b1=q.b7(new V.au(1,2,4,6),V.cs(255,0,0,255),new V.W(-1,-1,0),new V.V(0,1),p,b7)
p=g.a
q=new V.x(1,-1,1)
q=q.t(0,Math.sqrt(q.w(q)))
b2=p.b7(new V.au(0,3,4,6),V.cs(0,0,255,255),new V.W(1,-1,0),new V.V(1,1),q,b7)
q=g.a
p=new V.x(1,1,1)
p=p.t(0,Math.sqrt(p.w(p)))
b3=q.b7(new V.au(0,2,5,6),V.cs(0,128,0,255),new V.W(1,1,0),new V.V(1,0),p,b7)
p=g.a
q=V.at()
b4=new V.x(-1,1,1)
b4=b4.t(0,Math.sqrt(b4.w(b4)))
b5=p.b7(new V.au(0,2,4,7),V.cs(255,255,0,255),new V.W(-1,1,0),q,b4,b7)
g.d.fJ(H.b([b1,b2,b3,b5],[F.br]))
g.at()
u.sci(0,g)
b0.e=u
b0.saD(b7)
b0.saI(0,b7)
b0.saJ(b7)
u=new O.d0()
u.b=1.0471975511965976
u.d=new V.C(1,1,1)
n=u.c
u.c=b9
b9.gl().k(0,u.gay())
b9=new D.p("boxTexture",n,u.c)
b9.b=!0
u.P(b9)
b0.saJ(u)
b0.saI(0,a8)
b0.saD(m)
b9=s.z
if(b9==null)b9=s.z=D.w()
b9.k(0,new M.j0(i))
b9=s.f
u=s.x
q=a5.ch
p=new T.ct()
p.a=b9
p.z=4
p.ch=p.Q=!1
o=new X.a1(!1,!1,!1)
p.c=o
b9=new D.p(b8,b7,o)
b9.b=!0
p.b0(b9)
b9=p.d
if(b9!==q){if(b9!=null)b9.gl().M(0,p.gcs())
n=p.d
p.d=q
q.gl().k(0,p.gcs())
b9=new D.p("texture",n,p.d)
b9.b=!0
p.b0(b9)}p.as(u)
b9=p.x
if(b9==null)b9=p.x=D.w()
b9.k(0,new M.j1(h,i,j))
b9=M.ae
u=H.b([a7,b0,a9],[b9])
q=new M.cv()
q.b_(b9)
q.e=!0
q.f=!1
q.r=null
q.aK(q.gff(),q.gfh())
q.bC(0,u)
b9=s.d
if(b9!==q){if(b9!=null)b9.gl().M(0,s.gcp())
s.d=q
q.gl().k(0,s.gcp())
s.cq()}V.mJ(s)},
j0:function j0(a){this.a=a},
j1:function j1(a,b,c){this.a=a
this.b=b
this.c=c}},A={
lh:function(a,b){var u=a.aU,t=new A.fh(b,u)
t.bg(b,u)
t.dN(a,b)
return t},
li:function(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="MaterialLight_"+a1.gag(a1)+a2.gag(a2)+a3.gag(a3)+a4.gag(a4)+a5.gag(a5)+a6.gag(a6)+a7.gag(a7)+a8.gag(a8)+a9.gag(a9)+"_"
e+=a?"1":"0"
e+=b?"1":"0"
e+=c?"1":"0"
e=e+"0_"+a0
u=b0.length
if(u>0){e+="_Dir"
for(t=0;t<b0.length;b0.length===u||(0,H.m)(b0),++t)e+="_"+H.e(b0[t].a)}u=b1.length
if(u>0){e+="_Point"
for(t=0;t<b1.length;b1.length===u||(0,H.m)(b1),++t)e+="_"+H.e(b1[t].a)}u=b2.length
if(u>0){e+="_Spot"
for(t=0;t<b2.length;b2.length===u||(0,H.m)(b2),++t)e+="_"+H.e(b2[t].a)}for(u=b0.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b0[t].b
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
f=$.a4()
if(k){u=$.aC()
f=new Z.ax(f.a|u.a)}if(j){u=$.aB()
f=new Z.ax(f.a|u.a)}if(i){u=$.aD()
f=new Z.ax(f.a|u.a)}if(h){u=$.aA()
f=new Z.ax(f.a|u.a)}return new A.fk(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,s,p,l,p,r,g,!0,!1,!1,o,r,m,k,j,!1,i,h,!1,b,c,!1,a0,e.charCodeAt(0)==0?e:e,f)},
iP:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
iQ:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.iP(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.j6(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
lV:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iP(b,t,"emission")
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
lS:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.iQ(b,t,"ambient")
b.a+="\n"},
lT:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.iQ(b,t,"diffuse")
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
lW:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.iQ(b,t,"invDiffuse")
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
m1:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.iQ(b,t,"specular")
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
lY:function(a,b){var u,t,s
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
m_:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iP(b,t,"reflect")
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
m0:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iP(b,t,"refract")
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
lU:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.j6(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.an()
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
r=[P.u]
o=H.b([],r)
n=a.b
if(!n.a)n=n.c
else n=!0
if(n)o.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.b([],r)
r=a.c
if(!r.a)r=r.c
else r=!0
if(r)m.push("diffuse(norm, lit.viewDir)")
r=a.d
if(!r.a)r=r.c
else r=!0
if(r)m.push("invDiffuse(norm, lit.viewDir)")
r=a.e
if(!r.a)r=r.c
else r=!0
if(r)m.push("specular(norm, lit.viewDir)")
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
lZ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.j6(t)
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
if(typeof u!=="number")return u.an()
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
c.a=r+"\n"}r=[P.u]
l=H.b([],r)
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
l=H.b([],r)
o=a.b
if(!o.a)o=o.c
else o=!0
if(o)l.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
l.push("highLight")
m=u?", txtCube":""
if(p)m+=", shadowCube"
o=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
o+="   vec3 intensity = "+t+"Intensity(normDir, lit"+m+");\n"
c.a=o
c.a=o+"   if(length(intensity) > 0.0001) {\n"
k=H.b([],r)
r=a.c
if(!r.a)r=r.c
else r=!0
if(r)k.push("diffuse(norm, normDir)")
r=a.d
if(!r.a)r=r.c
else r=!0
if(r)k.push("invDiffuse(norm, normDir)")
r=a.e
if(!r.a)r=r.c
else r=!0
if(r)k.push("specular(norm, normDir)")
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
m2:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.j6(t)
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
if(typeof u!=="number")return u.an()
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
c.a=u+"\n"}u=[P.u]
j=H.b([],u)
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
j=H.b([],u)
r=a.b
if(!r.a)r=r.c
else r=!0
if(r)j.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
j.push("highLight")
k=m?", txt2D":""
if(p)k+=", shadow2D"
r=c.a+="   vec3 intensity = "+t+"Intensity(lit"+k+");\n"
r+="   if(length(intensity) > 0.0001) {\n"
c.a=r
c.a=r+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
i=H.b([],u)
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)i.push("diffuse(norm, litVec)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)i.push("invDiffuse(norm, litVec)")
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)i.push("specular(norm, litVec)")
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
lX:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.u])
u=a.b
if(!u.a)u=u.c
else u=!0
if(u)t.push("ambientColor")
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)t.push("diffuse(norm, litVec)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)t.push("invDiffuse(norm, litVec)")
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.a.q(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
m3:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.aW("")
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
A.lV(a,i)
A.lS(a,i)
A.lT(a,i)
A.lW(a,i)
A.m1(a,i)
t=a.cy
if(t){r=i.a+="// === Enviromental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.m_(a,i)
A.m0(a,i)}A.lY(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.m)(q),++n)A.lU(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.m)(q),++n)A.lZ(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.m)(q),++n)A.m2(a,q[n],i)
A.lX(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.b([],[P.u])
if(r){i.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
m.push("lightAccum")
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
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.m)(u),++n){r=u[n].h(0)
if(0>=r.length)return H.c(r,0)
i.a+=l+(r[0].toUpperCase()+C.c.aM(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.m)(u),++n){r=u[n].h(0)
if(0>=r.length)return H.c(r,0)
i.a+=l+(r[0].toUpperCase()+C.c.aM(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.m)(u),++n){r=u[n].h(0)
if(0>=r.length)return H.c(r,0)
i.a+=l+(r[0].toUpperCase()+C.c.aM(r,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(!u.a)u=u.c
else u=!0
if(u)m.push("emissionColor()")
u=a.r
if(!u.a)u=u.c
else u=!0
if(u)m.push("reflect(refl)")
u=a.x
if(!u.a)u=u.c
else u=!0
if(u)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
u=i.a+="   vec4 objClr = vec4("+C.a.q(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
m4:function(a,b){var u,t,s
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
m6:function(a,b){var u
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
m5:function(a,b){var u
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
m8:function(a,b){var u,t
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
m9:function(a,b){var u,t
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
m7:function(a,b){var u
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
ma:function(a,b){var u
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
j6:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.c.aM(a,1)},
jt:function(a,b,c,d,e){var u=new A.hC(a,c,e)
u.f=d
P.lg(d,0,P.z)
return u},
co:function co(a,b,c){this.a=a
this.b=b
this.c=c},
em:function em(a){this.a=a},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
fh:function fh(a,b){var _=this
_.d0=_.hS=_.d_=_.b8=_.aU=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.i_=_.hZ=_.hY=_.bW=_.bV=_.bU=_.bT=_.bS=_.bR=_.dd=_.hX=_.dc=_.da=_.hW=_.d9=_.d8=_.d7=_.hV=_.d6=_.d5=_.d4=_.hU=_.d3=_.d2=_.hT=_.d1=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cy:function cy(a,b){this.a=a
this.b=b},
cX:function cX(a,b){this.a=a
this.b=b},
d2:function d2(a,b){this.a=a
this.b=b},
fk:function fk(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.b8=b4},
c2:function c2(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c4:function c4(a,b,c,d,e,f,g,h,i,j){var _=this
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
c5:function c5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
h7:function h7(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h9:function h9(a,b){var _=this
_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
de:function de(){},
hH:function hH(a){this.a=a},
df:function df(a,b,c){this.a=a
this.c=b
this.d=c},
hE:function hE(a,b,c){this.a=a
this.c=b
this.d=c},
hF:function hF(a,b,c){this.a=a
this.c=b
this.d=c},
hG:function hG(a,b,c){this.a=a
this.c=b
this.d=c},
hC:function hC(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
O:function O(a,b,c){this.a=a
this.c=b
this.d=c},
hD:function hD(a,b,c){this.a=a
this.c=b
this.d=c},
B:function B(a,b,c){this.a=a
this.c=b
this.d=c},
bp:function bp(a,b,c){this.a=a
this.c=b
this.d=c},
hI:function hI(a,b,c){this.a=a
this.c=b
this.d=c},
c3:function c3(a,b,c){this.a=a
this.c=b
this.d=c},
Z:function Z(a,b,c){this.a=a
this.c=b
this.d=c},
bq:function bq(a,b,c){this.a=a
this.c=b
this.d=c},
R:function R(a,b,c){this.a=a
this.c=b
this.d=c}}
var w=[C,H,J,P,W,T,R,F,O,E,Z,D,X,V,U,M,A]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jn.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gG:function(a){return H.bZ(a)},
h:function(a){return"Instance of '"+H.e(H.c_(a))+"'"}}
J.f3.prototype={
h:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$ib3:1}
J.cH.prototype={
n:function(a,b){return null==b},
h:function(a){return"null"},
gG:function(a){return 0}}
J.cI.prototype={
gG:function(a){return 0},
h:function(a){return String(a)}}
J.fL.prototype={}
J.c6.prototype={}
J.aP.prototype={
h:function(a){var u=a[$.kG()]
if(u==null)return this.dL(a)
return"JavaScript function for "+H.e(J.a5(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aO.prototype={
M:function(a,b){var u
if(!!a.fixed$length)H.q(P.a3("remove"))
for(u=0;u<a.length;++u)if(J.G(a[u],b)){a.splice(u,1)
return!0}return!1},
bC:function(a,b){var u,t
if(!!a.fixed$length)H.q(P.a3("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.m)(b),++t)a.push(b[t])},
I:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.f(P.bH(a))}},
q:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.c(r,u)
r[u]=t}return r.join(b)},
hb:function(a){return this.q(a,"")},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
dI:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.an(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.an(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.b4(a,0)])
return H.b(a.slice(b,c),[H.b4(a,0)])},
gc_:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.l9())},
bf:function(a,b){if(!!a.immutable$list)H.q(P.a3("sort"))
H.d1(a,0,a.length-1,b)},
aj:function(a,b){var u
for(u=0;u<a.length;++u)if(J.G(a[u],b))return!0
return!1},
h:function(a){return P.jk(a,"[","]")},
gR:function(a){return new J.U(a,a.length)},
gG:function(a){return H.bZ(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.q(P.a3("set length"))
if(b<0)throw H.f(P.an(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.f(H.bw(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.q(P.a3("indexed set"))
if(b>=a.length||b<0)throw H.f(H.bw(a,b))
a[b]=c},
$ij:1}
J.jm.prototype={}
J.U.prototype={
gH:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.m(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bP.prototype={
fS:function(a,b){var u
if(typeof b!=="number")throw H.f(H.b2(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb9(b)
if(this.gb9(a)===u)return 0
if(this.gb9(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb9:function(a){return a===0?1/a<0:a<0},
hI:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.a3(""+a+".toInt()"))},
aF:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.a3(""+a+".floor()"))},
U:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.a3(""+a+".round()"))},
dB:function(a,b){var u
if(b>20)throw H.f(P.an(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb9(a))return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
dE:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dM:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cP(a,b)},
Y:function(a,b){return(a|0)===a?a/b|0:this.cP(a,b)},
cP:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.a3("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
b5:function(a,b){var u
if(a>0)u=this.fB(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fB:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$iab:1}
J.cG.prototype={$iz:1}
J.cF.prototype={}
J.bf.prototype={
bJ:function(a,b){if(b<0)throw H.f(H.bw(a,b))
if(b>=a.length)H.q(H.bw(a,b))
return a.charCodeAt(b)},
b1:function(a,b){if(b>=a.length)throw H.f(H.bw(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.f(P.ja(b,null,null))
return a+b},
cl:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.fR(b,null))
if(b>c)throw H.f(P.fR(b,null))
if(c>a.length)throw H.f(P.fR(c,null))
return a.substring(b,c)},
aM:function(a,b){return this.cl(a,b,null)},
p:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.A)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ac:function(a,b){var u=b-a.length
if(u<=0)return a
return this.p(" ",u)+a},
h:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
$iu:1}
H.M.prototype={
gj:function(a){return this.a.length},
i:function(a,b){return C.c.bJ(this.a,b)},
$an:function(){return[P.z]},
$aj:function(){return[P.z]}}
H.eN.prototype={}
H.cM.prototype={
gH:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.jB(s),q=r.gj(s)
if(t.b!==q)throw H.f(P.bH(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.E(s,u);++t.c
return!0}}
H.ff.prototype={
gR:function(a){return new H.fg(J.bC(this.a),this.b)},
gj:function(a){return J.bD(this.a)},
E:function(a,b){return this.b.$1(J.jJ(this.a,b))},
$aj:function(a,b){return[b]}}
H.fg.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.a=u.c.$1(t.gH(t))
return!0}u.a=null
return!1},
gH:function(a){return this.a}}
H.i2.prototype={
gR:function(a){return new H.i3(J.bC(this.a),this.b)}}
H.i3.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(t.$1(u.gH(u)))return!0
return!1},
gH:function(a){var u=this.a
return u.gH(u)}}
H.cC.prototype={}
H.hL.prototype={}
H.dg.prototype={}
H.hA.prototype={
ab:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fH.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f5.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.hK.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.j7.prototype={
$1:function(a){if(!!J.L(a).$iaG)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.dV.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaV:1}
H.bG.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
ghN:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hk.prototype={}
H.he.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.eg(u)+"'"}}
H.bE.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bE))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.bZ(this.a)
else u=typeof t!=="object"?J.b7(t):H.bZ(t)
return(u^H.bZ(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.c_(u))+"'")}}
H.ew.prototype={
h:function(a){return this.a}}
H.fY.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.K.prototype={
gj:function(a){return this.a},
gau:function(a){return new H.cL(this,[H.b4(this,0)])},
cX:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cB(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cB(t,b)}else return s.h9(b)},
h9:function(a){var u=this.d
if(u==null)return!1
return this.bY(this.bt(u,J.b7(a)&0x3ffffff),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b2(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b2(r,b)
s=t==null?null:t.b
return s}else return q.ha(b)},
ha:function(a){var u,t,s=this.d
if(s==null)return
u=this.bt(s,J.b7(a)&0x3ffffff)
t=this.bY(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.ct(u==null?o.b=o.bw():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.ct(t==null?o.c=o.bw():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bw()
r=J.b7(b)&0x3ffffff
q=o.bt(s,r)
if(q==null)o.bA(s,r,[o.bx(b,c)])
else{p=o.bY(q,b)
if(p>=0)q[p].b=c
else q.push(o.bx(b,c))}}},
I:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.f(P.bH(u))
t=t.c}},
ct:function(a,b,c){var u=this.b2(a,b)
if(u==null)this.bA(a,b,this.bx(b,c))
else u.b=c},
bx:function(a,b){var u=this,t=new H.f8(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
bY:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.G(a[t].a,b))return t
return-1},
h:function(a){return P.jT(this)},
b2:function(a,b){return a[b]},
bt:function(a,b){return a[b]},
bA:function(a,b,c){a[b]=c},
ei:function(a,b){delete a[b]},
cB:function(a,b){return this.b2(a,b)!=null},
bw:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bA(t,u,t)
this.ei(t,u)
return t}}
H.f8.prototype={}
H.cL.prototype={
gj:function(a){return this.a.a},
gR:function(a){var u=this.a,t=new H.f9(u,u.r)
t.c=u.e
return t}}
H.f9.prototype={
gH:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bH(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.iX.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.iY.prototype={
$2:function(a,b){return this.a(a,b)}}
H.iZ.prototype={
$1:function(a){return this.a(a)}}
H.f4.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bV.prototype={}
H.cS.prototype={
gj:function(a){return a.length},
$iv:1,
$av:function(){}}
H.bU.prototype={
i:function(a,b){H.b0(b,a,a.length)
return a[b]},
$an:function(){return[P.J]},
$ij:1,
$aj:function(){return[P.J]}}
H.cT.prototype={
$an:function(){return[P.z]},
$ij:1,
$aj:function(){return[P.z]}}
H.fB.prototype={
i:function(a,b){H.b0(b,a,a.length)
return a[b]}}
H.fC.prototype={
i:function(a,b){H.b0(b,a,a.length)
return a[b]}}
H.fD.prototype={
i:function(a,b){H.b0(b,a,a.length)
return a[b]}}
H.fE.prototype={
i:function(a,b){H.b0(b,a,a.length)
return a[b]}}
H.fF.prototype={
i:function(a,b){H.b0(b,a,a.length)
return a[b]}}
H.cU.prototype={
gj:function(a){return a.length},
i:function(a,b){H.b0(b,a,a.length)
return a[b]}}
H.fG.prototype={
gj:function(a){return a.length},
i:function(a,b){H.b0(b,a,a.length)
return a[b]}}
H.c9.prototype={}
H.ca.prototype={}
H.cb.prototype={}
H.cc.prototype={}
P.i6.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:8}
P.i5.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.i7.prototype={
$0:function(){this.a.$0()}}
P.i8.prototype={
$0:function(){this.a.$0()}}
P.e0.prototype={
e1:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ay(new P.iK(this,b),0),a)
else throw H.f(P.a3("`setTimeout()` not found."))},
e2:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ay(new P.iJ(this,a,Date.now(),b),0),a)
else throw H.f(P.a3("Periodic timer."))},
$ida:1}
P.iK.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iJ.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.dM(u,q)}s.c=r
t.d.$1(s)}}
P.ib.prototype={
fU:function(a){var u
if(a==null)a=new P.bW()
u=this.a
if(u.a!==0)throw H.f(P.ka("Future already completed"))
u.e8(a,null)}}
P.i4.prototype={
fT:function(a,b){var u=this.a
if(u.a!==0)throw H.f(P.ka("Future already completed"))
u.e7(b)}}
P.ig.prototype={
he:function(a){if((this.c&15)!==6)return!0
return this.b.b.cb(this.d,a.a)},
h7:function(a){var u=this.e,t=this.b.b
if(H.jA(u,{func:1,args:[P.N,P.aV]}))return t.hA(u,a.a,a.b)
else return t.cb(u,a.a)}}
P.ap.prototype={
dA:function(a,b,c){var u,t=$.I
if(t!==C.e)b=b!=null?P.mc(b,t):b
u=new P.ap($.I,[c])
this.cu(new P.ig(u,b==null?1:3,a,b))
return u},
hH:function(a,b){return this.dA(a,null,b)},
cu:function(a){var u,t=this,s=t.a
if(s<=1){a.a=t.c
t.c=a}else{if(s===2){s=t.c
u=s.a
if(u<4){s.cu(a)
return}t.a=u
t.c=s.c}P.bu(null,null,t.b,new P.ih(t,a))}},
cK:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=p.c
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){u=p.c
q=u.a
if(q<4){u.cK(a)
return}p.a=q
p.c=u.c}o.a=p.b4(a)
P.bu(null,null,p.b,new P.iq(o,p))}},
b3:function(){var u=this.c
this.c=null
return this.b4(u)},
b4:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
ee:function(a){var u,t=this,s=t.$ti
if(H.iT(a,"$iaJ",s,"$aaJ"))if(H.iT(a,"$iap",s,null))P.ik(a,t)
else P.kl(a,t)
else{u=t.b3()
t.a=4
t.c=a
P.bs(t,u)}},
bp:function(a,b){var u=this,t=u.b3()
u.a=8
u.c=new P.b8(a,b)
P.bs(u,t)},
e7:function(a){var u=this
if(H.iT(a,"$iaJ",u.$ti,"$aaJ")){u.ed(a)
return}u.a=1
P.bu(null,null,u.b,new P.ij(u,a))},
ed:function(a){var u=this
if(H.iT(a,"$iap",u.$ti,null)){if(a.a===8){u.a=1
P.bu(null,null,u.b,new P.ip(u,a))}else P.ik(a,u)
return}P.kl(a,u)},
e8:function(a,b){this.a=1
P.bu(null,null,this.b,new P.ii(this,a,b))},
$iaJ:1}
P.ih.prototype={
$0:function(){P.bs(this.a,this.b)}}
P.iq.prototype={
$0:function(){P.bs(this.b,this.a.a)}}
P.il.prototype={
$1:function(a){var u=this.a
u.a=0
u.ee(a)},
$S:8}
P.im.prototype={
$2:function(a,b){this.a.bp(a,b)},
$1:function(a){return this.$2(a,null)},
$S:18}
P.io.prototype={
$0:function(){this.a.bp(this.b,this.c)}}
P.ij.prototype={
$0:function(){var u=this.a,t=u.b3()
u.a=4
u.c=this.b
P.bs(u,t)}}
P.ip.prototype={
$0:function(){P.ik(this.b,this.a)}}
P.ii.prototype={
$0:function(){this.a.bp(this.b,this.c)}}
P.it.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dw(s.d)}catch(r){u=H.b5(r)
t=H.bz(r)
if(o.d){s=o.a.a.c.a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=o.a.a.c
else q.b=new P.b8(u,t)
q.a=!0
return}if(!!J.L(n).$iaJ){if(n instanceof P.ap&&n.a>=4){if(n.a===8){s=o.b
s.b=n.c
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.hH(new P.iu(p),null)
s.a=!1}}}
P.iu.prototype={
$1:function(a){return this.a},
$S:19}
P.is.prototype={
$0:function(){var u,t,s,r,q=this
try{s=q.b
q.a.b=s.b.b.cb(s.d,q.c)}catch(r){u=H.b5(r)
t=H.bz(r)
s=q.a
s.b=new P.b8(u,t)
s.a=!0}}}
P.ir.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=m.a.a.c
r=m.c
if(r.he(u)&&r.e!=null){q=m.b
q.b=r.h7(u)
q.a=!1}}catch(p){t=H.b5(p)
s=H.bz(p)
r=m.a.a.c
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.b8(t,s)
n.a=!0}}}
P.dn.prototype={}
P.d6.prototype={}
P.hh.prototype={}
P.da.prototype={}
P.b8.prototype={
h:function(a){return H.e(this.a)},
$iaG:1}
P.iM.prototype={}
P.iS.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.bW():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.h(0)
throw u}}
P.iC.prototype={
hC:function(a){var u,t,s,r=null
try{if(C.e===$.I){a.$0()
return}P.kp(r,r,this,a)}catch(s){u=H.b5(s)
t=H.bz(s)
P.iR(r,r,this,u,t)}},
hE:function(a,b){var u,t,s,r=null
try{if(C.e===$.I){a.$1(b)
return}P.kq(r,r,this,a,b)}catch(s){u=H.b5(s)
t=H.bz(s)
P.iR(r,r,this,u,t)}},
hF:function(a,b){return this.hE(a,b,null)},
fQ:function(a){return new P.iE(this,a)},
fP:function(a){return this.fQ(a,null)},
bE:function(a){return new P.iD(this,a)},
cT:function(a,b){return new P.iF(this,a,b)},
hz:function(a){if($.I===C.e)return a.$0()
return P.kp(null,null,this,a)},
dw:function(a){return this.hz(a,null)},
hD:function(a,b){if($.I===C.e)return a.$1(b)
return P.kq(null,null,this,a,b)},
cb:function(a,b){return this.hD(a,b,null,null)},
hB:function(a,b,c){if($.I===C.e)return a.$2(b,c)
return P.md(null,null,this,a,b,c)},
hA:function(a,b,c){return this.hB(a,b,c,null,null,null)}}
P.iE.prototype={
$0:function(){return this.a.dw(this.b)}}
P.iD.prototype={
$0:function(){return this.a.hC(this.b)}}
P.iF.prototype={
$1:function(a){return this.a.hF(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iz.prototype={
gR:function(a){var u=new P.dD(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
k:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cw(u==null?s.b=P.jw():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cw(t==null?s.c=P.jw():t,b)}else return s.e5(0,b)},
e5:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jw()
u=s.cz(b)
t=r[u]
if(t==null)r[u]=[s.bo(b)]
else{if(s.cE(t,b)>=0)return!1
t.push(s.bo(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fq(this.c,b)
else return this.fp(0,b)},
fp:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.em(r,b)
t=s.cE(u,b)
if(t<0)return!1
s.cQ(u.splice(t,1)[0])
return!0},
cw:function(a,b){if(a[b]!=null)return!1
a[b]=this.bo(b)
return!0},
fq:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cQ(u)
delete a[b]
return!0},
cF:function(){this.r=1073741823&this.r+1},
bo:function(a){var u,t=this,s=new P.iA(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cF()
return s},
cQ:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cF()},
cz:function(a){return J.b7(a)&1073741823},
em:function(a,b){return a[this.cz(b)]},
cE:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.G(a[t].a,b))return t
return-1}}
P.iA.prototype={}
P.dD.prototype={
gH:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bH(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fa.prototype={$ij:1}
P.n.prototype={
gR:function(a){return new H.cM(a,this.gj(a))},
E:function(a,b){return this.i(a,b)},
hK:function(a,b){var u,t,s=this,r=H.b([],[H.mu(s,a,"n",0)])
C.a.sj(r,s.gj(a))
for(u=0;u<s.gj(a);++u){t=s.i(a,u)
if(u>=r.length)return H.c(r,u)
r[u]=t}return r},
hJ:function(a){return this.hK(a,!0)},
h:function(a){return P.jk(a,"[","]")}}
P.fd.prototype={}
P.fe.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:9}
P.ar.prototype={
I:function(a,b){var u,t
for(u=J.bC(this.gau(a));u.v();){t=u.gH(u)
b.$2(t,this.i(a,t))}},
gj:function(a){return J.bD(this.gau(a))},
h:function(a){return P.jT(a)}}
P.iG.prototype={
h:function(a){return P.jk(this,"{","}")},
E:function(a,b){var u,t,s
P.k6(b,"index")
for(u=P.lL(this,this.r),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.f(P.F(b,this,"index",null,t))},
$ij:1}
P.dE.prototype={}
P.ey.prototype={}
P.eB.prototype={}
P.eO.prototype={}
P.hO.prototype={}
P.hP.prototype={
fV:function(a){var u,t,s=P.k7(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iL(u)
if(t.ek(a,0,s)!==s)t.cR(C.c.bJ(a,s-1),0)
return new Uint8Array(u.subarray(0,H.lP(0,t.b,u.length)))}}
P.iL.prototype={
cR:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
ek:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.c.bJ(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.c.b1(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cR(r,C.c.b1(a,p)))s=p}else if(r<=2047){q=n.b
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
P.b3.prototype={}
P.a7.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.a7&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.d.b5(u,30))&1073741823},
h:function(a){var u=this,t=P.l5(H.ls(u)),s=P.cx(H.lq(u)),r=P.cx(H.lm(u)),q=P.cx(H.ln(u)),p=P.cx(H.lp(u)),o=P.cx(H.lr(u)),n=P.l6(H.lo(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.aF.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aF&&this.a===b.a},
gG:function(a){return C.d.gG(this.a)},
h:function(a){var u,t,s,r=new P.eM(),q=this.a
if(q<0)return"-"+new P.aF(0-q).h(0)
u=r.$1(C.d.Y(q,6e7)%60)
t=r.$1(C.d.Y(q,1e6)%60)
s=new P.eL().$1(q%1e6)
return""+C.d.Y(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.eL.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eM.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.aG.prototype={}
P.bW.prototype={
h:function(a){return"Throw of null."}}
P.ag.prototype={
gbr:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbq:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbr()+o+u
if(!q.a)return t
s=q.gbq()
r=P.ji(q.b)
return t+s+": "+r}}
P.bm.prototype={
gbr:function(){return"RangeError"},
gbq:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.f1.prototype={
gbr:function(){return"RangeError"},
gbq:function(){var u,t=this.b
if(typeof t!=="number")return t.a6()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gj:function(a){return this.f}}
P.hM.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.hJ.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.d5.prototype={
h:function(a){return"Bad state: "+this.a}}
P.eA.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ji(u)+"."}}
P.fK.prototype={
h:function(a){return"Out of Memory"},
$iaG:1}
P.d3.prototype={
h:function(a){return"Stack Overflow"},
$iaG:1}
P.eG.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dw.prototype={
h:function(a){return"Exception: "+this.a}}
P.eY.prototype={
h:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.c.cl(s,0,75)+"...":s
return t+"\n"+r}}
P.z.prototype={}
P.j.prototype={
gj:function(a){var u,t=this.gR(this)
for(u=0;t.v();)++u
return u},
E:function(a,b){var u,t,s
P.k6(b,"index")
for(u=this.gR(this),t=0;u.v();){s=u.gH(u)
if(b===t)return s;++t}throw H.f(P.F(b,this,"index",null,t))},
h:function(a){return P.l8(this,"(",")")}}
P.f2.prototype={}
P.bi.prototype={$ij:1}
P.cO.prototype={}
P.ad.prototype={
gG:function(a){return P.N.prototype.gG.call(this,this)},
h:function(a){return"null"}}
P.ab.prototype={}
P.N.prototype={constructor:P.N,$iN:1,
n:function(a,b){return this===b},
gG:function(a){return H.bZ(this)},
h:function(a){return"Instance of '"+H.e(H.c_(this))+"'"},
toString:function(){return this.h(this)}}
P.aV.prototype={}
P.u.prototype={}
P.aW.prototype={
gj:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.j3.prototype={
$1:function(a){return this.a.fT(0,a)},
$S:10}
W.j4.prototype={
$1:function(a){return this.a.fU(a)},
$S:10}
W.l.prototype={}
W.ei.prototype={
gj:function(a){return a.length}}
W.ek.prototype={
h:function(a){return String(a)}}
W.el.prototype={
h:function(a){return String(a)}}
W.cp.prototype={}
W.bb.prototype={
ce:function(a,b,c){if(c!=null)return a.getContext(b,P.ml(c))
return a.getContext(b)},
dD:function(a,b){return this.ce(a,b,null)},
$ibb:1}
W.aE.prototype={
gj:function(a){return a.length}}
W.eC.prototype={
gj:function(a){return a.length}}
W.D.prototype={$iD:1}
W.bJ.prototype={
gj:function(a){return a.length}}
W.eD.prototype={}
W.a6.prototype={}
W.aj.prototype={}
W.eE.prototype={
gj:function(a){return a.length}}
W.eF.prototype={
gj:function(a){return a.length}}
W.eH.prototype={
gj:function(a){return a.length}}
W.eI.prototype={
h:function(a){return String(a)}}
W.cz.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[[P.a9,P.ab]]},
$an:function(){return[[P.a9,P.ab]]},
$ij:1,
$aj:function(){return[[P.a9,P.ab]]}}
W.cA.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gae(a))+" x "+H.e(this.gaa(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.L(b)
if(!u.$ia9)return!1
return a.left===u.gba(b)&&a.top===u.gbc(b)&&this.gae(a)===u.gae(b)&&this.gaa(a)===u.gaa(b)},
gG:function(a){return W.km(C.b.gG(a.left),C.b.gG(a.top),C.b.gG(this.gae(a)),C.b.gG(this.gaa(a)))},
gcU:function(a){return a.bottom},
gaa:function(a){return a.height},
gba:function(a){return a.left},
gca:function(a){return a.right},
gbc:function(a){return a.top},
gae:function(a){return a.width},
$ia9:1,
$aa9:function(){return[P.ab]}}
W.eJ.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[P.u]},
$an:function(){return[P.u]},
$ij:1,
$aj:function(){return[P.u]}}
W.eK.prototype={
gj:function(a){return a.length}}
W.ia.prototype={
gj:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
k:function(a,b){this.a.appendChild(b)
return b},
gR:function(a){var u=this.hJ(this)
return new J.U(u,u.length)},
$an:function(){return[W.Y]},
$aj:function(){return[W.Y]}}
W.Y.prototype={
gcV:function(a){return new W.ia(a,a.children)},
gcW:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a6()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a6()
if(r<0)r=-r*0
return new P.a9(u,t,s,r,[P.ab])},
h:function(a){return a.localName},
$iY:1}
W.i.prototype={$ii:1}
W.d.prototype={
fI:function(a,b,c,d){if(c!=null)this.e6(a,b,c,!1)},
e6:function(a,b,c,d){return a.addEventListener(b,H.ay(c,1),!1)}}
W.aI.prototype={$iaI:1}
W.eS.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aI]},
$an:function(){return[W.aI]},
$ij:1,
$aj:function(){return[W.aI]}}
W.eT.prototype={
gj:function(a){return a.length}}
W.eX.prototype={
gj:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.f_.prototype={
gj:function(a){return a.length}}
W.bN.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.H]},
$an:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]}}
W.aL.prototype={$iaL:1,
gcY:function(a){return a.data}}
W.bO.prototype={$ibO:1}
W.bg.prototype={$ibg:1}
W.fb.prototype={
h:function(a){return String(a)}}
W.fu.prototype={
gj:function(a){return a.length}}
W.fv.prototype={
i:function(a,b){return P.az(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.az(u.value[1]))}},
gau:function(a){var u=H.b([],[P.u])
this.I(a,new W.fw(u))
return u},
gj:function(a){return a.size}}
W.fw.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fx.prototype={
i:function(a,b){return P.az(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.az(u.value[1]))}},
gau:function(a){var u=H.b([],[P.u])
this.I(a,new W.fy(u))
return u},
gj:function(a){return a.size}}
W.fy.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aQ.prototype={$iaQ:1}
W.fz.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aQ]},
$an:function(){return[W.aQ]},
$ij:1,
$aj:function(){return[W.aQ]}}
W.am.prototype={$iam:1}
W.i9.prototype={
gR:function(a){var u=this.a.childNodes
return new W.cD(u,u.length)},
gj:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$an:function(){return[W.H]},
$aj:function(){return[W.H]}}
W.H.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.dK(a):u},
$iH:1}
W.cV.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.H]},
$an:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]}}
W.aR.prototype={$iaR:1,
gj:function(a){return a.length}}
W.fN.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aR]},
$an:function(){return[W.aR]},
$ij:1,
$aj:function(){return[W.aR]}}
W.fW.prototype={
i:function(a,b){return P.az(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.az(u.value[1]))}},
gau:function(a){var u=H.b([],[P.u])
this.I(a,new W.fX(u))
return u},
gj:function(a){return a.size}}
W.fX.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fZ.prototype={
gj:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.ha.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aS]},
$an:function(){return[W.aS]},
$ij:1,
$aj:function(){return[W.aS]}}
W.aT.prototype={$iaT:1}
W.hb.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aT]},
$an:function(){return[W.aT]},
$ij:1,
$aj:function(){return[W.aT]}}
W.aU.prototype={$iaU:1,
gj:function(a){return a.length}}
W.hf.prototype={
i:function(a,b){return a.getItem(b)},
I:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gau:function(a){var u=H.b([],[P.u])
this.I(a,new W.hg(u))
return u},
gj:function(a){return a.length}}
W.hg.prototype={
$2:function(a,b){return this.a.push(a)}}
W.av.prototype={$iav:1}
W.aX.prototype={$iaX:1}
W.aw.prototype={$iaw:1}
W.hl.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aw]},
$an:function(){return[W.aw]},
$ij:1,
$aj:function(){return[W.aw]}}
W.hm.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aX]},
$an:function(){return[W.aX]},
$ij:1,
$aj:function(){return[W.aX]}}
W.hu.prototype={
gj:function(a){return a.length}}
W.aY.prototype={$iaY:1}
W.bn.prototype={$ibn:1}
W.hx.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aY]},
$an:function(){return[W.aY]},
$ij:1,
$aj:function(){return[W.aY]}}
W.hy.prototype={
gj:function(a){return a.length}}
W.aZ.prototype={}
W.hN.prototype={
h:function(a){return String(a)}}
W.i1.prototype={
gj:function(a){return a.length}}
W.b_.prototype={
gfZ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.a3("deltaY is not supported"))},
gfY:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.a3("deltaX is not supported"))},
$ib_:1}
W.c8.prototype={
fs:function(a,b){return a.requestAnimationFrame(H.ay(b,1))},
ej:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ic.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.D]},
$an:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]}}
W.dr.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.L(b)
if(!u.$ia9)return!1
return a.left===u.gba(b)&&a.top===u.gbc(b)&&a.width===u.gae(b)&&a.height===u.gaa(b)},
gG:function(a){return W.km(C.b.gG(a.left),C.b.gG(a.top),C.b.gG(a.width),C.b.gG(a.height))},
gaa:function(a){return a.height},
gae:function(a){return a.width}}
W.iv.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aK]},
$an:function(){return[W.aK]},
$ij:1,
$aj:function(){return[W.aK]}}
W.dJ.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.H]},
$an:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]}}
W.iH.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aU]},
$an:function(){return[W.aU]},
$ij:1,
$aj:function(){return[W.aU]}}
W.iI.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.av]},
$an:function(){return[W.av]},
$ij:1,
$aj:function(){return[W.av]}}
W.id.prototype={}
W.ie.prototype={
$1:function(a){return this.a.$1(a)}}
W.E.prototype={
gR:function(a){return new W.cD(a,this.gj(a))}}
W.cD.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.eh(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gH:function(a){return this.d}}
W.dq.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.cd.prototype={}
W.ce.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dW.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.cf.prototype={}
W.cg.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
P.e5.prototype={$iaL:1,
gcY:function(a){return this.a}}
P.iU.prototype={
$2:function(a,b){this.a[a]=b},
$S:9}
P.eU.prototype={
gbu:function(){var u=this.b,t=H.jD(u,"n",0)
return new H.ff(new H.i2(u,new P.eV(),[t]),new P.eW(),[t,W.Y])},
k:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.bD(this.gbu().a)},
i:function(a,b){var u=this.gbu()
return u.b.$1(J.jJ(u.a,b))},
gR:function(a){var u=P.jS(this.gbu(),!1,W.Y)
return new J.U(u,u.length)},
$an:function(){return[W.Y]},
$aj:function(){return[W.Y]}}
P.eV.prototype={
$1:function(a){return!!J.L(a).$iY}}
P.eW.prototype={
$1:function(a){return H.h(a,"$iY")}}
P.iw.prototype={
dh:function(){return Math.random()}}
P.iB.prototype={
gca:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.r(t)
return u+t},
gcU:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.r(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.L(b)
if(!!u.$ia9){t=q.a
if(t==u.gba(b)){s=q.b
if(s==u.gbc(b)){r=q.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.r(r)
if(t+r===u.gca(b)){t=q.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.r(t)
u=s+t===u.gcU(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u=this,t=u.a,s=J.b7(t),r=u.b,q=J.b7(r),p=u.c
if(typeof t!=="number")return t.B()
if(typeof p!=="number")return H.r(p)
p=C.d.gG(t+p)
t=u.d
if(typeof r!=="number")return r.B()
if(typeof t!=="number")return H.r(t)
t=C.d.gG(r+t)
return P.lK(P.iy(P.iy(P.iy(P.iy(0,s),q),p),t))}}
P.a9.prototype={
gba:function(a){return this.a},
gbc:function(a){return this.b},
gae:function(a){return this.c},
gaa:function(a){return this.d}}
P.bh.prototype={$ibh:1}
P.f7.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.i(a,b)},
$an:function(){return[P.bh]},
$ij:1,
$aj:function(){return[P.bh]}}
P.bk.prototype={$ibk:1}
P.fI.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.i(a,b)},
$an:function(){return[P.bk]},
$ij:1,
$aj:function(){return[P.bk]}}
P.fQ.prototype={
gj:function(a){return a.length}}
P.hi.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.i(a,b)},
$an:function(){return[P.u]},
$ij:1,
$aj:function(){return[P.u]}}
P.k.prototype={
gcV:function(a){return new P.eU(a,new W.i9(a))}}
P.bo.prototype={$ibo:1}
P.hz.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.i(a,b)},
$an:function(){return[P.bo]},
$ij:1,
$aj:function(){return[P.bo]}}
P.dB.prototype={}
P.dC.prototype={}
P.dM.prototype={}
P.dN.prototype={}
P.dX.prototype={}
P.dY.prototype={}
P.e3.prototype={}
P.e4.prototype={}
P.en.prototype={
gj:function(a){return a.length}}
P.eq.prototype={
i:function(a,b){return P.az(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.az(u.value[1]))}},
gau:function(a){var u=H.b([],[P.u])
this.I(a,new P.er(u))
return u},
gj:function(a){return a.size}}
P.er.prototype={
$2:function(a,b){return this.a.push(a)}}
P.es.prototype={
gj:function(a){return a.length}}
P.b9.prototype={}
P.fJ.prototype={
gj:function(a){return a.length}}
P.dp.prototype={}
P.cZ.prototype={
dz:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.L(g)
if(!!u.$iaL&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.mm(g))
return}if(!!u.$ibO&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.f(P.kX("Incorrect number or type of arguments"))},
hG:function(a,b,c,d,e,f,g){return this.dz(a,b,c,d,e,f,g,null,null,null)}}
P.hd.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.F(b,a,null,null,null))
return P.az(a.item(b))},
E:function(a,b){return this.i(a,b)},
$an:function(){return[[P.cO,,,]]},
$ij:1,
$aj:function(){return[[P.cO,,,]]}}
P.dT.prototype={}
P.dU.prototype={}
T.ej.prototype={
aG:function(a,b){return!0},
h:function(a){return"all"}}
T.cE.prototype={
aG:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)if(u[s].aG(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.cP.prototype={}
T.as.prototype={
aG:function(a,b){return!this.dJ(0,b)},
h:function(a){return"!["+this.cm(0)+"]"}}
T.h_.prototype={
dP:function(a){var u,t
if(a.a.length<=0)throw H.f(P.o("May not create a Set with zero characters."))
u=new H.K([P.z,P.b3])
for(t=new H.cM(a,a.gj(a));t.v();)u.m(0,t.d,!0)
this.a=u},
aG:function(a,b){return this.a.cX(0,b)},
h:function(a){var u=this.a
return P.jr(new H.cL(u,[H.b4(u,0)]))}}
R.d4.prototype={
q:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.dd(this.a.K(0,b))
r.a=H.b([],[T.cP])
r.c=!1
this.c.push(r)
return r},
h5:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.aG(0,a))return r}return},
h:function(a){return this.b}}
R.db.prototype={
h:function(a){var u=H.kD(this.b,"\n","\\n"),t=H.kD(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.dc.prototype={
h:function(a){return this.b}}
R.hv.prototype={
K:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.d4(this,b)
u.c=H.b([],[R.dd])
this.a.m(0,b,u)}return u},
aZ:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.dc(a)
u=P.u
t.c=new H.K([u,u])
this.b.m(0,a,t)}return t},
hL:function(a){var u,t,s,r,q,p,o,n,m=H.b([],[R.db]),l=this.c,k=[P.z],j=H.b([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)m.push(t)
return m}r=C.c.b1(a,s)
q=l.h5(r)
if(q==null){if(t==null){j.push(r)
p=P.jr(j)
throw H.f(P.o("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}m.push(t)
s=t.c+1
j=H.b([],k)
l=this.c
t=null}else{if(!q.c)j.push(r)
l=q.b
if(l.d!=null){p=P.jr(j)
o=l.d
n=o.c.i(0,p)
t=new R.db(n==null?o.b:n,p,s)}++s}}}}
R.dd.prototype={
h:function(a){return this.b.b+": "+this.cm(0)}}
F.eo.prototype={
hd:function(a){var u,t=W.kY(a)
t.autoplay=!1
t.preload="auto";++this.a
u=new F.fM(t)
u.b=!1
W.P(t,"load",new F.ep(this,u),!1)
return u}}
F.ep.prototype={
$1:function(a){var u=this.b
if(!u.b)u.b=!0;++this.a.b}}
F.fM.prototype={}
O.ai.prototype={
b_:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cf:function(a,b,c){this.b=b
this.c=a},
aK:function(a,b){return this.cf(a,null,b)},
ai:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cG:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gR:function(a){var u=this.a
return new J.U(u,u.length)},
E:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
k:function(a,b){var u,t,s=this,r=[H.jD(s,"ai",0)]
if(s.ai(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.cG(t,H.b([b],r))}},
bC:function(a,b){var u,t
if(this.ai(b)){u=this.a
t=u.length
C.a.bC(u,b)
this.cG(t,b)}},
$ij:1}
O.bS.prototype={
gj:function(a){return this.a.length},
gl:function(){var u=this.b
return u==null?this.b=D.w():u},
ax:function(){var u=this.b
if(u!=null)u.u(null)},
gT:function(a){var u=this.a
if(u.length>0)return C.a.gc_(u)
else return V.bj()},
bb:function(a){var u=this.a
if(a==null)u.push(V.bj())
else u.push(a)
this.ax()},
av:function(){var u=this.a
if(u.length>0){u.pop()
this.ax()}}}
E.eu.prototype={}
E.aq.prototype={
cv:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.U(u,u.length);u.v();){t=u.d
if(t.f==null)t.cv()}},
sci:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gl().M(0,s.gdm())
u=s.c
if(u!=null)u.gl().k(0,s.gdm())
t=new D.p("shape",r,s.c)
t.b=!0
s.af(t)}},
saJ:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gl().M(0,s.gdq())
u=s.f
s.f=a
if(a!=null)a.gl().k(0,s.gdq())
s.cv()
t=new D.p("technique",u,s.f)
t.b=!0
s.af(t)}},
sc5:function(a){var u,t,s=this
if(!J.G(s.r,a)){u=s.r
if(u!=null)u.gl().M(0,s.gdk())
if(a!=null)a.gl().k(0,s.gdk())
s.r=a
t=new D.p("mover",u,a)
t.b=!0
s.af(t)}},
ad:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.am(0,b,s):null
if(!J.G(q,s.x)){u=s.x
s.x=q
t=new D.p("matrix",u,q)
t.b=!0
s.af(t)}r=s.f
if(r!=null)r.ad(0,b)
for(r=s.y.a,r=new J.U(r,r.length);r.v();)r.d.ad(0,b)},
a1:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gT(s))
else s.a.push(r.p(0,s.gT(s)))
s.ax()
a.c8(t.f)
s=a.dy
u=(s&&C.a).gc_(s)
if(u!=null&&t.d!=null)u.c9(a,t)
for(s=t.y.a,s=new J.U(s,s.length);s.v();)s.d.a1(a)
a.c7()
a.dx.av()},
af:function(a){var u=this.z
if(u!=null)u.u(a)},
Z:function(){return this.af(null)},
dn:function(a){this.e=null
this.af(a)},
hm:function(){return this.dn(null)},
dr:function(a){this.af(a)},
hn:function(){return this.dr(null)},
dl:function(a){this.af(a)},
hl:function(){return this.dl(null)},
dj:function(a){this.af(a)},
hi:function(){return this.dj(null)},
hh:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdi(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bd()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.Z()},
hk:function(a,b){var u,t
for(u=b.gR(b),t=this.gdi();u.v();)u.gH(u).gl().M(0,t)
this.Z()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.fS.prototype={
dO:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a7(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bS()
t=[V.ac]
u.a=H.b([],t)
u.gl().k(0,new E.fT(s))
s.cy=u
u=new O.bS()
u.a=H.b([],t)
u.gl().k(0,new E.fU(s))
s.db=u
u=new O.bS()
u.a=H.b([],t)
u.gl().k(0,new E.fV(s))
s.dx=u
u=H.b([],[O.d7])
s.dy=u
u.push(null)
s.fr=new H.K([P.u,A.d_])},
ghw:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gT(s)
u=t.db
u=t.z=s.p(0,u.gT(u))
s=u}return s},
gdt:function(){var u,t=this,s=t.ch
if(s==null){s=t.ghw()
u=t.dx
u=t.ch=s.p(0,u.gT(u))
s=u}return s},
c8:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gc_(u):a)},
c7:function(){var u=this.dy
if(u.length>1)u.pop()},
bD:function(a){var u=a.b
if(u.length===0)throw H.f(P.o("May not cache a shader with no name."))
if(this.fr.cX(0,u))throw H.f(P.o('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)}}
E.fT.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.fU.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.fV.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.d9.prototype={
cr:function(a){this.du()},
cq:function(){return this.cr(null)},
gh6:function(){var u,t=this,s=Date.now(),r=C.d.Y(P.jO(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a7(s,!1)
return u/r},
cM:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.p()
if(typeof r!=="number")return H.r(r)
u=C.b.aF(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.p()
t=C.b.aF(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.ke(C.h,s.ghy())}},
du:function(){if(!this.cx){this.cx=!0
var u=window
C.t.ej(u)
C.t.fs(u,W.ks(new E.ht(this),P.ab))}},
hx:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cM()
s=p.z
if(s!=null)s.u(null)
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a7(r,!1)
s.y=P.jO(r-s.r.a).a*0.000001
r=s.cy
C.a.sj(r.a,0)
r.ax()
r=s.db
C.a.sj(r.a,0)
r.ax()
r=s.dx
C.a.sj(r.a,0)
r.ax()
r=s.dy;(r&&C.a).sj(r,0)
s.dy.push(null)
o.a1(p.e)}}catch(q){u=H.b5(q)
t=H.bz(q)
P.jG("Error: "+H.e(u))
P.jG("Stack: "+H.e(t))
throw H.f(u)}}}
E.ht.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.hx()}}}
Z.dm.prototype={}
Z.cq.prototype={
O:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.b5(s)
t=P.o('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.f(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.c7.prototype={}
Z.ba.prototype={
ak:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
O:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].O(a)},
a5:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a1:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.u],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)p.push(u[s].h(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a5(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.a.q(p,", ")+"\nAttrs:   "+C.a.q(r,", ")}}
Z.be.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.c_(this.c))+"'")+"]"}}
Z.ax.prototype={
gcj:function(a){var u=this.a,t=(u&$.a4().a)!==0?3:0
if((u&$.aC().a)!==0)t+=3
if((u&$.aB().a)!==0)t+=3
if((u&$.b6().a)!==0)t+=2
if((u&$.aD().a)!==0)t+=3
if((u&$.cm().a)!==0)t+=3
if((u&$.cn().a)!==0)t+=4
if((u&$.bB().a)!==0)++t
return(u&$.aA().a)!==0?t+4:t},
fL:function(a){var u,t=$.a4(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aC()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aB()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b6()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aD()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bB()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aA()
if((s&t.a)!==0)if(u===a)return t
return $.kT()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ax))return!1
return this.a===b.a},
h:function(a){var u=H.b([],[P.u]),t=this.a
if((t&$.a4().a)!==0)u.push("Pos")
if((t&$.aC().a)!==0)u.push("Norm")
if((t&$.aB().a)!==0)u.push("Binm")
if((t&$.b6().a)!==0)u.push("Txt2D")
if((t&$.aD().a)!==0)u.push("TxtCube")
if((t&$.cm().a)!==0)u.push("Clr3")
if((t&$.cn().a)!==0)u.push("Clr4")
if((t&$.bB().a)!==0)u.push("Weight")
if((t&$.aA().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.q(u,"|")}}
D.ex.prototype={}
D.bd.prototype={
k:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.Q]}]):u).push(b)},
M:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.aj(s,b)
if(s===!0){s=t.a
u=(s&&C.a).M(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.aj(s,b)
if(s===!0){s=t.b
u=(s&&C.a).M(s,b)||u}return u},
u:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.Q()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.I(P.jS(u,!0,{func:1,ret:-1,args:[D.Q]}),new D.eQ(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.Q]}])
C.a.I(u,new D.eR(q))}return!0},
bQ:function(){return this.u(null)},
al:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.u(u)}}}}
D.eQ.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eR.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.Q.prototype={}
D.aM.prototype={}
D.aN.prototype={}
D.p.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cr.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cr))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.cJ.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cJ))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.f6.prototype={
hs:function(a){this.c=a.b
this.d.k(0,a.a)
return!1},
ho:function(a){this.c=a.b
this.d.M(0,a.a)
return!1}}
X.cN.prototype={}
X.fc.prototype={
aP:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.p()
u=b.b
t=q.ch
if(typeof u!=="number")return u.p()
s=new V.V(o.a+n*m,o.b+u*t)
t=q.a.gaE()
r=new X.a8(a,V.at(),q.x,t,s)
r.b=!0
q.z=new P.a7(p,!1)
q.x=s
return r},
c6:function(a,b){this.r=a.a
return!1},
aX:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dF()
if(typeof u!=="number")return u.an()
this.r=(u&~t)>>>0
return!1},
aW:function(a,b){var u=this.d
if(u==null)return!1
u.u(this.aP(a,b))
return!0},
ht:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaE()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.p()
q=a.b
p=o.cy
if(typeof q!=="number")return q.p()
t=new X.bT(new V.A(s*r,q*p),u,t)
t.b=!0
n.u(t)
return!0},
eZ:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cN(c,r.a.gaE(),b)
s.b=!0
t.u(s)
r.y=new P.a7(u,!1)
r.x=V.at()}}
X.a1.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.a1))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.a8.prototype={}
X.fA.prototype={
bs:function(a,b,c){var u=this,t=new P.a7(Date.now(),!1),s=u.a.gaE(),r=new X.a8(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c6:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.u(this.bs(a,b,!0))
return!0},
aX:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dF()
if(typeof t!=="number")return t.an()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.u(u.bs(a,b,!0))
return!0},
aW:function(a,b){var u=this.d
if(u==null)return!1
u.u(this.bs(a,b,!1))
return!0},
hu:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaE()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.p()
r=a.b
q=p.ch
if(typeof r!=="number")return r.p()
u=new X.bT(new V.A(t*s,r*q),u,b)
u.b=!0
o.u(u)
return!0},
gbP:function(){var u=this.b
return u==null?this.b=D.w():u},
gbe:function(){var u=this.c
return u==null?this.c=D.w():u},
gaH:function(){var u=this.d
return u==null?this.d=D.w():u}}
X.bT.prototype={}
X.fP.prototype={}
X.c1.prototype={}
X.hw.prototype={
aP:function(a,b){var u=this,t=new P.a7(Date.now(),!1),s=a.length>0?a[0]:V.at(),r=u.a.gaE(),q=new X.c1(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hr:function(a){var u=this.b
if(u==null)return!1
u.u(this.aP(a,!0))
return!0},
hp:function(a){var u=this.c
if(u==null)return!1
u.u(this.aP(a,!0))
return!0},
hq:function(a){var u=this.d
if(u==null)return!1
u.u(this.aP(a,!1))
return!0},
gck:function(a){var u=this.b
return u==null?this.b=D.w():u},
gcZ:function(a){var u=this.c
return u==null?this.c=D.w():u},
gaH:function(){var u=this.d
return u==null?this.d=D.w():u}}
X.dh.prototype={
gaE:function(){var u=this.a,t=C.f.gcW(u).c
t.toString
u=C.f.gcW(u).d
u.toString
return V.k8(0,0,t,u)},
cC:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cJ(u,new X.a1(t,a.altKey,a.shiftKey))},
aC:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a1(t,a.altKey,a.shiftKey)},
bB:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a1(t,a.altKey,a.shiftKey)},
ar:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.C()
u=t.top
if(typeof r!=="number")return r.C()
return new V.V(s-q,r-u)},
aQ:function(a){return new V.A(a.movementX,a.movementY)},
by:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.V])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
q=C.b.U(r.pageX)
C.b.U(r.pageY)
p=o.left
C.b.U(r.pageX)
n.push(new V.V(q-p,C.b.U(r.pageY)-o.top))}return n},
ap:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cr(u,new X.a1(t,a.altKey,a.shiftKey))},
bv:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.C()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.C()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eT:function(a){this.f=!0},
eH:function(a){this.f=!1},
eN:function(a){if(this.f&&this.bv(a))a.preventDefault()},
eX:function(a){var u
if(!this.f)return
u=this.cC(a)
this.b.hs(u)},
eV:function(a){var u
if(!this.f)return
u=this.cC(a)
this.b.ho(u)},
f0:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aC(a)
if(r.x){u=r.ap(a)
t=r.aQ(a)
if(r.d.c6(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ap(a)
s=r.ar(a)
if(r.c.c6(u,s))a.preventDefault()},
f4:function(a){var u,t,s,r=this
r.aC(a)
u=r.ap(a)
if(r.x){t=r.aQ(a)
if(r.d.aX(u,t))a.preventDefault()
return}if(r.r)return
s=r.ar(a)
if(r.c.aX(u,s))a.preventDefault()},
eR:function(a){var u,t,s,r=this
if(!r.bv(a)){r.aC(a)
u=r.ap(a)
if(r.x){t=r.aQ(a)
if(r.d.aX(u,t))a.preventDefault()
return}if(r.r)return
s=r.ar(a)
if(r.c.aX(u,s))a.preventDefault()}},
f2:function(a){var u,t,s,r=this
r.aC(a)
u=r.ap(a)
if(r.x){t=r.aQ(a)
if(r.d.aW(u,t))a.preventDefault()
return}if(r.r)return
s=r.ar(a)
if(r.c.aW(u,s))a.preventDefault()},
eP:function(a){var u,t,s,r=this
if(!r.bv(a)){r.aC(a)
u=r.ap(a)
if(r.x){t=r.aQ(a)
if(r.d.aW(u,t))a.preventDefault()
return}if(r.r)return
s=r.ar(a)
if(r.c.aW(u,s))a.preventDefault()}},
f6:function(a){var u,t,s=this
s.aC(a)
u=new V.A((a&&C.r).gfY(a),C.r.gfZ(a)).t(0,180)
if(s.x){if(s.d.ht(u))a.preventDefault()
return}if(s.r)return
t=s.ar(a)
if(s.c.hu(u,t))a.preventDefault()},
f8:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ap(s.y)
t=s.ar(s.y)
s.d.eZ(u,t,r)}},
fo:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bB(a)
u=t.by(a)
if(t.e.hr(u))a.preventDefault()},
fk:function(a){var u
this.bB(a)
u=this.by(a)
if(this.e.hp(u))a.preventDefault()},
fm:function(a){var u
this.bB(a)
u=this.by(a)
if(this.e.hq(u))a.preventDefault()}}
D.bc.prototype={
ao:function(a){var u=this.r
if(u!=null)u.u(a)},
dS:function(){return this.ao(null)},
$ia0:1}
D.a0.prototype={}
D.cK.prototype={
ao:function(a){var u=this.x
if(u!=null)u.u(a)},
cI:function(a){var u=this.y
if(u!=null)u.u(a)},
eY:function(){return this.cI(null)},
fa:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(s==null||this.ef(s))return!1}return!0},
eB:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcH(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q instanceof D.bc)this.e.push(q)
p=q.r
if(p==null){p=new D.bd()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.aM()
u.b=!0
this.ao(u)},
fe:function(a,b){var u,t,s
for(u=b.gR(b),t=this.gcH();u.v();){s=u.gH(u)
C.a.M(this.e,s)
s.gl().M(0,t)}u=new D.aN()
u.b=!0
this.ao(u)},
ef:function(a){var u=C.a.aj(this.e,a)
return u},
$aj:function(){return[D.a0]},
$aai:function(){return[D.a0]}}
D.fO.prototype={$ia0:1}
D.hc.prototype={$ia0:1}
V.C.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.C))return!1
u=b.a
t=$.t().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
V.X.prototype={
hM:function(){var u=this
return new V.X(Math.floor(u.a*255)/255,Math.floor(u.b*255)/255,Math.floor(u.c*255)/255,Math.floor(u.d*255)/255)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.t().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.y(u.a,3,0)+", "+V.y(u.b,3,0)+", "+V.y(u.c,3,0)+", "+V.y(u.d,3,0)+"]"}}
V.eP.prototype={}
V.cR.prototype={
a2:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.J])
return t},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cR))return!1
u=b.a
t=$.t().a
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
h:function(a){var u,t,s,r,q=this,p=[P.J],o=V.bx(H.b([q.a,q.d,q.r],p),3,0),n=V.bx(H.b([q.b,q.e,q.x],p),3,0),m=V.bx(H.b([q.c,q.f,q.y],p),3,0)
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
V.ac.prototype={
a2:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
bZ:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.t().a)return V.bj()
u=1/b1
t=-n
s=-a0
return V.al((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
p:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.al(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bd:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.x(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cc:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.W(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ac))return!1
u=b.a
t=$.t().a
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
h:function(a){return this.J()},
A:function(a){var u,t,s,r,q,p=this,o=[P.J],n=V.bx(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bx(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bx(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bx(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
J:function(){return this.A("")}}
V.V.prototype={
C:function(a,b){return new V.V(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.t().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}}
V.W.prototype={
C:function(a,b){return new V.W(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.t().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
V.au.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.au))return!1
u=b.a
t=$.t().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.y(u.a,3,0)+", "+V.y(u.b,3,0)+", "+V.y(u.c,3,0)+", "+V.y(u.d,3,0)+"]"}}
V.cY.prototype={
ga4:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cY))return!1
u=b.a
t=$.t().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.y(u.a,3,0)+", "+V.y(u.b,3,0)+", "+V.y(u.c,3,0)+", "+V.y(u.d,3,0)+"]"}}
V.A.prototype={
c0:function(a){return Math.sqrt(this.w(this))},
w:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.r(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.r(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.p()
u=this.b
if(typeof u!=="number")return u.p()
return new V.A(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.t().a){u=$.ki
return u==null?$.ki=new V.A(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.A(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.A))return!1
u=b.a
t=this.a
s=$.t()
s.toString
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.r(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.r(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}}
V.x.prototype={
c0:function(a){return Math.sqrt(this.w(this))},
w:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c1:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.x(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aT:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.x(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.x(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a){return new V.x(-this.a,-this.b,-this.c)},
t:function(a,b){if(Math.abs(b-0)<$.t().a)return V.dl()
return new V.x(this.a/b,this.b/b,this.c/b)},
de:function(){var u=$.t().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.x))return!1
u=b.a
t=$.t().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
U.ez.prototype={
bn:function(a){var u=V.j8(a,this.c,this.b)
return u},
gl:function(){var u=this.y
return u==null?this.y=D.w():u},
D:function(a){var u=this.y
if(u!=null)u.u(a)},
scd:function(a,b){},
sc2:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.t().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bn(u)}s=new D.p("maximumLocation",s,t.b)
s.b=!0
t.D(s)}},
sc4:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.t().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bn(u)}s=new D.p("minimumLocation",s,t.c)
s.b=!0
t.D(s)}},
sa3:function(a,b){var u,t=this
b=t.bn(b)
u=t.d
if(!(Math.abs(u-b)<$.t().a)){t.d=b
u=new D.p("location",u,b)
u.b=!0
t.D(u)}},
sc3:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.t().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.p("maximumVelocity",r,a)
r.b=!0
s.D(r)}},
sN:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.t().a)){u.f=a
t=new D.p("velocity",t,a)
t.b=!0
u.D(t)}},
sbL:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.t().a)){this.x=a
u=new D.p("dampening",u,a)
u.b=!0
this.D(u)}},
ad:function(a,b){var u,t,s,r=this,q=r.f,p=$.t().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa3(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.t().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sN(u)}}}
U.bI.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.w():u},
sT:function(a,b){var u,t,s,r=this
if(!J.G(r.a,b)){u=r.a
r.a=b
t=new D.p("matrix",u,b)
t.b=!0
s=r.b
if(s!=null)s.u(t)}},
am:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bI))return!1
return J.G(this.a,b.a)},
h:function(a){return"Constant: "+this.a.A("          ")}}
U.bM.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.w():u},
D:function(a){var u=this.e
if(u!=null)u.u(a)},
a0:function(){return this.D(null)},
dU:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaB(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gl()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aM()
u.b=!0
this.D(u)},
fc:function(a,b){var u,t
for(u=b.gR(b),t=this.gaB();u.v();)u.gH(u).gl().M(0,t)
u=new D.aN()
u.b=!0
this.D(u)},
am:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a6()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.U(r,r.length),u=null;r.v();){q=r.d
if(q!=null){t=q.am(0,b,c)
if(t!=null)u=u==null?t:t.p(0,u)}}s.f=u==null?V.bj():u
r=s.e
if(r!=null)r.al(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bM))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.G(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$aj:function(){return[U.a2]},
$aai:function(){return[U.a2]},
$ia2:1}
U.a2.prototype={}
U.c0.prototype={
gl:function(){var u=this.y
return u==null?this.y=D.w():u},
D:function(a){var u=this.y
if(u!=null)u.u(a)},
sdC:function(a){var u
a=V.j8(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.t().a)){this.a=a
u=new D.p("yaw",u,a)
u.b=!0
this.D(u)}},
sds:function(a,b){var u
b=V.j8(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.t().a)){this.b=b
u=new D.p("pitch",u,b)
u.b=!0
this.D(u)}},
sdv:function(a){var u
a=V.j8(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.t().a)){this.c=a
u=new D.p("roll",u,a)
u.b=!0
this.D(u)}},
sbM:function(a){var u=this.e
if(!(Math.abs(u-a)<$.t().a)){this.e=a
u=new D.p("deltaPitch",u,a)
u.b=!0
this.D(u)}},
sbN:function(a){var u=this.f
if(!(Math.abs(u-a)<$.t().a)){this.f=a
u=new D.p("deltaRoll",u,a)
u.b=!0
this.D(u)}},
am:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.sdC(u.a+u.d*b.y)
u.sds(0,u.b+u.e*b.y)
u.sdv(u.c+u.f*b.y)
u.x=V.jX(u.c).p(0,V.jW(u.b)).p(0,V.jV(u.a))
t=u.y
if(t!=null)t.al(0)}return u.x},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.c0))return!1
u=r.a
t=b.a
s=$.t().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
h:function(a){var u=this
return"Rotater: ["+V.y(u.a,3,0)+", "+V.y(u.b,3,0)+", "+V.y(u.c,3,0)+"], ["+V.y(u.d,3,0)+", "+V.y(u.e,3,0)+", "+V.y(u.f,3,0)+"]"}}
U.di.prototype={
gl:function(){var u=this.cy
return u==null?this.cy=D.w():u},
D:function(a){var u=this.cy
if(u!=null)u.u(a)},
a0:function(){return this.D(null)},
as:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gbP().k(0,u.gbh())
u.a.c.gaH().k(0,u.gbj())
u.a.c.gbe().k(0,u.gbl())
return!0},
bi:function(a){var u=this
if(!J.G(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bk:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$ia8")
if(!n.y)return
if(n.x){u=a.d.C(0,a.y)
u=new V.A(u.a,u.b)
u=u.w(u)
t=n.r
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.C(0,a.y)
u=new V.A(t.a,t.b).p(0,2).t(0,u.ga4())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.p()
s=n.e
if(typeof s!=="number")return H.r(s)
t.sN(u*10*s)}else{u=a.c
t=a.d
s=t.C(0,a.y)
r=new V.A(s.a,s.b).p(0,2).t(0,u.ga4())
s=n.b
q=r.a
if(typeof q!=="number")return q.L()
p=n.e
if(typeof p!=="number")return H.r(p)
o=n.z
if(typeof o!=="number")return H.r(o)
s.sa3(0,-q*p+o)
n.b.sN(0)
t=t.C(0,a.z)
n.Q=new V.A(t.a,t.b).p(0,2).t(0,u.ga4())}n.a0()},
bm:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.w(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.p()
s=r.e
if(typeof s!=="number")return H.r(s)
u.sN(t*10*s)
r.a0()}},
am:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.a6()
if(s<r){t.ch=r
u=b.y
t.b.ad(0,u)
t.cx=V.jX(t.b.d)}return t.cx},
$ia2:1}
U.dj.prototype={
gl:function(){var u=this.fx
return u==null?this.fx=D.w():u},
D:function(a){var u=this.fx
if(u!=null)u.u(a)},
a0:function(){return this.D(null)},
as:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gbP().k(0,s.gbh())
s.a.c.gaH().k(0,s.gbj())
s.a.c.gbe().k(0,s.gbl())
u=s.a.d
t=u.f
u=t==null?u.f=D.w():t
u.k(0,s.gen())
u=s.a.d
t=u.d
u=t==null?u.d=D.w():t
u.k(0,s.gep())
u=s.a.e
u.gck(u).k(0,s.gdZ())
s.a.e.gaH().k(0,s.gdX())
u=s.a.e
u.gcZ(u).k(0,s.gdV())
return!0},
ah:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.L()
u=-u}if(this.r){if(typeof t!=="number")return t.L()
t=-t}return new V.A(u,t)},
bi:function(a){var u=this
H.h(a,"$ia8")
if(!J.G(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bk:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$ia8")
if(!n.cx)return
if(n.ch){u=a.d.C(0,a.y)
u=new V.A(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.C(0,a.y)
u=n.ah(new V.A(t.a,t.b).p(0,2).t(0,u.ga4()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.L()
s=n.y
if(typeof s!=="number")return H.r(s)
t.sN(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.L()
t=n.x
if(typeof t!=="number")return H.r(t)
s.sN(-u*10*t)}else{u=a.c
t=a.d
s=t.C(0,a.y)
r=n.ah(new V.A(s.a,s.b).p(0,2).t(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sa3(0,-p*q+s)
n.b.sN(0)
n.c.sN(0)
t=t.C(0,a.z)
n.dx=n.ah(new V.A(t.a,t.b).p(0,2).t(0,u.ga4()))}n.a0()},
bm:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.L()
s=r.y
if(typeof s!=="number")return H.r(s)
u.sN(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.L()
u=r.x
if(typeof u!=="number")return H.r(u)
s.sN(-t*10*u)
r.a0()}},
eo:function(a){var u=this
if(H.h(a,"$icN").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eq:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$ia8")
if(!J.G(n.d,a.x.b))return
u=a.c
t=a.d
s=t.C(0,a.y)
r=n.ah(new V.A(s.a,s.b).p(0,2).t(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sa3(0,-p*q+s)
n.b.sN(0)
n.c.sN(0)
t=t.C(0,a.z)
n.dx=n.ah(new V.A(t.a,t.b).p(0,2).t(0,u.ga4()))
n.a0()},
e_:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
dY:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$ic1")
if(!n.cx)return
if(n.ch){u=a.d.C(0,a.y)
u=new V.A(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.C(0,a.y)
u=n.ah(new V.A(t.a,t.b).p(0,2).t(0,u.ga4()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.L()
s=n.y
if(typeof s!=="number")return H.r(s)
t.sN(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.L()
t=n.x
if(typeof t!=="number")return H.r(t)
s.sN(-u*10*t)}else{u=a.c
t=a.d
s=t.C(0,a.y)
r=n.ah(new V.A(s.a,s.b).p(0,2).t(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sa3(0,-p*q+s)
n.b.sN(0)
n.c.sN(0)
t=t.C(0,a.z)
n.dx=n.ah(new V.A(t.a,t.b).p(0,2).t(0,u.ga4()))}n.a0()},
dW:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.L()
s=r.y
if(typeof s!=="number")return H.r(s)
u.sN(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.L()
u=r.x
if(typeof u!=="number")return H.r(u)
s.sN(-t*10*u)
r.a0()}},
am:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.a6()
if(s<r){t.dy=r
u=b.y
t.c.ad(0,u)
t.b.ad(0,u)
t.fr=V.jV(t.b.d).p(0,V.jW(t.c.d))}return t.fr},
$ia2:1}
U.dk.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.w():u},
D:function(a){var u=this.r
if(u!=null)u.u(a)},
as:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.w():t
t=r.gey()
u.k(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.w():s).k(0,t)
return!0},
ez:function(a){var u,t,s,r,q=this
if(!J.G(q.b,q.a.b.c))return
H.h(a,"$ibT")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.p()
r=u+t*s
if(u!==r){q.d=r
u=new D.p("zoom",u,r)
u.b=!0
q.D(u)}},
am:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.lj(u,u,u)}return t.f},
$ia2:1}
M.cv.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.w():u},
S:function(a){var u=this.r
if(u!=null)u.u(a)},
aN:function(){return this.S(null)},
fg:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gV(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gl()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aM()
u.b=!0
this.S(u)},
fi:function(a,b){var u,t
for(u=b.gR(b),t=this.gV();u.v();)u.gH(u).gl().M(0,t)
u=new D.aN()
u.b=!0
this.S(u)},
a1:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.U(u,u.length);u.v();){t=u.d
if(t!=null)t.a1(a)}s.f=!1},
$aj:function(){return[M.ae]},
$aai:function(){return[M.ae]},
$iae:1}
M.cw.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.w():u},
S:function(a){var u=this.r
if(u!=null)u.u(a)},
aN:function(){return this.S(null)},
saD:function(a){var u,t,s=this
if(a==null)a=new X.f0()
u=s.b
if(u!==a){if(u!=null)u.gl().M(0,s.gV())
t=s.b
s.b=a
a.gl().k(0,s.gV())
u=new D.p("camera",t,s.b)
u.b=!0
s.S(u)}},
saI:function(a,b){var u,t,s=this
if(b==null)b=X.jj(!0,null)
u=s.c
if(u!==b){if(u!=null)u.gl().M(0,s.gV())
t=s.c
s.c=b
b.gl().k(0,s.gV())
u=new D.p("target",t,s.c)
u.b=!0
s.S(u)}},
saJ:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gl().M(0,t.gV())
u=t.d
t.d=a
if(a!=null)a.gl().k(0,t.gV())
s=new D.p("technique",u,t.d)
s.b=!0
t.S(s)}},
a1:function(a){var u=this
a.c8(u.d)
u.c.O(a)
u.b.O(a)
u.e.ad(0,a)
u.e.a1(a)
u.b.a5(a)
u.c.toString
a.c7()},
$iae:1}
M.cB.prototype={
S:function(a){var u=this.y
if(u!=null)u.u(a)},
aN:function(){return this.S(null)},
eJ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gV(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bd()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aM()
u.b=!0
this.S(u)},
eL:function(a,b){var u,t
for(u=b.gR(b),t=this.gV();u.v();)u.gH(u).gl().M(0,t)
u=new D.aN()
u.b=!0
this.S(u)},
saD:function(a){var u,t,s=this
if(a==null)a=X.k0(null)
u=s.b
if(u!==a){if(u!=null)u.gl().M(0,s.gV())
t=s.b
s.b=a
a.gl().k(0,s.gV())
u=new D.p("camera",t,s.b)
u.b=!0
s.S(u)}},
saI:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gl().M(0,t.gV())
u=t.c
t.c=b
b.gl().k(0,t.gV())
s=new D.p("target",u,t.c)
s.b=!0
t.S(s)}},
gl:function(){var u=this.y
return u==null?this.y=D.w():u},
a1:function(a){var u,t=this
a.c8(t.d)
t.c.O(a)
t.b.O(a)
for(u=t.e.a,u=new J.U(u,u.length);u.v();)u.d.ad(0,a)
for(u=t.e.a,u=new J.U(u,u.length);u.v();)u.d.a1(a)
t.b.toString
a.cy.av()
a.db.av()
t.c.a5(a)
a.c7()},
$iae:1}
M.ae.prototype={}
A.co.prototype={}
A.em.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
h3:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
bO:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.S.prototype={
gag:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
h:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.S))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.fh.prototype={
dN:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.aW("")
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
A.m4(c0,u)
A.m6(c0,u)
A.m5(c0,u)
A.m8(c0,u)
A.m9(c0,u)
A.m7(c0,u)
A.ma(c0,u)
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
b5.bX(0,s.charCodeAt(0)==0?s:s,A.m3(b5.z))
b5.Q=b5.x.i(0,"posAttr")
b5.cx=b5.x.i(0,"normAttr")
b5.ch=b5.x.i(0,"binmAttr")
b5.cy=b5.x.i(0,"txt2DAttr")
b5.db=b5.x.i(0,"txtCubeAttr")
b5.dx=b5.x.i(0,"bendAttr")
if(c0.dx)b5.id=H.h(b5.y.F(0,"invViewMat"),"$iZ")
if(t)b5.dy=H.h(b5.y.F(0,"objMat"),"$iZ")
if(r)b5.fr=H.h(b5.y.F(0,"viewObjMat"),"$iZ")
b5.fy=H.h(b5.y.F(0,"projViewObjMat"),"$iZ")
if(c0.ry)b5.k1=H.h(b5.y.F(0,"txt2DMat"),"$ic3")
if(c0.x1)b5.k2=H.h(b5.y.F(0,"txtCubeMat"),"$iZ")
if(c0.x2)b5.k3=H.h(b5.y.F(0,"colorMat"),"$iZ")
b5.r1=H.b([],[A.Z])
t=c0.y2
if(t>0){b5.k4=b5.y.F(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.i(0,q)
if(m==null)H.q(P.o(b7+q+b8))
s.push(H.h(m,"$iZ"))}}t=c0.a
if(t.a)b5.r2=H.h(b5.y.F(0,"emissionClr"),"$iB")
if(t.c)b5.ry=H.h(b5.y.F(0,"emissionTxt"),"$iR")
t=c0.b
if(t.a)b5.x1=H.h(b5.y.F(0,"ambientClr"),"$iB")
if(t.c)b5.y1=H.h(b5.y.F(0,"ambientTxt"),"$iR")
t=c0.c
if(t.a)b5.y2=H.h(b5.y.F(0,"diffuseClr"),"$iB")
if(t.c)b5.b8=H.h(b5.y.F(0,"diffuseTxt"),"$iR")
t=c0.d
if(t.a)b5.d_=H.h(b5.y.F(0,"invDiffuseClr"),"$iB")
if(t.c)b5.d0=H.h(b5.y.F(0,"invDiffuseTxt"),"$iR")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.d3=H.h(b5.y.F(0,"shininess"),"$iO")
if(s)b5.d1=H.h(b5.y.F(0,"specularClr"),"$iB")
if(t.c)b5.d2=H.h(b5.y.F(0,"specularTxt"),"$iR")}if(c0.f.c)b5.d4=H.h(b5.y.F(0,"bumpTxt"),"$iR")
if(c0.cy){b5.d5=H.h(b5.y.F(0,"envSampler"),"$iR")
t=c0.r
if(t.a)b5.d6=H.h(b5.y.F(0,"reflectClr"),"$iB")
if(t.c)b5.d7=H.h(b5.y.F(0,"reflectTxt"),"$iR")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.d8=H.h(b5.y.F(0,"refraction"),"$iO")
if(s)b5.d9=H.h(b5.y.F(0,"refractClr"),"$iB")
if(t.c)b5.da=H.h(b5.y.F(0,"refractTxt"),"$iR")}}t=c0.y
if(t.a)b5.dc=H.h(b5.y.F(0,"alpha"),"$iO")
if(t.c)b5.dd=H.h(b5.y.F(0,"alphaTxt"),"$iR")
t=P.z
s=[t,A.df]
b5.bR=new H.K(s)
b5.bS=new H.K([t,[P.bi,A.c2]])
b5.bT=new H.K(s)
b5.bU=new H.K([t,[P.bi,A.c4]])
b5.bV=new H.K(s)
b5.bW=new H.K([t,[P.bi,A.c5]])
if(c0.id){for(t=c0.z,s=t.length,r=[A.c2],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.an()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.i(0,g)
if(m==null)H.q(P.o(b7+g+b8))
H.h(m,"$iB")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.i(0,g)
if(f==null)H.q(P.o(b7+g+b8))
H.h(f,"$iB")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.i(0,g)
if(e==null)H.q(P.o(b7+g+b8))
H.h(e,"$iB")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.i(0,g)
if(m==null)H.q(P.o(b7+g+b8))
H.h(m,"$iB")
o=b5.y
g=i+"s["+n+"].color"
f=o.i(0,g)
if(f==null)H.q(P.o(b7+g+b8))
H.h(f,"$iB")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.i(0,o)
if(e==null)H.q(P.o(b7+o+b8))
H.h(e,"$ibq")
a=e}else a=b6
h.push(new A.c2(b,c,d,m,f,a))}b5.bS.m(0,j,h)
q=b5.bR
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.q(P.o(b7+o+b8))
q.m(0,j,m)}for(t=c0.Q,s=t.length,r=[A.c4],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.i(0,o)
if(m==null)H.q(P.o(b7+o+b8))
H.h(m,"$iB")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.i(0,o)
if(f==null)H.q(P.o(b7+o+b8))
H.h(f,"$iB")
p=b5.y
o=i+"s["+n+"].color"
e=p.i(0,o)
if(e==null)H.q(P.o(b7+o+b8))
H.h(e,"$iB")
if(typeof j!=="number")return j.an()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.i(0,o)
if(a0==null)H.q(P.o(b7+o+b8))
H.h(a0,"$ic3")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.i(0,o)
if(a0==null)H.q(P.o(b7+o+b8))
H.h(a0,"$iR")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.i(0,o)
if(a0==null)H.q(P.o(b7+o+b8))
H.h(a0,"$iR")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.i(0,o)
if(a2==null)H.q(P.o(b7+o+b8))
H.h(a2,"$ibp")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.i(0,o)
if(a0==null)H.q(P.o(b7+o+b8))
H.h(a0,"$iO")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.i(0,o)
if(a2==null)H.q(P.o(b7+o+b8))
H.h(a2,"$iO")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.i(0,o)
if(a5==null)H.q(P.o(b7+o+b8))
H.h(a5,"$iO")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}h.push(new A.c4(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.bU.m(0,j,h)
q=b5.bT
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.q(P.o(b7+o+b8))
q.m(0,j,m)}for(t=c0.ch,s=t.length,r=[A.c5],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.i(0,o)
if(m==null)H.q(P.o(b7+o+b8))
H.h(m,"$iB")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.i(0,o)
if(f==null)H.q(P.o(b7+o+b8))
H.h(f,"$iB")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.i(0,o)
if(e==null)H.q(P.o(b7+o+b8))
H.h(e,"$iB")
p=b5.y
o=i+"s["+n+"].color"
a0=p.i(0,o)
if(a0==null)H.q(P.o(b7+o+b8))
H.h(a0,"$iB")
if(typeof j!=="number")return j.an()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.i(0,o)
if(a2==null)H.q(P.o(b7+o+b8))
H.h(a2,"$iB")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.i(0,o)
if(a5==null)H.q(P.o(b7+o+b8))
H.h(a5,"$iB")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.i(0,o)
if(a9==null)H.q(P.o(b7+o+b8))
H.h(a9,"$iO")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.i(0,o)
if(b0==null)H.q(P.o(b7+o+b8))
H.h(b0,"$iO")
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
if(a2==null)H.q(P.o(b7+g+b8))
H.h(a2,"$ibp")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.i(0,g)
if(a2==null)H.q(P.o(b7+g+b8))
H.h(a2,"$iO")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.i(0,g)
if(a5==null)H.q(P.o(b7+g+b8))
H.h(a5,"$iO")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.i(0,g)
if(a2==null)H.q(P.o(b7+g+b8))
H.h(a2,"$iO")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.i(0,g)
if(a5==null)H.q(P.o(b7+g+b8))
H.h(a5,"$iO")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.i(0,g)
if(a9==null)H.q(P.o(b7+g+b8))
H.h(a9,"$iO")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.i(0,g)
if(a2==null)H.q(P.o(b7+g+b8))
H.h(a2,"$ibq")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.i(0,o)
if(a2==null)H.q(P.o(b7+o+b8))
H.h(a2,"$ibq")
a3=a2}else a3=b6
h.push(new A.c5(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.bW.m(0,j,h)
q=b5.bV
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.q(P.o(b7+o+b8))
q.m(0,j,m)}}},
a9:function(a,b){if(b!=null&&b.d>=6)a.cg(b)}}
A.cy.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.cX.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.d2.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.fk.prototype={
h:function(a){return this.aU}}
A.c2.prototype={}
A.c4.prototype={}
A.c5.prototype={}
A.d_.prototype={
bg:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
bX:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cD(b,35633)
r.f=r.cD(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.q(P.o("Failed to link shader: "+H.e(s)))}r.fw()
r.fA()},
O:function(a){a.a.useProgram(this.r)
this.x.h3()},
cD:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.o("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fw:function(){var u,t,s,r=this,q=H.b([],[A.co]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.r(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.co(p,t.name,s))}r.x=new A.em(q)},
fA:function(){var u,t,s,r=this,q=H.b([],[A.de]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.r(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fX(t.type,t.size,t.name,s))}r.y=new A.hH(q)},
az:function(a,b,c){var u=this.a
if(a===1)return new A.df(u,b,c)
else return A.jt(u,this.r,b,a,c)},
eg:function(a,b,c){var u=this.a
if(a===1)return new A.bq(u,b,c)
else return A.jt(u,this.r,b,a,c)},
eh:function(a,b,c){var u=this.a
if(a===1)return new A.R(u,b,c)
else return A.jt(u,this.r,b,a,c)},
b6:function(a,b){return new P.dw(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
fX:function(a,b,c,d){var u=this
switch(a){case 5120:return u.az(b,c,d)
case 5121:return u.az(b,c,d)
case 5122:return u.az(b,c,d)
case 5123:return u.az(b,c,d)
case 5124:return u.az(b,c,d)
case 5125:return u.az(b,c,d)
case 5126:return new A.O(u.a,c,d)
case 35664:return new A.hD(u.a,c,d)
case 35665:return new A.B(u.a,c,d)
case 35666:return new A.bp(u.a,c,d)
case 35667:return new A.hE(u.a,c,d)
case 35668:return new A.hF(u.a,c,d)
case 35669:return new A.hG(u.a,c,d)
case 35674:return new A.hI(u.a,c,d)
case 35675:return new A.c3(u.a,c,d)
case 35676:return new A.Z(u.a,c,d)
case 35678:return u.eg(b,c,d)
case 35680:return u.eh(b,c,d)
case 35670:throw H.f(u.b6("BOOL",c))
case 35671:throw H.f(u.b6("BOOL_VEC2",c))
case 35672:throw H.f(u.b6("BOOL_VEC3",c))
case 35673:throw H.f(u.b6("BOOL_VEC4",c))
default:throw H.f(P.o("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.h7.prototype={}
A.h9.prototype={}
A.de.prototype={}
A.hH.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
F:function(a,b){var u=this.i(0,b)
if(u==null)throw H.f(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.J()},
J:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.df.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.hE.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.hF.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.hG.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hC.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.O.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.hD.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.B.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.bp.prototype={
dG:function(a){var u=a.a,t=a.b,s=a.c,r=a.d
return this.a.uniform4f(this.d,u,t,s,r)},
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.hI.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.c3.prototype={
a7:function(a){var u=new Float32Array(H.ci(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.Z.prototype={
a7:function(a){var u=new Float32Array(H.ci(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bq.prototype={
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.R.prototype={
cg:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.iN.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c1(s.b,b).c1(s.d.c1(s.c,b),c)
s=new V.W(r.a,r.b,r.c)
if(!J.G(a.f,s)){a.f=s
s=a.a
if(s!=null)s.Z()}a.saY(r.t(0,Math.sqrt(r.w(r))))
s=1-b
u=1-c
u=new V.au(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.G(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.Z()}}}
F.aH.prototype={
ea:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dl()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.de())return
return s.t(0,Math.sqrt(s.w(s)))},
ec:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.C(0,q)
r=new V.x(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.w(r)))
r=t.C(0,q)
r=new V.x(r.a,r.b,r.c)
r=s.aT(r.t(0,Math.sqrt(r.w(r))))
return r.t(0,Math.sqrt(r.w(r)))},
bI:function(){var u,t=this
if(t.d!=null)return!0
u=t.ea()
if(u==null){u=t.ec()
if(u==null)return!1}t.d=u
t.a.a.Z()
return!0},
e9:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.dl()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.de())return
return s.t(0,Math.sqrt(s.w(s)))},
eb:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.t().a){l=d.C(0,g)
l=new V.x(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.w(l)))
if(s.a-t.a<0)q=q.L(0)}else{p=(l-u.b)/r
l=d.C(0,g)
l=new V.W(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).C(0,j)
l=new V.x(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.w(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.L(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.w(l)))
l=o.aT(q)
l=l.t(0,Math.sqrt(l.w(l))).aT(o)
q=l.t(0,Math.sqrt(l.w(l)))}return q},
bG:function(){var u,t=this
if(t.e!=null)return!0
u=t.e9()
if(u==null){u=t.eb()
if(u==null)return!1}t.e=u
t.a.a.Z()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.J()},
A:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.c.ac(J.a5(s.e),0)+", "+C.c.ac(J.a5(t.b.e),0)+", "+C.c.ac(J.a5(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.h(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.h(0)+"}"):u+"-}"},
J:function(){return this.A("")}}
F.bQ.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.J()},
A:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.c.ac(J.a5(u.e),0)+", "+C.c.ac(J.a5(this.b.e),0)},
J:function(){return this.A("")}}
F.bX.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.J()},
A:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ac(J.a5(u.e),0)},
J:function(){return this.A("")}}
F.h0.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.w():u},
hf:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.X()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){r=g[s]
h.a.k(0,r.fW())}h.a.X()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.X()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
n=p[o]
h.b.a.a.k(0,n)
o=new F.bX()
if(n.a==null)H.q(P.o("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.u(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.X()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.X()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.c.a
p.a.k(0,l)
p.a.k(0,k)
F.lc(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.X()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.X()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.X()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
i=p[o]
o=h.d.a
o.a.k(0,l)
o.a.k(0,k)
o.a.k(0,i)
F.bL(l,k,i)}g=h.e
if(g!=null)g.al(0)},
at:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.at()||!1
if(!t.a.at())u=!1
s=t.e
if(s!=null)s.al(0)
return u},
bF:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.a4()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aC().a)!==0)++s
if((t&$.aB().a)!==0)++s
if((t&$.b6().a)!==0)++s
if((t&$.aD().a)!==0)++s
if((t&$.cm().a)!==0)++s
if((t&$.cn().a)!==0)++s
if((t&$.bB().a)!==0)++s
if((t&$.aA().a)!==0)++s
r=a4.gcj(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.J])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cq])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fL(m)
k=l.gcj(l)
if(m>=t)return H.c(o,m)
o[m]=new Z.cq(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.c(i,j)
h=i[j].hc(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.c(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.ci(p)),35044)
u.bindBuffer(a1,null)
c=new Z.ba(new Z.dm(a1,d),o,a4)
c.b=H.b([],[Z.be])
if(a0.b.b.length!==0){b=H.b([],[P.z])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.X()
b.push(t.e)}a=Z.jv(u,34963,b)
c.b.push(new Z.be(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.z])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.X()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.X()
b.push(t.e)}a=Z.jv(u,34963,b)
c.b.push(new Z.be(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.z])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.X()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.X()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].c
t.a.a.X()
b.push(t.e)}a=Z.jv(u,34963,b)
c.b.push(new Z.be(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.b([],[P.u])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.A(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.A(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.A(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.A(t))}return C.a.q(s,"\n")},
Z:function(){var u=this.e
if(u!=null)u.u(null)}}
F.h1.prototype={
fJ:function(a){var u,t,s,r,q=H.b([],[F.aH]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.k(0,p)
u.a.k(0,s)
u.a.k(0,r)
q.push(F.bL(p,s,r))}return q},
fK:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.aH])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.c(c,s)
m=c[s];++s
if(s>=n)return H.c(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.c(c,k)
j=c[k]
if(t<0||t>=n)return H.c(c,t)
i=c[t]
n=u.a
if(p){n.k(0,m)
u.a.k(0,l)
u.a.k(0,j)
h.push(F.bL(m,l,j))
u.a.k(0,m)
u.a.k(0,j)
u.a.k(0,i)
h.push(F.bL(m,j,i))}else{n.k(0,l)
u.a.k(0,j)
u.a.k(0,i)
h.push(F.bL(l,j,i))
u.a.k(0,l)
u.a.k(0,i)
u.a.k(0,m)
h.push(F.bL(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
at:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].bI())s=!1
return s},
bH:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].bG())s=!1
return s},
h:function(a){return this.J()},
A:function(a){var u,t,s,r=H.b([],[P.u])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].A(a))
return C.a.q(r,"\n")},
J:function(){return this.A("")}}
F.h2.prototype={
gj:function(a){return this.b.length},
h:function(a){return this.J()},
A:function(a){var u,t,s=H.b([],[P.u]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
s.push(t[u].A(a+(""+u+". ")))}return C.a.q(s,"\n")},
J:function(){return this.A("")}}
F.h3.prototype={
gj:function(a){return this.b.length},
h:function(a){return this.J()},
A:function(a){var u,t,s,r=H.b([],[P.u])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].A(a))
return C.a.q(r,"\n")},
J:function(){return this.A("")}}
F.br.prototype={
bK:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.hT(u.cx,r,o,t,s,q,p,a,n)},
fW:function(){return this.bK(null)},
saY:function(a){var u
if(!J.G(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Z()}},
hc:function(a){var u,t,s=this
if(a.n(0,$.a4())){u=s.f
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.aC())){u=s.r
t=[P.J]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.aB())){u=s.x
t=[P.J]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.b6())){u=s.y
t=[P.J]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.n(0,$.aD())){u=s.z
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.cm())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.cn())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bB()))return H.b([s.ch],[P.J])
else if(a.n(0,$.aA())){u=s.cx
t=[P.J]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.J])},
bI:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dl()
t.d.I(0,new F.i0(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.al(0)}return!0},
bG:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dl()
t.d.I(0,new F.i_(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.al(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.J()},
A:function(a){var u,t,s=this,r="-",q=H.b([],[P.u])
q.push(C.c.ac(J.a5(s.e),0))
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
q.push(V.y(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.a.q(q,", ")
return a+"{"+t+"}"},
J:function(){return this.A("")}}
F.i0.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.i_.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.hU.prototype={
X:function(){},
k:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.o("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.Z()
return!0},
b7:function(a,b,c,d,e,f){var u=F.hT(a,null,b,c,null,d,e,f,0)
this.k(0,u)
return u},
gj:function(a){return this.c.length},
at:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].bI()
return!0},
bH:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].bG()
return!0},
fR:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.G(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.u(null)}}}}return!0},
h:function(a){return this.J()},
A:function(a){var u,t,s,r
this.X()
u=H.b([],[P.u])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r)u.push(t[r].A(a))
return C.a.q(u,"\n")},
J:function(){return this.A("")}}
F.hV.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
I:function(a,b){var u=this
C.a.I(u.b,b)
C.a.I(u.c,new F.hW(u,b))
C.a.I(u.d,new F.hX(u,b))},
h:function(a){return this.J()},
J:function(){var u,t,s,r=H.b([],[P.u])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].A(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].A(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].A(""))
return C.a.q(r,"\n")}}
F.hW.prototype={
$1:function(a){if(!J.G(a.a,this.a))this.b.$1(a)}}
F.hX.prototype={
$1:function(a){var u=this.a
if(!J.G(a.a,u)&&!J.G(a.b,u))this.b.$1(a)}}
F.hY.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a){return this.J()},
J:function(){var u,t,s,r=H.b([],[P.u])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].A(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].A(""))
return C.a.q(r,"\n")}}
F.hZ.prototype={
gj:function(a){return this.b.length},
h:function(a){return this.J()},
J:function(){var u,t,s,r=H.b([],[P.u])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].A(""))
return C.a.q(r,"\n")}}
O.cQ.prototype={
gl:function(){var u=this.fr
return u==null?this.fr=D.w():u},
P:function(a){var u=this.fr
if(u!=null)u.u(a)},
aO:function(){return this.P(null)},
cL:function(a){this.a=null
this.P(a)},
fu:function(){return this.cL(null)},
eD:function(a,b){var u=new D.aM()
u.b=!0
this.P(u)},
eF:function(a,b){var u=new D.aN()
u.b=!0
this.P(u)},
cA:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.z,h=new H.K([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=h.i(0,0)
h.m(0,0,r==null?1:r)}q=H.b([],[A.cy])
h.I(0,new O.fo(j,q))
C.a.bf(q,new O.fp())
p=new H.K([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){o=u[s]
r=o.gaS()
n=p.i(0,o.gaS())
p.m(0,r,n==null?1:n)}m=H.b([],[A.cX])
p.I(0,new O.fq(j,m))
C.a.bf(m,new O.fr())
l=new H.K([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.m)(i),++s){o=i[s]
t=o.gaS()
r=l.i(0,o.gaS())
l.m(0,t,r==null?1:r)}k=H.b([],[A.d2])
l.I(0,new O.fs(j,k))
C.a.bf(k,new O.ft())
i=C.d.Y(j.e.a.length+3,4)
j.dy.e
return A.li(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
a8:function(a,b){if(b!=null)if(!C.a.aj(a,b)){b.a=a.length
a.push(b)}},
ad:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.U(u,u.length);u.v();){t=u.d
t.toString
s=$.hS
if(s==null)s=$.hS=new V.x(0,0,1)
t.a=s
r=$.hR
t.d=r==null?$.hR=new V.x(0,1,0):r
r=$.hQ
t.e=r==null?$.hQ=new V.x(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bd(s)
r=s.a
p=s.b
o=s.c
t.a=s.t(0,Math.sqrt(r*r+p*p+o*o))
o=q.bd(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.t(0,Math.sqrt(p*p+r*r+s*s))
s=q.bd(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.t(0,Math.sqrt(r*r+p*p+o*o))}}}},
c9:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a
if(b0==null){b0=a9.cA()
u=b1.fr.i(0,b0.aU)
if(u==null){u=A.lh(b0,b1.a)
b1.bD(u)}b0=a9.a=u
b2.e=null}t=b0.z
s=t.b8
b0=b2.e
if(!(b0 instanceof Z.ba))b0=b2.e=null
if(b0==null||!b0.d.n(0,s)){b0=t.k3
if(b0)b2.d.at()
r=t.k4
if(r){q=b2.d
p=q.e
if(p!=null)++p.d
q.d.bH()
q.a.bH()
q=q.e
if(q!=null)q.al(0)}q=t.r2
if(q){p=b2.d
o=p.e
if(o!=null)++o.d
p.a.fR()
p=p.e
if(p!=null)p.al(0)}n=b2.d.bF(new Z.c7(b1.a),s)
n.ak($.a4()).e=a9.a.Q.c
if(b0)n.ak($.aC()).e=a9.a.cx.c
if(r)n.ak($.aB()).e=a9.a.ch.c
if(t.r1)n.ak($.b6()).e=a9.a.cy.c
if(q)n.ak($.aD()).e=a9.a.db.c
if(t.rx)n.ak($.aA()).e=a9.a.dx.c
b2.e=n}m=H.b([],[T.d8])
a9.a.O(b1)
if(t.dy){b0=a9.a
r=b1.dx
r=r.gT(r)
b0=b0.dy
b0.toString
b0.a7(r.a2(0,!0))}if(t.fr){b0=a9.a
r=b1.cx
if(r==null){r=b1.db
r=r.gT(r)
q=b1.dx
q=b1.cx=r.p(0,q.gT(q))
r=q}b0=b0.fr
b0.toString
b0.a7(r.a2(0,!0))}b0=a9.a
r=b1.gdt()
b0=b0.fy
b0.toString
b0.a7(r.a2(0,!0))
if(t.ry){b0=a9.a
r=a9.b
b0=b0.k1
b0.toString
b0.a7(C.j.a2(r,!0))}if(t.x1){b0=a9.a
r=a9.c
b0=b0.k2
b0.toString
b0.a7(C.j.a2(r,!0))}if(t.x2){b0=a9.a
r=a9.d
b0=b0.k3
b0.toString
b0.a7(C.j.a2(r,!0))}if(t.y2>0){l=a9.e.a.length
b0=a9.a.k4
b0.a.uniform1i(b0.d,l)
for(k=0;k<l;++k){b0=a9.a
r=a9.e.a
if(k>=r.length)return H.c(r,k)
r=r[k]
b0=b0.r1
if(k>=b0.length)return H.c(b0,k)
b0=b0[k]
j=new Float32Array(H.ci(r.a2(0,!0)))
b0.a.uniformMatrix4fv(b0.d,!1,j)}}b0=t.a
if(b0.a){r=a9.a
q=a9.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a8(m,a9.f.e)
b0=a9.a
r=a9.f.e
b0.a9(b0.ry,r)}if(t.id){b0=t.b
if(b0.a){r=a9.a
q=a9.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a8(m,a9.r.e)
b0=a9.a
r=a9.r.e
b0.a9(b0.y1,r)}b0=t.c
if(b0.a){r=a9.a
q=a9.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a8(m,a9.x.e)
b0=a9.a
r=a9.x.e
b0.a9(b0.b8,r)}b0=t.d
if(b0.a){r=a9.a
q=a9.y.f
r=r.d_
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a8(m,a9.y.e)
b0=a9.a
r=a9.y.e
b0.a9(b0.d0,r)}b0=t.e
r=b0.a
if(!r)q=b0.c
else q=!0
if(q){q=a9.a
p=a9.z.ch
q=q.d3
q.a.uniform1f(q.d,p)}if(r){r=a9.a
q=a9.z.f
r=r.d1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a8(m,a9.z.e)
b0=a9.a
r=a9.z.e
b0.a9(b0.d2,r)}b0=t.z
if(b0.length>0){r=b1.db
i=r.gT(r)
r=P.z
h=new H.K([r,r])
for(r=a9.dx.e,q=r.length,g=0;g<r.length;r.length===q||(0,H.m)(r),++g){f=r[g]
e=h.i(0,0)
if(e==null)e=0
h.m(0,0,e+1)
d=J.eh(a9.a.bS.i(0,0),e)
p=i.bd(f.a)
o=p.a
c=p.b
b=p.c
b=p.t(0,Math.sqrt(o*o+c*c+b*b))
c=d.e
o=b.a
p=b.b
b=b.c
c.a.uniform3f(c.d,o,p,b)
b=f.c
p=d.f
p.a.uniform3f(p.d,b.a,b.b,b.c)}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.m)(b0),++g){q=b0[g].a
l=h.i(0,q)
if(l==null)l=0
q=a9.a.bR.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.Q
if(b0.length>0){r=b1.db
i=r.gT(r)
r=P.z
a=new H.K([r,r])
for(r=a9.dx.f,q=r.length,g=0;g<r.length;r.length===q||(0,H.m)(r),++g){f=r[g]
a0=f.gaS()
e=a.i(0,a0)
if(e==null)e=0
a.m(0,a0,e+1)
d=J.eh(a9.a.bU.i(0,a0),e)
a1=i.p(0,f.gT(f))
p=f.gT(f)
o=$.bY
p=p.cc(o==null?$.bY=new V.W(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.bY
p=a1.cc(p==null?$.bY=new V.W(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gaR(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gaw()
p=a1.bZ(0)
o=p.a
c=p.b
b=p.c
a2=p.e
a3=p.f
a4=p.r
a5=p.y
a6=p.z
p=p.Q
a7=d.d
a7.toString
j=new Float32Array(H.ci(new V.cR(o,c,b,a2,a3,a4,a5,a6,p).a2(0,!0)))
a7.a.uniformMatrix3fv(a7.d,!1,j)
f.gaw()
p=f.gaw()
if(!C.a.aj(m,p)){p.a=m.length
m.push(p)}p=f.gaw()
o=p.gaV(p)
if(o){o=d.f
o.toString
c=p.d
if(c<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gaL()
p=f.gdH()
o=d.x
o.toString
c=p.gh0(p)
b=p.gh1(p)
a2=p.gh2()
p=p.gh_()
o.a.uniform4f(o.d,c,b,a2,p)
p=f.gaL()
if(!C.a.aj(m,p)){p.a=m.length
m.push(p)}p=f.gaL()
o=p.gaV(p)
if(o){o=d.r
o.toString
c=p.d
if(c<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.gh4()){p=f.gfM()
o=d.y
o.a.uniform1f(o.d,p)
p=f.gfN()
o=d.z
o.a.uniform1f(o.d,p)
p=f.gfO()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.m)(b0),++g){q=b0[g].a
l=a.i(0,q)
if(l==null)l=0
q=a9.a.bT.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.ch
if(b0.length>0){r=b1.db
i=r.gT(r)
r=P.z
a8=new H.K([r,r])
for(r=a9.dx.r,q=r.length,g=0;g<r.length;r.length===q||(0,H.m)(r),++g){f=r[g]
a0=f.gaS()
e=a8.i(0,a0)
if(e==null)e=0
a8.m(0,a0,e+1)
d=J.eh(a9.a.bW.i(0,a0),e)
p=f.ghv(f)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.ghQ(f).i0()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=i.cc(f.ghv(f))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gaR(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gaw()
p=f.gbe()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gca(f)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gi1()
o=d.x
o.a.uniform1f(o.d,p)
p=f.gi2()
o=d.y
o.a.uniform1f(o.d,p)
f.gaw()
p=f.gaw()
if(!C.a.aj(m,p)){p.a=m.length
m.push(p)}p=f.gaw()
o=p.gaV(p)
if(o){o=d.dx
o.toString
c=p.gaV(p)
if(!c)o.a.uniform1i(o.d,0)
else{p=p.gh8(p)
o.a.uniform1i(o.d,p)}}f.gaL()
p=f.gdH()
o=d.z
o.toString
c=p.gh0(p)
b=p.gh1(p)
a2=p.gh2()
p=p.gh_()
o.a.uniform4f(o.d,c,b,a2,p)
p=f.gaL()
if(!C.a.aj(m,p)){p.a=m.length
m.push(p)}p=f.gaL()
o=p.gaV(p)
if(o){o=d.dy
o.toString
c=p.gaV(p)
if(!c)o.a.uniform1i(o.d,0)
else{p=p.gh8(p)
o.a.uniform1i(o.d,p)}}if(f.ghR()){p=f.ghP()
o=d.Q
o.a.uniform1f(o.d,p)
p=f.ghO()
o=d.ch
o.a.uniform1f(o.d,p)}if(f.gh4()){p=f.gfM()
o=d.cx
o.a.uniform1f(o.d,p)
p=f.gfN()
o=d.cy
o.a.uniform1f(o.d,p)
p=f.gfO()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.m)(b0),++g){q=b0[g].a
l=a8.i(0,q)
if(l==null)l=0
q=a9.a.bV.i(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.c){a9.a8(m,a9.Q.e)
b0=a9.a
r=a9.Q.e
b0.a9(b0.d4,r)}if(t.dx){b0=a9.a
r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.gT(r).bZ(0)}b0=b0.id
b0.toString
b0.a7(r.a2(0,!0))}if(t.cy){a9.a8(m,a9.ch)
b0=a9.a
r=a9.ch
b0.a9(b0.d5,r)
b0=t.r
if(b0.a){r=a9.a
q=a9.cx.f
r=r.d6
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a8(m,a9.cx.e)
b0=a9.a
r=a9.cx.e
b0.a9(b0.d7,r)}b0=t.x
r=b0.a
if(!r)q=b0.c
else q=!0
if(q){q=a9.a
p=a9.cy.ch
q=q.d8
q.a.uniform1f(q.d,p)}if(r){r=a9.a
q=a9.cy.f
r=r.d9
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a8(m,a9.cy.e)
b0=a9.a
r=a9.cy.e
b0.a9(b0.da,r)}}b0=t.y
r=b0.a
q=!r
if(q)p=b0.c
else p=!0
if(p){if(r){r=a9.a
p=a9.db.f
r=r.dc
r.a.uniform1f(r.d,p)}if(b0.c){a9.a8(m,a9.db.e)
r=a9.a
p=a9.db.e
r.a9(r.dd,p)}r=b1.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].O(b1)
r=b2.e
r.O(b1)
r.a1(b1)
r.a5(b1)
if(q)b0=b0.c
else b0=!0
if(b0)b1.a.disable(3042)
for(b0=b1.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b0.activeTexture(33984+r.a)
b0.bindTexture(34067,null)}}r=a9.a
r.toString
b0.useProgram(null)
r.x.bO()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.cA().aU}}
O.fo.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cy(a,C.d.Y(b+3,4)*4))}}
O.fp.prototype={
$2:function(a,b){return J.j9(a.a,b.a)}}
O.fq.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cX(a,C.d.Y(b+3,4)*4))}}
O.fr.prototype={
$2:function(a,b){return J.j9(a.a,b.a)}}
O.fs.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.d2(a,C.d.Y(b+3,4)*4))}}
O.ft.prototype={
$2:function(a,b){return J.j9(a.a,b.a)}}
O.fi.prototype={
aq:function(){var u,t=this
t.cn()
u=t.f
if(!(Math.abs(u-1)<$.t().a)){t.f=1
u=new D.p(t.b,u,1)
u.b=!0
t.a.P(u)}}}
O.bR.prototype={
P:function(a){return this.a.P(a)},
aO:function(){return this.P(null)},
aq:function(){},
bz:function(a){var u,t,s=this
if(!s.c.n(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aq()
u=s.a
u.a=null
u.P(null)}},
saY:function(a){var u,t=this,s=t.c
if(!s.c)t.bz(new A.S(s.a,!1,!0))
s=t.e
if(s!==a){if(s!=null)s.gl().M(0,t.gay())
u=t.e
t.e=a
a.gl().k(0,t.gay())
s=new D.p(t.b+".textureCube",u,t.e)
s.b=!0
t.a.P(s)}}}
O.fj.prototype={}
O.ak.prototype={
cN:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.p(s.b+".color",u,a)
t.b=!0
s.a.P(t)}},
aq:function(){this.cn()
this.cN(new V.C(1,1,1))},
saR:function(a,b){this.bz(new A.S(!0,!1,this.c.c))
this.cN(b)}}
O.fl.prototype={}
O.fm.prototype={
aq:function(){var u,t=this
t.co()
u=t.ch
if(!(Math.abs(u-1)<$.t().a)){t.ch=1
u=new D.p(t.b+".refraction",u,1)
u.b=!0
t.a.P(u)}}}
O.fn.prototype={
cO:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.t().a)){u.ch=a
t=new D.p(u.b+".shininess",t,a)
t.b=!0
u.a.P(t)}},
aq:function(){this.co()
this.cO(100)}}
O.d0.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.w():u},
P:function(a){var u=this.e
if(u!=null)u.u(a)},
aO:function(){return this.P(null)},
c9:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.i(0,n)
if(u==null){t=a.a
u=new A.h7(t,n)
u.bg(t,n)
u.bX(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.i(0,"posAttr")
u.Q=H.h(u.y.i(0,"fov"),"$iO")
u.ch=H.h(u.y.i(0,"ratio"),"$iO")
u.cx=H.h(u.y.i(0,"boxClr"),"$iB")
u.cy=H.h(u.y.i(0,"boxTxt"),"$iR")
u.db=H.h(u.y.i(0,"viewMat"),"$iZ")
a.bD(u)}o.a=u}if(b.e==null){t=b.d.bF(new Z.c7(a.a),$.a4())
t.ak($.a4()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.O(a)}t=a.d
s=a.c
r=o.a
r.O(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.cg(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.gT(s).bZ(0)
r=r.db
r.toString
r.a7(s.a2(0,!0))
t=b.e
if(t instanceof Z.ba){t.O(a)
t.a1(a)
t.a5(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.bO()
t=o.c
if(t!=null)t.a5(a)}}
O.h8.prototype={
gl:function(){var u=this.c
return u==null?this.c=D.w():u},
ad:function(a,b){},
c9:function(a,b){var u,t,s,r=this,q="SolidColor",p=r.a
if(p==null){u=a.fr.i(0,q)
if(u==null){p=a.a
u=new A.h9(p,q)
u.bg(p,q)
u.bX(0,"uniform mat4 projViewObjMat;                       \n                                                   \nattribute vec3 posAttr;                            \n                                                   \nvoid main()                                        \n{                                                  \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0); \n}                                                  \n","precision mediump float; \n                         \nuniform vec4 color;      \n                         \nvoid main()              \n{                        \n   gl_FragColor = color; \n}                        \n")
u.z=u.x.i(0,"posAttr")
u.Q=H.h(u.y.i(0,"color"),"$ibp")
u.ch=H.h(u.y.i(0,"projViewObjMat"),"$iZ")
a.bD(u)}r.a=u
p=u}t=b.e
if((!(t instanceof Z.ba)?b.e=null:t)==null){p=b.d.bF(new Z.c7(a.a),$.a4())
t=p.ak($.a4())
s=r.a
t.e=s.z.c
b.e=p
p=s}p.O(a)
t=r.b
p.Q.dG(t)
t=a.gdt()
p=p.ch
p.toString
p.a7(t.a2(0,!0))
t=b.e
t.O(a)
t.a1(a)
t.a5(a)
t=r.a
t.toString
a.a.useProgram(null)
t.x.bO()}}
O.d7.prototype={}
T.ct.prototype={
b0:function(a){},
e0:function(){return this.b0(null)},
as:function(a){var u,t=this
if(t.b!=null)return!1
t.b=a
a.c.gbP().k(0,t.ger())
t.b.c.gaH().k(0,t.geu())
t.b.c.gbe().k(0,t.gew())
u=t.b.e
u.gck(u).k(0,t.gfG())
t.b.e.gaH().k(0,t.gfE())
u=t.b.e
u.gcZ(u).k(0,t.gfC())
return!0},
es:function(a){if(!H.h(a,"$ia8").x.b.n(0,this.c))return
this.ch=this.Q=!0},
ev:function(a){var u,t=this
if(!t.Q)return
if(t.ch){H.h(a,"$ia8")
u=a.d.C(0,a.y)
u=new V.A(u.a,u.b)
if(u.w(u)<t.z)return
t.ch=!1}},
ex:function(a){var u=this
if(!u.Q)return
u.Q=!1
if(!u.ch)return
u.cJ(a)},
fH:function(a){this.ch=this.Q=!0},
fF:function(a){var u,t=this
if(!t.Q)return
if(t.ch){H.h(a,"$ic1")
u=a.d.C(0,a.y)
u=new V.A(u.a,u.b)
if(u.w(u)<t.z)return
t.ch=!1}},
fD:function(a){var u=this
if(!u.Q)return
u.Q=!1
if(!u.ch)return
u.cJ(a)},
cJ:function(a){var u,t,s,r,q,p,o,n,m
H.h(a,"$ia8")
u=a.d
t=u.a
s=a.c
r=t/s.c
q=u.b/s.d
s=this.a
u=this.d
p=C.i.aF(r*(u.r-1))
o=C.i.aF(q*(u.x-1))
s=s.a
t=u.x
s.bindFramebuffer(36160,s.createFramebuffer())
s.readBuffer(36064)
s.framebufferTexture2D(36160,36064,3553,u.b,0)
n=new Uint8Array(4)
s.readPixels(p,t-1-o,1,1,6408,5121,n)
s.bindFramebuffer(36160,null)
new T.hs(n,1,1).el()
u=n.length
if(0>=u)return H.c(n,0)
t=n[0]
if(1>=u)return H.c(n,1)
s=n[1]
if(2>=u)return H.c(n,2)
m=n[2]
if(3>=u)return H.c(n,3)
m=new T.cu(new V.A(r,q),V.cs(t,s,m,n[3]))
m.b=!0
s=this.x
if(s!=null)s.u(m)}}
T.cu.prototype={
h:function(a){return"ColorPicker: "+this.c.h(0)+" => "+this.d.h(0)}}
T.d8.prototype={}
T.hn.prototype={}
T.ho.prototype={
gl:function(){var u=this.y
return u==null?this.y=D.w():u}}
T.hp.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.w():u},
O:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
a5:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.hq.prototype={
dg:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.hp()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aA(u,k,r,34069,!1,!1)
t.aA(u,k,o,34070,!1,!1)
t.aA(u,k,q,34071,!1,!1)
t.aA(u,k,n,34072,!1,!1)
t.aA(u,k,p,34073,!1,!1)
t.aA(u,k,m,34074,!1,!1)
return u},
df:function(a){return this.dg(a,".png")},
aA:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.P(u,"load",new T.hr(this,u,!1,b,!1,d,a),!1)},
fv:function(a,b,c){var u,t,s,r
b=V.cl(b)
u=V.cl(a.width)
t=V.cl(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jd()
s.width=u
s.height=t
r=C.f.dD(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mn(r.getImageData(0,0,s.width,s.height))}}}
T.hr.prototype={
$1:function(a){var u=this,t=u.a,s=t.fv(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.q.hG(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.bQ()}++t.e}}
T.hs.prototype={
el:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
for(u=this.c,t=C.d.Y(u,2),s=this.b,r=this.a,q=r.length,p=s*4,--u;t>=0;--t){o=p*t
n=p*(u-t)
for(m=0;m<s;++m){l=4*m
k=o+l
j=n+l
for(i=0;i<4;++i){h=k+i
g=j+i
if(h<0||h>=q)return H.c(r,h)
f=r[h]
if(g<0||g>=q)return H.c(r,g)
r[h]=r[g]
r[g]=f}}}}}
X.et.prototype={
gl:function(){var u=this.fr
return u==null?this.fr=D.w():u},
W:function(a){var u=this.fr
if(u!=null)u.u(a)},
sae:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.p("width",u,b)
u.b=!0
t.W(u)}},
saa:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.p("height",u,b)
u.b=!0
t.W(u)}},
O:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=3553,f=36161,e=36160
if(i.f){u=a.a
t=u.drawingBufferWidth
s=i.r
if(typeof t!=="number")return t.p()
i.sae(0,C.b.U(t*s))
u=u.drawingBufferHeight
s=i.x
if(typeof u!=="number")return u.p()
i.saa(0,C.b.U(u*s))}if(i.y==null){u=a.a
t=i.ch
s=i.a
r=i.b
q=u.getParameter(3379)
p=V.cl(s)
o=V.cl(r)
q=V.cl(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(g,n)
u.texParameteri(g,10242,33071)
u.texParameteri(g,10243,33071)
u.texParameteri(g,10241,9729)
u.texParameteri(g,10240,9729)
C.q.dz(u,g,0,6408,p,o,0,6408,5121,h)
u.bindTexture(g,h)
m=T.kc(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.bQ()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.bQ()
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
a.c=C.b.U(s*i.a)
r=t.d
a.d=C.b.U(r*i.b)
l=t.a
k=i.c
j=C.b.U(l*k)
t=t.b
l=i.d
u.viewport(j,C.b.U(t*l),C.b.U(s*k),C.b.U(r*l))
u.clearDepth(i.db)
t=i.cx
u.clearColor(t.a,t.b,t.c,t.d)
u.clear(16640)},
a5:function(a){a.a.bindFramebuffer(36160,null)}}
X.jc.prototype={}
X.eZ.prototype={
gl:function(){var u=this.x
return u==null?this.x=D.w():u},
O:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.r(u)
q=C.b.U(r*u)
r=s.b
if(typeof t!=="number")return H.r(t)
p=C.b.U(r*t)
r=C.b.U(s.c*u)
a.c=r
s=C.b.U(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)},
a5:function(a){}}
X.f0.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.w():u},
O:function(a){var u
a.cy.bb(V.bj())
u=V.bj()
a.db.bb(u)},
a5:function(a){a.cy.av()
a.db.av()}}
X.cW.prototype={
gl:function(){var u=this.f
return u==null?this.f=D.w():u},
W:function(a){var u=this.f
if(u!=null)u.u(a)},
e4:function(){return this.W(null)},
O:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.al(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bb(k)
r=$.k1
if(r==null){r=V.k3()
q=V.ju()
p=$.kj
r=V.jU(r,q,p==null?$.kj=new V.x(0,0,-1):p)
$.k1=r
u=r}else u=r
r=s.b
if(r!=null){t=r.am(0,a,s)
if(t!=null)u=t.p(0,u)}a.db.bb(u)},
a5:function(a){a.cy.av()
a.db.av()}}
X.hj.prototype={}
V.j5.prototype={
$1:function(a){var u=C.b.dB(this.a.gh6(),2)
if(u!=="0.00")P.jG(u+" fps")}}
V.h4.prototype={
dQ:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.P(q,"scroll",new V.h6(o),!1)},
cS:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.fz()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.hL(C.a.hb(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
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
if(H.mK(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.lO(C.F,n,C.n,!1)
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
fz:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new R.hv()
t=P.u
u.a=new H.K([t,R.d4])
u.b=new H.K([t,R.dc])
u.c=u.K(0,q)
t=u.K(0,q).q(0,p)
s=T.T(new H.M("*"))
t.a.push(s)
t.c=!0
t=u.K(0,p).q(0,p)
s=new T.as()
r=[T.cP]
s.a=H.b([],r)
t.a.push(s)
t=T.T(new H.M("*"))
s.a.push(t)
t=u.K(0,p).q(0,"BoldEnd")
s=T.T(new H.M("*"))
t.a.push(s)
t.c=!0
t=u.K(0,q).q(0,o)
s=T.T(new H.M("_"))
t.a.push(s)
t.c=!0
t=u.K(0,o).q(0,o)
s=new T.as()
s.a=H.b([],r)
t.a.push(s)
t=T.T(new H.M("_"))
s.a.push(t)
t=u.K(0,o).q(0,n)
s=T.T(new H.M("_"))
t.a.push(s)
t.c=!0
t=u.K(0,q).q(0,m)
s=T.T(new H.M("`"))
t.a.push(s)
t.c=!0
t=u.K(0,m).q(0,m)
s=new T.as()
s.a=H.b([],r)
t.a.push(s)
t=T.T(new H.M("`"))
s.a.push(t)
t=u.K(0,m).q(0,"CodeEnd")
s=T.T(new H.M("`"))
t.a.push(s)
t.c=!0
t=u.K(0,q).q(0,l)
s=T.T(new H.M("["))
t.a.push(s)
t.c=!0
t=u.K(0,l).q(0,k)
s=T.T(new H.M("|"))
t.a.push(s)
s=u.K(0,l).q(0,j)
t=T.T(new H.M("]"))
s.a.push(t)
s.c=!0
s=u.K(0,l).q(0,l)
t=new T.as()
t.a=H.b([],r)
s.a.push(t)
s=T.T(new H.M("|]"))
t.a.push(s)
s=u.K(0,k).q(0,j)
t=T.T(new H.M("]"))
s.a.push(t)
s.c=!0
s=u.K(0,k).q(0,k)
t=new T.as()
t.a=H.b([],r)
s.a.push(t)
s=T.T(new H.M("|]"))
t.a.push(s)
u.K(0,q).q(0,i).a.push(new T.ej())
s=u.K(0,i).q(0,i)
t=new T.as()
t.a=H.b([],r)
s.a.push(t)
s=T.T(new H.M("*_`["))
t.a.push(s)
s=u.K(0,"BoldEnd")
s.d=s.a.aZ(p)
s=u.K(0,n)
s.d=s.a.aZ(o)
s=u.K(0,"CodeEnd")
s.d=s.a.aZ(m)
s=u.K(0,j)
s.d=s.a.aZ("Link")
s=u.K(0,i)
s.d=s.a.aZ(i)
this.b=u}}
V.h6.prototype={
$1:function(a){P.ke(C.h,new V.h5(this.a))}}
V.h5.prototype={
$0:function(){var u=C.b.U(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
M.j0.prototype={
$1:function(a){var u,t,s
for(u=this.a,t=0;t<u.length;++t){s=u[t]
s.sbM(0.99*s.e)
s.sbN(0.99*s.f)}}}
M.j1.prototype={
$1:function(a){var u,t,s,r,q,p,o,n=H.h(a,"$icu").d.hM()
for(u=this.a,t=0;t<u.length;++t)if(u[t].n(0,n)){u=this.b
if(t>=u.length)return H.c(u,t)
s=u[t]
s.sbM(1.21)
s.sbN(1.31)
u=C.o.dh()*2.8+0.2
if(u<0.001)r=0.001
else r=u>100?100:u
u=this.c.a
q=u.playbackRate
p=$.t()
p.toString
if(typeof q!=="number")return q.C()
if(!(Math.abs(q-r)<p.a))u.playbackRate=r
q=C.o.dh()*0.8+0.2
if(q<0)o=0
else o=q>1?1:q
q=u.volume
p=$.t()
p.toString
if(typeof q!=="number")return q.C()
if(!(Math.abs(q-o)<p.a))u.volume=o
W.mF(u.play(),null)
break}}};(function aliases(){var u=J.a.prototype
u.dK=u.h
u=J.cI.prototype
u.dL=u.h
u=T.cE.prototype
u.dJ=u.aG
u.cm=u.h
u=O.bR.prototype
u.cn=u.aq
u=O.ak.prototype
u.co=u.aq})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"mh","lH",6)
u(P,"mi","lI",6)
u(P,"mj","lJ",6)
t(P,"kv","mf",11)
var n
s(n=E.aq.prototype,"gdm",0,0,null,["$1","$0"],["dn","hm"],0,0)
s(n,"gdq",0,0,null,["$1","$0"],["dr","hn"],0,0)
s(n,"gdk",0,0,null,["$1","$0"],["dl","hl"],0,0)
s(n,"gdi",0,0,null,["$1","$0"],["dj","hi"],0,0)
r(n,"ghg","hh",3)
r(n,"ghj","hk",3)
s(n=E.d9.prototype,"gcp",0,0,null,["$1","$0"],["cr","cq"],0,0)
q(n,"ghy","du",11)
p(n=X.dh.prototype,"geS","eT",4)
p(n,"geG","eH",4)
p(n,"geM","eN",2)
p(n,"geW","eX",12)
p(n,"geU","eV",12)
p(n,"gf_","f0",2)
p(n,"gf3","f4",2)
p(n,"geQ","eR",2)
p(n,"gf1","f2",2)
p(n,"geO","eP",2)
p(n,"gf5","f6",20)
p(n,"gf7","f8",4)
p(n,"gfn","fo",5)
p(n,"gfj","fk",5)
p(n,"gfl","fm",5)
s(D.bc.prototype,"gdR",0,0,null,["$1","$0"],["ao","dS"],0,0)
s(n=D.cK.prototype,"gcH",0,0,null,["$1","$0"],["cI","eY"],0,0)
p(n,"gf9","fa",21)
r(n,"geA","eB",13)
r(n,"gfd","fe",13)
o(V.A.prototype,"gj","c0",14)
o(V.x.prototype,"gj","c0",14)
s(n=U.bM.prototype,"gaB",0,0,null,["$1","$0"],["D","a0"],0,0)
r(n,"gdT","dU",15)
r(n,"gfb","fc",15)
s(n=U.di.prototype,"gaB",0,0,null,["$1","$0"],["D","a0"],0,0)
p(n,"gbh","bi",1)
p(n,"gbj","bk",1)
p(n,"gbl","bm",1)
s(n=U.dj.prototype,"gaB",0,0,null,["$1","$0"],["D","a0"],0,0)
p(n,"gbh","bi",1)
p(n,"gbj","bk",1)
p(n,"gbl","bm",1)
p(n,"gen","eo",1)
p(n,"gep","eq",1)
p(n,"gdZ","e_",1)
p(n,"gdX","dY",1)
p(n,"gdV","dW",1)
p(U.dk.prototype,"gey","ez",1)
s(n=M.cv.prototype,"gV",0,0,null,["$1","$0"],["S","aN"],0,0)
r(n,"gff","fg",16)
r(n,"gfh","fi",16)
s(M.cw.prototype,"gV",0,0,null,["$1","$0"],["S","aN"],0,0)
s(n=M.cB.prototype,"gV",0,0,null,["$1","$0"],["S","aN"],0,0)
r(n,"geI","eJ",3)
r(n,"geK","eL",3)
s(n=O.cQ.prototype,"gay",0,0,null,["$1","$0"],["P","aO"],0,0)
s(n,"gft",0,0,null,["$1","$0"],["cL","fu"],0,0)
r(n,"geC","eD",17)
r(n,"geE","eF",17)
s(O.bR.prototype,"gay",0,0,null,["$1","$0"],["P","aO"],0,0)
s(O.d0.prototype,"gay",0,0,null,["$1","$0"],["P","aO"],0,0)
s(n=T.ct.prototype,"gcs",0,0,null,["$1","$0"],["b0","e0"],0,0)
p(n,"ger","es",1)
p(n,"geu","ev",1)
p(n,"gew","ex",1)
p(n,"gfG","fH",1)
p(n,"gfE","fF",1)
p(n,"gfC","fD",1)
s(X.cW.prototype,"ge3",0,0,null,["$1","$0"],["W","e4"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.N,null)
s(P.N,[H.jn,J.a,J.U,P.dE,P.j,H.cM,P.f2,H.cC,H.hL,H.hA,P.aG,H.bG,H.dV,P.ar,H.f8,H.f9,H.f4,P.e0,P.ib,P.ig,P.ap,P.dn,P.d6,P.hh,P.da,P.b8,P.iM,P.iG,P.iA,P.dD,P.n,P.ey,P.iL,P.b3,P.a7,P.ab,P.aF,P.fK,P.d3,P.dw,P.eY,P.bi,P.cO,P.ad,P.aV,P.u,P.aW,W.eD,W.E,W.cD,P.e5,P.iw,P.iB,T.ej,T.cE,T.cP,T.h_,R.d4,R.db,R.dc,R.hv,F.eo,F.fM,O.ai,O.bS,E.eu,E.aq,E.fS,E.d9,Z.dm,Z.c7,Z.ba,Z.be,Z.ax,D.ex,D.bd,D.Q,X.cr,X.cJ,X.f6,X.fc,X.a1,X.fA,X.hw,X.dh,D.bc,D.a0,D.fO,D.hc,V.C,V.X,V.eP,V.cR,V.ac,V.V,V.W,V.au,V.cY,V.A,V.x,U.di,U.dj,U.dk,M.cw,M.cB,M.ae,A.co,A.em,A.S,A.cy,A.cX,A.d2,A.fk,A.c2,A.c4,A.c5,A.de,A.hH,F.aH,F.bQ,F.bX,F.h0,F.h1,F.h2,F.h3,F.br,F.hU,F.hV,F.hY,F.hZ,O.d7,O.bR,O.fl,T.ct,T.hq,T.hs,X.hj,X.jc,X.f0,X.cW,V.h4])
s(J.a,[J.f3,J.cH,J.cI,J.aO,J.bP,J.bf,H.bV,W.d,W.ei,W.cp,W.aj,W.D,W.dq,W.a6,W.eH,W.eI,W.ds,W.cA,W.du,W.eK,W.i,W.dx,W.aK,W.f_,W.dz,W.aL,W.fb,W.fu,W.dF,W.dG,W.aQ,W.dH,W.dK,W.aR,W.dO,W.dQ,W.aT,W.dR,W.aU,W.dW,W.av,W.dZ,W.hu,W.aY,W.e1,W.hy,W.hN,W.e6,W.e8,W.ea,W.ec,W.ee,P.bh,P.dB,P.bk,P.dM,P.fQ,P.dX,P.bo,P.e3,P.en,P.dp,P.cZ,P.dT])
s(J.cI,[J.fL,J.c6,J.aP])
t(J.jm,J.aO)
s(J.bP,[J.cG,J.cF])
t(P.fa,P.dE)
s(P.fa,[H.dg,W.ia,W.i9,P.eU])
t(H.M,H.dg)
s(P.j,[H.eN,H.ff,H.i2])
s(P.f2,[H.fg,H.i3])
s(P.aG,[H.fH,H.f5,H.hK,H.ew,H.fY,P.bW,P.ag,P.hM,P.hJ,P.d5,P.eA,P.eG])
s(H.bG,[H.j7,H.hk,H.iX,H.iY,H.iZ,P.i6,P.i5,P.i7,P.i8,P.iK,P.iJ,P.ih,P.iq,P.il,P.im,P.io,P.ij,P.ip,P.ii,P.it,P.iu,P.is,P.ir,P.iS,P.iE,P.iD,P.iF,P.fe,P.eL,P.eM,W.j3,W.j4,W.fw,W.fy,W.fX,W.hg,W.ie,P.iU,P.eV,P.eW,P.er,F.ep,E.fT,E.fU,E.fV,E.ht,D.eQ,D.eR,F.iN,F.i0,F.i_,F.hW,F.hX,O.fo,O.fp,O.fq,O.fr,O.fs,O.ft,T.hr,V.j5,V.h6,V.h5,M.j0,M.j1])
s(H.hk,[H.he,H.bE])
t(P.fd,P.ar)
t(H.K,P.fd)
t(H.cL,H.eN)
t(H.cS,H.bV)
s(H.cS,[H.c9,H.cb])
t(H.ca,H.c9)
t(H.bU,H.ca)
t(H.cc,H.cb)
t(H.cT,H.cc)
s(H.cT,[H.fB,H.fC,H.fD,H.fE,H.fF,H.cU,H.fG])
t(P.i4,P.ib)
t(P.iC,P.iM)
t(P.iz,P.iG)
t(P.eB,P.hh)
t(P.eO,P.ey)
t(P.hO,P.eO)
t(P.hP,P.eB)
s(P.ab,[P.J,P.z])
s(P.ag,[P.bm,P.f1])
s(W.d,[W.H,W.eT,W.aS,W.cd,W.aX,W.aw,W.cf,W.i1,W.c8,P.es,P.b9])
s(W.H,[W.Y,W.aE])
s(W.Y,[W.l,P.k])
s(W.l,[W.ek,W.el,W.bb,W.eX,W.bO,W.fZ])
t(W.eC,W.aj)
t(W.bJ,W.dq)
s(W.a6,[W.eE,W.eF])
t(W.dt,W.ds)
t(W.cz,W.dt)
t(W.dv,W.du)
t(W.eJ,W.dv)
t(W.aI,W.cp)
t(W.dy,W.dx)
t(W.eS,W.dy)
t(W.dA,W.dz)
t(W.bN,W.dA)
t(W.aZ,W.i)
s(W.aZ,[W.bg,W.am,W.bn])
t(W.fv,W.dF)
t(W.fx,W.dG)
t(W.dI,W.dH)
t(W.fz,W.dI)
t(W.dL,W.dK)
t(W.cV,W.dL)
t(W.dP,W.dO)
t(W.fN,W.dP)
t(W.fW,W.dQ)
t(W.ce,W.cd)
t(W.ha,W.ce)
t(W.dS,W.dR)
t(W.hb,W.dS)
t(W.hf,W.dW)
t(W.e_,W.dZ)
t(W.hl,W.e_)
t(W.cg,W.cf)
t(W.hm,W.cg)
t(W.e2,W.e1)
t(W.hx,W.e2)
t(W.b_,W.am)
t(W.e7,W.e6)
t(W.ic,W.e7)
t(W.dr,W.cA)
t(W.e9,W.e8)
t(W.iv,W.e9)
t(W.eb,W.ea)
t(W.dJ,W.eb)
t(W.ed,W.ec)
t(W.iH,W.ed)
t(W.ef,W.ee)
t(W.iI,W.ef)
t(W.id,P.d6)
t(P.a9,P.iB)
t(P.dC,P.dB)
t(P.f7,P.dC)
t(P.dN,P.dM)
t(P.fI,P.dN)
t(P.dY,P.dX)
t(P.hi,P.dY)
t(P.e4,P.e3)
t(P.hz,P.e4)
t(P.eq,P.dp)
t(P.fJ,P.b9)
t(P.dU,P.dT)
t(P.hd,P.dU)
s(T.cE,[T.as,R.dd])
s(E.eu,[Z.cq,A.d_,T.d8])
s(D.Q,[D.aM,D.aN,D.p,X.fP,T.cu])
s(X.fP,[X.cN,X.a8,X.bT,X.c1])
s(O.ai,[D.cK,U.bM,M.cv])
s(D.ex,[U.ez,U.a2])
s(U.a2,[U.bI,U.c0])
s(A.d_,[A.fh,A.h7,A.h9])
s(A.de,[A.df,A.hE,A.hF,A.hG,A.hC,A.O,A.hD,A.B,A.bp,A.hI,A.c3,A.Z,A.bq,A.R])
s(O.d7,[O.cQ,O.d0,O.h8])
s(O.bR,[O.fi,O.fj,O.ak])
s(O.ak,[O.fm,O.fn])
s(T.d8,[T.hn,T.hp])
t(T.ho,T.hn)
s(X.hj,[X.et,X.eZ])
u(H.dg,H.hL)
u(H.c9,P.n)
u(H.ca,H.cC)
u(H.cb,P.n)
u(H.cc,H.cC)
u(P.dE,P.n)
u(W.dq,W.eD)
u(W.ds,P.n)
u(W.dt,W.E)
u(W.du,P.n)
u(W.dv,W.E)
u(W.dx,P.n)
u(W.dy,W.E)
u(W.dz,P.n)
u(W.dA,W.E)
u(W.dF,P.ar)
u(W.dG,P.ar)
u(W.dH,P.n)
u(W.dI,W.E)
u(W.dK,P.n)
u(W.dL,W.E)
u(W.dO,P.n)
u(W.dP,W.E)
u(W.dQ,P.ar)
u(W.cd,P.n)
u(W.ce,W.E)
u(W.dR,P.n)
u(W.dS,W.E)
u(W.dW,P.ar)
u(W.dZ,P.n)
u(W.e_,W.E)
u(W.cf,P.n)
u(W.cg,W.E)
u(W.e1,P.n)
u(W.e2,W.E)
u(W.e6,P.n)
u(W.e7,W.E)
u(W.e8,P.n)
u(W.e9,W.E)
u(W.ea,P.n)
u(W.eb,W.E)
u(W.ec,P.n)
u(W.ed,W.E)
u(W.ee,P.n)
u(W.ef,W.E)
u(P.dB,P.n)
u(P.dC,W.E)
u(P.dM,P.n)
u(P.dN,W.E)
u(P.dX,P.n)
u(P.dY,W.E)
u(P.e3,P.n)
u(P.e4,W.E)
u(P.dp,P.ar)
u(P.dT,P.n)
u(P.dU,W.E)})()
var v={mangledGlobalNames:{z:"int",J:"double",ab:"num",u:"String",b3:"bool",ad:"Null",bi:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.Q]},{func:1,ret:-1,args:[D.Q]},{func:1,ret:-1,args:[W.am]},{func:1,ret:-1,args:[P.z,[P.j,E.aq]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bn]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.ad,args:[,]},{func:1,ret:P.ad,args:[,,]},{func:1,ret:-1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bg]},{func:1,ret:-1,args:[P.z,[P.j,D.a0]]},{func:1,ret:P.J},{func:1,ret:-1,args:[P.z,[P.j,U.a2]]},{func:1,ret:-1,args:[P.z,[P.j,M.ae]]},{func:1,ret:-1,args:[P.z,[P.j,V.ac]]},{func:1,ret:P.ad,args:[,],opt:[P.aV]},{func:1,ret:[P.ap,,],args:[,]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:P.b3,args:[[P.j,D.a0]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.f=W.bb.prototype
C.D=J.a.prototype
C.a=J.aO.prototype
C.i=J.cF.prototype
C.d=J.cG.prototype
C.j=J.cH.prototype
C.b=J.bP.prototype
C.c=J.bf.prototype
C.E=J.aP.prototype
C.p=J.fL.prototype
C.q=P.cZ.prototype
C.k=J.c6.prototype
C.r=W.b_.prototype
C.t=W.c8.prototype
C.l=function getTagFallback(o) {
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
C.m=function(hooks) { return hooks; }

C.A=new P.fK()
C.n=new P.hO()
C.B=new P.hP()
C.o=new P.iw()
C.e=new P.iC()
C.h=new P.aF(0)
C.C=new P.aF(5e6)
C.F=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.z])})();(function staticFields(){$.ah=0
$.bF=null
$.jK=null
$.ky=null
$.kt=null
$.kB=null
$.iV=null
$.j_=null
$.jE=null
$.bt=null
$.cj=null
$.ck=null
$.jx=!1
$.I=C.e
$.a_=[]
$.jZ=null
$.k2=null
$.bY=null
$.k9=null
$.ki=null
$.kk=null
$.hQ=null
$.hR=null
$.hS=null
$.kj=null
$.k1=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mR","kG",function(){return H.kx("_$dart_dartClosure")})
u($,"mT","jH",function(){return H.kx("_$dart_js")})
u($,"mU","kH",function(){return H.ao(H.hB({
toString:function(){return"$receiver$"}}))})
u($,"mV","kI",function(){return H.ao(H.hB({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mW","kJ",function(){return H.ao(H.hB(null))})
u($,"mX","kK",function(){return H.ao(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n_","kN",function(){return H.ao(H.hB(void 0))})
u($,"n0","kO",function(){return H.ao(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mZ","kM",function(){return H.ao(H.kg(null))})
u($,"mY","kL",function(){return H.ao(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"n2","kQ",function(){return H.ao(H.kg(void 0))})
u($,"n1","kP",function(){return H.ao(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nf","jI",function(){return P.lG()})
u($,"ng","kU",function(){return P.lv("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"n9","kT",function(){return Z.aa(0)})
u($,"n3","kR",function(){return Z.aa(511)})
u($,"nb","a4",function(){return Z.aa(1)})
u($,"na","aC",function(){return Z.aa(2)})
u($,"n5","aB",function(){return Z.aa(4)})
u($,"nc","b6",function(){return Z.aa(8)})
u($,"nd","aD",function(){return Z.aa(16)})
u($,"n6","cm",function(){return Z.aa(32)})
u($,"n7","cn",function(){return Z.aa(64)})
u($,"n8","kS",function(){return Z.aa(96)})
u($,"ne","bB",function(){return Z.aa(128)})
u($,"n4","aA",function(){return Z.aa(256)})
u($,"mQ","kF",function(){return new V.eP(1e-9)})
u($,"mP","t",function(){return $.kF()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bV,ArrayBufferView:H.bV,Float32Array:H.bU,Float64Array:H.bU,Int16Array:H.fB,Int32Array:H.fC,Int8Array:H.fD,Uint16Array:H.fE,Uint32Array:H.fF,Uint8ClampedArray:H.cU,CanvasPixelArray:H.cU,Uint8Array:H.fG,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.ei,HTMLAnchorElement:W.ek,HTMLAreaElement:W.el,Blob:W.cp,HTMLCanvasElement:W.bb,CDATASection:W.aE,CharacterData:W.aE,Comment:W.aE,ProcessingInstruction:W.aE,Text:W.aE,CSSPerspective:W.eC,CSSCharsetRule:W.D,CSSConditionRule:W.D,CSSFontFaceRule:W.D,CSSGroupingRule:W.D,CSSImportRule:W.D,CSSKeyframeRule:W.D,MozCSSKeyframeRule:W.D,WebKitCSSKeyframeRule:W.D,CSSKeyframesRule:W.D,MozCSSKeyframesRule:W.D,WebKitCSSKeyframesRule:W.D,CSSMediaRule:W.D,CSSNamespaceRule:W.D,CSSPageRule:W.D,CSSRule:W.D,CSSStyleRule:W.D,CSSSupportsRule:W.D,CSSViewportRule:W.D,CSSStyleDeclaration:W.bJ,MSStyleCSSProperties:W.bJ,CSS2Properties:W.bJ,CSSImageValue:W.a6,CSSKeywordValue:W.a6,CSSNumericValue:W.a6,CSSPositionValue:W.a6,CSSResourceValue:W.a6,CSSUnitValue:W.a6,CSSURLImageValue:W.a6,CSSStyleValue:W.a6,CSSMatrixComponent:W.aj,CSSRotation:W.aj,CSSScale:W.aj,CSSSkew:W.aj,CSSTranslation:W.aj,CSSTransformComponent:W.aj,CSSTransformValue:W.eE,CSSUnparsedValue:W.eF,DataTransferItemList:W.eH,DOMException:W.eI,ClientRectList:W.cz,DOMRectList:W.cz,DOMRectReadOnly:W.cA,DOMStringList:W.eJ,DOMTokenList:W.eK,Element:W.Y,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aI,FileList:W.eS,FileWriter:W.eT,HTMLFormElement:W.eX,Gamepad:W.aK,History:W.f_,HTMLCollection:W.bN,HTMLFormControlsCollection:W.bN,HTMLOptionsCollection:W.bN,ImageData:W.aL,HTMLImageElement:W.bO,KeyboardEvent:W.bg,Location:W.fb,MediaList:W.fu,MIDIInputMap:W.fv,MIDIOutputMap:W.fx,MimeType:W.aQ,MimeTypeArray:W.fz,PointerEvent:W.am,MouseEvent:W.am,DragEvent:W.am,Document:W.H,DocumentFragment:W.H,HTMLDocument:W.H,ShadowRoot:W.H,XMLDocument:W.H,Attr:W.H,DocumentType:W.H,Node:W.H,NodeList:W.cV,RadioNodeList:W.cV,Plugin:W.aR,PluginArray:W.fN,RTCStatsReport:W.fW,HTMLSelectElement:W.fZ,SourceBuffer:W.aS,SourceBufferList:W.ha,SpeechGrammar:W.aT,SpeechGrammarList:W.hb,SpeechRecognitionResult:W.aU,Storage:W.hf,CSSStyleSheet:W.av,StyleSheet:W.av,TextTrack:W.aX,TextTrackCue:W.aw,VTTCue:W.aw,TextTrackCueList:W.hl,TextTrackList:W.hm,TimeRanges:W.hu,Touch:W.aY,TouchEvent:W.bn,TouchList:W.hx,TrackDefaultList:W.hy,CompositionEvent:W.aZ,FocusEvent:W.aZ,TextEvent:W.aZ,UIEvent:W.aZ,URL:W.hN,VideoTrackList:W.i1,WheelEvent:W.b_,Window:W.c8,DOMWindow:W.c8,CSSRuleList:W.ic,ClientRect:W.dr,DOMRect:W.dr,GamepadList:W.iv,NamedNodeMap:W.dJ,MozNamedAttrMap:W.dJ,SpeechRecognitionResultList:W.iH,StyleSheetList:W.iI,SVGLength:P.bh,SVGLengthList:P.f7,SVGNumber:P.bk,SVGNumberList:P.fI,SVGPointList:P.fQ,SVGStringList:P.hi,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.bo,SVGTransformList:P.hz,AudioBuffer:P.en,AudioParamMap:P.eq,AudioTrackList:P.es,AudioContext:P.b9,webkitAudioContext:P.b9,BaseAudioContext:P.b9,OfflineAudioContext:P.fJ,WebGL2RenderingContext:P.cZ,SQLResultSetRowList:P.hd})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cS.$nativeSuperclassTag="ArrayBufferView"
H.c9.$nativeSuperclassTag="ArrayBufferView"
H.ca.$nativeSuperclassTag="ArrayBufferView"
H.bU.$nativeSuperclassTag="ArrayBufferView"
H.cb.$nativeSuperclassTag="ArrayBufferView"
H.cc.$nativeSuperclassTag="ArrayBufferView"
H.cT.$nativeSuperclassTag="ArrayBufferView"
W.cd.$nativeSuperclassTag="EventTarget"
W.ce.$nativeSuperclassTag="EventTarget"
W.cf.$nativeSuperclassTag="EventTarget"
W.cg.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.kz,[])
else M.kz([])})})()
//# sourceMappingURL=test.dart.js.map
