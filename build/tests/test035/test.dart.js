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
a[c]=function(){a[c]=function(){H.oS(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kU(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kx:function kx(){},
jX:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
lb:function(){return new P.hQ("No element")},
dG:function(a,b,c,d,e){if(c-b<=32)H.no(a,b,c,d,e)
else H.nn(a,b,c,d,e)},
no:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.b(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.b(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.W()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.b(a,q)
C.a.j(a,s,a[q])
s=q}C.a.j(a,s,t)}},
nn:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.a3(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.a3(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.W()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.W()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.W()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.W()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.W()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.W()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.W()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.W()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.W()
if(a1>0){p=q
q=r
r=p}C.a.j(a2,d,u)
C.a.j(a2,b,s)
C.a.j(a2,c,q)
if(a3<0||a3>=a2.length)return H.b(a2,a3)
C.a.j(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.b(a2,a4)
C.a.j(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.N(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.M()
if(k<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.a.j(a2,m,a2[o])
C.a.j(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.W()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.a.j(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.a.j(a2,o,a2[n])
C.a.j(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.b(a2,n)
C.a.j(a2,m,a2[n])
C.a.j(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.M()
if(g<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.a.j(a2,m,a2[o])
C.a.j(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.W()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.W()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.M()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.a.j(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.a.j(a2,o,a2[n])
C.a.j(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.a.j(a2,m,a2[n])
C.a.j(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.b(a2,a1)
C.a.j(a2,a3,a2[a1])
C.a.j(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.b(a2,a1)
C.a.j(a2,a4,a2[a1])
C.a.j(a2,a1,r)
H.dG(a2,a3,o-2,a5,a6)
H.dG(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.b(a2,o)
if(!J.N(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.b(a2,n)
if(!J.N(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.a.j(a2,m,a2[o])
C.a.j(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.M()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.a.j(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.a.j(a2,o,a2[n])
C.a.j(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.a.j(a2,m,a2[n])
C.a.j(a2,n,l)}n=j
break}}}H.dG(a2,o,n,a5,a6)}else H.dG(a2,o,n,a5,a6)},
a2:function a2(a){this.a=a},
fp:function fp(){},
dn:function dn(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fV:function fV(a,b,c){this.a=a
this.b=b
this.$ti=c},
fW:function fW(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
iO:function iO(a,b,c){this.a=a
this.b=b
this.$ti=c},
iP:function iP(a,b,c){this.a=a
this.b=b
this.$ti=c},
bM:function bM(){},
cJ:function cJ(){},
dR:function dR(){},
mO:function(){throw H.d(P.F("Cannot modify unmodifiable Map"))},
cb:function(a){var u,t=H.oU(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oA:function(a){return v.types[H.ac(a)]},
oG:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iJ},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ar(a)
if(typeof u!=="string")throw H.d(H.bb(a))
return u},
cy:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nf:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.b(p,3)
u=H.U(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.ae(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.E(s,q)|32)>t)return}return parseInt(a,b)},
cz:function(a){return H.n6(a)+H.kR(H.bB(a),0,null)},
n6:function(a){var u,t,s,r,q,p,o,n=J.T(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.J||!!n.$ic_){r=C.q(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cb(t.length>1&&C.b.E(t,0)===36?C.b.ab(t,1):t)},
n7:function(){if(!!self.location)return self.location.href
return},
lo:function(a){var u,t,s,r,q=J.aF(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
ng:function(a){var u,t,s,r=H.e([],[P.l])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.bb(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.aH(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.d(H.bb(s))}return H.lo(r)},
lp:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.bb(s))
if(s<0)throw H.d(H.bb(s))
if(s>65535)return H.ng(a)}return H.lo(a)},
nh:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dA:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aH(u,10))>>>0,56320|u&1023)}}throw H.d(P.ae(a,0,1114111,null,null))},
bQ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ne:function(a){var u=H.bQ(a).getFullYear()+0
return u},
nc:function(a){var u=H.bQ(a).getMonth()+1
return u},
n8:function(a){var u=H.bQ(a).getDate()+0
return u},
n9:function(a){var u=H.bQ(a).getHours()+0
return u},
nb:function(a){var u=H.bQ(a).getMinutes()+0
return u},
nd:function(a){var u=H.bQ(a).getSeconds()+0
return u},
na:function(a){var u=H.bQ(a).getMilliseconds()+0
return u},
p:function(a){throw H.d(H.bb(a))},
b:function(a,b){if(a==null)J.aF(a)
throw H.d(H.c6(a,b))},
c6:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aT(!0,b,s,null)
u=H.ac(J.aF(a))
if(!(b<0)){if(typeof u!=="number")return H.p(u)
t=b>=u}else t=!0
if(t)return P.V(b,a,s,null,u)
return P.dC(b,s)},
ov:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bR(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bR(a,c,!0,b,"end",u)
return new P.aT(!0,b,"end",null)},
bb:function(a){return new P.aT(!0,a,null,null)},
d:function(a){var u
if(a==null)a=new P.dx()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mi})
u.name=""}else u.toString=H.mi
return u},
mi:function(){return J.ar(this.dartException)},
y:function(a){throw H.d(a)},
v:function(a){throw H.d(P.bJ(a))},
b7:function(a){var u,t,s,r,q,p
a=H.mg(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.e([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.i8(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
i9:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ly:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lj:function(a,b){return new H.hn(a,b==null?null:b.method)},
ky:function(a,b){var u=b==null,t=u?null:b.method
return new H.fH(a,t,u?null:b.receiver)},
aE:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kj(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aH(t,16)&8191)===10)switch(s){case 438:return f.$1(H.ky(H.j(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lj(H.j(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.ml()
q=$.mm()
p=$.mn()
o=$.mo()
n=$.mr()
m=$.ms()
l=$.mq()
$.mp()
k=$.mu()
j=$.mt()
i=r.a7(u)
if(i!=null)return f.$1(H.ky(H.U(u),i))
else{i=q.a7(u)
if(i!=null){i.method="call"
return f.$1(H.ky(H.U(u),i))}else{i=p.a7(u)
if(i==null){i=o.a7(u)
if(i==null){i=n.a7(u)
if(i==null){i=m.a7(u)
if(i==null){i=l.a7(u)
if(i==null){i=o.a7(u)
if(i==null){i=k.a7(u)
if(i==null){i=j.a7(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lj(H.U(u),i))}}return f.$1(new H.im(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dI()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aT(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dI()
return a},
c9:function(a){var u
if(a==null)return new H.ev(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ev(a)},
oz:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.j(0,a[u],a[t])}return b},
oF:function(a,b,c,d,e,f){H.f(a,"$iks")
switch(H.ac(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.B("Unsupported number of arguments for wrapped closure"))},
c5:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oF)
a.$identity=u
return u},
mN:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hR().constructor.prototype):Object.create(new H.cd(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aU
if(typeof t!=="number")return t.v()
$.aU=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.l8(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mJ(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.l8(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mJ:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oA,a)
if(typeof a=="function")if(b)return a
else{u=c?H.l6:H.kp
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
mK:function(a,b,c,d){var u=H.kp
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
l8:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mM(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mK(t,!r,u,b)
if(t===0){r=$.aU
if(typeof r!=="number")return r.v()
$.aU=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ce
return new Function(r+H.j(q==null?$.ce=H.f7("self"):q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aU
if(typeof r!=="number")return r.v()
$.aU=r+1
o+=r
r="return function("+o+"){return this."
q=$.ce
return new Function(r+H.j(q==null?$.ce=H.f7("self"):q)+"."+H.j(u)+"("+o+");}")()},
mL:function(a,b,c,d){var u=H.kp,t=H.l6
switch(b?-1:a){case 0:throw H.d(H.nl("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mM:function(a,b){var u,t,s,r,q,p,o,n=$.ce
if(n==null)n=$.ce=H.f7("self")
u=$.l5
if(u==null)u=$.l5=H.f7("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mL(s,!q,t,b)
if(s===1){n="return function(){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+");"
u=$.aU
if(typeof u!=="number")return u.v()
$.aU=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+", "+o+");"
u=$.aU
if(typeof u!=="number")return u.v()
$.aU=u+1
return new Function(n+u+"}")()},
kU:function(a,b,c,d,e,f,g){return H.mN(a,b,c,d,!!e,!!f,g)},
kp:function(a){return a.a},
l6:function(a){return a.c},
f7:function(a){var u,t,s,r=new H.cd("self","target","receiver","name"),q=J.kv(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
E:function(a){if(a==null)H.op("boolean expression must not be null")
return a},
U:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.aS(a,"String"))},
ow:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aS(a,"double"))},
mc:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aS(a,"num"))},
m0:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.aS(a,"bool"))},
ac:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.aS(a,"int"))},
me:function(a,b){throw H.d(H.aS(a,H.cb(H.U(b).substring(2))))},
oM:function(a,b){throw H.d(H.mI(a,H.cb(H.U(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.T(a)[b])return a
H.me(a,b)},
x:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.oM(a,b)},
pz:function(a){if(a==null)return a
if(!!J.T(a).$ic)return a
throw H.d(H.aS(a,"List<dynamic>"))},
ma:function(a,b){var u
if(a==null)return a
u=J.T(a)
if(!!u.$ic)return a
if(u[b])return a
H.me(a,b)},
m5:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ac(u)]
else return a.$S()}return},
eR:function(a,b){var u
if(typeof a=="function")return!0
u=H.m5(J.T(a))
if(u==null)return!1
return H.lQ(u,null,b,null)},
o:function(a,b){var u,t
if(a==null)return a
if($.kO)return a
$.kO=!0
try{if(H.eR(a,b))return a
u=H.kc(b)
t=H.aS(a,u)
throw H.d(t)}finally{$.kO=!1}},
kV:function(a,b){if(a!=null&&!H.kT(a,b))H.y(H.aS(a,H.kc(b)))
return a},
aS:function(a,b){return new H.ia("TypeError: "+P.dg(a)+": type '"+H.j(H.lW(a))+"' is not a subtype of type '"+b+"'")},
mI:function(a,b){return new H.f8("CastError: "+P.dg(a)+": type '"+H.j(H.lW(a))+"' is not a subtype of type '"+b+"'")},
lW:function(a){var u,t=J.T(a)
if(!!t.$icf){u=H.m5(t)
if(u!=null)return H.kc(u)
return"Closure"}return H.cz(a)},
op:function(a){throw H.d(new H.iQ(a))},
oS:function(a){throw H.d(new P.fi(a))},
nl:function(a){return new H.hD(a)},
m7:function(a){return v.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
bB:function(a){if(a==null)return
return a.$ti},
py:function(a,b,c){return H.ca(a["$a"+H.j(c)],H.bB(b))},
c8:function(a,b,c,d){var u=H.ca(a["$a"+H.j(c)],H.bB(b))
return u==null?null:u[d]},
aw:function(a,b,c){var u=H.ca(a["$a"+H.j(b)],H.bB(a))
return u==null?null:u[c]},
u:function(a,b){var u=H.bB(a)
return u==null?null:u[b]},
kc:function(a){return H.bA(a,null)},
bA:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cb(a[0].name)+H.kR(a,1,b)
if(typeof a=="function")return H.cb(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ac(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.j(b[t])}if('func' in a)return H.nZ(a,b)
if('futureOr' in a)return"FutureOr<"+H.bA("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nZ:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.e([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.b.v(p,a0[m])
l=u[q]
if(l!=null&&l!==P.P)p+=" extends "+H.bA(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bA(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bA(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bA(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oy(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.U(n[g])
i=i+h+H.bA(d[c],a0)+(" "+H.j(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kR:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.a3("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bA(p,c)}return"<"+u.i(0)+">"},
ca:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
kS:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bB(a)
t=J.T(a)
if(t[b]==null)return!1
return H.lZ(H.ca(t[d],u),null,c,null)},
n:function(a,b,c,d){if(a==null)return a
if(H.kS(a,b,c,d))return a
throw H.d(H.aS(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cb(b.substring(2))+H.kR(c,0,null),v.mangledGlobalNames)))},
lZ:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aD(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aD(a[t],b,c[t],d))return!1
return!0},
pw:function(a,b,c){return a.apply(b,H.ca(J.T(b)["$a"+H.j(c)],H.bB(b)))},
m9:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="P"||a.name==="L"||a===-1||a===-2||H.m9(u)}return!1},
kT:function(a,b){var u,t
if(a==null)return b==null||b.name==="P"||b.name==="L"||b===-1||b===-2||H.m9(b)
if(b==null||b===-1||b.name==="P"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kT(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eR(a,b)}u=J.T(a).constructor
t=H.bB(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aD(u,null,b,null)},
C:function(a,b){if(a!=null&&!H.kT(a,b))throw H.d(H.aS(a,H.kc(b)))
return a},
aD:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="P"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="P"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aD(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="L")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aD("type" in a?a.type:l,b,s,d)
else if(H.aD(a,b,s,d))return!0
else{if(!('$i'+"ck" in t.prototype))return!1
r=t.prototype["$a"+"ck"]
q=H.ca(r,u?a.slice(1):l)
return H.aD(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.lQ(a,b,c,d)
if('func' in a)return c.name==="ks"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.lZ(H.ca(m,u),b,p,d)},
lQ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aD(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aD(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aD(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aD(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.oK(h,b,g,d)},
oK:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aD(c[s],d,a[s],b))return!1}return!0},
px:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oI:function(a){var u,t,s,r,q=H.U($.m8.$1(a)),p=$.jS[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k0[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.U($.lY.$2(a,q))
if(q!=null){p=$.jS[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k0[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kb(u)
$.jS[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.k0[q]=u
return u}if(s==="-"){r=H.kb(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.md(a,u)
if(s==="*")throw H.d(P.il(q))
if(v.leafTags[q]===true){r=H.kb(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.md(a,u)},
md:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kY(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kb:function(a){return J.kY(a,!1,null,!!a.$iJ)},
oJ:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kb(u)
else return J.kY(u,c,null,null)},
oD:function(){if(!0===$.kX)return
$.kX=!0
H.oE()},
oE:function(){var u,t,s,r,q,p,o,n
$.jS=Object.create(null)
$.k0=Object.create(null)
H.oC()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mf.$1(q)
if(p!=null){o=H.oJ(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oC:function(){var u,t,s,r,q,p,o=C.A()
o=H.c4(C.B,H.c4(C.C,H.c4(C.r,H.c4(C.r,H.c4(C.D,H.c4(C.E,H.c4(C.F(C.q),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.m8=new H.jY(r)
$.lY=new H.jZ(q)
$.mf=new H.k_(p)},
c4:function(a,b){return a(b)||b},
mW:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(P.a1("Illegal RegExp pattern ("+String(p)+")",a,null))},
oQ:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
ox:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mg:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
mh:function(a,b,c){var u=H.oR(a,b,c)
return u},
oR:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mg(b),'g'),H.ox(c))},
fc:function fc(){},
fd:function fd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i8:function i8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hn:function hn(a,b){this.a=a
this.b=b},
fH:function fH(a,b,c){this.a=a
this.b=b
this.c=c},
im:function im(a){this.a=a},
kj:function kj(a){this.a=a},
ev:function ev(a){this.a=a
this.b=null},
cf:function cf(){},
hZ:function hZ(){},
hR:function hR(){},
cd:function cd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ia:function ia(a){this.a=a},
f8:function f8(a){this.a=a},
hD:function hD(a){this.a=a},
iQ:function iQ(a){this.a=a},
Y:function Y(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fL:function fL(a,b){this.a=a
this.b=b
this.c=null},
fM:function fM(a,b){this.a=a
this.$ti=b},
fN:function fN(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a},
k_:function k_(a){this.a=a},
fG:function fG(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c2:function(a){return a},
n5:function(a){return new Int8Array(a)},
ba:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.c6(b,a))},
nX:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.ov(a,b,c))
return b},
ct:function ct(){},
bu:function bu(){},
du:function du(){},
cu:function cu(){},
dv:function dv(){},
hh:function hh(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
dw:function dw(){},
cv:function cv(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
oy:function(a){return J.lc(a?Object.keys(a):[],null)},
oU:function(a){return v.mangledGlobalNames[a]},
oL:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kY:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jU:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kX==null){H.oD()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.il("Return interceptor for "+H.j(u(a,q))))}s=a.constructor
r=s==null?null:s[$.l_()]
if(r!=null)return r
r=H.oI(a)
if(r!=null)return r
if(typeof a=="function")return C.K
u=Object.getPrototypeOf(a)
if(u==null)return C.w
if(u===Object.prototype)return C.w
if(typeof s=="function"){Object.defineProperty(s,$.l_(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
mV:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.ko(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.ae(a,0,4294967295,"length",null))
return J.lc(new Array(a),b)},
lc:function(a,b){return J.kv(H.e(a,[b]))},
kv:function(a){a.fixed$length=Array
return a},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.di.prototype
return J.fF.prototype}if(typeof a=="string")return J.bs.prototype
if(a==null)return J.dj.prototype
if(typeof a=="boolean")return J.fE.prototype
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.P)return a
return J.jU(a)},
d_:function(a){if(typeof a=="string")return J.bs.prototype
if(a==null)return a
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.P)return a
return J.jU(a)},
jT:function(a){if(a==null)return a
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.P)return a
return J.jU(a)},
m6:function(a){if(typeof a=="number")return J.co.prototype
if(typeof a=="string")return J.bs.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.c_.prototype
return a},
kW:function(a){if(typeof a=="string")return J.bs.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.c_.prototype
return a},
eS:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.P)return a
return J.jU(a)},
N:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).n(a,b)},
l1:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.m6(a).m(a,b)},
d2:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.oG(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.d_(a).k(a,b)},
kl:function(a,b,c){return J.jT(a).j(a,b,c)},
mC:function(a,b){return J.kW(a).E(a,b)},
mD:function(a,b,c){return J.eS(a).fZ(a,b,c)},
mE:function(a,b,c,d){return J.eS(a).hp(a,b,c,d)},
mF:function(a,b){return J.kW(a).S(a,b)},
km:function(a,b){return J.m6(a).hB(a,b)},
kn:function(a,b){return J.jT(a).J(a,b)},
mG:function(a,b,c,d){return J.eS(a).hQ(a,b,c,d)},
l2:function(a,b){return J.jT(a).I(a,b)},
l3:function(a){return J.eS(a).gbR(a)},
d3:function(a){return J.T(a).gG(a)},
bE:function(a){return J.jT(a).gY(a)},
aF:function(a){return J.d_(a).gl(a)},
mH:function(a,b){return J.eS(a).ip(a,b)},
ar:function(a){return J.T(a).i(a)},
a:function a(){},
fE:function fE(){},
dj:function dj(){},
dk:function dk(){},
hr:function hr(){},
c_:function c_(){},
bt:function bt(){},
b_:function b_(a){this.$ti=a},
kw:function kw(a){this.$ti=a},
as:function as(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
co:function co(){},
di:function di(){},
fF:function fF(){},
bs:function bs(){}},P={
nA:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oq()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c5(new P.iS(s),1)).observe(u,{childList:true})
return new P.iR(s,u,t)}else if(self.setImmediate!=null)return P.or()
return P.os()},
nB:function(a){self.scheduleImmediate(H.c5(new P.iT(H.o(a,{func:1,ret:-1})),0))},
nC:function(a){self.setImmediate(H.c5(new P.iU(H.o(a,{func:1,ret:-1})),0))},
nD:function(a){P.kC(C.o,H.o(a,{func:1,ret:-1}))},
kC:function(a,b){var u=C.d.a3(a.a,1000)
return P.nH(u<0?0:u,b)},
lx:function(a,b){var u=C.d.a3(a.a,1000)
return P.nI(u<0?0:u,b)},
nH:function(a,b){var u=new P.eB()
u.en(a,b)
return u},
nI:function(a,b){var u=new P.eB()
u.eo(a,b)
return u},
nE:function(a,b){var u,t,s
b.a=1
try{a.dU(new P.j2(b),new P.j3(b),null)}catch(s){u=H.aE(s)
t=H.c9(s)
P.oN(new P.j4(b,u,t))}},
lI:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaC")
if(u>=4){t=b.bE()
b.a=a.a
b.c=a.c
P.cM(b,t)}else{t=H.f(b.c,"$ib9")
b.a=2
b.c=a
a.cY(t)}},
cM:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$iaj")
P.jJ(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.cM(h.a,b)}g=h.a
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
if(m){H.f(q,"$iaj")
P.jJ(i,i,g.b,q.a,q.b)
return}l=$.X
if(l!==n)$.X=n
else l=i
g=b.c
if((g&15)===8)new P.j8(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.j7(u,b,q).$0()}else if((g&2)!==0)new P.j6(h,u,b).$0()
if(l!=null)$.X=l
g=u.b
if(!!J.T(g).$ick){if(g.a>=4){k=H.f(o.c,"$ib9")
o.c=null
b=o.b8(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.lI(g,o)
return}}j=b.b
k=H.f(j.c,"$ib9")
j.c=null
b=j.b8(k)
g=u.a
p=u.b
if(!g){H.C(p,H.u(j,0))
j.a=4
j.c=p}else{H.f(p,"$iaj")
j.a=8
j.c=p}h.a=j
g=j}},
ol:function(a,b){if(H.eR(a,{func:1,args:[P.P,P.ao]}))return H.o(a,{func:1,ret:null,args:[P.P,P.ao]})
if(H.eR(a,{func:1,args:[P.P]}))return H.o(a,{func:1,ret:null,args:[P.P]})
throw H.d(P.ko(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ok:function(){var u,t
for(;u=$.c3,u!=null;){$.cZ=null
t=u.b
$.c3=t
if(t==null)$.cY=null
u.a.$0()}},
oo:function(){$.kP=!0
try{P.ok()}finally{$.cZ=null
$.kP=!1
if($.c3!=null)$.l0().$1(P.m_())}},
lV:function(a){var u=new P.dZ(a)
if($.c3==null){$.c3=$.cY=u
if(!$.kP)$.l0().$1(P.m_())}else $.cY=$.cY.b=u},
on:function(a){var u,t,s=$.c3
if(s==null){P.lV(a)
$.cZ=$.cY
return}u=new P.dZ(a)
t=$.cZ
if(t==null){u.b=s
$.c3=$.cZ=u}else{u.b=t.b
$.cZ=t.b=u
if(u.b==null)$.cY=u}},
oN:function(a){var u=null,t=$.X
if(C.f===t){P.jL(u,u,C.f,a)
return}P.jL(u,u,t,H.o(t.bN(a),{func:1,ret:-1}))},
lw:function(a,b){var u=$.X
if(u===C.f)return P.kC(a,H.o(b,{func:1,ret:-1}))
return P.kC(a,H.o(u.bN(b),{func:1,ret:-1}))},
nr:function(a,b){var u=$.X
if(u===C.f)return P.lx(a,H.o(b,{func:1,ret:-1,args:[P.b5]}))
return P.lx(a,H.o(u.da(b,P.b5),{func:1,ret:-1,args:[P.b5]}))},
jJ:function(a,b,c,d,e){var u={}
u.a=d
P.on(new P.jK(u,e))},
lR:function(a,b,c,d,e){var u,t=$.X
if(t===c)return d.$0()
$.X=c
u=t
try{t=d.$0()
return t}finally{$.X=u}},
lS:function(a,b,c,d,e,f,g){var u,t=$.X
if(t===c)return d.$1(e)
$.X=c
u=t
try{t=d.$1(e)
return t}finally{$.X=u}},
om:function(a,b,c,d,e,f,g,h,i){var u,t=$.X
if(t===c)return d.$2(e,f)
$.X=c
u=t
try{t=d.$2(e,f)
return t}finally{$.X=u}},
jL:function(a,b,c,d){var u
H.o(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bN(d):c.hx(d,-1)
P.lV(d)},
iS:function iS(a){this.a=a},
iR:function iR(a,b,c){this.a=a
this.b=b
this.c=c},
iT:function iT(a){this.a=a},
iU:function iU(a){this.a=a},
eB:function eB(){this.c=0},
jr:function jr(a,b){this.a=a
this.b=b},
jq:function jq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b9:function b9(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aC:function aC(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
j1:function j1(a,b){this.a=a
this.b=b},
j5:function j5(a,b){this.a=a
this.b=b},
j2:function j2(a){this.a=a},
j3:function j3(a){this.a=a},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
j8:function j8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j9:function j9(a){this.a=a},
j7:function j7(a,b,c){this.a=a
this.b=b
this.c=c},
j6:function j6(a,b,c){this.a=a
this.b=b
this.c=c},
dZ:function dZ(a){this.a=a
this.b=null},
hU:function hU(){},
hW:function hW(a,b){this.a=a
this.b=b},
hX:function hX(a,b){this.a=a
this.b=b},
cD:function cD(){},
hV:function hV(){},
b5:function b5(){},
aj:function aj(a,b){this.a=a
this.b=b},
jA:function jA(){},
jK:function jK(a,b){this.a=a
this.b=b},
jf:function jf(){},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
jg:function jg(a,b){this.a=a
this.b=b},
ji:function ji(a,b,c){this.a=a
this.b=b
this.c=c},
mY:function(a,b){return new H.Y([a,b])},
ld:function(a,b){return new H.Y([a,b])},
n_:function(a){return H.oz(a,new H.Y([null,null]))},
n0:function(a){return new P.jd([a])},
kJ:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nG:function(a,b,c){var u=new P.ed(a,b,[c])
u.c=a.e
return u},
mU:function(a,b,c){var u,t
if(P.kQ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.e([],[P.h])
C.a.h($.aq,a)
try{P.o_(a,u)}finally{if(0>=$.aq.length)return H.b($.aq,-1)
$.aq.pop()}t=P.lu(b,H.ma(u,"$ik"),", ")+c
return t.charCodeAt(0)==0?t:t},
ku:function(a,b,c){var u,t
if(P.kQ(a))return b+"..."+c
u=new P.a3(b)
C.a.h($.aq,a)
try{t=u
t.a=P.lu(t.a,a,", ")}finally{if(0>=$.aq.length)return H.b($.aq,-1)
$.aq.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kQ:function(a){var u,t
for(u=$.aq.length,t=0;t<u;++t)if(a===$.aq[t])return!0
return!1},
o_:function(a,b){var u,t,s,r,q,p,o,n=a.gY(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.H())return
u=H.j(n.gP(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.H()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gP(n);++l
if(!n.H()){if(l<=4){C.a.h(b,H.j(r))
return}t=H.j(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gP(n);++l
for(;n.H();r=q,q=p){p=n.gP(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2;--l}C.a.h(b,"...")
return}}s=H.j(r)
t=H.j(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.h(b,o)
C.a.h(b,s)
C.a.h(b,t)},
mZ:function(a,b,c){var u=P.mY(b,c)
a.I(0,new P.fO(u,b,c))
return u},
kz:function(a){var u,t={}
if(P.kQ(a))return"{...}"
u=new P.a3("")
try{C.a.h($.aq,a)
u.a+="{"
t.a=!0
J.l2(a,new P.fT(t,u))
u.a+="}"}finally{if(0>=$.aq.length)return H.b($.aq,-1)
$.aq.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jd:function jd(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cN:function cN(a){this.a=a
this.c=this.b=null},
ed:function ed(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fO:function fO(a,b,c){this.a=a
this.b=b
this.c=c},
fP:function fP(){},
w:function w(){},
fS:function fS(){},
fT:function fT(a,b){this.a=a
this.b=b},
ag:function ag(){},
js:function js(){},
fU:function fU(){},
dS:function dS(a,b){this.a=a
this.$ti=b},
jj:function jj(){},
ee:function ee(){},
eG:function eG(){},
nu:function(a,b,c,d){if(b instanceof Uint8Array)return P.nv(!1,b,c,d)
return},
nv:function(a,b,c,d){var u,t,s=$.mv()
if(s==null)return
u=0===c
if(u&&!0)return P.kF(s,b)
t=b.length
d=P.bx(c,d,t)
if(u&&d===t)return P.kF(s,b)
return P.kF(s,b.subarray(c,d))},
kF:function(a,b){if(P.nx(b))return
return P.ny(a,b)},
ny:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aE(t)}return},
nx:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nw:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aE(t)}return},
lU:function(a,b,c){var u,t,s
for(u=J.d_(a),t=b;t<c;++t){s=u.k(a,t)
if(typeof s!=="number")return s.aa()
if((s&127)!==s)return t-b}return c-b},
l4:function(a,b,c,d,e,f){if(C.d.b4(f,4)!==0)throw H.d(P.a1("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.a1("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.a1("Invalid base64 padding, more than two '=' characters",a,b))},
f4:function f4(){},
f5:function f5(){},
bI:function bI(){},
bL:function bL(){},
fq:function fq(){},
iv:function iv(){},
ix:function ix(){},
jz:function jz(a){this.b=0
this.c=a},
iw:function iw(a){this.a=a},
jy:function jy(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eT:function(a,b,c){var u=H.nf(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.a1(a,null,null))},
mR:function(a){if(a instanceof H.cf)return a.i(0)
return"Instance of '"+H.j(H.cz(a))+"'"},
n1:function(a,b,c){var u,t=J.mV(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.j(t,u,b)
return H.n(t,"$ic",[c],"$ac")},
le:function(a,b,c){var u,t=[c],s=H.e([],t)
for(u=J.bE(a);u.H();)C.a.h(s,H.C(u.gP(u),c))
if(b)return s
return H.n(J.kv(s),"$ic",t,"$ac")},
cE:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.n(a,"$ib_",[P.l],"$ab_")
u=a.length
c=P.bx(b,c,u)
return H.lp(b>0||c<u?C.a.e5(a,b,c):a)}if(!!J.T(a).$icv)return H.nh(a,b,P.bx(b,c,a.length))
return P.np(a,b,c)},
np:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.d(P.ae(b,0,J.aF(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.ae(c,b,J.aF(a),q,q))
t=J.bE(a)
for(s=0;s<b;++s)if(!t.H())throw H.d(P.ae(b,0,s,q,q))
r=[]
if(u)for(;t.H();)r.push(t.gP(t))
else for(s=b;s<c;++s){if(!t.H())throw H.d(P.ae(c,b,s,q,q))
r.push(t.gP(t))}return H.lp(r)},
nj:function(a){return new H.fG(a,H.mW(a,!1,!0,!1,!1,!1))},
lu:function(a,b,c){var u=J.bE(b)
if(!u.H())return a
if(c.length===0){do a+=H.j(u.gP(u))
while(u.H())}else{a+=H.j(u.gP(u))
for(;u.H();)a=a+c+H.j(u.gP(u))}return a},
lA:function(){var u=H.n7()
if(u!=null)return P.nt(u)
throw H.d(P.F("'Uri.base' is not supported"))},
jx:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.mA().b
if(typeof b!=="string")H.y(H.bb(b))
u=u.test(b)}else u=!1
if(u)return b
H.C(b,H.aw(c,"bI",0))
t=c.ghP().bS(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dA(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mP:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mQ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
db:function(a){if(a>=10)return""+a
return"0"+a},
l9:function(a){return new P.bp(1000*a)},
dg:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ar(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mR(a)},
eY:function(a){return new P.aT(!1,null,null,a)},
ko:function(a,b,c){return new P.aT(!0,a,b,c)},
dC:function(a,b){return new P.bR(null,null,!0,a,b,"Value not in range")},
ae:function(a,b,c,d,e){return new P.bR(b,c,!0,a,d,"Invalid value")},
bx:function(a,b,c){if(0>a||a>c)throw H.d(P.ae(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.ae(b,a,c,"end",null))
return b}return c},
lq:function(a,b){if(typeof a!=="number")return a.M()
if(a<0)throw H.d(P.ae(a,0,null,b,null))},
V:function(a,b,c,d,e){var u=H.ac(e==null?J.aF(b):e)
return new P.fD(u,!0,a,c,"Index out of range")},
F:function(a){return new P.io(a)},
il:function(a){return new P.ik(a)},
bJ:function(a){return new P.fb(a)},
B:function(a){return new P.e6(a)},
a1:function(a,b,c){return new P.fA(a,b,c)},
n2:function(a,b,c){var u,t=H.e([],[c])
C.a.sl(t,a)
for(u=0;u<a;++u)C.a.j(t,u,b.$1(u))
return t},
kZ:function(a){H.oL(a)},
nt:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.E(a,4)^58)*3|C.b.E(a,0)^100|C.b.E(a,1)^97|C.b.E(a,2)^116|C.b.E(a,3)^97)>>>0
if(u===0)return P.lz(e<e?C.b.q(a,0,e):a,5,f).ge_()
else if(u===32)return P.lz(C.b.q(a,5,e),0,f).ge_()}t=new Array(8)
t.fixed$length=Array
s=H.e(t,[P.l])
C.a.j(s,0,0)
C.a.j(s,1,-1)
C.a.j(s,2,-1)
C.a.j(s,7,-1)
C.a.j(s,3,0)
C.a.j(s,4,0)
C.a.j(s,5,e)
C.a.j(s,6,e)
if(P.lT(a,0,e,0,s)>=14)C.a.j(s,7,e)
r=s[1]
if(typeof r!=="number")return r.iz()
if(r>=0)if(P.lT(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.v()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.M()
if(typeof n!=="number")return H.p(n)
if(m<n)n=m
if(typeof o!=="number")return o.M()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.M()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.M()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.a0(a,"..",o)))j=n>o+2&&C.b.a0(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.a0(a,"file",0)){if(q<=0){if(!C.b.a0(a,"/",o)){i="file:///"
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
a=C.b.aN(a,o,n,"/");++e
n=h}k="file"}else if(C.b.a0(a,"http",0)){if(t&&p+3===o&&C.b.a0(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aN(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.a0(a,"https",0)){if(t&&p+4===o&&C.b.a0(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aN(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.q(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jk(a,r,q,p,o,n,m,k)}return P.nJ(a,0,e,r,q,p,o,n,m,k)},
lC:function(a){var u=P.h
return C.a.hT(H.e(a.split("&"),[u]),P.ld(u,u),new P.it(C.h),[P.z,P.h,P.h])},
ns:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iq(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.S(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eT(C.b.q(a,s,t),n,n)
if(typeof p!=="number")return p.W()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.b(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eT(C.b.q(a,s,c),n,n)
if(typeof p!=="number")return p.W()
if(p>255)k.$2(l,s)
if(r>=u)return H.b(j,r)
j[r]=p
return j},
lB:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.ir(a),d=new P.is(e,a)
if(a.length<2)e.$1("address is too short")
u=H.e([],[P.l])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.b.S(a,t)
if(p===58){if(t===b){++t
if(C.b.S(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
C.a.h(u,-1)
r=!0}else C.a.h(u,d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.a.gax(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)C.a.h(u,d.$2(s,c))
else{m=P.ns(a,s,c)
C.a.h(u,(m[0]<<8|m[1])>>>0)
C.a.h(u,(m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.b(l,i)
l[i]=0
f=i+1
if(f>=k)return H.b(l,f)
l[f]=0
i+=2}else{f=C.d.aH(h,8)
if(i<0||i>=k)return H.b(l,i)
l[i]=f
f=i+1
if(f>=k)return H.b(l,f)
l[f]=h&255
i+=2}}return l},
nJ:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nR(a,b,d)
else{if(d===b)P.c1(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nS(a,u,e-1):""
s=P.nO(a,e,f,!1)
if(typeof f!=="number")return f.v()
r=f+1
if(typeof g!=="number")return H.p(g)
q=r<g?P.nQ(P.eT(C.b.q(a,r,g),new P.jt(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nP(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.M()
o=h<i?P.kL(a,h+1,i,n):n
return new P.c0(j,t,s,q,p,o,i<c?P.nN(a,i+1,c):n)},
lK:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
c1:function(a,b,c){throw H.d(P.a1(c,a,b))},
nQ:function(a,b){if(a!=null&&a===P.lK(b))return
return a},
nO:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.b.S(a,b)===91){if(typeof c!=="number")return c.w()
u=c-1
if(C.b.S(a,u)!==93)P.c1(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nL(a,t,u)
if(typeof s!=="number")return s.M()
if(s<u){r=s+1
q=P.lP(a,C.b.a0(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lB(a,t,s)
return C.b.q(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.p(c)
p=b
for(;p<c;++p)if(C.b.S(a,p)===58){s=C.b.bc(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lP(a,C.b.a0(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lB(a,b,s)
return"["+C.b.q(a,b,s)+q+"]"}return P.nU(a,b,c)},
nL:function(a,b,c){var u,t=C.b.bc(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.p(c)
u=t<c}else u=!1
return u?t:c},
lP:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.a3(d):null
if(typeof c!=="number")return H.p(c)
u=b
t=u
s=!0
for(;u<c;){r=C.b.S(a,u)
if(r===37){q=P.kM(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.a3("")
o=l.a+=C.b.q(a,t,u)
if(p)q=C.b.q(a,u,u+3)
else if(q==="%")P.c1(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.b(C.i,p)
p=(C.i[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.a3("")
if(t<u){l.a+=C.b.q(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.b.S(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.a3("")
l.a+=C.b.q(a,t,u)
l.a+=P.kK(r)
u+=m
t=u}}}if(l==null)return C.b.q(a,b,c)
if(t<c)l.a+=C.b.q(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
nU:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.p(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.S(a,u)
if(q===37){p=P.kM(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.a3("")
n=C.b.q(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.q(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.b(C.u,o)
o=(C.u[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.a3("")
if(t<u){s.a+=C.b.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.b(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.c1(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.S(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.a3("")
n=C.b.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kK(q)
u+=l
t=u}}}}if(s==null)return C.b.q(a,b,c)
if(t<c){n=C.b.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nR:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lM(C.b.E(a,b)))P.c1(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.E(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.b(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.c1(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.q(a,b,c)
return P.nK(t?a.toLowerCase():a)},
nK:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nS:function(a,b,c){return P.cW(a,b,c,C.M,!1)},
nP:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cW(a,b,c,C.v,!0):C.j.iT(d,new P.ju(),P.h).t(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a5(u,"/"))u="/"+u
return P.nT(u,e,f)},
nT:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a5(a,"/"))return P.nV(a,!u||c)
return P.nW(a)},
kL:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.d(P.eY("Both query and queryParameters specified"))
return P.cW(a,b,c,C.l,!0)}if(d==null)return
u=new P.a3("")
t.a=""
d.I(0,new P.jv(new P.jw(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nN:function(a,b,c){return P.cW(a,b,c,C.l,!0)},
kM:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.S(a,b+1)
t=C.b.S(a,p)
s=H.jX(u)
r=H.jX(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aH(q,4)
if(p>=8)return H.b(C.i,p)
p=(C.i[p]&1<<(q&15))!==0}else p=!1
if(p)return H.dA(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.q(a,b,b+3).toUpperCase()
return},
kK:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.e(u,[P.l])
C.a.j(t,0,37)
C.a.j(t,1,C.b.E(o,a>>>4))
C.a.j(t,2,C.b.E(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.e(u,[P.l])
for(q=0;--r,r>=0;s=128){p=C.d.h9(a,6*r)&63|s
C.a.j(t,q,37)
C.a.j(t,q+1,C.b.E(o,p>>>4))
C.a.j(t,q+2,C.b.E(o,p&15))
q+=3}}return P.cE(t,0,null)},
cW:function(a,b,c,d,e){var u=P.lO(a,b,c,d,e)
return u==null?C.b.q(a,b,c):u},
lO:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.M()
if(typeof c!=="number")return H.p(c)
if(!(o<c))break
c$0:{u=C.b.S(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.b(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kM(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.b(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.c1(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.b.S(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kK(u)}}if(m==null)m=new P.a3("")
m.a+=C.b.q(a,n,o)
m.a+=H.j(s)
if(typeof r!=="number")return H.p(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.M()
if(n<c)m.a+=C.b.q(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lN:function(a){if(C.b.a5(a,"."))return!0
return C.b.dz(a,"/.")!==-1},
nW:function(a){var u,t,s,r,q,p,o
if(!P.lN(a))return a
u=H.e([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.N(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.b(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.t(u,"/")},
nV:function(a,b){var u,t,s,r,q,p
if(!P.lN(a))return!b?P.lL(a):a
u=H.e([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gax(u)!==".."){if(0>=u.length)return H.b(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.b(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gax(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.b(u,0)
C.a.j(u,0,P.lL(u[0]))}return C.a.t(u,"/")},
lL:function(a){var u,t,s,r=a.length
if(r>=2&&P.lM(J.mC(a,0)))for(u=1;u<r;++u){t=C.b.E(a,u)
if(t===58)return C.b.q(a,0,u)+"%3A"+C.b.ab(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.b(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nM:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.E(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.eY("Invalid URL encoding"))}}return u},
kN:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.E(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.q(a,b,c)
else r=new H.a2(C.b.q(a,b,c))}else{r=H.e([],[P.l])
for(s=a.length,q=b;q<c;++q){t=C.b.E(a,q)
if(t>127)throw H.d(P.eY("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.eY("Truncated URI"))
C.a.h(r,P.nM(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.n(r,"$ic",[P.l],"$ac")
return new P.iw(!1).bS(r)},
lM:function(a){var u=a|32
return 97<=u&&u<=122},
lz:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.e([b-1],[P.l])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.E(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.a1(m,a,t))}}if(s<0&&t>b)throw H.d(P.a1(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.E(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gax(l)
if(r!==44||t!==p+7||!C.b.a0(a,"base64",p+1))throw H.d(P.a1("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.z.i2(0,a,o,u)
else{n=P.lO(a,o,u,C.l,!0)
if(n!=null)a=C.b.aN(a,o,u,n)}return new P.ip(a,l,c)},
nY:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.n2(22,new P.jE(),P.O),n=new P.jD(o),m=new P.jF(),l=new P.jG(),k=H.f(n.$2(0,225),"$iO")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iO")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iO")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iO")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iO")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iO")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iO")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iO")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iO")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iO")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iO"),"]",5)
k=H.f(n.$2(9,235),"$iO")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iO")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iO")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iO")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iO")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iO")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iO")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iO")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iO")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iO"),"az",21)
k=H.f(n.$2(21,245),"$iO")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
lT:function(a,b,c,d,e){var u,t,s,r,q=$.mB()
for(u=b;u<c;++u){if(d<0||d>=q.length)return H.b(q,d)
t=q[d]
s=C.b.E(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.b(t,s)
r=t[s]
d=r&31
C.a.j(e,r>>>5,u)}return d},
ab:function ab(){},
at:function at(a,b){this.a=a
this.b=b},
t:function t(){},
bp:function bp(a){this.a=a},
fn:function fn(){},
fo:function fo(){},
bq:function bq(){},
eZ:function eZ(){},
dx:function dx(){},
aT:function aT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bR:function bR(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fD:function fD(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
io:function io(a){this.a=a},
ik:function ik(a){this.a=a},
hQ:function hQ(a){this.a=a},
fb:function fb(a){this.a=a},
hq:function hq(){},
dI:function dI(){},
fi:function fi(a){this.a=a},
e6:function e6(a){this.a=a},
fA:function fA(a,b,c){this.a=a
this.b=b
this.c=c},
l:function l(){},
k:function k(){},
aZ:function aZ(){},
c:function c(){},
z:function z(){},
L:function L(){},
a6:function a6(){},
P:function P(){},
ao:function ao(){},
h:function h(){},
a3:function a3(a){this.a=a},
it:function it(a){this.a=a},
iq:function iq(a){this.a=a},
ir:function ir(a){this.a=a},
is:function is(a,b){this.a=a
this.b=b},
c0:function c0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jt:function jt(a,b){this.a=a
this.b=b},
ju:function ju(){},
jw:function jw(a,b){this.a=a
this.b=b},
jv:function jv(a){this.a=a},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
jE:function jE(){},
jD:function jD(a){this.a=a},
jF:function jF(){},
jG:function jG(){},
jk:function jk(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
iY:function iY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
bj:function(a){var u,t,s,r,q
if(a==null)return
u=P.ld(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r){q=H.U(t[r])
u.j(0,q,a[q])}return u},
ot:function(a){var u={}
a.I(0,new P.jM(u))
return u},
jm:function jm(){},
jo:function jo(a,b){this.a=a
this.b=b},
jM:function jM(a){this.a=a},
jn:function jn(a,b){this.a=a
this.b=b},
fw:function fw(a,b){this.a=a
this.b=b},
fx:function fx(){},
fy:function fy(){},
jc:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nF:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
je:function je(){},
ah:function ah(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b1:function b1(){},
fJ:function fJ(){},
b4:function b4(){},
ho:function ho(){},
hu:function hu(){},
hY:function hY(){},
q:function q(){},
b6:function b6(){},
i7:function i7(){},
eb:function eb(){},
ec:function ec(){},
em:function em(){},
en:function en(){},
ex:function ex(){},
ey:function ey(){},
eE:function eE(){},
eF:function eF(){},
O:function O(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(a){this.a=a},
f3:function f3(){},
bF:function bF(){},
hp:function hp(){},
e_:function e_(){},
d5:function d5(){},
dB:function dB(){},
bS:function bS(){},
dF:function dF(){},
dQ:function dQ(){},
hP:function hP(){},
et:function et(){},
eu:function eu(){}},W={
l7:function(){var u=document.createElement("canvas")
return u},
la:function(a){H.f(a,"$ii")
return"wheel"},
mT:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icn")
try{s.type=a}catch(u){H.aE(u)}return s},
jb:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lJ:function(a,b,c,d){var u=W.jb(W.jb(W.jb(W.jb(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
aa:function(a,b,c,d,e){var u=W.lX(new W.j0(c),W.m)
if(u!=null&&!0)J.mE(a,b,u,!1)
return new W.j_(a,b,u,!1,[e])},
lX:function(a,b){var u=$.X
if(u===C.f)return a
return u.da(a,b)},
r:function r(){},
eU:function eU(){},
eW:function eW(){},
eX:function eX(){},
bG:function bG(){},
bH:function bH(){},
bo:function bo(){},
cg:function cg(){},
fe:function fe(){},
Q:function Q(){},
ch:function ch(){},
ff:function ff(){},
aW:function aW(){},
aX:function aX(){},
fg:function fg(){},
fh:function fh(){},
fj:function fj(){},
dc:function dc(){},
fk:function fk(){},
dd:function dd(){},
de:function de(){},
fl:function fl(){},
fm:function fm(){},
iW:function iW(a,b){this.a=a
this.b=b},
a0:function a0(){},
m:function m(){},
i:function i(){},
ax:function ax(){},
cj:function cj(){},
fv:function fv(){},
fz:function fz(){},
aH:function aH(){},
fC:function fC(){},
bN:function bN(){},
cm:function cm(){},
cn:function cn(){},
b0:function b0(){},
fQ:function fQ(){},
ha:function ha(){},
cq:function cq(){},
hb:function hb(){},
hc:function hc(a){this.a=a},
hd:function hd(){},
he:function he(a){this.a=a},
aI:function aI(){},
hf:function hf(){},
ad:function ad(){},
iV:function iV(a){this.a=a},
G:function G(){},
cw:function cw(){},
aJ:function aJ(){},
hs:function hs(){},
hB:function hB(){},
hC:function hC(a){this.a=a},
hE:function hE(){},
aL:function aL(){},
hN:function hN(){},
aM:function aM(){},
hO:function hO(){},
aN:function aN(){},
hS:function hS(){},
hT:function hT(a){this.a=a},
ay:function ay(){},
bi:function bi(){},
aP:function aP(){},
az:function az(){},
i_:function i_(){},
i0:function i0(){},
i2:function i2(){},
aQ:function aQ(){},
aR:function aR(){},
i5:function i5(){},
i6:function i6(){},
by:function by(){},
iu:function iu(){},
iM:function iM(){},
b8:function b8(){},
cL:function cL(){},
iX:function iX(){},
e1:function e1(){},
ja:function ja(){},
ej:function ej(){},
jl:function jl(){},
jp:function jp(){},
iZ:function iZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kI:function kI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j_:function j_(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
j0:function j0(a){this.a=a},
D:function D(){},
dh:function dh(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
e0:function e0(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ek:function ek(){},
el:function el(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
cS:function cS(){},
cT:function cT(){},
er:function er(){},
es:function es(){},
ew:function ew(){},
ez:function ez(){},
eA:function eA(){},
cU:function cU(){},
cV:function cV(){},
eC:function eC(){},
eD:function eD(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){}},O={
kq:function(a){var u=new O.Z([a])
u.bl(a)
return u},
Z:function Z(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cp:function cp(){this.b=this.a=null},
dr:function dr(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h3:function h3(a,b){this.a=a
this.b=b},
h4:function h4(){},
h5:function h5(a,b){this.a=a
this.b=b},
h6:function h6(){},
h7:function h7(a,b){this.a=a
this.b=b},
h8:function h8(){},
fY:function fY(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ds:function ds(){},
fZ:function fZ(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b2:function b2(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h0:function h0(){var _=this
_.e=_.d=_.c=_.b=null},
h1:function h1(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h2:function h2(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bU:function bU(){}},E={
nk:function(a,b){var u=new E.hx(a)
u.eb(a,b)
return u},
nq:function(a,b,c,d,e){var u,t,s=J.T(a)
if(!!s.$ibH)return E.lv(a,!0,!0,!0,!1)
u=W.l7()
t=u.style
t.width="100%"
t.height="100%"
s.gbR(a).h(0,u)
return E.lv(u,!0,!0,!0,!1)},
lv:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dM(),j=H.f(C.n.e2(a,"webgl2",P.n_(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibS")
if(j==null)H.y(P.B("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.nk(j,a)
H.ac(j.getParameter(3379))
H.ac(j.getParameter(34076))
u=new X.dT(a)
t=new X.fI()
t.c=new X.au(!1,!1,!1)
t.sfT(P.n0(P.l))
u.b=t
t=new X.hg(u)
t.f=0
t.r=V.bw()
t.x=V.bw()
t.ch=t.Q=1
u.c=t
t=new X.fR(u)
t.r=0
t.x=V.bw()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i4(u)
t.f=V.bw()
t.r=V.bw()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seI(H.e([],[[P.cD,P.P]]))
t=u.z
s=document
r=W.ad
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.aa(s,"contextmenu",H.o(u.gfd(),q),!1,r))
t=u.z
p=W.m
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.aa(a,"focus",H.o(u.gfj(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.aa(a,"blur",H.o(u.gf5(),o),!1,p))
t=u.z
n=W.b0
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.aa(s,"keyup",H.o(u.gfn(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.aa(s,"keydown",H.o(u.gfl(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.aa(a,"mousedown",H.o(u.gfs(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,"mouseup",H.o(u.gfw(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,l,H.o(u.gfu(),q),!1,r))
n=u.z
W.la(a)
m=W.b8;(n&&C.a).h(n,W.aa(a,H.U(W.la(a)),H.o(u.gfA(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.aa(s,l,H.o(u.gff(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.aa(s,"mouseup",H.o(u.gfh(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.aa(s,"pointerlockchange",H.o(u.gfC(),o),!1,p))
p=u.z
o=W.aR
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.aa(a,"touchstart",H.o(u.gfO(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchend",H.o(u.gfK(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchmove",H.o(u.gfM(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.at(Date.now(),!1)
k.cy=0
k.d_()
return k},
f6:function f6(){},
am:function am(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hx:function hx(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hy:function hy(a){this.a=a},
hz:function hz(a){this.a=a},
hA:function hA(a){this.a=a},
dJ:function dJ(a){this.c=a
this.b=null},
dM:function dM(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=null},
i1:function i1(a){this.a=a}},Z={
kH:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.c2(c)),35044)
a.bindBuffer(b,null)
return new Z.dY(b,u)},
aB:function(a){return new Z.bz(a)},
dY:function dY(a,b){this.a=a
this.b=b},
d6:function d6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iN:function iN(a){this.a=a},
d7:function d7(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
br:function br(a,b,c){this.a=a
this.b=b
this.c=c},
bz:function bz(a){this.a=a}},D={
S:function(){var u=new D.aY()
u.sa2(null)
u.sak(null)
u.c=null
u.d=0
return u},
f9:function f9(){},
aY:function aY(){var _=this
_.d=_.c=_.b=_.a=null},
fs:function fs(a){this.a=a},
ft:function ft(a){this.a=a},
A:function A(){this.b=null},
bO:function bO(a){this.b=null
this.$ti=a},
bP:function bP(a){this.b=null
this.$ti=a},
K:function K(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bc:function bc(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a7:function a7(){},
dm:function dm(){var _=this
_.d=_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dz:function dz(){},
dH:function dH(){}},X={d8:function d8(a,b){this.a=a
this.b=b},dl:function dl(a,b){this.a=a
this.b=b},fI:function fI(){var _=this
_.d=_.c=_.b=_.a=null},dp:function dp(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fR:function fR(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},au:function au(a,b,c){this.a=a
this.b=b
this.c=c},bf:function bf(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hg:function hg(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cr:function cr(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ht:function ht(){},dO:function dO(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},i4:function i4(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dT:function dT(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mS:function(a){var u=new X.fB(),t=new V.aV(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.ls
if(t==null){t=V.lr(0,0,1,1)
$.ls=t}u.r=t
return u},
d9:function d9(){},
fB:function fB(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dy:function dy(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dK:function dK(){}},V={
kk:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.b4(a-b,u)
return(a<0?a+u:a)+b},
M:function(a,b,c){if(a==null)return C.b.a8("null",c)
return C.b.a8(C.e.dV(Math.abs(a-0)<$.I().a?0:a,b),c+b+1)},
c7:function(a,b,c){var u,t,s,r,q,p=H.e([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.v)(a),++s){r=V.M(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.b(p,q)
C.a.j(p,q,C.b.a8(p[q],t))}return p},
an:function(){var u=$.li
return u==null?$.li=V.b3(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b3:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
h9:function(a,b,c){return V.b3(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kA:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b3(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
lg:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b3(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
lh:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b3(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
lf:function(a,b,c){var u=c.p(0,Math.sqrt(c.B(c))),t=b.au(u),s=t.p(0,Math.sqrt(t.B(t))),r=u.au(s),q=new V.H(a.a,a.b,a.c),p=s.O(0).B(q),o=r.O(0).B(q),n=u.O(0).B(q)
return V.b3(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bw:function(){var u=$.lm
return u==null?$.lm=new V.a9(0,0):u},
ln:function(){var u=$.cx
return u==null?$.cx=new V.a_(0,0,0):u},
lr:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dD(a,b,c,d)},
cK:function(){var u=$.lG
return u==null?$.lG=new V.H(0,0,0):u},
nz:function(){var u=$.iy
return u==null?$.iy=new V.H(-1,0,0):u},
kG:function(){var u=$.iz
return u==null?$.iz=new V.H(0,1,0):u},
lH:function(){var u=$.iA
return u==null?$.iA=new V.H(0,0,1):u},
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
aV:function aV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fr:function fr(a){this.a=a},
dt:function dt(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
al:function al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a9:function a9(a,b){this.a=a
this.b=b},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
bh:function bh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dD:function dD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
R:function R(a,b){this.a=a
this.b=b},
H:function H(a,b,c){this.a=a
this.b=b
this.c=c},
ai:function(a){var u=new V.hF()
u.ec(a)
return u},
eV:function eV(){},
be:function be(){},
dq:function dq(){},
bg:function bg(){this.a=null},
hF:function hF(){this.a=null},
cC:function cC(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dN:function dN(a,b,c){this.a=a
this.b=b
this.c=c},
cF:function cF(a){this.b=a
this.c=null},
i3:function i3(){this.c=this.b=this.a=null},
cG:function cG(a){this.b=a
this.a=this.c=null},
oO:function(a){P.nr(C.I,new V.kd(a))},
nm:function(a){var u=new V.hJ()
u.ee(a,!0)
return u},
kd:function kd(a){this.a=a},
hv:function hv(a){this.a=a
this.c=null},
hw:function hw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hJ:function hJ(){this.b=this.a=null},
hL:function hL(a){this.a=a},
hK:function hK(a){this.a=a}},U={
kr:function(){var u=new U.fa()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
bK:function(a){var u=new U.da()
if(a==null)a=V.an()
if(null!=a)u.a=a
return u},
kt:function(){var u=new U.cl()
u.bl(U.a8)
u.b5(u.geh(),u.gfG())
u.e=null
u.f=V.an()
u.r=0
return u},
cA:function(a,b,c){var u,t=new U.dE()
t.r=t.f=t.e=t.d=t.c=t.b=t.a=0
t.se1(0)
t.sdK(0,0)
t.sdR(0)
u=t.d
if(!(Math.abs(u-c)<$.I().a)){t.d=c
u=new D.K("deltaYaw",u,c,[P.t])
u.b=!0
t.D(u)}u=t.e
if(!(Math.abs(u-a)<$.I().a)){t.e=a
u=new D.K("deltaPitch",u,a,[P.t])
u.b=!0
t.D(u)}u=t.f
if(!(Math.abs(u-b)<$.I().a)){t.f=b
u=new D.K("deltaRoll",u,b,[P.t])
u.b=!0
t.D(u)}return t},
fa:function fa(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
da:function da(){this.b=this.a=null},
cl:function cl(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a8:function a8(){},
dE:function dE(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dU:function dU(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dV:function dV(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dW:function dW(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={df:function df(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
n3:function(a,b){var u=a.aX,t=new A.fX(b,u)
t.ed(b,u)
t.ea(a,b)
return t},
n4:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gag(a0)+a1.gag(a1)+a2.gag(a2)+a3.gag(a3)+a4.gag(a4)+a5.gag(a5)+a6.gag(a6)+a7.gag(a7)+a8.gag(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.v)(a9),++t)f+="_"+H.j(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.v)(b0),++t)f+="_"+H.j(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.v)(b1),++t)f+="_"+H.j(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.bn()
if(k){u=$.bm()
g=new Z.bz(g.a|u.a)}if(j){u=$.bl()
g=new Z.bz(g.a|u.a)}if(i){u=$.bk()
g=new Z.bz(g.a|u.a)}return new A.h_(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
jH:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jI:function(a,b,c){var u
A.jH(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kh(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
o3:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jH(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
o0:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jI(b,t,"ambient")
b.a+="\n"},
o1:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jI(b,t,"diffuse")
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
o4:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jI(b,t,"invDiffuse")
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
oa:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jI(b,t,"specular")
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
o6:function(a,b){var u,t,s
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
o8:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jH(b,t,"reflect")
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
o9:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jH(b,t,"refract")
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
o2:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.j(u)
s=A.kh(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.aa()
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
if(!a.b.a)n=!1
else n=!0
if(n)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.e([],r)
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
c.a+="      highLight = intensity*("+C.a.t(m," + ")+");\n"}else c.a+="   highLight = "+C.a.t(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.t(o," + ")+");\n"
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
o7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.j(u)
s=A.kh(t)
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
if(typeof u!=="number")return u.aa()
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
o=c.a+="   return "+C.a.t(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.e([],r)
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
k=H.e([],r)
if(!a.c.a)r=!1
else r=!0
if(r)C.a.h(k,"diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)C.a.h(k,"invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
else r=!0
if(r)C.a.h(k,"specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.t(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.t(l," + ")+");\n"
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
ob:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.j(u)
s=A.kh(t)
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
if(typeof u!=="number")return u.aa()
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
r=c.a+="   return "+C.a.t(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.e([],u)
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
i=H.e([],u)
if(!a.c.a)u=!1
else u=!0
if(u)C.a.h(i,"diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)C.a.h(i,"invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)C.a.h(i,"specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.t(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.t(j," + ")+");\n"
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
o5:function(a,b){var u,t
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
u=b.a+="   return "+C.a.t(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
oc:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.a3("")
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
A.o3(a,j)
A.o0(a,j)
A.o1(a,j)
A.o4(a,j)
A.oa(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.o8(a,j)
A.o9(a,j)}A.o6(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.v)(q),++o)A.o2(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.v)(q),++o)A.o7(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.v)(q),++o)A.ob(a,q[o],j)
A.o5(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.e([],[P.h])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.v)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ab(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.v)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ab(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.v)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ab(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)C.a.h(n,"emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)C.a.h(n,"reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.t(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
od:function(a,b){var u,t,s
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
of:function(a,b){var u
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
oe:function(a,b){var u
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
oh:function(a,b){var u,t
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
oi:function(a,b){var u,t
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
og:function(a,b){var u
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
oj:function(a,b){var u
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
kh:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.b.ab(a,1)},
kD:function(a,b,c,d,e){var u=new A.ic(a,c,e)
u.f=d
u.shm(P.n1(d,0,P.l))
return u},
d4:function d4(a,b,c){this.a=a
this.b=b
this.c=c},
f_:function f_(a){this.a=a},
ak:function ak(a,b,c){this.a=a
this.b=b
this.c=c},
fX:function fX(a,b){var _=this
_.iF=_.iE=_.dg=_.df=_.aX=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iS=_.iR=_.iQ=_.c_=_.bZ=_.bY=_.bX=_.bW=_.bV=_.iP=_.iO=_.dn=_.iN=_.iM=_.dm=_.dl=_.iL=_.iK=_.dk=_.dj=_.iJ=_.iI=_.di=_.iH=_.iG=_.dh=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aG:function aG(a,b){this.a=a
this.b=b},
aK:function aK(a,b){this.a=a
this.b=b},
aO:function aO(a,b){this.a=a
this.b=b},
h_:function h_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aX=b3
_.df=b4},
bV:function bV(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bW:function bW(a,b,c,d,e,f,g,h,i,j){var _=this
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
bZ:function bZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cB:function cB(){},
dP:function dP(){},
ii:function ii(a){this.a=a},
aA:function aA(a,b,c){this.a=a
this.c=b
this.d=c},
ie:function ie(a,b,c){this.a=a
this.c=b
this.d=c},
ig:function ig(a,b,c){this.a=a
this.c=b
this.d=c},
ih:function ih(a,b,c){this.a=a
this.c=b
this.d=c},
ic:function ic(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
af:function af(a,b,c){this.a=a
this.c=b
this.d=c},
id:function id(a,b,c){this.a=a
this.c=b
this.d=c},
W:function W(a,b,c){this.a=a
this.c=b
this.d=c},
cH:function cH(a,b,c){this.a=a
this.c=b
this.d=c},
ij:function ij(a,b,c){this.a=a
this.c=b
this.d=c},
cI:function cI(a,b,c){this.a=a
this.c=b
this.d=c},
av:function av(a,b,c){this.a=a
this.c=b
this.d=c},
bX:function bX(a,b,c){this.a=a
this.c=b
this.d=c},
bY:function bY(a,b,c){this.a=a
this.c=b
this.d=c}},F={
m1:function(a,b,c){var u=null,t=F.kB()
F.cX(t,u,b,c,a,1,0,0,1)
F.cX(t,u,b,c,a,0,1,0,3)
F.cX(t,u,b,c,a,0,0,1,2)
F.cX(t,u,b,c,a,-1,0,0,0)
F.cX(t,u,b,c,a,0,-1,0,0)
F.cX(t,u,b,c,a,0,0,-1,3)
t.ac()
return t},
jC:function(a){var u,t=a.a>0?1:0
if(a.b>0)t+=2
u=a.c
if(typeof u!=="number")return u.W()
return(u>0?t+4:t)*2},
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
j.d=i}m=F.jC(i)
l=F.jC(j.b)
k=F.kg(d,a0,new F.jB(j,F.jC(j.c),F.jC(j.d),l,m,c),b)
if(k!=null)a.aZ(k)},
m4:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.kB()
t=b?-1:1
s=-6.283185307179586/e
r=H.e([],[F.ap])
q=u.a
p=new V.H(0,0,t)
p=p.p(0,Math.sqrt(p.B(p)))
C.a.h(r,q.hs(new V.bh(a,-1,-1,-1),new V.aV(1,1,1,1),new V.a_(0,0,c),new V.H(0,0,t),new V.a9(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.p(k)
j=new V.H(m,l,t).p(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dX(new V.bh(a,-1,-1,-1),null,new V.aV(i,g,h,1),new V.a_(m*k,l*k,c),new V.H(0,0,t),new V.a9(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.hq(r)
return u},
m2:function(a,b,c,d){return F.ou(!0,a,b,new F.jN(1,d),c)},
ou:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.kg(c,e,new F.jP(d),null)
if(u==null)return
u.ac()
u.bL()
if(b)u.aZ(F.m4(3,!1,1,new F.jQ(d),e))
u.aZ(F.m4(1,!0,-1,new F.jR(d),e))
return u},
oP:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.ke()
t=F.m1(a,new F.kf(s,1),b)
t.bL()
return t},
oT:function(a,b){return F.m3(15,30,b,a,new F.ki())},
oH:function(a){return F.m3(12,120,a,1,new F.k1(3,2))},
m3:function(a,b,c,d,e){var u=F.kg(a,b,new F.jO(e,d,b,c),null)
if(u==null)return
u.ac()
u.bL()
return u},
oB:function(){var u,t={}
t.a=u
t.a=null
t.a=new F.jV()
return F.kg(4,4,new F.jW(t),null)},
kg:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kB()
t=H.e([],[F.ap])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dX(g,g,new V.aV(p,0,0,1),g,g,new V.a9(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.bT(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.dX(g,g,new V.aV(j,i,h,1),g,g,new V.a9(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.bT(d))}}u.d.hr(a+1,b+1,t)
return u},
ci:function(a,b,c){var u=new F.a5(),t=a.a
if(t==null)H.y(P.B("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.y(P.B("May not create a face with vertices attached to different shapes."))
u.bJ(a)
u.bK(b)
u.h4(c)
C.a.h(u.a.a.d.b,u)
u.a.a.X()
return u},
mX:function(a,b){var u=new F.bd(),t=a.a
if(t==null)H.y(P.B("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.y(P.B("May not create a line with vertices attached to different shapes."))
u.bJ(a)
u.bK(b)
C.a.h(u.a.a.c.b,u)
u.a.a.X()
return u},
kB:function(){var u=new F.bT(),t=new F.iB(u)
t.b=!1
t.shn(H.e([],[F.ap]))
u.a=t
t=new F.hI(u)
t.sbC(H.e([],[F.bv]))
u.b=t
t=new F.hH(u)
t.seQ(H.e([],[F.bd]))
u.c=t
t=new F.hG(u)
t.seJ(H.e([],[F.a5]))
u.d=t
u.e=null
return u},
dX:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ap(),r=new F.iJ()
r.sbC(H.e([],[F.bv]))
s.b=r
r=new F.iF()
u=[F.bd]
r.seR(H.e([],u))
r.seS(H.e([],u))
s.c=r
r=new F.iC()
u=[F.a5]
r.seK(H.e([],u))
r.seL(H.e([],u))
r.seM(H.e([],u))
s.d=r
h=$.mw()
s.e=0
r=$.bn()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bm().a)!==0?e:t
s.x=(u&$.bl().a)!==0?b:t
s.y=(u&$.bC().a)!==0?f:t
s.z=(u&$.bD().a)!==0?g:t
s.Q=(u&$.mx().a)!==0?c:t
s.ch=(u&$.cc().a)!==0?i:0
s.cx=(u&$.bk().a)!==0?a:t
return s},
jB:function jB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jN:function jN(a,b){this.a=a
this.b=b},
jP:function jP(a){this.a=a},
jQ:function jQ(a){this.a=a},
jR:function jR(a){this.a=a},
ke:function ke(){},
kf:function kf(a,b){this.a=a
this.b=b},
ki:function ki(){},
k1:function k1(a,b){this.a=a
this.b=b},
jO:function jO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jV:function jV(){},
jW:function jW(a){this.a=a},
a5:function a5(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fu:function fu(){},
hM:function hM(){},
bd:function bd(){this.b=this.a=null},
fK:function fK(){},
ib:function ib(){},
bv:function bv(){this.a=null},
bT:function bT(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hG:function hG(a){this.a=a
this.b=null},
hH:function hH(a){this.a=a
this.b=null},
hI:function hI(a){this.a=a
this.b=null},
ap:function ap(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iL:function iL(a){this.a=a},
iK:function iK(a){this.a=a},
iB:function iB(a){this.a=a
this.c=this.b=null},
iC:function iC(){this.d=this.c=this.b=null},
iD:function iD(a,b){this.a=a
this.b=b},
iE:function iE(a,b){this.a=a
this.b=b},
iF:function iF(){this.c=this.b=null},
iH:function iH(){},
iG:function iG(){},
iI:function iI(){},
hm:function hm(){},
iJ:function iJ(){this.b=null}},T={dL:function dL(){}},K={
mb:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a=null,a0="modifiers",a1=V.nm("Test 035"),a2=W.l7()
a2.className="pageLargeCanvas"
a2.id=b
a1.a.appendChild(a2)
u=[P.h]
a1.d9(H.e(["A test of the bending a shape with the Material Light Shader. ","Not all of the shapes have predefined bend values."],u))
a1.ho(H.e(["shapes"],u))
a1.d9(H.e(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b)
if(t==null)H.y(P.B("Failed to find an element with the identifier, testCanvas."))
s=E.nq(t,!0,!0,!0,!1)
r=new E.am()
r.a=""
r.b=!0
a1=E.am
r.seA(0,O.kq(a1))
r.y.b5(r.gi3(),r.gi6())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.scn(0,a)
r.sb_(a)
r.sb_(U.bK(a))
q=new O.dr()
q.sex(O.kq(V.al))
q.e.b5(q.gf1(),q.gf3())
p=new O.b2(q,"emission")
p.c=new A.ak(!1,!1,!1)
p.f=new V.a4(0,0,0)
q.f=p
p=new O.b2(q,"ambient")
p.c=new A.ak(!1,!1,!1)
p.f=new V.a4(0,0,0)
q.r=p
p=new O.b2(q,"diffuse")
p.c=new A.ak(!1,!1,!1)
p.f=new V.a4(0,0,0)
q.x=p
p=new O.b2(q,"invDiffuse")
p.c=new A.ak(!1,!1,!1)
p.f=new V.a4(0,0,0)
q.y=p
p=new O.h2(q,"specular")
p.c=new A.ak(!1,!1,!1)
p.f=new V.a4(0,0,0)
p.ch=100
q.z=p
p=new O.fZ(q,"bump")
p.c=new A.ak(!1,!1,!1)
q.Q=p
q.ch=null
p=new O.b2(q,"reflect")
p.c=new A.ak(!1,!1,!1)
p.f=new V.a4(0,0,0)
q.cx=p
p=new O.h1(q,"refract")
p.c=new A.ak(!1,!1,!1)
p.f=new V.a4(0,0,0)
p.ch=1
q.cy=p
p=new O.fY(q,"alpha")
p.c=new A.ak(!1,!1,!1)
p.f=1
q.db=p
p=new D.dm()
p.bl(D.a7)
p.seG(H.e([],[D.bc]))
p.sfQ(H.e([],[D.dz]))
p.shb(H.e([],[D.dH]))
p.y=p.x=null
p.cm(p.gf_(),p.gfE(),p.gfI())
q.dx=p
o=new O.h0()
o.b=new V.aV(0,0,0,0)
o.c=1
o.d=10
o.e=!1
q.dy=o
o=p.x
p=o==null?p.x=D.S():o
p.h(0,q.gh0())
p=q.dx
o=p.y
p=o==null?p.y=D.S():o
p.h(0,q.gf7())
q.fr=null
p=q.dx
n=V.kG()
o=U.bK(V.lf(V.ln(),n,new V.H(1,1,-3)))
m=new V.a4(1,1,1)
l=new D.bc()
l.c=new V.a4(1,1,1)
l.a=V.lH()
l.d=V.kG()
l.e=V.nz()
k=l.b
l.b=o
o.gA().h(0,l.gef())
o=new D.K("mover",k,l.b,[U.a8])
o.b=!0
l.an(o)
if(!l.c.n(0,m)){k=l.c
l.c=m
o=new D.K("color",k,m,[V.a4])
o.b=!0
l.an(o)}p.h(0,l)
p=q.r
p.saT(0,new V.a4(0,0,1))
p=q.x
p.saT(0,new V.a4(0,1,0))
p=q.z
p.saT(0,new V.a4(1,0,0))
p=q.z
p.d1(new A.ak(!0,!1,!1))
p.d2(10)
q.e.h(0,V.an())
q.e.h(0,V.an())
q.e.h(0,V.an())
q.e.h(0,V.an())
q.e.h(0,V.an())
q.e.h(0,V.an())
q.e.h(0,V.an())
q.e.h(0,V.an())
j=U.kt()
p=s.r
o=new U.dV()
l=U.kr()
l.scl(0,!0)
l.sc5(6.283185307179586)
l.sc7(0)
l.sV(0,0)
l.sc6(100)
l.sR(0)
l.sbU(0.5)
o.b=l
i=o.gaD()
l.gA().h(0,i)
l=U.kr()
l.scl(0,!0)
l.sc5(6.283185307179586)
l.sc7(0)
l.sV(0,0)
l.sc6(100)
l.sR(0)
l.sbU(0.5)
o.c=l
l.gA().h(0,i)
o.d=null
o.r=o.f=o.e=!1
o.y=o.x=2.5
o.Q=4
o.ch=o.cx=!1
o.db=o.cy=0
o.dx=null
o.dy=0
o.fx=o.fr=null
h=new X.au(!1,!1,!1)
k=o.d
o.d=h
l=[X.au]
i=new D.K(a0,k,h,l)
i.b=!0
o.D(i)
i=o.f
if(i!==!1){o.f=!1
i=new D.K("invertX",i,!1,[P.ab])
i.b=!0
o.D(i)}i=o.r
if(i!==!1){o.r=!1
i=new D.K("invertY",i,!1,[P.ab])
i.b=!0
o.D(i)}o.aS(p)
j.h(0,o)
p=s.r
o=new U.dU()
i=U.kr()
i.scl(0,!0)
i.sc5(6.283185307179586)
i.sc7(0)
i.sV(0,0)
i.sc6(100)
i.sR(0)
i.sbU(0.2)
o.b=i
i.gA().h(0,o.gaD())
o.c=null
o.d=!1
o.e=2.5
o.r=4
o.x=o.y=!1
o.z=0
o.Q=null
o.ch=0
o.cy=o.cx=null
h=new X.au(!0,!1,!1)
k=o.c
o.c=h
i=new D.K(a0,k,h,l)
i.b=!0
o.D(i)
o.aS(p)
j.h(0,o)
p=s.r
o=new U.dW()
o.c=0.01
o.e=o.d=0
h=new X.au(!1,!1,!1)
o.b=h
l=new D.K(a0,a,h,l)
l.b=!0
o.D(l)
o.aS(p)
j.h(0,o)
j.h(0,U.bK(V.h9(0,0,5)))
g=U.kt()
g.h(0,U.bK(V.h9(0.5,0,0)))
g.h(0,U.cA(0,1.7,0))
g.h(0,U.cA(0.5,0,0))
g.h(0,U.bK(V.kA(0.35)))
g.h(0,U.cA(-0.5,0,0))
g.h(0,U.cA(0,-1.7,0))
g.h(0,U.bK(V.h9(-0.5,0,0)))
f=U.kt()
f.h(0,U.cA(0,-1.4,0))
f.h(0,U.bK(V.h9(0.5,0,0)))
f.h(0,U.cA(0,1.4,0))
e=new M.df()
e.a=!0
e.sej(0,O.kq(a1))
e.e.b5(e.gf9(),e.gfb())
e.y=e.x=e.r=e.f=null
d=X.mS(a)
c=new X.dy()
c.c=1.0471975511965976
c.d=0.1
c.e=2000
c.sb_(a)
a1=c.c
if(!(Math.abs(a1-1.0471975511965976)<$.I().a)){c.c=1.0471975511965976
a1=new D.K("fov",a1,1.0471975511965976,[P.t])
a1.b=!0
c.aE(a1)}a1=c.d
if(!(Math.abs(a1-0.1)<$.I().a)){c.d=0.1
a1=new D.K("near",a1,0.1,[P.t])
a1.b=!0
c.aE(a1)}a1=c.e
if(!(Math.abs(a1-2000)<$.I().a)){c.e=2000
a1=new D.K("far",a1,2000,[P.t])
a1.b=!0
c.aE(a1)}a1=e.b
if(a1!==c){if(a1!=null)a1.gA().K(0,e.gai())
k=e.b
e.b=c
c.gA().h(0,e.gai())
a1=new D.K("camera",k,e.b,[X.d9])
a1.b=!0
e.ao(a1)}a1=e.c
if(a1!==d){if(a1!=null)a1.gA().K(0,e.gai())
k=e.c
e.c=d
d.gA().h(0,e.gai())
a1=new D.K("target",k,e.c,[X.dK])
a1.b=!0
e.ao(a1)}e.sdT(a)
e.sdT(q)
e.e.h(0,r)
e.b.sb_(j)
a1=e.f
if(a1==null)a1=e.f=D.S()
a1.h(0,new K.k2(g,f,q))
a1=s.d
if(a1!==e){if(a1!=null)a1.gA().K(0,s.gcs())
s.d=e
e.gA().h(0,s.gcs())
s.ct()}a1=new K.ka(r)
p=new V.hv("shapes")
u=u.getElementById("shapes")
p.c=u
if(u==null)H.y("Failed to find shapes for RadioGroup")
p.d8(0,"Cuboid",new K.k3(a1),!0)
p.aI(0,"Cylinder",new K.k4(a1))
p.aI(0,"Cone",new K.k5(a1))
p.aI(0,"Sphere",new K.k6(a1))
p.aI(0,"Toroid",new K.k7(a1))
p.aI(0,"Knot",new K.k8(a1))
p.aI(0,"Grid",new K.k9(a1))
V.oO(s)},
k2:function k2(a,b,c){this.a=a
this.b=b
this.c=c},
ka:function ka(a){this.a=a},
k3:function k3(a){this.a=a},
k4:function k4(a){this.a=a},
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kx.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gG:function(a){return H.cy(a)},
i:function(a){return"Instance of '"+H.j(H.cz(a))+"'"}}
J.fE.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iab:1}
J.dj.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.dk.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.hr.prototype={}
J.c_.prototype={}
J.bt.prototype={
i:function(a){var u=a[$.mk()]
if(u==null)return this.e7(a)
return"JavaScript function for "+H.j(J.ar(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iks:1}
J.b_.prototype={
h:function(a,b){H.C(b,H.u(a,0))
if(!!a.fixed$length)H.y(P.F("add"))
a.push(b)},
dO:function(a,b){if(!!a.fixed$length)H.y(P.F("removeAt"))
if(b<0||b>=a.length)throw H.d(P.dC(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var u
if(!!a.fixed$length)H.y(P.F("remove"))
for(u=0;u<a.length;++u)if(J.N(a[u],b)){a.splice(u,1)
return!0}return!1},
I:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.d(P.bJ(a))}},
t:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.j(t,u,H.j(a[u]))
return t.join(b)},
hZ:function(a){return this.t(a,"")},
hT:function(a,b,c,d){var u,t,s
H.C(b,d)
H.o(c,{func:1,ret:d,args:[d,H.u(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.d(P.bJ(a))}return t},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
e5:function(a,b,c){if(b<0||b>a.length)throw H.d(P.ae(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.ae(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.u(a,0)])
return H.e(a.slice(b,c),[H.u(a,0)])},
ghS:function(a){if(a.length>0)return a[0]
throw H.d(H.lb())},
gax:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.lb())},
bk:function(a,b){var u=H.u(a,0)
H.o(b,{func:1,ret:P.l,args:[u,u]})
if(!!a.immutable$list)H.y(P.F("sort"))
H.dG(a,0,a.length-1,b,u)},
at:function(a,b){var u
for(u=0;u<a.length;++u)if(J.N(a[u],b))return!0
return!1},
i:function(a){return P.ku(a,"[","]")},
gY:function(a){return new J.as(a,a.length,[H.u(a,0)])},
gG:function(a){return H.cy(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.y(P.F("set length"))
if(b<0)throw H.d(P.ae(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(b>=a.length||b<0)throw H.d(H.c6(a,b))
return a[b]},
j:function(a,b,c){H.C(c,H.u(a,0))
if(!!a.immutable$list)H.y(P.F("indexed set"))
if(b>=a.length||b<0)throw H.d(H.c6(a,b))
a[b]=c},
$ik:1,
$ic:1}
J.kw.prototype={}
J.as.prototype={
gP:function(a){return this.d},
H:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.v(s))
u=t.c
if(u>=r){t.scK(null)
return!1}t.scK(s[u]);++t.c
return!0},
scK:function(a){this.d=H.C(a,H.u(this,0))},
$iaZ:1}
J.co.prototype={
hB:function(a,b){var u
H.mc(b)
if(typeof b!=="number")throw H.d(H.bb(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbd(b)
if(this.gbd(a)===u)return 0
if(this.gbd(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbd:function(a){return a===0?1/a<0:a<0},
dr:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.F(""+a+".floor()"))},
ae:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.F(""+a+".round()"))},
dV:function(a,b){var u
if(b>20)throw H.d(P.ae(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbd(a))return"-"+u
return u},
b2:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.ae(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.S(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.y(P.F("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.b(t,1)
u=t[1]
if(3>=s)return H.b(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.m("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
b4:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
e9:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d4(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.d4(a,b)},
d4:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.F("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
aH:function(a,b){var u
if(a>0)u=this.d3(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
h9:function(a,b){if(b<0)throw H.d(H.bb(b))
return this.d3(a,b)},
d3:function(a,b){return b>31?0:a>>>b},
$it:1,
$ia6:1}
J.di.prototype={$il:1}
J.fF.prototype={}
J.bs.prototype={
S:function(a,b){if(b<0)throw H.d(H.c6(a,b))
if(b>=a.length)H.y(H.c6(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.d(H.c6(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!=="string")throw H.d(P.ko(b,null,null))
return a+b},
aN:function(a,b,c,d){var u,t
c=P.bx(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a0:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.ae(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.a0(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.y(H.bb(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.M()
if(b<0)throw H.d(P.dC(b,null))
if(b>c)throw H.d(P.dC(b,null))
if(c>a.length)throw H.d(P.dC(c,null))
return a.substring(b,c)},
ab:function(a,b){return this.q(a,b,null)},
m:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.G)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a8:function(a,b){var u=b-a.length
if(u<=0)return a
return this.m(" ",u)+a},
bc:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.ae(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dz:function(a,b){return this.bc(a,b,0)},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ilk:1,
$ih:1}
H.a2.prototype={
gl:function(a){return this.a.length},
k:function(a,b){return C.b.S(this.a,b)},
$acJ:function(){return[P.l]},
$aw:function(){return[P.l]},
$ak:function(){return[P.l]},
$ac:function(){return[P.l]}}
H.fp.prototype={}
H.dn.prototype={
gP:function(a){return this.d},
H:function(){var u,t=this,s=t.a,r=J.d_(s),q=r.gl(s)
if(t.b!==q)throw H.d(P.bJ(s))
u=t.c
if(u>=q){t.saP(null)
return!1}t.saP(r.J(s,u));++t.c
return!0},
saP:function(a){this.d=H.C(a,H.u(this,0))},
$iaZ:1}
H.fV.prototype={
gY:function(a){return new H.fW(J.bE(this.a),this.b,this.$ti)},
gl:function(a){return J.aF(this.a)},
J:function(a,b){return this.b.$1(J.kn(this.a,b))},
$ak:function(a,b){return[b]}}
H.fW.prototype={
H:function(){var u=this,t=u.b
if(t.H()){u.saP(u.c.$1(t.gP(t)))
return!0}u.saP(null)
return!1},
gP:function(a){return this.a},
saP:function(a){this.a=H.C(a,H.u(this,1))},
$aaZ:function(a,b){return[b]}}
H.iO.prototype={
gY:function(a){return new H.iP(J.bE(this.a),this.b,this.$ti)}}
H.iP.prototype={
H:function(){var u,t
for(u=this.a,t=this.b;u.H();)if(H.E(t.$1(u.gP(u))))return!0
return!1},
gP:function(a){var u=this.a
return u.gP(u)}}
H.bM.prototype={}
H.cJ.prototype={
j:function(a,b,c){H.C(c,H.aw(this,"cJ",0))
throw H.d(P.F("Cannot modify an unmodifiable list"))}}
H.dR.prototype={}
H.fc.prototype={
i:function(a){return P.kz(this)},
j:function(a,b,c){H.C(b,H.u(this,0))
H.C(c,H.u(this,1))
return H.mO()},
$iz:1}
H.fd.prototype={
gl:function(a){return this.a},
bb:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
k:function(a,b){if(!this.bb(0,b))return
return this.cL(b)},
cL:function(a){return this.b[H.U(a)]},
I:function(a,b){var u,t,s,r,q=this,p=H.u(q,1)
H.o(b,{func:1,ret:-1,args:[H.u(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.C(q.cL(r),p))}}}
H.i8.prototype={
a7:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hn.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fH.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.j(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.j(t.a)+")"
return s+r+"' on '"+u+"' ("+H.j(t.a)+")"}}
H.im.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kj.prototype={
$1:function(a){if(!!J.T(a).$ibq)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:24}
H.ev.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iao:1}
H.cf.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$iks:1,
giy:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hZ.prototype={}
H.hR.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cb(u)+"'"}}
H.cd.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cd))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.cy(this.a)
else u=typeof t!=="object"?J.d3(t):H.cy(t)
return(u^H.cy(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.j(H.cz(u))+"'")}}
H.ia.prototype={
i:function(a){return this.a}}
H.f8.prototype={
i:function(a){return this.a}}
H.hD.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.iQ.prototype={
i:function(a){return"Assertion failed: "+P.dg(this.a)}}
H.Y.prototype={
gl:function(a){return this.a},
gal:function(a){return new H.fM(this,[H.u(this,0)])},
bb:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cH(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cH(t,b)}else return s.hW(b)},
hW:function(a){var u=this,t=u.d
if(t==null)return!1
return u.c2(u.br(t,u.c1(a)),a)>=0},
k:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b6(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b6(r,b)
s=t==null?null:t.b
return s}else return q.hX(b)},
hX:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.br(r,s.c1(a))
t=s.c2(u,a)
if(t<0)return
return u[t].b},
j:function(a,b,c){var u,t,s=this
H.C(b,H.u(s,0))
H.C(c,H.u(s,1))
if(typeof b==="string"){u=s.b
s.cz(u==null?s.b=s.bA():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cz(t==null?s.c=s.bA():t,b,c)}else s.hY(b,c)},
hY:function(a,b){var u,t,s,r,q=this
H.C(a,H.u(q,0))
H.C(b,H.u(q,1))
u=q.d
if(u==null)u=q.d=q.bA()
t=q.c1(a)
s=q.br(u,t)
if(s==null)q.bH(u,t,[q.bB(a,b)])
else{r=q.c2(s,a)
if(r>=0)s[r].b=b
else s.push(q.bB(a,b))}},
I:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.u(s,0),H.u(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.d(P.bJ(s))
u=u.c}},
cz:function(a,b,c){var u,t=this
H.C(b,H.u(t,0))
H.C(c,H.u(t,1))
u=t.b6(a,b)
if(u==null)t.bH(a,b,t.bB(b,c))
else u.b=c},
bB:function(a,b){var u=this,t=new H.fL(H.C(a,H.u(u,0)),H.C(b,H.u(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
c1:function(a){return J.d3(a)&0x3ffffff},
c2:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.N(a[t].a,b))return t
return-1},
i:function(a){return P.kz(this)},
b6:function(a,b){return a[b]},
br:function(a,b){return a[b]},
bH:function(a,b,c){a[b]=c},
eE:function(a,b){delete a[b]},
cH:function(a,b){return this.b6(a,b)!=null},
bA:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bH(t,u,t)
this.eE(t,u)
return t}}
H.fL.prototype={}
H.fM.prototype={
gl:function(a){return this.a.a},
gY:function(a){var u=this.a,t=new H.fN(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fN.prototype={
gP:function(a){return this.d},
H:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bJ(t))
else{t=u.c
if(t==null){u.scw(null)
return!1}else{u.scw(t.a)
u.c=u.c.c
return!0}}},
scw:function(a){this.d=H.C(a,H.u(this,0))},
$iaZ:1}
H.jY.prototype={
$1:function(a){return this.a(a)},
$S:24}
H.jZ.prototype={
$2:function(a,b){return this.a(a,b)},
$S:51}
H.k_.prototype={
$1:function(a){return this.a(H.U(a))},
$S:46}
H.fG.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ilk:1,
$ini:1}
H.ct.prototype={$ict:1}
H.bu.prototype={$ibu:1}
H.du.prototype={
gl:function(a){return a.length},
$iJ:1,
$aJ:function(){}}
H.cu.prototype={
k:function(a,b){H.ba(b,a,a.length)
return a[b]},
j:function(a,b,c){H.ow(c)
H.ba(b,a,a.length)
a[b]=c},
$abM:function(){return[P.t]},
$aw:function(){return[P.t]},
$ik:1,
$ak:function(){return[P.t]},
$ic:1,
$ac:function(){return[P.t]}}
H.dv.prototype={
j:function(a,b,c){H.ac(c)
H.ba(b,a,a.length)
a[b]=c},
$abM:function(){return[P.l]},
$aw:function(){return[P.l]},
$ik:1,
$ak:function(){return[P.l]},
$ic:1,
$ac:function(){return[P.l]}}
H.hh.prototype={
k:function(a,b){H.ba(b,a,a.length)
return a[b]}}
H.hi.prototype={
k:function(a,b){H.ba(b,a,a.length)
return a[b]}}
H.hj.prototype={
k:function(a,b){H.ba(b,a,a.length)
return a[b]}}
H.hk.prototype={
k:function(a,b){H.ba(b,a,a.length)
return a[b]}}
H.hl.prototype={
k:function(a,b){H.ba(b,a,a.length)
return a[b]}}
H.dw.prototype={
gl:function(a){return a.length},
k:function(a,b){H.ba(b,a,a.length)
return a[b]}}
H.cv.prototype={
gl:function(a){return a.length},
k:function(a,b){H.ba(b,a,a.length)
return a[b]},
$icv:1,
$iO:1}
H.cO.prototype={}
H.cP.prototype={}
H.cQ.prototype={}
H.cR.prototype={}
P.iS.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:19}
P.iR.prototype={
$1:function(a){var u,t
this.a.a=H.o(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:45}
P.iT.prototype={
$0:function(){this.a.$0()},
$S:0}
P.iU.prototype={
$0:function(){this.a.$0()},
$S:0}
P.eB.prototype={
en:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c5(new P.jr(this,b),0),a)
else throw H.d(P.F("`setTimeout()` not found."))},
eo:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c5(new P.jq(this,a,Date.now(),b),0),a)
else throw H.d(P.F("Periodic timer."))},
$ib5:1}
P.jr.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jq.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.e9(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.b9.prototype={
i0:function(a){if((this.c&15)!==6)return!0
return this.b.b.cf(H.o(this.d,{func:1,ret:P.ab,args:[P.P]}),a.a,P.ab,P.P)},
hV:function(a){var u=this.e,t=P.P,s={futureOr:1,type:H.u(this,1)},r=this.b.b
if(H.eR(u,{func:1,args:[P.P,P.ao]}))return H.kV(r.ir(u,a.a,a.b,null,t,P.ao),s)
else return H.kV(r.cf(H.o(u,{func:1,args:[P.P]}),a.a,null,t),s)}}
P.aC.prototype={
dU:function(a,b,c){var u,t,s,r=H.u(this,0)
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.X
if(u!==C.f){H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.ol(b,u)}t=new P.aC($.X,[c])
s=b==null?1:3
this.cA(new P.b9(t,s,a,b,[r,c]))
return t},
iu:function(a,b){return this.dU(a,null,b)},
cA:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ib9")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaC")
s=u.a
if(s<4){u.cA(a)
return}t.a=s
t.c=u.c}P.jL(null,null,t.b,H.o(new P.j1(t,a),{func:1,ret:-1}))}},
cY:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ib9")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaC")
u=q.a
if(u<4){q.cY(a)
return}p.a=u
p.c=q.c}o.a=p.b8(a)
P.jL(null,null,p.b,H.o(new P.j5(o,p),{func:1,ret:-1}))}},
bE:function(){var u=H.f(this.c,"$ib9")
this.c=null
return this.b8(u)},
b8:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cD:function(a){var u,t,s=this,r=H.u(s,0)
H.kV(a,{futureOr:1,type:r})
u=s.$ti
if(H.kS(a,"$ick",u,"$ack"))if(H.kS(a,"$iaC",u,null))P.lI(a,s)
else P.nE(a,s)
else{t=s.bE()
H.C(a,r)
s.a=4
s.c=a
P.cM(s,t)}},
cE:function(a,b){var u,t=this
H.f(b,"$iao")
u=t.bE()
t.a=8
t.c=new P.aj(a,b)
P.cM(t,u)},
$ick:1}
P.j1.prototype={
$0:function(){P.cM(this.a,this.b)},
$S:0}
P.j5.prototype={
$0:function(){P.cM(this.b,this.a.a)},
$S:0}
P.j2.prototype={
$1:function(a){var u=this.a
u.a=0
u.cD(a)},
$S:19}
P.j3.prototype={
$2:function(a,b){H.f(b,"$iao")
this.a.cE(a,b)},
$1:function(a){return this.$2(a,null)},
$S:43}
P.j4.prototype={
$0:function(){this.a.cE(this.b,this.c)},
$S:0}
P.j8.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dS(H.o(s.d,{func:1}),null)}catch(r){u=H.aE(r)
t=H.c9(r)
if(o.d){s=H.f(o.a.a.c,"$iaj").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$iaj")
else q.b=new P.aj(u,t)
q.a=!0
return}if(!!J.T(n).$ick){if(n instanceof P.aC&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$iaj")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.iu(new P.j9(p),null)
s.a=!1}},
$S:3}
P.j9.prototype={
$1:function(a){return this.a},
$S:42}
P.j7.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.u(s,0)
q=H.C(n.c,r)
p=H.u(s,1)
n.a.b=s.b.b.cf(H.o(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aE(o)
t=H.c9(o)
s=n.a
s.b=new P.aj(u,t)
s.a=!0}},
$S:3}
P.j6.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$iaj")
r=m.c
if(H.E(r.i0(u))&&r.e!=null){q=m.b
q.b=r.hV(u)
q.a=!1}}catch(p){t=H.aE(p)
s=H.c9(p)
r=H.f(m.a.a.c,"$iaj")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.aj(t,s)
n.a=!0}},
$S:3}
P.dZ.prototype={}
P.hU.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.aC($.X,[P.l])
r.a=0
u=H.u(s,0)
t=H.o(new P.hW(r,s),{func:1,ret:-1,args:[u]})
H.o(new P.hX(r,q),{func:1,ret:-1})
W.aa(s.a,s.b,t,!1,u)
return q}}
P.hW.prototype={
$1:function(a){H.C(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.u(this.b,0)]}}}
P.hX.prototype={
$0:function(){this.b.cD(this.a.a)},
$S:0}
P.cD.prototype={}
P.hV.prototype={}
P.b5.prototype={}
P.aj.prototype={
i:function(a){return H.j(this.a)},
$ibq:1}
P.jA.prototype={$ipr:1}
P.jK.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dx():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.i(0)
throw u},
$S:0}
P.jf.prototype={
is:function(a){var u,t,s,r=null
H.o(a,{func:1,ret:-1})
try{if(C.f===$.X){a.$0()
return}P.lR(r,r,this,a,-1)}catch(s){u=H.aE(s)
t=H.c9(s)
P.jJ(r,r,this,u,H.f(t,"$iao"))}},
it:function(a,b,c){var u,t,s,r=null
H.o(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.f===$.X){a.$1(b)
return}P.lS(r,r,this,a,b,-1,c)}catch(s){u=H.aE(s)
t=H.c9(s)
P.jJ(r,r,this,u,H.f(t,"$iao"))}},
hx:function(a,b){return new P.jh(this,H.o(a,{func:1,ret:b}),b)},
bN:function(a){return new P.jg(this,H.o(a,{func:1,ret:-1}))},
da:function(a,b){return new P.ji(this,H.o(a,{func:1,ret:-1,args:[b]}),b)},
dS:function(a,b){H.o(a,{func:1,ret:b})
if($.X===C.f)return a.$0()
return P.lR(null,null,this,a,b)},
cf:function(a,b,c,d){H.o(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.X===C.f)return a.$1(b)
return P.lS(null,null,this,a,b,c,d)},
ir:function(a,b,c,d,e,f){H.o(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.X===C.f)return a.$2(b,c)
return P.om(null,null,this,a,b,c,d,e,f)}}
P.jh.prototype={
$0:function(){return this.a.dS(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jg.prototype={
$0:function(){return this.a.is(this.b)},
$S:3}
P.ji.prototype={
$1:function(a){var u=this.c
return this.a.it(this.b,H.C(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jd.prototype={
gY:function(a){var u=this,t=new P.ed(u,u.r,u.$ti)
t.c=u.e
return t},
gl:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.C(b,H.u(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cB(u==null?s.b=P.kJ():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cB(t==null?s.c=P.kJ():t,b)}else return s.eq(0,b)},
eq:function(a,b){var u,t,s,r=this
H.C(b,H.u(r,0))
u=r.d
if(u==null)u=r.d=P.kJ()
t=r.cF(b)
s=u[t]
if(s==null)u[t]=[r.bn(b)]
else{if(r.cM(s,b)>=0)return!1
s.push(r.bn(b))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fW(this.c,b)
else return this.fV(0,b)},
fV:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.eO(r,b)
t=s.cM(u,b)
if(t<0)return!1
s.d5(u.splice(t,1)[0])
return!0},
cB:function(a,b){H.C(b,H.u(this,0))
if(H.f(a[b],"$icN")!=null)return!1
a[b]=this.bn(b)
return!0},
fW:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icN")
if(u==null)return!1
this.d5(u)
delete a[b]
return!0},
cQ:function(){this.r=1073741823&this.r+1},
bn:function(a){var u,t=this,s=new P.cN(H.C(a,H.u(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cQ()
return s},
d5:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cQ()},
cF:function(a){return J.d3(a)&1073741823},
eO:function(a,b){return a[this.cF(b)]},
cM:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.N(a[t].a,b))return t
return-1}}
P.cN.prototype={}
P.ed.prototype={
gP:function(a){return this.d},
H:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bJ(t))
else{t=u.c
if(t==null){u.scC(null)
return!1}else{u.scC(H.C(t.a,H.u(u,0)))
u.c=u.c.b
return!0}}},
scC:function(a){this.d=H.C(a,H.u(this,0))},
$iaZ:1}
P.fO.prototype={
$2:function(a,b){this.a.j(0,H.C(a,this.b),H.C(b,this.c))},
$S:7}
P.fP.prototype={$ik:1,$ic:1}
P.w.prototype={
gY:function(a){return new H.dn(a,this.gl(a),[H.c8(this,a,"w",0)])},
J:function(a,b){return this.k(a,b)},
iw:function(a,b){var u,t=this,s=H.e([],[H.c8(t,a,"w",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.j(s,u,t.k(a,u))
return s},
iv:function(a){return this.iw(a,!0)},
hQ:function(a,b,c,d){var u
H.C(d,H.c8(this,a,"w",0))
P.bx(b,c,this.gl(a))
for(u=b;u<c;++u)this.j(a,u,d)},
i:function(a){return P.ku(a,"[","]")}}
P.fS.prototype={}
P.fT.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.j(a)
t.a=u+": "
t.a+=H.j(b)},
$S:7}
P.ag.prototype={
I:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.c8(s,a,"ag",0),H.c8(s,a,"ag",1)]})
for(u=J.bE(s.gal(a));u.H();){t=u.gP(u)
b.$2(t,s.k(a,t))}},
gl:function(a){return J.aF(this.gal(a))},
i:function(a){return P.kz(a)},
$iz:1}
P.js.prototype={
j:function(a,b,c){H.C(b,H.u(this,0))
H.C(c,H.u(this,1))
throw H.d(P.F("Cannot modify unmodifiable map"))}}
P.fU.prototype={
k:function(a,b){return J.d2(this.a,b)},
j:function(a,b,c){J.kl(this.a,H.C(b,H.u(this,0)),H.C(c,H.u(this,1)))},
I:function(a,b){J.l2(this.a,H.o(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]}))},
gl:function(a){return J.aF(this.a)},
i:function(a){return J.ar(this.a)},
$iz:1}
P.dS.prototype={}
P.jj.prototype={
i:function(a){return P.ku(this,"{","}")},
J:function(a,b){var u,t,s,r=this
P.lq(b,"index")
for(u=P.nG(r,r.r,H.u(r,0)),t=0;u.H();){s=u.d
if(b===t)return s;++t}throw H.d(P.V(b,r,"index",null,t))},
$ik:1,
$ilt:1}
P.ee.prototype={}
P.eG.prototype={}
P.f4.prototype={
i2:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bx(a0,a1,b.length)
u=$.mz()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.E(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jX(C.b.E(b,n))
j=H.jX(C.b.E(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.b(u,i)
h=u[i]
if(h>=0){i=C.b.S("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.a3("")
g=r.a+=C.b.q(b,s,t)
r.a=g+H.dA(m)
s=n
continue}}throw H.d(P.a1("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.q(b,s,a1)
f=g.length
if(q>=0)P.l4(b,p,a1,q,o,f)
else{e=C.d.b4(f-1,4)+1
if(e===1)throw H.d(P.a1(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aN(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.l4(b,p,a1,q,o,d)
else{e=C.d.b4(d,4)
if(e===1)throw H.d(P.a1(c,b,a1))
if(e>1)b=C.b.aN(b,a1,a1,e===2?"==":"=")}return b},
$abI:function(){return[[P.c,P.l],P.h]}}
P.f5.prototype={
$abL:function(){return[[P.c,P.l],P.h]}}
P.bI.prototype={}
P.bL.prototype={}
P.fq.prototype={
$abI:function(){return[P.h,[P.c,P.l]]}}
P.iv.prototype={
ghP:function(){return C.H}}
P.ix.prototype={
bS:function(a){var u,t,s=P.bx(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jz(u)
if(t.eN(a,0,s)!==s)t.d7(J.mF(a,s-1),0)
return new Uint8Array(u.subarray(0,H.nX(0,t.b,u.length)))},
$abL:function(){return[P.h,[P.c,P.l]]}}
P.jz.prototype={
d7:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eN:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.S(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.E(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d7(r,C.b.E(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iw.prototype={
bS:function(a){var u,t,s,r,q,p,o,n,m
H.n(a,"$ic",[P.l],"$ac")
u=P.nu(!1,a,0,null)
if(u!=null)return u
t=P.bx(0,null,J.aF(a))
s=P.lU(a,0,t)
if(s>0){r=P.cE(a,0,s)
if(s===t)return r
q=new P.a3(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.a3("")
n=new P.jy(!1,q)
n.c=o
n.hC(a,p,t)
if(n.e>0){H.y(P.a1("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.dA(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abL:function(){return[[P.c,P.l],P.h]}}
P.jy.prototype={
hC:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.n(a,"$ic",[P.l],"$ac")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.d_(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.k(a,p)
if(typeof o!=="number")return o.aa()
if((o&192)!==128){n=P.a1(h+C.d.b2(o,16),a,p)
throw H.d(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.b(C.t,n)
if(u<=C.t[n]){n=P.a1("Overlong encoding of 0x"+C.d.b2(u,16),a,p-s-1)
throw H.d(n)}if(u>1114111){n=P.a1("Character outside valid Unicode range: 0x"+C.d.b2(u,16),a,p-s-1)
throw H.d(n)}if(!i.c||u!==65279)q.a+=H.dA(u)
i.c=!1}for(n=p<c;n;){m=P.lU(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cE(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.k(a,l)
if(typeof o!=="number")return o.M()
if(o<0){j=P.a1("Negative UTF-8 code unit: -0x"+C.d.b2(-o,16),a,k-1)
throw H.d(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a1(h+C.d.b2(o,16),a,k-1)
throw H.d(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.ab.prototype={}
P.at.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.at&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.d.aH(u,30))&1073741823},
i:function(a){var u=this,t=P.mP(H.ne(u)),s=P.db(H.nc(u)),r=P.db(H.n8(u)),q=P.db(H.n9(u)),p=P.db(H.nb(u)),o=P.db(H.nd(u)),n=P.mQ(H.na(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.t.prototype={}
P.bp.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.bp&&this.a===b.a},
gG:function(a){return C.d.gG(this.a)},
i:function(a){var u,t,s,r=new P.fo(),q=this.a
if(q<0)return"-"+new P.bp(0-q).i(0)
u=r.$1(C.d.a3(q,6e7)%60)
t=r.$1(C.d.a3(q,1e6)%60)
s=new P.fn().$1(q%1e6)
return""+C.d.a3(q,36e8)+":"+H.j(u)+":"+H.j(t)+"."+H.j(s)}}
P.fn.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:18}
P.fo.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:18}
P.bq.prototype={}
P.eZ.prototype={
i:function(a){return"Assertion failed"}}
P.dx.prototype={
i:function(a){return"Throw of null."}}
P.aT.prototype={
gbp:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbo:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbp()+o+u
if(!q.a)return t
s=q.gbo()
r=P.dg(q.b)
return t+s+": "+r}}
P.bR.prototype={
gbp:function(){return"RangeError"},
gbo:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.j(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.j(s)
else if(t>s)u=": Not in range "+H.j(s)+".."+H.j(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.j(s)}return u}}
P.fD.prototype={
gbp:function(){return"RangeError"},
gbo:function(){var u,t=H.ac(this.b)
if(typeof t!=="number")return t.M()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.j(u)},
gl:function(a){return this.f}}
P.io.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ik.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hQ.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fb.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dg(u)+"."}}
P.hq.prototype={
i:function(a){return"Out of Memory"},
$ibq:1}
P.dI.prototype={
i:function(a){return"Stack Overflow"},
$ibq:1}
P.fi.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e6.prototype={
i:function(a){return"Exception: "+this.a}}
P.fA.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.q(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.E(f,q)
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
k=""}j=C.b.q(f,m,n)
return h+l+j+k+"\n"+C.b.m(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.j(g)+")"):h}}
P.l.prototype={}
P.k.prototype={
gl:function(a){var u,t=this.gY(this)
for(u=0;t.H();)++u
return u},
J:function(a,b){var u,t,s
P.lq(b,"index")
for(u=this.gY(this),t=0;u.H();){s=u.gP(u)
if(b===t)return s;++t}throw H.d(P.V(b,this,"index",null,t))},
i:function(a){return P.mU(this,"(",")")}}
P.aZ.prototype={}
P.c.prototype={$ik:1}
P.z.prototype={}
P.L.prototype={
gG:function(a){return P.P.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.a6.prototype={}
P.P.prototype={constructor:P.P,$iP:1,
n:function(a,b){return this===b},
gG:function(a){return H.cy(this)},
i:function(a){return"Instance of '"+H.j(H.cz(this))+"'"},
toString:function(){return this.i(this)}}
P.ao.prototype={}
P.h.prototype={$ilk:1}
P.a3.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ip2:1}
P.it.prototype={
$2:function(a,b){var u,t,s,r=P.h
H.n(a,"$iz",[r,r],"$az")
H.U(b)
u=J.kW(b).dz(b,"=")
if(u===-1){if(b!=="")J.kl(a,P.kN(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.q(b,0,u)
s=C.b.ab(b,u+1)
r=this.a
J.kl(a,P.kN(t,0,t.length,r,!0),P.kN(s,0,s.length,r,!0))}return a},
$S:41}
P.iq.prototype={
$2:function(a,b){throw H.d(P.a1("Illegal IPv4 address, "+a,this.a,b))},
$S:40}
P.ir.prototype={
$2:function(a,b){throw H.d(P.a1("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:39}
P.is.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eT(C.b.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.M()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:38}
P.c0.prototype={
ge0:function(){return this.b},
gc0:function(a){var u=this.c
if(u==null)return""
if(C.b.a5(u,"["))return C.b.q(u,1,u.length-1)
return u},
gbf:function(a){var u=this.d
if(u==null)return P.lK(this.a)
return u},
gca:function(a){var u=this.f
return u==null?"":u},
gds:function(){var u=this.r
return u==null?"":u},
dP:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.n(b,"$iz",[P.h,null],"$az")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a5(p,"/"))p="/"+p
n=P.kL(null,0,0,b)
return new P.c0(u,s,q,r,p,n,m.r)},
gcb:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.h
s.sfU(new P.dS(P.lC(u==null?"":u),[t,t]))}return s.Q},
gdt:function(){return this.c!=null},
gdw:function(){return this.f!=null},
gdu:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
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
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.T(b).$ikE)if(s.a==b.gbj())if(s.c!=null===b.gdt())if(s.b==b.ge0())if(s.gc0(s)==b.gc0(b))if(s.gbf(s)==b.gbf(b))if(s.e===b.gdJ(b)){u=s.f
t=u==null
if(!t===b.gdw()){if(t)u=""
if(u===b.gca(b)){u=s.r
t=u==null
if(!t===b.gdu()){if(t)u=""
u=u===b.gds()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gG:function(a){var u=this.z
return u==null?this.z=C.b.gG(this.i(0)):u},
sfU:function(a){var u=P.h
this.Q=H.n(a,"$iz",[u,u],"$az")},
$ikE:1,
gbj:function(){return this.a},
gdJ:function(a){return this.e}}
P.jt.prototype={
$1:function(a){throw H.d(P.a1("Invalid port",this.a,this.b+1))},
$S:37}
P.ju.prototype={
$1:function(a){return P.jx(C.O,a,C.h,!1)},
$S:36}
P.jw.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.j(P.jx(C.i,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.j(P.jx(C.i,b,C.h,!0))}},
$S:28}
P.jv.prototype={
$2:function(a,b){var u,t
H.U(a)
if(b==null||typeof b==="string")this.a.$2(a,H.U(b))
else for(u=J.bE(H.ma(b,"$ik")),t=this.a;u.H();)t.$2(a,H.U(u.gP(u)))},
$S:35}
P.ip.prototype={
ge_:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.b(o,0)
u=q.a
o=o[0]+1
t=C.b.bc(u,"?",o)
s=u.length
if(t>=0){r=P.cW(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.iY("data",p,p,p,P.cW(u,o,s,C.v,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.b(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jE.prototype={
$1:function(a){return new Uint8Array(96)},
$S:34}
P.jD.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.b(u,a)
u=u[a]
J.mG(u,0,96,b)
return u},
$S:32}
P.jF.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.E(b,s)^96
if(r>=t)return H.b(a,r)
a[r]=c}}}
P.jG.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.E(b,0),t=C.b.E(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.b(a,r)
a[r]=c}}}
P.jk.prototype={
gdt:function(){return this.c>0},
gdv:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.v()
t=this.e
if(typeof t!=="number")return H.p(t)
t=u+1<t
u=t}else u=!1
return u},
gdw:function(){var u=this.f
if(typeof u!=="number")return u.M()
return u<this.r},
gdu:function(){return this.r<this.a.length},
gcO:function(){return this.b===4&&C.b.a5(this.a,"http")},
gcP:function(){return this.b===5&&C.b.a5(this.a,"https")},
gbj:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcO())q=t.x="http"
else if(t.gcP()){t.x="https"
q="https"}else if(q===4&&C.b.a5(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a5(t.a,r)){t.x=r
q=r}else{q=C.b.q(t.a,0,q)
t.x=q}return q},
ge0:function(){var u=this.c,t=this.b+3
return u>t?C.b.q(this.a,t,u-1):""},
gc0:function(a){var u=this.c
return u>0?C.b.q(this.a,u,this.d):""},
gbf:function(a){var u,t=this
if(t.gdv()){u=t.d
if(typeof u!=="number")return u.v()
return P.eT(C.b.q(t.a,u+1,t.e),null,null)}if(t.gcO())return 80
if(t.gcP())return 443
return 0},
gdJ:function(a){return C.b.q(this.a,this.e,this.f)},
gca:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.M()
return u<t?C.b.q(this.a,u+1,t):""},
gds:function(){var u=this.r,t=this.a
return u<t.length?C.b.ab(t,u+1):""},
gcb:function(){var u=this,t=u.f
if(typeof t!=="number")return t.M()
if(t>=u.r)return C.P
t=P.h
return new P.dS(P.lC(u.gca(u)),[t,t])},
dP:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.n(b,"$iz",[P.h,null],"$az")
u=k.gbj()
t=u==="file"
s=k.c
r=s>0?C.b.q(k.a,k.b+3,s):""
q=k.gdv()?k.gbf(k):j
s=k.c
if(s>0)p=C.b.q(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.q(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a5(o,"/"))o="/"+o
m=P.kL(j,0,0,b)
n=k.r
l=n<s.length?C.b.ab(s,n+1):j
return new P.c0(u,r,p,q,o,m,l)},
gG:function(a){var u=this.y
return u==null?this.y=C.b.gG(this.a):u},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.T(b).$ikE&&this.a===b.i(0)},
i:function(a){return this.a},
$ikE:1}
P.iY.prototype={}
W.r.prototype={}
W.eU.prototype={
gl:function(a){return a.length}}
W.eW.prototype={
i:function(a){return String(a)}}
W.eX.prototype={
i:function(a){return String(a)}}
W.bG.prototype={$ibG:1}
W.bH.prototype={
e2:function(a,b,c){var u=a.getContext(b,P.ot(c))
return u},
$ibH:1}
W.bo.prototype={
gl:function(a){return a.length}}
W.cg.prototype={$icg:1}
W.fe.prototype={
gl:function(a){return a.length}}
W.Q.prototype={$iQ:1}
W.ch.prototype={
gl:function(a){return a.length}}
W.ff.prototype={}
W.aW.prototype={}
W.aX.prototype={}
W.fg.prototype={
gl:function(a){return a.length}}
W.fh.prototype={
gl:function(a){return a.length}}
W.fj.prototype={
gl:function(a){return a.length}}
W.dc.prototype={$idc:1}
W.fk.prototype={
i:function(a){return String(a)}}
W.dd.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.n(c,"$iah",[P.a6],"$aah")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[[P.ah,P.a6]]},
$aw:function(){return[[P.ah,P.a6]]},
$ik:1,
$ak:function(){return[[P.ah,P.a6]]},
$ic:1,
$ac:function(){return[[P.ah,P.a6]]},
$aD:function(){return[[P.ah,P.a6]]}}
W.de.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gaB(a))+" x "+H.j(this.gav(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iah)return!1
return a.left===u.gbe(b)&&a.top===u.gbg(b)&&this.gaB(a)===u.gaB(b)&&this.gav(a)===u.gav(b)},
gG:function(a){return W.lJ(C.e.gG(a.left),C.e.gG(a.top),C.e.gG(this.gaB(a)),C.e.gG(this.gav(a)))},
gdc:function(a){return a.bottom},
gav:function(a){return a.height},
gbe:function(a){return a.left},
gce:function(a){return a.right},
gbg:function(a){return a.top},
gaB:function(a){return a.width},
$iah:1,
$aah:function(){return[P.a6]}}
W.fl.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.U(c)
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[P.h]},
$aw:function(){return[P.h]},
$ik:1,
$ak:function(){return[P.h]},
$ic:1,
$ac:function(){return[P.h]},
$aD:function(){return[P.h]}}
W.fm.prototype={
gl:function(a){return a.length}}
W.iW.prototype={
gl:function(a){return this.b.length},
k:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return H.f(u[b],"$ia0")},
j:function(a,b,c){var u
H.f(c,"$ia0")
u=this.b
if(b<0||b>=u.length)return H.b(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gY:function(a){var u=this.iv(this)
return new J.as(u,u.length,[H.u(u,0)])},
$aw:function(){return[W.a0]},
$ak:function(){return[W.a0]},
$ac:function(){return[W.a0]}}
W.a0.prototype={
gbR:function(a){return new W.iW(a,a.children)},
gdd:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.M()
if(s<0)s=-s*0
if(typeof r!=="number")return r.M()
if(r<0)r=-r*0
return new P.ah(u,t,s,r,[P.a6])},
i:function(a){return a.localName},
$ia0:1}
W.m.prototype={$im:1}
W.i.prototype={
hp:function(a,b,c,d){H.o(c,{func:1,args:[W.m]})
if(c!=null)this.er(a,b,c,!1)},
er:function(a,b,c,d){return a.addEventListener(b,H.c5(H.o(c,{func:1,args:[W.m]}),1),!1)},
$ii:1}
W.ax.prototype={$iax:1}
W.cj.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.f(c,"$iax")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.ax]},
$aw:function(){return[W.ax]},
$ik:1,
$ak:function(){return[W.ax]},
$ic:1,
$ac:function(){return[W.ax]},
$icj:1,
$aD:function(){return[W.ax]}}
W.fv.prototype={
gl:function(a){return a.length}}
W.fz.prototype={
gl:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.fC.prototype={
gl:function(a){return a.length}}
W.bN.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.f(c,"$iG")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.G]},
$aw:function(){return[W.G]},
$ik:1,
$ak:function(){return[W.G]},
$ic:1,
$ac:function(){return[W.G]},
$ibN:1,
$aD:function(){return[W.G]}}
W.cm.prototype={$icm:1}
W.cn.prototype={$icn:1}
W.b0.prototype={$ib0:1}
W.fQ.prototype={
i:function(a){return String(a)}}
W.ha.prototype={
gl:function(a){return a.length}}
W.cq.prototype={$icq:1}
W.hb.prototype={
k:function(a,b){return P.bj(a.get(H.U(b)))},
I:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
gal:function(a){var u=H.e([],[P.h])
this.I(a,new W.hc(u))
return u},
gl:function(a){return a.size},
j:function(a,b,c){throw H.d(P.F("Not supported"))},
$aag:function(){return[P.h,null]},
$iz:1,
$az:function(){return[P.h,null]}}
W.hc.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hd.prototype={
k:function(a,b){return P.bj(a.get(H.U(b)))},
I:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
gal:function(a){var u=H.e([],[P.h])
this.I(a,new W.he(u))
return u},
gl:function(a){return a.size},
j:function(a,b,c){throw H.d(P.F("Not supported"))},
$aag:function(){return[P.h,null]},
$iz:1,
$az:function(){return[P.h,null]}}
W.he.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aI.prototype={$iaI:1}
W.hf.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.f(c,"$iaI")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aI]},
$aw:function(){return[W.aI]},
$ik:1,
$ak:function(){return[W.aI]},
$ic:1,
$ac:function(){return[W.aI]},
$aD:function(){return[W.aI]}}
W.ad.prototype={$iad:1}
W.iV.prototype={
j:function(a,b,c){var u,t
H.f(c,"$iG")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.b(t,b)
u.replaceChild(c,t[b])},
gY:function(a){var u=this.a.childNodes
return new W.dh(u,u.length,[H.c8(C.Q,u,"D",0)])},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$aw:function(){return[W.G]},
$ak:function(){return[W.G]},
$ac:function(){return[W.G]}}
W.G.prototype={
ip:function(a,b){var u,t
try{u=a.parentNode
J.mD(u,b,a)}catch(t){H.aE(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.e6(a):u},
fZ:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cw.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.f(c,"$iG")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.G]},
$aw:function(){return[W.G]},
$ik:1,
$ak:function(){return[W.G]},
$ic:1,
$ac:function(){return[W.G]},
$aD:function(){return[W.G]}}
W.aJ.prototype={$iaJ:1,
gl:function(a){return a.length}}
W.hs.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.f(c,"$iaJ")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aJ]},
$aw:function(){return[W.aJ]},
$ik:1,
$ak:function(){return[W.aJ]},
$ic:1,
$ac:function(){return[W.aJ]},
$aD:function(){return[W.aJ]}}
W.hB.prototype={
k:function(a,b){return P.bj(a.get(H.U(b)))},
I:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
gal:function(a){var u=H.e([],[P.h])
this.I(a,new W.hC(u))
return u},
gl:function(a){return a.size},
j:function(a,b,c){throw H.d(P.F("Not supported"))},
$aag:function(){return[P.h,null]},
$iz:1,
$az:function(){return[P.h,null]}}
W.hC.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hE.prototype={
gl:function(a){return a.length}}
W.aL.prototype={$iaL:1}
W.hN.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.f(c,"$iaL")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aL]},
$aw:function(){return[W.aL]},
$ik:1,
$ak:function(){return[W.aL]},
$ic:1,
$ac:function(){return[W.aL]},
$aD:function(){return[W.aL]}}
W.aM.prototype={$iaM:1}
W.hO.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.f(c,"$iaM")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aM]},
$aw:function(){return[W.aM]},
$ik:1,
$ak:function(){return[W.aM]},
$ic:1,
$ac:function(){return[W.aM]},
$aD:function(){return[W.aM]}}
W.aN.prototype={$iaN:1,
gl:function(a){return a.length}}
W.hS.prototype={
k:function(a,b){return a.getItem(H.U(b))},
j:function(a,b,c){a.setItem(b,c)},
I:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gal:function(a){var u=H.e([],[P.h])
this.I(a,new W.hT(u))
return u},
gl:function(a){return a.length},
$aag:function(){return[P.h,P.h]},
$iz:1,
$az:function(){return[P.h,P.h]}}
W.hT.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:28}
W.ay.prototype={$iay:1}
W.bi.prototype={$ibi:1}
W.aP.prototype={$iaP:1}
W.az.prototype={$iaz:1}
W.i_.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.f(c,"$iaz")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.az]},
$aw:function(){return[W.az]},
$ik:1,
$ak:function(){return[W.az]},
$ic:1,
$ac:function(){return[W.az]},
$aD:function(){return[W.az]}}
W.i0.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.f(c,"$iaP")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aP]},
$aw:function(){return[W.aP]},
$ik:1,
$ak:function(){return[W.aP]},
$ic:1,
$ac:function(){return[W.aP]},
$aD:function(){return[W.aP]}}
W.i2.prototype={
gl:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.aR.prototype={$iaR:1}
W.i5.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.f(c,"$iaQ")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aQ]},
$aw:function(){return[W.aQ]},
$ik:1,
$ak:function(){return[W.aQ]},
$ic:1,
$ac:function(){return[W.aQ]},
$aD:function(){return[W.aQ]}}
W.i6.prototype={
gl:function(a){return a.length}}
W.by.prototype={}
W.iu.prototype={
i:function(a){return String(a)}}
W.iM.prototype={
gl:function(a){return a.length}}
W.b8.prototype={
ghH:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.F("deltaY is not supported"))},
ghG:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.F("deltaX is not supported"))},
$ib8:1}
W.cL.prototype={
h_:function(a,b){return a.requestAnimationFrame(H.c5(H.o(b,{func:1,ret:-1,args:[P.a6]}),1))},
eH:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iX.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.f(c,"$iQ")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.Q]},
$aw:function(){return[W.Q]},
$ik:1,
$ak:function(){return[W.Q]},
$ic:1,
$ac:function(){return[W.Q]},
$aD:function(){return[W.Q]}}
W.e1.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iah)return!1
return a.left===u.gbe(b)&&a.top===u.gbg(b)&&a.width===u.gaB(b)&&a.height===u.gav(b)},
gG:function(a){return W.lJ(C.e.gG(a.left),C.e.gG(a.top),C.e.gG(a.width),C.e.gG(a.height))},
gav:function(a){return a.height},
gaB:function(a){return a.width}}
W.ja.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.f(c,"$iaH")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aH]},
$aw:function(){return[W.aH]},
$ik:1,
$ak:function(){return[W.aH]},
$ic:1,
$ac:function(){return[W.aH]},
$aD:function(){return[W.aH]}}
W.ej.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.f(c,"$iG")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.G]},
$aw:function(){return[W.G]},
$ik:1,
$ak:function(){return[W.G]},
$ic:1,
$ac:function(){return[W.G]},
$aD:function(){return[W.G]}}
W.jl.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.f(c,"$iaN")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aN]},
$aw:function(){return[W.aN]},
$ik:1,
$ak:function(){return[W.aN]},
$ic:1,
$ac:function(){return[W.aN]},
$aD:function(){return[W.aN]}}
W.jp.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.f(c,"$iay")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.ay]},
$aw:function(){return[W.ay]},
$ik:1,
$ak:function(){return[W.ay]},
$ic:1,
$ac:function(){return[W.ay]},
$aD:function(){return[W.ay]}}
W.iZ.prototype={}
W.kI.prototype={}
W.j_.prototype={}
W.j0.prototype={
$1:function(a){return this.a.$1(H.f(a,"$im"))},
$S:31}
W.D.prototype={
gY:function(a){return new W.dh(a,this.gl(a),[H.c8(this,a,"D",0)])}}
W.dh.prototype={
H:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scN(J.d2(u.a,t))
u.c=t
return!0}u.scN(null)
u.c=s
return!1},
gP:function(a){return this.d},
scN:function(a){this.d=H.C(a,H.u(this,0))},
$iaZ:1}
W.e0.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.er.prototype={}
W.es.prototype={}
W.ew.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.cU.prototype={}
W.cV.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
P.jm.prototype={
dq:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
ck:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.T(a)
if(!!u.$iat)return new Date(a.a)
if(!!u.$ini)throw H.d(P.il("structured clone of RegExp"))
if(!!u.$iax)return a
if(!!u.$ibG)return a
if(!!u.$icj)return a
if(!!u.$icm)return a
if(!!u.$ict||!!u.$ibu||!!u.$icq)return a
if(!!u.$iz){t=q.dq(a)
s=q.b
if(t>=s.length)return H.b(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.j(s,t,r)
u.I(a,new P.jo(p,q))
return p.a}if(!!u.$ic){t=q.dq(a)
p=q.b
if(t>=p.length)return H.b(p,t)
r=p[t]
if(r!=null)return r
return q.hE(a,t)}throw H.d(P.il("structured clone of other type"))},
hE:function(a,b){var u,t=J.d_(a),s=t.gl(a),r=new Array(s)
C.a.j(this.b,b,r)
for(u=0;u<s;++u)C.a.j(r,u,this.ck(t.k(a,u)))
return r}}
P.jo.prototype={
$2:function(a,b){this.a.a[a]=this.b.ck(b)},
$S:7}
P.jM.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.jn.prototype={}
P.fw.prototype={
gb7:function(){var u=this.b,t=H.aw(u,"w",0),s=W.a0
return new H.fV(new H.iO(u,H.o(new P.fx(),{func:1,ret:P.ab,args:[t]}),[t]),H.o(new P.fy(),{func:1,ret:s,args:[t]}),[t,s])},
j:function(a,b,c){var u
H.f(c,"$ia0")
u=this.gb7()
J.mH(u.b.$1(J.kn(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aF(this.gb7().a)},
k:function(a,b){var u=this.gb7()
return u.b.$1(J.kn(u.a,b))},
gY:function(a){var u=P.le(this.gb7(),!1,W.a0)
return new J.as(u,u.length,[H.u(u,0)])},
$aw:function(){return[W.a0]},
$ak:function(){return[W.a0]},
$ac:function(){return[W.a0]}}
P.fx.prototype={
$1:function(a){return!!J.T(H.f(a,"$iG")).$ia0},
$S:30}
P.fy.prototype={
$1:function(a){return H.x(H.f(a,"$iG"),"$ia0")},
$S:29}
P.je.prototype={
gce:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.p(t)
return H.C(u+t,H.u(this,0))},
gdc:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.p(t)
return H.C(u+t,H.u(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.j(u.a)+", "+H.j(u.b)+") "+H.j(u.c)+" x "+H.j(u.d)},
n:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.T(b)
if(!!u.$iah){t=p.a
if(t==u.gbe(b)){s=p.b
if(s==u.gbg(b)){r=p.c
if(typeof t!=="number")return t.v()
if(typeof r!=="number")return H.p(r)
q=H.u(p,0)
if(H.C(t+r,q)===u.gce(b)){t=p.d
if(typeof s!=="number")return s.v()
if(typeof t!=="number")return H.p(t)
u=H.C(s+t,q)===u.gdc(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t=this,s=t.a,r=J.d3(s),q=t.b,p=J.d3(q),o=t.c
if(typeof s!=="number")return s.v()
if(typeof o!=="number")return H.p(o)
u=H.u(t,0)
o=C.d.gG(H.C(s+o,u))
s=t.d
if(typeof q!=="number")return q.v()
if(typeof s!=="number")return H.p(s)
u=C.d.gG(H.C(q+s,u))
return P.nF(P.jc(P.jc(P.jc(P.jc(0,r),p),o),u))}}
P.ah.prototype={
gbe:function(a){return this.a},
gbg:function(a){return this.b},
gaB:function(a){return this.c},
gav:function(a){return this.d}}
P.b1.prototype={$ib1:1}
P.fJ.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){H.f(c,"$ib1")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$aw:function(){return[P.b1]},
$ik:1,
$ak:function(){return[P.b1]},
$ic:1,
$ac:function(){return[P.b1]},
$aD:function(){return[P.b1]}}
P.b4.prototype={$ib4:1}
P.ho.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){H.f(c,"$ib4")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$aw:function(){return[P.b4]},
$ik:1,
$ak:function(){return[P.b4]},
$ic:1,
$ac:function(){return[P.b4]},
$aD:function(){return[P.b4]}}
P.hu.prototype={
gl:function(a){return a.length}}
P.hY.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){H.U(c)
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$aw:function(){return[P.h]},
$ik:1,
$ak:function(){return[P.h]},
$ic:1,
$ac:function(){return[P.h]},
$aD:function(){return[P.h]}}
P.q.prototype={
gbR:function(a){return new P.fw(a,new W.iV(a))}}
P.b6.prototype={$ib6:1}
P.i7.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){H.f(c,"$ib6")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$aw:function(){return[P.b6]},
$ik:1,
$ak:function(){return[P.b6]},
$ic:1,
$ac:function(){return[P.b6]},
$aD:function(){return[P.b6]}}
P.eb.prototype={}
P.ec.prototype={}
P.em.prototype={}
P.en.prototype={}
P.ex.prototype={}
P.ey.prototype={}
P.eE.prototype={}
P.eF.prototype={}
P.O.prototype={$ik:1,
$ak:function(){return[P.l]},
$ic:1,
$ac:function(){return[P.l]}}
P.f0.prototype={
gl:function(a){return a.length}}
P.f1.prototype={
k:function(a,b){return P.bj(a.get(H.U(b)))},
I:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
gal:function(a){var u=H.e([],[P.h])
this.I(a,new P.f2(u))
return u},
gl:function(a){return a.size},
j:function(a,b,c){throw H.d(P.F("Not supported"))},
$aag:function(){return[P.h,null]},
$iz:1,
$az:function(){return[P.h,null]}}
P.f2.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.f3.prototype={
gl:function(a){return a.length}}
P.bF.prototype={}
P.hp.prototype={
gl:function(a){return a.length}}
P.e_.prototype={}
P.d5.prototype={$id5:1}
P.dB.prototype={$idB:1}
P.bS.prototype={
a_:function(a,b,c){return a.uniform1f(b,c)},
bi:function(a,b,c){return a.uniform1i(b,c)},
U:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dX:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
dY:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dZ:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibS:1}
P.dF.prototype={$idF:1}
P.dQ.prototype={$idQ:1}
P.hP.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.V(b,a,null,null,null))
return P.bj(a.item(b))},
j:function(a,b,c){H.f(c,"$iz")
throw H.d(P.F("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$aw:function(){return[[P.z,,,]]},
$ik:1,
$ak:function(){return[[P.z,,,]]},
$ic:1,
$ac:function(){return[[P.z,,,]]},
$aD:function(){return[[P.z,,,]]}}
P.et.prototype={}
P.eu.prototype={}
O.Z.prototype={
bl:function(a){var u=this
u.seT(H.e([],[a]))
u.scW(null)
u.scS(null)
u.scX(null)},
cm:function(a,b,c){var u=this,t=H.aw(u,"Z",0)
H.o(b,{func:1,ret:P.ab,args:[[P.k,t]]})
t={func:1,ret:-1,args:[P.l,[P.k,t]]}
H.o(a,t)
H.o(c,t)
u.scW(b)
u.scS(a)
u.scX(c)},
b5:function(a,b){return this.cm(a,null,b)},
cV:function(a){var u
H.n(a,"$ik",[H.aw(this,"Z",0)],"$ak")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cR:function(a,b){var u
H.n(b,"$ik",[H.aw(this,"Z",0)],"$ak")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gY:function(a){var u=this.a
return new J.as(u,u.length,[H.u(u,0)])},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aw(s,"Z",0)
H.C(b,r)
r=[r]
if(H.E(s.cV(H.e([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cR(t,H.e([b],r))}},
j:function(a,b,c){var u,t,s,r=this,q=H.aw(r,"Z",0)
H.C(c,q)
u=r.a
if(b>=u.length)return H.b(u,b)
t=u[b]
if(!J.N(t,c)&&H.E(r.cV(H.e([c],[q])))){C.a.j(r.a,b,c)
u=[q]
q=H.n(H.e([t],u),"$ik",[q],"$ak")
s=r.d
if(s!=null)s.$2(b,q)
r.cR(b,H.e([c],u))}},
seT:function(a){this.a=H.n(a,"$ic",[H.aw(this,"Z",0)],"$ac")},
scW:function(a){this.b=H.o(a,{func:1,ret:P.ab,args:[[P.k,H.aw(this,"Z",0)]]})},
scS:function(a){this.c=H.o(a,{func:1,ret:-1,args:[P.l,[P.k,H.aw(this,"Z",0)]]})},
scX:function(a){this.d=H.o(a,{func:1,ret:-1,args:[P.l,[P.k,H.aw(this,"Z",0)]]})},
$ik:1}
O.cp.prototype={
gl:function(a){return this.a.length},
gA:function(){var u=this.b
return u==null?this.b=D.S():u},
aC:function(){var u=this.b
if(u!=null)u.F(null)},
gZ:function(a){var u=this.a
if(u.length>0)return C.a.gax(u)
else return V.an()},
dM:function(a){var u=this.a
if(a==null)C.a.h(u,V.an())
else C.a.h(u,a)
this.aC()},
c9:function(){var u=this.a
if(u.length>0){u.pop()
this.aC()}},
sbs:function(a){this.a=H.n(a,"$ic",[V.al],"$ac")}}
E.f6.prototype={}
E.am.prototype={
scn:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gA().K(0,s.gdH())
u=s.c
if(u!=null)u.gA().h(0,s.gdH())
t=new D.K("shape",r,s.c,[F.bT])
t.b=!0
s.az(t)}},
sb_:function(a){var u,t,s=this
if(!J.N(s.r,a)){u=s.r
if(u!=null)u.gA().K(0,s.gdF())
if(a!=null)a.gA().h(0,s.gdF())
s.r=a
t=new D.K("mover",u,a,[U.a8])
t.b=!0
s.az(t)}},
am:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.N(q,s.x)){u=s.x
s.x=q
t=new D.K("matrix",u,q,[V.al])
t.b=!0
s.az(t)}for(r=s.y.a,r=new J.as(r,r.length,[H.u(r,0)]);r.H();)r.d.am(0,b)},
aM:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gZ(s))
else C.a.h(s.a,r.m(0,s.gZ(s)))
s.aC()
a.dN(t.f)
s=a.dy
u=(s&&C.a).gax(s)
if(u!=null&&t.d!=null)u.io(a,t)
for(s=t.y.a,s=new J.as(s,s.length,[H.u(s,0)]);s.H();)s.d.aM(a)
a.dL()
a.dx.c9()},
az:function(a){var u=this.z
if(u!=null)u.F(a)},
X:function(){return this.az(null)},
dI:function(a){H.f(a,"$iA")
this.e=null
this.az(a)},
i9:function(){return this.dI(null)},
dG:function(a){this.az(H.f(a,"$iA"))},
i8:function(){return this.dG(null)},
dE:function(a){this.az(H.f(a,"$iA"))},
i5:function(){return this.dE(null)},
i4:function(a,b){var u,t,s,r,q,p,o
H.n(b,"$ik",[E.am],"$ak")
for(u=b.length,t=this.gdD(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.aY()
o.sa2(null)
o.sak(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.sa2(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}this.X()},
i7:function(a,b){var u,t,s,r,q
H.n(b,"$ik",[E.am],"$ak")
for(u=b.length,t=this.gdD(),s=0;s<b.length;b.length===u||(0,H.v)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.aY()
q.sa2(null)
q.sak(null)
q.c=null
q.d=0
r.z=q}q.K(0,t)}}this.X()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seA:function(a,b){this.y=H.n(b,"$iZ",[E.am],"$aZ")},
$ics:1}
E.hx.prototype={
eb:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.at(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cp()
t=[V.al]
u.sbs(H.e([],t))
u.b=null
u.gA().h(0,new E.hy(s))
s.cy=u
u=new O.cp()
u.sbs(H.e([],t))
u.b=null
u.gA().h(0,new E.hz(s))
s.db=u
u=new O.cp()
u.sbs(H.e([],t))
u.b=null
u.gA().h(0,new E.hA(s))
s.dx=u
s.shd(H.e([],[O.bU]))
u=s.dy;(u&&C.a).h(u,null)
s.sh8(new H.Y([P.h,A.cB]))},
gik:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gZ(s)
u=t.db
u=t.z=s.m(0,u.gZ(u))
s=u}return s},
dN:function(a){var u=this.dy,t=a==null?(u&&C.a).gax(u):a;(u&&C.a).h(u,t)},
dL:function(){var u=this.dy
if(u.length>1)u.pop()},
shd:function(a){this.dy=H.n(a,"$ic",[O.bU],"$ac")},
sh8:function(a){this.fr=H.n(a,"$iz",[P.h,A.cB],"$az")}}
E.hy.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.ch=u.z=null},
$S:10}
E.hz.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:10}
E.hA.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.cx=u.ch=null},
$S:10}
E.dJ.prototype={}
E.dM.prototype={
cu:function(a){H.f(a,"$iA")
this.dQ()},
ct:function(){return this.cu(null)},
ghU:function(){var u,t=this,s=Date.now(),r=C.d.a3(P.l9(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.at(s,!1)
return u/r},
d_:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.m()
if(typeof r!=="number")return H.p(r)
u=C.e.dr(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.m()
t=C.e.dr(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lw(C.o,s.giq())}},
dQ:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.o(new E.i1(this),{func:1,ret:-1,args:[P.a6]})
C.y.eH(u)
C.y.h_(u,W.lX(t,P.a6))}},
im:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.d_()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.at(r,!1)
s.y=P.l9(r-s.r.a).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aC()
r=s.db
C.a.sl(r.a,0)
r.aC()
r=s.dx
C.a.sl(r.a,0)
r.aC()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aM(p.e)}}catch(q){u=H.aE(q)
t=H.c9(q)
P.kZ("Error: "+H.j(u))
P.kZ("Stack: "+H.j(t))
throw H.d(u)}}}
E.i1.prototype={
$1:function(a){var u
H.mc(a)
u=this.a
if(u.ch){u.ch=!1
u.im()}},
$S:53}
Z.dY.prototype={$ioV:1}
Z.d6.prototype={
ba:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aE(s)
t=P.B('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.j(u))
throw H.d(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.j(u.e)+"]"}}
Z.iN.prototype={$ioW:1}
Z.d7.prototype={
aK:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
ba:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].ba(a)},
dW:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aM:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.e([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(p,u[s].i(0))
r=H.e([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.ar(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.t(p,", ")+"\nAttrs:   "+C.a.t(r,", ")},
seP:function(a){this.b=H.n(a,"$ic",[Z.br],"$ac")},
$ip3:1}
Z.br.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.j(H.cz(this.c))+"'")+"]"}}
Z.bz.prototype={
gco:function(a){var u=this.a,t=(u&$.bn().a)!==0?3:0
if((u&$.bm().a)!==0)t+=3
if((u&$.bl().a)!==0)t+=3
if((u&$.bC().a)!==0)t+=2
if((u&$.bD().a)!==0)t+=3
if((u&$.d0().a)!==0)t+=3
if((u&$.d1().a)!==0)t+=4
if((u&$.cc().a)!==0)++t
return(u&$.bk().a)!==0?t+4:t},
ht:function(a){var u,t=$.bn(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bC()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bD()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d0()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d1()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cc()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0)if(u===a)return t
return $.my()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bz))return!1
return this.a===b.a},
i:function(a){var u=H.e([],[P.h]),t=this.a
if((t&$.bn().a)!==0)C.a.h(u,"Pos")
if((t&$.bm().a)!==0)C.a.h(u,"Norm")
if((t&$.bl().a)!==0)C.a.h(u,"Binm")
if((t&$.bC().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bD().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d0().a)!==0)C.a.h(u,"Clr3")
if((t&$.d1().a)!==0)C.a.h(u,"Clr4")
if((t&$.cc().a)!==0)C.a.h(u,"Weight")
if((t&$.bk().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.t(u,"|")}}
D.f9.prototype={}
D.aY.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.A]}
H.o(b,u)
if(this.a==null)this.sa2(H.e([],[u]))
u=this.a;(u&&C.a).h(u,b)},
K:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[D.A]})
u=s.a
u=u==null?null:C.a.at(u,b)
if(u===!0){u=s.a
t=(u&&C.a).K(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.at(u,b)
if(u===!0){u=s.b
t=(u&&C.a).K(u,b)||t}return t},
F:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.I(P.le(u,!0,{func:1,ret:-1,args:[D.A]}),new D.fs(q))
u=r.b
if(u!=null){r.sak(H.e([],[{func:1,ret:-1,args:[D.A]}]))
C.a.I(u,new D.ft(q))}return!0},
ad:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.F(u)}}},
sa2:function(a){this.a=H.n(a,"$ic",[{func:1,ret:-1,args:[D.A]}],"$ac")},
sak:function(a){this.b=H.n(a,"$ic",[{func:1,ret:-1,args:[D.A]}],"$ac")}}
D.fs.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:27}
D.ft.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:27}
D.A.prototype={}
D.bO.prototype={}
D.bP.prototype={}
D.K.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.d8.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d8))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.dl.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dl))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.fI.prototype={
ig:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
ia:function(a){this.c=a.b
this.d.K(0,a.a)
return!1},
sfT:function(a){this.d=H.n(a,"$ilt",[P.l],"$alt")}}
X.dp.prototype={}
X.fR.prototype={
aQ:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.m()
u=b.b
t=q.ch
if(typeof u!=="number")return u.m()
s=new V.a9(o.a+n*m,o.b+u*t)
t=q.a.gaJ()
r=new X.bf(a,V.bw(),q.x,t,s)
r.b=!0
q.z=new P.at(p,!1)
q.x=s
return r},
c8:function(a,b){this.r=a.a
return!1},
b1:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.e3()
if(typeof u!=="number")return u.aa()
this.r=(u&~t)>>>0
return!1},
b0:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.aQ(a,b))
return!0},
ih:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaJ()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.m()
q=a.b
p=o.cy
if(typeof q!=="number")return q.m()
t=new X.cr(new V.R(s*r,q*p),u,t)
t.b=!0
n.F(t)
return!0},
fq:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dp(c,r.a.gaJ(),b)
s.b=!0
t.F(s)
r.y=new P.at(u,!1)
r.x=V.bw()}}
X.au.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.au))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.E(this.b)?"Alt+":""
return u+(H.E(this.c)?"Shift+":"")}}
X.bf.prototype={}
X.hg.prototype={
bq:function(a,b,c){var u=this,t=new P.at(Date.now(),!1),s=u.a.gaJ(),r=new X.bf(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c8:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.F(this.bq(a,b,!0))
return!0},
b1:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.e3()
if(typeof t!=="number")return t.aa()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.F(u.bq(a,b,!0))
return!0},
b0:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.bq(a,b,!1))
return!0},
ii:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaJ()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.m()
r=a.b
q=p.ch
if(typeof r!=="number")return r.m()
u=new X.cr(new V.R(t*s,r*q),u,b)
u.b=!0
o.F(u)
return!0},
gde:function(){var u=this.b
return u==null?this.b=D.S():u},
gcj:function(){var u=this.c
return u==null?this.c=D.S():u},
gdC:function(){var u=this.d
return u==null?this.d=D.S():u}}
X.cr.prototype={}
X.ht.prototype={}
X.dO.prototype={}
X.i4.prototype={
aQ:function(a,b){var u,t,s,r,q=this
H.n(a,"$ic",[V.a9],"$ac")
u=new P.at(Date.now(),!1)
t=a.length>0?a[0]:V.bw()
s=q.a.gaJ()
r=new X.dO(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
ie:function(a){var u
H.n(a,"$ic",[V.a9],"$ac")
u=this.b
if(u==null)return!1
u.F(this.aQ(a,!0))
return!0},
ib:function(a){var u
H.n(a,"$ic",[V.a9],"$ac")
u=this.c
if(u==null)return!1
u.F(this.aQ(a,!0))
return!0},
ic:function(a){var u
H.n(a,"$ic",[V.a9],"$ac")
u=this.d
if(u==null)return!1
u.F(this.aQ(a,!1))
return!0}}
X.dT.prototype={
gaJ:function(){var u=this.a,t=C.n.gdd(u).c
t.toString
u=C.n.gdd(u).d
u.toString
return V.lr(0,0,t,u)},
cI:function(a){var u=a.keyCode,t=H.E(a.ctrlKey)||H.E(a.metaKey)
return new X.dl(u,new X.au(t,a.altKey,a.shiftKey))},
aG:function(a){var u=this.b,t=H.E(a.ctrlKey)||H.E(a.metaKey)
u.c=new X.au(t,a.altKey,a.shiftKey)},
bI:function(a){var u=this.b,t=H.E(a.ctrlKey)||H.E(a.metaKey)
u.c=new X.au(t,a.altKey,a.shiftKey)},
as:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.w()
u=t.top
if(typeof r!=="number")return r.w()
return new V.a9(s-q,r-u)},
aR:function(a){return new V.R(a.movementX,a.movementY)},
bD:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.e([],[V.a9])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
q=C.e.ae(r.pageX)
C.e.ae(r.pageY)
p=o.left
C.e.ae(r.pageX)
C.a.h(n,new V.a9(q-p,C.e.ae(r.pageY)-o.top))}return n},
ap:function(a){var u=a.buttons,t=H.E(a.ctrlKey)||H.E(a.metaKey)
return new X.d8(u,new X.au(t,a.altKey,a.shiftKey))},
bt:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.w()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.w()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fk:function(a){this.f=!0},
f6:function(a){this.f=!1},
fe:function(a){H.f(a,"$iad")
if(H.E(this.f)&&this.bt(a))a.preventDefault()},
fo:function(a){var u
H.f(a,"$ib0")
if(!H.E(this.f))return
u=this.cI(a)
this.b.ig(u)},
fm:function(a){var u
H.f(a,"$ib0")
if(!H.E(this.f))return
u=this.cI(a)
this.b.ia(u)},
ft:function(a){var u,t,s,r,q=this
H.f(a,"$iad")
u=q.a
u.focus()
q.f=!0
q.aG(a)
if(H.E(q.x)){t=q.ap(a)
s=q.aR(a)
if(q.d.c8(t,s))a.preventDefault()
return}if(H.E(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ap(a)
r=q.as(a)
if(q.c.c8(t,r))a.preventDefault()},
fz:function(a){var u,t,s,r=this
H.f(a,"$iad")
r.aG(a)
u=r.ap(a)
if(H.E(r.x)){t=r.aR(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.as(a)
if(r.c.b1(u,s))a.preventDefault()},
fi:function(a){var u,t,s,r=this
H.f(a,"$iad")
if(!r.bt(a)){r.aG(a)
u=r.ap(a)
if(H.E(r.x)){t=r.aR(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.as(a)
if(r.c.b1(u,s))a.preventDefault()}},
fv:function(a){var u,t,s,r=this
H.f(a,"$iad")
r.aG(a)
u=r.ap(a)
if(H.E(r.x)){t=r.aR(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.as(a)
if(r.c.b0(u,s))a.preventDefault()},
fg:function(a){var u,t,s,r=this
H.f(a,"$iad")
if(!r.bt(a)){r.aG(a)
u=r.ap(a)
if(H.E(r.x)){t=r.aR(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.as(a)
if(r.c.b0(u,s))a.preventDefault()}},
fB:function(a){var u,t,s=this
H.f(a,"$ib8")
s.aG(a)
u=new V.R((a&&C.x).ghG(a),C.x.ghH(a)).p(0,180)
if(H.E(s.x)){if(s.d.ih(u))a.preventDefault()
return}if(H.E(s.r))return
t=s.as(a)
if(s.c.ii(u,t))a.preventDefault()},
fD:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ap(s.y)
t=s.as(s.y)
s.d.fq(u,t,r)}},
fP:function(a){var u,t=this
H.f(a,"$iaR")
t.a.focus()
t.f=!0
t.bI(a)
u=t.bD(a)
if(t.e.ie(u))a.preventDefault()},
fL:function(a){var u
H.f(a,"$iaR")
this.bI(a)
u=this.bD(a)
if(this.e.ib(u))a.preventDefault()},
fN:function(a){var u
H.f(a,"$iaR")
this.bI(a)
u=this.bD(a)
if(this.e.ic(u))a.preventDefault()},
seI:function(a){this.z=H.n(a,"$ic",[[P.cD,P.P]],"$ac")}}
D.bc.prototype={
an:function(a){var u
H.f(a,"$iA")
u=this.r
if(u!=null)u.F(a)},
eg:function(){return this.an(null)},
$ia7:1,
$ics:1}
D.a7.prototype={$ics:1}
D.dm.prototype={
an:function(a){var u=this.x
if(u!=null)u.F(a)},
cU:function(a){var u
H.f(a,"$iA")
u=this.y
if(u!=null)u.F(a)},
fp:function(){return this.cU(null)},
fF:function(a){var u,t,s
H.n(a,"$ik",[D.a7],"$ak")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(s==null||this.eB(s))return!1}return!0},
f0:function(a,b){var u,t,s,r,q,p,o,n=D.a7
H.n(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gcT(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=H.f(b[q],"$ia7")
if(p instanceof D.bc)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.aY()
o.sa2(null)
o.sak(null)
o.c=null
o.d=0
p.r=o}H.o(t,s)
if(o.a==null)o.sa2(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bO([n])
n.b=!0
this.an(n)},
fJ:function(a,b){var u,t,s,r,q,p=D.a7
H.n(b,"$ik",[p],"$ak")
for(u=b.length,t=this.gcT(),s=0;s<b.length;b.length===u||(0,H.v)(b),++s){r=H.f(b[s],"$ia7")
if(r instanceof D.bc)C.a.K(this.e,r)
q=r.r
if(q==null){q=new D.aY()
q.sa2(null)
q.sak(null)
q.c=null
q.d=0
r.r=q}q.K(0,t)}p=new D.bP([p])
p.b=!0
this.an(p)},
eB:function(a){var u=C.a.at(this.e,a)
return u},
seG:function(a){this.e=H.n(a,"$ic",[D.bc],"$ac")},
sfQ:function(a){this.f=H.n(a,"$ic",[D.dz],"$ac")},
shb:function(a){this.r=H.n(a,"$ic",[D.dH],"$ac")},
$ak:function(){return[D.a7]},
$aZ:function(){return[D.a7]}}
D.dz.prototype={$ia7:1,$ics:1}
D.dH.prototype={$ia7:1,$ics:1}
V.a4.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}
V.aV.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aV))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.M(u.a,3,0)+", "+V.M(u.b,3,0)+", "+V.M(u.c,3,0)+", "+V.M(u.d,3,0)+"]"}}
V.fr.prototype={}
V.dt.prototype={
a9:function(a,b){var u=this,t=H.e([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.t])
return t},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.dt))return!1
u=b.a
t=$.I()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
if(!(Math.abs(b.c-q.c)<s))return!1
if(!(Math.abs(b.d-q.d)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
u=b.r
r=q.r
t.toString
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.p(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=q.x
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.p(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=q.y
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.p(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.t],o=V.c7(H.e([q.a,q.d,q.r],p),3,0),n=V.c7(H.e([q.b,q.e,q.x],p),3,0),m=V.c7(H.e([q.c,q.f,q.y],p),3,0)
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
V.al.prototype={
a9:function(a,b){var u=this,t=H.e([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.t])
return t},
dA:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a,c=e.f,b=e.b,a=e.e,a0=d*c-b*a,a1=e.r,a2=e.c,a3=d*a1-a2*a,a4=e.x,a5=e.d,a6=d*a4-a5*a,a7=b*a1-a2*c,a8=b*a4-a5*c,a9=a2*a4-a5*a1,b0=e.y,b1=e.cy
if(typeof b0!=="number")return b0.m()
u=e.z
t=e.cx
if(typeof u!=="number")return u.m()
s=b0*b1-u*t
r=e.db
q=e.Q
if(typeof q!=="number")return q.m()
p=b0*r-q*t
o=e.dx
n=e.ch
m=b0*o-n*t
l=u*r-q*b1
k=u*o-n*b1
j=q*o-n*r
i=a0*j-a3*k+a6*l+a7*m-a8*p+a9*s
if(Math.abs(i-0)<$.I().a)return V.an()
h=1/i
g=-a
f=-t
return V.b3((c*j-a1*k+a4*l)*h,(-b*j+a2*k-a5*l)*h,(b1*a9-r*a8+o*a7)*h,(-u*a9+q*a8-n*a7)*h,(g*j+a1*m-a4*p)*h,(d*j-a2*m+a5*p)*h,(f*a9+r*a6-o*a3)*h,(b0*a9-q*a6+n*a3)*h,(a*k-c*m+a4*s)*h,(-d*k+b*m-a5*s)*h,(t*a8-b1*a6+o*a0)*h,(-b0*a8+u*a6-n*a0)*h,(g*l+c*p-a1*s)*h,(d*l-b*p+a2*s)*h,(f*a7+b1*a3-r*a0)*h,(b0*a7-u*a3+q*a0)*h)},
m:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.a,a7=b3.a,a8=a5.b,a9=b3.e,b0=a5.c,b1=b3.y
if(typeof b1!=="number")return H.p(b1)
u=a5.d
t=b3.cx
s=b3.b
r=b3.f
q=b3.z
if(typeof q!=="number")return H.p(q)
p=b3.cy
o=b3.c
n=b3.r
m=b3.Q
if(typeof m!=="number")return H.p(m)
l=b3.db
k=b3.d
j=b3.x
i=b3.ch
h=b3.dx
g=a5.e
f=a5.f
e=a5.r
d=a5.x
c=a5.y
if(typeof c!=="number")return c.m()
b=a5.z
if(typeof b!=="number")return b.m()
a=a5.Q
if(typeof a!=="number")return a.m()
a0=a5.ch
a1=a5.cx
a2=a5.cy
a3=a5.db
a4=a5.dx
return V.b3(a6*a7+a8*a9+b0*b1+u*t,a6*s+a8*r+b0*q+u*p,a6*o+a8*n+b0*m+u*l,a6*k+a8*j+b0*i+u*h,g*a7+f*a9+e*b1+d*t,g*s+f*r+e*q+d*p,g*o+f*n+e*m+d*l,g*k+f*j+e*i+d*h,c*a7+b*a9+a*b1+a0*t,c*s+b*r+a*q+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,a1*a7+a2*a9+a3*b1+a4*t,a1*s+a2*r+a3*q+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h)},
bh:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.p(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.H(r.a*q+r.b*p+r.c*o,r.e*q+r.f*p+r.r*o,u*q+t*p+s*o)},
ci:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.p(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.a_(r.a*q+r.b*p+r.c*o+r.d,r.e*q+r.f*p+r.r*o+r.x,u*q+t*p+s*o+r.ch)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.al))return!1
u=b.a
t=$.I()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
if(!(Math.abs(b.c-q.c)<s))return!1
if(!(Math.abs(b.d-q.d)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
if(!(Math.abs(b.r-q.r)<s))return!1
if(!(Math.abs(b.x-q.x)<s))return!1
u=b.y
r=q.y
t.toString
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.p(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=q.z
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.p(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=q.Q
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.p(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-q.ch)<s))return!1
if(!(Math.abs(b.cx-q.cx)<s))return!1
if(!(Math.abs(b.cy-q.cy)<s))return!1
if(!(Math.abs(b.db-q.db)<s))return!1
if(!(Math.abs(b.dx-q.dx)<s))return!1
return!0},
i:function(a){return this.L()},
C:function(a){var u,t,s,r,q,p=this,o=[P.t],n=V.c7(H.e([p.a,p.e,p.y,p.cx],o),3,0),m=V.c7(H.e([p.b,p.f,p.z,p.cy],o),3,0),l=V.c7(H.e([p.c,p.r,p.Q,p.db],o),3,0),k=V.c7(H.e([p.d,p.x,p.ch,p.dx],o),3,0)
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
L:function(){return this.C("")}}
V.a9.prototype={
w:function(a,b){return new V.a9(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}}
V.a_.prototype={
v:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.p(t)
return new V.a_(this.a+b.a,this.b+b.b,u+t)},
w:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.p(t)
return new V.a_(this.a-b.a,this.b-b.b,u-t)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.a_(this.a*b,this.b*b,u*b)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.I()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.p(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}
V.bh.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bh))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.M(u.a,3,0)+", "+V.M(u.b,3,0)+", "+V.M(u.c,3,0)+", "+V.M(u.d,3,0)+"]"}}
V.dD.prototype={
ga4:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dD))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.M(u.a,3,0)+", "+V.M(u.b,3,0)+", "+V.M(u.c,3,0)+", "+V.M(u.d,3,0)+"]"}}
V.R.prototype={
c3:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.p(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.p(t)
return s*r+u*t},
m:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.m()
u=this.b
if(typeof u!=="number")return u.m()
return new V.R(t*b,u*b)},
p:function(a,b){var u,t
if(Math.abs(b-0)<$.I().a){u=$.lD
return u==null?$.lD=new V.R(0,0):u}u=this.a
if(typeof u!=="number")return u.p()
t=this.b
if(typeof t!=="number")return t.p()
return new V.R(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=this.a
s=$.I()
s.toString
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.p(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.p(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}}
V.H.prototype={
c3:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u=this.c,t=a.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.p(t)
return this.a*a.a+this.b*a.b+u*t},
c4:function(a,b){var u=this.a,t=this.b,s=this.c,r=a.c
if(typeof r!=="number")return r.w()
if(typeof s!=="number")return H.p(s)
return new V.H(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
au:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof p!=="number")return H.p(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.m()
s=a.a
r=this.a
return new V.H(q*p-u*t,u*s-r*p,r*t-q*s)},
v:function(a,b){var u=b.a,t=b.b,s=this.c,r=b.c
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.p(r)
return new V.H(this.a+u,this.b+t,s+r)},
O:function(a){var u=this.c
if(typeof u!=="number")return u.O()
return new V.H(-this.a,-this.b,-u)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.H(this.a*b,this.b*b,u*b)},
p:function(a,b){var u
if(Math.abs(b-0)<$.I().a)return V.cK()
u=this.c
if(typeof u!=="number")return u.p()
return new V.H(this.a/b,this.b/b,u/b)},
dB:function(){var u,t=$.I(),s=t.a
if(!(Math.abs(0-this.a)<s))return!1
if(!(Math.abs(0-this.b)<s))return!1
u=this.c
t.toString
if(typeof u!=="number")return H.p(u)
if(!(Math.abs(0-u)<s))return!1
return!0},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.H))return!1
u=b.a
t=$.I()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.p(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}
U.fa.prototype={
bm:function(a){var u=V.kk(a,this.c,this.b)
return u},
gA:function(){var u=this.y
return u==null?this.y=D.S():u},
D:function(a){var u=this.y
if(u!=null)u.F(a)},
scl:function(a,b){},
sc5:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.I().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bm(u)}s=new D.K("maximumLocation",s,t.b,[P.t])
s.b=!0
t.D(s)}},
sc7:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.I().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bm(u)}s=new D.K("minimumLocation",s,t.c,[P.t])
s.b=!0
t.D(s)}},
sV:function(a,b){var u,t=this
b=t.bm(b)
u=t.d
if(!(Math.abs(u-b)<$.I().a)){t.d=b
u=new D.K("location",u,b,[P.t])
u.b=!0
t.D(u)}},
sc6:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.I().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.K("maximumVelocity",r,a,[P.t])
r.b=!0
s.D(r)}},
sR:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.I().a)){u.f=a
t=new D.K("velocity",t,a,[P.t])
t.b=!0
u.D(t)}},
sbU:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.I().a)){this.x=a
u=new D.K("dampening",u,a,[P.t])
u.b=!0
this.D(u)}},
am:function(a,b){var u,t,s,r=this,q=r.f,p=$.I().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sV(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.I().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.da.prototype={
gA:function(){var u=this.b
return u==null?this.b=D.S():u},
af:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.da))return!1
return J.N(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")}}
U.cl.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.S():u},
D:function(a){var u
H.f(a,"$iA")
u=this.e
if(u!=null)u.F(a)},
a1:function(){return this.D(null)},
ei:function(a,b){var u,t,s,r,q,p,o,n=U.a8
H.n(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gaD(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.gA()
o.toString
H.o(t,s)
if(o.a==null)o.sa2(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bO([n])
n.b=!0
this.D(n)},
fH:function(a,b){var u,t,s,r,q=U.a8
H.n(b,"$ik",[q],"$ak")
for(u=b.length,t=this.gaD(),s=0;s<b.length;b.length===u||(0,H.v)(b),++s){r=b[s]
if(r!=null)r.gA().K(0,t)}q=new D.bP([q])
q.b=!0
this.D(q)},
af:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.M()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.as(r,r.length,[H.u(r,0)]),u=null;r.H();){q=r.d
if(q!=null){t=q.af(0,b,c)
if(t!=null)u=u==null?t:t.m(0,u)}}s.f=u==null?V.an():u
r=s.e
if(r!=null)r.ad(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cl))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.N(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ak:function(){return[U.a8]},
$aZ:function(){return[U.a8]},
$ia8:1}
U.a8.prototype={}
U.dE.prototype={
gA:function(){var u=this.y
return u==null?this.y=D.S():u},
D:function(a){var u=this.y
if(u!=null)u.F(a)},
se1:function(a){var u
a=V.kk(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.I().a)){this.a=a
u=new D.K("yaw",u,a,[P.t])
u.b=!0
this.D(u)}},
sdK:function(a,b){var u
b=V.kk(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.I().a)){this.b=b
u=new D.K("pitch",u,b,[P.t])
u.b=!0
this.D(u)}},
sdR:function(a){var u
a=V.kk(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.I().a)){this.c=a
u=new D.K("roll",u,a,[P.t])
u.b=!0
this.D(u)}},
af:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.se1(u.a+u.d*b.y)
u.sdK(0,u.b+u.e*b.y)
u.sdR(u.c+u.f*b.y)
u.x=V.lh(u.c).m(0,V.lg(u.b)).m(0,V.kA(u.a))
t=u.y
if(t!=null)t.ad(0)}return u.x},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dE))return!1
u=r.a
t=b.a
s=$.I().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.M(u.a,3,0)+", "+V.M(u.b,3,0)+", "+V.M(u.c,3,0)+"], ["+V.M(u.d,3,0)+", "+V.M(u.e,3,0)+", "+V.M(u.f,3,0)+"]"}}
U.dU.prototype={
gA:function(){var u=this.cy
return u==null?this.cy=D.S():u},
D:function(a){var u
H.f(a,"$iA")
u=this.cy
if(u!=null)u.F(a)},
a1:function(){return this.D(null)},
aS:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gde().h(0,u.gbu())
u.a.c.gdC().h(0,u.gbw())
u.a.c.gcj().h(0,u.gby())
return!0},
bv:function(a){var u=this
H.f(a,"$iA")
if(!J.N(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bx:function(a){var u,t,s,r,q,p,o,n=this
a=H.x(H.f(a,"$iA"),"$ibf")
if(!H.E(n.y))return
if(H.E(n.x)){u=a.d.w(0,a.y)
u=new V.R(u.a,u.b)
u=u.B(u)
t=n.r
if(typeof t!=="number")return H.p(t)
if(u<t)return
n.x=!1}if(H.E(n.d)){u=a.c
t=a.d.w(0,a.y)
u=new V.R(t.a,t.b).m(0,2).p(0,u.ga4())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.m()
s=n.e
if(typeof s!=="number")return H.p(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.w(0,a.y)
r=new V.R(s.a,s.b).m(0,2).p(0,u.ga4())
s=n.b
q=r.a
if(typeof q!=="number")return q.O()
p=n.e
if(typeof p!=="number")return H.p(p)
o=n.z
if(typeof o!=="number")return H.p(o)
s.sV(0,-q*p+o)
n.b.sR(0)
t=t.w(0,a.z)
n.Q=new V.R(t.a,t.b).m(0,2).p(0,u.ga4())}n.a1()},
bz:function(a){var u,t,s,r=this
H.f(a,"$iA")
if(!H.E(r.y))return
r.y=!1
if(H.E(r.x))return
u=r.Q
if(u.B(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.m()
s=r.e
if(typeof s!=="number")return H.p(s)
u.sR(t*10*s)
r.a1()}},
af:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.M()
if(s<r){t.ch=r
u=b.y
t.b.am(0,u)
t.cx=V.lh(t.b.d)}return t.cx},
$ia8:1}
U.dV.prototype={
gA:function(){var u=this.fx
return u==null?this.fx=D.S():u},
D:function(a){var u
H.f(a,"$iA")
u=this.fx
if(u!=null)u.F(a)},
a1:function(){return this.D(null)},
aS:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gde().h(0,s.gbu())
s.a.c.gdC().h(0,s.gbw())
s.a.c.gcj().h(0,s.gby())
u=s.a.d
t=u.f
u=t==null?u.f=D.S():t
u.h(0,s.geU())
u=s.a.d
t=u.d
u=t==null?u.d=D.S():t
u.h(0,s.geW())
u=s.a.e
t=u.b
u=t==null?u.b=D.S():t
u.h(0,s.ghj())
u=s.a.e
t=u.d
u=t==null?u.d=D.S():t
u.h(0,s.ghh())
u=s.a.e
t=u.c
u=t==null?u.c=D.S():t
u.h(0,s.ghf())
return!0},
aj:function(a){var u=a.a,t=a.b
if(H.E(this.f)){if(typeof u!=="number")return u.O()
u=-u}if(H.E(this.r)){if(typeof t!=="number")return t.O()
t=-t}return new V.R(u,t)},
bv:function(a){var u=this
a=H.x(H.f(a,"$iA"),"$ibf")
if(!J.N(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bx:function(a){var u,t,s,r,q,p,o,n=this
a=H.x(H.f(a,"$iA"),"$ibf")
if(!H.E(n.cx))return
if(H.E(n.ch)){u=a.d.w(0,a.y)
u=new V.R(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.p(t)
if(u<t)return
n.ch=!1}if(H.E(n.e)){u=a.c
t=a.d.w(0,a.y)
u=n.aj(new V.R(t.a,t.b).m(0,2).p(0,u.ga4()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.p(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.p(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.w(0,a.y)
r=n.aj(new V.R(s.a,s.b).m(0,2).p(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.p(p)
o=n.cy
if(typeof o!=="number")return H.p(o)
s.sV(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.p(q)
s=n.db
if(typeof s!=="number")return H.p(s)
o.sV(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.w(0,a.z)
n.dx=n.aj(new V.R(t.a,t.b).m(0,2).p(0,u.ga4()))}n.a1()},
bz:function(a){var u,t,s,r=this
H.f(a,"$iA")
if(!H.E(r.cx))return
r.cx=!1
if(H.E(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.p(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.p(u)
s.sR(-t*10*u)
r.a1()}},
eV:function(a){var u=this
if(H.x(H.f(a,"$iA"),"$idp").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eX:function(a){var u,t,s,r,q,p,o,n=this
a=H.x(H.f(a,"$iA"),"$ibf")
if(!J.N(n.d,a.x.b))return
u=a.c
t=a.d
s=t.w(0,a.y)
r=n.aj(new V.R(s.a,s.b).m(0,2).p(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.p(p)
o=n.cy
if(typeof o!=="number")return H.p(o)
s.sV(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.p(q)
s=n.db
if(typeof s!=="number")return H.p(s)
o.sV(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.w(0,a.z)
n.dx=n.aj(new V.R(t.a,t.b).m(0,2).p(0,u.ga4()))
n.a1()},
hk:function(a){var u=this
H.f(a,"$iA")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hi:function(a){var u,t,s,r,q,p,o,n=this
a=H.x(H.f(a,"$iA"),"$idO")
if(!H.E(n.cx))return
if(H.E(n.ch)){u=a.d.w(0,a.y)
u=new V.R(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.p(t)
if(u<t)return
n.ch=!1}if(H.E(n.e)){u=a.c
t=a.d.w(0,a.y)
u=n.aj(new V.R(t.a,t.b).m(0,2).p(0,u.ga4()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.p(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.p(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.w(0,a.y)
r=n.aj(new V.R(s.a,s.b).m(0,2).p(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.p(p)
o=n.cy
if(typeof o!=="number")return H.p(o)
s.sV(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.p(q)
s=n.db
if(typeof s!=="number")return H.p(s)
o.sV(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.w(0,a.z)
n.dx=n.aj(new V.R(t.a,t.b).m(0,2).p(0,u.ga4()))}n.a1()},
hg:function(a){var u,t,s,r=this
H.f(a,"$iA")
if(!H.E(r.cx))return
r.cx=!1
if(H.E(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.p(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.p(u)
s.sR(-t*10*u)
r.a1()}},
af:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.M()
if(s<r){t.dy=r
u=b.y
t.c.am(0,u)
t.b.am(0,u)
t.fr=V.kA(t.b.d).m(0,V.lg(t.c.d))}return t.fr},
$ia8:1}
U.dW.prototype={
gA:function(){var u=this.r
return u==null?this.r=D.S():u},
D:function(a){var u=this.r
if(u!=null)u.F(a)},
aS:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.S():t
t=r.geY()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.S():s).h(0,t)
return!0},
eZ:function(a){var u,t,s,r,q=this
H.f(a,"$iA")
if(!J.N(q.b,q.a.b.c))return
H.x(a,"$icr")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.m()
r=u+t*s
if(u!==r){q.d=r
u=new D.K("zoom",u,r,[P.t])
u.b=!0
q.D(u)}},
af:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.b3(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia8:1}
M.df.prototype={
ao:function(a){var u
H.f(a,"$iA")
u=this.y
if(u!=null)u.F(a)},
ek:function(){return this.ao(null)},
fa:function(a,b){var u,t,s,r,q,p,o,n=E.am
H.n(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gai(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.aY()
o.sa2(null)
o.sak(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.sa2(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bO([n])
n.b=!0
this.ao(n)},
fc:function(a,b){var u,t,s,r,q,p=E.am
H.n(b,"$ik",[p],"$ak")
for(u=b.length,t=this.gai(),s=0;s<b.length;b.length===u||(0,H.v)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.aY()
q.sa2(null)
q.sak(null)
q.c=null
q.d=0
r.z=q}q.K(0,t)}}p=new D.bP([p])
p.b=!0
this.ao(p)},
sdT:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gA().K(0,t.gai())
u=t.d
t.d=a
if(a!=null)a.gA().h(0,t.gai())
s=new D.K("technique",u,t.d,[O.bU])
s.b=!0
t.ao(s)}},
gA:function(){var u=this.y
return u==null?this.y=D.S():u},
aM:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=new E.dJ(a)
e.b=!0
u=f.f
if(u!=null)u.F(e)
a.dN(f.d)
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
if(typeof s!=="number")return H.p(s)
o=C.e.ae(p*s)
p=q.b
if(typeof r!=="number")return H.p(r)
n=C.e.ae(p*r)
p=C.e.ae(q.c*s)
a.c=p
q=C.e.ae(q.d*r)
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
i=V.b3(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dM(i)
t=$.ll
if(t==null){t=V.ln()
q=V.kG()
p=$.lE
t=V.lf(t,q,p==null?$.lE=new V.H(0,0,-1):p)
$.ll=t
h=t}else h=t
t=u.b
if(t!=null){g=t.af(0,a,u)
if(g!=null)h=g.m(0,h)}a.db.dM(h)
u=f.d
if(u!=null)u.am(0,a)
for(u=f.e.a,u=new J.as(u,u.length,[H.u(u,0)]);u.H();)u.d.am(0,a)
for(u=f.e.a,u=new J.as(u,u.length,[H.u(u,0)]);u.H();)u.d.aM(a)
f.b.toString
a.cy.c9()
a.db.c9()
f.c.toString
a.dL()},
sej:function(a,b){this.e=H.n(b,"$iZ",[E.am],"$aZ")},
$ip0:1}
A.d4.prototype={}
A.f_.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hN:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hI:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ak.prototype={
gag:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.ak))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fX.prototype={
ea:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.a3("")
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
A.od(c3,u)
A.of(c3,u)
A.oe(c3,u)
A.oh(c3,u)
A.oi(c3,u)
A.og(c3,u)
A.oj(c3,u)
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
m=A.oc(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cJ(n,35633)
b8.f=b8.cJ(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.E(H.m0(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.y(P.B("Failed to link shader: "+H.j(l)))}b8.h5()
b8.h7()
b8.Q=b8.x.k(0,"posAttr")
b8.cx=b8.x.k(0,"normAttr")
b8.ch=b8.x.k(0,"binmAttr")
b8.cy=b8.x.k(0,"txt2DAttr")
b8.db=b8.x.k(0,"txtCubeAttr")
b8.dx=b8.x.k(0,"bendAttr")
if(c3.dx)b8.id=H.x(b8.y.T(0,"invViewMat"),"$iav")
if(t)b8.dy=H.x(b8.y.T(0,"objMat"),"$iav")
if(r)b8.fr=H.x(b8.y.T(0,"viewObjMat"),"$iav")
b8.fy=H.x(b8.y.T(0,"projViewObjMat"),"$iav")
if(c3.ry)b8.k1=H.x(b8.y.T(0,"txt2DMat"),"$icI")
if(c3.x1)b8.k2=H.x(b8.y.T(0,"txtCubeMat"),"$iav")
if(c3.x2)b8.k3=H.x(b8.y.T(0,"colorMat"),"$iav")
b8.sew(H.e([],[A.av]))
t=c3.y2
if(t>0){b8.k4=H.f(b8.y.T(0,"bendMatCount"),"$iaA")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.k(0,q)
if(j==null)H.y(P.B(c0+q+c1));(s&&C.a).h(s,H.x(j,"$iav"))}}if(c3.a.a)b8.r2=H.x(b8.y.T(0,"emissionClr"),"$iW")
if(c3.b.a)b8.x1=H.x(b8.y.T(0,"ambientClr"),"$iW")
if(c3.c.a)b8.y2=H.x(b8.y.T(0,"diffuseClr"),"$iW")
if(c3.d.a)b8.dg=H.x(b8.y.T(0,"invDiffuseClr"),"$iW")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.di=H.x(b8.y.T(0,"shininess"),"$iaf")
if(t)b8.dh=H.x(b8.y.T(0,"specularClr"),"$iW")}if(c3.cy){b8.dj=H.x(b8.y.T(0,"envSampler"),"$ibY")
if(c3.r.a)b8.dk=H.x(b8.y.T(0,"reflectClr"),"$iW")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.dl=H.x(b8.y.T(0,"refraction"),"$iaf")
if(t)b8.dm=H.x(b8.y.T(0,"refractClr"),"$iW")}}if(c3.y.a)b8.dn=H.x(b8.y.T(0,"alpha"),"$iaf")
t=P.l
s=[t,A.aA]
b8.seF(new H.Y(s))
b8.sel(new H.Y([t,[P.c,A.bV]]))
b8.sfR(new H.Y(s))
b8.sfS(new H.Y([t,[P.c,A.bW]]))
b8.sha(new H.Y(s))
b8.sem(new H.Y([t,[P.c,A.bZ]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.bV],i=0;i<t.length;t.length===s||(0,H.v)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.j(g)
e=H.e([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.aa()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.k(0,d)
if(j==null)H.y(P.B(c0+d+c1))
H.x(j,"$iW")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.k(0,d)
if(c==null)H.y(P.B(c0+d+c1))
H.x(c,"$iW")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.k(0,d)
if(b==null)H.y(P.B(c0+d+c1))
H.x(b,"$iW")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.k(0,d)
if(j==null)H.y(P.B(c0+d+c1))
H.x(j,"$iW")
o=b8.y
d=f+"s["+k+"].color"
c=o.k(0,d)
if(c==null)H.y(P.B(c0+d+c1))
H.x(c,"$iW")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.k(0,o)
if(b==null)H.y(P.B(c0+o+c1))
H.x(b,"$ibX")
a2=b}else a2=b9
C.a.h(e,new A.bV(a1,a0,a,j,c,a2))}b8.bW.j(0,g,e)
q=b8.bV
p=b8.y
o=f+"Count"
j=p.k(0,o)
if(j==null)H.y(P.B(c0+o+c1))
q.j(0,g,H.f(j,"$iaA"))}for(t=c3.Q,s=t.length,r=[A.bW],i=0;i<t.length;t.length===s||(0,H.v)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.j(g)
e=H.e([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.k(0,o)
if(j==null)H.y(P.B(c0+o+c1))
H.x(j,"$iW")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.k(0,o)
if(c==null)H.y(P.B(c0+o+c1))
H.x(c,"$iW")
p=b8.y
o=f+"s["+k+"].color"
b=p.k(0,o)
if(b==null)H.y(P.B(c0+o+c1))
H.x(b,"$iW")
if(typeof g!=="number")return g.aa()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.k(0,o)
if(a3==null)H.y(P.B(c0+o+c1))
H.x(a3,"$icI")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.k(0,o)
if(a3==null)H.y(P.B(c0+o+c1))
H.x(a3,"$ibY")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.k(0,o)
if(a3==null)H.y(P.B(c0+o+c1))
H.x(a3,"$ibY")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.k(0,o)
if(a5==null)H.y(P.B(c0+o+c1))
H.x(a5,"$icH")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.k(0,o)
if(a3==null)H.y(P.B(c0+o+c1))
H.x(a3,"$iaf")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.k(0,o)
if(a5==null)H.y(P.B(c0+o+c1))
H.x(a5,"$iaf")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.k(0,o)
if(a8==null)H.y(P.B(c0+o+c1))
H.x(a8,"$iaf")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.bW(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.bY.j(0,g,e)
q=b8.bX
p=b8.y
o=f+"Count"
j=p.k(0,o)
if(j==null)H.y(P.B(c0+o+c1))
q.j(0,g,H.f(j,"$iaA"))}for(t=c3.ch,s=t.length,r=[A.bZ],i=0;i<t.length;t.length===s||(0,H.v)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.j(g)
e=H.e([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.k(0,o)
if(j==null)H.y(P.B(c0+o+c1))
H.x(j,"$iW")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.k(0,o)
if(c==null)H.y(P.B(c0+o+c1))
H.x(c,"$iW")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.k(0,o)
if(b==null)H.y(P.B(c0+o+c1))
H.x(b,"$iW")
p=b8.y
o=f+"s["+k+"].color"
a3=p.k(0,o)
if(a3==null)H.y(P.B(c0+o+c1))
H.x(a3,"$iW")
if(typeof g!=="number")return g.aa()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.k(0,o)
if(a5==null)H.y(P.B(c0+o+c1))
H.x(a5,"$iW")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.k(0,o)
if(a8==null)H.y(P.B(c0+o+c1))
H.x(a8,"$iW")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.k(0,o)
if(b2==null)H.y(P.B(c0+o+c1))
H.x(b2,"$iaf")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.k(0,o)
if(b3==null)H.y(P.B(c0+o+c1))
H.x(b3,"$iaf")
b4=b3
b5=b2
a0=a8
a1=a5}else{b4=b9
b5=b4
a0=b5
a1=a0}p=(g&2)!==0
if(p){o=b8.y
d=f+"s["+k+"].shadowAdj"
a5=o.k(0,d)
if(a5==null)H.y(P.B(c0+d+c1))
H.x(a5,"$icH")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.k(0,d)
if(a5==null)H.y(P.B(c0+d+c1))
H.x(a5,"$iaf")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.k(0,d)
if(a8==null)H.y(P.B(c0+d+c1))
H.x(a8,"$iaf")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.k(0,d)
if(a5==null)H.y(P.B(c0+d+c1))
H.x(a5,"$iaf")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.k(0,d)
if(a8==null)H.y(P.B(c0+d+c1))
H.x(a8,"$iaf")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.k(0,d)
if(b2==null)H.y(P.B(c0+d+c1))
H.x(b2,"$iaf")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.k(0,d)
if(a5==null)H.y(P.B(c0+d+c1))
H.x(a5,"$ibX")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.k(0,o)
if(a5==null)H.y(P.B(c0+o+c1))
H.x(a5,"$ibX")
a6=a5}else a6=b9
C.a.h(e,new A.bZ(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.c_.j(0,g,e)
q=b8.bZ
p=b8.y
o=f+"Count"
j=p.k(0,o)
if(j==null)H.y(P.B(c0+o+c1))
q.j(0,g,H.f(j,"$iaA"))}}},
h3:function(a,b){},
sew:function(a){this.r1=H.n(a,"$ic",[A.av],"$ac")},
seF:function(a){this.bV=H.n(a,"$iz",[P.l,A.aA],"$az")},
sel:function(a){this.bW=H.n(a,"$iz",[P.l,[P.c,A.bV]],"$az")},
sfR:function(a){this.bX=H.n(a,"$iz",[P.l,A.aA],"$az")},
sfS:function(a){this.bY=H.n(a,"$iz",[P.l,[P.c,A.bW]],"$az")},
sha:function(a){this.bZ=H.n(a,"$iz",[P.l,A.aA],"$az")},
sem:function(a){this.c_=H.n(a,"$iz",[P.l,[P.c,A.bZ]],"$az")}}
A.aG.prototype={
i:function(a){return"dirLight"+H.j(this.a)}}
A.aK.prototype={
i:function(a){return"pointLight"+H.j(this.a)}}
A.aO.prototype={
i:function(a){return"spotLight"+H.j(this.a)}}
A.h_.prototype={
i:function(a){return this.aX}}
A.bV.prototype={}
A.bW.prototype={}
A.bZ.prototype={}
A.cB.prototype={
ed:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cJ:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.E(H.m0(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.B("Error compiling shader '"+H.j(s)+"': "+H.j(u)))}return s},
h5:function(){var u,t,s,r=this,q=H.e([],[A.d4]),p=r.a,o=H.ac(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.p(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d4(p,t.name,s))}r.x=new A.f_(q)},
h7:function(){var u,t,s,r=this,q=H.e([],[A.dP]),p=r.a,o=H.ac(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.p(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.hF(t.type,t.size,t.name,s))}r.y=new A.ii(q)},
aF:function(a,b,c){var u=this.a
if(a===1)return new A.aA(u,b,c)
else return A.kD(u,this.r,b,a,c)},
eC:function(a,b,c){var u=this.a
if(a===1)return new A.bX(u,b,c)
else return A.kD(u,this.r,b,a,c)},
eD:function(a,b,c){var u=this.a
if(a===1)return new A.bY(u,b,c)
else return A.kD(u,this.r,b,a,c)},
b9:function(a,b){return new P.e6(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
hF:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aF(b,c,d)
case 5121:return u.aF(b,c,d)
case 5122:return u.aF(b,c,d)
case 5123:return u.aF(b,c,d)
case 5124:return u.aF(b,c,d)
case 5125:return u.aF(b,c,d)
case 5126:return new A.af(u.a,c,d)
case 35664:return new A.id(u.a,c,d)
case 35665:return new A.W(u.a,c,d)
case 35666:return new A.cH(u.a,c,d)
case 35667:return new A.ie(u.a,c,d)
case 35668:return new A.ig(u.a,c,d)
case 35669:return new A.ih(u.a,c,d)
case 35674:return new A.ij(u.a,c,d)
case 35675:return new A.cI(u.a,c,d)
case 35676:return new A.av(u.a,c,d)
case 35678:return u.eC(b,c,d)
case 35680:return u.eD(b,c,d)
case 35670:throw H.d(u.b9("BOOL",c))
case 35671:throw H.d(u.b9("BOOL_VEC2",c))
case 35672:throw H.d(u.b9("BOOL_VEC3",c))
case 35673:throw H.d(u.b9("BOOL_VEC4",c))
default:throw H.d(P.B("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.dP.prototype={}
A.ii.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
T:function(a,b){var u=this.k(0,b)
if(u==null)throw H.d(P.B("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.L()},
L:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aA.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.ie.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.ig.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.ih.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.ic.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
shm:function(a){H.n(a,"$ic",[P.l],"$ac")}}
A.af.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.id.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.W.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.cH.prototype={
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.ij.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.cI.prototype={
ah:function(a){var u=new Float32Array(H.c2(H.n(a,"$ic",[P.t],"$ac")))
C.c.dY(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.av.prototype={
ah:function(a){var u=new Float32Array(H.c2(H.n(a,"$ic",[P.t],"$ac")))
C.c.dZ(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.bX.prototype={
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.bY.prototype={
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.jB.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c4(s.b,b).c4(s.d.c4(s.c,b),c)
a.sV(0,new V.a_(r.a,r.b,r.c))
a.scg(r.p(0,Math.sqrt(r.B(r))))
s=1-b
u=1-c
a.sbM(new V.bh(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:5}
F.jN.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:11}
F.jP.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.p(p)
s=-s*p
u=r*p
a.sV(0,new V.a_(s,u,q))
u=new V.H(s,u,q)
a.scg(u.p(0,Math.sqrt(u.B(u))))
a.sbM(new V.bh(1-c,2+c,-1,-1))},
$S:5}
F.jQ.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:17}
F.jR.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:17}
F.ke.prototype={
$2:function(a,b){return 0},
$S:11}
F.kf.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.p(s)
u=a.f
t=new V.H(u.a,u.b,u.c)
s=t.p(0,Math.sqrt(t.B(t))).m(0,this.b+s)
a.sV(0,new V.a_(s.a,s.b,s.c))},
$S:5}
F.ki.prototype={
$1:function(a){return new V.a_(Math.cos(a),Math.sin(a),0)},
$S:16}
F.k1.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.a_(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:16}
F.jO.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o=this,n=b*6.283185307179586,m=o.a,l=o.b,k=J.l1(m.$1(n),l)
l=J.l1(m.$1(n+3.141592653589793/o.c),l).w(0,k)
l=new V.H(l.a,l.b,l.c)
u=l.p(0,Math.sqrt(l.B(l)))
m=$.lF
if(m==null){m=new V.H(1,0,0)
$.lF=m
t=m}else t=m
m=u.au(!J.N(u,t)?V.lH():t)
s=m.p(0,Math.sqrt(m.B(m)))
m=s.au(u)
t=m.p(0,Math.sqrt(m.B(m)))
r=c*6.283185307179586
m=Math.cos(r)
l=o.d
q=Math.sin(r)
m=t.m(0,m*l)
l=s.m(0,q*l)
q=m.c
p=l.c
if(typeof q!=="number")return q.w()
if(typeof p!=="number")return H.p(p)
a.sV(0,k.v(0,new V.a_(m.a-l.a,m.b-l.b,q-p)))},
$S:5}
F.jV.prototype={
$2:function(a,b){return 0},
$S:11}
F.jW.prototype={
$3:function(a,b,c){var u,t,s=b*2-1,r=c*2-1
a.sV(0,new V.a_(s,r,this.a.a.$2(b,c)))
u=new V.H(s,r,1)
a.scg(u.p(0,Math.sqrt(u.B(u))))
u=1-b
t=1-c
a.sbM(new V.bh(b*c,2+u*c,4+b*t,6+u*t))},
$S:5}
F.a5.prototype={
aV:function(){var u=this
if(!u.gaW()){C.a.K(u.a.a.d.b,u)
u.a.a.X()}u.bF()
u.bG()
u.fX()},
bJ:function(a){this.a=a
C.a.h(a.d.b,this)},
bK:function(a){this.b=a
C.a.h(a.d.c,this)},
h4:function(a){this.c=a
C.a.h(a.d.d,this)},
bF:function(){var u=this.a
if(u!=null){C.a.K(u.d.b,this)
this.a=null}},
bG:function(){var u=this.b
if(u!=null){C.a.K(u.d.c,this)
this.b=null}},
fX:function(){var u=this.c
if(u!=null){C.a.K(u.d.d,this)
this.c=null}},
gaW:function(){return this.a==null||this.b==null||this.c==null},
ev:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cK()
if(q!=null)s=s.v(0,q)
if(u!=null)s=s.v(0,u)
if(t!=null)s=s.v(0,t)
if(s.dB())return
return s.p(0,Math.sqrt(s.B(s)))},
ez:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.w(0,q)
r=new V.H(r.a,r.b,r.c)
s=r.p(0,Math.sqrt(r.B(r)))
r=t.w(0,q)
r=new V.H(r.a,r.b,r.c)
r=s.au(r.p(0,Math.sqrt(r.B(r))))
return r.p(0,Math.sqrt(r.B(r)))},
bQ:function(){var u,t=this
if(t.d!=null)return!0
u=t.ev()
if(u==null){u=t.ez()
if(u==null)return!1}t.d=u
t.a.a.X()
return!0},
eu:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cK()
if(q!=null)s=s.v(0,q)
if(u!=null)s=s.v(0,u)
if(t!=null)s=s.v(0,t)
if(s.dB())return
return s.p(0,Math.sqrt(s.B(s)))},
ey:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.I().a){l=d.w(0,g)
l=new V.H(l.a,l.b,l.c)
q=l.p(0,Math.sqrt(l.B(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.w(0,g).m(0,p).v(0,g).w(0,j)
l=new V.H(l.a,l.b,l.c)
q=l.p(0,Math.sqrt(l.B(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.p(0,Math.sqrt(l.B(l)))
l=o.au(q)
l=l.p(0,Math.sqrt(l.B(l))).au(o)
q=l.p(0,Math.sqrt(l.B(l)))}return q},
bO:function(){var u,t=this
if(t.e!=null)return!0
u=t.eu()
if(u==null){u=t.ey()
if(u==null)return!1}t.e=u
t.a.a.X()
return!0},
ghA:function(a){var u=this
if(J.N(u.a,u.b))return!0
if(J.N(u.b,u.c))return!0
if(J.N(u.c,u.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var u,t,s=this
if(s.gaW())return a+"disposed"
u=a+C.b.a8(J.ar(s.a.e),0)+", "+C.b.a8(J.ar(s.b.e),0)+", "+C.b.a8(J.ar(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
L:function(){return this.C("")}}
F.fu.prototype={}
F.hM.prototype={
aY:function(a,b,c){var u,t=b.a
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
F.bd.prototype={
aV:function(){var u=this
if(!u.gaW()){C.a.K(u.a.a.c.b,u)
u.a.a.X()}u.bF()
u.bG()},
bJ:function(a){this.a=a
C.a.h(a.c.b,this)},
bK:function(a){this.b=a
C.a.h(a.c.c,this)},
bF:function(){var u=this.a
if(u!=null){C.a.K(u.c.b,this)
this.a=null}},
bG:function(){var u=this.b
if(u!=null){C.a.K(u.c.c,this)
this.b=null}},
gaW:function(){return this.a==null||this.b==null},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){if(this.gaW())return a+"disposed"
return a+C.b.a8(J.ar(this.a.e),0)+", "+C.b.a8(J.ar(this.b.e),0)},
L:function(){return this.C("")}}
F.fK.prototype={}
F.ib.prototype={
aY:function(a,b,c){var u,t=b.a
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
F.bv.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.a8(J.ar(u.e),0)},
L:function(){return this.C("")}}
F.bT.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.S():u},
aZ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.u()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){r=g[s]
h.a.h(0,r.hD())}h.a.u()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bv()
if(n.a==null)H.y(P.B("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.F(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.v()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.mX(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.v()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.ci(l,k,i)}g=h.e
if(g!=null)g.ad(0)},
ac:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ac()||!1
if(!t.a.ac())u=!1
s=t.e
if(s!=null)s.ad(0)
return u},
i1:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.e(o.slice(0),[H.u(o,0)])
for(o=[F.ap];u.length!==0;){t=C.a.ghS(u)
C.a.dO(u,0)
if(t!=null){s=H.e([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.b(u,r)
q=u[r]
if(q!=null&&a.aY(0,t,q)){C.a.h(s,q)
C.a.dO(u,r)}}if(s.length>1)b.aZ(s)}}p.a.u()
p.c.cc()
p.d.cc()
p.b.il()
p.c.cd(new F.ib())
p.d.cd(new F.hM())
o=p.e
if(o!=null)o.ad(0)},
bL:function(){this.i1(new F.iG(),new F.hm())},
hy:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bn()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bm().a)!==0)++s
if((t&$.bl().a)!==0)++s
if((t&$.bC().a)!==0)++s
if((t&$.bD().a)!==0)++s
if((t&$.d0().a)!==0)++s
if((t&$.d1().a)!==0)++s
if((t&$.cc().a)!==0)++s
if((t&$.bk().a)!==0)++s
r=a3.gco(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.t
p=H.e(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.e(u,[Z.d6])
for(n=0,m=0;m<s;++m){l=a3.ht(m)
k=l.gco(l)
C.a.j(o,m,new Z.d6(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.b(u,j)
i=u[j].i_(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.j(p,h,i[g]);++h}}n+=k}H.n(p,"$ic",[t],"$ac")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.c2(p)),35044)
u.bindBuffer(a0,null)
e=new Z.d7(new Z.dY(a0,f),o,a3)
e.seP(H.e([],[Z.br]))
if(a.b.b.length!==0){t=P.l
d=H.e([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.u()
C.a.h(d,c.e)}b=Z.kH(u,34963,H.n(d,"$ic",[t],"$ac"))
C.a.h(e.b,new Z.br(0,d.length,b))}if(a.c.b.length!==0){t=P.l
d=H.e([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.u()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.b(c,m)
c=c[m].b
c.a.a.u()
C.a.h(d,c.e)}b=Z.kH(u,34963,H.n(d,"$ic",[t],"$ac"))
C.a.h(e.b,new Z.br(1,d.length,b))}if(a.d.b.length!==0){t=P.l
d=H.e([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.u()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.b(c,m)
c=c[m].b
c.a.a.u()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.b(c,m)
c=c[m].c
c.a.a.u()
C.a.h(d,c.e)}b=Z.kH(u,34963,H.n(d,"$ic",[t],"$ac"))
C.a.h(e.b,new Z.br(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.e([],[P.h])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.C(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.C(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.C(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.C(t))}return C.a.t(s,"\n")},
X:function(){var u=this.e
if(u!=null)u.F(null)},
$ip1:1}
F.hG.prototype={
hq:function(a){var u,t,s,r,q,p,o
H.n(a,"$ic",[F.ap],"$ac")
u=H.e([],[F.a5])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.b(a,p)
p=a[p]
if(q>=o)return H.b(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.ci(s,p,o))}}return u},
hr:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,"$ic",[F.ap],"$ac")
u=H.e([],[F.a5])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.b(c,r)
l=c[r];++r
if(r>=m)return H.b(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.b(c,j)
i=c[j]
if(s<0||s>=m)return H.b(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.ci(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ci(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ci(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.ci(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
cd:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.k(0,q)
for(o=q-1;o>=0;--o){n=r.d.k(0,o)
if(a.aY(0,p,n)){p.aV()
break}}}}},
cc:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.ghA(s)
if(t)s.aV()}},
ac:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].bQ())s=!1
return s},
bP:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].bO())s=!1
return s},
i:function(a){return this.L()},
C:function(a){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].C(a))
return C.a.t(r,"\n")},
L:function(){return this.C("")},
seJ:function(a){this.b=H.n(a,"$ic",[F.a5],"$ac")}}
F.hH.prototype={
gl:function(a){return this.b.length},
cd:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.k(0,q)
for(o=q-1;o>=0;--o){n=r.c.k(0,o)
if(a.aY(0,p,n)){p.aV()
break}}}}},
cc:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=J.N(s.a,s.b)
if(t)s.aV()}},
i:function(a){return this.L()},
C:function(a){var u,t,s=H.e([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
C.a.h(s,t[u].C(a+(""+u+". ")))}return C.a.t(s,"\n")},
L:function(){return this.C("")},
seQ:function(a){this.b=H.n(a,"$ic",[F.bd],"$ac")}}
F.hI.prototype={
gl:function(a){return this.b.length},
il:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.K(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.F(null)}s=t.a
if(s!=null){C.a.K(s.b.b,t)
t.a=null}}}},
i:function(a){return this.L()},
C:function(a){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].C(a))
return C.a.t(r,"\n")},
L:function(){return this.C("")},
sbC:function(a){this.b=H.n(a,"$ic",[F.bv],"$ac")}}
F.ap.prototype={
bT:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.dX(u.cx,r,o,t,s,q,p,a,n)},
hD:function(){return this.bT(null)},
sV:function(a,b){var u
if(!J.N(this.f,b)){this.f=b
u=this.a
if(u!=null)u.X()}},
scg:function(a){var u
if(!J.N(this.z,a)){this.z=a
u=this.a
if(u!=null)u.X()}},
sbM:function(a){var u
if(!J.N(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.X()}},
i_:function(a){var u,t,s=this
if(a.n(0,$.bn())){u=s.f
t=[P.t]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.n(0,$.bm())){u=s.r
t=[P.t]
if(u==null)return H.e([0,1,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.n(0,$.bl())){u=s.x
t=[P.t]
if(u==null)return H.e([0,0,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.n(0,$.bC())){u=s.y
t=[P.t]
if(u==null)return H.e([0,0],t)
else return H.e([u.a,u.b],t)}else if(a.n(0,$.bD())){u=s.z
t=[P.t]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.n(0,$.d0())){u=s.Q
t=[P.t]
if(u==null)return H.e([1,1,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.n(0,$.d1())){u=s.Q
t=[P.t]
if(u==null)return H.e([1,1,1,1],t)
else return H.e([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.cc()))return H.e([s.ch],[P.t])
else if(a.n(0,$.bk())){u=s.cx
t=[P.t]
if(u==null)return H.e([-1,-1,-1,-1],t)
else return H.e([u.a,u.b,u.c,u.d],t)}else return H.e([],[P.t])},
bQ:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cK()
t.d.I(0,new F.iL(s))
s=s.a
t.r=s.p(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.X()
s=t.a.e
if(s!=null)s.ad(0)}return!0},
bO:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cK()
t.d.I(0,new F.iK(s))
s=s.a
t.x=s.p(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.X()
s=t.a.e
if(s!=null)s.ad(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var u,t,s=this,r="-",q=H.e([],[P.h])
C.a.h(q,C.b.a8(J.ar(s.e),0))
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
C.a.h(q,V.M(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.t(q,", ")
return a+"{"+t+"}"},
L:function(){return this.C("")}}
F.iL.prototype={
$1:function(a){var u,t
H.f(a,"$ia5")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.v(0,u)}},
$S:9}
F.iK.prototype={
$1:function(a){var u,t
H.f(a,"$ia5")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.v(0,u)}},
$S:9}
F.iB.prototype={
u:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.b(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.B("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.X()
return!0},
hs:function(a,b,c,d,e,f){var u=F.dX(a,null,b,c,d,e,f,null,0)
this.h(0,u)
return u},
gl:function(a){return this.c.length},
ac:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].bQ()
return!0},
bP:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].bO()
return!0},
hz:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.m()
n=q.p(0,Math.sqrt(p*p+o*o+n*n))
if(!J.N(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}}return!0},
i:function(a){return this.L()},
C:function(a){var u,t,s,r
this.u()
u=H.e([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].C(a))
return C.a.t(u,"\n")},
L:function(){return this.C("")},
shn:function(a){this.c=H.n(a,"$ic",[F.ap],"$ac")}}
F.iC.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.b(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.b(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.b(t,b)
return t[b]},
I:function(a,b){var u=this
H.o(b,{func:1,ret:-1,args:[F.a5]})
C.a.I(u.b,b)
C.a.I(u.c,new F.iD(u,b))
C.a.I(u.d,new F.iE(u,b))},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].C(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].C(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].C(""))
return C.a.t(r,"\n")},
seK:function(a){this.b=H.n(a,"$ic",[F.a5],"$ac")},
seL:function(a){this.c=H.n(a,"$ic",[F.a5],"$ac")},
seM:function(a){this.d=H.n(a,"$ic",[F.a5],"$ac")}}
F.iD.prototype={
$1:function(a){H.f(a,"$ia5")
if(!J.N(a.a,this.a))this.b.$1(a)},
$S:9}
F.iE.prototype={
$1:function(a){var u
H.f(a,"$ia5")
u=this.a
if(!J.N(a.a,u)&&!J.N(a.b,u))this.b.$1(a)},
$S:9}
F.iF.prototype={
gl:function(a){return this.b.length+this.c.length},
k:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.b(t,u)
return t[u]}else{if(b<0)return H.b(t,b)
return t[b]}},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].C(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].C(""))
return C.a.t(r,"\n")},
seR:function(a){this.b=H.n(a,"$ic",[F.bd],"$ac")},
seS:function(a){this.c=H.n(a,"$ic",[F.bd],"$ac")}}
F.iH.prototype={}
F.iG.prototype={
aY:function(a,b,c){return J.N(b.f,c.f)}}
F.iI.prototype={}
F.hm.prototype={
aZ:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.n(a,"$ic",[F.ap],"$ac")
u=V.cK()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null){q=u.a
p=r.a
o=u.b
n=r.b
m=u.c
r=r.c
if(typeof m!=="number")return m.v()
if(typeof r!=="number")return H.p(r)
u=new V.H(q+p,o+n,m+r)}}u=u.p(0,Math.sqrt(u.B(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.v)(a),++s){l=a[s]
if(r)k=null
else{q=u.a
p=u.b
o=u.c
if(typeof o!=="number")return o.m()
k=u.p(0,Math.sqrt(q*q+p*p+o*o))}if(!J.N(l.r,k)){l.r=k
q=l.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}return}}
F.iJ.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].C(""))
return C.a.t(r,"\n")},
sbC:function(a){this.b=H.n(a,"$ic",[F.bv],"$ac")}}
O.dr.prototype={
gA:function(){var u=this.fr
return u==null?this.fr=D.S():u},
a6:function(a){var u
H.f(a,"$iA")
u=this.fr
if(u!=null)u.F(a)},
f8:function(){return this.a6(null)},
cZ:function(a){H.f(a,"$iA")
this.a=null
this.a6(a)},
h1:function(){return this.cZ(null)},
f2:function(a,b){var u=V.al
H.n(b,"$ik",[u],"$ak")
u=new D.bO([u])
u.b=!0
this.a6(u)},
f4:function(a,b){var u=V.al
H.n(b,"$ik",[u],"$ak")
u=new D.bP([u])
u.b=!0
this.a6(u)},
cG:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.l,h=new H.Y([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=h.k(0,0)
h.j(0,0,r==null?1:r)}q=H.e([],[A.aG])
h.I(0,new O.h3(j,q))
C.a.bk(q,new O.h4())
p=new H.Y([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){o=u[s]
r=o.gaU()
n=p.k(0,o.gaU())
p.j(0,r,n==null?1:n)}m=H.e([],[A.aK])
p.I(0,new O.h5(j,m))
C.a.bk(m,new O.h6())
l=new H.Y([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.v)(i),++s){o=i[s]
t=o.gaU()
r=l.k(0,o.gaU())
l.j(0,t,r==null?1:r)}k=H.e([],[A.aO])
l.I(0,new O.h7(j,k))
C.a.bk(k,new O.h8())
i=C.d.a3(j.e.a.length+3,4)
j.dy.e
return A.n4(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
es:function(a,b){H.n(a,"$ic",[T.dL],"$ac")},
am:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.as(u,u.length,[H.u(u,0)]);u.H();){t=u.d
t.toString
s=$.iA
if(s==null)s=$.iA=new V.H(0,0,1)
t.a=s
r=$.iz
t.d=r==null?$.iz=new V.H(0,1,0):r
r=$.iy
t.e=r==null?$.iy=new V.H(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bh(s)
r=s.a
p=s.b
o=s.c
if(typeof o!=="number")return o.m()
t.a=s.p(0,Math.sqrt(r*r+p*p+o*o))
o=q.bh(t.d)
p=o.a
r=o.b
s=o.c
if(typeof s!=="number")return s.m()
t.d=o.p(0,Math.sqrt(p*p+r*r+s*s))
s=q.bh(t.e)
r=s.a
p=s.b
o=s.c
if(typeof o!=="number")return o.m()
t.e=s.p(0,Math.sqrt(r*r+p*p+o*o))}}}},
io:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cG()
u=b6.fr.k(0,b5.aX)
if(u==null){u=A.n3(b5,b6.a)
t=u.b
if(t.length===0)H.y(P.B("May not cache a shader with no name."))
if(b6.fr.bb(0,t))H.y(P.B('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.j(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.df
b5=b7.e
if(!(b5 instanceof Z.d7))b5=b7.e=null
if(b5==null||!b5.d.n(0,r)){b5=s.k3
if(b5)b7.d.ac()
q=s.k4
if(q){p=b7.d
o=p.e
if(o!=null)++o.d
p.d.bP()
p.a.bP()
p=p.e
if(p!=null)p.ad(0)}p=s.r2
if(p){o=b7.d
n=o.e
if(n!=null)++n.d
o.a.hz()
o=o.e
if(o!=null)o.ad(0)}m=b7.d.hy(new Z.iN(b6.a),r)
m.aK($.bn()).e=b4.a.Q.c
if(b5)m.aK($.bm()).e=b4.a.cx.c
if(q)m.aK($.bl()).e=b4.a.ch.c
if(s.r1)m.aK($.bC()).e=b4.a.cy.c
if(p)m.aK($.bD()).e=b4.a.db.c
if(s.rx)m.aK($.bk()).e=b4.a.dx.c
b7.e=m}b5=T.dL
l=H.e([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.hN()
if(s.dy){q=b4.a
o=b6.dx
o=o.gZ(o)
q=q.dy
q.toString
q.ah(o.a9(0,!0))}if(s.fr){q=b4.a
o=b6.cx
if(o==null){o=b6.db
o=o.gZ(o)
n=b6.dx
n=b6.cx=o.m(0,n.gZ(n))
o=n}q=q.fr
q.toString
q.ah(o.a9(0,!0))}q=b4.a
o=b6.ch
if(o==null){o=b6.gik()
n=b6.dx
n=b6.ch=o.m(0,n.gZ(n))
o=n}q=q.fy
q.toString
q.ah(o.a9(0,!0))
if(s.ry){q=b4.a
o=b4.b
q=q.k1
q.toString
q.ah(C.j.a9(o,!0))}if(s.x1){q=b4.a
o=b4.c
q=q.k2
q.toString
q.ah(C.j.a9(o,!0))}if(s.x2){q=b4.a
o=b4.d
q=q.k3
q.toString
q.ah(C.j.a9(o,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.c.bi(q.a,q.d,k)
for(q=[P.t],j=0;j<k;++j){o=b4.a
n=b4.e.a
if(j>=n.length)return H.b(n,j)
n=n[j]
o.toString
H.f(n,"$ial")
o=o.r1
if(j>=o.length)return H.b(o,j)
o=o[j]
i=new Float32Array(H.c2(H.n(n.a9(0,!0),"$ic",q,"$ac")))
C.c.dZ(o.a,o.d,!1,i)}}if(s.a.a){q=b4.a
o=b4.f.f
q=q.r2
C.c.U(q.a,q.d,o.a,o.b,o.c)}if(s.id){if(s.b.a){q=b4.a
o=b4.r.f
q=q.x1
C.c.U(q.a,q.d,o.a,o.b,o.c)}if(s.c.a){q=b4.a
o=b4.x.f
q=q.y2
C.c.U(q.a,q.d,o.a,o.b,o.c)}if(s.d.a){q=b4.a
o=b4.y.f
q=q.dg
C.c.U(q.a,q.d,o.a,o.b,o.c)}q=s.e.a
if(!q)o=!1
else o=!0
if(o){o=b4.a
n=b4.z.ch
o=o.di
C.c.a_(o.a,o.d,n)}if(q){q=b4.a
o=b4.z.f
q=q.dh
C.c.U(q.a,q.d,o.a,o.b,o.c)}q=s.z
if(q.length>0){o=b6.db
h=o.gZ(o)
o=P.l
g=new H.Y([o,o])
for(o=b4.dx.e,n=o.length,f=0;f<o.length;o.length===n||(0,H.v)(o),++f){e=o[f]
d=g.k(0,0)
if(d==null)d=0
g.j(0,0,d+1)
c=J.d2(b4.a.bW.k(0,0),d)
b=h.bh(e.a)
a=b.a
a0=b.b
a1=b.c
if(typeof a1!=="number")return a1.m()
a1=b.p(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=c.e
a=a1.a
b=a1.b
a1=a1.c
C.c.U(a0.a,a0.d,a,b,a1)
a1=e.c
b=c.f
C.c.U(b.a,b.d,a1.a,a1.b,a1.c)}for(o=q.length,f=0;f<q.length;q.length===o||(0,H.v)(q),++f){n=q[f].a
k=g.k(0,n)
if(k==null)k=0
n=b4.a.bV.k(0,n)
C.c.bi(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b6.db
h=o.gZ(o)
o=P.l
a2=new H.Y([o,o])
for(o=b4.dx.f,n=o.length,b=[b5],a=[P.t],f=0;f<o.length;o.length===n||(0,H.v)(o),++f){e=o[f]
a3=e.gaU()
d=a2.k(0,a3)
if(d==null)d=0
a2.j(0,a3,d+1)
c=J.d2(b4.a.bY.k(0,a3),d)
a4=h.m(0,e.gZ(e))
a0=e.gZ(e)
a1=$.cx
a0=a0.ci(a1==null?$.cx=new V.a_(0,0,0):a1)
a1=c.b
C.c.U(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=$.cx
a0=a4.ci(a0==null?$.cx=new V.a_(0,0,0):a0)
a1=c.c
C.c.U(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=e.gaT(e)
a1=c.e
C.c.U(a1.a,a1.d,a0.a,a0.b,a0.c)
e.gaA()
a0=a4.dA(0)
a1=a0.a
a5=a0.b
a6=a0.c
a7=a0.e
a8=a0.f
a9=a0.r
b0=a0.y
b1=a0.z
a0=a0.Q
b2=c.d
b2.toString
i=new Float32Array(H.c2(H.n(new V.dt(a1,a5,a6,a7,a8,a9,b0,b1,a0).a9(0,!0),"$ic",a,"$ac")))
C.c.dY(b2.a,b2.d,!1,i)
e.gaA()
a0=e.gaA()
H.n(l,"$ic",b,"$ac")
if(!C.a.at(l,a0)){a0.saw(0,l.length)
C.a.h(l,a0)}a0=e.gaA()
a1=a0.gay(a0)
if(a1){a1=c.f
a1.toString
a5=a0.gay(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.gaw(a0)
a1.a.uniform1i(a1.d,a0)}}e.gaO()
a0=e.ge4()
a1=c.x
a1.toString
a5=a0.ghK(a0)
a6=a0.ghL(a0)
a7=a0.ghM()
a0=a0.ghJ()
C.c.dX(a1.a,a1.d,a5,a6,a7,a0)
a0=e.gaO()
if(!C.a.at(l,a0)){a0.saw(0,l.length)
C.a.h(l,a0)}a0=e.gaO()
a1=a0.gay(a0)
if(a1){a1=c.r
a1.toString
a5=a0.gay(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.gaw(a0)
a1.a.uniform1i(a1.d,a0)}}if(e.ghO()){a0=e.ghu()
a1=c.y
C.c.a_(a1.a,a1.d,a0)
a0=e.ghv()
a1=c.z
C.c.a_(a1.a,a1.d,a0)
a0=e.ghw()
a1=c.Q
C.c.a_(a1.a,a1.d,a0)}}for(o=q.length,f=0;f<q.length;q.length===o||(0,H.v)(q),++f){n=q[f].a
k=a2.k(0,n)
if(k==null)k=0
n=b4.a.bX.k(0,n)
C.c.bi(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=b6.db
h=o.gZ(o)
o=P.l
b3=new H.Y([o,o])
for(o=b4.dx.r,n=o.length,b5=[b5],f=0;f<o.length;o.length===n||(0,H.v)(o),++f){e=o[f]
a3=e.gaU()
d=b3.k(0,a3)
if(d==null)d=0
b3.j(0,a3,d+1)
c=J.d2(b4.a.c_.k(0,a3),d)
b=e.gij(e)
a=c.b
C.c.U(a.a,a.d,b.a,b.b,b.c)
b=e.giC(e).iU()
a=c.c
C.c.U(a.a,a.d,b.a,b.b,b.c)
b=h.ci(e.gij(e))
a=c.d
C.c.U(a.a,a.d,b.a,b.b,b.c)
b=e.gaT(e)
a=c.e
C.c.U(a.a,a.d,b.a,b.b,b.c)
e.gaA()
b=e.gcj()
a=c.f
C.c.U(a.a,a.d,b.a,b.b,b.c)
b=e.gce(e)
a=c.r
C.c.U(a.a,a.d,b.a,b.b,b.c)
b=e.giV()
a=c.x
C.c.a_(a.a,a.d,b)
b=e.giW()
a=c.y
C.c.a_(a.a,a.d,b)
e.gaA()
b=e.gaA()
H.n(l,"$ic",b5,"$ac")
if(!C.a.at(l,b)){b.saw(0,l.length)
C.a.h(l,b)}b=e.gaA()
a=b.gay(b)
if(a){a=c.dx
a.toString
a0=b.gay(b)
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.gaw(b)
a.a.uniform1i(a.d,b)}}e.gaO()
b=e.ge4()
a=c.z
a.toString
a0=b.ghK(b)
a1=b.ghL(b)
a5=b.ghM()
b=b.ghJ()
C.c.dX(a.a,a.d,a0,a1,a5,b)
b=e.gaO()
if(!C.a.at(l,b)){b.saw(0,l.length)
C.a.h(l,b)}b=e.gaO()
a=b.gay(b)
if(a){a=c.dy
a.toString
a0=b.gay(b)
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.gaw(b)
a.a.uniform1i(a.d,b)}}if(e.giD()){b=e.giB()
a=c.Q
C.c.a_(a.a,a.d,b)
b=e.giA()
a=c.ch
C.c.a_(a.a,a.d,b)}if(e.ghO()){b=e.ghu()
a=c.cx
C.c.a_(a.a,a.d,b)
b=e.ghv()
a=c.cy
C.c.a_(a.a,a.d,b)
b=e.ghw()
a=c.db
C.c.a_(a.a,a.d,b)}}for(b5=q.length,f=0;f<q.length;q.length===b5||(0,H.v)(q),++f){o=q[f].a
k=b3.k(0,o)
if(k==null)k=0
o=b4.a.bZ.k(0,o)
C.c.bi(o.a,o.d,k)}}}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.gZ(q).dA(0)}b5=b5.id
b5.toString
b5.ah(q.a9(0,!0))}if(s.cy){b4.es(l,b4.ch)
b5=b4.a
q=b4.ch
b5.h3(b5.dj,q)
if(s.r.a){b5=b4.a
q=b4.cx.f
b5=b5.dk
C.c.U(b5.a,b5.d,q.a,q.b,q.c)}b5=s.x.a
if(!b5)q=!1
else q=!0
if(q){q=b4.a
o=b4.cy.ch
q=q.dl
C.c.a_(q.a,q.d,o)}if(b5){b5=b4.a
q=b4.cy.f
b5=b5.dm
C.c.U(b5.a,b5.d,q.a,q.b,q.c)}}b5=s.y.a
q=!b5
if(q)o=!1
else o=!0
if(o){if(b5){b5=b4.a
o=b4.db.f
b5=b5.dn
C.c.a_(b5.a,b5.d,o)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].ba(b6)
b5=b7.e
b5.ba(b6)
b5.aM(b6)
b5.dW(b6)
if(q)b5=!1
else b5=!0
if(b5)p.disable(3042)
for(j=0;j<l.length;++j)l[j].dW(b6)
b5=b4.a
b5.toString
p.useProgram(null)
b5.x.hI()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cG().aX},
sex:function(a){this.e=H.n(a,"$iZ",[V.al],"$aZ")}}
O.h3.prototype={
$2:function(a,b){H.ac(a)
H.ac(b)
if(typeof b!=="number")return b.v()
return C.a.h(this.b,new A.aG(a,C.d.a3(b+3,4)*4))},
$S:15}
O.h4.prototype={
$2:function(a,b){H.f(a,"$iaG")
H.f(b,"$iaG")
return J.km(a.a,b.a)},
$S:47}
O.h5.prototype={
$2:function(a,b){H.ac(a)
H.ac(b)
if(typeof b!=="number")return b.v()
return C.a.h(this.b,new A.aK(a,C.d.a3(b+3,4)*4))},
$S:15}
O.h6.prototype={
$2:function(a,b){H.f(a,"$iaK")
H.f(b,"$iaK")
return J.km(a.a,b.a)},
$S:48}
O.h7.prototype={
$2:function(a,b){H.ac(a)
H.ac(b)
if(typeof b!=="number")return b.v()
return C.a.h(this.b,new A.aO(a,C.d.a3(b+3,4)*4))},
$S:15}
O.h8.prototype={
$2:function(a,b){H.f(a,"$iaO")
H.f(b,"$iaO")
return J.km(a.a,b.a)},
$S:49}
O.fY.prototype={
ar:function(){var u,t=this
t.cq()
u=t.f
if(!(Math.abs(u-1)<$.I().a)){t.f=1
u=new D.K(t.b,u,1,[P.t])
u.b=!0
t.a.a6(u)}}}
O.ds.prototype={
ar:function(){},
d1:function(a){var u,t,s=this
if(!s.c.n(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.ar()
u=s.a
u.a=null
u.a6(null)}}}
O.fZ.prototype={}
O.b2.prototype={
d0:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.K(s.b+".color",u,a,[V.a4])
t.b=!0
s.a.a6(t)}},
ar:function(){this.cq()
this.d0(new V.a4(1,1,1))},
saT:function(a,b){this.d1(new A.ak(!0,!1,!1))
this.d0(b)}}
O.h0.prototype={}
O.h1.prototype={
ar:function(){var u,t=this
t.cr()
u=t.ch
if(!(Math.abs(u-1)<$.I().a)){t.ch=1
u=new D.K(t.b+".refraction",u,1,[P.t])
u.b=!0
t.a.a6(u)}}}
O.h2.prototype={
d2:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.I().a)){u.ch=a
t=new D.K(u.b+".shininess",t,a,[P.t])
t.b=!0
u.a.a6(t)}},
ar:function(){this.cr()
this.d2(100)}}
O.bU.prototype={}
T.dL.prototype={}
V.eV.prototype={
aL:function(a,b){return!0},
i:function(a){return"all"},
$ibe:1}
V.be.prototype={}
V.dq.prototype={
aL:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)if(u[s].aL(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saq:function(a){this.a=H.n(a,"$ic",[V.be],"$ac")},
$ibe:1}
V.bg.prototype={
aL:function(a,b){return!this.e8(0,b)},
i:function(a){return"!["+this.cp(0)+"]"}}
V.hF.prototype={
ec:function(a){var u,t
if(a.a.length<=0)throw H.d(P.B("May not create a SetMatcher with zero characters."))
u=new H.Y([P.l,P.ab])
for(t=new H.dn(a,a.gl(a),[H.aw(a,"w",0)]);t.H();)u.j(0,t.d,!0)
this.sh2(u)},
aL:function(a,b){return this.a.bb(0,b)},
i:function(a){var u=this.a
return P.cE(u.gal(u),0,null)},
sh2:function(a){this.a=H.n(a,"$iz",[P.l,P.ab],"$az")},
$ibe:1}
V.cC.prototype={
t:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cG(this.a.N(0,b))
r.saq(H.e([],[V.be]))
r.c=!1
C.a.h(this.c,r)
return r},
hR:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.aL(0,a))return r}return},
i:function(a){return this.b},
shl:function(a){this.c=H.n(a,"$ic",[V.cG],"$ac")}}
V.dN.prototype={
i:function(a){var u=H.mh(this.b,"\n","\\n"),t=H.mh(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cF.prototype={
i:function(a){return this.b},
sfY:function(a){var u=P.h
this.c=H.n(a,"$iz",[u,u],"$az")}}
V.i3.prototype={
N:function(a,b){var u=this.a.k(0,b)
if(u==null){u=new V.cC(this,b)
u.shl(H.e([],[V.cG]))
u.d=null
this.a.j(0,b,u)}return u},
b3:function(a){var u,t=this.b.k(0,a)
if(t==null){t=new V.cF(a)
u=P.h
t.sfY(new H.Y([u,u]))
this.b.j(0,a,t)}return t},
ix:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.e([],[V.dN]),k=this.c,j=[P.l],i=H.e([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.E(a,s)
q=k.hR(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cE(i,0,m)
throw H.d(P.B("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.e([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cE(i,0,m)
o=k.d
n=o.c.k(0,p)
t=new V.dN(n==null?o.b:n,p,s)}++s}}},
shc:function(a){this.a=H.n(a,"$iz",[P.h,V.cC],"$az")},
she:function(a){this.b=H.n(a,"$iz",[P.h,V.cF],"$az")}}
V.cG.prototype={
i:function(a){return this.b.b+": "+this.cp(0)}}
X.d9.prototype={$ics:1}
X.fB.prototype={
gA:function(){var u=this.x
return u==null?this.x=D.S():u}}
X.dy.prototype={
gA:function(){var u=this.f
return u==null?this.f=D.S():u},
aE:function(a){var u
H.f(a,"$iA")
u=this.f
if(u!=null)u.F(a)},
ep:function(){return this.aE(null)},
sb_:function(a){var u,t,s=this
if(!J.N(s.b,a)){u=s.b
if(u!=null)u.gA().K(0,s.gcv())
t=s.b
s.b=a
if(a!=null)a.gA().h(0,s.gcv())
u=new D.K("mover",t,s.b,[U.a8])
u.b=!0
s.aE(u)}},
$ics:1,
$id9:1}
X.dK.prototype={}
V.kd.prototype={
$1:function(a){var u
H.f(a,"$ib5")
u=C.e.dV(this.a.ghU(),2)
if(u!=="0.00")P.kZ(u+" fps")},
$S:50}
V.hv.prototype={
d8:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.o(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.lA().gcb().k(0,H.j(u))
if(t==null)if(d){c.$0()
m.d6(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.l3(m.c).h(0,q)
o=W.mT("radio")
o.checked=s
o.name=u
u=W.m
W.aa(o,"change",H.o(new V.hw(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.l3(m.c).h(0,r.createElement("br"))},
aI:function(a,b,c){return this.d8(a,b,c,!1)},
d6:function(a){var u,t,s=P.lA(),r=P.h,q=P.mZ(s.gcb(),r,r)
q.j(0,this.a,a)
u=s.dP(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jn([],[]).ck(""),"",t)}}
V.hw.prototype={
$1:function(a){var u=this
if(H.E(u.b.checked)){u.c.$0()
u.a.d6(u.d)}},
$S:26}
V.hJ.prototype={
ee:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.m
W.aa(q,"scroll",H.o(new V.hL(o),{func:1,ret:-1,args:[r]}),!1,r)},
d9:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.n(a,"$ic",[P.h],"$ac")
this.h6()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ix(C.a.hZ(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.v)(s),++q){p=s[q]
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
if(H.oQ(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.b(m,1)
l.href=H.U(m[1])
l.textContent=H.U(m[0])
t.appendChild(l)}else{k=P.jx(C.N,n,C.h,!1)
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
ho:function(a){var u,t,s,r,q,p,o,n="auto"
H.n(a,"$ic",[P.h],"$ac")
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
s=H.f(r.insertCell(-1),"$ibi").style
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
o=H.f(r.insertCell(-1),"$ibi")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
h6:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.i3()
t=P.h
u.shc(new H.Y([t,V.cC]))
u.she(new H.Y([t,V.cF]))
u.c=null
u.c=u.N(0,q)
t=u.N(0,q).t(0,p)
s=V.ai(new H.a2("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,p).t(0,p)
s=new V.bg()
r=[V.be]
s.saq(H.e([],r))
C.a.h(t.a,s)
t=V.ai(new H.a2("*"))
C.a.h(s.a,t)
t=u.N(0,p).t(0,"BoldEnd")
s=V.ai(new H.a2("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).t(0,o)
s=V.ai(new H.a2("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,o).t(0,o)
s=new V.bg()
s.saq(H.e([],r))
C.a.h(t.a,s)
t=V.ai(new H.a2("_"))
C.a.h(s.a,t)
t=u.N(0,o).t(0,n)
s=V.ai(new H.a2("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).t(0,m)
s=V.ai(new H.a2("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,m).t(0,m)
s=new V.bg()
s.saq(H.e([],r))
C.a.h(t.a,s)
t=V.ai(new H.a2("`"))
C.a.h(s.a,t)
t=u.N(0,m).t(0,"CodeEnd")
s=V.ai(new H.a2("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).t(0,l)
s=V.ai(new H.a2("["))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,l).t(0,k)
s=V.ai(new H.a2("|"))
C.a.h(t.a,s)
s=u.N(0,l).t(0,j)
t=V.ai(new H.a2("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,l).t(0,l)
t=new V.bg()
t.saq(H.e([],r))
C.a.h(s.a,t)
s=V.ai(new H.a2("|]"))
C.a.h(t.a,s)
s=u.N(0,k).t(0,j)
t=V.ai(new H.a2("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,k).t(0,k)
t=new V.bg()
t.saq(H.e([],r))
C.a.h(s.a,t)
s=V.ai(new H.a2("|]"))
C.a.h(t.a,s)
C.a.h(u.N(0,q).t(0,i).a,new V.eV())
s=u.N(0,i).t(0,i)
t=new V.bg()
t.saq(H.e([],r))
C.a.h(s.a,t)
s=V.ai(new H.a2("*_`["))
C.a.h(t.a,s)
s=u.N(0,"BoldEnd")
s.d=s.a.b3(p)
s=u.N(0,n)
s.d=s.a.b3(o)
s=u.N(0,"CodeEnd")
s.d=s.a.b3(m)
s=u.N(0,j)
s.d=s.a.b3("Link")
s=u.N(0,i)
s.d=s.a.b3(i)
this.b=u}}
V.hL.prototype={
$1:function(a){P.lw(C.o,new V.hK(this.a))},
$S:26}
V.hK.prototype={
$0:function(){var u=C.e.ae(document.documentElement.scrollTop),t=this.a.style,s=H.j(-0.01*u)+"px"
t.top=s},
$S:0}
K.k2.prototype={
$1:function(a){var u=H.x(H.f(a,"$iA"),"$idJ").c,t=this.a.af(0,u,null),s=this.b.af(0,u,null),r=this.c
r.e.j(0,0,t)
r.e.j(0,1,s)
r.e.j(0,2,t)
r.e.j(0,3,s)
r.e.j(0,4,t)
r.e.j(0,5,s)
r.e.j(0,6,t)
r.e.j(0,7,s)},
$S:10}
K.ka.prototype={
$1:function(a){a.ac()
this.a.scn(0,a)},
$S:52}
K.k3.prototype={
$0:function(){this.a.$1(F.m1(30,null,30))},
$S:0}
K.k4.prototype={
$0:function(){this.a.$1(F.m2(!0,100,20,1))},
$S:0}
K.k5.prototype={
$0:function(){this.a.$1(F.m2(!1,30,12,0))},
$S:0}
K.k6.prototype={
$0:function(){this.a.$1(F.oP(20,20))},
$S:0}
K.k7.prototype={
$0:function(){this.a.$1(F.oT(1.5,0.25))},
$S:0}
K.k8.prototype={
$0:function(){this.a.$1(F.oH(0.1))},
$S:0}
K.k9.prototype={
$0:function(){this.a.$1(F.oB())},
$S:0};(function aliases(){var u=J.a.prototype
u.e6=u.i
u=J.dk.prototype
u.e7=u.i
u=O.ds.prototype
u.cq=u.ar
u=O.b2.prototype
u.cr=u.ar
u=V.dq.prototype
u.e8=u.aL
u.cp=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"oq","nB",12)
u(P,"or","nC",12)
u(P,"os","nD",12)
t(P,"m_","oo",3)
var n
s(n=E.am.prototype,"gdH",0,0,null,["$1","$0"],["dI","i9"],1,0)
s(n,"gdF",0,0,null,["$1","$0"],["dG","i8"],1,0)
s(n,"gdD",0,0,null,["$1","$0"],["dE","i5"],1,0)
r(n,"gi3","i4",6)
r(n,"gi6","i7",6)
s(n=E.dM.prototype,"gcs",0,0,null,["$1","$0"],["cu","ct"],1,0)
q(n,"giq","dQ",3)
p(n=X.dT.prototype,"gfj","fk",14)
p(n,"gf5","f6",14)
p(n,"gfd","fe",4)
p(n,"gfn","fo",25)
p(n,"gfl","fm",25)
p(n,"gfs","ft",4)
p(n,"gfw","fz",4)
p(n,"gfh","fi",4)
p(n,"gfu","fv",4)
p(n,"gff","fg",4)
p(n,"gfA","fB",33)
p(n,"gfC","fD",14)
p(n,"gfO","fP",13)
p(n,"gfK","fL",13)
p(n,"gfM","fN",13)
s(D.bc.prototype,"gef",0,0,null,["$1","$0"],["an","eg"],1,0)
s(n=D.dm.prototype,"gcT",0,0,null,["$1","$0"],["cU","fp"],1,0)
p(n,"gfE","fF",44)
r(n,"gf_","f0",23)
r(n,"gfI","fJ",23)
o(V.R.prototype,"gl","c3",22)
o(V.H.prototype,"gl","c3",22)
s(n=U.cl.prototype,"gaD",0,0,null,["$1","$0"],["D","a1"],1,0)
r(n,"geh","ei",21)
r(n,"gfG","fH",21)
s(n=U.dU.prototype,"gaD",0,0,null,["$1","$0"],["D","a1"],1,0)
p(n,"gbu","bv",2)
p(n,"gbw","bx",2)
p(n,"gby","bz",2)
s(n=U.dV.prototype,"gaD",0,0,null,["$1","$0"],["D","a1"],1,0)
p(n,"gbu","bv",2)
p(n,"gbw","bx",2)
p(n,"gby","bz",2)
p(n,"geU","eV",2)
p(n,"geW","eX",2)
p(n,"ghj","hk",2)
p(n,"ghh","hi",2)
p(n,"ghf","hg",2)
p(U.dW.prototype,"geY","eZ",2)
s(n=M.df.prototype,"gai",0,0,null,["$1","$0"],["ao","ek"],1,0)
r(n,"gf9","fa",6)
r(n,"gfb","fc",6)
s(n=O.dr.prototype,"gf7",0,0,null,["$1","$0"],["a6","f8"],1,0)
s(n,"gh0",0,0,null,["$1","$0"],["cZ","h1"],1,0)
r(n,"gf1","f2",20)
r(n,"gf3","f4",20)
s(X.dy.prototype,"gcv",0,0,null,["$1","$0"],["aE","ep"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.P,null)
s(P.P,[H.kx,J.a,J.as,P.ee,P.k,H.dn,P.aZ,H.bM,H.cJ,H.fc,H.i8,P.bq,H.cf,H.ev,P.ag,H.fL,H.fN,H.fG,P.eB,P.b9,P.aC,P.dZ,P.hU,P.cD,P.hV,P.b5,P.aj,P.jA,P.jj,P.cN,P.ed,P.w,P.js,P.fU,P.bI,P.jz,P.jy,P.ab,P.at,P.a6,P.bp,P.hq,P.dI,P.e6,P.fA,P.c,P.z,P.L,P.ao,P.h,P.a3,P.c0,P.ip,P.jk,W.ff,W.D,W.dh,P.jm,P.je,P.O,O.Z,O.cp,E.f6,E.am,E.hx,D.A,E.dM,Z.dY,Z.iN,Z.d7,Z.br,Z.bz,D.f9,D.aY,X.d8,X.dl,X.fI,X.fR,X.au,X.hg,X.i4,X.dT,D.bc,D.a7,D.dz,D.dH,V.a4,V.aV,V.fr,V.dt,V.al,V.a9,V.a_,V.bh,V.dD,V.R,V.H,U.dU,U.dV,U.dW,M.df,A.d4,A.f_,A.ak,A.aG,A.aK,A.aO,A.h_,A.bV,A.bW,A.bZ,A.dP,A.ii,F.a5,F.fu,F.bd,F.fK,F.bv,F.bT,F.hG,F.hH,F.hI,F.ap,F.iB,F.iC,F.iF,F.iH,F.iI,F.iJ,O.bU,O.ds,O.h0,V.eV,V.be,V.dq,V.hF,V.cC,V.dN,V.cF,V.i3,X.d9,X.dK,X.dy,V.hv,V.hJ])
s(J.a,[J.fE,J.dj,J.dk,J.b_,J.co,J.bs,H.ct,H.bu,W.i,W.eU,W.bG,W.aW,W.aX,W.Q,W.e0,W.fj,W.fk,W.e2,W.de,W.e4,W.fm,W.m,W.e7,W.aH,W.fC,W.e9,W.cm,W.fQ,W.ha,W.ef,W.eg,W.aI,W.eh,W.ek,W.aJ,W.eo,W.eq,W.aM,W.er,W.aN,W.ew,W.ay,W.ez,W.i2,W.aQ,W.eC,W.i6,W.iu,W.eH,W.eJ,W.eL,W.eN,W.eP,P.b1,P.eb,P.b4,P.em,P.hu,P.ex,P.b6,P.eE,P.f0,P.e_,P.d5,P.dB,P.bS,P.dF,P.dQ,P.et])
s(J.dk,[J.hr,J.c_,J.bt])
t(J.kw,J.b_)
s(J.co,[J.di,J.fF])
t(P.fP,P.ee)
s(P.fP,[H.dR,W.iW,W.iV,P.fw])
t(H.a2,H.dR)
s(P.k,[H.fp,H.fV,H.iO])
s(P.aZ,[H.fW,H.iP])
t(H.fd,H.fc)
s(P.bq,[H.hn,H.fH,H.im,H.ia,H.f8,H.hD,P.eZ,P.dx,P.aT,P.io,P.ik,P.hQ,P.fb,P.fi])
s(H.cf,[H.kj,H.hZ,H.jY,H.jZ,H.k_,P.iS,P.iR,P.iT,P.iU,P.jr,P.jq,P.j1,P.j5,P.j2,P.j3,P.j4,P.j8,P.j9,P.j7,P.j6,P.hW,P.hX,P.jK,P.jh,P.jg,P.ji,P.fO,P.fT,P.fn,P.fo,P.it,P.iq,P.ir,P.is,P.jt,P.ju,P.jw,P.jv,P.jE,P.jD,P.jF,P.jG,W.hc,W.he,W.hC,W.hT,W.j0,P.jo,P.jM,P.fx,P.fy,P.f2,E.hy,E.hz,E.hA,E.i1,D.fs,D.ft,F.jB,F.jN,F.jP,F.jQ,F.jR,F.ke,F.kf,F.ki,F.k1,F.jO,F.jV,F.jW,F.iL,F.iK,F.iD,F.iE,O.h3,O.h4,O.h5,O.h6,O.h7,O.h8,V.kd,V.hw,V.hL,V.hK,K.k2,K.ka,K.k3,K.k4,K.k5,K.k6,K.k7,K.k8,K.k9])
s(H.hZ,[H.hR,H.cd])
t(H.iQ,P.eZ)
t(P.fS,P.ag)
t(H.Y,P.fS)
t(H.fM,H.fp)
t(H.du,H.bu)
s(H.du,[H.cO,H.cQ])
t(H.cP,H.cO)
t(H.cu,H.cP)
t(H.cR,H.cQ)
t(H.dv,H.cR)
s(H.dv,[H.hh,H.hi,H.hj,H.hk,H.hl,H.dw,H.cv])
t(P.jf,P.jA)
t(P.jd,P.jj)
t(P.eG,P.fU)
t(P.dS,P.eG)
s(P.bI,[P.f4,P.fq])
t(P.bL,P.hV)
s(P.bL,[P.f5,P.ix,P.iw])
t(P.iv,P.fq)
s(P.a6,[P.t,P.l])
s(P.aT,[P.bR,P.fD])
t(P.iY,P.c0)
s(W.i,[W.G,W.fv,W.cq,W.aL,W.cS,W.aP,W.az,W.cU,W.iM,W.cL,P.f3,P.bF])
s(W.G,[W.a0,W.bo])
s(W.a0,[W.r,P.q])
s(W.r,[W.eW,W.eX,W.bH,W.dc,W.fz,W.cn,W.hE,W.bi])
s(W.aW,[W.cg,W.fg,W.fh])
t(W.fe,W.aX)
t(W.ch,W.e0)
t(W.e3,W.e2)
t(W.dd,W.e3)
t(W.e5,W.e4)
t(W.fl,W.e5)
t(W.ax,W.bG)
t(W.e8,W.e7)
t(W.cj,W.e8)
t(W.ea,W.e9)
t(W.bN,W.ea)
t(W.by,W.m)
s(W.by,[W.b0,W.ad,W.aR])
t(W.hb,W.ef)
t(W.hd,W.eg)
t(W.ei,W.eh)
t(W.hf,W.ei)
t(W.el,W.ek)
t(W.cw,W.el)
t(W.ep,W.eo)
t(W.hs,W.ep)
t(W.hB,W.eq)
t(W.cT,W.cS)
t(W.hN,W.cT)
t(W.es,W.er)
t(W.hO,W.es)
t(W.hS,W.ew)
t(W.eA,W.ez)
t(W.i_,W.eA)
t(W.cV,W.cU)
t(W.i0,W.cV)
t(W.eD,W.eC)
t(W.i5,W.eD)
t(W.b8,W.ad)
t(W.eI,W.eH)
t(W.iX,W.eI)
t(W.e1,W.de)
t(W.eK,W.eJ)
t(W.ja,W.eK)
t(W.eM,W.eL)
t(W.ej,W.eM)
t(W.eO,W.eN)
t(W.jl,W.eO)
t(W.eQ,W.eP)
t(W.jp,W.eQ)
t(W.iZ,P.hU)
t(W.kI,W.iZ)
t(W.j_,P.cD)
t(P.jn,P.jm)
t(P.ah,P.je)
t(P.ec,P.eb)
t(P.fJ,P.ec)
t(P.en,P.em)
t(P.ho,P.en)
t(P.ey,P.ex)
t(P.hY,P.ey)
t(P.eF,P.eE)
t(P.i7,P.eF)
t(P.f1,P.e_)
t(P.hp,P.bF)
t(P.eu,P.et)
t(P.hP,P.eu)
s(D.A,[E.dJ,D.bO,D.bP,D.K,X.ht])
s(E.f6,[Z.d6,A.cB,T.dL])
s(X.ht,[X.dp,X.bf,X.cr,X.dO])
s(O.Z,[D.dm,U.cl])
s(D.f9,[U.fa,U.a8])
s(U.a8,[U.da,U.dE])
t(A.fX,A.cB)
s(A.dP,[A.aA,A.ie,A.ig,A.ih,A.ic,A.af,A.id,A.W,A.cH,A.ij,A.cI,A.av,A.bX,A.bY])
t(F.hM,F.fu)
t(F.ib,F.fK)
t(F.iG,F.iH)
t(F.hm,F.iI)
t(O.dr,O.bU)
s(O.ds,[O.fY,O.fZ,O.b2])
s(O.b2,[O.h1,O.h2])
s(V.dq,[V.bg,V.cG])
t(X.fB,X.dK)
u(H.dR,H.cJ)
u(H.cO,P.w)
u(H.cP,H.bM)
u(H.cQ,P.w)
u(H.cR,H.bM)
u(P.ee,P.w)
u(P.eG,P.js)
u(W.e0,W.ff)
u(W.e2,P.w)
u(W.e3,W.D)
u(W.e4,P.w)
u(W.e5,W.D)
u(W.e7,P.w)
u(W.e8,W.D)
u(W.e9,P.w)
u(W.ea,W.D)
u(W.ef,P.ag)
u(W.eg,P.ag)
u(W.eh,P.w)
u(W.ei,W.D)
u(W.ek,P.w)
u(W.el,W.D)
u(W.eo,P.w)
u(W.ep,W.D)
u(W.eq,P.ag)
u(W.cS,P.w)
u(W.cT,W.D)
u(W.er,P.w)
u(W.es,W.D)
u(W.ew,P.ag)
u(W.ez,P.w)
u(W.eA,W.D)
u(W.cU,P.w)
u(W.cV,W.D)
u(W.eC,P.w)
u(W.eD,W.D)
u(W.eH,P.w)
u(W.eI,W.D)
u(W.eJ,P.w)
u(W.eK,W.D)
u(W.eL,P.w)
u(W.eM,W.D)
u(W.eN,P.w)
u(W.eO,W.D)
u(W.eP,P.w)
u(W.eQ,W.D)
u(P.eb,P.w)
u(P.ec,W.D)
u(P.em,P.w)
u(P.en,W.D)
u(P.ex,P.w)
u(P.ey,W.D)
u(P.eE,P.w)
u(P.eF,W.D)
u(P.e_,P.ag)
u(P.et,P.w)
u(P.eu,W.D)})()
var v={mangledGlobalNames:{l:"int",t:"double",a6:"num",h:"String",ab:"bool",L:"Null",c:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.L},{func:1,ret:-1,opt:[D.A]},{func:1,ret:-1,args:[D.A]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ad]},{func:1,ret:P.L,args:[F.ap,P.t,P.t]},{func:1,ret:-1,args:[P.l,[P.k,E.am]]},{func:1,ret:P.L,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:P.L,args:[F.a5]},{func:1,ret:P.L,args:[D.A]},{func:1,ret:P.t,args:[P.t,P.t]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aR]},{func:1,ret:-1,args:[W.m]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:V.a_,args:[P.t]},{func:1,ret:P.t,args:[P.t]},{func:1,ret:P.h,args:[P.l]},{func:1,ret:P.L,args:[,]},{func:1,ret:-1,args:[P.l,[P.k,V.al]]},{func:1,ret:-1,args:[P.l,[P.k,U.a8]]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.l,[P.k,D.a7]]},{func:1,args:[,]},{func:1,ret:-1,args:[W.b0]},{func:1,ret:P.L,args:[W.m]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:W.a0,args:[W.G]},{func:1,ret:P.ab,args:[W.G]},{func:1,args:[W.m]},{func:1,ret:P.O,args:[,,]},{func:1,ret:-1,args:[W.b8]},{func:1,ret:P.O,args:[P.l]},{func:1,ret:P.L,args:[P.h,,]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:P.L,args:[P.h]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.l]},{func:1,ret:[P.z,P.h,P.h],args:[[P.z,P.h,P.h],P.h]},{func:1,ret:[P.aC,,],args:[,]},{func:1,ret:P.L,args:[,],opt:[P.ao]},{func:1,ret:P.ab,args:[[P.k,D.a7]]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,args:[P.h]},{func:1,ret:P.l,args:[A.aG,A.aG]},{func:1,ret:P.l,args:[A.aK,A.aK]},{func:1,ret:P.l,args:[A.aO,A.aO]},{func:1,ret:P.L,args:[P.b5]},{func:1,args:[,P.h]},{func:1,ret:-1,args:[F.bT]},{func:1,ret:P.L,args:[P.a6]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.n=W.bH.prototype
C.J=J.a.prototype
C.a=J.b_.prototype
C.d=J.di.prototype
C.j=J.dj.prototype
C.e=J.co.prototype
C.b=J.bs.prototype
C.K=J.bt.prototype
C.Q=W.cw.prototype
C.w=J.hr.prototype
C.c=P.bS.prototype
C.p=J.c_.prototype
C.x=W.b8.prototype
C.y=W.cL.prototype
C.R=new P.f5()
C.z=new P.f4()
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

C.G=new P.hq()
C.h=new P.iv()
C.H=new P.ix()
C.f=new P.jf()
C.o=new P.bp(0)
C.I=new P.bp(5e6)
C.t=H.e(u([127,2047,65535,1114111]),[P.l])
C.k=H.e(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.l=H.e(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.m=H.e(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.M=H.e(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.N=H.e(u([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.i=H.e(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.u=H.e(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.O=H.e(u([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.v=H.e(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.L=H.e(u([]),[P.h])
C.P=new H.fd(0,{},C.L,[P.h,P.h])})();(function staticFields(){$.aU=0
$.ce=null
$.l5=null
$.kO=!1
$.m8=null
$.lY=null
$.mf=null
$.jS=null
$.k0=null
$.kX=null
$.c3=null
$.cY=null
$.cZ=null
$.kP=!1
$.X=C.f
$.aq=[]
$.li=null
$.lm=null
$.cx=null
$.ls=null
$.lD=null
$.lG=null
$.lF=null
$.iy=null
$.iz=null
$.iA=null
$.lE=null
$.ll=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oZ","mk",function(){return H.m7("_$dart_dartClosure")})
u($,"p_","l_",function(){return H.m7("_$dart_js")})
u($,"p4","ml",function(){return H.b7(H.i9({
toString:function(){return"$receiver$"}}))})
u($,"p5","mm",function(){return H.b7(H.i9({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"p6","mn",function(){return H.b7(H.i9(null))})
u($,"p7","mo",function(){return H.b7(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pa","mr",function(){return H.b7(H.i9(void 0))})
u($,"pb","ms",function(){return H.b7(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"p9","mq",function(){return H.b7(H.ly(null))})
u($,"p8","mp",function(){return H.b7(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pd","mu",function(){return H.b7(H.ly(void 0))})
u($,"pc","mt",function(){return H.b7(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"ps","l0",function(){return P.nA()})
u($,"pe","mv",function(){return P.nw()})
u($,"pt","mz",function(){return H.n5(H.c2(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"pu","mA",function(){return P.nj("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pv","mB",function(){return P.nY()})
u($,"pl","my",function(){return Z.aB(0)})
u($,"pf","mw",function(){return Z.aB(511)})
u($,"pn","bn",function(){return Z.aB(1)})
u($,"pm","bm",function(){return Z.aB(2)})
u($,"ph","bl",function(){return Z.aB(4)})
u($,"po","bC",function(){return Z.aB(8)})
u($,"pp","bD",function(){return Z.aB(16)})
u($,"pi","d0",function(){return Z.aB(32)})
u($,"pj","d1",function(){return Z.aB(64)})
u($,"pk","mx",function(){return Z.aB(96)})
u($,"pq","cc",function(){return Z.aB(128)})
u($,"pg","bk",function(){return Z.aB(256)})
u($,"oY","mj",function(){return new V.fr(1e-9)})
u($,"oX","I",function(){return $.mj()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.ct,DataView:H.bu,ArrayBufferView:H.bu,Float32Array:H.cu,Float64Array:H.cu,Int16Array:H.hh,Int32Array:H.hi,Int8Array:H.hj,Uint16Array:H.hk,Uint32Array:H.hl,Uint8ClampedArray:H.dw,CanvasPixelArray:H.dw,Uint8Array:H.cv,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLBaseElement:W.r,HTMLBodyElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLImageElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableColElement:W.r,HTMLTableElement:W.r,HTMLTableRowElement:W.r,HTMLTableSectionElement:W.r,HTMLTemplateElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.eU,HTMLAnchorElement:W.eW,HTMLAreaElement:W.eX,Blob:W.bG,HTMLCanvasElement:W.bH,CDATASection:W.bo,CharacterData:W.bo,Comment:W.bo,ProcessingInstruction:W.bo,Text:W.bo,CSSNumericValue:W.cg,CSSUnitValue:W.cg,CSSPerspective:W.fe,CSSCharsetRule:W.Q,CSSConditionRule:W.Q,CSSFontFaceRule:W.Q,CSSGroupingRule:W.Q,CSSImportRule:W.Q,CSSKeyframeRule:W.Q,MozCSSKeyframeRule:W.Q,WebKitCSSKeyframeRule:W.Q,CSSKeyframesRule:W.Q,MozCSSKeyframesRule:W.Q,WebKitCSSKeyframesRule:W.Q,CSSMediaRule:W.Q,CSSNamespaceRule:W.Q,CSSPageRule:W.Q,CSSRule:W.Q,CSSStyleRule:W.Q,CSSSupportsRule:W.Q,CSSViewportRule:W.Q,CSSStyleDeclaration:W.ch,MSStyleCSSProperties:W.ch,CSS2Properties:W.ch,CSSImageValue:W.aW,CSSKeywordValue:W.aW,CSSPositionValue:W.aW,CSSResourceValue:W.aW,CSSURLImageValue:W.aW,CSSStyleValue:W.aW,CSSMatrixComponent:W.aX,CSSRotation:W.aX,CSSScale:W.aX,CSSSkew:W.aX,CSSTranslation:W.aX,CSSTransformComponent:W.aX,CSSTransformValue:W.fg,CSSUnparsedValue:W.fh,DataTransferItemList:W.fj,HTMLDivElement:W.dc,DOMException:W.fk,ClientRectList:W.dd,DOMRectList:W.dd,DOMRectReadOnly:W.de,DOMStringList:W.fl,DOMTokenList:W.fm,Element:W.a0,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,AbsoluteOrientationSensor:W.i,Accelerometer:W.i,AccessibleNode:W.i,AmbientLightSensor:W.i,Animation:W.i,ApplicationCache:W.i,DOMApplicationCache:W.i,OfflineResourceList:W.i,BackgroundFetchRegistration:W.i,BatteryManager:W.i,BroadcastChannel:W.i,CanvasCaptureMediaStreamTrack:W.i,DedicatedWorkerGlobalScope:W.i,EventSource:W.i,FileReader:W.i,FontFaceSet:W.i,Gyroscope:W.i,XMLHttpRequest:W.i,XMLHttpRequestEventTarget:W.i,XMLHttpRequestUpload:W.i,LinearAccelerationSensor:W.i,Magnetometer:W.i,MediaDevices:W.i,MediaKeySession:W.i,MediaQueryList:W.i,MediaRecorder:W.i,MediaSource:W.i,MediaStream:W.i,MediaStreamTrack:W.i,MIDIAccess:W.i,MIDIInput:W.i,MIDIOutput:W.i,MIDIPort:W.i,NetworkInformation:W.i,Notification:W.i,OffscreenCanvas:W.i,OrientationSensor:W.i,PaymentRequest:W.i,Performance:W.i,PermissionStatus:W.i,PresentationAvailability:W.i,PresentationConnection:W.i,PresentationConnectionList:W.i,PresentationRequest:W.i,RelativeOrientationSensor:W.i,RemotePlayback:W.i,RTCDataChannel:W.i,DataChannel:W.i,RTCDTMFSender:W.i,RTCPeerConnection:W.i,webkitRTCPeerConnection:W.i,mozRTCPeerConnection:W.i,ScreenOrientation:W.i,Sensor:W.i,ServiceWorker:W.i,ServiceWorkerContainer:W.i,ServiceWorkerGlobalScope:W.i,ServiceWorkerRegistration:W.i,SharedWorker:W.i,SharedWorkerGlobalScope:W.i,SpeechRecognition:W.i,SpeechSynthesis:W.i,SpeechSynthesisUtterance:W.i,VR:W.i,VRDevice:W.i,VRDisplay:W.i,VRSession:W.i,VisualViewport:W.i,WebSocket:W.i,Worker:W.i,WorkerGlobalScope:W.i,WorkerPerformance:W.i,BluetoothDevice:W.i,BluetoothRemoteGATTCharacteristic:W.i,Clipboard:W.i,MojoInterfaceInterceptor:W.i,USB:W.i,IDBDatabase:W.i,IDBOpenDBRequest:W.i,IDBVersionChangeRequest:W.i,IDBRequest:W.i,IDBTransaction:W.i,AnalyserNode:W.i,RealtimeAnalyserNode:W.i,AudioBufferSourceNode:W.i,AudioDestinationNode:W.i,AudioNode:W.i,AudioScheduledSourceNode:W.i,AudioWorkletNode:W.i,BiquadFilterNode:W.i,ChannelMergerNode:W.i,AudioChannelMerger:W.i,ChannelSplitterNode:W.i,AudioChannelSplitter:W.i,ConstantSourceNode:W.i,ConvolverNode:W.i,DelayNode:W.i,DynamicsCompressorNode:W.i,GainNode:W.i,AudioGainNode:W.i,IIRFilterNode:W.i,MediaElementAudioSourceNode:W.i,MediaStreamAudioDestinationNode:W.i,MediaStreamAudioSourceNode:W.i,OscillatorNode:W.i,Oscillator:W.i,PannerNode:W.i,AudioPannerNode:W.i,webkitAudioPannerNode:W.i,ScriptProcessorNode:W.i,JavaScriptAudioNode:W.i,StereoPannerNode:W.i,WaveShaperNode:W.i,EventTarget:W.i,File:W.ax,FileList:W.cj,FileWriter:W.fv,HTMLFormElement:W.fz,Gamepad:W.aH,History:W.fC,HTMLCollection:W.bN,HTMLFormControlsCollection:W.bN,HTMLOptionsCollection:W.bN,ImageData:W.cm,HTMLInputElement:W.cn,KeyboardEvent:W.b0,Location:W.fQ,MediaList:W.ha,MessagePort:W.cq,MIDIInputMap:W.hb,MIDIOutputMap:W.hd,MimeType:W.aI,MimeTypeArray:W.hf,PointerEvent:W.ad,MouseEvent:W.ad,DragEvent:W.ad,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,Attr:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cw,RadioNodeList:W.cw,Plugin:W.aJ,PluginArray:W.hs,RTCStatsReport:W.hB,HTMLSelectElement:W.hE,SourceBuffer:W.aL,SourceBufferList:W.hN,SpeechGrammar:W.aM,SpeechGrammarList:W.hO,SpeechRecognitionResult:W.aN,Storage:W.hS,CSSStyleSheet:W.ay,StyleSheet:W.ay,HTMLTableCellElement:W.bi,HTMLTableDataCellElement:W.bi,HTMLTableHeaderCellElement:W.bi,TextTrack:W.aP,TextTrackCue:W.az,VTTCue:W.az,TextTrackCueList:W.i_,TextTrackList:W.i0,TimeRanges:W.i2,Touch:W.aQ,TouchEvent:W.aR,TouchList:W.i5,TrackDefaultList:W.i6,CompositionEvent:W.by,FocusEvent:W.by,TextEvent:W.by,UIEvent:W.by,URL:W.iu,VideoTrackList:W.iM,WheelEvent:W.b8,Window:W.cL,DOMWindow:W.cL,CSSRuleList:W.iX,ClientRect:W.e1,DOMRect:W.e1,GamepadList:W.ja,NamedNodeMap:W.ej,MozNamedAttrMap:W.ej,SpeechRecognitionResultList:W.jl,StyleSheetList:W.jp,SVGLength:P.b1,SVGLengthList:P.fJ,SVGNumber:P.b4,SVGNumberList:P.ho,SVGPointList:P.hu,SVGStringList:P.hY,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGScriptElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGTransform:P.b6,SVGTransformList:P.i7,AudioBuffer:P.f0,AudioParamMap:P.f1,AudioTrackList:P.f3,AudioContext:P.bF,webkitAudioContext:P.bF,BaseAudioContext:P.bF,OfflineAudioContext:P.hp,WebGLBuffer:P.d5,WebGLProgram:P.dB,WebGL2RenderingContext:P.bS,WebGLShader:P.dF,WebGLUniformLocation:P.dQ,SQLResultSetRowList:P.hP})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.du.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
H.dv.$nativeSuperclassTag="ArrayBufferView"
W.cS.$nativeSuperclassTag="EventTarget"
W.cT.$nativeSuperclassTag="EventTarget"
W.cU.$nativeSuperclassTag="EventTarget"
W.cV.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.mb,[])
else K.mb([])})})()
//# sourceMappingURL=test.dart.js.map
