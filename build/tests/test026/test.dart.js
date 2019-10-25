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
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kI"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kI"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kI(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kp:function kp(){},
jR:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
fv:function(){return new P.c7("No element")},
mP:function(){return new P.c7("Too many elements")},
dh:function(a,b,c,d){if(c-b<=32)H.nj(a,b,c,d)
else H.ni(a,b,c,d)},
nj:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.b(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.b(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a_()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.b(a,q)
C.b.m(a,s,a[q])
s=q}C.b.m(a,s,t)}},
ni:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.c.a5(a4-a3+1,6),d=a3+e,c=a4-e,b=C.c.a5(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof k!=="number")return k.S()
if(k<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a_()
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
if(typeof g!=="number")return g.S()
if(g<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a_()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a_()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.S()
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
H.dh(a2,a3,o-2,a5)
H.dh(a2,n+2,a4,a5)
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
if(typeof k!=="number")return k.S()
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
break}}}H.dh(a2,o,n,a5)}else H.dh(a2,o,n,a5)},
l:function l(a){this.a=a},
fa:function fa(){},
d0:function d0(){},
bV:function bV(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fN:function fN(a,b,c){this.a=a
this.b=b
this.$ti=c},
fO:function fO(a,b){this.a=null
this.b=a
this.c=b},
fP:function fP(a,b,c){this.a=a
this.b=b
this.$ti=c},
cg:function cg(a,b,c){this.a=a
this.b=b
this.$ti=c},
iS:function iS(a,b){this.a=a
this.b=b},
cR:function cR(){},
ir:function ir(){},
dz:function dz(){},
mH:function(){throw H.d(P.x("Cannot modify unmodifiable Map"))},
eD:function(a){var u,t=H.oT(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oB:function(a){return v.types[a]},
m1:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.N(a).$iA},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a2(a)
if(typeof u!=="string")throw H.d(H.ak(a))
return u},
c4:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
na:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.b(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.X(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.C(s,q)|32)>t)return}return parseInt(a,b)},
c5:function(a){return H.n1(a)+H.lP(H.cy(a),0,null)},
n1:function(a){var u,t,s,r,q,p,o,n=J.N(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.Q||!!n.$iby){r=C.r(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.eD(t.length>1&&C.a.C(t,0)===36?C.a.a6(t,1):t)},
n2:function(){if(!!self.location)return self.location.href
return},
lk:function(a){var u,t,s,r,q=J.ac(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
nb:function(a){var u,t,s,r=H.c([],[P.v])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ak(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aN(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.d(H.ak(s))}return H.lk(r)},
ll:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ak(s))
if(s<0)throw H.d(H.ak(s))
if(s>65535)return H.nb(a)}return H.lk(a)},
nc:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bt:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aN(u,10))>>>0,56320|u&1023)}}throw H.d(P.X(a,0,1114111,null,null))},
bs:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
n9:function(a){var u=H.bs(a).getFullYear()+0
return u},
n7:function(a){var u=H.bs(a).getMonth()+1
return u},
n3:function(a){var u=H.bs(a).getDate()+0
return u},
n4:function(a){var u=H.bs(a).getHours()+0
return u},
n6:function(a){var u=H.bs(a).getMinutes()+0
return u},
n8:function(a){var u=H.bs(a).getSeconds()+0
return u},
n5:function(a){var u=H.bs(a).getMilliseconds()+0
return u},
w:function(a){throw H.d(H.ak(a))},
b:function(a,b){if(a==null)J.ac(a)
throw H.d(H.bF(a,b))},
bF:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ag(!0,b,s,null)
u=J.ac(a)
if(!(b<0)){if(typeof u!=="number")return H.w(u)
t=b>=u}else t=!0
if(t)return P.H(b,a,s,null,u)
return P.dc(b,s)},
ov:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bu(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bu(a,c,!0,b,"end",u)
return new P.ag(!0,b,"end",null)},
ak:function(a){return new P.ag(!0,a,null,null)},
oq:function(a){if(typeof a!=="number")throw H.d(H.ak(a))
return a},
d:function(a){var u
if(a==null)a=new P.d9()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.m6})
u.name=""}else u.toString=H.m6
return u},
m6:function(){return J.a2(this.dartException)},
t:function(a){throw H.d(a)},
p:function(a){throw H.d(P.ay(a))},
au:function(a){var u,t,s,r,q,p
a=H.m5(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.k])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ic(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
id:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lv:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lg:function(a,b){return new H.hh(a,b==null?null:b.method)},
kq:function(a,b){var u=b==null,t=u?null:b.method
return new H.fz(a,t,u?null:b.receiver)},
ab:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kb(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aN(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kq(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lg(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.ma()
q=$.mb()
p=$.mc()
o=$.md()
n=$.mg()
m=$.mh()
l=$.mf()
$.me()
k=$.mj()
j=$.mi()
i=r.a9(u)
if(i!=null)return f.$1(H.kq(u,i))
else{i=q.a9(u)
if(i!=null){i.method="call"
return f.$1(H.kq(u,i))}else{i=p.a9(u)
if(i==null){i=o.a9(u)
if(i==null){i=n.a9(u)
if(i==null){i=m.a9(u)
if(i==null){i=l.a9(u)
if(i==null){i=o.a9(u)
if(i==null){i=k.a9(u)
if(i==null){i=j.a9(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lg(u,i))}}return f.$1(new H.iq(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dj()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ag(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dj()
return a},
kL:function(a){var u
if(a==null)return new H.ec(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ec(a)},
oz:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
oH:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.u("Unsupported number of arguments for wrapped closure"))},
bE:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oH)
a.$identity=u
return u},
mG:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hQ().constructor.prototype):Object.create(new H.bJ(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.al
if(typeof t!=="number")return t.B()
$.al=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.l2(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mC(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.l2(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mC:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oB,a)
if(typeof a=="function")if(b)return a
else{u=c?H.l1:H.kf
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
mD:function(a,b,c,d){var u=H.kf
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
l2:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mF(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mD(t,!r,u,b)
if(t===0){r=$.al
if(typeof r!=="number")return r.B()
$.al=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bK
return new Function(r+H.e(q==null?$.bK=H.eQ("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.al
if(typeof r!=="number")return r.B()
$.al=r+1
o+=r
r="return function("+o+"){return this."
q=$.bK
return new Function(r+H.e(q==null?$.bK=H.eQ("self"):q)+"."+H.e(u)+"("+o+");}")()},
mE:function(a,b,c,d){var u=H.kf,t=H.l1
switch(b?-1:a){case 0:throw H.d(H.ng("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mF:function(a,b){var u,t,s,r,q,p,o,n=$.bK
if(n==null)n=$.bK=H.eQ("self")
u=$.l0
if(u==null)u=$.l0=H.eQ("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mE(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.al
if(typeof u!=="number")return u.B()
$.al=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.al
if(typeof u!=="number")return u.B()
$.al=u+1
return new Function(n+u+"}")()},
kI:function(a,b,c,d,e,f,g){return H.mG(a,b,c,d,!!e,!!f,g)},
kf:function(a){return a.a},
l1:function(a){return a.c},
eQ:function(a){var u,t,s,r=new H.bJ("self","target","receiver","name"),q=J.kn(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
oM:function(a,b){throw H.d(H.mB(a,H.eD(b.substring(2))))},
o:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else u=!0
if(u)return a
H.oM(a,b)},
ox:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mB:function(a,b){return new H.eR("CastError: "+P.kl(a)+": type '"+H.e(H.om(a))+"' is not a subtype of type '"+b+"'")},
om:function(a){var u,t=J.N(a)
if(!!t.$ibL){u=H.ox(t)
if(u!=null)return H.oN(u)
return"Closure"}return H.c5(a)},
oS:function(a){throw H.d(new P.f2(a))},
ng:function(a){return new H.hA(a)},
m_:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
cy:function(a){if(a==null)return
return a.$ti},
pr:function(a,b,c){return H.k8(a["$a"+H.e(c)],H.cy(b))},
oA:function(a,b,c,d){var u=H.k8(a["$a"+H.e(c)],H.cy(b))
return u==null?null:u[d]},
kK:function(a,b,c){var u=H.k8(a["$a"+H.e(b)],H.cy(a))
return u==null?null:u[c]},
cz:function(a,b){var u=H.cy(a)
return u==null?null:u[b]},
oN:function(a){return H.be(a,null)},
be:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.eD(a[0].name)+H.lP(a,1,b)
if(typeof a=="function")return H.eD(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.e(b[t])}if('func' in a)return H.nV(a,b)
if('futureOr' in a)return"FutureOr<"+H.be("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nV:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.k])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.a.B(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a0)p+=" extends "+H.be(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.be(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.be(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.be(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oy(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.be(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lP:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.Q("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.be(p,c)}return"<"+u.h(0)+">"},
k8:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pp:function(a,b,c){return a.apply(b,H.k8(J.N(b)["$a"+H.e(c)],H.cy(b)))},
pq:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oJ:function(a){var u,t,s,r,q=$.m0.$1(a),p=$.jP[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jV[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.lU.$2(a,q)
if(q!=null){p=$.jP[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jV[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.k4(u)
$.jP[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jV[q]=u
return u}if(s==="-"){r=H.k4(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.m3(a,u)
if(s==="*")throw H.d(P.ip(q))
if(v.leafTags[q]===true){r=H.k4(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.m3(a,u)},
m3:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kN(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
k4:function(a){return J.kN(a,!1,null,!!a.$iA)},
oK:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.k4(u)
else return J.kN(u,c,null,null)},
oF:function(){if(!0===$.kM)return
$.kM=!0
H.oG()},
oG:function(){var u,t,s,r,q,p,o,n
$.jP=Object.create(null)
$.jV=Object.create(null)
H.oE()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.m4.$1(q)
if(p!=null){o=H.oK(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oE:function(){var u,t,s,r,q,p,o=C.F()
o=H.bD(C.G,H.bD(C.H,H.bD(C.t,H.bD(C.t,H.bD(C.I,H.bD(C.J,H.bD(C.K(C.r),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.m0=new H.jS(r)
$.lU=new H.jT(q)
$.m4=new H.jU(p)},
bD:function(a,b){return a(b)||b},
mR:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(P.O("Illegal RegExp pattern ("+String(p)+")",a,null))},
oQ:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
ow:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
m5:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kQ:function(a,b,c){var u=H.oR(a,b,c)
return u},
oR:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.m5(b),'g'),H.ow(c))},
eW:function eW(){},
eX:function eX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ic:function ic(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hh:function hh(a,b){this.a=a
this.b=b},
fz:function fz(a,b,c){this.a=a
this.b=b
this.c=c},
iq:function iq(a){this.a=a},
kb:function kb(a){this.a=a},
ec:function ec(a){this.a=a
this.b=null},
bL:function bL(){},
hY:function hY(){},
hQ:function hQ(){},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eR:function eR(a){this.a=a},
hA:function hA(a){this.a=a},
M:function M(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fD:function fD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fE:function fE(a,b){this.a=a
this.$ti=b},
fF:function fF(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jS:function jS(a){this.a=a},
jT:function jT(a){this.a=a},
jU:function jU(a){this.a=a},
fy:function fy(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bB:function(a){return a},
n0:function(a){return new Int8Array(a)},
av:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bF(b,a))},
nT:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.ov(a,b,c))
return b},
c_:function c_(){},
b4:function b4(){},
d4:function d4(){},
c0:function c0(){},
d5:function d5(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(){},
d6:function d6(){},
c1:function c1(){},
ck:function ck(){},
cl:function cl(){},
cm:function cm(){},
cn:function cn(){},
oy:function(a){return J.l9(a?Object.keys(a):[],null)},
oT:function(a){return v.mangledGlobalNames[a]},
oL:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kN:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jQ:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kM==null){H.oF()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.ip("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kS()]
if(r!=null)return r
r=H.oJ(a)
if(r!=null)return r
if(typeof a=="function")return C.S
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.kS(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
mQ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.kZ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.X(a,0,4294967295,"length",null))
return J.l9(new Array(a),b)},
l9:function(a,b){return J.kn(H.c(a,[b]))},
kn:function(a){a.fixed$length=Array
return a},
N:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cV.prototype
return J.cU.prototype}if(typeof a=="string")return J.b_.prototype
if(a==null)return J.cW.prototype
if(typeof a=="boolean")return J.fx.prototype
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.a0)return a
return J.jQ(a)},
cw:function(a){if(typeof a=="string")return J.b_.prototype
if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.a0)return a
return J.jQ(a)},
eB:function(a){if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.a0)return a
return J.jQ(a)},
lZ:function(a){if(typeof a=="number")return J.bT.prototype
if(typeof a=="string")return J.b_.prototype
if(a==null)return a
if(!(a instanceof P.a0))return J.by.prototype
return a},
cx:function(a){if(typeof a=="string")return J.b_.prototype
if(a==null)return a
if(!(a instanceof P.a0))return J.by.prototype
return a},
bH:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.a0)return a
return J.jQ(a)},
C:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).p(a,b)},
kU:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lZ(a).A(a,b)},
cC:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m1(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cw(a).i(a,b)},
kd:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.m1(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eB(a).m(a,b,c)},
ms:function(a,b){return J.cx(a).C(a,b)},
mt:function(a,b,c){return J.bH(a).fE(a,b,c)},
mu:function(a,b,c,d){return J.bH(a).fY(a,b,c,d)},
mv:function(a,b){return J.cx(a).W(a,b)},
ke:function(a,b){return J.lZ(a).hc(a,b)},
eE:function(a,b){return J.eB(a).H(a,b)},
mw:function(a,b,c,d){return J.bH(a).ht(a,b,c,d)},
kV:function(a,b){return J.eB(a).F(a,b)},
mx:function(a){return J.bH(a).gh7(a)},
kW:function(a){return J.bH(a).gbQ(a)},
cD:function(a){return J.N(a).gG(a)},
aU:function(a){return J.eB(a).gV(a)},
ac:function(a){return J.cw(a).gl(a)},
kX:function(a){return J.eB(a).i_(a)},
my:function(a,b){return J.bH(a).i3(a,b)},
mz:function(a,b,c){return J.cx(a).q(a,b,c)},
mA:function(a){return J.cx(a).ic(a)},
a2:function(a){return J.N(a).h(a)},
a:function a(){},
fx:function fx(){},
cW:function cW(){},
cX:function cX(){},
hl:function hl(){},
by:function by(){},
b0:function b0(){},
aZ:function aZ(a){this.$ti=a},
ko:function ko(a){this.$ti=a},
a6:function a6(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bT:function bT(){},
cV:function cV(){},
cU:function cU(){},
b_:function b_(){}},P={
nv:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.on()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bE(new P.iU(s),1)).observe(u,{childList:true})
return new P.iT(s,u,t)}else if(self.setImmediate!=null)return P.oo()
return P.op()},
nw:function(a){self.scheduleImmediate(H.bE(new P.iV(a),0))},
nx:function(a){self.setImmediate(H.bE(new P.iW(a),0))},
ny:function(a){P.kv(C.m,a)},
kv:function(a,b){var u=C.c.a5(a.a,1000)
return P.nD(u<0?0:u,b)},
lu:function(a,b){var u=C.c.a5(a.a,1000)
return P.nE(u<0?0:u,b)},
nD:function(a,b){var u=new P.ei()
u.eh(a,b)
return u},
nE:function(a,b){var u=new P.ei()
u.ei(a,b)
return u},
og:function(){var u,t
for(;u=$.bC,u!=null;){$.cv=null
t=u.b
$.bC=t
if(t==null)$.cu=null
u.a.$0()}},
ol:function(){$.kG=!0
try{P.og()}finally{$.cv=null
$.kG=!1
if($.bC!=null)$.kT().$1(P.lV())}},
oj:function(a){var u=new P.dF(a)
if($.bC==null){$.bC=$.cu=u
if(!$.kG)$.kT().$1(P.lV())}else $.cu=$.cu.b=u},
ok:function(a){var u,t,s=$.bC
if(s==null){P.oj(a)
$.cv=$.cu
return}u=new P.dF(a)
t=$.cv
if(t==null){u.b=s
$.bC=$.cv=u}else{u.b=t.b
$.cv=t.b=u
if(u.b==null)$.cu=u}},
lt:function(a,b){var u=$.aj
if(u===C.f)return P.kv(a,b)
return P.kv(a,u.h8(b))},
nm:function(a,b){var u=$.aj
if(u===C.f)return P.lu(a,b)
return P.lu(a,u.cV(b,P.ds))},
lQ:function(a,b,c,d,e){var u={}
u.a=d
P.ok(new P.jI(u,e))},
oh:function(a,b,c,d){var u,t=$.aj
if(t===c)return d.$0()
$.aj=c
u=t
try{t=d.$0()
return t}finally{$.aj=u}},
oi:function(a,b,c,d,e){var u,t=$.aj
if(t===c)return d.$1(e)
$.aj=c
u=t
try{t=d.$1(e)
return t}finally{$.aj=u}},
iU:function iU(a){this.a=a},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
iV:function iV(a){this.a=a},
iW:function iW(a){this.a=a},
ei:function ei(){this.c=0},
jq:function jq(a,b){this.a=a
this.b=b},
jp:function jp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dF:function dF(a){this.a=a
this.b=null},
dm:function dm(){},
hT:function hT(){},
ds:function ds(){},
jz:function jz(){},
jI:function jI(a,b){this.a=a
this.b=b},
j9:function j9(){},
ja:function ja(a,b){this.a=a
this.b=b},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
mT:function(a,b){return new H.M([a,b])},
kr:function(a,b){return new H.M([a,b])},
mV:function(a){return H.oz(a,new H.M([null,null]))},
d_:function(a){return new P.j6([a])},
kB:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nC:function(a,b){var u=new P.dU(a,b)
u.c=a.e
return u},
mO:function(a,b,c){var u,t
if(P.kH(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.k])
$.a5.push(a)
try{P.nW(a,u)}finally{if(0>=$.a5.length)return H.b($.a5,-1)
$.a5.pop()}t=P.lr(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
km:function(a,b,c){var u,t
if(P.kH(a))return b+"..."+c
u=new P.Q(b)
$.a5.push(a)
try{t=u
t.a=P.lr(t.a,a,", ")}finally{if(0>=$.a5.length)return H.b($.a5,-1)
$.a5.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kH:function(a){var u,t
for(u=$.a5.length,t=0;t<u;++t)if(a===$.a5[t])return!0
return!1},
nW:function(a,b){var u,t,s,r,q,p,o,n=a.gV(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.w())return
u=H.e(n.gJ(n))
b.push(u)
m+=u.length+2;++l}if(!n.w()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gJ(n);++l
if(!n.w()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gJ(n);++l
for(;n.w();r=q,q=p){p=n.gJ(n);++l
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
mU:function(a,b,c){var u=P.mT(b,c)
a.F(0,new P.fG(u))
return u},
la:function(a,b){var u,t,s=P.d_(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t)s.n(0,a[t])
return s},
ks:function(a){var u,t={}
if(P.kH(a))return"{...}"
u=new P.Q("")
try{$.a5.push(a)
u.a+="{"
t.a=!0
J.kV(a,new P.fL(t,u))
u.a+="}"}finally{if(0>=$.a5.length)return H.b($.a5,-1)
$.a5.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
j6:function j6(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
j7:function j7(a){this.a=a
this.c=this.b=null},
dU:function dU(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fG:function fG(a){this.a=a},
fH:function fH(){},
r:function r(){},
fK:function fK(){},
fL:function fL(a,b){this.a=a
this.b=b},
aD:function aD(){},
jr:function jr(){},
fM:function fM(){},
dA:function dA(a,b){this.a=a
this.$ti=b},
jd:function jd(){},
dV:function dV(){},
eo:function eo(){},
np:function(a,b,c,d){if(b instanceof Uint8Array)return P.nq(!1,b,c,d)
return},
nq:function(a,b,c,d){var u,t,s=$.mk()
if(s==null)return
u=0===c
if(u&&!0)return P.ky(s,b)
t=b.length
d=P.b9(c,d,t)
if(u&&d===t)return P.ky(s,b)
return P.ky(s,b.subarray(c,d))},
ky:function(a,b){if(P.ns(b))return
return P.nt(a,b)},
nt:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ab(t)}return},
ns:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nr:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ab(t)}return},
lS:function(a,b,c){var u,t,s
for(u=J.cw(a),t=b;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.ae()
if((s&127)!==s)return t-b}return c-b},
l_:function(a,b,c,d,e,f){if(C.c.b5(f,4)!==0)throw H.d(P.O("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.O("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.O("Invalid base64 padding, more than two '=' characters",a,b))},
eN:function eN(){},
eO:function eO(){},
eT:function eT(){},
eY:function eY(){},
fc:function fc(){},
ft:function ft(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fs:function fs(a){this.a=a},
iz:function iz(){},
iB:function iB(){},
jx:function jx(a){this.b=0
this.c=a},
iA:function iA(a){this.a=a},
jw:function jw(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eC:function(a,b,c){var u=H.na(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.O(a,null,null))},
mL:function(a){if(a instanceof H.bL)return a.h(0)
return"Instance of '"+H.e(H.c5(a))+"'"},
mW:function(a,b,c){var u,t,s=J.mQ(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
lb:function(a,b,c){var u,t=H.c([],[c])
for(u=J.aU(a);u.w();)t.push(u.gJ(u))
if(b)return t
return J.kn(t)},
c8:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.b9(b,c,u)
return H.ll(b>0||c<u?C.b.e0(a,b,c):a)}if(!!J.N(a).$ic1)return H.nc(a,b,P.b9(b,c,a.length))
return P.nk(a,b,c)},
nk:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.d(P.X(b,0,J.ac(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.X(c,b,J.ac(a),q,q))
t=J.aU(a)
for(s=0;s<b;++s)if(!t.w())throw H.d(P.X(b,0,s,q,q))
r=[]
if(u)for(;t.w();)r.push(t.gJ(t))
else for(s=b;s<c;++s){if(!t.w())throw H.d(P.X(c,b,s,q,q))
r.push(t.gJ(t))}return H.ll(r)},
ne:function(a){return new H.fy(a,H.mR(a,!1,!0,!1,!1,!1))},
lr:function(a,b,c){var u=J.aU(b)
if(!u.w())return a
if(c.length===0){do a+=H.e(u.gJ(u))
while(u.w())}else{a+=H.e(u.gJ(u))
for(;u.w();)a=a+c+H.e(u.gJ(u))}return a},
lx:function(){var u=H.n2()
if(u!=null)return P.no(u)
throw H.d(P.x("'Uri.base' is not supported"))},
ep:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mq().b
if(typeof b!=="string")H.t(H.ak(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghs().bR(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bt(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mI:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mJ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cM:function(a){if(a>=10)return""+a
return"0"+a},
l5:function(a){return new P.aX(1000*a)},
kl:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a2(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mL(a)},
cE:function(a){return new P.ag(!1,null,null,a)},
kZ:function(a,b,c){return new P.ag(!0,a,b,c)},
dc:function(a,b){return new P.bu(null,null,!0,a,b,"Value not in range")},
X:function(a,b,c,d,e){return new P.bu(b,c,!0,a,d,"Invalid value")},
b9:function(a,b,c){if(0>a||a>c)throw H.d(P.X(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.X(b,a,c,"end",null))
return b}return c},
lm:function(a,b){if(typeof a!=="number")return a.S()
if(a<0)throw H.d(P.X(a,0,null,b,null))},
H:function(a,b,c,d,e){var u=e==null?J.ac(b):e
return new P.fu(u,!0,a,c,"Index out of range")},
x:function(a){return new P.is(a)},
ip:function(a){return new P.io(a)},
lq:function(a){return new P.c7(a)},
ay:function(a){return new P.eV(a)},
u:function(a){return new P.dN(a)},
O:function(a,b,c){return new P.fm(a,b,c)},
mX:function(a,b,c){var u,t,s=H.c([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.b(s,u)
s[u]=t}return s},
kP:function(a){H.oL(a)},
no:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.C(a,4)^58)*3|C.a.C(a,0)^100|C.a.C(a,1)^97|C.a.C(a,2)^116|C.a.C(a,3)^97)>>>0
if(u===0)return P.lw(e<e?C.a.q(a,0,e):a,5,f).gdR()
else if(u===32)return P.lw(C.a.q(a,5,e),0,f).gdR()}t=new Array(8)
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
if(P.lR(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.ih()
if(r>=0)if(P.lR(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.B()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.S()
if(typeof n!=="number")return H.w(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.a.a4(a,"..",o)))j=n>o+2&&C.a.a4(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a4(a,"file",0)){if(q<=0){if(!C.a.a4(a,"/",o)){i="file:///"
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
n=h}k="file"}else if(C.a.a4(a,"http",0)){if(t&&p+3===o&&C.a.a4(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aR(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a4(a,"https",0)){if(t&&p+4===o&&C.a.a4(a,"443",p+1)){g=o-4
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
m-=0}return new P.jg(a,r,q,p,o,n,m,k)}return P.nF(a,0,e,r,q,p,o,n,m,k)},
lz:function(a){var u=P.k
return C.b.hy(H.c(a.split("&"),[u]),P.kr(u,u),new P.ix(C.e))},
nn:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iu(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.W(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eC(C.a.q(a,s,t),n,n)
if(typeof p!=="number")return p.a_()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.b(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eC(C.a.q(a,s,c),n,n)
if(typeof p!=="number")return p.a_()
if(p>255)k.$2(l,s)
if(r>=u)return H.b(j,r)
j[r]=p
return j},
ly:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iv(a),d=new P.iw(e,a)
if(a.length<2)e.$1("address is too short")
u=H.c([],[P.v])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.W(a,t)
if(p===58){if(t===b){++t
if(C.a.W(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gar(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.nn(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.b(l,i)
l[i]=0
f=i+1
if(f>=k)return H.b(l,f)
l[f]=0
i+=2}else{f=C.c.aN(h,8)
if(i<0||i>=k)return H.b(l,i)
l[i]=f
f=i+1
if(f>=k)return H.b(l,f)
l[f]=h&255
i+=2}}return l},
nF:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nN(a,b,d)
else{if(d===b)P.bA(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nO(a,u,e-1):""
s=P.nK(a,e,f,!1)
if(typeof f!=="number")return f.B()
r=f+1
if(typeof g!=="number")return H.w(g)
q=r<g?P.nM(P.eC(C.a.q(a,r,g),new P.js(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nL(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.S()
o=h<i?P.kD(a,h+1,i,n):n
return new P.bz(j,t,s,q,p,o,i<c?P.nJ(a,i+1,c):n)},
lJ:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bA:function(a,b,c){throw H.d(P.O(c,a,b))},
nM:function(a,b){if(a!=null&&a===P.lJ(b))return
return a},
nK:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.W(a,b)===91){if(typeof c!=="number")return c.P()
u=c-1
if(C.a.W(a,u)!==93)P.bA(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nH(a,t,u)
if(typeof s!=="number")return s.S()
if(s<u){r=s+1
q=P.lO(a,C.a.a4(a,"25",r)?s+3:r,u,"%25")}else q=""
P.ly(a,t,s)
return C.a.q(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.w(c)
p=b
for(;p<c;++p)if(C.a.W(a,p)===58){s=C.a.bg(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lO(a,C.a.a4(a,"25",r)?s+3:r,c,"%25")}else q=""
P.ly(a,b,s)
return"["+C.a.q(a,b,s)+q+"]"}return P.nQ(a,b,c)},
nH:function(a,b,c){var u,t=C.a.bg(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.w(c)
u=t<c}else u=!1
return u?t:c},
lO:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.Q(d):null
if(typeof c!=="number")return H.w(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.W(a,u)
if(r===37){q=P.kE(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.Q("")
o=l.a+=C.a.q(a,t,u)
if(p)q=C.a.q(a,u,u+3)
else if(q==="%")P.bA(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.Q("")
if(t<u){l.a+=C.a.q(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.W(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.Q("")
l.a+=C.a.q(a,t,u)
l.a+=P.kC(r)
u+=m
t=u}}}if(l==null)return C.a.q(a,b,c)
if(t<c)l.a+=C.a.q(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
nQ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.w(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.W(a,u)
if(q===37){p=P.kE(a,u,!0)
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
if(o>=8)return H.b(C.j,o)
o=(C.j[o]&1<<(q&15))!==0}else o=!1
if(o)P.bA(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.W(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.Q("")
n=C.a.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kC(q)
u+=l
t=u}}}}if(s==null)return C.a.q(a,b,c)
if(t<c){n=C.a.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nN:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lL(C.a.C(a,b)))P.bA(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.C(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.b(C.l,r)
r=(C.l[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bA(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.q(a,b,c)
return P.nG(t?a.toLowerCase():a)},
nG:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nO:function(a,b,c){return P.cs(a,b,c,C.V,!1)},
nL:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cs(a,b,c,C.z,!0):C.u.iw(d,new P.jt(),P.k).k(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a2(u,"/"))u="/"+u
return P.nP(u,e,f)},
nP:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a2(a,"/"))return P.nR(a,!u||c)
return P.nS(a)},
kD:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.d(P.cE("Both query and queryParameters specified"))
return P.cs(a,b,c,C.k,!0)}if(d==null)return
u=new P.Q("")
t.a=""
d.F(0,new P.ju(new P.jv(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nJ:function(a,b,c){return P.cs(a,b,c,C.k,!0)},
kE:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.W(a,b+1)
t=C.a.W(a,p)
s=H.jR(u)
r=H.jR(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aN(q,4)
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bt(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.q(a,b,b+3).toUpperCase()
return},
kC:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
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
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.fQ(a,6*r)&63|s
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
q+=3}}return P.c8(t,0,null)},
cs:function(a,b,c,d,e){var u=P.lN(a,b,c,d,e)
return u==null?C.a.q(a,b,c):u},
lN:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.S()
if(typeof c!=="number")return H.w(c)
if(!(o<c))break
c$0:{u=C.a.W(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.b(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kE(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.b(C.j,t)
t=(C.j[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bA(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.W(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kC(u)}}if(m==null)m=new P.Q("")
m.a+=C.a.q(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.w(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.S()
if(n<c)m.a+=C.a.q(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lM:function(a){if(C.a.a2(a,"."))return!0
return C.a.dl(a,"/.")!==-1},
nS:function(a){var u,t,s,r,q,p,o
if(!P.lM(a))return a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.C(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.b(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.k(u,"/")},
nR:function(a,b){var u,t,s,r,q,p
if(!P.lM(a))return!b?P.lK(a):a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gar(u)!==".."){if(0>=u.length)return H.b(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.b(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gar(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.b(u,0)
t=P.lK(u[0])
if(0>=u.length)return H.b(u,0)
u[0]=t}return C.b.k(u,"/")},
lK:function(a){var u,t,s,r=a.length
if(r>=2&&P.lL(J.ms(a,0)))for(u=1;u<r;++u){t=C.a.C(a,u)
if(t===58)return C.a.q(a,0,u)+"%3A"+C.a.a6(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.b(C.l,s)
s=(C.l[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nI:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.C(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.cE("Invalid URL encoding"))}}return u},
kF:function(a,b,c,d,e){var u,t,s,r,q=b
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
if(t>127)throw H.d(P.cE("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.cE("Truncated URI"))
r.push(P.nI(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iA(!1).bR(r)},
lL:function(a){var u=a|32
return 97<=u&&u<=122},
lw:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.v])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.C(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.O(m,a,t))}}if(s<0&&t>b)throw H.d(P.O(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.C(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gar(l)
if(r!==44||t!==p+7||!C.a.a4(a,"base64",p+1))throw H.d(P.O("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.E.hJ(0,a,o,u)
else{n=P.lN(a,o,u,C.k,!0)
if(n!=null)a=C.a.aR(a,o,u,n)}return new P.it(a,l,c)},
nU:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.mX(22,new P.jD(),P.bw),n=new P.jC(o),m=new P.jE(),l=new P.jF(),k=n.$2(0,225)
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
lR:function(a,b,c,d,e){var u,t,s,r,q,p=$.mr()
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
aw:function aw(){},
a7:function a7(a,b){this.a=a
this.b=b},
K:function K(){},
aX:function aX(a){this.a=a},
f8:function f8(){},
f9:function f9(){},
bl:function bl(){},
d9:function d9(){},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bu:function bu(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fu:function fu(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
is:function is(a){this.a=a},
io:function io(a){this.a=a},
c7:function c7(a){this.a=a},
eV:function eV(a){this.a=a},
hk:function hk(){},
dj:function dj(){},
f2:function f2(a){this.a=a},
dN:function dN(a){this.a=a},
fm:function fm(a,b,c){this.a=a
this.b=b
this.c=c},
fo:function fo(){},
v:function v(){},
i:function i(){},
fw:function fw(){},
n:function n(){},
P:function P(){},
b5:function b5(){},
aa:function aa(){},
a0:function a0(){},
k:function k(){},
Q:function Q(a){this.a=a},
ix:function ix(a){this.a=a},
iu:function iu(a){this.a=a},
iv:function iv(a){this.a=a},
iw:function iw(a,b){this.a=a
this.b=b},
bz:function bz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
js:function js(a,b){this.a=a
this.b=b},
jt:function jt(){},
jv:function jv(a,b){this.a=a
this.b=b},
ju:function ju(a){this.a=a},
it:function it(a,b,c){this.a=a
this.b=b
this.c=c},
jD:function jD(){},
jC:function jC(a){this.a=a},
jE:function jE(){},
jF:function jF(){},
jg:function jg(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
j_:function j_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
ot:function(a){var u,t=J.N(a)
if(!!t.$iaC){u=t.gcZ(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.en(a.data,a.height,a.width)},
os:function(a){if(a instanceof P.en)return{data:a.a,height:a.b,width:a.c}
return a},
aO:function(a){var u,t,s,r,q
if(a==null)return
u=P.kr(P.k,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
or:function(a){var u={}
a.F(0,new P.jJ(u))
return u},
ji:function ji(){},
jk:function jk(a,b){this.a=a
this.b=b},
en:function en(a,b,c){this.a=a
this.b=b
this.c=c},
jJ:function jJ(a){this.a=a},
jj:function jj(a,b){this.a=a
this.b=b},
fi:function fi(a,b){this.a=a
this.b=b},
fj:function fj(){},
fk:function fk(){},
j5:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nB:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
j8:function j8(){},
a9:function a9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b1:function b1(){},
fB:function fB(){},
b6:function b6(){},
hi:function hi(){},
hq:function hq(){},
c6:function c6(){},
hU:function hU(){},
j:function j(){},
ba:function ba(){},
ib:function ib(){},
dS:function dS(){},
dT:function dT(){},
e2:function e2(){},
e3:function e3(){},
ee:function ee(){},
ef:function ef(){},
el:function el(){},
em:function em(){},
bw:function bw(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(a){this.a=a},
eM:function eM(){},
bg:function bg(){},
hj:function hj(){},
dG:function dG(){},
de:function de(){},
hP:function hP(){},
ea:function ea(){},
eb:function eb(){}},W={
kY:function(){var u=document.createElement("a")
return u},
kh:function(){var u=document.createElement("canvas")
return u},
mK:function(a,b,c){var u=document.body,t=(u&&C.q).a8(u,a,b,c)
t.toString
u=new H.cg(new W.a1(t),new W.fb(),[W.E])
return u.gaI(u)},
kj:function(a){return"wheel"},
bN:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bH(a)
t=u.gdM(a)
if(typeof t==="string")r=u.gdM(a)}catch(s){H.ab(s)}return r},
mN:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.ab(u)}return s},
j4:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lH:function(a,b,c,d){var u=W.j4(W.j4(W.j4(W.j4(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
V:function(a,b,c,d){var u=W.lT(new W.j2(c),W.h)
if(u!=null&&!0)J.mu(a,b,u,!1)
return new W.j1(a,b,u,!1)},
lG:function(a){var u=W.kY(),t=window.location
u=new W.ci(new W.jc(u,t))
u.ed(a)
return u},
nz:function(a,b,c,d){return!0},
nA:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
lI:function(){var u=P.k,t=P.la(C.n,u),s=H.c(["TEMPLATE"],[u])
t=new W.jn(t,P.d_(u),P.d_(u),P.d_(u),null)
t.eg(null,new H.fP(C.n,new W.jo(),[H.cz(C.n,0),u]),s,null)
return t},
lT:function(a,b){var u=$.aj
if(u===C.f)return a
return u.cV(a,b)},
m:function m(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
bh:function bh(){},
bi:function bi(){},
bj:function bj(){},
aV:function aV(){},
eZ:function eZ(){},
F:function F(){},
bM:function bM(){},
f_:function f_(){},
ad:function ad(){},
an:function an(){},
f0:function f0(){},
f1:function f1(){},
f4:function f4(){},
ah:function ah(){},
f5:function f5(){},
cO:function cO(){},
cP:function cP(){},
f6:function f6(){},
f7:function f7(){},
iY:function iY(a,b){this.a=a
this.b=b},
S:function S(){},
fb:function fb(){},
h:function h(){},
f:function f(){},
ao:function ao(){},
bP:function bP(){},
fh:function fh(){},
fl:function fl(){},
aB:function aB(){},
fr:function fr(){},
bR:function bR(){},
aC:function aC(){},
bS:function bS(){},
bq:function bq(){},
fI:function fI(){},
h2:function h2(){},
bZ:function bZ(){},
h3:function h3(){},
h4:function h4(a){this.a=a},
h5:function h5(){},
h6:function h6(a){this.a=a},
aF:function aF(){},
h7:function h7(){},
ar:function ar(){},
a1:function a1(a){this.a=a},
E:function E(){},
d7:function d7(){},
aH:function aH(){},
hn:function hn(){},
hy:function hy(){},
hz:function hz(a){this.a=a},
hB:function hB(){},
aI:function aI(){},
hM:function hM(){},
aJ:function aJ(){},
hN:function hN(){},
aK:function aK(){},
hR:function hR(){},
hS:function hS(a){this.a=a},
as:function as(){},
dn:function dn(){},
hV:function hV(){},
hW:function hW(){},
c9:function c9(){},
aL:function aL(){},
at:function at(){},
hZ:function hZ(){},
i_:function i_(){},
i5:function i5(){},
aM:function aM(){},
bv:function bv(){},
i9:function i9(){},
ia:function ia(){},
bb:function bb(){},
iy:function iy(){},
iQ:function iQ(){},
bd:function bd(){},
ch:function ch(){},
iZ:function iZ(){},
dI:function dI(){},
j3:function j3(){},
e_:function e_(){},
jh:function jh(){},
jl:function jl(){},
iX:function iX(){},
j0:function j0(a){this.a=a},
j1:function j1(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
j2:function j2(a){this.a=a},
ci:function ci(a){this.a=a},
G:function G(){},
d8:function d8(a){this.a=a},
hf:function hf(a){this.a=a},
he:function he(a,b,c){this.a=a
this.b=b
this.c=c},
e7:function e7(){},
je:function je(){},
jf:function jf(){},
jn:function jn(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jo:function jo(){},
jm:function jm(){},
cS:function cS(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aG:function aG(){},
jc:function jc(a,b){this.a=a
this.b=b},
eq:function eq(a){this.a=a},
jy:function jy(a){this.a=a},
dH:function dH(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e0:function e0(){},
e1:function e1(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
co:function co(){},
cp:function cp(){},
e8:function e8(){},
e9:function e9(){},
ed:function ed(){},
eg:function eg(){},
eh:function eh(){},
cq:function cq(){},
cr:function cr(){},
ej:function ej(){},
ek:function ek(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){}},T={
I:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.u("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.C(a,0)
t=C.a.C(b,0)
s=new T.ht()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
q:function(a){var u=new T.hC()
u.e9(a)
return u},
ax:function ax(){},
cT:function cT(){},
b2:function b2(){},
a3:function a3(){this.a=null},
ht:function ht(){this.b=this.a=null},
hC:function hC(){this.a=null},
dq:function dq(){},
i0:function i0(){},
i1:function i1(){var _=this
_.y=_.d=_.c=_.b=_.a=null},
i2:function i2(a){var _=this
_.a=a
_.e=_.d=_.b=null},
i3:function i3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={
i7:function(){var u=new R.i6(),t=P.k
u.a=new H.M([t,R.dk])
u.b=new H.M([t,R.du])
return u},
dk:function dk(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dt:function dt(a,b,c){this.a=a
this.b=b
this.c=c},
du:function du(a){this.b=a
this.c=null},
i6:function i6(){this.c=this.b=this.a=null},
dw:function dw(a){this.b=a
this.a=this.c=null}},O={
ki:function(a){var u=new O.aW([a])
u.br(a)
return u},
aW:function aW(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bY:function bY(){this.b=this.a=null},
d2:function d2(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fX:function fX(a,b){this.a=a
this.b=b},
fY:function fY(){},
fZ:function fZ(a,b){this.a=a
this.b=b},
h_:function h_(){},
h0:function h0(a,b){this.a=a
this.b=b},
h1:function h1(){},
fR:function fR(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bW:function bW(){},
fS:function fS(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ap:function ap(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fU:function fU(){var _=this
_.e=_.d=_.c=_.b=null},
fV:function fV(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fW:function fW(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dp:function dp(){}},E={
l8:function(){var u,t=new E.aA()
t.a=""
t.b=!0
u=O.ki(E.aA)
t.y=u
u.b6(t.ghK(),t.ghN())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.saf(0,null)
t.saa(null)
return t},
nf:function(a,b){var u=new E.hu(a)
u.e8(a,b)
return u},
nl:function(a,b,c,d,e){var u,t,s=J.N(a)
if(!!s.$ibj)return E.ls(a,!0,!0,!0,!1)
u=W.kh()
t=u.style
t.width="100%"
t.height="100%"
s.gbQ(a).n(0,u)
return E.ls(u,!0,!0,!0,!1)},
ls:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dr(),p=C.i.ce(a,"webgl2",P.mV(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.t(P.u("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.nf(p,a)
u=new T.i2(p)
u.b=p.getParameter(3379)
p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dB(a)
t=new X.fA()
t.d=P.d_(P.v)
u.b=t
t=new X.h8(u)
t.f=0
t.r=V.b7()
t.x=V.b7()
t.ch=t.Q=1
u.c=t
t=new X.fJ(u)
t.r=0
t.x=V.b7()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i8(u)
t.f=V.b7()
t.r=V.b7()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.c([],[[P.dm,P.a0]])
u.z=t
s=document
t.push(W.V(s,"contextmenu",u.geY(),!1))
u.z.push(W.V(a,"focus",u.gf3(),!1))
u.z.push(W.V(a,"blur",u.geS(),!1))
u.z.push(W.V(s,"keyup",u.gf7(),!1))
u.z.push(W.V(s,"keydown",u.gf5(),!1))
u.z.push(W.V(a,"mousedown",u.gfb(),!1))
u.z.push(W.V(a,"mouseup",u.gff(),!1))
u.z.push(W.V(a,r,u.gfd(),!1))
t=u.z
W.kj(a)
W.kj(a)
t.push(W.V(a,W.kj(a),u.gfh(),!1))
u.z.push(W.V(s,r,u.gf_(),!1))
u.z.push(W.V(s,"mouseup",u.gf1(),!1))
u.z.push(W.V(s,"pointerlockchange",u.gfj(),!1))
u.z.push(W.V(a,"touchstart",u.gfz(),!1))
u.z.push(W.V(a,"touchend",u.gft(),!1))
u.z.push(W.V(a,"touchmove",u.gfv(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a7(Date.now(),!1)
q.db=0
q.cI()
return q},
eP:function eP(){},
aA:function aA(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hu:function hu(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hv:function hv(a){this.a=a},
hw:function hw(a){this.a=a},
hx:function hx(a){this.a=a},
dl:function dl(a){this.c=a
this.b=null},
dr:function dr(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
i4:function i4(a){this.a=a}},Z={
kA:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bB(c)),35044)
a.bindBuffer(b,null)
return new Z.dE(b,u)},
af:function(a){return new Z.aN(a)},
dE:function dE(a,b){this.a=a
this.b=b},
cG:function cG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iR:function iR(a){this.a=a},
cH:function cH(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bn:function bn(a,b,c){this.a=a
this.b=b
this.c=c},
aN:function aN(a){this.a=a}},D={
L:function(){var u=new D.bm()
u.d=0
return u},
eS:function eS(){},
bm:function bm(){var _=this
_.d=_.c=_.b=_.a=null},
fe:function fe(a){this.a=a},
ff:function ff(a){this.a=a},
W:function W(){this.b=null},
bo:function bo(){this.b=null},
bp:function bp(){this.b=null},
B:function B(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
l4:function(){var u=new D.bk()
u.c=new V.T(1,1,1)
u.a=V.lF()
u.d=V.kz()
u.e=V.nu()
u.saa(null)
u.sah(0,null)
return u},
bk:function bk(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a8:function a8(){},
cZ:function cZ(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
ho:function ho(){},
hO:function hO(){}},X={cI:function cI(a,b){this.a=a
this.b=b},cY:function cY(a,b){this.a=a
this.b=b},fA:function fA(){this.d=this.b=this.a=null},d1:function d1(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fJ:function fJ(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},br:function br(a,b,c){this.a=a
this.b=b
this.c=c},b3:function b3(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},h8:function h8(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hp:function hp(){},dv:function dv(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},i8:function i8(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dB:function dB(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mM:function(a){var u=new X.fn(),t=new V.am(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lo
if(t==null){t=V.ln(0,0,1,1)
$.lo=t}u.r=t
return u},
kg:function kg(){},
fn:function fn(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
da:function da(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hX:function hX(){}},V={
kc:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.b5(a-b,u)
return(a<0?a+u:a)+b},
D:function(a,b,c){if(a==null)return C.a.ab("null",c)
return C.a.ab(C.d.dP(Math.abs(a-0)<$.z().a?0:a,b),c+b+1)},
bG:function(a,b,c){var u,t,s,r,q,p,o=H.c([],[P.k])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.p)(a),++s){r=V.D(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.a.ab(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
kO:function(a){return C.d.i9(Math.pow(2,C.R.c_(Math.log(H.oq(a))/Math.log(2))))},
n_:function(a){return new V.bX(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q)},
d3:function(){var u=$.lf
return u==null?$.lf=V.aq(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aq:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kt:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aq(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
ld:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aq(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
le:function(a,b,c,d){d=V.kz()
return V.lc(V.lj(),d,new V.y(a,b,c))},
lc:function(a,b,c){var u=c.t(0,Math.sqrt(c.D(c))),t=b.az(u),s=t.t(0,Math.sqrt(t.D(t))),r=u.az(s),q=new V.y(a.a,a.b,a.c),p=s.T(0).D(q),o=r.T(0).D(q),n=u.T(0).D(q)
return V.aq(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
b7:function(){var u=$.li
return u==null?$.li=new V.a4(0,0):u},
lj:function(){var u=$.c3
return u==null?$.c3=new V.U(0,0,0):u},
ln:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dd(a,b,c,d)},
cf:function(){var u=$.lE
return u==null?$.lE=new V.y(0,0,0):u},
nu:function(){var u=$.iC
return u==null?$.iC=new V.y(-1,0,0):u},
kz:function(){var u=$.iD
return u==null?$.iD=new V.y(0,1,0):u},
lF:function(){var u=$.iE
return u==null?$.iE=new V.y(0,0,1):u},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fd:function fd(a){this.a=a},
bX:function bX(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aE:function aE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
b8:function b8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dd:function dd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
R:function R(a,b){this.a=a
this.b=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
oO:function(a){P.nm(C.O,new V.k5(a))},
nh:function(a){var u=new V.hH()
u.eb(a,!0)
return u},
cJ:function cJ(){},
k5:function k5(a){this.a=a},
f3:function f3(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fp:function fp(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fq:function fq(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hm:function hm(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hr:function hr(a){this.a=a
this.c=null},
hs:function hs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hH:function hH(){this.b=this.a=null},
hJ:function hJ(a){this.a=a},
hI:function hI(a){this.a=a},
hK:function hK(a){this.a=a}},U={
l3:function(){var u=new U.eU()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
cL:function(a){var u=new U.cK()
u.a=a
return u},
lp:function(a,b,c){var u,t=new U.df()
t.r=t.f=t.e=t.d=t.c=t.b=t.a=0
t.sdU(0)
t.sdE(0,0)
t.sdL(0)
u=t.d
if(!(Math.abs(u-c)<$.z().a)){t.d=c
u=new D.B("deltaYaw",u,c)
u.b=!0
t.R(u)}u=t.e
if(!(Math.abs(u-a)<$.z().a)){t.e=a
u=new D.B("deltaPitch",u,a)
u.b=!0
t.R(u)}u=t.f
if(!(Math.abs(u-b)<$.z().a)){t.f=b
u=new D.B("deltaRoll",u,b)
u.b=!0
t.R(u)}return t},
lA:function(a,b){var u,t,s,r=new U.dC(),q=U.l3()
q.sdT(0,!0)
q.sdq(6.283185307179586)
q.sds(0)
q.sa0(0,0)
q.sdr(100)
q.sY(0)
q.scY(0.5)
r.b=q
u=r.gb8()
q.gv().n(0,u)
q=U.l3()
q.sdT(0,!0)
q.sdq(6.283185307179586)
q.sds(0)
q.sa0(0,0)
q.sdr(100)
q.sY(0)
q.scY(0.5)
r.c=q
q.gv().n(0,u)
r.d=null
r.r=r.f=r.e=!1
r.y=r.x=2.5
r.Q=4
r.ch=r.cx=!1
r.db=r.cy=0
r.dx=null
r.dy=0
r.fx=r.fr=null
t=new X.br(a,!1,!1)
s=r.d
r.d=t
q=new D.B("modifiers",s,t)
q.b=!0
r.R(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.B("invertX",q,!1)
q.b=!0
r.R(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.B("invertY",q,!1)
q.b=!0
r.R(q)}r.h3(b)
return r},
eU:function eU(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cK:function cK(){this.b=this.a=null},
bQ:function bQ(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ai:function ai(){},
df:function df(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dC:function dC(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cQ:function cQ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
mY:function(a,b){var u=a.aA,t=new A.fQ(b,u)
t.ea(b,u)
t.e7(a,b)
return t},
mZ:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gaj(a0)+a1.gaj(a1)+a2.gaj(a2)+a3.gaj(a3)+a4.gaj(a4)+a5.gaj(a5)+a6.gaj(a6)+a7.gaj(a7)+a8.gaj(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.p)(a9),++t)f+="_"+H.e(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.p)(b0),++t)f+="_"+H.e(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.p)(b1),++t)f+="_"+H.e(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.aS()
if(l){u=$.aR()
g=new Z.aN(g.a|u.a)}if(k){u=$.aQ()
g=new Z.aN(g.a|u.a)}if(j){u=$.aT()
g=new Z.aN(g.a|u.a)}if(i){u=$.aP()
g=new Z.aN(g.a|u.a)}return new A.fT(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,m,p,r,h,!0,!1,!1,o,r,n,l,k,j,!1,i,a,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
jG:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
jH:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.jG(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.k9(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
o_:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jG(b,t,"emission")
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
nX:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jH(b,t,"ambient")
b.a+="\n"},
nY:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jH(b,t,"diffuse")
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
o0:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jH(b,t,"invDiffuse")
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
o6:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jH(b,t,"specular")
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
o2:function(a,b){var u,t,s
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
o4:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jG(b,t,"reflect")
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
o5:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jG(b,t,"refract")
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
nZ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.k9(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ae()
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
o3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.k9(t)
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
if(typeof u!=="number")return u.ae()
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
o7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.k9(t)
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
if(typeof u!=="number")return u.ae()
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
o1:function(a,b){var u,t
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
if(u.a||u.b||!1)t.push("ambientColor")
u=a.c
if(u.a||u.b||!1)t.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)t.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.b.k(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
o8:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.Q("")
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
A.o_(a,j)
A.nX(a,j)
A.nY(a,j)
A.o0(a,j)
A.o6(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.o4(a,j)
A.o5(a,j)}A.o2(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.nZ(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.o3(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.o7(a,q[o],j)
A.o1(a,j)}q=j.a+="// === Main ===\n"
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
u=a.b
if(u.a||u.b||!1)j.a+="   setAmbientColor();\n"
u=a.c
if(u.a||u.b||!1)j.a+="   setDiffuseColor();\n"
u=a.d
if(u.a||u.b||!1)j.a+="   setInvDiffuseColor();\n"
u=a.e
if(u.a||u.b||!1)j.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)n.push("emissionColor()")
u=a.r
if(u.a||u.b||!1)n.push("reflect(refl)")
u=a.x
if(u.a||u.b||!1)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.b.k(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
o9:function(a,b){var u,t,s
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
ob:function(a,b){var u
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
oa:function(a,b){var u
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
od:function(a,b){var u,t
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
oe:function(a,b){var u,t
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
oc:function(a,b){var u
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
of:function(a,b){var u
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
k9:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.a6(a,1)},
kw:function(a,b,c,d,e){var u=new A.ig(a,c,e)
u.f=d
P.mW(d,0,P.v)
return u},
cF:function cF(a,b,c){this.a=a
this.b=b
this.c=c},
eI:function eI(a){this.a=a},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
fQ:function fQ(a,b){var _=this
_.im=_.d1=_.d0=_.d_=_.aA=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iv=_.iu=_.it=_.bY=_.bX=_.bW=_.bV=_.bU=_.bT=_.is=_.de=_.dd=_.ir=_.dc=_.da=_.d9=_.iq=_.d8=_.d7=_.d6=_.ip=_.d5=_.d4=_.io=_.d3=_.d2=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cN:function cN(a,b){this.a=a
this.b=b},
db:function db(a,b){this.a=a
this.b=b},
di:function di(a,b){this.a=a
this.b=b},
fT:function fT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aA=b3
_.d_=b4},
cb:function cb(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cd:function cd(a,b,c,d,e,f,g,h,i,j){var _=this
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
ce:function ce(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dg:function dg(){},
dx:function dx(){},
il:function il(a){this.a=a},
dy:function dy(a,b,c){this.a=a
this.c=b
this.d=c},
ii:function ii(a,b,c){this.a=a
this.c=b
this.d=c},
ij:function ij(a,b,c){this.a=a
this.c=b
this.d=c},
ik:function ik(a,b,c){this.a=a
this.c=b
this.d=c},
ig:function ig(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
Y:function Y(a,b,c){this.a=a
this.c=b
this.d=c},
ih:function ih(a,b,c){this.a=a
this.c=b
this.d=c},
J:function J(a,b,c){this.a=a
this.c=b
this.d=c},
ca:function ca(a,b,c){this.a=a
this.c=b
this.d=c},
im:function im(a,b,c){this.a=a
this.c=b
this.d=c},
cc:function cc(a,b,c){this.a=a
this.c=b
this.d=c},
ae:function ae(a,b,c){this.a=a
this.c=b
this.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
bx:function bx(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kJ:function(a,b,c,d){var u=F.ku()
F.ct(u,b,c,d,a,1,0,0,1)
F.ct(u,b,c,d,a,0,1,0,3)
F.ct(u,b,c,d,a,0,0,1,2)
F.ct(u,b,c,d,a,-1,0,0,0)
F.ct(u,b,c,d,a,0,-1,0,0)
F.ct(u,b,c,d,a,0,0,-1,3)
u.aq()
return u},
jB:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
ct:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.y(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.y(u+a3,t+a1,s+a2)
q=new V.y(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.y(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jB(i)
l=F.jB(j.b)
k=F.kR(d,a0,new F.jA(j,F.jB(j.c),F.jB(j.d),l,m,c),b)
if(k!=null)a.b1(k)},
lY:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.ku()
t=b?-1:1
s=-6.283185307179586/e
r=H.c([],[F.bc])
q=u.a
p=new V.y(0,0,t)
p=p.t(0,Math.sqrt(p.D(p)))
r.push(q.h0(new V.b8(a,-1,-1,-1),new V.am(1,1,1,1),new V.U(0,0,c),new V.y(0,0,t),new V.a4(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.w(k)
j=new V.y(m,l,t).t(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dD(new V.b8(a,-1,-1,-1),null,new V.am(i,g,h,1),new V.U(m*k,l*k,c),new V.y(0,0,t),new V.a4(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.n(0,f)
r.push(f)}u.d.fZ(r)
return u},
lW:function(a,b,c){return F.ou(!0,a,1,new F.jK(1,c),b)},
ou:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.kR(c,e,new F.jM(d),null)
if(u==null)return
u.aq()
u.bL()
if(b)u.b1(F.lY(3,!1,1,new F.jN(d),e))
u.b1(F.lY(1,!0,-1,new F.jO(d),e))
return u},
oP:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.k6()
t=F.kJ(a,null,new F.k7(s,1),b)
t.bL()
return t},
m7:function(){return F.lX(15,30,0.5,1,new F.ka())},
oI:function(){return F.lX(12,120,0.3,1,new F.jW(3,2))},
lX:function(a,b,c,d,e){var u=F.kR(a,b,new F.jL(e,d,b,c),null)
if(u==null)return
u.aq()
u.bL()
return u},
kR:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.ku()
t=H.c([],[F.bc])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dD(g,g,new V.am(p,0,0,1),g,g,new V.a4(r,1),g,g,0)
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
o=F.dD(g,g,new V.am(j,i,h,1),g,g,new V.a4(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.bS(d))}}u.d.h_(a+1,b+1,t)
return u},
bO:function(a,b,c){var u=new F.aY(),t=a.a
if(t==null)H.t(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.u("May not create a face with vertices attached to different shapes."))
u.bJ(a)
u.bK(b)
u.fM(c)
u.a.a.d.b.push(u)
u.a.a.Z()
return u},
mS:function(a,b){var u=new F.bU(),t=a.a
if(t==null)H.t(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.u("May not create a line with vertices attached to different shapes."))
u.bJ(a)
u.bK(b)
u.a.a.c.b.push(u)
u.a.a.Z()
return u},
ku:function(){var u=new F.hD(),t=new F.iF(u)
t.b=!1
t.c=H.c([],[F.bc])
u.a=t
t=new F.hG(u)
t.b=H.c([],[F.c2])
u.b=t
t=new F.hF(u)
t.b=H.c([],[F.bU])
u.c=t
t=new F.hE(u)
t.b=H.c([],[F.aY])
u.d=t
u.e=null
return u},
dD:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bc(),r=new F.iN()
r.b=H.c([],[F.c2])
s.b=r
r=new F.iJ()
u=[F.bU]
r.b=H.c([],u)
r.c=H.c([],u)
s.c=r
r=new F.iG()
u=[F.aY]
r.b=H.c([],u)
r.c=H.c([],u)
r.d=H.c([],u)
s.d=r
h=$.ml()
s.e=0
r=$.aS()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aR().a)!==0?e:t
s.x=(u&$.aQ().a)!==0?b:t
s.y=(u&$.aT().a)!==0?f:t
s.z=(u&$.bf().a)!==0?g:t
s.Q=(u&$.mm().a)!==0?c:t
s.ch=(u&$.bI().a)!==0?i:0
s.cx=(u&$.aP().a)!==0?a:t
return s},
jA:function jA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jK:function jK(a,b){this.a=a
this.b=b},
jM:function jM(a){this.a=a},
jN:function jN(a){this.a=a},
jO:function jO(a){this.a=a},
k6:function k6(){},
k7:function k7(a,b){this.a=a
this.b=b},
ka:function ka(){},
jW:function jW(a,b){this.a=a
this.b=b},
jL:function jL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aY:function aY(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fg:function fg(){},
hL:function hL(){},
bU:function bU(){this.b=this.a=null},
fC:function fC(){},
ie:function ie(){},
c2:function c2(){this.a=null},
hD:function hD(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hE:function hE(a){this.a=a
this.b=null},
hF:function hF(a){this.a=a
this.b=null},
hG:function hG(a){this.a=a
this.b=null},
bc:function bc(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iP:function iP(a){this.a=a},
iO:function iO(a){this.a=a},
iF:function iF(a){this.a=a
this.c=this.b=null},
iG:function iG(){this.d=this.c=this.b=null},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(a,b){this.a=a
this.b=b},
iJ:function iJ(){this.c=this.b=null},
iL:function iL(){},
iK:function iK(){},
iM:function iM(){},
hg:function hg(){},
iN:function iN(){this.b=null}},K={
m2:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="testCanvas",c=null,b=V.nh("Test 026"),a=W.kh()
a.className="pageLargeCanvas"
a.id=d
b.a.appendChild(a)
u=[P.k]
b.cS(H.c(["Test of the Material Lighting shader with a textured directional light. ","The texturing of the directional light is being modified with a matrix. ","The texture metrix is updated using the pre-update mathods. ","Use Ctrl plus the mouse to move the center object."],u))
b.fX(H.c(["shapes"],u))
b.cS(H.c(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(d)
if(t==null)H.t(P.u("Failed to find an element with the identifier, testCanvas."))
s=E.nl(t,!0,!0,!0,!1)
r=D.l4()
r.saa(U.cL(V.le(0.3,0.4,1,c)))
q=D.l4()
q.saa(U.cL(V.le(-0.3,-0.4,-1,c)))
q.sah(0,new V.T(0.125,0.125,0.125))
p=new O.d2()
o=O.ki(V.aE)
p.e=o
o.b6(p.geO(),p.geQ())
o=new O.ap(p,"emission")
o.c=new A.Z(!1,!1,!1)
o.f=new V.T(0,0,0)
p.f=o
o=new O.ap(p,"ambient")
o.c=new A.Z(!1,!1,!1)
o.f=new V.T(0,0,0)
p.r=o
o=new O.ap(p,"diffuse")
o.c=new A.Z(!1,!1,!1)
o.f=new V.T(0,0,0)
p.x=o
o=new O.ap(p,"invDiffuse")
o.c=new A.Z(!1,!1,!1)
o.f=new V.T(0,0,0)
p.y=o
o=new O.fW(p,"specular")
o.c=new A.Z(!1,!1,!1)
o.f=new V.T(0,0,0)
o.ch=100
p.z=o
o=new O.fS(p,"bump")
o.c=new A.Z(!1,!1,!1)
p.Q=o
p.ch=null
o=new O.ap(p,"reflect")
o.c=new A.Z(!1,!1,!1)
o.f=new V.T(0,0,0)
p.cx=o
o=new O.fV(p,"refract")
o.c=new A.Z(!1,!1,!1)
o.f=new V.T(0,0,0)
o.ch=1
p.cy=o
o=new O.fR(p,"alpha")
o.c=new A.Z(!1,!1,!1)
o.f=1
p.db=o
o=new D.cZ()
o.br(D.a8)
o.e=H.c([],[D.bk])
o.f=H.c([],[D.ho])
o.r=H.c([],[D.hO])
o.y=o.x=null
o.cg(o.geM(),o.gfm(),o.gfq())
p.dx=o
n=new O.fU()
n.b=new V.am(0,0,0,0)
n.c=1
n.d=10
n.e=!1
p.dy=n
n=o.x
o=n==null?o.x=D.L():n
o.n(0,p.gfG())
o=p.dx
n=o.y
o=n==null?o.y=D.L():n
o.n(0,p.gbb())
p.fr=null
p.dx.n(0,r)
p.dx.n(0,q)
p.f.sah(0,new V.T(0,0,0))
o=p.r
o.sah(0,new V.T(0.1,0.1,0.1))
o=p.x
o.sah(0,new V.T(0.8,0.8,0.8))
o=p.z
o.sah(0,new V.T(0.2,0.2,0.2))
o=p.z
o.bG(new A.Z(!0,o.c.b,!1))
o.cK(100)
o=p.x
n=s.f.hH("../resources/Test.png",!0)
m=o.c
if(!m.b)o.bG(new A.Z(m.a,!0,!1))
m=o.d
if(m!==n){if(m!=null)m.gv().K(0,o.gbb())
l=o.d
o.d=n
n.gv().n(0,o.gbb())
n=new D.B(o.b+".texture2D",l,o.d)
n.b=!0
o.a.X(n)}k=E.l8()
k.saa(U.lA(!0,s.x))
k.saf(0,F.m7())
j=E.l8()
j.saa(U.cL(V.aq(3,0,0,0,0,3,0,0,0,0,3,0,0,0,0,1)))
o=F.kJ(1,c,c,1)
o.bZ()
j.saf(0,o)
i=new U.bQ()
i.br(U.ai)
i.b6(i.geK(),i.gfo())
i.e=null
i.f=V.d3()
i.r=0
i.n(0,U.lA(!1,s.x))
i.n(0,U.cL(V.kt(3.141592653589793)))
i.n(0,U.cL(V.aq(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
h=U.lp(0.5,0.7,0.3)
g=U.lp(0,0.1,0)
o=new M.cQ()
o.a=!0
n=O.ki(E.aA)
o.e=n
n.b6(o.geU(),o.geW())
o.y=o.x=o.r=o.f=null
f=X.mM(c)
e=new X.da()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.saa(c)
n=e.c
if(!(Math.abs(n-1.0471975511965976)<$.z().a)){e.c=1.0471975511965976
n=new D.B("fov",n,1.0471975511965976)
n.b=!0
e.aK(n)}n=e.d
if(!(Math.abs(n-0.1)<$.z().a)){e.d=0.1
n=new D.B("near",n,0.1)
n.b=!0
e.aK(n)}n=e.e
if(!(Math.abs(n-2000)<$.z().a)){e.e=2000
n=new D.B("far",n,2000)
n.b=!0
e.aK(n)}n=o.b
if(n!==e){if(n!=null)n.gv().K(0,o.gam())
l=o.b
o.b=e
e.gv().n(0,o.gam())
n=new D.B("camera",l,o.b)
n.b=!0
o.av(n)}n=o.c
if(n!==f){if(n!=null)n.gv().K(0,o.gam())
l=o.c
o.c=f
f.gv().n(0,o.gam())
n=new D.B("target",l,o.c)
n.b=!0
o.av(n)}o.sdN(c)
o.sdN(p)
o.e.n(0,k)
o.e.n(0,j)
o.b.saa(i)
n=o.f
if(n==null)n=o.f=D.L()
n.n(0,new K.jX(p,h,g))
n=s.d
if(n!==o){if(n!=null)n.gv().K(0,s.gcm())
s.d=o
o.gv().n(0,s.gcm())
s.cn()}o=new V.hr("shapes")
u=u.getElementById("shapes")
o.c=u
if(u==null)H.t("Failed to find shapes for RadioGroup")
o.aW(0,"Cube",new K.jY(k))
o.aW(0,"Cylinder",new K.jZ(k))
o.aW(0,"Cone",new K.k_(k))
o.aW(0,"Sphere",new K.k0(k))
o.cQ(0,"Toroid",new K.k1(k),!0)
o.aW(0,"Knot",new K.k2(k))
u=s.Q
if(u==null)u=s.Q=D.L()
o=u.b
u=o==null?u.b=H.c([],[{func:1,ret:-1,args:[D.W]}]):o
u.push(new K.k3(b,p))
V.oO(s)},
jX:function jX(a,b,c){this.a=a
this.b=b
this.c=c},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
k1:function k1(a){this.a=a},
k2:function k2(a){this.a=a},
k3:function k3(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kp.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gG:function(a){return H.c4(a)},
h:function(a){return"Instance of '"+H.e(H.c5(a))+"'"}}
J.fx.prototype={
h:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iaw:1}
J.cW.prototype={
p:function(a,b){return null==b},
h:function(a){return"null"},
gG:function(a){return 0}}
J.cX.prototype={
gG:function(a){return 0},
h:function(a){return String(a)}}
J.hl.prototype={}
J.by.prototype={}
J.b0.prototype={
h:function(a){var u=a[$.m9()]
if(u==null)return this.e4(a)
return"JavaScript function for "+H.e(J.a2(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aZ.prototype={
dI:function(a,b){if(!!a.fixed$length)H.t(P.x("removeAt"))
if(b<0||b>=a.length)throw H.d(P.dc(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var u
if(!!a.fixed$length)H.t(P.x("remove"))
for(u=0;u<a.length;++u)if(J.C(a[u],b)){a.splice(u,1)
return!0}return!1},
F:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.d(P.ay(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
hF:function(a){return this.k(a,"")},
hx:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.d(P.ay(a))}return u},
hy:function(a,b,c){return this.hx(a,b,c,null)},
hw:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.d(P.ay(a))}throw H.d(H.fv())},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
e0:function(a,b,c){if(b<0||b>a.length)throw H.d(P.X(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.X(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.cz(a,0)])
return H.c(a.slice(b,c),[H.cz(a,0)])},
ghv:function(a){if(a.length>0)return a[0]
throw H.d(H.fv())},
gar:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.fv())},
cT:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.d(P.ay(a))}return!1},
bp:function(a,b){if(!!a.immutable$list)H.t(P.x("sort"))
H.dh(a,0,a.length-1,b)},
U:function(a,b){var u
for(u=0;u<a.length;++u)if(J.C(a[u],b))return!0
return!1},
h:function(a){return P.km(a,"[","]")},
gV:function(a){return new J.a6(a,a.length)},
gG:function(a){return H.c4(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.x("set length"))
if(b<0)throw H.d(P.X(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.bF(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.t(P.x("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bF(a,b))
a[b]=c},
$ii:1,
$in:1}
J.ko.prototype={}
J.a6.prototype={
gJ:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.p(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bT.prototype={
hc:function(a,b){var u
if(typeof b!=="number")throw H.d(H.ak(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbh(b)
if(this.gbh(a)===u)return 0
if(this.gbh(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbh:function(a){return a===0?1/a<0:a<0},
i9:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.x(""+a+".toInt()"))},
c_:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.x(""+a+".floor()"))},
ai:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.x(""+a+".round()"))},
dP:function(a,b){var u
if(b>20)throw H.d(P.X(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbh(a))return"-"+u
return u},
b4:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.X(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.W(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.x("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.b(t,1)
u=t[1]
if(3>=s)return H.b(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.A("0",r)},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
b5:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
e6:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cM(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.cM(a,b)},
cM:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.x("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aN:function(a,b){var u
if(a>0)u=this.cL(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fQ:function(a,b){if(b<0)throw H.d(H.ak(b))
return this.cL(a,b)},
cL:function(a,b){return b>31?0:a>>>b},
$iK:1,
$iaa:1}
J.cV.prototype={$iv:1}
J.cU.prototype={}
J.b_.prototype={
W:function(a,b){if(b<0)throw H.d(H.bF(a,b))
if(b>=a.length)H.t(H.bF(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.d(H.bF(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.d(P.kZ(b,null,null))
return a+b},
aR:function(a,b,c,d){var u,t
c=P.b9(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a4:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.X(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a2:function(a,b){return this.a4(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ak(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.S()
if(b<0)throw H.d(P.dc(b,null))
if(b>c)throw H.d(P.dc(b,null))
if(c>a.length)throw H.d(P.dc(c,null))
return a.substring(b,c)},
a6:function(a,b){return this.q(a,b,null)},
ic:function(a){return a.toLowerCase()},
A:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.L)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ab:function(a,b){var u=b-a.length
if(u<=0)return a
return this.A(" ",u)+a},
bg:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.X(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dl:function(a,b){return this.bg(a,b,0)},
h:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ik:1}
H.l.prototype={
gl:function(a){return this.a.length},
i:function(a,b){return C.a.W(this.a,b)},
$ar:function(){return[P.v]},
$ai:function(){return[P.v]},
$an:function(){return[P.v]}}
H.fa.prototype={}
H.d0.prototype={
gV:function(a){return new H.bV(this,this.gl(this))},
bn:function(a,b){return this.e3(0,b)}}
H.bV.prototype={
gJ:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=J.cw(s),q=r.gl(s)
if(t.b!==q)throw H.d(P.ay(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.H(s,u);++t.c
return!0}}
H.fN.prototype={
gV:function(a){return new H.fO(J.aU(this.a),this.b)},
gl:function(a){return J.ac(this.a)},
H:function(a,b){return this.b.$1(J.eE(this.a,b))},
$ai:function(a,b){return[b]}}
H.fO.prototype={
w:function(){var u=this,t=u.b
if(t.w()){u.a=u.c.$1(t.gJ(t))
return!0}u.a=null
return!1},
gJ:function(a){return this.a}}
H.fP.prototype={
gl:function(a){return J.ac(this.a)},
H:function(a,b){return this.b.$1(J.eE(this.a,b))},
$ad0:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cg.prototype={
gV:function(a){return new H.iS(J.aU(this.a),this.b)}}
H.iS.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(t.$1(u.gJ(u)))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.cR.prototype={}
H.ir.prototype={
m:function(a,b,c){throw H.d(P.x("Cannot modify an unmodifiable list"))}}
H.dz.prototype={}
H.eW.prototype={
h:function(a){return P.ks(this)},
m:function(a,b,c){return H.mH()},
$iP:1}
H.eX.prototype={
gl:function(a){return this.a},
be:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.be(0,b))return
return this.cB(b)},
cB:function(a){return this.b[a]},
F:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cB(s))}}}
H.ic.prototype={
a9:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hh.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fz.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iq.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kb.prototype={
$1:function(a){if(!!J.N(a).$ibl)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.ec.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bL.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
gig:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hY.prototype={}
H.hQ.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.eD(u)+"'"}}
H.bJ.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bJ))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.c4(this.a)
else u=typeof t!=="object"?J.cD(t):H.c4(t)
return(u^H.c4(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.c5(u))+"'")}}
H.eR.prototype={
h:function(a){return this.a}}
H.hA.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.M.prototype={
gl:function(a){return this.a},
ghE:function(a){return this.a===0},
ga3:function(a){return new H.fE(this,[H.cz(this,0)])},
be:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cw(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cw(t,b)}else return s.hB(b)},
hB:function(a){var u=this,t=u.d
if(t==null)return!1
return u.c2(u.by(t,u.c1(a)),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b9(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b9(r,b)
s=t==null?null:t.b
return s}else return q.hC(b)},
hC:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.by(r,s.c1(a))
t=s.c2(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cr(u==null?s.b=s.bA():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cr(t==null?s.c=s.bA():t,b,c)}else s.hD(b,c)},
hD:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bA()
u=r.c1(a)
t=r.by(q,u)
if(t==null)r.bH(q,u,[r.bB(a,b)])
else{s=r.c2(t,a)
if(s>=0)t[s].b=b
else t.push(r.bB(a,b))}},
F:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.d(P.ay(u))
t=t.c}},
cr:function(a,b,c){var u=this.b9(a,b)
if(u==null)this.bH(a,b,this.bB(b,c))
else u.b=c},
eD:function(){this.r=this.r+1&67108863},
bB:function(a,b){var u,t=this,s=new H.fD(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eD()
return s},
c1:function(a){return J.cD(a)&0x3ffffff},
c2:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.C(a[t].a,b))return t
return-1},
h:function(a){return P.ks(this)},
b9:function(a,b){return a[b]},
by:function(a,b){return a[b]},
bH:function(a,b,c){a[b]=c},
ew:function(a,b){delete a[b]},
cw:function(a,b){return this.b9(a,b)!=null},
bA:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bH(t,u,t)
this.ew(t,u)
return t}}
H.fD.prototype={}
H.fE.prototype={
gl:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.fF(u,u.r)
t.c=u.e
return t}}
H.fF.prototype={
gJ:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.ay(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.jS.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.jT.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jU.prototype={
$1:function(a){return this.a(a)}}
H.fy.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ind:1}
H.c_.prototype={$ic_:1}
H.b4.prototype={$ib4:1}
H.d4.prototype={
gl:function(a){return a.length},
$iA:1,
$aA:function(){}}
H.c0.prototype={
i:function(a,b){H.av(b,a,a.length)
return a[b]},
m:function(a,b,c){H.av(b,a,a.length)
a[b]=c},
$ar:function(){return[P.K]},
$ii:1,
$ai:function(){return[P.K]},
$in:1,
$an:function(){return[P.K]}}
H.d5.prototype={
m:function(a,b,c){H.av(b,a,a.length)
a[b]=c},
$ar:function(){return[P.v]},
$ii:1,
$ai:function(){return[P.v]},
$in:1,
$an:function(){return[P.v]}}
H.h9.prototype={
i:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.ha.prototype={
i:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.hb.prototype={
i:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.hc.prototype={
i:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.hd.prototype={
i:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.d6.prototype={
gl:function(a){return a.length},
i:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.c1.prototype={
gl:function(a){return a.length},
i:function(a,b){H.av(b,a,a.length)
return a[b]},
$ic1:1,
$ibw:1}
H.ck.prototype={}
H.cl.prototype={}
H.cm.prototype={}
H.cn.prototype={}
P.iU.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.iT.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.iV.prototype={
$0:function(){this.a.$0()}}
P.iW.prototype={
$0:function(){this.a.$0()}}
P.ei.prototype={
eh:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bE(new P.jq(this,b),0),a)
else throw H.d(P.x("`setTimeout()` not found."))},
ei:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bE(new P.jp(this,a,Date.now(),b),0),a)
else throw H.d(P.x("Periodic timer."))},
$ids:1}
P.jq.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jp.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.e6(u,q)}s.c=r
t.d.$1(s)}}
P.dF.prototype={}
P.dm.prototype={}
P.hT.prototype={}
P.ds.prototype={}
P.jz.prototype={}
P.jI.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.d9():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.h(0)
throw u}}
P.j9.prototype={
i5:function(a){var u,t,s,r=null
try{if(C.f===$.aj){a.$0()
return}P.oh(r,r,this,a)}catch(s){u=H.ab(s)
t=H.kL(s)
P.lQ(r,r,this,u,t)}},
i6:function(a,b){var u,t,s,r=null
try{if(C.f===$.aj){a.$1(b)
return}P.oi(r,r,this,a,b)}catch(s){u=H.ab(s)
t=H.kL(s)
P.lQ(r,r,this,u,t)}},
i7:function(a,b){return this.i6(a,b,null)},
h8:function(a){return new P.ja(this,a)},
cV:function(a,b){return new P.jb(this,a,b)}}
P.ja.prototype={
$0:function(){return this.a.i5(this.b)}}
P.jb.prototype={
$1:function(a){return this.a.i7(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.j6.prototype={
gV:function(a){var u=new P.dU(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
U:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.eq(b)
return t}},
eq:function(a){var u=this.d
if(u==null)return!1
return this.bw(this.cC(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cs(u==null?s.b=P.kB():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cs(t==null?s.c=P.kB():t,b)}else return s.ek(0,b)},
ek:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kB()
u=s.cu(b)
t=r[u]
if(t==null)r[u]=[s.bt(b)]
else{if(s.bw(t,b)>=0)return!1
t.push(s.bt(b))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fC(this.c,b)
else return this.fB(0,b)},
fB:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cC(r,b)
t=s.bw(u,b)
if(t<0)return!1
s.cN(u.splice(t,1)[0])
return!0},
cs:function(a,b){if(a[b]!=null)return!1
a[b]=this.bt(b)
return!0},
fC:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cN(u)
delete a[b]
return!0},
ct:function(){this.r=1073741823&this.r+1},
bt:function(a){var u,t=this,s=new P.j7(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.ct()
return s},
cN:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.ct()},
cu:function(a){return J.cD(a)&1073741823},
cC:function(a,b){return a[this.cu(b)]},
bw:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.C(a[t].a,b))return t
return-1}}
P.j7.prototype={}
P.dU.prototype={
gJ:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.ay(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fG.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.fH.prototype={$ii:1,$in:1}
P.r.prototype={
gV:function(a){return new H.bV(a,this.gl(a))},
H:function(a,b){return this.i(a,b)},
ib:function(a,b){var u,t,s=this,r=H.c([],[H.oA(s,a,"r",0)])
C.b.sl(r,s.gl(a))
for(u=0;u<s.gl(a);++u){t=s.i(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t}return r},
ia:function(a){return this.ib(a,!0)},
ht:function(a,b,c,d){var u
P.b9(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
h:function(a){return P.km(a,"[","]")}}
P.fK.prototype={}
P.fL.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.aD.prototype={
F:function(a,b){var u,t
for(u=J.aU(this.ga3(a));u.w();){t=u.gJ(u)
b.$2(t,this.i(a,t))}},
gl:function(a){return J.ac(this.ga3(a))},
h:function(a){return P.ks(a)},
$iP:1}
P.jr.prototype={
m:function(a,b,c){throw H.d(P.x("Cannot modify unmodifiable map"))}}
P.fM.prototype={
i:function(a,b){return J.cC(this.a,b)},
m:function(a,b,c){J.kd(this.a,b,c)},
F:function(a,b){J.kV(this.a,b)},
gl:function(a){return J.ac(this.a)},
h:function(a){return J.a2(this.a)},
$iP:1}
P.dA.prototype={}
P.jd.prototype={
ao:function(a,b){var u
for(u=J.aU(b);u.w();)this.n(0,u.gJ(u))},
h:function(a){return P.km(this,"{","}")},
H:function(a,b){var u,t,s
P.lm(b,"index")
for(u=P.nC(this,this.r),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.d(P.H(b,this,"index",null,t))},
$ii:1}
P.dV.prototype={}
P.eo.prototype={}
P.eN.prototype={
hJ:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.b9(a0,a1,b.length)
u=$.mo()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.a.C(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jR(C.a.C(b,n))
j=H.jR(C.a.C(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.b(u,i)
h=u[i]
if(h>=0){i=C.a.W("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.Q("")
g=r.a+=C.a.q(b,s,t)
r.a=g+H.bt(m)
s=n
continue}}throw H.d(P.O("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.q(b,s,a1)
f=g.length
if(q>=0)P.l_(b,p,a1,q,o,f)
else{e=C.c.b5(f-1,4)+1
if(e===1)throw H.d(P.O(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aR(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.l_(b,p,a1,q,o,d)
else{e=C.c.b5(d,4)
if(e===1)throw H.d(P.O(c,b,a1))
if(e>1)b=C.a.aR(b,a1,a1,e===2?"==":"=")}return b}}
P.eO.prototype={}
P.eT.prototype={}
P.eY.prototype={}
P.fc.prototype={}
P.ft.prototype={
h:function(a){return this.a}}
P.fs.prototype={
es:function(a,b,c){var u,t,s,r,q,p,o=null
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
if(c>b)q.a+=J.mz(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iz.prototype={
ghs:function(){return C.M}}
P.iB.prototype={
bR:function(a){var u,t,s=P.b9(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jx(u)
if(t.ey(a,0,s)!==s)t.cP(J.mv(a,s-1),0)
return new Uint8Array(u.subarray(0,H.nT(0,t.b,u.length)))}}
P.jx.prototype={
cP:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
ey:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.W(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.C(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cP(r,C.a.C(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iA.prototype={
bR:function(a){var u,t,s,r,q,p,o,n,m=P.np(!1,a,0,null)
if(m!=null)return m
u=P.b9(0,null,J.ac(a))
t=P.lS(a,0,u)
if(t>0){s=P.c8(a,0,t)
if(t===u)return s
r=new P.Q(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.Q("")
o=new P.jw(!1,r)
o.c=p
o.hd(a,q,u)
if(o.e>0){H.t(P.O("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bt(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jw.prototype={
hd:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.cw(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.ae()
if((r&192)!==128){q=P.O(k+C.c.b4(r,16),a,s)
throw H.d(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.b(C.v,q)
if(j<=C.v[q]){q=P.O("Overlong encoding of 0x"+C.c.b4(j,16),a,s-h-1)
throw H.d(q)}if(j>1114111){q=P.O("Character outside valid Unicode range: 0x"+C.c.b4(j,16),a,s-h-1)
throw H.d(q)}if(!l.c||j!==65279)t.a+=H.bt(j)
l.c=!1}for(q=s<c;q;){p=P.lS(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.c8(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.S()
if(r<0){m=P.O("Negative UTF-8 code unit: -0x"+C.c.b4(-r,16),a,n-1)
throw H.d(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.O(k+C.c.b4(r,16),a,n-1)
throw H.d(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.aw.prototype={}
P.a7.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.a7&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.c.aN(u,30))&1073741823},
h:function(a){var u=this,t=P.mI(H.n9(u)),s=P.cM(H.n7(u)),r=P.cM(H.n3(u)),q=P.cM(H.n4(u)),p=P.cM(H.n6(u)),o=P.cM(H.n8(u)),n=P.mJ(H.n5(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.K.prototype={}
P.aX.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aX&&this.a===b.a},
gG:function(a){return C.c.gG(this.a)},
h:function(a){var u,t,s,r=new P.f9(),q=this.a
if(q<0)return"-"+new P.aX(0-q).h(0)
u=r.$1(C.c.a5(q,6e7)%60)
t=r.$1(C.c.a5(q,1e6)%60)
s=new P.f8().$1(q%1e6)
return""+C.c.a5(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.f8.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.f9.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bl.prototype={}
P.d9.prototype={
h:function(a){return"Throw of null."}}
P.ag.prototype={
gbv:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbu:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbv()+o+u
if(!q.a)return t
s=q.gbu()
r=P.kl(q.b)
return t+s+": "+r}}
P.bu.prototype={
gbv:function(){return"RangeError"},
gbu:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fu.prototype={
gbv:function(){return"RangeError"},
gbu:function(){var u,t=this.b
if(typeof t!=="number")return t.S()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.is.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.io.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c7.prototype={
h:function(a){return"Bad state: "+this.a}}
P.eV.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kl(u)+"."}}
P.hk.prototype={
h:function(a){return"Out of Memory"},
$ibl:1}
P.dj.prototype={
h:function(a){return"Stack Overflow"},
$ibl:1}
P.f2.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dN.prototype={
h:function(a){return"Exception: "+this.a}}
P.fm.prototype={
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
for(q=g;q<o;++q){p=C.a.W(f,q)
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
return h+l+j+k+"\n"+C.a.A(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fo.prototype={}
P.v.prototype={}
P.i.prototype={
bn:function(a,b){return new H.cg(this,b,[H.kK(this,"i",0)])},
gl:function(a){var u,t=this.gV(this)
for(u=0;t.w();)++u
return u},
gaI:function(a){var u,t=this.gV(this)
if(!t.w())throw H.d(H.fv())
u=t.gJ(t)
if(t.w())throw H.d(H.mP())
return u},
H:function(a,b){var u,t,s
P.lm(b,"index")
for(u=this.gV(this),t=0;u.w();){s=u.gJ(u)
if(b===t)return s;++t}throw H.d(P.H(b,this,"index",null,t))},
h:function(a){return P.mO(this,"(",")")}}
P.fw.prototype={}
P.n.prototype={$ii:1}
P.P.prototype={}
P.b5.prototype={
gG:function(a){return P.a0.prototype.gG.call(this,this)},
h:function(a){return"null"}}
P.aa.prototype={}
P.a0.prototype={constructor:P.a0,$ia0:1,
p:function(a,b){return this===b},
gG:function(a){return H.c4(this)},
h:function(a){return"Instance of '"+H.e(H.c5(this))+"'"},
toString:function(){return this.h(this)}}
P.k.prototype={}
P.Q.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.ix.prototype={
$2:function(a,b){var u,t,s,r=J.cx(b).dl(b,"=")
if(r===-1){if(b!=="")J.kd(a,P.kF(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.q(b,0,r)
t=C.a.a6(b,r+1)
s=this.a
J.kd(a,P.kF(u,0,u.length,s,!0),P.kF(t,0,t.length,s,!0))}return a}}
P.iu.prototype={
$2:function(a,b){throw H.d(P.O("Illegal IPv4 address, "+a,this.a,b))}}
P.iv.prototype={
$2:function(a,b){throw H.d(P.O("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iw.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eC(C.a.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.S()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bz.prototype={
gdS:function(){return this.b},
gc0:function(a){var u=this.c
if(u==null)return""
if(C.a.a2(u,"["))return C.a.q(u,1,u.length-1)
return u},
gbj:function(a){var u=this.d
if(u==null)return P.lJ(this.a)
return u},
gc7:function(a){var u=this.f
return u==null?"":u},
gdg:function(){var u=this.r
return u==null?"":u},
dJ:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a2(u,"/"))u="/"+u
s=P.kD(null,0,0,b)
return new P.bz(q,o,m,n,u,s,r.r)},
gc8:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.k
u=this.Q=new P.dA(P.lz(t==null?"":t),[u,u])
t=u}return t},
gdh:function(){return this.c!=null},
gdk:function(){return this.f!=null},
gdi:function(){return this.r!=null},
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
if(!!J.N(b).$ikx)if(s.a==b.gbo())if(s.c!=null===b.gdh())if(s.b==b.gdS())if(s.gc0(s)==b.gc0(b))if(s.gbj(s)==b.gbj(b))if(s.e===b.gdD(b)){u=s.f
t=u==null
if(!t===b.gdk()){if(t)u=""
if(u===b.gc7(b)){u=s.r
t=u==null
if(!t===b.gdi()){if(t)u=""
u=u===b.gdg()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gG:function(a){var u=this.z
return u==null?this.z=C.a.gG(this.h(0)):u},
$ikx:1,
gbo:function(){return this.a},
gdD:function(a){return this.e}}
P.js.prototype={
$1:function(a){throw H.d(P.O("Invalid port",this.a,this.b+1))}}
P.jt.prototype={
$1:function(a){return P.ep(C.W,a,C.e,!1)}}
P.jv.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.ep(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.ep(C.h,b,C.e,!0))}}}
P.ju.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aU(b),t=this.a;u.w();)t.$2(a,u.gJ(u))}}
P.it.prototype={
gdR:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.b(o,0)
u=q.a
o=o[0]+1
t=C.a.bg(u,"?",o)
s=u.length
if(t>=0){r=P.cs(u,t+1,s,C.k,!1)
s=t}else r=p
return q.c=new P.j_("data",p,p,p,P.cs(u,o,s,C.z,!1),r,p)},
h:function(a){var u,t=this.b
if(0>=t.length)return H.b(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jD.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jC.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.b(u,a)
u=u[a]
J.mw(u,0,96,b)
return u},
$S:17}
P.jE.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.C(b,s)^96
if(r>=t)return H.b(a,r)
a[r]=c}}}
P.jF.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.C(b,0),t=C.a.C(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.b(a,r)
a[r]=c}}}
P.jg.prototype={
gdh:function(){return this.c>0},
gdj:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.B()
t=this.e
if(typeof t!=="number")return H.w(t)
t=u+1<t
u=t}else u=!1
return u},
gdk:function(){var u=this.f
if(typeof u!=="number")return u.S()
return u<this.r},
gdi:function(){return this.r<this.a.length},
gcD:function(){return this.b===4&&C.a.a2(this.a,"http")},
gcE:function(){return this.b===5&&C.a.a2(this.a,"https")},
gbo:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcD())q=t.x="http"
else if(t.gcE()){t.x="https"
q="https"}else if(q===4&&C.a.a2(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a2(t.a,r)){t.x=r
q=r}else{q=C.a.q(t.a,0,q)
t.x=q}return q},
gdS:function(){var u=this.c,t=this.b+3
return u>t?C.a.q(this.a,t,u-1):""},
gc0:function(a){var u=this.c
return u>0?C.a.q(this.a,u,this.d):""},
gbj:function(a){var u,t=this
if(t.gdj()){u=t.d
if(typeof u!=="number")return u.B()
return P.eC(C.a.q(t.a,u+1,t.e),null,null)}if(t.gcD())return 80
if(t.gcE())return 443
return 0},
gdD:function(a){return C.a.q(this.a,this.e,this.f)},
gc7:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.S()
return u<t?C.a.q(this.a,u+1,t):""},
gdg:function(){var u=this.r,t=this.a
return u<t.length?C.a.a6(t,u+1):""},
gc8:function(){var u=this,t=u.f
if(typeof t!=="number")return t.S()
if(t>=u.r)return C.X
t=P.k
return new P.dA(P.lz(u.gc7(u)),[t,t])},
dJ:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbo(),m=n==="file",l=p.c,k=l>0?C.a.q(p.a,p.b+3,l):"",j=p.gdj()?p.gbj(p):o
l=p.c
if(l>0)u=C.a.q(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.q(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a2(t,"/"))t="/"+t
r=P.kD(o,0,0,b)
s=p.r
q=s<l.length?C.a.a6(l,s+1):o
return new P.bz(n,k,u,j,t,r,q)},
gG:function(a){var u=this.y
return u==null?this.y=C.a.gG(this.a):u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.N(b).$ikx&&this.a===b.h(0)},
h:function(a){return this.a},
$ikx:1}
P.j_.prototype={}
W.m.prototype={}
W.eF.prototype={
gl:function(a){return a.length}}
W.eG.prototype={
h:function(a){return String(a)}}
W.eH.prototype={
h:function(a){return String(a)}}
W.bh.prototype={$ibh:1}
W.bi.prototype={$ibi:1}
W.bj.prototype={
ce:function(a,b,c){if(c!=null)return a.getContext(b,P.or(c))
return a.getContext(b)},
dW:function(a,b){return this.ce(a,b,null)},
$ibj:1}
W.aV.prototype={
gl:function(a){return a.length}}
W.eZ.prototype={
gl:function(a){return a.length}}
W.F.prototype={$iF:1}
W.bM.prototype={
gl:function(a){return a.length}}
W.f_.prototype={}
W.ad.prototype={}
W.an.prototype={}
W.f0.prototype={
gl:function(a){return a.length}}
W.f1.prototype={
gl:function(a){return a.length}}
W.f4.prototype={
gl:function(a){return a.length}}
W.ah.prototype={$iah:1}
W.f5.prototype={
h:function(a){return String(a)}}
W.cO.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[[P.a9,P.aa]]},
$ar:function(){return[[P.a9,P.aa]]},
$ii:1,
$ai:function(){return[[P.a9,P.aa]]},
$in:1,
$an:function(){return[[P.a9,P.aa]]}}
W.cP.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaH(a))+" x "+H.e(this.gaB(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.N(b)
if(!u.$ia9)return!1
return a.left===u.gbi(b)&&a.top===u.gbl(b)&&this.gaH(a)===u.gaH(b)&&this.gaB(a)===u.gaB(b)},
gG:function(a){return W.lH(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(this.gaH(a)),C.d.gG(this.gaB(a)))},
gcW:function(a){return a.bottom},
gaB:function(a){return a.height},
gbi:function(a){return a.left},
gcb:function(a){return a.right},
gbl:function(a){return a.top},
gaH:function(a){return a.width},
$ia9:1,
$aa9:function(){return[P.aa]}}
W.f6.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[P.k]},
$ar:function(){return[P.k]},
$ii:1,
$ai:function(){return[P.k]},
$in:1,
$an:function(){return[P.k]}}
W.f7.prototype={
gl:function(a){return a.length}}
W.iY.prototype={
gl:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var u=this.ia(this)
return new J.a6(u,u.length)},
$ar:function(){return[W.S]},
$ai:function(){return[W.S]},
$an:function(){return[W.S]}}
W.S.prototype={
gh7:function(a){return new W.j0(a)},
gbQ:function(a){return new W.iY(a,a.children)},
gcX:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.S()
if(s<0)s=-s*0
if(typeof r!=="number")return r.S()
if(r<0)r=-r*0
return new P.a9(u,t,s,r,[P.aa])},
h:function(a){return a.localName},
a8:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.l7
if(u==null){u=H.c([],[W.aG])
t=new W.d8(u)
u.push(W.lG(null))
u.push(W.lI())
$.l7=t
d=t}else d=u
u=$.l6
if(u==null){u=new W.eq(d)
$.l6=u
c=u}else{u.a=d
c=u}}if($.az==null){u=document
t=u.implementation.createHTMLDocument("")
$.az=t
$.kk=t.createRange()
s=$.az.createElement("base")
s.href=u.baseURI
$.az.head.appendChild(s)}u=$.az
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.az
if(!!this.$ibi)r=u.body
else{r=u.createElement(a.tagName)
$.az.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.U(C.U,a.tagName)){$.kk.selectNodeContents(r)
q=$.kk.createContextualFragment(b)}else{r.innerHTML=b
q=$.az.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.az.body
if(r==null?u!=null:r!==u)J.kX(r)
c.cf(q)
document.adoptNode(q)
return q},
hg:function(a,b,c){return this.a8(a,b,c,null)},
dY:function(a,b){a.textContent=null
a.appendChild(this.a8(a,b,null,null))},
$iS:1,
gdM:function(a){return a.tagName}}
W.fb.prototype={
$1:function(a){return!!J.N(a).$iS}}
W.h.prototype={$ih:1}
W.f.prototype={
fY:function(a,b,c,d){if(c!=null)this.el(a,b,c,!1)},
el:function(a,b,c,d){return a.addEventListener(b,H.bE(c,1),!1)}}
W.ao.prototype={$iao:1}
W.bP.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.ao]},
$ar:function(){return[W.ao]},
$ii:1,
$ai:function(){return[W.ao]},
$in:1,
$an:function(){return[W.ao]},
$ibP:1}
W.fh.prototype={
gl:function(a){return a.length}}
W.fl.prototype={
gl:function(a){return a.length}}
W.aB.prototype={$iaB:1}
W.fr.prototype={
gl:function(a){return a.length}}
W.bR.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.E]},
$ar:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]}}
W.aC.prototype={$iaC:1,
gcZ:function(a){return a.data}}
W.bS.prototype={$ibS:1}
W.bq.prototype={$ibq:1}
W.fI.prototype={
h:function(a){return String(a)}}
W.h2.prototype={
gl:function(a){return a.length}}
W.bZ.prototype={$ibZ:1}
W.h3.prototype={
i:function(a,b){return P.aO(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aO(u.value[1]))}},
ga3:function(a){var u=H.c([],[P.k])
this.F(a,new W.h4(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iP:1,
$aP:function(){return[P.k,null]}}
W.h4.prototype={
$2:function(a,b){return this.a.push(a)}}
W.h5.prototype={
i:function(a,b){return P.aO(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aO(u.value[1]))}},
ga3:function(a){var u=H.c([],[P.k])
this.F(a,new W.h6(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iP:1,
$aP:function(){return[P.k,null]}}
W.h6.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aF.prototype={$iaF:1}
W.h7.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aF]},
$ar:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]},
$in:1,
$an:function(){return[W.aF]}}
W.ar.prototype={$iar:1}
W.a1.prototype={
gaI:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.d(P.lq("No elements"))
if(t>1)throw H.d(P.lq("More than one element"))
return u.firstChild},
ao:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.b(t,b)
u.replaceChild(c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.cS(u,u.length)},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$ar:function(){return[W.E]},
$ai:function(){return[W.E]},
$an:function(){return[W.E]}}
W.E.prototype={
i_:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i3:function(a,b){var u,t
try{u=a.parentNode
J.mt(u,b,a)}catch(t){H.ab(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.e2(a):u},
fE:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.d7.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.E]},
$ar:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]}}
W.aH.prototype={$iaH:1,
gl:function(a){return a.length}}
W.hn.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aH]},
$ar:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$in:1,
$an:function(){return[W.aH]}}
W.hy.prototype={
i:function(a,b){return P.aO(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aO(u.value[1]))}},
ga3:function(a){var u=H.c([],[P.k])
this.F(a,new W.hz(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iP:1,
$aP:function(){return[P.k,null]}}
W.hz.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hB.prototype={
gl:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.hM.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aI]},
$ar:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]},
$in:1,
$an:function(){return[W.aI]}}
W.aJ.prototype={$iaJ:1}
W.hN.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aJ]},
$ar:function(){return[W.aJ]},
$ii:1,
$ai:function(){return[W.aJ]},
$in:1,
$an:function(){return[W.aJ]}}
W.aK.prototype={$iaK:1,
gl:function(a){return a.length}}
W.hR.prototype={
i:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga3:function(a){var u=H.c([],[P.k])
this.F(a,new W.hS(u))
return u},
gl:function(a){return a.length},
$iP:1,
$aP:function(){return[P.k,P.k]}}
W.hS.prototype={
$2:function(a,b){return this.a.push(a)}}
W.as.prototype={$ias:1}
W.dn.prototype={
a8:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bq(a,b,c,d)
u=W.mK("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a1(t).ao(0,new W.a1(u))
return t}}
W.hV.prototype={
a8:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bq(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.a8(u.createElement("table"),b,c,d)
u.toString
u=new W.a1(u)
s=u.gaI(u)
s.toString
u=new W.a1(s)
r=u.gaI(u)
t.toString
r.toString
new W.a1(t).ao(0,new W.a1(r))
return t}}
W.hW.prototype={
a8:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bq(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.a8(u.createElement("table"),b,c,d)
u.toString
u=new W.a1(u)
s=u.gaI(u)
t.toString
s.toString
new W.a1(t).ao(0,new W.a1(s))
return t}}
W.c9.prototype={$ic9:1}
W.aL.prototype={$iaL:1}
W.at.prototype={$iat:1}
W.hZ.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.at]},
$ar:function(){return[W.at]},
$ii:1,
$ai:function(){return[W.at]},
$in:1,
$an:function(){return[W.at]}}
W.i_.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aL]},
$ar:function(){return[W.aL]},
$ii:1,
$ai:function(){return[W.aL]},
$in:1,
$an:function(){return[W.aL]}}
W.i5.prototype={
gl:function(a){return a.length}}
W.aM.prototype={$iaM:1}
W.bv.prototype={$ibv:1}
W.i9.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aM]},
$ar:function(){return[W.aM]},
$ii:1,
$ai:function(){return[W.aM]},
$in:1,
$an:function(){return[W.aM]}}
W.ia.prototype={
gl:function(a){return a.length}}
W.bb.prototype={}
W.iy.prototype={
h:function(a){return String(a)}}
W.iQ.prototype={
gl:function(a){return a.length}}
W.bd.prototype={
ghj:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.x("deltaY is not supported"))},
ghi:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.x("deltaX is not supported"))},
$ibd:1}
W.ch.prototype={
fF:function(a,b){return a.requestAnimationFrame(H.bE(b,1))},
ex:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iZ.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.F]},
$ar:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]},
$in:1,
$an:function(){return[W.F]}}
W.dI.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.N(b)
if(!u.$ia9)return!1
return a.left===u.gbi(b)&&a.top===u.gbl(b)&&a.width===u.gaH(b)&&a.height===u.gaB(b)},
gG:function(a){return W.lH(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(a.width),C.d.gG(a.height))},
gaB:function(a){return a.height},
gaH:function(a){return a.width}}
W.j3.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aB]},
$ar:function(){return[W.aB]},
$ii:1,
$ai:function(){return[W.aB]},
$in:1,
$an:function(){return[W.aB]}}
W.e_.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.E]},
$ar:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]}}
W.jh.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aK]},
$ar:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]},
$in:1,
$an:function(){return[W.aK]}}
W.jl.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.as]},
$ar:function(){return[W.as]},
$ii:1,
$ai:function(){return[W.as]},
$in:1,
$an:function(){return[W.as]}}
W.iX.prototype={
F:function(a,b){var u,t,s,r,q
for(u=this.ga3(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.p)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga3:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.k])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.b(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aP:function(){return[P.k,P.k]}}
W.j0.prototype={
i:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga3(this).length}}
W.j1.prototype={}
W.j2.prototype={
$1:function(a){return this.a.$1(a)}}
W.ci.prototype={
ed:function(a){var u
if($.cj.ghE($.cj)){for(u=0;u<262;++u)$.cj.m(0,C.T[u],W.oC())
for(u=0;u<12;++u)$.cj.m(0,C.o[u],W.oD())}},
aO:function(a){return $.mp().U(0,W.bN(a))},
ap:function(a,b,c){var u=$.cj.i(0,H.e(W.bN(a))+"::"+b)
if(u==null)u=$.cj.i(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaG:1}
W.G.prototype={
gV:function(a){return new W.cS(a,this.gl(a))}}
W.d8.prototype={
aO:function(a){return C.b.cT(this.a,new W.hf(a))},
ap:function(a,b,c){return C.b.cT(this.a,new W.he(a,b,c))},
$iaG:1}
W.hf.prototype={
$1:function(a){return a.aO(this.a)}}
W.he.prototype={
$1:function(a){return a.ap(this.a,this.b,this.c)}}
W.e7.prototype={
eg:function(a,b,c,d){var u,t,s
this.a.ao(0,c)
u=b.bn(0,new W.je())
t=b.bn(0,new W.jf())
this.b.ao(0,u)
s=this.c
s.ao(0,C.w)
s.ao(0,t)},
aO:function(a){return this.a.U(0,W.bN(a))},
ap:function(a,b,c){var u=this,t=W.bN(a),s=u.c
if(s.U(0,H.e(t)+"::"+b))return u.d.h1(c)
else if(s.U(0,"*::"+b))return u.d.h1(c)
else{s=u.b
if(s.U(0,H.e(t)+"::"+b))return!0
else if(s.U(0,"*::"+b))return!0
else if(s.U(0,H.e(t)+"::*"))return!0
else if(s.U(0,"*::*"))return!0}return!1},
$iaG:1}
W.je.prototype={
$1:function(a){return!C.b.U(C.o,a)}}
W.jf.prototype={
$1:function(a){return C.b.U(C.o,a)}}
W.jn.prototype={
ap:function(a,b,c){if(this.e5(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.U(0,b)
return!1}}
W.jo.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jm.prototype={
aO:function(a){var u=J.N(a)
if(!!u.$ic6)return!1
u=!!u.$ij
if(u&&W.bN(a)==="foreignObject")return!1
if(u)return!0
return!1},
ap:function(a,b,c){if(b==="is"||C.a.a2(b,"on"))return!1
return this.aO(a)},
$iaG:1}
W.cS.prototype={
w:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cC(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gJ:function(a){return this.d}}
W.aG.prototype={}
W.jc.prototype={}
W.eq.prototype={
cf:function(a){new W.jy(this).$2(a,null)},
aV:function(a,b){if(b==null)J.kX(a)
else b.removeChild(a)},
fK:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mx(a)
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
try{t=J.a2(a)}catch(r){H.ab(r)}try{s=W.bN(a)
this.fJ(a,b,p,t,s,o,n)}catch(r){if(H.ab(r) instanceof P.ag)throw r
else{this.aV(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fJ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aV(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aO(a)){p.aV(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.ap(a,"is",g)){p.aV(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga3(f)
t=H.c(u.slice(0),[H.cz(u,0)])
for(s=f.ga3(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.b(t,s)
r=t[s]
if(!p.a.ap(a,J.mA(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.N(a).$ic9)p.cf(a.content)}}
W.jy.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fK(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aV(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ab(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dH.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.co.prototype={}
W.cp.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ed.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.cq.prototype={}
W.cr.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
P.ji.prototype={
df:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
cd:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.N(a)
if(!!u.$ia7)return new Date(a.a)
if(!!u.$ind)throw H.d(P.ip("structured clone of RegExp"))
if(!!u.$iao)return a
if(!!u.$ibh)return a
if(!!u.$ibP)return a
if(!!u.$iaC)return a
if(!!u.$ic_||!!u.$ib4||!!u.$ibZ)return a
if(!!u.$iP){t=p.df(a)
s=p.b
r=s.length
if(t>=r)return H.b(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.b(s,t)
s[t]=q
u.F(a,new P.jk(o,p))
return o.a}if(!!u.$in){t=p.df(a)
o=p.b
if(t>=o.length)return H.b(o,t)
q=o[t]
if(q!=null)return q
return p.hf(a,t)}throw H.d(P.ip("structured clone of other type"))},
hf:function(a,b){var u,t=J.cw(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.b(q,b)
q[b]=r
for(u=0;u<s;++u){q=this.cd(t.i(a,u))
if(u>=r.length)return H.b(r,u)
r[u]=q}return r}}
P.jk.prototype={
$2:function(a,b){this.a.a[a]=this.b.cd(b)},
$S:3}
P.en.prototype={$iaC:1,
gcZ:function(a){return this.a}}
P.jJ.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jj.prototype={}
P.fi.prototype={
gba:function(){var u=this.b,t=H.kK(u,"r",0)
return new H.fN(new H.cg(u,new P.fj(),[t]),new P.fk(),[t,W.S])},
m:function(a,b,c){var u=this.gba()
J.my(u.b.$1(J.eE(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.ac(this.gba().a)},
i:function(a,b){var u=this.gba()
return u.b.$1(J.eE(u.a,b))},
gV:function(a){var u=P.lb(this.gba(),!1,W.S)
return new J.a6(u,u.length)},
$ar:function(){return[W.S]},
$ai:function(){return[W.S]},
$an:function(){return[W.S]}}
P.fj.prototype={
$1:function(a){return!!J.N(a).$iS}}
P.fk.prototype={
$1:function(a){return H.o(a,"$iS")}}
P.j8.prototype={
gcb:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.w(t)
return u+t},
gcW:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.w(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.N(b)
if(!!u.$ia9){t=q.a
if(t==u.gbi(b)){s=q.b
if(s==u.gbl(b)){r=q.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.w(r)
if(t+r===u.gcb(b)){t=q.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.w(t)
u=s+t===u.gcW(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u=this,t=u.a,s=J.cD(t),r=u.b,q=J.cD(r),p=u.c
if(typeof t!=="number")return t.B()
if(typeof p!=="number")return H.w(p)
p=C.c.gG(t+p)
t=u.d
if(typeof r!=="number")return r.B()
if(typeof t!=="number")return H.w(t)
t=C.c.gG(r+t)
return P.nB(P.j5(P.j5(P.j5(P.j5(0,s),q),p),t))}}
P.a9.prototype={
gbi:function(a){return this.a},
gbl:function(a){return this.b},
gaH:function(a){return this.c},
gaB:function(a){return this.d}}
P.b1.prototype={$ib1:1}
P.fB.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){return this.i(a,b)},
$ar:function(){return[P.b1]},
$ii:1,
$ai:function(){return[P.b1]},
$in:1,
$an:function(){return[P.b1]}}
P.b6.prototype={$ib6:1}
P.hi.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){return this.i(a,b)},
$ar:function(){return[P.b6]},
$ii:1,
$ai:function(){return[P.b6]},
$in:1,
$an:function(){return[P.b6]}}
P.hq.prototype={
gl:function(a){return a.length}}
P.c6.prototype={$ic6:1}
P.hU.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){return this.i(a,b)},
$ar:function(){return[P.k]},
$ii:1,
$ai:function(){return[P.k]},
$in:1,
$an:function(){return[P.k]}}
P.j.prototype={
gbQ:function(a){return new P.fi(a,new W.a1(a))},
a8:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.aG])
p.push(W.lG(null))
p.push(W.lI())
p.push(new W.jm())
c=new W.eq(new W.d8(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.q).hg(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a1(s)
q=p.gaI(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ij:1}
P.ba.prototype={$iba:1}
P.ib.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){return this.i(a,b)},
$ar:function(){return[P.ba]},
$ii:1,
$ai:function(){return[P.ba]},
$in:1,
$an:function(){return[P.ba]}}
P.dS.prototype={}
P.dT.prototype={}
P.e2.prototype={}
P.e3.prototype={}
P.ee.prototype={}
P.ef.prototype={}
P.el.prototype={}
P.em.prototype={}
P.bw.prototype={$ii:1,
$ai:function(){return[P.v]},
$in:1,
$an:function(){return[P.v]}}
P.eJ.prototype={
gl:function(a){return a.length}}
P.eK.prototype={
i:function(a,b){return P.aO(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aO(u.value[1]))}},
ga3:function(a){var u=H.c([],[P.k])
this.F(a,new P.eL(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iP:1,
$aP:function(){return[P.k,null]}}
P.eL.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eM.prototype={
gl:function(a){return a.length}}
P.bg.prototype={}
P.hj.prototype={
gl:function(a){return a.length}}
P.dG.prototype={}
P.de.prototype={
i8:function(a,b,c,d,e,f,g){var u,t=J.N(g)
if(!!t.$iaC)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.os(g))
return}if(!!t.$ibS)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.cE("Incorrect number or type of arguments"))}}
P.hP.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return P.aO(a.item(b))},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){return this.i(a,b)},
$ar:function(){return[[P.P,,,]]},
$ii:1,
$ai:function(){return[[P.P,,,]]},
$in:1,
$an:function(){return[[P.P,,,]]}}
P.ea.prototype={}
P.eb.prototype={}
T.ax.prototype={
aC:function(a,b){return!0},
h:function(a){return"all"}}
T.cT.prototype={
aC:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)if(u[s].aC(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.p)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.b2.prototype={}
T.a3.prototype={
aC:function(a,b){return!this.e1(0,b)},
h:function(a){return"!["+this.cj(0)+"]"}}
T.ht.prototype={
aC:function(a,b){return this.a<=b&&this.b>=b},
h:function(a){var u=H.bt(this.a),t=H.bt(this.b)
return u+".."+t}}
T.hC.prototype={
e9:function(a){var u,t
if(a.a.length<=0)throw H.d(P.u("May not create a Set with zero characters."))
u=new H.M([P.v,P.aw])
for(t=new H.bV(a,a.gl(a));t.w();)u.m(0,t.d,!0)
this.a=u},
aC:function(a,b){return this.a.be(0,b)},
h:function(a){var u=this.a
return P.c8(u.ga3(u),0,null)}}
R.dk.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.dw(this.a.j(0,b))
r.a=H.c([],[T.b2])
r.c=!1
this.c.push(r)
return r},
hu:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
if(r.aC(0,a))return r}return},
h:function(a){return this.b}}
R.dt.prototype={
h:function(a){var u=H.kQ(this.b,"\n","\\n"),t=H.kQ(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.du.prototype={
aE:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.p)(c),++t){s=c[t]
this.c.m(0,s,b)}},
h:function(a){return this.b}}
R.i6.prototype={
j:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.dk(this,b)
u.c=H.c([],[R.dw])
this.a.m(0,b,u)}return u},
O:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.du(a)
u=P.k
t.c=new H.M([u,u])
this.b.m(0,a,t)}return t},
dQ:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.c([],[R.dt]),k=this.c,j=[P.v],i=H.c([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)l.push(t)
return l}r=C.a.C(a,s)
q=k.hu(r)
if(q==null){if(t==null){i.push(r)
p=P.c8(i,0,m)
throw H.d(P.u("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}l.push(t)
s=t.c+1
i=H.c([],j)
k=this.c
t=m}else{if(!q.c)i.push(r)
k=q.b
if(k.d!=null){p=P.c8(i,0,m)
o=k.d
n=o.c.i(0,p)
t=new R.dt(n==null?o.b:n,p,s)}++s}}}}
R.dw.prototype={
h:function(a){return this.b.b+": "+this.cj(0)}}
O.aW.prototype={
br:function(a){this.a=H.c([],[a])
this.c=this.b=null},
cg:function(a,b,c){this.b=b
this.c=a},
b6:function(a,b){return this.cg(a,null,b)},
fl:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
ec:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.a6(u,u.length)},
H:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.kK(s,"aW",0)]
if(s.fl(H.c([b],r))){u=s.a
t=u.length
u.push(b)
s.ec(t,H.c([b],r))}},
$ii:1}
O.bY.prototype={
gl:function(a){return this.a.length},
gv:function(){var u=this.b
return u==null?this.b=D.L():u},
aJ:function(){var u=this.b
if(u!=null)u.I(null)},
ga1:function(a){var u=this.a
if(u.length>0)return C.b.gar(u)
else return V.d3()},
dG:function(a){var u=this.a
if(a==null)u.push(V.d3())
else u.push(a)
this.aJ()},
c6:function(){var u=this.a
if(u.length>0){u.pop()
this.aJ()}}}
E.eP.prototype={}
E.aA.prototype={
saf:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().K(0,s.gdA())
u=s.c
if(u!=null)u.gv().n(0,s.gdA())
t=new D.B("shape",r,s.c)
t.b=!0
s.aD(t)}},
saa:function(a){var u,t,s=this
if(!J.C(s.r,a)){u=s.r
if(u!=null)u.gv().K(0,s.gdw())
if(a!=null)a.gv().n(0,s.gdw())
s.r=a
t=new D.B("mover",u,a)
t.b=!0
s.aD(t)}},
aG:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.at(0,b,s):null
if(!J.C(q,s.x)){u=s.x
s.x=q
t=new D.B("matrix",u,q)
t.b=!0
s.aD(t)}for(r=s.y.a,r=new J.a6(r,r.length);r.w();)r.d.aG(0,b)},
aQ:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.ga1(s))
else s.a.push(r.A(0,s.ga1(s)))
s.aJ()
a.dH(t.f)
s=a.dy
u=(s&&C.b).gar(s)
if(u!=null&&t.d!=null)u.i2(a,t)
for(s=t.y.a,s=new J.a6(s,s.length);s.w();)s.d.aQ(a)
a.dF()
a.dx.c6()},
aD:function(a){var u=this.z
if(u!=null)u.I(a)},
Z:function(){return this.aD(null)},
dB:function(a){this.e=null
this.aD(a)},
hQ:function(){return this.dB(null)},
dz:function(a){this.aD(a)},
hP:function(){return this.dz(null)},
dv:function(a){this.aD(a)},
hM:function(){return this.dv(null)},
hL:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdu(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bm()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.Z()},
hO:function(a,b){var u,t
for(u=b.gV(b),t=this.gdu();u.w();)u.gJ(u).gv().K(0,t)
this.Z()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hu.prototype={
e8:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a7(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bY()
t=[V.aE]
u.a=H.c([],t)
u.gv().n(0,new E.hv(s))
s.cy=u
u=new O.bY()
u.a=H.c([],t)
u.gv().n(0,new E.hw(s))
s.db=u
u=new O.bY()
u.a=H.c([],t)
u.gv().n(0,new E.hx(s))
s.dx=u
u=H.c([],[O.dp])
s.dy=u
u.push(null)
s.fr=new H.M([P.k,A.dg])},
ghZ:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga1(s)
u=t.db
u=t.z=s.A(0,u.ga1(u))
s=u}return s},
dH:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gar(u):a)},
dF:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.hv.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hw.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hx.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dl.prototype={}
E.dr.prototype={
co:function(a){this.dK()},
cn:function(){return this.co(null)},
ghz:function(){var u,t=this,s=Date.now(),r=C.c.a5(P.l5(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a7(s,!1)
return u/r},
cI:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.A()
if(typeof r!=="number")return H.w(r)
u=C.d.c_(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.A()
t=C.d.c_(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lt(C.m,s.gi4())}},
dK:function(){if(!this.cx){this.cx=!0
var u=window
C.D.ex(u)
C.D.fF(u,W.lT(new E.i4(this),P.aa))}},
i1:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cI()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a7(r,!1)
s.y=P.l5(r-s.r.a).a*0.000001
r=s.cy
C.b.sl(r.a,0)
r.aJ()
r=s.db
C.b.sl(r.a,0)
r.aJ()
r=s.dx
C.b.sl(r.a,0)
r.aJ()
r=s.dy;(r&&C.b).sl(r,0)
s.dy.push(null)
o.aQ(p.e)}s=p.Q
if(s!=null)s.I(null)}catch(q){u=H.ab(q)
t=H.kL(q)
P.kP("Error: "+H.e(u))
P.kP("Stack: "+H.e(t))
throw H.d(u)}}}
E.i4.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.i1()}}}
Z.dE.prototype={}
Z.cG.prototype={
bM:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ab(s)
t=P.u('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.d(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.iR.prototype={}
Z.cH.prototype={
aP:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bM:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bM(a)},
ie:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aQ:function(a){var u,t,s,r,q,p=this.b.length
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
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a2(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.k(p,", ")+"\nAttrs:   "+C.b.k(r,", ")}}
Z.bn.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.c5(this.c))+"'")+"]"}}
Z.aN.prototype={
gci:function(a){var u=this.a,t=(u&$.aS().a)!==0?3:0
if((u&$.aR().a)!==0)t+=3
if((u&$.aQ().a)!==0)t+=3
if((u&$.aT().a)!==0)t+=2
if((u&$.bf().a)!==0)t+=3
if((u&$.cA().a)!==0)t+=3
if((u&$.cB().a)!==0)t+=4
if((u&$.bI().a)!==0)++t
return(u&$.aP().a)!==0?t+4:t},
h2:function(a){var u,t=$.aS(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aR()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aQ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aT()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bf()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cA()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cB()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bI()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aP()
if((s&t.a)!==0)if(u===a)return t
return $.mn()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aN))return!1
return this.a===b.a},
h:function(a){var u=H.c([],[P.k]),t=this.a
if((t&$.aS().a)!==0)u.push("Pos")
if((t&$.aR().a)!==0)u.push("Norm")
if((t&$.aQ().a)!==0)u.push("Binm")
if((t&$.aT().a)!==0)u.push("Txt2D")
if((t&$.bf().a)!==0)u.push("TxtCube")
if((t&$.cA().a)!==0)u.push("Clr3")
if((t&$.cB().a)!==0)u.push("Clr4")
if((t&$.bI().a)!==0)u.push("Weight")
if((t&$.aP().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.k(u,"|")}}
D.eS.prototype={}
D.bm.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.c([],[{func:1,ret:-1,args:[D.W]}]):u).push(b)},
K:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.U(s,b)
if(s===!0){s=t.a
u=(s&&C.b).K(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.U(s,b)
if(s===!0){s=t.b
u=(s&&C.b).K(s,b)||u}return u},
I:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.b.F(P.lb(u,!0,{func:1,ret:-1,args:[D.W]}),new D.fe(q))
u=r.b
if(u!=null){r.b=H.c([],[{func:1,ret:-1,args:[D.W]}])
C.b.F(u,new D.ff(q))}return!0},
hp:function(){return this.I(null)},
ac:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.I(u)}}}}
D.fe.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.ff.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.W.prototype={}
D.bo.prototype={}
D.bp.prototype={}
D.B.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cI.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cI))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.cY.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cY))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.fA.prototype={
hV:function(a){this.d.n(0,a.a)
return!1},
hR:function(a){this.d.K(0,a.a)
return!1}}
X.d1.prototype={}
X.fJ.prototype={
aT:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.A()
u=b.b
t=q.ch
if(typeof u!=="number")return u.A()
s=new V.a4(o.a+n*m,o.b+u*t)
t=q.a.gbd()
r=new X.b3(a,V.b7(),q.x,t,s)
r.b=!0
q.z=new P.a7(p,!1)
q.x=s
return r},
c5:function(a,b){this.r=a.a
return!1},
b3:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dX()
if(typeof u!=="number")return u.ae()
this.r=(u&~t)>>>0
return!1},
b2:function(a,b){var u=this.d
if(u==null)return!1
u.I(this.aT(a,b))
return!0},
hW:function(a){return!1},
fa:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.d1(c,r.a.gbd(),b)
s.b=!0
t.I(s)
r.y=new P.a7(u,!1)
r.x=V.b7()}}
X.br.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.br))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b3.prototype={}
X.h8.prototype={
bx:function(a,b,c){var u=this,t=new P.a7(Date.now(),!1),s=u.a.gbd(),r=new X.b3(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c5:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.I(this.bx(a,b,!0))
return!0},
b3:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dX()
if(typeof t!=="number")return t.ae()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.I(u.bx(a,b,!0))
return!0},
b2:function(a,b){var u=this.d
if(u==null)return!1
u.I(this.bx(a,b,!1))
return!0},
hX:function(a,b){return!1}}
X.hp.prototype={}
X.dv.prototype={}
X.i8.prototype={
aT:function(a,b){var u=this,t=new P.a7(Date.now(),!1),s=a.length>0?a[0]:V.b7(),r=u.a.gbd(),q=new X.dv(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hU:function(a){var u=this.b
if(u==null)return!1
u.I(this.aT(a,!0))
return!0},
hS:function(a){var u=this.c
if(u==null)return!1
u.I(this.aT(a,!0))
return!0},
hT:function(a){var u=this.d
if(u==null)return!1
u.I(this.aT(a,!1))
return!0}}
X.dB.prototype={
gbd:function(){var u=this.a,t=C.i.gcX(u).c
t.toString
u=C.i.gcX(u).d
u.toString
return V.ln(0,0,t,u)},
cz:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cY(u,new X.br(t,a.altKey,a.shiftKey))},
aM:function(a){a.shiftKey},
bI:function(a){a.shiftKey},
ay:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.P()
u=t.top
if(typeof r!=="number")return r.P()
return new V.a4(s-q,r-u)},
aU:function(a){return new V.R(a.movementX,a.movementY)},
bD:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a4])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
q=C.d.ai(r.pageX)
C.d.ai(r.pageY)
p=o.left
C.d.ai(r.pageX)
n.push(new V.a4(q-p,C.d.ai(r.pageY)-o.top))}return n},
aw:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cI(u,new X.br(t,a.altKey,a.shiftKey))},
bz:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.P()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.P()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
f4:function(a){this.f=!0},
eT:function(a){this.f=!1},
eZ:function(a){if(this.f&&this.bz(a))a.preventDefault()},
f8:function(a){var u
if(!this.f)return
u=this.cz(a)
this.b.hV(u)},
f6:function(a){var u
if(!this.f)return
u=this.cz(a)
this.b.hR(u)},
fc:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aM(a)
if(r.x){u=r.aw(a)
t=r.aU(a)
if(r.d.c5(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.aw(a)
s=r.ay(a)
if(r.c.c5(u,s))a.preventDefault()},
fg:function(a){var u,t,s,r=this
r.aM(a)
u=r.aw(a)
if(r.x){t=r.aU(a)
if(r.d.b3(u,t))a.preventDefault()
return}if(r.r)return
s=r.ay(a)
if(r.c.b3(u,s))a.preventDefault()},
f2:function(a){var u,t,s,r=this
if(!r.bz(a)){r.aM(a)
u=r.aw(a)
if(r.x){t=r.aU(a)
if(r.d.b3(u,t))a.preventDefault()
return}if(r.r)return
s=r.ay(a)
if(r.c.b3(u,s))a.preventDefault()}},
fe:function(a){var u,t,s,r=this
r.aM(a)
u=r.aw(a)
if(r.x){t=r.aU(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(r.r)return
s=r.ay(a)
if(r.c.b2(u,s))a.preventDefault()},
f0:function(a){var u,t,s,r=this
if(!r.bz(a)){r.aM(a)
u=r.aw(a)
if(r.x){t=r.aU(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(r.r)return
s=r.ay(a)
if(r.c.b2(u,s))a.preventDefault()}},
fi:function(a){var u,t,s=this
s.aM(a)
u=new V.R((a&&C.C).ghi(a),C.C.ghj(a)).t(0,180)
if(s.x){if(s.d.hW(u))a.preventDefault()
return}if(s.r)return
t=s.ay(a)
if(s.c.hX(u,t))a.preventDefault()},
fk:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aw(s.y)
t=s.ay(s.y)
s.d.fa(u,t,r)}},
fA:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bI(a)
u=t.bD(a)
if(t.e.hU(u))a.preventDefault()},
fu:function(a){var u
this.bI(a)
u=this.bD(a)
if(this.e.hS(u))a.preventDefault()},
fw:function(a){var u
this.bI(a)
u=this.bD(a)
if(this.e.hT(u))a.preventDefault()}}
D.bk.prototype={
au:function(a){var u=this.r
if(u!=null)u.I(a)},
ee:function(){return this.au(null)},
saa:function(a){var u,t,s=this
if(!J.C(s.b,a)){u=s.b
if(u!=null)u.gv().K(0,s.gcp())
t=s.b
s.b=a
if(a!=null)a.gv().n(0,s.gcp())
u=new D.B("mover",t,s.b)
u.b=!0
s.au(u)}},
sah:function(a,b){var u,t,s=this
if(b==null)b=new V.T(1,1,1)
if(!s.c.p(0,b)){u=s.c
s.c=b
t=new D.B("color",u,b)
t.b=!0
s.au(t)}},
$ia8:1}
D.a8.prototype={}
D.cZ.prototype={
au:function(a){var u=this.x
if(u!=null)u.I(a)},
cG:function(a){var u=this.y
if(u!=null)u.I(a)},
f9:function(){return this.cG(null)},
fn:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){s=a[t]
if(s==null||this.er(s))return!1}return!0},
eN:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcF(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q instanceof D.bk)this.e.push(q)
p=q.r
if(p==null){p=new D.bm()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}u=new D.bo()
u.b=!0
this.au(u)},
fs:function(a,b){var u,t,s
for(u=b.gV(b),t=this.gcF();u.w();){s=u.gJ(u)
C.b.K(this.e,s)
s.gv().K(0,t)}u=new D.bp()
u.b=!0
this.au(u)},
er:function(a){var u=C.b.U(this.e,a)
return u},
$ai:function(){return[D.a8]},
$aaW:function(){return[D.a8]}}
D.ho.prototype={$ia8:1}
D.hO.prototype={$ia8:1}
V.T.prototype={
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
V.am.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.am))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.fd.prototype={}
V.bX.prototype={
ad:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.K])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bX))return!1
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
h:function(a){var u,t,s,r,q=this,p=[P.K],o=V.bG(H.c([q.a,q.d,q.r],p),3,0),n=V.bG(H.c([q.b,q.e,q.x],p),3,0),m=V.bG(H.c([q.c,q.f,q.y],p),3,0)
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
V.aE.prototype={
ad:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.K])
return t},
dm:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.z().a)return V.d3()
u=1/b1
t=-n
s=-a0
return V.aq((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
A:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aq(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bm:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.y(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cc:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.U(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aE))return!1
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
h:function(a){return this.N()},
E:function(a){var u,t,s,r,q,p=this,o=[P.K],n=V.bG(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bG(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bG(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bG(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
N:function(){return this.E("")}}
V.a4.prototype={
P:function(a,b){return new V.a4(this.a-b.a,this.b-b.b)},
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
V.U.prototype={
B:function(a,b){return new V.U(this.a+b.a,this.b+b.b,this.c+b.c)},
P:function(a,b){return new V.U(this.a-b.a,this.b-b.b,this.c-b.c)},
A:function(a,b){return new V.U(this.a*b,this.b*b,this.c*b)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.b8.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b8))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.dd.prototype={
gas:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dd))return!1
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
c3:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.w(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.w(t)
return s*r+u*t},
A:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.A()
u=this.b
if(typeof u!=="number")return u.A()
return new V.R(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.z().a){u=$.lB
return u==null?$.lB=new V.R(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.R(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=this.a
s=$.z()
s.toString
if(typeof u!=="number")return u.P()
if(typeof t!=="number")return H.w(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.P()
if(typeof t!=="number")return H.w(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.y.prototype={
c3:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c4:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.y(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
az:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.y(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.y(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.y(-this.a,-this.b,-this.c)},
A:function(a,b){return new V.y(this.a*b,this.b*b,this.c*b)},
t:function(a,b){if(Math.abs(b-0)<$.z().a)return V.cf()
return new V.y(this.a/b,this.b/b,this.c/b)},
dn:function(){var u=$.z().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.y))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
U.eU.prototype={
bs:function(a){var u=V.kc(a,this.c,this.b)
return u},
gv:function(){var u=this.y
return u==null?this.y=D.L():u},
R:function(a){var u=this.y
if(u!=null)u.I(a)},
sdT:function(a,b){},
sdq:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.z().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bs(u)}s=new D.B("maximumLocation",s,t.b)
s.b=!0
t.R(s)}},
sds:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.z().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bs(u)}s=new D.B("minimumLocation",s,t.c)
s.b=!0
t.R(s)}},
sa0:function(a,b){var u,t=this
b=t.bs(b)
u=t.d
if(!(Math.abs(u-b)<$.z().a)){t.d=b
u=new D.B("location",u,b)
u.b=!0
t.R(u)}},
sdr:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.z().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.B("maximumVelocity",r,a)
r.b=!0
s.R(r)}},
sY:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.z().a)){u.f=a
t=new D.B("velocity",t,a)
t.b=!0
u.R(t)}},
scY:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.z().a)){this.x=a
u=new D.B("dampening",u,a)
u.b=!0
this.R(u)}},
aG:function(a,b){var u,t,s,r=this,q=r.f,p=$.z().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa0(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.z().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sY(u)}}}
U.cK.prototype={
gv:function(){var u=this.b
return u==null?this.b=D.L():u},
at:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cK))return!1
return J.C(this.a,b.a)},
h:function(a){return"Constant: "+this.a.E("          ")}}
U.bQ.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.L():u},
R:function(a){var u=this.e
if(u!=null)u.I(a)},
al:function(){return this.R(null)},
eL:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gb8(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.gv()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.bo()
u.b=!0
this.R(u)},
fp:function(a,b){var u,t
for(u=b.gV(b),t=this.gb8();u.w();)u.gJ(u).gv().K(0,t)
u=new D.bp()
u.b=!0
this.R(u)},
at:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.S()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a6(r,r.length),u=null;r.w();){q=r.d
if(q!=null){t=q.at(0,b,c)
if(t!=null)u=u==null?t:t.A(0,u)}}s.f=u==null?V.d3():u
r=s.e
if(r!=null)r.ac(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bQ))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.C(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ai:function(){return[U.ai]},
$aaW:function(){return[U.ai]},
$iai:1}
U.ai.prototype={}
U.df.prototype={
gv:function(){var u=this.y
return u==null?this.y=D.L():u},
R:function(a){var u=this.y
if(u!=null)u.I(a)},
sdU:function(a){var u
a=V.kc(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.z().a)){this.a=a
u=new D.B("yaw",u,a)
u.b=!0
this.R(u)}},
sdE:function(a,b){var u
b=V.kc(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.z().a)){this.b=b
u=new D.B("pitch",u,b)
u.b=!0
this.R(u)}},
sdL:function(a){var u
a=V.kc(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.z().a)){this.c=a
u=new D.B("roll",u,a)
u.b=!0
this.R(u)}},
at:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.sdU(s.a+s.d*b.y)
s.sdE(0,s.b+s.e*b.y)
s.sdL(s.c+s.f*b.y)
r=s.c
u=Math.cos(r)
t=Math.sin(r)
s.x=V.aq(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1).A(0,V.ld(s.b)).A(0,V.kt(s.a))
r=s.y
if(r!=null)r.ac(0)}return s.x},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.df))return!1
u=r.a
t=b.a
s=$.z().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
h:function(a){var u=this
return"Rotater: ["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+"], ["+V.D(u.d,3,0)+", "+V.D(u.e,3,0)+", "+V.D(u.f,3,0)+"]"}}
U.dC.prototype={
gv:function(){var u=this.fx
return u==null?this.fx=D.L():u},
R:function(a){var u=this.fx
if(u!=null)u.I(a)},
al:function(){return this.R(null)},
h3:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.L():t
u.n(0,s.geE())
u=s.a.c
t=u.d
u=t==null?u.d=D.L():t
u.n(0,s.geG())
u=s.a.c
t=u.c
u=t==null?u.c=D.L():t
u.n(0,s.geI())
u=s.a.d
t=u.f
u=t==null?u.f=D.L():t
u.n(0,s.gez())
u=s.a.d
t=u.d
u=t==null?u.d=D.L():t
u.n(0,s.geB())
u=s.a.e
t=u.b
u=t==null?u.b=D.L():t
u.n(0,s.gfV())
u=s.a.e
t=u.d
u=t==null?u.d=D.L():t
u.n(0,s.gfT())
u=s.a.e
t=u.c
u=t==null?u.c=D.L():t
u.n(0,s.gfR())
return!0},
an:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.T()
u=-u}if(this.r){if(typeof t!=="number")return t.T()
t=-t}return new V.R(u,t)},
eF:function(a){var u=this
H.o(a,"$ib3")
if(!J.C(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
eH:function(a){var u,t,s,r,q,p,o,n=this
H.o(a,"$ib3")
if(!n.cx)return
if(n.ch){u=a.d.P(0,a.y)
u=new V.R(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.w(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.P(0,a.y)
u=n.an(new V.R(t.a,t.b).A(0,2).t(0,u.gas()))
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
s=t.P(0,a.y)
r=n.an(new V.R(s.a,s.b).A(0,2).t(0,u.gas()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa0(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.P(0,a.z)
n.dx=n.an(new V.R(t.a,t.b).A(0,2).t(0,u.gas()))}n.al()},
eJ:function(a){var u,t,s,r=this
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
r.al()}},
eA:function(a){var u=this
if(H.o(a,"$id1").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eC:function(a){var u,t,s,r,q,p,o,n=this
H.o(a,"$ib3")
if(!J.C(n.d,a.x.b))return
u=a.c
t=a.d
s=t.P(0,a.y)
r=n.an(new V.R(s.a,s.b).A(0,2).t(0,u.gas()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa0(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.P(0,a.z)
n.dx=n.an(new V.R(t.a,t.b).A(0,2).t(0,u.gas()))
n.al()},
fW:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fU:function(a){var u,t,s,r,q,p,o,n=this
H.o(a,"$idv")
if(!n.cx)return
if(n.ch){u=a.d.P(0,a.y)
u=new V.R(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.w(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.P(0,a.y)
u=n.an(new V.R(t.a,t.b).A(0,2).t(0,u.gas()))
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
s=t.P(0,a.y)
r=n.an(new V.R(s.a,s.b).A(0,2).t(0,u.gas()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa0(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.P(0,a.z)
n.dx=n.an(new V.R(t.a,t.b).A(0,2).t(0,u.gas()))}n.al()},
fS:function(a){var u,t,s,r=this
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
r.al()}},
at:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.S()
if(s<r){t.dy=r
u=b.y
t.c.aG(0,u)
t.b.aG(0,u)
t.fr=V.kt(t.b.d).A(0,V.ld(t.c.d))}return t.fr},
$iai:1}
M.cQ.prototype={
av:function(a){var u=this.y
if(u!=null)u.I(a)},
ef:function(){return this.av(null)},
eV:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gam(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bm()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.bo()
u.b=!0
this.av(u)},
eX:function(a,b){var u,t
for(u=b.gV(b),t=this.gam();u.w();)u.gJ(u).gv().K(0,t)
u=new D.bp()
u.b=!0
this.av(u)},
sdN:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gv().K(0,t.gam())
u=t.d
t.d=a
if(a!=null)a.gv().n(0,t.gam())
s=new D.B("technique",u,t.d)
s.b=!0
t.av(s)}},
gv:function(){var u=this.y
return u==null?this.y=D.L():u},
aQ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=new E.dl(a)
e.b=!0
u=f.f
if(u!=null)u.I(e)
a.dH(f.d)
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
if(typeof s!=="number")return H.w(s)
o=C.d.ai(p*s)
p=q.b
if(typeof r!=="number")return H.w(r)
n=C.d.ai(p*r)
p=C.d.ai(q.c*s)
a.c=p
q=C.d.ai(q.d*r)
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
i=V.aq(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dG(i)
t=$.lh
if(t==null){t=V.lj()
q=V.kz()
p=$.lC
t=V.lc(t,q,p==null?$.lC=new V.y(0,0,-1):p)
$.lh=t
h=t}else h=t
t=u.b
if(t!=null){g=t.at(0,a,u)
if(g!=null)h=g.A(0,h)}a.db.dG(h)
u=f.d
if(u!=null)u.aG(0,a)
for(u=f.e.a,u=new J.a6(u,u.length);u.w();)u.d.aG(0,a)
for(u=f.e.a,u=new J.a6(u,u.length);u.w();)u.d.aQ(a)
f.b.toString
a.cy.c6()
a.db.c6()
f.c.toString
a.dF()}}
A.cF.prototype={}
A.eI.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hq:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hk:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.Z.prototype={
gaj:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
h:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof A.Z))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.fQ.prototype={
e7:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.Q("")
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
A.o9(c3,u)
A.ob(c3,u)
A.oa(c3,u)
A.od(c3,u)
A.oe(c3,u)
A.oc(c3,u)
A.of(c3,u)
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
m=A.o8(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cA(n,35633)
b8.f=b8.cA(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.t(P.u("Failed to link shader: "+H.e(l)))}b8.fN()
b8.fP()
b8.Q=b8.x.i(0,"posAttr")
b8.cx=b8.x.i(0,"normAttr")
b8.ch=b8.x.i(0,"binmAttr")
b8.cy=b8.x.i(0,"txt2DAttr")
b8.db=b8.x.i(0,"txtCubeAttr")
b8.dx=b8.x.i(0,"bendAttr")
if(c3.dx)b8.id=H.o(b8.y.L(0,"invViewMat"),"$iae")
if(t)b8.dy=H.o(b8.y.L(0,"objMat"),"$iae")
if(r)b8.fr=H.o(b8.y.L(0,"viewObjMat"),"$iae")
b8.fy=H.o(b8.y.L(0,"projViewObjMat"),"$iae")
if(c3.ry)b8.k1=H.o(b8.y.L(0,"txt2DMat"),"$icc")
if(c3.x1)b8.k2=H.o(b8.y.L(0,"txtCubeMat"),"$iae")
if(c3.x2)b8.k3=H.o(b8.y.L(0,"colorMat"),"$iae")
b8.r1=H.c([],[A.ae])
t=c3.y2
if(t>0){b8.k4=b8.y.L(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.i(0,q)
if(j==null)H.t(P.u(c0+q+c1))
s.push(H.o(j,"$iae"))}}t=c3.a
if(t.a)b8.r2=H.o(b8.y.L(0,"emissionClr"),"$iJ")
if(t.b)b8.rx=H.o(b8.y.L(0,"emissionTxt"),"$ia_")
t=c3.b
if(t.a)b8.x1=H.o(b8.y.L(0,"ambientClr"),"$iJ")
if(t.b)b8.x2=H.o(b8.y.L(0,"ambientTxt"),"$ia_")
t=c3.c
if(t.a)b8.y2=H.o(b8.y.L(0,"diffuseClr"),"$iJ")
if(t.b)b8.aA=H.o(b8.y.L(0,"diffuseTxt"),"$ia_")
t=c3.d
if(t.a)b8.d0=H.o(b8.y.L(0,"invDiffuseClr"),"$iJ")
if(t.b)b8.d1=H.o(b8.y.L(0,"invDiffuseTxt"),"$ia_")
t=c3.e
s=t.a
if(s||t.b||!1){b8.d4=H.o(b8.y.L(0,"shininess"),"$iY")
if(s)b8.d2=H.o(b8.y.L(0,"specularClr"),"$iJ")
if(t.b)b8.d3=H.o(b8.y.L(0,"specularTxt"),"$ia_")}if(c3.f.b)b8.d5=H.o(b8.y.L(0,"bumpTxt"),"$ia_")
if(c3.cy){b8.d6=H.o(b8.y.L(0,"envSampler"),"$ibx")
t=c3.r
if(t.a)b8.d7=H.o(b8.y.L(0,"reflectClr"),"$iJ")
if(t.b)b8.d8=H.o(b8.y.L(0,"reflectTxt"),"$ia_")
t=c3.x
s=t.a
if(s||t.b||!1){b8.d9=H.o(b8.y.L(0,"refraction"),"$iY")
if(s)b8.da=H.o(b8.y.L(0,"refractClr"),"$iJ")
if(t.b)b8.dc=H.o(b8.y.L(0,"refractTxt"),"$ia_")}}t=c3.y
if(t.a)b8.dd=H.o(b8.y.L(0,"alpha"),"$iY")
if(t.b)b8.de=H.o(b8.y.L(0,"alphaTxt"),"$ia_")
t=P.v
s=[t,A.dy]
b8.bT=new H.M(s)
b8.bU=new H.M([t,[P.n,A.cb]])
b8.bV=new H.M(s)
b8.bW=new H.M([t,[P.n,A.cd]])
b8.bX=new H.M(s)
b8.bY=new H.M([t,[P.n,A.ce]])
if(c3.id){for(t=c3.z,s=t.length,r=[A.cb],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ae()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.i(0,d)
if(j==null)H.t(P.u(c0+d+c1))
H.o(j,"$iJ")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.i(0,d)
if(c==null)H.t(P.u(c0+d+c1))
H.o(c,"$iJ")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.i(0,d)
if(b==null)H.t(P.u(c0+d+c1))
H.o(b,"$iJ")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.i(0,d)
if(j==null)H.t(P.u(c0+d+c1))
H.o(j,"$iJ")
o=b8.y
d=f+"s["+k+"].color"
c=o.i(0,d)
if(c==null)H.t(P.u(c0+d+c1))
H.o(c,"$iJ")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.i(0,o)
if(b==null)H.t(P.u(c0+o+c1))
H.o(b,"$ia_")
a2=b}else a2=b9
e.push(new A.cb(a1,a0,a,j,c,a2))}b8.bU.m(0,g,e)
q=b8.bT
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.u(c0+o+c1))
q.m(0,g,j)}for(t=c3.Q,s=t.length,r=[A.cd],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.i(0,o)
if(j==null)H.t(P.u(c0+o+c1))
H.o(j,"$iJ")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.i(0,o)
if(c==null)H.t(P.u(c0+o+c1))
H.o(c,"$iJ")
p=b8.y
o=f+"s["+k+"].color"
b=p.i(0,o)
if(b==null)H.t(P.u(c0+o+c1))
H.o(b,"$iJ")
if(typeof g!=="number")return g.ae()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.i(0,o)
if(a3==null)H.t(P.u(c0+o+c1))
H.o(a3,"$icc")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.i(0,o)
if(a3==null)H.t(P.u(c0+o+c1))
H.o(a3,"$ibx")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.i(0,o)
if(a3==null)H.t(P.u(c0+o+c1))
H.o(a3,"$ibx")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.i(0,o)
if(a5==null)H.t(P.u(c0+o+c1))
H.o(a5,"$ica")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.i(0,o)
if(a3==null)H.t(P.u(c0+o+c1))
H.o(a3,"$iY")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.i(0,o)
if(a5==null)H.t(P.u(c0+o+c1))
H.o(a5,"$iY")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.i(0,o)
if(a8==null)H.t(P.u(c0+o+c1))
H.o(a8,"$iY")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}e.push(new A.cd(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.bW.m(0,g,e)
q=b8.bV
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.u(c0+o+c1))
q.m(0,g,j)}for(t=c3.ch,s=t.length,r=[A.ce],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.i(0,o)
if(j==null)H.t(P.u(c0+o+c1))
H.o(j,"$iJ")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.i(0,o)
if(c==null)H.t(P.u(c0+o+c1))
H.o(c,"$iJ")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.i(0,o)
if(b==null)H.t(P.u(c0+o+c1))
H.o(b,"$iJ")
p=b8.y
o=f+"s["+k+"].color"
a3=p.i(0,o)
if(a3==null)H.t(P.u(c0+o+c1))
H.o(a3,"$iJ")
if(typeof g!=="number")return g.ae()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.i(0,o)
if(a5==null)H.t(P.u(c0+o+c1))
H.o(a5,"$iJ")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.i(0,o)
if(a8==null)H.t(P.u(c0+o+c1))
H.o(a8,"$iJ")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.i(0,o)
if(b2==null)H.t(P.u(c0+o+c1))
H.o(b2,"$iY")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.i(0,o)
if(b3==null)H.t(P.u(c0+o+c1))
H.o(b3,"$iY")
b4=b3
b5=b2
a0=a8
a1=a5}else{b4=b9
b5=b4
a0=b5
a1=a0}p=(g&2)!==0
if(p){o=b8.y
d=f+"s["+k+"].shadowAdj"
a5=o.i(0,d)
if(a5==null)H.t(P.u(c0+d+c1))
H.o(a5,"$ica")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.i(0,d)
if(a5==null)H.t(P.u(c0+d+c1))
H.o(a5,"$iY")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.i(0,d)
if(a8==null)H.t(P.u(c0+d+c1))
H.o(a8,"$iY")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.i(0,d)
if(a5==null)H.t(P.u(c0+d+c1))
H.o(a5,"$iY")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.i(0,d)
if(a8==null)H.t(P.u(c0+d+c1))
H.o(a8,"$iY")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.i(0,d)
if(b2==null)H.t(P.u(c0+d+c1))
H.o(b2,"$iY")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.i(0,d)
if(a5==null)H.t(P.u(c0+d+c1))
H.o(a5,"$ia_")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.i(0,o)
if(a5==null)H.t(P.u(c0+o+c1))
H.o(a5,"$ia_")
a6=a5}else a6=b9
e.push(new A.ce(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.bY.m(0,g,e)
q=b8.bX
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.u(c0+o+c1))
q.m(0,g,j)}}},
ag:function(a,b){if(b!=null&&b.d)a.dZ(b)},
fL:function(a,b){}}
A.cN.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.db.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.di.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.fT.prototype={
h:function(a){return this.aA}}
A.cb.prototype={}
A.cd.prototype={}
A.ce.prototype={}
A.dg.prototype={
ea:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cA:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.u("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fN:function(){var u,t,s,r=this,q=H.c([],[A.cF]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.w(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cF(p,t.name,s))}r.x=new A.eI(q)},
fP:function(){var u,t,s,r=this,q=H.c([],[A.dx]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.w(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hh(t.type,t.size,t.name,s))}r.y=new A.il(q)},
aL:function(a,b,c){var u=this.a
if(a===1)return new A.dy(u,b,c)
else return A.kw(u,this.r,b,a,c)},
eu:function(a,b,c){var u=this.a
if(a===1)return new A.a_(u,b,c)
else return A.kw(u,this.r,b,a,c)},
ev:function(a,b,c){var u=this.a
if(a===1)return new A.bx(u,b,c)
else return A.kw(u,this.r,b,a,c)},
bc:function(a,b){return new P.dN(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hh:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aL(b,c,d)
case 5121:return u.aL(b,c,d)
case 5122:return u.aL(b,c,d)
case 5123:return u.aL(b,c,d)
case 5124:return u.aL(b,c,d)
case 5125:return u.aL(b,c,d)
case 5126:return new A.Y(u.a,c,d)
case 35664:return new A.ih(u.a,c,d)
case 35665:return new A.J(u.a,c,d)
case 35666:return new A.ca(u.a,c,d)
case 35667:return new A.ii(u.a,c,d)
case 35668:return new A.ij(u.a,c,d)
case 35669:return new A.ik(u.a,c,d)
case 35674:return new A.im(u.a,c,d)
case 35675:return new A.cc(u.a,c,d)
case 35676:return new A.ae(u.a,c,d)
case 35678:return u.eu(b,c,d)
case 35680:return u.ev(b,c,d)
case 35670:throw H.d(u.bc("BOOL",c))
case 35671:throw H.d(u.bc("BOOL_VEC2",c))
case 35672:throw H.d(u.bc("BOOL_VEC3",c))
case 35673:throw H.d(u.bc("BOOL_VEC4",c))
default:throw H.d(P.u("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.dx.prototype={}
A.il.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
L:function(a,b){var u=this.i(0,b)
if(u==null)throw H.d(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.N()},
N:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.p)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.dy.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.ii.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.ij.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.ik.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.ig.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.Y.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.ih.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.J.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.ca.prototype={
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.im.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.cc.prototype={
ak:function(a){var u=new Float32Array(H.bB(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.ae.prototype={
ak:function(a){var u=new Float32Array(H.bB(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.a_.prototype={
dZ:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bx.prototype={
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jA.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c4(s.b,b).c4(s.d.c4(s.c,b),c)
a.sa0(0,new V.U(r.a,r.b,r.c))
a.sdO(r.t(0,Math.sqrt(r.D(r))))
s=1-b
u=1-c
a.scU(new V.b8(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.jK.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.jM.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.w(p)
s=-s*p
u=r*p
a.sa0(0,new V.U(s,u,q))
u=new V.y(s,u,q)
a.sdO(u.t(0,Math.sqrt(u.D(u))))
a.scU(new V.b8(1-c,2+c,-1,-1))}}
F.jN.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.jO.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.k6.prototype={
$2:function(a,b){return 0}}
F.k7.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.w(s)
u=a.f
t=new V.y(u.a,u.b,u.c)
s=t.t(0,Math.sqrt(t.D(t))).A(0,this.b+s)
a.sa0(0,new V.U(s.a,s.b,s.c))}}
F.ka.prototype={
$1:function(a){return new V.U(Math.cos(a),Math.sin(a),0)}}
F.jW.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.U(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.jL.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.kU(n.$1(o),m)
m=J.kU(n.$1(o+3.141592653589793/p.c),m).P(0,l)
m=new V.y(m.a,m.b,m.c)
u=m.t(0,Math.sqrt(m.D(m)))
n=$.lD
if(n==null){n=new V.y(1,0,0)
$.lD=n
t=n}else t=n
n=u.az(!J.C(u,t)?V.lF():t)
s=n.t(0,Math.sqrt(n.D(n)))
n=s.az(u)
t=n.t(0,Math.sqrt(n.D(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.A(0,n*m)
m=s.A(0,q*m)
a.sa0(0,l.B(0,new V.U(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.aY.prototype={
aY:function(){var u=this
if(!u.gaZ()){C.b.K(u.a.a.d.b,u)
u.a.a.Z()}u.bE()
u.bF()
u.fD()},
bJ:function(a){this.a=a
a.d.b.push(this)},
bK:function(a){this.b=a
a.d.c.push(this)},
fM:function(a){this.c=a
a.d.d.push(this)},
bE:function(){var u=this.a
if(u!=null){C.b.K(u.d.b,this)
this.a=null}},
bF:function(){var u=this.b
if(u!=null){C.b.K(u.d.c,this)
this.b=null}},
fD:function(){var u=this.c
if(u!=null){C.b.K(u.d.d,this)
this.c=null}},
gaZ:function(){return this.a==null||this.b==null||this.c==null},
en:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cf()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dn())return
return s.t(0,Math.sqrt(s.D(s)))},
ep:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.P(0,q)
r=new V.y(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.D(r)))
r=t.P(0,q)
r=new V.y(r.a,r.b,r.c)
r=s.az(r.t(0,Math.sqrt(r.D(r))))
return r.t(0,Math.sqrt(r.D(r)))},
bP:function(){var u,t=this
if(t.d!=null)return!0
u=t.en()
if(u==null){u=t.ep()
if(u==null)return!1}t.d=u
t.a.a.Z()
return!0},
em:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cf()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dn())return
return s.t(0,Math.sqrt(s.D(s)))},
eo:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.z().a){l=d.P(0,g)
l=new V.y(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.D(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.P(0,g).A(0,p).B(0,g).P(0,j)
l=new V.y(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.D(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.D(l)))
l=o.az(q)
l=l.t(0,Math.sqrt(l.D(l))).az(o)
q=l.t(0,Math.sqrt(l.D(l)))}return q},
bN:function(){var u,t=this
if(t.e!=null)return!0
u=t.em()
if(u==null){u=t.eo()
if(u==null)return!1}t.e=u
t.a.a.Z()
return!0},
ghb:function(a){var u=this
if(J.C(u.a,u.b))return!0
if(J.C(u.b,u.c))return!0
if(J.C(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.N()},
E:function(a){var u,t,s=this
if(s.gaZ())return a+"disposed"
u=a+C.a.ab(J.a2(s.a.e),0)+", "+C.a.ab(J.a2(s.b.e),0)+", "+C.a.ab(J.a2(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.h(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.h(0)+"}"):u+"-}"},
N:function(){return this.E("")}}
F.fg.prototype={}
F.hL.prototype={
b0:function(a,b,c){var u,t=b.a
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
F.bU.prototype={
aY:function(){var u=this
if(!u.gaZ()){C.b.K(u.a.a.c.b,u)
u.a.a.Z()}u.bE()
u.bF()},
bJ:function(a){this.a=a
a.c.b.push(this)},
bK:function(a){this.b=a
a.c.c.push(this)},
bE:function(){var u=this.a
if(u!=null){C.b.K(u.c.b,this)
this.a=null}},
bF:function(){var u=this.b
if(u!=null){C.b.K(u.c.c,this)
this.b=null}},
gaZ:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.N()},
E:function(a){if(this.gaZ())return a+"disposed"
return a+C.a.ab(J.a2(this.a.e),0)+", "+C.a.ab(J.a2(this.b.e),0)},
N:function(){return this.E("")}}
F.fC.prototype={}
F.ie.prototype={
b0:function(a,b,c){var u,t=b.a
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
F.c2.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.N()},
E:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.ab(J.a2(u.e),0)},
N:function(){return this.E("")}}
F.hD.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.L():u},
b1:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.u()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){r=g[s]
h.a.n(0,r.he())}h.a.u()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.c2()
if(n.a==null)H.t(P.u("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.I(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.mS(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
i=p[o]
o=h.d.a
o.a.n(0,l)
o.a.n(0,k)
o.a.n(0,i)
F.bO(l,k,i)}g=h.e
if(g!=null)g.ac(0)},
aq:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aq()||!1
if(!t.a.aq())u=!1
s=t.e
if(s!=null)s.ac(0)
return u},
hI:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.cz(o,0)])
for(o=[F.bc];u.length!==0;){t=C.b.ghv(u)
C.b.dI(u,0)
if(t!=null){s=H.c([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.b(u,r)
q=u[r]
if(q!=null&&a.b0(0,t,q)){s.push(q)
C.b.dI(u,r)}}if(s.length>1)b.b1(s)}}p.a.u()
p.c.c9()
p.d.c9()
p.b.i0()
p.c.ca(new F.ie())
p.d.ca(new F.hL())
o=p.e
if(o!=null)o.ac(0)},
bL:function(){this.hI(new F.iK(),new F.hg())},
bZ:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.bZ()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.b(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdt(new V.y(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.y(s,r,o).t(0,Math.sqrt(s*s+r*r+o*o))
if(!J.C(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.I(null)}}}}o=p.e
if(o!=null)o.ac(0)},
h9:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aS()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aR().a)!==0)++s
if((t&$.aQ().a)!==0)++s
if((t&$.aT().a)!==0)++s
if((t&$.bf().a)!==0)++s
if((t&$.cA().a)!==0)++s
if((t&$.cB().a)!==0)++s
if((t&$.bI().a)!==0)++s
if((t&$.aP().a)!==0)++s
r=a4.gci(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.c(u,[P.K])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.cG])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.h2(m)
k=l.gci(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.cG(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].hG(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bB(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cH(new Z.dE(a1,d),o,a4)
c.b=H.c([],[Z.bn])
if(a0.b.b.length!==0){b=H.c([],[P.v])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)}a=Z.kA(u,34963,b)
c.b.push(new Z.bn(0,b.length,a))}if(a0.c.b.length!==0){b=H.c([],[P.v])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.u()
b.push(t.e)}a=Z.kA(u,34963,b)
c.b.push(new Z.bn(1,b.length,a))}if(a0.d.b.length!==0){b=H.c([],[P.v])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.u()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].c
t.a.a.u()
b.push(t.e)}a=Z.kA(u,34963,b)
c.b.push(new Z.bn(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.c([],[P.k])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.E(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.E(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.E(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.E(t))}return C.b.k(s,"\n")},
Z:function(){var u=this.e
if(u!=null)u.I(null)}}
F.hE.prototype={
fZ:function(a){var u,t,s,r,q,p=H.c([],[F.aY]),o=a.length
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
p.push(F.bO(u,r,q))}}return p},
h_:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.c([],[F.aY])
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
h.push(F.bO(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bO(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bO(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.bO(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
ca:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.b0(0,p,n)){p.aY()
break}}}}},
c9:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.ghb(s)
if(t)s.aY()}},
aq:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.p)(u),++r)if(!u[r].bP())s=!1
return s},
bO:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.p)(u),++r)if(!u[r].bN())s=!1
return s},
bZ:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.y(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.y(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.I(null)}},
h:function(a){return this.N()},
E:function(a){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].E(a))
return C.b.k(r,"\n")},
N:function(){return this.E("")}}
F.hF.prototype={
gl:function(a){return this.b.length},
ca:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.i(0,q)
for(o=q-1;o>=0;--o){n=r.c.i(0,o)
if(a.b0(0,p,n)){p.aY()
break}}}}},
c9:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=J.C(s.a,s.b)
if(t)s.aY()}},
h:function(a){return this.N()},
E:function(a){var u,t,s=H.c([],[P.k]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].E(a+(""+u+". ")))}return C.b.k(s,"\n")},
N:function(){return this.E("")}}
F.hG.prototype={
gl:function(a){return this.b.length},
i0:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.K(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.I(null)}s=t.a
if(s!=null){C.b.K(s.b.b,t)
t.a=null}}}},
h:function(a){return this.N()},
E:function(a){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].E(a))
return C.b.k(r,"\n")},
N:function(){return this.E("")}}
F.bc.prototype={
bS:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.dD(u.cx,r,o,t,s,q,p,a,n)},
he:function(){return this.bS(null)},
sa0:function(a,b){var u
if(!J.C(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Z()}},
sdt:function(a){var u
a=a==null?null:a.t(0,Math.sqrt(a.D(a)))
if(!J.C(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Z()}},
sdO:function(a){var u
if(!J.C(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Z()}},
scU:function(a){var u
if(!J.C(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Z()}},
hG:function(a){var u,t,s=this
if(a.p(0,$.aS())){u=s.f
t=[P.K]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.aR())){u=s.r
t=[P.K]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.aQ())){u=s.x
t=[P.K]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.aT())){u=s.y
t=[P.K]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.p(0,$.bf())){u=s.z
t=[P.K]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.cA())){u=s.Q
t=[P.K]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.cB())){u=s.Q
t=[P.K]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bI()))return H.c([s.ch],[P.K])
else if(a.p(0,$.aP())){u=s.cx
t=[P.K]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.K])},
bP:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cf()
t.d.F(0,new F.iP(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ac(0)}return!0},
bN:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cf()
t.d.F(0,new F.iO(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ac(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.N()},
E:function(a){var u,t,s=this,r="-",q=H.c([],[P.k])
q.push(C.a.ab(J.a2(s.e),0))
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
N:function(){return this.E("")}}
F.iP.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.iO.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.iF.prototype={
u:function(){var u,t,s,r
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
h0:function(a,b,c,d,e,f){var u=F.dD(a,null,b,c,d,e,f,null,0)
this.n(0,u)
return u},
gl:function(a){return this.c.length},
aq:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)u[s].bP()
return!0},
bO:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)u[s].bN()
return!0},
ha:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.C(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.I(null)}}}}return!0},
h:function(a){return this.N()},
E:function(a){var u,t,s,r
this.u()
u=H.c([],[P.k])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r)u.push(t[r].E(a))
return C.b.k(u,"\n")},
N:function(){return this.E("")}}
F.iG.prototype={
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
F:function(a,b){var u=this
C.b.F(u.b,b)
C.b.F(u.c,new F.iH(u,b))
C.b.F(u.d,new F.iI(u,b))},
h:function(a){return this.N()},
N:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].E(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].E(""))
return C.b.k(r,"\n")}}
F.iH.prototype={
$1:function(a){if(!J.C(a.a,this.a))this.b.$1(a)}}
F.iI.prototype={
$1:function(a){var u=this.a
if(!J.C(a.a,u)&&!J.C(a.b,u))this.b.$1(a)}}
F.iJ.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.b(t,u)
return t[u]}else{if(b<0)return H.b(t,b)
return t[b]}},
h:function(a){return this.N()},
N:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].E(""))
return C.b.k(r,"\n")}}
F.iL.prototype={}
F.iK.prototype={
b0:function(a,b,c){return J.C(b.f,c.f)}}
F.iM.prototype={}
F.hg.prototype={
b1:function(a){var u,t,s,r=V.cf()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)r=new V.y(r.a+s.a,r.b+s.b,r.c+s.c)}r=r.t(0,Math.sqrt(r.D(r)))
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t)a[t].sdt(r)
return}}
F.iN.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.N()},
N:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].E(""))
return C.b.k(r,"\n")}}
O.d2.prototype={
gv:function(){var u=this.fr
return u==null?this.fr=D.L():u},
X:function(a){var u=this.fr
if(u!=null)u.I(a)},
bC:function(){return this.X(null)},
cH:function(a){this.a=null
this.X(a)},
fH:function(){return this.cH(null)},
eP:function(a,b){var u=new D.bo()
u.b=!0
this.X(u)},
eR:function(a,b){var u=new D.bp()
u.b=!0
this.X(u)},
cv:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.v,h=new H.M([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=h.i(0,0)
h.m(0,0,r==null?1:r)}q=H.c([],[A.cN])
h.F(0,new O.fX(j,q))
C.b.bp(q,new O.fY())
p=new H.M([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){o=u[s]
r=o.gaX()
n=p.i(0,o.gaX())
p.m(0,r,n==null?1:n)}m=H.c([],[A.db])
p.F(0,new O.fZ(j,m))
C.b.bp(m,new O.h_())
l=new H.M([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.p)(i),++s){o=i[s]
t=o.gaX()
r=l.i(0,o.gaX())
l.m(0,t,r==null?1:r)}k=H.c([],[A.di])
l.F(0,new O.h0(j,k))
C.b.bp(k,new O.h1())
i=C.c.a5(j.e.a.length+3,4)
u=j.b
t=j.d
j.dy.e
return A.mZ(u!=null,!1,t!=null,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
a7:function(a,b){if(b!=null)if(!C.b.U(a,b)){b.a=a.length
a.push(b)}},
aG:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a6(u,u.length);u.w();){t=u.d
t.toString
s=$.iE
if(s==null)s=$.iE=new V.y(0,0,1)
t.a=s
r=$.iD
t.d=r==null?$.iD=new V.y(0,1,0):r
r=$.iC
t.e=r==null?$.iC=new V.y(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bm(s)
r=s.a
p=s.b
o=s.c
t.a=s.t(0,Math.sqrt(r*r+p*p+o*o))
o=q.bm(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.t(0,Math.sqrt(p*p+r*r+s*s))
s=q.bm(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.t(0,Math.sqrt(r*r+p*p+o*o))}}}},
i2:function(b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a
if(b2==null){b2=b1.cv()
u=b3.fr.i(0,b2.aA)
if(u==null){u=A.mY(b2,b3.a)
t=u.b
if(t.length===0)H.t(P.u("May not cache a shader with no name."))
if(b3.fr.be(0,t))H.t(P.u('Shader cache already contains a shader by the name "'+t+'".'))
b3.fr.m(0,t,u)}b2=b1.a=u
b4.e=null}s=b2.z
r=s.d_
b2=b4.e
if(!(b2 instanceof Z.cH))b2=b4.e=null
if(b2==null||!b2.d.p(0,r)){b2=s.k3
if(b2)b4.d.aq()
q=s.k4
if(q){p=b4.d
o=p.e
if(o!=null)++o.d
p.d.bO()
p.a.bO()
p=p.e
if(p!=null)p.ac(0)}p=s.r2
if(p){o=b4.d
n=o.e
if(n!=null)++n.d
o.a.ha()
o=o.e
if(o!=null)o.ac(0)}m=b4.d.h9(new Z.iR(b3.a),r)
m.aP($.aS()).e=b1.a.Q.c
if(b2)m.aP($.aR()).e=b1.a.cx.c
if(q)m.aP($.aQ()).e=b1.a.ch.c
if(s.r1)m.aP($.aT()).e=b1.a.cy.c
if(p)m.aP($.bf()).e=b1.a.db.c
if(s.rx)m.aP($.aP()).e=b1.a.dx.c
b4.e=m}l=H.c([],[T.dq])
b2=b1.a
q=b3.a
q.useProgram(b2.r)
b2.x.hq()
if(s.dy){b2=b1.a
p=b3.dx
p=p.ga1(p)
b2=b2.dy
b2.toString
b2.ak(p.ad(0,!0))}if(s.fr){b2=b1.a
p=b3.cx
if(p==null){p=b3.db
p=p.ga1(p)
o=b3.dx
o=b3.cx=p.A(0,o.ga1(o))
p=o}b2=b2.fr
b2.toString
b2.ak(p.ad(0,!0))}b2=b1.a
p=b3.ch
if(p==null){p=b3.ghZ()
o=b3.dx
o=b3.ch=p.A(0,o.ga1(o))
p=o}b2=b2.fy
b2.toString
b2.ak(p.ad(0,!0))
if(s.ry){b2=b1.a
p=b1.b
b2=b2.k1
b2.toString
b2.ak(p.ad(0,!0))}if(s.x1){b2=b1.a
p=b1.c
b2=b2.k2
b2.toString
b2.ak(C.u.ad(p,!0))}if(s.x2){b2=b1.a
p=b1.d
b2=b2.k3
b2.toString
b2.ak(p.ad(0,!0))}if(s.y2>0){k=b1.e.a.length
b2=b1.a.k4
b2.a.uniform1i(b2.d,k)
for(j=0;j<k;++j){b2=b1.a
p=b1.e.a
if(j>=p.length)return H.b(p,j)
p=p[j]
b2=b2.r1
if(j>=b2.length)return H.b(b2,j)
b2=b2[j]
i=new Float32Array(H.bB(p.ad(0,!0)))
b2.a.uniformMatrix4fv(b2.d,!1,i)}}b2=s.a
if(b2.a){p=b1.a
o=b1.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.a7(l,b1.f.d)
b2=b1.a
p=b1.f.d
b2.ag(b2.rx,p)}if(s.id){b2=s.b
if(b2.a){p=b1.a
o=b1.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.a7(l,b1.r.d)
b2=b1.a
p=b1.r.d
b2.ag(b2.x2,p)}b2=s.c
if(b2.a){p=b1.a
o=b1.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.a7(l,b1.x.d)
b2=b1.a
p=b1.x.d
b2.ag(b2.aA,p)}b2=s.d
if(b2.a){p=b1.a
o=b1.y.f
p=p.d0
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.a7(l,b1.y.d)
b2=b1.a
p=b1.y.d
b2.ag(b2.d1,p)}b2=s.e
p=b2.a
if(p||b2.b||!1){o=b1.a
n=b1.z.ch
o=o.d4
o.a.uniform1f(o.d,n)}if(p){p=b1.a
o=b1.z.f
p=p.d2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.a7(l,b1.z.d)
b2=b1.a
p=b1.z.d
b2.ag(b2.d3,p)}b2=s.z
if(b2.length>0){p=b3.db
h=p.ga1(p)
p=P.v
g=new H.M([p,p])
for(p=b1.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.p)(p),++f){e=p[f]
d=g.i(0,0)
if(d==null)d=0
g.m(0,0,d+1)
c=J.cC(b1.a.bU.i(0,0),d)
n=h.bm(e.a)
b=n.a
a=n.b
a0=n.c
a0=n.t(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.e
b=a0.a
n=a0.b
a0=a0.c
a.a.uniform3f(a.d,b,n,a0)
a0=e.c
n=c.f
n.a.uniform3f(n.d,a0.a,a0.b,a0.c)}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.p)(b2),++f){o=b2[f].a
k=g.i(0,o)
if(k==null)k=0
o=b1.a.bT.i(0,o)
o.a.uniform1i(o.d,k)}}b2=s.Q
if(b2.length>0){p=b3.db
h=p.ga1(p)
p=P.v
a1=new H.M([p,p])
for(p=b1.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.p)(p),++f){e=p[f]
a2=e.gaX()
d=a1.i(0,a2)
if(d==null)d=0
a1.m(0,a2,d+1)
c=J.cC(b1.a.bW.i(0,a2),d)
a3=h.A(0,e.ga1(e))
n=e.ga1(e)
b=$.c3
n=n.cc(b==null?$.c3=new V.U(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.c3
n=a3.cc(n==null?$.c3=new V.U(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gah(e)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
e.gaF()
n=a3.dm(0)
b=n.a
a=n.b
a0=n.c
a4=n.e
a5=n.f
a6=n.r
a7=n.y
a8=n.z
n=n.Q
a9=c.d
a9.toString
i=new Float32Array(H.bB(new V.bX(b,a,a0,a4,a5,a6,a7,a8,n).ad(0,!0)))
a9.a.uniformMatrix3fv(a9.d,!1,i)
e.gaF()
n=e.gaF()
if(!C.b.U(l,n)){n.a=l.length
l.push(n)}n=e.gaF()
b=n.gb_(n)
if(b){b=c.f
b.toString
a=n.gb_(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.ghA(n)
b.a.uniform1i(b.d,n)}}e.gaS()
n=e.ge_()
b=c.x
b.toString
a=n.ghm(n)
a0=n.ghn(n)
a4=n.gho()
n=n.ghl()
b.a.uniform4f(b.d,a,a0,a4,n)
n=e.gaS()
if(!C.b.U(l,n)){n.a=l.length
l.push(n)}n=e.gaS()
b=n.gb_(n)
if(b){b=c.r
b.toString
a=n.gb_(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.ghA(n)
b.a.uniform1i(b.d,n)}}if(e.ghr()){n=e.gh4()
b=c.y
b.a.uniform1f(b.d,n)
n=e.gh5()
b=c.z
b.a.uniform1f(b.d,n)
n=e.gh6()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.p)(b2),++f){o=b2[f].a
k=a1.i(0,o)
if(k==null)k=0
o=b1.a.bV.i(0,o)
o.a.uniform1i(o.d,k)}}b2=s.ch
if(b2.length>0){p=b3.db
h=p.ga1(p)
p=P.v
b0=new H.M([p,p])
for(p=b1.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.p)(p),++f){e=p[f]
a2=e.gaX()
d=b0.i(0,a2)
if(d==null)d=0
b0.m(0,a2,d+1)
c=J.cC(b1.a.bY.i(0,a2),d)
n=e.ghY(e)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gik(e).ix()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=h.cc(e.ghY(e))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gah(e)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
e.gaF()
n=e.giA()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gcb(e)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.giy()
b=c.x
b.a.uniform1f(b.d,n)
n=e.giz()
b=c.y
b.a.uniform1f(b.d,n)
e.gaF()
n=e.gaF()
if(!C.b.U(l,n)){n.a=l.length
l.push(n)}n=e.gaF()
b=n.gb_(n)
if(b){b=c.dx
b.toString
a=n.d
if(!a)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}e.gaS()
n=e.ge_()
b=c.z
b.toString
a=n.ghm(n)
a0=n.ghn(n)
a4=n.gho()
n=n.ghl()
b.a.uniform4f(b.d,a,a0,a4,n)
n=e.gaS()
if(!C.b.U(l,n)){n.a=l.length
l.push(n)}n=e.gaS()
b=n.gb_(n)
if(b){b=c.dy
b.toString
a=n.d
if(!a)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}if(e.gil()){n=e.gij()
b=c.Q
b.a.uniform1f(b.d,n)
n=e.gii()
b=c.ch
b.a.uniform1f(b.d,n)}if(e.ghr()){n=e.gh4()
b=c.cx
b.a.uniform1f(b.d,n)
n=e.gh5()
b=c.cy
b.a.uniform1f(b.d,n)
n=e.gh6()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.p)(b2),++f){o=b2[f].a
k=b0.i(0,o)
if(k==null)k=0
o=b1.a.bX.i(0,o)
o.a.uniform1i(o.d,k)}}}if(s.f.b){b1.a7(l,b1.Q.d)
b2=b1.a
p=b1.Q.d
b2.ag(b2.d5,p)}if(s.dx){b2=b1.a
p=b3.Q
if(p==null){p=b3.db
p=b3.Q=p.ga1(p).dm(0)}b2=b2.id
b2.toString
b2.ak(p.ad(0,!0))}if(s.cy){b1.a7(l,b1.ch)
b2=b1.a
p=b1.ch
b2.fL(b2.d6,p)
b2=s.r
if(b2.a){p=b1.a
o=b1.cx.f
p=p.d7
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.a7(l,b1.cx.d)
b2=b1.a
p=b1.cx.d
b2.ag(b2.d8,p)}b2=s.x
p=b2.a
if(p||b2.b||!1){o=b1.a
n=b1.cy.ch
o=o.d9
o.a.uniform1f(o.d,n)}if(p){p=b1.a
o=b1.cy.f
p=p.da
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.b){b1.a7(l,b1.cy.d)
b2=b1.a
p=b1.cy.d
b2.ag(b2.dc,p)}}b2=s.y
p=b2.a
o=!p
if(!o||b2.b||!1){if(p){p=b1.a
n=b1.db.f
p=p.dd
p.a.uniform1f(p.d,n)}if(b2.b){b1.a7(l,b1.db.d)
p=b1.a
n=b1.db.d
p.ag(p.de,n)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j){p=l[j]
if(!p.c&&p.d){p.c=!0
q.activeTexture(33984+p.a)
q.bindTexture(3553,p.b)}}p=b4.e
p.bM(b3)
p.aQ(b3)
p.ie(b3)
if(!o||b2.b||!1)q.disable(3042)
for(j=0;j<l.length;++j){b2=l[j]
if(b2.c){b2.c=!1
q.activeTexture(33984+b2.a)
q.bindTexture(3553,null)}}b2=b1.a
b2.toString
q.useProgram(null)
b2.x.hk()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.cv().aA}}
O.fX.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cN(a,C.c.a5(b+3,4)*4))}}
O.fY.prototype={
$2:function(a,b){return J.ke(a.a,b.a)}}
O.fZ.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.db(a,C.c.a5(b+3,4)*4))}}
O.h_.prototype={
$2:function(a,b){return J.ke(a.a,b.a)}}
O.h0.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.di(a,C.c.a5(b+3,4)*4))}}
O.h1.prototype={
$2:function(a,b){return J.ke(a.a,b.a)}}
O.fR.prototype={
ax:function(){var u,t=this
t.ck()
u=t.f
if(!(Math.abs(u-1)<$.z().a)){t.f=1
u=new D.B(t.b,u,1)
u.b=!0
t.a.X(u)}}}
O.bW.prototype={
X:function(a){return this.a.X(a)},
bC:function(){return this.X(null)},
ax:function(){},
bG:function(a){var u,t,s=this
if(!s.c.p(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.ax()
u=s.a
u.a=null
u.X(null)}}}
O.fS.prototype={}
O.ap.prototype={
cJ:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.B(s.b+".color",u,a)
t.b=!0
s.a.X(t)}},
ax:function(){this.ck()
this.cJ(new V.T(1,1,1))},
sah:function(a,b){this.bG(new A.Z(!0,this.c.b,!1))
this.cJ(b)}}
O.fU.prototype={}
O.fV.prototype={
ax:function(){var u,t=this
t.cl()
u=t.ch
if(!(Math.abs(u-1)<$.z().a)){t.ch=1
u=new D.B(t.b+".refraction",u,1)
u.b=!0
t.a.X(u)}}}
O.fW.prototype={
cK:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.z().a)){u.ch=a
t=new D.B(u.b+".shininess",t,a)
t.b=!0
u.a.X(t)}},
ax:function(){this.cl()
this.cK(100)}}
O.dp.prototype={}
T.dq.prototype={}
T.i0.prototype={}
T.i1.prototype={
gv:function(){var u=this.y
return u==null?this.y=D.L():u}}
T.i2.prototype={
hH:function(a,b){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,10497)
r.texParameteri(s,10243,10497)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.i1()
t.a=0
t.b=q
t.d=t.c=!1
W.V(u,"load",new T.i3(this,t,u,!1,q,!1,!1),!1)
return t},
fI:function(a,b,c){var u,t,s,r
b=V.kO(b)
u=V.kO(a.width)
t=V.kO(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kh()
s.width=u
s.height=t
r=C.i.dW(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.ot(r.getImageData(0,0,s.width,s.height))}}}
T.i3.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.fI(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.Y.i8(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.hp()}++s.e}}
X.kg.prototype={}
X.fn.prototype={
gv:function(){var u=this.x
return u==null?this.x=D.L():u}}
X.da.prototype={
gv:function(){var u=this.f
return u==null?this.f=D.L():u},
aK:function(a){var u=this.f
if(u!=null)u.I(a)},
ej:function(){return this.aK(null)},
saa:function(a){var u,t,s=this
if(!J.C(s.b,a)){u=s.b
if(u!=null)u.gv().K(0,s.gcq())
t=s.b
s.b=a
if(a!=null)a.gv().n(0,s.gcq())
u=new D.B("mover",t,s.b)
u.b=!0
s.aK(u)}}}
X.hX.prototype={}
V.cJ.prototype={
b7:function(a){this.b=new P.fs(C.P)
this.c=null
this.d=H.c([],[[P.n,W.ah]])},
M:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.c([],[W.ah]))
u=a.split("\n")
for(l=u.length,t=[W.ah],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.c([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.es(q,0,q.length)
n=o==null?q:o
C.N.dY(p,H.kQ(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gar(m.d).push(p)}},
dC:function(a,b){var u,t,s,r,q=this
q.d=H.c([],[[P.n,W.ah]])
u=C.b.k(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bf():t).dQ(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r)q.bk(t[r])}}
V.k5.prototype={
$1:function(a){var u=C.d.dP(this.a.ghz(),2)
if(u!=="0.00")P.kP(u+" fps")}}
V.f3.prototype={
bk:function(a){var u=this
switch(a.a){case"Class":u.M(a.b,"#551")
break
case"Comment":u.M(a.b,"#777")
break
case"Id":u.M(a.b,"#111")
break
case"Num":u.M(a.b,"#191")
break
case"Reserved":u.M(a.b,"#119")
break
case"String":u.M(a.b,"#171")
break
case"Symbol":u.M(a.b,"#616")
break
case"Type":u.M(a.b,"#B11")
break
case"Whitespace":u.M(a.b,"#111")
break}},
bf:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=R.i7()
a1.c=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=T.q(new H.l("_"))
u.a.push(t)
t=T.I("a","z")
u.a.push(t)
t=T.I("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=T.q(new H.l("_"))
t.a.push(u)
u=T.I("0","9")
t.a.push(u)
u=T.I("a","z")
t.a.push(u)
u=T.I("A","Z")
t.a.push(u)
u=a1.j(0,r).k(0,p)
t=T.I("0","9")
u.a.push(t)
t=a1.j(0,p).k(0,p)
u=T.I("0","9")
t.a.push(u)
u=a1.j(0,p).k(0,o)
t=T.q(new H.l("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=T.I("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=T.I("0","9")
u.a.push(t)
t=a1.j(0,r).k(0,m)
u=T.q(new H.l(l))
t.a.push(u)
u=a1.j(0,m).k(0,m)
t=T.q(new H.l(l))
u.a.push(t)
t=a1.j(0,r).k(0,k)
u=T.q(new H.l('"'))
t.a.push(u)
u=a1.j(0,k).k(0,j)
t=T.q(new H.l('"'))
u.a.push(t)
t=a1.j(0,k).k(0,i)
u=T.q(new H.l("\\"))
t.a.push(u)
u=a1.j(0,i).k(0,k)
t=T.q(new H.l('"'))
u.a.push(t)
a1.j(0,k).k(0,k).a.push(new T.ax())
t=a1.j(0,r).k(0,h)
u=T.q(new H.l("'"))
t.a.push(u)
u=a1.j(0,h).k(0,g)
t=T.q(new H.l("'"))
u.a.push(t)
t=a1.j(0,h).k(0,f)
u=T.q(new H.l("\\"))
t.a.push(u)
u=a1.j(0,f).k(0,h)
t=T.q(new H.l("'"))
u.a.push(t)
a1.j(0,h).k(0,h).a.push(new T.ax())
t=a1.j(0,r).k(0,e)
u=T.q(new H.l("/"))
t.a.push(u)
u=a1.j(0,e).k(0,d)
t=T.q(new H.l("/"))
u.a.push(t)
t=a1.j(0,d).k(0,c)
u=T.q(new H.l("\n"))
t.a.push(u)
u=a1.j(0,d).k(0,d)
t=new T.a3()
s=[T.b2]
t.a=H.c([],s)
u.a.push(t)
u=T.q(new H.l("\n"))
t.a.push(u)
u=a1.j(0,e).k(0,b)
t=T.q(new H.l("*"))
u.a.push(t)
t=a1.j(0,b).k(0,a)
u=T.q(new H.l("*"))
t.a.push(u)
u=a1.j(0,a).k(0,b)
t=new T.a3()
t.a=H.c([],s)
u.a.push(t)
u=T.q(new H.l("*"))
t.a.push(u)
u=a1.j(0,a).k(0,c)
t=T.q(new H.l("/"))
u.a.push(t)
t=a1.j(0,r).k(0,a0)
u=T.q(new H.l(" \n\t"))
t.a.push(u)
u=a1.j(0,a0).k(0,a0)
t=T.q(new H.l(" \n\t"))
u.a.push(t)
t=a1.j(0,p)
t.d=t.a.O("Num")
t=a1.j(0,n)
t.d=t.a.O("Num")
t=a1.j(0,m)
t.d=t.a.O("Symbol")
t=a1.j(0,j)
t.d=t.a.O("String")
t=a1.j(0,g)
t.d=t.a.O("String")
t=a1.j(0,c)
t.d=t.a.O(d)
t=a1.j(0,a0)
t.d=t.a.O(a0)
t=a1.j(0,q)
t=t.d=t.a.O(q)
u=[P.k]
t.aE(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aE(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aE(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fp.prototype={
bk:function(a){var u=this
switch(a.a){case"Builtin":u.M(a.b,"#411")
break
case"Comment":u.M(a.b,"#777")
break
case"Id":u.M(a.b,"#111")
break
case"Num":u.M(a.b,"#191")
break
case"Preprocess":u.M(a.b,"#737")
break
case"Reserved":u.M(a.b,"#119")
break
case"Symbol":u.M(a.b,"#611")
break
case"Type":u.M(a.b,"#171")
break
case"Whitespace":u.M(a.b,"#111")
break}},
bf:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=R.i7()
e.c=e.j(0,r)
u=e.j(0,r).k(0,q)
t=T.q(new H.l("_"))
u.a.push(t)
t=T.I("a","z")
u.a.push(t)
t=T.I("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=T.q(new H.l("_"))
t.a.push(u)
u=T.I("0","9")
t.a.push(u)
u=T.I("a","z")
t.a.push(u)
u=T.I("A","Z")
t.a.push(u)
u=e.j(0,r).k(0,p)
t=T.I("0","9")
u.a.push(t)
t=e.j(0,p).k(0,p)
u=T.I("0","9")
t.a.push(u)
u=e.j(0,p).k(0,o)
t=T.q(new H.l("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=T.I("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=T.I("0","9")
u.a.push(t)
t=e.j(0,r).k(0,m)
u=T.q(new H.l(l))
t.a.push(u)
u=e.j(0,m).k(0,m)
t=T.q(new H.l(l))
u.a.push(t)
t=e.j(0,r).k(0,k)
u=T.q(new H.l("/"))
t.a.push(u)
u=e.j(0,k).k(0,j)
t=T.q(new H.l("/"))
u.a.push(t)
e.j(0,k).k(0,m).a.push(new T.ax())
t=e.j(0,j).k(0,i)
u=T.q(new H.l("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new T.a3()
s=[T.b2]
t.a=H.c([],s)
u.a.push(t)
u=T.q(new H.l("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=T.q(new H.l("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new T.a3()
u.a=H.c([],s)
t.a.push(u)
t=T.q(new H.l("\n"))
u.a.push(t)
t=e.j(0,h).k(0,g)
u=T.q(new H.l("\n"))
t.a.push(u)
u=e.j(0,r).k(0,f)
t=T.q(new H.l(" \n\t"))
u.a.push(t)
t=e.j(0,f).k(0,f)
u=T.q(new H.l(" \n\t"))
t.a.push(u)
u=e.j(0,p)
u.d=u.a.O("Num")
u=e.j(0,n)
u.d=u.a.O("Num")
u=e.j(0,m)
u.d=u.a.O("Symbol")
u=e.j(0,i)
u.d=u.a.O(j)
u=e.j(0,g)
u.d=u.a.O(h)
u=e.j(0,f)
u.d=u.a.O(f)
u=e.j(0,q)
u=u.d=u.a.O(q)
t=[P.k]
u.aE(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aE(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aE(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fq.prototype={
bk:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.M(a.b,"#911")
u.M("=",t)
break
case"Id":u.M(a.b,t)
break
case"Other":u.M(a.b,t)
break
case"Reserved":u.M(a.b,"#119")
break
case"String":u.M(a.b,"#171")
break
case"Symbol":u.M(a.b,"#616")
break}},
bf:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=R.i7()
l.c=l.j(0,s)
u=l.j(0,s).k(0,r)
t=T.q(new H.l("_"))
u.a.push(t)
t=T.I("a","z")
u.a.push(t)
t=T.I("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=T.q(new H.l("_"))
t.a.push(u)
u=T.I("0","9")
t.a.push(u)
u=T.I("a","z")
t.a.push(u)
u=T.I("A","Z")
t.a.push(u)
u=l.j(0,r).k(0,q)
t=T.q(new H.l("="))
u.a.push(t)
u.c=!0
u=l.j(0,s).k(0,p)
t=T.q(new H.l("</\\-!>="))
u.a.push(t)
t=l.j(0,p).k(0,p)
u=T.q(new H.l("</\\-!>="))
t.a.push(u)
u=l.j(0,s).k(0,o)
t=T.q(new H.l('"'))
u.a.push(t)
t=l.j(0,o).k(0,n)
u=T.q(new H.l('"'))
t.a.push(u)
u=l.j(0,o).k(0,"EscStr")
t=T.q(new H.l("\\"))
u.a.push(t)
t=l.j(0,"EscStr").k(0,o)
u=T.q(new H.l('"'))
t.a.push(u)
l.j(0,o).k(0,o).a.push(new T.ax())
l.j(0,s).k(0,m).a.push(new T.ax())
u=l.j(0,m).k(0,m)
t=new T.a3()
t.a=H.c([],[T.b2])
u.a.push(t)
u=T.q(new H.l('</\\-!>=_"'))
t.a.push(u)
u=T.I("a","z")
t.a.push(u)
u=T.I("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.O("Symbol")
u=l.j(0,n)
u.d=u.a.O("String")
u=l.j(0,r)
t=u.a.O(r)
u.d=t
t.aE(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.k]))
t=l.j(0,q)
t.d=t.a.O(q)
t=l.j(0,m)
t.d=t.a.O(m)
return l}}
V.hm.prototype={
dC:function(a,b){this.d=H.c([],[[P.n,W.ah]])
this.M(C.b.k(b,"\n"),"#111")},
bk:function(a){},
bf:function(){return}}
V.hr.prototype={
cQ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.lx().gc8().i(0,H.e(u))
if(t==null)if(d){c.$0()
m.cO(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.kW(m.c).n(0,q)
o=W.mN("radio")
o.checked=s
o.name=u
W.V(o,"change",new V.hs(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.kW(m.c).n(0,r.createElement("br"))},
aW:function(a,b,c){return this.cQ(a,b,c,!1)},
cO:function(a){var u,t,s=P.lx(),r=P.k,q=P.mU(s.gc8(),r,r)
q.m(0,this.a,a)
u=s.dJ(0,q)
r=window.history
t=u.h(0)
r.toString
r.replaceState(new P.jj([],[]).cd(""),"",t)}}
V.hs.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.cO(u.d)}}}
V.hH.prototype={
eb:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.V(q,"scroll",new V.hJ(o),!1)},
cS:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.fO()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dQ(C.b.hF(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
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
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.ep(C.x,n,C.e,!1)
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
dV:function(a){var u,t,s,r=new V.f3("dart")
r.b7("dart")
u=new V.fp("glsl")
u.b7("glsl")
t=new V.fq("html")
t.b7("html")
s=C.b.hw(H.c([r,u,t],[V.cJ]),new V.hK(a))
if(s!=null)return s
r=new V.hm("plain")
r.b7("plain")
return r},
cR:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.c([],[P.v])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cx(s).a2(s,"+")){b0[t]=C.a.a6(s,1)
a6.push(1)
u=!0}else if(C.a.a2(s,"-")){b0[t]=C.a.a6(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.dV(a8)
r.dC(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.ep(C.x,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.kY()
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
for(a2=C.b.gV(s);a2.w();)d.appendChild(a2.gJ(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
fX:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
fO:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=R.i7()
u.c=u.j(0,q)
t=u.j(0,q).k(0,p)
s=T.q(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new T.a3()
r=[T.b2]
s.a=H.c([],r)
t.a.push(s)
t=T.q(new H.l("*"))
s.a.push(t)
t=u.j(0,p).k(0,"BoldEnd")
s=T.q(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,o)
s=T.q(new H.l("_"))
t.a.push(s)
t.c=!0
t=u.j(0,o).k(0,o)
s=new T.a3()
s.a=H.c([],r)
t.a.push(s)
t=T.q(new H.l("_"))
s.a.push(t)
t=u.j(0,o).k(0,n)
s=T.q(new H.l("_"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,m)
s=T.q(new H.l("`"))
t.a.push(s)
t.c=!0
t=u.j(0,m).k(0,m)
s=new T.a3()
s.a=H.c([],r)
t.a.push(s)
t=T.q(new H.l("`"))
s.a.push(t)
t=u.j(0,m).k(0,"CodeEnd")
s=T.q(new H.l("`"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,l)
s=T.q(new H.l("["))
t.a.push(s)
t.c=!0
t=u.j(0,l).k(0,k)
s=T.q(new H.l("|"))
t.a.push(s)
s=u.j(0,l).k(0,j)
t=T.q(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.j(0,l).k(0,l)
t=new T.a3()
t.a=H.c([],r)
s.a.push(t)
s=T.q(new H.l("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=T.q(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new T.a3()
t.a=H.c([],r)
s.a.push(t)
s=T.q(new H.l("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new T.ax())
s=u.j(0,i).k(0,i)
t=new T.a3()
t.a=H.c([],r)
s.a.push(t)
s=T.q(new H.l("*_`["))
t.a.push(s)
s=u.j(0,"BoldEnd")
s.d=s.a.O(p)
s=u.j(0,n)
s.d=s.a.O(o)
s=u.j(0,"CodeEnd")
s.d=s.a.O(m)
s=u.j(0,j)
s.d=s.a.O("Link")
s=u.j(0,i)
s.d=s.a.O(i)
this.b=u}}
V.hJ.prototype={
$1:function(a){P.lt(C.m,new V.hI(this.a))}}
V.hI.prototype={
$0:function(){var u=C.d.ai(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.hK.prototype={
$1:function(a){return a.a===this.a}}
K.jX.prototype={
$1:function(a){var u,t,s,r,q=H.o(a,"$idl").c,p=this.a,o=this.b.at(0,q,null)
if(!J.C(p.d,o)){u=p.d
t=u==null
s=o==null
if(!(!t&&s))t=t&&!s
else t=!0
if(t)p.a=null
p.d=o
o=new D.B("colorMatrix",u,o)
o.b=!0
p.X(o)}r=V.n_(this.c.at(0,q,null))
if(!J.C(p.b,r)){o=p.b
u=o==null&&!0
if(u)p.a=null
p.b=r
o=new D.B("texture2DMatrix",o,r)
o.b=!0
p.X(o)}}}
K.jY.prototype={
$0:function(){this.a.saf(0,F.kJ(1,null,null,1))}}
K.jZ.prototype={
$0:function(){this.a.saf(0,F.lW(!0,40,1))}}
K.k_.prototype={
$0:function(){this.a.saf(0,F.lW(!1,40,0))}}
K.k0.prototype={
$0:function(){this.a.saf(0,F.oP(6,6))}}
K.k1.prototype={
$0:function(){this.a.saf(0,F.m7())}}
K.k2.prototype={
$0:function(){this.a.saf(0,F.oI())}}
K.k3.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.k]
u.cR("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.cR("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.e2=u.h
u=J.cX.prototype
u.e4=u.h
u=P.i.prototype
u.e3=u.bn
u=W.S.prototype
u.bq=u.a8
u=W.e7.prototype
u.e5=u.ap
u=T.cT.prototype
u.e1=u.aC
u.cj=u.h
u=O.bW.prototype
u.ck=u.ax
u=O.ap.prototype
u.cl=u.ax})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"on","nw",7)
u(P,"oo","nx",7)
u(P,"op","ny",7)
t(P,"lV","ol",9)
s(W,"oC",4,null,["$4"],["nz"],15,0)
s(W,"oD",4,null,["$4"],["nA"],15,0)
var m
r(m=E.aA.prototype,"gdA",0,0,null,["$1","$0"],["dB","hQ"],0,0)
r(m,"gdw",0,0,null,["$1","$0"],["dz","hP"],0,0)
r(m,"gdu",0,0,null,["$1","$0"],["dv","hM"],0,0)
q(m,"ghK","hL",4)
q(m,"ghN","hO",4)
r(m=E.dr.prototype,"gcm",0,0,null,["$1","$0"],["co","cn"],0,0)
p(m,"gi4","dK",9)
o(m=X.dB.prototype,"gf3","f4",5)
o(m,"geS","eT",5)
o(m,"geY","eZ",2)
o(m,"gf7","f8",10)
o(m,"gf5","f6",10)
o(m,"gfb","fc",2)
o(m,"gff","fg",2)
o(m,"gf1","f2",2)
o(m,"gfd","fe",2)
o(m,"gf_","f0",2)
o(m,"gfh","fi",18)
o(m,"gfj","fk",5)
o(m,"gfz","fA",6)
o(m,"gft","fu",6)
o(m,"gfv","fw",6)
r(D.bk.prototype,"gcp",0,0,null,["$1","$0"],["au","ee"],0,0)
r(m=D.cZ.prototype,"gcF",0,0,null,["$1","$0"],["cG","f9"],0,0)
o(m,"gfm","fn",19)
q(m,"geM","eN",11)
q(m,"gfq","fs",11)
n(V.R.prototype,"gl","c3",12)
n(V.y.prototype,"gl","c3",12)
r(m=U.bQ.prototype,"gb8",0,0,null,["$1","$0"],["R","al"],0,0)
q(m,"geK","eL",13)
q(m,"gfo","fp",13)
r(m=U.dC.prototype,"gb8",0,0,null,["$1","$0"],["R","al"],0,0)
o(m,"geE","eF",1)
o(m,"geG","eH",1)
o(m,"geI","eJ",1)
o(m,"gez","eA",1)
o(m,"geB","eC",1)
o(m,"gfV","fW",1)
o(m,"gfT","fU",1)
o(m,"gfR","fS",1)
r(m=M.cQ.prototype,"gam",0,0,null,["$1","$0"],["av","ef"],0,0)
q(m,"geU","eV",4)
q(m,"geW","eX",4)
r(m=O.d2.prototype,"gbb",0,0,null,["$1","$0"],["X","bC"],0,0)
r(m,"gfG",0,0,null,["$1","$0"],["cH","fH"],0,0)
q(m,"geO","eP",14)
q(m,"geQ","eR",14)
r(O.bW.prototype,"gbb",0,0,null,["$1","$0"],["X","bC"],0,0)
r(X.da.prototype,"gcq",0,0,null,["$1","$0"],["aK","ej"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a0,null)
s(P.a0,[H.kp,J.a,J.a6,P.dV,P.i,H.bV,P.fw,H.cR,H.ir,H.eW,H.ic,P.bl,H.bL,H.ec,P.aD,H.fD,H.fF,H.fy,P.ei,P.dF,P.dm,P.hT,P.ds,P.jz,P.jd,P.j7,P.dU,P.r,P.jr,P.fM,P.eT,P.ft,P.jx,P.jw,P.aw,P.a7,P.aa,P.aX,P.hk,P.dj,P.dN,P.fm,P.fo,P.n,P.P,P.b5,P.k,P.Q,P.bz,P.it,P.jg,W.f_,W.ci,W.G,W.d8,W.e7,W.jm,W.cS,W.aG,W.jc,W.eq,P.ji,P.en,P.j8,P.bw,T.ax,T.cT,T.b2,T.ht,T.hC,R.dk,R.dt,R.du,R.i6,O.aW,O.bY,E.eP,E.aA,E.hu,D.W,E.dr,Z.dE,Z.iR,Z.cH,Z.bn,Z.aN,D.eS,D.bm,X.cI,X.cY,X.fA,X.fJ,X.br,X.h8,X.i8,X.dB,D.bk,D.a8,D.ho,D.hO,V.T,V.am,V.fd,V.bX,V.aE,V.a4,V.U,V.b8,V.dd,V.R,V.y,U.dC,M.cQ,A.cF,A.eI,A.Z,A.cN,A.db,A.di,A.fT,A.cb,A.cd,A.ce,A.dx,A.il,F.aY,F.fg,F.bU,F.fC,F.c2,F.hD,F.hE,F.hF,F.hG,F.bc,F.iF,F.iG,F.iJ,F.iL,F.iM,F.iN,O.dp,O.bW,O.fU,T.i2,X.kg,X.hX,X.da,V.cJ,V.hr,V.hH])
s(J.a,[J.fx,J.cW,J.cX,J.aZ,J.bT,J.b_,H.c_,H.b4,W.f,W.eF,W.bh,W.an,W.F,W.dH,W.ad,W.f4,W.f5,W.dJ,W.cP,W.dL,W.f7,W.h,W.dO,W.aB,W.fr,W.dQ,W.aC,W.fI,W.h2,W.dW,W.dX,W.aF,W.dY,W.e0,W.aH,W.e4,W.e6,W.aJ,W.e8,W.aK,W.ed,W.as,W.eg,W.i5,W.aM,W.ej,W.ia,W.iy,W.er,W.et,W.ev,W.ex,W.ez,P.b1,P.dS,P.b6,P.e2,P.hq,P.ee,P.ba,P.el,P.eJ,P.dG,P.de,P.ea])
s(J.cX,[J.hl,J.by,J.b0])
t(J.ko,J.aZ)
s(J.bT,[J.cV,J.cU])
t(P.fH,P.dV)
s(P.fH,[H.dz,W.iY,W.a1,P.fi])
t(H.l,H.dz)
s(P.i,[H.fa,H.fN,H.cg])
s(H.fa,[H.d0,H.fE])
s(P.fw,[H.fO,H.iS])
t(H.fP,H.d0)
t(H.eX,H.eW)
s(P.bl,[H.hh,H.fz,H.iq,H.eR,H.hA,P.d9,P.ag,P.is,P.io,P.c7,P.eV,P.f2])
s(H.bL,[H.kb,H.hY,H.jS,H.jT,H.jU,P.iU,P.iT,P.iV,P.iW,P.jq,P.jp,P.jI,P.ja,P.jb,P.fG,P.fL,P.f8,P.f9,P.ix,P.iu,P.iv,P.iw,P.js,P.jt,P.jv,P.ju,P.jD,P.jC,P.jE,P.jF,W.fb,W.h4,W.h6,W.hz,W.hS,W.j2,W.hf,W.he,W.je,W.jf,W.jo,W.jy,P.jk,P.jJ,P.fj,P.fk,P.eL,E.hv,E.hw,E.hx,E.i4,D.fe,D.ff,F.jA,F.jK,F.jM,F.jN,F.jO,F.k6,F.k7,F.ka,F.jW,F.jL,F.iP,F.iO,F.iH,F.iI,O.fX,O.fY,O.fZ,O.h_,O.h0,O.h1,T.i3,V.k5,V.hs,V.hJ,V.hI,V.hK,K.jX,K.jY,K.jZ,K.k_,K.k0,K.k1,K.k2,K.k3])
s(H.hY,[H.hQ,H.bJ])
t(P.fK,P.aD)
s(P.fK,[H.M,W.iX])
t(H.d4,H.b4)
s(H.d4,[H.ck,H.cm])
t(H.cl,H.ck)
t(H.c0,H.cl)
t(H.cn,H.cm)
t(H.d5,H.cn)
s(H.d5,[H.h9,H.ha,H.hb,H.hc,H.hd,H.d6,H.c1])
t(P.j9,P.jz)
t(P.j6,P.jd)
t(P.eo,P.fM)
t(P.dA,P.eo)
s(P.eT,[P.eN,P.fc])
t(P.eY,P.hT)
s(P.eY,[P.eO,P.fs,P.iB,P.iA])
t(P.iz,P.fc)
s(P.aa,[P.K,P.v])
s(P.ag,[P.bu,P.fu])
t(P.j_,P.bz)
s(W.f,[W.E,W.fh,W.bZ,W.aI,W.co,W.aL,W.at,W.cq,W.iQ,W.ch,P.eM,P.bg])
s(W.E,[W.S,W.aV])
s(W.S,[W.m,P.j])
s(W.m,[W.eG,W.eH,W.bi,W.bj,W.ah,W.fl,W.bS,W.hB,W.dn,W.hV,W.hW,W.c9])
t(W.eZ,W.an)
t(W.bM,W.dH)
s(W.ad,[W.f0,W.f1])
t(W.dK,W.dJ)
t(W.cO,W.dK)
t(W.dM,W.dL)
t(W.f6,W.dM)
t(W.ao,W.bh)
t(W.dP,W.dO)
t(W.bP,W.dP)
t(W.dR,W.dQ)
t(W.bR,W.dR)
t(W.bb,W.h)
s(W.bb,[W.bq,W.ar,W.bv])
t(W.h3,W.dW)
t(W.h5,W.dX)
t(W.dZ,W.dY)
t(W.h7,W.dZ)
t(W.e1,W.e0)
t(W.d7,W.e1)
t(W.e5,W.e4)
t(W.hn,W.e5)
t(W.hy,W.e6)
t(W.cp,W.co)
t(W.hM,W.cp)
t(W.e9,W.e8)
t(W.hN,W.e9)
t(W.hR,W.ed)
t(W.eh,W.eg)
t(W.hZ,W.eh)
t(W.cr,W.cq)
t(W.i_,W.cr)
t(W.ek,W.ej)
t(W.i9,W.ek)
t(W.bd,W.ar)
t(W.es,W.er)
t(W.iZ,W.es)
t(W.dI,W.cP)
t(W.eu,W.et)
t(W.j3,W.eu)
t(W.ew,W.ev)
t(W.e_,W.ew)
t(W.ey,W.ex)
t(W.jh,W.ey)
t(W.eA,W.ez)
t(W.jl,W.eA)
t(W.j0,W.iX)
t(W.j1,P.dm)
t(W.jn,W.e7)
t(P.jj,P.ji)
t(P.a9,P.j8)
t(P.dT,P.dS)
t(P.fB,P.dT)
t(P.e3,P.e2)
t(P.hi,P.e3)
t(P.c6,P.j)
t(P.ef,P.ee)
t(P.hU,P.ef)
t(P.em,P.el)
t(P.ib,P.em)
t(P.eK,P.dG)
t(P.hj,P.bg)
t(P.eb,P.ea)
t(P.hP,P.eb)
s(T.cT,[T.a3,R.dw])
s(D.W,[E.dl,D.bo,D.bp,D.B,X.hp])
s(E.eP,[Z.cG,A.dg,T.dq])
s(X.hp,[X.d1,X.b3,X.dv])
s(O.aW,[D.cZ,U.bQ])
s(D.eS,[U.eU,U.ai])
s(U.ai,[U.cK,U.df])
t(A.fQ,A.dg)
s(A.dx,[A.dy,A.ii,A.ij,A.ik,A.ig,A.Y,A.ih,A.J,A.ca,A.im,A.cc,A.ae,A.a_,A.bx])
t(F.hL,F.fg)
t(F.ie,F.fC)
t(F.iK,F.iL)
t(F.hg,F.iM)
t(O.d2,O.dp)
s(O.bW,[O.fR,O.fS,O.ap])
s(O.ap,[O.fV,O.fW])
t(T.i0,T.dq)
t(T.i1,T.i0)
t(X.fn,X.hX)
s(V.cJ,[V.f3,V.fp,V.fq,V.hm])
u(H.dz,H.ir)
u(H.ck,P.r)
u(H.cl,H.cR)
u(H.cm,P.r)
u(H.cn,H.cR)
u(P.dV,P.r)
u(P.eo,P.jr)
u(W.dH,W.f_)
u(W.dJ,P.r)
u(W.dK,W.G)
u(W.dL,P.r)
u(W.dM,W.G)
u(W.dO,P.r)
u(W.dP,W.G)
u(W.dQ,P.r)
u(W.dR,W.G)
u(W.dW,P.aD)
u(W.dX,P.aD)
u(W.dY,P.r)
u(W.dZ,W.G)
u(W.e0,P.r)
u(W.e1,W.G)
u(W.e4,P.r)
u(W.e5,W.G)
u(W.e6,P.aD)
u(W.co,P.r)
u(W.cp,W.G)
u(W.e8,P.r)
u(W.e9,W.G)
u(W.ed,P.aD)
u(W.eg,P.r)
u(W.eh,W.G)
u(W.cq,P.r)
u(W.cr,W.G)
u(W.ej,P.r)
u(W.ek,W.G)
u(W.er,P.r)
u(W.es,W.G)
u(W.et,P.r)
u(W.eu,W.G)
u(W.ev,P.r)
u(W.ew,W.G)
u(W.ex,P.r)
u(W.ey,W.G)
u(W.ez,P.r)
u(W.eA,W.G)
u(P.dS,P.r)
u(P.dT,W.G)
u(P.e2,P.r)
u(P.e3,W.G)
u(P.ee,P.r)
u(P.ef,W.G)
u(P.el,P.r)
u(P.em,W.G)
u(P.dG,P.aD)
u(P.ea,P.r)
u(P.eb,W.G)})()
var v={mangledGlobalNames:{v:"int",K:"double",aa:"num",k:"String",aw:"bool",b5:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.W]},{func:1,ret:-1,args:[D.W]},{func:1,ret:-1,args:[W.ar]},{func:1,ret:P.b5,args:[,,]},{func:1,ret:-1,args:[P.v,[P.i,E.aA]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.bv]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bq]},{func:1,ret:-1,args:[P.v,[P.i,D.a8]]},{func:1,ret:P.K},{func:1,ret:-1,args:[P.v,[P.i,U.ai]]},{func:1,ret:-1,args:[P.v,[P.i,V.aE]]},{func:1,ret:P.aw,args:[W.S,P.k,P.k,W.ci]},{func:1,ret:P.b5,args:[,]},{func:1,ret:P.bw,args:[,,]},{func:1,ret:-1,args:[W.bd]},{func:1,ret:P.aw,args:[[P.i,D.a8]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.q=W.bi.prototype
C.i=W.bj.prototype
C.N=W.ah.prototype
C.Q=J.a.prototype
C.b=J.aZ.prototype
C.R=J.cU.prototype
C.c=J.cV.prototype
C.u=J.cW.prototype
C.d=J.bT.prototype
C.a=J.b_.prototype
C.S=J.b0.prototype
C.A=J.hl.prototype
C.Y=P.de.prototype
C.B=W.dn.prototype
C.p=J.by.prototype
C.C=W.bd.prototype
C.D=W.ch.prototype
C.Z=new P.eO()
C.E=new P.eN()
C.r=function getTagFallback(o) {
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
C.t=function(hooks) { return hooks; }

C.L=new P.hk()
C.e=new P.iz()
C.M=new P.iB()
C.f=new P.j9()
C.m=new P.aX(0)
C.O=new P.aX(5e6)
C.P=new P.ft("element",!1,!1,!1)
C.v=H.c(u([127,2047,65535,1114111]),[P.v])
C.j=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.v])
C.T=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.k])
C.k=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.v])
C.l=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.v])
C.U=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.k])
C.w=H.c(u([]),[P.k])
C.V=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.v])
C.x=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.v])
C.h=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.v])
C.y=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.v])
C.W=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.v])
C.z=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.v])
C.n=H.c(u(["bind","if","ref","repeat","syntax"]),[P.k])
C.o=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.k])
C.X=new H.eX(0,{},C.w,[P.k,P.k])})();(function staticFields(){$.al=0
$.bK=null
$.l0=null
$.m0=null
$.lU=null
$.m4=null
$.jP=null
$.jV=null
$.kM=null
$.bC=null
$.cu=null
$.cv=null
$.kG=!1
$.aj=C.f
$.a5=[]
$.az=null
$.kk=null
$.l7=null
$.l6=null
$.cj=P.kr(P.k,P.fo)
$.lf=null
$.li=null
$.c3=null
$.lo=null
$.lB=null
$.lE=null
$.lD=null
$.iC=null
$.iD=null
$.iE=null
$.lC=null
$.lh=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oW","m9",function(){return H.m_("_$dart_dartClosure")})
u($,"oX","kS",function(){return H.m_("_$dart_js")})
u($,"oY","ma",function(){return H.au(H.id({
toString:function(){return"$receiver$"}}))})
u($,"oZ","mb",function(){return H.au(H.id({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"p_","mc",function(){return H.au(H.id(null))})
u($,"p0","md",function(){return H.au(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"p3","mg",function(){return H.au(H.id(void 0))})
u($,"p4","mh",function(){return H.au(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"p2","mf",function(){return H.au(H.lv(null))})
u($,"p1","me",function(){return H.au(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"p6","mj",function(){return H.au(H.lv(void 0))})
u($,"p5","mi",function(){return H.au(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pk","kT",function(){return P.nv()})
u($,"p7","mk",function(){return P.nr()})
u($,"pl","mo",function(){return H.n0(H.bB(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.v])))})
u($,"pn","mq",function(){return P.ne("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"po","mr",function(){return P.nU()})
u($,"pm","mp",function(){return P.la(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.k)})
u($,"pe","mn",function(){return Z.af(0)})
u($,"p8","ml",function(){return Z.af(511)})
u($,"pg","aS",function(){return Z.af(1)})
u($,"pf","aR",function(){return Z.af(2)})
u($,"pa","aQ",function(){return Z.af(4)})
u($,"ph","aT",function(){return Z.af(8)})
u($,"pi","bf",function(){return Z.af(16)})
u($,"pb","cA",function(){return Z.af(32)})
u($,"pc","cB",function(){return Z.af(64)})
u($,"pd","mm",function(){return Z.af(96)})
u($,"pj","bI",function(){return Z.af(128)})
u($,"p9","aP",function(){return Z.af(256)})
u($,"oV","m8",function(){return new V.fd(1e-9)})
u($,"oU","z",function(){return $.m8()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.c_,DataView:H.b4,ArrayBufferView:H.b4,Float32Array:H.c0,Float64Array:H.c0,Int16Array:H.h9,Int32Array:H.ha,Int8Array:H.hb,Uint16Array:H.hc,Uint32Array:H.hd,Uint8ClampedArray:H.d6,CanvasPixelArray:H.d6,Uint8Array:H.c1,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLBaseElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLInputElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,AccessibleNodeList:W.eF,HTMLAnchorElement:W.eG,HTMLAreaElement:W.eH,Blob:W.bh,HTMLBodyElement:W.bi,HTMLCanvasElement:W.bj,CDATASection:W.aV,CharacterData:W.aV,Comment:W.aV,ProcessingInstruction:W.aV,Text:W.aV,CSSPerspective:W.eZ,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.bM,MSStyleCSSProperties:W.bM,CSS2Properties:W.bM,CSSImageValue:W.ad,CSSKeywordValue:W.ad,CSSNumericValue:W.ad,CSSPositionValue:W.ad,CSSResourceValue:W.ad,CSSUnitValue:W.ad,CSSURLImageValue:W.ad,CSSStyleValue:W.ad,CSSMatrixComponent:W.an,CSSRotation:W.an,CSSScale:W.an,CSSSkew:W.an,CSSTranslation:W.an,CSSTransformComponent:W.an,CSSTransformValue:W.f0,CSSUnparsedValue:W.f1,DataTransferItemList:W.f4,HTMLDivElement:W.ah,DOMException:W.f5,ClientRectList:W.cO,DOMRectList:W.cO,DOMRectReadOnly:W.cP,DOMStringList:W.f6,DOMTokenList:W.f7,Element:W.S,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.ao,FileList:W.bP,FileWriter:W.fh,HTMLFormElement:W.fl,Gamepad:W.aB,History:W.fr,HTMLCollection:W.bR,HTMLFormControlsCollection:W.bR,HTMLOptionsCollection:W.bR,ImageData:W.aC,HTMLImageElement:W.bS,KeyboardEvent:W.bq,Location:W.fI,MediaList:W.h2,MessagePort:W.bZ,MIDIInputMap:W.h3,MIDIOutputMap:W.h5,MimeType:W.aF,MimeTypeArray:W.h7,PointerEvent:W.ar,MouseEvent:W.ar,DragEvent:W.ar,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,Attr:W.E,DocumentType:W.E,Node:W.E,NodeList:W.d7,RadioNodeList:W.d7,Plugin:W.aH,PluginArray:W.hn,RTCStatsReport:W.hy,HTMLSelectElement:W.hB,SourceBuffer:W.aI,SourceBufferList:W.hM,SpeechGrammar:W.aJ,SpeechGrammarList:W.hN,SpeechRecognitionResult:W.aK,Storage:W.hR,CSSStyleSheet:W.as,StyleSheet:W.as,HTMLTableElement:W.dn,HTMLTableRowElement:W.hV,HTMLTableSectionElement:W.hW,HTMLTemplateElement:W.c9,TextTrack:W.aL,TextTrackCue:W.at,VTTCue:W.at,TextTrackCueList:W.hZ,TextTrackList:W.i_,TimeRanges:W.i5,Touch:W.aM,TouchEvent:W.bv,TouchList:W.i9,TrackDefaultList:W.ia,CompositionEvent:W.bb,FocusEvent:W.bb,TextEvent:W.bb,UIEvent:W.bb,URL:W.iy,VideoTrackList:W.iQ,WheelEvent:W.bd,Window:W.ch,DOMWindow:W.ch,CSSRuleList:W.iZ,ClientRect:W.dI,DOMRect:W.dI,GamepadList:W.j3,NamedNodeMap:W.e_,MozNamedAttrMap:W.e_,SpeechRecognitionResultList:W.jh,StyleSheetList:W.jl,SVGLength:P.b1,SVGLengthList:P.fB,SVGNumber:P.b6,SVGNumberList:P.hi,SVGPointList:P.hq,SVGScriptElement:P.c6,SVGStringList:P.hU,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.ba,SVGTransformList:P.ib,AudioBuffer:P.eJ,AudioParamMap:P.eK,AudioTrackList:P.eM,AudioContext:P.bg,webkitAudioContext:P.bg,BaseAudioContext:P.bg,OfflineAudioContext:P.hj,WebGL2RenderingContext:P.de,SQLResultSetRowList:P.hP})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.d4.$nativeSuperclassTag="ArrayBufferView"
H.ck.$nativeSuperclassTag="ArrayBufferView"
H.cl.$nativeSuperclassTag="ArrayBufferView"
H.c0.$nativeSuperclassTag="ArrayBufferView"
H.cm.$nativeSuperclassTag="ArrayBufferView"
H.cn.$nativeSuperclassTag="ArrayBufferView"
H.d5.$nativeSuperclassTag="ArrayBufferView"
W.co.$nativeSuperclassTag="EventTarget"
W.cp.$nativeSuperclassTag="EventTarget"
W.cq.$nativeSuperclassTag="EventTarget"
W.cr.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.m2,[])
else K.m2([])})})()
//# sourceMappingURL=test.dart.js.map
