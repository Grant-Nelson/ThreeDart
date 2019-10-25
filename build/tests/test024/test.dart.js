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
a[c]=function(){a[c]=function(){H.oD(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kx(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kg:function kg(){},
jJ:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
fq:function(){return new P.c4("No element")},
mE:function(){return new P.c4("Too many elements")},
dd:function(a,b,c,d){if(c-b<=32)H.n7(a,b,c,d)
else H.n6(a,b,c,d)},
n7:function(a,b,c,d){var u,t,s,r,q
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
n6:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.c.a5(a4-a3+1,6),d=a3+e,c=a4-e,b=C.c.a5(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof k!=="number")return k.P()
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
if(typeof g!=="number")return g.P()
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
H.dd(a2,a3,o-2,a5)
H.dd(a2,n+2,a4,a5)
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
break}}}H.dd(a2,o,n,a5)}else H.dd(a2,o,n,a5)},
m:function m(a){this.a=a},
f5:function f5(){},
cX:function cX(){},
bV:function bV(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
fK:function fK(a,b){this.a=null
this.b=a
this.c=b},
fL:function fL(a,b,c){this.a=a
this.b=b
this.$ti=c},
ce:function ce(a,b,c){this.a=a
this.b=b
this.$ti=c},
iK:function iK(a,b){this.a=a
this.b=b},
cO:function cO(){},
ii:function ii(){},
dt:function dt(){},
mw:function(){throw H.d(P.x("Cannot modify unmodifiable Map"))},
ew:function(a){var u,t=H.oE(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
om:function(a){return v.types[a]},
lR:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.R(a).$iA},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a1(a)
if(typeof u!=="string")throw H.d(H.at(a))
return u},
c1:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mZ:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.b(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.W(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.C(s,q)|32)>t)return}return parseInt(a,b)},
c2:function(a){return H.mQ(a)+H.lF(H.cw(a),0,null)},
mQ:function(a){var u,t,s,r,q,p,o,n=J.R(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.Q||!!n.$iby){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.ew(t.length>1&&C.a.C(t,0)===36?C.a.a6(t,1):t)},
mR:function(){if(!!self.location)return self.location.href
return},
l9:function(a){var u,t,s,r,q=J.ab(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
n_:function(a){var u,t,s,r=H.c([],[P.v])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.at(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aI(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.d(H.at(s))}return H.l9(r)},
la:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.at(s))
if(s<0)throw H.d(H.at(s))
if(s>65535)return H.n_(a)}return H.l9(a)},
n0:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
br:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aI(u,10))>>>0,56320|u&1023)}}throw H.d(P.W(a,0,1114111,null,null))},
bq:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mY:function(a){var u=H.bq(a).getFullYear()+0
return u},
mW:function(a){var u=H.bq(a).getMonth()+1
return u},
mS:function(a){var u=H.bq(a).getDate()+0
return u},
mT:function(a){var u=H.bq(a).getHours()+0
return u},
mV:function(a){var u=H.bq(a).getMinutes()+0
return u},
mX:function(a){var u=H.bq(a).getSeconds()+0
return u},
mU:function(a){var u=H.bq(a).getMilliseconds()+0
return u},
w:function(a){throw H.d(H.at(a))},
b:function(a,b){if(a==null)J.ab(a)
throw H.d(H.bF(a,b))},
bF:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.af(!0,b,s,null)
u=J.ab(a)
if(!(b<0)){if(typeof u!=="number")return H.w(u)
t=b>=u}else t=!0
if(t)return P.H(b,a,s,null,u)
return P.da(b,s)},
og:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bs(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bs(a,c,!0,b,"end",u)
return new P.af(!0,b,"end",null)},
at:function(a){return new P.af(!0,a,null,null)},
d:function(a){var u
if(a==null)a=new P.d7()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lW})
u.name=""}else u.toString=H.lW
return u},
lW:function(){return J.a1(this.dartException)},
t:function(a){throw H.d(a)},
o:function(a){throw H.d(P.aw(a))},
ar:function(a){var u,t,s,r,q,p
a=H.lV(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.k])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.i4(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
i5:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lj:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
l5:function(a,b){return new H.hd(a,b==null?null:b.method)},
kh:function(a,b){var u=b==null,t=u?null:b.method
return new H.fv(a,t,u?null:b.receiver)},
aa:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.k2(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aI(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kh(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.l5(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.m_()
q=$.m0()
p=$.m1()
o=$.m2()
n=$.m5()
m=$.m6()
l=$.m4()
$.m3()
k=$.m8()
j=$.m7()
i=r.aa(u)
if(i!=null)return f.$1(H.kh(u,i))
else{i=q.aa(u)
if(i!=null){i.method="call"
return f.$1(H.kh(u,i))}else{i=p.aa(u)
if(i==null){i=o.aa(u)
if(i==null){i=n.aa(u)
if(i==null){i=m.aa(u)
if(i==null){i=l.aa(u)
if(i==null){i=o.aa(u)
if(i==null){i=k.aa(u)
if(i==null){i=j.aa(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.l5(u,i))}}return f.$1(new H.ih(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.df()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.af(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.df()
return a},
kB:function(a){var u
if(a==null)return new H.e6(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.e6(a)},
ok:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
os:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.u("Unsupported number of arguments for wrapped closure"))},
bE:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.os)
a.$identity=u
return u},
mv:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hL().constructor.prototype):Object.create(new H.bJ(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aj
if(typeof t!=="number")return t.w()
$.aj=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.kT(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mr(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.kT(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mr:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.om,a)
if(typeof a=="function")if(b)return a
else{u=c?H.kR:H.k5
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
ms:function(a,b,c,d){var u=H.k5
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kT:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mu(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.ms(t,!r,u,b)
if(t===0){r=$.aj
if(typeof r!=="number")return r.w()
$.aj=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bK
return new Function(r+H.e(q==null?$.bK=H.eK("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aj
if(typeof r!=="number")return r.w()
$.aj=r+1
o+=r
r="return function("+o+"){return this."
q=$.bK
return new Function(r+H.e(q==null?$.bK=H.eK("self"):q)+"."+H.e(u)+"("+o+");}")()},
mt:function(a,b,c,d){var u=H.k5,t=H.kR
switch(b?-1:a){case 0:throw H.d(H.n4("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mu:function(a,b){var u,t,s,r,q,p,o,n=$.bK
if(n==null)n=$.bK=H.eK("self")
u=$.kQ
if(u==null)u=$.kQ=H.eK("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mt(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.aj
if(typeof u!=="number")return u.w()
$.aj=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.aj
if(typeof u!=="number")return u.w()
$.aj=u+1
return new Function(n+u+"}")()},
kx:function(a,b,c,d,e,f,g){return H.mv(a,b,c,d,!!e,!!f,g)},
k5:function(a){return a.a},
kR:function(a){return a.c},
eK:function(a){var u,t,s,r=new H.bJ("self","target","receiver","name"),q=J.ke(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
ox:function(a,b){throw H.d(H.mq(a,H.ew(b.substring(2))))},
r:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.R(a)[b]
else u=!0
if(u)return a
H.ox(a,b)},
oi:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mq:function(a,b){return new H.eL("CastError: "+P.kb(a)+": type '"+H.e(H.oa(a))+"' is not a subtype of type '"+b+"'")},
oa:function(a){var u,t=J.R(a)
if(!!t.$ibL){u=H.oi(t)
if(u!=null)return H.oy(u)
return"Closure"}return H.c2(a)},
oD:function(a){throw H.d(new P.eX(a))},
n4:function(a){return new H.hw(a)},
lP:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
cw:function(a){if(a==null)return
return a.$ti},
pd:function(a,b,c){return H.k_(a["$a"+H.e(c)],H.cw(b))},
ol:function(a,b,c,d){var u=H.k_(a["$a"+H.e(c)],H.cw(b))
return u==null?null:u[d]},
kA:function(a,b,c){var u=H.k_(a["$a"+H.e(b)],H.cw(a))
return u==null?null:u[c]},
cx:function(a,b){var u=H.cw(a)
return u==null?null:u[b]},
oy:function(a){return H.bc(a,null)},
bc:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ew(a[0].name)+H.lF(a,1,b)
if(typeof a=="function")return H.ew(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.e(b[t])}if('func' in a)return H.nJ(a,b)
if('futureOr' in a)return"FutureOr<"+H.bc("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nJ:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.k])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.a.w(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a_)p+=" extends "+H.bc(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bc(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bc(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bc(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oj(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bc(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lF:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.P("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bc(p,c)}return"<"+u.h(0)+">"},
k_:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pb:function(a,b,c){return a.apply(b,H.k_(J.R(b)["$a"+H.e(c)],H.cw(b)))},
pc:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ou:function(a){var u,t,s,r,q=$.lQ.$1(a),p=$.jH[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jN[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.lK.$2(a,q)
if(q!=null){p=$.jH[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jN[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jW(u)
$.jH[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jN[q]=u
return u}if(s==="-"){r=H.jW(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lT(a,u)
if(s==="*")throw H.d(P.ig(q))
if(v.leafTags[q]===true){r=H.jW(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lT(a,u)},
lT:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kD(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jW:function(a){return J.kD(a,!1,null,!!a.$iA)},
ov:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jW(u)
else return J.kD(u,c,null,null)},
oq:function(){if(!0===$.kC)return
$.kC=!0
H.or()},
or:function(){var u,t,s,r,q,p,o,n
$.jH=Object.create(null)
$.jN=Object.create(null)
H.op()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lU.$1(q)
if(p!=null){o=H.ov(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
op:function(){var u,t,s,r,q,p,o=C.F()
o=H.bD(C.G,H.bD(C.H,H.bD(C.u,H.bD(C.u,H.bD(C.I,H.bD(C.J,H.bD(C.K(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lQ=new H.jK(r)
$.lK=new H.jL(q)
$.lU=new H.jM(p)},
bD:function(a,b){return a(b)||b},
mG:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(P.N("Illegal RegExp pattern ("+String(p)+")",a,null))},
oB:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oh:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lV:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kF:function(a,b,c){var u=H.oC(a,b,c)
return u},
oC:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lV(b),'g'),H.oh(c))},
eQ:function eQ(){},
eR:function eR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i4:function i4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hd:function hd(a,b){this.a=a
this.b=b},
fv:function fv(a,b,c){this.a=a
this.b=b
this.c=c},
ih:function ih(a){this.a=a},
k2:function k2(a){this.a=a},
e6:function e6(a){this.a=a
this.b=null},
bL:function bL(){},
hT:function hT(){},
hL:function hL(){},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eL:function eL(a){this.a=a},
hw:function hw(a){this.a=a},
L:function L(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fz:function fz(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fA:function fA(a,b){this.a=a
this.$ti=b},
fB:function fB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jK:function jK(a){this.a=a},
jL:function jL(a){this.a=a},
jM:function jM(a){this.a=a},
fu:function fu(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bB:function(a){return a},
mP:function(a){return new Int8Array(a)},
as:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bF(b,a))},
nH:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.og(a,b,c))
return b},
bY:function bY(){},
b0:function b0(){},
d2:function d2(){},
bZ:function bZ(){},
d3:function d3(){},
h5:function h5(){},
h6:function h6(){},
h7:function h7(){},
h8:function h8(){},
h9:function h9(){},
d4:function d4(){},
c_:function c_(){},
ci:function ci(){},
cj:function cj(){},
ck:function ck(){},
cl:function cl(){},
oj:function(a){return J.kY(a?Object.keys(a):[],null)},
oE:function(a){return v.mangledGlobalNames[a]},
ow:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jI:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kC==null){H.oq()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.ig("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kH()]
if(r!=null)return r
r=H.ou(a)
if(r!=null)return r
if(typeof a=="function")return C.R
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.kH(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
mF:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.kO(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.W(a,0,4294967295,"length",null))
return J.kY(new Array(a),b)},
kY:function(a,b){return J.ke(H.c(a,[b]))},
ke:function(a){a.fixed$length=Array
return a},
R:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cR.prototype
return J.ft.prototype}if(typeof a=="string")return J.aW.prototype
if(a==null)return J.cS.prototype
if(typeof a=="boolean")return J.fs.prototype
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.a_)return a
return J.jI(a)},
cu:function(a){if(typeof a=="string")return J.aW.prototype
if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.a_)return a
return J.jI(a)},
eu:function(a){if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.a_)return a
return J.jI(a)},
lO:function(a){if(typeof a=="number")return J.bT.prototype
if(typeof a=="string")return J.aW.prototype
if(a==null)return a
if(!(a instanceof P.a_))return J.by.prototype
return a},
cv:function(a){if(typeof a=="string")return J.aW.prototype
if(a==null)return a
if(!(a instanceof P.a_))return J.by.prototype
return a},
bH:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.a_)return a
return J.jI(a)},
C:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.R(a).p(a,b)},
kJ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lO(a).A(a,b)},
cA:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lR(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cu(a).i(a,b)},
k3:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.lR(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eu(a).m(a,b,c)},
mh:function(a,b){return J.cv(a).C(a,b)},
mi:function(a,b,c){return J.bH(a).ft(a,b,c)},
mj:function(a,b,c,d){return J.bH(a).fO(a,b,c,d)},
mk:function(a,b){return J.cv(a).T(a,b)},
k4:function(a,b){return J.lO(a).h_(a,b)},
ex:function(a,b){return J.eu(a).H(a,b)},
ml:function(a,b,c,d){return J.bH(a).hb(a,b,c,d)},
kK:function(a,b){return J.eu(a).F(a,b)},
mm:function(a){return J.bH(a).gfV(a)},
kL:function(a){return J.bH(a).gbO(a)},
cB:function(a){return J.R(a).gG(a)},
aQ:function(a){return J.eu(a).gS(a)},
ab:function(a){return J.cu(a).gl(a)},
kM:function(a){return J.eu(a).hG(a)},
mn:function(a,b){return J.bH(a).hK(a,b)},
mo:function(a,b,c){return J.cv(a).q(a,b,c)},
mp:function(a){return J.cv(a).hR(a)},
a1:function(a){return J.R(a).h(a)},
a:function a(){},
fs:function fs(){},
cS:function cS(){},
cT:function cT(){},
hh:function hh(){},
by:function by(){},
aX:function aX(){},
aV:function aV(a){this.$ti=a},
kf:function kf(a){this.$ti=a},
a2:function a2(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bT:function bT(){},
cR:function cR(){},
ft:function ft(){},
aW:function aW(){}},P={
nj:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.ob()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bE(new P.iM(s),1)).observe(u,{childList:true})
return new P.iL(s,u,t)}else if(self.setImmediate!=null)return P.oc()
return P.od()},
nk:function(a){self.scheduleImmediate(H.bE(new P.iN(a),0))},
nl:function(a){self.setImmediate(H.bE(new P.iO(a),0))},
nm:function(a){P.kl(C.n,a)},
kl:function(a,b){var u=C.c.a5(a.a,1000)
return P.nr(u<0?0:u,b)},
li:function(a,b){var u=C.c.a5(a.a,1000)
return P.ns(u<0?0:u,b)},
nr:function(a,b){var u=new P.ec()
u.e7(a,b)
return u},
ns:function(a,b){var u=new P.ec()
u.e8(a,b)
return u},
o4:function(){var u,t
for(;u=$.bC,u!=null;){$.ct=null
t=u.b
$.bC=t
if(t==null)$.cs=null
u.a.$0()}},
o9:function(){$.kv=!0
try{P.o4()}finally{$.ct=null
$.kv=!1
if($.bC!=null)$.kI().$1(P.lL())}},
o7:function(a){var u=new P.dz(a)
if($.bC==null){$.bC=$.cs=u
if(!$.kv)$.kI().$1(P.lL())}else $.cs=$.cs.b=u},
o8:function(a){var u,t,s=$.bC
if(s==null){P.o7(a)
$.ct=$.cs
return}u=new P.dz(a)
t=$.ct
if(t==null){u.b=s
$.bC=$.ct=u}else{u.b=t.b
$.ct=t.b=u
if(u.b==null)$.cs=u}},
lh:function(a,b){var u=$.ai
if(u===C.f)return P.kl(a,b)
return P.kl(a,u.fW(b))},
na:function(a,b){var u=$.ai
if(u===C.f)return P.li(a,b)
return P.li(a,u.cR(b,P.dl))},
lG:function(a,b,c,d,e){var u={}
u.a=d
P.o8(new P.jA(u,e))},
o5:function(a,b,c,d){var u,t=$.ai
if(t===c)return d.$0()
$.ai=c
u=t
try{t=d.$0()
return t}finally{$.ai=u}},
o6:function(a,b,c,d,e){var u,t=$.ai
if(t===c)return d.$1(e)
$.ai=c
u=t
try{t=d.$1(e)
return t}finally{$.ai=u}},
iM:function iM(a){this.a=a},
iL:function iL(a,b,c){this.a=a
this.b=b
this.c=c},
iN:function iN(a){this.a=a},
iO:function iO(a){this.a=a},
ec:function ec(){this.c=0},
ji:function ji(a,b){this.a=a
this.b=b},
jh:function jh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dz:function dz(a){this.a=a
this.b=null},
dh:function dh(){},
hO:function hO(){},
dl:function dl(){},
jr:function jr(){},
jA:function jA(a,b){this.a=a
this.b=b},
j1:function j1(){},
j2:function j2(a,b){this.a=a
this.b=b},
j3:function j3(a,b,c){this.a=a
this.b=b
this.c=c},
mI:function(a,b){return new H.L([a,b])},
ki:function(a,b){return new H.L([a,b])},
mK:function(a){return H.ok(a,new H.L([null,null]))},
cW:function(a){return new P.iZ([a])},
kq:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nq:function(a,b){var u=new P.dO(a,b)
u.c=a.e
return u},
mD:function(a,b,c){var u,t
if(P.kw(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.k])
$.a5.push(a)
try{P.nK(a,u)}finally{if(0>=$.a5.length)return H.b($.a5,-1)
$.a5.pop()}t=P.lf(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kd:function(a,b,c){var u,t
if(P.kw(a))return b+"..."+c
u=new P.P(b)
$.a5.push(a)
try{t=u
t.a=P.lf(t.a,a,", ")}finally{if(0>=$.a5.length)return H.b($.a5,-1)
$.a5.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kw:function(a){var u,t
for(u=$.a5.length,t=0;t<u;++t)if(a===$.a5[t])return!0
return!1},
nK:function(a,b){var u,t,s,r,q,p,o,n=a.gS(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.v())return
u=H.e(n.gI(n))
b.push(u)
m+=u.length+2;++l}if(!n.v()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gI(n);++l
if(!n.v()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gI(n);++l
for(;n.v();r=q,q=p){p=n.gI(n);++l
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
mJ:function(a,b,c){var u=P.mI(b,c)
a.F(0,new P.fC(u))
return u},
kZ:function(a,b){var u,t,s=P.cW(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t)s.n(0,a[t])
return s},
kj:function(a){var u,t={}
if(P.kw(a))return"{...}"
u=new P.P("")
try{$.a5.push(a)
u.a+="{"
t.a=!0
J.kK(a,new P.fH(t,u))
u.a+="}"}finally{if(0>=$.a5.length)return H.b($.a5,-1)
$.a5.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iZ:function iZ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
j_:function j_(a){this.a=a
this.c=this.b=null},
dO:function dO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fC:function fC(a){this.a=a},
fD:function fD(){},
q:function q(){},
fG:function fG(){},
fH:function fH(a,b){this.a=a
this.b=b},
aA:function aA(){},
jj:function jj(){},
fI:function fI(){},
du:function du(a,b){this.a=a
this.$ti=b},
j5:function j5(){},
dP:function dP(){},
eh:function eh(){},
nd:function(a,b,c,d){if(b instanceof Uint8Array)return P.ne(!1,b,c,d)
return},
ne:function(a,b,c,d){var u,t,s=$.m9()
if(s==null)return
u=0===c
if(u&&!0)return P.ko(s,b)
t=b.length
d=P.b6(c,d,t)
if(u&&d===t)return P.ko(s,b)
return P.ko(s,b.subarray(c,d))},
ko:function(a,b){if(P.ng(b))return
return P.nh(a,b)},
nh:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aa(t)}return},
ng:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nf:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aa(t)}return},
lI:function(a,b,c){var u,t,s
for(u=J.cu(a),t=b;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.ad()
if((s&127)!==s)return t-b}return c-b},
kP:function(a,b,c,d,e,f){if(C.c.b5(f,4)!==0)throw H.d(P.N("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.N("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.N("Invalid base64 padding, more than two '=' characters",a,b))},
eH:function eH(){},
eI:function eI(){},
eN:function eN(){},
eS:function eS(){},
f7:function f7(){},
fo:function fo(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fn:function fn(a){this.a=a},
ir:function ir(){},
it:function it(){},
jp:function jp(a){this.b=0
this.c=a},
is:function is(a){this.a=a},
jo:function jo(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
ev:function(a,b,c){var u=H.mZ(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.N(a,null,null))},
mA:function(a){if(a instanceof H.bL)return a.h(0)
return"Instance of '"+H.e(H.c2(a))+"'"},
mL:function(a,b,c){var u,t,s=J.mF(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
l_:function(a,b,c){var u,t=H.c([],[c])
for(u=J.aQ(a);u.v();)t.push(u.gI(u))
if(b)return t
return J.ke(t)},
c5:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.b6(b,c,u)
return H.la(b>0||c<u?C.b.dO(a,b,c):a)}if(!!J.R(a).$ic_)return H.n0(a,b,P.b6(b,c,a.length))
return P.n8(a,b,c)},
n8:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.d(P.W(b,0,J.ab(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.W(c,b,J.ab(a),q,q))
t=J.aQ(a)
for(s=0;s<b;++s)if(!t.v())throw H.d(P.W(b,0,s,q,q))
r=[]
if(u)for(;t.v();)r.push(t.gI(t))
else for(s=b;s<c;++s){if(!t.v())throw H.d(P.W(c,b,s,q,q))
r.push(t.gI(t))}return H.la(r)},
n2:function(a){return new H.fu(a,H.mG(a,!1,!0,!1,!1,!1))},
lf:function(a,b,c){var u=J.aQ(b)
if(!u.v())return a
if(c.length===0){do a+=H.e(u.gI(u))
while(u.v())}else{a+=H.e(u.gI(u))
for(;u.v();)a=a+c+H.e(u.gI(u))}return a},
ll:function(){var u=H.mR()
if(u!=null)return P.nc(u)
throw H.d(P.x("'Uri.base' is not supported"))},
ei:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mf().b
if(typeof b!=="string")H.t(H.at(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.gha().bP(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.br(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mx:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
my:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cJ:function(a){if(a>=10)return""+a
return"0"+a},
kV:function(a){return new P.aT(1000*a)},
kb:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a1(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mA(a)},
eB:function(a){return new P.af(!1,null,null,a)},
kO:function(a,b,c){return new P.af(!0,a,b,c)},
da:function(a,b){return new P.bs(null,null,!0,a,b,"Value not in range")},
W:function(a,b,c,d,e){return new P.bs(b,c,!0,a,d,"Invalid value")},
b6:function(a,b,c){if(0>a||a>c)throw H.d(P.W(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.W(b,a,c,"end",null))
return b}return c},
lb:function(a,b){if(typeof a!=="number")return a.P()
if(a<0)throw H.d(P.W(a,0,null,b,null))},
H:function(a,b,c,d,e){var u=e==null?J.ab(b):e
return new P.fp(u,!0,a,c,"Index out of range")},
x:function(a){return new P.ij(a)},
ig:function(a){return new P.ie(a)},
le:function(a){return new P.c4(a)},
aw:function(a){return new P.eP(a)},
u:function(a){return new P.dH(a)},
N:function(a,b,c){return new P.fh(a,b,c)},
mM:function(a,b,c){var u,t,s=H.c([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.b(s,u)
s[u]=t}return s},
kE:function(a){H.ow(a)},
nc:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.C(a,4)^58)*3|C.a.C(a,0)^100|C.a.C(a,1)^97|C.a.C(a,2)^116|C.a.C(a,3)^97)>>>0
if(u===0)return P.lk(e<e?C.a.q(a,0,e):a,5,f).gdH()
else if(u===32)return P.lk(C.a.q(a,5,e),0,f).gdH()}t=new Array(8)
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
if(P.lH(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.hT()
if(r>=0)if(P.lH(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.w()
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
a=C.a.aN(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a4(a,"http",0)){if(t&&p+3===o&&C.a.a4(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aN(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a4(a,"https",0)){if(t&&p+4===o&&C.a.a4(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aN(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.q(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.j8(a,r,q,p,o,n,m,k)}return P.nt(a,0,e,r,q,p,o,n,m,k)},
ln:function(a){var u=P.k
return C.b.hg(H.c(a.split("&"),[u]),P.ki(u,u),new P.ip(C.e))},
nb:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.il(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.T(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.ev(C.a.q(a,s,t),n,n)
if(typeof p!=="number")return p.a_()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.b(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.ev(C.a.q(a,s,c),n,n)
if(typeof p!=="number")return p.a_()
if(p>255)k.$2(l,s)
if(r>=u)return H.b(j,r)
j[r]=p
return j},
lm:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.im(a),d=new P.io(e,a)
if(a.length<2)e.$1("address is too short")
u=H.c([],[P.v])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.T(a,t)
if(p===58){if(t===b){++t
if(C.a.T(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gaq(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.nb(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.b(l,i)
l[i]=0
f=i+1
if(f>=k)return H.b(l,f)
l[f]=0
i+=2}else{f=C.c.aI(h,8)
if(i<0||i>=k)return H.b(l,i)
l[i]=f
f=i+1
if(f>=k)return H.b(l,f)
l[f]=h&255
i+=2}}return l},
nt:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nB(a,b,d)
else{if(d===b)P.bA(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nC(a,u,e-1):""
s=P.ny(a,e,f,!1)
if(typeof f!=="number")return f.w()
r=f+1
if(typeof g!=="number")return H.w(g)
q=r<g?P.nA(P.ev(C.a.q(a,r,g),new P.jk(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nz(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.P()
o=h<i?P.ks(a,h+1,i,n):n
return new P.bz(j,t,s,q,p,o,i<c?P.nx(a,i+1,c):n)},
lz:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bA:function(a,b,c){throw H.d(P.N(c,a,b))},
nA:function(a,b){if(a!=null&&a===P.lz(b))return
return a},
ny:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.T(a,b)===91){if(typeof c!=="number")return c.O()
u=c-1
if(C.a.T(a,u)!==93)P.bA(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nv(a,t,u)
if(typeof s!=="number")return s.P()
if(s<u){r=s+1
q=P.lE(a,C.a.a4(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lm(a,t,s)
return C.a.q(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.w(c)
p=b
for(;p<c;++p)if(C.a.T(a,p)===58){s=C.a.bg(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lE(a,C.a.a4(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lm(a,b,s)
return"["+C.a.q(a,b,s)+q+"]"}return P.nE(a,b,c)},
nv:function(a,b,c){var u,t=C.a.bg(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.w(c)
u=t<c}else u=!1
return u?t:c},
lE:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.P(d):null
if(typeof c!=="number")return H.w(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.T(a,u)
if(r===37){q=P.kt(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.P("")
o=l.a+=C.a.q(a,t,u)
if(p)q=C.a.q(a,u,u+3)
else if(q==="%")P.bA(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.P("")
if(t<u){l.a+=C.a.q(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.T(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.P("")
l.a+=C.a.q(a,t,u)
l.a+=P.kr(r)
u+=m
t=u}}}if(l==null)return C.a.q(a,b,c)
if(t<c)l.a+=C.a.q(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
nE:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.w(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.T(a,u)
if(q===37){p=P.kt(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.P("")
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
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.P("")
if(t<u){s.a+=C.a.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.b(C.j,o)
o=(C.j[o]&1<<(q&15))!==0}else o=!1
if(o)P.bA(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.T(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.P("")
n=C.a.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kr(q)
u+=l
t=u}}}}if(s==null)return C.a.q(a,b,c)
if(t<c){n=C.a.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nB:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lB(C.a.C(a,b)))P.bA(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.C(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.b(C.l,r)
r=(C.l[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bA(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.q(a,b,c)
return P.nu(t?a.toLowerCase():a)},
nu:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nC:function(a,b,c){return P.cq(a,b,c,C.U,!1)},
nz:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cq(a,b,c,C.z,!0):C.i.ie(d,new P.jl(),P.k).k(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a2(u,"/"))u="/"+u
return P.nD(u,e,f)},
nD:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a2(a,"/"))return P.nF(a,!u||c)
return P.nG(a)},
ks:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.d(P.eB("Both query and queryParameters specified"))
return P.cq(a,b,c,C.k,!0)}if(d==null)return
u=new P.P("")
t.a=""
d.F(0,new P.jm(new P.jn(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nx:function(a,b,c){return P.cq(a,b,c,C.k,!0)},
kt:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.T(a,b+1)
t=C.a.T(a,p)
s=H.jJ(u)
r=H.jJ(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aI(q,4)
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.br(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.q(a,b,b+3).toUpperCase()
return},
kr:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
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
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.fG(a,6*r)&63|s
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
q+=3}}return P.c5(t,0,null)},
cq:function(a,b,c,d,e){var u=P.lD(a,b,c,d,e)
return u==null?C.a.q(a,b,c):u},
lD:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.P()
if(typeof c!=="number")return H.w(c)
if(!(o<c))break
c$0:{u=C.a.T(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.b(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kt(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.b(C.j,t)
t=(C.j[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bA(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.T(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kr(u)}}if(m==null)m=new P.P("")
m.a+=C.a.q(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.w(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.P()
if(n<c)m.a+=C.a.q(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lC:function(a){if(C.a.a2(a,"."))return!0
return C.a.da(a,"/.")!==-1},
nG:function(a){var u,t,s,r,q,p,o
if(!P.lC(a))return a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.C(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.b(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.k(u,"/")},
nF:function(a,b){var u,t,s,r,q,p
if(!P.lC(a))return!b?P.lA(a):a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gaq(u)!==".."){if(0>=u.length)return H.b(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.b(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gaq(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.b(u,0)
t=P.lA(u[0])
if(0>=u.length)return H.b(u,0)
u[0]=t}return C.b.k(u,"/")},
lA:function(a){var u,t,s,r=a.length
if(r>=2&&P.lB(J.mh(a,0)))for(u=1;u<r;++u){t=C.a.C(a,u)
if(t===58)return C.a.q(a,0,u)+"%3A"+C.a.a6(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.b(C.l,s)
s=(C.l[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nw:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.C(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.eB("Invalid URL encoding"))}}return u},
ku:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.C(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.q(a,b,c)
else r=new H.m(C.a.q(a,b,c))}else{r=H.c([],[P.v])
for(s=a.length,q=b;q<c;++q){t=C.a.C(a,q)
if(t>127)throw H.d(P.eB("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.eB("Truncated URI"))
r.push(P.nw(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.is(!1).bP(r)},
lB:function(a){var u=a|32
return 97<=u&&u<=122},
lk:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.v])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.C(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.N(m,a,t))}}if(s<0&&t>b)throw H.d(P.N(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.C(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gaq(l)
if(r!==44||t!==p+7||!C.a.a4(a,"base64",p+1))throw H.d(P.N("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.E.hp(0,a,o,u)
else{n=P.lD(a,o,u,C.k,!0)
if(n!=null)a=C.a.aN(a,o,u,n)}return new P.ik(a,l,c)},
nI:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.mM(22,new P.jv(),P.bv),n=new P.ju(o),m=new P.jw(),l=new P.jx(),k=n.$2(0,225)
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
lH:function(a,b,c,d,e){var u,t,s,r,q,p=$.mg()
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
au:function au(){},
a6:function a6(a,b){this.a=a
this.b=b},
K:function K(){},
aT:function aT(a){this.a=a},
f3:function f3(){},
f4:function f4(){},
bj:function bj(){},
d7:function d7(){},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bs:function bs(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fp:function fp(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ij:function ij(a){this.a=a},
ie:function ie(a){this.a=a},
c4:function c4(a){this.a=a},
eP:function eP(a){this.a=a},
hg:function hg(){},
df:function df(){},
eX:function eX(a){this.a=a},
dH:function dH(a){this.a=a},
fh:function fh(a,b,c){this.a=a
this.b=b
this.c=c},
fj:function fj(){},
v:function v(){},
i:function i(){},
fr:function fr(){},
n:function n(){},
O:function O(){},
b1:function b1(){},
a9:function a9(){},
a_:function a_(){},
k:function k(){},
P:function P(a){this.a=a},
ip:function ip(a){this.a=a},
il:function il(a){this.a=a},
im:function im(a){this.a=a},
io:function io(a,b){this.a=a
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
jk:function jk(a,b){this.a=a
this.b=b},
jl:function jl(){},
jn:function jn(a,b){this.a=a
this.b=b},
jm:function jm(a){this.a=a},
ik:function ik(a,b,c){this.a=a
this.b=b
this.c=c},
jv:function jv(){},
ju:function ju(a){this.a=a},
jw:function jw(){},
jx:function jx(){},
j8:function j8(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
iS:function iS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
aL:function(a){var u,t,s,r,q
if(a==null)return
u=P.ki(P.k,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
oe:function(a){var u={}
a.F(0,new P.jB(u))
return u},
ja:function ja(){},
jc:function jc(a,b){this.a=a
this.b=b},
jB:function jB(a){this.a=a},
jb:function jb(a,b){this.a=a
this.b=b},
fd:function fd(a,b){this.a=a
this.b=b},
fe:function fe(){},
ff:function ff(){},
iY:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
np:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
j0:function j0(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aY:function aY(){},
fx:function fx(){},
b2:function b2(){},
he:function he(){},
hm:function hm(){},
c3:function c3(){},
hP:function hP(){},
j:function j(){},
b7:function b7(){},
i3:function i3(){},
dM:function dM(){},
dN:function dN(){},
dX:function dX(){},
dY:function dY(){},
e8:function e8(){},
e9:function e9(){},
ef:function ef(){},
eg:function eg(){},
bv:function bv(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(a){this.a=a},
eG:function eG(){},
bf:function bf(){},
hf:function hf(){},
dA:function dA(){},
hK:function hK(){},
e4:function e4(){},
e5:function e5(){}},W={
kN:function(){var u=document.createElement("a")
return u},
kS:function(){var u=document.createElement("canvas")
return u},
mz:function(a,b,c){var u=document.body,t=(u&&C.r).a9(u,a,b,c)
t.toString
u=new H.ce(new W.a0(t),new W.f6(),[W.E])
return u.gaD(u)},
k8:function(a){return"wheel"},
bN:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bH(a)
t=u.gdC(a)
if(typeof t==="string")r=u.gdC(a)}catch(s){H.aa(s)}return r},
mC:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.aa(u)}return s},
iX:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lx:function(a,b,c,d){var u=W.iX(W.iX(W.iX(W.iX(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Y:function(a,b,c,d){var u=W.lJ(new W.iV(c),W.h)
if(u!=null&&!0)J.mj(a,b,u,!1)
return new W.iU(a,b,u,!1)},
lw:function(a){var u=W.kN(),t=window.location
u=new W.cg(new W.j4(u,t))
u.e_(a)
return u},
nn:function(a,b,c,d){return!0},
no:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
ly:function(){var u=P.k,t=P.kZ(C.o,u),s=H.c(["TEMPLATE"],[u])
t=new W.jf(t,P.cW(u),P.cW(u),P.cW(u),null)
t.e4(null,new H.fL(C.o,new W.jg(),[H.cx(C.o,0),u]),s,null)
return t},
lJ:function(a,b){var u=$.ai
if(u===C.f)return a
return u.cR(a,b)},
l:function l(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
bg:function bg(){},
bh:function bh(){},
bi:function bi(){},
aR:function aR(){},
eT:function eT(){},
F:function F(){},
bM:function bM(){},
eU:function eU(){},
ac:function ac(){},
al:function al(){},
eV:function eV(){},
eW:function eW(){},
eZ:function eZ(){},
ag:function ag(){},
f0:function f0(){},
cL:function cL(){},
cM:function cM(){},
f1:function f1(){},
f2:function f2(){},
iQ:function iQ(a,b){this.a=a
this.b=b},
S:function S(){},
f6:function f6(){},
h:function h(){},
f:function f(){},
am:function am(){},
bP:function bP(){},
fc:function fc(){},
fg:function fg(){},
az:function az(){},
fm:function fm(){},
bR:function bR(){},
bS:function bS(){},
bo:function bo(){},
fE:function fE(){},
fZ:function fZ(){},
bX:function bX(){},
h_:function h_(){},
h0:function h0(a){this.a=a},
h1:function h1(){},
h2:function h2(a){this.a=a},
aD:function aD(){},
h3:function h3(){},
ao:function ao(){},
a0:function a0(a){this.a=a},
E:function E(){},
d5:function d5(){},
aF:function aF(){},
hj:function hj(){},
hu:function hu(){},
hv:function hv(a){this.a=a},
hx:function hx(){},
aG:function aG(){},
hI:function hI(){},
aH:function aH(){},
hJ:function hJ(){},
aI:function aI(){},
hM:function hM(){},
hN:function hN(a){this.a=a},
ap:function ap(){},
di:function di(){},
hQ:function hQ(){},
hR:function hR(){},
c6:function c6(){},
aJ:function aJ(){},
aq:function aq(){},
hU:function hU(){},
hV:function hV(){},
hY:function hY(){},
aK:function aK(){},
bu:function bu(){},
i1:function i1(){},
i2:function i2(){},
b8:function b8(){},
iq:function iq(){},
iI:function iI(){},
bb:function bb(){},
cf:function cf(){},
iR:function iR(){},
dC:function dC(){},
iW:function iW(){},
dU:function dU(){},
j9:function j9(){},
jd:function jd(){},
iP:function iP(){},
iT:function iT(a){this.a=a},
iU:function iU(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iV:function iV(a){this.a=a},
cg:function cg(a){this.a=a},
G:function G(){},
d6:function d6(a){this.a=a},
hb:function hb(a){this.a=a},
ha:function ha(a,b,c){this.a=a
this.b=b
this.c=c},
e1:function e1(){},
j6:function j6(){},
j7:function j7(){},
jf:function jf(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jg:function jg(){},
je:function je(){},
cP:function cP(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aE:function aE(){},
j4:function j4(a,b){this.a=a
this.b=b},
ej:function ej(a){this.a=a},
jq:function jq(a){this.a=a},
dB:function dB(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
dV:function dV(){},
dW:function dW(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
cm:function cm(){},
cn:function cn(){},
e2:function e2(){},
e3:function e3(){},
e7:function e7(){},
ea:function ea(){},
eb:function eb(){},
co:function co(){},
cp:function cp(){},
ed:function ed(){},
ee:function ee(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){}},T={
I:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.u("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.C(a,0)
t=C.a.C(b,0)
s=new T.hp()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
p:function(a){var u=new T.hy()
u.dX(a)
return u},
av:function av(){},
cQ:function cQ(){},
aZ:function aZ(){},
a3:function a3(){this.a=null},
hp:function hp(){this.b=this.a=null},
hy:function hy(){this.a=null},
hW:function hW(){}},R={
i_:function(){var u=new R.hZ(),t=P.k
u.a=new H.L([t,R.dg])
u.b=new H.L([t,R.dn])
return u},
dg:function dg(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dm:function dm(a,b,c){this.a=a
this.b=b
this.c=c},
dn:function dn(a){this.b=a
this.c=null},
hZ:function hZ(){this.c=this.b=this.a=null},
dq:function dq(a){this.b=a
this.a=this.c=null}},O={
k7:function(a){var u=new O.aS([a])
u.bs(a)
return u},
aS:function aS(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bW:function bW(){this.b=this.a=null},
l0:function(){var u,t=new O.cZ(),s=O.k7(V.aB)
t.e=s
s.b6(t.geD(),t.geF())
s=new O.an(t,"emission")
s.c=new A.Z(!1,!1,!1)
s.f=new V.U(0,0,0)
t.f=s
s=new O.an(t,"ambient")
s.c=new A.Z(!1,!1,!1)
s.f=new V.U(0,0,0)
t.r=s
s=new O.an(t,"diffuse")
s.c=new A.Z(!1,!1,!1)
s.f=new V.U(0,0,0)
t.x=s
s=new O.an(t,"invDiffuse")
s.c=new A.Z(!1,!1,!1)
s.f=new V.U(0,0,0)
t.y=s
s=new O.fS(t,"specular")
s.c=new A.Z(!1,!1,!1)
s.f=new V.U(0,0,0)
s.ch=100
t.z=s
s=new O.fO(t,"bump")
s.c=new A.Z(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.an(t,"reflect")
s.c=new A.Z(!1,!1,!1)
s.f=new V.U(0,0,0)
t.cx=s
s=new O.fR(t,"refract")
s.c=new A.Z(!1,!1,!1)
s.f=new V.U(0,0,0)
s.ch=1
t.cy=s
s=new O.fN(t,"alpha")
s.c=new A.Z(!1,!1,!1)
s.f=1
t.db=s
s=new D.cV()
s.bs(D.a7)
s.e=H.c([],[D.f_])
s.f=H.c([],[D.hk])
s.r=H.c([],[D.bt])
s.y=s.x=null
s.ca(s.geB(),s.gfd(),s.gfh())
t.dx=s
u=new O.fQ()
u.b=new V.ak(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.x
s=u==null?s.x=D.M():u
s.n(0,t.gfv())
s=t.dx
u=s.y
s=u==null?s.y=D.M():u
s.n(0,t.ge5())
t.fr=null
return t},
cZ:function cZ(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fT:function fT(a,b){this.a=a
this.b=b},
fU:function fU(){},
fV:function fV(a,b){this.a=a
this.b=b},
fW:function fW(){},
fX:function fX(a,b){this.a=a
this.b=b},
fY:function fY(){},
fN:function fN(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d_:function d_(){},
fO:function fO(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
an:function an(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fQ:function fQ(){var _=this
_.e=_.d=_.c=_.b=null},
fR:function fR(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fS:function fS(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dj:function dj(){}},E={
ka:function(){var u,t=new E.ay()
t.a=""
t.b=!0
u=O.k7(E.ay)
t.y=u
u.b6(t.ghq(),t.ght())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sa7(0,null)
t.sb3(null)
t.saL(null)
return t},
n3:function(a,b){var u=new E.hq(a)
u.dW(a,b)
return u},
n9:function(a,b,c,d,e){var u,t,s=J.R(a)
if(!!s.$ibi)return E.lg(a,!0,!0,!0,!1)
u=W.kS()
t=u.style
t.width="100%"
t.height="100%"
s.gbO(a).n(0,u)
return E.lg(u,!0,!0,!0,!1)},
lg:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dk(),p=C.m.dL(a,"webgl2",P.mK(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.t(P.u("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.n3(p,a)
p.getParameter(3379)
p.getParameter(34076)
u=new X.dv(a)
t=new X.fw()
t.d=P.cW(P.v)
u.b=t
t=new X.h4(u)
t.f=0
t.r=V.b3()
t.x=V.b3()
t.ch=t.Q=1
u.c=t
t=new X.fF(u)
t.r=0
t.x=V.b3()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i0(u)
t.f=V.b3()
t.r=V.b3()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.c([],[[P.dh,P.a_]])
u.z=t
s=document
t.push(W.Y(s,"contextmenu",u.geP(),!1))
u.z.push(W.Y(a,"focus",u.geV(),!1))
u.z.push(W.Y(a,"blur",u.geH(),!1))
u.z.push(W.Y(s,"keyup",u.geZ(),!1))
u.z.push(W.Y(s,"keydown",u.geX(),!1))
u.z.push(W.Y(a,"mousedown",u.gf2(),!1))
u.z.push(W.Y(a,"mouseup",u.gf6(),!1))
u.z.push(W.Y(a,r,u.gf4(),!1))
t=u.z
W.k8(a)
W.k8(a)
t.push(W.Y(a,W.k8(a),u.gf8(),!1))
u.z.push(W.Y(s,r,u.geR(),!1))
u.z.push(W.Y(s,"mouseup",u.geT(),!1))
u.z.push(W.Y(s,"pointerlockchange",u.gfa(),!1))
u.z.push(W.Y(a,"touchstart",u.gfn(),!1))
u.z.push(W.Y(a,"touchend",u.gfj(),!1))
u.z.push(W.Y(a,"touchmove",u.gfl(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a6(Date.now(),!1)
q.db=0
q.cD()
return q},
eJ:function eJ(){},
ay:function ay(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hq:function hq(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hr:function hr(a){this.a=a},
hs:function hs(a){this.a=a},
ht:function ht(a){this.a=a},
dk:function dk(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
hX:function hX(a){this.a=a}},Z={
kp:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bB(c)),35044)
a.bindBuffer(b,null)
return new Z.dy(b,u)},
ae:function(a){return new Z.ba(a)},
dy:function dy(a,b){this.a=a
this.b=b},
cD:function cD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iJ:function iJ(a){this.a=a},
cE:function cE(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
ba:function ba(a){this.a=a}},D={
M:function(){var u=new D.bk()
u.d=0
return u},
eM:function eM(){},
bk:function bk(){var _=this
_.d=_.c=_.b=_.a=null},
f9:function f9(a){this.a=a},
fa:function fa(a){this.a=a},
V:function V(){this.b=null},
bm:function bm(){this.b=null},
bn:function bn(){this.b=null},
B:function B(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
f_:function f_(){},
a7:function a7(){},
cV:function cV(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
hk:function hk(){},
bt:function bt(){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},X={cF:function cF(a,b){this.a=a
this.b=b},cU:function cU(a,b){this.a=a
this.b=b},fw:function fw(){this.d=this.b=this.a=null},cY:function cY(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fF:function fF(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bp:function bp(a,b,c){this.a=a
this.b=b
this.c=c},b_:function b_(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},h4:function h4(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hl:function hl(){},dp:function dp(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},i0:function i0(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dv:function dv(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mB:function(a){var u=new X.fi(),t=new V.ak(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.ld
if(t==null){t=V.lc(0,0,1,1)
$.ld=t}u.r=t
return u},
k6:function k6(){},
fi:function fi(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d8:function d8(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hS:function hS(){}},V={
oF:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.b5(a-b,u)
return(a<0?a+u:a)+b},
D:function(a,b,c){if(a==null)return C.a.ab("null",c)
return C.a.ab(C.d.dE(Math.abs(a-0)<$.z().a?0:a,b),c+b+1)},
bG:function(a,b,c){var u,t,s,r,q,p,o=H.c([],[P.k])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.o)(a),++s){r=V.D(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.a.ab(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
d1:function(){var u=$.l4
return u==null?$.l4=V.aC(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aC:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
l3:function(a,b,c){return V.aC(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
l2:function(a,b,c,d){return V.aC(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
l1:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aC(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
b3:function(){var u=$.l7
return u==null?$.l7=new V.a4(0,0):u},
l8:function(){var u=$.b4
return u==null?$.b4=new V.T(0,0,0):u},
lc:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.db(a,b,c,d)},
cc:function(){var u=$.ls
return u==null?$.ls=new V.y(0,0,0):u},
ni:function(){var u=$.iu
return u==null?$.iu=new V.y(-1,0,0):u},
lt:function(){var u=$.iv
return u==null?$.iv=new V.y(0,1,0):u},
lu:function(){var u=$.iw
return u==null?$.iw=new V.y(0,0,1):u},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f8:function f8(a){this.a=a},
d0:function d0(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aB:function aB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
b5:function b5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
db:function db(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Q:function Q(a,b){this.a=a
this.b=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
cd:function cd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oz:function(a){P.na(C.O,new V.jX(a))},
n5:function(a){var u=new V.hD()
u.dZ(a,!0)
return u},
cG:function cG(){},
jX:function jX(a){this.a=a},
eY:function eY(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fk:function fk(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fl:function fl(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hi:function hi(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hn:function hn(a){this.a=a
this.c=null},
ho:function ho(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hD:function hD(){this.b=this.a=null},
hF:function hF(a){this.a=a},
hE:function hE(a){this.a=a},
hG:function hG(a){this.a=a}},U={
kU:function(){var u=new U.eO()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
cI:function(a){var u=new U.cH()
u.a=a
return u},
kc:function(){var u=new U.bQ()
u.bs(U.ah)
u.b6(u.ge1(),u.gff())
u.e=null
u.f=V.d1()
u.r=0
return u},
lo:function(a,b){var u,t,s,r=new U.dw(),q=U.kU()
q.sdJ(0,!0)
q.sde(6.283185307179586)
q.sdg(0)
q.sa0(0,0)
q.sdf(100)
q.sX(0)
q.scU(0.5)
r.b=q
u=r.gb8()
q.gB().n(0,u)
q=U.kU()
q.sdJ(0,!0)
q.sde(6.283185307179586)
q.sdg(0)
q.sa0(0,0)
q.sdf(100)
q.sX(0)
q.scU(0.5)
r.c=q
q.gB().n(0,u)
r.d=null
r.r=r.f=r.e=!1
r.y=r.x=2.5
r.Q=4
r.ch=r.cx=!1
r.db=r.cy=0
r.dx=null
r.dy=0
r.fx=r.fr=null
t=new X.bp(a,!1,!1)
s=r.d
r.d=t
q=new D.B("modifiers",s,t)
q.b=!0
r.W(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.B("invertX",q,!1)
q.b=!0
r.W(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.B("invertY",q,!1)
q.b=!0
r.W(q)}r.fU(b)
return r},
eO:function eO(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cH:function cH(){this.b=this.a=null},
bQ:function bQ(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ah:function ah(){},
dw:function dw(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cN:function cN(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
mN:function(a,b){var u=a.aW,t=new A.fM(b,u)
t.dY(b,u)
t.dV(a,b)
return t},
mO:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gai(a0)+a1.gai(a1)+a2.gai(a2)+a3.gai(a3)+a4.gai(a4)+a5.gai(a5)+a6.gai(a6)+a7.gai(a7)+a8.gai(a8)+"_"
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
g=$.aP()
if(k){u=$.aO()
g=new Z.ba(g.a|u.a)}if(j){u=$.aN()
g=new Z.ba(g.a|u.a)}if(i){u=$.aM()
g=new Z.ba(g.a|u.a)}return new A.fP(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
jy:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jz:function(a,b,c){var u
A.jy(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.k0(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
nO:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jy(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
nL:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jz(b,t,"ambient")
b.a+="\n"},
nM:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jz(b,t,"diffuse")
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
nP:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jz(b,t,"invDiffuse")
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
nV:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jz(b,t,"specular")
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
nR:function(a,b){var u,t,s
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
nT:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jy(b,t,"reflect")
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
nU:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jy(b,t,"refract")
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
nN:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.k0(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ad()
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
nS:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.k0(t)
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
if(typeof u!=="number")return u.ad()
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
nW:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.k0(t)
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
if(typeof u!=="number")return u.ad()
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
nQ:function(a,b){var u,t
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
nX:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.P("")
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
A.nO(a,j)
A.nL(a,j)
A.nM(a,j)
A.nP(a,j)
A.nV(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.nT(a,j)
A.nU(a,j)}A.nR(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.nN(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.nS(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.nW(a,q[o],j)
A.nQ(a,j)}q=j.a+="// === Main ===\n"
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
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
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
nY:function(a,b){var u,t,s
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
o_:function(a,b){var u
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
nZ:function(a,b){var u
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
o1:function(a,b){var u,t
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
o2:function(a,b){var u,t
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
o0:function(a,b){var u
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
o3:function(a,b){var u
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
k0:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.a6(a,1)},
km:function(a,b,c,d,e){var u=new A.i7(a,c,e)
u.f=d
P.mL(d,0,P.v)
return u},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
eC:function eC(a){this.a=a},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
fM:function fM(a,b){var _=this
_.i_=_.hZ=_.cW=_.cV=_.aW=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ic=_.ib=_.ia=_.bW=_.bV=_.bU=_.bT=_.bS=_.bR=_.i9=_.i8=_.d2=_.i7=_.i6=_.d1=_.d0=_.i5=_.i4=_.d_=_.cZ=_.i3=_.i2=_.cY=_.i1=_.i0=_.cX=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cK:function cK(a,b){this.a=a
this.b=b},
d9:function d9(a,b){this.a=a
this.b=b},
de:function de(a,b){this.a=a
this.b=b},
fP:function fP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aW=b3
_.cV=b4},
c8:function c8(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ca:function ca(a,b,c,d,e,f,g,h,i,j){var _=this
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
cb:function cb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dc:function dc(){},
dr:function dr(){},
ic:function ic(a){this.a=a},
ds:function ds(a,b,c){this.a=a
this.c=b
this.d=c},
i9:function i9(a,b,c){this.a=a
this.c=b
this.d=c},
ia:function ia(a,b,c){this.a=a
this.c=b
this.d=c},
ib:function ib(a,b,c){this.a=a
this.c=b
this.d=c},
i7:function i7(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
X:function X(a,b,c){this.a=a
this.c=b
this.d=c},
i8:function i8(a,b,c){this.a=a
this.c=b
this.d=c},
J:function J(a,b,c){this.a=a
this.c=b
this.d=c},
c7:function c7(a,b,c){this.a=a
this.c=b
this.d=c},
id:function id(a,b,c){this.a=a
this.c=b
this.d=c},
c9:function c9(a,b,c){this.a=a
this.c=b
this.d=c},
ad:function ad(a,b,c){this.a=a
this.c=b
this.d=c},
bw:function bw(a,b,c){this.a=a
this.c=b
this.d=c},
bx:function bx(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ky:function(a,b,c,d){var u=F.kk()
F.cr(u,b,c,d,a,1,0,0,1)
F.cr(u,b,c,d,a,0,1,0,3)
F.cr(u,b,c,d,a,0,0,1,2)
F.cr(u,b,c,d,a,-1,0,0,0)
F.cr(u,b,c,d,a,0,-1,0,0)
F.cr(u,b,c,d,a,0,0,-1,3)
u.ap()
return u},
jt:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cr:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.y(h,g+a1,f+a2)
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
j.d=i}m=F.jt(i)
l=F.jt(j.b)
k=F.kG(d,a0,new F.js(j,F.jt(j.c),F.jt(j.d),l,m,c),b)
if(k!=null)a.b0(k)},
lN:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.kk()
t=b?-1:1
s=-6.283185307179586/e
r=H.c([],[F.b9])
q=u.a
p=new V.y(0,0,t)
p=p.t(0,Math.sqrt(p.D(p)))
r.push(q.fR(new V.b5(a,-1,-1,-1),new V.ak(1,1,1,1),new V.T(0,0,c),new V.y(0,0,t),new V.a4(0.5,0.5),p))
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
f=F.dx(new V.b5(a,-1,-1,-1),null,new V.ak(i,g,h,1),new V.T(m*k,l*k,c),new V.y(0,0,t),new V.a4(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.n(0,f)
r.push(f)}u.d.fP(r)
return u},
kz:function(a,b,c,d,e){return F.of(b,c,1,new F.jC(a,e),d)},
of:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.kG(c,e,new F.jE(d),null)
if(u==null)return
u.ap()
u.bK()
if(b)u.b0(F.lN(3,!1,1,new F.jF(d),e))
if(a)u.b0(F.lN(1,!0,-1,new F.jG(d),e))
return u},
oA:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.jY()
t=F.ky(a,null,new F.jZ(s,1),b)
t.bK()
return t},
lX:function(){return F.lM(15,30,0.5,1,new F.k1())},
ot:function(){return F.lM(12,120,0.3,1,new F.jO(3,2))},
lM:function(a,b,c,d,e){var u=F.kG(a,b,new F.jD(e,d,b,c),null)
if(u==null)return
u.ap()
u.bK()
return u},
kG:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kk()
t=H.c([],[F.b9])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dx(g,g,new V.ak(p,0,0,1),g,g,new V.a4(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.bQ(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.dx(g,g,new V.ak(j,i,h,1),g,g,new V.a4(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.bQ(d))}}u.d.fQ(a+1,b+1,t)
return u},
bO:function(a,b,c){var u=new F.aU(),t=a.a
if(t==null)H.t(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.u("May not create a face with vertices attached to different shapes."))
u.bI(a)
u.bJ(b)
u.fC(c)
u.a.a.d.b.push(u)
u.a.a.Y()
return u},
mH:function(a,b){var u=new F.bU(),t=a.a
if(t==null)H.t(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.u("May not create a line with vertices attached to different shapes."))
u.bI(a)
u.bJ(b)
u.a.a.c.b.push(u)
u.a.a.Y()
return u},
kk:function(){var u=new F.hz(),t=new F.ix(u)
t.b=!1
t.c=H.c([],[F.b9])
u.a=t
t=new F.hC(u)
t.b=H.c([],[F.c0])
u.b=t
t=new F.hB(u)
t.b=H.c([],[F.bU])
u.c=t
t=new F.hA(u)
t.b=H.c([],[F.aU])
u.d=t
u.e=null
return u},
dx:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.b9(),r=new F.iF()
r.b=H.c([],[F.c0])
s.b=r
r=new F.iB()
u=[F.bU]
r.b=H.c([],u)
r.c=H.c([],u)
s.c=r
r=new F.iy()
u=[F.aU]
r.b=H.c([],u)
r.c=H.c([],u)
r.d=H.c([],u)
s.d=r
h=$.ma()
s.e=0
r=$.aP()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aO().a)!==0?e:t
s.x=(u&$.aN().a)!==0?b:t
s.y=(u&$.bd().a)!==0?f:t
s.z=(u&$.be().a)!==0?g:t
s.Q=(u&$.mb().a)!==0?c:t
s.ch=(u&$.bI().a)!==0?i:0
s.cx=(u&$.aM().a)!==0?a:t
return s},
js:function js(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jC:function jC(a,b){this.a=a
this.b=b},
jE:function jE(a){this.a=a},
jF:function jF(a){this.a=a},
jG:function jG(a){this.a=a},
jY:function jY(){},
jZ:function jZ(a,b){this.a=a
this.b=b},
k1:function k1(){},
jO:function jO(a,b){this.a=a
this.b=b},
jD:function jD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aU:function aU(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fb:function fb(){},
hH:function hH(){},
bU:function bU(){this.b=this.a=null},
fy:function fy(){},
i6:function i6(){},
c0:function c0(){this.a=null},
hz:function hz(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hA:function hA(a){this.a=a
this.b=null},
hB:function hB(a){this.a=a
this.b=null},
hC:function hC(a){this.a=a
this.b=null},
b9:function b9(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iH:function iH(a){this.a=a},
iG:function iG(a){this.a=a},
ix:function ix(a){this.a=a
this.c=this.b=null},
iy:function iy(){this.d=this.c=this.b=null},
iz:function iz(a,b){this.a=a
this.b=b},
iA:function iA(a,b){this.a=a
this.b=b},
iB:function iB(){this.c=this.b=null},
iD:function iD(){},
iC:function iC(){},
iE:function iE(){},
hc:function hc(){},
iF:function iF(){this.b=null}},N={
lS:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="testCanvas",c=null,b=V.n5("Test 024"),a=W.kS()
a.className="pageLargeCanvas"
a.id=d
b.a.appendChild(a)
u=[P.k]
b.cO(H.c(["Test of the Material Lighting shader with a simple spot light. ","Use Ctrl plus the mouse to move the light."],u))
b.fN(H.c(["shapes"],u))
b.cO(H.c(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(d)
if(t==null)H.t(P.u("Failed to find an element with the identifier, testCanvas."))
s=E.n9(t,!0,!0,!0,!1)
r=U.kc()
r.n(0,U.cI(V.l3(0,0,-2.5)))
r.n(0,U.lo(!0,s.x))
q=new V.U(1,1,1)
p=new D.bt()
p.r=new V.U(1,1,1)
p.ch=1.0471975511965976
p.cx=1
p.dx=p.cy=1.5707963267948966
p.db=!0
p.dy=1
p.fx=p.fr=0
p.fy=!0
p.a=V.l8()
p.b=V.lu()
p.c=V.lt()
p.d=V.ni()
o=p.f
p.f=r
r.gB().n(0,p.geJ())
n=new D.B("mover",o,p.f)
n.b=!0
p.Z(n)
if(!p.r.p(0,q)){o=p.r
p.r=q
n=new D.B("color",o,q)
n.b=!0
p.Z(n)}n=p.ch
if(!(Math.abs(n-1.0471975511965976)<$.z().a)){p.ch=1.0471975511965976
m=1/(Math.sqrt(2)*Math.tan(p.ch))
p.z=m
p.Q=m*p.cx
n=new D.B("fov",n,p.ch)
n.b=!0
p.Z(n)}n=p.cx
if(!(Math.abs(n-1)<$.z().a)){p.cx=1
m=p.z
if(typeof m!=="number")return m.A()
p.Q=m
n=new D.B("ratio",n,1)
n.b=!0
p.Z(n)}n=p.cy
if(!(Math.abs(n-0.6)<$.z().a)){p.cy=0.6
n=new D.B("cutoff",n,0.6)
n.b=!0
p.Z(n)}n=p.dx
if(!(Math.abs(n-0.5)<$.z().a)){p.dx=0.5
n=new D.B("coneAngle",n,0.5)
n.b=!0
p.Z(n)}n=$.lv
if(n==null){n=new V.cd(1,0.00390625,0.0000152587890625,0)
$.lv=n
l=n}else l=n
if(!J.C(p.e,l)){o=p.e
p.e=l
n=new D.B("shadowAdjust",o,l)
n.b=!0
p.Z(n)}n=p.dy
if(!(Math.abs(n-0.5)<$.z().a)){p.dy=0.5
n=new D.B("attenuation0",n,0.5)
n.b=!0
p.Z(n)}n=p.fr
if(!(Math.abs(n-0.05)<$.z().a)){p.fr=0.05
n=new D.B("attenuation1",n,0.05)
n.b=!0
p.Z(n)}n=p.fx
if(!(Math.abs(n-0.05)<$.z().a)){p.fx=0.05
n=new D.B("attenuation2",n,0.05)
n.b=!0
p.Z(n)}k=O.l0()
k.dx.n(0,p)
k.f.sax(0,new V.U(0,0,0))
n=k.r
n.sax(0,new V.U(0,0,0))
n=k.x
n.sax(0,new V.U(0.7,0.7,0.7))
n=k.z
n.sax(0,new V.U(0.3,0.3,0.3))
n=k.z
n.cF(new A.Z(!0,!1,!1))
n.cG(100)
j=E.ka()
j.sa7(0,F.lX())
i=E.ka()
i.saL(U.cI(V.l2(3,3,3,1)))
n=F.ky(1,c,c,1)
n.bX()
i.sa7(0,n)
h=U.kc()
h.n(0,U.lo(!1,s.x))
h.n(0,U.cI(V.l1(3.141592653589793)))
h.n(0,U.cI(V.l3(0,0,5)))
g=E.ka()
n=U.kc()
n.n(0,U.cI(V.l2(0.1,0.1,0.1,1)))
n.n(0,r)
g.saL(n)
g.sa7(0,F.kz(0,!1,!0,40,1))
n=O.l0()
m=n.f
m.sax(0,new V.U(1,1,1))
g.sb3(n)
n=new M.cN()
n.a=!0
m=O.k7(E.ay)
n.e=m
m.b6(n.geL(),n.geN())
n.y=n.x=n.r=n.f=null
f=X.mB(c)
e=new X.d8()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.saL(c)
m=e.c
if(!(Math.abs(m-1.0471975511965976)<$.z().a)){e.c=1.0471975511965976
m=new D.B("fov",m,1.0471975511965976)
m.b=!0
e.aF(m)}m=e.d
if(!(Math.abs(m-0.1)<$.z().a)){e.d=0.1
m=new D.B("near",m,0.1)
m.b=!0
e.aF(m)}m=e.e
if(!(Math.abs(m-2000)<$.z().a)){e.e=2000
m=new D.B("far",m,2000)
m.b=!0
e.aF(m)}m=n.b
if(m!==e){if(m!=null)m.gB().K(0,n.gal())
o=n.b
n.b=e
e.gB().n(0,n.gal())
m=new D.B("camera",o,n.b)
m.b=!0
n.at(m)}m=n.c
if(m!==f){if(m!=null)m.gB().K(0,n.gal())
o=n.c
n.c=f
f.gB().n(0,n.gal())
m=new D.B("target",o,n.c)
m.b=!0
n.at(m)}n.sb3(c)
n.sb3(k)
n.e.n(0,j)
n.e.n(0,i)
n.e.n(0,g)
n.b.saL(h)
m=s.d
if(m!==n){if(m!=null)m.gB().K(0,s.gcg())
s.d=n
n.gB().n(0,s.gcg())
s.ci()}n=new V.hn("shapes")
u=u.getElementById("shapes")
n.c=u
if(u==null)H.t("Failed to find shapes for RadioGroup")
n.aT(0,"Cube",new N.jP(j))
n.aT(0,"Cylinder",new N.jQ(j))
n.aT(0,"Cone",new N.jR(j))
n.aT(0,"Sphere",new N.jS(j))
n.cM(0,"Toroid",new N.jT(j),!0)
n.aT(0,"Knot",new N.jU(j))
u=s.Q
if(u==null)u=s.Q=D.M()
n=u.b
u=n==null?u.b=H.c([],[{func:1,ret:-1,args:[D.V]}]):n
u.push(new N.jV(b,k))
V.oz(s)},
jP:function jP(a){this.a=a},
jQ:function jQ(a){this.a=a},
jR:function jR(a){this.a=a},
jS:function jS(a){this.a=a},
jT:function jT(a){this.a=a},
jU:function jU(a){this.a=a},
jV:function jV(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kg.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gG:function(a){return H.c1(a)},
h:function(a){return"Instance of '"+H.e(H.c2(a))+"'"}}
J.fs.prototype={
h:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iau:1}
J.cS.prototype={
p:function(a,b){return null==b},
h:function(a){return"null"},
gG:function(a){return 0}}
J.cT.prototype={
gG:function(a){return 0},
h:function(a){return String(a)}}
J.hh.prototype={}
J.by.prototype={}
J.aX.prototype={
h:function(a){var u=a[$.lZ()]
if(u==null)return this.dS(a)
return"JavaScript function for "+H.e(J.a1(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aV.prototype={
dz:function(a,b){if(!!a.fixed$length)H.t(P.x("removeAt"))
if(b<0||b>=a.length)throw H.d(P.da(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var u
if(!!a.fixed$length)H.t(P.x("remove"))
for(u=0;u<a.length;++u)if(J.C(a[u],b)){a.splice(u,1)
return!0}return!1},
F:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.d(P.aw(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
hm:function(a){return this.k(a,"")},
hf:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.d(P.aw(a))}return u},
hg:function(a,b,c){return this.hf(a,b,c,null)},
he:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.d(P.aw(a))}throw H.d(H.fq())},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
dO:function(a,b,c){if(b<0||b>a.length)throw H.d(P.W(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.W(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.cx(a,0)])
return H.c(a.slice(b,c),[H.cx(a,0)])},
ghd:function(a){if(a.length>0)return a[0]
throw H.d(H.fq())},
gaq:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.fq())},
cP:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.d(P.aw(a))}return!1},
bq:function(a,b){if(!!a.immutable$list)H.t(P.x("sort"))
H.dd(a,0,a.length-1,b)},
U:function(a,b){var u
for(u=0;u<a.length;++u)if(J.C(a[u],b))return!0
return!1},
h:function(a){return P.kd(a,"[","]")},
gS:function(a){return new J.a2(a,a.length)},
gG:function(a){return H.c1(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.x("set length"))
if(b<0)throw H.d(P.W(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.bF(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.t(P.x("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bF(a,b))
a[b]=c},
$ii:1,
$in:1}
J.kf.prototype={}
J.a2.prototype={
gI:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.o(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bT.prototype={
h_:function(a,b){var u
if(typeof b!=="number")throw H.d(H.at(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbh(b)
if(this.gbh(a)===u)return 0
if(this.gbh(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbh:function(a){return a===0?1/a<0:a<0},
d4:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.x(""+a+".floor()"))},
ah:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.x(""+a+".round()"))},
dE:function(a,b){var u
if(b>20)throw H.d(P.W(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbh(a))return"-"+u
return u},
b4:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.W(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.T(u,u.length-1)!==41)return u
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
dU:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cI(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.cI(a,b)},
cI:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.x("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aI:function(a,b){var u
if(a>0)u=this.cH(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fG:function(a,b){if(b<0)throw H.d(H.at(b))
return this.cH(a,b)},
cH:function(a,b){return b>31?0:a>>>b},
$iK:1,
$ia9:1}
J.cR.prototype={$iv:1}
J.ft.prototype={}
J.aW.prototype={
T:function(a,b){if(b<0)throw H.d(H.bF(a,b))
if(b>=a.length)H.t(H.bF(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.d(H.bF(a,b))
return a.charCodeAt(b)},
w:function(a,b){if(typeof b!=="string")throw H.d(P.kO(b,null,null))
return a+b},
aN:function(a,b,c,d){var u,t
c=P.b6(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a4:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.W(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a2:function(a,b){return this.a4(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.at(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.d(P.da(b,null))
if(b>c)throw H.d(P.da(b,null))
if(c>a.length)throw H.d(P.da(c,null))
return a.substring(b,c)},
a6:function(a,b){return this.q(a,b,null)},
hR:function(a){return a.toLowerCase()},
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
if(c<0||c>a.length)throw H.d(P.W(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
da:function(a,b){return this.bg(a,b,0)},
h:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ik:1}
H.m.prototype={
gl:function(a){return this.a.length},
i:function(a,b){return C.a.T(this.a,b)},
$aq:function(){return[P.v]},
$ai:function(){return[P.v]},
$an:function(){return[P.v]}}
H.f5.prototype={}
H.cX.prototype={
gS:function(a){return new H.bV(this,this.gl(this))},
bo:function(a,b){return this.dR(0,b)}}
H.bV.prototype={
gI:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.cu(s),q=r.gl(s)
if(t.b!==q)throw H.d(P.aw(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.H(s,u);++t.c
return!0}}
H.fJ.prototype={
gS:function(a){return new H.fK(J.aQ(this.a),this.b)},
gl:function(a){return J.ab(this.a)},
H:function(a,b){return this.b.$1(J.ex(this.a,b))},
$ai:function(a,b){return[b]}}
H.fK.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.a=u.c.$1(t.gI(t))
return!0}u.a=null
return!1},
gI:function(a){return this.a}}
H.fL.prototype={
gl:function(a){return J.ab(this.a)},
H:function(a,b){return this.b.$1(J.ex(this.a,b))},
$acX:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.ce.prototype={
gS:function(a){return new H.iK(J.aQ(this.a),this.b)}}
H.iK.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(t.$1(u.gI(u)))return!0
return!1},
gI:function(a){var u=this.a
return u.gI(u)}}
H.cO.prototype={}
H.ii.prototype={
m:function(a,b,c){throw H.d(P.x("Cannot modify an unmodifiable list"))}}
H.dt.prototype={}
H.eQ.prototype={
h:function(a){return P.kj(this)},
m:function(a,b,c){return H.mw()},
$iO:1}
H.eR.prototype={
gl:function(a){return this.a},
be:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.be(0,b))return
return this.cu(b)},
cu:function(a){return this.b[a]},
F:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cu(s))}}}
H.i4.prototype={
aa:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hd.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fv.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.ih.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.k2.prototype={
$1:function(a){if(!!J.R(a).$ibj)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:9}
H.e6.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bL.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
ghS:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hT.prototype={}
H.hL.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ew(u)+"'"}}
H.bJ.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bJ))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.c1(this.a)
else u=typeof t!=="object"?J.cB(t):H.c1(t)
return(u^H.c1(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.c2(u))+"'")}}
H.eL.prototype={
h:function(a){return this.a}}
H.hw.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.L.prototype={
gl:function(a){return this.a},
ghl:function(a){return this.a===0},
ga3:function(a){return new H.fA(this,[H.cx(this,0)])},
be:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cr(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cr(t,b)}else return s.hi(b)},
hi:function(a){var u=this,t=u.d
if(t==null)return!1
return u.c_(u.bz(t,u.bZ(a)),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b9(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b9(r,b)
s=t==null?null:t.b
return s}else return q.hj(b)},
hj:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bz(r,s.bZ(a))
t=s.c_(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cl(u==null?s.b=s.bB():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cl(t==null?s.c=s.bB():t,b,c)}else s.hk(b,c)},
hk:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bB()
u=r.bZ(a)
t=r.bz(q,u)
if(t==null)r.bG(q,u,[r.bC(a,b)])
else{s=r.c_(t,a)
if(s>=0)t[s].b=b
else t.push(r.bC(a,b))}},
F:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.d(P.aw(u))
t=t.c}},
cl:function(a,b,c){var u=this.b9(a,b)
if(u==null)this.bG(a,b,this.bC(b,c))
else u.b=c},
es:function(){this.r=this.r+1&67108863},
bC:function(a,b){var u,t=this,s=new H.fz(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.es()
return s},
bZ:function(a){return J.cB(a)&0x3ffffff},
c_:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.C(a[t].a,b))return t
return-1},
h:function(a){return P.kj(this)},
b9:function(a,b){return a[b]},
bz:function(a,b){return a[b]},
bG:function(a,b,c){a[b]=c},
el:function(a,b){delete a[b]},
cr:function(a,b){return this.b9(a,b)!=null},
bB:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bG(t,u,t)
this.el(t,u)
return t}}
H.fz.prototype={}
H.fA.prototype={
gl:function(a){return this.a.a},
gS:function(a){var u=this.a,t=new H.fB(u,u.r)
t.c=u.e
return t}}
H.fB.prototype={
gI:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.aw(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.jK.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.jL.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jM.prototype={
$1:function(a){return this.a(a)}}
H.fu.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$in1:1}
H.bY.prototype={$ibY:1}
H.b0.prototype={$ib0:1}
H.d2.prototype={
gl:function(a){return a.length},
$iA:1,
$aA:function(){}}
H.bZ.prototype={
i:function(a,b){H.as(b,a,a.length)
return a[b]},
m:function(a,b,c){H.as(b,a,a.length)
a[b]=c},
$aq:function(){return[P.K]},
$ii:1,
$ai:function(){return[P.K]},
$in:1,
$an:function(){return[P.K]}}
H.d3.prototype={
m:function(a,b,c){H.as(b,a,a.length)
a[b]=c},
$aq:function(){return[P.v]},
$ii:1,
$ai:function(){return[P.v]},
$in:1,
$an:function(){return[P.v]}}
H.h5.prototype={
i:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.h6.prototype={
i:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.h7.prototype={
i:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.h8.prototype={
i:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.h9.prototype={
i:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.d4.prototype={
gl:function(a){return a.length},
i:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.c_.prototype={
gl:function(a){return a.length},
i:function(a,b){H.as(b,a,a.length)
return a[b]},
$ic_:1,
$ibv:1}
H.ci.prototype={}
H.cj.prototype={}
H.ck.prototype={}
H.cl.prototype={}
P.iM.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.iL.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.iN.prototype={
$0:function(){this.a.$0()}}
P.iO.prototype={
$0:function(){this.a.$0()}}
P.ec.prototype={
e7:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bE(new P.ji(this,b),0),a)
else throw H.d(P.x("`setTimeout()` not found."))},
e8:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bE(new P.jh(this,a,Date.now(),b),0),a)
else throw H.d(P.x("Periodic timer."))},
$idl:1}
P.ji.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jh.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.dU(u,q)}s.c=r
t.d.$1(s)}}
P.dz.prototype={}
P.dh.prototype={}
P.hO.prototype={}
P.dl.prototype={}
P.jr.prototype={}
P.jA.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.d7():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.h(0)
throw u}}
P.j1.prototype={
hM:function(a){var u,t,s,r=null
try{if(C.f===$.ai){a.$0()
return}P.o5(r,r,this,a)}catch(s){u=H.aa(s)
t=H.kB(s)
P.lG(r,r,this,u,t)}},
hN:function(a,b){var u,t,s,r=null
try{if(C.f===$.ai){a.$1(b)
return}P.o6(r,r,this,a,b)}catch(s){u=H.aa(s)
t=H.kB(s)
P.lG(r,r,this,u,t)}},
hO:function(a,b){return this.hN(a,b,null)},
fW:function(a){return new P.j2(this,a)},
cR:function(a,b){return new P.j3(this,a,b)}}
P.j2.prototype={
$0:function(){return this.a.hM(this.b)}}
P.j3.prototype={
$1:function(a){return this.a.hO(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iZ.prototype={
gS:function(a){var u=new P.dO(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
U:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.eh(b)
return t}},
eh:function(a){var u=this.d
if(u==null)return!1
return this.bx(this.cv(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cn(u==null?s.b=P.kq():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cn(t==null?s.c=P.kq():t,b)}else return s.ea(0,b)},
ea:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kq()
u=s.cp(b)
t=r[u]
if(t==null)r[u]=[s.bu(b)]
else{if(s.bx(t,b)>=0)return!1
t.push(s.bu(b))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fq(this.c,b)
else return this.fp(0,b)},
fp:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cv(r,b)
t=s.bx(u,b)
if(t<0)return!1
s.cJ(u.splice(t,1)[0])
return!0},
cn:function(a,b){if(a[b]!=null)return!1
a[b]=this.bu(b)
return!0},
fq:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cJ(u)
delete a[b]
return!0},
co:function(){this.r=1073741823&this.r+1},
bu:function(a){var u,t=this,s=new P.j_(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.co()
return s},
cJ:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.co()},
cp:function(a){return J.cB(a)&1073741823},
cv:function(a,b){return a[this.cp(b)]},
bx:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.C(a[t].a,b))return t
return-1}}
P.j_.prototype={}
P.dO.prototype={
gI:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.aw(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fC.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.fD.prototype={$ii:1,$in:1}
P.q.prototype={
gS:function(a){return new H.bV(a,this.gl(a))},
H:function(a,b){return this.i(a,b)},
hQ:function(a,b){var u,t,s=this,r=H.c([],[H.ol(s,a,"q",0)])
C.b.sl(r,s.gl(a))
for(u=0;u<s.gl(a);++u){t=s.i(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t}return r},
hP:function(a){return this.hQ(a,!0)},
hb:function(a,b,c,d){var u
P.b6(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
h:function(a){return P.kd(a,"[","]")}}
P.fG.prototype={}
P.fH.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.aA.prototype={
F:function(a,b){var u,t
for(u=J.aQ(this.ga3(a));u.v();){t=u.gI(u)
b.$2(t,this.i(a,t))}},
gl:function(a){return J.ab(this.ga3(a))},
h:function(a){return P.kj(a)},
$iO:1}
P.jj.prototype={
m:function(a,b,c){throw H.d(P.x("Cannot modify unmodifiable map"))}}
P.fI.prototype={
i:function(a,b){return J.cA(this.a,b)},
m:function(a,b,c){J.k3(this.a,b,c)},
F:function(a,b){J.kK(this.a,b)},
gl:function(a){return J.ab(this.a)},
h:function(a){return J.a1(this.a)},
$iO:1}
P.du.prototype={}
P.j5.prototype={
an:function(a,b){var u
for(u=J.aQ(b);u.v();)this.n(0,u.gI(u))},
h:function(a){return P.kd(this,"{","}")},
H:function(a,b){var u,t,s
P.lb(b,"index")
for(u=P.nq(this,this.r),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.d(P.H(b,this,"index",null,t))},
$ii:1}
P.dP.prototype={}
P.eh.prototype={}
P.eH.prototype={
hp:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.b6(a0,a1,b.length)
u=$.md()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.a.C(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jJ(C.a.C(b,n))
j=H.jJ(C.a.C(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.b(u,i)
h=u[i]
if(h>=0){i=C.a.T("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.P("")
g=r.a+=C.a.q(b,s,t)
r.a=g+H.br(m)
s=n
continue}}throw H.d(P.N("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.q(b,s,a1)
f=g.length
if(q>=0)P.kP(b,p,a1,q,o,f)
else{e=C.c.b5(f-1,4)+1
if(e===1)throw H.d(P.N(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aN(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.kP(b,p,a1,q,o,d)
else{e=C.c.b5(d,4)
if(e===1)throw H.d(P.N(c,b,a1))
if(e>1)b=C.a.aN(b,a1,a1,e===2?"==":"=")}return b}}
P.eI.prototype={}
P.eN.prototype={}
P.eS.prototype={}
P.f7.prototype={}
P.fo.prototype={
h:function(a){return this.a}}
P.fn.prototype={
ei:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.P("")
if(r>b)q.a+=C.a.q(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mo(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.ir.prototype={
gha:function(){return C.M}}
P.it.prototype={
bP:function(a){var u,t,s=P.b6(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jp(u)
if(t.en(a,0,s)!==s)t.cL(J.mk(a,s-1),0)
return new Uint8Array(u.subarray(0,H.nH(0,t.b,u.length)))}}
P.jp.prototype={
cL:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
en:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.T(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.C(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cL(r,C.a.C(a,p)))s=p}else if(r<=2047){q=n.b
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
P.is.prototype={
bP:function(a){var u,t,s,r,q,p,o,n,m=P.nd(!1,a,0,null)
if(m!=null)return m
u=P.b6(0,null,J.ab(a))
t=P.lI(a,0,u)
if(t>0){s=P.c5(a,0,t)
if(t===u)return s
r=new P.P(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.P("")
o=new P.jo(!1,r)
o.c=p
o.h0(a,q,u)
if(o.e>0){H.t(P.N("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.br(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jo.prototype={
h0:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.cu(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.ad()
if((r&192)!==128){q=P.N(k+C.c.b4(r,16),a,s)
throw H.d(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.b(C.v,q)
if(j<=C.v[q]){q=P.N("Overlong encoding of 0x"+C.c.b4(j,16),a,s-h-1)
throw H.d(q)}if(j>1114111){q=P.N("Character outside valid Unicode range: 0x"+C.c.b4(j,16),a,s-h-1)
throw H.d(q)}if(!l.c||j!==65279)t.a+=H.br(j)
l.c=!1}for(q=s<c;q;){p=P.lI(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.c5(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.P()
if(r<0){m=P.N("Negative UTF-8 code unit: -0x"+C.c.b4(-r,16),a,n-1)
throw H.d(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.N(k+C.c.b4(r,16),a,n-1)
throw H.d(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.au.prototype={}
P.a6.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.a6&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.c.aI(u,30))&1073741823},
h:function(a){var u=this,t=P.mx(H.mY(u)),s=P.cJ(H.mW(u)),r=P.cJ(H.mS(u)),q=P.cJ(H.mT(u)),p=P.cJ(H.mV(u)),o=P.cJ(H.mX(u)),n=P.my(H.mU(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.K.prototype={}
P.aT.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aT&&this.a===b.a},
gG:function(a){return C.c.gG(this.a)},
h:function(a){var u,t,s,r=new P.f4(),q=this.a
if(q<0)return"-"+new P.aT(0-q).h(0)
u=r.$1(C.c.a5(q,6e7)%60)
t=r.$1(C.c.a5(q,1e6)%60)
s=new P.f3().$1(q%1e6)
return""+C.c.a5(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.f3.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.f4.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bj.prototype={}
P.d7.prototype={
h:function(a){return"Throw of null."}}
P.af.prototype={
gbw:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbv:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbw()+o+u
if(!q.a)return t
s=q.gbv()
r=P.kb(q.b)
return t+s+": "+r}}
P.bs.prototype={
gbw:function(){return"RangeError"},
gbv:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fp.prototype={
gbw:function(){return"RangeError"},
gbv:function(){var u,t=this.b
if(typeof t!=="number")return t.P()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.ij.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.ie.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c4.prototype={
h:function(a){return"Bad state: "+this.a}}
P.eP.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kb(u)+"."}}
P.hg.prototype={
h:function(a){return"Out of Memory"},
$ibj:1}
P.df.prototype={
h:function(a){return"Stack Overflow"},
$ibj:1}
P.eX.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dH.prototype={
h:function(a){return"Exception: "+this.a}}
P.fh.prototype={
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
k=""}j=C.a.q(f,m,n)
return h+l+j+k+"\n"+C.a.A(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fj.prototype={}
P.v.prototype={}
P.i.prototype={
bo:function(a,b){return new H.ce(this,b,[H.kA(this,"i",0)])},
gl:function(a){var u,t=this.gS(this)
for(u=0;t.v();)++u
return u},
gaD:function(a){var u,t=this.gS(this)
if(!t.v())throw H.d(H.fq())
u=t.gI(t)
if(t.v())throw H.d(H.mE())
return u},
H:function(a,b){var u,t,s
P.lb(b,"index")
for(u=this.gS(this),t=0;u.v();){s=u.gI(u)
if(b===t)return s;++t}throw H.d(P.H(b,this,"index",null,t))},
h:function(a){return P.mD(this,"(",")")}}
P.fr.prototype={}
P.n.prototype={$ii:1}
P.O.prototype={}
P.b1.prototype={
gG:function(a){return P.a_.prototype.gG.call(this,this)},
h:function(a){return"null"}}
P.a9.prototype={}
P.a_.prototype={constructor:P.a_,$ia_:1,
p:function(a,b){return this===b},
gG:function(a){return H.c1(this)},
h:function(a){return"Instance of '"+H.e(H.c2(this))+"'"},
toString:function(){return this.h(this)}}
P.k.prototype={}
P.P.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.ip.prototype={
$2:function(a,b){var u,t,s,r=J.cv(b).da(b,"=")
if(r===-1){if(b!=="")J.k3(a,P.ku(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.q(b,0,r)
t=C.a.a6(b,r+1)
s=this.a
J.k3(a,P.ku(u,0,u.length,s,!0),P.ku(t,0,t.length,s,!0))}return a}}
P.il.prototype={
$2:function(a,b){throw H.d(P.N("Illegal IPv4 address, "+a,this.a,b))}}
P.im.prototype={
$2:function(a,b){throw H.d(P.N("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.io.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.ev(C.a.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.P()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bz.prototype={
gdI:function(){return this.b},
gbY:function(a){var u=this.c
if(u==null)return""
if(C.a.a2(u,"["))return C.a.q(u,1,u.length-1)
return u},
gbj:function(a){var u=this.d
if(u==null)return P.lz(this.a)
return u},
gc3:function(a){var u=this.f
return u==null?"":u},
gd5:function(){var u=this.r
return u==null?"":u},
dA:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a2(u,"/"))u="/"+u
s=P.ks(null,0,0,b)
return new P.bz(q,o,m,n,u,s,r.r)},
gc4:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.k
u=this.Q=new P.du(P.ln(t==null?"":t),[u,u])
t=u}return t},
gd6:function(){return this.c!=null},
gd9:function(){return this.f!=null},
gd7:function(){return this.r!=null},
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
if(!!J.R(b).$ikn)if(s.a==b.gbp())if(s.c!=null===b.gd6())if(s.b==b.gdI())if(s.gbY(s)==b.gbY(b))if(s.gbj(s)==b.gbj(b))if(s.e===b.gdt(b)){u=s.f
t=u==null
if(!t===b.gd9()){if(t)u=""
if(u===b.gc3(b)){u=s.r
t=u==null
if(!t===b.gd7()){if(t)u=""
u=u===b.gd5()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gG:function(a){var u=this.z
return u==null?this.z=C.a.gG(this.h(0)):u},
$ikn:1,
gbp:function(){return this.a},
gdt:function(a){return this.e}}
P.jk.prototype={
$1:function(a){throw H.d(P.N("Invalid port",this.a,this.b+1))}}
P.jl.prototype={
$1:function(a){return P.ei(C.V,a,C.e,!1)}}
P.jn.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.ei(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.ei(C.h,b,C.e,!0))}}}
P.jm.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aQ(b),t=this.a;u.v();)t.$2(a,u.gI(u))}}
P.ik.prototype={
gdH:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.b(o,0)
u=q.a
o=o[0]+1
t=C.a.bg(u,"?",o)
s=u.length
if(t>=0){r=P.cq(u,t+1,s,C.k,!1)
s=t}else r=p
return q.c=new P.iS("data",p,p,p,P.cq(u,o,s,C.z,!1),r,p)},
h:function(a){var u,t=this.b
if(0>=t.length)return H.b(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jv.prototype={
$1:function(a){return new Uint8Array(96)}}
P.ju.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.b(u,a)
u=u[a]
J.ml(u,0,96,b)
return u},
$S:17}
P.jw.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.C(b,s)^96
if(r>=t)return H.b(a,r)
a[r]=c}}}
P.jx.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.C(b,0),t=C.a.C(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.b(a,r)
a[r]=c}}}
P.j8.prototype={
gd6:function(){return this.c>0},
gd8:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.w()
t=this.e
if(typeof t!=="number")return H.w(t)
t=u+1<t
u=t}else u=!1
return u},
gd9:function(){var u=this.f
if(typeof u!=="number")return u.P()
return u<this.r},
gd7:function(){return this.r<this.a.length},
gcw:function(){return this.b===4&&C.a.a2(this.a,"http")},
gcz:function(){return this.b===5&&C.a.a2(this.a,"https")},
gbp:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcw())q=t.x="http"
else if(t.gcz()){t.x="https"
q="https"}else if(q===4&&C.a.a2(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a2(t.a,r)){t.x=r
q=r}else{q=C.a.q(t.a,0,q)
t.x=q}return q},
gdI:function(){var u=this.c,t=this.b+3
return u>t?C.a.q(this.a,t,u-1):""},
gbY:function(a){var u=this.c
return u>0?C.a.q(this.a,u,this.d):""},
gbj:function(a){var u,t=this
if(t.gd8()){u=t.d
if(typeof u!=="number")return u.w()
return P.ev(C.a.q(t.a,u+1,t.e),null,null)}if(t.gcw())return 80
if(t.gcz())return 443
return 0},
gdt:function(a){return C.a.q(this.a,this.e,this.f)},
gc3:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.P()
return u<t?C.a.q(this.a,u+1,t):""},
gd5:function(){var u=this.r,t=this.a
return u<t.length?C.a.a6(t,u+1):""},
gc4:function(){var u=this,t=u.f
if(typeof t!=="number")return t.P()
if(t>=u.r)return C.W
t=P.k
return new P.du(P.ln(u.gc3(u)),[t,t])},
dA:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbp(),m=n==="file",l=p.c,k=l>0?C.a.q(p.a,p.b+3,l):"",j=p.gd8()?p.gbj(p):o
l=p.c
if(l>0)u=C.a.q(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.q(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a2(t,"/"))t="/"+t
r=P.ks(o,0,0,b)
s=p.r
q=s<l.length?C.a.a6(l,s+1):o
return new P.bz(n,k,u,j,t,r,q)},
gG:function(a){var u=this.y
return u==null?this.y=C.a.gG(this.a):u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.R(b).$ikn&&this.a===b.h(0)},
h:function(a){return this.a},
$ikn:1}
P.iS.prototype={}
W.l.prototype={}
W.ey.prototype={
gl:function(a){return a.length}}
W.ez.prototype={
h:function(a){return String(a)}}
W.eA.prototype={
h:function(a){return String(a)}}
W.bg.prototype={$ibg:1}
W.bh.prototype={$ibh:1}
W.bi.prototype={
dL:function(a,b,c){var u=a.getContext(b,P.oe(c))
return u},
$ibi:1}
W.aR.prototype={
gl:function(a){return a.length}}
W.eT.prototype={
gl:function(a){return a.length}}
W.F.prototype={$iF:1}
W.bM.prototype={
gl:function(a){return a.length}}
W.eU.prototype={}
W.ac.prototype={}
W.al.prototype={}
W.eV.prototype={
gl:function(a){return a.length}}
W.eW.prototype={
gl:function(a){return a.length}}
W.eZ.prototype={
gl:function(a){return a.length}}
W.ag.prototype={$iag:1}
W.f0.prototype={
h:function(a){return String(a)}}
W.cL.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[[P.a8,P.a9]]},
$aq:function(){return[[P.a8,P.a9]]},
$ii:1,
$ai:function(){return[[P.a8,P.a9]]},
$in:1,
$an:function(){return[[P.a8,P.a9]]}}
W.cM.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaC(a))+" x "+H.e(this.gaz(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.R(b)
if(!u.$ia8)return!1
return a.left===u.gbi(b)&&a.top===u.gbl(b)&&this.gaC(a)===u.gaC(b)&&this.gaz(a)===u.gaz(b)},
gG:function(a){return W.lx(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(this.gaC(a)),C.d.gG(this.gaz(a)))},
gcS:function(a){return a.bottom},
gaz:function(a){return a.height},
gbi:function(a){return a.left},
gc7:function(a){return a.right},
gbl:function(a){return a.top},
gaC:function(a){return a.width},
$ia8:1,
$aa8:function(){return[P.a9]}}
W.f1.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[P.k]},
$aq:function(){return[P.k]},
$ii:1,
$ai:function(){return[P.k]},
$in:1,
$an:function(){return[P.k]}}
W.f2.prototype={
gl:function(a){return a.length}}
W.iQ.prototype={
gl:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var u=this.hP(this)
return new J.a2(u,u.length)},
$aq:function(){return[W.S]},
$ai:function(){return[W.S]},
$an:function(){return[W.S]}}
W.S.prototype={
gfV:function(a){return new W.iT(a)},
gbO:function(a){return new W.iQ(a,a.children)},
gcT:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.P()
if(s<0)s=-s*0
if(typeof r!=="number")return r.P()
if(r<0)r=-r*0
return new P.a8(u,t,s,r,[P.a9])},
h:function(a){return a.localName},
a9:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.kX
if(u==null){u=H.c([],[W.aE])
t=new W.d6(u)
u.push(W.lw(null))
u.push(W.ly())
$.kX=t
d=t}else d=u
u=$.kW
if(u==null){u=new W.ej(d)
$.kW=u
c=u}else{u.a=d
c=u}}if($.ax==null){u=document
t=u.implementation.createHTMLDocument("")
$.ax=t
$.k9=t.createRange()
s=$.ax.createElement("base")
s.href=u.baseURI
$.ax.head.appendChild(s)}u=$.ax
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.ax
if(!!this.$ibh)r=u.body
else{r=u.createElement(a.tagName)
$.ax.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.U(C.T,a.tagName)){$.k9.selectNodeContents(r)
q=$.k9.createContextualFragment(b)}else{r.innerHTML=b
q=$.ax.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.ax.body
if(r==null?u!=null:r!==u)J.kM(r)
c.c9(q)
document.adoptNode(q)
return q},
h3:function(a,b,c){return this.a9(a,b,c,null)},
dN:function(a,b){a.textContent=null
a.appendChild(this.a9(a,b,null,null))},
$iS:1,
gdC:function(a){return a.tagName}}
W.f6.prototype={
$1:function(a){return!!J.R(a).$iS}}
W.h.prototype={$ih:1}
W.f.prototype={
fO:function(a,b,c,d){if(c!=null)this.eb(a,b,c,!1)},
eb:function(a,b,c,d){return a.addEventListener(b,H.bE(c,1),!1)}}
W.am.prototype={$iam:1}
W.bP.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.am]},
$aq:function(){return[W.am]},
$ii:1,
$ai:function(){return[W.am]},
$in:1,
$an:function(){return[W.am]},
$ibP:1}
W.fc.prototype={
gl:function(a){return a.length}}
W.fg.prototype={
gl:function(a){return a.length}}
W.az.prototype={$iaz:1}
W.fm.prototype={
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
$aq:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]}}
W.bS.prototype={$ibS:1}
W.bo.prototype={$ibo:1}
W.fE.prototype={
h:function(a){return String(a)}}
W.fZ.prototype={
gl:function(a){return a.length}}
W.bX.prototype={$ibX:1}
W.h_.prototype={
i:function(a,b){return P.aL(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aL(u.value[1]))}},
ga3:function(a){var u=H.c([],[P.k])
this.F(a,new W.h0(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iO:1,
$aO:function(){return[P.k,null]}}
W.h0.prototype={
$2:function(a,b){return this.a.push(a)}}
W.h1.prototype={
i:function(a,b){return P.aL(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aL(u.value[1]))}},
ga3:function(a){var u=H.c([],[P.k])
this.F(a,new W.h2(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iO:1,
$aO:function(){return[P.k,null]}}
W.h2.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aD.prototype={$iaD:1}
W.h3.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aD]},
$aq:function(){return[W.aD]},
$ii:1,
$ai:function(){return[W.aD]},
$in:1,
$an:function(){return[W.aD]}}
W.ao.prototype={$iao:1}
W.a0.prototype={
gaD:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.d(P.le("No elements"))
if(t>1)throw H.d(P.le("More than one element"))
return u.firstChild},
an:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.b(t,b)
u.replaceChild(c,t[b])},
gS:function(a){var u=this.a.childNodes
return new W.cP(u,u.length)},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$aq:function(){return[W.E]},
$ai:function(){return[W.E]},
$an:function(){return[W.E]}}
W.E.prototype={
hG:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
hK:function(a,b){var u,t
try{u=a.parentNode
J.mi(u,b,a)}catch(t){H.aa(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.dQ(a):u},
ft:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.d5.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.E]},
$aq:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]}}
W.aF.prototype={$iaF:1,
gl:function(a){return a.length}}
W.hj.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aF]},
$aq:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]},
$in:1,
$an:function(){return[W.aF]}}
W.hu.prototype={
i:function(a,b){return P.aL(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aL(u.value[1]))}},
ga3:function(a){var u=H.c([],[P.k])
this.F(a,new W.hv(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iO:1,
$aO:function(){return[P.k,null]}}
W.hv.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hx.prototype={
gl:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.hI.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aG]},
$aq:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]},
$in:1,
$an:function(){return[W.aG]}}
W.aH.prototype={$iaH:1}
W.hJ.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aH]},
$aq:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$in:1,
$an:function(){return[W.aH]}}
W.aI.prototype={$iaI:1,
gl:function(a){return a.length}}
W.hM.prototype={
i:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga3:function(a){var u=H.c([],[P.k])
this.F(a,new W.hN(u))
return u},
gl:function(a){return a.length},
$iO:1,
$aO:function(){return[P.k,P.k]}}
W.hN.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ap.prototype={$iap:1}
W.di.prototype={
a9:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.br(a,b,c,d)
u=W.mz("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a0(t).an(0,new W.a0(u))
return t}}
W.hQ.prototype={
a9:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.br(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.a9(u.createElement("table"),b,c,d)
u.toString
u=new W.a0(u)
s=u.gaD(u)
s.toString
u=new W.a0(s)
r=u.gaD(u)
t.toString
r.toString
new W.a0(t).an(0,new W.a0(r))
return t}}
W.hR.prototype={
a9:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.br(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.a9(u.createElement("table"),b,c,d)
u.toString
u=new W.a0(u)
s=u.gaD(u)
t.toString
s.toString
new W.a0(t).an(0,new W.a0(s))
return t}}
W.c6.prototype={$ic6:1}
W.aJ.prototype={$iaJ:1}
W.aq.prototype={$iaq:1}
W.hU.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aq]},
$aq:function(){return[W.aq]},
$ii:1,
$ai:function(){return[W.aq]},
$in:1,
$an:function(){return[W.aq]}}
W.hV.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aJ]},
$aq:function(){return[W.aJ]},
$ii:1,
$ai:function(){return[W.aJ]},
$in:1,
$an:function(){return[W.aJ]}}
W.hY.prototype={
gl:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.bu.prototype={$ibu:1}
W.i1.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aK]},
$aq:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]},
$in:1,
$an:function(){return[W.aK]}}
W.i2.prototype={
gl:function(a){return a.length}}
W.b8.prototype={}
W.iq.prototype={
h:function(a){return String(a)}}
W.iI.prototype={
gl:function(a){return a.length}}
W.bb.prototype={
gh6:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.x("deltaY is not supported"))},
gh5:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.x("deltaX is not supported"))},
$ibb:1}
W.cf.prototype={
fu:function(a,b){return a.requestAnimationFrame(H.bE(b,1))},
em:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iR.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.F]},
$aq:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]},
$in:1,
$an:function(){return[W.F]}}
W.dC.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.R(b)
if(!u.$ia8)return!1
return a.left===u.gbi(b)&&a.top===u.gbl(b)&&a.width===u.gaC(b)&&a.height===u.gaz(b)},
gG:function(a){return W.lx(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(a.width),C.d.gG(a.height))},
gaz:function(a){return a.height},
gaC:function(a){return a.width}}
W.iW.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.az]},
$aq:function(){return[W.az]},
$ii:1,
$ai:function(){return[W.az]},
$in:1,
$an:function(){return[W.az]}}
W.dU.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.E]},
$aq:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]}}
W.j9.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aI]},
$aq:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]},
$in:1,
$an:function(){return[W.aI]}}
W.jd.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.ap]},
$aq:function(){return[W.ap]},
$ii:1,
$ai:function(){return[W.ap]},
$in:1,
$an:function(){return[W.ap]}}
W.iP.prototype={
F:function(a,b){var u,t,s,r,q
for(u=this.ga3(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.o)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga3:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.k])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.b(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aO:function(){return[P.k,P.k]}}
W.iT.prototype={
i:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga3(this).length}}
W.iU.prototype={}
W.iV.prototype={
$1:function(a){return this.a.$1(a)}}
W.cg.prototype={
e_:function(a){var u
if($.ch.ghl($.ch)){for(u=0;u<262;++u)$.ch.m(0,C.S[u],W.on())
for(u=0;u<12;++u)$.ch.m(0,C.p[u],W.oo())}},
aJ:function(a){return $.me().U(0,W.bN(a))},
ao:function(a,b,c){var u=$.ch.i(0,H.e(W.bN(a))+"::"+b)
if(u==null)u=$.ch.i(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaE:1}
W.G.prototype={
gS:function(a){return new W.cP(a,this.gl(a))}}
W.d6.prototype={
aJ:function(a){return C.b.cP(this.a,new W.hb(a))},
ao:function(a,b,c){return C.b.cP(this.a,new W.ha(a,b,c))},
$iaE:1}
W.hb.prototype={
$1:function(a){return a.aJ(this.a)}}
W.ha.prototype={
$1:function(a){return a.ao(this.a,this.b,this.c)}}
W.e1.prototype={
e4:function(a,b,c,d){var u,t,s
this.a.an(0,c)
u=b.bo(0,new W.j6())
t=b.bo(0,new W.j7())
this.b.an(0,u)
s=this.c
s.an(0,C.w)
s.an(0,t)},
aJ:function(a){return this.a.U(0,W.bN(a))},
ao:function(a,b,c){var u=this,t=W.bN(a),s=u.c
if(s.U(0,H.e(t)+"::"+b))return u.d.fS(c)
else if(s.U(0,"*::"+b))return u.d.fS(c)
else{s=u.b
if(s.U(0,H.e(t)+"::"+b))return!0
else if(s.U(0,"*::"+b))return!0
else if(s.U(0,H.e(t)+"::*"))return!0
else if(s.U(0,"*::*"))return!0}return!1},
$iaE:1}
W.j6.prototype={
$1:function(a){return!C.b.U(C.p,a)}}
W.j7.prototype={
$1:function(a){return C.b.U(C.p,a)}}
W.jf.prototype={
ao:function(a,b,c){if(this.dT(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.U(0,b)
return!1}}
W.jg.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.je.prototype={
aJ:function(a){var u=J.R(a)
if(!!u.$ic3)return!1
u=!!u.$ij
if(u&&W.bN(a)==="foreignObject")return!1
if(u)return!0
return!1},
ao:function(a,b,c){if(b==="is"||C.a.a2(b,"on"))return!1
return this.aJ(a)},
$iaE:1}
W.cP.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cA(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gI:function(a){return this.d}}
W.aE.prototype={}
W.j4.prototype={}
W.ej.prototype={
c9:function(a){new W.jq(this).$2(a,null)},
aS:function(a,b){if(b==null)J.kM(a)
else b.removeChild(a)},
fA:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mm(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.aa(r)}t="element unprintable"
try{t=J.a1(a)}catch(r){H.aa(r)}try{s=W.bN(a)
this.fz(a,b,p,t,s,o,n)}catch(r){if(H.aa(r) instanceof P.af)throw r
else{this.aS(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fz:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aS(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aJ(a)){p.aS(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.ao(a,"is",g)){p.aS(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga3(f)
t=H.c(u.slice(0),[H.cx(u,0)])
for(s=f.ga3(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.b(t,s)
r=t[s]
if(!p.a.ao(a,J.mp(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.R(a).$ic6)p.c9(a.content)}}
W.jq.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fA(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aS(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aa(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dB.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.cm.prototype={}
W.cn.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e7.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.co.prototype={}
W.cp.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
P.ja.prototype={
d3:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
c8:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.R(a)
if(!!u.$ia6)return new Date(a.a)
if(!!u.$in1)throw H.d(P.ig("structured clone of RegExp"))
if(!!u.$iam)return a
if(!!u.$ibg)return a
if(!!u.$ibP)return a
if(!!u.$ibS)return a
if(!!u.$ibY||!!u.$ib0||!!u.$ibX)return a
if(!!u.$iO){t=p.d3(a)
s=p.b
r=s.length
if(t>=r)return H.b(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.b(s,t)
s[t]=q
u.F(a,new P.jc(o,p))
return o.a}if(!!u.$in){t=p.d3(a)
o=p.b
if(t>=o.length)return H.b(o,t)
q=o[t]
if(q!=null)return q
return p.h2(a,t)}throw H.d(P.ig("structured clone of other type"))},
h2:function(a,b){var u,t=J.cu(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.b(q,b)
q[b]=r
for(u=0;u<s;++u){q=this.c8(t.i(a,u))
if(u>=r.length)return H.b(r,u)
r[u]=q}return r}}
P.jc.prototype={
$2:function(a,b){this.a.a[a]=this.b.c8(b)},
$S:3}
P.jB.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jb.prototype={}
P.fd.prototype={
gba:function(){var u=this.b,t=H.kA(u,"q",0)
return new H.fJ(new H.ce(u,new P.fe(),[t]),new P.ff(),[t,W.S])},
m:function(a,b,c){var u=this.gba()
J.mn(u.b.$1(J.ex(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.ab(this.gba().a)},
i:function(a,b){var u=this.gba()
return u.b.$1(J.ex(u.a,b))},
gS:function(a){var u=P.l_(this.gba(),!1,W.S)
return new J.a2(u,u.length)},
$aq:function(){return[W.S]},
$ai:function(){return[W.S]},
$an:function(){return[W.S]}}
P.fe.prototype={
$1:function(a){return!!J.R(a).$iS}}
P.ff.prototype={
$1:function(a){return H.r(a,"$iS")}}
P.j0.prototype={
gc7:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.w(t)
return u+t},
gcS:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.w(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.R(b)
if(!!u.$ia8){t=q.a
if(t==u.gbi(b)){s=q.b
if(s==u.gbl(b)){r=q.c
if(typeof t!=="number")return t.w()
if(typeof r!=="number")return H.w(r)
if(t+r===u.gc7(b)){t=q.d
if(typeof s!=="number")return s.w()
if(typeof t!=="number")return H.w(t)
u=s+t===u.gcS(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u=this,t=u.a,s=J.cB(t),r=u.b,q=J.cB(r),p=u.c
if(typeof t!=="number")return t.w()
if(typeof p!=="number")return H.w(p)
p=C.c.gG(t+p)
t=u.d
if(typeof r!=="number")return r.w()
if(typeof t!=="number")return H.w(t)
t=C.c.gG(r+t)
return P.np(P.iY(P.iY(P.iY(P.iY(0,s),q),p),t))}}
P.a8.prototype={
gbi:function(a){return this.a},
gbl:function(a){return this.b},
gaC:function(a){return this.c},
gaz:function(a){return this.d}}
P.aY.prototype={$iaY:1}
P.fx.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){return this.i(a,b)},
$aq:function(){return[P.aY]},
$ii:1,
$ai:function(){return[P.aY]},
$in:1,
$an:function(){return[P.aY]}}
P.b2.prototype={$ib2:1}
P.he.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){return this.i(a,b)},
$aq:function(){return[P.b2]},
$ii:1,
$ai:function(){return[P.b2]},
$in:1,
$an:function(){return[P.b2]}}
P.hm.prototype={
gl:function(a){return a.length}}
P.c3.prototype={$ic3:1}
P.hP.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){return this.i(a,b)},
$aq:function(){return[P.k]},
$ii:1,
$ai:function(){return[P.k]},
$in:1,
$an:function(){return[P.k]}}
P.j.prototype={
gbO:function(a){return new P.fd(a,new W.a0(a))},
a9:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.aE])
p.push(W.lw(null))
p.push(W.ly())
p.push(new W.je())
c=new W.ej(new W.d6(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).h3(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a0(s)
q=p.gaD(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ij:1}
P.b7.prototype={$ib7:1}
P.i3.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){return this.i(a,b)},
$aq:function(){return[P.b7]},
$ii:1,
$ai:function(){return[P.b7]},
$in:1,
$an:function(){return[P.b7]}}
P.dM.prototype={}
P.dN.prototype={}
P.dX.prototype={}
P.dY.prototype={}
P.e8.prototype={}
P.e9.prototype={}
P.ef.prototype={}
P.eg.prototype={}
P.bv.prototype={$ii:1,
$ai:function(){return[P.v]},
$in:1,
$an:function(){return[P.v]}}
P.eD.prototype={
gl:function(a){return a.length}}
P.eE.prototype={
i:function(a,b){return P.aL(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aL(u.value[1]))}},
ga3:function(a){var u=H.c([],[P.k])
this.F(a,new P.eF(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iO:1,
$aO:function(){return[P.k,null]}}
P.eF.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eG.prototype={
gl:function(a){return a.length}}
P.bf.prototype={}
P.hf.prototype={
gl:function(a){return a.length}}
P.dA.prototype={}
P.hK.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return P.aL(a.item(b))},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){return this.i(a,b)},
$aq:function(){return[[P.O,,,]]},
$ii:1,
$ai:function(){return[[P.O,,,]]},
$in:1,
$an:function(){return[[P.O,,,]]}}
P.e4.prototype={}
P.e5.prototype={}
T.av.prototype={
aA:function(a,b){return!0},
h:function(a){return"all"}}
T.cQ.prototype={
aA:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)if(u[s].aA(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.aZ.prototype={}
T.a3.prototype={
aA:function(a,b){return!this.dP(0,b)},
h:function(a){return"!["+this.cd(0)+"]"}}
T.hp.prototype={
aA:function(a,b){return this.a<=b&&this.b>=b},
h:function(a){var u=H.br(this.a),t=H.br(this.b)
return u+".."+t}}
T.hy.prototype={
dX:function(a){var u,t
if(a.a.length<=0)throw H.d(P.u("May not create a Set with zero characters."))
u=new H.L([P.v,P.au])
for(t=new H.bV(a,a.gl(a));t.v();)u.m(0,t.d,!0)
this.a=u},
aA:function(a,b){return this.a.be(0,b)},
h:function(a){var u=this.a
return P.c5(u.ga3(u),0,null)}}
R.dg.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.dq(this.a.j(0,b))
r.a=H.c([],[T.aZ])
r.c=!1
this.c.push(r)
return r},
hc:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.aA(0,a))return r}return},
h:function(a){return this.b}}
R.dm.prototype={
h:function(a){var u=H.kF(this.b,"\n","\\n"),t=H.kF(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.dn.prototype={
aB:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.o)(c),++t){s=c[t]
this.c.m(0,s,b)}},
h:function(a){return this.b}}
R.hZ.prototype={
j:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.dg(this,b)
u.c=H.c([],[R.dq])
this.a.m(0,b,u)}return u},
N:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.dn(a)
u=P.k
t.c=new H.L([u,u])
this.b.m(0,a,t)}return t},
dF:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.c([],[R.dm]),k=this.c,j=[P.v],i=H.c([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)l.push(t)
return l}r=C.a.C(a,s)
q=k.hc(r)
if(q==null){if(t==null){i.push(r)
p=P.c5(i,0,m)
throw H.d(P.u("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}l.push(t)
s=t.c+1
i=H.c([],j)
k=this.c
t=m}else{if(!q.c)i.push(r)
k=q.b
if(k.d!=null){p=P.c5(i,0,m)
o=k.d
n=o.c.i(0,p)
t=new R.dm(n==null?o.b:n,p,s)}++s}}}}
R.dq.prototype={
h:function(a){return this.b.b+": "+this.cd(0)}}
O.aS.prototype={
bs:function(a){this.a=H.c([],[a])
this.c=this.b=null},
ca:function(a,b,c){this.b=b
this.c=a},
b6:function(a,b){return this.ca(a,null,b)},
fc:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
eA:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.a2(u,u.length)},
H:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.kA(s,"aS",0)]
if(s.fc(H.c([b],r))){u=s.a
t=u.length
u.push(b)
s.eA(t,H.c([b],r))}},
$ii:1}
O.bW.prototype={
gl:function(a){return this.a.length},
gB:function(){var u=this.b
return u==null?this.b=D.M():u},
aE:function(){var u=this.b
if(u!=null)u.J(null)},
ga1:function(a){var u=this.a
if(u.length>0)return C.b.gaq(u)
else return V.d1()},
dv:function(a){var u=this.a
if(a==null)u.push(V.d1())
else u.push(a)
this.aE()},
c2:function(){var u=this.a
if(u.length>0){u.pop()
this.aE()}}}
E.eJ.prototype={}
E.ay.prototype={
cm:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.a2(u,u.length);u.v();){t=u.d
if(t.f==null)t.cm()}},
sa7:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gB().K(0,s.gdm())
u=s.c
if(u!=null)u.gB().n(0,s.gdm())
t=new D.B("shape",r,s.c)
t.b=!0
s.af(t)}},
sb3:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gB().K(0,s.gdq())
u=s.f
s.f=a
if(a!=null)a.gB().n(0,s.gdq())
s.cm()
t=new D.B("technique",u,s.f)
t.b=!0
s.af(t)}},
saL:function(a){var u,t,s=this
if(!J.C(s.r,a)){u=s.r
if(u!=null)u.gB().K(0,s.gdk())
if(a!=null)a.gB().n(0,s.gdk())
s.r=a
t=new D.B("mover",u,a)
t.b=!0
s.af(t)}},
as:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aP(0,b,s):null
if(!J.C(q,s.x)){u=s.x
s.x=q
t=new D.B("matrix",u,q)
t.b=!0
s.af(t)}r=s.f
if(r!=null)r.as(0,b)
for(r=s.y.a,r=new J.a2(r,r.length);r.v();)r.d.as(0,b)},
aM:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.ga1(s))
else s.a.push(r.A(0,s.ga1(s)))
s.aE()
a.dw(t.f)
s=a.dy
u=(s&&C.b).gaq(s)
if(u!=null&&t.d!=null)u.hJ(a,t)
for(s=t.y.a,s=new J.a2(s,s.length);s.v();)s.d.aM(a)
a.du()
a.dx.c2()},
af:function(a){var u=this.z
if(u!=null)u.J(a)},
Y:function(){return this.af(null)},
dn:function(a){this.e=null
this.af(a)},
hw:function(){return this.dn(null)},
dr:function(a){this.af(a)},
hx:function(){return this.dr(null)},
dl:function(a){this.af(a)},
hv:function(){return this.dl(null)},
dj:function(a){this.af(a)},
hs:function(){return this.dj(null)},
hr:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdi(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bk()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.Y()},
hu:function(a,b){var u,t
for(u=b.gS(b),t=this.gdi();u.v();)u.gI(u).gB().K(0,t)
this.Y()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hq.prototype={
dW:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a6(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bW()
t=[V.aB]
u.a=H.c([],t)
u.gB().n(0,new E.hr(s))
s.cy=u
u=new O.bW()
u.a=H.c([],t)
u.gB().n(0,new E.hs(s))
s.db=u
u=new O.bW()
u.a=H.c([],t)
u.gB().n(0,new E.ht(s))
s.dx=u
u=H.c([],[O.dj])
s.dy=u
u.push(null)
s.fr=new H.L([P.k,A.dc])},
ghF:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga1(s)
u=t.db
u=t.z=s.A(0,u.ga1(u))
s=u}return s},
dw:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gaq(u):a)},
du:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.hr.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hs.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.ht.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dk.prototype={
cj:function(a){this.dB()},
ci:function(){return this.cj(null)},
ghh:function(){var u,t=this,s=Date.now(),r=C.c.a5(P.kV(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a6(s,!1)
return u/r},
cD:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.A()
if(typeof r!=="number")return H.w(r)
u=C.d.d4(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.A()
t=C.d.d4(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lh(C.n,s.ghL())}},
dB:function(){if(!this.cx){this.cx=!0
var u=window
C.D.em(u)
C.D.fu(u,W.lJ(new E.hX(this),P.a9))}},
hI:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cD()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a6(r,!1)
s.y=P.kV(r-s.r.a).a*0.000001
r=s.cy
C.b.sl(r.a,0)
r.aE()
r=s.db
C.b.sl(r.a,0)
r.aE()
r=s.dx
C.b.sl(r.a,0)
r.aE()
r=s.dy;(r&&C.b).sl(r,0)
s.dy.push(null)
o.aM(p.e)}s=p.Q
if(s!=null)s.J(null)}catch(q){u=H.aa(q)
t=H.kB(q)
P.kE("Error: "+H.e(u))
P.kE("Stack: "+H.e(t))
throw H.d(u)}}}
E.hX.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.hI()}}}
Z.dy.prototype={}
Z.cD.prototype={
bc:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aa(s)
t=P.u('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.d(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.iJ.prototype={}
Z.cE.prototype={
aK:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bc:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bc(a)},
dG:function(a){var u,t,s
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
h:function(a){var u,t,s,r,q=[P.k],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)p.push(u[s].h(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a1(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.k(p,", ")+"\nAttrs:   "+C.b.k(r,", ")}}
Z.bl.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.c2(this.c))+"'")+"]"}}
Z.ba.prototype={
gcc:function(a){var u=this.a,t=(u&$.aP().a)!==0?3:0
if((u&$.aO().a)!==0)t+=3
if((u&$.aN().a)!==0)t+=3
if((u&$.bd().a)!==0)t+=2
if((u&$.be().a)!==0)t+=3
if((u&$.cy().a)!==0)t+=3
if((u&$.cz().a)!==0)t+=4
if((u&$.bI().a)!==0)++t
return(u&$.aM().a)!==0?t+4:t},
fT:function(a){var u,t=$.aP(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aO()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aN()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bd()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.be()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cy()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cz()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bI()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aM()
if((s&t.a)!==0)if(u===a)return t
return $.mc()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ba))return!1
return this.a===b.a},
h:function(a){var u=H.c([],[P.k]),t=this.a
if((t&$.aP().a)!==0)u.push("Pos")
if((t&$.aO().a)!==0)u.push("Norm")
if((t&$.aN().a)!==0)u.push("Binm")
if((t&$.bd().a)!==0)u.push("Txt2D")
if((t&$.be().a)!==0)u.push("TxtCube")
if((t&$.cy().a)!==0)u.push("Clr3")
if((t&$.cz().a)!==0)u.push("Clr4")
if((t&$.bI().a)!==0)u.push("Weight")
if((t&$.aM().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.k(u,"|")}}
D.eM.prototype={}
D.bk.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.c([],[{func:1,ret:-1,args:[D.V]}]):u).push(b)},
K:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.U(s,b)
if(s===!0){s=t.a
u=(s&&C.b).K(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.U(s,b)
if(s===!0){s=t.b
u=(s&&C.b).K(s,b)||u}return u},
J:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.b.F(P.l_(u,!0,{func:1,ret:-1,args:[D.V]}),new D.f9(q))
u=r.b
if(u!=null){r.b=H.c([],[{func:1,ret:-1,args:[D.V]}])
C.b.F(u,new D.fa(q))}return!0},
ag:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.J(u)}}}}
D.f9.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fa.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.V.prototype={}
D.bm.prototype={}
D.bn.prototype={}
D.B.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cF.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cF))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.cU.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cU))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.fw.prototype={
hC:function(a){this.d.n(0,a.a)
return!1},
hy:function(a){this.d.K(0,a.a)
return!1}}
X.cY.prototype={}
X.fF.prototype={
aQ:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.A()
u=b.b
t=q.ch
if(typeof u!=="number")return u.A()
s=new V.a4(o.a+n*m,o.b+u*t)
t=q.a.gbd()
r=new X.b_(a,V.b3(),q.x,t,s)
r.b=!0
q.z=new P.a6(p,!1)
q.x=s
return r},
c1:function(a,b){this.r=a.a
return!1},
b2:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dM()
if(typeof u!=="number")return u.ad()
this.r=(u&~t)>>>0
return!1},
b1:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.aQ(a,b))
return!0},
hD:function(a){return!1},
f1:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cY(c,r.a.gbd(),b)
s.b=!0
t.J(s)
r.y=new P.a6(u,!1)
r.x=V.b3()}}
X.bp.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bp))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b_.prototype={}
X.h4.prototype={
by:function(a,b,c){var u=this,t=new P.a6(Date.now(),!1),s=u.a.gbd(),r=new X.b_(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c1:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.J(this.by(a,b,!0))
return!0},
b2:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dM()
if(typeof t!=="number")return t.ad()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.J(u.by(a,b,!0))
return!0},
b1:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.by(a,b,!1))
return!0},
hE:function(a,b){return!1}}
X.hl.prototype={}
X.dp.prototype={}
X.i0.prototype={
aQ:function(a,b){var u=this,t=new P.a6(Date.now(),!1),s=a.length>0?a[0]:V.b3(),r=u.a.gbd(),q=new X.dp(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hB:function(a){var u=this.b
if(u==null)return!1
u.J(this.aQ(a,!0))
return!0},
hz:function(a){var u=this.c
if(u==null)return!1
u.J(this.aQ(a,!0))
return!0},
hA:function(a){var u=this.d
if(u==null)return!1
u.J(this.aQ(a,!1))
return!0}}
X.dv.prototype={
gbd:function(){var u=this.a,t=C.m.gcT(u).c
t.toString
u=C.m.gcT(u).d
u.toString
return V.lc(0,0,t,u)},
cs:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cU(u,new X.bp(t,a.altKey,a.shiftKey))},
aH:function(a){a.shiftKey},
bH:function(a){a.shiftKey},
aw:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.O()
u=t.top
if(typeof r!=="number")return r.O()
return new V.a4(s-q,r-u)},
aR:function(a){return new V.Q(a.movementX,a.movementY)},
bD:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a4])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=C.d.ah(r.pageX)
C.d.ah(r.pageY)
p=o.left
C.d.ah(r.pageX)
n.push(new V.a4(q-p,C.d.ah(r.pageY)-o.top))}return n},
au:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cF(u,new X.bp(t,a.altKey,a.shiftKey))},
bA:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.O()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.O()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eW:function(a){this.f=!0},
eI:function(a){this.f=!1},
eQ:function(a){if(this.f&&this.bA(a))a.preventDefault()},
f_:function(a){var u
if(!this.f)return
u=this.cs(a)
this.b.hC(u)},
eY:function(a){var u
if(!this.f)return
u=this.cs(a)
this.b.hy(u)},
f3:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aH(a)
if(r.x){u=r.au(a)
t=r.aR(a)
if(r.d.c1(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.au(a)
s=r.aw(a)
if(r.c.c1(u,s))a.preventDefault()},
f7:function(a){var u,t,s,r=this
r.aH(a)
u=r.au(a)
if(r.x){t=r.aR(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(r.r)return
s=r.aw(a)
if(r.c.b2(u,s))a.preventDefault()},
eU:function(a){var u,t,s,r=this
if(!r.bA(a)){r.aH(a)
u=r.au(a)
if(r.x){t=r.aR(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(r.r)return
s=r.aw(a)
if(r.c.b2(u,s))a.preventDefault()}},
f5:function(a){var u,t,s,r=this
r.aH(a)
u=r.au(a)
if(r.x){t=r.aR(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(r.r)return
s=r.aw(a)
if(r.c.b1(u,s))a.preventDefault()},
eS:function(a){var u,t,s,r=this
if(!r.bA(a)){r.aH(a)
u=r.au(a)
if(r.x){t=r.aR(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(r.r)return
s=r.aw(a)
if(r.c.b1(u,s))a.preventDefault()}},
f9:function(a){var u,t,s=this
s.aH(a)
u=new V.Q((a&&C.C).gh5(a),C.C.gh6(a)).t(0,180)
if(s.x){if(s.d.hD(u))a.preventDefault()
return}if(s.r)return
t=s.aw(a)
if(s.c.hE(u,t))a.preventDefault()},
fb:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.au(s.y)
t=s.aw(s.y)
s.d.f1(u,t,r)}},
fo:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bH(a)
u=t.bD(a)
if(t.e.hB(u))a.preventDefault()},
fk:function(a){var u
this.bH(a)
u=this.bD(a)
if(this.e.hz(u))a.preventDefault()},
fm:function(a){var u
this.bH(a)
u=this.bD(a)
if(this.e.hA(u))a.preventDefault()}}
D.f_.prototype={$ia7:1}
D.a7.prototype={}
D.cV.prototype={
Z:function(a){var u=this.x
if(u!=null)u.J(a)},
cB:function(a){var u=this.y
if(u!=null)u.J(a)},
f0:function(){return this.cB(null)},
fe:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(s==null||this.e0(s))return!1}return!0},
eC:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcA(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q instanceof D.bt)this.r.push(q)
p=q.go
if(p==null){p=new D.bk()
p.d=0
q.go=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}u=new D.bm()
u.b=!0
this.Z(u)},
fi:function(a,b){var u,t,s
for(u=b.gS(b),t=this.gcA();u.v();){s=u.gI(u)
C.b.K(this.e,s)
s.gB().K(0,t)}u=new D.bn()
u.b=!0
this.Z(u)},
e0:function(a){var u=C.b.U(this.r,a)
return u},
$ai:function(){return[D.a7]},
$aaS:function(){return[D.a7]}}
D.hk.prototype={$ia7:1}
D.bt.prototype={
Z:function(a){var u=this.go
if(u!=null)u.J(a)},
eK:function(){return this.Z(null)},
gae:function(){return 12},
$ia7:1}
V.U.prototype={
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
V.ak.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ak))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.f8.prototype={}
V.d0.prototype={
ac:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.K])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d0))return!1
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
V.aB.prototype={
ac:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.K])
return t},
dc:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.z().a)return V.d1()
u=1/b1
t=-n
s=-a0
return V.aC((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
A:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aC(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bn:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.y(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bm:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.T(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aB))return!1
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
M:function(){return this.E("")}}
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
w:function(a,b){return new V.T(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a,b){return new V.T(this.a-b.a,this.b-b.b,this.c-b.c)},
A:function(a,b){return new V.T(this.a*b,this.b*b,this.c*b)},
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
V.b5.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b5))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.db.prototype={
gar:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.db))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.Q.prototype={
aY:function(a){return Math.sqrt(this.D(this))},
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
return new V.Q(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.z().a){u=$.lp
return u==null?$.lp=new V.Q(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.Q(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
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
V.y.prototype={
aY:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c0:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.y(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
ay:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.y(u*t-s*r,s*q-p*t,p*r-u*q)},
w:function(a,b){return new V.y(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a){return new V.y(-this.a,-this.b,-this.c)},
A:function(a,b){return new V.y(this.a*b,this.b*b,this.c*b)},
t:function(a,b){if(Math.abs(b-0)<$.z().a)return V.cc()
return new V.y(this.a/b,this.b/b,this.c/b)},
dd:function(){var u=$.z().a
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
V.cd.prototype={
aY:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cd))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
U.eO.prototype={
bt:function(a){var u=V.oF(a,this.c,this.b)
return u},
gB:function(){var u=this.y
return u==null?this.y=D.M():u},
W:function(a){var u=this.y
if(u!=null)u.J(a)},
sdJ:function(a,b){},
sde:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.z().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bt(u)}s=new D.B("maximumLocation",s,t.b)
s.b=!0
t.W(s)}},
sdg:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.z().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bt(u)}s=new D.B("minimumLocation",s,t.c)
s.b=!0
t.W(s)}},
sa0:function(a,b){var u,t=this
b=t.bt(b)
u=t.d
if(!(Math.abs(u-b)<$.z().a)){t.d=b
u=new D.B("location",u,b)
u.b=!0
t.W(u)}},
sdf:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.z().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.B("maximumVelocity",r,a)
r.b=!0
s.W(r)}},
sX:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.z().a)){u.f=a
t=new D.B("velocity",t,a)
t.b=!0
u.W(t)}},
scU:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.z().a)){this.x=a
u=new D.B("dampening",u,a)
u.b=!0
this.W(u)}},
as:function(a,b){var u,t,s,r=this,q=r.f,p=$.z().a
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
u=s}r.sX(u)}}}
U.cH.prototype={
gB:function(){var u=this.b
return u==null?this.b=D.M():u},
aP:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cH))return!1
return J.C(this.a,b.a)},
h:function(a){return"Constant: "+this.a.E("          ")}}
U.bQ.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.M():u},
W:function(a){var u=this.e
if(u!=null)u.J(a)},
ak:function(){return this.W(null)},
e2:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gb8(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.gB()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.bm()
u.b=!0
this.W(u)},
fg:function(a,b){var u,t
for(u=b.gS(b),t=this.gb8();u.v();)u.gI(u).gB().K(0,t)
u=new D.bn()
u.b=!0
this.W(u)},
aP:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.P()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a2(r,r.length),u=null;r.v();){q=r.d
if(q!=null){t=q.aP(0,b,c)
if(t!=null)u=u==null?t:t.A(0,u)}}s.f=u==null?V.d1():u
r=s.e
if(r!=null)r.ag(0)}return s.f},
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
$ai:function(){return[U.ah]},
$aaS:function(){return[U.ah]},
$iah:1}
U.ah.prototype={}
U.dw.prototype={
gB:function(){var u=this.fx
return u==null?this.fx=D.M():u},
W:function(a){var u=this.fx
if(u!=null)u.J(a)},
ak:function(){return this.W(null)},
fU:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.M():t
u.n(0,s.geu())
u=s.a.c
t=u.d
u=t==null?u.d=D.M():t
u.n(0,s.gew())
u=s.a.c
t=u.c
u=t==null?u.c=D.M():t
u.n(0,s.gey())
u=s.a.d
t=u.f
u=t==null?u.f=D.M():t
u.n(0,s.geo())
u=s.a.d
t=u.d
u=t==null?u.d=D.M():t
u.n(0,s.geq())
u=s.a.e
t=u.b
u=t==null?u.b=D.M():t
u.n(0,s.gfL())
u=s.a.e
t=u.d
u=t==null?u.d=D.M():t
u.n(0,s.gfJ())
u=s.a.e
t=u.c
u=t==null?u.c=D.M():t
u.n(0,s.gfH())
return!0},
am:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.R()
u=-u}if(this.r){if(typeof t!=="number")return t.R()
t=-t}return new V.Q(u,t)},
ev:function(a){var u=this
H.r(a,"$ib_")
if(!J.C(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
ex:function(a){var u,t,s,r,q,p,o,n=this
H.r(a,"$ib_")
if(!n.cx)return
if(n.ch){u=a.d.O(0,a.y)
u=new V.Q(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.w(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.O(0,a.y)
u=n.am(new V.Q(t.a,t.b).A(0,2).t(0,u.gar()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.R()
s=n.y
if(typeof s!=="number")return H.w(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.R()
t=n.x
if(typeof t!=="number")return H.w(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.O(0,a.y)
r=n.am(new V.Q(s.a,s.b).A(0,2).t(0,u.gar()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa0(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.O(0,a.z)
n.dx=n.am(new V.Q(t.a,t.b).A(0,2).t(0,u.gar()))}n.ak()},
ez:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.R()
s=r.y
if(typeof s!=="number")return H.w(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.R()
u=r.x
if(typeof u!=="number")return H.w(u)
s.sX(-t*10*u)
r.ak()}},
ep:function(a){var u=this
if(H.r(a,"$icY").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
er:function(a){var u,t,s,r,q,p,o,n=this
H.r(a,"$ib_")
if(!J.C(n.d,a.x.b))return
u=a.c
t=a.d
s=t.O(0,a.y)
r=n.am(new V.Q(s.a,s.b).A(0,2).t(0,u.gar()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa0(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.O(0,a.z)
n.dx=n.am(new V.Q(t.a,t.b).A(0,2).t(0,u.gar()))
n.ak()},
fM:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fK:function(a){var u,t,s,r,q,p,o,n=this
H.r(a,"$idp")
if(!n.cx)return
if(n.ch){u=a.d.O(0,a.y)
u=new V.Q(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.w(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.O(0,a.y)
u=n.am(new V.Q(t.a,t.b).A(0,2).t(0,u.gar()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.R()
s=n.y
if(typeof s!=="number")return H.w(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.R()
t=n.x
if(typeof t!=="number")return H.w(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.O(0,a.y)
r=n.am(new V.Q(s.a,s.b).A(0,2).t(0,u.gar()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa0(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.O(0,a.z)
n.dx=n.am(new V.Q(t.a,t.b).A(0,2).t(0,u.gar()))}n.ak()},
fI:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.R()
s=r.y
if(typeof s!=="number")return H.w(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.R()
u=r.x
if(typeof u!=="number")return H.w(u)
s.sX(-t*10*u)
r.ak()}},
aP:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.dy=p
u=b.y
r.c.as(0,u)
r.b.as(0,u)
q=V.l1(r.b.d)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.A(0,V.aC(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iah:1}
M.cN.prototype={
at:function(a){var u=this.y
if(u!=null)u.J(a)},
e3:function(){return this.at(null)},
eM:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gal(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bk()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.bm()
u.b=!0
this.at(u)},
eO:function(a,b){var u,t
for(u=b.gS(b),t=this.gal();u.v();)u.gI(u).gB().K(0,t)
u=new D.bn()
u.b=!0
this.at(u)},
sb3:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gB().K(0,t.gal())
u=t.d
t.d=a
if(a!=null)a.gB().n(0,t.gal())
s=new D.B("technique",u,t.d)
s.b=!0
t.at(s)}},
gB:function(){var u=this.y
return u==null?this.y=D.M():u},
aM:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.dw(a1.d)
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
if(typeof s!=="number")return H.w(s)
o=C.d.ah(p*s)
p=q.b
if(typeof r!=="number")return H.w(r)
n=C.d.ah(p*r)
p=C.d.ah(q.c*s)
a2.c=p
q=C.d.ah(q.d*r)
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
i=V.aC(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.dv(i)
t=$.l6
if(t==null){t=V.l8()
q=V.lt()
p=$.lq
if(p==null)p=$.lq=new V.y(0,0,-1)
h=p.t(0,Math.sqrt(p.D(p)))
q=q.ay(h)
g=q.t(0,Math.sqrt(q.D(q)))
f=h.ay(g)
e=new V.y(t.a,t.b,t.c)
d=g.R(0).D(e)
c=f.R(0).D(e)
b=h.R(0).D(e)
t=V.aC(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.l6=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.aP(0,a2,u)
if(a0!=null)a=a0.A(0,a)}a2.db.dv(a)
u=a1.d
if(u!=null)u.as(0,a2)
for(u=a1.e.a,u=new J.a2(u,u.length);u.v();)u.d.as(0,a2)
for(u=a1.e.a,u=new J.a2(u,u.length);u.v();)u.d.aM(a2)
a1.b.toString
a2.cy.c2()
a2.db.c2()
a1.c.toString
a2.du()}}
A.cC.prototype={}
A.eC.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
h9:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
h8:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.Z.prototype={
gai:function(a){var u=this.a?1:0
return u|0|0},
h:function(a){var u=this.a?1:0
return""+(u|0|0)},
p:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.Z))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fM.prototype={
dV:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.P("")
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
A.nY(c3,u)
A.o_(c3,u)
A.nZ(c3,u)
A.o1(c3,u)
A.o2(c3,u)
A.o0(c3,u)
A.o3(c3,u)
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
m=A.nX(b8.z)
b8.c=n
b8.d=m
b8.e=b8.ct(n,35633)
b8.f=b8.ct(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.t(P.u("Failed to link shader: "+H.e(l)))}b8.fD()
b8.fF()
b8.Q=b8.x.i(0,"posAttr")
b8.cx=b8.x.i(0,"normAttr")
b8.ch=b8.x.i(0,"binmAttr")
b8.cy=b8.x.i(0,"txt2DAttr")
b8.db=b8.x.i(0,"txtCubeAttr")
b8.dx=b8.x.i(0,"bendAttr")
if(c3.dx)b8.id=H.r(b8.y.V(0,"invViewMat"),"$iad")
if(t)b8.dy=H.r(b8.y.V(0,"objMat"),"$iad")
if(r)b8.fr=H.r(b8.y.V(0,"viewObjMat"),"$iad")
b8.fy=H.r(b8.y.V(0,"projViewObjMat"),"$iad")
if(c3.ry)b8.k1=H.r(b8.y.V(0,"txt2DMat"),"$ic9")
if(c3.x1)b8.k2=H.r(b8.y.V(0,"txtCubeMat"),"$iad")
if(c3.x2)b8.k3=H.r(b8.y.V(0,"colorMat"),"$iad")
b8.r1=H.c([],[A.ad])
t=c3.y2
if(t>0){b8.k4=b8.y.V(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.i(0,q)
if(j==null)H.t(P.u(c0+q+c1))
s.push(H.r(j,"$iad"))}}if(c3.a.a)b8.r2=H.r(b8.y.V(0,"emissionClr"),"$iJ")
if(c3.b.a)b8.x1=H.r(b8.y.V(0,"ambientClr"),"$iJ")
if(c3.c.a)b8.y2=H.r(b8.y.V(0,"diffuseClr"),"$iJ")
if(c3.d.a)b8.cW=H.r(b8.y.V(0,"invDiffuseClr"),"$iJ")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.cY=H.r(b8.y.V(0,"shininess"),"$iX")
if(t)b8.cX=H.r(b8.y.V(0,"specularClr"),"$iJ")}if(c3.cy){b8.cZ=H.r(b8.y.V(0,"envSampler"),"$ibx")
if(c3.r.a)b8.d_=H.r(b8.y.V(0,"reflectClr"),"$iJ")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.d0=H.r(b8.y.V(0,"refraction"),"$iX")
if(t)b8.d1=H.r(b8.y.V(0,"refractClr"),"$iJ")}}if(c3.y.a)b8.d2=H.r(b8.y.V(0,"alpha"),"$iX")
t=P.v
s=[t,A.ds]
b8.bR=new H.L(s)
b8.bS=new H.L([t,[P.n,A.c8]])
b8.bT=new H.L(s)
b8.bU=new H.L([t,[P.n,A.ca]])
b8.bV=new H.L(s)
b8.bW=new H.L([t,[P.n,A.cb]])
if(c3.id){for(t=c3.z,s=t.length,r=[A.c8],i=0;i<t.length;t.length===s||(0,H.o)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ad()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.i(0,d)
if(j==null)H.t(P.u(c0+d+c1))
H.r(j,"$iJ")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.i(0,d)
if(c==null)H.t(P.u(c0+d+c1))
H.r(c,"$iJ")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.i(0,d)
if(b==null)H.t(P.u(c0+d+c1))
H.r(b,"$iJ")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.i(0,d)
if(j==null)H.t(P.u(c0+d+c1))
H.r(j,"$iJ")
o=b8.y
d=f+"s["+k+"].color"
c=o.i(0,d)
if(c==null)H.t(P.u(c0+d+c1))
H.r(c,"$iJ")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.i(0,o)
if(b==null)H.t(P.u(c0+o+c1))
H.r(b,"$ibw")
a2=b}else a2=b9
e.push(new A.c8(a1,a0,a,j,c,a2))}b8.bS.m(0,g,e)
q=b8.bR
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.u(c0+o+c1))
q.m(0,g,j)}for(t=c3.Q,s=t.length,r=[A.ca],i=0;i<t.length;t.length===s||(0,H.o)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.i(0,o)
if(j==null)H.t(P.u(c0+o+c1))
H.r(j,"$iJ")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.i(0,o)
if(c==null)H.t(P.u(c0+o+c1))
H.r(c,"$iJ")
p=b8.y
o=f+"s["+k+"].color"
b=p.i(0,o)
if(b==null)H.t(P.u(c0+o+c1))
H.r(b,"$iJ")
if(typeof g!=="number")return g.ad()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.i(0,o)
if(a3==null)H.t(P.u(c0+o+c1))
H.r(a3,"$ic9")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.i(0,o)
if(a3==null)H.t(P.u(c0+o+c1))
H.r(a3,"$ibx")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.i(0,o)
if(a3==null)H.t(P.u(c0+o+c1))
H.r(a3,"$ibx")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.i(0,o)
if(a5==null)H.t(P.u(c0+o+c1))
H.r(a5,"$ic7")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.i(0,o)
if(a3==null)H.t(P.u(c0+o+c1))
H.r(a3,"$iX")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.i(0,o)
if(a5==null)H.t(P.u(c0+o+c1))
H.r(a5,"$iX")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.i(0,o)
if(a8==null)H.t(P.u(c0+o+c1))
H.r(a8,"$iX")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}e.push(new A.ca(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.bU.m(0,g,e)
q=b8.bT
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.u(c0+o+c1))
q.m(0,g,j)}for(t=c3.ch,s=t.length,r=[A.cb],i=0;i<t.length;t.length===s||(0,H.o)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.i(0,o)
if(j==null)H.t(P.u(c0+o+c1))
H.r(j,"$iJ")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.i(0,o)
if(c==null)H.t(P.u(c0+o+c1))
H.r(c,"$iJ")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.i(0,o)
if(b==null)H.t(P.u(c0+o+c1))
H.r(b,"$iJ")
p=b8.y
o=f+"s["+k+"].color"
a3=p.i(0,o)
if(a3==null)H.t(P.u(c0+o+c1))
H.r(a3,"$iJ")
if(typeof g!=="number")return g.ad()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.i(0,o)
if(a5==null)H.t(P.u(c0+o+c1))
H.r(a5,"$iJ")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.i(0,o)
if(a8==null)H.t(P.u(c0+o+c1))
H.r(a8,"$iJ")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.i(0,o)
if(b2==null)H.t(P.u(c0+o+c1))
H.r(b2,"$iX")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.i(0,o)
if(b3==null)H.t(P.u(c0+o+c1))
H.r(b3,"$iX")
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
H.r(a5,"$ic7")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.i(0,d)
if(a5==null)H.t(P.u(c0+d+c1))
H.r(a5,"$iX")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.i(0,d)
if(a8==null)H.t(P.u(c0+d+c1))
H.r(a8,"$iX")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.i(0,d)
if(a5==null)H.t(P.u(c0+d+c1))
H.r(a5,"$iX")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.i(0,d)
if(a8==null)H.t(P.u(c0+d+c1))
H.r(a8,"$iX")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.i(0,d)
if(b2==null)H.t(P.u(c0+d+c1))
H.r(b2,"$iX")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.i(0,d)
if(a5==null)H.t(P.u(c0+d+c1))
H.r(a5,"$ibw")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.i(0,o)
if(a5==null)H.t(P.u(c0+o+c1))
H.r(a5,"$ibw")
a6=a5}else a6=b9
e.push(new A.cb(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.bW.m(0,g,e)
q=b8.bV
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.u(c0+o+c1))
q.m(0,g,j)}}},
fB:function(a,b){}}
A.cK.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.d9.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.de.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.fP.prototype={
h:function(a){return this.aW}}
A.c8.prototype={}
A.ca.prototype={}
A.cb.prototype={}
A.dc.prototype={
dY:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
ct:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.u("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fD:function(){var u,t,s,r=this,q=H.c([],[A.cC]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.w(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cC(p,t.name,s))}r.x=new A.eC(q)},
fF:function(){var u,t,s,r=this,q=H.c([],[A.dr]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.w(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.h4(t.type,t.size,t.name,s))}r.y=new A.ic(q)},
aG:function(a,b,c){var u=this.a
if(a===1)return new A.ds(u,b,c)
else return A.km(u,this.r,b,a,c)},
ej:function(a,b,c){var u=this.a
if(a===1)return new A.bw(u,b,c)
else return A.km(u,this.r,b,a,c)},
ek:function(a,b,c){var u=this.a
if(a===1)return new A.bx(u,b,c)
else return A.km(u,this.r,b,a,c)},
bb:function(a,b){return new P.dH(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
h4:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aG(b,c,d)
case 5121:return u.aG(b,c,d)
case 5122:return u.aG(b,c,d)
case 5123:return u.aG(b,c,d)
case 5124:return u.aG(b,c,d)
case 5125:return u.aG(b,c,d)
case 5126:return new A.X(u.a,c,d)
case 35664:return new A.i8(u.a,c,d)
case 35665:return new A.J(u.a,c,d)
case 35666:return new A.c7(u.a,c,d)
case 35667:return new A.i9(u.a,c,d)
case 35668:return new A.ia(u.a,c,d)
case 35669:return new A.ib(u.a,c,d)
case 35674:return new A.id(u.a,c,d)
case 35675:return new A.c9(u.a,c,d)
case 35676:return new A.ad(u.a,c,d)
case 35678:return u.ej(b,c,d)
case 35680:return u.ek(b,c,d)
case 35670:throw H.d(u.bb("BOOL",c))
case 35671:throw H.d(u.bb("BOOL_VEC2",c))
case 35672:throw H.d(u.bb("BOOL_VEC3",c))
case 35673:throw H.d(u.bb("BOOL_VEC4",c))
default:throw H.d(P.u("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.dr.prototype={}
A.ic.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
V:function(a,b){var u=this.i(0,b)
if(u==null)throw H.d(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.M()},
M:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.ds.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.i9.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.ia.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.ib.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.i7.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.X.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.i8.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.J.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.c7.prototype={
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.id.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.c9.prototype={
aj:function(a){var u=new Float32Array(H.bB(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.ad.prototype={
aj:function(a){var u=new Float32Array(H.bB(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bw.prototype={
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bx.prototype={
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.js.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c0(s.b,b).c0(s.d.c0(s.c,b),c)
a.sa0(0,new V.T(r.a,r.b,r.c))
a.sdD(r.t(0,Math.sqrt(r.D(r))))
s=1-b
u=1-c
a.scQ(new V.b5(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.jC.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.jE.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.w(p)
s=-s*p
u=r*p
a.sa0(0,new V.T(s,u,q))
u=new V.y(s,u,q)
a.sdD(u.t(0,Math.sqrt(u.D(u))))
a.scQ(new V.b5(1-c,2+c,-1,-1))}}
F.jF.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.jG.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.jY.prototype={
$2:function(a,b){return 0}}
F.jZ.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.w(s)
u=a.f
t=new V.y(u.a,u.b,u.c)
s=t.t(0,Math.sqrt(t.D(t))).A(0,this.b+s)
a.sa0(0,new V.T(s.a,s.b,s.c))}}
F.k1.prototype={
$1:function(a){return new V.T(Math.cos(a),Math.sin(a),0)}}
F.jO.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.T(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.jD.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.kJ(n.$1(o),m)
m=J.kJ(n.$1(o+3.141592653589793/p.c),m).O(0,l)
m=new V.y(m.a,m.b,m.c)
u=m.t(0,Math.sqrt(m.D(m)))
n=$.lr
if(n==null){n=new V.y(1,0,0)
$.lr=n
t=n}else t=n
n=u.ay(!J.C(u,t)?V.lu():t)
s=n.t(0,Math.sqrt(n.D(n)))
n=s.ay(u)
t=n.t(0,Math.sqrt(n.D(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.A(0,n*m)
m=s.A(0,q*m)
a.sa0(0,l.w(0,new V.T(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.aU.prototype={
aU:function(){var u=this
if(!u.gaV()){C.b.K(u.a.a.d.b,u)
u.a.a.Y()}u.bE()
u.bF()
u.fs()},
bI:function(a){this.a=a
a.d.b.push(this)},
bJ:function(a){this.b=a
a.d.c.push(this)},
fC:function(a){this.c=a
a.d.d.push(this)},
bE:function(){var u=this.a
if(u!=null){C.b.K(u.d.b,this)
this.a=null}},
bF:function(){var u=this.b
if(u!=null){C.b.K(u.d.c,this)
this.b=null}},
fs:function(){var u=this.c
if(u!=null){C.b.K(u.d.d,this)
this.c=null}},
gaV:function(){return this.a==null||this.b==null||this.c==null},
ee:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cc()
if(q!=null)s=s.w(0,q)
if(u!=null)s=s.w(0,u)
if(t!=null)s=s.w(0,t)
if(s.dd())return
return s.t(0,Math.sqrt(s.D(s)))},
eg:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.O(0,q)
r=new V.y(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.D(r)))
r=t.O(0,q)
r=new V.y(r.a,r.b,r.c)
r=s.ay(r.t(0,Math.sqrt(r.D(r))))
return r.t(0,Math.sqrt(r.D(r)))},
bN:function(){var u,t=this
if(t.d!=null)return!0
u=t.ee()
if(u==null){u=t.eg()
if(u==null)return!1}t.d=u
t.a.a.Y()
return!0},
ed:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cc()
if(q!=null)s=s.w(0,q)
if(u!=null)s=s.w(0,u)
if(t!=null)s=s.w(0,t)
if(s.dd())return
return s.t(0,Math.sqrt(s.D(s)))},
ef:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.z().a){l=d.O(0,g)
l=new V.y(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.D(l)))
if(s.a-t.a<0)q=q.R(0)}else{p=(l-u.b)/r
l=d.O(0,g).A(0,p).w(0,g).O(0,j)
l=new V.y(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.D(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.R(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.D(l)))
l=o.ay(q)
l=l.t(0,Math.sqrt(l.D(l))).ay(o)
q=l.t(0,Math.sqrt(l.D(l)))}return q},
bL:function(){var u,t=this
if(t.e!=null)return!0
u=t.ed()
if(u==null){u=t.ef()
if(u==null)return!1}t.e=u
t.a.a.Y()
return!0},
gfZ:function(a){var u=this
if(J.C(u.a,u.b))return!0
if(J.C(u.b,u.c))return!0
if(J.C(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.M()},
E:function(a){var u,t,s=this
if(s.gaV())return a+"disposed"
u=a+C.a.ab(J.a1(s.a.e),0)+", "+C.a.ab(J.a1(s.b.e),0)+", "+C.a.ab(J.a1(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.h(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.h(0)+"}"):u+"-}"},
M:function(){return this.E("")}}
F.fb.prototype={}
F.hH.prototype={
b_:function(a,b,c){var u,t=b.a
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
aU:function(){var u=this
if(!u.gaV()){C.b.K(u.a.a.c.b,u)
u.a.a.Y()}u.bE()
u.bF()},
bI:function(a){this.a=a
a.c.b.push(this)},
bJ:function(a){this.b=a
a.c.c.push(this)},
bE:function(){var u=this.a
if(u!=null){C.b.K(u.c.b,this)
this.a=null}},
bF:function(){var u=this.b
if(u!=null){C.b.K(u.c.c,this)
this.b=null}},
gaV:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.M()},
E:function(a){if(this.gaV())return a+"disposed"
return a+C.a.ab(J.a1(this.a.e),0)+", "+C.a.ab(J.a1(this.b.e),0)},
M:function(){return this.E("")}}
F.fy.prototype={}
F.i6.prototype={
b_:function(a,b,c){var u,t=b.a
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
F.c0.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.M()},
E:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.ab(J.a1(u.e),0)},
M:function(){return this.E("")}}
F.hz.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.M():u},
b0:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.u()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){r=g[s]
h.a.n(0,r.h1())}h.a.u()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.c0()
if(n.a==null)H.t(P.u("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.J(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.w()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.mH(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.w()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
i=p[o]
o=h.d.a
o.a.n(0,l)
o.a.n(0,k)
o.a.n(0,i)
F.bO(l,k,i)}g=h.e
if(g!=null)g.ag(0)},
ap:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ap()||!1
if(!t.a.ap())u=!1
s=t.e
if(s!=null)s.ag(0)
return u},
ho:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.cx(o,0)])
for(o=[F.b9];u.length!==0;){t=C.b.ghd(u)
C.b.dz(u,0)
if(t!=null){s=H.c([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.b(u,r)
q=u[r]
if(q!=null&&a.b_(0,t,q)){s.push(q)
C.b.dz(u,r)}}if(s.length>1)b.b0(s)}}p.a.u()
p.c.c5()
p.d.c5()
p.b.hH()
p.c.c6(new F.i6())
p.d.c6(new F.hH())
o=p.e
if(o!=null)o.ag(0)},
bK:function(){this.ho(new F.iC(),new F.hc())},
bX:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.bX()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.b(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdh(new V.y(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.y(s,r,o).t(0,Math.sqrt(s*s+r*r+o*o))
if(!J.C(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.J(null)}}}}o=p.e
if(o!=null)o.ag(0)},
fX:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aP()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aO().a)!==0)++s
if((t&$.aN().a)!==0)++s
if((t&$.bd().a)!==0)++s
if((t&$.be().a)!==0)++s
if((t&$.cy().a)!==0)++s
if((t&$.cz().a)!==0)++s
if((t&$.bI().a)!==0)++s
if((t&$.aM().a)!==0)++s
r=a4.gcc(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.c(u,[P.K])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.cD])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fT(m)
k=l.gcc(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.cD(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].hn(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bB(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cE(new Z.dy(a1,d),o,a4)
c.b=H.c([],[Z.bl])
if(a0.b.b.length!==0){b=H.c([],[P.v])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)}a=Z.kp(u,34963,b)
c.b.push(new Z.bl(0,b.length,a))}if(a0.c.b.length!==0){b=H.c([],[P.v])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.u()
b.push(t.e)}a=Z.kp(u,34963,b)
c.b.push(new Z.bl(1,b.length,a))}if(a0.d.b.length!==0){b=H.c([],[P.v])
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
b.push(t.e)}a=Z.kp(u,34963,b)
c.b.push(new Z.bl(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.c([],[P.k])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.E(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.E(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.E(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.E(t))}return C.b.k(s,"\n")},
Y:function(){var u=this.e
if(u!=null)u.J(null)}}
F.hA.prototype={
fP:function(a){var u,t,s,r,q,p=H.c([],[F.aU]),o=a.length
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
fQ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.c([],[F.aU])
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
c6:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.b_(0,p,n)){p.aU()
break}}}}},
c5:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.gfZ(s)
if(t)s.aU()}},
ap:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].bN())s=!1
return s},
bM:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].bL())s=!1
return s},
bX:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.y(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.y(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.J(null)}},
h:function(a){return this.M()},
E:function(a){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].E(a))
return C.b.k(r,"\n")},
M:function(){return this.E("")}}
F.hB.prototype={
gl:function(a){return this.b.length},
c6:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.i(0,q)
for(o=q-1;o>=0;--o){n=r.c.i(0,o)
if(a.b_(0,p,n)){p.aU()
break}}}}},
c5:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=J.C(s.a,s.b)
if(t)s.aU()}},
h:function(a){return this.M()},
E:function(a){var u,t,s=H.c([],[P.k]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].E(a+(""+u+". ")))}return C.b.k(s,"\n")},
M:function(){return this.E("")}}
F.hC.prototype={
gl:function(a){return this.b.length},
hH:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.K(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.J(null)}s=t.a
if(s!=null){C.b.K(s.b.b,t)
t.a=null}}}},
h:function(a){return this.M()},
E:function(a){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].E(a))
return C.b.k(r,"\n")},
M:function(){return this.E("")}}
F.b9.prototype={
bQ:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.dx(u.cx,r,o,t,s,q,p,a,n)},
h1:function(){return this.bQ(null)},
sa0:function(a,b){var u
if(!J.C(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Y()}},
sdh:function(a){var u
a=a==null?null:a.t(0,Math.sqrt(a.D(a)))
if(!J.C(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Y()}},
sdD:function(a){var u
if(!J.C(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Y()}},
scQ:function(a){var u
if(!J.C(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Y()}},
hn:function(a){var u,t,s=this
if(a.p(0,$.aP())){u=s.f
t=[P.K]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.aO())){u=s.r
t=[P.K]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.aN())){u=s.x
t=[P.K]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bd())){u=s.y
t=[P.K]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.p(0,$.be())){u=s.z
t=[P.K]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.cy())){u=s.Q
t=[P.K]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.cz())){u=s.Q
t=[P.K]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bI()))return H.c([s.ch],[P.K])
else if(a.p(0,$.aM())){u=s.cx
t=[P.K]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.K])},
bN:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cc()
t.d.F(0,new F.iH(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
bL:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cc()
t.d.F(0,new F.iG(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.M()},
E:function(a){var u,t,s=this,r="-",q=H.c([],[P.k])
q.push(C.a.ab(J.a1(s.e),0))
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
M:function(){return this.E("")}}
F.iH.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.w(0,t)}}}
F.iG.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.w(0,t)}}}
F.ix.prototype={
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
u.Y()
return!0},
fR:function(a,b,c,d,e,f){var u=F.dx(a,null,b,c,d,e,f,null,0)
this.n(0,u)
return u},
gl:function(a){return this.c.length},
ap:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].bN()
return!0},
bM:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].bL()
return!0},
fY:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.C(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.J(null)}}}}return!0},
h:function(a){return this.M()},
E:function(a){var u,t,s,r
this.u()
u=H.c([],[P.k])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r)u.push(t[r].E(a))
return C.b.k(u,"\n")},
M:function(){return this.E("")}}
F.iy.prototype={
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
C.b.F(u.c,new F.iz(u,b))
C.b.F(u.d,new F.iA(u,b))},
h:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].E(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].E(""))
return C.b.k(r,"\n")}}
F.iz.prototype={
$1:function(a){if(!J.C(a.a,this.a))this.b.$1(a)}}
F.iA.prototype={
$1:function(a){var u=this.a
if(!J.C(a.a,u)&&!J.C(a.b,u))this.b.$1(a)}}
F.iB.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.b(t,u)
return t[u]}else{if(b<0)return H.b(t,b)
return t[b]}},
h:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].E(""))
return C.b.k(r,"\n")}}
F.iD.prototype={}
F.iC.prototype={
b_:function(a,b,c){return J.C(b.f,c.f)}}
F.iE.prototype={}
F.hc.prototype={
b0:function(a){var u,t,s,r=V.cc()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)r=new V.y(r.a+s.a,r.b+s.b,r.c+s.c)}r=r.t(0,Math.sqrt(r.D(r)))
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t)a[t].sdh(r)
return}}
F.iF.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].E(""))
return C.b.k(r,"\n")}}
O.cZ.prototype={
gB:function(){var u=this.fr
return u==null?this.fr=D.M():u},
a8:function(a){var u=this.fr
if(u!=null)u.J(a)},
e6:function(){return this.a8(null)},
cC:function(a){this.a=null
this.a8(a)},
fw:function(){return this.cC(null)},
eE:function(a,b){var u=new D.bm()
u.b=!0
this.a8(u)},
eG:function(a,b){var u=new D.bn()
u.b=!0
this.a8(u)},
cq:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.v,h=new H.L([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=r.gae()
p=h.i(0,r.gae())
h.m(0,q,p==null?1:p)}o=H.c([],[A.cK])
h.F(0,new O.fT(j,o))
C.b.bq(o,new O.fU())
n=new H.L([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=r.gae()
p=n.i(0,r.gae())
n.m(0,q,p==null?1:p)}m=H.c([],[A.d9])
n.F(0,new O.fV(j,m))
C.b.bq(m,new O.fW())
l=new H.L([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.o)(i),++s){r=i[s]
t=r.gae()
q=l.i(0,r.gae())
l.m(0,t,q==null?1:q)}k=H.c([],[A.de])
l.F(0,new O.fX(j,k))
C.b.bq(k,new O.fY())
i=C.c.a5(j.e.a.length+3,4)
j.dy.e
return A.mO(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
ec:function(a,b){},
as:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a2(u,u.length);u.v();){t=u.d
t.toString
s=$.b4
t.a=s==null?$.b4=new V.T(0,0,0):s
s=$.iw
t.b=s==null?$.iw=new V.y(0,0,1):s
s=$.iv
t.c=s==null?$.iv=new V.y(0,1,0):s
s=$.iu
t.d=s==null?$.iu=new V.y(-1,0,0):s
s=t.f
if(s!=null){r=s.aP(0,b,t)
if(r!=null){t.a=r.bm(t.a)
s=r.bn(t.b)
q=s.a
p=s.b
o=s.c
t.b=s.t(0,Math.sqrt(q*q+p*p+o*o))
o=r.bn(t.c)
p=o.a
q=o.b
s=o.c
t.c=o.t(0,Math.sqrt(p*p+q*q+s*s))
s=r.bn(t.d)
q=s.a
p=s.b
o=s.c
t.d=s.t(0,Math.sqrt(q*q+p*p+o*o))}}}},
hJ:function(b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a
if(b2==null){b2=b1.cq()
u=b3.fr.i(0,b2.aW)
if(u==null){u=A.mN(b2,b3.a)
t=u.b
if(t.length===0)H.t(P.u("May not cache a shader with no name."))
if(b3.fr.be(0,t))H.t(P.u('Shader cache already contains a shader by the name "'+t+'".'))
b3.fr.m(0,t,u)}b2=b1.a=u
b4.e=null}s=b2.z
r=s.cV
b2=b4.e
if(!(b2 instanceof Z.cE))b2=b4.e=null
if(b2==null||!b2.d.p(0,r)){b2=s.k3
if(b2)b4.d.ap()
q=s.k4
if(q){p=b4.d
o=p.e
if(o!=null)++o.d
p.d.bM()
p.a.bM()
p=p.e
if(p!=null)p.ag(0)}p=s.r2
if(p){o=b4.d
n=o.e
if(n!=null)++n.d
o.a.fY()
o=o.e
if(o!=null)o.ag(0)}m=b4.d.fX(new Z.iJ(b3.a),r)
m.aK($.aP()).e=b1.a.Q.c
if(b2)m.aK($.aO()).e=b1.a.cx.c
if(q)m.aK($.aN()).e=b1.a.ch.c
if(s.r1)m.aK($.bd()).e=b1.a.cy.c
if(p)m.aK($.be()).e=b1.a.db.c
if(s.rx)m.aK($.aM()).e=b1.a.dx.c
b4.e=m}l=H.c([],[T.hW])
b2=b1.a
q=b3.a
q.useProgram(b2.r)
b2.x.h9()
if(s.dy){b2=b1.a
p=b3.dx
p=p.ga1(p)
b2=b2.dy
b2.toString
b2.aj(p.ac(0,!0))}if(s.fr){b2=b1.a
p=b3.cx
if(p==null){p=b3.db
p=p.ga1(p)
o=b3.dx
o=b3.cx=p.A(0,o.ga1(o))
p=o}b2=b2.fr
b2.toString
b2.aj(p.ac(0,!0))}b2=b1.a
p=b3.ch
if(p==null){p=b3.ghF()
o=b3.dx
o=b3.ch=p.A(0,o.ga1(o))
p=o}b2=b2.fy
b2.toString
b2.aj(p.ac(0,!0))
if(s.ry){b2=b1.a
p=b1.b
b2=b2.k1
b2.toString
b2.aj(C.i.ac(p,!0))}if(s.x1){b2=b1.a
p=b1.c
b2=b2.k2
b2.toString
b2.aj(C.i.ac(p,!0))}if(s.x2){b2=b1.a
p=b1.d
b2=b2.k3
b2.toString
b2.aj(C.i.ac(p,!0))}if(s.y2>0){k=b1.e.a.length
b2=b1.a.k4
b2.a.uniform1i(b2.d,k)
for(j=0;j<k;++j){b2=b1.a
p=b1.e.a
if(j>=p.length)return H.b(p,j)
p=p[j]
b2=b2.r1
if(j>=b2.length)return H.b(b2,j)
b2=b2[j]
i=new Float32Array(H.bB(p.ac(0,!0)))
b2.a.uniformMatrix4fv(b2.d,!1,i)}}if(s.a.a){b2=b1.a
p=b1.f.f
b2=b2.r2
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}if(s.id){if(s.b.a){b2=b1.a
p=b1.r.f
b2=b2.x1
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}if(s.c.a){b2=b1.a
p=b1.x.f
b2=b2.y2
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}if(s.d.a){b2=b1.a
p=b1.y.f
b2=b2.cW
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}b2=s.e.a
if(!b2)p=!1
else p=!0
if(p){p=b1.a
o=b1.z.ch
p=p.cY
p.a.uniform1f(p.d,o)}if(b2){b2=b1.a
p=b1.z.f
b2=b2.cX
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}b2=s.z
if(b2.length>0){p=b3.db
h=p.ga1(p)
p=P.v
g=new H.L([p,p])
for(p=b1.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gae()
c=g.i(0,d)
if(c==null)c=0
g.m(0,d,c+1)
b=J.cA(b1.a.bS.i(0,d),c)
n=h.bn(e.gh7(e))
a=n.a
a0=n.b
a1=n.c
a1=n.t(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
n=a1.b
a1=a1.c
a0.a.uniform3f(a0.d,a,n,a1)
a1=e.gax(e)
n=b.f
n.a.uniform3f(n.d,a1.a,a1.b,a1.c)
e.gaO()
n=e.gh7(e)
a=b.d
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=e.gig()
a=b.b
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=e.gc7(e)
a=b.c
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=e.gaO()
if(!C.b.U(l,n)){n.saX(0,l.length)
l.push(n)}n=e.gaO()
a=n.gaZ(n)
if(a){a=b.r
a.toString
a0=n.gaZ(n)
if(!a0)a.a.uniform1i(a.d,0)
else{n=n.gaX(n)
a.a.uniform1i(a.d,n)}}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.o)(b2),++f){o=b2[f].a
k=g.i(0,o)
if(k==null)k=0
o=b1.a.bR.i(0,o)
o.a.uniform1i(o.d,k)}}b2=s.Q
if(b2.length>0){p=b3.db
h=p.ga1(p)
p=P.v
a2=new H.L([p,p])
for(p=b1.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gae()
c=a2.i(0,d)
if(c==null)c=0
a2.m(0,d,c+1)
b=J.cA(b1.a.bU.i(0,d),c)
a3=h.A(0,e.ga1(e))
n=e.ga1(e)
a=$.b4
n=n.bm(a==null?$.b4=new V.T(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=$.b4
n=a3.bm(n==null?$.b4=new V.T(0,0,0):n)
a=b.c
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=e.gax(e)
a=b.e
a.a.uniform3f(a.d,n.a,n.b,n.c)
e.gaO()
n=a3.dc(0)
a=n.a
a0=n.b
a1=n.c
a4=n.e
a5=n.f
a6=n.r
a7=n.y
a8=n.z
n=n.Q
a9=b.d
a9.toString
i=new Float32Array(H.bB(new V.d0(a,a0,a1,a4,a5,a6,a7,a8,n).ac(0,!0)))
a9.a.uniformMatrix3fv(a9.d,!1,i)
e.gaO()
n=e.gaO()
if(!C.b.U(l,n)){n.saX(0,l.length)
l.push(n)}n=e.gaO()
a=n.gaZ(n)
if(a){a=b.f
a.toString
a0=n.gaZ(n)
if(!a0)a.a.uniform1i(a.d,0)
else{n=n.gaX(n)
a.a.uniform1i(a.d,n)}}e.gcb()
n=e.ghU()
a=b.x
a.a.uniform4f(a.d,n.a,n.b,n.c,n.d)
n=e.gcb()
if(!C.b.U(l,n)){n.saX(0,l.length)
l.push(n)}n=e.gcb()
a=n.gaZ(n)
if(a){a=b.r
a.toString
a0=n.gaZ(n)
if(!a0)a.a.uniform1i(a.d,0)
else{n=n.gaX(n)
a.a.uniform1i(a.d,n)}}if(e.ghY()){n=e.ghV()
a=b.y
a.a.uniform1f(a.d,n)
n=e.ghW()
a=b.z
a.a.uniform1f(a.d,n)
n=e.ghX()
a=b.Q
a.a.uniform1f(a.d,n)}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.o)(b2),++f){o=b2[f].a
k=a2.i(0,o)
if(k==null)k=0
o=b1.a.bT.i(0,o)
o.a.uniform1i(o.d,k)}}b2=s.ch
if(b2.length>0){p=b3.db
h=p.ga1(p)
p=P.v
b0=new H.L([p,p])
for(p=b1.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gae()
c=b0.i(0,d)
if(c==null)c=0
b0.m(0,d,c+1)
b=J.cA(b1.a.bW.i(0,d),c)
n=e.a
a=b.b
a0=n.a
a1=n.b
n=n.c
a.a.uniform3f(a.d,a0,a1,n)
n=e.b
a1=n.a
a0=n.b
a=n.c
a=n.t(0,Math.sqrt(a1*a1+a0*a0+a*a))
a0=b.c
a1=a.a
n=a.b
a=a.c
a0.a.uniform3f(a0.d,a1,n,a)
a=h.bm(e.a)
n=b.d
n.a.uniform3f(n.d,a.a,a.b,a.c)
a=e.r
n=b.e
n.a.uniform3f(n.d,a.a,a.b,a.c)
n=e.cy
a=b.Q
a.a.uniform1f(a.d,n)
n=e.dx
a=b.ch
a.a.uniform1f(a.d,n)
n=e.dy
a=b.cx
a.a.uniform1f(a.d,n)
n=e.fr
a=b.cy
a.a.uniform1f(a.d,n)
n=e.fx
a=b.db
a.a.uniform1f(a.d,n)}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.o)(b2),++f){o=b2[f].a
k=b0.i(0,o)
if(k==null)k=0
o=b1.a.bV.i(0,o)
o.a.uniform1i(o.d,k)}}}if(s.dx){b2=b1.a
p=b3.Q
if(p==null){p=b3.db
p=b3.Q=p.ga1(p).dc(0)}b2=b2.id
b2.toString
b2.aj(p.ac(0,!0))}if(s.cy){b1.ec(l,b1.ch)
b2=b1.a
p=b1.ch
b2.fB(b2.cZ,p)
if(s.r.a){b2=b1.a
p=b1.cx.f
b2=b2.d_
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}b2=s.x.a
if(!b2)p=!1
else p=!0
if(p){p=b1.a
o=b1.cy.ch
p=p.d0
p.a.uniform1f(p.d,o)}if(b2){b2=b1.a
p=b1.cy.f
b2=b2.d1
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}}b2=s.y.a
p=!b2
if(p)o=!1
else o=!0
if(o){if(b2){b2=b1.a
o=b1.db.f
b2=b2.d2
b2.a.uniform1f(b2.d,o)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].bc(b3)
b2=b4.e
b2.bc(b3)
b2.aM(b3)
b2.dG(b3)
if(p)b2=!1
else b2=!0
if(b2)q.disable(3042)
for(j=0;j<l.length;++j)l[j].dG(b3)
b2=b1.a
b2.toString
q.useProgram(null)
b2.x.h8()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.cq().aW}}
O.fT.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.cK(a,C.c.a5(b+3,4)*4))}}
O.fU.prototype={
$2:function(a,b){return J.k4(a.a,b.a)}}
O.fV.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.d9(a,C.c.a5(b+3,4)*4))}}
O.fW.prototype={
$2:function(a,b){return J.k4(a.a,b.a)}}
O.fX.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.de(a,C.c.a5(b+3,4)*4))}}
O.fY.prototype={
$2:function(a,b){return J.k4(a.a,b.a)}}
O.fN.prototype={
av:function(){var u,t=this
t.ce()
u=t.f
if(!(Math.abs(u-1)<$.z().a)){t.f=1
u=new D.B(t.b,u,1)
u.b=!0
t.a.a8(u)}}}
O.d_.prototype={
av:function(){},
cF:function(a){var u,t,s=this
if(!s.c.p(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.av()
u=s.a
u.a=null
u.a8(null)}}}
O.fO.prototype={}
O.an.prototype={
cE:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.B(s.b+".color",u,a)
t.b=!0
s.a.a8(t)}},
av:function(){this.ce()
this.cE(new V.U(1,1,1))},
sax:function(a,b){this.cF(new A.Z(!0,!1,!1))
this.cE(b)}}
O.fQ.prototype={}
O.fR.prototype={
av:function(){var u,t=this
t.cf()
u=t.ch
if(!(Math.abs(u-1)<$.z().a)){t.ch=1
u=new D.B(t.b+".refraction",u,1)
u.b=!0
t.a.a8(u)}}}
O.fS.prototype={
cG:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.z().a)){u.ch=a
t=new D.B(u.b+".shininess",t,a)
t.b=!0
u.a.a8(t)}},
av:function(){this.cf()
this.cG(100)}}
O.dj.prototype={}
T.hW.prototype={}
X.k6.prototype={}
X.fi.prototype={
gB:function(){var u=this.x
return u==null?this.x=D.M():u}}
X.d8.prototype={
gB:function(){var u=this.f
return u==null?this.f=D.M():u},
aF:function(a){var u=this.f
if(u!=null)u.J(a)},
e9:function(){return this.aF(null)},
saL:function(a){var u,t,s=this
if(!J.C(s.b,a)){u=s.b
if(u!=null)u.gB().K(0,s.gck())
t=s.b
s.b=a
if(a!=null)a.gB().n(0,s.gck())
u=new D.B("mover",t,s.b)
u.b=!0
s.aF(u)}}}
X.hS.prototype={}
V.cG.prototype={
b7:function(a){this.b=new P.fn(C.P)
this.c=null
this.d=H.c([],[[P.n,W.ag]])},
L:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.c([],[W.ag]))
u=a.split("\n")
for(l=u.length,t=[W.ag],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.c([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.ei(q,0,q.length)
n=o==null?q:o
C.N.dN(p,H.kF(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gaq(m.d).push(p)}},
ds:function(a,b){var u,t,s,r,q=this
q.d=H.c([],[[P.n,W.ag]])
u=C.b.k(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bf():t).dF(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r)q.bk(t[r])}}
V.jX.prototype={
$1:function(a){var u=C.d.dE(this.a.ghh(),2)
if(u!=="0.00")P.kE(u+" fps")}}
V.eY.prototype={
bk:function(a){var u=this
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
bf:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=R.i_()
a1.c=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=T.p(new H.m("_"))
u.a.push(t)
t=T.I("a","z")
u.a.push(t)
t=T.I("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=T.p(new H.m("_"))
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
t=T.p(new H.m("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=T.I("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=T.I("0","9")
u.a.push(t)
t=a1.j(0,r).k(0,m)
u=T.p(new H.m(l))
t.a.push(u)
u=a1.j(0,m).k(0,m)
t=T.p(new H.m(l))
u.a.push(t)
t=a1.j(0,r).k(0,k)
u=T.p(new H.m('"'))
t.a.push(u)
u=a1.j(0,k).k(0,j)
t=T.p(new H.m('"'))
u.a.push(t)
t=a1.j(0,k).k(0,i)
u=T.p(new H.m("\\"))
t.a.push(u)
u=a1.j(0,i).k(0,k)
t=T.p(new H.m('"'))
u.a.push(t)
a1.j(0,k).k(0,k).a.push(new T.av())
t=a1.j(0,r).k(0,h)
u=T.p(new H.m("'"))
t.a.push(u)
u=a1.j(0,h).k(0,g)
t=T.p(new H.m("'"))
u.a.push(t)
t=a1.j(0,h).k(0,f)
u=T.p(new H.m("\\"))
t.a.push(u)
u=a1.j(0,f).k(0,h)
t=T.p(new H.m("'"))
u.a.push(t)
a1.j(0,h).k(0,h).a.push(new T.av())
t=a1.j(0,r).k(0,e)
u=T.p(new H.m("/"))
t.a.push(u)
u=a1.j(0,e).k(0,d)
t=T.p(new H.m("/"))
u.a.push(t)
t=a1.j(0,d).k(0,c)
u=T.p(new H.m("\n"))
t.a.push(u)
u=a1.j(0,d).k(0,d)
t=new T.a3()
s=[T.aZ]
t.a=H.c([],s)
u.a.push(t)
u=T.p(new H.m("\n"))
t.a.push(u)
u=a1.j(0,e).k(0,b)
t=T.p(new H.m("*"))
u.a.push(t)
t=a1.j(0,b).k(0,a)
u=T.p(new H.m("*"))
t.a.push(u)
u=a1.j(0,a).k(0,b)
t=new T.a3()
t.a=H.c([],s)
u.a.push(t)
u=T.p(new H.m("*"))
t.a.push(u)
u=a1.j(0,a).k(0,c)
t=T.p(new H.m("/"))
u.a.push(t)
t=a1.j(0,r).k(0,a0)
u=T.p(new H.m(" \n\t"))
t.a.push(u)
u=a1.j(0,a0).k(0,a0)
t=T.p(new H.m(" \n\t"))
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
t.aB(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aB(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aB(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fk.prototype={
bk:function(a){var u=this
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
bf:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=R.i_()
e.c=e.j(0,r)
u=e.j(0,r).k(0,q)
t=T.p(new H.m("_"))
u.a.push(t)
t=T.I("a","z")
u.a.push(t)
t=T.I("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=T.p(new H.m("_"))
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
t=T.p(new H.m("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=T.I("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=T.I("0","9")
u.a.push(t)
t=e.j(0,r).k(0,m)
u=T.p(new H.m(l))
t.a.push(u)
u=e.j(0,m).k(0,m)
t=T.p(new H.m(l))
u.a.push(t)
t=e.j(0,r).k(0,k)
u=T.p(new H.m("/"))
t.a.push(u)
u=e.j(0,k).k(0,j)
t=T.p(new H.m("/"))
u.a.push(t)
e.j(0,k).k(0,m).a.push(new T.av())
t=e.j(0,j).k(0,i)
u=T.p(new H.m("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new T.a3()
s=[T.aZ]
t.a=H.c([],s)
u.a.push(t)
u=T.p(new H.m("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=T.p(new H.m("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new T.a3()
u.a=H.c([],s)
t.a.push(u)
t=T.p(new H.m("\n"))
u.a.push(t)
t=e.j(0,h).k(0,g)
u=T.p(new H.m("\n"))
t.a.push(u)
u=e.j(0,r).k(0,f)
t=T.p(new H.m(" \n\t"))
u.a.push(t)
t=e.j(0,f).k(0,f)
u=T.p(new H.m(" \n\t"))
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
u.aB(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aB(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aB(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fl.prototype={
bk:function(a){var u=this,t="#111"
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
bf:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=R.i_()
l.c=l.j(0,s)
u=l.j(0,s).k(0,r)
t=T.p(new H.m("_"))
u.a.push(t)
t=T.I("a","z")
u.a.push(t)
t=T.I("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=T.p(new H.m("_"))
t.a.push(u)
u=T.I("0","9")
t.a.push(u)
u=T.I("a","z")
t.a.push(u)
u=T.I("A","Z")
t.a.push(u)
u=l.j(0,r).k(0,q)
t=T.p(new H.m("="))
u.a.push(t)
u.c=!0
u=l.j(0,s).k(0,p)
t=T.p(new H.m("</\\-!>="))
u.a.push(t)
t=l.j(0,p).k(0,p)
u=T.p(new H.m("</\\-!>="))
t.a.push(u)
u=l.j(0,s).k(0,o)
t=T.p(new H.m('"'))
u.a.push(t)
t=l.j(0,o).k(0,n)
u=T.p(new H.m('"'))
t.a.push(u)
u=l.j(0,o).k(0,"EscStr")
t=T.p(new H.m("\\"))
u.a.push(t)
t=l.j(0,"EscStr").k(0,o)
u=T.p(new H.m('"'))
t.a.push(u)
l.j(0,o).k(0,o).a.push(new T.av())
l.j(0,s).k(0,m).a.push(new T.av())
u=l.j(0,m).k(0,m)
t=new T.a3()
t.a=H.c([],[T.aZ])
u.a.push(t)
u=T.p(new H.m('</\\-!>=_"'))
t.a.push(u)
u=T.I("a","z")
t.a.push(u)
u=T.I("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.N("Symbol")
u=l.j(0,n)
u.d=u.a.N("String")
u=l.j(0,r)
t=u.a.N(r)
u.d=t
t.aB(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.k]))
t=l.j(0,q)
t.d=t.a.N(q)
t=l.j(0,m)
t.d=t.a.N(m)
return l}}
V.hi.prototype={
ds:function(a,b){this.d=H.c([],[[P.n,W.ag]])
this.L(C.b.k(b,"\n"),"#111")},
bk:function(a){},
bf:function(){return}}
V.hn.prototype={
cM:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.ll().gc4().i(0,H.e(u))
if(t==null)if(d){c.$0()
m.cK(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.kL(m.c).n(0,q)
o=W.mC("radio")
o.checked=s
o.name=u
W.Y(o,"change",new V.ho(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.kL(m.c).n(0,r.createElement("br"))},
aT:function(a,b,c){return this.cM(a,b,c,!1)},
cK:function(a){var u,t,s=P.ll(),r=P.k,q=P.mJ(s.gc4(),r,r)
q.m(0,this.a,a)
u=s.dA(0,q)
r=window.history
t=u.h(0)
r.toString
r.replaceState(new P.jb([],[]).c8(""),"",t)}}
V.ho.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.cK(u.d)}}}
V.hD.prototype={
dZ:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.Y(q,"scroll",new V.hF(o),!1)},
cO:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.fE()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dF(C.b.hm(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
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
if(H.oB(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.b(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.ei(C.x,n,C.e,!1)
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
dK:function(a){var u,t,s,r=new V.eY("dart")
r.b7("dart")
u=new V.fk("glsl")
u.b7("glsl")
t=new V.fl("html")
t.b7("html")
s=C.b.he(H.c([r,u,t],[V.cG]),new V.hG(a))
if(s!=null)return s
r=new V.hi("plain")
r.b7("plain")
return r},
cN:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.c([],[P.v])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cv(s).a2(s,"+")){b0[t]=C.a.a6(s,1)
a6.push(1)
u=!0}else if(C.a.a2(s,"-")){b0[t]=C.a.a6(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.dK(a8)
r.ds(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.ei(C.x,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.kN()
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
for(a2=C.b.gS(s);a2.v();)d.appendChild(a2.gI(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
fN:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
fE:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=R.i_()
u.c=u.j(0,q)
t=u.j(0,q).k(0,p)
s=T.p(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new T.a3()
r=[T.aZ]
s.a=H.c([],r)
t.a.push(s)
t=T.p(new H.m("*"))
s.a.push(t)
t=u.j(0,p).k(0,"BoldEnd")
s=T.p(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,o)
s=T.p(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.j(0,o).k(0,o)
s=new T.a3()
s.a=H.c([],r)
t.a.push(s)
t=T.p(new H.m("_"))
s.a.push(t)
t=u.j(0,o).k(0,n)
s=T.p(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,m)
s=T.p(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.j(0,m).k(0,m)
s=new T.a3()
s.a=H.c([],r)
t.a.push(s)
t=T.p(new H.m("`"))
s.a.push(t)
t=u.j(0,m).k(0,"CodeEnd")
s=T.p(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,l)
s=T.p(new H.m("["))
t.a.push(s)
t.c=!0
t=u.j(0,l).k(0,k)
s=T.p(new H.m("|"))
t.a.push(s)
s=u.j(0,l).k(0,j)
t=T.p(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.j(0,l).k(0,l)
t=new T.a3()
t.a=H.c([],r)
s.a.push(t)
s=T.p(new H.m("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=T.p(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new T.a3()
t.a=H.c([],r)
s.a.push(t)
s=T.p(new H.m("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new T.av())
s=u.j(0,i).k(0,i)
t=new T.a3()
t.a=H.c([],r)
s.a.push(t)
s=T.p(new H.m("*_`["))
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
V.hF.prototype={
$1:function(a){P.lh(C.n,new V.hE(this.a))}}
V.hE.prototype={
$0:function(){var u=C.d.ah(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.hG.prototype={
$1:function(a){return a.a===this.a}}
N.jP.prototype={
$0:function(){this.a.sa7(0,F.ky(1,null,null,1))}}
N.jQ.prototype={
$0:function(){this.a.sa7(0,F.kz(1,!0,!0,40,1))}}
N.jR.prototype={
$0:function(){this.a.sa7(0,F.kz(1,!0,!1,40,0))}}
N.jS.prototype={
$0:function(){this.a.sa7(0,F.oA(6,6))}}
N.jT.prototype={
$0:function(){this.a.sa7(0,F.lX())}}
N.jU.prototype={
$0:function(){this.a.sa7(0,F.ot())}}
N.jV.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.k]
u.cN("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.cN("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.dQ=u.h
u=J.cT.prototype
u.dS=u.h
u=P.i.prototype
u.dR=u.bo
u=W.S.prototype
u.br=u.a9
u=W.e1.prototype
u.dT=u.ao
u=T.cQ.prototype
u.dP=u.aA
u.cd=u.h
u=O.d_.prototype
u.ce=u.av
u=O.an.prototype
u.cf=u.av})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"ob","nk",8)
u(P,"oc","nl",8)
u(P,"od","nm",8)
t(P,"lL","o9",10)
s(W,"on",4,null,["$4"],["nn"],15,0)
s(W,"oo",4,null,["$4"],["no"],15,0)
var m
r(m=E.ay.prototype,"gdm",0,0,null,["$1","$0"],["dn","hw"],0,0)
r(m,"gdq",0,0,null,["$1","$0"],["dr","hx"],0,0)
r(m,"gdk",0,0,null,["$1","$0"],["dl","hv"],0,0)
r(m,"gdi",0,0,null,["$1","$0"],["dj","hs"],0,0)
q(m,"ghq","hr",4)
q(m,"ght","hu",4)
r(m=E.dk.prototype,"gcg",0,0,null,["$1","$0"],["cj","ci"],0,0)
p(m,"ghL","dB",10)
o(m=X.dv.prototype,"geV","eW",5)
o(m,"geH","eI",5)
o(m,"geP","eQ",2)
o(m,"geZ","f_",11)
o(m,"geX","eY",11)
o(m,"gf2","f3",2)
o(m,"gf6","f7",2)
o(m,"geT","eU",2)
o(m,"gf4","f5",2)
o(m,"geR","eS",2)
o(m,"gf8","f9",18)
o(m,"gfa","fb",5)
o(m,"gfn","fo",6)
o(m,"gfj","fk",6)
o(m,"gfl","fm",6)
r(m=D.cV.prototype,"gcA",0,0,null,["$1","$0"],["cB","f0"],0,0)
o(m,"gfd","fe",19)
q(m,"geB","eC",12)
q(m,"gfh","fi",12)
r(D.bt.prototype,"geJ",0,0,null,["$1","$0"],["Z","eK"],0,0)
n(V.Q.prototype,"gl","aY",7)
n(V.y.prototype,"gl","aY",7)
n(V.cd.prototype,"gl","aY",7)
r(m=U.bQ.prototype,"gb8",0,0,null,["$1","$0"],["W","ak"],0,0)
q(m,"ge1","e2",13)
q(m,"gff","fg",13)
r(m=U.dw.prototype,"gb8",0,0,null,["$1","$0"],["W","ak"],0,0)
o(m,"geu","ev",1)
o(m,"gew","ex",1)
o(m,"gey","ez",1)
o(m,"geo","ep",1)
o(m,"geq","er",1)
o(m,"gfL","fM",1)
o(m,"gfJ","fK",1)
o(m,"gfH","fI",1)
r(m=M.cN.prototype,"gal",0,0,null,["$1","$0"],["at","e3"],0,0)
q(m,"geL","eM",4)
q(m,"geN","eO",4)
r(m=O.cZ.prototype,"ge5",0,0,null,["$1","$0"],["a8","e6"],0,0)
r(m,"gfv",0,0,null,["$1","$0"],["cC","fw"],0,0)
q(m,"geD","eE",14)
q(m,"geF","eG",14)
r(X.d8.prototype,"gck",0,0,null,["$1","$0"],["aF","e9"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a_,null)
s(P.a_,[H.kg,J.a,J.a2,P.dP,P.i,H.bV,P.fr,H.cO,H.ii,H.eQ,H.i4,P.bj,H.bL,H.e6,P.aA,H.fz,H.fB,H.fu,P.ec,P.dz,P.dh,P.hO,P.dl,P.jr,P.j5,P.j_,P.dO,P.q,P.jj,P.fI,P.eN,P.fo,P.jp,P.jo,P.au,P.a6,P.a9,P.aT,P.hg,P.df,P.dH,P.fh,P.fj,P.n,P.O,P.b1,P.k,P.P,P.bz,P.ik,P.j8,W.eU,W.cg,W.G,W.d6,W.e1,W.je,W.cP,W.aE,W.j4,W.ej,P.ja,P.j0,P.bv,T.av,T.cQ,T.aZ,T.hp,T.hy,R.dg,R.dm,R.dn,R.hZ,O.aS,O.bW,E.eJ,E.ay,E.hq,E.dk,Z.dy,Z.iJ,Z.cE,Z.bl,Z.ba,D.eM,D.bk,D.V,X.cF,X.cU,X.fw,X.fF,X.bp,X.h4,X.i0,X.dv,D.f_,D.a7,D.hk,D.bt,V.U,V.ak,V.f8,V.d0,V.aB,V.a4,V.T,V.b5,V.db,V.Q,V.y,V.cd,U.dw,M.cN,A.cC,A.eC,A.Z,A.cK,A.d9,A.de,A.fP,A.c8,A.ca,A.cb,A.dr,A.ic,F.aU,F.fb,F.bU,F.fy,F.c0,F.hz,F.hA,F.hB,F.hC,F.b9,F.ix,F.iy,F.iB,F.iD,F.iE,F.iF,O.dj,O.d_,O.fQ,X.k6,X.hS,X.d8,V.cG,V.hn,V.hD])
s(J.a,[J.fs,J.cS,J.cT,J.aV,J.bT,J.aW,H.bY,H.b0,W.f,W.ey,W.bg,W.al,W.F,W.dB,W.ac,W.eZ,W.f0,W.dD,W.cM,W.dF,W.f2,W.h,W.dI,W.az,W.fm,W.dK,W.bS,W.fE,W.fZ,W.dQ,W.dR,W.aD,W.dS,W.dV,W.aF,W.dZ,W.e0,W.aH,W.e2,W.aI,W.e7,W.ap,W.ea,W.hY,W.aK,W.ed,W.i2,W.iq,W.ek,W.em,W.eo,W.eq,W.es,P.aY,P.dM,P.b2,P.dX,P.hm,P.e8,P.b7,P.ef,P.eD,P.dA,P.e4])
s(J.cT,[J.hh,J.by,J.aX])
t(J.kf,J.aV)
s(J.bT,[J.cR,J.ft])
t(P.fD,P.dP)
s(P.fD,[H.dt,W.iQ,W.a0,P.fd])
t(H.m,H.dt)
s(P.i,[H.f5,H.fJ,H.ce])
s(H.f5,[H.cX,H.fA])
s(P.fr,[H.fK,H.iK])
t(H.fL,H.cX)
t(H.eR,H.eQ)
s(P.bj,[H.hd,H.fv,H.ih,H.eL,H.hw,P.d7,P.af,P.ij,P.ie,P.c4,P.eP,P.eX])
s(H.bL,[H.k2,H.hT,H.jK,H.jL,H.jM,P.iM,P.iL,P.iN,P.iO,P.ji,P.jh,P.jA,P.j2,P.j3,P.fC,P.fH,P.f3,P.f4,P.ip,P.il,P.im,P.io,P.jk,P.jl,P.jn,P.jm,P.jv,P.ju,P.jw,P.jx,W.f6,W.h0,W.h2,W.hv,W.hN,W.iV,W.hb,W.ha,W.j6,W.j7,W.jg,W.jq,P.jc,P.jB,P.fe,P.ff,P.eF,E.hr,E.hs,E.ht,E.hX,D.f9,D.fa,F.js,F.jC,F.jE,F.jF,F.jG,F.jY,F.jZ,F.k1,F.jO,F.jD,F.iH,F.iG,F.iz,F.iA,O.fT,O.fU,O.fV,O.fW,O.fX,O.fY,V.jX,V.ho,V.hF,V.hE,V.hG,N.jP,N.jQ,N.jR,N.jS,N.jT,N.jU,N.jV])
s(H.hT,[H.hL,H.bJ])
t(P.fG,P.aA)
s(P.fG,[H.L,W.iP])
t(H.d2,H.b0)
s(H.d2,[H.ci,H.ck])
t(H.cj,H.ci)
t(H.bZ,H.cj)
t(H.cl,H.ck)
t(H.d3,H.cl)
s(H.d3,[H.h5,H.h6,H.h7,H.h8,H.h9,H.d4,H.c_])
t(P.j1,P.jr)
t(P.iZ,P.j5)
t(P.eh,P.fI)
t(P.du,P.eh)
s(P.eN,[P.eH,P.f7])
t(P.eS,P.hO)
s(P.eS,[P.eI,P.fn,P.it,P.is])
t(P.ir,P.f7)
s(P.a9,[P.K,P.v])
s(P.af,[P.bs,P.fp])
t(P.iS,P.bz)
s(W.f,[W.E,W.fc,W.bX,W.aG,W.cm,W.aJ,W.aq,W.co,W.iI,W.cf,P.eG,P.bf])
s(W.E,[W.S,W.aR])
s(W.S,[W.l,P.j])
s(W.l,[W.ez,W.eA,W.bh,W.bi,W.ag,W.fg,W.hx,W.di,W.hQ,W.hR,W.c6])
t(W.eT,W.al)
t(W.bM,W.dB)
s(W.ac,[W.eV,W.eW])
t(W.dE,W.dD)
t(W.cL,W.dE)
t(W.dG,W.dF)
t(W.f1,W.dG)
t(W.am,W.bg)
t(W.dJ,W.dI)
t(W.bP,W.dJ)
t(W.dL,W.dK)
t(W.bR,W.dL)
t(W.b8,W.h)
s(W.b8,[W.bo,W.ao,W.bu])
t(W.h_,W.dQ)
t(W.h1,W.dR)
t(W.dT,W.dS)
t(W.h3,W.dT)
t(W.dW,W.dV)
t(W.d5,W.dW)
t(W.e_,W.dZ)
t(W.hj,W.e_)
t(W.hu,W.e0)
t(W.cn,W.cm)
t(W.hI,W.cn)
t(W.e3,W.e2)
t(W.hJ,W.e3)
t(W.hM,W.e7)
t(W.eb,W.ea)
t(W.hU,W.eb)
t(W.cp,W.co)
t(W.hV,W.cp)
t(W.ee,W.ed)
t(W.i1,W.ee)
t(W.bb,W.ao)
t(W.el,W.ek)
t(W.iR,W.el)
t(W.dC,W.cM)
t(W.en,W.em)
t(W.iW,W.en)
t(W.ep,W.eo)
t(W.dU,W.ep)
t(W.er,W.eq)
t(W.j9,W.er)
t(W.et,W.es)
t(W.jd,W.et)
t(W.iT,W.iP)
t(W.iU,P.dh)
t(W.jf,W.e1)
t(P.jb,P.ja)
t(P.a8,P.j0)
t(P.dN,P.dM)
t(P.fx,P.dN)
t(P.dY,P.dX)
t(P.he,P.dY)
t(P.c3,P.j)
t(P.e9,P.e8)
t(P.hP,P.e9)
t(P.eg,P.ef)
t(P.i3,P.eg)
t(P.eE,P.dA)
t(P.hf,P.bf)
t(P.e5,P.e4)
t(P.hK,P.e5)
s(T.cQ,[T.a3,R.dq])
s(E.eJ,[Z.cD,A.dc,T.hW])
s(D.V,[D.bm,D.bn,D.B,X.hl])
s(X.hl,[X.cY,X.b_,X.dp])
s(O.aS,[D.cV,U.bQ])
s(D.eM,[U.eO,U.ah])
t(U.cH,U.ah)
t(A.fM,A.dc)
s(A.dr,[A.ds,A.i9,A.ia,A.ib,A.i7,A.X,A.i8,A.J,A.c7,A.id,A.c9,A.ad,A.bw,A.bx])
t(F.hH,F.fb)
t(F.i6,F.fy)
t(F.iC,F.iD)
t(F.hc,F.iE)
t(O.cZ,O.dj)
s(O.d_,[O.fN,O.fO,O.an])
s(O.an,[O.fR,O.fS])
t(X.fi,X.hS)
s(V.cG,[V.eY,V.fk,V.fl,V.hi])
u(H.dt,H.ii)
u(H.ci,P.q)
u(H.cj,H.cO)
u(H.ck,P.q)
u(H.cl,H.cO)
u(P.dP,P.q)
u(P.eh,P.jj)
u(W.dB,W.eU)
u(W.dD,P.q)
u(W.dE,W.G)
u(W.dF,P.q)
u(W.dG,W.G)
u(W.dI,P.q)
u(W.dJ,W.G)
u(W.dK,P.q)
u(W.dL,W.G)
u(W.dQ,P.aA)
u(W.dR,P.aA)
u(W.dS,P.q)
u(W.dT,W.G)
u(W.dV,P.q)
u(W.dW,W.G)
u(W.dZ,P.q)
u(W.e_,W.G)
u(W.e0,P.aA)
u(W.cm,P.q)
u(W.cn,W.G)
u(W.e2,P.q)
u(W.e3,W.G)
u(W.e7,P.aA)
u(W.ea,P.q)
u(W.eb,W.G)
u(W.co,P.q)
u(W.cp,W.G)
u(W.ed,P.q)
u(W.ee,W.G)
u(W.ek,P.q)
u(W.el,W.G)
u(W.em,P.q)
u(W.en,W.G)
u(W.eo,P.q)
u(W.ep,W.G)
u(W.eq,P.q)
u(W.er,W.G)
u(W.es,P.q)
u(W.et,W.G)
u(P.dM,P.q)
u(P.dN,W.G)
u(P.dX,P.q)
u(P.dY,W.G)
u(P.e8,P.q)
u(P.e9,W.G)
u(P.ef,P.q)
u(P.eg,W.G)
u(P.dA,P.aA)
u(P.e4,P.q)
u(P.e5,W.G)})()
var v={mangledGlobalNames:{v:"int",K:"double",a9:"num",k:"String",au:"bool",b1:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.V]},{func:1,ret:-1,args:[D.V]},{func:1,ret:-1,args:[W.ao]},{func:1,ret:P.b1,args:[,,]},{func:1,ret:-1,args:[P.v,[P.i,E.ay]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.bu]},{func:1,ret:P.K},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bo]},{func:1,ret:-1,args:[P.v,[P.i,D.a7]]},{func:1,ret:-1,args:[P.v,[P.i,U.ah]]},{func:1,ret:-1,args:[P.v,[P.i,V.aB]]},{func:1,ret:P.au,args:[W.S,P.k,P.k,W.cg]},{func:1,ret:P.b1,args:[,]},{func:1,ret:P.bv,args:[,,]},{func:1,ret:-1,args:[W.bb]},{func:1,ret:P.au,args:[[P.i,D.a7]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bh.prototype
C.m=W.bi.prototype
C.N=W.ag.prototype
C.Q=J.a.prototype
C.b=J.aV.prototype
C.c=J.cR.prototype
C.i=J.cS.prototype
C.d=J.bT.prototype
C.a=J.aW.prototype
C.R=J.aX.prototype
C.A=J.hh.prototype
C.B=W.di.prototype
C.q=J.by.prototype
C.C=W.bb.prototype
C.D=W.cf.prototype
C.X=new P.eI()
C.E=new P.eH()
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

C.L=new P.hg()
C.e=new P.ir()
C.M=new P.it()
C.f=new P.j1()
C.n=new P.aT(0)
C.O=new P.aT(5e6)
C.P=new P.fo("element",!1,!1,!1)
C.v=H.c(u([127,2047,65535,1114111]),[P.v])
C.j=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.v])
C.S=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.k])
C.k=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.v])
C.l=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.v])
C.T=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.k])
C.w=H.c(u([]),[P.k])
C.U=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.v])
C.x=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.v])
C.h=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.v])
C.y=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.v])
C.V=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.v])
C.z=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.v])
C.o=H.c(u(["bind","if","ref","repeat","syntax"]),[P.k])
C.p=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.k])
C.W=new H.eR(0,{},C.w,[P.k,P.k])})();(function staticFields(){$.aj=0
$.bK=null
$.kQ=null
$.lQ=null
$.lK=null
$.lU=null
$.jH=null
$.jN=null
$.kC=null
$.bC=null
$.cs=null
$.ct=null
$.kv=!1
$.ai=C.f
$.a5=[]
$.ax=null
$.k9=null
$.kX=null
$.kW=null
$.ch=P.ki(P.k,P.fj)
$.l4=null
$.l7=null
$.b4=null
$.ld=null
$.lp=null
$.ls=null
$.lr=null
$.iu=null
$.iv=null
$.iw=null
$.lq=null
$.lv=null
$.l6=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oI","lZ",function(){return H.lP("_$dart_dartClosure")})
u($,"oJ","kH",function(){return H.lP("_$dart_js")})
u($,"oK","m_",function(){return H.ar(H.i5({
toString:function(){return"$receiver$"}}))})
u($,"oL","m0",function(){return H.ar(H.i5({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oM","m1",function(){return H.ar(H.i5(null))})
u($,"oN","m2",function(){return H.ar(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oQ","m5",function(){return H.ar(H.i5(void 0))})
u($,"oR","m6",function(){return H.ar(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oP","m4",function(){return H.ar(H.lj(null))})
u($,"oO","m3",function(){return H.ar(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"oT","m8",function(){return H.ar(H.lj(void 0))})
u($,"oS","m7",function(){return H.ar(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"p6","kI",function(){return P.nj()})
u($,"oU","m9",function(){return P.nf()})
u($,"p7","md",function(){return H.mP(H.bB(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.v])))})
u($,"p9","mf",function(){return P.n2("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pa","mg",function(){return P.nI()})
u($,"p8","me",function(){return P.kZ(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.k)})
u($,"p0","mc",function(){return Z.ae(0)})
u($,"oV","ma",function(){return Z.ae(511)})
u($,"p2","aP",function(){return Z.ae(1)})
u($,"p1","aO",function(){return Z.ae(2)})
u($,"oX","aN",function(){return Z.ae(4)})
u($,"p3","bd",function(){return Z.ae(8)})
u($,"p4","be",function(){return Z.ae(16)})
u($,"oY","cy",function(){return Z.ae(32)})
u($,"oZ","cz",function(){return Z.ae(64)})
u($,"p_","mb",function(){return Z.ae(96)})
u($,"p5","bI",function(){return Z.ae(128)})
u($,"oW","aM",function(){return Z.ae(256)})
u($,"oH","lY",function(){return new V.f8(1e-9)})
u($,"oG","z",function(){return $.lY()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bY,DataView:H.b0,ArrayBufferView:H.b0,Float32Array:H.bZ,Float64Array:H.bZ,Int16Array:H.h5,Int32Array:H.h6,Int8Array:H.h7,Uint16Array:H.h8,Uint32Array:H.h9,Uint8ClampedArray:H.d4,CanvasPixelArray:H.d4,Uint8Array:H.c_,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLImageElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.ey,HTMLAnchorElement:W.ez,HTMLAreaElement:W.eA,Blob:W.bg,HTMLBodyElement:W.bh,HTMLCanvasElement:W.bi,CDATASection:W.aR,CharacterData:W.aR,Comment:W.aR,ProcessingInstruction:W.aR,Text:W.aR,CSSPerspective:W.eT,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.bM,MSStyleCSSProperties:W.bM,CSS2Properties:W.bM,CSSImageValue:W.ac,CSSKeywordValue:W.ac,CSSNumericValue:W.ac,CSSPositionValue:W.ac,CSSResourceValue:W.ac,CSSUnitValue:W.ac,CSSURLImageValue:W.ac,CSSStyleValue:W.ac,CSSMatrixComponent:W.al,CSSRotation:W.al,CSSScale:W.al,CSSSkew:W.al,CSSTranslation:W.al,CSSTransformComponent:W.al,CSSTransformValue:W.eV,CSSUnparsedValue:W.eW,DataTransferItemList:W.eZ,HTMLDivElement:W.ag,DOMException:W.f0,ClientRectList:W.cL,DOMRectList:W.cL,DOMRectReadOnly:W.cM,DOMStringList:W.f1,DOMTokenList:W.f2,Element:W.S,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.am,FileList:W.bP,FileWriter:W.fc,HTMLFormElement:W.fg,Gamepad:W.az,History:W.fm,HTMLCollection:W.bR,HTMLFormControlsCollection:W.bR,HTMLOptionsCollection:W.bR,ImageData:W.bS,KeyboardEvent:W.bo,Location:W.fE,MediaList:W.fZ,MessagePort:W.bX,MIDIInputMap:W.h_,MIDIOutputMap:W.h1,MimeType:W.aD,MimeTypeArray:W.h3,PointerEvent:W.ao,MouseEvent:W.ao,DragEvent:W.ao,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,Attr:W.E,DocumentType:W.E,Node:W.E,NodeList:W.d5,RadioNodeList:W.d5,Plugin:W.aF,PluginArray:W.hj,RTCStatsReport:W.hu,HTMLSelectElement:W.hx,SourceBuffer:W.aG,SourceBufferList:W.hI,SpeechGrammar:W.aH,SpeechGrammarList:W.hJ,SpeechRecognitionResult:W.aI,Storage:W.hM,CSSStyleSheet:W.ap,StyleSheet:W.ap,HTMLTableElement:W.di,HTMLTableRowElement:W.hQ,HTMLTableSectionElement:W.hR,HTMLTemplateElement:W.c6,TextTrack:W.aJ,TextTrackCue:W.aq,VTTCue:W.aq,TextTrackCueList:W.hU,TextTrackList:W.hV,TimeRanges:W.hY,Touch:W.aK,TouchEvent:W.bu,TouchList:W.i1,TrackDefaultList:W.i2,CompositionEvent:W.b8,FocusEvent:W.b8,TextEvent:W.b8,UIEvent:W.b8,URL:W.iq,VideoTrackList:W.iI,WheelEvent:W.bb,Window:W.cf,DOMWindow:W.cf,CSSRuleList:W.iR,ClientRect:W.dC,DOMRect:W.dC,GamepadList:W.iW,NamedNodeMap:W.dU,MozNamedAttrMap:W.dU,SpeechRecognitionResultList:W.j9,StyleSheetList:W.jd,SVGLength:P.aY,SVGLengthList:P.fx,SVGNumber:P.b2,SVGNumberList:P.he,SVGPointList:P.hm,SVGScriptElement:P.c3,SVGStringList:P.hP,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.b7,SVGTransformList:P.i3,AudioBuffer:P.eD,AudioParamMap:P.eE,AudioTrackList:P.eG,AudioContext:P.bf,webkitAudioContext:P.bf,BaseAudioContext:P.bf,OfflineAudioContext:P.hf,SQLResultSetRowList:P.hK})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.d2.$nativeSuperclassTag="ArrayBufferView"
H.ci.$nativeSuperclassTag="ArrayBufferView"
H.cj.$nativeSuperclassTag="ArrayBufferView"
H.bZ.$nativeSuperclassTag="ArrayBufferView"
H.ck.$nativeSuperclassTag="ArrayBufferView"
H.cl.$nativeSuperclassTag="ArrayBufferView"
H.d3.$nativeSuperclassTag="ArrayBufferView"
W.cm.$nativeSuperclassTag="EventTarget"
W.cn.$nativeSuperclassTag="EventTarget"
W.co.$nativeSuperclassTag="EventTarget"
W.cp.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.lS,[])
else N.lS([])})})()
//# sourceMappingURL=test.dart.js.map
