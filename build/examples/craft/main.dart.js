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
a[c]=function(){a[c]=function(){H.oE(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kG"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kG"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kG(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kk:function kk(){},
jU:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
mJ:function(){return new P.i5("No element")},
ds:function(a,b,c,d){if(c-b<=32)H.nc(a,b,c,d)
else H.nb(a,b,c,d)},
nc:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.Z()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.b.l(a,s,a[q])
s=q}C.b.l(a,s,t)}},
nb:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.c.a6(a4-a3+1,6),d=a3+e,c=a4-e,b=C.c.a6(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.Z()
if(a1>0){p=q
q=r
r=p}C.b.l(a2,d,u)
C.b.l(a2,b,s)
C.b.l(a2,c,q)
if(a3<0||a3>=a2.length)return H.c(a2,a3)
C.b.l(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.c(a2,a4)
C.b.l(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.G(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.B()
if(k<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.b.l(a2,m,a2[o])
C.b.l(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.Z()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.b.l(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.b.l(a2,o,a2[n])
C.b.l(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.c(a2,n)
C.b.l(a2,m,a2[n])
C.b.l(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.B()
if(g<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.b.l(a2,m,a2[o])
C.b.l(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.Z()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.Z()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.B()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.b.l(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.b.l(a2,o,a2[n])
C.b.l(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.b.l(a2,m,a2[n])
C.b.l(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.c(a2,a1)
C.b.l(a2,a3,a2[a1])
C.b.l(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.c(a2,a1)
C.b.l(a2,a4,a2[a1])
C.b.l(a2,a1,r)
H.ds(a2,a3,o-2,a5)
H.ds(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.c(a2,o)
if(!J.G(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.c(a2,n)
if(!J.G(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.b.l(a2,m,a2[o])
C.b.l(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.B()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.b.l(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.b.l(a2,o,a2[n])
C.b.l(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.b.l(a2,m,a2[n])
C.b.l(a2,n,l)}n=j
break}}}H.ds(a2,o,n,a5)}else H.ds(a2,o,n,a5)},
R:function R(a){this.a=a},
ft:function ft(){},
d5:function d5(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fY:function fY(a,b,c){this.a=a
this.b=b
this.$ti=c},
fZ:function fZ(a,b){this.a=null
this.b=a
this.c=b},
j5:function j5(a,b,c){this.a=a
this.b=b
this.$ti=c},
j6:function j6(a,b){this.a=a
this.b=b},
cV:function cV(){},
iJ:function iJ(){},
dI:function dI(){},
mD:function(){throw H.e(P.z("Cannot modify unmodifiable Map"))},
eK:function(a){var u,t=H.oF(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oq:function(a){return v.types[a]},
lV:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.N(a).$iB},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aw(a)
if(typeof u!=="string")throw H.e(H.ah(a))
return u},
cl:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
lg:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.c(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.e(P.Z(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.G(s,q)|32)>t)return}return parseInt(a,b)},
cm:function(a){return H.mV(a)+H.lJ(H.cG(a),0,null)},
mV:function(a){var u,t,s,r,q,p,o,n=J.N(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.O||!!n.$ibr){r=C.q(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.eK(t.length>1&&C.a.G(t,0)===36?C.a.at(t,1):t)},
mW:function(){if(!!self.location)return self.location.href
return},
lf:function(a){var u,t,s,r,q=J.al(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
n3:function(a){var u,t,s,r=H.b([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.t)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.ah(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.b8(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.e(H.ah(s))}return H.lf(r)},
lh:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.ah(s))
if(s<0)throw H.e(H.ah(s))
if(s>65535)return H.n3(a)}return H.lf(a)},
n4:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dk:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.b8(u,10))>>>0,56320|u&1023)}}throw H.e(P.Z(a,0,1114111,null,null))},
bM:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
n2:function(a){var u=H.bM(a).getFullYear()+0
return u},
n0:function(a){var u=H.bM(a).getMonth()+1
return u},
mX:function(a){var u=H.bM(a).getDate()+0
return u},
mY:function(a){var u=H.bM(a).getHours()+0
return u},
n_:function(a){var u=H.bM(a).getMinutes()+0
return u},
n1:function(a){var u=H.bM(a).getSeconds()+0
return u},
mZ:function(a){var u=H.bM(a).getMilliseconds()+0
return u},
d:function(a){throw H.e(H.ah(a))},
c:function(a,b){if(a==null)J.al(a)
throw H.e(H.b1(a,b))},
b1:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ax(!0,b,s,null)
u=J.al(a)
if(!(b<0)){if(typeof u!=="number")return H.d(u)
t=b>=u}else t=!0
if(t)return P.I(b,a,s,null,u)
return P.hF(b,s)},
ok:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bn(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bn(a,c,!0,b,"end",u)
return new P.ax(!0,b,"end",null)},
ah:function(a){return new P.ax(!0,a,null,null)},
bY:function(a){if(typeof a!=="number")throw H.e(H.ah(a))
return a},
e:function(a){var u
if(a==null)a=new P.df()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.m0})
u.name=""}else u.toString=H.m0
return u},
m0:function(){return J.aw(this.dartException)},
v:function(a){throw H.e(a)},
t:function(a){throw H.e(P.bB(a))},
aJ:function(a){var u,t,s,r,q,p
a=H.lZ(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.r])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ix(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iy:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lo:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lc:function(a,b){return new H.hp(a,b==null?null:b.method)},
kl:function(a,b){var u=b==null,t=u?null:b.method
return new H.fN(a,t,u?null:b.receiver)},
c2:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.k2(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.b8(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kl(H.f(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lc(H.f(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.m7()
q=$.m8()
p=$.m9()
o=$.ma()
n=$.md()
m=$.me()
l=$.mc()
$.mb()
k=$.mg()
j=$.mf()
i=r.ap(u)
if(i!=null)return f.$1(H.kl(u,i))
else{i=q.ap(u)
if(i!=null){i.method="call"
return f.$1(H.kl(u,i))}else{i=p.ap(u)
if(i==null){i=o.ap(u)
if(i==null){i=n.ap(u)
if(i==null){i=m.ap(u)
if(i==null){i=l.ap(u)
if(i==null){i=o.ap(u)
if(i==null){i=k.ap(u)
if(i==null){i=j.ap(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lc(u,i))}}return f.$1(new H.iI(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.du()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ax(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.du()
return a},
kI:function(a){var u
if(a==null)return new H.em(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.em(a)},
lQ:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
ou:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.w("Unsupported number of arguments for wrapped closure"))},
bZ:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ou)
a.$identity=u
return u},
mC:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.i7().constructor.prototype):Object.create(new H.c4(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ay
if(typeof t!=="number")return t.k()
$.ay=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.l1(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.my(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.l1(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
my:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oq,a)
if(typeof a=="function")if(b)return a
else{u=c?H.l0:H.kb
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.e("Error in functionType of tearoff")},
mz:function(a,b,c,d){var u=H.kb
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
l1:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mB(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mz(t,!r,u,b)
if(t===0){r=$.ay
if(typeof r!=="number")return r.k()
$.ay=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c5
return new Function(r+H.f(q==null?$.c5=H.f7("self"):q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ay
if(typeof r!=="number")return r.k()
$.ay=r+1
o+=r
r="return function("+o+"){return this."
q=$.c5
return new Function(r+H.f(q==null?$.c5=H.f7("self"):q)+"."+H.f(u)+"("+o+");}")()},
mA:function(a,b,c,d){var u=H.kb,t=H.l0
switch(b?-1:a){case 0:throw H.e(H.n9("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mB:function(a,b){var u,t,s,r,q,p,o,n=$.c5
if(n==null)n=$.c5=H.f7("self")
u=$.l_
if(u==null)u=$.l_=H.f7("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mA(s,!q,t,b)
if(s===1){n="return function(){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+");"
u=$.ay
if(typeof u!=="number")return u.k()
$.ay=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+", "+o+");"
u=$.ay
if(typeof u!=="number")return u.k()
$.ay=u+1
return new Function(n+u+"}")()},
kG:function(a,b,c,d,e,f,g){return H.mC(a,b,c,d,!!e,!!f,g)},
kb:function(a){return a.a},
l0:function(a){return a.c},
f7:function(a){var u,t,s,r=new H.c4("self","target","receiver","name"),q=J.ki(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
oz:function(a,b){throw H.e(H.mw(a,H.eK(b.substring(2))))},
m:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else u=!0
if(u)return a
H.oz(a,b)},
om:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mw:function(a,b){return new H.f8("CastError: "+P.kg(a)+": type '"+H.f(H.od(a))+"' is not a subtype of type '"+b+"'")},
od:function(a){var u,t=J.N(a)
if(!!t.$ic7){u=H.om(t)
if(u!=null)return H.oA(u)
return"Closure"}return H.cm(a)},
oE:function(a){throw H.e(new P.fm(a))},
n9:function(a){return new H.hN(a)},
lS:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cG:function(a){if(a==null)return
return a.$ti},
pG:function(a,b,c){return H.k0(a["$a"+H.f(c)],H.cG(b))},
op:function(a,b,c,d){var u=H.k0(a["$a"+H.f(c)],H.cG(b))
return u==null?null:u[d]},
lT:function(a,b,c){var u=H.k0(a["$a"+H.f(b)],H.cG(a))
return u==null?null:u[c]},
c0:function(a,b){var u=H.cG(a)
return u==null?null:u[b]},
oA:function(a){return H.bt(a,null)},
bt:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.eK(a[0].name)+H.lJ(a,1,b)
if(typeof a=="function")return H.eK(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.f(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.f(b[t])}if('func' in a)return H.nL(a,b)
if('futureOr' in a)return"FutureOr<"+H.bt("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nL:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.r])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.a.k(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a3)p+=" extends "+H.bt(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bt(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bt(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bt(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.on(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bt(d[c],a0)+(" "+H.f(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lJ:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.T("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bt(p,c)}return"<"+u.h(0)+">"},
k0:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pE:function(a,b,c){return a.apply(b,H.k0(J.N(b)["$a"+H.f(c)],H.cG(b)))},
pF:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ov:function(a){var u,t,s,r,q=$.lU.$1(a),p=$.jQ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jY[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.lO.$2(a,q)
if(q!=null){p=$.jQ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jY[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jZ(u)
$.jQ[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jY[q]=u
return u}if(s==="-"){r=H.jZ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lX(a,u)
if(s==="*")throw H.e(P.iH(q))
if(v.leafTags[q]===true){r=H.jZ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lX(a,u)},
lX:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kK(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jZ:function(a){return J.kK(a,!1,null,!!a.$iB)},
ox:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jZ(u)
else return J.kK(u,c,null,null)},
os:function(){if(!0===$.kJ)return
$.kJ=!0
H.ot()},
ot:function(){var u,t,s,r,q,p,o,n
$.jQ=Object.create(null)
$.jY=Object.create(null)
H.or()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lY.$1(q)
if(p!=null){o=H.ox(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
or:function(){var u,t,s,r,q,p,o=C.B()
o=H.bX(C.C,H.bX(C.D,H.bX(C.r,H.bX(C.r,H.bX(C.E,H.bX(C.F,H.bX(C.G(C.q),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lU=new H.jV(r)
$.lO=new H.jW(q)
$.lY=new H.jX(p)},
bX:function(a,b){return a(b)||b},
mL:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.e(P.P("Illegal RegExp pattern ("+String(p)+")",a,null))},
oC:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
ol:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lZ:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
m_:function(a,b,c){var u=H.oD(a,b,c)
return u},
oD:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lZ(b),'g'),H.ol(c))},
ff:function ff(){},
fg:function fg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ix:function ix(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hp:function hp(a,b){this.a=a
this.b=b},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c},
iI:function iI(a){this.a=a},
k2:function k2(a){this.a=a},
em:function em(a){this.a=a
this.b=null},
c7:function c7(){},
id:function id(){},
i7:function i7(){},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f8:function f8(a){this.a=a},
hN:function hN(a){this.a=a},
J:function J(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fQ:function fQ(a,b){this.a=a
this.b=b
this.c=null},
d4:function d4(a,b){this.a=a
this.$ti=b},
fR:function fR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jV:function jV(a){this.a=a},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
fM:function fM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bV:function(a){return a},
mS:function(a){return new Int8Array(a)},
aK:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.b1(b,a))},
nJ:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.e(H.ok(a,b,c))
return b},
ci:function ci(){},
bi:function bi(){},
da:function da(){},
cj:function cj(){},
db:function db(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
dc:function dc(){},
bL:function bL(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
cy:function cy(){},
on:function(a){return J.l3(a?Object.keys(a):[],null)},
oF:function(a){return v.mangledGlobalNames[a]},
oy:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kK:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jT:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kJ==null){H.os()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.iH("Return interceptor for "+H.f(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kV()]
if(r!=null)return r
r=H.ov(a)
if(r!=null)return r
if(typeof a=="function")return C.P
u=Object.getPrototypeOf(a)
if(u==null)return C.x
if(u===Object.prototype)return C.x
if(typeof s=="function"){Object.defineProperty(s,$.kV(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
mK:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.kY(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.Z(a,0,4294967295,"length",null))
return J.l3(new Array(a),b)},
l3:function(a,b){return J.ki(H.b(a,[b]))},
ki:function(a){a.fixed$length=Array
return a},
N:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cZ.prototype
return J.cY.prototype}if(typeof a=="string")return J.be.prototype
if(a==null)return J.d_.prototype
if(typeof a=="boolean")return J.fL.prototype
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.a3)return a
return J.jT(a)},
b2:function(a){if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.a3)return a
return J.jT(a)},
jR:function(a){if(a==null)return a
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.a3)return a
return J.jT(a)},
lR:function(a){if(typeof a=="number")return J.bI.prototype
if(a==null)return a
if(!(a instanceof P.a3))return J.br.prototype
return a},
oo:function(a){if(typeof a=="number")return J.bI.prototype
if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(!(a instanceof P.a3))return J.br.prototype
return a},
kH:function(a){if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(!(a instanceof P.a3))return J.br.prototype
return a},
jS:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.a3)return a
return J.jT(a)},
G:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).p(a,b)},
cJ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lV(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b2(a).j(a,b)},
k6:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.lV(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.jR(a).l(a,b,c)},
mn:function(a,b){return J.kH(a).G(a,b)},
mo:function(a,b,c){return J.jS(a).hG(a,b,c)},
mp:function(a,b,c,d){return J.jS(a).i6(a,b,c,d)},
mq:function(a,b){return J.kH(a).T(a,b)},
k7:function(a,b){return J.oo(a).bH(a,b)},
k8:function(a,b){return J.jR(a).J(a,b)},
mr:function(a,b,c,d){return J.jS(a).dS(a,b,c,d)},
k9:function(a){return J.lR(a).bK(a)},
kX:function(a,b){return J.jR(a).K(a,b)},
bv:function(a){return J.N(a).gH(a)},
bw:function(a){return J.jR(a).ga_(a)},
al:function(a){return J.b2(a).gm(a)},
ms:function(a,b){return J.jS(a).j3(a,b)},
ka:function(a){return J.lR(a).ax(a)},
aw:function(a){return J.N(a).h(a)},
a:function a(){},
fL:function fL(){},
d_:function d_(){},
d0:function d0(){},
hu:function hu(){},
br:function br(){},
bf:function bf(){},
bd:function bd(a){this.$ti=a},
kj:function kj(a){this.$ti=a},
a7:function a7(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bI:function bI(){},
cZ:function cZ(){},
cY:function cY(){},
be:function be(){}},P={
nn:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oe()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bZ(new P.j8(s),1)).observe(u,{childList:true})
return new P.j7(s,u,t)}else if(self.setImmediate!=null)return P.of()
return P.og()},
no:function(a){self.scheduleImmediate(H.bZ(new P.j9(a),0))},
np:function(a){self.setImmediate(H.bZ(new P.ja(a),0))},
nq:function(a){P.kt(C.k,a)},
kt:function(a,b){var u=C.c.a6(a.a,1000)
return P.nt(u<0?0:u,b)},
ln:function(a,b){var u=C.c.a6(a.a,1000)
return P.nu(u<0?0:u,b)},
nt:function(a,b){var u=new P.es()
u.eT(a,b)
return u},
nu:function(a,b){var u=new P.es()
u.eU(a,b)
return u},
o7:function(){var u,t
for(;u=$.bW,u!=null;){$.cF=null
t=u.b
$.bW=t
if(t==null)$.cE=null
u.a.$0()}},
oc:function(){$.kE=!0
try{P.o7()}finally{$.cF=null
$.kE=!1
if($.bW!=null)$.kW().$1(P.lP())}},
oa:function(a){var u=new P.dQ(a)
if($.bW==null){$.bW=$.cE=u
if(!$.kE)$.kW().$1(P.lP())}else $.cE=$.cE.b=u},
ob:function(a){var u,t,s=$.bW
if(s==null){P.oa(a)
$.cF=$.cE
return}u=new P.dQ(a)
t=$.cF
if(t==null){u.b=s
$.bW=$.cF=u}else{u.b=t.b
$.cF=t.b=u
if(u.b==null)$.cE=u}},
ks:function(a,b){var u=$.ar
if(u===C.f)return P.kt(a,b)
return P.kt(a,u.ig(b))},
ir:function(a,b){var u=$.ar
if(u===C.f)return P.ln(a,b)
return P.ln(a,u.dt(b,P.dB))},
lK:function(a,b,c,d,e){var u={}
u.a=d
P.ob(new P.jO(u,e))},
o8:function(a,b,c,d){var u,t=$.ar
if(t===c)return d.$0()
$.ar=c
u=t
try{t=d.$0()
return t}finally{$.ar=u}},
o9:function(a,b,c,d,e){var u,t=$.ar
if(t===c)return d.$1(e)
$.ar=c
u=t
try{t=d.$1(e)
return t}finally{$.ar=u}},
j8:function j8(a){this.a=a},
j7:function j7(a,b,c){this.a=a
this.b=b
this.c=c},
j9:function j9(a){this.a=a},
ja:function ja(a){this.a=a},
es:function es(){this.c=0},
jz:function jz(a,b){this.a=a
this.b=b},
jy:function jy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dQ:function dQ(a){this.a=a
this.b=null},
dw:function dw(){},
ia:function ia(){},
dB:function dB(){},
jH:function jH(){},
jO:function jO(a,b){this.a=a
this.b=b},
jo:function jo(){},
jp:function jp(a,b){this.a=a
this.b=b},
jq:function jq(a,b,c){this.a=a
this.b=b
this.c=c},
mM:function(a,b,c){return H.lQ(a,new H.J([b,c]))},
l4:function(a,b){return new H.J([a,b])},
mN:function(a){return H.lQ(a,new H.J([null,null]))},
mO:function(a){return new P.jl([a])},
kz:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ns:function(a,b){var u=new P.e4(a,b)
u.c=a.e
return u},
mI:function(a,b,c){var u,t
if(P.kF(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.r])
$.a9.push(a)
try{P.nN(a,u)}finally{if(0>=$.a9.length)return H.c($.a9,-1)
$.a9.pop()}t=P.ll(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kh:function(a,b,c){var u,t
if(P.kF(a))return b+"..."+c
u=new P.T(b)
$.a9.push(a)
try{t=u
t.a=P.ll(t.a,a,", ")}finally{if(0>=$.a9.length)return H.c($.a9,-1)
$.a9.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kF:function(a){var u,t
for(u=$.a9.length,t=0;t<u;++t)if(a===$.a9[t])return!0
return!1},
nN:function(a,b){var u,t,s,r,q,p,o,n=a.ga_(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.A())return
u=H.f(n.gO(n))
b.push(u)
m+=u.length+2;++l}if(!n.A()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gO(n);++l
if(!n.A()){if(l<=4){b.push(H.f(r))
return}t=H.f(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gO(n);++l
for(;n.A();r=q,q=p){p=n.gO(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.f(r)
t=H.f(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
kn:function(a){var u,t={}
if(P.kF(a))return"{...}"
u=new P.T("")
try{$.a9.push(a)
u.a+="{"
t.a=!0
J.kX(a,new P.fW(t,u))
u.a+="}"}finally{if(0>=$.a9.length)return H.c($.a9,-1)
$.a9.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jl:function jl(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jm:function jm(a){this.a=a
this.c=this.b=null},
e4:function e4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fS:function fS(){},
q:function q(){},
fV:function fV(){},
fW:function fW(a,b){this.a=a
this.b=b},
aP:function aP(){},
jA:function jA(){},
fX:function fX(){},
dJ:function dJ(a,b){this.a=a
this.$ti=b},
jr:function jr(){},
e5:function e5(){},
ey:function ey(){},
nh:function(a,b,c,d){if(b instanceof Uint8Array)return P.ni(!1,b,c,d)
return},
ni:function(a,b,c,d){var u,t,s=$.mh()
if(s==null)return
u=0===c
if(u&&!0)return P.kw(s,b)
t=b.length
d=P.bo(c,d,t)
if(u&&d===t)return P.kw(s,b)
return P.kw(s,b.subarray(c,d))},
kw:function(a,b){if(P.nk(b))return
return P.nl(a,b)},
nl:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.c2(t)}return},
nk:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nj:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.c2(t)}return},
lM:function(a,b,c){var u,t,s
for(u=J.b2(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.aj()
if((s&127)!==s)return t-b}return c-b},
kZ:function(a,b,c,d,e,f){if(C.c.aY(f,4)!==0)throw H.e(P.P("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.e(P.P("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.e(P.P("Invalid base64 padding, more than two '=' characters",a,b))},
f3:function f3(){},
f4:function f4(){},
fb:function fb(){},
fh:function fh(){},
fu:function fu(){},
iR:function iR(){},
iT:function iT(){},
jG:function jG(a){this.b=0
this.c=a},
iS:function iS(a){this.a=a},
jF:function jF(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
c1:function(a,b,c){var u=H.lg(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.e(P.P(a,null,null))},
mG:function(a){if(a instanceof H.c7)return a.h(0)
return"Instance of '"+H.f(H.cm(a))+"'"},
mP:function(a,b,c){var u,t,s=J.mK(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
km:function(a,b,c){var u,t=H.b([],[c])
for(u=J.bw(a);u.A();)t.push(u.gO(u))
if(b)return t
return J.ki(t)},
cn:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.bo(b,c,u)
return H.lh(b>0||c<u?C.b.ex(a,b,c):a)}if(!!J.N(a).$ibL)return H.n4(a,b,P.bo(b,c,a.length))
return P.nd(a,b,c)},
nd:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.e(P.Z(b,0,J.al(a),q,q))
u=c==null
if(!u&&c<b)throw H.e(P.Z(c,b,J.al(a),q,q))
t=J.bw(a)
for(s=0;s<b;++s)if(!t.A())throw H.e(P.Z(b,0,s,q,q))
r=[]
if(u)for(;t.A();)r.push(t.gO(t))
else for(s=b;s<c;++s){if(!t.A())throw H.e(P.Z(c,b,s,q,q))
r.push(t.gO(t))}return H.lh(r)},
n7:function(a){return new H.fM(a,H.mL(a,!1,!0,!1,!1,!1))},
ll:function(a,b,c){var u=J.bw(b)
if(!u.A())return a
if(c.length===0){do a+=H.f(u.gO(u))
while(u.A())}else{a+=H.f(u.gO(u))
for(;u.A();)a=a+c+H.f(u.gO(u))}return a},
lq:function(){var u=H.mW()
if(u!=null)return P.ng(u)
throw H.e(P.z("'Uri.base' is not supported"))},
ez:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.ml().b
if(typeof b!=="string")H.v(H.ah(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.giz().ck(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dk(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mE:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mF:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cQ:function(a){if(a>=10)return""+a
return"0"+a},
l2:function(a){return new P.an(1000*a)},
kg:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aw(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mG(a)},
cK:function(a){return new P.ax(!1,null,null,a)},
kY:function(a,b,c){return new P.ax(!0,a,b,c)},
n5:function(a){var u=null
return new P.bn(u,u,!1,u,u,a)},
hF:function(a,b){return new P.bn(null,null,!0,a,b,"Value not in range")},
Z:function(a,b,c,d,e){return new P.bn(b,c,!0,a,d,"Invalid value")},
bo:function(a,b,c){if(0>a||a>c)throw H.e(P.Z(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.e(P.Z(b,a,c,"end",null))
return b}return c},
li:function(a,b){if(typeof a!=="number")return a.B()
if(a<0)throw H.e(P.Z(a,0,null,b,null))},
I:function(a,b,c,d,e){var u=e==null?J.al(b):e
return new P.fI(u,!0,a,c,"Index out of range")},
z:function(a){return new P.iK(a)},
iH:function(a){return new P.iG(a)},
bB:function(a){return new P.fe(a)},
w:function(a){return new P.dY(a)},
P:function(a,b,c){return new P.fE(a,b,c)},
d6:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sm(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.c(s,u)
s[u]=t}return s},
kM:function(a){H.oy(a)},
ng:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.G(a,4)^58)*3|C.a.G(a,0)^100|C.a.G(a,1)^97|C.a.G(a,2)^116|C.a.G(a,3)^97)>>>0
if(u===0)return P.lp(e<e?C.a.u(a,0,e):a,5,f).gel()
else if(u===32)return P.lp(C.a.u(a,5,e),0,f).gel()}t=new Array(8)
t.fixed$length=Array
s=H.b(t,[P.p])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.lL(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.jj()
if(r>=0)if(P.lL(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.k()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.B()
if(typeof n!=="number")return H.d(n)
if(m<n)n=m
if(typeof o!=="number")return o.B()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.B()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.B()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.aa(a,"..",o)))j=n>o+2&&C.a.aa(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.aa(a,"file",0)){if(q<=0){if(!C.a.aa(a,"/",o)){i="file:///"
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
a=C.a.be(a,o,n,"/");++e
n=h}k="file"}else if(C.a.aa(a,"http",0)){if(t&&p+3===o&&C.a.aa(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.be(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.aa(a,"https",0)){if(t&&p+4===o&&C.a.aa(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.be(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.u(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.js(a,r,q,p,o,n,m,k)}return P.nv(a,0,e,r,q,p,o,n,m,k)},
ls:function(a){var u=P.r
return C.b.iC(H.b(a.split("&"),[u]),P.l4(u,u),new P.iP(C.e))},
nf:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iM(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.T(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.c1(C.a.u(a,s,t),n,n)
if(typeof p!=="number")return p.Z()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.c(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.c1(C.a.u(a,s,c),n,n)
if(typeof p!=="number")return p.Z()
if(p>255)k.$2(l,s)
if(r>=u)return H.c(j,r)
j[r]=p
return j},
lr:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iN(a),d=new P.iO(e,a)
if(a.length<2)e.$1("address is too short")
u=H.b([],[P.p])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.T(a,t)
if(p===58){if(t===b){++t
if(C.a.T(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gaU(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.nf(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.c(l,i)
l[i]=0
f=i+1
if(f>=k)return H.c(l,f)
l[f]=0
i+=2}else{f=C.c.b8(h,8)
if(i<0||i>=k)return H.c(l,i)
l[i]=f
f=i+1
if(f>=k)return H.c(l,f)
l[f]=h&255
i+=2}}return l},
nv:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nD(a,b,d)
else{if(d===b)P.bU(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nE(a,u,e-1):""
s=P.nA(a,e,f,!1)
if(typeof f!=="number")return f.k()
r=f+1
if(typeof g!=="number")return H.d(g)
q=r<g?P.nC(P.c1(C.a.u(a,r,g),new P.jB(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nB(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.B()
o=h<i?P.kB(a,h+1,i,n):n
return new P.bT(j,t,s,q,p,o,i<c?P.nz(a,i+1,c):n)},
lD:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bU:function(a,b,c){throw H.e(P.P(c,a,b))},
nC:function(a,b){if(a!=null&&a===P.lD(b))return
return a},
nA:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.T(a,b)===91){if(typeof c!=="number")return c.n()
u=c-1
if(C.a.T(a,u)!==93)P.bU(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nx(a,t,u)
if(typeof s!=="number")return s.B()
if(s<u){r=s+1
q=P.lI(a,C.a.aa(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lr(a,t,s)
return C.a.u(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.d(c)
p=b
for(;p<c;++p)if(C.a.T(a,p)===58){s=C.a.bL(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lI(a,C.a.aa(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lr(a,b,s)
return"["+C.a.u(a,b,s)+q+"]"}return P.nG(a,b,c)},
nx:function(a,b,c){var u,t=C.a.bL(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.d(c)
u=t<c}else u=!1
return u?t:c},
lI:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.T(d):null
if(typeof c!=="number")return H.d(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.T(a,u)
if(r===37){q=P.kC(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.T("")
o=l.a+=C.a.u(a,t,u)
if(p)q=C.a.u(a,u,u+3)
else if(q==="%")P.bU(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.c(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.T("")
if(t<u){l.a+=C.a.u(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.T(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.T("")
l.a+=C.a.u(a,t,u)
l.a+=P.kA(r)
u+=m
t=u}}}if(l==null)return C.a.u(a,b,c)
if(t<c)l.a+=C.a.u(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
nG:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.d(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.T(a,u)
if(q===37){p=P.kC(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.T("")
n=C.a.u(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.u(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.c(C.v,o)
o=(C.v[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.T("")
if(t<u){s.a+=C.a.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.c(C.m,o)
o=(C.m[o]&1<<(q&15))!==0}else o=!1
if(o)P.bU(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.T(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.T("")
n=C.a.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kA(q)
u+=l
t=u}}}}if(s==null)return C.a.u(a,b,c)
if(t<c){n=C.a.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nD:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lF(C.a.G(a,b)))P.bU(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.G(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.c(C.o,r)
r=(C.o[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bU(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.u(a,b,c)
return P.nw(t?a.toLowerCase():a)},
nw:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nE:function(a,b,c){return P.cD(a,b,c,C.R,!1)},
nB:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cD(a,b,c,C.w,!0):C.l.jx(d,new P.jC(),P.r).v(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.ak(u,"/"))u="/"+u
return P.nF(u,e,f)},
nF:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.ak(a,"/"))return P.nH(a,!u||c)
return P.nI(a)},
kB:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.e(P.cK("Both query and queryParameters specified"))
return P.cD(a,b,c,C.n,!0)}if(d==null)return
u=new P.T("")
t.a=""
d.K(0,new P.jD(new P.jE(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nz:function(a,b,c){return P.cD(a,b,c,C.n,!0)},
kC:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.T(a,b+1)
t=C.a.T(a,p)
s=H.jU(u)
r=H.jU(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.b8(q,4)
if(p>=8)return H.c(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.dk(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.u(a,b,b+3).toUpperCase()
return},
kA:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.p])
t[0]=37
t[1]=C.a.G(m,a>>>4)
t[2]=C.a.G(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.p])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.hP(a,6*r)&63|s
if(q>=u)return H.c(t,q)
t[q]=37
o=q+1
n=C.a.G(m,p>>>4)
if(o>=u)return H.c(t,o)
t[o]=n
n=q+2
o=C.a.G(m,p&15)
if(n>=u)return H.c(t,n)
t[n]=o
q+=3}}return P.cn(t,0,null)},
cD:function(a,b,c,d,e){var u=P.lH(a,b,c,d,e)
return u==null?C.a.u(a,b,c):u},
lH:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.B()
if(typeof c!=="number")return H.d(c)
if(!(o<c))break
c$0:{u=C.a.T(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.c(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kC(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.c(C.m,t)
t=(C.m[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bU(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.T(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kA(u)}}if(m==null)m=new P.T("")
m.a+=C.a.u(a,n,o)
m.a+=H.f(s)
if(typeof r!=="number")return H.d(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.B()
if(n<c)m.a+=C.a.u(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lG:function(a){if(C.a.ak(a,"."))return!0
return C.a.dZ(a,"/.")!==-1},
nI:function(a){var u,t,s,r,q,p,o
if(!P.lG(a))return a
u=H.b([],[P.r])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.G(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.c(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.v(u,"/")},
nH:function(a,b){var u,t,s,r,q,p
if(!P.lG(a))return!b?P.lE(a):a
u=H.b([],[P.r])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gaU(u)!==".."){if(0>=u.length)return H.c(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.c(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gaU(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.c(u,0)
t=P.lE(u[0])
if(0>=u.length)return H.c(u,0)
u[0]=t}return C.b.v(u,"/")},
lE:function(a){var u,t,s,r=a.length
if(r>=2&&P.lF(J.mn(a,0)))for(u=1;u<r;++u){t=C.a.G(a,u)
if(t===58)return C.a.u(a,0,u)+"%3A"+C.a.at(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.c(C.o,s)
s=(C.o[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
ny:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.G(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.e(P.cK("Invalid URL encoding"))}}return u},
kD:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.G(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.u(a,b,c)
else r=new H.R(C.a.u(a,b,c))}else{r=H.b([],[P.p])
for(s=a.length,q=b;q<c;++q){t=C.a.G(a,q)
if(t>127)throw H.e(P.cK("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.e(P.cK("Truncated URI"))
r.push(P.ny(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iS(!1).ck(r)},
lF:function(a){var u=a|32
return 97<=u&&u<=122},
lp:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.p])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.G(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.e(P.P(m,a,t))}}if(s<0&&t>b)throw H.e(P.P(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.G(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gaU(l)
if(r!==44||t!==p+7||!C.a.aa(a,"base64",p+1))throw H.e(P.P("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.A.iJ(0,a,o,u)
else{n=P.lH(a,o,u,C.n,!0)
if(n!=null)a=C.a.be(a,o,u,n)}return new P.iL(a,l,c)},
nK:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.d6(22,new P.jJ(),P.bP),n=new P.jI(o),m=new P.jK(),l=new P.jL(),k=n.$2(0,225)
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
lL:function(a,b,c,d,e){var u,t,s,r,q,p=$.mm()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.c(p,d)
t=p[d]
s=C.a.G(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.c(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.c(e,q)
e[q]=u}return d},
as:function as(){},
ab:function ab(a,b){this.a=a
this.b=b},
F:function F(){},
an:function an(a){this.a=a},
fr:function fr(){},
fs:function fs(){},
bE:function bE(){},
df:function df(){},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bn:function bn(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fI:function fI(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iK:function iK(a){this.a=a},
iG:function iG(a){this.a=a},
i5:function i5(a){this.a=a},
fe:function fe(a){this.a=a},
ht:function ht(){},
du:function du(){},
fm:function fm(a){this.a=a},
dY:function dY(a){this.a=a},
fE:function fE(a,b,c){this.a=a
this.b=b
this.c=c},
p:function p(){},
i:function i(){},
fK:function fK(){},
n:function n(){},
S:function S(){},
bj:function bj(){},
ai:function ai(){},
a3:function a3(){},
r:function r(){},
T:function T(a){this.a=a},
iP:function iP(a){this.a=a},
iM:function iM(a){this.a=a},
iN:function iN(a){this.a=a},
iO:function iO(a,b){this.a=a
this.b=b},
bT:function bT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jB:function jB(a,b){this.a=a
this.b=b},
jC:function jC(){},
jE:function jE(a,b){this.a=a
this.b=b},
jD:function jD(a){this.a=a},
iL:function iL(a,b,c){this.a=a
this.b=b
this.c=c},
jJ:function jJ(){},
jI:function jI(a){this.a=a},
jK:function jK(){},
jL:function jL(){},
js:function js(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
je:function je(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oj:function(a){var u,t=J.N(a)
if(!!t.$iaN){u=t.gdB(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ex(a.data,a.height,a.width)},
oi:function(a){if(a instanceof P.ex)return{data:a.a,height:a.b,width:a.c}
return a},
b0:function(a){var u,t,s,r,q
if(a==null)return
u=P.l4(P.r,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.t)(t),++r){q=t[r]
u.l(0,q,a[q])}return u},
oh:function(a){var u={}
a.K(0,new P.jP(u))
return u},
ju:function ju(){},
jw:function jw(a,b){this.a=a
this.b=b},
ex:function ex(a,b,c){this.a=a
this.b=b
this.c=c},
jP:function jP(a){this.a=a},
jv:function jv(a,b){this.a=a
this.b=b},
fA:function fA(a,b){this.a=a
this.b=b},
fB:function fB(){},
fC:function fC(){},
jk:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nr:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ji:function ji(){},
jn:function jn(){},
ag:function ag(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bg:function bg(){},
fP:function fP(){},
bk:function bk(){},
hq:function hq(){},
hA:function hA(){},
ib:function ib(){},
k:function k(){},
bp:function bp(){},
iw:function iw(){},
e2:function e2(){},
e3:function e3(){},
ed:function ed(){},
ee:function ee(){},
eo:function eo(){},
ep:function ep(){},
ev:function ev(){},
ew:function ew(){},
bP:function bP(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(a){this.a=a},
f2:function f2(){},
bx:function bx(){},
hr:function hr(){},
dR:function dR(){},
dp:function dp(){},
i4:function i4(){},
ek:function ek(){},
el:function el(){}},W={
mt:function(){var u=document.createElement("a")
return u},
kd:function(){var u=document.createElement("canvas")
return u},
kf:function(a){return"wheel"},
jj:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lC:function(a,b,c,d){var u=W.jj(W.jj(W.jj(W.jj(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a0:function(a,b,c,d){var u=W.lN(new W.jg(c),W.j)
if(u!=null&&!0)J.mp(a,b,u,!1)
return new W.jf(a,b,u,!1)},
lN:function(a,b){var u=$.ar
if(u===C.f)return a
return u.dt(a,b)},
l:function l(){},
eV:function eV(){},
eX:function eX(){},
eY:function eY(){},
by:function by(){},
bA:function bA(){},
b9:function b9(){},
fi:function fi(){},
E:function E(){},
c8:function c8(){},
fj:function fj(){},
aj:function aj(){},
az:function az(){},
fk:function fk(){},
fl:function fl(){},
fn:function fn(){},
fo:function fo(){},
cS:function cS(){},
cT:function cT(){},
fp:function fp(){},
fq:function fq(){},
jc:function jc(a,b){this.a=a
this.b=b},
a1:function a1(){},
j:function j(){},
h:function h(){},
aA:function aA(){},
c9:function c9(){},
fz:function fz(){},
fD:function fD(){},
aM:function aM(){},
fH:function fH(){},
cb:function cb(){},
aN:function aN(){},
cc:function cc(){},
bJ:function bJ(){},
fT:function fT(){},
hd:function hd(){},
ch:function ch(){},
he:function he(){},
hf:function hf(a){this.a=a},
hg:function hg(){},
hh:function hh(a){this.a=a},
aR:function aR(){},
hi:function hi(){},
aF:function aF(){},
jb:function jb(a){this.a=a},
D:function D(){},
de:function de(){},
aU:function aU(){},
hw:function hw(){},
hL:function hL(){},
hM:function hM(a){this.a=a},
hO:function hO(){},
aW:function aW(){},
i1:function i1(){},
aX:function aX(){},
i2:function i2(){},
aY:function aY(){},
i8:function i8(){},
i9:function i9(a){this.a=a},
aH:function aH(){},
aZ:function aZ(){},
aI:function aI(){},
ii:function ii(){},
ij:function ij(){},
iq:function iq(){},
b_:function b_(){},
bO:function bO(){},
iu:function iu(){},
iv:function iv(){},
bq:function bq(){},
iQ:function iQ(){},
j3:function j3(){},
bs:function bs(){},
cu:function cu(){},
jd:function jd(){},
dT:function dT(){},
jh:function jh(){},
ea:function ea(){},
jt:function jt(){},
jx:function jx(){},
jf:function jf(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jg:function jg(a){this.a=a},
H:function H(){},
cW:function cW(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
dS:function dS(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
eb:function eb(){},
ec:function ec(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
cz:function cz(){},
cA:function cA(){},
ei:function ei(){},
ej:function ej(){},
en:function en(){},
eq:function eq(){},
er:function er(){},
cB:function cB(){},
cC:function cC(){},
et:function et(){},
eu:function eu(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){}},L={
mT:function(a){var u,t,s,r,q,p,o,n=null,m=new Array(256)
m.fixed$length=Array
u=[P.p]
t=H.b(m,u)
m=new Array(256)
m.fixed$length=Array
s=H.b(m,u)
for(r=0;r<256;++r)s[r]=r
q=P.c1("6364136223846793005",n,n)
p=P.c1("1442695040888963407",n,n)
if(typeof q!=="number")return H.d(q)
if(typeof p!=="number")return H.d(p)
a=C.c.cE(C.c.cE(C.c.cE(a*q+p,64)*q+p,64)*q+p,64)
for(r=255;r>=0;--r){m=a*q+p
a=((m&-1)>>>0)-(m&0)
o=C.c.aY(a+31,r+1)
if(o>=256)return H.c(s,o)
t[r]=s[o]
s[o]=s[r]}return new L.hs(t)},
hs:function hs(a){this.a=a}},B={
aG:function(a,b){return new B.ap(a,b)},
fw:function fw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null},
ap:function ap(a,b){this.a=a
this.b=b},
mv:function(a){switch(a){case 0:return"air"
case 1:return"water"
case 100:return"boundary"
case 101:return"dirt"
case 102:return"turf"
case 103:return"rock"
case 104:return"sand"
case 105:return"dryLeaves"
case 106:return"trunk-ud"
case 107:return"trunk-ns"
case 108:return"trunk-ew"
case 109:return"brick"
case 110:return"redShine"
case 111:return"whiteShine"
case 112:return"yellowShine"
case 113:return"blackShine"
case 114:return"leaves"
case 115:return"wood-ud"
case 116:return"wood-ns"
case 117:return"wood-ew"
case 200:return"grass"
case 201:return"fern"
case 202:return"whiteFlower"
case 203:return"blueFlower"
case 204:return"redFlower"
case 205:return"mushroom"}return"undefined"},
mu:function(a,b){if(a===b)return!1
if(b===0)return!0
if(a===1)return b>=200&&b<=205
if(b===1)return!(a>=200&&a<=205)
return!(a>=200&&a<=205)&&b>=200&&b<=205},
mx:function(a){var u=new B.cN(a)
u.eC(a)
return u},
lW:function(){var u,t=V.na("3Dart Craft"),s=[P.r]
t.a0(H.b(["This example is in development and may still have a few issues and glitches."],s))
u=W.kd()
u.className="pageLargeCanvas"
u.id="targetCanvas"
t.a.appendChild(u)
t.ce(1,"About")
t.a0(H.b(["3Dart Craft is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create a [voxel|https://en.wikipedia.org/wiki/Voxel] environment for browser driven video games. ","This example has no server backing it so none of the changes are persisted. It would take very little ","to turn this into a simple online game."],s))
t.a0(H.b(["\xab[Back to Examples List|../../]"],s))
t.ce(1,"Controls")
t.a0(H.b(["\u2022 _Currently there are no controls for mobile browsers_"],s))
t.a0(H.b(["\u2022 *Esc* to release the mouse capture"],s))
t.a0(H.b(["\u2022 *W* or *Up arrow* to move forward"],s))
t.a0(H.b(["\u2022 *S* or *Down arrow* to move backward"],s))
t.a0(H.b(["\u2022 *A* or *Left arrow* to strife left"],s))
t.a0(H.b(["\u2022 *D* or *Right arror* to strife right"],s))
t.a0(H.b(["\u2022 *Space bar* to jump"],s))
t.a0(H.b(["\u2022 *Tab* cycles the block selected which can be placed"],s))
t.a0(H.b(["\u2022 *Shift-Tab* cycles the selection in the reverse direction"],s))
t.a0(H.b(["\u2022 *Left click* or *Q* removes the currently highlighted block"],s))
t.a0(H.b(["\u2022 *Right click* or *E* places the selected block on the highlighted block"],s))
t.a0(H.b(["\u2022 *O* to return the starting location"],s))
t.ce(1,"Help wanted")
t.a0(H.b(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want to learn more about it, ","check out the [project page|https://github.com/Grant-Nelson/ThreeDart/projects/1] or ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/craft]."],s))
t.a0(H.b(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."],s))
P.ks(C.k,B.ow())},
oB:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=document.getElementById("targetCanvas")
if(c5==null)H.v(P.w("Failed to find an element with the identifier, targetCanvas."))
u=E.ne(c5,!0,!0,!0,!1)
t=new B.hc(u)
s=P.p
t.b=new H.J([s,B.L])
t.c=new H.J([s,[P.n,P.p]])
t.d=H.b([],[O.ce])
r=new V.X(1,1,1)
q=V.di()
p=V.ky()
o=new V.o(0.5,-1,0.2).n(0,q)
o=U.ba(V.l8(q,p,new V.x(o.a,o.b,o.c)))
p=new D.bC()
p.c=new V.X(1,1,1)
p.a=V.ky()
p.d=V.kx()
p.e=V.lz()
n=p.b
p.b=o
o.gt().q(0,p.gfO())
q=new D.A("mover",n,p.b)
q.b=!0
p.aI(q)
if(!p.c.p(0,r)){n=p.c
p.c=r
q=new D.A("color",n,r)
q.b=!0
p.aI(q)}t.e=p
m=t.I(t.F("boundary"),!1)
l=t.I(t.F("brick"),!1)
k=t.I(t.F("dirt"),!1)
j=t.I(t.F("dryLeavesSide"),!1)
i=t.I(t.F("dryLeavesTop"),!1)
h=t.I(t.F("leaves"),!1)
g=t.I(t.F("rock"),!1)
f=t.I(t.F("sand"),!1)
e=t.I(t.F("trunkEnd"),!1)
d=t.I(t.F("trunkSide"),!1)
c=t.I(t.F("trunkTilted"),!1)
b=t.I(t.F("turfSide"),!1)
a=t.I(t.F("turfTop"),!1)
a0=t.I(t.F("woodEnd"),!1)
a1=t.I(t.F("woodSide"),!1)
a2=t.I(t.F("woodTilted"),!1)
a3=t.I(t.F("blackShine"),!0)
a4=t.I(t.F("redShine"),!0)
a5=t.I(t.F("yellowShine"),!0)
a6=t.I(t.F("whiteShine"),!0)
a7=t.I(t.F("mushroomBottom"),!1)
a8=t.I(t.F("mushroomSide"),!1)
a9=t.I(t.F("mushroomTop"),!1)
b0=t.I(t.F("grass"),!1)
b1=t.I(t.F("fern"),!1)
b2=t.I(t.F("blueFlowers"),!1)
b3=t.I(t.F("redFlowers"),!1)
b4=t.I(t.F("whiteFlowers"),!1)
q=P.km([t.F("water1"),t.F("water2"),t.F("water3")],!0,T.dz)
p=new T.ik()
b5=p.b=p.a=0
p.e=q
t.x=p
b6=t.I(p,!0)
t.b.l(0,100,new B.L(m,m,m,m,m,m))
t.b.l(0,101,new B.L(k,k,k,k,k,k))
t.b.l(0,102,new B.L(a,k,b,b,b,b))
t.b.l(0,103,new B.L(g,g,g,g,g,g))
t.b.l(0,104,new B.L(f,f,f,f,f,f))
t.b.l(0,105,new B.L(i,k,j,j,j,j))
t.b.l(0,106,new B.L(e,e,d,d,d,d))
t.b.l(0,107,new B.L(d,d,c,c,e,e))
t.b.l(0,108,new B.L(c,c,e,e,c,c))
t.b.l(0,109,new B.L(l,l,l,l,l,l))
t.b.l(0,110,new B.L(a4,a4,a4,a4,a4,a4))
t.b.l(0,111,new B.L(a6,a6,a6,a6,a6,a6))
t.b.l(0,112,new B.L(a5,a5,a5,a5,a5,a5))
t.b.l(0,113,new B.L(a3,a3,a3,a3,a3,a3))
t.b.l(0,114,new B.L(h,h,h,h,h,h))
t.b.l(0,115,new B.L(a0,a0,a1,a1,a1,a1))
t.b.l(0,116,new B.L(a1,a1,a2,a2,a0,a0))
t.b.l(0,117,new B.L(a2,a2,a0,a0,a2,a2))
t.b.l(0,1,new B.L(b6,b6,b6,b6,b6,b6))
s=[s]
q=H.b([b0],s)
t.c.l(0,200,q)
q=H.b([b1],s)
t.c.l(0,201,q)
q=H.b([b4],s)
t.c.l(0,202,q)
q=H.b([b2],s)
t.c.l(0,203,q)
q=H.b([b3],s)
t.c.l(0,204,q)
s=H.b([a9,a7,a8],s)
t.c.l(0,205,s)
t.f=t.cV("selection")
t.r=t.cV("crosshair")
b7=B.nm(t,B.nM())
b8=B.mU(u.r,b7)
b9=new M.cU()
b9.a=!0
s=O.ke(E.ac)
b9.e=s
s.bv(b9.gfQ(),b9.gfS())
b9.y=b9.x=b9.r=b9.f=null
c0=X.mH(new V.am(0.576,0.784,0.929,1))
c1=new X.dg()
c1.c=1.0471975511965976
c1.d=0.1
c1.e=2000
c1.se0(null)
s=c1.c
if(!(Math.abs(s-1.0471975511965976)<$.u().a)){c1.c=1.0471975511965976
s=new D.A("fov",s,1.0471975511965976)
s.b=!0
c1.b1(s)}s=c1.d
if(!(Math.abs(s-0.1)<$.u().a)){c1.d=0.1
s=new D.A("near",s,0.1)
s.b=!0
c1.b1(s)}s=c1.e
if(!(Math.abs(s-2000)<$.u().a)){c1.e=2000
s=new D.A("far",s,2000)
s.b=!0
c1.b1(s)}s=b9.b
if(s!==c1){if(s!=null)s.gt().U(0,b9.gb_())
n=b9.b
b9.b=c1
c1.gt().q(0,b9.gb_())
s=new D.A("camera",n,b9.b)
s.b=!0
b9.b0(s)}s=b9.c
if(s!==c0){if(s!=null)s.gt().U(0,b9.gb_())
n=b9.c
b9.c=c0
c0.gt().q(0,b9.gb_())
s=new D.A("target",n,b9.c)
s.b=!0
b9.b0(s)}s=b9.f
if(s==null)s=b9.f=D.C()
s.q(0,b7.gjd(b7))
b9.b.se0(b8.x)
for(s=b7.e,q=s.length;b5<s.length;s.length===q||(0,H.t)(s),++b5){c2=s[b5]
p=b9.e
o=[H.c0(p,0)]
if(p.bh(H.b([c2],o))){c3=p.a
c4=c3.length
c3.push(c2)
o=H.b([c2],o)
p=p.c
if(p!=null)p.$2(c4,o)}}b9.e.q(0,b8.db)
b7.f=b8
s=u.d
if(s!==b9){if(s!=null)s.gt().U(0,u.gcO())
u.d=b9
b9.gt().q(0,u.gcO())
u.cP()}b8.cJ()
P.ir(C.N,b7.gjg())
P.ir(C.M,b7.geo())
P.ir(C.K,b7.gi9())
P.ir(C.L,new B.k_(u,b7))},
nM:function(){var u,t,s,r,q=null,p=P.lq().geg().j(0,"seed")
if(p!=null){if(p==="test")return new B.ie()
if(p==="checkers"){u=new B.fa()
u.a=!0
u.b=10
return u}t=H.lg(p,q)
if(t==null)t=-1}else t=-1
if(t<=0){t=C.J.iI(4294967296)
s=P.lq().eh(0,P.mM(["seed",""+t],P.r,q))
u=window.history
r=s.h(0)
u.toString
u.pushState(new P.jv([],[]).cG(q),q,r)}u=new B.hB()
u.a=L.mT(t)
u.b=new Uint8Array(484)
return u},
mU:function(a,b){var u=new B.dh(b)
u.eE(a,b)
return u},
kr:function(a,b){var u,t,s=new B.hU(a,b)
if(b==null){u=$.U()
t=$.W()
s.b=new Z.V(u.a|t.a|$.a6().a)}u=a==null?null:a.d
u=u==null?null:u.length
if(u==null)u=1
u=new Array(u)
u.fixed$length=Array
s.c=H.b(u,[F.dm])
return s},
nm:function(a,b){var u=new B.dP(a,b)
u.eJ(a,b)
return u},
aa:function aa(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fa:function fa(){this.b=this.a=null},
cN:function cN(a){var _=this
_.b=_.a=null
_.c=a
_.x=_.r=_.f=_.e=_.d=null},
fc:function fc(a){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
k_:function k_(a,b){this.a=a
this.b=b},
L:function L(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hc:function hc(a){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
dd:function dd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dh:function dh(a){var _=this
_.b=_.a=null
_.c=a
_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=null},
hv:function hv(a){this.a=a},
hB:function hB(){this.c=this.b=this.a=null},
hD:function hD(a){this.a=a},
hC:function hC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hE:function hE(a){this.a=a},
hU:function hU(a,b){this.a=a
this.b=b
this.c=null},
hV:function hV(a){this.a=a},
hW:function hW(a){this.a=a},
hX:function hX(a){this.a=a},
hY:function hY(a){this.a=a},
ie:function ie(){this.a=null},
ig:function ig(a){this.a=a},
ih:function ih(a){this.a=a},
dP:function dP(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.e=_.d=_.c=null}},T={
a4:function(a){var u=new T.hP()
u.eG(a)
return u},
eW:function eW(){},
cX:function cX(){},
d8:function d8(){},
aT:function aT(){this.a=null},
hP:function hP(){this.a=null},
dy:function dy(){},
dz:function dz(){},
ik:function ik(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
il:function il(){var _=this
_.y=_.d=_.c=_.b=_.a=null},
im:function im(a){var _=this
_.a=a
_.e=_.d=_.b=null},
io:function io(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={dv:function dv(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},dC:function dC(a,b,c){this.a=a
this.b=b
this.c=c},dD:function dD(a){this.b=a
this.c=null},is:function is(){this.c=this.b=this.a=null},dF:function dF(a){this.b=a
this.a=this.c=null}},O={
ke:function(a){var u=new O.aL([a])
u.bw(a)
return u},
aL:function aL(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cg:function cg(){this.b=this.a=null},
l5:function(){var u,t=new O.ce(),s=O.ke(V.aQ)
t.e=s
s.bv(t.gfE(),t.gfG())
s=new O.aD(t,"emission")
s.c=new A.Y(!1,!1,!1)
s.f=new V.X(0,0,0)
t.f=s
s=new O.aD(t,"ambient")
s.c=new A.Y(!1,!1,!1)
s.f=new V.X(0,0,0)
t.r=s
s=new O.aD(t,"diffuse")
s.c=new A.Y(!1,!1,!1)
s.f=new V.X(0,0,0)
t.x=s
s=new O.aD(t,"invDiffuse")
s.c=new A.Y(!1,!1,!1)
s.f=new V.X(0,0,0)
t.y=s
s=new O.h5(t,"specular")
s.c=new A.Y(!1,!1,!1)
s.f=new V.X(0,0,0)
s.ch=100
t.z=s
s=new O.h1(t,"bump")
s.c=new A.Y(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.aD(t,"reflect")
s.c=new A.Y(!1,!1,!1)
s.f=new V.X(0,0,0)
t.cx=s
s=new O.h4(t,"refract")
s.c=new A.Y(!1,!1,!1)
s.f=new V.X(0,0,0)
s.ch=1
t.cy=s
s=new O.h0(t,"alpha")
s.c=new A.Y(!1,!1,!1)
s.f=1
t.db=s
s=new D.d2()
s.bw(D.af)
s.e=H.b([],[D.bC])
s.f=H.b([],[D.hy])
s.r=H.b([],[D.i3])
s.y=s.x=null
s.bT(s.gfC(),s.ghj(),s.ghn())
t.dx=s
u=new O.h3()
u.b=new V.am(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.x
s=u==null?s.x=D.C():u
s.q(0,t.ghI())
s=t.dx
u=s.y
s=u==null?s.y=D.C():u
s.q(0,t.gbx())
t.fr=null
return t},
ce:function ce(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h6:function h6(a,b){this.a=a
this.b=b},
h7:function h7(){},
h8:function h8(a,b){this.a=a
this.b=b},
h9:function h9(){},
ha:function ha(a,b){this.a=a
this.b=b},
hb:function hb(){},
h0:function h0(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cf:function cf(){},
h1:function h1(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aD:function aD(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h3:function h3(){var _=this
_.e=_.d=_.c=_.b=null},
h4:function h4(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h5:function h5(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dx:function dx(){}},E={
bD:function(a,b,c,d){var u,t,s,r,q,p=new E.ac()
p.a=""
p.b=!0
u=O.ke(E.ac)
p.y=u
u.bv(p.giK(),p.giN())
p.dy=p.dx=p.db=p.cy=p.cx=p.ch=p.Q=p.z=null
u=p.c
if(u!=c){p.d=p.c=c
p.e=null
if(u!=null)u.gt().U(0,p.gbN())
t=p.c
if(t!=null)t.gt().q(0,p.gbN())
s=new D.A("shape",u,p.c)
s.b=!0
p.aq(s)}u=p.f
if(u!=d){if(u!=null)u.gt().U(0,p.ge8())
r=p.f
p.f=d
if(d!=null)d.gt().q(0,p.ge8())
p.cZ()
s=new D.A("technique",r,p.f)
s.b=!0
p.aq(s)}if(!J.G(p.r,b)){q=p.r
if(q!=null)q.gt().U(0,p.ge5())
if(b!=null)b.gt().q(0,p.ge5())
p.r=b
s=new D.A("mover",q,b)
s.b=!0
p.aq(s)}if(a!=null)p.y.aL(0,a)
return p},
n8:function(a,b){var u=new E.hH(a)
u.eF(a,b)
return u},
ne:function(a,b,c,d,e){var u,t,s=J.N(a)
if(!!s.$ibA)return E.lm(a,!0,!0,!0,!1)
u=W.kd()
t=u.style
t.width="100%"
t.height="100%"
s.gdw(a).q(0,u)
return E.lm(u,!0,!0,!0,!1)},
lm:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dA(),p=C.j.cI(a,"webgl2",P.mN(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.v(P.w("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.n8(p,a)
u=new T.im(p)
u.b=p.getParameter(3379)
p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dK(a)
t=new X.fO()
t.d=P.mO(P.p)
u.b=t
t=new X.hj(u)
t.f=0
t.r=V.aV()
t.x=V.aV()
t.ch=t.Q=1
u.c=t
t=new X.fU(u)
t.r=0
t.x=V.aV()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.it(u)
t.f=V.aV()
t.r=V.aV()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.dw,P.a3]])
u.z=t
s=document
t.push(W.a0(s,"contextmenu",u.gfW(),!1))
u.z.push(W.a0(a,"focus",u.gh1(),!1))
u.z.push(W.a0(a,"blur",u.gfM(),!1))
u.z.push(W.a0(s,"keyup",u.gc6(),!1))
u.z.push(W.a0(s,"keydown",u.gbV(),!1))
u.z.push(W.a0(a,"mousedown",u.gh9(),!1))
u.z.push(W.a0(a,"mouseup",u.ghd(),!1))
u.z.push(W.a0(a,r,u.ghb(),!1))
t=u.z
W.kf(a)
W.kf(a)
t.push(W.a0(a,W.kf(a),u.ghf(),!1))
u.z.push(W.a0(s,r,u.gfY(),!1))
u.z.push(W.a0(s,"mouseup",u.gh_(),!1))
u.z.push(W.a0(s,"pointerlockchange",u.ghh(),!1))
u.z.push(W.a0(a,"touchstart",u.ghv(),!1))
u.z.push(W.a0(a,"touchend",u.ghr(),!1))
u.z.push(W.a0(a,"touchmove",u.ght(),!1))
q.r=u
q.Q=!0
q.ch=!1
q.cx=new P.ab(Date.now(),!1)
q.cy=0
q.dg()
return q},
f5:function f5(){},
ac:function ac(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hH:function hH(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hI:function hI(a){this.a=a},
hJ:function hJ(a){this.a=a},
hK:function hK(a){this.a=a},
i6:function i6(){this.b=null},
dA:function dA(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ip:function ip(a){this.a=a}},Z={
lB:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Float32Array(H.bV(c)),35044)
a.bindBuffer(b,null)
return new Z.dN(b,u)},
dO:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bV(c)),35044)
a.bindBuffer(b,null)
return new Z.dN(b,u)},
aq:function(a){return new Z.V(a)},
dN:function dN(a,b){this.a=a
this.b=b},
bz:function bz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
j4:function j4(a){this.a=a},
c6:function c6(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
aB:function aB(a,b,c){this.a=a
this.b=b
this.c=c},
V:function V(a){this.a=a}},D={
C:function(){var u=new D.bF()
u.d=0
return u},
f9:function f9(){},
bF:function bF(){var _=this
_.d=_.c=_.b=_.a=null},
fx:function fx(a){this.a=a},
fy:function fy(a){this.a=a},
a2:function a2(){this.b=null},
bb:function bb(){this.b=null},
bc:function bc(){this.b=null},
A:function A(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
bC:function bC(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
af:function af(){},
d2:function d2(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
hy:function hy(){},
i3:function i3(){}},X={
aC:function(){var u=new X.d1()
u.bw(X.ae)
u.f=u.e=null
u.r=!1
u.y=u.x=null
u.bT(u.geK(),u.geM(),u.geO())
return u},
cM:function cM(a,b){this.a=a
this.b=b},
ae:function ae(a,b){this.a=a
this.b=b},
aO:function aO(a){this.c=a
this.b=null},
d1:function d1(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
fO:function fO(){this.d=this.b=this.a=null},
d7:function d7(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},
fU:function fU(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
bh:function bh(a,b,c){this.a=a
this.b=b
this.c=c},
aS:function aS(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},
hj:function hj(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hz:function hz(){},
dE:function dE(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},
it:function it(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},
dK:function dK(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mH:function(a){var u,t=new X.fF()
if(a==null)u=new V.am(0,0,0,1)
else u=a
t.a=u
t.b=!0
t.c=2000
t.d=!0
t.e=0
t.f=!1
u=$.lk
if(u==null){u=V.kp(0,0,1,1)
$.lk=u}t.r=u
return t},
kc:function kc(){},
fF:function fF(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dg:function dg(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ic:function ic(){}},V={
ad:function(a){return new V.Q(a)},
k3:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.aY(a-b,u)
return(a<0?a+u:a)+b},
y:function(a,b,c){if(a==null)return C.a.aV("null",c)
return C.a.aV(C.d.ek(Math.abs(a-0)<$.u().a?0:a,b),c+b+1)},
c_:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.r])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.t)(a),++s){r=V.y(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.c(o,q)
u=C.a.aV(o[q],t)
p=o.length
if(q>=p)return H.c(o,q)
o[q]=u}return o},
kL:function(a){return C.d.ax(Math.pow(2,C.i.bK(Math.log(H.bY(a))/Math.log(2))))},
l6:function(a){var u=Math.cos(a),t=Math.sin(a)
return new V.ao(u,0,-t,0,1,0,t,0,u)},
bK:function(){var u=$.lb
return u==null?$.lb=V.aE(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aE:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
d9:function(a,b,c){return V.aE(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
ko:function(a,b,c,d){return V.aE(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
l9:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aE(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
la:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aE(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
l8:function(a,b,c){var u=c.w(0,Math.sqrt(c.D(c))),t=b.bn(u),s=t.w(0,Math.sqrt(t.D(t))),r=u.bn(s),q=new V.x(a.a,a.b,a.c),p=s.N(0).D(q),o=r.N(0).D(q),n=u.N(0).D(q)
return V.aE(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aV:function(){var u=$.le
return u==null?$.le=new V.O(0,0):u},
di:function(){var u=$.ck
return u==null?$.ck=new V.o(0,0,0):u},
bl:function(a,b,c){return new V.o(a,b,c)},
lj:function(a,b){return new V.dl(a.a,a.b,a.c,b.a,b.b,b.c)},
kp:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dn(a,b,c,d)},
hG:function(a,b,c,d,e,f){if(d<0){if(typeof a!=="number")return a.k()
a+=d
d=-d}if(e<0){if(typeof b!=="number")return b.k()
b+=e
e=-e}if(f<0){if(typeof c!=="number")return c.k()
c+=f
f=-f}return new V.bN(a,b,c,d,e,f)},
ct:function(){var u=$.ly
return u==null?$.ly=new V.x(0,0,0):u},
lz:function(){var u=$.iU
return u==null?$.iU=new V.x(-1,0,0):u},
kx:function(){var u=$.iV
return u==null?$.iV=new V.x(0,1,0):u},
ky:function(){var u=$.iW
return u==null?$.iW=new V.x(0,0,1):u},
lA:function(){var u=$.lw
return u==null?$.lw=new V.x(0,0,-1):u},
lu:function(a,b,c){return new V.x(a,b,c)},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fv:function fv(a){this.a=a},
Q:function Q(a){this.a=a},
bH:function bH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fJ:function fJ(a,b){this.a=a
this.b=b},
ao:function ao(a,b,c,d,e,f,g,h,i){var _=this
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
O:function O(a,b){this.a=a
this.b=b},
o:function o(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dl:function dl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dn:function dn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bN:function bN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
M:function M(a,b){this.a=a
this.b=b},
x:function x(a,b,c){this.a=a
this.b=b
this.c=c},
na:function(a){var u=new V.hZ()
u.eI(a,!0)
return u},
hZ:function hZ(){this.b=this.a=null},
i0:function i0(a){this.a=a},
i_:function i_(a){this.a=a}},U={
cO:function(){var u=new U.fd()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
ba:function(a){var u=new U.cP()
u.a=a
return u},
fG:function(a){var u=new U.ca()
u.bw(U.a8)
u.bv(u.geQ(),u.ghl())
u.aL(0,a)
u.e=null
u.f=V.bK()
u.r=0
return u},
fd:function fd(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cP:function cP(){this.b=this.a=null},
ca:function ca(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cd:function cd(){var _=this
_.d=_.c=_.b=_.a=null},
a8:function a8(){},
dq:function dq(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dL:function dL(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dM:function dM(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cU:function cU(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
mQ:function(a,b){var u=a.aQ,t=new A.h_(b,u)
t.eH(b,u)
t.eD(a,b)
return t},
mR:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gM(a0)+a1.gM(a1)+a2.gM(a2)+a3.gM(a3)+a4.gM(a4)+a5.gM(a5)+a6.gM(a6)+a7.gM(a7)+a8.gM(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.t)(a9),++t)f+="_"+H.f(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.t)(b0),++t)f+="_"+H.f(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.t)(b1),++t)f+="_"+H.f(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.U()
if(l){u=$.a6()
g=new Z.V(g.a|u.a)}if(k){u=$.b8()
g=new Z.V(g.a|u.a)}if(j){u=$.W()
g=new Z.V(g.a|u.a)}if(i){u=$.b7()
g=new Z.V(g.a|u.a)}return new A.h2(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,m,p,r,h,!0,!1,!1,o,r,n,l,k,j,!1,i,a,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
jM:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
jN:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.jM(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.k1(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
nR:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jM(b,t,"emission")
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
nO:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jN(b,t,"ambient")
b.a+="\n"},
nP:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jN(b,t,"diffuse")
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
nS:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jN(b,t,"invDiffuse")
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
nY:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jN(b,t,"specular")
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
nU:function(a,b){var u,t,s
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
nW:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jM(b,t,"reflect")
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
nX:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jM(b,t,"refract")
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
nQ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.f(u)
s=A.k1(t)
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
r=[P.r]
o=H.b([],r)
n=a.b
if(n.a||n.b||!1)o.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.b([],r)
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
c.a+="      highLight = intensity*("+C.b.v(m," + ")+");\n"}else c.a+="   highLight = "+C.b.v(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.b.v(o," + ")+");\n"
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
nV:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.f(u)
s=A.k1(t)
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
c.a=r+"\n"}r=[P.r]
l=H.b([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.b.v(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.b([],r)
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
k=H.b([],r)
r=a.c
if(r.a||r.b||!1)k.push("diffuse(norm, normDir)")
r=a.d
if(r.a||r.b||!1)k.push("invDiffuse(norm, normDir)")
r=a.e
if(r.a||r.b||!1)k.push("specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.b.v(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.b.v(l," + ")+");\n"
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
nZ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.f(u)
s=A.k1(t)
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
c.a=u+"\n"}u=[P.r]
j=H.b([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.b.v(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.b([],u)
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
i=H.b([],u)
u=a.c
if(u.a||u.b||!1)i.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)i.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)i.push("specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.b.v(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.v(j," + ")+");\n"
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
nT:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.r])
u=a.b
if(u.a||u.b||!1)t.push("ambientColor")
u=a.c
if(u.a||u.b||!1)t.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)t.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.b.v(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
o_:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.T("")
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
A.nR(a,j)
A.nO(a,j)
A.nP(a,j)
A.nS(a,j)
A.nY(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.nW(a,j)
A.nX(a,j)}A.nU(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.t)(q),++o)A.nQ(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.t)(q),++o)A.nV(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.t)(q),++o)A.nZ(a,q[o],j)
A.nT(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.b([],[P.r])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.t)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.at(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.t)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.at(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.t)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.at(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)n.push("emissionColor()")
u=a.r
if(u.a||u.b||!1)n.push("reflect(refl)")
u=a.x
if(u.a||u.b||!1)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.b.v(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
o0:function(a,b){var u,t,s
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
o2:function(a,b){var u
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
o1:function(a,b){var u
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
o4:function(a,b){var u,t
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
o5:function(a,b){var u,t
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
o3:function(a,b){var u
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
o6:function(a,b){var u
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
k1:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.a.at(a,1)},
ku:function(a,b,c,d,e){var u=new A.iz(a,c,e)
u.f=d
P.mP(d,0,P.p)
return u},
cL:function cL(a,b,c){this.a=a
this.b=b
this.c=c},
eZ:function eZ(a){this.a=a},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
h_:function h_(a,b){var _=this
_.jo=_.dF=_.dE=_.dD=_.aQ=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jw=_.jv=_.ju=_.cq=_.cp=_.co=_.cn=_.cm=_.cl=_.jt=_.dR=_.dQ=_.js=_.dP=_.dO=_.dN=_.jr=_.dM=_.dL=_.dK=_.jq=_.dJ=_.dI=_.jp=_.dH=_.dG=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cR:function cR(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.b=b},
dt:function dt(a,b){this.a=a
this.b=b},
h2:function h2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aQ=b3
_.dD=b4},
cp:function cp(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cr:function cr(a,b,c,d,e,f,g,h,i,j){var _=this
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
cs:function cs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dr:function dr(){},
dG:function dG(){},
iE:function iE(a){this.a=a},
dH:function dH(a,b,c){this.a=a
this.c=b
this.d=c},
iB:function iB(a,b,c){this.a=a
this.c=b
this.d=c},
iC:function iC(a,b,c){this.a=a
this.c=b
this.d=c},
iD:function iD(a,b,c){this.a=a
this.c=b
this.d=c},
iz:function iz(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
iA:function iA(a,b,c){this.a=a
this.c=b
this.d=c},
K:function K(a,b,c){this.a=a
this.c=b
this.d=c},
co:function co(a,b,c){this.a=a
this.c=b
this.d=c},
iF:function iF(a,b,c){this.a=a
this.c=b
this.d=c},
cq:function cq(a,b,c){this.a=a
this.c=b
this.d=c},
ak:function ak(a,b,c){this.a=a
this.c=b
this.d=c},
a5:function a5(a,b,c){this.a=a
this.c=b
this.d=c},
bQ:function bQ(a,b,c){this.a=a
this.c=b
this.d=c}},F={
bS:function(a,b,c,d,e,f,g,h,i){var u=null,t=new F.bR(),s=new F.j0(),r=[F.d3]
s.b=H.b([],r)
s.c=H.b([],r)
t.c=s
s=new F.iY()
r=[F.bG]
s.b=H.b([],r)
s.c=H.b([],r)
s.d=H.b([],r)
t.d=s
t.e=0
s=h.a
t.f=(s&$.U().a)!==0?d:u
t.r=(s&$.a6().a)!==0?e:u
t.x=(s&$.b8().a)!==0?b:u
t.y=(s&$.W().a)!==0?f:u
t.z=(s&$.bu().a)!==0?g:u
t.Q=(s&$.mi().a)!==0?c:u
t.ch=(s&$.c3().a)!==0?i:0
t.cx=(s&$.b7().a)!==0?a:u
return t},
bG:function bG(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
d3:function d3(){},
hx:function hx(){},
dm:function dm(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hQ:function hQ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
kq:function kq(){},
hR:function hR(a){this.a=a
this.b=null},
hS:function hS(a){this.a=a
this.b=null},
hT:function hT(){this.b=null},
bR:function bR(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.a=null},
j2:function j2(a){this.a=a},
j1:function j1(a){this.a=a},
iX:function iX(a){this.a=a
this.c=this.b=null},
iY:function iY(){this.d=this.c=this.b=null},
iZ:function iZ(a,b){this.a=a
this.b=b},
j_:function j_(a,b){this.a=a
this.b=b},
j0:function j0(){this.c=this.b=null}}
var w=[C,H,J,P,W,L,B,T,R,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kk.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gH:function(a){return H.cl(a)},
h:function(a){return"Instance of '"+H.f(H.cm(a))+"'"}}
J.fL.prototype={
h:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$ias:1}
J.d_.prototype={
p:function(a,b){return null==b},
h:function(a){return"null"},
gH:function(a){return 0}}
J.d0.prototype={
gH:function(a){return 0},
h:function(a){return String(a)}}
J.hu.prototype={}
J.br.prototype={}
J.bf.prototype={
h:function(a){var u=a[$.m2()]
if(u==null)return this.eA(a)
return"JavaScript function for "+H.f(J.aw(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.bd.prototype={
U:function(a,b){var u
if(!!a.fixed$length)H.v(P.z("remove"))
for(u=0;u<a.length;++u)if(J.G(a[u],b)){a.splice(u,1)
return!0}return!1},
aL:function(a,b){var u,t
if(!!a.fixed$length)H.v(P.z("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.t)(b),++t)a.push(b[t])},
K:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.e(P.bB(a))}},
v:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.f(a[u])
if(u>=s)return H.c(r,u)
r[u]=t}return r.join(b)},
iG:function(a){return this.v(a,"")},
iB:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.e(P.bB(a))}return u},
iC:function(a,b,c){return this.iB(a,b,c,null)},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
ex:function(a,b,c){if(b<0||b>a.length)throw H.e(P.Z(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.Z(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.c0(a,0)])
return H.b(a.slice(b,c),[H.c0(a,0)])},
gaU:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.e(H.mJ())},
bU:function(a,b){if(!!a.immutable$list)H.v(P.z("sort"))
H.ds(a,0,a.length-1,b)},
ai:function(a,b){var u
for(u=0;u<a.length;++u)if(J.G(a[u],b))return!0
return!1},
h:function(a){return P.kh(a,"[","]")},
ga_:function(a){return new J.a7(a,a.length)},
gH:function(a){return H.cl(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.v(P.z("set length"))
if(b<0)throw H.e(P.Z(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.b1(a,b))
if(b>=a.length||b<0)throw H.e(H.b1(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.v(P.z("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.b1(a,b))
if(b>=a.length||b<0)throw H.e(H.b1(a,b))
a[b]=c},
$ii:1,
$in:1}
J.kj.prototype={}
J.a7.prototype={
gO:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.t(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bI.prototype={
bH:function(a,b){var u
if(typeof b!=="number")throw H.e(H.ah(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbM(b)
if(this.gbM(a)===u)return 0
if(this.gbM(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbM:function(a){return a===0?1/a<0:a<0},
ax:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.e(P.z(""+a+".toInt()"))},
bK:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.e(P.z(""+a+".floor()"))},
aw:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.z(""+a+".round()"))},
ii:function(a,b,c){if(C.c.bH(b,c)>0)throw H.e(H.ah(b))
if(this.bH(a,b)<0)return b
if(this.bH(a,c)>0)return c
return a},
ek:function(a,b){var u
if(b>20)throw H.e(P.Z(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbM(a))return"-"+u
return u},
bs:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.e(P.Z(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.T(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.v(P.z("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.c(t,1)
u=t[1]
if(3>=s)return H.c(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.i("0",r)},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
aY:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eB:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dk(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dk(a,b)},
dk:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.z("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
ew:function(a,b){if(b<0)throw H.e(H.ah(b))
return b>31?0:a<<b>>>0},
b8:function(a,b){var u
if(a>0)u=this.dj(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hP:function(a,b){if(b<0)throw H.e(H.ah(b))
return this.dj(a,b)},
dj:function(a,b){return b>31?0:a>>>b},
$iai:1}
J.cZ.prototype={
cE:function(a,b){var u=this.ew(1,b-1)
return((a&u-1)>>>0)-((a&u)>>>0)},
$ip:1}
J.cY.prototype={}
J.be.prototype={
T:function(a,b){if(b<0)throw H.e(H.b1(a,b))
if(b>=a.length)H.v(H.b1(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.e(H.b1(a,b))
return a.charCodeAt(b)},
k:function(a,b){if(typeof b!=="string")throw H.e(P.kY(b,null,null))
return a+b},
be:function(a,b,c,d){var u,t
c=P.bo(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
aa:function(a,b,c){var u
if(c<0||c>a.length)throw H.e(P.Z(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
ak:function(a,b){return this.aa(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.v(H.ah(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.B()
if(b<0)throw H.e(P.hF(b,null))
if(b>c)throw H.e(P.hF(b,null))
if(c>a.length)throw H.e(P.hF(c,null))
return a.substring(b,c)},
at:function(a,b){return this.u(a,b,null)},
i:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.H)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aV:function(a,b){var u=b-a.length
if(u<=0)return a
return this.i(" ",u)+a},
bL:function(a,b,c){var u
if(c<0||c>a.length)throw H.e(P.Z(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dZ:function(a,b){return this.bL(a,b,0)},
h:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ir:1}
H.R.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.a.T(this.a,b)},
$aq:function(){return[P.p]},
$ai:function(){return[P.p]},
$an:function(){return[P.p]}}
H.ft.prototype={}
H.d5.prototype={
gO:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.b2(s),q=r.gm(s)
if(t.b!==q)throw H.e(P.bB(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.J(s,u);++t.c
return!0}}
H.fY.prototype={
ga_:function(a){return new H.fZ(J.bw(this.a),this.b)},
gm:function(a){return J.al(this.a)},
J:function(a,b){return this.b.$1(J.k8(this.a,b))},
$ai:function(a,b){return[b]}}
H.fZ.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.a=u.c.$1(t.gO(t))
return!0}u.a=null
return!1},
gO:function(a){return this.a}}
H.j5.prototype={
ga_:function(a){return new H.j6(J.bw(this.a),this.b)}}
H.j6.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(t.$1(u.gO(u)))return!0
return!1},
gO:function(a){var u=this.a
return u.gO(u)}}
H.cV.prototype={}
H.iJ.prototype={
l:function(a,b,c){throw H.e(P.z("Cannot modify an unmodifiable list"))}}
H.dI.prototype={}
H.ff.prototype={
h:function(a){return P.kn(this)},
l:function(a,b,c){return H.mD()},
$iS:1}
H.fg.prototype={
gm:function(a){return this.a},
bI:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bI(0,b))return
return this.d6(b)},
d6:function(a){return this.b[a]},
K:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.d6(s))}}}
H.ix.prototype={
ap:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hp.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fN.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.f(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.f(t.a)+")"
return s+r+"' on '"+u+"' ("+H.f(t.a)+")"}}
H.iI.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.k2.prototype={
$1:function(a){if(!!J.N(a).$ibE)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:10}
H.em.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.c7.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
gji:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.id.prototype={}
H.i7.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.eK(u)+"'"}}
H.c4.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.c4))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.cl(this.a)
else u=typeof t!=="object"?J.bv(t):H.cl(t)
return(u^H.cl(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.cm(u))+"'")}}
H.f8.prototype={
h:function(a){return this.a}}
H.hN.prototype={
h:function(a){return"RuntimeError: "+H.f(this.a)}}
H.J.prototype={
gm:function(a){return this.a},
gaT:function(a){return new H.d4(this,[H.c0(this,0)])},
bI:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.d3(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.d3(t,b)}else return s.iE(b)},
iE:function(a){var u=this.d
if(u==null)return!1
return this.cu(this.c2(u,J.bv(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bz(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bz(r,b)
s=t==null?null:t.b
return s}else return q.iF(b)},
iF:function(a){var u,t,s=this.d
if(s==null)return
u=this.c2(s,J.bv(a)&0x3ffffff)
t=this.cu(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.cW(u==null?o.b=o.c4():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cW(t==null?o.c=o.c4():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.c4()
r=J.bv(b)&0x3ffffff
q=o.c2(s,r)
if(q==null)o.ca(s,r,[o.c5(b,c)])
else{p=o.cu(q,b)
if(p>=0)q[p].b=c
else q.push(o.c5(b,c))}}},
K:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.e(P.bB(u))
t=t.c}},
cW:function(a,b,c){var u=this.bz(a,b)
if(u==null)this.ca(a,b,this.c5(b,c))
else u.b=c},
c5:function(a,b){var u=this,t=new H.fQ(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
cu:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.G(a[t].a,b))return t
return-1},
h:function(a){return P.kn(this)},
bz:function(a,b){return a[b]},
c2:function(a,b){return a[b]},
ca:function(a,b,c){a[b]=c},
fg:function(a,b){delete a[b]},
d3:function(a,b){return this.bz(a,b)!=null},
c4:function(){var u="<non-identifier-key>",t=Object.create(null)
this.ca(t,u,t)
this.fg(t,u)
return t}}
H.fQ.prototype={}
H.d4.prototype={
gm:function(a){return this.a.a},
ga_:function(a){var u=this.a,t=new H.fR(u,u.r)
t.c=u.e
return t}}
H.fR.prototype={
gO:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.bB(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.jV.prototype={
$1:function(a){return this.a(a)},
$S:10}
H.jW.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jX.prototype={
$1:function(a){return this.a(a)}}
H.fM.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$in6:1}
H.ci.prototype={$ici:1}
H.bi.prototype={$ibi:1}
H.da.prototype={
gm:function(a){return a.length},
$iB:1,
$aB:function(){}}
H.cj.prototype={
j:function(a,b){H.aK(b,a,a.length)
return a[b]},
l:function(a,b,c){H.aK(b,a,a.length)
a[b]=c},
$aq:function(){return[P.F]},
$ii:1,
$ai:function(){return[P.F]},
$in:1,
$an:function(){return[P.F]}}
H.db.prototype={
l:function(a,b,c){H.aK(b,a,a.length)
a[b]=c},
$aq:function(){return[P.p]},
$ii:1,
$ai:function(){return[P.p]},
$in:1,
$an:function(){return[P.p]}}
H.hk.prototype={
j:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.hl.prototype={
j:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.hm.prototype={
j:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.hn.prototype={
j:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.ho.prototype={
j:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.dc.prototype={
gm:function(a){return a.length},
j:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.bL.prototype={
gm:function(a){return a.length},
j:function(a,b){H.aK(b,a,a.length)
return a[b]},
$ibL:1,
$ibP:1}
H.cv.prototype={}
H.cw.prototype={}
H.cx.prototype={}
H.cy.prototype={}
P.j8.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.j7.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.j9.prototype={
$0:function(){this.a.$0()}}
P.ja.prototype={
$0:function(){this.a.$0()}}
P.es.prototype={
eT:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bZ(new P.jz(this,b),0),a)
else throw H.e(P.z("`setTimeout()` not found."))},
eU:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bZ(new P.jy(this,a,Date.now(),b),0),a)
else throw H.e(P.z("Periodic timer."))},
$idB:1}
P.jz.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jy.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.eB(u,q)}s.c=r
t.d.$1(s)}}
P.dQ.prototype={}
P.dw.prototype={}
P.ia.prototype={}
P.dB.prototype={}
P.jH.prototype={}
P.jO.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.df():s
s=this.b
if(s==null)throw H.e(t)
u=H.e(t)
u.stack=s.h(0)
throw u}}
P.jo.prototype={
j5:function(a){var u,t,s,r=null
try{if(C.f===$.ar){a.$0()
return}P.o8(r,r,this,a)}catch(s){u=H.c2(s)
t=H.kI(s)
P.lK(r,r,this,u,t)}},
j6:function(a,b){var u,t,s,r=null
try{if(C.f===$.ar){a.$1(b)
return}P.o9(r,r,this,a,b)}catch(s){u=H.c2(s)
t=H.kI(s)
P.lK(r,r,this,u,t)}},
j7:function(a,b){return this.j6(a,b,null)},
ig:function(a){return new P.jp(this,a)},
dt:function(a,b){return new P.jq(this,a,b)}}
P.jp.prototype={
$0:function(){return this.a.j5(this.b)}}
P.jq.prototype={
$1:function(a){return this.a.j7(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jl.prototype={
ga_:function(a){var u=new P.e4(this,this.r)
u.c=this.e
return u},
gm:function(a){return this.a},
q:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d0(u==null?s.b=P.kz():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d0(t==null?s.c=P.kz():t,b)}else return s.eW(0,b)},
eW:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kz()
u=s.d1(b)
t=r[u]
if(t==null)r[u]=[s.bZ(b)]
else{if(s.d7(t,b)>=0)return!1
t.push(s.bZ(b))}return!0},
U:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hF(this.c,b)
else return this.hE(0,b)},
hE:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.fk(r,b)
t=s.d7(u,b)
if(t<0)return!1
s.dl(u.splice(t,1)[0])
return!0},
d0:function(a,b){if(a[b]!=null)return!1
a[b]=this.bZ(b)
return!0},
hF:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.dl(u)
delete a[b]
return!0},
da:function(){this.r=1073741823&this.r+1},
bZ:function(a){var u,t=this,s=new P.jm(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.da()
return s},
dl:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.da()},
d1:function(a){return J.bv(a)&1073741823},
fk:function(a,b){return a[this.d1(b)]},
d7:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.G(a[t].a,b))return t
return-1}}
P.jm.prototype={}
P.e4.prototype={
gO:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.bB(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fS.prototype={$ii:1,$in:1}
P.q.prototype={
ga_:function(a){return new H.d5(a,this.gm(a))},
J:function(a,b){return this.j(a,b)},
ja:function(a,b){var u,t,s=this,r=H.b([],[H.op(s,a,"q",0)])
C.b.sm(r,s.gm(a))
for(u=0;u<s.gm(a);++u){t=s.j(a,u)
if(u>=r.length)return H.c(r,u)
r[u]=t}return r},
j9:function(a){return this.ja(a,!0)},
dS:function(a,b,c,d){var u
P.bo(b,c,this.gm(a))
for(u=b;u<c;++u)this.l(a,u,d)},
h:function(a){return P.kh(a,"[","]")}}
P.fV.prototype={}
P.fW.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.f(a)
t.a=u+": "
t.a+=H.f(b)},
$S:4}
P.aP.prototype={
K:function(a,b){var u,t
for(u=J.bw(this.gaT(a));u.A();){t=u.gO(u)
b.$2(t,this.j(a,t))}},
gm:function(a){return J.al(this.gaT(a))},
h:function(a){return P.kn(a)},
$iS:1}
P.jA.prototype={
l:function(a,b,c){throw H.e(P.z("Cannot modify unmodifiable map"))}}
P.fX.prototype={
j:function(a,b){return J.cJ(this.a,b)},
l:function(a,b,c){J.k6(this.a,b,c)},
K:function(a,b){J.kX(this.a,b)},
gm:function(a){return J.al(this.a)},
h:function(a){return J.aw(this.a)},
$iS:1}
P.dJ.prototype={}
P.jr.prototype={
h:function(a){return P.kh(this,"{","}")},
J:function(a,b){var u,t,s
P.li(b,"index")
for(u=P.ns(this,this.r),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.e(P.I(b,this,"index",null,t))},
$ii:1}
P.e5.prototype={}
P.ey.prototype={}
P.f3.prototype={
iJ:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bo(a0,a1,b.length)
u=$.mk()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.a.G(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jU(C.a.G(b,n))
j=H.jU(C.a.G(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.c(u,i)
h=u[i]
if(h>=0){i=C.a.T("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.T("")
g=r.a+=C.a.u(b,s,t)
r.a=g+H.dk(m)
s=n
continue}}throw H.e(P.P("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.u(b,s,a1)
f=g.length
if(q>=0)P.kZ(b,p,a1,q,o,f)
else{e=C.c.aY(f-1,4)+1
if(e===1)throw H.e(P.P(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.be(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.kZ(b,p,a1,q,o,d)
else{e=C.c.aY(d,4)
if(e===1)throw H.e(P.P(c,b,a1))
if(e>1)b=C.a.be(b,a1,a1,e===2?"==":"=")}return b}}
P.f4.prototype={}
P.fb.prototype={}
P.fh.prototype={}
P.fu.prototype={}
P.iR.prototype={
giz:function(){return C.I}}
P.iT.prototype={
ck:function(a){var u,t,s=P.bo(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jG(u)
if(t.fi(a,0,s)!==s)t.dn(J.mq(a,s-1),0)
return new Uint8Array(u.subarray(0,H.nJ(0,t.b,u.length)))}}
P.jG.prototype={
dn:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fi:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.T(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.G(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dn(r,C.a.G(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iS.prototype={
ck:function(a){var u,t,s,r,q,p,o,n,m=P.nh(!1,a,0,null)
if(m!=null)return m
u=P.bo(0,null,J.al(a))
t=P.lM(a,0,u)
if(t>0){s=P.cn(a,0,t)
if(t===u)return s
r=new P.T(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.T("")
o=new P.jF(!1,r)
o.c=p
o.il(a,q,u)
if(o.e>0){H.v(P.P("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.dk(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jF.prototype={
il:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.b2(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.aj()
if((r&192)!==128){q=P.P(k+C.c.bs(r,16),a,s)
throw H.e(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.c(C.t,q)
if(j<=C.t[q]){q=P.P("Overlong encoding of 0x"+C.c.bs(j,16),a,s-h-1)
throw H.e(q)}if(j>1114111){q=P.P("Character outside valid Unicode range: 0x"+C.c.bs(j,16),a,s-h-1)
throw H.e(q)}if(!l.c||j!==65279)t.a+=H.dk(j)
l.c=!1}for(q=s<c;q;){p=P.lM(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.cn(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.B()
if(r<0){m=P.P("Negative UTF-8 code unit: -0x"+C.c.bs(-r,16),a,n-1)
throw H.e(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.P(k+C.c.bs(r,16),a,n-1)
throw H.e(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.as.prototype={}
P.ab.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.ab&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.c.b8(u,30))&1073741823},
h:function(a){var u=this,t=P.mE(H.n2(u)),s=P.cQ(H.n0(u)),r=P.cQ(H.mX(u)),q=P.cQ(H.mY(u)),p=P.cQ(H.n_(u)),o=P.cQ(H.n1(u)),n=P.mF(H.mZ(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.F.prototype={}
P.an.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.an&&this.a===b.a},
gH:function(a){return C.c.gH(this.a)},
h:function(a){var u,t,s,r=new P.fs(),q=this.a
if(q<0)return"-"+new P.an(0-q).h(0)
u=r.$1(C.c.a6(q,6e7)%60)
t=r.$1(C.c.a6(q,1e6)%60)
s=new P.fr().$1(q%1e6)
return""+C.c.a6(q,36e8)+":"+H.f(u)+":"+H.f(t)+"."+H.f(s)}}
P.fr.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fs.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bE.prototype={}
P.df.prototype={
h:function(a){return"Throw of null."}}
P.ax.prototype={
gc0:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc_:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gc0()+o+u
if(!q.a)return t
s=q.gc_()
r=P.kg(q.b)
return t+s+": "+r}}
P.bn.prototype={
gc0:function(){return"RangeError"},
gc_:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.f(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.f(s)
else if(t>s)u=": Not in range "+H.f(s)+".."+H.f(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.f(s)}return u}}
P.fI.prototype={
gc0:function(){return"RangeError"},
gc_:function(){var u,t=this.b
if(typeof t!=="number")return t.B()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.f(u)},
gm:function(a){return this.f}}
P.iK.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.iG.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.i5.prototype={
h:function(a){return"Bad state: "+this.a}}
P.fe.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kg(u)+"."}}
P.ht.prototype={
h:function(a){return"Out of Memory"},
$ibE:1}
P.du.prototype={
h:function(a){return"Stack Overflow"},
$ibE:1}
P.fm.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dY.prototype={
h:function(a){return"Exception: "+this.a}}
P.fE.prototype={
h:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.u(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.G(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.T(f,q)
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
return h+l+j+k+"\n"+C.a.i(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.f(g)+")"):h}}
P.p.prototype={}
P.i.prototype={
gm:function(a){var u,t=this.ga_(this)
for(u=0;t.A();)++u
return u},
J:function(a,b){var u,t,s
P.li(b,"index")
for(u=this.ga_(this),t=0;u.A();){s=u.gO(u)
if(b===t)return s;++t}throw H.e(P.I(b,this,"index",null,t))},
h:function(a){return P.mI(this,"(",")")}}
P.fK.prototype={}
P.n.prototype={$ii:1}
P.S.prototype={}
P.bj.prototype={
gH:function(a){return P.a3.prototype.gH.call(this,this)},
h:function(a){return"null"}}
P.ai.prototype={}
P.a3.prototype={constructor:P.a3,$ia3:1,
p:function(a,b){return this===b},
gH:function(a){return H.cl(this)},
h:function(a){return"Instance of '"+H.f(H.cm(this))+"'"},
toString:function(){return this.h(this)}}
P.r.prototype={}
P.T.prototype={
gm:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iP.prototype={
$2:function(a,b){var u,t,s,r=J.kH(b).dZ(b,"=")
if(r===-1){if(b!=="")J.k6(a,P.kD(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.u(b,0,r)
t=C.a.at(b,r+1)
s=this.a
J.k6(a,P.kD(u,0,u.length,s,!0),P.kD(t,0,t.length,s,!0))}return a}}
P.iM.prototype={
$2:function(a,b){throw H.e(P.P("Illegal IPv4 address, "+a,this.a,b))}}
P.iN.prototype={
$2:function(a,b){throw H.e(P.P("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iO.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.c1(C.a.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.B()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bT.prototype={
gem:function(){return this.b},
gct:function(a){var u=this.c
if(u==null)return""
if(C.a.ak(u,"["))return C.a.u(u,1,u.length-1)
return u},
gbO:function(a){var u=this.d
if(u==null)return P.lD(this.a)
return u},
gcD:function(a){var u=this.f
return u==null?"":u},
gdU:function(){var u=this.r
return u==null?"":u},
eh:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.ak(u,"/"))u="/"+u
s=P.kB(null,0,0,b)
return new P.bT(q,o,m,n,u,s,r.r)},
geg:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.r
u=this.Q=new P.dJ(P.ls(t==null?"":t),[u,u])
t=u}return t},
gdV:function(){return this.c!=null},
gdY:function(){return this.f!=null},
gdW:function(){return this.r!=null},
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
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.N(b).$ikv)if(s.a==b.gbS())if(s.c!=null===b.gdV())if(s.b==b.gem())if(s.gct(s)==b.gct(b))if(s.gbO(s)==b.gbO(b))if(s.e===b.gea(b)){u=s.f
t=u==null
if(!t===b.gdY()){if(t)u=""
if(u===b.gcD(b)){u=s.r
t=u==null
if(!t===b.gdW()){if(t)u=""
u=u===b.gdU()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gH:function(a){var u=this.z
return u==null?this.z=C.a.gH(this.h(0)):u},
$ikv:1,
gbS:function(){return this.a},
gea:function(a){return this.e}}
P.jB.prototype={
$1:function(a){throw H.e(P.P("Invalid port",this.a,this.b+1))}}
P.jC.prototype={
$1:function(a){return P.ez(C.S,a,C.e,!1)}}
P.jE.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.f(P.ez(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.f(P.ez(C.h,b,C.e,!0))}}}
P.jD.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.bw(b),t=this.a;u.A();)t.$2(a,u.gO(u))}}
P.iL.prototype={
gel:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.c(o,0)
u=q.a
o=o[0]+1
t=C.a.bL(u,"?",o)
s=u.length
if(t>=0){r=P.cD(u,t+1,s,C.n,!1)
s=t}else r=p
return q.c=new P.je("data",p,p,p,P.cD(u,o,s,C.w,!1),r,p)},
h:function(a){var u,t=this.b
if(0>=t.length)return H.c(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jJ.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jI.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.c(u,a)
u=u[a]
J.mr(u,0,96,b)
return u},
$S:18}
P.jK.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.G(b,s)^96
if(r>=t)return H.c(a,r)
a[r]=c}}}
P.jL.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.G(b,0),t=C.a.G(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.c(a,r)
a[r]=c}}}
P.js.prototype={
gdV:function(){return this.c>0},
gdX:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.k()
t=this.e
if(typeof t!=="number")return H.d(t)
t=u+1<t
u=t}else u=!1
return u},
gdY:function(){var u=this.f
if(typeof u!=="number")return u.B()
return u<this.r},
gdW:function(){return this.r<this.a.length},
gd8:function(){return this.b===4&&C.a.ak(this.a,"http")},
gd9:function(){return this.b===5&&C.a.ak(this.a,"https")},
gbS:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gd8())q=t.x="http"
else if(t.gd9()){t.x="https"
q="https"}else if(q===4&&C.a.ak(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.ak(t.a,r)){t.x=r
q=r}else{q=C.a.u(t.a,0,q)
t.x=q}return q},
gem:function(){var u=this.c,t=this.b+3
return u>t?C.a.u(this.a,t,u-1):""},
gct:function(a){var u=this.c
return u>0?C.a.u(this.a,u,this.d):""},
gbO:function(a){var u,t=this
if(t.gdX()){u=t.d
if(typeof u!=="number")return u.k()
return P.c1(C.a.u(t.a,u+1,t.e),null,null)}if(t.gd8())return 80
if(t.gd9())return 443
return 0},
gea:function(a){return C.a.u(this.a,this.e,this.f)},
gcD:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.B()
return u<t?C.a.u(this.a,u+1,t):""},
gdU:function(){var u=this.r,t=this.a
return u<t.length?C.a.at(t,u+1):""},
geg:function(){var u=this,t=u.f
if(typeof t!=="number")return t.B()
if(t>=u.r)return C.T
t=P.r
return new P.dJ(P.ls(u.gcD(u)),[t,t])},
eh:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbS(),m=n==="file",l=p.c,k=l>0?C.a.u(p.a,p.b+3,l):"",j=p.gdX()?p.gbO(p):o
l=p.c
if(l>0)u=C.a.u(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.u(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.ak(t,"/"))t="/"+t
r=P.kB(o,0,0,b)
s=p.r
q=s<l.length?C.a.at(l,s+1):o
return new P.bT(n,k,u,j,t,r,q)},
gH:function(a){var u=this.y
return u==null?this.y=C.a.gH(this.a):u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.N(b).$ikv&&this.a===b.h(0)},
h:function(a){return this.a},
$ikv:1}
P.je.prototype={}
W.l.prototype={}
W.eV.prototype={
gm:function(a){return a.length}}
W.eX.prototype={
h:function(a){return String(a)}}
W.eY.prototype={
h:function(a){return String(a)}}
W.by.prototype={$iby:1}
W.bA.prototype={
cI:function(a,b,c){if(c!=null)return a.getContext(b,P.oh(c))
return a.getContext(b)},
eq:function(a,b){return this.cI(a,b,null)},
$ibA:1}
W.b9.prototype={
gm:function(a){return a.length}}
W.fi.prototype={
gm:function(a){return a.length}}
W.E.prototype={$iE:1}
W.c8.prototype={
gm:function(a){return a.length}}
W.fj.prototype={}
W.aj.prototype={}
W.az.prototype={}
W.fk.prototype={
gm:function(a){return a.length}}
W.fl.prototype={
gm:function(a){return a.length}}
W.fn.prototype={
gm:function(a){return a.length}}
W.fo.prototype={
h:function(a){return String(a)}}
W.cS.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[[P.ag,P.ai]]},
$aq:function(){return[[P.ag,P.ai]]},
$ii:1,
$ai:function(){return[[P.ag,P.ai]]},
$in:1,
$an:function(){return[[P.ag,P.ai]]}}
W.cT.prototype={
h:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gaX(a))+" x "+H.f(this.gaS(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.N(b)
if(!u.$iag)return!1
return a.left===u.gad(b)&&a.top===u.gbP(b)&&this.gaX(a)===u.gaX(b)&&this.gaS(a)===u.gaS(b)},
gH:function(a){return W.lC(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(this.gaX(a)),C.d.gH(this.gaS(a)))},
gdu:function(a){return a.bottom},
gaS:function(a){return a.height},
gad:function(a){return a.left},
gaf:function(a){return a.right},
gbP:function(a){return a.top},
gaX:function(a){return a.width},
$iag:1,
$aag:function(){return[P.ai]}}
W.fp.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[P.r]},
$aq:function(){return[P.r]},
$ii:1,
$ai:function(){return[P.r]},
$in:1,
$an:function(){return[P.r]}}
W.fq.prototype={
gm:function(a){return a.length}}
W.jc.prototype={
gm:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
l:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
this.a.replaceChild(c,u[b])},
q:function(a,b){this.a.appendChild(b)
return b},
ga_:function(a){var u=this.j9(this)
return new J.a7(u,u.length)},
$aq:function(){return[W.a1]},
$ai:function(){return[W.a1]},
$an:function(){return[W.a1]}}
W.a1.prototype={
gdw:function(a){return new W.jc(a,a.children)},
gdz:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.B()
if(s<0)s=-s*0
if(typeof r!=="number")return r.B()
if(r<0)r=-r*0
return new P.ag(u,t,s,r,[P.ai])},
h:function(a){return a.localName},
$ia1:1}
W.j.prototype={$ij:1}
W.h.prototype={
i6:function(a,b,c,d){if(c!=null)this.eY(a,b,c,!1)},
eY:function(a,b,c,d){return a.addEventListener(b,H.bZ(c,1),!1)}}
W.aA.prototype={$iaA:1}
W.c9.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aA]},
$aq:function(){return[W.aA]},
$ii:1,
$ai:function(){return[W.aA]},
$in:1,
$an:function(){return[W.aA]},
$ic9:1}
W.fz.prototype={
gm:function(a){return a.length}}
W.fD.prototype={
gm:function(a){return a.length}}
W.aM.prototype={$iaM:1}
W.fH.prototype={
gm:function(a){return a.length}}
W.cb.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.D]},
$aq:function(){return[W.D]},
$ii:1,
$ai:function(){return[W.D]},
$in:1,
$an:function(){return[W.D]}}
W.aN.prototype={$iaN:1,
gdB:function(a){return a.data}}
W.cc.prototype={$icc:1}
W.bJ.prototype={$ibJ:1}
W.fT.prototype={
h:function(a){return String(a)}}
W.hd.prototype={
gm:function(a){return a.length}}
W.ch.prototype={$ich:1}
W.he.prototype={
j:function(a,b){return P.b0(a.get(b))},
K:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b0(u.value[1]))}},
gaT:function(a){var u=H.b([],[P.r])
this.K(a,new W.hf(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.e(P.z("Not supported"))},
$iS:1,
$aS:function(){return[P.r,null]}}
W.hf.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hg.prototype={
j:function(a,b){return P.b0(a.get(b))},
K:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b0(u.value[1]))}},
gaT:function(a){var u=H.b([],[P.r])
this.K(a,new W.hh(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.e(P.z("Not supported"))},
$iS:1,
$aS:function(){return[P.r,null]}}
W.hh.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aR.prototype={$iaR:1}
W.hi.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aR]},
$aq:function(){return[W.aR]},
$ii:1,
$ai:function(){return[W.aR]},
$in:1,
$an:function(){return[W.aR]}}
W.aF.prototype={$iaF:1}
W.jb.prototype={
l:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.c(t,b)
u.replaceChild(c,t[b])},
ga_:function(a){var u=this.a.childNodes
return new W.cW(u,u.length)},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$aq:function(){return[W.D]},
$ai:function(){return[W.D]},
$an:function(){return[W.D]}}
W.D.prototype={
j3:function(a,b){var u,t
try{u=a.parentNode
J.mo(u,b,a)}catch(t){H.c2(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.ez(a):u},
hG:function(a,b,c){return a.replaceChild(b,c)},
$iD:1}
W.de.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.D]},
$aq:function(){return[W.D]},
$ii:1,
$ai:function(){return[W.D]},
$in:1,
$an:function(){return[W.D]}}
W.aU.prototype={$iaU:1,
gm:function(a){return a.length}}
W.hw.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aU]},
$aq:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$in:1,
$an:function(){return[W.aU]}}
W.hL.prototype={
j:function(a,b){return P.b0(a.get(b))},
K:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b0(u.value[1]))}},
gaT:function(a){var u=H.b([],[P.r])
this.K(a,new W.hM(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.e(P.z("Not supported"))},
$iS:1,
$aS:function(){return[P.r,null]}}
W.hM.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hO.prototype={
gm:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.i1.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aW]},
$aq:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$in:1,
$an:function(){return[W.aW]}}
W.aX.prototype={$iaX:1}
W.i2.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aX]},
$aq:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]},
$in:1,
$an:function(){return[W.aX]}}
W.aY.prototype={$iaY:1,
gm:function(a){return a.length}}
W.i8.prototype={
j:function(a,b){return a.getItem(b)},
l:function(a,b,c){a.setItem(b,c)},
K:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaT:function(a){var u=H.b([],[P.r])
this.K(a,new W.i9(u))
return u},
gm:function(a){return a.length},
$iS:1,
$aS:function(){return[P.r,P.r]}}
W.i9.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aH.prototype={$iaH:1}
W.aZ.prototype={$iaZ:1}
W.aI.prototype={$iaI:1}
W.ii.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aI]},
$aq:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]},
$in:1,
$an:function(){return[W.aI]}}
W.ij.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aZ]},
$aq:function(){return[W.aZ]},
$ii:1,
$ai:function(){return[W.aZ]},
$in:1,
$an:function(){return[W.aZ]}}
W.iq.prototype={
gm:function(a){return a.length}}
W.b_.prototype={$ib_:1}
W.bO.prototype={$ibO:1}
W.iu.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.b_]},
$aq:function(){return[W.b_]},
$ii:1,
$ai:function(){return[W.b_]},
$in:1,
$an:function(){return[W.b_]}}
W.iv.prototype={
gm:function(a){return a.length}}
W.bq.prototype={}
W.iQ.prototype={
h:function(a){return String(a)}}
W.j3.prototype={
gm:function(a){return a.length}}
W.bs.prototype={
giq:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.z("deltaY is not supported"))},
gip:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.z("deltaX is not supported"))},
$ibs:1}
W.cu.prototype={
hH:function(a,b){return a.requestAnimationFrame(H.bZ(b,1))},
fh:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jd.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.E]},
$aq:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]}}
W.dT.prototype={
h:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.N(b)
if(!u.$iag)return!1
return a.left===u.gad(b)&&a.top===u.gbP(b)&&a.width===u.gaX(b)&&a.height===u.gaS(b)},
gH:function(a){return W.lC(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(a.width),C.d.gH(a.height))},
gaS:function(a){return a.height},
gaX:function(a){return a.width}}
W.jh.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aM]},
$aq:function(){return[W.aM]},
$ii:1,
$ai:function(){return[W.aM]},
$in:1,
$an:function(){return[W.aM]}}
W.ea.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.D]},
$aq:function(){return[W.D]},
$ii:1,
$ai:function(){return[W.D]},
$in:1,
$an:function(){return[W.D]}}
W.jt.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aY]},
$aq:function(){return[W.aY]},
$ii:1,
$ai:function(){return[W.aY]},
$in:1,
$an:function(){return[W.aY]}}
W.jx.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aH]},
$aq:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$in:1,
$an:function(){return[W.aH]}}
W.jf.prototype={}
W.jg.prototype={
$1:function(a){return this.a.$1(a)}}
W.H.prototype={
ga_:function(a){return new W.cW(a,this.gm(a))}}
W.cW.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cJ(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gO:function(a){return this.d}}
W.dS.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.cz.prototype={}
W.cA.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.en.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.cB.prototype={}
W.cC.prototype={}
W.et.prototype={}
W.eu.prototype={}
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
P.ju.prototype={
dT:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
cG:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.N(a)
if(!!u.$iab)return new Date(a.a)
if(!!u.$in6)throw H.e(P.iH("structured clone of RegExp"))
if(!!u.$iaA)return a
if(!!u.$iby)return a
if(!!u.$ic9)return a
if(!!u.$iaN)return a
if(!!u.$ici||!!u.$ibi||!!u.$ich)return a
if(!!u.$iS){t=p.dT(a)
s=p.b
r=s.length
if(t>=r)return H.c(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.c(s,t)
s[t]=q
u.K(a,new P.jw(o,p))
return o.a}if(!!u.$in){t=p.dT(a)
o=p.b
if(t>=o.length)return H.c(o,t)
q=o[t]
if(q!=null)return q
return p.im(a,t)}throw H.e(P.iH("structured clone of other type"))},
im:function(a,b){var u,t=J.b2(a),s=t.gm(a),r=new Array(s),q=this.b
if(b>=q.length)return H.c(q,b)
q[b]=r
for(u=0;u<s;++u){q=this.cG(t.j(a,u))
if(u>=r.length)return H.c(r,u)
r[u]=q}return r}}
P.jw.prototype={
$2:function(a,b){this.a.a[a]=this.b.cG(b)},
$S:4}
P.ex.prototype={$iaN:1,
gdB:function(a){return this.a}}
P.jP.prototype={
$2:function(a,b){this.a[a]=b},
$S:4}
P.jv.prototype={}
P.fA.prototype={
gbA:function(){var u=this.b,t=H.lT(u,"q",0)
return new H.fY(new H.j5(u,new P.fB(),[t]),new P.fC(),[t,W.a1])},
l:function(a,b,c){var u=this.gbA()
J.ms(u.b.$1(J.k8(u.a,b)),c)},
q:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.al(this.gbA().a)},
j:function(a,b){var u=this.gbA()
return u.b.$1(J.k8(u.a,b))},
ga_:function(a){var u=P.km(this.gbA(),!1,W.a1)
return new J.a7(u,u.length)},
$aq:function(){return[W.a1]},
$ai:function(){return[W.a1]},
$an:function(){return[W.a1]}}
P.fB.prototype={
$1:function(a){return!!J.N(a).$ia1}}
P.fC.prototype={
$1:function(a){return H.m(a,"$ia1")}}
P.ji.prototype={
iI:function(a){if(a<=0||a>4294967296)throw H.e(P.n5("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
P.jn.prototype={
gaf:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
return u+t},
gdu:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.f(u.a)+", "+H.f(u.b)+") "+H.f(u.c)+" x "+H.f(u.d)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.N(b)
if(!!u.$iag){t=q.a
if(t==u.gad(b)){s=q.b
if(s==u.gbP(b)){r=q.c
if(typeof t!=="number")return t.k()
if(typeof r!=="number")return H.d(r)
if(t+r===u.gaf(b)){t=q.d
if(typeof s!=="number")return s.k()
if(typeof t!=="number")return H.d(t)
u=s+t===u.gdu(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u=this,t=u.a,s=J.bv(t),r=u.b,q=J.bv(r),p=u.c
if(typeof t!=="number")return t.k()
if(typeof p!=="number")return H.d(p)
p=C.c.gH(t+p)
t=u.d
if(typeof r!=="number")return r.k()
if(typeof t!=="number")return H.d(t)
t=C.c.gH(r+t)
return P.nr(P.jk(P.jk(P.jk(P.jk(0,s),q),p),t))}}
P.ag.prototype={
gad:function(a){return this.a},
gbP:function(a){return this.b},
gaX:function(a){return this.c},
gaS:function(a){return this.d}}
P.bg.prototype={$ibg:1}
P.fP.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$aq:function(){return[P.bg]},
$ii:1,
$ai:function(){return[P.bg]},
$in:1,
$an:function(){return[P.bg]}}
P.bk.prototype={$ibk:1}
P.hq.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$aq:function(){return[P.bk]},
$ii:1,
$ai:function(){return[P.bk]},
$in:1,
$an:function(){return[P.bk]}}
P.hA.prototype={
gm:function(a){return a.length}}
P.ib.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$aq:function(){return[P.r]},
$ii:1,
$ai:function(){return[P.r]},
$in:1,
$an:function(){return[P.r]}}
P.k.prototype={
gdw:function(a){return new P.fA(a,new W.jb(a))}}
P.bp.prototype={$ibp:1}
P.iw.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$aq:function(){return[P.bp]},
$ii:1,
$ai:function(){return[P.bp]},
$in:1,
$an:function(){return[P.bp]}}
P.e2.prototype={}
P.e3.prototype={}
P.ed.prototype={}
P.ee.prototype={}
P.eo.prototype={}
P.ep.prototype={}
P.ev.prototype={}
P.ew.prototype={}
P.bP.prototype={$ii:1,
$ai:function(){return[P.p]},
$in:1,
$an:function(){return[P.p]}}
P.f_.prototype={
gm:function(a){return a.length}}
P.f0.prototype={
j:function(a,b){return P.b0(a.get(b))},
K:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b0(u.value[1]))}},
gaT:function(a){var u=H.b([],[P.r])
this.K(a,new P.f1(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.e(P.z("Not supported"))},
$iS:1,
$aS:function(){return[P.r,null]}}
P.f1.prototype={
$2:function(a,b){return this.a.push(a)}}
P.f2.prototype={
gm:function(a){return a.length}}
P.bx.prototype={}
P.hr.prototype={
gm:function(a){return a.length}}
P.dR.prototype={}
P.dp.prototype={
j8:function(a,b,c,d,e,f,g){var u,t=J.N(g)
if(!!t.$iaN)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oi(g))
return}if(!!t.$icc)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.e(P.cK("Incorrect number or type of arguments"))}}
P.i4.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.I(b,a,null,null,null))
return P.b0(a.item(b))},
l:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$aq:function(){return[[P.S,,,]]},
$ii:1,
$ai:function(){return[[P.S,,,]]},
$in:1,
$an:function(){return[[P.S,,,]]}}
P.ek.prototype={}
P.el.prototype={}
L.hs.prototype={}
B.fw.prototype={
am:function(a,b){var u,t,s,r,q,p,o,n=this,m=new B.ap(a,b),l=n.c.n(0,m).n(0,$.kR().i(0,a+b)),k=l.a,j=l.b,i=2-k*k-j*j
if(i>0){u=i*i
t=n.e
s=n.b.k(0,m)
r=n.a
q=r[C.d.ax(s.a)&255]
s=C.d.ax(s.b)
if(typeof q!=="number")return q.k()
s=r[q+s&255]
if(typeof s!=="number")return s.aj()
p=(s&14)>>>1
s=$.m3()
if(p>=8)return H.c(s,p)
o=s[p]
n.e=t+u*u*(o.a*k+o.b*j)}}}
B.ap.prototype={
k:function(a,b){return new B.ap(this.a+b.a,this.b+b.b)},
n:function(a,b){return new B.ap(this.a-b.a,this.b-b.b)},
i:function(a,b){return new B.ap(this.a*b,this.b*b)},
h:function(a){return H.f(this.a)+", "+H.f(this.b)}}
T.eW.prototype={
bc:function(a,b){return!0},
h:function(a){return"all"}}
T.cX.prototype={
bc:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)if(u[s].bc(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.t)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.d8.prototype={}
T.aT.prototype={
bc:function(a,b){return!this.ey(0,b)},
h:function(a){return"!["+this.cL(0)+"]"}}
T.hP.prototype={
eG:function(a){var u,t
if(a.a.length<=0)throw H.e(P.w("May not create a Set with zero characters."))
u=new H.J([P.p,P.as])
for(t=new H.d5(a,a.gm(a));t.A();)u.l(0,t.d,!0)
this.a=u},
bc:function(a,b){return this.a.bI(0,b)},
h:function(a){var u=this.a
return P.cn(new H.d4(u,[H.c0(u,0)]),0,null)}}
R.dv.prototype={
v:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.dF(this.a.S(0,b))
r.a=H.b([],[T.d8])
r.c=!1
this.c.push(r)
return r},
iA:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
if(r.bc(0,a))return r}return},
h:function(a){return this.b}}
R.dC.prototype={
h:function(a){var u=H.m_(this.b,"\n","\\n"),t=H.m_(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.dD.prototype={
h:function(a){return this.b}}
R.is.prototype={
S:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new R.dv(this,b)
u.c=H.b([],[R.dF])
this.a.l(0,b,u)}return u},
bt:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new R.dD(a)
u=P.r
t.c=new H.J([u,u])
this.b.l(0,a,t)}return t},
jb:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.b([],[R.dC]),k=this.c,j=[P.p],i=H.b([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)l.push(t)
return l}r=C.a.G(a,s)
q=k.iA(r)
if(q==null){if(t==null){i.push(r)
p=P.cn(i,0,m)
throw H.e(P.w("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}l.push(t)
s=t.c+1
i=H.b([],j)
k=this.c
t=m}else{if(!q.c)i.push(r)
k=q.b
if(k.d!=null){p=P.cn(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new R.dC(n==null?o.b:n,p,s)}++s}}}}
R.dF.prototype={
h:function(a){return this.b.b+": "+this.cL(0)}}
O.aL.prototype={
bw:function(a){this.a=H.b([],[a])
this.c=this.b=null},
bT:function(a,b,c){this.b=b
this.c=a},
bv:function(a,b){return this.bT(a,null,b)},
bh:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
dc:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
ga_:function(a){var u=this.a
return new J.a7(u,u.length)},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
q:function(a,b){var u,t,s=this,r=[H.lT(s,"aL",0)]
if(s.bh(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.dc(t,H.b([b],r))}},
aL:function(a,b){var u,t
if(this.bh(b)){u=this.a
t=u.length
C.b.aL(u,b)
this.dc(t,b)}},
$ii:1}
O.cg.prototype={
gm:function(a){return this.a.length},
gt:function(){var u=this.b
return u==null?this.b=D.C():u},
aZ:function(){var u=this.b
if(u!=null)u.E(null)},
ga7:function(a){var u=this.a
if(u.length>0)return C.b.gaU(u)
else return V.bK()},
ee:function(a){var u=this.a
if(a==null)u.push(V.bK())
else u.push(a)
this.aZ()},
cC:function(){var u=this.a
if(u.length>0){u.pop()
this.aZ()}}}
E.f5.prototype={}
E.ac.prototype={
cZ:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.a7(u,u.length);u.A();){t=u.d
if(t.f==null)t.cZ()}},
scK:function(a){var u,t,s=this,r=s.d
if(r!=a){s.c=null
s.d=a
s.e=null
if(r!=null)r.gt().U(0,s.gbN())
u=s.d
if(u!=null)u.gt().q(0,s.gbN())
t=new D.A("shapeBuilder",r,s.d)
t.b=!0
s.aq(t)}},
ag:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.ay(0,b,s):null
if(!J.G(q,s.x)){u=s.x
s.x=q
t=new D.A("matrix",u,q)
t.b=!0
s.aq(t)}r=s.f
if(r!=null)r.ag(0,b)
for(r=s.y.a,r=new J.a7(r,r.length);r.A();)r.d.ag(0,b)},
bd:function(a){var u,t,s,r=this
if(!r.b)return
u=a.dx
t=r.x
u.toString
if(t==null)u.a.push(u.ga7(u))
else u.a.push(t.i(0,u.ga7(u)))
u.aZ()
a.ef(r.f)
u=a.dy
s=(u&&C.b).gaU(u)
if(s!=null&&r.d!=null)s.j2(a,r)
for(u=r.y.a,u=new J.a7(u,u.length);u.A();)u.d.bd(a)
a.ec()
a.dx.cC()},
aq:function(a){var u=this.z
if(u!=null)u.E(a)},
ae:function(){return this.aq(null)},
e7:function(a){this.e=null
this.aq(a)},
iQ:function(){return this.e7(null)},
e9:function(a){this.aq(a)},
iR:function(){return this.e9(null)},
e6:function(a){this.aq(a)},
iP:function(){return this.e6(null)},
e4:function(a){this.aq(a)},
iM:function(){return this.e4(null)},
iL:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ge3(),s=[{func:1,ret:-1,args:[D.a2]}],r=0;r<b.length;b.length===u||(0,H.t)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bF()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.ae()},
iO:function(a,b){var u,t
for(u=b.ga_(b),t=this.ge3();u.A();)u.gO(u).gt().U(0,t)
this.ae()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hH.prototype={
eF:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ab(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cg()
t=[V.aQ]
u.a=H.b([],t)
u.gt().q(0,new E.hI(s))
s.cy=u
u=new O.cg()
u.a=H.b([],t)
u.gt().q(0,new E.hJ(s))
s.db=u
u=new O.cg()
u.a=H.b([],t)
u.gt().q(0,new E.hK(s))
s.dx=u
u=H.b([],[O.dx])
s.dy=u
u.push(null)
s.fr=new H.J([P.r,A.dr])},
gj_:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga7(s)
u=t.db
u=t.z=s.i(0,u.ga7(u))
s=u}return s},
ef:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gaU(u):a)},
ec:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.hI.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hJ.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hK.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.i6.prototype={}
E.dA.prototype={
cQ:function(a){this.ei()},
cP:function(){return this.cQ(null)},
giD:function(){var u,t=this,s=Date.now(),r=C.c.a6(P.l2(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ab(s,!1)
return u/r},
dg:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.i()
if(typeof r!=="number")return H.d(r)
u=C.d.bK(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.i()
t=C.d.bK(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.ks(C.k,s.gj4())}},
ei:function(){if(!this.ch){this.ch=!0
var u=window
C.z.fh(u)
C.z.hH(u,W.lN(new E.ip(this),P.ai))}},
j1:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dg()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ab(r,!1)
s.y=P.l2(r-s.r.a).a*0.000001
r=s.cy
C.b.sm(r.a,0)
r.aZ()
r=s.db
C.b.sm(r.a,0)
r.aZ()
r=s.dx
C.b.sm(r.a,0)
r.aZ()
r=s.dy;(r&&C.b).sm(r,0)
s.dy.push(null)
o.bd(p.e)}}catch(q){u=H.c2(q)
t=H.kI(q)
P.kM("Error: "+H.f(u))
P.kM("Stack: "+H.f(t))
throw H.e(u)}}}
E.ip.prototype={
$1:function(a){var u=this.a
if(u.ch){u.ch=!1
u.j1()}}}
Z.dN.prototype={}
Z.bz.prototype={
aN:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.c2(s)
t=P.w('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.f(u))
throw H.e(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.f(u.e)+"]"}}
Z.j4.prototype={}
Z.c6.prototype={
bb:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aN:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aN(a)},
bu:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
bd:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.r],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)p.push(u[s].h(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.aw(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.v(p,", ")+"\nAttrs:   "+C.b.v(r,", ")}}
Z.aB.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.cm(this.c))+"'")+"]"}}
Z.V.prototype={
gdA:function(a){var u=this.a,t=(u&$.U().a)!==0?1:0
if((u&$.a6().a)!==0)++t
if((u&$.b8().a)!==0)++t
if((u&$.W().a)!==0)++t
if((u&$.bu().a)!==0)++t
if((u&$.cH().a)!==0)++t
if((u&$.cI().a)!==0)++t
if((u&$.c3().a)!==0)++t
return(u&$.b7().a)!==0?t+1:t},
gbg:function(a){var u=this.a,t=(u&$.U().a)!==0?3:0
if((u&$.a6().a)!==0)t+=3
if((u&$.b8().a)!==0)t+=3
if((u&$.W().a)!==0)t+=2
if((u&$.bu().a)!==0)t+=3
if((u&$.cH().a)!==0)t+=3
if((u&$.cI().a)!==0)t+=4
if((u&$.c3().a)!==0)++t
return(u&$.b7().a)!==0?t+4:t},
cf:function(a){var u,t=$.U(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.a6()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b8()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.W()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bu()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cH()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cI()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c3()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b7()
if((s&t.a)!==0)if(u===a)return t
return $.mj()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.V))return!1
return this.a===b.a},
h:function(a){var u=H.b([],[P.r]),t=this.a
if((t&$.U().a)!==0)u.push("Pos")
if((t&$.a6().a)!==0)u.push("Norm")
if((t&$.b8().a)!==0)u.push("Binm")
if((t&$.W().a)!==0)u.push("Txt2D")
if((t&$.bu().a)!==0)u.push("TxtCube")
if((t&$.cH().a)!==0)u.push("Clr3")
if((t&$.cI().a)!==0)u.push("Clr4")
if((t&$.c3().a)!==0)u.push("Weight")
if((t&$.b7().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.v(u,"|")}}
D.f9.prototype={}
D.bF.prototype={
q:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.a2]}]):u).push(b)},
U:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.ai(s,b)
if(s===!0){s=t.a
u=(s&&C.b).U(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.ai(s,b)
if(s===!0){s=t.b
u=(s&&C.b).U(s,b)||u}return u},
E:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.a2()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.K(P.km(u,!0,{func:1,ret:-1,args:[D.a2]}),new D.fx(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.a2]}])
C.b.K(u,new D.fy(q))}return!0},
dC:function(){return this.E(null)},
aF:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}}}
D.fx.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fy.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.a2.prototype={}
D.bb.prototype={}
D.bc.prototype={}
D.A.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.cM.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cM))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.f(this.a)}}
X.ae.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ae))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.f(this.a)}}
X.aO.prototype={}
X.d1.prototype={
gao:function(){var u=this.y
return u==null?this.y=D.C():u},
dr:function(a,b){this.q(0,new X.ae(a,new X.bh(!1,!1,b)))},
a4:function(a){return this.dr(a,!1)},
cR:function(a){},
eN:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.t)(a),++t){s=a[t]
if(C.b.ai(this.a,s))return!1}return!0},
eL:function(a,b){var u=new D.bb()
u.b=!0
this.cR(u)},
eP:function(a,b){var u=new D.bc()
u.b=!0
this.cR(u)},
bW:function(a){var u,t=this
if(!t.r&&a instanceof X.aO){u=a.c
if(C.b.ai(t.a,u)){t.r=!0
u=t.y
if(u!=null)u.E(a)}}},
c7:function(a){var u
if(this.r&&a instanceof X.aO){u=a.c
if(C.b.ai(this.a,u))this.r=!1}},
ac:function(a){var u,t,s=this
if(s.f!=null)return!1
s.f=a
u=a.b
t=u.b
if(t==null)t=u.b=D.C()
t.q(0,s.gbV())
t=u.a
u=t==null?u.a=D.C():t
u.q(0,s.gc6())
return!0},
$ai:function(){return[X.ae]},
$aaL:function(){return[X.ae]}}
X.fO.prototype={
iW:function(a){var u,t
this.d.q(0,a.a)
u=this.a
if(u==null)return!1
t=new X.aO(a)
t.b=!0
return u.E(t)},
iS:function(a){var u,t
this.d.U(0,a.a)
u=this.b
if(u==null)return!1
t=new X.aO(a)
t.b=!0
return u.E(t)}}
X.d7.prototype={}
X.fU.prototype={
b5:function(a,b){var u,t,s,r,q,p=this,o=Date.now(),n=p.x,m=b.a,l=p.Q
if(typeof m!=="number")return m.i()
u=b.b
t=p.ch
if(typeof u!=="number")return u.i()
s=n.a
if(typeof s!=="number")return s.k()
n=n.b
if(typeof n!=="number")return n.k()
r=new V.O(s+m*l,n+u*t)
t=p.a.gbG()
q=new X.aS(a,V.aV(),p.x,t,r)
q.b=!0
p.z=new P.ab(o,!1)
p.x=r
return q},
cB:function(a,b){var u
this.r=a.a
u=this.b
if(u==null)return!1
u.E(this.b5(a,b))
return!0},
bq:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.es()
if(typeof u!=="number")return u.aj()
this.r=(u&~t)>>>0
return!1},
bp:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.b5(a,b))
return!0},
iX:function(a){return!1},
h8:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.d7(c,r.a.gbG(),b)
s.b=!0
t.E(s)
r.y=new P.ab(u,!1)
r.x=V.aV()}}
X.bh.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bh))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aS.prototype={}
X.hj.prototype={
c1:function(a,b,c){var u=this,t=new P.ab(Date.now(),!1),s=u.a.gbG(),r=new X.aS(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cB:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.c1(a,b,!0))
return!0},
bq:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.es()
if(typeof t!=="number")return t.aj()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.c1(a,b,!0))
return!0},
bp:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.c1(a,b,!1))
return!0},
iY:function(a,b){return!1}}
X.hz.prototype={}
X.dE.prototype={}
X.it.prototype={
b5:function(a,b){var u=this,t=new P.ab(Date.now(),!1),s=a.length>0?a[0]:V.aV(),r=u.a.gbG(),q=new X.dE(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
iV:function(a){var u=this.b
if(u==null)return!1
u.E(this.b5(a,!0))
return!0},
iT:function(a){var u=this.c
if(u==null)return!1
u.E(this.b5(a,!0))
return!0},
iU:function(a){var u=this.d
if(u==null)return!1
u.E(this.b5(a,!1))
return!0}}
X.dK.prototype={
gbG:function(){var u=this.a,t=C.j.gdz(u).c
t.toString
u=C.j.gdz(u).d
u.toString
return V.kp(0,0,t,u)},
d4:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.ae(u,new X.bh(t,a.altKey,a.shiftKey))},
b7:function(a){a.shiftKey},
cb:function(a){a.shiftKey},
aK:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.n()
u=t.top
if(typeof r!=="number")return r.n()
return new V.O(s-q,r-u)},
bi:function(a){return new V.M(a.movementX,a.movementY)},
c9:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.O])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
q=C.d.aw(r.pageX)
C.d.aw(r.pageY)
p=o.left
C.d.aw(r.pageX)
n.push(new V.O(q-p,C.d.aw(r.pageY)-o.top))}return n},
aG:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cM(u,new X.bh(t,a.altKey,a.shiftKey))},
c3:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.n()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.n()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
h2:function(a){this.f=!0},
fN:function(a){this.f=!1},
fX:function(a){if(this.f&&this.c3(a))a.preventDefault()},
c7:function(a){var u
if(!this.f)return
u=this.d4(a)
if(this.b.iW(u))a.preventDefault()},
bW:function(a){var u
if(!this.f)return
u=this.d4(a)
if(this.b.iS(u))a.preventDefault()},
ha:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.b7(a)
if(r.x){u=r.aG(a)
t=r.bi(a)
if(r.d.cB(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.aG(a)
s=r.aK(a)
if(r.c.cB(u,s))a.preventDefault()},
he:function(a){var u,t,s,r=this
r.b7(a)
u=r.aG(a)
if(r.x){t=r.bi(a)
if(r.d.bq(u,t))a.preventDefault()
return}if(r.r)return
s=r.aK(a)
if(r.c.bq(u,s))a.preventDefault()},
h0:function(a){var u,t,s,r=this
if(!r.c3(a)){r.b7(a)
u=r.aG(a)
if(r.x){t=r.bi(a)
if(r.d.bq(u,t))a.preventDefault()
return}if(r.r)return
s=r.aK(a)
if(r.c.bq(u,s))a.preventDefault()}},
hc:function(a){var u,t,s,r=this
r.b7(a)
u=r.aG(a)
if(r.x){t=r.bi(a)
if(r.d.bp(u,t))a.preventDefault()
return}if(r.r)return
s=r.aK(a)
if(r.c.bp(u,s))a.preventDefault()},
fZ:function(a){var u,t,s,r=this
if(!r.c3(a)){r.b7(a)
u=r.aG(a)
if(r.x){t=r.bi(a)
if(r.d.bp(u,t))a.preventDefault()
return}if(r.r)return
s=r.aK(a)
if(r.c.bp(u,s))a.preventDefault()}},
hg:function(a){var u,t,s=this
s.b7(a)
u=new V.M((a&&C.y).gip(a),C.y.giq(a)).w(0,180)
if(s.x){if(s.d.iX(u))a.preventDefault()
return}if(s.r)return
t=s.aK(a)
if(s.c.iY(u,t))a.preventDefault()},
hi:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aG(s.y)
t=s.aK(s.y)
s.d.h8(u,t,r)}},
hw:function(a){var u,t=this
t.a.focus()
t.f=!0
t.cb(a)
u=t.c9(a)
if(t.e.iV(u))a.preventDefault()},
hs:function(a){var u
this.cb(a)
u=this.c9(a)
if(this.e.iT(u))a.preventDefault()},
hu:function(a){var u
this.cb(a)
u=this.c9(a)
if(this.e.iU(u))a.preventDefault()}}
D.bC.prototype={
aI:function(a){var u=this.r
if(u!=null)u.E(a)},
fP:function(){return this.aI(null)},
$iaf:1}
D.af.prototype={}
D.d2.prototype={
aI:function(a){var u=this.x
if(u!=null)u.E(a)},
de:function(a){var u=this.y
if(u!=null)u.E(a)},
h7:function(){return this.de(null)},
hk:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.t)(a),++t){s=a[t]
if(s==null||this.fc(s))return!1}return!0},
fD:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdd(),s=[{func:1,ret:-1,args:[D.a2]}],r=0;r<b.length;b.length===u||(0,H.t)(b),++r){q=b[r]
if(q instanceof D.bC)this.e.push(q)
p=q.r
if(p==null){p=new D.bF()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bb()
u.b=!0
this.aI(u)},
ho:function(a,b){var u,t,s
for(u=b.ga_(b),t=this.gdd();u.A();){s=u.gO(u)
C.b.U(this.e,s)
s.gt().U(0,t)}u=new D.bc()
u.b=!0
this.aI(u)},
fc:function(a){var u=C.b.ai(this.e,a)
return u},
$ai:function(){return[D.af]},
$aaL:function(){return[D.af]}}
D.hy.prototype={$iaf:1}
D.i3.prototype={$iaf:1}
V.X.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.u().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
V.am.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.am))return!1
u=b.a
t=$.u().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.y(u.a,3,0)+", "+V.y(u.b,3,0)+", "+V.y(u.c,3,0)+", "+V.y(u.d,3,0)+"]"}}
V.fv.prototype={}
V.Q.prototype={
p:function(a,b){if(b==null)return!1
if(!(b instanceof V.Q))return!1
return this.a===b.a},
h:function(a){var u,t,s
$.kS()
$.k5()
u=H.b([],[P.r])
t=this.a
s=$.au().a
if((t&s)>>>0===s)u.push("XPos")
s=$.kT().a
if((t&s)>>>0===s)u.push("XCenter")
s=$.at().a
if((t&s)>>>0===s)u.push("XNeg")
s=$.av().a
if((t&s)>>>0===s)u.push("YPos")
s=$.kU().a
if((t&s)>>>0===s)u.push("YCenter")
s=$.b4().a
if((t&s)>>>0===s)u.push("YNeg")
s=$.b6().a
if((t&s)>>>0===s)u.push("ZPos")
s=$.m6().a
if((t&s)>>>0===s)u.push("ZCenter")
s=$.b5().a
if((t&s)>>>0===s)u.push("ZNeg")
if(u.length<=0)return"None"
return C.b.v(u,"|")}}
V.bH.prototype={
h:function(a){var u=this
return u.a.h(0)+" <"+u.b.h(0)+"> "+H.f(u.c)+" "+H.f(u.d)}}
V.fJ.prototype={
h:function(a){return H.f(this.a)+" "+H.f(this.b)}}
V.ao.prototype={
ar:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.F])
return t},
bo:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=i.e,f=i.y
if(typeof g!=="number")return g.i()
if(typeof f!=="number")return H.d(f)
u=g*f
t=i.f
s=i.x
if(typeof t!=="number")return t.i()
if(typeof s!=="number")return H.d(s)
if(typeof h!=="number")return h.i()
r=i.d
q=i.b
if(typeof q!=="number")return q.i()
p=q*f
o=i.c
if(typeof o!=="number")return H.d(o)
n=s*o
if(typeof r!=="number")return r.i()
m=i.r
l=q*t-g*o
if(typeof m!=="number")return m.i()
k=h*(u-t*s)-r*(p-n)+m*l
if(Math.abs(k-0)<$.u().a){h=$.l7
return h==null?$.l7=new V.ao(1,0,0,0,1,0,0,0,1):h}j=1/k
return new V.ao((u-s*t)*j,(n-p)*j,l*j,(m*t-r*f)*j,(h*f-m*o)*j,(r*o-h*t)*j,(r*s-m*g)*j,(m*q-h*s)*j,(h*g-r*q)*j)},
as:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.i()
if(typeof i!=="number")return H.d(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.i()
if(typeof t!=="number")return H.d(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.i()
if(typeof r!=="number")return H.d(r)
q=k.d
if(typeof q!=="number")return q.i()
p=k.e
if(typeof p!=="number")return p.i()
o=k.f
if(typeof o!=="number")return o.i()
n=k.r
if(typeof n!=="number")return n.i()
m=k.x
if(typeof m!=="number")return m.i()
l=k.y
if(typeof l!=="number")return l.i()
return new V.x(j*i+u*t+s*r,q*i+p*t+o*r,n*i+m*t+l*r)},
V:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.i()
if(typeof i!=="number")return H.d(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.i()
if(typeof t!=="number")return H.d(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.i()
if(typeof r!=="number")return H.d(r)
q=k.d
if(typeof q!=="number")return q.i()
p=k.e
if(typeof p!=="number")return p.i()
o=k.f
if(typeof o!=="number")return o.i()
n=k.r
if(typeof n!=="number")return n.i()
m=k.x
if(typeof m!=="number")return m.i()
l=k.y
if(typeof l!=="number")return l.i()
return new V.o(j*i+u*t+s*r,q*i+p*t+o*r,n*i+m*t+l*r)},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ao))return!1
u=b.a
t=r.a
s=$.u()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=r.d
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=r.x
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){var u,t,s,r,q=this,p=[P.F],o=V.c_(H.b([q.a,q.d,q.r],p),3,0),n=V.c_(H.b([q.b,q.e,q.x],p),3,0),m=V.c_(H.b([q.c,q.f,q.y],p),3,0)
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
V.aQ.prototype={
ar:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.F])
return t},
bo:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=a9.f
if(typeof b0!=="number")return b0.i()
if(typeof b1!=="number")return H.d(b1)
u=a9.b
t=a9.e
if(typeof u!=="number")return u.i()
if(typeof t!=="number")return H.d(t)
s=b0*b1-u*t
r=a9.r
if(typeof r!=="number")return H.d(r)
q=a9.c
if(typeof q!=="number")return q.i()
p=b0*r-q*t
o=a9.x
n=a9.d
m=b0*o-n*t
l=u*r-q*b1
k=u*o-n*b1
j=q*o-n*r
i=a9.y
h=a9.cy
if(typeof i!=="number")return i.i()
g=a9.z
f=a9.cx
if(typeof g!=="number")return g.i()
e=i*h-g*f
d=a9.db
c=a9.Q
if(typeof c!=="number")return c.i()
b=i*d-c*f
a=a9.dx
a0=a9.ch
a1=i*a-a0*f
a2=g*d-c*h
a3=g*a-a0*h
a4=c*a-a0*d
a5=s*a4-p*a3+m*a2+l*a1-k*b+j*e
if(Math.abs(a5-0)<$.u().a)return V.bK()
a6=1/a5
a7=-t
a8=-f
return V.aE((b1*a4-r*a3+o*a2)*a6,(-u*a4+q*a3-n*a2)*a6,(h*j-d*k+a*l)*a6,(-g*j+c*k-a0*l)*a6,(a7*a4+r*a1-o*b)*a6,(b0*a4-q*a1+n*b)*a6,(a8*j+d*m-a*p)*a6,(i*j-c*m+a0*p)*a6,(t*a3-b1*a1+o*e)*a6,(-b0*a3+u*a1-n*e)*a6,(f*k-h*m+a*s)*a6,(-i*k+g*m-a0*s)*a6,(a7*a2+b1*b-r*e)*a6,(b0*a2-u*b+q*e)*a6,(a8*l+h*p-d*s)*a6,(i*l-g*p+c*s)*a6)},
i:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=b3.a
if(typeof b0!=="number")return b0.i()
if(typeof b1!=="number")return H.d(b1)
u=a9.b
t=b3.e
if(typeof u!=="number")return u.i()
if(typeof t!=="number")return H.d(t)
s=a9.c
r=b3.y
if(typeof s!=="number")return s.i()
if(typeof r!=="number")return H.d(r)
q=a9.d
p=b3.cx
o=b3.b
if(typeof o!=="number")return H.d(o)
n=b3.f
if(typeof n!=="number")return H.d(n)
m=b3.z
if(typeof m!=="number")return H.d(m)
l=b3.cy
k=b3.c
if(typeof k!=="number")return H.d(k)
j=b3.r
if(typeof j!=="number")return H.d(j)
i=b3.Q
if(typeof i!=="number")return H.d(i)
h=b3.db
g=b3.d
f=b3.x
e=b3.ch
d=b3.dx
c=a9.e
if(typeof c!=="number")return c.i()
b=a9.f
if(typeof b!=="number")return b.i()
a=a9.r
if(typeof a!=="number")return a.i()
a0=a9.x
a1=a9.y
if(typeof a1!=="number")return a1.i()
a2=a9.z
if(typeof a2!=="number")return a2.i()
a3=a9.Q
if(typeof a3!=="number")return a3.i()
a4=a9.ch
a5=a9.cx
a6=a9.cy
a7=a9.db
a8=a9.dx
return V.aE(b0*b1+u*t+s*r+q*p,b0*o+u*n+s*m+q*l,b0*k+u*j+s*i+q*h,b0*g+u*f+s*e+q*d,c*b1+b*t+a*r+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,c*g+b*f+a*e+a0*d,a1*b1+a2*t+a3*r+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h,a1*g+a2*f+a3*e+a4*d,a5*b1+a6*t+a7*r+a8*p,a5*o+a6*n+a7*m+a8*l,a5*k+a6*j+a7*i+a8*h,a5*g+a6*f+a7*e+a8*d)},
as:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.i()
if(typeof i!=="number")return H.d(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.i()
if(typeof t!=="number")return H.d(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.i()
if(typeof r!=="number")return H.d(r)
q=k.e
if(typeof q!=="number")return q.i()
p=k.f
if(typeof p!=="number")return p.i()
o=k.r
if(typeof o!=="number")return o.i()
n=k.y
if(typeof n!=="number")return n.i()
m=k.z
if(typeof m!=="number")return m.i()
l=k.Q
if(typeof l!=="number")return l.i()
return new V.x(j*i+u*t+s*r,q*i+p*t+o*r,n*i+m*t+l*r)},
V:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.i()
if(typeof i!=="number")return H.d(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.i()
if(typeof t!=="number")return H.d(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.i()
if(typeof r!=="number")return H.d(r)
q=k.e
if(typeof q!=="number")return q.i()
p=k.f
if(typeof p!=="number")return p.i()
o=k.r
if(typeof o!=="number")return o.i()
n=k.y
if(typeof n!=="number")return n.i()
m=k.z
if(typeof m!=="number")return m.i()
l=k.Q
if(typeof l!=="number")return l.i()
return new V.o(j*i+u*t+s*r+k.d,q*i+p*t+o*r+k.x,n*i+m*t+l*r+k.ch)},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aQ))return!1
u=b.a
t=r.a
s=$.u()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-r.d)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.x-r.x)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.z
t=r.z
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=r.Q
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-r.ch)<s))return!1
if(!(Math.abs(b.cx-r.cx)<s))return!1
if(!(Math.abs(b.cy-r.cy)<s))return!1
if(!(Math.abs(b.db-r.db)<s))return!1
if(!(Math.abs(b.dx-r.dx)<s))return!1
return!0},
h:function(a){return this.X()},
P:function(a){var u,t,s,r,q,p=this,o=[P.F],n=V.c_(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.c_(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.c_(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.c_(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
X:function(){return this.P("")}}
V.O.prototype={
n:function(a,b){var u,t,s=this.a,r=b.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.d(r)
u=this.b
t=b.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
return new V.O(s-r,u-t)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=this.a
s=$.u()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}}
V.o.prototype={
k:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.d(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.d(r)
return new V.o(q+p,u+t,s+r)},
n:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.d(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.d(r)
return new V.o(q-p,u-t,s-r)},
i:function(a,b){var u,t,s=this.a
if(typeof s!=="number")return s.i()
u=this.b
if(typeof u!=="number")return u.i()
t=this.c
if(typeof t!=="number")return t.i()
return new V.o(s*b,u*b,t*b)},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.o))return!1
u=b.a
t=r.a
s=$.u()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
V.bm.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bm))return!1
u=b.a
t=$.u().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.y(u.a,3,0)+", "+V.y(u.b,3,0)+", "+V.y(u.c,3,0)+", "+V.y(u.d,3,0)+"]"}}
V.dl.prototype={
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dl))return!1
u=b.a
t=r.a
s=$.u()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=r.d
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){var u=this
return"["+V.y(u.a,3,0)+", "+V.y(u.b,3,0)+", "+V.y(u.c,3,0)+", "+V.y(u.d,3,0)+", "+V.y(u.e,3,0)+", "+V.y(u.f,3,0)+"]"}}
V.dn.prototype={
gaE:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
e1:function(a){var u,t,s,r,q=this,p=$.b3(),o=a.a,n=q.a
if(typeof o!=="number")return o.B()
if(o<n){u=$.at()
p=new V.Q((p.a|u.a)>>>0)}else if(o>=n+q.c){u=$.au()
p=new V.Q((p.a|u.a)>>>0)}else{u=$.kT()
p=new V.Q((p.a|u.a)>>>0)}u=a.b
t=q.b
if(typeof u!=="number")return u.B()
if(u<t)p=new V.Q((p.a|$.b4().a)>>>0)
else{s=p.a
p=u>=t+q.d?new V.Q((s|$.av().a)>>>0):new V.Q((s|$.kU().a)>>>0)}s=p.a
r=$.at().a
if(!((s&r)>>>0===r)){r=$.au().a
if((s&r)>>>0===r){o=n+q.c
n=o}else n=o}o=$.b4().a
if(!((s&o)>>>0===o)){o=$.av().a
if((s&o)>>>0===o){o=t+q.d
t=o}else t=u}return new V.O(n,t)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dn))return!1
u=b.a
t=$.u().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.y(u.a,3,0)+", "+V.y(u.b,3,0)+", "+V.y(u.c,3,0)+", "+V.y(u.d,3,0)+"]"}}
V.bN.prototype={
j0:function(a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.a
if(typeof a7!=="number")return a7.k()
u=a7+a5.d
t=a5.b
if(typeof t!=="number")return t.k()
s=t+a5.e
r=a5.c
if(typeof r!=="number")return r.k()
q=r+a5.f
p=a8.a
if(typeof p!=="number")return p.B()
if(p<a7){o=a7-p
n=a8.d
if(typeof n!=="number")return H.d(n)
if(o>n)return
o/=n
m=$.at()
l=a7
k=!1
j=-1}else if(p>u){o=u-p
n=a8.d
if(typeof n!=="number")return H.d(n)
if(o<n)return
o/=n
m=$.au()
l=u
k=!1
j=1}else{m=a6
l=m
j=l
k=!0
o=-1}n=a8.b
if(typeof n!=="number")return n.B()
if(n<t){i=t-n
h=a8.e
if(typeof h!=="number")return H.d(h)
if(i>h)return
i/=h
g=$.b4()
f=t
k=!1
e=-1}else if(n>s){i=s-n
h=a8.e
if(typeof h!=="number")return H.d(h)
if(i<h)return
i/=h
g=$.av()
f=s
k=!1
e=1}else{g=a6
f=g
e=f
i=-1}h=a8.c
if(typeof h!=="number")return h.B()
if(h<r){d=r-h
c=a8.f
if(typeof c!=="number")return H.d(c)
if(d>c)return
d/=c
b=$.b5()
a=r
k=!1
a0=-1}else if(h>q){d=q-h
c=a8.f
if(typeof c!=="number")return H.d(c)
if(d<c)return
d/=c
b=$.b6()
a=q
k=!1
a0=1}else{b=a6
a=b
a0=a
d=-1}if(k){a7=new V.x(a8.d,a8.e,a8.f)
return new V.bH(new V.o(p,n,h),a7.w(0,Math.sqrt(a7.D(a7))).N(0),0,$.k5())}if(i>o)a1=d>i?2:1
else a1=d>o?2:0
switch(a1){case 0:a7=a8.e
if(typeof a7!=="number")return a7.i()
a2=n+a7*o
a7=$.u()
p=a7.a
if(t-p<a2){a7.toString
t=a2<s}else t=!1
if(!t)return
t=a8.f
if(typeof t!=="number")return t.i()
a3=h+t*o
if(r-p<a3){a7.toString
a7=a3<q}else a7=!1
if(!a7)return
return new V.bH(new V.o(l,a2,a3),new V.x(j,0,0),o,m)
case 1:t=a8.d
if(typeof t!=="number")return t.i()
a4=p+t*i
t=$.u()
p=t.a
if(a7-p<a4){t.toString
a7=a4<u}else a7=!1
if(!a7)return
a7=a8.f
if(typeof a7!=="number")return a7.i()
a3=h+a7*i
if(r-p<a3){t.toString
a7=a3<q}else a7=!1
if(!a7)return
return new V.bH(new V.o(a4,f,a3),new V.x(0,e,0),i,g)
default:r=a8.d
if(typeof r!=="number")return r.i()
a4=p+r*d
r=$.u()
p=r.a
if(a7-p<a4){r.toString
a7=a4<u}else a7=!1
if(!a7)return
a7=a8.e
if(typeof a7!=="number")return a7.i()
a2=n+a7*d
if(t-p<a2){r.toString
a7=a2<s}else a7=!1
if(!a7)return
return new V.bH(new V.o(a4,a2,a),new V.x(0,0,a0),d,b)}},
ik:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=$.b3(),d=b.a
if(d!==0){if(typeof d!=="number")return d.Z()
if(d>0){u=$.at()
t=u.a
if((c.a&t)>>>0===t){t=a.a
s=g.a
if(typeof s!=="number")return s.k()
r=$.u()
r.toString
if(typeof t!=="number")return t.n()
s=t-(s+g.d)
q=Math.abs(s)<r.a?0:s/d
p=!0}else{u=f
q=u
p=!1}}else{u=$.au()
t=u.a
if((c.a&t)>>>0===t){t=a.a
if(typeof t!=="number")return t.k()
s=g.a
r=$.u()
r.toString
if(typeof s!=="number")return H.d(s)
s=t+a.d-s
q=Math.abs(s)<r.a?0:s/d
p=!0}else{u=f
q=u
p=!1}}if(p){if(typeof q!=="number")return q.B()
t=q<100&&q>=0&&q<=1}else t=!1
if(t){t=g.b
s=b.b
if(typeof s!=="number")return s.i()
if(typeof q!=="number")return H.d(q)
if(typeof t!=="number")return t.k()
o=t+s*q
t=a.b
if(typeof t!=="number")return t.k()
s=$.u().a
if(o-s<t+a.e&&t-s<o+g.e){t=g.c
r=b.c
if(typeof r!=="number")return r.i()
if(typeof t!=="number")return t.k()
n=t+r*q
t=a.c
if(typeof t!=="number")return t.k()
if(n-s<t+a.f&&t-s<n+g.f){m=u
l=q}else{m=e
l=100}}else{m=e
l=100}}else{m=e
l=100}}else{u=f
m=e
q=u
l=100}t=b.b
if(t!==0){if(typeof t!=="number")return t.Z()
if(t>0){k=$.b4()
s=k.a
if((c.a&s)>>>0===s){s=a.b
r=g.b
if(typeof r!=="number")return r.k()
j=$.u()
j.toString
if(typeof s!=="number")return s.n()
r=s-(r+g.e)
q=Math.abs(r)<j.a?0:r/t
u=k
p=!0}else p=!1}else{k=$.av()
s=k.a
if((c.a&s)>>>0===s){s=a.b
if(typeof s!=="number")return s.k()
r=g.b
j=$.u()
j.toString
if(typeof r!=="number")return H.d(r)
r=s+a.e-r
q=Math.abs(r)<j.a?0:r/t
u=k
p=!0}else p=!1}if(p){if(typeof q!=="number")return q.B()
s=q<l&&q>=0&&q<=1}else s=!1
if(s){s=g.a
if(typeof d!=="number")return d.i()
if(typeof q!=="number")return H.d(q)
if(typeof s!=="number")return s.k()
i=s+d*q
s=a.a
if(typeof s!=="number")return s.k()
r=$.u().a
if(i-r<s+a.d&&s-r<i+g.d){s=g.c
j=b.c
if(typeof j!=="number")return j.i()
if(typeof s!=="number")return s.k()
n=s+j*q
s=a.c
if(typeof s!=="number")return s.k()
if(n-r<s+a.f&&s-r<n+g.f){m=u
l=q}}}}s=b.c
if(s!==0){if(typeof s!=="number")return s.Z()
if(s>0){k=$.b5()
r=k.a
if((c.a&r)>>>0===r){r=a.c
j=g.c
if(typeof j!=="number")return j.k()
h=$.u()
h.toString
if(typeof r!=="number")return r.n()
j=r-(j+g.f)
q=Math.abs(j)<h.a?0:j/s
u=k
p=!0}else p=!1}else{k=$.b6()
r=k.a
if((c.a&r)>>>0===r){r=a.c
if(typeof r!=="number")return r.k()
j=g.c
h=$.u()
h.toString
if(typeof j!=="number")return H.d(j)
j=r+a.f-j
q=Math.abs(j)<h.a?0:j/s
u=k
p=!0}else p=!1}if(p){if(typeof q!=="number")return q.B()
s=q<l&&q>=0&&q<=1}else s=!1
if(s){s=g.a
if(typeof d!=="number")return d.i()
if(typeof q!=="number")return H.d(q)
if(typeof s!=="number")return s.k()
i=s+d*q
d=a.a
if(typeof d!=="number")return d.k()
s=$.u().a
if(i-s<d+a.d&&d-s<i+g.d){d=g.b
if(typeof t!=="number")return t.i()
if(typeof d!=="number")return d.k()
o=d+t*q
d=a.b
if(typeof d!=="number")return d.k()
if(o-s<d+a.e&&d-s<o+g.e){m=u
l=q}}}}if(J.G(m,e))return
return new V.fJ(l,m)},
bQ:function(a,b){var u,t,s,r,q=this,p=q.a,o=b.a
if(typeof p!=="number")return p.k()
if(typeof o!=="number")return H.d(o)
u=q.b
t=b.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
s=q.c
r=b.c
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.d(r)
return V.hG(p+o,u+t,s+r,q.d,q.e,q.f)},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bN))return!1
u=b.a
t=r.a
s=$.u()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-r.d)<s))return!1
if(!(Math.abs(b.e-r.e)<s))return!1
if(!(Math.abs(b.f-r.f)<s))return!1
return!0},
h:function(a){var u=this
return"["+V.y(u.a,3,0)+", "+V.y(u.b,3,0)+", "+V.y(u.c,3,0)+", "+V.y(u.d,3,0)+", "+V.y(u.e,3,0)+", "+V.y(u.f,3,0)+"]"}}
V.M.prototype={
cw:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.i()
if(typeof r!=="number")return H.d(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.i()
if(typeof t!=="number")return H.d(t)
return s*r+u*t},
i:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.i()
u=this.b
if(typeof u!=="number")return u.i()
return new V.M(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.u().a){u=$.lt
return u==null?$.lt=new V.M(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.M(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=this.a
s=$.u()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}}
V.x.prototype={
cw:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.i()
if(typeof p!=="number")return H.d(p)
u=this.b
t=a.b
if(typeof u!=="number")return u.i()
if(typeof t!=="number")return H.d(t)
s=this.c
r=a.c
if(typeof s!=="number")return s.i()
if(typeof r!=="number")return H.d(r)
return q*p+u*t+s*r},
bn:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof q!=="number")return q.i()
if(typeof p!=="number")return H.d(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.i()
if(typeof t!=="number")return H.d(t)
s=a.a
if(typeof s!=="number")return H.d(s)
r=this.a
if(typeof r!=="number")return r.i()
return new V.x(q*p-u*t,u*s-r*p,r*t-q*s)},
k:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.d(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.d(r)
return new V.x(q+p,u+t,s+r)},
N:function(a){var u,t,s=this.a
if(typeof s!=="number")return s.N()
u=this.b
if(typeof u!=="number")return u.N()
t=this.c
if(typeof t!=="number")return t.N()
return new V.x(-s,-u,-t)},
i:function(a,b){var u,t,s=this.a
if(typeof s!=="number")return s.i()
u=this.b
if(typeof u!=="number")return u.i()
t=this.c
if(typeof t!=="number")return t.i()
return new V.x(s*b,u*b,t*b)},
w:function(a,b){var u,t,s
if(Math.abs(b-0)<$.u().a)return V.ct()
u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
s=this.c
if(typeof s!=="number")return s.w()
return new V.x(u/b,t/b,s/b)},
cv:function(){var u=this.a,t=$.u()
t.toString
if(typeof u!=="number")return H.d(u)
t=t.a
if(!(Math.abs(0-u)<t))return!1
u=this.b
if(typeof u!=="number")return H.d(u)
if(!(Math.abs(0-u)<t))return!1
u=this.c
if(typeof u!=="number")return H.d(u)
if(!(Math.abs(0-u)<t))return!1
return!0},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.x))return!1
u=b.a
t=r.a
s=$.u()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
U.fd.prototype={
bY:function(a){var u=this.a,t=this.c,s=this.b
if(u)return V.k3(a,t,s)
else{if(a<t)u=t
else u=a>s?s:a
return u}},
gt:function(){var u=this.y
return u==null?this.y=D.C():u},
C:function(a){var u=this.y
if(u!=null)u.E(a)},
scH:function(a,b){var u=this.a
if(u!==b){this.a=b
u=new D.A("wrap",u,b)
u.b=!0
this.C(u)}},
scz:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.u().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bY(u)}s=new D.A("maximumLocation",s,t.b)
s.b=!0
t.C(s)}},
scA:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.u().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bY(u)}s=new D.A("minimumLocation",s,t.c)
s.b=!0
t.C(s)}},
sY:function(a,b){var u,t=this
b=t.bY(b==null?0:b)
u=t.d
if(!(Math.abs(u-b)<$.u().a)){t.d=b
u=new D.A("location",u,b)
u.b=!0
t.C(u)}},
saD:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.u().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.A("maximumVelocity",r,a)
r.b=!0
s.C(r)}},
sR:function(a){var u=this,t=a==null?0:a,s=u.e
a=-s
if(!(t<a))a=t>s?s:t
t=u.f
if(!(Math.abs(t-a)<$.u().a)){u.f=a
t=new D.A("velocity",t,a)
t.b=!0
u.C(t)}},
saP:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.u().a)){this.x=a
u=new D.A("dampening",u,a)
u.b=!0
this.C(u)}},
ag:function(a,b){var u,t,s,r=this,q=r.f,p=$.u().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sY(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.u().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.cP.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.C():u},
ay:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cP))return!1
return J.G(this.a,b.a)},
h:function(a){return"Constant: "+this.a.P("          ")}}
U.ca.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.C():u},
C:function(a){var u=this.e
if(u!=null)u.E(a)},
ab:function(){return this.C(null)},
eR:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaA(),s=[{func:1,ret:-1,args:[D.a2]}],r=0;r<b.length;b.length===u||(0,H.t)(b),++r){q=b[r]
if(q!=null){p=q.gt()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bb()
u.b=!0
this.C(u)},
hm:function(a,b){var u,t
for(u=b.ga_(b),t=this.gaA();u.A();)u.gO(u).gt().U(0,t)
u=new D.bc()
u.b=!0
this.C(u)},
ay:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.B()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a7(r,r.length),u=null;r.A();){q=r.d
if(q!=null){t=q.ay(0,b,c)
if(t!=null)u=u==null?t:t.i(0,u)}}s.f=u==null?V.bK():u
r=s.e
if(r!=null)r.aF(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ca))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.G(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ai:function(){return[U.a8]},
$aaL:function(){return[U.a8]},
$ia8:1}
U.cd.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.C():u},
C:function(a){var u=this.b
if(u!=null)u.E(a)},
ab:function(){return this.C(null)},
ay:function(a,b,c){var u,t=this,s=t.d,r=b.e
if(s<r){t.d=r
s=t.b
if(s!=null)++s.d
s=t.a
s=s==null?null:s.ay(0,b,c)
u=s==null?null:s.bo(0)
t.c=u==null?V.bK():u
s=t.b
if(s!=null)s.aF(0)}return t.c},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cd))return!1
if(this.a!=b.a)return!1
return!0},
h:function(a){return"Invert"},
$ia8:1}
U.a8.prototype={}
U.dq.prototype={
gt:function(){var u=this.y
return u==null?this.y=D.C():u},
C:function(a){var u=this.y
if(u!=null)u.E(a)},
sen:function(a){var u
a=V.k3(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.u().a)){this.a=a
u=new D.A("yaw",u,a)
u.b=!0
this.C(u)}},
seb:function(a,b){var u
b=V.k3(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.u().a)){this.b=b
u=new D.A("pitch",u,b)
u.b=!0
this.C(u)}},
sej:function(a){var u
a=V.k3(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.u().a)){this.c=a
u=new D.A("roll",u,a)
u.b=!0
this.C(u)}},
ay:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.sen(s.a+s.d*b.y)
s.seb(0,s.b+s.e*b.y)
s.sej(s.c+s.f*b.y)
r=s.c
u=Math.cos(r)
t=Math.sin(r)
s.x=V.aE(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1).i(0,V.la(s.b)).i(0,V.l9(s.a))
r=s.y
if(r!=null)r.aF(0)}return s.x},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dq))return!1
u=r.a
t=b.a
s=$.u().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
h:function(a){var u=this
return"Rotater: ["+V.y(u.a,3,0)+", "+V.y(u.b,3,0)+", "+V.y(u.c,3,0)+"], ["+V.y(u.d,3,0)+", "+V.y(u.e,3,0)+", "+V.y(u.f,3,0)+"]"}}
U.dL.prototype={
gt:function(){var u=this.fx
return u==null?this.fx=D.C():u},
C:function(a){var u=this.fx
if(u!=null)u.E(a)},
ab:function(){return this.C(null)},
ac:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.C():t
u.q(0,s.gft())
u=s.a.c
t=u.d
u=t==null?u.d=D.C():t
u.q(0,s.gfv())
u=s.a.c
t=u.c
u=t==null?u.c=D.C():t
u.q(0,s.gfz())
u=s.a.d
t=u.f
u=t==null?u.f=D.C():t
u.q(0,s.gfo())
u=s.a.d
t=u.d
u=t==null?u.d=D.C():t
u.q(0,s.gfq())
u=s.a.e
t=u.b
u=t==null?u.b=D.C():t
u.q(0,s.ghW())
u=s.a.e
t=u.d
u=t==null?u.d=D.C():t
u.q(0,s.ghU())
u=s.a.e
t=u.c
u=t==null?u.c=D.C():t
u.q(0,s.ghS())
return!0},
aB:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.N()
u=-u}if(this.r){if(typeof t!=="number")return t.N()
t=-t}return new V.M(u,t)},
fu:function(a){var u=this
H.m(a,"$iaS")
if(!J.G(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fw:function(a){var u,t,s,r,q,p,o,n=this
H.m(a,"$iaS")
if(!n.cx)return
if(n.ch){u=a.d.n(0,a.y)
u=new V.M(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.d(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.n(0,a.y)
u=n.aB(new V.M(t.a,t.b).i(0,2).w(0,u.gaE()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.d(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.d(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=n.aB(new V.M(s.a,s.b).i(0,2).w(0,u.gaE()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.d(p)
o=n.cy
if(typeof o!=="number")return H.d(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.d(q)
s=n.db
if(typeof s!=="number")return H.d(s)
o.sY(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.n(0,a.z)
n.dx=n.aB(new V.M(t.a,t.b).i(0,2).w(0,u.gaE()))}n.ab()},
fA:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.d(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.d(u)
s.sR(-t*10*u)
r.ab()}},
fp:function(a){var u=this
if(H.m(a,"$id7").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fs:function(a){var u,t,s,r,q,p,o,n=this
H.m(a,"$iaS")
if(!J.G(n.d,a.x.b))return
u=a.c
t=a.d
s=t.n(0,a.y)
r=n.aB(new V.M(s.a,s.b).i(0,2).w(0,u.gaE()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.d(p)
o=n.cy
if(typeof o!=="number")return H.d(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.d(q)
s=n.db
if(typeof s!=="number")return H.d(s)
o.sY(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.n(0,a.z)
n.dx=n.aB(new V.M(t.a,t.b).i(0,2).w(0,u.gaE()))
n.ab()},
hX:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hV:function(a){var u,t,s,r,q,p,o,n=this
H.m(a,"$idE")
if(!n.cx)return
if(n.ch){u=a.d.n(0,a.y)
u=new V.M(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.d(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.n(0,a.y)
u=n.aB(new V.M(t.a,t.b).i(0,2).w(0,u.gaE()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.d(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.d(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=n.aB(new V.M(s.a,s.b).i(0,2).w(0,u.gaE()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.d(p)
o=n.cy
if(typeof o!=="number")return H.d(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.d(q)
s=n.db
if(typeof s!=="number")return H.d(s)
o.sY(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.n(0,a.z)
n.dx=n.aB(new V.M(t.a,t.b).i(0,2).w(0,u.gaE()))}n.ab()},
hT:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.d(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.d(u)
s.sR(-t*10*u)
r.ab()}},
ay:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.B()
if(s<r){t.dy=r
u=b.y
t.c.ag(0,u)
t.b.ag(0,u)
t.fr=V.l9(t.b.d).i(0,V.la(t.c.d))}return t.fr},
$ia8:1}
U.dM.prototype={
gt:function(){var u=this.dx
return u==null?this.dx=D.C():u},
C:function(a){var u=this.dx
if(u!=null)u.E(a)},
ab:function(){return this.C(null)},
sR:function(a){this.r.sR(a.a)
this.x.sR(a.b)
this.y.sR(a.c)},
gY:function(a){return new V.o(this.r.d,this.x.d,this.y.d)},
sY:function(a,b){this.r.sY(0,b.a)
this.x.sY(0,b.b)
this.y.sY(0,b.c)},
h6:function(a){this.C(a)},
cd:function(a,b,c,d,e){if(a.r){if(typeof e!=="number")return e.k()
e+=d}else if(b.r){if(typeof e!=="number")return e.n()
e-=d}else{if(typeof e!=="number")return e.Z()
e=e>0?e-Math.min(e,c):e+Math.min(-e,c)}return e},
ay:function(a,b,c){var u,t,s,r,q,p=this,o=p.cy,n=b.e
if(typeof o!=="number")return o.B()
if(o<n){p.cy=n
u=p.gY(p)
t=b.y
if(t>0.1)t=0.1
o=p.ch
if(typeof o!=="number")return o.i()
s=o*t
o=p.cx
if(typeof o!=="number")return o.i()
r=o*t
q=new V.x(p.r.f,p.x.f,p.y.f)
o=p.Q
if(o!=null)q=o.as(q)
q=new V.x(p.cd(p.a,p.b,s,r,q.a),p.cd(p.c,p.d,s,r,q.b),p.cd(p.e,p.f,s,r,q.c))
o=p.z
p.sR(o!=null?o.as(q):q)
p.r.ag(0,t)
p.x.ag(0,t)
p.y.ag(0,t)
if(p.dy!=null){o=p.gY(p)
p.sY(0,p.dy.$2(u,o))}p.db=V.d9(p.r.d,-p.x.d,p.y.d)}return p.db},
$ia8:1}
M.cU.prototype={
b0:function(a){var u=this.y
if(u!=null)u.E(a)},
eS:function(){return this.b0(null)},
fR:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gb_(),s=[{func:1,ret:-1,args:[D.a2]}],r=0;r<b.length;b.length===u||(0,H.t)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bF()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bb()
u.b=!0
this.b0(u)},
fT:function(a,b){var u,t
for(u=b.ga_(b),t=this.gb_();u.A();)u.gO(u).gt().U(0,t)
u=new D.bc()
u.b=!0
this.b0(u)},
gt:function(){var u=this.y
return u==null?this.y=D.C():u},
bd:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=new E.i6()
e.b=!0
u=f.f
if(u!=null)u.E(e)
a.ef(f.d)
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
if(typeof s!=="number")return H.d(s)
o=C.d.aw(p*s)
p=q.b
if(typeof r!=="number")return H.d(r)
n=C.d.aw(p*r)
p=C.d.aw(q.c*s)
a.c=p
q=C.d.aw(q.d*r)
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
i=V.aE(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.ee(i)
t=$.ld
if(t==null){t=V.l8(V.di(),V.kx(),V.lA())
$.ld=t
h=t}else h=t
t=u.b
if(t!=null){g=t.ay(0,a,u)
if(g!=null)h=g.i(0,h)}a.db.ee(h)
for(u=f.e.a,u=new J.a7(u,u.length);u.A();)u.d.ag(0,a)
for(u=f.e.a,u=new J.a7(u,u.length);u.A();)u.d.bd(a)
f.b.toString
a.cy.cC()
a.db.cC()
f.c.toString
a.ec()}}
A.cL.prototype={}
A.eZ.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ix:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
ir:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.Y.prototype={
gM:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
h:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof A.Y))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.h_.prototype={
eD:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.T("")
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
A.o0(c3,u)
A.o2(c3,u)
A.o1(c3,u)
A.o4(c3,u)
A.o5(c3,u)
A.o3(c3,u)
A.o6(c3,u)
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
m=A.o_(b8.z)
b8.c=n
b8.d=m
b8.e=b8.d5(n,35633)
b8.f=b8.d5(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.v(P.w("Failed to link shader: "+H.f(l)))}b8.hM()
b8.hO()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.m(b8.y.L(0,"invViewMat"),"$iak")
if(t)b8.dy=H.m(b8.y.L(0,"objMat"),"$iak")
if(r)b8.fr=H.m(b8.y.L(0,"viewObjMat"),"$iak")
b8.fy=H.m(b8.y.L(0,"projViewObjMat"),"$iak")
if(c3.ry)b8.k1=H.m(b8.y.L(0,"txt2DMat"),"$icq")
if(c3.x1)b8.k2=H.m(b8.y.L(0,"txtCubeMat"),"$iak")
if(c3.x2)b8.k3=H.m(b8.y.L(0,"colorMat"),"$iak")
b8.r1=H.b([],[A.ak])
t=c3.y2
if(t>0){b8.k4=b8.y.L(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.v(P.w(c0+q+c1))
s.push(H.m(j,"$iak"))}}t=c3.a
if(t.a)b8.r2=H.m(b8.y.L(0,"emissionClr"),"$iK")
if(t.b)b8.rx=H.m(b8.y.L(0,"emissionTxt"),"$ia5")
t=c3.b
if(t.a)b8.x1=H.m(b8.y.L(0,"ambientClr"),"$iK")
if(t.b)b8.x2=H.m(b8.y.L(0,"ambientTxt"),"$ia5")
t=c3.c
if(t.a)b8.y2=H.m(b8.y.L(0,"diffuseClr"),"$iK")
if(t.b)b8.aQ=H.m(b8.y.L(0,"diffuseTxt"),"$ia5")
t=c3.d
if(t.a)b8.dE=H.m(b8.y.L(0,"invDiffuseClr"),"$iK")
if(t.b)b8.dF=H.m(b8.y.L(0,"invDiffuseTxt"),"$ia5")
t=c3.e
s=t.a
if(s||t.b||!1){b8.dI=H.m(b8.y.L(0,"shininess"),"$ia_")
if(s)b8.dG=H.m(b8.y.L(0,"specularClr"),"$iK")
if(t.b)b8.dH=H.m(b8.y.L(0,"specularTxt"),"$ia5")}if(c3.f.b)b8.dJ=H.m(b8.y.L(0,"bumpTxt"),"$ia5")
if(c3.cy){b8.dK=H.m(b8.y.L(0,"envSampler"),"$ibQ")
t=c3.r
if(t.a)b8.dL=H.m(b8.y.L(0,"reflectClr"),"$iK")
if(t.b)b8.dM=H.m(b8.y.L(0,"reflectTxt"),"$ia5")
t=c3.x
s=t.a
if(s||t.b||!1){b8.dN=H.m(b8.y.L(0,"refraction"),"$ia_")
if(s)b8.dO=H.m(b8.y.L(0,"refractClr"),"$iK")
if(t.b)b8.dP=H.m(b8.y.L(0,"refractTxt"),"$ia5")}}t=c3.y
if(t.a)b8.dQ=H.m(b8.y.L(0,"alpha"),"$ia_")
if(t.b)b8.dR=H.m(b8.y.L(0,"alphaTxt"),"$ia5")
t=P.p
s=[t,A.dH]
b8.cl=new H.J(s)
b8.cm=new H.J([t,[P.n,A.cp]])
b8.cn=new H.J(s)
b8.co=new H.J([t,[P.n,A.cr]])
b8.cp=new H.J(s)
b8.cq=new H.J([t,[P.n,A.cs]])
if(c3.id){for(t=c3.z,s=t.length,r=[A.cp],i=0;i<t.length;t.length===s||(0,H.t)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.f(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.aj()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.v(P.w(c0+d+c1))
H.m(j,"$iK")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.v(P.w(c0+d+c1))
H.m(c,"$iK")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.v(P.w(c0+d+c1))
H.m(b,"$iK")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.v(P.w(c0+d+c1))
H.m(j,"$iK")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.v(P.w(c0+d+c1))
H.m(c,"$iK")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.v(P.w(c0+o+c1))
H.m(b,"$ia5")
a2=b}else a2=b9
e.push(new A.cp(a1,a0,a,j,c,a2))}b8.cm.l(0,g,e)
q=b8.cl
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.v(P.w(c0+o+c1))
q.l(0,g,j)}for(t=c3.Q,s=t.length,r=[A.cr],i=0;i<t.length;t.length===s||(0,H.t)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.f(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.v(P.w(c0+o+c1))
H.m(j,"$iK")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.v(P.w(c0+o+c1))
H.m(c,"$iK")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.v(P.w(c0+o+c1))
H.m(b,"$iK")
if(typeof g!=="number")return g.aj()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.v(P.w(c0+o+c1))
H.m(a3,"$icq")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.v(P.w(c0+o+c1))
H.m(a3,"$ibQ")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.v(P.w(c0+o+c1))
H.m(a3,"$ibQ")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.v(P.w(c0+o+c1))
H.m(a5,"$ico")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.j(0,o)
if(a3==null)H.v(P.w(c0+o+c1))
H.m(a3,"$ia_")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.j(0,o)
if(a5==null)H.v(P.w(c0+o+c1))
H.m(a5,"$ia_")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.j(0,o)
if(a8==null)H.v(P.w(c0+o+c1))
H.m(a8,"$ia_")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}e.push(new A.cr(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.co.l(0,g,e)
q=b8.cn
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.v(P.w(c0+o+c1))
q.l(0,g,j)}for(t=c3.ch,s=t.length,r=[A.cs],i=0;i<t.length;t.length===s||(0,H.t)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.f(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.v(P.w(c0+o+c1))
H.m(j,"$iK")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.v(P.w(c0+o+c1))
H.m(c,"$iK")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.v(P.w(c0+o+c1))
H.m(b,"$iK")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.v(P.w(c0+o+c1))
H.m(a3,"$iK")
if(typeof g!=="number")return g.aj()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.v(P.w(c0+o+c1))
H.m(a5,"$iK")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.v(P.w(c0+o+c1))
H.m(a8,"$iK")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.j(0,o)
if(b2==null)H.v(P.w(c0+o+c1))
H.m(b2,"$ia_")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.j(0,o)
if(b3==null)H.v(P.w(c0+o+c1))
H.m(b3,"$ia_")
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
if(a5==null)H.v(P.w(c0+d+c1))
H.m(a5,"$ico")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.j(0,d)
if(a5==null)H.v(P.w(c0+d+c1))
H.m(a5,"$ia_")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.j(0,d)
if(a8==null)H.v(P.w(c0+d+c1))
H.m(a8,"$ia_")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.j(0,d)
if(a5==null)H.v(P.w(c0+d+c1))
H.m(a5,"$ia_")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.j(0,d)
if(a8==null)H.v(P.w(c0+d+c1))
H.m(a8,"$ia_")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.j(0,d)
if(b2==null)H.v(P.w(c0+d+c1))
H.m(b2,"$ia_")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.j(0,d)
if(a5==null)H.v(P.w(c0+d+c1))
H.m(a5,"$ia5")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.v(P.w(c0+o+c1))
H.m(a5,"$ia5")
a6=a5}else a6=b9
e.push(new A.cs(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.cq.l(0,g,e)
q=b8.cp
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.v(P.w(c0+o+c1))
q.l(0,g,j)}}},
av:function(a,b){if(b!=null&&b.ga9(b))a.eu(b)},
hL:function(a,b){}}
A.cR.prototype={
h:function(a){return"dirLight"+H.f(this.a)}}
A.dj.prototype={
h:function(a){return"pointLight"+H.f(this.a)}}
A.dt.prototype={
h:function(a){return"spotLight"+H.f(this.a)}}
A.h2.prototype={
h:function(a){return this.aQ}}
A.cp.prototype={}
A.cr.prototype={}
A.cs.prototype={}
A.dr.prototype={
eH:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
d5:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.e(P.w("Error compiling shader '"+H.f(s)+"': "+H.f(u)))}return s},
hM:function(){var u,t,s,r=this,q=H.b([],[A.cL]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.d(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cL(p,t.name,s))}r.x=new A.eZ(q)},
hO:function(){var u,t,s,r=this,q=H.b([],[A.dG]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.d(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.io(t.type,t.size,t.name,s))}r.y=new A.iE(q)},
b4:function(a,b,c){var u=this.a
if(a===1)return new A.dH(u,b,c)
else return A.ku(u,this.r,b,a,c)},
fd:function(a,b,c){var u=this.a
if(a===1)return new A.a5(u,b,c)
else return A.ku(u,this.r,b,a,c)},
fe:function(a,b,c){var u=this.a
if(a===1)return new A.bQ(u,b,c)
else return A.ku(u,this.r,b,a,c)},
bD:function(a,b){return new P.dY(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
io:function(a,b,c,d){var u=this
switch(a){case 5120:return u.b4(b,c,d)
case 5121:return u.b4(b,c,d)
case 5122:return u.b4(b,c,d)
case 5123:return u.b4(b,c,d)
case 5124:return u.b4(b,c,d)
case 5125:return u.b4(b,c,d)
case 5126:return new A.a_(u.a,c,d)
case 35664:return new A.iA(u.a,c,d)
case 35665:return new A.K(u.a,c,d)
case 35666:return new A.co(u.a,c,d)
case 35667:return new A.iB(u.a,c,d)
case 35668:return new A.iC(u.a,c,d)
case 35669:return new A.iD(u.a,c,d)
case 35674:return new A.iF(u.a,c,d)
case 35675:return new A.cq(u.a,c,d)
case 35676:return new A.ak(u.a,c,d)
case 35678:return u.fd(b,c,d)
case 35680:return u.fe(b,c,d)
case 35670:throw H.e(u.bD("BOOL",c))
case 35671:throw H.e(u.bD("BOOL_VEC2",c))
case 35672:throw H.e(u.bD("BOOL_VEC3",c))
case 35673:throw H.e(u.bD("BOOL_VEC4",c))
default:throw H.e(P.w("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.dG.prototype={}
A.iE.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
L:function(a,b){var u=this.j(0,b)
if(u==null)throw H.e(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.X()},
X:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.t)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.dH.prototype={
h:function(a){return"Uniform1i: "+H.f(this.c)}}
A.iB.prototype={
h:function(a){return"Uniform2i: "+H.f(this.c)}}
A.iC.prototype={
h:function(a){return"Uniform3i: "+H.f(this.c)}}
A.iD.prototype={
h:function(a){return"Uniform4i: "+H.f(this.c)}}
A.iz.prototype={
h:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.a_.prototype={
h:function(a){return"Uniform1f: "+H.f(this.c)}}
A.iA.prototype={
h:function(a){return"Uniform2f: "+H.f(this.c)}}
A.K.prototype={
h:function(a){return"Uniform3f: "+H.f(this.c)}}
A.co.prototype={
h:function(a){return"Uniform4f: "+H.f(this.c)}}
A.iF.prototype={
h:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.cq.prototype={
az:function(a){var u=new Float32Array(H.bV(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.f(this.c)}}
A.ak.prototype={
az:function(a){var u=new Float32Array(H.bV(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.f(this.c)}}
A.a5.prototype={
eu:function(a){var u=a.ga9(a),t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.ga8(a))},
h:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.bQ.prototype={
h:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.bG.prototype={
f8:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.ct()
if(q!=null)s=s.k(0,q)
if(u!=null)s=s.k(0,u)
if(t!=null)s=s.k(0,t)
if(s.cv())return
return s.w(0,Math.sqrt(s.D(s)))},
fa:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.n(0,q)
r=new V.x(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.D(r)))
r=t.n(0,q)
r=new V.x(r.a,r.b,r.c)
r=s.bn(r.w(0,Math.sqrt(r.D(r))))
return r.w(0,Math.sqrt(r.D(r)))},
cj:function(){var u,t=this
if(t.d!=null)return!0
u=t.f8()
if(u==null){u=t.fa()
if(u==null)return!1}t.d=u
t.a.a.ae()
return!0},
f7:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.ct()
if(q!=null)s=s.k(0,q)
if(u!=null)s=s.k(0,u)
if(t!=null)s=s.k(0,t)
if(s.cv())return
return s.w(0,Math.sqrt(s.D(s)))},
f9:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
k=s.b
if(typeof l!=="number")return l.n()
if(typeof k!=="number")return H.d(k)
r=l-k
if(Math.abs(r-0)<$.u().a){l=d.n(0,g)
l=new V.x(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.D(l)))
l=s.a
t=t.a
if(typeof l!=="number")return l.n()
if(typeof t!=="number")return H.d(t)
if(l-t<0)q=q.N(0)}else{k=u.b
if(typeof k!=="number")return H.d(k)
p=(l-k)/r
k=d.n(0,g).i(0,p).k(0,g).n(0,j)
k=new V.x(k.a,k.b,k.c)
q=k.w(0,Math.sqrt(k.D(k)))
s=s.a
t=t.a
if(typeof s!=="number")return s.n()
if(typeof t!=="number")return H.d(t)
u=u.a
if(typeof u!=="number")return H.d(u)
if((s-t)*p+t-u<0)q=q.N(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.D(l)))
l=o.bn(q)
l=l.w(0,Math.sqrt(l.D(l))).bn(o)
q=l.w(0,Math.sqrt(l.D(l)))}return q},
ci:function(){var u,t=this
if(t.e!=null)return!0
u=t.f7()
if(u==null){u=t.f9()
if(u==null)return!1}t.e=u
t.a.a.ae()
return!0},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.X()},
P:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.a.aV(J.aw(s.e),0)+", "+C.a.aV(J.aw(t.b.e),0)+", "+C.a.aV(J.aw(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.h(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.h(0)+"}"):u+"-}"},
X:function(){return this.P("")}}
F.d3.prototype={}
F.hx.prototype={}
F.dm.prototype={
gt:function(){var u=this.Q
return u==null?this.Q=D.C():u},
bk:function(a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=a0.length,a=new Array(b*c.c)
a.fixed$length=Array
u=H.b(a,[P.F])
for(a=u.length,t=c.a,s=0,r=0;r<c.b;++r){q=t.cf(r)
for(p=0;p<b;++p){if(p>=a0.length)return H.c(a0,p)
o=a0[p].e_(q)
n=s+p*c.c
for(m=o.length,l=0;l<m;++l){k=o[l]
if(n<0||n>=a)return H.c(u,n)
u[n]=k;++n}}s+=q.gbg(q)}a=$.U()
if((t.a&a.a)!==0){a=c.z
if(a==null){if(0>=a0.length)return H.c(a0,0)
a=a0[0].f
a=V.hG(a.a,a.b,a.c,0,0,0)
c.z=a}for(r=b-1;r>=0;--r){if(r>=a0.length)return H.c(a0,r)
t=a0[r].f
m=t.a
k=t.b
t=t.c
j=a.d
i=a.a
if(typeof m!=="number")return m.B()
if(typeof i!=="number")return H.d(i)
if(m<i){j+=i-m
h=m}else{if(m>i+j)j=m-i
h=i}g=a.e
m=a.b
if(typeof k!=="number")return k.B()
if(typeof m!=="number")return H.d(m)
if(k<m){g+=m-k
f=k}else{if(k>m+g)g=k-m
f=m}e=a.f
a=a.c
if(typeof t!=="number")return t.B()
if(typeof a!=="number")return H.d(a)
if(t<a){e+=a-t
d=t}else{if(t>a+e)e=t-a
d=a}a=new V.bN(h,f,d,j,g,e)
c.z=a}}n=c.d
c.d=n+b
C.b.aL(c.f,u)
c.ae()
return n},
bj:function(a){var u,t,s,r,q,p,o,n,m=a.length
if(m>=3){u=new Array((m-2)*3)
u.fixed$length=Array
t=H.b(u,[P.p])
u=a.length
if(0>=u)return H.c(a,0)
s=a[0]
for(r=t.length,q=2,p=0;q<m;++q,p+=3){if(p>=r)return H.c(t,p)
t[p]=s
o=p+1
n=q-1
if(n>=u)return H.c(a,n)
n=a[n]
if(o>=r)return H.c(t,o)
t[o]=n
n=p+2
if(q>=u)return H.c(a,q)
o=a[q]
if(n>=r)return H.c(t,n)
t[n]=o}C.b.aL(this.y,t)
this.ae()}},
i8:function(a){var u,t,s,r,q,p,o,n,m,l,k=a.length
if(k>=3){u=new Array((k-2)*3)
u.fixed$length=Array
t=H.b(u,[P.p])
for(u=a.length,s=t.length,r=!1,q=2,p=0;q<k;++q,p+=3){o=q-2
n=p+1
m=q-1
l=p+2
if(r){if(o>=u)return H.c(a,o)
o=a[o]
if(p>=s)return H.c(t,p)
t[p]=o
if(m>=u)return H.c(a,m)
m=a[m]
if(n>=s)return H.c(t,n)
t[n]=m
if(q>=u)return H.c(a,q)
m=a[q]
if(l>=s)return H.c(t,l)
t[l]=m
r=!1}else{if(m>=u)return H.c(a,m)
m=a[m]
if(p>=s)return H.c(t,p)
t[p]=m
if(o>=u)return H.c(a,o)
o=a[o]
if(n>=s)return H.c(t,n)
t[n]=o
if(q>=u)return H.c(a,q)
o=a[q]
if(l>=s)return H.c(t,l)
t[l]=o
r=!0}}C.b.aL(this.y,t)
this.ae()}},
ae:function(){var u=this.Q
if(u!=null)u.E(null)},
aO:function(){return!1},
ba:function(){return!1},
bF:function(){return!1},
dv:function(a,b){var u,t,s,r,q,p,o,n,m,l=this,k=l.a
if(!J.G(b,k))throw H.e(P.w("Shape was reduced to "+H.f(k)+" so can not build for "+H.f(b)+"."))
if(l.e==null){u=l.c*4
t=new Array(l.b)
t.fixed$length=Array
l.e=H.b(t,[Z.bz])
for(s=0,r=0;r<l.b;++r){q=k.cf(r)
p=q.gbg(q)
t=l.e
if(r>=t.length)return H.c(t,r)
t[r]=new Z.bz(q,p,s*4,u)
s+=p}}t=a.a
o=new Z.c6(Z.lB(t,34962,l.f),l.e,k)
k=o.b=H.b([],[Z.aB])
n=l.r
if(n.length!==0){m=Z.dO(t,34963,n)
k.push(new Z.aB(0,l.r.length,m))}n=l.x
if(n.length!==0){m=Z.dO(t,34963,n)
k.push(new Z.aB(1,l.x.length,m))}n=l.y
if(n.length!==0){m=Z.dO(t,34963,n)
k.push(new Z.aB(4,l.y.length,m))}return o}}
F.hQ.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.C():u},
aO:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aO()||!1
if(!t.a.aO())u=!1
s=t.e
if(s!=null)s.aF(0)
return u},
ba:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ba()||!1
if(!t.a.ba())u=!1
s=t.e
if(s!=null)s.aF(0)
return u},
bF:function(){var u=this.e
if(u!=null)++u.d
this.a.bF()
u=this.e
if(u!=null)u.aF(0)
return!0},
dv:function(a1,a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a.c.length,c=a2.gdA(a2),b=a2.gbg(a2),a=b*4,a0=new Array(d*b)
a0.fixed$length=Array
u=H.b(a0,[P.F])
a0=new Array(c)
a0.fixed$length=Array
t=H.b(a0,[Z.bz])
for(a0=u.length,s=t.length,r=0,q=0;q<c;++q){p=a2.cf(q)
o=p.gbg(p)
if(q>=s)return H.c(t,q)
t[q]=new Z.bz(p,o,r*4,a)
for(n=0;n<d;++n){m=e.a.c
if(n>=m.length)return H.c(m,n)
l=m[n].e_(p)
k=r+n*b
for(m=l.length,j=0;j<m;++j){i=l[j]
if(k<0||k>=a0)return H.c(u,k)
u[k]=i;++k}}r+=o}a0=a1.a
h=new Z.c6(Z.lB(a0,34962,u),t,a2)
h.b=H.b([],[Z.aB])
e.b.b
if(e.c.b.length!==0){g=H.b([],[P.p])
for(q=0;s=e.c.b,q<s.length;++q){s=s[q].a
s.a.a.b9()
g.push(s.e)
s=e.c.b
if(q>=s.length)return H.c(s,q)
s=s[q].b
s.a.a.b9()
g.push(s.e)}f=Z.dO(a0,34963,g)
h.b.push(new Z.aB(1,g.length,f))}if(e.d.b.length!==0){g=H.b([],[P.p])
for(q=0;s=e.d.b,q<s.length;++q){s=s[q].a
s.a.a.b9()
g.push(s.e)
s=e.d.b
if(q>=s.length)return H.c(s,q)
s=s[q].b
s.a.a.b9()
g.push(s.e)
s=e.d.b
if(q>=s.length)return H.c(s,q)
s=s[q].c
s.a.a.b9()
g.push(s.e)}f=Z.dO(a0,34963,g)
h.b.push(new Z.aB(4,g.length,f))}return h},
h:function(a){var u=this,t=H.b([],[P.r])
if(u.a.c.length!==0){t.push("Vertices:")
t.push(u.a.P("   "))}u.b.b
if(u.c.b.length!==0){t.push("Lines:")
t.push(u.c.P("   "))}if(u.d.b.length!==0){t.push("Faces:")
t.push(u.d.P("   "))}return C.b.v(t,"\n")},
ae:function(){var u=this.e
if(u!=null)u.E(null)}}
F.kq.prototype={}
F.hR.prototype={
i7:function(a){var u,t,s,r,q,p,o=H.b([],[F.bG]),n=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.q(0,n)
u.a.q(0,s)
u.a.q(0,r)
q=new F.bG()
p=n.a
if(p==null)H.v(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(p!=s.a||p!=r.a)H.v(P.w("May not create a face with vertices attached to different shapes."))
q.a=n
n.d.b.push(q)
q.b=s
s.d.c.push(q)
q.c=r
r.d.d.push(q)
q.a.a.d.b.push(q)
s=q.a.a.e
if(s!=null)s.E(null)
o.push(q)}return o},
gm:function(a){return this.b.length},
aO:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.t)(u),++r)if(!u[r].cj())s=!1
return s},
ba:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.t)(u),++r)if(!u[r].ci())s=!1
return s},
h:function(a){return this.X()},
P:function(a){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)r.push(u[s].P(a))
return C.b.v(r,"\n")},
X:function(){return this.P("")}}
F.hS.prototype={
gm:function(a){return this.b.length},
h:function(a){return this.X()},
P:function(a){var u,t,s=H.b([],[P.r]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
s.push(t[u].P(a+(""+u+". ")))}return C.b.v(s,"\n")},
X:function(){return this.P("")}}
F.hT.prototype={
gm:function(a){return 0},
h:function(a){return this.X()},
P:function(a){var u,t,s=H.b([],[P.r])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.c(u,t)
s.push(u[t].P(a))}return C.b.v(s,"\n")},
X:function(){return this.P("")}}
F.bR.prototype={
e_:function(a){var u,t=this,s=J.N(a)
if(s.p(a,$.U())){s=t.f
u=[P.F]
if(s==null)return H.b([0,0,0],u)
else return H.b([s.a,s.b,s.c],u)}else if(s.p(a,$.a6())){s=t.r
u=[P.F]
if(s==null)return H.b([0,1,0],u)
else return H.b([s.a,s.b,s.c],u)}else if(s.p(a,$.b8())){s=t.x
u=[P.F]
if(s==null)return H.b([0,0,1],u)
else return H.b([s.a,s.b,s.c],u)}else if(s.p(a,$.W())){s=t.y
u=[P.F]
if(s==null)return H.b([0,0],u)
else return H.b([s.a,s.b],u)}else if(s.p(a,$.bu())){s=t.z
u=[P.F]
if(s==null)return H.b([0,0,0],u)
else return H.b([s.a,s.b,s.c],u)}else if(s.p(a,$.cH())){s=t.Q
u=[P.F]
if(s==null)return H.b([1,1,1],u)
else return H.b([s.a,s.b,s.c],u)}else if(s.p(a,$.cI())){s=t.Q
u=[P.F]
if(s==null)return H.b([1,1,1,1],u)
else return H.b([s.a,s.b,s.c,s.d],u)}else if(s.p(a,$.c3()))return H.b([t.ch],[P.F])
else if(s.p(a,$.b7())){s=t.cx
u=[P.F]
if(s==null)return H.b([-1,-1,-1,-1],u)
else return H.b([s.a,s.b,s.c,s.d],u)}else return H.b([],[P.F])},
cj:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.ct()
t.d.K(0,new F.j2(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.ae()
s=t.a.e
if(s!=null)s.aF(0)}return!0},
ci:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.ct()
t.d.K(0,new F.j1(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.ae()
s=t.a.e
if(s!=null)s.aF(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.X()},
P:function(a){var u,t,s=this,r="-",q=H.b([],[P.r])
q.push(C.a.aV(J.aw(s.e),0))
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
t=C.b.v(q,", ")
return a+"{"+t+"}"},
X:function(){return this.P("")}}
F.j2.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.k(0,t)}}}
F.j1.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.k(0,t)}}}
F.iX.prototype={
b9:function(){},
q:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.e(P.w("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.ae()
return!0},
bE:function(a,b,c,d,e,f){var u=F.bS(a,null,b,c,null,d,e,f,0)
this.q(0,u)
return u},
gm:function(a){return this.c.length},
aO:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)u[s].cj()
return!0},
ba:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)u[s].ci()
return!0},
bF:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
if(typeof p!=="number")return p.i()
o=q.b
if(typeof o!=="number")return o.i()
n=q.c
if(typeof n!=="number")return n.i()
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.G(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
h:function(a){return this.X()},
P:function(a){var u,t,s,r
this.b9()
u=H.b([],[P.r])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.t)(t),++r)u.push(t[r].P(a))
return C.b.v(u,"\n")},
X:function(){return this.P("")}}
F.iY.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
K:function(a,b){var u=this
C.b.K(u.b,b)
C.b.K(u.c,new F.iZ(u,b))
C.b.K(u.d,new F.j_(u,b))},
h:function(a){return this.X()},
X:function(){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)r.push(u[s].P(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)r.push(u[s].P(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)r.push(u[s].P(""))
return C.b.v(r,"\n")}}
F.iZ.prototype={
$1:function(a){if(!J.G(a.a,this.a))this.b.$1(a)}}
F.j_.prototype={
$1:function(a){var u=this.a
if(!J.G(a.a,u)&&!J.G(a.b,u))this.b.$1(a)}}
F.j0.prototype={
gm:function(a){return this.b.length+this.c.length},
h:function(a){return this.X()},
X:function(){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)r.push(u[s].P(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)r.push(u[s].P(""))
return C.b.v(r,"\n")}}
O.ce.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.C():u},
a2:function(a){var u=this.fr
if(u!=null)u.E(a)},
bX:function(){return this.a2(null)},
df:function(a){this.a=null
this.a2(a)},
hJ:function(){return this.df(null)},
fF:function(a,b){var u=new D.bb()
u.b=!0
this.a2(u)},
fH:function(a,b){var u=new D.bc()
u.b=!0
this.a2(u)},
d2:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.p,h=new H.J([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=h.j(0,0)
h.l(0,0,r==null?1:r)}q=H.b([],[A.cR])
h.K(0,new O.h6(j,q))
C.b.bU(q,new O.h7())
p=new H.J([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){o=u[s]
r=o.gbm()
n=p.j(0,o.gbm())
p.l(0,r,n==null?1:n)}m=H.b([],[A.dj])
p.K(0,new O.h8(j,m))
C.b.bU(m,new O.h9())
l=new H.J([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.t)(i),++s){o=i[s]
t=o.gbm()
r=l.j(0,o.gbm())
l.l(0,t,r==null?1:r)}k=H.b([],[A.dt])
l.K(0,new O.ha(j,k))
C.b.bU(k,new O.hb())
i=C.c.a6(j.e.a.length+3,4)
j.dy.e
return A.mR(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
al:function(a,b){if(b!=null)if(!C.b.ai(a,b)){b.sa8(0,a.length)
a.push(b)}},
ag:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a7(u,u.length);u.A();){t=u.d
t.toString
s=$.iW
if(s==null)s=$.iW=new V.x(0,0,1)
t.a=s
r=$.iV
t.d=r==null?$.iV=new V.x(0,1,0):r
r=$.iU
t.e=r==null?$.iU=new V.x(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.as(s)
r=s.a
if(typeof r!=="number")return r.i()
p=s.b
if(typeof p!=="number")return p.i()
o=s.c
if(typeof o!=="number")return o.i()
t.a=s.w(0,Math.sqrt(r*r+p*p+o*o))
o=q.as(t.d)
p=o.a
if(typeof p!=="number")return p.i()
r=o.b
if(typeof r!=="number")return r.i()
s=o.c
if(typeof s!=="number")return s.i()
t.d=o.w(0,Math.sqrt(p*p+r*r+s*s))
s=q.as(t.e)
r=s.a
if(typeof r!=="number")return r.i()
p=s.b
if(typeof p!=="number")return p.i()
o=s.c
if(typeof o!=="number")return o.i()
t.e=s.w(0,Math.sqrt(r*r+p*p+o*o))}}}},
j2:function(b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a
if(b2==null){b2=b1.d2()
u=b3.fr.j(0,b2.aQ)
if(u==null){u=A.mQ(b2,b3.a)
t=u.b
if(t.length===0)H.v(P.w("May not cache a shader with no name."))
if(b3.fr.bI(0,t))H.v(P.w('Shader cache already contains a shader by the name "'+t+'".'))
b3.fr.l(0,t,u)}b2=b1.a=u
b4.e=null}s=b2.z
r=s.dD
b2=b4.e
if(!(b2 instanceof Z.c6))b2=b4.e=null
if(b2==null||!J.G(b2.d,r)){b2=s.k3
if(b2)b4.d.aO()
q=s.k4
if(q)b4.d.ba()
p=s.r2
if(p)b4.d.bF()
o=b4.d.dv(new Z.j4(b3.a),r)
o.bb($.U()).e=b1.a.Q.c
if(b2)o.bb($.a6()).e=b1.a.cx.c
if(q)o.bb($.b8()).e=b1.a.ch.c
if(s.r1)o.bb($.W()).e=b1.a.cy.c
if(p)o.bb($.bu()).e=b1.a.db.c
if(s.rx)o.bb($.b7()).e=b1.a.dx.c
b4.e=o}n=H.b([],[T.dy])
b2=b1.a
q=b3.a
q.useProgram(b2.r)
b2.x.ix()
if(s.dy){b2=b1.a
p=b3.dx
p=p.ga7(p)
b2=b2.dy
b2.toString
b2.az(p.ar(0,!0))}if(s.fr){b2=b1.a
p=b3.cx
if(p==null){p=b3.db
p=p.ga7(p)
m=b3.dx
m=b3.cx=p.i(0,m.ga7(m))
p=m}b2=b2.fr
b2.toString
b2.az(p.ar(0,!0))}b2=b1.a
p=b3.ch
if(p==null){p=b3.gj_()
m=b3.dx
m=b3.ch=p.i(0,m.ga7(m))
p=m}b2=b2.fy
b2.toString
b2.az(p.ar(0,!0))
if(s.ry){b2=b1.a
p=b1.b
b2=b2.k1
b2.toString
b2.az(C.l.ar(p,!0))}if(s.x1){b2=b1.a
p=b1.c
b2=b2.k2
b2.toString
b2.az(C.l.ar(p,!0))}if(s.x2){b2=b1.a
p=b1.d
b2=b2.k3
b2.toString
b2.az(C.l.ar(p,!0))}if(s.y2>0){l=b1.e.a.length
b2=b1.a.k4
b2.a.uniform1i(b2.d,l)
for(k=0;k<l;++k){b2=b1.a
p=b1.e.a
if(k>=p.length)return H.c(p,k)
p=p[k]
b2=b2.r1
if(k>=b2.length)return H.c(b2,k)
b2=b2[k]
j=new Float32Array(H.bV(p.ar(0,!0)))
b2.a.uniformMatrix4fv(b2.d,!1,j)}}b2=s.a
if(b2.a){p=b1.a
m=b1.f.f
p=p.r2
p.a.uniform3f(p.d,m.a,m.b,m.c)}if(b2.b){b1.al(n,b1.f.d)
b2=b1.a
p=b1.f.d
b2.av(b2.rx,p)}if(s.id){b2=s.b
if(b2.a){p=b1.a
m=b1.r.f
p=p.x1
p.a.uniform3f(p.d,m.a,m.b,m.c)}if(b2.b){b1.al(n,b1.r.d)
b2=b1.a
p=b1.r.d
b2.av(b2.x2,p)}b2=s.c
if(b2.a){p=b1.a
m=b1.x.f
p=p.y2
p.a.uniform3f(p.d,m.a,m.b,m.c)}if(b2.b){b1.al(n,b1.x.d)
b2=b1.a
p=b1.x.d
b2.av(b2.aQ,p)}b2=s.d
if(b2.a){p=b1.a
m=b1.y.f
p=p.dE
p.a.uniform3f(p.d,m.a,m.b,m.c)}if(b2.b){b1.al(n,b1.y.d)
b2=b1.a
p=b1.y.d
b2.av(b2.dF,p)}b2=s.e
p=b2.a
if(p||b2.b||!1){m=b1.a
i=b1.z.ch
m=m.dI
m.a.uniform1f(m.d,i)}if(p){p=b1.a
m=b1.z.f
p=p.dG
p.a.uniform3f(p.d,m.a,m.b,m.c)}if(b2.b){b1.al(n,b1.z.d)
b2=b1.a
p=b1.z.d
b2.av(b2.dH,p)}b2=s.z
if(b2.length>0){p=b3.db
h=p.ga7(p)
p=P.p
g=new H.J([p,p])
for(p=b1.dx.e,m=p.length,f=0;f<p.length;p.length===m||(0,H.t)(p),++f){e=p[f]
d=g.j(0,0)
if(d==null)d=0
g.l(0,0,d+1)
c=J.cJ(b1.a.cm.j(0,0),d)
i=h.as(e.a)
b=i.a
if(typeof b!=="number")return b.i()
a=i.b
if(typeof a!=="number")return a.i()
a0=i.c
if(typeof a0!=="number")return a0.i()
a0=i.w(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.e
b=a0.a
i=a0.b
a0=a0.c
a.a.uniform3f(a.d,b,i,a0)
a0=e.c
i=c.f
i.a.uniform3f(i.d,a0.a,a0.b,a0.c)}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.t)(b2),++f){m=b2[f].a
l=g.j(0,m)
if(l==null)l=0
m=b1.a.cl.j(0,m)
m.a.uniform1i(m.d,l)}}b2=s.Q
if(b2.length>0){p=b3.db
h=p.ga7(p)
p=P.p
a1=new H.J([p,p])
for(p=b1.dx.f,m=p.length,f=0;f<p.length;p.length===m||(0,H.t)(p),++f){e=p[f]
a2=e.gbm()
d=a1.j(0,a2)
if(d==null)d=0
a1.l(0,a2,d+1)
c=J.cJ(b1.a.co.j(0,a2),d)
a3=h.i(0,e.ga7(e))
i=e.ga7(e)
b=$.ck
i=i.V(b==null?$.ck=new V.o(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=$.ck
i=a3.V(i==null?$.ck=new V.o(0,0,0):i)
b=c.c
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=e.gbl(e)
b=c.e
b.a.uniform3f(b.d,i.a,i.b,i.c)
e.gaW()
i=a3.bo(0)
b=i.a
a=i.b
a0=i.c
a4=i.e
a5=i.f
a6=i.r
a7=i.y
a8=i.z
i=i.Q
a9=c.d
a9.toString
j=new Float32Array(H.bV(new V.ao(b,a,a0,a4,a5,a6,a7,a8,i).ar(0,!0)))
a9.a.uniformMatrix3fv(a9.d,!1,j)
e.gaW()
i=e.gaW()
if(!C.b.ai(n,i)){i.sa8(0,n.length)
n.push(i)}i=e.gaW()
b=i.ga9(i)
if(b){b=c.f
b.toString
a=i.ga9(i)
if(!a)b.a.uniform1i(b.d,0)
else{i=i.ga8(i)
b.a.uniform1i(b.d,i)}}e.gbf()
i=e.gev()
b=c.x
b.toString
a=i.giu(i)
a0=i.giv(i)
a4=i.giw()
i=i.git()
b.a.uniform4f(b.d,a,a0,a4,i)
i=e.gbf()
if(!C.b.ai(n,i)){i.sa8(0,n.length)
n.push(i)}i=e.gbf()
b=i.ga9(i)
if(b){b=c.r
b.toString
a=i.ga9(i)
if(!a)b.a.uniform1i(b.d,0)
else{i=i.ga8(i)
b.a.uniform1i(b.d,i)}}if(e.giy()){i=e.gib()
b=c.y
b.a.uniform1f(b.d,i)
i=e.gic()
b=c.z
b.a.uniform1f(b.d,i)
i=e.gie()
b=c.Q
b.a.uniform1f(b.d,i)}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.t)(b2),++f){m=b2[f].a
l=a1.j(0,m)
if(l==null)l=0
m=b1.a.cn.j(0,m)
m.a.uniform1i(m.d,l)}}b2=s.ch
if(b2.length>0){p=b3.db
h=p.ga7(p)
p=P.p
b0=new H.J([p,p])
for(p=b1.dx.r,m=p.length,f=0;f<p.length;p.length===m||(0,H.t)(p),++f){e=p[f]
a2=e.gbm()
d=b0.j(0,a2)
if(d==null)d=0
b0.l(0,a2,d+1)
c=J.cJ(b1.a.cq.j(0,a2),d)
i=e.giZ(e)
b=c.b
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=e.gjm(e).jy()
b=c.c
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=h.V(e.giZ(e))
b=c.d
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=e.gbl(e)
b=c.e
b.a.uniform3f(b.d,i.a,i.b,i.c)
e.gaW()
i=e.gjB()
b=c.f
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=e.gaf(e)
b=c.r
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=e.gjz()
b=c.x
b.a.uniform1f(b.d,i)
i=e.gjA()
b=c.y
b.a.uniform1f(b.d,i)
e.gaW()
i=e.gaW()
if(!C.b.ai(n,i)){i.sa8(0,n.length)
n.push(i)}i=e.gaW()
b=i.ga9(i)
if(b){b=c.dx
b.toString
a=i.ga9(i)
if(!a)b.a.uniform1i(b.d,0)
else{i=i.ga8(i)
b.a.uniform1i(b.d,i)}}e.gbf()
i=e.gev()
b=c.z
b.toString
a=i.giu(i)
a0=i.giv(i)
a4=i.giw()
i=i.git()
b.a.uniform4f(b.d,a,a0,a4,i)
i=e.gbf()
if(!C.b.ai(n,i)){i.sa8(0,n.length)
n.push(i)}i=e.gbf()
b=i.ga9(i)
if(b){b=c.dy
b.toString
a=i.ga9(i)
if(!a)b.a.uniform1i(b.d,0)
else{i=i.ga8(i)
b.a.uniform1i(b.d,i)}}if(e.gjn()){i=e.gjl()
b=c.Q
b.a.uniform1f(b.d,i)
i=e.gjk()
b=c.ch
b.a.uniform1f(b.d,i)}if(e.giy()){i=e.gib()
b=c.cx
b.a.uniform1f(b.d,i)
i=e.gic()
b=c.cy
b.a.uniform1f(b.d,i)
i=e.gie()
b=c.db
b.a.uniform1f(b.d,i)}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.t)(b2),++f){m=b2[f].a
l=b0.j(0,m)
if(l==null)l=0
m=b1.a.cp.j(0,m)
m.a.uniform1i(m.d,l)}}}if(s.f.b){b1.al(n,b1.Q.d)
b2=b1.a
p=b1.Q.d
b2.av(b2.dJ,p)}if(s.dx){b2=b1.a
p=b3.Q
if(p==null){p=b3.db
p=b3.Q=p.ga7(p).bo(0)}b2=b2.id
b2.toString
b2.az(p.ar(0,!0))}if(s.cy){b1.al(n,b1.ch)
b2=b1.a
p=b1.ch
b2.hL(b2.dK,p)
b2=s.r
if(b2.a){p=b1.a
m=b1.cx.f
p=p.dL
p.a.uniform3f(p.d,m.a,m.b,m.c)}if(b2.b){b1.al(n,b1.cx.d)
b2=b1.a
p=b1.cx.d
b2.av(b2.dM,p)}b2=s.x
p=b2.a
if(p||b2.b||!1){m=b1.a
i=b1.cy.ch
m=m.dN
m.a.uniform1f(m.d,i)}if(p){p=b1.a
m=b1.cy.f
p=p.dO
p.a.uniform3f(p.d,m.a,m.b,m.c)}if(b2.b){b1.al(n,b1.cy.d)
b2=b1.a
p=b1.cy.d
b2.av(b2.dP,p)}}b2=s.y
p=b2.a
m=!p
if(!m||b2.b||!1){if(p){p=b1.a
i=b1.db.f
p=p.dQ
p.a.uniform1f(p.d,i)}if(b2.b){b1.al(n,b1.db.d)
p=b1.a
i=b1.db.d
p.av(p.dR,i)}q.enable(3042)
q.blendFunc(770,771)}for(k=0;k<n.length;++k)n[k].aN(b3)
p=b4.e
p.aN(b3)
p.bd(b3)
p.bu(b3)
if(!m||b2.b||!1)q.disable(3042)
for(k=0;k<n.length;++k)n[k].bu(b3)
b2=b1.a
b2.toString
q.useProgram(null)
b2.x.ir()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.d2().aQ}}
O.h6.prototype={
$2:function(a,b){if(typeof b!=="number")return b.k()
return this.b.push(new A.cR(a,C.c.a6(b+3,4)*4))}}
O.h7.prototype={
$2:function(a,b){return J.k7(a.a,b.a)}}
O.h8.prototype={
$2:function(a,b){if(typeof b!=="number")return b.k()
return this.b.push(new A.dj(a,C.c.a6(b+3,4)*4))}}
O.h9.prototype={
$2:function(a,b){return J.k7(a.a,b.a)}}
O.ha.prototype={
$2:function(a,b){if(typeof b!=="number")return b.k()
return this.b.push(new A.dt(a,C.c.a6(b+3,4)*4))}}
O.hb.prototype={
$2:function(a,b){return J.k7(a.a,b.a)}}
O.h0.prototype={
aJ:function(){var u,t=this
t.cM()
u=t.f
if(!(Math.abs(u-1)<$.u().a)){t.f=1
u=new D.A(t.b,u,1)
u.b=!0
t.a.a2(u)}}}
O.cf.prototype={
a2:function(a){return this.a.a2(a)},
bX:function(){return this.a2(null)},
aJ:function(){},
bC:function(a){var u,t,s=this
if(!s.c.p(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aJ()
u=s.a
u.a=null
u.a2(null)}},
sbr:function(a){var u,t,s=this,r=a==null
if(r){u=s.c
s.bC(new A.Y(u.a,!1,!1))}else{u=s.c
if(!u.b)s.bC(new A.Y(u.a,!0,!1))}u=s.d
if(u!=a){if(u!=null)u.gt().U(0,s.gbx())
t=s.d
s.d=a
if(!r)a.gt().q(0,s.gbx())
r=new D.A(s.b+".texture2D",t,s.d)
r.b=!0
s.a.a2(r)}}}
O.h1.prototype={}
O.aD.prototype={
dh:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.A(s.b+".color",u,a)
t.b=!0
s.a.a2(t)}},
aJ:function(){this.cM()
this.dh(new V.X(1,1,1))},
sbl:function(a,b){this.bC(new A.Y(!0,this.c.b,!1))
this.dh(b)}}
O.h3.prototype={}
O.h4.prototype={
aJ:function(){var u,t=this
t.cN()
u=t.ch
if(!(Math.abs(u-1)<$.u().a)){t.ch=1
u=new D.A(t.b+".refraction",u,1)
u.b=!0
t.a.a2(u)}}}
O.h5.prototype={
di:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.u().a)){u.ch=a
t=new D.A(u.b+".shininess",t,a)
t.b=!0
u.a.a2(t)}},
aJ:function(){this.cN()
this.di(100)}}
O.dx.prototype={}
T.dy.prototype={}
T.dz.prototype={}
T.ik.prototype={
ga8:function(a){return this.a},
sa8:function(a,b){this.a=b},
ga9:function(a){var u=this.d
u=u==null?null:u.ga9(u)
if(u==null){u=this.c
u=u==null?null:u.ga9(u)}return u===!0},
gt:function(){var u=this.f
return u==null?this.f=D.C():u},
aN:function(a){var u
if(this.d==null){u=this.d=this.c
if(u!=null)u.aN(a)}},
bu:function(a){var u=this.d
if(u!=null){u.bu(a)
this.d=null}}}
T.il.prototype={
ga8:function(a){return this.a},
sa8:function(a,b){this.a=b},
ga9:function(a){return this.d},
gt:function(){var u=this.y
return u==null?this.y=D.C():u},
aN:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}},
bu:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(3553,null)}}}
T.im.prototype={
iH:function(a,b,c,d){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9987)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.il()
t.a=0
t.b=q
t.d=t.c=!1
W.a0(u,"load",new T.io(this,t,u,!1,q,!1,!0),!1)
return t},
hK:function(a,b,c){var u,t,s,r
b=V.kL(b)
u=V.kL(a.width)
t=V.kL(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kd()
s.width=u
s.height=t
r=C.j.eq(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oj(r.getImageData(0,0,s.width,s.height))}}}
T.io.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.hK(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.V.j8(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.dC()}++s.e}}
X.kc.prototype={}
X.fF.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.C():u}}
X.dg.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.C():u},
b1:function(a){var u=this.f
if(u!=null)u.E(a)},
eV:function(){return this.b1(null)},
se0:function(a){var u,t,s=this
if(!J.G(s.b,a)){u=s.b
if(u!=null)u.gt().U(0,s.gcS())
t=s.b
s.b=a
if(a!=null)a.gt().q(0,s.gcS())
u=new D.A("mover",t,s.b)
u.b=!0
s.b1(u)}}}
X.ic.prototype={}
V.hZ.prototype={
eI:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a0(q,"scroll",new V.i0(o),!1)},
ce:function(a,b){var u,t,s,r,q
a=C.c.ii(a,0,4)
u=P.ez(C.u,b,C.e,!1)
t=document.createElement("div")
t.className="textHeader"
t.id=u
s=t.style
r=""+(28-a*3)+"px"
s.fontSize=r
q=W.mt()
q.href="#"+H.f(u)
q.textContent=b
t.appendChild(q)
this.a.appendChild(t)},
a0:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.hN()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.jb(C.b.iG(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q){p=s[q]
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
if(H.oC(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.ez(C.u,n,C.e,!1)
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
hN:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new R.is()
t=P.r
u.a=new H.J([t,R.dv])
u.b=new H.J([t,R.dD])
u.c=u.S(0,q)
t=u.S(0,q).v(0,p)
s=T.a4(new H.R("*"))
t.a.push(s)
t.c=!0
t=u.S(0,p).v(0,p)
s=new T.aT()
r=[T.d8]
s.a=H.b([],r)
t.a.push(s)
t=T.a4(new H.R("*"))
s.a.push(t)
t=u.S(0,p).v(0,"BoldEnd")
s=T.a4(new H.R("*"))
t.a.push(s)
t.c=!0
t=u.S(0,q).v(0,o)
s=T.a4(new H.R("_"))
t.a.push(s)
t.c=!0
t=u.S(0,o).v(0,o)
s=new T.aT()
s.a=H.b([],r)
t.a.push(s)
t=T.a4(new H.R("_"))
s.a.push(t)
t=u.S(0,o).v(0,n)
s=T.a4(new H.R("_"))
t.a.push(s)
t.c=!0
t=u.S(0,q).v(0,m)
s=T.a4(new H.R("`"))
t.a.push(s)
t.c=!0
t=u.S(0,m).v(0,m)
s=new T.aT()
s.a=H.b([],r)
t.a.push(s)
t=T.a4(new H.R("`"))
s.a.push(t)
t=u.S(0,m).v(0,"CodeEnd")
s=T.a4(new H.R("`"))
t.a.push(s)
t.c=!0
t=u.S(0,q).v(0,l)
s=T.a4(new H.R("["))
t.a.push(s)
t.c=!0
t=u.S(0,l).v(0,k)
s=T.a4(new H.R("|"))
t.a.push(s)
s=u.S(0,l).v(0,j)
t=T.a4(new H.R("]"))
s.a.push(t)
s.c=!0
s=u.S(0,l).v(0,l)
t=new T.aT()
t.a=H.b([],r)
s.a.push(t)
s=T.a4(new H.R("|]"))
t.a.push(s)
s=u.S(0,k).v(0,j)
t=T.a4(new H.R("]"))
s.a.push(t)
s.c=!0
s=u.S(0,k).v(0,k)
t=new T.aT()
t.a=H.b([],r)
s.a.push(t)
s=T.a4(new H.R("|]"))
t.a.push(s)
u.S(0,q).v(0,i).a.push(new T.eW())
s=u.S(0,i).v(0,i)
t=new T.aT()
t.a=H.b([],r)
s.a.push(t)
s=T.a4(new H.R("*_`["))
t.a.push(s)
s=u.S(0,"BoldEnd")
s.d=s.a.bt(p)
s=u.S(0,n)
s.d=s.a.bt(o)
s=u.S(0,"CodeEnd")
s.d=s.a.bt(m)
s=u.S(0,j)
s.d=s.a.bt("Link")
s=u.S(0,i)
s.d=s.a.bt(i)
this.b=u}}
V.i0.prototype={
$1:function(a){P.ks(C.k,new V.i_(this.a))}}
V.i_.prototype={
$0:function(){var u=C.d.aw(document.documentElement.scrollTop),t=this.a.style,s=H.f(-0.01*u)+"px"
t.top=s}}
B.aa.prototype={
gdq:function(){var u=this
return new B.aa(u.a,u.b+1,u.c,u.d,u.e,u.f)},
gds:function(){var u=this
return new B.aa(u.a,u.b-1,u.c,u.d,u.e,u.f)},
gaf:function(a){var u=this,t=u.a+1,s=u.d,r=u.f
if(t>=16){s+=16
r=r==null?null:r.gaf(r)
t=0}return new B.aa(t,u.b,u.c,s,u.e,r)},
gad:function(a){var u=this,t=u.a-1,s=u.d,r=u.f
if(t<0){s-=16
r=r==null?null:r.gad(r)
t=15}return new B.aa(t,u.b,u.c,s,u.e,r)},
gaC:function(){var u=this,t=u.c+1,s=u.e,r=u.f
if(t>=16){s+=16
r=r==null?null:r.gaC()
t=0}return new B.aa(u.a,u.b,t,u.d,s,r)},
gaM:function(a){var u=this,t=u.c-1,s=u.e,r=u.f
if(t<0){s-=16
r=r==null?null:r.gaM(r)
t=15}return new B.aa(u.a,u.b,t,u.d,s,r)},
e2:function(a){var u=this,t=J.N(a)
if(t.p(a,$.at()))return u.gad(u)
else if(t.p(a,$.au()))return u.gaf(u)
else if(t.p(a,$.b4()))return u.gds()
else if(t.p(a,$.av()))return u.gdq()
else if(t.p(a,$.b5()))return u.gaM(u)
else if(t.p(a,$.b6()))return u.gaC()
else return},
gcg:function(){var u=this
return V.hG(u.a+u.d,u.b,u.c+u.e,1,1,1)},
h:function(a){var u=this
return H.f(u.f)+".block("+u.a+", "+u.b+", "+u.c+", ("+u.d+", "+u.e+"), "+B.mv(u.gM(u))+")"},
gM:function(a){var u=this,t=u.f
t=t==null?null:t.ah(u.a,u.b,u.c)
if(t==null)t=u.b<0?100:0
return t},
sM:function(a,b){var u=this,t=u.f
if(t!=null)t.W(u.a,u.b,u.c,b)}}
B.fa.prototype={
bJ:function(a){var u,t,s
for(u=0;u<16;++u)for(t=0;t<16;++t)for(s=0;s<this.b;++s)a.W(u,s,t,this.fl(u,s,t))
a.cs()},
fl:function(a,b,c){var u=a===0
if(u||c===0)return u&&c===0?112:110
if(a===1&&c===1)return 110
return C.c.aY(a+b+c,2)===0?113:111}}
B.cN.prototype={
eC:function(a){var u,t,s,r,q,p,o,n,m,l=this,k=null
l.d=new Uint8Array(12288)
l.e=H.b([],[E.ac])
for(u=l.c.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
q=E.bD(k,k,k,k)
p=r.y
o=[H.c0(p,0)]
if(p.bh(H.b([q],o))){n=p.a
m=n.length
n.push(q)
o=H.b([q],o)
p=p.c
if(p!=null)p.$2(m,o)}l.e.push(q)}l.b=l.a=0
l.f=!1
l.x=l.r=!0},
h:function(a){return"chunk("+this.a+", "+this.b+")"},
cs:function(){var u,t=this
t.x=!1
t.f=!0
t.saH(!1)
u=t.gad(t)
if(u!=null)u.f=!0
u=t.gaf(t)
if(u!=null)u.f=!0
u=t.gaC()
if(u!=null)u.f=!0
u=t.gaM(t)
if(u!=null)u.f=!0},
ah:function(a,b,c){var u,t
if(b<0)return 100
if(b>=48)return 0
if(a<0)return 0
if(a>=16)return 0
if(c<0)return 0
if(c>=16)return 0
u=this.d
t=(a*48+b)*16+c
if(t<0||t>=12288)return H.c(u,t)
return u[t]},
bB:function(a,b,c,d){var u=a==null?null:a.bR(b,c,d)
return u==null?0:u},
bR:function(a,b,c){var u,t,s=this
if(b<0)return 100
if(b>=48)return 0
if(a<0)return s.bB(s.gad(s),a+16,b,c)
if(a>=16)return s.bB(s.gaf(s),a-16,b,c)
if(c<0)return s.bB(s.gaM(s),a,b,c+16)
if(c>=16)return s.bB(s.gaC(),a,b,c-16)
u=s.d
t=(a*48+b)*16+c
if(t<0||t>=12288)return H.c(u,t)
return u[t]},
W:function(a,b,c,d){var u,t
if(b<0)return!1
if(b>=48)return!1
if(a<0)return!1
if(a>=16)return!1
if(c<0)return!1
if(c>=16)return!1
u=this.d
t=(a*48+b)*16+c
if(t<0||t>=12288)return H.c(u,t)
u[t]=d
return!0},
gad:function(a){return this.c.aR(this.a-16,this.b)},
gaC:function(){return this.c.aR(this.a,this.b+16)},
gaf:function(a){return this.c.aR(this.a+16,this.b)},
gaM:function(a){return this.c.aR(this.a,this.b-16)},
cF:function(a,b,c){var u,t
for(u=47;u>=0;--u){t=this.ah(a,u,b)
if(t>=100&&t<=117)return u}return c},
jc:function(a,b){return this.cF(a,b,48)},
je:function(){var u,t=this
if(t.x||!t.r)return
t.f=t.r=!1
u=B.kr(t.c.a,null)
u.ih(t)
u.cr(0,t.e)},
saH:function(a){var u,t,s
for(u=this.e,t=u.length,s=0;s<t;++s)u[s].b=a},
jf:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=this
if(i.x||i.r){i.saH(!1)
return}u=V.kp(i.a,i.b,16,16)
t=u.e1(a)
s=t.a
r=a.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.d(r)
q=s-r
s=t.b
p=a.b
if(typeof s!=="number")return s.n()
if(typeof p!=="number")return H.d(p)
o=s-p
if(q*q+o*o<100){i.saH(!0)
return}n=u.e1(b)
s=b.a
if(typeof s!=="number")return s.n()
m=b.b
if(typeof m!=="number")return m.n()
m=new V.M(s-r,m-p)
l=m.w(0,Math.sqrt(m.D(m)))
m=n.a
if(typeof m!=="number")return m.n()
s=n.b
if(typeof s!=="number")return s.n()
k=new V.M(m-r,s-p)
j=k.D(k)
if(j>6400){i.saH(!1)
return}i.saH(l.D(k.w(0,j))>0)}}
B.fc.prototype={
ij:function(a,b,c){var u,t,s=this
s.b=b
s.c=a
s.d=c
s.e=$.b3()
s.fb()
for(;s.hQ(););u=s.b
t=s.d
s.b=u.k(0,new V.o(t.a,t.b,t.c))
return!0},
fb:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.c,a2=a0.b,a3=a1.bQ(0,new V.x(a2.a,a2.b,a2.c))
a2=a3.bQ(0,a0.d)
a1=a3.a
u=a2.a
t=Math.min(H.bY(a1),H.bY(u))
if(typeof a1!=="number")return a1.k()
if(typeof u!=="number")return u.k()
s=Math.max(a1+a3.d,u+a2.d)
u=a3.b
a1=a2.b
r=Math.min(H.bY(u),H.bY(a1))
if(typeof u!=="number")return u.k()
if(typeof a1!=="number")return a1.k()
q=Math.max(u+a3.e,a1+a2.e)
a1=a3.c
u=a2.c
p=Math.min(H.bY(a1),H.bY(u))
if(typeof a1!=="number")return a1.k()
if(typeof u!=="number")return u.k()
o=Math.max(a1+a3.f,u+a2.f)
a2=a0.a
n=a2.ah(t,r,p)
m=a2.ah(t+(s-t),r+(q-r),p+(o-p))
l=m.a+m.d
k=m.c+m.e
C.b.sm(a0.f,0)
C.b.sm(a0.r,0)
C.b.sm(a0.x,0)
a1=m.b
j=n
while(!0){if(!(j.a+j.d<=l))break
i=j
while(!0){if(!(i.b<=a1))break
h=i
while(!0){if(!(h.c+h.e<=k))break
a2=h.gM(h)
if(a2>=100&&a2<=117){g=$.b3()
f=h.gad(h)
a2=f.gM(f)
a2=a2>=100&&a2<=117
if(a2){a2=$.at()
g=new V.Q((g.a|a2.a)>>>0)}f=h.gaf(h)
a2=f.gM(f)
a2=a2>=100&&a2<=117
if(a2){a2=$.au()
g=new V.Q((g.a|a2.a)>>>0)}a2=h.a
u=h.b
e=h.c
d=h.d
c=h.e
b=h.f
f=new B.aa(a2,u-1,e,d,c,b)
a=f.gM(f)
a=a>=100&&a<=117
if(a){a=$.b4()
g=new V.Q((g.a|a.a)>>>0)}f=new B.aa(a2,u+1,e,d,c,b)
a2=f.gM(f)
a2=a2>=100&&a2<=117
if(a2){a2=$.av()
g=new V.Q((g.a|a2.a)>>>0)}f=h.gaM(h)
a2=f.gM(f)
a2=a2>=100&&a2<=117
if(a2){a2=$.b5()
g=new V.Q((g.a|a2.a)>>>0)}f=h.gaC()
a2=f.gM(f)
a2=a2>=100&&a2<=117
if(a2){a2=$.b6()
g=new V.Q((g.a|a2.a)>>>0)}a2=$.m5()
if(!J.G(g,a2)){a0.f.push(h.gcg())
u=a0.r
g.toString
e=$.kS().a
d=g.a
u.push(new V.Q((a2.a&e&~d)>>>0))
a0.x.push(!1)}}h=h.gaC()}i=new B.aa(i.a,i.b+1,i.c,i.d,i.e,i.f)}j=j.gaf(j)}},
hQ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.d.cv())return!1
u=e.c
t=e.b
s=u.bQ(0,new V.x(t.a,t.b,t.c))
r=$.b3()
for(q=0,p=-1,o=0;u=e.f,o<u.length;++o){t=e.x
if(o>=t.length)return H.c(t,o)
if(!t[o]){n=u[o]
u=e.r
if(o>=u.length)return H.c(u,o)
m=u[o]
l=s.ik(n,e.d,m)
if(l!=null)if(J.G(r,$.b3())||q>l.a){r=l.b
q=l.a
p=o}}}u=J.N(r)
if(u.p(r,$.b3()))return!1
t=e.x
if(p<0||p>=t.length)return H.c(t,p)
t[p]=!0
k=e.d.i(0,q)
j=e.d.i(0,1-q)
if(u.p(r,$.au())||u.p(r,$.at())){u=e.b
t=u.a
i=k.a
if(typeof t!=="number")return t.k()
if(typeof i!=="number")return H.d(i)
h=u.b
g=k.b
if(typeof h!=="number")return h.k()
if(typeof g!=="number")return H.d(g)
u=u.c
f=k.c
if(typeof u!=="number")return u.k()
if(typeof f!=="number")return H.d(f)
e.b=new V.o(t+i,h+g,u+f)
e.d=new V.x(0,j.b,j.c)}else if(u.p(r,$.av())||u.p(r,$.b4())){u=e.b
t=u.b
i=k.b
if(typeof t!=="number")return t.k()
if(typeof i!=="number")return H.d(i)
h=u.a
g=k.a
if(typeof h!=="number")return h.k()
if(typeof g!=="number")return H.d(g)
u=u.c
f=k.c
if(typeof u!=="number")return u.k()
if(typeof f!=="number")return H.d(f)
e.b=new V.o(h+g,t+i,u+f)
e.d=new V.x(j.a,0,j.c)}else if(u.p(r,$.b6())||u.p(r,$.b5())){u=e.b
t=u.c
i=k.c
if(typeof t!=="number")return t.k()
if(typeof i!=="number")return H.d(i)
h=u.a
g=k.a
if(typeof h!=="number")return h.k()
if(typeof g!=="number")return H.d(g)
u=u.b
f=k.b
if(typeof u!=="number")return u.k()
if(typeof f!=="number")return H.d(f)
e.b=new V.o(h+g,u+f,t+i)
e.d=new V.x(j.a,j.b,0)}e.e=new V.Q((e.e.a|r.a)>>>0)
return!0},
h:function(a){return"Collider("+H.f(this.b)+", "+H.f(this.e)+")"}}
B.k_.prototype={
$1:function(a){var u=this.b
P.kM(C.d.ek(this.a.giD(),2)+" fps, "+("chunks: "+u.d.length+", graveyard: "+u.c.length+", player: "+H.f(u.gc8())))}}
B.L.prototype={}
B.hc.prototype={
F:function(a){var u="./textures/"+a+".png"
return this.a.f.iH(u,!0,!1,!1)},
I:function(a,b){var u,t=O.l5()
t.dx.q(0,this.e)
u=t.r
u.sbl(0,new V.X(0.8,0.8,0.8))
u=t.x
u.sbl(0,new V.X(0.4,0.4,0.4))
t.r.sbr(a)
t.x.sbr(a)
t.db.sbr(a)
if(b){u=t.z
u.sbl(0,new V.X(0.5,0.5,0.5))
u.bC(new A.Y(!0,u.c.b,!1))
u.di(3)}this.d.push(t)
return this.d.length-1},
cV:function(a){var u=this.F(a),t=O.l5()
t.f.sbr(u)
t.db.sbr(u)
return t}}
B.dd.prototype={
h:function(a){var u=this
return"NeighborBlockInfo("+u.a.h(0)+", "+H.f(u.b)+", "+u.c.h(0)+", "+u.d+")"}}
B.dh.prototype={
eE:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null
a.r=!0
u=a.d
u.ch=u.Q=0.4
u=X.aC()
u.a4(32)
u.ac(a)
u.gao().q(0,c.gh3())
c.d=!0
u=X.aC()
u.a4(9)
u.dr(9,!0)
u.ac(a)
u.gao().q(0,c.gfK())
u=X.aC()
u.a4(69)
u.a4(81)
u.ac(a)
u.gao().q(0,c.gfI())
u=a.d
t=u.b
u=t==null?u.b=D.C():t
u.q(0,c.gfU())
u=X.aC()
u.a4(79)
u.ac(a)
u.gao().q(0,c.ghp())
u=new U.dM()
t=X.aC()
t.a4(39)
t.a4(68)
s=u.gh5()
t.gao().q(0,s)
u.a=t
t=X.aC()
t.a4(37)
t.a4(65)
t.gao().q(0,s)
u.b=t
t=X.aC()
t.a4(81)
t.gao().q(0,s)
u.c=t
t=X.aC()
t.a4(69)
t.gao().q(0,s)
u.d=t
t=X.aC()
t.a4(40)
t.a4(83)
t.gao().q(0,s)
u.e=t
t=X.aC()
t.a4(38)
t.a4(87)
t.gao().q(0,s)
u.f=t
t=U.cO()
t.saD(30)
t.saP(0)
s=u.gaA()
t.gt().q(0,s)
u.r=t
t=U.cO()
t.saD(30)
t.saP(0)
t.gt().q(0,s)
u.x=t
t=U.cO()
t.saD(30)
t.saP(0)
t.gt().q(0,s)
u.y=t
u.Q=u.z=null
u.ch=60
u.cx=15
u.cy=0
u.dy=u.dx=u.db=null
u.a.ac(a)
u.b.ac(a)
u.c.ac(a)
u.d.ac(a)
u.e.ac(a)
u.f.ac(a)
u.r.saD(6)
u.x.saD(60)
t=u.x
s=t.r
if(!(Math.abs(s- -100)<$.u().a)){t.r=-100
s=new D.A("acceleration",s,-100)
s.b=!0
t.C(s)}u.y.saD(6)
u.dy=c.gfm()
c.a=u
u=new U.dL()
t=U.cO()
t.scH(0,!0)
t.scz(6.283185307179586)
t.scA(0)
t.sY(0,0)
t.saD(100)
t.sR(0)
t.saP(0.5)
u.b=t
s=u.gaA()
t.gt().q(0,s)
t=U.cO()
t.scH(0,!0)
t.scz(6.283185307179586)
t.scA(0)
t.sY(0,0)
t.saD(100)
t.sR(0)
t.saP(0.5)
u.c=t
t.gt().q(0,s)
u.d=null
u.r=u.f=u.e=!1
u.y=u.x=2.5
u.Q=4
u.ch=u.cx=!1
u.db=u.cy=0
u.dx=null
u.dy=0
u.fx=u.fr=null
r=new X.bh(!1,!1,!1)
q=u.d
u.d=r
t=new D.A("modifiers",q,r)
t.b=!0
u.C(t)
t=u.f
if(t!==!1){u.f=!1
t=new D.A("invertX",t,!1)
t.b=!0
u.C(t)}t=u.r
if(t!==!1){u.r=!1
t=new D.A("invertY",t,!1)
t.b=!0
u.C(t)}u.ac(a)
u.b.scz(1.5707963267948966)
u.b.scA(-1.5707963267948966)
u.b.saP(1)
u.c.saP(1)
u.b.scH(0,!1)
c.b=u
u.gt().q(0,new B.hv(c))
u=[U.a8]
t=U.fG(H.b([c.a,c.b],u))
t.gt().q(0,c.gi2())
c.x=t
t=c.b
s=new U.cd()
s.c=V.bK()
s.d=0
if(null!=t){s.a=t
t.gt().q(0,s.gaA())
t=new D.A("mover",b,s.a)
t.b=!0
s.C(t)}c.y=U.fG(H.b([s,c.a,U.ba(V.ko(1,-1,1,1))],u))
t=U.ba(V.d9(-0.5,-0.5,-0.5))
s=new U.dq()
s.r=s.f=s.e=s.d=s.c=s.b=s.a=0
s.sen(-0.1)
s.seb(0,0)
s.sej(0)
p=s.d
if(!(Math.abs(p-0)<$.u().a)){s.d=0
p=new D.A("deltaYaw",p,0)
p.b=!0
s.C(p)}p=s.e
if(!(Math.abs(p-0.1)<$.u().a)){s.e=0.1
p=new D.A("deltaPitch",p,0.1)
p.b=!0
s.C(p)}p=s.f
if(!(Math.abs(p-0)<$.u().a)){s.f=0
p=new D.A("deltaRoll",p,0)
p.b=!0
s.C(p)}c.z=U.fG(H.b([t,s,U.ba(V.d9(0.5,0.5,0.5)),U.ba(V.ko(0.04,-0.04,0.04,1)),U.ba(V.d9(-0.15,0.06,-0.2)),c.y],u))
u=U.fG(H.b([U.ba(V.ko(0.005,-0.005,0.005,1)),U.ba(V.d9(0,0,-0.2)),c.y],u))
c.Q=u
t=$.U()
s=$.W()
s=new Z.V(t.a|s.a)
o=new F.hQ()
t=new F.iX(o)
t.b=!1
p=F.bR
t.c=H.b([],[p])
o.a=t
t=new F.hT()
t.b=H.b([],[F.hx])
o.b=t
t=new F.hS(o)
t.b=H.b([],[F.d3])
o.c=t
t=new F.hR(o)
t.b=H.b([],[F.bG])
o.d=t
o.e=null
t=o.a
n=new V.x(-1,-1,1)
n=n.w(0,Math.sqrt(n.D(n)))
m=t.bE(new V.bm(1,2,4,6),new V.am(1,0,0,1),new V.o(-1,-1,0),new V.O(0,1),n,s)
t=o.a
n=new V.x(1,-1,1)
n=n.w(0,Math.sqrt(n.D(n)))
l=t.bE(new V.bm(0,3,4,6),new V.am(0,0,1,1),new V.o(1,-1,0),new V.O(1,1),n,s)
t=o.a
n=new V.x(1,1,1)
n=n.w(0,Math.sqrt(n.D(n)))
k=t.bE(new V.bm(0,2,5,6),new V.am(0,1,0,1),new V.o(1,1,0),new V.O(1,0),n,s)
t=o.a
n=V.aV()
j=new V.x(-1,1,1)
j=j.w(0,Math.sqrt(j.D(j)))
i=t.bE(new V.bm(0,2,4,7),new V.am(1,1,0,1),new V.o(-1,1,0),n,j,s)
o.d.i7(H.b([m,l,k,i],[p]))
o.aO()
t=c.c
s=t.a
c.ch=E.bD(b,u,o,s.r)
c.cx=E.bD(b,c.z,b,b)
u=E.ac
c.dx=H.b([],[u])
for(p=s.d,n=p.length,h=0;h<p.length;p.length===n||(0,H.t)(p),++h){g=E.bD(b,b,b,p[h])
j=c.cx.y
f=[H.c0(j,0)]
if(j.bh(H.b([g],f))){e=j.a
d=e.length
e.push(g)
f=H.b([g],f)
j=j.c
if(j!=null)j.$2(d,f)}c.dx.push(g)}c.e=0
t=new B.fc(t)
t.e=$.b3()
t.f=H.b([],[V.bN])
t.r=H.b([],[V.Q])
t.x=H.b([],[P.as])
c.r=t
s=E.bD(b,b,b,s.f)
c.cy=s
c.f=null
c.db=E.bD(H.b([c.ch,c.cx,s],[u]),b,b,b)
c.dm()},
cJ:function(){var u=this.c.aR(C.i.ax(0.5),C.i.ax(0.5)),t=u==null?null:u.jc(C.i.ax(0.5),C.i.ax(0.5))
if(t==null)t=0
this.a.sY(0,new V.o(0.5,t+10,0.5))
this.a.sR(V.ct())},
hq:function(a){this.cJ()},
h4:function(a){if(this.d)this.a.x.sR(30)},
fL:function(a){var u=this,t=H.m(a,"$iaO").c,s=u.e
if(t.b.c){if(typeof s!=="number")return s.n()
t=s-1
u.e=t
if(t<0)u.e=19}else{if(typeof s!=="number")return s.k()
t=s+1
u.e=t
if(t>=20)u.e=0}u.dm()},
fJ:function(a){this.d_(H.m(a,"$iaO").c.a===69)},
fV:function(a){this.d_(H.m(a,"$iaS").x.a===2)},
d_:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.f
if((i==null?null:i.a)==null)return
u=i.a
if(a){i=j.e
if(i>>>0!==i||i>=20)return H.c($.f6,i)
t=$.f6[i]
s=u.gM(u)
r=j.f.b
i=$.av()
q=r.a
if((q&i.a)>>>0!==0)if(s>=200&&s<=205)return
if(t>=200&&t<=205){i=u.gds()
i=i.gM(i)
if(!(i>=100&&i<=117))return}if(t===106){i=$.au()
p=$.at()
if((q&(i.a|p.a))>>>0!==0)t=108
else{i=$.b6()
p=$.b5()
if((q&(i.a|p.a))>>>0!==0)t=107}}else if(t===115){i=$.au()
p=$.at()
if((q&(i.a|p.a))>>>0!==0)t=117
else{i=$.b6()
p=$.b5()
if((q&(i.a|p.a))>>>0!==0)t=116}}i=5&q
o=i!==0?(0|5-i)>>>0:0
i=40&q
if(i!==0)o=(o|40-i)>>>0
i=320&q
u=u.e2(new V.Q(i!==0?(o|320-i)>>>0:o))
i=j.a
i=i.gY(i)
n=$.kP().bQ(0,new V.x(i.a,i.b,i.c))
i=u.gcg()
q=n.a
if(typeof q!=="number")return q.k()
p=i.a
if(typeof p!=="number")return p.k()
m=$.u().a
if(p-m<q+n.d&&q-m<p+i.d){q=n.b
if(typeof q!=="number")return q.k()
p=i.b
if(typeof p!=="number")return p.k()
if(p-m<q+n.e&&q-m<p+i.e){q=n.c
if(typeof q!=="number")return q.k()
p=i.c
if(typeof p!=="number")return p.k()
i=p-m<q+n.f&&q-m<p+i.f}else i=!1}else i=!1
if(i)return}else t=0
l=u.f
if(l!=null){u.sM(0,t)
if(t===0){k=u.gdq()
i=k.gM(k)
if(i>=200&&i<=205)k.sM(0,0)}l.r=!0
i=u.a
if(i<=0){q=l.gad(l)
if(q!=null)q.r=!0}q=u.c
if(q<=0){p=l.gaM(l)
if(p!=null)p.r=!0}if(i>=15){i=l.gaf(l)
if(i!=null)i.r=!0}if(q>=15){i=l.gaC()
if(i!=null)i.r=!0}}},
fn:function(a,b){var u,t=this,s=b.n(0,a),r=new V.x(s.a,s.b,s.c)
if(r.D(r)<100){t.r.ij($.kP(),a,r)
s=t.r.e
u=$.av()
s=s.a
u=u.a
u=(s&u)>>>0===u
t.d=u
if(u)t.a.x.sR(0)}s=t.r.b
return s==null?b:s},
i4:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a==null
if((h?i:a.a)!=null){u=a.a
u=u.gM(u)===0}else u=!1
if(u)return!1
t=h?i:a.a
if(t!=null){a.d
h=t.gM(t)===0||t.gM(t)===100}else h=!1
if(h)a=i
j.f=a
if(a==null)j.cy.b=!1
else{h=$.U()
u=$.W()
s=B.kr(i,new Z.V(h.a|u.a))
r=new V.o(t.d+t.a+0.5,t.b+0.5,t.e+t.c+0.5)
q=s.a1(0)
u=$.eN()
h=$.eS()
p=$.eT()
o=$.eO()
s.a5(q,r,u,h,p,o,$.eU(),!0,1.1)
n=$.eQ()
m=$.eL()
l=$.eM()
k=$.eR()
s.a5(q,r,n,m,l,k,$.eP(),!0,1.1)
s.a5(q,r,u,m,n,h,$.kO(),!0,1.1)
s.a5(q,r,p,k,l,o,$.kQ(),!0,1.1)
s.a5(q,r,h,n,k,p,$.k4(),!0,1.1)
s.a5(q,r,o,l,m,u,$.kN(),!0,1.1)
s.cr(0,H.b([j.cy],[E.ac]))
j.cy.b=!0}return!0},
i3:function(a){var u,t,s,r,q,p,o,n=this.y.f,m=V.lj(n.V(V.di()),n.as(new V.x(0,0,-6))),l=m.a,k=m.d
if(typeof l!=="number")return l.k()
if(typeof k!=="number")return H.d(k)
u=m.b
t=m.e
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.d(t)
s=m.c
r=m.f
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.d(r)
q=V.lj(new V.o(l+k,u+t,s+r),new V.x(k,t,r).N(0))
r=this.c
p=new B.dd(r.ah(l,u,s),$.k5(),m,0)
for(o=0;!this.i4(p);){p=r.er(p.a,m,q,o);++o}},
dm:function(){var u=B.kr(this.c.a,null),t=this.e
if(t>>>0!==t||t>=20)return H.c($.f6,t)
u.cT(null,0,0,0,$.f6[t],!1,1)
u.cr(0,this.dx)}}
B.hv.prototype={
$1:function(a){var u,t=this.a,s=t.a
t=V.l6(-t.b.c.d)
if(!J.G(s.z,t)){u=s.z
s.z=t
s.Q=t.bo(0)
t=new D.A("velocityRotation",u,s.z)
t.b=!0
s.C(t)}}}
B.hB.prototype={
bJ:function(a){var u=this
u.c=a
u.hB()
C.U.dS(u.c.d,0,12288,0)
u.i0()
u.f5()
u.f3()
u.hZ()
u.f_()
u.hy()
u.eX()
u.hY()
a.cs()},
an:function(a,b,c){var u,t,s,r,q,p,o,n=this.a,m=this.c,l=(a+m.a)*c
m=(b+m.b)*c
u=new B.ap(l,m)
t=u.k(0,$.m4().i(0,l+m))
m=Math.floor(t.a)
l=Math.floor(t.b)
s=new B.ap(m,l)
r=s.k(0,$.kR().i(0,m+l))
q=t.n(0,s)
u=new B.fw(n.a,s,u.n(0,r),q)
u.e=0
u.am(1,0)
u.am(0,1)
n=q.a
l=q.b
p=n+l
if(p<=1){o=1-p
if(o>n||o>l)if(n>l)u.am(1,-1)
else u.am(-1,1)
else u.am(1,1)
u.am(0,0)}else{o=2-p
if(o<n||o<l)if(n>l)u.am(2,0)
else u.am(0,2)
else u.am(0,0)
u.am(1,1)}return u.e/47*0.5+0.5},
cc:function(a,b){var u=this.b,t=(a+3)*22+(b+3)
if(t<0||t>=484)return H.c(u,t)
return u[t]},
hB:function(){var u,t,s,r,q,p=this
for(u=0,t=-3;t<19;++t)for(s=-3;s<19;++s){r=C.d.ax(Math.pow(0.6*p.an(t,s,0.001)+0.3*p.an(t,s,0.01)+0.1*p.an(t,s,0.1),2)*48)
if(r>=48)r=47
q=p.b
if(u<0||u>=484)return H.c(q,u)
q[u]=r;++u}},
i0:function(){var u,t
for(u=0;u<16;++u)for(t=0;t<16;++t)this.i1(u,t)},
i1:function(a,b){var u,t,s,r,q=this.cc(a,b)
for(u=q-2,t=q<8,s=0;s<=q;++s){if(t)r=u<=s?104:103
else if(q===s)r=102
else r=u<=s?101:103
this.c.W(a,s,b,r)}},
f5:function(){var u,t
for(u=0;u<16;++u)for(t=0;t<16;++t)this.f6(u,t)},
f6:function(a,b){var u,t=this.c.cF(a,b,0)
if(t<8)for(u=8;u>t;--u)this.c.W(a,u,b,1)},
f3:function(){var u,t
for(u=-1;u<=16;++u)for(t=-1;t<=16;++t)this.f4(u,t)},
f4:function(a,b){var u,t,s,r,q,p
if(this.cc(a,b)<8)for(u=10;u>6;--u)for(t=-1;t<=1;++t)for(s=a+t,r=-1;r<=1;++r){q=b+r
p=this.c.ah(s,u,q)
if(p===102||p===105)this.c.W(s,u,q,104)}},
hZ:function(){var u,t
for(u=-3;u<19;++u)for(t=-3;t<19;++t)if(this.an(u,t,1.5)<0.1)this.f0(u,t)},
f0:function(a,b){var u,t,s=this,r=s.c,q=a+r.a
if(q>=-30)if(q<30){r=b+r.b
r=r>=-30&&r<30}else r=!1
else r=!1
if(r)return
u=s.cc(a,b)
if(u<10)return
for(t=1;t<8;++t)s.c.W(a,u+t,b,106)
s.f1(a,b)
s.f2(a,u+8,b)},
f1:function(a,b){var u,t,s,r,q,p
for(u=-3;u<=3;++u)for(t=u*u,s=a+u,r=-3;r<=3;++r)if(t+r*r<=10)for(q=b+r,p=47;p>=0;--p)if(this.c.ah(s,p,q)===102){this.c.W(s,p,q,105)
break}},
f2:function(a,b,c){var u,t,s,r,q,p,o,n
for(u=-3;u<=3;++u)for(t=u*u,s=a+u,r=-3;r<=3;++r)for(q=t+r*r,p=b+r,o=-3;o<=3;++o)if(q+o*o<=12){n=c+o
if(this.c.ah(s,p,n)===0)this.c.W(s,p,n,114)}},
hy:function(){var u,t,s,r,q,p=this
for(u=0;u<16;++u)for(t=u-400,s=u+400,r=0;r<16;++r)if(p.an(u,r,12.5)<0.1)p.b3(u,r,204)
else if(p.an(s,r,12.5)<0.1)p.b3(u,r,203)
else{q=r+400
if(p.an(u,q,12.5)<0.1)p.b3(u,r,202)
else if(p.an(s,q,12.5)<0.15)p.b3(u,r,200)
else if(p.an(t,r,12.5)<0.1)p.b3(u,r,201)
else if(p.an(u,r-400,12.5)<0.08)p.b3(u,r,205)}},
b3:function(a,b,c){var u=this.c.cF(a,b,0),t=this.c.ah(a,u,b)
if(t!==102&&t!==105)return
this.c.W(a,u+1,b,c)},
f_:function(){var u,t,s,r,q,p,o,n,m,l,k=this.c,j=k.a
if(j+16>=-30)if(j<=30){k=k.b
k=k+16<-30||k>30}else k=!0
else k=!0
if(k)return
u=new B.hD(this)
for(t=30;t>=0;t-=2){s=30-t+3
for(r=-s,k=t-1,q=r;q<=s;++q)for(p=r;p<=s;++p){u.$4(q,t,p,111)
u.$4(q,k,p,111)}for(j=r-1,o=r-2,n=s+1,m=s+2,l=-2;l<=2;++l){u.$4(j,t,l,109)
u.$4(j,k,l,109)
u.$4(o,k,l,109)
u.$4(n,t,l,109)
u.$4(n,k,l,109)
u.$4(m,k,l,109)
u.$4(l,t,j,109)
u.$4(l,k,j,109)
u.$4(l,k,o,109)
u.$4(l,t,n,109)
u.$4(l,k,n,109)
u.$4(l,k,m,109)}k=t+1
u.$4(j,k,2,109)
u.$4(o,t,2,109)
u.$4(j,k,-2,109)
u.$4(o,t,-2,109)
u.$4(n,k,2,109)
u.$4(m,t,2,109)
u.$4(n,k,-2,109)
u.$4(m,t,-2,109)
u.$4(2,k,j,109)
u.$4(2,t,o,109)
u.$4(-2,k,j,109)
u.$4(-2,t,o,109)
u.$4(2,k,n,109)
u.$4(2,t,m,109)
u.$4(-2,k,n,109)
u.$4(-2,t,m,109)}},
eX:function(){var u,t=this.c,s=t.a
if(s+16>=-36)if(s<=12){t=t.b
t=t+16<-28||t>-22}else t=!0
else t=!0
if(t)return
u=new B.hC(this,-12,40,-25)
t=[P.p]
u.$5(110,0,0,H.b([0,1,2,3,4,4,3,2,4,4,3,2,1,0],t),H.b([1,0,0,0,1,2,3,3,4,5,6,6,6,5],t))
u.$5(110,6,0,H.b([0,1,2,3,4,4,4,3,2,1,0,0,0,0,0,0],t),H.b([0,0,0,1,2,3,4,5,6,6,6,5,4,3,2,1],t))
u.$5(113,12,0,H.b([0,0,0,0,0,1,2,1,2,3,3,3,3,3],t),H.b([2,3,4,5,6,1,1,4,4,2,3,4,5,6],t))
u.$5(113,17,0,H.b([0,0,0,0,0,0,1,2,1,2,3,3,3,3],t),H.b([1,2,3,4,5,6,1,1,4,4,2,3,5,6],t))
u.$5(113,22,0,H.b([0,2,1,1,1,1,1,1],t),H.b([1,1,1,2,3,4,5,6],t))},
hY:function(){var u,t,s,r,q=this.c,p=q.a
if(p+16>=-3)if(p<=3){q=q.b
q=q+16<-3||q>3}else q=!0
else q=!0
if(q)return
u=new B.hE(this)
for(t=-3;t<=3;++t)for(s=0;s<=7;++s)for(q=2+s,r=-3;r<=3;++r)u.$4(t,q,r,0)
u.$4(0,2,0,113)
u.$4(0,3,0,112)
u.$4(0,4,0,112)
u.$4(0,5,0,112)
u.$4(0,6,0,112)}}
B.hD.prototype={
$4:function(a,b,c,d){var u=this.a.c
u.W(a-u.a,b,c-u.b,d)}}
B.hC.prototype={
$5:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l=this
for(u=d.length-1,t=l.a,s=l.b+b,r=l.c+c,q=l.d;u>=0;--u){p=t.c
if(u>=d.length)return H.c(d,u)
o=d[u]
if(typeof o!=="number")return H.d(o)
n=p.a
if(u>=e.length)return H.c(e,u)
m=e[u]
if(typeof m!=="number")return H.d(m)
p.W(s+o-n,r-m,q-p.b,a)}}}
B.hE.prototype={
$4:function(a,b,c,d){var u=this.a.c
u.W(a-u.a,b,c-u.b,d)}}
B.hU.prototype={
ih:function(a){var u,t,s
for(u=15;u>=0;--u)for(t=47;t>=-1;--t)for(s=15;s>=0;--s)this.cT(a,u,t,s,a.bR(u,t,s),!1,1)},
cr:function(a,b){var u,t,s,r
for(u=b.length-1;u>=0;--u){if(u>=b.length)return H.c(b,u)
t=b[u]
s=this.c
if(u>=s.length)return H.c(s,u)
r=s[u]
if(r!=null){t.scK(r)
t.b=r.f.length!==0}else{t.scK(null)
t.b=!1}}this.c=null},
a1:function(a){var u,t=this.c
if(a>>>0!==a||a>=t.length)return H.c(t,a)
u=t[a]
if(u==null){t=this.b
u=new F.dm(t)
u.b=t.gdA(t)
u.c=t.gbg(t)
u.d=0
u.f=H.b([],[P.F])
t=[P.p]
u.r=H.b([],t)
u.x=H.b([],t)
u.y=H.b([],t)
t=this.c
if(a>=t.length)return H.c(t,a)
t[a]=u}return u},
cT:function(a,b,c,d,e,f,g){var u,t,s,r=this,q=new V.o(b,c,d)
if(a!=null){b+=a.a
d+=a.b}u=new V.o(b+0.5,c+0.5,d+0.5)
if(e===0)return
else if(e===1)r.cU(a,u,q,e,!1,g)
else if(e>=200&&e<=205)if(e===201){t=r.a.c.j(0,201)
s=J.b2(t)
r.by(r.a1(s.j(t,0)),u,0.3141592653589793)
r.by(r.a1(s.j(t,0)),u,1.7278759594743864)
r.by(r.a1(s.j(t,0)),u,3.6128315516282616)
r.by(r.a1(s.j(t,0)),u,5.026548245743669)}else if(e===205)r.eZ(u)
else{t=r.a.c.j(0,e)
s=J.b2(t)
r.cX(r.a1(s.j(t,0)),u,0.39269908169872414,!0)
r.cX(r.a1(s.j(t,0)),u,1.9634954084936207,!0)}else if(e>=100&&e<=117)r.cU(a,u,q,e,!1,g)},
b6:function(a,b,c,d){var u=null,t=$.U(),s=$.W()
return F.bS(u,u,u,a,b,new V.O(c,d),u,new Z.V(t.a|s.a|$.a6().a),0)},
a5:function(a,b,c,d,e,f,g,h,i){var u=this,t=a.bk(H.b([u.b6(b.k(0,c.i(0,i)),g,0,0),u.b6(b.k(0,d.i(0,i)),g,0,1),u.b6(b.k(0,e.i(0,i)),g,1,1),u.b6(b.k(0,f.i(0,i)),g,1,0)],[F.bR])),s=t+1,r=t+2,q=t+3,p=[P.p]
a.bj(H.b([t,s,r,q],p))
if(h)a.bj(H.b([r,s,t,q],p))},
cU:function(a,b,c,d,e,f){var u=this,t=u.a.b.j(0,d)
if(u.b2(a,d,c,0,1,0))u.a5(u.a1(t.a),b,$.eN(),$.eS(),$.eT(),$.eO(),$.eU(),!1,f)
if(u.b2(a,d,c,0,-1,0))u.a5(u.a1(t.b),b,$.eQ(),$.eL(),$.eM(),$.eR(),$.eP(),!1,f)
if(u.b2(a,d,c,-1,0,0))u.a5(u.a1(t.c),b,$.eN(),$.eL(),$.eQ(),$.eS(),$.kO(),!1,f)
if(u.b2(a,d,c,1,0,0))u.a5(u.a1(t.d),b,$.eT(),$.eR(),$.eM(),$.eO(),$.kQ(),!1,f)
if(u.b2(a,d,c,0,0,1))u.a5(u.a1(t.e),b,$.eS(),$.eQ(),$.eR(),$.eT(),$.k4(),!1,f)
if(u.b2(a,d,c,0,0,-1))u.a5(u.a1(t.f),b,$.eO(),$.eM(),$.eL(),$.eN(),$.kN(),!1,f)},
b2:function(a,b,c,d,e,f){if(a==null)return!0
e+=J.ka(c.b)
if(e<0)return!1
if(e>=48)return!0
return B.mu(b,a.bR(d+J.ka(c.a),e,f+J.ka(c.c)))},
cX:function(a,b,c,d){var u=Math.cos(c)*0.5,t=Math.sin(c)*0.5,s=-t,r=-u
this.a5(a,b,new V.o(u,0,s),new V.o(u,-0.5,s),new V.o(r,-0.5,t),new V.o(r,0,t),new V.x(t,0,u),!0,1)},
by:function(a,b,c){var u=V.l6(c)
this.a5(a,b,u.V(new V.o(0.4,-0.1,-0.4)),u.V(new V.o(0,-0.5,0)),u.V(new V.o(0.4,-0.1,0.4)),u.V(new V.o(0.8,0,0)),$.eU(),!0,1)},
eZ:function(b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.a.c.j(0,205),b0=J.b2(a9),b1=a7.a1(b0.j(a9,0)),b2=a7.a1(b0.j(a9,1)),b3=a7.a1(b0.j(a9,2))
a9=[F.bR]
u=H.b([],a9)
t=H.b([],a9)
for(b0=b4.a,s=b4.b,r=b4.c,q=0;q<=2;q+=0.25){p=3.141592653589793*q
o=Math.cos(p)
n=Math.sin(p)
m=new V.ao(o,0,-n,0,1,0,n,0,o)
p=m.V(new V.o(0.07,-0.1,0))
l=p.a
if(typeof b0!=="number")return b0.k()
if(typeof l!=="number")return H.d(l)
k=p.b
if(typeof s!=="number")return s.k()
if(typeof k!=="number")return H.d(k)
p=p.c
if(typeof r!=="number")return r.k()
if(typeof p!=="number")return H.d(p)
j=$.k4()
i=m.as(j)
h=Math.abs(q-1)
g=$.U()
f=$.W()
u.push(F.bS(a8,a8,a8,new V.o(b0+l,s+k,r+p),i,new V.O(h,0),a8,new Z.V(g.a|f.a|$.a6().a),0))
f=m.V(new V.o(0.1,-0.5,0))
g=f.a
if(typeof g!=="number")return H.d(g)
i=f.b
if(typeof i!=="number")return H.d(i)
f=f.c
if(typeof f!=="number")return H.d(f)
j=m.as(j)
p=$.U()
k=$.W()
u.push(F.bS(a8,a8,a8,new V.o(b0+g,s+i,r+f),j,new V.O(h,1),a8,new Z.V(p.a|k.a|$.a6().a),0))
e=m.V(new V.o(0.1,-0.5,0))
d=m.V(new V.o(0.1,0,0))
k=e.a
if(typeof k!=="number")return H.d(k)
p=e.b
if(typeof p!=="number")return H.d(p)
h=e.c
if(typeof h!=="number")return H.d(h)
j=$.eP()
f=d.a
if(typeof f!=="number")return f.k()
i=d.c
if(typeof i!=="number")return i.k()
g=$.U()
l=$.W()
t.push(F.bS(a8,a8,a8,new V.o(b0+k,s+p,r+h),j,new V.O(f+0.5,i+0.5),a8,new Z.V(g.a|l.a|$.a6().a),0))}c=b3.bk(u)
b=b2.bk(t)
p=P.p
b3.i8(P.d6(u.length,new B.hV(c),p))
b2.bj(P.d6(t.length,new B.hW(b),p))
a=H.b([],a9)
a0=H.b([],a9)
a.push(a7.b6(b4.k(0,new V.o(0,0.05,0)),$.eU(),0.5,0.5))
a0.push(a7.b6(b4.k(0,new V.o(0,-0.1,0)),$.eP(),0.5,0.5))
for(q=0;q<=1;q+=0.1){a9=-6.283185307179586*q
o=Math.cos(a9)
n=Math.sin(a9)
a1=new V.ao(o,0,-n,0,1,0,n,0,o)
e=a1.V(new V.o(0.4,-0.15,0))
d=a1.V(new V.o(0.5,0,0))
a9=e.a
if(typeof b0!=="number")return b0.k()
if(typeof a9!=="number")return H.d(a9)
l=e.b
if(typeof s!=="number")return s.k()
if(typeof l!=="number")return H.d(l)
k=e.c
if(typeof r!=="number")return r.k()
if(typeof k!=="number")return H.d(k)
j=d.a
if(typeof j!=="number")return j.k()
i=d.c
if(typeof i!=="number")return i.k()
h=$.U()
g=$.W()
a.push(F.bS(a8,a8,a8,new V.o(b0+a9,s+l,r+k),a8,new V.O(j+0.5,i+0.5),a8,new Z.V(h.a|g.a|$.a6().a),0))
g=6.283185307179586*q
o=Math.cos(g)
n=Math.sin(g)
a2=new V.ao(o,0,-n,0,1,0,n,0,o)
a3=a2.V(new V.o(0.4,-0.15,0))
a4=a2.V(new V.o(0.5,0,0))
g=a3.a
if(typeof g!=="number")return H.d(g)
h=a3.b
if(typeof h!=="number")return H.d(h)
i=a3.c
if(typeof i!=="number")return H.d(i)
j=a4.a
if(typeof j!=="number")return j.k()
k=a4.c
if(typeof k!=="number")return k.k()
l=$.U()
a9=$.W()
a0.push(F.bS(a8,a8,a8,new V.o(b0+g,s+h,r+i),a8,new V.O(j+0.5,k+0.5),a8,new Z.V(l.a|a9.a|$.a6().a),0))}a5=b1.bk(a)
a6=b2.bk(a0)
b1.bj(P.d6(a.length,new B.hX(a5),p))
b2.bj(P.d6(a0.length,new B.hY(a6),p))}}
B.hV.prototype={
$1:function(a){return this.a+a}}
B.hW.prototype={
$1:function(a){return this.a+a}}
B.hX.prototype={
$1:function(a){return this.a+a}}
B.hY.prototype={
$1:function(a){return this.a+a}}
B.ie.prototype={
bJ:function(a){var u=this
u.a=a
u.ff()
if(u.au(-2,1))u.hR()
if(u.au(-1,1)){u.a3(5,9,3,7,2,11)
u.cY(6,10,4,5,1,9,1)}if(u.au(0,1)){u.a3(2,10,6,12,10,1)
u.a3(6,10,2,1,10,12)
u.a3(2,10,10,12,10,1)
u.a3(10,10,2,1,10,12)}if(u.au(1,1))u.hz()
if(u.au(1,0))u.hA()
if(u.au(1,-1))u.hx()
if(u.au(-2,0))u.i_()
if(u.au(-2,-1))u.fB()
if(u.au(-2,-2))u.hC()
a.cs()},
ff:function(){var u,t,s,r,q,p,o,n=this
for(u=0;u<16;++u)for(t=u===1,s=u!==0,r=0;r<16;++r){for(q=0;q<8;++q)n.a.W(u,q,r,103)
for(q=8;q<9;++q)n.a.W(u,q,r,101)
if(!s||r===0)n.a.W(u,9,r,113)
else{p=t&&r===1
o=n.a
if(p)o.W(u,9,r,110)
else o.W(u,9,r,102)}}},
hR:function(){var u,t,s,r,q,p,o
for(u=-6;u<=6;++u)for(t=u*u,s=8+u,r=-6;r<=6;++r)for(q=t+r*r,p=17+r,o=-6;o<=6;++o)if(q+o*o<=37)this.a.W(s,p,8+o,104)},
hz:function(){var u=new B.ig(this)
u.$3(0,0,0)
u.$3(0,1,1)
u.$3(0,2,2)
u.$3(1,2,3)
u.$3(1,1,4)
u.$3(1,0,5)
u.$3(2,0,0)
u.$3(2,0,2)
u.$3(2,1,1)
u.$3(2,1,3)
u.$3(2,2,2)
u.$3(2,2,4)},
hA:function(){var u=new B.ih(this)
u.$3(0,0,1)
u.$3(0,1,2)
u.$3(0,2,3)
u.$3(0,3,4)
u.$3(1,0,2)
u.$3(1,1,3)
u.$3(1,2,4)
u.$3(1,3,5)
u.$3(2,0,5)
u.$3(2,1,4)
u.$3(2,2,3)
u.$3(2,3,2)
u.$3(3,0,4)
u.$3(3,1,3)
u.$3(3,2,2)
u.$3(3,3,1)},
hx:function(){var u,t,s
for(u=0;u<20;u+=2)for(t=2+u,s=0;s<20;s+=2)this.a3(t,10,2+s,1,8,1)},
hC:function(){var u,t,s
for(u=0;u<6;++u){t=2+u
s=16-t*2+1
this.a3(t,10+u,t,s,1,s)}},
i_:function(){var u,t,s
for(u=0;u<4;++u){t=2+u*3
s=u+2
this.a3(3,10,t,12,s,1)
this.a3(3,10+u+1,t+1,12,1,2)
this.a3(3,10,t+3,12,s,1)}},
fB:function(){var u,t,s
for(u=0;u<6;++u){t=2+u*2
s=u+2
this.a3(3,10,t,12,s,1)
this.a3(3,10+u+1,t+1,12,1,1)
this.a3(3,10,t+2,12,s,1)}},
au:function(a,b){var u=this.a
return u.a===a*16&&u.b===b*16},
cY:function(a,b,c,d,e,f,g){var u,t,s,r,q
for(u=0;u<d;++u)for(t=a+u,s=0;s<e;++s)for(r=b+s,q=0;q<f;++q)this.a.W(t,r,c+q,g)},
a3:function(a,b,c,d,e,f){return this.cY(a,b,c,d,e,f,109)}}
B.ig.prototype={
$3:function(a,b,c){return this.a.a3(2+4*a,10+c,2+4*b,4,1,4)}}
B.ih.prototype={
$3:function(a,b,c){return this.a.a3(2+4*a,10,2+4*b,1,c,1)}}
B.dP.prototype={
eJ:function(a,b){var u,t,s,r,q,p,o=this,n=[B.cN]
o.c=H.b([],n)
o.d=H.b([],n)
o.e=H.b([],[E.ac])
o.r=null
n=o.a
if(n!=null)for(n=n.d,u=n.length,t=0;t<n.length;n.length===u||(0,H.t)(n),++t){s=n[t]
o.e.push(E.bD(null,null,null,s))}for(r=0;r<140;++r)o.c.push(B.mx(o))
for(n=o.b,q=-32;q<32;q+=16)for(p=-32;p<32;p+=16)n.bJ(o.ed(q,p))},
aR:function(a,b){var u,t,s,r
for(u=this.d,t=u.length,s=0;s<t;++s){r=u[s]
if(r.a===a&&r.b===b)return r}return},
ah:function(a,b,c){var u,t,s,r=J.k9(a),q=J.k9(b),p=J.k9(c),o=r<0?r-16+1:r,n=p<0?p-16+1:p
o=C.c.a6(o,16)*16
n=C.c.a6(n,16)*16
u=this.aR(o,n)
t=r-o
s=p-n
if(t<0)t+=16
return new B.aa(t,q,s<0?s+16:s,o,n,u)},
gc8:function(){var u=this.f.y.f.V(V.di())
return u},
jh:function(a){this.i5(this.gc8())},
ep:function(a){var u=this.gc8()
this.fj(u)
this.hD(u)},
ia:function(a){var u=this.a.x,t=u.b,s=u.e,r=s.length
t=(t+1)%r
if(t<r){u.b=t
u.c=s[t]
u=u.f
if(u!=null)u.dC()}},
ed:function(a,b){var u,t=this.c
if(0>=t.length)return H.c(t,-1)
u=t.pop()
u.a=a
u.b=b
u.x=u.f=!0
u.saH(!1)
this.d.push(u)
return u},
is:function(a){var u=C.b.U(this.d,a)
if(u){a.f=!1
a.saH(!1)
a.x=!0
a.r=!1
this.c.push(a)
return!0}return!1},
i5:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.ah(a.a,a.b,a.c),e=f.f
if(g.r!=e){g.r=e
e=f.d
u=e-128
t=e+128
s=f.e
r=s-128
q=s+128
for(p=g.d.length-1;p>=0;--p){o=g.d
if(p>=o.length)return H.c(o,p)
n=o[p]
o=n.a
if(u<=o)if(t>o){o=n.b
o=r>o||q<=o}else o=!0
else o=!0
if(o)g.is(n)}m=e-64
l=e+64
k=s-64
j=s+64
for(i=m;i<l;i+=16)for(h=k;h<j;h+=16)if(g.aR(i,h)==null)g.ed(i,h)}},
fj:function(a){var u,t,s,r,q,p,o,n,m,l,k=a.a
if(typeof k!=="number")return k.n()
u=k-8
k=a.c
if(typeof k!=="number")return k.n()
t=k-8
for(k=this.d,s=k.length,r=null,q=1e-9,p=0;p<s;++p){o=k[p]
if(o.x){n=o.a-u
m=o.b-t
l=n*n+m*m
if(r==null||q>l){q=l
r=o}}}if(r!=null)this.b.bJ(r)},
hD:function(a){var u,t,s,r,q,p,o,n,m,l,k=a.a
if(typeof k!=="number")return k.n()
u=k-8
k=a.c
if(typeof k!=="number")return k.n()
t=k-8
for(k=this.d,s=k.length,r=null,q=1e-9,p=0;p<s;++p){o=k[p]
if(o.f&&!o.x){n=o.a-u
m=o.b-t
l=n*n+m*m
if(r==null||q>l){q=l
r=o}}}if(r!=null){r.f=!1
r.r=!0}},
er:function(a,b,c,d){var u,t=a.gcg().j0(c)
if(t==null)return
else{u=t.d
a=a.e2(u)}if(a==null)return
return new B.dd(a,u,b,d)},
ag:function(a,b){var u,t,s,r,q=this.f.y.f,p=q.V(V.di()),o=q.V(new V.o(0,0,-16)),n=new V.O(p.a,p.c),m=new V.O(o.a,o.c)
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
r.je()
r.jf(n,m)}}};(function aliases(){var u=J.a.prototype
u.ez=u.h
u=J.d0.prototype
u.eA=u.h
u=T.cX.prototype
u.ey=u.bc
u.cL=u.h
u=O.cf.prototype
u.cM=u.aJ
u=O.aD.prototype
u.cN=u.aJ})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i,n=hunkHelpers._instance_1i
u(P,"oe","no",9)
u(P,"of","np",9)
u(P,"og","nq",9)
t(P,"lP","oc",5)
var m
s(m=E.ac.prototype,"gbN",0,0,null,["$1","$0"],["e7","iQ"],1,0)
s(m,"ge8",0,0,null,["$1","$0"],["e9","iR"],1,0)
s(m,"ge5",0,0,null,["$1","$0"],["e6","iP"],1,0)
s(m,"ge3",0,0,null,["$1","$0"],["e4","iM"],1,0)
r(m,"giK","iL",3)
r(m,"giN","iO",3)
s(m=E.dA.prototype,"gcO",0,0,null,["$1","$0"],["cQ","cP"],1,0)
q(m,"gj4","ei",5)
p(m=X.d1.prototype,"geM","eN",19)
r(m,"geK","eL",11)
r(m,"geO","eP",11)
p(m,"gbV","bW",0)
p(m,"gc6","c7",0)
p(m=X.dK.prototype,"gh1","h2",6)
p(m,"gfM","fN",6)
p(m,"gfW","fX",2)
p(m,"gc6","c7",12)
p(m,"gbV","bW",12)
p(m,"gh9","ha",2)
p(m,"ghd","he",2)
p(m,"gh_","h0",2)
p(m,"ghb","hc",2)
p(m,"gfY","fZ",2)
p(m,"ghf","hg",20)
p(m,"ghh","hi",6)
p(m,"ghv","hw",7)
p(m,"ghr","hs",7)
p(m,"ght","hu",7)
s(D.bC.prototype,"gfO",0,0,null,["$1","$0"],["aI","fP"],1,0)
s(m=D.d2.prototype,"gdd",0,0,null,["$1","$0"],["de","h7"],1,0)
p(m,"ghj","hk",21)
r(m,"gfC","fD",13)
r(m,"ghn","ho",13)
o(V.M.prototype,"gm","cw",14)
o(V.x.prototype,"gm","cw",14)
s(m=U.ca.prototype,"gaA",0,0,null,["$1","$0"],["C","ab"],1,0)
r(m,"geQ","eR",15)
r(m,"ghl","hm",15)
s(U.cd.prototype,"gaA",0,0,null,["$1","$0"],["C","ab"],1,0)
s(m=U.dL.prototype,"gaA",0,0,null,["$1","$0"],["C","ab"],1,0)
p(m,"gft","fu",0)
p(m,"gfv","fw",0)
p(m,"gfz","fA",0)
p(m,"gfo","fp",0)
p(m,"gfq","fs",0)
p(m,"ghW","hX",0)
p(m,"ghU","hV",0)
p(m,"ghS","hT",0)
s(m=U.dM.prototype,"gaA",0,0,null,["$1","$0"],["C","ab"],1,0)
p(m,"gh5","h6",0)
s(m=M.cU.prototype,"gb_",0,0,null,["$1","$0"],["b0","eS"],1,0)
r(m,"gfQ","fR",3)
r(m,"gfS","fT",3)
s(m=O.ce.prototype,"gbx",0,0,null,["$1","$0"],["a2","bX"],1,0)
s(m,"ghI",0,0,null,["$1","$0"],["df","hJ"],1,0)
r(m,"gfE","fF",16)
r(m,"gfG","fH",16)
s(O.cf.prototype,"gbx",0,0,null,["$1","$0"],["a2","bX"],1,0)
s(X.dg.prototype,"gcS",0,0,null,["$1","$0"],["b1","eV"],1,0)
t(B,"ow","oB",5)
p(m=B.dh.prototype,"ghp","hq",0)
p(m,"gh3","h4",0)
p(m,"gfK","fL",0)
p(m,"gfI","fJ",0)
p(m,"gfU","fV",0)
r(m,"gfm","fn",22)
p(m,"gi2","i3",0)
p(m=B.dP.prototype,"gjg","jh",8)
p(m,"geo","ep",8)
p(m,"gi9","ia",8)
n(m,"gjd","ag",0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a3,null)
s(P.a3,[H.kk,J.a,J.a7,P.e5,P.i,H.d5,P.fK,H.cV,H.iJ,H.ff,H.ix,P.bE,H.c7,H.em,P.aP,H.fQ,H.fR,H.fM,P.es,P.dQ,P.dw,P.ia,P.dB,P.jH,P.jr,P.jm,P.e4,P.q,P.jA,P.fX,P.fb,P.jG,P.jF,P.as,P.ab,P.ai,P.an,P.ht,P.du,P.dY,P.fE,P.n,P.S,P.bj,P.r,P.T,P.bT,P.iL,P.js,W.fj,W.H,W.cW,P.ju,P.ex,P.ji,P.jn,P.bP,L.hs,B.fw,B.ap,T.eW,T.cX,T.d8,T.hP,R.dv,R.dC,R.dD,R.is,O.aL,O.cg,E.f5,E.ac,E.hH,D.a2,E.dA,Z.dN,Z.j4,Z.c6,Z.aB,Z.V,D.f9,D.bF,X.cM,X.ae,X.fO,X.fU,X.bh,X.hj,X.it,X.dK,D.bC,D.af,D.hy,D.i3,V.X,V.am,V.fv,V.Q,V.bH,V.fJ,V.ao,V.aQ,V.O,V.o,V.bm,V.dl,V.dn,V.bN,V.M,V.x,U.cd,U.dL,U.dM,M.cU,A.cL,A.eZ,A.Y,A.cR,A.dj,A.dt,A.h2,A.cp,A.cr,A.cs,A.dG,A.iE,F.bG,F.d3,F.hx,F.dm,F.hQ,F.hR,F.hS,F.hT,F.bR,F.iX,F.iY,F.j0,O.dx,O.cf,O.h3,T.im,X.kc,X.ic,X.dg,V.hZ,B.aa,B.fa,B.cN,B.fc,B.L,B.hc,B.dd,B.dh,B.hB,B.hU,B.ie,B.dP])
s(J.a,[J.fL,J.d_,J.d0,J.bd,J.bI,J.be,H.ci,H.bi,W.h,W.eV,W.by,W.az,W.E,W.dS,W.aj,W.fn,W.fo,W.dU,W.cT,W.dW,W.fq,W.j,W.dZ,W.aM,W.fH,W.e0,W.aN,W.fT,W.hd,W.e6,W.e7,W.aR,W.e8,W.eb,W.aU,W.ef,W.eh,W.aX,W.ei,W.aY,W.en,W.aH,W.eq,W.iq,W.b_,W.et,W.iv,W.iQ,W.eA,W.eC,W.eE,W.eG,W.eI,P.bg,P.e2,P.bk,P.ed,P.hA,P.eo,P.bp,P.ev,P.f_,P.dR,P.dp,P.ek])
s(J.d0,[J.hu,J.br,J.bf])
t(J.kj,J.bd)
s(J.bI,[J.cZ,J.cY])
t(P.fS,P.e5)
s(P.fS,[H.dI,W.jc,W.jb,P.fA])
t(H.R,H.dI)
s(P.i,[H.ft,H.fY,H.j5])
s(P.fK,[H.fZ,H.j6])
t(H.fg,H.ff)
s(P.bE,[H.hp,H.fN,H.iI,H.f8,H.hN,P.df,P.ax,P.iK,P.iG,P.i5,P.fe,P.fm])
s(H.c7,[H.k2,H.id,H.jV,H.jW,H.jX,P.j8,P.j7,P.j9,P.ja,P.jz,P.jy,P.jO,P.jp,P.jq,P.fW,P.fr,P.fs,P.iP,P.iM,P.iN,P.iO,P.jB,P.jC,P.jE,P.jD,P.jJ,P.jI,P.jK,P.jL,W.hf,W.hh,W.hM,W.i9,W.jg,P.jw,P.jP,P.fB,P.fC,P.f1,E.hI,E.hJ,E.hK,E.ip,D.fx,D.fy,F.j2,F.j1,F.iZ,F.j_,O.h6,O.h7,O.h8,O.h9,O.ha,O.hb,T.io,V.i0,V.i_,B.k_,B.hv,B.hD,B.hC,B.hE,B.hV,B.hW,B.hX,B.hY,B.ig,B.ih])
s(H.id,[H.i7,H.c4])
t(P.fV,P.aP)
t(H.J,P.fV)
t(H.d4,H.ft)
t(H.da,H.bi)
s(H.da,[H.cv,H.cx])
t(H.cw,H.cv)
t(H.cj,H.cw)
t(H.cy,H.cx)
t(H.db,H.cy)
s(H.db,[H.hk,H.hl,H.hm,H.hn,H.ho,H.dc,H.bL])
t(P.jo,P.jH)
t(P.jl,P.jr)
t(P.ey,P.fX)
t(P.dJ,P.ey)
s(P.fb,[P.f3,P.fu])
t(P.fh,P.ia)
s(P.fh,[P.f4,P.iT,P.iS])
t(P.iR,P.fu)
s(P.ai,[P.F,P.p])
s(P.ax,[P.bn,P.fI])
t(P.je,P.bT)
s(W.h,[W.D,W.fz,W.ch,W.aW,W.cz,W.aZ,W.aI,W.cB,W.j3,W.cu,P.f2,P.bx])
s(W.D,[W.a1,W.b9])
s(W.a1,[W.l,P.k])
s(W.l,[W.eX,W.eY,W.bA,W.fD,W.cc,W.hO])
t(W.fi,W.az)
t(W.c8,W.dS)
s(W.aj,[W.fk,W.fl])
t(W.dV,W.dU)
t(W.cS,W.dV)
t(W.dX,W.dW)
t(W.fp,W.dX)
t(W.aA,W.by)
t(W.e_,W.dZ)
t(W.c9,W.e_)
t(W.e1,W.e0)
t(W.cb,W.e1)
t(W.bq,W.j)
s(W.bq,[W.bJ,W.aF,W.bO])
t(W.he,W.e6)
t(W.hg,W.e7)
t(W.e9,W.e8)
t(W.hi,W.e9)
t(W.ec,W.eb)
t(W.de,W.ec)
t(W.eg,W.ef)
t(W.hw,W.eg)
t(W.hL,W.eh)
t(W.cA,W.cz)
t(W.i1,W.cA)
t(W.ej,W.ei)
t(W.i2,W.ej)
t(W.i8,W.en)
t(W.er,W.eq)
t(W.ii,W.er)
t(W.cC,W.cB)
t(W.ij,W.cC)
t(W.eu,W.et)
t(W.iu,W.eu)
t(W.bs,W.aF)
t(W.eB,W.eA)
t(W.jd,W.eB)
t(W.dT,W.cT)
t(W.eD,W.eC)
t(W.jh,W.eD)
t(W.eF,W.eE)
t(W.ea,W.eF)
t(W.eH,W.eG)
t(W.jt,W.eH)
t(W.eJ,W.eI)
t(W.jx,W.eJ)
t(W.jf,P.dw)
t(P.jv,P.ju)
t(P.ag,P.jn)
t(P.e3,P.e2)
t(P.fP,P.e3)
t(P.ee,P.ed)
t(P.hq,P.ee)
t(P.ep,P.eo)
t(P.ib,P.ep)
t(P.ew,P.ev)
t(P.iw,P.ew)
t(P.f0,P.dR)
t(P.hr,P.bx)
t(P.el,P.ek)
t(P.i4,P.el)
s(T.cX,[T.aT,R.dF])
s(D.a2,[E.i6,D.bb,D.bc,D.A,X.aO,X.hz])
s(E.f5,[Z.bz,A.dr,T.dy])
s(O.aL,[X.d1,D.d2,U.ca])
s(X.hz,[X.d7,X.aS,X.dE])
s(D.f9,[U.fd,U.a8,F.kq])
s(U.a8,[U.cP,U.dq])
t(A.h_,A.dr)
s(A.dG,[A.dH,A.iB,A.iC,A.iD,A.iz,A.a_,A.iA,A.K,A.co,A.iF,A.cq,A.ak,A.a5,A.bQ])
t(O.ce,O.dx)
s(O.cf,[O.h0,O.h1,O.aD])
s(O.aD,[O.h4,O.h5])
t(T.dz,T.dy)
s(T.dz,[T.ik,T.il])
t(X.fF,X.ic)
u(H.dI,H.iJ)
u(H.cv,P.q)
u(H.cw,H.cV)
u(H.cx,P.q)
u(H.cy,H.cV)
u(P.e5,P.q)
u(P.ey,P.jA)
u(W.dS,W.fj)
u(W.dU,P.q)
u(W.dV,W.H)
u(W.dW,P.q)
u(W.dX,W.H)
u(W.dZ,P.q)
u(W.e_,W.H)
u(W.e0,P.q)
u(W.e1,W.H)
u(W.e6,P.aP)
u(W.e7,P.aP)
u(W.e8,P.q)
u(W.e9,W.H)
u(W.eb,P.q)
u(W.ec,W.H)
u(W.ef,P.q)
u(W.eg,W.H)
u(W.eh,P.aP)
u(W.cz,P.q)
u(W.cA,W.H)
u(W.ei,P.q)
u(W.ej,W.H)
u(W.en,P.aP)
u(W.eq,P.q)
u(W.er,W.H)
u(W.cB,P.q)
u(W.cC,W.H)
u(W.et,P.q)
u(W.eu,W.H)
u(W.eA,P.q)
u(W.eB,W.H)
u(W.eC,P.q)
u(W.eD,W.H)
u(W.eE,P.q)
u(W.eF,W.H)
u(W.eG,P.q)
u(W.eH,W.H)
u(W.eI,P.q)
u(W.eJ,W.H)
u(P.e2,P.q)
u(P.e3,W.H)
u(P.ed,P.q)
u(P.ee,W.H)
u(P.eo,P.q)
u(P.ep,W.H)
u(P.ev,P.q)
u(P.ew,W.H)
u(P.dR,P.aP)
u(P.ek,P.q)
u(P.el,W.H)})()
var v={mangledGlobalNames:{p:"int",F:"double",ai:"num",r:"String",as:"bool",bj:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,args:[D.a2]},{func:1,ret:-1,opt:[D.a2]},{func:1,ret:-1,args:[W.aF]},{func:1,ret:-1,args:[P.p,[P.i,E.ac]]},{func:1,ret:P.bj,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.j]},{func:1,ret:-1,args:[W.bO]},{func:1,ret:-1,args:[,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1,args:[P.p,[P.i,X.ae]]},{func:1,ret:-1,args:[W.bJ]},{func:1,ret:-1,args:[P.p,[P.i,D.af]]},{func:1,ret:P.F},{func:1,ret:-1,args:[P.p,[P.i,U.a8]]},{func:1,ret:-1,args:[P.p,[P.i,V.aQ]]},{func:1,ret:P.bj,args:[,]},{func:1,ret:P.bP,args:[,,]},{func:1,ret:P.as,args:[[P.i,X.ae]]},{func:1,ret:-1,args:[W.bs]},{func:1,ret:P.as,args:[[P.i,D.af]]},{func:1,ret:V.o,args:[V.o,V.o]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.j=W.bA.prototype
C.O=J.a.prototype
C.b=J.bd.prototype
C.i=J.cY.prototype
C.c=J.cZ.prototype
C.l=J.d_.prototype
C.d=J.bI.prototype
C.a=J.be.prototype
C.P=J.bf.prototype
C.U=H.bL.prototype
C.x=J.hu.prototype
C.V=P.dp.prototype
C.p=J.br.prototype
C.y=W.bs.prototype
C.z=W.cu.prototype
C.W=new P.f4()
C.A=new P.f3()
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.B=function() {
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
C.G=function(getTagFallback) {
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
C.C=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.D=function(hooks) {
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
C.F=function(hooks) {
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
C.E=function(hooks) {
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

C.H=new P.ht()
C.e=new P.iR()
C.I=new P.iT()
C.J=new P.ji()
C.f=new P.jo()
C.k=new P.an(0)
C.K=new P.an(25e4)
C.L=new P.an(5e6)
C.M=new P.an(7e4)
C.N=new P.an(75e4)
C.t=H.b(u([127,2047,65535,1114111]),[P.p])
C.m=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.p])
C.n=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.p])
C.o=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.p])
C.R=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.p])
C.u=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.p])
C.h=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.p])
C.v=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.p])
C.S=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.p])
C.w=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.p])
C.Q=H.b(u([]),[P.r])
C.T=new H.fg(0,{},C.Q,[P.r,P.r])})();(function staticFields(){$.ay=0
$.c5=null
$.l_=null
$.lU=null
$.lO=null
$.lY=null
$.jQ=null
$.jY=null
$.kJ=null
$.bW=null
$.cE=null
$.cF=null
$.kE=!1
$.ar=C.f
$.a9=[]
$.l7=null
$.lb=null
$.le=null
$.ck=null
$.lk=null
$.lt=null
$.ly=null
$.lx=null
$.iU=null
$.iV=null
$.lv=null
$.iW=null
$.lw=null
$.ld=null
$.f6=H.b([101,102,103,104,105,106,115,109,110,111,112,113,1,114,200,201,202,203,204,205],[P.p])})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oX","m2",function(){return H.lS("_$dart_dartClosure")})
u($,"pd","kV",function(){return H.lS("_$dart_js")})
u($,"pe","m7",function(){return H.aJ(H.iy({
toString:function(){return"$receiver$"}}))})
u($,"pf","m8",function(){return H.aJ(H.iy({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pg","m9",function(){return H.aJ(H.iy(null))})
u($,"ph","ma",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pk","md",function(){return H.aJ(H.iy(void 0))})
u($,"pl","me",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pj","mc",function(){return H.aJ(H.lo(null))})
u($,"pi","mb",function(){return H.aJ(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pn","mg",function(){return H.aJ(H.lo(void 0))})
u($,"pm","mf",function(){return H.aJ(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pA","kW",function(){return P.nn()})
u($,"po","mh",function(){return P.nj()})
u($,"pB","mk",function(){return H.mS(H.bV(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.p])))})
u($,"pC","ml",function(){return P.n7("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pD","mm",function(){return P.nK()})
u($,"oY","m3",function(){return H.b([B.aG(5,2),B.aG(2,5),B.aG(-5,2),B.aG(-2,5),B.aG(5,-2),B.aG(2,-5),B.aG(-5,-2),B.aG(-2,-5)],[B.ap])})
u($,"p_","m4",function(){return B.aG(-0.211324865405187,-0.211324865405187)})
u($,"oZ","kR",function(){return B.aG(0.366025403784439,0.366025403784439)})
u($,"pu","mj",function(){return Z.aq(0)})
u($,"pw","U",function(){return Z.aq(1)})
u($,"pv","a6",function(){return Z.aq(2)})
u($,"pq","b8",function(){return Z.aq(4)})
u($,"px","W",function(){return Z.aq(8)})
u($,"py","bu",function(){return Z.aq(16)})
u($,"pr","cH",function(){return Z.aq(32)})
u($,"ps","cI",function(){return Z.aq(64)})
u($,"pt","mi",function(){return Z.aq(96)})
u($,"pz","c3",function(){return Z.aq(128)})
u($,"pp","b7",function(){return Z.aq(256)})
u($,"oH","m1",function(){return new V.fv(1e-9)})
u($,"oG","u",function(){return $.m1()})
u($,"p3","b3",function(){return V.ad(0)})
u($,"p0","kS",function(){return V.ad(511)})
u($,"p6","au",function(){return V.ad(1)})
u($,"p4","kT",function(){return V.ad(2)})
u($,"p5","at",function(){return V.ad(4)})
u($,"p9","av",function(){return V.ad(8)})
u($,"p7","kU",function(){return V.ad(16)})
u($,"p8","b4",function(){return V.ad(32)})
u($,"pc","b6",function(){return V.ad(64)})
u($,"pa","m6",function(){return V.ad(128)})
u($,"pb","b5",function(){return V.ad(256)})
u($,"p2","k5",function(){return V.ad(146)})
u($,"p1","m5",function(){return V.ad(365)})
u($,"oU","kP",function(){return V.hG(-0.25,-1.5,-0.25,0.5,1.9,0.5)})
u($,"oW","eU",function(){return V.kx()})
u($,"oN","eP",function(){var t=$.lv
return t==null?$.lv=V.lu(0,-1,0):t})
u($,"oT","kO",function(){var t=$.lx
return t==null?$.lx=V.lu(1,0,0):t})
u($,"oV","kQ",function(){return V.lz()})
u($,"oQ","k4",function(){return V.ky()})
u($,"oK","kN",function(){return V.lA()})
u($,"oR","eS",function(){return V.bl(-0.5,0.5,0.5)})
u($,"oS","eT",function(){return V.bl(0.5,0.5,0.5)})
u($,"oO","eQ",function(){return V.bl(-0.5,-0.5,0.5)})
u($,"oP","eR",function(){return V.bl(0.5,-0.5,0.5)})
u($,"oL","eN",function(){return V.bl(-0.5,0.5,-0.5)})
u($,"oM","eO",function(){return V.bl(0.5,0.5,-0.5)})
u($,"oI","eL",function(){return V.bl(-0.5,-0.5,-0.5)})
u($,"oJ","eM",function(){return V.bl(0.5,-0.5,-0.5)})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.ci,DataView:H.bi,ArrayBufferView:H.bi,Float32Array:H.cj,Float64Array:H.cj,Int16Array:H.hk,Int32Array:H.hl,Int8Array:H.hm,Uint16Array:H.hn,Uint32Array:H.ho,Uint8ClampedArray:H.dc,CanvasPixelArray:H.dc,Uint8Array:H.bL,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.eV,HTMLAnchorElement:W.eX,HTMLAreaElement:W.eY,Blob:W.by,HTMLCanvasElement:W.bA,CDATASection:W.b9,CharacterData:W.b9,Comment:W.b9,ProcessingInstruction:W.b9,Text:W.b9,CSSPerspective:W.fi,CSSCharsetRule:W.E,CSSConditionRule:W.E,CSSFontFaceRule:W.E,CSSGroupingRule:W.E,CSSImportRule:W.E,CSSKeyframeRule:W.E,MozCSSKeyframeRule:W.E,WebKitCSSKeyframeRule:W.E,CSSKeyframesRule:W.E,MozCSSKeyframesRule:W.E,WebKitCSSKeyframesRule:W.E,CSSMediaRule:W.E,CSSNamespaceRule:W.E,CSSPageRule:W.E,CSSRule:W.E,CSSStyleRule:W.E,CSSSupportsRule:W.E,CSSViewportRule:W.E,CSSStyleDeclaration:W.c8,MSStyleCSSProperties:W.c8,CSS2Properties:W.c8,CSSImageValue:W.aj,CSSKeywordValue:W.aj,CSSNumericValue:W.aj,CSSPositionValue:W.aj,CSSResourceValue:W.aj,CSSUnitValue:W.aj,CSSURLImageValue:W.aj,CSSStyleValue:W.aj,CSSMatrixComponent:W.az,CSSRotation:W.az,CSSScale:W.az,CSSSkew:W.az,CSSTranslation:W.az,CSSTransformComponent:W.az,CSSTransformValue:W.fk,CSSUnparsedValue:W.fl,DataTransferItemList:W.fn,DOMException:W.fo,ClientRectList:W.cS,DOMRectList:W.cS,DOMRectReadOnly:W.cT,DOMStringList:W.fp,DOMTokenList:W.fq,Element:W.a1,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,AbsoluteOrientationSensor:W.h,Accelerometer:W.h,AccessibleNode:W.h,AmbientLightSensor:W.h,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BackgroundFetchRegistration:W.h,BatteryManager:W.h,BroadcastChannel:W.h,CanvasCaptureMediaStreamTrack:W.h,DedicatedWorkerGlobalScope:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,Gyroscope:W.h,XMLHttpRequest:W.h,XMLHttpRequestEventTarget:W.h,XMLHttpRequestUpload:W.h,LinearAccelerationSensor:W.h,Magnetometer:W.h,MediaDevices:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MIDIAccess:W.h,MIDIInput:W.h,MIDIOutput:W.h,MIDIPort:W.h,NetworkInformation:W.h,Notification:W.h,OffscreenCanvas:W.h,OrientationSensor:W.h,PaymentRequest:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationConnection:W.h,PresentationConnectionList:W.h,PresentationRequest:W.h,RelativeOrientationSensor:W.h,RemotePlayback:W.h,RTCDataChannel:W.h,DataChannel:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,Sensor:W.h,ServiceWorker:W.h,ServiceWorkerContainer:W.h,ServiceWorkerGlobalScope:W.h,ServiceWorkerRegistration:W.h,SharedWorker:W.h,SharedWorkerGlobalScope:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,VR:W.h,VRDevice:W.h,VRDisplay:W.h,VRSession:W.h,VisualViewport:W.h,WebSocket:W.h,Worker:W.h,WorkerGlobalScope:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,Clipboard:W.h,MojoInterfaceInterceptor:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioScheduledSourceNode:W.h,AudioWorkletNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConstantSourceNode:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.aA,FileList:W.c9,FileWriter:W.fz,HTMLFormElement:W.fD,Gamepad:W.aM,History:W.fH,HTMLCollection:W.cb,HTMLFormControlsCollection:W.cb,HTMLOptionsCollection:W.cb,ImageData:W.aN,HTMLImageElement:W.cc,KeyboardEvent:W.bJ,Location:W.fT,MediaList:W.hd,MessagePort:W.ch,MIDIInputMap:W.he,MIDIOutputMap:W.hg,MimeType:W.aR,MimeTypeArray:W.hi,PointerEvent:W.aF,MouseEvent:W.aF,DragEvent:W.aF,Document:W.D,DocumentFragment:W.D,HTMLDocument:W.D,ShadowRoot:W.D,XMLDocument:W.D,Attr:W.D,DocumentType:W.D,Node:W.D,NodeList:W.de,RadioNodeList:W.de,Plugin:W.aU,PluginArray:W.hw,RTCStatsReport:W.hL,HTMLSelectElement:W.hO,SourceBuffer:W.aW,SourceBufferList:W.i1,SpeechGrammar:W.aX,SpeechGrammarList:W.i2,SpeechRecognitionResult:W.aY,Storage:W.i8,CSSStyleSheet:W.aH,StyleSheet:W.aH,TextTrack:W.aZ,TextTrackCue:W.aI,VTTCue:W.aI,TextTrackCueList:W.ii,TextTrackList:W.ij,TimeRanges:W.iq,Touch:W.b_,TouchEvent:W.bO,TouchList:W.iu,TrackDefaultList:W.iv,CompositionEvent:W.bq,FocusEvent:W.bq,TextEvent:W.bq,UIEvent:W.bq,URL:W.iQ,VideoTrackList:W.j3,WheelEvent:W.bs,Window:W.cu,DOMWindow:W.cu,CSSRuleList:W.jd,ClientRect:W.dT,DOMRect:W.dT,GamepadList:W.jh,NamedNodeMap:W.ea,MozNamedAttrMap:W.ea,SpeechRecognitionResultList:W.jt,StyleSheetList:W.jx,SVGLength:P.bg,SVGLengthList:P.fP,SVGNumber:P.bk,SVGNumberList:P.hq,SVGPointList:P.hA,SVGStringList:P.ib,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.bp,SVGTransformList:P.iw,AudioBuffer:P.f_,AudioParamMap:P.f0,AudioTrackList:P.f2,AudioContext:P.bx,webkitAudioContext:P.bx,BaseAudioContext:P.bx,OfflineAudioContext:P.hr,WebGL2RenderingContext:P.dp,SQLResultSetRowList:P.i4})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.da.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.cj.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.cy.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
W.cz.$nativeSuperclassTag="EventTarget"
W.cA.$nativeSuperclassTag="EventTarget"
W.cB.$nativeSuperclassTag="EventTarget"
W.cC.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.lW,[])
else B.lW([])})})()
//# sourceMappingURL=main.dart.js.map
