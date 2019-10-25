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
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kS"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kS"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kS(this,a,b,c,true,false,e).prototype
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
jZ:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
fE:function(){return new P.ca("No element")},
mX:function(){return new P.ca("Too many elements")},
dl:function(a,b,c,d){if(c-b<=32)H.nq(a,b,c,d)
else H.np(a,b,c,d)},
nq:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.b(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.b(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a1()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.b(a,q)
C.b.m(a,s,a[q])
s=q}C.b.m(a,s,t)}},
np:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.c.a9(a4-a3+1,6),d=a3+e,c=a4-e,b=C.c.a9(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
r=p}C.b.m(a2,d,u)
C.b.m(a2,b,s)
C.b.m(a2,c,q)
if(a3<0||a3>=a2.length)return H.b(a2,a3)
C.b.m(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.b(a2,a4)
C.b.m(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.C(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.P()
if(k<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a1()
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
if(typeof g!=="number")return g.P()
if(g<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a1()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a1()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.P()
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
H.dl(a2,a3,o-2,a5)
H.dl(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.b(a2,o)
if(!J.C(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.b(a2,n)
if(!J.C(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.P()
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
break}}}H.dl(a2,o,n,a5)}else H.dl(a2,o,n,a5)},
l:function l(a){this.a=a},
fi:function fi(){},
d4:function d4(){},
c0:function c0(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fW:function fW(a,b,c){this.a=a
this.b=b
this.$ti=c},
fX:function fX(a,b){this.a=null
this.b=a
this.c=b},
fY:function fY(a,b,c){this.a=a
this.b=b
this.$ti=c},
ck:function ck(a,b,c){this.a=a
this.b=b
this.$ti=c},
iZ:function iZ(a,b){this.a=a
this.b=b},
cV:function cV(){},
iz:function iz(){},
dC:function dC(){},
mP:function(){throw H.d(P.y("Cannot modify unmodifiable Map"))},
eH:function(a){var u,t=H.p_(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oI:function(a){return v.types[a]},
m9:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.N(a).$iB},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a2(a)
if(typeof u!=="string")throw H.d(H.ak(a))
return u},
c7:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nh:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.b(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.Y(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.C(s,q)|32)>t)return}return parseInt(a,b)},
c8:function(a){return H.n8(a)+H.lY(H.cC(a),0,null)},
n8:function(a){var u,t,s,r,q,p,o,n=J.N(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ibC){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.eH(t.length>1&&C.a.C(t,0)===36?C.a.ad(t,1):t)},
n9:function(){if(!!self.location)return self.location.href
return},
ls:function(a){var u,t,s,r,q=J.ac(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
ni:function(a){var u,t,s,r=H.c([],[P.v])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ak(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aM(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.d(H.ak(s))}return H.ls(r)},
lt:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ak(s))
if(s<0)throw H.d(H.ak(s))
if(s>65535)return H.ni(a)}return H.ls(a)},
nj:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bv:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aM(u,10))>>>0,56320|u&1023)}}throw H.d(P.Y(a,0,1114111,null,null))},
bu:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ng:function(a){var u=H.bu(a).getFullYear()+0
return u},
ne:function(a){var u=H.bu(a).getMonth()+1
return u},
na:function(a){var u=H.bu(a).getDate()+0
return u},
nb:function(a){var u=H.bu(a).getHours()+0
return u},
nd:function(a){var u=H.bu(a).getMinutes()+0
return u},
nf:function(a){var u=H.bu(a).getSeconds()+0
return u},
nc:function(a){var u=H.bu(a).getMilliseconds()+0
return u},
w:function(a){throw H.d(H.ak(a))},
b:function(a,b){if(a==null)J.ac(a)
throw H.d(H.bJ(a,b))},
bJ:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ah(!0,b,s,null)
u=J.ac(a)
if(!(b<0)){if(typeof u!=="number")return H.w(u)
t=b>=u}else t=!0
if(t)return P.I(b,a,s,null,u)
return P.dh(b,s)},
oC:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bw(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bw(a,c,!0,b,"end",u)
return new P.ah(!0,b,"end",null)},
ak:function(a){return new P.ah(!0,a,null,null)},
ox:function(a){if(typeof a!=="number")throw H.d(H.ak(a))
return a},
d:function(a){var u
if(a==null)a=new P.de()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.me})
u.name=""}else u.toString=H.me
return u},
me:function(){return J.a2(this.dartException)},
t:function(a){throw H.d(a)},
o:function(a){throw H.d(P.aA(a))},
av:function(a){var u,t,s,r,q,p
a=H.md(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.k])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.il(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
im:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lC:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ln:function(a,b){return new H.hq(a,b==null?null:b.method)},
ky:function(a,b){var u=b==null,t=u?null:b.method
return new H.fI(a,t,u?null:b.receiver)},
ab:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kj(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aM(t,16)&8191)===10)switch(s){case 438:return f.$1(H.ky(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.ln(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mi()
q=$.mj()
p=$.mk()
o=$.ml()
n=$.mo()
m=$.mp()
l=$.mn()
$.mm()
k=$.mr()
j=$.mq()
i=r.aj(u)
if(i!=null)return f.$1(H.ky(u,i))
else{i=q.aj(u)
if(i!=null){i.method="call"
return f.$1(H.ky(u,i))}else{i=p.aj(u)
if(i==null){i=o.aj(u)
if(i==null){i=n.aj(u)
if(i==null){i=m.aj(u)
if(i==null){i=l.aj(u)
if(i==null){i=o.aj(u)
if(i==null){i=k.aj(u)
if(i==null){i=j.aj(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.ln(u,i))}}return f.$1(new H.iy(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dn()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ah(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dn()
return a},
kV:function(a){var u
if(a==null)return new H.eg(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eg(a)},
oG:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
oO:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.u("Unsupported number of arguments for wrapped closure"))},
bI:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oO)
a.$identity=u
return u},
mO:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hY().constructor.prototype):Object.create(new H.bN(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.am
if(typeof t!=="number")return t.A()
$.am=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lb(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mK(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lb(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mK:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oI,a)
if(typeof a=="function")if(b)return a
else{u=c?H.la:H.km
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
mL:function(a,b,c,d){var u=H.km
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lb:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mN(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mL(t,!r,u,b)
if(t===0){r=$.am
if(typeof r!=="number")return r.A()
$.am=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bO
return new Function(r+H.e(q==null?$.bO=H.eV("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.am
if(typeof r!=="number")return r.A()
$.am=r+1
o+=r
r="return function("+o+"){return this."
q=$.bO
return new Function(r+H.e(q==null?$.bO=H.eV("self"):q)+"."+H.e(u)+"("+o+");}")()},
mM:function(a,b,c,d){var u=H.km,t=H.la
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
mN:function(a,b){var u,t,s,r,q,p,o,n=$.bO
if(n==null)n=$.bO=H.eV("self")
u=$.l9
if(u==null)u=$.l9=H.eV("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mM(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.am
if(typeof u!=="number")return u.A()
$.am=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.am
if(typeof u!=="number")return u.A()
$.am=u+1
return new Function(n+u+"}")()},
kS:function(a,b,c,d,e,f,g){return H.mO(a,b,c,d,!!e,!!f,g)},
km:function(a){return a.a},
la:function(a){return a.c},
eV:function(a){var u,t,s,r=new H.bN("self","target","receiver","name"),q=J.kv(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
oT:function(a,b){throw H.d(H.mJ(a,H.eH(b.substring(2))))},
q:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else u=!0
if(u)return a
H.oT(a,b)},
oE:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mJ:function(a,b){return new H.eW("CastError: "+P.kt(a)+": type '"+H.e(H.ot(a))+"' is not a subtype of type '"+b+"'")},
ot:function(a){var u,t=J.N(a)
if(!!t.$ibQ){u=H.oE(t)
if(u!=null)return H.oU(u)
return"Closure"}return H.c8(a)},
oZ:function(a){throw H.d(new P.f7(a))},
nn:function(a){return new H.hJ(a)},
m7:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
cC:function(a){if(a==null)return
return a.$ti},
pz:function(a,b,c){return H.kg(a["$a"+H.e(c)],H.cC(b))},
oH:function(a,b,c,d){var u=H.kg(a["$a"+H.e(c)],H.cC(b))
return u==null?null:u[d]},
kU:function(a,b,c){var u=H.kg(a["$a"+H.e(b)],H.cC(a))
return u==null?null:u[c]},
cD:function(a,b){var u=H.cC(a)
return u==null?null:u[b]},
oU:function(a){return H.bh(a,null)},
bh:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.eH(a[0].name)+H.lY(a,1,b)
if(typeof a=="function")return H.eH(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.e(b[t])}if('func' in a)return H.o1(a,b)
if('futureOr' in a)return"FutureOr<"+H.bh("type" in a?a.type:null,b)+">"
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
if(l!=null&&l!==P.a0)p+=" extends "+H.bh(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bh(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bh(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bh(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oF(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bh(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lY:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.Q("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bh(p,c)}return"<"+u.h(0)+">"},
kg:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
px:function(a,b,c){return a.apply(b,H.kg(J.N(b)["$a"+H.e(c)],H.cC(b)))},
py:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oQ:function(a){var u,t,s,r,q=$.m8.$1(a),p=$.jX[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k2[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.m2.$2(a,q)
if(q!=null){p=$.jX[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k2[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kc(u)
$.jX[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.k2[q]=u
return u}if(s==="-"){r=H.kc(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mb(a,u)
if(s==="*")throw H.d(P.ix(q))
if(v.leafTags[q]===true){r=H.kc(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mb(a,u)},
mb:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kX(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kc:function(a){return J.kX(a,!1,null,!!a.$iB)},
oR:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kc(u)
else return J.kX(u,c,null,null)},
oM:function(){if(!0===$.kW)return
$.kW=!0
H.oN()},
oN:function(){var u,t,s,r,q,p,o,n
$.jX=Object.create(null)
$.k2=Object.create(null)
H.oL()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mc.$1(q)
if(p!=null){o=H.oR(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oL:function(){var u,t,s,r,q,p,o=C.G()
o=H.bH(C.H,H.bH(C.I,H.bH(C.u,H.bH(C.u,H.bH(C.J,H.bH(C.K,H.bH(C.L(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.m8=new H.k_(r)
$.m2=new H.k0(q)
$.mc=new H.k1(p)},
bH:function(a,b){return a(b)||b},
mZ:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(P.O("Illegal RegExp pattern ("+String(p)+")",a,null))},
oX:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oD:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
md:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kZ:function(a,b,c){var u=H.oY(a,b,c)
return u},
oY:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.md(b),'g'),H.oD(c))},
f0:function f0(){},
f1:function f1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
il:function il(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hq:function hq(a,b){this.a=a
this.b=b},
fI:function fI(a,b,c){this.a=a
this.b=b
this.c=c},
iy:function iy(a){this.a=a},
kj:function kj(a){this.a=a},
eg:function eg(a){this.a=a
this.b=null},
bQ:function bQ(){},
i5:function i5(){},
hY:function hY(){},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eW:function eW(a){this.a=a},
hJ:function hJ(a){this.a=a},
M:function M(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fM:function fM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fN:function fN(a,b){this.a=a
this.$ti=b},
fO:function fO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
k1:function k1(a){this.a=a},
fH:function fH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bF:function(a){return a},
n7:function(a){return new Int8Array(a)},
aw:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bJ(b,a))},
o_:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.oC(a,b,c))
return b},
c3:function c3(){},
b5:function b5(){},
d9:function d9(){},
c4:function c4(){},
da:function da(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
db:function db(){},
c5:function c5(){},
co:function co(){},
cp:function cp(){},
cq:function cq(){},
cr:function cr(){},
oF:function(a){return J.lh(a?Object.keys(a):[],null)},
p_:function(a){return v.mangledGlobalNames[a]},
oS:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kX:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jY:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kW==null){H.oM()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.ix("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.l0()]
if(r!=null)return r
r=H.oQ(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.l0(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
mY:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.l7(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.Y(a,0,4294967295,"length",null))
return J.lh(new Array(a),b)},
lh:function(a,b){return J.kv(H.c(a,[b]))},
kv:function(a){a.fixed$length=Array
return a},
N:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cZ.prototype
return J.cY.prototype}if(typeof a=="string")return J.b0.prototype
if(a==null)return J.d_.prototype
if(typeof a=="boolean")return J.fG.prototype
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.a0)return a
return J.jY(a)},
cA:function(a){if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.a0)return a
return J.jY(a)},
eF:function(a){if(a==null)return a
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.a0)return a
return J.jY(a)},
m6:function(a){if(typeof a=="number")return J.bZ.prototype
if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(!(a instanceof P.a0))return J.bC.prototype
return a},
cB:function(a){if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(!(a instanceof P.a0))return J.bC.prototype
return a},
bL:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.a0)return a
return J.jY(a)},
C:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).p(a,b)},
l2:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.m6(a).B(a,b)},
cH:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m9(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cA(a).i(a,b)},
kk:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.m9(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eF(a).m(a,b,c)},
mA:function(a,b){return J.cB(a).C(a,b)},
mB:function(a,b,c){return J.bL(a).fL(a,b,c)},
mC:function(a,b,c,d){return J.bL(a).h4(a,b,c,d)},
mD:function(a,b){return J.cB(a).V(a,b)},
kl:function(a,b){return J.m6(a).hf(a,b)},
eI:function(a,b){return J.eF(a).J(a,b)},
mE:function(a,b,c,d){return J.bL(a).hq(a,b,c,d)},
l3:function(a,b){return J.eF(a).G(a,b)},
mF:function(a){return J.bL(a).ghb(a)},
l4:function(a){return J.bL(a).gbQ(a)},
cI:function(a){return J.N(a).gH(a)},
aT:function(a){return J.eF(a).gS(a)},
ac:function(a){return J.cA(a).gl(a)},
l5:function(a){return J.eF(a).hX(a)},
mG:function(a,b){return J.bL(a).i_(a,b)},
mH:function(a,b,c){return J.cB(a).q(a,b,c)},
mI:function(a){return J.cB(a).i8(a)},
a2:function(a){return J.N(a).h(a)},
a:function a(){},
fG:function fG(){},
d_:function d_(){},
d0:function d0(){},
hu:function hu(){},
bC:function bC(){},
b1:function b1(){},
b_:function b_(a){this.$ti=a},
kw:function kw(a){this.$ti=a},
Z:function Z(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bZ:function bZ(){},
cZ:function cZ(){},
cY:function cY(){},
b0:function b0(){}},P={
nC:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.ou()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bI(new P.j0(s),1)).observe(u,{childList:true})
return new P.j_(s,u,t)}else if(self.setImmediate!=null)return P.ov()
return P.ow()},
nD:function(a){self.scheduleImmediate(H.bI(new P.j1(a),0))},
nE:function(a){self.setImmediate(H.bI(new P.j2(a),0))},
nF:function(a){P.kG(C.n,a)},
kG:function(a,b){var u=C.c.a9(a.a,1000)
return P.nK(u<0?0:u,b)},
lB:function(a,b){var u=C.c.a9(a.a,1000)
return P.nL(u<0?0:u,b)},
nK:function(a,b){var u=new P.em()
u.en(a,b)
return u},
nL:function(a,b){var u=new P.em()
u.eo(a,b)
return u},
on:function(){var u,t
for(;u=$.bG,u!=null;){$.cz=null
t=u.b
$.bG=t
if(t==null)$.cy=null
u.a.$0()}},
os:function(){$.kQ=!0
try{P.on()}finally{$.cz=null
$.kQ=!1
if($.bG!=null)$.l1().$1(P.m3())}},
oq:function(a){var u=new P.dJ(a)
if($.bG==null){$.bG=$.cy=u
if(!$.kQ)$.l1().$1(P.m3())}else $.cy=$.cy.b=u},
or:function(a){var u,t,s=$.bG
if(s==null){P.oq(a)
$.cz=$.cy
return}u=new P.dJ(a)
t=$.cz
if(t==null){u.b=s
$.bG=$.cz=u}else{u.b=t.b
$.cz=t.b=u
if(u.b==null)$.cy=u}},
lA:function(a,b){var u=$.aj
if(u===C.f)return P.kG(a,b)
return P.kG(a,u.hc(b))},
nt:function(a,b){var u=$.aj
if(u===C.f)return P.lB(a,b)
return P.lB(a,u.d0(b,P.dv))},
lZ:function(a,b,c,d,e){var u={}
u.a=d
P.or(new P.jP(u,e))},
oo:function(a,b,c,d){var u,t=$.aj
if(t===c)return d.$0()
$.aj=c
u=t
try{t=d.$0()
return t}finally{$.aj=u}},
op:function(a,b,c,d,e){var u,t=$.aj
if(t===c)return d.$1(e)
$.aj=c
u=t
try{t=d.$1(e)
return t}finally{$.aj=u}},
j0:function j0(a){this.a=a},
j_:function j_(a,b,c){this.a=a
this.b=b
this.c=c},
j1:function j1(a){this.a=a},
j2:function j2(a){this.a=a},
em:function em(){this.c=0},
jx:function jx(a,b){this.a=a
this.b=b},
jw:function jw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dJ:function dJ(a){this.a=a
this.b=null},
dq:function dq(){},
i0:function i0(){},
dv:function dv(){},
jG:function jG(){},
jP:function jP(a,b){this.a=a
this.b=b},
jg:function jg(){},
jh:function jh(a,b){this.a=a
this.b=b},
ji:function ji(a,b,c){this.a=a
this.b=b
this.c=c},
n0:function(a,b){return new H.M([a,b])},
kz:function(a,b){return new H.M([a,b])},
n2:function(a){return H.oG(a,new H.M([null,null]))},
d3:function(a){return new P.jd([a])},
kL:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nJ:function(a,b){var u=new P.dY(a,b)
u.c=a.e
return u},
mW:function(a,b,c){var u,t
if(P.kR(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.k])
$.a6.push(a)
try{P.o2(a,u)}finally{if(0>=$.a6.length)return H.b($.a6,-1)
$.a6.pop()}t=P.ly(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
ku:function(a,b,c){var u,t
if(P.kR(a))return b+"..."+c
u=new P.Q(b)
$.a6.push(a)
try{t=u
t.a=P.ly(t.a,a,", ")}finally{if(0>=$.a6.length)return H.b($.a6,-1)
$.a6.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kR:function(a){var u,t
for(u=$.a6.length,t=0;t<u;++t)if(a===$.a6[t])return!0
return!1},
o2:function(a,b){var u,t,s,r,q,p,o,n=a.gS(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.w())return
u=H.e(n.gI(n))
b.push(u)
m+=u.length+2;++l}if(!n.w()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gI(n);++l
if(!n.w()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gI(n);++l
for(;n.w();r=q,q=p){p=n.gI(n);++l
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
a.G(0,new P.fP(u))
return u},
li:function(a,b){var u,t,s=P.d3(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t)s.n(0,a[t])
return s},
kA:function(a){var u,t={}
if(P.kR(a))return"{...}"
u=new P.Q("")
try{$.a6.push(a)
u.a+="{"
t.a=!0
J.l3(a,new P.fU(t,u))
u.a+="}"}finally{if(0>=$.a6.length)return H.b($.a6,-1)
$.a6.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jd:function jd(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
je:function je(a){this.a=a
this.c=this.b=null},
dY:function dY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fP:function fP(a){this.a=a},
fQ:function fQ(){},
r:function r(){},
fT:function fT(){},
fU:function fU(a,b){this.a=a
this.b=b},
aF:function aF(){},
jy:function jy(){},
fV:function fV(){},
dD:function dD(a,b){this.a=a
this.$ti=b},
jk:function jk(){},
dZ:function dZ(){},
es:function es(){},
nw:function(a,b,c,d){if(b instanceof Uint8Array)return P.nx(!1,b,c,d)
return},
nx:function(a,b,c,d){var u,t,s=$.ms()
if(s==null)return
u=0===c
if(u&&!0)return P.kJ(s,b)
t=b.length
d=P.bb(c,d,t)
if(u&&d===t)return P.kJ(s,b)
return P.kJ(s,b.subarray(c,d))},
kJ:function(a,b){if(P.nz(b))return
return P.nA(a,b)},
nA:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ab(t)}return},
nz:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
ny:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ab(t)}return},
m0:function(a,b,c){var u,t,s
for(u=J.cA(a),t=b;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.am()
if((s&127)!==s)return t-b}return c-b},
l8:function(a,b,c,d,e,f){if(C.c.b8(f,4)!==0)throw H.d(P.O("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.O("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.O("Invalid base64 padding, more than two '=' characters",a,b))},
eS:function eS(){},
eT:function eT(){},
eY:function eY(){},
f2:function f2(){},
fk:function fk(){},
fC:function fC(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fB:function fB(a){this.a=a},
iH:function iH(){},
iJ:function iJ(){},
jE:function jE(a){this.b=0
this.c=a},
iI:function iI(a){this.a=a},
jD:function jD(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eG:function(a,b,c){var u=H.nh(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.O(a,null,null))},
mT:function(a){if(a instanceof H.bQ)return a.h(0)
return"Instance of '"+H.e(H.c8(a))+"'"},
n3:function(a,b,c){var u,t,s=J.mY(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
lj:function(a,b,c){var u,t=H.c([],[c])
for(u=J.aT(a);u.w();)t.push(u.gI(u))
if(b)return t
return J.kv(t)},
cb:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.bb(b,c,u)
return H.lt(b>0||c<u?C.b.e4(a,b,c):a)}if(!!J.N(a).$ic5)return H.nj(a,b,P.bb(b,c,a.length))
return P.nr(a,b,c)},
nr:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.d(P.Y(b,0,J.ac(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.Y(c,b,J.ac(a),q,q))
t=J.aT(a)
for(s=0;s<b;++s)if(!t.w())throw H.d(P.Y(b,0,s,q,q))
r=[]
if(u)for(;t.w();)r.push(t.gI(t))
else for(s=b;s<c;++s){if(!t.w())throw H.d(P.Y(c,b,s,q,q))
r.push(t.gI(t))}return H.lt(r)},
nl:function(a){return new H.fH(a,H.mZ(a,!1,!0,!1,!1,!1))},
ly:function(a,b,c){var u=J.aT(b)
if(!u.w())return a
if(c.length===0){do a+=H.e(u.gI(u))
while(u.w())}else{a+=H.e(u.gI(u))
for(;u.w();)a=a+c+H.e(u.gI(u))}return a},
lE:function(){var u=H.n9()
if(u!=null)return P.nv(u)
throw H.d(P.y("'Uri.base' is not supported"))},
et:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.my().b
if(typeof b!=="string")H.t(H.ak(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghp().bR(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bv(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mQ:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mR:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cQ:function(a){if(a>=10)return""+a
return"0"+a},
ld:function(a){return new P.aW(1000*a)},
kt:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a2(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mT(a)},
cJ:function(a){return new P.ah(!1,null,null,a)},
l7:function(a,b,c){return new P.ah(!0,a,b,c)},
dh:function(a,b){return new P.bw(null,null,!0,a,b,"Value not in range")},
Y:function(a,b,c,d,e){return new P.bw(b,c,!0,a,d,"Invalid value")},
bb:function(a,b,c){if(0>a||a>c)throw H.d(P.Y(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.Y(b,a,c,"end",null))
return b}return c},
lu:function(a,b){if(typeof a!=="number")return a.P()
if(a<0)throw H.d(P.Y(a,0,null,b,null))},
I:function(a,b,c,d,e){var u=e==null?J.ac(b):e
return new P.fD(u,!0,a,c,"Index out of range")},
y:function(a){return new P.iA(a)},
ix:function(a){return new P.iw(a)},
lx:function(a){return new P.ca(a)},
aA:function(a){return new P.f_(a)},
u:function(a){return new P.dR(a)},
O:function(a,b,c){return new P.fu(a,b,c)},
n4:function(a,b,c){var u,t,s=H.c([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.b(s,u)
s[u]=t}return s},
kY:function(a){H.oS(a)},
nv:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.C(a,4)^58)*3|C.a.C(a,0)^100|C.a.C(a,1)^97|C.a.C(a,2)^116|C.a.C(a,3)^97)>>>0
if(u===0)return P.lD(e<e?C.a.q(a,0,e):a,5,f).gdX()
else if(u===32)return P.lD(C.a.q(a,5,e),0,f).gdX()}t=new Array(8)
t.fixed$length=Array
s=H.c(t,[P.v])
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
if(typeof r!=="number")return r.ia()
if(r>=0)if(P.m_(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.A()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.P()
if(typeof n!=="number")return H.w(n)
if(m<n)n=m
if(typeof o!=="number")return o.P()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.P()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.P()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.a7(a,"..",o)))j=n>o+2&&C.a.a7(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a7(a,"file",0)){if(q<=0){if(!C.a.a7(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.a.q(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.aR(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a7(a,"http",0)){if(t&&p+3===o&&C.a.a7(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aR(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a7(a,"https",0)){if(t&&p+4===o&&C.a.a7(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aR(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.q(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jn(a,r,q,p,o,n,m,k)}return P.nM(a,0,e,r,q,p,o,n,m,k)},
lG:function(a){var u=P.k
return C.b.hv(H.c(a.split("&"),[u]),P.kz(u,u),new P.iF(C.e))},
nu:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iC(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.V(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eG(C.a.q(a,s,t),n,n)
if(typeof p!=="number")return p.a1()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.b(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eG(C.a.q(a,s,c),n,n)
if(typeof p!=="number")return p.a1()
if(p>255)k.$2(l,s)
if(r>=u)return H.b(j,r)
j[r]=p
return j},
lF:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iD(a),d=new P.iE(e,a)
if(a.length<2)e.$1("address is too short")
u=H.c([],[P.v])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.V(a,t)
if(p===58){if(t===b){++t
if(C.a.V(a,t)!==58)e.$2("invalid start colon.",t)
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
i+=2}else{f=C.c.aM(h,8)
if(i<0||i>=k)return H.b(l,i)
l[i]=f
f=i+1
if(f>=k)return H.b(l,f)
l[f]=h&255
i+=2}}return l},
nM:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nU(a,b,d)
else{if(d===b)P.bE(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nV(a,u,e-1):""
s=P.nR(a,e,f,!1)
if(typeof f!=="number")return f.A()
r=f+1
if(typeof g!=="number")return H.w(g)
q=r<g?P.nT(P.eG(C.a.q(a,r,g),new P.jz(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nS(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.P()
o=h<i?P.kN(a,h+1,i,n):n
return new P.bD(j,t,s,q,p,o,i<c?P.nQ(a,i+1,c):n)},
lS:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bE:function(a,b,c){throw H.d(P.O(c,a,b))},
nT:function(a,b){if(a!=null&&a===P.lS(b))return
return a},
nR:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.V(a,b)===91){if(typeof c!=="number")return c.O()
u=c-1
if(C.a.V(a,u)!==93)P.bE(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nO(a,t,u)
if(typeof s!=="number")return s.P()
if(s<u){r=s+1
q=P.lX(a,C.a.a7(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lF(a,t,s)
return C.a.q(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.w(c)
p=b
for(;p<c;++p)if(C.a.V(a,p)===58){s=C.a.bh(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lX(a,C.a.a7(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lF(a,b,s)
return"["+C.a.q(a,b,s)+q+"]"}return P.nX(a,b,c)},
nO:function(a,b,c){var u,t=C.a.bh(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.w(c)
u=t<c}else u=!1
return u?t:c},
lX:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.Q(d):null
if(typeof c!=="number")return H.w(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.V(a,u)
if(r===37){q=P.kO(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.Q("")
o=l.a+=C.a.q(a,t,u)
if(p)q=C.a.q(a,u,u+3)
else if(q==="%")P.bE(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.Q("")
if(t<u){l.a+=C.a.q(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.V(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.Q("")
l.a+=C.a.q(a,t,u)
l.a+=P.kM(r)
u+=m
t=u}}}if(l==null)return C.a.q(a,b,c)
if(t<c)l.a+=C.a.q(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
nX:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.w(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.V(a,u)
if(q===37){p=P.kO(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.Q("")
n=C.a.q(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.q(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.b(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.Q("")
if(t<u){s.a+=C.a.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.b(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bE(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.V(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.Q("")
n=C.a.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kM(q)
u+=l
t=u}}}}if(s==null)return C.a.q(a,b,c)
if(t<c){n=C.a.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nU:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lU(C.a.C(a,b)))P.bE(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.C(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.b(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bE(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.q(a,b,c)
return P.nN(t?a.toLowerCase():a)},
nN:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nV:function(a,b,c){return P.cw(a,b,c,C.W,!1)},
nS:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cw(a,b,c,C.z,!0):C.j.iy(d,new P.jA(),P.k).k(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a5(u,"/"))u="/"+u
return P.nW(u,e,f)},
nW:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a5(a,"/"))return P.nY(a,!u||c)
return P.nZ(a)},
kN:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.d(P.cJ("Both query and queryParameters specified"))
return P.cw(a,b,c,C.l,!0)}if(d==null)return
u=new P.Q("")
t.a=""
d.G(0,new P.jB(new P.jC(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nQ:function(a,b,c){return P.cw(a,b,c,C.l,!0)},
kO:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.V(a,b+1)
t=C.a.V(a,p)
s=H.jZ(u)
r=H.jZ(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aM(q,4)
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bv(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.q(a,b,b+3).toUpperCase()
return},
kM:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.c(u,[P.v])
t[0]=37
t[1]=C.a.C(m,a>>>4)
t[2]=C.a.C(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.c(u,[P.v])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.fX(a,6*r)&63|s
if(q>=u)return H.b(t,q)
t[q]=37
o=q+1
n=C.a.C(m,p>>>4)
if(o>=u)return H.b(t,o)
t[o]=n
n=q+2
o=C.a.C(m,p&15)
if(n>=u)return H.b(t,n)
t[n]=o
q+=3}}return P.cb(t,0,null)},
cw:function(a,b,c,d,e){var u=P.lW(a,b,c,d,e)
return u==null?C.a.q(a,b,c):u},
lW:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.P()
if(typeof c!=="number")return H.w(c)
if(!(o<c))break
c$0:{u=C.a.V(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.b(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kO(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.b(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bE(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.V(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kM(u)}}if(m==null)m=new P.Q("")
m.a+=C.a.q(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.w(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.P()
if(n<c)m.a+=C.a.q(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lV:function(a){if(C.a.a5(a,"."))return!0
return C.a.dr(a,"/.")!==-1},
nZ:function(a){var u,t,s,r,q,p,o
if(!P.lV(a))return a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.C(p,"..")){o=u.length
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
if(r>=2&&P.lU(J.mA(a,0)))for(u=1;u<r;++u){t=C.a.C(a,u)
if(t===58)return C.a.q(a,0,u)+"%3A"+C.a.ad(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.b(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nP:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.C(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.cJ("Invalid URL encoding"))}}return u},
kP:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.C(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.q(a,b,c)
else r=new H.l(C.a.q(a,b,c))}else{r=H.c([],[P.v])
for(s=a.length,q=b;q<c;++q){t=C.a.C(a,q)
if(t>127)throw H.d(P.cJ("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.cJ("Truncated URI"))
r.push(P.nP(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iI(!1).bR(r)},
lU:function(a){var u=a|32
return 97<=u&&u<=122},
lD:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.v])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.C(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.O(m,a,t))}}if(s<0&&t>b)throw H.d(P.O(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.C(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gax(l)
if(r!==44||t!==p+7||!C.a.a7(a,"base64",p+1))throw H.d(P.O("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.F.hG(0,a,o,u)
else{n=P.lW(a,o,u,C.l,!0)
if(n!=null)a=C.a.aR(a,o,u,n)}return new P.iB(a,l,c)},
o0:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.n4(22,new P.jK(),P.bz),n=new P.jJ(o),m=new P.jL(),l=new P.jM(),k=n.$2(0,225)
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
m_:function(a,b,c,d,e){var u,t,s,r,q,p=$.mz()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.b(p,d)
t=p[d]
s=C.a.C(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.b(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.b(e,q)
e[q]=u}return d},
ax:function ax(){},
a7:function a7(a,b){this.a=a
this.b=b},
L:function L(){},
aW:function aW(a){this.a=a},
fg:function fg(){},
fh:function fh(){},
bo:function bo(){},
de:function de(){},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bw:function bw(a,b,c,d,e,f){var _=this
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
iA:function iA(a){this.a=a},
iw:function iw(a){this.a=a},
ca:function ca(a){this.a=a},
f_:function f_(a){this.a=a},
ht:function ht(){},
dn:function dn(){},
f7:function f7(a){this.a=a},
dR:function dR(a){this.a=a},
fu:function fu(a,b,c){this.a=a
this.b=b
this.c=c},
fw:function fw(){},
v:function v(){},
h:function h(){},
fF:function fF(){},
n:function n(){},
P:function P(){},
b6:function b6(){},
aa:function aa(){},
a0:function a0(){},
k:function k(){},
Q:function Q(a){this.a=a},
iF:function iF(a){this.a=a},
iC:function iC(a){this.a=a},
iD:function iD(a){this.a=a},
iE:function iE(a,b){this.a=a
this.b=b},
bD:function bD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jz:function jz(a,b){this.a=a
this.b=b},
jA:function jA(){},
jC:function jC(a,b){this.a=a
this.b=b},
jB:function jB(a){this.a=a},
iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c},
jK:function jK(){},
jJ:function jJ(a){this.a=a},
jL:function jL(){},
jM:function jM(){},
jn:function jn(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
j6:function j6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oA:function(a){var u,t=J.N(a)
if(!!t.$iaE){u=t.gd6(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.er(a.data,a.height,a.width)},
oz:function(a){if(a instanceof P.er)return{data:a.a,height:a.b,width:a.c}
return a},
aP:function(a){var u,t,s,r,q
if(a==null)return
u=P.kz(P.k,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
oy:function(a){var u={}
a.G(0,new P.jQ(u))
return u},
jp:function jp(){},
jr:function jr(a,b){this.a=a
this.b=b},
er:function er(a,b,c){this.a=a
this.b=b
this.c=c},
jQ:function jQ(a){this.a=a},
jq:function jq(a,b){this.a=a
this.b=b},
fq:function fq(a,b){this.a=a
this.b=b},
fr:function fr(){},
fs:function fs(){},
jc:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nI:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jf:function jf(){},
a9:function a9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b2:function b2(){},
fK:function fK(){},
b7:function b7(){},
hr:function hr(){},
hz:function hz(){},
c9:function c9(){},
i1:function i1(){},
j:function j(){},
bc:function bc(){},
ik:function ik(){},
dW:function dW(){},
dX:function dX(){},
e6:function e6(){},
e7:function e7(){},
ei:function ei(){},
ej:function ej(){},
ep:function ep(){},
eq:function eq(){},
bz:function bz(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(a){this.a=a},
eQ:function eQ(){},
bk:function bk(){},
hs:function hs(){},
dK:function dK(){},
dj:function dj(){},
hX:function hX(){},
ee:function ee(){},
ef:function ef(){}},W={
l6:function(){var u=document.createElement("a")
return u},
ko:function(){var u=document.createElement("canvas")
return u},
mS:function(a,b,c){var u=document.body,t=(u&&C.r).ai(u,a,b,c)
t.toString
u=new H.ck(new W.a1(t),new W.fj(),[W.E])
return u.gaH(u)},
kq:function(a){return"wheel"},
bS:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bL(a)
t=u.gdR(a)
if(typeof t==="string")r=u.gdR(a)}catch(s){H.ab(s)}return r},
mV:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.ab(u)}return s},
jb:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lQ:function(a,b,c,d){var u=W.jb(W.jb(W.jb(W.jb(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
X:function(a,b,c,d){var u=W.m1(new W.j9(c),W.i)
if(u!=null&&!0)J.mC(a,b,u,!1)
return new W.j8(a,b,u,!1)},
lP:function(a){var u=W.l6(),t=window.location
u=new W.cm(new W.jj(u,t))
u.ef(a)
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
lR:function(){var u=P.k,t=P.li(C.o,u),s=H.c(["TEMPLATE"],[u])
t=new W.ju(t,P.d3(u),P.d3(u),P.d3(u),null)
t.ek(null,new H.fY(C.o,new W.jv(),[H.cD(C.o,0),u]),s,null)
return t},
m1:function(a,b){var u=$.aj
if(u===C.f)return a
return u.d0(a,b)},
m:function m(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
bl:function bl(){},
bm:function bm(){},
bn:function bn(){},
aU:function aU(){},
f3:function f3(){},
F:function F(){},
bR:function bR(){},
f4:function f4(){},
ae:function ae(){},
an:function an(){},
f5:function f5(){},
f6:function f6(){},
f9:function f9(){},
ai:function ai(){},
fd:function fd(){},
cS:function cS(){},
cT:function cT(){},
fe:function fe(){},
ff:function ff(){},
j4:function j4(a,b){this.a=a
this.b=b},
S:function S(){},
fj:function fj(){},
i:function i(){},
f:function f(){},
ao:function ao(){},
bU:function bU(){},
fp:function fp(){},
ft:function ft(){},
aD:function aD(){},
fA:function fA(){},
bW:function bW(){},
aE:function aE(){},
bX:function bX(){},
br:function br(){},
fR:function fR(){},
hb:function hb(){},
c2:function c2(){},
hc:function hc(){},
hd:function hd(a){this.a=a},
he:function he(){},
hf:function hf(a){this.a=a},
aH:function aH(){},
hg:function hg(){},
ar:function ar(){},
a1:function a1(a){this.a=a},
E:function E(){},
dc:function dc(){},
aJ:function aJ(){},
hw:function hw(){},
hH:function hH(){},
hI:function hI(a){this.a=a},
hK:function hK(){},
aK:function aK(){},
hV:function hV(){},
aL:function aL(){},
hW:function hW(){},
aM:function aM(){},
hZ:function hZ(){},
i_:function i_(a){this.a=a},
at:function at(){},
dr:function dr(){},
i2:function i2(){},
i3:function i3(){},
cc:function cc(){},
aN:function aN(){},
au:function au(){},
i6:function i6(){},
i7:function i7(){},
id:function id(){},
aO:function aO(){},
by:function by(){},
ii:function ii(){},
ij:function ij(){},
bd:function bd(){},
iG:function iG(){},
iY:function iY(){},
bg:function bg(){},
cl:function cl(){},
j5:function j5(){},
dM:function dM(){},
ja:function ja(){},
e3:function e3(){},
jo:function jo(){},
js:function js(){},
j3:function j3(){},
j7:function j7(a){this.a=a},
j8:function j8(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
j9:function j9(a){this.a=a},
cm:function cm(a){this.a=a},
H:function H(){},
dd:function dd(a){this.a=a},
ho:function ho(a){this.a=a},
hn:function hn(a,b,c){this.a=a
this.b=b
this.c=c},
eb:function eb(){},
jl:function jl(){},
jm:function jm(){},
ju:function ju(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jv:function jv(){},
jt:function jt(){},
cW:function cW(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aI:function aI(){},
jj:function jj(a,b){this.a=a
this.b=b},
eu:function eu(a){this.a=a},
jF:function jF(a){this.a=a},
dL:function dL(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e4:function e4(){},
e5:function e5(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
cs:function cs(){},
ct:function ct(){},
ec:function ec(){},
ed:function ed(){},
eh:function eh(){},
ek:function ek(){},
el:function el(){},
cu:function cu(){},
cv:function cv(){},
en:function en(){},
eo:function eo(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){}},T={
J:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.u("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.C(a,0)
t=C.a.C(b,0)
s=new T.hC()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
p:function(a){var u=new T.hL()
u.ed(a)
return u},
ay:function ay(){},
cX:function cX(){},
b3:function b3(){},
a3:function a3(){this.a=null},
hC:function hC(){this.b=this.a=null},
hL:function hL(){this.a=null},
kF:function(a){var u=new T.i9()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
dt:function dt(){},
i8:function i8(){},
i9:function i9(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ia:function ia(a){var _=this
_.a=a
_.e=_.d=_.b=null},
ib:function ib(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={
ig:function(){var u=new R.ie(),t=P.k
u.a=new H.M([t,R.dp])
u.b=new H.M([t,R.dx])
return u},
dp:function dp(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dw:function dw(a,b,c){this.a=a
this.b=b
this.c=c},
dx:function dx(a){this.b=a
this.c=null},
ie:function ie(){this.c=this.b=this.a=null},
dz:function dz(a){this.b=a
this.a=this.c=null}},O={
kp:function(a){var u=new O.az([a])
u.ba(a)
return u},
az:function az(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c1:function c1(){this.b=this.a=null},
lk:function(){var u,t=new O.d6(),s=O.kp(V.aG)
t.e=s
s.aU(t.geR(),t.geT())
s=new O.ap(t,"emission")
s.c=new A.a_(!1,!1,!1)
s.f=new V.V(0,0,0)
t.f=s
s=new O.ap(t,"ambient")
s.c=new A.a_(!1,!1,!1)
s.f=new V.V(0,0,0)
t.r=s
s=new O.ap(t,"diffuse")
s.c=new A.a_(!1,!1,!1)
s.f=new V.V(0,0,0)
t.x=s
s=new O.ap(t,"invDiffuse")
s.c=new A.a_(!1,!1,!1)
s.f=new V.V(0,0,0)
t.y=s
s=new O.h4(t,"specular")
s.c=new A.a_(!1,!1,!1)
s.f=new V.V(0,0,0)
s.ch=100
t.z=s
s=new O.h0(t,"bump")
s.c=new A.a_(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.ap(t,"reflect")
s.c=new A.a_(!1,!1,!1)
s.f=new V.V(0,0,0)
t.cx=s
s=new O.h3(t,"refract")
s.c=new A.a_(!1,!1,!1)
s.f=new V.V(0,0,0)
s.ch=1
t.cy=s
s=new O.h_(t,"alpha")
s.c=new A.a_(!1,!1,!1)
s.f=1
t.db=s
s=new D.d2()
s.ba(D.a8)
s.e=H.c([],[D.fc])
s.f=H.c([],[D.hx])
s.r=H.c([],[D.bx])
s.y=s.x=null
s.cf(s.geP(),s.gfp(),s.gfu())
t.dx=s
u=new O.h2()
u.b=new V.ad(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.x
s=u==null?s.x=D.G():u
s.n(0,t.gfN())
s=t.dx
u=s.y
s=u==null?s.y=D.G():u
s.n(0,t.gel())
t.fr=null
return t},
fa:function fa(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d6:function d6(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h5:function h5(a,b){this.a=a
this.b=b},
h6:function h6(){},
h7:function h7(a,b){this.a=a
this.b=b},
h8:function h8(){},
h9:function h9(a,b){this.a=a
this.b=b},
ha:function ha(){},
h_:function h_(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d7:function d7(){},
h0:function h0(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ap:function ap(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h2:function h2(){var _=this
_.e=_.d=_.c=_.b=null},
h3:function h3(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h4:function h4(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ds:function ds(){}},E={
ks:function(){var u,t=new E.aC()
t.a=""
t.b=!0
u=O.kp(E.aC)
t.y=u
u.aU(t.ghH(),t.ghK())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sac(0,null)
t.saS(null)
t.saQ(null)
return t},
nm:function(a,b){var u=new E.hD(a)
u.ec(a,b)
return u},
ns:function(a,b,c,d,e){var u,t,s=J.N(a)
if(!!s.$ibn)return E.lz(a,!0,!0,!0,!1)
u=W.ko()
t=u.style
t.width="100%"
t.height="100%"
s.gbQ(a).n(0,u)
return E.lz(u,!0,!0,!0,!1)},
lz:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.du(),p=C.i.cd(a,"webgl2",P.n2(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.t(P.u("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.nm(p,a)
u=new T.ia(p)
u.b=p.getParameter(3379)
p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dE(a)
t=new X.fJ()
t.d=P.d3(P.v)
u.b=t
t=new X.hh(u)
t.f=0
t.r=V.b8()
t.x=V.b8()
t.ch=t.Q=1
u.c=t
t=new X.fS(u)
t.r=0
t.x=V.b8()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ih(u)
t.f=V.b8()
t.r=V.b8()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.c([],[[P.dq,P.a0]])
u.z=t
s=document
t.push(W.X(s,"contextmenu",u.gf1(),!1))
u.z.push(W.X(a,"focus",u.gf7(),!1))
u.z.push(W.X(a,"blur",u.geV(),!1))
u.z.push(W.X(s,"keyup",u.gfb(),!1))
u.z.push(W.X(s,"keydown",u.gf9(),!1))
u.z.push(W.X(a,"mousedown",u.gff(),!1))
u.z.push(W.X(a,"mouseup",u.gfj(),!1))
u.z.push(W.X(a,r,u.gfh(),!1))
t=u.z
W.kq(a)
W.kq(a)
t.push(W.X(a,W.kq(a),u.gfl(),!1))
u.z.push(W.X(s,r,u.gf3(),!1))
u.z.push(W.X(s,"mouseup",u.gf5(),!1))
u.z.push(W.X(s,"pointerlockchange",u.gfn(),!1))
u.z.push(W.X(a,"touchstart",u.gfG(),!1))
u.z.push(W.X(a,"touchend",u.gfC(),!1))
u.z.push(W.X(a,"touchmove",u.gfE(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a7(Date.now(),!1)
q.db=0
q.cL()
return q},
eU:function eU(){},
aC:function aC(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hD:function hD(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hE:function hE(a){this.a=a},
hF:function hF(a){this.a=a},
hG:function hG(a){this.a=a},
du:function du(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
ic:function ic(a){this.a=a}},Z={
kK:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bF(c)),35044)
a.bindBuffer(b,null)
return new Z.dH(b,u)},
ag:function(a){return new Z.bf(a)},
dH:function dH(a,b){this.a=a
this.b=b},
cL:function cL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dI:function dI(a){this.a=a},
bP:function bP(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bq:function bq(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a){this.a=a}},D={
G:function(){var u=new D.bp()
u.d=0
return u},
eX:function eX(){},
bp:function bp(){var _=this
_.d=_.c=_.b=_.a=null},
fm:function fm(a){this.a=a},
fn:function fn(a){this.a=a},
W:function W(){this.b=null},
aY:function aY(){this.b=null},
aZ:function aZ(){this.b=null},
x:function x(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
fc:function fc(){},
a8:function a8(){},
d2:function d2(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
hx:function hx(){},
bx:function bx(){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},X={cM:function cM(a,b){this.a=a
this.b=b},d1:function d1(a,b){this.a=a
this.b=b},fJ:function fJ(){this.d=this.b=this.a=null},d5:function d5(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fS:function fS(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},b4:function b4(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hh:function hh(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hy:function hy(){},dy:function dy(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ih:function ih(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dE:function dE(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mU:function(a){var u=new X.fv(),t=new V.ad(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.kD()
u.r=t
return u},
lo:function(a,b){var u,t=new X.df()
t.c=1.0471975511965976
t.d=0.1
t.e=2000
t.saQ(b)
u=t.c
if(!(Math.abs(u-a)<$.z().a)){t.c=a
u=new D.x("fov",u,a)
u.b=!0
t.a3(u)}u=t.d
if(!(Math.abs(u-0.1)<$.z().a)){t.d=0.1
u=new D.x("near",u,0.1)
u.b=!0
t.a3(u)}u=t.e
if(!(Math.abs(u-2000)<$.z().a)){t.e=2000
u=new D.x("far",u,2000)
u.b=!0
t.a3(u)}return t},
eR:function eR(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
kn:function kn(){},
fv:function fv(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
df:function df(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
i4:function i4(){}},V={
p0:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.b8(a-b,u)
return(a<0?a+u:a)+b},
D:function(a,b,c){if(a==null)return C.a.ak("null",c)
return C.a.ak(C.d.dV(Math.abs(a-0)<$.z().a?0:a,b),c+b+1)},
bK:function(a,b,c){var u,t,s,r,q,p,o=H.c([],[P.k])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.o)(a),++s){r=V.D(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.a.ak(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
cE:function(a){return C.d.i5(Math.pow(2,C.S.c_(Math.log(H.ox(a))/Math.log(2))))},
bs:function(){var u=$.lm
return u==null?$.lm=V.aq(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aq:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kC:function(a,b,c){return V.aq(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kB:function(a,b,c,d){return V.aq(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
ll:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aq(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
b8:function(){var u=$.lq
return u==null?$.lq=new V.a4(0,0):u},
lr:function(){var u=$.b9
return u==null?$.b9=new V.T(0,0,0):u},
kD:function(){var u=$.lw
return u==null?$.lw=V.lv(0,0,1,1):u},
lv:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.di(a,b,c,d)},
ci:function(){var u=$.lL
return u==null?$.lL=new V.A(0,0,0):u},
nB:function(){var u=$.iK
return u==null?$.iK=new V.A(-1,0,0):u},
lM:function(){var u=$.iL
return u==null?$.iL=new V.A(0,1,0):u},
lN:function(){var u=$.iM
return u==null?$.iM=new V.A(0,0,1):u},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fl:function fl(a){this.a=a},
d8:function d8(a,b,c,d,e,f,g,h,i){var _=this
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
a4:function a4(a,b){this.a=a
this.b=b},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
ba:function ba(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
di:function di(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
R:function R(a,b){this.a=a
this.b=b},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
cj:function cj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oV:function(a){P.nt(C.P,new V.kd(a))},
no:function(a){var u=new V.hQ()
u.ee(a,!0)
return u},
cN:function cN(){},
kd:function kd(a){this.a=a},
f8:function f8(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fx:function fx(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fz:function fz(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hv:function hv(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hA:function hA(a){this.a=a
this.c=null},
hB:function hB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hQ:function hQ(){this.b=this.a=null},
hS:function hS(a){this.a=a},
hR:function hR(a){this.a=a},
hT:function hT(a){this.a=a},
ma:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="testCanvas",a3=null,a4=V.no("Test 045"),a5=W.ko()
a5.className="pageLargeCanvas"
a5.id=a2
a4.a.appendChild(a5)
u=[P.k]
a4.cX(H.c(["Test of the Material Lighting shader with a textured spot light. ","Use Ctrl plus the mouse to move the light."],u))
a4.h3(H.c(["shapes"],u))
a4.cX(H.c(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a2)
if(t==null)H.t(P.u("Failed to find an element with the identifier, testCanvas."))
s=E.ns(t,!0,!0,!0,!1)
r=new X.eR()
r.d=r.c=r.b=r.a=512
r.e=!0
r.f=!1
r.x=r.r=1
r.ch=T.kF(a3)
r.cx=new V.ad(0,0,0,1)
r.cy=!0
r.db=2000
r.dx=!0
r.dy=V.kD()
r.sat(0,512)
r.sao(0,512)
q=new V.ad(0,0,0,1)
if(!r.cx.p(0,q)){p=r.cx
r.cx=q
o=new D.x("color",p,q)
o.b=!0
r.a3(o)}o=r.db
if(!(Math.abs(o-2000)<$.z().a)){r.db=2000
o=new D.x("depth",o,2000)
o.b=!0
r.a3(o)}o=r.r
if(!(Math.abs(o-1)<$.z().a)){r.r=1
o=new D.x("autoResizeScalarX",o,1)
o.b=!0
r.a3(o)}o=r.x
if(!(Math.abs(o-1)<$.z().a)){r.x=1
o=new D.x("autoResizeScalarY",o,1)
o.b=!0
r.a3(o)}n=V.kD()
if(!J.C(r.dy,n)){p=r.dy
r.dy=n
o=new D.x("region",p,n)
o.b=!0
r.a3(o)}m=U.fy()
m.n(0,U.aV(V.kC(0,0,-4)))
m.n(0,U.lH(!0,s.x))
o=r.ch
l=s.f.hE("../resources/Test.png")
q=new V.V(1,1,1)
k=new D.bx()
k.r=new V.V(1,1,1)
k.ch=1.0471975511965976
k.cx=1
k.dx=k.cy=1.5707963267948966
k.db=!0
k.dy=1
k.fx=k.fr=0
k.fy=!0
k.a=V.lr()
k.b=V.lN()
k.c=V.lM()
k.d=V.nB()
p=k.f
k.f=m
m.gt().n(0,k.gaV())
j=new D.x("mover",p,k.f)
j.b=!0
k.X(j)
if(!k.r.p(0,q)){p=k.r
k.r=q
j=new D.x("color",p,q)
j.b=!0
k.X(j)}j=k.x
if(j!==l){if(j!=null)j.gt().K(0,k.gaV())
p=k.x
k.x=l
l.gt().n(0,k.gaV())
l=new D.x("texture",p,k.x)
l.b=!0
k.X(l)}l=k.y
if(l!==o){if(l!=null)l.gt().K(0,k.gaV())
p=k.y
k.y=o
o.gt().n(0,k.gaV())
o=new D.x("shadow",p,k.y)
o.b=!0
k.X(o)}o=k.ch
if(!(Math.abs(o-0.5)<$.z().a)){k.ch=0.5
l=1/(Math.sqrt(2)*Math.tan(k.ch))
k.z=l
k.Q=l*k.cx
o=new D.x("fov",o,k.ch)
o.b=!0
k.X(o)}o=k.cx
if(!(Math.abs(o-1)<$.z().a)){k.cx=1
l=k.z
if(typeof l!=="number")return l.B()
k.Q=l
o=new D.x("ratio",o,1)
o.b=!0
k.X(o)}o=k.cy
if(!(Math.abs(o-1.5707963267948966)<$.z().a)){k.cy=1.5707963267948966
o=new D.x("cutoff",o,1.5707963267948966)
o.b=!0
k.X(o)}o=k.dx
if(!(Math.abs(o-1.5707963267948966)<$.z().a)){k.dx=1.5707963267948966
o=new D.x("coneAngle",o,1.5707963267948966)
o.b=!0
k.X(o)}o=$.lO
if(o==null){o=new V.cj(1,0.00390625,0.0000152587890625,0)
$.lO=o
i=o}else i=o
if(!J.C(k.e,i)){p=k.e
k.e=i
o=new D.x("shadowAdjust",p,i)
o.b=!0
k.X(o)}o=k.dy
if(!(Math.abs(o-0)<$.z().a)){k.dy=0
o=new D.x("attenuation0",o,0)
o.b=!0
k.X(o)}o=k.fr
if(!(Math.abs(o-0.1)<$.z().a)){k.fr=0.1
o=new D.x("attenuation1",o,0.1)
o.b=!0
k.X(o)}o=k.fx
if(!(Math.abs(o-0)<$.z().a)){k.fx=0
o=new D.x("attenuation2",o,0)
o.b=!0
k.X(o)}if(k.db){k.db=!1
o=new D.x("enableCutOff",!0,!1)
o.b=!0
k.X(o)}h=O.lk()
h.dx.n(0,k)
o=h.r
o.saP(0,new V.V(0.1,0.1,0.1))
o=h.x
o.saP(0,new V.V(0.7,0.7,0.7))
o=h.z
o.saP(0,new V.V(0.3,0.3,0.3))
o=h.z
o.cO(new A.a_(!0,!1,!1))
o.cP(100)
g=E.ks()
g.sac(0,F.mf())
f=E.ks()
f.saQ(U.aV(V.kB(5,5,5,1)))
o=F.kT(1,a3,a3,1)
o.bZ()
f.sac(0,o)
e=U.fy()
e.n(0,U.lH(!1,s.x))
e.n(0,U.aV(V.ll(3.141592653589793)))
e.n(0,U.aV(V.kC(0,0,5)))
d=E.ks()
o=U.fy()
o.n(0,U.aV(V.kB(0.1,0.1,0.1,1)))
o.n(0,m)
d.saQ(o)
d.sac(0,F.jR(0,!1,!0,40,1))
o=O.lk()
l=o.f
l.saP(0,new V.V(1,1,1))
d.saS(o)
c=M.lg()
c.saS(h)
c.e.n(0,g)
c.e.n(0,f)
c.e.n(0,d)
c.b.saQ(e)
o=U.fy()
o.n(0,U.aV(V.kB(-1,1,-1,1)))
l=new U.bY()
l.c=V.bs()
l.d=0
l.a=m
m.gt().n(0,l.gaJ())
j=new D.x("mover",a3,l.a)
j.b=!0
l.U(j)
o.n(0,l)
b=Math.cos(3.141592653589793)
a=Math.sin(3.141592653589793)
o.n(0,U.aV(V.aq(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1)))
o.n(0,U.aV(V.kC(0,0,2)))
a0=X.lo(0.5,o)
a1=M.lg()
a1.sdS(0,r)
o=new O.fa()
o.b=1
o.c=10
o.f=o.e=o.d=!1
if(!(Math.abs(0)<$.z().a)){l=new D.x("start",1,1)
l.b=!0
o.a2(l)}l=o.c
if(!(Math.abs(l-20)<$.z().a)){o.c=20
l=new D.x("stop",l,20)
l.b=!0
o.a2(l)}if(!o.f){o.f=!0
l=new D.x("focus",!1,!0)
l.b=!0
o.a2(l)}a1.saS(o)
a1.e.n(0,g)
a1.e.n(0,f)
a1.sd3(a0)
o=M.as
l=H.c([a1,c],[o])
j=new M.cO()
j.ba(o)
j.e=!0
j.f=!1
j.r=null
j.aU(j.gfw(),j.gfA())
j.aa(0,l)
o=s.d
if(o!==j){if(o!=null)o.gt().K(0,s.gcn())
s.d=j
j.gt().n(0,s.gcn())
s.co()}o=new V.hA("shapes")
u=u.getElementById("shapes")
o.c=u
if(u==null)H.t("Failed to find shapes for RadioGroup")
o.aN(0,"Cube",new V.k4(g))
o.aN(0,"Cylinder",new V.k5(g))
o.aN(0,"Bar",new V.k6(g))
o.aN(0,"Cone",new V.k7(g))
o.aN(0,"Sphere",new V.k8(g))
o.cV(0,"Toroid",new V.k9(g),!0)
o.aN(0,"Knot",new V.ka(g))
u=s.Q
if(u==null)u=s.Q=D.G()
o=u.b
u=o==null?u.b=H.c([],[{func:1,ret:-1,args:[D.W]}]):o
u.push(new V.kb(a4,h))
V.oV(s)},
k4:function k4(a){this.a=a},
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a},
ka:function ka(a){this.a=a},
kb:function kb(a,b){this.a=a
this.b=b}},U={
lc:function(){var u=new U.eZ()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
aV:function(a){var u=new U.cP()
u.a=a
return u},
fy:function(){var u=new U.bV()
u.ba(U.af)
u.aU(u.gei(),u.gfs())
u.e=null
u.f=V.bs()
u.r=0
return u},
lH:function(a,b){var u,t,s,r=new U.dF(),q=U.lc()
q.se_(0,!0)
q.sdu(6.283185307179586)
q.sdw(0)
q.sa4(0,0)
q.sdv(100)
q.sY(0)
q.sd5(0.5)
r.b=q
u=r.gaJ()
q.gt().n(0,u)
q=U.lc()
q.se_(0,!0)
q.sdu(6.283185307179586)
q.sdw(0)
q.sa4(0,0)
q.sdv(100)
q.sY(0)
q.sd5(0.5)
r.c=q
q.gt().n(0,u)
r.d=null
r.r=r.f=r.e=!1
r.y=r.x=2.5
r.Q=4
r.ch=r.cx=!1
r.db=r.cy=0
r.dx=null
r.dy=0
r.fx=r.fr=null
t=new X.bt(a,!1,!1)
s=r.d
r.d=t
q=new D.x("modifiers",s,t)
q.b=!0
r.U(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.x("invertX",q,!1)
q.b=!0
r.U(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.x("invertY",q,!1)
q.b=!0
r.U(q)}r.ha(b)
return r},
eZ:function eZ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cP:function cP(){this.b=this.a=null},
bV:function bV(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
bY:function bY(){var _=this
_.d=_.c=_.b=_.a=null},
af:function af(){},
dF:function dF(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
lg:function(){var u,t,s=new M.cU()
s.a=!0
u=O.kp(E.aC)
s.e=u
u.aU(s.geY(),s.gf_())
s.y=s.x=s.r=s.f=null
t=X.mU(null)
s.sd3(null)
s.sdS(0,t)
s.saS(null)
return s},
cO:function cO(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cU:function cU(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
as:function as(){}},A={
n5:function(a,b){var u=a.b0,t=new A.fZ(b,u)
t.cm(b,u)
t.eb(a,b)
return t},
n6:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gas(a0)+a1.gas(a1)+a2.gas(a2)+a3.gas(a3)+a4.gas(a4)+a5.gas(a5)+a6.gas(a6)+a7.gas(a7)+a8.gas(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.o)(a9),++t)f+="_"+H.e(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.o)(b0),++t)f+="_"+H.e(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.o)(b1),++t)f+="_"+H.e(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.al()
if(k){u=$.aS()
g=new Z.bf(g.a|u.a)}if(j){u=$.aR()
g=new Z.bf(g.a|u.a)}if(i){u=$.aQ()
g=new Z.bf(g.a|u.a)}return new A.h1(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
jN:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jO:function(a,b,c){var u
A.jN(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kh(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
o6:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jN(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
o3:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jO(b,t,"ambient")
b.a+="\n"},
o4:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jO(b,t,"diffuse")
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
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jO(b,t,"invDiffuse")
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
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jO(b,t,"specular")
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
ob:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jN(b,t,"reflect")
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
oc:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jN(b,t,"refract")
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
o5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.kh(t)
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
if(!a.b.a)n=!1
else n=!0
if(n)o.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
if(!a.c.a)r=!1
else r=!0
if(r)m.push("diffuse(norm, lit.viewDir)")
if(!a.d.a)r=!1
else r=!0
if(r)m.push("invDiffuse(norm, lit.viewDir)")
if(!a.e.a)r=!1
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
if(!a.b.a)o=!1
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
if(!a.c.a)r=!1
else r=!0
if(r)k.push("diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)k.push("invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
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
if(!a.b.a)r=!1
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
if(!a.c.a)u=!1
else u=!0
if(u)i.push("diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)i.push("invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
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
if(!a.b.a)u=!1
else u=!0
if(u)t.push("ambientColor")
if(!a.c.a)u=!1
else u=!0
if(u)t.push("diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)t.push("invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.b.k(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
of:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.Q("")
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
A.o6(a,j)
A.o3(a,j)
A.o4(a,j)
A.o7(a,j)
A.od(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.ob(a,j)
A.oc(a,j)}A.o9(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.o5(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.oa(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.oe(a,q[o],j)
A.o8(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.c([],[P.k])
if(r){j.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
n.push("lightAccum")
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ad(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ad(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ad(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)n.push("emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)n.push("reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.b.k(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
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
kh:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.ad(a,1)},
kH:function(a,b,c,d,e){var u=new A.ip(a,c,e)
u.f=d
P.n3(d,0,P.v)
return u},
cK:function cK(a,b,c){this.a=a
this.b=b
this.c=c},
eM:function eM(a){this.a=a},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
fb:function fb(a,b){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fZ:function fZ(a,b){var _=this
_.ij=_.ii=_.da=_.d9=_.b0=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ix=_.iw=_.iv=_.bY=_.bX=_.bW=_.bV=_.bU=_.bT=_.iu=_.it=_.di=_.is=_.ir=_.dh=_.dg=_.iq=_.ip=_.df=_.de=_.io=_.im=_.dd=_.il=_.ik=_.dc=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cR:function cR(a,b){this.a=a
this.b=b},
dg:function dg(a,b){this.a=a
this.b=b},
dm:function dm(a,b){this.a=a
this.b=b},
h1:function h1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.d9=b4},
ce:function ce(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cg:function cg(a,b,c,d,e,f,g,h,i,j){var _=this
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
dk:function dk(){},
dA:function dA(){},
iu:function iu(a){this.a=a},
dB:function dB(a,b,c){this.a=a
this.c=b
this.d=c},
ir:function ir(a,b,c){this.a=a
this.c=b
this.d=c},
is:function is(a,b,c){this.a=a
this.c=b
this.d=c},
it:function it(a,b,c){this.a=a
this.c=b
this.d=c},
ip:function ip(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
U:function U(a,b,c){this.a=a
this.c=b
this.d=c},
iq:function iq(a,b,c){this.a=a
this.c=b
this.d=c},
K:function K(a,b,c){this.a=a
this.c=b
this.d=c},
cd:function cd(a,b,c){this.a=a
this.c=b
this.d=c},
iv:function iv(a,b,c){this.a=a
this.c=b
this.d=c},
cf:function cf(a,b,c){this.a=a
this.c=b
this.d=c},
a5:function a5(a,b,c){this.a=a
this.c=b
this.d=c},
bA:function bA(a,b,c){this.a=a
this.c=b
this.d=c},
bB:function bB(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kT:function(a,b,c,d){var u=F.kE()
F.cx(u,b,c,d,a,1,0,0,1)
F.cx(u,b,c,d,a,0,1,0,3)
F.cx(u,b,c,d,a,0,0,1,2)
F.cx(u,b,c,d,a,-1,0,0,0)
F.cx(u,b,c,d,a,0,-1,0,0)
F.cx(u,b,c,d,a,0,0,-1,3)
u.aw()
return u},
jI:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cx:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.A(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.A(u+a3,t+a1,s+a2)
q=new V.A(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.A(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jI(i)
l=F.jI(j.b)
k=F.l_(d,a0,new F.jH(j,F.jI(j.c),F.jI(j.d),l,m,c),b)
if(k!=null)a.b3(k)},
m5:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.kE()
t=b?-1:1
s=-6.283185307179586/e
r=H.c([],[F.be])
q=u.a
p=new V.A(0,0,t)
p=p.u(0,Math.sqrt(p.D(p)))
r.push(q.h7(new V.ba(a,-1,-1,-1),new V.ad(1,1,1,1),new V.T(0,0,c),new V.A(0,0,t),new V.a4(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.w(k)
j=new V.A(m,l,t).u(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dG(new V.ba(a,-1,-1,-1),null,new V.ad(i,g,h,1),new V.T(m*k,l*k,c),new V.A(0,0,t),new V.a4(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.n(0,f)
r.push(f)}u.d.h5(r)
return u},
jR:function(a,b,c,d,e){return F.oB(b,c,1,new F.jS(a,e),d)},
oB:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.l_(c,e,new F.jU(d),null)
if(u==null)return
u.aw()
u.bM()
if(b)u.b3(F.m5(3,!1,1,new F.jV(d),e))
if(a)u.b3(F.m5(1,!0,-1,new F.jW(d),e))
return u},
oW:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.ke()
t=F.kT(a,null,new F.kf(s,1),b)
t.bM()
return t},
mf:function(){return F.m4(15,30,0.5,1,new F.ki())},
oP:function(){return F.m4(12,120,0.3,1,new F.k3(3,2))},
m4:function(a,b,c,d,e){var u=F.l_(a,b,new F.jT(e,d,b,c),null)
if(u==null)return
u.aw()
u.bM()
return u},
l_:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kE()
t=H.c([],[F.be])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dG(g,g,new V.ad(p,0,0,1),g,g,new V.a4(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.bS(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.dG(g,g,new V.ad(j,i,h,1),g,g,new V.a4(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.bS(d))}}u.d.h6(a+1,b+1,t)
return u},
bT:function(a,b,c){var u=new F.aX(),t=a.a
if(t==null)H.t(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.u("May not create a face with vertices attached to different shapes."))
u.bK(a)
u.bL(b)
u.fT(c)
u.a.a.d.b.push(u)
u.a.a.Z()
return u},
n_:function(a,b){var u=new F.c_(),t=a.a
if(t==null)H.t(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.u("May not create a line with vertices attached to different shapes."))
u.bK(a)
u.bL(b)
u.a.a.c.b.push(u)
u.a.a.Z()
return u},
kE:function(){var u=new F.hM(),t=new F.iN(u)
t.b=!1
t.c=H.c([],[F.be])
u.a=t
t=new F.hP(u)
t.b=H.c([],[F.c6])
u.b=t
t=new F.hO(u)
t.b=H.c([],[F.c_])
u.c=t
t=new F.hN(u)
t.b=H.c([],[F.aX])
u.d=t
u.e=null
return u},
dG:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.be(),r=new F.iV()
r.b=H.c([],[F.c6])
s.b=r
r=new F.iR()
u=[F.c_]
r.b=H.c([],u)
r.c=H.c([],u)
s.c=r
r=new F.iO()
u=[F.aX]
r.b=H.c([],u)
r.c=H.c([],u)
r.d=H.c([],u)
s.d=r
h=$.mt()
s.e=0
r=$.al()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aS().a)!==0?e:t
s.x=(u&$.aR().a)!==0?b:t
s.y=(u&$.bi().a)!==0?f:t
s.z=(u&$.bj().a)!==0?g:t
s.Q=(u&$.mu().a)!==0?c:t
s.ch=(u&$.bM().a)!==0?i:0
s.cx=(u&$.aQ().a)!==0?a:t
return s},
jH:function jH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jS:function jS(a,b){this.a=a
this.b=b},
jU:function jU(a){this.a=a},
jV:function jV(a){this.a=a},
jW:function jW(a){this.a=a},
ke:function ke(){},
kf:function kf(a,b){this.a=a
this.b=b},
ki:function ki(){},
k3:function k3(a,b){this.a=a
this.b=b},
jT:function jT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aX:function aX(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fo:function fo(){},
hU:function hU(){},
c_:function c_(){this.b=this.a=null},
fL:function fL(){},
io:function io(){},
c6:function c6(){this.a=null},
hM:function hM(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hN:function hN(a){this.a=a
this.b=null},
hO:function hO(a){this.a=a
this.b=null},
hP:function hP(a){this.a=a
this.b=null},
be:function be(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iX:function iX(a){this.a=a},
iW:function iW(a){this.a=a},
iN:function iN(a){this.a=a
this.c=this.b=null},
iO:function iO(){this.d=this.c=this.b=null},
iP:function iP(a,b){this.a=a
this.b=b},
iQ:function iQ(a,b){this.a=a
this.b=b},
iR:function iR(){this.c=this.b=null},
iT:function iT(){},
iS:function iS(){},
iU:function iU(){},
hp:function hp(){},
iV:function iV(){this.b=null}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kx.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gH:function(a){return H.c7(a)},
h:function(a){return"Instance of '"+H.e(H.c8(a))+"'"}}
J.fG.prototype={
h:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iax:1}
J.d_.prototype={
p:function(a,b){return null==b},
h:function(a){return"null"},
gH:function(a){return 0}}
J.d0.prototype={
gH:function(a){return 0},
h:function(a){return String(a)}}
J.hu.prototype={}
J.bC.prototype={}
J.b1.prototype={
h:function(a){var u=a[$.mh()]
if(u==null)return this.e8(a)
return"JavaScript function for "+H.e(J.a2(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b_.prototype={
dN:function(a,b){if(!!a.fixed$length)H.t(P.y("removeAt"))
if(b<0||b>=a.length)throw H.d(P.dh(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var u
if(!!a.fixed$length)H.t(P.y("remove"))
for(u=0;u<a.length;++u)if(J.C(a[u],b)){a.splice(u,1)
return!0}return!1},
aa:function(a,b){var u,t
if(!!a.fixed$length)H.t(P.y("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.o)(b),++t)a.push(b[t])},
G:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.d(P.aA(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
hC:function(a){return this.k(a,"")},
hu:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.d(P.aA(a))}return u},
hv:function(a,b,c){return this.hu(a,b,c,null)},
ht:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.d(P.aA(a))}throw H.d(H.fE())},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
e4:function(a,b,c){if(b<0||b>a.length)throw H.d(P.Y(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.Y(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.cD(a,0)])
return H.c(a.slice(b,c),[H.cD(a,0)])},
ghs:function(a){if(a.length>0)return a[0]
throw H.d(H.fE())},
gax:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.fE())},
cZ:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.d(P.aA(a))}return!1},
bs:function(a,b){if(!!a.immutable$list)H.t(P.y("sort"))
H.dl(a,0,a.length-1,b)},
R:function(a,b){var u
for(u=0;u<a.length;++u)if(J.C(a[u],b))return!0
return!1},
h:function(a){return P.ku(a,"[","]")},
gS:function(a){return new J.Z(a,a.length)},
gH:function(a){return H.c7(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.y("set length"))
if(b<0)throw H.d(P.Y(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.bJ(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.t(P.y("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bJ(a,b))
a[b]=c},
$ih:1,
$in:1}
J.kw.prototype={}
J.Z.prototype={
gI:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.o(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bZ.prototype={
hf:function(a,b){var u
if(typeof b!=="number")throw H.d(H.ak(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbi(b)
if(this.gbi(a)===u)return 0
if(this.gbi(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbi:function(a){return a===0?1/a<0:a<0},
i5:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.y(""+a+".toInt()"))},
c_:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.y(""+a+".floor()"))},
a0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.y(""+a+".round()"))},
dV:function(a,b){var u
if(b>20)throw H.d(P.Y(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbi(a))return"-"+u
return u},
b6:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.Y(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.V(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.y("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.b(t,1)
u=t[1]
if(3>=s)return H.b(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.B("0",r)},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
b8:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ea:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cR(a,b)},
a9:function(a,b){return(a|0)===a?a/b|0:this.cR(a,b)},
cR:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.y("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aM:function(a,b){var u
if(a>0)u=this.cQ(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fX:function(a,b){if(b<0)throw H.d(H.ak(b))
return this.cQ(a,b)},
cQ:function(a,b){return b>31?0:a>>>b},
$iL:1,
$iaa:1}
J.cZ.prototype={$iv:1}
J.cY.prototype={}
J.b0.prototype={
V:function(a,b){if(b<0)throw H.d(H.bJ(a,b))
if(b>=a.length)H.t(H.bJ(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.d(H.bJ(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!=="string")throw H.d(P.l7(b,null,null))
return a+b},
aR:function(a,b,c,d){var u,t
c=P.bb(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a7:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.Y(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.a7(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ak(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.d(P.dh(b,null))
if(b>c)throw H.d(P.dh(b,null))
if(c>a.length)throw H.d(P.dh(c,null))
return a.substring(b,c)},
ad:function(a,b){return this.q(a,b,null)},
i8:function(a){return a.toLowerCase()},
B:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ak:function(a,b){var u=b-a.length
if(u<=0)return a
return this.B(" ",u)+a},
bh:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.Y(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dr:function(a,b){return this.bh(a,b,0)},
h:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ik:1}
H.l.prototype={
gl:function(a){return this.a.length},
i:function(a,b){return C.a.V(this.a,b)},
$ar:function(){return[P.v]},
$ah:function(){return[P.v]},
$an:function(){return[P.v]}}
H.fi.prototype={}
H.d4.prototype={
gS:function(a){return new H.c0(this,this.gl(this))},
bq:function(a,b){return this.e7(0,b)}}
H.c0.prototype={
gI:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=J.cA(s),q=r.gl(s)
if(t.b!==q)throw H.d(P.aA(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.J(s,u);++t.c
return!0}}
H.fW.prototype={
gS:function(a){return new H.fX(J.aT(this.a),this.b)},
gl:function(a){return J.ac(this.a)},
J:function(a,b){return this.b.$1(J.eI(this.a,b))},
$ah:function(a,b){return[b]}}
H.fX.prototype={
w:function(){var u=this,t=u.b
if(t.w()){u.a=u.c.$1(t.gI(t))
return!0}u.a=null
return!1},
gI:function(a){return this.a}}
H.fY.prototype={
gl:function(a){return J.ac(this.a)},
J:function(a,b){return this.b.$1(J.eI(this.a,b))},
$ad4:function(a,b){return[b]},
$ah:function(a,b){return[b]}}
H.ck.prototype={
gS:function(a){return new H.iZ(J.aT(this.a),this.b)}}
H.iZ.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(t.$1(u.gI(u)))return!0
return!1},
gI:function(a){var u=this.a
return u.gI(u)}}
H.cV.prototype={}
H.iz.prototype={
m:function(a,b,c){throw H.d(P.y("Cannot modify an unmodifiable list"))}}
H.dC.prototype={}
H.f0.prototype={
h:function(a){return P.kA(this)},
m:function(a,b,c){return H.mP()},
$iP:1}
H.f1.prototype={
gl:function(a){return this.a},
bf:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bf(0,b))return
return this.cB(b)},
cB:function(a){return this.b[a]},
G:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cB(s))}}}
H.il.prototype={
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
H.hq.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fI.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iy.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kj.prototype={
$1:function(a){if(!!J.N(a).$ibo)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:9}
H.eg.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bQ.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
gi9:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i5.prototype={}
H.hY.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.eH(u)+"'"}}
H.bN.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bN))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.c7(this.a)
else u=typeof t!=="object"?J.cI(t):H.c7(t)
return(u^H.c7(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.c8(u))+"'")}}
H.eW.prototype={
h:function(a){return this.a}}
H.hJ.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.M.prototype={
gl:function(a){return this.a},
ghB:function(a){return this.a===0},
ga6:function(a){return new H.fN(this,[H.cD(this,0)])},
bf:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cw(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cw(t,b)}else return s.hy(b)},
hy:function(a){var u=this,t=u.d
if(t==null)return!1
return u.c2(u.bB(t,u.c1(a)),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bb(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bb(r,b)
s=t==null?null:t.b
return s}else return q.hz(b)},
hz:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bB(r,s.c1(a))
t=s.c2(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cq(u==null?s.b=s.bD():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cq(t==null?s.c=s.bD():t,b,c)}else s.hA(b,c)},
hA:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bD()
u=r.c1(a)
t=r.bB(q,u)
if(t==null)r.bI(q,u,[r.bE(a,b)])
else{s=r.c2(t,a)
if(s>=0)t[s].b=b
else t.push(r.bE(a,b))}},
G:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.d(P.aA(u))
t=t.c}},
cq:function(a,b,c){var u=this.bb(a,b)
if(u==null)this.bI(a,b,this.bE(b,c))
else u.b=c},
eI:function(){this.r=this.r+1&67108863},
bE:function(a,b){var u,t=this,s=new H.fM(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eI()
return s},
c1:function(a){return J.cI(a)&0x3ffffff},
c2:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.C(a[t].a,b))return t
return-1},
h:function(a){return P.kA(this)},
bb:function(a,b){return a[b]},
bB:function(a,b){return a[b]},
bI:function(a,b,c){a[b]=c},
eB:function(a,b){delete a[b]},
cw:function(a,b){return this.bb(a,b)!=null},
bD:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bI(t,u,t)
this.eB(t,u)
return t}}
H.fM.prototype={}
H.fN.prototype={
gl:function(a){return this.a.a},
gS:function(a){var u=this.a,t=new H.fO(u,u.r)
t.c=u.e
return t}}
H.fO.prototype={
gI:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.aA(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.k_.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.k0.prototype={
$2:function(a,b){return this.a(a,b)}}
H.k1.prototype={
$1:function(a){return this.a(a)}}
H.fH.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ink:1}
H.c3.prototype={$ic3:1}
H.b5.prototype={$ib5:1}
H.d9.prototype={
gl:function(a){return a.length},
$iB:1,
$aB:function(){}}
H.c4.prototype={
i:function(a,b){H.aw(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aw(b,a,a.length)
a[b]=c},
$ar:function(){return[P.L]},
$ih:1,
$ah:function(){return[P.L]},
$in:1,
$an:function(){return[P.L]}}
H.da.prototype={
m:function(a,b,c){H.aw(b,a,a.length)
a[b]=c},
$ar:function(){return[P.v]},
$ih:1,
$ah:function(){return[P.v]},
$in:1,
$an:function(){return[P.v]}}
H.hi.prototype={
i:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.hj.prototype={
i:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.hk.prototype={
i:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.hl.prototype={
i:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.hm.prototype={
i:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.db.prototype={
gl:function(a){return a.length},
i:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.c5.prototype={
gl:function(a){return a.length},
i:function(a,b){H.aw(b,a,a.length)
return a[b]},
$ic5:1,
$ibz:1}
H.co.prototype={}
H.cp.prototype={}
H.cq.prototype={}
H.cr.prototype={}
P.j0.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.j_.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.j1.prototype={
$0:function(){this.a.$0()}}
P.j2.prototype={
$0:function(){this.a.$0()}}
P.em.prototype={
en:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bI(new P.jx(this,b),0),a)
else throw H.d(P.y("`setTimeout()` not found."))},
eo:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bI(new P.jw(this,a,Date.now(),b),0),a)
else throw H.d(P.y("Periodic timer."))},
$idv:1}
P.jx.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jw.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.ea(u,q)}s.c=r
t.d.$1(s)}}
P.dJ.prototype={}
P.dq.prototype={}
P.i0.prototype={}
P.dv.prototype={}
P.jG.prototype={}
P.jP.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.de():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.h(0)
throw u}}
P.jg.prototype={
i1:function(a){var u,t,s,r=null
try{if(C.f===$.aj){a.$0()
return}P.oo(r,r,this,a)}catch(s){u=H.ab(s)
t=H.kV(s)
P.lZ(r,r,this,u,t)}},
i2:function(a,b){var u,t,s,r=null
try{if(C.f===$.aj){a.$1(b)
return}P.op(r,r,this,a,b)}catch(s){u=H.ab(s)
t=H.kV(s)
P.lZ(r,r,this,u,t)}},
i3:function(a,b){return this.i2(a,b,null)},
hc:function(a){return new P.jh(this,a)},
d0:function(a,b){return new P.ji(this,a,b)}}
P.jh.prototype={
$0:function(){return this.a.i1(this.b)}}
P.ji.prototype={
$1:function(a){return this.a.i3(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jd.prototype={
gS:function(a){var u=new P.dY(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
R:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.ex(b)
return t}},
ex:function(a){var u=this.d
if(u==null)return!1
return this.bz(this.cC(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cs(u==null?s.b=P.kL():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cs(t==null?s.c=P.kL():t,b)}else return s.ep(0,b)},
ep:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kL()
u=s.cu(b)
t=r[u]
if(t==null)r[u]=[s.bw(b)]
else{if(s.bz(t,b)>=0)return!1
t.push(s.bw(b))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fJ(this.c,b)
else return this.fI(0,b)},
fI:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cC(r,b)
t=s.bz(u,b)
if(t<0)return!1
s.cS(u.splice(t,1)[0])
return!0},
cs:function(a,b){if(a[b]!=null)return!1
a[b]=this.bw(b)
return!0},
fJ:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cS(u)
delete a[b]
return!0},
ct:function(){this.r=1073741823&this.r+1},
bw:function(a){var u,t=this,s=new P.je(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.ct()
return s},
cS:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.ct()},
cu:function(a){return J.cI(a)&1073741823},
cC:function(a,b){return a[this.cu(b)]},
bz:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.C(a[t].a,b))return t
return-1}}
P.je.prototype={}
P.dY.prototype={
gI:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.aA(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fP.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.fQ.prototype={$ih:1,$in:1}
P.r.prototype={
gS:function(a){return new H.c0(a,this.gl(a))},
J:function(a,b){return this.i(a,b)},
i7:function(a,b){var u,t,s=this,r=H.c([],[H.oH(s,a,"r",0)])
C.b.sl(r,s.gl(a))
for(u=0;u<s.gl(a);++u){t=s.i(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t}return r},
i6:function(a){return this.i7(a,!0)},
hq:function(a,b,c,d){var u
P.bb(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
h:function(a){return P.ku(a,"[","]")}}
P.fT.prototype={}
P.fU.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.aF.prototype={
G:function(a,b){var u,t
for(u=J.aT(this.ga6(a));u.w();){t=u.gI(u)
b.$2(t,this.i(a,t))}},
gl:function(a){return J.ac(this.ga6(a))},
h:function(a){return P.kA(a)},
$iP:1}
P.jy.prototype={
m:function(a,b,c){throw H.d(P.y("Cannot modify unmodifiable map"))}}
P.fV.prototype={
i:function(a,b){return J.cH(this.a,b)},
m:function(a,b,c){J.kk(this.a,b,c)},
G:function(a,b){J.l3(this.a,b)},
gl:function(a){return J.ac(this.a)},
h:function(a){return J.a2(this.a)},
$iP:1}
P.dD.prototype={}
P.jk.prototype={
aa:function(a,b){var u
for(u=J.aT(b);u.w();)this.n(0,u.gI(u))},
h:function(a){return P.ku(this,"{","}")},
J:function(a,b){var u,t,s
P.lu(b,"index")
for(u=P.nJ(this,this.r),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.d(P.I(b,this,"index",null,t))},
$ih:1}
P.dZ.prototype={}
P.es.prototype={}
P.eS.prototype={
hG:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bb(a0,a1,b.length)
u=$.mw()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.a.C(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jZ(C.a.C(b,n))
j=H.jZ(C.a.C(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.b(u,i)
h=u[i]
if(h>=0){i=C.a.V("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.Q("")
g=r.a+=C.a.q(b,s,t)
r.a=g+H.bv(m)
s=n
continue}}throw H.d(P.O("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.q(b,s,a1)
f=g.length
if(q>=0)P.l8(b,p,a1,q,o,f)
else{e=C.c.b8(f-1,4)+1
if(e===1)throw H.d(P.O(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aR(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.l8(b,p,a1,q,o,d)
else{e=C.c.b8(d,4)
if(e===1)throw H.d(P.O(c,b,a1))
if(e>1)b=C.a.aR(b,a1,a1,e===2?"==":"=")}return b}}
P.eT.prototype={}
P.eY.prototype={}
P.f2.prototype={}
P.fk.prototype={}
P.fC.prototype={
h:function(a){return this.a}}
P.fB.prototype={
ey:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.Q("")
if(r>b)q.a+=C.a.q(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mH(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iH.prototype={
ghp:function(){return C.N}}
P.iJ.prototype={
bR:function(a){var u,t,s=P.bb(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jE(u)
if(t.eD(a,0,s)!==s)t.cU(J.mD(a,s-1),0)
return new Uint8Array(u.subarray(0,H.o_(0,t.b,u.length)))}}
P.jE.prototype={
cU:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eD:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.V(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.C(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cU(r,C.a.C(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iI.prototype={
bR:function(a){var u,t,s,r,q,p,o,n,m=P.nw(!1,a,0,null)
if(m!=null)return m
u=P.bb(0,null,J.ac(a))
t=P.m0(a,0,u)
if(t>0){s=P.cb(a,0,t)
if(t===u)return s
r=new P.Q(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.Q("")
o=new P.jD(!1,r)
o.c=p
o.hg(a,q,u)
if(o.e>0){H.t(P.O("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bv(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jD.prototype={
hg:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.cA(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.am()
if((r&192)!==128){q=P.O(k+C.c.b6(r,16),a,s)
throw H.d(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.b(C.v,q)
if(j<=C.v[q]){q=P.O("Overlong encoding of 0x"+C.c.b6(j,16),a,s-h-1)
throw H.d(q)}if(j>1114111){q=P.O("Character outside valid Unicode range: 0x"+C.c.b6(j,16),a,s-h-1)
throw H.d(q)}if(!l.c||j!==65279)t.a+=H.bv(j)
l.c=!1}for(q=s<c;q;){p=P.m0(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.cb(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.P()
if(r<0){m=P.O("Negative UTF-8 code unit: -0x"+C.c.b6(-r,16),a,n-1)
throw H.d(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.O(k+C.c.b6(r,16),a,n-1)
throw H.d(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.ax.prototype={}
P.a7.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.a7&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.c.aM(u,30))&1073741823},
h:function(a){var u=this,t=P.mQ(H.ng(u)),s=P.cQ(H.ne(u)),r=P.cQ(H.na(u)),q=P.cQ(H.nb(u)),p=P.cQ(H.nd(u)),o=P.cQ(H.nf(u)),n=P.mR(H.nc(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.L.prototype={}
P.aW.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aW&&this.a===b.a},
gH:function(a){return C.c.gH(this.a)},
h:function(a){var u,t,s,r=new P.fh(),q=this.a
if(q<0)return"-"+new P.aW(0-q).h(0)
u=r.$1(C.c.a9(q,6e7)%60)
t=r.$1(C.c.a9(q,1e6)%60)
s=new P.fg().$1(q%1e6)
return""+C.c.a9(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.fg.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fh.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bo.prototype={}
P.de.prototype={
h:function(a){return"Throw of null."}}
P.ah.prototype={
gby:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbx:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gby()+o+u
if(!q.a)return t
s=q.gbx()
r=P.kt(q.b)
return t+s+": "+r}}
P.bw.prototype={
gby:function(){return"RangeError"},
gbx:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fD.prototype={
gby:function(){return"RangeError"},
gbx:function(){var u,t=this.b
if(typeof t!=="number")return t.P()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.iA.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.iw.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ca.prototype={
h:function(a){return"Bad state: "+this.a}}
P.f_.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kt(u)+"."}}
P.ht.prototype={
h:function(a){return"Out of Memory"},
$ibo:1}
P.dn.prototype={
h:function(a){return"Stack Overflow"},
$ibo:1}
P.f7.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dR.prototype={
h:function(a){return"Exception: "+this.a}}
P.fu.prototype={
h:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.q(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.C(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.V(f,q)
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
k=""}j=C.a.q(f,m,n)
return h+l+j+k+"\n"+C.a.B(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fw.prototype={}
P.v.prototype={}
P.h.prototype={
bq:function(a,b){return new H.ck(this,b,[H.kU(this,"h",0)])},
gl:function(a){var u,t=this.gS(this)
for(u=0;t.w();)++u
return u},
gaH:function(a){var u,t=this.gS(this)
if(!t.w())throw H.d(H.fE())
u=t.gI(t)
if(t.w())throw H.d(H.mX())
return u},
J:function(a,b){var u,t,s
P.lu(b,"index")
for(u=this.gS(this),t=0;u.w();){s=u.gI(u)
if(b===t)return s;++t}throw H.d(P.I(b,this,"index",null,t))},
h:function(a){return P.mW(this,"(",")")}}
P.fF.prototype={}
P.n.prototype={$ih:1}
P.P.prototype={}
P.b6.prototype={
gH:function(a){return P.a0.prototype.gH.call(this,this)},
h:function(a){return"null"}}
P.aa.prototype={}
P.a0.prototype={constructor:P.a0,$ia0:1,
p:function(a,b){return this===b},
gH:function(a){return H.c7(this)},
h:function(a){return"Instance of '"+H.e(H.c8(this))+"'"},
toString:function(){return this.h(this)}}
P.k.prototype={}
P.Q.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iF.prototype={
$2:function(a,b){var u,t,s,r=J.cB(b).dr(b,"=")
if(r===-1){if(b!=="")J.kk(a,P.kP(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.q(b,0,r)
t=C.a.ad(b,r+1)
s=this.a
J.kk(a,P.kP(u,0,u.length,s,!0),P.kP(t,0,t.length,s,!0))}return a}}
P.iC.prototype={
$2:function(a,b){throw H.d(P.O("Illegal IPv4 address, "+a,this.a,b))}}
P.iD.prototype={
$2:function(a,b){throw H.d(P.O("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iE.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eG(C.a.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.P()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bD.prototype={
gdY:function(){return this.b},
gc0:function(a){var u=this.c
if(u==null)return""
if(C.a.a5(u,"["))return C.a.q(u,1,u.length-1)
return u},
gbl:function(a){var u=this.d
if(u==null)return P.lS(this.a)
return u},
gc7:function(a){var u=this.f
return u==null?"":u},
gdk:function(){var u=this.r
return u==null?"":u},
dP:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a5(u,"/"))u="/"+u
s=P.kN(null,0,0,b)
return new P.bD(q,o,m,n,u,s,r.r)},
gc8:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.k
u=this.Q=new P.dD(P.lG(t==null?"":t),[u,u])
t=u}return t},
gdl:function(){return this.c!=null},
gdq:function(){return this.f!=null},
gdm:function(){return this.r!=null},
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
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.N(b).$ikI)if(s.a==b.gbr())if(s.c!=null===b.gdl())if(s.b==b.gdY())if(s.gc0(s)==b.gc0(b))if(s.gbl(s)==b.gbl(b))if(s.e===b.gdJ(b)){u=s.f
t=u==null
if(!t===b.gdq()){if(t)u=""
if(u===b.gc7(b)){u=s.r
t=u==null
if(!t===b.gdm()){if(t)u=""
u=u===b.gdk()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gH:function(a){var u=this.z
return u==null?this.z=C.a.gH(this.h(0)):u},
$ikI:1,
gbr:function(){return this.a},
gdJ:function(a){return this.e}}
P.jz.prototype={
$1:function(a){throw H.d(P.O("Invalid port",this.a,this.b+1))}}
P.jA.prototype={
$1:function(a){return P.et(C.X,a,C.e,!1)}}
P.jC.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.et(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.et(C.h,b,C.e,!0))}}}
P.jB.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aT(b),t=this.a;u.w();)t.$2(a,u.gI(u))}}
P.iB.prototype={
gdX:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.b(o,0)
u=q.a
o=o[0]+1
t=C.a.bh(u,"?",o)
s=u.length
if(t>=0){r=P.cw(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.j6("data",p,p,p,P.cw(u,o,s,C.z,!1),r,p)},
h:function(a){var u,t=this.b
if(0>=t.length)return H.b(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jK.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jJ.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.b(u,a)
u=u[a]
J.mE(u,0,96,b)
return u},
$S:18}
P.jL.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.C(b,s)^96
if(r>=t)return H.b(a,r)
a[r]=c}}}
P.jM.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.C(b,0),t=C.a.C(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.b(a,r)
a[r]=c}}}
P.jn.prototype={
gdl:function(){return this.c>0},
gdn:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.A()
t=this.e
if(typeof t!=="number")return H.w(t)
t=u+1<t
u=t}else u=!1
return u},
gdq:function(){var u=this.f
if(typeof u!=="number")return u.P()
return u<this.r},
gdm:function(){return this.r<this.a.length},
gcD:function(){return this.b===4&&C.a.a5(this.a,"http")},
gcE:function(){return this.b===5&&C.a.a5(this.a,"https")},
gbr:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcD())q=t.x="http"
else if(t.gcE()){t.x="https"
q="https"}else if(q===4&&C.a.a5(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a5(t.a,r)){t.x=r
q=r}else{q=C.a.q(t.a,0,q)
t.x=q}return q},
gdY:function(){var u=this.c,t=this.b+3
return u>t?C.a.q(this.a,t,u-1):""},
gc0:function(a){var u=this.c
return u>0?C.a.q(this.a,u,this.d):""},
gbl:function(a){var u,t=this
if(t.gdn()){u=t.d
if(typeof u!=="number")return u.A()
return P.eG(C.a.q(t.a,u+1,t.e),null,null)}if(t.gcD())return 80
if(t.gcE())return 443
return 0},
gdJ:function(a){return C.a.q(this.a,this.e,this.f)},
gc7:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.P()
return u<t?C.a.q(this.a,u+1,t):""},
gdk:function(){var u=this.r,t=this.a
return u<t.length?C.a.ad(t,u+1):""},
gc8:function(){var u=this,t=u.f
if(typeof t!=="number")return t.P()
if(t>=u.r)return C.Y
t=P.k
return new P.dD(P.lG(u.gc7(u)),[t,t])},
dP:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbr(),m=n==="file",l=p.c,k=l>0?C.a.q(p.a,p.b+3,l):"",j=p.gdn()?p.gbl(p):o
l=p.c
if(l>0)u=C.a.q(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.q(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a5(t,"/"))t="/"+t
r=P.kN(o,0,0,b)
s=p.r
q=s<l.length?C.a.ad(l,s+1):o
return new P.bD(n,k,u,j,t,r,q)},
gH:function(a){var u=this.y
return u==null?this.y=C.a.gH(this.a):u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.N(b).$ikI&&this.a===b.h(0)},
h:function(a){return this.a},
$ikI:1}
P.j6.prototype={}
W.m.prototype={}
W.eJ.prototype={
gl:function(a){return a.length}}
W.eK.prototype={
h:function(a){return String(a)}}
W.eL.prototype={
h:function(a){return String(a)}}
W.bl.prototype={$ibl:1}
W.bm.prototype={$ibm:1}
W.bn.prototype={
cd:function(a,b,c){if(c!=null)return a.getContext(b,P.oy(c))
return a.getContext(b)},
e1:function(a,b){return this.cd(a,b,null)},
$ibn:1}
W.aU.prototype={
gl:function(a){return a.length}}
W.f3.prototype={
gl:function(a){return a.length}}
W.F.prototype={$iF:1}
W.bR.prototype={
gl:function(a){return a.length}}
W.f4.prototype={}
W.ae.prototype={}
W.an.prototype={}
W.f5.prototype={
gl:function(a){return a.length}}
W.f6.prototype={
gl:function(a){return a.length}}
W.f9.prototype={
gl:function(a){return a.length}}
W.ai.prototype={$iai:1}
W.fd.prototype={
h:function(a){return String(a)}}
W.cS.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[[P.a9,P.aa]]},
$ar:function(){return[[P.a9,P.aa]]},
$ih:1,
$ah:function(){return[[P.a9,P.aa]]},
$in:1,
$an:function(){return[[P.a9,P.aa]]}}
W.cT.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gat(a))+" x "+H.e(this.gao(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.N(b)
if(!u.$ia9)return!1
return a.left===u.gbj(b)&&a.top===u.gbn(b)&&this.gat(a)===u.gat(b)&&this.gao(a)===u.gao(b)},
gH:function(a){return W.lQ(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(this.gat(a)),C.d.gH(this.gao(a)))},
gd1:function(a){return a.bottom},
gao:function(a){return a.height},
gbj:function(a){return a.left},
gcb:function(a){return a.right},
gbn:function(a){return a.top},
gat:function(a){return a.width},
$ia9:1,
$aa9:function(){return[P.aa]}}
W.fe.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[P.k]},
$ar:function(){return[P.k]},
$ih:1,
$ah:function(){return[P.k]},
$in:1,
$an:function(){return[P.k]}}
W.ff.prototype={
gl:function(a){return a.length}}
W.j4.prototype={
gl:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var u=this.i6(this)
return new J.Z(u,u.length)},
$ar:function(){return[W.S]},
$ah:function(){return[W.S]},
$an:function(){return[W.S]}}
W.S.prototype={
ghb:function(a){return new W.j7(a)},
gbQ:function(a){return new W.j4(a,a.children)},
gd4:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.P()
if(s<0)s=-s*0
if(typeof r!=="number")return r.P()
if(r<0)r=-r*0
return new P.a9(u,t,s,r,[P.aa])},
h:function(a){return a.localName},
ai:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.lf
if(u==null){u=H.c([],[W.aI])
t=new W.dd(u)
u.push(W.lP(null))
u.push(W.lR())
$.lf=t
d=t}else d=u
u=$.le
if(u==null){u=new W.eu(d)
$.le=u
c=u}else{u.a=d
c=u}}if($.aB==null){u=document
t=u.implementation.createHTMLDocument("")
$.aB=t
$.kr=t.createRange()
s=$.aB.createElement("base")
s.href=u.baseURI
$.aB.head.appendChild(s)}u=$.aB
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aB
if(!!this.$ibm)r=u.body
else{r=u.createElement(a.tagName)
$.aB.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.R(C.V,a.tagName)){$.kr.selectNodeContents(r)
q=$.kr.createContextualFragment(b)}else{r.innerHTML=b
q=$.aB.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aB.body
if(r==null?u!=null:r!==u)J.l5(r)
c.ce(q)
document.adoptNode(q)
return q},
hj:function(a,b,c){return this.ai(a,b,c,null)},
e3:function(a,b){a.textContent=null
a.appendChild(this.ai(a,b,null,null))},
$iS:1,
gdR:function(a){return a.tagName}}
W.fj.prototype={
$1:function(a){return!!J.N(a).$iS}}
W.i.prototype={$ii:1}
W.f.prototype={
h4:function(a,b,c,d){if(c!=null)this.eq(a,b,c,!1)},
eq:function(a,b,c,d){return a.addEventListener(b,H.bI(c,1),!1)}}
W.ao.prototype={$iao:1}
W.bU.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.ao]},
$ar:function(){return[W.ao]},
$ih:1,
$ah:function(){return[W.ao]},
$in:1,
$an:function(){return[W.ao]},
$ibU:1}
W.fp.prototype={
gl:function(a){return a.length}}
W.ft.prototype={
gl:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.fA.prototype={
gl:function(a){return a.length}}
W.bW.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.E]},
$ar:function(){return[W.E]},
$ih:1,
$ah:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]}}
W.aE.prototype={$iaE:1,
gd6:function(a){return a.data}}
W.bX.prototype={$ibX:1}
W.br.prototype={$ibr:1}
W.fR.prototype={
h:function(a){return String(a)}}
W.hb.prototype={
gl:function(a){return a.length}}
W.c2.prototype={$ic2:1}
W.hc.prototype={
i:function(a,b){return P.aP(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aP(u.value[1]))}},
ga6:function(a){var u=H.c([],[P.k])
this.G(a,new W.hd(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iP:1,
$aP:function(){return[P.k,null]}}
W.hd.prototype={
$2:function(a,b){return this.a.push(a)}}
W.he.prototype={
i:function(a,b){return P.aP(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aP(u.value[1]))}},
ga6:function(a){var u=H.c([],[P.k])
this.G(a,new W.hf(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iP:1,
$aP:function(){return[P.k,null]}}
W.hf.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aH.prototype={$iaH:1}
W.hg.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aH]},
$ar:function(){return[W.aH]},
$ih:1,
$ah:function(){return[W.aH]},
$in:1,
$an:function(){return[W.aH]}}
W.ar.prototype={$iar:1}
W.a1.prototype={
gaH:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.d(P.lx("No elements"))
if(t>1)throw H.d(P.lx("More than one element"))
return u.firstChild},
aa:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.b(t,b)
u.replaceChild(c,t[b])},
gS:function(a){var u=this.a.childNodes
return new W.cW(u,u.length)},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$ar:function(){return[W.E]},
$ah:function(){return[W.E]},
$an:function(){return[W.E]}}
W.E.prototype={
hX:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i_:function(a,b){var u,t
try{u=a.parentNode
J.mB(u,b,a)}catch(t){H.ab(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.e6(a):u},
fL:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.dc.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.E]},
$ar:function(){return[W.E]},
$ih:1,
$ah:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]}}
W.aJ.prototype={$iaJ:1,
gl:function(a){return a.length}}
W.hw.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aJ]},
$ar:function(){return[W.aJ]},
$ih:1,
$ah:function(){return[W.aJ]},
$in:1,
$an:function(){return[W.aJ]}}
W.hH.prototype={
i:function(a,b){return P.aP(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aP(u.value[1]))}},
ga6:function(a){var u=H.c([],[P.k])
this.G(a,new W.hI(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iP:1,
$aP:function(){return[P.k,null]}}
W.hI.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hK.prototype={
gl:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.hV.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aK]},
$ar:function(){return[W.aK]},
$ih:1,
$ah:function(){return[W.aK]},
$in:1,
$an:function(){return[W.aK]}}
W.aL.prototype={$iaL:1}
W.hW.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aL]},
$ar:function(){return[W.aL]},
$ih:1,
$ah:function(){return[W.aL]},
$in:1,
$an:function(){return[W.aL]}}
W.aM.prototype={$iaM:1,
gl:function(a){return a.length}}
W.hZ.prototype={
i:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
G:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga6:function(a){var u=H.c([],[P.k])
this.G(a,new W.i_(u))
return u},
gl:function(a){return a.length},
$iP:1,
$aP:function(){return[P.k,P.k]}}
W.i_.prototype={
$2:function(a,b){return this.a.push(a)}}
W.at.prototype={$iat:1}
W.dr.prototype={
ai:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bt(a,b,c,d)
u=W.mS("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a1(t).aa(0,new W.a1(u))
return t}}
W.i2.prototype={
ai:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bt(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ai(u.createElement("table"),b,c,d)
u.toString
u=new W.a1(u)
s=u.gaH(u)
s.toString
u=new W.a1(s)
r=u.gaH(u)
t.toString
r.toString
new W.a1(t).aa(0,new W.a1(r))
return t}}
W.i3.prototype={
ai:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bt(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ai(u.createElement("table"),b,c,d)
u.toString
u=new W.a1(u)
s=u.gaH(u)
t.toString
s.toString
new W.a1(t).aa(0,new W.a1(s))
return t}}
W.cc.prototype={$icc:1}
W.aN.prototype={$iaN:1}
W.au.prototype={$iau:1}
W.i6.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.au]},
$ar:function(){return[W.au]},
$ih:1,
$ah:function(){return[W.au]},
$in:1,
$an:function(){return[W.au]}}
W.i7.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aN]},
$ar:function(){return[W.aN]},
$ih:1,
$ah:function(){return[W.aN]},
$in:1,
$an:function(){return[W.aN]}}
W.id.prototype={
gl:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.by.prototype={$iby:1}
W.ii.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aO]},
$ar:function(){return[W.aO]},
$ih:1,
$ah:function(){return[W.aO]},
$in:1,
$an:function(){return[W.aO]}}
W.ij.prototype={
gl:function(a){return a.length}}
W.bd.prototype={}
W.iG.prototype={
h:function(a){return String(a)}}
W.iY.prototype={
gl:function(a){return a.length}}
W.bg.prototype={
ghm:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.y("deltaY is not supported"))},
ghl:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.y("deltaX is not supported"))},
$ibg:1}
W.cl.prototype={
fM:function(a,b){return a.requestAnimationFrame(H.bI(b,1))},
eC:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.j5.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.F]},
$ar:function(){return[W.F]},
$ih:1,
$ah:function(){return[W.F]},
$in:1,
$an:function(){return[W.F]}}
W.dM.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.N(b)
if(!u.$ia9)return!1
return a.left===u.gbj(b)&&a.top===u.gbn(b)&&a.width===u.gat(b)&&a.height===u.gao(b)},
gH:function(a){return W.lQ(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(a.width),C.d.gH(a.height))},
gao:function(a){return a.height},
gat:function(a){return a.width}}
W.ja.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aD]},
$ar:function(){return[W.aD]},
$ih:1,
$ah:function(){return[W.aD]},
$in:1,
$an:function(){return[W.aD]}}
W.e3.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.E]},
$ar:function(){return[W.E]},
$ih:1,
$ah:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]}}
W.jo.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aM]},
$ar:function(){return[W.aM]},
$ih:1,
$ah:function(){return[W.aM]},
$in:1,
$an:function(){return[W.aM]}}
W.js.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.at]},
$ar:function(){return[W.at]},
$ih:1,
$ah:function(){return[W.at]},
$in:1,
$an:function(){return[W.at]}}
W.j3.prototype={
G:function(a,b){var u,t,s,r,q
for(u=this.ga6(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.o)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga6:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.k])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.b(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aP:function(){return[P.k,P.k]}}
W.j7.prototype={
i:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga6(this).length}}
W.j8.prototype={}
W.j9.prototype={
$1:function(a){return this.a.$1(a)}}
W.cm.prototype={
ef:function(a){var u
if($.cn.ghB($.cn)){for(u=0;u<262;++u)$.cn.m(0,C.U[u],W.oJ())
for(u=0;u<12;++u)$.cn.m(0,C.p[u],W.oK())}},
aO:function(a){return $.mx().R(0,W.bS(a))},
av:function(a,b,c){var u=$.cn.i(0,H.e(W.bS(a))+"::"+b)
if(u==null)u=$.cn.i(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaI:1}
W.H.prototype={
gS:function(a){return new W.cW(a,this.gl(a))}}
W.dd.prototype={
aO:function(a){return C.b.cZ(this.a,new W.ho(a))},
av:function(a,b,c){return C.b.cZ(this.a,new W.hn(a,b,c))},
$iaI:1}
W.ho.prototype={
$1:function(a){return a.aO(this.a)}}
W.hn.prototype={
$1:function(a){return a.av(this.a,this.b,this.c)}}
W.eb.prototype={
ek:function(a,b,c,d){var u,t,s
this.a.aa(0,c)
u=b.bq(0,new W.jl())
t=b.bq(0,new W.jm())
this.b.aa(0,u)
s=this.c
s.aa(0,C.w)
s.aa(0,t)},
aO:function(a){return this.a.R(0,W.bS(a))},
av:function(a,b,c){var u=this,t=W.bS(a),s=u.c
if(s.R(0,H.e(t)+"::"+b))return u.d.h8(c)
else if(s.R(0,"*::"+b))return u.d.h8(c)
else{s=u.b
if(s.R(0,H.e(t)+"::"+b))return!0
else if(s.R(0,"*::"+b))return!0
else if(s.R(0,H.e(t)+"::*"))return!0
else if(s.R(0,"*::*"))return!0}return!1},
$iaI:1}
W.jl.prototype={
$1:function(a){return!C.b.R(C.p,a)}}
W.jm.prototype={
$1:function(a){return C.b.R(C.p,a)}}
W.ju.prototype={
av:function(a,b,c){if(this.e9(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.R(0,b)
return!1}}
W.jv.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jt.prototype={
aO:function(a){var u=J.N(a)
if(!!u.$ic9)return!1
u=!!u.$ij
if(u&&W.bS(a)==="foreignObject")return!1
if(u)return!0
return!1},
av:function(a,b,c){if(b==="is"||C.a.a5(b,"on"))return!1
return this.aO(a)},
$iaI:1}
W.cW.prototype={
w:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cH(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gI:function(a){return this.d}}
W.aI.prototype={}
W.jj.prototype={}
W.eu.prototype={
ce:function(a){new W.jF(this).$2(a,null)},
aY:function(a,b){if(b==null)J.l5(a)
else b.removeChild(a)},
fR:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mF(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ab(r)}t="element unprintable"
try{t=J.a2(a)}catch(r){H.ab(r)}try{s=W.bS(a)
this.fQ(a,b,p,t,s,o,n)}catch(r){if(H.ab(r) instanceof P.ah)throw r
else{this.aY(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fQ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aY(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aO(a)){p.aY(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.av(a,"is",g)){p.aY(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga6(f)
t=H.c(u.slice(0),[H.cD(u,0)])
for(s=f.ga6(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.b(t,s)
r=t[s]
if(!p.a.av(a,J.mI(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.N(a).$icc)p.ce(a.content)}}
W.jF.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fR(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aY(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ab(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dL.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.cs.prototype={}
W.ct.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.eh.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.cu.prototype={}
W.cv.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
P.jp.prototype={
dj:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
cc:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.N(a)
if(!!u.$ia7)return new Date(a.a)
if(!!u.$ink)throw H.d(P.ix("structured clone of RegExp"))
if(!!u.$iao)return a
if(!!u.$ibl)return a
if(!!u.$ibU)return a
if(!!u.$iaE)return a
if(!!u.$ic3||!!u.$ib5||!!u.$ic2)return a
if(!!u.$iP){t=p.dj(a)
s=p.b
r=s.length
if(t>=r)return H.b(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.b(s,t)
s[t]=q
u.G(a,new P.jr(o,p))
return o.a}if(!!u.$in){t=p.dj(a)
o=p.b
if(t>=o.length)return H.b(o,t)
q=o[t]
if(q!=null)return q
return p.hi(a,t)}throw H.d(P.ix("structured clone of other type"))},
hi:function(a,b){var u,t=J.cA(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.b(q,b)
q[b]=r
for(u=0;u<s;++u){q=this.cc(t.i(a,u))
if(u>=r.length)return H.b(r,u)
r[u]=q}return r}}
P.jr.prototype={
$2:function(a,b){this.a.a[a]=this.b.cc(b)},
$S:3}
P.er.prototype={$iaE:1,
gd6:function(a){return this.a}}
P.jQ.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jq.prototype={}
P.fq.prototype={
gbc:function(){var u=this.b,t=H.kU(u,"r",0)
return new H.fW(new H.ck(u,new P.fr(),[t]),new P.fs(),[t,W.S])},
m:function(a,b,c){var u=this.gbc()
J.mG(u.b.$1(J.eI(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.ac(this.gbc().a)},
i:function(a,b){var u=this.gbc()
return u.b.$1(J.eI(u.a,b))},
gS:function(a){var u=P.lj(this.gbc(),!1,W.S)
return new J.Z(u,u.length)},
$ar:function(){return[W.S]},
$ah:function(){return[W.S]},
$an:function(){return[W.S]}}
P.fr.prototype={
$1:function(a){return!!J.N(a).$iS}}
P.fs.prototype={
$1:function(a){return H.q(a,"$iS")}}
P.jf.prototype={
gcb:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.w(t)
return u+t},
gd1:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.w(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.N(b)
if(!!u.$ia9){t=q.a
if(t==u.gbj(b)){s=q.b
if(s==u.gbn(b)){r=q.c
if(typeof t!=="number")return t.A()
if(typeof r!=="number")return H.w(r)
if(t+r===u.gcb(b)){t=q.d
if(typeof s!=="number")return s.A()
if(typeof t!=="number")return H.w(t)
u=s+t===u.gd1(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u=this,t=u.a,s=J.cI(t),r=u.b,q=J.cI(r),p=u.c
if(typeof t!=="number")return t.A()
if(typeof p!=="number")return H.w(p)
p=C.c.gH(t+p)
t=u.d
if(typeof r!=="number")return r.A()
if(typeof t!=="number")return H.w(t)
t=C.c.gH(r+t)
return P.nI(P.jc(P.jc(P.jc(P.jc(0,s),q),p),t))}}
P.a9.prototype={
gbj:function(a){return this.a},
gbn:function(a){return this.b},
gat:function(a){return this.c},
gao:function(a){return this.d}}
P.b2.prototype={$ib2:1}
P.fK.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ar:function(){return[P.b2]},
$ih:1,
$ah:function(){return[P.b2]},
$in:1,
$an:function(){return[P.b2]}}
P.b7.prototype={$ib7:1}
P.hr.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ar:function(){return[P.b7]},
$ih:1,
$ah:function(){return[P.b7]},
$in:1,
$an:function(){return[P.b7]}}
P.hz.prototype={
gl:function(a){return a.length}}
P.c9.prototype={$ic9:1}
P.i1.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ar:function(){return[P.k]},
$ih:1,
$ah:function(){return[P.k]},
$in:1,
$an:function(){return[P.k]}}
P.j.prototype={
gbQ:function(a){return new P.fq(a,new W.a1(a))},
ai:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.aI])
p.push(W.lP(null))
p.push(W.lR())
p.push(new W.jt())
c=new W.eu(new W.dd(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).hj(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a1(s)
q=p.gaH(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ij:1}
P.bc.prototype={$ibc:1}
P.ik.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ar:function(){return[P.bc]},
$ih:1,
$ah:function(){return[P.bc]},
$in:1,
$an:function(){return[P.bc]}}
P.dW.prototype={}
P.dX.prototype={}
P.e6.prototype={}
P.e7.prototype={}
P.ei.prototype={}
P.ej.prototype={}
P.ep.prototype={}
P.eq.prototype={}
P.bz.prototype={$ih:1,
$ah:function(){return[P.v]},
$in:1,
$an:function(){return[P.v]}}
P.eN.prototype={
gl:function(a){return a.length}}
P.eO.prototype={
i:function(a,b){return P.aP(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aP(u.value[1]))}},
ga6:function(a){var u=H.c([],[P.k])
this.G(a,new P.eP(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iP:1,
$aP:function(){return[P.k,null]}}
P.eP.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eQ.prototype={
gl:function(a){return a.length}}
P.bk.prototype={}
P.hs.prototype={
gl:function(a){return a.length}}
P.dK.prototype={}
P.dj.prototype={
dT:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.N(g)
if(!!u.$iaE&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.oz(g))
return}if(!!u.$ibX&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.cJ("Incorrect number or type of arguments"))},
i4:function(a,b,c,d,e,f,g){return this.dT(a,b,c,d,e,f,g,null,null,null)}}
P.hX.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.I(b,a,null,null,null))
return P.aP(a.item(b))},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ar:function(){return[[P.P,,,]]},
$ih:1,
$ah:function(){return[[P.P,,,]]},
$in:1,
$an:function(){return[[P.P,,,]]}}
P.ee.prototype={}
P.ef.prototype={}
T.ay.prototype={
aF:function(a,b){return!0},
h:function(a){return"all"}}
T.cX.prototype={
aF:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)if(u[s].aF(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.b3.prototype={}
T.a3.prototype={
aF:function(a,b){return!this.e5(0,b)},
h:function(a){return"!["+this.cj(0)+"]"}}
T.hC.prototype={
aF:function(a,b){return this.a<=b&&this.b>=b},
h:function(a){var u=H.bv(this.a),t=H.bv(this.b)
return u+".."+t}}
T.hL.prototype={
ed:function(a){var u,t
if(a.a.length<=0)throw H.d(P.u("May not create a Set with zero characters."))
u=new H.M([P.v,P.ax])
for(t=new H.c0(a,a.gl(a));t.w();)u.m(0,t.d,!0)
this.a=u},
aF:function(a,b){return this.a.bf(0,b)},
h:function(a){var u=this.a
return P.cb(u.ga6(u),0,null)}}
R.dp.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.dz(this.a.j(0,b))
r.a=H.c([],[T.b3])
r.c=!1
this.c.push(r)
return r},
hr:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.aF(0,a))return r}return},
h:function(a){return this.b}}
R.dw.prototype={
h:function(a){var u=H.kZ(this.b,"\n","\\n"),t=H.kZ(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.dx.prototype={
aG:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.o)(c),++t){s=c[t]
this.c.m(0,s,b)}},
h:function(a){return this.b}}
R.ie.prototype={
j:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.dp(this,b)
u.c=H.c([],[R.dz])
this.a.m(0,b,u)}return u},
N:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.dx(a)
u=P.k
t.c=new H.M([u,u])
this.b.m(0,a,t)}return t},
dW:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.c([],[R.dw]),k=this.c,j=[P.v],i=H.c([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)l.push(t)
return l}r=C.a.C(a,s)
q=k.hr(r)
if(q==null){if(t==null){i.push(r)
p=P.cb(i,0,m)
throw H.d(P.u("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}l.push(t)
s=t.c+1
i=H.c([],j)
k=this.c
t=m}else{if(!q.c)i.push(r)
k=q.b
if(k.d!=null){p=P.cb(i,0,m)
o=k.d
n=o.c.i(0,p)
t=new R.dw(n==null?o.b:n,p,s)}++s}}}}
R.dz.prototype={
h:function(a){return this.b.b+": "+this.cj(0)}}
O.az.prototype={
ba:function(a){this.a=H.c([],[a])
this.c=this.b=null},
cf:function(a,b,c){this.b=b
this.c=a},
aU:function(a,b){return this.cf(a,null,b)},
cJ:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cF:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.Z(u,u.length)},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.kU(s,"az",0)]
if(s.cJ(H.c([b],r))){u=s.a
t=u.length
u.push(b)
s.cF(t,H.c([b],r))}},
aa:function(a,b){var u,t
if(this.cJ(b)){u=this.a
t=u.length
C.b.aa(u,b)
this.cF(t,b)}},
$ih:1}
O.c1.prototype={
gl:function(a){return this.a.length},
gt:function(){var u=this.b
return u==null?this.b=D.G():u},
aI:function(){var u=this.b
if(u!=null)u.E(null)},
ga_:function(a){var u=this.a
if(u.length>0)return C.b.gax(u)
else return V.bs()},
dL:function(a){var u=this.a
if(a==null)u.push(V.bs())
else u.push(a)
this.aI()},
c6:function(){var u=this.a
if(u.length>0){u.pop()
this.aI()}}}
E.eU.prototype={}
E.aC.prototype={
cr:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.Z(u,u.length);u.w();){t=u.d
if(t.f==null)t.cr()}},
sac:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().K(0,s.gdE())
u=s.c
if(u!=null)u.gt().n(0,s.gdE())
t=new D.x("shape",r,s.c)
t.b=!0
s.ap(t)}},
saS:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gt().K(0,s.gdG())
u=s.f
s.f=a
if(a!=null)a.gt().n(0,s.gdG())
s.cr()
t=new D.x("technique",u,s.f)
t.b=!0
s.ap(t)}},
saQ:function(a){var u,t,s=this
if(!J.C(s.r,a)){u=s.r
if(u!=null)u.gt().K(0,s.gdC())
if(a!=null)a.gt().n(0,s.gdC())
s.r=a
t=new D.x("mover",u,a)
t.b=!0
s.ap(t)}},
ar:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.az(0,b,s):null
if(!J.C(q,s.x)){u=s.x
s.x=q
t=new D.x("matrix",u,q)
t.b=!0
s.ap(t)}r=s.f
if(r!=null)r.ar(0,b)
for(r=s.y.a,r=new J.Z(r,r.length);r.w();)r.d.ar(0,b)},
aq:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.ga_(s))
else s.a.push(r.B(0,s.ga_(s)))
s.aI()
a.dM(t.f)
s=a.dy
u=(s&&C.b).gax(s)
if(u!=null&&t.d!=null)u.dO(a,t)
for(s=t.y.a,s=new J.Z(s,s.length);s.w();)s.d.aq(a)
a.dK()
a.dx.c6()},
ap:function(a){var u=this.z
if(u!=null)u.E(a)},
Z:function(){return this.ap(null)},
dF:function(a){this.e=null
this.ap(a)},
hN:function(){return this.dF(null)},
dH:function(a){this.ap(a)},
hO:function(){return this.dH(null)},
dD:function(a){this.ap(a)},
hM:function(){return this.dD(null)},
dB:function(a){this.ap(a)},
hJ:function(){return this.dB(null)},
hI:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdA(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bp()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.Z()},
hL:function(a,b){var u,t
for(u=b.gS(b),t=this.gdA();u.w();)u.gI(u).gt().K(0,t)
this.Z()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hD.prototype={
ec:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a7(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.c1()
t=[V.aG]
u.a=H.c([],t)
u.gt().n(0,new E.hE(s))
s.cy=u
u=new O.c1()
u.a=H.c([],t)
u.gt().n(0,new E.hF(s))
s.db=u
u=new O.c1()
u.a=H.c([],t)
u.gt().n(0,new E.hG(s))
s.dx=u
u=H.c([],[O.ds])
s.dy=u
u.push(null)
s.fr=new H.M([P.k,A.dk])},
ghW:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga_(s)
u=t.db
u=t.z=s.B(0,u.ga_(u))
s=u}return s},
gdZ:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.ga_(s)
u=t.dx
u=t.cx=s.B(0,u.ga_(u))
s=u}return s},
dM:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gax(u):a)},
dK:function(){var u=this.dy
if(u.length>1)u.pop()},
cY:function(a){var u=a.b
if(u.length===0)throw H.d(P.u("May not cache a shader with no name."))
if(this.fr.bf(0,u))throw H.d(P.u('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)}}
E.hE.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hF.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hG.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.du.prototype={
cp:function(a){this.dQ()},
co:function(){return this.cp(null)},
ghw:function(){var u,t=this,s=Date.now(),r=C.c.a9(P.ld(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a7(s,!1)
return u/r},
cL:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.B()
if(typeof r!=="number")return H.w(r)
u=C.d.c_(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.B()
t=C.d.c_(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lA(C.n,s.gi0())}},
dQ:function(){if(!this.cx){this.cx=!0
var u=window
C.E.eC(u)
C.E.fM(u,W.m1(new E.ic(this),P.aa))}},
hZ:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cL()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a7(r,!1)
s.y=P.ld(r-s.r.a).a*0.000001
r=s.cy
C.b.sl(r.a,0)
r.aI()
r=s.db
C.b.sl(r.a,0)
r.aI()
r=s.dx
C.b.sl(r.a,0)
r.aI()
r=s.dy;(r&&C.b).sl(r,0)
s.dy.push(null)
o.aq(p.e)}s=p.Q
if(s!=null)s.E(null)}catch(q){u=H.ab(q)
t=H.kV(q)
P.kY("Error: "+H.e(u))
P.kY("Stack: "+H.e(t))
throw H.d(u)}}}
E.ic.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.hZ()}}}
Z.dH.prototype={}
Z.cL.prototype={
ah:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ab(s)
t=P.u('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.d(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.dI.prototype={}
Z.bP.prototype={
aE:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
ah:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].ah(a)},
b7:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aq:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.k],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)p.push(u[s].h(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a2(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.k(p,", ")+"\nAttrs:   "+C.b.k(r,", ")}}
Z.bq.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.c8(this.c))+"'")+"]"}}
Z.bf.prototype={
gci:function(a){var u=this.a,t=(u&$.al().a)!==0?3:0
if((u&$.aS().a)!==0)t+=3
if((u&$.aR().a)!==0)t+=3
if((u&$.bi().a)!==0)t+=2
if((u&$.bj().a)!==0)t+=3
if((u&$.cF().a)!==0)t+=3
if((u&$.cG().a)!==0)t+=4
if((u&$.bM().a)!==0)++t
return(u&$.aQ().a)!==0?t+4:t},
h9:function(a){var u,t=$.al(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aS()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aR()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bi()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cF()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cG()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bM()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aQ()
if((s&t.a)!==0)if(u===a)return t
return $.mv()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bf))return!1
return this.a===b.a},
h:function(a){var u=H.c([],[P.k]),t=this.a
if((t&$.al().a)!==0)u.push("Pos")
if((t&$.aS().a)!==0)u.push("Norm")
if((t&$.aR().a)!==0)u.push("Binm")
if((t&$.bi().a)!==0)u.push("Txt2D")
if((t&$.bj().a)!==0)u.push("TxtCube")
if((t&$.cF().a)!==0)u.push("Clr3")
if((t&$.cG().a)!==0)u.push("Clr4")
if((t&$.bM().a)!==0)u.push("Weight")
if((t&$.aQ().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.k(u,"|")}}
D.eX.prototype={}
D.bp.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.c([],[{func:1,ret:-1,args:[D.W]}]):u).push(b)},
K:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.R(s,b)
if(s===!0){s=t.a
u=(s&&C.b).K(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.R(s,b)
if(s===!0){s=t.b
u=(s&&C.b).K(s,b)||u}return u},
E:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.W()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.G(P.lj(u,!0,{func:1,ret:-1,args:[D.W]}),new D.fm(q))
u=r.b
if(u!=null){r.b=H.c([],[{func:1,ret:-1,args:[D.W]}])
C.b.G(u,new D.fn(q))}return!0},
d8:function(){return this.E(null)},
al:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}}}
D.fm.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fn.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.W.prototype={}
D.aY.prototype={}
D.aZ.prototype={}
D.x.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cM.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cM))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.d1.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d1))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.fJ.prototype={
hT:function(a){this.d.n(0,a.a)
return!1},
hP:function(a){this.d.K(0,a.a)
return!1}}
X.d5.prototype={}
X.fS.prototype={
aW:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.B()
u=b.b
t=q.ch
if(typeof u!=="number")return u.B()
s=new V.a4(o.a+n*m,o.b+u*t)
t=q.a.gbe()
r=new X.b4(a,V.b8(),q.x,t,s)
r.b=!0
q.z=new P.a7(p,!1)
q.x=s
return r},
c5:function(a,b){this.r=a.a
return!1},
b5:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.e2()
if(typeof u!=="number")return u.am()
this.r=(u&~t)>>>0
return!1},
b4:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.aW(a,b))
return!0},
hU:function(a){return!1},
fe:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.d5(c,r.a.gbe(),b)
s.b=!0
t.E(s)
r.y=new P.a7(u,!1)
r.x=V.b8()}}
X.bt.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bt))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b4.prototype={}
X.hh.prototype={
bA:function(a,b,c){var u=this,t=new P.a7(Date.now(),!1),s=u.a.gbe(),r=new X.b4(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c5:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.bA(a,b,!0))
return!0},
b5:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.e2()
if(typeof t!=="number")return t.am()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.bA(a,b,!0))
return!0},
b4:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.bA(a,b,!1))
return!0},
hV:function(a,b){return!1}}
X.hy.prototype={}
X.dy.prototype={}
X.ih.prototype={
aW:function(a,b){var u=this,t=new P.a7(Date.now(),!1),s=a.length>0?a[0]:V.b8(),r=u.a.gbe(),q=new X.dy(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hS:function(a){var u=this.b
if(u==null)return!1
u.E(this.aW(a,!0))
return!0},
hQ:function(a){var u=this.c
if(u==null)return!1
u.E(this.aW(a,!0))
return!0},
hR:function(a){var u=this.d
if(u==null)return!1
u.E(this.aW(a,!1))
return!0}}
X.dE.prototype={
gbe:function(){var u=this.a,t=C.i.gd4(u).c
t.toString
u=C.i.gd4(u).d
u.toString
return V.lv(0,0,t,u)},
cz:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.d1(u,new X.bt(t,a.altKey,a.shiftKey))},
aL:function(a){a.shiftKey},
bJ:function(a){a.shiftKey},
aC:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.O()
u=t.top
if(typeof r!=="number")return r.O()
return new V.a4(s-q,r-u)},
aX:function(a){return new V.R(a.movementX,a.movementY)},
bF:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a4])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=C.d.a0(r.pageX)
C.d.a0(r.pageY)
p=o.left
C.d.a0(r.pageX)
n.push(new V.a4(q-p,C.d.a0(r.pageY)-o.top))}return n},
aA:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cM(u,new X.bt(t,a.altKey,a.shiftKey))},
bC:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.O()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.O()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
f8:function(a){this.f=!0},
eW:function(a){this.f=!1},
f2:function(a){if(this.f&&this.bC(a))a.preventDefault()},
fc:function(a){var u
if(!this.f)return
u=this.cz(a)
this.b.hT(u)},
fa:function(a){var u
if(!this.f)return
u=this.cz(a)
this.b.hP(u)},
fg:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aL(a)
if(r.x){u=r.aA(a)
t=r.aX(a)
if(r.d.c5(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.aA(a)
s=r.aC(a)
if(r.c.c5(u,s))a.preventDefault()},
fk:function(a){var u,t,s,r=this
r.aL(a)
u=r.aA(a)
if(r.x){t=r.aX(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(r.r)return
s=r.aC(a)
if(r.c.b5(u,s))a.preventDefault()},
f6:function(a){var u,t,s,r=this
if(!r.bC(a)){r.aL(a)
u=r.aA(a)
if(r.x){t=r.aX(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(r.r)return
s=r.aC(a)
if(r.c.b5(u,s))a.preventDefault()}},
fi:function(a){var u,t,s,r=this
r.aL(a)
u=r.aA(a)
if(r.x){t=r.aX(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(r.r)return
s=r.aC(a)
if(r.c.b4(u,s))a.preventDefault()},
f4:function(a){var u,t,s,r=this
if(!r.bC(a)){r.aL(a)
u=r.aA(a)
if(r.x){t=r.aX(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(r.r)return
s=r.aC(a)
if(r.c.b4(u,s))a.preventDefault()}},
fm:function(a){var u,t,s=this
s.aL(a)
u=new V.R((a&&C.D).ghl(a),C.D.ghm(a)).u(0,180)
if(s.x){if(s.d.hU(u))a.preventDefault()
return}if(s.r)return
t=s.aC(a)
if(s.c.hV(u,t))a.preventDefault()},
fo:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aA(s.y)
t=s.aC(s.y)
s.d.fe(u,t,r)}},
fH:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bJ(a)
u=t.bF(a)
if(t.e.hS(u))a.preventDefault()},
fD:function(a){var u
this.bJ(a)
u=this.bF(a)
if(this.e.hQ(u))a.preventDefault()},
fF:function(a){var u
this.bJ(a)
u=this.bF(a)
if(this.e.hR(u))a.preventDefault()}}
D.fc.prototype={$ia8:1}
D.a8.prototype={}
D.d2.prototype={
X:function(a){var u=this.x
if(u!=null)u.E(a)},
cI:function(a){var u=this.y
if(u!=null)u.E(a)},
fd:function(){return this.cI(null)},
fq:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(s==null||this.eg(s))return!1}return!0},
eQ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcH(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q instanceof D.bx)this.r.push(q)
p=q.go
if(p==null){p=new D.bp()
p.d=0
q.go=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}u=new D.aY()
u.b=!0
this.X(u)},
fv:function(a,b){var u,t,s
for(u=b.gS(b),t=this.gcH();u.w();){s=u.gI(u)
C.b.K(this.e,s)
s.gt().K(0,t)}u=new D.aZ()
u.b=!0
this.X(u)},
eg:function(a){var u=C.b.R(this.r,a)
return u},
$ah:function(){return[D.a8]},
$aaz:function(){return[D.a8]}}
D.hx.prototype={$ia8:1}
D.bx.prototype={
X:function(a){var u=this.go
if(u!=null)u.E(a)},
eh:function(){return this.X(null)},
gan:function(){var u=this.x!=null?1:0,t=this.y!=null?2:0,s=this.db?8:0
return u+t+4+s},
$ia8:1}
V.V.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.ad.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ad))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.fl.prototype={}
V.d8.prototype={
ab:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.L])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d8))return!1
u=b.a
t=$.z().a
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
h:function(a){var u,t,s,r,q=this,p=[P.L],o=V.bK(H.c([q.a,q.d,q.r],p),3,0),n=V.bK(H.c([q.b,q.e,q.x],p),3,0),m=V.bK(H.c([q.c,q.f,q.y],p),3,0)
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
V.aG.prototype={
ab:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.L])
return t},
c3:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.z().a)return V.bs()
u=1/b1
t=-n
s=-a0
return V.aq((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
B:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aq(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bp:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.A(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bo:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.T(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aG))return!1
u=b.a
t=$.z().a
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
h:function(a){return this.M()},
F:function(a){var u,t,s,r,q,p=this,o=[P.L],n=V.bK(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bK(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bK(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bK(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
M:function(){return this.F("")}}
V.a4.prototype={
O:function(a,b){return new V.a4(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.T.prototype={
A:function(a,b){return new V.T(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a,b){return new V.T(this.a-b.a,this.b-b.b,this.c-b.c)},
B:function(a,b){return new V.T(this.a*b,this.b*b,this.c*b)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.ba.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ba))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.di.prototype={
gay:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.di))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.R.prototype={
b1:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.B()
if(typeof r!=="number")return H.w(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.w(t)
return s*r+u*t},
B:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.B()
u=this.b
if(typeof u!=="number")return u.B()
return new V.R(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.z().a){u=$.lI
return u==null?$.lI=new V.R(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.R(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=this.a
s=$.z()
s.toString
if(typeof u!=="number")return u.O()
if(typeof t!=="number")return H.w(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.O()
if(typeof t!=="number")return H.w(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.A.prototype={
b1:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c4:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.A(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aD:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.A(u*t-s*r,s*q-p*t,p*r-u*q)},
A:function(a,b){return new V.A(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.A(-this.a,-this.b,-this.c)},
B:function(a,b){return new V.A(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if(Math.abs(b-0)<$.z().a)return V.ci()
return new V.A(this.a/b,this.b/b,this.c/b)},
dt:function(){var u=$.z().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.A))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.cj.prototype={
b1:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cj))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
U.eZ.prototype={
bv:function(a){var u=V.p0(a,this.c,this.b)
return u},
gt:function(){var u=this.y
return u==null?this.y=D.G():u},
U:function(a){var u=this.y
if(u!=null)u.E(a)},
se_:function(a,b){},
sdu:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.z().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bv(u)}s=new D.x("maximumLocation",s,t.b)
s.b=!0
t.U(s)}},
sdw:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.z().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bv(u)}s=new D.x("minimumLocation",s,t.c)
s.b=!0
t.U(s)}},
sa4:function(a,b){var u,t=this
b=t.bv(b)
u=t.d
if(!(Math.abs(u-b)<$.z().a)){t.d=b
u=new D.x("location",u,b)
u.b=!0
t.U(u)}},
sdv:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.z().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.x("maximumVelocity",r,a)
r.b=!0
s.U(r)}},
sY:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.z().a)){u.f=a
t=new D.x("velocity",t,a)
t.b=!0
u.U(t)}},
sd5:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.z().a)){this.x=a
u=new D.x("dampening",u,a)
u.b=!0
this.U(u)}},
ar:function(a,b){var u,t,s,r=this,q=r.f,p=$.z().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa4(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.z().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sY(u)}}}
U.cP.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.G():u},
az:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cP))return!1
return J.C(this.a,b.a)},
h:function(a){return"Constant: "+this.a.F("          ")}}
U.bV.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.G():u},
U:function(a){var u=this.e
if(u!=null)u.E(a)},
ag:function(){return this.U(null)},
ej:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaJ(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.gt()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aY()
u.b=!0
this.U(u)},
ft:function(a,b){var u,t
for(u=b.gS(b),t=this.gaJ();u.w();)u.gI(u).gt().K(0,t)
u=new D.aZ()
u.b=!0
this.U(u)},
az:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.P()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.Z(r,r.length),u=null;r.w();){q=r.d
if(q!=null){t=q.az(0,b,c)
if(t!=null)u=u==null?t:t.B(0,u)}}s.f=u==null?V.bs():u
r=s.e
if(r!=null)r.al(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bV))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.C(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ah:function(){return[U.af]},
$aaz:function(){return[U.af]},
$iaf:1}
U.bY.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.G():u},
U:function(a){var u=this.b
if(u!=null)u.E(a)},
ag:function(){return this.U(null)},
az:function(a,b,c){var u,t=this,s=t.d,r=b.e
if(s<r){t.d=r
s=t.b
if(s!=null)++s.d
s=t.a
s=s==null?null:s.az(0,b,c)
u=s==null?null:s.c3(0)
t.c=u==null?V.bs():u
s=t.b
if(s!=null)s.al(0)}return t.c},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bY))return!1
if(!J.C(this.a,b.a))return!1
return!0},
h:function(a){return"Invert"},
$iaf:1}
U.af.prototype={}
U.dF.prototype={
gt:function(){var u=this.fx
return u==null?this.fx=D.G():u},
U:function(a){var u=this.fx
if(u!=null)u.E(a)},
ag:function(){return this.U(null)},
ha:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.G():t
u.n(0,s.geJ())
u=s.a.c
t=u.d
u=t==null?u.d=D.G():t
u.n(0,s.geL())
u=s.a.c
t=u.c
u=t==null?u.c=D.G():t
u.n(0,s.geN())
u=s.a.d
t=u.f
u=t==null?u.f=D.G():t
u.n(0,s.geE())
u=s.a.d
t=u.d
u=t==null?u.d=D.G():t
u.n(0,s.geG())
u=s.a.e
t=u.b
u=t==null?u.b=D.G():t
u.n(0,s.gh1())
u=s.a.e
t=u.d
u=t==null?u.d=D.G():t
u.n(0,s.gh_())
u=s.a.e
t=u.c
u=t==null?u.c=D.G():t
u.n(0,s.gfY())
return!0},
au:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.T()
u=-u}if(this.r){if(typeof t!=="number")return t.T()
t=-t}return new V.R(u,t)},
eK:function(a){var u=this
H.q(a,"$ib4")
if(!J.C(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
eM:function(a){var u,t,s,r,q,p,o,n=this
H.q(a,"$ib4")
if(!n.cx)return
if(n.ch){u=a.d.O(0,a.y)
u=new V.R(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.w(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.O(0,a.y)
u=n.au(new V.R(t.a,t.b).B(0,2).u(0,u.gay()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.w(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.w(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.O(0,a.y)
r=n.au(new V.R(s.a,s.b).B(0,2).u(0,u.gay()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa4(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa4(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.O(0,a.z)
n.dx=n.au(new V.R(t.a,t.b).B(0,2).u(0,u.gay()))}n.ag()},
eO:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.w(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.w(u)
s.sY(-t*10*u)
r.ag()}},
eF:function(a){var u=this
if(H.q(a,"$id5").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eH:function(a){var u,t,s,r,q,p,o,n=this
H.q(a,"$ib4")
if(!J.C(n.d,a.x.b))return
u=a.c
t=a.d
s=t.O(0,a.y)
r=n.au(new V.R(s.a,s.b).B(0,2).u(0,u.gay()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa4(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa4(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.O(0,a.z)
n.dx=n.au(new V.R(t.a,t.b).B(0,2).u(0,u.gay()))
n.ag()},
h2:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
h0:function(a){var u,t,s,r,q,p,o,n=this
H.q(a,"$idy")
if(!n.cx)return
if(n.ch){u=a.d.O(0,a.y)
u=new V.R(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.w(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.O(0,a.y)
u=n.au(new V.R(t.a,t.b).B(0,2).u(0,u.gay()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.w(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.w(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.O(0,a.y)
r=n.au(new V.R(s.a,s.b).B(0,2).u(0,u.gay()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa4(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa4(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.O(0,a.z)
n.dx=n.au(new V.R(t.a,t.b).B(0,2).u(0,u.gay()))}n.ag()},
fZ:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.w(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.w(u)
s.sY(-t*10*u)
r.ag()}},
az:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.dy=p
u=b.y
r.c.ar(0,u)
r.b.ar(0,u)
q=V.ll(r.b.d)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.B(0,V.aq(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iaf:1}
M.cO.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.G():u},
a8:function(a){var u=this.r
if(u!=null)u.E(a)},
bu:function(){return this.a8(null)},
fz:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gae(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.gt()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aY()
u.b=!0
this.a8(u)},
fB:function(a,b){var u,t
for(u=b.gS(b),t=this.gae();u.w();)u.gI(u).gt().K(0,t)
u=new D.aZ()
u.b=!0
this.a8(u)},
aq:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.Z(u,u.length);u.w();){t=u.d
if(t!=null)t.aq(a)}s.f=!1},
$ah:function(){return[M.as]},
$aaz:function(){return[M.as]},
$ias:1}
M.cU.prototype={
a8:function(a){var u=this.y
if(u!=null)u.E(a)},
bu:function(){return this.a8(null)},
eZ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gae(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bp()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aY()
u.b=!0
this.a8(u)},
f0:function(a,b){var u,t
for(u=b.gS(b),t=this.gae();u.w();)u.gI(u).gt().K(0,t)
u=new D.aZ()
u.b=!0
this.a8(u)},
sd3:function(a){var u,t,s=this
if(a==null)a=X.lo(1.0471975511965976,null)
u=s.b
if(u!==a){if(u!=null)u.gt().K(0,s.gae())
t=s.b
s.b=a
a.gt().n(0,s.gae())
u=new D.x("camera",t,s.b)
u.b=!0
s.a8(u)}},
sdS:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gt().K(0,t.gae())
u=t.c
t.c=b
b.gt().n(0,t.gae())
s=new D.x("target",u,t.c)
s.b=!0
t.a8(s)}},
saS:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gt().K(0,t.gae())
u=t.d
t.d=a
if(a!=null)a.gt().n(0,t.gae())
s=new D.x("technique",u,t.d)
s.b=!0
t.a8(s)}},
gt:function(){var u=this.y
return u==null?this.y=D.G():u},
aq:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
a.dM(c.d)
c.c.ah(a)
u=c.b
t=a.c
s=a.d
r=u.c
q=u.d
p=u.e
o=p-q
n=1/Math.tan(r*0.5)
m=V.aq(-n/(t/s),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
u.a
a.cy.dL(m)
t=$.lp
if(t==null){t=V.lr()
s=V.lM()
r=$.lJ
if(r==null)r=$.lJ=new V.A(0,0,-1)
l=r.u(0,Math.sqrt(r.D(r)))
s=s.aD(l)
k=s.u(0,Math.sqrt(s.D(s)))
j=l.aD(k)
i=new V.A(t.a,t.b,t.c)
h=k.T(0).D(i)
g=j.T(0).D(i)
f=l.T(0).D(i)
t=V.aq(k.a,j.a,l.a,h,k.b,j.b,l.b,g,k.c,j.c,l.c,f,0,0,0,1)
$.lp=t
e=t}else e=t
t=u.b
if(t!=null){d=t.az(0,a,u)
if(d!=null)e=d.B(0,e)}a.db.dL(e)
u=c.d
if(u!=null)u.ar(0,a)
for(u=c.e.a,u=new J.Z(u,u.length);u.w();)u.d.ar(0,a)
for(u=c.e.a,u=new J.Z(u,u.length);u.w();)u.d.aq(a)
c.b.toString
a.cy.c6()
a.db.c6()
c.c.b7(a)
a.dK()},
$ias:1}
M.as.prototype={}
A.cK.prototype={}
A.eM.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ho:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
d7:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a_.prototype={
gas:function(a){var u=this.a?1:0
return u|0|0},
h:function(a){var u=this.a?1:0
return""+(u|0|0)},
p:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.a_))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fb.prototype={}
A.fZ.prototype={
eb:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.Q("")
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
b5.ds(0,s.charCodeAt(0)==0?s:s,A.of(b5.z))
b5.Q=b5.x.i(0,"posAttr")
b5.cx=b5.x.i(0,"normAttr")
b5.ch=b5.x.i(0,"binmAttr")
b5.cy=b5.x.i(0,"txt2DAttr")
b5.db=b5.x.i(0,"txtCubeAttr")
b5.dx=b5.x.i(0,"bendAttr")
if(c0.dx)b5.id=H.q(b5.y.W(0,"invViewMat"),"$ia5")
if(t)b5.dy=H.q(b5.y.W(0,"objMat"),"$ia5")
if(r)b5.fr=H.q(b5.y.W(0,"viewObjMat"),"$ia5")
b5.fy=H.q(b5.y.W(0,"projViewObjMat"),"$ia5")
if(c0.ry)b5.k1=H.q(b5.y.W(0,"txt2DMat"),"$icf")
if(c0.x1)b5.k2=H.q(b5.y.W(0,"txtCubeMat"),"$ia5")
if(c0.x2)b5.k3=H.q(b5.y.W(0,"colorMat"),"$ia5")
b5.r1=H.c([],[A.a5])
t=c0.y2
if(t>0){b5.k4=b5.y.W(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.i(0,q)
if(m==null)H.t(P.u(b7+q+b8))
s.push(H.q(m,"$ia5"))}}if(c0.a.a)b5.r2=H.q(b5.y.W(0,"emissionClr"),"$iK")
if(c0.b.a)b5.x1=H.q(b5.y.W(0,"ambientClr"),"$iK")
if(c0.c.a)b5.y2=H.q(b5.y.W(0,"diffuseClr"),"$iK")
if(c0.d.a)b5.da=H.q(b5.y.W(0,"invDiffuseClr"),"$iK")
t=c0.e.a
if(!t)s=!1
else s=!0
if(s){b5.dd=H.q(b5.y.W(0,"shininess"),"$iU")
if(t)b5.dc=H.q(b5.y.W(0,"specularClr"),"$iK")}if(c0.cy){b5.de=H.q(b5.y.W(0,"envSampler"),"$ibB")
if(c0.r.a)b5.df=H.q(b5.y.W(0,"reflectClr"),"$iK")
t=c0.x.a
if(!t)s=!1
else s=!0
if(s){b5.dg=H.q(b5.y.W(0,"refraction"),"$iU")
if(t)b5.dh=H.q(b5.y.W(0,"refractClr"),"$iK")}}if(c0.y.a)b5.di=H.q(b5.y.W(0,"alpha"),"$iU")
t=P.v
s=[t,A.dB]
b5.bT=new H.M(s)
b5.bU=new H.M([t,[P.n,A.ce]])
b5.bV=new H.M(s)
b5.bW=new H.M([t,[P.n,A.cg]])
b5.bX=new H.M(s)
b5.bY=new H.M([t,[P.n,A.ch]])
if(c0.id){for(t=c0.z,s=t.length,r=[A.ce],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.am()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.i(0,g)
if(m==null)H.t(P.u(b7+g+b8))
H.q(m,"$iK")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.i(0,g)
if(f==null)H.t(P.u(b7+g+b8))
H.q(f,"$iK")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.i(0,g)
if(e==null)H.t(P.u(b7+g+b8))
H.q(e,"$iK")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.i(0,g)
if(m==null)H.t(P.u(b7+g+b8))
H.q(m,"$iK")
o=b5.y
g=i+"s["+n+"].color"
f=o.i(0,g)
if(f==null)H.t(P.u(b7+g+b8))
H.q(f,"$iK")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.i(0,o)
if(e==null)H.t(P.u(b7+o+b8))
H.q(e,"$ibA")
a=e}else a=b6
h.push(new A.ce(b,c,d,m,f,a))}b5.bU.m(0,j,h)
q=b5.bT
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.t(P.u(b7+o+b8))
q.m(0,j,m)}for(t=c0.Q,s=t.length,r=[A.cg],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.i(0,o)
if(m==null)H.t(P.u(b7+o+b8))
H.q(m,"$iK")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.i(0,o)
if(f==null)H.t(P.u(b7+o+b8))
H.q(f,"$iK")
p=b5.y
o=i+"s["+n+"].color"
e=p.i(0,o)
if(e==null)H.t(P.u(b7+o+b8))
H.q(e,"$iK")
if(typeof j!=="number")return j.am()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.i(0,o)
if(a0==null)H.t(P.u(b7+o+b8))
H.q(a0,"$icf")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.i(0,o)
if(a0==null)H.t(P.u(b7+o+b8))
H.q(a0,"$ibB")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.i(0,o)
if(a0==null)H.t(P.u(b7+o+b8))
H.q(a0,"$ibB")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.i(0,o)
if(a2==null)H.t(P.u(b7+o+b8))
H.q(a2,"$icd")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.i(0,o)
if(a0==null)H.t(P.u(b7+o+b8))
H.q(a0,"$iU")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.i(0,o)
if(a2==null)H.t(P.u(b7+o+b8))
H.q(a2,"$iU")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.i(0,o)
if(a5==null)H.t(P.u(b7+o+b8))
H.q(a5,"$iU")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}h.push(new A.cg(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.bW.m(0,j,h)
q=b5.bV
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.t(P.u(b7+o+b8))
q.m(0,j,m)}for(t=c0.ch,s=t.length,r=[A.ch],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.i(0,o)
if(m==null)H.t(P.u(b7+o+b8))
H.q(m,"$iK")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.i(0,o)
if(f==null)H.t(P.u(b7+o+b8))
H.q(f,"$iK")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.i(0,o)
if(e==null)H.t(P.u(b7+o+b8))
H.q(e,"$iK")
p=b5.y
o=i+"s["+n+"].color"
a0=p.i(0,o)
if(a0==null)H.t(P.u(b7+o+b8))
H.q(a0,"$iK")
if(typeof j!=="number")return j.am()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.i(0,o)
if(a2==null)H.t(P.u(b7+o+b8))
H.q(a2,"$iK")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.i(0,o)
if(a5==null)H.t(P.u(b7+o+b8))
H.q(a5,"$iK")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.i(0,o)
if(a9==null)H.t(P.u(b7+o+b8))
H.q(a9,"$iU")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.i(0,o)
if(b0==null)H.t(P.u(b7+o+b8))
H.q(b0,"$iU")
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
if(a2==null)H.t(P.u(b7+g+b8))
H.q(a2,"$icd")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.i(0,g)
if(a2==null)H.t(P.u(b7+g+b8))
H.q(a2,"$iU")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.i(0,g)
if(a5==null)H.t(P.u(b7+g+b8))
H.q(a5,"$iU")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.i(0,g)
if(a2==null)H.t(P.u(b7+g+b8))
H.q(a2,"$iU")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.i(0,g)
if(a5==null)H.t(P.u(b7+g+b8))
H.q(a5,"$iU")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.i(0,g)
if(a9==null)H.t(P.u(b7+g+b8))
H.q(a9,"$iU")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.i(0,g)
if(a2==null)H.t(P.u(b7+g+b8))
H.q(a2,"$ibA")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.i(0,o)
if(a2==null)H.t(P.u(b7+o+b8))
H.q(a2,"$ibA")
a3=a2}else a3=b6
h.push(new A.ch(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.bY.m(0,j,h)
q=b5.bX
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.t(P.u(b7+o+b8))
q.m(0,j,m)}}},
fS:function(a,b){}}
A.cR.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.dg.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.dm.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.h1.prototype={
h:function(a){return this.b0}}
A.ce.prototype={}
A.cg.prototype={}
A.ch.prototype={}
A.dk.prototype={
cm:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
ds:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cA(b,35633)
r.f=r.cA(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.t(P.u("Failed to link shader: "+H.e(s)))}r.fU()
r.fW()},
ah:function(a){a.a.useProgram(this.r)
this.x.ho()},
cA:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.u("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fU:function(){var u,t,s,r=this,q=H.c([],[A.cK]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.w(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cK(p,t.name,s))}r.x=new A.eM(q)},
fW:function(){var u,t,s,r=this,q=H.c([],[A.dA]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.w(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hk(t.type,t.size,t.name,s))}r.y=new A.iu(q)},
aK:function(a,b,c){var u=this.a
if(a===1)return new A.dB(u,b,c)
else return A.kH(u,this.r,b,a,c)},
ez:function(a,b,c){var u=this.a
if(a===1)return new A.bA(u,b,c)
else return A.kH(u,this.r,b,a,c)},
eA:function(a,b,c){var u=this.a
if(a===1)return new A.bB(u,b,c)
else return A.kH(u,this.r,b,a,c)},
bd:function(a,b){return new P.dR(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hk:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aK(b,c,d)
case 5121:return u.aK(b,c,d)
case 5122:return u.aK(b,c,d)
case 5123:return u.aK(b,c,d)
case 5124:return u.aK(b,c,d)
case 5125:return u.aK(b,c,d)
case 5126:return new A.U(u.a,c,d)
case 35664:return new A.iq(u.a,c,d)
case 35665:return new A.K(u.a,c,d)
case 35666:return new A.cd(u.a,c,d)
case 35667:return new A.ir(u.a,c,d)
case 35668:return new A.is(u.a,c,d)
case 35669:return new A.it(u.a,c,d)
case 35674:return new A.iv(u.a,c,d)
case 35675:return new A.cf(u.a,c,d)
case 35676:return new A.a5(u.a,c,d)
case 35678:return u.ez(b,c,d)
case 35680:return u.eA(b,c,d)
case 35670:throw H.d(u.bd("BOOL",c))
case 35671:throw H.d(u.bd("BOOL_VEC2",c))
case 35672:throw H.d(u.bd("BOOL_VEC3",c))
case 35673:throw H.d(u.bd("BOOL_VEC4",c))
default:throw H.d(P.u("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.dA.prototype={}
A.iu.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
W:function(a,b){var u=this.i(0,b)
if(u==null)throw H.d(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.M()},
M:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.dB.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.ir.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.is.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.it.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.ip.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.U.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.iq.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.K.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.cd.prototype={
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iv.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.cf.prototype={
af:function(a){var u=new Float32Array(H.bF(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.a5.prototype={
af:function(a){var u=new Float32Array(H.bF(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bA.prototype={
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bB.prototype={
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jH.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c4(s.b,b).c4(s.d.c4(s.c,b),c)
a.sa4(0,new V.T(r.a,r.b,r.c))
a.sdU(r.u(0,Math.sqrt(r.D(r))))
s=1-b
u=1-c
a.sd_(new V.ba(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.jS.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.jU.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.w(p)
s=-s*p
u=r*p
a.sa4(0,new V.T(s,u,q))
u=new V.A(s,u,q)
a.sdU(u.u(0,Math.sqrt(u.D(u))))
a.sd_(new V.ba(1-c,2+c,-1,-1))}}
F.jV.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.jW.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.ke.prototype={
$2:function(a,b){return 0}}
F.kf.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.w(s)
u=a.f
t=new V.A(u.a,u.b,u.c)
s=t.u(0,Math.sqrt(t.D(t))).B(0,this.b+s)
a.sa4(0,new V.T(s.a,s.b,s.c))}}
F.ki.prototype={
$1:function(a){return new V.T(Math.cos(a),Math.sin(a),0)}}
F.k3.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.T(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.jT.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.l2(n.$1(o),m)
m=J.l2(n.$1(o+3.141592653589793/p.c),m).O(0,l)
m=new V.A(m.a,m.b,m.c)
u=m.u(0,Math.sqrt(m.D(m)))
n=$.lK
if(n==null){n=new V.A(1,0,0)
$.lK=n
t=n}else t=n
n=u.aD(!J.C(u,t)?V.lN():t)
s=n.u(0,Math.sqrt(n.D(n)))
n=s.aD(u)
t=n.u(0,Math.sqrt(n.D(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.B(0,n*m)
m=s.B(0,q*m)
a.sa4(0,l.A(0,new V.T(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.aX.prototype={
aZ:function(){var u=this
if(!u.gb_()){C.b.K(u.a.a.d.b,u)
u.a.a.Z()}u.bG()
u.bH()
u.fK()},
bK:function(a){this.a=a
a.d.b.push(this)},
bL:function(a){this.b=a
a.d.c.push(this)},
fT:function(a){this.c=a
a.d.d.push(this)},
bG:function(){var u=this.a
if(u!=null){C.b.K(u.d.b,this)
this.a=null}},
bH:function(){var u=this.b
if(u!=null){C.b.K(u.d.c,this)
this.b=null}},
fK:function(){var u=this.c
if(u!=null){C.b.K(u.d.d,this)
this.c=null}},
gb_:function(){return this.a==null||this.b==null||this.c==null},
eu:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.ci()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.dt())return
return s.u(0,Math.sqrt(s.D(s)))},
ew:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.O(0,q)
r=new V.A(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.D(r)))
r=t.O(0,q)
r=new V.A(r.a,r.b,r.c)
r=s.aD(r.u(0,Math.sqrt(r.D(r))))
return r.u(0,Math.sqrt(r.D(r)))},
bP:function(){var u,t=this
if(t.d!=null)return!0
u=t.eu()
if(u==null){u=t.ew()
if(u==null)return!1}t.d=u
t.a.a.Z()
return!0},
es:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.ci()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.dt())return
return s.u(0,Math.sqrt(s.D(s)))},
ev:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.z().a){l=d.O(0,g)
l=new V.A(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.D(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.O(0,g).B(0,p).A(0,g).O(0,j)
l=new V.A(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.D(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.D(l)))
l=o.aD(q)
l=l.u(0,Math.sqrt(l.D(l))).aD(o)
q=l.u(0,Math.sqrt(l.D(l)))}return q},
bN:function(){var u,t=this
if(t.e!=null)return!0
u=t.es()
if(u==null){u=t.ev()
if(u==null)return!1}t.e=u
t.a.a.Z()
return!0},
ghe:function(a){var u=this
if(J.C(u.a,u.b))return!0
if(J.C(u.b,u.c))return!0
if(J.C(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.M()},
F:function(a){var u,t,s=this
if(s.gb_())return a+"disposed"
u=a+C.a.ak(J.a2(s.a.e),0)+", "+C.a.ak(J.a2(s.b.e),0)+", "+C.a.ak(J.a2(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.h(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.h(0)+"}"):u+"-}"},
M:function(){return this.F("")}}
F.fo.prototype={}
F.hU.prototype={
b2:function(a,b,c){var u,t=b.a
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
if(t==u.e){t=b.c
t.a.a.v()
t=t.e
u=c.c
u.a.a.v()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.c
u.a.a.v()
if(t==u.e){t=b.c
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.v()
t=t.e
u=c.c
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
if(t==u.e){t=b.c
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.c_.prototype={
aZ:function(){var u=this
if(!u.gb_()){C.b.K(u.a.a.c.b,u)
u.a.a.Z()}u.bG()
u.bH()},
bK:function(a){this.a=a
a.c.b.push(this)},
bL:function(a){this.b=a
a.c.c.push(this)},
bG:function(){var u=this.a
if(u!=null){C.b.K(u.c.b,this)
this.a=null}},
bH:function(){var u=this.b
if(u!=null){C.b.K(u.c.c,this)
this.b=null}},
gb_:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.M()},
F:function(a){if(this.gb_())return a+"disposed"
return a+C.a.ak(J.a2(this.a.e),0)+", "+C.a.ak(J.a2(this.b.e),0)},
M:function(){return this.F("")}}
F.fL.prototype={}
F.io.prototype={
b2:function(a,b,c){var u,t=b.a
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
return t==u.e}else{t=b.a
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
return t==u.e}else return!1}}}
F.c6.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.M()},
F:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.ak(J.a2(u.e),0)},
M:function(){return this.F("")}}
F.hM.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.G():u},
b3:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.v()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){r=g[s]
h.a.n(0,r.hh())}h.a.v()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.c6()
if(n.a==null)H.t(P.u("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.E(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.v()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.n_(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.v()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.v()
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
F.bT(l,k,i)}g=h.e
if(g!=null)g.al(0)},
aw:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aw()||!1
if(!t.a.aw())u=!1
s=t.e
if(s!=null)s.al(0)
return u},
hF:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.cD(o,0)])
for(o=[F.be];u.length!==0;){t=C.b.ghs(u)
C.b.dN(u,0)
if(t!=null){s=H.c([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.b(u,r)
q=u[r]
if(q!=null&&a.b2(0,t,q)){s.push(q)
C.b.dN(u,r)}}if(s.length>1)b.b3(s)}}p.a.v()
p.c.c9()
p.d.c9()
p.b.hY()
p.c.ca(new F.io())
p.d.ca(new F.hU())
o=p.e
if(o!=null)o.al(0)},
bM:function(){this.hF(new F.iS(),new F.hp())},
bZ:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.bZ()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.b(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdz(new V.A(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.A(s,r,o).u(0,Math.sqrt(s*s+r*r+o*o))
if(!J.C(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.E(null)}}}}o=p.e
if(o!=null)o.al(0)},
d2:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.al()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aS().a)!==0)++s
if((t&$.aR().a)!==0)++s
if((t&$.bi().a)!==0)++s
if((t&$.bj().a)!==0)++s
if((t&$.cF().a)!==0)++s
if((t&$.cG().a)!==0)++s
if((t&$.bM().a)!==0)++s
if((t&$.aQ().a)!==0)++s
r=a4.gci(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.c(u,[P.L])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.cL])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.h9(m)
k=l.gci(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.cL(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].hD(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bF(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bP(new Z.dH(a1,d),o,a4)
c.b=H.c([],[Z.bq])
if(a0.b.b.length!==0){b=H.c([],[P.v])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.v()
b.push(t.e)}a=Z.kK(u,34963,b)
c.b.push(new Z.bq(0,b.length,a))}if(a0.c.b.length!==0){b=H.c([],[P.v])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.v()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.v()
b.push(t.e)}a=Z.kK(u,34963,b)
c.b.push(new Z.bq(1,b.length,a))}if(a0.d.b.length!==0){b=H.c([],[P.v])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.v()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.v()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].c
t.a.a.v()
b.push(t.e)}a=Z.kK(u,34963,b)
c.b.push(new Z.bq(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.c([],[P.k])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.F(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.F(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.F(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.F(t))}return C.b.k(s,"\n")},
Z:function(){var u=this.e
if(u!=null)u.E(null)}}
F.hN.prototype={
h5:function(a){var u,t,s,r,q,p=H.c([],[F.aX]),o=a.length
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
p.push(F.bT(u,r,q))}}return p},
h6:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.c([],[F.aX])
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
h.push(F.bT(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bT(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bT(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.bT(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
ca:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.b2(0,p,n)){p.aZ()
break}}}}},
c9:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.ghe(s)
if(t)s.aZ()}},
aw:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].bP())s=!1
return s},
bO:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].bN())s=!1
return s},
bZ:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.A(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.A(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.E(null)}},
h:function(a){return this.M()},
F:function(a){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].F(a))
return C.b.k(r,"\n")},
M:function(){return this.F("")}}
F.hO.prototype={
gl:function(a){return this.b.length},
ca:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.i(0,q)
for(o=q-1;o>=0;--o){n=r.c.i(0,o)
if(a.b2(0,p,n)){p.aZ()
break}}}}},
c9:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=J.C(s.a,s.b)
if(t)s.aZ()}},
h:function(a){return this.M()},
F:function(a){var u,t,s=H.c([],[P.k]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].F(a+(""+u+". ")))}return C.b.k(s,"\n")},
M:function(){return this.F("")}}
F.hP.prototype={
gl:function(a){return this.b.length},
hY:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.K(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.E(null)}s=t.a
if(s!=null){C.b.K(s.b.b,t)
t.a=null}}}},
h:function(a){return this.M()},
F:function(a){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].F(a))
return C.b.k(r,"\n")},
M:function(){return this.F("")}}
F.be.prototype={
bS:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.dG(u.cx,r,o,t,s,q,p,a,n)},
hh:function(){return this.bS(null)},
sa4:function(a,b){var u
if(!J.C(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Z()}},
sdz:function(a){var u
a=a==null?null:a.u(0,Math.sqrt(a.D(a)))
if(!J.C(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Z()}},
sdU:function(a){var u
if(!J.C(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Z()}},
sd_:function(a){var u
if(!J.C(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Z()}},
hD:function(a){var u,t,s=this
if(a.p(0,$.al())){u=s.f
t=[P.L]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.aS())){u=s.r
t=[P.L]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.aR())){u=s.x
t=[P.L]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bi())){u=s.y
t=[P.L]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.p(0,$.bj())){u=s.z
t=[P.L]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.cF())){u=s.Q
t=[P.L]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.cG())){u=s.Q
t=[P.L]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bM()))return H.c([s.ch],[P.L])
else if(a.p(0,$.aQ())){u=s.cx
t=[P.L]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.L])},
bP:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.ci()
t.d.G(0,new F.iX(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.al(0)}return!0},
bN:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.ci()
t.d.G(0,new F.iW(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.al(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.M()},
F:function(a){var u,t,s=this,r="-",q=H.c([],[P.k])
q.push(C.a.ak(J.a2(s.e),0))
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
M:function(){return this.F("")}}
F.iX.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.A(0,t)}}}
F.iW.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.A(0,t)}}}
F.iN.prototype={
v:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.b(u,r)
u[r].e=s;++s}this.b=!1}},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.u("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.Z()
return!0},
h7:function(a,b,c,d,e,f){var u=F.dG(a,null,b,c,d,e,f,null,0)
this.n(0,u)
return u},
gl:function(a){return this.c.length},
aw:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].bP()
return!0},
bO:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].bN()
return!0},
hd:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.C(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
h:function(a){return this.M()},
F:function(a){var u,t,s,r
this.v()
u=H.c([],[P.k])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r)u.push(t[r].F(a))
return C.b.k(u,"\n")},
M:function(){return this.F("")}}
F.iO.prototype={
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
G:function(a,b){var u=this
C.b.G(u.b,b)
C.b.G(u.c,new F.iP(u,b))
C.b.G(u.d,new F.iQ(u,b))},
h:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].F(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].F(""))
return C.b.k(r,"\n")}}
F.iP.prototype={
$1:function(a){if(!J.C(a.a,this.a))this.b.$1(a)}}
F.iQ.prototype={
$1:function(a){var u=this.a
if(!J.C(a.a,u)&&!J.C(a.b,u))this.b.$1(a)}}
F.iR.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.b(t,u)
return t[u]}else{if(b<0)return H.b(t,b)
return t[b]}},
h:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].F(""))
return C.b.k(r,"\n")}}
F.iT.prototype={}
F.iS.prototype={
b2:function(a,b,c){return J.C(b.f,c.f)}}
F.iU.prototype={}
F.hp.prototype={
b3:function(a){var u,t,s,r=V.ci()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)r=new V.A(r.a+s.a,r.b+s.b,r.c+s.c)}r=r.u(0,Math.sqrt(r.D(r)))
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t)a[t].sdz(r)
return}}
F.iV.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].F(""))
return C.b.k(r,"\n")}}
O.fa.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.G():u},
a2:function(a){var u=this.r
if(u!=null)u.E(a)},
ar:function(a,b){},
dO:function(a,b){var u,t,s,r,q=this,p=q.a
if(p==null){p=q.f
u="Grey"+(p?"Point":"View")+"Depth"
t=a.fr.i(0,u)
if(t==null){u=a.a
s="Grey"+(p?"Point":"View")+"Depth"
t=new A.fb(u,s)
t.cm(u,s)
p=p?"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = length(loc.xyz);\n":"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n"
p+="  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n"
t.ds(0,"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n".charCodeAt(0)==0?"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n":"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n",p.charCodeAt(0)==0?p:p)
t.z=t.x.i(0,"posAttr")
t.Q=H.q(t.y.i(0,"width"),"$iU")
t.ch=H.q(t.y.i(0,"stop"),"$iU")
t.cx=H.q(t.y.i(0,"viewObjMat"),"$ia5")
t.cy=H.q(t.y.i(0,"projMat"),"$ia5")
a.cY(t)}q.a=t
p=t}u=b.e
if((!(u instanceof Z.bP)?b.e=null:u)==null){p=b.d.d2(new Z.dI(a.a),$.al())
u=p.aE($.al())
s=q.a
u.e=s.z.c
b.e=p
p=s}p.ah(a)
u=q.b
s=q.c
r=p.Q
r.a.uniform1f(r.d,u-s)
s=q.c
u=p.ch
u.a.uniform1f(u.d,s)
s=a.cy
s=s.ga_(s)
u=p.cy
u.toString
u.af(s.ab(0,!0))
s=a.gdZ()
p=p.cx
p.toString
p.af(s.ab(0,!0))
p=b.e
p.ah(a)
p.aq(a)
p.b7(a)
p=q.a
p.toString
a.a.useProgram(null)
p.x.d7()}}
O.d6.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.G():u},
a2:function(a){var u=this.fr
if(u!=null)u.E(a)},
em:function(){return this.a2(null)},
cK:function(a){this.a=null
this.a2(a)},
fO:function(){return this.cK(null)},
eS:function(a,b){var u=new D.aY()
u.b=!0
this.a2(u)},
eU:function(a,b){var u=new D.aZ()
u.b=!0
this.a2(u)},
cv:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.v,h=new H.M([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=r.gan()
p=h.i(0,r.gan())
h.m(0,q,p==null?1:p)}o=H.c([],[A.cR])
h.G(0,new O.h5(j,o))
C.b.bs(o,new O.h6())
n=new H.M([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=r.gan()
p=n.i(0,r.gan())
n.m(0,q,p==null?1:p)}m=H.c([],[A.dg])
n.G(0,new O.h7(j,m))
C.b.bs(m,new O.h8())
l=new H.M([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.o)(i),++s){r=i[s]
t=r.gan()
q=l.i(0,r.gan())
l.m(0,t,q==null?1:q)}k=H.c([],[A.dm])
l.G(0,new O.h9(j,k))
C.b.bs(k,new O.ha())
i=C.c.a9(j.e.a.length+3,4)
j.dy.e
return A.n6(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
er:function(a,b){if(b!=null)if(!C.b.R(a,b)){b.a=a.length
a.push(b)}},
ar:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.Z(u,u.length);u.w();){t=u.d
t.toString
s=$.b9
t.a=s==null?$.b9=new V.T(0,0,0):s
s=$.iM
t.b=s==null?$.iM=new V.A(0,0,1):s
s=$.iL
t.c=s==null?$.iL=new V.A(0,1,0):s
s=$.iK
t.d=s==null?$.iK=new V.A(-1,0,0):s
s=t.f
if(s!=null){r=s.az(0,b,t)
if(r!=null){t.a=r.bo(t.a)
s=r.bp(t.b)
q=s.a
p=s.b
o=s.c
t.b=s.u(0,Math.sqrt(q*q+p*p+o*o))
o=r.bp(t.c)
p=o.a
q=o.b
s=o.c
t.c=o.u(0,Math.sqrt(p*p+q*q+s*s))
s=r.bp(t.d)
q=s.a
p=s.b
o=s.c
t.d=s.u(0,Math.sqrt(q*q+p*p+o*o))}}}},
dO:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a
if(b0==null){b0=a9.cv()
u=b1.fr.i(0,b0.b0)
if(u==null){u=A.n5(b0,b1.a)
b1.cY(u)}b0=a9.a=u
b2.e=null}t=b0.z
s=t.d9
b0=b2.e
if(!(b0 instanceof Z.bP))b0=b2.e=null
if(b0==null||!b0.d.p(0,s)){b0=t.k3
if(b0)b2.d.aw()
r=t.k4
if(r){q=b2.d
p=q.e
if(p!=null)++p.d
q.d.bO()
q.a.bO()
q=q.e
if(q!=null)q.al(0)}q=t.r2
if(q){p=b2.d
o=p.e
if(o!=null)++o.d
p.a.hd()
p=p.e
if(p!=null)p.al(0)}n=b2.d.d2(new Z.dI(b1.a),s)
n.aE($.al()).e=a9.a.Q.c
if(b0)n.aE($.aS()).e=a9.a.cx.c
if(r)n.aE($.aR()).e=a9.a.ch.c
if(t.r1)n.aE($.bi()).e=a9.a.cy.c
if(q)n.aE($.bj()).e=a9.a.db.c
if(t.rx)n.aE($.aQ()).e=a9.a.dx.c
b2.e=n}m=H.c([],[T.dt])
a9.a.ah(b1)
if(t.dy){b0=a9.a
r=b1.dx
r=r.ga_(r)
b0=b0.dy
b0.toString
b0.af(r.ab(0,!0))}if(t.fr){b0=a9.a
r=b1.gdZ()
b0=b0.fr
b0.toString
b0.af(r.ab(0,!0))}b0=a9.a
r=b1.ch
if(r==null){r=b1.ghW()
q=b1.dx
q=b1.ch=r.B(0,q.ga_(q))
r=q}b0=b0.fy
b0.toString
b0.af(r.ab(0,!0))
if(t.ry){b0=a9.a
r=a9.b
b0=b0.k1
b0.toString
b0.af(C.j.ab(r,!0))}if(t.x1){b0=a9.a
r=a9.c
b0=b0.k2
b0.toString
b0.af(C.j.ab(r,!0))}if(t.x2){b0=a9.a
r=a9.d
b0=b0.k3
b0.toString
b0.af(C.j.ab(r,!0))}if(t.y2>0){l=a9.e.a.length
b0=a9.a.k4
b0.a.uniform1i(b0.d,l)
for(k=0;k<l;++k){b0=a9.a
r=a9.e.a
if(k>=r.length)return H.b(r,k)
r=r[k]
b0=b0.r1
if(k>=b0.length)return H.b(b0,k)
b0=b0[k]
j=new Float32Array(H.bF(r.ab(0,!0)))
b0.a.uniformMatrix4fv(b0.d,!1,j)}}if(t.a.a){b0=a9.a
r=a9.f.f
b0=b0.r2
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}if(t.id){if(t.b.a){b0=a9.a
r=a9.r.f
b0=b0.x1
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}if(t.c.a){b0=a9.a
r=a9.x.f
b0=b0.y2
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}if(t.d.a){b0=a9.a
r=a9.y.f
b0=b0.da
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}b0=t.e.a
if(!b0)r=!1
else r=!0
if(r){r=a9.a
q=a9.z.ch
r=r.dd
r.a.uniform1f(r.d,q)}if(b0){b0=a9.a
r=a9.z.f
b0=b0.dc
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}b0=t.z
if(b0.length>0){r=b1.db
i=r.ga_(r)
r=P.v
h=new H.M([r,r])
for(r=a9.dx.e,q=r.length,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
e=f.gan()
d=h.i(0,e)
if(d==null)d=0
h.m(0,e,d+1)
c=J.cH(a9.a.bU.i(0,e),d)
p=i.bp(f.ghn(f))
o=p.a
b=p.b
a=p.c
a=p.u(0,Math.sqrt(o*o+b*b+a*a))
b=c.e
o=a.a
p=a.b
a=a.c
b.a.uniform3f(b.d,o,p,a)
a=f.gaP(f)
p=c.f
p.a.uniform3f(p.d,a.a,a.b,a.c)
f.gaT()
p=f.ghn(f)
o=c.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.giz()
o=c.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gcb(f)
o=c.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gaT()
if(!C.b.R(m,p)){p.a=m.length
m.push(p)}p=f.gaT()
o=p.gbk(p)
if(o){o=c.r
o.toString
b=p.d
if(!b)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.o)(b0),++g){q=b0[g].a
l=h.i(0,q)
if(l==null)l=0
q=a9.a.bT.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.Q
if(b0.length>0){r=b1.db
i=r.ga_(r)
r=P.v
a0=new H.M([r,r])
for(r=a9.dx.f,q=r.length,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
e=f.gan()
d=a0.i(0,e)
if(d==null)d=0
a0.m(0,e,d+1)
c=J.cH(a9.a.bW.i(0,e),d)
a1=i.B(0,f.ga_(f))
p=f.ga_(f)
o=$.b9
p=p.bo(o==null?$.b9=new V.T(0,0,0):o)
o=c.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.b9
p=a1.bo(p==null?$.b9=new V.T(0,0,0):p)
o=c.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gaP(f)
o=c.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gaT()
p=a1.c3(0)
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
j=new Float32Array(H.bF(new V.d8(o,b,a,a2,a3,a4,a5,a6,p).ab(0,!0)))
a7.a.uniformMatrix3fv(a7.d,!1,j)
f.gaT()
p=f.gaT()
if(!C.b.R(m,p)){p.a=m.length
m.push(p)}p=f.gaT()
o=p.gbk(p)
if(o){o=c.f
o.toString
b=p.gbk(p)
if(!b)o.a.uniform1i(o.d,0)
else{p=p.ghx(p)
o.a.uniform1i(o.d,p)}}f.gcg()
p=f.gib()
o=c.x
o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=f.gcg()
if(!C.b.R(m,p)){p.a=m.length
m.push(p)}p=f.gcg()
o=p.gbk(p)
if(o){o=c.r
o.toString
b=p.gbk(p)
if(!b)o.a.uniform1i(o.d,0)
else{p=p.ghx(p)
o.a.uniform1i(o.d,p)}}if(f.gih()){p=f.gic()
o=c.y
o.a.uniform1f(o.d,p)
p=f.gie()
o=c.z
o.a.uniform1f(o.d,p)
p=f.gig()
o=c.Q
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.o)(b0),++g){q=b0[g].a
l=a0.i(0,q)
if(l==null)l=0
q=a9.a.bV.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.ch
if(b0.length>0){r=b1.db
i=r.ga_(r)
r=P.v
a8=new H.M([r,r])
for(r=a9.dx.r,q=r.length,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
e=f.gan()
d=a8.i(0,e)
if(d==null)d=0
a8.m(0,e,d+1)
c=J.cH(a9.a.bY.i(0,e),d)
p=f.a
o=c.b
b=p.a
a=p.b
p=p.c
o.a.uniform3f(o.d,b,a,p)
p=f.b
a=p.a
b=p.b
o=p.c
o=p.u(0,Math.sqrt(a*a+b*b+o*o))
b=c.c
a=o.a
p=o.b
o=o.c
b.a.uniform3f(b.d,a,p,o)
o=i.bo(f.a)
p=c.d
p.a.uniform3f(p.d,o.a,o.b,o.c)
o=f.r
p=c.e
p.a.uniform3f(p.d,o.a,o.b,o.c)
if(f.x!=null||f.y!=null){p=f.c
o=c.f
o.toString
b=p.a
a=p.b
p=p.c
o.a.uniform3f(o.d,b,a,p)
p=f.d
a=c.r
a.toString
b=p.a
o=p.b
p=p.c
a.a.uniform3f(a.d,b,o,p)
p=f.z
o=c.x
o.a.uniform1f(o.d,p)
p=f.Q
o=c.y
o.a.uniform1f(o.d,p)}p=f.x
o=p!=null
if(o){if(o)if(!C.b.R(m,p)){p.a=m.length
m.push(p)}p=f.x
o=p!=null
if(o&&p.d){b=c.dx
b.toString
if(!o||!p.d)b.a.uniform1i(b.d,0)
else{p=p.a
b.a.uniform1i(b.d,p)}}}if(f.y!=null){p=f.e
o=c.z
o.toString
b=p.a
a=p.b
a2=p.c
p=p.d
o.a.uniform4f(o.d,b,a,a2,p)
p=f.y
if(p!=null)if(!C.b.R(m,p)){p.a=m.length
m.push(p)}p=f.y
o=p!=null
if(o&&p.d){b=c.dy
b.toString
if(!o||!p.d)b.a.uniform1i(b.d,0)
else{p=p.a
b.a.uniform1i(b.d,p)}}}if(f.db){p=f.cy
o=c.Q
o.a.uniform1f(o.d,p)
p=f.dx
o=c.ch
o.a.uniform1f(o.d,p)}p=f.dy
o=c.cx
o.a.uniform1f(o.d,p)
p=f.fr
o=c.cy
o.a.uniform1f(o.d,p)
p=f.fx
o=c.db
o.a.uniform1f(o.d,p)}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.o)(b0),++g){q=b0[g].a
l=a8.i(0,q)
if(l==null)l=0
q=a9.a.bX.i(0,q)
q.a.uniform1i(q.d,l)}}}if(t.dx){b0=a9.a
r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.ga_(r).c3(0)}b0=b0.id
b0.toString
b0.af(r.ab(0,!0))}if(t.cy){a9.er(m,a9.ch)
b0=a9.a
r=a9.ch
b0.fS(b0.de,r)
if(t.r.a){b0=a9.a
r=a9.cx.f
b0=b0.df
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}b0=t.x.a
if(!b0)r=!1
else r=!0
if(r){r=a9.a
q=a9.cy.ch
r=r.dg
r.a.uniform1f(r.d,q)}if(b0){b0=a9.a
r=a9.cy.f
b0=b0.dh
b0.a.uniform3f(b0.d,r.a,r.b,r.c)}}b0=t.y.a
r=!b0
if(r)q=!1
else q=!0
if(q){if(b0){b0=a9.a
q=a9.db.f
b0=b0.di
b0.a.uniform1f(b0.d,q)}b0=b1.a
b0.enable(3042)
b0.blendFunc(770,771)}for(b0=b1.a,k=0;k<m.length;++k){q=m[k]
if(!q.c&&q.d){q.c=!0
b0.activeTexture(33984+q.a)
b0.bindTexture(3553,q.b)}}q=b2.e
q.ah(b1)
q.aq(b1)
q.b7(b1)
if(r)r=!1
else r=!0
if(r)b0.disable(3042)
for(k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b0.activeTexture(33984+r.a)
b0.bindTexture(3553,null)}}r=a9.a
r.toString
b0.useProgram(null)
r.x.d7()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.cv().b0}}
O.h5.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.cR(a,C.c.a9(b+3,4)*4))}}
O.h6.prototype={
$2:function(a,b){return J.kl(a.a,b.a)}}
O.h7.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.dg(a,C.c.a9(b+3,4)*4))}}
O.h8.prototype={
$2:function(a,b){return J.kl(a.a,b.a)}}
O.h9.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.dm(a,C.c.a9(b+3,4)*4))}}
O.ha.prototype={
$2:function(a,b){return J.kl(a.a,b.a)}}
O.h_.prototype={
aB:function(){var u,t=this
t.ck()
u=t.f
if(!(Math.abs(u-1)<$.z().a)){t.f=1
u=new D.x(t.b,u,1)
u.b=!0
t.a.a2(u)}}}
O.d7.prototype={
aB:function(){},
cO:function(a){var u,t,s=this
if(!s.c.p(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aB()
u=s.a
u.a=null
u.a2(null)}}}
O.h0.prototype={}
O.ap.prototype={
cM:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.x(s.b+".color",u,a)
t.b=!0
s.a.a2(t)}},
aB:function(){this.ck()
this.cM(new V.V(1,1,1))},
saP:function(a,b){this.cO(new A.a_(!0,!1,!1))
this.cM(b)}}
O.h2.prototype={}
O.h3.prototype={
aB:function(){var u,t=this
t.cl()
u=t.ch
if(!(Math.abs(u-1)<$.z().a)){t.ch=1
u=new D.x(t.b+".refraction",u,1)
u.b=!0
t.a.a2(u)}}}
O.h4.prototype={
cP:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.z().a)){u.ch=a
t=new D.x(u.b+".shininess",t,a)
t.b=!0
u.a.a2(t)}},
aB:function(){this.cl()
this.cP(100)}}
O.ds.prototype={}
T.dt.prototype={}
T.i8.prototype={}
T.i9.prototype={
cN:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.d8()}},
gt:function(){var u=this.y
return u==null?this.y=D.G():u}}
T.ia.prototype={
hE:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=T.kF(q)
W.X(u,"load",new T.ib(this,t,u,!1,q,!1,!1),!1)
return t},
fP:function(a,b,c){var u,t,s,r
b=V.cE(b)
u=V.cE(a.width)
t=V.cE(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.ko()
s.width=u
s.height=t
r=C.i.e1(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oA(r.getImageData(0,0,s.width,s.height))}}}
T.ib.prototype={
$1:function(a){var u,t,s=this,r=3553,q=s.b,p=s.c
q.e=p.width
q.f=p.height
u=s.a
t=u.fP(p,u.b,s.d)
q.r=p.width
q.x=p.height
p=u.a
p.bindTexture(r,s.e)
p.pixelStorei(37440,s.f?1:0)
C.B.i4(p,r,0,6408,6408,5121,t)
if(s.r)p.generateMipmap(r)
p.bindTexture(r,null)
q.cN();++u.e}}
X.eR.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.G():u},
a3:function(a){var u=this.fr
if(u!=null)u.E(a)},
sat:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.x("width",u,b)
u.b=!0
t.a3(u)}},
sao:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.x("height",u,b)
u.b=!0
t.a3(u)}},
ah:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=3553,f=36161,e=36160
if(i.y==null){u=a.a
t=i.ch
s=i.a
r=i.b
q=u.getParameter(3379)
p=V.cE(s)
o=V.cE(r)
q=V.cE(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(g,n)
u.texParameteri(g,10242,33071)
u.texParameteri(g,10243,33071)
u.texParameteri(g,10241,9729)
u.texParameteri(g,10240,9729)
C.B.dT(u,g,0,6408,p,o,0,6408,5121,h)
u.bindTexture(g,h)
m=T.kF(n)
m.e=s
m.f=r
m.r=p
m.x=o
m.cN()
t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.d8()
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
a.c=C.d.a0(s*i.a)
r=t.d
a.d=C.d.a0(r*i.b)
l=t.a
k=i.c
if(typeof k!=="number")return H.w(k)
j=C.d.a0(l*k)
t=t.b
l=i.d
if(typeof l!=="number")return H.w(l)
u.viewport(j,C.d.a0(t*l),C.d.a0(s*k),C.d.a0(r*l))
u.clearDepth(i.db)
t=i.cx
u.clearColor(t.a,t.b,t.c,t.d)
u.clear(16640)},
b7:function(a){a.a.bindFramebuffer(36160,null)}}
X.kn.prototype={}
X.fv.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.G():u},
ah:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.w(u)
q=C.d.a0(r*u)
r=s.b
if(typeof t!=="number")return H.w(t)
p=C.d.a0(r*t)
r=C.d.a0(s.c*u)
a.c=r
s=C.d.a0(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
b7:function(a){}}
X.df.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.G():u},
a3:function(a){var u=this.f
if(u!=null)u.E(a)},
eX:function(){return this.a3(null)},
saQ:function(a){var u,t,s=this
if(!J.C(s.b,a)){u=s.b
if(u!=null)u.gt().K(0,s.gcG())
t=s.b
s.b=a
if(a!=null)a.gt().n(0,s.gcG())
u=new D.x("mover",t,s.b)
u.b=!0
s.a3(u)}}}
X.i4.prototype={}
V.cN.prototype={
b9:function(a){this.b=new P.fB(C.Q)
this.c=null
this.d=H.c([],[[P.n,W.ai]])},
L:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.c([],[W.ai]))
u=a.split("\n")
for(l=u.length,t=[W.ai],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.c([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.ey(q,0,q.length)
n=o==null?q:o
C.O.e3(p,H.kZ(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gax(m.d).push(p)}},
dI:function(a,b){var u,t,s,r,q=this
q.d=H.c([],[[P.n,W.ai]])
u=C.b.k(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bg():t).dW(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r)q.bm(t[r])}}
V.kd.prototype={
$1:function(a){var u=C.d.dV(this.a.ghw(),2)
if(u!=="0.00")P.kY(u+" fps")}}
V.f8.prototype={
bm:function(a){var u=this
switch(a.a){case"Class":u.L(a.b,"#551")
break
case"Comment":u.L(a.b,"#777")
break
case"Id":u.L(a.b,"#111")
break
case"Num":u.L(a.b,"#191")
break
case"Reserved":u.L(a.b,"#119")
break
case"String":u.L(a.b,"#171")
break
case"Symbol":u.L(a.b,"#616")
break
case"Type":u.L(a.b,"#B11")
break
case"Whitespace":u.L(a.b,"#111")
break}},
bg:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=R.ig()
a1.c=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=T.p(new H.l("_"))
u.a.push(t)
t=T.J("a","z")
u.a.push(t)
t=T.J("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=T.p(new H.l("_"))
t.a.push(u)
u=T.J("0","9")
t.a.push(u)
u=T.J("a","z")
t.a.push(u)
u=T.J("A","Z")
t.a.push(u)
u=a1.j(0,r).k(0,p)
t=T.J("0","9")
u.a.push(t)
t=a1.j(0,p).k(0,p)
u=T.J("0","9")
t.a.push(u)
u=a1.j(0,p).k(0,o)
t=T.p(new H.l("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=T.J("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=T.J("0","9")
u.a.push(t)
t=a1.j(0,r).k(0,m)
u=T.p(new H.l(l))
t.a.push(u)
u=a1.j(0,m).k(0,m)
t=T.p(new H.l(l))
u.a.push(t)
t=a1.j(0,r).k(0,k)
u=T.p(new H.l('"'))
t.a.push(u)
u=a1.j(0,k).k(0,j)
t=T.p(new H.l('"'))
u.a.push(t)
t=a1.j(0,k).k(0,i)
u=T.p(new H.l("\\"))
t.a.push(u)
u=a1.j(0,i).k(0,k)
t=T.p(new H.l('"'))
u.a.push(t)
a1.j(0,k).k(0,k).a.push(new T.ay())
t=a1.j(0,r).k(0,h)
u=T.p(new H.l("'"))
t.a.push(u)
u=a1.j(0,h).k(0,g)
t=T.p(new H.l("'"))
u.a.push(t)
t=a1.j(0,h).k(0,f)
u=T.p(new H.l("\\"))
t.a.push(u)
u=a1.j(0,f).k(0,h)
t=T.p(new H.l("'"))
u.a.push(t)
a1.j(0,h).k(0,h).a.push(new T.ay())
t=a1.j(0,r).k(0,e)
u=T.p(new H.l("/"))
t.a.push(u)
u=a1.j(0,e).k(0,d)
t=T.p(new H.l("/"))
u.a.push(t)
t=a1.j(0,d).k(0,c)
u=T.p(new H.l("\n"))
t.a.push(u)
u=a1.j(0,d).k(0,d)
t=new T.a3()
s=[T.b3]
t.a=H.c([],s)
u.a.push(t)
u=T.p(new H.l("\n"))
t.a.push(u)
u=a1.j(0,e).k(0,b)
t=T.p(new H.l("*"))
u.a.push(t)
t=a1.j(0,b).k(0,a)
u=T.p(new H.l("*"))
t.a.push(u)
u=a1.j(0,a).k(0,b)
t=new T.a3()
t.a=H.c([],s)
u.a.push(t)
u=T.p(new H.l("*"))
t.a.push(u)
u=a1.j(0,a).k(0,c)
t=T.p(new H.l("/"))
u.a.push(t)
t=a1.j(0,r).k(0,a0)
u=T.p(new H.l(" \n\t"))
t.a.push(u)
u=a1.j(0,a0).k(0,a0)
t=T.p(new H.l(" \n\t"))
u.a.push(t)
t=a1.j(0,p)
t.d=t.a.N("Num")
t=a1.j(0,n)
t.d=t.a.N("Num")
t=a1.j(0,m)
t.d=t.a.N("Symbol")
t=a1.j(0,j)
t.d=t.a.N("String")
t=a1.j(0,g)
t.d=t.a.N("String")
t=a1.j(0,c)
t.d=t.a.N(d)
t=a1.j(0,a0)
t.d=t.a.N(a0)
t=a1.j(0,q)
t=t.d=t.a.N(q)
u=[P.k]
t.aG(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aG(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aG(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fx.prototype={
bm:function(a){var u=this
switch(a.a){case"Builtin":u.L(a.b,"#411")
break
case"Comment":u.L(a.b,"#777")
break
case"Id":u.L(a.b,"#111")
break
case"Num":u.L(a.b,"#191")
break
case"Preprocess":u.L(a.b,"#737")
break
case"Reserved":u.L(a.b,"#119")
break
case"Symbol":u.L(a.b,"#611")
break
case"Type":u.L(a.b,"#171")
break
case"Whitespace":u.L(a.b,"#111")
break}},
bg:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=R.ig()
e.c=e.j(0,r)
u=e.j(0,r).k(0,q)
t=T.p(new H.l("_"))
u.a.push(t)
t=T.J("a","z")
u.a.push(t)
t=T.J("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=T.p(new H.l("_"))
t.a.push(u)
u=T.J("0","9")
t.a.push(u)
u=T.J("a","z")
t.a.push(u)
u=T.J("A","Z")
t.a.push(u)
u=e.j(0,r).k(0,p)
t=T.J("0","9")
u.a.push(t)
t=e.j(0,p).k(0,p)
u=T.J("0","9")
t.a.push(u)
u=e.j(0,p).k(0,o)
t=T.p(new H.l("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=T.J("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=T.J("0","9")
u.a.push(t)
t=e.j(0,r).k(0,m)
u=T.p(new H.l(l))
t.a.push(u)
u=e.j(0,m).k(0,m)
t=T.p(new H.l(l))
u.a.push(t)
t=e.j(0,r).k(0,k)
u=T.p(new H.l("/"))
t.a.push(u)
u=e.j(0,k).k(0,j)
t=T.p(new H.l("/"))
u.a.push(t)
e.j(0,k).k(0,m).a.push(new T.ay())
t=e.j(0,j).k(0,i)
u=T.p(new H.l("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new T.a3()
s=[T.b3]
t.a=H.c([],s)
u.a.push(t)
u=T.p(new H.l("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=T.p(new H.l("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new T.a3()
u.a=H.c([],s)
t.a.push(u)
t=T.p(new H.l("\n"))
u.a.push(t)
t=e.j(0,h).k(0,g)
u=T.p(new H.l("\n"))
t.a.push(u)
u=e.j(0,r).k(0,f)
t=T.p(new H.l(" \n\t"))
u.a.push(t)
t=e.j(0,f).k(0,f)
u=T.p(new H.l(" \n\t"))
t.a.push(u)
u=e.j(0,p)
u.d=u.a.N("Num")
u=e.j(0,n)
u.d=u.a.N("Num")
u=e.j(0,m)
u.d=u.a.N("Symbol")
u=e.j(0,i)
u.d=u.a.N(j)
u=e.j(0,g)
u.d=u.a.N(h)
u=e.j(0,f)
u.d=u.a.N(f)
u=e.j(0,q)
u=u.d=u.a.N(q)
t=[P.k]
u.aG(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aG(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aG(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fz.prototype={
bm:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.L(a.b,"#911")
u.L("=",t)
break
case"Id":u.L(a.b,t)
break
case"Other":u.L(a.b,t)
break
case"Reserved":u.L(a.b,"#119")
break
case"String":u.L(a.b,"#171")
break
case"Symbol":u.L(a.b,"#616")
break}},
bg:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=R.ig()
l.c=l.j(0,s)
u=l.j(0,s).k(0,r)
t=T.p(new H.l("_"))
u.a.push(t)
t=T.J("a","z")
u.a.push(t)
t=T.J("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=T.p(new H.l("_"))
t.a.push(u)
u=T.J("0","9")
t.a.push(u)
u=T.J("a","z")
t.a.push(u)
u=T.J("A","Z")
t.a.push(u)
u=l.j(0,r).k(0,q)
t=T.p(new H.l("="))
u.a.push(t)
u.c=!0
u=l.j(0,s).k(0,p)
t=T.p(new H.l("</\\-!>="))
u.a.push(t)
t=l.j(0,p).k(0,p)
u=T.p(new H.l("</\\-!>="))
t.a.push(u)
u=l.j(0,s).k(0,o)
t=T.p(new H.l('"'))
u.a.push(t)
t=l.j(0,o).k(0,n)
u=T.p(new H.l('"'))
t.a.push(u)
u=l.j(0,o).k(0,"EscStr")
t=T.p(new H.l("\\"))
u.a.push(t)
t=l.j(0,"EscStr").k(0,o)
u=T.p(new H.l('"'))
t.a.push(u)
l.j(0,o).k(0,o).a.push(new T.ay())
l.j(0,s).k(0,m).a.push(new T.ay())
u=l.j(0,m).k(0,m)
t=new T.a3()
t.a=H.c([],[T.b3])
u.a.push(t)
u=T.p(new H.l('</\\-!>=_"'))
t.a.push(u)
u=T.J("a","z")
t.a.push(u)
u=T.J("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.N("Symbol")
u=l.j(0,n)
u.d=u.a.N("String")
u=l.j(0,r)
t=u.a.N(r)
u.d=t
t.aG(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.k]))
t=l.j(0,q)
t.d=t.a.N(q)
t=l.j(0,m)
t.d=t.a.N(m)
return l}}
V.hv.prototype={
dI:function(a,b){this.d=H.c([],[[P.n,W.ai]])
this.L(C.b.k(b,"\n"),"#111")},
bm:function(a){},
bg:function(){return}}
V.hA.prototype={
cV:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.lE().gc8().i(0,H.e(u))
if(t==null)if(d){c.$0()
m.cT(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.l4(m.c).n(0,q)
o=W.mV("radio")
o.checked=s
o.name=u
W.X(o,"change",new V.hB(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.l4(m.c).n(0,r.createElement("br"))},
aN:function(a,b,c){return this.cV(a,b,c,!1)},
cT:function(a){var u,t,s=P.lE(),r=P.k,q=P.n1(s.gc8(),r,r)
q.m(0,this.a,a)
u=s.dP(0,q)
r=window.history
t=u.h(0)
r.toString
r.replaceState(new P.jq([],[]).cc(""),"",t)}}
V.hB.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.cT(u.d)}}}
V.hQ.prototype={
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
W.X(q,"scroll",new V.hS(o),!1)},
cX:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.fV()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dW(C.b.hC(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
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
t.appendChild(l)}else{k=P.et(C.x,n,C.e,!1)
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
e0:function(a){var u,t,s,r=new V.f8("dart")
r.b9("dart")
u=new V.fx("glsl")
u.b9("glsl")
t=new V.fz("html")
t.b9("html")
s=C.b.ht(H.c([r,u,t],[V.cN]),new V.hT(a))
if(s!=null)return s
r=new V.hv("plain")
r.b9("plain")
return r},
cW:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.c([],[P.v])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cB(s).a5(s,"+")){b0[t]=C.a.ad(s,1)
a6.push(1)
u=!0}else if(C.a.a5(s,"-")){b0[t]=C.a.ad(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.e0(a8)
r.dI(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.et(C.x,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.l6()
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.o)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.o)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.b.gS(s);a2.w();)d.appendChild(a2.gI(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
h3:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
fV:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=R.ig()
u.c=u.j(0,q)
t=u.j(0,q).k(0,p)
s=T.p(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new T.a3()
r=[T.b3]
s.a=H.c([],r)
t.a.push(s)
t=T.p(new H.l("*"))
s.a.push(t)
t=u.j(0,p).k(0,"BoldEnd")
s=T.p(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,o)
s=T.p(new H.l("_"))
t.a.push(s)
t.c=!0
t=u.j(0,o).k(0,o)
s=new T.a3()
s.a=H.c([],r)
t.a.push(s)
t=T.p(new H.l("_"))
s.a.push(t)
t=u.j(0,o).k(0,n)
s=T.p(new H.l("_"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,m)
s=T.p(new H.l("`"))
t.a.push(s)
t.c=!0
t=u.j(0,m).k(0,m)
s=new T.a3()
s.a=H.c([],r)
t.a.push(s)
t=T.p(new H.l("`"))
s.a.push(t)
t=u.j(0,m).k(0,"CodeEnd")
s=T.p(new H.l("`"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,l)
s=T.p(new H.l("["))
t.a.push(s)
t.c=!0
t=u.j(0,l).k(0,k)
s=T.p(new H.l("|"))
t.a.push(s)
s=u.j(0,l).k(0,j)
t=T.p(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.j(0,l).k(0,l)
t=new T.a3()
t.a=H.c([],r)
s.a.push(t)
s=T.p(new H.l("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=T.p(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new T.a3()
t.a=H.c([],r)
s.a.push(t)
s=T.p(new H.l("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new T.ay())
s=u.j(0,i).k(0,i)
t=new T.a3()
t.a=H.c([],r)
s.a.push(t)
s=T.p(new H.l("*_`["))
t.a.push(s)
s=u.j(0,"BoldEnd")
s.d=s.a.N(p)
s=u.j(0,n)
s.d=s.a.N(o)
s=u.j(0,"CodeEnd")
s.d=s.a.N(m)
s=u.j(0,j)
s.d=s.a.N("Link")
s=u.j(0,i)
s.d=s.a.N(i)
this.b=u}}
V.hS.prototype={
$1:function(a){P.lA(C.n,new V.hR(this.a))}}
V.hR.prototype={
$0:function(){var u=C.d.a0(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.hT.prototype={
$1:function(a){return a.a===this.a}}
V.k4.prototype={
$0:function(){this.a.sac(0,F.kT(1,null,null,1))}}
V.k5.prototype={
$0:function(){this.a.sac(0,F.jR(1,!0,!0,40,1))}}
V.k6.prototype={
$0:function(){this.a.sac(0,F.jR(0.2,!0,!0,40,0.2))}}
V.k7.prototype={
$0:function(){this.a.sac(0,F.jR(1,!0,!1,40,0))}}
V.k8.prototype={
$0:function(){this.a.sac(0,F.oW(6,6))}}
V.k9.prototype={
$0:function(){this.a.sac(0,F.mf())}}
V.ka.prototype={
$0:function(){this.a.sac(0,F.oP())}}
V.kb.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.k]
u.cW("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.cW("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.e6=u.h
u=J.d0.prototype
u.e8=u.h
u=P.h.prototype
u.e7=u.bq
u=W.S.prototype
u.bt=u.ai
u=W.eb.prototype
u.e9=u.av
u=T.cX.prototype
u.e5=u.aF
u.cj=u.h
u=O.d7.prototype
u.ck=u.aB
u=O.ap.prototype
u.cl=u.aB})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"ou","nD",8)
u(P,"ov","nE",8)
u(P,"ow","nF",8)
t(P,"m3","os",10)
s(W,"oJ",4,null,["$4"],["nG"],16,0)
s(W,"oK",4,null,["$4"],["nH"],16,0)
var m
r(m=E.aC.prototype,"gdE",0,0,null,["$1","$0"],["dF","hN"],0,0)
r(m,"gdG",0,0,null,["$1","$0"],["dH","hO"],0,0)
r(m,"gdC",0,0,null,["$1","$0"],["dD","hM"],0,0)
r(m,"gdA",0,0,null,["$1","$0"],["dB","hJ"],0,0)
q(m,"ghH","hI",4)
q(m,"ghK","hL",4)
r(m=E.du.prototype,"gcn",0,0,null,["$1","$0"],["cp","co"],0,0)
p(m,"gi0","dQ",10)
o(m=X.dE.prototype,"gf7","f8",5)
o(m,"geV","eW",5)
o(m,"gf1","f2",2)
o(m,"gfb","fc",11)
o(m,"gf9","fa",11)
o(m,"gff","fg",2)
o(m,"gfj","fk",2)
o(m,"gf5","f6",2)
o(m,"gfh","fi",2)
o(m,"gf3","f4",2)
o(m,"gfl","fm",19)
o(m,"gfn","fo",5)
o(m,"gfG","fH",6)
o(m,"gfC","fD",6)
o(m,"gfE","fF",6)
r(m=D.d2.prototype,"gcH",0,0,null,["$1","$0"],["cI","fd"],0,0)
o(m,"gfp","fq",20)
q(m,"geP","eQ",12)
q(m,"gfu","fv",12)
r(D.bx.prototype,"gaV",0,0,null,["$1","$0"],["X","eh"],0,0)
n(V.R.prototype,"gl","b1",7)
n(V.A.prototype,"gl","b1",7)
n(V.cj.prototype,"gl","b1",7)
r(m=U.bV.prototype,"gaJ",0,0,null,["$1","$0"],["U","ag"],0,0)
q(m,"gei","ej",13)
q(m,"gfs","ft",13)
r(U.bY.prototype,"gaJ",0,0,null,["$1","$0"],["U","ag"],0,0)
r(m=U.dF.prototype,"gaJ",0,0,null,["$1","$0"],["U","ag"],0,0)
o(m,"geJ","eK",1)
o(m,"geL","eM",1)
o(m,"geN","eO",1)
o(m,"geE","eF",1)
o(m,"geG","eH",1)
o(m,"gh1","h2",1)
o(m,"gh_","h0",1)
o(m,"gfY","fZ",1)
r(m=M.cO.prototype,"gae",0,0,null,["$1","$0"],["a8","bu"],0,0)
q(m,"gfw","fz",14)
q(m,"gfA","fB",14)
r(m=M.cU.prototype,"gae",0,0,null,["$1","$0"],["a8","bu"],0,0)
q(m,"geY","eZ",4)
q(m,"gf_","f0",4)
r(m=O.d6.prototype,"gel",0,0,null,["$1","$0"],["a2","em"],0,0)
r(m,"gfN",0,0,null,["$1","$0"],["cK","fO"],0,0)
q(m,"geR","eS",15)
q(m,"geT","eU",15)
r(X.df.prototype,"gcG",0,0,null,["$1","$0"],["a3","eX"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a0,null)
s(P.a0,[H.kx,J.a,J.Z,P.dZ,P.h,H.c0,P.fF,H.cV,H.iz,H.f0,H.il,P.bo,H.bQ,H.eg,P.aF,H.fM,H.fO,H.fH,P.em,P.dJ,P.dq,P.i0,P.dv,P.jG,P.jk,P.je,P.dY,P.r,P.jy,P.fV,P.eY,P.fC,P.jE,P.jD,P.ax,P.a7,P.aa,P.aW,P.ht,P.dn,P.dR,P.fu,P.fw,P.n,P.P,P.b6,P.k,P.Q,P.bD,P.iB,P.jn,W.f4,W.cm,W.H,W.dd,W.eb,W.jt,W.cW,W.aI,W.jj,W.eu,P.jp,P.er,P.jf,P.bz,T.ay,T.cX,T.b3,T.hC,T.hL,R.dp,R.dw,R.dx,R.ie,O.az,O.c1,E.eU,E.aC,E.hD,E.du,Z.dH,Z.dI,Z.bP,Z.bq,Z.bf,D.eX,D.bp,D.W,X.cM,X.d1,X.fJ,X.fS,X.bt,X.hh,X.ih,X.dE,D.fc,D.a8,D.hx,D.bx,V.V,V.ad,V.fl,V.d8,V.aG,V.a4,V.T,V.ba,V.di,V.R,V.A,V.cj,U.bY,U.dF,M.cU,M.as,A.cK,A.eM,A.a_,A.cR,A.dg,A.dm,A.h1,A.ce,A.cg,A.ch,A.dA,A.iu,F.aX,F.fo,F.c_,F.fL,F.c6,F.hM,F.hN,F.hO,F.hP,F.be,F.iN,F.iO,F.iR,F.iT,F.iU,F.iV,O.ds,O.d7,O.h2,T.ia,X.i4,X.kn,X.df,V.cN,V.hA,V.hQ])
s(J.a,[J.fG,J.d_,J.d0,J.b_,J.bZ,J.b0,H.c3,H.b5,W.f,W.eJ,W.bl,W.an,W.F,W.dL,W.ae,W.f9,W.fd,W.dN,W.cT,W.dP,W.ff,W.i,W.dS,W.aD,W.fA,W.dU,W.aE,W.fR,W.hb,W.e_,W.e0,W.aH,W.e1,W.e4,W.aJ,W.e8,W.ea,W.aL,W.ec,W.aM,W.eh,W.at,W.ek,W.id,W.aO,W.en,W.ij,W.iG,W.ev,W.ex,W.ez,W.eB,W.eD,P.b2,P.dW,P.b7,P.e6,P.hz,P.ei,P.bc,P.ep,P.eN,P.dK,P.dj,P.ee])
s(J.d0,[J.hu,J.bC,J.b1])
t(J.kw,J.b_)
s(J.bZ,[J.cZ,J.cY])
t(P.fQ,P.dZ)
s(P.fQ,[H.dC,W.j4,W.a1,P.fq])
t(H.l,H.dC)
s(P.h,[H.fi,H.fW,H.ck])
s(H.fi,[H.d4,H.fN])
s(P.fF,[H.fX,H.iZ])
t(H.fY,H.d4)
t(H.f1,H.f0)
s(P.bo,[H.hq,H.fI,H.iy,H.eW,H.hJ,P.de,P.ah,P.iA,P.iw,P.ca,P.f_,P.f7])
s(H.bQ,[H.kj,H.i5,H.k_,H.k0,H.k1,P.j0,P.j_,P.j1,P.j2,P.jx,P.jw,P.jP,P.jh,P.ji,P.fP,P.fU,P.fg,P.fh,P.iF,P.iC,P.iD,P.iE,P.jz,P.jA,P.jC,P.jB,P.jK,P.jJ,P.jL,P.jM,W.fj,W.hd,W.hf,W.hI,W.i_,W.j9,W.ho,W.hn,W.jl,W.jm,W.jv,W.jF,P.jr,P.jQ,P.fr,P.fs,P.eP,E.hE,E.hF,E.hG,E.ic,D.fm,D.fn,F.jH,F.jS,F.jU,F.jV,F.jW,F.ke,F.kf,F.ki,F.k3,F.jT,F.iX,F.iW,F.iP,F.iQ,O.h5,O.h6,O.h7,O.h8,O.h9,O.ha,T.ib,V.kd,V.hB,V.hS,V.hR,V.hT,V.k4,V.k5,V.k6,V.k7,V.k8,V.k9,V.ka,V.kb])
s(H.i5,[H.hY,H.bN])
t(P.fT,P.aF)
s(P.fT,[H.M,W.j3])
t(H.d9,H.b5)
s(H.d9,[H.co,H.cq])
t(H.cp,H.co)
t(H.c4,H.cp)
t(H.cr,H.cq)
t(H.da,H.cr)
s(H.da,[H.hi,H.hj,H.hk,H.hl,H.hm,H.db,H.c5])
t(P.jg,P.jG)
t(P.jd,P.jk)
t(P.es,P.fV)
t(P.dD,P.es)
s(P.eY,[P.eS,P.fk])
t(P.f2,P.i0)
s(P.f2,[P.eT,P.fB,P.iJ,P.iI])
t(P.iH,P.fk)
s(P.aa,[P.L,P.v])
s(P.ah,[P.bw,P.fD])
t(P.j6,P.bD)
s(W.f,[W.E,W.fp,W.c2,W.aK,W.cs,W.aN,W.au,W.cu,W.iY,W.cl,P.eQ,P.bk])
s(W.E,[W.S,W.aU])
s(W.S,[W.m,P.j])
s(W.m,[W.eK,W.eL,W.bm,W.bn,W.ai,W.ft,W.bX,W.hK,W.dr,W.i2,W.i3,W.cc])
t(W.f3,W.an)
t(W.bR,W.dL)
s(W.ae,[W.f5,W.f6])
t(W.dO,W.dN)
t(W.cS,W.dO)
t(W.dQ,W.dP)
t(W.fe,W.dQ)
t(W.ao,W.bl)
t(W.dT,W.dS)
t(W.bU,W.dT)
t(W.dV,W.dU)
t(W.bW,W.dV)
t(W.bd,W.i)
s(W.bd,[W.br,W.ar,W.by])
t(W.hc,W.e_)
t(W.he,W.e0)
t(W.e2,W.e1)
t(W.hg,W.e2)
t(W.e5,W.e4)
t(W.dc,W.e5)
t(W.e9,W.e8)
t(W.hw,W.e9)
t(W.hH,W.ea)
t(W.ct,W.cs)
t(W.hV,W.ct)
t(W.ed,W.ec)
t(W.hW,W.ed)
t(W.hZ,W.eh)
t(W.el,W.ek)
t(W.i6,W.el)
t(W.cv,W.cu)
t(W.i7,W.cv)
t(W.eo,W.en)
t(W.ii,W.eo)
t(W.bg,W.ar)
t(W.ew,W.ev)
t(W.j5,W.ew)
t(W.dM,W.cT)
t(W.ey,W.ex)
t(W.ja,W.ey)
t(W.eA,W.ez)
t(W.e3,W.eA)
t(W.eC,W.eB)
t(W.jo,W.eC)
t(W.eE,W.eD)
t(W.js,W.eE)
t(W.j7,W.j3)
t(W.j8,P.dq)
t(W.ju,W.eb)
t(P.jq,P.jp)
t(P.a9,P.jf)
t(P.dX,P.dW)
t(P.fK,P.dX)
t(P.e7,P.e6)
t(P.hr,P.e7)
t(P.c9,P.j)
t(P.ej,P.ei)
t(P.i1,P.ej)
t(P.eq,P.ep)
t(P.ik,P.eq)
t(P.eO,P.dK)
t(P.hs,P.bk)
t(P.ef,P.ee)
t(P.hX,P.ef)
s(T.cX,[T.a3,R.dz])
s(E.eU,[Z.cL,A.dk,T.dt])
s(D.W,[D.aY,D.aZ,D.x,X.hy])
s(X.hy,[X.d5,X.b4,X.dy])
s(O.az,[D.d2,U.bV,M.cO])
s(D.eX,[U.eZ,U.af])
t(U.cP,U.af)
s(A.dk,[A.fb,A.fZ])
s(A.dA,[A.dB,A.ir,A.is,A.it,A.ip,A.U,A.iq,A.K,A.cd,A.iv,A.cf,A.a5,A.bA,A.bB])
t(F.hU,F.fo)
t(F.io,F.fL)
t(F.iS,F.iT)
t(F.hp,F.iU)
s(O.ds,[O.fa,O.d6])
s(O.d7,[O.h_,O.h0,O.ap])
s(O.ap,[O.h3,O.h4])
t(T.i8,T.dt)
t(T.i9,T.i8)
s(X.i4,[X.eR,X.fv])
s(V.cN,[V.f8,V.fx,V.fz,V.hv])
u(H.dC,H.iz)
u(H.co,P.r)
u(H.cp,H.cV)
u(H.cq,P.r)
u(H.cr,H.cV)
u(P.dZ,P.r)
u(P.es,P.jy)
u(W.dL,W.f4)
u(W.dN,P.r)
u(W.dO,W.H)
u(W.dP,P.r)
u(W.dQ,W.H)
u(W.dS,P.r)
u(W.dT,W.H)
u(W.dU,P.r)
u(W.dV,W.H)
u(W.e_,P.aF)
u(W.e0,P.aF)
u(W.e1,P.r)
u(W.e2,W.H)
u(W.e4,P.r)
u(W.e5,W.H)
u(W.e8,P.r)
u(W.e9,W.H)
u(W.ea,P.aF)
u(W.cs,P.r)
u(W.ct,W.H)
u(W.ec,P.r)
u(W.ed,W.H)
u(W.eh,P.aF)
u(W.ek,P.r)
u(W.el,W.H)
u(W.cu,P.r)
u(W.cv,W.H)
u(W.en,P.r)
u(W.eo,W.H)
u(W.ev,P.r)
u(W.ew,W.H)
u(W.ex,P.r)
u(W.ey,W.H)
u(W.ez,P.r)
u(W.eA,W.H)
u(W.eB,P.r)
u(W.eC,W.H)
u(W.eD,P.r)
u(W.eE,W.H)
u(P.dW,P.r)
u(P.dX,W.H)
u(P.e6,P.r)
u(P.e7,W.H)
u(P.ei,P.r)
u(P.ej,W.H)
u(P.ep,P.r)
u(P.eq,W.H)
u(P.dK,P.aF)
u(P.ee,P.r)
u(P.ef,W.H)})()
var v={mangledGlobalNames:{v:"int",L:"double",aa:"num",k:"String",ax:"bool",b6:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.W]},{func:1,ret:-1,args:[D.W]},{func:1,ret:-1,args:[W.ar]},{func:1,ret:P.b6,args:[,,]},{func:1,ret:-1,args:[P.v,[P.h,E.aC]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.by]},{func:1,ret:P.L},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.br]},{func:1,ret:-1,args:[P.v,[P.h,D.a8]]},{func:1,ret:-1,args:[P.v,[P.h,U.af]]},{func:1,ret:-1,args:[P.v,[P.h,M.as]]},{func:1,ret:-1,args:[P.v,[P.h,V.aG]]},{func:1,ret:P.ax,args:[W.S,P.k,P.k,W.cm]},{func:1,ret:P.b6,args:[,]},{func:1,ret:P.bz,args:[,,]},{func:1,ret:-1,args:[W.bg]},{func:1,ret:P.ax,args:[[P.h,D.a8]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bm.prototype
C.i=W.bn.prototype
C.O=W.ai.prototype
C.R=J.a.prototype
C.b=J.b_.prototype
C.S=J.cY.prototype
C.c=J.cZ.prototype
C.j=J.d_.prototype
C.d=J.bZ.prototype
C.a=J.b0.prototype
C.T=J.b1.prototype
C.A=J.hu.prototype
C.B=P.dj.prototype
C.C=W.dr.prototype
C.q=J.bC.prototype
C.D=W.bg.prototype
C.E=W.cl.prototype
C.Z=new P.eT()
C.F=new P.eS()
C.t=function getTagFallback(o) {
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
C.u=function(hooks) { return hooks; }

C.M=new P.ht()
C.e=new P.iH()
C.N=new P.iJ()
C.f=new P.jg()
C.n=new P.aW(0)
C.P=new P.aW(5e6)
C.Q=new P.fC("element",!1,!1,!1)
C.v=H.c(u([127,2047,65535,1114111]),[P.v])
C.k=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.v])
C.U=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.k])
C.l=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.v])
C.m=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.v])
C.V=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.k])
C.w=H.c(u([]),[P.k])
C.W=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.v])
C.x=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.v])
C.h=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.v])
C.y=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.v])
C.X=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.v])
C.z=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.v])
C.o=H.c(u(["bind","if","ref","repeat","syntax"]),[P.k])
C.p=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.k])
C.Y=new H.f1(0,{},C.w,[P.k,P.k])})();(function staticFields(){$.am=0
$.bO=null
$.l9=null
$.m8=null
$.m2=null
$.mc=null
$.jX=null
$.k2=null
$.kW=null
$.bG=null
$.cy=null
$.cz=null
$.kQ=!1
$.aj=C.f
$.a6=[]
$.aB=null
$.kr=null
$.lf=null
$.le=null
$.cn=P.kz(P.k,P.fw)
$.lm=null
$.lq=null
$.b9=null
$.lw=null
$.lI=null
$.lL=null
$.lK=null
$.iK=null
$.iL=null
$.iM=null
$.lJ=null
$.lO=null
$.lp=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"p3","mh",function(){return H.m7("_$dart_dartClosure")})
u($,"p4","l0",function(){return H.m7("_$dart_js")})
u($,"p5","mi",function(){return H.av(H.im({
toString:function(){return"$receiver$"}}))})
u($,"p6","mj",function(){return H.av(H.im({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"p7","mk",function(){return H.av(H.im(null))})
u($,"p8","ml",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pb","mo",function(){return H.av(H.im(void 0))})
u($,"pc","mp",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pa","mn",function(){return H.av(H.lC(null))})
u($,"p9","mm",function(){return H.av(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pe","mr",function(){return H.av(H.lC(void 0))})
u($,"pd","mq",function(){return H.av(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"ps","l1",function(){return P.nC()})
u($,"pf","ms",function(){return P.ny()})
u($,"pt","mw",function(){return H.n7(H.bF(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.v])))})
u($,"pv","my",function(){return P.nl("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pw","mz",function(){return P.o0()})
u($,"pu","mx",function(){return P.li(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.k)})
u($,"pm","mv",function(){return Z.ag(0)})
u($,"pg","mt",function(){return Z.ag(511)})
u($,"po","al",function(){return Z.ag(1)})
u($,"pn","aS",function(){return Z.ag(2)})
u($,"pi","aR",function(){return Z.ag(4)})
u($,"pp","bi",function(){return Z.ag(8)})
u($,"pq","bj",function(){return Z.ag(16)})
u($,"pj","cF",function(){return Z.ag(32)})
u($,"pk","cG",function(){return Z.ag(64)})
u($,"pl","mu",function(){return Z.ag(96)})
u($,"pr","bM",function(){return Z.ag(128)})
u($,"ph","aQ",function(){return Z.ag(256)})
u($,"p2","mg",function(){return new V.fl(1e-9)})
u($,"p1","z",function(){return $.mg()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.c3,DataView:H.b5,ArrayBufferView:H.b5,Float32Array:H.c4,Float64Array:H.c4,Int16Array:H.hi,Int32Array:H.hj,Int8Array:H.hk,Uint16Array:H.hl,Uint32Array:H.hm,Uint8ClampedArray:H.db,CanvasPixelArray:H.db,Uint8Array:H.c5,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLBaseElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLInputElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,AccessibleNodeList:W.eJ,HTMLAnchorElement:W.eK,HTMLAreaElement:W.eL,Blob:W.bl,HTMLBodyElement:W.bm,HTMLCanvasElement:W.bn,CDATASection:W.aU,CharacterData:W.aU,Comment:W.aU,ProcessingInstruction:W.aU,Text:W.aU,CSSPerspective:W.f3,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.bR,MSStyleCSSProperties:W.bR,CSS2Properties:W.bR,CSSImageValue:W.ae,CSSKeywordValue:W.ae,CSSNumericValue:W.ae,CSSPositionValue:W.ae,CSSResourceValue:W.ae,CSSUnitValue:W.ae,CSSURLImageValue:W.ae,CSSStyleValue:W.ae,CSSMatrixComponent:W.an,CSSRotation:W.an,CSSScale:W.an,CSSSkew:W.an,CSSTranslation:W.an,CSSTransformComponent:W.an,CSSTransformValue:W.f5,CSSUnparsedValue:W.f6,DataTransferItemList:W.f9,HTMLDivElement:W.ai,DOMException:W.fd,ClientRectList:W.cS,DOMRectList:W.cS,DOMRectReadOnly:W.cT,DOMStringList:W.fe,DOMTokenList:W.ff,Element:W.S,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.ao,FileList:W.bU,FileWriter:W.fp,HTMLFormElement:W.ft,Gamepad:W.aD,History:W.fA,HTMLCollection:W.bW,HTMLFormControlsCollection:W.bW,HTMLOptionsCollection:W.bW,ImageData:W.aE,HTMLImageElement:W.bX,KeyboardEvent:W.br,Location:W.fR,MediaList:W.hb,MessagePort:W.c2,MIDIInputMap:W.hc,MIDIOutputMap:W.he,MimeType:W.aH,MimeTypeArray:W.hg,PointerEvent:W.ar,MouseEvent:W.ar,DragEvent:W.ar,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,Attr:W.E,DocumentType:W.E,Node:W.E,NodeList:W.dc,RadioNodeList:W.dc,Plugin:W.aJ,PluginArray:W.hw,RTCStatsReport:W.hH,HTMLSelectElement:W.hK,SourceBuffer:W.aK,SourceBufferList:W.hV,SpeechGrammar:W.aL,SpeechGrammarList:W.hW,SpeechRecognitionResult:W.aM,Storage:W.hZ,CSSStyleSheet:W.at,StyleSheet:W.at,HTMLTableElement:W.dr,HTMLTableRowElement:W.i2,HTMLTableSectionElement:W.i3,HTMLTemplateElement:W.cc,TextTrack:W.aN,TextTrackCue:W.au,VTTCue:W.au,TextTrackCueList:W.i6,TextTrackList:W.i7,TimeRanges:W.id,Touch:W.aO,TouchEvent:W.by,TouchList:W.ii,TrackDefaultList:W.ij,CompositionEvent:W.bd,FocusEvent:W.bd,TextEvent:W.bd,UIEvent:W.bd,URL:W.iG,VideoTrackList:W.iY,WheelEvent:W.bg,Window:W.cl,DOMWindow:W.cl,CSSRuleList:W.j5,ClientRect:W.dM,DOMRect:W.dM,GamepadList:W.ja,NamedNodeMap:W.e3,MozNamedAttrMap:W.e3,SpeechRecognitionResultList:W.jo,StyleSheetList:W.js,SVGLength:P.b2,SVGLengthList:P.fK,SVGNumber:P.b7,SVGNumberList:P.hr,SVGPointList:P.hz,SVGScriptElement:P.c9,SVGStringList:P.i1,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.bc,SVGTransformList:P.ik,AudioBuffer:P.eN,AudioParamMap:P.eO,AudioTrackList:P.eQ,AudioContext:P.bk,webkitAudioContext:P.bk,BaseAudioContext:P.bk,OfflineAudioContext:P.hs,WebGL2RenderingContext:P.dj,SQLResultSetRowList:P.hX})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.c4.$nativeSuperclassTag="ArrayBufferView"
H.cq.$nativeSuperclassTag="ArrayBufferView"
H.cr.$nativeSuperclassTag="ArrayBufferView"
H.da.$nativeSuperclassTag="ArrayBufferView"
W.cs.$nativeSuperclassTag="EventTarget"
W.ct.$nativeSuperclassTag="EventTarget"
W.cu.$nativeSuperclassTag="EventTarget"
W.cv.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(V.ma,[])
else V.ma([])})})()
//# sourceMappingURL=test.dart.js.map
