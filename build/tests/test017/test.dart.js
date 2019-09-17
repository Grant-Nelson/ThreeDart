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
a[c]=function(){a[c]=function(){H.oZ(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kW"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kW"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kW(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kE:function kE(){},
k0:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
fG:function(){return new P.ce("No element")},
mX:function(){return new P.ce("Too many elements")},
dr:function(a,b,c,d){if(c-b<=32)H.nq(a,b,c,d)
else H.np(a,b,c,d)},
nq:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.b(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.b(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a3()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.b(a,q)
C.b.m(a,s,a[q])
s=q}C.b.m(a,s,t)}},
np:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.c.aa(a4-a3+1,6),d=a3+e,c=a4-e,b=C.c.aa(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a3()
if(a1>0){p=q
q=r
r=p}C.b.m(a2,d,u)
C.b.m(a2,b,s)
C.b.m(a2,c,q)
if(a3<0||a3>=a2.length)return H.b(a2,a3)
C.b.m(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.b(a2,a4)
C.b.m(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.z(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.R()
if(k<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a3()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.m(a2,o,a2[n])
C.b.m(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.b(a2,n)
C.b.m(a2,m,a2[n])
C.b.m(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.R()
if(g<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a3()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a3()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.R()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.m(a2,o,a2[n])
C.b.m(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.b.m(a2,m,a2[n])
C.b.m(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.b(a2,a1)
C.b.m(a2,a3,a2[a1])
C.b.m(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.b(a2,a1)
C.b.m(a2,a4,a2[a1])
C.b.m(a2,a1,r)
H.dr(a2,a3,o-2,a5)
H.dr(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.b(a2,o)
if(!J.z(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.b(a2,n)
if(!J.z(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.R()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.m(a2,o,a2[n])
C.b.m(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.b.m(a2,m,a2[n])
C.b.m(a2,n,l)}n=j
break}}}H.dr(a2,o,n,a5)}else H.dr(a2,o,n,a5)},
m:function m(a){this.a=a},
fk:function fk(){},
d8:function d8(){},
c1:function c1(a,b){var _=this
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
h_:function h_(a,b,c){this.a=a
this.b=b
this.$ti=c},
co:function co(a,b,c){this.a=a
this.b=b
this.$ti=c},
j1:function j1(a,b){this.a=a
this.b=b},
cZ:function cZ(){},
iC:function iC(){},
dH:function dH(){},
mQ:function(){throw H.d(P.y("Cannot modify unmodifiable Map"))},
eN:function(a){var u,t=H.p0(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oI:function(a){return v.types[a]},
ma:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Q(a).$iA},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a6(a)
if(typeof u!=="string")throw H.d(H.aq(a))
return u},
cb:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nh:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.b(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.a_(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.F(s,q)|32)>t)return}return parseInt(a,b)},
cc:function(a){return H.n8(a)+H.lY(H.cG(a),0,null)},
n8:function(a){var u,t,s,r,q,p,o,n=J.Q(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.Q||!!n.$ibD){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.eN(t.length>1&&C.a.F(t,0)===36?C.a.ac(t,1):t)},
n9:function(){if(!!self.location)return self.location.href
return},
lu:function(a){var u,t,s,r,q=J.ah(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
ni:function(a){var u,t,s,r=H.c([],[P.x])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.aq(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aU(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.d(H.aq(s))}return H.lu(r)},
lv:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.aq(s))
if(s<0)throw H.d(H.aq(s))
if(s>65535)return H.ni(a)}return H.lu(a)},
nj:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
by:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aU(u,10))>>>0,56320|u&1023)}}throw H.d(P.a_(a,0,1114111,null,null))},
bx:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ng:function(a){var u=H.bx(a).getFullYear()+0
return u},
ne:function(a){var u=H.bx(a).getMonth()+1
return u},
na:function(a){var u=H.bx(a).getDate()+0
return u},
nb:function(a){var u=H.bx(a).getHours()+0
return u},
nd:function(a){var u=H.bx(a).getMinutes()+0
return u},
nf:function(a){var u=H.bx(a).getSeconds()+0
return u},
nc:function(a){var u=H.bx(a).getMilliseconds()+0
return u},
w:function(a){throw H.d(H.aq(a))},
b:function(a,b){if(a==null)J.ah(a)
throw H.d(H.bL(a,b))},
bL:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.am(!0,b,s,null)
u=J.ah(a)
if(!(b<0)){if(typeof u!=="number")return H.w(u)
t=b>=u}else t=!0
if(t)return P.M(b,a,s,null,u)
return P.dk(b,s)},
oC:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bz(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bz(a,c,!0,b,"end",u)
return new P.am(!0,b,"end",null)},
aq:function(a){return new P.am(!0,a,null,null)},
ox:function(a){if(typeof a!=="number")throw H.d(H.aq(a))
return a},
d:function(a){var u
if(a==null)a=new P.dh()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mg})
u.name=""}else u.toString=H.mg
return u},
mg:function(){return J.a6(this.dartException)},
t:function(a){throw H.d(a)},
p:function(a){throw H.d(P.aG(a))},
aB:function(a){var u,t,s,r,q,p
a=H.me(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.k])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ip(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iq:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lE:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lq:function(a,b){return new H.hs(a,b==null?null:b.method)},
kF:function(a,b){var u=b==null,t=u?null:b.method
return new H.fK(a,t,u?null:b.receiver)},
ag:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kp(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aU(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kF(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lq(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mj()
q=$.mk()
p=$.ml()
o=$.mm()
n=$.mp()
m=$.mq()
l=$.mo()
$.mn()
k=$.ms()
j=$.mr()
i=r.ak(u)
if(i!=null)return f.$1(H.kF(u,i))
else{i=q.ak(u)
if(i!=null){i.method="call"
return f.$1(H.kF(u,i))}else{i=p.ak(u)
if(i==null){i=o.ak(u)
if(i==null){i=n.ak(u)
if(i==null){i=m.ak(u)
if(i==null){i=l.ak(u)
if(i==null){i=o.ak(u)
if(i==null){i=k.ak(u)
if(i==null){i=j.ak(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lq(u,i))}}return f.$1(new H.iB(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dt()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.am(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dt()
return a},
kZ:function(a){var u
if(a==null)return new H.em(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.em(a)},
oG:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
oO:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.q("Unsupported number of arguments for wrapped closure"))},
bK:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oO)
a.$identity=u
return u},
mP:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.i1().constructor.prototype):Object.create(new H.bP(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.as
if(typeof t!=="number")return t.A()
$.as=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lf(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mL(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lf(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mL:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oI,a)
if(typeof a=="function")if(b)return a
else{u=c?H.le:H.ks
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
mM:function(a,b,c,d){var u=H.ks
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lf:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mO(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mM(t,!r,u,b)
if(t===0){r=$.as
if(typeof r!=="number")return r.A()
$.as=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bQ
return new Function(r+H.e(q==null?$.bQ=H.f_("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.as
if(typeof r!=="number")return r.A()
$.as=r+1
o+=r
r="return function("+o+"){return this."
q=$.bQ
return new Function(r+H.e(q==null?$.bQ=H.f_("self"):q)+"."+H.e(u)+"("+o+");}")()},
mN:function(a,b,c,d){var u=H.ks,t=H.le
switch(b?-1:a){case 0:throw H.d(H.nn("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mO:function(a,b){var u,t,s,r,q,p,o,n=$.bQ
if(n==null)n=$.bQ=H.f_("self")
u=$.ld
if(u==null)u=$.ld=H.f_("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mN(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.as
if(typeof u!=="number")return u.A()
$.as=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.as
if(typeof u!=="number")return u.A()
$.as=u+1
return new Function(n+u+"}")()},
kW:function(a,b,c,d,e,f,g){return H.mP(a,b,c,d,!!e,!!f,g)},
ks:function(a){return a.a},
le:function(a){return a.c},
f_:function(a){var u,t,s,r=new H.bP("self","target","receiver","name"),q=J.kC(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
oU:function(a,b){throw H.d(H.mK(a,H.eN(b.substring(2))))},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else u=!0
if(u)return a
H.oU(a,b)},
oE:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mK:function(a,b){return new H.f0("CastError: "+P.kz(a)+": type '"+H.e(H.ot(a))+"' is not a subtype of type '"+b+"'")},
ot:function(a){var u,t=J.Q(a)
if(!!t.$ibS){u=H.oE(t)
if(u!=null)return H.oV(u)
return"Closure"}return H.cc(a)},
oZ:function(a){throw H.d(new P.fc(a))},
nn:function(a){return new H.hL(a)},
m8:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
cG:function(a){if(a==null)return
return a.$ti},
pA:function(a,b,c){return H.kl(a["$a"+H.e(c)],H.cG(b))},
oH:function(a,b,c,d){var u=H.kl(a["$a"+H.e(c)],H.cG(b))
return u==null?null:u[d]},
kY:function(a,b,c){var u=H.kl(a["$a"+H.e(b)],H.cG(a))
return u==null?null:u[c]},
cH:function(a,b){var u=H.cG(a)
return u==null?null:u[b]},
oV:function(a){return H.bl(a,null)},
bl:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.eN(a[0].name)+H.lY(a,1,b)
if(typeof a=="function")return H.eN(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.e(b[t])}if('func' in a)return H.o1(a,b)
if('futureOr' in a)return"FutureOr<"+H.bl("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
o1:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.k])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.a.A(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a3)p+=" extends "+H.bl(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bl(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bl(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bl(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oF(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bl(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lY:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.U("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bl(p,c)}return"<"+u.h(0)+">"},
kl:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
py:function(a,b,c){return a.apply(b,H.kl(J.Q(b)["$a"+H.e(c)],H.cG(b)))},
pz:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oR:function(a){var u,t,s,r,q=$.m9.$1(a),p=$.jZ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k4[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.m2.$2(a,q)
if(q!=null){p=$.jZ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k4[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kh(u)
$.jZ[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.k4[q]=u
return u}if(s==="-"){r=H.kh(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mc(a,u)
if(s==="*")throw H.d(P.iA(q))
if(v.leafTags[q]===true){r=H.kh(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mc(a,u)},
mc:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.l0(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kh:function(a){return J.l0(a,!1,null,!!a.$iA)},
oS:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kh(u)
else return J.l0(u,c,null,null)},
oM:function(){if(!0===$.l_)return
$.l_=!0
H.oN()},
oN:function(){var u,t,s,r,q,p,o,n
$.jZ=Object.create(null)
$.k4=Object.create(null)
H.oL()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.md.$1(q)
if(p!=null){o=H.oS(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oL:function(){var u,t,s,r,q,p,o=C.F()
o=H.bJ(C.G,H.bJ(C.H,H.bJ(C.u,H.bJ(C.u,H.bJ(C.I,H.bJ(C.J,H.bJ(C.K(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.m9=new H.k1(r)
$.m2=new H.k2(q)
$.md=new H.k3(p)},
bJ:function(a,b){return a(b)||b},
mZ:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(P.R("Illegal RegExp pattern ("+String(p)+")",a,null))},
oX:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oD:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
me:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l3:function(a,b,c){var u=H.oY(a,b,c)
return u},
oY:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.me(b),'g'),H.oD(c))},
f5:function f5(){},
f6:function f6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ip:function ip(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hs:function hs(a,b){this.a=a
this.b=b},
fK:function fK(a,b,c){this.a=a
this.b=b
this.c=c},
iB:function iB(a){this.a=a},
kp:function kp(a){this.a=a},
em:function em(a){this.a=a
this.b=null},
bS:function bS(){},
i9:function i9(){},
i1:function i1(){},
bP:function bP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f0:function f0(a){this.a=a},
hL:function hL(a){this.a=a},
P:function P(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fO:function fO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fP:function fP(a,b){this.a=a
this.$ti=b},
fQ:function fQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
k1:function k1(a){this.a=a},
k2:function k2(a){this.a=a},
k3:function k3(a){this.a=a},
fJ:function fJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bH:function(a){return a},
n7:function(a){return new Int8Array(a)},
aC:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bL(b,a))},
o_:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.oC(a,b,c))
return b},
c6:function c6(){},
be:function be(){},
dc:function dc(){},
c7:function c7(){},
dd:function dd(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
de:function de(){},
c8:function c8(){},
cs:function cs(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
oF:function(a){return J.ll(a?Object.keys(a):[],null)},
p0:function(a){return v.mangledGlobalNames[a]},
oT:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
l0:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k_:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.l_==null){H.oM()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.iA("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.l4()]
if(r!=null)return r
r=H.oR(a)
if(r!=null)return r
if(typeof a=="function")return C.S
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.l4(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
mY:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.lb(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.a_(a,0,4294967295,"length",null))
return J.ll(new Array(a),b)},
ll:function(a,b){return J.kC(H.c(a,[b]))},
kC:function(a){a.fixed$length=Array
return a},
Q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d2.prototype
return J.d1.prototype}if(typeof a=="string")return J.ba.prototype
if(a==null)return J.d3.prototype
if(typeof a=="boolean")return J.fI.prototype
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bb.prototype
return a}if(a instanceof P.a3)return a
return J.k_(a)},
cE:function(a){if(typeof a=="string")return J.ba.prototype
if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bb.prototype
return a}if(a instanceof P.a3)return a
return J.k_(a)},
eL:function(a){if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bb.prototype
return a}if(a instanceof P.a3)return a
return J.k_(a)},
m7:function(a){if(typeof a=="number")return J.c_.prototype
if(typeof a=="string")return J.ba.prototype
if(a==null)return a
if(!(a instanceof P.a3))return J.bD.prototype
return a},
cF:function(a){if(typeof a=="string")return J.ba.prototype
if(a==null)return a
if(!(a instanceof P.a3))return J.bD.prototype
return a},
bN:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bb.prototype
return a}if(a instanceof P.a3)return a
return J.k_(a)},
z:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).t(a,b)},
l6:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.m7(a).u(a,b)},
cK:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ma(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cE(a).i(a,b)},
kq:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.ma(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eL(a).m(a,b,c)},
mB:function(a,b){return J.cF(a).F(a,b)},
mC:function(a,b,c){return J.bN(a).h1(a,b,c)},
mD:function(a,b,c,d){return J.bN(a).hk(a,b,c,d)},
mE:function(a,b){return J.cF(a).Z(a,b)},
kr:function(a,b){return J.m7(a).hw(a,b)},
eO:function(a,b){return J.eL(a).K(a,b)},
mF:function(a,b,c,d){return J.bN(a).hM(a,b,c,d)},
l7:function(a,b){return J.eL(a).H(a,b)},
mG:function(a){return J.bN(a).ghs(a)},
l8:function(a){return J.bN(a).gca(a)},
cL:function(a){return J.Q(a).gI(a)},
b4:function(a){return J.eL(a).gU(a)},
ah:function(a){return J.cE(a).gl(a)},
l9:function(a){return J.eL(a).ii(a)},
mH:function(a,b){return J.bN(a).il(a,b)},
mI:function(a,b,c){return J.cF(a).v(a,b,c)},
mJ:function(a){return J.cF(a).iu(a)},
a6:function(a){return J.Q(a).h(a)},
a:function a(){},
fI:function fI(){},
d3:function d3(){},
d4:function d4(){},
hw:function hw(){},
bD:function bD(){},
bb:function bb(){},
b9:function b9(a){this.$ti=a},
kD:function kD(a){this.$ti=a},
a7:function a7(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c_:function c_(){},
d2:function d2(){},
d1:function d1(){},
ba:function ba(){}},P={
nC:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.ou()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bK(new P.j3(s),1)).observe(u,{childList:true})
return new P.j2(s,u,t)}else if(self.setImmediate!=null)return P.ov()
return P.ow()},
nD:function(a){self.scheduleImmediate(H.bK(new P.j4(a),0))},
nE:function(a){self.setImmediate(H.bK(new P.j5(a),0))},
nF:function(a){P.kJ(C.n,a)},
kJ:function(a,b){var u=C.c.aa(a.a,1000)
return P.nK(u<0?0:u,b)},
lD:function(a,b){var u=C.c.aa(a.a,1000)
return P.nL(u<0?0:u,b)},
nK:function(a,b){var u=new P.es()
u.eG(a,b)
return u},
nL:function(a,b){var u=new P.es()
u.eH(a,b)
return u},
on:function(){var u,t
for(;u=$.bI,u!=null;){$.cD=null
t=u.b
$.bI=t
if(t==null)$.cC=null
u.a.$0()}},
os:function(){$.kU=!0
try{P.on()}finally{$.cD=null
$.kU=!1
if($.bI!=null)$.l5().$1(P.m3())}},
oq:function(a){var u=new P.dP(a)
if($.bI==null){$.bI=$.cC=u
if(!$.kU)$.l5().$1(P.m3())}else $.cC=$.cC.b=u},
or:function(a){var u,t,s=$.bI
if(s==null){P.oq(a)
$.cD=$.cC
return}u=new P.dP(a)
t=$.cD
if(t==null){u.b=s
$.bI=$.cD=u}else{u.b=t.b
$.cD=t.b=u
if(u.b==null)$.cC=u}},
lC:function(a,b){var u=$.ap
if(u===C.f)return P.kJ(a,b)
return P.kJ(a,u.ht(b))},
nt:function(a,b){var u=$.ap
if(u===C.f)return P.lD(a,b)
return P.lD(a,u.dv(b,P.dA))},
lZ:function(a,b,c,d,e){var u={}
u.a=d
P.or(new P.jS(u,e))},
oo:function(a,b,c,d){var u,t=$.ap
if(t===c)return d.$0()
$.ap=c
u=t
try{t=d.$0()
return t}finally{$.ap=u}},
op:function(a,b,c,d,e){var u,t=$.ap
if(t===c)return d.$1(e)
$.ap=c
u=t
try{t=d.$1(e)
return t}finally{$.ap=u}},
j3:function j3(a){this.a=a},
j2:function j2(a,b,c){this.a=a
this.b=b
this.c=c},
j4:function j4(a){this.a=a},
j5:function j5(a){this.a=a},
es:function es(){this.c=0},
jA:function jA(a,b){this.a=a
this.b=b},
jz:function jz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dP:function dP(a){this.a=a
this.b=null},
dv:function dv(){},
i4:function i4(){},
dA:function dA(){},
jJ:function jJ(){},
jS:function jS(a,b){this.a=a
this.b=b},
jj:function jj(){},
jk:function jk(a,b){this.a=a
this.b=b},
jl:function jl(a,b,c){this.a=a
this.b=b
this.c=c},
n0:function(a,b){return new H.P([a,b])},
kG:function(a,b){return new H.P([a,b])},
n2:function(a){return H.oG(a,new H.P([null,null]))},
d7:function(a){return new P.jg([a])},
kP:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nJ:function(a,b){var u=new P.e3(a,b)
u.c=a.e
return u},
mW:function(a,b,c){var u,t
if(P.kV(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.k])
$.a9.push(a)
try{P.o2(a,u)}finally{if(0>=$.a9.length)return H.b($.a9,-1)
$.a9.pop()}t=P.lA(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kB:function(a,b,c){var u,t
if(P.kV(a))return b+"..."+c
u=new P.U(b)
$.a9.push(a)
try{t=u
t.a=P.lA(t.a,a,", ")}finally{if(0>=$.a9.length)return H.b($.a9,-1)
$.a9.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kV:function(a){var u,t
for(u=$.a9.length,t=0;t<u;++t)if(a===$.a9[t])return!0
return!1},
o2:function(a,b){var u,t,s,r,q,p,o,n=a.gU(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.C())return
u=H.e(n.gJ(n))
b.push(u)
m+=u.length+2;++l}if(!n.C()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gJ(n);++l
if(!n.C()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gJ(n);++l
for(;n.C();r=q,q=p){p=n.gJ(n);++l
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
n1:function(a,b,c){var u=P.n0(b,c)
a.H(0,new P.fR(u))
return u},
lm:function(a,b){var u,t,s=P.d7(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t)s.n(0,a[t])
return s},
kH:function(a){var u,t={}
if(P.kV(a))return"{...}"
u=new P.U("")
try{$.a9.push(a)
u.a+="{"
t.a=!0
J.l7(a,new P.fW(t,u))
u.a+="}"}finally{if(0>=$.a9.length)return H.b($.a9,-1)
$.a9.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jg:function jg(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jh:function jh(a){this.a=a
this.c=this.b=null},
e3:function e3(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fR:function fR(a){this.a=a},
fS:function fS(){},
v:function v(){},
fV:function fV(){},
fW:function fW(a,b){this.a=a
this.b=b},
aM:function aM(){},
jB:function jB(){},
fX:function fX(){},
dI:function dI(a,b){this.a=a
this.$ti=b},
jn:function jn(){},
e4:function e4(){},
ey:function ey(){},
nw:function(a,b,c,d){if(b instanceof Uint8Array)return P.nx(!1,b,c,d)
return},
nx:function(a,b,c,d){var u,t,s=$.mt()
if(s==null)return
u=0===c
if(u&&!0)return P.kM(s,b)
t=b.length
d=P.bh(c,d,t)
if(u&&d===t)return P.kM(s,b)
return P.kM(s,b.subarray(c,d))},
kM:function(a,b){if(P.nz(b))return
return P.nA(a,b)},
nA:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ag(t)}return},
nz:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
ny:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ag(t)}return},
m0:function(a,b,c){var u,t,s
for(u=J.cE(a),t=b;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.am()
if((s&127)!==s)return t-b}return c-b},
lc:function(a,b,c,d,e,f){if(C.c.bk(f,4)!==0)throw H.d(P.R("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.R("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.R("Invalid base64 padding, more than two '=' characters",a,b))},
eX:function eX(){},
eY:function eY(){},
f2:function f2(){},
f7:function f7(){},
fm:function fm(){},
fD:function fD(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fC:function fC(a){this.a=a},
iK:function iK(){},
iM:function iM(){},
jH:function jH(a){this.b=0
this.c=a},
iL:function iL(a){this.a=a},
jG:function jG(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eM:function(a,b,c){var u=H.nh(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.R(a,null,null))},
mU:function(a){if(a instanceof H.bS)return a.h(0)
return"Instance of '"+H.e(H.cc(a))+"'"},
n3:function(a,b,c){var u,t,s=J.mY(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
ln:function(a,b,c){var u,t=H.c([],[c])
for(u=J.b4(a);u.C();)t.push(u.gJ(u))
if(b)return t
return J.kC(t)},
cf:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.bh(b,c,u)
return H.lv(b>0||c<u?C.b.eq(a,b,c):a)}if(!!J.Q(a).$ic8)return H.nj(a,b,P.bh(b,c,a.length))
return P.nr(a,b,c)},
nr:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.d(P.a_(b,0,J.ah(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.a_(c,b,J.ah(a),q,q))
t=J.b4(a)
for(s=0;s<b;++s)if(!t.C())throw H.d(P.a_(b,0,s,q,q))
r=[]
if(u)for(;t.C();)r.push(t.gJ(t))
else for(s=b;s<c;++s){if(!t.C())throw H.d(P.a_(c,b,s,q,q))
r.push(t.gJ(t))}return H.lv(r)},
nl:function(a){return new H.fJ(a,H.mZ(a,!1,!0,!1,!1,!1))},
lA:function(a,b,c){var u=J.b4(b)
if(!u.C())return a
if(c.length===0){do a+=H.e(u.gJ(u))
while(u.C())}else{a+=H.e(u.gJ(u))
for(;u.C();)a=a+c+H.e(u.gJ(u))}return a},
lG:function(){var u=H.n9()
if(u!=null)return P.nv(u)
throw H.d(P.y("'Uri.base' is not supported"))},
ez:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mz().b
if(typeof b!=="string")H.t(H.aq(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghL().cb(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.by(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mR:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mS:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cU:function(a){if(a>=10)return""+a
return"0"+a},
lh:function(a){return new P.b6(1000*a)},
kz:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a6(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mU(a)},
cM:function(a){return new P.am(!1,null,null,a)},
lb:function(a,b,c){return new P.am(!0,a,b,c)},
dk:function(a,b){return new P.bz(null,null,!0,a,b,"Value not in range")},
a_:function(a,b,c,d,e){return new P.bz(b,c,!0,a,d,"Invalid value")},
bh:function(a,b,c){if(0>a||a>c)throw H.d(P.a_(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.a_(b,a,c,"end",null))
return b}return c},
lw:function(a,b){if(typeof a!=="number")return a.R()
if(a<0)throw H.d(P.a_(a,0,null,b,null))},
M:function(a,b,c,d,e){var u=e==null?J.ah(b):e
return new P.fF(u,!0,a,c,"Index out of range")},
y:function(a){return new P.iD(a)},
iA:function(a){return new P.iz(a)},
lz:function(a){return new P.ce(a)},
aG:function(a){return new P.f4(a)},
q:function(a){return new P.dX(a)},
R:function(a,b,c){return new P.fw(a,b,c)},
n4:function(a,b,c){var u,t,s=H.c([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.b(s,u)
s[u]=t}return s},
l2:function(a){H.oT(a)},
nv:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.F(a,4)^58)*3|C.a.F(a,0)^100|C.a.F(a,1)^97|C.a.F(a,2)^116|C.a.F(a,3)^97)>>>0
if(u===0)return P.lF(e<e?C.a.v(a,0,e):a,5,f).gei()
else if(u===32)return P.lF(C.a.v(a,5,e),0,f).gei()}t=new Array(8)
t.fixed$length=Array
s=H.c(t,[P.x])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.m_(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.iw()
if(r>=0)if(P.m_(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.A()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.R()
if(typeof n!=="number")return H.w(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.a.a8(a,"..",o)))j=n>o+2&&C.a.a8(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a8(a,"file",0)){if(q<=0){if(!C.a.a8(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.a.v(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.aZ(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a8(a,"http",0)){if(t&&p+3===o&&C.a.a8(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aZ(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a8(a,"https",0)){if(t&&p+4===o&&C.a.a8(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aZ(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.v(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jq(a,r,q,p,o,n,m,k)}return P.nM(a,0,e,r,q,p,o,n,m,k)},
lI:function(a){var u=P.k
return C.b.hS(H.c(a.split("&"),[u]),P.kG(u,u),new P.iI(C.e))},
nu:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iF(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.Z(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eM(C.a.v(a,s,t),n,n)
if(typeof p!=="number")return p.a3()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.b(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eM(C.a.v(a,s,c),n,n)
if(typeof p!=="number")return p.a3()
if(p>255)k.$2(l,s)
if(r>=u)return H.b(j,r)
j[r]=p
return j},
lH:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iG(a),d=new P.iH(e,a)
if(a.length<2)e.$1("address is too short")
u=H.c([],[P.x])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.Z(a,t)
if(p===58){if(t===b){++t
if(C.a.Z(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gax(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.nu(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.b(l,i)
l[i]=0
f=i+1
if(f>=k)return H.b(l,f)
l[f]=0
i+=2}else{f=C.c.aU(h,8)
if(i<0||i>=k)return H.b(l,i)
l[i]=f
f=i+1
if(f>=k)return H.b(l,f)
l[f]=h&255
i+=2}}return l},
nM:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nU(a,b,d)
else{if(d===b)P.bG(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nV(a,u,e-1):""
s=P.nR(a,e,f,!1)
if(typeof f!=="number")return f.A()
r=f+1
if(typeof g!=="number")return H.w(g)
q=r<g?P.nT(P.eM(C.a.v(a,r,g),new P.jC(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nS(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.R()
o=h<i?P.kR(a,h+1,i,n):n
return new P.bF(j,t,s,q,p,o,i<c?P.nQ(a,i+1,c):n)},
lS:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bG:function(a,b,c){throw H.d(P.R(c,a,b))},
nT:function(a,b){if(a!=null&&a===P.lS(b))return
return a},
nR:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.Z(a,b)===91){if(typeof c!=="number")return c.L()
u=c-1
if(C.a.Z(a,u)!==93)P.bG(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nO(a,t,u)
if(typeof s!=="number")return s.R()
if(s<u){r=s+1
q=P.lX(a,C.a.a8(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lH(a,t,s)
return C.a.v(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.w(c)
p=b
for(;p<c;++p)if(C.a.Z(a,p)===58){s=C.a.by(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lX(a,C.a.a8(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lH(a,b,s)
return"["+C.a.v(a,b,s)+q+"]"}return P.nX(a,b,c)},
nO:function(a,b,c){var u,t=C.a.by(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.w(c)
u=t<c}else u=!1
return u?t:c},
lX:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.U(d):null
if(typeof c!=="number")return H.w(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.Z(a,u)
if(r===37){q=P.kS(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.U("")
o=l.a+=C.a.v(a,t,u)
if(p)q=C.a.v(a,u,u+3)
else if(q==="%")P.bG(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.U("")
if(t<u){l.a+=C.a.v(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.Z(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.U("")
l.a+=C.a.v(a,t,u)
l.a+=P.kQ(r)
u+=m
t=u}}}if(l==null)return C.a.v(a,b,c)
if(t<c)l.a+=C.a.v(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
nX:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.w(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.Z(a,u)
if(q===37){p=P.kS(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.U("")
n=C.a.v(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.v(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.b(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.U("")
if(t<u){s.a+=C.a.v(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.b(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bG(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.Z(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.U("")
n=C.a.v(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kQ(q)
u+=l
t=u}}}}if(s==null)return C.a.v(a,b,c)
if(t<c){n=C.a.v(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nU:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lU(C.a.F(a,b)))P.bG(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.b(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bG(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.v(a,b,c)
return P.nN(t?a.toLowerCase():a)},
nN:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nV:function(a,b,c){return P.cA(a,b,c,C.V,!1)},
nS:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cA(a,b,c,C.z,!0):C.j.iK(d,new P.jD(),P.k).k(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a5(u,"/"))u="/"+u
return P.nW(u,e,f)},
nW:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a5(a,"/"))return P.nY(a,!u||c)
return P.nZ(a)},
kR:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.d(P.cM("Both query and queryParameters specified"))
return P.cA(a,b,c,C.l,!0)}if(d==null)return
u=new P.U("")
t.a=""
d.H(0,new P.jE(new P.jF(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nQ:function(a,b,c){return P.cA(a,b,c,C.l,!0)},
kS:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.Z(a,b+1)
t=C.a.Z(a,p)
s=H.k0(u)
r=H.k0(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aU(q,4)
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.by(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.v(a,b,b+3).toUpperCase()
return},
kQ:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.c(u,[P.x])
t[0]=37
t[1]=C.a.F(m,a>>>4)
t[2]=C.a.F(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.c(u,[P.x])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.hc(a,6*r)&63|s
if(q>=u)return H.b(t,q)
t[q]=37
o=q+1
n=C.a.F(m,p>>>4)
if(o>=u)return H.b(t,o)
t[o]=n
n=q+2
o=C.a.F(m,p&15)
if(n>=u)return H.b(t,n)
t[n]=o
q+=3}}return P.cf(t,0,null)},
cA:function(a,b,c,d,e){var u=P.lW(a,b,c,d,e)
return u==null?C.a.v(a,b,c):u},
lW:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.R()
if(typeof c!=="number")return H.w(c)
if(!(o<c))break
c$0:{u=C.a.Z(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.b(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kS(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.b(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bG(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.Z(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kQ(u)}}if(m==null)m=new P.U("")
m.a+=C.a.v(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.w(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.R()
if(n<c)m.a+=C.a.v(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lV:function(a){if(C.a.a5(a,"."))return!0
return C.a.dZ(a,"/.")!==-1},
nZ:function(a){var u,t,s,r,q,p,o
if(!P.lV(a))return a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.z(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.b(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.k(u,"/")},
nY:function(a,b){var u,t,s,r,q,p
if(!P.lV(a))return!b?P.lT(a):a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gax(u)!==".."){if(0>=u.length)return H.b(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.b(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gax(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.b(u,0)
t=P.lT(u[0])
if(0>=u.length)return H.b(u,0)
u[0]=t}return C.b.k(u,"/")},
lT:function(a){var u,t,s,r=a.length
if(r>=2&&P.lU(J.mB(a,0)))for(u=1;u<r;++u){t=C.a.F(a,u)
if(t===58)return C.a.v(a,0,u)+"%3A"+C.a.ac(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.b(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nP:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.cM("Invalid URL encoding"))}}return u},
kT:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.F(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.v(a,b,c)
else r=new H.m(C.a.v(a,b,c))}else{r=H.c([],[P.x])
for(s=a.length,q=b;q<c;++q){t=C.a.F(a,q)
if(t>127)throw H.d(P.cM("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.cM("Truncated URI"))
r.push(P.nP(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iL(!1).cb(r)},
lU:function(a){var u=a|32
return 97<=u&&u<=122},
lF:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.x])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.F(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.R(m,a,t))}}if(s<0&&t>b)throw H.d(P.R(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.F(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gax(l)
if(r!==44||t!==p+7||!C.a.a8(a,"base64",p+1))throw H.d(P.R("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.E.i0(0,a,o,u)
else{n=P.lW(a,o,u,C.l,!0)
if(n!=null)a=C.a.aZ(a,o,u,n)}return new P.iE(a,l,c)},
o0:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.n4(22,new P.jN(),P.bB),n=new P.jM(o),m=new P.jO(),l=new P.jP(),k=n.$2(0,225)
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
m_:function(a,b,c,d,e){var u,t,s,r,q,p=$.mA()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.b(p,d)
t=p[d]
s=C.a.F(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.b(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.b(e,q)
e[q]=u}return d},
aD:function aD(){},
aa:function aa(a,b){this.a=a
this.b=b},
K:function K(){},
b6:function b6(a){this.a=a},
fi:function fi(){},
fj:function fj(){},
bs:function bs(){},
dh:function dh(){},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bz:function bz(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fF:function fF(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iD:function iD(a){this.a=a},
iz:function iz(a){this.a=a},
ce:function ce(a){this.a=a},
f4:function f4(a){this.a=a},
hv:function hv(){},
dt:function dt(){},
fc:function fc(a){this.a=a},
dX:function dX(a){this.a=a},
fw:function fw(a,b,c){this.a=a
this.b=b
this.c=c},
fy:function fy(){},
x:function x(){},
h:function h(){},
fH:function fH(){},
o:function o(){},
S:function S(){},
bf:function bf(){},
af:function af(){},
a3:function a3(){},
k:function k(){},
U:function U(a){this.a=a},
iI:function iI(a){this.a=a},
iF:function iF(a){this.a=a},
iG:function iG(a){this.a=a},
iH:function iH(a,b){this.a=a
this.b=b},
bF:function bF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jC:function jC(a,b){this.a=a
this.b=b},
jD:function jD(){},
jF:function jF(a,b){this.a=a
this.b=b},
jE:function jE(a){this.a=a},
iE:function iE(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(){},
jM:function jM(a){this.a=a},
jO:function jO(){},
jP:function jP(){},
jq:function jq(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
j9:function j9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oA:function(a){var u,t=J.Q(a)
if(!!t.$iaL){u=t.gdC(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ex(a.data,a.height,a.width)},
oz:function(a){if(a instanceof P.ex)return{data:a.a,height:a.b,width:a.c}
return a},
b_:function(a){var u,t,s,r,q
if(a==null)return
u=P.kG(P.k,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
oy:function(a){var u={}
a.H(0,new P.jT(u))
return u},
js:function js(){},
ju:function ju(a,b){this.a=a
this.b=b},
ex:function ex(a,b,c){this.a=a
this.b=b
this.c=c},
jT:function jT(a){this.a=a},
jt:function jt(a,b){this.a=a
this.b=b},
fs:function fs(a,b){this.a=a
this.b=b},
ft:function ft(){},
fu:function fu(){},
jf:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nI:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ji:function ji(){},
ad:function ad(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bc:function bc(){},
fM:function fM(){},
bg:function bg(){},
ht:function ht(){},
hB:function hB(){},
cd:function cd(){},
i5:function i5(){},
j:function j(){},
bi:function bi(){},
io:function io(){},
e1:function e1(){},
e2:function e2(){},
ec:function ec(){},
ed:function ed(){},
eo:function eo(){},
ep:function ep(){},
ev:function ev(){},
ew:function ew(){},
bB:function bB(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(a){this.a=a},
eW:function eW(){},
bn:function bn(){},
hu:function hu(){},
dQ:function dQ(){},
dm:function dm(){},
i0:function i0(){},
ek:function ek(){},
el:function el(){}},W={
la:function(){var u=document.createElement("a")
return u},
ku:function(){var u=document.createElement("canvas")
return u},
mT:function(a,b,c){var u=document.body,t=(u&&C.r).aj(u,a,b,c)
t.toString
u=new H.co(new W.a4(t),new W.fl(),[W.F])
return u.gaM(u)},
kx:function(a){return"wheel"},
bU:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bN(a)
t=u.gef(a)
if(typeof t==="string")r=u.gef(a)}catch(s){H.ag(s)}return r},
mV:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.ag(u)}return s},
je:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lQ:function(a,b,c,d){var u=W.je(W.je(W.je(W.je(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Z:function(a,b,c,d){var u=W.m1(new W.jc(c),W.i)
if(u!=null&&!0)J.mD(a,b,u,!1)
return new W.jb(a,b,u,!1)},
lP:function(a){var u=W.la(),t=window.location
u=new W.cq(new W.jm(u,t))
u.eC(a)
return u},
nG:function(a,b,c,d){return!0},
nH:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
lR:function(){var u=P.k,t=P.lm(C.o,u),s=H.c(["TEMPLATE"],[u])
t=new W.jx(t,P.d7(u),P.d7(u),P.d7(u),null)
t.eF(null,new H.h_(C.o,new W.jy(),[H.cH(C.o,0),u]),s,null)
return t},
m1:function(a,b){var u=$.ap
if(u===C.f)return a
return u.dv(a,b)},
n:function n(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
bo:function bo(){},
bp:function bp(){},
bq:function bq(){},
b5:function b5(){},
f8:function f8(){},
I:function I(){},
bT:function bT(){},
f9:function f9(){},
ai:function ai(){},
at:function at(){},
fa:function fa(){},
fb:function fb(){},
fe:function fe(){},
an:function an(){},
ff:function ff(){},
cW:function cW(){},
cX:function cX(){},
fg:function fg(){},
fh:function fh(){},
j7:function j7(a,b){this.a=a
this.b=b},
V:function V(){},
fl:function fl(){},
i:function i(){},
f:function f(){},
au:function au(){},
bW:function bW(){},
fr:function fr(){},
fv:function fv(){},
aK:function aK(){},
fB:function fB(){},
bY:function bY(){},
aL:function aL(){},
bZ:function bZ(){},
bv:function bv(){},
fT:function fT(){},
hd:function hd(){},
c4:function c4(){},
he:function he(){},
hf:function hf(a){this.a=a},
hg:function hg(){},
hh:function hh(a){this.a=a},
aO:function aO(){},
hi:function hi(){},
ax:function ax(){},
a4:function a4(a){this.a=a},
F:function F(){},
df:function df(){},
aR:function aR(){},
hy:function hy(){},
hJ:function hJ(){},
hK:function hK(a){this.a=a},
hM:function hM(){},
aS:function aS(){},
hY:function hY(){},
aT:function aT(){},
hZ:function hZ(){},
aU:function aU(){},
i2:function i2(){},
i3:function i3(a){this.a=a},
az:function az(){},
dw:function dw(){},
i6:function i6(){},
i7:function i7(){},
cg:function cg(){},
aV:function aV(){},
aA:function aA(){},
ia:function ia(){},
ib:function ib(){},
ih:function ih(){},
aW:function aW(){},
bA:function bA(){},
il:function il(){},
im:function im(){},
bj:function bj(){},
iJ:function iJ(){},
j0:function j0(){},
bk:function bk(){},
cp:function cp(){},
j8:function j8(){},
dS:function dS(){},
jd:function jd(){},
e9:function e9(){},
jr:function jr(){},
jv:function jv(){},
j6:function j6(){},
ja:function ja(a){this.a=a},
jb:function jb(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jc:function jc(a){this.a=a},
cq:function cq(a){this.a=a},
L:function L(){},
dg:function dg(a){this.a=a},
hq:function hq(a){this.a=a},
hp:function hp(a,b,c){this.a=a
this.b=b
this.c=c},
eh:function eh(){},
jo:function jo(){},
jp:function jp(){},
jx:function jx(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jy:function jy(){},
jw:function jw(){},
d_:function d_(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aQ:function aQ(){},
jm:function jm(a,b){this.a=a
this.b=b},
eA:function eA(a){this.a=a},
jI:function jI(a){this.a=a},
dR:function dR(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
ea:function ea(){},
eb:function eb(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
cw:function cw(){},
cx:function cx(){},
ei:function ei(){},
ej:function ej(){},
en:function en(){},
eq:function eq(){},
er:function er(){},
cy:function cy(){},
cz:function cz(){},
et:function et(){},
eu:function eu(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){}},T={
N:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.q("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.F(a,0)
t=C.a.F(b,0)
s=new T.hE()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
r:function(a){var u=new T.hN()
u.eA(a)
return u},
aE:function aE(){},
d0:function d0(){},
bd:function bd(){},
a8:function a8(){this.a=null},
hE:function hE(){this.b=this.a=null},
hN:function hN(){this.a=null},
dy:function dy(){},
ic:function ic(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
id:function id(a){var _=this
_.a=a
_.e=_.d=_.c=null},
ie:function ie(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mb:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="testCanvas",a7=null,a8="modifiers",a9=V.no("Test 017"),b0=W.ku()
b0.className="pageLargeCanvas"
b0.id=a6
a9.a.appendChild(b0)
u=[P.k]
a9.dr(H.c(["A test of the Material Lighting shader with solid color directional light, cube mapped textures, and a reflection map. The specular map is also used to define where reflections are painted."],u))
a9.hj(H.c(["shapes"],u))
a9.dr(H.c(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a6)
if(t==null)H.t(P.q("Failed to find an element with the identifier, testCanvas."))
s=E.ns(t,!0,!0,!0,!1)
r=E.lk()
r.sa7(0,F.mf(8,8))
q=X.kA(a7)
if(q.b){q.b=!1
p=new D.B("clearColor",!0,!1)
p.b=!0
q.au(p)}o=s.f.e2("../resources/maskonaive",".jpg")
n=s.f.e1("../resources/earthSpecular")
m=s.f.e1("../resources/earthColor")
l=new O.da()
p=O.kv(V.aN)
l.e=p
p.b0(l.gf6(),l.gf8())
p=new O.av(l,"emission")
p.c=new A.a2(!1,!1,!1)
p.f=new V.X(0,0,0)
l.f=p
p=new O.av(l,"ambient")
p.c=new A.a2(!1,!1,!1)
p.f=new V.X(0,0,0)
l.r=p
p=new O.av(l,"diffuse")
p.c=new A.a2(!1,!1,!1)
p.f=new V.X(0,0,0)
l.x=p
p=new O.av(l,"invDiffuse")
p.c=new A.a2(!1,!1,!1)
p.f=new V.X(0,0,0)
l.y=p
p=new O.h6(l,"specular")
p.c=new A.a2(!1,!1,!1)
p.f=new V.X(0,0,0)
p.ch=100
l.z=p
p=new O.h2(l,"bump")
p.c=new A.a2(!1,!1,!1)
l.Q=p
l.ch=null
p=new O.av(l,"reflect")
p.c=new A.a2(!1,!1,!1)
p.f=new V.X(0,0,0)
l.cx=p
p=new O.h5(l,"refract")
p.c=new A.a2(!1,!1,!1)
p.f=new V.X(0,0,0)
p.ch=1
l.cy=p
p=new O.h1(l,"alpha")
p.c=new A.a2(!1,!1,!1)
p.f=1
l.db=p
p=new D.d6()
p.bm(D.ab)
p.e=H.c([],[D.br])
p.f=H.c([],[D.hz])
p.r=H.c([],[D.i_])
p.y=p.x=null
p.cM(p.gf4(),p.gfJ(),p.gfN())
l.dx=p
k=new O.h4()
k.b=new V.a1(0,0,0,0)
k.c=1
k.d=10
k.e=!1
l.dy=k
k=p.x
p=k==null?p.x=D.E():k
p.n(0,l.gh4())
p=l.dx
k=p.y
p=k==null?p.y=D.E():k
k=l.gaP()
p.n(0,k)
l.fr=null
p=l.dx
j=V.kN()
i=U.lg(V.lo(V.kI(),j,new V.u(-1,-1,-1)))
h=new V.X(1,1,1)
g=new D.br()
g.c=new V.X(1,1,1)
g.a=V.lN()
g.d=V.kN()
g.e=V.nB()
f=g.b
g.b=i
i.gq().n(0,g.geD())
i=new D.B("mover",f,g.b)
i.b=!0
g.az(i)
if(!g.c.t(0,h)){f=g.c
g.c=h
i=new D.B("color",f,h)
i.b=!0
g.az(i)}p.n(0,g)
p=l.r
p.sao(0,new V.X(0.5,0.5,0.5))
p=l.x
p.sao(0,new V.X(0.5,0.5,0.5))
l.r.saq(m)
l.x.saq(m)
l.z.saq(n)
p=l.ch
if(p!==o){if(p!=null)p.gq().D(0,k)
f=l.ch
l.ch=o
o.gq().n(0,k)
p=new D.B("environment",f,l.ch)
p.b=!0
l.Y(p)}l.cx.saq(n)
p=l.cx
p.sao(0,new V.X(0.5,0.5,0.5))
p=l.z
p.c4(new A.a2(!0,!1,p.c.c))
p.df(10)
e=new U.bX()
e.bm(U.ac)
e.b0(e.gf2(),e.gfL())
e.e=null
e.f=V.bw()
e.r=0
p=s.r
k=new U.dL()
i=U.kw()
i.scJ(0,!0)
i.scr(6.283185307179586)
i.sct(0)
i.sa_(0,0)
i.scs(100)
i.sX(0)
i.scd(0.5)
k.b=i
g=k.gaO()
i.gq().n(0,g)
i=U.kw()
i.scJ(0,!0)
i.scr(6.283185307179586)
i.sct(0)
i.sa_(0,0)
i.scs(100)
i.sX(0)
i.scd(0.5)
k.c=i
i.gq().n(0,g)
k.d=null
k.r=k.f=k.e=!1
k.y=k.x=2.5
k.Q=4
k.ch=k.cx=!1
k.db=k.cy=0
k.dx=null
k.dy=0
k.fx=k.fr=null
d=new X.aj(!1,!1,!1)
f=k.d
k.d=d
i=new D.B(a8,f,d)
i.b=!0
k.S(i)
i=k.f
if(i!==!1){k.f=!1
i=new D.B("invertX",i,!1)
i.b=!0
k.S(i)}i=k.r
if(i!==!1){k.r=!1
i=new D.B("invertY",i,!1)
i.b=!0
k.S(i)}k.b7(p)
e.n(0,k)
p=s.r
k=new U.dK()
i=U.kw()
i.scJ(0,!0)
i.scr(6.283185307179586)
i.sct(0)
i.sa_(0,0)
i.scs(100)
i.sX(0)
i.scd(0.2)
k.b=i
i.gq().n(0,k.gaO())
k.c=null
k.d=!1
k.e=2.5
k.r=4
k.x=k.y=!1
k.z=0
k.Q=null
k.ch=0
k.cy=k.cx=null
d=new X.aj(!0,!1,!1)
f=k.c
k.c=d
i=new D.B(a8,f,d)
i.b=!0
k.S(i)
k.b7(p)
e.n(0,k)
p=s.r
k=new U.dM()
k.c=0.01
k.e=k.d=0
d=new X.aj(!1,!1,!1)
k.b=d
i=new D.B(a8,a7,d)
i.b=!0
k.S(i)
k.b7(p)
e.n(0,k)
e.n(0,U.lg(V.aw(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=X.lr(e)
b=new M.cT()
b.a=!0
p=E.lk()
a=F.dp()
k=a.a
i=new V.u(-1,-1,1)
i=i.p(0,Math.sqrt(i.w(i)))
a0=k.bt(new V.ak(1,2,4,6),new V.a1(1,0,0,1),new V.G(-1,-1,0),new V.T(0,1),i,a7)
k=a.a
i=new V.u(1,-1,1)
i=i.p(0,Math.sqrt(i.w(i)))
a1=k.bt(new V.ak(0,3,4,6),new V.a1(0,0,1,1),new V.G(1,-1,0),new V.T(1,1),i,a7)
k=a.a
i=new V.u(1,1,1)
i=i.p(0,Math.sqrt(i.w(i)))
a2=k.bt(new V.ak(0,2,5,6),new V.a1(0,1,0,1),new V.G(1,1,0),new V.T(1,0),i,a7)
k=a.a
i=V.ay()
g=new V.u(-1,1,1)
g=g.p(0,Math.sqrt(g.w(g)))
a3=k.bt(new V.ak(0,2,4,7),new V.a1(1,1,0,1),new V.G(-1,1,0),i,g,a7)
a.d.dn(H.c([a0,a1,a2,a3],[F.aY]))
a.ai()
p.sa7(0,a)
b.e=p
b.sb8(a7)
b.sbh(0,a7)
b.sbi(a7)
p=new O.dq()
p.b=1.0471975511965976
p.d=new V.X(1,1,1)
f=p.c
p.c=o
o.gq().n(0,p.gaP())
k=new D.B("boxTexture",f,p.c)
k.b=!0
p.Y(k)
b.sbi(p)
b.sbh(0,q)
b.sb8(c)
a4=new M.cY()
a4.a=!0
p=O.kv(E.aI)
a4.e=p
p.b0(a4.gfe(),a4.gfg())
a4.y=a4.x=a4.r=a4.f=null
a5=X.kA(a7)
a4.sb8(a7)
a4.sbh(0,a5)
a4.sbi(a7)
a4.sb8(c)
a4.sbi(l)
a4.sbh(0,q)
a4.e.n(0,r)
p=M.ao
k=H.c([b,a4],[p])
i=new M.cR()
i.bm(p)
i.e=!0
i.f=!1
i.r=null
i.b0(i.gfP(),i.gfR())
i.ab(0,k)
p=s.d
if(p!==i){if(p!=null)p.gq().D(0,s.gcU())
s.d=i
i.gq().n(0,s.gcU())
s.cV()}p=new V.hC("shapes")
u=u.getElementById("shapes")
p.c=u
if(u==null)H.t("Failed to find shapes for RadioGroup")
p.av(0,"Cube",new T.k7(r))
p.av(0,"Cuboid",new T.k8(r))
p.av(0,"Cylinder",new T.k9(r))
p.av(0,"Cone",new T.ka(r))
p.av(0,"LatLonSphere",new T.kb(r))
p.av(0,"IsoSphere",new T.kc(r))
p.bs(0,"Sphere",new T.kd(r),!0)
p.av(0,"Toroid",new T.ke(r))
p.av(0,"Knot",new T.kf(r))
u=s.z
if(u==null)u=s.z=D.E()
p=u.b
u=p==null?u.b=H.c([],[{func:1,ret:-1,args:[D.Y]}]):p
u.push(new T.kg(a9,l))
V.oW(s)},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a},
ka:function ka(a){this.a=a},
kb:function kb(a){this.a=a},
kc:function kc(a){this.a=a},
kd:function kd(a){this.a=a},
ke:function ke(a){this.a=a},
kf:function kf(a){this.a=a},
kg:function kg(a,b){this.a=a
this.b=b}},R={
ij:function(){var u=new R.ii(),t=P.k
u.a=new H.P([t,R.du])
u.b=new H.P([t,R.dC])
return u},
du:function du(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dB:function dB(a,b,c){this.a=a
this.b=b
this.c=c},
dC:function dC(a){this.b=a
this.c=null},
ii:function ii(){this.c=this.b=this.a=null},
dE:function dE(a){this.b=a
this.a=this.c=null}},O={
kv:function(a){var u=new O.aF([a])
u.bm(a)
return u},
aF:function aF(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c3:function c3(){this.b=this.a=null},
da:function da(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h7:function h7(a,b){this.a=a
this.b=b},
h8:function h8(){},
h9:function h9(a,b){this.a=a
this.b=b},
ha:function ha(){},
hb:function hb(a,b){this.a=a
this.b=b},
hc:function hc(){},
h1:function h1(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c2:function c2(){},
h2:function h2(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
av:function av(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h4:function h4(){var _=this
_.e=_.d=_.c=_.b=null},
h5:function h5(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h6:function h6(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dq:function dq(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
dx:function dx(){}},E={
lk:function(){var u,t=new E.aI()
t.a=""
t.b=!0
u=O.kv(E.aI)
t.y=u
u.b0(t.gi1(),t.gi4())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sa7(0,null)
return t},
nm:function(a,b){var u=new E.hF(a)
u.ez(a,b)
return u},
ns:function(a,b,c,d,e){var u,t,s=J.Q(a)
if(!!s.$ibq)return E.lB(a,!0,!0,!0,!1)
u=W.ku()
t=u.style
t.width="100%"
t.height="100%"
s.gca(a).n(0,u)
return E.lB(u,!0,!0,!0,!1)},
lB:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dz(),p=C.i.cK(a,"webgl2",P.n2(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.t(P.q("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.nm(p,a)
u=new T.id(p)
p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dJ(a)
t=new X.fL()
t.c=new X.aj(!1,!1,!1)
t.d=P.d7(P.x)
u.b=t
t=new X.hj(u)
t.f=0
t.r=V.ay()
t.x=V.ay()
t.ch=t.Q=1
u.c=t
t=new X.fU(u)
t.r=0
t.x=V.ay()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ik(u)
t.f=V.ay()
t.r=V.ay()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.c([],[[P.dv,P.a3]])
u.z=t
s=document
t.push(W.Z(s,"contextmenu",u.gfi(),!1))
u.z.push(W.Z(a,"focus",u.gfo(),!1))
u.z.push(W.Z(a,"blur",u.gfa(),!1))
u.z.push(W.Z(s,"keyup",u.gft(),!1))
u.z.push(W.Z(s,"keydown",u.gfq(),!1))
u.z.push(W.Z(a,"mousedown",u.gfz(),!1))
u.z.push(W.Z(a,"mouseup",u.gfD(),!1))
u.z.push(W.Z(a,r,u.gfB(),!1))
t=u.z
W.kx(a)
W.kx(a)
t.push(W.Z(a,W.kx(a),u.gfF(),!1))
u.z.push(W.Z(s,r,u.gfk(),!1))
u.z.push(W.Z(s,"mouseup",u.gfm(),!1))
u.z.push(W.Z(s,"pointerlockchange",u.gfH(),!1))
u.z.push(W.Z(a,"touchstart",u.gfX(),!1))
u.z.push(W.Z(a,"touchend",u.gfT(),!1))
u.z.push(W.Z(a,"touchmove",u.gfV(),!1))
q.r=u
q.Q=!0
q.ch=!1
q.cx=new P.aa(Date.now(),!1)
q.cy=0
q.dd()
return q},
eZ:function eZ(){},
aI:function aI(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hF:function hF(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hG:function hG(a){this.a=a},
hH:function hH(a){this.a=a},
hI:function hI(a){this.a=a},
dz:function dz(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ig:function ig(a){this.a=a}},Z={
kO:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bH(c)),35044)
a.bindBuffer(b,null)
return new Z.dN(b,u)},
al:function(a){return new Z.aZ(a)},
dN:function dN(a,b){this.a=a
this.b=b},
cO:function cO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dO:function dO(a){this.a=a},
bR:function bR(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bu:function bu(a,b,c){this.a=a
this.b=b
this.c=c},
aZ:function aZ(a){this.a=a}},D={
E:function(){var u=new D.bt()
u.d=0
return u},
f1:function f1(){},
bt:function bt(){var _=this
_.d=_.c=_.b=_.a=null},
fo:function fo(a){this.a=a},
fp:function fp(a){this.a=a},
Y:function Y(){this.b=null},
b7:function b7(){this.b=null},
b8:function b8(){this.b=null},
B:function B(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
br:function br(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ab:function ab(){},
d6:function d6(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
hz:function hz(){},
i_:function i_(){}},X={cP:function cP(a,b){this.a=a
this.b=b},d5:function d5(a,b){this.a=a
this.b=b},fL:function fL(){var _=this
_.d=_.c=_.b=_.a=null},d9:function d9(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fU:function fU(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aj:function aj(a,b,c){this.a=a
this.b=b
this.c=c},aP:function aP(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hj:function hj(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c5:function c5(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hA:function hA(){},dD:function dD(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ik:function ik(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dJ:function dJ(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kA:function(a){var u=new X.fx(),t=new V.a1(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.ly
if(t==null){t=V.lx(0,0,1,1)
$.ly=t}u.r=t
return u},
lr:function(a){var u,t,s=new X.di()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gq().n(0,s.gfc())
t=new D.B("mover",u,s.b)
t.b=!0
s.au(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.C().a)){s.c=1.0471975511965976
t=new D.B("fov",t,1.0471975511965976)
t.b=!0
s.au(t)}t=s.d
if(!(Math.abs(t-0.1)<$.C().a)){s.d=0.1
t=new D.B("near",t,0.1)
t.b=!0
s.au(t)}t=s.e
if(!(Math.abs(t-2000)<$.C().a)){s.e=2000
t=new D.B("far",t,2000)
t.b=!0
s.au(t)}return s},
kt:function kt(){},
fx:function fx(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fE:function fE(){this.b=this.a=null},
di:function di(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
i8:function i8(){}},V={
p1:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.bk(a-b,u)
return(a<0?a+u:a)+b},
D:function(a,b,c){if(a==null)return C.a.al("null",c)
return C.a.al(C.d.eg(Math.abs(a-0)<$.C().a?0:a,b),c+b+1)},
bM:function(a,b,c){var u,t,s,r,q,p,o=H.c([],[P.k])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.p)(a),++s){r=V.D(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.a.al(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
l1:function(a){return C.d.is(Math.pow(2,C.R.cl(Math.log(H.ox(a))/Math.log(2))))},
bw:function(){var u=$.lp
return u==null?$.lp=V.aw(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aw:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lo:function(a,b,c){var u=c.p(0,Math.sqrt(c.w(c))),t=b.aD(u),s=t.p(0,Math.sqrt(t.w(t))),r=u.aD(s),q=new V.u(a.a,a.b,a.c),p=s.T(0).w(q),o=r.T(0).w(q),n=u.T(0).w(q)
return V.aw(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
ay:function(){var u=$.lt
return u==null?$.lt=new V.T(0,0):u},
kI:function(){var u=$.ca
return u==null?$.ca=new V.G(0,0,0):u},
lx:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dl(a,b,c,d)},
cm:function(){var u=$.lM
return u==null?$.lM=new V.u(0,0,0):u},
nB:function(){var u=$.iN
return u==null?$.iN=new V.u(-1,0,0):u},
kN:function(){var u=$.iO
return u==null?$.iO=new V.u(0,1,0):u},
lN:function(){var u=$.iP
return u==null?$.iP=new V.u(0,0,1):u},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
a1:function a1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fn:function fn(a){this.a=a},
db:function db(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aN:function aN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
T:function T(a,b){this.a=a
this.b=b},
G:function G(a,b,c){this.a=a
this.b=b
this.c=c},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dl:function dl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
H:function H(a,b){this.a=a
this.b=b},
u:function u(a,b,c){this.a=a
this.b=b
this.c=c},
aX:function aX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oW:function(a){P.nt(C.O,new V.ki(a))},
no:function(a){var u=new V.hS()
u.eB(a,!0)
return u},
cQ:function cQ(){},
ki:function ki(a){this.a=a},
fd:function fd(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fz:function fz(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fA:function fA(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hx:function hx(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hC:function hC(a){this.a=a
this.c=null},
hD:function hD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hS:function hS(){this.b=this.a=null},
hU:function hU(a){this.a=a},
hT:function hT(a){this.a=a},
hV:function hV(a){this.a=a}},U={
kw:function(){var u=new U.f3()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
lg:function(a){var u=new U.cS()
u.a=a
return u},
f3:function f3(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cS:function cS(){this.b=this.a=null},
bX:function bX(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ac:function ac(){},
dK:function dK(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dL:function dL(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dM:function dM(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cR:function cR(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},cT:function cT(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},cY:function cY(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ao:function ao(){}},A={
n5:function(a,b){var u=a.bc,t=new A.h0(b,u)
t.cS(b,u)
t.ey(a,b)
return t},
n6:function(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="MaterialLight_"+a1.gas(a1)+a2.gas(a2)+a3.gas(a3)+a4.gas(a4)+a5.gas(a5)+a6.gas(a6)+a7.gas(a7)+a8.gas(a8)+a9.gas(a9)+"_"
e+=a?"1":"0"
e+=b?"1":"0"
e+=c?"1":"0"
e=e+"0_"+a0
u=b0.length
if(u>0){e+="_Dir"
for(t=0;t<b0.length;b0.length===u||(0,H.p)(b0),++t)e+="_"+H.e(b0[t].a)}u=b1.length
if(u>0){e+="_Point"
for(t=0;t<b1.length;b1.length===u||(0,H.p)(b1),++t)e+="_"+H.e(b1[t].a)}u=b2.length
if(u>0){e+="_Spot"
for(t=0;t<b2.length;b2.length===u||(0,H.p)(b2),++t)e+="_"+H.e(b2[t].a)}for(u=b0.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b0[t].b
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
f=$.ar()
if(k){u=$.b2()
f=new Z.aZ(f.a|u.a)}if(j){u=$.b1()
f=new Z.aZ(f.a|u.a)}if(i){u=$.b3()
f=new Z.aZ(f.a|u.a)}if(h){u=$.b0()
f=new Z.aZ(f.a|u.a)}return new A.h3(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,s,p,l,p,r,g,!0,!1,!1,o,r,m,k,j,!1,i,h,!1,b,c,!1,a0,e.charCodeAt(0)==0?e:e,f)},
jQ:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
jR:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.jQ(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kn(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
o6:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jQ(b,t,"emission")
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
o3:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jR(b,t,"ambient")
b.a+="\n"},
o4:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jR(b,t,"diffuse")
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
o7:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jR(b,t,"invDiffuse")
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
od:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jR(b,t,"specular")
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
o9:function(a,b){var u,t,s
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
ob:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jQ(b,t,"reflect")
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
oc:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jQ(b,t,"refract")
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
o5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.kn(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.am()
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
r=[P.k]
o=H.c([],r)
n=a.b
if(!n.a)n=n.c
else n=!0
if(n)o.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
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
c.a+="      highLight = intensity*("+C.b.k(m," + ")+");\n"}else c.a+="   highLight = "+C.b.k(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.b.k(o," + ")+");\n"
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
oa:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.kn(t)
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
if(typeof u!=="number")return u.am()
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
c.a=r+"\n"}r=[P.k]
l=H.c([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.b.k(l," * ")+";\n"
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
if(o)l.push("ambientColor")
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
r=c.a+="      highLight = intensity*("+C.b.k(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.b.k(l," + ")+");\n"
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
oe:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.kn(t)
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
if(typeof u!=="number")return u.am()
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
c.a=u+"\n"}u=[P.k]
j=H.c([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.b.k(j," * ")+";\n"
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
if(r)j.push("ambientColor")
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
u=c.a+="      highLight = intensity*("+C.b.k(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.k(j," + ")+");\n"
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
o8:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.k])
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
u=b.a+="   return "+C.b.k(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
of:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.U("")
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
A.o6(a,i)
A.o3(a,i)
A.o4(a,i)
A.o7(a,i)
A.od(a,i)
t=a.cy
if(t){r=i.a+="// === Enviromental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.ob(a,i)
A.oc(a,i)}A.o9(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.p)(q),++n)A.o5(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.p)(q),++n)A.oa(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.p)(q),++n)A.oe(a,q[n],i)
A.o8(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.c([],[P.k])
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
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.p)(u),++n){r=u[n].h(0)
if(0>=r.length)return H.b(r,0)
i.a+=l+(r[0].toUpperCase()+C.a.ac(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.p)(u),++n){r=u[n].h(0)
if(0>=r.length)return H.b(r,0)
i.a+=l+(r[0].toUpperCase()+C.a.ac(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.p)(u),++n){r=u[n].h(0)
if(0>=r.length)return H.b(r,0)
i.a+=l+(r[0].toUpperCase()+C.a.ac(r,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
u=i.a+="   vec4 objClr = vec4("+C.b.k(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
og:function(a,b){var u,t,s
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
oi:function(a,b){var u
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
oh:function(a,b){var u
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
ok:function(a,b){var u,t
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
ol:function(a,b){var u,t
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
oj:function(a,b){var u
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
om:function(a,b){var u
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
kn:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.ac(a,1)},
kK:function(a,b,c,d,e){var u=new A.is(a,c,e)
u.f=d
P.n3(d,0,P.x)
return u},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
eS:function eS(a){this.a=a},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
h0:function h0(a,b){var _=this
_.dG=_.iB=_.dF=_.bx=_.bc=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iJ=_.iI=_.iH=_.ck=_.cj=_.ci=_.cg=_.cf=_.ce=_.dS=_.iG=_.dR=_.dQ=_.iF=_.dP=_.dO=_.dN=_.iE=_.dM=_.dL=_.dK=_.iD=_.dJ=_.dI=_.iC=_.dH=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cV:function cV(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.b=b},
ds:function ds(a,b){this.a=a
this.b=b},
h3:function h3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.bc=b3
_.bx=b4},
ci:function ci(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ck:function ck(a,b,c,d,e,f,g,h,i,j){var _=this
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
cl:function cl(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dn:function dn(){},
hX:function hX(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dF:function dF(){},
ix:function ix(a){this.a=a},
dG:function dG(a,b,c){this.a=a
this.c=b
this.d=c},
iu:function iu(a,b,c){this.a=a
this.c=b
this.d=c},
iv:function iv(a,b,c){this.a=a
this.c=b
this.d=c},
iw:function iw(a,b,c){this.a=a
this.c=b
this.d=c},
is:function is(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
W:function W(a,b,c){this.a=a
this.c=b
this.d=c},
it:function it(a,b,c){this.a=a
this.c=b
this.d=c},
J:function J(a,b,c){this.a=a
this.c=b
this.d=c},
ch:function ch(a,b,c){this.a=a
this.c=b
this.d=c},
iy:function iy(a,b,c){this.a=a
this.c=b
this.d=c},
cj:function cj(a,b,c){this.a=a
this.c=b
this.d=c},
ae:function ae(a,b,c){this.a=a
this.c=b
this.d=c},
bC:function bC(a,b,c){this.a=a
this.c=b
this.d=c},
a0:function a0(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kX:function(a,b,c,d){var u=F.dp()
F.cB(u,b,c,d,a,1,0,0,1)
F.cB(u,b,c,d,a,0,1,0,3)
F.cB(u,b,c,d,a,0,0,1,2)
F.cB(u,b,c,d,a,-1,0,0,0)
F.cB(u,b,c,d,a,0,-1,0,0)
F.cB(u,b,c,d,a,0,0,-1,3)
u.ai()
return u},
jL:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cB:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.u(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.u(u+a3,t+a1,s+a2)
q=new V.u(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.u(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jL(i)
l=F.jL(j.b)
k=F.km(d,a0,new F.jK(j,F.jL(j.c),F.jL(j.d),l,m,c),b)
if(k!=null)a.aY(k)},
m6:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.dp()
t=b?-1:1
s=-6.283185307179586/e
r=H.c([],[F.aY])
q=u.a
p=new V.u(0,0,t)
p=p.p(0,Math.sqrt(p.w(p)))
r.push(q.hm(new V.ak(a,-1,-1,-1),new V.a1(1,1,1,1),new V.G(0,0,c),new V.u(0,0,t),new V.T(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.w(k)
j=new V.u(m,l,t).p(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.bE(new V.ak(a,-1,-1,-1),null,new V.a1(i,g,h,1),new V.G(m*k,l*k,c),new V.u(0,0,t),new V.T(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.n(0,f)
r.push(f)}u.d.dn(r)
return u},
m4:function(a,b,c){return F.oB(!0,a,1,new F.jU(1,c),b)},
oB:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.km(c,e,new F.jW(d),null)
if(u==null)return
u.ai()
u.bu()
if(b)u.aY(F.m6(3,!1,1,new F.jX(d),e))
u.aY(F.m6(1,!0,-1,new F.jY(d),e))
return u},
oQ:function(a,b){var u=F.km(a,b,new F.k6(),null)
u.d.bF()
u.ai()
u.bu()
return u},
a5:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null
b=b.p(0,Math.sqrt(b.w(b)))
u=b.a
t=b.b
s=b.c
r=F.bE(j,j,j,new V.G(u,t,s),b,j,j,j,0)
q=a.hN(r,new F.cn())
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
r.sao(0,new V.a1(p,o,n,1))
m=Math.sqrt(u*u+t*t)
l=Math.atan2(t,u)/1.5707963267948966
if(l<0)l=-l
k=Math.atan2(m,s)/3.141592653589793
r.scE(new V.T(l,k<0?-k:k))
a.a.n(0,r)
return r},
O:function(a,b,c,d,e){var u,t,s,r
if(e<=0)a.d.bs(0,b,d,c)
else{u=F.a5(a,b.r.A(0,c.r).u(0,0.5))
t=F.a5(a,c.r.A(0,d.r).u(0,0.5))
s=F.a5(a,d.r.A(0,b.r).u(0,0.5))
r=e-1
F.O(a,b,u,s,r)
F.O(a,u,c,t,r)
F.O(a,t,s,u,r)
F.O(a,s,t,d,r)}},
mf:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kj()
t=F.kX(a,null,new F.kk(s,1),b)
t.bu()
return t},
p_:function(){return F.m5(15,30,0.5,1,new F.ko())},
oP:function(){return F.m5(12,120,0.3,1,new F.k5(3,2))},
m5:function(a,b,c,d,e){var u=F.km(a,b,new F.jV(e,d,b,c),null)
if(u==null)return
u.ai()
u.bu()
return u},
km:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.dp()
t=H.c([],[F.aY])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.bE(g,g,new V.a1(p,0,0,1),g,g,new V.T(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.cc(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.bE(g,g,new V.a1(j,i,h,1),g,g,new V.T(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.cc(d))}}u.d.hl(a+1,b+1,t)
return u},
bV:function(a,b,c){var u=new F.aJ(),t=a.a
if(t==null)H.t(P.q("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.q("May not create a face with vertices attached to different shapes."))
u.bp(a)
u.bq(b)
u.dg(c)
u.a.a.d.b.push(u)
u.a.a.V()
return u},
n_:function(a,b){var u=new F.c0(),t=a.a
if(t==null)H.t(P.q("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.q("May not create a line with vertices attached to different shapes."))
u.bp(a)
u.bq(b)
u.a.a.c.b.push(u)
u.a.a.V()
return u},
dp:function(){var u=new F.hO(),t=new F.iQ(u)
t.b=!1
t.c=H.c([],[F.aY])
u.a=t
t=new F.hR(u)
t.b=H.c([],[F.c9])
u.b=t
t=new F.hQ(u)
t.b=H.c([],[F.c0])
u.c=t
t=new F.hP(u)
t.b=H.c([],[F.aJ])
u.d=t
u.e=null
return u},
bE:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aY(),r=new F.iY()
r.b=H.c([],[F.c9])
s.b=r
r=new F.iV()
u=[F.c0]
r.b=H.c([],u)
r.c=H.c([],u)
s.c=r
r=new F.iR()
u=[F.aJ]
r.b=H.c([],u)
r.c=H.c([],u)
r.d=H.c([],u)
s.d=r
h=$.mu()
s.e=0
r=$.ar()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.b2().a)!==0?e:t
s.x=(u&$.b1().a)!==0?b:t
s.y=(u&$.bm().a)!==0?f:t
s.z=(u&$.b3().a)!==0?g:t
s.Q=(u&$.mv().a)!==0?c:t
s.ch=(u&$.bO().a)!==0?i:0
s.cx=(u&$.b0().a)!==0?a:t
return s},
jK:function jK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jU:function jU(a,b){this.a=a
this.b=b},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
jY:function jY(a){this.a=a},
k6:function k6(){},
kj:function kj(){},
kk:function kk(a,b){this.a=a
this.b=b},
ko:function ko(){},
k5:function k5(a,b){this.a=a
this.b=b},
jV:function jV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aJ:function aJ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fq:function fq(){},
hW:function hW(){},
c0:function c0(){this.b=this.a=null},
fN:function fN(){},
ir:function ir(){},
c9:function c9(){this.a=null},
hO:function hO(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hP:function hP(a){this.a=a
this.b=null},
hQ:function hQ(a){this.a=a
this.b=null},
hR:function hR(a){this.a=a
this.b=null},
aY:function aY(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j_:function j_(a){this.a=a},
iZ:function iZ(a){this.a=a},
iQ:function iQ(a){this.a=a
this.c=this.b=null},
iR:function iR(){this.d=this.c=this.b=null},
iS:function iS(a,b){this.a=a
this.b=b},
iT:function iT(a,b){this.a=a
this.b=b},
iV:function iV(){this.c=this.b=null},
iW:function iW(){},
cn:function cn(){},
iX:function iX(){},
iU:function iU(){},
hr:function hr(){},
iY:function iY(){this.b=null}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kE.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gI:function(a){return H.cb(a)},
h:function(a){return"Instance of '"+H.e(H.cc(a))+"'"}}
J.fI.prototype={
h:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iaD:1}
J.d3.prototype={
t:function(a,b){return null==b},
h:function(a){return"null"},
gI:function(a){return 0}}
J.d4.prototype={
gI:function(a){return 0},
h:function(a){return String(a)}}
J.hw.prototype={}
J.bD.prototype={}
J.bb.prototype={
h:function(a){var u=a[$.mi()]
if(u==null)return this.ev(a)
return"JavaScript function for "+H.e(J.a6(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b9.prototype={
eb:function(a,b){if(!!a.fixed$length)H.t(P.y("removeAt"))
if(b<0||b>=a.length)throw H.d(P.dk(b,null))
return a.splice(b,1)[0]},
D:function(a,b){var u
if(!!a.fixed$length)H.t(P.y("remove"))
for(u=0;u<a.length;++u)if(J.z(a[u],b)){a.splice(u,1)
return!0}return!1},
ab:function(a,b){var u,t
if(!!a.fixed$length)H.t(P.y("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.p)(b),++t)a.push(b[t])},
H:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.d(P.aG(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
hZ:function(a){return this.k(a,"")},
hR:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.d(P.aG(a))}return u},
hS:function(a,b,c){return this.hR(a,b,c,null)},
hQ:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.d(P.aG(a))}throw H.d(H.fG())},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
eq:function(a,b,c){if(b<0||b>a.length)throw H.d(P.a_(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.a_(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.cH(a,0)])
return H.c(a.slice(b,c),[H.cH(a,0)])},
ghP:function(a){if(a.length>0)return a[0]
throw H.d(H.fG())},
gax:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.fG())},
dt:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.d(P.aG(a))}return!1},
bK:function(a,b){if(!!a.immutable$list)H.t(P.y("sort"))
H.dr(a,0,a.length-1,b)},
W:function(a,b){var u
for(u=0;u<a.length;++u)if(J.z(a[u],b))return!0
return!1},
h:function(a){return P.kB(a,"[","]")},
gU:function(a){return new J.a7(a,a.length)},
gI:function(a){return H.cb(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.y("set length"))
if(b<0)throw H.d(P.a_(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.bL(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.t(P.y("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bL(a,b))
a[b]=c},
$ih:1,
$io:1}
J.kD.prototype={}
J.a7.prototype={
gJ:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.p(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.c_.prototype={
hw:function(a,b){var u
if(typeof b!=="number")throw H.d(H.aq(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbz(b)
if(this.gbz(a)===u)return 0
if(this.gbz(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbz:function(a){return a===0?1/a<0:a<0},
is:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.y(""+a+".toInt()"))},
cl:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.y(""+a+".floor()"))},
ap:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.y(""+a+".round()"))},
eg:function(a,b){var u
if(b>20)throw H.d(P.a_(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbz(a))return"-"+u
return u},
bj:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.a_(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.Z(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.y("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.b(t,1)
u=t[1]
if(3>=s)return H.b(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.u("0",r)},
h:function(a){if(a===0&&1/a<0)return"-0.0"
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
ex:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.di(a,b)},
aa:function(a,b){return(a|0)===a?a/b|0:this.di(a,b)},
di:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.y("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aU:function(a,b){var u
if(a>0)u=this.dh(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hc:function(a,b){if(b<0)throw H.d(H.aq(b))
return this.dh(a,b)},
dh:function(a,b){return b>31?0:a>>>b},
$iK:1,
$iaf:1}
J.d2.prototype={$ix:1}
J.d1.prototype={}
J.ba.prototype={
Z:function(a,b){if(b<0)throw H.d(H.bL(a,b))
if(b>=a.length)H.t(H.bL(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.d(H.bL(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!=="string")throw H.d(P.lb(b,null,null))
return a+b},
aZ:function(a,b,c,d){var u,t
c=P.bh(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a8:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.a_(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.a8(a,b,0)},
v:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.aq(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.R()
if(b<0)throw H.d(P.dk(b,null))
if(b>c)throw H.d(P.dk(b,null))
if(c>a.length)throw H.d(P.dk(c,null))
return a.substring(b,c)},
ac:function(a,b){return this.v(a,b,null)},
iu:function(a){return a.toLowerCase()},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.L)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
al:function(a,b){var u=b-a.length
if(u<=0)return a
return this.u(" ",u)+a},
by:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.a_(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dZ:function(a,b){return this.by(a,b,0)},
h:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ik:1}
H.m.prototype={
gl:function(a){return this.a.length},
i:function(a,b){return C.a.Z(this.a,b)},
$av:function(){return[P.x]},
$ah:function(){return[P.x]},
$ao:function(){return[P.x]}}
H.fk.prototype={}
H.d8.prototype={
gU:function(a){return new H.c1(this,this.gl(this))},
bI:function(a,b){return this.eu(0,b)}}
H.c1.prototype={
gJ:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=J.cE(s),q=r.gl(s)
if(t.b!==q)throw H.d(P.aG(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.K(s,u);++t.c
return!0}}
H.fY.prototype={
gU:function(a){return new H.fZ(J.b4(this.a),this.b)},
gl:function(a){return J.ah(this.a)},
K:function(a,b){return this.b.$1(J.eO(this.a,b))},
$ah:function(a,b){return[b]}}
H.fZ.prototype={
C:function(){var u=this,t=u.b
if(t.C()){u.a=u.c.$1(t.gJ(t))
return!0}u.a=null
return!1},
gJ:function(a){return this.a}}
H.h_.prototype={
gl:function(a){return J.ah(this.a)},
K:function(a,b){return this.b.$1(J.eO(this.a,b))},
$ad8:function(a,b){return[b]},
$ah:function(a,b){return[b]}}
H.co.prototype={
gU:function(a){return new H.j1(J.b4(this.a),this.b)}}
H.j1.prototype={
C:function(){var u,t
for(u=this.a,t=this.b;u.C();)if(t.$1(u.gJ(u)))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.cZ.prototype={}
H.iC.prototype={
m:function(a,b,c){throw H.d(P.y("Cannot modify an unmodifiable list"))}}
H.dH.prototype={}
H.f5.prototype={
h:function(a){return P.kH(this)},
m:function(a,b,c){return H.mQ()},
$iS:1}
H.f6.prototype={
gl:function(a){return this.a},
bv:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bv(0,b))return
return this.d4(b)},
d4:function(a){return this.b[a]},
H:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.d4(s))}}}
H.ip.prototype={
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
H.hs.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fK.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iB.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kp.prototype={
$1:function(a){if(!!J.Q(a).$ibs)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:9}
H.em.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bS.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
giv:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i9.prototype={}
H.i1.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.eN(u)+"'"}}
H.bP.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bP))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cb(this.a)
else u=typeof t!=="object"?J.cL(t):H.cb(t)
return(u^H.cb(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.cc(u))+"'")}}
H.f0.prototype={
h:function(a){return this.a}}
H.hL.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.P.prototype={
gl:function(a){return this.a},
ghY:function(a){return this.a===0},
ga6:function(a){return new H.fP(this,[H.cH(this,0)])},
bv:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.d1(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.d1(t,b)}else return s.hV(b)},
hV:function(a){var u=this,t=u.d
if(t==null)return!1
return u.co(u.bS(t,u.cn(a)),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bn(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bn(r,b)
s=t==null?null:t.b
return s}else return q.hW(b)},
hW:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bS(r,s.cn(a))
t=s.co(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cX(u==null?s.b=s.c_():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cX(t==null?s.c=s.c_():t,b,c)}else s.hX(b,c)},
hX:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.c_()
u=r.cn(a)
t=r.bS(q,u)
if(t==null)r.c5(q,u,[r.c0(a,b)])
else{s=r.co(t,a)
if(s>=0)t[s].b=b
else t.push(r.c0(a,b))}},
H:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.d(P.aG(u))
t=t.c}},
cX:function(a,b,c){var u=this.bn(a,b)
if(u==null)this.c5(a,b,this.c0(b,c))
else u.b=c},
f_:function(){this.r=this.r+1&67108863},
c0:function(a,b){var u,t=this,s=new H.fO(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.f_()
return s},
cn:function(a){return J.cL(a)&0x3ffffff},
co:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.z(a[t].a,b))return t
return-1},
h:function(a){return P.kH(this)},
bn:function(a,b){return a[b]},
bS:function(a,b){return a[b]},
c5:function(a,b,c){a[b]=c},
eT:function(a,b){delete a[b]},
d1:function(a,b){return this.bn(a,b)!=null},
c_:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c5(t,u,t)
this.eT(t,u)
return t}}
H.fO.prototype={}
H.fP.prototype={
gl:function(a){return this.a.a},
gU:function(a){var u=this.a,t=new H.fQ(u,u.r)
t.c=u.e
return t}}
H.fQ.prototype={
gJ:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.aG(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.k1.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.k2.prototype={
$2:function(a,b){return this.a(a,b)}}
H.k3.prototype={
$1:function(a){return this.a(a)}}
H.fJ.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ink:1}
H.c6.prototype={$ic6:1}
H.be.prototype={$ibe:1}
H.dc.prototype={
gl:function(a){return a.length},
$iA:1,
$aA:function(){}}
H.c7.prototype={
i:function(a,b){H.aC(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aC(b,a,a.length)
a[b]=c},
$av:function(){return[P.K]},
$ih:1,
$ah:function(){return[P.K]},
$io:1,
$ao:function(){return[P.K]}}
H.dd.prototype={
m:function(a,b,c){H.aC(b,a,a.length)
a[b]=c},
$av:function(){return[P.x]},
$ih:1,
$ah:function(){return[P.x]},
$io:1,
$ao:function(){return[P.x]}}
H.hk.prototype={
i:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.hl.prototype={
i:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.hm.prototype={
i:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.hn.prototype={
i:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.ho.prototype={
i:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.de.prototype={
gl:function(a){return a.length},
i:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.c8.prototype={
gl:function(a){return a.length},
i:function(a,b){H.aC(b,a,a.length)
return a[b]},
$ic8:1,
$ibB:1}
H.cs.prototype={}
H.ct.prototype={}
H.cu.prototype={}
H.cv.prototype={}
P.j3.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.j2.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.j4.prototype={
$0:function(){this.a.$0()}}
P.j5.prototype={
$0:function(){this.a.$0()}}
P.es.prototype={
eG:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bK(new P.jA(this,b),0),a)
else throw H.d(P.y("`setTimeout()` not found."))},
eH:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bK(new P.jz(this,a,Date.now(),b),0),a)
else throw H.d(P.y("Periodic timer."))},
$idA:1}
P.jA.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jz.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.ex(u,q)}s.c=r
t.d.$1(s)}}
P.dP.prototype={}
P.dv.prototype={}
P.i4.prototype={}
P.dA.prototype={}
P.jJ.prototype={}
P.jS.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dh():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.h(0)
throw u}}
P.jj.prototype={
io:function(a){var u,t,s,r=null
try{if(C.f===$.ap){a.$0()
return}P.oo(r,r,this,a)}catch(s){u=H.ag(s)
t=H.kZ(s)
P.lZ(r,r,this,u,t)}},
ip:function(a,b){var u,t,s,r=null
try{if(C.f===$.ap){a.$1(b)
return}P.op(r,r,this,a,b)}catch(s){u=H.ag(s)
t=H.kZ(s)
P.lZ(r,r,this,u,t)}},
iq:function(a,b){return this.ip(a,b,null)},
ht:function(a){return new P.jk(this,a)},
dv:function(a,b){return new P.jl(this,a,b)}}
P.jk.prototype={
$0:function(){return this.a.io(this.b)}}
P.jl.prototype={
$1:function(a){return this.a.iq(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jg.prototype={
gU:function(a){var u=new P.e3(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
W:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.eO(b)
return t}},
eO:function(a){var u=this.d
if(u==null)return!1
return this.bQ(this.d5(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cY(u==null?s.b=P.kP():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cY(t==null?s.c=P.kP():t,b)}else return s.eI(0,b)},
eI:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kP()
u=s.d_(b)
t=r[u]
if(t==null)r[u]=[s.bN(b)]
else{if(s.bQ(t,b)>=0)return!1
t.push(s.bN(b))}return!0},
D:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.h_(this.c,b)
else return this.fZ(0,b)},
fZ:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.d5(r,b)
t=s.bQ(u,b)
if(t<0)return!1
s.dj(u.splice(t,1)[0])
return!0},
cY:function(a,b){if(a[b]!=null)return!1
a[b]=this.bN(b)
return!0},
h_:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.dj(u)
delete a[b]
return!0},
cZ:function(){this.r=1073741823&this.r+1},
bN:function(a){var u,t=this,s=new P.jh(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cZ()
return s},
dj:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cZ()},
d_:function(a){return J.cL(a)&1073741823},
d5:function(a,b){return a[this.d_(b)]},
bQ:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.z(a[t].a,b))return t
return-1}}
P.jh.prototype={}
P.e3.prototype={
gJ:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.aG(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fR.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.fS.prototype={$ih:1,$io:1}
P.v.prototype={
gU:function(a){return new H.c1(a,this.gl(a))},
K:function(a,b){return this.i(a,b)},
it:function(a,b){var u,t,s=this,r=H.c([],[H.oH(s,a,"v",0)])
C.b.sl(r,s.gl(a))
for(u=0;u<s.gl(a);++u){t=s.i(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t}return r},
cF:function(a){return this.it(a,!0)},
hM:function(a,b,c,d){var u
P.bh(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
h:function(a){return P.kB(a,"[","]")}}
P.fV.prototype={}
P.fW.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.aM.prototype={
H:function(a,b){var u,t
for(u=J.b4(this.ga6(a));u.C();){t=u.gJ(u)
b.$2(t,this.i(a,t))}},
gl:function(a){return J.ah(this.ga6(a))},
h:function(a){return P.kH(a)},
$iS:1}
P.jB.prototype={
m:function(a,b,c){throw H.d(P.y("Cannot modify unmodifiable map"))}}
P.fX.prototype={
i:function(a,b){return J.cK(this.a,b)},
m:function(a,b,c){J.kq(this.a,b,c)},
H:function(a,b){J.l7(this.a,b)},
gl:function(a){return J.ah(this.a)},
h:function(a){return J.a6(this.a)},
$iS:1}
P.dI.prototype={}
P.jn.prototype={
ab:function(a,b){var u
for(u=J.b4(b);u.C();)this.n(0,u.gJ(u))},
h:function(a){return P.kB(this,"{","}")},
K:function(a,b){var u,t,s
P.lw(b,"index")
for(u=P.nJ(this,this.r),t=0;u.C();){s=u.d
if(b===t)return s;++t}throw H.d(P.M(b,this,"index",null,t))},
$ih:1}
P.e4.prototype={}
P.ey.prototype={}
P.eX.prototype={
i0:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bh(a0,a1,b.length)
u=$.mx()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.a.F(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.k0(C.a.F(b,n))
j=H.k0(C.a.F(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.b(u,i)
h=u[i]
if(h>=0){i=C.a.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.U("")
g=r.a+=C.a.v(b,s,t)
r.a=g+H.by(m)
s=n
continue}}throw H.d(P.R("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.v(b,s,a1)
f=g.length
if(q>=0)P.lc(b,p,a1,q,o,f)
else{e=C.c.bk(f-1,4)+1
if(e===1)throw H.d(P.R(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aZ(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lc(b,p,a1,q,o,d)
else{e=C.c.bk(d,4)
if(e===1)throw H.d(P.R(c,b,a1))
if(e>1)b=C.a.aZ(b,a1,a1,e===2?"==":"=")}return b}}
P.eY.prototype={}
P.f2.prototype={}
P.f7.prototype={}
P.fm.prototype={}
P.fD.prototype={
h:function(a){return this.a}}
P.fC.prototype={
eQ:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.b(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.U("")
if(r>b)q.a+=C.a.v(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mI(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iK.prototype={
ghL:function(){return C.M}}
P.iM.prototype={
cb:function(a){var u,t,s=P.bh(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jH(u)
if(t.eV(a,0,s)!==s)t.dl(J.mE(a,s-1),0)
return new Uint8Array(u.subarray(0,H.o_(0,t.b,u.length)))}}
P.jH.prototype={
dl:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eV:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.Z(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.F(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dl(r,C.a.F(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iL.prototype={
cb:function(a){var u,t,s,r,q,p,o,n,m=P.nw(!1,a,0,null)
if(m!=null)return m
u=P.bh(0,null,J.ah(a))
t=P.m0(a,0,u)
if(t>0){s=P.cf(a,0,t)
if(t===u)return s
r=new P.U(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.U("")
o=new P.jG(!1,r)
o.c=p
o.hx(a,q,u)
if(o.e>0){H.t(P.R("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.by(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jG.prototype={
hx:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.cE(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.am()
if((r&192)!==128){q=P.R(k+C.c.bj(r,16),a,s)
throw H.d(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.b(C.v,q)
if(j<=C.v[q]){q=P.R("Overlong encoding of 0x"+C.c.bj(j,16),a,s-h-1)
throw H.d(q)}if(j>1114111){q=P.R("Character outside valid Unicode range: 0x"+C.c.bj(j,16),a,s-h-1)
throw H.d(q)}if(!l.c||j!==65279)t.a+=H.by(j)
l.c=!1}for(q=s<c;q;){p=P.m0(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.cf(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.R()
if(r<0){m=P.R("Negative UTF-8 code unit: -0x"+C.c.bj(-r,16),a,n-1)
throw H.d(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.R(k+C.c.bj(r,16),a,n-1)
throw H.d(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.aD.prototype={}
P.aa.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.aa&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.c.aU(u,30))&1073741823},
h:function(a){var u=this,t=P.mR(H.ng(u)),s=P.cU(H.ne(u)),r=P.cU(H.na(u)),q=P.cU(H.nb(u)),p=P.cU(H.nd(u)),o=P.cU(H.nf(u)),n=P.mS(H.nc(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.K.prototype={}
P.b6.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.b6&&this.a===b.a},
gI:function(a){return C.c.gI(this.a)},
h:function(a){var u,t,s,r=new P.fj(),q=this.a
if(q<0)return"-"+new P.b6(0-q).h(0)
u=r.$1(C.c.aa(q,6e7)%60)
t=r.$1(C.c.aa(q,1e6)%60)
s=new P.fi().$1(q%1e6)
return""+C.c.aa(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.fi.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fj.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bs.prototype={}
P.dh.prototype={
h:function(a){return"Throw of null."}}
P.am.prototype={
gbP:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbO:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbP()+o+u
if(!q.a)return t
s=q.gbO()
r=P.kz(q.b)
return t+s+": "+r}}
P.bz.prototype={
gbP:function(){return"RangeError"},
gbO:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fF.prototype={
gbP:function(){return"RangeError"},
gbO:function(){var u,t=this.b
if(typeof t!=="number")return t.R()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.iD.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.iz.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ce.prototype={
h:function(a){return"Bad state: "+this.a}}
P.f4.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kz(u)+"."}}
P.hv.prototype={
h:function(a){return"Out of Memory"},
$ibs:1}
P.dt.prototype={
h:function(a){return"Stack Overflow"},
$ibs:1}
P.fc.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dX.prototype={
h:function(a){return"Exception: "+this.a}}
P.fw.prototype={
h:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.v(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.F(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.Z(f,q)
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
k=""}j=C.a.v(f,m,n)
return h+l+j+k+"\n"+C.a.u(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fy.prototype={}
P.x.prototype={}
P.h.prototype={
bI:function(a,b){return new H.co(this,b,[H.kY(this,"h",0)])},
gl:function(a){var u,t=this.gU(this)
for(u=0;t.C();)++u
return u},
gaM:function(a){var u,t=this.gU(this)
if(!t.C())throw H.d(H.fG())
u=t.gJ(t)
if(t.C())throw H.d(H.mX())
return u},
K:function(a,b){var u,t,s
P.lw(b,"index")
for(u=this.gU(this),t=0;u.C();){s=u.gJ(u)
if(b===t)return s;++t}throw H.d(P.M(b,this,"index",null,t))},
h:function(a){return P.mW(this,"(",")")}}
P.fH.prototype={}
P.o.prototype={$ih:1}
P.S.prototype={}
P.bf.prototype={
gI:function(a){return P.a3.prototype.gI.call(this,this)},
h:function(a){return"null"}}
P.af.prototype={}
P.a3.prototype={constructor:P.a3,$ia3:1,
t:function(a,b){return this===b},
gI:function(a){return H.cb(this)},
h:function(a){return"Instance of '"+H.e(H.cc(this))+"'"},
toString:function(){return this.h(this)}}
P.k.prototype={}
P.U.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iI.prototype={
$2:function(a,b){var u,t,s,r=J.cF(b).dZ(b,"=")
if(r===-1){if(b!=="")J.kq(a,P.kT(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.v(b,0,r)
t=C.a.ac(b,r+1)
s=this.a
J.kq(a,P.kT(u,0,u.length,s,!0),P.kT(t,0,t.length,s,!0))}return a}}
P.iF.prototype={
$2:function(a,b){throw H.d(P.R("Illegal IPv4 address, "+a,this.a,b))}}
P.iG.prototype={
$2:function(a,b){throw H.d(P.R("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iH.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eM(C.a.v(this.b,a,b),null,16)
if(typeof u!=="number")return u.R()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bF.prototype={
gej:function(){return this.b},
gcm:function(a){var u=this.c
if(u==null)return""
if(C.a.a5(u,"["))return C.a.v(u,1,u.length-1)
return u},
gbC:function(a){var u=this.d
if(u==null)return P.lS(this.a)
return u},
gcA:function(a){var u=this.f
return u==null?"":u},
gdU:function(){var u=this.r
return u==null?"":u},
ed:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a5(u,"/"))u="/"+u
s=P.kR(null,0,0,b)
return new P.bF(q,o,m,n,u,s,r.r)},
gcB:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.k
u=this.Q=new P.dI(P.lI(t==null?"":t),[u,u])
t=u}return t},
gdV:function(){return this.c!=null},
gdY:function(){return this.f!=null},
gdW:function(){return this.r!=null},
h:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.e(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.e(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.e(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.Q(b).$ikL)if(s.a==b.gbJ())if(s.c!=null===b.gdV())if(s.b==b.gej())if(s.gcm(s)==b.gcm(b))if(s.gbC(s)==b.gbC(b))if(s.e===b.gea(b)){u=s.f
t=u==null
if(!t===b.gdY()){if(t)u=""
if(u===b.gcA(b)){u=s.r
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
gI:function(a){var u=this.z
return u==null?this.z=C.a.gI(this.h(0)):u},
$ikL:1,
gbJ:function(){return this.a},
gea:function(a){return this.e}}
P.jC.prototype={
$1:function(a){throw H.d(P.R("Invalid port",this.a,this.b+1))}}
P.jD.prototype={
$1:function(a){return P.ez(C.W,a,C.e,!1)}}
P.jF.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.ez(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.ez(C.h,b,C.e,!0))}}}
P.jE.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.b4(b),t=this.a;u.C();)t.$2(a,u.gJ(u))}}
P.iE.prototype={
gei:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.b(o,0)
u=q.a
o=o[0]+1
t=C.a.by(u,"?",o)
s=u.length
if(t>=0){r=P.cA(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.j9("data",p,p,p,P.cA(u,o,s,C.z,!1),r,p)},
h:function(a){var u,t=this.b
if(0>=t.length)return H.b(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jN.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jM.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.b(u,a)
u=u[a]
J.mF(u,0,96,b)
return u},
$S:18}
P.jO.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.F(b,s)^96
if(r>=t)return H.b(a,r)
a[r]=c}}}
P.jP.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.F(b,0),t=C.a.F(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.b(a,r)
a[r]=c}}}
P.jq.prototype={
gdV:function(){return this.c>0},
gdX:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.A()
t=this.e
if(typeof t!=="number")return H.w(t)
t=u+1<t
u=t}else u=!1
return u},
gdY:function(){var u=this.f
if(typeof u!=="number")return u.R()
return u<this.r},
gdW:function(){return this.r<this.a.length},
gd6:function(){return this.b===4&&C.a.a5(this.a,"http")},
gd7:function(){return this.b===5&&C.a.a5(this.a,"https")},
gbJ:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gd6())q=t.x="http"
else if(t.gd7()){t.x="https"
q="https"}else if(q===4&&C.a.a5(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a5(t.a,r)){t.x=r
q=r}else{q=C.a.v(t.a,0,q)
t.x=q}return q},
gej:function(){var u=this.c,t=this.b+3
return u>t?C.a.v(this.a,t,u-1):""},
gcm:function(a){var u=this.c
return u>0?C.a.v(this.a,u,this.d):""},
gbC:function(a){var u,t=this
if(t.gdX()){u=t.d
if(typeof u!=="number")return u.A()
return P.eM(C.a.v(t.a,u+1,t.e),null,null)}if(t.gd6())return 80
if(t.gd7())return 443
return 0},
gea:function(a){return C.a.v(this.a,this.e,this.f)},
gcA:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.R()
return u<t?C.a.v(this.a,u+1,t):""},
gdU:function(){var u=this.r,t=this.a
return u<t.length?C.a.ac(t,u+1):""},
gcB:function(){var u=this,t=u.f
if(typeof t!=="number")return t.R()
if(t>=u.r)return C.X
t=P.k
return new P.dI(P.lI(u.gcA(u)),[t,t])},
ed:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbJ(),m=n==="file",l=p.c,k=l>0?C.a.v(p.a,p.b+3,l):"",j=p.gdX()?p.gbC(p):o
l=p.c
if(l>0)u=C.a.v(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.v(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a5(t,"/"))t="/"+t
r=P.kR(o,0,0,b)
s=p.r
q=s<l.length?C.a.ac(l,s+1):o
return new P.bF(n,k,u,j,t,r,q)},
gI:function(a){var u=this.y
return u==null?this.y=C.a.gI(this.a):u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.Q(b).$ikL&&this.a===b.h(0)},
h:function(a){return this.a},
$ikL:1}
P.j9.prototype={}
W.n.prototype={}
W.eP.prototype={
gl:function(a){return a.length}}
W.eQ.prototype={
h:function(a){return String(a)}}
W.eR.prototype={
h:function(a){return String(a)}}
W.bo.prototype={$ibo:1}
W.bp.prototype={$ibp:1}
W.bq.prototype={
cK:function(a,b,c){if(c!=null)return a.getContext(b,P.oy(c))
return a.getContext(b)},
em:function(a,b){return this.cK(a,b,null)},
$ibq:1}
W.b5.prototype={
gl:function(a){return a.length}}
W.f8.prototype={
gl:function(a){return a.length}}
W.I.prototype={$iI:1}
W.bT.prototype={
gl:function(a){return a.length}}
W.f9.prototype={}
W.ai.prototype={}
W.at.prototype={}
W.fa.prototype={
gl:function(a){return a.length}}
W.fb.prototype={
gl:function(a){return a.length}}
W.fe.prototype={
gl:function(a){return a.length}}
W.an.prototype={$ian:1}
W.ff.prototype={
h:function(a){return String(a)}}
W.cW.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[[P.ad,P.af]]},
$av:function(){return[[P.ad,P.af]]},
$ih:1,
$ah:function(){return[[P.ad,P.af]]},
$io:1,
$ao:function(){return[[P.ad,P.af]]}}
W.cX.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaL(a))+" x "+H.e(this.gaF(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
if(!u.$iad)return!1
return a.left===u.gbA(b)&&a.top===u.gbG(b)&&this.gaL(a)===u.gaL(b)&&this.gaF(a)===u.gaF(b)},
gI:function(a){return W.lQ(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(this.gaL(a)),C.d.gI(this.gaF(a)))},
gdz:function(a){return a.bottom},
gaF:function(a){return a.height},
gbA:function(a){return a.left},
gcD:function(a){return a.right},
gbG:function(a){return a.top},
gaL:function(a){return a.width},
$iad:1,
$aad:function(){return[P.af]}}
W.fg.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[P.k]},
$av:function(){return[P.k]},
$ih:1,
$ah:function(){return[P.k]},
$io:1,
$ao:function(){return[P.k]}}
W.fh.prototype={
gl:function(a){return a.length}}
W.j7.prototype={
gl:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var u=this.cF(this)
return new J.a7(u,u.length)},
$av:function(){return[W.V]},
$ah:function(){return[W.V]},
$ao:function(){return[W.V]}}
W.V.prototype={
ghs:function(a){return new W.ja(a)},
gca:function(a){return new W.j7(a,a.children)},
gdB:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.R()
if(s<0)s=-s*0
if(typeof r!=="number")return r.R()
if(r<0)r=-r*0
return new P.ad(u,t,s,r,[P.af])},
h:function(a){return a.localName},
aj:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.lj
if(u==null){u=H.c([],[W.aQ])
t=new W.dg(u)
u.push(W.lP(null))
u.push(W.lR())
$.lj=t
d=t}else d=u
u=$.li
if(u==null){u=new W.eA(d)
$.li=u
c=u}else{u.a=d
c=u}}if($.aH==null){u=document
t=u.implementation.createHTMLDocument("")
$.aH=t
$.ky=t.createRange()
s=$.aH.createElement("base")
s.href=u.baseURI
$.aH.head.appendChild(s)}u=$.aH
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aH
if(!!this.$ibp)r=u.body
else{r=u.createElement(a.tagName)
$.aH.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.W(C.U,a.tagName)){$.ky.selectNodeContents(r)
q=$.ky.createContextualFragment(b)}else{r.innerHTML=b
q=$.aH.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aH.body
if(r==null?u!=null:r!==u)J.l9(r)
c.cL(q)
document.adoptNode(q)
return q},
hA:function(a,b,c){return this.aj(a,b,c,null)},
eo:function(a,b){a.textContent=null
a.appendChild(this.aj(a,b,null,null))},
$iV:1,
gef:function(a){return a.tagName}}
W.fl.prototype={
$1:function(a){return!!J.Q(a).$iV}}
W.i.prototype={$ii:1}
W.f.prototype={
hk:function(a,b,c,d){if(c!=null)this.eJ(a,b,c,!1)},
eJ:function(a,b,c,d){return a.addEventListener(b,H.bK(c,1),!1)}}
W.au.prototype={$iau:1}
W.bW.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.au]},
$av:function(){return[W.au]},
$ih:1,
$ah:function(){return[W.au]},
$io:1,
$ao:function(){return[W.au]},
$ibW:1}
W.fr.prototype={
gl:function(a){return a.length}}
W.fv.prototype={
gl:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.fB.prototype={
gl:function(a){return a.length}}
W.bY.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.F]},
$av:function(){return[W.F]},
$ih:1,
$ah:function(){return[W.F]},
$io:1,
$ao:function(){return[W.F]}}
W.aL.prototype={$iaL:1,
gdC:function(a){return a.data}}
W.bZ.prototype={$ibZ:1}
W.bv.prototype={$ibv:1}
W.fT.prototype={
h:function(a){return String(a)}}
W.hd.prototype={
gl:function(a){return a.length}}
W.c4.prototype={$ic4:1}
W.he.prototype={
i:function(a,b){return P.b_(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b_(u.value[1]))}},
ga6:function(a){var u=H.c([],[P.k])
this.H(a,new W.hf(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iS:1,
$aS:function(){return[P.k,null]}}
W.hf.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hg.prototype={
i:function(a,b){return P.b_(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b_(u.value[1]))}},
ga6:function(a){var u=H.c([],[P.k])
this.H(a,new W.hh(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iS:1,
$aS:function(){return[P.k,null]}}
W.hh.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aO.prototype={$iaO:1}
W.hi.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aO]},
$av:function(){return[W.aO]},
$ih:1,
$ah:function(){return[W.aO]},
$io:1,
$ao:function(){return[W.aO]}}
W.ax.prototype={$iax:1}
W.a4.prototype={
gaM:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.d(P.lz("No elements"))
if(t>1)throw H.d(P.lz("More than one element"))
return u.firstChild},
ab:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.b(t,b)
u.replaceChild(c,t[b])},
gU:function(a){var u=this.a.childNodes
return new W.d_(u,u.length)},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$av:function(){return[W.F]},
$ah:function(){return[W.F]},
$ao:function(){return[W.F]}}
W.F.prototype={
ii:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
il:function(a,b){var u,t
try{u=a.parentNode
J.mC(u,b,a)}catch(t){H.ag(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.es(a):u},
h1:function(a,b,c){return a.replaceChild(b,c)},
$iF:1}
W.df.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.F]},
$av:function(){return[W.F]},
$ih:1,
$ah:function(){return[W.F]},
$io:1,
$ao:function(){return[W.F]}}
W.aR.prototype={$iaR:1,
gl:function(a){return a.length}}
W.hy.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aR]},
$av:function(){return[W.aR]},
$ih:1,
$ah:function(){return[W.aR]},
$io:1,
$ao:function(){return[W.aR]}}
W.hJ.prototype={
i:function(a,b){return P.b_(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b_(u.value[1]))}},
ga6:function(a){var u=H.c([],[P.k])
this.H(a,new W.hK(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iS:1,
$aS:function(){return[P.k,null]}}
W.hK.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hM.prototype={
gl:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.hY.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aS]},
$av:function(){return[W.aS]},
$ih:1,
$ah:function(){return[W.aS]},
$io:1,
$ao:function(){return[W.aS]}}
W.aT.prototype={$iaT:1}
W.hZ.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aT]},
$av:function(){return[W.aT]},
$ih:1,
$ah:function(){return[W.aT]},
$io:1,
$ao:function(){return[W.aT]}}
W.aU.prototype={$iaU:1,
gl:function(a){return a.length}}
W.i2.prototype={
i:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
H:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga6:function(a){var u=H.c([],[P.k])
this.H(a,new W.i3(u))
return u},
gl:function(a){return a.length},
$iS:1,
$aS:function(){return[P.k,P.k]}}
W.i3.prototype={
$2:function(a,b){return this.a.push(a)}}
W.az.prototype={$iaz:1}
W.dw.prototype={
aj:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bL(a,b,c,d)
u=W.mT("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a4(t).ab(0,new W.a4(u))
return t}}
W.i6.prototype={
aj:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bL(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.aj(u.createElement("table"),b,c,d)
u.toString
u=new W.a4(u)
s=u.gaM(u)
s.toString
u=new W.a4(s)
r=u.gaM(u)
t.toString
r.toString
new W.a4(t).ab(0,new W.a4(r))
return t}}
W.i7.prototype={
aj:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bL(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.aj(u.createElement("table"),b,c,d)
u.toString
u=new W.a4(u)
s=u.gaM(u)
t.toString
s.toString
new W.a4(t).ab(0,new W.a4(s))
return t}}
W.cg.prototype={$icg:1}
W.aV.prototype={$iaV:1}
W.aA.prototype={$iaA:1}
W.ia.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aA]},
$av:function(){return[W.aA]},
$ih:1,
$ah:function(){return[W.aA]},
$io:1,
$ao:function(){return[W.aA]}}
W.ib.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aV]},
$av:function(){return[W.aV]},
$ih:1,
$ah:function(){return[W.aV]},
$io:1,
$ao:function(){return[W.aV]}}
W.ih.prototype={
gl:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.bA.prototype={$ibA:1}
W.il.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aW]},
$av:function(){return[W.aW]},
$ih:1,
$ah:function(){return[W.aW]},
$io:1,
$ao:function(){return[W.aW]}}
W.im.prototype={
gl:function(a){return a.length}}
W.bj.prototype={}
W.iJ.prototype={
h:function(a){return String(a)}}
W.j0.prototype={
gl:function(a){return a.length}}
W.bk.prototype={
ghD:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.y("deltaY is not supported"))},
ghC:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.y("deltaX is not supported"))},
$ibk:1}
W.cp.prototype={
h3:function(a,b){return a.requestAnimationFrame(H.bK(b,1))},
eU:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.j8.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.I]},
$av:function(){return[W.I]},
$ih:1,
$ah:function(){return[W.I]},
$io:1,
$ao:function(){return[W.I]}}
W.dS.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
if(!u.$iad)return!1
return a.left===u.gbA(b)&&a.top===u.gbG(b)&&a.width===u.gaL(b)&&a.height===u.gaF(b)},
gI:function(a){return W.lQ(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(a.width),C.d.gI(a.height))},
gaF:function(a){return a.height},
gaL:function(a){return a.width}}
W.jd.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aK]},
$av:function(){return[W.aK]},
$ih:1,
$ah:function(){return[W.aK]},
$io:1,
$ao:function(){return[W.aK]}}
W.e9.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.F]},
$av:function(){return[W.F]},
$ih:1,
$ah:function(){return[W.F]},
$io:1,
$ao:function(){return[W.F]}}
W.jr.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aU]},
$av:function(){return[W.aU]},
$ih:1,
$ah:function(){return[W.aU]},
$io:1,
$ao:function(){return[W.aU]}}
W.jv.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.az]},
$av:function(){return[W.az]},
$ih:1,
$ah:function(){return[W.az]},
$io:1,
$ao:function(){return[W.az]}}
W.j6.prototype={
H:function(a,b){var u,t,s,r,q
for(u=this.ga6(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.p)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga6:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.k])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.b(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aS:function(){return[P.k,P.k]}}
W.ja.prototype={
i:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga6(this).length}}
W.jb.prototype={}
W.jc.prototype={
$1:function(a){return this.a.$1(a)}}
W.cq.prototype={
eC:function(a){var u
if($.cr.ghY($.cr)){for(u=0;u<262;++u)$.cr.m(0,C.T[u],W.oJ())
for(u=0;u<12;++u)$.cr.m(0,C.p[u],W.oK())}},
aV:function(a){return $.my().W(0,W.bU(a))},
aw:function(a,b,c){var u=$.cr.i(0,H.e(W.bU(a))+"::"+b)
if(u==null)u=$.cr.i(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaQ:1}
W.L.prototype={
gU:function(a){return new W.d_(a,this.gl(a))}}
W.dg.prototype={
aV:function(a){return C.b.dt(this.a,new W.hq(a))},
aw:function(a,b,c){return C.b.dt(this.a,new W.hp(a,b,c))},
$iaQ:1}
W.hq.prototype={
$1:function(a){return a.aV(this.a)}}
W.hp.prototype={
$1:function(a){return a.aw(this.a,this.b,this.c)}}
W.eh.prototype={
eF:function(a,b,c,d){var u,t,s
this.a.ab(0,c)
u=b.bI(0,new W.jo())
t=b.bI(0,new W.jp())
this.b.ab(0,u)
s=this.c
s.ab(0,C.w)
s.ab(0,t)},
aV:function(a){return this.a.W(0,W.bU(a))},
aw:function(a,b,c){var u=this,t=W.bU(a),s=u.c
if(s.W(0,H.e(t)+"::"+b))return u.d.hn(c)
else if(s.W(0,"*::"+b))return u.d.hn(c)
else{s=u.b
if(s.W(0,H.e(t)+"::"+b))return!0
else if(s.W(0,"*::"+b))return!0
else if(s.W(0,H.e(t)+"::*"))return!0
else if(s.W(0,"*::*"))return!0}return!1},
$iaQ:1}
W.jo.prototype={
$1:function(a){return!C.b.W(C.p,a)}}
W.jp.prototype={
$1:function(a){return C.b.W(C.p,a)}}
W.jx.prototype={
aw:function(a,b,c){if(this.ew(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.W(0,b)
return!1}}
W.jy.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jw.prototype={
aV:function(a){var u=J.Q(a)
if(!!u.$icd)return!1
u=!!u.$ij
if(u&&W.bU(a)==="foreignObject")return!1
if(u)return!0
return!1},
aw:function(a,b,c){if(b==="is"||C.a.a5(b,"on"))return!1
return this.aV(a)},
$iaQ:1}
W.d_.prototype={
C:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cK(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gJ:function(a){return this.d}}
W.aQ.prototype={}
W.jm.prototype={}
W.eA.prototype={
cL:function(a){new W.jI(this).$2(a,null)},
b6:function(a,b){if(b==null)J.l9(a)
else b.removeChild(a)},
h8:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mG(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ag(r)}t="element unprintable"
try{t=J.a6(a)}catch(r){H.ag(r)}try{s=W.bU(a)
this.h7(a,b,p,t,s,o,n)}catch(r){if(H.ag(r) instanceof P.am)throw r
else{this.b6(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
h7:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.b6(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aV(a)){p.b6(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.aw(a,"is",g)){p.b6(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga6(f)
t=H.c(u.slice(0),[H.cH(u,0)])
for(s=f.ga6(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.b(t,s)
r=t[s]
if(!p.a.aw(a,J.mJ(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.Q(a).$icg)p.cL(a.content)}}
W.jI.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.h8(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b6(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ag(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dR.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.cw.prototype={}
W.cx.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.en.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.cy.prototype={}
W.cz.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
P.js.prototype={
dT:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
cI:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.Q(a)
if(!!u.$iaa)return new Date(a.a)
if(!!u.$ink)throw H.d(P.iA("structured clone of RegExp"))
if(!!u.$iau)return a
if(!!u.$ibo)return a
if(!!u.$ibW)return a
if(!!u.$iaL)return a
if(!!u.$ic6||!!u.$ibe||!!u.$ic4)return a
if(!!u.$iS){t=p.dT(a)
s=p.b
r=s.length
if(t>=r)return H.b(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.b(s,t)
s[t]=q
u.H(a,new P.ju(o,p))
return o.a}if(!!u.$io){t=p.dT(a)
o=p.b
if(t>=o.length)return H.b(o,t)
q=o[t]
if(q!=null)return q
return p.hz(a,t)}throw H.d(P.iA("structured clone of other type"))},
hz:function(a,b){var u,t=J.cE(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.b(q,b)
q[b]=r
for(u=0;u<s;++u){q=this.cI(t.i(a,u))
if(u>=r.length)return H.b(r,u)
r[u]=q}return r}}
P.ju.prototype={
$2:function(a,b){this.a.a[a]=this.b.cI(b)},
$S:3}
P.ex.prototype={$iaL:1,
gdC:function(a){return this.a}}
P.jT.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jt.prototype={}
P.fs.prototype={
gbo:function(){var u=this.b,t=H.kY(u,"v",0)
return new H.fY(new H.co(u,new P.ft(),[t]),new P.fu(),[t,W.V])},
m:function(a,b,c){var u=this.gbo()
J.mH(u.b.$1(J.eO(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.ah(this.gbo().a)},
i:function(a,b){var u=this.gbo()
return u.b.$1(J.eO(u.a,b))},
gU:function(a){var u=P.ln(this.gbo(),!1,W.V)
return new J.a7(u,u.length)},
$av:function(){return[W.V]},
$ah:function(){return[W.V]},
$ao:function(){return[W.V]}}
P.ft.prototype={
$1:function(a){return!!J.Q(a).$iV}}
P.fu.prototype={
$1:function(a){return H.l(a,"$iV")}}
P.ji.prototype={
gcD:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.w(t)
return u+t},
gdz:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.w(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
t:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.Q(b)
if(!!u.$iad){t=q.a
if(t==u.gbA(b)){s=q.b
if(s==u.gbG(b)){r=q.c
if(typeof t!=="number")return t.A()
if(typeof r!=="number")return H.w(r)
if(t+r===u.gcD(b)){t=q.d
if(typeof s!=="number")return s.A()
if(typeof t!=="number")return H.w(t)
u=s+t===u.gdz(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u=this,t=u.a,s=J.cL(t),r=u.b,q=J.cL(r),p=u.c
if(typeof t!=="number")return t.A()
if(typeof p!=="number")return H.w(p)
p=C.c.gI(t+p)
t=u.d
if(typeof r!=="number")return r.A()
if(typeof t!=="number")return H.w(t)
t=C.c.gI(r+t)
return P.nI(P.jf(P.jf(P.jf(P.jf(0,s),q),p),t))}}
P.ad.prototype={
gbA:function(a){return this.a},
gbG:function(a){return this.b},
gaL:function(a){return this.c},
gaF:function(a){return this.d}}
P.bc.prototype={$ibc:1}
P.fM.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.M(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$av:function(){return[P.bc]},
$ih:1,
$ah:function(){return[P.bc]},
$io:1,
$ao:function(){return[P.bc]}}
P.bg.prototype={$ibg:1}
P.ht.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.M(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$av:function(){return[P.bg]},
$ih:1,
$ah:function(){return[P.bg]},
$io:1,
$ao:function(){return[P.bg]}}
P.hB.prototype={
gl:function(a){return a.length}}
P.cd.prototype={$icd:1}
P.i5.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.M(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$av:function(){return[P.k]},
$ih:1,
$ah:function(){return[P.k]},
$io:1,
$ao:function(){return[P.k]}}
P.j.prototype={
gca:function(a){return new P.fs(a,new W.a4(a))},
aj:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.aQ])
p.push(W.lP(null))
p.push(W.lR())
p.push(new W.jw())
c=new W.eA(new W.dg(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).hA(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a4(s)
q=p.gaM(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ij:1}
P.bi.prototype={$ibi:1}
P.io.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.M(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$av:function(){return[P.bi]},
$ih:1,
$ah:function(){return[P.bi]},
$io:1,
$ao:function(){return[P.bi]}}
P.e1.prototype={}
P.e2.prototype={}
P.ec.prototype={}
P.ed.prototype={}
P.eo.prototype={}
P.ep.prototype={}
P.ev.prototype={}
P.ew.prototype={}
P.bB.prototype={$ih:1,
$ah:function(){return[P.x]},
$io:1,
$ao:function(){return[P.x]}}
P.eT.prototype={
gl:function(a){return a.length}}
P.eU.prototype={
i:function(a,b){return P.b_(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b_(u.value[1]))}},
ga6:function(a){var u=H.c([],[P.k])
this.H(a,new P.eV(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iS:1,
$aS:function(){return[P.k,null]}}
P.eV.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eW.prototype={
gl:function(a){return a.length}}
P.bn.prototype={}
P.hu.prototype={
gl:function(a){return a.length}}
P.dQ.prototype={}
P.dm.prototype={
ir:function(a,b,c,d,e,f,g){var u,t=J.Q(g)
if(!!t.$iaL)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oz(g))
return}if(!!t.$ibZ)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.cM("Incorrect number or type of arguments"))}}
P.i0.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.M(b,a,null,null,null))
return P.b_(a.item(b))},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$av:function(){return[[P.S,,,]]},
$ih:1,
$ah:function(){return[[P.S,,,]]},
$io:1,
$ao:function(){return[[P.S,,,]]}}
P.ek.prototype={}
P.el.prototype={}
T.aE.prototype={
aG:function(a,b){return!0},
h:function(a){return"all"}}
T.d0.prototype={
aG:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)if(u[s].aG(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.p)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.bd.prototype={}
T.a8.prototype={
aG:function(a,b){return!this.er(0,b)},
h:function(a){return"!["+this.cP(0)+"]"}}
T.hE.prototype={
aG:function(a,b){return this.a<=b&&this.b>=b},
h:function(a){var u=H.by(this.a),t=H.by(this.b)
return u+".."+t}}
T.hN.prototype={
eA:function(a){var u,t
if(a.a.length<=0)throw H.d(P.q("May not create a Set with zero characters."))
u=new H.P([P.x,P.aD])
for(t=new H.c1(a,a.gl(a));t.C();)u.m(0,t.d,!0)
this.a=u},
aG:function(a,b){return this.a.bv(0,b)},
h:function(a){var u=this.a
return P.cf(u.ga6(u),0,null)}}
R.du.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.dE(this.a.j(0,b))
r.a=H.c([],[T.bd])
r.c=!1
this.c.push(r)
return r},
hO:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
if(r.aG(0,a))return r}return},
h:function(a){return this.b}}
R.dB.prototype={
h:function(a){var u=H.l3(this.b,"\n","\\n"),t=H.l3(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.dC.prototype={
aI:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.p)(c),++t){s=c[t]
this.c.m(0,s,b)}},
h:function(a){return this.b}}
R.ii.prototype={
j:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.du(this,b)
u.c=H.c([],[R.dE])
this.a.m(0,b,u)}return u},
P:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.dC(a)
u=P.k
t.c=new H.P([u,u])
this.b.m(0,a,t)}return t},
eh:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.c([],[R.dB]),k=this.c,j=[P.x],i=H.c([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)l.push(t)
return l}r=C.a.F(a,s)
q=k.hO(r)
if(q==null){if(t==null){i.push(r)
p=P.cf(i,0,m)
throw H.d(P.q("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}l.push(t)
s=t.c+1
i=H.c([],j)
k=this.c
t=m}else{if(!q.c)i.push(r)
k=q.b
if(k.d!=null){p=P.cf(i,0,m)
o=k.d
n=o.c.i(0,p)
t=new R.dB(n==null?o.b:n,p,s)}++s}}}}
R.dE.prototype={
h:function(a){return this.b.b+": "+this.cP(0)}}
O.aF.prototype={
bm:function(a){this.a=H.c([],[a])
this.c=this.b=null},
cM:function(a,b,c){this.b=b
this.c=a},
b0:function(a,b){return this.cM(a,null,b)},
da:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cT:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.a7(u,u.length)},
K:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.kY(s,"aF",0)]
if(s.da(H.c([b],r))){u=s.a
t=u.length
u.push(b)
s.cT(t,H.c([b],r))}},
ab:function(a,b){var u,t
if(this.da(b)){u=this.a
t=u.length
C.b.ab(u,b)
this.cT(t,b)}},
$ih:1}
O.c3.prototype={
gl:function(a){return this.a.length},
gq:function(){var u=this.b
return u==null?this.b=D.E():u},
aN:function(){var u=this.b
if(u!=null)u.E(null)},
ga4:function(a){var u=this.a
if(u.length>0)return C.b.gax(u)
else return V.bw()},
bE:function(a){var u=this.a
if(a==null)u.push(V.bw())
else u.push(a)
this.aN()},
aH:function(){var u=this.a
if(u.length>0){u.pop()
this.aN()}}}
E.eZ.prototype={}
E.aI.prototype={
sa7:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gq().D(0,s.ge7())
u=s.c
if(u!=null)u.gq().n(0,s.ge7())
t=new D.B("shape",r,s.c)
t.b=!0
s.bB(t)}},
ar:function(a,b){var u
for(u=this.y.a,u=new J.a7(u,u.length);u.C();)u.d.ar(0,b)},
ae:function(a){var u,t=this,s=a.dx
s.a.push(s.ga4(s))
s.aN()
a.cz(t.f)
s=a.dy
u=(s&&C.b).gax(s)
if(u!=null&&t.d!=null)u.ec(a,t)
for(s=t.y.a,s=new J.a7(s,s.length);s.C();)s.d.ae(a)
a.cw()
a.dx.aH()},
bB:function(a){var u=this.z
if(u!=null)u.E(a)},
V:function(){return this.bB(null)},
e8:function(a){this.e=null
this.bB(a)},
i6:function(){return this.e8(null)},
e6:function(a){this.bB(a)},
i3:function(){return this.e6(null)},
i2:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ge5(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bt()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.V()},
i5:function(a,b){var u,t
for(u=b.gU(b),t=this.ge5();u.C();)u.gJ(u).gq().D(0,t)
this.V()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hF.prototype={
ez:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aa(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.c3()
t=[V.aN]
u.a=H.c([],t)
u.gq().n(0,new E.hG(s))
s.cy=u
u=new O.c3()
u.a=H.c([],t)
u.gq().n(0,new E.hH(s))
s.db=u
u=new O.c3()
u.a=H.c([],t)
u.gq().n(0,new E.hI(s))
s.dx=u
u=H.c([],[O.dx])
s.dy=u
u.push(null)
s.fr=new H.P([P.k,A.dn])},
gih:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga4(s)
u=t.db
u=t.z=s.u(0,u.ga4(u))
s=u}return s},
cz:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gax(u):a)},
cw:function(){var u=this.dy
if(u.length>1)u.pop()},
ds:function(a){var u=a.b
if(u.length===0)throw H.d(P.q("May not cache a shader with no name."))
if(this.fr.bv(0,u))throw H.d(P.q('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)}}
E.hG.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hH.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hI.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dz.prototype={
cW:function(a){this.ee()},
cV:function(){return this.cW(null)},
ghT:function(){var u,t=this,s=Date.now(),r=C.c.aa(P.lh(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aa(s,!1)
return u/r},
dd:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.u()
if(typeof r!=="number")return H.w(r)
u=C.d.cl(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.u()
t=C.d.cl(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lC(C.n,s.gim())}},
ee:function(){if(!this.ch){this.ch=!0
var u=window
C.D.eU(u)
C.D.h3(u,W.m1(new E.ig(this),P.af))}},
ik:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dd()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aa(r,!1)
s.y=P.lh(r-s.r.a).a*0.000001
r=s.cy
C.b.sl(r.a,0)
r.aN()
r=s.db
C.b.sl(r.a,0)
r.aN()
r=s.dx
C.b.sl(r.a,0)
r.aN()
r=s.dy;(r&&C.b).sl(r,0)
s.dy.push(null)
o.ae(p.e)}s=p.z
if(s!=null)s.E(null)}catch(q){u=H.ag(q)
t=H.kZ(q)
P.l2("Error: "+H.e(u))
P.l2("Stack: "+H.e(t))
throw H.d(u)}}}
E.ig.prototype={
$1:function(a){var u=this.a
if(u.ch){u.ch=!1
u.ik()}}}
Z.dN.prototype={}
Z.cO.prototype={
a2:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ag(s)
t=P.q('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.d(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.dO.prototype={}
Z.bR.prototype={
aE:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a2:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a2(a)},
aK:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ae:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.k],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)p.push(u[s].h(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a6(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.k(p,", ")+"\nAttrs:   "+C.b.k(r,", ")}}
Z.bu.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.cc(this.c))+"'")+"]"}}
Z.aZ.prototype={
gcO:function(a){var u=this.a,t=(u&$.ar().a)!==0?3:0
if((u&$.b2().a)!==0)t+=3
if((u&$.b1().a)!==0)t+=3
if((u&$.bm().a)!==0)t+=2
if((u&$.b3().a)!==0)t+=3
if((u&$.cI().a)!==0)t+=3
if((u&$.cJ().a)!==0)t+=4
if((u&$.bO().a)!==0)++t
return(u&$.b0().a)!==0?t+4:t},
ho:function(a){var u,t=$.ar(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.b2()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b1()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b3()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cI()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cJ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bO()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b0()
if((s&t.a)!==0)if(u===a)return t
return $.mw()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aZ))return!1
return this.a===b.a},
h:function(a){var u=H.c([],[P.k]),t=this.a
if((t&$.ar().a)!==0)u.push("Pos")
if((t&$.b2().a)!==0)u.push("Norm")
if((t&$.b1().a)!==0)u.push("Binm")
if((t&$.bm().a)!==0)u.push("Txt2D")
if((t&$.b3().a)!==0)u.push("TxtCube")
if((t&$.cI().a)!==0)u.push("Clr3")
if((t&$.cJ().a)!==0)u.push("Clr4")
if((t&$.bO().a)!==0)u.push("Weight")
if((t&$.b0().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.k(u,"|")}}
D.f1.prototype={}
D.bt.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.c([],[{func:1,ret:-1,args:[D.Y]}]):u).push(b)},
D:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.W(s,b)
if(s===!0){s=t.a
u=(s&&C.b).D(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.W(s,b)
if(s===!0){s=t.b
u=(s&&C.b).D(s,b)||u}return u},
E:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.Y()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.H(P.ln(u,!0,{func:1,ret:-1,args:[D.Y]}),new D.fo(q))
u=r.b
if(u!=null){r.b=H.c([],[{func:1,ret:-1,args:[D.Y]}])
C.b.H(u,new D.fp(q))}return!0},
hI:function(){return this.E(null)},
ay:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}}}
D.fo.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fp.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.Y.prototype={}
D.b7.prototype={}
D.b8.prototype={}
D.B.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cP.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cP))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.d5.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d5))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.fL.prototype={
ib:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
i7:function(a){this.c=a.b
this.d.D(0,a.a)
return!1}}
X.d9.prototype={}
X.fU.prototype={
b4:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.u()
u=b.b
t=q.ch
if(typeof u!=="number")return u.u()
s=o.A(0,new V.T(n*m,u*t))
t=q.a.gaW()
r=new X.aP(a,V.ay(),q.x,t,s)
r.b=!0
q.z=new P.aa(p,!1)
q.x=s
return r},
cv:function(a,b){this.r=a.a
return!1},
bg:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.en()
if(typeof u!=="number")return u.am()
this.r=(u&~t)>>>0
return!1},
bf:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.b4(a,b))
return!0},
ic:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaW()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.u()
q=a.b
p=o.cy
if(typeof q!=="number")return q.u()
t=new X.c5(new V.H(s*r,q*p),u,t)
t.b=!0
n.E(t)
return!0},
fw:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.d9(c,r.a.gaW(),b)
s.b=!0
t.E(s)
r.y=new P.aa(u,!1)
r.x=V.ay()}}
X.aj.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aj))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aP.prototype={}
X.hj.prototype={
bR:function(a,b,c){var u=this,t=new P.aa(Date.now(),!1),s=u.a.gaW(),r=new X.aP(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cv:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.bR(a,b,!0))
return!0},
bg:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.en()
if(typeof t!=="number")return t.am()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.bR(a,b,!0))
return!0},
bf:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.bR(a,b,!1))
return!0},
ie:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaW()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.u()
r=a.b
q=p.ch
if(typeof r!=="number")return r.u()
u=new X.c5(new V.H(t*s,r*q),u,b)
u.b=!0
o.E(u)
return!0},
gdE:function(){var u=this.b
return u==null?this.b=D.E():u},
gcH:function(){var u=this.c
return u==null?this.c=D.E():u},
ge4:function(){var u=this.d
return u==null?this.d=D.E():u}}
X.c5.prototype={}
X.hA.prototype={}
X.dD.prototype={}
X.ik.prototype={
b4:function(a,b){var u=this,t=new P.aa(Date.now(),!1),s=a.length>0?a[0]:V.ay(),r=u.a.gaW(),q=new X.dD(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
ia:function(a){var u=this.b
if(u==null)return!1
u.E(this.b4(a,!0))
return!0},
i8:function(a){var u=this.c
if(u==null)return!1
u.E(this.b4(a,!0))
return!0},
i9:function(a){var u=this.d
if(u==null)return!1
u.E(this.b4(a,!1))
return!0}}
X.dJ.prototype={
gaW:function(){var u=this.a,t=C.i.gdB(u).c
t.toString
u=C.i.gdB(u).d
u.toString
return V.lx(0,0,t,u)},
d2:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.d5(u,new X.aj(t,a.altKey,a.shiftKey))},
aT:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.aj(t,a.altKey,a.shiftKey)},
c6:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.aj(t,a.altKey,a.shiftKey)},
aC:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.L()
u=t.top
if(typeof r!=="number")return r.L()
return new V.T(s-q,r-u)},
b5:function(a){return new V.H(a.movementX,a.movementY)},
c1:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.T])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
q=C.d.ap(r.pageX)
C.d.ap(r.pageY)
p=o.left
C.d.ap(r.pageX)
n.push(new V.T(q-p,C.d.ap(r.pageY)-o.top))}return n},
aA:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cP(u,new X.aj(t,a.altKey,a.shiftKey))},
bT:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.L()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.L()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fp:function(a){this.f=!0},
fb:function(a){this.f=!1},
fj:function(a){if(this.f&&this.bT(a))a.preventDefault()},
fu:function(a){var u
if(!this.f)return
u=this.d2(a)
this.b.ib(u)},
fs:function(a){var u
if(!this.f)return
u=this.d2(a)
this.b.i7(u)},
fA:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aT(a)
if(r.x){u=r.aA(a)
t=r.b5(a)
if(r.d.cv(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.aA(a)
s=r.aC(a)
if(r.c.cv(u,s))a.preventDefault()},
fE:function(a){var u,t,s,r=this
r.aT(a)
u=r.aA(a)
if(r.x){t=r.b5(a)
if(r.d.bg(u,t))a.preventDefault()
return}if(r.r)return
s=r.aC(a)
if(r.c.bg(u,s))a.preventDefault()},
fn:function(a){var u,t,s,r=this
if(!r.bT(a)){r.aT(a)
u=r.aA(a)
if(r.x){t=r.b5(a)
if(r.d.bg(u,t))a.preventDefault()
return}if(r.r)return
s=r.aC(a)
if(r.c.bg(u,s))a.preventDefault()}},
fC:function(a){var u,t,s,r=this
r.aT(a)
u=r.aA(a)
if(r.x){t=r.b5(a)
if(r.d.bf(u,t))a.preventDefault()
return}if(r.r)return
s=r.aC(a)
if(r.c.bf(u,s))a.preventDefault()},
fl:function(a){var u,t,s,r=this
if(!r.bT(a)){r.aT(a)
u=r.aA(a)
if(r.x){t=r.b5(a)
if(r.d.bf(u,t))a.preventDefault()
return}if(r.r)return
s=r.aC(a)
if(r.c.bf(u,s))a.preventDefault()}},
fG:function(a){var u,t,s=this
s.aT(a)
u=new V.H((a&&C.C).ghC(a),C.C.ghD(a)).p(0,180)
if(s.x){if(s.d.ic(u))a.preventDefault()
return}if(s.r)return
t=s.aC(a)
if(s.c.ie(u,t))a.preventDefault()},
fI:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aA(s.y)
t=s.aC(s.y)
s.d.fw(u,t,r)}},
fY:function(a){var u,t=this
t.a.focus()
t.f=!0
t.c6(a)
u=t.c1(a)
if(t.e.ia(u))a.preventDefault()},
fU:function(a){var u
this.c6(a)
u=this.c1(a)
if(this.e.i8(u))a.preventDefault()},
fW:function(a){var u
this.c6(a)
u=this.c1(a)
if(this.e.i9(u))a.preventDefault()}}
D.br.prototype={
az:function(a){var u=this.r
if(u!=null)u.E(a)},
eE:function(){return this.az(null)},
$iab:1}
D.ab.prototype={}
D.d6.prototype={
az:function(a){var u=this.x
if(u!=null)u.E(a)},
d9:function(a){var u=this.y
if(u!=null)u.E(a)},
fv:function(){return this.d9(null)},
fK:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){s=a[t]
if(s==null||this.eP(s))return!1}return!0},
f5:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gd8(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q instanceof D.br)this.e.push(q)
p=q.r
if(p==null){p=new D.bt()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}u=new D.b7()
u.b=!0
this.az(u)},
fO:function(a,b){var u,t,s
for(u=b.gU(b),t=this.gd8();u.C();){s=u.gJ(u)
C.b.D(this.e,s)
s.gq().D(0,t)}u=new D.b8()
u.b=!0
this.az(u)},
eP:function(a){var u=C.b.W(this.e,a)
return u},
$ah:function(){return[D.ab]},
$aaF:function(){return[D.ab]}}
D.hz.prototype={$iab:1}
D.i_.prototype={$iab:1}
V.X.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.a1.prototype={
cF:function(a){var u=this
return H.c([u.a,u.b,u.c,u.d],[P.K])},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.fn.prototype={}
V.db.prototype={
af:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.K])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.db))return!1
u=b.a
t=$.C().a
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
h:function(a){var u,t,s,r,q=this,p=[P.K],o=V.bM(H.c([q.a,q.d,q.r],p),3,0),n=V.bM(H.c([q.b,q.e,q.x],p),3,0),m=V.bM(H.c([q.c,q.f,q.y],p),3,0)
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
V.aN.prototype={
af:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.K])
return t},
cp:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.C().a)return V.bw()
u=1/b1
t=-n
s=-a0
return V.aw((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
u:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aw(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bH:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.u(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cG:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.G(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aN))return!1
u=b.a
t=$.C().a
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
h:function(a){return this.O()},
G:function(a){var u,t,s,r,q,p=this,o=[P.K],n=V.bM(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bM(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bM(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bM(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
O:function(){return this.G("")}}
V.T.prototype={
A:function(a,b){return new V.T(this.a+b.a,this.b+b.b)},
L:function(a,b){return new V.T(this.a-b.a,this.b-b.b)},
p:function(a,b){if(Math.abs(b-0)<$.C().a)return V.ay()
return new V.T(this.a/b,this.b/b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.G.prototype={
A:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.G(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.G(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if(Math.abs(b-0)<$.C().a)return V.kI()
return new V.G(this.a/b,this.b/b,this.c/b)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.G))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.ak.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ak))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.dl.prototype={
gad:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dl))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.H.prototype={
bd:function(a){return Math.sqrt(this.w(this))},
w:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.w(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.w(t)
return s*r+u*t},
u:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.u()
u=this.b
if(typeof u!=="number")return u.u()
return new V.H(t*b,u*b)},
p:function(a,b){var u,t
if(Math.abs(b-0)<$.C().a){u=$.lJ
return u==null?$.lJ=new V.H(0,0):u}u=this.a
if(typeof u!=="number")return u.p()
t=this.b
if(typeof t!=="number")return t.p()
return new V.H(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.H))return!1
u=b.a
t=this.a
s=$.C()
s.toString
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.w(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.w(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.u.prototype={
bd:function(a){return Math.sqrt(this.w(this))},
w:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cq:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.u(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aD:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.u(u*t-s*r,s*q-p*t,p*r-u*q)},
A:function(a,b){return new V.u(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.u(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.u(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if(Math.abs(b-0)<$.C().a)return V.cm()
return new V.u(this.a/b,this.b/b,this.c/b)},
e0:function(){var u=$.C().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.u))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.aX.prototype={
bd:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u,t=this
if(Math.abs(b-0)<$.C().a){u=$.lO
return u==null?$.lO=new V.aX(0,0,0,0):u}return new V.aX(t.a/b,t.b/b,t.c/b,t.d/b)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aX))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
U.f3.prototype={
bM:function(a){var u=V.p1(a,this.c,this.b)
return u},
gq:function(){var u=this.y
return u==null?this.y=D.E():u},
S:function(a){var u=this.y
if(u!=null)u.E(a)},
scJ:function(a,b){},
scr:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.C().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bM(u)}s=new D.B("maximumLocation",s,t.b)
s.b=!0
t.S(s)}},
sct:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.C().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bM(u)}s=new D.B("minimumLocation",s,t.c)
s.b=!0
t.S(s)}},
sa_:function(a,b){var u,t=this
b=t.bM(b)
u=t.d
if(!(Math.abs(u-b)<$.C().a)){t.d=b
u=new D.B("location",u,b)
u.b=!0
t.S(u)}},
scs:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.C().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.B("maximumVelocity",r,a)
r.b=!0
s.S(r)}},
sX:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.C().a)){u.f=a
t=new D.B("velocity",t,a)
t.b=!0
u.S(t)}},
scd:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.C().a)){this.x=a
u=new D.B("dampening",u,a)
u.b=!0
this.S(u)}},
ar:function(a,b){var u,t,s,r=this,q=r.f,p=$.C().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa_(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.C().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sX(u)}}}
U.cS.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.E():u},
b_:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cS))return!1
return J.z(this.a,b.a)},
h:function(a){return"Constant: "+this.a.G("          ")}}
U.bX.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.E():u},
S:function(a){var u=this.e
if(u!=null)u.E(a)},
a9:function(){return this.S(null)},
f3:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaO(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.gq()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.b7()
u.b=!0
this.S(u)},
fM:function(a,b){var u,t
for(u=b.gU(b),t=this.gaO();u.C();)u.gJ(u).gq().D(0,t)
u=new D.b8()
u.b=!0
this.S(u)},
b_:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.R()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a7(r,r.length),u=null;r.C();){q=r.d
if(q!=null){t=q.b_(0,b,c)
if(t!=null)u=u==null?t:t.u(0,u)}}s.f=u==null?V.bw():u
r=s.e
if(r!=null)r.ay(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bX))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.z(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ah:function(){return[U.ac]},
$aaF:function(){return[U.ac]},
$iac:1}
U.ac.prototype={}
U.dK.prototype={
gq:function(){var u=this.cy
return u==null?this.cy=D.E():u},
S:function(a){var u=this.cy
if(u!=null)u.E(a)},
a9:function(){return this.S(null)},
b7:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdE().n(0,u.gbU())
u.a.c.ge4().n(0,u.gbW())
u.a.c.gcH().n(0,u.gbY())
return!0},
bV:function(a){var u=this
if(!J.z(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bX:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaP")
if(!n.y)return
if(n.x){u=a.d.L(0,a.y)
u=new V.H(u.a,u.b)
u=u.w(u)
t=n.r
if(typeof t!=="number")return H.w(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.L(0,a.y)
u=new V.H(t.a,t.b).u(0,2).p(0,u.gad())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.u()
s=n.e
if(typeof s!=="number")return H.w(s)
t.sX(u*10*s)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=new V.H(s.a,s.b).u(0,2).p(0,u.gad())
s=n.b
q=r.a
if(typeof q!=="number")return q.T()
p=n.e
if(typeof p!=="number")return H.w(p)
o=n.z
if(typeof o!=="number")return H.w(o)
s.sa_(0,-q*p+o)
n.b.sX(0)
t=t.L(0,a.z)
n.Q=new V.H(t.a,t.b).u(0,2).p(0,u.gad())}n.a9()},
bZ:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.w(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.u()
s=r.e
if(typeof s!=="number")return H.w(s)
u.sX(t*10*s)
r.a9()}},
b_:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.R()
if(q<p){r.ch=p
u=b.y
r.b.ar(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aw(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iac:1}
U.dL.prototype={
gq:function(){var u=this.fx
return u==null?this.fx=D.E():u},
S:function(a){var u=this.fx
if(u!=null)u.E(a)},
a9:function(){return this.S(null)},
b7:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdE().n(0,s.gbU())
s.a.c.ge4().n(0,s.gbW())
s.a.c.gcH().n(0,s.gbY())
u=s.a.d
t=u.f
u=t==null?u.f=D.E():t
u.n(0,s.geW())
u=s.a.d
t=u.d
u=t==null?u.d=D.E():t
u.n(0,s.geY())
u=s.a.e
t=u.b
u=t==null?u.b=D.E():t
u.n(0,s.ghh())
u=s.a.e
t=u.d
u=t==null?u.d=D.E():t
u.n(0,s.ghf())
u=s.a.e
t=u.c
u=t==null?u.c=D.E():t
u.n(0,s.ghd())
return!0},
at:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.T()
u=-u}if(this.r){if(typeof t!=="number")return t.T()
t=-t}return new V.H(u,t)},
bV:function(a){var u=this
H.l(a,"$iaP")
if(!J.z(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bX:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaP")
if(!n.cx)return
if(n.ch){u=a.d.L(0,a.y)
u=new V.H(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.w(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.L(0,a.y)
u=n.at(new V.H(t.a,t.b).u(0,2).p(0,u.gad()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.w(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.w(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.at(new V.H(s.a,s.b).u(0,2).p(0,u.gad()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa_(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.L(0,a.z)
n.dx=n.at(new V.H(t.a,t.b).u(0,2).p(0,u.gad()))}n.a9()},
bZ:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.w(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.w(u)
s.sX(-t*10*u)
r.a9()}},
eX:function(a){var u=this
if(H.l(a,"$id9").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eZ:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaP")
if(!J.z(n.d,a.x.b))return
u=a.c
t=a.d
s=t.L(0,a.y)
r=n.at(new V.H(s.a,s.b).u(0,2).p(0,u.gad()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa_(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.L(0,a.z)
n.dx=n.at(new V.H(t.a,t.b).u(0,2).p(0,u.gad()))
n.a9()},
hi:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hg:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$idD")
if(!n.cx)return
if(n.ch){u=a.d.L(0,a.y)
u=new V.H(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.w(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.L(0,a.y)
u=n.at(new V.H(t.a,t.b).u(0,2).p(0,u.gad()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.w(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.w(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.at(new V.H(s.a,s.b).u(0,2).p(0,u.gad()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa_(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.L(0,a.z)
n.dx=n.at(new V.H(t.a,t.b).u(0,2).p(0,u.gad()))}n.a9()},
he:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.w(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.w(u)
s.sX(-t*10*u)
r.a9()}},
b_:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.R()
if(q<p){r.dy=p
u=b.y
r.c.ar(0,u)
r.b.ar(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aw(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.u(0,V.aw(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iac:1}
U.dM.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.E():u},
S:function(a){var u=this.r
if(u!=null)u.E(a)},
b7:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.E():t
t=r.gf0()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.E():s).n(0,t)
return!0},
f1:function(a){var u,t,s,r,q=this
if(!J.z(q.b,q.a.b.c))return
H.l(a,"$ic5")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){q.d=r
u=new D.B("zoom",u,r)
u.b=!0
q.S(u)}},
b_:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aw(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iac:1}
M.cR.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.E():u},
a1:function(a){var u=this.r
if(u!=null)u.E(a)},
b2:function(){return this.a1(null)},
fQ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga0(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.gq()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.b7()
u.b=!0
this.a1(u)},
fS:function(a,b){var u,t
for(u=b.gU(b),t=this.ga0();u.C();)u.gJ(u).gq().D(0,t)
u=new D.b8()
u.b=!0
this.a1(u)},
ae:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.a7(u,u.length);u.C();){t=u.d
if(t!=null)t.ae(a)}s.f=!1},
$ah:function(){return[M.ao]},
$aaF:function(){return[M.ao]},
$iao:1}
M.cT.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.E():u},
a1:function(a){var u=this.r
if(u!=null)u.E(a)},
b2:function(){return this.a1(null)},
sb8:function(a){var u,t,s=this
if(a==null)a=new X.fE()
u=s.b
if(u!==a){if(u!=null)u.gq().D(0,s.ga0())
t=s.b
s.b=a
a.gq().n(0,s.ga0())
u=new D.B("camera",t,s.b)
u.b=!0
s.a1(u)}},
sbh:function(a,b){var u,t,s=this
if(b==null)b=X.kA(null)
u=s.c
if(u!==b){if(u!=null)u.gq().D(0,s.ga0())
t=s.c
s.c=b
b.gq().n(0,s.ga0())
u=new D.B("target",t,s.c)
u.b=!0
s.a1(u)}},
sbi:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().D(0,t.ga0())
u=t.d
t.d=a
if(a!=null)a.gq().n(0,t.ga0())
s=new D.B("technique",u,t.d)
s.b=!0
t.a1(s)}},
ae:function(a){var u=this
a.cz(u.d)
u.c.a2(a)
u.b.a2(a)
u.e.ar(0,a)
u.e.ae(a)
u.b.aK(a)
u.c.toString
a.cw()},
$iao:1}
M.cY.prototype={
a1:function(a){var u=this.y
if(u!=null)u.E(a)},
b2:function(){return this.a1(null)},
ff:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga0(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bt()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.b7()
u.b=!0
this.a1(u)},
fh:function(a,b){var u,t
for(u=b.gU(b),t=this.ga0();u.C();)u.gJ(u).gq().D(0,t)
u=new D.b8()
u.b=!0
this.a1(u)},
sb8:function(a){var u,t,s=this
if(a==null)a=X.lr(null)
u=s.b
if(u!==a){if(u!=null)u.gq().D(0,s.ga0())
t=s.b
s.b=a
a.gq().n(0,s.ga0())
u=new D.B("camera",t,s.b)
u.b=!0
s.a1(u)}},
sbh:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gq().D(0,t.ga0())
u=t.c
t.c=b
b.gq().n(0,t.ga0())
s=new D.B("target",u,t.c)
s.b=!0
t.a1(s)}},
sbi:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().D(0,t.ga0())
u=t.d
t.d=a
if(a!=null)a.gq().n(0,t.ga0())
s=new D.B("technique",u,t.d)
s.b=!0
t.a1(s)}},
gq:function(){var u=this.y
return u==null?this.y=D.E():u},
ae:function(a){var u,t=this
a.cz(t.d)
t.c.a2(a)
t.b.a2(a)
u=t.d
if(u!=null)u.ar(0,a)
for(u=t.e.a,u=new J.a7(u,u.length);u.C();)u.d.ar(0,a)
for(u=t.e.a,u=new J.a7(u,u.length);u.C();)u.d.ae(a)
t.b.toString
a.cy.aH()
a.db.aH()
t.c.toString
a.cw()},
$iao:1}
M.ao.prototype={}
A.cN.prototype={}
A.eS.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hJ:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dD:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a2.prototype={
gas:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
h:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
t:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.a2))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.h0.prototype={
ey:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.U("")
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
A.og(c0,u)
A.oi(c0,u)
A.oh(c0,u)
A.ok(c0,u)
A.ol(c0,u)
A.oj(c0,u)
A.om(c0,u)
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
b5.e_(0,s.charCodeAt(0)==0?s:s,A.of(b5.z))
b5.Q=b5.x.i(0,"posAttr")
b5.cx=b5.x.i(0,"normAttr")
b5.ch=b5.x.i(0,"binmAttr")
b5.cy=b5.x.i(0,"txt2DAttr")
b5.db=b5.x.i(0,"txtCubeAttr")
b5.dx=b5.x.i(0,"bendAttr")
if(c0.dx)b5.id=H.l(b5.y.M(0,"invViewMat"),"$iae")
if(t)b5.dy=H.l(b5.y.M(0,"objMat"),"$iae")
if(r)b5.fr=H.l(b5.y.M(0,"viewObjMat"),"$iae")
b5.fy=H.l(b5.y.M(0,"projViewObjMat"),"$iae")
if(c0.ry)b5.k1=H.l(b5.y.M(0,"txt2DMat"),"$icj")
if(c0.x1)b5.k2=H.l(b5.y.M(0,"txtCubeMat"),"$iae")
if(c0.x2)b5.k3=H.l(b5.y.M(0,"colorMat"),"$iae")
b5.r1=H.c([],[A.ae])
t=c0.y2
if(t>0){b5.k4=b5.y.M(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.i(0,q)
if(m==null)H.t(P.q(b7+q+b8))
s.push(H.l(m,"$iae"))}}t=c0.a
if(t.a)b5.r2=H.l(b5.y.M(0,"emissionClr"),"$iJ")
if(t.c)b5.ry=H.l(b5.y.M(0,"emissionTxt"),"$ia0")
t=c0.b
if(t.a)b5.x1=H.l(b5.y.M(0,"ambientClr"),"$iJ")
if(t.c)b5.y1=H.l(b5.y.M(0,"ambientTxt"),"$ia0")
t=c0.c
if(t.a)b5.y2=H.l(b5.y.M(0,"diffuseClr"),"$iJ")
if(t.c)b5.bx=H.l(b5.y.M(0,"diffuseTxt"),"$ia0")
t=c0.d
if(t.a)b5.dF=H.l(b5.y.M(0,"invDiffuseClr"),"$iJ")
if(t.c)b5.dG=H.l(b5.y.M(0,"invDiffuseTxt"),"$ia0")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dJ=H.l(b5.y.M(0,"shininess"),"$iW")
if(s)b5.dH=H.l(b5.y.M(0,"specularClr"),"$iJ")
if(t.c)b5.dI=H.l(b5.y.M(0,"specularTxt"),"$ia0")}if(c0.f.c)b5.dK=H.l(b5.y.M(0,"bumpTxt"),"$ia0")
if(c0.cy){b5.dL=H.l(b5.y.M(0,"envSampler"),"$ia0")
t=c0.r
if(t.a)b5.dM=H.l(b5.y.M(0,"reflectClr"),"$iJ")
if(t.c)b5.dN=H.l(b5.y.M(0,"reflectTxt"),"$ia0")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dO=H.l(b5.y.M(0,"refraction"),"$iW")
if(s)b5.dP=H.l(b5.y.M(0,"refractClr"),"$iJ")
if(t.c)b5.dQ=H.l(b5.y.M(0,"refractTxt"),"$ia0")}}t=c0.y
if(t.a)b5.dR=H.l(b5.y.M(0,"alpha"),"$iW")
if(t.c)b5.dS=H.l(b5.y.M(0,"alphaTxt"),"$ia0")
t=P.x
s=[t,A.dG]
b5.ce=new H.P(s)
b5.cf=new H.P([t,[P.o,A.ci]])
b5.cg=new H.P(s)
b5.ci=new H.P([t,[P.o,A.ck]])
b5.cj=new H.P(s)
b5.ck=new H.P([t,[P.o,A.cl]])
if(c0.id){for(t=c0.z,s=t.length,r=[A.ci],l=0;l<t.length;t.length===s||(0,H.p)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.am()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.i(0,g)
if(m==null)H.t(P.q(b7+g+b8))
H.l(m,"$iJ")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.i(0,g)
if(f==null)H.t(P.q(b7+g+b8))
H.l(f,"$iJ")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.i(0,g)
if(e==null)H.t(P.q(b7+g+b8))
H.l(e,"$iJ")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.i(0,g)
if(m==null)H.t(P.q(b7+g+b8))
H.l(m,"$iJ")
o=b5.y
g=i+"s["+n+"].color"
f=o.i(0,g)
if(f==null)H.t(P.q(b7+g+b8))
H.l(f,"$iJ")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.i(0,o)
if(e==null)H.t(P.q(b7+o+b8))
H.l(e,"$ibC")
a=e}else a=b6
h.push(new A.ci(b,c,d,m,f,a))}b5.cf.m(0,j,h)
q=b5.ce
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.t(P.q(b7+o+b8))
q.m(0,j,m)}for(t=c0.Q,s=t.length,r=[A.ck],l=0;l<t.length;t.length===s||(0,H.p)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.i(0,o)
if(m==null)H.t(P.q(b7+o+b8))
H.l(m,"$iJ")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.i(0,o)
if(f==null)H.t(P.q(b7+o+b8))
H.l(f,"$iJ")
p=b5.y
o=i+"s["+n+"].color"
e=p.i(0,o)
if(e==null)H.t(P.q(b7+o+b8))
H.l(e,"$iJ")
if(typeof j!=="number")return j.am()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.i(0,o)
if(a0==null)H.t(P.q(b7+o+b8))
H.l(a0,"$icj")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.i(0,o)
if(a0==null)H.t(P.q(b7+o+b8))
H.l(a0,"$ia0")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.i(0,o)
if(a0==null)H.t(P.q(b7+o+b8))
H.l(a0,"$ia0")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.i(0,o)
if(a2==null)H.t(P.q(b7+o+b8))
H.l(a2,"$ich")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.i(0,o)
if(a0==null)H.t(P.q(b7+o+b8))
H.l(a0,"$iW")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.i(0,o)
if(a2==null)H.t(P.q(b7+o+b8))
H.l(a2,"$iW")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.i(0,o)
if(a5==null)H.t(P.q(b7+o+b8))
H.l(a5,"$iW")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}h.push(new A.ck(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.ci.m(0,j,h)
q=b5.cg
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.t(P.q(b7+o+b8))
q.m(0,j,m)}for(t=c0.ch,s=t.length,r=[A.cl],l=0;l<t.length;t.length===s||(0,H.p)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.i(0,o)
if(m==null)H.t(P.q(b7+o+b8))
H.l(m,"$iJ")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.i(0,o)
if(f==null)H.t(P.q(b7+o+b8))
H.l(f,"$iJ")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.i(0,o)
if(e==null)H.t(P.q(b7+o+b8))
H.l(e,"$iJ")
p=b5.y
o=i+"s["+n+"].color"
a0=p.i(0,o)
if(a0==null)H.t(P.q(b7+o+b8))
H.l(a0,"$iJ")
if(typeof j!=="number")return j.am()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.i(0,o)
if(a2==null)H.t(P.q(b7+o+b8))
H.l(a2,"$iJ")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.i(0,o)
if(a5==null)H.t(P.q(b7+o+b8))
H.l(a5,"$iJ")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.i(0,o)
if(a9==null)H.t(P.q(b7+o+b8))
H.l(a9,"$iW")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.i(0,o)
if(b0==null)H.t(P.q(b7+o+b8))
H.l(b0,"$iW")
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
H.l(a2,"$ich")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.i(0,g)
if(a2==null)H.t(P.q(b7+g+b8))
H.l(a2,"$iW")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.i(0,g)
if(a5==null)H.t(P.q(b7+g+b8))
H.l(a5,"$iW")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.i(0,g)
if(a2==null)H.t(P.q(b7+g+b8))
H.l(a2,"$iW")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.i(0,g)
if(a5==null)H.t(P.q(b7+g+b8))
H.l(a5,"$iW")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.i(0,g)
if(a9==null)H.t(P.q(b7+g+b8))
H.l(a9,"$iW")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.i(0,g)
if(a2==null)H.t(P.q(b7+g+b8))
H.l(a2,"$ibC")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.i(0,o)
if(a2==null)H.t(P.q(b7+o+b8))
H.l(a2,"$ibC")
a3=a2}else a3=b6
h.push(new A.cl(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.ck.m(0,j,h)
q=b5.cj
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.t(P.q(b7+o+b8))
q.m(0,j,m)}}},
ah:function(a,b){if(b!=null&&b.d>=6)a.cN(b)}}
A.cV.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.dj.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.ds.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.h3.prototype={
h:function(a){return this.bc}}
A.ci.prototype={}
A.ck.prototype={}
A.cl.prototype={}
A.dn.prototype={
cS:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
e_:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.d3(b,35633)
r.f=r.d3(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.t(P.q("Failed to link shader: "+H.e(s)))}r.h9()
r.hb()},
a2:function(a){a.a.useProgram(this.r)
this.x.hJ()},
d3:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.q("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
h9:function(){var u,t,s,r=this,q=H.c([],[A.cN]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.w(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cN(p,t.name,s))}r.x=new A.eS(q)},
hb:function(){var u,t,s,r=this,q=H.c([],[A.dF]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.w(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hB(t.type,t.size,t.name,s))}r.y=new A.ix(q)},
aR:function(a,b,c){var u=this.a
if(a===1)return new A.dG(u,b,c)
else return A.kK(u,this.r,b,a,c)},
eR:function(a,b,c){var u=this.a
if(a===1)return new A.bC(u,b,c)
else return A.kK(u,this.r,b,a,c)},
eS:function(a,b,c){var u=this.a
if(a===1)return new A.a0(u,b,c)
else return A.kK(u,this.r,b,a,c)},
br:function(a,b){return new P.dX(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hB:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aR(b,c,d)
case 5121:return u.aR(b,c,d)
case 5122:return u.aR(b,c,d)
case 5123:return u.aR(b,c,d)
case 5124:return u.aR(b,c,d)
case 5125:return u.aR(b,c,d)
case 5126:return new A.W(u.a,c,d)
case 35664:return new A.it(u.a,c,d)
case 35665:return new A.J(u.a,c,d)
case 35666:return new A.ch(u.a,c,d)
case 35667:return new A.iu(u.a,c,d)
case 35668:return new A.iv(u.a,c,d)
case 35669:return new A.iw(u.a,c,d)
case 35674:return new A.iy(u.a,c,d)
case 35675:return new A.cj(u.a,c,d)
case 35676:return new A.ae(u.a,c,d)
case 35678:return u.eR(b,c,d)
case 35680:return u.eS(b,c,d)
case 35670:throw H.d(u.br("BOOL",c))
case 35671:throw H.d(u.br("BOOL_VEC2",c))
case 35672:throw H.d(u.br("BOOL_VEC3",c))
case 35673:throw H.d(u.br("BOOL_VEC4",c))
default:throw H.d(P.q("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.hX.prototype={}
A.dF.prototype={}
A.ix.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
M:function(a,b){var u=this.i(0,b)
if(u==null)throw H.d(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.p)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.dG.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.iu.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.iv.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.iw.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.is.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.W.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.it.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.J.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.ch.prototype={
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iy.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.cj.prototype={
an:function(a){var u=new Float32Array(H.bH(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.ae.prototype={
an:function(a){var u=new Float32Array(H.bH(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bC.prototype={
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.a0.prototype={
cN:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jK.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cq(s.b,b).cq(s.d.cq(s.c,b),c)
a.sa_(0,new V.G(r.a,r.b,r.c))
a.saq(r.p(0,Math.sqrt(r.w(r))))
s=1-b
u=1-c
a.sdu(new V.ak(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.jU.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.jW.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.w(p)
s=-s*p
u=r*p
a.sa_(0,new V.G(s,u,q))
u=new V.u(s,u,q)
a.saq(u.p(0,Math.sqrt(u.w(u))))
a.sdu(new V.ak(1-c,2+c,-1,-1))}}
F.jX.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.jY.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.k6.prototype={
$3:function(a,b,c){var u=c*3.141592653589793,t=Math.sin(u),s=b*6.283185307179586,r=new V.u(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.p(0,Math.sqrt(r.w(r)))
a.sa_(0,new V.G(s.a,s.b,s.c))}}
F.kj.prototype={
$2:function(a,b){return 0}}
F.kk.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.w(s)
u=a.f
t=new V.u(u.a,u.b,u.c)
s=t.p(0,Math.sqrt(t.w(t))).u(0,this.b+s)
a.sa_(0,new V.G(s.a,s.b,s.c))}}
F.ko.prototype={
$1:function(a){return new V.G(Math.cos(a),Math.sin(a),0)}}
F.k5.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.G(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.jV.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.l6(n.$1(o),m)
m=J.l6(n.$1(o+3.141592653589793/p.c),m).L(0,l)
m=new V.u(m.a,m.b,m.c)
u=m.p(0,Math.sqrt(m.w(m)))
n=$.lL
if(n==null){n=new V.u(1,0,0)
$.lL=n
t=n}else t=n
n=u.aD(!J.z(u,t)?V.lN():t)
s=n.p(0,Math.sqrt(n.w(n)))
n=s.aD(u)
t=n.p(0,Math.sqrt(n.w(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.u(0,n*m)
m=s.u(0,q*m)
a.sa_(0,l.A(0,new V.G(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.aJ.prototype={
ba:function(){var u=this
if(!u.gbb()){C.b.D(u.a.a.d.b,u)
u.a.a.V()}u.c2()
u.c3()
u.h0()},
bp:function(a){this.a=a
a.d.b.push(this)},
bq:function(a){this.b=a
a.d.c.push(this)},
dg:function(a){this.c=a
a.d.d.push(this)},
c2:function(){var u=this.a
if(u!=null){C.b.D(u.d.b,this)
this.a=null}},
c3:function(){var u=this.b
if(u!=null){C.b.D(u.d.c,this)
this.b=null}},
h0:function(){var u=this.c
if(u!=null){C.b.D(u.d.d,this)
this.c=null}},
gbb:function(){return this.a==null||this.b==null||this.c==null},
eL:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cm()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.e0())return
return s.p(0,Math.sqrt(s.w(s)))},
eN:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.L(0,q)
r=new V.u(r.a,r.b,r.c)
s=r.p(0,Math.sqrt(r.w(r)))
r=t.L(0,q)
r=new V.u(r.a,r.b,r.c)
r=s.aD(r.p(0,Math.sqrt(r.w(r))))
return r.p(0,Math.sqrt(r.w(r)))},
c9:function(){var u,t=this
if(t.d!=null)return!0
u=t.eL()
if(u==null){u=t.eN()
if(u==null)return!1}t.d=u
t.a.a.V()
return!0},
eK:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cm()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.e0())return
return s.p(0,Math.sqrt(s.w(s)))},
eM:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.C().a){l=d.L(0,g)
l=new V.u(l.a,l.b,l.c)
q=l.p(0,Math.sqrt(l.w(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.L(0,g).u(0,p).A(0,g).L(0,j)
l=new V.u(l.a,l.b,l.c)
q=l.p(0,Math.sqrt(l.w(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.p(0,Math.sqrt(l.w(l)))
l=o.aD(q)
l=l.p(0,Math.sqrt(l.w(l))).aD(o)
q=l.p(0,Math.sqrt(l.w(l)))}return q},
c7:function(){var u,t=this
if(t.e!=null)return!0
u=t.eK()
if(u==null){u=t.eM()
if(u==null)return!1}t.e=u
t.a.a.V()
return!0},
aQ:function(a,b){var u=b.a
if(u==null)throw H.d(P.q("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.d(P.q("May not replace a face's vertex with a vertex attached to a different shape."))},
ghv:function(a){var u=this
if(J.z(u.a,u.b))return!0
if(J.z(u.b,u.c))return!0
if(J.z(u.c,u.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
G:function(a){var u,t,s=this
if(s.gbb())return a+"disposed"
u=a+C.a.al(J.a6(s.a.e),0)+", "+C.a.al(J.a6(s.b.e),0)+", "+C.a.al(J.a6(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.h(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.h(0)+"}"):u+"-}"},
O:function(){return this.G("")}}
F.fq.prototype={}
F.hW.prototype={
aX:function(a,b,c){var u,t=b.a
t.a.a.B()
t=t.e
u=c.a
u.a.a.B()
if(t==u.e){t=b.b
t.a.a.B()
t=t.e
u=c.b
u.a.a.B()
if(t==u.e){t=b.c
t.a.a.B()
t=t.e
u=c.c
u.a.a.B()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.B()
t=t.e
u=c.b
u.a.a.B()
if(t==u.e){t=b.b
t.a.a.B()
t=t.e
u=c.c
u.a.a.B()
if(t==u.e){t=b.c
t.a.a.B()
t=t.e
u=c.a
u.a.a.B()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.B()
t=t.e
u=c.c
u.a.a.B()
if(t==u.e){t=b.b
t.a.a.B()
t=t.e
u=c.a
u.a.a.B()
if(t==u.e){t=b.c
t.a.a.B()
t=t.e
u=c.b
u.a.a.B()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.c0.prototype={
ba:function(){var u=this
if(!u.gbb()){C.b.D(u.a.a.c.b,u)
u.a.a.V()}u.c2()
u.c3()},
bp:function(a){this.a=a
a.c.b.push(this)},
bq:function(a){this.b=a
a.c.c.push(this)},
c2:function(){var u=this.a
if(u!=null){C.b.D(u.c.b,this)
this.a=null}},
c3:function(){var u=this.b
if(u!=null){C.b.D(u.c.c,this)
this.b=null}},
gbb:function(){return this.a==null||this.b==null},
aQ:function(a,b){var u=b.a
if(u==null)throw H.d(P.q("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.d(P.q("May not replace a line's vertex with a vertex attached to a different shape."))},
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
G:function(a){if(this.gbb())return a+"disposed"
return a+C.a.al(J.a6(this.a.e),0)+", "+C.a.al(J.a6(this.b.e),0)},
O:function(){return this.G("")}}
F.fN.prototype={}
F.ir.prototype={
aX:function(a,b,c){var u,t=b.a
t.a.a.B()
t=t.e
u=c.a
u.a.a.B()
if(t==u.e){t=b.b
t.a.a.B()
t=t.e
u=c.b
u.a.a.B()
return t==u.e}else{t=b.a
t.a.a.B()
t=t.e
u=c.b
u.a.a.B()
if(t==u.e){t=b.b
t.a.a.B()
t=t.e
u=c.a
u.a.a.B()
return t==u.e}else return!1}}}
F.c9.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.al(J.a6(u.e),0)},
O:function(){return this.G("")}}
F.hO.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.E():u},
aY:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.B()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){r=g[s]
h.a.n(0,r.hy())}h.a.B()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.B()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.c9()
if(n.a==null)H.t(P.q("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.E(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.B()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.B()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.n_(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.B()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.B()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.B()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
i=p[o]
o=h.d.a
o.a.n(0,l)
o.a.n(0,k)
o.a.n(0,i)
F.bV(l,k,i)}g=h.e
if(g!=null)g.ay(0)},
ai:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ai()||!1
if(!t.a.ai())u=!1
s=t.e
if(s!=null)s.ay(0)
return u},
hN:function(a,b){var u,t,s,r=this.a.c.length
for(u=0;u<r;++u){t=this.a.c
if(u>=t.length)return H.b(t,u)
s=t[u]
if(b.aX(0,a,s))return s}return},
h2:function(a,b){var u,t,s,r,q,p
this.a.n(0,a)
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.p)(b),++t){s=b[t]
for(;r=s.d,r.b.length+r.c.length+r.d.length>0;){r=r.i(0,0)
q=r.a
if(q==null||r.b==null||r.c==null)H.t(P.q("May not replace a face's vertex when the point has been disposed."))
if(J.z(q,s)){r.aQ(s,a)
q=r.a
if(q!=null){C.b.D(q.d.b,r)
r.a=null}r.a=a
a.d.b.push(r)
p=1}else p=0
if(J.z(r.b,s)){r.aQ(s,a)
q=r.b
if(q!=null){C.b.D(q.d.c,r)
r.b=null}r.b=a
a.d.c.push(r);++p}if(J.z(r.c,s)){r.aQ(s,a)
q=r.c
if(q!=null){C.b.D(q.d.d,r)
r.c=null}r.c=a
a.d.d.push(r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.E(null)}}for(;r=s.c,r.b.length+r.c.length>0;){r=r.i(0,0)
q=r.a
if(q==null||r.b==null)H.t(P.q("May not replace a line's vertex when the point has been disposed."))
if(J.z(q,s)){r.aQ(s,a)
q=r.a
if(q!=null){C.b.D(q.c.b,r)
r.a=null}r.a=a
a.c.b.push(r)
p=1}else p=0
if(J.z(r.b,s)){r.aQ(s,a)
q=r.b
if(q!=null){C.b.D(q.c.c,r)
r.b=null}r.b=a
a.c.c.push(r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.E(null)}}for(;r=s.b.b,r.length>0;){r=r[0]
q=r.a
if(q==null)H.t(P.q("May not replace a point's vertex when the point has been disposed."))
if(J.z(q,s)){if(a.a==null)H.t(P.q("May not replace a point's vertex with a vertex which is not attached to a shape."))
q=r.a
if(q!=null){C.b.D(q.b.b,r)
r.a=null}r.a=a
a.b.b.push(r)
p=1}else p=0
if(p>0){r=r.a.a.e
if(r!=null)r.E(null)}}this.a.D(0,s)}},
e3:function(a,b){var u,t,s,r,q,p,o=this,n=o.e
if(n!=null)++n.d
n=o.a.c
u=H.c(n.slice(0),[H.cH(n,0)])
for(n=[F.aY];u.length!==0;){t=C.b.ghP(u)
C.b.eb(u,0)
if(t!=null){s=H.c([],n)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.b(u,r)
q=u[r]
if(q!=null&&a.aX(0,t,q)){s.push(q)
C.b.eb(u,r)}}if(s.length>1){p=b.aY(s)
if(p!=null){o.h2(p,s)
u.push(p)}}}}o.a.B()
o.c.bF()
o.d.bF()
o.b.ij()
o.c.cC(new F.ir())
o.d.cC(new F.hW())
n=o.e
if(n!=null)n.ay(0)},
bu:function(){this.e3(new F.cn(),new F.hr())},
dA:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.ar()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.b2().a)!==0)++s
if((t&$.b1().a)!==0)++s
if((t&$.bm().a)!==0)++s
if((t&$.b3().a)!==0)++s
if((t&$.cI().a)!==0)++s
if((t&$.cJ().a)!==0)++s
if((t&$.bO().a)!==0)++s
if((t&$.b0().a)!==0)++s
r=a4.gcO(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.c(u,[P.K])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.cO])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.ho(m)
k=l.gcO(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.cO(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].i_(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bH(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bR(new Z.dN(a1,d),o,a4)
c.b=H.c([],[Z.bu])
if(a0.b.b.length!==0){b=H.c([],[P.x])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.B()
b.push(t.e)}a=Z.kO(u,34963,b)
c.b.push(new Z.bu(0,b.length,a))}if(a0.c.b.length!==0){b=H.c([],[P.x])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.B()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.B()
b.push(t.e)}a=Z.kO(u,34963,b)
c.b.push(new Z.bu(1,b.length,a))}if(a0.d.b.length!==0){b=H.c([],[P.x])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.B()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.B()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].c
t.a.a.B()
b.push(t.e)}a=Z.kO(u,34963,b)
c.b.push(new Z.bu(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.c([],[P.k])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.G(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.G(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.G(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.G(t))}return C.b.k(s,"\n")},
V:function(){var u=this.e
if(u!=null)u.E(null)}}
F.hP.prototype={
bs:function(a,b,c,d){var u,t=this.a
t.a.n(0,b)
t.a.n(0,c)
t.a.n(0,d)
u=new F.aJ()
t=b.a
if(t==null)H.t(P.q("May not create a face with a first vertex which is not attached to a shape."))
if(t!=c.a||t!=d.a)H.t(P.q("May not create a face with vertices attached to different shapes."))
u.bp(b)
u.bq(c)
u.dg(d)
u.a.a.d.b.push(u)
u.a.a.V()
return u},
dn:function(a){var u,t,s,r,q,p=H.c([],[F.aJ]),o=a.length
if(o>0){u=a[0]
for(t=this.a,s=2;s<o;++s){r=s-1
q=a.length
if(r>=q)return H.b(a,r)
r=a[r]
if(s>=q)return H.b(a,s)
q=a[s]
t.a.n(0,u)
t.a.n(0,r)
t.a.n(0,q)
p.push(F.bV(u,r,q))}}return p},
hl:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.c([],[F.aJ])
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
if(p){n.n(0,m)
u.a.n(0,l)
u.a.n(0,j)
h.push(F.bV(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bV(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bV(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.bV(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
cC:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.aX(0,p,n)){p.ba()
break}}}}},
bF:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.ghv(s)
if(t)s.ba()}},
ai:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.p)(u),++r)if(!u[r].c9())s=!1
return s},
c8:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.p)(u),++r)if(!u[r].c7())s=!1
return s},
h:function(a){return this.O()},
G:function(a){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].G(a))
return C.b.k(r,"\n")},
O:function(){return this.G("")}}
F.hQ.prototype={
gl:function(a){return this.b.length},
cC:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.i(0,q)
for(o=q-1;o>=0;--o){n=r.c.i(0,o)
if(a.aX(0,p,n)){p.ba()
break}}}}},
bF:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=J.z(s.a,s.b)
if(t)s.ba()}},
h:function(a){return this.O()},
G:function(a){var u,t,s=H.c([],[P.k]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].G(a+(""+u+". ")))}return C.b.k(s,"\n")},
O:function(){return this.G("")}}
F.hR.prototype={
gl:function(a){return this.b.length},
ij:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.D(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.E(null)}s=t.a
if(s!=null){C.b.D(s.b.b,t)
t.a=null}}}},
h:function(a){return this.O()},
G:function(a){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].G(a))
return C.b.k(r,"\n")},
O:function(){return this.G("")}}
F.aY.prototype={
cc:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.bE(u.cx,r,o,t,s,q,p,a,n)},
hy:function(){return this.cc(null)},
sa_:function(a,b){var u
if(!J.z(this.f,b)){this.f=b
u=this.a
if(u!=null)u.V()}},
scu:function(a){var u
a=a==null?null:a.p(0,Math.sqrt(a.w(a)))
if(!J.z(this.r,a)){this.r=a
u=this.a
if(u!=null)u.V()}},
sdw:function(a){var u
a=a==null?null:a.p(0,Math.sqrt(a.w(a)))
if(!J.z(this.x,a)){this.x=a
u=this.a
if(u!=null)u.V()}},
scE:function(a){var u
if(!J.z(this.y,a)){this.y=a
u=this.a
if(u!=null)u.V()}},
saq:function(a){var u
if(!J.z(this.z,a)){this.z=a
u=this.a
if(u!=null)u.V()}},
sao:function(a,b){var u
if(!J.z(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.V()}},
sek:function(a,b){var u
if(this.ch!==b){this.ch=b
u=this.a
if(u!=null)u.V()}},
sdu:function(a){var u
if(!J.z(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.V()}},
i_:function(a){var u,t,s=this
if(a.t(0,$.ar())){u=s.f
t=[P.K]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.b2())){u=s.r
t=[P.K]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.b1())){u=s.x
t=[P.K]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bm())){u=s.y
t=[P.K]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.t(0,$.b3())){u=s.z
t=[P.K]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.cI())){u=s.Q
t=[P.K]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.cJ())){u=s.Q
if(u==null)return H.c([1,1,1,1],[P.K])
else return u.cF(0)}else if(a.t(0,$.bO()))return H.c([s.ch],[P.K])
else if(a.t(0,$.b0())){u=s.cx
t=[P.K]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.K])},
c9:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cm()
t.d.H(0,new F.j_(s))
s=s.a
t.r=s.p(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.V()
s=t.a.e
if(s!=null)s.ay(0)}return!0},
c7:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cm()
t.d.H(0,new F.iZ(s))
s=s.a
t.x=s.p(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.V()
s=t.a.e
if(s!=null)s.ay(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
G:function(a){var u,t,s=this,r="-",q=H.c([],[P.k])
q.push(C.a.al(J.a6(s.e),0))
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
q.push(V.D(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.b.k(q,", ")
return a+"{"+t+"}"},
O:function(){return this.G("")}}
F.j_.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.A(0,t)}}}
F.iZ.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.A(0,t)}}}
F.iQ.prototype={
B:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.b(u,r)
u[r].e=s;++s}this.b=!1}},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.q("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.V()
return!0},
dq:function(a,b,c,d,e,f,g){var u=F.bE(a,null,b,c,d,e,f,g,0)
this.n(0,u)
return u},
bt:function(a,b,c,d,e,f){return this.dq(a,b,c,null,d,e,f)},
hm:function(a,b,c,d,e,f){return this.dq(a,b,c,d,e,f,null)},
gl:function(a){return this.c.length},
D:function(a,b){var u,t
if(b==null)return!1
u=this.a
if(b.a!==u)return!1
if(b.b.b.length===0){t=b.c
if(t.b.length===0&&t.c.length===0){t=b.d
t=t.b.length===0&&t.c.length===0&&t.d.length===0}else t=!1}else t=!1
if(!t)throw H.d(P.q("May not remove a vertex without first making it empty."))
b.a=null
C.b.D(this.c,b)
u.V()
return this.b=!0},
ai:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)u[s].c9()
return!0},
c8:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)u[s].c7()
return!0},
hu:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.p(0,Math.sqrt(p*p+o*o+n*n))
if(!J.z(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
h:function(a){return this.O()},
G:function(a){var u,t,s,r
this.B()
u=H.c([],[P.k])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r)u.push(t[r].G(a))
return C.b.k(u,"\n")},
O:function(){return this.G("")}}
F.iR.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.b(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.b(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.b(t,b)
return t[b]},
H:function(a,b){var u=this
C.b.H(u.b,b)
C.b.H(u.c,new F.iS(u,b))
C.b.H(u.d,new F.iT(u,b))},
h:function(a){return this.O()},
O:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].G(""))
return C.b.k(r,"\n")}}
F.iS.prototype={
$1:function(a){if(!J.z(a.a,this.a))this.b.$1(a)}}
F.iT.prototype={
$1:function(a){var u=this.a
if(!J.z(a.a,u)&&!J.z(a.b,u))this.b.$1(a)}}
F.iV.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.b(t,u)
return t[u]}else{if(b<0)return H.b(t,b)
return t[b]}},
h:function(a){return this.O()},
O:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].G(""))
return C.b.k(r,"\n")}}
F.iW.prototype={}
F.cn.prototype={
aX:function(a,b,c){return J.z(b.f,c.f)}}
F.iX.prototype={}
F.iU.prototype={
aY:function(a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null
for(u=a5.length,t=a4,s=t,r=s,q=r,p=q,o=p,n=0,m=0,l=0,k=0,j=0,i=0,h=0;h<u;++h){g=a5[h]
f=g.f
if(f!=null){o=o==null?f:new V.G(o.a+f.a,o.b+f.b,o.c+f.c);++n}e=g.r
if(e!=null)p=p==null?e:new V.u(p.a+e.a,p.b+e.b,p.c+e.c)
d=g.x
if(d!=null)q=q==null?d:new V.u(q.a+d.a,q.b+d.b,q.c+d.c)
c=g.y
if(c!=null){s=s==null?c:new V.T(s.a+c.a,s.b+c.b);++l}b=g.z
if(b!=null){t=t==null?b:new V.u(t.a+b.a,t.b+b.b,t.c+b.c);++k}a=g.Q
if(a!=null){a0=a.a
a1=a.b
a2=a.c
a=a.d
if(r==null){a=[a0,a1,a2,a]
r=new V.aX(a[0],a[1],a[2],a[3])}else{a=[a0,a1,a2,a]
a0=a[0]
a1=a[1]
a2=a[2]
a=a[3]
r=new V.aX(r.a+a0,r.b+a1,r.c+a2,r.d+a)}++m}a=g.ch
if(typeof a!=="number")return H.w(a)
i+=a;++j}a3=F.bE(a4,a4,a4,a4,a4,a4,a4,a4,0)
if(n<=0||o==null)a3.sa_(0,a4)
else a3.sa_(0,o.p(0,n))
if(p==null)a3.scu(a4)
else a3.scu(p.p(0,Math.sqrt(p.w(p))))
if(q==null)a3.sdw(a4)
else a3.sdw(q.p(0,Math.sqrt(q.w(q))))
if(l<=0||s==null)a3.scE(a4)
else a3.scE(s.p(0,l))
if(k<=0||t==null)a3.saq(a4)
else a3.saq(t.p(0,k))
if(m<=0||r==null)a3.sao(0,a4)
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
a3.sao(0,new V.a1(a,a0,a1,u))}if(j<=0)a3.sek(0,0)
else a3.sek(0,i/j)
return a3}}
F.hr.prototype={
aY:function(a){var u,t,s,r=V.cm()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)r=new V.u(r.a+s.a,r.b+s.b,r.c+s.c)}r=r.p(0,Math.sqrt(r.w(r)))
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t)a[t].scu(r)
return}}
F.iY.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.O()},
O:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].G(""))
return C.b.k(r,"\n")}}
O.da.prototype={
gq:function(){var u=this.fr
return u==null?this.fr=D.E():u},
Y:function(a){var u=this.fr
if(u!=null)u.E(a)},
b3:function(){return this.Y(null)},
dc:function(a){this.a=null
this.Y(a)},
h5:function(){return this.dc(null)},
f7:function(a,b){var u=new D.b7()
u.b=!0
this.Y(u)},
f9:function(a,b){var u=new D.b8()
u.b=!0
this.Y(u)},
d0:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.x,h=new H.P([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=h.i(0,0)
h.m(0,0,r==null?1:r)}q=H.c([],[A.cV])
h.H(0,new O.h7(j,q))
C.b.bK(q,new O.h8())
p=new H.P([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){o=u[s]
r=o.gb9()
n=p.i(0,o.gb9())
p.m(0,r,n==null?1:n)}m=H.c([],[A.dj])
p.H(0,new O.h9(j,m))
C.b.bK(m,new O.ha())
l=new H.P([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.p)(i),++s){o=i[s]
t=o.gb9()
r=l.i(0,o.gb9())
l.m(0,t,r==null?1:r)}k=H.c([],[A.ds])
l.H(0,new O.hb(j,k))
C.b.bK(k,new O.hc())
i=C.c.aa(j.e.a.length+3,4)
j.dy.e
return A.n6(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
ag:function(a,b){if(b!=null)if(!C.b.W(a,b)){b.a=a.length
a.push(b)}},
ar:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a7(u,u.length);u.C();){t=u.d
t.toString
s=$.iP
if(s==null)s=$.iP=new V.u(0,0,1)
t.a=s
r=$.iO
t.d=r==null?$.iO=new V.u(0,1,0):r
r=$.iN
t.e=r==null?$.iN=new V.u(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bH(s)
r=s.a
p=s.b
o=s.c
t.a=s.p(0,Math.sqrt(r*r+p*p+o*o))
o=q.bH(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.p(0,Math.sqrt(p*p+r*r+s*s))
s=q.bH(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.p(0,Math.sqrt(r*r+p*p+o*o))}}}},
ec:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a
if(b0==null){b0=a9.d0()
u=b1.fr.i(0,b0.bc)
if(u==null){u=A.n5(b0,b1.a)
b1.ds(u)}b0=a9.a=u
b2.e=null}t=b0.z
s=t.bx
b0=b2.e
if(!(b0 instanceof Z.bR))b0=b2.e=null
if(b0==null||!b0.d.t(0,s)){b0=t.k3
if(b0)b2.d.ai()
r=t.k4
if(r){q=b2.d
p=q.e
if(p!=null)++p.d
q.d.c8()
q.a.c8()
q=q.e
if(q!=null)q.ay(0)}q=t.r2
if(q){p=b2.d
o=p.e
if(o!=null)++o.d
p.a.hu()
p=p.e
if(p!=null)p.ay(0)}n=b2.d.dA(new Z.dO(b1.a),s)
n.aE($.ar()).e=a9.a.Q.c
if(b0)n.aE($.b2()).e=a9.a.cx.c
if(r)n.aE($.b1()).e=a9.a.ch.c
if(t.r1)n.aE($.bm()).e=a9.a.cy.c
if(q)n.aE($.b3()).e=a9.a.db.c
if(t.rx)n.aE($.b0()).e=a9.a.dx.c
b2.e=n}m=H.c([],[T.dy])
a9.a.a2(b1)
if(t.dy){b0=a9.a
r=b1.dx
r=r.ga4(r)
b0=b0.dy
b0.toString
b0.an(r.af(0,!0))}if(t.fr){b0=a9.a
r=b1.cx
if(r==null){r=b1.db
r=r.ga4(r)
q=b1.dx
q=b1.cx=r.u(0,q.ga4(q))
r=q}b0=b0.fr
b0.toString
b0.an(r.af(0,!0))}b0=a9.a
r=b1.ch
if(r==null){r=b1.gih()
q=b1.dx
q=b1.ch=r.u(0,q.ga4(q))
r=q}b0=b0.fy
b0.toString
b0.an(r.af(0,!0))
if(t.ry){b0=a9.a
r=a9.b
b0=b0.k1
b0.toString
b0.an(C.j.af(r,!0))}if(t.x1){b0=a9.a
r=a9.c
b0=b0.k2
b0.toString
b0.an(C.j.af(r,!0))}if(t.x2){b0=a9.a
r=a9.d
b0=b0.k3
b0.toString
b0.an(C.j.af(r,!0))}if(t.y2>0){l=a9.e.a.length
b0=a9.a.k4
b0.a.uniform1i(b0.d,l)
for(k=0;k<l;++k){b0=a9.a
r=a9.e.a
if(k>=r.length)return H.b(r,k)
r=r[k]
b0=b0.r1
if(k>=b0.length)return H.b(b0,k)
b0=b0[k]
j=new Float32Array(H.bH(r.af(0,!0)))
b0.a.uniformMatrix4fv(b0.d,!1,j)}}b0=t.a
if(b0.a){r=a9.a
q=a9.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.ag(m,a9.f.e)
b0=a9.a
r=a9.f.e
b0.ah(b0.ry,r)}if(t.id){b0=t.b
if(b0.a){r=a9.a
q=a9.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.ag(m,a9.r.e)
b0=a9.a
r=a9.r.e
b0.ah(b0.y1,r)}b0=t.c
if(b0.a){r=a9.a
q=a9.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.ag(m,a9.x.e)
b0=a9.a
r=a9.x.e
b0.ah(b0.bx,r)}b0=t.d
if(b0.a){r=a9.a
q=a9.y.f
r=r.dF
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.ag(m,a9.y.e)
b0=a9.a
r=a9.y.e
b0.ah(b0.dG,r)}b0=t.e
r=b0.a
if(!r)q=b0.c
else q=!0
if(q){q=a9.a
p=a9.z.ch
q=q.dJ
q.a.uniform1f(q.d,p)}if(r){r=a9.a
q=a9.z.f
r=r.dH
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.ag(m,a9.z.e)
b0=a9.a
r=a9.z.e
b0.ah(b0.dI,r)}b0=t.z
if(b0.length>0){r=b1.db
i=r.ga4(r)
r=P.x
h=new H.P([r,r])
for(r=a9.dx.e,q=r.length,g=0;g<r.length;r.length===q||(0,H.p)(r),++g){f=r[g]
e=h.i(0,0)
if(e==null)e=0
h.m(0,0,e+1)
d=J.cK(a9.a.cf.i(0,0),e)
p=i.bH(f.a)
o=p.a
c=p.b
b=p.c
b=p.p(0,Math.sqrt(o*o+c*c+b*b))
c=d.e
o=b.a
p=b.b
b=b.c
c.a.uniform3f(c.d,o,p,b)
b=f.c
p=d.f
p.a.uniform3f(p.d,b.a,b.b,b.c)}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.p)(b0),++g){q=b0[g].a
l=h.i(0,q)
if(l==null)l=0
q=a9.a.ce.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.Q
if(b0.length>0){r=b1.db
i=r.ga4(r)
r=P.x
a=new H.P([r,r])
for(r=a9.dx.f,q=r.length,g=0;g<r.length;r.length===q||(0,H.p)(r),++g){f=r[g]
a0=f.gb9()
e=a.i(0,a0)
if(e==null)e=0
a.m(0,a0,e+1)
d=J.cK(a9.a.ci.i(0,a0),e)
a1=i.u(0,f.ga4(f))
p=f.ga4(f)
o=$.ca
p=p.cG(o==null?$.ca=new V.G(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.ca
p=a1.cG(p==null?$.ca=new V.G(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gao(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gaJ()
p=a1.cp(0)
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
j=new Float32Array(H.bH(new V.db(o,c,b,a2,a3,a4,a5,a6,p).af(0,!0)))
a7.a.uniformMatrix3fv(a7.d,!1,j)
f.gaJ()
p=f.gaJ()
if(!C.b.W(m,p)){p.a=m.length
m.push(p)}p=f.gaJ()
o=p.gbe(p)
if(o){o=d.f
o.toString
c=p.d
if(c<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gb1()
p=f.gep()
o=d.x
o.toString
c=p.ghF(p)
b=p.ghG(p)
a2=p.ghH()
p=p.ghE()
o.a.uniform4f(o.d,c,b,a2,p)
p=f.gb1()
if(!C.b.W(m,p)){p.a=m.length
m.push(p)}p=f.gb1()
o=p.gbe(p)
if(o){o=d.r
o.toString
c=p.d
if(c<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.ghK()){p=f.ghp()
o=d.y
o.a.uniform1f(o.d,p)
p=f.ghq()
o=d.z
o.a.uniform1f(o.d,p)
p=f.ghr()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.p)(b0),++g){q=b0[g].a
l=a.i(0,q)
if(l==null)l=0
q=a9.a.cg.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.ch
if(b0.length>0){r=b1.db
i=r.ga4(r)
r=P.x
a8=new H.P([r,r])
for(r=a9.dx.r,q=r.length,g=0;g<r.length;r.length===q||(0,H.p)(r),++g){f=r[g]
a0=f.gb9()
e=a8.i(0,a0)
if(e==null)e=0
a8.m(0,a0,e+1)
d=J.cK(a9.a.ck.i(0,a0),e)
p=f.gig(f)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.giz(f).iL()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=i.cG(f.gig(f))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gao(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gaJ()
p=f.gcH()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gcD(f)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.giM()
o=d.x
o.a.uniform1f(o.d,p)
p=f.giN()
o=d.y
o.a.uniform1f(o.d,p)
f.gaJ()
p=f.gaJ()
if(!C.b.W(m,p)){p.a=m.length
m.push(p)}p=f.gaJ()
o=p.gbe(p)
if(o){o=d.dx
o.toString
c=p.gbe(p)
if(!c)o.a.uniform1i(o.d,0)
else{p=p.ghU(p)
o.a.uniform1i(o.d,p)}}f.gb1()
p=f.gep()
o=d.z
o.toString
c=p.ghF(p)
b=p.ghG(p)
a2=p.ghH()
p=p.ghE()
o.a.uniform4f(o.d,c,b,a2,p)
p=f.gb1()
if(!C.b.W(m,p)){p.a=m.length
m.push(p)}p=f.gb1()
o=p.gbe(p)
if(o){o=d.dy
o.toString
c=p.gbe(p)
if(!c)o.a.uniform1i(o.d,0)
else{p=p.ghU(p)
o.a.uniform1i(o.d,p)}}if(f.giA()){p=f.giy()
o=d.Q
o.a.uniform1f(o.d,p)
p=f.gix()
o=d.ch
o.a.uniform1f(o.d,p)}if(f.ghK()){p=f.ghp()
o=d.cx
o.a.uniform1f(o.d,p)
p=f.ghq()
o=d.cy
o.a.uniform1f(o.d,p)
p=f.ghr()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.p)(b0),++g){q=b0[g].a
l=a8.i(0,q)
if(l==null)l=0
q=a9.a.cj.i(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.c){a9.ag(m,a9.Q.e)
b0=a9.a
r=a9.Q.e
b0.ah(b0.dK,r)}if(t.dx){b0=a9.a
r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.ga4(r).cp(0)}b0=b0.id
b0.toString
b0.an(r.af(0,!0))}if(t.cy){a9.ag(m,a9.ch)
b0=a9.a
r=a9.ch
b0.ah(b0.dL,r)
b0=t.r
if(b0.a){r=a9.a
q=a9.cx.f
r=r.dM
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.ag(m,a9.cx.e)
b0=a9.a
r=a9.cx.e
b0.ah(b0.dN,r)}b0=t.x
r=b0.a
if(!r)q=b0.c
else q=!0
if(q){q=a9.a
p=a9.cy.ch
q=q.dO
q.a.uniform1f(q.d,p)}if(r){r=a9.a
q=a9.cy.f
r=r.dP
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.ag(m,a9.cy.e)
b0=a9.a
r=a9.cy.e
b0.ah(b0.dQ,r)}}b0=t.y
r=b0.a
q=!r
if(q)p=b0.c
else p=!0
if(p){if(r){r=a9.a
p=a9.db.f
r=r.dR
r.a.uniform1f(r.d,p)}if(b0.c){a9.ag(m,a9.db.e)
r=a9.a
p=a9.db.e
r.ah(r.dS,p)}r=b1.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a2(b1)
r=b2.e
r.a2(b1)
r.ae(b1)
r.aK(b1)
if(q)b0=b0.c
else b0=!0
if(b0)b1.a.disable(3042)
for(b0=b1.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b0.activeTexture(33984+r.a)
b0.bindTexture(34067,null)}}r=a9.a
r.toString
b0.useProgram(null)
r.x.dD()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.d0().bc}}
O.h7.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.cV(a,C.c.aa(b+3,4)*4))}}
O.h8.prototype={
$2:function(a,b){return J.kr(a.a,b.a)}}
O.h9.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.dj(a,C.c.aa(b+3,4)*4))}}
O.ha.prototype={
$2:function(a,b){return J.kr(a.a,b.a)}}
O.hb.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.ds(a,C.c.aa(b+3,4)*4))}}
O.hc.prototype={
$2:function(a,b){return J.kr(a.a,b.a)}}
O.h1.prototype={
aB:function(){var u,t=this
t.cQ()
u=t.f
if(!(Math.abs(u-1)<$.C().a)){t.f=1
u=new D.B(t.b,u,1)
u.b=!0
t.a.Y(u)}}}
O.c2.prototype={
Y:function(a){return this.a.Y(a)},
b3:function(){return this.Y(null)},
aB:function(){},
c4:function(a){var u,t,s=this
if(!s.c.t(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aB()
u=s.a
u.a=null
u.Y(null)}},
saq:function(a){var u,t=this,s=t.c
if(!s.c)t.c4(new A.a2(s.a,!1,!0))
s=t.e
if(s!==a){if(s!=null)s.gq().D(0,t.gaP())
u=t.e
t.e=a
a.gq().n(0,t.gaP())
s=new D.B(t.b+".textureCube",u,t.e)
s.b=!0
t.a.Y(s)}}}
O.h2.prototype={}
O.av.prototype={
de:function(a){var u,t,s=this
if(!s.f.t(0,a)){u=s.f
s.f=a
t=new D.B(s.b+".color",u,a)
t.b=!0
s.a.Y(t)}},
aB:function(){this.cQ()
this.de(new V.X(1,1,1))},
sao:function(a,b){this.c4(new A.a2(!0,!1,this.c.c))
this.de(b)}}
O.h4.prototype={}
O.h5.prototype={
aB:function(){var u,t=this
t.cR()
u=t.ch
if(!(Math.abs(u-1)<$.C().a)){t.ch=1
u=new D.B(t.b+".refraction",u,1)
u.b=!0
t.a.Y(u)}}}
O.h6.prototype={
df:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.C().a)){u.ch=a
t=new D.B(u.b+".shininess",t,a)
t.b=!0
u.a.Y(t)}},
aB:function(){this.cR()
this.df(100)}}
O.dq.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.E():u},
Y:function(a){var u=this.e
if(u!=null)u.E(a)},
b3:function(){return this.Y(null)},
ec:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.i(0,n)
if(u==null){t=a.a
u=new A.hX(t,n)
u.cS(t,n)
u.e_(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.i(0,"posAttr")
u.Q=H.l(u.y.i(0,"fov"),"$iW")
u.ch=H.l(u.y.i(0,"ratio"),"$iW")
u.cx=H.l(u.y.i(0,"boxClr"),"$iJ")
u.cy=H.l(u.y.i(0,"boxTxt"),"$ia0")
u.db=H.l(u.y.i(0,"viewMat"),"$iae")
a.ds(u)}o.a=u}if(b.e==null){t=b.d.dA(new Z.dO(a.a),$.ar())
t.aE($.ar()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.a2(a)}t=a.d
s=a.c
r=o.a
r.a2(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.cN(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.ga4(s).cp(0)
r=r.db
r.toString
r.an(s.af(0,!0))
t=b.e
if(t instanceof Z.bR){t.a2(a)
t.ae(a)
t.aK(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.dD()
t=o.c
if(t!=null)t.aK(a)}}
O.dx.prototype={}
T.dy.prototype={}
T.ic.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.E():u},
a2:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
aK:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.id.prototype={
e2:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.ic()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aS(u,k,r,34069,!1,!1)
t.aS(u,k,o,34070,!1,!1)
t.aS(u,k,q,34071,!1,!1)
t.aS(u,k,n,34072,!1,!1)
t.aS(u,k,p,34073,!1,!1)
t.aS(u,k,m,34074,!1,!1)
return u},
e1:function(a){return this.e2(a,".png")},
aS:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.Z(u,"load",new T.ie(this,u,!1,b,!1,d,a),!1)},
h6:function(a,b,c){var u,t,s,r
b=V.l1(b)
u=V.l1(a.width)
t=V.l1(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.ku()
s.width=u
s.height=t
r=C.i.em(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oA(r.getImageData(0,0,s.width,s.height))}}}
T.ie.prototype={
$1:function(a){var u=this,t=u.a,s=t.h6(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.Y.ir(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.hI()}++t.e}}
X.kt.prototype={}
X.fx.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.E():u},
au:function(a){var u=this.x
if(u!=null)u.E(a)},
a2:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.w(u)
q=C.d.ap(r*u)
r=s.b
if(typeof t!=="number")return H.w(t)
p=C.d.ap(r*t)
r=C.d.ap(s.c*u)
a.c=r
s=C.d.ap(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.fE.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.E():u},
a2:function(a){var u
a.cy.bE(V.bw())
u=V.bw()
a.db.bE(u)},
aK:function(a){a.cy.aH()
a.db.aH()}}
X.di.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.E():u},
au:function(a){var u=this.f
if(u!=null)u.E(a)},
fd:function(){return this.au(null)},
a2:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.aw(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bE(k)
r=$.ls
if(r==null){r=V.kI()
q=V.kN()
p=$.lK
r=V.lo(r,q,p==null?$.lK=new V.u(0,0,-1):p)
$.ls=r
u=r}else u=r
r=s.b
if(r!=null){t=r.b_(0,a,s)
if(t!=null)u=t.u(0,u)}a.db.bE(u)},
aK:function(a){a.cy.aH()
a.db.aH()}}
X.i8.prototype={}
V.cQ.prototype={
bl:function(a){this.b=new P.fC(C.P)
this.c=null
this.d=H.c([],[[P.o,W.an]])},
N:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.c([],[W.an]))
u=a.split("\n")
for(l=u.length,t=[W.an],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.c([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.eQ(q,0,q.length)
n=o==null?q:o
C.N.eo(p,H.l3(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gax(m.d).push(p)}},
e9:function(a,b){var u,t,s,r,q=this
q.d=H.c([],[[P.o,W.an]])
u=C.b.k(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bw():t).eh(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r)q.bD(t[r])}}
V.ki.prototype={
$1:function(a){var u=C.d.eg(this.a.ghT(),2)
if(u!=="0.00")P.l2(u+" fps")}}
V.fd.prototype={
bD:function(a){var u=this
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
bw:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=R.ij()
a1.c=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=T.r(new H.m("_"))
u.a.push(t)
t=T.N("a","z")
u.a.push(t)
t=T.N("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=T.r(new H.m("_"))
t.a.push(u)
u=T.N("0","9")
t.a.push(u)
u=T.N("a","z")
t.a.push(u)
u=T.N("A","Z")
t.a.push(u)
u=a1.j(0,r).k(0,p)
t=T.N("0","9")
u.a.push(t)
t=a1.j(0,p).k(0,p)
u=T.N("0","9")
t.a.push(u)
u=a1.j(0,p).k(0,o)
t=T.r(new H.m("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=T.N("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=T.N("0","9")
u.a.push(t)
t=a1.j(0,r).k(0,m)
u=T.r(new H.m(l))
t.a.push(u)
u=a1.j(0,m).k(0,m)
t=T.r(new H.m(l))
u.a.push(t)
t=a1.j(0,r).k(0,k)
u=T.r(new H.m('"'))
t.a.push(u)
u=a1.j(0,k).k(0,j)
t=T.r(new H.m('"'))
u.a.push(t)
t=a1.j(0,k).k(0,i)
u=T.r(new H.m("\\"))
t.a.push(u)
u=a1.j(0,i).k(0,k)
t=T.r(new H.m('"'))
u.a.push(t)
a1.j(0,k).k(0,k).a.push(new T.aE())
t=a1.j(0,r).k(0,h)
u=T.r(new H.m("'"))
t.a.push(u)
u=a1.j(0,h).k(0,g)
t=T.r(new H.m("'"))
u.a.push(t)
t=a1.j(0,h).k(0,f)
u=T.r(new H.m("\\"))
t.a.push(u)
u=a1.j(0,f).k(0,h)
t=T.r(new H.m("'"))
u.a.push(t)
a1.j(0,h).k(0,h).a.push(new T.aE())
t=a1.j(0,r).k(0,e)
u=T.r(new H.m("/"))
t.a.push(u)
u=a1.j(0,e).k(0,d)
t=T.r(new H.m("/"))
u.a.push(t)
t=a1.j(0,d).k(0,c)
u=T.r(new H.m("\n"))
t.a.push(u)
u=a1.j(0,d).k(0,d)
t=new T.a8()
s=[T.bd]
t.a=H.c([],s)
u.a.push(t)
u=T.r(new H.m("\n"))
t.a.push(u)
u=a1.j(0,e).k(0,b)
t=T.r(new H.m("*"))
u.a.push(t)
t=a1.j(0,b).k(0,a)
u=T.r(new H.m("*"))
t.a.push(u)
u=a1.j(0,a).k(0,b)
t=new T.a8()
t.a=H.c([],s)
u.a.push(t)
u=T.r(new H.m("*"))
t.a.push(u)
u=a1.j(0,a).k(0,c)
t=T.r(new H.m("/"))
u.a.push(t)
t=a1.j(0,r).k(0,a0)
u=T.r(new H.m(" \n\t"))
t.a.push(u)
u=a1.j(0,a0).k(0,a0)
t=T.r(new H.m(" \n\t"))
u.a.push(t)
t=a1.j(0,p)
t.d=t.a.P("Num")
t=a1.j(0,n)
t.d=t.a.P("Num")
t=a1.j(0,m)
t.d=t.a.P("Symbol")
t=a1.j(0,j)
t.d=t.a.P("String")
t=a1.j(0,g)
t.d=t.a.P("String")
t=a1.j(0,c)
t.d=t.a.P(d)
t=a1.j(0,a0)
t.d=t.a.P(a0)
t=a1.j(0,q)
t=t.d=t.a.P(q)
u=[P.k]
t.aI(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aI(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aI(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fz.prototype={
bD:function(a){var u=this
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
bw:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=R.ij()
e.c=e.j(0,r)
u=e.j(0,r).k(0,q)
t=T.r(new H.m("_"))
u.a.push(t)
t=T.N("a","z")
u.a.push(t)
t=T.N("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=T.r(new H.m("_"))
t.a.push(u)
u=T.N("0","9")
t.a.push(u)
u=T.N("a","z")
t.a.push(u)
u=T.N("A","Z")
t.a.push(u)
u=e.j(0,r).k(0,p)
t=T.N("0","9")
u.a.push(t)
t=e.j(0,p).k(0,p)
u=T.N("0","9")
t.a.push(u)
u=e.j(0,p).k(0,o)
t=T.r(new H.m("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=T.N("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=T.N("0","9")
u.a.push(t)
t=e.j(0,r).k(0,m)
u=T.r(new H.m(l))
t.a.push(u)
u=e.j(0,m).k(0,m)
t=T.r(new H.m(l))
u.a.push(t)
t=e.j(0,r).k(0,k)
u=T.r(new H.m("/"))
t.a.push(u)
u=e.j(0,k).k(0,j)
t=T.r(new H.m("/"))
u.a.push(t)
e.j(0,k).k(0,m).a.push(new T.aE())
t=e.j(0,j).k(0,i)
u=T.r(new H.m("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new T.a8()
s=[T.bd]
t.a=H.c([],s)
u.a.push(t)
u=T.r(new H.m("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=T.r(new H.m("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new T.a8()
u.a=H.c([],s)
t.a.push(u)
t=T.r(new H.m("\n"))
u.a.push(t)
t=e.j(0,h).k(0,g)
u=T.r(new H.m("\n"))
t.a.push(u)
u=e.j(0,r).k(0,f)
t=T.r(new H.m(" \n\t"))
u.a.push(t)
t=e.j(0,f).k(0,f)
u=T.r(new H.m(" \n\t"))
t.a.push(u)
u=e.j(0,p)
u.d=u.a.P("Num")
u=e.j(0,n)
u.d=u.a.P("Num")
u=e.j(0,m)
u.d=u.a.P("Symbol")
u=e.j(0,i)
u.d=u.a.P(j)
u=e.j(0,g)
u.d=u.a.P(h)
u=e.j(0,f)
u.d=u.a.P(f)
u=e.j(0,q)
u=u.d=u.a.P(q)
t=[P.k]
u.aI(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aI(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aI(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fA.prototype={
bD:function(a){var u=this,t="#111"
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
bw:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=R.ij()
l.c=l.j(0,s)
u=l.j(0,s).k(0,r)
t=T.r(new H.m("_"))
u.a.push(t)
t=T.N("a","z")
u.a.push(t)
t=T.N("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=T.r(new H.m("_"))
t.a.push(u)
u=T.N("0","9")
t.a.push(u)
u=T.N("a","z")
t.a.push(u)
u=T.N("A","Z")
t.a.push(u)
u=l.j(0,r).k(0,q)
t=T.r(new H.m("="))
u.a.push(t)
u.c=!0
u=l.j(0,s).k(0,p)
t=T.r(new H.m("</\\-!>="))
u.a.push(t)
t=l.j(0,p).k(0,p)
u=T.r(new H.m("</\\-!>="))
t.a.push(u)
u=l.j(0,s).k(0,o)
t=T.r(new H.m('"'))
u.a.push(t)
t=l.j(0,o).k(0,n)
u=T.r(new H.m('"'))
t.a.push(u)
u=l.j(0,o).k(0,"EscStr")
t=T.r(new H.m("\\"))
u.a.push(t)
t=l.j(0,"EscStr").k(0,o)
u=T.r(new H.m('"'))
t.a.push(u)
l.j(0,o).k(0,o).a.push(new T.aE())
l.j(0,s).k(0,m).a.push(new T.aE())
u=l.j(0,m).k(0,m)
t=new T.a8()
t.a=H.c([],[T.bd])
u.a.push(t)
u=T.r(new H.m('</\\-!>=_"'))
t.a.push(u)
u=T.N("a","z")
t.a.push(u)
u=T.N("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.P("Symbol")
u=l.j(0,n)
u.d=u.a.P("String")
u=l.j(0,r)
t=u.a.P(r)
u.d=t
t.aI(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.k]))
t=l.j(0,q)
t.d=t.a.P(q)
t=l.j(0,m)
t.d=t.a.P(m)
return l}}
V.hx.prototype={
e9:function(a,b){this.d=H.c([],[[P.o,W.an]])
this.N(C.b.k(b,"\n"),"#111")},
bD:function(a){},
bw:function(){return}}
V.hC.prototype={
bs:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.lG().gcB().i(0,H.e(u))
if(t==null)if(d){c.$0()
m.dk(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.l8(m.c).n(0,q)
o=W.mV("radio")
o.checked=s
o.name=u
W.Z(o,"change",new V.hD(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.l8(m.c).n(0,r.createElement("br"))},
av:function(a,b,c){return this.bs(a,b,c,!1)},
dk:function(a){var u,t,s=P.lG(),r=P.k,q=P.n1(s.gcB(),r,r)
q.m(0,this.a,a)
u=s.ed(0,q)
r=window.history
t=u.h(0)
r.toString
r.replaceState(new P.jt([],[]).cI(""),"",t)}}
V.hD.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.dk(u.d)}}}
V.hS.prototype={
eB:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.Z(q,"scroll",new V.hU(o),!1)},
dr:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.ha()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eh(C.b.hZ(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
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
if(H.oX(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.b(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.ez(C.x,n,C.e,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.e(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
el:function(a){var u,t,s,r=new V.fd("dart")
r.bl("dart")
u=new V.fz("glsl")
u.bl("glsl")
t=new V.fA("html")
t.bl("html")
s=C.b.hQ(H.c([r,u,t],[V.cQ]),new V.hV(a))
if(s!=null)return s
r=new V.hx("plain")
r.bl("plain")
return r},
dm:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.c([],[P.x])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cF(s).a5(s,"+")){b0[t]=C.a.ac(s,1)
a6.push(1)
u=!0}else if(C.a.a5(s,"-")){b0[t]=C.a.ac(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.el(a8)
r.e9(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.ez(C.x,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.la()
j.href="#"+H.e(n)
j.textContent=a7
k.appendChild(j)
l.appendChild(k)
m.appendChild(l)
o.appendChild(m)
if(u)for(i=a9,h=i,t=0;g=r.d,t<g.length;++t){s=g[t]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className="codeLineNums codeLineLight"
d=q.createElement("td")
d.className=a4
if(t>=a6.length)return H.b(a6,t)
c=a6[t]
if(c===0){++h;++i
e.textContent=""+h
d.textContent=""+i}else if(c>0){f.className="codeTableRow codeLineLightGreen"
e.className="codeLineNums codeLineGreen codeLineCenter"
d.className="codeLineNums codeLineGreen";++i
e.textContent="+"
d.textContent=""+i}else if(c<0){f.className="codeTableRow codeLineLightRed"
e.className="codeLineNums codeLineRed"
d.className="codeLineNums codeLineRed codeLineCenter";++h
e.textContent=""+h
d.textContent="-"}b=q.createElement("td")
b.className=a5
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.p)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.p)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.b.gU(s);a2.C();)d.appendChild(a2.gJ(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
hj:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
n.id="shellTable"
u=n.style
u.width="100%"
u.padding="0px"
u.marginLeft=p
u.marginRight=p
this.a.appendChild(n)
t=n.insertRow(-1)
u=t.insertCell(-1).style
u.textAlign="center"
u.verticalAlign="top"
u.marginLeft=p
u.marginRight=p
for(s=0;s<1;++s){r=o.createElement("div")
r.id=a[s]
u=r.style
u.textAlign="left"
u=r.style
u.verticalAlign="top"
u=t.insertCell(-1)
q=u.style
q.textAlign="center"
q.verticalAlign="top"
q.marginLeft=p
q.marginRight=p
u.appendChild(r)}},
ha:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=R.ij()
u.c=u.j(0,q)
t=u.j(0,q).k(0,p)
s=T.r(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new T.a8()
r=[T.bd]
s.a=H.c([],r)
t.a.push(s)
t=T.r(new H.m("*"))
s.a.push(t)
t=u.j(0,p).k(0,"BoldEnd")
s=T.r(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,o)
s=T.r(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.j(0,o).k(0,o)
s=new T.a8()
s.a=H.c([],r)
t.a.push(s)
t=T.r(new H.m("_"))
s.a.push(t)
t=u.j(0,o).k(0,n)
s=T.r(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,m)
s=T.r(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.j(0,m).k(0,m)
s=new T.a8()
s.a=H.c([],r)
t.a.push(s)
t=T.r(new H.m("`"))
s.a.push(t)
t=u.j(0,m).k(0,"CodeEnd")
s=T.r(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,l)
s=T.r(new H.m("["))
t.a.push(s)
t.c=!0
t=u.j(0,l).k(0,k)
s=T.r(new H.m("|"))
t.a.push(s)
s=u.j(0,l).k(0,j)
t=T.r(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.j(0,l).k(0,l)
t=new T.a8()
t.a=H.c([],r)
s.a.push(t)
s=T.r(new H.m("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=T.r(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new T.a8()
t.a=H.c([],r)
s.a.push(t)
s=T.r(new H.m("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new T.aE())
s=u.j(0,i).k(0,i)
t=new T.a8()
t.a=H.c([],r)
s.a.push(t)
s=T.r(new H.m("*_`["))
t.a.push(s)
s=u.j(0,"BoldEnd")
s.d=s.a.P(p)
s=u.j(0,n)
s.d=s.a.P(o)
s=u.j(0,"CodeEnd")
s.d=s.a.P(m)
s=u.j(0,j)
s.d=s.a.P("Link")
s=u.j(0,i)
s.d=s.a.P(i)
this.b=u}}
V.hU.prototype={
$1:function(a){P.lC(C.n,new V.hT(this.a))}}
V.hT.prototype={
$0:function(){var u=C.d.ap(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.hV.prototype={
$1:function(a){return a.a===this.a}}
T.k7.prototype={
$0:function(){this.a.sa7(0,F.kX(1,null,null,1))}}
T.k8.prototype={
$0:function(){this.a.sa7(0,F.kX(8,null,null,8))}}
T.k9.prototype={
$0:function(){this.a.sa7(0,F.m4(!0,40,1))}}
T.ka.prototype={
$0:function(){this.a.sa7(0,F.m4(!1,40,0))}}
T.kb.prototype={
$0:function(){this.a.sa7(0,F.oQ(10,20))}}
T.kc.prototype={
$0:function(){var u=F.dp(),t=Math.sqrt(5)/2+0.5,s=F.a5(u,new V.u(-1,t,0)),r=F.a5(u,new V.u(1,t,0)),q=-t,p=F.a5(u,new V.u(-1,q,0)),o=F.a5(u,new V.u(1,q,0)),n=F.a5(u,new V.u(0,-1,q)),m=F.a5(u,new V.u(0,1,q)),l=F.a5(u,new V.u(0,-1,t)),k=F.a5(u,new V.u(0,1,t)),j=F.a5(u,new V.u(t,0,1)),i=F.a5(u,new V.u(t,0,-1)),h=F.a5(u,new V.u(q,0,1)),g=F.a5(u,new V.u(q,0,-1))
F.O(u,s,g,m,2)
F.O(u,s,m,r,2)
F.O(u,s,r,k,2)
F.O(u,s,k,h,2)
F.O(u,s,h,g,2)
F.O(u,r,m,i,2)
F.O(u,m,g,n,2)
F.O(u,g,h,p,2)
F.O(u,h,k,l,2)
F.O(u,k,r,j,2)
F.O(u,o,i,n,2)
F.O(u,o,n,p,2)
F.O(u,o,p,l,2)
F.O(u,o,l,j,2)
F.O(u,o,j,i,2)
F.O(u,n,i,m,2)
F.O(u,p,n,g,2)
F.O(u,l,p,h,2)
F.O(u,j,l,k,2)
F.O(u,i,j,r,2)
u.e3(new F.cn(),new F.iU())
this.a.sa7(0,u)}}
T.kd.prototype={
$0:function(){this.a.sa7(0,F.mf(6,6))}}
T.ke.prototype={
$0:function(){this.a.sa7(0,F.p_())}}
T.kf.prototype={
$0:function(){this.a.sa7(0,F.oP())}}
T.kg.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.k]
u.dm("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.dm("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.es=u.h
u=J.d4.prototype
u.ev=u.h
u=P.h.prototype
u.eu=u.bI
u=W.V.prototype
u.bL=u.aj
u=W.eh.prototype
u.ew=u.aw
u=T.d0.prototype
u.er=u.aG
u.cP=u.h
u=O.c2.prototype
u.cQ=u.aB
u=O.av.prototype
u.cR=u.aB})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"ou","nD",8)
u(P,"ov","nE",8)
u(P,"ow","nF",8)
t(P,"m3","os",10)
s(W,"oJ",4,null,["$4"],["nG"],16,0)
s(W,"oK",4,null,["$4"],["nH"],16,0)
var m
r(m=E.aI.prototype,"ge7",0,0,null,["$1","$0"],["e8","i6"],0,0)
r(m,"ge5",0,0,null,["$1","$0"],["e6","i3"],0,0)
q(m,"gi1","i2",4)
q(m,"gi4","i5",4)
r(m=E.dz.prototype,"gcU",0,0,null,["$1","$0"],["cW","cV"],0,0)
p(m,"gim","ee",10)
o(m=X.dJ.prototype,"gfo","fp",5)
o(m,"gfa","fb",5)
o(m,"gfi","fj",2)
o(m,"gft","fu",11)
o(m,"gfq","fs",11)
o(m,"gfz","fA",2)
o(m,"gfD","fE",2)
o(m,"gfm","fn",2)
o(m,"gfB","fC",2)
o(m,"gfk","fl",2)
o(m,"gfF","fG",19)
o(m,"gfH","fI",5)
o(m,"gfX","fY",6)
o(m,"gfT","fU",6)
o(m,"gfV","fW",6)
r(D.br.prototype,"geD",0,0,null,["$1","$0"],["az","eE"],0,0)
r(m=D.d6.prototype,"gd8",0,0,null,["$1","$0"],["d9","fv"],0,0)
o(m,"gfJ","fK",20)
q(m,"gf4","f5",12)
q(m,"gfN","fO",12)
n(V.H.prototype,"gl","bd",7)
n(V.u.prototype,"gl","bd",7)
n(V.aX.prototype,"gl","bd",7)
r(m=U.bX.prototype,"gaO",0,0,null,["$1","$0"],["S","a9"],0,0)
q(m,"gf2","f3",13)
q(m,"gfL","fM",13)
r(m=U.dK.prototype,"gaO",0,0,null,["$1","$0"],["S","a9"],0,0)
o(m,"gbU","bV",1)
o(m,"gbW","bX",1)
o(m,"gbY","bZ",1)
r(m=U.dL.prototype,"gaO",0,0,null,["$1","$0"],["S","a9"],0,0)
o(m,"gbU","bV",1)
o(m,"gbW","bX",1)
o(m,"gbY","bZ",1)
o(m,"geW","eX",1)
o(m,"geY","eZ",1)
o(m,"ghh","hi",1)
o(m,"ghf","hg",1)
o(m,"ghd","he",1)
o(U.dM.prototype,"gf0","f1",1)
r(m=M.cR.prototype,"ga0",0,0,null,["$1","$0"],["a1","b2"],0,0)
q(m,"gfP","fQ",14)
q(m,"gfR","fS",14)
r(M.cT.prototype,"ga0",0,0,null,["$1","$0"],["a1","b2"],0,0)
r(m=M.cY.prototype,"ga0",0,0,null,["$1","$0"],["a1","b2"],0,0)
q(m,"gfe","ff",4)
q(m,"gfg","fh",4)
r(m=O.da.prototype,"gaP",0,0,null,["$1","$0"],["Y","b3"],0,0)
r(m,"gh4",0,0,null,["$1","$0"],["dc","h5"],0,0)
q(m,"gf6","f7",15)
q(m,"gf8","f9",15)
r(O.c2.prototype,"gaP",0,0,null,["$1","$0"],["Y","b3"],0,0)
r(O.dq.prototype,"gaP",0,0,null,["$1","$0"],["Y","b3"],0,0)
r(X.di.prototype,"gfc",0,0,null,["$1","$0"],["au","fd"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a3,null)
s(P.a3,[H.kE,J.a,J.a7,P.e4,P.h,H.c1,P.fH,H.cZ,H.iC,H.f5,H.ip,P.bs,H.bS,H.em,P.aM,H.fO,H.fQ,H.fJ,P.es,P.dP,P.dv,P.i4,P.dA,P.jJ,P.jn,P.jh,P.e3,P.v,P.jB,P.fX,P.f2,P.fD,P.jH,P.jG,P.aD,P.aa,P.af,P.b6,P.hv,P.dt,P.dX,P.fw,P.fy,P.o,P.S,P.bf,P.k,P.U,P.bF,P.iE,P.jq,W.f9,W.cq,W.L,W.dg,W.eh,W.jw,W.d_,W.aQ,W.jm,W.eA,P.js,P.ex,P.ji,P.bB,T.aE,T.d0,T.bd,T.hE,T.hN,R.du,R.dB,R.dC,R.ii,O.aF,O.c3,E.eZ,E.aI,E.hF,E.dz,Z.dN,Z.dO,Z.bR,Z.bu,Z.aZ,D.f1,D.bt,D.Y,X.cP,X.d5,X.fL,X.fU,X.aj,X.hj,X.ik,X.dJ,D.br,D.ab,D.hz,D.i_,V.X,V.a1,V.fn,V.db,V.aN,V.T,V.G,V.ak,V.dl,V.H,V.u,V.aX,U.dK,U.dL,U.dM,M.cT,M.cY,M.ao,A.cN,A.eS,A.a2,A.cV,A.dj,A.ds,A.h3,A.ci,A.ck,A.cl,A.dF,A.ix,F.aJ,F.fq,F.c0,F.fN,F.c9,F.hO,F.hP,F.hQ,F.hR,F.aY,F.iQ,F.iR,F.iV,F.iW,F.iX,F.iY,O.dx,O.c2,O.h4,T.id,X.kt,X.i8,X.fE,X.di,V.cQ,V.hC,V.hS])
s(J.a,[J.fI,J.d3,J.d4,J.b9,J.c_,J.ba,H.c6,H.be,W.f,W.eP,W.bo,W.at,W.I,W.dR,W.ai,W.fe,W.ff,W.dT,W.cX,W.dV,W.fh,W.i,W.dY,W.aK,W.fB,W.e_,W.aL,W.fT,W.hd,W.e5,W.e6,W.aO,W.e7,W.ea,W.aR,W.ee,W.eg,W.aT,W.ei,W.aU,W.en,W.az,W.eq,W.ih,W.aW,W.et,W.im,W.iJ,W.eB,W.eD,W.eF,W.eH,W.eJ,P.bc,P.e1,P.bg,P.ec,P.hB,P.eo,P.bi,P.ev,P.eT,P.dQ,P.dm,P.ek])
s(J.d4,[J.hw,J.bD,J.bb])
t(J.kD,J.b9)
s(J.c_,[J.d2,J.d1])
t(P.fS,P.e4)
s(P.fS,[H.dH,W.j7,W.a4,P.fs])
t(H.m,H.dH)
s(P.h,[H.fk,H.fY,H.co])
s(H.fk,[H.d8,H.fP])
s(P.fH,[H.fZ,H.j1])
t(H.h_,H.d8)
t(H.f6,H.f5)
s(P.bs,[H.hs,H.fK,H.iB,H.f0,H.hL,P.dh,P.am,P.iD,P.iz,P.ce,P.f4,P.fc])
s(H.bS,[H.kp,H.i9,H.k1,H.k2,H.k3,P.j3,P.j2,P.j4,P.j5,P.jA,P.jz,P.jS,P.jk,P.jl,P.fR,P.fW,P.fi,P.fj,P.iI,P.iF,P.iG,P.iH,P.jC,P.jD,P.jF,P.jE,P.jN,P.jM,P.jO,P.jP,W.fl,W.hf,W.hh,W.hK,W.i3,W.jc,W.hq,W.hp,W.jo,W.jp,W.jy,W.jI,P.ju,P.jT,P.ft,P.fu,P.eV,E.hG,E.hH,E.hI,E.ig,D.fo,D.fp,F.jK,F.jU,F.jW,F.jX,F.jY,F.k6,F.kj,F.kk,F.ko,F.k5,F.jV,F.j_,F.iZ,F.iS,F.iT,O.h7,O.h8,O.h9,O.ha,O.hb,O.hc,T.ie,V.ki,V.hD,V.hU,V.hT,V.hV,T.k7,T.k8,T.k9,T.ka,T.kb,T.kc,T.kd,T.ke,T.kf,T.kg])
s(H.i9,[H.i1,H.bP])
t(P.fV,P.aM)
s(P.fV,[H.P,W.j6])
t(H.dc,H.be)
s(H.dc,[H.cs,H.cu])
t(H.ct,H.cs)
t(H.c7,H.ct)
t(H.cv,H.cu)
t(H.dd,H.cv)
s(H.dd,[H.hk,H.hl,H.hm,H.hn,H.ho,H.de,H.c8])
t(P.jj,P.jJ)
t(P.jg,P.jn)
t(P.ey,P.fX)
t(P.dI,P.ey)
s(P.f2,[P.eX,P.fm])
t(P.f7,P.i4)
s(P.f7,[P.eY,P.fC,P.iM,P.iL])
t(P.iK,P.fm)
s(P.af,[P.K,P.x])
s(P.am,[P.bz,P.fF])
t(P.j9,P.bF)
s(W.f,[W.F,W.fr,W.c4,W.aS,W.cw,W.aV,W.aA,W.cy,W.j0,W.cp,P.eW,P.bn])
s(W.F,[W.V,W.b5])
s(W.V,[W.n,P.j])
s(W.n,[W.eQ,W.eR,W.bp,W.bq,W.an,W.fv,W.bZ,W.hM,W.dw,W.i6,W.i7,W.cg])
t(W.f8,W.at)
t(W.bT,W.dR)
s(W.ai,[W.fa,W.fb])
t(W.dU,W.dT)
t(W.cW,W.dU)
t(W.dW,W.dV)
t(W.fg,W.dW)
t(W.au,W.bo)
t(W.dZ,W.dY)
t(W.bW,W.dZ)
t(W.e0,W.e_)
t(W.bY,W.e0)
t(W.bj,W.i)
s(W.bj,[W.bv,W.ax,W.bA])
t(W.he,W.e5)
t(W.hg,W.e6)
t(W.e8,W.e7)
t(W.hi,W.e8)
t(W.eb,W.ea)
t(W.df,W.eb)
t(W.ef,W.ee)
t(W.hy,W.ef)
t(W.hJ,W.eg)
t(W.cx,W.cw)
t(W.hY,W.cx)
t(W.ej,W.ei)
t(W.hZ,W.ej)
t(W.i2,W.en)
t(W.er,W.eq)
t(W.ia,W.er)
t(W.cz,W.cy)
t(W.ib,W.cz)
t(W.eu,W.et)
t(W.il,W.eu)
t(W.bk,W.ax)
t(W.eC,W.eB)
t(W.j8,W.eC)
t(W.dS,W.cX)
t(W.eE,W.eD)
t(W.jd,W.eE)
t(W.eG,W.eF)
t(W.e9,W.eG)
t(W.eI,W.eH)
t(W.jr,W.eI)
t(W.eK,W.eJ)
t(W.jv,W.eK)
t(W.ja,W.j6)
t(W.jb,P.dv)
t(W.jx,W.eh)
t(P.jt,P.js)
t(P.ad,P.ji)
t(P.e2,P.e1)
t(P.fM,P.e2)
t(P.ed,P.ec)
t(P.ht,P.ed)
t(P.cd,P.j)
t(P.ep,P.eo)
t(P.i5,P.ep)
t(P.ew,P.ev)
t(P.io,P.ew)
t(P.eU,P.dQ)
t(P.hu,P.bn)
t(P.el,P.ek)
t(P.i0,P.el)
s(T.d0,[T.a8,R.dE])
s(E.eZ,[Z.cO,A.dn,T.dy])
s(D.Y,[D.b7,D.b8,D.B,X.hA])
s(X.hA,[X.d9,X.aP,X.c5,X.dD])
s(O.aF,[D.d6,U.bX,M.cR])
s(D.f1,[U.f3,U.ac])
t(U.cS,U.ac)
s(A.dn,[A.h0,A.hX])
s(A.dF,[A.dG,A.iu,A.iv,A.iw,A.is,A.W,A.it,A.J,A.ch,A.iy,A.cj,A.ae,A.bC,A.a0])
t(F.hW,F.fq)
t(F.ir,F.fN)
t(F.cn,F.iW)
s(F.iX,[F.iU,F.hr])
s(O.dx,[O.da,O.dq])
s(O.c2,[O.h1,O.h2,O.av])
s(O.av,[O.h5,O.h6])
t(T.ic,T.dy)
t(X.fx,X.i8)
s(V.cQ,[V.fd,V.fz,V.fA,V.hx])
u(H.dH,H.iC)
u(H.cs,P.v)
u(H.ct,H.cZ)
u(H.cu,P.v)
u(H.cv,H.cZ)
u(P.e4,P.v)
u(P.ey,P.jB)
u(W.dR,W.f9)
u(W.dT,P.v)
u(W.dU,W.L)
u(W.dV,P.v)
u(W.dW,W.L)
u(W.dY,P.v)
u(W.dZ,W.L)
u(W.e_,P.v)
u(W.e0,W.L)
u(W.e5,P.aM)
u(W.e6,P.aM)
u(W.e7,P.v)
u(W.e8,W.L)
u(W.ea,P.v)
u(W.eb,W.L)
u(W.ee,P.v)
u(W.ef,W.L)
u(W.eg,P.aM)
u(W.cw,P.v)
u(W.cx,W.L)
u(W.ei,P.v)
u(W.ej,W.L)
u(W.en,P.aM)
u(W.eq,P.v)
u(W.er,W.L)
u(W.cy,P.v)
u(W.cz,W.L)
u(W.et,P.v)
u(W.eu,W.L)
u(W.eB,P.v)
u(W.eC,W.L)
u(W.eD,P.v)
u(W.eE,W.L)
u(W.eF,P.v)
u(W.eG,W.L)
u(W.eH,P.v)
u(W.eI,W.L)
u(W.eJ,P.v)
u(W.eK,W.L)
u(P.e1,P.v)
u(P.e2,W.L)
u(P.ec,P.v)
u(P.ed,W.L)
u(P.eo,P.v)
u(P.ep,W.L)
u(P.ev,P.v)
u(P.ew,W.L)
u(P.dQ,P.aM)
u(P.ek,P.v)
u(P.el,W.L)})()
var v={mangledGlobalNames:{x:"int",K:"double",af:"num",k:"String",aD:"bool",bf:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.Y]},{func:1,ret:-1,args:[D.Y]},{func:1,ret:-1,args:[W.ax]},{func:1,ret:P.bf,args:[,,]},{func:1,ret:-1,args:[P.x,[P.h,E.aI]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bA]},{func:1,ret:P.K},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bv]},{func:1,ret:-1,args:[P.x,[P.h,D.ab]]},{func:1,ret:-1,args:[P.x,[P.h,U.ac]]},{func:1,ret:-1,args:[P.x,[P.h,M.ao]]},{func:1,ret:-1,args:[P.x,[P.h,V.aN]]},{func:1,ret:P.aD,args:[W.V,P.k,P.k,W.cq]},{func:1,ret:P.bf,args:[,]},{func:1,ret:P.bB,args:[,,]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:P.aD,args:[[P.h,D.ab]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bp.prototype
C.i=W.bq.prototype
C.N=W.an.prototype
C.Q=J.a.prototype
C.b=J.b9.prototype
C.R=J.d1.prototype
C.c=J.d2.prototype
C.j=J.d3.prototype
C.d=J.c_.prototype
C.a=J.ba.prototype
C.S=J.bb.prototype
C.A=J.hw.prototype
C.Y=P.dm.prototype
C.B=W.dw.prototype
C.q=J.bD.prototype
C.C=W.bk.prototype
C.D=W.cp.prototype
C.Z=new P.eY()
C.E=new P.eX()
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.F=function() {
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
C.K=function(getTagFallback) {
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
C.G=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.H=function(hooks) {
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
C.J=function(hooks) {
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
C.I=function(hooks) {
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
C.u=function(hooks) { return hooks; }

C.L=new P.hv()
C.e=new P.iK()
C.M=new P.iM()
C.f=new P.jj()
C.n=new P.b6(0)
C.O=new P.b6(5e6)
C.P=new P.fD("element",!1,!1,!1)
C.v=H.c(u([127,2047,65535,1114111]),[P.x])
C.k=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.x])
C.T=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.k])
C.l=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.x])
C.m=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.x])
C.U=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.k])
C.w=H.c(u([]),[P.k])
C.V=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.x])
C.x=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.x])
C.h=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.x])
C.y=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.x])
C.W=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.x])
C.z=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.x])
C.o=H.c(u(["bind","if","ref","repeat","syntax"]),[P.k])
C.p=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.k])
C.X=new H.f6(0,{},C.w,[P.k,P.k])})();(function staticFields(){$.as=0
$.bQ=null
$.ld=null
$.m9=null
$.m2=null
$.md=null
$.jZ=null
$.k4=null
$.l_=null
$.bI=null
$.cC=null
$.cD=null
$.kU=!1
$.ap=C.f
$.a9=[]
$.aH=null
$.ky=null
$.lj=null
$.li=null
$.cr=P.kG(P.k,P.fy)
$.lp=null
$.lt=null
$.ca=null
$.ly=null
$.lJ=null
$.lM=null
$.lL=null
$.iN=null
$.iO=null
$.iP=null
$.lK=null
$.lO=null
$.ls=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"p4","mi",function(){return H.m8("_$dart_dartClosure")})
u($,"p5","l4",function(){return H.m8("_$dart_js")})
u($,"p6","mj",function(){return H.aB(H.iq({
toString:function(){return"$receiver$"}}))})
u($,"p7","mk",function(){return H.aB(H.iq({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"p8","ml",function(){return H.aB(H.iq(null))})
u($,"p9","mm",function(){return H.aB(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pc","mp",function(){return H.aB(H.iq(void 0))})
u($,"pd","mq",function(){return H.aB(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pb","mo",function(){return H.aB(H.lE(null))})
u($,"pa","mn",function(){return H.aB(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pf","ms",function(){return H.aB(H.lE(void 0))})
u($,"pe","mr",function(){return H.aB(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pt","l5",function(){return P.nC()})
u($,"pg","mt",function(){return P.ny()})
u($,"pu","mx",function(){return H.n7(H.bH(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.x])))})
u($,"pw","mz",function(){return P.nl("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"px","mA",function(){return P.o0()})
u($,"pv","my",function(){return P.lm(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.k)})
u($,"pn","mw",function(){return Z.al(0)})
u($,"ph","mu",function(){return Z.al(511)})
u($,"pp","ar",function(){return Z.al(1)})
u($,"po","b2",function(){return Z.al(2)})
u($,"pj","b1",function(){return Z.al(4)})
u($,"pq","bm",function(){return Z.al(8)})
u($,"pr","b3",function(){return Z.al(16)})
u($,"pk","cI",function(){return Z.al(32)})
u($,"pl","cJ",function(){return Z.al(64)})
u($,"pm","mv",function(){return Z.al(96)})
u($,"ps","bO",function(){return Z.al(128)})
u($,"pi","b0",function(){return Z.al(256)})
u($,"p3","mh",function(){return new V.fn(1e-9)})
u($,"p2","C",function(){return $.mh()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.c6,DataView:H.be,ArrayBufferView:H.be,Float32Array:H.c7,Float64Array:H.c7,Int16Array:H.hk,Int32Array:H.hl,Int8Array:H.hm,Uint16Array:H.hn,Uint32Array:H.ho,Uint8ClampedArray:H.de,CanvasPixelArray:H.de,Uint8Array:H.c8,HTMLAudioElement:W.n,HTMLBRElement:W.n,HTMLBaseElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLInputElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMediaElement:W.n,HTMLMenuElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTextAreaElement:W.n,HTMLTimeElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLVideoElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLFrameSetElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,AccessibleNodeList:W.eP,HTMLAnchorElement:W.eQ,HTMLAreaElement:W.eR,Blob:W.bo,HTMLBodyElement:W.bp,HTMLCanvasElement:W.bq,CDATASection:W.b5,CharacterData:W.b5,Comment:W.b5,ProcessingInstruction:W.b5,Text:W.b5,CSSPerspective:W.f8,CSSCharsetRule:W.I,CSSConditionRule:W.I,CSSFontFaceRule:W.I,CSSGroupingRule:W.I,CSSImportRule:W.I,CSSKeyframeRule:W.I,MozCSSKeyframeRule:W.I,WebKitCSSKeyframeRule:W.I,CSSKeyframesRule:W.I,MozCSSKeyframesRule:W.I,WebKitCSSKeyframesRule:W.I,CSSMediaRule:W.I,CSSNamespaceRule:W.I,CSSPageRule:W.I,CSSRule:W.I,CSSStyleRule:W.I,CSSSupportsRule:W.I,CSSViewportRule:W.I,CSSStyleDeclaration:W.bT,MSStyleCSSProperties:W.bT,CSS2Properties:W.bT,CSSImageValue:W.ai,CSSKeywordValue:W.ai,CSSNumericValue:W.ai,CSSPositionValue:W.ai,CSSResourceValue:W.ai,CSSUnitValue:W.ai,CSSURLImageValue:W.ai,CSSStyleValue:W.ai,CSSMatrixComponent:W.at,CSSRotation:W.at,CSSScale:W.at,CSSSkew:W.at,CSSTranslation:W.at,CSSTransformComponent:W.at,CSSTransformValue:W.fa,CSSUnparsedValue:W.fb,DataTransferItemList:W.fe,HTMLDivElement:W.an,DOMException:W.ff,ClientRectList:W.cW,DOMRectList:W.cW,DOMRectReadOnly:W.cX,DOMStringList:W.fg,DOMTokenList:W.fh,Element:W.V,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.au,FileList:W.bW,FileWriter:W.fr,HTMLFormElement:W.fv,Gamepad:W.aK,History:W.fB,HTMLCollection:W.bY,HTMLFormControlsCollection:W.bY,HTMLOptionsCollection:W.bY,ImageData:W.aL,HTMLImageElement:W.bZ,KeyboardEvent:W.bv,Location:W.fT,MediaList:W.hd,MessagePort:W.c4,MIDIInputMap:W.he,MIDIOutputMap:W.hg,MimeType:W.aO,MimeTypeArray:W.hi,PointerEvent:W.ax,MouseEvent:W.ax,DragEvent:W.ax,Document:W.F,DocumentFragment:W.F,HTMLDocument:W.F,ShadowRoot:W.F,XMLDocument:W.F,Attr:W.F,DocumentType:W.F,Node:W.F,NodeList:W.df,RadioNodeList:W.df,Plugin:W.aR,PluginArray:W.hy,RTCStatsReport:W.hJ,HTMLSelectElement:W.hM,SourceBuffer:W.aS,SourceBufferList:W.hY,SpeechGrammar:W.aT,SpeechGrammarList:W.hZ,SpeechRecognitionResult:W.aU,Storage:W.i2,CSSStyleSheet:W.az,StyleSheet:W.az,HTMLTableElement:W.dw,HTMLTableRowElement:W.i6,HTMLTableSectionElement:W.i7,HTMLTemplateElement:W.cg,TextTrack:W.aV,TextTrackCue:W.aA,VTTCue:W.aA,TextTrackCueList:W.ia,TextTrackList:W.ib,TimeRanges:W.ih,Touch:W.aW,TouchEvent:W.bA,TouchList:W.il,TrackDefaultList:W.im,CompositionEvent:W.bj,FocusEvent:W.bj,TextEvent:W.bj,UIEvent:W.bj,URL:W.iJ,VideoTrackList:W.j0,WheelEvent:W.bk,Window:W.cp,DOMWindow:W.cp,CSSRuleList:W.j8,ClientRect:W.dS,DOMRect:W.dS,GamepadList:W.jd,NamedNodeMap:W.e9,MozNamedAttrMap:W.e9,SpeechRecognitionResultList:W.jr,StyleSheetList:W.jv,SVGLength:P.bc,SVGLengthList:P.fM,SVGNumber:P.bg,SVGNumberList:P.ht,SVGPointList:P.hB,SVGScriptElement:P.cd,SVGStringList:P.i5,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.bi,SVGTransformList:P.io,AudioBuffer:P.eT,AudioParamMap:P.eU,AudioTrackList:P.eW,AudioContext:P.bn,webkitAudioContext:P.bn,BaseAudioContext:P.bn,OfflineAudioContext:P.hu,WebGL2RenderingContext:P.dm,SQLResultSetRowList:P.i0})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.cs.$nativeSuperclassTag="ArrayBufferView"
H.ct.$nativeSuperclassTag="ArrayBufferView"
H.c7.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
W.cw.$nativeSuperclassTag="EventTarget"
W.cx.$nativeSuperclassTag="EventTarget"
W.cy.$nativeSuperclassTag="EventTarget"
W.cz.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(T.mb,[])
else T.mb([])})})()
//# sourceMappingURL=test.dart.js.map
