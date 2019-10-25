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
a[c]=function(){a[c]=function(){H.oI(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kK"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kK"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kK(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kr:function kr(){},
jQ:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
ko:function(){return new P.cb("No element")},
mH:function(){return new P.cb("Too many elements")},
dm:function(a,b,c,d){if(c-b<=32)H.nb(a,b,c,d)
else H.na(a,b,c,d)},
nb:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a4()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.b.m(a,s,a[q])
s=q}C.b.m(a,s,t)}},
na:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.af(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.af(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a4()
if(a1>0){p=q
q=r
r=p}C.b.m(a2,d,u)
C.b.m(a2,b,s)
C.b.m(a2,c,q)
if(a3<0||a3>=a2.length)return H.c(a2,a3)
C.b.m(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.c(a2,a4)
C.b.m(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.J(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.P()
if(k<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a4()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.b.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.b.m(a2,o,a2[n])
C.b.m(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.c(a2,n)
C.b.m(a2,m,a2[n])
C.b.m(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.P()
if(g<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a4()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a4()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.P()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.b.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.b.m(a2,o,a2[n])
C.b.m(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.b.m(a2,m,a2[n])
C.b.m(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.c(a2,a1)
C.b.m(a2,a3,a2[a1])
C.b.m(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.c(a2,a1)
C.b.m(a2,a4,a2[a1])
C.b.m(a2,a1,r)
H.dm(a2,a3,o-2,a5)
H.dm(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.c(a2,o)
if(!J.J(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.c(a2,n)
if(!J.J(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.P()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.b.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.b.m(a2,o,a2[n])
C.b.m(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.b.m(a2,m,a2[n])
C.b.m(a2,n,l)}n=j
break}}}H.dm(a2,o,n,a5)}else H.dm(a2,o,n,a5)},
m:function m(a){this.a=a},
fk:function fk(){},
d7:function d7(){},
bY:function bY(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fX:function fX(a,b,c){this.a=a
this.b=b
this.$ti=c},
fY:function fY(a,b){this.a=null
this.b=a
this.c=b},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
cl:function cl(a,b,c){this.a=a
this.b=b
this.$ti=c},
iW:function iW(a,b){this.a=a
this.b=b},
cW:function cW(){},
iB:function iB(){},
dD:function dD(){},
mA:function(){throw H.d(P.y("Cannot modify unmodifiable Map"))},
eK:function(a){var u,t=H.oJ(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
os:function(a){return v.types[a]},
lW:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.O(a).$iz},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a3(a)
if(typeof u!=="string")throw H.d(H.ak(a))
return u},
c8:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
n2:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.c(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.W(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.C(s,q)|32)>t)return}return parseInt(a,b)},
c9:function(a){return H.mU(a)+H.lN(H.cD(a),0,null)},
mU:function(a){var u,t,s,r,q,p,o,n=J.O(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ibz){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.eK(t.length>1&&C.a.C(t,0)===36?C.a.ai(t,1):t)},
mV:function(){if(!!self.location)return self.location.href
return},
li:function(a){var u,t,s,r,q=J.af(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
n3:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ak(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.aT(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.d(H.ak(s))}return H.li(r)},
lj:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ak(s))
if(s<0)throw H.d(H.ak(s))
if(s>65535)return H.n3(a)}return H.li(a)},
n4:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bu:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aT(u,10))>>>0,56320|u&1023)}}throw H.d(P.W(a,0,1114111,null,null))},
bt:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
n1:function(a){var u=H.bt(a).getFullYear()+0
return u},
n_:function(a){var u=H.bt(a).getMonth()+1
return u},
mW:function(a){var u=H.bt(a).getDate()+0
return u},
mX:function(a){var u=H.bt(a).getHours()+0
return u},
mZ:function(a){var u=H.bt(a).getMinutes()+0
return u},
n0:function(a){var u=H.bt(a).getSeconds()+0
return u},
mY:function(a){var u=H.bt(a).getMilliseconds()+0
return u},
v:function(a){throw H.d(H.ak(a))},
c:function(a,b){if(a==null)J.af(a)
throw H.d(H.bH(a,b))},
bH:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.al(!0,b,s,null)
u=J.af(a)
if(!(b<0)){if(typeof u!=="number")return H.v(u)
t=b>=u}else t=!0
if(t)return P.L(b,a,s,null,u)
return P.hD(b,s)},
ol:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bv(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bv(a,c,!0,b,"end",u)
return new P.al(!0,b,"end",null)},
ak:function(a){return new P.al(!0,a,null,null)},
oh:function(a){if(typeof a!=="number")throw H.d(H.ak(a))
return a},
d:function(a){var u
if(a==null)a=new P.df()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.m0})
u.name=""}else u.toString=H.m0
return u},
m0:function(){return J.a3(this.dartException)},
u:function(a){throw H.d(a)},
p:function(a){throw H.d(P.aE(a))},
ay:function(a){var u,t,s,r,q,p
a=H.m_(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.l])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iq(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ir:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ls:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
le:function(a,b){return new H.hq(a,b==null?null:b.method)},
ks:function(a,b){var u=b==null,t=u?null:b.method
return new H.fK(a,t,u?null:b.receiver)},
ad:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kb(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aT(t,16)&8191)===10)switch(s){case 438:return f.$1(H.ks(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.le(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.m3()
q=$.m4()
p=$.m5()
o=$.m6()
n=$.m9()
m=$.ma()
l=$.m8()
$.m7()
k=$.mc()
j=$.mb()
i=r.ao(u)
if(i!=null)return f.$1(H.ks(u,i))
else{i=q.ao(u)
if(i!=null){i.method="call"
return f.$1(H.ks(u,i))}else{i=p.ao(u)
if(i==null){i=o.ao(u)
if(i==null){i=n.ao(u)
if(i==null){i=m.ao(u)
if(i==null){i=l.ao(u)
if(i==null){i=o.ao(u)
if(i==null){i=k.ao(u)
if(i==null){i=j.ao(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.le(u,i))}}return f.$1(new H.iA(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dp()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.al(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dp()
return a},
kM:function(a){var u
if(a==null)return new H.ei(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ei(a)},
op:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
oy:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.t("Unsupported number of arguments for wrapped closure"))},
bG:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oy)
a.$identity=u
return u},
mz:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.i_().constructor.prototype):Object.create(new H.bL(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aq
if(typeof t!=="number")return t.A()
$.aq=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.l1(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mv(d,e,f)
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
mv:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.os,a)
if(typeof a=="function")if(b)return a
else{u=c?H.l0:H.ke
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
mw:function(a,b,c,d){var u=H.ke
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
l1:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.my(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mw(t,!r,u,b)
if(t===0){r=$.aq
if(typeof r!=="number")return r.A()
$.aq=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bM
return new Function(r+H.e(q==null?$.bM=H.eY("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aq
if(typeof r!=="number")return r.A()
$.aq=r+1
o+=r
r="return function("+o+"){return this."
q=$.bM
return new Function(r+H.e(q==null?$.bM=H.eY("self"):q)+"."+H.e(u)+"("+o+");}")()},
mx:function(a,b,c,d){var u=H.ke,t=H.l0
switch(b?-1:a){case 0:throw H.d(H.n8("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
my:function(a,b){var u,t,s,r,q,p,o,n=$.bM
if(n==null)n=$.bM=H.eY("self")
u=$.l_
if(u==null)u=$.l_=H.eY("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mx(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.aq
if(typeof u!=="number")return u.A()
$.aq=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.aq
if(typeof u!=="number")return u.A()
$.aq=u+1
return new Function(n+u+"}")()},
kK:function(a,b,c,d,e,f,g){return H.mz(a,b,c,d,!!e,!!f,g)},
ke:function(a){return a.a},
l0:function(a){return a.c},
eY:function(a){var u,t,s,r=new H.bL("self","target","receiver","name"),q=J.kp(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
oC:function(a,b){throw H.d(H.mu(a,H.eK(b.substring(2))))},
j:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.O(a)[b]
else u=!0
if(u)return a
H.oC(a,b)},
on:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mu:function(a,b){return new H.eZ("CastError: "+P.km(a)+": type '"+H.e(H.od(a))+"' is not a subtype of type '"+b+"'")},
od:function(a){var u,t=J.O(a)
if(!!t.$ibN){u=H.on(t)
if(u!=null)return H.oD(u)
return"Closure"}return H.c9(a)},
oI:function(a){throw H.d(new P.fb(a))},
n8:function(a){return new H.hK(a)},
lU:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cD:function(a){if(a==null)return
return a.$ti},
pi:function(a,b,c){return H.k9(a["$a"+H.e(c)],H.cD(b))},
or:function(a,b,c,d){var u=H.k9(a["$a"+H.e(c)],H.cD(b))
return u==null?null:u[d]},
kL:function(a,b,c){var u=H.k9(a["$a"+H.e(b)],H.cD(a))
return u==null?null:u[c]},
eI:function(a,b){var u=H.cD(a)
return u==null?null:u[b]},
oD:function(a){return H.bj(a,null)},
bj:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.eK(a[0].name)+H.lN(a,1,b)
if(typeof a=="function")return H.eK(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.e(b[t])}if('func' in a)return H.nM(a,b)
if('futureOr' in a)return"FutureOr<"+H.bj("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nM:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.l])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.a.A(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a_)p+=" extends "+H.bj(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bj(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bj(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bj(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oo(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bj(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lN:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.P("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bj(p,c)}return"<"+u.h(0)+">"},
k9:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pg:function(a,b,c){return a.apply(b,H.k9(J.O(b)["$a"+H.e(c)],H.cD(b)))},
ph:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oz:function(a){var u,t,s,r,q=$.lV.$1(a),p=$.jO[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jU[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.lS.$2(a,q)
if(q!=null){p=$.jO[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jU[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.k7(u)
$.jO[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jU[q]=u
return u}if(s==="-"){r=H.k7(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lY(a,u)
if(s==="*")throw H.d(P.iz(q))
if(v.leafTags[q]===true){r=H.k7(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lY(a,u)},
lY:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kO(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
k7:function(a){return J.kO(a,!1,null,!!a.$iz)},
oA:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.k7(u)
else return J.kO(u,c,null,null)},
ow:function(){if(!0===$.kN)return
$.kN=!0
H.ox()},
ox:function(){var u,t,s,r,q,p,o,n
$.jO=Object.create(null)
$.jU=Object.create(null)
H.ov()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lZ.$1(q)
if(p!=null){o=H.oA(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
ov:function(){var u,t,s,r,q,p,o=C.G()
o=H.bF(C.H,H.bF(C.I,H.bF(C.v,H.bF(C.v,H.bF(C.J,H.bF(C.K,H.bF(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lV=new H.jR(r)
$.lS=new H.jS(q)
$.lZ=new H.jT(p)},
bF:function(a,b){return a(b)||b},
mJ:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(P.Q("Illegal RegExp pattern ("+String(p)+")",a,null))},
oF:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
om:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
m_:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kQ:function(a,b,c){var u=H.oG(a,b,c)
return u},
oG:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.m_(b),'g'),H.om(c))},
f4:function f4(){},
f5:function f5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iq:function iq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hq:function hq(a,b){this.a=a
this.b=b},
fK:function fK(a,b,c){this.a=a
this.b=b
this.c=c},
iA:function iA(a){this.a=a},
kb:function kb(a){this.a=a},
ei:function ei(a){this.a=a
this.b=null},
bN:function bN(){},
i7:function i7(){},
i_:function i_(){},
bL:function bL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eZ:function eZ(a){this.a=a},
hK:function hK(a){this.a=a},
N:function N(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fN:function fN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fO:function fO(a,b){this.a=a
this.$ti=b},
fP:function fP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jR:function jR(a){this.a=a},
jS:function jS(a){this.a=a},
jT:function jT(a){this.a=a},
fJ:function fJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bD:function(a){return a},
mS:function(a){return new Int8Array(a)},
aA:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bH(b,a))},
nK:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.ol(a,b,c))
return b},
c3:function c3(){},
bb:function bb(){},
da:function da(){},
c4:function c4(){},
db:function db(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
dc:function dc(){},
c5:function c5(){},
cp:function cp(){},
cq:function cq(){},
cr:function cr(){},
cs:function cs(){},
oo:function(a){return J.l9(a?Object.keys(a):[],null)},
oJ:function(a){return v.mangledGlobalNames[a]},
oB:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kO:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jP:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kN==null){H.ow()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.iz("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kR()]
if(r!=null)return r
r=H.oz(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.kR(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
mI:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.kX(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.W(a,0,4294967295,"length",null))
return J.l9(new Array(a),b)},
l9:function(a,b){return J.kp(H.b(a,[b]))},
kp:function(a){a.fixed$length=Array
return a},
O:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d1.prototype
return J.d0.prototype}if(typeof a=="string")return J.b7.prototype
if(a==null)return J.d2.prototype
if(typeof a=="boolean")return J.fI.prototype
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b8.prototype
return a}if(a instanceof P.a_)return a
return J.jP(a)},
cB:function(a){if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b8.prototype
return a}if(a instanceof P.a_)return a
return J.jP(a)},
eH:function(a){if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b8.prototype
return a}if(a instanceof P.a_)return a
return J.jP(a)},
oq:function(a){if(typeof a=="number")return J.bW.prototype
if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(!(a instanceof P.a_))return J.bz.prototype
return a},
cC:function(a){if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(!(a instanceof P.a_))return J.bz.prototype
return a},
bJ:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b8.prototype
return a}if(a instanceof P.a_)return a
return J.jP(a)},
J:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.O(a).t(a,b)},
cH:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lW(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cB(a).i(a,b)},
kc:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.lW(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eH(a).m(a,b,c)},
ml:function(a,b){return J.cC(a).C(a,b)},
mm:function(a,b,c){return J.bJ(a).fQ(a,b,c)},
mn:function(a,b,c,d){return J.bJ(a).h7(a,b,c,d)},
mo:function(a,b){return J.cC(a).a_(a,b)},
kd:function(a,b){return J.oq(a).hi(a,b)},
eL:function(a,b){return J.eH(a).I(a,b)},
mp:function(a,b,c,d){return J.bJ(a).ht(a,b,c,d)},
kT:function(a,b){return J.eH(a).F(a,b)},
mq:function(a){return J.bJ(a).ghf(a)},
kU:function(a){return J.bJ(a).gc1(a)},
cI:function(a){return J.O(a).gG(a)},
b_:function(a){return J.eH(a).gU(a)},
af:function(a){return J.cB(a).gl(a)},
kV:function(a){return J.eH(a).hX(a)},
mr:function(a,b){return J.bJ(a).hZ(a,b)},
ms:function(a,b,c){return J.cC(a).u(a,b,c)},
mt:function(a){return J.cC(a).i7(a)},
a3:function(a){return J.O(a).h(a)},
a:function a(){},
fI:function fI(){},
d2:function d2(){},
d3:function d3(){},
hu:function hu(){},
bz:function bz(){},
b8:function b8(){},
b6:function b6(a){this.$ti=a},
kq:function kq(a){this.$ti=a},
a4:function a4(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bW:function bW(){},
d1:function d1(){},
d0:function d0(){},
b7:function b7(){}},P={
nm:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oe()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bG(new P.iY(s),1)).observe(u,{childList:true})
return new P.iX(s,u,t)}else if(self.setImmediate!=null)return P.of()
return P.og()},
nn:function(a){self.scheduleImmediate(H.bG(new P.iZ(a),0))},
no:function(a){self.setImmediate(H.bG(new P.j_(a),0))},
np:function(a){P.ky(C.n,a)},
ky:function(a,b){var u=C.d.af(a.a,1000)
return P.nu(u<0?0:u,b)},
lr:function(a,b){var u=C.d.af(a.a,1000)
return P.nv(u<0?0:u,b)},
nu:function(a,b){var u=new P.eo()
u.ev(a,b)
return u},
nv:function(a,b){var u=new P.eo()
u.ew(a,b)
return u},
o7:function(){var u,t
for(;u=$.bE,u!=null;){$.cA=null
t=u.b
$.bE=t
if(t==null)$.cz=null
u.a.$0()}},
oc:function(){$.kI=!0
try{P.o7()}finally{$.cA=null
$.kI=!1
if($.bE!=null)$.kS().$1(P.lT())}},
oa:function(a){var u=new P.dL(a)
if($.bE==null){$.bE=$.cz=u
if(!$.kI)$.kS().$1(P.lT())}else $.cz=$.cz.b=u},
ob:function(a){var u,t,s=$.bE
if(s==null){P.oa(a)
$.cA=$.cz
return}u=new P.dL(a)
t=$.cA
if(t==null){u.b=s
$.bE=$.cA=u}else{u.b=t.b
$.cA=t.b=u
if(u.b==null)$.cz=u}},
lq:function(a,b){var u=$.ao
if(u===C.f)return P.ky(a,b)
return P.ky(a,u.hg(b))},
ne:function(a,b){var u=$.ao
if(u===C.f)return P.lr(a,b)
return P.lr(a,u.dk(b,P.dv))},
lO:function(a,b,c,d,e){var u={}
u.a=d
P.ob(new P.jM(u,e))},
o8:function(a,b,c,d){var u,t=$.ao
if(t===c)return d.$0()
$.ao=c
u=t
try{t=d.$0()
return t}finally{$.ao=u}},
o9:function(a,b,c,d,e){var u,t=$.ao
if(t===c)return d.$1(e)
$.ao=c
u=t
try{t=d.$1(e)
return t}finally{$.ao=u}},
iY:function iY(a){this.a=a},
iX:function iX(a,b,c){this.a=a
this.b=b
this.c=c},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
eo:function eo(){this.c=0},
ju:function ju(a,b){this.a=a
this.b=b},
jt:function jt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dL:function dL(a){this.a=a
this.b=null},
dr:function dr(){},
i2:function i2(){},
dv:function dv(){},
jD:function jD(){},
jM:function jM(a,b){this.a=a
this.b=b},
jd:function jd(){},
je:function je(a,b){this.a=a
this.b=b},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
mL:function(a,b){return new H.N([a,b])},
kt:function(a,b){return new H.N([a,b])},
mN:function(a){return H.op(a,new H.N([null,null]))},
d6:function(a){return new P.ja([a])},
kD:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nt:function(a,b){var u=new P.e_(a,b)
u.c=a.e
return u},
mG:function(a,b,c){var u,t
if(P.kJ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.l])
$.a7.push(a)
try{P.nN(a,u)}finally{if(0>=$.a7.length)return H.c($.a7,-1)
$.a7.pop()}t=P.lo(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kn:function(a,b,c){var u,t
if(P.kJ(a))return b+"..."+c
u=new P.P(b)
$.a7.push(a)
try{t=u
t.a=P.lo(t.a,a,", ")}finally{if(0>=$.a7.length)return H.c($.a7,-1)
$.a7.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kJ:function(a){var u,t
for(u=$.a7.length,t=0;t<u;++t)if(a===$.a7[t])return!0
return!1},
nN:function(a,b){var u,t,s,r,q,p,o,n=a.gU(a),m=0,l=0
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
mM:function(a,b,c){var u=P.mL(b,c)
a.F(0,new P.fQ(u))
return u},
la:function(a,b){var u,t,s=P.d6(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t)s.n(0,a[t])
return s},
ku:function(a){var u,t={}
if(P.kJ(a))return"{...}"
u=new P.P("")
try{$.a7.push(a)
u.a+="{"
t.a=!0
J.kT(a,new P.fV(t,u))
u.a+="}"}finally{if(0>=$.a7.length)return H.c($.a7,-1)
$.a7.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ja:function ja(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jb:function jb(a){this.a=a
this.c=this.b=null},
e_:function e_(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fQ:function fQ(a){this.a=a},
fR:function fR(){},
r:function r(){},
fU:function fU(){},
fV:function fV(a,b){this.a=a
this.b=b},
aJ:function aJ(){},
jv:function jv(){},
fW:function fW(){},
dE:function dE(a,b){this.a=a
this.$ti=b},
jh:function jh(){},
e0:function e0(){},
eu:function eu(){},
nh:function(a,b,c,d){if(b instanceof Uint8Array)return P.ni(!1,b,c,d)
return},
ni:function(a,b,c,d){var u,t,s=$.md()
if(s==null)return
u=0===c
if(u&&!0)return P.kB(s,b)
t=b.length
d=P.be(c,d,t)
if(u&&d===t)return P.kB(s,b)
return P.kB(s,b.subarray(c,d))},
kB:function(a,b){if(P.nk(b))return
return P.nl(a,b)},
nl:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ad(t)}return},
nk:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nj:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ad(t)}return},
lQ:function(a,b,c){var u,t,s
for(u=J.cB(a),t=b;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.at()
if((s&127)!==s)return t-b}return c-b},
kZ:function(a,b,c,d,e,f){if(C.d.bd(f,4)!==0)throw H.d(P.Q("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.Q("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.Q("Invalid base64 padding, more than two '=' characters",a,b))},
eV:function eV(){},
eW:function eW(){},
f0:function f0(){},
f6:function f6(){},
fm:function fm(){},
fE:function fE(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fD:function fD(a){this.a=a},
iJ:function iJ(){},
iL:function iL(){},
jB:function jB(a){this.b=0
this.c=a},
iK:function iK(a){this.a=a},
jA:function jA(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eJ:function(a,b,c){var u=H.n2(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.Q(a,null,null))},
mE:function(a){if(a instanceof H.bN)return a.h(0)
return"Instance of '"+H.e(H.c9(a))+"'"},
mO:function(a,b,c){var u,t,s=J.mI(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
lb:function(a,b,c){var u,t=H.b([],[c])
for(u=J.b_(a);u.v();)t.push(u.gH(u))
if(b)return t
return J.kp(t)},
cc:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.be(b,c,u)
return H.lj(b>0||c<u?C.b.cH(a,b,c):a)}if(!!J.O(a).$ic5)return H.n4(a,b,P.be(b,c,a.length))
return P.nc(a,b,c)},
nc:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.d(P.W(b,0,J.af(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.W(c,b,J.af(a),q,q))
t=J.b_(a)
for(s=0;s<b;++s)if(!t.v())throw H.d(P.W(b,0,s,q,q))
r=[]
if(u)for(;t.v();)r.push(t.gH(t))
else for(s=b;s<c;++s){if(!t.v())throw H.d(P.W(c,b,s,q,q))
r.push(t.gH(t))}return H.lj(r)},
n6:function(a){return new H.fJ(a,H.mJ(a,!1,!0,!1,!1,!1))},
lo:function(a,b,c){var u=J.b_(b)
if(!u.v())return a
if(c.length===0){do a+=H.e(u.gH(u))
while(u.v())}else{a+=H.e(u.gH(u))
for(;u.v();)a=a+c+H.e(u.gH(u))}return a},
lu:function(){var u=H.mV()
if(u!=null)return P.ng(u)
throw H.d(P.y("'Uri.base' is not supported"))},
ev:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mj().b
if(typeof b!=="string")H.u(H.ak(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghs().c2(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bu(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mB:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mC:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cR:function(a){if(a>=10)return""+a
return"0"+a},
l2:function(a){return new P.b2(1000*a)},
km:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a3(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mE(a)},
cJ:function(a){return new P.al(!1,null,null,a)},
kX:function(a,b,c){return new P.al(!0,a,b,c)},
hD:function(a,b){return new P.bv(null,null,!0,a,b,"Value not in range")},
W:function(a,b,c,d,e){return new P.bv(b,c,!0,a,d,"Invalid value")},
be:function(a,b,c){if(0>a||a>c)throw H.d(P.W(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.W(b,a,c,"end",null))
return b}return c},
lk:function(a,b){if(typeof a!=="number")return a.P()
if(a<0)throw H.d(P.W(a,0,null,b,null))},
L:function(a,b,c,d,e){var u=e==null?J.af(b):e
return new P.fG(u,!0,a,c,"Index out of range")},
y:function(a){return new P.iC(a)},
iz:function(a){return new P.iy(a)},
ln:function(a){return new P.cb(a)},
aE:function(a){return new P.f3(a)},
t:function(a){return new P.dT(a)},
Q:function(a,b,c){return new P.fv(a,b,c)},
mP:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.c(s,u)
s[u]=t}return s},
kP:function(a){H.oB(a)},
ng:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.C(a,4)^58)*3|C.a.C(a,0)^100|C.a.C(a,1)^97|C.a.C(a,2)^116|C.a.C(a,3)^97)>>>0
if(u===0)return P.lt(e<e?C.a.u(a,0,e):a,5,f).ge9()
else if(u===32)return P.lt(C.a.u(a,5,e),0,f).ge9()}t=new Array(8)
t.fixed$length=Array
s=H.b(t,[P.w])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.lP(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.i9()
if(r>=0)if(P.lP(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.A()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.P()
if(typeof n!=="number")return H.v(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.a.ac(a,"..",o)))j=n>o+2&&C.a.ac(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.ac(a,"file",0)){if(q<=0){if(!C.a.ac(a,"/",o)){i="file:///"
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
a=C.a.aW(a,o,n,"/");++e
n=h}k="file"}else if(C.a.ac(a,"http",0)){if(t&&p+3===o&&C.a.ac(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aW(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.ac(a,"https",0)){if(t&&p+4===o&&C.a.ac(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aW(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.u(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jk(a,r,q,p,o,n,m,k)}return P.nw(a,0,e,r,q,p,o,n,m,k)},
lw:function(a){var u=P.l
return C.b.hx(H.b(a.split("&"),[u]),P.kt(u,u),new P.iH(C.e))},
nf:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iE(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.a_(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eJ(C.a.u(a,s,t),n,n)
if(typeof p!=="number")return p.a4()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.c(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eJ(C.a.u(a,s,c),n,n)
if(typeof p!=="number")return p.a4()
if(p>255)k.$2(l,s)
if(r>=u)return H.c(j,r)
j[r]=p
return j},
lv:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iF(a),d=new P.iG(e,a)
if(a.length<2)e.$1("address is too short")
u=H.b([],[P.w])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.a_(a,t)
if(p===58){if(t===b){++t
if(C.a.a_(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gaA(u)
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
i+=2}else{f=C.d.aT(h,8)
if(i<0||i>=k)return H.c(l,i)
l[i]=f
f=i+1
if(f>=k)return H.c(l,f)
l[f]=h&255
i+=2}}return l},
nw:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nE(a,b,d)
else{if(d===b)P.bC(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nF(a,u,e-1):""
s=P.nB(a,e,f,!1)
if(typeof f!=="number")return f.A()
r=f+1
if(typeof g!=="number")return H.v(g)
q=r<g?P.nD(P.eJ(C.a.u(a,r,g),new P.jw(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nC(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.P()
o=h<i?P.kF(a,h+1,i,n):n
return new P.bB(j,t,s,q,p,o,i<c?P.nA(a,i+1,c):n)},
lH:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bC:function(a,b,c){throw H.d(P.Q(c,a,b))},
nD:function(a,b){if(a!=null&&a===P.lH(b))return
return a},
nB:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.a_(a,b)===91){if(typeof c!=="number")return c.K()
u=c-1
if(C.a.a_(a,u)!==93)P.bC(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.ny(a,t,u)
if(typeof s!=="number")return s.P()
if(s<u){r=s+1
q=P.lM(a,C.a.ac(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lv(a,t,s)
return C.a.u(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.v(c)
p=b
for(;p<c;++p)if(C.a.a_(a,p)===58){s=C.a.bm(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lM(a,C.a.ac(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lv(a,b,s)
return"["+C.a.u(a,b,s)+q+"]"}return P.nH(a,b,c)},
ny:function(a,b,c){var u,t=C.a.bm(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.v(c)
u=t<c}else u=!1
return u?t:c},
lM:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.P(d):null
if(typeof c!=="number")return H.v(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.a_(a,u)
if(r===37){q=P.kG(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.P("")
o=l.a+=C.a.u(a,t,u)
if(p)q=C.a.u(a,u,u+3)
else if(q==="%")P.bC(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.c(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.P("")
if(t<u){l.a+=C.a.u(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.a_(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.P("")
l.a+=C.a.u(a,t,u)
l.a+=P.kE(r)
u+=m
t=u}}}if(l==null)return C.a.u(a,b,c)
if(t<c)l.a+=C.a.u(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
nH:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.v(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.a_(a,u)
if(q===37){p=P.kG(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.P("")
n=C.a.u(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.u(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.c(C.z,o)
o=(C.z[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.P("")
if(t<u){s.a+=C.a.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.c(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bC(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.a_(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.P("")
n=C.a.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kE(q)
u+=l
t=u}}}}if(s==null)return C.a.u(a,b,c)
if(t<c){n=C.a.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nE:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lJ(C.a.C(a,b)))P.bC(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.C(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.c(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bC(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.u(a,b,c)
return P.nx(t?a.toLowerCase():a)},
nx:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nF:function(a,b,c){return P.cx(a,b,c,C.W,!1)},
nC:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cx(a,b,c,C.A,!0):C.i.ip(d,new P.jx(),P.l).k(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a6(u,"/"))u="/"+u
return P.nG(u,e,f)},
nG:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a6(a,"/"))return P.nI(a,!u||c)
return P.nJ(a)},
kF:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.d(P.cJ("Both query and queryParameters specified"))
return P.cx(a,b,c,C.l,!0)}if(d==null)return
u=new P.P("")
t.a=""
d.F(0,new P.jy(new P.jz(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nA:function(a,b,c){return P.cx(a,b,c,C.l,!0)},
kG:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.a_(a,b+1)
t=C.a.a_(a,p)
s=H.jQ(u)
r=H.jQ(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aT(q,4)
if(p>=8)return H.c(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bu(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.u(a,b,b+3).toUpperCase()
return},
kE:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.w])
t[0]=37
t[1]=C.a.C(m,a>>>4)
t[2]=C.a.C(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.w])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.d.h_(a,6*r)&63|s
if(q>=u)return H.c(t,q)
t[q]=37
o=q+1
n=C.a.C(m,p>>>4)
if(o>=u)return H.c(t,o)
t[o]=n
n=q+2
o=C.a.C(m,p&15)
if(n>=u)return H.c(t,n)
t[n]=o
q+=3}}return P.cc(t,0,null)},
cx:function(a,b,c,d,e){var u=P.lL(a,b,c,d,e)
return u==null?C.a.u(a,b,c):u},
lL:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.P()
if(typeof c!=="number")return H.v(c)
if(!(o<c))break
c$0:{u=C.a.a_(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.c(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kG(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.c(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bC(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.a_(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kE(u)}}if(m==null)m=new P.P("")
m.a+=C.a.u(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.v(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.P()
if(n<c)m.a+=C.a.u(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lK:function(a){if(C.a.a6(a,"."))return!0
return C.a.dT(a,"/.")!==-1},
nJ:function(a){var u,t,s,r,q,p,o
if(!P.lK(a))return a
u=H.b([],[P.l])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.J(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.c(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.k(u,"/")},
nI:function(a,b){var u,t,s,r,q,p
if(!P.lK(a))return!b?P.lI(a):a
u=H.b([],[P.l])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gaA(u)!==".."){if(0>=u.length)return H.c(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.c(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gaA(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.c(u,0)
t=P.lI(u[0])
if(0>=u.length)return H.c(u,0)
u[0]=t}return C.b.k(u,"/")},
lI:function(a){var u,t,s,r=a.length
if(r>=2&&P.lJ(J.ml(a,0)))for(u=1;u<r;++u){t=C.a.C(a,u)
if(t===58)return C.a.u(a,0,u)+"%3A"+C.a.ai(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.c(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nz:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.C(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.cJ("Invalid URL encoding"))}}return u},
kH:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.C(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.u(a,b,c)
else r=new H.m(C.a.u(a,b,c))}else{r=H.b([],[P.w])
for(s=a.length,q=b;q<c;++q){t=C.a.C(a,q)
if(t>127)throw H.d(P.cJ("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.cJ("Truncated URI"))
r.push(P.nz(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iK(!1).c2(r)},
lJ:function(a){var u=a|32
return 97<=u&&u<=122},
lt:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.w])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.C(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.Q(m,a,t))}}if(s<0&&t>b)throw H.d(P.Q(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.C(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gaA(l)
if(r!==44||t!==p+7||!C.a.ac(a,"base64",p+1))throw H.d(P.Q("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.F.hH(0,a,o,u)
else{n=P.lL(a,o,u,C.l,!0)
if(n!=null)a=C.a.aW(a,o,u,n)}return new P.iD(a,l,c)},
nL:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.mP(22,new P.jH(),P.bx),n=new P.jG(o),m=new P.jI(),l=new P.jJ(),k=n.$2(0,225)
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
lP:function(a,b,c,d,e){var u,t,s,r,q,p=$.mk()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.c(p,d)
t=p[d]
s=C.a.C(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.c(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.c(e,q)
e[q]=u}return d},
aB:function aB(){},
a8:function a8(a,b){this.a=a
this.b=b},
I:function I(){},
b2:function b2(a){this.a=a},
fi:function fi(){},
fj:function fj(){},
bp:function bp(){},
df:function df(){},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bv:function bv(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fG:function fG(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iC:function iC(a){this.a=a},
iy:function iy(a){this.a=a},
cb:function cb(a){this.a=a},
f3:function f3(a){this.a=a},
ht:function ht(){},
dp:function dp(){},
fb:function fb(a){this.a=a},
dT:function dT(a){this.a=a},
fv:function fv(a,b,c){this.a=a
this.b=b
this.c=c},
fx:function fx(){},
w:function w(){},
h:function h(){},
fH:function fH(){},
o:function o(){},
R:function R(){},
bc:function bc(){},
ac:function ac(){},
a_:function a_(){},
l:function l(){},
P:function P(a){this.a=a},
iH:function iH(a){this.a=a},
iE:function iE(a){this.a=a},
iF:function iF(a){this.a=a},
iG:function iG(a,b){this.a=a
this.b=b},
bB:function bB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jw:function jw(a,b){this.a=a
this.b=b},
jx:function jx(){},
jz:function jz(a,b){this.a=a
this.b=b},
jy:function jy(a){this.a=a},
iD:function iD(a,b,c){this.a=a
this.b=b
this.c=c},
jH:function jH(){},
jG:function jG(a){this.a=a},
jI:function jI(){},
jJ:function jJ(){},
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
j3:function j3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
ok:function(a){var u,t=J.O(a)
if(!!t.$iaI){u=t.gdq(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.et(a.data,a.height,a.width)},
oj:function(a){if(a instanceof P.et)return{data:a.a,height:a.b,width:a.c}
return a},
aW:function(a){var u,t,s,r,q
if(a==null)return
u=P.kt(P.l,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
oi:function(a){var u={}
a.F(0,new P.jN(u))
return u},
jm:function jm(){},
jo:function jo(a,b){this.a=a
this.b=b},
et:function et(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(a){this.a=a},
jn:function jn(a,b){this.a=a
this.b=b},
fr:function fr(a,b){this.a=a
this.b=b},
fs:function fs(){},
ft:function ft(){},
j9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ns:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jc:function jc(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b9:function b9(){},
fM:function fM(){},
bd:function bd(){},
hr:function hr(){},
hz:function hz(){},
ca:function ca(){},
i3:function i3(){},
k:function k(){},
bf:function bf(){},
ip:function ip(){},
dY:function dY(){},
dZ:function dZ(){},
e8:function e8(){},
e9:function e9(){},
ek:function ek(){},
el:function el(){},
er:function er(){},
es:function es(){},
bx:function bx(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(a){this.a=a},
eT:function eT(){},
bl:function bl(){},
hs:function hs(){},
dM:function dM(){},
dj:function dj(){},
hZ:function hZ(){},
eg:function eg(){},
eh:function eh(){}},W={
kW:function(){var u=document.createElement("a")
return u},
kg:function(){var u=document.createElement("canvas")
return u},
mD:function(a,b,c){var u=document.body,t=(u&&C.t).am(u,a,b,c)
t.toString
u=new H.cl(new W.a2(t),new W.fl(),[W.D])
return u.gaM(u)},
kk:function(a){return"wheel"},
bP:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bJ(a)
t=u.ge4(a)
if(typeof t==="string")r=u.ge4(a)}catch(s){H.ad(s)}return r},
l8:function(a){var u=document.createElement("img")
u.src=a
return u},
mF:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.ad(u)}return s},
j8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lF:function(a,b,c,d){var u=W.j8(W.j8(W.j8(W.j8(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
U:function(a,b,c,d){var u=W.lR(new W.j6(c),W.i)
if(u!=null&&!0)J.mn(a,b,u,!1)
return new W.j5(a,b,u,!1)},
lE:function(a){var u=W.kW(),t=window.location
u=new W.cn(new W.jg(u,t))
u.es(a)
return u},
nq:function(a,b,c,d){return!0},
nr:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
lG:function(){var u=P.l,t=P.la(C.o,u),s=H.b(["TEMPLATE"],[u])
t=new W.jr(t,P.d6(u),P.d6(u),P.d6(u),null)
t.eu(null,new H.fZ(C.o,new W.js(),[H.eI(C.o,0),u]),s,null)
return t},
lR:function(a,b){var u=$.ao
if(u===C.f)return a
return u.dk(a,b)},
n:function n(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
bm:function bm(){},
bn:function bn(){},
bo:function bo(){},
b1:function b1(){},
f7:function f7(){},
G:function G(){},
bO:function bO(){},
f8:function f8(){},
ag:function ag(){},
ar:function ar(){},
f9:function f9(){},
fa:function fa(){},
fd:function fd(){},
an:function an(){},
ff:function ff(){},
cT:function cT(){},
cU:function cU(){},
fg:function fg(){},
fh:function fh(){},
j1:function j1(a,b){this.a=a
this.b=b},
S:function S(){},
fl:function fl(){},
i:function i(){},
f:function f(){},
as:function as(){},
bS:function bS(){},
fq:function fq(){},
fu:function fu(){},
aH:function aH(){},
fC:function fC(){},
bU:function bU(){},
aI:function aI(){},
bV:function bV(){},
br:function br(){},
fS:function fS(){},
hc:function hc(){},
c1:function c1(){},
hd:function hd(){},
he:function he(a){this.a=a},
hf:function hf(){},
hg:function hg(a){this.a=a},
aL:function aL(){},
hh:function hh(){},
av:function av(){},
a2:function a2(a){this.a=a},
D:function D(){},
dd:function dd(){},
aO:function aO(){},
hw:function hw(){},
hI:function hI(){},
hJ:function hJ(a){this.a=a},
hL:function hL(){},
aR:function aR(){},
hW:function hW(){},
aS:function aS(){},
hX:function hX(){},
aT:function aT(){},
i0:function i0(){},
i1:function i1(a){this.a=a},
aw:function aw(){},
ds:function ds(){},
i4:function i4(){},
i5:function i5(){},
cd:function cd(){},
aU:function aU(){},
ax:function ax(){},
i8:function i8(){},
i9:function i9(){},
ii:function ii(){},
aV:function aV(){},
bw:function bw(){},
im:function im(){},
io:function io(){},
bg:function bg(){},
iI:function iI(){},
iV:function iV(){},
bi:function bi(){},
cm:function cm(){},
j2:function j2(){},
dO:function dO(){},
j7:function j7(){},
e5:function e5(){},
jl:function jl(){},
jp:function jp(){},
j0:function j0(){},
j4:function j4(a){this.a=a},
j5:function j5(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
j6:function j6(a){this.a=a},
cn:function cn(a){this.a=a},
K:function K(){},
de:function de(a){this.a=a},
hp:function hp(a){this.a=a},
ho:function ho(a,b,c){this.a=a
this.b=b
this.c=c},
ed:function ed(){},
ji:function ji(){},
jj:function jj(){},
jr:function jr(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
js:function js(){},
jq:function jq(){},
cX:function cX(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aN:function aN(){},
jg:function jg(a,b){this.a=a
this.b=b},
ew:function ew(a){this.a=a},
jC:function jC(a){this.a=a},
dN:function dN(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e6:function e6(){},
e7:function e7(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ct:function ct(){},
cu:function cu(){},
ee:function ee(){},
ef:function ef(){},
ej:function ej(){},
em:function em(){},
en:function en(){},
cv:function cv(){},
cw:function cw(){},
ep:function ep(){},
eq:function eq(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){}},T={
M:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.t("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.C(a,0)
t=C.a.C(b,0)
s=new T.hC()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
q:function(a){var u=new T.hM()
u.eq(a)
return u},
aC:function aC(){},
d_:function d_(){},
ba:function ba(){},
a5:function a5(){this.a=null},
hC:function hC(){this.b=this.a=null},
hM:function hM(){this.a=null},
kx:function(a){var u=new T.ib()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
ce:function ce(){},
ia:function ia(){},
ib:function ib(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ic:function ic(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
id:function id(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
ig:function ig(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ie:function ie(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={
ik:function(){var u=new R.ij(),t=P.l
u.a=new H.N([t,R.dq])
u.b=new H.N([t,R.dx])
return u},
dq:function dq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dw:function dw(a,b,c){this.a=a
this.b=b
this.c=c},
dx:function dx(a){this.b=a
this.c=null},
ij:function ij(){this.c=this.b=this.a=null},
dz:function dz(a){this.b=a
this.a=this.c=null}},O={
kh:function(a){var u=new O.aD([a])
u.bf(a)
return u},
aD:function aD(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c0:function c0(){this.b=this.a=null},
l7:function(a,b){var u,t,s,r=new O.cZ()
r.r=0
r.scu(null)
r.sbW(null)
if(a==null){u=$.lx
if(u==null){u=new V.E(1,0)
$.lx=u
t=u}else t=u}else t=a
if(!J.J(r.d,t)){s=r.d
r.d=t
u=new D.x("blurDirection",s,t)
u.b=!0
r.L(u)}r.sdn(b)
r.sbX(null)
r.sb4(0)
return r},
cZ:function cZ(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d9:function d9(){var _=this
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
bZ:function bZ(){},
h1:function h1(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
at:function at(a,b){var _=this
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
dl:function dl(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
dt:function dt(){}},E={
l5:function(a){var u,t=new E.aG()
t.a=""
t.b=!0
u=O.kh(E.aG)
t.y=u
u.aZ(t.ghI(),t.ghL())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.scE(0,a)
return t},
n7:function(a,b){var u=new E.hE(a)
u.ep(a,b)
return u},
nd:function(a,b,c,d,e){var u,t,s=J.O(a)
if(!!s.$ibo)return E.lp(a,!0,!0,!0,!1)
u=W.kg()
t=u.style
t.width="100%"
t.height="100%"
s.gc1(a).n(0,u)
return E.lp(u,!0,!0,!0,!1)},
lp:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.du(),p=C.j.cA(a,"webgl2",P.mN(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.u(P.t("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.n7(p,a)
u=new T.id(p)
u.b=p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dF(a)
t=new X.fL()
t.c=new X.ah(!1,!1,!1)
t.d=P.d6(P.w)
u.b=t
t=new X.hi(u)
t.f=0
t.r=V.aP()
t.x=V.aP()
t.ch=t.Q=1
u.c=t
t=new X.fT(u)
t.r=0
t.x=V.aP()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.il(u)
t.f=V.aP()
t.r=V.aP()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.dr,P.a_]])
u.z=t
s=document
t.push(W.U(s,"contextmenu",u.gf7(),!1))
u.z.push(W.U(a,"focus",u.gfd(),!1))
u.z.push(W.U(a,"blur",u.gf1(),!1))
u.z.push(W.U(s,"keyup",u.gfh(),!1))
u.z.push(W.U(s,"keydown",u.gff(),!1))
u.z.push(W.U(a,"mousedown",u.gfl(),!1))
u.z.push(W.U(a,"mouseup",u.gfp(),!1))
u.z.push(W.U(a,r,u.gfn(),!1))
t=u.z
W.kk(a)
W.kk(a)
t.push(W.U(a,W.kk(a),u.gfs(),!1))
u.z.push(W.U(s,r,u.gf9(),!1))
u.z.push(W.U(s,"mouseup",u.gfb(),!1))
u.z.push(W.U(s,"pointerlockchange",u.gfu(),!1))
u.z.push(W.U(a,"touchstart",u.gfM(),!1))
u.z.push(W.U(a,"touchend",u.gfI(),!1))
u.z.push(W.U(a,"touchmove",u.gfK(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a8(Date.now(),!1)
q.db=0
q.d5()
return q},
eX:function eX(){},
aG:function aG(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hE:function hE(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hF:function hF(a){this.a=a},
hG:function hG(a){this.a=a},
hH:function hH(a){this.a=a},
du:function du(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
ih:function ih(a){this.a=a}},Z={
kC:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bD(c)),35044)
a.bindBuffer(b,null)
return new Z.dK(b,u)},
aj:function(a){return new Z.az(a)},
dK:function dK(a,b){this.a=a
this.b=b},
cL:function cL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ck:function ck(a){this.a=a},
b0:function b0(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bq:function bq(a,b,c){this.a=a
this.b=b
this.c=c},
az:function az(a){this.a=a}},D={
B:function(){var u=new D.bQ()
u.d=0
return u},
f_:function f_(){},
bQ:function bQ(){var _=this
_.d=_.c=_.b=_.a=null},
fo:function fo(a){this.a=a},
fp:function fp(a){this.a=a},
V:function V(){this.b=null},
b4:function b4(){this.b=null},
b5:function b5(){this.b=null},
x:function x(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
fe:function fe(){},
a9:function a9(){},
d5:function d5(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
hx:function hx(){},
hY:function hY(){}},X={cM:function cM(a,b){this.a=a
this.b=b},d4:function d4(a,b){this.a=a
this.b=b},fL:function fL(){var _=this
_.d=_.c=_.b=_.a=null},d8:function d8(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fT:function fT(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ah:function ah(a,b,c){this.a=a
this.b=b
this.c=c},aM:function aM(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hi:function hi(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c2:function c2(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hy:function hy(){},dy:function dy(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},il:function il(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dF:function dF(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kY:function(a,b){var u,t,s,r,q=new X.eU()
q.d=q.c=q.b=q.a=512
q.e=!0
q.f=!1
q.x=q.r=1
q.ch=T.kx(null)
q.cx=new V.am(0,0,0,1)
q.cy=!0
q.db=2000
q.dx=!0
q.dy=V.kv()
q.sas(0,512)
q.san(0,512)
u=new V.am(0,0,0,1)
if(!q.cx.t(0,u)){t=q.cx
q.cx=u
s=new D.x("color",t,u)
s.b=!0
q.a1(s)}if(q.cy){q.cy=!1
s=new D.x("clearColor",!0,!1)
s.b=!0
q.a1(s)}s=q.db
if(!(Math.abs(s-2000)<$.A().a)){q.db=2000
s=new D.x("depth",s,2000)
s.b=!0
q.a1(s)}if(!q.f){q.f=!0
s=new D.x("autoResize",!1,!0)
s.b=!0
q.a1(s)}s=q.r
if(!(Math.abs(s-1)<$.A().a)){q.r=1
s=new D.x("autoResizeScalarX",s,1)
s.b=!0
q.a1(s)}s=q.x
if(!(Math.abs(s-1)<$.A().a)){q.x=1
s=new D.x("autoResizeScalarY",s,1)
s.b=!0
q.a1(s)}r=V.kv()
if(!J.J(q.dy,r)){t=q.dy
q.dy=r
s=new D.x("region",t,r)
s.b=!0
q.a1(s)}return q},
l6:function(a){var u=new X.fw(),t=new V.am(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.kv()
u.r=t
return u},
lf:function(a){var u,t,s=new X.dg()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gp().n(0,s.gex())
t=new D.x("mover",u,s.b)
t.b=!0
s.a1(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.A().a)){s.c=1.0471975511965976
t=new D.x("fov",t,1.0471975511965976)
t.b=!0
s.a1(t)}t=s.d
if(!(Math.abs(t-0.1)<$.A().a)){s.d=0.1
t=new D.x("near",t,0.1)
t.b=!0
s.a1(t)}t=s.e
if(!(Math.abs(t-2000)<$.A().a)){s.e=2000
t=new D.x("far",t,2000)
t.b=!0
s.a1(t)}return s},
eU:function eU(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
kf:function kf(){},
fw:function fw(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fF:function fF(){this.b=this.a=null},
dg:function dg(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
i6:function i6(){}},V={
f1:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.am(u,t,s,1)},
oK:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.bd(a-b,u)
return(a<0?a+u:a)+b},
C:function(a,b,c){if(a==null)return C.a.ap("null",c)
return C.a.ap(C.c.e7(Math.abs(a-0)<$.A().a?0:a,b),c+b+1)},
bI:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.l])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.p)(a),++s){r=V.C(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.c(o,q)
u=C.a.ap(o[q],t)
p=o.length
if(q>=p)return H.c(o,q)
o[q]=u}return o},
cE:function(a){return C.c.i4(Math.pow(2,C.S.cd(Math.log(H.oh(a))/Math.log(2))))},
bs:function(){var u=$.ld
return u==null?$.ld=V.au(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
au:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aP:function(){var u=$.lh
return u==null?$.lh=new V.a0(0,0):u},
mT:function(){var u=$.c7
return u==null?$.c7=new V.a1(0,0,0):u},
kv:function(){var u=$.lm
return u==null?$.lm=V.ll(0,0,1,1):u},
ll:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.di(a,b,c,d)},
dJ:function(){var u=$.lC
return u==null?$.lC=new V.F(0,0,0):u},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fn:function fn(a){this.a=a},
c_:function c_(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aK:function aK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a0:function a0(a,b){this.a=a
this.b=b},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
aQ:function aQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
di:function di(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
E:function E(a,b){this.a=a
this.b=b},
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
cj:function cj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oE:function(a){P.ne(C.P,new V.k8(a))},
n9:function(a){var u=new V.hR()
u.er(a,!0)
return u},
cN:function cN(){},
k8:function k8(a){this.a=a},
fc:function fc(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fy:function fy(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fB:function fB(a){var _=this
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
hR:function hR(){this.b=this.a=null},
hT:function hT(a){this.a=a},
hS:function hS(a){this.a=a},
hU:function hU(a){this.a=a}},U={
ki:function(){var u=new U.f2()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
f2:function f2(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cP:function cP(){this.b=this.a=null},
bT:function bT(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
aa:function aa(){},
dG:function dG(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dH:function dH(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dI:function dI(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
lX:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="testCanvas",a2=null,a3="blurValue",a4="modifiers",a5=34067,a6=V.n9("Test 041"),a7=W.kg()
a7.className="pageLargeCanvas"
a7.id=a1
a6.a.appendChild(a7)
u=[P.l]
a6.di(H.b(["Test of the Gaussian blur technique with a solid blur value for the whole image."],u))
a6.h6(H.b(["blurValue"],u))
a6.di(H.b(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a1)
if(t==null)H.u(P.t("Failed to find an element with the identifier, testCanvas."))
s=E.nd(t,!0,!0,!0,!1)
r=new U.bT()
r.bf(U.aa)
r.aZ(r.geU(),r.gfA())
r.e=null
r.f=V.bs()
r.r=0
q=s.x
p=new U.dH()
o=U.ki()
o.scz(0,!0)
o.scl(6.283185307179586)
o.scn(0)
o.saj(0,0)
o.scm(100)
o.sX(0)
o.sc4(0.5)
p.b=o
n=p.gaR()
o.gp().n(0,n)
o=U.ki()
o.scz(0,!0)
o.scl(6.283185307179586)
o.scn(0)
o.saj(0,0)
o.scm(100)
o.sX(0)
o.sc4(0.5)
p.c=o
o.gp().n(0,n)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
m=new X.ah(!1,!1,!1)
l=p.d
p.d=m
o=new D.x(a4,l,m)
o.b=!0
p.R(o)
o=p.f
if(o!==!1){p.f=!1
o=new D.x("invertX",o,!1)
o.b=!0
p.R(o)}o=p.r
if(o!==!1){p.r=!1
o=new D.x("invertY",o,!1)
o.b=!0
p.R(o)}p.b3(q)
r.n(0,p)
q=s.x
p=new U.dG()
o=U.ki()
o.scz(0,!0)
o.scl(6.283185307179586)
o.scn(0)
o.saj(0,0)
o.scm(100)
o.sX(0)
o.sc4(0.2)
p.b=o
o.gp().n(0,p.gaR())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
m=new X.ah(!0,!1,!1)
l=p.c
p.c=m
o=new D.x(a4,l,m)
o.b=!0
p.R(o)
p.b3(q)
r.n(0,p)
q=s.x
p=new U.dI()
p.c=0.01
p.e=p.d=0
m=new X.ah(!1,!1,!1)
p.b=m
o=new D.x(a4,a2,m)
o.b=!0
p.R(o)
p.b3(q)
r.n(0,p)
k=V.au(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
q=new U.cP()
q.a=k
r.n(0,q)
j=X.lf(r)
i=new O.d9()
q=O.kh(V.aK)
i.e=q
q.aZ(i.geY(),i.gf_())
q=new O.at(i,"emission")
q.c=new A.Z(!1,!1,!1)
q.f=new V.Y(0,0,0)
i.f=q
q=new O.at(i,"ambient")
q.c=new A.Z(!1,!1,!1)
q.f=new V.Y(0,0,0)
i.r=q
q=new O.at(i,"diffuse")
q.c=new A.Z(!1,!1,!1)
q.f=new V.Y(0,0,0)
i.x=q
q=new O.at(i,"invDiffuse")
q.c=new A.Z(!1,!1,!1)
q.f=new V.Y(0,0,0)
i.y=q
q=new O.h5(i,"specular")
q.c=new A.Z(!1,!1,!1)
q.f=new V.Y(0,0,0)
q.ch=100
i.z=q
q=new O.h1(i,"bump")
q.c=new A.Z(!1,!1,!1)
i.Q=q
i.ch=null
q=new O.at(i,"reflect")
q.c=new A.Z(!1,!1,!1)
q.f=new V.Y(0,0,0)
i.cx=q
q=new O.h4(i,"refract")
q.c=new A.Z(!1,!1,!1)
q.f=new V.Y(0,0,0)
q.ch=1
i.cy=q
q=new O.h0(i,"alpha")
q.c=new A.Z(!1,!1,!1)
q.f=1
i.db=q
q=new D.d5()
q.bf(D.a9)
q.e=H.b([],[D.fe])
q.f=H.b([],[D.hx])
q.r=H.b([],[D.hY])
q.y=q.x=null
q.cC(q.geW(),q.gfw(),q.gfC())
i.dx=q
p=new O.h3()
p.b=new V.am(0,0,0,0)
p.c=1
p.d=10
p.e=!1
i.dy=p
p=q.x
q=p==null?q.x=D.B():p
q.n(0,i.gfS())
q=i.dx
p=q.y
q=p==null?q.y=D.B():p
q.n(0,i.gau())
i.fr=null
q=i.r
q.sb6(0,new V.Y(0.3,0.3,0.3))
q=i.x
q.sb6(0,new V.Y(0.8,0.8,0.8))
q=i.x
p=s.f.hF("../resources/Test.png")
o=q.c
if(!o.b)q.d9(new A.Z(o.a,!0,!1))
o=q.d
if(o!==p){if(o!=null)o.gp().W(0,q.gau())
l=q.d
q.d=p
p.gp().n(0,q.gau())
p=new D.x(q.b+".texture2D",l,q.d)
p.b=!0
q.a.L(p)}h=X.kY(!0,!1)
g=new M.cV()
g.a=!0
q=O.kh(E.aG)
g.e=q
q.aZ(g.gf3(),g.gf5())
g.y=g.x=g.r=g.f=null
f=X.l6(a2)
g.sb5(a2)
g.saX(0,f)
g.sbb(a2)
q=g.e
e=F.kw()
F.cy(e,a2,a2,1,1,1,0,0,1)
F.cy(e,a2,a2,1,1,0,1,0,3)
F.cy(e,a2,a2,1,1,0,0,1,2)
F.cy(e,a2,a2,1,1,-1,0,0,0)
F.cy(e,a2,a2,1,1,0,-1,0,0)
F.cy(e,a2,a2,1,1,0,0,-1,3)
e.aG()
q.n(0,E.l5(e))
g.sbb(i)
g.saX(0,h)
g.sb5(j)
q=s.f
p=q.a
d=p.createTexture()
p.bindTexture(a5,d)
p.texParameteri(a5,10242,10497)
p.texParameteri(a5,10243,10497)
p.texParameteri(a5,10241,9729)
p.texParameteri(a5,10240,9729)
p.bindTexture(a5,a2)
c=new T.ic()
c.a=0
c.b=d
c.c=!1
c.d=0
q.aQ(c,d,"../resources/maskonaive/posx.jpg",34069,!1,!1)
q.aQ(c,d,"../resources/maskonaive/negx.jpg",34070,!1,!1)
q.aQ(c,d,"../resources/maskonaive/posy.jpg",34071,!1,!1)
q.aQ(c,d,"../resources/maskonaive/negy.jpg",34072,!1,!1)
q.aQ(c,d,"../resources/maskonaive/posz.jpg",34073,!1,!1)
q.aQ(c,d,"../resources/maskonaive/negz.jpg",34074,!1,!1)
b=M.kj(a2,a2)
q=new O.dl()
q.b=1.0471975511965976
q.d=new V.Y(1,1,1)
l=q.c
q.c=c
c.gp().n(0,q.gau())
p=new D.x("boxTexture",l,q.c)
p.b=!0
q.L(p)
b.sbb(q)
b.saX(0,h)
b.sb5(j)
q=h.ch
a=new M.cY()
a.a=!0
a.c=X.kY(!0,!1)
p=O.l7(a2,a2)
o=a.gY()
p.gp().n(0,o)
a.d=p
a.e=M.kj(a.c,p)
p=a.c.ch
n=$.ly
p=O.l7(n==null?$.ly=new V.E(0,1):n,p)
p.gp().n(0,o)
a.f=p
a.r=M.kj(a2,p)
a.d.sb4(0)
a.f.sb4(0)
a.d.sdn(q)
a.d.sbX(a2)
a.f.sbX(a2)
a.d.scu(a2)
a.f.scu(a2)
a.d.sbW(a2)
a.f.sbW(a2)
a.r.saX(0,a2)
q=M.ai
p=H.b([b,g,a],[q])
o=new M.cO()
o.bf(q)
o.e=!0
o.f=!1
o.r=null
o.aZ(o.gfE(),o.gfG())
o.ag(0,p)
q=s.d
if(q!==o){if(q!=null)q.gp().W(0,s.gcM())
s.d=o
o.gp().n(0,s.gcM())
s.cN()}a0=new U.jV(a)
q=new V.hA(a3)
u=u.getElementById(a3)
q.c=u
if(u==null)H.u("Failed to find blurValue for RadioGroup")
q.dg(0,"0.0",new U.jW(a0),!0)
q.al(0,"0.1",new U.jX(a0))
q.al(0,"0.2",new U.k_(a0))
q.al(0,"0.3",new U.k0(a0))
q.al(0,"0.4",new U.k1(a0))
q.al(0,"0.5",new U.k2(a0))
q.al(0,"0.6",new U.k3(a0))
q.al(0,"0.7",new U.k4(a0))
q.al(0,"0.8",new U.k5(a0))
q.al(0,"0.9",new U.k6(a0))
q.al(0,"1.0",new U.jY(a0))
u=s.Q
if(u==null)u=s.Q=D.B()
q=u.b
u=q==null?u.b=H.b([],[{func:1,ret:-1,args:[D.V]}]):q
u.push(new U.jZ(a6,a))
V.oE(s)},
jV:function jV(a){this.a=a},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
k1:function k1(a){this.a=a},
k2:function k2(a){this.a=a},
k3:function k3(a){this.a=a},
k4:function k4(a){this.a=a},
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
jY:function jY(a){this.a=a},
jZ:function jZ(a,b){this.a=a
this.b=b}},M={
kj:function(a,b){var u,t,s,r,q,p,o,n,m,l=null,k=new M.cQ()
k.a=!0
u=E.l5(l)
t=F.kw()
s=t.a
r=new V.F(-1,-1,1)
r=r.w(0,Math.sqrt(r.E(r)))
q=s.bj(new V.aQ(1,2,4,6),V.f1(255,0,0),new V.a1(-1,-1,0),new V.a0(0,1),r,l)
r=t.a
s=new V.F(1,-1,1)
s=s.w(0,Math.sqrt(s.E(s)))
p=r.bj(new V.aQ(0,3,4,6),V.f1(0,0,255),new V.a1(1,-1,0),new V.a0(1,1),s,l)
s=t.a
r=new V.F(1,1,1)
r=r.w(0,Math.sqrt(r.E(r)))
o=s.bj(new V.aQ(0,2,5,6),V.f1(0,128,0),new V.a1(1,1,0),new V.a0(1,0),r,l)
r=t.a
s=V.aP()
n=new V.F(-1,1,1)
n=n.w(0,Math.sqrt(n.E(n)))
m=r.bj(new V.aQ(0,2,4,7),V.f1(255,255,0),new V.a1(-1,1,0),s,n,l)
t.d.h8(H.b([q,p,o,m],[F.bA]))
t.aG()
u.scE(0,t)
k.e=u
k.sb5(l)
k.saX(0,a)
k.sbb(b)
return k},
cO:function cO(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cQ:function cQ(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cV:function cV(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cY:function cY(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ai:function ai(){}},A={
mQ:function(a,b){var u=a.aH,t=new A.h_(b,u)
t.bB(b,u)
t.eo(a,b)
return t},
mR:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gaw(a0)+a1.gaw(a1)+a2.gaw(a2)+a3.gaw(a3)+a4.gaw(a4)+a5.gaw(a5)+a6.gaw(a6)+a7.gaw(a7)+a8.gaw(a8)+"_"
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
g=$.ae()
if(l){u=$.aZ()
g=new Z.az(g.a|u.a)}if(k){u=$.aY()
g=new Z.az(g.a|u.a)}if(j){u=$.ap()
g=new Z.az(g.a|u.a)}if(i){u=$.aX()
g=new Z.az(g.a|u.a)}return new A.h2(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,m,p,r,h,!0,!1,!1,o,r,n,l,k,j,!1,i,a,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
jK:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
jL:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.jK(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.ka(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
nR:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jK(b,t,"emission")
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
A.jL(b,t,"ambient")
b.a+="\n"},
nP:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jL(b,t,"diffuse")
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
A.jL(b,t,"invDiffuse")
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
A.jL(b,t,"specular")
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
A.jK(b,t,"reflect")
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
A.jK(b,t,"refract")
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
t="dirLight"+H.e(u)
s=A.ka(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.at()
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
r=[P.l]
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
nV:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.ka(t)
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
if(typeof u!=="number")return u.at()
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
c.a=r+"\n"}r=[P.l]
l=H.b([],r)
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
nZ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.ka(t)
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
if(typeof u!=="number")return u.at()
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
c.a=u+"\n"}u=[P.l]
j=H.b([],u)
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
t=H.b([],[P.l])
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
o_:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.P("")
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.nQ(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.nV(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.nZ(a,q[o],j)
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
n=H.b([],[P.l])
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
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ai(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ai(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ai(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
ka:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.a.ai(a,1)},
kz:function(a,b,c,d,e){var u=new A.is(a,c,e)
u.f=d
P.mO(d,0,P.w)
return u},
cK:function cK(a,b,c){this.a=a
this.b=b
this.c=c},
eP:function eP(a){this.a=a},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
fz:function fz(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fA:function fA(a,b){this.a=a
this.b=b},
h_:function h_(a,b){var _=this
_.ie=_.dA=_.dz=_.dw=_.aH=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.io=_.im=_.il=_.cc=_.cb=_.ca=_.c9=_.c8=_.c7=_.ik=_.dM=_.dL=_.ij=_.dK=_.dJ=_.dI=_.ii=_.dH=_.dG=_.dF=_.ih=_.dE=_.dD=_.ig=_.dC=_.dB=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cS:function cS(a,b){this.a=a
this.b=b},
dh:function dh(a,b){this.a=a
this.b=b},
dn:function dn(a,b){this.a=a
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
_.aH=b3
_.dw=b4},
cg:function cg(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ch:function ch(a,b,c,d,e,f,g,h,i,j){var _=this
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
ci:function ci(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
hV:function hV(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dA:function dA(){},
iw:function iw(a){this.a=a},
dB:function dB(a,b,c){this.a=a
this.c=b
this.d=c},
it:function it(a,b,c){this.a=a
this.c=b
this.d=c},
iu:function iu(a,b,c){this.a=a
this.c=b
this.d=c},
iv:function iv(a,b,c){this.a=a
this.c=b
this.d=c},
is:function is(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
T:function T(a,b,c){this.a=a
this.c=b
this.d=c},
dC:function dC(a,b,c){this.a=a
this.c=b
this.d=c},
H:function H(a,b,c){this.a=a
this.c=b
this.d=c},
cf:function cf(a,b,c){this.a=a
this.c=b
this.d=c},
ix:function ix(a,b,c){this.a=a
this.c=b
this.d=c},
by:function by(a,b,c){this.a=a
this.c=b
this.d=c},
a6:function a6(a,b,c){this.a=a
this.c=b
this.d=c},
X:function X(a,b,c){this.a=a
this.c=b
this.d=c},
bh:function bh(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jF:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cy:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.F(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.F(u+a3,t+a1,s+a2)
q=new V.F(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.F(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jF(i)
l=F.jF(j.b)
k=F.oH(d,a0,new F.jE(j,F.jF(j.c),F.jF(j.d),l,m,c),b)
if(k!=null)a.hG(k)},
oH:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kw()
t=H.b([],[F.bA])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iM(g,g,new V.am(p,0,0,1),g,g,new V.a0(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.c3(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iM(g,g,new V.am(j,i,h,1),g,g,new V.a0(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.c3(d))}}u.d.h9(a+1,b+1,t)
return u},
bR:function(a,b,c){var u=new F.b3(),t=a.a
if(t==null)H.u(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.u(P.t("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.a9()
return u},
mK:function(a,b){var u=new F.bX(),t=a.a
if(t==null)H.u(P.t("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.u(P.t("May not create a line with vertices attached to different shapes."))
u.a=a
a.c.b.push(u)
u.b=b
b.c.c.push(u)
u.a.a.c.b.push(u)
u.a.a.a9()
return u},
kw:function(){var u=new F.hN(),t=new F.iN(u)
t.b=!1
t.c=H.b([],[F.bA])
u.a=t
t=new F.hQ(u)
t.b=H.b([],[F.c6])
u.b=t
t=new F.hP(u)
t.b=H.b([],[F.bX])
u.c=t
t=new F.hO(u)
t.b=H.b([],[F.b3])
u.d=t
u.e=null
return u},
iM:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bA(),r=new F.iS()
r.b=H.b([],[F.c6])
s.b=r
r=new F.iR()
u=[F.bX]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.iO()
u=[F.b3]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.me()
s.e=0
r=$.ae()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aZ().a)!==0?e:t
s.x=(u&$.aY().a)!==0?b:t
s.y=(u&$.ap().a)!==0?f:t
s.z=(u&$.bk().a)!==0?g:t
s.Q=(u&$.mf().a)!==0?c:t
s.ch=(u&$.bK().a)!==0?i:0
s.cx=(u&$.aX().a)!==0?a:t
return s},
jE:function jE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b3:function b3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bX:function bX(){this.b=this.a=null},
c6:function c6(){this.a=null},
hN:function hN(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hO:function hO(a){this.a=a
this.b=null},
hP:function hP(a){this.a=a
this.b=null},
hQ:function hQ(a){this.a=a
this.b=null},
bA:function bA(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iU:function iU(a){this.a=a},
iT:function iT(a){this.a=a},
iN:function iN(a){this.a=a
this.c=this.b=null},
iO:function iO(){this.d=this.c=this.b=null},
iP:function iP(a,b){this.a=a
this.b=b},
iQ:function iQ(a,b){this.a=a
this.b=b},
iR:function iR(){this.c=this.b=null},
iS:function iS(){this.b=null}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kr.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gG:function(a){return H.c8(a)},
h:function(a){return"Instance of '"+H.e(H.c9(a))+"'"}}
J.fI.prototype={
h:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iaB:1}
J.d2.prototype={
t:function(a,b){return null==b},
h:function(a){return"null"},
gG:function(a){return 0}}
J.d3.prototype={
gG:function(a){return 0},
h:function(a){return String(a)}}
J.hu.prototype={}
J.bz.prototype={}
J.b8.prototype={
h:function(a){var u=a[$.m2()]
if(u==null)return this.el(a)
return"JavaScript function for "+H.e(J.a3(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b6.prototype={
W:function(a,b){var u
if(!!a.fixed$length)H.u(P.y("remove"))
for(u=0;u<a.length;++u)if(J.J(a[u],b)){a.splice(u,1)
return!0}return!1},
ag:function(a,b){var u,t
if(!!a.fixed$length)H.u(P.y("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.p)(b),++t)a.push(b[t])},
F:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.d(P.aE(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.c(r,u)
r[u]=t}return r.join(b)},
hD:function(a){return this.k(a,"")},
hw:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.d(P.aE(a))}return u},
hx:function(a,b,c){return this.hw(a,b,c,null)},
hv:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.d(P.aE(a))}throw H.d(H.ko())},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
cH:function(a,b,c){if(b<0||b>a.length)throw H.d(P.W(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.d(P.W(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.eI(a,0)])
return H.b(a.slice(b,c),[H.eI(a,0)])},
cG:function(a,b){return this.cH(a,b,null)},
gaA:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.ko())},
dj:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.d(P.aE(a))}return!1},
bz:function(a,b){if(!!a.immutable$list)H.u(P.y("sort"))
H.dm(a,0,a.length-1,b)},
S:function(a,b){var u
for(u=0;u<a.length;++u)if(J.J(a[u],b))return!0
return!1},
h:function(a){return P.kn(a,"[","]")},
gU:function(a){return new J.a4(a,a.length)},
gG:function(a){return H.c8(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.u(P.y("set length"))
if(b<0)throw H.d(P.W(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.bH(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.u(P.y("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bH(a,b))
a[b]=c},
$ih:1,
$io:1}
J.kq.prototype={}
J.a4.prototype={
gH:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.p(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bW.prototype={
hi:function(a,b){var u
if(typeof b!=="number")throw H.d(H.ak(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbn(b)
if(this.gbn(a)===u)return 0
if(this.gbn(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbn:function(a){return a===0?1/a<0:a<0},
i4:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.y(""+a+".toInt()"))},
cd:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.y(""+a+".floor()"))},
a0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.y(""+a+".round()"))},
e7:function(a,b){var u
if(b>20)throw H.d(P.W(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbn(a))return"-"+u
return u},
bc:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.W(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.a_(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.u(P.y("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.c(t,1)
u=t[1]
if(3>=s)return H.c(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.q("0",r)},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
q:function(a,b){if(typeof b!=="number")throw H.d(H.ak(b))
return a*b},
bd:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
en:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dc(a,b)},
af:function(a,b){return(a|0)===a?a/b|0:this.dc(a,b)},
dc:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.y("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aT:function(a,b){var u
if(a>0)u=this.da(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
h_:function(a,b){if(b<0)throw H.d(H.ak(b))
return this.da(a,b)},
da:function(a,b){return b>31?0:a>>>b},
$iI:1,
$iac:1}
J.d1.prototype={$iw:1}
J.d0.prototype={}
J.b7.prototype={
a_:function(a,b){if(b<0)throw H.d(H.bH(a,b))
if(b>=a.length)H.u(H.bH(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.d(H.bH(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!=="string")throw H.d(P.kX(b,null,null))
return a+b},
aW:function(a,b,c,d){var u,t
c=P.be(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ac:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.W(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a6:function(a,b){return this.ac(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.u(H.ak(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.d(P.hD(b,null))
if(b>c)throw H.d(P.hD(b,null))
if(c>a.length)throw H.d(P.hD(c,null))
return a.substring(b,c)},
ai:function(a,b){return this.u(a,b,null)},
i7:function(a){return a.toLowerCase()},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ap:function(a,b){var u=b-a.length
if(u<=0)return a
return this.q(" ",u)+a},
bm:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.W(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dT:function(a,b){return this.bm(a,b,0)},
h:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$il:1}
H.m.prototype={
gl:function(a){return this.a.length},
i:function(a,b){return C.a.a_(this.a,b)},
$ar:function(){return[P.w]},
$ah:function(){return[P.w]},
$ao:function(){return[P.w]}}
H.fk.prototype={}
H.d7.prototype={
gU:function(a){return new H.bY(this,this.gl(this))},
bx:function(a,b){return this.ek(0,b)}}
H.bY.prototype={
gH:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.cB(s),q=r.gl(s)
if(t.b!==q)throw H.d(P.aE(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.I(s,u);++t.c
return!0}}
H.fX.prototype={
gU:function(a){return new H.fY(J.b_(this.a),this.b)},
gl:function(a){return J.af(this.a)},
I:function(a,b){return this.b.$1(J.eL(this.a,b))},
$ah:function(a,b){return[b]}}
H.fY.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.a=u.c.$1(t.gH(t))
return!0}u.a=null
return!1},
gH:function(a){return this.a}}
H.fZ.prototype={
gl:function(a){return J.af(this.a)},
I:function(a,b){return this.b.$1(J.eL(this.a,b))},
$ad7:function(a,b){return[b]},
$ah:function(a,b){return[b]}}
H.cl.prototype={
gU:function(a){return new H.iW(J.b_(this.a),this.b)}}
H.iW.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(t.$1(u.gH(u)))return!0
return!1},
gH:function(a){var u=this.a
return u.gH(u)}}
H.cW.prototype={}
H.iB.prototype={
m:function(a,b,c){throw H.d(P.y("Cannot modify an unmodifiable list"))}}
H.dD.prototype={}
H.f4.prototype={
h:function(a){return P.ku(this)},
m:function(a,b,c){return H.mA()},
$iR:1}
H.f5.prototype={
gl:function(a){return this.a},
bk:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bk(0,b))return
return this.cY(b)},
cY:function(a){return this.b[a]},
F:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cY(s))}}}
H.iq.prototype={
ao:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fK.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iA.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kb.prototype={
$1:function(a){if(!!J.O(a).$ibp)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:9}
H.ei.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bN.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
gi8:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i7.prototype={}
H.i_.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.eK(u)+"'"}}
H.bL.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bL))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.c8(this.a)
else u=typeof t!=="object"?J.cI(t):H.c8(t)
return(u^H.c8(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.c9(u))+"'")}}
H.eZ.prototype={
h:function(a){return this.a}}
H.hK.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.N.prototype={
gl:function(a){return this.a},
ghC:function(a){return this.a===0},
ga8:function(a){return new H.fO(this,[H.eI(this,0)])},
bk:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cV(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cV(t,b)}else return s.hz(b)},
hz:function(a){var u=this,t=u.d
if(t==null)return!1
return u.ci(u.bI(t,u.cg(a)),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bg(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bg(r,b)
s=t==null?null:t.b
return s}else return q.hA(b)},
hA:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bI(r,s.cg(a))
t=s.ci(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cQ(u==null?s.b=s.bQ():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cQ(t==null?s.c=s.bQ():t,b,c)}else s.hB(b,c)},
hB:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bQ()
u=r.cg(a)
t=r.bI(q,u)
if(t==null)r.bT(q,u,[r.bR(a,b)])
else{s=r.ci(t,a)
if(s>=0)t[s].b=b
else t.push(r.bR(a,b))}},
F:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.d(P.aE(u))
t=t.c}},
cQ:function(a,b,c){var u=this.bg(a,b)
if(u==null)this.bT(a,b,this.bR(b,c))
else u.b=c},
eR:function(){this.r=this.r+1&67108863},
bR:function(a,b){var u,t=this,s=new H.fN(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eR()
return s},
cg:function(a){return J.cI(a)&0x3ffffff},
ci:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.J(a[t].a,b))return t
return-1},
h:function(a){return P.ku(this)},
bg:function(a,b){return a[b]},
bI:function(a,b){return a[b]},
bT:function(a,b,c){a[b]=c},
eK:function(a,b){delete a[b]},
cV:function(a,b){return this.bg(a,b)!=null},
bQ:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bT(t,u,t)
this.eK(t,u)
return t}}
H.fN.prototype={}
H.fO.prototype={
gl:function(a){return this.a.a},
gU:function(a){var u=this.a,t=new H.fP(u,u.r)
t.c=u.e
return t}}
H.fP.prototype={
gH:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.aE(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.jR.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.jS.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jT.prototype={
$1:function(a){return this.a(a)}}
H.fJ.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$in5:1}
H.c3.prototype={$ic3:1}
H.bb.prototype={$ibb:1}
H.da.prototype={
gl:function(a){return a.length},
$iz:1,
$az:function(){}}
H.c4.prototype={
i:function(a,b){H.aA(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aA(b,a,a.length)
a[b]=c},
$ar:function(){return[P.I]},
$ih:1,
$ah:function(){return[P.I]},
$io:1,
$ao:function(){return[P.I]}}
H.db.prototype={
m:function(a,b,c){H.aA(b,a,a.length)
a[b]=c},
$ar:function(){return[P.w]},
$ih:1,
$ah:function(){return[P.w]},
$io:1,
$ao:function(){return[P.w]}}
H.hj.prototype={
i:function(a,b){H.aA(b,a,a.length)
return a[b]}}
H.hk.prototype={
i:function(a,b){H.aA(b,a,a.length)
return a[b]}}
H.hl.prototype={
i:function(a,b){H.aA(b,a,a.length)
return a[b]}}
H.hm.prototype={
i:function(a,b){H.aA(b,a,a.length)
return a[b]}}
H.hn.prototype={
i:function(a,b){H.aA(b,a,a.length)
return a[b]}}
H.dc.prototype={
gl:function(a){return a.length},
i:function(a,b){H.aA(b,a,a.length)
return a[b]}}
H.c5.prototype={
gl:function(a){return a.length},
i:function(a,b){H.aA(b,a,a.length)
return a[b]},
$ic5:1,
$ibx:1}
H.cp.prototype={}
H.cq.prototype={}
H.cr.prototype={}
H.cs.prototype={}
P.iY.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.iX.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.iZ.prototype={
$0:function(){this.a.$0()}}
P.j_.prototype={
$0:function(){this.a.$0()}}
P.eo.prototype={
ev:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bG(new P.ju(this,b),0),a)
else throw H.d(P.y("`setTimeout()` not found."))},
ew:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bG(new P.jt(this,a,Date.now(),b),0),a)
else throw H.d(P.y("Periodic timer."))},
$idv:1}
P.ju.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jt.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.en(u,q)}s.c=r
t.d.$1(s)}}
P.dL.prototype={}
P.dr.prototype={}
P.i2.prototype={}
P.dv.prototype={}
P.jD.prototype={}
P.jM.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.df():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.h(0)
throw u}}
P.jd.prototype={
i0:function(a){var u,t,s,r=null
try{if(C.f===$.ao){a.$0()
return}P.o8(r,r,this,a)}catch(s){u=H.ad(s)
t=H.kM(s)
P.lO(r,r,this,u,t)}},
i1:function(a,b){var u,t,s,r=null
try{if(C.f===$.ao){a.$1(b)
return}P.o9(r,r,this,a,b)}catch(s){u=H.ad(s)
t=H.kM(s)
P.lO(r,r,this,u,t)}},
i2:function(a,b){return this.i1(a,b,null)},
hg:function(a){return new P.je(this,a)},
dk:function(a,b){return new P.jf(this,a,b)}}
P.je.prototype={
$0:function(){return this.a.i0(this.b)}}
P.jf.prototype={
$1:function(a){return this.a.i2(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ja.prototype={
gU:function(a){var u=new P.e_(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
S:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.eF(b)
return t}},
eF:function(a){var u=this.d
if(u==null)return!1
return this.bG(this.cZ(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cR(u==null?s.b=P.kD():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cR(t==null?s.c=P.kD():t,b)}else return s.ez(0,b)},
ez:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kD()
u=s.cT(b)
t=r[u]
if(t==null)r[u]=[s.bD(b)]
else{if(s.bG(t,b)>=0)return!1
t.push(s.bD(b))}return!0},
W:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fP(this.c,b)
else return this.fO(0,b)},
fO:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cZ(r,b)
t=s.bG(u,b)
if(t<0)return!1
s.dd(u.splice(t,1)[0])
return!0},
cR:function(a,b){if(a[b]!=null)return!1
a[b]=this.bD(b)
return!0},
fP:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.dd(u)
delete a[b]
return!0},
cS:function(){this.r=1073741823&this.r+1},
bD:function(a){var u,t=this,s=new P.jb(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cS()
return s},
dd:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cS()},
cT:function(a){return J.cI(a)&1073741823},
cZ:function(a,b){return a[this.cT(b)]},
bG:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.J(a[t].a,b))return t
return-1}}
P.jb.prototype={}
P.e_.prototype={
gH:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.aE(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fQ.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.fR.prototype={$ih:1,$io:1}
P.r.prototype={
gU:function(a){return new H.bY(a,this.gl(a))},
I:function(a,b){return this.i(a,b)},
i6:function(a,b){var u,t,s=this,r=H.b([],[H.or(s,a,"r",0)])
C.b.sl(r,s.gl(a))
for(u=0;u<s.gl(a);++u){t=s.i(a,u)
if(u>=r.length)return H.c(r,u)
r[u]=t}return r},
i5:function(a){return this.i6(a,!0)},
ht:function(a,b,c,d){var u
P.be(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
h:function(a){return P.kn(a,"[","]")}}
P.fU.prototype={}
P.fV.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.aJ.prototype={
F:function(a,b){var u,t
for(u=J.b_(this.ga8(a));u.v();){t=u.gH(u)
b.$2(t,this.i(a,t))}},
gl:function(a){return J.af(this.ga8(a))},
h:function(a){return P.ku(a)},
$iR:1}
P.jv.prototype={
m:function(a,b,c){throw H.d(P.y("Cannot modify unmodifiable map"))}}
P.fW.prototype={
i:function(a,b){return J.cH(this.a,b)},
m:function(a,b,c){J.kc(this.a,b,c)},
F:function(a,b){J.kT(this.a,b)},
gl:function(a){return J.af(this.a)},
h:function(a){return J.a3(this.a)},
$iR:1}
P.dE.prototype={}
P.jh.prototype={
ag:function(a,b){var u
for(u=J.b_(b);u.v();)this.n(0,u.gH(u))},
h:function(a){return P.kn(this,"{","}")},
I:function(a,b){var u,t,s
P.lk(b,"index")
for(u=P.nt(this,this.r),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.d(P.L(b,this,"index",null,t))},
$ih:1}
P.e0.prototype={}
P.eu.prototype={}
P.eV.prototype={
hH:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.be(a0,a1,b.length)
u=$.mh()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.a.C(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jQ(C.a.C(b,n))
j=H.jQ(C.a.C(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.c(u,i)
h=u[i]
if(h>=0){i=C.a.a_("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.P("")
g=r.a+=C.a.u(b,s,t)
r.a=g+H.bu(m)
s=n
continue}}throw H.d(P.Q("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.u(b,s,a1)
f=g.length
if(q>=0)P.kZ(b,p,a1,q,o,f)
else{e=C.d.bd(f-1,4)+1
if(e===1)throw H.d(P.Q(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aW(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.kZ(b,p,a1,q,o,d)
else{e=C.d.bd(d,4)
if(e===1)throw H.d(P.Q(c,b,a1))
if(e>1)b=C.a.aW(b,a1,a1,e===2?"==":"=")}return b}}
P.eW.prototype={}
P.f0.prototype={}
P.f6.prototype={}
P.fm.prototype={}
P.fE.prototype={
h:function(a){return this.a}}
P.fD.prototype={
eH:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.c(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.P("")
if(r>b)q.a+=C.a.u(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.ms(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iJ.prototype={
ghs:function(){return C.N}}
P.iL.prototype={
c2:function(a){var u,t,s=P.be(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jB(u)
if(t.eM(a,0,s)!==s)t.df(J.mo(a,s-1),0)
return new Uint8Array(u.subarray(0,H.nK(0,t.b,u.length)))}}
P.jB.prototype={
df:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eM:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.a_(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.C(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.df(r,C.a.C(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iK.prototype={
c2:function(a){var u,t,s,r,q,p,o,n,m=P.nh(!1,a,0,null)
if(m!=null)return m
u=P.be(0,null,J.af(a))
t=P.lQ(a,0,u)
if(t>0){s=P.cc(a,0,t)
if(t===u)return s
r=new P.P(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.P("")
o=new P.jA(!1,r)
o.c=p
o.hj(a,q,u)
if(o.e>0){H.u(P.Q("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bu(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jA.prototype={
hj:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.cB(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.at()
if((r&192)!==128){q=P.Q(k+C.d.bc(r,16),a,s)
throw H.d(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.c(C.w,q)
if(j<=C.w[q]){q=P.Q("Overlong encoding of 0x"+C.d.bc(j,16),a,s-h-1)
throw H.d(q)}if(j>1114111){q=P.Q("Character outside valid Unicode range: 0x"+C.d.bc(j,16),a,s-h-1)
throw H.d(q)}if(!l.c||j!==65279)t.a+=H.bu(j)
l.c=!1}for(q=s<c;q;){p=P.lQ(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.cc(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.P()
if(r<0){m=P.Q("Negative UTF-8 code unit: -0x"+C.d.bc(-r,16),a,n-1)
throw H.d(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.Q(k+C.d.bc(r,16),a,n-1)
throw H.d(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.aB.prototype={}
P.a8.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.a8&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.d.aT(u,30))&1073741823},
h:function(a){var u=this,t=P.mB(H.n1(u)),s=P.cR(H.n_(u)),r=P.cR(H.mW(u)),q=P.cR(H.mX(u)),p=P.cR(H.mZ(u)),o=P.cR(H.n0(u)),n=P.mC(H.mY(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.I.prototype={}
P.b2.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.b2&&this.a===b.a},
gG:function(a){return C.d.gG(this.a)},
h:function(a){var u,t,s,r=new P.fj(),q=this.a
if(q<0)return"-"+new P.b2(0-q).h(0)
u=r.$1(C.d.af(q,6e7)%60)
t=r.$1(C.d.af(q,1e6)%60)
s=new P.fi().$1(q%1e6)
return""+C.d.af(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
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
P.bp.prototype={}
P.df.prototype={
h:function(a){return"Throw of null."}}
P.al.prototype={
gbF:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbE:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbF()+o+u
if(!q.a)return t
s=q.gbE()
r=P.km(q.b)
return t+s+": "+r}}
P.bv.prototype={
gbF:function(){return"RangeError"},
gbE:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fG.prototype={
gbF:function(){return"RangeError"},
gbE:function(){var u,t=this.b
if(typeof t!=="number")return t.P()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.iC.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.iy.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cb.prototype={
h:function(a){return"Bad state: "+this.a}}
P.f3.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.km(u)+"."}}
P.ht.prototype={
h:function(a){return"Out of Memory"},
$ibp:1}
P.dp.prototype={
h:function(a){return"Stack Overflow"},
$ibp:1}
P.fb.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dT.prototype={
h:function(a){return"Exception: "+this.a}}
P.fv.prototype={
h:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.u(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.C(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.a_(f,q)
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
return h+l+j+k+"\n"+C.a.q(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fx.prototype={}
P.w.prototype={}
P.h.prototype={
bx:function(a,b){return new H.cl(this,b,[H.kL(this,"h",0)])},
gl:function(a){var u,t=this.gU(this)
for(u=0;t.v();)++u
return u},
gaM:function(a){var u,t=this.gU(this)
if(!t.v())throw H.d(H.ko())
u=t.gH(t)
if(t.v())throw H.d(H.mH())
return u},
I:function(a,b){var u,t,s
P.lk(b,"index")
for(u=this.gU(this),t=0;u.v();){s=u.gH(u)
if(b===t)return s;++t}throw H.d(P.L(b,this,"index",null,t))},
h:function(a){return P.mG(this,"(",")")}}
P.fH.prototype={}
P.o.prototype={$ih:1}
P.R.prototype={}
P.bc.prototype={
gG:function(a){return P.a_.prototype.gG.call(this,this)},
h:function(a){return"null"}}
P.ac.prototype={}
P.a_.prototype={constructor:P.a_,$ia_:1,
t:function(a,b){return this===b},
gG:function(a){return H.c8(this)},
h:function(a){return"Instance of '"+H.e(H.c9(this))+"'"},
toString:function(){return this.h(this)}}
P.l.prototype={}
P.P.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iH.prototype={
$2:function(a,b){var u,t,s,r=J.cC(b).dT(b,"=")
if(r===-1){if(b!=="")J.kc(a,P.kH(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.u(b,0,r)
t=C.a.ai(b,r+1)
s=this.a
J.kc(a,P.kH(u,0,u.length,s,!0),P.kH(t,0,t.length,s,!0))}return a}}
P.iE.prototype={
$2:function(a,b){throw H.d(P.Q("Illegal IPv4 address, "+a,this.a,b))}}
P.iF.prototype={
$2:function(a,b){throw H.d(P.Q("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iG.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eJ(C.a.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.P()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bB.prototype={
gea:function(){return this.b},
gce:function(a){var u=this.c
if(u==null)return""
if(C.a.a6(u,"["))return C.a.u(u,1,u.length-1)
return u},
gbr:function(a){var u=this.d
if(u==null)return P.lH(this.a)
return u},
gcr:function(a){var u=this.f
return u==null?"":u},
gdO:function(){var u=this.r
return u==null?"":u},
e2:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a6(u,"/"))u="/"+u
s=P.kF(null,0,0,b)
return new P.bB(q,o,m,n,u,s,r.r)},
gcs:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.l
u=this.Q=new P.dE(P.lw(t==null?"":t),[u,u])
t=u}return t},
gdP:function(){return this.c!=null},
gdS:function(){return this.f!=null},
gdQ:function(){return this.r!=null},
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
if(!!J.O(b).$ikA)if(s.a==b.gby())if(s.c!=null===b.gdP())if(s.b==b.gea())if(s.gce(s)==b.gce(b))if(s.gbr(s)==b.gbr(b))if(s.e===b.ge0(b)){u=s.f
t=u==null
if(!t===b.gdS()){if(t)u=""
if(u===b.gcr(b)){u=s.r
t=u==null
if(!t===b.gdQ()){if(t)u=""
u=u===b.gdO()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gG:function(a){var u=this.z
return u==null?this.z=C.a.gG(this.h(0)):u},
$ikA:1,
gby:function(){return this.a},
ge0:function(a){return this.e}}
P.jw.prototype={
$1:function(a){throw H.d(P.Q("Invalid port",this.a,this.b+1))}}
P.jx.prototype={
$1:function(a){return P.ev(C.X,a,C.e,!1)}}
P.jz.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.ev(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.ev(C.h,b,C.e,!0))}}}
P.jy.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.b_(b),t=this.a;u.v();)t.$2(a,u.gH(u))}}
P.iD.prototype={
ge9:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.c(o,0)
u=q.a
o=o[0]+1
t=C.a.bm(u,"?",o)
s=u.length
if(t>=0){r=P.cx(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.j3("data",p,p,p,P.cx(u,o,s,C.A,!1),r,p)},
h:function(a){var u,t=this.b
if(0>=t.length)return H.c(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jH.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jG.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.c(u,a)
u=u[a]
J.mp(u,0,96,b)
return u},
$S:18}
P.jI.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.C(b,s)^96
if(r>=t)return H.c(a,r)
a[r]=c}}}
P.jJ.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.C(b,0),t=C.a.C(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.c(a,r)
a[r]=c}}}
P.jk.prototype={
gdP:function(){return this.c>0},
gdR:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.A()
t=this.e
if(typeof t!=="number")return H.v(t)
t=u+1<t
u=t}else u=!1
return u},
gdS:function(){var u=this.f
if(typeof u!=="number")return u.P()
return u<this.r},
gdQ:function(){return this.r<this.a.length},
gd_:function(){return this.b===4&&C.a.a6(this.a,"http")},
gd0:function(){return this.b===5&&C.a.a6(this.a,"https")},
gby:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gd_())q=t.x="http"
else if(t.gd0()){t.x="https"
q="https"}else if(q===4&&C.a.a6(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a6(t.a,r)){t.x=r
q=r}else{q=C.a.u(t.a,0,q)
t.x=q}return q},
gea:function(){var u=this.c,t=this.b+3
return u>t?C.a.u(this.a,t,u-1):""},
gce:function(a){var u=this.c
return u>0?C.a.u(this.a,u,this.d):""},
gbr:function(a){var u,t=this
if(t.gdR()){u=t.d
if(typeof u!=="number")return u.A()
return P.eJ(C.a.u(t.a,u+1,t.e),null,null)}if(t.gd_())return 80
if(t.gd0())return 443
return 0},
ge0:function(a){return C.a.u(this.a,this.e,this.f)},
gcr:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.P()
return u<t?C.a.u(this.a,u+1,t):""},
gdO:function(){var u=this.r,t=this.a
return u<t.length?C.a.ai(t,u+1):""},
gcs:function(){var u=this,t=u.f
if(typeof t!=="number")return t.P()
if(t>=u.r)return C.Y
t=P.l
return new P.dE(P.lw(u.gcr(u)),[t,t])},
e2:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gby(),m=n==="file",l=p.c,k=l>0?C.a.u(p.a,p.b+3,l):"",j=p.gdR()?p.gbr(p):o
l=p.c
if(l>0)u=C.a.u(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.u(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a6(t,"/"))t="/"+t
r=P.kF(o,0,0,b)
s=p.r
q=s<l.length?C.a.ai(l,s+1):o
return new P.bB(n,k,u,j,t,r,q)},
gG:function(a){var u=this.y
return u==null?this.y=C.a.gG(this.a):u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.O(b).$ikA&&this.a===b.h(0)},
h:function(a){return this.a},
$ikA:1}
P.j3.prototype={}
W.n.prototype={}
W.eM.prototype={
gl:function(a){return a.length}}
W.eN.prototype={
h:function(a){return String(a)}}
W.eO.prototype={
h:function(a){return String(a)}}
W.bm.prototype={$ibm:1}
W.bn.prototype={$ibn:1}
W.bo.prototype={
cA:function(a,b,c){if(c!=null)return a.getContext(b,P.oi(c))
return a.getContext(b)},
ec:function(a,b){return this.cA(a,b,null)},
$ibo:1}
W.b1.prototype={
gl:function(a){return a.length}}
W.f7.prototype={
gl:function(a){return a.length}}
W.G.prototype={$iG:1}
W.bO.prototype={
gl:function(a){return a.length}}
W.f8.prototype={}
W.ag.prototype={}
W.ar.prototype={}
W.f9.prototype={
gl:function(a){return a.length}}
W.fa.prototype={
gl:function(a){return a.length}}
W.fd.prototype={
gl:function(a){return a.length}}
W.an.prototype={$ian:1}
W.ff.prototype={
h:function(a){return String(a)}}
W.cT.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[[P.ab,P.ac]]},
$ar:function(){return[[P.ab,P.ac]]},
$ih:1,
$ah:function(){return[[P.ab,P.ac]]},
$io:1,
$ao:function(){return[[P.ab,P.ac]]}}
W.cU.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gas(a))+" x "+H.e(this.gan(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.O(b)
if(!u.$iab)return!1
return a.left===u.gbo(b)&&a.top===u.gbv(b)&&this.gas(a)===u.gas(b)&&this.gan(a)===u.gan(b)},
gG:function(a){return W.lF(C.c.gG(a.left),C.c.gG(a.top),C.c.gG(this.gas(a)),C.c.gG(this.gan(a)))},
gdl:function(a){return a.bottom},
gan:function(a){return a.height},
gbo:function(a){return a.left},
gbu:function(a){return a.right},
gbv:function(a){return a.top},
gas:function(a){return a.width},
$iab:1,
$aab:function(){return[P.ac]}}
W.fg.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[P.l]},
$ar:function(){return[P.l]},
$ih:1,
$ah:function(){return[P.l]},
$io:1,
$ao:function(){return[P.l]}}
W.fh.prototype={
gl:function(a){return a.length}}
W.j1.prototype={
gl:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var u=this.i5(this)
return new J.a4(u,u.length)},
$ar:function(){return[W.S]},
$ah:function(){return[W.S]},
$ao:function(){return[W.S]}}
W.S.prototype={
ghf:function(a){return new W.j4(a)},
gc1:function(a){return new W.j1(a,a.children)},
gdm:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.P()
if(s<0)s=-s*0
if(typeof r!=="number")return r.P()
if(r<0)r=-r*0
return new P.ab(u,t,s,r,[P.ac])},
h:function(a){return a.localName},
am:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.l4
if(u==null){u=H.b([],[W.aN])
t=new W.de(u)
u.push(W.lE(null))
u.push(W.lG())
$.l4=t
d=t}else d=u
u=$.l3
if(u==null){u=new W.ew(d)
$.l3=u
c=u}else{u.a=d
c=u}}if($.aF==null){u=document
t=u.implementation.createHTMLDocument("")
$.aF=t
$.kl=t.createRange()
s=$.aF.createElement("base")
s.href=u.baseURI
$.aF.head.appendChild(s)}u=$.aF
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aF
if(!!this.$ibn)r=u.body
else{r=u.createElement(a.tagName)
$.aF.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.S(C.V,a.tagName)){$.kl.selectNodeContents(r)
q=$.kl.createContextualFragment(b)}else{r.innerHTML=b
q=$.aF.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aF.body
if(r==null?u!=null:r!==u)J.kV(r)
c.cB(q)
document.adoptNode(q)
return q},
hm:function(a,b,c){return this.am(a,b,c,null)},
ee:function(a,b){a.textContent=null
a.appendChild(this.am(a,b,null,null))},
$iS:1,
ge4:function(a){return a.tagName}}
W.fl.prototype={
$1:function(a){return!!J.O(a).$iS}}
W.i.prototype={$ii:1}
W.f.prototype={
h7:function(a,b,c,d){if(c!=null)this.eA(a,b,c,!1)},
eA:function(a,b,c,d){return a.addEventListener(b,H.bG(c,1),!1)}}
W.as.prototype={$ias:1}
W.bS.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.as]},
$ar:function(){return[W.as]},
$ih:1,
$ah:function(){return[W.as]},
$io:1,
$ao:function(){return[W.as]},
$ibS:1}
W.fq.prototype={
gl:function(a){return a.length}}
W.fu.prototype={
gl:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.fC.prototype={
gl:function(a){return a.length}}
W.bU.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.D]},
$ar:function(){return[W.D]},
$ih:1,
$ah:function(){return[W.D]},
$io:1,
$ao:function(){return[W.D]}}
W.aI.prototype={$iaI:1,
gdq:function(a){return a.data}}
W.bV.prototype={$ibV:1}
W.br.prototype={$ibr:1}
W.fS.prototype={
h:function(a){return String(a)}}
W.hc.prototype={
gl:function(a){return a.length}}
W.c1.prototype={$ic1:1}
W.hd.prototype={
i:function(a,b){return P.aW(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aW(u.value[1]))}},
ga8:function(a){var u=H.b([],[P.l])
this.F(a,new W.he(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iR:1,
$aR:function(){return[P.l,null]}}
W.he.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hf.prototype={
i:function(a,b){return P.aW(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aW(u.value[1]))}},
ga8:function(a){var u=H.b([],[P.l])
this.F(a,new W.hg(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iR:1,
$aR:function(){return[P.l,null]}}
W.hg.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aL.prototype={$iaL:1}
W.hh.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aL]},
$ar:function(){return[W.aL]},
$ih:1,
$ah:function(){return[W.aL]},
$io:1,
$ao:function(){return[W.aL]}}
W.av.prototype={$iav:1}
W.a2.prototype={
gaM:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.d(P.ln("No elements"))
if(t>1)throw H.d(P.ln("More than one element"))
return u.firstChild},
ag:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.c(t,b)
u.replaceChild(c,t[b])},
gU:function(a){var u=this.a.childNodes
return new W.cX(u,u.length)},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$ar:function(){return[W.D]},
$ah:function(){return[W.D]},
$ao:function(){return[W.D]}}
W.D.prototype={
hX:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
hZ:function(a,b){var u,t
try{u=a.parentNode
J.mm(u,b,a)}catch(t){H.ad(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.ej(a):u},
fQ:function(a,b,c){return a.replaceChild(b,c)},
$iD:1}
W.dd.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.D]},
$ar:function(){return[W.D]},
$ih:1,
$ah:function(){return[W.D]},
$io:1,
$ao:function(){return[W.D]}}
W.aO.prototype={$iaO:1,
gl:function(a){return a.length}}
W.hw.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aO]},
$ar:function(){return[W.aO]},
$ih:1,
$ah:function(){return[W.aO]},
$io:1,
$ao:function(){return[W.aO]}}
W.hI.prototype={
i:function(a,b){return P.aW(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aW(u.value[1]))}},
ga8:function(a){var u=H.b([],[P.l])
this.F(a,new W.hJ(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iR:1,
$aR:function(){return[P.l,null]}}
W.hJ.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hL.prototype={
gl:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.hW.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aR]},
$ar:function(){return[W.aR]},
$ih:1,
$ah:function(){return[W.aR]},
$io:1,
$ao:function(){return[W.aR]}}
W.aS.prototype={$iaS:1}
W.hX.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aS]},
$ar:function(){return[W.aS]},
$ih:1,
$ah:function(){return[W.aS]},
$io:1,
$ao:function(){return[W.aS]}}
W.aT.prototype={$iaT:1,
gl:function(a){return a.length}}
W.i0.prototype={
i:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga8:function(a){var u=H.b([],[P.l])
this.F(a,new W.i1(u))
return u},
gl:function(a){return a.length},
$iR:1,
$aR:function(){return[P.l,P.l]}}
W.i1.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aw.prototype={$iaw:1}
W.ds.prototype={
am:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
u=W.mD("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a2(t).ag(0,new W.a2(u))
return t}}
W.i4.prototype={
am:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.am(u.createElement("table"),b,c,d)
u.toString
u=new W.a2(u)
s=u.gaM(u)
s.toString
u=new W.a2(s)
r=u.gaM(u)
t.toString
r.toString
new W.a2(t).ag(0,new W.a2(r))
return t}}
W.i5.prototype={
am:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.am(u.createElement("table"),b,c,d)
u.toString
u=new W.a2(u)
s=u.gaM(u)
t.toString
s.toString
new W.a2(t).ag(0,new W.a2(s))
return t}}
W.cd.prototype={$icd:1}
W.aU.prototype={$iaU:1}
W.ax.prototype={$iax:1}
W.i8.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.ax]},
$ar:function(){return[W.ax]},
$ih:1,
$ah:function(){return[W.ax]},
$io:1,
$ao:function(){return[W.ax]}}
W.i9.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aU]},
$ar:function(){return[W.aU]},
$ih:1,
$ah:function(){return[W.aU]},
$io:1,
$ao:function(){return[W.aU]}}
W.ii.prototype={
gl:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.bw.prototype={$ibw:1}
W.im.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aV]},
$ar:function(){return[W.aV]},
$ih:1,
$ah:function(){return[W.aV]},
$io:1,
$ao:function(){return[W.aV]}}
W.io.prototype={
gl:function(a){return a.length}}
W.bg.prototype={}
W.iI.prototype={
h:function(a){return String(a)}}
W.iV.prototype={
gl:function(a){return a.length}}
W.bi.prototype={
ghp:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.y("deltaY is not supported"))},
gho:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.y("deltaX is not supported"))},
$ibi:1}
W.cm.prototype={
fR:function(a,b){return a.requestAnimationFrame(H.bG(b,1))},
eL:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.j2.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.G]},
$ar:function(){return[W.G]},
$ih:1,
$ah:function(){return[W.G]},
$io:1,
$ao:function(){return[W.G]}}
W.dO.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.O(b)
if(!u.$iab)return!1
return a.left===u.gbo(b)&&a.top===u.gbv(b)&&a.width===u.gas(b)&&a.height===u.gan(b)},
gG:function(a){return W.lF(C.c.gG(a.left),C.c.gG(a.top),C.c.gG(a.width),C.c.gG(a.height))},
gan:function(a){return a.height},
gas:function(a){return a.width}}
W.j7.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aH]},
$ar:function(){return[W.aH]},
$ih:1,
$ah:function(){return[W.aH]},
$io:1,
$ao:function(){return[W.aH]}}
W.e5.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.D]},
$ar:function(){return[W.D]},
$ih:1,
$ah:function(){return[W.D]},
$io:1,
$ao:function(){return[W.D]}}
W.jl.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aT]},
$ar:function(){return[W.aT]},
$ih:1,
$ah:function(){return[W.aT]},
$io:1,
$ao:function(){return[W.aT]}}
W.jp.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aw]},
$ar:function(){return[W.aw]},
$ih:1,
$ah:function(){return[W.aw]},
$io:1,
$ao:function(){return[W.aw]}}
W.j0.prototype={
F:function(a,b){var u,t,s,r,q
for(u=this.ga8(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.p)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga8:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.l])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.c(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aR:function(){return[P.l,P.l]}}
W.j4.prototype={
i:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga8(this).length}}
W.j5.prototype={}
W.j6.prototype={
$1:function(a){return this.a.$1(a)}}
W.cn.prototype={
es:function(a){var u
if($.co.ghC($.co)){for(u=0;u<262;++u)$.co.m(0,C.U[u],W.ot())
for(u=0;u<12;++u)$.co.m(0,C.p[u],W.ou())}},
aU:function(a){return $.mi().S(0,W.bP(a))},
ay:function(a,b,c){var u=$.co.i(0,H.e(W.bP(a))+"::"+b)
if(u==null)u=$.co.i(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaN:1}
W.K.prototype={
gU:function(a){return new W.cX(a,this.gl(a))}}
W.de.prototype={
aU:function(a){return C.b.dj(this.a,new W.hp(a))},
ay:function(a,b,c){return C.b.dj(this.a,new W.ho(a,b,c))},
$iaN:1}
W.hp.prototype={
$1:function(a){return a.aU(this.a)}}
W.ho.prototype={
$1:function(a){return a.ay(this.a,this.b,this.c)}}
W.ed.prototype={
eu:function(a,b,c,d){var u,t,s
this.a.ag(0,c)
u=b.bx(0,new W.ji())
t=b.bx(0,new W.jj())
this.b.ag(0,u)
s=this.c
s.ag(0,C.x)
s.ag(0,t)},
aU:function(a){return this.a.S(0,W.bP(a))},
ay:function(a,b,c){var u=this,t=W.bP(a),s=u.c
if(s.S(0,H.e(t)+"::"+b))return u.d.ha(c)
else if(s.S(0,"*::"+b))return u.d.ha(c)
else{s=u.b
if(s.S(0,H.e(t)+"::"+b))return!0
else if(s.S(0,"*::"+b))return!0
else if(s.S(0,H.e(t)+"::*"))return!0
else if(s.S(0,"*::*"))return!0}return!1},
$iaN:1}
W.ji.prototype={
$1:function(a){return!C.b.S(C.p,a)}}
W.jj.prototype={
$1:function(a){return C.b.S(C.p,a)}}
W.jr.prototype={
ay:function(a,b,c){if(this.em(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.S(0,b)
return!1}}
W.js.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jq.prototype={
aU:function(a){var u=J.O(a)
if(!!u.$ica)return!1
u=!!u.$ik
if(u&&W.bP(a)==="foreignObject")return!1
if(u)return!0
return!1},
ay:function(a,b,c){if(b==="is"||C.a.a6(b,"on"))return!1
return this.aU(a)},
$iaN:1}
W.cX.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cH(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gH:function(a){return this.d}}
W.aN.prototype={}
W.jg.prototype={}
W.ew.prototype={
cB:function(a){new W.jC(this).$2(a,null)},
b2:function(a,b){if(b==null)J.kV(a)
else b.removeChild(a)},
fV:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mq(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ad(r)}t="element unprintable"
try{t=J.a3(a)}catch(r){H.ad(r)}try{s=W.bP(a)
this.fU(a,b,p,t,s,o,n)}catch(r){if(H.ad(r) instanceof P.al)throw r
else{this.b2(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fU:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.b2(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aU(a)){p.b2(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.ay(a,"is",g)){p.b2(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga8(f)
t=H.b(u.slice(0),[H.eI(u,0)])
for(s=f.ga8(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.c(t,s)
r=t[s]
if(!p.a.ay(a,J.mt(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.O(a).$icd)p.cB(a.content)}}
W.jC.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fV(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b2(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ad(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dN.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ct.prototype={}
W.cu.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.ej.prototype={}
W.em.prototype={}
W.en.prototype={}
W.cv.prototype={}
W.cw.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
P.jm.prototype={
dN:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
cw:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.O(a)
if(!!u.$ia8)return new Date(a.a)
if(!!u.$in5)throw H.d(P.iz("structured clone of RegExp"))
if(!!u.$ias)return a
if(!!u.$ibm)return a
if(!!u.$ibS)return a
if(!!u.$iaI)return a
if(!!u.$ic3||!!u.$ibb||!!u.$ic1)return a
if(!!u.$iR){t=p.dN(a)
s=p.b
r=s.length
if(t>=r)return H.c(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.c(s,t)
s[t]=q
u.F(a,new P.jo(o,p))
return o.a}if(!!u.$io){t=p.dN(a)
o=p.b
if(t>=o.length)return H.c(o,t)
q=o[t]
if(q!=null)return q
return p.hl(a,t)}throw H.d(P.iz("structured clone of other type"))},
hl:function(a,b){var u,t=J.cB(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.c(q,b)
q[b]=r
for(u=0;u<s;++u){q=this.cw(t.i(a,u))
if(u>=r.length)return H.c(r,u)
r[u]=q}return r}}
P.jo.prototype={
$2:function(a,b){this.a.a[a]=this.b.cw(b)},
$S:3}
P.et.prototype={$iaI:1,
gdq:function(a){return this.a}}
P.jN.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jn.prototype={}
P.fr.prototype={
gbh:function(){var u=this.b,t=H.kL(u,"r",0)
return new H.fX(new H.cl(u,new P.fs(),[t]),new P.ft(),[t,W.S])},
m:function(a,b,c){var u=this.gbh()
J.mr(u.b.$1(J.eL(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.af(this.gbh().a)},
i:function(a,b){var u=this.gbh()
return u.b.$1(J.eL(u.a,b))},
gU:function(a){var u=P.lb(this.gbh(),!1,W.S)
return new J.a4(u,u.length)},
$ar:function(){return[W.S]},
$ah:function(){return[W.S]},
$ao:function(){return[W.S]}}
P.fs.prototype={
$1:function(a){return!!J.O(a).$iS}}
P.ft.prototype={
$1:function(a){return H.j(a,"$iS")}}
P.jc.prototype={
gbu:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.v(t)
return u+t},
gdl:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.v(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
t:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.O(b)
if(!!u.$iab){t=q.a
if(t==u.gbo(b)){s=q.b
if(s==u.gbv(b)){r=q.c
if(typeof t!=="number")return t.A()
if(typeof r!=="number")return H.v(r)
if(t+r===u.gbu(b)){t=q.d
if(typeof s!=="number")return s.A()
if(typeof t!=="number")return H.v(t)
u=s+t===u.gdl(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u=this,t=u.a,s=J.cI(t),r=u.b,q=J.cI(r),p=u.c
if(typeof t!=="number")return t.A()
if(typeof p!=="number")return H.v(p)
p=C.d.gG(t+p)
t=u.d
if(typeof r!=="number")return r.A()
if(typeof t!=="number")return H.v(t)
t=C.d.gG(r+t)
return P.ns(P.j9(P.j9(P.j9(P.j9(0,s),q),p),t))}}
P.ab.prototype={
gbo:function(a){return this.a},
gbv:function(a){return this.b},
gas:function(a){return this.c},
gan:function(a){return this.d}}
P.b9.prototype={$ib9:1}
P.fM.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$ar:function(){return[P.b9]},
$ih:1,
$ah:function(){return[P.b9]},
$io:1,
$ao:function(){return[P.b9]}}
P.bd.prototype={$ibd:1}
P.hr.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$ar:function(){return[P.bd]},
$ih:1,
$ah:function(){return[P.bd]},
$io:1,
$ao:function(){return[P.bd]}}
P.hz.prototype={
gl:function(a){return a.length}}
P.ca.prototype={$ica:1}
P.i3.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$ar:function(){return[P.l]},
$ih:1,
$ah:function(){return[P.l]},
$io:1,
$ao:function(){return[P.l]}}
P.k.prototype={
gc1:function(a){return new P.fr(a,new W.a2(a))},
am:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aN])
p.push(W.lE(null))
p.push(W.lG())
p.push(new W.jq())
c=new W.ew(new W.de(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).hm(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a2(s)
q=p.gaM(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ik:1}
P.bf.prototype={$ibf:1}
P.ip.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$ar:function(){return[P.bf]},
$ih:1,
$ah:function(){return[P.bf]},
$io:1,
$ao:function(){return[P.bf]}}
P.dY.prototype={}
P.dZ.prototype={}
P.e8.prototype={}
P.e9.prototype={}
P.ek.prototype={}
P.el.prototype={}
P.er.prototype={}
P.es.prototype={}
P.bx.prototype={$ih:1,
$ah:function(){return[P.w]},
$io:1,
$ao:function(){return[P.w]}}
P.eQ.prototype={
gl:function(a){return a.length}}
P.eR.prototype={
i:function(a,b){return P.aW(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aW(u.value[1]))}},
ga8:function(a){var u=H.b([],[P.l])
this.F(a,new P.eS(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iR:1,
$aR:function(){return[P.l,null]}}
P.eS.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eT.prototype={
gl:function(a){return a.length}}
P.bl.prototype={}
P.hs.prototype={
gl:function(a){return a.length}}
P.dM.prototype={}
P.dj.prototype={
e6:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.O(g)
if(!!u.$iaI&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.oj(g))
return}if(!!u.$ibV&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.cJ("Incorrect number or type of arguments"))},
e5:function(a,b,c,d,e,f,g){return this.e6(a,b,c,d,e,f,g,null,null,null)}}
P.hZ.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return P.aW(a.item(b))},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$ar:function(){return[[P.R,,,]]},
$ih:1,
$ah:function(){return[[P.R,,,]]},
$io:1,
$ao:function(){return[[P.R,,,]]}}
P.eg.prototype={}
P.eh.prototype={}
T.aC.prototype={
aI:function(a,b){return!0},
h:function(a){return"all"}}
T.d_.prototype={
aI:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)if(u[s].aI(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.p)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.ba.prototype={}
T.a5.prototype={
aI:function(a,b){return!this.ei(0,b)},
h:function(a){return"!["+this.cI(0)+"]"}}
T.hC.prototype={
aI:function(a,b){return this.a<=b&&this.b>=b},
h:function(a){var u=H.bu(this.a),t=H.bu(this.b)
return u+".."+t}}
T.hM.prototype={
eq:function(a){var u,t
if(a.a.length<=0)throw H.d(P.t("May not create a Set with zero characters."))
u=new H.N([P.w,P.aB])
for(t=new H.bY(a,a.gl(a));t.v();)u.m(0,t.d,!0)
this.a=u},
aI:function(a,b){return this.a.bk(0,b)},
h:function(a){var u=this.a
return P.cc(u.ga8(u),0,null)}}
R.dq.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.dz(this.a.j(0,b))
r.a=H.b([],[T.ba])
r.c=!1
this.c.push(r)
return r},
hu:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
if(r.aI(0,a))return r}return},
h:function(a){return this.b}}
R.dw.prototype={
h:function(a){var u=H.kQ(this.b,"\n","\\n"),t=H.kQ(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.dx.prototype={
aK:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.p)(c),++t){s=c[t]
this.c.m(0,s,b)}},
h:function(a){return this.b}}
R.ij.prototype={
j:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.dq(this,b)
u.c=H.b([],[R.dz])
this.a.m(0,b,u)}return u},
O:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.dx(a)
u=P.l
t.c=new H.N([u,u])
this.b.m(0,a,t)}return t},
e8:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.b([],[R.dw]),k=this.c,j=[P.w],i=H.b([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)l.push(t)
return l}r=C.a.C(a,s)
q=k.hu(r)
if(q==null){if(t==null){i.push(r)
p=P.cc(i,0,m)
throw H.d(P.t("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}l.push(t)
s=t.c+1
i=H.b([],j)
k=this.c
t=m}else{if(!q.c)i.push(r)
k=q.b
if(k.d!=null){p=P.cc(i,0,m)
o=k.d
n=o.c.i(0,p)
t=new R.dw(n==null?o.b:n,p,s)}++s}}}}
R.dz.prototype={
h:function(a){return this.b.b+": "+this.cI(0)}}
O.aD.prototype={
bf:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cC:function(a,b,c){this.b=b
this.c=a},
aZ:function(a,b){return this.cC(a,null,b)},
d3:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cL:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.a4(u,u.length)},
I:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.kL(s,"aD",0)]
if(s.d3(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.cL(t,H.b([b],r))}},
ag:function(a,b){var u,t
if(this.d3(b)){u=this.a
t=u.length
C.b.ag(u,b)
this.cL(t,b)}},
$ih:1}
O.c0.prototype={
gl:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.B():u},
aN:function(){var u=this.b
if(u!=null)u.B(null)},
ga5:function(a){var u=this.a
if(u.length>0)return C.b.gaA(u)
else return V.bs()},
bt:function(a){var u=this.a
if(a==null)u.push(V.bs())
else u.push(a)
this.aN()},
aJ:function(){var u=this.a
if(u.length>0){u.pop()
this.aN()}}}
E.eX.prototype={}
E.aG.prototype={
scE:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().W(0,s.gdY())
u=s.c
if(u!=null)u.gp().n(0,s.gdY())
t=new D.x("shape",r,s.c)
t.b=!0
s.bq(t)}},
ab:function(a,b){var u
for(u=this.y.a,u=new J.a4(u,u.length);u.v();)u.d.ab(0,b)},
a3:function(a){var u,t=this,s=a.dx
s.a.push(s.ga5(s))
s.aN()
a.cq(t.f)
s=a.dy
u=(s&&C.b).gaA(s)
if(u!=null&&t.d!=null)u.ct(a,t)
for(s=t.y.a,s=new J.a4(s,s.length);s.v();)s.d.a3(a)
a.cp()
a.dx.aJ()},
bq:function(a){var u=this.z
if(u!=null)u.B(a)},
a9:function(){return this.bq(null)},
dZ:function(a){this.e=null
this.bq(a)},
hN:function(){return this.dZ(null)},
dX:function(a){this.bq(a)},
hK:function(){return this.dX(null)},
hJ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdW(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bQ()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.a9()},
hM:function(a,b){var u,t
for(u=b.gU(b),t=this.gdW();u.v();)u.gH(u).gp().W(0,t)
this.a9()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hE.prototype={
ep:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a8(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.c0()
t=[V.aK]
u.a=H.b([],t)
u.gp().n(0,new E.hF(s))
s.cy=u
u=new O.c0()
u.a=H.b([],t)
u.gp().n(0,new E.hG(s))
s.db=u
u=new O.c0()
u.a=H.b([],t)
u.gp().n(0,new E.hH(s))
s.dx=u
u=H.b([],[O.dt])
s.dy=u
u.push(null)
s.fr=new H.N([P.l,A.dk])},
ghW:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga5(s)
u=t.db
u=t.z=s.q(0,u.ga5(u))
s=u}return s},
ge1:function(){var u,t=this,s=t.ch
if(s==null){s=t.ghW()
u=t.dx
u=t.ch=s.q(0,u.ga5(u))
s=u}return s},
cq:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gaA(u):a)},
cp:function(){var u=this.dy
if(u.length>1)u.pop()},
bV:function(a){var u=a.b
if(u.length===0)throw H.d(P.t("May not cache a shader with no name."))
if(this.fr.bk(0,u))throw H.d(P.t('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)}}
E.hF.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hG.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hH.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.du.prototype={
cO:function(a){this.e3()},
cN:function(){return this.cO(null)},
ghy:function(){var u,t=this,s=Date.now(),r=C.d.af(P.l2(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a8(s,!1)
return u/r},
d5:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.q()
if(typeof r!=="number")return H.v(r)
u=C.c.cd(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.q()
t=C.c.cd(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lq(C.n,s.gi_())}},
e3:function(){if(!this.cx){this.cx=!0
var u=window
C.E.eL(u)
C.E.fR(u,W.lR(new E.ih(this),P.ac))}},
hY:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.d5()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a8(r,!1)
s.y=P.l2(r-s.r.a).a*0.000001
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
o.a3(p.e)}s=p.Q
if(s!=null)s.B(null)}catch(q){u=H.ad(q)
t=H.kM(q)
P.kP("Error: "+H.e(u))
P.kP("Stack: "+H.e(t))
throw H.d(u)}}}
E.ih.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.hY()}}}
Z.dK.prototype={}
Z.cL.prototype={
Z:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ad(s)
t=P.t('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.d(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.ck.prototype={}
Z.b0.prototype={
av:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
Z:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].Z(a)},
ar:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a3:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.l],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)p.push(u[s].h(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a3(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.k(p,", ")+"\nAttrs:   "+C.b.k(r,", ")}}
Z.bq.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.c9(this.c))+"'")+"]"}}
Z.az.prototype={
gcF:function(a){var u=this.a,t=(u&$.ae().a)!==0?3:0
if((u&$.aZ().a)!==0)t+=3
if((u&$.aY().a)!==0)t+=3
if((u&$.ap().a)!==0)t+=2
if((u&$.bk().a)!==0)t+=3
if((u&$.cF().a)!==0)t+=3
if((u&$.cG().a)!==0)t+=4
if((u&$.bK().a)!==0)++t
return(u&$.aX().a)!==0?t+4:t},
hb:function(a){var u,t=$.ae(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aZ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aY()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ap()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cF()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cG()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bK()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aX()
if((s&t.a)!==0)if(u===a)return t
return $.mg()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.az))return!1
return this.a===b.a},
h:function(a){var u=H.b([],[P.l]),t=this.a
if((t&$.ae().a)!==0)u.push("Pos")
if((t&$.aZ().a)!==0)u.push("Norm")
if((t&$.aY().a)!==0)u.push("Binm")
if((t&$.ap().a)!==0)u.push("Txt2D")
if((t&$.bk().a)!==0)u.push("TxtCube")
if((t&$.cF().a)!==0)u.push("Clr3")
if((t&$.cG().a)!==0)u.push("Clr4")
if((t&$.bK().a)!==0)u.push("Weight")
if((t&$.aX().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.k(u,"|")}}
D.f_.prototype={}
D.bQ.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.V]}]):u).push(b)},
W:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.S(s,b)
if(s===!0){s=t.a
u=(s&&C.b).W(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.S(s,b)
if(s===!0){s=t.b
u=(s&&C.b).W(s,b)||u}return u},
B:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.V()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.F(P.lb(u,!0,{func:1,ret:-1,args:[D.V]}),new D.fo(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.V]}])
C.b.F(u,new D.fp(q))}return!0},
c6:function(){return this.B(null)},
aL:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.B(u)}}}}
D.fo.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fp.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.V.prototype={}
D.b4.prototype={}
D.b5.prototype={}
D.x.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cM.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cM))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.d4.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d4))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.fL.prototype={
hS:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
hO:function(a){this.c=a.b
this.d.W(0,a.a)
return!1}}
X.d8.prototype={}
X.fT.prototype={
b0:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.q()
u=b.b
t=q.ch
if(typeof u!=="number")return u.q()
s=new V.a0(o.a+n*m,o.b+u*t)
t=q.a.gaV()
r=new X.aM(a,V.aP(),q.x,t,s)
r.b=!0
q.z=new P.a8(p,!1)
q.x=s
return r},
co:function(a,b){this.r=a.a
return!1},
ba:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ed()
if(typeof u!=="number")return u.at()
this.r=(u&~t)>>>0
return!1},
b9:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.b0(a,b))
return!0},
hT:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaV()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.q()
q=a.b
p=o.cy
if(typeof q!=="number")return q.q()
t=new X.c2(new V.E(s*r,q*p),u,t)
t.b=!0
n.B(t)
return!0},
fk:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.d8(c,r.a.gaV(),b)
s.b=!0
t.B(s)
r.y=new P.a8(u,!1)
r.x=V.aP()}}
X.ah.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ah))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aM.prototype={}
X.hi.prototype={
bH:function(a,b,c){var u=this,t=new P.a8(Date.now(),!1),s=u.a.gaV(),r=new X.aM(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
co:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.B(this.bH(a,b,!0))
return!0},
ba:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.ed()
if(typeof t!=="number")return t.at()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.B(u.bH(a,b,!0))
return!0},
b9:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.bH(a,b,!1))
return!0},
hU:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaV()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.q()
r=a.b
q=p.ch
if(typeof r!=="number")return r.q()
u=new X.c2(new V.E(t*s,r*q),u,b)
u.b=!0
o.B(u)
return!0},
gds:function(){var u=this.b
return u==null?this.b=D.B():u},
gbw:function(){var u=this.c
return u==null?this.c=D.B():u},
gdV:function(){var u=this.d
return u==null?this.d=D.B():u}}
X.c2.prototype={}
X.hy.prototype={}
X.dy.prototype={}
X.il.prototype={
b0:function(a,b){var u=this,t=new P.a8(Date.now(),!1),s=a.length>0?a[0]:V.aP(),r=u.a.gaV(),q=new X.dy(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hR:function(a){var u=this.b
if(u==null)return!1
u.B(this.b0(a,!0))
return!0},
hP:function(a){var u=this.c
if(u==null)return!1
u.B(this.b0(a,!0))
return!0},
hQ:function(a){var u=this.d
if(u==null)return!1
u.B(this.b0(a,!1))
return!0}}
X.dF.prototype={
gaV:function(){var u=this.a,t=C.j.gdm(u).c
t.toString
u=C.j.gdm(u).d
u.toString
return V.ll(0,0,t,u)},
cW:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.d4(u,new X.ah(t,a.altKey,a.shiftKey))},
aS:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ah(t,a.altKey,a.shiftKey)},
bU:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ah(t,a.altKey,a.shiftKey)},
aF:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.K()
u=t.top
if(typeof r!=="number")return r.K()
return new V.a0(s-q,r-u)},
b1:function(a){return new V.E(a.movementX,a.movementY)},
bS:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a0])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
q=C.c.a0(r.pageX)
C.c.a0(r.pageY)
p=o.left
C.c.a0(r.pageX)
n.push(new V.a0(q-p,C.c.a0(r.pageY)-o.top))}return n},
aD:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cM(u,new X.ah(t,a.altKey,a.shiftKey))},
bJ:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.K()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.K()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fe:function(a){this.f=!0},
f2:function(a){this.f=!1},
f8:function(a){if(this.f&&this.bJ(a))a.preventDefault()},
fi:function(a){var u
if(!this.f)return
u=this.cW(a)
this.b.hS(u)},
fg:function(a){var u
if(!this.f)return
u=this.cW(a)
this.b.hO(u)},
fm:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aS(a)
if(r.x){u=r.aD(a)
t=r.b1(a)
if(r.d.co(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.aD(a)
s=r.aF(a)
if(r.c.co(u,s))a.preventDefault()},
fq:function(a){var u,t,s,r=this
r.aS(a)
u=r.aD(a)
if(r.x){t=r.b1(a)
if(r.d.ba(u,t))a.preventDefault()
return}if(r.r)return
s=r.aF(a)
if(r.c.ba(u,s))a.preventDefault()},
fc:function(a){var u,t,s,r=this
if(!r.bJ(a)){r.aS(a)
u=r.aD(a)
if(r.x){t=r.b1(a)
if(r.d.ba(u,t))a.preventDefault()
return}if(r.r)return
s=r.aF(a)
if(r.c.ba(u,s))a.preventDefault()}},
fo:function(a){var u,t,s,r=this
r.aS(a)
u=r.aD(a)
if(r.x){t=r.b1(a)
if(r.d.b9(u,t))a.preventDefault()
return}if(r.r)return
s=r.aF(a)
if(r.c.b9(u,s))a.preventDefault()},
fa:function(a){var u,t,s,r=this
if(!r.bJ(a)){r.aS(a)
u=r.aD(a)
if(r.x){t=r.b1(a)
if(r.d.b9(u,t))a.preventDefault()
return}if(r.r)return
s=r.aF(a)
if(r.c.b9(u,s))a.preventDefault()}},
ft:function(a){var u,t,s=this
s.aS(a)
u=new V.E((a&&C.D).gho(a),C.D.ghp(a)).w(0,180)
if(s.x){if(s.d.hT(u))a.preventDefault()
return}if(s.r)return
t=s.aF(a)
if(s.c.hU(u,t))a.preventDefault()},
fv:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aD(s.y)
t=s.aF(s.y)
s.d.fk(u,t,r)}},
fN:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bU(a)
u=t.bS(a)
if(t.e.hR(u))a.preventDefault()},
fJ:function(a){var u
this.bU(a)
u=this.bS(a)
if(this.e.hP(u))a.preventDefault()},
fL:function(a){var u
this.bU(a)
u=this.bS(a)
if(this.e.hQ(u))a.preventDefault()}}
D.fe.prototype={$ia9:1}
D.a9.prototype={}
D.d5.prototype={
cP:function(a){var u=this.x
if(u!=null)u.B(a)},
d2:function(a){var u=this.y
if(u!=null)u.B(a)},
fj:function(){return this.d2(null)},
fz:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){s=a[t]
if(s==null||this.eG(s))return!1}return!0},
eX:function(a,b){var u,t,s,r
for(u=b.length,t=this.gd1(),s=0;s<b.length;b.length===u||(0,H.p)(b),++s){r=b[s]
r.gp().n(0,t)}u=new D.b4()
u.b=!0
this.cP(u)},
fD:function(a,b){var u,t,s
for(u=b.gU(b),t=this.gd1();u.v();){s=u.gH(u)
C.b.W(this.e,s)
s.gp().W(0,t)}u=new D.b5()
u.b=!0
this.cP(u)},
eG:function(a){var u=C.b.S(this.e,a)
return u},
$ah:function(){return[D.a9]},
$aaD:function(){return[D.a9]}}
D.hx.prototype={$ia9:1}
D.hY.prototype={$ia9:1}
V.Y.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.am.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.am))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+", "+V.C(u.d,3,0)+"]"}}
V.fn.prototype={}
V.c_.prototype={
aa:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.I])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.c_))return!1
u=b.a
t=$.A().a
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
h:function(a){var u,t,s,r,q=this,p=[P.I],o=V.bI(H.b([q.a,q.d,q.r],p),3,0),n=V.bI(H.b([q.b,q.e,q.x],p),3,0),m=V.bI(H.b([q.c,q.f,q.y],p),3,0)
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
V.aK.prototype={
aa:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.I])
return t},
cj:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.A().a)return V.bs()
u=1/b1
t=-n
s=-a0
return V.au((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
q:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.au(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
cv:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a1(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aK))return!1
u=b.a
t=$.A().a
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
D:function(a){var u,t,s,r,q,p=this,o=[P.I],n=V.bI(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bI(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bI(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bI(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
N:function(){return this.D("")}}
V.a0.prototype={
K:function(a,b){return new V.a0(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}}
V.a1.prototype={
K:function(a,b){return new V.a1(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.aQ.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aQ))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+", "+V.C(u.d,3,0)+"]"}}
V.di.prototype={
gak:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.di))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+", "+V.C(u.d,3,0)+"]"}}
V.E.prototype={
b8:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.v(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.v(t)
return s*r+u*t},
q:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.q()
u=this.b
if(typeof u!=="number")return u.q()
return new V.E(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.A().a){u=$.lz
return u==null?$.lz=new V.E(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.E(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
u=b.a
t=this.a
s=$.A()
s.toString
if(typeof u!=="number")return u.K()
if(typeof t!=="number")return H.v(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.K()
if(typeof t!=="number")return H.v(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}}
V.F.prototype={
b8:function(a){return Math.sqrt(this.E(this))},
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ck:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.F(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
b7:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.F(u*t-s*r,s*q-p*t,p*r-u*q)},
A:function(a,b){return new V.F(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.F(-this.a,-this.b,-this.c)},
w:function(a,b){if(Math.abs(b-0)<$.A().a)return V.dJ()
return new V.F(this.a/b,this.b/b,this.c/b)},
dU:function(){var u=$.A().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.F))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.cj.prototype={
b8:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cj))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+", "+V.C(u.d,3,0)+"]"}}
U.f2.prototype={
bC:function(a){var u=V.oK(a,this.c,this.b)
return u},
gp:function(){var u=this.y
return u==null?this.y=D.B():u},
R:function(a){var u=this.y
if(u!=null)u.B(a)},
scz:function(a,b){},
scl:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.A().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bC(u)}s=new D.x("maximumLocation",s,t.b)
s.b=!0
t.R(s)}},
scn:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.A().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bC(u)}s=new D.x("minimumLocation",s,t.c)
s.b=!0
t.R(s)}},
saj:function(a,b){var u,t=this
b=t.bC(b)
u=t.d
if(!(Math.abs(u-b)<$.A().a)){t.d=b
u=new D.x("location",u,b)
u.b=!0
t.R(u)}},
scm:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.A().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.x("maximumVelocity",r,a)
r.b=!0
s.R(r)}},
sX:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.A().a)){u.f=a
t=new D.x("velocity",t,a)
t.b=!0
u.R(t)}},
sc4:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.A().a)){this.x=a
u=new D.x("dampening",u,a)
u.b=!0
this.R(u)}},
ab:function(a,b){var u,t,s,r=this,q=r.f,p=$.A().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.saj(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.A().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sX(u)}}}
U.cP.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.B():u},
aY:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cP))return!1
return J.J(this.a,b.a)},
h:function(a){return"Constant: "+this.a.D("          ")}}
U.bT.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.B():u},
R:function(a){var u=this.e
if(u!=null)u.B(a)},
ad:function(){return this.R(null)},
eV:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaR(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.gp()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b4()
u.b=!0
this.R(u)},
fB:function(a,b){var u,t
for(u=b.gU(b),t=this.gaR();u.v();)u.gH(u).gp().W(0,t)
u=new D.b5()
u.b=!0
this.R(u)},
aY:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.P()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a4(r,r.length),u=null;r.v();){q=r.d
if(q!=null){t=q.aY(0,b,c)
if(t!=null)u=u==null?t:t.q(0,u)}}s.f=u==null?V.bs():u
r=s.e
if(r!=null)r.aL(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bT))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.J(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ah:function(){return[U.aa]},
$aaD:function(){return[U.aa]},
$iaa:1}
U.aa.prototype={}
U.dG.prototype={
gp:function(){var u=this.cy
return u==null?this.cy=D.B():u},
R:function(a){var u=this.cy
if(u!=null)u.B(a)},
ad:function(){return this.R(null)},
b3:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gds().n(0,u.gbK())
u.a.c.gdV().n(0,u.gbM())
u.a.c.gbw().n(0,u.gbO())
return!0},
bL:function(a){var u=this
if(!J.J(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bN:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$iaM")
if(!n.y)return
if(n.x){u=a.d.K(0,a.y)
u=new V.E(u.a,u.b)
u=u.E(u)
t=n.r
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.K(0,a.y)
u=new V.E(t.a,t.b).q(0,2).w(0,u.gak())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.q()
s=n.e
if(typeof s!=="number")return H.v(s)
t.sX(u*10*s)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=new V.E(s.a,s.b).q(0,2).w(0,u.gak())
s=n.b
q=r.a
if(typeof q!=="number")return q.T()
p=n.e
if(typeof p!=="number")return H.v(p)
o=n.z
if(typeof o!=="number")return H.v(o)
s.saj(0,-q*p+o)
n.b.sX(0)
t=t.K(0,a.z)
n.Q=new V.E(t.a,t.b).q(0,2).w(0,u.gak())}n.ad()},
bP:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.E(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.q()
s=r.e
if(typeof s!=="number")return H.v(s)
u.sX(t*10*s)
r.ad()}},
aY:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.ch=p
u=b.y
r.b.ab(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.au(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iaa:1}
U.dH.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.B():u},
R:function(a){var u=this.fx
if(u!=null)u.B(a)},
ad:function(){return this.R(null)},
b3:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gds().n(0,s.gbK())
s.a.c.gdV().n(0,s.gbM())
s.a.c.gbw().n(0,s.gbO())
u=s.a.d
t=u.f
u=t==null?u.f=D.B():t
u.n(0,s.geN())
u=s.a.d
t=u.d
u=t==null?u.d=D.B():t
u.n(0,s.geP())
u=s.a.e
t=u.b
u=t==null?u.b=D.B():t
u.n(0,s.gh4())
u=s.a.e
t=u.d
u=t==null?u.d=D.B():t
u.n(0,s.gh2())
u=s.a.e
t=u.c
u=t==null?u.c=D.B():t
u.n(0,s.gh0())
return!0},
ax:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.T()
u=-u}if(this.r){if(typeof t!=="number")return t.T()
t=-t}return new V.E(u,t)},
bL:function(a){var u=this
H.j(a,"$iaM")
if(!J.J(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bN:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$iaM")
if(!n.cx)return
if(n.ch){u=a.d.K(0,a.y)
u=new V.E(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.K(0,a.y)
u=n.ax(new V.E(t.a,t.b).q(0,2).w(0,u.gak()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.v(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.v(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=n.ax(new V.E(s.a,s.b).q(0,2).w(0,u.gak()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.saj(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.saj(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.K(0,a.z)
n.dx=n.ax(new V.E(t.a,t.b).q(0,2).w(0,u.gak()))}n.ad()},
bP:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.v(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.v(u)
s.sX(-t*10*u)
r.ad()}},
eO:function(a){var u=this
if(H.j(a,"$id8").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eQ:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$iaM")
if(!J.J(n.d,a.x.b))return
u=a.c
t=a.d
s=t.K(0,a.y)
r=n.ax(new V.E(s.a,s.b).q(0,2).w(0,u.gak()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.saj(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.saj(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.K(0,a.z)
n.dx=n.ax(new V.E(t.a,t.b).q(0,2).w(0,u.gak()))
n.ad()},
h5:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
h3:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$idy")
if(!n.cx)return
if(n.ch){u=a.d.K(0,a.y)
u=new V.E(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.K(0,a.y)
u=n.ax(new V.E(t.a,t.b).q(0,2).w(0,u.gak()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.v(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.v(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=n.ax(new V.E(s.a,s.b).q(0,2).w(0,u.gak()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.saj(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.saj(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.K(0,a.z)
n.dx=n.ax(new V.E(t.a,t.b).q(0,2).w(0,u.gak()))}n.ad()},
h1:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.v(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.v(u)
s.sX(-t*10*u)
r.ad()}},
aY:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.dy=p
u=b.y
r.c.ab(0,u)
r.b.ab(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.au(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.q(0,V.au(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iaa:1}
U.dI.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.B():u},
R:function(a){var u=this.r
if(u!=null)u.B(a)},
b3:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.B():t
t=r.geS()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.B():s).n(0,t)
return!0},
eT:function(a){var u,t,s,r,q=this
if(!J.J(q.b,q.a.b.c))return
H.j(a,"$ic2")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){q.d=r
u=new D.x("zoom",u,r)
u.b=!0
q.R(u)}},
aY:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.au(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iaa:1}
M.cO.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.B():u},
V:function(a){var u=this.r
if(u!=null)u.B(a)},
aB:function(){return this.V(null)},
fF:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gY(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.gp()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b4()
u.b=!0
this.V(u)},
fH:function(a,b){var u,t
for(u=b.gU(b),t=this.gY();u.v();)u.gH(u).gp().W(0,t)
u=new D.b5()
u.b=!0
this.V(u)},
a3:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.a4(u,u.length);u.v();){t=u.d
if(t!=null)t.a3(a)}s.f=!1},
$ah:function(){return[M.ai]},
$aaD:function(){return[M.ai]},
$iai:1}
M.cQ.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.B():u},
V:function(a){var u=this.r
if(u!=null)u.B(a)},
aB:function(){return this.V(null)},
sb5:function(a){var u,t,s=this
if(a==null)a=new X.fF()
u=s.b
if(u!==a){if(u!=null)u.gp().W(0,s.gY())
t=s.b
s.b=a
a.gp().n(0,s.gY())
u=new D.x("camera",t,s.b)
u.b=!0
s.V(u)}},
saX:function(a,b){var u,t,s=this
if(b==null)b=X.l6(null)
u=s.c
if(u!==b){if(u!=null)u.gp().W(0,s.gY())
t=s.c
s.c=b
b.gp().n(0,s.gY())
u=new D.x("target",t,s.c)
u.b=!0
s.V(u)}},
sbb:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().W(0,t.gY())
u=t.d
t.d=a
if(a!=null)a.gp().n(0,t.gY())
s=new D.x("technique",u,t.d)
s.b=!0
t.V(s)}},
a3:function(a){var u,t=this
a.cq(t.d)
t.c.Z(a)
t.b.Z(a)
u=t.d
if(u!=null)u.ab(0,a)
t.e.ab(0,a)
t.e.a3(a)
t.b.ar(a)
t.c.ar(a)
a.cp()},
$iai:1}
M.cV.prototype={
V:function(a){var u=this.y
if(u!=null)u.B(a)},
aB:function(){return this.V(null)},
f4:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gY(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bQ()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b4()
u.b=!0
this.V(u)},
f6:function(a,b){var u,t
for(u=b.gU(b),t=this.gY();u.v();)u.gH(u).gp().W(0,t)
u=new D.b5()
u.b=!0
this.V(u)},
sb5:function(a){var u,t,s=this
if(a==null)a=X.lf(null)
u=s.b
if(u!==a){if(u!=null)u.gp().W(0,s.gY())
t=s.b
s.b=a
a.gp().n(0,s.gY())
u=new D.x("camera",t,s.b)
u.b=!0
s.V(u)}},
saX:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gp().W(0,t.gY())
u=t.c
t.c=b
b.gp().n(0,t.gY())
s=new D.x("target",u,t.c)
s.b=!0
t.V(s)}},
sbb:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().W(0,t.gY())
u=t.d
t.d=a
if(a!=null)a.gp().n(0,t.gY())
s=new D.x("technique",u,t.d)
s.b=!0
t.V(s)}},
gp:function(){var u=this.y
return u==null?this.y=D.B():u},
a3:function(a){var u,t=this
a.cq(t.d)
t.c.Z(a)
t.b.Z(a)
u=t.d
if(u!=null)u.ab(0,a)
for(u=t.e.a,u=new J.a4(u,u.length);u.v();)u.d.ab(0,a)
for(u=t.e.a,u=new J.a4(u,u.length);u.v();)u.d.a3(a)
t.b.toString
a.cy.aJ()
a.db.aJ()
t.c.ar(a)
a.cp()},
$iai:1}
M.cY.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.B():u},
V:function(a){var u=this.b
if(u!=null)u.B(a)},
aB:function(){return this.V(null)},
a3:function(a){var u=this.e
if(u!=null)u.a3(a)
u=this.r
if(u!=null)u.a3(a)},
$iai:1}
M.ai.prototype={}
A.cK.prototype={}
A.eP.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hq:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
c5:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.Z.prototype={
gaw:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
h:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof A.Z))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.fz.prototype={
ae:function(a,b){if(b!=null&&b.d)a.cD(b)}}
A.fA.prototype={
aO:function(a,b,c,d){var u,t,s,r,q=c.length
if(0>=q)return H.c(c,0)
u=Math.abs(c[0]-0)<$.A().a
if(u){if(0>=d.length)return H.c(d,0)
t=d[0]
d=C.b.cG(d,1)
c=C.b.cG(c,1);--q}else t=0
s=a.a+="vec4 blur"+b+"()\n"
s+="{\n"
a.a=s
if(u)s=a.a+="  vec4 color = texture2D(colorTxt, txt2D)*"+H.e(t)+";\n"
else s=a.a=s+"  vec4 color = vec4(0.0);\n"
s=a.a=s+"  vec2 offset;\n"
for(r=0;r<q;++r){if(r>=c.length)return H.c(c,r)
a.a+="  offset = blurScale * "+H.e(c[r])+";\n"
if(r>=d.length)return H.c(d,r)
a.a+="  color += texture2D(colorTxt, txt2D + offset) * "+H.e(d[r])+";\n"
if(r>=d.length)return H.c(d,r)
s=a.a+="  color += texture2D(colorTxt, txt2D - offset) * "+H.e(d[r])+";\n"}s+="  return color; \n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
h:function(a){return this.b}}
A.h_.prototype={
eo:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.P("")
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
A.o0(c0,u)
A.o2(c0,u)
A.o1(c0,u)
A.o4(c0,u)
A.o5(c0,u)
A.o3(c0,u)
A.o6(c0,u)
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
b5.cf(0,s.charCodeAt(0)==0?s:s,A.o_(b5.z))
b5.Q=b5.x.i(0,"posAttr")
b5.cx=b5.x.i(0,"normAttr")
b5.ch=b5.x.i(0,"binmAttr")
b5.cy=b5.x.i(0,"txt2DAttr")
b5.db=b5.x.i(0,"txtCubeAttr")
b5.dx=b5.x.i(0,"bendAttr")
if(c0.dx)b5.id=H.j(b5.y.J(0,"invViewMat"),"$ia6")
if(t)b5.dy=H.j(b5.y.J(0,"objMat"),"$ia6")
if(r)b5.fr=H.j(b5.y.J(0,"viewObjMat"),"$ia6")
b5.fy=H.j(b5.y.J(0,"projViewObjMat"),"$ia6")
if(c0.ry)b5.k1=H.j(b5.y.J(0,"txt2DMat"),"$iby")
if(c0.x1)b5.k2=H.j(b5.y.J(0,"txtCubeMat"),"$ia6")
if(c0.x2)b5.k3=H.j(b5.y.J(0,"colorMat"),"$ia6")
b5.r1=H.b([],[A.a6])
t=c0.y2
if(t>0){b5.k4=b5.y.J(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.i(0,q)
if(m==null)H.u(P.t(b7+q+b8))
s.push(H.j(m,"$ia6"))}}t=c0.a
if(t.a)b5.r2=H.j(b5.y.J(0,"emissionClr"),"$iH")
if(t.b)b5.rx=H.j(b5.y.J(0,"emissionTxt"),"$iX")
t=c0.b
if(t.a)b5.x1=H.j(b5.y.J(0,"ambientClr"),"$iH")
if(t.b)b5.x2=H.j(b5.y.J(0,"ambientTxt"),"$iX")
t=c0.c
if(t.a)b5.y2=H.j(b5.y.J(0,"diffuseClr"),"$iH")
if(t.b)b5.aH=H.j(b5.y.J(0,"diffuseTxt"),"$iX")
t=c0.d
if(t.a)b5.dz=H.j(b5.y.J(0,"invDiffuseClr"),"$iH")
if(t.b)b5.dA=H.j(b5.y.J(0,"invDiffuseTxt"),"$iX")
t=c0.e
s=t.a
if(s||t.b||!1){b5.dD=H.j(b5.y.J(0,"shininess"),"$iT")
if(s)b5.dB=H.j(b5.y.J(0,"specularClr"),"$iH")
if(t.b)b5.dC=H.j(b5.y.J(0,"specularTxt"),"$iX")}if(c0.f.b)b5.dE=H.j(b5.y.J(0,"bumpTxt"),"$iX")
if(c0.cy){b5.dF=H.j(b5.y.J(0,"envSampler"),"$ibh")
t=c0.r
if(t.a)b5.dG=H.j(b5.y.J(0,"reflectClr"),"$iH")
if(t.b)b5.dH=H.j(b5.y.J(0,"reflectTxt"),"$iX")
t=c0.x
s=t.a
if(s||t.b||!1){b5.dI=H.j(b5.y.J(0,"refraction"),"$iT")
if(s)b5.dJ=H.j(b5.y.J(0,"refractClr"),"$iH")
if(t.b)b5.dK=H.j(b5.y.J(0,"refractTxt"),"$iX")}}t=c0.y
if(t.a)b5.dL=H.j(b5.y.J(0,"alpha"),"$iT")
if(t.b)b5.dM=H.j(b5.y.J(0,"alphaTxt"),"$iX")
t=P.w
s=[t,A.dB]
b5.c7=new H.N(s)
b5.c8=new H.N([t,[P.o,A.cg]])
b5.c9=new H.N(s)
b5.ca=new H.N([t,[P.o,A.ch]])
b5.cb=new H.N(s)
b5.cc=new H.N([t,[P.o,A.ci]])
if(c0.id){for(t=c0.z,s=t.length,r=[A.cg],l=0;l<t.length;t.length===s||(0,H.p)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.at()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.i(0,g)
if(m==null)H.u(P.t(b7+g+b8))
H.j(m,"$iH")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.i(0,g)
if(f==null)H.u(P.t(b7+g+b8))
H.j(f,"$iH")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.i(0,g)
if(e==null)H.u(P.t(b7+g+b8))
H.j(e,"$iH")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.i(0,g)
if(m==null)H.u(P.t(b7+g+b8))
H.j(m,"$iH")
o=b5.y
g=i+"s["+n+"].color"
f=o.i(0,g)
if(f==null)H.u(P.t(b7+g+b8))
H.j(f,"$iH")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.i(0,o)
if(e==null)H.u(P.t(b7+o+b8))
H.j(e,"$iX")
a=e}else a=b6
h.push(new A.cg(b,c,d,m,f,a))}b5.c8.m(0,j,h)
q=b5.c7
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.u(P.t(b7+o+b8))
q.m(0,j,m)}for(t=c0.Q,s=t.length,r=[A.ch],l=0;l<t.length;t.length===s||(0,H.p)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.i(0,o)
if(m==null)H.u(P.t(b7+o+b8))
H.j(m,"$iH")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.i(0,o)
if(f==null)H.u(P.t(b7+o+b8))
H.j(f,"$iH")
p=b5.y
o=i+"s["+n+"].color"
e=p.i(0,o)
if(e==null)H.u(P.t(b7+o+b8))
H.j(e,"$iH")
if(typeof j!=="number")return j.at()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.i(0,o)
if(a0==null)H.u(P.t(b7+o+b8))
H.j(a0,"$iby")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.i(0,o)
if(a0==null)H.u(P.t(b7+o+b8))
H.j(a0,"$ibh")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.i(0,o)
if(a0==null)H.u(P.t(b7+o+b8))
H.j(a0,"$ibh")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.i(0,o)
if(a2==null)H.u(P.t(b7+o+b8))
H.j(a2,"$icf")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.i(0,o)
if(a0==null)H.u(P.t(b7+o+b8))
H.j(a0,"$iT")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.i(0,o)
if(a2==null)H.u(P.t(b7+o+b8))
H.j(a2,"$iT")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.i(0,o)
if(a5==null)H.u(P.t(b7+o+b8))
H.j(a5,"$iT")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}h.push(new A.ch(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.ca.m(0,j,h)
q=b5.c9
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.u(P.t(b7+o+b8))
q.m(0,j,m)}for(t=c0.ch,s=t.length,r=[A.ci],l=0;l<t.length;t.length===s||(0,H.p)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.i(0,o)
if(m==null)H.u(P.t(b7+o+b8))
H.j(m,"$iH")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.i(0,o)
if(f==null)H.u(P.t(b7+o+b8))
H.j(f,"$iH")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.i(0,o)
if(e==null)H.u(P.t(b7+o+b8))
H.j(e,"$iH")
p=b5.y
o=i+"s["+n+"].color"
a0=p.i(0,o)
if(a0==null)H.u(P.t(b7+o+b8))
H.j(a0,"$iH")
if(typeof j!=="number")return j.at()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.i(0,o)
if(a2==null)H.u(P.t(b7+o+b8))
H.j(a2,"$iH")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.i(0,o)
if(a5==null)H.u(P.t(b7+o+b8))
H.j(a5,"$iH")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.i(0,o)
if(a9==null)H.u(P.t(b7+o+b8))
H.j(a9,"$iT")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.i(0,o)
if(b0==null)H.u(P.t(b7+o+b8))
H.j(b0,"$iT")
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
if(a2==null)H.u(P.t(b7+g+b8))
H.j(a2,"$icf")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.i(0,g)
if(a2==null)H.u(P.t(b7+g+b8))
H.j(a2,"$iT")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.i(0,g)
if(a5==null)H.u(P.t(b7+g+b8))
H.j(a5,"$iT")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.i(0,g)
if(a2==null)H.u(P.t(b7+g+b8))
H.j(a2,"$iT")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.i(0,g)
if(a5==null)H.u(P.t(b7+g+b8))
H.j(a5,"$iT")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.i(0,g)
if(a9==null)H.u(P.t(b7+g+b8))
H.j(a9,"$iT")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.i(0,g)
if(a2==null)H.u(P.t(b7+g+b8))
H.j(a2,"$iX")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.i(0,o)
if(a2==null)H.u(P.t(b7+o+b8))
H.j(a2,"$iX")
a3=a2}else a3=b6
h.push(new A.ci(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.cc.m(0,j,h)
q=b5.cb
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.u(P.t(b7+o+b8))
q.m(0,j,m)}}},
ae:function(a,b){if(b!=null&&b.d)a.cD(b)},
fW:function(a,b){}}
A.cS.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.dh.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.dn.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.h2.prototype={
h:function(a){return this.aH}}
A.cg.prototype={}
A.ch.prototype={}
A.ci.prototype={}
A.dk.prototype={
bB:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cf:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cX(b,35633)
r.f=r.cX(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.u(P.t("Failed to link shader: "+H.e(s)))}r.fX()
r.fZ()},
Z:function(a){a.a.useProgram(this.r)
this.x.hq()},
cX:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.t("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fX:function(){var u,t,s,r=this,q=H.b([],[A.cK]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cK(p,t.name,s))}r.x=new A.eP(q)},
fZ:function(){var u,t,s,r=this,q=H.b([],[A.dA]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hn(t.type,t.size,t.name,s))}r.y=new A.iw(q)},
aP:function(a,b,c){var u=this.a
if(a===1)return new A.dB(u,b,c)
else return A.kz(u,this.r,b,a,c)},
eI:function(a,b,c){var u=this.a
if(a===1)return new A.X(u,b,c)
else return A.kz(u,this.r,b,a,c)},
eJ:function(a,b,c){var u=this.a
if(a===1)return new A.bh(u,b,c)
else return A.kz(u,this.r,b,a,c)},
bi:function(a,b){return new P.dT(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hn:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aP(b,c,d)
case 5121:return u.aP(b,c,d)
case 5122:return u.aP(b,c,d)
case 5123:return u.aP(b,c,d)
case 5124:return u.aP(b,c,d)
case 5125:return u.aP(b,c,d)
case 5126:return new A.T(u.a,c,d)
case 35664:return new A.dC(u.a,c,d)
case 35665:return new A.H(u.a,c,d)
case 35666:return new A.cf(u.a,c,d)
case 35667:return new A.it(u.a,c,d)
case 35668:return new A.iu(u.a,c,d)
case 35669:return new A.iv(u.a,c,d)
case 35674:return new A.ix(u.a,c,d)
case 35675:return new A.by(u.a,c,d)
case 35676:return new A.a6(u.a,c,d)
case 35678:return u.eI(b,c,d)
case 35680:return u.eJ(b,c,d)
case 35670:throw H.d(u.bi("BOOL",c))
case 35671:throw H.d(u.bi("BOOL_VEC2",c))
case 35672:throw H.d(u.bi("BOOL_VEC3",c))
case 35673:throw H.d(u.bi("BOOL_VEC4",c))
default:throw H.d(P.t("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.hV.prototype={}
A.dA.prototype={}
A.iw.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
J:function(a,b){var u=this.i(0,b)
if(u==null)throw H.d(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.N()},
N:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.p)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.dB.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.it.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.iu.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.iv.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.is.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.T.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.dC.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.H.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.cf.prototype={
eg:function(a){var u=a.a,t=a.b,s=a.c,r=a.d
return this.a.uniform4f(this.d,u,t,s,r)},
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.ix.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.by.prototype={
ah:function(a){var u=new Float32Array(H.bD(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.a6.prototype={
ah:function(a){var u=new Float32Array(H.bD(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.X.prototype={
cD:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bh.prototype={
ef:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jE.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.ck(s.b,b).ck(s.d.ck(s.c,b),c)
s=new V.a1(r.a,r.b,r.c)
if(!J.J(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a9()}a.si3(r.w(0,Math.sqrt(r.E(r))))
s=1-b
u=1-c
u=new V.aQ(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.J(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a9()}}}
F.b3.prototype={
eC:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dJ()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.dU())return
return s.w(0,Math.sqrt(s.E(s)))},
eE:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.K(0,q)
r=new V.F(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.E(r)))
r=t.K(0,q)
r=new V.F(r.a,r.b,r.c)
r=s.b7(r.w(0,Math.sqrt(r.E(r))))
return r.w(0,Math.sqrt(r.E(r)))},
c0:function(){var u,t=this
if(t.d!=null)return!0
u=t.eC()
if(u==null){u=t.eE()
if(u==null)return!1}t.d=u
t.a.a.a9()
return!0},
eB:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.dJ()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.dU())return
return s.w(0,Math.sqrt(s.E(s)))},
eD:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.A().a){l=d.K(0,g)
l=new V.F(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.E(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.K(0,g)
l=new V.a1(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).K(0,j)
l=new V.F(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.E(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.E(l)))
l=o.b7(q)
l=l.w(0,Math.sqrt(l.E(l))).b7(o)
q=l.w(0,Math.sqrt(l.E(l)))}return q},
bZ:function(){var u,t=this
if(t.e!=null)return!0
u=t.eB()
if(u==null){u=t.eD()
if(u==null)return!1}t.e=u
t.a.a.a9()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.N()},
D:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.a.ap(J.a3(s.e),0)+", "+C.a.ap(J.a3(t.b.e),0)+", "+C.a.ap(J.a3(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.h(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.h(0)+"}"):u+"-}"},
N:function(){return this.D("")}}
F.bX.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.N()},
D:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.a.ap(J.a3(u.e),0)+", "+C.a.ap(J.a3(this.b.e),0)},
N:function(){return this.D("")}}
F.c6.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.N()},
D:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.ap(J.a3(u.e),0)},
N:function(){return this.D("")}}
F.hN.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.B():u},
hG:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.a2()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){r=g[s]
h.a.n(0,r.hk())}h.a.a2()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.a2()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.c6()
if(n.a==null)H.u(P.t("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.B(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.a2()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.a2()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.mK(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.a2()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.a2()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.a2()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
i=p[o]
o=h.d.a
o.a.n(0,l)
o.a.n(0,k)
o.a.n(0,i)
F.bR(l,k,i)}g=h.e
if(g!=null)g.aL(0)},
aG:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aG()||!1
if(!t.a.aG())u=!1
s=t.e
if(s!=null)s.aL(0)
return u},
bY:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.ae()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aZ().a)!==0)++s
if((t&$.aY().a)!==0)++s
if((t&$.ap().a)!==0)++s
if((t&$.bk().a)!==0)++s
if((t&$.cF().a)!==0)++s
if((t&$.cG().a)!==0)++s
if((t&$.bK().a)!==0)++s
if((t&$.aX().a)!==0)++s
r=a4.gcF(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.I])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cL])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.hb(m)
k=l.gcF(l)
if(m>=t)return H.c(o,m)
o[m]=new Z.cL(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.c(i,j)
h=i[j].hE(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.c(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bD(p)),35044)
u.bindBuffer(a1,null)
c=new Z.b0(new Z.dK(a1,d),o,a4)
c.b=H.b([],[Z.bq])
if(a0.b.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.a2()
b.push(t.e)}a=Z.kC(u,34963,b)
c.b.push(new Z.bq(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.a2()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.a2()
b.push(t.e)}a=Z.kC(u,34963,b)
c.b.push(new Z.bq(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.a2()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.a2()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].c
t.a.a.a2()
b.push(t.e)}a=Z.kC(u,34963,b)
c.b.push(new Z.bq(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.b([],[P.l])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.D(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.D(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.D(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.D(t))}return C.b.k(s,"\n")},
a9:function(){var u=this.e
if(u!=null)u.B(null)}}
F.hO.prototype={
h8:function(a){var u,t,s,r,q=H.b([],[F.b3]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.n(0,p)
u.a.n(0,s)
u.a.n(0,r)
q.push(F.bR(p,s,r))}return q},
h9:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.b3])
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
if(p){n.n(0,m)
u.a.n(0,l)
u.a.n(0,j)
h.push(F.bR(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bR(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bR(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.bR(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
aG:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.p)(u),++r)if(!u[r].c0())s=!1
return s},
c_:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.p)(u),++r)if(!u[r].bZ())s=!1
return s},
h:function(a){return this.N()},
D:function(a){var u,t,s,r=H.b([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].D(a))
return C.b.k(r,"\n")},
N:function(){return this.D("")}}
F.hP.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.N()},
D:function(a){var u,t,s=H.b([],[P.l]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
s.push(t[u].D(a+(""+u+". ")))}return C.b.k(s,"\n")},
N:function(){return this.D("")}}
F.hQ.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.N()},
D:function(a){var u,t,s,r=H.b([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].D(a))
return C.b.k(r,"\n")},
N:function(){return this.D("")}}
F.bA.prototype={
c3:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.iM(u.cx,r,o,t,s,q,p,a,n)},
hk:function(){return this.c3(null)},
si3:function(a){var u
if(!J.J(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a9()}},
hE:function(a){var u,t,s=this
if(a.t(0,$.ae())){u=s.f
t=[P.I]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.aZ())){u=s.r
t=[P.I]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.aY())){u=s.x
t=[P.I]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.ap())){u=s.y
t=[P.I]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.t(0,$.bk())){u=s.z
t=[P.I]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cF())){u=s.Q
t=[P.I]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cG())){u=s.Q
t=[P.I]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.bK()))return H.b([s.ch],[P.I])
else if(a.t(0,$.aX())){u=s.cx
t=[P.I]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.I])},
c0:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dJ()
t.d.F(0,new F.iU(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.a9()
s=t.a.e
if(s!=null)s.aL(0)}return!0},
bZ:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dJ()
t.d.F(0,new F.iT(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.a9()
s=t.a.e
if(s!=null)s.aL(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.N()},
D:function(a){var u,t,s=this,r="-",q=H.b([],[P.l])
q.push(C.a.ap(J.a3(s.e),0))
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
q.push(V.C(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.b.k(q,", ")
return a+"{"+t+"}"},
N:function(){return this.D("")}}
F.iU.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.A(0,t)}}}
F.iT.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.A(0,t)}}}
F.iN.prototype={
a2:function(){},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.t("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a9()
return!0},
bj:function(a,b,c,d,e,f){var u=F.iM(a,null,b,c,null,d,e,f,0)
this.n(0,u)
return u},
gl:function(a){return this.c.length},
aG:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)u[s].c0()
return!0},
c_:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)u[s].bZ()
return!0},
hh:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.J(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.B(null)}}}}return!0},
h:function(a){return this.N()},
D:function(a){var u,t,s,r
this.a2()
u=H.b([],[P.l])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r)u.push(t[r].D(a))
return C.b.k(u,"\n")},
N:function(){return this.D("")}}
F.iO.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
F:function(a,b){var u=this
C.b.F(u.b,b)
C.b.F(u.c,new F.iP(u,b))
C.b.F(u.d,new F.iQ(u,b))},
h:function(a){return this.N()},
N:function(){var u,t,s,r=H.b([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].D(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].D(""))
return C.b.k(r,"\n")}}
F.iP.prototype={
$1:function(a){if(!J.J(a.a,this.a))this.b.$1(a)}}
F.iQ.prototype={
$1:function(a){var u=this.a
if(!J.J(a.a,u)&&!J.J(a.b,u))this.b.$1(a)}}
F.iR.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a){return this.N()},
N:function(){var u,t,s,r=H.b([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].D(""))
return C.b.k(r,"\n")}}
F.iS.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.N()},
N:function(){var u,t,s,r=H.b([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].D(""))
return C.b.k(r,"\n")}}
O.cZ.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.B():u},
L:function(a){var u=this.x
if(u!=null)u.B(a)},
aC:function(){return this.L(null)},
sb4:function(a){var u=this.r
if(!(Math.abs(u-a)<$.A().a)){this.r=a
u=new D.x("blurValue",u,a)
u.b=!0
this.L(u)}},
sdn:function(a){var u,t=this,s=t.e
if(s!=a){if(s!=null)s.gp().W(0,t.gau())
u=t.e
t.e=a
if(a!=null)a.gp().n(0,t.gau())
s=new D.x("colorTexture",u,t.e)
s.b=!0
t.L(s)}},
sbX:function(a){},
scu:function(a){var u,t=this,s=$.lc
if(s==null){s=new V.c_(1,0,0,0,1,0,0,0,1)
$.lc=s
a=s}else a=s
if(!J.J(t.b,a)){u=t.b
t.b=a
s=new D.x("textureMatrix",u,a)
s.b=!0
t.L(s)}},
sbW:function(a){var u,t=this,s=$.lD
if(s==null){s=new V.cj(1,0.00390625,0.0000152587890625,0)
$.lD=s
a=s}else a=s
if(!J.J(t.c,a)){u=t.c
t.c=a
s=new D.x("blurAdjust",u,a)
s.b=!0
t.L(s)}},
ab:function(a,b){},
a7:function(a,b){if(b!=null)if(!C.b.S(a,b)){b.a=a.length
a.push(b)}},
ct:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.a
if(h==null){u="GaussianBlur_0".charCodeAt(0)==0?"GaussianBlur_0":"GaussianBlur_0"
t=a.fr.i(0,u)
if(t==null){h=a.a
t=new A.fz(h,u)
t.bB(h,u)
s=t.z=new A.fA(!1,u)
r=new P.P("")
r.a="precision mediump float;\n"
r.a="precision mediump float;\n\n"
r.a="precision mediump float;\n\nuniform sampler2D colorTxt;\n"
r.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\n"
r.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\nuniform vec2 blurScale;\n"
r.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\nuniform vec2 blurScale;\n\n"
r.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\nuniform vec2 blurScale;\n\nvarying vec2 txt2D;\n"
r.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\nuniform vec2 blurScale;\n\nvarying vec2 txt2D;\n\n"
h=[P.I]
s.aO(r,3,H.b([0.75],h),H.b([0.5],h))
s.aO(r,6,H.b([0.42857,2.14286],h),H.b([0.41667,0.08333],h))
s.aO(r,9,H.b([0,1.8],h),H.b([0.5122,0.2439],h))
s.aO(r,12,H.b([0,1.38462,3.23077],h),H.b([0.22703,0.31622,0.07027],h))
s.aO(r,15,H.b([0.9375,2.8125],h),H.b([0.36184,0.13816],h))
s.aO(r,18,H.b([0.47368,2.36842,4.26316],h),H.b([0.29916,0.16318,0.03766],h))
h=r.a+="void main()\n"
h+="{\n"
r.a=h
h+="   float blurOffset = abs(blurValue);\n"
r.a=h
h+="\n"
r.a=h
h+="   if     (blurOffset < 0.15) gl_FragColor = texture2D(colorTxt, txt2D);\n"
r.a=h
h+="   else if(blurOffset < 0.3)  gl_FragColor = blur3();\n"
r.a=h
h+="   else if(blurOffset < 0.45) gl_FragColor = blur6();\n"
r.a=h
h+="   else if(blurOffset < 0.6)  gl_FragColor = blur9();\n"
r.a=h
h+="   else if(blurOffset < 0.75) gl_FragColor = blur12();\n"
r.a=h
h+="   else if(blurOffset < 0.9)  gl_FragColor = blur15();\n"
r.a=h
h+="   else                       gl_FragColor = blur18();\n"
r.a=h
h=r.a=h+"}\n"
t.cf(0,"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n":"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n",h.charCodeAt(0)==0?h:h)
t.Q=t.x.i(0,"posAttr")
t.ch=t.x.i(0,"txtAttr")
t.cx=H.j(t.y.i(0,"projViewObjMat"),"$ia6")
t.cy=H.j(t.y.i(0,"txt2DMat"),"$iby")
t.dy=H.j(t.y.i(0,"colorTxt"),"$iX")
t.dx=H.j(t.y.i(0,"blurScale"),"$idC")
t.fx=H.j(t.y.i(0,"blurValue"),"$iT")
a.bV(t)}h=i.a=t
b.e=null}s=h.z
h=b.e
if((!(h instanceof Z.b0)?b.e=null:h)==null){h=b.d
q=$.ae()
p=$.ap()
p=h.bY(new Z.ck(a.a),new Z.az(q.a|p.a))
p.av($.ae()).e=i.a.Q.c
p.av($.ap()).e=i.a.ch.c
b.e=p}o=H.b([],[T.ce])
i.a7(o,i.e)
h=s.a
if(h)i.a7(o,i.f)
for(n=0;n<o.length;++n)o[n].Z(a)
q=i.a
q.Z(a)
p=i.e
q.ae(q.dy,p)
p=i.b
m=q.cy
m.toString
m.ah(p.aa(0,!0))
p=i.d
m=p.a
l=a.c
if(typeof m!=="number")return m.w()
p=p.b
k=a.d
if(typeof p!=="number")return p.w()
j=q.dx
j.a.uniform2f(j.d,m/l,p/k)
k=a.ge1()
q=q.cx
q.toString
q.ah(k.aa(0,!0))
q=i.a
if(h){h=i.f
q.ae(q.fr,h)
h=i.c
q.db.eg(h)}else{h=i.r
q=q.fx
q.a.uniform1f(q.d,h)}h=b.e
if(h instanceof Z.b0){h.Z(a)
h.a3(a)
h.ar(a)}else b.e=null
h=i.a
h.toString
q=a.a
q.useProgram(null)
h.x.c5()
for(n=0;n<o.length;++n){h=o[n]
if(h.c){h.c=!1
q.activeTexture(33984+h.a)
q.bindTexture(3553,null)}}}}
O.d9.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.B():u},
L:function(a){var u=this.fr
if(u!=null)u.B(a)},
aC:function(){return this.L(null)},
d4:function(a){this.a=null
this.L(a)},
fT:function(){return this.d4(null)},
eZ:function(a,b){var u=new D.b4()
u.b=!0
this.L(u)},
f0:function(a,b){var u=new D.b5()
u.b=!0
this.L(u)},
cU:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.w,h=new H.N([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
q=r.gaz()
p=h.i(0,r.gaz())
h.m(0,q,p==null?1:p)}o=H.b([],[A.cS])
h.F(0,new O.h6(j,o))
C.b.bz(o,new O.h7())
n=new H.N([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
q=r.gaz()
p=n.i(0,r.gaz())
n.m(0,q,p==null?1:p)}m=H.b([],[A.dh])
n.F(0,new O.h8(j,m))
C.b.bz(m,new O.h9())
l=new H.N([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.p)(i),++s){r=i[s]
t=r.gaz()
q=l.i(0,r.gaz())
l.m(0,t,q==null?1:q)}k=H.b([],[A.dn])
l.F(0,new O.ha(j,k))
C.b.bz(k,new O.hb())
i=C.d.af(j.e.a.length+3,4)
j.dy.e
return A.mR(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
a7:function(a,b){if(b!=null)if(!C.b.S(a,b)){b.a=a.length
a.push(b)}},
ab:function(a,b){var u
for(u=this.dx.a,u=new J.a4(u,u.length);u.v();)C.i.ab(u.d,b)},
ct:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a
if(b0==null){b0=a9.cU()
u=b1.fr.i(0,b0.aH)
if(u==null){u=A.mQ(b0,b1.a)
b1.bV(u)}b0=a9.a=u
b2.e=null}t=b0.z
s=t.dw
b0=b2.e
if(!(b0 instanceof Z.b0))b0=b2.e=null
if(b0==null||!b0.d.t(0,s)){b0=t.k3
if(b0)b2.d.aG()
r=t.k4
if(r){q=b2.d
p=q.e
if(p!=null)++p.d
q.d.c_()
q.a.c_()
q=q.e
if(q!=null)q.aL(0)}q=t.r2
if(q){p=b2.d
o=p.e
if(o!=null)++o.d
p.a.hh()
p=p.e
if(p!=null)p.aL(0)}n=b2.d.bY(new Z.ck(b1.a),s)
n.av($.ae()).e=a9.a.Q.c
if(b0)n.av($.aZ()).e=a9.a.cx.c
if(r)n.av($.aY()).e=a9.a.ch.c
if(t.r1)n.av($.ap()).e=a9.a.cy.c
if(q)n.av($.bk()).e=a9.a.db.c
if(t.rx)n.av($.aX()).e=a9.a.dx.c
b2.e=n}m=H.b([],[T.ce])
a9.a.Z(b1)
if(t.dy){b0=a9.a
r=b1.dx
r=r.ga5(r)
b0=b0.dy
b0.toString
b0.ah(r.aa(0,!0))}if(t.fr){b0=a9.a
r=b1.cx
if(r==null){r=b1.db
r=r.ga5(r)
q=b1.dx
q=b1.cx=r.q(0,q.ga5(q))
r=q}b0=b0.fr
b0.toString
b0.ah(r.aa(0,!0))}b0=a9.a
r=b1.ge1()
b0=b0.fy
b0.toString
b0.ah(r.aa(0,!0))
if(t.ry){b0=a9.a
r=a9.b
b0=b0.k1
b0.toString
b0.ah(C.i.aa(r,!0))}if(t.x1){b0=a9.a
r=a9.c
b0=b0.k2
b0.toString
b0.ah(C.i.aa(r,!0))}if(t.x2){b0=a9.a
r=a9.d
b0=b0.k3
b0.toString
b0.ah(C.i.aa(r,!0))}if(t.y2>0){l=a9.e.a.length
b0=a9.a.k4
b0.a.uniform1i(b0.d,l)
for(k=0;k<l;++k){b0=a9.a
r=a9.e.a
if(k>=r.length)return H.c(r,k)
r=r[k]
b0=b0.r1
if(k>=b0.length)return H.c(b0,k)
b0=b0[k]
j=new Float32Array(H.bD(r.aa(0,!0)))
b0.a.uniformMatrix4fv(b0.d,!1,j)}}b0=t.a
if(b0.a){r=a9.a
q=a9.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.a7(m,a9.f.d)
b0=a9.a
r=a9.f.d
b0.ae(b0.rx,r)}if(t.id){b0=t.b
if(b0.a){r=a9.a
q=a9.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.a7(m,a9.r.d)
b0=a9.a
r=a9.r.d
b0.ae(b0.x2,r)}b0=t.c
if(b0.a){r=a9.a
q=a9.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.a7(m,a9.x.d)
b0=a9.a
r=a9.x.d
b0.ae(b0.aH,r)}b0=t.d
if(b0.a){r=a9.a
q=a9.y.f
r=r.dz
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.a7(m,a9.y.d)
b0=a9.a
r=a9.y.d
b0.ae(b0.dA,r)}b0=t.e
r=b0.a
if(r||b0.b||!1){q=a9.a
p=a9.z.ch
q=q.dD
q.a.uniform1f(q.d,p)}if(r){r=a9.a
q=a9.z.f
r=r.dB
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.a7(m,a9.z.d)
b0=a9.a
r=a9.z.d
b0.ae(b0.dC,r)}b0=t.z
if(b0.length>0){r=b1.db
i=r.ga5(r)
r=P.w
h=new H.N([r,r])
for(r=a9.dx.e,q=r.length,g=0;g<r.length;r.length===q||(0,H.p)(r),++g){f=r[g]
e=f.gaz()
d=h.i(0,e)
if(d==null)d=0
h.m(0,e,d+1)
c=J.cH(a9.a.c8.i(0,e),d)
p=f.gdr(f)
o=C.c.q(i.a,p.gdt(p))+C.c.q(i.b,p.gdu(p))+C.c.q(i.c,p.gdv())
b=C.c.q(i.e,p.gdt(p))+C.c.q(i.f,p.gdu(p))+C.c.q(i.r,p.gdv())
p=C.c.q(i.y,p.gdt(p))+C.c.q(i.z,p.gdu(p))+C.c.q(i.Q,p.gdv())
p=new V.F(o,b,p).w(0,Math.sqrt(o*o+b*b+p*p))
b=c.e
o=p.a
a=p.b
p=p.c
b.a.uniform3f(b.d,o,a,p)
p=f.gb6(f)
a=c.f
a.a.uniform3f(a.d,p.a,p.b,p.c)
f.gaq()
p=f.gdr(f)
o=c.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gbw()
o=c.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gbu(f)
o=c.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gaq()
if(!C.b.S(m,p)){p.a=m.length
m.push(p)}p=f.gaq()
o=p.gbp(p)
if(o){o=c.r
o.toString
b=p.d
if(!b)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.p)(b0),++g){q=b0[g].a
l=h.i(0,q)
if(l==null)l=0
q=a9.a.c7.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.Q
if(b0.length>0){r=b1.db
i=r.ga5(r)
r=P.w
a0=new H.N([r,r])
for(r=a9.dx.f,q=r.length,g=0;g<r.length;r.length===q||(0,H.p)(r),++g){f=r[g]
e=f.gaz()
d=a0.i(0,e)
if(d==null)d=0
a0.m(0,e,d+1)
c=J.cH(a9.a.ca.i(0,e),d)
a1=i.q(0,f.ga5(f))
p=f.ga5(f)
o=$.c7
p=p.cv(o==null?$.c7=new V.a1(0,0,0):o)
o=c.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.c7
p=a1.cv(p==null?$.c7=new V.a1(0,0,0):p)
o=c.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gb6(f)
o=c.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gaq()
p=a1.cj(0)
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
j=new Float32Array(H.bD(new V.c_(o,b,a,a2,a3,a4,a5,a6,p).aa(0,!0)))
a7.a.uniformMatrix3fv(a7.d,!1,j)
f.gaq()
p=f.gaq()
if(!C.b.S(m,p)){p.a=m.length
m.push(p)}p=f.gaq()
o=p.gbp(p)
if(o){o=c.f
o.toString
b=p.d
if(b<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gb_()
p=f.geh()
o=c.x
o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=f.gb_()
if(!C.b.S(m,p)){p.a=m.length
m.push(p)}p=f.gb_()
o=p.gbp(p)
if(o){o=c.r
o.toString
b=p.d
if(b<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.ghr()){p=f.ghc()
o=c.y
o.a.uniform1f(o.d,p)
p=f.ghd()
o=c.z
o.a.uniform1f(o.d,p)
p=f.ghe()
o=c.Q
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.p)(b0),++g){q=b0[g].a
l=a0.i(0,q)
if(l==null)l=0
q=a9.a.c9.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.ch
if(b0.length>0){r=b1.db
i=r.ga5(r)
r=P.w
a8=new H.N([r,r])
for(r=a9.dx.r,q=r.length,g=0;g<r.length;r.length===q||(0,H.p)(r),++g){f=r[g]
e=f.gaz()
d=a8.i(0,e)
if(d==null)d=0
a8.m(0,e,d+1)
c=J.cH(a9.a.cc.i(0,e),d)
p=f.ghV(f)
o=c.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gdr(f).iq()
o=c.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=i.cv(f.ghV(f))
o=c.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gb6(f)
o=c.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gaq()
p=f.gbw()
o=c.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gbu(f)
o=c.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gir()
o=c.x
o.a.uniform1f(o.d,p)
p=f.gis()
o=c.y
o.a.uniform1f(o.d,p)
f.gaq()
p=f.gaq()
if(!C.b.S(m,p)){p.a=m.length
m.push(p)}p=f.gaq()
o=p.gbp(p)
if(o){o=c.dx
o.toString
b=p.d
if(!b)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gb_()
p=f.geh()
o=c.z
o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=f.gb_()
if(!C.b.S(m,p)){p.a=m.length
m.push(p)}p=f.gb_()
o=p.gbp(p)
if(o){o=c.dy
o.toString
b=p.d
if(!b)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.gic()){p=f.gib()
o=c.Q
o.a.uniform1f(o.d,p)
p=f.gia()
o=c.ch
o.a.uniform1f(o.d,p)}if(f.ghr()){p=f.ghc()
o=c.cx
o.a.uniform1f(o.d,p)
p=f.ghd()
o=c.cy
o.a.uniform1f(o.d,p)
p=f.ghe()
o=c.db
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.p)(b0),++g){q=b0[g].a
l=a8.i(0,q)
if(l==null)l=0
q=a9.a.cb.i(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.b){a9.a7(m,a9.Q.d)
b0=a9.a
r=a9.Q.d
b0.ae(b0.dE,r)}if(t.dx){b0=a9.a
r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.ga5(r).cj(0)}b0=b0.id
b0.toString
b0.ah(r.aa(0,!0))}if(t.cy){a9.a7(m,a9.ch)
b0=a9.a
r=a9.ch
b0.fW(b0.dF,r)
b0=t.r
if(b0.a){r=a9.a
q=a9.cx.f
r=r.dG
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.a7(m,a9.cx.d)
b0=a9.a
r=a9.cx.d
b0.ae(b0.dH,r)}b0=t.x
r=b0.a
if(r||b0.b||!1){q=a9.a
p=a9.cy.ch
q=q.dI
q.a.uniform1f(q.d,p)}if(r){r=a9.a
q=a9.cy.f
r=r.dJ
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.a7(m,a9.cy.d)
b0=a9.a
r=a9.cy.d
b0.ae(b0.dK,r)}}b0=t.y
r=b0.a
q=!r
if(!q||b0.b||!1){if(r){r=a9.a
p=a9.db.f
r=r.dL
r.a.uniform1f(r.d,p)}if(b0.b){a9.a7(m,a9.db.d)
r=a9.a
p=a9.db.d
r.ae(r.dM,p)}r=b1.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].Z(b1)
r=b2.e
r.Z(b1)
r.a3(b1)
r.ar(b1)
if(!q||b0.b||!1)b1.a.disable(3042)
for(b0=b1.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b0.activeTexture(33984+r.a)
b0.bindTexture(3553,null)}}r=a9.a
r.toString
b0.useProgram(null)
r.x.c5()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.cU().aH}}
O.h6.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.cS(a,C.d.af(b+3,4)*4))}}
O.h7.prototype={
$2:function(a,b){return J.kd(a.a,b.a)}}
O.h8.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.dh(a,C.d.af(b+3,4)*4))}}
O.h9.prototype={
$2:function(a,b){return J.kd(a.a,b.a)}}
O.ha.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.dn(a,C.d.af(b+3,4)*4))}}
O.hb.prototype={
$2:function(a,b){return J.kd(a.a,b.a)}}
O.h0.prototype={
aE:function(){var u,t=this
t.cJ()
u=t.f
if(!(Math.abs(u-1)<$.A().a)){t.f=1
u=new D.x(t.b,u,1)
u.b=!0
t.a.L(u)}}}
O.bZ.prototype={
L:function(a){return this.a.L(a)},
aC:function(){return this.L(null)},
aE:function(){},
d9:function(a){var u,t,s=this
if(!s.c.t(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aE()
u=s.a
u.a=null
u.L(null)}}}
O.h1.prototype={}
O.at.prototype={
d7:function(a){var u,t,s=this
if(!s.f.t(0,a)){u=s.f
s.f=a
t=new D.x(s.b+".color",u,a)
t.b=!0
s.a.L(t)}},
aE:function(){this.cJ()
this.d7(new V.Y(1,1,1))},
sb6:function(a,b){this.d9(new A.Z(!0,this.c.b,!1))
this.d7(b)}}
O.h3.prototype={}
O.h4.prototype={
aE:function(){var u,t=this
t.cK()
u=t.ch
if(!(Math.abs(u-1)<$.A().a)){t.ch=1
u=new D.x(t.b+".refraction",u,1)
u.b=!0
t.a.L(u)}}}
O.h5.prototype={
aE:function(){var u,t=this
t.cK()
u=t.ch
if(!(Math.abs(u-100)<$.A().a)){t.ch=100
u=new D.x(t.b+".shininess",u,100)
u.b=!0
t.a.L(u)}}}
O.dl.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.B():u},
L:function(a){var u=this.e
if(u!=null)u.B(a)},
aC:function(){return this.L(null)},
ab:function(a,b){},
ct:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.i(0,n)
if(u==null){t=a.a
u=new A.hV(t,n)
u.bB(t,n)
u.cf(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.i(0,"posAttr")
u.Q=H.j(u.y.i(0,"fov"),"$iT")
u.ch=H.j(u.y.i(0,"ratio"),"$iT")
u.cx=H.j(u.y.i(0,"boxClr"),"$iH")
u.cy=H.j(u.y.i(0,"boxTxt"),"$ibh")
u.db=H.j(u.y.i(0,"viewMat"),"$ia6")
a.bV(u)}o.a=u}if(b.e==null){t=b.d.bY(new Z.ck(a.a),$.ae())
t.av($.ae()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.Z(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.ef(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.ga5(s).cj(0)
r=r.db
r.toString
r.ah(s.aa(0,!0))
t=b.e
if(t instanceof Z.b0){t.Z(a)
t.a3(a)
t.ar(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.c5()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.dt.prototype={}
T.ce.prototype={}
T.ia.prototype={}
T.ib.prototype={
d8:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.c6()}},
gp:function(){var u=this.y
return u==null?this.y=D.B():u},
Z:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}}
T.ic.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.B():u}}
T.id.prototype={
hF:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.l8(a)
t=T.kx(q)
W.U(u,"load",new T.ig(this,t,u,!1,q,!1,!1),!1)
return t},
aQ:function(a,b,c,d,e,f){var u=W.l8(c);++this.d
W.U(u,"load",new T.ie(this,u,!1,b,!1,d,a),!1)},
d6:function(a,b,c){var u,t,s,r
b=V.cE(b)
u=V.cE(a.width)
t=V.cE(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kg()
s.width=u
s.height=t
r=C.j.ec(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.ok(r.getImageData(0,0,s.width,s.height))}}}
T.ig.prototype={
$1:function(a){var u,t,s=this,r=3553,q=s.b,p=s.c
q.e=p.width
q.f=p.height
u=s.a
t=u.d6(p,u.b,s.d)
q.r=p.width
q.x=p.height
p=u.a
p.bindTexture(r,s.e)
p.pixelStorei(37440,s.f?1:0)
C.q.e5(p,r,0,6408,6408,5121,t)
if(s.r)p.generateMipmap(r)
p.bindTexture(r,null)
q.d8();++u.e}}
T.ie.prototype={
$1:function(a){var u=this,t=u.a,s=t.d6(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.q.e5(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.c6()}++t.e}}
X.eU.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.B():u},
a1:function(a){var u=this.fr
if(u!=null)u.B(a)},
sas:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.x("width",u,b)
u.b=!0
t.a1(u)}},
san:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.x("height",u,b)
u.b=!0
t.a1(u)}},
Z:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){u=a.a
t=u.drawingBufferWidth
s=h.r
if(typeof t!=="number")return t.q()
h.sas(0,C.d.a0(t*s))
u=u.drawingBufferHeight
s=h.x
if(typeof u!=="number")return u.q()
h.san(0,C.d.a0(u*s))}if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=u.getParameter(3379)
p=V.cE(s)
o=V.cE(r)
q=V.cE(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.q.e6(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.kx(n)
m.e=s
m.f=r
m.r=p
m.x=o
m.d8()
t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.c6()
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
a.c=C.c.a0(s*h.a)
r=t.d
a.d=C.c.a0(r*h.b)
l=t.a
k=h.c
if(typeof k!=="number")return H.v(k)
j=C.c.a0(l*k)
t=t.b
l=h.d
if(typeof l!=="number")return H.v(l)
u.viewport(j,C.c.a0(t*l),C.c.a0(s*k),C.c.a0(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
ar:function(a){a.a.bindFramebuffer(36160,null)}}
X.kf.prototype={}
X.fw.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.B():u},
Z:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.v(u)
q=C.c.a0(r*u)
r=s.b
if(typeof t!=="number")return H.v(t)
p=C.c.a0(r*t)
r=C.c.a0(s.c*u)
a.c=r
s=C.c.a0(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
ar:function(a){}}
X.fF.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.B():u},
Z:function(a){var u
a.cy.bt(V.bs())
u=V.bs()
a.db.bt(u)},
ar:function(a){a.cy.aJ()
a.db.aJ()}}
X.dg.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.B():u},
a1:function(a){var u=this.f
if(u!=null)u.B(a)},
ey:function(){return this.a1(null)},
Z:function(a){var u,t,s,r,q,p,o,n,m,l=this,k=a.c,j=a.d,i=l.c,h=l.d,g=l.e,f=g-h,e=1/Math.tan(i*0.5),d=V.au(-e/(k/j),0,0,0,0,e,0,0,0,0,g/f,-g*h/f,0,0,1,0)
a.cy.bt(d)
k=$.lg
if(k==null){k=V.mT()
j=$.lB
if(j==null)j=$.lB=new V.F(0,1,0)
i=$.lA
if(i==null)i=$.lA=new V.F(0,0,-1)
u=i.w(0,Math.sqrt(i.E(i)))
j=j.b7(u)
t=j.w(0,Math.sqrt(j.E(j)))
s=u.b7(t)
r=new V.F(k.a,k.b,k.c)
q=t.T(0).E(r)
p=s.T(0).E(r)
o=u.T(0).E(r)
k=V.au(t.a,s.a,u.a,q,t.b,s.b,u.b,p,t.c,s.c,u.c,o,0,0,0,1)
$.lg=k
n=k}else n=k
k=l.b
if(k!=null){m=k.aY(0,a,l)
if(m!=null)n=m.q(0,n)}a.db.bt(n)},
ar:function(a){a.cy.aJ()
a.db.aJ()}}
X.i6.prototype={}
V.cN.prototype={
be:function(a){this.b=new P.fD(C.Q)
this.c=null
this.d=H.b([],[[P.o,W.an]])},
M:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.an]))
u=a.split("\n")
for(l=u.length,t=[W.an],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.eH(q,0,q.length)
n=o==null?q:o
C.O.ee(p,H.kQ(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gaA(m.d).push(p)}},
e_:function(a,b){var u,t,s,r,q=this
q.d=H.b([],[[P.o,W.an]])
u=C.b.k(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bl():t).e8(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r)q.bs(t[r])}}
V.k8.prototype={
$1:function(a){var u=C.c.e7(this.a.ghy(),2)
if(u!=="0.00")P.kP(u+" fps")}}
V.fc.prototype={
bs:function(a){var u=this
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
bl:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=R.ik()
a1.c=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=T.q(new H.m("_"))
u.a.push(t)
t=T.M("a","z")
u.a.push(t)
t=T.M("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=T.q(new H.m("_"))
t.a.push(u)
u=T.M("0","9")
t.a.push(u)
u=T.M("a","z")
t.a.push(u)
u=T.M("A","Z")
t.a.push(u)
u=a1.j(0,r).k(0,p)
t=T.M("0","9")
u.a.push(t)
t=a1.j(0,p).k(0,p)
u=T.M("0","9")
t.a.push(u)
u=a1.j(0,p).k(0,o)
t=T.q(new H.m("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=T.M("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=T.M("0","9")
u.a.push(t)
t=a1.j(0,r).k(0,m)
u=T.q(new H.m(l))
t.a.push(u)
u=a1.j(0,m).k(0,m)
t=T.q(new H.m(l))
u.a.push(t)
t=a1.j(0,r).k(0,k)
u=T.q(new H.m('"'))
t.a.push(u)
u=a1.j(0,k).k(0,j)
t=T.q(new H.m('"'))
u.a.push(t)
t=a1.j(0,k).k(0,i)
u=T.q(new H.m("\\"))
t.a.push(u)
u=a1.j(0,i).k(0,k)
t=T.q(new H.m('"'))
u.a.push(t)
a1.j(0,k).k(0,k).a.push(new T.aC())
t=a1.j(0,r).k(0,h)
u=T.q(new H.m("'"))
t.a.push(u)
u=a1.j(0,h).k(0,g)
t=T.q(new H.m("'"))
u.a.push(t)
t=a1.j(0,h).k(0,f)
u=T.q(new H.m("\\"))
t.a.push(u)
u=a1.j(0,f).k(0,h)
t=T.q(new H.m("'"))
u.a.push(t)
a1.j(0,h).k(0,h).a.push(new T.aC())
t=a1.j(0,r).k(0,e)
u=T.q(new H.m("/"))
t.a.push(u)
u=a1.j(0,e).k(0,d)
t=T.q(new H.m("/"))
u.a.push(t)
t=a1.j(0,d).k(0,c)
u=T.q(new H.m("\n"))
t.a.push(u)
u=a1.j(0,d).k(0,d)
t=new T.a5()
s=[T.ba]
t.a=H.b([],s)
u.a.push(t)
u=T.q(new H.m("\n"))
t.a.push(u)
u=a1.j(0,e).k(0,b)
t=T.q(new H.m("*"))
u.a.push(t)
t=a1.j(0,b).k(0,a)
u=T.q(new H.m("*"))
t.a.push(u)
u=a1.j(0,a).k(0,b)
t=new T.a5()
t.a=H.b([],s)
u.a.push(t)
u=T.q(new H.m("*"))
t.a.push(u)
u=a1.j(0,a).k(0,c)
t=T.q(new H.m("/"))
u.a.push(t)
t=a1.j(0,r).k(0,a0)
u=T.q(new H.m(" \n\t"))
t.a.push(u)
u=a1.j(0,a0).k(0,a0)
t=T.q(new H.m(" \n\t"))
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
u=[P.l]
t.aK(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aK(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aK(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fy.prototype={
bs:function(a){var u=this
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
bl:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=R.ik()
e.c=e.j(0,r)
u=e.j(0,r).k(0,q)
t=T.q(new H.m("_"))
u.a.push(t)
t=T.M("a","z")
u.a.push(t)
t=T.M("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=T.q(new H.m("_"))
t.a.push(u)
u=T.M("0","9")
t.a.push(u)
u=T.M("a","z")
t.a.push(u)
u=T.M("A","Z")
t.a.push(u)
u=e.j(0,r).k(0,p)
t=T.M("0","9")
u.a.push(t)
t=e.j(0,p).k(0,p)
u=T.M("0","9")
t.a.push(u)
u=e.j(0,p).k(0,o)
t=T.q(new H.m("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=T.M("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=T.M("0","9")
u.a.push(t)
t=e.j(0,r).k(0,m)
u=T.q(new H.m(l))
t.a.push(u)
u=e.j(0,m).k(0,m)
t=T.q(new H.m(l))
u.a.push(t)
t=e.j(0,r).k(0,k)
u=T.q(new H.m("/"))
t.a.push(u)
u=e.j(0,k).k(0,j)
t=T.q(new H.m("/"))
u.a.push(t)
e.j(0,k).k(0,m).a.push(new T.aC())
t=e.j(0,j).k(0,i)
u=T.q(new H.m("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new T.a5()
s=[T.ba]
t.a=H.b([],s)
u.a.push(t)
u=T.q(new H.m("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=T.q(new H.m("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new T.a5()
u.a=H.b([],s)
t.a.push(u)
t=T.q(new H.m("\n"))
u.a.push(t)
t=e.j(0,h).k(0,g)
u=T.q(new H.m("\n"))
t.a.push(u)
u=e.j(0,r).k(0,f)
t=T.q(new H.m(" \n\t"))
u.a.push(t)
t=e.j(0,f).k(0,f)
u=T.q(new H.m(" \n\t"))
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
t=[P.l]
u.aK(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aK(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aK(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.fB.prototype={
bs:function(a){var u=this,t="#111"
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
bl:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=R.ik()
l.c=l.j(0,s)
u=l.j(0,s).k(0,r)
t=T.q(new H.m("_"))
u.a.push(t)
t=T.M("a","z")
u.a.push(t)
t=T.M("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=T.q(new H.m("_"))
t.a.push(u)
u=T.M("0","9")
t.a.push(u)
u=T.M("a","z")
t.a.push(u)
u=T.M("A","Z")
t.a.push(u)
u=l.j(0,r).k(0,q)
t=T.q(new H.m("="))
u.a.push(t)
u.c=!0
u=l.j(0,s).k(0,p)
t=T.q(new H.m("</\\-!>="))
u.a.push(t)
t=l.j(0,p).k(0,p)
u=T.q(new H.m("</\\-!>="))
t.a.push(u)
u=l.j(0,s).k(0,o)
t=T.q(new H.m('"'))
u.a.push(t)
t=l.j(0,o).k(0,n)
u=T.q(new H.m('"'))
t.a.push(u)
u=l.j(0,o).k(0,"EscStr")
t=T.q(new H.m("\\"))
u.a.push(t)
t=l.j(0,"EscStr").k(0,o)
u=T.q(new H.m('"'))
t.a.push(u)
l.j(0,o).k(0,o).a.push(new T.aC())
l.j(0,s).k(0,m).a.push(new T.aC())
u=l.j(0,m).k(0,m)
t=new T.a5()
t.a=H.b([],[T.ba])
u.a.push(t)
u=T.q(new H.m('</\\-!>=_"'))
t.a.push(u)
u=T.M("a","z")
t.a.push(u)
u=T.M("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.O("Symbol")
u=l.j(0,n)
u.d=u.a.O("String")
u=l.j(0,r)
t=u.a.O(r)
u.d=t
t.aK(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.l]))
t=l.j(0,q)
t.d=t.a.O(q)
t=l.j(0,m)
t.d=t.a.O(m)
return l}}
V.hv.prototype={
e_:function(a,b){this.d=H.b([],[[P.o,W.an]])
this.M(C.b.k(b,"\n"),"#111")},
bs:function(a){},
bl:function(){return}}
V.hA.prototype={
dg:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.lu().gcs().i(0,H.e(u))
if(t==null)if(d){c.$0()
m.de(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.kU(m.c).n(0,q)
o=W.mF("radio")
o.checked=s
o.name=u
W.U(o,"change",new V.hB(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.kU(m.c).n(0,r.createElement("br"))},
al:function(a,b,c){return this.dg(a,b,c,!1)},
de:function(a){var u,t,s=P.lu(),r=P.l,q=P.mM(s.gcs(),r,r)
q.m(0,this.a,a)
u=s.e2(0,q)
r=window.history
t=u.h(0)
r.toString
r.replaceState(new P.jn([],[]).cw(""),"",t)}}
V.hB.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.de(u.d)}}}
V.hR.prototype={
er:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.U(q,"scroll",new V.hT(o),!1)},
di:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.fY()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.e8(C.b.hD(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
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
if(H.oF(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.ev(C.y,n,C.e,!1)
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
eb:function(a){var u,t,s,r=new V.fc("dart")
r.be("dart")
u=new V.fy("glsl")
u.be("glsl")
t=new V.fB("html")
t.be("html")
s=C.b.hv(H.b([r,u,t],[V.cN]),new V.hU(a))
if(s!=null)return s
r=new V.hv("plain")
r.be("plain")
return r},
dh:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cC(s).a6(s,"+")){b0[t]=C.a.ai(s,1)
a6.push(1)
u=!0}else if(C.a.a6(s,"-")){b0[t]=C.a.ai(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.eb(a8)
r.e_(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.ev(C.y,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.kW()
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
if(t>=a6.length)return H.c(a6,t)
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
for(a2=C.b.gU(s);a2.v();)d.appendChild(a2.gH(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
h6:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
fY:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=R.ik()
u.c=u.j(0,q)
t=u.j(0,q).k(0,p)
s=T.q(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new T.a5()
r=[T.ba]
s.a=H.b([],r)
t.a.push(s)
t=T.q(new H.m("*"))
s.a.push(t)
t=u.j(0,p).k(0,"BoldEnd")
s=T.q(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,o)
s=T.q(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.j(0,o).k(0,o)
s=new T.a5()
s.a=H.b([],r)
t.a.push(s)
t=T.q(new H.m("_"))
s.a.push(t)
t=u.j(0,o).k(0,n)
s=T.q(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,m)
s=T.q(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.j(0,m).k(0,m)
s=new T.a5()
s.a=H.b([],r)
t.a.push(s)
t=T.q(new H.m("`"))
s.a.push(t)
t=u.j(0,m).k(0,"CodeEnd")
s=T.q(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,l)
s=T.q(new H.m("["))
t.a.push(s)
t.c=!0
t=u.j(0,l).k(0,k)
s=T.q(new H.m("|"))
t.a.push(s)
s=u.j(0,l).k(0,j)
t=T.q(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.j(0,l).k(0,l)
t=new T.a5()
t.a=H.b([],r)
s.a.push(t)
s=T.q(new H.m("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=T.q(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new T.a5()
t.a=H.b([],r)
s.a.push(t)
s=T.q(new H.m("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new T.aC())
s=u.j(0,i).k(0,i)
t=new T.a5()
t.a=H.b([],r)
s.a.push(t)
s=T.q(new H.m("*_`["))
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
V.hT.prototype={
$1:function(a){P.lq(C.n,new V.hS(this.a))}}
V.hS.prototype={
$0:function(){var u=C.c.a0(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.hU.prototype={
$1:function(a){return a.a===this.a}}
U.jV.prototype={
$1:function(a){var u=this.a
u.d.sb4(a)
u.f.sb4(a)}}
U.jW.prototype={
$0:function(){this.a.$1(0)}}
U.jX.prototype={
$0:function(){this.a.$1(0.1)}}
U.k_.prototype={
$0:function(){this.a.$1(0.2)}}
U.k0.prototype={
$0:function(){this.a.$1(0.3)}}
U.k1.prototype={
$0:function(){this.a.$1(0.4)}}
U.k2.prototype={
$0:function(){this.a.$1(0.5)}}
U.k3.prototype={
$0:function(){this.a.$1(0.6)}}
U.k4.prototype={
$0:function(){this.a.$1(0.7)}}
U.k5.prototype={
$0:function(){this.a.$1(0.8)}}
U.k6.prototype={
$0:function(){this.a.$1(0.9)}}
U.jY.prototype={
$0:function(){this.a.$1(1)}}
U.jZ.prototype={
$1:function(a){var u,t=null,s=this.a,r=this.b,q=r.d
if(q==null)q=t
else{q=q.a
q=q==null?t:q.c}u=[P.l]
s.dh("Vertex Shader","glsl",0,H.b(q.split("\n"),u))
r=r.d
if(r==null)r=t
else{r=r.a
r=r==null?t:r.d}s.dh("Fragment Shader","glsl",0,H.b(r.split("\n"),u))}};(function aliases(){var u=J.a.prototype
u.ej=u.h
u=J.d3.prototype
u.el=u.h
u=P.h.prototype
u.ek=u.bx
u=W.S.prototype
u.bA=u.am
u=W.ed.prototype
u.em=u.ay
u=T.d_.prototype
u.ei=u.aI
u.cI=u.h
u=O.bZ.prototype
u.cJ=u.aE
u=O.at.prototype
u.cK=u.aE})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"oe","nn",8)
u(P,"of","no",8)
u(P,"og","np",8)
t(P,"lT","oc",10)
s(W,"ot",4,null,["$4"],["nq"],16,0)
s(W,"ou",4,null,["$4"],["nr"],16,0)
var m
r(m=E.aG.prototype,"gdY",0,0,null,["$1","$0"],["dZ","hN"],0,0)
r(m,"gdW",0,0,null,["$1","$0"],["dX","hK"],0,0)
q(m,"ghI","hJ",4)
q(m,"ghL","hM",4)
r(m=E.du.prototype,"gcM",0,0,null,["$1","$0"],["cO","cN"],0,0)
p(m,"gi_","e3",10)
o(m=X.dF.prototype,"gfd","fe",5)
o(m,"gf1","f2",5)
o(m,"gf7","f8",2)
o(m,"gfh","fi",11)
o(m,"gff","fg",11)
o(m,"gfl","fm",2)
o(m,"gfp","fq",2)
o(m,"gfb","fc",2)
o(m,"gfn","fo",2)
o(m,"gf9","fa",2)
o(m,"gfs","ft",19)
o(m,"gfu","fv",5)
o(m,"gfM","fN",6)
o(m,"gfI","fJ",6)
o(m,"gfK","fL",6)
r(m=D.d5.prototype,"gd1",0,0,null,["$1","$0"],["d2","fj"],0,0)
o(m,"gfw","fz",20)
q(m,"geW","eX",12)
q(m,"gfC","fD",12)
n(V.E.prototype,"gl","b8",7)
n(V.F.prototype,"gl","b8",7)
n(V.cj.prototype,"gl","b8",7)
r(m=U.bT.prototype,"gaR",0,0,null,["$1","$0"],["R","ad"],0,0)
q(m,"geU","eV",13)
q(m,"gfA","fB",13)
r(m=U.dG.prototype,"gaR",0,0,null,["$1","$0"],["R","ad"],0,0)
o(m,"gbK","bL",1)
o(m,"gbM","bN",1)
o(m,"gbO","bP",1)
r(m=U.dH.prototype,"gaR",0,0,null,["$1","$0"],["R","ad"],0,0)
o(m,"gbK","bL",1)
o(m,"gbM","bN",1)
o(m,"gbO","bP",1)
o(m,"geN","eO",1)
o(m,"geP","eQ",1)
o(m,"gh4","h5",1)
o(m,"gh2","h3",1)
o(m,"gh0","h1",1)
o(U.dI.prototype,"geS","eT",1)
r(m=M.cO.prototype,"gY",0,0,null,["$1","$0"],["V","aB"],0,0)
q(m,"gfE","fF",14)
q(m,"gfG","fH",14)
r(M.cQ.prototype,"gY",0,0,null,["$1","$0"],["V","aB"],0,0)
r(m=M.cV.prototype,"gY",0,0,null,["$1","$0"],["V","aB"],0,0)
q(m,"gf3","f4",4)
q(m,"gf5","f6",4)
r(M.cY.prototype,"gY",0,0,null,["$1","$0"],["V","aB"],0,0)
r(O.cZ.prototype,"gau",0,0,null,["$1","$0"],["L","aC"],0,0)
r(m=O.d9.prototype,"gau",0,0,null,["$1","$0"],["L","aC"],0,0)
r(m,"gfS",0,0,null,["$1","$0"],["d4","fT"],0,0)
q(m,"geY","eZ",15)
q(m,"gf_","f0",15)
r(O.bZ.prototype,"gau",0,0,null,["$1","$0"],["L","aC"],0,0)
r(O.dl.prototype,"gau",0,0,null,["$1","$0"],["L","aC"],0,0)
r(X.dg.prototype,"gex",0,0,null,["$1","$0"],["a1","ey"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a_,null)
s(P.a_,[H.kr,J.a,J.a4,P.e0,P.h,H.bY,P.fH,H.cW,H.iB,H.f4,H.iq,P.bp,H.bN,H.ei,P.aJ,H.fN,H.fP,H.fJ,P.eo,P.dL,P.dr,P.i2,P.dv,P.jD,P.jh,P.jb,P.e_,P.r,P.jv,P.fW,P.f0,P.fE,P.jB,P.jA,P.aB,P.a8,P.ac,P.b2,P.ht,P.dp,P.dT,P.fv,P.fx,P.o,P.R,P.bc,P.l,P.P,P.bB,P.iD,P.jk,W.f8,W.cn,W.K,W.de,W.ed,W.jq,W.cX,W.aN,W.jg,W.ew,P.jm,P.et,P.jc,P.bx,T.aC,T.d_,T.ba,T.hC,T.hM,R.dq,R.dw,R.dx,R.ij,O.aD,O.c0,E.eX,E.aG,E.hE,E.du,Z.dK,Z.ck,Z.b0,Z.bq,Z.az,D.f_,D.bQ,D.V,X.cM,X.d4,X.fL,X.fT,X.ah,X.hi,X.il,X.dF,D.fe,D.a9,D.hx,D.hY,V.Y,V.am,V.fn,V.c_,V.aK,V.a0,V.a1,V.aQ,V.di,V.E,V.F,V.cj,U.dG,U.dH,U.dI,M.cQ,M.cV,M.cY,M.ai,A.cK,A.eP,A.Z,A.fA,A.cS,A.dh,A.dn,A.h2,A.cg,A.ch,A.ci,A.dA,A.iw,F.b3,F.bX,F.c6,F.hN,F.hO,F.hP,F.hQ,F.bA,F.iN,F.iO,F.iR,F.iS,O.dt,O.bZ,O.h3,T.id,X.i6,X.kf,X.fF,X.dg,V.cN,V.hA,V.hR])
s(J.a,[J.fI,J.d2,J.d3,J.b6,J.bW,J.b7,H.c3,H.bb,W.f,W.eM,W.bm,W.ar,W.G,W.dN,W.ag,W.fd,W.ff,W.dP,W.cU,W.dR,W.fh,W.i,W.dU,W.aH,W.fC,W.dW,W.aI,W.fS,W.hc,W.e1,W.e2,W.aL,W.e3,W.e6,W.aO,W.ea,W.ec,W.aS,W.ee,W.aT,W.ej,W.aw,W.em,W.ii,W.aV,W.ep,W.io,W.iI,W.ex,W.ez,W.eB,W.eD,W.eF,P.b9,P.dY,P.bd,P.e8,P.hz,P.ek,P.bf,P.er,P.eQ,P.dM,P.dj,P.eg])
s(J.d3,[J.hu,J.bz,J.b8])
t(J.kq,J.b6)
s(J.bW,[J.d1,J.d0])
t(P.fR,P.e0)
s(P.fR,[H.dD,W.j1,W.a2,P.fr])
t(H.m,H.dD)
s(P.h,[H.fk,H.fX,H.cl])
s(H.fk,[H.d7,H.fO])
s(P.fH,[H.fY,H.iW])
t(H.fZ,H.d7)
t(H.f5,H.f4)
s(P.bp,[H.hq,H.fK,H.iA,H.eZ,H.hK,P.df,P.al,P.iC,P.iy,P.cb,P.f3,P.fb])
s(H.bN,[H.kb,H.i7,H.jR,H.jS,H.jT,P.iY,P.iX,P.iZ,P.j_,P.ju,P.jt,P.jM,P.je,P.jf,P.fQ,P.fV,P.fi,P.fj,P.iH,P.iE,P.iF,P.iG,P.jw,P.jx,P.jz,P.jy,P.jH,P.jG,P.jI,P.jJ,W.fl,W.he,W.hg,W.hJ,W.i1,W.j6,W.hp,W.ho,W.ji,W.jj,W.js,W.jC,P.jo,P.jN,P.fs,P.ft,P.eS,E.hF,E.hG,E.hH,E.ih,D.fo,D.fp,F.jE,F.iU,F.iT,F.iP,F.iQ,O.h6,O.h7,O.h8,O.h9,O.ha,O.hb,T.ig,T.ie,V.k8,V.hB,V.hT,V.hS,V.hU,U.jV,U.jW,U.jX,U.k_,U.k0,U.k1,U.k2,U.k3,U.k4,U.k5,U.k6,U.jY,U.jZ])
s(H.i7,[H.i_,H.bL])
t(P.fU,P.aJ)
s(P.fU,[H.N,W.j0])
t(H.da,H.bb)
s(H.da,[H.cp,H.cr])
t(H.cq,H.cp)
t(H.c4,H.cq)
t(H.cs,H.cr)
t(H.db,H.cs)
s(H.db,[H.hj,H.hk,H.hl,H.hm,H.hn,H.dc,H.c5])
t(P.jd,P.jD)
t(P.ja,P.jh)
t(P.eu,P.fW)
t(P.dE,P.eu)
s(P.f0,[P.eV,P.fm])
t(P.f6,P.i2)
s(P.f6,[P.eW,P.fD,P.iL,P.iK])
t(P.iJ,P.fm)
s(P.ac,[P.I,P.w])
s(P.al,[P.bv,P.fG])
t(P.j3,P.bB)
s(W.f,[W.D,W.fq,W.c1,W.aR,W.ct,W.aU,W.ax,W.cv,W.iV,W.cm,P.eT,P.bl])
s(W.D,[W.S,W.b1])
s(W.S,[W.n,P.k])
s(W.n,[W.eN,W.eO,W.bn,W.bo,W.an,W.fu,W.bV,W.hL,W.ds,W.i4,W.i5,W.cd])
t(W.f7,W.ar)
t(W.bO,W.dN)
s(W.ag,[W.f9,W.fa])
t(W.dQ,W.dP)
t(W.cT,W.dQ)
t(W.dS,W.dR)
t(W.fg,W.dS)
t(W.as,W.bm)
t(W.dV,W.dU)
t(W.bS,W.dV)
t(W.dX,W.dW)
t(W.bU,W.dX)
t(W.bg,W.i)
s(W.bg,[W.br,W.av,W.bw])
t(W.hd,W.e1)
t(W.hf,W.e2)
t(W.e4,W.e3)
t(W.hh,W.e4)
t(W.e7,W.e6)
t(W.dd,W.e7)
t(W.eb,W.ea)
t(W.hw,W.eb)
t(W.hI,W.ec)
t(W.cu,W.ct)
t(W.hW,W.cu)
t(W.ef,W.ee)
t(W.hX,W.ef)
t(W.i0,W.ej)
t(W.en,W.em)
t(W.i8,W.en)
t(W.cw,W.cv)
t(W.i9,W.cw)
t(W.eq,W.ep)
t(W.im,W.eq)
t(W.bi,W.av)
t(W.ey,W.ex)
t(W.j2,W.ey)
t(W.dO,W.cU)
t(W.eA,W.ez)
t(W.j7,W.eA)
t(W.eC,W.eB)
t(W.e5,W.eC)
t(W.eE,W.eD)
t(W.jl,W.eE)
t(W.eG,W.eF)
t(W.jp,W.eG)
t(W.j4,W.j0)
t(W.j5,P.dr)
t(W.jr,W.ed)
t(P.jn,P.jm)
t(P.ab,P.jc)
t(P.dZ,P.dY)
t(P.fM,P.dZ)
t(P.e9,P.e8)
t(P.hr,P.e9)
t(P.ca,P.k)
t(P.el,P.ek)
t(P.i3,P.el)
t(P.es,P.er)
t(P.ip,P.es)
t(P.eR,P.dM)
t(P.hs,P.bl)
t(P.eh,P.eg)
t(P.hZ,P.eh)
s(T.d_,[T.a5,R.dz])
s(E.eX,[Z.cL,A.dk,T.ce])
s(D.V,[D.b4,D.b5,D.x,X.hy])
s(X.hy,[X.d8,X.aM,X.c2,X.dy])
s(O.aD,[D.d5,U.bT,M.cO])
s(D.f_,[U.f2,U.aa])
t(U.cP,U.aa)
s(A.dk,[A.fz,A.h_,A.hV])
s(A.dA,[A.dB,A.it,A.iu,A.iv,A.is,A.T,A.dC,A.H,A.cf,A.ix,A.by,A.a6,A.X,A.bh])
s(O.dt,[O.cZ,O.d9,O.dl])
s(O.bZ,[O.h0,O.h1,O.at])
s(O.at,[O.h4,O.h5])
s(T.ce,[T.ia,T.ic])
t(T.ib,T.ia)
s(X.i6,[X.eU,X.fw])
s(V.cN,[V.fc,V.fy,V.fB,V.hv])
u(H.dD,H.iB)
u(H.cp,P.r)
u(H.cq,H.cW)
u(H.cr,P.r)
u(H.cs,H.cW)
u(P.e0,P.r)
u(P.eu,P.jv)
u(W.dN,W.f8)
u(W.dP,P.r)
u(W.dQ,W.K)
u(W.dR,P.r)
u(W.dS,W.K)
u(W.dU,P.r)
u(W.dV,W.K)
u(W.dW,P.r)
u(W.dX,W.K)
u(W.e1,P.aJ)
u(W.e2,P.aJ)
u(W.e3,P.r)
u(W.e4,W.K)
u(W.e6,P.r)
u(W.e7,W.K)
u(W.ea,P.r)
u(W.eb,W.K)
u(W.ec,P.aJ)
u(W.ct,P.r)
u(W.cu,W.K)
u(W.ee,P.r)
u(W.ef,W.K)
u(W.ej,P.aJ)
u(W.em,P.r)
u(W.en,W.K)
u(W.cv,P.r)
u(W.cw,W.K)
u(W.ep,P.r)
u(W.eq,W.K)
u(W.ex,P.r)
u(W.ey,W.K)
u(W.ez,P.r)
u(W.eA,W.K)
u(W.eB,P.r)
u(W.eC,W.K)
u(W.eD,P.r)
u(W.eE,W.K)
u(W.eF,P.r)
u(W.eG,W.K)
u(P.dY,P.r)
u(P.dZ,W.K)
u(P.e8,P.r)
u(P.e9,W.K)
u(P.ek,P.r)
u(P.el,W.K)
u(P.er,P.r)
u(P.es,W.K)
u(P.dM,P.aJ)
u(P.eg,P.r)
u(P.eh,W.K)})()
var v={mangledGlobalNames:{w:"int",I:"double",ac:"num",l:"String",aB:"bool",bc:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.V]},{func:1,ret:-1,args:[D.V]},{func:1,ret:-1,args:[W.av]},{func:1,ret:P.bc,args:[,,]},{func:1,ret:-1,args:[P.w,[P.h,E.aG]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bw]},{func:1,ret:P.I},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.br]},{func:1,ret:-1,args:[P.w,[P.h,D.a9]]},{func:1,ret:-1,args:[P.w,[P.h,U.aa]]},{func:1,ret:-1,args:[P.w,[P.h,M.ai]]},{func:1,ret:-1,args:[P.w,[P.h,V.aK]]},{func:1,ret:P.aB,args:[W.S,P.l,P.l,W.cn]},{func:1,ret:P.bc,args:[,]},{func:1,ret:P.bx,args:[,,]},{func:1,ret:-1,args:[W.bi]},{func:1,ret:P.aB,args:[[P.h,D.a9]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bn.prototype
C.j=W.bo.prototype
C.O=W.an.prototype
C.R=J.a.prototype
C.b=J.b6.prototype
C.S=J.d0.prototype
C.d=J.d1.prototype
C.i=J.d2.prototype
C.c=J.bW.prototype
C.a=J.b7.prototype
C.T=J.b8.prototype
C.B=J.hu.prototype
C.q=P.dj.prototype
C.C=W.ds.prototype
C.r=J.bz.prototype
C.D=W.bi.prototype
C.E=W.cm.prototype
C.Z=new P.eW()
C.F=new P.eV()
C.u=function getTagFallback(o) {
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
C.v=function(hooks) { return hooks; }

C.M=new P.ht()
C.e=new P.iJ()
C.N=new P.iL()
C.f=new P.jd()
C.n=new P.b2(0)
C.P=new P.b2(5e6)
C.Q=new P.fE("element",!1,!1,!1)
C.w=H.b(u([127,2047,65535,1114111]),[P.w])
C.k=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.w])
C.U=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.l])
C.l=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.w])
C.m=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.w])
C.V=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.l])
C.x=H.b(u([]),[P.l])
C.W=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.w])
C.y=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.h=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.w])
C.z=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.w])
C.X=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.w])
C.A=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.w])
C.o=H.b(u(["bind","if","ref","repeat","syntax"]),[P.l])
C.p=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.l])
C.Y=new H.f5(0,{},C.x,[P.l,P.l])})();(function staticFields(){$.aq=0
$.bM=null
$.l_=null
$.lV=null
$.lS=null
$.lZ=null
$.jO=null
$.jU=null
$.kN=null
$.bE=null
$.cz=null
$.cA=null
$.kI=!1
$.ao=C.f
$.a7=[]
$.aF=null
$.kl=null
$.l4=null
$.l3=null
$.co=P.kt(P.l,P.fx)
$.lc=null
$.ld=null
$.lh=null
$.c7=null
$.lm=null
$.lz=null
$.lx=null
$.ly=null
$.lC=null
$.lB=null
$.lA=null
$.lD=null
$.lg=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oN","m2",function(){return H.lU("_$dart_dartClosure")})
u($,"oO","kR",function(){return H.lU("_$dart_js")})
u($,"oP","m3",function(){return H.ay(H.ir({
toString:function(){return"$receiver$"}}))})
u($,"oQ","m4",function(){return H.ay(H.ir({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oR","m5",function(){return H.ay(H.ir(null))})
u($,"oS","m6",function(){return H.ay(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oV","m9",function(){return H.ay(H.ir(void 0))})
u($,"oW","ma",function(){return H.ay(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oU","m8",function(){return H.ay(H.ls(null))})
u($,"oT","m7",function(){return H.ay(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"oY","mc",function(){return H.ay(H.ls(void 0))})
u($,"oX","mb",function(){return H.ay(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pb","kS",function(){return P.nm()})
u($,"oZ","md",function(){return P.nj()})
u($,"pc","mh",function(){return H.mS(H.bD(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.w])))})
u($,"pe","mj",function(){return P.n6("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pf","mk",function(){return P.nL()})
u($,"pd","mi",function(){return P.la(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.l)})
u($,"p5","mg",function(){return Z.aj(0)})
u($,"p_","me",function(){return Z.aj(511)})
u($,"p7","ae",function(){return Z.aj(1)})
u($,"p6","aZ",function(){return Z.aj(2)})
u($,"p1","aY",function(){return Z.aj(4)})
u($,"p8","ap",function(){return Z.aj(8)})
u($,"p9","bk",function(){return Z.aj(16)})
u($,"p2","cF",function(){return Z.aj(32)})
u($,"p3","cG",function(){return Z.aj(64)})
u($,"p4","mf",function(){return Z.aj(96)})
u($,"pa","bK",function(){return Z.aj(128)})
u($,"p0","aX",function(){return Z.aj(256)})
u($,"oM","m1",function(){return new V.fn(1e-9)})
u($,"oL","A",function(){return $.m1()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.c3,DataView:H.bb,ArrayBufferView:H.bb,Float32Array:H.c4,Float64Array:H.c4,Int16Array:H.hj,Int32Array:H.hk,Int8Array:H.hl,Uint16Array:H.hm,Uint32Array:H.hn,Uint8ClampedArray:H.dc,CanvasPixelArray:H.dc,Uint8Array:H.c5,HTMLAudioElement:W.n,HTMLBRElement:W.n,HTMLBaseElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLInputElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMediaElement:W.n,HTMLMenuElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTextAreaElement:W.n,HTMLTimeElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLVideoElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLFrameSetElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,AccessibleNodeList:W.eM,HTMLAnchorElement:W.eN,HTMLAreaElement:W.eO,Blob:W.bm,HTMLBodyElement:W.bn,HTMLCanvasElement:W.bo,CDATASection:W.b1,CharacterData:W.b1,Comment:W.b1,ProcessingInstruction:W.b1,Text:W.b1,CSSPerspective:W.f7,CSSCharsetRule:W.G,CSSConditionRule:W.G,CSSFontFaceRule:W.G,CSSGroupingRule:W.G,CSSImportRule:W.G,CSSKeyframeRule:W.G,MozCSSKeyframeRule:W.G,WebKitCSSKeyframeRule:W.G,CSSKeyframesRule:W.G,MozCSSKeyframesRule:W.G,WebKitCSSKeyframesRule:W.G,CSSMediaRule:W.G,CSSNamespaceRule:W.G,CSSPageRule:W.G,CSSRule:W.G,CSSStyleRule:W.G,CSSSupportsRule:W.G,CSSViewportRule:W.G,CSSStyleDeclaration:W.bO,MSStyleCSSProperties:W.bO,CSS2Properties:W.bO,CSSImageValue:W.ag,CSSKeywordValue:W.ag,CSSNumericValue:W.ag,CSSPositionValue:W.ag,CSSResourceValue:W.ag,CSSUnitValue:W.ag,CSSURLImageValue:W.ag,CSSStyleValue:W.ag,CSSMatrixComponent:W.ar,CSSRotation:W.ar,CSSScale:W.ar,CSSSkew:W.ar,CSSTranslation:W.ar,CSSTransformComponent:W.ar,CSSTransformValue:W.f9,CSSUnparsedValue:W.fa,DataTransferItemList:W.fd,HTMLDivElement:W.an,DOMException:W.ff,ClientRectList:W.cT,DOMRectList:W.cT,DOMRectReadOnly:W.cU,DOMStringList:W.fg,DOMTokenList:W.fh,Element:W.S,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.as,FileList:W.bS,FileWriter:W.fq,HTMLFormElement:W.fu,Gamepad:W.aH,History:W.fC,HTMLCollection:W.bU,HTMLFormControlsCollection:W.bU,HTMLOptionsCollection:W.bU,ImageData:W.aI,HTMLImageElement:W.bV,KeyboardEvent:W.br,Location:W.fS,MediaList:W.hc,MessagePort:W.c1,MIDIInputMap:W.hd,MIDIOutputMap:W.hf,MimeType:W.aL,MimeTypeArray:W.hh,PointerEvent:W.av,MouseEvent:W.av,DragEvent:W.av,Document:W.D,DocumentFragment:W.D,HTMLDocument:W.D,ShadowRoot:W.D,XMLDocument:W.D,Attr:W.D,DocumentType:W.D,Node:W.D,NodeList:W.dd,RadioNodeList:W.dd,Plugin:W.aO,PluginArray:W.hw,RTCStatsReport:W.hI,HTMLSelectElement:W.hL,SourceBuffer:W.aR,SourceBufferList:W.hW,SpeechGrammar:W.aS,SpeechGrammarList:W.hX,SpeechRecognitionResult:W.aT,Storage:W.i0,CSSStyleSheet:W.aw,StyleSheet:W.aw,HTMLTableElement:W.ds,HTMLTableRowElement:W.i4,HTMLTableSectionElement:W.i5,HTMLTemplateElement:W.cd,TextTrack:W.aU,TextTrackCue:W.ax,VTTCue:W.ax,TextTrackCueList:W.i8,TextTrackList:W.i9,TimeRanges:W.ii,Touch:W.aV,TouchEvent:W.bw,TouchList:W.im,TrackDefaultList:W.io,CompositionEvent:W.bg,FocusEvent:W.bg,TextEvent:W.bg,UIEvent:W.bg,URL:W.iI,VideoTrackList:W.iV,WheelEvent:W.bi,Window:W.cm,DOMWindow:W.cm,CSSRuleList:W.j2,ClientRect:W.dO,DOMRect:W.dO,GamepadList:W.j7,NamedNodeMap:W.e5,MozNamedAttrMap:W.e5,SpeechRecognitionResultList:W.jl,StyleSheetList:W.jp,SVGLength:P.b9,SVGLengthList:P.fM,SVGNumber:P.bd,SVGNumberList:P.hr,SVGPointList:P.hz,SVGScriptElement:P.ca,SVGStringList:P.i3,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.bf,SVGTransformList:P.ip,AudioBuffer:P.eQ,AudioParamMap:P.eR,AudioTrackList:P.eT,AudioContext:P.bl,webkitAudioContext:P.bl,BaseAudioContext:P.bl,OfflineAudioContext:P.hs,WebGL2RenderingContext:P.dj,SQLResultSetRowList:P.hZ})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.da.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.cq.$nativeSuperclassTag="ArrayBufferView"
H.c4.$nativeSuperclassTag="ArrayBufferView"
H.cr.$nativeSuperclassTag="ArrayBufferView"
H.cs.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
W.ct.$nativeSuperclassTag="EventTarget"
W.cu.$nativeSuperclassTag="EventTarget"
W.cv.$nativeSuperclassTag="EventTarget"
W.cw.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.lX,[])
else U.lX([])})})()
//# sourceMappingURL=test.dart.js.map
